const steps = [
  { k: "01", t: "Listen", d: "We start with your numbers, your team and the friction you actually feel." },
  { k: "02", t: "Model", d: "We model the opportunity — audience, channel, economics — before a single rupee moves." },
  { k: "03", t: "Make", d: "Strategy becomes craft: media plans, creative, product, marketplace systems." },
  { k: "04", t: "Measure", d: "Every quarter we audit ourselves against the outcomes we promised." },
];

export default function Process() {
  return (
    <section className="relative py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">// Process</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tighter">
              A four-beat loop, run on repeat.
            </h2>
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
