import FadeIn from "./FadeIn";

type Book = {
  title: string;
  subtitle: string;
  blurb: string;
  amazonUrl?: string;
  status: "available" | "comingSoon";
};

const BOOKS: Book[] = [
  {
    title: "Mississippi Magic",
    subtitle: "The River Witches, Book One",
    blurb:
      "Three Medici sisters wash ashore in a river town that doesn't know it's already been chosen. Old magic wakes. Old enemies notice.",
    amazonUrl: "https://www.amazon.com/dp/B09S87M5Y9",
    status: "available",
  },
  {
    title: "Operation Seahorse",
    subtitle: "The River Witches, Book Two",
    blurb:
      "A buried pirate conspiracy resurfaces, and the sisters are pulled into a modern operation that could unravel four centuries of careful hiding.",
    amazonUrl: "https://www.amazon.com/dp/B0B7F9TGCT",
    status: "available",
  },
  {
    title: "Book Three",
    subtitle: "The River Witches, Book Three",
    blurb:
      "The trilogy's reckoning. Every betrayal, every secret, every century of running comes due on the banks of the Mississippi.",
    status: "comingSoon",
  },
];

function BookCover({ status }: { status: Book["status"] }) {
  return (
    <div className="relative aspect-[2/3] w-full overflow-hidden rounded-sm border border-gold/20 bg-[linear-gradient(160deg,#132238_0%,#0a1220_60%,#050810_100%)]">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          className="text-gold/50"
        >
          <path
            d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5V4.5Z"
            strokeLinejoin="round"
          />
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinejoin="round" />
        </svg>
        <p className="text-xs uppercase tracking-[0.25em] text-mist/70">
          {status === "comingSoon" ? "Cover Reveal Coming" : "Cover Image Placeholder"}
        </p>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,168,106,0.08)_0%,transparent_65%)]" />
    </div>
  );
}

export default function Books() {
  return (
    <section id="books" className="relative bg-midnight-deep py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-gold">
            The Books
          </p>
          <h2 className="font-serif-display text-4xl font-semibold text-[#f6efe0] sm:text-5xl">
            The River Witches Trilogy
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {BOOKS.map((book, i) => (
            <FadeIn key={book.title} delay={i * 150}>
              <article className="group flex h-full flex-col overflow-hidden border border-gold/10 bg-midnight-panel/60 p-6 transition-colors duration-300 hover:border-gold/30">
                <BookCover status={book.status} />
                <div className="mt-6 flex flex-1 flex-col">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold/70">
                    {book.subtitle}
                  </p>
                  <h3 className="mt-2 font-serif-display text-2xl font-semibold text-[#f6efe0]">
                    {book.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm font-light leading-relaxed text-mist">
                    {book.blurb}
                  </p>

                  {book.status === "available" ? (
                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center justify-center border border-gold/60 py-3 text-xs uppercase tracking-[0.2em] text-gold-bright transition-all duration-300 hover:border-gold hover:bg-gold/10"
                    >
                      Buy on Amazon
                    </a>
                  ) : (
                    <a
                      href="#signup"
                      className="mt-6 inline-flex items-center justify-center border border-mist/30 py-3 text-xs uppercase tracking-[0.2em] text-mist transition-all duration-300 hover:border-gold/60 hover:text-gold-bright"
                    >
                      Get Notified
                    </a>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
