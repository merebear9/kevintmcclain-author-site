import Image from "next/image";
import FadeIn from "./FadeIn";
import MoonMark from "./MoonMark";
import SectionDivider from "./SectionDivider";

type Book = {
  title: string;
  subtitle: string;
  blurb: string;
  amazonUrl?: string;
  cover?: string;
  status: "available" | "comingSoon";
};

const BOOKS: Book[] = [
  {
    title: "Mississippi Magic",
    subtitle: "The River Witches, Book One",
    blurb:
      "A deputy dies clutching a doll with its eyes sewn shut. A knife older than Rome surfaces in the Mississippi mud. And Sheriff Brent Jones is about to discover that the blonde woman who just arrived in his small Illinois river town is not what she seems. Anna Catherine Medici has been alive for over two hundred years — and she has just set in motion a chain of events that will bring a former CIA assassin to his knees.",
    amazonUrl: "https://www.amazon.com/dp/B09S87M5Y9",
    cover: "/covers/mississippi-magic.png",
    status: "available",
  },
  {
    title: "Operation Seahorse",
    subtitle: "The River Witches, Book Two",
    blurb:
      "An ancient enemy has escaped her prison. A tech genius is using the world's most powerful supercomputer to engineer the extinction of two billion people. And Anna Medici has been captured. The war between the Medici and Pazzi families, dormant for centuries, erupts in a climactic battle in the piazzas of Venice where stone lions take flight and an archangel answers a witch's prayer.",
    amazonUrl: "https://www.amazon.com/dp/B0B7F9TGCT",
    cover: "/covers/operation-seahorse.png",
    status: "available",
  },
  {
    title: "Book Three",
    subtitle: "The River Witches, Book Three",
    blurb:
      "Casey Face is alive. Lothar Face has a grandson. And the war is far from over.",
    status: "comingSoon",
  },
];

function BookCover({ book }: { book: Book }) {
  if (book.cover) {
    return (
      <div className="relative aspect-[13/20] w-full overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
        <Image
          src={book.cover}
          alt={`${book.title} cover`}
          fill
          sizes="(max-width: 640px) 90vw, 360px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  return (
    <div className="deco-frame relative flex aspect-[2/3] w-full flex-col items-center justify-center gap-3 bg-midnight-deep px-6 text-center">
      <MoonMark className="h-9 w-9 text-gold/50" />
      <p className="text-xs uppercase tracking-[0.25em] text-mist/70">
        Cover Reveal Coming
      </p>
    </div>
  );
}

export default function Books() {
  return (
    <section id="books" className="relative bg-midnight-deep py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="text-center">
          <p className="mb-4 font-deco text-xs tracking-[0.5em] text-gold">
            THE BOOKS
          </p>
          <h2 className="font-serif-display text-4xl font-semibold text-[#f6efe0] sm:text-5xl">
            The River Witches Trilogy
          </h2>
          <SectionDivider className="mt-10" />
        </FadeIn>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {BOOKS.map((book, i) => (
            <FadeIn key={book.title} delay={i * 150}>
              <article className="group flex h-full flex-col overflow-hidden border border-gold/10 bg-midnight-panel/60 p-6 transition-colors duration-300 hover:border-gold/30">
                <BookCover book={book} />
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
