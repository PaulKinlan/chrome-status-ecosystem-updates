import test from 'node:test';
import assert from 'node:assert';
import { planEcosystemQueries } from '../src/search/query-planner.js';

test('planEcosystemQueries generates reverse-link queries for ChromeStatus, explainers, and specs', async () => {
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

test('planEcosystemQueries generates code syntax and tutorial queries as fallbacks', async () => {
  const feature = {
    id: 99999,
    name: 'Web Install API',
    summary: 'Exposes `navigator.install()` to trigger web app installation.',
  };

  const queries = await planEcosystemQueries(feature);
  const syntaxQuery = queries.find(q => q.intent === 'api-syntax' || q.query.includes('navigator.install'));
  assert.ok(syntaxQuery, 'Generates API syntax query');

  const tutorialQuery = queries.find(q => q.intent === 'tutorials-blogs');
  assert.ok(tutorialQuery, 'Generates tutorial / blog query');
});
