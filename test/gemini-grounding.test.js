import test from 'node:test';
import assert from 'node:assert';
import { extractJsonFromText } from '../src/search/gemini-grounding.js';

test('extractJsonFromText extracts JSON from markdown code block', () => {
  const input = `Here is the requested analysis:
\`\`\`json
{
  "executiveSummary": "High interest in modern cryptographic algorithms.",
  "sentiment": "Positive"
}
\`\`\`
Hope this helps!`;

  const parsed = extractJsonFromText(input);
  assert.deepStrictEqual(parsed, {
    executiveSummary: 'High interest in modern cryptographic algorithms.',
    sentiment: 'Positive',
  });
});

test('extractJsonFromText extracts raw JSON object', () => {
  const input = '{"executiveSummary": "Raw JSON string test", "sentiment": "Neutral"}';
  const parsed = extractJsonFromText(input);
  assert.deepStrictEqual(parsed, {
    executiveSummary: 'Raw JSON string test',
    sentiment: 'Neutral',
  });
});

test('extractJsonFromText parses JSON embedded within text without markdown ticks', () => {
  const input = 'Analysis result: {"status": "ok", "consensus": "Multi-Engine Consensus"} end of message.';
  const parsed = extractJsonFromText(input);
  assert.deepStrictEqual(parsed, {
    status: 'ok',
    consensus: 'Multi-Engine Consensus',
  });
});
