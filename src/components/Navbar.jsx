import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "../data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled || open
          ? "bg-ink/85 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="group flex flex-col">
          <span className="font-display text-2xl tracking-[0.28em] text-cream uppercase">
            {site.name}
          </span>
          <span className="text-[10px] tracking-[0.42em] text-gold uppercase">
            {site.studio}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] tracking-[0.28em] uppercase text-cream/80 transition hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="gold-btn rounded-full px-5 py-2 text-[11px] font-medium tracking-[0.2em] uppercase"
          >
            Book
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden text-cream"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-line px-5 py-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
