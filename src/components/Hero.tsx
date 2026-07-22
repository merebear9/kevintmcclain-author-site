import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden bg-midnight-deep"
    >
      {/*
        Placeholder atmosphere: layered gradients + SVG "mist" standing in for a
        photographic background. Swap this block out for a real hero photo
        (Mississippi River at night, New Orleans fog, dark water) by dropping
        the image into /public and replacing this <div> with a background
        <Image fill /> — keep the gradient overlays for text legibility.
      */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,#132238_0%,#0a1220_45%,#050810_100%)]" />
        <svg
          className="mist-layer absolute -left-1/4 top-1/3 h-[70%] w-[150%] opacity-[0.18]"
          viewBox="0 0 800 300"
          preserveAspectRatio="none"
          aria-hidden
        >
          <ellipse cx="400" cy="150" rx="380" ry="90" fill="#7d93a8" />
        </svg>
        <svg
          className="mist-layer-slow absolute -left-1/3 top-1/2 h-[60%] w-[160%] opacity-[0.12]"
          viewBox="0 0 800 300"
          preserveAspectRatio="none"
          aria-hidden
        >
          <ellipse cx="400" cy="150" rx="380" ry="70" fill="#c9a86a" />
        </svg>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,16,0.2)_0%,rgba(5,8,16,0.1)_40%,rgba(5,8,16,0.85)_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <FadeIn>
          <p className="mb-6 text-xs uppercase tracking-[0.5em] text-gold">
            A Paranormal Thriller Trilogy
          </p>
        </FadeIn>
        <FadeIn delay={150}>
          <h1 className="gold-glow font-serif-display text-5xl font-semibold leading-[1.1] text-[#f6efe0] sm:text-7xl md:text-8xl">
            Kevin T. McClain
          </h1>
        </FadeIn>
        <FadeIn delay={300}>
          <div className="my-8 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </FadeIn>
        <FadeIn delay={400}>
          <p className="max-w-2xl font-serif-display text-xl italic text-mist sm:text-2xl">
            The River Witches Trilogy &mdash; Where History, Magic, and Danger
            Collide.
          </p>
        </FadeIn>
        <FadeIn delay={600}>
          <a
            href="#series"
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
