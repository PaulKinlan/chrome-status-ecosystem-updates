import test from 'node:test';
import assert from 'node:assert';
import {
  escapeHtml,
  safeUrl,
  h,
  raw,
  escapeXml,
  cdata,
  markdownUrl
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
