import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { Menu, X, Calendar } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";
import ThemeToggle from "./ThemeToggle";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <nav className="glass rounded-2xl flex items-center justify-between px-6 py-3.5">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Empirical Media" className="h-14 w-auto" />
          </Link>
            <ul className="hidden lg:flex items-center gap-1 text-sm uppercase tracking-widest">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                  activeProps={{ className: "px-3 py-2 rounded-lg text-foreground bg-muted" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:shadow-[var(--shadow-glow)] transition"
            >
              <Calendar size={15} />
              Book a meeting
            </a>
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
        {open && (
          <div className="glass rounded-2xl mt-2 p-4 lg:hidden space-y-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm font-medium"
            >
              <Calendar size={15} />
              Book a meeting
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
