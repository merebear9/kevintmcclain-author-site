import type { Metadata } from "next";
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
  icons: {
    icon: "/favicon.ico",
  },
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
        {children}
      </body>
    </html>
  );
}
