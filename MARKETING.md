# Using BJJ Tracker as a lead generator for PureLab Performance

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
