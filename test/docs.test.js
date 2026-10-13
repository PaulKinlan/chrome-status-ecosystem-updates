import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DEFAULT_FEATURE_STATUSES } from '../src/config.js';
import { GUARDRAIL_LIMITS } from '../src/guardrails.js';
import {
  BASELINE_DAYS,
  BASELINE_TOLERANCE_DAYS,
  HIGH_SHARE,
  MIN_CHANGE,
  MIN_FEATURES_FOR_TIERS,
  MODERATE_SHARE,
  POINTS_KEPT,
  footprintLevel,
} from '../src/momentum.js';
import { PROVIDER_HOSTS } from '../src/provider-stats.js';
import { GROUNDING_REDIRECT_HOST } from '../src/search/urls.js';
import { HISTORY_ARCHIVES_KEPT } from '../src/storage/cache.js';
import { FORGET_AFTER_DAYS, RECENT_DAYS, SEEN_LIMIT } from '../src/storage/seen.js';

/**
 * The documentation's claims about defaults, checked against the code.
 *
 * README.md and .env.example both state what an unset variable means. They are
 * hand-written, so they drift: `rollout` was added to the code's idea of "the
 * default statuses" while three places kept listing four. A mismatch here fails
 * the build instead of misleading whoever configures the crawler next.
 */

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf-8');
const readme = read('README.md');
const envExample = read('.env.example');

/** `NAME=value` as written in .env.example (uncommented lines only). */
function envExampleValue(name) {
  const match = new RegExp(`^${name}=(.*)$`, 'm').exec(envExample);
  assert.ok(match, `.env.example does not set ${name}`);
  return match[1].trim();
}

/** The "Default" cell of the configuration table in README.md, without its backticks. */
function readmeDefault(name) {
  const row = readme.split('\n').find(line => line.startsWith(`| \`${name}\` |`));
  assert.ok(row, `README.md has no configuration row for ${name}`);
  const cells = row.split(/ \| /).map(cell => cell.replace(/^\|\s*|\s*\|$/g, '').trim());
  return cells.at(-1).replace(/^`|`$/g, '');
}

test('.env.example and the README both state the status filter the code actually defaults to', () => {
  const expected = DEFAULT_FEATURE_STATUSES.join(',');

  assert.strictEqual(envExampleValue('FEATURE_STATUSES'), expected);
  assert.strictEqual(readmeDefault('FEATURE_STATUSES'), expected);
});

test('the README names every status the filter accepts', () => {
  const row = readme.split('\n').find(line => line.startsWith('| `FEATURE_STATUSES` |'));
  for (const status of [...DEFAULT_FEATURE_STATUSES, 'removed']) {
    assert.ok(row.includes(`\`${status}\``), `the FEATURE_STATUSES row does not mention ${status}`);
  }
});

/** Every .js file under the given directories, as paths relative to the repository root. */
function sourceFiles(...dirs) {
  return dirs.flatMap(dir => fs.readdirSync(path.join(root, dir), { recursive: true })
    .filter(name => name.endsWith('.js'))
    .map(name => path.join(dir, name)));
}

/** The README's "Configuration" section: from its heading to the next horizontal rule. */
function configurationSection() {
  const start = readme.indexOf('## ⚙️ Configuration');
  assert.ok(start >= 0, 'README.md has no Configuration section');
  return readme.slice(start, readme.indexOf('\n---', start));
}

test('every environment variable the code reads is documented in the README and .env.example', () => {
  // Set by the shell, the terminal or GitHub itself, not settings of this tool.
  const ambient = new Set(['FORCE_COLOR', 'NO_COLOR', 'GITHUB_ACTIONS', 'GITHUB_STEP_SUMMARY']);
  const used = new Set();
  for (const file of sourceFiles('src', 'bin')) {
    for (const match of read(file).matchAll(/process\.env\.([A-Z][A-Z0-9_]*)/g)) used.add(match[1]);
  }
  assert.ok(used.has('GEMINI_API_KEY') && used.has('REPORTS_DIR'), 'the scan found the settings it should');

  const section = configurationSection();
  for (const name of [...used].filter(name => !ambient.has(name)).sort()) {
    assert.ok(section.includes(`\`${name}\``), `README.md's Configuration section does not mention ${name}`);
    assert.ok(new RegExp(`\\b${name}\\b`).test(envExample), `.env.example does not mention ${name}`);
  }
});

test('the README and .env.example present TWITTER_BEARER_TOKEN and X_BEARER_TOKEN as one setting', () => {
  // The scan above only needs each name mentioned somewhere; whoever has one of them set needs to be told it is enough.
  const row = configurationSection().split('\n').find(line => line.startsWith('| `TWITTER_BEARER_TOKEN`'));
  assert.ok(row, 'the Configuration table has no row for TWITTER_BEARER_TOKEN');
  assert.ok(row.includes('`X_BEARER_TOKEN`'), `that row must name X_BEARER_TOKEN too: ${row}`);

  const lines = envExample.split('\n');
  const at = lines.findIndex(line => line.startsWith('TWITTER_BEARER_TOKEN='));
  assert.ok(at > 0, '.env.example does not set TWITTER_BEARER_TOKEN');
  assert.ok(
    lines.slice(Math.max(0, at - 4), at).some(line => line.startsWith('#') && line.includes('X_BEARER_TOKEN')),
    'the comment above TWITTER_BEARER_TOKEN in .env.example must name X_BEARER_TOKEN too'
  );
});

test('.env.example and the README give the crawl deadline the default the code has (none) and the range it accepts', () => {
  // The code's default and range are pinned by test/crawl-budget.test.js, which reads src/config.js the way a run does.
  assert.strictEqual(envExampleValue('CRAWL_DEADLINE_MINUTES'), '0', '.env.example must not switch the deadline on');

  const row = readme.split('\n').find(line => line.startsWith('| `CRAWL_DEADLINE_MINUTES` |'));
  assert.ok(row, 'README.md has no configuration row for CRAWL_DEADLINE_MINUTES');
  assert.ok(row.endsWith('| `0` (no deadline) |'), row);
  assert.ok(row.includes('(0–1440)'), row);
});

/**
 * The paths the README's architecture tree lists under `src/` and `bin/`, rebuilt from its
 * indentation: each nesting level is four characters, and a name ending in `/` is a folder.
 */
function treeFiles() {
  const block = /## 🏗️ Project Architecture\s+```\n([\s\S]*?)```/.exec(readme);
  assert.ok(block, 'README.md has no architecture tree');
  const folders = [];
  const files = [];
  for (const line of block[1].split('\n')) {
    const entry = /^((?:│   |    )*)(?:├── |└── )(\S+)/.exec(line);
    if (!entry) continue;
    const depth = entry[1].length / 4;
    folders.length = depth;
    if (entry[2].endsWith('/')) folders[depth] = entry[2].slice(0, -1);
    else files.push([...folders, entry[2]].join('/'));
  }
  return files;
}

test('the README architecture tree lists exactly the files under src/ and bin/', () => {
  const listed = treeFiles().filter(file => file.startsWith('src/') || file.startsWith('bin/')).sort();
  const actual = sourceFiles('src', 'bin').map(file => file.split(path.sep).join('/')).sort();

  assert.ok(listed.length > 20, 'the tree parser found the files');
  assert.deepStrictEqual(listed, actual);
});

test('the README says how many history archives are kept, as many as the code keeps', () => {
  // Said three times: where the output changes are listed, beside the folder in the architecture tree, and where
  // the growth of the history is described.
  const said = [...readme.matchAll(/(?:newest|of the) (\d+) (?:archives|weekly copies)/gi)].map(match => Number(match[1]));

  assert.ok(said.length >= 3, `the README names the number of archives in ${said.length} place(s)`);
  assert.deepStrictEqual([...new Set(said)], [HISTORY_ARCHIVES_KEPT]);
});

/** A bullet of the README, from its opening words to the end of its line. */
function bullet(opening) {
  const line = readme.split('\n').find(candidate => candidate.startsWith(opening));
  assert.ok(line, `the README has no bullet that starts with ${opening}`);
  return line;
}

/** The lowest footprint at each level of the absolute scale, found by asking the code rather than reading it. */
function footprintThresholds() {
  const lowest = level => [...Array(1000).keys()].find(score => footprintLevel(score) === level);
  return { High: lowest('High'), Moderate: lowest('Moderate'), Emerging: lowest('Emerging') };
}

test('the README states the momentum numbers the code uses', () => {
  const momentum = bullet('- **Momentum** (');
  const warmUp = bullet('- **Momentum before there are numbers to compare.**');
  const noisy = bullet('- **Momentum is a relative, noisy indicator.**');
  const high = Math.round(HIGH_SHARE * 100);
  const moderate = Math.round((MODERATE_SHARE - HIGH_SHARE) * 100);

  assert.deepStrictEqual([high, moderate], [15, 35], 'the shares this test expects to find in the README');
  assert.ok(momentum.includes(`nearest to ${BASELINE_DAYS} days old, no younger than ${BASELINE_DAYS - BASELINE_TOLERANCE_DAYS} and no older than ${BASELINE_DAYS + BASELINE_TOLERANCE_DAYS} days`), 'the window of the baseline');
  assert.ok(momentum.includes(`one entry per week, the newest ${POINTS_KEPT};`), 'how many weekly numbers are kept');
  assert.ok(momentum.includes(`the top ${high}% of the features are *High*, the next ${moderate}% *Moderate*`), 'the shares of the tiers');
  assert.ok(momentum.includes(`growth of less than ${MIN_CHANGE} points`), 'the smallest growth that can be High or Moderate');
  assert.ok(noisy.includes(`${high}% of the features can be *High* and ${moderate}% *Moderate*`), 'the shares, said again as a limit');
  assert.ok(noisy.includes(`the ${MIN_CHANGE} points a tier needs`), 'the smallest change, said again');

  const { High, Moderate, Emerging } = footprintThresholds();
  assert.ok(warmUp.includes(`when at least ${MIN_FEATURES_FOR_TIERS} features, and at least half of the features in the report,`), 'how many features need a baseline');
  assert.ok(warmUp.includes(`A run of fewer than ${MIN_FEATURES_FOR_TIERS} features is too small to rank`), 'how few features are too few');
  assert.ok(warmUp.includes(`(${High} or more is *High*, ${Moderate} *Moderate*, ${Emerging} *Emerging*)`), 'the absolute scale');
});

test('the README states how long a feature remembers a page and what makes it new', () => {
  const recent = bullet('- **New this week.**');
  const grows = bullet('- **The history grows.**');

  assert.strictEqual(FORGET_AFTER_DAYS, 365, 'the README says a year');
  for (const text of [recent, grows]) {
    assert.ok(text.includes(`at most ${SEEN_LIMIT} pages per feature, and a page that has not turned up for a year is forgotten`), 'how much is remembered, and for how long');
  }
  assert.ok(recent.includes(`published in the last ${RECENT_DAYS} days or does not say when`), 'what makes a page new');
  assert.ok(readme.includes(`published in the last ${RECENT_DAYS} days or do not say when`), 'what the first run after upgrading announces');
});

/** The cells of a row of the README's guardrail table, found by the words in bold that open it. */
function guardrailRow(name) {
  const row = readme.split('\n').find(line => line.startsWith(`| **${name}** |`));
  assert.ok(row, `the README's guardrail table has no row for ${name}`);
  const [, warns, judged] = row.split(' | ').map(cell => cell.replace(/^\|\s*|\s*\|$/g, '').trim());
  return { warns, judged };
}

test('the README states the limits of the report guardrails as the code applies them', () => {
  const limits = GUARDRAIL_LIMITS;
  const percent = share => `${Math.round(share * 100)} %`;
  const redirects = guardrailRow('Gemini redirect links');
  const momentum = guardrailRow('High momentum');
  const old = guardrailRow('Old *new* articles');
  const provider = guardrailRow('A provider refusing requests');
  const size = guardrailRow('Size of the JSON report');

  assert.ok(redirects.warns.startsWith(`more than ${limits.groundingRedirects} different addresses on \`${GROUNDING_REDIRECT_HOST}\``), redirects.warns);
  assert.strictEqual(redirects.judged, 'every feature');
  assert.ok(momentum.warns.startsWith(`more than ${percent(limits.highMomentumShare)} of the features are *High*`), momentum.warns);
  assert.strictEqual(momentum.judged, `at least ${limits.minFeaturesForMomentum} features`);
  assert.ok(old.warns.startsWith(`more than ${percent(limits.staleNewShare)} of the *new* articles that say when they were published`), old.warns);
  assert.ok(old.warns.endsWith(`published more than ${RECENT_DAYS} days ago`), old.warns);
  assert.strictEqual(old.judged, `at least ${limits.minDatedNewArticles} such articles`);
  assert.ok(provider.warns.startsWith(`more than ${percent(limits.providerClientErrorShare)} of what the X, Brave Search, Google Custom Search or GitHub API answered`), provider.warns);
  assert.ok(provider.warns.endsWith('any 4xx except 404 and 410'), provider.warns);
  assert.strictEqual(provider.judged, `at least ${limits.minProviderResponses} answers from that provider`);
  assert.ok(size.warns.startsWith(`more than ${limits.latestJsonBytes / 1_000_000} MB (${limits.latestJsonBytes.toLocaleString('en-US')} bytes)`), size.warns);

  const counted = bullet('- **Provider answers are counted where they arrive.**');
  assert.ok(counted.includes(`Below ${limits.minProviderResponses} answers from a provider the counts are recorded and not judged.`), 'the minimum, said again');
});

test('the README lists the hosts whose answers are counted as a provider', () => {
  const counted = bullet('- **Provider answers are counted where they arrive.**');
  const named = [...counted.matchAll(/`([a-z0-9.-]+\.[a-z]+)`/g)].map(match => match[1]);

  assert.deepStrictEqual(named.sort(), [...PROVIDER_HOSTS].sort());
});

test('the README works out the size of the largest report the workflow can make from the cap the workflow sets', () => {
  const cap = Number(/^\s*SCHEDULED_MAX_FEATURES:\s*'?(\d+)'?\s*$/m.exec(read('.github/workflows/weekly-report.yml'))?.[1]);
  const sizes = bullet('- **The size is that of the file as written.**');
  // 87 features were 4.3 MB as version 2 (the checked-in 2026-W41 report): the same size for each feature, as many as the cap.
  const largest = Math.round((4.3 / 87) * cap * 10) / 10;

  assert.ok(cap > 87, 'the cap the workflow sets');
  assert.ok(sizes.includes(`(\`SCHEDULED_MAX_FEATURES\`, ${cap} features) would take about ${largest} MB at the same size per feature`), sizes);
  assert.ok(GUARDRAIL_LIMITS.latestJsonBytes / 1_000_000 / largest > 1.5, 'the limit is well above what the workflow can make, as the README says');
  assert.ok(sizes.includes('about twice the largest report'), sizes);
});

test('the docs-sync helpers read the files they are meant to (a broken parser must not pass silently)', () => {
  assert.strictEqual(envExampleValue('TARGET_MILESTONES'), 'last-5');
  assert.strictEqual(readmeDefault('TARGET_MILESTONES'), 'last-5');
  assert.throws(() => envExampleValue('NO_SUCH_SETTING_EVER'), /does not set/);
  assert.throws(() => readmeDefault('NO_SUCH_SETTING_EVER'), /no configuration row/);
});
