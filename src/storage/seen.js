/**
 * What each feature has shown before, and so what counts as news.
 *
 * The history used to keep, per feature, only the URLs of the LAST run. A page that dropped out of the search
 * results for a week and came back was "new" again, and so was any old page the first time a search happened to
 * find it: in the week this was written 84% of the dated "new" articles were over 30 days old, and 40% of the "new"
 * URLs had already been shown in an earlier week.
 *
 * Now every feature remembers each page it has shown, keyed by `canonicalUrl`, with the day it last turned up.
 * An item is new only when
 *
 *   - it has never been shown, AND
 *   - it was published within the last `RECENT_DAYS`, or does not say when (or not in a way that can be read).
 *
 * An undated page can be as old as the web, but nothing tells it from a new one, and "never shown" makes it appear
 * once at most, which costs far less than hiding a real publication.
 *
 * Everything here is pure: the day is always passed in, as `YYYY-MM-DD`.
 */
import { canonicalUrl, isEphemeralUrl } from '../search/urls.js';

/** A page that was never shown before is new only if it was published within this many days (or does not say). */
export const RECENT_DAYS = 30;

/** A page that stopped turning up is forgotten after this many days, and so is a feature that was not tracked for as long. */
export const FORGET_AFTER_DAYS = 365;

/** The most pages one feature remembers. Beyond it the ones that have not turned up for longest are forgotten first. */
export const SEEN_LIMIT = 500;

const DAY_MS = 86_400_000;

/**
 * The number of days from 1970-01-01 to a calendar day written `YYYY-MM-DD`; NaN for anything else.
 */
export function dayNumber(day) {
  if (typeof day !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(day)) return NaN;
  const ms = Date.parse(`${day}T00:00:00Z`);
  // Some impossible days (2026-02-30) are accepted and rolled over; a real day reads back as itself.
  return !Number.isNaN(ms) && new Date(ms).toISOString().startsWith(day) ? ms / DAY_MS : NaN;
}

/** The calendar day of a moment, as `YYYY-MM-DD` in UTC. */
export function isoDay(moment = new Date()) {
  return moment.toISOString().slice(0, 10);
}

/** The calendar day an ISO timestamp falls on, or null when it is not one. */
function dayOf(timestamp) {
  const day = typeof timestamp === 'string' ? timestamp.slice(0, 10) : '';
  return Number.isNaN(dayNumber(day)) ? null : day;
}

/** The key a page is remembered under; '' for what cannot be remembered (blank, or a link that expires within weeks). */
function seenKey(rawUrl) {
  return isEphemeralUrl(rawUrl) ? '' : canonicalUrl(rawUrl);
}

/**
 * The pages a feature has shown before, as a Map from canonical URL to the day it last turned up.
 *
 * An entry written before the seen-map existed has only `knownUrls`, the pages of the run at `lastSeen`; they count
 * as shown on that day. No entry at all (a feature never tracked) has shown nothing. An entry that is not an object,
 * or whose pages are stored in a shape that cannot be read, is an error: a silent empty map would make everything
 * new again.
 *
 * @param {object|undefined} entry A feature's entry in the history.
 * @param {string} today
 * @returns {Map<string, string>}
 */
export function seenOf(entry, today) {
  const seen = new Map();
  if (entry === undefined || entry === null) return seen;
  if (typeof entry !== 'object' || Array.isArray(entry)) {
    throw new Error('a history entry must be an object');
  }

  if (entry.seen !== undefined) {
    if (!entry.seen || typeof entry.seen !== 'object' || Array.isArray(entry.seen)) {
      throw new Error('"seen" in the history entry must be an object of URLs and the day each last turned up');
    }
    for (const [key, day] of Object.entries(entry.seen)) {
      // A day that cannot be read still says "shown", which is what matters.
      seen.set(key, dayOf(day) ?? today);
    }
    return seen;
  }

  if (entry.knownUrls != null && !Array.isArray(entry.knownUrls)) {
    throw new Error('"knownUrls" in the history entry must be a list of URLs');
  }
  const day = dayOf(entry.lastSeen) ?? today;
  for (const rawUrl of entry.knownUrls ?? []) {
    const key = seenKey(rawUrl);
    if (key) seen.set(key, day);
  }
  return seen;
}

/**
 * What a feature remembers after a run: everything it remembered, plus the pages of this run, which turned up today.
 * A page that is still turning up is kept however long ago it was first shown; one that has not turned up for
 * `FORGET_AFTER_DAYS` is forgotten, and the longest-forgotten go first when there are more than `SEEN_LIMIT`.
 *
 * @param {Map<string, string>} previous What `seenOf` returned for the feature.
 * @param {string[]} urls The addresses of this run's articles, discussions, standards and packages.
 * @param {string} today
 * @returns {Map<string, string>}
 */
export function updatedSeen(previous, urls, today) {
  const seen = new Map(previous);
  const current = new Set();
  for (const rawUrl of urls) {
    const key = seenKey(rawUrl);
    if (!key) continue;
    current.add(key);
    seen.set(key, today);
  }

  const cutoff = dayNumber(today) - FORGET_AFTER_DAYS;
  let excess = seen.size - SEEN_LIMIT;
  const notTurningUp = [...seen]
    .filter(([key]) => !current.has(key))
    .sort(([, dayA], [, dayB]) => dayNumber(dayA) - dayNumber(dayB));
  for (const [key, day] of notTurningUp) {
    if (excess > 0 || dayNumber(day) < cutoff) {
      seen.delete(key);
      excess--;
    }
  }
  return seen;
}

// A date at the very start of a text: `2026-03-14`, `Mar 14, 2026`, `March 14th, 2026`, `14 Mar 2026`. The year is not optional.
const DATE_AT_START = /^(?:\d{4}-\d{2}-\d{2}|[A-Za-z]{3,9}\.? \d{1,2}(?:st|nd|rd|th)?,? \d{4}|\d{1,2}(?:st|nd|rd|th)? [A-Za-z]{3,9}\.?,? \d{4})(?!\d)/;

/**
 * When something was published, in milliseconds; null when it does not say, or not in a form that can be trusted.
 *
 * Only ISO dates (`2026-03-14`, `2026-03-14T10:00:00Z`) and the day-month-year spellings blogs use
 * (`Mar 14, 2026`, `14 Mar 2026`, `March 14th, 2026`) are read, at the start of the text. The window is days long, so
 * the day is all that matters: whatever follows the date (a time, `at 10:00 AM`, `· 5 min read`) is ignored. The year
 * is required: dev.to says `Mar 14` for this year's posts, and a parser asked about that would answer 2001. Anything
 * else (a date that starts with a weekday, `3 days ago`) is "undated", which counts as new once.
 */
export function publishedAt(item) {
  for (const value of [item?.publishedAt, item?.createdAt]) {
    if (typeof value !== 'string') continue;
    const date = DATE_AT_START.exec(value.trim())?.[0];
    if (!date) continue;
    // A date parser does not read "14th".
    const ms = Date.parse(date.replace(/(\d)(?:st|nd|rd|th)\b/, '$1'));
    if (!Number.isNaN(ms)) return ms;
  }
  return null;
}

/**
 * Is this article, discussion or standards entry news: not in `seen`, and published within `RECENT_DAYS` of today
 * or undated? A date in the future (a scheduled post, a clock a few hours ahead) is recent. An item without a
 * usable address, or with one that expires, can never be matched against the history and so is never news.
 *
 * @param {Map<string, string>} seen
 * @param {object} item An article, discussion or standards entry.
 * @param {string} today
 */
export function isNewItem(seen, item, today) {
  const key = seenKey(item?.url || item?.discussionUrl);
  if (!key || seen.has(key)) return false;
  const published = publishedAt(item);
  return published === null || dayNumber(today) * DAY_MS - published <= RECENT_DAYS * DAY_MS;
}

/**
 * The history without the features that have not been tracked for a year; an entry that does not say when it was
 * last seen is kept, because nothing shows that it is stale.
 */
export function withoutStaleFeatures(features, today) {
  const cutoff = dayNumber(today) - FORGET_AFTER_DAYS;
  return Object.fromEntries(
    Object.entries(features).filter(([, entry]) => !(dayNumber(dayOf(entry?.lastSeen)) < cutoff))
  );
}
