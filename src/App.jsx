import React, { useEffect, useMemo, useState } from "react";

const BRAND = {
  name: "JJDS INDUSTRIES",
  tagline: "Industrial Construction • Mechanical • Structural • Process",
  slogan: "Integrated industrial construction and maintenance, delivered safely across Australia.",
  phone: "0427 626 101",
  email: "jjdsburnett@outlook.com.au",
  owner: "James Burnett",
  abn: "47 626 605 350",
};

const phoneClean = BRAND.phone.replaceAll(" ", "");
const siteUrl = "https://www.jjdsindustries.com.au";

const seoPages = [
  {
    path: "/process-pipework-australia",
    aliases: ["/process-pipework-melbourne"],
    navLabel: "Pipework",
    eyebrow: "Process Pipework Australia",
    title: "Process Pipework Installation Australia",
    hero: "Stainless process pipework, pipe supports, site welding and mechanical installation for industrial facilities.",
    description: "JJDS Industries provides stainless steel process pipework, fabrication, welding, supports and installation support for industrial sites across Australia.",
    bullets: ["Stainless process pipework installation", "Site welding and fabrication modifications", "Pipe supports, brackets and access steel", "Shutdown and plant upgrade support", "SWMS, permits and site records"],
    sectors: ["Waste processing", "Water treatment", "Industrial plants", "Manufacturing", "Remote sites"],
    image: "https://res.cloudinary.com/dbjdq6ahz/image/upload/v1778051790/IMG_0963_1_hiqc4w.jpg",
  },
  {
    path: "/industrial-plant-installation",
    navLabel: "Plant Install",
    eyebrow: "Industrial Plant Installation",
    title: "Industrial Plant Installation Contractors",
    hero: "Mechanical installation, structural steel, equipment placement and plant upgrade crews for Australian industrial projects.",
    description: "JJDS Industries delivers industrial plant installation, mechanical works, structural steel, process equipment, shutdown support and site installation packages.",
    bullets: ["Mechanical and process equipment installation", "Structural supports, platforms and frames", "Plant upgrades and staged shutdown works", "Crew planning and site coordination", "Australia-wide mobilisation capability"],
    sectors: ["Process plants", "Recycling facilities", "Food and industrial", "Civil infrastructure", "Regional projects"],
    image: "/20260615_041638546_iOS.jpg",
  },
  {
    path: "/waste-processing-installation",
    navLabel: "Waste Plants",
    eyebrow: "Waste Processing Installation",
    title: "Waste Processing Plant Installation",
    hero: "Installation support for depackers, resource recovery facilities, biofilter systems, pipework and structural site works.",
    description: "JJDS Industries supports waste processing and recycling facilities with plant installation, mechanical works, pipework, structural steel and compliance-ready delivery.",
    bullets: ["Depacker and processing equipment installation", "Pipework, ducting, supports and steelwork", "Shutdown and live-site installation support", "Fabrication repairs and site modifications", "Contractor supply and installation packages"],
    sectors: ["Organics", "Recycling", "Resource recovery", "Biofilter systems", "Industrial waste facilities"],
    image: "/20260615_041640730_iOS.jpg",
  },
  {
    path: "/water-treatment-installation",
    navLabel: "Water Plants",
    eyebrow: "Water Treatment Installation",
    title: "Water Treatment Plant Installation",
    hero: "Pipework, pumps, skids, supports, access steel and mechanical installation support for water treatment assets.",
    description: "JJDS Industries provides installation support for water treatment plants, pump and pipe systems, access steel, site welding and compliance documentation.",
    bullets: ["Pipework and mechanical installation", "Pump, skid and equipment install support", "Steel supports, frames and access structures", "Site fabrication and rectification works", "Clear reporting and handover support"],
    sectors: ["Water treatment", "Pump stations", "Process water", "Council assets", "Industrial facilities"],
    image: "https://res.cloudinary.com/dbjdq6ahz/image/upload/v1778051790/IMG_0963_1_hiqc4w.jpg",
  },
  {
    path: "/site-welding-victoria",
    navLabel: "Site Welding",
    eyebrow: "Site Welding Victoria",
    title: "Site Welding and Fabrication Victoria",
    hero: "Boilermaker-led site welding, structural rectification, fabrication repairs and shutdown support across Victoria.",
    description: "JJDS Industries provides site welding, fabrication repairs, structural rectification, mechanical modifications and shutdown support across Victoria and regional Australia.",
    bullets: ["On-site welding and fabrication repairs", "Structural steel rectification and modifications", "Breakdown and shutdown support", "Brackets, supports, platforms and custom steelwork", "Mobile site-ready crews"],
    sectors: ["Factories", "Plants", "Civil sites", "Councils", "Industrial contractors"],
    image: "https://res.cloudinary.com/dbjdq6ahz/image/upload/v1778048301/IMG_3476_1_xdtko1.jpg",
  },
  {
    path: "/structural-steel-fabrication",
    navLabel: "Structural Steel",
    eyebrow: "Structural Steel Fabrication",
    title: "Structural Steel Fabrication and Installation",
    hero: "Frames, platforms, access steel, pipe supports, brackets and structural modification works for industrial sites.",
    description: "JJDS Industries supplies structural steel fabrication and installation support including frames, platforms, supports, access steel and industrial steelwork.",
    bullets: ["Frames, platforms, supports and brackets", "Site measure, fabrication and installation", "Industrial access and support steel", "Structural rectification and modifications", "Project-ready compliance documentation"],
    sectors: ["Industrial", "Commercial", "Civil infrastructure", "Process plants", "Remote works"],
    image: "https://res.cloudinary.com/dbjdq6ahz/image/upload/v1778048301/IMG_3476_1_xdtko1.jpg",
  },
  {
    path: "/industrial-maintenance-victoria",
    navLabel: "Maintenance",
    eyebrow: "Industrial Maintenance Victoria",
    title: "Industrial Maintenance and Shutdown Support",
    hero: "Maintenance crews for site repairs, breakdowns, shutdowns, mechanical modifications, steelwork and plant improvements.",
    description: "JJDS Industries assists industrial sites with maintenance, repairs, breakdown support, mechanical modifications, welding, steelwork and shutdown labour packages.",
    bullets: ["Shutdown and maintenance crews", "Mechanical and steel repairs", "Breakdown rectification support", "Plant modifications and improvement works", "Straight communication and practical delivery"],
    sectors: ["Manufacturing", "Process plants", "Recycling", "Water assets", "Regional facilities"],
    image: "/IMG_4075 1.JPG",
  },
  {
    path: "/hseq-compliance",
    navLabel: "HSEQ",
    eyebrow: "HSEQ Compliance",
    title: "HSEQ and Contractor Compliance Support",
    hero: "SWMS, permits, mobilisation documents, site reporting and project compliance built into the way the job is delivered.",
    description: "JJDS Industries supports projects with SWMS, permits, site documentation, contractor compliance, reporting and practical safety systems.",
    bullets: ["SWMS, permits and site documentation", "Contractor compliance and mobilisation support", "Pre-start and site reporting systems", "Quality and handover documentation", "Compliance built into delivery"],
    sectors: ["Tier contractors", "EPC contractors", "Industrial sites", "Civil projects", "Remote works"],
    image: "/20260130_224350680_iOS.jpg",
  },
  {
    path: "/remote-site-works",
    navLabel: "Remote Works",
    eyebrow: "Remote Site Works",
    title: "Remote and Regional Industrial Site Works",
    hero: "Mobile crews for regional, remote and difficult-access works requiring practical steel, mechanical, civil and compliance delivery.",
    description: "JJDS Industries mobilises practical crews for remote, regional and difficult-access works including steel, civil, mechanical, pipework and installation.",
    bullets: ["Remote and regional mobilisation", "Steel, mechanical and civil site packages", "Shutdown, upgrade and access-constrained works", "Plant, bridge, culvert and infrastructure support", "Clear RFQ to handover communication"],
    sectors: ["Regional Victoria", "Remote sites", "Civil infrastructure", "Industrial plants", "Council assets"],
    image: "https://res.cloudinary.com/dbjdq6ahz/image/upload/v1778051271/IMG_6585_mlcgr4.png",
  },
  {
    path: "/epc-contractor-support",
    navLabel: "EPC Support",
    eyebrow: "EPC Contractor Support",
    title: "Site Delivery Support for EPC Contractors",
    hero: "Practical install crews, fabrication support, compliance documentation and site reporting for EPC and engineering teams.",
    description: "JJDS Industries supports EPC contractors and consulting engineers with installation crews, compliance documentation, fabrication, steelwork and mechanical installation.",
    bullets: ["RFQ review and install input", "Contractor supply and installation packages", "Mechanical, steel, civil and process plant support", "Site-ready documentation and reporting", "Straight communication with project teams"],
    sectors: ["EPC contractors", "Consulting engineers", "Tier contractors", "Waste and water", "Industrial upgrades"],
    image: "https://res.cloudinary.com/dbjdq6ahz/image/upload/v1778057917/IMG_4075_1_vxg2uo.jpg",
  },
  {
    path: "/civil-infrastructure",
    navLabel: "Civil Infra",
    eyebrow: "Civil Infrastructure",
    title: "Civil Infrastructure and Bridge Support Works",
    hero: "Bridge component works, culvert relining, drainage upgrades, steel repairs, site welding and remote construction support.",
    description: "JJDS Industries assists civil and infrastructure projects with bridge works, culvert relining, drainage upgrades, steel repairs and remote support.",
    bullets: ["Bridge and civil component installation", "Culvert relining and drainage upgrades", "Structural repairs and site fabrication", "Remote access and regional support", "Compliance documentation and delivery records"],
    sectors: ["Bridge works", "Drainage", "Culverts", "Councils", "Remote infrastructure"],
    image: "https://res.cloudinary.com/dbjdq6ahz/image/upload/v1778023020/db4bd0d3-d81e-41a9-bacd-d92cb50e17fd_up3see.jpg",
  },
  {
    path: "/mechanical-installation-contractor",
    navLabel: "Mechanical Install",
    eyebrow: "Mechanical Installation Contractor",
    title: "Industrial Mechanical Installation Contractor",
    hero: "Qualified installation crews for process equipment, pumps, conveyors, skids, tanks and complete mechanical packages.",
    description: "JJDS Industries delivers disciplined mechanical installation packages from site mobilisation and equipment placement through alignment, testing, commissioning assistance and handover.",
    bullets: ["Process equipment placement and assembly", "Pumps, motors, drives and rotating equipment", "Conveyors, skids, tanks and packaged systems", "Precision alignment and mechanical completion", "Commissioning and handover support"],
    sectors: ["Manufacturing", "Water", "Waste", "Food processing", "Heavy industry"],
    image: "https://res.cloudinary.com/dbjdq6ahz/image/upload/v1778057917/IMG_4075_1_vxg2uo.jpg",
  },
  {
    path: "/shutdown-contractors-australia",
    navLabel: "Shutdowns",
    eyebrow: "Industrial Shutdown Contractors",
    title: "Shutdown and Outage Support Australia",
    hero: "Planned shutdown teams for mechanical replacement, steelwork, pipework, welding and critical-path plant maintenance.",
    description: "JJDS Industries supports planned shutdowns and outages with coordinated supervision, skilled trades, documented work fronts and practical delivery under tight programme constraints.",
    bullets: ["Shutdown planning and work-front coordination", "Mechanical replacement and overhaul support", "Pipework, steelwork and field fabrication", "Breakdown and emergent scope response", "Daily reporting and completion records"],
    sectors: ["Process plants", "Manufacturing", "Recycling", "Water assets", "Regional facilities"],
    image: "/IMG_4075 1.JPG",
  },
  {
    path: "/stainless-steel-pipework",
    navLabel: "Stainless Pipe",
    eyebrow: "Stainless Steel Process Pipework",
    title: "Stainless Steel Pipework Installation",
    hero: "Fabrication and installation of stainless process systems for hygienic, corrosive and industrial applications.",
    description: "JJDS Industries supplies and installs stainless process pipework, fittings, supports and associated steelwork with controlled fabrication, installation and quality documentation.",
    bullets: ["Stainless process piping and fittings", "Site fabrication and tie-in works", "Pipe supports and access steel", "Pressure testing and inspection support", "Traceable quality and handover records"],
    sectors: ["Food and beverage", "Water", "Waste", "Chemical", "Manufacturing"],
    image: "https://res.cloudinary.com/dbjdq6ahz/image/upload/v1778051790/IMG_0963_1_hiqc4w.jpg",
  },
  {
    path: "/conveyor-installation",
    navLabel: "Conveyors",
    eyebrow: "Conveyor Installation",
    title: "Industrial Conveyor Installation",
    hero: "Mechanical and structural installation support for conveyors, transfer systems, access platforms and plant interfaces.",
    description: "JJDS Industries installs conveyor systems and associated steelwork, guarding, supports and mechanical components for new plants, upgrades and shutdown replacements.",
    bullets: ["Conveyor frames and mechanical assembly", "Drives, rollers, belts and transfer interfaces", "Platforms, stairs, guarding and supports", "Alignment, adjustment and commissioning support", "Brownfield modifications and shutdown replacements"],
    sectors: ["Recycling", "Quarrying", "Manufacturing", "Food processing", "Bulk handling"],
    image: "/20260615_041640730_iOS.jpg",
  },
  {
    path: "/pump-station-installation",
    navLabel: "Pump Stations",
    eyebrow: "Pump Station Installation",
    title: "Pump Station Mechanical Installation",
    hero: "Installation of pumps, pipework, valves, supports, skids and access steel for water and industrial assets.",
    description: "JJDS Industries delivers pump station installation and upgrade packages, integrating mechanical equipment, pipework, supports and access structures with practical commissioning support.",
    bullets: ["Pump, motor and base installation", "Suction and discharge pipework", "Valves, supports and equipment frames", "Alignment and mechanical completion", "Testing and commissioning assistance"],
    sectors: ["Water authorities", "Councils", "Industrial water", "Wastewater", "Remote assets"],
    image: "https://res.cloudinary.com/dbjdq6ahz/image/upload/v1778051790/IMG_0963_1_hiqc4w.jpg",
  },
  {
    path: "/brownfield-plant-upgrades",
    navLabel: "Plant Upgrades",
    eyebrow: "Brownfield Plant Upgrades",
    title: "Brownfield Industrial Plant Upgrades",
    hero: "Controlled modifications, tie-ins and equipment upgrades in operating industrial facilities.",
    description: "JJDS Industries plans and delivers brownfield works where access, live services, staging, shutdown windows and operational interfaces demand disciplined site execution.",
    bullets: ["Live-site planning and staged installation", "Equipment replacement and process tie-ins", "Structural and access modifications", "Shutdown integration and temporary works", "As-built, variation and handover records"],
    sectors: ["Operating plants", "Manufacturing", "Water", "Waste", "Infrastructure"],
    image: "/20260510_071339000_iOS.jpg",
  },

];

const navItems = [
  { label: "Capabilities", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Tier 1", href: "/#tier-ready" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Compliance", href: "/#compliance" },
  { label: "Contact", href: "/#contact" },
];

const menuGroups = [
  {
    label: "Services",
    items: seoPages.slice(0, 8).map((page) => ({ label: page.navLabel, href: page.path, text: page.eyebrow })),
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
      { label: "Tier 1 Ready", href: "/#tier-ready", text: "Compliance-ready contractor presentation" },
      { label: "Gallery", href: "/#gallery", text: "Real JJDS site delivery photos" },
      { label: "Compliance", href: "/#compliance", text: "SWMS, permits, records and handover" },
      { label: "Contact", href: "/#contact", text: "Send drawings, photos or an RFQ" },
    ],
  },
];

const capabilityCards = [
  ["01", "Industrial Plant Installation", "Complete installation packages for process equipment, skids, conveyors, pumps, tanks, vessels and production systems."],
  ["02", "Mechanical Construction", "Equipment placement, alignment, assembly, commissioning support, upgrades and brownfield modifications."],
  ["03", "Process Pipework", "Stainless steel, carbon steel, HDPE and specialty process systems, including supports, testing and handover."],
  ["04", "Structural Steel", "Platforms, access steel, support frames, pipe racks, stairs, handrails and structural modifications."],
  ["05", "Shutdowns & Maintenance", "Planned shutdowns, breakdown response, replacement works, plant improvements and critical-path support."],
  ["06", "HSEQ & QA Delivery", "Project-specific SWMS, ITPs, permits, inspections, progress records, variations and completion documentation."],
];

const industries = [
  "Waste processing & recycling", "Water treatment & pump stations", "Industrial manufacturing", "Civil infrastructure", "Councils & public assets", "Remote and regional projects", "EPC contractors", "Consulting engineers", "Shutdown and maintenance works"
];

const tierProof = [
  { title: "Compliance first", text: "Project-specific SWMS, permits, pre-starts, site records and handover documents are treated as part of delivery, not an afterthought." },
  { title: "Practical site leadership", text: "Boilermaker-led, site-ready thinking for constructability, sequencing, access, lifts, shutdowns, modifications and live-site works." },
  { title: "Multi-trade capability", text: "Steel, mechanical, civil, pipework, coatings, plant installation and field welding support under one practical contractor." },
  { title: "Professional response", text: "Clear RFQ review, scope breakdowns, inclusions, exclusions, assumptions, risk notes, photos and job communication." },
];

const deliverySteps = [
  ["01", "Scope review", "Review drawings, specifications, interfaces, access constraints and programme requirements."],
  ["02", "Planning", "Develop methodology, resourcing, procurement, SWMS, ITPs, permits and installation sequencing."],
  ["03", "Mobilisation", "Deploy site-ready supervision, trades, plant, tooling and project controls."],
  ["04", "Installation", "Deliver mechanical, structural, pipework and associated works with active coordination."],
  ["05", "Verification", "Complete inspections, test records, punch-list closeout and commissioning support."],
  ["06", "Handover", "Provide completion records, marked-up documentation, photos and practical closeout support."],
];

const trustStats = [
  ["Australia-wide", "Mobilisation capability"],
  ["Integrated", "Steel • Mechanical • Process"],
  ["Project-ready", "HSEQ and QA systems"],
  ["Direct", "Accountable communication"],
];

const complianceItems = [
  "Project-specific SWMS and risk controls",
  "Inspection and Test Plans (ITPs)",
  "Permits, pre-starts and daily records",
  "Material and weld traceability where required",
  "Progress photos and site reporting",
  "Variation, punch-list and handover control",
];


const galleryImages = [
  { src: "/20260130_224350680_iOS.jpg", alt: "JJDS Industries site works", label: "Site Works", featured: true },
  { src: "/20260130_224353137_iOS.jpg", alt: "JJDS Industries project works", label: "Project Works", featured: true },
  { src: "/20260510_071228000_iOS.png", alt: "JJDS Industries installation works", label: "Install Works", featured: true },
  { src: "/20260510_071339000_iOS.jpg", alt: "JJDS Industries mechanical works", label: "Mechanical" },
  { src: "/20260510_071405000_iOS.jpg", alt: "JJDS Industries structural works", label: "Structural" },
  { src: "/20260615_041638546_iOS.jpg", alt: "JJDS Industries plant works", label: "Plant" },
  { src: "/20260615_041640730_iOS.jpg", alt: "JJDS Industries depacker installation works", label: "Depacker" },
  { src: "/IMG_0961.jpeg", alt: "JJDS Industries process plant works", label: "Process Plant" },
  { src: "/IMG_0966.jpeg", alt: "JJDS Industries fabrication and installation", label: "Fabrication" },
  { src: "/IMG_4075 1.JPG", alt: "JJDS Industries industrial site works", label: "Industrial" },
  { src: "/IMG_4767 1.jpeg", alt: "JJDS Industries regional site works", label: "Regional" },
  { src: "https://res.cloudinary.com/dbjdq6ahz/image/upload/v1778048301/IMG_3476_1_xdtko1.jpg", alt: "JJDS Industries structural steel installation", label: "Structural Steel", featured: true },
  { src: "https://res.cloudinary.com/dbjdq6ahz/image/upload/v1778051790/IMG_0963_1_hiqc4w.jpg", alt: "JJDS Industries mechanical installation works", label: "Mechanical Works", featured: true },
  { src: "https://res.cloudinary.com/dbjdq6ahz/image/upload/v1778023020/db4bd0d3-d81e-41a9-bacd-d92cb50e17fd_up3see.jpg", alt: "JJDS Industries bridge works", label: "Bridge Works", featured: true },
  { src: "https://res.cloudinary.com/dbjdq6ahz/image/upload/v1778023022/IMG_6580_mqac9q.png", alt: "JJDS Industries civil works", label: "Civil" },
  { src: "https://res.cloudinary.com/dbjdq6ahz/image/upload/v1778051271/IMG_6585_mlcgr4.png", alt: "JJDS Industries regional works", label: "Regional Works" },
];

function SectionLabel({ children, light = false }) {
  return <p className={`text-xs font-black uppercase tracking-[0.34em] ${light ? "text-cyan-200" : "text-[#004A78]"}`}>{children}</p>;
}

function GradientButton({ href, children, className = "", onClick }) {
  return <a href={href} onClick={onClick} className={`inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#004A78] via-[#00A8C8] to-[#F59E0B] px-7 py-3.5 text-sm font-black uppercase tracking-[0.12em] text-white shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-2xl ${className}`}>{children}</a>;
}

function GhostButton({ href, children, className = "", onClick }) {
  return <a href={href} onClick={onClick} className={`inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-black uppercase tracking-[0.12em] text-white backdrop-blur transition hover:bg-white/20 ${className}`}>{children}</a>;
}

function useMeta(page) {
  useEffect(() => {
    const title = page ? `${page.title} | JJDS Industries` : "JJDS Industries | Industrial Site Delivery Australia";
    const description = page ? page.description : "JJDS Industries delivers mechanical, structural, civil, process plant, field welding and compliance-ready site works across Victoria and Australia.";
    document.title = title;
    const setMeta = (name, content, property = false) => {
      const key = property ? "property" : "name";
      let tag = document.querySelector(`meta[${key}=\"${name}\"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(key, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", `${siteUrl}${page?.path || "/"}`, true);
  }, [page]);
}

function EnquiryForm({ compact = false, pageTitle = "Website enquiry" }) {
  const [form, setForm] = useState({ name: "", contact: "", location: "", message: "" });
  const mailtoLink = useMemo(() => {
    const subject = encodeURIComponent(`${pageTitle} - JJDS Industries`);
    const body = encodeURIComponent(`Name / Company: ${form.name}\nEmail / Phone: ${form.contact}\nProject Location: ${form.location}\n\nJob Details:\n${form.message}\n\nSent from JJDS website.`);
    return `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
  }, [form, pageTitle]);
  const update = (field) => (event) => setForm({ ...form, [field]: event.target.value });
  return (
    <form className={`rounded-[2rem] bg-[#07131A] ${compact ? "p-5" : "p-6 md:p-8"} shadow-2xl`} onSubmit={(event) => { event.preventDefault(); window.location.href = mailtoLink; }}>
      <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-100">Fast enquiry</p>
      <h3 className="mt-2 text-3xl font-black text-white">Send the scope</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">Attach drawings, photos or RFQ docs after your email opens.</p>
      <div className="mt-6 grid gap-4">
        <input className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 font-semibold text-white outline-none placeholder:text-slate-400 focus:border-cyan-200" placeholder="Name / Company" value={form.name} onChange={update("name")} />
        <input className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 font-semibold text-white outline-none placeholder:text-slate-400 focus:border-cyan-200" placeholder="Email / Phone" value={form.contact} onChange={update("contact")} />
        <input className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 font-semibold text-white outline-none placeholder:text-slate-400 focus:border-cyan-200" placeholder="Project Location" value={form.location} onChange={update("location")} />
        <textarea className="min-h-36 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 font-semibold text-white outline-none placeholder:text-slate-400 focus:border-cyan-200" placeholder="Tell us about the job" value={form.message} onChange={update("message")} />
        <button type="submit" className="rounded-2xl bg-gradient-to-r from-[#004A78] via-[#00A8C8] to-[#F59E0B] px-6 py-4 font-black uppercase tracking-[0.12em] text-white shadow-xl transition hover:-translate-y-0.5">Submit enquiry</button>
      </div>
    </form>
  );
}

function DropdownMenu({ group }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-black uppercase tracking-[0.12em] text-slate-200 transition hover:border-cyan-200/40 hover:bg-white/10 hover:text-white"
      >
        {group.label}
        <span className="text-cyan-200 transition group-hover:rotate-180">⌄</span>
      </button>
      <div className="invisible absolute right-0 top-full z-50 mt-3 w-[360px] translate-y-2 rounded-[1.7rem] border border-white/10 bg-[#050505]/96 p-3 opacity-0 shadow-2xl shadow-black/50 backdrop-blur-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="mb-2 rounded-2xl bg-gradient-to-r from-[#004A78]/50 via-[#00A8C8]/20 to-[#F59E0B]/20 px-4 py-3 text-xs font-black uppercase tracking-[0.25em] text-cyan-100">
          {group.label} Menu
        </div>
        <div className="grid gap-2">
          {group.items.map((item) => (
            <a key={item.href + item.label} href={item.href} className="rounded-2xl border border-white/5 bg-white/[0.04] px-4 py-3 transition hover:border-cyan-200/30 hover:bg-white/10">
              <span className="block text-sm font-black text-white">{item.label}</span>
              <span className="mt-1 block text-xs leading-5 text-slate-400">{item.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMenu = () => setMobileOpen(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/90 shadow-2xl shadow-black/40 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-[1720px] items-center justify-between gap-5 px-5 py-4 md:px-10">
        <a href="/" className="flex min-w-0 items-center gap-5" onClick={closeMenu}>
          <img src="/jjds-logo.png" alt="JJDS Industries logo" className="h-20 w-auto object-contain md:h-28 xl:h-32" />
          <div className="hidden min-w-0 sm:block">
            <p className="text-2xl font-black uppercase tracking-[0.24em] text-white md:text-3xl xl:text-[2.4rem] xl:leading-none">{BRAND.name}</p>
            <p className="mt-2 max-w-[720px] text-[11px] font-black uppercase tracking-[0.38em] text-cyan-100 md:text-sm">{BRAND.tagline}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-3 xl:flex">
          {menuGroups.map((group) => <DropdownMenu key={group.label} group={group} />)}
          <GradientButton href="/#contact" className="ml-2 px-8 py-4 text-base">Get a Quote</GradientButton>
        </nav>

        <button type="button" onClick={() => setMobileOpen((open) => !open)} className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-white xl:hidden" aria-label="Toggle navigation menu">{mobileOpen ? "Close" : "Menu"}</button>
      </div>
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#050505]/98 px-5 py-5 xl:hidden">
          <div className="grid gap-4">
            {menuGroups.map((group) => (
              <div key={group.label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-3">
                <p className="px-2 pb-2 text-xs font-black uppercase tracking-[0.28em] text-cyan-100">{group.label}</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <a key={item.href + item.label} href={item.href} onClick={closeMenu} className="rounded-2xl bg-white/10 px-4 py-3">
                      <span className="block font-black text-white">{item.label}</span>
                      <span className="mt-1 block text-xs leading-5 text-slate-400">{item.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <GradientButton href="/#contact" className="w-full" onClick={closeMenu}>Get Quote</GradientButton>
          </div>
        </div>
      )}
    </header>
  );
}

function HomePage() {
  useMeta(null);
  return (
    <>
      <Header />
      <main id="top" className="bg-[#050505] text-white">
        <section className="relative min-h-screen overflow-hidden">
          <img src="https://res.cloudinary.com/dbjdq6ahz/image/upload/f_auto,q_auto,w_2400/IMG_1739_dxsrjp.jpg" alt="JJDS Industries industrial site works" className="absolute inset-0 h-full w-full scale-105 object-cover brightness-105" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,168,200,0.34),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(245,158,11,0.18),transparent_30%),linear-gradient(90deg,rgba(0,0,0,0.9),rgba(0,0,0,0.52),rgba(0,0,0,0.78))]" />
          <div className="relative z-10 flex min-h-screen items-center px-5 pt-24 md:px-16">
            <div className="max-w-7xl">
              <div className="inline-flex rounded-full border border-cyan-200/20 bg-black/35 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-cyan-100 backdrop-blur">JJDS Industries • Industrial project delivery</div>
              <h1 className="mt-6 max-w-7xl text-[clamp(3rem,8vw,8rem)] font-black uppercase leading-[0.86] tracking-[-0.08em] text-white">Industrial construction. Installed right.</h1>
              <p className="mt-7 max-w-4xl rounded-3xl border border-white/10 bg-black/40 p-6 text-lg leading-8 text-white/90 shadow-2xl backdrop-blur md:text-xl">JJDS Industries delivers integrated industrial construction, mechanical installation, structural steel, process pipework, shutdown and maintenance packages for EPC contractors, principal contractors and asset owners across Australia.</p>
              <div className="mt-7 grid gap-3 text-sm font-black text-white/90 sm:grid-cols-3 lg:max-w-4xl">
                {["RFQ to mobilisation", "Steel • Mechanical • Civil", "SWMS • Permits • Handover"].map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/10 px-4 py-3 text-center backdrop-blur">{item}</span>)}
              </div>
              <div className="mt-10 flex flex-wrap gap-4"><GradientButton href="/#contact">Send drawings / RFQ</GradientButton><GhostButton href={`tel:${phoneClean}`}>Call James</GhostButton></div>
            </div>
          </div>
        </section>

        <section className="relative px-5 py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#07131A] to-black" />
          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-5 md:grid-cols-4">
              {trustStats.map(([value, label], index) => <article key={value} className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#004A78]/70 via-[#00A8C8]/20 to-slate-950 p-6 shadow-2xl"><span className="text-xs font-black uppercase tracking-[0.28em] text-cyan-100">0{index + 1}</span><h2 className="mt-8 text-3xl font-black tracking-[-0.05em]">{value}</h2><p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-slate-300">{label}</p></article>)}
            </div>
          </div>
        </section>

        <section id="services" className="relative px-5 py-24 text-slate-950">
          <img src="https://res.cloudinary.com/dbjdq6ahz/image/upload/v1778057917/IMG_4075_1_vxg2uo.jpg" alt="JJDS capabilities background" className="absolute inset-0 h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-white/94" />
          <div className="relative mx-auto max-w-7xl">
            <SectionLabel>Core capability</SectionLabel>
            <h2 className="mt-3 max-w-5xl text-4xl font-black tracking-[-0.04em] md:text-6xl">Integrated capability for demanding industrial projects.</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {capabilityCards.map(([num, title, text]) => <article key={title} className="relative overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white p-7 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"><div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#004A78] text-sm font-black text-white">{num}</div><h3 className="text-2xl font-black tracking-tight">{title}</h3><p className="mt-4 leading-7 text-slate-600">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section id="tier-ready" className="bg-[#07131A] px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div><SectionLabel light>Tier 1 presentation</SectionLabel><h2 className="mt-3 text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl">Built to deliver to principal-contractor expectations.</h2><p className="mt-6 text-lg leading-8 text-slate-300">JJDS operates with a contractor mindset: defined scope, planned work fronts, competent supervision, controlled installation, clear reporting and accountable handover. We provide more than labour — we take ownership of delivery.</p></div>
              <div className="grid gap-5 sm:grid-cols-2">{tierProof.map((item) => <article key={item.title} className="rounded-[2rem] border border-white/10 bg-white/10 p-7"><h3 className="text-2xl font-black">{item.title}</h3><p className="mt-4 leading-7 text-slate-300">{item.text}</p></article>)}</div>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 px-5 py-24 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>How we deliver</SectionLabel>
            <h2 className="mt-3 max-w-5xl text-4xl font-black tracking-[-0.04em] md:text-6xl">A controlled path from RFQ to handover.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">Every project is approached with clear scope ownership, practical planning and documentation that keeps clients informed and work fronts moving.</p>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {deliverySteps.map(([num, title, text]) => <article key={num} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-lg"><span className="text-sm font-black text-[#004A78]">{num}</span><h3 className="mt-5 text-2xl font-black">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section id="industries" className="bg-white px-5 py-24 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>Industries served</SectionLabel><h2 className="mt-3 max-w-5xl text-4xl font-black tracking-[-0.04em] md:text-6xl">Supporting the industries that keep Australia moving.</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{industries.map((item) => <div key={item} className="rounded-[2rem] bg-slate-100 p-6 text-lg font-black text-slate-800">✓ {item}</div>)}</div>
          </div>
        </section>

        <section className="bg-black px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionLabel light>Service pages</SectionLabel><h2 className="mt-3 max-w-5xl text-4xl font-black tracking-[-0.04em] md:text-6xl">Specialist capability, clearly defined.</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{seoPages.map((page) => <a key={page.path} href={page.path} className="group rounded-[2rem] border border-white/10 bg-white/10 p-6 transition hover:-translate-y-1 hover:bg-white/15"><p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-100">{page.eyebrow}</p><h3 className="mt-4 text-2xl font-black tracking-tight text-white">{page.title}</h3><p className="mt-4 leading-7 text-slate-300">{page.hero}</p><span className="mt-6 inline-block text-sm font-black uppercase tracking-widest text-cyan-100">Open page →</span></a>)}</div>
          </div>
        </section>

        <section id="gallery" className="bg-[#050505] px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionLabel light>Project gallery</SectionLabel><h2 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-6xl">Proven JJDS site delivery.</h2>
            <div className="mt-12 grid auto-rows-[260px] gap-4 md:grid-cols-4">{galleryImages.map((img) => <figure key={img.src} className={`group relative overflow-hidden rounded-[1.7rem] bg-white/10 shadow-2xl ${img.featured ? "md:col-span-2 md:row-span-2" : ""}`}><img src={img.src} alt={img.alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" /><figcaption className="absolute bottom-0 p-5"><span className="rounded-full bg-cyan-300/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-cyan-100 backdrop-blur">{img.label}</span></figcaption></figure>)}</div>
          </div>
        </section>

        <section id="remote" className="bg-[#07131A] px-5 py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div><SectionLabel light>Remote / regional</SectionLabel><h2 className="mt-3 text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl">Built for difficult sites and critical work fronts.</h2><p className="mt-6 text-lg leading-8 text-slate-300">JJDS mobilises for regional, remote and access-constrained projects where planning, self-sufficiency and practical construction leadership matter. We support shutdown windows, brownfield interfaces, infrastructure upgrades and complex installation packages.</p></div>
            <div className="grid gap-5"><img src="https://res.cloudinary.com/dbjdq6ahz/image/upload/v1778023022/IMG_5758_vw57hk.jpg" alt="JJDS remote site works" className="h-72 w-full rounded-[1.7rem] object-cover shadow-2xl" /><img src="https://res.cloudinary.com/dbjdq6ahz/image/upload/v1778051271/IMG_6585_mlcgr4.png" alt="JJDS regional civil works" className="h-72 w-full rounded-[1.7rem] object-cover shadow-2xl" /></div>
          </div>
        </section>

        <section id="compliance" className="bg-white px-5 py-24 text-slate-950">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div><SectionLabel>Compliance you can trust</SectionLabel><h2 className="mt-3 text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl">Compliance and quality controls that support delivery.</h2><p className="mt-6 text-lg leading-8 text-slate-600">JJDS integrates safety, quality and documentation into the work itself. Project controls are established before mobilisation and maintained through installation, testing, closeout and handover.</p></div>
            <div className="grid gap-4 sm:grid-cols-2">{complianceItems.map((item) => <div key={item} className="rounded-[2rem] bg-slate-100 p-6 text-lg font-black text-slate-800">✓ {item}</div>)}</div>
          </div>
        </section>

        <section id="contact" className="bg-white px-5 py-24 text-slate-950">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div><SectionLabel>Get a quote</SectionLabel><h2 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-6xl">Send drawings, RFQs or project scope.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Send the drawings, specifications, photos or RFQ package. JJDS will review the scope and respond with practical delivery input, defined inclusions, assumptions, programme considerations and the next steps required to move forward.</p><div className="mt-8 grid gap-4"><a href={`tel:${phoneClean}`} className="rounded-3xl bg-slate-100 p-5 font-black transition hover:bg-cyan-50">PH {BRAND.phone}</a><a href={`mailto:${BRAND.email}`} className="rounded-3xl bg-slate-100 p-5 font-black transition hover:bg-cyan-50">EM {BRAND.email}</a></div></div>
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
  useMeta(page);
  return (
    <>
      <Header />
      <main className="bg-[#050505] text-white">
        <section className="relative overflow-hidden px-5 py-24 md:py-32">
          <img src={page.image} alt={page.title} className="absolute inset-0 h-full w-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,168,200,0.30),transparent_34%),linear-gradient(90deg,rgba(0,0,0,0.94),rgba(0,0,0,0.62),rgba(0,0,0,0.9))]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 pt-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div><SectionLabel light>{page.eyebrow}</SectionLabel><h1 className="mt-5 text-[clamp(3rem,7vw,7rem)] font-black uppercase leading-[0.88] tracking-[-0.075em]">{page.title}</h1><p className="mt-7 max-w-3xl rounded-3xl border border-white/10 bg-black/40 p-6 text-lg leading-8 text-white/90 backdrop-blur md:text-xl">{page.hero}</p><div className="mt-8 flex flex-wrap gap-4"><GradientButton href="/#contact">Send RFQ / drawings</GradientButton><GhostButton href={`tel:${phoneClean}`}>Call now</GhostButton></div></div>
            <EnquiryForm compact pageTitle={page.title} />
          </div>
        </section>
        <section className="bg-white px-5 py-24 text-slate-950">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div><SectionLabel>Scope and capability</SectionLabel><h2 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-6xl">Complete delivery support for industrial projects.</h2><p className="mt-6 text-lg leading-8 text-slate-600">{page.description}</p></div>
            <div className="grid gap-4">{page.bullets.map((item) => <div key={item} className="rounded-[1.5rem] bg-slate-100 p-5 text-lg font-black text-slate-800">✓ {item}</div>)}</div>
          </div>
        </section>
        <section className="bg-[#07131A] px-5 py-24">
          <div className="mx-auto max-w-7xl"><SectionLabel light>Best fit sectors</SectionLabel><h2 className="mt-3 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">Built for clients who require controlled, accountable delivery.</h2><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{page.sectors.map((item) => <div key={item} className="rounded-[2rem] border border-white/10 bg-white/10 p-6 text-center font-black text-white">{item}</div>)}</div></div>
        </section>
        <section className="bg-slate-100 px-5 py-24 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>Delivery approach</SectionLabel>
            <h2 className="mt-3 max-w-5xl text-4xl font-black tracking-[-0.04em] md:text-6xl">Planned, coordinated and documented.</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {deliverySteps.map(([num, title, text]) => <article key={num} className="rounded-[2rem] bg-white p-7 shadow-lg"><span className="text-sm font-black text-[#004A78]">{num}</span><h3 className="mt-4 text-2xl font-black">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}
            </div>
          </div>
        </section>
        <section className="bg-[#07131A] px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionLabel light>Project controls</SectionLabel>
            <h2 className="mt-3 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">Safety, quality and handover built into the work.</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{complianceItems.map((item) => <div key={item} className="rounded-[1.7rem] border border-white/10 bg-white/10 p-6 font-black text-white">✓ {item}</div>)}</div>
          </div>
        </section>
        <section className="bg-white px-5 py-24 text-slate-950"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]"><div><SectionLabel>Why JJDS</SectionLabel><h2 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-6xl">A contractor that takes ownership.</h2><p className="mt-6 text-lg leading-8 text-slate-600">JJDS combines experienced trades, direct supervision, constructability thinking, site controls and disciplined closeout. The result is a safer work front, clearer communication and fewer unmanaged interfaces for the client.</p><div className="mt-8 flex flex-wrap gap-4"><GradientButton href="/#contact">Start enquiry</GradientButton><a href="/" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3.5 text-sm font-black uppercase tracking-[0.12em] text-white">Back home</a></div></div><img src={page.image} alt={`${page.title} by JJDS Industries`} className="h-96 w-full rounded-[2rem] object-cover shadow-2xl" /></div></section>
      </main>
      <Footer />
      <MobileButtons />
    </>
  );
}

function Footer() {
  return <footer className="border-t border-white/10 bg-[#050505] px-5 py-14 text-slate-300">
    <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
      <div><img src="/jjds-logo.png" alt="JJDS Industries" className="h-20 w-auto" /><p className="mt-5 max-w-sm leading-7 text-slate-400">Integrated industrial construction, mechanical installation, structural steel, process pipework, shutdown and maintenance support across Australia.</p></div>
      <div><p className="font-black uppercase tracking-[0.18em] text-white">Capabilities</p><div className="mt-5 grid gap-3 text-sm">{seoPages.slice(0, 6).map((page) => <a key={page.path} href={page.path} className="hover:text-cyan-200">{page.navLabel}</a>)}</div></div>
      <div><p className="font-black uppercase tracking-[0.18em] text-white">Company</p><div className="mt-5 grid gap-3 text-sm"><a href="/#tier-ready" className="hover:text-cyan-200">Why JJDS</a><a href="/#gallery" className="hover:text-cyan-200">Project Gallery</a><a href="/#compliance" className="hover:text-cyan-200">HSEQ & Quality</a><a href="/#contact" className="hover:text-cyan-200">Request a Quote</a></div></div>
      <div><p className="font-black uppercase tracking-[0.18em] text-white">Contact</p><div className="mt-5 grid gap-3 text-sm"><a href={`tel:${phoneClean}`} className="hover:text-cyan-200">{BRAND.phone}</a><a href={`mailto:${BRAND.email}`} className="break-all hover:text-cyan-200">{BRAND.email}</a><p>Victoria, Australia</p><p>Australia-wide mobilisation</p></div></div>
    </div>
    <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 md:flex-row md:justify-between"><p>© 2026 {BRAND.name}. All rights reserved.</p><p>{BRAND.owner} • ABN {BRAND.abn}</p></div>
  </footer>;
}

function MobileButtons() {
  return <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 md:hidden"><a href={`tel:${phoneClean}`} className="rounded-full bg-gradient-to-r from-[#004A78] via-[#00A8C8] to-[#F59E0B] px-5 py-3 text-sm font-black text-white shadow-2xl">Call JJDS</a><a href={`sms:${phoneClean}?&body=${encodeURIComponent("Hi JJDS, I would like to enquire about a job.")}`} className="rounded-full bg-white/15 px-5 py-3 text-sm font-black text-white backdrop-blur">SMS JJDS</a></div>;
}

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const page = seoPages.find((item) => item.path === path || item.aliases?.includes(path));
  if (page) return <ServicePage page={page} />;
  return <HomePage />;
}
