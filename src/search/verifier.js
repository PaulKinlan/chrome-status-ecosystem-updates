import { config } from '../config.js';
import { logger } from '../logger.js';
import { extractJsonFromText } from './gemini-grounding.js';

// Standard English stop words to filter out when extracting salient domain keywords
const STOP_WORDS = new Set([
  'a', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', 'and',
  'any', 'are', 'arent', 'as', 'at', 'be', 'because', 'been', 'before', 'being',
  'below', 'between', 'both', 'but', 'by', 'cant', 'cannot', 'could', 'couldnt',
  'did', 'didnt', 'do', 'does', 'doesnt', 'doing', 'dont', 'down', 'during',
  'each', 'few', 'for', 'from', 'further', 'had', 'hadnt', 'has', 'hasnt',
  'have', 'havent', 'having', 'he', 'hed', 'hell', 'hes', 'her', 'here',
  'heres', 'hers', 'herself', 'him', 'himself', 'his', 'how', 'hows', 'i',
  'id', 'ill', 'im', 'ive', 'if', 'in', 'into', 'is', 'isnt', 'it', 'its',
  'itself', 'lets', 'me', 'more', 'most', 'mustnt', 'my', 'myself', 'no',
  'nor', 'not', 'of', 'off', 'on', 'once', 'only', 'or', 'other', 'ought',
  'our', 'ours', 'ourselves', 'out', 'over', 'own', 'same', 'shant', 'she',
  'shed', 'shell', 'shes', 'should', 'shouldnt', 'so', 'some', 'such', 'than',
  'that', 'thats', 'the', 'their', 'theirs', 'them', 'themselves', 'then',
  'there', 'theres', 'these', 'they', 'theyd', 'theyll', 'theyre', 'theyve',
  'this', 'those', 'through', 'to', 'too', 'under', 'until', 'up', 'very',
  'was', 'wasnt', 'we', 'wed', 'well', 'were', 'werent', 'what', 'whats',
  'when', 'whens', 'where', 'wheres', 'which', 'while', 'who', 'whos', 'whom',
  'why', 'whys', 'with', 'wont', 'would', 'wouldnt', 'you', 'youd', 'youll',
  'youre', 'youve', 'your', 'yours', 'yourself', 'yourselves', 'chrome',
  'feature', 'support', 'supports', 'allows', 'enables', 'added', 'using',
  'api', 'apis', 'web', 'open', 'source', 'library', 'libraries', 'tool', 'tools',
  'com', 'org', 'net', 'io', 'dev', 'edu', 'gov', 'html', 'htm', 'http', 'https', 'www', 'github', 'spec', 'drafts', 'w3c',
]);

/**
 * Dynamically extracts technical anchor terms from feature metadata (spec URL, summary, name)
 * using NLP tokenization and WebIDL/CSS pattern recognition.
 * Fully general across all web standards — no hardcoded feature logic!
 */
export function extractTechnicalAnchors(feature) {
  const anchors = new Set();
  const rawText = `${feature.name || ''} ${feature.summary || ''} ${feature.motivation || ''}`;

  // 1. Extract code tokens in backticks or <code> tags (e.g. `navigator.install()`, `@counter-style`)
  const codeMatches = rawText.match(/`([^`]+)`|<code>([^<]+)<\/code>/g) || [];
  for (const m of codeMatches) {
    const clean = m.replace(/^`|`$/g, '').replace(/<\/?code>/gi, '').toLowerCase().trim();
    if (clean.length >= 3 && !STOP_WORDS.has(clean)) {
      anchors.add(clean);
      if (clean.includes('.')) {
        for (const p of clean.split('.')) {
          if (p.length >= 3 && !STOP_WORDS.has(p)) anchors.add(p);
        }
      }
    }
  }

  // 2. Extract WebIDL methods, functions, and interfaces (e.g. navigator.install, foo(), BarInterface)
  const idlMatches = rawText.match(/\b([A-Za-z0-9_]+\.[A-Za-z0-9_]+(?:\(\))?|[A-Za-z0-9_]+\(\))\b/g) || [];
  for (const m of idlMatches) {
    const clean = m.toLowerCase().replace(/\(\)$/, '');
    if (clean.length >= 4 && !STOP_WORDS.has(clean)) {
      anchors.add(clean);
      if (clean.includes('.')) {
        for (const p of clean.split('.')) {
          if (p.length >= 3 && !STOP_WORDS.has(p)) anchors.add(p);
        }
      }
    }
  }

  // 3. Extract CSS at-rules, pseudo-classes, and hyphenated properties (e.g. @counter-style, :has, text-decoration)
  const cssMatches = rawText.match(/(?:@[a-z-]+|:[a-z-]+|[a-z]+-[a-z-]+)/gi) || [];
  for (const m of cssMatches) {
    const clean = m.toLowerCase().trim();
    if (clean.length >= 4 && !STOP_WORDS.has(clean)) {
      anchors.add(clean);
    }
  }

  // 4. Extract terms from the specification URL path
  if (feature.specUrl) {
    try {
      const u = new URL(feature.specUrl);
      const pathParts = u.pathname.split(/[/._-]/).filter(p => p.length >= 4 && !STOP_WORDS.has(p.toLowerCase()));
      for (const p of pathParts) {
        anchors.add(p.toLowerCase());
      }
      if (u.hash) {
        const hashParts = u.hash.replace(/^#/, '').split(/[/._-]/).filter(p => p.length >= 4 && !STOP_WORDS.has(p.toLowerCase()));
        for (const p of hashParts) {
          anchors.add(p.toLowerCase());
        }
      }
    } catch {}
  }

  // 5. Extract distinctive technical identifiers from summary & motivation (digits, hyphens, mixedCase, acronyms)
  const summaryTokens = `${feature.summary || ''} ${feature.motivation || ''}`
    .replace(/[^a-zA-Z0-9-]/g, ' ')
    .split(/\s+/)
    .filter(t => t.length >= 4 && !STOP_WORDS.has(t.toLowerCase()));
  for (const t of summaryTokens) {
    if (/[0-9-]/.test(t) || /[A-Z]/.test(t)) {
      anchors.add(t.toLowerCase());
    }
  }

  // 5. Significant multi-word phrases from the feature name
  const nameClean = (feature.name || '').replace(/[^a-zA-Z0-9\s-_()]/g, ' ').toLowerCase();
  const nameTokens = nameClean.split(/\s+/).filter(t => t.length >= 3 && !STOP_WORDS.has(t));
  for (const t of nameTokens) {
    anchors.add(t);
  }

  return Array.from(anchors);
}

/**
 * Deterministic fallback check when no LLM API key is present.
 * Uses dynamic anchor overlap, URL matching, and phrase grounding.
 */
export function verifySemantically(feature, item) {
  const nameLower = (feature.name || '').toLowerCase().trim();
  const nameSlug = nameLower.replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const titleLower = (item.title || item.name || '').toLowerCase();
  const snippetLower = (item.snippet || item.description || item.readmeSnippet || item.contentExcerpt || '').toLowerCase();
  const urlLower = (item.url || '').toLowerCase();
  const fullText = `${titleLower} ${snippetLower} ${urlLower}`;

  // 1. Exact feature name match or canonical slug match (e.g. "CSS symbols()" or "web-install-api")
  if (fullText.includes(nameLower) || (nameSlug.length >= 5 && fullText.includes(nameSlug))) {
    return { isRelevant: true, confidence: 90, reason: 'Exact feature name or slug match' };
  }

  const anchors = extractTechnicalAnchors(feature);

  // 2. Specialized filtering for NPM packages to eliminate incidental name collisions
  if (item.type === 'package') {
    const matched = anchors.filter(a => a.length >= 4 && fullText.includes(a));
    if (item.isPolyfill && (fullText.includes(nameLower) || (nameSlug.length >= 4 && fullText.includes(nameSlug)) || matched.length >= 1)) {
      return { isRelevant: true, confidence: 90, reason: 'Identified as web polyfill for this feature' };
    }
    if (matched.length >= 2) {
      return { isRelevant: true, confidence: 75, reason: `Matched multiple technical anchors: ${matched.slice(0, 3).join(', ')}` };
    }
    return { isRelevant: false, confidence: 85, reason: 'NPM package lacks sufficient specific feature anchor overlap' };
  }

  // 3. Multi-token anchor overlap for web articles, documentation, and discussions
  if (anchors.length > 0) {
    const matched = anchors.filter(a => fullText.includes(a));
    // If multiple technical anchors match, or 1 highly specific anchor (>7 chars) matches
    if (matched.length >= 2 || (matched.length === 1 && matched[0].length >= 8)) {
      return {
        isRelevant: true,
        confidence: Math.min(85, 50 + matched.length * 15),
        reason: `Matched technical anchors: ${matched.slice(0, 3).join(', ')}`,
      };
    }
  }

  // 3. Fallback: single word matches on very short titles are rejected as accidental collisions
  return {
    isRelevant: false,
    confidence: 70,
    reason: 'Insufficient technical domain anchor overlap',
  };
}

/**
 * Primary Verifier: Uses Gemini 3.7 Flash (or OpenAI) LLM to thoroughly verify candidate items.
 * Evaluates candidate items against feature specifications and actual fetched page content.
 */
export async function verifyWithLLM(feature, candidateItems) {
  if (!config.geminiApiKey && !config.openaiApiKey) {
    return null;
  }
  if (!candidateItems || candidateItems.length === 0) {
    return [];
  }

  const itemsPayload = candidateItems.map((item, idx) => ({
    id: idx,
    title: item.title || item.name || 'Untitled',
    source: item.source || 'web',
    url: item.url || '',
    type: item.type || 'article',
    snippet: (item.contentExcerpt || item.snippet || item.description || item.readmeSnippet || '').slice(0, 400),
  }));

  const prompt = `You are a Senior Web Standards and API reviewer.
Evaluate whether each candidate item is GENUINELY discussing, implementing, or evaluating the specific Web Platform Feature below.
Reject accidental word collisions, generic namesake libraries, or unrelated topics.

Target Web Platform Feature:
- Name: "${feature.name}"
- Milestone: Chrome ${feature.milestone || ''} (${feature.category || ''})
- Summary: "${feature.summary}"
- Spec: "${feature.specUrl || 'N/A'}"
- Motivation: "${feature.motivation || 'N/A'}"

Candidate Items to Evaluate:
${JSON.stringify(itemsPayload, null, 2)}

Return a JSON array where each object has:
[
  {
    "id": number (matching the candidate id),
    "isRelevant": boolean (true if genuinely about this specific web platform feature/API),
    "confidence": number between 0 and 100,
    "reason": "concise 1-sentence explanation of why it is relevant or why it was rejected"
  }
]`;

  if (config.geminiApiKey) {
    try {
      const model = config.geminiModel || 'gemini-3.7-flash';
      logger.debug(`[LLM Verifier] Sending ${itemsPayload.length} candidate(s) to ${model}...`);

      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${config.geminiApiKey}`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.1,
          },
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        const parsed = extractJsonFromText(text);
        if (parsed) {
          const results = Array.isArray(parsed) ? parsed : parsed.items || parsed.results || [];
          logger.debug(`[LLM Verifier] Received ${results.length} evaluations from ${model}`);
          return results;
        }
      } else {
        const errText = await res.text().catch(() => '');
        logger.debug(`[LLM Verifier] ${model} returned HTTP ${res.status}: ${errText.slice(0, 200)}`);
      }
    } catch (err) {
      logger.debug(`[LLM Verifier] Error calling Gemini: ${err.message}`);
    }
  }

  if (config.openaiApiKey) {
    try {
      logger.debug(`[LLM Verifier] Sending ${itemsPayload.length} candidate(s) to OpenAI gpt-4o-mini...`);
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${config.openaiApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: 'You are a web standards reviewer. Return JSON only.' },
            { role: 'user', content: prompt },
          ],
          response_format: { type: 'json_object' },
          temperature: 0.1,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const text = data.choices?.[0]?.message?.content;
        const parsed = extractJsonFromText(text);
        if (parsed) {
          return Array.isArray(parsed) ? parsed : parsed.items || parsed.results || [];
        }
      }
    } catch (err) {
      logger.debug(`[LLM Verifier] Error calling OpenAI: ${err.message}`);
    }
  }

  return null;
}

/**
 * Filter an array of candidate items using the LLM as primary verifier,
 * with dynamic semantic token overlap as fallback when offline.
 */
export async function filterRelevantItems(feature, items) {
  if (!items || items.length === 0) return [];

  // Attempt primary LLM verification first
  const llmResults = await verifyWithLLM(feature, items).catch(() => null);

  const verified = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const llmEval = llmResults ? llmResults.find(r => r.id === i) : null;

    if (llmEval) {
      if (llmEval.isRelevant) {
        item.relevanceConfidence = llmEval.confidence || 85;
        item.relevanceReason = llmEval.reason || 'Verified by LLM';
        verified.push(item);
        logger.debug(`  ✔ [Verified by LLM] "${item.title || item.name}": ${llmEval.reason}`);
      } else {
        logger.debug(`  ✖ [Rejected by LLM] "${item.title || item.name}": ${llmEval.reason}`);
      }
    } else {
      // Fallback: dynamic semantic anchor validation
      const sem = verifySemantically(feature, item);
      if (sem.isRelevant) {
        item.relevanceConfidence = sem.confidence;
        item.relevanceReason = sem.reason;
        verified.push(item);
        logger.debug(`  ✔ [Verified Semantically] "${item.title || item.name}": ${sem.reason}`);
      } else {
        logger.debug(`  ✖ [Rejected Semantically] "${item.title || item.name}": ${sem.reason}`);
      }
    }
  }

  return verified;
}
