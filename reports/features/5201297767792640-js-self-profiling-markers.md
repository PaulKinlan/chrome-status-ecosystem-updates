# JS Self-Profiling Markers

> **Report Week:** 2026-W38 | **Milestone:** Chrome 153 | **Category:** Origin trial

## Overview

The JavaScript Self-Profiling API lets a web application sample its own call stacks to measure performance on real user devices. This feature adds an optional marker field to each captured sample that identifies the type of browser activity running when the sample was taken: script, gc, style, layout, paint, or other. A trace normally shows gaps between stacks that cannot be interpreted, markers let developers attribute that time to browser work happening outside their JavaScript, for example distinguishing script execution from style recalculation, layout, or a garbage collection pause, making slow traces easier to analyze and optimize.

### Motivation

The JavaScript Self-Profiling API lets web apps sample their own call stacks on real user devices, but it profiles only the page's JavaScript, leaving unexplained gaps where time went to style, layout, paint, or garbage collection. Some of that work, like GC, interrupts stack execution and is invisible to stack sampling. A per-sample marker identifies the browser activity, letting developers attribute slow field traces to non-JavaScript work and optimize accordingly.

## Ecosystem Status

- **Momentum:** High (350 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** JS Self-Profiling Markers is currently Origin trial in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- In active Origin Trial in Chrome 153. Validate API ergonomics in staging/pilot environments before general availability.
- Standards Activity (WebKit): Latest discussion from @monica-ch: "Thanks @bkardell, checking @rniwa's four 2021 points (mozilla/standards-positions#477) against the current design. Short version: lazy mode narrows st..."
- Standards Activity (W3C TAG): Latest discussion from @monica-ch: "@marcoscaceres Just filed a WebKit position https://github.com/WebKit/standards-positions/issues/717..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Twitter" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [JS Self-Profiling API (including the Markers extension)](https://github.com/WebKit/standards-positions/issues/717) [open]
- **W3C TAG:** [Other Spec Review: JS Self-Profiling Markers (ProfilerSample.marker)](https://github.com/w3ctag/design-reviews/issues/1251) [open]
- **W3C TAG:** [State extension for JS Self-Profiling API.](https://github.com/w3ctag/design-reviews/issues/682) [closed]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Twitter](https://twitter.com/javascriptdaily/status/1479830759036928002?lang=en) — *by @javascriptdaily, 0 likes/RTs, 0 replies*

## Packages & Polyfills

- [@types/wicg-js-self-profiling](https://www.npmjs.com/package/@types/wicg-js-self-profiling) `v2022.3.2` — TypeScript definitions for wicg-js-self-profiling

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17128.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers 'Monica Chintala' via blink-dev Wed, 05 Aug 2026 13:59:07 -0700 On partners: Excel O...
- [\[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17114.html) *(mail-archive.com)*
  > [blink-dev] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: JS Self-Profiling Markers Chromestatus Tue, 04 Aug 2026 15:31:06 -0700 Contact emails [email&#160;protected] , [email&...
- [Intent to Prototype: State extension for JS Self-Profiling API](https://groups.google.com/a/chromium.org/g/blink-dev/c/m1hp39BMNcQ) *(groups.google.com)*
  > Intent to Prototype: State extension for JS Self-Profiling API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: State extension fo...
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17123.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers Daniel Bratell Wed, 05 Aug 2026 09:48:25 -0700 I don't consider it a showstopper for...
- [JS Self-Profiling Markers](https://chromestatus.com/feature/5201297767792640) *(chromestatus.com · 2026-07-22T00:00:00)*
  > Chrome Platform Status
- [What are the best tools for profiling Node.js applications? \| Reintech media](https://reintech.io/blog/the-best-tools-for-profiling-nodejs-applications) *(reintech.io · 2026-01-15T07:00:21)*
  > What are the best tools for profiling Node.js applications? The book for engineers Requisite Variety The Systems Method for Working with AI — Beyond Prompts and Tools → The book for engineers Requisite Variety The Systems Method for Working with AI ×...
- [The definitive guide to profiling React applications](https://blog.openreplay.com/the-definitive-guide-to-profiling-react-applications) *(blog.openreplay.com · 2021-03-12T00:00:00)*
  > The definitive guide to profiling React applications 12k Self-Host Try Cloud Free 12k Self-Host Try Cloud Free All articles The definitive guide to profiling React applications Learn how to properly profile a React application to understand where the...
- [An Introduction to Profiling in Node.js \| AppSignal Blog](https://blog.appsignal.com/2023/11/29/an-introduction-to-profiling-in-nodejs.html) *(blog.appsignal.com · 2023-11-29T00:00:00)*
  > An Introduction to Profiling in Node.js | AppSignal Blog Platform Features Error Tracking Performance Monitoring Host Monitoring Anomaly Detection Uptime Monitoring Metric Dashboards Log Management Process Monitoring Intelligence Workflow Dashboards ...
- [Profiling Node.js Applications: Step-by-Step Guide \| by NonCoderSuccess \| Medium](https://noncodersuccess.medium.com/profiling-node-js-applications-step-by-step-guide-38c75d8a8ef6) *(noncodersuccess.medium.com · 2024-11-19T11:47:07)*
  > While many third-party tools are available, Node.js also has a built-in profiler.
- [Chrome Profiler, A Complete Guide](https://www.codemancers.com/blog/2023-08-18-chrome-profiler) *(codemancers.com · 2023-08-18T00:00:00)*
  > It is extremely vital in the field of web development to produce performant solutions that require the least resources while providing a smooth experience for the user. Let me define profiling for you before we get started.
- [How to Add Multiple Markers in Leaflet.js: Step-by-Step Guide with Coordinates — xjavascript.com](https://www.xjavascript.com/blog/how-to-add-multiple-markers-in-leaflet-js) *(xjavascript.com)*
  > Whether you’re a beginner or have some web development experience, this step-by-step tutorial will help you implement multiple markers with ease.
- [JS Self-Profiling API In Practice - Web Performance Calendar](https://calendar.perfplanet.com/2021/js-self-profiling-api-in-practice) *(calendar.perfplanet.com)*
  > One of the issues with the current profiler is that non-JavaScript execution isn’t represented in profiles. As a result, top-level User Agent work like HTML Parsing, CSS Style and Layout Calculation, and Painting will appear as “empty” samples.
- [AddyOsmani.com - The JavaScript Self-Profiling API](https://addyosmani.com/blog/js-self-profiling) *(addyosmani.com)*
  > // Begin a new profiling session // Provide a sampleInterval (period which the session obtains samples) const profiler = await performance.profile({ sampleInterval: 10 }); // Do some expensive work performSomeTask(); // Stop the profiler and return t...
- [JS Self-Profiling API](https://wicg.github.io/js-self-profiling) *(wicg.github.io · 2026-02-18T00:00:00)*
  > <strong>This specification describes an API that allows web applications to control a sampling profiler for measuring client JavaScript execution times</strong>. Complex web applications currently have limited visibility into where JS execution time ...
- [JS Self-Profiling API In Practice - NicJ.net](https://nicj.net/js-self-profiling-api-in-practice) *(nicj.net · 2021-12-31T19:16:36)*
  > The JS Self-Profiling API is a new API, currently only available in Chrome versions 94+ (on Desktop and Android). It <strong>provides a sampling profiler that you can enable, from JavaScript, for any of your visitors</strong>.
- [Add an advanced marker \| Maps JavaScript API \| Google for Developers](https://developers.google.com/maps/documentation/javascript/examples/advanced-markers-simple) *(developers.google.com)*
  > This example demonstrates how to add an advanced marker to a map using the AdvancedMarkerElement class from the Google Maps JavaScript API.
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17121.html) *(mail-archive.com)*
  > Markers add a single optional marker field to the existing &gt; ProfilerSample, no new API surface or call pattern. The main ergonomic &gt; subtlety is graduated disclosure: style/layout are available everywhere, &gt; while script, gc, and paint appe...
- [JS Self-Profiling API](https://pr-preview.s3.amazonaws.com/WICG/js-self-profiling/64/7918fca...cnpsc:cb825d0.html) *(pr-preview.s3.amazonaws.com)*
  > <strong>WebIDLenum ProfilerMarker { &quot;gc&quot;, &quot;layout&quot;, &quot;paint&quot;, &quot;style&quot;</strong>
- [Intent to Prototype: js-profiling-mode=eager\|lazy Document-Policy for JS Self-Profiling API](https://groups.google.com/a/chromium.org/g/blink-dev/c/y3OkEzcrp24) *(groups.google.com · 2026-02-12T00:00:00)*
  > Initial public proposalhttps://github.com/WICG/js-self-profiling/pull/87 ... Link to entry on the Chrome Platform Statushttps://chromestatus.com/feature/5108831124324352?gate=5074849745731584
- [Intent to Ship: JS Self-Profiling API](https://groups.google.com/a/chromium.org/g/blink-dev/c/7K7Qt7aRJ8s/m/m0OtjLXoAwAJ) *(groups.google.com)*
  > Cross-origin iframes and other execution contexts that share an agent with a profiler will therefore not have their execution observable through this API. Timing attacks remain a concern for any API that could introduce a new source of high-resolutio...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17128.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/js-self-profiling/blob/main/markers.md`)*
  > Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers 'Monica Chintala' via blink-dev Wed, 05 Aug 2026 13:59:07 -0700 On partner...
- [\[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17114.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/js-self-profiling/blob/main/markers.md`)*
  > [blink-dev] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: JS Self-Profiling Markers Chromestatus Tue, 04 Aug 2026 15:31:06 -0700 Contact emails [email&#160;protected]...
- [Intent to Prototype: State extension for JS Self-Profiling API](https://groups.google.com/a/chromium.org/g/blink-dev/c/m1hp39BMNcQ) *(groups.google.com)* *(Cites: `https://github.com/WICG/js-self-profiling/blob/main/markers.md`)*
  > Intent to Prototype: State extension for JS Self-Profiling API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: State ex...
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17123.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/js-self-profiling/pull/89`)*
  > Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) Re: [blink-dev] Intent to Experiment: JS Self-Profiling Markers Daniel Bratell Wed, 05 Aug 2026 09:48:25 -0700 I don't consider it a shows...

## 📚 Platform Documentation & Specifications

- [JS Self-Profiling API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/JS_Self-Profiling_API) *(developer.mozilla.org)*
- [GitHub - WICG/js-self-profiling: Proposal for a programmable JS profiling API for collecting JS profiles from real end-user environments · GitHub](https://github.com/WICG/js-self-profiling) *(github.com)*
- [Profiler - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Profiler) *(developer.mozilla.org)*
- [js-self-profiling/index.html at main · WICG/js-self-profiling](https://github.com/WICG/js-self-profiling/blob/main/index.html) *(github.com)*
- [GitHub - pmeenan/waterfall-tools: Tools for parsing and visualizing network waterfalls · GitHub](https://github.com/pmeenan/waterfall-tools) *(github.com)*
- [1412951 - Add profiling markers for rasterization on the paint thread](https://bugzilla.mozilla.org/show_bug.cgi?id=1412951) *(bugzilla.mozilla.org)*
- [Marker support · Issue #3 · WICG/js-self-profiling](https://github.com/WICG/js-self-profiling/issues/3) *(github.com)*
- [1687857 - Implement the JavaScript Self-Profiling API](https://bugzilla.mozilla.org/show_bug.cgi?id=1687857) *(bugzilla.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 47 result(s) found across 12 planned queries — **28 verified relevant**
  - `"chromestatus.com/feature/5201297767792640" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WICG/js-self-profiling/blob/main/markers.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"github.com/WICG/js-self-profiling/pull/89" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"JS Self-Profiling Markers" API` — *Core feature API query* (3 returned)
  - `"JS Self-Profiling Markers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"self-profiling" OR "per-sample" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"JS Self-Profiling Markers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"JS Self-Profiling Markers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"JavaScript Self-Profiling API" (marker OR markers) ("gc" OR "layout" OR "paint") guide` — *Finds technical articles, deep dives, and performance engineering guides explaining how to use self-profiling markers to attribute browser gaps.* (8 returned)
  - `"js-self-profiling" marker ("script" OR "gc" OR "style" OR "layout") sample code` — *Locates concrete JavaScript code examples, implementation patterns, and WebIDL definitions showing the marker attribute in profile samples.* (8 returned)
  - `"JS Self-Profiling Markers" OR ("js-self-profiling" markers) ("Intent to Prototype" OR "Intent to Ship" OR chromestatus)` — *Discovers browser engine status updates, Chrome/Chromium shipping intents, and platform release timelines.* (5 returned)
  - `site:github.com/WICG/js-self-profiling ("markers.md" OR pull/89 OR "marker")` — *Surfaces specification discussions, PR feedback, issue threads, and consensus debate among browser vendors and web performance engineers.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 16 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **1 verified relevant**
- **Web Platform Tests (wpt.fyi):** 829 item(s) inspected

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
