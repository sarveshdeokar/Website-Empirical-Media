import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Calendar } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-5xl">
          <p className="font-mono text-xs font-bold tracking-[0.2em] text-foreground/50 uppercase mb-6 animate-fade-up">
            // From Television to Total Marketing Intelligence
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.88] animate-fade-up">
            Every impression,
            <br />
            <span className="text-gradient">made to count.</span>
          </h1>

          <div className="mt-12 grid md:grid-cols-12 gap-8 items-end">
            <p
              className="md:col-span-7 text-lg md:text-2xl text-foreground/75 leading-relaxed max-w-2xl opacity-0 animate-fade-up"
              style={{ animationDelay: "0.15s" }}
            >
              Over a decade of trust, transparency and measurable impact in India's TV ecosystem —
              now evolving into a full-funnel marketing intelligence partner that unites Linear TV,
              CTV, Digital and Commerce into one seamless performance framework.
            </p>
            <div
              className="md:col-span-5 flex flex-wrap gap-3 md:justify-end opacity-0 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-4 font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
                style={{ background: "var(--gradient-brand)" }}
              >
                Start a project
                <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
              </Link>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/80 px-7 py-4 font-medium hover:bg-surface transition-colors"
              >
                <Calendar size={16} />
                Book a meeting
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
