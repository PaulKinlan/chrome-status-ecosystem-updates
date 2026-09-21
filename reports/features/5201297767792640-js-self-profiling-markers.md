# JS Self-Profiling Markers

> **Report Week:** 2026-W39 | **Milestone:** Chrome 153 | **Category:** Origin trial

## Overview

The JavaScript Self-Profiling API lets a web application sample its own call stacks to measure performance on real user devices. This feature adds an optional marker field to each captured sample that identifies the type of browser activity running when the sample was taken: script, gc, style, layout, paint, or other. A trace normally shows gaps between stacks that cannot be interpreted, markers let developers attribute that time to browser work happening outside their JavaScript, for example distinguishing script execution from style recalculation, layout, or a garbage collection pause, making slow traces easier to analyze and optimize.

### Motivation

The JavaScript Self-Profiling API lets web apps sample their own call stacks on real user devices, but it profiles only the page's JavaScript, leaving unexplained gaps where time went to style, layout, paint, or garbage collection. Some of that work, like GC, interrupts stack execution and is invisible to stack sampling. A per-sample marker identifies the browser activity, letting developers attribute slow field traces to non-JavaScript work and optimize accordingly.

## Ecosystem Status

- **Momentum:** High (310 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** JS Self-Profiling Markers extend the existing JS Self-Profiling API by tagging stack samples with browser subsystem markers ('script', 'gc', 'style', 'layout', 'paint', 'other'), filling critical telemetry gaps around rendering and garbage collection pauses. Driven primarily by Microsoft and Google, the capability is entering an Origin Trial across Chromium channels (Chrome 153–161) with Cross-Origin Isolation (COI) gating applied to privileged markers. However, broader web consensus remains stalled because neither Safari (WebKit) nor Firefox (Gecko) has implemented the underlying base profiling specification.

### Recommendations
- Actionable Advice: Evaluate the feature during the Chrome 153 Origin Trial if you run specialized APM tooling or high-complexity SPAs requiring deeper production diagnostics in Chromium, ensuring your pages are cross-origin isolated. For standard production stacks, treat JS Self-Profiling strictly as an optional progressive enhancement and do not rely on it for universal performance budgets.
- In active Origin Trial in Chrome 153. Validate API ergonomics in staging/pilot environments before general availability.
- Standards Activity (WebKit): Latest discussion from @monica-ch: "Thanks @bkardell, checking @rniwa's four 2021 points (mozilla/standards-positions#477) against the current design. Short version: lazy mode narrows st..."
- Standards Activity (W3C TAG): Latest discussion from @monica-ch: "@marcoscaceres Just filed a WebKit position https://github.com/WebKit/standards-positions/issues/717..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [JS Self-Profiling API (including the Markers extension)](https://github.com/WebKit/standards-positions/issues/717) [open]
- **W3C TAG:** [Other Spec Review: JS Self-Profiling Markers (ProfilerSample.marker)](https://github.com/w3ctag/design-reviews/issues/1251) [open]
- **W3C TAG:** [State extension for JS Self-Profiling API.](https://github.com/w3ctag/design-reviews/issues/682) [closed]

## 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE_dHidGD3wiK3I3bH7R53sck38aESwjdBo_6UougI87OidGrIa50x1usWk9nmS4PXHpuJWK1hHn-lUSQVpkk9fp4ZLiBUUsOTVBRpK8-1n3FD0fufUk9WwZbWEy5F1uCL9vbUC4Oy6nXE3Iny_) *(vertexaisearch.cloud.google.com)*
  > JS Self-Profiling API (including the Markers extension) · Issue #717 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or wind...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHj-GkaE87zwVOYo93qBtqQoT7K7IVGI2YlIK6bLOmlqrngWwcbIbR3Pk8nTYJVQ0eyuTpi_8A8g0qllxXoFa5xPQ2-JtWZ2IUSQexm1Lqn-YpVPCPCsbwfGhcb8XuRfZckEVl0SY9UJ7feHZgmjg==) *(vertexaisearch.cloud.google.com)*
  > GitHub - victorhuangwq/js-profiler-markers-demo · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You signed out...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF6i6jEExNwAA1qGBbUPGKdd24af2pXn0r7xTXuyAelLwnlg5hwzYqpvOnqWL1-fJM5sURjO8RXL8_TZZn6kcyMCdTNcCDQeDaWSlFdl_TKKvrEf8NExp-fuoFpMA1dRBNAfBWzNhCPBalmVg8calp9yJN-RLwmtVX5OHzxDGyw5SYu3jn7DshlSdEcfW-WkPTePKPCSTA=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of "JS Self-Profiling Markers"  The **JS Self-Profiling API** allows web applications to collect sampled JavaScript call stacks directly from real user devices in production using `new Profiler()`. However, a long-standing limitation of s
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEpiaEhXDv77hpcLyT2XCAPuiWZsAZ--sursuwfYzcJeWxWdUtBoePIB2QAjwbHhnbSagVbW1rsugNkJgptKaT29lK-K7QSdXuEelp0TkH3lA20HBLMGgUPjORid3Jf75-sxSaP0IAtSpBDdGCZnw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of "JS Self-Profiling Markers"  The **JS Self-Profiling API** allows web applications to collect sampled JavaScript call stacks directly from real user devices in production using `new Profiler()`. However, a long-standing limitation of s
- [Implement markers for JS Self-Profiling API \[40800459\] - Chromium](https://issues.chromium.org/issues/40800459) *(issues.chromium.org)*
  > This CL exposes that existing feature through an Origin Trial (&quot;JSSelfProfilingMarkers&quot;) so non-COI trial documents see the safe &quot;style&quot;/&quot;layout&quot; subset, while COI documents see the full set Markers spec: https://github....
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17128.html) *(mail-archive.com)*
  > &gt; &gt; On Tue, Aug 4, 2026 at 3:30 ....com/WICG/js-self-profiling/pull/89 &gt;&gt; &gt;&gt; *Summary* &gt;&gt; <strong>The JavaScript Self-Profiling API lets a web application sample its own &gt;&gt; call stacks to measure performance on real user...
- [\[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17114.html) *(mail-archive.com)*
  > Interested partners include Excel Online, which will consume the trial to enrich its existing JS self-profiling telemetry, and Datadog, which collects JS self-profiling data as part of its RUM product. Origin Trial documentation link https://<strong>...
- [Intent to Prototype: State extension for JS Self-Profiling API](https://groups.google.com/a/chromium.org/g/blink-dev/c/m1hp39BMNcQ) *(groups.google.com)*
  > https://github.com/WICG/js-self-profiling/blob/main/markers.md · No specification available yet for this extension · <strong>Adds information about what type of non javascript work is being done by the user agent to samples from the JS Self-Profiling...
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17123.html) *(mail-archive.com)*
  > *Contact emails* [email protected], ... https://github.com/WICG/js-self-profiling/pull/89 *Summary* <strong>The JavaScript Self-Profiling API lets a web application sample its own call stacks to measure performance on real user devices</strong>....
- [JS Self-Profiling Markers](https://chromestatus.com/feature/5201297767792640) *(chromestatus.com · 2026-07-22T00:00:00)*
  > We cannot provide a description for this page right now
- [Profiling Node.js Applications: Step-by-Step Guide \| by NonCoderSuccess \| Medium](https://noncodersuccess.medium.com/profiling-node-js-applications-step-by-step-guide-38c75d8a8ef6) *(noncodersuccess.medium.com · 2024-11-19T11:47:07)*
  > While many third-party tools are available, Node.js also has a built-in profiler.
- [How to Add Multiple Markers in Leaflet.js: Step-by-Step Guide with Coordinates — xjavascript.com](https://www.xjavascript.com/blog/how-to-add-multiple-markers-in-leaflet-js) *(xjavascript.com)*
  > Whether you’re a beginner or have some web development experience, this step-by-step tutorial will help you implement multiple markers with ease.
- [JS Self-Profiling API In Practice - Web Performance Calendar](https://calendar.perfplanet.com/2021/js-self-profiling-api-in-practice) *(calendar.perfplanet.com)*
  > One of the issues with the current profiler is that non-JavaScript execution isn’t represented in profiles. As a result, top-level User Agent work like HTML Parsing, CSS Style and Layout Calculation, and Painting will appear as “empty” samples.
- [JS Self-Profiling API](https://wicg.github.io/js-self-profiling) *(wicg.github.io · 2026-02-18T00:00:00)*
  > <strong>This specification describes an API that allows web applications to control a sampling profiler for measuring client JavaScript execution times</strong>. Complex web applications currently have limited visibility into where JS execution time ...
- [AddyOsmani.com - The JavaScript Self-Profiling API](https://addyosmani.com/blog/js-self-profiling) *(addyosmani.com)*
  > // Begin a new profiling session // Provide a sampleInterval (period which the session obtains samples) const profiler = await performance.profile({ sampleInterval: 10 }); // Do some expensive work performSomeTask(); // Stop the profiler and return t...
- [JS Self-Profiling API In Practice - NicJ.net](https://nicj.net/js-self-profiling-api-in-practice) *(nicj.net · 2021-12-31T19:16:36)*
  > The JS Self-Profiling API is a new API, currently only available in Chrome versions 94+ (on Desktop and Android). It <strong>provides a sampling profiler that you can enable, from JavaScript, for any of your visitors</strong>.
- [JavaScript PWA Guide 2026: Build Progressive Web Apps with TypeScript](https://reintech.io/blog/javascript-pwa-progressive-web-apps-complete-guide-2026) *(reintech.io)*
  > Shipping a PWA requires different considerations than traditional web apps.
- [ELT with Dataform on Google Cloud](https://dev.to/gde/elt-with-dataform-on-google-cloud-kc9) *(dev.to · Mazlum Tosun · Sep 16)*
  > A real-world ELT pipeline with Dataform and BigQuery — staging and mart layers, JavaScript includes, dynamic tables and views, GitHub sync over SSH and Terraform provisioning.
- [I Built a Visual JavaScript Execution Tool Because Reading the Event Loop Wasn’t Enough](https://dev.to/sazid_khan_42435bbe1c9a9c/i-built-a-visual-javascript-execution-tool-because-reading-the-event-loop-wasnt-enough-1l51) *(dev.to · sazid khan · Sep 21)*
  > One of the hardest parts of learning JavaScript isn’t writing the syntax.  It’s understanding what...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Implement markers for JS Self-Profiling API \[40800459\] - Chromium](https://issues.chromium.org/issues/40800459) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5201297767792640`)*
  > This CL exposes that existing feature through an Origin Trial (&quot;JSSelfProfilingMarkers&quot;) so non-COI trial documents see the safe &quot;style&quot;/&quot;layout&quot; subset, while COI documents see the full set Markers spec: https...
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17128.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/js-self-profiling/blob/main/markers.md`)*
  > &gt; &gt; On Tue, Aug 4, 2026 at 3:30 ....com/WICG/js-self-profiling/pull/89 &gt;&gt; &gt;&gt; *Summary* &gt;&gt; <strong>The JavaScript Self-Profiling API lets a web application sample its own &gt;&gt; call stacks to measure performance on...
- [\[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17114.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/js-self-profiling/blob/main/markers.md`)*
  > Interested partners include Excel Online, which will consume the trial to enrich its existing JS self-profiling telemetry, and Datadog, which collects JS self-profiling data as part of its RUM product. Origin Trial documentation link https:...
- [Intent to Prototype: State extension for JS Self-Profiling API](https://groups.google.com/a/chromium.org/g/blink-dev/c/m1hp39BMNcQ) *(groups.google.com)* *(Cites: `https://github.com/WICG/js-self-profiling/blob/main/markers.md`)*
  > https://github.com/WICG/js-self-profiling/blob/main/markers.md · No specification available yet for this extension · <strong>Adds information about what type of non javascript work is being done by the user agent to samples from the JS Self...
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17123.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/js-self-profiling/pull/89`)*
  > *Contact emails* [email protected], ... https://github.com/WICG/js-self-profiling/pull/89 *Summary* <strong>The JavaScript Self-Profiling API lets a web application sample its own call stacks to measure performance on real user devices</str...

## 📚 Platform Documentation & Specifications

- [JS Self-Profiling API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/JS_Self-Profiling_API) *(developer.mozilla.org)*
- [GitHub - WICG/js-self-profiling: Proposal for a programmable JS profiling API for collecting JS profiles from real end-user environments · GitHub](https://github.com/WICG/js-self-profiling) *(github.com)*
- [Profiler - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Profiler) *(developer.mozilla.org)*
- [js-self-profiling/index.html at main · WICG/js-self-profiling](https://github.com/WICG/js-self-profiling/blob/main/index.html) *(github.com)*
- [asm.js](https://developer.mozilla.org/en-US/docs/Games/Tools/asm.js) *(developer.mozilla.org)*
- [Node.js](https://developer.mozilla.org/en-US/docs/Glossary/Node.js) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 37 result(s) found across 8 planned queries — **17 verified relevant**
  - `"chromestatus.com/feature/5201297767792640" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/WICG/js-self-profiling/blob/main/markers.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"github.com/WICG/js-self-profiling/pull/89" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"JS Self-Profiling Markers" API` — *Core feature API query* (3 returned)
  - `"JS Self-Profiling Markers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"self-profiling" OR "per-sample" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"JS Self-Profiling Markers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"JS Self-Profiling Markers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **4 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 17 result(s) found — **2 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 830 item(s) inspected

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
