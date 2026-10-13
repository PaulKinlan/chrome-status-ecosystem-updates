import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { config } from '../src/config.js';
import { denormaliseReport, normaliseReport } from '../src/report-schema.js';
import { runEcosystemReport } from '../src/runner.js';
import { GUARDRAIL_LIMITS } from '../src/guardrails.js';
import { escapeWorkflowData } from '../src/github-actions.js';
import { OPENAI_MODEL } from '../src/search/openai.js';
import { GROUNDING_REDIRECT_HOST } from '../src/search/urls.js';
import { installFetchMock } from './_support/fetch-mock.js';
import { installGeminiMock, answer, overloaded, notFound, synthesisText, SYNTHESIS } from './_support/gemini-mock.js';
import { installOpenAiMock, completion } from './_support/openai-mock.js';
import { ANCHOR_POSITIONING, SAMPLE_MAPPING, mappingRoutes, webStatusGroupRoute } from './_support/web-features-mock.js';

/**
 * End-to-end tests of the whole pipeline (ChromeStatus -> investigate ->
 * Markdown/HTML/JSON/RSS + history) with every upstream mocked.
 *
 * The unit tests cover the parts; these cover the seams, which is where the
 * costly failures live: what gets written - or, more importantly, NOT
 * overwritten - when an upstream misbehaves.
 */

const XSSI = ")]}'\n";
const CATEGORY = 'Enabled by default';

/** A ChromeStatus-shaped feature as it appears inside `features_by_type`. */
function rawFeature(id, milestone) {
  return {
    id,
    name: `Test feature ${id}`,
    summary: `Summary of test feature ${id}`,
    blink_components: ['Blink>Test'],
    milestone,
    browsers: {
      chrome: { status: { text: 'Enabled by default' }, bug: `https://crbug.com/${id}` },
      ff: { view: { text: 'No signal' } },
      safari: { view: { text: 'No signal' } },
      webdev: { view: { text: 'No signals' } },
    },
  };
}

/**
 * Mock routes for a ChromeStatus that serves `upstream`, a map of
 * milestone -> number of features. Feature ids are globally unique.
 * A milestone may instead be given as an array of ids already used by an earlier
 * milestone, which lists those features again, as ChromeStatus does when a
 * feature spans releases.
 * Either form may be wrapped as `{ ids, category }` to file the milestone's
 * features under another stage label than "Enabled by default" (the label is
 * what ChromeStatus's `features_by_type` is keyed by, and so what decides a
 * listing's stage).
 * Everything that is not ChromeStatus answers 404, so every enrichment source
 * comes back empty and only the deterministic pipeline logic is exercised.
 */
function chromeStatusRoutes(upstream) {
  let nextId = 1000;
  const routes = [];
  const detailed = new Set();
  for (const [milestone, listing] of Object.entries(upstream)) {
    const { ids: wanted, category = CATEGORY } = (listing !== null && typeof listing === 'object' && !Array.isArray(listing))
      ? listing
      : { ids: listing };
    const ids = Array.isArray(wanted) ? wanted : Array.from({ length: wanted }, () => nextId++);
    const features = ids.map(id => rawFeature(id, Number(milestone)));
    routes.push({
      match: url => url.includes(`/api/v0/features?milestone=${milestone}`),
      text: XSSI + JSON.stringify({ features_by_type: features.length === 0 ? {} : { [category]: features } }),
    });
    for (const f of features) {
      if (detailed.has(f.id)) continue;
      detailed.add(f.id);
      routes.push({
        match: url => url.endsWith(`/api/v0/features/${f.id}`),
        text: XSSI + JSON.stringify(f),
      });
    }
  }
  return routes;
}

/**
 * Gives the test its own empty reports/ and data/ directories (restored after)
 * and captures what the pipeline prints.
 */
async function freshSandbox(t) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'pipeline-test-'));
  const saved = {
    reportsDir: config.reportsDir,
    dataDir: config.dataDir,
    historyFilePath: config.historyFilePath,
    geminiApiKey: config.geminiApiKey,
    geminiModel: config.geminiModel,
    openaiApiKey: config.openaiApiKey,
  };
  config.reportsDir = path.join(root, 'reports');
  config.dataDir = path.join(root, 'data');
  config.historyFilePath = path.join(config.dataDir, 'history.json');

  // Mocked once per test: re-mocking the same method makes restore() unwind to
  // a stale mock.
  const output = { log: [], error: [] };
  t.mock.method(console, 'log', (...args) => { output.log.push(args.join(' ')); });
  t.mock.method(console, 'error', (...args) => { output.error.push(args.join(' ')); });

  t.after(async () => {
    Object.assign(config, saved);
    await fs.rm(root, { recursive: true, force: true });
  });
  return { root, output };
}

/**
 * Runs the pipeline against a mocked upstream and returns what it returned.
 * `gemini`, when given, answers every Gemini request (see gemini-mock.js); it is
 * layered over the ChromeStatus mock, so set `config.geminiApiKey` too.
 * `openai` does the same for OpenAI (set `config.openaiApiKey`).
 * `routes` answer requests ahead of the 404 that everything else gets, after the ChromeStatus ones.
 * `early` are routes that come before even ChromeStatus's (see `crawlClock`, which uses one to watch every request).
 * The web-features mapping is served too (none of the test features is in it), as it is on a healthy
 * day; say `mapping: false` for a run in which it is not published.
 */
async function run(upstream, options = {}, { gemini, openai, routes = [], early = [], mapping = true } = {}) {
  const mock = installFetchMock([...early, ...chromeStatusRoutes(upstream), ...routes, ...(mapping ? mappingRoutes(SAMPLE_MAPPING) : [])], { onUnmatched: 'empty' });
  const ai = gemini ? installGeminiMock(gemini) : null;
  const oa = openai ? installOpenAiMock(openai) : null;
  try {
    const result = await runEcosystemReport({ milestone: '153-154', limit: null, concurrency: 2, ...options });
    return { ...result, calls: mock.calls };
  } finally {
    oa?.restore();
    ai?.restore();
    mock.restore();
  }
}

/** Like run(), but exposes the failure and the request log instead of throwing. */
async function runExpectingFailure(upstream, options = {}, { gemini, early = [] } = {}) {
  const mock = installFetchMock([...early, ...chromeStatusRoutes(upstream)], { onUnmatched: 'empty' });
  const ai = gemini ? installGeminiMock(gemini) : null;
  try {
    await runEcosystemReport({ milestone: '153-154', limit: null, concurrency: 2, ...options });
    assert.fail('the run was expected to be refused, but it completed');
  } catch (err) {
    if (err?.code === 'ERR_ASSERTION') throw err;
    return { error: err, calls: mock.calls };
  } finally {
    ai?.restore();
    mock.restore();
  }
}

const readText = (file) => fs.readFile(file, 'utf-8');
const exists = (file) => fs.access(file).then(() => true, () => false);

/** Snapshot of the published state, to prove a refused run changed nothing. */
async function publishedState() {
  return {
    latest: await readText(path.join(config.reportsDir, 'latest.json')),
    history: await readText(config.historyFilePath),
  };
}

// ---------------------------------------------------------------------------

test('a normal run publishes Markdown, HTML, JSON and RSS plus a history snapshot', async (t) => {
  await freshSandbox(t);

  const { reportData, outputs } = await run({ 153: 6, 154: 6 });

  assert.strictEqual(reportData.featuresCount, 12);
  assert.deepStrictEqual(reportData.milestones, [153, 154]);
  for (const [kind, file] of Object.entries(outputs)) {
    assert.ok(await exists(file), `${kind} output was not written: ${file}`);
  }

  const latest = JSON.parse(await readText(path.join(config.reportsDir, 'latest.json')));
  assert.strictEqual(latest.featuresCount, 12);
  assert.strictEqual(latest.features.length, 12);

  const history = JSON.parse(await readText(config.historyFilePath));
  assert.strictEqual(Object.keys(history.features).length, 12);
  assert.ok(await exists(path.join(config.dataDir, 'history', `${history.lastWeekString}.json`)));
});

test('a second run recognises features it has already reported', async (t) => {
  await freshSandbox(t);

  const first = await run({ 153: 4, 154: 4 });
  assert.ok(first.reportData.features.every(f => f.delta.isNewFeature), 'everything is new on a first run');

  const second = await run({ 153: 4, 154: 4 });
  assert.strictEqual(second.reportData.featuresCount, 8);
  assert.ok(
    second.reportData.features.every(f => f.delta.isNewFeature === false),
    'history from the first run must be loaded, so nothing is new the second time'
  );
});

test('an empty ChromeStatus response is refused, and nothing is written', async (t) => {
  await freshSandbox(t);

  const { error } = await runExpectingFailure({ 153: 0, 154: 0 });

  assert.match(error.message, /no features/i);
  assert.match(error.message, /--force/);
  assert.strictEqual(await exists(config.reportsDir), false, 'no report directory may be created');
  assert.strictEqual(await exists(config.historyFilePath), false, 'no history may be written');
});

test('an empty ChromeStatus response never overwrites what is already published', async (t) => {
  await freshSandbox(t);
  await run({ 153: 6, 154: 6 });
  const before = await publishedState();

  const { error } = await runExpectingFailure({ 153: 0, 154: 0 });

  assert.match(error.message, /no features/i);
  assert.deepStrictEqual(await publishedState(), before, 'published report and history must be byte-identical');
});

test('a report that lost more than half of the published features is refused before the crawl', async (t) => {
  await freshSandbox(t);
  await run({ 153: 6, 154: 6 });
  const before = await publishedState();

  const { error, calls } = await runExpectingFailure({ 153: 2, 154: 1 });

  assert.match(error.message, /3 features/);
  assert.match(error.message, /12/);
  assert.match(error.message, /--force/);
  assert.deepStrictEqual(await publishedState(), before);
  assert.ok(
    !calls.some(url => /\/api\/v0\/features\/\d+$/.test(url)),
    'the refusal must come before any per-feature crawl work'
  );
});

test('force publishes a shrunken report anyway', async (t) => {
  await freshSandbox(t);
  await run({ 153: 6, 154: 6 });

  const { reportData } = await run({ 153: 2, 154: 1 }, { force: true });

  assert.strictEqual(reportData.featuresCount, 3);
  assert.strictEqual(JSON.parse(await readText(path.join(config.reportsDir, 'latest.json'))).featuresCount, 3);
});

test('a forced publish records which safety check it bypassed; a normal one records none', async (t) => {
  await freshSandbox(t);
  await run({ 153: 6, 154: 6 });

  const forced = await run({ 153: 2, 154: 1 }, { force: true });
  assert.strictEqual(forced.reportData.telemetry.qualityOverrides.length, 1);
  assert.match(forced.reportData.telemetry.qualityOverrides[0], /only 3 features/);

  const normal = await run({ 153: 6, 154: 6 });
  assert.deepStrictEqual(normal.reportData.telemetry.qualityOverrides, []);
  assert.deepStrictEqual(normal.reportData.telemetry.statusTypes, config.featureStatuses);
});

test('a feature cap does not hide a collapsed upstream', async (t) => {
  await freshSandbox(t);
  await run({ 153: 6, 154: 6 });
  const before = await publishedState();

  // The scheduled workflow always passes a cap (MAX_FEATURES); a cap that does
  // not truncate anything must not disable the check.
  await runExpectingFailure({ 153: 2, 154: 1 }, { limit: 150 });
  await runExpectingFailure({ 153: 2, 154: 1 }, { limit: 2 });

  assert.deepStrictEqual(await publishedState(), before);
});

test('a healthy upstream is not mistaken for a collapse because of a feature cap', async (t) => {
  await freshSandbox(t);
  await run({ 153: 6, 154: 6 });

  const { reportData } = await run({ 153: 6, 154: 6 }, { limit: 5 });

  assert.strictEqual(reportData.featuresCount, 5);
});

test('the shrink check compares like with like: a different milestone window is not compared', async (t) => {
  await freshSandbox(t);
  await run({ 153: 6, 154: 6 });

  // One milestone against a published two-milestone window: naturally smaller.
  const { reportData } = await run({ 153: 3 }, { milestone: '153' });

  assert.strictEqual(reportData.featuresCount, 3);
});

test('the shrink check ignores a tiny published baseline', async (t) => {
  await freshSandbox(t);
  await run({ 153: 3, 154: 3 });

  const { reportData } = await run({ 153: 1, 154: 1 });

  assert.strictEqual(reportData.featuresCount, 2);
});

test('the shrink check ignores a published report made with different status filters', async (t) => {
  await freshSandbox(t);
  await run({ 153: 6, 154: 6 });

  const { reportData } = await run({ 153: 2, 154: 1 }, { statusTypes: ['enabled'] });

  assert.strictEqual(reportData.featuresCount, 3);
});

test('a single-feature run is never treated as a shrunken report', async (t) => {
  await freshSandbox(t);
  await run({ 153: 6, 154: 6 });

  const { reportData } = await run({ 153: 6, 154: 6 }, { featureId: 1000 });

  assert.strictEqual(reportData.featuresCount, 1);
});

test('damaged history stops the run before any network request is made', async (t) => {
  await freshSandbox(t);
  await fs.mkdir(config.dataDir, { recursive: true });
  await fs.writeFile(config.historyFilePath, '{"lastRun": "2026-', 'utf-8');

  const { error, calls } = await runExpectingFailure({ 153: 6, 154: 6 });

  assert.match(error.message, /No usable history snapshot/);
  assert.deepStrictEqual(calls, [], 'must fail before spending any requests');
});

test('a failed history write fails the run instead of being swallowed', async (t) => {
  const { root } = await freshSandbox(t);
  // A file where the data directory should be makes saveHistory fail.
  const blocker = path.join(root, 'blocker');
  await fs.writeFile(blocker, 'x');
  config.dataDir = path.join(blocker, 'data');
  config.historyFilePath = path.join(config.dataDir, 'history.json');

  // loadHistory sees ENOTDIR (= missing), the reports are written, then the save fails.
  const { error } = await runExpectingFailure({ 153: 2, 154: 2 });

  assert.match(error.message, /Failed to save history snapshot/);
});

// --- run health: how the LLM calls went ---------------------------------------------------------------------------

/**
 * A Gemini that writes a synthesis for every feature except those named, for
 * which every model is overloaded. Anything else the pipeline asks (query
 * planning, grounded search) gets an answer that needs no further handling.
 */
function geminiWriting({ except = [] } = {}) {
  return call => {
    const prompt = call.body.contents[0].parts[0].text;
    const name = prompt.match(/- Feature Name: (Test feature \d+)/)?.[1];
    if (call.grounded && name) return except.includes(name) ? overloaded() : answer(synthesisText());
    return answer(JSON.stringify({ queries: [{ query: 'test', intent: 'api-syntax', description: 'test' }] }));
  };
}

/** The first four features of Chrome 153 (ids are handed out from 1000). */
const UNLUCKY = ['Test feature 1000', 'Test feature 1001', 'Test feature 1002', 'Test feature 1003'];

function useGemini() {
  config.geminiApiKey = 'test-key-do-not-log';
  config.geminiModel = 'gemini-3.8-flash';
}

/** Sets (or, with undefined, removes) an environment variable for the length of one test. */
function setEnv(t, name, value) {
  const before = process.env[name];
  if (value === undefined) delete process.env[name];
  else process.env[name] = value;
  t.after(() => {
    if (before === undefined) delete process.env[name];
    else process.env[name] = before;
  });
}

test('without an AI key the report records that no synthesis was expected, and nothing warns about it', async (t) => {
  const { output } = await freshSandbox(t);

  const { reportData, outputs } = await run({ 153: 6, 154: 6 });

  assert.deepStrictEqual(reportData.telemetry.aiCoverage, { configured: false, withAi: 0, total: 12, ratio: 0 });
  assert.strictEqual(reportData.telemetry.llm.attempts, 0);
  assert.ok(!output.error.some(line => /AI synthesis|\[LLM/.test(line)), output.error.join('\n'));
  assert.ok(!/AI synthesis/.test(await readText(outputs.markdown)));
  assert.ok(!/AI synthesis/.test(await readText(outputs.html)));
});

test('an AI-enabled run records its LLM calls and shows that every feature got a synthesis', async (t) => {
  const { output } = await freshSandbox(t);
  useGemini();

  const { reportData, outputs } = await run({ 153: 6, 154: 6 }, {}, { gemini: geminiWriting() });

  const { aiCoverage, llm } = reportData.telemetry;
  assert.deepStrictEqual(aiCoverage, { configured: true, withAi: 12, total: 12, ratio: 1 });
  assert.deepStrictEqual(llm.byStage['gemini/synthesis'], { ok: 12, failed: 0, failures: {} });
  assert.strictEqual(llm.failed, 0);
  assert.ok(!output.error.some(line => /AI synthesis|\[LLM/.test(line)), output.error.join('\n'));

  const published = JSON.parse(await readText(path.join(config.reportsDir, 'latest.json')));
  assert.deepStrictEqual(published.telemetry.aiCoverage, aiCoverage);
  assert.deepStrictEqual(published.telemetry.llm, llm);
  assert.match(await readText(outputs.markdown), /\*\*AI synthesis:\*\* 12 of 12 features/);
  assert.match(await readText(outputs.html), /AI synthesis 12\/12/);
});

test('telemetry names the engine that writes the prose: Gemini, else OpenAI, else the heuristic engine', async (t) => {
  await freshSandbox(t);
  const openai = () => completion(JSON.stringify(SYNTHESIS));
  const provider = async (ai) => (await run({ 153: 1 }, { milestone: '153' }, ai)).reportData.telemetry.aiProvider;

  assert.strictEqual(await provider({}), 'Heuristic Engine');

  config.openaiApiKey = 'sk-test-key-do-not-log';
  assert.strictEqual(await provider({ openai }), `OpenAI ${OPENAI_MODEL}`);

  useGemini();
  assert.strictEqual(await provider({ gemini: geminiWriting(), openai }), 'Google Gemini (gemini-3.8-flash)',
    'Gemini is preferred when both keys are set');
});

test('a run in which features got no AI synthesis still publishes, but says so loudly', async (t) => {
  const { output } = await freshSandbox(t);
  useGemini();
  setEnv(t, 'GITHUB_ACTIONS', undefined);

  const { reportData, outputs } = await run({ 153: 6, 154: 6 }, {}, { gemini: geminiWriting({ except: UNLUCKY }) });

  assert.strictEqual(reportData.featuresCount, 12, 'a report without some of the prose is still published');
  assert.deepStrictEqual(reportData.telemetry.aiCoverage, { configured: true, withAi: 8, total: 12, ratio: 0.667 });

  const synthesis = reportData.telemetry.llm.byStage['gemini/synthesis'];
  assert.strictEqual(synthesis.ok, 8);
  assert.ok(synthesis.failed >= 4, 'every unlucky feature failed at least once');
  assert.deepStrictEqual(Object.keys(synthesis.failures), ['http_503']);

  const logged = output.error.join('\n');
  assert.match(logged, /\[LLM\] gemini\/synthesis failed \(http_503\) on gemini-3\.8-flash/);
  assert.match(logged, /\[LLM summary\] gemini\/synthesis: \d+ of \d+ attempts failed \(http_503 ×\d+\)/);
  assert.match(logged, /\[LLM summary\] model gemini-3\.8-flash: \d+ of \d+ attempts failed/);
  assert.match(logged, /Only 8 of 12 features \(67%\) received AI synthesis/);
  assert.ok(!output.log.some(line => line.startsWith('::warning')), 'no workflow annotation outside GitHub Actions');
  assert.match(await readText(outputs.markdown), /\*\*AI synthesis:\*\* 8 of 12 features/);
  assert.match(await readText(outputs.html), /AI synthesis 8\/12/);
});

test('on GitHub Actions the low-coverage warning is also a workflow annotation, escaped for the runner', async (t) => {
  const { output } = await freshSandbox(t);
  useGemini();
  setEnv(t, 'GITHUB_ACTIONS', 'true');

  await run({ 153: 6, 154: 6 }, {}, { gemini: geminiWriting({ except: UNLUCKY }) });

  const annotations = output.log.filter(line => line.startsWith('::warning'));
  assert.strictEqual(annotations.length, 1);
  assert.match(annotations[0], /^::warning title=Low AI synthesis coverage::Only 8 of 12 features \(67%25\) received AI synthesis/);
});

test('one missing synthesis is within tolerance: its failure is logged but the coverage warning is not raised', async (t) => {
  const { output } = await freshSandbox(t);
  useGemini();
  setEnv(t, 'GITHUB_ACTIONS', 'true');

  const { reportData } = await run({ 153: 6, 154: 6 }, {}, { gemini: geminiWriting({ except: [UNLUCKY[0]] }) });

  assert.deepStrictEqual(reportData.telemetry.aiCoverage, { configured: true, withAi: 11, total: 12, ratio: 0.917 });
  const logged = output.error.join('\n');
  assert.match(logged, /\[LLM summary\] gemini\/synthesis/);
  assert.ok(!/received AI synthesis/.test(logged), logged);
  assert.ok(!output.log.some(line => line.startsWith('::warning')));
});

test('LLM statistics start from zero on every run, so one run cannot colour the next', async (t) => {
  await freshSandbox(t);
  useGemini();

  const first = await run({ 153: 6, 154: 6 }, {}, { gemini: geminiWriting({ except: UNLUCKY }) });
  assert.ok(first.reportData.telemetry.llm.failed > 0);

  const second = await run({ 153: 6, 154: 6 }, {}, { gemini: geminiWriting() });
  assert.strictEqual(second.reportData.telemetry.llm.failed, 0);
  assert.deepStrictEqual(second.reportData.telemetry.aiCoverage, { configured: true, withAi: 12, total: 12, ratio: 1 });
});

test('model health starts fresh on every run: a model that was retired in one run is asked again in the next', async (t) => {
  await freshSandbox(t);
  useGemini();
  const writing = geminiWriting();

  // First run: the configured model is gone, the fallbacks write every synthesis.
  const first = await run({ 153: 6, 154: 6 }, {}, {
    gemini: call => (call.model === config.geminiModel ? notFound(call.model) : writing(call)),
  });
  assert.strictEqual(first.reportData.telemetry.llm.byModel['gemini-3.8-flash'].ok, 0);
  assert.strictEqual(first.reportData.telemetry.aiCoverage.withAi, 12, 'the fallbacks kept every feature covered');

  // Second run: it is back. A leftover "dead" mark from the first run would keep it out of the chain.
  const second = await run({ 153: 6, 154: 6 }, {}, { gemini: writing });
  assert.ok(second.reportData.telemetry.llm.byModel['gemini-3.8-flash'].ok >= 12, JSON.stringify(second.reportData.telemetry.llm.byModel));
});

// --- what the safety checks remember, and how visibly they speak ---------------------------------------------------

test('the report records how many features ChromeStatus listed, not only how many survived the cap', async (t) => {
  await freshSandbox(t);

  const { reportData } = await run({ 153: 6, 154: 6 }, { limit: 5 });

  assert.strictEqual(reportData.featuresCount, 5);
  assert.strictEqual(reportData.telemetry.featuresAvailable, 12);
  const published = JSON.parse(await readText(path.join(config.reportsDir, 'latest.json')));
  assert.strictEqual(published.telemetry.featuresAvailable, 12);
});

test('a capped report still guards against a collapse: the next run is compared with what ChromeStatus listed', async (t) => {
  await freshSandbox(t);
  // The scheduled workflow always sets a cap, so the published report holds fewer features than ChromeStatus listed.
  await run({ 153: 6, 154: 6 }, { limit: 5 });
  const before = await publishedState();

  // 3 is 60% of the 5 features the report kept, but only 25% of the 12 that were listed.
  const { error } = await runExpectingFailure({ 153: 2, 154: 1 }, { limit: 5 });

  assert.match(error.message, /only 3 features/);
  assert.match(error.message, /it listed 12 for Chrome 153, 154 when the published report \(.+\) was made/);
  assert.deepStrictEqual(await publishedState(), before);
});

test('a report from before upstream counts were recorded is compared by the features it holds', async (t) => {
  await freshSandbox(t);
  await run({ 153: 6, 154: 6 });
  const latestPath = path.join(config.reportsDir, 'latest.json');
  const latest = JSON.parse(await readText(latestPath));
  delete latest.telemetry.featuresAvailable;
  await fs.writeFile(latestPath, JSON.stringify(latest));
  const before = await publishedState();

  const { error } = await runExpectingFailure({ 153: 2, 154: 1 });

  assert.match(error.message, /the published report \(.+\) has 12 for Chrome 153, 154/);
  assert.deepStrictEqual(await publishedState(), before);
});

test('a forced publish says so in the Markdown header, the HTML badges and a workflow annotation', async (t) => {
  const { output } = await freshSandbox(t);
  setEnv(t, 'GITHUB_ACTIONS', 'true');
  await run({ 153: 6, 154: 6 });

  const { outputs } = await run({ 153: 2, 154: 1 }, { force: true });

  assert.match(await readText(outputs.markdown), /^> ⚠️ \*\*Safety check overridden \(--force\):\*\* .*only 3 features/m);
  assert.match(
    await readText(outputs.html),
    /<span class="badge badge-danger" title="[^"]*only 3 features[^"]*">⚠ Safety check overridden<\/span>/
  );
  const annotations = output.log.filter(line => line.startsWith('::warning title=Safety check overridden::'));
  assert.strictEqual(annotations.length, 1, output.log.join('\n'));
  assert.match(annotations[0], /only 3 features/);
});

test('a normal run shows no override notice anywhere, even on GitHub Actions', async (t) => {
  const { output } = await freshSandbox(t);
  setEnv(t, 'GITHUB_ACTIONS', 'true');

  const { outputs } = await run({ 153: 6, 154: 6 });

  assert.ok(!/overridden/i.test(await readText(outputs.markdown)));
  assert.ok(!/overridden/i.test(await readText(outputs.html)));
  assert.ok(!output.log.some(line => line.startsWith('::')), output.log.join('\n'));
});

test('off GitHub Actions a forced publish is logged but emits no workflow command', async (t) => {
  const { output } = await freshSandbox(t);
  setEnv(t, 'GITHUB_ACTIONS', undefined);
  await run({ 153: 6, 154: 6 });

  await run({ 153: 2, 154: 1 }, { force: true });

  assert.ok(!output.log.some(line => line.startsWith('::')), output.log.join('\n'));
  assert.ok(
    output.error.some(line => /only 3 features.*Publishing anyway because --force was given/.test(line)),
    output.error.join('\n')
  );
});

test('a milestone that comes back empty while the others do not is flagged as a possibly partial response', async (t) => {
  const { output } = await freshSandbox(t);

  const { reportData } = await run({ 153: 6, 154: 0 });

  // The totals alone cannot tell this from a quiet release, so the run goes ahead; it just says what it noticed.
  assert.strictEqual(reportData.featuresCount, 6);
  assert.match(
    output.error.join('\n'),
    /no matching features for Chrome 154 although other milestones had some; the response may be partial/
  );
});

test('a milestone whose features are all listed under an earlier one is not an empty response', async (t) => {
  const { output } = await freshSandbox(t);

  const { reportData } = await run({ 153: 6, 154: [1000, 1001] });

  assert.strictEqual(reportData.featuresCount, 6);
  assert.strictEqual(reportData.telemetry.featuresAvailable, 6);
  assert.ok(!/may be partial/.test(output.error.join('\n')), output.error.join('\n'));
});

test('the LLM failure summary is still logged when the run is then refused for too many failed features', async (t) => {
  const { output } = await freshSandbox(t);
  useGemini();
  setEnv(t, 'GITHUB_ACTIONS', undefined);
  // Seven features whose history entry is damaged: their week-over-week delta throws, after the LLM was asked.
  await fs.mkdir(config.dataDir, { recursive: true });
  const features = Object.fromEntries(Array.from({ length: 7 }, (_, i) => [1004 + i, { knownUrls: 5 }]));
  await fs.writeFile(config.historyFilePath, JSON.stringify({ lastRun: '2026-01-01T00:00:00.000Z', features }));
  const historyBefore = await readText(config.historyFilePath);

  const { error } = await runExpectingFailure({ 153: 6, 154: 6 }, {}, { gemini: geminiWriting({ except: UNLUCKY }) });

  assert.match(error.message, /7 of 12 features failed to process/);
  assert.match(error.message, /Refusing to publish: nothing was written and the published reports are untouched\. Re-run with --force if this is expected\.$/, 'features that failed are not a matter of time: only --force is offered');
  const logged = output.error.join('\n');
  assert.match(logged, /Skipped "Test feature 1004"/);
  assert.match(logged, /\[LLM summary\] gemini\/synthesis: \d+ of \d+ attempts failed/);
  assert.strictEqual(await exists(config.reportsDir), false, 'nothing may be published');
  assert.strictEqual(await readText(config.historyFilePath), historyBefore, 'the history must be left alone');
});

// --- which listing of a multi-milestone feature is reported ------------------

const DEV_TRIAL_LABEL = 'In developer trial (Behind a flag)';

test('a feature ChromeStatus lists under two milestones is reported once, at its most advanced stage', async (t) => {
  await freshSandbox(t);

  // 1000 starts as a developer trial in 153 and ships in 154; 1001 is only ever a trial.
  const { reportData, outputs } = await run({
    153: { ids: 2, category: DEV_TRIAL_LABEL },
    154: { ids: [1000], category: CATEGORY },
  });

  assert.strictEqual(reportData.featuresCount, 2, 'one entry per feature');
  assert.strictEqual(reportData.telemetry.featuresAvailable, 2);
  const byId = Object.fromEntries(reportData.features.map(item => [item.feature.id, item.feature]));

  assert.strictEqual(byId[1000].category, CATEGORY, 'the shipped stage, not the earlier trial');
  assert.strictEqual(byId[1000].statusType, 'enabled');
  assert.strictEqual(byId[1000].milestone, 154);
  assert.strictEqual(byId[1000].firstListedMilestone, 153);
  assert.strictEqual(byId[1001].category, DEV_TRIAL_LABEL);
  assert.strictEqual(byId[1001].milestone, 153);
  assert.strictEqual(byId[1001].firstListedMilestone, 153);

  // The earlier stage is not hidden: every format that names the milestone says where the feature started.
  const markdown = await readText(outputs.markdown);
  assert.strictEqual(markdown.match(/first listed in Chrome 153/g)?.length, 1, 'only the feature that moved gets the note');
  assert.match(markdown, /\*\*Milestone:\*\* Chrome 154 \(Enabled by default\) · first listed in Chrome 153/);
  const featureFile = await readText(path.join(config.reportsDir, 'features', `${byId[1000].slug}.md`));
  assert.match(featureFile, /\*\*Milestone:\*\* Chrome 154 \(first listed in Chrome 153\) \| \*\*Category:\*\* Enabled by default/);
  assert.match(await readText(outputs.html), /<span class="badge" title="first listed in Chrome 153">Chrome 154<\/span>/);
  assert.strictEqual((await readText(outputs.html)).match(/first listed in Chrome/g)?.length, 1);
});

test('a feature that did not move gets no "first listed" note anywhere', async (t) => {
  await freshSandbox(t);

  const { outputs } = await run({ 153: 3, 154: [1000] });

  // 1000 is listed twice under the same stage: its earliest milestone is the one reported, so there is nothing to add.
  assert.ok(!/first listed in/.test(await readText(outputs.markdown)));
  assert.ok(!/first listed in/.test(await readText(outputs.html)));
});

test('a cap keeps the newest milestones, not whichever the oldest one listed first', async (t) => {
  await freshSandbox(t);

  const { reportData } = await run({ 153: 4, 154: 4 }, { limit: 3 });

  assert.strictEqual(reportData.featuresCount, 3);
  assert.deepStrictEqual(reportData.features.map(item => item.feature.milestone), [154, 154, 154]);
  assert.strictEqual(reportData.telemetry.featuresAvailable, 8, 'the safety baseline is what ChromeStatus listed, not what the cap kept');
});

test('a cap prefers a feature\'s newest stage over an older listing of another feature', async (t) => {
  await freshSandbox(t);

  // 1000 and 1001 are developer trials in 153; 1000 ships in 154. With room for one, the shipped feature is the one reported.
  const { reportData } = await run({
    153: { ids: 2, category: DEV_TRIAL_LABEL },
    154: { ids: [1000], category: CATEGORY },
  }, { limit: 1 });

  assert.deepStrictEqual(reportData.features.map(item => item.feature.id), [1000]);
  assert.strictEqual(reportData.features[0].feature.category, CATEGORY);
});

test('a feature in a stepped rollout is investigated by default and left out when the status filter does not name it', async (t) => {
  await freshSandbox(t);
  const upstream = { 153: { ids: 3, category: 'Stepped rollout' }, 154: 2 };

  const byDefault = await run(upstream);
  assert.strictEqual(byDefault.reportData.featuresCount, 5);
  assert.ok(byDefault.reportData.telemetry.statusTypes.includes('rollout'));
  assert.strictEqual(byDefault.reportData.features.filter(item => item.feature.statusType === 'rollout').length, 3);

  const filtered = await run(upstream, { statusTypes: ['enabled'] });
  assert.strictEqual(filtered.reportData.featuresCount, 2);
  assert.ok(filtered.reportData.features.every(item => item.feature.statusType === 'enabled'));
});

test('widening the status list on a repository whose last report used the old one is never refused', async (t) => {
  await freshSandbox(t);
  const upstream = { 153: { ids: 8, category: 'Stepped rollout' }, 154: 12 };

  // What the checked-in report looks like: made with the four statuses that were the default before `rollout` was added.
  const published = await run(upstream, { statusTypes: ['enabled', 'origin-trial', 'flagged', 'deprecated'] });
  assert.strictEqual(published.reportData.featuresCount, 12);

  const next = await run(upstream);
  assert.strictEqual(next.reportData.featuresCount, 20, 'the rollout features are picked up');
  assert.deepStrictEqual(next.reportData.telemetry.qualityOverrides, []);
});

test('a feature that ChromeStatus lists under several milestones does not look changed the next time', async (t) => {
  await freshSandbox(t);
  const upstream = {
    153: { ids: 2, category: DEV_TRIAL_LABEL },
    154: { ids: [1000], category: CATEGORY },
  };

  await run(upstream);
  const second = await run(upstream);

  assert.ok(second.reportData.features.every(item => item.delta.isNewFeature === false));
  assert.ok(
    second.reportData.features.every(item => item.delta.statusChanged === false),
    'the same listing must be chosen every run, or the report would announce a status change that never happened'
  );
});

test('a report whose last run saw the earlier stage announces the move to the later one', async (t) => {
  await freshSandbox(t);

  // Last week ChromeStatus only knew the developer trial (this is how the pre-fix reports described such features).
  await run({ 153: { ids: 1, category: DEV_TRIAL_LABEL } }, { milestone: '153' });
  const thisWeek = await run({
    153: { ids: [1000], category: DEV_TRIAL_LABEL },
    154: { ids: [1000], category: CATEGORY },
  });

  const [item] = thisWeek.reportData.features;
  assert.strictEqual(item.delta.statusChanged, true);
  assert.strictEqual(item.delta.previousStatus, DEV_TRIAL_LABEL);
  assert.strictEqual(item.feature.category, CATEGORY);
});

test('--feature on a multi-milestone feature investigates its most advanced listing', async (t) => {
  await freshSandbox(t);

  const { reportData } = await run({
    153: { ids: 1, category: DEV_TRIAL_LABEL },
    154: { ids: [1000], category: CATEGORY },
  }, { featureId: 1000 });

  assert.strictEqual(reportData.featuresCount, 1);
  assert.strictEqual(reportData.features[0].feature.milestone, 154);
  assert.strictEqual(reportData.features[0].feature.firstListedMilestone, 153);
});

test('a feature fetched directly (not listed in the window) has no earlier listing to report', async (t) => {
  const { output } = await freshSandbox(t);

  // 1002 is only listed under Chrome 155, outside the 153-154 window, so --feature has to fetch it by id.
  const { reportData, outputs } = await run({ 153: 1, 154: 1, 155: 1 }, { featureId: 1002 });

  assert.match(output.log.join('\n'), /Fetching single feature #1002 directly/, 'the direct path was taken');
  assert.strictEqual(reportData.features.length, 1);
  const { feature } = reportData.features[0];
  assert.strictEqual(feature.id, 1002);
  assert.strictEqual(feature.milestone, 155);
  assert.strictEqual(feature.firstListedMilestone, 155, 'there is no earlier listing, so it reads as the milestone itself');
  assert.ok(!/first listed in/.test(await readText(outputs.markdown)));
});

// --- the sources Gemini cites ---------------------------------------------------------------------------------------

const GROUNDING_REDIRECT = 'https://vertexaisearch.cloud.google.com/grounding-api-redirect/';
const citedPage = id => `https://blog.example/test-feature-${id}/review`;
const otherPage = id => `https://other.example/cooking/${id}`;
const NO_ADOPTION = { considered: 0, alreadyListed: 0, added: 0, rejected: 0, unread: 0, skipped: 0 };
const withoutColor = line => line.replace(/\x1b\[[0-9;]*m/g, '');

const htmlPage = (title, text) => ({ text: `<html><head><title>${title}</title></head><body><p>${text}</p></body></html>`, headers: { 'content-type': 'text/html; charset=utf-8' } });

/**
 * The redirect service, and the two pages behind it, for the features with these ids: a link to a page about
 * the feature and one to a page about something else. A page has to be read to be added.
 */
const groundingRoutes = ids => ids.flatMap(id => [
  { match: `${GROUNDING_REDIRECT}good${id}`, status: 302, headers: { location: citedPage(id) }, text: '' },
  { match: `${GROUNDING_REDIRECT}bad${id}`, status: 302, headers: { location: otherPage(id) }, text: '' },
  { match: citedPage(id), ...htmlPage(`Test feature ${id}, reviewed`, `A review of Test feature ${id}.`) },
  { match: otherPage(id), ...htmlPage('Cooking', 'A recipe.') },
]);

/**
 * A Gemini whose synthesis for "Test feature N" cites those two links. The web
 * search finds nothing; the relevance check finds a candidate relevant when
 * its address names the feature.
 */
function geminiCiting() {
  return call => {
    const prompt = call.body.contents[0].parts[0].text;
    if (call.grounded) {
      const id = prompt.match(/- Feature Name: Test feature (\d+)/)?.[1];
      if (!id) return answer('Nothing found.');
      return answer(synthesisText(), {
        groundingMetadata: {
          webSearchQueries: ['test feature'],
          groundingChunks: [
            { web: { uri: `${GROUNDING_REDIRECT}good${id}`, title: 'blog.example' } },
            { web: { uri: `${GROUNDING_REDIRECT}bad${id}`, title: 'other.example' } },
          ],
        },
      });
    }
    const block = /BEGIN UNTRUSTED CANDIDATE DATA\n([\s\S]*?)\nEND UNTRUSTED CANDIDATE DATA/.exec(prompt);
    return answer(JSON.stringify({
      results: JSON.parse(block[1]).map(item => ({
        id: item.id,
        isRelevant: item.url.includes('/test-feature-'),
        confidence: 90,
        reason: 'Stand-in verdict',
      })),
    }));
  };
}

test('the sources Gemini cites are real pages, are checked, and count towards momentum; none of its links is published', async (t) => {
  const { output } = await freshSandbox(t);
  useGemini();
  setEnv(t, 'GITHUB_ACTIONS', undefined);

  const { reportData, outputs } = await run({ 153: 3 }, { milestone: '153' }, { gemini: geminiCiting(), routes: groundingRoutes([1000, 1001, 1002]) });

  assert.strictEqual(reportData.featuresCount, 3);
  for (const { feature, ecosystem, analysis } of reportData.features) {
    assert.deepStrictEqual(ecosystem.articles.map(article => article.url), [citedPage(feature.id)], 'only the page about the feature was kept');
    assert.strictEqual(ecosystem.articles[0].verifiedBy, 'llm');
    assert.deepStrictEqual(analysis.groundedSources.map(article => article.url), [citedPage(feature.id)]);
    assert.strictEqual(analysis.momentumScore, 10, 'the page counts: one article is worth ten points');
    assert.strictEqual(analysis.momentumLevel, 'Emerging');
  }
  assert.deepStrictEqual(reportData.telemetry.grounding, {
    found: 6,
    redirects: 6,
    resolved: 6,
    duplicates: 0,
    dropped: {},
    adoption: { considered: 6, alreadyListed: 0, added: 3, rejected: 3, unread: 0, skipped: 0 },
  });

  // Nothing Google minted for a request is left in anything that is published, or in the history.
  for (const [kind, file] of Object.entries(outputs)) {
    assert.ok(!(await readText(file)).includes('vertexaisearch'), `the ${kind} output still holds one of Gemini's links`);
  }
  const latest = await readText(path.join(config.reportsDir, 'latest.json'));
  assert.ok(!latest.includes('vertexaisearch'));
  assert.ok(latest.includes(citedPage(1000)));
  const history = JSON.parse(await readText(config.historyFilePath));
  assert.ok(history.features[1000].knownUrls.includes(citedPage(1000)));
  assert.deepStrictEqual(history.telemetry.grounding, reportData.telemetry.grounding);

  const logged = [...output.log, ...output.error].map(withoutColor).join('\n');
  assert.match(logged, /\[Grounding summary\] 6 source\(s\) cited by Gemini's search grounding; 6 of 6 redirect link\(s\) led to the real page/);
  assert.match(logged, /\[Grounding summary\] Of 6 source\(s\) the AI synthesis cited: 0 already listed, 3 verified and added to the articles, 3 rejected as not about the feature/);
  assert.ok(!/could not be followed/.test(logged), 'nothing to warn about');
});

test('when none of Gemini\'s links can be followed the run says so, still publishes, and keeps every synthesis', async (t) => {
  const { output } = await freshSandbox(t);
  useGemini();
  setEnv(t, 'GITHUB_ACTIONS', 'true');

  // No route for the redirect service: every link answers 404, as an expired one does.
  const { reportData } = await run({ 153: 3 }, { milestone: '153' }, { gemini: geminiCiting() });

  assert.strictEqual(reportData.featuresCount, 3);
  assert.deepStrictEqual(reportData.telemetry.aiCoverage, { configured: true, withAi: 3, total: 3, ratio: 1 });
  assert.deepStrictEqual(reportData.telemetry.grounding, {
    found: 6,
    redirects: 6,
    resolved: 0,
    duplicates: 0,
    dropped: { expired: 6 },
    adoption: NO_ADOPTION,
  });
  assert.ok(reportData.features.every(({ ecosystem }) => ecosystem.articles.length === 0));

  assert.match(output.error.join('\n'), /None of the 6 redirect link\(s\) in Gemini's search grounding could be followed to a page/);
  const annotations = output.log.filter(line => line.startsWith('::warning'));
  assert.strictEqual(annotations.length, 1);
  assert.match(annotations[0], /^::warning title=Gemini grounding links could not be followed::None of the 6 redirect link\(s\)/);
});

test('grounding statistics start from zero on every run', async (t) => {
  await freshSandbox(t);
  useGemini();
  const ai = { gemini: geminiCiting(), routes: groundingRoutes([1000, 1001]) };

  const first = await run({ 153: 2 }, { milestone: '153' }, ai);
  const second = await run({ 153: 2 }, { milestone: '153' }, ai);

  assert.strictEqual(first.reportData.telemetry.grounding.found, 4);
  assert.deepStrictEqual(second.reportData.telemetry.grounding, first.reportData.telemetry.grounding);
});

test('a source Gemini cited is remembered by its real address: new once, not every week', async (t) => {
  await freshSandbox(t);
  useGemini();
  const ai = { gemini: geminiCiting(), routes: groundingRoutes([1000, 1001]) };

  const first = await run({ 153: 2 }, { milestone: '153' }, ai);
  assert.ok(first.reportData.features.every(({ delta }) => delta.isNewFeature && delta.newArticlesCount === 1));

  const second = await run({ 153: 2 }, { milestone: '153' }, ai);
  assert.ok(
    second.reportData.features.every(({ delta }) => delta.isNewFeature === false && delta.newArticlesCount === 0),
    JSON.stringify(second.reportData.features.map(({ delta }) => [delta.isNewFeature, delta.newArticlesCount]))
  );
});

test('history from before the cited pages were kept loads, and reports them as new that once', async (t) => {
  await freshSandbox(t);
  useGemini();
  // The shape the previous version wrote: Gemini's expiring links were left out of knownUrls.
  await fs.mkdir(config.dataDir, { recursive: true });
  await fs.writeFile(config.historyFilePath, JSON.stringify({
    lastRun: '2026-09-30T00:00:00.000Z',
    lastWeekString: '2026-W40',
    features: {
      1000: {
        id: 1000,
        name: 'Test feature 1000',
        milestone: 153,
        status: CATEGORY,
        lastSeen: '2026-09-30T00:00:00.000Z',
        knownUrls: [],
        lastMomentumLevel: 'High',
        lastConsensus: 'Chromium-Led',
      },
    },
  }));

  const { reportData } = await run({ 153: 2 }, { milestone: '153' }, { gemini: geminiCiting(), routes: groundingRoutes([1000, 1001]) });

  const known = reportData.features.find(({ feature }) => feature.id === 1000);
  assert.strictEqual(known.delta.isNewFeature, false, 'the feature is recognised from the old history');
  assert.strictEqual(known.delta.newArticlesCount, 1, 'its cited page was never recorded, so it is new once');
  const other = reportData.features.find(({ feature }) => feature.id === 1001);
  assert.strictEqual(other.delta.isNewFeature, true);
});

// --- the web-features mapping ---------------------------------------------------------------------------------------

/** A mapping that places the features 1000 and 1001 in one group, and says only chrome-status.json and wpt.json are published. */
const TEST_GROUP = {
  chromeStatus: { 'test-group': [{ id: 1000, name: 'Test feature 1000' }, { id: 1001, name: 'Test feature 1001' }] },
  wpt: { 'test-group': { url: 'https://wpt.fyi/results?q=feature:test-group' } },
};
const testGroupRoutes = () => [
  ...mappingRoutes(TEST_GROUP),
  webStatusGroupRoute('test-group', { ...ANCHOR_POSITIONING, feature_id: 'test-group', name: 'Test group' }),
];

test('each feature is read for the web-features group it is in, and the run reports how many were placed', async (t) => {
  const { output } = await freshSandbox(t);

  const { reportData, calls } = await run({ 153: 3 }, { milestone: '153' }, { routes: testGroupRoutes(), mapping: false });

  const byId = Object.fromEntries(reportData.features.map(({ feature, ecosystem }) => [feature.id, ecosystem]));
  assert.strictEqual(byId[1000].webFeature.id, 'test-group');
  assert.strictEqual(byId[1001].webFeature.groupSize, 2);
  assert.strictEqual(byId[1000].baseline.featureId, 'test-group');
  assert.strictEqual(byId[1000].wpt.passRates.stable.chrome, 96.8);
  assert.strictEqual(byId[1002].webFeature, null, 'the third is in no group');
  assert.strictEqual(byId[1002].wpt, null);

  assert.deepStrictEqual(reportData.telemetry.webFeatures, {
    mappings: { available: true, chromeStatusIds: 2, groups: 1, missing: ['standards-positions.json', 'chrome-use-counters.json'] },
    features: { mapped: 2, unmapped: 1 },
    webstatus: { requests: 1, ok: 1, absent: 0, failed: 0 },
  });
  assert.strictEqual(calls.filter(url => url.includes('web-features-mappings')).length, 4, 'each mapping file once, for all three features');
  assert.strictEqual(calls.filter(url => url.startsWith('https://api.webstatus.dev/v1/features/test-group?')).length, 1, 'one request for a group of two');

  const history = JSON.parse(await readText(config.historyFilePath));
  assert.deepStrictEqual(history.telemetry.webFeatures, reportData.telemetry.webFeatures);

  const logged = [...output.log, ...output.error].map(withoutColor).join('\n');
  assert.match(logged, /\[Web-features summary\] 2 of 3 feature\(s\) belong to a web-features group; not loaded: standards-positions\.json, chrome-use-counters\.json/);
  assert.match(logged, /\[Web-features summary\] webstatus\.dev answered 1 of 1 request\(s\)/);
  assert.ok(!/mapping could not be loaded/.test(logged), 'nothing to warn about');
});

test('when the mapping cannot be loaded the run says so, still publishes, and records it', async (t) => {
  const { output } = await freshSandbox(t);
  setEnv(t, 'GITHUB_ACTIONS', 'true');

  const { reportData } = await run({ 153: 2 }, { milestone: '153' }, { mapping: false });

  assert.strictEqual(reportData.featuresCount, 2);
  assert.ok(reportData.features.every(({ ecosystem }) => ecosystem.webFeature === null && ecosystem.wpt === null));
  assert.deepStrictEqual(reportData.telemetry.webFeatures, {
    mappings: { available: false, chromeStatusIds: 0, groups: 0, missing: [] },
    features: { mapped: 0, unmapped: 0 },
    webstatus: { requests: 0, ok: 0, absent: 0, failed: 0 },
  });

  assert.match(output.error.join('\n'), /The web-features mapping could not be loaded, so Baseline, test pass rates, group positions and usage are missing for every feature/);
  assert.match(output.log.map(withoutColor).join('\n'), /\[Web-features summary\] web-features mappings could not be loaded/);
  const annotations = output.log.filter(line => line.startsWith('::warning'));
  assert.strictEqual(annotations.length, 1);
  assert.match(annotations[0], /^::warning title=web-features mapping could not be loaded::The web-features mapping could not be loaded/);
});

test('a healthy mapping raises no annotation, even on GitHub Actions', async (t) => {
  const { output } = await freshSandbox(t);
  setEnv(t, 'GITHUB_ACTIONS', 'true');

  await run({ 153: 2 }, { milestone: '153' });

  assert.deepStrictEqual(output.log.filter(line => line.startsWith('::warning')), []);
});

test('the mapping and its statistics start afresh on every run: one run\'s mapping does not answer for the next', async (t) => {
  await freshSandbox(t);

  const first = await run({ 153: 3 }, { milestone: '153' }, { routes: testGroupRoutes(), mapping: false });
  assert.strictEqual(first.reportData.telemetry.webFeatures.features.mapped, 2);
  assert.strictEqual(first.reportData.telemetry.webFeatures.webstatus.requests, 1, 'webstatus.dev is asked, not remembered from an earlier run in this process');

  const second = await run({ 153: 3 }, { milestone: '153' }, { mapping: false });
  assert.strictEqual(second.reportData.telemetry.webFeatures.mappings.available, false, 'it is downloaded again, and was not published this time');
  assert.deepStrictEqual(second.reportData.telemetry.webFeatures.features, { mapped: 0, unmapped: 0 });
  assert.ok(second.reportData.features.every(({ ecosystem }) => ecosystem.webFeature === null));

  const third = await run({ 153: 3 }, { milestone: '153' }, { routes: testGroupRoutes(), mapping: false });
  assert.deepStrictEqual(third.reportData.telemetry.webFeatures, first.reportData.telemetry.webFeatures, 'and what webstatus.dev said is asked again, not remembered');
});

// --- the shape of what is published and saved --------------------------------------------------------------------------

const isCompact = text => !text.includes('\n');

test('the JSON report is schemaVersion 2: compact, every article once, ids that resolve, and the archive is the same file', async (t) => {
  await freshSandbox(t);
  useGemini();
  setEnv(t, 'GITHUB_ACTIONS', undefined);

  const { reportData, outputs } = await run({ 153: 3 }, { milestone: '153' }, { gemini: geminiCiting(), routes: groundingRoutes([1000, 1001, 1002]) });

  const latestText = await readText(path.join(config.reportsDir, 'latest.json'));
  assert.strictEqual(await readText(outputs.json), latestText, 'the weekly archive and latest.json are one document');
  assert.ok(isCompact(latestText), 'no indentation');

  const published = JSON.parse(latestText);
  assert.strictEqual(published.schemaVersion, 2);
  assert.deepStrictEqual(Object.keys(published.articles), ['a1', 'a2', 'a3'], 'one record for each page the three features cite');
  for (const { feature, ecosystem, delta, analysis } of published.features) {
    assert.strictEqual(published.articles[ecosystem.articles[0]].url, citedPage(feature.id));
    assert.deepStrictEqual(delta.newArticles, ecosystem.articles, 'the same page, the same id');
    assert.deepStrictEqual(analysis.groundedSources, ecosystem.articles);
    assert.deepStrictEqual(ecosystem.blogs, ecosystem.articles, 'a blog is one of the articles: one record, named twice');
    assert.deepStrictEqual([ecosystem.docs, ecosystem.reverseLinks], [[], []]);
  }

  // The program's own copy is the plain shape, and what was published is that, shared out.
  assert.ok(!('schemaVersion' in reportData) && !('articles' in reportData));
  assert.deepStrictEqual(denormaliseReport(published), JSON.parse(JSON.stringify(reportData)));
});

test('reports/summary.md holds the Executive Snapshot of the report, and none of the features', async (t) => {
  await freshSandbox(t);

  const { outputs } = await run({ 153: 6, 154: 6 });

  const summary = await readText(path.join(config.reportsDir, 'summary.md'));
  assert.match(summary, /^# 🌐 Chrome Web Platform Ecosystem Report — \d{4}-W\d{2}\n/);
  assert.match(summary, /\| \*\*Features Tracked\*\* \| `12` \|/);
  assert.ok(!summary.includes('Test feature 10'), 'no feature is named');
  assert.ok(Buffer.byteLength(summary) < Buffer.byteLength(await readText(outputs.markdown)) / 4, 'a fraction of the full report');
  assert.strictEqual(await readText(path.join(config.reportsDir, 'README.md')), await readText(outputs.markdown), 'the full report is where it was');
});

test('what the next run reads back is compact, and the archive of the week is the same file as the working copy', async (t) => {
  await freshSandbox(t);

  await run({ 153: 3 }, { milestone: '153' });

  const history = await readText(config.historyFilePath);
  const { lastWeekString } = JSON.parse(history);
  assert.ok(isCompact(history));
  assert.strictEqual(await readText(path.join(config.dataDir, 'history', `${lastWeekString}.json`)), history);
});

/**
 * Rewrites what a run saved the way the version before this one wrote it: indented JSON, a report that
 * holds its article records in place and has no schemaVersion, and indented history. Returns the report.
 */
async function backToVersion1() {
  const pretty = value => JSON.stringify(value, null, 2);
  const latestPath = path.join(config.reportsDir, 'latest.json');
  const report = pretty(denormaliseReport(JSON.parse(await readText(latestPath))));
  assert.ok(!report.includes('schemaVersion'), 'the setup of this test must be a version 1 report');
  await fs.writeFile(latestPath, report);
  const weeklyDir = path.join(config.reportsDir, 'weekly');
  for (const file of (await fs.readdir(weeklyDir)).filter(name => name.endsWith('.json'))) await fs.writeFile(path.join(weeklyDir, file), report);

  const history = pretty(JSON.parse(await readText(config.historyFilePath)));
  await fs.writeFile(config.historyFilePath, history);
  const archiveDir = path.join(config.dataDir, 'history');
  for (const file of await fs.readdir(archiveDir)) await fs.writeFile(path.join(archiveDir, file), history);
  return JSON.parse(report);
}

test('a repository that still holds the version 1 reports and history is read by the next run, and upgraded in place', async (t) => {
  await freshSandbox(t);
  useGemini();
  const ai = { gemini: geminiCiting(), routes: groundingRoutes([1000, 1001]) };
  await run({ 153: 2 }, { milestone: '153' }, ai);
  await backToVersion1();
  assert.ok(!isCompact(await readText(config.historyFilePath)), 'the history is in the old, indented shape');

  const { reportData } = await run({ 153: 2 }, { milestone: '153' }, ai);

  assert.ok(reportData.features.every(({ delta }) => delta.isNewFeature === false && delta.newArticlesCount === 0), 'the old history was loaded');
  const latestText = await readText(path.join(config.reportsDir, 'latest.json'));
  assert.strictEqual(JSON.parse(latestText).schemaVersion, 2, 'latest.json is now version 2');
  assert.ok(isCompact(latestText));
  const weekly = path.join(config.reportsDir, 'weekly', `${reportData.weekString}.json`);
  assert.strictEqual(await readText(weekly), latestText, 'and so is the archive of the week');
  assert.ok(isCompact(await readText(config.historyFilePath)), 'the history is compact from now on');

  const third = await run({ 153: 2 }, { milestone: '153' }, ai);
  assert.ok(third.reportData.features.every(({ delta }) => delta.isNewFeature === false && delta.newArticlesCount === 0), 'and what was upgraded is read back');
});

test('the safety check reads a version 1 latest.json: a collapsed upstream is still refused, and nothing is touched', async (t) => {
  await freshSandbox(t);
  await run({ 153: 6, 154: 6 });
  await backToVersion1();
  const before = await publishedState();

  const { error } = await runExpectingFailure({ 153: 2, 154: 1 });

  assert.match(error.message, /only 3 features/);
  assert.deepStrictEqual(await publishedState(), before);
});

test('with no data/ at all, the history is rebuilt from the weekly archive, whichever shape it has', async (t) => {
  await freshSandbox(t);
  useGemini();
  const ai = { gemini: geminiCiting(), routes: groundingRoutes([1000, 1001]) };
  await run({ 153: 2 }, { milestone: '153' }, ai);
  await backToVersion1();
  await fs.rm(config.dataDir, { recursive: true });

  const second = await run({ 153: 2 }, { milestone: '153' }, ai);
  assert.ok(second.reportData.features.every(({ delta }) => delta.isNewFeature === false && delta.newArticlesCount === 0), 'rebuilt from a version 1 archive');
  assert.strictEqual(JSON.parse(await readText(path.join(config.reportsDir, 'latest.json'))).schemaVersion, 2);

  await fs.rm(config.dataDir, { recursive: true });
  const third = await run({ 153: 2 }, { milestone: '153' }, ai);
  assert.ok(third.reportData.features.every(({ delta }) => delta.isNewFeature === false && delta.newArticlesCount === 0), 'and from the version 2 archive that run wrote');
});

// --- momentum is a change in the footprint, and what is new is what the feature never showed ------------------------------

const DAY = 86_400_000;
const daysAgo = days => new Date(Date.now() - days * DAY).toISOString();
const dayOf = days => daysAgo(days).slice(0, 10);

/** Stops the clock for the length of a test: "four weeks ago" and "this week" cannot move under it at midnight. */
const freezeClock = t => t.mock.timers.enable({ apis: ['Date'], now: Date.now() });

/**
 * A Hacker News that has one story, published `publishedDaysAgo` days ago, about each feature in `pointsById` (feature
 * id -> points). The story links to a page of its own, so each feature finds an article and a discussion, both new.
 */
const hackerNewsFor = (pointsById, { publishedDaysAgo = 3 } = {}) => Object.entries(pointsById).map(([id, points]) => ({
  match: url => url.startsWith('https://hn.algolia.com/api/v1/search?') && decodeURIComponent(url).includes(`Test feature ${id}`),
  json: { hits: [{ objectID: `hn${id}`, title: `Test feature ${id} lands in Chrome`, url: `https://blog.example/test-feature-${id}`, points, num_comments: 0, created_at: daysAgo(publishedDaysAgo) }] },
}));

/** Twelve features, 1000 to 1011, the later ones with more points: footprints of 70, 130, 190 … 730. */
const TWELVE = Object.fromEntries(Array.from({ length: 12 }, (_, i) => [1000 + i, (i + 1) * 40]));
const IDS_BY_FOOTPRINT = Array.from({ length: 12 }, (_, i) => 1011 - i);

const readHistory = async () => JSON.parse(await readText(config.historyFilePath));

/**
 * What each of the twelve features' change over four weeks is, in the tests of the change: the feature with the
 * fewest points grew most. The order the report lists them in must therefore be the opposite of the footprint order.
 */
const growthOf = id => (1011 - id) * 5 - 10;

/** Gives every feature the record of a run `weeksAgo * 7` days ago, at its footprint then. */
async function withEarlierNumbers(reportData, { days = 28, week = '2026-W37', except = [], ai = false } = {}) {
  const history = await readHistory();
  for (const { feature, analysis } of reportData.features) {
    if (except.includes(feature.id)) {
      history.features[feature.id].metrics = [];
      continue;
    }
    history.features[feature.id].metrics = [{ week, date: dayOf(days), footprint: analysis.footprint - growthOf(feature.id), ai, metrics: {} }];
  }
  await fs.writeFile(config.historyFilePath, JSON.stringify(history));
  return history;
}

test('a first run ranks the footprints against each other, says so, and starts the record that a change is measured against', async (t) => {
  await freshSandbox(t);

  const { reportData, outputs } = await run({ 153: 12 }, { milestone: '153' }, { routes: hackerNewsFor(TWELVE) });

  const { momentum } = reportData.telemetry;
  assert.deepStrictEqual(momentum, { basis: 'footprint rank', baselineDays: 28, withBaseline: 0, total: 12, tiers: { High: 2, Moderate: 4, Emerging: 6, Quiet: 0 } });
  const tiers = Object.fromEntries(reportData.features.map(({ feature, analysis }) => [feature.id, analysis.momentumLevel]));
  assert.deepStrictEqual(IDS_BY_FOOTPRINT.map(id => tiers[id]), [...Array(2).fill('High'), ...Array(4).fill('Moderate'), ...Array(6).fill('Emerging')]);
  assert.deepStrictEqual(reportData.features.map(f => f.feature.id), IDS_BY_FOOTPRINT, 'the most momentum first');

  for (const { feature, analysis } of reportData.features) {
    assert.strictEqual(analysis.footprint, 70 + 60 * (feature.id - 1000), `the footprint of ${feature.id}: 40 points × 1.5 and a verified article, for each step`);
    assert.strictEqual(analysis.momentumScore, analysis.footprint, 'the old name is kept');
    assert.deepStrictEqual([analysis.momentumChange, analysis.momentumBaseline, analysis.momentumBasis], [null, null, 'footprint rank']);
  }

  const history = await readHistory();
  assert.strictEqual(history.schemaVersion, 2);
  for (const { feature, analysis } of reportData.features) {
    const entry = history.features[feature.id];
    assert.deepStrictEqual(
      entry.metrics.map(({ week, date, footprint, ai }) => ({ week, date, footprint, ai })),
      [{ week: reportData.weekString, date: reportData.date, footprint: analysis.footprint, ai: false }]
    );
    assert.strictEqual(entry.metrics[0].metrics.hnPoints, (feature.id - 999) * 40, 'every number of the ecosystem is kept');
    assert.deepStrictEqual([entry.lastMomentumLevel, entry.lastMomentumBasis, entry.lastAi], [analysis.momentumLevel, 'footprint rank', false]);
    assert.deepStrictEqual(Object.keys(entry.seen), [`blog.example/test-feature-${feature.id}`]);
    assert.strictEqual(entry.seen[`blog.example/test-feature-${feature.id}`], reportData.date);
  }

  const published = JSON.parse(await readText(path.join(config.reportsDir, 'latest.json')));
  assert.deepStrictEqual(published.telemetry.momentum, momentum);
  assert.strictEqual(published.features[0].analysis.momentumBasis, 'footprint rank');

  const markdown = await readText(outputs.markdown);
  assert.match(markdown, /^> \*\*Momentum:\*\* Momentum tiers rank this week's footprint against the other features: the change over four weeks needs an earlier number, measured the same way, for at least 10 features and half of them, and 0 of 12 have one\.$/m);
  assert.ok(markdown.includes("(footprint 730 points, ranked against this week's features because too few have an earlier number to work out a change)"));
  assert.match(await readText(outputs.html), /📈 Momentum: footprint rank \(warm-up\)/);
  assert.match(await readText(path.join(config.reportsDir, 'features', '1011-test-feature-1011.md')),
    /^- \*\*Momentum:\*\* High \(footprint 730 points, ranked against this week's features because too few have an earlier number to work out a change\)$/m);
  assert.match(await readText(path.join(config.reportsDir, 'summary.md')), /^> \*\*Momentum:\*\* Momentum tiers rank/m);
});

test('a run too small to rank says that its tiers are the footprint levels; a partial run in the same week replaces the week\'s number instead of adding one', async (t) => {
  await freshSandbox(t);
  freezeClock(t);
  const routes = hackerNewsFor({ 1000: 40, 1001: 80, 1002: 120 });

  const full = await run({ 153: 3 }, { milestone: '153' }, { routes });

  assert.deepStrictEqual(full.reportData.telemetry.momentum, { basis: 'footprint level', baselineDays: 28, withBaseline: 0, total: 3, tiers: { High: 2, Moderate: 1, Emerging: 0, Quiet: 0 } });
  assert.ok(full.reportData.features.every(({ analysis }) => analysis.momentumBasis === 'footprint level' && analysis.momentumChange === null));
  assert.match(await readText(full.outputs.markdown), /^> \*\*Momentum:\*\* Too few features to rank: momentum tiers are the absolute footprint levels\.$/m);
  assert.ok((await readText(full.outputs.markdown)).includes('**High** (footprint 190 points)'));
  assert.match(await readText(full.outputs.html), /📈 Momentum: footprint level/);

  // One feature, run by itself the same week (`--feature`): the same words, and its week still has one number.
  const single = await run({ 153: 3 }, { milestone: '153', featureId: 1001 }, { routes });

  assert.deepStrictEqual(single.reportData.features.map(f => f.feature.id), [1001]);
  assert.deepStrictEqual(single.reportData.telemetry.momentum, { basis: 'footprint level', baselineDays: 28, withBaseline: 0, total: 1, tiers: { High: 1, Moderate: 0, Emerging: 0, Quiet: 0 } });
  assert.match(await readText(single.outputs.markdown), /^> \*\*Momentum:\*\* Too few features to rank/m);
  const history = await readHistory();
  assert.ok(Object.values(history.features).every(entry => entry.metrics.length === 1), 'one number a week, whoever asked for it');
  assert.strictEqual(Object.keys(history.features).length, 3, 'the features that were not in the run are still there');
  assert.deepStrictEqual(history.features[1001].metrics.map(({ week, footprint }) => [week, footprint]), [[single.reportData.weekString, 130]]);
});

test('a second run in the same week keeps one record for the week, and what did not move did not shift', async (t) => {
  await freshSandbox(t);
  freezeClock(t);
  const routes = hackerNewsFor(TWELVE);
  const first = await run({ 153: 12 }, { milestone: '153' }, { routes });

  const second = await run({ 153: 12 }, { milestone: '153' }, { routes });

  assert.deepStrictEqual(second.reportData.features.map(f => f.analysis.momentumLevel), first.reportData.features.map(f => f.analysis.momentumLevel));
  for (const { analysis, delta } of second.reportData.features) {
    assert.strictEqual(delta.momentumChanged, false);
    assert.strictEqual(delta.previousMomentum, analysis.momentumLevel, 'the same kind of tier last week, so it is offered as the earlier one');
    assert.strictEqual(delta.newArticlesCount, 0, 'the page was shown by the first run');
    assert.strictEqual(delta.newDiscussionsCount, 0);
  }
  const history = await readHistory();
  assert.ok(Object.values(history.features).every(entry => entry.metrics.length === 1), 'the week\'s number is replaced');
});

test('with a number from about four weeks ago, momentum is the change since then, in tiers, and says so', async (t) => {
  await freshSandbox(t);
  freezeClock(t);
  const routes = hackerNewsFor(TWELVE);
  const first = await run({ 153: 12 }, { milestone: '153' }, { routes });
  await withEarlierNumbers(first.reportData);

  const { reportData, outputs } = await run({ 153: 12 }, { milestone: '153' }, { routes });

  assert.deepStrictEqual(reportData.telemetry.momentum, { basis: 'change', baselineDays: 28, withBaseline: 12, total: 12, tiers: { High: 2, Moderate: 4, Emerging: 3, Quiet: 3 } });
  const byId = Object.fromEntries(reportData.features.map(({ feature, analysis }) => [feature.id, analysis]));
  const expectedTier = id => id <= 1001 ? 'High' : id <= 1005 ? 'Moderate' : id <= 1008 ? 'Emerging' : 'Quiet';
  for (const id of Object.keys(TWELVE).map(Number)) {
    const analysis = byId[id];
    assert.strictEqual(analysis.momentumLevel, expectedTier(id), `the tier of ${id}`);
    assert.strictEqual(analysis.momentumChange, growthOf(id), `the change of ${id}`);
    assert.deepStrictEqual(analysis.momentumBaseline, { week: '2026-W37', date: dayOf(28), footprint: analysis.footprint - growthOf(id) });
    assert.strictEqual(analysis.momentumBasis, 'change');
  }
  // Largest growth first, which is the opposite of the footprint order of the first week.
  assert.deepStrictEqual(reportData.features.map(f => f.feature.id), Array.from({ length: 12 }, (_, i) => 1000 + i));

  const markdown = await readText(outputs.markdown);
  assert.match(markdown, /^> \*\*Momentum:\*\* Momentum is the change in footprint since about four weeks ago, in tiers relative to the other features \(12 of 12 features have an earlier number to compare with\)\.$/m);
  assert.ok(markdown.includes(`**High** (+45 points since ${dayOf(28)}; footprint 70 points)`));
  assert.ok(markdown.includes(`**Quiet** (-10 points since ${dayOf(28)}; footprint 730 points)`));
  assert.match(await readText(path.join(config.reportsDir, 'features', '1000-test-feature-1000.md')), new RegExp(`^- \\*\\*Momentum:\\*\\* High \\(\\+45 points since ${dayOf(28)}; footprint 70 points\\)$`, 'm'));
  assert.match(await readText(outputs.html), /📈 Momentum: change over four weeks/);

  const history = await readHistory();
  assert.deepStrictEqual(history.features[1000].metrics.map(p => p.week), ['2026-W37', reportData.weekString]);
  assert.strictEqual(history.features[1000].lastMomentumBasis, 'change');
});

test('a tier that means something else than last week\'s is not a shift, and one that means the same is', async (t) => {
  await freshSandbox(t);
  freezeClock(t);
  const routes = hackerNewsFor(TWELVE);
  const first = await run({ 153: 12 }, { milestone: '153' }, { routes });
  await withEarlierNumbers(first.reportData);

  // Last week's tiers ranked the footprints; this week's are the change: nothing moved, as far as can be said.
  const second = await run({ 153: 12 }, { milestone: '153' }, { routes });
  for (const { delta } of second.reportData.features) {
    assert.deepStrictEqual([delta.momentumChanged, delta.previousMomentum], [false, null]);
  }
  assert.ok(!/Momentum Shifts/.test(await readText(second.outputs.markdown)));

  // Now last week's tier was the change too, and one feature was judged Quiet then, where it is High now.
  const history = await readHistory();
  history.features[1000].lastMomentumLevel = 'Quiet';
  await fs.writeFile(config.historyFilePath, JSON.stringify(history));
  const third = await run({ 153: 12 }, { milestone: '153' }, { routes });

  const shifted = third.reportData.features.filter(({ delta }) => delta.momentumChanged);
  assert.deepStrictEqual(shifted.map(f => f.feature.id), [1000]);
  assert.deepStrictEqual([shifted[0].analysis.momentumLevel, shifted[0].delta.previousMomentum], ['High', 'Quiet']);
  assert.match(await readText(third.outputs.markdown), /Shifted from \*Quiet\* to \*\*High\*\* momentum/);
  assert.ok(third.reportData.features.filter(f => f.feature.id !== 1000).every(f => f.delta.previousMomentum === f.analysis.momentumLevel));
});

test('a feature with no earlier number is Emerging while the others are measured, and says so', async (t) => {
  await freshSandbox(t);
  freezeClock(t);
  const routes = hackerNewsFor(TWELVE);
  const first = await run({ 153: 12 }, { milestone: '153' }, { routes });
  await withEarlierNumbers(first.reportData, { except: [1010, 1011] });

  const { reportData, outputs } = await run({ 153: 12 }, { milestone: '153' }, { routes });

  assert.deepStrictEqual(reportData.telemetry.momentum, { basis: 'change', baselineDays: 28, withBaseline: 10, total: 12, tiers: { High: 2, Moderate: 3, Emerging: 6, Quiet: 1 } });
  const byId = Object.fromEntries(reportData.features.map(({ feature, analysis }) => [feature.id, analysis]));
  for (const id of [1010, 1011]) {
    assert.deepStrictEqual([byId[id].momentumLevel, byId[id].momentumBasis, byId[id].momentumChange, byId[id].momentumBaseline], ['Emerging', 'no baseline', null, null]);
  }
  // Within a tier the ones with a measured change come first, the larger change first; the two without one follow,
  // the larger footprint first.
  assert.deepStrictEqual(reportData.features.map(f => f.feature.id), [1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1011, 1010, 1009]);
  assert.ok((await readText(outputs.markdown)).includes('**Emerging** (no earlier number to compare with yet; footprint 730 points)'));
});

test('an earlier number measured with the AI synthesis is not compared with one measured without it', async (t) => {
  await freshSandbox(t);
  freezeClock(t);
  const routes = hackerNewsFor(TWELVE);
  const first = await run({ 153: 12 }, { milestone: '153' }, { routes });
  await withEarlierNumbers(first.reportData, { ai: false });
  useGemini();

  const { reportData } = await run({ 153: 12 }, { milestone: '153' }, { routes, gemini: geminiWriting() });

  assert.ok(reportData.features.every(({ analysis }) => analysis.isAiEnhanced), 'the AI wrote every synthesis');
  assert.deepStrictEqual([reportData.telemetry.momentum.basis, reportData.telemetry.momentum.withBaseline], ['footprint rank', 0]);
  assert.ok(reportData.features.every(({ analysis, delta }) => analysis.momentumBaseline === null && delta.momentumChanged === false && delta.previousMomentum === null));
  const history = await readHistory();
  assert.ok(Object.values(history.features).every(entry => entry.lastAi === true && entry.metrics.at(-1).ai === true && entry.metrics.length === 2));
});

test('a rerun in the same week without the AI synthesis does not replace the number the synthesis gave', async (t) => {
  await freshSandbox(t);
  freezeClock(t);
  useGemini();
  const first = await run({ 153: 2 }, { milestone: '153' }, { gemini: geminiCiting(), routes: groundingRoutes([1000, 1001]) });
  assert.ok(first.reportData.features.every(({ analysis }) => analysis.isAiEnhanced && analysis.footprint > 0), 'the synthesis was there, and its pages counted');
  config.geminiApiKey = '';

  const rerun = await run({ 153: 2 }, { milestone: '153' });

  assert.ok(rerun.reportData.features.every(({ analysis }) => !analysis.isAiEnhanced && analysis.footprint === 0), 'the rerun had neither');
  const history = await readHistory();
  for (const { feature, analysis } of first.reportData.features) {
    const entry = history.features[feature.id];
    assert.deepStrictEqual(
      entry.metrics.map(({ week, ai, footprint }) => ({ week, ai, footprint })),
      [{ week: first.reportData.weekString, ai: true, footprint: analysis.footprint }],
      `the number of ${feature.id} is still the one with the synthesis`
    );
    assert.strictEqual(entry.lastAi, false, 'what the last run was measured with is still what it says');
  }
});

test('a history from before momentum was a change starts the record without calling anything a shift', async (t) => {
  await freshSandbox(t);
  const lastSeen = '2026-09-28T09:41:00.000Z';
  // Exactly the shape the last version wrote: no schemaVersion, no seen map, no numbers, every feature last judged High.
  const old = Object.fromEntries(Object.keys(TWELVE).map(id => [id, {
    id: Number(id), name: `Test feature ${id}`, milestone: 153, status: CATEGORY, lastSeen,
    knownUrls: id === '1000' ? ['https://blog.example/test-feature-1000'] : [],
    lastMomentumLevel: 'High', lastConsensus: 'Chromium-Led',
  }]));
  await fs.mkdir(config.dataDir, { recursive: true });
  await fs.writeFile(config.historyFilePath, JSON.stringify({ lastRun: lastSeen, lastWeekString: '2026-W40', telemetry: {}, features: old }, null, 2));

  const { reportData } = await run({ 153: 12 }, { milestone: '153' }, { routes: hackerNewsFor(TWELVE) });

  const high = reportData.features.filter(f => f.analysis.momentumLevel === 'High');
  assert.strictEqual(high.length, 2, 'ten of the twelve are not High any more, which used to be ten shifts');
  for (const { feature, delta } of reportData.features) {
    assert.strictEqual(delta.isNewFeature, false, `${feature.id} is known`);
    assert.deepStrictEqual([delta.momentumChanged, delta.previousMomentum], [false, null], `${feature.id}`);
    assert.strictEqual(delta.statusChanged, false);
  }
  const byId = Object.fromEntries(reportData.features.map(f => [f.feature.id, f.delta]));
  assert.deepStrictEqual([byId[1000].newArticlesCount, byId[1000].newDiscussionsCount], [0, 0], 'a page of the old knownUrls is not new');
  assert.deepStrictEqual([byId[1001].newArticlesCount, byId[1001].newDiscussionsCount], [1, 1], 'a page that is not in them, and was published days ago, is');

  const history = await readHistory();
  assert.strictEqual(history.schemaVersion, 2);
  // One clock for the whole run: the report, the history and every entry in it say the same moment.
  assert.strictEqual(history.lastRun, reportData.generatedAt);
  assert.ok(Object.values(history.features).every(entry => entry.lastSeen === reportData.generatedAt));
  assert.deepStrictEqual(history.features[1000].seen, { 'blog.example/test-feature-1000': reportData.date }, 'what the old entry knew turned up again, so it is remembered as of today');
  assert.deepStrictEqual(history.features[1001].seen, { 'blog.example/test-feature-1001': reportData.date });
  assert.deepStrictEqual(history.features[1001].knownUrls, ['https://blog.example/test-feature-1001'], 'knownUrls is still written');
  assert.ok(Object.values(history.features).every(entry => entry.metrics.length === 1 && entry.lastMomentumBasis === 'footprint rank'));
});

test('a page that is old is not news just because the feature shows it for the first time', async (t) => {
  await freshSandbox(t);
  freezeClock(t);

  const { reportData } = await run({ 153: 3 }, { milestone: '153' }, { routes: hackerNewsFor({ 1000: 40, 1001: 40, 1002: 40 }, { publishedDaysAgo: 400 }) });

  for (const { delta } of reportData.features) {
    assert.strictEqual(delta.isNewFeature, true);
    assert.deepStrictEqual([delta.newArticlesCount, delta.newDiscussionsCount, delta.hasDelta], [0, 0, true]);
  }
  const history = await readHistory();
  assert.ok(Object.values(history.features).every(entry => Object.keys(entry.seen).length === 1), 'it is remembered all the same');
  const second = await run({ 153: 3 }, { milestone: '153' }, { routes: hackerNewsFor({ 1000: 40, 1001: 40, 1002: 40 }) });
  assert.ok(second.reportData.features.every(({ delta }) => delta.newArticlesCount === 0), 'and a page shown once stays shown, whatever its date says now');
});

test('a feature whose history cannot be read is skipped with the reason; the others are ranked and published', async (t) => {
  const { output } = await freshSandbox(t);
  setEnv(t, 'GITHUB_ACTIONS', undefined);
  const routes = hackerNewsFor(TWELVE);
  await run({ 153: 12 }, { milestone: '153' }, { routes });
  const history = await readHistory();
  history.features[1003].seen = [];
  await fs.writeFile(config.historyFilePath, JSON.stringify(history));

  const { reportData } = await run({ 153: 12 }, { milestone: '153' }, { routes });

  assert.strictEqual(reportData.featuresCount, 11);
  assert.ok(!reportData.features.some(f => f.feature.id === 1003));
  assert.deepStrictEqual([reportData.telemetry.featuresAttempted, reportData.telemetry.featuresFailed], [12, 1]);
  assert.deepStrictEqual(reportData.telemetry.failures.map(f => f.id), [1003]);
  assert.match(reportData.telemetry.failures[0].error, /"seen" in the history entry must be an object/);
  assert.ok(output.error.some(line => line.includes('Skipped "Test feature 1003" (#1003)')), output.error.join('\n'));
  assert.strictEqual(reportData.telemetry.momentum.total, 11, 'the tiers are counted over what is published');
  assert.strictEqual((await readHistory()).features[1003].seen.length, 0, 'its entry is left as it was, for someone to look at');
});

test('a history entry that is not even an object fails its feature too, instead of calling every page of it news', async (t) => {
  await freshSandbox(t);
  const routes = hackerNewsFor(TWELVE);
  await run({ 153: 12 }, { milestone: '153' }, { routes });
  const healthy = await readHistory();

  for (const damaged of ['broken', [], 5, true, false]) {
    const history = structuredClone(healthy);
    history.features[1003] = damaged;
    await fs.writeFile(config.historyFilePath, JSON.stringify(history));

    const { reportData } = await run({ 153: 12 }, { milestone: '153' }, { routes });

    assert.deepStrictEqual(reportData.telemetry.failures.map(f => f.id), [1003], JSON.stringify(damaged));
    assert.match(reportData.telemetry.failures[0].error, /a history entry must be an object/);
    assert.strictEqual(reportData.featuresCount, 11, JSON.stringify(damaged));
    assert.deepStrictEqual((await readHistory()).features[1003], damaged, 'its entry is left as it was, for someone to look at');
  }
});

test('a feature whose history cannot be read takes no part in the tiers, so what the report says about them is about the features it lists', async (t) => {
  await freshSandbox(t);
  freezeClock(t);
  const NINETEEN = Object.fromEntries(Array.from({ length: 19 }, (_, i) => [1000 + i, (i + 1) * 40]));
  const routes = hackerNewsFor(NINETEEN);
  const first = await run({ 153: 19 }, { milestone: '153' }, { routes });
  // Ten of the nineteen have a number from four weeks ago: the least that can be ranked by its change, and over half.
  await withEarlierNumbers(first.reportData, { except: [1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018] });
  const prepared = await readText(config.historyFilePath);

  const healthy = await run({ 153: 19 }, { milestone: '153' }, { routes });
  assert.deepStrictEqual([healthy.reportData.telemetry.momentum.basis, healthy.reportData.telemetry.momentum.withBaseline, healthy.reportData.telemetry.momentum.total], ['change', 10, 19]);

  // The same week, but one of the ten has an entry that cannot be read (its numbers are fine): nine are left to compare.
  const damaged = JSON.parse(prepared);
  damaged.features[1000].seen = [];
  await fs.writeFile(config.historyFilePath, JSON.stringify(damaged));
  const { reportData, outputs } = await run({ 153: 19 }, { milestone: '153' }, { routes });

  assert.deepStrictEqual(reportData.telemetry.failures.map(f => f.id), [1000]);
  assert.strictEqual(reportData.featuresCount, 18);
  assert.deepStrictEqual(reportData.telemetry.momentum, { basis: 'footprint rank', baselineDays: 28, withBaseline: 9, total: 18, tiers: reportData.telemetry.momentum.tiers });
  assert.strictEqual(Object.values(reportData.telemetry.momentum.tiers).reduce((a, b) => a + b, 0), 18);
  assert.ok(reportData.features.every(({ analysis }) => analysis.momentumBasis === 'footprint rank'), 'ranked among the eighteen, because nine of them is not enough to rank a change');
  assert.match(await readText(outputs.markdown), /and 9 of 18 have one\./);
});

test('a feature that has not been tracked for a year leaves the history; one tracked within the year, or never dated, stays', async (t) => {
  await freshSandbox(t);
  const tracked = (id, lastSeen) => ({ id, name: `Gone ${id}`, milestone: 100, status: CATEGORY, ...(lastSeen ? { lastSeen } : {}), knownUrls: [], lastMomentumLevel: 'Quiet', lastConsensus: 'Chromium-Led' });
  await fs.mkdir(config.dataDir, { recursive: true });
  await fs.writeFile(config.historyFilePath, JSON.stringify({
    lastRun: daysAgo(7),
    features: { 5551: tracked(5551, daysAgo(400)), 5552: tracked(5552, daysAgo(300)), 5553: tracked(5553, undefined), 5554: tracked(5554, 'last year') },
  }));

  await run({ 153: 3 }, { milestone: '153' });

  const history = await readHistory();
  assert.deepStrictEqual(Object.keys(history.features).filter(id => id.startsWith('555')), ['5552', '5553', '5554']);
  assert.deepStrictEqual(history.features[5552], tracked(5552, history.features[5552].lastSeen), 'the others are not touched');
  assert.strictEqual(Object.keys(history.features).length, 3 + 3);
});

// --- the crawl's deadline: a crawl that runs out of time publishes what it reached ------------------------------------

/**
 * A clock the test winds itself, so that no test waits for a deadline. Nothing else in these runs takes any time: each
 * request for a feature's details, which is where a feature starts, moves it on by `perFeature` minutes, and each listing
 * of a milestone by `perMilestone`. The route comes before ChromeStatus's own and never answers, which lets it watch
 * every request. A run reads the clock as its `now`.
 */
function crawlClock({ perFeature = 0, perMilestone = 0 } = {}) {
  const clock = { minutes: 0 };
  const early = [{
    match: url => {
      if (/\/api\/v0\/features\/\d+$/.test(url)) clock.minutes += perFeature;
      else if (url.includes('/api/v0/features?milestone=')) clock.minutes += perMilestone;
      return false;
    },
  }];
  return { clock, now: () => clock.minutes * 60_000, early };
}

/**
 * Makes the log throw when the heading of a feature is printed, which is the first thing the investigation of a feature
 * does: a way to have one throw that does not depend on how some other module copes with bad input. `which` is given the
 * id of the feature and says whether its investigation is to throw; `thrown` makes what is thrown (an Error unless a
 * test wants something else, which is how a rejection that is not an Error is made).
 */
function breakLogAtFeatures(output, which, thrown = () => new Error('the log broke')) {
  const push = output.log.push.bind(output.log);
  output.log.push = line => {
    const heading = /\] 🔎 Test feature (\d+)/.exec(String(line).replace(/\u001b\[[0-9;]*m/g, ''));
    if (heading && which(Number(heading[1]))) throw thrown();
    return push(line);
  };
}

/** The ids of the features whose details were asked for, in the order the crawl started them. */
const startedIds = calls => calls.flatMap(url => /\/api\/v0\/features\/(\d+)$/.exec(url)?.[1] ?? []).map(Number);

/** Twelve features, the first six of them in Chrome 153 and the rest in 154; the newest milestone is crawled first. */
const TWELVE_LISTED = { 153: 6, 154: 6 };
const LISTING_ORDER = [1006, 1007, 1008, 1009, 1010, 1011, 1000, 1001, 1002, 1003, 1004, 1005];

/** A crawl of the twelve, one feature at a time at ten minutes each, with a deadline of `deadlineMinutes`. */
async function slowCrawl(deadlineMinutes, options = {}) {
  const { now, early } = crawlClock({ perFeature: 10 });
  return run(TWELVE_LISTED, { concurrency: 1, deadlineMinutes, now, ...options }, { early });
}

test('a crawl that runs out of time publishes the features it reached, says that it is partial, and names the rest', async (t) => {
  const { output } = await freshSandbox(t);
  setEnv(t, 'GITHUB_ACTIONS', 'true');

  // The features start at 0, 10 ... 80 minutes. The tenth would start at 90, five minutes after the deadline.
  const { reportData, outputs, calls } = await slowCrawl(85);

  const started = startedIds(calls);
  assert.deepStrictEqual(started, LISTING_ORDER.slice(0, 9), 'with no history, in the order ChromeStatus lists them');
  assert.deepStrictEqual(reportData.features.map(f => f.feature.id).sort(), [...started].sort(), 'and the report holds those');

  const { telemetry } = reportData;
  assert.deepStrictEqual(telemetry.crawl, {
    deadlineMinutes: 85,
    elapsedMinutes: 90,
    reached: 9,
    notReached: LISTING_ORDER.slice(9).map(id => ({ id, name: `Test feature ${id}` })),
  });
  assert.strictEqual(telemetry.partial, true);
  assert.deepStrictEqual([reportData.featuresCount, telemetry.featuresCount, telemetry.featuresAttempted, telemetry.featuresFailed], [9, 9, 9, 0]);
  assert.strictEqual(telemetry.featuresAvailable, 12, 'what ChromeStatus listed, which is what the next run is compared with');
  assert.deepStrictEqual(telemetry.failures, [], 'a feature that was not started did not fail');
  assert.strictEqual(telemetry.momentum.total, 9, 'the tiers are those of the features in the report');

  const markdown = await readText(outputs.markdown);
  assert.match(markdown, /^> ⏱️ \*\*Partial run:\*\* The crawl reached its 85-minute deadline \(90 minutes in\) and stopped starting features: 9 of 12 were investigated, and the other 3 are not in this report\. They come first in the next crawl\.$/m);
  assert.match(await readText(path.join(config.reportsDir, 'summary.md')), /^> ⏱️ \*\*Partial run:\*\* The crawl reached its 85-minute deadline/m);
  assert.ok((await readText(outputs.html)).includes('⏱ Partial: 9 of 12 features</span>'));
  assert.deepStrictEqual(
    reportData.features.map(f => f.feature.id).filter(id => markdown.includes(`Test feature ${id}`)).sort(),
    [...started].sort(),
    'the features that were not reached are not in the Markdown either'
  );

  const published = JSON.parse(await readText(path.join(config.reportsDir, 'latest.json')));
  assert.strictEqual(published.features.length, 9);
  assert.deepStrictEqual([published.telemetry.partial, published.telemetry.crawl], [true, telemetry.crawl]);

  // Said where a person will see it: the log, and on GitHub Actions a warning on the run.
  assert.ok(output.error.some(line => line.includes('The crawl reached its 85-minute deadline (90 minutes in)')), output.error.join('\n'));
  const annotations = output.log.filter(line => line.startsWith('::warning'));
  assert.strictEqual(annotations.length, 1, annotations.join('\n'));
  assert.match(annotations[0], /^::warning title=Crawl stopped at its deadline::The crawl reached its 85-minute deadline \(90 minutes in\) and stopped starting features: 9 of 12 were investigated/);

  const history = await readHistory();
  assert.deepStrictEqual(Object.keys(history.features).map(Number).sort(), [...started].sort(), 'the features that were not reached have no entry yet');
  assert.deepStrictEqual(history.telemetry.crawl, telemetry.crawl, 'and the history remembers how the crawl went');
});

test('without a deadline a crawl is never partial, however long it takes, and no report says that it is', async (t) => {
  const { output } = await freshSandbox(t);
  setEnv(t, 'GITHUB_ACTIONS', 'true');
  const { now, early } = crawlClock({ perFeature: 1000 });

  const { reportData, outputs } = await run(TWELVE_LISTED, { concurrency: 1, now }, { early });

  assert.strictEqual(reportData.featuresCount, 12);
  assert.deepStrictEqual(reportData.telemetry.crawl, { deadlineMinutes: 0, elapsedMinutes: 12_000, reached: 12, notReached: [] });
  assert.strictEqual(reportData.telemetry.partial, false);
  for (const file of [outputs.markdown, outputs.html, path.join(config.reportsDir, 'summary.md')]) {
    assert.ok(!(await readText(file)).includes('Partial'), file);
  }
  assert.ok(!output.error.some(line => /deadline/.test(line)), output.error.join('\n'));
  assert.ok(!output.log.some(line => line.startsWith('::warning')), 'nothing to annotate');
});

test('a deadline that is not reached changes nothing about the report except what it records', async (t) => {
  await freshSandbox(t);
  setEnv(t, 'GITHUB_ACTIONS', 'true');

  const { reportData, outputs } = await slowCrawl(1000);

  assert.strictEqual(reportData.featuresCount, 12);
  assert.deepStrictEqual(reportData.telemetry.crawl, { deadlineMinutes: 1000, elapsedMinutes: 120, reached: 12, notReached: [] });
  assert.strictEqual(reportData.telemetry.partial, false);
  assert.ok(!(await readText(outputs.markdown)).includes('Partial'));
});

test('the deadline comes from CRAWL_DEADLINE_MINUTES unless the run is given its own, and 0 means none', async (t) => {
  await freshSandbox(t);
  const saved = config.crawlDeadlineMinutes;
  t.after(() => { config.crawlDeadlineMinutes = saved; });
  config.crawlDeadlineMinutes = 85;

  const fromConfig = await slowCrawl(undefined);
  assert.deepStrictEqual([fromConfig.reportData.telemetry.crawl.deadlineMinutes, fromConfig.reportData.telemetry.crawl.reached], [85, 9]);

  const own = await slowCrawl(125);
  assert.deepStrictEqual([own.reportData.telemetry.crawl.deadlineMinutes, own.reportData.telemetry.crawl.reached], [125, 12], 'its own wins');

  const none = await slowCrawl(0);
  assert.deepStrictEqual([none.reportData.telemetry.crawl.deadlineMinutes, none.reportData.telemetry.crawl.reached, none.reportData.telemetry.partial], [0, 12, false], 'and so does an explicit none');
});

test('a feature that is under way when the deadline passes is finished, not abandoned; the ones behind it are not started', async (t) => {
  await freshSandbox(t);
  const { now, early } = crawlClock({ perFeature: 10 });

  // Two at a time. Both start before the deadline of 15 minutes (the first at 0, the second at 10, once the first has
  // asked for its details) and both finish after it, at 20. The two behind them find the deadline passed.
  const { reportData, calls } = await run({ 153: 2, 154: 2 }, { concurrency: 2, deadlineMinutes: 15, now }, { early });

  assert.deepStrictEqual(startedIds(calls).sort(), [1002, 1003]);
  assert.deepStrictEqual(reportData.features.map(f => f.feature.id).sort(), [1002, 1003]);
  assert.ok(reportData.features.every(({ ecosystem, analysis, delta }) => ecosystem && analysis.momentumLevel && delta), 'each has all of its analysis');
  assert.deepStrictEqual(reportData.telemetry.crawl, {
    deadlineMinutes: 15,
    elapsedMinutes: 20,
    reached: 2,
    notReached: [{ id: 1000, name: 'Test feature 1000' }, { id: 1001, name: 'Test feature 1001' }],
  });
  assert.deepStrictEqual(reportData.telemetry.failures, []);
});

test('a deadline that had passed before any feature was started refuses the run, with or without --force, and writes nothing', async (t) => {
  await freshSandbox(t);

  for (const force of [false, true]) {
    // Listing the two milestones takes 200 minutes.
    const { now, early } = crawlClock({ perMilestone: 100 });
    const { error, calls } = await runExpectingFailure(TWELVE_LISTED, { concurrency: 1, deadlineMinutes: 25, now, force }, { early });

    assert.strictEqual(error.message, 'The crawl deadline of 25 minutes had passed before the first of 12 feature(s) was started; refusing to overwrite reports with an empty run.');
    assert.deepStrictEqual(startedIds(calls), [], 'no feature was looked at');
    assert.strictEqual(await exists(config.reportsDir), false, 'no report directory may be created');
    assert.strictEqual(await exists(config.historyFilePath), false, 'no history may be written');
  }
});

test('when every feature that was started failed and the rest were not reached, the refusal says both', async (t) => {
  await freshSandbox(t);
  // The two features that are started first have a history entry that cannot be read, so each fails after it was started.
  await run(TWELVE_LISTED);
  const history = await readHistory();
  for (const id of LISTING_ORDER.slice(0, 2)) history.features[id].seen = [];
  await fs.writeFile(config.historyFilePath, JSON.stringify(history));
  const before = await publishedState();
  const { now, early } = crawlClock({ perFeature: 10 });

  const { error } = await runExpectingFailure(TWELVE_LISTED, { concurrency: 1, deadlineMinutes: 15, now, force: true }, { early });

  assert.match(error.message, /^All 2 features that were started failed to process, and 10 were not reached before the crawl deadline; refusing to overwrite reports with an empty run\. First error: "seen" in the history entry must be an object/);
  assert.deepStrictEqual(await publishedState(), before, 'nothing was written');
});

test('a feature whose investigation throws is skipped under its own name wherever the crawl put it, and counts as reached', async (t) => {
  const { output } = await freshSandbox(t);
  await run(TWELVE_LISTED);
  // 1000 and 1001 were looked at the longest ago, so a crawl with a deadline starts them first, though ChromeStatus lists
  // them seventh and eighth.
  const history = await readHistory();
  history.features[1000].lastSeen = '2026-01-01T00:00:00.000Z';
  history.features[1001].lastSeen = '2026-01-02T00:00:00.000Z';
  await fs.writeFile(config.historyFilePath, JSON.stringify(history));
  breakLogAtFeatures(output, id => id === 1001);

  const { reportData, calls } = await slowCrawl(1000);

  assert.deepStrictEqual(startedIds(calls).slice(0, 2), [1000, 1006], 'the oldest first; the one that threw never got as far as its details');
  const { telemetry } = reportData;
  assert.deepStrictEqual(telemetry.failures, [{ id: 1001, name: 'Test feature 1001', error: 'the log broke' }]);
  assert.deepStrictEqual([telemetry.featuresAttempted, telemetry.featuresFailed, reportData.featuresCount], [12, 1, 11]);
  assert.ok(reportData.features.every(f => f.feature.id !== 1001));
  assert.ok(output.error.some(line => line.includes('Skipped "Test feature 1001" (#1001): the log broke')), output.error.join('\n'));
  assert.deepStrictEqual(
    [telemetry.crawl.reached, telemetry.crawl.notReached, telemetry.partial],
    [12, [], false],
    'it was started, so it was reached; it is a failure, not a feature the deadline kept out'
  );
});

test('a feature that rejects with nothing in the rejection is a failure like any other, never one that vanishes', async (t) => {
  const { output } = await freshSandbox(t);
  let rejection;
  breakLogAtFeatures(output, id => id === 1001, () => rejection);

  for (const [value, said] of [[undefined, 'undefined'], [null, 'null'], [0, '0'], ['', ''], [false, 'false'], [new Error(''), 'Error'], [new RangeError(''), 'RangeError']]) {
    rejection = value;

    const { reportData } = await run(TWELVE_LISTED, { concurrency: 1 });

    const { telemetry } = reportData;
    const what = `a rejection with ${JSON.stringify(value) ?? 'undefined'}`;
    assert.deepStrictEqual(telemetry.failures, [{ id: 1001, name: 'Test feature 1001', error: said }], what);
    assert.deepStrictEqual([telemetry.featuresAttempted, telemetry.featuresFailed, reportData.featuresCount], [12, 1, 11], what);
    assert.deepStrictEqual([telemetry.crawl.reached, telemetry.crawl.notReached], [12, []], `${what}: every feature is a result, a failure or not reached`);
    assert.ok(output.error.some(line => line.includes(`Skipped "Test feature 1001" (#1001): ${said}`)), what);
  }
});

test('when every feature fails, the run is refused with or without --force, and the first error is named', async (t) => {
  const { output } = await freshSandbox(t);
  breakLogAtFeatures(output, () => true);

  for (const force of [false, true]) {
    const { error } = await runExpectingFailure(TWELVE_LISTED, { concurrency: 1, force });

    assert.strictEqual(error.message, 'All 12 features failed to process; refusing to overwrite reports with an empty run. First error: the log broke');
    assert.strictEqual(await exists(config.reportsDir), false, 'no report directory may be created');
    assert.strictEqual(await exists(config.historyFilePath), false, 'no history may be written');
  }
});

test('--force publishes an empty report when ChromeStatus lists nothing: no features is not a crawl in which they all failed', async (t) => {
  await freshSandbox(t);

  const { reportData } = await run({ 153: 0, 154: 0 }, { force: true });

  assert.strictEqual(reportData.featuresCount, 0);
  assert.strictEqual(reportData.telemetry.qualityOverrides.length, 1);
  assert.match(reportData.telemetry.qualityOverrides[0], /no features/i);
  assert.deepStrictEqual([reportData.telemetry.failures, reportData.telemetry.crawl.reached, reportData.telemetry.crawl.notReached, reportData.telemetry.partial], [[], 0, [], false]);
  assert.strictEqual(JSON.parse(await readText(path.join(config.reportsDir, 'latest.json'))).featuresCount, 0);
});

test('most of the features not reached is refused like most of them failing; --force publishes it and says so', async (t) => {
  await freshSandbox(t);
  await run(TWELVE_LISTED);
  const before = await publishedState();
  const problem = '9 of 12 features are missing from the report (0 failed to process, 9 were not reached before the crawl deadline), which is too many to publish a meaningful report.';

  // Three of the twelve start, at 0, 10 and 20 minutes; the other nine would start after the deadline of 25.
  const { now, early } = crawlClock({ perFeature: 10 });
  const { error } = await runExpectingFailure(TWELVE_LISTED, { concurrency: 1, deadlineMinutes: 25, now }, { early });

  assert.strictEqual(error.message, `${problem} Refusing to publish: nothing was written and the published reports are untouched. Re-run with --force if this is expected, or with a smaller --limit (or MAX_FEATURES) so that the crawl finishes before its deadline.`);
  assert.deepStrictEqual(await publishedState(), before, 'the published report and history are as they were');

  const forced = await slowCrawl(25, { force: true });
  assert.strictEqual(forced.reportData.featuresCount, 3);
  assert.strictEqual(forced.reportData.telemetry.partial, true);
  assert.deepStrictEqual(forced.reportData.telemetry.qualityOverrides, [problem]);
  const markdown = await readText(forced.outputs.markdown);
  assert.match(markdown, /^> ⏱️ \*\*Partial run:\*\* The crawl reached its 25-minute deadline/m);
  assert.match(markdown, /^> ⚠️ \*\*Safety check overridden \(--force\):\*\* 9 of 12 features are missing from the report/m);
});

test('half of the features not reached is still a report; one more than half is not', async (t) => {
  await freshSandbox(t);

  // Six of twelve start (at 0 ... 50 minutes), the other six would start after the deadline of 55.
  const half = await slowCrawl(55);
  assert.deepStrictEqual([half.reportData.featuresCount, half.reportData.telemetry.partial], [6, true]);

  // Five start; seven of twelve are missing.
  const { now, early } = crawlClock({ perFeature: 10 });
  const { error } = await runExpectingFailure(TWELVE_LISTED, { concurrency: 1, deadlineMinutes: 45, now }, { early });
  assert.match(error.message, /^7 of 12 features are missing from the report \(0 failed to process, 7 were not reached/);
});

test('the deadline is measured from the start of the run, so the time spent listing the milestones counts', async (t) => {
  await freshSandbox(t);
  // Listing the two milestones takes 20 minutes, and each feature three. Features start at 20, 23, 26 and 29 minutes; with
  // a deadline of 25 the third is not started. (Four features: too few for the failure ratio to apply.)
  const { now, early } = crawlClock({ perMilestone: 10, perFeature: 3 });

  const { reportData } = await run({ 153: 2, 154: 2 }, { concurrency: 1, deadlineMinutes: 25, now }, { early });

  assert.deepStrictEqual(reportData.telemetry.crawl, {
    deadlineMinutes: 25,
    elapsedMinutes: 26,
    reached: 2,
    notReached: [{ id: 1000, name: 'Test feature 1000' }, { id: 1001, name: 'Test feature 1001' }],
  });
});

test('the time the crawl took is recorded to a tenth of a minute', async (t) => {
  await freshSandbox(t);
  const { now, early } = crawlClock({ perFeature: 0.34 });

  const { reportData } = await run(TWELVE_LISTED, { concurrency: 1, deadlineMinutes: 1000, now }, { early });

  assert.strictEqual(reportData.telemetry.crawl.elapsedMinutes, 4.1, '12 × 0.34 = 4.08 minutes');
});

test('a feature the crawl did not reach keeps the history entry it had; the ones it did reach are brought up to date', async (t) => {
  await freshSandbox(t);
  freezeClock(t);
  await run(TWELVE_LISTED);
  const before = (await readHistory()).features;
  t.mock.timers.tick(7 * DAY);

  const { reportData } = await slowCrawl(85);

  const after = (await readHistory()).features;
  assert.deepStrictEqual(Object.keys(after).sort(), Object.keys(before).sort(), 'no entry is lost');
  const left = reportData.telemetry.crawl.notReached.map(f => f.id);
  assert.deepStrictEqual(left, LISTING_ORDER.slice(9));
  for (const id of left) assert.deepStrictEqual(after[id], before[id], `#${id} was not looked at, so its entry is as it was`);
  for (const { feature } of reportData.features) {
    assert.ok(after[feature.id].lastSeen > before[feature.id].lastSeen, `#${feature.id} was looked at, so its entry is new`);
    assert.strictEqual(after[feature.id].metrics.length, 2, `#${feature.id} has this week's number as well as last week's`);
  }
  for (const id of left) assert.strictEqual(after[id].metrics.length, 1, `#${id} has no number for the week it was not looked at`);
});

test('after a partial crawl the features it did not reach go first, and over the weeks every feature gets its turn', async (t) => {
  await freshSandbox(t);
  freezeClock(t);
  const weeks = [];
  for (let week = 0; week < 3; week++) {
    weeks.push(await slowCrawl(85));
    t.mock.timers.tick(7 * DAY);
  }
  const [order, left] = [week => startedIds(week.calls), week => week.reportData.telemetry.crawl.notReached.map(f => f.id)];
  const listed = (...ranges) => ranges.flatMap(([from, to]) => LISTING_ORDER.slice(from, to));

  // The first week has no history, so every feature is new to it and they start in the order ChromeStatus lists them.
  assert.deepStrictEqual(order(weeks[0]), listed([0, 9]));
  assert.deepStrictEqual(left(weeks[0]), listed([9, 12]));
  // The second starts with the three that were left out: they were never looked at, the others were.
  assert.deepStrictEqual(order(weeks[1]), listed([9, 12], [0, 6]));
  assert.deepStrictEqual(left(weeks[1]), listed([6, 9]));
  // The third starts with the three the second left out, which were last looked at in the first week.
  assert.deepStrictEqual(order(weeks[2]), listed([6, 9], [0, 6]));
  assert.deepStrictEqual(left(weeks[2]), listed([9, 12]));
  assert.deepStrictEqual([...new Set(weeks.flatMap(order))].sort(), [...LISTING_ORDER].sort(), 'every feature was looked at');

  // Without a deadline there is nothing to leave out and nothing to put first: ChromeStatus's order, whatever the history says.
  const plain = await run(TWELVE_LISTED, { concurrency: 1 });
  assert.deepStrictEqual(startedIds(plain.calls), LISTING_ORDER);
  assert.strictEqual(plain.reportData.telemetry.partial, false);
});

test('with a deadline the features start stalest first, by the lastSeen of their history entry, and the ones never seen before them', async (t) => {
  await freshSandbox(t);
  await run(TWELVE_LISTED);
  const history = await readHistory();
  const days = { 1006: 10, 1008: 3, 1009: 10, 1010: 1, 1000: 5, 1002: 2, 1004: 20, 1005: 15 };
  for (const [id, day] of Object.entries(days)) history.features[id].lastSeen = `2026-09-${String(day).padStart(2, '0')}T08:00:00.000Z`;
  delete history.features[1007].lastSeen;
  history.features[1011].lastSeen = 'last tuesday';
  history.features[1001].lastSeen = 1_790_000_000_000;
  delete history.features[1003];
  await fs.writeFile(config.historyFilePath, JSON.stringify(history));
  const { now, early } = crawlClock();

  const { calls } = await run(TWELVE_LISTED, { concurrency: 1, deadlineMinutes: 1000, now }, { early });

  // Never seen, as ChromeStatus lists them: 1007 (no time), 1011 (not a time), 1001 (not a time either), 1003 (no entry).
  // Then the oldest first; 1006 and 1009 were last seen at the same moment, so they stay in ChromeStatus's order.
  assert.deepStrictEqual(startedIds(calls), [1007, 1011, 1001, 1003, 1010, 1002, 1008, 1000, 1006, 1009, 1005, 1004]);
});

test('the order of a history from before schemaVersion, with nothing but the old fields, is read the same way', async (t) => {
  await freshSandbox(t);
  await run(TWELVE_LISTED);
  const history = await readHistory();
  delete history.schemaVersion;
  LISTING_ORDER.forEach((id, index) => {
    const entry = history.features[id];
    for (const field of ['seen', 'metrics', 'lastMomentumBasis', 'lastAi']) delete entry[field];
    // The most recently listed feature was seen the longest ago.
    entry.lastSeen = `2026-09-${String(20 - index).padStart(2, '0')}T08:00:00.000Z`;
  });
  await fs.writeFile(config.historyFilePath, JSON.stringify(history, null, 2));
  const { now, early } = crawlClock();

  const { reportData, calls } = await run(TWELVE_LISTED, { concurrency: 1, deadlineMinutes: 1000, now }, { early });

  assert.deepStrictEqual(startedIds(calls), [...LISTING_ORDER].reverse());
  assert.strictEqual(reportData.featuresCount, 12);
  assert.ok(reportData.features.every(({ delta }) => delta.isNewFeature === false), 'the old history was read');
  assert.strictEqual((await readHistory()).schemaVersion, 2, 'and is upgraded');
});

test('the next crawl after a partial one is not partial when it has the time, and then every feature is in the report', async (t) => {
  await freshSandbox(t);
  freezeClock(t);
  const partial = await slowCrawl(85);
  assert.strictEqual(partial.reportData.telemetry.partial, true);
  t.mock.timers.tick(7 * DAY);

  const complete = await slowCrawl(1000);

  assert.strictEqual(complete.reportData.telemetry.partial, false);
  assert.strictEqual(complete.reportData.featuresCount, 12);
  assert.deepStrictEqual(complete.reportData.telemetry.crawl.notReached, []);
  assert.ok(!(await readText(complete.outputs.markdown)).includes('Partial'));
  assert.ok(!(await readText(complete.outputs.html)).includes('Partial'));
  assert.deepStrictEqual(
    complete.reportData.features.filter(f => f.delta.isNewFeature).map(f => f.feature.id).sort(),
    LISTING_ORDER.slice(9).sort(),
    'the three that the partial crawl never reached are new now, and only they'
  );
});

test('the report of a partial crawl is the baseline of the next run by what ChromeStatus listed, not by how many features it reached', async (t) => {
  await freshSandbox(t);
  await slowCrawl(85);
  const before = await publishedState();
  const published = JSON.parse(before.latest);
  assert.deepStrictEqual([published.featuresCount, published.telemetry.featuresAvailable], [9, 12]);

  // Five features: more than half of the nine in the report, but fewer than half of the twelve ChromeStatus listed.
  const { error } = await runExpectingFailure({ 153: 3, 154: 2 }, { concurrency: 1 });

  assert.match(error.message, /only 5 features for Chrome 153, 154, but it listed 12 /);
  assert.deepStrictEqual(await publishedState(), before);
});

// --- guardrails: warnings, never gates -----------------------------------------------------------------------------------

/** The report without the two blocks the guardrails add last: the size check is measured on what is written without them. */
const withoutGuardrailBlocks = reportData => ({
  ...reportData,
  telemetry: Object.fromEntries(Object.entries(reportData.telemetry).filter(([key]) => key !== 'providers' && key !== 'guardrails')),
});

/** Every request to api.github.com answers an empty search, so that GitHub is a provider that answered 200 each time. */
const githubAnswers = { match: url => url.startsWith('https://api.github.com/'), json: { items: [] } };
const githubCallsOf = calls => calls.filter(url => url.startsWith('https://api.github.com/')).length;

/** Gives the crawler an X token for the length of one test, and takes it away again so the next test has none. */
function useX(t) {
  const before = config.twitterBearerToken;
  config.twitterBearerToken = 'test-x-token-do-not-log';
  t.after(() => { config.twitterBearerToken = before; });
}
const xRefuses = status => ({ match: url => url.startsWith('https://api.twitter.com/'), status, json: { title: 'refused' } });

const GUARDRAIL_IDS = ['grounding-redirects', 'high-momentum-share', 'stale-new-articles', 'github-client-errors', 'latest-json-size'];

test('a clean run records how each provider answered and that every guardrail held, and says nothing about it', async (t) => {
  const { output } = await freshSandbox(t);
  setEnv(t, 'GITHUB_ACTIONS', 'true');

  const { reportData, calls } = await run({ 153: 12 }, { milestone: '153' }, { routes: [...hackerNewsFor(TWELVE), githubAnswers] });

  const github = githubCallsOf(calls);
  const { providers, guardrails } = reportData.telemetry;
  assert.ok(github > 0, 'the crawl asked GitHub something');
  assert.deepStrictEqual(providers, { github: { responses: github, clientErrors: 0, statuses: { 200: github } } });
  assert.deepStrictEqual(guardrails.warnings, []);
  assert.deepStrictEqual(guardrails.checks.map(({ id, ok, skipped }) => [id, ok, skipped]), GUARDRAIL_IDS.map(id => [
    id,
    true,
    id === 'github-client-errors' && github < GUARDRAIL_LIMITS.minProviderResponses,
  ]));
  assert.deepStrictEqual(guardrails.checks.slice(0, 3).map(({ value, limit }) => [value, limit]), [[0, 0], [0.167, 0.5], [0, 0.2]], 'two of the twelve are High; none of the "new" articles is old');
  assert.ok(guardrails.checks.at(-1).value > 0 && guardrails.checks.at(-1).limit === 15_000_000, 'the size of the JSON report was measured');

  assert.deepStrictEqual(output.log.filter(line => line.startsWith('::')), [], 'not one annotation');
  assert.ok(!output.error.some(line => /this check allows|could not be checked/.test(line)), output.error.join('\n'));
  assert.ok(output.log.some(line => line.includes(`ℹ [Provider summary] GitHub API: ${github} response(s) (200 ×${github})`)), output.log.join('\n'));

  const published = JSON.parse(await readText(path.join(config.reportsDir, 'latest.json')));
  assert.deepStrictEqual(published.telemetry.providers, providers);
  assert.deepStrictEqual(published.telemetry.guardrails, guardrails);
  const history = await readHistory();
  assert.deepStrictEqual(history.telemetry.providers, providers, 'the history snapshot keeps the telemetry of the run');
  assert.deepStrictEqual(history.telemetry.guardrails, guardrails);
});

test('a provider that refuses what it is sent is a warning in the log, an annotation and the telemetry; the report is still published', async (t) => {
  const { output } = await freshSandbox(t);
  setEnv(t, 'GITHUB_ACTIONS', 'true');
  useX(t);

  const { reportData, outputs } = await run(
    { 153: 12 },
    { milestone: '153', guardrailLimits: { ...GUARDRAIL_LIMITS, minProviderResponses: 5 } },
    { routes: [...hackerNewsFor(TWELVE), xRefuses(401)] }
  );

  const { x } = reportData.telemetry.providers;
  assert.ok(x.responses >= 5, `X was asked ${x.responses} times`);
  assert.deepStrictEqual(x, { responses: x.responses, clientErrors: x.responses, statuses: { 401: x.responses } });
  assert.strictEqual(reportData.featuresCount, 12, 'a report with a refused provider is still the report');

  const { warnings } = reportData.telemetry.guardrails;
  assert.strictEqual(warnings.length, 1);
  assert.ok(warnings[0].startsWith(`X (Twitter) API refused ${x.responses} of ${x.responses} requests (100%; 401 ×${x.responses}), `), warnings[0]);
  assert.deepStrictEqual(reportData.telemetry.guardrails.checks.find(check => check.id === 'x-client-errors'),
    { id: 'x-client-errors', ok: false, skipped: false, value: 1, limit: 0.02, sample: [`401 ×${x.responses}`] });

  assert.ok(output.error.some(line => line.includes(`⚠ ${warnings[0]}`)), 'in the log');
  // The 401s also log warnings of their own ("Check your TWITTER_BEARER_TOKEN or X_BEARER_TOKEN"); only the guardrail is an annotation.
  assert.deepStrictEqual(output.log.filter(line => line.startsWith('::')), [`::warning title=Report guardrail::${escapeWorkflowData(warnings[0])}`]);
  assert.ok(output.log.some(line => line.includes(`ℹ [Provider summary] X (Twitter) API: ${x.responses} response(s) (401 ×${x.responses}), ${x.responses} of them client errors`)));

  const published = JSON.parse(await readText(path.join(config.reportsDir, 'latest.json')));
  assert.deepStrictEqual(published.telemetry.guardrails.warnings, warnings);
  for (const file of [outputs.markdown, outputs.html, outputs.rss]) {
    assert.ok(!(await readText(file)).includes('this check allows'), `${path.basename(file)} does not carry the warnings`);
  }
});

test('the size of the JSON report is judged as the file is written: in bytes, as version 2, without the blocks that describe the check', async (t) => {
  await freshSandbox(t);
  // A title with characters that take more than a byte each, so that a count of characters would be told from a count of bytes.
  const accented = {
    match: url => url.startsWith('https://hn.algolia.com/api/v1/search?') && decodeURIComponent(url).includes('Test feature 1000'),
    json: { hits: [{ objectID: 'hn1000', title: 'Test feature 1000 lands in Chrome ☕ café', url: 'https://blog.example/test-feature-1000', points: 5, num_comments: 0, created_at: daysAgo(3) }] },
  };

  const { reportData } = await run({ 153: 2 }, { milestone: '153', guardrailLimits: { ...GUARDRAIL_LIMITS, latestJsonBytes: 1000 } }, { routes: [accented] });

  const written = JSON.stringify(normaliseReport(withoutGuardrailBlocks(reportData)));
  const bytes = Buffer.byteLength(written);
  assert.ok(bytes > written.length, 'the report holds characters of more than one byte');
  const { checks, warnings } = reportData.telemetry.guardrails;
  assert.deepStrictEqual(checks.find(check => check.id === 'latest-json-size'), { id: 'latest-json-size', ok: false, skipped: false, value: bytes, limit: 1000 });
  assert.strictEqual(warnings.length, 1);
  assert.ok(warnings[0].includes(`(${String(bytes).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} bytes), more than the 0 MB (1,000 bytes) this check allows.`), warnings[0]);

  const published = await readText(path.join(config.reportsDir, 'latest.json'));
  assert.strictEqual(published, JSON.stringify(normaliseReport(reportData)), 'the file is the normalised report, blocks included');
  assert.ok(Buffer.byteLength(published) > bytes, 'so it is a little larger than what was measured, by those two blocks');
});

test('a guardrail that cannot be assessed is one more warning, never a failed run', async (t) => {
  const { output } = await freshSandbox(t);
  setEnv(t, 'GITHUB_ACTIONS', 'true');
  const limits = { get groundingRedirects() { throw new Error('the limits could not be read'); } };

  const { reportData, outputs } = await run({ 153: 3 }, { milestone: '153', guardrailLimits: limits });

  const warning = 'The report guardrails could not be checked: the limits could not be read';
  assert.deepStrictEqual(reportData.telemetry.guardrails, { checks: [], warnings: [warning] });
  assert.ok(output.error.some(line => line.includes(`⚠ ${warning}`)));
  assert.deepStrictEqual(output.log.filter(line => line.startsWith('::')), [`::warning title=Report guardrail::${warning}`]);
  assert.ok(await exists(outputs.json), 'the report was published all the same');
  assert.ok(await exists(config.historyFilePath), 'and the history was saved');
  assert.ok(reportData.telemetry.providers.github.responses > 0, 'what the providers answered is still recorded');
});

test('what the providers answered is counted for one run at a time', async (t) => {
  await freshSandbox(t);
  useX(t);

  const first = await run({ 153: 12 }, { milestone: '153' }, { routes: [...hackerNewsFor(TWELVE), xRefuses(401)] });
  assert.ok(first.reportData.telemetry.providers.x.responses > 0);

  config.twitterBearerToken = '';
  const second = await run({ 153: 12 }, { milestone: '153' }, { routes: hackerNewsFor(TWELVE) });

  assert.strictEqual(second.reportData.telemetry.providers.x, undefined, "the first run's answers are not carried into the second");
  assert.deepStrictEqual(second.reportData.telemetry.guardrails.checks.filter(check => check.id.startsWith('x-')), []);
});

test('a Gemini redirect that is left in a feature is counted, and the feature is named', async (t) => {
  await freshSandbox(t);
  const redirect = `https://${GROUNDING_REDIRECT_HOST}/grounding-api-redirect/left-behind`;
  const early = [{ match: url => url.endsWith('/api/v0/features/1000'), text: XSSI + JSON.stringify({ ...rawFeature(1000, 153), explainer_links: [redirect] }) }];

  const { reportData } = await run({ 153: 3 }, { milestone: '153' }, { early });

  const { checks, warnings } = reportData.telemetry.guardrails;
  assert.deepStrictEqual(checks.find(check => check.id === 'grounding-redirects'), { id: 'grounding-redirects', ok: false, skipped: false, value: 1, limit: 0, sample: ['Test feature 1000'] });
  assert.strictEqual(warnings.length, 1);
  assert.ok(warnings[0].startsWith(`1 link(s) on ${GROUNDING_REDIRECT_HOST}, `), warnings[0]);
  assert.ok(warnings[0].includes('(in 1 feature(s), among them "Test feature 1000")'), warnings[0]);
});

const NO_LIMIT_IS_MET = {
  groundingRedirects: -1,
  highMomentumShare: -1,
  minFeaturesForMomentum: 1,
  staleNewShare: -1,
  minDatedNewArticles: 1,
  providerClientErrorShare: -1,
  minProviderResponses: 1,
  latestJsonBytes: 1,
};

test('with limits that nothing can meet, every check is made and every one of them warns: each is wired to its sentence and to the annotation', async (t) => {
  const { output } = await freshSandbox(t);
  setEnv(t, 'GITHUB_ACTIONS', 'true');

  const { reportData } = await run({ 153: 12 }, { milestone: '153', guardrailLimits: NO_LIMIT_IS_MET }, { routes: [...hackerNewsFor(TWELVE), githubAnswers] });

  const { checks, warnings } = reportData.telemetry.guardrails;
  assert.deepStrictEqual(checks.map(check => check.id), GUARDRAIL_IDS);
  assert.ok(checks.every(check => check.ok === false && check.skipped === false), JSON.stringify(checks));
  assert.strictEqual(warnings.length, GUARDRAIL_IDS.length);
  assert.deepStrictEqual(
    output.log.filter(line => line.startsWith('::')),
    warnings.map(warning => `::warning title=Report guardrail::${escapeWorkflowData(warning)}`),
    'one annotation for each warning, in order'
  );
  assert.deepStrictEqual(warnings.map(warning => warning.split(' ').slice(0, 2).join(' ')), ['0 link(s)', '2 of', '0 of', 'GitHub API', 'The JSON']);
});

test('the provider summary is logged even when the run is then refused, and nothing is assessed or written', async (t) => {
  const { output } = await freshSandbox(t);
  setEnv(t, 'GITHUB_ACTIONS', 'true');
  // Seven features whose history entry is damaged are dropped after they were investigated: more than half of the twelve.
  await fs.mkdir(config.dataDir, { recursive: true });
  const features = Object.fromEntries(Array.from({ length: 7 }, (_, i) => [1004 + i, { knownUrls: 5 }]));
  await fs.writeFile(config.historyFilePath, JSON.stringify({ lastRun: '2026-01-01T00:00:00.000Z', features }));

  const { error } = await runExpectingFailure({ 153: 6, 154: 6 });

  assert.match(error.message, /7 of 12 features failed to process/);
  assert.ok(output.log.some(line => /^ℹ \[Provider summary\] GitHub API: \d+ response\(s\) \(404 ×\d+\)$/.test(line)), output.log.join('\n'));
  assert.ok(!output.error.some(line => /this check allows|could not be checked/.test(line)), 'a report that is not written is not judged');
  assert.deepStrictEqual(output.log.filter(line => line.startsWith('::warning title=Report guardrail')), []);
  assert.strictEqual(await exists(config.reportsDir), false);
});
