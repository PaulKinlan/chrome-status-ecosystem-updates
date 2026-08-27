/**
 * Web Platform Tests (wpt.fyi) client
 */
export async function searchWpt(feature) {
  const query = feature.name
    .toLowerCase()
    .replace(/^(css|web|api)\s+/i, '')
    .replace(/\s+/g, '-');

  const wptUrl = `https://wpt.fyi/results/?q=${encodeURIComponent(query)}`;

  try {
    const apiUrl = `https://wpt.fyi/api/search?q=${encodeURIComponent(query)}`;
    const res = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'chrome-status-ecosystem-tracker/1.0',
      },
    });

    if (!res.ok) {
      return { url: wptUrl, testCount: 0, tests: [] };
    }

    const data = await res.json();
    const results = data.results || [];

    return {
      source: 'Web Platform Tests',
      type: 'test',
      url: wptUrl,
      testCount: results.length,
      sampleTests: results.slice(0, 3).map(r => r.test),
    };
  } catch {
    return {
      source: 'Web Platform Tests',
      type: 'test',
      url: wptUrl,
      testCount: 0,
      sampleTests: [],
    };
  }
}
