const points = [
  {
    k: "No Media Bias",
    v: "We don't sell ad inventory. Our advice is neutral and data-based — built around your outcomes, not ours.",
  },
  {
    k: "Cross-Platform Visibility",
    v: "TV, CTV, Digital and Commerce in one dashboard. The full picture, never a stitched-together view.",
  },
  {
    k: "Data-Led Decisions",
    v: "Every insight is backed by hard data — from media impressions to digital dashboards and sales metrics.",
  },
  {
    k: "Audit Integrity",
    v: "As an independent auditor, we keep your campaigns accountable, efficient and transparent.",
  },
];

export default function Differentiator() {
  return (
    <section className="relative py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <p className="font-mono text-xs font-bold tracking-[0.2em] text-foreground/40 uppercase mb-5">
              // Our differentiator
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.02]">
              Independent.
              <br />
              <span className="text-foreground/40">Insight-driven.</span>
              <br />
              <span className="text-gradient">Integrated.</span>
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-6">
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Most agencies sell media. We sell clarity. Empirical sits on your side of the table —
              measuring, auditing and optimising every rupee across every screen.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {points.map((p, i) => (
            <article
              key={p.k}
              className="group p-8 rounded-2xl border border-border bg-background hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(13,13,13,0.25)] transition-all duration-500"
            >
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-foreground/40">
                  / {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl font-bold tracking-tight">{p.k}</h3>
              </div>
              <p className="text-foreground/70 leading-relaxed">{p.v}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
