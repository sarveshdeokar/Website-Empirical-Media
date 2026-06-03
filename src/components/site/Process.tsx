const steps = [
  { k: "01", t: "Top Funnel — Linear TV", d: "DATA-Led TV planning and audit. Optimise GRPs, frequency and cost-per-reach across languages and states. Where brand stories begin." },
  { k: "02", t: "Mid Funnel — Connected TV", d: "Cross-platform modeling that fuses Linear TV datasets — removing duplication, surfacing incremental, digital-first audiences." },
  { k: "03", t: "Lower Funnel — Digital & Commerce", d: "Mapping exposure to Google, Meta, YouTube and marketplaces (Amazon, Flipkart, Blinkit, Tata 1mg). From clicks to carts to customers." },
];

export default function Process() {
  return (
    <section className="relative py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">// The Full-Funnel Framework</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tighter">
              One funnel. <span className="text-gradient">Every screen.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              We unite broadcast scale with digital precision — so every impression
              created upstream can be measured against revenue downstream.
            </p>
          </div>
          <div className="space-y-px bg-border rounded-2xl overflow-hidden">
            {steps.map((s) => (
              <div key={s.k} className="bg-card p-8 grid grid-cols-[auto_1fr] gap-8 items-start hover:bg-surface-elevated transition">
                <span className="font-mono text-sm text-primary">{s.k}</span>
                <div>
                  <h3 className="font-display text-2xl font-semibold">{s.t}</h3>
                  <p className="mt-2 text-muted-foreground max-w-lg">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
