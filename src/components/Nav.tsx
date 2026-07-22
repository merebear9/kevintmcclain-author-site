"use client";

import { useEffect, useState } from "react";
import MoonMark from "./MoonMark";

const LINKS = [
  { href: "#series", label: "The Series" },
  { href: "#books", label: "The Books" },
  { href: "#author", label: "About" },
  { href: "#praise", label: "Praise" },
  { href: "#signup", label: "Inner Circle" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-midnight-deep/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(201,168,106,0.15)] py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className={`flex items-center gap-2 font-serif-display text-lg tracking-wide text-gold-bright transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <MoonMark className="h-4 w-4 text-gold" />
          Kevin T. McClain
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className={`md:hidden text-gold-bright transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            )}
          </svg>
        </button>

        <ul
          className={`hidden md:flex items-center gap-8 transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm uppercase tracking-[0.15em] text-mist hover:text-gold-bright transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col items-center gap-5 bg-midnight-deep/95 backdrop-blur-md py-6 border-t border-gold/10">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.15em] text-mist hover:text-gold-bright transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
