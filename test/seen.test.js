import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import {
  FORGET_AFTER_DAYS,
  RECENT_DAYS,
  SEEN_LIMIT,
  dayNumber,
  isNewItem,
  isoDay,
  seenOf,
  updatedSeen,
  withoutStaleFeatures,
} from '../src/storage/seen.js';

/**
 * What a feature has shown before, and so what is news. The week-over-week rollup used to call a page new when it
 * was missing from LAST run's results: 84% of the dated "new" articles were over a month old, because search results
 * churn. Now a page is new when it has never been shown and is recent (or does not say when it was published).
 */

const TODAY = '2026-10-08';

/** `days` before TODAY, as a date. */
function daysBefore(days, day = TODAY) {
  return isoDay(new Date(Date.parse(`${day}T00:00:00Z`) - days * 86_400_000));
}

test('the day arithmetic is calendar arithmetic', () => {
  assert.strictEqual(dayNumber('1970-01-01'), 0);
  assert.strictEqual(dayNumber('1970-01-02'), 1);
  assert.strictEqual(dayNumber('2026-10-08'), 20734);
  assert.strictEqual(dayNumber('2024-02-29'), dayNumber('2024-02-28') + 1, 'a leap day exists');
  assert.strictEqual(dayNumber('2024-03-01'), dayNumber('2024-02-29') + 1);
  assert.strictEqual(RECENT_DAYS, 30);
  assert.strictEqual(FORGET_AFTER_DAYS, 365);
  assert.strictEqual(SEEN_LIMIT, 500);
});

test('only a real calendar day written YYYY-MM-DD is a day', () => {
  for (const notADay of [
    '2026-02-29', '2026-02-30', '2026-13-01', '2026-00-10', '2026-10-32', '2026-10-00',
    '2026-1-8', '26-10-08', '2026-10-08T00:00:00Z', ' 2026-10-08', '2026-10-08 ', '', 'today',
    // Date.parse accepts these two as the first day of the year and of the month: only the format keeps them out.
    '2026', '2026-10',
    20734, null, undefined, {}, ['2026-10-08'],
  ]) {
    assert.ok(Number.isNaN(dayNumber(notADay)), `${JSON.stringify(notADay)} is not a day`);
  }
});

test('isoDay is the UTC calendar day of a moment, and today by default', () => {
  assert.strictEqual(isoDay(new Date('2026-10-08T23:59:59Z')), '2026-10-08');
  assert.strictEqual(isoDay(new Date('2026-10-09T00:00:00Z')), '2026-10-09');
  assert.match(isoDay(), /^\d{4}-\d{2}-\d{2}$/);
  assert.ok(Math.abs(dayNumber(isoDay()) - Date.now() / 86_400_000) < 1.01);
});

// --- seenOf ---------------------------------------------------------------

test('a feature that was never tracked has shown nothing', () => {
  assert.deepStrictEqual([...seenOf(undefined, TODAY)], []);
  assert.deepStrictEqual([...seenOf(null, TODAY)], []);
});

test('the seen-map of an entry is what it says, keyed as it was saved', () => {
  const seen = seenOf({ seen: { 'example.com/a': '2026-09-01', 'example.com/b': '2026-10-01' }, knownUrls: ['https://other.example/x'] }, TODAY);

  assert.deepStrictEqual([...seen], [['example.com/a', '2026-09-01'], ['example.com/b', '2026-10-01']], 'knownUrls are not consulted once there is a seen-map');
  assert.ok(seen instanceof Map);
});

test('a day that cannot be read still means "shown", counted from today', () => {
  const seen = seenOf({ seen: { 'example.com/a': 'long ago', 'example.com/b': 7, 'example.com/c': '2026-02-30' } }, TODAY);

  assert.deepStrictEqual([...seen], [['example.com/a', TODAY], ['example.com/b', TODAY], ['example.com/c', TODAY]]);
});

test('a seen-map that is empty is an empty history, not a reason to fall back to knownUrls', () => {
  assert.deepStrictEqual([...seenOf({ seen: {}, knownUrls: ['https://example.com/a'] }, TODAY)], []);
});

test('URLs are keys however odd they are: a page called __proto__ is just a page', () => {
  const entry = JSON.parse('{"seen": {"__proto__": "2026-09-01", "constructor": "2026-09-02"}}');
  const seen = seenOf(entry, TODAY);

  assert.deepStrictEqual([...seen], [['__proto__', '2026-09-01'], ['constructor', '2026-09-02']]);
  assert.strictEqual(isNewItem(seen, { url: 'constructor' }, TODAY), false, 'and it is remembered');
});

test('a seen-map that is not an object of days is an error, not an empty history', () => {
  for (const damaged of [null, 5, 'x', true, []]) {
    assert.throws(() => seenOf({ seen: damaged, knownUrls: [] }, TODAY), /"seen" in the history entry must be an object/, JSON.stringify(damaged));
  }
});

test('an entry from before the seen-map counts its knownUrls as shown on the day of that run', () => {
  const seen = seenOf({
    lastSeen: '2026-10-01T03:04:05.000Z',
    knownUrls: [
      'https://www.Example.com/a/?utm_source=x',
      'http://example.com/b?z=1&a=2',
      'https://vertexaisearch.cloud.google.com/grounding-api-redirect/abc',
      'https://lh3.googleusercontent.com/pic',
      '',
      null,
    ],
  }, TODAY);

  assert.deepStrictEqual([...seen], [['example.com/a', '2026-10-01'], ['example.com/b?a=2&z=1', '2026-10-01']]);
});

test('an old entry that does not say when it was written is counted from today', () => {
  for (const lastSeen of [undefined, null, 'yesterday', '', 12345, '2026-02-30T00:00:00Z']) {
    const seen = seenOf({ lastSeen, knownUrls: ['https://example.com/a'] }, TODAY);
    assert.deepStrictEqual([...seen], [['example.com/a', TODAY]], JSON.stringify(lastSeen));
  }
});

test('an old entry with no knownUrls has shown nothing', () => {
  assert.deepStrictEqual([...seenOf({ lastSeen: '2026-10-01T00:00:00Z' }, TODAY)], []);
  assert.deepStrictEqual([...seenOf({ lastSeen: '2026-10-01T00:00:00Z', knownUrls: null }, TODAY)], []);
});

test('knownUrls that are not a list are an error, not an empty history', () => {
  for (const damaged of [5, 'https://example.com/a', {}, true]) {
    assert.throws(() => seenOf({ knownUrls: damaged }, TODAY), /"knownUrls" in the history entry must be a list/, JSON.stringify(damaged));
  }
});

test('an entry that is not an object is an error, not an empty history; no entry at all is a feature never tracked', () => {
  for (const nothing of [undefined, null]) assert.deepStrictEqual([...seenOf(nothing, TODAY)], [], String(nothing));
  // Anything else would have every page of the feature announced as new again, and `statusChanged` with it.
  for (const damaged of ['broken', '', [], ['https://example.com/a'], 5, 0, true, false]) {
    assert.throws(() => seenOf(damaged, TODAY), /a history entry must be an object/, JSON.stringify(damaged));
  }
});

// --- updatedSeen ----------------------------------------------------------

test('this run\'s pages join what was remembered, all of them as of today, and a page that was not found keeps its day', () => {
  const previous = new Map([['example.com/a', '2026-09-01'], ['example.com/lost', '2026-08-15']]);
  const seen = updatedSeen(previous, ['https://example.com/a', 'https://www.example.com/b/?utm_medium=mail', 'https://other.example/c'], TODAY);

  assert.deepStrictEqual([...seen], [['example.com/a', TODAY], ['example.com/lost', '2026-08-15'], ['example.com/b', TODAY], ['other.example/c', TODAY]]);
  assert.deepStrictEqual([...previous], [['example.com/a', '2026-09-01'], ['example.com/lost', '2026-08-15']], 'the map it was given is not changed');
});

test('what expires, or cannot be compared, is not remembered', () => {
  const seen = updatedSeen(new Map(), [
    'https://vertexaisearch.cloud.google.com/grounding-api-redirect/abc',
    'https://lh3.googleusercontent.com/pic',
    '', undefined, null, 42,
    'https://example.com/ok',
  ], TODAY);

  assert.deepStrictEqual([...seen.keys()], ['example.com/ok']);
});

test('a page that stopped turning up is forgotten after a year, and not before', () => {
  const previous = new Map([
    ['example.com/exactly-a-year', daysBefore(FORGET_AFTER_DAYS)],
    ['example.com/a-day-more', daysBefore(FORGET_AFTER_DAYS + 1)],
    ['example.com/recent', daysBefore(10)],
  ]);

  assert.deepStrictEqual([...updatedSeen(previous, [], TODAY).keys()], ['example.com/exactly-a-year', 'example.com/recent']);
});

test('a page that keeps turning up is kept, however long ago it was first shown, and remembered as of today', () => {
  const previous = new Map([['example.com/old', daysBefore(900)], ['example.com/gone', daysBefore(900)]]);

  const seen = updatedSeen(previous, ['https://example.com/old'], TODAY);

  assert.deepStrictEqual([...seen], [['example.com/old', TODAY]], 'the day is the last one it turned up, so it is not forgotten next week');
  assert.deepStrictEqual([...updatedSeen(seen, [], daysBefore(-300))], [['example.com/old', TODAY]], 'and it is still there 300 days on');
});

test('what turned up last week is not forgotten because it was first shown over a year ago', () => {
  // The day stored is the day a page last turned up: a page seen every week for two years is not one that "has not turned
  // up for a year", and neither is the page that turned up in last week's run while others from that run were not found.
  const previous = new Map([['example.com/a', daysBefore(400)], ['example.com/b', daysBefore(400)]]);

  const lastWeek = updatedSeen(previous, ['https://example.com/a', 'https://example.com/b'], daysBefore(7));
  const thisWeek = updatedSeen(lastWeek, ['https://example.com/b'], TODAY);

  assert.deepStrictEqual([...thisWeek.keys()], ['example.com/a', 'example.com/b'], 'a turned up a week ago: it stays');
  assert.deepStrictEqual([...thisWeek.keys()], [...previous.keys()], 'it is not what was first shown that decides');
  // a last turned up on daysBefore(7); a year after that it goes, and b (which turned up today) is still there.
  const yearOn = updatedSeen(thisWeek, ['https://example.com/b'], daysBefore(-(FORGET_AFTER_DAYS - 7 + 1)));
  assert.deepStrictEqual([...yearOn.keys()], ['example.com/b'], 'and goes once a year has passed without it');
});

test('a feature remembers at most SEEN_LIMIT pages: the ones that have not turned up for longest go first', () => {
  const previous = new Map();
  for (let i = 0; i < SEEN_LIMIT; i++) previous.set(`example.com/${i}`, daysBefore(i % 300)); // none older than a year
  const urls = ['https://new.example/1', 'https://new.example/2', 'https://new.example/3'];

  const seen = updatedSeen(previous, urls, TODAY);

  assert.strictEqual(seen.size, SEEN_LIMIT);
  for (const url of urls) assert.ok(seen.has(url.replace('https://', '')), `${url} is this run's`);
  // Pages 299, 298 and 297 last turned up longest ago (the days cycle 0..299 before today), so they make room.
  const oldest = [...previous].sort(([, a], [, b]) => dayNumber(a) - dayNumber(b)).slice(0, 3).map(([key]) => key);
  assert.deepStrictEqual(oldest, ['example.com/299', 'example.com/298', 'example.com/297']);
  for (const key of oldest) assert.ok(!seen.has(key), `${key} was the longest forgotten`);
  const kept = [...previous.keys()].filter(key => !oldest.includes(key));
  for (const key of kept) assert.ok(seen.has(key), `${key} stays`);
});

test('the pages of this run are never forgotten to make room, even when they alone are over the limit', () => {
  const previous = new Map([['example.com/old', daysBefore(5)]]);
  const urls = Array.from({ length: SEEN_LIMIT + 20 }, (_, i) => `https://example.com/page-${i}`);

  const seen = updatedSeen(previous, urls, TODAY);

  assert.strictEqual(seen.size, SEEN_LIMIT + 20);
  assert.ok(!seen.has('example.com/old'), 'only the page that did not turn up was dropped');
});

// --- isNewItem ------------------------------------------------------------

const seenBefore = new Map([['example.com/known', '2026-09-01']]);
const news = (item, seen = seenBefore) => isNewItem(seen, item, TODAY);

test('a page that was shown before is never new, however recent it is', () => {
  assert.strictEqual(news({ url: 'https://example.com/known', publishedAt: TODAY }), false);
  assert.strictEqual(news({ url: 'https://example.com/known' }), false);
});

test('a page is compared by what it is, not how it is spelled', () => {
  const seen = new Map([['example.com/a?a=2&b=1', '2026-09-01']]);

  assert.strictEqual(news({ url: 'http://www.example.com/a/?b=1&a=2&utm_source=x#top' }, seen), false);
  assert.strictEqual(news({ url: 'https://example.com/a?a=2&b=3' }, seen), true, 'another query is another page');
});

test('a new page published within the last 30 days is new', () => {
  assert.strictEqual(news({ url: 'https://example.com/fresh', publishedAt: daysBefore(1) }), true);
  assert.strictEqual(news({ url: 'https://example.com/fresh', publishedAt: TODAY }), true);
});

test('a new page published longer ago is not news: it was just never found before', () => {
  assert.strictEqual(news({ url: 'https://example.com/old', publishedAt: daysBefore(60) }), false);
  assert.strictEqual(news({ url: 'https://example.com/old', publishedAt: '2019-05-17T08:00:00Z' }), false);
});

test('30 days is recent and 31 is not', () => {
  assert.strictEqual(news({ url: 'https://example.com/a', publishedAt: daysBefore(RECENT_DAYS) }), true);
  assert.strictEqual(news({ url: 'https://example.com/a', publishedAt: daysBefore(RECENT_DAYS + 1) }), false);
});

test('a page that does not say when it was published is new, once', () => {
  assert.strictEqual(news({ url: 'https://example.com/undated' }), true);
  assert.strictEqual(news({ url: 'https://example.com/undated', publishedAt: null }), true);
  assert.strictEqual(news({ url: 'https://example.com/undated', publishedAt: '' }), true);

  // ...and then it has been shown.
  const afterwards = updatedSeen(seenBefore, ['https://example.com/undated'], TODAY);
  assert.strictEqual(news({ url: 'https://example.com/undated' }, afterwards), false);
});

test('a date that cannot be read is no date', () => {
  for (const publishedAt of [
    'recently', '3 days ago', 'Mar 14', 'March 14', '2026', 'Updated 2020', 'Version 1234',
    'Thu, 14 Mar 2024 10:00:00 GMT', '2026-13-45', 'Foo 12, 2024x', 12345, 1.7e12, {}, ['2020-01-01'], true,
  ]) {
    assert.strictEqual(news({ url: 'https://example.com/odd', publishedAt }), true, `${JSON.stringify(publishedAt)} says nothing`);
  }
});

test('the dates blogs and APIs actually give are read', () => {
  const old = '2024';
  for (const publishedAt of [
    `${old}-03-14`, `${old}-03-14T10:00:00Z`, `${old}-03-14T10:00:00.123+02:00`, `${old}-03-14T10:00:00`,
    'Mar 14, 2024', 'March 14, 2024', 'Mar 14 2024', 'Sept. 3, 2024', '14 Mar 2024', '14 March 2024', '3 Sep. 2024',
    // Text taken from a page carries whitespace around the date.
    ` ${old}-03-14`, `${old}-03-14 `, `\n  ${old}-03-14T10:00:00Z\n`, '\t14 Mar 2024 ', '  Mar 14, 2024',
    // ...and the page's own words after it, which a date parser would refuse to read as a whole.
    'Mar 14, 2024 at 10:00 AM', 'Mar 14, 2024 \u00b7 5 min read', 'March 14, 2024 (updated)', '14 Mar 2024, 10:00',
    `${old}-03-14T10:00:00 GMT`, `${old}-03-14 10:00`, `${old}-03-14, edited`,
    // Ordinals.
    'March 14th, 2024', 'Mar 1st, 2024', 'Mar 2nd, 2024', 'Mar 3rd, 2024', '14th March 2024', '1st Mar 2024', '22nd Mar. 2024',
    // A comma after the month, as some locales write it.
    '14 March, 2024', '14th Mar., 2024',
  ]) {
    assert.strictEqual(news({ url: 'https://example.com/dated', publishedAt }), false, `${publishedAt} is long ago`);
  }
  // The same spellings, now.
  assert.strictEqual(news({ url: 'https://example.com/a', publishedAt: 'Oct 7, 2026' }), true);
  assert.strictEqual(news({ url: 'https://example.com/b', publishedAt: '7 Oct 2026' }), true);
  assert.strictEqual(news({ url: 'https://example.com/c', publishedAt: '2026-10-07T23:00:00Z' }), true);
  assert.strictEqual(news({ url: 'https://example.com/d', publishedAt: 'Oct 7th, 2026 \u00b7 5 min read' }), true);
  assert.strictEqual(news({ url: 'https://example.com/e', publishedAt: '7th Oct 2026 at 10:00 AM' }), true);
  assert.strictEqual(news({ url: 'https://example.com/f', publishedAt: '2026-10-07T23:00:00 GMT' }), true);
});

test('a date is read only at the start, whole, and with a year: the rest is undated and new once', () => {
  for (const publishedAt of [
    // A year is needed: dev.to writes "Mar 14" for this year's posts, and "Mar 14" alone would be read as 2001.
    'Mar 14', "Mar 14 '23", 'Mar 14th', '14 Mar', '14th March',
    // The date must come first and must not run on into more digits.
    'Posted on Mar 14, 2024', 'Published 2024-03-14', 'Mar 14, 20245', '2024-03-141', '14 Mar 20245',
    // Weekdays are not read, on purpose: nothing the crawlers fetch spells a date like that.
    'Thursday, March 14, 2024', 'Thu, 14 Mar 2024 10:00:00 GMT',
  ]) {
    assert.strictEqual(news({ url: 'https://example.com/odd', publishedAt }), true, `${publishedAt} says nothing`);
  }
});

test('a date after today is recent: scheduled posts and clocks a few hours ahead exist', () => {
  assert.strictEqual(news({ url: 'https://example.com/a', publishedAt: daysBefore(-1) }), true);
  assert.strictEqual(news({ url: 'https://example.com/b', publishedAt: '2099-01-01' }), true);
});

test('tweets and standards entries say when they were created, and that is what counts', () => {
  assert.strictEqual(news({ url: 'https://x.com/a/status/1', createdAt: daysBefore(2) }), true);
  assert.strictEqual(news({ url: 'https://x.com/a/status/2', createdAt: daysBefore(400) }), false);
});

test('publishedAt wins over createdAt, and a createdAt is used when publishedAt cannot be read', () => {
  assert.strictEqual(news({ url: 'https://example.com/a', publishedAt: daysBefore(1), createdAt: daysBefore(400) }), true);
  assert.strictEqual(news({ url: 'https://example.com/b', publishedAt: daysBefore(400), createdAt: daysBefore(1) }), false);
  assert.strictEqual(news({ url: 'https://example.com/c', publishedAt: 'Mar 14', createdAt: daysBefore(400) }), false);
  assert.strictEqual(news({ url: 'https://example.com/d', publishedAt: 5, createdAt: daysBefore(2) }), true);
  // Written like a date, but not a day that exists: no more of a date than the others, so the createdAt decides.
  assert.strictEqual(news({ url: 'https://example.com/e', publishedAt: 'Mar 32, 2024', createdAt: daysBefore(400) }), false);
  assert.strictEqual(news({ url: 'https://example.com/f', publishedAt: '32 Mar 2024', createdAt: daysBefore(2) }), true);
});

test('a discussion without a link of its own is judged by the address of its thread', () => {
  assert.strictEqual(news({ discussionUrl: 'https://news.example/item?id=1', publishedAt: daysBefore(2) }), true);
  assert.strictEqual(news({ discussionUrl: 'https://news.example/item?id=1', publishedAt: daysBefore(200) }), false);
  assert.strictEqual(news({ url: 'https://example.com/known', discussionUrl: 'https://news.example/item?id=2' }), false, 'the link comes first');
  assert.strictEqual(news({ url: '', discussionUrl: 'https://example.com/known' }), false);
});

test('an item that has no usable address, or one that expires, is never news', () => {
  assert.strictEqual(news({ title: 'no link' }), false);
  assert.strictEqual(news({ url: '' }), false);
  assert.strictEqual(news({ url: '   ' }), false);
  assert.strictEqual(news({ url: 42 }), false);
  assert.strictEqual(news(null), false);
  assert.strictEqual(news(undefined), false);
  assert.strictEqual(news({ url: 'https://vertexaisearch.cloud.google.com/grounding-api-redirect/abc' }), false);
  assert.strictEqual(news({ url: 'https://lh3.googleusercontent.com/pic' }), false);
});

test('a history that has never been written makes every undated or recent item new', () => {
  const nothing = seenOf(undefined, TODAY);

  assert.strictEqual(news({ url: 'https://example.com/a', publishedAt: daysBefore(3) }, nothing), true);
  assert.strictEqual(news({ url: 'https://example.com/b' }, nothing), true);
  assert.strictEqual(news({ url: 'https://example.com/c', publishedAt: daysBefore(300) }, nothing), false);
});

// --- withoutStaleFeatures -------------------------------------------------

test('a feature that was not tracked for a year is dropped from the history, and one that was is kept', () => {
  const features = {
    1: { id: 1, lastSeen: `${daysBefore(FORGET_AFTER_DAYS)}T10:00:00.000Z` },
    2: { id: 2, lastSeen: `${daysBefore(FORGET_AFTER_DAYS + 1)}T10:00:00.000Z` },
    3: { id: 3, lastSeen: `${TODAY}T10:00:00.000Z` },
  };

  assert.deepStrictEqual(Object.keys(withoutStaleFeatures(features, TODAY)), ['1', '3']);
  assert.deepStrictEqual(Object.keys(features), ['1', '2', '3'], 'the history it was given is not changed');
});

test('an entry that does not say when it was last seen is kept: nothing shows it is stale', () => {
  const features = { 1: { id: 1 }, 2: { id: 2, lastSeen: 'sometime' }, 3: { id: 3, lastSeen: 20 }, 4: null, 5: 'broken' };

  assert.deepStrictEqual(Object.keys(withoutStaleFeatures(features, TODAY)), ['1', '2', '3', '4', '5']);
});
