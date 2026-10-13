export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#050505] px-5 text-white">
      <div className="max-w-xl">
        <p className="text-sm font-semibold tracking-widest text-[#99C8FF]">JJDS INDUSTRIES / 404</p>
        <h1 className="mt-5 text-5xl">We couldn’t find that page.</h1>
        <p className="mt-5 leading-7 text-slate-300">Find our industrial installation services or get in touch about your project.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="/" className="rounded-full bg-[#005BFF] px-6 py-3">Back to home</a>
          <a href="/#contact" className="rounded-full border border-white/30 px-6 py-3">Contact JJDS</a>
        </div>
      </div>
    </main>
  );
}
