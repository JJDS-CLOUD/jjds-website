import Image from "next/image";
import { liveJobs, liveJobFeedMeta } from "../../data/live-jobs";

export const metadata = {
  title: liveJobFeedMeta.title,
  description: liveJobFeedMeta.description,
  alternates: { canonical: "/live-job-library" },
  openGraph: {
    title: liveJobFeedMeta.title,
    description: liveJobFeedMeta.description,
    url: "https://www.jjdsindustries.com.au/live-job-library",
    type: "website",
    images: ["/jjds-logo.png"],
  },
};

const phone = "0427626101";

function Badge({ children }) {
  return (
    <span className="rounded-full border border-[#2F8DFF]/40 bg-[#005BFF]/15 px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#C9E3FF]">
      {children}
    </span>
  );
}

export default function LiveJobLibraryPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4">
          <a href="/" className="flex items-center gap-4">
            <Image
              src="/jjds-logo.png"
              alt="JJDS Industries"
              width={84}
              height={84}
              className="h-16 w-16 object-contain md:h-20 md:w-20"
              priority
            />
            <div>
              <p className="text-lg font-black uppercase tracking-[0.18em] md:text-2xl">
                JJDS Industries
              </p>
              <p className="mt-1 text-[10px] font-black uppercase tracking-[0.24em] text-[#C9E3FF] md:text-xs">
                Live Job Library
              </p>
            </div>
          </a>
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="hidden rounded-full border border-white/15 px-5 py-3 text-xs font-black uppercase tracking-[0.14em] sm:inline-flex"
            >
              Back to website
            </a>
            <a
              href="/#contact"
              className="rounded-full bg-gradient-to-r from-[#003C8F] via-[#005BFF] to-[#2F8DFF] px-5 py-3 text-xs font-black uppercase tracking-[0.14em]"
            >
              Enquire
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10 px-5 py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,91,255,0.28),transparent_34%),linear-gradient(180deg,#050505,#09111c)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2">
            <Badge>Current projects</Badge>
            <Badge>Approved site updates</Badge>
            <Badge>Australia-wide</Badge>
          </div>
          <h1 className="mt-6 max-w-6xl text-[clamp(3.2rem,8vw,7.5rem)] font-black uppercase leading-[0.86] tracking-[-0.07em]">
            Live Job Library
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            A live look at JJDS Industries project delivery. Approved progress
            photos and public-safe site updates are added as current works move
            through installation, QA and handover.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            Feed active
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#99C8FF]">
                Current work
              </p>
              <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.04em] md:text-6xl">
                Projects in the field
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-400">
              Only client-approved, non-confidential project information is
              published. Drawings, pricing, personnel details and sensitive site
              records remain private.
            </p>
          </div>

          <div className="grid gap-8">
            {liveJobs.map((job) => (
              <article
                key={job.id}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B1118] shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
              >
                <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="relative min-h-[360px]">
                    <Image
                      src={job.coverImage}
                      alt={job.title}
                      fill
                      sizes="(min-width: 1024px) 52vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                    <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">
                      <Badge>{job.status}</Badge>
                      <Badge>{job.sector}</Badge>
                    </div>
                  </div>

                  <div className="p-7 md:p-10">
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-[#99C8FF]">
                      {job.location}
                    </p>
                    <h3 className="mt-4 text-3xl font-black uppercase leading-tight tracking-[-0.04em] md:text-5xl">
                      {job.title}
                    </h3>
                    <p className="mt-5 text-lg leading-8 text-slate-300">
                      {job.summary}
                    </p>

                    <div className="mt-8 grid gap-3">
                      {job.scope.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 font-bold text-slate-200"
                        >
                          <span className="mr-2 text-[#2F8DFF]">✓</span>
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 rounded-2xl border border-[#2F8DFF]/20 bg-[#005BFF]/10 p-5">
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-[#99C8FF]">
                        Latest update • {job.updated}
                      </p>
                      <p className="mt-3 leading-7 text-slate-200">{job.update}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 p-5 md:p-7">
                  <div className="grid gap-4 sm:grid-cols-3">
                    {job.images.map((image, index) => (
                      <div
                        key={image}
                        className="relative h-64 overflow-hidden rounded-2xl bg-white/5"
                      >
                        <Image
                          src={image}
                          alt={`${job.title} progress photo ${index + 1}`}
                          fill
                          sizes="(min-width: 640px) 33vw, 100vw"
                          className="object-cover transition duration-500 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0B1118] px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#99C8FF]">
              Need a crew?
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.04em] md:text-6xl">
              Put JJDS on your next work front.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Mechanical installation, structural steel, process pipework,
              shutdowns, maintenance and industrial project support across
              Australia.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <a
              href="/#contact"
              className="rounded-full bg-gradient-to-r from-[#003C8F] via-[#005BFF] to-[#2F8DFF] px-7 py-4 font-black uppercase tracking-[0.12em]"
            >
              Send an RFQ
            </a>
            <a
              href={`tel:${phone}`}
              className="rounded-full border border-white/15 bg-white/5 px-7 py-4 font-black uppercase tracking-[0.12em]"
            >
              Call JJDS
            </a>
          </div>
        </div>
      </section>

      <footer className="px-5 py-10 text-center text-sm text-slate-500">
        JJDS Industries Pty Ltd • ABN 39 700 250 157 • ACN 700 250 157
      </footer>
    </main>
  );
}
