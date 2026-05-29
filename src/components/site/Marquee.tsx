import { clients } from "@/lib/clients";

export default function Marquee() {
  const loop = [...clients, ...clients];
  return (
    <section className="relative py-24 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 mb-10 flex items-baseline justify-between gap-6">
        <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight">
          Trusted across <span className="text-foreground/40">FMCG, Retail & Wellness</span>
        </h2>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/40 hidden md:block">
          // {clients.length}+ partners
        </span>
      </div>
      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10"
          style={{ background: "linear-gradient(to right, var(--background), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10"
          style={{ background: "linear-gradient(to left, var(--background), transparent)" }}
        />
        <div className="flex gap-6 animate-marquee w-max items-center">
          {loop.map((c, i) => (
            <a
              key={c.name + i}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              title={c.name}
              aria-label={c.name}
              className="h-32 w-60 flex items-center justify-center shrink-0 rounded-2xl bg-surface border border-border px-8 hover:bg-foreground transition-colors duration-500 group"
            >
              <img
                src={c.logo}
                alt={c.name}
                loading="lazy"
                className="max-h-24 max-w-full object-contain opacity-80 group-hover:opacity-0 transition-opacity duration-500"
              />
              <span
                className="absolute font-display text-lg font-bold text-background opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                {c.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
