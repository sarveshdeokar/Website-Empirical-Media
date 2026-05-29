const cases = [
  {
    metric: "+22%",
    label: "Incremental reach",
    body: "A South Indian personal care brand grew reach by 22% by layering CTV audiences beyond linear TV viewers.",
    tag: "Personal Care",
  },
  {
    metric: "4×",
    label: "ROAS uplift",
    body: "A wellness company quadrupled return on ad spend through full-funnel tracking across Meta, Google and marketplace data.",
    tag: "Wellness",
  },
  {
    metric: "−18%",
    label: "Media cost per reach",
    body: "A retail group optimised regional TV GRPs by 18%, cutting cost per reach while expanding brand recall.",
    tag: "Retail",
  },
];

export default function CaseStudies() {
  return (
    <section className="relative py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-bold tracking-[0.2em] text-foreground/40 uppercase mb-5">
              // Case studies
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.02]">
              Real results. <span className="text-foreground/40">Real intelligence.</span>
            </h2>
          </div>
          <p className="text-foreground/60 max-w-sm">
            A snapshot of the measurable change we've delivered for brands across categories and
            South India's regional markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cases.map((c) => (
            <article
              key={c.label}
              className="group flex flex-col p-8 rounded-2xl border border-border bg-background min-h-[320px] hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(13,13,13,0.25)] transition-all duration-500"
            >
              <div className="font-mono text-[10px] font-bold tracking-[0.2em] text-foreground/40 mb-6 uppercase">
                {c.tag}
              </div>
              <div className="font-display text-6xl md:text-7xl font-bold tracking-tighter text-gradient leading-none mb-3">
                {c.metric}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/55 mb-6">
                {c.label}
              </div>
              <p className="text-foreground/70 leading-relaxed mt-auto">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
