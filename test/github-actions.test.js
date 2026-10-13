import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {
  annotate,
  appendToStepSummary,
  escapeWorkflowData,
  onGitHubActions,
  reportFatalToActions,
} from '../src/github-actions.js';

/** Sets (or, with undefined, removes) an environment variable for the length of one test. */
function setEnv(t, name, value) {
  const before = process.env[name];
  if (value === undefined) delete process.env[name];
  else process.env[name] = value;
  t.after(() => {
    if (before === undefined) delete process.env[name];
    else process.env[name] = before;
  });
}

/** What the code under test prints with console.log. */
function captureLog(t) {
  const lines = [];
  t.mock.method(console, 'log', (...args) => { lines.push(args.join(' ')); });
  return lines;
}

/** A throwaway file standing in for $GITHUB_STEP_SUMMARY. */
function summaryFile(t) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'gha-summary-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  return path.join(dir, 'summary.md');
}

const read = file => fs.readFileSync(file, 'utf-8');

test('onGitHubActions is true only where GitHub says so', (t) => {
  for (const value of [undefined, '', 'false', '1', 'TRUE', 'yes']) {
    setEnv(t, 'GITHUB_ACTIONS', value);
    assert.strictEqual(onGitHubActions(), false, `GITHUB_ACTIONS=${JSON.stringify(value)}`);
  }
  setEnv(t, 'GITHUB_ACTIONS', 'true');
  assert.strictEqual(onGitHubActions(), true);
});

test('escapeWorkflowData encodes what would end or alter a workflow command', () => {
  assert.strictEqual(escapeWorkflowData('100%\r\nok'), '100%25%0D%0Aok');
  // A literal `%0A` must stay literal: the runner decodes what it receives, so the percent sign goes first.
  assert.strictEqual(escapeWorkflowData('%0A'), '%250A');
  assert.strictEqual(escapeWorkflowData(null), 'null');
  assert.strictEqual(escapeWorkflowData(67), '67');
});

test('annotate does nothing, and says so, outside GitHub Actions', (t) => {
  setEnv(t, 'GITHUB_ACTIONS', undefined);
  const lines = captureLog(t);

  assert.strictEqual(annotate('warning', 'Title', 'message'), false);
  assert.deepStrictEqual(lines, []);
});

test('annotate prints one workflow command, with the message escaped', (t) => {
  setEnv(t, 'GITHUB_ACTIONS', 'true');
  const lines = captureLog(t);

  assert.strictEqual(annotate('warning', 'Low AI synthesis coverage', 'Only 8 of 12 features (67%) received AI synthesis'), true);
  assert.deepStrictEqual(lines, ['::warning title=Low AI synthesis coverage::Only 8 of 12 features (67%25) received AI synthesis']);
});

test('annotate cannot be made to emit a second command through its message', (t) => {
  setEnv(t, 'GITHUB_ACTIONS', 'true');
  const lines = captureLog(t);

  annotate('error', 'Crawl failed', 'boom\n::error title=Injected::pwned\r::set-output name=x::y');

  assert.strictEqual(lines.length, 1);
  assert.ok(!/[\r\n]/.test(lines[0]), 'the command must stay on one line');
  assert.ok(lines[0].startsWith('::error title=Crawl failed::boom%0A::error title=Injected::pwned%0D::set-output'), lines[0]);
});

test('annotate escapes the title more strictly than the message', (t) => {
  setEnv(t, 'GITHUB_ACTIONS', 'true');
  const lines = captureLog(t);

  // `:` and `,` end a property, so they may not appear in one.
  annotate('error', 'a:b,c\nd', 'm: n, o');

  assert.deepStrictEqual(lines, ['::error title=a%3Ab%2Cc%0Ad::m: n, o']);
});

test('annotate masks credentials that an upstream error echoed back', (t) => {
  setEnv(t, 'GITHUB_ACTIONS', 'true');
  const lines = captureLog(t);
  const secrets = ['SECRETSECRETSECRET', 'abcdef123456789', 'sk-abcdefghijkl', 'AIzaSyAAAAAAAAAAAAAAAAAAAA'];

  annotate('error', 'Crawl failed', `GET https://x.test/v1?key=${secrets[0]}&alt=json failed: Bearer ${secrets[1]}, ${secrets[2]}, ${secrets[3]}`);

  for (const secret of secrets) assert.ok(!lines[0].includes(secret), `${secret} leaked: ${lines[0]}`);
  assert.match(lines[0], /\[redacted\]/);
});

test('appendToStepSummary appends to $GITHUB_STEP_SUMMARY on Actions only', (t) => {
  const file = summaryFile(t);
  setEnv(t, 'GITHUB_STEP_SUMMARY', file);

  setEnv(t, 'GITHUB_ACTIONS', undefined);
  assert.strictEqual(appendToStepSummary('# off Actions'), false);
  assert.ok(!fs.existsSync(file), 'nothing may be written off Actions');

  setEnv(t, 'GITHUB_ACTIONS', 'true');
  assert.strictEqual(appendToStepSummary('first'), true);
  assert.strictEqual(appendToStepSummary('second'), true);
  assert.strictEqual(read(file), 'first\nsecond\n');
});

test('appendToStepSummary needs the file named by GITHUB_STEP_SUMMARY, and never throws', (t) => {
  setEnv(t, 'GITHUB_ACTIONS', 'true');

  setEnv(t, 'GITHUB_STEP_SUMMARY', undefined);
  assert.strictEqual(appendToStepSummary('x'), false);

  // A directory cannot be appended to: a summary is a courtesy, not a second failure.
  setEnv(t, 'GITHUB_STEP_SUMMARY', os.tmpdir());
  assert.strictEqual(appendToStepSummary('x'), false);
});

test('reportFatalToActions raises an error annotation and writes a summary section', (t) => {
  const file = summaryFile(t);
  setEnv(t, 'GITHUB_ACTIONS', 'true');
  setEnv(t, 'GITHUB_STEP_SUMMARY', file);
  const lines = captureLog(t);

  reportFatalToActions(new Error('ChromeStatus returned no features for Chrome 153, 154.\nRefusing to publish.'));

  assert.deepStrictEqual(lines, ['::error title=Crawl failed::ChromeStatus returned no features for Chrome 153, 154.%0ARefusing to publish.']);
  assert.strictEqual(
    read(file),
    '## ❌ The crawl stopped with an error\n\n```text\nChromeStatus returned no features for Chrome 153, 154.\nRefusing to publish.\n```\n\n'
  );
});

test('reportFatalToActions fences the message so that nothing in it can end the block', (t) => {
  const file = summaryFile(t);
  setEnv(t, 'GITHUB_ACTIONS', 'true');
  setEnv(t, 'GITHUB_STEP_SUMMARY', file);
  captureLog(t);

  const message = 'before\n``````\n<img src=x onerror=alert(1)>\n# not a heading\n`` and ````` after';
  reportFatalToActions(new Error(message));

  const summary = read(file);
  const [, fence] = summary.match(/\n\n(`+)text\n/);
  const longestInside = Math.max(...(message.match(/`+/g) || []).map(run => run.length));
  assert.ok(fence.length > longestInside, `fence of ${fence.length} against a run of ${longestInside}`);
  assert.ok(summary.includes(`\n${message}\n${fence}\n`), 'the message sits unchanged between the fences');
});

test('reportFatalToActions masks credentials in both outputs', (t) => {
  const file = summaryFile(t);
  setEnv(t, 'GITHUB_ACTIONS', 'true');
  setEnv(t, 'GITHUB_STEP_SUMMARY', file);
  const lines = captureLog(t);

  reportFatalToActions(new Error('request to https://x.test/?key=SECRETSECRETSECRET failed'));

  assert.ok(!lines[0].includes('SECRETSECRETSECRET'), lines[0]);
  assert.ok(!read(file).includes('SECRETSECRETSECRET'), read(file));
});

test('reportFatalToActions does nothing outside GitHub Actions, and copes with a thrown non-Error', (t) => {
  const file = summaryFile(t);
  setEnv(t, 'GITHUB_STEP_SUMMARY', file);
  const lines = captureLog(t);

  setEnv(t, 'GITHUB_ACTIONS', undefined);
  reportFatalToActions(new Error('boom'));
  assert.deepStrictEqual(lines, []);
  assert.ok(!fs.existsSync(file));

  setEnv(t, 'GITHUB_ACTIONS', 'true');
  reportFatalToActions('plain string');
  reportFatalToActions(undefined);
  assert.deepStrictEqual(lines, ['::error title=Crawl failed::plain string', '::error title=Crawl failed::undefined']);
});
