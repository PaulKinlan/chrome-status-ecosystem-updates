import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import { normalizeFeature, chooseListings, STATUS_PROGRESSION } from '../src/chromestatus.js';
import { DEFAULT_FEATURE_STATUSES } from '../src/config.js';
import { toFeatureView } from '../src/reporters/viewmodel.js';
import { renderCard } from '../src/reporters/html/templates/card.js';

/**
 * Which listing of a feature the report is built from.
 *
 * ChromeStatus lists a feature once per milestone it has a stage in. The crawler
 * used to keep the FIRST listing it met (the oldest milestone), so a feature
 * that went from a developer trial in Chrome 152 to "Enabled by default" in 153
 * was reported as still being in trial: 4 of the 9 multi-listed features in the
 * checked-in report showed a stale stage.
 */

const DEV_TRIAL = 'In developer trial (Behind a flag)';
const ORIGIN_TRIAL = 'Origin trial';
const ENABLED = 'Enabled by default';

/** One entry of the crawler's raw list, as `runEcosystemReport` builds it. */
function listing(id, milestone, categoryLabel, name = `Feature ${id}`) {
  const raw = { id, name, summary: '' };
  return { raw, milestone, categoryLabel, normalized: normalizeFeature(raw, milestone, categoryLabel) };
}

const only = (listings, id) => chooseListings(listings).find(l => l.normalized.id === id);

test('a feature that reached "enabled" is reported as enabled, not as the earlier trial listing', () => {
  const chosen = only([listing(1, 152, DEV_TRIAL), listing(1, 153, ENABLED)], 1);

  assert.strictEqual(chosen.milestone, 153);
  assert.strictEqual(chosen.normalized.category, ENABLED);
  assert.strictEqual(chosen.normalized.statusType, 'enabled');
  assert.strictEqual(chosen.firstListedMilestone, 152, 'the earlier listing must stay visible');
});

test('the most advanced listing wins even when a later milestone lists an earlier stage', () => {
  // Enabled in 153, but 154 also lists it under an origin trial (say, for a follow-up change).
  const chosen = only([listing(2, 153, ENABLED), listing(2, 154, ORIGIN_TRIAL)], 2);

  assert.strictEqual(chosen.normalized.statusType, 'enabled');
  assert.strictEqual(chosen.milestone, 153);
  assert.strictEqual(chosen.firstListedMilestone, 153);
});

test('a trial that stays in the same stage keeps its earliest milestone, so it does not creep forward', () => {
  // The same origin trial, listed under three releases. If the latest were kept, the milestone (and so
  // the delta against last week) would change every time the window slides by one release.
  const run = [listing(3, 155, ORIGIN_TRIAL), listing(3, 153, ORIGIN_TRIAL), listing(3, 154, ORIGIN_TRIAL)];
  const chosen = only(run, 3);

  assert.strictEqual(chosen.milestone, 153);
  assert.strictEqual(chosen.firstListedMilestone, 153);
});

test('each of ChromeStatus\'s stages ranks above the one before it', () => {
  const labels = {
    other: 'Browser Intervention',
    flagged: DEV_TRIAL,
    'origin-trial': ORIGIN_TRIAL,
    rollout: 'Stepped rollout',
    enabled: ENABLED,
    deprecated: 'Deprecated',
    removed: 'Removed',
  };
  assert.deepStrictEqual(Object.keys(labels), [...STATUS_PROGRESSION]);

  for (let i = 1; i < STATUS_PROGRESSION.length; i++) {
    const lower = STATUS_PROGRESSION[i - 1];
    const higher = STATUS_PROGRESSION[i];
    // The more advanced stage is given the OLDER milestone, so only the stage can decide.
    const chosen = only([listing(4, 160, labels[lower]), listing(4, 150, labels[higher])], 4);
    assert.strictEqual(chosen.normalized.statusType, higher, `${higher} must beat ${lower}`);
    const reversed = only([listing(4, 150, labels[higher]), listing(4, 160, labels[lower])], 4);
    assert.strictEqual(reversed.normalized.statusType, higher, `${higher} must beat ${lower} whatever the order`);
  }
});

test('an unrecognised stage ranks with "other": below every real one', () => {
  const chosen = only([listing(5, 160, 'Something ChromeStatus invented'), listing(5, 150, DEV_TRIAL)], 5);
  assert.strictEqual(chosen.normalized.statusType, 'flagged');
});

test('the chosen listing does not depend on the order ChromeStatus returned them in', () => {
  const trio = [listing(6, 152, DEV_TRIAL), listing(6, 153, 'Stepped rollout'), listing(6, 154, ENABLED)];
  const orders = [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]];

  for (const order of orders) {
    const chosen = only(order.map(i => trio[i]), 6);
    assert.strictEqual(chosen.milestone, 154, `order ${order}`);
    assert.strictEqual(chosen.firstListedMilestone, 152, `order ${order}`);
  }
});

test('every feature appears once, and the other fields of the winning listing are kept intact', () => {
  const winner = listing(7, 154, ENABLED, 'Seven');
  const result = chooseListings([listing(7, 152, DEV_TRIAL, 'Seven'), listing(8, 153, ENABLED, 'Eight'), winner]);

  assert.deepStrictEqual(result.map(l => l.normalized.id).sort(), [7, 8]);
  const seven = result.find(l => l.normalized.id === 7);
  assert.strictEqual(seven.raw, winner.raw);
  assert.strictEqual(seven.normalized, winner.normalized);
  assert.strictEqual(seven.categoryLabel, ENABLED);
});

test('a feature listed once has no earlier listing to mention', () => {
  const [only1] = chooseListings([listing(9, 153, ENABLED)]);
  assert.strictEqual(only1.firstListedMilestone, 153);
  assert.strictEqual(only1.milestone, 153);
});

test('chooseListings does not modify what it was given', () => {
  const input = [listing(10, 152, DEV_TRIAL), listing(10, 153, ENABLED)];
  const before = JSON.stringify(input);
  const result = chooseListings(input);

  assert.strictEqual(JSON.stringify(input), before);
  assert.strictEqual(input.length, 2);
  assert.ok(result[0] !== input[1], 'the result carries an extra field, so it is a copy');
  assert.strictEqual('firstListedMilestone' in input[1], false);
});

test('no listings, no features', () => {
  assert.deepStrictEqual(chooseListings([]), []);
});

test('the result is ordered newest milestone first, then furthest along, then by name, then by id', () => {
  const result = chooseListings([
    listing(20, 152, ENABLED, 'Old'),
    listing(21, 154, DEV_TRIAL, 'Newest trial'),
    listing(22, 154, ENABLED, 'Newest enabled'),
    listing(23, 153, ENABLED, 'Zeta'),
    listing(24, 153, ENABLED, 'Alpha'),
    // Same milestone, stage and name: the numeric id decides (9 sorts before 10, unlike as text).
    listing(10, 153, ENABLED, 'Twin'),
    listing(9, 153, ENABLED, 'Twin'),
  ]);

  assert.deepStrictEqual(result.map(l => l.normalized.name), [
    'Newest enabled', 'Newest trial', 'Alpha', 'Twin', 'Twin', 'Zeta', 'Old',
  ]);
  assert.deepStrictEqual(result.filter(l => l.normalized.name === 'Twin').map(l => l.normalized.id), [9, 10]);
});

test('ordering falls back to text for ids that are not numbers', () => {
  const result = chooseListings([listing('b-2', 153, ENABLED, 'Same'), listing('a-1', 153, ENABLED, 'Same')]);
  assert.deepStrictEqual(result.map(l => l.normalized.id), ['a-1', 'b-2']);
});

test('a cap that cuts the sorted list keeps the newest, most advanced features', () => {
  const result = chooseListings([
    listing(31, 152, ENABLED, 'Oldest'),
    listing(32, 154, ENABLED, 'Newest'),
    listing(33, 153, ENABLED, 'Middle'),
  ]);
  assert.deepStrictEqual(result.slice(0, 2).map(l => l.normalized.name), ['Newest', 'Middle']);
});

test('every stage the default FEATURE_STATUSES asks for can be told apart from the others', () => {
  // `rollout` used to be missing from the defaults, which silently dropped features already shipping to a share of users.
  assert.ok(DEFAULT_FEATURE_STATUSES.includes('rollout'));
  for (const status of DEFAULT_FEATURE_STATUSES) {
    assert.ok(STATUS_PROGRESSION.includes(status), `${status} is a default status but has no rank`);
  }
  assert.ok(!DEFAULT_FEATURE_STATUSES.includes('removed'), 'removed features stay opt-in');
  assert.ok(Object.isFrozen(DEFAULT_FEATURE_STATUSES));
});

test('a stage the progression does not list ranks with "other", not below it', () => {
  // `normalizeCategoryType` only produces known types, so an unknown one means the progression was
  // extended without this code: it must tie with the lowest rank (and fall back to the milestone)
  // instead of ranking below it and losing to a plain "other".
  const mystery = listing(11, 153, 'Whatever');
  mystery.normalized.statusType = 'mystery';
  const plain = listing(11, 154, 'Browser Intervention');
  assert.strictEqual(plain.normalized.statusType, 'other');

  assert.strictEqual(only([mystery, plain], 11).milestone, 153);
  assert.strictEqual(only([plain, mystery], 11).milestone, 153);
});

/** The note that tells a reader a feature was listed earlier than the milestone it is now reported under. */
const noteFor = (milestone, firstListedMilestone) =>
  toFeatureView({ feature: { milestone, firstListedMilestone }, analysis: {}, ecosystem: {} }).milestoneNote;

test('the note names the first listing only when the feature was listed earlier than the milestone it is shown under', () => {
  assert.strictEqual(noteFor(154, 153), 'first listed in Chrome 153');
  assert.strictEqual(noteFor(154, 154), '', 'nothing moved');
  assert.strictEqual(noteFor(154, 156), '', 'a first listing after the shown milestone is not an earlier stage');
});

test('milestones are compared as numbers, not as text', () => {
  assert.strictEqual(noteFor(100, 99), 'first listed in Chrome 99');
  assert.strictEqual(noteFor('100', '99'), 'first listed in Chrome 99', 'old JSON may hold them as strings');
  assert.strictEqual(noteFor(99, 100), '');
});

test('a missing milestone never reads as milestone 0', () => {
  // Number(null) and Number('') are both 0, which would print "first listed in Chrome 0".
  for (const missing of [undefined, null, '']) {
    assert.strictEqual(noteFor(154, missing), '', `first listing ${JSON.stringify(missing)}`);
    assert.strictEqual(noteFor(missing, 153), '', `shown milestone ${JSON.stringify(missing)}`);
  }
});

test('the card puts the note on the milestone badge, and leaves the badge bare when there is none', () => {
  const cardFor = feature => renderCard({ feature: { id: 1, name: 'F', slug: 'f', summary: '', ...feature }, analysis: {}, ecosystem: {} });

  const moved = cardFor({ milestone: 154, firstListedMilestone: 153 });
  assert.ok(moved.includes('<span class="badge" title="first listed in Chrome 153">Chrome 154</span>'), moved);

  const steady = cardFor({ milestone: 154, firstListedMilestone: 154 });
  assert.ok(steady.includes('<span class="badge">Chrome 154</span>'), steady);
  assert.ok(!steady.includes('title=""'), 'an empty tooltip is noise for screen readers');
  assert.ok(!steady.includes('first listed'));
});
