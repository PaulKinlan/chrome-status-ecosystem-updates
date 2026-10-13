import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import { stripInvisibleCharacters } from '../src/text.js';
import { extractHtmlTitle } from '../src/search/content-fetcher.js';
import { sanitizeForPrompt } from '../src/search/verifier.js';

const codeOf = char => `U+${char.codePointAt(0).toString(16).toUpperCase().padStart(4, '0')}`;

test('control characters and invisible formatting characters are removed', () => {
  const removed = [
    '\u0000', '\u0007', '\u0008', '\u000B', '\u000C', '\u000E', '\u001F', '\u007F', '\u0085', '\u009F', // C0, DEL, NEL, C1
    '\u061C', // Arabic letter mark
    '\u200B', '\u200E', '\u200F', // zero-width space, left-to-right and right-to-left marks
    '\u202A', '\u202B', '\u202C', '\u202D', '\u202E', // embeddings and overrides
    '\u2060', '\u2061', '\u2062', '\u2063', '\u2064', // word joiner and invisible operators
    '\u2066', '\u2067', '\u2068', '\u2069', // isolates
    '\uFEFF', // byte order mark
  ];
  for (const char of removed) assert.strictEqual(stripInvisibleCharacters(`ig${char}nore`), 'ignore', codeOf(char));
});

test('what is not invisible stays: text of every script, the joiners, white space and the characters next to the removed ones', () => {
  const kept = [
    ' ', '\t', '\n', '\r', // white space is the caller's to collapse
    '\u007E', '\u00A0', '\u00A1', // either side of DEL and the C1 controls
    '\u061B', '\u061D', // either side of the Arabic letter mark
    '\u200A', '\u200C', '\u200D', '\u2010', // a hair space, the joiners, a hyphen
    '\u2029', '\u202F', '\u205F', // the paragraph separator, a narrow no-break space, a medium mathematical space
    '\u2065', '\u206A', // the code point between the invisible operators and the isolates, and the one after the isolates
    '\uFEFE', '\uFF00', // either side of the byte order mark
    '日', 'é', '✓', '\u{1F468}',
  ];
  for (const char of kept) assert.strictEqual(stripInvisibleCharacters(`x${char}y`), `x${char}y`, codeOf(char));
  assert.strictEqual(stripInvisibleCharacters('naïve café – 日本語 ✓'), 'naïve café – 日本語 ✓');
});

test('a number is read as its digits, and nothing is left behind by a long run of invisible characters', () => {
  assert.strictEqual(stripInvisibleCharacters(12345), '12345');
  assert.strictEqual(stripInvisibleCharacters('\u200B'.repeat(100_000) + 'x' + '\u202E'.repeat(100_000)), 'x');
});

test('a page title and a line of prompt evidence are cleaned of exactly the same characters', () => {
  // Every code point of the basic plane, one at a time, between two letters. (Lone surrogates are not text.)
  const different = [];
  for (let code = 0; code <= 0xFFFF; code++) {
    if (code >= 0xD800 && code <= 0xDFFF) continue;
    const char = String.fromCharCode(code);
    if (char === '<' || char === '&') continue; // markup, which a title is read through
    const title = extractHtmlTitle(`<title>a${char}b</title>`);
    const evidence = sanitizeForPrompt(`a${char}b`);
    if (title !== evidence) different.push(`${codeOf(char)}: title ${JSON.stringify(title)}, evidence ${JSON.stringify(evidence)}`);
  }
  assert.deepStrictEqual(different, []);
});
