# PerformanceSoftNavigation and InteractionContentfulPaint performance entry

> **Report Week:** 2026-W37 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Adds "soft-navigation" and "interaction-contentful-paint" PerformanceEntry types to the web performance timeline to track interaction-driven page performance, including for "soft" navigations (JS-driven navigations in Single Page Apps (SPAs)). This work expands on metrics like Largest Contentful Paint (LCP) and Interaction to Next Paint (INP).

The "interaction-contentful-paint" entry reports on new contentful paints within parts of the page modified by a user interaction, helping developers understand interaction loading latency. This proposal tracks the effects of interactions across async tasks (like fetch requests).

The "soft-navigation" entry reports same-document history state changes initiated by interactions, establishing a new time origin to correctly attribute subsequent performance data to the active route rather than the initial document URL.

### Motivation

Web developers have been asking for a way to measure the loading performance of "soft navigations" (JS-driven navigations in Single Page Apps (SPA)), and to integrate such navigations into the web performance timeline in general.

Besides getting useful new performance insights for these, having a shared standard definition for such navigations helps attribution for all existing performance timeline data (i.e. resource timings), and provides better default aggregation for metrics like INP or CLS with better URL attribution.

## Ecosystem Status

- **Momentum:** High (300 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Shipping enabled by default in Chrome 151, the Soft Navigations and InteractionContentfulPaint APIs address a long-standing gap in web performance tooling by establishing standardized performance timeline slicing and LCP attribution for SPA route changes. While heavily championed by Google and incubated within the WICG, other browser engines have not yet committed to native implementations.

### Recommendations
- Actionable Advice: Adopt this API today as a progressive enhancement by checking `PerformanceObserver.supportedEntryTypes` or integrating updated builds of the `web-vitals` library. Use `navigationId` and `interactionId` to slice and attribute Core Web Vitals per client-side route without degrading monitoring for non-supporting browsers.
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Soft Navigations](https://github.com/WebKit/standards-positions/issues/235) [closed]
- **Mozilla:** [Soft Navigations](https://github.com/mozilla/standards-positions/issues/854) [open]

## 📰 Ecosystem Blogs & Articles

- [Intent to Extend Experiment: SoftNavigation performance entry](https://groups.google.com/a/chromium.org/g/blink-dev/c/lQIWTwQGFBo) *(groups.google.com)*
  > Intent to Extend Experiment: SoftNavigation performance entry Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Extend Experiment: SoftNavigat...
- [Re: [blink-dev] Re: Intent to Ship: PerformanceSoftNavigation and InteractionContentfulPaint performance entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16863.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: PerformanceSoftNavigation and InteractionContentfulPaint performance entry Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: PerformanceSoftNavigation and InteractionContentfulPaint performa...
- [[blink-dev] Re: Intent to Extend Experiment: SoftNavigation performance entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16246.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Extend Experiment: SoftNavigation performance entry Skip to site navigation (Press enter) [blink-dev] Re: Intent to Extend Experiment: SoftNavigation performance entry Michal Mocny Wed, 01 Apr 2026 13:25:47 -0700 (The automa...
- [ソフトナビゲーションの仕組みと使い方 | yossy.dev](https://yossy.dev/posts/soft-hard-navigation-and-bfcache) *(yossy.dev)*
  > ソフトナビゲーションの仕組みと使い方 | yossy.dev yossydev Blog rss github ソフトナビゲーションの仕組みと使い方 publishedAt: 2024/12/11 updatedAt: 2024/12/11 目次 Intro ソフトナビゲーションとは ハードナビゲーションとは ソフトナビゲーションはなぜ生まれたのか 開発者視点 ユーザー視点 ソフトナビゲーションを使ってみる まとめ 参考・関連 2024年 ユウトの一人アドベントカレンダー の11日目の記事です。...
- [Re: [blink-dev] Intent to Extend Experiment: Soft Navigation Heuristics](https://www.mail-archive.com/blink-dev@chromium.org/msg08990.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Extend Experiment: Soft Navigation Heuristics Skip to site navigation (Press enter) Re: [blink-dev] Intent to Extend Experiment: Soft Navigation Heuristics Mike Taylor Tue, 23 Jan 2024 12:15:39 -0800 LGTM to extend to 123 in...
- [Advancement core Web vitals and SPA ?](https://groups.google.com/g/web-vitals-feedback/c/q44oFCyQIg8) *(groups.google.com)*
  > Advancement core Web vitals and SPA ? Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Advancement core Web vitals and SPA ? 425 views Skip to first un...
- [[blink-dev] Intent to Extend Experiment: SoftNavigation performance entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16248.html) *(mail-archive.com)*
  > [blink-dev] Intent to Extend Experiment: SoftNavigation performance entry Skip to site navigation (Press enter) [blink-dev] Intent to Extend Experiment: SoftNavigation performance entry Chromestatus Wed, 01 Apr 2026 16:20:24 -0700 Contact emails [ema...
- [Intent to Extend Experiment: Soft Navigation Heuristics](https://groups.google.com/a/chromium.org/g/blink-dev/c/xxrmKr-6X38) *(groups.google.com · 2024-01-22T00:00:00)*
  > https://bit.ly/soft-navigation https://docs.google.com/document/d/1eUyQg3YLEmYjrTMC3p-F1MilECwCynhM6WIbIo05SPU/edit · https://wicg.github.io/soft-navigations · <strong>Exposes the (experimental) soft navigation heuristics [1] to web developers, using...
- [New in Chrome 151 | Blog | Chrome for Developers](https://developer.chrome.com/blog/new-in-chrome-151) *(developer.chrome.com · 2026-07-28T00:00:00)*
  > The interaction-contentful-paint entry <strong>measures new contentful paints within DOM regions modified by a user interaction</strong>. This provides visibility into interaction loading latency, even when content updates depend on asynchronous oper...
- [Final Soft Navigations origin trial starting in Chrome 147 | Blog | Chrome for Developers](https://developer.chrome.com/blog/final-soft-navigations-origin-trial) *(developer.chrome.com)*
  > An InteractionContentfulPaint entry that <strong>allows measuring multiple, increasingly-sized, contentful paints after interactions to measure LCP for soft navigations</strong>. These new entries can be observed using a PerformanceObserver using the...
- [Soft Navigations in Chrome 151: How to Prepare and What to Measure - Apogee Watcher](https://apogeewatcher.com/blog/soft-navigations-chrome-151-prepare-measure) *(apogeewatcher.com · 2026-07-29T16:33:27)*
  > <strong>Chrome 151 adds soft-navigation and interaction-contentful-paint entry types to the Web Performance API timeline</strong>. The beta notes describe them as establishing new time origins for route transitions so Core Web Vitals can be measured ...
- [How SPA architectures affect Core Web Vitals | Articles | web.dev](https://web.dev/articles/vitals-spa-faq) *(web.dev · 2026-08-11T00:00:00)*
  > The Soft Navigation work has provided a solution to this with two new performance APIs: PerformanceSoftNavigation which <strong>measures when a user interaction leads to both a paint and a URL change</strong>. The combination of these three things pr...
- [Web の仕様を眺めるシリーズ Soft Navigations Performance Entry | Offers Tech Blog](https://zenn.dev/overflow_offers/articles/20240130-soft-navigations) *(zenn.dev)*
  > 多くの場合は PerformanceObserver を直接使う代わりに GoogleChrome/web-vitals を使うことになるでしょう。次のコードは Web Performance Calendar » Beyond soft-navigations: tracking your SPA’s TTFB からの引用サンプルコードです。
- [New Soft Navigations origin trial | Blog | Chrome for Developers](https://developer.chrome.com/blog/new-soft-navigations-origin-trial) *(developer.chrome.com · 2025-07-31T00:00:00)*
  > In addition an experimental soft navigation version of the web-vitals library is available. We are actively seeking feedback on this experiment at the following places: Feedback on the API should be raised as issues on GitHub. Bugs on the Chromium im...
- [Measuring soft navigations | Web Platform | Chrome for Developers](https://developer.chrome.com/docs/web-platform/soft-navigations-experiment) *(developer.chrome.com · 2026-09-02T00:00:00)*
  > This is the method the web-vitals library uses for soft navigations and what we recommend for this metric at this time. While these new APIs are limited to Chromium-based browsers only, sites may want to measure both by slicing by soft navigations, a...
- [Chrome Speed - Soft Navigation Heuristics Changelog](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/speed/metrics_changelog/soft_navigations.md) *(chromium.googlesource.com)*
  > This is a list of changes to Soft Navigation Heuristics · <strong>Chrome 147</strong> (Major changes after origin trial expired &amp; preparing to extend OT for 3 milestones)
- [A Guide To Soft Navigations And Core Web Vitals Reporting | DebugBear](https://www.debugbear.com/blog/soft-navigations) *(debugbear.com · 2026-08-27T14:01:14)*
  > Soft Navigations Change Lists (CLs) on Chromium Gerrit · The Chrome Origin Trial for Soft Navigation Heuristics, which is how the feature was tested on real sites ahead of the Chrome 151 release · The Experimenting with measuring soft navigations art...
- [Chrome Trial Aims To Fix Core Web Vitals For JavaScript-Heavy Sites](https://www.searchenginejournal.com/chrome-trial-aims-to-fix-core-web-vitals-for-javascript-heavy-sites/552762) *(searchenginejournal.com · 2025-08-01T21:39:12)*
  > Take it for a run on your app, and see if it correctly detects soft navigations on your application and let us know if it doesn’t!” ... <strong>This trial is a step toward making Core Web Vitals more accurate for modern JavaScript-heavy websites</str...
- [[blink-dev] Intent to Ship: PerformanceSoftNavigation and InteractionContentfulPaint performance entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16835.html) *(mail-archive.com)*
  > Chromium Trial Name SoftNavigationHeuristics Link to origin trial feedback summary https://github.com/WICG/soft-navigations/issues/47 Origin Trial documentation link https://github.com/WICG/soft-navigations#soft-navigations Risks Interoperability and...
- [[blink-dev] Re: Intent to Ship: PerformanceSoftNavigation and InteractionContentfulPaint performance entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16855.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; Chromium Trial Name &gt;&gt; &gt;&gt; SoftNavigationHeuristics &gt;&gt; &gt;&gt; Link to origin trial feedback summary &gt;&gt; &gt;&gt; https://github.com/WICG/soft-navigations/issues/47 &gt;&gt; &gt;&gt; Origin Trial documentation...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Extend Experiment: SoftNavigation performance entry](https://groups.google.com/a/chromium.org/g/blink-dev/c/lQIWTwQGFBo) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5144837209194496`)*
  > Intent to Extend Experiment: SoftNavigation performance entry Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Extend Experiment: S...
- [Re: [blink-dev] Re: Intent to Ship: PerformanceSoftNavigation and InteractionContentfulPaint performance entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16863.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/soft-navigations`)*
  > Re: [blink-dev] Re: Intent to Ship: PerformanceSoftNavigation and InteractionContentfulPaint performance entry Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: PerformanceSoftNavigation and InteractionContentfulPain...
- [[blink-dev] Re: Intent to Extend Experiment: SoftNavigation performance entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16246.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/soft-navigations`)*
  > [blink-dev] Re: Intent to Extend Experiment: SoftNavigation performance entry Skip to site navigation (Press enter) [blink-dev] Re: Intent to Extend Experiment: SoftNavigation performance entry Michal Mocny Wed, 01 Apr 2026 13:25:47 -0700 (...
- [ソフトナビゲーションの仕組みと使い方 | yossy.dev](https://yossy.dev/posts/soft-hard-navigation-and-bfcache) *(yossy.dev)* *(Cites: `https://github.com/WICG/soft-navigations`)*
  > ソフトナビゲーションの仕組みと使い方 | yossy.dev yossydev Blog rss github ソフトナビゲーションの仕組みと使い方 publishedAt: 2024/12/11 updatedAt: 2024/12/11 目次 Intro ソフトナビゲーションとは ハードナビゲーションとは ソフトナビゲーションはなぜ生まれたのか 開発者視点 ユーザー視点 ソフトナビゲーションを使ってみる まとめ 参考・関連 2024年 ユウトの一人アドベントカレンダー の...
- [Re: [blink-dev] Intent to Extend Experiment: Soft Navigation Heuristics](https://www.mail-archive.com/blink-dev@chromium.org/msg08990.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/soft-navigations`)*
  > Re: [blink-dev] Intent to Extend Experiment: Soft Navigation Heuristics Skip to site navigation (Press enter) Re: [blink-dev] Intent to Extend Experiment: Soft Navigation Heuristics Mike Taylor Tue, 23 Jan 2024 12:15:39 -0800 LGTM to extend...
- [Advancement core Web vitals and SPA ?](https://groups.google.com/g/web-vitals-feedback/c/q44oFCyQIg8) *(groups.google.com)* *(Cites: `https://github.com/WICG/soft-navigations`)*
  > Advancement core Web vitals and SPA ? Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Advancement core Web vitals and SPA ? 425 views Skip t...
- [[blink-dev] Intent to Extend Experiment: SoftNavigation performance entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16248.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/soft-navigations`)*
  > [blink-dev] Intent to Extend Experiment: SoftNavigation performance entry Skip to site navigation (Press enter) [blink-dev] Intent to Extend Experiment: SoftNavigation performance entry Chromestatus Wed, 01 Apr 2026 16:20:24 -0700 Contact e...
- [Intent to Extend Experiment: Soft Navigation Heuristics](https://groups.google.com/a/chromium.org/g/blink-dev/c/xxrmKr-6X38) *(groups.google.com · 2024-01-22T00:00:00)* *(Cites: `https://wicg.github.io/soft-navigations`)*
  > https://bit.ly/soft-navigation https://docs.google.com/document/d/1eUyQg3YLEmYjrTMC3p-F1MilECwCynhM6WIbIo05SPU/edit · https://wicg.github.io/soft-navigations · <strong>Exposes the (experimental) soft navigation heuristics [1] to web develop...

## 📚 Platform Documentation & Specifications

- [PerformanceSoftNavigation - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceSoftNavigation) *(developer.mozilla.org)*
- [PerformanceSoftNavigation: getLargestInteractionContentfulPaint() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceSoftNavigation/getLargestInteractionContentfulPaint) *(developer.mozilla.org)*
- [InteractionContentfulPaint: navigationId property - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/InteractionContentfulPaint/navigationId) *(developer.mozilla.org)*
- [soft-navigations/README.md at main · WICG/soft-navigations](https://github.com/WICG/soft-navigations/blob/main/README.md) *(github.com)*
- [GitHub - WICG/performance-entry: A proposal for a Custom Performance Entry specification.](https://github.com/WICG/performance-entry) *(github.com)*
- [largest-contentful-paint/README.md at main · w3c/largest-contentful-paint](https://github.com/w3c/largest-contentful-paint/blob/main/README.md) *(github.com)*
- [InteractionContentfulPaint - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/InteractionContentfulPaint) *(developer.mozilla.org)*
- [LargestContentfulPaint - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/LargestContentfulPaint) *(developer.mozilla.org)*
- [GitHub - w3c/largest-contentful-paint: Specification for the LargestContentfulPaint API · GitHub](https://github.com/w3c/largest-contentful-paint) *(github.com)*
- [Exposing Soft Navigations · Issue #71 · WICG/proposals](https://github.com/WICG/proposals/issues/71) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 35 result(s) found across 8 planned queries — **30 verified relevant**
  - `"chromestatus.com/feature/5144837209194496" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/WICG/soft-navigations" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (6 returned)
  - `"wicg.github.io/soft-navigations" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `new PerformanceObserver ("soft-navigation" OR "interaction-contentful-paint")` — *Finds real-world JavaScript code examples and PerformanceObserver implementations observing soft navigation and interaction paint entries.* (8 returned)
  - `"soft navigation" ("PerformanceSoftNavigation" OR "soft-navigation") (SPA OR "single-page application") (tutorial OR guide OR "web.dev")` — *Discovers developer guides, web.dev articles, and tutorials explaining how to measure SPA performance using soft navigation entries.* (2 returned)
  - `"interaction-contentful-paint" ("PerformanceObserver" OR "PerformanceEntry" OR WICG)` — *Locates API definitions, spec discussions, and implementation snippets specifically targeting the interaction-contentful-paint entry type.* (8 returned)
  - `"soft navigations" ("web-vitals" OR "origin trial" OR "Chrome Status" OR "Chromium")` — *Tracks browser engine implementation status, Chrome origin trial rollouts, and library integration in tooling like web-vitals.js.* (8 returned)
  - `"soft navigation" ("PerformanceSoftNavigation" OR WICG/soft-navigations) (feedback OR issues OR RFC OR "Next.js" OR "React")` — *Surfaces framework integration discussions, community feedback, and developer sentiment surrounding soft navigation heuristics.* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 1 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5144837209194496)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5144837209194496)
- [Specification](https://wicg.github.io/soft-navigations)
- [Chromium Tracking Bug](https://bugs.chromium.org/p/chromium/issues/detail?id=1338390)
