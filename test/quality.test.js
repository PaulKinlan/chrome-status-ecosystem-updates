import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import {
  assessUpstreamCount,
  assessFailureRatio,
  assessAiCoverage,
  MIN_PUBLISHED_FOR_RATIO,
  MIN_AI_COVERAGE,
  MIN_FEATURES_FOR_AI_COVERAGE,
} from '../src/quality.js';

// The published window is the previous week's: it shares a milestone with the one being
// reported, as consecutive scheduled runs do.
const published = (overrides = {}) => ({
  featuresCount: 100,
  upstreamCount: null,
  milestones: [151, 152],
  statusTypes: ['enabled', 'flagged'],
  weekString: '2026-W40',
  ...overrides,
});

const window = { milestones: [152, 153], statusTypes: ['flagged', 'enabled'] };

test('zero features is never believable, with or without a published report', () => {
  for (const pub of [null, published()]) {
    const verdict = assessUpstreamCount({ ...window, count: 0, published: pub });
    assert.strictEqual(verdict.ok, false);
    assert.match(verdict.problem, /no features/);
    assert.match(verdict.problem, /Chrome 152, 153/);
    assert.match(verdict.problem, /flagged, enabled/);
  }
});

test('with nothing published, any non-zero count is accepted', () => {
  assert.deepStrictEqual(assessUpstreamCount({ ...window, count: 1, published: null }), { ok: true });
});

test('a drop of more than half against a comparable published report is refused', () => {
  const verdict = assessUpstreamCount({ ...window, count: 49, published: published() });
  assert.strictEqual(verdict.ok, false);
  assert.match(verdict.problem, /only 49 features/);
  assert.match(verdict.problem, /\b100\b/);
  assert.match(verdict.problem, /2026-W40/);
  assert.match(verdict.problem, /51%/);
});

test('exactly half is the boundary, and is accepted', () => {
  assert.strictEqual(assessUpstreamCount({ ...window, count: 50, published: published() }).ok, true);
  assert.strictEqual(assessUpstreamCount({ ...window, count: 51, published: published() }).ok, true);
  assert.strictEqual(assessUpstreamCount({ ...window, count: 120, published: published() }).ok, true);
});

test('a small published report is too noisy to compare against', () => {
  const tiny = published({ featuresCount: MIN_PUBLISHED_FOR_RATIO - 1 });
  assert.strictEqual(assessUpstreamCount({ ...window, count: 1, published: tiny }).ok, true);

  const justEnough = published({ featuresCount: MIN_PUBLISHED_FOR_RATIO });
  assert.strictEqual(assessUpstreamCount({ ...window, count: 4, published: justEnough }).ok, false);
});

test('a different milestone window size is not comparable', () => {
  const verdict = assessUpstreamCount({
    count: 5,
    milestones: [153],
    statusTypes: ['enabled', 'flagged'],
    published: published({ milestones: [150, 151, 152, 153, 154] }),
  });
  assert.strictEqual(verdict.ok, true);
});

test('status filters are compared as sets, and different ones are not comparable', () => {
  // Same set, different order: still comparable, so the collapse is caught.
  assert.strictEqual(
    assessUpstreamCount({ ...window, count: 10, published: published({ statusTypes: ['enabled', 'flagged'] }) }).ok,
    false
  );
  // Different filters: a smaller count is expected.
  assert.strictEqual(
    assessUpstreamCount({ ...window, count: 10, published: published({ statusTypes: ['enabled', 'flagged', 'removed'] }) }).ok,
    true
  );
});

test('a published report from before filters were recorded is still compared', () => {
  const legacy = published({ statusTypes: null });
  assert.strictEqual(assessUpstreamCount({ ...window, count: 10, published: legacy }).ok, false);
});

test('a published window over entirely different releases is not a baseline (a one-off run must not poison later ones)', () => {
  const oldReleases = published({ milestones: [100, 101] });
  assert.strictEqual(assessUpstreamCount({ ...window, count: 10, published: oldReleases }).ok, true);

  // The same size and count, but sharing a milestone: now it is a baseline.
  assert.strictEqual(assessUpstreamCount({ ...window, count: 10, published: published() }).ok, false);
});

test('how much of the window has to be shared: at least half, so the weekly slide is always comparable', () => {
  const five = { statusTypes: ['enabled'], milestones: [149, 150, 151, 152, 153] };
  const base = { statusTypes: ['enabled'], featuresCount: 100, upstreamCount: null, weekString: null };
  const verdict = (publishedMilestones) =>
    assessUpstreamCount({ ...five, count: 10, published: { ...base, milestones: publishedMilestones } }).ok;

  assert.strictEqual(verdict([148, 149, 150, 151, 152]), false, 'a normal weekly slide shares 4 of 5');
  assert.strictEqual(verdict([147, 148, 149, 150, 151]), false, 'a slide of two releases shares 3 of 5');
  assert.strictEqual(verdict([146, 147, 148, 149, 150]), true, 'sharing 2 of 5 is less than half');
  assert.strictEqual(verdict([140, 141, 142, 143, 144]), true, 'nothing shared');
});

test('milestones are matched whether they are written as numbers or as strings', () => {
  // JSON written by another tool (or an older version) may carry them as strings.
  const asStrings = published({ milestones: ['151', '152'] });
  assert.strictEqual(assessUpstreamCount({ ...window, count: 10, published: asStrings }).ok, false);
});

test('a window of one release is compared only with the very same release', () => {
  const one = { milestones: [153], statusTypes: ['enabled'] };
  const base = { featuresCount: 100, upstreamCount: null, statusTypes: ['enabled'], weekString: null };
  assert.strictEqual(assessUpstreamCount({ ...one, count: 10, published: { ...base, milestones: [153] } }).ok, false);
  assert.strictEqual(assessUpstreamCount({ ...one, count: 10, published: { ...base, milestones: [152] } }).ok, true);
});

test('the baseline is what ChromeStatus listed, not how many features a capped report kept', () => {
  // A report capped at 150 out of 400: 400 is what ChromeStatus had, and 100 is a collapse...
  const capped = published({ featuresCount: 150, upstreamCount: 400 });
  const verdict = assessUpstreamCount({ ...window, count: 100, published: capped });
  assert.strictEqual(verdict.ok, false);
  assert.match(verdict.problem, /only 100 features/);
  assert.match(verdict.problem, /it listed 400 for Chrome 151, 152 when the published report \(2026-W40\) was made/);
  assert.match(verdict.problem, /75%/);

  // ...which comparing with the 150 the report kept would have waved through.
  const old = published({ featuresCount: 150, upstreamCount: null });
  assert.strictEqual(assessUpstreamCount({ ...window, count: 100, published: old }).ok, true);
});

test('a report that predates the recorded upstream count falls back to its feature count, and says so', () => {
  const verdict = assessUpstreamCount({ ...window, count: 10, published: published({ featuresCount: 80 }) });
  assert.strictEqual(verdict.ok, false);
  assert.match(verdict.problem, /the published report \(2026-W40\) has 80 for Chrome 151, 152/);
});

test('the size of the baseline is judged on the upstream count too', () => {
  // The report kept 12 features but ChromeStatus had only 6 then: too small to compare with.
  assert.strictEqual(assessUpstreamCount({ ...window, count: 1, published: published({ featuresCount: 12, upstreamCount: 6 }) }).ok, true);
});

test('an empty milestone window is reported as such, not as an upstream outage', () => {
  const verdict = assessUpstreamCount({ count: 0, milestones: [], statusTypes: [], published: null });
  assert.strictEqual(verdict.ok, false);
  assert.match(verdict.problem, /No Chrome milestones were resolved/);
  assert.ok(!/Chrome \./.test(verdict.problem), verdict.problem);
});

test('a published report that does not record its window is not compared', () => {
  const unknownWindow = published({ milestones: [] });
  assert.strictEqual(assessUpstreamCount({ ...window, count: 10, published: unknownWindow }).ok, true);
});

test('failure ratio only matters once enough features were attempted', () => {
  assert.strictEqual(assessFailureRatio({ attempted: 9, failed: 8 }).ok, true, 'hand-sized runs are exempt');
  assert.strictEqual(assessFailureRatio({ attempted: 10, failed: 5 }).ok, true, 'exactly half is accepted');

  const verdict = assessFailureRatio({ attempted: 10, failed: 6 });
  assert.strictEqual(verdict.ok, false);
  assert.match(verdict.problem, /6 of 10/);
  assert.deepStrictEqual(verdict, { ok: false, problem: '6 of 10 features failed to process, which is too many to publish a meaningful report.' }, 'failing is not a matter of time: no other way out is offered');
});

const SMALLER_LIMIT = 'with a smaller --limit (or MAX_FEATURES) so that the crawl finishes before its deadline';

test('features the crawl never reached count as missing, like the ones that failed', () => {
  // Said without the crawl having stopped early, the verdicts are the ones above.
  assert.deepStrictEqual(assessFailureRatio({ attempted: 10, failed: 5, notReached: 0 }), { ok: true });
  assert.deepStrictEqual(assessFailureRatio({ attempted: 10, failed: 6, notReached: 0 }), assessFailureRatio({ attempted: 10, failed: 6 }));

  // Half is accepted, more than half is not, whether the missing ones failed or were never started.
  assert.strictEqual(assessFailureRatio({ attempted: 5, failed: 0, notReached: 5 }).ok, true, 'half of ten is accepted');
  assert.strictEqual(assessFailureRatio({ attempted: 6, failed: 0, notReached: 4 }).ok, true);
  const verdict = assessFailureRatio({ attempted: 4, failed: 0, notReached: 6 });
  assert.deepStrictEqual(verdict, {
    ok: false,
    problem:
      '6 of 10 features are missing from the report (0 failed to process, 6 were not reached before the crawl deadline), ' +
      'which is too many to publish a meaningful report.',
    alternative: SMALLER_LIMIT,
  });

  // The two kinds of missing feature add up.
  assert.strictEqual(assessFailureRatio({ attempted: 8, failed: 2, notReached: 3 }).ok, true, '5 of 11');
  const both = assessFailureRatio({ attempted: 8, failed: 3, notReached: 3 });
  assert.strictEqual(both.ok, false, '6 of 11');
  assert.match(both.problem, /^6 of 11 features are missing from the report \(3 failed to process, 3 were not reached/);
  assert.strictEqual(both.alternative, SMALLER_LIMIT, 'any feature the deadline kept out makes a smaller limit worth saying');

  // One is any: with five that failed it tips 5 of 10 (accepted) into 6 of 11, and the deadline is named for it.
  const one = assessFailureRatio({ attempted: 10, failed: 5, notReached: 1 });
  assert.strictEqual(one.ok, false, '6 of 11');
  assert.match(one.problem, /^6 of 11 features are missing from the report \(5 failed to process, 1 were not reached/);
  assert.strictEqual(one.alternative, SMALLER_LIMIT);
});

test('whether a run is big enough for the failure ratio counts the features that were never started', () => {
  // Nine features: a hand-sized run, whatever became of them.
  assert.strictEqual(assessFailureRatio({ attempted: 2, failed: 0, notReached: 7 }).ok, true);
  assert.strictEqual(assessFailureRatio({ attempted: 9, failed: 0, notReached: 0 }).ok, true);
  // Ten, of which only four were started: judged as ten, not exempted as four.
  assert.strictEqual(assessFailureRatio({ attempted: 4, failed: 0, notReached: 6 }).ok, false);
  assert.strictEqual(assessFailureRatio({ attempted: 5, failed: 4, notReached: 5 }).ok, false, 'nine of ten missing');
  assert.strictEqual(assessFailureRatio({ attempted: 4, failed: 4, notReached: 5 }).ok, true, 'but nine features in all is a hand-sized run');
});

test('AI coverage is only judged when an AI provider is configured and the run is big enough', () => {
  assert.strictEqual(assessAiCoverage({ configured: false, withAi: 0, total: 87 }).ok, true, 'no key means no synthesis is expected');
  assert.strictEqual(
    assessAiCoverage({ configured: true, withAi: 0, total: MIN_FEATURES_FOR_AI_COVERAGE - 1 }).ok,
    true,
    'a handful of features says nothing about the provider'
  );
  assert.strictEqual(assessAiCoverage({ configured: true, withAi: 0, total: MIN_FEATURES_FOR_AI_COVERAGE }).ok, false);
});

test('AI coverage is accepted at the threshold and flagged just below it', () => {
  const total = 100;
  const atThreshold = Math.round(total * MIN_AI_COVERAGE);
  assert.strictEqual(assessAiCoverage({ configured: true, withAi: atThreshold, total }).ok, true);
  assert.strictEqual(assessAiCoverage({ configured: true, withAi: total, total }).ok, true);

  const verdict = assessAiCoverage({ configured: true, withAi: atThreshold - 1, total });
  assert.strictEqual(verdict.ok, false);
  assert.match(verdict.problem, /89 of 100 features \(89%\)/);
});

test('the coverage actually published once (59 of 87) is reported as a problem that names the numbers', () => {
  const verdict = assessAiCoverage({ configured: true, withAi: 59, total: 87 });
  assert.strictEqual(verdict.ok, false);
  assert.match(verdict.problem, /59 of 87 features \(68%\)/);
  assert.match(verdict.problem, /heuristic engine/);
});
