# CPU Performance API

> **Report Week:** 2026-W41 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Starting in Chrome 152, Chrome introduces the CPU Performance API, which allows web applications to determine the CPU performance of a user's device. This API targets web applications that will use this information to provide an improved user experience, possibly in combination with the Compute Pressure API, which provides information about the user device’s CPU pressure or utilization and allows applications to react to changes in CPU pressure.  Users can override the reported performance using Chrome browser \*\*Settings &gt; Performance &gt; Speed &gt; Override CPU performance tier\*\*. Administrators can also control this behavior using the \[CpuPerformanceTierOverride\](https://chromeenterprise.google/policies/#CpuPerformanceTierOverride) policy (which takes precedence over the user setting).  For more details, see \[CPU Performance API Explainer\](https://github.com/WICG/cpu-performance).

### Motivation

At present, some video conferencing applications support advanced functionality by relying on internal/private browser extensions or APIs to classify devices into performance categories. Our proposal allows these applications to support existing functionality without depending on such non-standard features.

Applications whose functionality depends on client-side hardware detection often resort to running benchmark workloads, to estimate hardware capabilities. Providing a public CPU Performance API would help prevent a needless waste of resources.

## Ecosystem Status

- **Momentum:** High (548 points)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** CPU Performance API is currently Enabled by default in Chrome 152. Verified ecosystem momentum is High with Contested / Concerns Raised standards alignment and mixed / skeptical developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @marcoscaceres: "@lukewarlow, the API would potentially go to the Web Performance WG after incubation, so I think that's fine. It would be premature for it to go to We..."
- Standards Activity (Mozilla): Latest discussion from @bvandersloot-mozilla: "The answers w.r.t. ads sounds like a reasonable motivation. I might not have personally mentioned ads at all as a special category, but I can see why ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Show HN: AWS EC2 Pricing API – live spot pricing across regions" (2 points, 2 comments).

## Standards Positions

- **WebKit:** [CPU Performance API](https://github.com/WebKit/standards-positions/issues/622) [closed]
- **Mozilla:** [CPU Performance API](https://github.com/mozilla/standards-positions/issues/1364) [open]
- **W3C TAG:** [Incubation: CPU Performance API](https://github.com/w3ctag/design-reviews/issues/1198) [open]

## Community Discussions & Social Pulse

- 💬 **Hacker News:** [Show HN: AWS EC2 Pricing API – live spot pricing across regions](https://news.ycombinator.com/item?id=43571983) — *2 pts, 2 comments*
- 💬 **Hacker News:** [Ask HN: Do we still need native apps?](https://news.ycombinator.com/item?id=16833224) — *39 pts, 44 comments*
- 💬 **Hacker News:** [Show HN: TrustGraph – Do More with AI with Less (Open Source AI Infrastructure)](https://news.ycombinator.com/item?id=41765150) — *22 pts, 5 comments*
- 💬 **Hacker News:** [Show HN: Cloud Benchmarker: See how fast your cloud instances are for real!](https://news.ycombinator.com/item?id=37688544) — *3 pts, 1 comments*
- 🐦 **Twitter / X:** [PowerX Technology (@PowerXTechnolo1) on X](https://twitter.com/powerxtechnolo1?lang=en) — *0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Microsoft Edge Browser Policy Documentation CpuPerformanceTierOverride \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/cpuperformancetieroverride) *(learn.microsoft.com · 2026-07-14T00:00:00)*
  > Microsoft Edge Browser Policy Documentation CpuPerformanceTierOverride | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take advantage of the latest features, s...
- [\[blink-dev\] Intent to Extend Experiment: CPU Performance API](http://www.mail-archive.com/blink-dev@chromium.org/msg17465.html) *(mail-archive.com)*
  > [blink-dev] Intent to Extend Experiment: CPU Performance API Skip to site navigation (Press enter) [blink-dev] Intent to Extend Experiment: CPU Performance API Chromestatus Tue, 15 Sep 2026 14:34:58 -0700 Contact emails [email&#160;protected] Explain...
- [CpuPerformanceTierOverride: Override for the CPU performance tier \| Chrome Enterprise](https://chromeenterprise.google/policies/cpu-performance-tier-override) *(chromeenterprise.google)*
  > CpuPerformanceTierOverride: Override for the CPU performance tier | Chrome Enterprise chrome enterprise Jump to Content chrome enterprise Get in touch Download Chrome Get advanced security protections with Chrome Enterprise Premium. Learn more. Enter...
- [Override for the CPU performance tier - ADMX Viewer](https://gpedit.tplant.com.au/en-us/policy/chrome/CpuPerformanceTierOverride) *(gpedit.tplant.com.au)*
  > Override for the CPU performance tier - ADMX Viewer ADMX Viewer All Computer User Google.Policies.Chrome &bull; Both Override for the CPU performance tier Download ADMX Setting this policy allows enterprises to override the value returned by the CPU ...
- [The CPU Performance API: Adaptive Loading Without Running a Benchmark \| Trade Assistance LLC](https://trade-assistance.com/blog/cpu-performance-api-adaptive-loading-chrome-152) *(trade-assistance.com · 2026-07-27T00:00:00)*
  > Chrome is about to add one. The CPU Performance API introduces navigator.cpuPerformance, a read-only property that returns a small integer describing the device&#x27;s hardware class.
- [CPU Performance API](https://chromestatus.com/feature/5189864286978048?gate=5130174173675520) *(chromestatus.com · 2026-05-26T00:00:00)*
  > We cannot provide a description for this page right now
- [The Impact of Chrome's New CPU Performance API on Web Scraping Detection](https://www.scraping.club/p/the-impact-of-chromes-new-cpu-performance-api) *(scraping.club · 2026-09-13T08:22:25)*
  > Give your AI a web data layer – Decodo’s Web Scraping API turns any site into clean, structured data your models can actually use. ... Instead of revealing the processor model, clock speed, number of cores, or other fingerprinting-sensitive details, ...
- [navigator.cpuPerformance: The Browser Finally Knows How Fast Your User's Device Is (and It Changes How We Serve Video) \| Mintec Blog](https://mintec.co/blog/cpu-performance-api-media-2026) *(mintec.co · 2026-08-11T00:00:00)*
  > Chrome 152 introduces the CPU Performance API, and it is the first trustworthy signal a website has had for whether the user&#x27;s device is a flagship or a budget phone: navigator.cpuPerformance returns a tier from 1 to 4 (0 when unknown).
- [Progressive Web Apps 2026: PWA Performance Guide](https://www.digitalapplied.com/blog/progressive-web-apps-2026-pwa-performance-guide) *(digitalapplied.com · 2026-02-01T00:00:00)*
  > In 2026, every major browser fully supports the core PWA APIs — service workers, Web App Manifest, and Web Push — and the install experience has matured to the point where users on Android and iOS can add PWAs to their home screens with a single tap....
- [PWA vs Capacitor vs Native: Choosing an App Architecture in 2026 \| Our Code World](https://ourcodeworld.com/articles/read/3646/pwa-vs-capacitor-vs-native-2026) *(ourcodeworld.com · 2026-07-01T19:42:00)*
  > The architecture question there is not PWA vs native; it is build inside the platform users already trust vs ship yet another thing they have to log into. Adoption usually rewards the former. Default to PWA. Make the team justify leaving it. Move to ...
- [PWA Kit Architecture: How Your PWA Kit App Delivers a Page \| Composable Storefront \| B2C Commerce API \| Salesforce Developers](https://developer.salesforce.com/docs/commerce/commerce-api/guide/perf-pwa-arch.html) *(developer.salesforce.com)*
  > This section mentions performance metrics that are part of Web Core Vitals. To learn more about these metrics, see What Are Core Web Vitals?. Here’s the quick rundown. A user requests a page. The request is sent to Salesforce Managed Runtime (MRT). O...
- [Progressive Web Apps (PWA): Complete Guide (2026)](https://www.ramidabdoub.com/blog/article/progressive-web-apps-pwa-complete-guide-2026) *(ramidabdoub.com · 2026-09-30T22:10:41)*
  > Use Web Workers when CPU-heavy processing needs to be separated from the main thread. Use performance tooling and real-user data where available rather than relying only on assumptions. A Progressive Web App is a web application designed to provide r...
- [Solving PWA Performance Bottlenecks and Improving Speed](https://www.hashstudioz.com/blog/why-do-some-pwas-feel-slower-than-native-apps-solving-performance-bottlenecks) *(hashstudioz.com · 2026-07-15T06:25:43)*
  > These advancements will help PWAs deliver faster and more reliable performance, making them even closer to native apps. WebAssembly (Wasm) enables developers to write high-performance code in languages like C++ and Rust, which can then be executed in...
- [Comprehensive FAQs Guide: PWAs and Desktop Applications: Converting Web Apps into Installable Desktop Apps](https://gtcsys.com/comprehensive-faqs-guide-progressive-web-app-performance-monitoring-and-debugging-tools-and-techniques) *(gtcsys.com · 2024-07-02T05:24:58)*
  > RUM tools provide a holistic view of how users experience a PWA, allowing developers to prioritize optimizations that directly impact user satisfaction and engagement. Indicators of performance bottlenecks in PWAs include: Slow Loading Times: Prolong...
- [Progressive Web App (PWA) Development Ultimate Guide - Riseup Labs](https://riseuplabs.com/pwa-development-ultimate-guide) *(riseuplabs.com · 2025-12-10T05:24:22)*
  > These efforts have contributed to a more standardized approach to building PWAs, ensuring consistent quality and performance. ... The evolution of PWA technologies has been driven by advancements in web standards, the introduction of key features suc...
- [Rediscovering the Schwartzian Transform: Why I Had to Comment on a Flutter Performance Article](https://dev.to/gde/rediscovering-the-schwartzian-transform-why-i-had-to-comment-on-a-flutter-performance-article-30l0) *(dev.to · Randal L. Schwartz · Oct 2)*
  > When a Flutter developer tackled a UI freeze sorting 10,000 timeline events, they unwittingly reinvented a 30-year-old computer science idiom. Here is how modern Dart 3 records turn the Schwartzian Transform into an elegant, 13x faster one-liner.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Microsoft Edge Browser Policy Documentation CpuPerformanceTierOverride \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/cpuperformancetieroverride) *(learn.microsoft.com · 2026-07-14T00:00:00)* *(Cites: `https://github.com/WICG/cpu-performance`)*
  > Microsoft Edge Browser Policy Documentation CpuPerformanceTierOverride | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take advantage of the latest f...
- [\[blink-dev\] Intent to Extend Experiment: CPU Performance API](http://www.mail-archive.com/blink-dev@chromium.org/msg17465.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/cpu-performance`)*
  > [blink-dev] Intent to Extend Experiment: CPU Performance API Skip to site navigation (Press enter) [blink-dev] Intent to Extend Experiment: CPU Performance API Chromestatus Tue, 15 Sep 2026 14:34:58 -0700 Contact emails [email&#160;protecte...
- [CpuPerformanceTierOverride: Override for the CPU performance tier \| Chrome Enterprise](https://chromeenterprise.google/policies/cpu-performance-tier-override) *(chromeenterprise.google)* *(Cites: `https://github.com/WICG/cpu-performance`)*
  > CpuPerformanceTierOverride: Override for the CPU performance tier | Chrome Enterprise chrome enterprise Jump to Content chrome enterprise Get in touch Download Chrome Get advanced security protections with Chrome Enterprise Premium. Learn m...
- [Override for the CPU performance tier - ADMX Viewer](https://gpedit.tplant.com.au/en-us/policy/chrome/CpuPerformanceTierOverride) *(gpedit.tplant.com.au)* *(Cites: `https://github.com/WICG/cpu-performance`)*
  > Override for the CPU performance tier - ADMX Viewer ADMX Viewer All Computer User Google.Policies.Chrome &bull; Both Override for the CPU performance tier Download ADMX Setting this policy allows enterprises to override the value returned b...
- [CPU Performance API · Issue #622 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/622) *(github.com · 2026-02-26T11:24:29)* *(Cites: `https://wicg.github.io/cpu-performance`)*
  > CPU Performance API · ... · No response · No response · [Proposal for] <strong>a simple web API which exposes some information about how powerful the user device is</strong>....
- [Add CPU Performance API · Issue #7536 · Fyrd/caniuse](https://github.com/Fyrd/caniuse/issues/7536) *(github.com · 2026-06-24T10:22:39)* *(Cites: `https://wicg.github.io/cpu-performance`)*
  > <strong>https://wicg.github.io/cpu-performance/</strong> https://github.com/WICG/cpu-performance Chrome https://groups.google.com/a/chromium.org/g/blink-dev/c/igPwzkxhQtk/m/Epzx3q7MBwAJ https://chromestatus.com/feature/5189864286978048?gate...

## 📚 Platform Documentation & Specifications

- [CPU Performance API · Issue #622 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/622) *(github.com)*
- [Add CPU Performance API · Issue #7536 · Fyrd/caniuse](https://github.com/Fyrd/caniuse/issues/7536) *(github.com)*
- [GitHub - explainers-by-googlers/cpu-performance: An API that exposes some information about how powerful the user device is.](https://github.com/explainers-by-googlers/cpu-performance) *(github.com)*
- [chrome · GitHub Topics](https://github.com/topics/chrome) *(github.com)*
- [GitHub - GoogleChrome/samples: A repo containing samples tied to new functionality in each release of Google Chrome. · GitHub](https://github.com/GoogleChrome/samples) *(github.com)*
- [chrome-browser · GitHub Topics](https://github.com/topics/chrome-browser) *(github.com)*
- [GoogleChrome · GitHub](https://github.com/googlechrome) *(github.com)*
- [google-chrome · GitHub Topics · GitHub](https://github.com/topics/google-chrome?l=html) *(github.com)*
- [google-chrome-extension · GitHub Topics · GitHub](https://github.com/topics/google-chrome-extension) *(github.com)*
- [Build software better, together](https://github.com/topics/chrome-extensions) *(github.com)*
- [GitHub - GoogleChrome/developer.chrome.com: The frontend, backend, and content source code for developer.chrome.com · GitHub](https://github.com/GoogleChrome/developer.chrome.com) *(github.com)*
- [First CPU idle](https://developer.mozilla.org/en-US/docs/Glossary/First_CPU_idle) *(developer.mozilla.org)*
- [Web performance](https://developer.mozilla.org/en-US/docs/Web/Performance) *(developer.mozilla.org)*
- [Performance fundamentals](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Fundamentals) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 42 result(s) found across 8 planned queries — **26 verified relevant**
  - `"chromestatus.com/feature/5189864286978048" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WICG/cpu-performance" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"wicg.github.io/cpu-performance" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"CPU Performance API" API` — *Core feature API query* (8 returned)
  - `"CPU Performance API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromeenterprise.google" OR "github.com" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CPU Performance API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CPU Performance API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 7 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 8 result(s) found — **4 verified relevant**
- **Standards Positions:** 4 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 7 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 1 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 15 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5189864286978048)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5189864286978048)
- [Specification](https://wicg.github.io/cpu-performance)
- [Chromium Tracking Bug](https://issues.chromium.org/449760252)
