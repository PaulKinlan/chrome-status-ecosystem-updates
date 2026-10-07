# JS Self-Profiling Markers

> **Report Week:** 2026-W41 | **Milestone:** Chrome 153 | **Category:** Origin trial

## Overview

The JavaScript Self-Profiling API lets a web application sample its own call stacks to measure performance on real user devices. This feature adds an optional marker field to each captured sample that identifies the type of browser activity running when the sample was taken: script, gc, style, layout, paint, or other. A trace normally shows gaps between stacks that cannot be interpreted, markers let developers attribute that time to browser work happening outside their JavaScript, for example distinguishing script execution from style recalculation, layout, or a garbage collection pause, making slow traces easier to analyze and optimize.

### Motivation

The JavaScript Self-Profiling API lets web apps sample their own call stacks on real user devices, but it profiles only the page's JavaScript, leaving unexplained gaps where time went to style, layout, paint, or garbage collection. Some of that work, like GC, interrupts stack execution and is invisible to stack sampling. A per-sample marker identifies the browser activity, letting developers attribute slow field traces to non-JavaScript work and optimize accordingly.

## Ecosystem Status

- **Momentum:** High (370 points)
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
- 🐦 **Twitter / X:** [Amy Dutton (@selfteachme) on X](https://twitter.com/selfteachme/status/1465443021948923909) — *by @selfteachme, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Oxford Craniofacial Unit on X: "Do you know what #Craniosynostosis is? September is #CraniosynostosisAwarenessMonth and we are profiling the work of our specialist multidisciplinary @OxfordCranio Unit team @OUHospitals #CraniosynostosisAwareness #Cranio #Craniofacial" / X](https://twitter.com/OxfordCranio/status/1300697493165006856) — *by @OxfordCranio, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGduQ6BG2aR2mJCMTv9wKX5pzEVjihN5-zaqlzEqKAK1mTzhlhAYfZzhs5kI8zuQIChBgrCd8c1yo1FTQzI6iXL9sY4QFGLPSnyBp4kLYseen-do49lcTf8vqpYQsbWa4_eGyElguvtW8Vkj7bn9w==) *(vertexaisearch.cloud.google.com)*
  > JS Self-Profiling API (including the Markers extension) · Issue #717 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or wind...
- [windows.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFhG-2AB_VcAn5-uA_UToYHB5TtEh3D2TKvP2Fktln3QhugOP_eG3ZNP0azkKKSQy8Nc7vq1iTVxnAYPaYT9oLtA7bUxhfSyaFXOaqbKGz_INmyqw1ODXmTO0jZ9mHwW_VOB0JPhQBMJyrA_IAGXtV1928TeZlWWbGg0XDvX0HnhrCO2sjWNNhL3_Blth2Nx6Siu6Z2E6ngPAnYYTpsiDGEDqEjYyQNfzmrbqAmb1IHcoTTCMnjTBbJWg==) *(vertexaisearch.cloud.google.com)*
  > New in Edge for developers – Create better components and make your site agent-ready - Microsoft Edge Blog Skip to main content Skip to main content Windows Blogs Windows Experience Devices Windows Developer Microsoft Edge Windows Insider Microsoft 3...
- [nicj.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFGfwutf8TaqTex588obLOpFMTu4iNQFuJ-sFh6hGfDQR89yCGxUpsFLQ_AvSO63R5dHmSucV5TT3yAta5IxAHbmYlGfyky4zPWhDRcqnNal48EVrNjKJgI3hn-_QntEzjaZyXa224gQgs=) *(vertexaisearch.cloud.google.com)*
  > JS Self-Profiling API In Practice - NicJ.net JS Self-Profiling API In Practice December 31st, 2021 Goto comments Leave a comment Table of Contents The JS Self-Profiling API What is Sampled Profiling? Downsides to Sampled Profiling API Document Policy...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEnRqtXAr3TDE58S5c_J14orKTdJieP94ujWsT5JSefCUwM36TmAZ_2_ADIwgxfuxX9CASW1_015oM68Ogn4yBHkYDPGA928i7keWCzmMat9X1ZkUNx-CXxEJtJdXpaHX4lWjUY) *(vertexaisearch.cloud.google.com)*
  > Chrome 153 | Release notes | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFZ_ukSDCNiTkvCfwKMq8Q2qozt-TEmURPbUjS61C-_Vd_JK-F_XnvSVun5MJM0bG4D5cbD8yWfl7j7Hv54Q27QHrBVo3Qm7wItBSvTMobl9yD-kqhu4KX0iW1-5UWo8bNrS5UTQrSSpTTp_cT9pH9e) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF8SKAuLAGMrb3UU69Cy_Dh-J3QHyOkNbOYZovCdNZ-pzdMxi5XEjrKgHLtSy4lKMILtAFF3PRglGEY56y18NU7EBgGLB-R_NteDJiLg2VaLobaUmIYF29bSOhVzHM1Zrr328nwnYlI) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [sentry.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF362iHlipGC-ueT-U9y3t2PJog6-QKRI5bcqGT-wfh60ugvS4pUVFi8HZA685Befk2FzTrHu0BgK95CkMBfcZ7JSjSCCrp6cCGQS9VHM6MJrLtekSlq6CY9iEnYENiO--QhPhhezd5zQMlZEd6EihjjKluVshAa2Lkas6kBA==) *(vertexaisearch.cloud.google.com)*
  > Improving INP and FID with production profiling | Sentry Blog Skip to main content ← Back to Blog Home Improving INP and FID with production profiling Jonas Badalic - March 26, 2024 · 12 min read On March 12 Google began promoting INP (Interaction to...
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE_1J30w6l7FxpKnFgBKOi_Rl4x2_sXJmabKUfkKCd5Ac_QsMfkFQlmJYhHtKU36SVTB_azfBhBsUziAlVOeggGXum_IDYJ77NZUsaOOD7BpfSaz2HutG6pOvHc95ioCYl0TxK9KPhFT7RcOo22z800MLkc-LXzBj0_wrnk-JJt) *(vertexaisearch.cloud.google.com)*
  > Microsoft Edge Origin Trials Skip to main content Sign-in to GitHub header Origin Trials Origin trials grant you access to experimental features while they are in design. Trials are open to all developers and are limited in duration. Active Trials Co...
- [Implement markers for JS Self-Profiling API \[40800459\] - Chromium](https://issues.chromium.org/issues/40800459) *(issues.chromium.org)*
  > This CL exposes that existing feature through an Origin Trial (&quot;JSSelfProfilingMarkers&quot;) so non-COI trial documents see the safe &quot;style&quot;/&quot;layout&quot; subset, while COI documents see the full set Markers spec: https://github....
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17130.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; *Origin Trial documentation link* &gt;&gt;&gt; <strong>https://github.com/WICG/js-self-profiling/blob/main/markers.md</strong> &gt;&gt;&gt; &gt;&gt;&gt; *Risks* &gt;&gt;&gt; &gt;&gt;&gt; &gt;&gt;&gt; *Interoperability and Co...
- [\[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17114.html) *(mail-archive.com)*
  > Interested partners include Excel Online, which will consume the trial to enrich its existing JS self-profiling telemetry, and Datadog, which collects JS self-profiling data as part of its RUM product. <strong>Origin Trial documentation link https://...
- [Intent to Prototype: State extension for JS Self-Profiling API](https://groups.google.com/a/chromium.org/g/blink-dev/c/m1hp39BMNcQ) *(groups.google.com)*
  > https://github.com/WICG/js-self-profiling/blob/main/markers.md · No specification available yet for this extension · <strong>Adds information about what type of non javascript work is being done by the user agent to samples from the JS Self-Profiling...
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17121.html) *(mail-archive.com)*
  > On Tue, Aug 4, 2026 at 3:30 PM ...hub.com/WICG/js-self-profiling/pull/89 &gt; &gt; *Summary* &gt; <strong>The JavaScript Self-Profiling API lets a web application sample its own &gt; call stacks to measure performance on real user devices</strong>......
- [JS Self-Profiling Markers](https://chromestatus.com/feature/5201297767792640) *(chromestatus.com · 2026-07-22T00:00:00)*
  > We cannot provide a description for this page right now
- [What are the best tools for profiling Node.js applications? \| Reintech media](https://reintech.io/blog/the-best-tools-for-profiling-nodejs-applications) *(reintech.io · 2026-01-15T07:00:21)*
  > <strong>The interactive HTML output lets you zoom into specific call stacks and search for function names</strong>. Use Flame when you need detailed CPU profiling with better visualization than the built-in profiler provides.
- [Jscrambler 101 — Profiling: For performance-critical apps](https://jscrambler.com/getting-started/101-profiling) *(jscrambler.com · 2019-10-23T00:00:00)*
  > Understand why Profiling is a valuable feature for performance-critical apps, how you can use it in your own apps, and its main use cases. Welcome back to Jscrambler 101! A collection of tutorials on how to use Jscrambler to protect your JavaScript. ...
- [The definitive guide to profiling React applications](https://blog.openreplay.com/the-definitive-guide-to-profiling-react-applications) *(blog.openreplay.com · 2021-03-12T00:00:00)*
  > Let’s take a look at the interface of the profiler so that we’re able to understand the profiling data. I’ve numbered each section (in red) so that we can break it down bit by bit. 1. Component chart This is a chart of all the components being profil...
- [An Introduction to Profiling in Node.js \| AppSignal Blog](https://blog.appsignal.com/2023/11/29/an-introduction-to-profiling-in-nodejs.html) *(blog.appsignal.com · 2023-11-29T00:00:00)*
  > The first approach we&#x27;ll consider requires no external tools or libraries. It involves <strong>using the built-in sample-based profiler built into Node.js, which is enabled through the --prof command-line option</strong>.
- [Profiling Node.js Applications: Step-by-Step Guide \| by NonCoderSuccess \| Medium](https://noncodersuccess.medium.com/profiling-node-js-applications-step-by-step-guide-38c75d8a8ef6) *(noncodersuccess.medium.com · 2024-11-19T11:47:07)*
  > Introduction to Profiling Profiling a Node.js app means analyzing CPU, memory, and runtime metrics to identify performance issues like high CPU usage, memory leaks, or slow functions.
- [Chrome Profiler, A Complete Guide](https://www.codemancers.com/blog/2023-08-18-chrome-profiler) *(codemancers.com · 2023-08-18T00:00:00)*
  > The Chrome Profiler is a useful tool for optimizing the performance of our website. It allows us to witness events, monitor how much memory and CPU our machine is using, understand how the screen is rendered, observe how users interact, and track how...
- [How to Add Multiple Markers in Leaflet.js: Step-by-Step Guide with Coordinates — xjavascript.com](https://www.xjavascript.com/blog/how-to-add-multiple-markers-in-leaflet-js) *(xjavascript.com)*
  > Leaflet.js is a lightweight, open-source JavaScript library for interactive maps. It’s widely used for creating custom maps with features like markers, popups, and layers—all without the bloat of heavier alternatives. One common use case is adding **...
- [AddyOsmani.com - The JavaScript Self-Profiling API](https://addyosmani.com/blog/js-self-profiling) *(addyosmani.com)*
  > // Begin a new profiling session // Provide a sampleInterval (period which the session obtains samples) const profiler = await performance.profile({ sampleInterval: 10 }); // Do some expensive work performSomeTask(); // Stop the profiler and return t...
- [JS Self-Profiling API In Practice - Web Performance Calendar](https://calendar.perfplanet.com/2021/js-self-profiling-api-in-practice) *(calendar.perfplanet.com)*
  > The JS Self-Profiling API is a new API, currently only available in Chrome versions 94+ (on Desktop and Android). <strong>It provides a sampling profiler that you can enable, from JavaScript, for any of your visitors</strong>.
- [JS Self-Profiling API In Practice - NicJ.net](https://nicj.net/js-self-profiling-api-in-practice) *(nicj.net · 2021-12-31T19:16:36)*
  > The JS Self-Profiling API is a new API, currently only available in Chrome versions 94+ (on Desktop and Android). It <strong>provides a sampling profiler that you can enable, from JavaScript, for any of your visitors</strong>.
- [JS Self-Profiling API](https://wicg.github.io/js-self-profiling) *(wicg.github.io · 2026-02-18T00:00:00)*
  > <strong>This specification describes an API that allows web applications to control a sampling profiler for measuring client JavaScript execution times</strong>. Complex web applications currently have limited visibility into where JS execution time ...
- [JS Self-Profiling API](https://chromestatus.com/feature/5170190448852992) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [Building Progressive Web Applications with Vanilla JavaScript. - DEV Community](https://dev.to/onwuemene/building-progressive-web-applications-with-vanilla-javascript-4733) *(dev.to · 2023-06-13T06:57:16)*
  > You can make your little file a PWA if you want to, is base on choice and what you want to achieve with it. By the way, I am sorry for replying late, have been chocked with school lately. ... Always curious... ... I was just wondering, if this might ...
- [Mastering Progressive Web Apps: Overcoming 2024 Development Challenges - DEV Community](https://dev.to/vaib/mastering-progressive-web-apps-overcoming-2024-development-challenges-34m4) *(dev.to · 2025-06-18T12:03:06)*
  > <strong>Developing complex PWAs necessitates sophisticated debugging and testing methodologies</strong>. Browser developer tools are indispensable for service worker debugging, manifest validation, and performance profiling.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Implement markers for JS Self-Profiling API \[40800459\] - Chromium](https://issues.chromium.org/issues/40800459) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5201297767792640`)*
  > This CL exposes that existing feature through an Origin Trial (&quot;JSSelfProfilingMarkers&quot;) so non-COI trial documents see the safe &quot;style&quot;/&quot;layout&quot; subset, while COI documents see the full set Markers spec: https...
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17130.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/js-self-profiling/blob/main/markers.md`)*
  > &gt;&gt;&gt; &gt;&gt;&gt; *Origin Trial documentation link* &gt;&gt;&gt; <strong>https://github.com/WICG/js-self-profiling/blob/main/markers.md</strong> &gt;&gt;&gt; &gt;&gt;&gt; *Risks* &gt;&gt;&gt; &gt;&gt;&gt; &gt;&gt;&gt; *Interoperabil...
- [\[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17114.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/js-self-profiling/blob/main/markers.md`)*
  > Interested partners include Excel Online, which will consume the trial to enrich its existing JS self-profiling telemetry, and Datadog, which collects JS self-profiling data as part of its RUM product. <strong>Origin Trial documentation lin...
- [Intent to Prototype: State extension for JS Self-Profiling API](https://groups.google.com/a/chromium.org/g/blink-dev/c/m1hp39BMNcQ) *(groups.google.com)* *(Cites: `https://github.com/WICG/js-self-profiling/blob/main/markers.md`)*
  > https://github.com/WICG/js-self-profiling/blob/main/markers.md · No specification available yet for this extension · <strong>Adds information about what type of non javascript work is being done by the user agent to samples from the JS Self...
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17121.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/js-self-profiling/pull/89`)*
  > On Tue, Aug 4, 2026 at 3:30 PM ...hub.com/WICG/js-self-profiling/pull/89 &gt; &gt; *Summary* &gt; <strong>The JavaScript Self-Profiling API lets a web application sample its own &gt; call stacks to measure performance on real user devices</...

## 📚 Platform Documentation & Specifications

- [JS Self-Profiling API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/JS_Self-Profiling_API) *(developer.mozilla.org)*
- [GitHub - WICG/js-self-profiling: Proposal for a programmable JS profiling API for collecting JS profiles from real end-user environments · GitHub](https://github.com/WICG/js-self-profiling) *(github.com)*
- [Profiler - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Profiler) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 38 result(s) found across 8 planned queries — **23 verified relevant**
  - `"chromestatus.com/feature/5201297767792640" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/WICG/js-self-profiling/blob/main/markers.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"github.com/WICG/js-self-profiling/pull/89" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"JS Self-Profiling Markers" API` — *Core feature API query* (3 returned)
  - `"JS Self-Profiling Markers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"self-profiling" OR "per-sample" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"JS Self-Profiling Markers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"JS Self-Profiling Markers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 8 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 15 result(s) found — **2 verified relevant**
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
