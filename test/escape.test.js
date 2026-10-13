import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import {
  escapeHtml,
  safeUrl,
  h,
  raw,
  escapeXml,
  cdata,
  markdownUrl,
  markdownCode
} from '../src/reporters/escape.js';

test('escapeHtml handles all five entities and null/undefined', () => {
  assert.strictEqual(escapeHtml(null), '');
  assert.strictEqual(escapeHtml(undefined), '');
  assert.strictEqual(escapeHtml(''), '');
  assert.strictEqual(escapeHtml('& < > " \''), '&amp; &lt; &gt; &quot; &#39;');
  assert.strictEqual(escapeHtml('normal text'), 'normal text');
});

test('safeUrl protects against XSS payloads and preserves valid URLs', () => {
  // Good URLs
  assert.strictEqual(safeUrl('https://example.com/'), 'https://example.com/');
  assert.strictEqual(safeUrl('http://example.com'), 'http://example.com/');
  assert.strictEqual(safeUrl('mailto:me@example.com'), 'mailto:me@example.com');
  
  // Bad URLs
  assert.strictEqual(safeUrl('javascript:alert(1)'), '#');
  assert.strictEqual(safeUrl('JavaScript:alert(1)'), '#');
  assert.strictEqual(safeUrl(' javascript:alert(1)'), '#');
  assert.strictEqual(safeUrl('data:text/html;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg=='), '#');
  assert.strictEqual(safeUrl('vbscript:msgbox("xss")'), '#');
  
  // Empty/null
  assert.strictEqual(safeUrl(''), '#');
  assert.strictEqual(safeUrl(null), '#');
  assert.strictEqual(safeUrl(undefined), '#');

  // Quotes in URLs are escaped
  assert.strictEqual(safeUrl('https://example.com/"onerror="alert(1)'), 'https://example.com/%22onerror=%22alert(1)');
});

test('h tagged template escapes values, respects raw(), handles arrays', () => {
  const name = '<script>';
  assert.strictEqual(h`Hello ${name}`, 'Hello &lt;script&gt;');
  
  const untrusted = raw('<b>hi</b>');
  assert.strictEqual(h`Trusted: ${untrusted}`, 'Trusted: <b>hi</b>');
  
  const arr = ['&', raw('<i>!')];
  assert.strictEqual(h`Items: ${arr}`, 'Items: &amp;<i>!');
});

test('escapeXml strips illegal C0 characters and escapes five XML entities', () => {
  assert.strictEqual(escapeXml('hello\x00world'), 'helloworld');
  assert.strictEqual(escapeXml('\x0B\x0C\uFFFF'), '');
  assert.strictEqual(escapeXml('& < > " \''), '&amp; &lt; &gt; &quot; &apos;');
});

test('cdata neutralises embedded terminator', () => {
  assert.strictEqual(cdata('<div>hi</div>'), '<![CDATA[<div>hi</div>]]>');
  assert.strictEqual(cdata(']]>'), '<![CDATA[]]&gt;]]>');
  assert.strictEqual(cdata('a]]>b'), '<![CDATA[a]]&gt;b]]>');
  assert.strictEqual(cdata('a\x00b'), '<![CDATA[ab]]>');
});

test('markdownUrl uses angle brackets for URLs with parentheses', () => {
  assert.strictEqual(markdownUrl('https://example.com/test'), 'https://example.com/test');
  assert.strictEqual(markdownUrl('https://example.com/test(1)'), '<https://example.com/test(1)>');
  assert.strictEqual(markdownUrl('https://example.com/test space'), '<https://example.com/test space>');
  assert.strictEqual(markdownUrl('javascript:alert(1)'), ''); // from isSafeUrl
});

test('markdownUrl cannot be made to close its angle brackets early', () => {
  // The angle-bracket form ends at the first `>` and cannot span lines; a crawled
  // URL used to be able to end it and leave the rest as raw HTML.
  assert.strictEqual(
    markdownUrl('https://example.com/a b><img src=x onerror=alert(1)>'),
    '<https://example.com/a b%3E%3Cimg src=x onerror=alert(1)%3E>'
  );
  assert.strictEqual(markdownUrl('https://example.com/a(b)\n<c>'), '<https://example.com/a(b)%0A%3Cc%3E>');
  assert.strictEqual(markdownUrl('https://example.com/a b\r\nc'), '<https://example.com/a b%0D%0Ac>');
  for (const url of ['https://example.com/a b>x', 'https://example.com/(<x>)', 'https://example.com/a\nb c']) {
    const inner = markdownUrl(url).slice(1, -1);
    assert.ok(!/[<>\r\n]/.test(inner), `${JSON.stringify(url)} -> ${inner}`);
  }
});

test('markdownCode wraps text in a code span', () => {
  assert.strictEqual(markdownCode('plain'), '`plain`');
  assert.strictEqual(markdownCode('"quoted query"'), '`"quoted query"`');
  // Nothing inside a code span is interpreted, so nothing is escaped.
  assert.strictEqual(markdownCode('a\\b <i> &amp; *x*'), '`a\\b <i> &amp; *x*`');
  assert.strictEqual(markdownCode(42), '`42`');
});

test('markdownCode picks a delimiter longer than any backtick run in the text', () => {
  assert.strictEqual(markdownCode('a`b'), '``a`b``');
  assert.strictEqual(markdownCode('a``b`c'), '```a``b`c```');
  assert.strictEqual(markdownCode('a```b'), '````a```b````');
});

test('markdownCode pads text that starts or ends with a backtick, so it is not read as part of the delimiter', () => {
  assert.strictEqual(markdownCode('`edge'), '`` `edge ``');
  assert.strictEqual(markdownCode('edge`'), '`` edge` ``');
  assert.strictEqual(markdownCode('`'), '`` ` ``');
  assert.strictEqual(markdownCode('``'), '``` `` ```');
});

test('markdownCode turns line breaks into spaces and gives nothing for nothing', () => {
  // A blank line would end the paragraph, and the span with it.
  assert.strictEqual(markdownCode('one\ntwo\r\nthree'), '`one two three`');
  assert.strictEqual(markdownCode(''), '');
  assert.strictEqual(markdownCode(null), '');
  assert.strictEqual(markdownCode(undefined), '');
});

/** Reads one code span from the start of `text` the way CommonMark does; null when there is none. */
function readCodeSpan(text) {
  const open = text.match(/^`+/);
  if (!open) return null;
  const n = open[0].length;
  let i = n;
  while (i < text.length) {
    if (text[i] !== '`') { i++; continue; }
    let run = 0;
    while (text[i + run] === '`') run++;
    if (run === n) {
      let content = text.slice(n, i).replace(/\n/g, ' ');
      // One space is removed from each side when both are there (and the content is not all spaces).
      if (content.startsWith(' ') && content.endsWith(' ') && content.trim() !== '') content = content.slice(1, -1);
      return { content, rest: text.slice(i + n) };
    }
    i += run;
  }
  return null;
}

test('markdownCode output is always exactly one code span holding the text, whatever the text', () => {
  // A small seeded generator, so a failure is reproducible.
  let seed = 20260921;
  const next = () => (seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296;
  const alphabet = ['`', '`', '`', ' ', 'a', '<', '\n', '\\', '&', '*'];
  const SENTINEL = ' AFTER <img src=x>';

  for (let n = 0; n < 3000; n++) {
    const length = 1 + Math.floor(next() * 12);
    const text = Array.from({ length }, () => alphabet[Math.floor(next() * alphabet.length)]).join('');
    const flattened = text.replace(/\r?\n/g, ' ');

    const span = readCodeSpan(markdownCode(text) + SENTINEL);
    assert.ok(span, `no code span for ${JSON.stringify(text)}`);
    assert.strictEqual(span.rest, SENTINEL, `the span did not end where it should for ${JSON.stringify(text)}`);

    // Edge spaces are the one thing a renderer removes: both sides or neither.
    const expected = flattened.startsWith(' ') && flattened.endsWith(' ') && flattened.trim() !== ''
      ? flattened.slice(1, -1)
      : flattened;
    assert.strictEqual(span.content, expected, `content differs for ${JSON.stringify(text)}`);
  }
});
