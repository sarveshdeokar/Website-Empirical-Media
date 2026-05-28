const clients = Object.entries(
  import.meta.glob("@/assets/clients/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  }),
) as [string, string][];

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
        <div className="flex gap-14 animate-marquee w-max items-center">
          {loop.map(([path, src], i) => (
            <div
              key={path + i}
              className="h-20 w-40 flex items-center justify-center shrink-0 rounded-xl bg-card border border-border px-4"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="max-h-14 max-w-full object-contain opacity-90 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
