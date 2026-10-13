/**
 * Derives the presentation-ready shape of a single investigated feature.
 *
 * Every reporter previously recomputed these fallbacks inline, which is how the
 * HTML and Markdown outputs drifted apart (different blog/doc splits, different
 * community tiles). Deriving them once here keeps the formats consistent and
 * gives the escaping layer a single, well-known set of fields to encode.
 */
export function toFeatureView(item) {
  const f = item.feature || {};
  const a = item.analysis || {};
  const eco = item.ecosystem || {};
  const delta = item.delta;
  const metrics = eco.metrics || {};

  // Reports link to their own sections by slug. Falling back to the numeric id
  // keeps those anchors working for features that predate slug normalisation,
  // rather than emitting `](#undefined)`.
  const slug = f.slug || (f.id !== undefined && f.id !== null ? `feature-${f.id}` : 'feature');


  // Blogs and docs are only split apart when the search layer did not already
  // do it, so a reporter never has to guess which shape it was handed.
  const articles = eco.articles || [];
  const blogs = eco.blogs || articles.filter(art =>
    art.isBlog || (art.domain && !art.domain.includes('mozilla.org') && !art.domain.includes('w3.org'))
  );
  const docs = eco.docs || articles.filter(art => !blogs.includes(art));

  const discussions = eco.discussions || [];
  const twitterDiscussions = discussions.filter(d => /twitter|x\.com/i.test(d.source || ''));
  const hnDiscussions = discussions.filter(d => (d.source || '').includes('Hacker News'));
  const topDiscussion = discussions.length > 0 ? discussions[0] : null;

  // When nothing was found we still link somewhere useful rather than rendering
  // a dead tile, so the reader can run the search themselves.
  const communityUrl = topDiscussion
    ? (topDiscussion.discussionUrl || topDiscussion.url)
    : `https://hn.algolia.com/?q=${encodeURIComponent(f.name || '')}`;

  const hasBoth = twitterDiscussions.length > 0 && hnDiscussions.length > 0;
  const communityTileTitle = hasBoth
    ? 'Community Pulse'
    : twitterDiscussions.length > 0 ? 'X / Twitter' : 'HN Buzz';
  const communityTileVal = hasBoth
    ? `${metrics.hnPoints || 0} pts (HN) · ${metrics.twitterLikes || 0} likes (X)`
    : twitterDiscussions.length > 0
      ? `${metrics.twitterLikes || 0} likes (${metrics.twitterReplies || 0} replies)`
      : `${metrics.hnPoints || 0} pts (${metrics.hnComments || 0} msgs)`;

  let deltaSummary = '—';
  if (delta) {
    if (delta.isNewFeature) deltaSummary = '✨ New';
    else if (delta.statusChanged) deltaSummary = `🔄 ${f.category || ''}`;
    else if (delta.newArticlesCount > 0 || delta.newDiscussionsCount > 0) {
      deltaSummary = `⚡ +${delta.newArticlesCount || 0} art / +${delta.newDiscussionsCount || 0} msgs`;
    }
  }

  const hasDelta = !!(delta && (
    delta.isNewFeature || delta.statusChanged || delta.momentumChanged ||
    delta.newArticlesCount > 0 || delta.newDiscussionsCount > 0
  ));

  const isContested = (a.consensus || '').includes('Contested') || (a.consensus || '').includes('Concerns');

  // ChromeStatus's per-browser `status` field is a legacy value that is rarely
  // maintained: in a typical report 92% of features still say "Proposed",
  // including ones that already shipped. The category a feature is listed under
  // for its milestone is far better maintained, so prefer it.
  //
  // Which listing, though: a feature can appear under several milestones in the
  // window (say "In origin trial" in 151 and "Enabled by default" in 153). The
  // runner keeps the MOST ADVANCED one (see `chooseListings`), and `category`
  // and `milestone` are a consistent pair taken from it. `firstListedMilestone`
  // says where the feature first appeared, so the earlier stage is not hidden.
  const chromiumStage = f.category || f.browsers?.chrome?.status || 'Active';

  // A missing value must not read as milestone 0 (`Number(null)` and `Number('')`
  // are 0); NaN compares false, so a note needs two real milestones.
  const asMilestone = value => (value === null || value === '' ? NaN : Number(value));
  const firstListed = asMilestone(f.firstListedMilestone);
  const milestoneNote = firstListed < asMilestone(f.milestone)
    ? `first listed in Chrome ${firstListed}`
    : '';

  return {
    ...item,
    f, a, eco, delta, metrics, slug,
    blogs, docs, discussions,
    twitterDiscussions, hnDiscussions, topDiscussion,
    communityUrl, communityTileTitle, communityTileVal,
    deltaSummary, hasDelta, isContested, chromiumStage, milestoneNote,
    webGroup: describeWebGroup(eco),
    // Shared truncation limits so HTML and Markdown show the same evidence.
    sliceLimits: {
      discussions: 8,
      blogs: 6,
      reverseLinks: 5,
      docs: 5,
      newActivityFeatures: 10,
      newFeatures: 10,
    },
  };
}

/**
 * The web-features group that Baseline, the test pass rates, the vendor positions
 * and the usage figure of a feature describe, or null when it has none.
 *
 * All of that data belongs to the GROUP (one group often spans several
 * ChromeStatus features), so every reporter says so next to it. `sharedWith` is
 * how many other ChromeStatus features the group has, known when the group came
 * from the web-features mapping.
 */
export function describeWebGroup(eco) {
  const id = eco.webFeature?.id || eco.baseline?.featureId || eco.wpt?.webFeatureId || null;
  if (!id) return null;
  const size = eco.webFeature?.groupSize;
  return {
    id,
    url: `https://webstatus.dev/features/${encodeURIComponent(id)}`,
    sharedWith: Number.isInteger(size) && size > 0 ? size - 1 : 0,
  };
}
