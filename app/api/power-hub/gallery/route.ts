import { NextResponse } from 'next/server';

//==============================================================================
// POWER HUB - Gallery API Route
// Appends an image entry to content/gallery.json via the GitHub Contents API.
// Fetches the current file, appends to the `images` array, commits.
//==============================================================================

const GITHUB_API = 'https://api.github.com';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = 'BrettLechtenbrerg';
const GITHUB_REPO = 'the-spot-catering';
const GITHUB_BRANCH = 'main';
const GALLERY_PATH = 'content/gallery.json';

const VALID_CATEGORIES = new Set([
  'grazing',
  'breakfast',
  'lunch',
  'holiday',
  'desserts',
]);

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

interface GalleryImage {
  src: string;
  alt: string;
  category: string[];
  title: string;
  description: string;
  tall?: boolean;
}

interface GalleryFile {
  hero: Record<string, unknown>;
  categories: Array<{ id: string; label: string }>;
  images: GalleryImage[];
  [key: string]: unknown;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { src, title, description, category, tall, alt } = body as {
      src?: string;
      title?: string;
      description?: string;
      category?: string[];
      tall?: boolean;
      alt?: string;
    };

    // --- Validation ---
    if (!src || typeof src !== 'string') {
      return NextResponse.json({ error: 'src is required' }, { status: 400 });
    }
    if (!title || typeof title !== 'string' || !title.trim()) {
      return NextResponse.json({ error: 'title is required' }, { status: 400 });
    }
    if (!description || typeof description !== 'string' || !description.trim()) {
      return NextResponse.json({ error: 'description is required' }, { status: 400 });
    }
    if (!Array.isArray(category) || category.length === 0) {
      return NextResponse.json(
        { error: 'At least one category is required' },
        { status: 400 },
      );
    }
    const cleanCategories = category
      .map((c) => String(c).toLowerCase().trim())
      .filter((c) => VALID_CATEGORIES.has(c));
    if (cleanCategories.length === 0) {
      return NextResponse.json(
        {
          error: `No valid categories. Allowed: ${Array.from(VALID_CATEGORIES).join(', ')}`,
        },
        { status: 400 },
      );
    }
    // Only allow images that live in the site's public folder
    if (!src.startsWith('/images/')) {
      return NextResponse.json(
        { error: 'src must be a local image path (start with /images/)' },
        { status: 400 },
      );
    }

    // --- Fetch current gallery.json ---
    const getEndpoint = `/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GALLERY_PATH}?ref=${GITHUB_BRANCH}`;
    const fileData = await githubFetch(getEndpoint);
    const currentContent = Buffer.from(fileData.content, 'base64').toString('utf-8');
    const gallery: GalleryFile = JSON.parse(currentContent);

    if (!Array.isArray(gallery.images)) {
      return NextResponse.json(
        { error: 'gallery.json is malformed (images array missing)' },
        { status: 500 },
      );
    }

    // Skip if this src is already in the gallery
    if (gallery.images.some((img) => img.src === src)) {
      return NextResponse.json(
        { error: 'This image is already in the gallery.' },
        { status: 409 },
      );
    }

    // --- Build and append the new entry ---
    const newEntry: GalleryImage = {
      src,
      alt: (alt && alt.trim()) || title.trim(),
      category: cleanCategories,
      title: title.trim(),
      description: description.trim(),
    };
    if (tall === true) newEntry.tall = true;

    gallery.images.push(newEntry);

    // --- Commit the update ---
    const updated = JSON.stringify(gallery, null, 2);
    const encoded = Buffer.from(updated).toString('base64');
    const putEndpoint = `/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GALLERY_PATH}`;

    const commit = await githubFetch(putEndpoint, {
      method: 'PUT',
      body: JSON.stringify({
        message: `Add "${newEntry.title}" to gallery via Power Hub`,
        content: encoded,
        sha: fileData.sha,
        branch: GITHUB_BRANCH,
      }),
    });

    return NextResponse.json({
      success: true,
      message: 'Image added to gallery! Live site will update in ~5 minutes.',
      entry: newEntry,
      commit: commit.commit.sha,
    });
  } catch (error) {
    console.error('Gallery add error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to add to gallery' },
      { status: 500 },
    );
  }
}
