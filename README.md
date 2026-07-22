# Kevin T. McClain — Author Website

Single-page author site for Kevin T. McClain, author of *The River Witches*
trilogy. Built with Next.js (App Router), React, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/page.tsx` — assembles the page from the section components below.
- `src/components/Hero.tsx` — full-screen hero with the mist/water CSS background.
- `src/components/AboutSeries.tsx` — trilogy overview copy.
- `src/components/Books.tsx` — Book 1 / Book 2 / Book 3 cards and Amazon links.
- `src/components/AboutAuthor.tsx` — author bio and photo placeholder.
- `src/components/Praise.tsx` — reader/review quote cards.
- `src/components/EmailSignup.tsx` — Mailchimp-ready signup form.
- `src/components/Footer.tsx` — social links, Amazon/Goodreads links, contact.
- `src/components/Nav.tsx` — sticky nav that fades in after the hero.
- `src/components/FadeIn.tsx` — scroll-reveal wrapper (IntersectionObserver).

## Things to finish before launch

1. **Hero + section background image.** The hero currently uses a CSS
   gradient + SVG mist as a placeholder for a photographic background
   (Mississippi River at night, New Orleans fog, dark water). Drop a
   licensed image into `public/` and swap it into `src/components/Hero.tsx`.
2. **Book covers.** `src/components/Books.tsx` renders placeholder cover
   panels — replace with real cover art via `next/image` once available.
3. **Author photo.** `src/components/AboutAuthor.tsx` has a placeholder
   portrait panel — replace with a real photo.
4. **Mailchimp integration.** In `src/components/EmailSignup.tsx`, replace
   `MAILCHIMP_FORM_ACTION` and `BOT_FIELD_NAME` with the values from your
   Mailchimp embedded-form snippet (Audience → Signup forms → Embedded
   forms).
5. **Social + Goodreads/Amazon-author links.** `src/components/Footer.tsx`
   has placeholder URLs for Instagram, TikTok, Facebook, the Amazon author
   page, and Goodreads — point them at the real profiles.
6. **Reader praise.** Replace the placeholder quotes in
   `src/components/Praise.tsx` with real blurbs/reviews as they come in.

Book 1 (*Mississippi Magic*) and Book 2 (*Operation Seahorse*) already link
to their real Amazon listings.

## Deploying

This is a standard Next.js app — deploy to [Vercel](https://vercel.com/new)
or [Netlify](https://www.netlify.com/) by connecting this repository; no
extra configuration is required.
