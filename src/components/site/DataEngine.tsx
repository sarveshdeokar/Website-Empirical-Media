const layers = [
  {
    t: "Media × CTV Fusion Models",
    d: "Measure overlap and incremental reach across linear and connected TV.",
  },
  {
    t: "Attribution Mapping",
    d: "Link upstream exposure to engagement, conversion and sale.",
  },
  {
    t: "Regional Analytics",
    d: "Decode linguistic and cultural nuances across South India's five states.",
  },
  {
    t: "ROI Dashboards",
    d: "Unified visualisation of spend, reach and performance — one source of truth.",
  },
];

export default function DataEngine() {
  return (
    <section
      className="relative py-32 border-t border-border"
      style={{ backgroundColor: "var(--paper-2)" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <p className="font-mono text-xs font-bold tracking-[0.2em] text-foreground/40 uppercase mb-5">
            // Data intelligence engine
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.02]">
            Turning data into <span className="text-gradient">marketing clarity.</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-xl">
            Our proprietary analytics framework brings every layer of data together — so every
            decision is backed by evidence, not instinct.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {layers.map((l, i) => (
            <article
              key={l.t}
              className="group p-8 rounded-2xl border border-border bg-background hover:-translate-y-1 transition-all duration-500"
            >
              <div className="font-mono text-[11px] font-bold tracking-[0.2em] text-foreground/40 mb-6">
                / {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-xl font-bold mb-3 leading-tight">{l.t}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{l.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
