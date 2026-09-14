# PerformanceSoftNavigation and InteractionContentfulPaint performance entry

> **Report Week:** 2026-W38 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Adds "soft-navigation" and "interaction-contentful-paint" PerformanceEntry types to the web performance timeline to track interaction-driven page performance, including for "soft" navigations (JS-driven navigations in Single Page Apps (SPAs)). This work expands on metrics like Largest Contentful Paint (LCP) and Interaction to Next Paint (INP).  The "interaction-contentful-paint" entry reports on new contentful paints within parts of the page modified by a user interaction, helping developers understand interaction loading latency. This proposal tracks the effects of interactions across async tasks (like fetch requests).  The "soft-navigation" entry reports same-document history state changes initiated by interactions, establishing a new time origin to correctly attribute subsequent performance data to the active route rather than the initial document URL.

### Motivation

Web developers have been asking for a way to measure the loading performance of "soft navigations" (JS-driven navigations in Single Page Apps (SPA)), and to integrate such navigations into the web performance timeline in general.

Besides getting useful new performance insights for these, having a shared standard definition for such navigations helps attribution for all existing performance timeline data (i.e. resource timings), and provides better default aggregation for metrics like INP or CLS with better URL attribution.

## Ecosystem Status

- **Momentum:** High (255 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** PerformanceSoftNavigation and InteractionContentfulPaint performance entry is currently Enabled by default in Chrome 151. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Soft Navigations](https://github.com/WebKit/standards-positions/issues/235) [closed]
- **Mozilla:** [Soft Navigations](https://github.com/mozilla/standards-positions/issues/854) [open]

## 📰 Ecosystem Blogs & Articles

- [Intent to Extend Experiment: SoftNavigation performance entry](https://groups.google.com/a/chromium.org/g/blink-dev/c/lQIWTwQGFBo) *(groups.google.com)*
  > Intent to Extend Experiment: SoftNavigation performance entry Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Extend Experiment: SoftNavigat...
- [Re: \[blink-dev\] Re: Intent to Ship: PerformanceSoftNavigation and InteractionContentfulPaint performance entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16863.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: PerformanceSoftNavigation and InteractionContentfulPaint performance entry Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: PerformanceSoftNavigation and InteractionContentfulPaint performa...
- [\[blink-dev\] Re: Intent to Extend Experiment: SoftNavigation performance entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16246.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Extend Experiment: SoftNavigation performance entry Skip to site navigation (Press enter) [blink-dev] Re: Intent to Extend Experiment: SoftNavigation performance entry Michal Mocny Wed, 01 Apr 2026 13:25:47 -0700 (The automa...
- [ソフトナビゲーションの仕組みと使い方 \| yossy.dev](https://yossy.dev/posts/soft-hard-navigation-and-bfcache) *(yossy.dev)*
  > ソフトナビゲーションの仕組みと使い方 | yossy.dev yossydev Blog rss github ソフトナビゲーションの仕組みと使い方 publishedAt: 2024/12/11 updatedAt: 2024/12/11 目次 Intro ソフトナビゲーションとは ハードナビゲーションとは ソフトナビゲーションはなぜ生まれたのか 開発者視点 ユーザー視点 ソフトナビゲーションを使ってみる まとめ 参考・関連 2024年 ユウトの一人アドベントカレンダー の11日目の記事です。...
- [Re: \[blink-dev\] Intent to Extend Experiment: Soft Navigation Heuristics](https://www.mail-archive.com/blink-dev@chromium.org/msg08990.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Extend Experiment: Soft Navigation Heuristics Skip to site navigation (Press enter) Re: [blink-dev] Intent to Extend Experiment: Soft Navigation Heuristics Mike Taylor Tue, 23 Jan 2024 12:15:39 -0800 LGTM to extend to 123 in...
- [Advancement core Web vitals and SPA ?](https://groups.google.com/g/web-vitals-feedback/c/q44oFCyQIg8) *(groups.google.com)*
  > Advancement core Web vitals and SPA ? Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Advancement core Web vitals and SPA ? 428 views Skip to first un...
- [Intent to Extend Experiment: Soft Navigation Heuristics](https://groups.google.com/a/chromium.org/g/blink-dev/c/xxrmKr-6X38) *(groups.google.com · 2024-01-22T00:00:00)*
  > Intent to Extend Experiment: Soft Navigation Heuristics Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Extend Experiment: Soft Navigation H...
- [\[blink-dev\] Intent to Ship: PerformanceSoftNavigation and InteractionContentfulPaint performance entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16835.html) *(mail-archive.com)*
  > Note: the spec currently does not limit this API only the main frame top level document, but the chromium implementation does. We expect to change the implementation to expose InteractionContentfulPaint also to frames, but may change the spec to limi...
- [Re: \[blink-dev\] Re: Intent to Ship: PerformanceSoftNavigation and InteractionContentfulPaint performance entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16862.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Note: the spec currently does not limit this API only the main frame &gt;&gt;&gt;&gt; top level document, but the chromium implementation does. We expect to &gt;&gt;&gt;&gt; change the implementation to expose Intera...
- [\[blink-dev\] Re: Intent to Ship: PerformanceSoftNavigation and InteractionContentfulPaint performance entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16855.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; Note: the spec currently does not limit this API only the main frame top &gt;&gt; level document, but the chromium implementation does. We expect to change &gt;&gt; the implementation to expose InteractionContentfulPaint also to fra...
- [Interaction to Next Paint (INP) Optimization: The Complete Guide to Fa \| LinkGraph](https://www.linkgraph.com/blog/interaction-to-next-paint-optimization) *(linkgraph.com · 2026-01-22T00:00:00)*
  > // Observe Long Animation Frames const observer = new PerformanceObserver((list) =&gt; { for (const entry of list.getEntries()) { console.log(&#x27;Long Animation Frame:&#x27;, { duration: entry.duration, blockingDuration: entry.blockingDuration, scr...
- [Performance features reference \| Chrome DevTools \| Chrome for Developers](https://developer.chrome.com/docs/devtools/performance/reference) *(developer.chrome.com · 2025-04-03T00:00:00)*
  > A reference on all the ways to record and analyze performance in Chrome DevTools.
- [Final Soft Navigations origin trial starting in Chrome 147 \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/final-soft-navigations-origin-trial) *(developer.chrome.com)*
  > <strong>An InteractionContentfulPaint entry that allows measuring multiple, increasingly-sized, contentful paints after interactions to measure LCP for soft navigations</strong>.
- [Experimenting with measuring soft navigations \| Web Platform \| Chrome for Developers](https://developer.chrome.google.cn/docs/web-platform/soft-navigations-experiment) *(developer.chrome.google.cn · 2025-07-31T00:00:00)*
  > <strong>A new interaction-contentful-paint will be emitted after interactions that cause a meaningful paint</strong>. This can be used to measure Largest Contentful Paint (LCP) for soft navigations when such a paint spans a soft navigation.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Extend Experiment: SoftNavigation performance entry](https://groups.google.com/a/chromium.org/g/blink-dev/c/lQIWTwQGFBo) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5144837209194496`)*
  > Intent to Extend Experiment: SoftNavigation performance entry Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Extend Experiment: S...
- [Re: \[blink-dev\] Re: Intent to Ship: PerformanceSoftNavigation and InteractionContentfulPaint performance entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16863.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/soft-navigations`)*
  > Re: [blink-dev] Re: Intent to Ship: PerformanceSoftNavigation and InteractionContentfulPaint performance entry Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: PerformanceSoftNavigation and InteractionContentfulPain...
- [\[blink-dev\] Re: Intent to Extend Experiment: SoftNavigation performance entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16246.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/soft-navigations`)*
  > [blink-dev] Re: Intent to Extend Experiment: SoftNavigation performance entry Skip to site navigation (Press enter) [blink-dev] Re: Intent to Extend Experiment: SoftNavigation performance entry Michal Mocny Wed, 01 Apr 2026 13:25:47 -0700 (...
- [ソフトナビゲーションの仕組みと使い方 \| yossy.dev](https://yossy.dev/posts/soft-hard-navigation-and-bfcache) *(yossy.dev)* *(Cites: `https://github.com/WICG/soft-navigations`)*
  > ソフトナビゲーションの仕組みと使い方 | yossy.dev yossydev Blog rss github ソフトナビゲーションの仕組みと使い方 publishedAt: 2024/12/11 updatedAt: 2024/12/11 目次 Intro ソフトナビゲーションとは ハードナビゲーションとは ソフトナビゲーションはなぜ生まれたのか 開発者視点 ユーザー視点 ソフトナビゲーションを使ってみる まとめ 参考・関連 2024年 ユウトの一人アドベントカレンダー の...
- [Re: \[blink-dev\] Intent to Extend Experiment: Soft Navigation Heuristics](https://www.mail-archive.com/blink-dev@chromium.org/msg08990.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/soft-navigations`)*
  > Re: [blink-dev] Intent to Extend Experiment: Soft Navigation Heuristics Skip to site navigation (Press enter) Re: [blink-dev] Intent to Extend Experiment: Soft Navigation Heuristics Mike Taylor Tue, 23 Jan 2024 12:15:39 -0800 LGTM to extend...
- [Advancement core Web vitals and SPA ?](https://groups.google.com/g/web-vitals-feedback/c/q44oFCyQIg8) *(groups.google.com)* *(Cites: `https://github.com/WICG/soft-navigations`)*
  > Advancement core Web vitals and SPA ? Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Advancement core Web vitals and SPA ? 428 views Skip t...
- [Intent to Extend Experiment: Soft Navigation Heuristics](https://groups.google.com/a/chromium.org/g/blink-dev/c/xxrmKr-6X38) *(groups.google.com · 2024-01-22T00:00:00)* *(Cites: `https://wicg.github.io/soft-navigations`)*
  > Intent to Extend Experiment: Soft Navigation Heuristics Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Extend Experiment: Soft Na...

## 📚 Platform Documentation & Specifications

- [Performance APIs - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API) *(developer.mozilla.org)*
- [Performance: navigation property - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Performance/navigation) *(developer.mozilla.org)*
- [soft-navigations/README.md at main · WICG/soft-navigations](https://github.com/WICG/soft-navigations/blob/main/README.md) *(github.com)*
- [developer.chrome.com/site/en/blog/soft-navigations-experiment/index.md at main · GoogleChrome/developer.chrome.com](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/blog/soft-navigations-experiment/index.md) *(github.com)*
- [InteractionContentfulPaint - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/InteractionContentfulPaint) *(developer.mozilla.org)*
- [PerformanceSoftNavigation: getLargestInteractionContentfulPaint() method](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceSoftNavigation/getLargestInteractionContentfulPaint) *(developer.mozilla.org)*
- [PerformanceSoftNavigation](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceSoftNavigation) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 37 result(s) found across 8 planned queries — **19 verified relevant**
  - `"chromestatus.com/feature/5144837209194496" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/WICG/soft-navigations" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (6 returned)
  - `"wicg.github.io/soft-navigations" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"PerformanceSoftNavigation and InteractionContentfulPaint performance entry" API` — *Core feature API query* (3 returned)
  - `"PerformanceSoftNavigation and InteractionContentfulPaint performance entry" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (7 returned)
  - `"soft-navigation" OR "interaction-contentful-paint" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"PerformanceSoftNavigation and InteractionContentfulPaint performance entry" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"PerformanceSoftNavigation and InteractionContentfulPaint performance entry" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (3 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
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
