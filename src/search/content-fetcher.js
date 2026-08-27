import { config } from '../config.js';

const cache = new Map();

function getGitHubHeaders() {
  const headers = {
    'Accept': 'application/vnd.github+json',
    'User-Agent': 'chrome-status-ecosystem-tracker/1.0',
  };
  if (config.githubToken) {
    headers['Authorization'] = `Bearer ${config.githubToken}`;
  }
  return headers;
}

/**
 * Parses GitHub issue URL into owner, repo, and issue number
 */
export function parseGitHubIssueUrl(url) {
  if (!url) return null;
  const match = url.match(/github\.com\/([^/]+)\/([^/]+)\/issues\/(\d+)/);
  if (!match) return null;
  return { owner: match[1], repo: match[2], issueNumber: match[3] };
}

/**
 * Fetches comments for a GitHub issue to extract vendor opinions and discussion highlights
 */
export async function fetchGitHubIssueComments(issueUrl) {
  const parsed = parseGitHubIssueUrl(issueUrl);
  if (!parsed) return [];

  const cacheKey = `gh_comments_${parsed.owner}_${parsed.repo}_${parsed.issueNumber}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  try {
    const apiUrl = `https://api.github.com/repos/${parsed.owner}/${parsed.repo}/issues/${parsed.issueNumber}/comments?per_page=5`;
    const res = await fetch(apiUrl, { headers: getGitHubHeaders() });
    if (!res.ok) return [];

    const data = await res.json();
    const comments = (Array.isArray(data) ? data : []).map(c => ({
      author: c.user?.login || 'unknown',
      authorAssociation: c.author_association,
      createdAt: c.created_at,
      body: (c.body || '').slice(0, 400).replace(/\r?\n/g, ' ').trim(),
    }));

    cache.set(cacheKey, comments);
    return comments;
  } catch {
    return [];
  }
}

/**
 * Fetches the raw content or summary of an explainer / markdown URL
 */
export async function fetchExplainerSummary(explainerUrl) {
  if (!explainerUrl) return null;

  const cacheKey = `explainer_${explainerUrl}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  try {
    let fetchUrl = explainerUrl;
    // If it's a GitHub blob link, convert to raw URL for direct text
    if (explainerUrl.includes('github.com') && explainerUrl.includes('/blob/')) {
      fetchUrl = explainerUrl.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/');
    }

    // Only fetch text for raw or direct markdown/html
    if (fetchUrl.includes('raw.githubusercontent.com') || fetchUrl.endsWith('.md') || fetchUrl.endsWith('.txt')) {
      const res = await fetch(fetchUrl, {
        headers: { 'User-Agent': 'chrome-status-ecosystem-tracker/1.0' },
      });
      if (res.ok) {
        const text = await res.text();
        const snippet = text.slice(0, 600).replace(/\r?\n/g, ' ').trim();
        cache.set(cacheKey, snippet);
        return snippet;
      }
    }
  } catch {
    // Ignore fetch error
  }

  return null;
}

/**
 * Fetches Hacker News item comments to inspect community feedback
 */
export async function fetchHackerNewsItemDetails(itemId) {
  if (!itemId) return null;
  const cacheKey = `hn_item_${itemId}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  try {
    const res = await fetch(`https://hn.algolia.com/api/v1/items/${itemId}`, {
      headers: { 'User-Agent': 'chrome-status-ecosystem-tracker/1.0' },
    });
    if (!res.ok) return null;

    const data = await res.json();
    const topComments = (data.children || [])
      .slice(0, 3)
      .map(c => (c.text || '').replace(/<[^>]*>/g, '').slice(0, 250).trim())
      .filter(Boolean);

    const details = {
      title: data.title,
      url: data.url,
      points: data.points || 0,
      commentsCount: data.children ? data.children.length : 0,
      topComments,
    };

    cache.set(cacheKey, details);
    return details;
  } catch {
    return null;
  }
}

/**
 * Fetches package README snippet from npm to verify true polyfill status
 */
export async function fetchNpmPackageDetails(packageName) {
  if (!packageName) return null;
  const cacheKey = `npm_${packageName}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  try {
    const res = await fetch(`https://registry.npmjs.org/${encodeURIComponent(packageName)}`, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'chrome-status-ecosystem-tracker/1.0',
      },
    });
    if (!res.ok) return null;

    const data = await res.json();
    const latestVersion = data['dist-tags']?.latest;
    const latestMeta = latestVersion ? data.versions?.[latestVersion] : null;
    const readme = (data.readme || '').slice(0, 500).replace(/\r?\n/g, ' ').trim();

    const details = {
      name: packageName,
      description: data.description || '',
      homepage: data.homepage || null,
      repository: typeof data.repository === 'string' ? data.repository : data.repository?.url || null,
      readmeSnippet: readme,
      keywords: data.keywords || latestMeta?.keywords || [],
    };

    cache.set(cacheKey, details);
    return details;
  } catch {
    return null;
  }
}
