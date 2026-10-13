import { logger } from '../logger.js';
import { baselineLabel, lookupWebStatus } from './webstatus.js';

export { pickConfidentMatch } from './webstatus.js';

/**
 * Looks up the cross-browser Baseline status of the web-features group the feature
 * belongs to (Widely available, Newly available, Limited) on webstatus.dev, which
 * powers baseline.dev.
 *
 * With `webFeature` (the group the web-features mapping assigns the feature to,
 * see web-features.js) the group is asked for by id. Without it the feature is
 * searched for by name and accepted only on a confident match. The result is
 * labelled `scope: 'group'` because Baseline describes the group, which can be
 * broader than the one ChromeStatus feature.
 */
export async function searchBaseline(feature, webFeature = null) {
  try {
    const found = await lookupWebStatus(feature, webFeature);
    if (!found) return null;

    const { record, matchedOn } = found;
    // Only claim a Baseline status the API actually gave us.
    const baselineStatus = record.baseline.status;
    const result = {
      featureId: record.id,
      name: record.name,
      status: baselineStatus || 'unknown',
      statusLabel: baselineLabel(baselineStatus),
      matchedOn,
      scope: 'group',
      lowDate: record.baseline.lowDate,
      highDate: record.baseline.highDate,
      browserSupport: { ...record.browserSupport },
      url: `https://webstatus.dev/features/${record.id}`,
    };

    logger.debug(`[Baseline] Matched "${feature.name}" -> "${result.name}" via ${result.matchedOn}: ${result.statusLabel} (${result.url})`);
    return result;
  } catch (err) {
    logger.debug(`[Baseline] Query error: ${err.message}`);
    return null;
  }
}
