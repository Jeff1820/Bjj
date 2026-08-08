# Getting BJJ Tracker onto the iOS App Store

There are two ways people can get this app on an iPhone. Do the first one today;
do the second when you're ready to invest in App Store distribution.

---

## Option 1 — Install from the web today (PWA, free, no Apple account)

The app is already a Progressive Web App. Anyone with the link can install it:

1. Open **https://jeff1820.github.io/Bjj/** in **Safari** on an iPhone.
2. Tap the **Share** button (square with an up arrow).
3. Tap **Add to Home Screen**, then **Add**.

The app appears on the home screen with its own belt icon, opens full-screen
like a native app, and works offline (video playback still needs internet).
This is the fastest way to share it with training partners.

---

## Option 2 — Publish to the App Store (Capacitor)

### What you need first

| Requirement | Cost / notes |
| --- | --- |
| Apple Developer Program account | $99/year — enroll at developer.apple.com |
| A Mac with Xcode installed | Xcode is free from the Mac App Store |
| Node.js on that Mac | free — nodejs.org |

### Before building: switch the email gate to teaser mode

In `app.js`, change `GATE_MODE` from `"full"` to `"teaser"`. The full-lock
gate violates Apple guideline 5.1.1 (required marketing signup); teaser mode
gives reviewers a working free preview with an optional-consent email unlock.
See MARKETING.md for details.

### Build steps (run on the Mac, in this repo folder)

```bash
npm install          # installs Capacitor
npm run ios:init     # copies web files into www/ and creates the ios/ Xcode project
npm run ios:open     # opens the project in Xcode
```

In Xcode:

1. Select the **App** target → **Signing & Capabilities** → choose your Apple
   Developer team. Xcode handles certificates automatically.
2. Pick a real device or simulator and press **Run** to test the app.
3. When it looks right: **Product → Archive**, then **Distribute App →
   App Store Connect** and follow the prompts to upload.

In App Store Connect (appstoreconnect.apple.com):

1. Create the app listing: name (e.g. "BJJ Belt Tracker"), description,
   screenshots (take them from the simulator), category **Sports**,
   age rating, and a privacy policy URL (state that the app stores progress
   only on the user's device and collects nothing).
2. Add the uploaded build, then use **TestFlight** to beta test with teammates
   before submitting.
3. Submit for review. Utility/education apps like this typically clear review
   in a few days.

### After every app update

```bash
npm run ios:sync     # re-copies web files and syncs the iOS project
```
Then re-archive and upload in Xcode.

---

## Android / Google Play

Android does NOT require a Mac — Android Studio runs on Windows, macOS, or Linux.

| Requirement | Cost / notes |
| --- | --- |
| Google Play developer account | $25 one-time — play.google.com/console |
| Android Studio | free — developer.android.com/studio |
| Node.js | free |

```bash
npm install
npm run android:init   # creates the android/ project
npm run android:open   # opens it in Android Studio
```

In Android Studio: run on an emulator or device to test, then
**Build → Generate Signed App Bundle** (create a keystore when prompted —
BACK IT UP, losing it means you can never update the app). Upload the .aab
in the Play Console, fill in the listing (screenshots, privacy policy,
data-safety form declaring email collection for marketing), and submit.
Play review usually takes hours to a day.

### After every app update

```bash
npm run android:sync
```
Then regenerate the signed bundle and upload.

---

## Update rhythm across all three channels

1. **Web/PWA (GitHub Pages)**: push to main → users get it automatically on
   next visit. Instant, no review. This is the primary channel.
2. **iOS**: batch changes, then `npm run ios:sync` → bump version → Archive →
   upload → review (1-3 days).
3. **Android**: `npm run android:sync` → signed bundle → Play Console →
   review (hours). Keep iOS and Android version numbers in step.

### Review tips

- Apple sometimes flags apps that are "just a website" (guideline 4.2). This
  app stands on its own — offline checklists, local progress, curated
  curriculum — so highlight that in the review notes.
- The YouTube videos are embedded with the privacy-enhanced player
  (youtube-nocookie.com); mention this in the privacy section.
- Keep the IBJJF disclaimer visible (it's in the app footer) — Apple doesn't
  require it, but it avoids any impression of official IBJJF affiliation.
  Do not use "IBJJF" in the app's App Store name.
