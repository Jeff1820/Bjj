# 🥋 BJJ Belt Progression Tracker

A zero-dependency web app for tracking Brazilian Jiu-Jitsu belt progression.
Each belt has a checklist of required **offensive and defensive moves and
positions** — the next belt stays locked until every requirement is checked
off. Each belt also includes a summary of the **IBJJF ruleset** that applies
at that level (legal/illegal techniques, match times, scoring, and promotion
eligibility), for both the **adult** and **kids (4–15)** belt systems.

## Running it

No build step, no dependencies. Either:

- Open `index.html` directly in any browser, or
- Serve the folder: `python3 -m http.server` then visit `http://localhost:8000`, or
- Enable GitHub Pages on this repo (Settings → Pages → deploy from branch) for a hosted version.

Progress is saved automatically in the browser's `localStorage`.

## Features

- **Two tracks:** Adult (White → Blue → Purple → Brown → Black) and Kids
  (White → Grey family → Yellow family → Orange family → Green family).
- **Gated progression:** a belt is 🔒 locked until every requirement on the
  previous belt is complete. Locked belts can still be previewed.
- **Checklists** grouped into Positions, Offense (takedowns, sweeps, passes,
  submissions), Defense & Escapes, and (for higher belts) knowledge/leadership.
- **IBJJF rules per belt:** match duration, minimum age / time-in-belt,
  legal techniques (with "NEW AT THIS BELT" badges), illegal techniques, and
  the scoring table.
- Mobile-friendly, automatic dark mode, per-belt progress reset.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page shell |
| `styles.css` | All styling (light + dark) |
| `data.js` | Curriculum + IBJJF rules data — edit this to customize your academy's syllabus |
| `app.js` | Rendering, unlock gating, and localStorage persistence |

## Customizing the curriculum

Everything lives in `data.js` as plain JavaScript objects. Add, remove, or
reword requirements freely — progress keys are derived from the belt, category,
and item text, so renaming an item resets its checkbox.

## Disclaimers

- The curriculum is a **suggested syllabus**. The IBJJF does not mandate a
  technique curriculum per belt; promotion is always the professor's decision.
- Rules summaries are based on the IBJJF rulebook but are **not official**.
  Verify against the current rulebook at [ibjjf.com](https://ibjjf.com/books-videos)
  before competing — rules change (e.g., no-gi heel hook legality at brown/black).
