import MoonMark from "./MoonMark";
import WaveSwirls from "./WaveSwirls";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    path: (
      <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM4 7.5A3.5 3.5 0 0 1 7.5 4h9A3.5 3.5 0 0 1 20 7.5v9a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 16.5v-9Zm13.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" />
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/",
    path: (
      <path d="M14 3v9.8a2.7 2.7 0 1 1-2.2-2.66V7.9A5.4 5.4 0 1 0 16.5 13V9.2a6.5 6.5 0 0 0 3.5 1.03V7.2A4 4 0 0 1 16.4 3H14Z" />
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    path: (
      <path d="M13.5 21v-7.8h2.6l.4-3h-3V8.2c0-.87.24-1.46 1.49-1.46H16.6V4.14C16.34 4.1 15.46 4 14.44 4c-2.13 0-3.59 1.3-3.59 3.68v2.52H8.25v3h2.6V21h2.65Z" />
    ),
  },
];

const LINKS = [
  { label: "Amazon Author Page", href: "https://www.amazon.com/author/kevintmcclain" },
  { label: "Goodreads", href: "https://www.goodreads.com/" },
  { label: "Media Kit", href: "/press/kevin-t-mcclain-media-kit.pdf" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/10 bg-midnight-deep py-16">
      <WaveSwirls className="pointer-events-none absolute -top-6 left-0 h-16 w-full text-gold opacity-[0.1]" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center">
        <p className="flex items-center gap-2 font-serif-display text-2xl text-gold-bright">
          <MoonMark className="h-5 w-5 text-gold" />
          Kevin T. McClain
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm uppercase tracking-[0.15em] text-mist">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold-bright"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-mist transition-colors hover:text-gold-bright"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                {social.path}
              </svg>
            </a>
          ))}
        </div>

        <a
          href="mailto:kevintmcclainauthor@gmail.com"
          className="text-sm text-mist transition-colors hover:text-gold-bright"
        >
          kevintmcclainauthor@gmail.com
        </a>

        <p className="text-xs text-mist/50">
          &copy; 2026 Kevin T. McClain. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
