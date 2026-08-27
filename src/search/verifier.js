import { config } from '../config.js';

/**
 * Extracts distinctive technical anchor terms for a feature to prevent accidental word collisions
 */
export function extractTechnicalAnchors(feature) {
  const anchors = new Set();
  const summaryLower = (feature.summary || '').toLowerCase();
  const nameLower = (feature.name || '').toLowerCase();

  // Code tokens in backticks
  const backtickMatches = (feature.summary || '').match(/`([^`]+)`/g) || [];
  for (const m of backtickMatches) {
    const clean = m.replace(/`/g, '').toLowerCase().trim();
    if (clean.length >= 3 && !clean.includes(' ')) {
      anchors.add(clean);
    }
  }

  // Feature specific domains
  if (nameLower.includes('css') || summaryLower.includes('css')) {
    if (nameLower.includes('symbols')) {
      anchors.add('counter');
      anchors.add('counter-style');
      anchors.add('@counter-style');
      anchors.add('list-style');
      anchors.add('symbols(');
    }
    if (nameLower.includes('text-decoration')) {
      anchors.add('text-decoration');
      anchors.add('underline');
    }
  }

  if (nameLower.includes('install')) {
    anchors.add('navigator.install');
    anchors.add('pwa');
    anchors.add('manifest');
    anchors.add('beforeinstallprompt');
    anchors.add('web app');
  }

  if (nameLower.includes('crypto')) {
    anchors.add('subtle');
    anchors.add('ml-kem');
    anchors.add('ml-dsa');
    anchors.add('chacha20');
    anchors.add('webcrypto');
  }

  if (nameLower.includes('websocket')) {
    anchors.add('websocket');
    anchors.add('protocols');
    anchors.add('options');
  }

  if (nameLower.includes('fetch')) {
    anchors.add('fetch');
    anchors.add('cors');
    anchors.add('request');
  }

  return Array.from(anchors);
}

/**
 * Deterministic semantic check: tests if a candidate item is truly related to the feature
 */
export function verifySemantically(feature, item) {
  const nameLower = (feature.name || '').toLowerCase();
  const titleLower = (item.title || item.name || '').toLowerCase();
  const snippetLower = (item.snippet || item.description || item.readmeSnippet || '').toLowerCase();
  const fullText = `${titleLower} ${snippetLower}`;

  // 1. Exact phrase match of full feature name (high confidence)
  // e.g. "Add options bag to WebSocket constructor" or "Web Install API"
  if (fullText.includes(nameLower)) {
    return { isRelevant: true, confidence: 90, reason: 'Exact feature name match' };
  }

  // 2. Negative collision guard: check for known false-positive collisions
  if (nameLower.includes('symbols')) {
    const isFalseCollision =
      (titleLower.includes('unicode') || titleLower.includes('lambda') || titleLower.includes('sf symbols')) &&
      !fullText.includes('counter') && !fullText.includes('list-style');
    if (isFalseCollision) {
      return { isRelevant: false, confidence: 95, reason: 'Collision with generic Unicode/SF/Lambda symbols' };
    }
  }

  if (nameLower.includes('install') && item.type === 'package') {
    // If an npm package doesn't mention web apps, pwa, or browser/navigator, reject
    const hasWebContext = fullText.includes('web app') || fullText.includes('pwa') || fullText.includes('navigator.install') || fullText.includes('manifest');
    if (!hasWebContext) {
      return { isRelevant: false, confidence: 90, reason: 'NPM package lacks web app install context' };
    }
  }

  // 3. Anchor term grounding
  const anchors = extractTechnicalAnchors(feature);
  if (anchors.length > 0) {
    const matchedAnchors = anchors.filter(a => fullText.includes(a));
    if (matchedAnchors.length > 0) {
      // Must also match at least one significant word from the feature name
      const nameWords = nameLower.split(/\s+/).filter(w => w.length > 3 && !['with', 'from', 'into', 'that', 'this'].includes(w));
      const hasNameWord = nameWords.some(w => fullText.includes(w));
      if (hasNameWord) {
        return { isRelevant: true, confidence: 75, reason: `Matched technical anchors: ${matchedAnchors.join(', ')}` };
      }
    }
  }

  // 4. If neither exact match nor anchor matched, reject as unrelated
  return { isRelevant: false, confidence: 80, reason: 'No distinctive technical anchors matched' };
}

/**
 * Uses an LLM (Gemini or OpenAI) to verify a batch of candidate links
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
    title: item.title || item.name,
    source: item.source,
    type: item.type,
    snippet: (item.snippet || item.description || item.readmeSnippet || '').slice(0, 300),
  }));

  const prompt = `You are a strict Web Standards and Browser Engineering reviewer.
Evaluate if each candidate link below is SPECIFICALLY about this exact Web Platform feature.

Target Web Feature:
- Name: "${feature.name}"
- Summary: "${feature.summary}"
- Blink Component: "${(feature.blinkComponents || []).join(', ')}"

Candidate Links to Verify:
${JSON.stringify(itemsPayload, null, 2)}

Instructions:
- Be strict. Exclude accidental word collisions (e.g. if the feature is CSS symbols() counter styles, reject general Unicode symbols or Apple SF symbols).
- Exclude generic tools or unrelated libraries.
- Return a JSON array with one object per candidate:
[
  {
    "id": 0,
    "isRelevant": true or false,
    "confidence": number 0-100,
    "reason": "short explanation"
  }
]`;

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
            temperature: 0.1,
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
      // Fall through to OpenAI or semantic
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
        if (text) {
          const parsed = JSON.parse(text);
          return Array.isArray(parsed) ? parsed : parsed.items || parsed.results || [];
        }
      }
    } catch {
      // Return null on error
    }
  }

  return null;
}

/**
 * Filter an array of candidate items using both LLM (if available) and semantic validation
 */
export async function filterRelevantItems(feature, items) {
  if (!items || items.length === 0) return [];

  // Step 1: Pre-filter semantically
  const semanticEvaluations = items.map(item => ({
    item,
    sem: verifySemantically(feature, item),
  }));

  // Step 2: Attempt LLM verification for candidates
  const llmResults = await verifyWithLLM(feature, items).catch(() => null);

  const verified = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const sem = semanticEvaluations[i].sem;

    if (llmResults && Array.isArray(llmResults)) {
      const llmEval = llmResults.find(r => r.id === i);
      if (llmEval) {
        if (llmEval.isRelevant && llmEval.confidence >= 60) {
          verified.push({
            ...item,
            relevanceScore: llmEval.confidence,
            verificationReason: llmEval.reason,
            isVerified: true,
          });
        }
        continue;
      }
    }

    // Fallback to semantic check
    if (sem.isRelevant && sem.confidence >= 70) {
      verified.push({
        ...item,
        relevanceScore: sem.confidence,
        verificationReason: sem.reason,
        isVerified: true,
      });
    }
  }

  return verified;
}
