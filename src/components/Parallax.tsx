"use client";

import { useEffect, useRef } from "react";

type ParallaxProps = {
  speed?: number;
  baseX?: string;
  className?: string;
  children: React.ReactNode;
};

export default function Parallax({
  speed = 0.15,
  baseX = "0",
  className = "",
  children,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const apply = () => {
      if (ref.current) {
        ref.current.style.transform = `translate3d(${baseX}, ${window.scrollY * speed}px, 0)`;
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(apply);
    };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed, baseX]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
