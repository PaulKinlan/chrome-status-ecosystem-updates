/**
 * The shape of the published JSON report (`reports/latest.json`, `reports/weekly/*.json`).
 *
 * Version 1 (no `schemaVersion` field) wrote every article record out in full each time a list mentioned
 * it, and one article is mentioned by several lists: `ecosystem.articles`, `.blogs`, `.docs`,
 * `.reverseLinks`, `delta.newArticles` and `analysis.groundedSources`. In a typical week that was 6,636
 * references to 2,615 different records, and 80% of an 11 MB file.
 *
 * Version 2 keeps one copy of each record in a top-level `articles` table, and those six lists hold the
 * ids of the records instead:
 *
 *   { schemaVersion: 2, ..., articles: { a1: {...}, a2: {...} },
 *     features: [{ ecosystem: { articles: ['a1', 'a2'], blogs: ['a2'], ... }, ... }] }
 *
 * Nothing else changes shape. The program itself always works with the plain, version 1 shape in memory
 * (the Markdown, HTML and RSS writers read it); the two functions below convert at the point where a
 * report is written or read back, and `denormaliseReport(normaliseReport(r))` is `r`.
 */

export const SCHEMA_VERSION = 2;

/**
 * The lists of a feature that hold article records, as [the object they are in, their name there].
 *
 * This is the file format: the writer replaces records by ids in exactly these lists and the reader puts them back in
 * exactly these. Adding or removing one makes every file already published unreadable unless SCHEMA_VERSION is raised
 * and the old lists are still read for the old versions.
 */
export const ARTICLE_LISTS = [
  ['ecosystem', 'articles'],
  ['ecosystem', 'blogs'],
  ['ecosystem', 'docs'],
  ['ecosystem', 'reverseLinks'],
  ['delta', 'newArticles'],
  ['analysis', 'groundedSources'],
];

const isRecord = value => value !== null && typeof value === 'object' && !Array.isArray(value);

/**
 * The report as it is published: every article record once, in `articles`, and the lists that held
 * copies of them holding ids. Records are shared when they are identical, never merely similar, so
 * nothing is lost: two features that cite one page with different relevance verdicts keep two records.
 *
 * The ids (`a1`, `a2`, ...) are handed out in the order the records are met and mean nothing outside
 * the file. The report passed in is not changed.
 *
 * @param {{features: object[]}} report a report in the shape the program works with
 * @returns {object} the same report at `schemaVersion` 2
 */
export function normaliseReport(report) {
  const idByRecord = new Map();
  const articles = {};

  const idOf = value => {
    // JSON has no undefined: an array holds null in its place, so that is what is kept.
    const record = value === undefined ? null : value;
    const key = JSON.stringify(record);
    let id = idByRecord.get(key);
    if (id === undefined) {
      id = `a${idByRecord.size + 1}`;
      idByRecord.set(key, id);
      articles[id] = record;
    }
    return id;
  };

  const features = report.features.map(item => {
    const published = { ...item };
    for (const [section, field] of ARTICLE_LISTS) {
      const list = item[section]?.[field];
      if (Array.isArray(list)) published[section] = { ...published[section], [field]: list.map(idOf) };
    }
    return published;
  });

  // A report that already carries a version or a table (one read back, say) gets this one's, not its own.
  const { features: _inMemory, schemaVersion: _version, articles: _table, ...rest } = report;
  return { schemaVersion: SCHEMA_VERSION, ...rest, articles, features };
}

/**
 * A report as the program works with it: the lists that hold article ids hold the records.
 *
 * A report with no `schemaVersion` (everything published before version 2) already is that, and is
 * returned as it is. A version this program does not know, or a version 2 file whose ids the table
 * cannot answer, is an error: reading it as if it were complete would quietly drop what it cites.
 *
 * @param {object} report parsed JSON of a published report
 * @returns {object} the report with the records in place, and without `schemaVersion` and `articles` (a report that
 *   has no version, or says 1, comes back as it is, `schemaVersion` and all)
 */
export function denormaliseReport(report) {
  const version = report.schemaVersion ?? 1;
  if (version === 1) return report;
  if (version !== SCHEMA_VERSION) throw new Error(`unsupported report schemaVersion ${JSON.stringify(report.schemaVersion)}`);

  const table = report.articles;
  if (!isRecord(table)) throw new Error('a schemaVersion 2 report has no "articles" table');

  const recordOf = id => {
    if (!Object.hasOwn(table, id)) throw new Error(`the report cites article ${JSON.stringify(id)}, which its "articles" table does not hold`);
    return table[id];
  };

  const { schemaVersion: _version, articles: _table, ...rest } = report;
  // Whatever else `features` is, the caller's own validation of a report has to see it as it was.
  if (!Array.isArray(rest.features)) return rest;

  return {
    ...rest,
    features: rest.features.map(item => {
      const inMemory = { ...item };
      for (const [section, field] of ARTICLE_LISTS) {
        const ids = item[section]?.[field];
        if (Array.isArray(ids)) inMemory[section] = { ...inMemory[section], [field]: ids.map(recordOf) };
      }
      return inMemory;
    }),
  };
}
