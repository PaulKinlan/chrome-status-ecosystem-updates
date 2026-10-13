import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs/promises';
import http from 'node:http';
import os from 'node:os';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { DEFAULT_FEATURE_STATUSES } from '../src/config.js';

/**
 * The command line as the workflow (or a person) meets it: a real child
 * process, a loopback "ChromeStatus" that lists no features, and temporary
 * reports/ and data/ directories.
 *
 * Hermetic by construction. The child gets an explicit minimal environment (no
 * credentials, no inherited GITHUB_* variables, its own working directory) and,
 * with no features to investigate, its only network traffic is the milestone
 * listings it requests from the loopback server. The tests check that list, so a
 * regression that made it reach further would fail instead of quietly using the
 * network or a developer's keys.
 */

const cli = fileURLToPath(new URL('../bin/cli.js', import.meta.url));
const XSSI = ")]}'\n";
const exists = file => fs.access(file).then(() => true, () => false);

/** A ChromeStatus with nothing in it; records what it was asked. */
async function chromeStatusWithoutFeatures(t) {
  const requests = [];
  const server = http.createServer((req, res) => {
    requests.push(req.url);
    res.setHeader('content-type', 'application/json');
    res.end(XSSI + JSON.stringify({ features_by_type: {} }));
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => new Promise(resolve => {
    server.close(resolve);
    server.closeAllConnections?.();
  }));
  return { url: `http://127.0.0.1:${server.address().port}`, requests };
}

/** Starts the CLI and always resolves with its exit status; rejects only if it could not run at all. */
function spawnCli(args, env, cwd) {
  return new Promise((resolve, reject) => {
    execFile(process.execPath, [cli, ...args], { env, cwd, timeout: 30_000, encoding: 'utf-8' }, (error, stdout, stderr) => {
      if (error && typeof error.code !== 'number') reject(new Error(`${error.message}\n${stderr}`));
      else resolve({ code: error ? error.code : 0, stdout, stderr });
    });
  });
}

/**
 * One CLI invocation against a fresh sandbox. `actions` makes it look like a
 * GitHub Actions job (with a step summary file); `env` adds or overrides variables.
 */
async function runCli(t, args, { actions = false, env = {} } = {}) {
  const upstream = await chromeStatusWithoutFeatures(t);
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'cli-test-'));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const dirs = {
    root,
    reports: path.join(root, 'reports'),
    data: path.join(root, 'data'),
    summary: path.join(root, 'step-summary.md'),
  };

  const result = await spawnCli(args, {
    PATH: process.env.PATH,
    HOME: root,
    NO_COLOR: '1',
    CHROMESTATUS_API_URL: upstream.url,
    REPORTS_DIR: dirs.reports,
    DATA_DIR: dirs.data,
    // Offered either way; only used when GITHUB_ACTIONS says this is a runner.
    GITHUB_STEP_SUMMARY: dirs.summary,
    ...(actions && { GITHUB_ACTIONS: 'true' }),
    ...env,
  }, root);
  return { ...result, upstream, dirs };
}

const WINDOW = ['--milestone', '153-154'];

test('--version prints the package version and --help lists the options, without touching the network', async (t) => {
  const { version } = JSON.parse(await fs.readFile(new URL('../package.json', import.meta.url), 'utf-8'));

  const versioned = await runCli(t, ['--version']);
  assert.strictEqual(versioned.code, 0, versioned.stderr);
  assert.strictEqual(versioned.stdout.trim(), version);

  const help = await runCli(t, ['--help']);
  assert.strictEqual(help.code, 0, help.stderr);
  assert.match(help.stdout, /--milestone/);
  assert.match(help.stdout, /--force\s+Publish even if a safety check fails/);
  // The defaults the help prints come from the code, so they cannot drift from it.
  assert.ok(
    help.stdout.includes(`default: ${DEFAULT_FEATURE_STATUSES.join(',')}`),
    `--status must show the default statuses:\n${help.stdout}`
  );
  assert.match(help.stdout, /--limit[^\n]*newest milestones first/);

  assert.deepStrictEqual([...versioned.upstream.requests, ...help.upstream.requests], []);
});

test('a mistyped command or flag exits with status 2 instead of starting a crawl', async (t) => {
  const mistakes = [
    [['runn'], /Unknown command: runn/],
    [['run', '--limt', '5'], /Unknown option '--limt'/],
    [['run', '--limit', 'abc'], /Invalid value for --limit: "abc"/],
    [['inspect'], /Please provide a feature ID/],
  ];
  for (const [args, message] of mistakes) {
    const result = await runCli(t, args);
    assert.strictEqual(result.code, 2, `${args.join(' ')}: ${result.stderr}`);
    assert.match(result.stderr, message, args.join(' '));
    assert.deepStrictEqual(result.upstream.requests, [], `\`${args.join(' ')}\` must not reach ChromeStatus`);
    assert.strictEqual(await exists(result.dirs.reports), false, args.join(' '));
  }
});

test('a refused run exits 1 and says why on stderr, and writes nothing', async (t) => {
  const run = await runCli(t, ['run', ...WINDOW]);

  assert.strictEqual(run.code, 1, run.stderr);
  assert.match(run.stderr, /Fatal error: ChromeStatus returned no features for Chrome 153, 154/);
  assert.match(run.stderr, /Refusing to publish: nothing was written and the published reports are untouched/);
  assert.match(run.stderr, /--force/);
  assert.strictEqual(await exists(run.dirs.reports), false);
  assert.strictEqual(await exists(run.dirs.data), false);
  assert.strictEqual(run.upstream.requests.length, 2, run.upstream.requests.join(' '));
  assert.ok(run.upstream.requests.every(url => /^\/api\/v0\/features\?milestone=15[34]\b/.test(url)), run.upstream.requests.join(' '));
});

test('naming no command at all means `run`', async (t) => {
  const run = await runCli(t, WINDOW);

  assert.strictEqual(run.code, 1, run.stderr);
  assert.match(run.stderr, /ChromeStatus returned no features for Chrome 153, 154/);
});

test('off GitHub Actions a failure prints no workflow command and writes no job summary', async (t) => {
  const run = await runCli(t, ['run', ...WINDOW]);

  assert.strictEqual(run.code, 1);
  assert.ok(!/^::/m.test(run.stdout), run.stdout);
  assert.strictEqual(await exists(run.dirs.summary), false, 'GITHUB_STEP_SUMMARY is only honoured on a runner');
});

test('on GitHub Actions a failure becomes one error annotation and a job-summary section', async (t) => {
  const run = await runCli(t, ['run', ...WINDOW], { actions: true });

  assert.strictEqual(run.code, 1, run.stderr);
  const commands = run.stdout.split('\n').filter(line => line.startsWith('::'));
  assert.strictEqual(commands.length, 1, run.stdout);
  assert.match(commands[0], /^::error title=Crawl failed::ChromeStatus returned no features for Chrome 153, 154/);

  const summary = await fs.readFile(run.dirs.summary, 'utf-8');
  assert.match(summary, /^## ❌ The crawl stopped with an error$/m);
  assert.match(summary, /ChromeStatus returned no features for Chrome 153, 154/);
});

test('--force publishes an empty window anyway, and the report says so', async (t) => {
  const run = await runCli(t, ['run', ...WINDOW, '--force'], { actions: true });

  assert.strictEqual(run.code, 0, run.stderr);
  assert.match(run.stderr, /Publishing anyway because --force was given/);
  assert.match(run.stdout, /^::warning title=Safety check overridden::ChromeStatus returned no features/m);

  const latest = JSON.parse(await fs.readFile(path.join(run.dirs.reports, 'latest.json'), 'utf-8'));
  assert.strictEqual(latest.featuresCount, 0);
  assert.strictEqual(latest.telemetry.qualityOverrides.length, 1);
  assert.match(latest.telemetry.qualityOverrides[0], /no features for Chrome 153, 154/);

  const markdownPath = /Weekly Markdown:\s+(.+)$/m.exec(run.stdout)?.[1];
  assert.ok(markdownPath, run.stdout);
  assert.match(await fs.readFile(markdownPath, 'utf-8'), /^> ⚠️ \*\*Safety check overridden \(--force\):\*\*/m);
  assert.ok(await exists(path.join(run.dirs.data, 'history.json')), 'the history is saved as usual');
  assert.strictEqual(await exists(run.dirs.summary), false, 'a successful run writes no failure section');
  assert.strictEqual(run.upstream.requests.length, 2, 'with nothing to investigate, only the milestone listings are requested');
});

test('FORCE_REPORT forces the same way the flag does, but only for the words that mean yes', async (t) => {
  const exitCodes = {};
  for (const value of ['1', 'true', 'YES', '0', 'false', 'no', '']) {
    exitCodes[JSON.stringify(value)] = (await runCli(t, ['run', ...WINDOW], { env: { FORCE_REPORT: value } })).code;
  }

  assert.deepStrictEqual(exitCodes, { '"1"': 0, '"true"': 0, '"YES"': 0, '"0"': 1, '"false"': 1, '"no"': 1, '""': 1 });
});
