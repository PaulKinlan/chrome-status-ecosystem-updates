import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { firstNonBlank } from '../src/config.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

test('firstNonBlank is the first value with anything in it, trimmed, and nothing when none has', () => {
  assert.strictEqual(firstNonBlank('first', 'second'), 'first');
  assert.strictEqual(firstNonBlank(undefined, 'second'), 'second');
  assert.strictEqual(firstNonBlank(null, '', '   ', '\n\t', 'third', 'fourth'), 'third', 'empty and whitespace alone are not set');
  assert.strictEqual(firstNonBlank('  padded\n', 'second'), 'padded', 'whitespace around a value is not part of it');

  assert.strictEqual(firstNonBlank(), '');
  assert.strictEqual(firstNonBlank(undefined, null, '', ' \n '), '');
});

/**
 * What `config.twitterBearerToken` is under each of the given cases, read the way a run reads it, by a program that
 * imports src/config.js. A case is `{ env, dotenv }`: the two variables that name the token (one that is absent or
 * null is not set at all) and, optionally, the text of a `.env` file in the project root. As in
 * test/crawl-budget.test.js, a copy of the file in a directory of its own is what is imported, so that no `.env` of
 * the person running the tests (and no token in their environment) can change the answer, and the child gets no
 * environment of its own either.
 */
async function tokensFromEnvironments(t, cases) {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'twitter-token-config-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  await fs.mkdir(path.join(dir, 'src'));
  await fs.copyFile(fileURLToPath(new URL('../src/config.js', import.meta.url)), path.join(dir, 'src', 'config.mjs'));
  await fs.writeFile(path.join(dir, 'probe.mjs'), `
    import fs from 'node:fs';
    const answers = [];
    for (const [index, { env = {}, dotenv = null }] of JSON.parse(process.argv[2]).entries()) {
      for (const name of ['TWITTER_BEARER_TOKEN', 'X_BEARER_TOKEN']) {
        if (env[name] === undefined || env[name] === null) delete process.env[name];
        else process.env[name] = env[name];
      }
      if (dotenv === null) fs.rmSync('.env', { force: true });
      else fs.writeFileSync('.env', dotenv);
      answers.push((await import('./src/config.mjs?probe=' + index)).config.twitterBearerToken);
    }
    console.log(JSON.stringify(answers));
  `);

  const stdout = await new Promise((resolve, reject) => {
    execFile(
      process.execPath,
      [path.join(dir, 'probe.mjs'), JSON.stringify(cases)],
      { cwd: dir, env: { PATH: process.env.PATH, HOME: dir }, timeout: 30_000, encoding: 'utf-8' },
      (error, out, err) => (error ? reject(new Error(`${error.message}\n${err}`)) : resolve(out))
    );
  });
  return JSON.parse(stdout);
}

test('TWITTER_BEARER_TOKEN and X_BEARER_TOKEN are one setting: either works, a blank one is ignored, the first wins', async t => {
  // [TWITTER_BEARER_TOKEN, X_BEARER_TOKEN, the token the crawl uses]; null is a variable that is not set at all.
  const cases = [
    [null, null, ''],
    ['twitter-token', null, 'twitter-token'],
    [null, 'x-token', 'x-token'],
    ['twitter-token', 'x-token', 'twitter-token'],

    // Blank, as the workflow passes a secret that is not defined: the other name is used.
    ['', 'x-token', 'x-token'],
    ['twitter-token', '', 'twitter-token'],
    ['', '', ''],
    // Whitespace alone is blank too. It used to pass for a token and hide the one under the other name.
    ['   ', 'x-token', 'x-token'],
    ['\n', 'x-token', 'x-token'],
    ['  ', ' \t', ''],

    // Whitespace around a token is not part of it, whichever name it is under.
    [' twitter-token\n', null, 'twitter-token'],
    [null, '\tx-token ', 'x-token'],
  ];
  const answers = await tokensFromEnvironments(t, cases.map(([twitter, x]) => ({
    env: { TWITTER_BEARER_TOKEN: twitter, X_BEARER_TOKEN: x },
  })));

  assert.deepStrictEqual(answers, cases.map(([, , expected]) => expected), JSON.stringify(cases));
});

test('a .env copied from .env.example takes the token under either name', async t => {
  const example = await fs.readFile(path.join(root, '.env.example'), 'utf-8');
  const filledIn = example.replace(/^TWITTER_BEARER_TOKEN=.*$/m, 'TWITTER_BEARER_TOKEN=twitter-from-dotenv');
  assert.notStrictEqual(filledIn, example, '.env.example has no TWITTER_BEARER_TOKEN line to fill in');

  const answers = await tokensFromEnvironments(t, [
    { dotenv: example },
    { dotenv: filledIn },
    // The blank TWITTER_BEARER_TOKEN line of the example is still there above it.
    { dotenv: `${example}\nX_BEARER_TOKEN=x-from-dotenv\n` },
    { env: { X_BEARER_TOKEN: 'x-from-shell' }, dotenv: example },
  ]);

  assert.deepStrictEqual(answers, [
    '', // as copied: the example ships no token
    'twitter-from-dotenv',
    'x-from-dotenv',
    'x-from-shell',
  ]);
});
