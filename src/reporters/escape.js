/**
 * Centralised output encoding for every reporter.
 *
 * Previously each reporter defined its own escaper and applied it by hand at
 * each interpolation, which meant escaping was opt-in: roughly twenty URL sinks
 * and a dozen text sinks were simply missed. Everything here is exported from
 * one place so the reporters cannot drift apart again.
 */

const HTML_ENTITIES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

/** Encodes text for interpolation into HTML text nodes or quoted attributes. */
export function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/[&<>"']/g, c => HTML_ENTITIES[c]);
}

/**
 * Tagged template that escapes every interpolated value by default.
 *
 * Use this instead of a bare template literal for any markup built from
 * crawled data: forgetting to escape becomes impossible rather than merely
 * discouraged.
 *
 *   h`<span>${art.domain}</span>`
 *
 * Values that are already trusted markup must be wrapped in `raw()`.
 */
export function h(strings, ...values) {
  return strings.reduce((out, chunk, i) => {
    if (i >= values.length) return out + chunk;
    const v = values[i];
    if (v instanceof RawHtml) return out + chunk + v.value;
    if (Array.isArray(v)) {
      return out + chunk + v.map(x => (x instanceof RawHtml ? x.value : escapeHtml(x))).join('');
    }
    return out + chunk + escapeHtml(v);
  }, '');
}

class RawHtml {
  constructor(value) {
    this.value = value == null ? '' : String(value);
  }
}

/** Marks a string as trusted, pre-rendered markup for use inside `h`. */
export function raw(value) {
  return new RawHtml(value);
}

const SAFE_PROTOCOLS = new Set(['http:', 'https:', 'mailto:']);

/**
 * Encodes a URL for an href/src attribute, or returns '#' if it is not a safe
 * absolute web URL.
 *
 * escapeHtml alone is NOT sufficient here: `javascript:alert(1)` and
 * `data:text/html;base64,...` contain none of & < > " ' and therefore pass
 * through an HTML escaper completely intact. Every URL in these reports comes
 * from search results, npm metadata, bug trackers or reverse-link crawling, and
 * is published to GitHub Pages without human review.
 */
export function safeUrl(url) {
  if (url === null || url === undefined || url === '') return '#';
  try {
    const parsed = new URL(String(url), 'https://chromestatus.com');
    if (!SAFE_PROTOCOLS.has(parsed.protocol)) return '#';
    return escapeHtml(parsed.href);
  } catch {
    return '#';
  }
}

/** True when a URL is safe to link at all, for callers that omit the link entirely. */
export function isSafeUrl(url) {
  return safeUrl(url) !== '#';
}

/**
 * Escapes text for interpolation into Markdown prose.
 *
 * Only characters that change meaning *mid-text* are backslash-escaped. An
 * earlier version also escaped `! # + - ( ) { }`, which turned ordinary
 * sentences into `Web Install API\!` while preventing nothing: those characters
 * are only significant at the start of a line or inside a link destination,
 * which callers handle with `markdownUrl`.
 *
 * Angle brackets become entities rather than backslash escapes because both
 * GitHub and most static site generators pass raw HTML in Markdown straight
 * through to the output, so `<iframe>` in a crawled title would otherwise
 * become a real element.
 */
export function escapeMarkdown(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/([\\`*_[\]])/g, '\\$1')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\|/g, '\\|')
    .replace(/\r?\n/g, ' ');
}


/** Escapes text destined for a Markdown table cell (pipes and newlines only). */
export function escapeMarkdownCell(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
}

/**
 * Wraps a URL for Markdown link syntax. Bare parentheses in a URL truncate the
 * link, so angle-bracket form is used whenever they appear.
 */
export function markdownUrl(url) {
  if (!isSafeUrl(url)) return '';
  const str = String(url);
  return /[()\s]/.test(str) ? `<${str}>` : str;
}

// XML 1.0 forbids most C0 control characters outright; a single stray one makes
// the whole feed unparseable for every subscriber. LLM and crawled text can
// contain them, so they are stripped rather than escaped.
const ILLEGAL_XML_CHARS = /[\x00-\x08\x0B\x0C\x0E-\x1F\uFFFE\uFFFF]/g;

/** Encodes text for an XML text node or attribute. Never apply this twice. */
export function escapeXml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(ILLEGAL_XML_CHARS, '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Wraps pre-built markup in a CDATA section, neutralising any embedded
 * terminator so the payload cannot escape the section.
 */
export function cdata(str) {
  const body = String(str ?? '').replace(ILLEGAL_XML_CHARS, '').replace(/]]>/g, ']]&gt;');
  return `<![CDATA[${body}]]>`;
}
