# JS Self-Profiling Markers

> **Report Week:** 2026-W37 | **Milestone:** Chrome 153 | **Category:** Origin trial

## Overview

The JavaScript Self-Profiling API lets a web application sample its own call stacks to measure performance on real user devices. This feature adds an optional marker field to each captured sample that identifies the type of browser activity running when the sample was taken: script, gc, style, layout, paint, or other. A trace normally shows gaps between stacks that cannot be interpreted, markers let developers attribute that time to browser work happening outside their JavaScript, for example distinguishing script execution from style recalculation, layout, or a garbage collection pause, making slow traces easier to analyze and optimize.

### Motivation

The JavaScript Self-Profiling API lets web apps sample their own call stacks on real user devices, but it profiles only the page's JavaScript, leaving unexplained gaps where time went to style, layout, paint, or garbage collection. Some of that work, like GC, interrupts stack execution and is invisible to stack sampling. A per-sample marker identifies the browser activity, letting developers attribute slow field traces to non-JavaScript work and optimize accordingly.

## Ecosystem Status

- **Momentum:** Moderate (70 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The JS Self-Profiling Markers feature extends the JavaScript Self-Profiling API by tagging stack samples with browser activity types (such as style, layout, paint, and GC pauses) to eliminate uninterpretable trace gaps during in-production performance sampling. Currently undergoing an Origin Trial in Chromium (M153), the capability addresses critical visibility limitations for complex web applications like Excel Online. However, it remains a Chromium-exclusive capability as the underlying profiling API lacks multi-vendor consensus.

### Recommendations
- Actionable Advice: Web teams building field profiling infrastructure should treat this feature strictly as an optional progressive enhancement for Chromium users, testing marker data via the Origin Trial or flags. For general cross-browser performance monitoring and main-thread blocking diagnostics, continue relying on standard Performance APIs and Long Animation Frames (LoAF) as primary baselines.
- In active Origin Trial in Chrome 153. Validate API ergonomics in staging/pilot environments before general availability.
- Standards Activity (WebKit): Latest discussion from @monica-ch: "Thanks @bkardell, checking @rniwa's four 2021 points (mozilla/standards-positions#477) against the current design. Short version: lazy mode narrows st..."
- Standards Activity (W3C TAG): Latest discussion from @monica-ch: "@marcoscaceres Just filed a WebKit position https://github.com/WebKit/standards-positions/issues/717..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [JS Self-Profiling API (including the Markers extension)](https://github.com/WebKit/standards-positions/issues/717) [open]
- **W3C TAG:** [Other Spec Review: JS Self-Profiling Markers (ProfilerSample.marker)](https://github.com/w3ctag/design-reviews/issues/1251) [open]
- **W3C TAG:** [State extension for JS Self-Profiling API.](https://github.com/w3ctag/design-reviews/issues/682) [closed]

## Packages & Polyfills

- [@types/wicg-js-self-profiling](https://www.npmjs.com/package/@types/wicg-js-self-profiling) `v2022.3.2` — TypeScript definitions for wicg-js-self-profiling

## 📰 Ecosystem Blogs & Articles

- [Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17121.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers Chris Harrelson Wed, 05 Aug 2026 08:08:52 -0700 Please provide an end milestone for ...
- [Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17128.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers 'Monica Chintala' via blink-dev Wed, 05 Aug 2026 13:59:07 -0700 On partners: Excel O...
- [[blink-dev] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17114.html) *(mail-archive.com)*
  > [blink-dev] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: JS Self-Profiling Markers Chromestatus Tue, 04 Aug 2026 15:31:06 -0700 Contact emails [email&#160;protected] , [email&...
- [Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17123.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers Daniel Bratell Wed, 05 Aug 2026 09:48:25 -0700 I don't consider it a showstopper for...
- [Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17130.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers Chris Harrelson Wed, 05 Aug 2026 14:02:43 -0700 LGTM On Wed, Aug 5, 2026 at 1:59 PM ...
- [JS Self-Profiling API In Practice - Web Performance Calendar](https://calendar.perfplanet.com/2021/js-self-profiling-api-in-practice) *(calendar.perfplanet.com)*
  > <strong>enum ProfilerMarker { &quot;script&quot;, &quot;gc&quot;, &quot;style&quot;, &quot;layout&quot;, &quot;paint&quot;, &quot;other&quot; };</strong> ... &quot;samples&quot; : [ { &quot;timestamp&quot; : 100, &quot;stackId&quot;: 2, &quot;marker&...
- [Chrome 153 beta | Blog | Chrome for Developers](https://developer.chrome.com/blog/chrome-153-beta) *(developer.chrome.com · 2026-08-20T00:00:00)*
  > A trace normally shows gaps between stacks that can&#x27;t be interpreted; <strong>markers let developers attribute that time to browser work happening outside their JavaScript</strong>, for example distinguishing script execution from style recalcul...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17121.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5201297767792640`)*
  > Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers Chris Harrelson Wed, 05 Aug 2026 08:08:52 -0700 Please provide an end mile...
- [Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17128.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/js-self-profiling/blob/main/markers.md`)*
  > Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers 'Monica Chintala' via blink-dev Wed, 05 Aug 2026 13:59:07 -0700 On partner...
- [[blink-dev] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17114.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/js-self-profiling/blob/main/markers.md`)*
  > [blink-dev] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: JS Self-Profiling Markers Chromestatus Tue, 04 Aug 2026 15:31:06 -0700 Contact emails [email&#160;protected]...
- [Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17123.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/js-self-profiling/pull/89`)*
  > Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers Daniel Bratell Wed, 05 Aug 2026 09:48:25 -0700 I don't consider it a shows...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 15 result(s) found across 7 planned queries — **7 verified relevant**
  - `"chromestatus.com/feature/5201297767792640" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/WICG/js-self-profiling/blob/main/markers.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"github.com/WICG/js-self-profiling/pull/89" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"JS Self-Profiling" OR "js-self-profiling" ("includeMarkers" OR "marker") ("gc" OR "layout" OR "paint")` — *Finds WebIDL definitions, code snippets, and API usage examples demonstrating how to initialize the Profiler with marker options and read sample markers.* (8 returned)
  - `"JavaScript Self-Profiling" ("markers" OR "marker") ("trace" OR "RUM" OR "garbage collection") (blog OR tutorial OR guide)` — *Discovers developer tutorials, practical performance optimization articles, and RUM guides explaining how to interpret non-JS gaps like GC and layout in traces.* (3 returned)
  - `("JS Self-Profiling" OR "js-self-profiling") "markers" ("Intent to Prototype" OR "Intent to Ship" OR "Blink-dev" OR "chromestatus")` — *Tracks browser engine announcements, Chromium status entries, and Blink-dev intent discussions regarding the implementation and rollout of markers.* (2 returned)
  - `site:github.com/WICG/js-self-profiling ("markers.md" OR "pull/89" OR "markers")` — *Surfaces specification discussions, RFCs, and developer feedback directly within the WICG repository and related pull requests.* (0 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 15 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **1 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 11 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5201297767792640)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5201297767792640)
- [Specification](https://github.com/WICG/js-self-profiling/pull/89)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40800459)
