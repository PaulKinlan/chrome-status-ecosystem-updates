# CPU Performance API

> **Report Week:** 2026-W37 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Starting in Chrome 152, Chrome introduces the CPU Performance API, which allows web applications to determine the CPU performance of a user's device. This API targets web applications that will use this information to provide an improved user experience, possibly in combination with the Compute Pressure API, which provides information about the user device’s CPU pressure or utilization and allows applications to react to changes in CPU pressure.

Users can override the reported performance using Chrome browser **Settings > Performance > Speed > Override CPU performance tier**. Administrators can also control this behavior using the [CpuPerformanceTierOverride](https://chromeenterprise.google/policies/#CpuPerformanceTierOverride) policy (which takes precedence over the user setting).

For more details, see [CPU Performance API Explainer](https://github.com/WICG/cpu-performance).

### Motivation

At present, some video conferencing applications support advanced functionality by relying on internal/private browser extensions or APIs to classify devices into performance categories. Our proposal allows these applications to support existing functionality without depending on such non-standard features.

Applications whose functionality depends on client-side hardware detection often resort to running benchmark workloads, to estimate hardware capabilities. Providing a public CPU Performance API would help prevent a needless waste of resources.

## Ecosystem Status

- **Momentum:** High (100 points)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Chrome 152 has shipped the CPU Performance API (`navigator.cpuPerformance`), exposing a coarse static hardware tier (integers 1 through 4) to help heavy applications like WebRTC video conferencing, gaming, and client-side AI adjust workloads without running wasteful benchmark scripts. However, the API is shipping unilaterally from WICG incubation without broader multi-engine consensus. Both WebKit and Mozilla have raised significant resistance regarding privacy, fingerprinting, and hardware classification semantics.

### Recommendations
- Actionable Advice: Treat `navigator.cpuPerformance` strictly as an optional progressive enhancement guarded by feature detection (`'cpuPerformance' in navigator`). Do not hardcode mission-critical application logic exclusively to this property, and maintain fallback adaptive strategies (such as dynamic frame dropping or Compute Pressure API telemetry) for Safari and Firefox users.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @marcoscaceres: "@lukewarlow, the API would potentially go to the Web Performance WG after incubation, so I think that's fine. It would be premature for it to go to We..."
- Standards Activity (Mozilla): Latest discussion from @bvandersloot-mozilla: "The answers w.r.t. ads sounds like a reasonable motivation. I might not have personally mentioned ads at all as a special category, but I can see why ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CPU Performance API](https://github.com/WebKit/standards-positions/issues/622) [closed]
- **Mozilla:** [CPU Performance API](https://github.com/mozilla/standards-positions/issues/1364) [open]
- **W3C TAG:** [Incubation: CPU Performance API](https://github.com/w3ctag/design-reviews/issues/1198) [open]
- **W3C TAG:** [WG Revision: WebTransport](https://github.com/w3ctag/design-reviews/issues/1212) [open]

## 📰 Ecosystem Blogs & Articles

- [Microsoft Edge Browser Policy Documentation CpuPerformanceTierOverride | Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/cpuperformancetieroverride) *(learn.microsoft.com · 2026-07-14T00:00:00)*
  > Microsoft Edge Browser Policy Documentation CpuPerformanceTierOverride | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take advantage of the latest features, s...
- [CpuPerformanceTierOverride: Override for the CPU performance tier | Chrome Enterprise](https://chromeenterprise.google/policies/cpu-performance-tier-override) *(chromeenterprise.google)*
  > CpuPerformanceTierOverride: Override for the CPU performance tier | Chrome Enterprise chrome enterprise Jump to Content chrome enterprise Get in touch Download Chrome Get advanced security protections with Chrome Enterprise Premium. Learn more. Enter...
- [Override for the CPU performance tier - ADMX Viewer](https://gpedit.tplant.com.au/en-us/policy/chrome/CpuPerformanceTierOverride) *(gpedit.tplant.com.au)*
  > Override for the CPU performance tier - ADMX Viewer ADMX Viewer All Computer User Google.Policies.Chrome &bull; Both Override for the CPU performance tier Download ADMX Setting this policy allows enterprises to override the value returned by the CPU ...
- [CPU Performance API](https://chromestatus.com/feature/5189864286978048?gate=5130174173675520) *(chromestatus.com · 2026-05-26T00:00:00)*
  > We cannot provide a description for this page right now
- [The CPU Performance API: Adaptive Loading Without Running a Benchmark | Trade Assistance LLC](https://trade-assistance.com/blog/cpu-performance-api-adaptive-loading-chrome-152) *(trade-assistance.com · 2026-07-27T00:00:00)*
  > Chrome 152 is set to ship navigator.cpuPerformance, <strong>a one-line read that sorts a visitor&#x27;s device into a stable performance tier</strong>. Here&#x27;s how to use it to serve lighter experiences to weaker hardware — without fingerprinting...
- [The Impact of Chrome's New CPU Performance API on Web Scraping Detection](https://www.scraping.club/p/the-impact-of-chromes-new-cpu-performance-api) *(scraping.club · 2026-09-06T20:18:52)*
  > Introduced in Chrome 152 (currently in beta at the time of writing), the CPU Performance API is a new Web API that lets websites estimate how powerful a user’s CPU is without disclosing detailed hardware information.
- [Chrome 152 beta | Blog | Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > <strong>Starting in Chrome 152, Chrome introduces the CPU Performance API, which lets web applications determine the CPU performance tier of a user&#x27;s device</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Add CPU Performance API · Issue #7536 · Fyrd/caniuse](https://github.com/Fyrd/caniuse/issues/7536) *(github.com · 2026-06-24T10:22:39)* *(Cites: `https://chromestatus.com/feature/5189864286978048`)*
  > Add CPU Performance API · Issue #7536 · Fyrd/caniuse · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session....
- [Microsoft Edge Browser Policy Documentation CpuPerformanceTierOverride | Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/cpuperformancetieroverride) *(learn.microsoft.com · 2026-07-14T00:00:00)* *(Cites: `https://github.com/WICG/cpu-performance`)*
  > Microsoft Edge Browser Policy Documentation CpuPerformanceTierOverride | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take advantage of the latest f...
- [CpuPerformanceTierOverride: Override for the CPU performance tier | Chrome Enterprise](https://chromeenterprise.google/policies/cpu-performance-tier-override) *(chromeenterprise.google)* *(Cites: `https://github.com/WICG/cpu-performance`)*
  > CpuPerformanceTierOverride: Override for the CPU performance tier | Chrome Enterprise chrome enterprise Jump to Content chrome enterprise Get in touch Download Chrome Get advanced security protections with Chrome Enterprise Premium. Learn m...
- [Override for the CPU performance tier - ADMX Viewer](https://gpedit.tplant.com.au/en-us/policy/chrome/CpuPerformanceTierOverride) *(gpedit.tplant.com.au)* *(Cites: `https://github.com/WICG/cpu-performance`)*
  > Override for the CPU performance tier - ADMX Viewer ADMX Viewer All Computer User Google.Policies.Chrome &bull; Both Override for the CPU performance tier Download ADMX Setting this policy allows enterprises to override the value returned b...
- [CPU Performance API · Issue #622 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/622) *(github.com · 2026-02-26T11:24:29)* *(Cites: `https://wicg.github.io/cpu-performance`)*
  > WebKittens @jernoble, @marcoscaceres, @jyavenard Title of the proposal CPU Performance API URL to the spec <strong>https://wicg.github.io/cpu-performance/</strong> URL to the spec&#x27;s repository https://github.com/WICG/cpu-performance Is...

## 📚 Platform Documentation & Specifications

- [Add CPU Performance API · Issue #7536 · Fyrd/caniuse](https://github.com/Fyrd/caniuse/issues/7536) *(github.com)*
- [CPU Performance API · Issue #622 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/622) *(github.com)*
- [GitHub - explainers-by-googlers/cpu-performance: An API that exposes some information about how powerful the user device is.](https://github.com/explainers-by-googlers/cpu-performance) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 42 result(s) found across 8 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5189864286978048" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/WICG/cpu-performance" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"wicg.github.io/cpu-performance" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"CPU Performance API" API` — *Core feature API query* (8 returned)
  - `"CPU Performance API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromeenterprise.google" OR "github.com" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CPU Performance API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CPU Performance API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 6 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 8 result(s) found — **0 verified relevant**
- **Standards Positions:** 4 item(s) inspected
- **Engine Bug Trackers:** 7 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 1 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 18 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5189864286978048)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5189864286978048)
- [Specification](https://wicg.github.io/cpu-performance)
- [Chromium Tracking Bug](https://issues.chromium.org/449760252)
