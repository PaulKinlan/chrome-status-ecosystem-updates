import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { config } from '../src/config.js';
import { denormaliseReport } from '../src/report-schema.js';
import { readPublishedSummary, writeJsonReports } from '../src/reporters/json.js';

/**
 * readPublishedSummary feeds the publication safety checks, so what matters is
 * that it never throws and never invents a baseline: anything that is not
 * recognisably a report must come back as null ("nothing to compare with").
 */

/** A private reports/ directory, restored afterwards. */
async function reportsSandbox(t) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'json-reporter-test-'));
  const saved = config.reportsDir;
  config.reportsDir = path.join(root, 'reports');
  t.after(async () => {
    config.reportsDir = saved;
    await fs.rm(root, { recursive: true, force: true });
  });
  return config.reportsDir;
}

/** Puts `body` (an object, or raw text) where the published report lives. */
async function publish(body) {
  await fs.mkdir(config.reportsDir, { recursive: true });
  await fs.writeFile(path.join(config.reportsDir, 'latest.json'), typeof body === 'string' ? body : JSON.stringify(body));
}

test('there is nothing to compare with when no report has been published', async (t) => {
  await reportsSandbox(t);
  assert.strictEqual(await readPublishedSummary(), null, 'no reports directory at all');

  await fs.mkdir(config.reportsDir, { recursive: true });
  assert.strictEqual(await readPublishedSummary(), null, 'a reports directory without latest.json');
});

test('a damaged or foreign latest.json is not a baseline', async (t) => {
  await reportsSandbox(t);

  for (const body of ['', '{"featuresCount": 12, "feat', 'not json at all', 'null', '[]', '"a string"', '42', '{}', '{"featuresCount": "12"}', '{"features": {}}']) {
    await publish(body);
    assert.strictEqual(await readPublishedSummary(), null, JSON.stringify(body));
  }
});

test('the feature count is read from the report, or counted from its features', async (t) => {
  await reportsSandbox(t);

  await publish({ featuresCount: 12, features: [] });
  assert.strictEqual((await readPublishedSummary()).featuresCount, 12, 'the recorded count wins');

  await publish({ features: [{}, {}, {}] });
  assert.strictEqual((await readPublishedSummary()).featuresCount, 3, 'otherwise count the features');

  await publish({ featuresCount: 0, features: [{}] });
  assert.strictEqual((await readPublishedSummary()).featuresCount, 0, 'a recorded zero is a count, not a gap');
});

test('what ChromeStatus listed is only trusted when it was recorded as a number', async (t) => {
  await reportsSandbox(t);

  await publish({ featuresCount: 5, telemetry: { featuresAvailable: 12 } });
  assert.strictEqual((await readPublishedSummary()).upstreamCount, 12);

  for (const telemetry of [undefined, {}, { featuresAvailable: null }, { featuresAvailable: '12' }]) {
    await publish({ featuresCount: 5, telemetry });
    assert.strictEqual((await readPublishedSummary()).upstreamCount, null, JSON.stringify(telemetry));
  }
});

test('milestones, status filters and the week are passed on only in their proper shape', async (t) => {
  await reportsSandbox(t);

  await publish({
    featuresCount: 12,
    milestones: [153, 154],
    weekString: '2026-W41',
    telemetry: { statusTypes: ['enabled', 'deprecated'] },
  });
  assert.deepStrictEqual(await readPublishedSummary(), {
    featuresCount: 12,
    upstreamCount: null,
    milestones: [153, 154],
    statusTypes: ['enabled', 'deprecated'],
    weekString: '2026-W41',
  });

  // An empty filter means "every status"; a missing one means "this report does not say". They must stay distinct.
  await publish({ featuresCount: 12, telemetry: { statusTypes: [] } });
  assert.deepStrictEqual((await readPublishedSummary()).statusTypes, []);

  await publish({ featuresCount: 12, milestones: '153-154', telemetry: { statusTypes: 'enabled' } });
  assert.deepStrictEqual(await readPublishedSummary(), {
    featuresCount: 12,
    upstreamCount: null,
    milestones: [],
    statusTypes: null,
    weekString: null,
  });

  await publish({ featuresCount: 12, weekString: '' });
  assert.strictEqual((await readPublishedSummary()).weekString, null);
});

test('what writeJsonReports publishes is what readPublishedSummary reads back', async (t) => {
  await reportsSandbox(t);
  const report = {
    weekString: '2026-W41',
    milestones: [153, 154],
    featuresCount: 5,
    telemetry: { statusTypes: ['enabled'], featuresAvailable: 12 },
    features: [{}, {}, {}, {}, {}],
  };

  const { weeklyPath, latestPath } = await writeJsonReports(report);

  const published = JSON.parse(await fs.readFile(latestPath, 'utf-8'));
  assert.strictEqual(published.schemaVersion, 2);
  assert.deepStrictEqual(denormaliseReport(published), report);
  assert.strictEqual(await fs.readFile(weeklyPath, 'utf-8'), await fs.readFile(latestPath, 'utf-8'));
  assert.strictEqual(path.basename(weeklyPath), '2026-W41.json');
  assert.deepStrictEqual(await readPublishedSummary(), {
    featuresCount: 5,
    upstreamCount: 12,
    milestones: [153, 154],
    statusTypes: ['enabled'],
    weekString: '2026-W41',
  });
});

test('publishing leaves no temporary files behind, and replaces the previous report whole', async (t) => {
  await reportsSandbox(t);
  await writeJsonReports({ weekString: '2026-W40', featuresCount: 1, features: [{}] });

  await writeJsonReports({ weekString: '2026-W41', featuresCount: 2, features: [{}, {}] });

  assert.deepStrictEqual((await fs.readdir(config.reportsDir)).sort(), ['latest.json', 'weekly']);
  assert.deepStrictEqual((await fs.readdir(path.join(config.reportsDir, 'weekly'))).sort(), ['2026-W40.json', '2026-W41.json']);
  assert.strictEqual((await readPublishedSummary()).featuresCount, 2);
});

test('the report is published as compact schemaVersion 2 JSON: one copy of each article, the same document twice', async (t) => {
  await reportsSandbox(t);
  const page = { title: 'A page', url: 'https://example.com/page', domain: 'example.com', snippet: 'x'.repeat(200) };
  const report = {
    weekString: '2026-W41',
    featuresCount: 2,
    telemetry: {},
    features: [1, 2].map(id => ({
      feature: { id },
      ecosystem: { articles: [page], blogs: [page], docs: [] },
      analysis: { groundedSources: [page] },
      delta: { newArticles: [page] },
    })),
  };

  const { weeklyPath, latestPath } = await writeJsonReports(report);

  const body = await fs.readFile(latestPath, 'utf-8');
  assert.strictEqual(body, await fs.readFile(weeklyPath, 'utf-8'), 'the archive of the week and latest.json are one document');
  assert.ok(!body.includes('\n') && !body.includes('": '), 'compact: no line breaks, no padding after a colon');
  assert.strictEqual(body.split('https://example.com/page').length - 1, 1, 'the page is written once, not eight times');

  const published = JSON.parse(body);
  assert.deepStrictEqual(published.articles, { a1: page });
  assert.deepStrictEqual(published.features[1].ecosystem.articles, ['a1']);
  assert.deepStrictEqual(published.features[1].delta.newArticles, ['a1']);
  assert.ok(body.length < JSON.stringify(report, null, 2).length / 3, 'a fraction of the size of the pretty-printed, repeated form');
});

test('a report published before schemaVersion 2 is still a baseline for the safety checks', async (t) => {
  await reportsSandbox(t);
  await publish(JSON.stringify({ weekString: '2026-W35', featuresCount: 7, milestones: [150], telemetry: { featuresAvailable: 9 }, features: [] }, null, 2));

  assert.deepStrictEqual(await readPublishedSummary(), { featuresCount: 7, upstreamCount: 9, milestones: [150], statusTypes: null, weekString: '2026-W35' });
});
