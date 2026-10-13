import { analyzeEcosystemData as analyzeHeuristic } from './heuristic.js';
import { synthesizeWithAI } from './ai.js';
import { adoptGroundedSources } from './grounded.js';
import { LLM_FAILURE, recordLlmFailure } from '../llm-stats.js';
import { logger } from '../logger.js';

/**
 * Analyzes a feature's ecosystem data combining heuristic metrics and optional AI synthesis
 * with native Google Search Grounding.
 *
 * Order matters. The synthesis runs first because the sources it finds are
 * evidence: they are read, verified and added to `ecosystemData` (which this
 * function therefore updates in place) BEFORE the heuristic engine scores the
 * feature, so the momentum score counts them.
 */
export async function analyzeFeature(feature, ecosystemData) {
  // Attempt AI synthesis with Gemini search grounding if keys are configured.
  // Failures of the models themselves are counted where they happen; an
  // exception that gets this far is a bug, and a feature quietly losing its AI
  // synthesis is exactly what the run's statistics are there to show.
  const aiResult = await synthesizeWithAI(feature, ecosystemData).catch(err => {
    recordLlmFailure('analysis/synthesis', LLM_FAILURE.INTERNAL, `"${feature?.name}": ${err.message}`);
    return null;
  });

  // Incorporate the sources Gemini found through Google Search: the ones that
  // are about the feature join its articles, the rest are dropped.
  let groundedSources = [];
  if (aiResult?.groundedSources?.length > 0) {
    groundedSources = await adoptGroundedSources(feature, ecosystemData, aiResult.groundedSources).catch(err => {
      logger.warn(`[Grounded Sources] Could not add the sources Gemini found for "${feature?.name}": ${err.message}`);
      return [];
    });
  }

  const heuristic = analyzeHeuristic(feature, ecosystemData);

  if (aiResult) {
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
      groundedSources,
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
