import FadeIn from "./FadeIn";
import MoonMark from "./MoonMark";
import SeriesBadge from "./SeriesBadge";
import WaveSwirls from "./WaveSwirls";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-[100svh] min-h-[680px] w-full items-center justify-center overflow-hidden bg-midnight-deep"
    >
      {/*
        Placeholder atmosphere: layered gradients + SVG line art standing in
        for a photographic background. Swap this block out for a real hero
        photo (Mississippi River at night, New Orleans fog, dark water) by
        dropping the image into /public and replacing this <div> with a
        background <Image fill /> — keep the gradient overlays for text
        legibility and the moon/wave line art for brand continuity with the
        book covers.
      */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,#132a33_0%,#0a1220_45%,#030510_100%)]" />
        <svg
          className="mist-layer absolute -left-1/4 top-1/3 h-[70%] w-[150%] opacity-[0.14]"
          viewBox="0 0 800 300"
          preserveAspectRatio="none"
          aria-hidden
        >
          <ellipse cx="400" cy="150" rx="380" ry="90" fill="#7d93a8" />
        </svg>
        <svg
          className="mist-layer-slow absolute -left-1/3 top-1/2 h-[60%] w-[160%] opacity-[0.1]"
          viewBox="0 0 800 300"
          preserveAspectRatio="none"
          aria-hidden
        >
          <ellipse cx="400" cy="150" rx="380" ry="70" fill="#c9a86a" />
        </svg>

        <MoonMark className="absolute left-1/2 top-[8%] h-24 w-24 -translate-x-1/2 text-gold opacity-[0.16] sm:h-36 sm:w-36" />

        <WaveSwirls className="absolute bottom-0 left-0 h-24 w-full text-gold opacity-[0.12] sm:h-32" />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,5,16,0.15)_0%,rgba(3,5,16,0.05)_40%,rgba(3,5,16,0.9)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <FadeIn>
          <SeriesBadge size="sm" />
        </FadeIn>
        <FadeIn delay={150}>
          <h1 className="gold-glow mt-8 font-serif-display text-5xl font-semibold leading-[1.1] text-[#f6efe0] sm:text-7xl md:text-8xl">
            Kevin T. McClain
          </h1>
        </FadeIn>
        <FadeIn delay={300}>
          <div className="my-8 flex items-center gap-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/70" />
            <MoonMark className="h-4 w-4 text-gold" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/70" />
          </div>
        </FadeIn>
        <FadeIn delay={400}>
          <p className="max-w-2xl font-serif-display text-xl italic text-mist sm:text-2xl">
            Three immortal witches. A pirate&apos;s betrayal. A centuries-old
            war that will reshape the world.
          </p>
        </FadeIn>
        <FadeIn delay={600}>
          <a
            href="#books"
            className="mt-12 inline-flex items-center gap-3 border border-gold/60 px-8 py-4 text-sm uppercase tracking-[0.25em] text-gold-bright transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:tracking-[0.3em]"
          >
            Discover the Series
          </a>
        </FadeIn>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-gold/60">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 4v14m0 0l6-6m-6 6l-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
