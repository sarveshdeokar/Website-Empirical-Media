import { Link } from "@tanstack/react-router";
import { services } from "@/lib/services";
import { ArrowUpRight } from "lucide-react";

// Map services by slug for reliable bento ordering
const get = (slug: string) => services.find((s) => s.slug === slug)!;

type Tile = {
  slug: string;
  span: string;        // grid column span
  rowSpan?: string;    // grid row span
  variant?: "ink";     // dark tile
  showDescription?: boolean;
};

const tiles: Tile[] = [
  { slug: "strategic-consulting", span: "md:col-span-8", showDescription: true },
  { slug: "media-planning", span: "md:col-span-4" },
  { slug: "digital-marketing", span: "md:col-span-4", showDescription: true },
  { slug: "marketplace-management", span: "md:col-span-4" },
  { slug: "data-insights", span: "md:col-span-4", rowSpan: "md:row-span-2", variant: "ink", showDescription: true },
  { slug: "full-stack-marketing", span: "md:col-span-8", showDescription: true },
  { slug: "product-design", span: "md:col-span-6" },
  { slug: "creative-services", span: "md:col-span-6" },
];

export default function ServicesGrid() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex justify-between items-end mb-16 gap-6 flex-wrap">
          <div>
            <p className="font-mono text-xs font-bold tracking-[0.2em] text-foreground/40 uppercase mb-5">
              // What we do
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.02]">
              Independent.
              <br />
              Insight-driven. <span className="text-foreground/40">Integrated.</span>
            </h2>
          </div>
          <Link
            to="/services"
            className="font-mono text-xs font-bold uppercase tracking-[0.2em] inline-flex items-center gap-2 hover:underline decoration-2 underline-offset-8"
          >
            All services <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[240px]">
          {tiles.map((t) => {
            const s = get(t.slug);
            const isInk = t.variant === "ink";
            return (
              <Link
                key={s.slug}
                to="/services"
                hash={s.slug}
                className={`group relative p-7 md:p-8 rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-500 ${
                  t.span
                } ${t.rowSpan ?? ""} ${
                  isInk
                    ? "bg-foreground text-background border-transparent"
                    : "bg-surface text-foreground border-border hover:bg-foreground hover:text-background hover:border-transparent"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[11px] tracking-widest opacity-50">
                    {s.number} / {s.title.split(" ")[0]}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="opacity-40 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight">
                    {s.title}
                  </h3>
                  {t.showDescription && (
                    <p
                      className={`mt-3 text-sm md:text-base max-w-md leading-relaxed ${
                        isInk ? "opacity-70" : "opacity-65 group-hover:opacity-80"
                      }`}
                    >
                      {s.tagline}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
