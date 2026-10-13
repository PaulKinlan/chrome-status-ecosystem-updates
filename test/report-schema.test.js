import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import { ARTICLE_LISTS, SCHEMA_VERSION, denormaliseReport, normaliseReport } from '../src/report-schema.js';

/**
 * The published report keeps one copy of each article record and lists ids where it used to repeat the
 * record. What matters: nothing is lost or merged by mistake, the program's own report is not touched,
 * and a file that cannot be read back completely is an error rather than a smaller report.
 */

const article = (n, extra = {}) => ({ title: `Post ${n}`, url: `https://example.com/${n}`, domain: 'example.com', snippet: `about ${n}`, ...extra });

/** A feature the way the pipeline holds it: the same record object sits in several lists. */
function featureItem(id) {
  const first = article(`${id}-1`, { verifiedBy: 'name match' });
  const second = article(`${id}-2`);
  return {
    feature: { id, name: `Feature ${id}`, slug: `${id}-feature-${id}` },
    ecosystem: {
      articles: [first, second],
      blogs: [first],
      docs: [second],
      reverseLinks: [{ ...first, reverseLinkedTo: 'https://spec.example/' }],
      discussions: [{ title: 'Discussion', url: 'https://news.example/1', points: 3 }],
      wpt: null,
    },
    analysis: { momentumLevel: 'High', groundedSources: [first] },
    delta: { newArticles: [first], newDiscussions: [{ title: 'Discussion' }], newArticlesCount: 1 },
  };
}

const reportOf = (...items) => ({
  weekString: '2026-W41',
  date: '2026-10-08',
  milestones: [153, 154],
  featuresCount: items.length,
  telemetry: { featuresAvailable: items.length },
  features: items,
});

test('the published shape is version 2', () => {
  assert.strictEqual(SCHEMA_VERSION, 2);
  assert.strictEqual(normaliseReport(reportOf(featureItem(1))).schemaVersion, 2);
});

test('the lists that hold article records are the file format: changing them means a new schema version', () => {
  // The writer replaces records by ids in exactly these lists and the reader puts them back in exactly these. A change
  // here makes every file already published unreadable (or a different report), so it goes with a raise of SCHEMA_VERSION
  // and a reader that still knows the lists of the old versions.
  assert.deepStrictEqual(ARTICLE_LISTS, [
    ['ecosystem', 'articles'],
    ['ecosystem', 'blogs'],
    ['ecosystem', 'docs'],
    ['ecosystem', 'reverseLinks'],
    ['delta', 'newArticles'],
    ['analysis', 'groundedSources'],
  ]);
  assert.strictEqual(SCHEMA_VERSION, 2, 'bump together with ARTICLE_LISTS');
});

test('a report that already carries a version or a table is published with this one\'s, not its own', () => {
  const published = normaliseReport({ schemaVersion: 1, articles: { x: 1 }, ...reportOf(featureItem(1)) });

  assert.strictEqual(published.schemaVersion, 2);
  assert.deepStrictEqual(Object.keys(published.articles), ['a1', 'a2', 'a3']);
  assert.ok(!('x' in published.articles));
  assert.deepStrictEqual(Object.keys(published), ['schemaVersion', 'weekString', 'date', 'milestones', 'featuresCount', 'telemetry', 'articles', 'features']);

  const empty = normaliseReport({ schemaVersion: 1, articles: { x: 1 }, features: [] });
  assert.strictEqual(empty.schemaVersion, 2);
  assert.deepStrictEqual(empty.articles, {});
});

test('every article record is published once, and the lists that repeated it hold its id', () => {
  const published = normaliseReport(reportOf(featureItem(1)));
  const { ecosystem, analysis, delta } = published.features[0];

  // first: in articles, blogs, newArticles and groundedSources; second: in articles and docs;
  // the reverse link is a different record, because it says what it cites.
  assert.deepStrictEqual(Object.keys(published.articles), ['a1', 'a2', 'a3']);
  assert.deepStrictEqual(published.articles.a1, article('1-1', { verifiedBy: 'name match' }));
  assert.deepStrictEqual(published.articles.a2, article('1-2'));
  assert.deepStrictEqual(published.articles.a3, article('1-1', { verifiedBy: 'name match', reverseLinkedTo: 'https://spec.example/' }));

  assert.deepStrictEqual(ecosystem.articles, ['a1', 'a2']);
  assert.deepStrictEqual(ecosystem.blogs, ['a1']);
  assert.deepStrictEqual(ecosystem.docs, ['a2']);
  assert.deepStrictEqual(ecosystem.reverseLinks, ['a3']);
  assert.deepStrictEqual(delta.newArticles, ['a1']);
  assert.deepStrictEqual(analysis.groundedSources, ['a1']);
});

test('only the six article lists are replaced; everything else in a feature is published as it was', () => {
  const item = featureItem(1);
  const published = normaliseReport(reportOf(item)).features[0];

  assert.deepStrictEqual(published.feature, item.feature);
  assert.deepStrictEqual(published.ecosystem.discussions, item.ecosystem.discussions);
  assert.strictEqual(published.ecosystem.wpt, null);
  assert.deepStrictEqual(published.delta.newDiscussions, item.delta.newDiscussions);
  assert.strictEqual(published.delta.newArticlesCount, 1);
  assert.strictEqual(published.analysis.momentumLevel, 'High');
});

test('the top level keeps its fields: the version first, the table before the features', () => {
  const published = normaliseReport(reportOf(featureItem(1)));

  assert.deepStrictEqual(Object.keys(published), ['schemaVersion', 'weekString', 'date', 'milestones', 'featuresCount', 'telemetry', 'articles', 'features']);
  assert.strictEqual(published.weekString, '2026-W41');
  assert.deepStrictEqual(published.telemetry, { featuresAvailable: 1 });
});

test('records are shared across features when identical, and only then', () => {
  const shared = article('shared');
  const one = featureItem(1);
  const two = featureItem(2);
  one.ecosystem.articles.push(shared);
  two.ecosystem.articles.push({ ...shared });                        // an identical record
  two.ecosystem.docs.push({ ...shared, verifiedBy: 'a different verdict' }); // the same page, a different record

  const published = normaliseReport(reportOf(one, two));
  const [a, b] = published.features;
  const sharedId = a.ecosystem.articles.at(-1);

  assert.strictEqual(b.ecosystem.articles.at(-1), sharedId, 'an identical record is the same record');
  assert.notStrictEqual(b.ecosystem.docs.at(-1), sharedId, 'a record that differs in any field is its own');
  assert.strictEqual(published.articles[b.ecosystem.docs.at(-1)].verifiedBy, 'a different verdict');
});

test('ids follow the order the records are met in, so the same report always publishes the same file', () => {
  const report = reportOf(featureItem(1), featureItem(2));

  assert.strictEqual(JSON.stringify(normaliseReport(report)), JSON.stringify(normaliseReport(report)));
  assert.strictEqual(normaliseReport(report).features[1].ecosystem.articles[0], 'a4', 'the first feature met a1 to a3');
});

test('what it is given is not changed', () => {
  const report = reportOf(featureItem(1), featureItem(2));
  const before = JSON.stringify(report);

  normaliseReport(report);

  assert.strictEqual(JSON.stringify(report), before);
  assert.ok(Array.isArray(report.features[0].ecosystem.articles) && typeof report.features[0].ecosystem.articles[0] === 'object');
  assert.strictEqual(report.schemaVersion, undefined);
});

test('a list that is missing or not a list is left alone', () => {
  const item = featureItem(1);
  item.ecosystem.blogs = null;
  delete item.ecosystem.docs;
  item.delta.newArticles = 'none';
  item.analysis = {};

  const published = normaliseReport(reportOf(item)).features[0];

  assert.strictEqual(published.ecosystem.blogs, null);
  assert.ok(!('docs' in published.ecosystem));
  assert.strictEqual(published.delta.newArticles, 'none');
  assert.deepStrictEqual(published.analysis, {});
  assert.deepStrictEqual(denormaliseReport(normaliseReport(reportOf(item))), reportOf(item));
});

test('a feature that has none of the sections is published as the empty object it is', () => {
  const published = normaliseReport(reportOf({}, { feature: { id: 5 } }));

  assert.deepStrictEqual(published.features, [{}, { feature: { id: 5 } }]);
  assert.deepStrictEqual(published.articles, {});
});

test('an undefined entry is kept as null, which is what JSON makes of it in an array anyway', () => {
  const item = featureItem(1);
  item.ecosystem.articles.push(undefined);

  const published = normaliseReport(reportOf(item));
  const id = published.features[0].ecosystem.articles.at(-1);

  assert.strictEqual(published.articles[id], null);
  assert.strictEqual(denormaliseReport(JSON.parse(JSON.stringify(published))).features[0].ecosystem.articles.at(-1), null);
});

test('denormalising what was normalised gives the report back', () => {
  const report = reportOf(featureItem(1), featureItem(2), featureItem(3));
  report.features[1].ecosystem.articles.push(report.features[0].ecosystem.articles[0]); // one page cited for two features

  const back = denormaliseReport(JSON.parse(JSON.stringify(normaliseReport(report))));

  assert.deepStrictEqual(back, report);
  assert.ok(!('schemaVersion' in back) && !('articles' in back), 'the report is in the shape the program works with');
});

test('a report from before version 2 already is in the shape the program works with', () => {
  const old = reportOf(featureItem(1));

  assert.strictEqual(denormaliseReport(old), old, 'no copy, no change');
  const explicit = { ...old, schemaVersion: 1 };
  assert.strictEqual(denormaliseReport(explicit), explicit);
});

test('what it is given is not changed either: the parsed file keeps its ids', () => {
  const published = JSON.parse(JSON.stringify(normaliseReport(reportOf(featureItem(1), featureItem(2)))));
  const before = JSON.stringify(published);

  const back = denormaliseReport(published);

  assert.strictEqual(JSON.stringify(published), before);
  assert.notStrictEqual(back.features[0], published.features[0]);
  assert.strictEqual(typeof published.features[0].ecosystem.articles[0], 'string', 'still an id');
});

test('a version this program does not know is refused rather than half read', () => {
  for (const schemaVersion of [3, 0, '1', '2', 1.5, 'two']) {
    assert.throws(() => denormaliseReport({ schemaVersion, features: [] }), /unsupported report schemaVersion/, String(schemaVersion));
  }
});

test('a version 2 report whose table is missing or not a table is refused', () => {
  for (const articles of [undefined, null, [], 'a1', 5]) {
    assert.throws(() => denormaliseReport({ schemaVersion: 2, articles, features: [] }), /no "articles" table/, JSON.stringify(articles));
  }
});

test('an id the table does not hold is an error that names it, whatever the id is', () => {
  const report = (...ids) => ({ schemaVersion: 2, articles: { a1: article(1) }, features: [{ ecosystem: { articles: ids } }] });

  assert.deepStrictEqual(denormaliseReport(report('a1')).features[0].ecosystem.articles, [article(1)]);
  assert.throws(() => denormaliseReport(report('a1', 'a2')), /cites article "a2"/);
  // Names every object has are not entries of the table.
  for (const id of ['constructor', 'toString', '__proto__', 'hasOwnProperty']) {
    assert.throws(() => denormaliseReport(report(id)), /does not hold/, id);
  }
  assert.throws(() => denormaliseReport(report(7)), /cites article 7/);
});

test('a version 2 report whose features are not a list is handed on as it is, for the caller to refuse', () => {
  const report = { schemaVersion: 2, articles: {}, weekString: '2026-W41', features: { 1: {} } };

  assert.deepStrictEqual(denormaliseReport(report), { weekString: '2026-W41', features: { 1: {} } });
  assert.deepStrictEqual(denormaliseReport({ schemaVersion: 2, articles: {} }), {});
});
