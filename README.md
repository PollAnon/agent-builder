# OrderBench

A no-code platform to build order & tracking agents for any business (bakery, clinic + pharmacy, and more). One shared engine, many business blueprints.

## Status: Stage 1 (frontend preview)

This stage delivers the look, feel, and structure only. Data is static demo content. Supabase wiring comes in Stage 2.

### What's here
- `index.html` — the three screens: Admin, Staff Dashboard, Customer Order Page.
- `css/styles.css` — theming via CSS variables, animations, responsive layout.
- `js/app.js` — screen switching + theme (color vibe) switching with saved preference.
- `manifest.json` — lets the app be "added to home screen" on Android/PC.

### Color vibes
Three built-in themes, switchable from the top bar (saved in the browser):
- **Warm** — inviting tones for food/hospitality.
- **Professional** — clean blue for clinics/services.
- **Metallic Professional** — neutral steel/grey (default).

## How to preview
Open `index.html` in any browser. No build step.

## Deploying (free)
- **Frontend:** Vercel or Netlify (connect this GitLab repo, auto-deploys on each change).
- **Backend + database + logins + live updates:** Supabase (added in Stage 2).

> Note: do not commit real Supabase keys. They will live in a safe config / host settings, not in this repo.

## Roadmap
- **Stage 1 (done):** frontend foundation, theming, three-screen layout.
- **Stage 2:** Supabase connection, Clinic + Pharmacy blueprint (doctor → pharmacist, stock auto-decrease), live real-time updates.
- **Stage 3:** Admin "create business" flow, multiple logins/roles, blueprint switching.

### Deliberately later
Real SMS to phone numbers, online payments, delivery tracking, offline installs.
