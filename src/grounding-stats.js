import { logger } from './logger.js';

/**
 * Run-wide record of what became of the sources Gemini's search grounding cited.
 *
 * Why this exists: grounded answers cite pages through links Google mints for
 * the request. They expire (a month on, 9 of 10 were dead), say nothing about the
 * page behind them and made up a third of the "articles" in a published report,
 * so each is followed to the real page when the answer arrives (see
 * src/search/gemini-grounding.js). A link that cannot be followed is dropped, and
 * a silently shrinking list of sources would look exactly like a quiet week,
 * so every loss is counted by reason and shown in the log and the report
 * telemetry, the way src/llm-stats.js does for the model calls themselves.
 */

/** Why a cited source was not used. */
export const GROUNDING_DROP = Object.freeze({
  /** The link no longer leads anywhere (HTTP 404 or 410): it expired. */
  EXPIRED: 'expired',
  /** The link answered, but not with a redirect. */
  NO_REDIRECT: 'no_redirect',
  /** The link, or the page it names, is not a public web address (or carries credentials). */
  UNSAFE: 'unsafe',
  TIMEOUT: 'timeout',
  /** Any other failure to reach it. */
  NETWORK: 'network',
  /** Not a web address at all. */
  INVALID: 'invalid',
});

const state = {
  found: 0,
  redirects: 0,
  resolved: 0,
  duplicates: 0,
  dropped: new Map(),
  considered: 0,
  alreadyListed: 0,
  added: 0,
  rejected: 0,
  unread: 0,
  skipped: 0,
};

/**
 * Records one grounded answer's sources.
 *
 * @param {{
 *   found: number,
 *   redirects: number,
 *   resolved: number,
 *   duplicates: number,
 *   dropped: Record<string, number>,
 * }} outcome `found` is how many distinct links the answer cited, `redirects` how
 *   many of those were Gemini's redirects, `resolved` how many of those led to a
 *   page, `duplicates` how many sources named a page that another one already did
 *   and `dropped` the sources lost, by `GROUNDING_DROP` reason
 */
export function recordGroundedSources({ found, redirects, resolved, duplicates, dropped }) {
  state.found += found;
  state.redirects += redirects;
  state.resolved += resolved;
  state.duplicates += duplicates;
  for (const [reason, count] of Object.entries(dropped || {})) {
    state.dropped.set(reason, (state.dropped.get(reason) || 0) + count);
  }
}

/**
 * Records what the synthesis step did with the sources its answer cited.
 *
 * @param {{
 *   considered: number,
 *   alreadyListed: number,
 *   added: number,
 *   rejected: number,
 *   unread?: number,
 *   skipped?: number,
 * }} outcome `considered` sources were looked at, `alreadyListed` of them were
 *   already among the feature's verified articles, `added` passed the relevance
 *   check, `rejected` did not and `unread` were not added because the page could
 *   not be read to check them. `skipped` sources were not looked at: the
 *   feature's own links, tweets, and whatever was past the limit on how many are
 *   read
 */
export function recordGroundedAdoption({ considered, alreadyListed, added, rejected, unread = 0, skipped = 0 }) {
  state.considered += considered;
  state.alreadyListed += alreadyListed;
  state.added += added;
  state.rejected += rejected;
  state.unread += unread;
  state.skipped += skipped;
}

/** A plain-object copy of the counters, safe to serialise into telemetry. */
export function groundingStatsSnapshot() {
  return {
    found: state.found,
    redirects: state.redirects,
    resolved: state.resolved,
    duplicates: state.duplicates,
    dropped: Object.fromEntries(state.dropped),
    adoption: {
      considered: state.considered,
      alreadyListed: state.alreadyListed,
      added: state.added,
      rejected: state.rejected,
      unread: state.unread,
      skipped: state.skipped,
    },
  };
}

/** Lines for the end-of-run log; none when no grounded answer was ever received. */
export function describeGroundingStats(snapshot = groundingStatsSnapshot()) {
  if (snapshot.found === 0) return [];

  const dropped = Object.entries(snapshot.dropped);
  const lostCount = dropped.reduce((sum, [, count]) => sum + count, 0);
  const lost = dropped.map(([reason, count]) => `${reason} ×${count}`).join(', ');

  const lines = [
    `${snapshot.found} source(s) cited by Gemini's search grounding; ${snapshot.resolved} of ${snapshot.redirects} redirect link(s) led to the real page` +
      (lostCount > 0 ? `, ${lostCount} source(s) dropped (${lost})` : '') +
      (snapshot.duplicates > 0 ? `, ${snapshot.duplicates} duplicate(s) merged` : ''),
  ];

  const { considered, alreadyListed, added, rejected, unread = 0, skipped = 0 } = snapshot.adoption;
  if (considered > 0 || skipped > 0) {
    lines.push(
      `Of ${considered + skipped} source(s) the AI synthesis cited: ${alreadyListed} already listed, ` +
      `${added} verified and added to the articles, ${rejected} rejected as not about the feature` +
      (unread > 0 ? `, ${unread} not added because the page could not be read` : '') +
      (skipped > 0 ? `, ${skipped} not looked at (the feature's own links, tweets, or past the limit)` : '')
    );
  }
  return lines;
}

/** Clears every counter. Call at the start of a run (and in tests). */
export function resetGroundingStats() {
  state.found = 0;
  state.redirects = 0;
  state.resolved = 0;
  state.duplicates = 0;
  state.dropped.clear();
  state.considered = 0;
  state.alreadyListed = 0;
  state.added = 0;
  state.rejected = 0;
  state.unread = 0;
  state.skipped = 0;
}

/** The failures that say the redirect service itself is misbehaving, rather than a link having expired (404 or 410). */
const SERVICE_FAILURES = [GROUNDING_DROP.NO_REDIRECT, GROUNDING_DROP.UNSAFE, GROUNDING_DROP.TIMEOUT, GROUNDING_DROP.NETWORK];

/**
 * Warns when the redirect links were mostly lost for a reason other than expiry:
 *  - none led anywhere: the signature of the redirect service having changed or
 *    being unreachable from here, as opposed to a few expired links; every source
 *    Gemini found would be dropped, quietly;
 *  - at least four were followed and more than half failed in some other way than
 *    having expired (not a redirect, an unsafe target, a timeout, the network): a
 *    service that is partly down loses most of the sources just as quietly.
 *
 * @returns {string|null} the warning that was logged, if any
 */
export function warnIfNothingResolved(snapshot = groundingStatsSnapshot()) {
  const { redirects, resolved } = snapshot;
  if (redirects === 0) return null;

  let message = null;
  if (resolved === 0) {
    message =
      `None of the ${redirects} redirect link(s) in Gemini's search grounding could be followed to a page, ` +
      `so every source it found was dropped. The redirect service may have changed or be unreachable from here.`;
  } else {
    const failures = SERVICE_FAILURES
      .map(reason => [reason, snapshot.dropped?.[reason] || 0])
      .filter(([, count]) => count > 0);
    const failed = failures.reduce((sum, [, count]) => sum + count, 0);
    if (redirects >= 4 && failed * 2 > redirects) {
      message =
        `${failed} of the ${redirects} redirect link(s) in Gemini's search grounding could not be followed, and not because ` +
        `they had expired (${failures.map(([reason, count]) => `${reason} ×${count}`).join(', ')}). ` +
        `The redirect service may be partly unreachable from here, which loses most of the sources it found.`;
    }
  }

  if (message) logger.warn(message);
  return message;
}
