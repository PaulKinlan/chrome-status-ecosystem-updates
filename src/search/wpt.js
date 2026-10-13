import { logger } from '../logger.js';
import { lookupWebStatus } from './webstatus.js';
import { wptResultsUrl } from './web-features.js';

/**
 * Web Platform Tests results for the web-features group a feature belongs to.
 *
 * The pass rates come from webstatus.dev, which aggregates the wpt.fyi runs per
 * browser for each group (`stable` and `experimental` channels); the link is the
 * group's results page on wpt.fyi.
 *
 * This used to search wpt.fyi for test *paths containing a word* taken from the
 * feature's name or spec address and report how many matched. The winning word
 * was often generic (`html`, `deprecate`, `125`), the count ran to 114,452, and
 * it said nothing about whether anything passes. It is gone: a feature that is
 * not in a web-features group has no test results here rather than a made-up
 * number.
 *
 * What is returned describes the whole group (`scope: 'group'`), which can be
 * broader than the one ChromeStatus feature; null when the feature has no group.
 *
 * @param {object} feature
 * @param {object|null} webFeature the group from `webFeatureFor`, if the feature has one
 * @returns {Promise<null | {
 *   source: string, type: string, scope: 'group', webFeatureId: string, url: string,
 *   passRates: null | {stable: Record<string, number> | null, experimental: Record<string, number> | null},
 * }>}
 */
export async function searchWpt(feature, webFeature = null) {
  const found = await lookupWebStatus(feature, webFeature);
  const passRates = found?.record.wpt || null;
  const groupId = webFeature?.id || found?.record.id || null;

  // A group with neither a results page nor any pass rate has nothing to show. (A page or a rate
  // only exists for a feature that has a group, so `groupId` is set whenever `url` is.)
  const url = webFeature?.wptUrl || (passRates ? wptResultsUrl(groupId) : null);
  if (!url) return null;

  logger.debug(`[WPT] "${feature.name}": web-features group "${groupId}"${passRates ? ', pass rates found' : ', no pass rates'}`);
  return {
    source: 'Web Platform Tests',
    type: 'test',
    scope: 'group',
    webFeatureId: groupId,
    url,
    passRates,
  };
}
