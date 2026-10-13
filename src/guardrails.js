import { GROUNDING_REDIRECT_HOST, isGroundingRedirect } from './search/urls.js';
import { RECENT_DAYS, dayNumber, publishedAt } from './storage/seen.js';
import { HIGH_SHARE } from './momentum.js';
import { PROVIDER_NAMES, isClientError } from './provider-stats.js';

/**
 * Guardrails on the report before it is written: the signs that a crawl succeeded and still produced a worse report
 * than it looks.
 *
 * Each of these was true of a report that was published without anyone noticing: 830 of its 2,619 articles were
 * Gemini's expiring redirect links, 80 of its 87 features were "High" momentum, 84% of the dated "new" articles were
 * more than 30 days old, X had refused 13% of the queries and the JSON file was 11 MB. None of that stops a run, and
 * none of it should: `src/quality.js` is where a run is refused, and a report with a flaw is still better than no
 * report. So these are measured, recorded in `telemetry.guardrails`, and said out loud (a warning in the log and, on
 * GitHub Actions, an annotation on the run's page). They never gate.
 *
 * Everything here is pure: what it needs is passed in.
 */

/**
 * The figure past which each check warns, and how much has to be measured before a check is judged at all (a share
 * of three articles says nothing). Shares are between 0 and 1.
 */
export const GUARDRAIL_LIMITS = Object.freeze({
  /** Gemini grounding redirect links that may be in the report. */
  groundingRedirects: 0,
  /** The share of features that may be High momentum, judged from `minFeaturesForMomentum` features. */
  highMomentumShare: 0.5,
  minFeaturesForMomentum: 10,
  /** The share of the dated "new" articles that may be more than `RECENT_DAYS` old, judged from `minDatedNewArticles`. */
  staleNewShare: 0.2,
  minDatedNewArticles: 10,
  /** The share of one provider's responses that may be client errors, judged from `minProviderResponses`. */
  providerClientErrorShare: 0.02,
  minProviderResponses: 20,
  /** The size of the JSON report, in bytes (decimal: 15,000,000 is 15 MB). */
  latestJsonBytes: 15_000_000,
});

/**
 * @typedef {object} Check
 * @property {string} id
 * @property {boolean} ok        false when what was measured is past its limit
 * @property {boolean} skipped   true when too little was measured to judge it; `ok` is then true
 * @property {number|null} value what was measured: a count, a share between 0 and 1, or bytes
 * @property {number} limit      the figure past which it warns
 * @property {string[]} [sample] where to look: features that carry redirects, the statuses of the refused requests
 */

const DAY_MS = 86_400_000;

/** A web address inside serialised JSON: it ends at whitespace, a quote, or the backslash of an escape. */
const ADDRESS_IN_JSON = /https?:\/\/[^\s"\\]+/gi;

const round3 = value => Math.round(value * 1000) / 1000;
const percent = share => `${Math.round(share * 1000) / 10}%`;
const megabytes = bytes => `${Math.round(bytes / 100_000) / 10} MB`;
const grouped = bytes => `${String(bytes).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} bytes`;
const list = value => (Array.isArray(value) ? value : []);

/**
 * Gemini's grounding redirects anywhere in a feature (an article, a source, the text of an answer, a link the feature
 * itself carries): they expire, and every one of them should have been followed to the real page or dropped.
 */
function checkGroundingRedirects(features, limits) {
  const found = new Set();
  const affected = [];
  for (const item of features) {
    const redirects = (JSON.stringify(item).match(ADDRESS_IN_JSON) ?? []).filter(isGroundingRedirect);
    if (redirects.length === 0) continue;
    for (const url of redirects) found.add(url);
    affected.push(item.feature?.name ?? '(unnamed)');
  }

  const sample = affected.slice(0, 3);
  return {
    check: {
      id: 'grounding-redirects',
      ok: found.size <= limits.groundingRedirects,
      skipped: false,
      value: found.size,
      limit: limits.groundingRedirects,
      sample,
    },
    warning:
      `${found.size} link(s) on ${GROUNDING_REDIRECT_HOST}, the redirects Gemini's search grounding mints, are still in ` +
      `this report (in ${affected.length} feature(s), among them ${sample.map(name => `"${name}"`).join(', ')}). ` +
      `They stop leading anywhere within weeks; each should have been followed to the real page or dropped.`,
  };
}

/** High is the top few features, so most of them being High means the tiers are not separating anything. */
function checkHighMomentum(features, limits) {
  const total = features.length;
  const high = features.filter(item => item.analysis?.momentumLevel === 'High').length;
  const share = total > 0 ? high / total : 0;
  const skipped = total < limits.minFeaturesForMomentum;

  return {
    check: {
      id: 'high-momentum-share',
      ok: skipped || share <= limits.highMomentumShare,
      skipped,
      value: round3(share),
      limit: limits.highMomentumShare,
    },
    warning:
      `${high} of ${total} features (${percent(share)}) are High momentum, more than the ${percent(limits.highMomentumShare)} ` +
      `this check allows. High is the top ${percent(HIGH_SHARE)} of the features, so a share this large means the tiers ` +
      `are not separating them.`,
  };
}

/** "New" is meant to be recent, so a lot of dated "new" articles from long ago means the rule has stopped working. */
function checkStaleNewArticles(features, today, limits) {
  const todayMs = dayNumber(today) * DAY_MS;
  // Every comparison with NaN is false, so a `today` that is not a day would read as "nothing is stale".
  if (Number.isNaN(todayMs)) throw new Error(`"${String(today)}" is not a day (YYYY-MM-DD), so the age of the "new" articles cannot be judged`);
  let dated = 0;
  let stale = 0;
  for (const item of features) {
    for (const article of list(item.delta?.newArticles)) {
      const published = publishedAt(article);
      if (published === null) continue;
      dated++;
      if (todayMs - published > RECENT_DAYS * DAY_MS) stale++;
    }
  }
  const share = dated > 0 ? stale / dated : 0;
  const skipped = dated < limits.minDatedNewArticles;

  return {
    check: {
      id: 'stale-new-articles',
      ok: skipped || share <= limits.staleNewShare,
      skipped,
      value: round3(share),
      limit: limits.staleNewShare,
    },
    warning:
      `${stale} of the ${dated} "new" articles that say when they were published (${percent(share)}) are more than ` +
      `${RECENT_DAYS} days old, more than the ${percent(limits.staleNewShare)} this check allows. "New" is meant to be recent.`,
  };
}

/**
 * One check for each provider that answered at all. The 4xx answers are what a provider says about the requests it
 * was sent, so a high share is the provider's verdict on this crawler rather than on the web.
 */
function checkProviders(providers, limits) {
  return Object.keys(PROVIDER_NAMES)
    .filter(provider => providers[provider]?.responses > 0)
    .map(provider => {
      const { responses, clientErrors, statuses } = providers[provider];
      const share = clientErrors / responses;
      const skipped = responses < limits.minProviderResponses;
      const sample = Object.entries(statuses)
        .filter(([status]) => isClientError(Number(status)))
        .map(([status, count]) => `${status} ×${count}`);

      return {
        check: {
          id: `${provider}-client-errors`,
          ok: skipped || share <= limits.providerClientErrorShare,
          skipped,
          value: round3(share),
          limit: limits.providerClientErrorShare,
          sample,
        },
        warning:
          `${PROVIDER_NAMES[provider]} refused ${clientErrors} of ${responses} requests (${[percent(share), ...sample].join('; ')}), ` +
          `more than the ${percent(limits.providerClientErrorShare)} this check allows. That usually means a missing or expired ` +
          `token, an exhausted quota or a query it cannot read, and whatever it would have found is missing from the report.`,
      };
    });
}

/** The JSON report is read by every consumer of the data and diffed in every commit. */
function checkJsonSize(bytes, limits) {
  const measured = Number.isFinite(bytes);
  return {
    check: {
      id: 'latest-json-size',
      ok: !measured || bytes <= limits.latestJsonBytes,
      skipped: !measured,
      value: measured ? bytes : null,
      limit: limits.latestJsonBytes,
    },
    warning:
      `The JSON report is ${megabytes(bytes)} (${grouped(bytes)}), more than the ${megabytes(limits.latestJsonBytes)} ` +
      `(${grouped(limits.latestJsonBytes)}) this check allows. Something is adding far more data per feature than before.`,
  };
}

/**
 * Measures a report that is about to be written against the limits.
 *
 * @param {object} args
 * @param {object[]} args.features       the features of the report, as the runner holds them (`{feature, ecosystem, analysis, delta}`)
 * @param {object} [args.providers]      `snapshotProviderStats()`
 * @param {number} [args.latestJsonBytes] the size of the JSON report
 * @param {string} args.today            `YYYY-MM-DD`
 * @param {typeof GUARDRAIL_LIMITS} [args.limits]
 * @returns {{checks: Check[], warnings: string[]}} every check that was made, and a sentence for each one past its limit
 */
export function assessGuardrails({ features, providers = {}, latestJsonBytes, today, limits = GUARDRAIL_LIMITS }) {
  const items = list(features);
  const results = [
    checkGroundingRedirects(items, limits),
    checkHighMomentum(items, limits),
    checkStaleNewArticles(items, today, limits),
    ...checkProviders(providers, limits),
    checkJsonSize(latestJsonBytes, limits),
  ];

  return {
    checks: results.map(result => result.check),
    warnings: results.filter(result => !result.check.ok).map(result => result.warning),
  };
}
