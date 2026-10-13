import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { writeFileAtomic } from '../src/storage/atomic.js';

/**
 * Real files in a scratch directory: these tests are about what is left on disk
 * after a write succeeds, fails or overlaps with another, which a mock of the
 * filesystem could only echo back.
 */
async function scratchDir(t) {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'atomic-test-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  return dir;
}

const filesIn = dir => fs.readdir(dir);

test('writeFileAtomic creates the file with exactly the data given, and leaves nothing else behind', async t => {
  const dir = await scratchDir(t);
  const target = path.join(dir, 'history.json');

  await writeFileAtomic(target, '{"a":1}');

  assert.strictEqual(await fs.readFile(target, 'utf-8'), '{"a":1}');
  assert.deepStrictEqual(await filesIn(dir), ['history.json']);
});

test('writeFileAtomic replaces an existing file as a whole', async t => {
  const dir = await scratchDir(t);
  const target = path.join(dir, 'history.json');
  await fs.writeFile(target, 'old and rather longer than the new content');

  await writeFileAtomic(target, 'new');

  assert.strictEqual(await fs.readFile(target, 'utf-8'), 'new');
  assert.deepStrictEqual(await filesIn(dir), ['history.json']);
});

test('a failure at the final rename keeps the previous file, removes the temp file and reports the error', async t => {
  const dir = await scratchDir(t);
  const target = path.join(dir, 'history.json');
  await fs.writeFile(target, 'previous, complete content');
  const failure = Object.assign(new Error('EXDEV: cross-device link not permitted'), { code: 'EXDEV' });
  t.mock.method(fs, 'rename', async () => { throw failure; });

  await assert.rejects(writeFileAtomic(target, 'the new content'), error => error === failure);

  assert.strictEqual(await fs.readFile(target, 'utf-8'), 'previous, complete content');
  assert.deepStrictEqual(await filesIn(dir), ['history.json'], 'no stray temp file for `git add` to pick up');
});

test('a failure while writing the temp file keeps the previous file and reports the error', async t => {
  const dir = await scratchDir(t);
  const target = path.join(dir, 'history.json');
  await fs.writeFile(target, 'previous, complete content');
  const failure = Object.assign(new Error('ENOSPC: no space left on device'), { code: 'ENOSPC' });
  const realWriteFile = fs.writeFile;
  t.mock.method(fs, 'writeFile', async (file, ...rest) => {
    // Leave a half-written temp file behind, as a full disk would.
    await realWriteFile(file, 'half of the new con');
    throw failure;
  });

  await assert.rejects(writeFileAtomic(target, 'the new content'), error => error === failure);

  t.mock.restoreAll();
  assert.strictEqual(await fs.readFile(target, 'utf-8'), 'previous, complete content');
  assert.deepStrictEqual(await filesIn(dir), ['history.json'], 'the half-written temp file was cleaned up');
});

test('a cleanup that itself fails does not hide the original error', async t => {
  const dir = await scratchDir(t);
  const target = path.join(dir, 'history.json');
  const failure = new Error('rename failed');
  t.mock.method(fs, 'rename', async () => { throw failure; });
  t.mock.method(fs, 'rm', async () => { throw new Error('rm failed too'); });

  try {
    await assert.rejects(writeFileAtomic(target, 'x'), error => error === failure);
  } finally {
    t.mock.restoreAll(); // the scratch directory is removed with fs.rm afterwards
  }
});

test('writing into a directory that does not exist is an error, not a silent no-op', async t => {
  const dir = await scratchDir(t);

  await assert.rejects(writeFileAtomic(path.join(dir, 'missing', 'history.json'), 'x'), { code: 'ENOENT' });
});

test('overlapping writes to the same file never share a temp file, and the file ends up as one whole write', async t => {
  const dir = await scratchDir(t);
  const target = path.join(dir, 'history.json');

  const realWriteFile = fs.writeFile;
  const temps = [];
  t.mock.method(fs, 'writeFile', (file, ...rest) => {
    temps.push(String(file));
    return realWriteFile(file, ...rest);
  });

  const writes = ['A', 'B', 'C', 'D'].map(letter => letter.repeat(200_000));
  await Promise.all(writes.map(data => writeFileAtomic(target, data)));
  t.mock.restoreAll();

  assert.strictEqual(new Set(temps).size, writes.length, `temp files were shared: ${temps.join(', ')}`);
  for (const temp of temps) assert.strictEqual(path.dirname(temp), dir, 'beside the target, so rename stays on one filesystem');
  assert.ok(writes.includes(await fs.readFile(target, 'utf-8')), 'the result is one complete write, not a mixture');
  assert.deepStrictEqual(await filesIn(dir), ['history.json']);
});

test('a temp file is named after its target, so it is recognisable if a crash ever leaves one behind', async t => {
  const dir = await scratchDir(t);
  const target = path.join(dir, 'history.json');
  const realWriteFile = fs.writeFile;
  const temps = [];
  t.mock.method(fs, 'writeFile', (file, ...rest) => {
    temps.push(path.basename(String(file)));
    return realWriteFile(file, ...rest);
  });

  await writeFileAtomic(target, 'x');

  assert.match(temps[0], /^history\.json\..+\.tmp$/);
});
