import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import http from 'node:http';
import { installFetchMock, makeResponse } from './_support/fetch-mock.js';
import { PUBLIC_TEST_ADDRESS } from './_support/setup.js';
import {
  UnsafeUrlError,
  NoRedirectError,
  isPublicHostname,
  assertPublicUrl,
  fetchPublicUrl,
  resolveRedirect,
  setHostResolver,
} from '../src/safe-fetch.js';

const PUBLIC_HOSTS = [
  'example.com', 'developer.chrome.com', 'WWW.Chromium.org', 'xn--bcher-kva.example',
  '93.184.216.34', '8.8.8.8',
  // The ranges next to the private ones are public and must stay reachable.
  '172.15.255.255', '172.32.0.1', '100.63.255.255', '100.128.0.1', '168.63.129.17', '169.253.255.255',
  '2606:4700:4700::1111', '[2606:4700:4700::1111]', '::ffff:8.8.8.8',
  // neighbours of the newly refused IPv6 ranges
  '2606:4700::1', '2001:4860:4860::8888', '4000::1',
];

const NON_PUBLIC_HOSTS = [
  // loopback, including every spelling that has been used to dodge a name check
  'localhost', 'LOCALHOST', 'localhost.', 'localhost..', 'app.localhost', 'app.localhost.',
  '127.0.0.1', '127.255.255.255', '::1', '[::1]', '::ffff:127.0.0.1', '::ffff:7f00:1',
  // unspecified / "this network" (Linux connects 0.0.0.0 to the local host)
  '0.0.0.0', '0.1.2.3', '::',
  // private ranges, at both edges
  '10.0.0.1', '10.255.255.255', '172.16.0.1', '172.31.255.255', '192.168.0.1', '192.168.255.255',
  // link-local and the cloud metadata services
  '169.254.169.254', '169.254.0.1', 'fe80::1', 'fe80::1%en0', 'fd00:ec2::254',
  '168.63.129.16', '100.100.100.200', '100.64.0.1', 'metadata.google.internal', 'metadata.google.internal.',
  // reserved, documentation, multicast, broadcast
  '192.0.0.192', '198.18.0.1', '192.0.2.1', '198.51.100.1', '203.0.113.1', '224.0.0.1', '240.0.0.1',
  '255.255.255.255', '2001:db8::1', 'ff02::1', 'fc00::1', 'fdff::1',
  // transition forms that carry an IPv4 address inside an IPv6 one
  '64:ff9b::7f00:1', '2002:7f00:1::1', '2001:0:4136:e378:8000:63bf:3fff:fdd2',
  '::7f00:1', '::127.0.0.1', '::8.8.8.8',                   // IPv4-compatible (deprecated)
  '::ffff:0:7f00:1', '::ffff:0:127.0.0.1', '::ffff:0:8.8.8.8', // IPv4-translated
  // deprecated site-local and the newer documentation range
  'fec0::1', 'feff::1', '3fff::1', '3fff:fff:ffff::1',
  // names that exist only on private networks
  'intranet', 'printer', 'nas.local', 'host.lan', 'router.home.arpa', 'svc.internal', 'wiki.corp', 'x.localdomain',
  // nothing at all
  '', ' ', '.',
];

test('isPublicHostname accepts public names and addresses, including those beside private ranges', () => {
  for (const host of PUBLIC_HOSTS) assert.strictEqual(isPublicHostname(host), true, host);
});

test('isPublicHostname refuses loopback, private, link-local, metadata and internal-only hosts', () => {
  for (const host of NON_PUBLIC_HOSTS) assert.strictEqual(isPublicHostname(host), false, JSON.stringify(host));
});

test('a trailing dot does not turn a private host into a public one (regression: `localhost.` was fetched)', () => {
  for (const host of ['localhost.', '127.0.0.1.', 'metadata.google.internal.', 'intranet.']) {
    assert.strictEqual(isPublicHostname(host), false, host);
  }
});

const URL_VERDICTS = [
  ['https://example.com/a', true],
  ['http://example.com:8080/a?x=1#y', true],
  ['https://[2606:4700:4700::1111]/', true],
  // schemes other than http(s)
  ['file:///etc/passwd', false],
  ['ftp://example.com/', false],
  ['gopher://example.com/', false],
  ['data:text/html,hi', false],
  ['javascript:alert(1)', false],
  ['not a url', false],
  ['//example.com/x', false],
  ['', false],
  // loopback in every notation the URL parser normalises to a dotted quad or IPv6 form
  ['http://127.0.0.1/', false],
  ['http://localhost:3000/', false],
  ['http://localhost./', false],
  ['http://2130706433/', false],
  ['http://0x7f.1/', false],
  ['http://0177.0.0.1/', false],
  ['http://127.1/', false],
  ['http://[::1]/', false],
  ['http://[::ffff:127.0.0.1]/', false],
  ['http://[::ffff:7f00:1]/', false],
  // metadata services and private networks
  ['http://169.254.169.254/latest/meta-data/', false],
  ['http://[fd00:ec2::254]/latest/meta-data/', false],
  ['http://metadata.google.internal/computeMetadata/v1/', false],
  ['http://100.100.100.200/latest/meta-data/', false],
  ['http://10.0.0.1/', false],
  // the host is whatever follows the userinfo / precedes the fragment
  ['http://example.com@127.0.0.1/', false],
  ['http://user:pass@169.254.169.254/', false],
  ['http://127.0.0.1#@example.com/', false],
];

test('assertPublicUrl applies the policy to whole URLs, whatever their notation', async () => {
  for (const [url, expected] of URL_VERDICTS) {
    const verdict = await assertPublicUrl(url).then(() => true, () => false);
    assert.strictEqual(verdict, expected, url);
  }
});

test('assertPublicUrl names the reason when it refuses', async () => {
  await assert.rejects(assertPublicUrl('file:///etc/passwd'), error => {
    assert.ok(error instanceof UnsafeUrlError);
    assert.match(error.message, /scheme file:/);
    return true;
  });
  await assert.rejects(assertPublicUrl('http://localhost./'), /non-public host localhost\./);
  await assert.rejects(assertPublicUrl('nonsense'), /Not a valid URL/);
});

const publicResolver = async () => [{ address: PUBLIC_TEST_ADDRESS, family: 4 }];
const resolverMustNotRun = async host => { throw new Error(`resolver should not have been asked about ${host}`); };

test('assertPublicUrl accepts a name that resolves only to public addresses', async () => {
  const url = await assertPublicUrl('https://blog.example/post', { resolve: publicResolver });
  assert.strictEqual(url.href, 'https://blog.example/post');

  // Resolvers may hand back plain strings and IPv6 answers too.
  await assertPublicUrl('https://blog.example/', { resolve: async () => ['93.184.216.34', '2606:4700:4700::1111'] });
});

test('assertPublicUrl refuses a name if ANY address it resolves to is non-public', async () => {
  const answers = {
    'only a private address': [{ address: '10.0.0.5', family: 4 }],
    'loopback (nip.io style)': [{ address: '127.0.0.1', family: 4 }],
    'cloud metadata': [{ address: '169.254.169.254', family: 4 }],
    'a public address next to a private one': [{ address: PUBLIC_TEST_ADDRESS, family: 4 }, { address: '192.168.1.10', family: 4 }],
    'a public IPv6 address next to a unique-local one': [{ address: '2606:4700:4700::1111', family: 6 }, { address: 'fd00:ec2::254', family: 6 }],
    'an IPv4-mapped loopback': [{ address: '::ffff:127.0.0.1', family: 6 }],
    'a plain-string answer': ['169.254.169.254'],
  };
  for (const [label, answer] of Object.entries(answers)) {
    await assert.rejects(
      assertPublicUrl('https://rebind.example/', { resolve: async () => answer }),
      error => error instanceof UnsafeUrlError && /non-public address/.test(error.message),
      label
    );
  }
});

test('assertPublicUrl needs no lookup for literal addresses, and makes none for refused names', async () => {
  // A public literal is accepted without asking DNS anything.
  await assertPublicUrl('http://8.8.8.8/', { resolve: resolverMustNotRun });
  // Refused on syntax alone, so the resolver is never consulted (and never leaks the name).
  for (const url of ['http://127.0.0.1/', 'http://localhost./', 'http://intranet/', 'http://[::1]/']) {
    await assert.rejects(assertPublicUrl(url, { resolve: resolverMustNotRun }), UnsafeUrlError, url);
  }
});

test('a failed lookup is an ordinary error, distinguishable from a refusal', async () => {
  const notFound = Object.assign(new Error('getaddrinfo ENOTFOUND gone.example'), { code: 'ENOTFOUND' });
  const error = await assertPublicUrl('https://gone.example/', { resolve: async () => { throw notFound; } }).catch(e => e);
  assert.ok(!(error instanceof UnsafeUrlError));
  assert.match(error.message, /Could not resolve gone\.example: ENOTFOUND/);

  await assert.rejects(assertPublicUrl('https://empty.example/', { resolve: async () => [] }), /no addresses/);
});

test('the test harness answers hostname lookups itself, so the suite never touches real DNS', async () => {
  // `this-name-does-not-exist.invalid` can never resolve for real; the stub makes it public.
  const url = await assertPublicUrl('https://this-name-does-not-exist.invalid/');
  assert.strictEqual(url.hostname, 'this-name-does-not-exist.invalid');
});

// ---------------------------------------------------------------------------
// fetchPublicUrl: redirects are followed here so that every hop is checked
// ---------------------------------------------------------------------------

/**
 * installFetchMock, plus a record of the options each request was made with.
 * Call it at most once per test: restoring a second install would put the
 * first one back as `globalThis.fetch` and leak it into the tests that follow.
 */
let mockActive = false;
function mockFetch(t, routes) {
  assert.ok(!mockActive, 'mockFetch() called twice in one test');
  mockActive = true;
  const mock = installFetchMock(routes);
  const inner = globalThis.fetch;
  const inits = [];
  globalThis.fetch = (input, init) => {
    inits.push(init);
    return inner(input, init);
  };
  t.after(() => {
    mock.restore();
    mockActive = false;
  });
  return { calls: mock.calls, inits };
}

const redirect = (match, location, status = 302) => ({ match, status, headers: { location }, text: 'moved' });

test('fetchPublicUrl returns an ordinary response and does not let fetch follow redirects by itself', async t => {
  const { calls, inits } = mockFetch(t, [{ match: 'https://blog.example/post', text: 'hello' }]);

  const res = await fetchPublicUrl('https://blog.example/post', { retries: 0 });
  assert.strictEqual(await res.text(), 'hello');
  assert.deepStrictEqual(calls, ['https://blog.example/post']);
  assert.strictEqual(inits[0].redirect, 'manual');
});

test('fetchPublicUrl follows redirects hop by hop, resolving relative locations', async t => {
  const { calls } = mockFetch(t, [
    redirect('https://a.example/start', '/next'),
    redirect('https://a.example/next', 'https://b.example/final', 301),
    { match: 'https://b.example/final', text: 'done' },
  ]);

  const res = await fetchPublicUrl('https://a.example/start', { retries: 0 });
  assert.strictEqual(await res.text(), 'done');
  assert.deepStrictEqual(calls, ['https://a.example/start', 'https://a.example/next', 'https://b.example/final']);
});

test('fetchPublicUrl refuses a redirect to an internal target BEFORE connecting to it', async t => {
  const targets = [
    'http://127.0.0.1:8080/secret',
    'http://localhost./secret',
    'http://169.254.169.254/latest/meta-data/',
    'http://[::1]/',
    'http://[fd00:ec2::254]/latest/meta-data/',
    'http://10.1.2.3/',
    'http://metadata.google.internal/computeMetadata/v1/',
    'http://2130706433/',
    '//127.0.0.1/protocol-relative',
    'file:///etc/passwd',
  ];
  const starts = targets.map((_, i) => `https://start${i}.example/`);
  const { calls } = mockFetch(t, targets.map((target, i) => redirect(starts[i], target)));

  for (const [i, target] of targets.entries()) {
    await assert.rejects(fetchPublicUrl(starts[i], { retries: 0 }), UnsafeUrlError, target);
  }
  assert.deepStrictEqual(calls, starts, 'only the starting URLs were requested; no redirect target ever was');
});

test('fetchPublicUrl refuses a redirect to a name that resolves to a private address', async t => {
  const restore = setHostResolver(async host =>
    host === 'rebind.example' ? [{ address: '10.0.0.5', family: 4 }] : [{ address: PUBLIC_TEST_ADDRESS, family: 4 }]
  );
  t.after(restore);
  const { calls } = mockFetch(t, [redirect('https://a.example/start', 'https://rebind.example/admin')]);

  await assert.rejects(
    fetchPublicUrl('https://a.example/start', { retries: 0 }),
    error => error instanceof UnsafeUrlError && /rebind\.example.*10\.0\.0\.5/.test(error.message)
  );
  assert.deepStrictEqual(calls, ['https://a.example/start']);
});

test('fetchPublicUrl refuses a non-public starting URL without making any request', async t => {
  const { calls } = mockFetch(t, []);
  await assert.rejects(fetchPublicUrl('http://169.254.169.254/latest/meta-data/'), UnsafeUrlError);
  assert.deepStrictEqual(calls, []);
});

test('fetchPublicUrl gives up on a redirect loop', async t => {
  const { calls } = mockFetch(t, [redirect('https://loop.example/', 'https://loop.example/')]);
  await assert.rejects(fetchPublicUrl('https://loop.example/', { retries: 0, maxRedirects: 3 }), /Too many redirects \(more than 3\)/);
  assert.strictEqual(calls.length, 4, 'the first request plus three redirects');
});

test('fetchPublicUrl hands back a redirect that has nowhere to go, for the caller to treat as a failure', async t => {
  mockFetch(t, [{ match: 'https://odd.example/', status: 302, text: '' }]);
  const res = await fetchPublicUrl('https://odd.example/', { retries: 0 });
  assert.strictEqual(res.status, 302);
  assert.strictEqual(res.ok, false);
});

// ---------------------------------------------------------------------------
// The same guarantees against real servers: the forbidden one is never contacted.
// ---------------------------------------------------------------------------

async function startServer(t, handler) {
  const hits = [];
  const server = http.createServer((req, res) => {
    hits.push(req.url);
    handler(req, res);
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => new Promise(resolve => {
    server.closeAllConnections?.();
    server.close(() => resolve());
  }));
  return { port: server.address().port, hits };
}

test('with the default policy, a server on loopback is never contacted - however its address is written', async t => {
  const secret = await startServer(t, (req, res) => res.end('TOP SECRET'));
  for (const host of ['127.0.0.1', 'localhost', 'localhost.', '[::ffff:127.0.0.1]', '2130706433', '0x7f.1']) {
    const port = host === '0x7f.1' || host === '2130706433' ? '' : `:${secret.port}`;
    await assert.rejects(fetchPublicUrl(`http://${host}${port}/secret`, { retries: 0 }), UnsafeUrlError, host);
  }
  assert.deepStrictEqual(secret.hits, []);
});

test('a public-looking first hop cannot bounce the crawler to a loopback server', async t => {
  const secret = await startServer(t, (req, res) => res.end('TOP SECRET'));
  const front = await startServer(t, (req, res) => {
    res.writeHead(302, { location: `http://localhost.:${secret.port}/secret` });
    res.end();
  });

  // Pretend the front server is public (it is on loopback, so the real policy would refuse it).
  const frontUrl = `http://127.0.0.1:${front.port}/start`;
  const assertUrl = url => (url === frontUrl ? undefined : assertPublicUrl(url));

  await assert.rejects(fetchPublicUrl(frontUrl, { retries: 0, assertUrl }), /non-public host localhost\./);
  assert.deepStrictEqual(front.hits, ['/start'], 'the front server was reached');
  assert.deepStrictEqual(secret.hits, [], 'the secret server was not');
});

test('one deadline covers the whole redirect chain, not each hop separately', async t => {
  // Seven hops of 150ms each fit comfortably inside a per-hop 600ms timeout, so a
  // chain only fails if the budget is shared.
  const chain = await startServer(t, (req, res) => {
    const hop = Number(req.url.split('/').pop());
    setTimeout(() => {
      if (hop >= 7) return res.end('end of the line');
      res.writeHead(302, { location: `/hop/${hop + 1}` });
      res.end();
    }, 150);
  });
  const permissive = async () => {};

  const started = Date.now();
  await assert.rejects(
    fetchPublicUrl(`http://127.0.0.1:${chain.port}/hop/0`, { retries: 0, timeoutMs: 600, maxRedirects: 20, assertUrl: permissive }),
    /timed out/
  );
  assert.ok(Date.now() - started < 1500, `gave up after ${Date.now() - started}ms`);
});

// ---------------------------------------------------------------------------
// One deadline for the whole exchange: lookups, retries and the waits between them.
// ---------------------------------------------------------------------------

const permissive = async () => {};

test('a name lookup that never answers cannot outlast the deadline', async t => {
  const restore = setHostResolver(() => new Promise(() => { /* never settles */ }));
  t.after(restore);
  const { calls } = mockFetch(t, []);

  const started = Date.now();
  const error = await Promise.race([
    fetchPublicUrl('https://hung-dns.example/', { timeoutMs: 200, retries: 0 }).catch(e => e),
    new Promise(resolve => setTimeout(() => resolve(new Error('WATCHDOG: still waiting for DNS')), 3000)),
  ]);

  assert.strictEqual(error.name, 'TimeoutError', String(error));
  assert.match(error.message, /hung-dns\.example.*timed out after 200ms/);
  assert.ok(Date.now() - started < 2000);
  assert.deepStrictEqual(calls, [], 'nothing was requested');
});

test('a lookup that answers after the deadline has passed does not surface as an unhandled rejection', async t => {
  const problems = [];
  const record = error => problems.push(error);
  process.on('unhandledRejection', record);
  t.after(() => process.off('unhandledRejection', record));
  const restore = setHostResolver(() => new Promise((_, reject) => setTimeout(() => reject(new Error('late failure')), 300)));
  t.after(restore);
  mockFetch(t, []);

  const error = await fetchPublicUrl('https://slow-dns.example/', { timeoutMs: 100, retries: 0 }).catch(e => e);
  assert.strictEqual(error.name, 'TimeoutError');
  await new Promise(resolve => setTimeout(resolve, 600)); // let the late rejection happen

  assert.deepStrictEqual(problems.map(String), []);
});

test('a server cannot stretch the exchange past its deadline with a long Retry-After', async t => {
  const server = await startServer(t, (req, res) => {
    res.writeHead(503, { 'retry-after': '30' });
    res.end('busy');
  });

  const started = Date.now();
  const res = await fetchPublicUrl(`http://127.0.0.1:${server.port}/`, { timeoutMs: 1500, retries: 2, assertUrl: permissive });

  assert.strictEqual(res.status, 503);
  assert.strictEqual(server.hits.length, 1);
  assert.ok(Date.now() - started < 1500, `returned after ${Date.now() - started}ms`);
});

test('retries still happen when they fit inside the deadline', async t => {
  const server = await startServer(t, (req, res) => {
    if (server.hits.length === 1) {
      res.writeHead(503, { 'retry-after': '0' });
      res.end('busy');
      return;
    }
    res.end('recovered');
  });

  const res = await fetchPublicUrl(`http://127.0.0.1:${server.port}/`, { timeoutMs: 5000, retries: 1, assertUrl: permissive });
  assert.strictEqual(await res.text(), 'recovered');
  assert.strictEqual(server.hits.length, 2);
});

test('the deadline also covers reading the body of the final response', async t => {
  const server = await startServer(t, (req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.write('start ');
    const timer = setInterval(() => res.write('x'), 20);
    res.on('close', () => clearInterval(timer));
  });

  const res = await fetchPublicUrl(`http://127.0.0.1:${server.port}/`, { timeoutMs: 1000, retries: 0, assertUrl: permissive });
  const error = await Promise.race([
    res.text().catch(e => e),
    new Promise(resolve => setTimeout(() => resolve(new Error('WATCHDOG: body never timed out')), 5000)),
  ]);
  assert.strictEqual(error.name, 'TimeoutError', String(error));
});

// ---------------------------------------------------------------------------
// Redirects: a Location is decoded the way `fetch` itself would decode it.
// ---------------------------------------------------------------------------

/** What undici reports for a header whose bytes are UTF-8: one character per byte. */
const asHeaderBytes = text => Buffer.from(text, 'utf8').toString('latin1');

test('a raw UTF-8 Location is followed to the right place instead of a mojibake one', async t => {
  const { calls } = mockFetch(t, [
    redirect('https://a.example/start', asHeaderBytes('https://b.example/café/ñandú?q=ü')),
    { match: 'https://b.example/', text: 'arrived' },
  ]);

  const res = await fetchPublicUrl('https://a.example/start', { retries: 0 });
  assert.strictEqual(await res.text(), 'arrived');
  assert.deepStrictEqual(calls, [
    'https://a.example/start',
    'https://b.example/caf%C3%A9/%C3%B1and%C3%BA?q=%C3%BC',
  ]);
});

test('the same, against a real server that sends the bytes raw', async t => {
  const server = await startServer(t, (req, res) => {
    if (req.url === '/start') {
      res.writeHead(302, { location: asHeaderBytes('/café') });
      res.end();
      return;
    }
    res.end('arrived');
  });

  const res = await fetchPublicUrl(`http://127.0.0.1:${server.port}/start`, { retries: 0, assertUrl: permissive });
  assert.strictEqual(await res.text(), 'arrived');
  assert.deepStrictEqual(server.hits, ['/start', '/caf%C3%A9']);
});

test('a Location that is already percent-encoded or plain ASCII is left exactly as it is', async t => {
  const { calls } = mockFetch(t, [
    redirect('https://a.example/start', 'https://b.example/caf%C3%A9?x=1'),
    redirect('https://b.example/caf%C3%A9?x=1', '/plain/path', 301),
    { match: 'https://b.example/plain/path', text: 'done' },
  ]);

  const res = await fetchPublicUrl('https://a.example/start', { retries: 0 });
  assert.strictEqual(await res.text(), 'done');
  assert.deepStrictEqual(calls, ['https://a.example/start', 'https://b.example/caf%C3%A9?x=1', 'https://b.example/plain/path']);
});

// ---------------------------------------------------------------------------
// resolveRedirect: where does this link point? The page itself is never requested.
// ---------------------------------------------------------------------------

const POINTER = 'https://pointer.example/go/abc123';

test('resolveRedirect returns the address a redirect names, and requests nothing but the pointer', async t => {
  const { calls, inits } = mockFetch(t, [redirect(POINTER, 'https://blog.example/post?id=7')]);

  assert.strictEqual(await resolveRedirect(POINTER, { retries: 0 }), 'https://blog.example/post?id=7');
  assert.deepStrictEqual(calls, [POINTER], 'the page it points to was not requested');
  assert.strictEqual(inits[0].redirect, 'manual');
});

test('resolveRedirect never lets fetch follow the redirect, whatever the caller asks for', async t => {
  const { inits } = mockFetch(t, [redirect(POINTER, 'https://blog.example/post')]);

  await resolveRedirect(POINTER, { retries: 0, redirect: 'follow' });
  assert.strictEqual(inits[0].redirect, 'manual');
});

test('resolveRedirect accepts every redirect status and resolves a relative address against the pointer', async t => {
  const statuses = [301, 302, 303, 307, 308];
  mockFetch(t, statuses.map(status => redirect(`https://rel.example/status-${status}`, '/landing/page?x=1', status)));

  for (const status of statuses) {
    assert.strictEqual(
      await resolveRedirect(`https://rel.example/status-${status}`, { retries: 0 }),
      'https://rel.example/landing/page?x=1',
      String(status)
    );
  }
});

test('resolveRedirect decodes a raw UTF-8 Location the way fetch itself would', async t => {
  mockFetch(t, [redirect(POINTER, asHeaderBytes('https://b.example/café?q=ü'))]);

  assert.strictEqual(await resolveRedirect(POINTER, { retries: 0 }), 'https://b.example/caf%C3%A9?q=%C3%BC');
});

test('resolveRedirect passes headers on and retries a transient failure', async t => {
  const { inits } = mockFetch(t, [redirect(POINTER, 'https://blog.example/after-retry')]);
  const answering = globalThis.fetch;
  let attempts = 0;
  globalThis.fetch = (input, init) => (++attempts === 1
    ? Promise.resolve(makeResponse({ status: 503, headers: { 'retry-after': '0' }, text: 'busy' }))
    : answering(input, init));

  const target = await resolveRedirect(POINTER, { retries: 1, headers: { 'User-Agent': 'tracker-test' } });

  assert.strictEqual(target, 'https://blog.example/after-retry');
  assert.strictEqual(attempts, 2, 'the 503 was retried');
  assert.strictEqual(inits[0].headers['User-Agent'], 'tracker-test');
});

test('resolveRedirect throws NoRedirectError, carrying the status, when the pointer answers with anything else', async t => {
  const { calls } = mockFetch(t, [
    { match: 'https://pointer.example/gone', status: 404, text: 'expired' },
    { match: 'https://pointer.example/page', status: 200, text: '<html>a page, not a redirect</html>' },
    { match: 'https://pointer.example/bare', status: 302, text: '' },
    // A Location header means nothing on a status that is not a redirect.
    { match: 'https://pointer.example/ok-with-location', status: 200, headers: { location: 'https://blog.example/x' }, text: 'ok' },
  ]);

  const outcomes = {};
  for (const name of ['gone', 'page', 'bare', 'ok-with-location']) {
    const error = await resolveRedirect(`https://pointer.example/${name}`, { retries: 0 }).catch(e => e);
    assert.ok(error instanceof NoRedirectError, `${name}: ${error}`);
    assert.strictEqual(error.name, 'NoRedirectError');
    outcomes[name] = error.status;
  }
  assert.deepStrictEqual(outcomes, { gone: 404, page: 200, bare: 302, 'ok-with-location': 200 });
  assert.strictEqual(calls.length, 4);
});

test('resolveRedirect throws NoRedirectError for a Location that is not an address', async t => {
  mockFetch(t, [redirect(POINTER, 'http://')]);

  const error = await resolveRedirect(POINTER, { retries: 0 }).catch(e => e);
  assert.ok(error instanceof NoRedirectError, String(error));
  assert.strictEqual(error.status, 302);
});

test('resolveRedirect refuses to hand back an address that is not public, and never requests it', async t => {
  const targets = [
    'http://127.0.0.1:8080/secret',
    'http://localhost./secret',
    'http://169.254.169.254/latest/meta-data/',
    'http://[::1]/',
    'http://10.1.2.3/',
    'http://metadata.google.internal/computeMetadata/v1/',
    'http://2130706433/',
    '//127.0.0.1/protocol-relative',
    'file:///etc/passwd',
    'javascript:alert(1)',
    'ftp://files.example/readme',
  ];
  const starts = targets.map((_, i) => `https://pointer${i}.example/go`);
  const { calls } = mockFetch(t, targets.map((target, i) => redirect(starts[i], target)));

  for (const [i, target] of targets.entries()) {
    await assert.rejects(resolveRedirect(starts[i], { retries: 0 }), UnsafeUrlError, target);
  }
  assert.deepStrictEqual(calls, starts, 'only the pointers were requested');
});

test('resolveRedirect refuses an address whose name resolves to a private one', async t => {
  const restore = setHostResolver(async host =>
    host === 'rebind.example' ? [{ address: '10.0.0.5', family: 4 }] : [{ address: PUBLIC_TEST_ADDRESS, family: 4 }]
  );
  t.after(restore);
  const { calls } = mockFetch(t, [redirect(POINTER, 'https://rebind.example/admin')]);

  await assert.rejects(
    resolveRedirect(POINTER, { retries: 0 }),
    error => error instanceof UnsafeUrlError && /rebind\.example.*10\.0\.0\.5/.test(error.message)
  );
  assert.deepStrictEqual(calls, [POINTER]);
});

test('resolveRedirect refuses a pointer that is not public without making any request', async t => {
  const { calls } = mockFetch(t, []);

  await assert.rejects(resolveRedirect('http://169.254.169.254/latest/meta-data/'), UnsafeUrlError);
  await assert.rejects(resolveRedirect('file:///etc/passwd'), UnsafeUrlError);
  assert.deepStrictEqual(calls, []);
});

test('resolveRedirect uses the policy it is given in place of the default one', async t => {
  const checked = [];
  const { calls } = mockFetch(t, [redirect(POINTER, 'http://127.0.0.1/x')]);

  const target = await resolveRedirect(POINTER, { retries: 0, assertUrl: async url => { checked.push(url); } });

  assert.strictEqual(target, 'http://127.0.0.1/x');
  assert.deepStrictEqual(checked, [POINTER, 'http://127.0.0.1/x'], 'the pointer and the address it names were both put to the policy');
  assert.deepStrictEqual(calls, [POINTER]);
});

test('resolveRedirect: one deadline covers the lookups, the request and the lookup of the address it names', async t => {
  const restore = setHostResolver(host => (host === 'hung.example'
    ? new Promise(() => { /* never settles */ })
    : Promise.resolve([{ address: PUBLIC_TEST_ADDRESS, family: 4 }])));
  t.after(restore);
  mockFetch(t, [redirect(POINTER, 'https://hung.example/page')]);

  const started = Date.now();
  const error = await Promise.race([
    resolveRedirect(POINTER, { timeoutMs: 300, retries: 0 }).catch(e => e),
    new Promise(resolve => setTimeout(() => resolve(new Error('WATCHDOG: still waiting for DNS')), 3000)),
  ]);

  assert.strictEqual(error.name, 'TimeoutError', String(error));
  assert.match(error.message, /pointer\.example.*timed out after 300ms/);
  assert.ok(Date.now() - started < 2000);
});

test('resolveRedirect: a lookup of the pointer that never answers cannot outlast the deadline either', async t => {
  const restore = setHostResolver(() => new Promise(() => { /* never settles */ }));
  t.after(restore);
  const { calls } = mockFetch(t, []);

  const error = await Promise.race([
    resolveRedirect(POINTER, { timeoutMs: 200, retries: 0 }).catch(e => e),
    new Promise(resolve => setTimeout(() => resolve(new Error('WATCHDOG: still waiting for DNS')), 3000)),
  ]);

  assert.strictEqual(error.name, 'TimeoutError', String(error));
  assert.deepStrictEqual(calls, []);
});

test('resolveRedirect: a pointer that stalls is given up on at the deadline', async t => {
  const server = await startServer(t, () => { /* never answers */ });

  const started = Date.now();
  const error = await resolveRedirect(`http://127.0.0.1:${server.port}/go`, { timeoutMs: 300, retries: 0, assertUrl: permissive }).catch(e => e);

  assert.strictEqual(error.name, 'TimeoutError', String(error));
  assert.ok(Date.now() - started < 2000);
});

test('resolveRedirect: a long Retry-After cannot stretch the exchange past its deadline', async t => {
  const server = await startServer(t, (req, res) => {
    res.writeHead(503, { 'retry-after': '3' });
    res.end('busy');
  });

  const started = Date.now();
  const error = await resolveRedirect(`http://127.0.0.1:${server.port}/go`, { timeoutMs: 1200, retries: 2, assertUrl: permissive }).catch(e => e);

  assert.ok(error instanceof NoRedirectError, String(error));
  assert.strictEqual(error.status, 503);
  assert.strictEqual(server.hits.length, 1, 'a retry that could not finish in time was not started');
  assert.ok(Date.now() - started < 1200, `returned after ${Date.now() - started}ms`);
});

test('resolveRedirect keeps secrets in the pointer out of its error messages', async t => {
  mockFetch(t, [{ match: 'https://pointer.example/gone', status: 404, text: 'expired' }]);

  const error = await resolveRedirect('https://pointer.example/gone?key=SECRET123&q=1', { retries: 0 }).catch(e => e);

  assert.ok(error instanceof NoRedirectError);
  assert.ok(!error.message.includes('SECRET123'), error.message);
  assert.match(error.message, /pointer\.example\/gone/);
});

test('resolveRedirect releases the redirect\'s body instead of reading it', async t => {
  let released;
  const server = await startServer(t, (req, res) => {
    res.writeHead(302, { location: 'https://blog.example/page' });
    res.write('x');
    const timer = setInterval(() => res.write('x'), 20); // a body that never ends
    released = new Promise(resolve => res.on('close', () => { clearInterval(timer); resolve(); }));
  });

  const target = await resolveRedirect(`http://127.0.0.1:${server.port}/go`, { retries: 0, assertUrl: permissive });
  assert.strictEqual(target, 'https://blog.example/page');

  const outcome = await Promise.race([
    released.then(() => 'released'),
    new Promise(resolve => setTimeout(() => resolve('still open'), 3000)),
  ]);
  assert.strictEqual(outcome, 'released');
});
