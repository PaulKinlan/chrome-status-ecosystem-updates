import { config } from '../config.js';
import { extractDomain } from './web.js';
import { logger } from '../logger.js';
import { fetchWithTimeout } from '../http.js';

const GEMINI_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models';

/**
 * Builds request headers for the Gemini API.
 *
 * The key goes in `x-goog-api-key`, never the query string: URLs end up in
 * logs, proxies, and error messages, and this crawler prints URLs on failure.
 */
export function geminiHeaders() {
  return {
    'Content-Type': 'application/json',
    'x-goog-api-key': config.geminiApiKey,
  };
}

/**
 * Model fallback chain. The configured model is tried first; the rest are
 * progressively older stable releases so a single retired model name cannot
 * take the whole pipeline offline.
 */
export function modelCandidates() {
  const configured = config.geminiModel || 'gemini-3.8-flash';
  return [...new Set([configured, 'gemini-3.8-flash', 'gemini-3-flash', 'gemini-2.5-flash'])];
}

/**
 * Extracts and parses JSON from model output text,
 * handling ```json ... ``` blocks, raw JSON, or substring braces.
 *
 * Still needed for grounded calls, where a response schema cannot be combined
 * with the search tool. Prefer `callGeminiJson` for everything else.
 */
export function extractJsonFromText(text) {
  if (!text) return null;

  // 1. Try markdown code block ```json ... ```
  const codeBlockMatch = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  if (codeBlockMatch) {
    try {
      return JSON.parse(codeBlockMatch[1].trim());
    } catch {}
  }

  // 2. Try raw string
  try {
    return JSON.parse(text.trim());
  } catch {}

  // 3. Try finding substring between outermost { and }
  const firstBrace = text.indexOf('{');
  const lastBrace = text.lastIndexOf('}');
  if (firstBrace !== -1 && lastBrace > firstBrace) {
    try {
      return JSON.parse(text.slice(firstBrace, lastBrace + 1));
    } catch {}
  }

  // 4. Try an array payload
  const firstBracket = text.indexOf('[');
  const lastBracket = text.lastIndexOf(']');
  if (firstBracket !== -1 && lastBracket > firstBracket) {
    try {
      return JSON.parse(text.slice(firstBracket, lastBracket + 1));
    } catch {}
  }

  return null;
}

/**
 * Calls Gemini asking for schema-constrained JSON.
 *
 * Using responseSchema removes the need to scrape JSON back out of prose, which
 * previously failed silently and fell through to the heuristic path with no
 * warning.
 *
 * @param {string} prompt
 * @param {{schema: object, temperature?: number, systemInstruction?: string, label?: string, maxOutputTokens?: number}} options
 */
export async function callGeminiJson(prompt, options = {}) {
  if (!config.geminiApiKey) return null;

  const { schema, temperature = 0.1, systemInstruction, label = 'Gemini', maxOutputTokens = 4096 } = options;
  let lastError = null;

  for (const model of modelCandidates()) {
    try {
      const body = {
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: {
          temperature,
          maxOutputTokens,
          responseMimeType: 'application/json',
          ...(schema ? { responseSchema: schema } : {}),
        },
      };
      if (systemInstruction) {
        body.systemInstruction = { parts: [{ text: systemInstruction }] };
      }

      const res = await fetchWithTimeout(`${GEMINI_ENDPOINT}/${model}:generateContent`, {
        method: 'POST',
        label,
        timeoutMs: 45_000,
        headers: geminiHeaders(),
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const errorText = await res.text().catch(() => '');
        lastError = new Error(`Gemini API (${model}) returned ${res.status}: ${errorText.slice(0, 200)}`);
        logger.debug(`[${label}] ${lastError.message}`);
        continue;
      }

      const data = await res.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
      const parsed = extractJsonFromText(text);
      if (parsed !== null) return { model, parsed, text };

      lastError = new Error(`Gemini API (${model}) returned unparseable JSON`);
      logger.debug(`[${label}] ${lastError.message}`);
    } catch (err) {
      lastError = err;
      logger.debug(`[${label}] ${err.message}`);
    }
  }

  if (lastError) logger.debug(`[${label}] All model candidates failed: ${lastError.message}`);
  return null;
}

/**
 * Calls the Gemini API with Google Search Grounding enabled.
 * Gemini automatically queries Google Search, fetches web content,
 * grounds its response, and returns verified web URLs and queries.
 *
 * NOTE: grounded calls cannot also use a response schema, so the JSON is still
 * recovered from the prose via extractJsonFromText.
 */
export async function callGeminiWithSearchGrounding(prompt, options = {}) {
  if (!config.geminiApiKey) return null;

  let lastError = null;

  for (const model of modelCandidates()) {
    try {
      const requestBody = {
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        // Enable native Google Search Grounding
        tools: [{ googleSearch: {} }],
        generationConfig: {
          temperature: options.temperature !== undefined ? options.temperature : 0.1,
          maxOutputTokens: options.maxOutputTokens || 4096,
        },
      };
      if (options.systemInstruction) {
        requestBody.systemInstruction = { parts: [{ text: options.systemInstruction }] };
      }

      const res = await fetchWithTimeout(`${GEMINI_ENDPOINT}/${model}:generateContent`, {
        method: 'POST',
        label: 'Gemini Grounding',
        timeoutMs: 60_000,
        headers: geminiHeaders(),
        body: JSON.stringify(requestBody),
      });

      if (!res.ok) {
        const errorText = await res.text().catch(() => '');
        lastError = new Error(`Gemini API (${model}) returned ${res.status}: ${errorText.slice(0, 200)}`);
        continue; // Try next model fallback
      }

      const data = await res.json();
      const candidate = data.candidates?.[0];
      const text = candidate?.content?.parts?.[0]?.text || '';
      const groundingMeta = candidate?.groundingMetadata || {};

      const webSearchQueries = groundingMeta.webSearchQueries || [];
      const groundingChunks = groundingMeta.groundingChunks || [];

      if (webSearchQueries.length > 0) {
        logger.debug(`Google Search Grounding executed queries: ${webSearchQueries.map(q => '"' + q + '"').join(', ')}`);
      }

      // Extract grounded web sources from Google Search
      const groundedArticles = [];
      const seenUris = new Set();

      for (const chunk of groundingChunks) {
        const uri = chunk.web?.uri;
        const title = chunk.web?.title;
        if (uri && !seenUris.has(uri)) {
          seenUris.add(uri);
          groundedArticles.push({
            source: 'Google Search (Gemini Grounded)',
            type: 'article',
            title: title || extractDomain(uri) || 'Web Article',
            url: uri,
            domain: extractDomain(uri),
            isGrounded: true,
            snippet: text.slice(0, 250),
          });
        }
      }

      if (groundedArticles.length > 0) {
        logger.debug(`Google Search Grounding discovered ${groundedArticles.length} live web sources: ${groundedArticles.map(a => a.domain).filter(Boolean).join(', ')}`);
      }

      const parsedJson = extractJsonFromText(text);

      return {
        model,
        text,
        parsedJson,
        webSearchQueries,
        groundingChunks,
        groundedArticles,
      };
    } catch (err) {
      lastError = err;
    }
  }

  if (lastError) {
    logger.debug(`Gemini search grounding error: ${lastError.message}`);
  }
  return null;
}
