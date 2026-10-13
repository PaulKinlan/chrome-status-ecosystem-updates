import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs/promises';
import http from 'node:http';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { config, DEFAULT_FEATURE_STATUSES } from '../src/config.js';
import { CREDENTIAL_FIELDS, CREDENTIAL_ENV_VARS, testRoot } from './_support/setup.js';

// This file tests the test harness itself. If it fails, `npm test` could be
// sending real credentials to third parties or writing into reports/ and data/.

const testDir = path.dirname(fileURLToPath(import.meta.url));

test('every test file imports the hermetic setup before anything else', async () => {
  const files = (await fs.readdir(testDir)).filter(name => name.endsWith('.test.js'));
  assert.ok(files.length > 0, 'no test files found');

  const offenders = [];
  for (const file of files) {
    const source = await fs.readFile(path.join(testDir, file), 'utf-8');
    // ES imports are evaluated in source order, so only the first one matters.
    const firstImport = source.split('\n').map(line => line.trim()).find(line => line.startsWith('import '));
    if (!/^import\s+['"]\.\/_support\/setup\.js['"]/.test(firstImport || '')) offenders.push(file);
  }

  assert.deepStrictEqual(
    offenders,
    [],
    `These files must start with \`import './_support/setup.js';\`: ${offenders.join(', ')}`
  );
});

test('provider credentials are blank in config and in the environment', () => {
  for (const field of CREDENTIAL_FIELDS) {
    assert.strictEqual(config[field], '', `config.${field} must be blank during tests`);
  }
  for (const name of CREDENTIAL_ENV_VARS) {
    assert.strictEqual(process.env[name], undefined, `${name} must not be set during tests`);
  }
});

test('report and history output is redirected to a throwaway directory', () => {
  assert.ok(testRoot.startsWith(os.tmpdir()), `${testRoot} is not under ${os.tmpdir()}`);
  for (const dir of [config.reportsDir, config.dataDir, config.historyFilePath]) {
    assert.ok(dir.startsWith(testRoot), `${dir} escapes the test sandbox`);
  }
});

// With INTEGRATION=1 the guard is lifted on purpose, so these requests would genuinely
// be sent (one of them to the cloud metadata address): never even attempt them then.
const liveByDesign = process.env.INTEGRATION === '1' && 'INTEGRATION=1 deliberately allows real network access';

test('real network requests fail loudly instead of leaving the machine', { skip: liveByDesign }, async () => {
  const blocked = [
    'https://example.com/',
    'https://chromestatus.com/api/v0/features',
    'http://169.254.169.254/latest/meta-data/',
    // Looks like loopback to a careless regex but resolves elsewhere.
    'http://127.0.0.1.nip.io/',
    'http://localhost.example.com/',
  ];
  for (const url of blocked) {
    await assert.rejects(fetch(url), /Blocked real network request/, url);
  }
});

test('requests to a server the test itself started on loopback are allowed', async (t) => {
  const server = http.createServer((req, res) => res.end('hello from loopback'));
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => new Promise(resolve => server.close(resolve)));

  const res = await fetch(`http://127.0.0.1:${server.address().port}/`);
  assert.strictEqual(await res.text(), 'hello from loopback');
});

test('the settings that change what a run does are neutral in the tests, whatever the environment says', async () => {
  // A child process, because `config` reads the environment when it is imported.
  const harness = new URL('./_support/setup.js', import.meta.url).href;
  const configuration = new URL('../src/config.js', import.meta.url).href;
  const script = `
    import ${JSON.stringify(harness)};
    import { config } from ${JSON.stringify(configuration)};
    const { maxFeatures, concurrency, crawlDeadlineMinutes, targetMilestones, searchProvider, featureStatuses } = config;
    console.log(JSON.stringify({ maxFeatures, concurrency, crawlDeadlineMinutes, targetMilestones, searchProvider, featureStatuses }));
  `;
  const env = {
    ...process.env,
    MAX_FEATURES: '3', CONCURRENCY: '9', CRAWL_DEADLINE_MINUTES: '5', TARGET_MILESTONES: '150',
    SEARCH_PROVIDER: 'brave', FEATURE_STATUSES: 'enabled',
  };
  const stdout = await new Promise((resolve, reject) => {
    execFile(process.execPath, ['--input-type=module', '-e', script], { env, timeout: 15_000 }, (error, out, stderr) => {
      if (error) reject(new Error(`${error.message}\n${stderr}`));
      else resolve(out);
    });
  });
  assert.deepStrictEqual(JSON.parse(stdout), {
    maxFeatures: null, concurrency: 4, crawlDeadlineMinutes: 0, targetMilestones: 'last-5', searchProvider: 'auto',
    featureStatuses: [...DEFAULT_FEATURE_STATUSES],
  });
});

test('INTEGRATION=1 lifts the network guard but still answers hostname lookups itself', async () => {
  // A child process, because the setting is read when the harness is imported.
  const harness = new URL('./_support/setup.js', import.meta.url).href;
  const guard = new URL('../src/safe-fetch.js', import.meta.url).href;
  const script = `
    import ${JSON.stringify(harness)};
    import { assertPublicUrl } from ${JSON.stringify(guard)};
    // \`.invalid\` can never resolve for real, so this only succeeds if the stub answered.
    const url = await assertPublicUrl('https://this-name-does-not-exist.invalid/');
    console.log('stubbed:' + url.hostname);
  `;
  const stdout = await new Promise((resolve, reject) => {
    execFile(process.execPath, ['--input-type=module', '-e', script], { env: { ...process.env, INTEGRATION: '1' }, timeout: 15_000 }, (error, out, stderr) => {
      if (error) reject(new Error(`${error.message}\n${stderr}`));
      else resolve(out);
    });
  });
  assert.match(stdout, /stubbed:this-name-does-not-exist\.invalid/);
});
