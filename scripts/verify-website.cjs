const assert = require('node:assert/strict');
const { spawn } = require('node:child_process');
const { readFileSync, mkdirSync } = require('node:fs');
const { chromium } = require('playwright');

// Run against the production build so SSR, redirects and HTTP status codes are tested.
const port = Number(process.env.TEST_PORT || 3103);
const origin = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, [require.resolve('next/dist/bin/next'), 'start', '-p', String(port), '-H', '127.0.0.1'], { stdio: ['ignore', 'pipe', 'pipe'] });
let serverOutput = '';
server.stdout.on('data', (chunk) => { serverOutput += chunk; });
server.stderr.on('data', (chunk) => { serverOutput += chunk; });
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const services = [...readFileSync('data/services.js', 'utf8').matchAll(/^\s+path: "([^"]+)"/gm)].map((match) => match[1]);
const errors = [];
let browser;

async function run() {
  for (let attempt = 0; attempt < 100; attempt++) {
    try { if ((await fetch(origin)).ok) break; } catch {}
    if (attempt === 99) throw new Error(`Production server did not start: ${serverOutput}`);
    await pause(100);
  }
  assert.equal(services.length, 17);
  for (const path of ['/', '/live-job-library', ...services]) {
    const response = await fetch(origin + path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.match(html, /<h1[ >]/, `Server-rendered heading: ${path}`);
    assert.match(html, /rel="canonical"/, `Canonical: ${path}`);
  }
  for (const [alias, target] of [['process-pipework-melbourne', 'process-pipework-australia'], ['site-welding-victoria', 'site-welding-australia'], ['industrial-maintenance-victoria', 'industrial-maintenance-australia']]) {
    const response = await fetch(`${origin}/${alias}`, { redirect: 'manual' });
    assert.equal(response.status, 308, alias);
    assert.equal(response.headers.get('location'), `/${target}`);
  }
  assert.equal((await fetch(origin + '/missing-page')).status, 404);
  assert.equal((await fetch(origin + '/missing/nested-page')).status, 404);
  const sitemap = await (await fetch(origin + '/sitemap.xml')).text();
  for (const path of services) assert.ok(sitemap.includes(path));
  console.log('PASS: server-rendered homepage, library and 17 services; canonicals, sitemap, three redirects and 404s');

  browser = await chromium.launch({
    headless: true,
    executablePath: process.env.CHROMIUM_EXECUTABLE_PATH || undefined,
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--single-process'],
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  page.on('pageerror', (error) => errors.push(error.message));
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: {
      writeText: async (text) => { if (window.failClipboard) throw new Error('denied'); window.copiedEnquiry = text; },
    }});
  });
  for (const width of [320, 390, 768, 1280, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(origin);
    await page.getByRole('heading', { level: 1 }).waitFor();
    assert.match(await page.locator('h1').innerText(), /Industrial work/);
    for (const label of ['Capabilities', 'Industries', 'Why JJDS', 'Contact', 'Overview']) {
      await page.getByRole('navigation', { name: 'Homepage sections' }).getByRole('link', { name: label, exact: true }).click();
      const id = label === 'Why JJDS' ? 'why' : label.toLowerCase();
      await page.locator(`#${id}:not([hidden])`).waitFor();
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Overflow at ${width} / ${id}`);
      assert.equal(await page.locator('[data-home-panel]:not([hidden])').count(), 1);
    }
    if (width < 1280) {
      const toggle = page.getByRole('button', { name: 'Toggle navigation menu' });
      await toggle.click();
      assert.equal(await toggle.getAttribute('aria-expanded'), 'true');
      await page.keyboard.press('Escape');
      assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
      assert.ok(await toggle.evaluate((element) => element === document.activeElement));
      await toggle.click();
      await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Contact', exact: true }).click();
      assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
      await page.locator('#contact:not([hidden])').waitFor();
    } else {
      const menu = page.getByRole('navigation', { name: 'Main navigation' }).getByRole('button', { name: 'Services' });
      await menu.focus();
      await page.keyboard.press('Enter');
      assert.equal(await menu.getAttribute('aria-expanded'), 'true');
      await page.keyboard.press('Tab');
      assert.equal(await page.locator(':focus').getAttribute('href'), '/industrial-plant-installation');
      await page.keyboard.press('Escape');
      assert.equal(await menu.getAttribute('aria-expanded'), 'false');
      assert.ok(await menu.evaluate((element) => element === document.activeElement));
      await menu.click();
      await page.locator('h1').click();
      assert.equal(await menu.getAttribute('aria-expanded'), 'false');
    }
    console.log(`PASS: ${width}px homepage sections, layout and navigation`);
  }
  await page.goto(origin + '/#contact');
  await page.locator('#contact:not([hidden])').waitFor();
  await page.getByRole('link', { name: 'Capabilities', exact: true }).first().click();
  await page.goBack();
  await page.locator('#contact:not([hidden])').waitFor();
  await page.goForward();
  await page.locator('#capabilities:not([hidden])').waitFor();
  await page.goto(origin + '/#contact');
  const form = page.locator('#contact form');
  await form.locator('button[type=submit]').click();
  assert.equal(await form.evaluate((element) => element.checkValidity()), false);
  await form.getByLabel('Name / company').fill('Test & Company');
  await form.getByLabel('Email or phone').fill('test@example.com');
  await form.getByLabel('Project location').fill('Huntly');
  await form.getByLabel('Job details').fill('Pipework & installation\nDrawings to follow.');
  await form.getByRole('button', { name: 'Copy enquiry instead' }).click();
  assert.match(await form.getByRole('status').innerText(), /Enquiry copied/);
  assert.match(await page.evaluate(() => window.copiedEnquiry), /Test & Company/);
  const cdp = await context.newCDPSession(page);
  await cdp.send('Page.enable');
  const mailto = new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('No mailto navigation')), 5000);
    cdp.on('Page.frameRequestedNavigation', (event) => { if (event.url.startsWith('mailto:')) { clearTimeout(timeout); resolve(event.url); } });
  });
  await form.locator('button[type=submit]').click();
  const prepared = new URL(await mailto);
  assert.equal(prepared.pathname, 'operations@jjdsindustries.com.au');
  assert.equal(prepared.searchParams.get('subject'), 'Website enquiry - JJDS Industries');
  assert.match(prepared.searchParams.get('body'), /Test & Company/);
  assert.match(prepared.searchParams.get('body'), /Pipework & installation\nDrawings to follow/);
  assert.match(await form.getByRole('status').innerText(), /then send the email/);
  await page.evaluate(() => { window.failClipboard = true; });
  await form.getByRole('button', { name: 'Copy enquiry instead' }).click();
  assert.match(await form.getByRole('status').innerText(), /Copy is unavailable/);
  await page.goto(origin + '/process-pipework-australia');
  await page.getByLabel('Name / company').waitFor();
  await page.getByLabel('Name / company').fill('Service test');
  await page.getByRole('button', { name: 'Copy enquiry instead' }).click();
  assert.match(await page.evaluate(() => window.copiedEnquiry), /Process Pipework Installation Australia/);
  console.log('PASS: direct contact link, history navigation, required fields, encoded email details, clipboard success/failure and service enquiry context');

  const noJS = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const plain = await noJS.newPage();
  await plain.goto(origin);
  for (const id of ['overview', 'capabilities', 'industries', 'why', 'contact']) assert.ok(await plain.locator(`#${id}`).isVisible(), `No-JS panel ${id}`);
  assert.ok(await plain.locator('#contact noscript a').isVisible());
  await plain.goto(origin + '/process-pipework-australia');
  assert.match(await plain.locator('h1').innerText(), /Process Pipework/);
  console.log('PASS: homepage content, contact fallback and service content without JavaScript');
  mkdirSync('test-results', { recursive: true });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(origin);
  await page.screenshot({ path: 'test-results/home-desktop.png', fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(origin + '/#contact');
  await page.locator('#contact:not([hidden])').waitFor();
  await page.screenshot({ path: 'test-results/contact-mobile.png', fullPage: true });
  assert.deepEqual(errors, [], 'Browser runtime errors');
  console.log('PASS: no browser runtime errors; desktop and mobile screenshots saved');
}

run().catch((error) => { console.error(error); process.exitCode = 1; }).finally(async () => {
  if (browser) await browser.close();
  server.kill();
});
