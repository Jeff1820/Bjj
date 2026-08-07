# Using BJJ Tracker as a lead generator for PureLab Performance

## Email gate — three modes (`GATE_MODE` in `app.js`)

- **`"full"`** (web/PWA default): lock screen on first visit. Email + marketing
  consent required to enter the app at all. Maximum capture rate.
- **`"teaser"`** (use for App Store builds): the first half of the white belt is
  free to use — checkboxes and videos work. Clicking through the free half, or
  tapping any locked item, another belt, the Kids track, or the rules tab,
  raises a popup: email unlocks everything, free, no cost or obligation.
  Marketing consent is a **separate optional checkbox** — required consent is
  what gets apps rejected under Apple guideline 5.1.1. Note: even teaser-style
  email unlocks are reviewed inconsistently by Apple; if rejected, resubmit
  with `GATE_MODE = "off"` (the optional signup card still collects leads).
- **`"off"`**: no gate; only the optional signup card.

**Connect Formspree BEFORE promoting any gated version.** Until
`SIGNUP_ENDPOINT` is set, submitted emails are stored only on the visitor's
own device — you never receive them. Teaser-mode submissions arrive tagged
`source: "bjj-tracker-teaser"` with a `consent: true/false` field — only
market to addresses with `consent: true`.

The app shows an optional email-signup card ("Level up off the mat") under the
belt panel. It's a clear opt-in: users type their email and tick a consent
checkbox agreeing to receive PureLab Performance marketing emails. Once they
sign up (or dismiss the card) it stays hidden on that device.

## Connect a real email service (do this before promoting the app)

Out of the box, the form falls back to opening the user's email app with a
pre-filled signup message to you — functional, but clunky. Connect a form
service so addresses flow into a list automatically:

1. **Formspree** (simplest): create a free account at formspree.io, make a
   form, and copy its endpoint URL (looks like `https://formspree.io/f/abcd1234`).
2. Open `app.js` and set:
   ```js
   const SIGNUP_ENDPOINT = "https://formspree.io/f/abcd1234";
   ```
3. Redeploy (push to main). Submissions now arrive in your Formspree dashboard,
   which can forward them to Mailchimp, ConvertKit, or a Google Sheet.

Alternatively, Mailchimp/ConvertKit embedded-form endpoints work the same way —
any service that accepts a JSON or form POST with an `email` field.

## Legal & App Store notes (important)

- **Consent is built in** — the checkbox is required, and the copy says what
  they're signing up for. Keep it that way; pre-checked boxes or silent
  collection violate CAN-SPAM/GDPR and will fail Apple review.
- **Every marketing email you send must include an unsubscribe link** and your
  business's physical mailing address (CAN-SPAM requirement). Mailchimp and
  similar services handle this automatically.
- **App Store privacy label**: when submitting to the App Store, declare in
  App Store Connect that the app collects **Email Address → used for
  Marketing → linked to the user**. Also host a short privacy policy page
  (GitHub Pages works: add `privacy.html`) saying progress data stays on
  device and email is collected only with consent for PureLab Performance
  marketing.
- Keep the signup optional and non-blocking. Apple rejects apps that gate
  functionality behind marketing signups; the tracker must stay fully usable
  without an email.
