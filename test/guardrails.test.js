import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import { GUARDRAIL_LIMITS, assessGuardrails } from '../src/guardrails.js';
import { GROUNDING_REDIRECT_HOST } from '../src/search/urls.js';
import { HIGH_SHARE } from '../src/momentum.js';
import { RECENT_DAYS } from '../src/storage/seen.js';

/**
 * The guardrails measure what a report is about to say and never stop it: a run that is merely worse than it looks
 * still publishes, with the warnings recorded in its telemetry.
 */

const TODAY = '2026-10-08';
const DAY_MS = 86_400_000;
const daysBefore = days => new Date(Date.parse(`${TODAY}T00:00:00Z`) - days * DAY_MS).toISOString().slice(0, 10);
const redirect = n => `https://${GROUNDING_REDIRECT_HOST}/grounding-api-redirect/token-${n}`;

/** A feature the way the runner holds it while it builds the report. */
function item(name, { level = 'Emerging', articles = [], newArticles = [], sources = [], summary = '', feature = {} } = {}) {
  return {
    feature: { id: 1, name, ...feature },
    ecosystem: { articles, blogs: [], docs: [], reverseLinks: [] },
    analysis: { momentumLevel: level, summary, groundedSources: sources },
    delta: { newArticles },
  };
}

/** `count` features, `high` of them High. */
function withHigh(count, high) {
  return Array.from({ length: count }, (_, i) => item(`Feature ${i}`, { level: i < high ? 'High' : 'Moderate' }));
}

/** One feature holding `count` articles that carry the same publication date, as its "new" ones. */
function newOnes(count, publishedAt, extra = {}) {
  return item('News', {
    newArticles: Array.from({ length: count }, (_, i) => ({ url: `https://example.com/news-${publishedAt}-${i}`, publishedAt, ...extra })),
  });
}

const assess = (features, extra = {}) => assessGuardrails({ features, today: TODAY, latestJsonBytes: 4_313_218, ...extra });
const checkOf = (result, id) => result.checks.find(check => check.id === id);
const warningsAbout = (result, text) => result.warnings.filter(warning => warning.includes(text));

test('the limits are the figures the review set, and they cannot be changed in passing', () => {
  assert.deepStrictEqual({ ...GUARDRAIL_LIMITS }, {
    groundingRedirects: 0,
    highMomentumShare: 0.5,
    minFeaturesForMomentum: 10,
    staleNewShare: 0.2,
    minDatedNewArticles: 10,
    providerClientErrorShare: 0.02,
    minProviderResponses: 20,
    latestJsonBytes: 15_000_000,
  });
  assert.ok(Object.isFrozen(GUARDRAIL_LIMITS));
});

test('a report with nothing wrong has every check made, every check ok, and no warning', () => {
  const features = [
    ...withHigh(12, 1),
    newOnes(10, daysBefore(3)),
  ];
  const providers = {
    x: { responses: 100, clientErrors: 1, statuses: { 200: 99, 400: 1 } },
    github: { responses: 300, clientErrors: 0, statuses: { 200: 280, 404: 20 } },
  };
  const result = assess(features, { providers });

  assert.deepStrictEqual(result.warnings, []);
  assert.deepStrictEqual(result.checks, [
    { id: 'grounding-redirects', ok: true, skipped: false, value: 0, limit: 0, sample: [] },
    { id: 'high-momentum-share', ok: true, skipped: false, value: 0.077, limit: 0.5 },
    { id: 'stale-new-articles', ok: true, skipped: false, value: 0, limit: 0.2 },
    { id: 'x-client-errors', ok: true, skipped: false, value: 0.01, limit: 0.02, sample: ['400 ×1'] },
    { id: 'github-client-errors', ok: true, skipped: false, value: 0, limit: 0.02, sample: [] },
    { id: 'latest-json-size', ok: true, skipped: false, value: 4_313_218, limit: 15_000_000 },
  ]);
});

test('without a provider that answered there is no provider check, and without features the rest hold', () => {
  const result = assessGuardrails({ today: TODAY });
  assert.deepStrictEqual(result.checks.map(check => check.id), [
    'grounding-redirects',
    'high-momentum-share',
    'stale-new-articles',
    'latest-json-size',
  ]);
  assert.deepStrictEqual(result.warnings, []);
  assert.deepStrictEqual(checkOf(result, 'latest-json-size'), {
    id: 'latest-json-size', ok: true, skipped: true, value: null, limit: 15_000_000,
  });
});

test('the limits in force are the ones the checks report', () => {
  const limits = { ...GUARDRAIL_LIMITS, groundingRedirects: 7, highMomentumShare: 0.3, staleNewShare: 0.4, providerClientErrorShare: 0.1, latestJsonBytes: 123 };
  const result = assess([], { limits, providers: { x: { responses: 50, clientErrors: 0, statuses: { 200: 50 } } } });
  assert.deepStrictEqual(result.checks.map(check => check.limit), [7, 0.3, 0.4, 0.1, 123]);
});

// ---------------------------------------------------------------------------------------------------------------

test('a Gemini redirect anywhere in a feature is counted: an article, a source, the text of an answer, a link it carries', () => {
  const result = assess([
    item('Carries five', {
      articles: [{ url: redirect(1), title: 'An article' }],
      sources: [{ url: redirect(2) }],
      newArticles: [{ url: redirect(3) }],
      summary: `See [the source](${redirect(4)}) for details.`,
      feature: { explainerUrls: [redirect(5)] },
    }),
    item('Clean'),
  ]);

  const check = checkOf(result, 'grounding-redirects');
  assert.strictEqual(check.value, 5);
  assert.strictEqual(check.ok, false);
  assert.deepStrictEqual(check.sample, ['Carries five']);
  assert.strictEqual(result.warnings.length, 1);
  assert.match(result.warnings[0], new RegExp(`^5 link\\(s\\) on ${GROUNDING_REDIRECT_HOST.replaceAll('.', '\\.')}, `));
  assert.match(result.warnings[0], /\(in 1 feature\(s\), among them "Carries five"\)/);
  assert.match(result.warnings[0], /each should have been followed to the real page or dropped\.$/);
});

test('a redirect is counted once however often it appears, and the features that carry it are listed', () => {
  const result = assess([
    item('First', { articles: [{ url: redirect(1) }, { url: redirect(1) }], sources: [{ url: redirect(1) }] }),
    item('Second', { articles: [{ url: redirect(1) }] }),
    item('Third', { summary: `${redirect(2)}\nand then some text` }),
    item('Fourth', { articles: [{ url: redirect(2) }] }),
    item('Fifth', { articles: [{ url: redirect(3) }] }),
    item('Clean'),
  ]);

  const check = checkOf(result, 'grounding-redirects');
  // `redirect(2)` is followed by a line break in one place: the JSON escape is not part of the address.
  assert.strictEqual(check.value, 3);
  assert.deepStrictEqual(check.sample, ['First', 'Second', 'Third'], 'the first three features that carry one');
  assert.match(result.warnings[0], /\(in 5 feature\(s\), among them "First", "Second", "Third"\)/);
});

test('the scheme, the case of the host and a dot after it do not hide a redirect', () => {
  const variants = [
    `http://${GROUNDING_REDIRECT_HOST}/a`,
    `HTTPS://${GROUNDING_REDIRECT_HOST.toUpperCase()}/b`,
    `https://${GROUNDING_REDIRECT_HOST}./c`,
    `https://${GROUNDING_REDIRECT_HOST}:443/d`,
  ];
  const result = assess([item('Variants', { articles: variants.map(url => ({ url })) })]);
  assert.strictEqual(checkOf(result, 'grounding-redirects').value, variants.length);
});

test('only an address on that host is a redirect: a look-alike, another Google host or a mention is not', () => {
  const result = assess([
    item('Not redirects', {
      articles: [
        { url: `https://${GROUNDING_REDIRECT_HOST}.example.org/x` },
        { url: `https://not-${GROUNDING_REDIRECT_HOST}/x` },
        { url: 'https://lh3.googleusercontent.com/some-image' },
        { url: 'https://cloud.google.com/vertex-ai/docs/search' },
        { url: `https://example.com/${GROUNDING_REDIRECT_HOST}` },
      ],
      summary: `The host ${GROUNDING_REDIRECT_HOST} is where these links used to point.`,
    }),
  ]);

  assert.strictEqual(checkOf(result, 'grounding-redirects').value, 0);
  assert.deepStrictEqual(result.warnings, []);
});

test('the number of redirects allowed is a limit, not a hair trigger', () => {
  const features = [item('Some', { articles: [{ url: redirect(1) }, { url: redirect(2) }] })];
  const limits = { ...GUARDRAIL_LIMITS, groundingRedirects: 2 };

  assert.strictEqual(checkOf(assess(features, { limits }), 'grounding-redirects').ok, true, 'two are within a limit of two');
  assert.strictEqual(checkOf(assess(features, { limits: { ...limits, groundingRedirects: 1 } }), 'grounding-redirects').ok, false);
  assert.strictEqual(checkOf(assess(features), 'grounding-redirects').ok, false, 'the default allows none');
});

test('a feature without a name is still counted, and listed as unnamed', () => {
  const result = assess([
    { analysis: {}, delta: {}, ecosystem: { articles: [{ url: redirect(1) }] } },
    item('Named', { articles: [{ url: redirect(2) }] }),
  ]);
  const check = checkOf(result, 'grounding-redirects');
  assert.strictEqual(check.value, 2);
  assert.deepStrictEqual(check.sample, ['(unnamed)', 'Named']);
});

// ---------------------------------------------------------------------------------------------------------------

test('most features being High is a warning, from ten features', () => {
  const some = checkOf(assess(withHigh(10, 5)), 'high-momentum-share');
  assert.deepStrictEqual(some, { id: 'high-momentum-share', ok: true, skipped: false, value: 0.5, limit: 0.5 }, 'half is not more than half');

  const most = assess(withHigh(10, 6));
  assert.deepStrictEqual(checkOf(most, 'high-momentum-share'), { id: 'high-momentum-share', ok: false, skipped: false, value: 0.6, limit: 0.5 });
  assert.strictEqual(most.warnings.length, 1);
  assert.match(most.warnings[0], /^6 of 10 features \(60%\) are High momentum, more than the 50% this check allows\./);
  assert.match(most.warnings[0], new RegExp(`High is the top ${Math.round(HIGH_SHARE * 100)}% of the features`));
});

test('the share of High is judged only when there are enough features to have one', () => {
  const nine = checkOf(assess(withHigh(9, 9)), 'high-momentum-share');
  assert.deepStrictEqual(nine, { id: 'high-momentum-share', ok: true, skipped: true, value: 1, limit: 0.5 });
  assert.deepStrictEqual(assess(withHigh(9, 9)).warnings, []);

  assert.strictEqual(checkOf(assess(withHigh(10, 10)), 'high-momentum-share').ok, false, 'ten is enough');
  assert.strictEqual(checkOf(assess([]), 'high-momentum-share').value, 0, 'no features, no share');
  assert.strictEqual(checkOf(assess([]), 'high-momentum-share').skipped, true);
});

test('only High counts as High, and a feature that was not rated is not one', () => {
  const features = [
    ...Array.from({ length: 4 }, (_, i) => item(`Moderate ${i}`, { level: 'Moderate' })),
    ...Array.from({ length: 3 }, (_, i) => item(`Emerging ${i}`, { level: 'Emerging' })),
    item('Quiet', { level: 'Quiet' }),
    item('Lower-case', { level: 'high' }),
    { feature: { name: 'Unrated' } },
  ];
  const check = checkOf(assess(features), 'high-momentum-share');
  assert.strictEqual(features.length, 10);
  assert.strictEqual(check.skipped, false);
  assert.strictEqual(check.value, 0);
});

test('the share of High is reported to three decimals, and its limits can be changed', () => {
  assert.strictEqual(checkOf(assess(withHigh(12, 1)), 'high-momentum-share').value, 0.083);

  const limits = { ...GUARDRAIL_LIMITS, highMomentumShare: 0.1, minFeaturesForMomentum: 2 };
  const result = assess(withHigh(3, 1), { limits });
  assert.strictEqual(checkOf(result, 'high-momentum-share').ok, false, 'a third is more than a tenth, from two features');
  assert.match(result.warnings[0], /^1 of 3 features \(33\.3%\) are High momentum, more than the 10% /);
});

// ---------------------------------------------------------------------------------------------------------------

test('"new" articles that are mostly old are a warning, from ten dated ones', () => {
  const fine = assess([newOnes(8, daysBefore(2)), newOnes(2, daysBefore(60))]);
  assert.deepStrictEqual(checkOf(fine, 'stale-new-articles'), { id: 'stale-new-articles', ok: true, skipped: false, value: 0.2, limit: 0.2 }, 'a fifth is not more than a fifth');
  assert.deepStrictEqual(fine.warnings, []);

  const stale = assess([newOnes(7, daysBefore(2)), newOnes(3, daysBefore(60))]);
  assert.deepStrictEqual(checkOf(stale, 'stale-new-articles'), { id: 'stale-new-articles', ok: false, skipped: false, value: 0.3, limit: 0.2 });
  assert.strictEqual(stale.warnings.length, 1);
  assert.strictEqual(
    stale.warnings[0],
    `3 of the 10 "new" articles that say when they were published (30%) are more than ${RECENT_DAYS} days old, ` +
      `more than the 20% this check allows. "New" is meant to be recent.`
  );
});

test('an article is old only when it was published more than thirty days before today', () => {
  // Ten dated articles, all on the same day: the share is 0 or 1, so one boundary day tells which side it is on.
  const stale = day => checkOf(assess([newOnes(10, day)]), 'stale-new-articles').value;

  assert.strictEqual(RECENT_DAYS, 30);
  assert.strictEqual(stale(daysBefore(0)), 0, 'today');
  assert.strictEqual(stale(daysBefore(29)), 0);
  assert.strictEqual(stale(daysBefore(30)), 0, 'thirty days ago is still recent');
  assert.strictEqual(stale(daysBefore(31)), 1, 'thirty-one is not');
  assert.strictEqual(stale(daysBefore(400)), 1);
  assert.strictEqual(stale('2026-10-09'), 0, 'tomorrow (a scheduled post) is recent');
  assert.strictEqual(stale('2027-01-01'), 0);
});

test('a date is read the way the rule for what is new reads it', () => {
  const stale = published => checkOf(assess([newOnes(10, published)]), 'stale-new-articles').value;

  assert.strictEqual(stale('2026-09-07T23:59:59Z'), 1, 'the day is what counts, not the time');
  assert.strictEqual(stale('Sep 7, 2026'), 1);
  assert.strictEqual(stale('Sep 9, 2026'), 0);
  assert.strictEqual(stale('7 September 2026'), 1);

  // Without `publishedAt` the ISO `createdAt` of a post that says only "Mar 14" decides.
  assert.strictEqual(checkOf(assess([newOnes(10, 'Mar 14', { createdAt: '2026-03-14T08:00:00Z' })]), 'stale-new-articles').value, 1);
  const noPublished = item('Created only', { newArticles: Array.from({ length: 10 }, (_, i) => ({ url: `https://example.com/c${i}`, createdAt: daysBefore(90) })) });
  assert.strictEqual(checkOf(assess([noPublished]), 'stale-new-articles').value, 1);
});

test('an article that does not say when it was published is neither old nor counted', () => {
  const undated = Array.from({ length: 30 }, (_, i) => ({ url: `https://example.com/u${i}` }));
  const unreadable = [{ url: 'https://example.com/a', publishedAt: '3 days ago' }, { url: 'https://example.com/b', publishedAt: 'Mar 14' }, { url: 'https://example.com/c', publishedAt: 42 }];
  const features = [item('Undated', { newArticles: [...undated, ...unreadable] }), newOnes(9, daysBefore(90))];

  const check = checkOf(assess(features), 'stale-new-articles');
  assert.strictEqual(check.skipped, true, 'only nine are dated: too few to judge, however many are not');
  assert.strictEqual(check.value, 1);
  assert.strictEqual(check.ok, true);

  const ten = checkOf(assess([...features, newOnes(1, daysBefore(1))]), 'stale-new-articles');
  assert.deepStrictEqual({ skipped: ten.skipped, value: ten.value, ok: ten.ok }, { skipped: false, value: 0.9, ok: false }, 'ten are dated, nine of them old: the undated ones did not dilute that');
});

test('the dated "new" articles of every feature are pooled', () => {
  const features = Array.from({ length: 5 }, (_, i) => item(`Feature ${i}`, {
    newArticles: [
      { url: `https://example.com/fresh-${i}`, publishedAt: daysBefore(1) },
      { url: `https://example.com/stale-${i}`, publishedAt: daysBefore(90) },
    ],
  }));
  const check = checkOf(assess(features), 'stale-new-articles');
  assert.strictEqual(check.skipped, false, 'ten between them');
  assert.strictEqual(check.value, 0.5);
  assert.strictEqual(check.ok, false);
});

test('what is not a list of new articles is passed over', () => {
  const features = [
    { feature: { name: 'No delta' }, analysis: {} },
    { feature: { name: 'No list' }, analysis: {}, delta: {} },
    { feature: { name: 'Not a list' }, analysis: {}, delta: { newArticles: 'many' } },
    { feature: { name: 'Null' }, analysis: {}, delta: { newArticles: null } },
    newOnes(10, daysBefore(2)),
  ];
  const check = checkOf(assess(features), 'stale-new-articles');
  assert.deepStrictEqual({ skipped: check.skipped, value: check.value, ok: check.ok }, { skipped: false, value: 0, ok: true });
});

test('the stale share is judged against the limits it is given', () => {
  const limits = { ...GUARDRAIL_LIMITS, staleNewShare: 0.5, minDatedNewArticles: 2 };
  const result = assess([newOnes(1, daysBefore(2)), newOnes(1, daysBefore(60))], { limits });
  assert.strictEqual(checkOf(result, 'stale-new-articles').ok, true, 'half is not more than half, from two');
  assert.strictEqual(checkOf(assess([newOnes(1, daysBefore(2)), newOnes(2, daysBefore(60))], { limits }), 'stale-new-articles').ok, false);
  assert.strictEqual(checkOf(assess([newOnes(1, daysBefore(60))], { limits }), 'stale-new-articles').skipped, true, 'one is fewer than two');
});

// ---------------------------------------------------------------------------------------------------------------

test('a provider that refuses more than 2% of what it is sent is a warning, from twenty responses', () => {
  const x = (responses, clientErrors, statuses) => ({ x: { responses, clientErrors, statuses } });

  const fine = assess([], { providers: x(100, 2, { 200: 98, 400: 2 }) });
  assert.deepStrictEqual(checkOf(fine, 'x-client-errors'), { id: 'x-client-errors', ok: true, skipped: false, value: 0.02, limit: 0.02, sample: ['400 ×2'] }, '2% is not more than 2%');
  assert.deepStrictEqual(fine.warnings, []);

  const refused = assess([], { providers: x(100, 3, { 200: 97, 400: 3 }) });
  assert.deepStrictEqual(checkOf(refused, 'x-client-errors'), { id: 'x-client-errors', ok: false, skipped: false, value: 0.03, limit: 0.02, sample: ['400 ×3'] });
  assert.deepStrictEqual(refused.warnings, [
    'X (Twitter) API refused 3 of 100 requests (3%; 400 ×3), more than the 2% this check allows. ' +
      'That usually means a missing or expired token, an exhausted quota or a query it cannot read, ' +
      'and whatever it would have found is missing from the report.',
  ]);
});

test('a provider is judged from twenty responses, however many of them were refused', () => {
  const few = assess([], { providers: { github: { responses: 19, clientErrors: 19, statuses: { 401: 19 } } } });
  assert.deepStrictEqual(checkOf(few, 'github-client-errors'), { id: 'github-client-errors', ok: true, skipped: true, value: 1, limit: 0.02, sample: ['401 ×19'] });
  assert.deepStrictEqual(few.warnings, []);

  const enough = assess([], { providers: { github: { responses: 20, clientErrors: 20, statuses: { 401: 20 } } } });
  assert.strictEqual(checkOf(enough, 'github-client-errors').skipped, false);
  assert.strictEqual(checkOf(enough, 'github-client-errors').ok, false);
  assert.match(enough.warnings[0], /^GitHub API refused 20 of 20 requests \(100%; 401 ×20\), /);
});

test('the warning names the statuses that were refused, and leaves out the answers that were not faults', () => {
  const result = assess([], {
    providers: { brave: { responses: 200, clientErrors: 30, statuses: { 200: 150, 404: 15, 410: 5, 429: 25, 401: 5 } } },
  });
  const check = checkOf(result, 'brave-client-errors');
  assert.deepStrictEqual(check.sample, ['401 ×5', '429 ×25'], 'in the order of the statuses; 404 and 410 are not client errors');
  assert.strictEqual(result.warnings[0].startsWith('Brave Search refused 30 of 200 requests (15%; 401 ×5; 429 ×25), '), true);
});

test('every provider that answered is checked on its own, in a fixed order', () => {
  const providers = {
    github: { responses: 100, clientErrors: 0, statuses: { 200: 100 } },
    google: { responses: 30, clientErrors: 30, statuses: { 403: 30 } },
    x: { responses: 50, clientErrors: 50, statuses: { 401: 50 } },
    brave: { responses: 0, clientErrors: 0, statuses: {} },
    somebody: { responses: 100, clientErrors: 100, statuses: { 400: 100 } },
  };
  const result = assess([], { providers });

  assert.deepStrictEqual(
    result.checks.map(check => check.id),
    ['grounding-redirects', 'high-momentum-share', 'stale-new-articles', 'x-client-errors', 'google-client-errors', 'github-client-errors', 'latest-json-size'],
    'brave did not answer and "somebody" is not a provider'
  );
  assert.deepStrictEqual(result.warnings.map(warning => warning.split(' refused ')[0]), ['X (Twitter) API', 'Google Custom Search']);
});

test('the share a provider refused is reported to three decimals, against the limits it is given', () => {
  const providers = { x: { responses: 30, clientErrors: 1, statuses: { 200: 29, 400: 1 } } };
  assert.strictEqual(checkOf(assess([], { providers }), 'x-client-errors').value, 0.033);

  const limits = { ...GUARDRAIL_LIMITS, providerClientErrorShare: 0.05, minProviderResponses: 31 };
  assert.strictEqual(checkOf(assess([], { providers, limits }), 'x-client-errors').skipped, true, '30 is fewer than 31');
  assert.strictEqual(checkOf(assess([], { providers, limits: { ...limits, minProviderResponses: 30 } }), 'x-client-errors').ok, true, '3.3% is within 5%');
  assert.strictEqual(checkOf(assess([], { providers, limits: { ...limits, minProviderResponses: 30, providerClientErrorShare: 0.03 } }), 'x-client-errors').ok, false);
});

// ---------------------------------------------------------------------------------------------------------------

test('a JSON report over 15 MB is a warning', () => {
  const at = checkOf(assess([], { latestJsonBytes: 15_000_000 }), 'latest-json-size');
  assert.deepStrictEqual(at, { id: 'latest-json-size', ok: true, skipped: false, value: 15_000_000, limit: 15_000_000 }, 'the limit itself is allowed');

  const over = assess([], { latestJsonBytes: 15_000_001 });
  assert.deepStrictEqual(checkOf(over, 'latest-json-size'), { id: 'latest-json-size', ok: false, skipped: false, value: 15_000_001, limit: 15_000_000 });
  assert.deepStrictEqual(over.warnings, [
    'The JSON report is 15 MB (15,000,001 bytes), more than the 15 MB (15,000,000 bytes) this check allows. ' +
      'Something is adding far more data per feature than before.',
  ]);
});

test('the size is told in decimal megabytes to one place, and so is the limit', () => {
  const says = bytes => assess([], { latestJsonBytes: bytes }).warnings[0];
  assert.match(says(16_234_567), /^The JSON report is 16\.2 MB \(16,234,567 bytes\), /);
  assert.match(says(16_949_999), /^The JSON report is 16\.9 MB \(16,949,999 bytes\), /);
  assert.match(says(16_950_000), /^The JSON report is 17 MB \(16,950,000 bytes\), /);
  assert.match(says(99_000_000), /^The JSON report is 99 MB \(99,000,000 bytes\), /);

  const limits = { ...GUARDRAIL_LIMITS, latestJsonBytes: 2_500_000 };
  assert.match(assess([], { latestJsonBytes: 100_000_000, limits }).warnings[0], /more than the 2\.5 MB \(2,500,000 bytes\) this check allows/);
});

test('a size that was not measured is not judged', () => {
  for (const bytes of [undefined, null, NaN, Infinity, '20000000']) {
    const result = assessGuardrails({ features: [], today: TODAY, latestJsonBytes: bytes });
    const check = checkOf(result, 'latest-json-size');
    assert.deepStrictEqual({ ok: check.ok, skipped: check.skipped, value: check.value }, { ok: true, skipped: true, value: null }, String(bytes));
    assert.deepStrictEqual(result.warnings, []);
  }
});

// ---------------------------------------------------------------------------------------------------------------

test('every check that is past its limit has a sentence, in the order of the checks', () => {
  const features = [
    ...withHigh(10, 10).map((entry, i) => (i === 0 ? { ...entry, ecosystem: { articles: [{ url: redirect(1) }] } } : entry)),
    newOnes(10, daysBefore(90)),
  ];
  const providers = { github: { responses: 40, clientErrors: 40, statuses: { 403: 40 } }, x: { responses: 40, clientErrors: 40, statuses: { 400: 40 } } };
  const result = assess(features, { providers, latestJsonBytes: 99_000_000 });

  assert.strictEqual(result.checks.filter(check => !check.ok).length, 6);
  const starts = [
    `1 link(s) on ${GROUNDING_REDIRECT_HOST}, `,
    '10 of 11 features (90.9%) are High momentum, ',
    '10 of the 10 "new" articles that say when they were published (100%) ',
    'X (Twitter) API refused 40 of 40 requests (100%; 400 ×40), ',
    'GitHub API refused 40 of 40 requests (100%; 403 ×40), ',
    'The JSON report is 99 MB (99,000,000 bytes), ',
  ];
  assert.strictEqual(result.warnings.length, starts.length);
  starts.forEach((start, i) => assert.ok(result.warnings[i].startsWith(start), `${i}: ${result.warnings[i]}`));
});

test('the features and the snapshot that are measured are left as they were', () => {
  const deepFreeze = value => {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      Object.freeze(value);
      Object.values(value).forEach(deepFreeze);
    }
    return value;
  };
  const features = deepFreeze([
    item('A', { articles: [{ url: redirect(1) }], newArticles: [{ url: 'https://example.com/a', publishedAt: daysBefore(90) }] }),
    ...withHigh(10, 10),
  ]);
  const providers = deepFreeze({ x: { responses: 40, clientErrors: 40, statuses: { 400: 40 } } });
  const before = JSON.stringify({ features, providers });

  assert.doesNotThrow(() => assess(features, { providers }));
  assert.strictEqual(JSON.stringify({ features, providers }), before);
});

test('the defaults are the limits above: nothing has to be passed for a report to be judged', () => {
  const result = assessGuardrails({ features: withHigh(11, 11), today: TODAY, latestJsonBytes: 1 });
  assert.strictEqual(checkOf(result, 'high-momentum-share').limit, GUARDRAIL_LIMITS.highMomentumShare);
  assert.strictEqual(checkOf(result, 'high-momentum-share').ok, false);
});

test('a day that is not a day cannot be judged, and says so instead of finding nothing stale', () => {
  for (const today of [undefined, null, '', 'tomorrow', '2026-02-30', '2026-10-8', 20261008]) {
    assert.throws(
      () => assessGuardrails({ features: [], today, latestJsonBytes: 1 }),
      /is not a day \(YYYY-MM-DD\)/,
      `today = ${String(today)}`
    );
  }
  // Even the check that has nothing to measure refuses a date it could not use: a missing wiring must show.
  assert.throws(() => assessGuardrails({ features: withHigh(3, 0), latestJsonBytes: 1 }), /"undefined" is not a day/);
});

test('each warning reads, word for word, as a person reading the log is meant to read it', () => {
  const features = [
    ...withHigh(10, 10).map((entry, i) => (i === 0 ? { ...entry, ecosystem: { articles: [{ url: redirect(1) }] } } : entry)),
    newOnes(10, daysBefore(90)),
  ];
  const providers = { x: { responses: 40, clientErrors: 40, statuses: { 400: 40 } }, github: { responses: 40, clientErrors: 40, statuses: { 403: 40 } } };
  const refused = 'more than the 2% this check allows. That usually means a missing or expired token, an exhausted quota or a query it ' +
    'cannot read, and whatever it would have found is missing from the report.';

  assert.deepStrictEqual(assess(features, { providers, latestJsonBytes: 99_000_000 }).warnings, [
    `1 link(s) on ${GROUNDING_REDIRECT_HOST}, the redirects Gemini's search grounding mints, are still in this report ` +
      '(in 1 feature(s), among them "Feature 0"). They stop leading anywhere within weeks; each should have been followed to ' +
      'the real page or dropped.',
    '10 of 11 features (90.9%) are High momentum, more than the 50% this check allows. High is the top 15% of the features, ' +
      'so a share this large means the tiers are not separating them.',
    '10 of the 10 "new" articles that say when they were published (100%) are more than 30 days old, more than the 20% this ' +
      'check allows. "New" is meant to be recent.',
    `X (Twitter) API refused 40 of 40 requests (100%; 400 ×40), ${refused}`,
    `GitHub API refused 40 of 40 requests (100%; 403 ×40), ${refused}`,
    'The JSON report is 99 MB (99,000,000 bytes), more than the 15 MB (15,000,000 bytes) this check allows. ' +
      'Something is adding far more data per feature than before.',
  ]);
});

test('a share is told as a percentage to one place, and a size with its bytes grouped in threes', () => {
  const warning = assess(withHigh(11, 7)).warnings.find(text => text.includes('High momentum'));
  assert.ok(warning.startsWith('7 of 11 features (63.6%) are High momentum, '), warning);

  assert.match(assess([], { latestJsonBytes: 1_234_567_890 }).warnings[0], /^The JSON report is 1234\.6 MB \(1,234,567,890 bytes\), /);
  assert.match(assess([], { latestJsonBytes: 15_000_123 }).warnings[0], /\(15,000,123 bytes\)/);
  assert.match(assess([], { latestJsonBytes: 15_000_001, limits: { ...GUARDRAIL_LIMITS, latestJsonBytes: 999 } }).warnings[0], /\(999 bytes\) this check allows/);
});

test('two redirects in one stretch of text are two redirects: a space ends an address', () => {
  const result = assess([
    item('Prose', { summary: `Read ${redirect(1)} and then ${redirect(2)} (or ${redirect(3)}) for the rest.` }),
  ]);
  assert.strictEqual(checkOf(result, 'grounding-redirects').value, 3);
});

test('with no "new" article that says when it was published, the share of old ones is 0, not a number that is not one', () => {
  for (const features of [[], [item('Quiet')], [newOnes(4, daysBefore(3))]]) {
    const check = checkOf(assess(features), 'stale-new-articles');
    assert.deepStrictEqual(check, { id: 'stale-new-articles', ok: true, skipped: true, value: 0, limit: 0.2 });
  }
  assert.strictEqual(JSON.stringify(checkOf(assess([]), 'stale-new-articles').value), '0', 'it survives JSON, which turns NaN into null');
});

test('the share of old "new" articles is reported to three decimals', () => {
  const check = checkOf(assess([newOnes(7, daysBefore(90)), newOnes(4, daysBefore(3))]), 'stale-new-articles');
  assert.strictEqual(check.value, 0.636, '7 of 11 dated articles');
  assert.strictEqual(check.skipped, false);
  assert.strictEqual(check.ok, false);
});
