import { config } from '../config.js';
import { logger } from '../logger.js';
import { fetchWithTimeout } from '../http.js';

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
    const res = await fetchWithTimeout(apiUrl, {
      label: 'GitHub Issue Comments',
      timeoutMs: 8_000,
      headers: getGitHubHeaders(),
    });
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
      const res = await fetchWithTimeout(fetchUrl, {
        label: 'Explainer',
        timeoutMs: 8_000,
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
    const res = await fetchWithTimeout(`https://hn.algolia.com/api/v1/items/${itemId}`, {
      label: 'HN Item',
      timeoutMs: 8_000,
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
    const res = await fetchWithTimeout(`https://registry.npmjs.org/${encodeURIComponent(packageName)}`, {
      label: 'NPM Package',
      timeoutMs: 8_000,
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

/**
 * Decides whether a URL discovered in third-party search results is safe to fetch.
 *
 * Unlike every other fetch in this module, `fetchArticleExcerpt` is pointed at
 * arbitrary URLs that came from Brave/Google/Gemini results, so the target is
 * attacker-influenceable. This crawler runs unattended in CI, where the
 * loopback interface and the cloud metadata endpoint (169.254.169.254) are
 * reachable and hold credentials, so a malicious result could otherwise turn
 * the crawler into a proxy for reading internal services (SSRF).
 *
 * Only plain http(s) URLs aimed at what looks like a publicly routable host
 * are allowed. This is a cheap pre-flight check on the literal URL; it does
 * not defend against a public hostname whose DNS resolves to a private
 * address (DNS rebinding), which would need a custom agent to fix properly.
 *
 * Exported for testing.
 */
export function isFetchableExternalUrl(rawUrl) {
  let parsed;
  try {
    parsed = new URL(rawUrl);
  } catch {
    return false;
  }

  // Rejects file:, data:, ftp:, gopher: and other non-web schemes.
  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return false;

  // URL keeps IPv6 literals wrapped in brackets; strip them for comparison.
  const host = parsed.hostname.toLowerCase().replace(/^\[/, '').replace(/\]$/, '');
  if (!host) return false;

  // Loopback / unspecified addresses reachable by name.
  if (host === 'localhost' || host.endsWith('.localhost')) return false;
  if (host === '::1' || host === '::' || host === '0.0.0.0') return false;

  // IPv4-mapped IPv6 (e.g. ::ffff:127.0.0.1) would slip past the checks below.
  if (host.startsWith('::ffff:')) return false;

  // The WHATWG URL parser normalises octal/decimal IPv4 forms (0177.0.0.1,
  // 2130706433) into dotted quads, so matching on the dotted form is enough.
  const ipv4 = host.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (ipv4) {
    const [a, b] = ipv4.slice(1, 3).map(Number);
    if (a === 0) return false;                          // 0.0.0.0/8 "this network"
    if (a === 10) return false;                         // 10.0.0.0/8 private
    if (a === 127) return false;                        // 127.0.0.0/8 loopback
    if (a === 169 && b === 254) return false;           // 169.254.0.0/16 link-local (cloud metadata)
    if (a === 172 && b >= 16 && b <= 31) return false;  // 172.16.0.0/12 private
    if (a === 192 && b === 168) return false;           // 192.168.0.0/16 private
  }

  return true;
}

/**
 * Fetches an article or blog post URL and extracts a clean text excerpt of the content
 */
export async function fetchArticleExcerpt(url, maxChars = 1200) {
  if (!url || typeof url !== 'string') return null;

  // Refuse anything that is not a public http(s) target; see isFetchableExternalUrl.
  if (!isFetchableExternalUrl(url)) {
    logger.debug(`[Content Fetcher] Refusing to fetch non-public or non-http(s) URL: ${url}`);
    return null;
  }

  const cacheKey = `article_excerpt_${url}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  try {
    // Deliberately short and barely retried: this runs for up to 8 URLs per
    // feature against unknown hosts, and the excerpt is only an enrichment.
    const res = await fetchWithTimeout(url, {
      label: 'Article Excerpt',
      timeoutMs: 5_000,
      retries: 1,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,text/plain;q=0.9',
      },
    });

    if (!res.ok) return null;
    const contentType = res.headers.get('content-type') || '';
    if (!contentType.includes('text/') && !contentType.includes('json') && !contentType.includes('xml')) {
      return null;
    }

    const html = await res.text();
    // Strip scripts, styles, nav, footer, and SVG
    const cleaned = html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ' ')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ' ')
      .replace(/<nav\b[^<]*(?:(?!<\/nav>)<[^<]*)*<\/nav>/gi, ' ')
      .replace(/<footer\b[^<]*(?:(?!<\/footer>)<[^<]*)*<\/footer>/gi, ' ')
      .replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/\s+/g, ' ')
      .trim();

    const excerpt = cleaned.slice(0, maxChars);
    logger.debug(`[Content Fetcher] Page content fetched for ${url}: HTTP ${res.status}, extracted ${excerpt.length} chars`);
    cache.set(cacheKey, excerpt);
    return excerpt;
  } catch (err) {
    logger.debug(`[Content Fetcher] Failed fetching ${url}: ${err.message}`);
    return null;
  }
}
