import { analyzeEcosystemData as analyzeHeuristic } from './heuristic.js';
import { synthesizeWithAI } from './ai.js';

/**
 * Analyzes a feature's ecosystem data combining heuristic metrics and optional AI synthesis
 */
export async function analyzeFeature(feature, ecosystemData) {
  const heuristic = analyzeHeuristic(feature, ecosystemData);

  // Attempt AI synthesis if keys are configured
  const aiResult = await synthesizeWithAI(feature, ecosystemData, heuristic).catch(() => null);

  if (aiResult) {
    return {
      ...heuristic,
      executiveSummary: aiResult.executiveSummary || heuristic.executiveSummary,
      sentiment: aiResult.sentiment || heuristic.sentiment,
      communityPulse: aiResult.communityPulse || null,
      browserAlignmentSummary: aiResult.browserAlignmentSummary || null,
      developerActionableAdvice: aiResult.developerActionableAdvice || null,
      isAiEnhanced: true,
    };
  }

  return {
    ...heuristic,
    isAiEnhanced: false,
  };
}
