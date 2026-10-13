import { logger } from './logger.js';

/**
 * Run-wide record of how the crawl found each feature's web-features group.
 *
 * Why this exists: Baseline, Web Platform Tests pass rates, vendor positions and
 * usage figures all come from the web-features group a ChromeStatus feature is
 * mapped to (see src/search/web-features.js). If the mapping files cannot be
 * downloaded, every one of those fields quietly disappears for the whole run,
 * which would look exactly like a week in which nothing is tracked, so the
 * outcome is counted and shown in the log and the report telemetry, the way
 * src/llm-stats.js and src/grounding-stats.js do for their parts of the crawl.
 */

const state = {
  mappings: null,
  mapped: new Set(),
  unmapped: new Set(),
  requests: 0,
  ok: 0,
  absent: 0,
  failed: 0,
};

/**
 * Records the outcome of loading the mapping files.
 *
 * @param {{available: boolean, chromeStatusIds?: number, groups?: number, missing?: string[]}} outcome
 *   `available` is false when the file that maps ChromeStatus ids to groups could
 *   not be used; `missing` names the optional files that could not be read
 */
export function recordMappings({ available, chromeStatusIds = 0, groups = 0, missing = [] }) {
  state.mappings = { available: !!available, chromeStatusIds, groups, missing: [...missing] };
}

/** Records that a feature was (or was not) found in the mapping. Counted once per feature id. */
export function recordFeatureMapping(featureId, mapped) {
  const key = String(featureId);
  if (mapped) {
    state.unmapped.delete(key);
    state.mapped.add(key);
  } else if (!state.mapped.has(key)) {
    state.unmapped.add(key);
  }
}

/**
 * Records one request to webstatus.dev for a group's Baseline status and test
 * results: `ok`, `absent` (the API does not know the group) or `failed`.
 */
export function recordWebStatusRequest(outcome) {
  state.requests += 1;
  if (outcome === 'ok') state.ok += 1;
  else if (outcome === 'absent') state.absent += 1;
  else state.failed += 1;
}

/** A plain-object copy of the counters, safe to serialise into telemetry. */
export function webFeatureStatsSnapshot() {
  return {
    mappings: state.mappings ? { ...state.mappings, missing: [...state.mappings.missing] } : null,
    features: { mapped: state.mapped.size, unmapped: state.unmapped.size },
    webstatus: { requests: state.requests, ok: state.ok, absent: state.absent, failed: state.failed },
  };
}

/** Lines for the end-of-run log; none when no feature was ever looked up. */
export function describeWebFeatureStats(snapshot = webFeatureStatsSnapshot()) {
  const { mappings, features, webstatus } = snapshot;
  if (!mappings) return [];

  if (!mappings.available) {
    return ['web-features mappings could not be loaded: no feature has a Baseline status found by id, test pass rates, group positions or usage this run (Baseline falls back to a search by name)'];
  }

  const total = features.mapped + features.unmapped;
  const lines = [
    `${features.mapped} of ${total} feature(s) belong to a web-features group` +
      (mappings.missing.length > 0 ? `; not loaded: ${mappings.missing.join(', ')}` : ''),
  ];
  if (webstatus.requests > 0) {
    lines.push(
      `webstatus.dev answered ${webstatus.ok} of ${webstatus.requests} request(s)` +
        (webstatus.absent > 0 ? `, ${webstatus.absent} group(s) unknown to it` : '') +
        (webstatus.failed > 0 ? `, ${webstatus.failed} failed` : '')
    );
  }
  return lines;
}

/** Clears every counter. Call at the start of a run (and in tests). */
export function resetWebFeatureStats() {
  state.mappings = null;
  state.mapped.clear();
  state.unmapped.clear();
  state.requests = 0;
  state.ok = 0;
  state.absent = 0;
  state.failed = 0;
}

/**
 * Warns when the mapping files could not be used, which silently removes the
 * group data from every feature in the report.
 *
 * @returns {string|null} the warning that was logged, if any
 */
export function warnIfMappingsUnavailable(snapshot = webFeatureStatsSnapshot()) {
  if (!snapshot.mappings || snapshot.mappings.available) return null;
  const message =
    'The web-features mapping could not be loaded, so Baseline, test pass rates, group positions and usage ' +
    'are missing for every feature (Baseline falls back to a search by name). raw.githubusercontent.com may be unreachable from here.';
  logger.warn(message);
  return message;
}
