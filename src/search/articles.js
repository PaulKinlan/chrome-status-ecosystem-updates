import { canonicalUrl } from './urls.js';

/**
 * Helpers for the article records the search layer produces, shared by the step
 * that gathers them (src/search/index.js) and the step that adds the sources
 * Gemini cited during synthesis (src/analyzer/grounded.js), so that both treat an
 * article the same way.
 */

/** Hosts whose pages count as reference documentation rather than blog posts. */
const REFERENCE_DOMAINS = ['w3.org', 'mozilla.org', 'whatwg.org', 'github.com'];

/**
 * Splits articles into ecosystem blogs and tutorials, and reference
 * documentation (specs, MDN, repositories): anything a search flagged as a blog
 * is one, and so is any page that is not on a reference host.
 *
 * @param {Array<{isBlog?: boolean, domain?: string}>} articles
 * @returns {{blogs: object[], docs: object[]}} every article is in exactly one
 */
export function partitionArticles(articles) {
  const blogs = articles.filter(article =>
    article.isBlog ||
    (article.domain && !REFERENCE_DOMAINS.some(domain => article.domain.includes(domain)))
  );
  const isBlog = new Set(blogs);
  return { blogs, docs: articles.filter(article => !isBlog.has(article)) };
}

/**
 * Does `title` only name a site (`web.dev`, `www.w3.org`)? That is all Gemini's
 * grounding gives for a source.
 *
 * Lower case, ending in a name rather than a number: a hostname is written that
 * way, and a title that is not (`Node.js`, `v2.0`) is a title.
 */
export function isHostnameTitle(title) {
  return typeof title === 'string' &&
    /^[a-z0-9][a-z0-9-]*(?:\.[a-z0-9-]+)*\.(?:[a-z]{2,}|xn--[a-z0-9-]+)$/.test(title.trim());
}

/**
 * Titles that say what stood between the crawler and the page, not what the
 * page is: a bot check, an error page, a login wall. Matched against the whole
 * title only; real articles have titles like "Sign in form best practices".
 */
const PLACEHOLDER_TITLE = new RegExp(
  '^(?:' +
    '(?:just a moment|one moment|please wait|checking your browser|redirecting|loading)(?:\\W+cloudflare)?\\W*' +
    '|attention required!?(?: \\| cloudflare)?' +
    '|access denied|forbidden|not found|page not found|error|sign in|log in|login' +
    '|(?:403|404|500|503)(?: (?:forbidden|not found|error|service unavailable|internal server error))?' +
  ')$',
  'i'
);

/**
 * Adds what the page says about itself to an article that came without it.
 *
 * The excerpt is only set when there is none. The title is only replaced when it
 * is a bare site name and the page's title says something more (and is not a
 * bot-check or error page's), so a title that says something is never
 * overwritten.
 *
 * @param {object} article modified in place
 * @param {{excerpt?: string, title?: string|null}|null} page what `fetchArticlePage` returned
 */
export function applyPageDetails(article, page) {
  if (!page) return;
  if (page.excerpt && !article.contentExcerpt) article.contentExcerpt = page.excerpt;
  if (page.title && isHostnameTitle(article.title) && !PLACEHOLDER_TITLE.test(page.title)) {
    article.title = page.title;
  }
}

/** A `Set` of the `canonicalUrl` of every address given; empty and missing ones are left out. */
export function canonicalUrlSet(urls) {
  return new Set([...urls].map(canonicalUrl).filter(Boolean));
}
