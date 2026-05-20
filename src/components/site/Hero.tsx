import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden noise">
      <div className="absolute inset-0 grid-bg animate-grid opacity-60 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="absolute top-1/4 -right-40 h-[500px] w-[500px] rounded-full blur-3xl opacity-30 animate-float"
        style={{ background: "radial-gradient(circle, oklch(0.7 0.22 25 / 0.6), transparent 70%)" }}
      />
      <div className="absolute bottom-1/4 -left-40 h-[600px] w-[600px] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(circle, oklch(0.85 0.18 85 / 0.7), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 w-full">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Est. 2014 · Bengaluru — Booking Q2 / 26
          </span>
        </div>

        <h1 className="font-display text-5xl sm:text-7xl lg:text-[9rem] font-bold leading-[0.92] tracking-tighter">
          Media,
          <br />
          <span className="text-gradient">engineered</span>
          <br />
          for outcomes.
        </h1>

        <div className="mt-10 grid md:grid-cols-2 gap-10 items-end">
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Empirical Media is a full-stack agency for TV, digital, brand and commerce. We plan, design and grow brands across every screen that matters — with data at the core and craft at the edge.
          </p>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-2xl bg-primary text-primary-foreground px-6 py-4 font-medium hover:shadow-[var(--shadow-glow-lg)] transition"
            >
              Start a project
              <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-2xl border border-border px-6 py-4 font-medium hover:bg-muted transition"
            >
              See our work
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden glass">
          {[
            ["11+", "Years on the air"],
            ["100+", "Brands scaled"],
            ["₹150Cr+", "Media deployed"],
            ["8", "Specialist verticals"],
          ].map(([k, v]) => (
            <div key={k} className="bg-card p-6">
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient">{k}</div>
              <div className="mt-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
