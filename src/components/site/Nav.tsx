import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";
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
        <nav className="grid grid-cols-[auto_1fr_auto] items-center px-4 sm:px-6 py-3 gap-3">
          <Link to="/" className="flex items-center shrink-0 py-2">
            <img src={logo} alt="Empirical Media" className="h-14 sm:h-20 w-auto" />
          </Link>
          <ul className="hidden lg:flex items-center justify-center gap-6 text-xl font-bold uppercase tracking-widest">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="px-4 py-2 text-white hover:text-primary transition-colors"
                  activeProps={{ className: "px-4 py-2 text-primary" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 shrink-0">
            <ThemeToggle />
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
        {open && (
          <div className="mt-2 p-4 lg:hidden space-y-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block px-3 py-3 rounded-lg text-base font-bold uppercase tracking-widest hover:bg-muted"
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
