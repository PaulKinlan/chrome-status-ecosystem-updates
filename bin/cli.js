#!/usr/bin/env node

import { parseArgs } from 'node:util';
import { runEcosystemReport } from '../src/runner.js';
import { fetchChannels, fetchFeatureDetails, normalizeFeature } from '../src/chromestatus.js';
import { gatherEcosystemData } from '../src/search/index.js';
import { analyzeFeature } from '../src/analyzer/index.js';
import { startServer } from '../src/server.js';
import { config } from '../src/config.js';

function printHelp() {
  console.log(`
🌐 Chrome Status Ecosystem Updates CLI

Usage:
  chrome-status-ecosystem <command> [options]

Commands:
  run                  Run the weekly ecosystem crawler and generate reports
  inspect <featureId>  Fetch and analyze a single feature in your terminal
  channels             List current Chrome release channels (Stable, Beta, Dev)
  serve                Start local preview web server for generated reports
  help                 Display this help message

Options for 'run':
  --milestone, -m      Milestone number (e.g. 154, or comma-separated: 153,154)
  --limit, -l          Max number of features to inspect (default: all)
  --feature, -f        Inspect a specific feature ID only
  --status, -s         Comma-separated status filters (enabled,origin-trial,flagged,deprecated)
  --serve              Start preview server after report generation
  --port, -p           Port for preview server (default: 3000)
  --verbose, -v        Enable detailed logging of search queries, API calls & verifications

Examples:
  node bin/cli.js run --milestone 154 --limit 5 --verbose
  node bin/cli.js run --serve
  node bin/cli.js inspect 5183481574850560
  node bin/cli.js channels
  node bin/cli.js serve --port 8080
`);
}

async function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'run';

  if (command === 'help' || args.includes('--help') || args.includes('-h')) {
    printHelp();
    process.exit(0);
  }

  if (command === 'channels') {
    console.log('📡 Fetching Chrome release channels...');
    const channels = await fetchChannels();
    console.log('\nCurrent Channels:');
    console.log(`  Stable: Chrome ${channels.stable?.mstone} (Stable cut: ${channels.stable?.stable_cut || 'N/A'})`);
    console.log(`  Beta:   Chrome ${channels.beta?.mstone} (Early stable: ${channels.beta?.early_stable || 'N/A'})`);
    console.log(`  Dev:    Chrome ${channels.dev?.mstone}`);
    console.log();
    return;
  }

  if (command === 'serve') {
    const { values } = parseArgs({
      args: args.slice(1),
      options: {
        port: { type: 'string', short: 'p', default: String(config.port) },
      },
      strict: false,
    });
    startServer({ port: parseInt(values.port, 10) });
    return;
  }

  if (command === 'inspect') {
    const featureId = args[1];
    if (!featureId) {
      console.error('Error: Please provide a feature ID (e.g. `chrome-status-ecosystem inspect 5183481574850560`)');
      process.exit(1);
    }

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

    if (analysis.takeaways && analysis.takeaways.length) {
      console.log('💡 Takeaways:');
      for (const t of analysis.takeaways) console.log(`   - ${t}`);
      console.log();
    }

    if (ecosystem.standards.length) {
      console.log('🏛️ Standards Positions:');
      for (const s of ecosystem.standards) {
        console.log(`   - ${s.vendor}: ${s.title} [${s.state}] (${s.url})`);
      }
      console.log();
    }

    if (ecosystem.discussions.length) {
      console.log('💬 Community Discussions:');
      for (const d of ecosystem.discussions) {
        console.log(`   - ${d.title} (${d.points} pts, ${d.commentsCount} comments) -> ${d.discussionUrl || d.url}`);
      }
      console.log();
    }

    if (ecosystem.packages.length) {
      console.log('📦 NPM Packages:');
      for (const p of ecosystem.packages) {
        console.log(`   - ${p.name} v${p.version}: ${p.description}`);
      }
      console.log();
    }

    return;
  }

  // Default command: 'run'
  const runArgs = command === 'run' ? args.slice(1) : args;

  const { values } = parseArgs({
    args: runArgs,
    options: {
      milestone: { type: 'string', short: 'm' },
      limit: { type: 'string', short: 'l' },
      feature: { type: 'string', short: 'f' },
      status: { type: 'string', short: 's' },
      serve: { type: 'boolean', default: false },
      port: { type: 'string', short: 'p', default: String(config.port) },
      verbose: { type: 'boolean', short: 'v', default: false },
    },
    strict: false,
  });

  const milestone = values.milestone || config.targetMilestones;
  const limit = values.limit ? parseInt(values.limit, 10) : config.maxFeatures;
  const featureId = values.feature || null;
  const statusTypes = values.status ? values.status.split(',').map(s => s.trim().toLowerCase()) : config.featureStatuses;
  const verbose = values.verbose || false;

  const result = await runEcosystemReport({
    milestone,
    limit,
    featureId,
    statusTypes,
    verbose,
  });

  if (values.serve) {
    startServer({ port: parseInt(values.port, 10) });
  }
}

main().catch(err => {
  console.error('\n❌ Fatal error:', err.message);
  if (process.env.DEBUG) console.error(err);
  process.exit(1);
});
