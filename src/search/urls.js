/**
 * URL helpers shared by the search layer, the analyzer and the history store.
 *
 * Three different questions get asked about a URL, and each needs its own answer:
 *
 *  - how is it SHOWN?           `cleanUrl`: the link as a person would paste it,
 *                               minus campaign parameters and the fragment.
 *  - is it the SAME PAGE?       `canonicalUrl`: a comparison key. `http://` and
 *                               `https://`, with or without `www.`, are one page,
 *                               and so are `?a=1&b=2` and `?b=2&a=1`.
 *  - is it an opaque redirect?  `isGroundingRedirect`: Gemini's search grounding
 *                               answers with minted links on a Google host that
 *                               expire within about a month (see
 *                               src/search/gemini-grounding.js).
 *
 * These lived in src/search/web.js, which still re-exports the first two.
 */

/**
 * Normalizes and strips tracking parameters from URLs for clean canonical deduplication
 */
export function cleanUrl(rawUrl) {
  if (!rawUrl) return '';
  try {
    const u = new URL(rawUrl);
    u.searchParams.delete('utm_source');
    u.searchParams.delete('utm_medium');
    u.searchParams.delete('utm_campaign');
    u.searchParams.delete('utm_term');
    u.searchParams.delete('utm_content');
    u.hash = '';
    return u.toString().replace(/\/$/, '');
  } catch {
    return rawUrl;
  }
}

/**
 * Helper to extract clean hostname/domain from URL
 */
export function extractDomain(urlStr) {
  try {
    const u = new URL(urlStr);
    return u.hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}

/** Query parameters that say where a visitor came from, not which page they asked for. */
const TRACKING_PARAMETERS = new Set([
  'fbclid', 'gclid', 'dclid', 'msclkid', 'yclid', 'igshid',
  'mc_cid', 'mc_eid', '_hsenc', '_hsmi', 'ref_src', 'ref_url',
]);

const isTrackingParameter = name => name.startsWith('utm_') || TRACKING_PARAMETERS.has(name);

/**
 * A key under which two spellings of one page compare equal.
 *
 * The scheme is ignored (a site that serves both is one page), as are `www.`, a
 * trailing dot on the host, the port that is the default for the scheme, the
 * fragment, trailing slashes, campaign and click-tracking parameters, and the
 * order of the remaining query parameters. Path and query values keep their case:
 * servers distinguish them.
 *
 * The result is a key, not a link: it has no scheme. Show `cleanUrl(url)` instead.
 * Anything that is not an http(s) URL is returned trimmed and otherwise as it is,
 * so it still compares equal to itself; an empty value gives ''.
 *
 * @param {string} rawUrl
 * @returns {string}
 */
export function canonicalUrl(rawUrl) {
  if (typeof rawUrl !== 'string' || !rawUrl.trim()) return '';
  const text = rawUrl.trim();

  let url;
  try {
    url = new URL(text);
  } catch {
    return text;
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return text;

  // The URL parser has already lower-cased the host and dropped the port that is the default for the scheme
  // in use (`https://x:443/`); a port still there is a real one (`https://x:80/` is not `https://x/`).
  const host = trimEndChar(url.hostname.replace(/^www\./, ''), '.');
  const port = url.port ? `:${url.port}` : '';
  const path = trimEndChar(url.pathname, '/');

  const query = [...url.searchParams]
    .filter(([name]) => !isTrackingParameter(name.toLowerCase()))
    .sort(([nameA, valueA], [nameB, valueB]) => (nameA < nameB ? -1 : nameA > nameB ? 1 : valueA < valueB ? -1 : valueA > valueB ? 1 : 0));

  return `${host}${port}${path}${query.length > 0 ? `?${new URLSearchParams(query)}` : ''}`;
}

/**
 * `text` without the run of `char` at its end. A loop on purpose: `/x+$/` takes quadratic time on a long run
 * of x that is not at the end (a path of 64,000 slashes and then a letter), and these values come from the web.
 */
function trimEndChar(text, char) {
  let end = text.length;
  while (end > 0 && text[end - 1] === char) end--;
  return end === text.length ? text : text.slice(0, end);
}

/**
 * The host of a web address, in lower case and without the dot that may end a fully qualified name
 * (`Example.COM.` is `example.com`); '' when the value is not an address that has a host.
 */
export function hostKey(rawUrl) {
  try {
    return trimEndChar(new URL(rawUrl).hostname, '.');
  } catch {
    return '';
  }
}

/** The host Gemini's search grounding mints its source links on. */
export const GROUNDING_REDIRECT_HOST = 'vertexaisearch.cloud.google.com';

/**
 * Is this one of Gemini's grounding redirect links: a web address on
 * `GROUNDING_REDIRECT_HOST` that only leads somewhere for a limited time and
 * says nothing about the page behind it?
 *
 * Judged on the host alone: nothing else is served there, so any link on it is
 * either resolved to the real page or not used at all.
 */
export function isGroundingRedirect(rawUrl) {
  try {
    const url = new URL(rawUrl);
    return (url.protocol === 'https:' || url.protocol === 'http:') &&
      trimEndChar(url.hostname, '.') === GROUNDING_REDIRECT_HOST;
  } catch {
    return false;
  }
}

/**
 * Hosts that mint a fresh, expiring URL for every single request. Remembering
 * one of these makes the same page look brand new on the next run, which
 * permanently inflates the "What Happened This Week" section.
 */
const EPHEMERAL_URL_HOSTS = [
  GROUNDING_REDIRECT_HOST,
  'googleusercontent.com',
];

/**
 * Judged on the host alone, so that `https://lh3.googleusercontent.com/x` is one but a page that merely
 * mentions a host in its path or query (`https://example.com/?u=googleusercontent.com`) is not.
 */
export function isEphemeralUrl(rawUrl) {
  const host = hostKey(rawUrl);
  return EPHEMERAL_URL_HOSTS.some(ephemeral => host === ephemeral || host.endsWith(`.${ephemeral}`));
}

/**
 * Is this a well-formed `http:` or `https:` address, with a host? The URL parser
 * decides, so `HTTPS://Example.com` is one and the bare `http://`, `ftp:`,
 * `javascript:` and a relative path are not. Only strings qualify, and without
 * whitespace around them: the parser would shrug that off, but the value is
 * about to be stored and shown as it is. An address carrying a user name or a
 * password (`https://user:secret@host/`) does not qualify either: nothing that
 * is published should hold credentials.
 */
export function isWebUrl(value) {
  if (typeof value !== 'string' || value !== value.trim()) return false;
  try {
    const { protocol, username, password } = new URL(value);
    return (protocol === 'https:' || protocol === 'http:') && !username && !password;
  } catch {
    return false;
  }
}
