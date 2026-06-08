import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight, Calendar, Linkedin, Download, Lock } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Empirical Media" },
      { name: "description", content: "Tell us what you're building. We'll come back within a working day." },
      { property: "og:title", content: "Contact — Empirical Media" },
      { property: "og:description", content: "Start a conversation with Empirical Media." },
    ],
  }),
  component: ContactPage,
});

const PORTFOLIO_ENDPOINT = "/api/portfolio";

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <section className="relative pt-28 md:pt-40 pb-12 md:pb-16 noise">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
            <span className="font-mono text-sm md:text-lg uppercase tracking-[0.2em] text-primary">// Contact</span>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-[1.05] sm:leading-[0.95]">
              Strategy that scales.
              <br />
              <span className="text-gradient">Execution that delivers.</span>
            </h1>
            <p className="mt-5 md:mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Move beyond traditional media buying. Let's engineer a custom performance framework that turns your data into definitive growth.
            </p>
            <div className="mt-7 md:mt-8 flex flex-wrap gap-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-primary text-primary-foreground px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base font-medium hover:shadow-[var(--shadow-glow)] transition"
              >
                <Calendar size={18} />
                Book a Meeting
                <ArrowUpRight size={16} className="opacity-80" />
              </a>
              <a
                href="https://www.linkedin.com/company/empiricalmediabangalore/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base font-medium hover:border-primary transition"
              >
                <Linkedin size={18} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-10">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="glass rounded-3xl p-6 sm:p-8 md:p-12 space-y-5 sm:space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                <Field label="Name" name="name" placeholder="Your full name" />
                <Field label="Company" name="company" placeholder="Where you work" />
                <Field label="Email" name="email" type="email" placeholder="you@brand.com" />
                <Field label="Phone" name="phone" placeholder="+91 …" />
              </div>
              <div>
                <label className="font-mono text-sm md:text-lg uppercase tracking-widest text-muted-foreground">What can we help with?</label>
                <textarea
                  rows={5}
                  placeholder="A line or two about your brand and what you're trying to move."
                  className="mt-2 w-full rounded-xl bg-background border border-border p-3 sm:p-4 text-base outline-none focus:border-primary transition"
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="group inline-flex items-center gap-3 rounded-2xl bg-primary text-primary-foreground px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base font-medium hover:shadow-[var(--shadow-glow)] transition disabled:opacity-60"
              >
                {sent ? "Thanks — we'll be in touch." : "Send message"}
                <ArrowUpRight className="group-hover:rotate-45 transition" size={18} />
              </button>
            </form>

            <aside className="flex flex-col gap-4">
              <div className="space-y-px bg-border rounded-3xl overflow-hidden">
                <ContactCard icon={<Mail size={18} />} label="New business" value="sales@empiricalmedia.in" href="mailto:sales@empiricalmedia.in" />
                <ContactCard icon={<Phone size={18} />} label="Say hello" value="+91 63667 99955" href="tel:+916366799955" />
                <ContactCard icon={<Linkedin size={18} />} label="LinkedIn" value="empiricalmediabangalore" href="https://www.linkedin.com/company/empiricalmediabangalore/" />
                <ContactCard icon={<MapPin size={18} />} label="Address" value="#367, 2nd Floor, 8th Main Road, 11th Cross, 2nd Block, Jayanagar, Bengaluru, Karnataka 560011" />
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=WHQM%2B92+Bengaluru%2C+Karnataka"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-3xl overflow-hidden border border-border bg-card hover:border-primary/50 transition flex-1 min-h-[280px]"
                aria-label="Open studio location in Google Maps"
              >
                <iframe
                  title="Empirical Media studio location"
                  src="https://www.google.com/maps?q=WHQM%2B92+Bengaluru%2C+Karnataka&output=embed"
                  className="absolute inset-0 w-full h-full grayscale contrast-110 group-hover:grayscale-0 transition duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-background/90 backdrop-blur px-3 py-1.5 text-xs font-mono uppercase tracking-widest border border-border">
                  <MapPin size={12} className="text-primary" /> Open in Maps
                  <ArrowUpRight size={12} />
                </div>
              </a>
            </aside>

          </div>
        </section>

        <PortfolioDownload />
      </main>
      <Footer />
    </div>
  );
}

function PortfolioDownload() {
  const [pw, setPw] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setError("");
    setLoading(true);
    try {
      const res = await fetch(PORTFOLIO_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pw.trim() }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({ error: "" }));
        setError(
          data?.error ||
            "Incorrect password. Please try again or request access.",
        );
        setUnlocked(false);
        return;
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Empirical-Media-Portfolio.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      setUnlocked(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-8 md:p-14">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-30"
               style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }} />
          <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-10 items-center">
            <div>
              <span className="font-mono text-sm md:text-lg uppercase tracking-[0.2em] text-primary">// Portfolio</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
                Download our work deck.
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground max-w-lg">
                A protected case-study deck across TV, digital, marketplaces and brand.
                Enter the password shared with you to download. Don't have one?{" "}
                <a href="mailto:sales@empiricalmedia.in" className="text-primary hover:underline">Request access</a>.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-5 sm:p-6 space-y-4">
              <label className="font-mono text-sm md:text-lg uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <Lock size={14} /> Access password
              </label>
              <input
                type="password"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                placeholder="Enter password"
                maxLength={128}
                className="w-full rounded-xl bg-background border border-border p-3 sm:p-4 text-base outline-none focus:border-primary transition"
              />
              {error && <p className="text-sm text-destructive">{error}</p>}
              {unlocked && !error && (
                <p className="text-sm text-primary">
                  Unlocked — your download has started.
                </p>
              )}
              <button
                type="submit"
                disabled={loading || pw.trim().length === 0}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 py-3.5 text-sm sm:text-base font-medium hover:shadow-[var(--shadow-glow)] transition disabled:opacity-60"
              >
                <Download size={18} />
                {loading ? "Verifying…" : unlocked ? "Download again" : "Unlock & download"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="font-mono text-sm md:text-lg uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-background border border-border p-3 sm:p-4 text-base outline-none focus:border-primary transition"
      />
    </div>
  );
}

function ContactCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const Body = (
    <div className="bg-card p-5 sm:p-6 flex gap-4 items-start hover:bg-surface-elevated transition">
      <div className="rounded-xl bg-primary/10 text-primary p-2.5 shrink-0">{icon}</div>
      <div className="min-w-0">
        <div className="font-mono text-sm md:text-lg uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="mt-1 font-medium text-sm sm:text-base break-words">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{Body}</a> : Body;
}
