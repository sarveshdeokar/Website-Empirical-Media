import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { Menu, X, Search } from "lucide-react";
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
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 pt-6">
        <nav className="flex items-center justify-between gap-6">
          {/* Logo - far left */}
          <Link to="/" className="flex items-center shrink-0">
            <img src={logo} alt="Empirical Media" className="h-12 sm:h-16 w-auto" />
          </Link>

          {/* Center nav */}
          <ul className="hidden lg:flex items-center justify-center gap-12 xl:gap-20 flex-1 text-[0.78rem] font-semibold uppercase tracking-[0.22em]">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="relative py-2 text-foreground/85 hover:text-foreground transition-colors after:absolute after:left-1/2 after:-bottom-0.5 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
                  activeProps={{ className: "relative py-2 text-foreground after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-primary" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right cluster */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              aria-label="Search"
              className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 hover:text-foreground transition-colors"
            >
              <Search size={18} strokeWidth={2} />
            </button>
            <span className="hidden sm:block h-6 w-px bg-foreground/25" />
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground/90 hover:text-foreground transition-colors lg:hidden"
            >
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
