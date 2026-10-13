import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import { clearProviderKeys } from './_support/fetch-mock.js';

// Clear keys BEFORE importing the planner (which transitively imports config.js)
const restore = clearProviderKeys();
const { planEcosystemQueries } = await import('../src/search/query-planner.js');

test('planEcosystemQueries generates reverse-link queries for ChromeStatus, explainers, and specs', async (t) => {
  t.after(restore);
  const feature = {
    id: 5201832664629248,
    name: 'Additional Windowing Controls',
    summary: 'Enable web applications to maximize, minimize, and restore their windows using `window.maximize()` and `display-state`.',
    specUrl: 'https://www.w3.org/TR/window-management/#api-window-minimize-method',
    explainerUrls: ['https://github.com/explainers-by-googlers/additional-windowing-controls'],
  };

  const queries = await planEcosystemQueries(feature);
  assert.ok(Array.isArray(queries), 'Returns an array of queries');
  assert.ok(queries.length >= 3, 'Generates multiple diverse queries');

  // Check ChromeStatus reverse search
  const csReverse = queries.find(q => q.intent === 'reverse-link-chromestatus');
  assert.ok(csReverse, 'Has ChromeStatus reverse link query');
  assert.ok(csReverse.isReverseLink, 'Marked as reverse link');
  assert.ok(csReverse.query.includes('chromestatus.com/feature/5201832664629248'), 'Contains ChromeStatus URL');
  assert.ok(csReverse.query.includes('-site:chromestatus.com'), 'Excludes self-domain');

  // Check Explainer reverse search
  const explainerReverse = queries.find(q => q.intent === 'reverse-link-explainer');
  assert.ok(explainerReverse, 'Has explainer reverse link query');
  assert.ok(explainerReverse.query.includes('github.com/explainers-by-googlers/additional-windowing-controls'), 'Contains explainer path');

  // Check Spec reverse search
  const specReverse = queries.find(q => q.intent === 'reverse-link-spec');
  assert.ok(specReverse, 'Has spec reverse link query');
  assert.ok(specReverse.query.includes('w3.org/TR/window-management'), 'Contains spec path');
});

test('planEcosystemQueries generates code syntax and tutorial queries as fallbacks (offline deterministic)', async () => {
  const feature = {
    id: 99999,
    name: 'Web Install API',
    summary: 'Exposes `navigator.install()` to trigger web app installation.',
  };

  const queries = await planEcosystemQueries(feature);
  
  // Assert heuristic branch was used (it produces 'core-api' and 'api-syntax' intents which LLM doesn't typically output in this exact deterministic structure)
  const coreApiQuery = queries.find(q => q.intent === 'core-api');
  assert.ok(coreApiQuery, 'Heuristic fallback was used: core-api query generated');

  const syntaxQuery = queries.find(q => q.intent === 'api-syntax' || q.query.includes('navigator.install'));
  assert.ok(syntaxQuery, 'Generates API syntax query');

  const tutorialQuery = queries.find(q => q.intent === 'tutorials-blogs');
  assert.ok(tutorialQuery, 'Generates tutorial / blog query');
});

// --- the LLM extension of the plan is optional ---------------------------------

const { config } = await import('../src/config.js');
const { installGeminiMock, answer } = await import('./_support/gemini-mock.js');

const PLANNER_FEATURE = { id: 77, name: 'Blorp Panels', summary: 'Panels that blorp.' };
const LLM_QUERY = '"Blorp Panels" hands-on review';

/** A planner whose Gemini answers with one extra query, and a record of what it was asked. */
function withPlannerGemini(t) {
  const saved = config.geminiApiKey;
  config.geminiApiKey = 'test-key';
  const gemini = installGeminiMock(() => answer(JSON.stringify({
    queries: [{ query: LLM_QUERY, intent: 'tutorials-blogs', description: 'reviews' }],
  })));
  t.after(() => {
    gemini.restore();
    config.geminiApiKey = saved;
  });
  return gemini;
}

test('the planner asks the LLM for extra queries by default', async (t) => {
  const gemini = withPlannerGemini(t);

  const queries = await planEcosystemQueries(PLANNER_FEATURE);

  assert.strictEqual(gemini.calls.length, 1);
  assert.ok(queries.some(q => q.query === LLM_QUERY));
});

test('useLlm: false skips the LLM call and plans only the deterministic queries', async (t) => {
  const gemini = withPlannerGemini(t);

  const queries = await planEcosystemQueries(PLANNER_FEATURE, { useLlm: false });

  assert.strictEqual(gemini.calls.length, 0, 'not a single request may be made');
  assert.ok(!queries.some(q => q.query === LLM_QUERY));
  assert.ok(queries.some(q => q.intent === 'core-api'));
  assert.ok(queries.some(q => q.intent === 'reverse-link-chromestatus'));
});

test('the plan is the same with or without the LLM apart from the LLM\'s own queries', async (t) => {
  withPlannerGemini(t);

  const withLlm = await planEcosystemQueries(PLANNER_FEATURE);
  const without = await planEcosystemQueries(PLANNER_FEATURE, { useLlm: false });

  assert.deepStrictEqual(withLlm.filter(q => q.query !== LLM_QUERY), without);
});

test('standards-position issues are not turned into reverse-link queries (nothing ever supplied them)', async () => {
  const queries = await planEcosystemQueries(PLANNER_FEATURE, {
    useLlm: false,
    standards: [{ vendor: 'Mozilla', url: 'https://github.com/mozilla/standards-positions/issues/1' }],
  });

  assert.ok(!queries.some(q => q.intent === 'reverse-link-standards'));
  assert.ok(!queries.some(q => q.query.includes('standards-positions/issues/1')));
});
