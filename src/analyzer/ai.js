import { config } from '../config.js';
import { callGeminiWithSearchGrounding, extractJsonFromText } from '../search/gemini-grounding.js';

/**
 * AI-assisted ecosystem synthesis using Google Gemini with native Google Search Grounding,
 * or OpenAI as fallback.
 */
export async function synthesizeWithAI(feature, ecosystemData, heuristicAnalysis) {
  if (!config.geminiApiKey && !config.openaiApiKey) {
    return null;
  }

  // Format standards comments
  const standardsSummary = (ecosystemData.standards || []).map(s => {
    let text = `${s.vendor}: "${s.title}" [State: ${s.state}, Labels: ${(s.labels || []).join(', ')}]`;
    if (s.commentSummary) {
      text += ` (${s.commentSummary})`;
    }
    return text;
  }).join('\n- ');

  // Format explainer snippets
  const explainers = (ecosystemData.resources || [])
    .filter(r => r.type === 'explainer' && r.snippet)
    .map(r => `"${r.title}": ${r.snippet}`)
    .join('\n- ');

  const prompt = `You are a Senior Web Standards and Developer Relations analyst.
Analyze the following Web Platform feature and search Google for live ecosystem updates, developer discussions, and browser consensus.

Target Web Platform Feature:
- Feature Name: ${feature.name}
- Milestone / Status: Chrome ${feature.milestone || ''} (${feature.category})
- Summary: ${feature.summary}
- Motivation: ${feature.motivation || 'N/A'}
- Spec Link: ${feature.specUrl || 'N/A'}

Inspected Standards Discussions:
- ${standardsSummary || 'No formal standards issues found'}

Explainer & Documentation Excerpts:
- ${explainers || 'No explainer text excerpted'}

Known Verified Discussions:
- ${ecosystemData.discussions.map(d => `"${d.title}" (${d.points} pts, ${d.commentsCount} comments)`).join('\n- ') || 'None found yet'}

Known Polyfills:
- ${ecosystemData.packages.map(p => `${p.name} (v${p.version}) - ${p.description}`).join('\n- ') || 'None found yet'}

Instructions:
1. Search Google using search grounding to discover recent developer reactions, tutorials, browser vendor news, or adoption issues.
2. Ground your analysis on real-time web content and cite the sources.
3. Return your final analysis formatted strictly as a JSON block enclosed in \`\`\`json ... \`\`\` with exactly these keys:
\`\`\`json
{
  "executiveSummary": "2-3 crisp sentences on where this API stands in the ecosystem, developer perception, and current engine consensus",
  "communityPulse": "1-2 sentences summarizing developer sentiment and discussions",
  "browserAlignmentSummary": "1-2 sentences summarizing Safari/WebKit and Firefox/Gecko engineers' comments and current posture",
  "developerActionableAdvice": "1-2 sentences on what web development teams should do today regarding this feature (progressive enhancement, wait, test in flags, etc.)",
  "sentiment": "Positive" | "Cautiously Optimistic" | "Mixed / Skeptical" | "Opposed" | "Neutral"
}
\`\`\``;

  // 1. Google Gemini with Native Search Grounding
  if (config.geminiApiKey) {
    try {
      const groundingResult = await callGeminiWithSearchGrounding(prompt, { temperature: 0.1 });
      if (groundingResult && groundingResult.parsedJson) {
        return {
          ...groundingResult.parsedJson,
          groundedQueries: groundingResult.webSearchQueries || [],
          groundedSources: groundingResult.groundedArticles || [],
          groundingModel: groundingResult.model,
          isGroundedWithGoogleSearch: (groundingResult.groundingChunks || []).length > 0,
        };
      }
    } catch {
      // Fall through to OpenAI if Gemini fails
    }
  }

  // 2. OpenAI fallback (if configured)
  if (config.openaiApiKey) {
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${config.openaiApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: 'You are a web standards analyst. Respond with JSON.' },
            { role: 'user', content: prompt },
          ],
          response_format: { type: 'json_object' },
          temperature: 0.2,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const text = data.choices?.[0]?.message?.content;
        const parsed = extractJsonFromText(text);
        if (parsed) {
          return {
            ...parsed,
            groundedQueries: [],
            groundedSources: [],
            isGroundedWithGoogleSearch: false,
          };
        }
      }
    } catch {
      // Return null on failure
    }
  }

  return null;
}
