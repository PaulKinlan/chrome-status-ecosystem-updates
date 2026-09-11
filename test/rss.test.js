import test from 'node:test';
import assert from 'node:assert';
import { generateRssFeed } from '../src/reporters/rss.js';

function createDummyReport(featuresOverrides = [], globals = {}) {
  return {
    weekString: '2026-W01',
    generatedAt: '2026-01-01T12:00:00.000Z',
    features: featuresOverrides.map(f => ({
      feature: {
        id: 123,
        name: 'Default',
        milestone: 100,
        category: 'Enabled',
        summary: 'Summary',
        chromeStatusUrl: 'https://chromestatus.com/feature/123',
        ...f
      },
      analysis: { executiveSummary: 'Analysis' }
    })),
    ...globals
  };
}

test('generateRssFeed prevents double-escaping of summary tags', () => {
  const report = createDummyReport([{
    summary: 'A summary with <number> in it.'
  }]);
  const xml = generateRssFeed(report);
  
  // It should be inside CDATA, and escaped once
  // <p>A summary with &lt;number&gt; in it.</p> inside CDATA
  assert.ok(xml.includes('&lt;number&gt;'), 'Should be escaped once');
  assert.ok(!xml.includes('&amp;lt;number&amp;gt;'), 'Should NOT be double escaped');
});

test('generateRssFeed escapes HTML in feature titles', () => {
  const report = createDummyReport([{
    name: 'A & B <iframe src=x>'
  }]);
  const xml = generateRssFeed(report);
  
  // Title in XML is a text node, so < and > must be escaped.
  assert.ok(xml.includes('<title>A &amp; B &lt;iframe src=x&gt; — Chrome 100 Ecosystem Update</title>'));
});

test('generateRssFeed guid is stable across different weekStrings', () => {
  const report1 = createDummyReport([{ id: 42 }], { weekString: '2026-W01' });
  const report2 = createDummyReport([{ id: 42 }], { weekString: '2026-W02' });
  
  const xml1 = generateRssFeed(report1);
  const xml2 = generateRssFeed(report2);
  
  const guidMatch1 = xml1.match(/<guid[^>]*>(.*?)<\/guid>/);
  const guidMatch2 = xml2.match(/<guid[^>]*>(.*?)<\/guid>/);
  
  assert.ok(guidMatch1, 'Has guid');
  assert.ok(guidMatch2, 'Has guid');
  assert.strictEqual(guidMatch1[1], guidMatch2[1], 'GUID must be identical across weeks');
  assert.ok(!guidMatch1[1].includes('2026'), 'GUID should not embed the weekString directly (or randomly)');
});

test('generateRssFeed pubDate derives from feature data, not build time', () => {
  const report = createDummyReport([
    { created: '2025-01-01T00:00:00Z', updated: '2025-01-02T00:00:00Z' },
    { created: '2025-02-01T00:00:00Z' } // no updated
  ], { generatedAt: '2026-01-01T00:00:00.000Z' });
  
  const xml = generateRssFeed(report);
  const pubDates = [...xml.matchAll(/<pubDate>(.*?)<\/pubDate>/g)].map(m => m[1]);
  
  assert.ok(pubDates.length >= 2);
  assert.notStrictEqual(pubDates[0], pubDates[1], 'pubDates should differ between features');
  
  // Date format checks
  assert.strictEqual(pubDates[0], new Date('2025-01-02T00:00:00Z').toUTCString());
  assert.strictEqual(pubDates[1], new Date('2025-02-01T00:00:00Z').toUTCString());
});

test('generateRssFeed handles ampersand in category and milestone without malformed XML', () => {
  const report = createDummyReport([{
    category: 'R & D',
    milestone: '100 & 101'
  }]);
  const xml = generateRssFeed(report);
  
  assert.ok(xml.includes('<category>R &amp; D</category>'));
  assert.ok(xml.includes('Chrome 100 &amp; 101'));
});

test('generateRssFeed document parses structurally (no stray bare ampersands)', () => {
  const report = createDummyReport([{
    name: 'Ben & Jerry',
    category: 'R & D',
    summary: 'Ice & Cream'
  }]);
  
  const xml = generateRssFeed(report);
  
  // Simple structural assert for balanced common tags
  assert.ok(xml.startsWith('<?xml'));
  assert.ok(xml.endsWith('</rss>'));
  assert.strictEqual(xml.split('<item>').length, 2, 'One item produced');
  assert.strictEqual(xml.split('</item>').length, 2, 'One item closed');
  
  // Assert no stray bare ampersands outside of entities or CDATA.
  // Strategy: strip CDATA sections, then check if every '&' is part of an entity like &amp;, &lt;, etc.
  const xmlWithoutCdata = xml.replace(/<!\[CDATA\[.*?\]\]>/g, '');
  const strayAmpersands = xmlWithoutCdata.match(/&(?!amp;|lt;|gt;|quot;|apos;|#\d+;)/g);
  
  assert.strictEqual(strayAmpersands, null, 'Should have no stray ampersands outside CDATA');
});
