/**
 * Heuristic Ecosystem Analyzer
 * Evaluates ecosystem momentum, browser consensus, community engagement, and developer readiness
 * based strictly on verified ecosystem findings and inspected linked resources.
 */
export function analyzeEcosystemData(feature, ecosystemData) {
  const { metrics, discussions, standards, packages, articles, resources, verifiedPolyfill } = ecosystemData;

  // 1. Calculate Momentum Score based on verified signals
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

  // 2. Evaluate Browser Alignment & Consensus from standards positions and comments
  const ffSignal = (feature.browsers?.firefox?.view || 'No signal').toLowerCase();
  const safariSignal = (feature.browsers?.safari?.view || 'No signal').toLowerCase();

  const isFfPositive = ffSignal.includes('support') || ffSignal.includes('positive') || ffSignal.includes('worth');
  const isFfNegative = ffSignal.includes('oppose') || ffSignal.includes('negative') || ffSignal.includes('harmful');
  const isSafariPositive = safariSignal.includes('support') || safariSignal.includes('positive');
  const isSafariNegative = safariSignal.includes('oppose') || safariSignal.includes('negative');

  // Check standards position labels and comment highlights from GitHub issues
  const allLabels = standards.flatMap(s => s.labels || []).map(l => l.toLowerCase());
  const hasSecurityConcerns = allLabels.some(l => l.includes('security') || l.includes('privacy') || l.includes('fingerprint') || l.includes('concerns'));
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

  // 3. Developer Sentiment
  let sentiment = 'Neutral';
  if (isFfNegative || isSafariNegative || hasOpposeLabel) {
    sentiment = 'Mixed / Skeptical';
  } else if (momentumLevel === 'High' && !hasSecurityConcerns) {
    sentiment = 'Positive / High Interest';
  } else if (momentumLevel === 'Moderate') {
    sentiment = 'Cautiously Optimistic';
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

  // Verified discussions
  if (discussions.length > 0) {
    const topDiscussion = discussions[0];
    takeaways.push(`Verified community discussion on Hacker News: "${topDiscussion.title}" (${topDiscussion.points} points, ${topDiscussion.commentsCount} comments).`);
  }

  return {
    momentumScore: Math.round(momentumScore),
    momentumLevel,
    consensus,
    sentiment,
    hasSecurityConcerns,
    takeaways,
    verifiedPolyfill,
    executiveSummary: `${feature.name} is currently ${feature.category} in Chrome ${feature.milestone || ''}. Verified ecosystem momentum is ${momentumLevel} with ${consensus} standards alignment and ${sentiment.toLowerCase()} developer pulse.`,
  };
}
