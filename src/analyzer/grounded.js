import { logger } from '../logger.js';
import { canonicalUrl, isWebUrl } from '../search/urls.js';
import { parseTweetUrl } from '../search/web.js';
import { fetchArticlePage } from '../search/content-fetcher.js';
import { filterRelevantItems } from '../search/verifier.js';
import { partitionArticles, applyPageDetails, canonicalUrlSet } from '../search/articles.js';
import { recordGroundedAdoption } from '../grounding-stats.js';

/**
 * Sources Gemini found for itself while writing the synthesis.
 *
 * They used to be appended to the feature's articles as they came: unread and
 * unchecked, after the momentum score had been worked out (so they never counted
 * in it), and even a link the feature already carries as a resource could turn
 * up again as an article. Now they take the road every other article takes:
 * dropped if the feature already lists them, read, run through the relevance
 * check, and only then added and counted.
 *
 * The page is the evidence. What Gemini says about a source is its own account of
 * the answer it wrote about the feature, so it names the feature whatever the page
 * holds; a page that could not be read is therefore not added, however sure the
 * answer sounds. (A page the web search turned down is not on record, so it is
 * checked again like any other, and the second check can come out differently.)
 */

/** A synthesis rarely cites more than this; the cap bounds the pages read and the size of the check. */
const ADOPT_LIMIT = 8;

/**
 * Every address the feature already carries in some form, as comparison keys: its spec, explainers,
 * documentation and samples, its ChromeStatus pages and bug, and the resources, standards positions, bugs,
 * discussions (and the pages they are about) and packages found for it. A cited source on one of them is
 * not an article about the feature but the feature's own material or something already filed elsewhere.
 */
function ownLinks(feature, ecosystemData) {
  const found = [ecosystemData.resources, ecosystemData.standards, ecosystemData.bugs, ecosystemData.discussions, ecosystemData.packages]
    .flatMap(list => (Array.isArray(list) ? list : []))
    .flatMap(item => [item?.url, item?.discussionUrl]);

  return canonicalUrlSet([
    feature.specUrl,
    ...(feature.explainerUrls || []),
    ...(feature.docUrls || []),
    ...(feature.sampleUrls || []),
    feature.chromeStatusUrl,
    feature.chromeStatusLiteUrl,
    feature.bugUrl,
    ...found,
  ]);
}

/**
 * Adds the cited sources that are about the feature to its evidence.
 *
 * `ecosystemData` is updated in place, as the pipeline expects of every step
 * that adds to it: the new articles join `articles`, `blogs` and `docs` are split
 * again, the `metrics` totals that the momentum score reads are recounted, and
 * the audit trail gains an entry (additive). Call it BEFORE the momentum score is
 * computed.
 *
 * A cited source is skipped without being checked when it is a link the feature
 * already carries (its spec, explainers, docs and samples, its ChromeStatus pages
 * and bug, and the standards positions, bugs, discussions and packages already
 * found for it) or a tweet (a discussion, not an article), and counts as already
 * listed when the same page is among the feature's verified articles. At most
 * `ADOPT_LIMIT` of the rest are read and verified, and only those whose page could
 * be read are eligible.
 *
 * @param {object} feature
 * @param {object} ecosystemData
 * @param {object[]} sources `groundedArticles` of a grounded answer (real
 *   addresses; see src/search/gemini-grounding.js)
 * @returns {Promise<object[]>} the cited sources that are verified, in citation
 *   order: the ones already listed (the existing article records) and the ones
 *   added now
 */
export async function adoptGroundedSources(feature, ecosystemData, sources) {
  if (!Array.isArray(sources) || sources.length === 0) return [];

  if (!Array.isArray(ecosystemData.articles)) ecosystemData.articles = [];
  const { articles } = ecosystemData;

  const listed = new Map(articles.map(article => [canonicalUrl(article.url), article]));
  const featureLinks = ownLinks(feature, ecosystemData);

  // In citation order: either an article the feature already has (verified) or a source still to be checked.
  const cited = [];
  const candidates = [];
  const seen = new Set();
  let alreadyListed = 0;
  let skipped = 0;

  for (const source of sources) {
    // Only web pages are articles; anything else (a record that lost its address, a `javascript:` string) is not looked at.
    if (!isWebUrl(source?.url)) continue;
    const key = canonicalUrl(source.url);
    if (seen.has(key)) continue;
    seen.add(key);

    const existing = listed.get(key);
    if (existing) {
      cited.push({ article: existing, verified: true });
      alreadyListed++;
    } else if (featureLinks.has(key) || parseTweetUrl(source.url) || candidates.length >= ADOPT_LIMIT) {
      skipped++;
    } else {
      cited.push({ article: source, verified: false });
      candidates.push(source);
    }
  }

  // The page itself is what tells the check whether the source is about the feature. Without it only Gemini's own
  // wording is left, and that is not evidence: such a source is not checked and not added.
  await Promise.all(candidates.map(async source => applyPageDetails(source, await fetchArticlePage(source.url))));
  const readable = candidates.filter(source => source.contentExcerpt);
  const accepted = new Set(await filterRelevantItems(feature, readable));

  if (accepted.size > 0) {
    articles.push(...accepted);
    const { blogs, docs } = partitionArticles(articles);
    ecosystemData.blogs = blogs;
    ecosystemData.docs = docs;
    if (ecosystemData.metrics) {
      ecosystemData.metrics.totalArticles = articles.length;
      ecosystemData.metrics.totalBlogs = blogs.length;
      ecosystemData.metrics.totalDocs = docs.length;
    }
  }

  const considered = alreadyListed + candidates.length;
  const unread = candidates.length - readable.length;
  const rejected = readable.length - accepted.size;
  recordGroundedAdoption({ considered, alreadyListed, added: accepted.size, rejected, unread, skipped });

  if (considered > 0) {
    const { searchesExecuted, contentInspected } = ecosystemData.auditTrail || {};
    if (Array.isArray(searchesExecuted)) {
      searchesExecuted.push({
        type: 'gemini_synthesis_sources',
        provider: 'Sources cited by the AI synthesis',
        rawFound: considered,
        verified: alreadyListed + accepted.size,
      });
    }
    if (contentInspected) {
      contentInspected.webArticleExcerptsRead = (contentInspected.webArticleExcerptsRead || 0) + readable.length;
    }
    logger.debug(
      `[Grounded Sources] "${feature?.name}": ${considered} considered, ${alreadyListed} already listed, ${accepted.size} added, ` +
      `${rejected} rejected, ${unread} unread, ${skipped} skipped`
    );
  }

  return cited.filter(entry => entry.verified || accepted.has(entry.article)).map(entry => entry.article);
}
