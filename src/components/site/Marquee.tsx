const clients = Object.values(
  import.meta.glob("@/assets/clients/*.png", { eager: true, import: "default" }),
) as string[];

export default function Marquee() {
  const loop = [...clients, ...clients];
  return (
    <section className="relative py-20 overflow-hidden border-y border-border">
      <div className="mx-auto max-w-7xl px-6 mb-8 flex items-baseline justify-between">
        <h2 className="font-display text-2xl md:text-3xl">
          Trusted by brands building <span className="text-gradient">what's next</span>
        </h2>
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground hidden md:block">
          // 100+ partners
        </span>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex gap-12 animate-marquee w-max">
          {loop.map((src, i) => (
            <div key={i} className="h-16 w-32 flex items-center justify-center shrink-0">
              <img
                src={src}
                alt=""
                className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 transition invert brightness-200 contrast-0"
                style={{ filter: "brightness(0) invert(0.85)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
