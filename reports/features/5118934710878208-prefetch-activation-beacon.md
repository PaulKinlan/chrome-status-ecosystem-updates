# Prefetch activation beacon

> **Report Week:** 2026-W39 | **Milestone:** Chrome 151 | **Category:** Origin trial

## Overview

The on-prefetch-activation  HTTP response header enables servers to specify a telemetry endpoint that the browser notifies when a prefetched resource is used for navigation. Developers gain a reliable signal to measure the precision and performance impact of their prefetch strategies.

### Motivation

The API is proposed for a reliable measurement of whether a prefetch page is activated. This allows precise visit statistics for the prefetched page without cache interference.

## Ecosystem Status

- **Momentum:** Moderate (50 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Prefetch activation beacon is currently Origin trial in Chrome 151. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

### Recommendations
- In active Origin Trial in Chrome 151. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Re: Intent to Experiment: Prefetch activation beacon](http://www.mail-archive.com/blink-dev@chromium.org/msg16963.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Experiment: Prefetch activation beacon Skip to site navigation (Press enter) [blink-dev] Re: Intent to Experiment: Prefetch activation beacon Alex Russell Mon, 13 Jul 2026 11:40:24 -0700 LGTM; good luck. Looking forward to h...
- [\[blink-dev\] Intent to Experiment: Prefetch activation beacon](http://www.mail-archive.com/blink-dev@chromium.org/msg16952.html) *(mail-archive.com)*
  > [blink-dev] Intent to Experiment: Prefetch activation beacon Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: Prefetch activation beacon 'Jiacheng Guo' via blink-dev Wed, 08 Jul 2026 21:43:03 -0700 *Contact emails* [email&#160;...
- [\[blink-dev\] Intent to Prototype: Prefetch activation beacon](http://www.mail-archive.com/blink-dev@chromium.org/msg16520.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Prefetch activation beacon Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Prefetch activation beacon 'Jiacheng Guo' via blink-dev Wed, 13 May 2026 00:34:03 -0700 *Contact emails* [email&#160;pr...
- [Duplicate prefetch activation beacons sent during ...](https://issues.chromium.org/issues/524073966) *(issues.chromium.org · 2026-06-16T00:00:00)*
  > Chromium Sign in
- [Prefetch activation beacon](https://chromestatus.com/feature/5118934710878208) *(chromestatus.com · 2026-04-21T00:00:00)*
  > Chrome Platform Status

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Experiment: Prefetch activation beacon](http://www.mail-archive.com/blink-dev@chromium.org/msg16963.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/prefetch-activation-beacon`)*
  > [blink-dev] Re: Intent to Experiment: Prefetch activation beacon Skip to site navigation (Press enter) [blink-dev] Re: Intent to Experiment: Prefetch activation beacon Alex Russell Mon, 13 Jul 2026 11:40:24 -0700 LGTM; good luck. Looking fo...
- [\[blink-dev\] Intent to Experiment: Prefetch activation beacon](http://www.mail-archive.com/blink-dev@chromium.org/msg16952.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/prefetch-activation-beacon`)*
  > [blink-dev] Intent to Experiment: Prefetch activation beacon Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: Prefetch activation beacon 'Jiacheng Guo' via blink-dev Wed, 08 Jul 2026 21:43:03 -0700 *Contact emails* [e...
- [\[blink-dev\] Intent to Prototype: Prefetch activation beacon](http://www.mail-archive.com/blink-dev@chromium.org/msg16520.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/prefetch-activation-beacon`)*
  > [blink-dev] Intent to Prototype: Prefetch activation beacon Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Prefetch activation beacon 'Jiacheng Guo' via blink-dev Wed, 13 May 2026 00:34:03 -0700 *Contact emails* [ema...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 48 result(s) found across 11 planned queries — **5 verified relevant**
  - `"chromestatus.com/feature/5118934710878208" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/explainers-by-googlers/prefetch-activation-beacon" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"Prefetch activation beacon" API` — *Core feature API query* (5 returned)
  - `"Prefetch activation beacon" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"on-prefetch-activation" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Prefetch activation beacon" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Prefetch activation beacon" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"on-prefetch-activation" OR "prefetch activation beacon" (tutorial OR guide OR telemetry)` — *Find practical developer guides and blog posts explaining how to implement and track prefetch navigation activations using the beacon header.* (8 returned)
  - `"on-prefetch-activation" ("HTTP header" OR "Speculation-Rules") (response OR payload OR example)` — *Locate technical documentation and code samples demonstrating the exact HTTP header syntax and beacon payload configuration.* (0 returned)
  - `"prefetch activation beacon" OR "on-prefetch-activation" ("intent to prototype" OR "intent to ship" OR site:chromestatus.com)` — *Track standards status, browser vendor positions, and Blink Intent announcements regarding the feature's release.* (1 returned)
  - `"prefetch activation beacon" OR "on-prefetch-activation" (site:github.com/WICG OR site:github.com/explainers-by-googlers OR site:news.ycombinator.com)` — *Uncover developer discussions, standards consensus debate, and feedback on analytics precision and privacy implications.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 1 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5118934710878208)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5118934710878208)
- [Specification](https://github.com/explainers-by-googlers/prefetch-activation-beacon)
- [Chromium Tracking Bug](https://b.corp.google.com/issues/499814382)
