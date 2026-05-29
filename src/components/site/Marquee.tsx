import { clients } from "@/lib/clients";

export default function Marquee() {
  const loop = [...clients, ...clients];
  return (
    <section className="relative py-20 overflow-hidden border-y border-border">
      <div className="mx-auto max-w-7xl px-6 mb-10 flex items-baseline justify-between">
        <h2 className="font-display text-2xl md:text-3xl">
          Trusted across <span className="text-gradient">FMCG, Retail & Wellness</span>
        </h2>
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground hidden md:block">
          // {clients.length}+ partners
        </span>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex gap-10 animate-marquee w-max items-center">
          {loop.map((c, i) => (
            <a
              key={c.name + i}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              title={c.name}
              aria-label={c.name}
              className="h-32 w-60 flex items-center justify-center shrink-0 rounded-2xl bg-card border border-border px-6 hover:border-primary/40 hover:shadow-[var(--shadow-glow)] transition"
            >
              <img
                src={c.logo}
                alt={c.name}
                loading="lazy"
                className="max-h-24 max-w-full object-contain opacity-90 hover:opacity-100 transition"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
