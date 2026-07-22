import FadeIn from "./FadeIn";
import SectionDivider from "./SectionDivider";

export default function AboutSeries() {
  return (
    <section
      id="series"
      className="relative overflow-hidden bg-midnight py-28 sm:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,168,106,0.06)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <p className="mb-4 font-deco text-xs tracking-[0.5em] text-gold">
            ABOUT THE SERIES
          </p>
        </FadeIn>

        <FadeIn delay={120}>
          <h2 className="font-serif-display text-4xl font-semibold text-[#f6efe0] sm:text-5xl">
            Three Immortal Witches. Centuries of Betrayal.
          </h2>
        </FadeIn>

        <FadeIn delay={240}>
          <SectionDivider className="my-10" />
        </FadeIn>

        <FadeIn delay={320}>
          <div className="space-y-6 text-left font-light leading-relaxed text-mist sm:text-lg">
            <p>
              Beneath the fog that rolls off the Mississippi lies a secret
              older than the nation itself. Three sisters of the Medici
              line were cursed with immortality centuries ago &mdash; and
              they have been running, hiding, and settling old scores ever
              since.
            </p>
            <p>
              Their path crosses pirates who buried more than treasure,
              a betrayal that has festered for four hundred years, and a
              bloodline of enemies who have never stopped hunting them.
              What began in the courts of Renaissance Italy now converges
              on the muddy banks of a modern American river, where the
              past refuses to stay buried.
            </p>
            <p className="font-serif-display text-xl italic text-gold-bright">
              History does not forget. And neither do they.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
