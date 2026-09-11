import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

/**
 * Loads simple KEY=VALUE pairs from a .env file if present
 * (Node 20+ also supports --env-file=.env natively)
 */
function loadDotenv(filePath) {
  if (!fs.existsSync(filePath)) return;
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    for (const line of content.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx > 0) {
        const key = trimmed.slice(0, eqIdx).trim();
        let val = trimmed.slice(eqIdx + 1).trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  } catch {
    // Ignore dotenv parsing errors
  }
}

/**
 * Parses an integer environment variable, falling back to `fallback` when the
 * value is missing, non-numeric, or out of range. Without this, a typo in the
 * environment silently produces NaN, which then propagates into arithmetic
 * (e.g. concurrency -> Array.from({ length: NaN }) -> zero workers).
 */
function intFromEnv(raw, fallback, { min = 1, max = Number.MAX_SAFE_INTEGER } = {}) {
  if (raw === undefined || raw === null || String(raw).trim() === '') return fallback;
  const parsed = Number.parseInt(String(raw).trim(), 10);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(max, Math.max(min, parsed));
}

// Automatically resolve project root from module location
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
loadDotenv(path.join(projectRoot, '.env'));
loadDotenv(path.join(projectRoot, '.env.local'));
loadDotenv(path.join(process.cwd(), '.env'));

export const config = {
  projectRoot,
  chromeStatusApiUrl: process.env.CHROMESTATUS_API_URL || 'https://chromestatus.com',
  chromeStatusLiteUrl: process.env.CHROMESTATUSLITE_URL || 'https://chromestatuslite.com',

  // Target milestones: comma-separated list, range ('150-154'), or 'last-5' (defaults to last 5 Chrome releases)
  targetMilestones: process.env.TARGET_MILESTONES || 'last-5',

  // Feature status types to inspect: enabled, origin-trial, flagged, deprecated, removed
  featureStatuses: (process.env.FEATURE_STATUSES || 'enabled,origin-trial,flagged,deprecated')
    .split(',')
    .map(s => s.trim().toLowerCase()),

  // Max features to process (empty or 0 = all)
  maxFeatures: process.env.MAX_FEATURES ? intFromEnv(process.env.MAX_FEATURES, null, { min: 1 }) : null,

  // How many features to investigate in parallel. Each feature costs several
  // LLM calls plus 25-40 HTTP round trips, so this is the main throughput and
  // rate-limit dial. Capped to keep us from overwhelming upstream APIs.
  concurrency: intFromEnv(process.env.CONCURRENCY, 4, { min: 1, max: 16 }),

  // Search provider: auto, gemini, brave, google, or ecosystem-only
  searchProvider: process.env.SEARCH_PROVIDER || 'auto',

  // Search API keys
  googleSearchApiKey: process.env.GOOGLE_SEARCH_API_KEY || '',
  googleSearchCx: process.env.GOOGLE_SEARCH_CX || '',
  braveSearchApiKey: process.env.BRAVE_SEARCH_API_KEY || '',

  // GitHub token for GitHub search API rate limits (optional)
  githubToken: process.env.GITHUB_TOKEN || '',

  // Twitter / X developer search via Bearer Token (optional)
  twitterBearerToken: process.env.TWITTER_BEARER_TOKEN || process.env.X_BEARER_TOKEN || '',

  // AI synthesis.
  //
  // NOTE: `aiProvider` is advisory only. The analyzer picks its provider from
  // whichever key is actually present (Gemini first, then OpenAI), because a
  // configured provider without credentials cannot do anything useful. It is
  // surfaced in report telemetry so the output records what was asked for.
  aiProvider: process.env.AI_PROVIDER || 'gemini',
  geminiApiKey: process.env.GEMINI_API_KEY || '',
  geminiModel: process.env.GEMINI_MODEL || 'gemini-3.8-flash',
  openaiApiKey: process.env.OPENAI_API_KEY || '',

  // Output paths
  reportsDir: path.resolve(projectRoot, process.env.REPORTS_DIR || 'reports'),
  dataDir: path.resolve(projectRoot, 'data'),
  historyFilePath: path.resolve(projectRoot, 'data', 'history.json'),

  // Preview server. Binds loopback by default: this serves generated files from
  // disk and has no authentication, so exposing it on all interfaces has to be
  // a deliberate choice (HOST=0.0.0.0).
  port: intFromEnv(process.env.PORT, 3000, { min: 1, max: 65535 }),
  host: process.env.HOST || '127.0.0.1',
};

