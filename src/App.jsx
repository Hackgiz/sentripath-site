import Logo from './components/Logo'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white text-slate-800">
      <header className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo size={34} />
          <span className="font-extrabold text-xl tracking-tight">SentriPath <span className="text-slate-900">PM</span></span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#screens" className="hover:text-slate-900">Screens</a>
          <a href="#faq" className="hover:text-slate-900">FAQ</a>
          <a href="#download" className="hover:text-slate-900">Download</a>
        </nav>
      </header>
c
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 pt-6 pb-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">Free & Community‑driven</div>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">Physical Security <span className="text-blue-600">Project Management</span></h1>
            <p className="mt-4 text-slate-600">SentriPath PM centralizes RFIs, Submittals, Change Orders, commissioning checklists, and asset labels into one lightweight app designed for physical security programs.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a id="download" className="inline-flex items-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2" href="https://downloads.example.com/SentriPathPM.dmg"><span className="mr-2">⬇</span> Download (macOS)</a>
              <a className="inline-flex items-center rounded-xl border border-slate-300 text-slate-900 px-4 py-2" href="#features">Explore Features</a>
              <a className="inline-flex items-center text-slate-700 px-2 py-2" href="https://github.com/yourname/sentripath" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>
          <div className="rounded-3xl border bg-white shadow-xl p-6">
            <div className="flex items-center gap-3 mb-4"><Logo size={28} /><div className="font-bold">SentriPath PM — Dashboard</div></div>
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div className="rounded-xl border p-3"><div className="font-semibold">Open RFIs</div><div className="text-3xl font-extrabold mt-2">12</div></n></div>
              <div className="rounded-xl border p-3"><div className="font-semibold">Pending Submittals</div><div className="text-3xl font-extrabold mt-2">7</div></div>
              <div className="rounded-xl border p-3"><div className="font-semibold">Commissioning</div><div className="text-3xl font-extrabold mt-2">68%</div></div>
            </div>
            <div className="mt-4 rounded-xl border p-4">
              <div className="font-semibold mb-2">Risk Heatmap</div>
              <div className="grid grid-cols-6 gap-1">
                {Array.from({ length: 36 }).map((_, i) => (<div key={i} className={`h-3 rounded ${i % 7 === 0 ? "bg-red-400" : i % 5 === 0 ? "bg-yellow-400" : "bg-green-300"}`} />))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-3 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium border border-blue-100">Capabilities</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Everything a physical security PM actually needs</h2>
          <p className="mt-3 text-base text-slate-600">Built for access control, video surveillance, and life‑safety projects.</p>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[{t:"RFIs, Submittals & COs",d:"Centralize docs, track statuses, and export shareable PDFs. Keep an auditable trail for every decision."},{t:"Commissioning + Sign‑off",d:"Pre‑functional and functional tests with digital signatures — by zone, device type, or contractor."},{t:"QR Device Labels",d:"Auto‑generate labels and export every device QR into a single printable PDF. Scan to jump to the asset."},{t:"Risk Register & Heatmap",d:"Score likelihood/impact, visualize hotspots, and attach mitigations to owners with due dates."},{t:"Role‑based Access",d:"Invite read‑only viewers (GC, owner’s reps) or editors (integrators). Fine‑grained permissions."},{t:"Change Control",d:"Tie changes to requirements and drawings. Maintain version history with clear deltas."}].map((f,i)=>(<div key={i} className="h-full border-slate-200 shadow-sm rounded-2xl border p-5 text-slate-600 text-sm leading-relaxed"><div className="text-slate-900 font-semibold mb-1">{f.t}</div><p>{f.d}</p></div>))}
        </div>
      </section>

      <section id="screens" className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center"><div className="inline-block mb-3 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium border border-blue-100">Walkthrough</div><h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">From kickoff to closeout</h2><p className="mt-3 text-base text-slate-600">A simple flow that matches real project phases.</p></div>
        <div className="max-w-6xl mx-auto px-4 mt-10 grid md:grid-cols-3 gap-6">
          {[{t:"Scope & Intake",d:"Import drawings/devices, baseline requirements, stakeholders."},{t:"Build & Track",d:"RFIs/Submittals, COs, field notes, progress snapshots."},{t:"Commission & Handover",d:"Checklists, punch list closeout, as‑built export."}].map((s,idx)=>(<div key={idx} className="rounded-2xl border p-5 bg-white border-slate-200"><div className="text-lg font-semibold text-slate-900 mb-1">{s.t}</div><div className="text-sm text-slate-600">{s.d}</div></div>))}
        </div>
      </section>

      <section id="faq" className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center"><div className="inline-block mb-3 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium border border-blue-100">FAQ</div><h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Good to know</h2></div>
        <div className="max-w-3xl mx-auto px-4 mt-8 space-y-6 text-slate-700">
          <details className="rounded-xl border p-4 bg-white"><summary className="font-semibold cursor-pointer">Is SentriPath PM free?</summary><p className="mt-2 text-sm">Yes. The app is free. If we add optional cloud sync later, it will remain opt‑in.</p></details>
          <details className="rounded-xl border p-4 bg-white"><summary className="font-semibold cursor-pointer">What OS is supported?</summary><p className="mt-2 text-sm">macOS to start. Windows/Web are on the roadmap based on community demand.</p></details>
          <details className="rounded-xl border p-4 bg-white"><summary className="font-semibold cursor-pointer">Can I import from Excel?</summary><p className="mt-2 text-sm">Yes — CSV imports for devices and rooms are supported. More importers coming.</p></details>
        </div>
      </section>

      <section id="download" className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-extrabold text-slate-900">Ready to streamline your physical security projects?</h3>
          <p className="mt-3 text-slate-600">Download the macOS app. It’s free.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a className="inline-flex items-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2" href="https://downloads.example.com/SentriPathPM.dmg">⬇ Download</a>
            <a className="inline-flex items-center rounded-xl border border-slate-300 text-slate-900 px-4 py-2" href="mailto:hello@sentripath.app?subject=SentriPath%20Feedback">Contact</a>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-slate-500">© {new Date().getFullYear()} SentriPath PM — Free project management for physical security</footer>
    </div>
  )
}
