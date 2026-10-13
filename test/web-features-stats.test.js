import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test, { beforeEach } from 'node:test';
import assert from 'node:assert';
import { logger } from '../src/logger.js';
import {
  recordMappings,
  recordFeatureMapping,
  recordWebStatusRequest,
  webFeatureStatsSnapshot,
  describeWebFeatureStats,
  resetWebFeatureStats,
  warnIfMappingsUnavailable,
} from '../src/web-features-stats.js';

/**
 * Baseline, test pass rates, positions and usage all come from the web-features
 * mapping. If it cannot be downloaded they all vanish for the whole run, which
 * looks like a week with nothing to report; the counters make it visible.
 */

beforeEach(resetWebFeatureStats);

const EMPTY = {
  mappings: null,
  features: { mapped: 0, unmapped: 0 },
  webstatus: { requests: 0, ok: 0, absent: 0, failed: 0 },
};

/** Whatever logger.warn is asked to print while `fn` runs. */
function captureWarnings(t, fn) {
  const warnings = [];
  t.mock.method(logger, 'warn', message => warnings.push(String(message)));
  const result = fn();
  return { warnings, result };
}

test('a fresh run has counted nothing, and says nothing', () => {
  assert.deepStrictEqual(webFeatureStatsSnapshot(), EMPTY);
  assert.deepStrictEqual(describeWebFeatureStats(), []);
});

test('the outcome of loading the mapping is recorded as given', () => {
  recordMappings({ available: true, chromeStatusIds: 2023, groups: 732, missing: ['wpt.json'] });
  assert.deepStrictEqual(webFeatureStatsSnapshot().mappings, { available: true, chromeStatusIds: 2023, groups: 732, missing: ['wpt.json'] });

  recordMappings({ available: false });
  assert.deepStrictEqual(webFeatureStatsSnapshot().mappings, { available: false, chromeStatusIds: 0, groups: 0, missing: [] });

  // Only a real `true` counts as available.
  recordMappings({ available: 'yes' });
  assert.strictEqual(webFeatureStatsSnapshot().mappings.available, true);
  recordMappings({ available: 0 });
  assert.strictEqual(webFeatureStatsSnapshot().mappings.available, false);
});

test('a feature is counted once, however often it is asked about, and a group found later wins over an earlier miss', () => {
  recordFeatureMapping(1, true);
  recordFeatureMapping('1', true);
  recordFeatureMapping(2, false);
  recordFeatureMapping(2, false);
  assert.deepStrictEqual(webFeatureStatsSnapshot().features, { mapped: 1, unmapped: 1 });

  // A feature once mapped is never counted as unmapped afterwards...
  recordFeatureMapping(1, false);
  assert.deepStrictEqual(webFeatureStatsSnapshot().features, { mapped: 1, unmapped: 1 });
  // ...and one counted as unmapped moves when it turns out to be mapped.
  recordFeatureMapping(2, true);
  assert.deepStrictEqual(webFeatureStatsSnapshot().features, { mapped: 2, unmapped: 0 });
});

test('webstatus.dev requests are told apart as answered, unknown and failed', () => {
  for (const outcome of ['ok', 'ok', 'absent', 'failed', 'whatever']) recordWebStatusRequest(outcome);
  assert.deepStrictEqual(webFeatureStatsSnapshot().webstatus, { requests: 5, ok: 2, absent: 1, failed: 2 });
});

test('the snapshot is a copy: changing it changes no count', () => {
  recordMappings({ available: true, chromeStatusIds: 1, groups: 1, missing: ['usage'] });
  const snapshot = webFeatureStatsSnapshot();
  snapshot.mappings.missing.push('x');
  snapshot.mappings.available = false;
  snapshot.features.mapped = 99;
  snapshot.webstatus.ok = 99;

  const again = webFeatureStatsSnapshot();
  assert.deepStrictEqual(again.mappings, { available: true, chromeStatusIds: 1, groups: 1, missing: ['usage'] });
  assert.strictEqual(again.features.mapped, 0);
  assert.strictEqual(again.webstatus.ok, 0);

  // The list passed in is copied too.
  const missing = ['wpt.json'];
  recordMappings({ available: true, missing });
  missing.push('y');
  assert.deepStrictEqual(webFeatureStatsSnapshot().mappings.missing, ['wpt.json']);
});

test('a reset clears everything', () => {
  recordMappings({ available: true, chromeStatusIds: 5, groups: 2, missing: [] });
  recordFeatureMapping(1, true);
  recordFeatureMapping(2, false);
  recordWebStatusRequest('ok');
  recordWebStatusRequest('absent');
  recordWebStatusRequest('failed');

  resetWebFeatureStats();
  assert.deepStrictEqual(webFeatureStatsSnapshot(), EMPTY);
});

test('the log says how many features are in a group, what was not loaded and how webstatus.dev answered', () => {
  recordMappings({ available: true, chromeStatusIds: 10, groups: 4, missing: ['wpt.json', 'chrome-use-counters.json'] });
  recordFeatureMapping(1, true);
  recordFeatureMapping(2, true);
  recordFeatureMapping(3, false);
  for (const outcome of ['ok', 'ok', 'ok', 'absent', 'failed', 'failed']) recordWebStatusRequest(outcome);

  assert.deepStrictEqual(describeWebFeatureStats(), [
    '2 of 3 feature(s) belong to a web-features group; not loaded: wpt.json, chrome-use-counters.json',
    'webstatus.dev answered 3 of 6 request(s), 1 group(s) unknown to it, 2 failed',
  ]);
});

test('the log leaves out what did not happen', () => {
  recordMappings({ available: true, chromeStatusIds: 10, groups: 4, missing: [] });
  recordFeatureMapping(1, true);
  assert.deepStrictEqual(describeWebFeatureStats(), ['1 of 1 feature(s) belong to a web-features group']);

  recordWebStatusRequest('ok');
  assert.deepStrictEqual(describeWebFeatureStats().slice(1), ['webstatus.dev answered 1 of 1 request(s)']);

  recordWebStatusRequest('absent');
  assert.deepStrictEqual(describeWebFeatureStats().slice(1), ['webstatus.dev answered 1 of 2 request(s), 1 group(s) unknown to it']);

  recordWebStatusRequest('failed');
  assert.deepStrictEqual(describeWebFeatureStats().slice(1), ['webstatus.dev answered 1 of 3 request(s), 1 group(s) unknown to it, 1 failed']);
});

test('with no mapping the log says what is missing instead of counting features', () => {
  recordMappings({ available: false });
  recordFeatureMapping(1, false);
  recordWebStatusRequest('ok');

  const lines = describeWebFeatureStats();
  assert.strictEqual(lines.length, 1);
  assert.match(lines[0], /^web-features mappings could not be loaded/);
  assert.match(lines[0], /Baseline falls back to a search by name/);
});

test('the log describes the snapshot it is given, not only the live counts', () => {
  const lines = describeWebFeatureStats({
    mappings: { available: true, chromeStatusIds: 3, groups: 1, missing: [] },
    features: { mapped: 7, unmapped: 3 },
    webstatus: { requests: 0, ok: 0, absent: 0, failed: 0 },
  });
  assert.deepStrictEqual(lines, ['7 of 10 feature(s) belong to a web-features group']);
});

test('a mapping that could not be loaded is warned about, once, with the reason it matters', (t) => {
  recordMappings({ available: false });
  const { warnings, result } = captureWarnings(t, () => warnIfMappingsUnavailable());

  assert.strictEqual(warnings.length, 1);
  assert.strictEqual(result, warnings[0]);
  assert.match(result, /web-features mapping could not be loaded/);
  assert.match(result, /raw\.githubusercontent\.com/);
});

test('a mapping that loaded, or that was never asked for, is not warned about', (t) => {
  assert.strictEqual(captureWarnings(t, () => warnIfMappingsUnavailable()).result, null, 'never asked for');
  recordMappings({ available: true, chromeStatusIds: 1, groups: 1, missing: ['wpt.json'] });
  const { warnings, result } = captureWarnings(t, () => warnIfMappingsUnavailable());
  assert.strictEqual(result, null);
  assert.deepStrictEqual(warnings, []);
});

test('the warning is decided by the snapshot it is given', (t) => {
  const { warnings, result } = captureWarnings(t, () => warnIfMappingsUnavailable({ mappings: { available: false, missing: [] } }));
  assert.strictEqual(warnings.length, 1);
  assert.ok(result);
  assert.strictEqual(captureWarnings(t, () => warnIfMappingsUnavailable({ mappings: { available: true, missing: [] } })).result, null);
  assert.strictEqual(captureWarnings(t, () => warnIfMappingsUnavailable({ mappings: null })).result, null);
});
