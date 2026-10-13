/**
 * Heuristic Ecosystem Analyzer
 * Evaluates the ecosystem footprint (momentum is its growth, see src/momentum.js), browser consensus, community engagement,
 * and developer readiness based strictly on verified ecosystem findings and inspected linked resources.
 */
import { SENTIMENT } from './sentiment.js';
import { footprintLevel } from '../momentum.js';

/**
 * Reduces a vendor's stated position (the `view` text ChromeStatus records for
 * Firefox and Safari) to one of:
 *
 *   shipped    - Shipped/Shipping
 *   committed  - In development
 *   positive   - Positive, Support, Worth prototyping, Important
 *   neutral    - Neutral, Defer, Under consideration, Non-harmful,
 *                Closed Without a Position, and anything unrecognised
 *   negative   - Negative, Oppose(d), Harmful
 *   none       - No signal, N/A, or nothing recorded
 *
 * The vocabulary is closed but irregular (Mozilla and WebKit name the same
 * stances differently). Matching only `support|positive|worth` used to ignore
 * "Shipped/Shipping" and "In development" completely, so a feature that both
 * Firefox and Safari already ship was reported as "Chromium-Led": 124 of 513
 * historical feature rows were mislabelled that way.
 */
export function classifyStance(view) {
  const text = String(view ?? '').trim().toLowerCase();
  if (!text || /^(no (public )?signals?|n\/a|none)$/.test(text)) return 'none';
  if (/\b(shipped|shipping)\b/.test(text)) return 'shipped';
  if (/\bin development\b/.test(text)) return 'committed';
  // `(?<!non-)` keeps Mozilla's "non-harmful" from reading as "harmful".
  if (/oppos|negative|(?<!non-)harmful|\bnot support/.test(text)) return 'negative';
  if (/support|positive|worth|important/.test(text)) return 'positive';
  return 'neutral';
}

/** Stances that mean an engine is actively behind a feature. */
const ENGAGED_STANCES = new Set(['shipped', 'committed', 'positive']);

export function analyzeEcosystemData(feature, ecosystemData) {
  const { metrics, discussions, standards, packages, articles, resources, verifiedPolyfill } = ecosystemData;

  // 1. Calculate Momentum Score based on verified signals.
  // These keys MUST match the metrics rollup in search/index.js - a typo here
  // silently scores zero rather than throwing.
  let momentumScore = 0;
  momentumScore += (metrics.hnPoints || 0) * 1.5;
  momentumScore += (metrics.hnComments || 0) * 2;
  // Social reach is noisy and heavy-tailed, so it is damped and capped rather
  // than weighted linearly like the editorial signals below.
  momentumScore += Math.min(20, (metrics.twitterLikes || 0) * 0.5);
  momentumScore += Math.min(15, (metrics.twitterReplies || 0) * 1);
  momentumScore += (metrics.totalArticles || 0) * 10;
  momentumScore += (metrics.totalStandards || 0) * 15;
  momentumScore += (metrics.totalPackages || 0) * 10;
  if (metrics.hasPolyfill) momentumScore += 20;
  if (metrics.hasDemos) momentumScore += 15;

  // The size of the ecosystem, read in isolation. What the report calls momentum is the growth of this number, in
  // tiers relative to the other features, and can only be worked out across the whole run (src/momentum.js, which
  // replaces `momentumLevel` below); this level is the one the sentiment below reads and what a run too small to rank shows.
  const momentumLevel = footprintLevel(Math.round(momentumScore));

  // 2. Evaluate Browser Alignment & Consensus from standards positions and comments
  const ffStance = classifyStance(feature.browsers?.firefox?.view);
  const safariStance = classifyStance(feature.browsers?.safari?.view);

  const isFfEngaged = ENGAGED_STANCES.has(ffStance);
  const isSafariEngaged = ENGAGED_STANCES.has(safariStance);
  const isFfNegative = ffStance === 'negative';
  const isSafariNegative = safariStance === 'negative';

  // Check standards position labels and comment highlights from GitHub issues
  const allLabels = standards.flatMap(s => s.labels || []).map(l => l.toLowerCase());
  const hasSecurityConcerns = allLabels.some(l => l.includes('security') || l.includes('privacy') || l.includes('fingerprint') || l.includes('concerns'));
  const hasOpposeLabel = allLabels.some(l => l.includes('oppose') || l.includes('negative'));

  let consensus = 'Pending Signals';
  if (isFfEngaged && isSafariEngaged) {
    consensus = 'Multi-Engine Consensus';
  } else if (isFfNegative || isSafariNegative || hasOpposeLabel) {
    consensus = 'Contested / Concerns Raised';
  } else if (isFfEngaged || isSafariEngaged) {
    consensus = 'Partial Multi-Engine Interest';
  } else {
    consensus = 'Chromium-Led';
  }

  // 3. Developer Sentiment
  let sentiment = SENTIMENT.NEUTRAL;
  if (isFfNegative || isSafariNegative || hasOpposeLabel) {
    sentiment = SENTIMENT.MIXED;
  } else if (momentumLevel === 'High' && !hasSecurityConcerns) {
    sentiment = SENTIMENT.POSITIVE;
  } else if (momentumLevel === 'Moderate') {
    sentiment = SENTIMENT.CAUTIOUS;
  }

  // 4. Generate Key Insights & Recommendations informed by linked resources
  const takeaways = [];

  if (feature.statusType === 'enabled') {
    takeaways.push(`Shipping enabled by default in Chrome ${feature.milestone || ''}. Developers can begin adopting in production with progressive feature detection.`);
  } else if (feature.statusType === 'origin-trial') {
    takeaways.push(`In active Origin Trial in Chrome ${feature.milestone || ''}. Validate API ergonomics in staging/pilot environments before general availability.`);
  } else if (feature.statusType === 'deprecated') {
    takeaways.push(`Marked for deprecation in Chrome ${feature.milestone || ''}. Audit codebases and migrate to modern standard alternatives.`);
  }

  // Incorporate standards issue comments if inspected
  const standardsWithComments = standards.filter(s => s.commentSummary);
  if (standardsWithComments.length > 0) {
    for (const std of standardsWithComments.slice(0, 2)) {
      takeaways.push(`Standards Activity (${std.vendor}): ${std.commentSummary}`);
    }
  } else if (consensus === 'Chromium-Led') {
    takeaways.push('Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.');
  } else if (consensus === 'Contested / Concerns Raised') {
    takeaways.push('Non-Chromium browser vendors have raised architectural, security, or privacy considerations in standards position trackers.');
  } else if (consensus === 'Multi-Engine Consensus') {
    takeaways.push('Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.');
  }

  // Polyfill status from verified NPM packages
  if (verifiedPolyfill) {
    takeaways.push(`Community package available: [${verifiedPolyfill.name}](${verifiedPolyfill.url}) (v${verifiedPolyfill.version}) for progressive enhancement.`);
  } else {
    takeaways.push('No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.');
  }

  // Verified discussions (may come from Hacker News or Twitter/X)
  if (discussions.length > 0) {
    const topDiscussion = discussions[0];
    const source = topDiscussion.source || 'Community';
    takeaways.push(`Verified community discussion on ${source}: "${topDiscussion.title}" (${topDiscussion.points || 0} points, ${topDiscussion.commentsCount || 0} comments).`);
  }

  return {
    momentumScore: Math.round(momentumScore),
    momentumLevel,
    consensus,
    sentiment,
    hasSecurityConcerns,
    takeaways,
    verifiedPolyfill,
    // The footprint, not the tier: the tier is assigned later, across the run, and this text is written now.
    executiveSummary: `${feature.name} is currently ${feature.category} in Chrome ${feature.milestone || ''}. Verified ecosystem footprint is ${Math.round(momentumScore)} points with ${consensus} standards alignment and ${sentiment.toLowerCase()} developer pulse.`,
  };
}
