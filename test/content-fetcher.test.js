import test from 'node:test';
import assert from 'node:assert';
import { parseGitHubIssueUrl } from '../src/search/content-fetcher.js';

test('parseGitHubIssueUrl extracts owner, repo, and issueNumber', () => {
  const url = 'https://github.com/WebKit/standards-positions/issues/708';
  const parsed = parseGitHubIssueUrl(url);
  assert.deepStrictEqual(parsed, {
    owner: 'WebKit',
    repo: 'standards-positions',
    issueNumber: '708',
  });

  assert.strictEqual(parseGitHubIssueUrl('https://chromestatus.com/feature/123'), null);
});
