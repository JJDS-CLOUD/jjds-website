"use client";

import React, { useEffect, useId, useMemo, useRef, useState } from "react";

import Image from "next/image";
import { seoPages } from "../data/services";
import { liveJobs } from "../data/live-jobs";

const BRAND = {
  name: "JJDS INDUSTRIES",
  tagline: "Industrial installation and mechanical works",
  slogan:
    "Mechanical Installation • Structural Steel • Process Pipework • Shutdowns • Water & Wastewater • EPC Contractor Support",
  phone: "0427 626 101",
  email: "operations@jjdsindustries.com.au",
  owner: "James Burnett",
  abn: "39 700 250 157",
  acn: "700 250 157",
};

const phoneClean = BRAND.phone.replaceAll(" ", "");

const latestProjectImages = [
  "/live-jobs/IMG_7819.jpg",
  "/live-jobs/IMG_7818.jpg",
  "/live-jobs/IMG_7817.jpg",
  "/live-jobs/IMG_7816.jpg",
  "/live-jobs/IMG_7814.jpg",
  "/live-jobs/IMG_7813.jpg",
  "/live-jobs/IMG_7812.jpg",
  "/live-jobs/IMG_7811.jpg",
  "/live-jobs/IMG_7806.jpg",
  "/live-jobs/IMG_7805.jpg",
  "/live-jobs/IMG_7795.jpg",
  "/live-jobs/IMG_7794.jpg",
  "/live-jobs/IMG_7792.jpg",
];


const menuGroups = [
  {
    label: "Services",
    items: [
      "/industrial-plant-installation",
      "/mechanical-installation-contractor",
      "/structural-steel-fabrication",
      "/process-pipework-australia",
      "/site-welding-australia",
      "/shutdown-contractors-australia",
      "/industrial-maintenance-australia",
      "/hseq-compliance",
    ]
      .map((path) => seoPages.find((page) => page.path === path))
      .filter(Boolean)
      .map((page) => ({
        label: page.navLabel,
        href: page.path,
        text: page.eyebrow,
      })),
  },
  {
    label: "Industries",
    items: [
      { label: "EPC Contractors", href: "/epc-contractor-support", text: "RFQ, install and compliance support" },
      { label: "Waste Processing", href: "/waste-processing-installation", text: "Depackers, pipework and plant works" },
      { label: "Water Treatment", href: "/water-treatment-installation", text: "Pumps, pipework and equipment install" },
      { label: "Civil Infrastructure", href: "/civil-infrastructure", text: "Bridge, drainage and culvert support" },
      { label: "Remote Site Works", href: "/remote-site-works", text: "Regional and difficult access jobs" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "Why JJDS", href: "/#tier-ready", text: "How we work with clients and site teams" },
      { label: "LIVE JOBS", href: "/live-job-library", text: "Current project photos" },
      { label: "Gallery", href: "/#gallery", text: "Real JJDS site delivery photos" },
      { label: "Compliance", href: "/#compliance", text: "SWMS, permits, records and handover" },
      { label: "Contact", href: "/#contact", text: "Send drawings, photos or an RFQ" },
    ],
  },
];

const capabilityPaths = ["/industrial-plant-installation","/mechanical-installation-contractor","/process-pipework-australia","/structural-steel-fabrication","/shutdown-contractors-australia","/hseq-compliance"];

const capabilityCards = [
  ["01", "Plant installation", "Installation of process equipment, skids, conveyors, pumps, tanks and associated plant."],
  ["02", "Mechanical works", "Equipment assembly, alignment, upgrades, modifications and commissioning support."],
  ["03", "Process pipework", "Stainless steel, carbon steel and HDPE pipework, supports, testing and site installation."],
  ["04", "Structural steel", "Platforms, support frames, pipe racks, stairs, handrails and site modifications."],
  ["05", "Shutdowns and maintenance", "Planned shutdown work, repairs, replacements, plant upgrades and breakdown support."],
  ["06", "Site documentation", "SWMS, ITPs, permits, inspections, progress records and handover documentation."],
];

const industries = [
  "Waste processing & recycling", "Water treatment & pump stations", "Industrial manufacturing", "Civil infrastructure", "Councils & public assets", "Remote and regional projects", "EPC contractors", "Consulting engineers", "Shutdown and maintenance works"
];

const tierProof = [
  { title: "Safe, organised work", text: "SWMS, permits, pre-starts and site records are prepared for the job and kept current while the work is underway." },
  { title: "Experienced supervision", text: "Practical site supervision with a focus on access, sequencing, lifts, shutdowns, modifications and getting the job built." },
  { title: "One contractor, broad capability", text: "Mechanical installation, structural steel, pipework, field welding and associated site works can be coordinated through one team." },
  { title: "Clear communication", text: "Straight answers on scope, inclusions, exclusions, changes, progress and what is needed next." },
];

const deliverySteps = [
  ["01", "Review the job", "We review the drawings, scope, access, interfaces and programme before work starts."],
  ["02", "Plan the work", "We set the sequence, labour, plant, materials, permits and documentation required for the job."],
  ["03", "Mobilise", "Supervision, trades, tools and site requirements are organised before arriving on site."],
  ["04", "Install", "The work is carried out with day-to-day coordination around other trades and site conditions."],
  ["05", "Check the work", "Inspections, testing, defects and commissioning items are worked through as the job progresses."],
  ["06", "Hand over", "Completion records, marked-up information and outstanding items are closed out with the client."],
];

const trustStats = [
  ["Australia-wide", "Project mobilisation"],
  ["Mechanical", "Plant and equipment installation"],
  ["Structural", "Steel and access works"],
  ["Process", "Pipework and site systems"],
];

const complianceItems = [
  "Project-specific SWMS and risk controls",
  "Inspection and Test Plans where required",
  "Permits, pre-starts and daily site records",
  "Material and weld records where required",
  "Progress photos and job reporting",
  "Defect closeout and handover records",
];


function ServiceGallery({ page }) {
  if (!page.gallery?.length) return null;

  return (
    <section className="border-y border-[#C9CDD2]/15 bg-[#050505] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionLabel light>Project photography</SectionLabel>

        <div className="mt-4 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-white md:text-6xl">
            {page.galleryTitle || `${page.title} Gallery`}
          </h2>

          <p className="text-lg leading-8 text-slate-300">
            {page.galleryIntro ||
              "Real JJDS project photography showing installation, fabrication and site delivery capability."}
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {page.gallery.map((photo, index) => (
            <figure
              key={`${photo.src}-${index}`}
              className="group overflow-hidden rounded-[1.8rem] border border-[#C9CDD2]/20 bg-[#111827] shadow-[0_20px_55px_rgba(0,0,0,0.45)]"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full border border-[#99C8FF]/35 bg-black/60 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-[#C9E3FF] backdrop-blur">
                  {photo.label}
                </span>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children, light = false }) {
  return <p className={`text-xs font-semibold tracking-[0.34em] ${light ? "text-[#99C8FF]" : "text-[#005BFF]"}`}>{children}</p>;
}

function GradientButton({ href, children, className = "", onClick }) {
  return <a href={href} onClick={onClick} className={`inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#003C8F] via-[#005BFF] to-[#2F8DFF] px-7 py-3.5 text-sm font-semibold tracking-[0.12em] text-white shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-2xl ${className}`}>{children}</a>;
}

function GhostButton({ href, children, className = "", onClick }) {
  return <a href={href} onClick={onClick} className={`inline-flex items-center justify-center rounded-full border border-[#C9CDD2]/45 bg-[#111827]/85 px-7 py-3.5 text-sm font-semibold tracking-[0.12em] text-white backdrop-blur transition hover:border-[#99C8FF] hover:bg-[#1A1D21] hover:text-[#C9E3FF] ${className}`}>{children}</a>;
}

function EnquiryForm({ compact = false, pageTitle = "Website enquiry" }) {
  const id = useId();
  const [form, setForm] = useState({ name: "", contact: "", location: "", message: "" });
  const [status, setStatus] = useState("");
  const body = useMemo(() => `Name / Company: ${form.name}\nEmail / Phone: ${form.contact}\nProject Location: ${form.location}\n\nJob Details:\n${form.message}`, [form]);
  const mailtoLink = `mailto:${BRAND.email}?subject=${encodeURIComponent(pageTitle + " - JJDS Industries")}&body=${encodeURIComponent(body)}`;
  const update = (field) => (event) => { setForm({ ...form, [field]: event.target.value }); setStatus(""); };
  const copyEnquiry = async () => {
    try {
      await navigator.clipboard.writeText(`To: ${BRAND.email}\nSubject: ${pageTitle}\n\n${body}`);
      setStatus("Enquiry copied. Paste it into your email and send it to JJDS.");
    } catch { setStatus("Copy is unavailable. Select your details and email " + BRAND.email + "."); }
  };
  const fieldClass = "w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-[#99C8FF]";
  return (
    <form className={`rounded-[2rem] bg-[#111827] ${compact ? "p-5" : "p-6 md:p-8"} shadow-2xl`} onSubmit={(event) => {
      event.preventDefault(); window.location.href = mailtoLink;
      setStatus("Your email app should open with these details. Attach any drawings or photos, then send the email. If nothing opens, copy your enquiry below.");
    }}>
      <p className="text-xs font-semibold tracking-[0.3em] text-[#C9E3FF]">Project enquiry</p>
      <h3 className="mt-2 text-3xl font-semibold text-white">Tell us about the job</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">This prepares an email in your email app. Add drawings or photos before sending.</p>
      <div className="mt-6 grid gap-4">
        {[
          ["name", "Name / company", "name", true],
          ["contact", "Email or phone", "email", true],
          ["location", "Project location", "address-level2", false],
        ].map(([field, label, autoComplete, required]) => (
          <label key={field} htmlFor={id + field} className="grid gap-2 text-sm font-medium text-slate-200">
            {label}{required ? " *" : " (optional)"}
            <input id={id + field} name={field} autoComplete={autoComplete} required={required} maxLength={150} className={fieldClass} value={form[field]} onChange={update(field)} />
          </label>
        ))}
        <label htmlFor={id + "message"} className="grid gap-2 text-sm font-medium text-slate-200">
          Job details *
          <textarea id={id + "message"} name="message" required maxLength={2000} className={fieldClass + " min-h-32"} placeholder="Scope, timing and anything we need to know" value={form.message} onChange={update("message")} />
        </label>
        <button type="submit" className="rounded-xl bg-[#005BFF] px-6 py-4 font-semibold text-white transition hover:bg-[#003C8F]">Prepare enquiry email →</button>
        <button type="button" onClick={copyEnquiry} className="min-h-11 rounded-xl border border-white/25 px-4 py-3 text-sm font-medium text-white hover:bg-white/10">Copy enquiry instead</button>
        <p role="status" aria-live="polite" className="text-sm leading-6 text-[#C9E3FF]">{status}</p>
        <p className="break-words text-xs leading-5 text-slate-400">Or email <a href={`mailto:${BRAND.email}`} className="underline">{BRAND.email}</a>. Your enquiry is sent only when you send the email.</p>
      </div>
    </form>
  );
}

function DropdownMenu({ group }) {
  const [open, setOpen] = useState(false);
  const root = useRef(null);
  const trigger = useRef(null);
  const id = useId();
  useEffect(() => {
    if (!open) return;
    const dismiss = (event) => { if (!root.current?.contains(event.target)) setOpen(false); };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, [open]);
  return (
    <div ref={root} className="relative" onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }} onKeyDown={(event) => {
      if (event.key === "Escape") { setOpen(false); trigger.current?.focus(); }
    }}>
      <button ref={trigger} type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10">
        {group.label}<span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div id={id} hidden={!open} className="absolute right-0 top-full z-50 mt-2 max-h-[70vh] w-[340px] overflow-y-auto rounded-2xl border border-white/15 bg-[#0B1118] p-3 shadow-2xl">
        {group.items.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 hover:bg-[#005BFF]">
            <span className="block text-sm font-semibold text-white">{item.label}</span>
            <span className="mt-1 block text-xs leading-5 text-slate-300">{item.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMenu = () => setMobileOpen(false);
  const menuButton = useRef(null);
  useEffect(() => {
    if (!mobileOpen) return;
    const closeOnEscape = (event) => { if (event.key === "Escape") { closeMenu(); menuButton.current?.focus(); } };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [mobileOpen]);
  return (
    <><a className="skip-link" href="#main-content">Skip to content</a><header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/90 shadow-2xl shadow-black/40 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-[1720px] items-center justify-between gap-3 px-4 py-3 sm:gap-5 sm:px-5 sm:py-4 md:px-10">
        <a href="/" className="flex min-w-0 items-center gap-3 sm:gap-5" onClick={closeMenu}>
          <img src="/jjds-logo.png" alt="JJDS Industries logo" className="h-16 w-auto object-contain sm:h-20 md:h-28 xl:h-36" />
          <div className="hidden min-w-0 sm:block">
            <p className="text-2xl font-semibold tracking-[0.24em] text-white md:text-3xl xl:text-[2.4rem] xl:leading-none">{BRAND.name}</p>
            <p className="mt-2 max-w-[720px] text-[11px] font-semibold tracking-[0.38em] text-[#C9E3FF] md:text-sm">{BRAND.tagline}</p>
          </div>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-3 xl:flex">
          {menuGroups.map((group) => <DropdownMenu key={group.label} group={group} />)}
          <GradientButton href="/#contact" className="ml-2 px-8 py-4 text-base">Get a Quote</GradientButton>
        </nav>

        <button ref={menuButton} aria-expanded={mobileOpen} aria-controls="mobile-navigation" type="button" onClick={() => setMobileOpen((open) => !open)} className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-[11px] font-semibold tracking-[0.18em] text-white xl:hidden" aria-label="Toggle navigation menu">{mobileOpen ? "Close" : "Menu"}</button>
      </div>
      {mobileOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="max-h-[calc(100svh-110px)] overflow-y-auto border-t border-white/10 bg-[#050505]/98 px-4 py-4 sm:px-5 sm:py-5 xl:hidden">
          <div className="grid gap-4">
            {menuGroups.map((group) => (
              <div key={group.label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-3">
                <p className="px-2 pb-2 text-xs font-semibold tracking-[0.28em] text-[#C9E3FF]">{group.label}</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <a key={item.href + item.label} href={item.href} onClick={closeMenu} className="rounded-2xl bg-white/10 px-4 py-3">
                      <span className="block font-semibold text-white">{item.label}</span>
                      <span className="mt-1 block text-xs leading-5 text-slate-200">{item.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <GradientButton href="/#contact" className="w-full" onClick={closeMenu}>Get Quote</GradientButton>
          </div>
        </nav>
      )}
    </header></>
  );
}

function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="bg-[#050505] text-white">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,91,255,0.18),transparent_50%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <SectionLabel light>Industrial installation · Australia-wide</SectionLabel>
              <h1 className="mt-6 text-[clamp(2.6rem,6vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.05em]">Industrial projects.<br /><span className="text-[#99C8FF]">Built properly.</span></h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Mechanical installation, structural steel and process pipework. Practical crews, direct supervision and organised delivery from mobilisation to handover.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <GradientButton href="/#contact">Discuss your project →</GradientButton>
                <GhostButton href="/JJDS-Capability-Statement.pdf">Capability statement</GhostButton>
              </div>
              <a href={`tel:${phoneClean}`} className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-slate-300 hover:text-white">Speak directly with JJDS · {BRAND.phone}</a>
            </div>
            <a href="/live-job-library" className="group relative block min-h-[360px] overflow-hidden rounded-2xl border border-white/15 sm:min-h-[480px]">
              <Image src={liveJobs[0].coverImage} alt="Treatment vessel being lifted into position on the JJDS Huntly project" fill sizes="(min-width: 1024px) 45vw, 100vw" priority className="object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs font-semibold tracking-widest text-[#99C8FF]">ON SITE / {liveJobs[0].location}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{liveJobs[0].title}</p>
                <span className="mt-4 block text-sm font-medium text-white">View project photos →</span>
              </div>
            </a>
          </div>
        </section>

        <section className="relative px-4 py-14 sm:px-5 sm:py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#07131A] to-black" />
          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-5 md:grid-cols-4">
              {trustStats.map(([value, label], index) => <article key={value} className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#003C8F]/80 via-[#005BFF]/25 to-[#111827] p-6 shadow-2xl"><span className="text-xs font-semibold tracking-[0.28em] text-[#C9E3FF]">0{index + 1}</span><h2 className="mt-8 text-3xl font-semibold tracking-[-0.02em]">{value}</h2><p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-slate-300">{label}</p></article>)}
            </div>
          </div>
        </section>

        <section id="services" className="relative overflow-hidden px-4 py-16 text-slate-950 sm:px-5 sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(47,141,255,0.18),transparent_35%),linear-gradient(135deg,#020617,#07131A_55%,#020617)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#07131A]/88 to-[#020617]/82" />
          <div className="relative mx-auto max-w-7xl">
            <SectionLabel light>What we do</SectionLabel>
            <h2 className="mt-3 max-w-5xl text-4xl font-semibold tracking-[-0.015em] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.9)] md:text-6xl">Practical support for industrial projects.</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {capabilityCards.map(([num, title, text], index) => <a href={capabilityPaths[index]} key={title} className="relative overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white p-7 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"><div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#005BFF] text-sm font-semibold text-white">{num}</div><h3 className="text-2xl font-black tracking-tight">{title}</h3><p className="mt-4 leading-7 text-slate-600">{text}</p><span className="mt-5 inline-block text-sm font-semibold text-[#005BFF]">Explore service →</span></a>)}
            </div>
          </div>
        </section>

        <section id="tier-ready" className="bg-[#111827] px-4 py-16 sm:px-5 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div><SectionLabel light>Working with principal contractors</SectionLabel><h2 className="mt-3 text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl">Easy to work with on site.</h2><p className="mt-6 text-lg leading-8 text-slate-300">We take on defined packages of work and manage them properly from mobilisation through to handover. That means good supervision, organised work fronts, clear communication and no guessing about who is responsible for what.</p></div>
              <div className="grid gap-5 sm:grid-cols-2">{tierProof.map((item) => <article key={item.title} className="rounded-[2rem] border border-white/10 bg-white/10 p-7"><h3 className="text-2xl font-black">{item.title}</h3><p className="mt-4 leading-7 text-slate-300">{item.text}</p></article>)}</div>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 px-5 py-24 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>How we work</SectionLabel>
            <h2 className="mt-3 max-w-5xl text-4xl font-semibold tracking-[-0.015em] md:text-6xl">From quote to handover.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">We review the job, plan it properly, keep the client informed and close the work out cleanly.</p>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {deliverySteps.map(([num, title, text]) => <article key={num} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-lg"><span className="text-sm font-semibold text-[#005BFF]">{num}</span><h3 className="mt-5 text-2xl font-black">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section id="industries" className="bg-white px-4 py-16 text-slate-950 sm:px-5 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>Industries served</SectionLabel><h2 className="mt-3 max-w-5xl text-4xl font-semibold tracking-[-0.015em] md:text-6xl">Industrial work across a range of sectors.</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{industries.map((item) => <div key={item} className="rounded-[2rem] bg-slate-100 p-6 text-lg font-semibold text-slate-800">✓ {item}</div>)}</div>
          </div>
        </section>

        <section className="bg-black px-4 py-16 sm:px-5 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionLabel light>Services</SectionLabel><h2 className="mt-3 max-w-5xl text-4xl font-semibold tracking-[-0.015em] md:text-6xl">More detail on our services.</h2>
            <details className="mt-8 rounded-2xl border border-white/15 p-5"><summary className="cursor-pointer py-2 text-lg font-semibold">Explore all 17 specialist services</summary><div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{seoPages.map((page) => <a key={page.path} href={page.path} className="group rounded-[2rem] border border-white/10 bg-white/10 p-6 transition hover:-translate-y-1 hover:bg-white/15"><p className="text-xs font-semibold tracking-[0.25em] text-[#C9E3FF]">{page.eyebrow}</p><h3 className="mt-4 text-2xl font-black tracking-tight text-white">{page.title}</h3><p className="mt-4 leading-7 text-slate-300">{page.hero}</p><span className="mt-6 inline-block text-sm font-semibold tracking-widest text-[#C9E3FF]">View service →</span></a>)}</div></details>
          </div>
        </section>

        <section id="gallery" className="border-y border-white/10 bg-[#070B12] px-5 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div><SectionLabel light>Project gallery</SectionLabel><h2 className="mt-3 text-4xl font-semibold md:text-6xl">Real work. On site.</h2><p className="mt-4 max-w-2xl leading-7 text-slate-300">{liveJobs[0].title} · {liveJobs[0].location}. Explore the installation and site works in our project library.</p></div>
              <GhostButton href="/live-job-library">View project library →</GhostButton>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {latestProjectImages.slice(0, 6).map((image, index) => (
                <a key={image} href="/live-job-library" className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                  <Image src={image} alt={`Huntly mechanical installation — site photo ${index + 1}`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="remote" className="bg-[#111827] px-4 py-16 sm:px-5 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div><SectionLabel light>Remote / regional</SectionLabel><h2 className="mt-3 text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl">Regional and difficult-access work.</h2><p className="mt-6 text-lg leading-8 text-slate-300">JJDS can mobilise to regional and remote sites for installation, shutdowns, upgrades and repair work where access and logistics need to be planned properly.</p></div>
            <div className="grid gap-5">
              <a href="/live-job-library" className="group relative min-h-72 overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#0B1118] shadow-2xl">
                <img src={latestProjectImages[8]} alt="JJDS current industrial project works" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </a>
            </div>
          </div>
        </section>

        <section id="compliance" className="bg-white px-4 py-16 text-slate-950 sm:px-5 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div><SectionLabel>Safety and quality</SectionLabel><h2 className="mt-3 text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl">The paperwork is part of the job.</h2><p className="mt-6 text-lg leading-8 text-slate-600">SWMS, permits, inspections and handover records are managed alongside the work so the site team and client have what they need.</p></div>
            <div className="grid gap-4 sm:grid-cols-2">{complianceItems.map((item) => <div key={item} className="rounded-[2rem] bg-slate-100 p-6 text-lg font-semibold text-slate-800">✓ {item}</div>)}</div>
          </div>
        </section>

        <section id="contact" className="bg-white px-4 py-16 text-slate-950 sm:px-5 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div><SectionLabel>Talk to us about your job</SectionLabel><h2 className="mt-3 text-4xl font-semibold tracking-[-0.015em] md:text-6xl">Send through the job details.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Send us the drawings, photos or scope. We will review it and come back to you with what we can take on, what we need clarified and the next step.</p><div className="mt-8 grid gap-4"><a href={`tel:${phoneClean}`} className="rounded-3xl bg-slate-100 p-5 font-black transition hover:bg-blue-50">PH {BRAND.phone}</a><a href={`mailto:${BRAND.email}`} className="break-words rounded-3xl bg-slate-100 p-5 font-black transition hover:bg-blue-50">EM {BRAND.email}</a></div></div>
            <EnquiryForm pageTitle="Website enquiry" />
          </div>
        </section>
      </main>
      <Footer />
      <MobileButtons />
    </>
  );
}

function ServicePage({ page }) {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="bg-[#050505] text-white">
        <section className="relative overflow-hidden px-4 py-14 sm:px-5 sm:py-20 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,141,255,0.22),transparent_34%),linear-gradient(135deg,#050505,#09111c_55%,#050505)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,91,255,0.30),transparent_34%),linear-gradient(90deg,rgba(0,0,0,0.94),rgba(0,0,0,0.62),rgba(0,0,0,0.9))]" />
          <div className="relative mx-auto grid max-w-7xl gap-8 pt-4 sm:gap-10 sm:pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:pt-12">
            <div><SectionLabel light>{page.eyebrow}</SectionLabel><h1 className="mt-4 text-[clamp(2.55rem,12vw,7rem)] font-semibold leading-[0.96] tracking-[-0.06em] sm:mt-5 sm:tracking-[-0.075em]">{page.title}</h1><p className="mt-5 max-w-3xl rounded-[1.4rem] border border-white/10 bg-black/40 p-5 text-base leading-7 text-white/90 backdrop-blur sm:mt-7 sm:rounded-3xl sm:p-6 sm:text-lg sm:leading-8 md:text-xl">{page.hero}</p><div className="mt-8 flex flex-wrap gap-4"><GradientButton href="/#contact">Send RFQ / drawings</GradientButton><GhostButton href={`tel:${phoneClean}`}>Call now</GhostButton></div></div>
            <EnquiryForm compact pageTitle={page.title} />
          </div>
        </section>
        <section className="bg-white px-4 py-16 text-slate-950 sm:px-5 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div><SectionLabel>Scope and capability</SectionLabel><h2 className="mt-3 text-4xl font-semibold tracking-[-0.015em] md:text-6xl">Site capability that matches the work.</h2><p className="mt-6 text-lg leading-8 text-slate-600">{page.description}</p></div>
            <div className="grid gap-4">{page.bullets.map((item) => <div key={item} className="rounded-[1.5rem] bg-slate-100 p-5 text-lg font-semibold text-slate-800">✓ {item}</div>)}</div>
          </div>
        </section>

        <ServiceGallery page={page} />



        <section className="bg-[#111827] px-4 py-16 sm:px-5 sm:py-24">
          <div className="mx-auto max-w-7xl"><SectionLabel light>Best fit sectors</SectionLabel><h2 className="mt-3 max-w-4xl text-4xl font-semibold tracking-[-0.015em] md:text-6xl">Where our crews are a good fit.</h2><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{page.sectors.map((item) => <div key={item} className="rounded-[2rem] border border-white/10 bg-white/10 p-6 text-center font-semibold text-white">{item}</div>)}</div></div>
        </section>
        <section className="bg-slate-100 px-5 py-24 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>Delivery approach</SectionLabel>
            <h2 className="mt-3 max-w-5xl text-4xl font-semibold tracking-[-0.015em] md:text-6xl">Plan it. Build it. Close it out.</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {deliverySteps.map(([num, title, text]) => <article key={num} className="rounded-[2rem] bg-white p-7 shadow-lg"><span className="text-sm font-semibold text-[#005BFF]">{num}</span><h3 className="mt-4 text-2xl font-black">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}
            </div>
          </div>
        </section>
        <section className="bg-[#111827] px-4 py-16 sm:px-5 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionLabel light>Project controls</SectionLabel>
            <h2 className="mt-3 max-w-4xl text-4xl font-semibold tracking-[-0.015em] md:text-6xl">Safety and quality kept with the job.</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{complianceItems.map((item) => <div key={item} className="rounded-[1.7rem] border border-white/10 bg-white/10 p-6 font-semibold text-white">✓ {item}</div>)}</div>
          </div>
        </section>
        <section className="bg-white px-4 py-16 text-slate-950 sm:px-5 sm:py-24"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]"><div><SectionLabel>Why JJDS</SectionLabel><h2 className="mt-3 text-4xl font-semibold tracking-[-0.015em] md:text-6xl">A practical contractor you can deal with directly.</h2><p className="mt-6 text-lg leading-8 text-slate-600">JJDS provides experienced trades with direct supervision and straightforward communication. We work through site issues as they come up and keep the client informed.</p><div className="mt-8 flex flex-wrap gap-4"><GradientButton href="/#contact">Start enquiry</GradientButton><a href="/" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold tracking-[0.12em] text-white">Back home</a></div></div><div className="min-h-96 rounded-[2rem] border border-slate-200 bg-[radial-gradient(circle_at_20%_20%,rgba(47,141,255,0.16),transparent_35%),linear-gradient(135deg,#eef4fb,#ffffff)] shadow-2xl" /></div></section>
      </main>
      <Footer />
      <MobileButtons />
    </>
  );
}

function Footer() {
  return <footer className="border-t border-white/10 bg-[#050505] px-5 py-14 text-slate-300">
    <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
      <div><img src="/jjds-logo.png" alt="JJDS Industries" className="h-28 w-auto object-contain" /><p className="mt-5 max-w-sm leading-7 text-slate-400">Integrated industrial construction, mechanical installation, structural steel, process pipework, shutdown and maintenance support across Australia.</p></div>
      <div><p className="font-semibold tracking-[0.18em] text-white">Capabilities</p><div className="mt-5 grid gap-3 text-sm">{seoPages.slice(0, 6).map((page) => <a key={page.path} href={page.path} className="hover:text-[#99C8FF]">{page.navLabel}</a>)}</div></div>
      <div><p className="font-semibold tracking-[0.18em] text-white">Company</p><div className="mt-5 grid gap-3 text-sm"><a href="/#tier-ready" className="hover:text-[#99C8FF]">Why JJDS</a><a href="/#gallery" className="hover:text-[#99C8FF]">Project Gallery</a><a href="/#compliance" className="hover:text-[#99C8FF]">HSEQ & Quality</a><a href="/#contact" className="hover:text-[#99C8FF]">Request a Quote</a></div></div>
      <div><p className="font-semibold tracking-[0.18em] text-white">Contact</p><div className="mt-5 grid gap-3 text-sm"><a href={`tel:${phoneClean}`} className="hover:text-[#99C8FF]">{BRAND.phone}</a><a href={`mailto:${BRAND.email}`} className="break-all hover:text-[#99C8FF]">{BRAND.email}</a><p>Australia</p><p>Nationwide mobilisation</p></div></div>
    </div>
    <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 md:flex-row md:justify-between"><p>© 2026 {BRAND.name}. All rights reserved.</p><p>JJDS Industries Pty Ltd • ABN {BRAND.abn} • ACN {BRAND.acn}</p></div>
  </footer>;
}

function MobileButtons() {
  return <div className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 grid grid-cols-2 gap-2 rounded-[1.2rem] border border-white/10 bg-[#050505]/90 p-2 shadow-2xl backdrop-blur-xl md:hidden"><a href={`tel:${phoneClean}`} className="flex min-h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-[#003C8F] via-[#005BFF] to-[#2F8DFF] px-4 py-3 text-sm font-semibold text-white">Call JJDS</a><a href={`sms:${phoneClean}?&body=${encodeURIComponent("Hi JJDS, I would like to enquire about a job.")}`} className="flex min-h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white">SMS JJDS</a></div>;
}

export default function App({ path = "/" }) {
  const page = seoPages.find((item) => item.path === path || item.aliases?.includes(path));
  if (page) return <ServicePage page={page} />;
  return <HomePage />;
}
