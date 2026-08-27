/**
 * Heuristic Ecosystem Analyzer
 * Evaluates ecosystem momentum, browser consensus, community engagement, and developer readiness.
 */
export function analyzeEcosystemData(feature, ecosystemData) {
  const { metrics, discussions, standards, packages, articles, resources } = ecosystemData;

  // 1. Calculate Momentum Score & Level
  let momentumScore = 0;
  momentumScore += (metrics.hnPoints || 0) * 1.5;
  momentumScore += (metrics.hnComments || 0) * 2;
  momentumScore += (metrics.totalArticles || 0) * 10;
  momentumScore += (metrics.totalStandardsPositions || 0) * 15;
  momentumScore += (metrics.totalPackages || 0) * 10;
  if (metrics.hasPolyfill) momentumScore += 20;
  if (metrics.hasDemos) momentumScore += 15;

  let momentumLevel = 'Quiet';
  if (momentumScore >= 80) {
    momentumLevel = 'High';
  } else if (momentumScore >= 35) {
    momentumLevel = 'Moderate';
  } else if (momentumScore >= 10) {
    momentumLevel = 'Emerging';
  }

  // 2. Evaluate Browser Alignment & Consensus
  const ffSignal = (feature.browsers?.firefox?.view || 'No signal').toLowerCase();
  const safariSignal = (feature.browsers?.safari?.view || 'No signal').toLowerCase();

  const isFfPositive = ffSignal.includes('support') || ffSignal.includes('positive') || ffSignal.includes('worth');
  const isFfNegative = ffSignal.includes('oppose') || ffSignal.includes('negative') || ffSignal.includes('harmful');
  const isSafariPositive = safariSignal.includes('support') || safariSignal.includes('positive');
  const isSafariNegative = safariSignal.includes('oppose') || safariSignal.includes('negative');

  // Check standards position labels from GitHub issues
  const allLabels = standards.flatMap(s => s.labels || []).map(l => l.toLowerCase());
  const hasSecurityConcerns = allLabels.some(l => l.includes('security') || l.includes('privacy') || l.includes('fingerprint'));
  const hasOpposeLabel = allLabels.some(l => l.includes('oppose') || l.includes('negative'));

  let consensus = 'Pending Signals';
  if (isFfPositive && isSafariPositive) {
    consensus = 'Multi-Engine Consensus';
  } else if (isFfNegative || isSafariNegative || hasOpposeLabel) {
    consensus = 'Contested / Concerns Raised';
  } else if (isFfPositive || isSafariPositive) {
    consensus = 'Partial Multi-Engine Interest';
  } else {
    consensus = 'Chromium-Led';
  }

  // 3. Developer Readiness & Sentiment
  let sentiment = 'Neutral';
  if (isFfNegative || isSafariNegative || hasOpposeLabel) {
    sentiment = 'Mixed / Skeptical';
  } else if (momentumLevel === 'High' && !hasSecurityConcerns) {
    sentiment = 'Positive / High Interest';
  } else if (momentumLevel === 'Moderate') {
    sentiment = 'Cautiously Optimistic';
  }

  // 4. Generate Key Insights & Recommendations
  const takeaways = [];

  if (feature.statusType === 'enabled') {
    takeaways.push(`Shipping enabled by default in Chrome ${feature.milestone || ''}. Developers can begin adopting in production with appropriate feature detection.`);
  } else if (feature.statusType === 'origin-trial') {
    takeaways.push(`In active Origin Trial. Teams are testing API ergonomics and providing feedback before wide general availability.`);
  } else if (feature.statusType === 'deprecated') {
    takeaways.push(`Marked for deprecation in Chrome ${feature.milestone || ''}. Audit codebases and migrate to modern alternatives.`);
  }

  if (consensus === 'Chromium-Led') {
    takeaways.push('Firefox and Safari have not yet finalized positions. Use defensive feature detection (guarding with `if ("..." in window)`).');
  } else if (consensus === 'Contested / Concerns Raised') {
    takeaways.push('Non-Chromium browser vendors have raised architectural, security, or privacy considerations in standards position trackers.');
  } else if (consensus === 'Multi-Engine Consensus') {
    takeaways.push('Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.');
  }

  if (metrics.hasPolyfill) {
    takeaways.push('Community polyfill / package is available on npm for cross-browser progressive enhancement.');
  } else {
    takeaways.push('No direct polyfill detected yet; progressive enhancement fallback required for non-supporting browsers.');
  }

  if (discussions.length > 0) {
    const topDiscussion = discussions[0];
    takeaways.push(`Active developer discussion on Hacker News: "${topDiscussion.title}" (${topDiscussion.points} points, ${topDiscussion.commentsCount} comments).`);
  }

  return {
    momentumScore: Math.round(momentumScore),
    momentumLevel,
    consensus,
    sentiment,
    hasSecurityConcerns,
    takeaways,
    executiveSummary: `${feature.name} is currently ${feature.category} in Chrome ${feature.milestone || ''}. Ecosystem momentum is ${momentumLevel} with ${consensus} standards alignment and ${sentiment.toLowerCase()} developer pulse.`,
  };
}
