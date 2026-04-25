# The Spot Catering - Website & Power Hub

## Project Overview
Official website for **The Spot Catering** - Denver's Corporate Catering Queen, owned by Mandy Smith.

- **Live Site**: https://denversbestcaterer.com (custom domain via GoDaddy → Vercel)
- **Vercel URL**: https://the-spot-catering-ky72.vercel.app (still works)
- **GitHub**: https://github.com/BrettLechtenbrerg/the-spot-catering
- **Vercel Project**: the-spot-catering (bretts-projects-3e254e58)
- **Future Home**: Will move to Mandy's GitHub (CrockSpotCatering) when complete

## Tech Stack
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## Brand Colors
```
Primary Orange:    #FAAA44  (spot-orange - main accent, CTAs)
Orange Hover:      #E89A35  (spot-orange-hover)
Deep Navy:         #262262  (spot-navy - primary text, headers)
Navy Light:        #3A3A8C  (spot-navy-light)
Purple/Magenta:    #9E1F63  (spot-purple - secondary accent)
Purple Hover:      #B82573  (spot-purple-hover)
Teal:              #8CBEC0  (spot-teal - light accents)
Blue-Gray:         #879FAF  (spot-blue-gray - subtle backgrounds)
Orange-Red:        #D34F1D  (spot-orange-red - warm highlights)
```

## Brand Typography
- **Display Font**: Oswald (headings, titles)
- **Body Font**: Inter (body text, paragraphs)

## Taglines & Puns (Mandy loves these!)
- "We know how to hit the spot"
- "Spot on catering for any occasion"
- "You've found your spot"
- "Helping your corporate events stay on focus and hit the spot"
- "More espresso, less depresso" (breakfast events)

## Business Info
- **Owner**: Mandy Smith - The Corporate Catering Queen
- **Phone**: 925-699-6629
- **Email**: spotcafes@gmail.com
- **Location**: Denver, Colorado
- **Social**:
  - Facebook: https://www.facebook.com/thespotcafes
  - Instagram: https://www.instagram.com/spotcafes/

## Certifications (Important selling points!)
- **MWBE**: Minority Women's Business Enterprise
- **DBE**: Disadvantaged Business Enterprise
- **EBE**: Emerging Business Enterprise
- **SBEC**: Small Business Enterprise Concessionaire
- **LLC**: MNS Worldwide - Majority Woman Owned Business

## Website Pages

All pages are JSON-driven — each imports `content/<name>.json` at build time.
Edit content via `/power-hub`; everything deploys automatically.

| Page | Route | Content file | Features |
|------|-------|--------------|----------|
| Home | `/` | `content/home.json` | Hero, services, stats, testimonials, menu preview, CTAs |
| Corporate | `/corporate` | `content/corporate.json` | Services grid with greyscale images, pop-ups, benefits |
| Services | `/services` | `content/services.json` | Grab-and-go, bartending, royal treatment, CTAs |
| Themed Events | `/themes` | `content/themes.json` | 8 theme cards, holiday list, 3-step process |
| Gallery | `/gallery` | `content/gallery.json` | Masonry grid, category filters, lightbox modal |
| Menus | `/menus` | `content/menus.json` | 4 categories with gradient cards + images, extras |
| About | `/about` | `content/about.json` | Personal story, timeline, Mandy's photo, values |
| Crock Spot | `/crock-spot` | `content/crock-spot.json` | Food-truck partner page |
| Privacy | `/privacy` | `content/privacy.json` | Privacy policy, Colorado Privacy Act compliance |
| Terms | `/terms` | `content/terms.json` | Terms of service, catering-specific clauses |
| Contact | `/contact` | `content/contact.json` | Form, contact info, social links |
| (shell) | header + footer | `content/shared.json` | Nav, contact, socials, footer links |

## Visual Design Features

### Greyscale Image Cards (Used across site)
- Cards have greyscale background images that colorize on hover
- Dark gradient overlays for text readability
- Smooth scale-up animation on hover
- Used on: Corporate, Themes, Pop-Up pages

### Menus Page (Spicy Design!)
- Full-bleed gradient cards with greyscale background images
- Vibrant gradient overlays: amber (Breakfast), emerald (Lunch), purple (Happy Hour), red (Themed)
- Animated icons that rotate on hover
- Flame icon accents next to taglines
- White menu item cards with orange left border

## Service Categories

### Corporate Events
- Team Training Events/Workshops
- Team Appreciation/Retreat Events
- Board Meetings
- Client Meetings

### Meal Types
- Breakfast Boards
- Breakfast Burrito Platter
- In Room Coffee Service
- Individually Packaged Lunches
- Buffet Style Lunch

*Note: Prices are not displayed on the website — contact for custom quotes.*

### Themed Events
- Holiday Parties (all major holidays)
- Taco Bars, Chili Bars
- BBQ Events
- Luau
- Oktoberfest
- And more!

### Happy Hour/Special
- Charcuterie Boards
- Grazing Boards
- After-hours meetings

## Project Status

- [x] GitHub repo created
- [x] Project folder set up
- [x] CLAUDE.md created
- [x] Tech stack configured
- [x] Vercel project connected
- [x] Homepage built (with featured image hero)
- [x] All 9 pages built (including Privacy & Terms)
- [x] Images uploaded (13 images including Mandy's photo)
- [x] SEO optimized (metadata in layout.tsx)
- [x] Mobile responsive (Tailwind responsive classes)
- [x] Prices removed from all pages (contact for quotes)
- [x] Mandy's photo added to About page
- [x] Greyscale image cards on Corporate, Themes, Pop-Up pages
- [x] Spicy gradient design on Menus page
- [x] Footer logo fixed (no white square)
- [x] Contact form backend (live: `/api/contact` → GHL "Get A Quote" workflow)
- [x] Analytics integration (Vercel Analytics + Speed Insights)
- [x] Custom domain (denversbestcaterer.com, GoDaddy DNS → Vercel, SSL active)
- [x] National Guard / pandemic reference verified with Mandy (2026-04-25)
- [ ] Ready for Mandy's GitHub transfer

## Components

| Component | File | Purpose |
|-----------|------|---------|
| Header | `components/Header.tsx` | Navigation with top bar, mobile menu |
| Footer | `components/Footer.tsx` | 4-column footer with links, contact, certs (logo rounded-full) |
| HeroSection | `components/HeroSection.tsx` | Reusable hero with customizable props |

## Key Files
```
/app
  layout.tsx              # Root layout with SEO metadata
  globals.css             # Tailwind + custom styles
  page.tsx                # Homepage
  /corporate/page.tsx     # Corporate catering (greyscale image cards)
  /themes/page.tsx        # Themed events (8 greyscale image cards)
  /pop-up/page.tsx        # Pop-up events (4 greyscale image cards)
  /menus/page.tsx         # Menu options (gradient cards, no prices)
  /about/page.tsx         # About Mandy & story
  /contact/page.tsx       # Contact form
  /privacy/page.tsx       # Privacy policy
  /terms/page.tsx         # Terms of service
/components
  Header.tsx              # Site header
  Footer.tsx              # Site footer
  HeroSection.tsx         # Reusable hero
/public/images            # 13 photos (including meet-mandy.jpg)
```

## Deployment Commands

```bash
# Navigate to project
cd /Users/brettlechtenberg/Code/the-spot-catering

# Development
npm install
npm run dev              # localhost:3000

# Deploy to production
vercel --prod --yes

# Git commit
git add -A && git commit -m "Description" && git push origin main
```

## Assets Location
- **Project (current)**: `/Users/brettlechtenberg/Code/the-spot-catering/`
- **Branding Source**: `/Users/brettlechtenberg/Desktop/Mandy Smith/`
- **Restart doc**: See `RESUME.md` for the canonical resume prompt and service links.

## Mandy's Story (Reference)
Mandy started in sales and marketing for Crock Spot. She saw an empty cafe at a catering job and took the spot - turning one location into three restaurants. Her love for catering led her to downsize to one restaurant plus dedicated catering operations, focusing on making people feel special through creative catering experiences.

This pivot happened one month before COVID hit. As the dining landscape changed, Mandy saw opportunity and rolled with it. A woman-owned business that bet on herself and created a thriving corporate catering empire.

**Mission**: We make food fun, social, and special for everyone.

## Session Notes

### April 20, 2026 Session (Morning)
- Enhanced home page with vibrant brand colors
- Added Crock Spot food truck partner page
- Styled Crock Spot nav link with branded pill button
- Adjusted grayscale hover effects (50% more color)
- Removed all prices from menus page
- Fixed menu category icons for proper contrast

### April 20, 2026 Session (Late Morning)
- Updated Taco Bar image on Menus page with Mandy's real taco-bar.png
- Updated Bagel Board image on Menus page with Mandy's real bagel-display.png
- Full sync to GitHub completed

### April 20, 2026 Session (Afternoon)
- **NEW: Created /gallery page** - "Feast Your Eyes" food gallery
- Added 17 real food photos from Mandy's collection
- Features: Masonry grid, category filters (All, Grazing, Breakfast, Lunch, Holiday, Desserts)
- Lightbox modal for full-size viewing
- Hover effects with glow, scale, and content overlays
- Added Gallery link to main navigation

### April 3, 2026 Session
- Fixed broken Oktoberfest and Luau images on Themes page
- Added spicy gradient design to Menus page with animated icons
- Added greyscale image cards to Pop-Up Events page (4 cards)
- Fixed Community Events and Flash Sales images
- All external images use Unsplash URLs

### Pending Verification
- **Pandemic Reference**: The about page mentions Mandy "served the National Guard meals for 36 consecutive days during the pandemic" — confirmed accurate by Mandy on 2026-04-25

---

**Last Updated**: April 23, 2026 (Power Hub v1 complete — CMS, unified Media library, Add-to-Gallery, Add-to-Menu, universal Help system)

---

## Power Hub CMS (added April 2026)

The site now ships with a password-protected CMS at **`/power-hub`**.
Staff log in, edit content, hit **Save & Deploy**, and the live site updates in ~5 min.

### URLs
- Login: `/power-hub`
- Dashboard: `/power-hub/dashboard`
- Content editor: `/power-hub/dashboard/content` (+ `/content/[file]` for each file)
- Media library: `/power-hub/dashboard/media`
- Settings (change password): `/power-hub/dashboard/settings`

### Default login
`thespot` / `thespot2026` — change on first login from Settings.

### How it works
- All page content lives in `content/*.json` (one per page + `shared.json` + `credentials.json`).
- Public pages import their JSON at build time and render dynamically — no hardcoded strings.
- Power Hub API routes commit changes to GitHub via the Contents API.
- Vercel auto-deploys on every push to `main`.
- No database, no third-party CMS, no paid services — just GitHub + Vercel.

### Required env var
`GITHUB_TOKEN` — Classic PAT with `repo` scope on `BrettLechtenbrerg/the-spot-catering`.
Set in Vercel Env Vars (Production + Preview). Vercel blocks sensitive env vars in Development — that's expected; mirror the token locally in `.env.local` via `vercel env pull`.

### Power Hub file map
- `app/power-hub/` — login (`/power-hub`) + authenticated dashboard pages
- `app/api/power-hub/` — all server routes:
  - `content/` — list/read/save JSON files
  - `credentials/` — read/update login creds
  - `media/` — recursive image listing (GitHub Trees API; returns `editable` flag)
  - `upload/` — POST (uploads to `public/images/uploads/`) / DELETE
  - `gallery/` — POST appends entry to `gallery.json`
  - `menu/` — GET categories / POST appends item to a menu category
- `components/power-hub/` — UI:
  - `Sidebar.tsx`, `Header.tsx` — dashboard chrome (both call `useHelp()` for their Help buttons)
  - `HelpContext.tsx`, `HelpButton.tsx`, `helpContent.ts` — universal context-aware help modal (? shortcut)
  - `AddToGalleryModal.tsx`, `AddToMenuModal.tsx` — one-click publish modals from Media
- `content/` — JSON source of truth for every page

### Feature summary
- **Content editor**: recursive JSON form, array reorder (orange up/down arrows), add/delete items, string vs textarea auto-detection, SHA-based conflict prevention.
- **Media library**: one unified view of every image under `public/images/` (root + subfolders). System images shown read-only (lock icon); uploads are deletable. Filter chips (All / My Uploads / Site Images). Each tile has one-click **Gallery** and **Menu** publish actions.
- **Add to Gallery**: picks categories, optional tall-layout toggle, duplicate protection.
- **Add to Menu**: picks category live from `menus.json`, adds name + description + image, duplicate protection within a category.
- **Help**: 3 entry points (floating orange pill, sidebar button, purple header button), context-aware content per page, keyboard `?` shortcut, `Esc` to close.
- **Settings**: username + password lives in `content/credentials.json`, updated atomically with SHA.

### Branding
- Primary: `#FAAA44` (orange). Secondary: `#262262` (navy). Accent: `#9E1F63` (purple).
- Icon: `Utensils` (Lucide). `robots: noindex` — not indexed by search engines.

### Editable content files
`home.json` · `about.json` · `contact.json` · `corporate.json` · `crock-spot.json` · `gallery.json` · `menus.json` · `services.json` · `themes.json` · `privacy.json` · `terms.json` · `shared.json` (nav/footer/contact) · `credentials.json` (login — edited via Settings only)
