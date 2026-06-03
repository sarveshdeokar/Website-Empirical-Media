import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Empirical Media" },
      { name: "description", content: "Empirical Media: the intelligence behind every campaign. Bridging broadcast scale with digital precision." },
      { property: "og:title", content: "About — Empirical Media" },
      { property: "og:description", content: "Independent. Insight-Driven. Integrated." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <section className="relative pt-32 pb-12 noise">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <span className="font-mono text-base md:text-lg uppercase tracking-[0.2em] text-primary">// About Us</span>
            <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95]">
              The Intelligence
              <br />
              Behind <span className="text-gradient">Every Campaign.</span>
            </h1>
          </div>
        </section>

        <section className="pb-16">
          <div className="mx-auto max-w-4xl px-6 flex flex-col gap-6 text-center">
            <p className="text-lg md:text-xl leading-relaxed text-foreground">
              Empirical Media was founded on a simple belief — every advertising rupee should deliver measurable value. Our journey began in television planning and auditing, where we helped leading brands optimize their Campaign Performance, reduce Ads Spends, and increase ROI.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground">
              As consumer attention shifted across devices, so did we. Today, Empirical Media bridges broadcast scale with digital precision, combining deep data analytics, platform insights, and commerce intelligence to build campaigns that connect awareness to action.
            </p>
          </div>
        </section>

        <section className="py-16 border-y border-border">

          <div className="mx-auto max-w-6xl px-6 text-center">
            <span className="font-mono text-base md:text-lg uppercase tracking-widest text-primary">// Our Differentiator</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tighter">
              Independent. Insight-Driven. <span className="text-gradient">Integrated.</span>
            </h2>

            <div className="mt-12 grid md:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden">
              {[
                ["No Media Bias", "We don't sell ad inventory. We provide neutral, data-based advice."],
                ["Cross-Platform Visibility", "We see the full picture: TV, CTV, Digital, and Commerce in one dashboard."],
                ["Data-Led Decisions", "Every insight is backed by hard data — from Media impressions to digital dashboards and sales metrics."],
                ["Audit Integrity", "As an independent auditor, Empirical ensures your campaigns are accountable, efficient, and transparent."],
              ].map(([t, d]) => (
                <div key={t} className="bg-card p-10">
                  <h3 className="font-display text-2xl font-semibold text-gradient">{t}</h3>
                  <p className="mt-3 text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-8">

            <article className="group relative overflow-hidden rounded-3xl bg-card border border-border p-10 md:p-12 hover:border-primary/40 transition">
              <div
                className="absolute -top-32 -right-32 h-72 w-72 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition"
                style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
              />
              <div className="relative">
                <span className="font-mono text-base md:text-lg uppercase tracking-widest text-primary">// Data Intelligence Engine</span>
                <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tighter">
                  Turning Data into <span className="text-gradient">Marketing Clarity.</span>
                </h2>
                <p className="mt-6 text-muted-foreground">
                  Our proprietary analytics framework brings every layer of data together:
                </p>
                <ul className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    ["Media × CTV Fusion Models", "Measure overlap and incremental reach."],
                    ["Attribution Mapping", "Link exposure to engagement and sales."],
                    ["Regional Analytics", "Decode linguistic and cultural nuances of South India."],
                    ["ROI Dashboards", "Unified visualization of spend, reach, and performance."],
                  ].map(([t, d]) => (
                    <li key={t} className="rounded-2xl bg-surface-elevated/50 border border-border/60 p-5">
                      <div className="font-display font-semibold text-gradient">{t}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{d}</div>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 italic text-foreground/80 border-l-2 border-primary/60 pl-4">
                  Empirical transforms raw media data into actionable marketing intelligence.
                </p>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-3xl bg-card border border-border p-10 md:p-12 hover:border-primary/40 transition flex flex-col">
              <div
                className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition"
                style={{ background: "radial-gradient(circle, var(--secondary), transparent 70%)" }}
              />
              <div className="relative">
                <span className="font-mono text-base md:text-lg uppercase tracking-widest text-primary">// Impact Measurement</span>
                <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tighter">
                  From Awareness <span className="text-gradient">to Shelf.</span>
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Our analytics go beyond screens — connecting media exposure to actual market movement. Through geo-level mapping and retail data correlation, we track how awareness created by TV or CTV translates into offline sales uplift and retail velocity.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  This is true full-funnel measurement — closing the loop between campaign and consumer.
                </p>
              </div>
              <div className="relative mt-auto pt-10 grid grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
                {[
                  ["Geo", "Mapping"],
                  ["Retail", "Velocity"],
                  ["Full", "Funnel"],
                ].map(([k, v]) => (
                  <div key={k} className="bg-surface-elevated/50 p-4 text-center">
                    <div className="font-display text-lg font-bold text-gradient">{k}</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{v}</div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>


        <section className="py-20 border-t border-border">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <span className="font-mono text-base md:text-lg uppercase tracking-widest text-primary">// Vision</span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold tracking-tighter leading-[0.95]">
              Bridging Broadcast <br/>and <span className="text-gradient">Digital.</span>
            </h2>
            <p className="mt-6 mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
              Empirical Media's vision is to be India's leading Marketing Intelligence Consultancy, redefining the agency's role from media buyer to strategic growth partner. We unite the art of storytelling with the science of analytics, enabling marketers to see the real impact of every campaign, across every touchpoint.
            </p>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
