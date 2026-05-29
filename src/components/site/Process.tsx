const stages = [
  {
    n: "01",
    stage: "Top Funnel",
    t: "Linear TV — Mass Awareness",
    d: "BARC-led TV planning and audit. Optimise GRPs, frequency and cost-per-reach across languages and states. Where brand stories begin.",
    variant: "paper" as const,
  },
  {
    n: "02",
    stage: "Mid Funnel",
    t: "Connected TV — Precision",
    d: "Cross-platform modeling that fuses BARC and CTV datasets — removing duplication and surfacing incremental, digital-first audiences.",
    variant: "paper" as const,
  },
  {
    n: "03",
    stage: "Lower Funnel",
    t: "Digital & Commerce",
    d: "Mapping exposure to Google, Meta, YouTube and marketplaces (Amazon, Flipkart, Blinkit, Tata 1mg). From clicks to carts to customers.",
    variant: "paper" as const,
  },
  {
    n: "04",
    stage: "The Loop",
    t: "Audit & Attribution",
    d: "Geo-mapping, MMM and retail correlation close the loop between media spend and measurable shelf movement.",
    variant: "ink" as const,
  },
];

export default function Process() {
  return (
    <section className="relative py-32 border-t border-border" style={{ backgroundColor: "var(--paper-2)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <p className="font-mono text-xs font-bold tracking-[0.2em] text-foreground/40 uppercase mb-5">
            // The full-funnel framework
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.02]">
            One funnel. <span className="text-foreground/40">Every screen.</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-xl">
            We unite broadcast scale with digital precision — measuring every upstream impression
            against downstream revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {stages.map((s) => {
            const isInk = s.variant === "ink";
            return (
              <article
                key={s.n}
                className={`group p-8 rounded-2xl border transition-all duration-500 flex flex-col min-h-[280px] hover:-translate-y-1 ${
                  isInk
                    ? "bg-foreground text-background border-transparent shadow-[0_20px_60px_-20px_rgba(13,13,13,0.4)]"
                    : "bg-background border-border hover:shadow-[0_20px_60px_-30px_rgba(13,13,13,0.25)]"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full border flex items-center justify-center text-xs font-mono font-bold mb-8 ${
                    isInk ? "border-background/50" : "border-foreground"
                  }`}
                >
                  {s.n}
                </div>
                <p
                  className={`font-mono text-[10px] font-bold uppercase tracking-[0.2em] mb-2 ${
                    isInk ? "opacity-50" : "text-foreground/40"
                  }`}
                >
                  {s.stage}
                </p>
                <h3 className="font-display text-xl font-bold mb-4 leading-tight">{s.t}</h3>
                <p className={`text-sm leading-relaxed ${isInk ? "opacity-70" : "text-foreground/70"}`}>
                  {s.d}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
