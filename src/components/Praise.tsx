import FadeIn from "./FadeIn";
import SectionDivider from "./SectionDivider";

type Quote = {
  quote: string;
  source: string;
};

// Placeholder praise — swap in real blurbs and reader reviews as they arrive.
const QUOTES: Quote[] = [
  {
    quote:
      "A blockbuster saga that blends historical fiction, supernatural thrills, and espionage into something entirely its own.",
    source: "Reader Review",
  },
  {
    quote: "Lothar Face is one of the most compelling villains I've read in years.",
    source: "Reader Review",
  },
  {
    quote: "The Venice battle sequence is worth the price of admission alone.",
    source: "Reader Review",
  },
];

export default function Praise() {
  return (
    <section id="praise" className="relative bg-midnight-teal py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="text-center">
          <p className="mb-4 font-deco text-xs tracking-[0.5em] text-gold">
            PRAISE FOR THE SERIES
          </p>
          <h2 className="font-serif-display text-4xl font-semibold text-[#f6efe0] sm:text-5xl">
            What Readers Are Saying
          </h2>
          <SectionDivider className="mt-10" />
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <FadeIn key={q.quote} delay={i * 150}>
              <figure className="deco-frame flex h-full flex-col bg-midnight-deep/60 p-8">
                <span className="font-serif-display text-5xl leading-none text-gold/40">
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 font-serif-display text-lg italic leading-relaxed text-[#f2ece1]">
                  {q.quote}
                </blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-[0.2em] text-mist">
                  &mdash; {q.source}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
