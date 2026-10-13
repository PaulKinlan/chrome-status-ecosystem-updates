/**
 * Test support: the web-features mapping files and webstatus.dev, as `installFetchMock` routes.
 *
 * The routes are matched by function on the exact address, because `installFetchMock` matches a
 * plain string as a substring and the group lookup and the name search share a host.
 */

export const MAPPINGS_URL = 'https://raw.githubusercontent.com/web-platform-dx/web-features-mappings/main/mappings';

const FILE_NAMES = {
  chromeStatus: 'chrome-status.json',
  wpt: 'wpt.json',
  positions: 'standards-positions.json',
  usage: 'chrome-use-counters.json',
};

/**
 * Routes for the four mapping files. A file left out (`undefined`) answers 404, as if it were not published.
 *
 * @param {{chromeStatus?: unknown, wpt?: unknown, positions?: unknown, usage?: unknown}} files parsed JSON bodies
 */
export function mappingRoutes(files = {}) {
  return Object.entries(FILE_NAMES).map(([key, file]) => {
    const match = url => url === `${MAPPINGS_URL}/${file}`;
    return files[key] === undefined
      ? { match, status: 404, text: 'not found' }
      : { match, json: files[key] };
  });
}

/** A route for webstatus.dev's answer about one group by id. */
export function webStatusGroupRoute(groupId, body, status = 200) {
  const match = url => url.startsWith(`https://api.webstatus.dev/v1/features/${groupId}?`);
  return status === 200 ? { match, json: body } : { match, status, text: 'error' };
}

/** A route for webstatus.dev's search by name. */
export function webStatusSearchRoute(items) {
  return { match: url => url.startsWith('https://api.webstatus.dev/v1/features?q='), json: { data: items } };
}

/** What api.webstatus.dev/v1/features/anchor-positioning?wpt_metric_view=test_counts answered (a live answer, trimmed of nothing). */
export const ANCHOR_POSITIONING = Object.freeze({
  baseline: { status: 'limited' },
  browser_implementations: {
    safari: { date: '2026-09-14', status: 'available', version: '27' },
    safari_ios: { date: '2026-09-14', status: 'available', version: '27' },
  },
  developer_signals: { link: 'https://github.com/web-platform-dx/developer-signals/issues/245', upvotes: 276 },
  feature_id: 'anchor-positioning',
  name: 'Anchor positioning',
  spec: { links: [{ link: 'https://drafts.csswg.org/css-anchor-position-1/#anchoring' }] },
  system_managed_saved_search_id: '7abeb45f-b014-4c13-a9ab-a8686ed68a93',
  usage: { chrome: { daily: 0.07350022 } },
  vendor_positions: [
    { position: 'positive', url: 'https://github.com/mozilla/standards-positions/issues/794', vendor: 'mozilla' },
    { position: 'support', url: 'https://github.com/WebKit/standards-positions/issues/167', vendor: 'apple' },
  ],
  wpt: {
    experimental: {
      chrome: { score: 0.96812749 },
      chrome_android: { score: 0.665338645 },
      edge: { score: 0.96812749 },
      firefox: { score: 0.85059761 },
      firefox_android: { score: 0.846975089 },
      safari: { score: 0.94011976 },
    },
    stable: {
      chrome: { score: 0.96812749 },
      chrome_android: { score: 0.680080483 },
      edge: { score: 0.948207171 },
      firefox: { score: 0.842629482 },
      firefox_android: { score: 0.818505338 },
      safari: { score: 0.936127745 },
    },
  },
});

/** A small mapping in the shape web-features-mappings publishes: three groups, one of them shared by three ChromeStatus features. */
export const SAMPLE_MAPPING = Object.freeze({
  chromeStatus: {
    'anchor-positioning': [{ id: 5124767085953024, name: 'CSS anchor positioning' }],
    'webtransport': [
      { id: 5000000000000001, name: 'WebTransport' },
      { id: 5000000000000002, name: 'WebTransportReceiveStream' },
      { id: 5000000000000003, name: 'WebTransport datagrams' },
    ],
    'no-tests-here': [{ id: 5000000000000009, name: 'Untested thing' }],
  },
  wpt: {
    'anchor-positioning': { url: 'https://wpt.fyi/results?q=feature:anchor-positioning' },
    'webtransport': { url: 'https://wpt.fyi/results?q=feature:webtransport' },
  },
  positions: {
    'anchor-positioning': [
      { vendor: 'mozilla', url: 'https://github.com/mozilla/standards-positions/issues/794', position: 'positive', concerns: [] },
      { vendor: 'apple', url: 'https://github.com/WebKit/standards-positions/issues/167', position: 'support', concerns: [] },
    ],
    'webtransport': [
      { vendor: 'mozilla', url: 'https://github.com/mozilla/standards-positions/issues/1', position: '', concerns: ['security', 'API design'] },
    ],
  },
  usage: {
    'anchor-positioning': { percentageOfPageLoad: 0.07350022, url: 'https://chromestatus.com/metrics/webfeature/timeline/popularity/4321' },
  },
});
