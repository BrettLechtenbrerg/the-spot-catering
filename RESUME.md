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
| Service | Account / Project | URL |
|---|---|---|
| **Live site** | denversbestcaterer.com (GoDaddy DNS → Vercel) | https://denversbestcaterer.com |
| **Vercel URL** | (still works as fallback) | https://the-spot-catering-ky72.vercel.app |
| **GitHub** | `BrettLechtenbrerg` (note the typo: Lechten**brerg**, not Lechten**berg**) | https://github.com/BrettLechtenbrerg/the-spot-catering |
| **Vercel team** | `bretts-projects-3e254e58` (team_TP2l0A1jczMx76uLuijabKp3) | https://vercel.com/bretts-projects-3e254e58/the-spot-catering-ky72 |
| **Vercel project** | `the-spot-catering` (prj_4A6ZgaNzdp8O0107sRLYLh6aiNsG) | — |
| **Domain registrar** | GoDaddy (denversbestcaterer.com) | https://dcc.godaddy.com |
| **Analytics** | Vercel Analytics + Speed Insights | https://vercel.com/bretts-projects-3e254e58/the-spot-catering-ky72/analytics |

The project is already linked via `.vercel/project.json`, so `vercel` commands work without re-linking.

Future move: repo will be transferred to Mandy's GitHub (`CrockSpotCatering`) when ready to hand off.

### Domain DNS configuration (GoDaddy)

These records are set on the `denversbestcaterer.com` zone at GoDaddy.
Do not change them without updating Vercel first.

| Type | Name | Value | Notes |
|---|---|---|---|
| A | `@` | `76.76.21.21` | Vercel apex anycast IP |
| CNAME | `www` | `cname.vercel-dns.com` | Vercel www target |
| NS | `@` | `ns55.domaincontrol.com` / `ns56.domaincontrol.com` | GoDaddy default — leave alone |
| SOA, TXT (_dmarc), CNAME (pay, _domainconnect) | various | (GoDaddy defaults) | Leave alone |

Domain Forwarding at GoDaddy: **OFF** (must stay off).

### Vercel domain setup

In the Vercel project, three domains are attached:
- `denversbestcaterer.com` — **production / canonical**
- `www.denversbestcaterer.com` — **308 redirect to apex**
- `the-spot-catering-ky72.vercel.app` — default Vercel URL (fallback)

The `www → apex` 308 redirect was set via the Vercel REST API (the dashboard
UI was glitchy at launch). To re-set or change the redirect:

```bash
TOKEN=$(cat ~/Library/Application\ Support/com.vercel.cli/auth.json | grep -oE '"token"[^"]*"[^"]+"' | tail -1 | sed 's/.*"\([^"]*\)"$/\1/')
curl -X PATCH \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"redirect":"denversbestcaterer.com","redirectStatusCode":308}' \
  "https://api.vercel.com/v9/projects/prj_4A6ZgaNzdp8O0107sRLYLh6aiNsG/domains/www.denversbestcaterer.com?teamId=team_TP2l0A1jczMx76uLuijabKp3"
```

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

## Current Status (as of 2026-04-25)

**🎉 Site is fully live in production** at https://denversbestcaterer.com

All 11 pages built & deployed:
Home · Corporate · Services · Themes · Gallery · Menus · About · Crock Spot · Privacy · Terms · Contact.

**Power Hub CMS** is live at `/power-hub`. All page content is stored in
`/content/*.json` and consumed at build time. Owners/staff edit content
through the Power Hub UI — each save is a commit to GitHub on `main`, which
triggers a Vercel auto-deploy (~5 min to live).

**Contact form is live and wired to Go High Level**. Submissions create/update
a GHL contact and email Mandy internally. (See "Contact Form → Go High Level"
section below.)

**Vercel Analytics + Speed Insights** are wired in `app/layout.tsx`. Data
shows up at:
- https://vercel.com/bretts-projects-3e254e58/the-spot-catering-ky72/analytics
- https://vercel.com/bretts-projects-3e254e58/the-spot-catering-ky72/speed-insights

### Open to-do
- [x] ~~Analytics integration~~ — **DONE 2026-04-25**: Vercel Analytics + Speed Insights wired
- [x] ~~Custom domain setup~~ — **DONE 2026-04-25**: `denversbestcaterer.com` live (apex canonical, www → apex 308 redirect, Let's Encrypt SSL)
- [x] ~~Verify with Mandy: National Guard / 36 days claim~~ — **CONFIRMED 2026-04-25** (copy stays as-is in `content/about.json`)
- [ ] Mandy: complete Google Business Profile setup (see `docs/handover/google-business-profile-setup.txt`)
- [ ] Mandy: update Facebook + Instagram bio links + post launch announcement (see `docs/handover/facebook-instagram-update-guide.txt`)
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

## Contact Form → Go High Level

The Request A Quote form on `/contact` POSTs to `/api/contact`, which
validates input and forwards it to a GHL inbound-webhook workflow. The
webhook URL is kept server-side (not in the browser bundle).

### Flow
1. User submits the form on `/contact`
2. Browser POSTs JSON to `/api/contact` (Next.js route)
3. Server validates required fields + email format, splits full name into
   first/last, and POSTs to `GHL_WEBHOOK_URL`
4. GHL workflow **"Get A Quote"** fires:
   - **Create Contact** — maps all 10 fields (5 standard + 5 custom)
   - **Internal Notification** — emails Mandy Smith with full lead details

### GHL setup (already done)
- **Workflow name**: Get A Quote (Published)
- **Trigger**: Inbound Webhook
- **Standard fields mapped**: First Name, Last Name, Email, Phone, Business Name
- **Custom fields created on the Contact object**:
  | Name | Type | Unique key |
  |---|---|---|
  | Event Type | Dropdown (Single) — 9 options | `contact.event_type` |
  | Event Date | Date Picker | `contact.event_date` |
  | Guest Count | Number | `contact.guest_count` |
  | Estimated Budget | Dropdown (Single) — 7 options | `contact.budget_range` *(name shown in GHL: "Budget Range")* |
  | Event Message | Multi Line | `contact.message` |
- **Internal notification**: emails Mandy Smith from `spotcafes@gmail.com`

### Payload sent to GHL
```json
{
  "firstName": "...", "lastName": "...", "fullName": "...",
  "email": "...", "phone": "...", "company": "...",
  "eventType": "...", "eventDate": "...",
  "guestCount": "...", "budget": "...", "message": "...",
  "source": "denversbestcaterer.com",
  "formName": "Request A Quote",
  "pageUrl": "...",
  "submittedAt": "ISO-8601 UTC"
}
```
In GHL these are referenced as `{{inboundWebhookRequest.<fieldName>}}`.

### Required environment variable
| Name | Purpose |
|---|---|
| `GHL_WEBHOOK_URL` | The Go High Level inbound webhook URL for the "Get A Quote" workflow. Set in Vercel Env Vars (Production + Preview) and mirrored in `.env.local`. |

### Files
- `app/api/contact/route.ts` — POST endpoint: validates + splits name + forwards to GHL
- `app/contact/page.tsx` — form UI with loading state, error banner, and success screen
- `content/contact.json` — all form copy, event type options, budget ranges (editable in Power Hub)

### Testing the webhook manually
```bash
# Send a raw test payload directly to the GHL webhook (bypasses our API):
curl -X POST "$GHL_WEBHOOK_URL" -H 'Content-Type: application/json' -d '{
  "firstName": "Test", "lastName": "Lead", "fullName": "Test Lead",
  "email": "test@example.com", "phone": "555-0199",
  "company": "Test Co", "eventType": "Holiday Party",
  "eventDate": "2026-12-15", "guestCount": "50",
  "budget": "$2,500 – $5,000", "message": "Test",
  "source": "manual", "formName": "Request A Quote",
  "pageUrl": "manual-test", "submittedAt": "2026-04-24T00:00:00Z"
}'

# Or test the full flow through the deployed API:
curl -X POST 'https://denversbestcaterer.com/api/contact' \
  -H 'Content-Type: application/json' \
  -d '{"name":"Test Lead","email":"test@example.com","eventType":"Holiday Party","message":"hi"}'
```

---

## Assets Source

Mandy's branding originals live at: `/Users/brettlechtenberg/Desktop/Mandy Smith/`
(Not in the repo — reference only.)

---

## Handover Docs for Mandy

Client-facing setup guides live at `docs/handover/` (committed) and as `.txt`
copies on Brett's Desktop (for pasting into Google Docs to share):

- `docs/handover/google-business-profile-setup.txt` — step-by-step GBP setup
  with exact business name, categories, service areas, hours, and a
  pre-written 750-char description.
- `docs/handover/facebook-instagram-update-guide.txt` — how to update FB +
  IG bio links to the new domain, plus three launch-announcement caption
  options and an Instagram Story playbook.

If either guide is updated, also re-copy the latest version to Brett's
Desktop so the Google Docs source matches.

---

## Business Contact (for Reference)

- Owner: Mandy Smith — "The Corporate Catering Queen"
- Phone: 925-699-6629
- Email: spotcafes@gmail.com
- Location: Denver, Colorado
- Facebook: https://www.facebook.com/thespotcafes
- Instagram: https://www.instagram.com/spotcafes/

---

**Last updated**: 2026-04-25 — **Full launch sync complete.** Custom domain `denversbestcaterer.com` is live via GoDaddy DNS → Vercel (apex canonical, `www` 308-redirects to apex via Vercel REST API). Vercel Analytics + Speed Insights wired in `app/layout.tsx`. OpenGraph URL fixed to live domain. National Guard / 36 days copy confirmed accurate by Mandy. Mandy handover docs (Google Business Profile + FB/IG) committed under `docs/handover/` and copied to Brett's Desktop. All 13 production routes verified live (HTTP 200/308). Local HEAD = origin/main HEAD = latest production deploy.
