import React, { useState } from "react";

const BRAND = {
  name: "JJDS INDUSTRIES",
  tagline: "Boilermaking • Steel • Civil • Mechanical • Coatings",
  phone: "0427 626 101",
  email: "jjdsburnett@outlook.com.au",
  owner: "James Burnett",
  abn: "47 626 605 350",
};

const phoneClean = BRAND.phone.replaceAll(" ", "");

const services = [
  {
    icon: "01",
    title: "HSQE & Compliance Consultant",
    subtitle: "HSQE Systems & Consulting",
    short: "HSQE",
    text: "Professional HSQE consulting, compliance systems, SWMS, permits, site documentation and contractor compliance support for projects and businesses.",
  },
  {
    icon: "02",
    title: "Project Management",
    short: "Project Mgmt",
    text: "End-to-end project coordination, planning, scheduling, site management and communication to keep jobs running smoothly from start to finish.",
  },
  {
    icon: "03",
    title: "Field Welding & Repairs",
    short: "Field Welding",
    text: "On-site welding, structural repairs, modifications, breakdown support and shutdown welding works across steel, mechanical and civil assets.",
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
    text: "Industrial equipment, process plant upgrades, bio-filter systems, pipework and site machinery installation support.",
  },
  {
    icon: "06",
    title: "Blast & Paint Services",
    short: "Coatings",
    text: "Surface preparation, protective coatings, industrial painting, asset refurbishment and corrosion protection works.",
  },
  {
    icon: "07",
    title: "Culvert Relining & Drainage",
    short: "Culverts",
    text: "Culvert relining, drainage upgrades, water infrastructure, civil repair works and site-based installation support across rail, road and industrial assets.",
  },
  {
    icon: "08",
    title: "Bridge & Civil Infrastructure",
    short: "Civil",
    text: "Bridge component installation, deck replacement support, structural repairs and civil infrastructure upgrades.",
  },
  {
    icon: "09",
    title: "Commercial & Industrial Site Works",
    short: "Site Works",
    text: "Reliable crews for commercial sites, factories, plants, depots, councils, contractors and industrial projects.",
  },
];

const stats = [
  {
    value: "HSQE & Compliance Management",
    label: "Systems • Documentation • Site Control • Assurance",
  },
  {
    value: "One Crew",
    label: "Steel • Mechanical • Civil • Coatings",
  },
  {
    value: "Australia Wide",
    label: "Project support wherever the work is",
  },
  {
    value: "Fast Mobilisation",
    label: "Quotes • Planning • Rapid site mobilisation",
  },
];

const galleryImages = [
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
    src: "https://res.cloudinary.com/dbjdq6ahz/image/upload/v1778057067/download_1_arjqwr.png",
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
  "Friendly, straight-up communication from first call to finish",
  "Boilermaker-led practical site delivery",
  "Steel, civil, mechanical and coatings capability",
  "Australia-wide project support",
  "Remote, shutdown and difficult-access works",
  "Full HSQE, safety and compliance ready for site mobilisation",
];

const process = [
  {
    step: "01",
    title: "Send the scope",
    text: "Send drawings, photos, RFQ documents, access notes or a rough description of the works.",
  },
  {
    step: "02",
    title: "We lock in the method",
    text: "JJDS reviews access, lifts, labour, materials, risks, program and delivery method.",
  },
  {
    step: "03",
    title: "You get a clear response",
    text: "Receive a practical quote, capability response or next-step plan for the job.",
  },
  {
    step: "04",
    title: "Works get delivered",
    text: "Crews execute the job with site control, communication and completion records.",
  },
];

const customerTypes = [
  "Commercial builders",
  "Civil contractors",
  "Industrial sites",
  "Factories & plants",
  "Councils & asset owners",
  "Infrastructure contractors",
];

function SectionLabel({ children, dark = false }) {
  return (
    <p
      className={`font-black uppercase tracking-[0.3em] ${
        dark ? "text-orange-200" : "text-blue-700"
      }`}
    >
      {children}
    </p>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white selection:bg-orange-300 selection:text-black">
      <header className="sticky top-0 z-50 bg-[#050505]/85 shadow-2xl shadow-black/50 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <a href="#top" className="flex items-center gap-4">
            <img
              src="https://res.cloudinary.com/dbjdq6ahz/image/upload/e_background_removal/f_png,e_improve,e_sharpen/v1778048889/ChatGPT_Image_Apr_25_2026_11_20_04_PM_pojk21.jpg"
              alt="JJDS Industries logo"
              className="h-16 w-auto object-contain md:h-24"
            />
            <div className="hidden sm:block">
              <p className="text-lg font-black tracking-[0.18em] text-white md:text-2xl" >
                {BRAND.name}
              </p>
              <p className="text-xs uppercase tracking-[0.32em] text-orange-200 md:text-xs">
                {BRAND.tagline}
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-bold text-slate-300 md:flex">
            <a href="#services" className="hover:text-orange-200">
              Capabilities
            </a>
            <a href="#gallery" className="hover:text-orange-200">
              Gallery
            </a>
            <a href="#remote" className="hover:text-orange-200">
              Remote Works
            </a>
            <a href="#contact" className="rounded-full bg-gradient-to-r from-blue-600 via-cyan-300 to-orange-300 px-7 py-3.5 font-black text-black">
              Get a Quote
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-full bg-white/10 px-4 py-2 text-xs font-black text-white md:hidden"
          >
            Menu
          </button>
        </div>

        {mobileOpen && (
          <div className="bg-[#050505]/98 px-5 py-5 md:hidden">
            <div className="grid gap-3">
              <a href="#services" onClick={() => setMobileOpen(false)}>
                Capabilities
              </a>
              <a href="#gallery" onClick={() => setMobileOpen(false)}>
                Gallery
              </a>
              <a href="#remote" onClick={() => setMobileOpen(false)}>
                Remote Works
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-300 to-orange-300 px-4 py-3 text-center font-black text-black"
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative min-h-screen overflow-hidden">
          <img
            src="https://res.cloudinary.com/dbjdq6ahz/image/upload/f_auto,q_auto,w_2400/IMG_1739_dxsrjp.jpg"
            alt="JJDS site works"
            className="absolute inset-0 h-full w-full scale-105 object-cover brightness-110"
          />
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 flex min-h-screen items-center px-8 pt-20 md:px-16">
            <div className="max-w-5xl">
              <div className="inline-flex rounded-full bg-black/35 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-orange-200 backdrop-blur">
                JJDS Industries • Australia Wide
              </div>

              <h1 className="mt-5 max-w-5xl text-[clamp(3.2rem,8vw,7.4rem)] font-black uppercase leading-[0.9] tracking-[-0.075em] text-white">
                Site-ready, compliant crews
                <br />
                delivering across Australia.
              </h1>

              <p className="mt-8 max-w-2xl rounded-3xl bg-black/30 p-5 text-lg leading-8 text-white/85 backdrop-blur md:text-xl">
                A contractor who manages compliance — not just follows it.
                Friendly, capable site support for steel installation,
                mechanical works, civil infrastructure, culverts, coatings and
                commercial projects across Australia.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 text-sm font-black text-white/85">
                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                  ✓ Send photos or drawings
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                  ✓ Clear quote pathway
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                  ✓ Industrial-ready crews
                </span>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-gradient-to-r from-blue-600 via-cyan-300 to-orange-300 px-8 py-4 font-black uppercase tracking-[0.08em] text-black shadow-xl"
                >
                  Get a Quote
                </a>
                <a
                  href={`tel:${phoneClean}`}
                  className="rounded-full bg-white/10 px-8 py-4 font-black uppercase tracking-[0.08em] text-white backdrop-blur"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-5 py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-14 mx-auto w-[min(92%,1100px)] rounded-[2rem] bg-white/95 p-6 text-slate-950 shadow-2xl shadow-black/30">
              <div className="grid items-center gap-4 md:grid-cols-[1fr_auto]">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-blue-700">
                    Need a job priced?
                  </p>
                  <p className="mt-2 text-xl font-black leading-tight tracking-tight md:text-2xl">
                    Send your drawings, photos or rough scope and JJDS will help
                    work out the next step.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="rounded-full bg-slate-950 px-8 py-4 text-center text-sm font-black uppercase tracking-widest text-white"
                >
                  Start Enquiry
                </a>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-orange-200">
                JJDS Capability
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em] text-white md:text-5xl">
                Simple to contact. Ready to deliver.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat, index) => (
                <article
                  key={stat.value}
                  className="relative min-h-[245px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600/30 via-cyan-400/10 to-slate-950 p-6 shadow-2xl"
                >
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.3em] text-orange-100">
                    0{index + 1}
                  </span>
                  <p className="mt-16 text-3xl font-black leading-[0.95] tracking-[-0.055em] text-white md:text-[2.35rem]">
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
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-white/90" />

          <div className="relative mx-auto max-w-7xl">
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-6xl">
              Services customers can call JJDS for.
            </h2>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="relative overflow-hidden rounded-[1.7rem] bg-white p-7 shadow-xl"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white">
                      {service.icon}
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-700">
                      {service.short}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black tracking-tight">
                    {service.title}
                    {service.subtitle && (
                      <span className="mt-1 block text-sm font-bold text-orange-600">
                        {service.subtitle}
                      </span>
                    )}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-black px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionLabel dark>Project Gallery</SectionLabel>
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
                    <span className="rounded-full bg-orange-300/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-orange-100 backdrop-blur">
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
            <SectionLabel dark>Remote Site Works</SectionLabel>
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

        <section className="bg-slate-950 px-5 py-24">
          <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-2 items-start" >
            <div>
              <SectionLabel dark>Compliance You Can Trust</SectionLabel>
              <className="mt-3 text-5xl font-black leading-[0.9] tracking-[-0.05em] md:text-7xl">
                Built into every job, not added later.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                At JJDS Industries, compliance isn’t an afterthought — it’s built
                into everything we do.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Our HSQE & Compliance Management system ensures every project
                meets strict safety, environmental and quality standards.
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
                <div
                  key={item}
                  className="rounded-3xl bg-white/10 p-5 font-bold text-white"
                >
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
                <div
                  key={item}
                  className="rounded-[2rem] bg-slate-100 p-7 text-lg font-bold leading-8 text-slate-800 shadow-sm"
                >
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
                <article
                  key={item.step}
                  className="rounded-[2rem] bg-white p-8 shadow-sm"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white">
                    {item.step}
                  </div>
                  <h3 className="mt-6 text-3xl font-black tracking-tight">
                    {item.title}
                  </h3>
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
                Send drawings, photos, RFQ details, site location or a rough
                description. JJDS will review it and help work out the next step.
              </p>

              <div className="mt-8 grid gap-4">
                <a
                  href={`tel:${phoneClean}`}
                  className="rounded-3xl bg-slate-100 p-5 font-black"
                >
                  PH {BRAND.phone}
                </a>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="rounded-3xl bg-slate-100 p-5 font-black"
                >
                  EM {BRAND.email}
                </a>
              </div>
            </div>

            <form
              className="rounded-[2rem] bg-slate-950 p-6 shadow-2xl"
              onSubmit={(e) => e.preventDefault()}
            >
              <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-200">
                Customer Enquiry
              </p>
              <h3 className="mt-2 text-3xl font-black text-white">
                Request pricing or availability
              </h3>

              <div className="mt-6 grid gap-4">
                <input
                  className="rounded-2xl bg-white/10 px-5 py-4 font-semibold text-white outline-none"
                  placeholder="Name / Company"
                />
                <input
                  className="rounded-2xl bg-white/10 px-5 py-4 font-semibold text-white outline-none"
                  placeholder="Email / Phone"
                />
                <input
                  className="rounded-2xl bg-white/10 px-5 py-4 font-semibold text-white outline-none"
                  placeholder="Project Location"
                />
                <textarea
                  className="min-h-40 rounded-2xl bg-white/10 px-5 py-4 font-semibold text-white outline-none"
                  placeholder="Tell us about the job"
                />
                <input
                  type="file"
                  multiple
                  className="rounded-2xl bg-white/10 p-4 text-white"
                />
                <button
                  type="submit"
                  className="rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-300 to-orange-300 px-6 py-4 font-black text-black"
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
          <p>
            {BRAND.owner} • ABN {BRAND.abn}
          </p>
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 md:hidden">
        <a
          href={`tel:${phoneClean}`}
          className="rounded-full bg-gradient-to-r from-blue-600 via-cyan-300 to-orange-300 px-5 py-3 text-sm font-black text-black shadow-2xl"
        >
          📞 Call JJDS
        </a>
        <a
          href={`sms:${phoneClean}?&body=${encodeURIComponent(
            "Hi JJDS, I would like to enquire about a job."
          )}`}
          className="rounded-full bg-white/15 px-5 py-3 text-sm font-black text-white backdrop-blur"
        >
          💬 SMS JJDS
        </a>
      </div>
    </div>
  );
}