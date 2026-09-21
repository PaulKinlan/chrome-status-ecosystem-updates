# CPU Performance API

> **Report Week:** 2026-W39 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Starting in Chrome 152, Chrome introduces the CPU Performance API, which allows web applications to determine the CPU performance of a user's device. This API targets web applications that will use this information to provide an improved user experience, possibly in combination with the Compute Pressure API, which provides information about the user device’s CPU pressure or utilization and allows applications to react to changes in CPU pressure.  Users can override the reported performance using Chrome browser \*\*Settings &gt; Performance &gt; Speed &gt; Override CPU performance tier\*\*. Administrators can also control this behavior using the \[CpuPerformanceTierOverride\](https://chromeenterprise.google/policies/#CpuPerformanceTierOverride) policy (which takes precedence over the user setting).  For more details, see \[CPU Performance API Explainer\](https://github.com/WICG/cpu-performance).

### Motivation

At present, some video conferencing applications support advanced functionality by relying on internal/private browser extensions or APIs to classify devices into performance categories. Our proposal allows these applications to support existing functionality without depending on such non-standard features.

Applications whose functionality depends on client-side hardware detection often resort to running benchmark workloads, to estimate hardware capabilities. Providing a public CPU Performance API would help prevent a needless waste of resources.

## Ecosystem Status

- **Momentum:** High (415 points)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Chrome 152 has shipped the CPU Performance API by default to replace resource-heavy client-side benchmarks and proprietary extensions with standardized coarse hardware tiers. However, the feature lacks multi-engine consensus, with WebKit formally opposing it and Mozilla flagging unresolved privacy and API design issues. Because it is incubated in WICG without cross-vendor buy-in, it remains a Chromium-only capability for the foreseeable future.

### Recommendations
- Actionable Advice: Treat the CPU Performance API strictly as an optional progressive enhancement for Chromium-based browsers behind explicit feature checks (\`'cpuPerformance' in navigator\`). Maintain standard runtime performance measurement fallbacks to ensure functional parity across Safari and Firefox.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @marcoscaceres: "@lukewarlow, the API would potentially go to the Web Performance WG after incubation, so I think that's fine. It would be premature for it to go to We..."
- Standards Activity (Mozilla): Latest discussion from @bvandersloot-mozilla: "The answers w.r.t. ads sounds like a reasonable motivation. I might not have personally mentioned ads at all as a special category, but I can see why ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CPU Performance API](https://github.com/WebKit/standards-positions/issues/622) [closed]
- **Mozilla:** [CPU Performance API](https://github.com/mozilla/standards-positions/issues/1364) [open]
- **W3C TAG:** [Incubation: CPU Performance API](https://github.com/w3ctag/design-reviews/issues/1198) [open]

## 📰 Ecosystem Blogs & Articles

- [Show HN: AWS EC2 Pricing API – live spot pricing across regions](https://ec2-pricing.runs-on.com) *(ec2-pricing.runs-on.com · 2025-04-03T16:22:39Z)*
  > AWS EC2 Pricing API AWS EC2 Pricing API Up-to-date API to retrieve available instance types per region and platform, as well as up to date on-demand and spot pricing across every region and availability zones. The database is updated every hour (abou...
- [Show HN: TrustGraph – Do More with AI with Less (Open Source AI Infrastructure)](https://github.com/trustgraph-ai/trustgraph) *(github.com · 2024-10-07T12:02:32Z)*
  > GitHub - trustgraph-ai/trustgraph: The context orchestration layer powered by hypergraphs. Build a unified semantic context layer where agentic outcomes are deterministic and agent behavior is not just traceable, but cryptographically verifiable. · G...
- [Show HN: Cloud Benchmarker: See how fast your cloud instances are for real!](https://github.com/Dicklesworthstone/cloud_benchmarker) *(github.com · 2023-09-28T12:19:54Z)*
  > GitHub - Dicklesworthstone/cloud_benchmarker: Cloud Benchmarker automates performance testing of cloud instances, offering insightful charts and tracking over time. · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in...
- [\[blink-dev\] Intent to Extend Experiment: CPU Performance API](http://www.mail-archive.com/blink-dev@chromium.org/msg17465.html) *(mail-archive.com)*
  > [blink-dev] Intent to Extend Experiment: CPU Performance API Skip to site navigation (Press enter) [blink-dev] Intent to Extend Experiment: CPU Performance API Chromestatus Tue, 15 Sep 2026 14:34:58 -0700 Contact emails [email&#160;protected] Explain...
- [Microsoft Edge Browser Policy Documentation CpuPerformanceTierOverride \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/cpuperformancetieroverride) *(learn.microsoft.com · 2026-07-14T00:00:00)*
  > Microsoft Edge Browser Policy Documentation CpuPerformanceTierOverride | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take advantage of the latest features, s...
- [Re: \[blink-dev\] Intent to Extend Experiment: CPU Performance API](http://www.mail-archive.com/blink-dev@chromium.org/msg17482.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Extend Experiment: CPU Performance API Skip to site navigation (Press enter) Re: [blink-dev] Intent to Extend Experiment: CPU Performance API Rick Byers Wed, 16 Sep 2026 09:35:21 -0700 Hey Nikos, Sorry for the lack of overla...
- [CpuPerformanceTierOverride: Override for the CPU performance tier \| Chrome Enterprise](https://chromeenterprise.google/policies/cpu-performance-tier-override) *(chromeenterprise.google)*
  > Setting this policy allows enterprises to override the value returned by the CPU Performance API (i.e., navigator.cpuPerformance, please see https://<strong>github.com/WICG/cpu-performance</strong> for details). If this policy is set, the value of na...
- [Override for the CPU performance tier - ADMX Viewer](https://gpedit.tplant.com.au/en-us/policy/chrome/CpuPerformanceTierOverride) *(gpedit.tplant.com.au)*
  > Setting this policy allows enterprises to override the value returned by the CPU Performance API (i.e., navigator.cpuPerformance, please see https://<strong>github.com/WICG/cpu-performance</strong> for details). If this policy is set, the value of na...
- [Переопределить уровень производительности ЦП - ADMX Viewer](https://gpedit.tplant.com.au/ru-ru/policy/chrome/CpuPerformanceTierOverride) *(gpedit.tplant.com.au)*
  > Правило позволяет компаниям переопределять значение, возвращаемое CPU Performance API (то есть navigator.cpuPerformance). Подробнее: https://<strong>github.com/WICG/cpu-performance</strong>. Если правило настроено, значение правила navigator.cpuPerfo...
- [The CPU Performance API: Adaptive Loading Without Running a Benchmark \| Trade Assistance LLC](https://trade-assistance.com/blog/cpu-performance-api-adaptive-loading-chrome-152) *(trade-assistance.com · 2026-07-27T00:00:00)*
  > Chrome 152 is set to ship navigator.cpuPerformance, <strong>a one-line read that sorts a visitor&#x27;s device into a stable performance tier</strong>. Here&#x27;s how to use it to serve lighter experiences to weaker hardware — without fingerprinting...
- [CPU Performance API](https://chromestatus.com/feature/5189864286978048?gate=5130174173675520) *(chromestatus.com · 2026-05-26T00:00:00)*
  > We cannot provide a description for this page right now
- [The Impact of Chrome's New CPU Performance API on Web Scraping Detection](https://www.scraping.club/p/the-impact-of-chromes-new-cpu-performance-api) *(scraping.club · 2026-09-06T20:18:52)*
  > Introduced in Chrome 152 (currently in beta at the time of writing), the CPU Performance API is a new Web API that lets websites estimate how powerful a user’s CPU is without disclosing detailed hardware information.
- [navigator.cpuPerformance: The Browser Finally Knows How Fast Your User's Device Is (and It Changes How We Serve Video) \| Mintec Blog](https://mintec.co/blog/cpu-performance-api-media-2026) *(mintec.co · 2026-08-11T00:00:00)*
  > The CPU Performance API attacks the problem head-on: <strong>Chrome classifies the device internally (from known hardware, not from benchmarks on your page) and exposes a tier from 1 to 4.</strong> Nothing else. No CPU model, no cores, no clock speed...
- [Advanced API Performance: CPUs \| NVIDIA Technical Blog](https://developer.nvidia.com/blog/advanced-api-performance-cpus) *(developer.nvidia.com · 2023-10-02T05:00:51)*
  > Fine-grained query use adds CPU overhead, for example on timing around draw calls. ExecuteCommandLists submits an array of command lists (ECL) to the GPU for execution. NVIDIA hardware supports multiple command queues to parallelize graphics work, en...
- [API Performance Optimization: A Complete Guide to Metrics, Terminology, and Optimization Techniques \| by Prudvi Tarugu \| Medium](https://medium.com/@prudvi.tarugu/api-performance-optimization-a-complete-guide-to-metrics-terminology-and-optimization-techniques-26f92d0fbfb2) *(medium.com · 2023-04-23T17:49:51)*
  > A CPU bottleneck occurs when the processor runs at over 80% of its capacity for an extended period or when there are too many tasks queued up. ... Adding more memory (RAM) and optimizing the code (removing unnecessary loops, optimizing data structure...
- [How To Get Per-Core CPU Usage \| W-Shadow.com](https://w-shadow.com/blog/2009/04/17/per-core-cpu-usage) *(w-shadow.com · 2017-12-19T22:10:10)*
  > Here’s a general overview of how to use the performance counter API to get the per-core usage numbers. ... <strong>Create a performance query using PdhOpenQuery</strong>. Generate a list of performance counter paths (one for each CPU or core) by feed...
- [CPU Database API \| Zyla API Hub](https://zylalabs.com/api-marketplace/data/cpu+database+api/2327) *(zylalabs.com)*
  > By integrating the API into their applications, users can easily compare CPU specifications, performance rankings, and prices to select the best processor for their specific computing needs. Tech Review Websites and Blogs: Technology review websites ...
- [Which API should I call to get data of memory utilization, cpu utilization ? - Site24x7 Forum](https://www.site24x7.com/community/which-api-should-i-call-to-get-data-of-memory-utiliation-cpu-utilizations) *(site24x7.com · 2020-06-26T00:00:00)*
  > report_type - the required performance metric for which you wish to see data. This param is optional and if not passed it will send the overall CPU, memory, and disk utilization for the selected server monitor. For example, to get the CPU utilization...
- [How To Improve API Performance: 10 Best Tips \| PFLB](https://pflb.us/blog/how-to-improve-api-performance) *(pflb.us · 2026-04-28T08:59:27)*
  > Response Time — How long it takes for the API to respond after receiving a request. This includes processing time, network delays, and any backend operations involved. Latency — Often confused with response time, latency focuses specifically on the t...
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > <strong>Starting in Chrome 152, Chrome introduces the CPU Performance API, which lets web applications determine the CPU performance tier of a user&#x27;s device</strong>.
- [Progressive Web Apps 2026: PWA Performance Guide](https://www.digitalapplied.com/blog/progressive-web-apps-2026-pwa-performance-guide) *(digitalapplied.com · 2026-02-01T00:00:00)*
  > In 2026, every major browser fully supports the core PWA APIs — service workers, Web App Manifest, and Web Push — and the install experience has matured to the point where users on Android and iOS can add PWAs to their home screens with a single tap....
- [PWA Kit Architecture: How Your PWA Kit App Delivers a Page \| Composable Storefront \| B2C Commerce API \| Salesforce Developers](https://developer.salesforce.com/docs/commerce/commerce-api/guide/perf-pwa-arch.html) *(developer.salesforce.com)*
  > CSR delivers a seamless, application-like feel, yet it’s also where you frequently encounter performance bottlenecks that negatively affect your Interaction to Next Paint (INP) score. It’s entirely possible to achieve an excellent LCP score on the se...
- [Solving PWA Performance Bottlenecks and Improving Speed](https://www.hashstudioz.com/blog/why-do-some-pwas-feel-slower-than-native-apps-solving-performance-bottlenecks) *(hashstudioz.com · 2026-07-15T06:25:43)*
  > These advancements will help PWAs deliver faster and more reliable performance, making them even closer to native apps. WebAssembly (Wasm) enables developers to write high-performance code in languages like C++ and Rust, which can then be executed in...
- [Progressive Web App (PWA) Development Ultimate Guide - Riseup Labs](https://riseuplabs.com/pwa-development-ultimate-guide) *(riseuplabs.com · 2025-12-10T05:24:22)*
  > These efforts have contributed to a more standardized approach to building PWAs, ensuring consistent quality and performance. ... The evolution of PWA technologies has been driven by advancements in web standards, the introduction of key features suc...
- [PWA vs Capacitor vs Native: Choosing an App Architecture in 2026 \| Our Code World](https://ourcodeworld.com/articles/read/3646/pwa-vs-capacitor-vs-native-2026) *(ourcodeworld.com · 2026-07-01T19:42:00)*
  > The architecture question there is not PWA vs native; it is build inside the platform users already trust vs ship yet another thing they have to log into. Adoption usually rewards the former. Default to PWA. Make the team justify leaving it. Move to ...
- [Comprehensive FAQs Guide: PWAs and Desktop Applications: Converting Web Apps into Installable Desktop Apps](https://gtcsys.com/comprehensive-faqs-guide-progressive-web-app-performance-monitoring-and-debugging-tools-and-techniques) *(gtcsys.com · 2024-07-02T05:24:58)*
  > RUM tools provide a holistic view of how users experience a PWA, allowing developers to prioritize optimizations that directly impact user satisfaction and engagement. Indicators of performance bottlenecks in PWAs include: Slow Loading Times: Prolong...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Add CPU Performance API · Issue #7536 · Fyrd/caniuse](https://github.com/Fyrd/caniuse/issues/7536) *(github.com · 2026-06-24T10:22:39)* *(Cites: `https://chromestatus.com/feature/5189864286978048`)*
  > Add CPU Performance API · Issue #7536 · Fyrd/caniuse · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session....
- [\[blink-dev\] Intent to Extend Experiment: CPU Performance API](http://www.mail-archive.com/blink-dev@chromium.org/msg17465.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/cpu-performance`)*
  > [blink-dev] Intent to Extend Experiment: CPU Performance API Skip to site navigation (Press enter) [blink-dev] Intent to Extend Experiment: CPU Performance API Chromestatus Tue, 15 Sep 2026 14:34:58 -0700 Contact emails [email&#160;protecte...
- [Microsoft Edge Browser Policy Documentation CpuPerformanceTierOverride \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/cpuperformancetieroverride) *(learn.microsoft.com · 2026-07-14T00:00:00)* *(Cites: `https://github.com/WICG/cpu-performance`)*
  > Microsoft Edge Browser Policy Documentation CpuPerformanceTierOverride | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take advantage of the latest f...
- [Re: \[blink-dev\] Intent to Extend Experiment: CPU Performance API](http://www.mail-archive.com/blink-dev@chromium.org/msg17482.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/cpu-performance`)*
  > Re: [blink-dev] Intent to Extend Experiment: CPU Performance API Skip to site navigation (Press enter) Re: [blink-dev] Intent to Extend Experiment: CPU Performance API Rick Byers Wed, 16 Sep 2026 09:35:21 -0700 Hey Nikos, Sorry for the lack...
- [CpuPerformanceTierOverride: Override for the CPU performance tier \| Chrome Enterprise](https://chromeenterprise.google/policies/cpu-performance-tier-override) *(chromeenterprise.google)* *(Cites: `https://github.com/WICG/cpu-performance`)*
  > Setting this policy allows enterprises to override the value returned by the CPU Performance API (i.e., navigator.cpuPerformance, please see https://<strong>github.com/WICG/cpu-performance</strong> for details). If this policy is set, the v...
- [Override for the CPU performance tier - ADMX Viewer](https://gpedit.tplant.com.au/en-us/policy/chrome/CpuPerformanceTierOverride) *(gpedit.tplant.com.au)* *(Cites: `https://github.com/WICG/cpu-performance`)*
  > Setting this policy allows enterprises to override the value returned by the CPU Performance API (i.e., navigator.cpuPerformance, please see https://<strong>github.com/WICG/cpu-performance</strong> for details). If this policy is set, the v...
- [Переопределить уровень производительности ЦП - ADMX Viewer](https://gpedit.tplant.com.au/ru-ru/policy/chrome/CpuPerformanceTierOverride) *(gpedit.tplant.com.au)* *(Cites: `https://github.com/WICG/cpu-performance`)*
  > Правило позволяет компаниям переопределять значение, возвращаемое CPU Performance API (то есть navigator.cpuPerformance). Подробнее: https://<strong>github.com/WICG/cpu-performance</strong>. Если правило настроено, значение правила navigato...
- [CPU Performance API · Issue #622 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/622) *(github.com · 2026-02-26T11:24:29)* *(Cites: `https://wicg.github.io/cpu-performance`)*
  > WebKittens @jernoble, @marcoscaceres, @jyavenard Title of the proposal CPU Performance API URL to the spec <strong>https://wicg.github.io/cpu-performance/</strong> URL to the spec&#x27;s repository https://github.com/WICG/cpu-performance Is...

## 📚 Platform Documentation & Specifications

- [Add CPU Performance API · Issue #7536 · Fyrd/caniuse](https://github.com/Fyrd/caniuse/issues/7536) *(github.com)*
- [CPU Performance API · Issue #622 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/622) *(github.com)*
- [GitHub - explainers-by-googlers/cpu-performance: An API that exposes some information about how powerful the user device is.](https://github.com/explainers-by-googlers/cpu-performance) *(github.com)*
- [chrome · GitHub Topics](https://github.com/topics/chrome) *(github.com)*
- [GitHub - GoogleChrome/samples: A repo containing samples tied to new functionality in each release of Google Chrome. · GitHub](https://github.com/GoogleChrome/samples) *(github.com)*
- [GoogleChrome · GitHub](https://github.com/googlechrome) *(github.com)*
- [chrome-browser · GitHub Topics](https://github.com/topics/chrome-browser) *(github.com)*
- [google-chrome-extension · GitHub Topics · GitHub](https://github.com/topics/google-chrome-extension) *(github.com)*
- [google-chrome · GitHub Topics · GitHub](https://github.com/topics/google-chrome?l=html) *(github.com)*
- [Build software better, together](https://github.com/topics/chrome-extensions) *(github.com)*
- [GitHub - ChromeDevTools/devtools-frontend: The Chrome DevTools UI · GitHub](https://github.com/ChromeDevTools/devtools-frontend) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 45 result(s) found across 8 planned queries — **34 verified relevant**
  - `"chromestatus.com/feature/5189864286978048" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/WICG/cpu-performance" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (6 returned)
  - `"wicg.github.io/cpu-performance" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"CPU Performance API" API` — *Core feature API query* (8 returned)
  - `"CPU Performance API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromeenterprise.google" OR "github.com" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CPU Performance API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CPU Performance API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 4 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 8 result(s) found — **0 verified relevant**
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
