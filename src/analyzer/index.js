import { analyzeEcosystemData as analyzeHeuristic } from './heuristic.js';
import { synthesizeWithAI } from './ai.js';

/**
 * Analyzes a feature's ecosystem data combining heuristic metrics and optional AI synthesis
 * with native Google Search Grounding.
 */
export async function analyzeFeature(feature, ecosystemData) {
  const heuristic = analyzeHeuristic(feature, ecosystemData);

  // Attempt AI synthesis with Gemini search grounding if keys are configured
  const aiResult = await synthesizeWithAI(feature, ecosystemData, heuristic).catch(() => null);

  if (aiResult) {
    // Incorporate grounded articles discovered by Google Search via Gemini
    if (aiResult.groundedSources && aiResult.groundedSources.length > 0) {
      const existingUrls = new Set(ecosystemData.articles.map(a => a.url));
      for (const src of aiResult.groundedSources) {
        if (!existingUrls.has(src.url)) {
          existingUrls.add(src.url);
          ecosystemData.articles.push(src);
          ecosystemData.metrics.totalArticles++;
        }
      }
    }

    const takeaways = [...heuristic.takeaways];
    if (aiResult.developerActionableAdvice) {
      takeaways.unshift(`Actionable Advice: ${aiResult.developerActionableAdvice}`);
    }

    return {
      ...heuristic,
      takeaways,
      executiveSummary: aiResult.executiveSummary || heuristic.executiveSummary,
      sentiment: aiResult.sentiment || heuristic.sentiment,
      communityPulse: aiResult.communityPulse || null,
      browserAlignmentSummary: aiResult.browserAlignmentSummary || null,
      developerActionableAdvice: aiResult.developerActionableAdvice || null,
      isAiEnhanced: true,
      isGroundedWithGoogleSearch: aiResult.isGroundedWithGoogleSearch || false,
      groundedQueries: aiResult.groundedQueries || [],
      groundedSources: aiResult.groundedSources || [],
    };
  }

  return {
    ...heuristic,
    isAiEnhanced: false,
    isGroundedWithGoogleSearch: false,
    groundedQueries: [],
    groundedSources: [],
  };
}
