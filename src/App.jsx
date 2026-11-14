"use client";

import React, { useEffect, useId, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { seoPages } from "../data/services";

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
      { label: "Why JJDS", href: "/#why", text: "How we work with clients and site teams" },
      { label: "LIVE JOBS", href: "/live-job-library", text: "Current project photos" },
      { label: "Gallery", href: "/live-job-library", text: "Real JJDS site delivery photos" },
      { label: "Compliance", href: "/hseq-compliance", text: "SWMS, permits, records and handover" },
      { label: "Contact", href: "/#contact", text: "Send drawings, photos or an RFQ" },
    ],
  },
];

const capabilityPaths = ["/industrial-plant-installation", "/mechanical-installation-contractor", "/process-pipework-australia", "/structural-steel-fabrication", "/shutdown-contractors-australia", "/hseq-compliance"];

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


const galleryImages = [];


const bridgeConditionGallery = [];

function BridgeConditionGallery() {
  return (
    <section className="border-y border-[#C9CDD2]/15 bg-[#050505] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionLabel light>Bridge replacement project</SectionLabel>

        <div className="mt-4 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-white md:text-6xl">
              Existing Structure Condition Assessment
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-300">
              These photographs were taken during a bridge replacement project
              to document the condition of the existing structural steel before
              demolition and replacement works.
            </p>
            <p className="mt-4 leading-7 text-slate-400">
              The inspection identified corrosion, pitting, coating failure and
              areas of deterioration requiring engineering review, replacement
              planning and controlled site execution.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {bridgeConditionGallery.map((photo) => (
            <figure
              key={photo.src}
              className="group overflow-hidden border-y border-white/10 bg-[#111827]"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={photo.src}
                  alt={`${photo.label} bridge corrosion condition`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 border-l-2 border-[#2F8DFF] pl-3 text-xs font-semibold tracking-[0.12em] text-white">
                  {photo.label}
                </span>
              </div>

              <figcaption className="p-6">
                <h3 className="text-2xl font-semibold text-white">{photo.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{photo.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 border-y border-[#005BFF]/30 py-8 md:py-10">
          <h3 className="text-3xl font-semibold text-white">
            Bridge Rehabilitation & Replacement Capability
          </h3>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Existing asset condition assessments",
              "Bridge rehabilitation and replacement",
              "Structural steel replacement",
              "Corrosion and deterioration documentation",
              "Demolition and installation planning",
              "Site welding and structural modifications",
              "Temporary works and lifting support",
              "QA/QC and completion records",
              "Regional and remote mobilisation",
            ].map((item) => (
              <div
                key={item}
                className="border-b border-white/10 py-4 font-semibold text-white"
              >
                <span className="mr-2 text-[#2F8DFF]">✓</span>
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <GradientButton href="/">Discuss a Bridge Project</GradientButton>
            <GhostButton href={`tel:${phoneClean}`} className="w-full sm:w-auto">Call JJDS</GhostButton>
          </div>
        </div>
      </div>
    </section>
  );
}


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
              className="group overflow-hidden border-y border-white/10 bg-[#111827]"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 border-l-2 border-[#2F8DFF] pl-3 text-xs font-semibold tracking-[0.12em] text-white">
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
  return <a href={href} onClick={onClick} className={`inline-flex items-center justify-center  bg-gradient-to-r from-[#003C8F] via-[#005BFF] to-[#2F8DFF] px-7 py-3.5 text-sm font-semibold tracking-[0.12em] text-white shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-2xl ${className}`}>{children}</a>;
}

function GhostButton({ href, children, className = "", onClick }) {
  return <a href={href} onClick={onClick} className={`inline-flex items-center justify-center  border border-[#C9CDD2]/45 bg-[#111827]/85 px-7 py-3.5 text-sm font-semibold tracking-[0.12em] text-white backdrop-blur transition hover:border-[#99C8FF] hover:bg-[#1A1D21] hover:text-[#C9E3FF] ${className}`}>{children}</a>;
}

function EnquiryForm({ compact = false, light = false, pageTitle = "Website enquiry" }) {
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
  const fieldClass = `w-full border-b px-0 py-4 outline-none placeholder:text-slate-400 focus:border-[#2F8DFF] ${light ? "border-slate-300 bg-white text-slate-950" : "border-white/20 bg-transparent text-white"}`;
  const labelClass = `grid gap-2 text-sm font-medium ${light ? "text-slate-700" : "text-slate-200"}`;
  return (
    <form className="enquiry-form py-2" onSubmit={(event) => {
      event.preventDefault(); window.location.href = mailtoLink;
      setStatus("Your email app should open with these details. Attach any drawings or photos, then send the email. If nothing opens, copy your enquiry below.");
    }}>
      <p className={`text-xs font-semibold tracking-[0.3em] ${light ? "text-[#005BFF]" : "text-[#C9E3FF]"}`}>Project enquiry</p>
      <h3 className={`mt-2 text-3xl font-semibold ${light ? "text-slate-950" : "text-white"}`}>Tell us about the job</h3>
      <p className={`mt-3 text-sm leading-6 ${light ? "text-slate-600" : "text-slate-300"}`}>This prepares an email in your email app. Add drawings or photos before sending.</p>
      <noscript><p className="my-4">To enquire, <a className="underline" href={`mailto:${BRAND.email}`}>email {BRAND.email}</a> or call {BRAND.phone}.</p><style>{`.enquiry-form .enquiry-fields { display: none; }`}</style></noscript>
      <div className="enquiry-fields mt-6 grid gap-4">
        {[
          ["name", "Name / company", "name", true],
          ["contact", "Email or phone", "email", true],
          ["location", "Project location", "address-level2", false],
        ].map(([field, label, autoComplete, required]) => (
          <label key={field} htmlFor={id + field} className={labelClass}>
            {label}{required ? " *" : " (optional)"}
            <input id={id + field} name={field} autoComplete={autoComplete} required={required} maxLength={150} className={fieldClass} value={form[field]} onChange={update(field)} />
          </label>
        ))}
        <label htmlFor={id + "message"} className={labelClass}>
          Job details *
          <textarea id={id + "message"} name="message" required maxLength={2000} className={fieldClass + " min-h-32"} placeholder="Scope, timing and anything we need to know" value={form.message} onChange={update("message")} />
        </label>
        <button type="submit" className="bg-[#005BFF] px-6 py-4 font-semibold text-white transition hover:bg-[#003C8F]">Prepare enquiry email →</button>
        <button type="button" onClick={copyEnquiry} className={`min-h-11 border px-4 py-3 text-sm font-medium ${light ? "border-slate-300 text-slate-950 hover:bg-slate-100" : "border-white/25 text-white hover:bg-white/10"}`}>Copy enquiry instead</button>
        <p role="status" aria-live="polite" className={`text-sm leading-6 ${light ? "text-[#005BFF]" : "text-[#C9E3FF]"}`}>{status}</p>
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
  const menuButton = useRef(null);
  const root = useRef(null);
  const closeMenu = () => setMobileOpen(false);
  useEffect(() => {
    if (!mobileOpen) return;
    const dismiss = (event) => {
      if (event.type === "keydown" && event.key === "Escape") {
        setMobileOpen(false);
        menuButton.current?.focus();
      } else if (event.type === "pointerdown" && !root.current?.contains(event.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", dismiss);
    return () => {
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", dismiss);
    };
  }, [mobileOpen]);
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header ref={root} className="sticky top-0 z-50 border-b border-white/10 bg-[#050A12]/[0.96] backdrop-blur-xl">
        <div className="mx-auto flex min-h-[76px] max-w-[1600px] items-center justify-between gap-3 px-4 sm:px-6 lg:min-h-[88px] lg:px-10">
          <a href="/" className="flex min-w-0 items-center gap-3" onClick={closeMenu}>
            <img src="/jjds-logo.png" alt="JJDS Industries" className="h-12 w-12 object-contain sm:h-14 sm:w-14 lg:h-16 lg:w-16" />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold tracking-[0.1em] text-white sm:text-base">JJDS INDUSTRIES</p>
              <p className="mt-1 hidden text-[11px] text-slate-400 sm:block">Industrial installation & mechanical works</p>
            </div>
          </a>
          <div className="flex items-center gap-3">
            <nav aria-label="Main navigation" className="hidden items-center gap-3 xl:flex">
              {menuGroups.map((group) => <DropdownMenu key={group.label} group={group} />)}
            </nav>
            <a href="/live-job-library" className="inline-flex min-h-11 items-center justify-center border border-[#2F8DFF] px-5 text-sm font-semibold text-white transition hover:bg-[#005BFF]">Gallery</a>
            <button ref={menuButton} type="button" aria-label="Toggle navigation menu" aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen((open) => !open)} className="min-h-11 border border-white/20 px-4 text-sm font-semibold text-white xl:hidden">{mobileOpen ? "Close" : "Menu"}</button>
          </div>
        </div>
        <nav id="mobile-navigation" hidden={!mobileOpen} aria-label="Mobile navigation" className="max-h-[calc(100svh-180px)] overflow-y-auto border-t border-white/10 bg-[#050A12] px-4 py-4 xl:hidden">
          {menuGroups.map((group) => <div key={group.label} className="mb-5">
            <p className="mb-2 text-xs font-semibold tracking-widest text-[#99C8FF]">{group.label}</p>
            <div className="grid gap-2 sm:grid-cols-2">{group.items.map((item) => <a key={item.href + item.label} href={item.href} onClick={closeMenu} className="block border-b border-white/10 px-2 py-3 text-sm text-white">{item.label}</a>)}</div>
          </div>)}
        </nav>
      </header>
    </>
  );
}

function HomePage() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    ["overview", "Overview"],
    ["capabilities", "Capabilities"],
    ["industries", "Industries"],
    ["why", "Why JJDS"],
    ["contact", "Contact"],
  ];

  useEffect(() => {
    const syncSection = () => {
      const aliases = { services: "capabilities", "tier-ready": "why", gallery: "overview", compliance: "why" };
      const hash = window.location.hash.slice(1);
      const section = aliases[hash] || hash;
      setActiveTab(["overview", "capabilities", "industries", "why", "contact"].includes(section) ? section : "overview");
    };
    syncSection();
    window.addEventListener("hashchange", syncSection);
    return () => window.removeEventListener("hashchange", syncSection);
  }, []);

  useEffect(() => {
    if (!window.location.hash) return;
    document.getElementById(activeTab)?.scrollIntoView({ block: "start" });
  }, [activeTab]);

  return (
    <>
      <Header />
      <noscript><style>{`[data-home-panel][hidden] { display: block !important; } [data-home-panel] + [data-home-panel] { margin-top: 3rem; }`}</style></noscript>
      <main id="main-content" tabIndex={-1} className="min-h-screen bg-[#050A12] text-white">
        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative flex min-h-[500px] flex-col justify-center px-5 py-14 sm:px-8 md:px-12 lg:min-h-[650px] lg:border-r lg:border-white/10 lg:px-16">
              <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] [background-size:52px_52px]" />
              <div className="relative">
                <SectionLabel light>JJDS INDUSTRIES</SectionLabel>
                <h1 className="mt-7 max-w-4xl text-[clamp(3.15rem,8vw,7.4rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
                  Industrial work.<br />Delivered properly.
                </h1>
                <p className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                  Mechanical installation, process pipework, structural steel, shutdowns and plant upgrades for industrial projects.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <GradientButton href="/#contact">Send us the scope</GradientButton>
                  <GhostButton href={`tel:${phoneClean}`}>Call {BRAND.phone}</GhostButton>
                </div>
              </div>
            </div>

            <div className="relative min-h-[420px] lg:min-h-[650px]">
              <Image
                fill priority sizes="(min-width: 1024px) 54vw, 100vw"
                src={latestProjectImages[0]}
                alt="JJDS industrial project installation"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A12]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 border-t border-white/15 bg-[#050A12]/80 px-5 py-5 backdrop-blur-sm sm:px-8">
                <p className="text-[10px] font-semibold tracking-[0.16em] text-[#86C0F4]">CURRENT PROJECT</p>
                <h2 className="mt-2 text-xl font-semibold sm:text-2xl">Waste treatment plant installation</h2>
                <p className="mt-1 text-sm text-slate-300">Huntly, Victoria</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#08111E]">
          <div className="mx-auto max-w-[1600px] overflow-x-auto px-4 sm:px-6 lg:px-10">
            <nav aria-label="Homepage sections" className="flex min-w-max">
              {tabs.map(([id, label]) => (
                <a
                  key={id}
                  href={`/#${id}`}
                  aria-current={activeTab === id ? "location" : undefined}
                  onClick={() => setActiveTab(id)}
                  className={`inline-flex items-center min-h-16 border-b-2 px-5 text-sm font-semibold transition sm:px-7 ${
                    activeTab === id
                      ? "border-[#2F8DFF] text-white"
                      : "border-transparent text-slate-400 hover:text-white"
                  }`}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <section className="bg-white text-slate-950">
          <div className="mx-auto max-w-[1500px] px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20">
            <section id="overview" data-home-panel hidden={activeTab !== "overview"} aria-label="Overview">
              <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
                <div>
                  <SectionLabel>OVERVIEW</SectionLabel>
                  <h2 className="mt-7 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                    Built for industrial site work.
                  </h2>
                </div>
                <div className="border-t border-slate-300">
                  {[
                    ["01", "Mechanical", "Plant and equipment installation, alignment, upgrades and modifications."],
                    ["02", "Structural", "Platforms, support steel, pipe racks, stairs, handrails and site modifications."],
                    ["03", "Process", "Stainless, carbon steel and HDPE pipework with supports, tie-ins and testing support."],
                    ["04", "Shutdowns", "Planned shutdown work, repairs, replacements and critical-path installation."],
                  ].map(([n,t,x]) => (
                    <div key={n} className="grid gap-3 border-b border-slate-300 py-6 sm:grid-cols-[56px_180px_1fr] sm:gap-6">
                      <span className="text-xs font-medium text-slate-400">{n}</span>
                      <h3 className="text-lg font-semibold text-[#0A1625]">{t}</h3>
                      <p className="text-sm leading-6 text-slate-600">{x}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="capabilities" data-home-panel hidden={activeTab !== "capabilities"} aria-label="Capabilities">
              <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
                <div>
                  <SectionLabel>CAPABILITIES</SectionLabel>
                  <h2 className="mt-7 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                    One contractor across the install package.
                  </h2>
                  <p className="mt-6 max-w-lg leading-7 text-slate-600">
                    Mechanical, structural and process scopes coordinated through one site team.
                  </p>
                </div>
                <div className="border-t border-slate-300">
                  {capabilityCards.map(([num,title,text], index) => (
                    <div key={num} className="grid gap-3 border-b border-slate-300 py-6 sm:grid-cols-[56px_210px_1fr] sm:gap-6">
                      <span className="text-xs font-medium text-slate-400">{num}</span>
                      <h3 className="text-lg font-semibold text-[#0A1625]"><a href={capabilityPaths[index]} className="hover:text-[#005BFF]">{title} →</a></h3>
                      <p className="text-sm leading-6 text-slate-600">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <details className="mt-8 border-t border-slate-300 py-5">
                <summary className="cursor-pointer font-semibold">Explore all 17 specialist services</summary>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{seoPages.map((page) => <a key={page.path} href={page.path} className="border-b border-slate-300 py-3 font-semibold hover:text-[#005BFF]">{page.title} →</a>)}</div>
              </details>
            </section>

            <section id="industries" data-home-panel hidden={activeTab !== "industries"} aria-label="Industries">
              <div>
                <div className="max-w-3xl">
                  <SectionLabel>INDUSTRIES</SectionLabel>
                  <h2 className="mt-7 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                    Industrial sectors we work across.
                  </h2>
                </div>
                <div className="mt-10 grid border-t border-slate-300 sm:grid-cols-2 lg:grid-cols-3">
                  {industries.map((item,index) => (
                    <div key={item} className="flex min-h-24 items-center border-b border-slate-300 py-5 sm:border-r sm:px-6">
                      <span className="mr-4 text-xs font-medium text-slate-400">{String(index + 1).padStart(2,"0")}</span>
                      <span className="text-lg font-semibold text-[#0A1625]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="why" data-home-panel hidden={activeTab !== "why"} aria-label="Why">
              <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
                <div>
                  <SectionLabel>WHY JJDS</SectionLabel>
                  <h2 className="mt-7 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                    Easy to deal with. Ready for site.
                  </h2>
                  <p className="mt-6 max-w-lg leading-7 text-slate-600">
                    Defined scope, practical supervision, clear communication and clean handover.
                  </p>
                </div>
                <div className="border-t border-slate-300">
                  {[
                    ["01","Plan the work","Access, sequencing, lifts, shutdown windows and interfaces are worked through before the crew starts."],
                    ["02","Run the work front","Supervision stays close to the job so decisions are made quickly and the work keeps moving."],
                    ["03","Keep it clear","Scope, changes and progress are communicated without burying the client in paperwork."],
                    ["04","Close it out","Inspections, defects and handover records are finished with the work."],
                  ].map(([n,t,x]) => (
                    <div key={n} className="grid gap-3 border-b border-slate-300 py-6 sm:grid-cols-[56px_190px_1fr] sm:gap-6">
                      <span className="text-xs font-medium text-slate-400">{n}</span>
                      <h3 className="text-lg font-semibold text-[#0A1625]">{t}</h3>
                      <p className="text-sm leading-6 text-slate-600">{x}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="contact" data-home-panel hidden={activeTab !== "contact"} aria-label="Contact">
              <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
                <div>
                  <SectionLabel>CONTACT</SectionLabel>
                  <h2 className="mt-7 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                    Send the scope.
                  </h2>
                  <p className="mt-6 max-w-lg leading-7 text-slate-600">
                    Drawings, photos, specifications or an RFQ are enough to get started.
                  </p>
                  <div className="mt-8 border-t border-slate-300">
                    <a href={`tel:${phoneClean}`} className="block border-b border-slate-300 py-4 font-semibold text-[#0A1625]">PH {BRAND.phone}</a>
                    <a href={`mailto:${BRAND.email}`} className="block break-words border-b border-slate-300 py-4 font-semibold text-[#0A1625]">EM {BRAND.email}</a>
                  </div>
                </div>
                <EnquiryForm light pageTitle="Website enquiry" />
              </div>
            </section>
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
            <div><SectionLabel light>{page.eyebrow}</SectionLabel><h1 className="mt-4 text-[clamp(2.55rem,12vw,7rem)] font-semibold leading-[0.96] tracking-[-0.06em] sm:mt-5 sm:tracking-[-0.075em]">{page.title}</h1><p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 md:text-xl">{page.hero}</p><div className="mt-8 flex flex-wrap gap-4"><GradientButton href="/#contact">Send RFQ / drawings</GradientButton><GhostButton href={`tel:${phoneClean}`}>Call now</GhostButton></div></div>
            <EnquiryForm compact pageTitle={page.title} />
          </div>
        </section>
        <section className="bg-white px-4 py-16 text-slate-950 sm:px-5 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div><SectionLabel>Scope and capability</SectionLabel><h2 className="mt-3 text-4xl font-semibold tracking-[-0.015em] md:text-6xl">Site capability that matches the work.</h2><p className="mt-6 text-lg leading-8 text-slate-600">{page.description}</p></div>
            <div className="border-t border-slate-300">{page.bullets.map((item, index) => <div key={item} className="grid grid-cols-[44px_1fr] border-b border-slate-300 py-5"><span className="text-xs font-medium text-slate-400">0{index + 1}</span><span className="text-base font-semibold text-slate-800">{item}</span></div>)}</div>
          </div>
        </section>

        <ServiceGallery page={page} />

        

        <section className="bg-[#111827] px-4 py-16 sm:px-5 sm:py-24">
          <div className="mx-auto max-w-7xl"><SectionLabel light>Best fit sectors</SectionLabel><h2 className="mt-3 max-w-4xl text-4xl font-semibold tracking-[-0.015em] md:text-6xl">Where our crews are a good fit.</h2><div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-6">{page.sectors.map((item) => <span key={item} className="text-base font-semibold text-white">{item}</span>)}</div></div>
        </section>
        <section className="bg-slate-100 px-5 py-24 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>Delivery approach</SectionLabel>
            <h2 className="mt-3 max-w-5xl text-4xl font-semibold tracking-[-0.015em] md:text-6xl">Plan it. Build it. Close it out.</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {deliverySteps.map(([num, title, text]) => <article key={num} className="border-b border-slate-300 py-6"><span className="text-sm font-semibold text-[#005BFF]">{num}</span><h3 className="mt-4 text-2xl font-black">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}
            </div>
          </div>
        </section>
        <section className="bg-[#111827] px-4 py-16 sm:px-5 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionLabel light>Project controls</SectionLabel>
            <h2 className="mt-3 max-w-4xl text-4xl font-semibold tracking-[-0.015em] md:text-6xl">Safety and quality kept with the job.</h2>
            <div className="mt-10 border-t border-white/15">{complianceItems.map((item, index) => <div key={item} className="grid grid-cols-[44px_1fr] border-b border-white/15 py-5"><span className="text-xs font-medium text-slate-500">0{index + 1}</span><span className="font-semibold text-white">{item}</span></div>)}</div>
          </div>
        </section>
        <section className="bg-white px-4 py-16 text-slate-950 sm:px-5 sm:py-24"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]"><div><SectionLabel>Why JJDS</SectionLabel><h2 className="mt-3 text-4xl font-semibold tracking-[-0.015em] md:text-6xl">A practical contractor you can deal with directly.</h2><p className="mt-6 text-lg leading-8 text-slate-600">JJDS provides experienced trades with direct supervision and straightforward communication. We work through site issues as they come up and keep the client informed.</p><div className="mt-8 flex flex-wrap gap-4"><GradientButton href="/#contact">Start enquiry</GradientButton><a href="/" className="inline-flex min-h-12 items-center justify-center border border-slate-950 px-6 text-sm font-semibold text-slate-950 transition hover:bg-slate-950 hover:text-white">Back home</a></div></div><div className="min-h-72 border-l border-slate-300 bg-[linear-gradient(135deg,#f8fafc,#eef4fb)]" /></div></section>
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
      <div><p className="font-semibold tracking-[0.18em] text-white">Company</p><div className="mt-5 grid gap-3 text-sm"><a href="/#why" className="hover:text-[#99C8FF]">Why JJDS</a><a href="/live-job-library" className="hover:text-[#99C8FF]">Project Gallery</a><a href="/hseq-compliance" className="hover:text-[#99C8FF]">HSEQ & Quality</a><a href="/#contact" className="hover:text-[#99C8FF]">Request a Quote</a></div></div>
      <div><p className="font-semibold tracking-[0.18em] text-white">Contact</p><div className="mt-5 grid gap-3 text-sm"><a href={`tel:${phoneClean}`} className="hover:text-[#99C8FF]">{BRAND.phone}</a><a href={`mailto:${BRAND.email}`} className="break-all hover:text-[#99C8FF]">{BRAND.email}</a><p>Australia</p><p>Nationwide mobilisation</p></div></div>
    </div>
    <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 md:flex-row md:justify-between"><p>© 2026 {BRAND.name}. All rights reserved.</p><p>JJDS Industries Pty Ltd • ABN {BRAND.abn} • ACN {BRAND.acn}</p></div>
  </footer>;
}

function MobileButtons() {
  return <div className="pb-[env(safe-area-inset-bottom)] fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-white/10 bg-[#050505]/95 backdrop-blur md:hidden"><a href={`tel:${phoneClean}`} className="flex min-h-14 items-center justify-center bg-[#005BFF] px-4 text-sm font-semibold text-white">Call JJDS</a><a href={`sms:${phoneClean}?&body=${encodeURIComponent("Hi JJDS, I would like to enquire about a job.")}`} className="flex min-h-14 items-center justify-center border-l border-white/10 px-4 text-sm font-semibold text-white">SMS JJDS</a></div>;
}

export default function App({ path = "/" }) {
  const page = seoPages.find((item) => item.path === path || item.aliases?.includes(path));
  if (page) return <ServicePage page={page} />;
  return <HomePage />;
}

