import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createCrawlBudget, describeCrawl, stalestFirst } from '../src/crawl-budget.js';

const MINUTE = 60_000;

/** A clock the test winds itself, in minutes. */
function clockAt(minutes = 0) {
  const clock = { minutes, now: () => clock.minutes * MINUTE };
  return clock;
}

test('a budget with no deadline never runs out, however long the crawl takes', () => {
  // Zero is the default and means none; so does anything that is not a deadline.
  for (const minutes of [undefined, 0, -5, NaN, Infinity, -Infinity, '40', null, {}]) {
    const clock = clockAt();
    const budget = createCrawlBudget({ minutes, now: clock.now });
    assert.strictEqual(budget.minutes, 0, `${String(minutes)} is no deadline`);
    assert.strictEqual(budget.passed(), false);
    clock.minutes = 1_000_000;
    assert.strictEqual(budget.passed(), false, `after a million minutes with ${String(minutes)}`);
  }
  assert.strictEqual(createCrawlBudget().minutes, 0, 'no arguments at all is no deadline');
});

test('a deadline passes when its minutes are up, and not a moment before', () => {
  const clock = clockAt();
  const budget = createCrawlBudget({ minutes: 40, now: clock.now });
  assert.strictEqual(budget.minutes, 40);
  assert.strictEqual(budget.passed(), false);

  clock.minutes = 39.99;
  assert.strictEqual(budget.passed(), false, 'a hundredth of a minute early');
  clock.minutes = 40;
  assert.strictEqual(budget.passed(), true, 'exactly at the deadline it has passed');
  clock.minutes = 41;
  assert.strictEqual(budget.passed(), true, 'and stays passed');
});

test('a fraction of a minute is a deadline too', () => {
  const clock = clockAt();
  const budget = createCrawlBudget({ minutes: 0.5, now: clock.now });
  assert.strictEqual(budget.minutes, 0.5);
  clock.minutes = 0.4;
  assert.strictEqual(budget.passed(), false);
  clock.minutes = 0.5;
  assert.strictEqual(budget.passed(), true);
});

test('the clock starts when the budget is made, not when it is first asked', () => {
  const clock = clockAt(1000);
  const budget = createCrawlBudget({ minutes: 10, now: clock.now });

  clock.minutes = 1009;
  assert.strictEqual(budget.passed(), false, 'nine minutes after it was made');
  assert.strictEqual(budget.elapsedMinutes(), 9);
  clock.minutes = 1010;
  assert.strictEqual(budget.passed(), true);
  assert.strictEqual(budget.elapsedMinutes(), 10);
});

test('the elapsed time is in minutes, fractions included, with or without a deadline', () => {
  const clock = clockAt();
  const withDeadline = createCrawlBudget({ minutes: 60, now: clock.now });
  const without = createCrawlBudget({ now: clock.now });
  clock.minutes = 2.5;
  assert.strictEqual(withDeadline.elapsedMinutes(), 2.5);
  assert.strictEqual(without.elapsedMinutes(), 2.5);
});

test('unless it is given a clock, the budget reads the monotonic one at the time it is asked', t => {
  let current = 5_000;
  t.mock.method(performance, 'now', () => current);
  const budget = createCrawlBudget({ minutes: 10 });

  current += 9 * MINUTE;
  assert.strictEqual(budget.passed(), false);
  assert.strictEqual(budget.elapsedMinutes(), 9);
  current += MINUTE;
  assert.strictEqual(budget.passed(), true);
  assert.strictEqual(budget.elapsedMinutes(), 10);
});

test('the system clock being set (a time sync on the runner) does not move the deadline', t => {
  t.mock.timers.enable({ apis: ['Date'], now: 1_700_000_000_000 });
  const budget = createCrawlBudget({ minutes: 10 });

  t.mock.timers.tick(3 * 60 * MINUTE);

  assert.strictEqual(new Date().getTime(), 1_700_000_000_000 + 3 * 60 * MINUTE, 'the system clock did jump three hours');
  assert.strictEqual(budget.passed(), false, 'the deadline has not passed because of it');
  assert.ok(budget.elapsedMinutes() < 1, `${budget.elapsedMinutes()} minutes have really gone by`);
});

// --- the order to crawl in ---------------------------------------------------------------------------------------

const seenAt = days => new Date(Date.UTC(2026, 8, days)).toISOString();

test('the features looked at the longest ago come first', () => {
  const items = [
    { id: 'a', seen: seenAt(10) },
    { id: 'b', seen: seenAt(2) },
    { id: 'c', seen: seenAt(20) },
    { id: 'd', seen: seenAt(5) },
  ];
  assert.deepStrictEqual(stalestFirst(items, item => item.seen).map(item => item.id), ['b', 'd', 'a', 'c']);
});

test('a feature never looked at comes before every other, whatever its time is, in the order it came', () => {
  const items = [
    { id: 'a', seen: seenAt(1) },
    { id: 'never-undefined', seen: undefined },
    { id: 'b', seen: seenAt(1) },
    { id: 'never-null', seen: null },
    { id: 'never-text', seen: 'last tuesday' },
    { id: 'never-number', seen: 1_790_000_000_000 },
    { id: 'never-empty', seen: '' },
    { id: 'never-object', seen: { toString: () => seenAt(3) } },
    { id: 'c', seen: seenAt(0) },
  ];
  assert.deepStrictEqual(
    stalestFirst(items, item => item.seen).map(item => item.id),
    ['never-undefined', 'never-null', 'never-text', 'never-number', 'never-empty', 'never-object', 'c', 'a', 'b']
  );
});

test('never is older than any date, even one before 1970', () => {
  const items = [
    { id: 'long-ago', seen: '1960-06-15T00:00:00.000Z' },
    { id: 'never', seen: undefined },
    { id: 'epoch', seen: '1970-01-01T00:00:00.000Z' },
  ];
  assert.deepStrictEqual(stalestFirst(items, item => item.seen).map(item => item.id), ['never', 'long-ago', 'epoch']);
});

test('features with the same time keep the order they were in', () => {
  const same = seenAt(7);
  const items = ['e', 'a', 'd', 'b', 'c'].map(id => ({ id, seen: same }));
  assert.deepStrictEqual(stalestFirst(items, item => item.seen).map(item => item.id), ['e', 'a', 'd', 'b', 'c']);

  // Dates that are the same moment written differently are equal, too.
  const spelled = [
    { id: 'x', seen: '2026-09-07T00:00:00.000Z' },
    { id: 'y', seen: '2026-09-07' },
    { id: 'z', seen: '2026-09-07T01:00:00+01:00' },
  ];
  assert.deepStrictEqual(stalestFirst(spelled, item => item.seen).map(item => item.id), ['x', 'y', 'z']);
});

test('a time in the future is not mistaken for never: it is last', () => {
  const items = [
    { id: 'future', seen: '2999-01-01T00:00:00.000Z' },
    { id: 'now', seen: seenAt(1) },
    { id: 'never', seen: undefined },
  ];
  assert.deepStrictEqual(stalestFirst(items, item => item.seen).map(item => item.id), ['never', 'now', 'future']);
});

test('sorting by time leaves the list it was given alone, and works on an empty one', () => {
  const items = [{ seen: seenAt(9) }, { seen: seenAt(1) }];
  const before = [...items];
  const sorted = stalestFirst(items, item => item.seen);

  assert.notStrictEqual(sorted, items, 'a new list');
  assert.deepStrictEqual(items, before, 'the original is as it was');
  assert.deepStrictEqual(stalestFirst([], () => seenAt(1)), []);
});

// --- what is said when the crawl ran out of time -----------------------------------------------------------------

const crawlOf = (reached, notReached, extra = {}) => ({
  deadlineMinutes: 40,
  elapsedMinutes: 41.3,
  reached,
  notReached: Array.from({ length: notReached }, (_, i) => ({ id: 1000 + i, name: `Feature ${i}` })),
  ...extra,
});

test('a crawl that reached every feature, or says nothing about it, has nothing to describe', () => {
  for (const crawl of [undefined, null, {}, crawlOf(150, 0), { reached: 5 }, { notReached: 'many' }, { notReached: { length: 3 } }, { notReached: null }]) {
    assert.strictEqual(describeCrawl(crawl), null, JSON.stringify(crawl));
  }
});

test('a crawl that stopped at its deadline says how far it got, and what becomes of the rest', () => {
  assert.deepStrictEqual(describeCrawl(crawlOf(118, 32)), {
    label: 'Partial: 118 of 150 features',
    detail:
      'The crawl reached its 40-minute deadline (41.3 minutes in) and stopped starting features: ' +
      '118 of 150 were investigated, and the other 32 are not in this report. They come first in the next crawl.',
  });
});

test('one feature left out is said in the singular, and the whole count adds up', () => {
  const { label, detail } = describeCrawl(crawlOf(149, 1));
  assert.strictEqual(label, 'Partial: 149 of 150 features');
  assert.ok(
    detail.endsWith('149 of 150 were investigated, and the other 1 is not in this report. It comes first in the next crawl.'),
    detail
  );

  assert.strictEqual(describeCrawl(crawlOf(0, 3)).label, 'Partial: 0 of 3 features');
  assert.ok(
    describeCrawl(crawlOf(0, 3)).detail.endsWith('0 of 3 were investigated, and the other 3 are not in this report. They come first in the next crawl.')
  );
});

test('a deadline or an elapsed time that is not known is left out of the sentence, not made up', () => {
  const noDeadline = describeCrawl(crawlOf(5, 2, { deadlineMinutes: undefined })).detail;
  assert.ok(noDeadline.startsWith('The crawl reached its deadline (41.3 minutes in) and stopped'), noDeadline);
  assert.ok(describeCrawl(crawlOf(5, 2, { deadlineMinutes: 0 })).detail.startsWith('The crawl reached its deadline ('));

  const noTime = describeCrawl(crawlOf(5, 2, { elapsedMinutes: undefined })).detail;
  assert.ok(noTime.startsWith('The crawl reached its 40-minute deadline and stopped starting features:'), noTime);
  assert.ok(!noTime.includes('minutes in'));

  // Zero minutes in is a number like any other (a deadline that was reached at once).
  assert.ok(describeCrawl(crawlOf(5, 2, { elapsedMinutes: 0 })).detail.includes('(0 minutes in)'));
});

test('what is said is numerals and words only, so no report format has anything to escape in it', () => {
  const hostile = describeCrawl({
    deadlineMinutes: '<img src=x onerror=alert(1)>',
    elapsedMinutes: '*bold* [link](javascript:alert(1))',
    reached: '`code` | cell',
    notReached: [{ name: '<script>' }],
  });
  assert.ok(hostile, 'one feature was left out, so there is something to say');
  for (const text of Object.values(hostile)) {
    assert.match(text, /^[A-Za-z0-9 .:,()-]+$/, text);
  }
  assert.strictEqual(hostile.label, 'Partial: 0 of 1 features');

  // The numbers of a normal report are within that too.
  for (const text of Object.values(describeCrawl(crawlOf(118, 32)))) assert.match(text, /^[A-Za-z0-9 .:,()-]+$/, text);
});

test('a figure that is a number with white space around it is written as the number, without the line breaks', () => {
  // `Number('\n40\n')` is 40, so such a figure passes every test of being one; written as it came it would break a line.
  const padded = describeCrawl({ deadlineMinutes: '\n40\n', elapsedMinutes: '\r\n41.5\t', reached: '\n5\n', notReached: [{}] });
  assert.strictEqual(padded.label, 'Partial: 5 of 6 features');
  assert.strictEqual(
    padded.detail,
    'The crawl reached its 40-minute deadline (41.5 minutes in) and stopped starting features: 5 of 6 were investigated, ' +
      'and the other 1 is not in this report. It comes first in the next crawl.'
  );
});

// --- configuration ----------------------------------------------------------------------------------------------

/**
 * What `config.crawlDeadlineMinutes` is for each value of CRAWL_DEADLINE_MINUTES (null: not set), read the way a run
 * reads it, by a program that imports src/config.js with that variable. A copy of the file in a directory of its own is
 * what is imported, so that no `.env` of the person running the tests can change the answer, and the child gets no
 * environment of its own either.
 */
async function deadlinesFromEnvironment(t, values) {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'crawl-deadline-config-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  await fs.mkdir(path.join(dir, 'src'));
  await fs.copyFile(fileURLToPath(new URL('../src/config.js', import.meta.url)), path.join(dir, 'src', 'config.mjs'));
  await fs.writeFile(path.join(dir, 'probe.mjs'), `
    const answers = [];
    for (const [index, value] of JSON.parse(process.argv[2]).entries()) {
      if (value === null) delete process.env.CRAWL_DEADLINE_MINUTES;
      else process.env.CRAWL_DEADLINE_MINUTES = value;
      answers.push((await import('./src/config.mjs?probe=' + index)).config.crawlDeadlineMinutes);
    }
    console.log(JSON.stringify(answers));
  `);

  const stdout = await new Promise((resolve, reject) => {
    execFile(
      process.execPath,
      [path.join(dir, 'probe.mjs'), JSON.stringify(values)],
      { cwd: dir, env: { PATH: process.env.PATH, HOME: dir }, timeout: 30_000, encoding: 'utf-8' },
      (error, out, err) => (error ? reject(new Error(`${error.message}\n${err}`)) : resolve(out))
    );
  });
  return JSON.parse(stdout);
}

test('CRAWL_DEADLINE_MINUTES is a whole number of minutes from 0 (no deadline, the default) to a day', async t => {
  const cases = [
    [null, 0], ['', 0], ['   ', 0], ['0', 0], ['40', 40], [' 40 ', 40], ['1', 1], ['1440', 1440],
    ['1441', 1440], ['99999', 1440], ['-5', 0], ['abc', 0], ['12.7', 12], ['40min', 40],
  ];
  const answers = await deadlinesFromEnvironment(t, cases.map(([value]) => value));
  assert.deepStrictEqual(answers, cases.map(([, expected]) => expected), JSON.stringify(cases.map(([value]) => value)));
});
