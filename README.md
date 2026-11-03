# JJDS Industries website

Next.js website for https://www.jjdsindustries.com.au, deployed through the existing Vercel configuration.

## Local development

Use Node.js 24.

```sh
npm ci
npm run dev
```

## Production verification

```sh
npm run build
npm run start
```

Check the homepage, `/live-job-library`, service pages, the capability statement PDF, and `/sitemap.xml`. Confirm that an unknown URL returns 404 and `/process-pipework-melbourne` redirects to `/process-pipework-australia`.

Use Tab, Enter and Escape to check desktop menus. On mobile, check the menu, contact section and fixed call/SMS buttons at 320px and 390px. The enquiry form requires a name, contact and job details. It prepares an email for the visitor to send; it does not submit to a backend. Copy enquiry is the fallback for visitors without an email app.

## Automated regression checks

After a production build, run:

```sh
npx playwright install chromium
npm run test:browser
```

The runner starts and stops its own production server on port 3103. Set `TEST_PORT` to change it or `CHROMIUM_EXECUTABLE_PATH` to use an installed Chromium binary. Checks cover all 17 service routes, metadata, redirects, 404s, navigation at 320/390/768/1280/1440px, direct contact links and browser history, enquiry validation, encoded email preparation, clipboard success/failure and no-JavaScript content. Screenshots are saved under ignored `test-results/`.

Email preparation is tested without sending an email. Delivery depends on the visitor sending it through their email app. External SharePoint image access depends on the existing sharing permissions.

## Content and images

- `data/services.js`: service content shared by rendered pages and server metadata. Aliases redirect to the canonical service URL.
- `data/live-jobs.js`: current project details and approved project photography.
- `src/App.jsx`: homepage, service pages, navigation and enquiry UI.
- `src/index.css`: global styling, keyboard focus and mobile layout.
- `public/JJDS-Capability-Statement.pdf`: downloadable capability statement.

Pages render HTML on the server; JavaScript enhances menus and enquiry preparation. The homepage retains the current split hero, flat styling and five section tabs. The tabs use URL hashes, support browser history and direct contact links, and expose every section when JavaScript is disabled. The hero uses responsive Next.js image optimisation; the project library retains the latest main-branch Huntly photography and SharePoint links.

Changes should be reviewed through a pull request before merging into `main` and the existing production deployment.

