import { config } from '../config.js';
import { logger } from '../logger.js';
import { extractJsonFromText } from './gemini-grounding.js';
import { extractTechnicalAnchors } from './verifier.js';

/**
 * Plans a diverse, high-yield set of search queries for a web platform feature,
 * combining:
 * 1. Reverse-link / inbound citation queries (ChromeStatus, Explainer, Spec, Standards issues)
 * 2. LLM-generated semantic queries (Gemini 3.7 Flash or OpenAI)
 * 3. Exact syntax and WebIDL method queries
 * 4. Developer community, tutorial, and adoption queries
 */
export async function planEcosystemQueries(feature, context = {}) {
  const plannedQueries = [];
  const seenQueryStrings = new Set();

  function addQuery(q, intent, description, options = {}) {
    const clean = q.trim();
    if (!clean || seenQueryStrings.has(clean.toLowerCase())) return;
    seenQueryStrings.add(clean.toLowerCase());
    plannedQueries.push({
      query: clean,
      intent,
      description,
      isReverseLink: !!options.isReverseLink,
      targetUrl: options.targetUrl || null,
    });
  }

  // =========================================================================
  // 1. REVERSE-LINK / INBOUND CITATION QUERIES
  // Find web sites, blogs, and discussions that explicitly link to or cite
  // authoritative feature artifacts.
  // =========================================================================

  // A. ChromeStatus Entry Reverse Link
  if (feature.id) {
    addQuery(
      `"chromestatus.com/feature/${feature.id}" -site:chromestatus.com`,
      'reverse-link-chromestatus',
      'Inbound citations linking to ChromeStatus entry',
      { isReverseLink: true, targetUrl: `https://chromestatus.com/feature/${feature.id}` }
    );
  }

  // B. Feature Explainer Reverse Link
  for (const explainerUrl of feature.explainerUrls || []) {
    try {
      const u = new URL(explainerUrl);
      const cleanTarget = `${u.hostname}${u.pathname}`.replace(/\/$/, '');
      addQuery(
        `"${cleanTarget}" -site:${u.hostname}`,
        'reverse-link-explainer',
        'Inbound citations linking to Explainer',
        { isReverseLink: true, targetUrl: explainerUrl }
      );
    } catch {}
  }

  // C. Specification URL Reverse Link
  if (feature.specUrl) {
    try {
      const u = new URL(feature.specUrl);
      // Strip fragment to match broad citations to the spec document/section
      const cleanPath = `${u.hostname}${u.pathname}`.replace(/\/$/, '');
      if (cleanPath.length > 15) {
        addQuery(
          `"${cleanPath}" -site:${u.hostname}`,
          'reverse-link-spec',
          'Inbound citations linking to Specification',
          { isReverseLink: true, targetUrl: feature.specUrl }
        );
      }
    } catch {}
  }

  // D. Standards Positions Issues Reverse Links (if available in context)
  for (const s of context.standards || []) {
    if (s.url && s.url.includes('github.com/')) {
      try {
        const u = new URL(s.url);
        const cleanIssue = `${u.hostname}${u.pathname}`.replace(/\/$/, '');
        addQuery(
          `"${cleanIssue}" -site:github.com`,
          'reverse-link-standards',
          `Inbound citations linking to ${s.vendor} Standards Position`,
          { isReverseLink: true, targetUrl: s.url }
        );
      } catch {}
    }
  }

  // =========================================================================
  // 2. LLM-GENERATED SEMANTIC SEARCH QUERIES (Gemini / OpenAI)
  // Gemini 3.7 Flash inspects API semantics, syntax, and developer intent to
  // generate creative queries targeting blogs, tutorials, and real-world usage.
  // =========================================================================
  const llmQueries = await generateQueriesWithLLM(feature);
  if (llmQueries && llmQueries.length > 0) {
    for (const item of llmQueries) {
      addQuery(item.query, item.intent || 'llm-semantic', item.description || 'LLM semantic discovery');
    }
  } else {
    // =======================================================================
    // 3. HEURISTIC FALLBACK QUERIES (when LLM is not configured)
    // =======================================================================
    const anchors = extractTechnicalAnchors(feature);

    // Exact name with web API context
    addQuery(`"${feature.name}" API`, 'core-api', 'Core feature API query');

    // Community blogs, tutorials, and deep-dives
    addQuery(
      `"${feature.name}" (blog OR tutorial OR guide OR "how to use")`,
      'tutorials-blogs',
      'Community tutorials and developer blogs'
    );

    // Real JavaScript method syntax / CSS properties
    const codeAnchors = anchors.filter(a => a.includes('.') || a.includes('-') || a.includes('('));
    if (codeAnchors.length > 0) {
      const syntaxSample = codeAnchors.slice(0, 2).map(a => `"${a}"`).join(' OR ');
      addQuery(`${syntaxSample} (javascript OR web OR css)`, 'api-syntax', 'Code syntax and WebIDL method usage');
    }

    // Developer adoption and release announcements
    addQuery(
      `"${feature.name}" (adoption OR shipping OR "developer preview" OR PWA)`,
      'ecosystem-adoption',
      'Ecosystem adoption and developer sentiment'
    );
  }

  logger.debug(`[Query Planner] Generated ${plannedQueries.length} search queries for "${feature.name}" (${plannedQueries.filter(q => q.isReverseLink).length} reverse-link citations)`);

  return plannedQueries;
}

/**
 * Calls Gemini (or OpenAI) to synthesize targeted, high-yield search queries
 */
async function generateQueriesWithLLM(feature) {
  if (!config.geminiApiKey && !config.openaiApiKey) {
    return null;
  }

  const prompt = `You are a search query strategist for web platform APIs and standards.
Analyze the following Web Platform feature and generate 4 to 5 diverse, high-yield search queries tailored for search engines like Brave Search to discover:
1. Community blog posts, tutorials, and practical developer guides
2. Real-world JavaScript / CSS code examples and WebIDL API usage
3. Ecosystem sentiment, announcements, and adoption

Target Feature:
- Name: "${feature.name}"
- Summary: "${feature.summary}"
- Motivation: "${feature.motivation || ''}"
- Spec: ${feature.specUrl || 'N/A'}
- Explainers: ${(feature.explainerUrls || []).join(', ') || 'N/A'}

Return a JSON array of query objects conforming to this schema:
[
  {
    "query": "exact search query string (use quotes and boolean operators like OR where helpful)",
    "intent": "tutorials-blogs" | "api-syntax" | "ecosystem-adoption" | "community-discussion",
    "description": "short description of what this query aims to find"
  }
]`;

  if (config.geminiApiKey) {
    try {
      const model = config.geminiModel || 'gemini-3.7-flash';
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${config.geminiApiKey}`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.2 },
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        const parsed = extractJsonFromText(text);
        if (Array.isArray(parsed) && parsed.length > 0) {
          logger.debug(`[Query Planner] Gemini generated ${parsed.length} tailored queries`);
          return parsed;
        }
      }
    } catch (err) {
      logger.debug(`[Query Planner] Gemini query generation failed: ${err.message}`);
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
            { role: 'system', content: 'You are a web search strategist. Return JSON array only.' },
            { role: 'user', content: prompt },
          ],
          temperature: 0.2,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const text = data.choices?.[0]?.message?.content;
        const parsed = extractJsonFromText(text);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (err) {
      logger.debug(`[Query Planner] OpenAI query generation failed: ${err.message}`);
    }
  }

  return null;
}
