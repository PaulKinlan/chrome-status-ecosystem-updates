import { config } from '../config.js';
import { fetchGitHubIssueComments, parseGitHubIssueUrl } from './content-fetcher.js';

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
 * Fetches direct details of a known standards position issue, including comment highlights
 */
async function fetchDirectIssue(issueUrl, vendorName) {
  const parsed = parseGitHubIssueUrl(issueUrl);
  if (!parsed) return null;

  try {
    const apiUrl = `https://api.github.com/repos/${parsed.owner}/${parsed.repo}/issues/${parsed.issueNumber}`;
    const res = await fetch(apiUrl, { headers: getGitHubHeaders() });
    if (!res.ok) return null;

    const data = await res.json();
    const labels = (data.labels || []).map(l => (typeof l === 'string' ? l : l.name));

    // Also fetch comments on the issue to understand true engineer stance
    const comments = await fetchGitHubIssueComments(issueUrl);
    const commentSummary = comments.length > 0
      ? `Latest discussion from @${comments[comments.length - 1].author}: "${comments[comments.length - 1].body.slice(0, 150)}..."`
      : null;

    return {
      source: `${vendorName} Standards Position`,
      type: 'standards',
      vendor: vendorName,
      title: data.title,
      url: data.html_url,
      state: data.state,
      labels,
      commentsCount: data.comments || 0,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
      snippet: (data.body || '').slice(0, 300).replace(/\r?\n/g, ' '),
      comments,
      commentSummary,
    };
  } catch {
    return null;
  }
}

/**
 * Searches a repository for standards position issues matching the feature
 */
async function searchRepoIssues(repo, query, vendorName) {
  try {
    const q = `repo:${repo} ${query}`;
    const url = `https://api.github.com/search/issues?q=${encodeURIComponent(q)}&per_page=3`;
    const res = await fetch(url, { headers: getGitHubHeaders() });
    if (!res.ok) return [];

    const data = await res.json();
    const items = data.items || [];

    const results = [];
    for (const item of items) {
      const labels = (item.labels || []).map(l => (typeof l === 'string' ? l : l.name));
      const comments = await fetchGitHubIssueComments(item.html_url);
      const commentSummary = comments.length > 0
        ? `Latest discussion from @${comments[comments.length - 1].author}: "${comments[comments.length - 1].body.slice(0, 150)}..."`
        : null;

      results.push({
        source: `${vendorName} Standards Position`,
        type: 'standards',
        vendor: vendorName,
        title: item.title,
        url: item.html_url,
        state: item.state,
        labels,
        commentsCount: item.comments || 0,
        createdAt: item.created_at,
        updatedAt: item.updated_at,
        snippet: (item.body || '').slice(0, 300).replace(/\r?\n/g, ' '),
        comments,
        commentSummary,
      });
    }
    return results;
  } catch {
    return [];
  }
}

/**
 * Gathers standards positions from WebKit, Mozilla, and W3C TAG
 */
export async function searchStandardsPositions(feature) {
  const results = [];
  const seenUrls = new Set();

  // 1. Direct fetch if ChromeStatus metadata contains specific URLs
  if (feature.browsers?.safari?.url) {
    const directWebKit = await fetchDirectIssue(feature.browsers.safari.url, 'WebKit');
    if (directWebKit && !seenUrls.has(directWebKit.url)) {
      results.push(directWebKit);
      seenUrls.add(directWebKit.url);
    }
  }

  if (feature.browsers?.firefox?.url) {
    const directMozilla = await fetchDirectIssue(feature.browsers.firefox.url, 'Mozilla');
    if (directMozilla && !seenUrls.has(directMozilla.url)) {
      results.push(directMozilla);
      seenUrls.add(directMozilla.url);
    }
  }

  // 2. Query GitHub search if direct positions not found
  const query = `"${feature.name}"`;

  if (!results.some(r => r.vendor === 'WebKit')) {
    const webkitResults = await searchRepoIssues('WebKit/standards-positions', query, 'WebKit');
    for (const item of webkitResults) {
      if (!seenUrls.has(item.url)) {
        results.push(item);
        seenUrls.add(item.url);
      }
    }
  }

  if (!results.some(r => r.vendor === 'Mozilla')) {
    const mozillaResults = await searchRepoIssues('mozilla/standards-positions', query, 'Mozilla');
    for (const item of mozillaResults) {
      if (!seenUrls.has(item.url)) {
        results.push(item);
        seenUrls.add(item.url);
      }
    }
  }

  // 3. W3C TAG Design Reviews
  const tagResults = await searchRepoIssues('w3ctag/design-reviews', query, 'W3C TAG');
  for (const item of tagResults) {
    if (!seenUrls.has(item.url)) {
      results.push(item);
      seenUrls.add(item.url);
    }
  }

  return results;
}
