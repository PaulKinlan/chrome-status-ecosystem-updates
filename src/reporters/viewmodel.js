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

  return {
    ...item,
    f, a, eco, delta, metrics, slug,
    blogs, docs, discussions,
    twitterDiscussions, hnDiscussions, topDiscussion,
    communityUrl, communityTileTitle, communityTileVal,
    deltaSummary, hasDelta, isContested,
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
