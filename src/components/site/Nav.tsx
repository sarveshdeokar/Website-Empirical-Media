import { Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
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
  const [revealed, setRevealed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setRevealed(true);
  };
  const scheduleHide = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setRevealed(false), 400);
  };

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <nav className="grid grid-cols-[auto_1fr_auto] items-center px-4 sm:px-6 py-3 gap-3">
          <div
            className="flex items-center shrink-0"
            onMouseEnter={show}
            onMouseLeave={scheduleHide}
          >
            <button
              type="button"
              onClick={() => setRevealed((v) => !v)}
              aria-label="Toggle navigation"
              aria-expanded={revealed}
              className="flex items-center py-2 focus:outline-none"
            >
              <img
                src={logo}
                alt="Empirical Media"
                className="h-14 sm:h-20 w-auto transition-transform duration-300 hover:scale-105"
              />
            </button>
          </div>

          <ul
            onMouseEnter={show}
            onMouseLeave={scheduleHide}
            className={`hidden lg:flex items-center justify-center gap-6 text-xl font-bold uppercase tracking-widest transition-all duration-500 ease-out ${
              revealed
                ? "opacity-100 translate-x-0 pointer-events-auto"
                : "opacity-0 -translate-x-4 pointer-events-none"
            }`}
          >
            {links.map((l, i) => (
              <li
                key={l.to}
                style={{ transitionDelay: revealed ? `${i * 60}ms` : "0ms" }}
                className={`transition-all duration-500 ease-out ${
                  revealed ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                }`}
              >
                <Link
                  to={l.to}
                  className="px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                  activeProps={{ className: "px-4 py-2 rounded-lg text-foreground bg-muted" }}
                  activeOptions={{ exact: l.to === "/" }}
                  onClick={() => setRevealed(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 shrink-0">
            <ThemeToggle />
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-foreground">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
        {mobileOpen && (
          <div className="mt-2 p-4 lg:hidden space-y-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMobileOpen(false)}
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
