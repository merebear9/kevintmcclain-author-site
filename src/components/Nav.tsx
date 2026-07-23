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
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((link) =>
      document.querySelector(link.href)
    ).filter((el): el is Element => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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
                aria-current={activeHref === link.href ? "true" : undefined}
                className={`text-sm uppercase tracking-[0.15em] transition-colors ${
                  activeHref === link.href
                    ? "text-gold-bright"
                    : "text-mist hover:text-gold-bright"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`md:hidden overflow-hidden border-t border-gold/10 bg-midnight-deep/95 backdrop-blur-md transition-[grid-template-rows] duration-300 ease-out grid ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-t-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 overflow-hidden py-6 min-h-0">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={activeHref === link.href ? "true" : undefined}
                className={`text-sm uppercase tracking-[0.15em] transition-colors ${
                  activeHref === link.href
                    ? "text-gold-bright"
                    : "text-mist hover:text-gold-bright"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
