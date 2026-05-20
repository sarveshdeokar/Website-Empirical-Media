import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

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

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <section className="relative pt-40 pb-16 noise">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="relative mx-auto max-w-7xl px-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">// Contact</span>
            <h1 className="mt-4 font-display text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95]">
              Let's make
              <br />
              <span className="text-gradient">something work.</span>
            </h1>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.4fr_1fr] gap-10">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="glass rounded-3xl p-8 md:p-12 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Name" name="name" placeholder="Your full name" />
                <Field label="Company" name="company" placeholder="Where you work" />
                <Field label="Email" name="email" type="email" placeholder="you@brand.com" />
                <Field label="Phone" name="phone" placeholder="+91 …" />
              </div>
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">What can we help with?</label>
                <textarea
                  rows={5}
                  placeholder="A line or two about your brand and what you're trying to move."
                  className="mt-2 w-full rounded-xl bg-background border border-border p-4 outline-none focus:border-primary transition"
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="group inline-flex items-center gap-3 rounded-2xl bg-primary text-primary-foreground px-6 py-4 font-medium hover:shadow-[var(--shadow-glow)] transition disabled:opacity-60"
              >
                {sent ? "Thanks — we'll be in touch." : "Send message"}
                <ArrowUpRight className="group-hover:rotate-45 transition" size={18} />
              </button>
            </form>

            <aside className="space-y-px bg-border rounded-3xl overflow-hidden">
              <ContactCard icon={<Mail size={18} />} label="New business" value="sales@empiricalmedia.in" href="mailto:sales@empiricalmedia.in" />
              <ContactCard icon={<Phone size={18} />} label="Say hello" value="+91 63667 99955" href="tel:+916366799955" />
              <ContactCard icon={<MapPin size={18} />} label="Studio" value="#367/22, 2nd Floor, 8th Main, 11th Cross, Jayanagar 2nd Block, Bengaluru" />
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-background border border-border p-4 outline-none focus:border-primary transition"
      />
    </div>
  );
}

function ContactCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const Body = (
    <div className="bg-card p-6 flex gap-4 items-start hover:bg-surface-elevated transition">
      <div className="rounded-xl bg-primary/10 text-primary p-2.5">{icon}</div>
      <div>
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="mt-1 font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{Body}</a> : Body;
}
