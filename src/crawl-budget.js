/**
 * The crawl's clock, and what is said when it ran out.
 *
 * The weekly job gives the crawl a step timeout, and a step that is killed publishes nothing: no report, no
 * history, a lost week. A crawl that stops *starting* features a margin before that limit can still write what it
 * has. Everything here is pure (the time source is a parameter) so the rule can be tested without waiting.
 *
 * The deadline is soft on purpose. It is read where a feature would start (see `runEcosystemReport`), so a
 * feature that is under way is allowed to finish and none is ever abandoned half way; the step timeout stays what
 * ends a crawl that is stuck.
 */

/**
 * @param {object} [args]
 * @param {number} [args.minutes]   the deadline; zero, a negative number or anything that is not a finite number
 *                                  means there is none
 * @param {() => number} [args.now] the time in milliseconds; only differences are used, so the default is
 *                                  `performance.now`, which the system clock being set cannot move (`Date.now` can)
 * @returns {{minutes: number, elapsedMinutes: () => number, passed: () => boolean}}
 */
export function createCrawlBudget({ minutes = 0, now = () => performance.now() } = {}) {
  const limit = Number.isFinite(minutes) && minutes > 0 ? minutes : 0;
  const started = now();
  const elapsedMs = () => now() - started;

  return {
    /** The deadline in minutes; 0 when there is none. */
    minutes: limit,
    elapsedMinutes: () => elapsedMs() / 60_000,
    /** Has the deadline been reached? Never, when there is none. */
    passed: () => limit > 0 && elapsedMs() >= limit * 60_000,
  };
}

/**
 * The order to crawl in when there is a deadline: the features that were looked at the longest ago first, and
 * those that were never looked at before all of them.
 *
 * A deadline leaves the end of the queue unvisited. If the queue were in the same order every week, the same
 * features would be the ones left out every week. A feature that was left out keeps the `lastSeen` of the last run
 * that did reach it, which is older than that of the features that were reached, so it is first in line next time.
 *
 * @template T
 * @param {T[]} items
 * @param {(item: T) => unknown} lastSeenOf  the item's last run as an ISO timestamp; anything else counts as never
 * @returns {T[]} a new array; items with the same time keep their order
 */
export function stalestFirst(items, lastSeenOf) {
  const timeOf = item => {
    const seen = lastSeenOf(item);
    const time = typeof seen === 'string' ? Date.parse(seen) : NaN;
    return Number.isNaN(time) ? -Infinity : time;
  };

  // The sort is stable (as the language requires), so items with the same time keep the order they came in.
  return items
    .map(item => ({ item, time: timeOf(item) }))
    .sort((a, b) => (a.time > b.time) - (a.time < b.time))
    .map(({ item }) => item);
}

/**
 * What a reader is told when the crawl stopped at its deadline before it had started every feature, or null when
 * it did not.
 *
 * Built from numbers only, so there is nothing in it for a report format to escape.
 *
 * @param {{deadlineMinutes?: number, elapsedMinutes?: number, reached?: number, notReached?: unknown[]}|null} [crawl]
 *   `telemetry.crawl`
 * @returns {{label: string, detail: string}|null}
 */
export function describeCrawl(crawl) {
  const left = Array.isArray(crawl?.notReached) ? crawl.notReached.length : 0;
  if (left === 0) return null;

  // Every figure goes through Number(), so whatever the telemetry held, what is written is numerals and nothing else.
  const reached = Number(crawl.reached) || 0;
  const total = reached + left;
  const deadline = Number(crawl.deadlineMinutes) > 0 ? `${Number(crawl.deadlineMinutes)}-minute deadline` : 'deadline';
  const elapsed = Number(crawl.elapsedMinutes) >= 0 ? ` (${Number(crawl.elapsedMinutes)} minutes in)` : '';
  const one = left === 1;

  return {
    label: `Partial: ${reached} of ${total} features`,
    detail:
      `The crawl reached its ${deadline}${elapsed} and stopped starting features: ${reached} of ${total} were ` +
      `investigated, and the other ${left} ${one ? 'is' : 'are'} not in this report. ${one ? 'It comes' : 'They come'} first in the next crawl.`,
  };
}
