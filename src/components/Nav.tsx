import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#how", label: "How It Works" },
  { href: "/#results", label: "Results" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled ? "border-border/80 bg-background/85 backdrop-blur-md" : "border-transparent bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Logo size="sm" />

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex h-10 items-center justify-center bg-primary px-5 text-sm font-semibold text-primary-foreground transition-all hover:neon-glow-strong"
          >
            Book a Call
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center border border-border text-foreground md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container flex flex-col gap-4 py-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-base text-foreground">
                {l.label}
              </a>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex h-11 items-center justify-center bg-primary px-5 text-sm font-semibold text-primary-foreground"
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
