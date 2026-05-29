import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Calendar } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-5xl">
          <h1 className="font-display text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.88] animate-fade-up">
            360 Digital
            <br />
            <span className="text-foreground/40">Media to Sales</span>
          </h1>

          <div className="mt-12 grid md:grid-cols-12 gap-8 items-end">
            <p
              className="md:col-span-7 text-lg md:text-2xl text-foreground/75 leading-relaxed max-w-2xl opacity-0 animate-fade-up"
              style={{ animationDelay: "0.15s" }}
            >
              From Television to Total Marketing Intelligence — Empirical Media unites
              Linear TV, Connected TV, Digital and Commerce into one seamless performance framework.
            </p>
            <div
              className="md:col-span-5 flex flex-wrap gap-3 md:justify-end opacity-0 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Link
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-4 font-medium transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
              >
                Start a project
                <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
              </Link>

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
