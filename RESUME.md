# The Spot Catering — Resume Work

**This is the single source of truth for resuming work on this project.**
If you're an AI assistant reading this, read it fully before doing anything else.

---

## One-Line Resume Prompt

Copy/paste this any time you want to resume work:

```
Resume work on The Spot Catering.
Project: /Users/brettlechtenberg/Code/the-spot-catering
GitHub: https://github.com/BrettLechtenbrerg/the-spot-catering
Vercel: the-spot-catering (bretts-projects-3e254e58)
Read RESUME.md first.
```

---

## Project Location

**Canonical path** (the only one that matters):

```
/Users/brettlechtenberg/Code/the-spot-catering
```

> All older copies under `~/Documents/agent-girl/**` have been renamed with
> `.archive-*` suffixes and should be ignored. Do not edit them.

---

## Accounts & Services

| Service | Account / Project | URL |
|---|---|---|
| **Live site** | — | https://the-spot-catering.vercel.app |
| **GitHub** | `BrettLechtenbrerg` (note the typo: Lechten**brerg**, not Lechten**berg**) | https://github.com/BrettLechtenbrerg/the-spot-catering |
| **Vercel team** | `bretts-projects-3e254e58` (team_TP2l0A1jczMx76uLuijabKp3) | https://vercel.com/bretts-projects-3e254e58/the-spot-catering-ky72 |
| **Vercel project** | `the-spot-catering` (prj_4A6ZgaNzdp8O0107sRLYLh6aiNsG) | — |

The project is already linked via `.vercel/project.json`, so `vercel` commands work without re-linking.

Future move: repo will be transferred to Mandy's GitHub (`CrockSpotCatering`) when ready to hand off.

---

## Quick Commands

```bash
cd /Users/brettlechtenberg/Code/the-spot-catering

# Dev
npm run dev                # localhost:3000

# Build check
npm run build

# Deploy
vercel --prod --yes

# Git
git pull
git add -A && git commit -m "msg" && git push origin main
```

---

## Tech Stack

Next.js 16 (App Router) · React 19 · TypeScript 5 · Tailwind 3.4 · Framer Motion · Lucide Icons · Vercel.

See `CLAUDE.md` for full brand colors, typography, pages, and component map.

---

## Current Status (as of 2026-04-23)

All 11 pages built & deployed:
Home · Corporate · Services · Themes · Gallery · Menus · About · Crock Spot · Privacy · Terms · Contact.

**Power Hub CMS** is now live at `/power-hub`. All page content is stored in
`/content/*.json` and consumed at build time. Owners/staff edit content
through the Power Hub UI — each save is a commit to GitHub on `main`, which
triggers a Vercel auto-deploy (~5 min to live).

### Open to-do
- [ ] Contact form backend (currently frontend-only — does NOT send email)
- [ ] Analytics integration (no GA / Vercel Analytics yet)
- [ ] Custom domain setup (still on `vercel.app`)
- [ ] Verify with Mandy: Lunch menu claim about "serving National Guard meals for 36 days during the Pandemic"
- [ ] Transfer repo to Mandy's GitHub (`CrockSpotCatering`) when ready

---

## Power Hub (CMS)

**URL**: `/power-hub` on the live site (or `http://localhost:3000/power-hub` in dev).
**Default login**: `thespot` / `thespot2026` (change immediately from Settings after first login).
**Auth key**: `the_spot_power_hub_auth` in `localStorage` (single-tenant, same login for all staff).

### Pages inside the hub
- **Dashboard** — stats + quick links to every public page
- **Content** — lists every editable JSON file in `content/` (recursive editor with array reorder + add/delete)
- **Media** — upload / list / delete / copy-URL for images in `public/images/uploads/`
- **Settings** — change username + password

### How it works
- Content store: JSON files in `/content/` (one per page + `shared.json` + `credentials.json`). No database.
- Commits go to `BrettLechtenbrerg/the-spot-catering` on `main` via the GitHub Contents API (PAT-based).
- Vercel auto-deploys on every push to `main`. Live site updates in ~5 minutes.

### Required environment variable
| Name | Purpose |
|---|---|
| `GITHUB_TOKEN` | Classic PAT with `repo` scope. Set in Vercel Env Vars (Production + Preview + Development) and in local `.env.local`. |

Local pull of Vercel env vars:
```bash
vercel env pull .env.local
```

### Files — Power Hub quick map
- `app/power-hub/` — login + dashboard pages
- `app/api/power-hub/` — content / credentials / media / upload routes
- `components/power-hub/` — Sidebar + Header UI components
- `content/*.json` — the editable source of truth for every page

---

## Assets Source

Mandy's branding originals live at: `/Users/brettlechtenberg/Desktop/Mandy Smith/`
(Not in the repo — reference only.)

---

## Business Contact (for Reference)

- Owner: Mandy Smith — "The Corporate Catering Queen"
- Phone: 925-699-6629
- Email: spotcafes@gmail.com
- Location: Denver, Colorado
- Facebook: https://www.facebook.com/thespotcafes
- Instagram: https://www.instagram.com/spotcafes/

---

**Last updated**: 2026-04-23 (consolidated to single canonical location)
