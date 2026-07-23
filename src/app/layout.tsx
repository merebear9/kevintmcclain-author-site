import type { Metadata, Viewport } from "next";
import { Playfair_Display, Cinzel, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-sans-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://kevintmcclain.com";
const title = "Kevin T. McClain | Author of The River Witches Trilogy";
const description =
  "Kevin T. McClain is the author of The River Witches trilogy, a paranormal thriller series where three immortal Medici witches, centuries of betrayal, and a modern-day reckoning collide on the Mississippi River.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Kevin T. McClain",
  },
  description,
  keywords: [
    "Kevin T. McClain",
    "River Witches",
    "The River Witches trilogy",
    "paranormal thriller",
    "supernatural thriller",
    "historical fantasy",
    "Mississippi Magic",
    "Operation Seahorse",
    "Medici witches",
    "author website",
  ],
  authors: [{ name: "Kevin T. McClain" }],
  creator: "Kevin T. McClain",
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Kevin T. McClain",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Kevin T. McClain — The River Witches Trilogy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#04061a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#author`,
      name: "Kevin T. McClain",
      url: siteUrl,
      jobTitle: "Author",
      description,
      sameAs: [
        "https://www.amazon.com/author/kevintmcclain",
        "https://www.goodreads.com/",
      ],
    },
    {
      "@type": "Book",
      name: "Mississippi Magic",
      author: { "@id": `${siteUrl}/#author` },
      isPartOf: {
        "@type": "BookSeries",
        name: "The River Witches",
      },
      bookFormat: "https://schema.org/Paperback",
      url: "https://www.amazon.com/dp/B09S87M5Y9",
      genre: ["Paranormal Thriller", "Historical Fantasy"],
    },
    {
      "@type": "Book",
      name: "Operation Seahorse",
      author: { "@id": `${siteUrl}/#author` },
      isPartOf: {
        "@type": "BookSeries",
        name: "The River Witches",
      },
      bookFormat: "https://schema.org/Paperback",
      url: "https://www.amazon.com/dp/B0B7F9TGCT",
      genre: ["Paranormal Thriller", "Historical Fantasy"],
    },
    {
      "@type": "WebSite",
      url: siteUrl,
      name: "Kevin T. McClain",
      publisher: { "@id": `${siteUrl}/#author` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cinzel.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-midnight-deep text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border focus:border-gold focus:bg-midnight-deep focus:px-4 focus:py-2 focus:text-sm focus:text-gold-bright"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
