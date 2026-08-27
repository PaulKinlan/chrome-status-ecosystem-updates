import test from 'node:test';
import assert from 'node:assert';
import { getActiveSearchProviders, cleanUrl } from '../src/search/web.js';
import { config } from '../src/config.js';

test('cleanUrl strips utm tracking params and trailing slash', () => {
  const dirty = 'https://web.dev/articles/web-install?utm_source=twitter&utm_medium=social#overview';
  const cleaned = cleanUrl(dirty);
  assert.strictEqual(cleaned, 'https://web.dev/articles/web-install');
});

test('getActiveSearchProviders returns all providers with credentials in auto mode', () => {
  const origGemini = config.geminiApiKey;
  const origBrave = config.braveSearchApiKey;
  const origGoogle = config.googleSearchApiKey;
  const origCx = config.googleSearchCx;

  try {
    config.geminiApiKey = 'dummy-gemini-key';
    config.braveSearchApiKey = 'dummy-brave-key';
    config.googleSearchApiKey = 'dummy-google-key';
    config.googleSearchCx = 'dummy-cx';

    const providers = getActiveSearchProviders();
    assert.ok(providers.includes('gemini'), 'Includes gemini');
    assert.ok(providers.includes('brave'), 'Includes brave');
    assert.ok(providers.includes('google'), 'Includes google');
    assert.strictEqual(providers.length >= 3, true);
  } finally {
    config.geminiApiKey = origGemini;
    config.braveSearchApiKey = origBrave;
    config.googleSearchApiKey = origGoogle;
    config.googleSearchCx = origCx;
  }
});
