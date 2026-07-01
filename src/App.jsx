import React, { useMemo, useState } from "react";

const BRAND = {
  name: "JJDS INDUSTRIES",
  tagline: "Steel • Mechanical • Civil • Process Plant • Compliance",
  slogan: "Site-ready, compliant crews delivering across Australia.",
  phone: "0427 626 101",
  email: "james@jjdsindustries.com.au",
  owner: "James Burnett",
  abn: "47 626 605 350",
};

const phoneClean = BRAND.phone.replaceAll(" ", "");

const navItems = [
  { label: "Capabilities", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Remote Works", href: "#remote" },
  { label: "Compliance", href: "#compliance" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: "01",
    title: "HSQE & Compliance Consultant",
    short: "HSQE",
    text: "SWMS, permits, site documentation, contractor compliance, pre-start support and project-specific safety systems.",
  },
  {
    icon: "02",
    title: "Project Management",
    short: "Project Mgmt",
    text: "Project planning, site coordination, labour planning, reporting, scheduling and practical delivery support.",
  },
  {
    icon: "03",
    title: "Field Welding & Repairs",
    short: "Field Welding",
    text: "On-site welding, fabrication repairs, shutdown support, modifications and urgent breakdown rectification works.",
  },
  {
    icon: "04",
    title: "Structural Steel Installation",
    short: "Steel Install",
    text: "Steel frames, platforms, brackets, supports, access structures and custom site installation works.",
  },
  {
    icon: "05",
    title: "Mechanical & Plant Installation",
    short: "Mechanical",
    text: "Process equipment, plant upgrades, depackers, bio-filter systems, pipework and industrial installation support.",
  },
  {
    icon: "07",
    title: "Culvert Relining & Drainage",
    short: "Culverts",
    text: "Culvert relining, drainage upgrades, civil repairs and water infrastructure installation support.",
  },
  {
    icon: "08",
    title: "Bridge & Civil Infrastructure",
    short: "Civil",
    text: "Bridge component installation, deck replacement support, structural repairs and infrastructure upgrades.",
  },
  {
    icon: "09",
    title: "Commercial & Industrial Site Works",
    short: "Site Works",
    text: "Reliable crews for factories, plants, depots, councils, contractors and commercial industrial sites.",
  },
];

const stats = [
  {
    value: "Compliance Ready",
    label: "SWMS • Permits • Site Docs • Reporting",
  },
  {
    value: "Multi-Trade Crew",
    label: "Steel • Mechanical • Civil • Coatings",
  },
  {
    value: "Australia Wide",
    label: "Metro • Regional • Remote project support",
  },
  {
    value: "Fast Mobilisation",
    label: "RFQ review • Planning • Site delivery",
  },
];

const galleryImages = [
   {
    src: "/20260130_224350680_iOS.jpg",
    alt: "JJDS Industries site works",
    label: "Site Works",
    featured: true,
  },
  {
    src: "/20260130_224353137_iOS.jpg",
    alt: "JJDS Industries project works",
    label: "Project Works",
    featured: true,
  },
  {
    src: "/20260510_071228000_iOS.png",
    alt: "JJDS Industries installation works",
    label: "Installation Works",
    featured: true,
  },
  {
    src: "/20260510_071339000_iOS.jpg",
    alt: "JJDS Industries mechanical works",
    label: "Mechanical Works",
  },
  {
    src: "/20260510_071405000_iOS.jpg",
    alt: "JJDS Industries structural works",
    label: "Structural Works",
  },
  {
    src: "/20260615_041638546_iOS.jpg",
    alt: "JJDS Industries plant works",
    label: "Plant Works",
  },
  {
    src: "/20260615_041640730_iOS.jpg",
    alt: "JJDS Industries depacker installation works",
    label: "Depacker Works",
  },
  {
    src: "/IMG_0961.jpeg",
    alt: "JJDS Industries process plant works",
    label: "Process Plant",
  },
  {
    src: "/IMG_0966.jpeg",
    alt: "JJDS Industries fabrication and installation",
    label: "Fabrication",
  },
  {
    src: "/IMG_4075 1.JPG",
    alt: "JJDS Industries industrial site works",
    label: "Industrial Works",
  },
  {
    src: "/IMG_4767 1.jpeg",
    alt: "JJDS Industries regional site works",
    label: "Regional Works",
  },
  {
    src: "https://res.cloudinary.com/dbjdq6ahz/image/upload/v1778048301/IMG_3476_1_xdtko1.jpg",
    alt: "JJDS Industries structural steel installation",
    label: "Structural Steel",
    featured: true,
  },
  {
    src: "https://res.cloudinary.com/dbjdq6ahz/image/upload/v1778051790/IMG_0963_1_hiqc4w.jpg",
    alt: "JJDS Industries mechanical installation works",
    label: "Mechanical Works",
    featured: true,
  },
  {
    src: "https://res.cloudinary.com/dbjdq6ahz/image/upload/v1778023020/db4bd0d3-d81e-41a9-bacd-d92cb50e17fd_up3see.jpg",
    alt: "JJDS Industries bridge works",
    label: "Bridge Works",
    featured: true,
  },
  {
    src: "https://res.cloudinary.com/dbjdq6ahz/image/upload/v1778023022/IMG_6580_mqac9q.png",
    alt: "JJDS Industries civil works",
    label: "Civil Works",
  },
 {
  src: "/20260615_041638546_iOS.heic",
  alt: "JJDS Industries plant works",
  label: "Plant Works",
},
  {
    src: "https://res.cloudinary.com/dbjdq6ahz/image/upload/v1778051271/IMG_6585_mlcgr4.png",
    alt: "JJDS regional works",
    label: "Regional Works",
  },
];

const reasons = [
  "Straight-up communication from first call to finish",
  "Boilermaker-led practical site delivery",
  "Steel, civil, mechanical and coatings capability",
  "Remote, shutdown and difficult-access works",
  "Compliance documents ready for mobilisation",
  "Project reporting and variation control",
];

const process = [
  {
    step: "01",
    title: "Send the scope",
    text: "Send drawings, photos, RFQ documents, access notes or a rough description of the works.",
  },
  {
    step: "02",
    title: "We review the job",
    text: "JJDS reviews access, lifts, labour, materials, risks, program and delivery method.",
  },
  {
    step: "03",
    title: "Clear quote response",
    text: "Receive a practical quote, capability response or next-step plan for the job.",
  },
  {
    step: "04",
    title: "Site delivery",
    text: "Crews execute the job with site control, communication and completion records.",
  },
];

function SectionLabel({ children, light = false }) {
  return (
    <p
      className={`text-xs font-black uppercase tracking-[0.34em] ${
        light ? "text-cyan-200" : "text-[#004A78]"
      }`}
    >
      {children}
    </p>
  );
}

function GradientButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#004A78] via-[#00A8C8] to-[#F59E0B] px-7 py-3.5 text-sm font-black uppercase tracking-[0.12em] text-white shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-2xl ${className}`}
    >
      {children}
    </a>
  );
}

function SoftButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-7 py-3.5 text-sm font-black uppercase tracking-[0.12em] text-white backdrop-blur transition hover:bg-white/20 ${className}`}
    >
      {children}
    </a>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    contact: "",
    location: "",
    message: "",
  });

  const mailtoLink = useMemo(() => {
    const subject = encodeURIComponent("Website enquiry - JJDS Industries");
    const body = encodeURIComponent(
      `Name / Company: ${form.name}\nEmail / Phone: ${form.contact}\nProject Location: ${form.location}\n\nJob Details:\n${form.message}\n\nSent from JJDS website.`
    );
    return `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
  }, [form]);

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = mailtoLink;
  };

  const closeMenu = () => setMobileOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white selection:bg-cyan-200 selection:text-black">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/88 shadow-2xl shadow-black/40 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-4" onClick={closeMenu}>
            <img
              src="/jjds-logo.png"
              alt="JJDS Industries logo"
              className="h-14 w-auto object-contain md:h-20"
            />
            <div className="hidden sm:block">
              <p className="text-base font-black tracking-[0.18em] text-white md:text-xl">
                {BRAND.name}
              </p>
              <p className="max-w-[480px] text-[10px] uppercase tracking-[0.22em] text-cyan-100 md:text-xs">
                {BRAND.tagline}
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold text-slate-300 md:flex">
            {navItems.slice(0, 4).map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-cyan-200">
                {item.label}
              </a>
            ))}
            <GradientButton href="#contact">Get a Quote</GradientButton>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black text-white md:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-[#050505]/98 px-5 py-5 md:hidden">
            <div className="grid gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-2xl bg-white/10 px-4 py-3 font-bold"
                >
                  {item.label}
                </a>
              ))}
              <GradientButton href="#contact" className="w-full" onClick={closeMenu}>
                Get Quote
              </GradientButton>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative min-h-screen overflow-hidden">
          <img
            src="https://res.cloudinary.com/dbjdq6ahz/image/upload/f_auto,q_auto,w_2400/IMG_1739_dxsrjp.jpg"
            alt="JJDS site works"
            className="absolute inset-0 h-full w-full scale-105 object-cover brightness-105"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,168,200,0.28),transparent_34%),linear-gradient(90deg,rgba(0,0,0,0.88),rgba(0,0,0,0.48),rgba(0,0,0,0.72))]" />

          <div className="relative z-10 flex min-h-screen items-center px-5 pt-20 md:px-16">
            <div className="max-w-6xl">
              <div className="inline-flex rounded-full border border-cyan-200/20 bg-black/35 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-cyan-100 backdrop-blur">
                JJDS Industries • Australia Wide
              </div>

              <h1 className="mt-6 max-w-6xl text-[clamp(3rem,8vw,7.5rem)] font-black uppercase leading-[0.9] tracking-[-0.075em] text-white">
                Site-ready,
                <br />
                compliant crews.
              </h1>

              <p className="mt-7 max-w-3xl rounded-3xl border border-white/10 bg-black/35 p-5 text-lg leading-8 text-white/88 shadow-2xl backdrop-blur md:text-xl">
                {BRAND.slogan} Mechanical installation, structural steel,
                process plant, civil infrastructure, coatings and project
                compliance support.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 text-sm font-black text-white/90">
                {["Send drawings", "Get a clear response", "Mobilise with compliance"].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur">
                    ✓ {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <GradientButton href="#contact">Get a Quote</GradientButton>
                <SoftButton href={`tel:${phoneClean}`}>Call Now</SoftButton>
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-5 py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#07131A] to-black" />
          <div className="relative mx-auto max-w-7xl">
            <div className="mb-14 rounded-[2rem] border border-white/10 bg-white p-6 text-slate-950 shadow-2xl shadow-black/30">
              <div className="grid items-center gap-4 md:grid-cols-[1fr_auto]">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[#004A78]">
                    Need a job priced?
                  </p>
                  <p className="mt-2 text-xl font-black leading-tight tracking-tight md:text-2xl">
                    Send drawings, photos or rough scope and JJDS will help work out the next step.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="rounded-full bg-slate-950 px-8 py-4 text-center text-sm font-black uppercase tracking-widest text-white transition hover:bg-[#004A78]"
                >
                  Start Enquiry
                </a>
              </div>
            </div>

            <SectionLabel light>JJDS Capability</SectionLabel>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em] text-white md:text-5xl">
              Simple to contact. Ready to deliver.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat, index) => (
                <article
                  key={stat.value}
                  className="relative min-h-[230px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#004A78]/70 via-[#00A8C8]/20 to-slate-950 p-6 shadow-2xl transition hover:-translate-y-1"
                >
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.3em] text-cyan-100">
                    0{index + 1}
                  </span>
                  <p className="mt-14 text-3xl font-black leading-[0.95] tracking-[-0.055em] text-white md:text-[2.2rem]">
                    {stat.value}
                  </p>
                  <p className="mt-5 text-xs font-black uppercase leading-6 tracking-[0.2em] text-slate-300">
                    {stat.label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="relative px-5 py-24 text-slate-950">
          <img
            src="https://res.cloudinary.com/dbjdq6ahz/image/upload/v1778057917/IMG_4075_1_vxg2uo.jpg"
            alt="JJDS capabilities background"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-white/92" />

          <div className="relative mx-auto max-w-7xl">
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-6xl">
              Services customers can call JJDS for.
            </h2>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="relative overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white p-7 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#004A78] text-sm font-black text-white">
                      {service.icon}
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.25em] text-[#004A78]">
                      {service.short}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black tracking-tight">{service.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-black px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionLabel light>Project Gallery</SectionLabel>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-6xl">
              Real JJDS project delivery.
            </h2>

            <div className="mt-12 grid auto-rows-[260px] gap-4 md:grid-cols-4">
              {galleryImages.map((img) => (
                <figure
                  key={img.src}
                  className={`group relative overflow-hidden rounded-[1.7rem] bg-white/10 shadow-2xl ${
                    img.featured ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <figcaption className="absolute bottom-0 p-5">
                    <span className="rounded-full bg-cyan-300/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-cyan-100 backdrop-blur">
                      {img.label}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="remote" className="px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionLabel light>Remote Site Works</SectionLabel>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-6xl">
              Remote, regional and shutdown work capability.
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <img
                src="https://res.cloudinary.com/dbjdq6ahz/image/upload/v1778023022/IMG_5758_vw57hk.jpg"
                alt="JJDS remote site works"
                className="h-80 w-full rounded-[1.7rem] object-cover shadow-2xl"
              />
              <img
                src="https://res.cloudinary.com/dbjdq6ahz/image/upload/v1778051271/IMG_6585_mlcgr4.png"
                alt="JJDS regional civil works"
                className="h-80 w-full rounded-[1.7rem] object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section id="compliance" className="bg-[#07131A] px-5 py-24">
          <div className="mx-auto grid max-w-[1600px] items-start gap-16 lg:grid-cols-2">
            <div>
              <SectionLabel light>Compliance You Can Trust</SectionLabel>
              <h2 className="mt-3 text-5xl font-black leading-[0.9] tracking-[-0.05em] md:text-7xl">
                Built into every job, not added later.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                JJDS delivers with practical site controls, documentation, communication and compliance support from mobilisation through to handover.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                "Safety-first delivery",
                "Environmental responsibility",
                "Quality assurance systems",
                "Structured documentation",
                "Site compliance control",
                "Client-ready reporting",
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/10 p-5 font-bold text-white">
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-24 text-slate-950">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div>
              <SectionLabel>Why Choose JJDS</SectionLabel>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-6xl">
                Easy to deal with. Strong on site.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((item) => (
                <div key={item} className="rounded-[2rem] bg-slate-100 p-7 text-lg font-bold leading-8 text-slate-800 shadow-sm">
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-100 px-5 py-24 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>Simple Process</SectionLabel>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-6xl">
              A simple way to get started.
            </h2>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {process.map((item) => (
                <article key={item.step} className="rounded-[2rem] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#004A78] text-sm font-black text-white">
                    {item.step}
                  </div>
                  <h3 className="mt-6 text-3xl font-black tracking-tight">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white px-5 py-24 text-slate-950">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div>
              <SectionLabel>Get a Quote</SectionLabel>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-6xl">
                Let’s make your job easier.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Send drawings, photos, RFQ details, site location or a rough description. JJDS will review it and help work out the next step.
              </p>

              <div className="mt-8 grid gap-4">
                <a href={`tel:${phoneClean}`} className="rounded-3xl bg-slate-100 p-5 font-black transition hover:bg-cyan-50">
                  PH {BRAND.phone}
                </a>
                <a href={`mailto:${BRAND.email}`} className="rounded-3xl bg-slate-100 p-5 font-black transition hover:bg-cyan-50">
                  EM {BRAND.email}
                </a>
              </div>
            </div>

            <form className="rounded-[2rem] bg-[#07131A] p-6 shadow-2xl" onSubmit={handleSubmit}>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-100">
                Customer Enquiry
              </p>
              <h3 className="mt-2 text-3xl font-black text-white">
                Request pricing or availability
              </h3>

              <div className="mt-6 grid gap-4">
                <input
                  className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 font-semibold text-white outline-none placeholder:text-slate-400 focus:border-cyan-200"
                  placeholder="Name / Company"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 font-semibold text-white outline-none placeholder:text-slate-400 focus:border-cyan-200"
                  placeholder="Email / Phone"
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                />
                <input
                  className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 font-semibold text-white outline-none placeholder:text-slate-400 focus:border-cyan-200"
                  placeholder="Project Location"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                />
                <textarea
                  className="min-h-40 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 font-semibold text-white outline-none placeholder:text-slate-400 focus:border-cyan-200"
                  placeholder="Tell us about the job"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                <p className="text-xs leading-6 text-slate-400">
                  This button opens your email app with the enquiry filled in. Attach drawings or photos in the email before sending.
                </p>
                <button
                  type="submit"
                  className="rounded-2xl bg-gradient-to-r from-[#004A78] via-[#00A8C8] to-[#F59E0B] px-6 py-4 font-black uppercase tracking-[0.12em] text-white shadow-xl transition hover:-translate-y-0.5"
                >
                  Submit Enquiry →
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#050505] px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {BRAND.name}. All rights reserved.</p>
          <p>{BRAND.owner} • ABN {BRAND.abn}</p>
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 md:hidden">
        <a
          href={`tel:${phoneClean}`}
          className="rounded-full bg-gradient-to-r from-[#004A78] via-[#00A8C8] to-[#F59E0B] px-5 py-3 text-sm font-black text-white shadow-2xl"
        >
          📞 Call JJDS
        </a>
        <a
          href={`sms:${phoneClean}?&body=${encodeURIComponent("Hi JJDS, I would like to enquire about a job.")}`}
          className="rounded-full bg-white/15 px-5 py-3 text-sm font-black text-white backdrop-blur"
        >
          💬 SMS JJDS
        </a>
      </div>
    </div>
  );
}
