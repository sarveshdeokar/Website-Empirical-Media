export default function Impact() {
  return (
    <section
      className="relative py-32 border-t border-border overflow-hidden"
      style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, var(--brand) 0%, transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <p className="font-mono text-xs font-bold tracking-[0.2em] uppercase opacity-50 mb-5">
              // Impact measurement
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.02]">
              From awareness <span className="opacity-50">to shelf.</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-lg opacity-75 leading-relaxed">
              Our analytics go beyond screens. Geo-level mapping and retail data correlation track
              how awareness from TV and CTV becomes offline sales uplift and retail velocity —
              closing the loop between campaign and consumer.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-background/10 rounded-2xl overflow-hidden border border-background/10">
          {[
            ["Exposure", "TV + CTV impressions mapped at geo and audience level."],
            ["Engagement", "Search, social and marketplace signals tied back to exposure."],
            ["Shelf movement", "Retail velocity and sales uplift correlated by region."],
          ].map(([k, v]) => (
            <div key={k} className="p-8 md:p-10" style={{ backgroundColor: "var(--ink)" }}>
              <div className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase opacity-50 mb-3">
                {k}
              </div>
              <p className="opacity-80 leading-relaxed">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
