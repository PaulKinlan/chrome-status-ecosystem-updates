/**
 * One vocabulary for developer sentiment.
 *
 * The heuristic engine and the LLM used to speak different dialects: the
 * heuristic said "Positive / High Interest" while the prompt asked the model for
 * "Positive", and the model's free-text answer was stored unchecked. A single
 * report therefore mixed both spellings (189 vs 113 rows in one data set), which
 * makes the field useless for filtering or counting.
 */
export const SENTIMENT = Object.freeze({
  POSITIVE: 'Positive',
  CAUTIOUS: 'Cautiously Optimistic',
  MIXED: 'Mixed / Skeptical',
  OPPOSED: 'Opposed',
  NEUTRAL: 'Neutral',
});

/** The canonical values, in the order they are offered to the model. */
export const SENTIMENTS = Object.freeze(Object.values(SENTIMENT));

/**
 * Maps whatever sentiment text we were given onto the canonical vocabulary.
 * Returns null when it cannot be mapped, so callers can fall back to another
 * source rather than store an arbitrary string.
 *
 * The prompt offers the five canonical values, so this is for strays. The
 * mistake that matters is inflating a negative into a positive, which plain
 * keyword matching did for "unfavourable", "not favourable" and
 * "unenthusiastic" (each contains a positive word), so:
 *
 *  - a canonical value, in any case, is taken as it is;
 *  - a negated positive ("not optimistic") is read as mixed, never as positive;
 *  - anything else negated ("no concerns"), and ranges ("neutral to positive"),
 *    are too ambiguous to place and return null;
 *  - order matters among the rest: "Cautiously Optimistic" contains
 *    "optimistic", "Cautiously pessimistic" is not optimistic at all, and "Mixed
 *    / Skeptical" must not be mistaken for a positive just because a model
 *    wrote "Mixed, leaning positive".
 */
export function normalizeSentiment(value) {
  if (typeof value !== 'string') return null;
  const text = value.trim().toLowerCase().replace(/\s+/g, ' ');
  if (!text) return null;

  const exact = SENTIMENTS.find(sentiment => sentiment.toLowerCase() === text);
  if (exact) return exact;

  const polar = 'neutral|mixed|positive|negative|optimistic|pessimistic|skeptical|sceptical';
  if (new RegExp(`\\b(?:${polar})\\s+to\\s+(?:${polar})\\b`).test(text)) return null;

  const negated = /\b(?:not|no|never|without|lack\w*|isn'?t|aren'?t|wasn'?t|doesn'?t|don'?t)\b/.test(text);
  const unlessNegated = sentiment => (negated ? null : sentiment);

  if (text.includes('pessimis')) return unlessNegated(SENTIMENT.MIXED);
  if (/cautious|guarded|tentative/.test(text)) return unlessNegated(SENTIMENT.CAUTIOUS);
  if (/mixed|skeptic|sceptic|divided|lukewarm|ambivalent|wary|concern|doubt/.test(text)) return unlessNegated(SENTIMENT.MIXED);
  if (/oppos|negative|hostile|\bun-?favou?rable/.test(text)) return unlessNegated(SENTIMENT.OPPOSED);
  if (/positive|optimistic|enthusias|favou?rable|supportive/.test(text)) {
    const negatedByPrefix = /\b(?:un|non|dis|in)-?(?:enthusias|optimis|support|positive)/.test(text);
    return negated || negatedByPrefix ? SENTIMENT.MIXED : SENTIMENT.POSITIVE;
  }
  if (text.includes('neutral')) return unlessNegated(SENTIMENT.NEUTRAL);
  return null;
}
