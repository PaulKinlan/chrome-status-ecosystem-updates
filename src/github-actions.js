import fs from 'node:fs';
import { redactSecrets } from './llm-stats.js';

/**
 * Talking to the GitHub Actions runner.
 *
 * Everything the crawler decides that a person should notice (a safety check
 * that refused or was overridden, AI synthesis that mostly failed, a fatal
 * error) is first a log line. On Actions that is one line in a very long log,
 * so the same facts are also raised as workflow annotations, which the runner
 * shows on the run's summary page, and, for fatal errors, written to the job
 * summary. Off Actions every function here does nothing.
 */

/** True inside a GitHub Actions job. */
export function onGitHubActions() {
  return process.env.GITHUB_ACTIONS === 'true';
}

/**
 * Escapes the message of a workflow command (`::warning::...`). Without this a
 * newline in the text would end the command and let whatever follows be parsed
 * as another one; some of what is reported here (error messages, upstream
 * values) is not ours to trust.
 */
export function escapeWorkflowData(text) {
  return String(text).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');
}

/** The same for a command property such as `title=`, which also may not contain `:` or `,`. */
function escapeWorkflowProperty(text) {
  return escapeWorkflowData(text).replace(/:/g, '%3A').replace(/,/g, '%2C');
}

/**
 * Raises a workflow annotation (`level` is `notice`, `warning` or `error`).
 * Secrets are masked first: the message may be built from an upstream error.
 *
 * @returns {boolean} whether anything was emitted
 */
export function annotate(level, title, message) {
  if (!onGitHubActions()) return false;
  console.log(`::${level} title=${escapeWorkflowProperty(title)}::${escapeWorkflowData(redactSecrets(message))}`);
  return true;
}

/**
 * Appends Markdown to the run's job summary page.
 *
 * @returns {boolean} whether it was written
 */
export function appendToStepSummary(markdown) {
  const file = process.env.GITHUB_STEP_SUMMARY;
  if (!onGitHubActions() || !file) return false;
  try {
    fs.appendFileSync(file, `${markdown}\n`);
    return true;
  } catch {
    return false; // a summary is a courtesy; never turn it into a second failure
  }
}

/**
 * Makes a fatal error visible on the run's summary page: as an annotation, and
 * as a short section of the job summary (which is otherwise blank, or worse,
 * shows a stale report).
 */
export function reportFatalToActions(err) {
  const message = redactSecrets(err?.message || String(err));
  annotate('error', 'Crawl failed', message);

  // A fenced block keeps a multi-line message readable and stops anything in it
  // from being interpreted as Markdown or HTML; the fence just has to be longer
  // than any run of backticks inside.
  const longestRun = (message.match(/`+/g) || []).reduce((longest, run) => Math.max(longest, run.length), 0);
  const fence = '`'.repeat(Math.max(3, longestRun + 1));
  appendToStepSummary(`## ❌ The crawl stopped with an error\n\n${fence}text\n${message}\n${fence}\n`);
}
