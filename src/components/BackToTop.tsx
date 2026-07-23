"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 1.2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center border border-gold/40 bg-midnight-deep/90 text-gold backdrop-blur-md transition-all duration-300 hover:border-gold hover:text-gold-bright ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 19V5m0 0l-6 6m6-6l6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
