import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

/**
 * Invariants of .github/workflows/weekly-report.yml that the application's own
 * guarantees depend on. The workflow cannot be run here, and there is no YAML
 * parser (the project has no dependencies), so these are text-level checks on
 * the parts that have already been got wrong once or that protect a published
 * site: a refused crawl must not look healthy or deploy, the force switch must
 * be opt-in, secrets must stay in the one step that needs them, the job that
 * reads untrusted pages must not be able to write to the repository, and the
 * Node versions in CI must be the ones the code claims to support.
 *
 * What would go wrong silently is checked by running the conditions: the
 * `if:` expressions of the jobs are evaluated for every kind of event and every
 * outcome of the jobs before them (see `plan`), because a `publish` that is
 * skipped by mistake after a good crawl would lose the week without a red job.
 */

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf-8');
const workflow = read('.github/workflows/weekly-report.yml');
const pkg = JSON.parse(read('package.json'));

/** Source text without comments, so prose that mentions `always()` cannot be mistaken for code. */
const code = text => text.split('\n').map(line => line.replace(/(^|\s)#.*$/, '')).join('\n');

/** Splits `text` at every line matching `start`; each block runs to the next such line. */
function blocks(text, start) {
  const out = [];
  for (const line of text.split('\n')) {
    if (start.test(line)) out.push([line]);
    else out.at(-1)?.push(line);
  }
  return out.map(lines => ({ head: lines[0], text: lines.join('\n') }));
}

const jobs = Object.fromEntries(
  blocks(workflow.slice(workflow.indexOf('\njobs:')), /^ {2}[A-Za-z][\w-]*:\s*$/)
    .map(job => [job.head.trim().slice(0, -1), job.text])
);
const stepsOf = job => blocks(job, /^ {6}- /).map(s => ({ name: /^\s*- name:\s*(.+?)\s*$/.exec(s.head)?.[1], text: s.text }));
function step(jobId, name) {
  const found = stepsOf(jobs[jobId]).find(s => s.name === name);
  assert.ok(found, `job "${jobId}" has no step named "${name}"`);
  return found;
}

/** A setting of a job (`needs`, `if`, ...) as written, or null. */
const jobField = (jobId, name) => new RegExp(`^ {4}${name}:[ \\t]*(.*)$`, 'm').exec(code(jobs[jobId]))?.[1].trim() || null;
/** The `if:` of a step as written, or null. */
const stepCondition = text => /^ {8}if:[ \t]*(.*)$/m.exec(code(text))?.[1].trim() || null;
const needsOf = jobId => (jobField(jobId, 'needs') ?? '').replace(/[[\]]/g, '').split(',').map(name => name.trim()).filter(Boolean);
/** The lines of a `key: |` block in the `with:` of a step. */
const withLines = (text, key) => {
  const block = new RegExp(`^ {10}${key}:[ \\t]*\\|[ \\t]*\\n((?: {12}\\S.*\\n?)+)`, 'm').exec(code(text))?.[1];
  return block ? block.split('\n').map(line => line.trim()).filter(Boolean) : null;
};
const withValue = (text, key) => new RegExp(`^ {10}${key}:[ \\t]*(\\S.*?)[ \\t]*$`, 'm').exec(code(text))?.[1] ?? null;

const CRAWL = 'Run Ecosystem Intelligence Crawler';
const HAND_OVER = 'Hand over reports and data';
const TAKE = "Take the crawl's reports and data";
const REPLACE = "Replace reports and data with the crawl's";
const SUMMARY = 'Publish to Job Summary';
const COMMIT = 'Commit and push reports & data history';

// --- GitHub's expressions, as far as the workflow's conditions use them -----------------------------------------

const truthy = value => !(value === null || value === undefined || value === false || value === 0 || value === '' || Number.isNaN(value));

/**
 * Evaluates a condition the way GitHub does, for the little of its expression language the workflow uses: `&&`, `||`,
 * `!`, `==`, `!=`, parentheses, quoted strings, the `github`, `inputs` and `needs` contexts and the status functions.
 * Anything else is refused rather than guessed at, so a condition written in a way this does not understand fails the
 * tests instead of passing them.
 *
 * @param {string} condition as written in the workflow, with or without `${{ }}`
 * @param {{github: object, inputs: object, needs: Record<string, {result: string}>, cancelled: boolean}} context
 */
function evaluate(condition, context) {
  const source = condition.trim().replace(/^\$\{\{\s*([\s\S]*?)\s*\}\}$/, '$1');
  const tokens = source.match(/'[^']*'|&&|\|\||==|!=|!|\(|\)|[A-Za-z_][\w.-]*\(\)|[A-Za-z_][\w.-]*/g) ?? [];
  assert.strictEqual(tokens.join(''), source.replace(/\s+/g, ''), `not an expression this evaluator understands: ${source}`);

  const results = Object.values(context.needs).map(need => need.result);
  const functions = {
    always: () => true,
    cancelled: () => context.cancelled === true,
    success: () => !context.cancelled && results.every(result => result === 'success'),
    failure: () => results.includes('failure'),
  };
  const lookup = dotted => dotted.split('.').reduce((value, key) => value?.[key], context) ?? null;

  let position = 0;
  const peek = () => tokens[position];
  const next = () => tokens[position++];

  function primary() {
    const token = next();
    assert.ok(token, `the expression ends too soon: ${source}`);
    if (token === '(') {
      const inner = or();
      assert.strictEqual(next(), ')', `a parenthesis is not closed in: ${source}`);
      return inner;
    }
    if (token.startsWith("'")) return token.slice(1, -1);
    if (token.endsWith('()')) {
      const name = token.slice(0, -2);
      assert.ok(Object.hasOwn(functions, name), `unknown function ${token} in: ${source}`);
      return functions[name]();
    }
    return lookup(token);
  }
  function unary() {
    if (peek() !== '!') return primary();
    next();
    return !truthy(unary());
  }
  function equality() {
    let left = unary();
    while (peek() === '==' || peek() === '!=') {
      const operator = next();
      const same = String(left ?? '').toLowerCase() === String(unary() ?? '').toLowerCase();
      left = operator === '==' ? same : !same;
    }
    return left;
  }
  function and() {
    let left = equality();
    while (peek() === '&&') {
      next();
      const right = equality();
      left = truthy(left) ? right : left;
    }
    return left;
  }
  function or() {
    let left = and();
    while (peek() === '||') {
      next();
      const right = and();
      left = truthy(left) ? left : right;
    }
    return left;
  }

  const value = or();
  assert.strictEqual(position, tokens.length, `unread tokens in: ${source}`);
  return value;
}

/** The context GitHub gives a condition: the event, what the jobs it needs ended with, and whether the run was cancelled. */
function contextFor({ event, skipCrawl = false, cancelled = false }, results, needs) {
  return {
    github: { event_name: event },
    inputs: event === 'workflow_dispatch' ? { skip_crawl: skipCrawl } : {},
    needs: Object.fromEntries(needs.map(name => [name, { result: results[name] }])),
    cancelled,
  };
}

/**
 * What the jobs after `test` do for one kind of event, given how the jobs that ran ended (`crawl`, `publish`; both
 * succeed unless said otherwise). A job whose condition names no status function is skipped unless every job it
 * needs succeeded, which GitHub adds as an implicit `success()`.
 */
function plan(scenario) {
  const { test: testResult = 'success', crawl: crawlResult = 'success', publish: publishResult = 'success' } = scenario;
  const results = { test: testResult };
  const endings = { crawl: crawlResult, publish: publishResult, 'deploy-pages': 'success' };
  for (const id of ['crawl', 'publish', 'deploy-pages']) {
    const needs = needsOf(id);
    const condition = jobField(id, 'if');
    const context = contextFor(scenario, results, needs);
    const names = /\b(always|success|failure|cancelled)\(\)/.test(condition ?? '');
    const gated = !names && needs.some(name => results[name] !== 'success');
    const runs = !gated && (condition === null || truthy(evaluate(condition, context)));
    results[id] = runs ? endings[id] : 'skipped';
  }
  return { crawl: results.crawl, publish: results.publish, 'deploy-pages': results['deploy-pages'] };
}

test('the workflow is read the way these tests assume', () => {
  assert.deepStrictEqual(Object.keys(jobs), ['test', 'crawl', 'publish', 'deploy-pages']);
  assert.ok(stepsOf(jobs.crawl).length >= 4, 'the crawl job lost steps, or the step splitter is out of date');
  assert.ok(stepsOf(jobs.publish).length >= 6, 'the publish job lost steps, or the step splitter is out of date');
  assert.ok(step('crawl', CRAWL).text.includes('node bin/cli.js run'));
  assert.deepStrictEqual(needsOf('crawl'), ['test']);
  assert.deepStrictEqual(needsOf('publish'), ['test', 'crawl']);
  assert.deepStrictEqual(needsOf('deploy-pages'), ['publish']);
});

test('the condition evaluator reads GitHub expressions the way these tests depend on', () => {
  const context = {
    github: { event_name: 'push' },
    inputs: {},
    needs: { build: { result: 'skipped' }, lint: { result: 'success' } },
    cancelled: false,
  };
  assert.strictEqual(evaluate("github.event_name == 'push'", context), true);
  assert.strictEqual(evaluate("github.event_name != 'push'", context), false);
  assert.strictEqual(evaluate("${{ github.event_name == 'PUSH' }}", context), true, 'comparisons ignore case');
  assert.strictEqual(evaluate('!inputs.skip_crawl', context), true, 'an input that was not given is falsy');
  assert.strictEqual(evaluate("needs.build.result == 'skipped' && needs.lint.result == 'success'", context), true);
  assert.strictEqual(evaluate("needs.build.result == 'success' || needs.lint.result == 'failure'", context), false);
  assert.strictEqual(evaluate("false || (needs.build.result == 'skipped' && !cancelled())", context), true);
  assert.strictEqual(evaluate("!cancelled() && github.event_name != 'pull_request' && needs.lint.result == 'success'", context), true);
  assert.strictEqual(evaluate('always()', context), true);
  assert.strictEqual(evaluate('success()', context), false, 'a skipped job is not a success');
  assert.strictEqual(evaluate('failure()', context), false);
  assert.strictEqual(evaluate('!cancelled()', { ...context, cancelled: true }), false);
  assert.strictEqual(evaluate('failure()', { ...context, needs: { build: { result: 'failure' } } }), true);
  // `&&` and `||` hand back an operand, as in GitHub; the result is judged by its truth.
  assert.strictEqual(truthy(evaluate("github.event_name == 'push' && inputs.skip_crawl", context)), false);

  // Syntax it does not know is refused instead of guessed at.
  for (const unknown of ["github.event_name === 'push'", 'contains(github.event_name, "p")', "github.event_name == 'push' &&", '(always()', "a == 'b' )", 'hashFiles("x")', 'nonsense()']) {
    assert.throws(() => evaluate(unknown, context), undefined, unknown);
  }
});

test('the job summary never shows a report from a run that did not succeed', () => {
  // When the crawl fails or refuses to publish nothing is written, so reports/summary.md is last
  // week's snapshot: shown on the failed run's page it would make the failure look healthy.
  const summary = code(step('publish', SUMMARY).text);

  assert.match(summary, /^\s+if:\s*success\(\)/m, 'must run only after the steps before it succeeded');
  assert.ok(!/always\(\)|failure\(\)|cancelled\(\)/.test(summary), summary);
  assert.match(summary, /hashFiles\('reports\/summary\.md'\)\s*!=\s*''/, 'must not fail when there is no snapshot to show');
});

test('the job summary is the Executive Snapshot, never the whole report', () => {
  // A job summary may not exceed 1 MiB; the weekly report is up to a megabyte (reports/README.md is a copy of it).
  const summary = code(step('publish', SUMMARY).text);
  assert.match(summary, /^\s+run:\s*cat reports\/summary\.md >> "\$GITHUB_STEP_SUMMARY"\s*$/m);

  const writers = code(workflow).split('\n').filter(line => line.includes('GITHUB_STEP_SUMMARY'));
  assert.ok(writers.length > 0, 'the workflow no longer writes a job summary at all');
  for (const line of writers) {
    assert.ok(line.includes('reports/summary.md'), `something other than the snapshot goes to the job summary: ${line.trim()}`);
  }
});

test('a run whose crawl failed or refused cannot deploy the site', () => {
  const deploy = code(jobs['deploy-pages']);
  assert.match(deploy, /^\s+needs:\s*publish\s*$/m);
  assert.ok(!/always\(\)|failure\(\)|cancelled\(\)/.test(deploy), 'deploying after a failed job would defeat the safety checks');

  // `continue-on-error` would turn a refused crawl into a green job and let the publication follow it.
  assert.ok(!/continue-on-error/.test(code(workflow)));
});

test('nothing is crawled or published unless the tests pass', () => {
  assert.match(code(jobs.crawl), /^\s+needs:\s*test\s*$/m);
  assert.deepStrictEqual(needsOf('publish'), ['test', 'crawl']);
  assert.match(jobField('publish', 'if'), /needs\.test\.result\s*==\s*'success'/);
  assert.match(code(step('test', 'Run tests').text), /^\s+run:\s*npm test\s*$/m);
});

test('the Node versions agree: CI matrix, .nvmrc and package.json engines', () => {
  const required = Number(/(\d+)/.exec(pkg.engines.node)[1]);

  const matrix = /node-version:\s*\[([^\]]*)\]/.exec(code(workflow))[1].split(',').map(v => Number(v.replace(/['"\s]/g, '')));
  assert.ok(matrix.length >= 1 && matrix.every(Number.isInteger), `unreadable matrix: ${matrix}`);
  assert.strictEqual(Math.min(...matrix), required, 'CI must test the oldest Node version package.json promises to support');

  const nvmrc = Number(/(\d+)/.exec(read('.nvmrc'))[1]);
  assert.ok(nvmrc >= required, `.nvmrc (${nvmrc}) is older than engines.node (${pkg.engines.node}); the crawl job runs on it`);
  assert.match(code(step('crawl', 'Setup Node.js').text), /node-version-file:\s*'?\.nvmrc'?/);
});

test('--force is only ever on when a person ticked the force input', () => {
  const assignments = code(workflow).match(/^\s*FORCE_REPORT:.*$/gm) ?? [];
  assert.strictEqual(assignments.length, 1, `FORCE_REPORT is set ${assignments.length} times`);
  // Scheduled and pushed runs have no inputs, so the expression is empty for them.
  assert.match(assignments[0], /FORCE_REPORT:\s*\$\{\{\s*inputs\.force\s*&&\s*'1'\s*\|\|\s*''\s*\}\}\s*$/);
  assert.ok(step('crawl', CRAWL).text.includes('FORCE_REPORT:'), 'it must reach the crawl');

  assert.match(
    code(workflow),
    /^ {6}force:\s*\n\s+description:.*\n\s+type:\s*boolean\s*\n\s+required:\s*false\s*\n\s+default:\s*false\s*$/m,
    'the input must be an unticked boolean by default'
  );
});

test('secrets reach the crawl step and nothing else', () => {
  const everywhere = (code(workflow).match(/secrets\./g) ?? []).length;
  assert.ok(everywhere >= 6, 'the crawl step lost its credentials');

  let inCrawl = 0;
  for (const [id, job] of Object.entries(jobs)) {
    for (const s of stepsOf(job)) {
      const count = (code(s.text).match(/secrets\./g) ?? []).length;
      if (id === 'crawl' && s.name === CRAWL) inCrawl = count;
      else assert.strictEqual(count, 0, `step "${s.name}" of job "${id}" must not see secrets`);
    }
  }
  assert.strictEqual(inCrawl, everywhere, 'a secret is referenced outside every step');
});

test('the X token reaches the crawl whichever of its two names the repository secret has', () => {
  // src/config.js reads either variable as the one setting; a secret that is not defined arrives as an empty string.
  const crawl = code(step('crawl', CRAWL).text);
  for (const name of ['TWITTER_BEARER_TOKEN', 'X_BEARER_TOKEN']) {
    assert.match(
      crawl,
      new RegExp(`^\\s+${name}:\\s*\\$\\{\\{\\s*secrets\\.${name}\\s*\\}\\}\\s*$`, 'm'),
      `${name} must be passed on from the secret of the same name`
    );
  }
});

test('every third-party action is pinned to a full commit SHA', () => {
  const uses = (code(workflow).match(/^\s*(?:-\s+)?uses:\s*\S+/gm) ?? []).map(line => line.replace(/^\s*(?:-\s+)?uses:\s*/, ''));
  assert.ok(uses.length >= 8, `found only ${uses.length} actions`);
  for (const ref of uses) {
    if (ref.startsWith('./')) continue;
    assert.match(ref, /^[\w.-]+\/[\w./-]+@[0-9a-f]{40}$/, `"${ref}" is not pinned to a commit`);
  }
});

test('write access is limited to the one job that commits the reports', () => {
  assert.match(code(workflow), /^permissions:\s*\n\s+contents:\s*read\s*$/m, 'the default must be read-only');
  const writers = Object.entries(jobs).filter(([, job]) => /contents:\s*write/.test(code(job))).map(([id]) => id);
  assert.deepStrictEqual(writers, ['publish']);
});

test('the job that reads untrusted pages with the API keys cannot write to the repository', () => {
  // Its token is read-only and its checkout leaves no credential in .git/config (the crawl is also handed
  // GITHUB_TOKEN, which with write access would be a way to push whatever a hostile page talked it into).
  const permissions = /^ {4}permissions:\s*\n((?: {6}\S.*\n?)+)/m.exec(code(jobs.crawl))?.[1].trim().split('\n').map(line => line.trim());
  assert.deepStrictEqual(permissions, ['contents: read']);
  assert.match(step('crawl', 'Checkout repository').text, /^ {10}persist-credentials:\s*false\s*$/m);
  assert.ok(!/\bgit\b/.test(code(jobs.crawl)), 'the crawl job must not run git');
  assert.ok(!/contents:\s*write/.test(code(jobs.crawl)));

  // Nothing else needs the token either; the one job that pushes keeps it.
  assert.match(step('test', 'Checkout repository').text, /^ {10}persist-credentials:\s*false\s*$/m);
  assert.ok(!/persist-credentials/.test(step('publish', 'Checkout repository').text), 'publish pushes: its checkout has to keep the token');
});

test('the job that writes never runs the crawler and never sees a secret', () => {
  const publish = code(jobs.publish);
  assert.ok(!/\b(node|npm|npx)\b|bin\/cli/.test(publish), 'publish must not run project code');
  assert.ok(!/secrets\./.test(publish));
  assert.match(publish, /^ {4}permissions:\s*\n {6}contents:\s*write\s*$/m);
});

test('what the crawl hands over is what publish replaces and commits', () => {
  const upload = step('crawl', HAND_OVER).text;
  const download = step('publish', TAKE).text;
  const replace = code(step('publish', REPLACE).text);

  assert.match(upload, /uses:\s*actions\/upload-artifact@/);
  assert.match(download, /uses:\s*actions\/download-artifact@/);
  const name = withValue(upload, 'name');
  assert.ok(name, 'the artifact has no name');
  assert.strictEqual(withValue(download, 'name'), name, 'publish downloads another artifact than the one the crawl uploads');
  assert.deepStrictEqual(withLines(upload, 'path'), ['reports/', 'data/']);
  assert.strictEqual(withValue(upload, 'if-no-files-found'), 'error', 'an empty hand-over must fail the crawl, not publish nothing');
  assert.strictEqual(withValue(upload, 'overwrite'), 'true', 'a re-run of the workflow uploads the same name again');
  assert.strictEqual(withValue(upload, 'include-hidden-files'), null, 'hidden files are not handed over: publish makes the one it needs, .nojekyll, itself');

  // About 80 MB, and only someone looking into a failed publication needs it: it is kept for days, not months, and the README says how many.
  const retention = Number(withValue(upload, 'retention-days'));
  assert.ok(Number.isInteger(retention) && retention >= 1 && retention <= 7, `retention-days is ${withValue(upload, 'retention-days')}`);
  const readme = read('README.md');
  assert.ok(readme.includes(`kept for ${retention} days`), 'the README does not say how long the hand-over is kept');
  assert.ok(readme.includes(`deleted after ${retention} days`), 'the README does not say when the hand-over is deleted');

  // The directories are replaced, not overlaid, so a file the crawl removed is removed from the commit too.
  const staging = withValue(download, 'path');
  assert.ok(staging && !['.', './', ''].includes(staging), 'the download goes to a directory of its own, not over the checkout');
  const order = ['rm -rf reports data', `mv ${staging}/reports reports`, `mv ${staging}/data data`].map(command => replace.indexOf(command));
  assert.ok(order.every(index => index >= 0) && order[0] < order[1] && order[1] < order[2], replace);
  assert.match(replace, /set -euo pipefail/, 'a missing directory must fail the job');

  assert.match(code(step('publish', COMMIT).text), /^\s+git add reports\/ data\/\s*$/m, 'what is committed is what was handed over');
  assert.match(code(step('publish', 'Upload Pages Artifact').text), /^\s+path:\s*'reports\/'\s*$/m);
});

// --- the step that takes the hand-over is run, not just read -----------------------------------------------------

/** The script of a `run: |` step as the shell receives it: the indentation YAML takes away is removed. */
function scriptOf(stepText) {
  const lines = stepText.split('\n');
  const start = lines.findIndex(line => /^ {8}run:\s*\|\s*$/.test(line));
  assert.ok(start >= 0, 'the step has no `run: |` script');
  const body = [];
  for (const line of lines.slice(start + 1)) {
    if (line.trim() !== '' && !line.startsWith(' '.repeat(10))) break;
    body.push(line.slice(10));
  }
  return body.join('\n');
}

const noBash = spawnSync('bash', ['-c', 'true']).status === 0 ? false : 'bash is not available here';

/** Every file and link under `dir` as sorted `kind relative/path` lines, hidden ones included; a link is listed, never followed. */
function listing(dir, within = '') {
  return fs.readdirSync(path.join(dir, within), { withFileTypes: true }).flatMap(entry => {
    const name = path.posix.join(within, entry.name);
    if (entry.isSymbolicLink()) return [`link ${name}`];
    return entry.isDirectory() ? listing(dir, name) : [`file ${name}`];
  }).sort();
}

const COMMITTED = {
  'reports/latest.json': 'last week',
  'reports/old-page.md': 'last week',
  'reports/.nojekyll': '',
  'data/history.json': 'last week',
  'data/history/2025-W01.json': 'a snapshot that the crawl pruned',
};
const HANDED_OVER = {
  'reports/latest.json': '{"week":"this week"}',
  'reports/new-page.md': 'this week',
  'data/history.json': '{"week":"this week"}',
  'data/history/2026-W41.json': 'this week',
};

/** A scratch directory laid out like the checkout `publish` works in: what is committed, and the crawl's output beside it. */
function publishCheckout(t, { handedOver = HANDED_OVER, links = {} } = {}) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'publish-replace-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  const put = (name, content) => {
    fs.mkdirSync(path.dirname(path.join(dir, name)), { recursive: true });
    fs.writeFileSync(path.join(dir, name), content);
  };
  for (const [name, content] of Object.entries(COMMITTED)) put(name, content);
  for (const [name, content] of Object.entries(handedOver)) put(`crawl-output/${name}`, content);
  for (const [name, target] of Object.entries(links)) {
    fs.mkdirSync(path.dirname(path.join(dir, 'crawl-output', name)), { recursive: true });
    fs.symlinkSync(target, path.join(dir, 'crawl-output', name));
  }
  return dir;
}

const runReplaceIn = dir => spawnSync('bash', ['-c', scriptOf(step('publish', REPLACE).text)], { cwd: dir, encoding: 'utf-8' });

test('publish takes reports and data from the hand-over, and takes nothing else from it', { skip: noBash }, t => {
  const dir = publishCheckout(t, {
    handedOver: { ...HANDED_OVER, '.github/workflows/weekly-report.yml': 'on: push', 'src/runner.js': 'evil()', 'notes.txt': 'x' },
  });

  const result = runReplaceIn(dir);

  assert.strictEqual(result.status, 0, result.stdout + result.stderr);
  assert.deepStrictEqual(listing(dir), [
    'file data/history.json',
    'file data/history/2026-W41.json',
    'file reports/latest.json',
    'file reports/new-page.md',
  ], 'replaced, not overlaid: last week\'s files and the hand-over itself are gone, and so is everything that was not reports/ or data/');
  assert.strictEqual(fs.readFileSync(path.join(dir, 'reports/latest.json'), 'utf-8'), '{"week":"this week"}');
  assert.strictEqual(fs.readFileSync(path.join(dir, 'data/history.json'), 'utf-8'), '{"week":"this week"}');
});

test('a hand-over that is not what a finished crawl leaves is refused before anything is deleted', { skip: noBash }, t => {
  const without = name => Object.fromEntries(Object.entries(HANDED_OVER).filter(([key]) => key !== name));
  const emptied = name => ({ ...HANDED_OVER, [name]: '' });
  const cases = [
    ['no latest.json', { handedOver: without('reports/latest.json') }, /^::error::The crawl's output has no crawl-output\/reports\/latest\.json, or it is empty; refusing to publish it\.$/m],
    ['an empty latest.json', { handedOver: emptied('reports/latest.json') }, /no crawl-output\/reports\/latest\.json/],
    ['no history.json', { handedOver: without('data/history.json') }, /^::error::The crawl's output has no crawl-output\/data\/history\.json, or it is empty; refusing to publish it\.$/m],
    ['an empty history.json', { handedOver: emptied('data/history.json') }, /no crawl-output\/data\/history\.json/],
    ['no reports directory at all', { handedOver: { 'data/history.json': 'x' } }, /no crawl-output\/reports\/latest\.json/],
    ['a link to a file', { links: { 'reports/alias.json': 'latest.json' } }, /^::error::The crawl's output holds a symbolic link; refusing to publish it\.$/m],
    ['a link to a directory', { links: { 'data/up': '..' } }, /symbolic link/],
    ['a link that leads nowhere', { links: { 'data/history/dangling.json': 'nowhere.json' } }, /symbolic link/],
    ['a link that is outside reports and data', { links: { 'elsewhere': '.' } }, /symbolic link/],
  ];

  for (const [what, layout, message] of cases) {
    const dir = publishCheckout(t, layout);
    const before = listing(dir);
    const contents = Object.fromEntries(Object.keys(COMMITTED).map(name => [name, fs.readFileSync(path.join(dir, name), 'utf-8')]));

    const result = runReplaceIn(dir);

    assert.notStrictEqual(result.status, 0, `${what}: the step must fail, so that nothing is committed or deployed`);
    assert.match(result.stdout, message, `${what}: the log says why`);
    assert.deepStrictEqual(listing(dir), before, `${what}: not one file was deleted, moved or added`);
    for (const [name, content] of Object.entries(contents)) {
      assert.strictEqual(fs.readFileSync(path.join(dir, name), 'utf-8'), content, `${what}: ${name} is as committed`);
    }
  }
});

test('the hidden file the hand-over leaves out is made again before the site is uploaded and before the files are committed', () => {
  // The replacement deletes the committed reports/.nojekyll and the hand-over does not carry one. Created after the commit
  // step, its absence would be committed as a deletion; created after the upload, the site would go without it.
  const names = stepsOf(jobs.publish).map(s => s.name);
  const at = name => {
    assert.ok(names.includes(name), `publish has no step named "${name}"`);
    return names.indexOf(name);
  };
  assert.ok(at(REPLACE) < at('Ensure .nojekyll exists'), 'after the files are replaced');
  assert.ok(at('Ensure .nojekyll exists') < at('Upload Pages Artifact'), 'before the site is uploaded');
  assert.ok(at('Ensure .nojekyll exists') < at(COMMIT), 'before the files are committed');
  assert.match(code(step('publish', 'Ensure .nojekyll exists').text), /^\s+run:\s*mkdir -p reports && touch reports\/\.nojekyll\s*$/m);
});

test('the crawl stops starting work well before its step is killed, which would lose the week', () => {
  const crawl = code(step('crawl', CRAWL).text);
  const deadline = Number(/CRAWL_DEADLINE_MINUTES:\s*'?(\d+)'?\s*$/m.exec(crawl)?.[1]);
  const stepLimit = Number(/^\s+timeout-minutes:\s*(\d+)\s*$/m.exec(crawl)?.[1]);
  const jobLimit = Number(/^ {4}timeout-minutes:\s*(\d+)\s*$/m.exec(code(jobs.crawl))?.[1]);

  assert.ok(deadline > 0, 'the crawl has no deadline');
  assert.ok(deadline + 10 <= stepLimit, `a deadline of ${deadline} minutes leaves the last feature less than ten minutes before the ${stepLimit}-minute step timeout`);
  assert.ok(stepLimit < jobLimit, 'the step must time out before the job does');

  // What the README says the workflow sets is what it sets (in the configuration table, and where the jobs are described).
  const readme = read('README.md');
  const row = readme.split('\n').find(line => line.startsWith('| `CRAWL_DEADLINE_MINUTES` |'));
  assert.ok(row?.includes(`The workflow sets \`${deadline}\``), `the configuration table does not say that the workflow sets ${deadline}`);
  assert.ok(
    readme.includes(`sets \`CRAWL_DEADLINE_MINUTES\` to ${deadline} and the step's timeout to ${stepLimit}`),
    `the README does not say that the crawl step has a deadline of ${deadline} minutes and a timeout of ${stepLimit}`
  );
  assert.ok(readme.includes(`the workflow gives the crawl step ${stepLimit} minutes before it kills it`), 'the README names another step timeout');
});

test('which jobs run for which events: a good crawl is published, anything else publishes nothing new', () => {
  const nothing = { crawl: 'skipped', publish: 'skipped', 'deploy-pages': 'skipped' };
  const committed = { crawl: 'skipped', publish: 'success', 'deploy-pages': 'success' };
  const scenarios = [
    ['a scheduled run publishes what its crawl produced', { event: 'schedule' }, { crawl: 'success', publish: 'success', 'deploy-pages': 'success' }],
    ['a manual run that crawls does the same', { event: 'workflow_dispatch', skipCrawl: false }, { crawl: 'success', publish: 'success', 'deploy-pages': 'success' }],
    ['a manual run that skips the crawl deploys what is committed', { event: 'workflow_dispatch', skipCrawl: true }, committed],
    ['a push to the reports deploys what is committed', { event: 'push' }, committed],
    ['a pull request only runs the tests', { event: 'pull_request' }, nothing],
    ['a crawl that failed or refused publishes and deploys nothing', { event: 'schedule', crawl: 'failure' }, { crawl: 'failure', publish: 'skipped', 'deploy-pages': 'skipped' }],
    ['failing tests stop the crawl, the publication and the deployment', { event: 'schedule', test: 'failure' }, nothing],
    ['failing tests stop a push from deploying too', { event: 'push', test: 'failure' }, nothing],
    ['a publication that failed (lost a race) does not deploy', { event: 'schedule', publish: 'failure' }, { crawl: 'success', publish: 'failure', 'deploy-pages': 'skipped' }],
    ['a cancelled run publishes nothing', { event: 'schedule', crawl: 'cancelled', cancelled: true }, { crawl: 'cancelled', publish: 'skipped', 'deploy-pages': 'skipped' }],
    ['a crawl cancelled on its own (a timeout), in a run that goes on, publishes nothing', { event: 'schedule', crawl: 'cancelled' }, { crawl: 'cancelled', publish: 'skipped', 'deploy-pages': 'skipped' }],
  ];
  for (const [name, scenario, expected] of scenarios) {
    assert.deepStrictEqual(plan(scenario), expected, name);
  }
});

test('only a crawl that succeeded replaces the files and is committed', () => {
  const conditional = [TAKE, REPLACE, COMMIT];
  for (const name of conditional) {
    const condition = stepCondition(step('publish', name).text);
    assert.ok(condition, `"${name}" must be conditional on the crawl`);
    for (const [crawl, expected] of [['success', true], ['skipped', false], ['failure', false], ['cancelled', false]]) {
      const context = contextFor({ event: 'schedule' }, { crawl }, ['crawl']);
      assert.strictEqual(truthy(evaluate(condition, context)), expected, `"${name}" with a crawl that ${crawl}`);
    }
  }
  // Everything else about publishing applies whether or not there was a crawl.
  for (const name of ['Ensure .nojekyll exists', 'Upload Pages Artifact', 'Checkout repository']) {
    assert.strictEqual(stepCondition(step('publish', name).text), null, `"${name}" must always run`);
  }
});

test('every test script gives each test a deadline, so one that waits forever fails instead of hanging', () => {
  for (const name of ['test', 'test:coverage', 'test:integration']) {
    const script = pkg.scripts?.[name] ?? '';
    assert.match(script, /\bnode --test\b/, `${name} should run the Node test runner`);
    const deadline = Number(/--test-timeout=(\d+)/.exec(script)?.[1]);
    assert.ok(deadline >= 10_000, `${name} needs a --test-timeout of at least 10 s (the slowest test takes about 1.5 s): ${script}`);
  }
});
