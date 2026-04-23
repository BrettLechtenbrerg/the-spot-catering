import { NextResponse } from 'next/server';

//==============================================================================
// POWER HUB - Menu API Route
// Appends a menu item to content/menus.json via the GitHub Contents API.
// Also exposes GET so the modal knows which categories exist.
//==============================================================================

const GITHUB_API = 'https://api.github.com';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = 'BrettLechtenbrerg';
const GITHUB_REPO = 'the-spot-catering';
const GITHUB_BRANCH = 'main';
const MENUS_PATH = 'content/menus.json';

async function githubFetch(endpoint: string, options: RequestInit = {}) {
  if (!GITHUB_TOKEN) {
    throw new Error('GITHUB_TOKEN not configured');
  }

  const response = await fetch(`${GITHUB_API}${endpoint}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
      ...options.headers,
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || `GitHub API error: ${response.status}`);
  }

  return response.json();
}

interface MenuItem {
  name: string;
  description: string;
  image: string;
}

interface MenuCategory {
  icon: string;
  title: string;
  tagline: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  iconColor: string;
  items: MenuItem[];
}

interface MenusFile {
  menuCategories: MenuCategory[];
  [key: string]: unknown;
}

async function loadMenus() {
  const endpoint = `/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${MENUS_PATH}?ref=${GITHUB_BRANCH}`;
  const fileData = await githubFetch(endpoint);
  const raw = Buffer.from(fileData.content, 'base64').toString('utf-8');
  const menus: MenusFile = JSON.parse(raw);
  return { menus, sha: fileData.sha };
}

// GET — returns the list of category titles so the UI can show them.
export async function GET() {
  try {
    const { menus } = await loadMenus();
    const categories = (menus.menuCategories || []).map((cat) => ({
      title: cat.title,
      tagline: cat.tagline,
      itemCount: cat.items?.length ?? 0,
    }));
    return NextResponse.json({ categories });
  } catch (error) {
    console.error('Menu categories error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to load categories' },
      { status: 500 },
    );
  }
}

// POST — appends an item to the selected category.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { categoryTitle, name, description, image } = body as {
      categoryTitle?: string;
      name?: string;
      description?: string;
      image?: string;
    };

    // --- Validation ---
    if (!categoryTitle || typeof categoryTitle !== 'string') {
      return NextResponse.json({ error: 'categoryTitle is required' }, { status: 400 });
    }
    if (!name || !name.trim()) {
      return NextResponse.json({ error: 'name is required' }, { status: 400 });
    }
    if (!description || !description.trim()) {
      return NextResponse.json({ error: 'description is required' }, { status: 400 });
    }
    if (!image || !image.startsWith('/images/')) {
      return NextResponse.json(
        { error: 'image must be a local image path (start with /images/)' },
        { status: 400 },
      );
    }

    // --- Load current menus ---
    const { menus, sha } = await loadMenus();
    if (!Array.isArray(menus.menuCategories)) {
      return NextResponse.json(
        { error: 'menus.json is malformed (menuCategories missing)' },
        { status: 500 },
      );
    }

    const category = menus.menuCategories.find(
      (c) => c.title.toLowerCase() === categoryTitle.toLowerCase(),
    );
    if (!category) {
      const available = menus.menuCategories.map((c) => c.title).join(', ');
      return NextResponse.json(
        { error: `Unknown category "${categoryTitle}". Available: ${available}` },
        { status: 400 },
      );
    }

    // Duplicate check — same name (case-insensitive) within this category
    if (
      (category.items || []).some(
        (it) => it.name.trim().toLowerCase() === name.trim().toLowerCase(),
      )
    ) {
      return NextResponse.json(
        { error: `"${name.trim()}" already exists in ${category.title}.` },
        { status: 409 },
      );
    }

    const newItem: MenuItem = {
      name: name.trim(),
      description: description.trim(),
      image,
    };

    category.items = [...(category.items || []), newItem];

    // --- Commit ---
    const updated = JSON.stringify(menus, null, 2);
    const encoded = Buffer.from(updated).toString('base64');
    const putEndpoint = `/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${MENUS_PATH}`;

    const commit = await githubFetch(putEndpoint, {
      method: 'PUT',
      body: JSON.stringify({
        message: `Add "${newItem.name}" to ${category.title} menu via Power Hub`,
        content: encoded,
        sha,
        branch: GITHUB_BRANCH,
      }),
    });

    return NextResponse.json({
      success: true,
      message: `Added "${newItem.name}" to ${category.title}! Live site will update in ~5 minutes.`,
      entry: newItem,
      category: category.title,
      commit: commit.commit.sha,
    });
  } catch (error) {
    console.error('Menu add error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to add to menu' },
      { status: 500 },
    );
  }
}
