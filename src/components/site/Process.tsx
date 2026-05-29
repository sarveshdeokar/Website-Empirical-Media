import { ArrowDown } from "lucide-react";

const steps = [
  {
    k: "01",
    stage: "Top Funnel",
    t: "Linear TV — Mass Awareness",
    d: "BARC-led TV planning and audit. Optimise GRPs, frequency and cost-per-reach across languages and states. Where brand stories begin.",
    width: "w-full",
    accent: "from-primary/30 to-primary/5",
  },
  {
    k: "02",
    stage: "Mid Funnel",
    t: "Connected TV — Precision Targeting",
    d: "Cross-platform modeling that fuses BARC and CTV datasets — removing duplication, surfacing incremental, digital-first audiences.",
    width: "w-[88%]",
    accent: "from-secondary/30 to-secondary/5",
  },
  {
    k: "03",
    stage: "Lower Funnel",
    t: "Digital & Commerce — Conversions",
    d: "Mapping exposure to Google, Meta, YouTube and marketplaces (Amazon, Flipkart, Blinkit, Tata 1mg). From clicks to carts to customers.",
    width: "w-[72%]",
    accent: "from-primary/40 to-secondary/10",
  },
  {
    k: "04",
    stage: "The Loop",
    t: "Audit & Attribution — Shelf Movement",
    d: "Geo-mapping, MMM and retail correlation close the loop between media spend and measurable shelf movement.",
    width: "w-[56%]",
    accent: "from-secondary/40 to-primary/20",
  },
];

export default function Process() {
  return (
    <section className="relative py-32 border-t border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">// The Full-Funnel Framework</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold tracking-tighter">
            One funnel. <span className="text-gradient">Every screen.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl">
            We unite broadcast scale with digital precision — so every impression
            created upstream is measured against revenue downstream.
          </p>
        </div>

        <div className="relative flex flex-col items-center gap-6">
          {steps.map((s, i) => (
            <div key={s.k} className={`${s.width} relative`}>
              <div
                className={`relative rounded-3xl border border-border bg-gradient-to-br ${s.accent} backdrop-blur-sm overflow-hidden`}
              >
                <div className="bg-card/80 p-8 md:p-10 grid md:grid-cols-[auto_auto_1fr] gap-6 md:gap-10 items-start">
                  <span className="font-mono text-sm text-primary">{s.k}</span>
                  <div className="md:min-w-[200px]">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {s.stage}
                    </span>
                    <h3 className="mt-2 font-display text-2xl md:text-3xl font-semibold leading-tight">
                      {s.t}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">{s.d}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-3">
                  <ArrowDown
                    size={28}
                    className="text-primary/70 animate-bounce"
                    style={{ animationDuration: "2.4s" }}
                  />
                </div>
              )}
            </div>
          ))}

          <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Awareness → Shelf · Loop closed
          </div>
        </div>
      </div>
    </section>
  );
}
