import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import http from 'node:http';
import net from 'node:net';
import os from 'node:os';
import path from 'node:path';
import { once } from 'node:events';
import { startServer } from '../src/server.js';
import { config } from '../src/config.js';
import { logger } from '../src/logger.js';

/**
 * The local preview server (`node bin/cli.js serve`): it hands out the files under the reports directory, only to
 * the address it is given, and it must never read anything outside that directory.
 *
 * Requests are made with `http.request`, which sends the path exactly as written: `fetch` would tidy `/a/../b` and
 * `%2e%2e` away before the server ever saw them.
 */

/** A reports directory holding `files` (name -> text), with a secret beside it; both are removed after the test. */
function reportsRoot(t, files = {}) {
  const outer = fs.mkdtempSync(path.join(os.tmpdir(), 'preview-test-'));
  const root = path.join(outer, 'reports');
  fs.mkdirSync(root);
  fs.writeFileSync(path.join(outer, 'secret.txt'), 'the secret outside the reports directory');
  // A neighbour whose name starts like the reports directory's own: a check that only compares prefixes lets it in.
  fs.mkdirSync(path.join(outer, 'reports-private'));
  fs.writeFileSync(path.join(outer, 'reports-private', 'secret.txt'), 'the secret in a neighbour named like the reports directory');
  for (const [name, content] of Object.entries(files)) {
    const file = path.join(root, name);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, content);
  }
  t.after(() => fs.rmSync(outer, { recursive: true, force: true }));
  return root;
}

/** Closes `server` after the test, also when it is serving a connection that is still open (or never listened). */
function closeAfter(t, server) {
  t.after(async () => {
    server.closeAllConnections?.();
    await new Promise(resolve => server.close(() => resolve()));
  });
}

/** A reports directory holding `files` (name -> text), with a secret beside it, and a server on a free port. */
async function serve(t, files = {}) {
  const root = reportsRoot(t, files);
  const info = t.mock.method(logger, 'info', () => {});
  const server = startServer({ port: 0, host: '127.0.0.1', reportsDir: root });
  await once(server, 'listening');
  closeAfter(t, server);
  return { server, root, info, port: server.address().port };
}

/** One request, with the path as written. Resolves `{ status, headers, body }`. */
function request(port, rawPath, { method = 'GET' } = {}) {
  return new Promise((resolve, reject) => {
    const req = http.request({ host: '127.0.0.1', port, path: rawPath, method, agent: false }, res => {
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: Buffer.concat(chunks).toString('utf-8') }));
    });
    req.on('error', reject);
    req.setTimeout(5000, () => req.destroy(new Error(`no answer for ${method} ${rawPath}`)));
    req.end();
  });
}

test('the root is the dashboard, which must neither be cached nor sniffed', async t => {
  const { port } = await serve(t, { 'index.html': '<h1>Dashboard</h1>' });

  const res = await request(port, '/');

  assert.strictEqual(res.status, 200);
  assert.strictEqual(res.body, '<h1>Dashboard</h1>');
  assert.strictEqual(res.headers['content-type'], 'text/html; charset=utf-8');
  assert.strictEqual(res.headers['content-length'], String(Buffer.byteLength('<h1>Dashboard</h1>')));
  assert.strictEqual(res.headers['cache-control'], 'no-cache');
  assert.strictEqual(res.headers['x-content-type-options'], 'nosniff');
});

test('a file is sent with the type its extension says, and anything unknown as bytes', async t => {
  const types = {
    'page.html': 'text/html; charset=utf-8',
    'style.css': 'text/css; charset=utf-8',
    'app.js': 'application/javascript; charset=utf-8',
    'data.json': 'application/json; charset=utf-8',
    'feed.xml': 'application/xml; charset=utf-8',
    'report.md': 'text/markdown; charset=utf-8',
    'notes.txt': 'text/plain; charset=utf-8',
    'logo.svg': 'image/svg+xml',
    'photo.png': 'image/png',
    'photo.jpg': 'image/jpeg',
    'photo.jpeg': 'image/jpeg',
    'photo.webp': 'image/webp',
    'photo.avif': 'image/avif',
    'favicon.ico': 'image/x-icon',
    'font.woff2': 'font/woff2',
    'LOUD.JSON': 'application/json; charset=utf-8',
    'archive.bin': 'application/octet-stream',
    'noextension': 'application/octet-stream',
  };
  const { port } = await serve(t, Object.fromEntries(Object.keys(types).map(name => [name, `contents of ${name}`])));

  for (const [name, type] of Object.entries(types)) {
    const res = await request(port, `/${name}`);
    assert.strictEqual(res.status, 200, name);
    assert.strictEqual(res.headers['content-type'], type, name);
    assert.strictEqual(res.body, `contents of ${name}`, name);
  }
});

test('a name with escapes in it is looked up by what it says', async t => {
  const { port } = await serve(t, { 'weekly report.txt': 'with a space' });

  assert.strictEqual((await request(port, '/weekly%20report.txt')).body, 'with a space');
});

test('HEAD answers with the headers of the file and no body', async t => {
  const { port } = await serve(t, { 'data.json': '{"a":1}' });

  const res = await request(port, '/data.json', { method: 'HEAD' });

  assert.strictEqual(res.status, 200);
  assert.strictEqual(res.headers['content-type'], 'application/json; charset=utf-8');
  assert.strictEqual(res.headers['content-length'], '7');
  assert.strictEqual(res.body, '');
});

test('anything that is not a read is refused, and says which methods are allowed', async t => {
  const { port } = await serve(t, { 'index.html': 'hello' });

  for (const method of ['POST', 'PUT', 'DELETE', 'PATCH']) {
    const res = await request(port, '/index.html', { method });
    assert.strictEqual(res.status, 405, method);
    assert.strictEqual(res.headers.allow, 'GET, HEAD', method);
    assert.strictEqual(res.body, 'Method Not Allowed', method);
  }
});

test('no request reads anything outside the reports directory', async t => {
  const { port } = await serve(t, { 'index.html': 'inside', 'sub/page.html': 'also inside' });
  const attempts = [
    '/secret.txt', // beside the directory, not in it
    '/../secret.txt',
    '/sub/../../secret.txt',
    '/%2e%2e/secret.txt',
    '/..%2fsecret.txt',
    '/%2e%2e%2fsecret.txt',
    '/sub/..%2f..%2fsecret.txt',
    '/sub/%2e%2e/%2e%2e/secret.txt',
    '//../secret.txt',
    '/....//secret.txt',
    '/../reports-private/secret.txt', // a neighbour whose name starts with the name of the reports directory
    '/..%2freports-private%2fsecret.txt',
    '/%2e%2e/reports-private/secret.txt',
  ];

  for (const attempt of attempts) {
    const res = await request(port, attempt);
    assert.ok([403, 404].includes(res.status), `${attempt} was answered ${res.status}`);
    assert.ok(!res.body.includes('the secret'), `${attempt} gave away the file beside the directory`);
  }
  assert.strictEqual((await request(port, '/sub/page.html')).body, 'also inside', 'what is inside is still served');
});

test('a path that tidies up to the reports directory itself is the directory, not something outside it', async t => {
  const { port } = await serve(t, { 'index.html': 'the front page' });

  const res = await request(port, '/sub/..%2f');

  assert.strictEqual(res.status, 200);
  assert.strictEqual(res.body, 'the front page');
});

test('a directory is sent to its address with a slash, which is served by its index page', async t => {
  const { port, root } = await serve(t, { 'sub/index.html': '<p>sub index</p>', 'sub/other.html': 'other' });
  fs.mkdirSync(path.join(root, 'bare'));

  const moved = await request(port, '/sub');
  assert.strictEqual(moved.status, 301);
  assert.strictEqual(moved.headers.location, '/sub/');

  const served = await request(port, '/sub/');
  assert.strictEqual(served.status, 200);
  assert.strictEqual(served.body, '<p>sub index</p>');
  assert.strictEqual(served.headers['content-type'], 'text/html; charset=utf-8');

  assert.strictEqual((await request(port, '/bare/')).status, 404, 'a directory without an index page is not listed');
});

test('what is not there is a 404, whether the file or a directory on the way is missing', async t => {
  const { port } = await serve(t, { 'index.html': 'hello' });

  for (const missing of ['/missing.html', '/missing/deeper/file.html', '/index.html/under-a-file']) {
    const res = await request(port, missing);
    assert.strictEqual(res.status, 404, missing);
    assert.strictEqual(res.body, '404 Not Found', missing);
    assert.strictEqual(res.headers['content-type'], 'text/plain; charset=utf-8', missing);
  }
});

test('a request that cannot be read is a 400 and does not take the server down', async t => {
  const { port } = await serve(t, { 'index.html': 'still here' });

  const res = await request(port, '/%ZZ');

  assert.strictEqual(res.status, 400);
  assert.strictEqual(res.body, '400 Bad Request');
  assert.strictEqual((await request(port, '/')).body, 'still here', 'the next request is answered');
});

test('a file that cannot be read is a 500, and the log says which request it was', async t => {
  const { port, root } = await serve(t);
  const error = t.mock.method(logger, 'error', () => {});
  fs.mkdirSync(path.join(root, 'broken', 'index.html'), { recursive: true }); // an "index page" that is a directory

  const res = await request(port, '/broken/');

  assert.strictEqual(res.status, 500);
  assert.strictEqual(res.body, '500 Internal Server Error');
  assert.strictEqual(error.mock.callCount(), 1);
  assert.match(error.mock.calls[0].arguments[0], /^Failed to serve \/broken\/: /);
});

test('the startup message names the address and the directory, with the port that was really bound', async t => {
  const { info, root, port } = await serve(t);

  const said = info.mock.calls.map(call => call.arguments[0]).join('');

  assert.ok(said.includes('Chrome Ecosystem Updates Dashboard running at:'), said);
  assert.match(said, new RegExp(`http://127\\.0\\.0\\.1:${port}\\b`));
  assert.ok(said.includes(`Serving ${root}`), said);
});

test('a directory given relative to the working directory is served, and named by its full path', async t => {
  const root = reportsRoot(t, { 'index.html': 'found by a relative path' });
  const info = t.mock.method(logger, 'info', () => {});

  const server = startServer({ port: 0, host: '127.0.0.1', reportsDir: path.relative(process.cwd(), root) });
  await once(server, 'listening');
  closeAfter(t, server);

  assert.strictEqual((await request(server.address().port, '/')).body, 'found by a relative path');
  assert.ok(info.mock.calls.map(call => call.arguments[0]).join('').includes(`Serving ${root}`));
});

/** A port that is in use until the test is over: a plain socket server on a free port. */
async function takenPort(t) {
  const blocker = net.createServer();
  blocker.listen(0, '127.0.0.1');
  await once(blocker, 'listening');
  t.after(() => new Promise(resolve => blocker.close(() => resolve())));
  return blocker.address().port;
}

/** Puts `values` into the configuration for the length of the test. */
function configure(t, values) {
  const before = Object.fromEntries(Object.keys(values).map(key => [key, config[key]]));
  Object.assign(config, values);
  t.after(() => Object.assign(config, before));
}

/** Silences `logger.error` for the test, hands back its mock, and puts `process.exitCode` back afterwards. */
function expectErrors(t) {
  const error = t.mock.method(logger, 'error', () => {});
  const exitCode = process.exitCode;
  t.after(() => { process.exitCode = exitCode; });
  return error;
}

/** What `server` did first, `'listening'` or `'error'`; one that does neither fails the test rather than hanging it. */
function firstOutcome(server) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('the server neither listened nor failed')), 5000);
    server.once('listening', () => { clearTimeout(timer); resolve('listening'); });
    server.once('error', () => { clearTimeout(timer); resolve('error'); });
  });
}

test('a port that is taken is said so, with the next one to try, and fails the process', async t => {
  const first = await serve(t);
  const error = expectErrors(t);

  const second = startServer({ port: first.port, host: '127.0.0.1', reportsDir: first.root });
  await once(second, 'error');

  assert.strictEqual(process.exitCode, 1);
  assert.strictEqual(error.mock.callCount(), 1);
  assert.strictEqual(error.mock.calls[0].arguments[0], `Port ${first.port} is already in use. Try: npm run serve -- --port ${first.port + 1}`);
});

test('any other server error is logged with its message, and fails the process', async t => {
  const { server } = await serve(t);
  const error = expectErrors(t);

  server.emit('error', Object.assign(new Error('permission denied'), { code: 'EACCES' }));

  assert.strictEqual(process.exitCode, 1);
  assert.deepStrictEqual(error.mock.calls.map(call => call.arguments[0]), ['Server error: permission denied']);
});

test('with no directory given, the preview serves the reports directory of the configuration', async t => {
  // The test set-up has pointed `config.reportsDir` into a temporary directory; make sure of it before writing there.
  assert.ok(config.reportsDir.startsWith(os.tmpdir() + path.sep), config.reportsDir);
  fs.mkdirSync(config.reportsDir, { recursive: true });
  const file = path.join(config.reportsDir, 'configured.txt');
  fs.writeFileSync(file, 'from the configured directory');
  t.after(() => fs.rmSync(file, { force: true }));
  t.mock.method(logger, 'info', () => {});

  const server = startServer({ port: 0, host: '127.0.0.1' });
  await once(server, 'listening');
  closeAfter(t, server);

  assert.strictEqual((await request(server.address().port, '/configured.txt')).body, 'from the configured directory');
});

test('the port and the host that are asked for win over the configured ones, even a port of 0', async t => {
  configure(t, { port: await takenPort(t), host: '0.0.0.0' });
  expectErrors(t);
  t.mock.method(logger, 'info', () => {});

  const server = startServer({ port: 0, host: '127.0.0.1', reportsDir: reportsRoot(t) });
  const outcome = await firstOutcome(server);
  closeAfter(t, server);

  assert.strictEqual(outcome, 'listening', 'a port of 0 asks for a free port; it is not a missing one');
  assert.notStrictEqual(server.address().port, config.port);
  assert.strictEqual(server.address().address, '127.0.0.1', 'the preview is only open to this machine');
});

test('the configured port is the one that is tried when none is asked for', async t => {
  const taken = await takenPort(t);
  configure(t, { port: taken });
  const error = expectErrors(t);
  t.mock.method(logger, 'info', () => {});

  const server = startServer({ host: '127.0.0.1', reportsDir: reportsRoot(t) });
  const outcome = await firstOutcome(server);
  closeAfter(t, server);

  assert.strictEqual(outcome, 'error', 'the taken port of the configuration was tried');
  assert.match(error.mock.calls[0].arguments[0], new RegExp(`^Port ${taken} is already in use`));
});

test('the configured host is the one that is bound when none is asked for, and it is not a public one by default', async t => {
  configure(t, { host: '127.0.0.1' });
  expectErrors(t);
  t.mock.method(logger, 'info', () => {});

  const server = startServer({ port: 0, reportsDir: reportsRoot(t) });
  const outcome = await firstOutcome(server);
  closeAfter(t, server);

  assert.strictEqual(outcome, 'listening');
  assert.strictEqual(server.address().address, '127.0.0.1', 'with no host at all the server would be open to the network');
});
