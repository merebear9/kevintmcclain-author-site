import FadeIn from "./FadeIn";

export default function AboutAuthor() {
  return (
    <section id="author" className="relative bg-midnight py-28 sm:py-36">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-center">
        <FadeIn className="mx-auto w-full max-w-xs lg:mx-0">
          {/*
            Placeholder author photo. Replace this block with a real
            <Image src="/author-photo.jpg" .../> once a portrait is available.
          */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-gold/20 bg-[linear-gradient(160deg,#132238_0%,#0a1220_60%,#050810_100%)]">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="text-gold/50"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-3.9 3.6-7 8-7s8 3.1 8 7" strokeLinecap="round" />
              </svg>
              <p className="text-xs uppercase tracking-[0.25em] text-mist/70">
                Author Photo Placeholder
              </p>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,168,106,0.08)_0%,transparent_65%)]" />
          </div>
        </FadeIn>

        <div>
          <FadeIn delay={120}>
            <p className="mb-4 text-xs uppercase tracking-[0.5em] text-gold">
              About the Author
            </p>
            <h2 className="font-serif-display text-4xl font-semibold text-[#f6efe0] sm:text-5xl">
              Kevin T. McClain
            </h2>
          </FadeIn>

          <FadeIn delay={260}>
            <div className="mt-8 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </FadeIn>

          <FadeIn delay={340}>
            <div className="mt-8 space-y-5 font-light leading-relaxed text-mist sm:text-lg">
              <p>
                Kevin T. McClain is a retired attorney with over twenty years
                of litigation experience and two decades in law enforcement
                administration. He served as a lawyer in Illinois government
                agencies including the state EPA, Nuclear Safety, and
                Emergency Management.
              </p>
              <p>
                A world traveler who drew on his life experiences for his
                fiction, he brings legal and investigative expertise to the
                thriller elements of his writing.
              </p>
              <p>
                He is a family man who raised four children, all graduates of
                the University of Notre Dame.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
