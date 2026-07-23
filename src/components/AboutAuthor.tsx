import Image from "next/image";
import FadeIn from "./FadeIn";
import MoonMark from "./MoonMark";

export default function AboutAuthor() {
  return (
    <section id="author" className="relative bg-midnight py-28 sm:py-36">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-center">
        <FadeIn className="mx-auto w-full max-w-xs lg:mx-0">
          <div className="deco-frame relative aspect-[4/5] w-full overflow-hidden bg-midnight-deep">
            <Image
              src="/author-photo.jpg"
              alt="Kevin T. McClain"
              fill
              sizes="(max-width: 1024px) 320px, 340px"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,168,106,0.12)_0%,transparent_65%)]" />
          </div>
        </FadeIn>

        <div>
          <FadeIn delay={120}>
            <p className="mb-4 font-deco text-xs tracking-[0.5em] text-gold">
              ABOUT THE AUTHOR
            </p>
            <h2 className="font-serif-display text-4xl font-semibold text-[#f6efe0] sm:text-5xl">
              Kevin T. McClain
            </h2>
          </FadeIn>

          <FadeIn delay={260}>
            <div className="mt-8 flex items-center gap-4">
              <MoonMark className="h-4 w-4 text-gold" />
              <span className="h-px w-16 bg-gradient-to-r from-gold/70 to-transparent" />
            </div>
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
                A world traveler who drew on his life experiences to craft
                the international settings of the trilogy, he brings legal
                and investigative authenticity to the thriller elements of
                the series. He lives near Quincy, Illinois &mdash; the
                real-life setting of the books &mdash; with his wife Linda.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
