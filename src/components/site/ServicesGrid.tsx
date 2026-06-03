import { Link } from "@tanstack/react-router";
import { services } from "@/lib/services";
import { ArrowUpRight } from "lucide-react";

export default function ServicesGrid() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">
          <div className="max-w-2xl">
            <span className="font-mono text-base md:text-lg uppercase tracking-widest text-primary">// What we do</span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold tracking-tighter">
              Independent.
              <br />
              Insight-driven. <span className="text-gradient">Integrated.</span>
            </h2>
          </div>
          <Link to="/services" className="font-mono text-sm hover:text-primary inline-flex items-center gap-2">
            All services <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services"
              hash={s.slug}
              className="group relative bg-card p-7 hover:bg-surface-elevated transition min-h-[260px] flex flex-col"
            >
              <span className="font-mono text-xs text-muted-foreground">{s.number}</span>
              <h3 className="mt-4 font-display text-xl font-semibold group-hover:text-primary transition">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{s.tagline}</p>
              <ArrowUpRight
                size={18}
                className="mt-auto self-end text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
