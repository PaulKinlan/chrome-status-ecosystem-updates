# Speculation Rules - moderate viewport heuristics controls

> **Report Week:** 2026-W41 | **Milestone:** Chrome 152 | **Category:** Origin trial

## Overview

Current viewport heuristics for speculation rules don't give any room for developer experimentation.  This experimental feature will provide such controls, and enable developers to figure out if different heuristics parameters give them better results than the default ones.  This is a feature only aimed at experimentation, and there are no plans to ship it as is.

## Ecosystem Status

- **Momentum:** High (110 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Speculation Rules - moderate viewport heuristics controls is an Android-focused Chromium Origin Trial launched in Chrome 152 to test author-defined parameters for mobile 'moderate' eagerness heuristics. The feature exposes a ruleset-level 'moderate\_viewport\_heuristics' key allowing developers and performance scripts to evaluate alternative timing, size, and distance thresholds against default browser heuristics. Chromium engineers explicitly stated that this trial is strictly exploratory to gather empirical performance data, with no intent to ship the syntax in its current form.

### Recommendations
- Actionable Advice: Web teams should continue relying on standard Speculation Rules eagerness levels ('moderate', 'eager', 'conservative') as progressive enhancements without hardcoding experimental heuristic parameters into production code. Only register for the Chrome 152 Origin Trial if actively benchmarking mobile navigation hit rates or testing custom RUM instrumentation to supply feedback to the Blink speculation team.
- In active Origin Trial in Chrome 152. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHQnaLPQmav5JlHp01qBP9nx9vSonXxxJbXLqmD2wWWY8LUQgKS0VRmudobyTS_vr0CrLq94HQOTAlqXCdXpmyznuuudr8PDfa-dhjfWS9zxIJXrjPdUaCAoNqegWTqUD19uMnaD1STMmj2XBgkcNxBkcwoY1CmJw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Speculation Rules - moderate viewport heuristics controls"** is an experimental Chromium origin trial (`SpeculationRulesModerateViewportHeuristicsControl`) introduced in **Chrome 152** and supported across Chromium
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGaRSjrDZBCvEwP56PBblHdzLJjStnFx6WhiwgqOFdRRNEM1fFyuCSs-qm9StKUa4Gff7Q9a0x-S_Vh1GArUkvFH8olKOPacUCjvgwQdMUdmY2BH-KnIpQ3lvWXpC4AtOufWK-MTS9vNuBnfTirqREdS1_WNg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Speculation Rules - moderate viewport heuristics controls"** is an experimental Chromium origin trial (`SpeculationRulesModerateViewportHeuristicsControl`) introduced in **Chrome 152** and supported across Chromium
- [fudge.ai](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEpfV6nxV16o4ZFf1KKeCXfYVQrxBrpzCEbCy-qIbn_TTLEcAjuCnnKzTbHneL_uD4A_RwNg1tKm4D8GjICBXgp8Ny2c4ysIrZ76WBWXinaYX7UWnUprRA0cNPMZLzqalrYXs91r9wNf6WVe5w=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Speculation Rules - moderate viewport heuristics controls"** is an experimental Chromium origin trial (`SpeculationRulesModerateViewportHeuristicsControl`) introduced in **Chrome 152** and supported across Chromium
- [web.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGrw4E4tx4EONlRZE0vKWnOE_BWIFsqRR_vl9C3lBiKUWSsLhH3HdFTZJZVBoEG7LVr7qyCAFYWyt10pDWfFgIo_6JAxFacjmwpnz4Lee-cT5zOTxLlZuQv0b1PCEU=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Speculation Rules - moderate viewport heuristics controls"** is an experimental Chromium origin trial (`SpeculationRulesModerateViewportHeuristicsControl`) introduced in **Chrome 152** and supported across Chromium
- [websiteadvantage.com.au](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHKX3ChJooVlwuzxUuZQMTWCrWkp_99rn0TgpOPdWu4tY41Yd7rXG9mKwp__sfr49bLWJ-O21mBEy7ZnPXlHFl4mB1TOvn_cQYG8FE2REVB3W_ChWJed-X3fH04Bs4SzsnoZhrYun_y_crMIKxcPQGcUq8xp77hvLfJBgqDSTuqXnbjSLgLkSo_NA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Speculation Rules - moderate viewport heuristics controls"** is an experimental Chromium origin trial (`SpeculationRulesModerateViewportHeuristicsControl`) introduced in **Chrome 152** and supported across Chromium
- [fudge.ai](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFMnjl_4EELVtLJenDvAAgk8RV6CJBXiU07wTGg0DIefA1NdCuXnxhuYNL3gDBiDos1-3gee_YEgHWQWW51xSt6gf3nHuToDf6XZTi9Vcbni2qr9QBQ8voWgAfuEHQa8cl-ciVbb9ej8aQ8MaA=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Speculation Rules - moderate viewport heuristics controls"** is an experimental Chromium origin trial (`SpeculationRulesModerateViewportHeuristicsControl`) introduced in **Chrome 152** and supported across Chromium
- [Developers should be able to experiment with Speculation Rules moderate viewport heuristics \[529423512\] - Chromium](https://issues.chromium.org/issues/529423512) *(issues.chromium.org)*
  > https://gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9 <strong>for a proposal that would enable developers to run experiments with the heuristics and report back their results</strong>.
- [\[blink-dev\] Re: Intent to Experiment: Speculation Rules - moderate viewport heuristics controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16943.html) *(mail-archive.com)*
  > &gt; *Contact emails* &gt; [email protected] &gt; &gt; *Explainer* &gt; https://gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9 &gt; &gt; *Specification* &gt; *No spec - this is an experiment-only feature.* &gt; &gt; *Summary* &gt; <strong...
- [\[blink-dev\] Intent to Experiment: Speculation Rules - moderate viewport heuristics controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16920.html) *(mail-archive.com)*
  > *Contact emails* [email protected] *Explainer* https://<strong>gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9</strong>
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > <strong>This origin trial provides experimental controls for speculation rules viewport heuristics</strong>, letting developers test whether alternative heuristics parameters deliver better prefetching and prerendering performance for their sites.
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > <strong>Provides experimental controls for speculation rules viewport heuristics</strong>, enabling developers to test whether alternative heuristics parameters deliver better prefetching and prerendering results than the default settings.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Developers should be able to experiment with Speculation Rules moderate viewport heuristics \[529423512\] - Chromium](https://issues.chromium.org/issues/529423512) *(issues.chromium.org)* *(Cites: `https://gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9`)*
  > https://gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9 <strong>for a proposal that would enable developers to run experiments with the heuristics and report back their results</strong>.
- [\[blink-dev\] Re: Intent to Experiment: Speculation Rules - moderate viewport heuristics controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16943.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9`)*
  > &gt; *Contact emails* &gt; [email protected] &gt; &gt; *Explainer* &gt; https://gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9 &gt; &gt; *Specification* &gt; *No spec - this is an experiment-only feature.* &gt; &gt; *Summary* &g...
- [\[blink-dev\] Intent to Experiment: Speculation Rules - moderate viewport heuristics controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16920.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9`)*
  > *Contact emails* [email protected] *Explainer* https://<strong>gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9</strong>

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 27 result(s) found across 6 planned queries — **5 verified relevant**
  - `"chromestatus.com/feature/6240467143491584" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9" -site:gist.github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"Speculation Rules - moderate viewport heuristics controls" API` — *Core feature API query* (0 returned)
  - `"Speculation Rules - moderate viewport heuristics controls" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"Speculation Rules - moderate viewport heuristics controls" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Speculation Rules - moderate viewport heuristics controls" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 541 item(s) inspected

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6240467143491584)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6240467143491584)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/529423512)
