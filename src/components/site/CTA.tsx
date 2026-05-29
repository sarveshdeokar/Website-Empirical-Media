import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="relative overflow-hidden rounded-[2rem] p-12 md:p-24 text-center"
          style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
        >
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center top, rgba(255,255,255,0.6), transparent 60%)",
            }}
          />
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="font-mono text-xs font-bold tracking-[0.2em] uppercase opacity-50 mb-6">
              // Let's build
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.98]">
              Turn campaigns into growth stories.
            </h2>
            <p className="mt-8 text-lg md:text-xl opacity-70 max-w-2xl mx-auto">
              Tell us what you're building. We'll come back within a working day with a
              data-backed perspective worth your time.
            </p>
            <Link
              to="/contact"
              className="group mt-12 inline-flex items-center gap-3 rounded-full px-10 py-5 font-bold uppercase tracking-[0.2em] text-sm transition-colors"
              style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}
            >
              Start a conversation
              <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
