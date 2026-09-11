#!/usr/bin/env node

import { parseArgs } from 'node:util';
import { readFileSync } from 'node:fs';
import { runEcosystemReport } from '../src/runner.js';
import { fetchChannels, fetchFeatureDetails, normalizeFeature } from '../src/chromestatus.js';
import { gatherEcosystemData } from '../src/search/index.js';
import { analyzeFeature } from '../src/analyzer/index.js';
import { startServer } from '../src/server.js';
import { config } from '../src/config.js';
import { logger } from '../src/logger.js';

const COMMANDS = new Set(['run', 'inspect', 'channels', 'serve', 'help']);

function readVersion() {
  try {
    const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf-8'));
    return pkg.version || '0.0.0';
  } catch {
    return 'unknown';
  }
}

function printHelp() {
  console.log(`
🌐 Chrome Status Ecosystem Updates CLI

Usage:
  chrome-status-ecosystem <command> [options]

Commands:
  run                  Run the weekly ecosystem crawler and generate reports (default)
  inspect <featureId>  Fetch and analyze a single feature in your terminal
  channels             List current Chrome release channels (Stable, Beta, Dev)
  serve                Start local preview web server for generated reports
  help                 Display this help message

Options for 'run':
  --milestone, -m      Milestone number, list, or range (e.g. 154, 150-154, 150,151,152, or last-5)
  --last               Inspect the last N Chrome milestones (e.g. --last 5)
  --limit, -l          Max number of features to inspect (default: all)
  --feature, -f        Inspect a specific feature ID only
  --status, -s         Comma-separated status filters (enabled,origin-trial,flagged,deprecated)
  --concurrency, -c    Features to investigate in parallel (default: ${config.concurrency})
  --serve              Start preview server after report generation
  --port, -p           Port for preview server (default: ${config.port})
  --host               Interface for preview server (default: ${config.host})
  --verbose, -v        Enable detailed logging of search queries, API calls & verifications

Global options:
  --help, -h           Show this help
  --version, -V        Print the version

Examples:
  node bin/cli.js run --last 5 --limit 10
  node bin/cli.js run --milestone 150-154
  node bin/cli.js run --milestone 154 --limit 5 --verbose
  node bin/cli.js run --serve
  node bin/cli.js inspect 5183481574850560
  node bin/cli.js channels
  node bin/cli.js serve --port 8080
`);
}

/**
 * Parses a required positive integer flag.
 *
 * parseInt returns NaN for junk like `--limit abc`, and NaN then propagates
 * silently: `slice(0, NaN)` yields an empty list, so the run "succeeded" while
 * processing nothing. Bad input has to stop the run instead.
 */
function positiveInt(raw, flagName) {
  const n = Number(raw);
  if (!Number.isInteger(n) || n < 1) {
    logger.error(`Invalid value for ${flagName}: ${JSON.stringify(raw)}. Expected a positive integer.`);
    process.exit(2);
  }
  return n;
}

/**
 * Wraps parseArgs so an unknown flag prints help and exits non-zero.
 *
 * The previous `strict: false` meant a typo such as `--limt 5` was accepted and
 * ignored, and the run silently processed every feature instead of five.
 */
function parse(args, options) {
  try {
    return parseArgs({ args, options, strict: true, allowPositionals: true });
  } catch (err) {
    logger.error(err.message);
    printHelp();
    process.exit(2);
  }
}

async function cmdChannels() {
  console.log('📡 Fetching Chrome release channels...');
  const channels = await fetchChannels();
  console.log('\nCurrent Channels:');
  console.log(`  Stable: Chrome ${channels.stable?.mstone} (Stable cut: ${channels.stable?.stable_cut || 'N/A'})`);
  console.log(`  Beta:   Chrome ${channels.beta?.mstone} (Early stable: ${channels.beta?.early_stable || 'N/A'})`);
  console.log(`  Dev:    Chrome ${channels.dev?.mstone}`);
  console.log();
}

async function cmdServe(args) {
  const { values } = parse(args, {
    port: { type: 'string', short: 'p' },
    host: { type: 'string' },
  });
  startServer({
    port: values.port ? positiveInt(values.port, '--port') : config.port,
    host: values.host || config.host,
  });
}

async function cmdInspect(args) {
  const { values, positionals } = parse(args, {
    verbose: { type: 'boolean', short: 'v', default: false },
  });

  const featureId = positionals[0];
  if (!featureId) {
    logger.error('Please provide a feature ID (e.g. `chrome-status-ecosystem inspect 5183481574850560`)');
    process.exit(2);
  }
  logger.setVerbose(values.verbose);

  console.log(`🔍 Inspecting ChromeStatus feature #${featureId}...`);
  const raw = await fetchFeatureDetails(featureId);
  const feature = normalizeFeature(raw, raw.milestone, raw.category);

  console.log(`\n📌 Feature: ${feature.name}`);
  console.log(`   Category: ${feature.category} | Milestone: Chrome ${feature.milestone || 'N/A'}`);
  console.log(`   Spec: ${feature.specUrl || 'None'}`);
  console.log(`   Chrome Bug: ${feature.bugUrl || 'None'}`);
  console.log(`\nSummary:\n   ${feature.summary}\n`);

  console.log('🌐 Gathering ecosystem data (HN, standards, npm, wpt)...');
  const ecosystem = await gatherEcosystemData(feature);
  const analysis = await analyzeFeature(feature, ecosystem);

  console.log('\n📊 Ecosystem Analysis:');
  console.log(`   Momentum: ${analysis.momentumLevel} (Score: ${analysis.momentumScore})`);
  console.log(`   Consensus: ${analysis.consensus}`);
  console.log(`   Developer Sentiment: ${analysis.sentiment}`);
  console.log(`   Executive Take: ${analysis.executiveSummary}\n`);

  if (analysis.takeaways?.length) {
    console.log('💡 Takeaways:');
    for (const t of analysis.takeaways) console.log(`   - ${t}`);
    console.log();
  }

  // Each of these degrades to [] when its source fails, so guard rather than
  // assuming the key is populated.
  if (ecosystem.standards?.length) {
    console.log('🏛️ Standards Positions:');
    for (const s of ecosystem.standards) {
      console.log(`   - ${s.vendor}: ${s.title} [${s.state}] (${s.url})`);
    }
    console.log();
  }

  if (ecosystem.discussions?.length) {
    console.log('💬 Community Discussions:');
    for (const d of ecosystem.discussions) {
      console.log(`   - ${d.title} (${d.points} pts, ${d.commentsCount} comments) -> ${d.discussionUrl || d.url}`);
    }
    console.log();
  }

  if (ecosystem.packages?.length) {
    console.log('📦 NPM Packages:');
    for (const p of ecosystem.packages) {
      console.log(`   - ${p.name} v${p.version}: ${p.description}`);
    }
    console.log();
  }
}

async function cmdRun(args) {
  const { values } = parse(args, {
    milestone: { type: 'string', short: 'm' },
    last: { type: 'string' },
    limit: { type: 'string', short: 'l' },
    feature: { type: 'string', short: 'f' },
    status: { type: 'string', short: 's' },
    concurrency: { type: 'string', short: 'c' },
    serve: { type: 'boolean', default: false },
    port: { type: 'string', short: 'p' },
    host: { type: 'string' },
    verbose: { type: 'boolean', short: 'v', default: false },
  });

  const milestone = values.last
    ? `last-${positiveInt(values.last, '--last')}`
    : (values.milestone || config.targetMilestones);

  await runEcosystemReport({
    milestone,
    limit: values.limit ? positiveInt(values.limit, '--limit') : config.maxFeatures,
    featureId: values.feature || null,
    statusTypes: values.status
      ? values.status.split(',').map(s => s.trim().toLowerCase()).filter(Boolean)
      : config.featureStatuses,
    concurrency: values.concurrency ? positiveInt(values.concurrency, '--concurrency') : config.concurrency,
    verbose: values.verbose,
  });

  if (values.serve) {
    startServer({
      port: values.port ? positiveInt(values.port, '--port') : config.port,
      host: values.host || config.host,
    });
  }
}

async function main() {
  const args = process.argv.slice(2);

  if (args.includes('--help') || args.includes('-h')) {
    printHelp();
    return;
  }
  if (args.includes('--version') || args.includes('-V')) {
    console.log(readVersion());
    return;
  }

  // An argument that looks like a flag means the (default) `run` command was
  // invoked without naming it.
  const first = args[0];
  const command = !first || first.startsWith('-') ? 'run' : first;
  const rest = command === first ? args.slice(1) : args;

  if (!COMMANDS.has(command)) {
    // Previously any unknown word fell through to `run`, so a mistyped command
    // kicked off a full multi-hour crawl and then exited 0.
    logger.error(`Unknown command: ${command}`);
    printHelp();
    process.exit(2);
  }

  switch (command) {
    case 'help': printHelp(); return;
    case 'channels': return cmdChannels();
    case 'serve': return cmdServe(rest);
    case 'inspect': return cmdInspect(rest);
    default: return cmdRun(rest);
  }
}

main().catch(err => {
  logger.error(`\n❌ Fatal error: ${err.message}`);
  if (process.env.DEBUG) console.error(err);
  process.exit(1);
});
