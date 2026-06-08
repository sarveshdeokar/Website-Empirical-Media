import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 sm:p-10 md:p-20 noise">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div
            className="absolute -top-40 -right-20 h-[500px] w-[500px] rounded-full blur-3xl opacity-40"
            style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
          />
          <div className="relative max-w-3xl">
            <span className="font-mono text-sm md:text-lg uppercase tracking-widest text-primary">// Contact Us</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] sm:leading-[0.95]">
              Let's turn your campaigns into
              <br />
              <span className="text-gradient">measurable growth stories.</span>
            </h2>
            <p className="mt-5 sm:mt-6 text-base md:text-lg text-muted-foreground max-w-xl">
              Empirical Media Pvt. Ltd. — Bengaluru, India.
              <br />
              contact@empiricalmedia.in · www.empiricalmedia.in
            </p>
            <Link
              to="/contact"
              className="mt-8 sm:mt-10 group inline-flex items-center gap-3 rounded-2xl bg-primary text-primary-foreground px-5 sm:px-7 py-4 sm:py-5 text-sm sm:text-base font-medium hover:shadow-[var(--shadow-glow-lg)] transition"
            >
              Start a conversation
              <ArrowUpRight className="group-hover:rotate-45 transition" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
