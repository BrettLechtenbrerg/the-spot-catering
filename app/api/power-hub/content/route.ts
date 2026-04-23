//==============================================================================
// POWER HUB CMS - Content API
//==============================================================================
// Reads and writes content JSON files via the GitHub Contents API.
// Runs server-side on Vercel — no local filesystem access needed.
//
// REQUIRED ENV VARS:
//   - GITHUB_TOKEN: Personal Access Token with 'repo' scope
//
// ENDPOINTS:
//   GET /api/power-hub/content         - List all content files
//   GET /api/power-hub/content?file=X  - Get specific file content
//   PUT /api/power-hub/content         - Save and deploy content (commits to GitHub)
//==============================================================================

import { NextResponse } from 'next/server';

const GITHUB_API = 'https://api.github.com';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = 'BrettLechtenbrerg';
const GITHUB_REPO = 'the-spot-catering';
const GITHUB_BRANCH = 'main';

// Helper: Make authenticated GitHub API request
async function githubFetch(endpoint: string, options: RequestInit = {}) {
  if (!GITHUB_TOKEN) {
    throw new Error('GITHUB_TOKEN environment variable is not set');
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

// Helper: Get a file's contents from GitHub
async function getFileFromGitHub(path: string) {
  const endpoint = `/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}?ref=${GITHUB_BRANCH}`;
  const data = await githubFetch(endpoint);

  const content = Buffer.from(data.content, 'base64').toString('utf-8');

  return {
    content: JSON.parse(content),
    sha: data.sha,
    path: data.path,
  };
}

// Helper: List JSON files in the content/ directory
async function listFilesFromGitHub(path: string) {
  const endpoint = `/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}?ref=${GITHUB_BRANCH}`;
  const data = await githubFetch(endpoint);

  return (data as Array<{ name: string; type: string; sha: string; size: number }>)
    .filter((file) => file.type === 'file' && file.name.endsWith('.json'))
    .filter((file) => file.name !== 'credentials.json') // Hide from content editor
    .map((file) => ({
      filename: file.name,
      sha: file.sha,
      size: file.size,
    }));
}

// Helper: Update a file on GitHub (creates a commit on the configured branch)
async function updateFileOnGitHub(
  path: string,
  content: unknown,
  sha: string,
  message: string,
) {
  const endpoint = `/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`;
  const encodedContent = Buffer.from(JSON.stringify(content, null, 2)).toString('base64');

  const data = await githubFetch(endpoint, {
    method: 'PUT',
    body: JSON.stringify({
      message,
      content: encodedContent,
      sha,
      branch: GITHUB_BRANCH,
    }),
  });

  return {
    success: true,
    commit: data.commit.sha,
    newSha: data.content.sha,
    message: 'Content saved and deployed!',
  };
}

//------------------------------------------------------------------------------
// GET
//------------------------------------------------------------------------------
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('file');

    if (!filename) {
      const files = await listFilesFromGitHub('content');
      return NextResponse.json({ files, source: 'github' });
    }

    const file = await getFileFromGitHub(`content/${filename}`);
    return NextResponse.json({
      filename,
      content: file.content,
      sha: file.sha,
      source: 'github',
    });
  } catch (error) {
    console.error('Content read error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to read content' },
      { status: 500 },
    );
  }
}

//------------------------------------------------------------------------------
// PUT - Save content and deploy
//------------------------------------------------------------------------------
export async function PUT(request: Request) {
  try {
    const { filename, content, sha } = await request.json();

    if (!filename || !content) {
      return NextResponse.json(
        { error: 'Filename and content are required' },
        { status: 400 },
      );
    }

    if (!sha) {
      return NextResponse.json(
        { error: 'SHA is required for updates (prevents conflicts)' },
        { status: 400 },
      );
    }

    // Security: only allow content/*.json writes, and block credentials here
    const cleanName: string = filename.startsWith('content/') ? filename.replace(/^content\//, '') : filename;
    if (!cleanName.endsWith('.json') || cleanName.includes('..') || cleanName.includes('/')) {
      return NextResponse.json({ error: 'Invalid file path' }, { status: 400 });
    }
    if (cleanName === 'credentials.json') {
      return NextResponse.json(
        { error: 'Credentials must be updated via /api/power-hub/credentials' },
        { status: 403 },
      );
    }

    const path = `content/${cleanName}`;
    const commitMessage = `Update ${cleanName.replace('.json', '')} content via Power Hub`;
    const result = await updateFileOnGitHub(path, content, sha, commitMessage);

    return NextResponse.json({
      ...result,
      deployedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Content write error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to save content' },
      { status: 500 },
    );
  }
}
