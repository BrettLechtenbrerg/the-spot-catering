//==============================================================================
// POWER HUB - Help content
// Per-page, step-by-step guides shown by HelpButton / HelpModal.
// Each guide is keyed to a pathname prefix. The most-specific match wins.
//==============================================================================

export interface HelpStep {
  title: string;
  body: string;
}

export interface HelpGuide {
  pageTitle: string;      // e.g. "Media Library Help"
  intro: string;          // 1–2 sentences summarizing what this page is for
  steps: HelpStep[];      // Numbered walkthrough
  tips?: string[];        // Optional "good to know" callouts
}

// Ordered most-specific first — the first `matches` hit wins.
export const HELP_GUIDES: Array<{ matches: (path: string) => boolean; guide: HelpGuide }> = [
  // -------- Content editor (a specific file) --------
  {
    matches: (p) => /^\/power-hub\/dashboard\/content\/[^/]+$/.test(p),
    guide: {
      pageTitle: 'Content Editor Help',
      intro:
        "You're editing the text content of one page of the website. Everything you change here goes live on the public site after you save.",
      steps: [
        {
          title: 'Expand the section you want to edit',
          body:
            'The page is organized into sections (Hero, About, Services, etc.). Click any section heading or the gray "Object" bar to expand and see the fields inside.',
        },
        {
          title: 'Edit the text fields directly',
          body:
            'Short fields are single-line inputs; long fields (paragraphs) become multi-line text areas. Just click and type. No formatting syntax — plain text only.',
        },
        {
          title: 'Reorder list items with the orange arrows',
          body:
            'For lists (testimonials, menu items, gallery photos), use the orange up/down arrows on the left of each item to change its order. Red trash icon deletes; dashed "Add New Item" at the bottom adds one.',
        },
        {
          title: 'Paste image URLs from the Media tab',
          body:
            'Any field that takes an image path (like "backgroundImage" or "image") wants a path like /images/something.jpg. Go to the Media tab, copy an image\'s URL, then paste it here.',
        },
        {
          title: 'Click Save & Deploy',
          body:
            'The orange button (top right) is disabled until you have unsaved changes. Click it when ready — the button shows "Deploying..." briefly, then a green success banner confirms the commit.',
        },
        {
          title: 'Wait ~5 minutes for the live site to update',
          body:
            "Saving commits your changes to GitHub and Vercel automatically rebuilds the public site. Refresh the live page after about 5 minutes to see your edits.",
        },
      ],
      tips: [
        'You can safely leave the page without saving — unsaved changes stay in the form, but they\'ll be lost if you close the tab. Always Save & Deploy before navigating away.',
        'If you see a yellow "You have unsaved changes" banner, that means the Save button is waiting for you.',
        'If you make a mistake, re-open the file and fix it — every save is a new version, so nothing is ever permanently lost.',
      ],
    },
  },

  // -------- Content file list --------
  {
    matches: (p) => p === '/power-hub/dashboard/content',
    guide: {
      pageTitle: 'Content Help',
      intro:
        'This is where you edit the text on every page of the website. Each card represents one page (or a shared section like the header/footer).',
      steps: [
        {
          title: 'Pick a page to edit',
          body:
            'Click any card — "Home Page", "About Page", "Menus Page", etc. The file name matches the URL on the public site (e.g. "About Page" = /about).',
        },
        {
          title: 'Edit the JSON form',
          body:
            "On the next screen you'll see a form organized into sections. Fill in or change whatever you want — text fields, paragraphs, lists, image paths.",
        },
        {
          title: 'Save & Deploy',
          body:
            'Click the orange "Save & Deploy" button when done. Your changes go live automatically in about 5 minutes.',
        },
      ],
      tips: [
        '"Shared Page" controls the navigation bar, footer links, and contact info that appear on every page.',
        'Never edit the "credentials.json" file directly — use the Settings page to change your password.',
      ],
    },
  },

  // -------- Media --------
  {
    matches: (p) => p.startsWith('/power-hub/dashboard/media'),
    guide: {
      pageTitle: 'Media Library Help',
      intro:
        'Upload photos here, then use them anywhere on the site — gallery, menus, hero images, etc.',
      steps: [
        {
          title: 'Upload a new image',
          body:
            'Click the orange "Upload Files" button (top left) or drag-and-drop an image onto the dashed area. JPG, PNG, GIF, WEBP, and SVG are supported, up to 10 MB each.',
        },
        {
          title: 'Use the filter chips to find images',
          body:
            'The three chips at the top filter the view: "All" shows everything, "My Uploads" shows only images you\'ve uploaded through Power Hub (deletable), and "Site Images" shows images that came with the website (read-only).',
        },
        {
          title: 'Add an image to the Gallery page',
          body:
            'Click the orange "Gallery" button on any tile. A form pops up — fill in the title, description, pick one or more categories, then click "Add to Gallery". Shows up on the public gallery in ~5 min.',
        },
        {
          title: 'Add an image to the Menus page',
          body:
            'Click the navy "Menu" button on any tile. Pick a menu category (Breakfast, Lunch, Happy Hour, BYO Bars), add a name and description, then click "Add to Menu".',
        },
        {
          title: 'Copy an image URL to use elsewhere',
          body:
            'The small gray bar under each image shows the URL. Click it (or the copy icon next to it) to copy. You can paste it into any image field in the Content editor — for hero backgrounds, about-page photos, etc.',
        },
        {
          title: 'Delete an upload',
          body:
            'The small red trash icon (bottom right of each tile) deletes the image from GitHub. Only works for "My Uploads" — site images show a lock icon and cannot be deleted here.',
        },
      ],
      tips: [
        'Images you upload stay in /images/uploads/. Existing site images live in /images/food/, /images/gallery/, and /images/events/.',
        'After uploading, it\'s safe to immediately add the image to Gallery or Menu — you don\'t have to wait.',
        'Keep image file sizes reasonable (under 500 KB is ideal for page speed). Large photos still work, they just take longer to load.',
      ],
    },
  },

  // -------- Settings --------
  {
    matches: (p) => p.startsWith('/power-hub/dashboard/settings'),
    guide: {
      pageTitle: 'Settings Help',
      intro:
        'Change your Power Hub login credentials. Keep these safe — anyone with these can edit the website.',
      steps: [
        {
          title: 'Change your username (optional)',
          body:
            'Edit the "Username" field to whatever you want. This is what you\'ll type on the login screen.',
        },
        {
          title: 'Change your password',
          body:
            'Enter your current password in the "Current Password" field, then type your new password twice (in "New Password" and "Confirm New Password"). Minimum 6 characters.',
        },
        {
          title: 'Click Save Settings',
          body:
            'The orange "Save Settings" button at the bottom saves the change to GitHub. You\'ll see a green confirmation banner.',
        },
        {
          title: 'Log out and log back in to confirm',
          body:
            'Use the Sign Out button (bottom of the left sidebar) and log in with your new credentials to make sure everything works.',
        },
      ],
      tips: [
        'Pick a strong, memorable password — at least 10 characters, mix of letters/numbers/symbols. Write it down somewhere safe.',
        'Share credentials only with trusted team members. Anyone with the login can publish changes to the live site.',
        'Locked out? Contact Brett — he can reset your password directly in the repository.',
      ],
    },
  },

  // -------- Dashboard (home) --------
  {
    matches: (p) => p === '/power-hub/dashboard' || p === '/power-hub/dashboard/',
    guide: {
      pageTitle: 'Dashboard Help',
      intro:
        "Welcome to the Power Hub! This is your home base for editing The Spot Catering's website.",
      steps: [
        {
          title: 'What you can do here',
          body:
            'The Power Hub lets you edit every page of the website without touching code. Change text, swap photos, add menu items, publish new gallery images — all from this one dashboard.',
        },
        {
          title: 'Edit page content',
          body:
            'Click "Content" in the left sidebar (or the blue "Edit Content" card above). You\'ll see a list of every page you can edit.',
        },
        {
          title: 'Manage photos',
          body:
            'Click "Media" in the sidebar (or the purple "Upload Media" card). Upload new photos, add them to the Gallery or Menu, and copy URLs to paste into content.',
        },
        {
          title: 'Preview the live site',
          body:
            'The orange "View Live Site" button (top right of every page) opens the public website in a new tab — perfect for checking how your edits look after saving.',
        },
        {
          title: 'How saving works',
          body:
            'Every save commits the change to GitHub, which triggers an automatic rebuild of the live site. Changes appear on the public website in about 5 minutes.',
        },
      ],
      tips: [
        'Use the orange "?" button (bottom right, visible on every Power Hub page) for a guide specific to whatever page you\'re on.',
        'Keyboard shortcut: press ? anywhere in the Power Hub to open this help panel.',
        'When in doubt, click the Content tab, pick a page, experiment with small edits, and Save & Deploy. You can always change something back.',
      ],
    },
  },
];

// Fallback — shown if no guide matches the current path.
export const DEFAULT_GUIDE: HelpGuide = {
  pageTitle: 'Power Hub Help',
  intro:
    "Welcome to the Power Hub. Here's a quick overview of how to use it.",
  steps: [
    {
      title: 'Content',
      body:
        'Click "Content" in the left sidebar to edit the text on any page of the website.',
    },
    {
      title: 'Media',
      body:
        'Click "Media" to upload photos and add them to the Gallery or Menu pages.',
    },
    {
      title: 'Settings',
      body:
        'Click "Settings" to change your login password.',
    },
    {
      title: 'Everything auto-deploys',
      body:
        'Every change you make saves to GitHub and the live website updates in about 5 minutes.',
    },
  ],
};

export function getGuideForPath(path: string): HelpGuide {
  for (const { matches, guide } of HELP_GUIDES) {
    if (matches(path)) return guide;
  }
  return DEFAULT_GUIDE;
}
