import Link from "next/link";
import MoonMark from "@/components/MoonMark";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-midnight-deep px-6 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,#132a33_0%,#0a1220_45%,#030510_100%)]" />
      <MoonMark className="relative h-16 w-16 text-gold opacity-40" />
      <p className="relative mt-8 font-deco text-xs tracking-[0.5em] text-gold">
        PAGE NOT FOUND
      </p>
      <h1 className="relative mt-4 font-serif-display text-4xl font-semibold text-[#f6efe0] sm:text-5xl">
        Lost on the River
      </h1>
      <p className="relative mx-auto mt-6 max-w-md font-light leading-relaxed text-mist">
        This page has drifted downstream. Whatever you were looking for
        isn&apos;t here.
      </p>
      <Link
        href="/"
        className="relative mt-10 inline-flex items-center gap-3 border border-gold/60 px-8 py-4 text-sm uppercase tracking-[0.25em] text-gold-bright transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:tracking-[0.3em]"
      >
        Return Home
      </Link>
    </div>
  );
}
