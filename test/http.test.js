import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import http from 'node:http';
import { execFile } from 'node:child_process';
import { getEventListeners } from 'node:events';
import zlib from 'node:zlib';
import {
  fetchWithTimeout,
  fetchJson,
  readTextLimited,
  readJsonLimited,
  ResponseTooLargeError,
  mapWithConcurrency,
  redactUrl,
} from '../src/http.js';
import { logger } from '../src/logger.js';
import { snapshotProviderStats, resetProviderStats } from '../src/provider-stats.js';
import { makeResponse } from './_support/fetch-mock.js';

/**
 * These tests talk to real servers on 127.0.0.1 (which the hermetic guard
 * allows) because the behaviour under test - a deadline that keeps running
 * while a body is being read - cannot be observed through a mocked `fetch`.
 */

const httpModuleUrl = new URL('../src/http.js', import.meta.url).href;

/** Starts a server for one test and tears it down (dropping open sockets) afterwards. */
async function startServer(t, handler) {
  const hits = [];
  const server = http.createServer((req, res) => {
    hits.push(req.url);
    handler(req, res, hits.length);
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => new Promise(resolve => {
    server.closeAllConnections?.();
    server.close(() => resolve());
  }));
  return { url: `http://127.0.0.1:${server.address().port}`, hits };
}

/**
 * Fails fast instead of hanging the whole run when the behaviour under test
 * regresses into "waits forever".
 */
function withWatchdog(promise, ms = 3000, what = 'operation') {
  let timer;
  const watchdog = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error(`WATCHDOG: ${what} still pending after ${ms}ms`)), ms);
  });
  return Promise.race([promise, watchdog]).finally(() => clearTimeout(timer));
}

/** A handler that sends headers and a first chunk, then drips a byte forever. */
function dripForever(req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.write('start ');
  const timer = setInterval(() => res.write('x'), 20);
  res.on('close', () => clearInterval(timer));
}

// The deadlines below are a full second even though only the BODY is meant to
// time out: the headers have to arrive inside the same deadline, and a tighter one
// would make these tests fail whenever the machine is busy rather than when the
// code is wrong.

test('the deadline covers the body: a server that drips bytes forever cannot hang the caller', async t => {
  const server = await startServer(t, dripForever);
  const started = Date.now();

  const res = await fetchWithTimeout(server.url, { timeoutMs: 1000, retries: 0 });
  assert.strictEqual(res.status, 200, 'headers arrive inside the deadline');

  await assert.rejects(withWatchdog(res.text(), 5000, 'body read'), /timed out/);
  assert.ok(Date.now() - started < 4000, 'gave up near the 1s deadline, not after the watchdog');
});

test('a timeout while reading the body is reported as a timeout, naming the URL', async t => {
  const server = await startServer(t, dripForever);
  const res = await fetchWithTimeout(server.url, { timeoutMs: 1000, retries: 0 });

  const error = await withWatchdog(res.text(), 5000, 'body read').catch(e => e);
  assert.strictEqual(error.name, 'TimeoutError');
  assert.match(error.message, new RegExp(`${server.url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}.*1000ms`));
});

test('a caller-supplied signal also cancels a body that is still being read', async t => {
  const server = await startServer(t, dripForever);
  const controller = new AbortController();

  const res = await fetchWithTimeout(server.url, { timeoutMs: 5000, retries: 0, signal: controller.signal });
  const reading = withWatchdog(res.text(), 3000, 'body read');
  controller.abort(new Error('caller gave up'));

  await assert.rejects(reading, /caller gave up|aborted/i);
});

test('an already-aborted caller signal never touches the network', async t => {
  const server = await startServer(t, (req, res) => res.end('ok'));
  const controller = new AbortController();
  controller.abort();

  await assert.rejects(fetchWithTimeout(server.url, { signal: controller.signal }), /Aborted before request/);
  assert.deepStrictEqual(server.hits, []);
});

test('a response that finishes promptly is delivered intact', async t => {
  const server = await startServer(t, (req, res) => {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ hello: 'world' }));
  });

  const res = await fetchWithTimeout(server.url, { timeoutMs: 2000, retries: 0 });
  assert.deepStrictEqual(await res.json(), { hello: 'world' });
});

test('transient server errors are retried and the eventual response is returned', async t => {
  const server = await startServer(t, (req, res, hit) => {
    if (hit === 1) {
      res.writeHead(503, { 'retry-after': '0' });
      res.end('busy');
      return;
    }
    res.writeHead(200);
    res.end('recovered');
  });

  const res = await fetchWithTimeout(server.url, { timeoutMs: 2000, retries: 2 });
  assert.strictEqual(res.status, 200);
  assert.strictEqual(await res.text(), 'recovered');
  assert.strictEqual(server.hits.length, 2);
});

test('no response at all is a timeout error naming the deadline', async t => {
  const server = await startServer(t, () => { /* accept the request and never answer */ });
  await assert.rejects(
    withWatchdog(fetchWithTimeout(server.url, { timeoutMs: 150, retries: 0 }), 3000, 'request'),
    /timed out after 150ms/
  );
});

test('a response nobody reads is cancelled quietly when its deadline passes', async t => {
  // Many callers return on `!res.ok` without touching the body, so the deadline
  // firing on such a response must not surface as an unhandled rejection.
  const server = await startServer(t, dripForever);
  const problems = [];
  const record = error => problems.push(error);
  process.on('unhandledRejection', record);
  process.on('uncaughtException', record);
  t.after(() => {
    process.off('unhandledRejection', record);
    process.off('uncaughtException', record);
  });

  const res = await fetchWithTimeout(server.url, { timeoutMs: 1000, retries: 0 });
  assert.strictEqual(res.status, 200);
  await new Promise(resolve => setTimeout(resolve, 1500)); // well past the deadline

  assert.deepStrictEqual(problems.map(String), []);
});

test('a timeout is still a timeout when the caller also supplied a signal', async t => {
  const server = await startServer(t, () => { /* accept the request and never answer */ });
  const never = new AbortController();

  const error = await withWatchdog(
    fetchWithTimeout(server.url, { timeoutMs: 150, retries: 0, signal: never.signal }), 3000, 'request'
  ).catch(e => e);
  assert.strictEqual(error.name, 'TimeoutError');
  assert.match(error.message, /timed out after 150ms/);
});

test('a caller-supplied signal does not collect a listener per request', async t => {
  const server = await startServer(t, (req, res) => res.end('ok'));
  const longLived = new AbortController();

  for (let i = 0; i < 5; i++) {
    const res = await fetchWithTimeout(server.url, { timeoutMs: 5000, retries: 0, signal: longLived.signal });
    assert.strictEqual(await res.text(), 'ok');
  }

  assert.strictEqual(getEventListeners(longLived.signal, 'abort').length, 0);
});

// ---------------------------------------------------------------------------
// `deadline`: an absolute limit on the whole call, retries and waits included.
// ---------------------------------------------------------------------------

test('a deadline stops a long Retry-After from being waited out, and hands back the last response', async t => {
  const server = await startServer(t, (req, res) => {
    res.writeHead(503, { 'retry-after': '30' });
    res.end('busy');
  });

  const started = Date.now();
  const res = await withWatchdog(
    fetchWithTimeout(server.url, { timeoutMs: 5000, retries: 2, deadline: Date.now() + 2000 }), 6000, 'request'
  );

  assert.strictEqual(res.status, 503);
  assert.strictEqual(await res.text(), 'busy', 'the response was not discarded');
  assert.strictEqual(server.hits.length, 1, 'no retry that could not finish in time was attempted');
  assert.ok(Date.now() - started < 2000, `returned after ${Date.now() - started}ms instead of waiting 30s`);
});

test('without a deadline the same Retry-After is honoured (the deadline is what changes the behaviour)', async t => {
  const server = await startServer(t, (req, res, hit) => {
    if (hit === 1) {
      res.writeHead(503, { 'retry-after': '1' });
      res.end('busy');
      return;
    }
    res.end('recovered');
  });

  const started = Date.now();
  const res = await fetchWithTimeout(server.url, { timeoutMs: 5000, retries: 1 });
  assert.strictEqual(await res.text(), 'recovered');
  assert.ok(Date.now() - started >= 900, 'it really did wait for the Retry-After');
});

test('a deadline stops network-error retries from sleeping past it', async t => {
  const server = await startServer(t, req => req.socket.destroy());

  const started = Date.now();
  const error = await withWatchdog(
    fetchWithTimeout(server.url, { timeoutMs: 5000, retries: 5, deadline: Date.now() + 300 }), 6000, 'request'
  ).catch(e => e);

  assert.ok(error instanceof Error, 'it failed');
  assert.ok(!/WATCHDOG/.test(error.message), error.message);
  assert.strictEqual(server.hits.length, 1, 'the first back-off alone would have outlasted the deadline');
  assert.ok(Date.now() - started < 1500, `gave up after ${Date.now() - started}ms`);
});

test('a deadline bounds an attempt even when the per-attempt timeout is much longer', async t => {
  const server = await startServer(t, () => { /* never answers */ });

  const started = Date.now();
  const error = await withWatchdog(
    fetchWithTimeout(server.url, { timeoutMs: 60_000, retries: 0, deadline: Date.now() + 200 }), 3000, 'request'
  ).catch(e => e);

  assert.strictEqual(error.name, 'TimeoutError');
  assert.ok(Date.now() - started < 2500, `gave up after ${Date.now() - started}ms`);
});

test('a deadline that has already passed fails at once without touching the network', async t => {
  const server = await startServer(t, (req, res) => res.end('ok'));

  const error = await fetchWithTimeout(server.url, { timeoutMs: 5000, deadline: Date.now() - 1 }).catch(e => e);

  assert.strictEqual(error.name, 'TimeoutError');
  assert.deepStrictEqual(server.hits, []);
});

test('a deadline also bounds the body of the response it delivers', async t => {
  const server = await startServer(t, dripForever);

  const res = await fetchWithTimeout(server.url, { timeoutMs: 60_000, retries: 0, deadline: Date.now() + 1000 });
  assert.strictEqual(res.status, 200);
  const error = await withWatchdog(res.text(), 5000, 'body read').catch(e => e);
  assert.strictEqual(error.name, 'TimeoutError');
});

test('the 503 that is about to be retried has its body cancelled, so its connection is released at once', async t => {
  let markClosed;
  const firstResponseClosed = new Promise(resolve => { markClosed = resolve; });
  const server = await startServer(t, (req, res, hit) => {
    if (hit === 1) {
      res.writeHead(503, { 'retry-after': '0' });
      res.write('partial body that is never finished');
      res.on('close', markClosed);
      return;
    }
    res.end('recovered');
  });

  const res = await fetchWithTimeout(server.url, { timeoutMs: 5000, retries: 1 });
  assert.strictEqual(await res.text(), 'recovered');
  await withWatchdog(firstResponseClosed, 3000, 'the abandoned 503 to be hung up on');
});

test('a finished request does not keep the process alive for the rest of its deadline', async () => {
  // Every long LLM call asks for a 45-60s deadline. If that timer were allowed to
  // hold the event loop open, every CLI run would idle for a minute before exiting.
  const script = `
    import http from 'node:http';
    import { fetchWithTimeout } from ${JSON.stringify(httpModuleUrl)};
    const server = http.createServer((req, res) => res.end('ok'));
    server.listen(0, '127.0.0.1', async () => {
      const res = await fetchWithTimeout('http://127.0.0.1:' + server.address().port, { timeoutMs: 60000, retries: 0 });
      await res.text();
      server.closeAllConnections();
      server.close();
    });
  `;
  const started = Date.now();
  await new Promise((resolve, reject) => {
    execFile(process.execPath, ['--input-type=module', '-e', script], { timeout: 15_000 }, (error, stdout, stderr) => {
      if (error) reject(new Error(`child did not exit cleanly: ${error.message}\n${stderr}`));
      else resolve();
    });
  });
  assert.ok(Date.now() - started < 8_000, `process lingered for ${Date.now() - started}ms`);
});

test('mapWithConcurrency preserves order, bounds parallelism and captures errors', async () => {
  let running = 0;
  let peak = 0;
  const results = await mapWithConcurrency([1, 2, 3, 4, 5, 6], 2, async n => {
    running++;
    peak = Math.max(peak, running);
    await new Promise(resolve => setTimeout(resolve, 5));
    running--;
    if (n === 4) throw new Error('boom');
    return n * 10;
  });

  assert.strictEqual(peak, 2);
  assert.deepStrictEqual(results.map(r => r.value), [10, 20, 30, undefined, 50, 60]);
  assert.strictEqual(results[3].error.message, 'boom');
});

// ---------------------------------------------------------------------------
// Size-limited body readers
// ---------------------------------------------------------------------------

test('readTextLimited stops downloading at the cap and hangs up on the server', async t => {
  let markClosed;
  const serverSawClose = new Promise(resolve => { markClosed = resolve; });
  const server = await startServer(t, (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    const chunk = 'a'.repeat(16 * 1024);
    const timer = setInterval(() => res.write(chunk), 1); // an endless page
    res.on('close', () => { clearInterval(timer); markClosed(); });
  });

  const res = await fetchWithTimeout(server.url, { timeoutMs: 5000, retries: 0 });
  const text = await withWatchdog(readTextLimited(res, 100_000), 3000, 'limited read');

  assert.strictEqual(text.length, 100_000);
  await withWatchdog(serverSawClose, 3000, 'connection close');
});

test('readTextLimited measures what is delivered, so a gzip bomb is cut off too', async t => {
  const bomb = zlib.gzipSync(Buffer.alloc(30 * 1024 * 1024, 'a')); // ~30 KB on the wire, 30 MB inflated
  assert.ok(bomb.length < 100_000, 'the fixture really is tiny on the wire');
  const server = await startServer(t, (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html', 'content-encoding': 'gzip' });
    res.end(bomb);
  });

  const res = await fetchWithTimeout(server.url, { timeoutMs: 5000, retries: 0 });
  const text = await withWatchdog(readTextLimited(res, 50_000), 3000, 'limited read');
  assert.strictEqual(text.length, 50_000);
});

test('readTextLimited returns a short body whole, including when it is exactly at the cap', async t => {
  const server = await startServer(t, (req, res) => res.end('hello world'));
  for (const cap of [11, 12, 1000]) {
    const res = await fetchWithTimeout(server.url, { timeoutMs: 2000, retries: 0 });
    assert.strictEqual(await readTextLimited(res, cap), 'hello world', `cap ${cap}`);
  }
});

test('a cut inside a multi-byte character yields text, not an exception', async t => {
  const server = await startServer(t, (req, res) => res.end('€'.repeat(100))); // 3 bytes each
  const res = await fetchWithTimeout(server.url, { timeoutMs: 2000, retries: 0 });

  const text = await readTextLimited(res, 100);
  assert.ok(text.startsWith('€'.repeat(33)));
  assert.ok(text.length <= 34, `kept only what fits (got ${text.length} characters)`);
});

test('readJsonLimited parses a body within the cap, including one exactly at it', async t => {
  const body = JSON.stringify({ items: [1, 2, 3] });
  const server = await startServer(t, (req, res) => res.end(body));

  for (const cap of [Buffer.byteLength(body), 1000]) {
    const res = await fetchWithTimeout(server.url, { timeoutMs: 2000, retries: 0 });
    assert.deepStrictEqual(await readJsonLimited(res, cap), { items: [1, 2, 3] }, `cap ${cap}`);
  }
});

test('readJsonLimited refuses an oversized body instead of parsing a truncated one', async t => {
  const server = await startServer(t, (req, res) => res.end(JSON.stringify({ blob: 'x'.repeat(5000) })));
  const res = await fetchWithTimeout(server.url, { timeoutMs: 2000, retries: 0 });

  const error = await readJsonLimited(res, 1000).catch(e => e);
  assert.ok(error instanceof ResponseTooLargeError, `got ${error}`);
  assert.strictEqual(error.maxBytes, 1000);
  assert.match(error.message, /1000-byte limit/);
});

test('the limited readers also work on non-streaming responses such as test doubles', async () => {
  const double = body => ({ text: async () => body });
  assert.strictEqual(await readTextLimited(double('abcdef'), 4), 'abcd');
  assert.strictEqual(await readTextLimited(double('abc'), 4), 'abc');
  assert.deepStrictEqual(await readJsonLimited(double('{"a":1}'), 100), { a: 1 });
  await assert.rejects(readJsonLimited(double('{"a":1}'), 3), ResponseTooLargeError);
});

test('the limited readers reject a nonsensical cap rather than reading nothing', async () => {
  await assert.rejects(readTextLimited({ text: async () => 'x' }, 0), RangeError);
  await assert.rejects(readTextLimited({ text: async () => 'x' }, -5), RangeError);
});

test('fetchJson returns parsed data, and null for every kind of failure', async t => {
  const server = await startServer(t, (req, res) => {
    if (req.url === '/ok') return res.end('{"fine":true}');
    if (req.url === '/big') return res.end(JSON.stringify({ blob: 'x'.repeat(5000) }));
    if (req.url === '/bad') return res.end('not json');
    res.writeHead(404);
    res.end('{"fine":false}');
  });

  assert.deepStrictEqual(await fetchJson(`${server.url}/ok`, { retries: 0 }), { fine: true });
  assert.strictEqual(await fetchJson(`${server.url}/big`, { retries: 0, maxBytes: 1000 }), null);
  assert.strictEqual(await fetchJson(`${server.url}/bad`, { retries: 0 }), null);
  assert.strictEqual(await fetchJson(`${server.url}/missing`, { retries: 0 }), null);
  assert.strictEqual(await fetchJson('http://127.0.0.1:1/', { retries: 0, timeoutMs: 500 }), null);
});

// ---------------------------------------------------------------------------
// A secret that travels in a URL (Google Custom Search sends `key=`) must reach
// neither the verbose log nor an error message.
// ---------------------------------------------------------------------------

// Deliberately not shaped like any known key prefix (sk-, AIza, ghp_...), so only
// the `key=` rule can be what masks it.
const URL_SECRET = 'opaque-secret-value-0123456789';

/** Turns verbose logging on and returns the lines the code prints while it is. */
function captureDebugLog(t) {
  const lines = [];
  t.mock.method(console, 'log', (...args) => { lines.push(args.join(' ')); });
  logger.setVerbose(true);
  t.after(() => logger.setVerbose(false));
  return lines;
}

/** Replaces `fetch` for one test with `handler(url, callNumber, init)`. */
function stubFetch(t, handler) {
  const original = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = async (url, init) => handler(String(url), ++calls, init);
  t.after(() => { globalThis.fetch = original; });
}

const keyedUrl = (base = 'https://search.example/customsearch/v1') =>
  `${base}?key=${URL_SECRET}&cx=engine1&q=hello`;

test('redactUrl masks key-like query parameters and leaves the rest of the URL readable', () => {
  assert.strictEqual(redactUrl(keyedUrl()), 'https://search.example/customsearch/v1?key=[redacted]&cx=engine1&q=hello');
  assert.strictEqual(
    redactUrl(new URL(`https://x.example/a?q=1&api_key=${URL_SECRET}&token=${URL_SECRET}`)),
    'https://x.example/a?q=1&api_key=[redacted]&token=[redacted]'
  );
  assert.strictEqual(redactUrl('https://x.example/a?q=1#frag'), 'https://x.example/a?q=1#frag', 'nothing to hide, nothing changed');
});

test('a key in the URL is masked in the log line for a retried server error', async t => {
  const lines = captureDebugLog(t);
  stubFetch(t, (url, call) => call === 1
    ? makeResponse({ status: 503, headers: { 'retry-after': '0' } })
    : makeResponse({ status: 200, text: 'ok' }));

  const res = await fetchWithTimeout(keyedUrl(), { timeoutMs: 2000, retries: 1, label: 'Google Custom Search' });
  assert.strictEqual(await res.text(), 'ok');

  const line = lines.find(l => /retrying in/.test(l));
  assert.ok(line, `no retry line was logged: ${JSON.stringify(lines)}`);
  assert.ok(!line.includes(URL_SECRET), line);
  assert.match(line, /HTTP 503 from https:\/\/search\.example\/customsearch\/v1\?key=\[redacted\]&cx=engine1&q=hello; retrying/);
});

test('a key in the URL is masked when there is no time left to retry', async t => {
  const lines = captureDebugLog(t);
  stubFetch(t, () => makeResponse({ status: 503, headers: { 'retry-after': '30' } }));

  const res = await fetchWithTimeout(keyedUrl(), { timeoutMs: 2000, retries: 2, deadline: Date.now() + 1000 });
  assert.strictEqual(res.status, 503);

  const line = lines.find(l => /no time left to retry/.test(l));
  assert.ok(line, `no "no time left" line was logged: ${JSON.stringify(lines)}`);
  assert.ok(!line.includes(URL_SECRET), line);
  assert.match(line, /key=\[redacted\]&cx=engine1/);
});

test('a key is masked in the log line for a network error that is being retried, wherever it appears', async t => {
  const lines = captureDebugLog(t);
  // Some errors quote the URL they were given; the message is masked as well.
  stubFetch(t, url => { throw new Error(`socket closed while fetching ${url}`); });

  await assert.rejects(fetchWithTimeout(keyedUrl(), { timeoutMs: 2000, retries: 1 }), /socket closed/);

  const line = lines.find(l => /Network error/.test(l));
  assert.ok(line, `no network-error line was logged: ${JSON.stringify(lines)}`);
  assert.ok(!line.includes(URL_SECRET), line);
  assert.strictEqual(line.split('key=[redacted]').length - 1, 2, `both mentions of the URL are masked: ${line}`);
});

test('the timeout error names the URL without its key', async t => {
  // Like a real fetch, the stub gives up when its signal aborts.
  stubFetch(t, (url, call, init) => new Promise((resolve, reject) => {
    init.signal.addEventListener('abort', () => reject(init.signal.reason), { once: true });
  }));

  // The client's timers are unref'd and a stub holds no socket, so nothing but this watchdog's (ref'd) timer keeps
  // the process alive while the request waits to time out; without it Node 20 ends the test early ("the event loop
  // has already resolved") and cancels every test after it in this file.
  const error = await withWatchdog(
    fetchWithTimeout(keyedUrl(), { timeoutMs: 100, retries: 0, label: 'Google Custom Search' }), 3000, 'request'
  ).catch(e => e);

  assert.strictEqual(error.name, 'TimeoutError');
  assert.ok(!error.message.includes(URL_SECRET), error.message);
  assert.match(error.message, /\[Google Custom Search\] Request to https:\/\/search\.example\/customsearch\/v1\?key=\[redacted\]&cx=engine1&q=hello timed out after 100ms/);
});

test('the oversized-response error names the URL without its key', () => {
  const error = new ResponseTooLargeError(1000, keyedUrl());
  assert.ok(!error.message.includes(URL_SECRET), error.message);
  assert.match(error.message, /1000-byte limit \(https:\/\/search\.example\/customsearch\/v1\?key=\[redacted\]&cx=engine1&q=hello\)/);
});

test('fetchJson masks the key both in the URL and in the error it logs', async t => {
  const lines = captureDebugLog(t);
  stubFetch(t, url => { throw new Error(`could not reach ${url}`); });

  assert.strictEqual(await fetchJson(keyedUrl(), { retries: 0, label: 'Google Custom Search' }), null);

  const line = lines.find(l => /JSON fetch failed/.test(l));
  assert.ok(line, `no failure line was logged: ${JSON.stringify(lines)}`);
  assert.ok(!line.includes(URL_SECRET), line);
  assert.strictEqual(line.split('key=[redacted]').length - 1, 2, `both mentions of the URL are masked: ${line}`);
});

// What the providers answered (src/provider-stats.js) is counted where a response leaves the client.

const PROVIDER_URL = 'https://api.github.com/search/issues?q=hello';

/** Starts a test with no provider counted, and leaves none behind for the next. */
function freshProviderStats(t) {
  resetProviderStats();
  t.after(resetProviderStats);
}

test('a response that is handed to the caller is counted once, under the provider it was asked of', async t => {
  freshProviderStats(t);
  stubFetch(t, () => makeResponse({ status: 401 }));

  const res = await fetchWithTimeout(PROVIDER_URL, { retries: 0 });

  assert.strictEqual(res.status, 401);
  assert.deepStrictEqual(snapshotProviderStats(), { github: { responses: 1, clientErrors: 1, statuses: { 401: 1 } } });
});

test('the address a request is made to may be a URL object', async t => {
  freshProviderStats(t);
  stubFetch(t, () => makeResponse({ status: 200 }));

  await fetchWithTimeout(new URL('https://api.search.brave.com/res/v1/web/search?q=hello'), { retries: 0 });

  assert.deepStrictEqual(snapshotProviderStats(), { brave: { responses: 1, clientErrors: 0, statuses: { 200: 1 } } });
});

test('a response that is retried is not counted: only the one that is handed over is', async t => {
  freshProviderStats(t);
  stubFetch(t, (url, call) => call === 1
    ? makeResponse({ status: 429, headers: { 'retry-after': '0' } })
    : makeResponse({ status: 200 }));

  const res = await fetchWithTimeout('https://api.twitter.com/2/tweets/search/recent?query=a', { retries: 2 });

  assert.strictEqual(res.status, 200);
  assert.deepStrictEqual(snapshotProviderStats(), { x: { responses: 1, clientErrors: 0, statuses: { 200: 1 } } });
});

test('when the retries run out the last response is handed over, and counted once', async t => {
  freshProviderStats(t);
  let calls = 0;
  stubFetch(t, () => { calls++; return makeResponse({ status: 429, headers: { 'retry-after': '0' } }); });

  const res = await fetchWithTimeout(PROVIDER_URL, { retries: 2 });

  assert.strictEqual(res.status, 429);
  assert.strictEqual(calls, 3, 'three requests were made');
  assert.deepStrictEqual(snapshotProviderStats(), { github: { responses: 1, clientErrors: 1, statuses: { 429: 1 } } });
});

test('a response that there was no time to retry is handed over, and counted', async t => {
  freshProviderStats(t);
  stubFetch(t, () => makeResponse({ status: 503, headers: { 'retry-after': '30' } }));

  const res = await fetchWithTimeout(PROVIDER_URL, { retries: 2, deadline: Date.now() + 1000 });

  assert.strictEqual(res.status, 503);
  assert.deepStrictEqual(snapshotProviderStats(), { github: { responses: 1, clientErrors: 0, statuses: { 503: 1 } } });
});

test('a request that fails before any response arrives has nothing to count', async t => {
  freshProviderStats(t);
  stubFetch(t, () => { throw new Error('socket closed'); });
  await assert.rejects(fetchWithTimeout(PROVIDER_URL, { retries: 0 }), /socket closed/);
  assert.deepStrictEqual(snapshotProviderStats(), {}, 'a network error is not an answer');

  // Like a real fetch, this one gives up when its signal aborts. The watchdog's ref'd timer keeps the process alive
  // meanwhile (the client's own timers are unref'd), as in the test of the timeout error above.
  stubFetch(t, (url, call, init) => new Promise((resolve, reject) => {
    init.signal.addEventListener('abort', () => reject(init.signal.reason), { once: true });
  }));
  const error = await withWatchdog(fetchWithTimeout(PROVIDER_URL, { retries: 0, timeoutMs: 50 }), 3000, 'request').catch(e => e);
  assert.strictEqual(error.name, 'TimeoutError');
  assert.deepStrictEqual(snapshotProviderStats(), {}, 'nor is a timeout');
});

test('a response from a host that is not a provider is not counted', async t => {
  freshProviderStats(t);
  stubFetch(t, () => makeResponse({ status: 403 }));

  await fetchWithTimeout('https://example.com/some/page', { retries: 0 });
  await fetchWithTimeout('https://hn.algolia.com/api/v1/search?query=a', { retries: 0 });

  assert.deepStrictEqual(snapshotProviderStats(), {});
});
