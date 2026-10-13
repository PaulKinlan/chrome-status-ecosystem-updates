import { fetchJson } from '../http.js';
import { logger } from '../logger.js';
import { isOfficialPositionIssue } from './standards.js';
import { recordFeatureMapping, recordMappings } from '../web-features-stats.js';

/**
 * Which web-features group a ChromeStatus feature belongs to.
 *
 * web-platform-dx/web-features-mappings is the maintained join between the
 * identifiers other projects use and the web-features ids that Baseline,
 * webstatus.dev and wpt.fyi are organised by. Matching a ChromeStatus feature
 * to one of those by its *name* found 7 of 87 features; the ChromeStatus id
 * found 49.
 *
 * Everything this module returns describes the GROUP, not the ChromeStatus
 * feature. One group usually collects several features (the largest had 67; a
 * sub-feature such as WebTransportReceiveStream maps to `webtransport`), so a
 * pass rate or a usage figure here is a property of the whole group and is
 * labelled that way (`scope: 'group'`, `groupSize`) wherever it is shown.
 *
 * The mapping files are third-party data fetched from a fixed host and are
 * validated before use: ids and words are matched against strict patterns,
 * URLs against the exact shape they are published in, and numbers against their
 * range. Anything that does not fit is skipped, never repaired.
 */

const MAPPINGS_URL = 'https://raw.githubusercontent.com/web-platform-dx/web-features-mappings/main/mappings';

/**
 * The files joined on, with the most each may be. `chromeStatus` (about 2 MB)
 * carries the join itself; without it nothing is mapped. The others add data for
 * the groups it names and may each be missing without harm.
 */
const FILES = Object.freeze({
  chromeStatus: { file: 'chrome-status.json', maxBytes: 16 * 1024 * 1024, timeoutMs: 30_000 },
  wpt: { file: 'wpt.json', maxBytes: 4 * 1024 * 1024, timeoutMs: 15_000 },
  positions: { file: 'standards-positions.json', maxBytes: 4 * 1024 * 1024, timeoutMs: 15_000 },
  usage: { file: 'chrome-use-counters.json', maxBytes: 4 * 1024 * 1024, timeoutMs: 15_000 },
});

/** The shape of a web-features id (`anchor-positioning`, `a`, `webtransport`). */
export const WEB_FEATURE_ID = /^[a-z0-9][a-z0-9-]{0,99}$/;

/** Mozilla's and Apple's positions are filed in these repositories, under these names (see standards.js). A Map, so no vendor called "constructor" finds one of Object's properties. */
const POSITION_VENDORS = new Map([['mozilla', 'Mozilla'], ['apple', 'WebKit']]);

const MAX_POSITIONS_PER_GROUP = 4;
const MAX_CONCERNS = 8;

/** How a position or a concern may be written: words, spaces and hyphens ("API design", "use cases"). */
const PLAIN_WORDS = /^[A-Za-z0-9][A-Za-z0-9 -]{0,39}$/;

const USAGE_URL = /^https:\/\/chromestatus\.com\/metrics\/[a-z]+\/timeline\/popularity\/\d{1,10}$/;

function isRecord(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

/** The address of a web-features group's results on wpt.fyi: the form the mapping publishes. */
export function wptResultsUrl(groupId) {
  return `https://wpt.fyi/results?q=feature:${groupId}`;
}

/** A ChromeStatus id as the key the mapping is joined on, or null when it cannot be one. */
export function chromeStatusKey(id) {
  if (typeof id === 'number') return Number.isSafeInteger(id) && id > 0 ? String(id) : null;
  if (typeof id === 'string' && /^[1-9]\d{0,19}$/.test(id)) return id;
  return null;
}

/** The ChromeStatus ids the mapping lists, each with the group it belongs to, and how many ids each group has. */
function indexChromeStatus(raw) {
  const idToGroup = new Map();
  const groupSize = new Map();
  if (!isRecord(raw)) return { idToGroup, groupSize };

  for (const [groupId, entries] of Object.entries(raw)) {
    if (!WEB_FEATURE_ID.test(groupId) || !Array.isArray(entries)) continue;
    let size = 0;
    for (const entry of entries) {
      const key = chromeStatusKey(entry?.id);
      // A ChromeStatus feature is in one group. Were two to claim it, the first stays, so the answer does not flip between runs.
      if (!key || idToGroup.has(key)) continue;
      idToGroup.set(key, groupId);
      size += 1;
    }
    if (size > 0) groupSize.set(groupId, size);
  }
  return { idToGroup, groupSize };
}

/**
 * The groups that have tests on wpt.fyi.
 *
 * Unlike the join, this file and the two below are not checked for well-formed group ids: a group is only
 * ever looked up by an id the join gave, and those were checked, so an odd key here is never asked for.
 */
function indexWpt(raw) {
  const groups = new Set();
  if (!isRecord(raw)) return groups;
  for (const [groupId, entry] of Object.entries(raw)) {
    if (isRecord(entry)) groups.add(groupId);
  }
  return groups;
}

function plainWords(value) {
  if (typeof value !== 'string') return null;
  const text = value.trim().replace(/\s+/g, ' ');
  return PLAIN_WORDS.test(text) ? text : null;
}

/** The vendors' stated positions on each group, as `{ vendor, position, concerns, url }`; `position` is null while the issue has no decision. */
function indexPositions(raw) {
  const byGroup = new Map();
  if (!isRecord(raw)) return byGroup;

  for (const [groupId, entries] of Object.entries(raw)) {
    if (!Array.isArray(entries)) continue;
    const positions = [];
    for (const entry of entries) {
      const vendor = POSITION_VENDORS.get(entry?.vendor);
      // Only the vendors' own position repositories count (an exact host and repository), as for the issues ChromeStatus links.
      if (!vendor || !isOfficialPositionIssue(entry.url, vendor)) continue;
      const position = plainWords(entry.position);
      const concerns = Array.isArray(entry.concerns)
        ? entry.concerns.map(plainWords).filter(Boolean).slice(0, MAX_CONCERNS)
        : [];
      positions.push({ vendor, position: position ? position.toLowerCase() : null, concerns, url: entry.url });
      if (positions.length >= MAX_POSITIONS_PER_GROUP) break;
    }
    byGroup.set(groupId, positions);
  }
  return byGroup;
}

/** Chrome's use counters: the share of page loads that use each group, as `{ percentageOfPageLoad, url }`. */
function indexUsage(raw) {
  const byGroup = new Map();
  if (!isRecord(raw)) return byGroup;

  for (const [groupId, entry] of Object.entries(raw)) {
    if (!isRecord(entry)) continue;
    const share = entry.percentageOfPageLoad;
    // Written so that NaN and the infinities fail it too.
    if (typeof share !== 'number' || !(share >= 0 && share <= 100)) continue;
    byGroup.set(groupId, {
      percentageOfPageLoad: Math.round(share * 1e6) / 1e6,
      url: typeof entry.url === 'string' && USAGE_URL.test(entry.url) ? entry.url : null,
    });
  }
  return byGroup;
}

/** One load per run, shared by every feature that asks while it is under way and after. */
let loading = null;

async function readMappingFiles() {
  const names = Object.keys(FILES);
  const downloads = await Promise.all(names.map(name => {
    const { file, maxBytes, timeoutMs } = FILES[name];
    return fetchJson(`${MAPPINGS_URL}/${file}`, {
      label: 'web-features',
      timeoutMs,
      maxBytes,
      headers: { 'Accept': 'application/json', 'User-Agent': 'chrome-status-ecosystem-tracker/1.0' },
    });
  }));
  return Object.fromEntries(names.map((name, i) => [name, downloads[i]]));
}

async function buildIndex() {
  const raw = await readMappingFiles();
  const { idToGroup, groupSize } = indexChromeStatus(raw.chromeStatus);

  // Without the join nothing can be mapped, whatever else arrived.
  if (idToGroup.size === 0) {
    recordMappings({ available: false });
    logger.debug('[web-features] chrome-status.json could not be used; no feature is mapped.');
    return { available: false };
  }

  const missing = ['wpt', 'positions', 'usage'].filter(name => !isRecord(raw[name])).map(name => FILES[name].file);
  recordMappings({ available: true, chromeStatusIds: idToGroup.size, groups: groupSize.size, missing });
  logger.debug(`[web-features] ${idToGroup.size} ChromeStatus id(s) in ${groupSize.size} group(s)${missing.length ? `; not loaded: ${missing.join(', ')}` : ''}`);

  return {
    available: true,
    idToGroup,
    groupSize,
    wpt: indexWpt(raw.wpt),
    positions: indexPositions(raw.positions),
    usage: indexUsage(raw.usage),
  };
}

/**
 * The web-features group `feature` belongs to, with what the mapping files say about it, or null when the
 * feature is not in the mapping (or the mapping could not be loaded). It never rejects: the files are read
 * with `fetchJson`, which answers null for any failure, and everything in them is checked before use.
 *
 * @returns {Promise<null | {
 *   id: string,
 *   scope: 'group',
 *   groupSize: number,
 *   url: string,
 *   wptUrl: string | null,
 *   positions: Array<{vendor: string, position: string | null, concerns: string[], url: string}>,
 *   usage: {percentageOfPageLoad: number, url: string | null} | null,
 * }>}
 */
export async function webFeatureFor(feature) {
  if (!loading) loading = buildIndex();
  const index = await loading;
  if (!index.available) return null;

  const key = chromeStatusKey(feature?.id);
  if (!key) return null;

  const groupId = index.idToGroup.get(key);
  recordFeatureMapping(key, !!groupId);
  if (!groupId) return null;

  const usage = index.usage.get(groupId);
  return {
    id: groupId,
    scope: 'group',
    groupSize: index.groupSize.get(groupId),
    url: `https://webstatus.dev/features/${groupId}`,
    wptUrl: index.wpt.has(groupId) ? wptResultsUrl(groupId) : null,
    positions: (index.positions.get(groupId) || []).map(p => ({ ...p, concerns: [...p.concerns] })),
    usage: usage ? { ...usage } : null,
  };
}

/** Forgets the downloaded mapping, so the next lookup downloads it again. Call at the start of a run (and in tests). */
export function resetWebFeatures() {
  loading = null;
}
