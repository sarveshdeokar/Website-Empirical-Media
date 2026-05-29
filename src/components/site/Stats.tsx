const stats = [
  ["11+", "Years on the air"],
  ["21+", "Brand partners"],
  ["4x", "Avg ROAS lift"],
  ["5", "South India states"],
] as const;

export default function Stats() {
  return (
    <section
      className="border-y border-border"
      style={{ backgroundColor: "color-mix(in oklab, var(--surface) 50%, var(--background))" }}
    >
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 divide-x divide-[color:var(--border)]">
        {stats.map(([k, v]) => (
          <div key={k} className="p-8 md:p-12">
            <div className="font-display text-4xl md:text-5xl font-bold tracking-tight">{k}</div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/55">
              {v}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
