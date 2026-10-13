import dns from 'node:dns/promises';
import net from 'node:net';
import { fetchWithTimeout, discardBody, redactUrl, DEFAULT_TIMEOUT_MS } from './http.js';

/**
 * Outbound-request guard for URLs that came from somewhere we do not control.
 *
 * Almost every fetch in this crawler targets a fixed, well-known API. The two
 * exceptions are article excerpts and explainer text, whose URLs come out of
 * Brave / Google / Gemini results and ChromeStatus entries. The crawler runs
 * unattended in CI, where loopback and the cloud metadata endpoints are
 * reachable and hold credentials, so an attacker-influenced URL must never be
 * able to turn it into a proxy for those (SSRF).
 *
 * Three layers, each of which closes a hole the previous one leaves open:
 *
 *  1. `isPublicHostname`  - a synchronous check of the literal host or IP
 *                           (private ranges, `localhost` and friends, single-label
 *                           and internal-only names, `localhost.` with a trailing dot).
 *  2. `assertPublicUrl`   - additionally resolves a hostname and requires EVERY
 *                           address it maps to to be public, which catches names
 *                           like `127.0.0.1.nip.io` or `metadata.google.internal`.
 *  3. `fetchPublicUrl`    - follows redirects itself and re-runs (2) on every hop,
 *                           because a public page can simply 302 to http://127.0.0.1/.
 *
 * `resolveRedirect` is the same policy for a different question: not "what is at
 * this URL" but "where does it send me". It reads the first redirect and
 * returns the target without ever requesting it, which is how Gemini's opaque
 * grounding links are turned into the real page's address.
 *
 * Known limit: `fetch` resolves the name again when it connects, so a DNS server
 * that answers "public" to our lookup and "private" a moment later (DNS
 * rebinding) can still slip through. Closing that needs the address pinned at
 * connect time, which the built-in `fetch` cannot do without a custom dispatcher
 * (i.e. a dependency). The checks above remove every other known route.
 */

export class UnsafeUrlError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnsafeUrlError';
  }
}

/** Addresses a public web server can never legitimately be at. */
const NON_PUBLIC = new net.BlockList();

for (const [network, prefix] of [
  ['0.0.0.0', 8],        // "this network"; Linux treats 0.0.0.0 as the local host
  ['10.0.0.0', 8],       // private
  ['100.64.0.0', 10],    // carrier-grade NAT (includes Alibaba Cloud metadata, 100.100.100.200)
  ['127.0.0.0', 8],      // loopback
  ['169.254.0.0', 16],   // link-local (AWS / GCP / Azure / Oracle instance metadata)
  ['172.16.0.0', 12],    // private (includes Docker's default bridge)
  ['192.0.0.0', 24],     // IETF protocol assignments
  ['192.0.2.0', 24],     // documentation (TEST-NET-1)
  ['192.168.0.0', 16],   // private
  ['198.18.0.0', 15],    // benchmarking
  ['198.51.100.0', 24],  // documentation (TEST-NET-2)
  ['203.0.113.0', 24],   // documentation (TEST-NET-3)
  ['224.0.0.0', 4],      // multicast
  ['240.0.0.0', 4],      // reserved, including the 255.255.255.255 broadcast address
]) {
  NON_PUBLIC.addSubnet(network, prefix, 'ipv4');
}
// Azure's virtual public IP (wire server, DNS, health probes); GitHub-hosted runners run on Azure.
NON_PUBLIC.addAddress('168.63.129.16', 'ipv4');

for (const [network, prefix] of [
  ['::', 96],           // unspecified, loopback (::1) and the deprecated IPv4-compatible form (::127.0.0.1)
  ['::ffff:0:0:0', 96], // IPv4-translated (::ffff:0:127.0.0.1)
  ['fc00::', 7],        // unique local (includes AWS's IPv6 metadata address, fd00:ec2::254)
  ['fe80::', 10],       // link-local
  ['fec0::', 10],       // site-local (deprecated, but some stacks still treat it as private)
  ['ff00::', 8],        // multicast
  ['100::', 64],        // discard-only
  ['2001:db8::', 32],   // documentation
  ['3fff::', 20],       // documentation (RFC 9637)
  // Transition forms that smuggle an IPv4 address inside an IPv6 one. Nobody
  // serves a public article from these, so refusing them outright is simpler
  // and safer than unpacking the embedded address.
  ['64:ff9b::', 96],    // NAT64
  ['64:ff9b:1::', 48],  // NAT64 (local use)
  ['2002::', 16],       // 6to4
  ['2001::', 32],       // Teredo
]) {
  NON_PUBLIC.addSubnet(network, prefix, 'ipv6');
}
// BlockList also matches IPv4-mapped IPv6 forms (::ffff:127.0.0.1) against the IPv4 rules.

/** Name suffixes that exist only on private networks (RFC 6761/6762/8375 and common conventions). */
const PRIVATE_NAME_SUFFIXES = [
  '.localhost', '.local', '.internal', '.lan', '.localdomain',
  '.home.arpa', '.intranet', '.corp', '.home', '.private',
];

/** Strips URL brackets, a zone id and any trailing dots (`localhost.` is `localhost`). */
function normalizeHost(rawHost) {
  return String(rawHost ?? '')
    .trim()
    .toLowerCase()
    .replace(/^\[|\]$/g, '')
    .replace(/%.*$/, '')
    .replace(/\.+$/, '');
}

/**
 * True when a literal hostname or IP address looks publicly routable.
 *
 * Purely syntactic: a hostname that passes still has to be resolved and
 * re-checked by `assertPublicUrl`.
 *
 * @param {string} rawHost hostname as found in a URL (IPv6 may be bracketed)
 */
export function isPublicHostname(rawHost) {
  const host = normalizeHost(rawHost);
  if (!host) return false;

  const family = net.isIP(host);
  if (family) return !NON_PUBLIC.check(host, family === 4 ? 'ipv4' : 'ipv6');

  if (host === 'localhost' || PRIVATE_NAME_SUFFIXES.some(suffix => host.endsWith(suffix))) return false;

  // A bare name (`intranet`, `metadata`, `printer`) can only be resolved through
  // an internal search domain; public hosts always have at least one dot.
  return host.includes('.');
}

/** Resolves a hostname to every address it maps to. */
async function lookupAll(hostname) {
  return dns.lookup(hostname, { all: true, verbatim: true });
}

let resolveHost = lookupAll;

/**
 * Replaces the hostname resolver, returning a function that restores the
 * previous one. The test suite uses this so it never performs real DNS lookups.
 *
 * @param {(hostname: string) => Promise<Array<string | {address: string}>>} resolver
 */
export function setHostResolver(resolver) {
  const previous = resolveHost;
  resolveHost = resolver;
  return () => { resolveHost = previous; };
}

/**
 * Throws unless `rawUrl` is a plain http(s) URL whose host is, and resolves
 * only to, public addresses.
 *
 * @param {string|URL} rawUrl
 * @param {{resolve?: (hostname: string) => Promise<Array<string | {address: string}>>}} [options]
 * @returns {Promise<URL>} the parsed URL
 * @throws {UnsafeUrlError} for anything that must not be fetched
 */
export async function assertPublicUrl(rawUrl, { resolve = resolveHost } = {}) {
  let url;
  try {
    url = new URL(rawUrl);
  } catch {
    throw new UnsafeUrlError(`Not a valid URL: ${rawUrl}`);
  }

  // Rejects file:, data:, ftp:, gopher: and every other non-web scheme.
  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    throw new UnsafeUrlError(`Refusing non-web URL scheme ${url.protocol}`);
  }
  if (!isPublicHostname(url.hostname)) {
    throw new UnsafeUrlError(`Refusing non-public host ${url.hostname}`);
  }

  const host = normalizeHost(url.hostname);
  if (net.isIP(host)) return url; // a literal address, already judged above

  let addresses;
  try {
    addresses = await resolve(host);
  } catch (err) {
    // Not "unsafe", just unreachable; keep it a different error class.
    throw new Error(`Could not resolve ${host}: ${err?.code || err?.message || err}`);
  }
  if (!Array.isArray(addresses) || addresses.length === 0) {
    throw new Error(`Could not resolve ${host}: no addresses returned`);
  }

  // Every address, not just the first: a hostile DNS server can return a public
  // address next to a private one and let the OS pick whichever it likes.
  for (const entry of addresses) {
    const address = typeof entry === 'string' ? entry : entry?.address;
    if (!isPublicHostname(address)) {
      throw new UnsafeUrlError(`Refusing ${host}: it resolves to non-public address ${address}`);
    }
  }
  return url;
}

const REDIRECT_STATUSES = new Set([301, 302, 303, 307, 308]);
export const MAX_REDIRECTS = 5;

/** Rejects with `makeError()` if `promise` has not settled within `ms`. */
async function within(promise, ms, makeError) {
  let timer;
  const expiry = new Promise((_, reject) => {
    timer = setTimeout(() => reject(makeError()), Math.max(0, ms));
    timer.unref?.();
  });
  try {
    return await Promise.race([promise, expiry]);
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Undici hands header values over as a "binary string" (one char per byte) and
 * `fetch` itself decodes a redirect's Location as UTF-8 before using it. Doing
 * the redirect by hand means doing that too, or a server that sends its UTF-8
 * path raw (`/café`) would be sent to `/cafÃ©`.
 */
function decodeLocation(location) {
  if (/[^\x00-\x7F]/.test(location) && !/[^\x00-\xFF]/.test(location)) {
    return Buffer.from(location, 'latin1').toString('utf8');
  }
  return location;
}

/**
 * `fetchWithTimeout` for untrusted URLs: refuses non-public targets and
 * follows redirects itself so that every hop is checked, not just the first.
 *
 * `timeoutMs` bounds the whole exchange: every hop, its name lookup, any retry
 * and the wait before it, and reading the body. Do not attach credentials: a
 * redirect can leave the host they were meant for.
 *
 * @param {string|URL} rawUrl
 * @param {Parameters<typeof fetchWithTimeout>[1] & {
 *   maxRedirects?: number,
 *   assertUrl?: (url: string) => Promise<unknown>,
 * }} [options] `assertUrl` replaces the default policy (`assertPublicUrl`).
 * @throws {UnsafeUrlError} when any hop is not a public http(s) URL
 */
export async function fetchPublicUrl(rawUrl, options = {}) {
  const {
    maxRedirects = MAX_REDIRECTS,
    assertUrl = assertPublicUrl,
    timeoutMs = DEFAULT_TIMEOUT_MS,
    ...fetchOptions
  } = options;

  const deadline = Date.now() + timeoutMs;
  const timedOut = () => Object.assign(
    new Error(`Request to ${rawUrl} timed out after ${timeoutMs}ms`),
    { name: 'TimeoutError' }
  );
  let current = String(rawUrl);

  for (let hop = 0; hop <= maxRedirects; hop++) {
    // The name lookup is part of the exchange too: a resolver that never answers
    // must not be able to outlast the deadline.
    await within(Promise.resolve(assertUrl(current)), deadline - Date.now(), timedOut);

    const res = await fetchWithTimeout(current, {
      ...fetchOptions,
      redirect: 'manual',
      timeoutMs,
      deadline,
    });
    if (!REDIRECT_STATUSES.has(res.status)) return res;

    const location = res.headers?.get?.('location');
    discardBody(res);
    if (!location) return res; // a redirect with nowhere to go; the caller sees a non-2xx

    current = new URL(decodeLocation(location), current).href;
  }

  throw new Error(`Too many redirects (more than ${maxRedirects}) starting from ${rawUrl}`);
}

/** The URL answered, but not with a redirect that leads anywhere (see `resolveRedirect`). */
export class NoRedirectError extends Error {
  /** @param {number} status the HTTP status that came back instead */
  constructor(message, status) {
    super(message);
    this.name = 'NoRedirectError';
    this.status = status;
  }
}

/**
 * Reads where `rawUrl` redirects to, without following it.
 *
 * For links that are only a pointer to a page, such as Gemini's grounding
 * redirects: the pointer is asked once and the page it names is never requested
 * here (reading it later goes through `fetchPublicUrl`). Both the pointer and
 * the address it names must be public (`assertUrl`), so a redirect that points
 * at an internal address is refused, not returned.
 *
 * `timeoutMs` bounds the whole exchange, name lookups and any retry included.
 * Other `fetchWithTimeout` options (`retries`, `headers`, `label`) are passed on;
 * `redirect` is always `manual`.
 *
 * @param {string|URL} rawUrl
 * @param {Parameters<typeof fetchWithTimeout>[1] & {
 *   assertUrl?: (url: string) => Promise<unknown>,
 * }} [options] `assertUrl` replaces the default policy (`assertPublicUrl`).
 * @returns {Promise<string>} the absolute address the redirect names
 * @throws {NoRedirectError} when the answer is not a redirect, or names no usable address
 * @throws {UnsafeUrlError} when `rawUrl` or the address it names is not public
 */
export async function resolveRedirect(rawUrl, options = {}) {
  const {
    assertUrl = assertPublicUrl,
    timeoutMs = DEFAULT_TIMEOUT_MS,
    ...fetchOptions
  } = options;

  const start = String(rawUrl);
  const deadline = Date.now() + timeoutMs;
  const timedOut = () => Object.assign(
    new Error(`Request to ${redactUrl(start)} timed out after ${timeoutMs}ms`),
    { name: 'TimeoutError' }
  );

  await within(Promise.resolve(assertUrl(start)), deadline - Date.now(), timedOut);

  const res = await fetchWithTimeout(start, { ...fetchOptions, redirect: 'manual', timeoutMs, deadline });
  const location = REDIRECT_STATUSES.has(res.status) ? res.headers?.get?.('location') : null;
  discardBody(res);
  if (!location) {
    throw new NoRedirectError(`${redactUrl(start)} did not redirect (HTTP ${res.status})`, res.status);
  }

  let target;
  try {
    target = new URL(decodeLocation(location), start);
  } catch {
    throw new NoRedirectError(`${redactUrl(start)} redirected to an address that is not a URL`, res.status);
  }

  // The target is not requested, so no harm can come of it here; but it is about
  // to be stored, shown and read later, and a name that only resolves to an
  // internal address (or does not resolve at all) is no use as a source.
  await within(Promise.resolve(assertUrl(target.href)), deadline - Date.now(), timedOut);
  return target.href;
}
