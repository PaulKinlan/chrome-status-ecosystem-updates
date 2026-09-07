# Speculation Rules - moderate viewport heuristics controls

> **Report Week:** 2026-W37 | **Milestone:** Chrome 152 | **Category:** Origin trial

## Overview

Current viewport heuristics for speculation rules don't give any room for developer experimentation.

This experimental feature will provide such controls, and enable developers to figure out if different heuristics parameters give them better results than the default ones.

This is a feature only aimed at experimentation, and there are no plans to ship it as is.

## Ecosystem Status

- **Momentum:** Emerging (30 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** This experimental capability introduces developer-tunable parameters (such as pointer distance, anchor size thresholds, and scroll delays) for mobile viewport-based 'moderate' eagerness within the Speculation Rules API. Available as a Chromium Origin Trial across Chrome 152–157, it is explicitly designed as a temporary research testbed rather than a feature slated for permanent standardization. Cross-engine consensus remains intentionally absent as browser vendors treat internal speculation triggering heuristics as implementation details.

### Recommendations
- Actionable Advice: Do not rely on this configuration object in production code, as it will be sunset after data collection concludes. Teams heavily optimizing mobile speculative loads should enroll in the Chrome Origin Trial to run A/B tests and report optimal heuristic thresholds back to the Chromium team.
- In active Origin Trial in Chrome 152. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [[blink-dev] Re: Intent to Experiment: Speculation Rules - moderate viewport heuristics controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16943.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Experiment: Speculation Rules - moderate viewport heuristics controls Skip to site navigation (Press enter) [blink-dev] Re: Intent to Experiment: Speculation Rules - moderate viewport heuristics controls Vladimir Levin Wed, ...
- [[blink-dev] Intent to Experiment: Speculation Rules - moderate viewport heuristics controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16920.html) *(mail-archive.com)*
  > [blink-dev] Intent to Experiment: Speculation Rules - moderate viewport heuristics controls Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: Speculation Rules - moderate viewport heuristics controls Yoav Weiss (@Shopify) Thu, 0...
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=subject%3Aintent+subject%3Ato+subject%3Aexperiment) *(groups.google.com)*
  > Intent to Experiment: Speculation Rules - moderate viewport heuristics controls

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Re: Intent to Experiment: Speculation Rules - moderate viewport heuristics controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16943.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9`)*
  > [blink-dev] Re: Intent to Experiment: Speculation Rules - moderate viewport heuristics controls Skip to site navigation (Press enter) [blink-dev] Re: Intent to Experiment: Speculation Rules - moderate viewport heuristics controls Vladimir L...
- [[blink-dev] Intent to Experiment: Speculation Rules - moderate viewport heuristics controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16920.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9`)*
  > [blink-dev] Intent to Experiment: Speculation Rules - moderate viewport heuristics controls Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: Speculation Rules - moderate viewport heuristics controls Yoav Weiss (@Shopi...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 16 result(s) found across 6 planned queries — **3 verified relevant**
  - `"chromestatus.com/feature/6240467143491584" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9" -site:gist.github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"speculationrules" ("viewport" OR "eagerness") ("moderate" OR "heuristics") (site:web.dev OR site:developer.chrome.com OR site:developer.mozilla.org)` — *Searches authoritative web performance documentation and guides for practical developer usage and tutorials on speculation rules viewport heuristics.* (8 returned)
  - `"type=\"speculationrules\"" AND ("viewport" OR "heuristics" OR "eagerness": "moderate")` — *Finds real-world JSON snippet configurations and syntax examples implementing speculation rules eagerness parameters and viewport heuristic controls.* (8 returned)
  - `"Speculation Rules" "viewport heuristics" ("intent to experiment" OR "intent to prototype" OR site:chromestatus.com OR site:groups.google.com/a/chromium.org)` — *Locates Blink/Chromium intent discussions, developer trials, and Chrome Platform Status updates tracking experimental viewport heuristics controls.* (1 returned)
  - `(site:github.com/WICG/nav-speculation OR site:gist.github.com/yoavweiss) "viewport" ("heuristics" OR "moderate")` — *Discovers standard specification discussions, author explainers, and issue trackers evaluating alternative heuristic parameters for speculation rules.* (0 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 9 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6240467143491584)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6240467143491584)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/529423512)
