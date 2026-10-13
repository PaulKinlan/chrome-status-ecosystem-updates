import { config } from '../config.js';
import { logger } from '../logger.js';
import { fetchWithTimeout, readTextLimited } from '../http.js';
import { fetchPublicUrl, isPublicHostname } from '../safe-fetch.js';
import { stripInvisibleCharacters } from '../text.js';

const cache = new Map();

/**
 * Upper bounds on how much of an untrusted page is read. Only the first few
 * hundred characters of text are ever used, so these are generous; they exist
 * so that a hostile or broken server cannot make the crawler buffer gigabytes.
 */
const MAX_ARTICLE_BYTES = 1024 * 1024;
const MAX_EXPLAINER_BYTES = 256 * 1024;

/** Headers for GitHub API requests: authenticated when GITHUB_TOKEN is set (5,000 requests an hour instead of 60). */
export function getGitHubHeaders() {
  const headers = {
    'Accept': 'application/vnd.github+json',
    'User-Agent': 'chrome-status-ecosystem-tracker/1.0',
  };
  if (config.githubToken) {
    headers['Authorization'] = `Bearer ${config.githubToken}`;
  }
  return headers;
}

/** GitHub owner and repository names: letters, digits, `-`, `_` and `.` only. */
const GITHUB_NAME = /^[A-Za-z0-9_.-]+$/;

/**
 * Parses a GitHub issue URL into owner, repo, and issue number.
 *
 * The URL is checked as a URL, not searched as text. The old pattern was not
 * anchored, so `https://example.com/?r=github.com/a/b/issues/1` and
 * `https://notgithub.com/a/b/issues/1` both "parsed", and a `..` or `?` in the
 * owner went straight into the GitHub API path built from the result.
 */
export function parseGitHubIssueUrl(url) {
  // Only a string is an address: `new URL()` would happily parse an array that holds one.
  if (typeof url !== 'string') return null;

  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }
  if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') return null;
  if (parsed.username || parsed.password) return null;
  const host = parsed.hostname.toLowerCase();
  if (host !== 'github.com' && host !== 'www.github.com') return null;

  const match = parsed.pathname.match(/^\/([^/]+)\/([^/]+)\/issues\/(\d+)(?:\/|$)/);
  if (!match) return null;
  const [, owner, repo, issueNumber] = match;
  if (!GITHUB_NAME.test(owner) || !GITHUB_NAME.test(repo) || /^\.+$/.test(owner) || /^\.+$/.test(repo)) return null;
  return { owner, repo, issueNumber };
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
 * Fetches the raw content or summary of an explainer / markdown URL.
 *
 * The URL comes from a ChromeStatus entry, i.e. it is not ours to trust, so it
 * goes through the same public-hosts-only fetch as article excerpts.
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
      const res = await fetchPublicUrl(fetchUrl, {
        label: 'Explainer',
        timeoutMs: 8_000,
        headers: { 'User-Agent': 'chrome-status-ecosystem-tracker/1.0' },
      });
      if (res.ok) {
        const text = await readTextLimited(res, MAX_EXPLAINER_BYTES);
        const snippet = text.slice(0, 600).replace(/\r?\n/g, ' ').trim();
        cache.set(cacheKey, snippet);
        return snippet;
      }
    }
  } catch (err) {
    // An explainer is only enrichment, so a refusal or failure is not an error;
    // leave a trace for anyone running with --verbose.
    logger.debug(`[Content Fetcher] Skipped explainer ${explainerUrl}: ${err.message}`);
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
 * Cheap synchronous pre-check: is this a plain http(s) URL whose literal host
 * looks publicly routable?
 *
 * Unlike every other fetch in this module, `fetchArticleExcerpt` is pointed at
 * arbitrary URLs that came from Brave/Google/Gemini results, so the target is
 * attacker-influenceable. This crawler runs unattended in CI, where the
 * loopback interface and the cloud metadata endpoint (169.254.169.254) are
 * reachable and hold credentials, so a malicious result could otherwise turn
 * the crawler into a proxy for reading internal services (SSRF).
 *
 * This only judges the literal URL. The fetch itself goes through
 * `fetchPublicUrl` (src/safe-fetch.js), which also resolves the hostname and
 * re-checks every redirect hop; see that module for what remains uncovered.
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

  // The WHATWG URL parser normalises octal/hex/decimal IPv4 forms (0177.0.0.1,
  // 0x7f.1, 2130706433) into dotted quads, so judging the parsed host is enough.
  return isPublicHostname(parsed.hostname);
}

/**
 * Removes every `<tag ...> ... </tag>` block, in time linear in the input.
 *
 * The markup comes from an arbitrary server and is cleaned synchronously, so no
 * timeout can interrupt a slow pattern. The obvious regex for this job (and the
 * one used here before) rescans the rest of the document from every opening
 * tag when the closing tag is missing, which is quadratic: 100 KB of `<nav `
 * took 3.5 s of CPU, so the 1 MiB body cap allowed minutes. Looking for the
 * opener and the closer separately visits each character once. An opener with
 * no closer is left in place (the tag stripper then drops just the tag), as it
 * always was.
 */
function stripBlocks(html, tag) {
  const opener = new RegExp(`<${tag}\\b`, 'gi');
  const closer = new RegExp(`</${tag}\\s*>`, 'gi');
  let out = '';
  let from = 0;
  for (;;) {
    opener.lastIndex = from;
    const open = opener.exec(html);
    if (!open) break;
    closer.lastIndex = open.index + open[0].length;
    const close = closer.exec(html);
    if (!close) break;
    out += html.slice(from, open.index) + ' ';
    from = close.index + close[0].length;
  }
  return out + html.slice(from);
}

/**
 * Replaces every `<...>` with a space, in time linear in the input. (`/<[^>]+>/g`
 * is quadratic on a long run of `<` with no `>`; see `stripBlocks`.) A lone `<`
 * with no `>` after it, and the empty `<>`, are text and stay.
 */
function stripTags(html) {
  let out = '';
  let from = 0;
  for (;;) {
    const open = html.indexOf('<', from);
    if (open === -1) break;
    const close = html.indexOf('>', open + 1);
    if (close === -1) break;
    if (close === open + 1) {
      out += html.slice(from, close + 1);
    } else {
      out += html.slice(from, open) + ' ';
    }
    from = close + 1;
  }
  return out + html.slice(from);
}

const HTML_ENTITY_TEXT = { '&nbsp;': ' ', '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"' };

/**
 * Reduces a page to its readable text: drops script, style, nav, footer and SVG
 * blocks, then every remaining tag, decodes the handful of entities that matter
 * and collapses whitespace.
 *
 * Entities are decoded in one pass. Decoding `&amp;` first and the others
 * afterwards would turn the literal text `&amp;lt;` into `<`.
 *
 * Exported for testing.
 */
export function htmlToText(html) {
  let text = String(html ?? '');
  for (const tag of ['script', 'style', 'nav', 'footer', 'svg']) text = stripBlocks(text, tag);
  return stripTags(text)
    .replace(/&(?:nbsp|amp|lt|gt|quot);/g, entity => HTML_ENTITY_TEXT[entity])
    .replace(/\s+/g, ' ')
    .trim();
}

/** The title sits in `<head>`; looking further than this only costs time on a 1 MiB body. */
const TITLE_SEARCH_LIMIT = 128 * 1024;
const TITLE_MAX_LENGTH = 200;

const TITLE_ENTITY_TEXT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };

/** A code point a person could have typed into a title: not a control character, not a surrogate, in range. */
function isTitleCodePoint(codePoint) {
  if (codePoint === 9 || codePoint === 10 || codePoint === 13) return true;
  return codePoint >= 0x20 && codePoint <= 0x10FFFF &&
    !(codePoint >= 0x7F && codePoint <= 0x9F) &&
    !(codePoint >= 0xD800 && codePoint <= 0xDFFF);
}

/**
 * Reads the `<title>` of a page, or null when it has none.
 *
 * Titles are full of character references (`&amp;`, `&#8217;`, `&#x2019;`),
 * which are decoded in one pass (see `htmlToText` for why one pass). Control
 * and invisible formatting characters are dropped, whitespace is collapsed and
 * the result is capped at 200 characters.
 *
 * The markup comes from an arbitrary server and is searched synchronously, so
 * only the first 128 KB is looked at and the opener and closer are searched for
 * separately (see `stripBlocks` for why a single pattern would not do).
 *
 * Exported for testing.
 */
export function extractHtmlTitle(html) {
  if (typeof html !== 'string') return null;
  const head = html.slice(0, TITLE_SEARCH_LIMIT);

  const opener = /<title\b/gi;
  const open = opener.exec(head);
  if (!open) return null;
  const tagEnd = head.indexOf('>', open.index + open[0].length);
  if (tagEnd === -1) return null;

  const closer = /<\/title\s*>/gi;
  closer.lastIndex = tagEnd + 1;
  const close = closer.exec(head);
  if (!close) return null;

  const decoded = head.slice(tagEnd + 1, close.index)
    .replace(/&(?:#(\d{1,7})|#[xX]([0-9a-fA-F]{1,6})|(amp|lt|gt|quot|apos|nbsp));/g, (entity, decimal, hex, name) => {
      if (name) return TITLE_ENTITY_TEXT[name];
      const codePoint = decimal !== undefined ? Number(decimal) : parseInt(hex, 16);
      return isTitleCodePoint(codePoint) ? String.fromCodePoint(codePoint) : entity;
    });
  // After the entities, so that `&#8238;` (a right-to-left override) goes the way the character itself does.
  const title = stripInvisibleCharacters(decoded)
    .replace(/\s+/g, ' ')
    .trim();
  return title ? title.slice(0, TITLE_MAX_LENGTH) : null;
}

/**
 * Fetches an article or blog post URL and reads what the page says about
 * itself: a clean text excerpt of its content and its title.
 *
 * @returns {Promise<{excerpt: string, title: string|null}|null>} null when the
 *   page could not be read (refused URL, error, not a text page)
 */
export async function fetchArticlePage(url, maxChars = 1200) {
  if (!url || typeof url !== 'string') return null;

  // Refuse anything that is not a public http(s) target; see isFetchableExternalUrl.
  if (!isFetchableExternalUrl(url)) {
    logger.debug(`[Content Fetcher] Refusing to fetch non-public or non-http(s) URL: ${url}`);
    return null;
  }

  const cacheKey = `article_page_${maxChars}_${url}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  try {
    // Deliberately short and barely retried: this runs for up to 8 URLs per
    // feature against unknown hosts, and the excerpt is only an enrichment.
    const res = await fetchPublicUrl(url, {
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

    const html = await readTextLimited(res, MAX_ARTICLE_BYTES);
    const page = { excerpt: htmlToText(html).slice(0, maxChars), title: extractHtmlTitle(html) };
    logger.debug(`[Content Fetcher] Page content fetched for ${url}: HTTP ${res.status}, extracted ${page.excerpt.length} chars`);
    cache.set(cacheKey, page);
    return page;
  } catch (err) {
    logger.debug(`[Content Fetcher] Failed fetching ${url}: ${err.message}`);
    return null;
  }
}

/**
 * Fetches an article or blog post URL and extracts a clean text excerpt of the content
 */
export async function fetchArticleExcerpt(url, maxChars = 1200) {
  const page = await fetchArticlePage(url, maxChars);
  return page ? page.excerpt : null;
}
