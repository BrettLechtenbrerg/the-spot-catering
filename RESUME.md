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
- **Media** — unified library of every image in `public/images/`:
  - Uploads (deletable) live in `public/images/uploads/`
  - Existing site images (root + `food/`, `gallery/`, `events/`) shown read-only with a lock icon
  - Filter chips: All / My Uploads / Site Images
  - Each tile has two one-click publish actions:
    - **Orange "Gallery"** → opens modal, appends to `content/gallery.json`
    - **Navy "Menu"** → opens modal, appends to `content/menus.json` (pick category, name, description)
  - Copy-URL button for pasting into any Content editor image field
- **Settings** — change username + password (both stored in `content/credentials.json`)
- **Help** — universal context-aware modal accessible 3 ways:
  - Floating orange pill bottom-right of every page
  - Outlined "Help" button at the bottom of the sidebar
  - Purple "Help" button in the top header next to "View Live Site"
  - Keyboard shortcut: `?` opens it, `Esc` closes
  - Content is per-page (Dashboard / Content list / Content editor / Media / Settings)

### How it works
- Content store: JSON files in `/content/` (one per page + `shared.json` + `credentials.json`). No database.
- Commits go to `BrettLechtenbrerg/the-spot-catering` on `main` via the GitHub Contents API (PAT-based).
- Vercel auto-deploys on every push to `main`. Live site updates in ~5 minutes.

### Required environment variable
| Name | Purpose |
|---|---|
| `GITHUB_TOKEN` | Classic PAT with `repo` scope. Set in Vercel Env Vars (Production + Preview) and mirrored locally in `.env.local`. Vercel blocks setting sensitive env vars in the Development environment — that's expected and fine. |

Local pull of Vercel env vars:
```bash
vercel env pull .env.local
```

### Files — Power Hub quick map
- `app/power-hub/` — login (`/power-hub`) + dashboard pages + scoped CSS
- `app/api/power-hub/` — API routes:
  - `content/` — GET list / GET file / PUT save
  - `credentials/` — GET / PUT login creds
  - `media/` — GET recursive image listing via GitHub Trees API (returns `editable` flag)
  - `upload/` — POST image (to `uploads/`) / DELETE upload
  - `gallery/` — POST appends entry to `gallery.json`
  - `menu/` — GET categories / POST appends item to `menus.json`
- `components/power-hub/` — UI components:
  - `Sidebar.tsx`, `Header.tsx` — dashboard chrome
  - `HelpContext.tsx`, `HelpButton.tsx`, `helpContent.ts` — universal help system
  - `AddToGalleryModal.tsx`, `AddToMenuModal.tsx` — one-click publish modals
- `content/*.json` — the editable source of truth for every page

### Power Hub API surface
| Method | Route | Purpose |
|---|---|---|
| GET  | `/api/power-hub/content` | List all content files |
| GET  | `/api/power-hub/content?file=X.json` | Fetch one file + sha |
| PUT  | `/api/power-hub/content` | Save file (requires sha for conflict prevention) |
| GET  | `/api/power-hub/credentials` | Fetch creds (used at login) |
| PUT  | `/api/power-hub/credentials` | Update username/password |
| GET  | `/api/power-hub/media` | Recursive list of all images under `public/images/` |
| POST | `/api/power-hub/upload` | Upload image to `public/images/uploads/` |
| DELETE | `/api/power-hub/upload` | Delete an uploaded image |
| POST | `/api/power-hub/gallery` | Append entry to `gallery.json` |
| GET  | `/api/power-hub/menu` | List menu categories |
| POST | `/api/power-hub/menu` | Append item to a menu category |

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

**Last updated**: 2026-04-23 (Power Hub full feature set: content editor, unified Media library, Add-to-Gallery, Add-to-Menu, universal Help system)
