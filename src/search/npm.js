import { fetchNpmPackageDetails } from './content-fetcher.js';

/**
 * NPM Registry search client to detect community polyfills, packages, and typings
 */
export async function searchNpmEcosystem(feature) {
  const results = [];
  const searchQueries = [
    feature.name.toLowerCase().replace(/^(css|web|api)\s+/i, '').trim(),
    feature.name,
  ];

  const seenPackages = new Set();

  for (const q of searchQueries) {
    if (!q || q.length < 3) continue;
    try {
      const url = `https://registry.npmjs.org/-/v1/search?text=${encodeURIComponent(q)}&size=5`;
      const res = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'chrome-status-ecosystem-tracker/1.0',
        },
      });

      if (!res.ok) continue;

      const data = await res.json();
      const objects = data.objects || [];

      for (const obj of objects) {
        const pkg = obj.package;
        if (!pkg || seenPackages.has(pkg.name)) continue;

        // Fetch rich package metadata to inspect README and keywords
        const details = await fetchNpmPackageDetails(pkg.name);
        const readme = details?.readmeSnippet || '';
        const desc = pkg.description || '';
        const fullDesc = `${desc} ${readme}`.toLowerCase();

        // Check if package is explicitly a polyfill or shim
        const isPolyfill = pkg.name.includes('polyfill') ||
          fullDesc.includes('polyfill') ||
          fullDesc.includes('shim') ||
          fullDesc.includes('prollyfill');

        seenPackages.add(pkg.name);
        results.push({
          source: 'NPM Registry',
          type: 'package',
          name: pkg.name,
          version: pkg.version,
          description: pkg.description || '',
          url: pkg.links?.npm || `https://www.npmjs.com/package/${pkg.name}`,
          isPolyfill,
          publishedAt: pkg.date,
          readmeSnippet: readme,
          homepage: details?.homepage || null,
          repository: details?.repository || null,
        });
      }
    } catch {
      // Continue to next query
    }
  }

  return results.slice(0, 8);
}
