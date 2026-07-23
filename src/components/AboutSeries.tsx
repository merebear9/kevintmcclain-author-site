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
              In 1799, three Medici witches boarded a ship to America
              carrying holy relics, priceless art, and powers drawn from
              the rivers of Europe. When pirate Jean Lafitte captured
              their vessel, he fell in love with the most powerful witch
              alive. That love would ignite a centuries-old war between
              ancient families, unleash a madman&apos;s plot to reshape
              civilization, and force an unlikely alliance between a
              small-town sheriff, a Navy SEAL, and the immortal women who
              have been hunting the world&apos;s predators for five
              hundred years.
            </p>
            <p>
              From the fog-shrouded Mississippi River to the temples of
              the Nile, from a supervillain&apos;s Galapagos fortress to a
              final showdown in the piazzas of Venice, The River Witches
              trilogy is a sweeping saga of magic, betrayal, and the
              lengths we go to protect the ones we love.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
