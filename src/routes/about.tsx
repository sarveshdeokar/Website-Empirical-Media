import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import CTA from "@/components/site/CTA";
import Marquee from "@/components/site/Marquee";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Empirical Media" },
      { name: "description", content: "We are an independent, full-stack media and brand agency based in Bengaluru, building work across TV, digital, commerce and product." },
      { property: "og:title", content: "About — Empirical Media" },
      { property: "og:description", content: "Independent. Full-stack. Engineered for outcomes." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <section className="relative pt-40 pb-24 noise">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="relative mx-auto max-w-7xl px-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">// About</span>
            <h1 className="mt-4 font-display text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95]">
              We're a studio
              <br />
              for brands that
              <br />
              <span className="text-gradient">refuse to coast.</span>
            </h1>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12">
            <p className="text-xl leading-relaxed text-foreground">
              Empirical Media was founded with one thesis: that brand growth is too important to leave to channel specialists who never speak to each other.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              So we built an independent studio that runs strategy, media, creative, marketplaces and product under one roof — wired together with shared data and a shared standard of craft. From category-defining D2C brands to legacy enterprises rebooting for the next decade, we work with teams that treat marketing as a system, not a series of campaigns.
            </p>
          </div>
        </section>

        <section className="py-20 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden">
            {[
              ["Independent", "Owner-operated since day one. Your incentives are our incentives."],
              ["Full-stack", "Strategy, media, brand, commerce, product — one accountable team."],
              ["Empirical", "Every recommendation backed by data. Every quarter, audited honestly."],
            ].map(([t, d]) => (
              <div key={t} className="bg-card p-10">
                <h3 className="font-display text-2xl font-semibold text-gradient">{t}</h3>
                <p className="mt-3 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <Marquee />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
