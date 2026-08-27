import { config } from '../config.js';
import { extractDomain } from './web.js';

/**
 * Extracts and parses JSON from model output text,
 * handling ```json ... ``` blocks, raw JSON, or substring braces.
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

  return null;
}

/**
 * Calls the Gemini API with Google Search Grounding enabled.
 * Gemini automatically queries Google Search, fetches web content,
 * grounds its response, and returns verified web URLs and queries.
 */
export async function callGeminiWithSearchGrounding(prompt, options = {}) {
  if (!config.geminiApiKey) return null;

  const models = ['gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-1.5-flash'];
  let lastError = null;

  for (const model of models) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${config.geminiApiKey}`;

      const requestBody = {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
        // Enable native Google Search Grounding
        tools: [
          {
            googleSearch: {},
          },
        ],
        generationConfig: {
          temperature: options.temperature !== undefined ? options.temperature : 0.1,
        },
      };

      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });

      if (!res.ok) {
        const errorText = await res.text().catch(() => '');
        lastError = new Error(`Gemini API (${model}) returned ${res.status}: ${errorText}`);
        continue; // Try next model fallback
      }

      const data = await res.json();
      const candidate = data.candidates?.[0];
      const text = candidate?.content?.parts?.[0]?.text || '';
      const groundingMeta = candidate?.groundingMetadata || {};

      const webSearchQueries = groundingMeta.webSearchQueries || [];
      const groundingChunks = groundingMeta.groundingChunks || [];

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

  if (lastError && process.env.DEBUG) {
    console.error('Gemini search grounding error:', lastError.message);
  }
  return null;
}
