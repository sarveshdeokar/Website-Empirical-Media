import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 pt-5">
        <nav className="glass rounded-2xl flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Empirical Media" className="h-8 w-auto" />
            <span className="font-display font-semibold tracking-tight hidden sm:block">
              Empirical<span className="text-primary">.</span>
            </span>
          </Link>
          <ul className="hidden md:flex items-center gap-1 font-mono text-xs uppercase tracking-widest">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                  activeProps={{ className: "px-4 py-2 rounded-lg text-foreground bg-muted" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            Start a project →
          </Link>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        {open && (
          <div className="glass rounded-2xl mt-2 p-4 md:hidden">
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
          </div>
        )}
      </div>
    </header>
  );
}
