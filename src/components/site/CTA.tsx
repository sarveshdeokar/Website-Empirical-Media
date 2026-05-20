import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-20 noise">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div
            className="absolute -top-40 -right-20 h-[500px] w-[500px] rounded-full blur-3xl opacity-40"
            style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
          />
          <div className="relative max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">// Let's build</span>
            <h2 className="mt-3 font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95]">
              Have a brand to
              <br />
              <span className="text-gradient">unleash?</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Tell us what you're building. We'll come back within a working day with a perspective worth your time.
            </p>
            <Link
              to="/contact"
              className="mt-10 group inline-flex items-center gap-3 rounded-2xl bg-primary text-primary-foreground px-7 py-5 font-medium hover:shadow-[var(--shadow-glow-lg)] transition"
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
