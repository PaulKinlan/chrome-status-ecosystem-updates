/**
 * Pre-publication sanity checks.
 *
 * Both guard against the same failure: ChromeStatus (or the crawl itself)
 * quietly returns far less than it should, and the pipeline faithfully turns
 * that into a "successful" run that overwrites a good report, the history and
 * the deployed site with an empty or tiny one.
 *
 * Everything here is pure (no I/O) so the rules can be tested exhaustively;
 * the runner decides whether a failed verdict throws or, with --force, warns.
 */

/** Below this many published features a comparison is too noisy to mean anything. */
export const MIN_PUBLISHED_FOR_RATIO = 10;

/** A new run must keep at least this share of the published feature count. */
export const MIN_FEATURE_RATIO = 0.5;

/** More than this share of features failing means something systemic broke. */
export const MAX_FAILURE_RATIO = 0.5;

/** Failure ratios are meaningless for hand-made runs of a handful of features. */
export const MIN_ATTEMPTED_FOR_FAILURE_RATIO = 10;

const sameSet = (a, b) => {
  const left = [...new Set(a)].sort().join('\u0000');
  const right = [...new Set(b)].sort().join('\u0000');
  return left === right;
};

/**
 * Is `count` a believable number of features to report on for this window?
 *
 * `count` is what ChromeStatus returned for the window after status filtering
 * but BEFORE any --limit: the cap says how much to crawl, not how healthy the
 * upstream is, so it must not be able to mask a collapsed response.
 *
 * Zero is always suspicious. Beyond that the count is only compared with the
 * published report when the two are comparable: the same number of milestones,
 * mostly the same ones (see below), the same status filters, and a baseline big
 * enough to be a meaningful reference.
 *
 * The baseline is what ChromeStatus listed when the published report was made
 * (`upstreamCount`), not how many features that report contains: the report is
 * shortened by `MAX_FEATURES` and by features that failed, so comparing against
 * it would let a collapse that stays above the cap go unnoticed. Reports made
 * before that was recorded fall back to their feature count.
 *
 * @param {object} args
 * @param {number} args.count
 * @param {number[]} args.milestones      the window being reported
 * @param {string[]} args.statusTypes     the status filter in force ([] = all)
 * @param {{featuresCount:number, upstreamCount?:number|null, milestones:number[], statusTypes:string[]|null, weekString:string|null}|null} args.published
 * @returns {{ok: true} | {ok: false, problem: string}}
 */
export function assessUpstreamCount({ count, milestones, statusTypes, published }) {
  if (milestones.length === 0) {
    return { ok: false, problem: 'No Chrome milestones were resolved from the request, so there is nothing to report on.' };
  }
  const window = `Chrome ${milestones.join(', ')}`;

  if (count === 0) {
    return {
      ok: false,
      problem:
        `ChromeStatus returned no features for ${window}` +
        (statusTypes.length > 0 ? ` (statuses: ${statusTypes.join(', ')})` : '') +
        '. That points to an upstream outage or API change rather than a quiet release.',
    };
  }

  if (!published) return { ok: true };
  const recorded = Number.isFinite(published.upstreamCount);
  const baseline = recorded ? published.upstreamCount : published.featuresCount;
  if (!(baseline >= MIN_PUBLISHED_FOR_RATIO)) return { ok: true };

  // Different window size or filters: a smaller count is expected, not alarming.
  if (published.milestones.length !== milestones.length) return { ok: true };
  if (published.statusTypes && !sameSet(published.statusTypes, statusTypes)) return { ok: true };

  // A window of the right size over different releases (a one-off run of older ones,
  // say) is no yardstick either, and if it were taken for one, every later scheduled
  // run would be refused until someone forced it. The weekly slide keeps all but one
  // or two milestones, so requiring half of them to be shared never gets in its way.
  const publishedMilestones = new Set(published.milestones.map(String));
  const shared = milestones.filter(m => publishedMilestones.has(String(m))).length;
  if (shared < Math.ceil(milestones.length / 2)) return { ok: true };

  if (count / baseline < MIN_FEATURE_RATIO) {
    const drop = Math.round((1 - count / baseline) * 100);
    const week = published.weekString ? ` (${published.weekString})` : '';
    const forWindow = published.milestones.length > 0 ? ` for Chrome ${published.milestones.join(', ')}` : '';
    const was = recorded
      ? `it listed ${baseline}${forWindow} when the published report${week} was made`
      : `the published report${week} has ${baseline}${forWindow}`;
    return {
      ok: false,
      problem:
        `ChromeStatus returned only ${count} features for ${window}, but ${was}. ` +
        `A ${drop}% drop usually means a partial ChromeStatus response.`,
    };
  }

  return { ok: true };
}

/**
 * Did so many features fail during the crawl that the report would be mostly
 * holes? (Individual failures are contained and listed in telemetry; this is
 * for the case where it is not individual any more.)
 *
 * A feature the crawl never started, because its deadline had passed, is as
 * missing from the report as one that failed, so it counts the same way: a
 * crawl that stops at its deadline with most of the features done is a partial
 * report, one that stops with most of them undone is not worth publishing.
 *
 * @param {{attempted: number, failed: number, notReached?: number}} args
 *        `attempted` is every feature that was started; `notReached` those that were not
 * @returns {{ok: true} | {ok: false, problem: string, alternative?: string}}
 *          `alternative` is another way out than --force, given when the crawl ran out of time: nothing is saved
 *          when a run is refused, so the next one starts where this one did and is cut at the same place
 */
export function assessFailureRatio({ attempted, failed, notReached = 0 }) {
  const total = attempted + notReached;
  const missing = failed + notReached;
  if (total >= MIN_ATTEMPTED_FOR_FAILURE_RATIO && missing / total > MAX_FAILURE_RATIO) {
    if (notReached === 0) {
      return {
        ok: false,
        problem: `${failed} of ${attempted} features failed to process, which is too many to publish a ` +
          'meaningful report.',
      };
    }
    return {
      ok: false,
      problem: `${missing} of ${total} features are missing from the report (${failed} failed to process, ${notReached} ` +
        'were not reached before the crawl deadline), which is too many to publish a meaningful report.',
      alternative: 'with a smaller --limit (or MAX_FEATURES) so that the crawl finishes before its deadline',
    };
  }
  return { ok: true };
}

/** Below this share of features with AI synthesis, a run with AI configured counts as degraded. */
export const MIN_AI_COVERAGE = 0.9;

/** Coverage over a handful of hand-picked features says nothing about the provider. */
export const MIN_FEATURES_FOR_AI_COVERAGE = 5;

/**
 * Did AI synthesis reach (nearly) every feature it should have?
 *
 * A warning, never a gate: a report without synthesis is still a useful report
 * (the heuristic engine produced everything except the prose). What must not
 * happen is for it to go out unremarked, which is how a third of a published
 * week ended up without synthesis. Only meaningful when an AI provider was
 * actually configured; without a key, no synthesis is the expected outcome.
 *
 * @param {{configured: boolean, withAi: number, total: number}} args
 * @returns {{ok: true} | {ok: false, problem: string}}
 */
export function assessAiCoverage({ configured, withAi, total }) {
  if (!configured || total < MIN_FEATURES_FOR_AI_COVERAGE) return { ok: true };

  if (withAi / total < MIN_AI_COVERAGE) {
    const percent = Math.round((withAi / total) * 100);
    return {
      ok: false,
      problem:
        `Only ${withAi} of ${total} features (${percent}%) received AI synthesis although an AI provider is configured; ` +
        'the rest fell back to the heuristic engine. See the LLM failure summary above for the causes.',
    };
  }
  return { ok: true };
}
