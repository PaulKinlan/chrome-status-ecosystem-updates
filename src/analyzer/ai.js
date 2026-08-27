import { config } from '../config.js';

/**
 * AI-assisted ecosystem synthesis using Google Gemini or OpenAI
 */
export async function synthesizeWithAI(feature, ecosystemData, heuristicAnalysis) {
  if (!config.geminiApiKey && !config.openaiApiKey) {
    return null;
  }

  const prompt = `You are a Senior Web Standards and Developer Relations analyst.
Analyze the following Web Platform feature and recent ecosystem findings, then provide a concise synthesis.

Feature Name: ${feature.name}
Milestone / Status: Chrome ${feature.milestone || ''} (${feature.category})
Summary: ${feature.summary}
Motivation: ${feature.motivation || 'N/A'}
Spec Link: ${feature.specUrl || 'N/A'}
Firefox Signal: ${feature.browsers?.firefox?.view || 'Unknown'}
Safari Signal: ${feature.browsers?.safari?.view || 'Unknown'}

Ecosystem Findings:
- Community Discussions: ${ecosystemData.discussions.map(d => `"${d.title}" (${d.points} pts, ${d.commentsCount} comments)`).join('; ') || 'None found'}
- Standards Positions: ${ecosystemData.standards.map(s => `${s.vendor}: ${s.title} [State: ${s.state}, Labels: ${(s.labels || []).join(', ')}]`).join('; ') || 'None found'}
- NPM Packages: ${ecosystemData.packages.map(p => `${p.name} (v${p.version})`).join(', ') || 'None found'}
- Web Articles/Docs: ${ecosystemData.articles.map(a => `"${a.title}" on ${a.domain || a.source}`).join('; ') || 'None found'}

Return valid JSON with exactly these keys:
{
  "executiveSummary": "2-3 crisp sentences on where this API stands in the ecosystem and developer perception",
  "communityPulse": "1-2 sentences summarizing developer sentiment and main discussions or controversies",
  "browserAlignmentSummary": "1-2 sentences summarizing Safari/Firefox/W3C alignment",
  "developerActionableAdvice": "1-2 sentences on what developers or web teams should do today regarding this feature",
  "sentiment": "Positive" | "Cautious" | "Mixed" | "Opposed" | "Neutral"
}`;

  if (config.geminiApiKey) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${config.geminiApiKey}`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            responseMimeType: 'application/json',
            temperature: 0.2,
          },
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          return JSON.parse(text);
        }
      }
    } catch {
      // Fall through to OpenAI or heuristic
    }
  }

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
            { role: 'system', content: 'You are a web platform ecosystem analyst. Respond with JSON.' },
            { role: 'user', content: prompt },
          ],
          response_format: { type: 'json_object' },
          temperature: 0.2,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const text = data.choices?.[0]?.message?.content;
        if (text) {
          return JSON.parse(text);
        }
      }
    } catch {
      // Return null on failure
    }
  }

  return null;
}
