import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Calendar } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";
import logo from "@/assets/logo.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden noise">
      <div className="absolute inset-0 grid-bg animate-grid opacity-60 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div
        className="absolute top-1/4 -right-40 h-[500px] w-[500px] rounded-full blur-3xl opacity-30 animate-float"
        style={{ background: "radial-gradient(circle, var(--secondary), transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 -left-40 h-[600px] w-[600px] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 w-full">
        <img
          src={logo}
          alt="Empirical Media"
          className="h-16 md:h-20 w-auto mb-8 animate-logo-reveal"
        />

        <div className="flex items-center gap-3 mb-6">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Marketing Intelligence Consultancy · Bengaluru · Est. 2014
          </span>
        </div>

        <h1 className="font-display text-5xl sm:text-7xl lg:text-[8.5rem] font-bold leading-[0.92] tracking-tighter">
          From TV
          <br />
          <span className="text-gradient">to Transaction.</span>
        </h1>

        <div className="mt-10 grid md:grid-cols-2 gap-10 items-end">
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Empirical Media is India's full-funnel marketing intelligence partner —
            uniting Linear TV, Connected TV, Digital and Commerce into one measurable
            performance framework. Independent. Insight-driven. Integrated.
          </p>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-2xl bg-primary text-primary-foreground px-6 py-4 font-medium hover:shadow-[var(--shadow-glow-lg)] transition"
            >
              Start a project
              <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
            </Link>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-border px-6 py-4 font-medium hover:bg-muted transition"
            >
              <Calendar size={18} />
              Book a meeting
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden glass">
          {[
            ["11+", "Years on the air"],
            ["21+", "Brand partners"],
            ["4x", "Avg ROAS lift"],
            ["5", "South India states"],
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
