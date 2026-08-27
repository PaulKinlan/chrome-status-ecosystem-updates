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

  // Target milestones: comma-separated list or 'auto' (targets current beta release)
  targetMilestones: process.env.TARGET_MILESTONES || 'auto',

  // Feature status types to inspect: enabled, origin-trial, flagged, deprecated, removed
  featureStatuses: (process.env.FEATURE_STATUSES || 'enabled,origin-trial,flagged,deprecated')
    .split(',')
    .map(s => s.trim().toLowerCase()),

  // Max features to process (empty or 0 = all)
  maxFeatures: process.env.MAX_FEATURES ? parseInt(process.env.MAX_FEATURES, 10) : null,

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

  // AI synthesis
  aiProvider: process.env.AI_PROVIDER || 'gemini',
  geminiApiKey: process.env.GEMINI_API_KEY || '',
  geminiModel: process.env.GEMINI_MODEL || 'gemini-3.7-flash',
  openaiApiKey: process.env.OPENAI_API_KEY || '',

  // Output paths
  reportsDir: path.resolve(projectRoot, process.env.REPORTS_DIR || 'reports'),
  dataDir: path.resolve(projectRoot, 'data'),
  historyFilePath: path.resolve(projectRoot, 'data', 'history.json'),

  // Preview server
  port: parseInt(process.env.PORT || '3000', 10),
};
