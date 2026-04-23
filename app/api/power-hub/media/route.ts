import { NextResponse } from 'next/server';

//==============================================================================
// POWER HUB - Media API Route
// Lists all images from the GitHub repository under public/images/ (recursive).
//
// Two "sources":
//   - editable=true:  files in public/images/uploads/ (uploaded via Power Hub,
//                     can be deleted from the Media tab)
//   - editable=false: files elsewhere in public/images/ (shipped with the
//                     site; listed read-only so the owner can copy URLs
//                     and reuse them in content)
//==============================================================================

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = 'BrettLechtenbrerg';
const GITHUB_REPO = 'the-spot-catering';
const GITHUB_BRANCH = 'main';

interface GitTreeEntry {
  path: string; // e.g. "public/images/food/coffee-catering.jpg"
  mode: string;
  type: 'blob' | 'tree' | 'commit';
  sha: string;
  size?: number;
  url: string;
}

interface GitTreeResponse {
  sha: string;
  url: string;
  tree: GitTreeEntry[];
  truncated: boolean;
}

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];

function isImage(path: string): boolean {
  const lower = path.toLowerCase();
  return IMAGE_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

export async function GET(): Promise<NextResponse> {
  if (!GITHUB_TOKEN) {
    return NextResponse.json({
      error: 'GitHub token not configured. Please add GITHUB_TOKEN to environment variables.',
      media: [],
    });
  }

  try {
    // Use the Git Trees API with ?recursive=1 to list every file under the
    // branch in a single call, then filter client-side.
    const treeResponse = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/git/trees/${GITHUB_BRANCH}?recursive=1`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        },
        cache: 'no-store',
      },
    );

    if (!treeResponse.ok) {
      const error = await treeResponse.json().catch(() => ({}));
      return NextResponse.json({
        error: `GitHub API error: ${error.message || treeResponse.status}`,
        media: [],
      });
    }

    const data: GitTreeResponse = await treeResponse.json();

    // Keep only image blobs living under public/images/
    const imageEntries = data.tree.filter(
      (entry) =>
        entry.type === 'blob' &&
        entry.path.startsWith('public/images/') &&
        isImage(entry.path),
    );

    const media = imageEntries.map((entry) => {
      // entry.path  = "public/images/food/coffee-catering.jpg"
      // publicPath  = "/images/food/coffee-catering.jpg"  (used in JSON content)
      const publicPath = entry.path.replace(/^public/, '');
      const relative = entry.path.replace(/^public\/images\//, ''); // "food/coffee-catering.jpg"
      const filename = relative.split('/').pop() || relative;
      const folder = relative.includes('/')
        ? relative.slice(0, relative.lastIndexOf('/'))
        : '';
      const editable = folder === 'uploads';

      // For uploads, extract the timestamp prefix so we can sort newest-first
      // and show a "display name" without the timestamp.
      let displayName = filename;
      let timestamp = 0;
      if (editable) {
        const match = filename.match(/^(\d+)-(.*)$/);
        if (match) {
          timestamp = parseInt(match[1]);
          displayName = match[2];
        }
      }

      return {
        id: entry.sha,
        name: displayName,
        url: publicPath,
        previewUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/${GITHUB_BRANCH}/${entry.path}`,
        size: formatFileSize(entry.size ?? 0),
        uploaded: editable && timestamp ? formatDate(new Date(timestamp)) : '',
        folder: folder || 'root',
        editable,
        timestamp,
      };
    });

    // Sort: uploads first (newest first), then the rest alphabetically by path
    media.sort((a, b) => {
      if (a.editable && b.editable) return b.timestamp - a.timestamp;
      if (a.editable) return -1;
      if (b.editable) return 1;
      return a.url.localeCompare(b.url);
    });

    const cleanMedia = media.map(({ timestamp: _t, ...rest }) => rest);

    return NextResponse.json({
      media: cleanMedia,
      truncated: data.truncated,
    });
  } catch (error) {
    console.error('Error listing media:', error);
    return NextResponse.json({ error: String(error), media: [] }, { status: 500 });
  }
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function formatDate(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  if (diff < 60000) return 'Just now';
  if (diff < 3600000) return Math.floor(diff / 60000) + ' min ago';
  if (diff < 86400000) return Math.floor(diff / 3600000) + ' hours ago';
  if (diff < 604800000) return Math.floor(diff / 86400000) + ' days ago';

  return date.toLocaleDateString();
}
