import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test, { beforeEach } from 'node:test';
import assert from 'node:assert';
import { logger } from '../src/logger.js';
import {
  GROUNDING_DROP,
  recordGroundedSources,
  recordGroundedAdoption,
  groundingStatsSnapshot,
  describeGroundingStats,
  resetGroundingStats,
  warnIfNothingResolved,
} from '../src/grounding-stats.js';

/**
 * Gemini's grounded answers cite pages through links that expire; one that cannot
 * be followed costs a source. The counters make a shrinking list of sources
 * visible, where it would otherwise look like a quiet week.
 */

beforeEach(resetGroundingStats);

const EMPTY = {
  found: 0,
  redirects: 0,
  resolved: 0,
  duplicates: 0,
  dropped: {},
  adoption: { considered: 0, alreadyListed: 0, added: 0, rejected: 0, unread: 0, skipped: 0 },
};

test('a fresh run has counted nothing', () => {
  assert.deepStrictEqual(groundingStatsSnapshot(), EMPTY);
});

test('the reasons a source can be lost are a fixed vocabulary', () => {
  assert.deepStrictEqual({ ...GROUNDING_DROP }, {
    EXPIRED: 'expired',
    NO_REDIRECT: 'no_redirect',
    UNSAFE: 'unsafe',
    TIMEOUT: 'timeout',
    NETWORK: 'network',
    INVALID: 'invalid',
  });
  assert.ok(Object.isFrozen(GROUNDING_DROP));
});

test('answers add up, and so do the reasons sources were lost', () => {
  recordGroundedSources({ found: 5, redirects: 4, resolved: 2, duplicates: 1, dropped: { expired: 1, timeout: 1 } });
  recordGroundedSources({ found: 3, redirects: 3, resolved: 2, duplicates: 0, dropped: { expired: 2 } });
  recordGroundedAdoption({ considered: 4, alreadyListed: 1, added: 2, rejected: 1 });
  recordGroundedAdoption({ considered: 1, alreadyListed: 0, added: 0, rejected: 1 });

  assert.deepStrictEqual(groundingStatsSnapshot(), {
    found: 8,
    redirects: 7,
    resolved: 4,
    duplicates: 1,
    dropped: { expired: 3, timeout: 1 },
    adoption: { considered: 5, alreadyListed: 1, added: 2, rejected: 2, unread: 0, skipped: 0 },
  });
});

test('the sources that could not be read, and the ones not looked at, are counted too', () => {
  recordGroundedAdoption({ considered: 5, alreadyListed: 1, added: 2, rejected: 1, unread: 1, skipped: 3 });
  recordGroundedAdoption({ considered: 2, alreadyListed: 0, added: 0, rejected: 0, unread: 2 });
  recordGroundedAdoption({ considered: 0, alreadyListed: 0, added: 0, rejected: 0, skipped: 4 });

  assert.deepStrictEqual(groundingStatsSnapshot().adoption, {
    considered: 7, alreadyListed: 1, added: 2, rejected: 1, unread: 3, skipped: 7,
  });
});

test('an answer that lost nothing may leave the reasons out', () => {
  recordGroundedSources({ found: 1, redirects: 1, resolved: 1, duplicates: 0 });
  assert.deepStrictEqual(groundingStatsSnapshot().dropped, {});
});

test('the snapshot is a copy: changing it does not change the counters', () => {
  recordGroundedSources({ found: 1, redirects: 1, resolved: 0, duplicates: 0, dropped: { network: 1 } });
  const snapshot = groundingStatsSnapshot();
  snapshot.dropped.network = 99;
  snapshot.adoption.added = 99;
  snapshot.found = 99;

  assert.strictEqual(groundingStatsSnapshot().dropped.network, 1);
  assert.strictEqual(groundingStatsSnapshot().adoption.added, 0);
  assert.strictEqual(groundingStatsSnapshot().found, 1);
});

test('the snapshot survives a round trip through JSON, as it does in the report', () => {
  recordGroundedSources({ found: 2, redirects: 2, resolved: 1, duplicates: 0, dropped: { expired: 1 } });
  recordGroundedAdoption({ considered: 1, alreadyListed: 0, added: 1, rejected: 0 });
  const snapshot = groundingStatsSnapshot();

  assert.deepStrictEqual(JSON.parse(JSON.stringify(snapshot)), snapshot);
});

test('resetting clears every counter, so one run does not carry into the next', () => {
  recordGroundedSources({ found: 2, redirects: 2, resolved: 1, duplicates: 1, dropped: { expired: 1 } });
  recordGroundedAdoption({ considered: 2, alreadyListed: 1, added: 1, rejected: 0, unread: 1, skipped: 1 });

  resetGroundingStats();

  assert.deepStrictEqual(groundingStatsSnapshot(), EMPTY);
});

// --- the lines at the end of a run ----------------------------------------------------------------------------

test('there is nothing to say when no grounded answer was received', () => {
  assert.deepStrictEqual(describeGroundingStats(), []);
  assert.deepStrictEqual(describeGroundingStats(EMPTY), []);
});

test('the summary says how many sources were cited and how many links led to the page', () => {
  recordGroundedSources({ found: 6, redirects: 6, resolved: 6, duplicates: 0, dropped: {} });

  assert.deepStrictEqual(describeGroundingStats(), [
    '6 source(s) cited by Gemini\'s search grounding; 6 of 6 redirect link(s) led to the real page',
  ]);
});

test('the summary counts what was lost, by reason, and what was merged', () => {
  recordGroundedSources({ found: 9, redirects: 8, resolved: 4, duplicates: 2, dropped: { expired: 3, timeout: 1 } });

  assert.deepStrictEqual(describeGroundingStats(), [
    '9 source(s) cited by Gemini\'s search grounding; 4 of 8 redirect link(s) led to the real page, ' +
      '4 source(s) dropped (expired ×3, timeout ×1), 2 duplicate(s) merged',
  ]);
});

test('the summary has a second line for what the synthesis made of the sources, once it has looked at any', () => {
  recordGroundedSources({ found: 5, redirects: 5, resolved: 5, duplicates: 0, dropped: {} });
  assert.strictEqual(describeGroundingStats().length, 1, 'no second line before any source was looked at');

  recordGroundedAdoption({ considered: 5, alreadyListed: 1, added: 3, rejected: 1 });

  assert.deepStrictEqual(describeGroundingStats().slice(1), [
    'Of 5 source(s) the AI synthesis cited: 1 already listed, 3 verified and added to the articles, 1 rejected as not about the feature',
  ]);
});

test('the second line adds the sources that could not be read, and the ones not looked at, when there were any', () => {
  recordGroundedSources({ found: 12, redirects: 12, resolved: 12, duplicates: 0, dropped: {} });
  recordGroundedAdoption({ considered: 6, alreadyListed: 1, added: 2, rejected: 1, unread: 2, skipped: 6 });

  assert.deepStrictEqual(describeGroundingStats().slice(1), [
    'Of 12 source(s) the AI synthesis cited: 1 already listed, 2 verified and added to the articles, 1 rejected as not about the feature, ' +
      '2 not added because the page could not be read, 6 not looked at (the feature\'s own links, tweets, or past the limit)',
  ]);
});

test('sources that were all skipped are still reported', () => {
  recordGroundedSources({ found: 3, redirects: 3, resolved: 3, duplicates: 0, dropped: {} });
  recordGroundedAdoption({ considered: 0, alreadyListed: 0, added: 0, rejected: 0, skipped: 3 });

  assert.deepStrictEqual(describeGroundingStats().slice(1), [
    'Of 3 source(s) the AI synthesis cited: 0 already listed, 0 verified and added to the articles, 0 rejected as not about the feature, ' +
      '3 not looked at (the feature\'s own links, tweets, or past the limit)',
  ]);
});

test('a snapshot from before these counters existed is described without them', () => {
  const lines = describeGroundingStats({
    found: 4, redirects: 4, resolved: 4, duplicates: 0, dropped: {},
    adoption: { considered: 4, alreadyListed: 1, added: 2, rejected: 1 },
  });

  assert.strictEqual(lines[1], 'Of 4 source(s) the AI synthesis cited: 1 already listed, 2 verified and added to the articles, 1 rejected as not about the feature');
});

test('the summary describes the snapshot it is given, not only the live counters', () => {
  const lines = describeGroundingStats({
    found: 2,
    redirects: 1,
    resolved: 0,
    duplicates: 0,
    dropped: { no_redirect: 1 },
    adoption: { considered: 0, alreadyListed: 0, added: 0, rejected: 0 },
  });

  assert.deepStrictEqual(lines, [
    '2 source(s) cited by Gemini\'s search grounding; 0 of 1 redirect link(s) led to the real page, 1 source(s) dropped (no_redirect ×1)',
  ]);
});

// --- the warning ----------------------------------------------------------------------------------------------

test('no warning when links were not followed at all', t => {
  const warn = t.mock.method(logger, 'warn', () => {});
  recordGroundedSources({ found: 3, redirects: 0, resolved: 0, duplicates: 0, dropped: {} });

  assert.strictEqual(warnIfNothingResolved(), null);
  assert.strictEqual(warn.mock.callCount(), 0);
});

test('no warning while any link led to a page: a few expired links are normal', t => {
  const warn = t.mock.method(logger, 'warn', () => {});
  recordGroundedSources({ found: 10, redirects: 10, resolved: 1, duplicates: 0, dropped: { expired: 9 } });

  assert.strictEqual(warnIfNothingResolved(), null);
  assert.strictEqual(warn.mock.callCount(), 0);
});

test('a warning when links were followed and not one led anywhere', t => {
  const warn = t.mock.method(logger, 'warn', () => {});
  recordGroundedSources({ found: 7, redirects: 7, resolved: 0, duplicates: 0, dropped: { network: 7 } });

  const message = warnIfNothingResolved();

  assert.strictEqual(
    message,
    'None of the 7 redirect link(s) in Gemini\'s search grounding could be followed to a page, ' +
      'so every source it found was dropped. The redirect service may have changed or be unreachable from here.'
  );
  assert.strictEqual(warn.mock.callCount(), 1);
  assert.deepStrictEqual(warn.mock.calls[0].arguments, [message]);
});

test('a warning when most of the links failed for a reason other than having expired', t => {
  const warn = t.mock.method(logger, 'warn', () => {});
  recordGroundedSources({ found: 8, redirects: 8, resolved: 3, duplicates: 0, dropped: { network: 3, timeout: 1, no_redirect: 1 } });

  const message = warnIfNothingResolved();

  assert.strictEqual(
    message,
    '5 of the 8 redirect link(s) in Gemini\'s search grounding could not be followed, and not because they had expired ' +
      '(no_redirect ×1, timeout ×1, network ×3). The redirect service may be partly unreachable from here, which loses most of the sources it found.'
  );
  assert.deepStrictEqual(warn.mock.calls.map(call => call.arguments), [[message]]);
});

test('no warning for failures that are half of the links or fewer, for expired links, or for too few links to tell', t => {
  const warn = t.mock.method(logger, 'warn', () => {});

  // Exactly half is not "more than half".
  assert.strictEqual(warnIfNothingResolved({ ...EMPTY, redirects: 8, resolved: 4, dropped: { network: 4 } }), null);
  // Expired links are what time does to them, however many there are.
  assert.strictEqual(warnIfNothingResolved({ ...EMPTY, redirects: 8, resolved: 1, dropped: { expired: 7 } }), null);
  // Not a failure of the service, and not a redirect link.
  assert.strictEqual(warnIfNothingResolved({ ...EMPTY, redirects: 8, resolved: 1, dropped: { invalid: 7 } }), null);
  // Three links is too few to say the service is unwell.
  assert.strictEqual(warnIfNothingResolved({ ...EMPTY, redirects: 3, resolved: 1, dropped: { network: 2 } }), null);
  assert.strictEqual(warn.mock.callCount(), 0);

  // Four is enough.
  assert.match(warnIfNothingResolved({ ...EMPTY, redirects: 4, resolved: 1, dropped: { unsafe: 3 } }), /^3 of the 4 redirect link\(s\)/);
  assert.strictEqual(warn.mock.callCount(), 1);
});

test('a snapshot with no list of drops is judged on the links alone', () => {
  const { dropped, ...withoutDrops } = EMPTY;
  assert.strictEqual(warnIfNothingResolved({ ...withoutDrops, redirects: 5, resolved: 5 }), null);
});

test('the warning judges the snapshot it is given', t => {
  const warn = t.mock.method(logger, 'warn', () => {});

  assert.match(warnIfNothingResolved({ ...EMPTY, redirects: 2 }), /^None of the 2 redirect link\(s\)/);
  assert.strictEqual(warnIfNothingResolved({ ...EMPTY, redirects: 2, resolved: 2 }), null);
  assert.strictEqual(warn.mock.callCount(), 1);
});
