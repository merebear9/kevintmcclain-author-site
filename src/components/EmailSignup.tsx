import FadeIn from "./FadeIn";

// Mailchimp embedded-form integration:
// 1. In Mailchimp, go to Audience > Signup forms > Embedded forms.
// 2. Copy the form `action` URL (looks like
//    https://<dc>.list-manage.com/subscribe/post?u=XXXX&id=YYYY&f_id=ZZZZ)
//    and paste it below in place of MAILCHIMP_FORM_ACTION.
// 3. Copy the hidden bot-field input name (starts with "b_") from the same
//    embed snippet and use it as BOT_FIELD_NAME below — it must stay empty.
const MAILCHIMP_FORM_ACTION = "https://example.us1.list-manage.com/subscribe/post?u=REPLACE_ME&id=REPLACE_ME&f_id=REPLACE_ME";
const BOT_FIELD_NAME = "b_REPLACE_ME_REPLACE_ME";

export default function EmailSignup() {
  return (
    <section
      id="signup"
      className="relative overflow-hidden bg-midnight py-28 sm:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(201,168,106,0.08)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <FadeIn>
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-gold">
            Join the Inner Circle
          </p>
          <h2 className="font-serif-display text-4xl font-semibold text-[#f6efe0] sm:text-5xl">
            Join the River Witches Inner Circle
          </h2>
        </FadeIn>

        <FadeIn delay={150}>
          <p className="mx-auto mt-6 max-w-xl font-light leading-relaxed text-mist sm:text-lg">
            Be the first to know when Book Three drops. Get exclusive
            behind-the-scenes content about the real history behind the
            series &mdash; straight to your inbox.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <form
            action={MAILCHIMP_FORM_ACTION}
            method="post"
            target="_blank"
            noValidate
            className="mx-auto mt-10 flex max-w-md flex-col gap-4 sm:flex-row"
          >
            <label htmlFor="mce-EMAIL" className="sr-only">
              Email address
            </label>
            <input
              id="mce-EMAIL"
              name="EMAIL"
              type="email"
              required
              placeholder="Your email address"
              className="w-full flex-1 border border-gold/30 bg-midnight-panel/60 px-5 py-4 text-sm text-[#f2ece1] placeholder:text-mist/60 outline-none transition-colors focus:border-gold"
            />

            {/* Mailchimp bot-field honeypot — must remain empty and hidden */}
            <div aria-hidden="true" className="absolute left-[-5000px]">
              <input
                type="text"
                name={BOT_FIELD_NAME}
                tabIndex={-1}
                defaultValue=""
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center whitespace-nowrap border border-gold px-8 py-4 text-xs uppercase tracking-[0.25em] text-gold-bright transition-all duration-300 hover:bg-gold/10 hover:tracking-[0.3em]"
            >
              Subscribe
            </button>
          </form>
        </FadeIn>

        <FadeIn delay={420}>
          <p className="mt-6 text-xs text-mist/60">
            No spam, ever. Unsubscribe at any time.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
