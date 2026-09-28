# JS Self-Profiling Markers

> **Report Week:** 2026-W40 | **Milestone:** Chrome 153 | **Category:** Origin trial

## Overview

The JavaScript Self-Profiling API lets a web application sample its own call stacks to measure performance on real user devices. This feature adds an optional marker field to each captured sample that identifies the type of browser activity running when the sample was taken: script, gc, style, layout, paint, or other. A trace normally shows gaps between stacks that cannot be interpreted, markers let developers attribute that time to browser work happening outside their JavaScript, for example distinguishing script execution from style recalculation, layout, or a garbage collection pause, making slow traces easier to analyze and optimize.

### Motivation

The JavaScript Self-Profiling API lets web apps sample their own call stacks on real user devices, but it profiles only the page's JavaScript, leaving unexplained gaps where time went to style, layout, paint, or garbage collection. Some of that work, like GC, interrupts stack execution and is invisible to stack sampling. A per-sample marker identifies the browser activity, letting developers attribute slow field traces to non-JavaScript work and optimize accordingly.

## Ecosystem Status

- **Momentum:** High (290 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** The JS Self-Profiling Markers extension enhances Chromium's JS Self-Profiling API by labeling sampling traces with specific browser activities like garbage collection, styling, layout, and painting. While performance engineers and RUM providers strongly value filling previously unexplained execution gaps in production traces, the underlying API remains exclusive to Chromium with long-standing multi-stakeholder stalls. Full marker exposure is strictly gated behind cross-origin isolation (COOP/COEP) to mitigate cross-origin and cross-process timing side-channel attacks.

### Recommendations
- Actionable Advice: Web teams running large-scale real-user performance pipelines should register for the Chromium Origin Trial to capture enriched diagnostic traces on desktop and mobile. Treat the API strictly as a progressive enhancement behind robust feature detection (\`'Profiler' in window\`), ensuring production telemetry still relies primarily on standardized primitives like Long Animation Frames (LoAF).
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

## 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFBjaGsrBWSM6QFvSDmDwKp6m98Zb8iPVvGaVwT1NS-Fj1q6PvB9tWHGNYUf662WlW28WuRZisuIJLti-8LoI211lyv07LBuATt5xZieJUEccPhP4mF4spFAr1LW0PUjCXRVq1A_Kel7ebvApaC) *(vertexaisearch.cloud.google.com)*
  > JS Self-Profiling API (including the Markers extension) · Issue #717 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or wind...
- [npmjs.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEzzIyPE11-Z_LifH-CBGPJPPEb8K-fSgcKX4BRq0hcSDxLG6yM_psmWmfrA3EJexBCezJBqw7fyZTtPwj_03S2S2iKMiS106t4P2wolSQ2nLih4ITlPch2IKs7yinfHG96IqFdjzwqu4ofEYq7A8uu-rdrZAAv3A-plR33hesdSD0=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of JS Self-Profiling Markers  The **JS Self-Profiling API** allows web applications to run a low-overhead sampling profiler directly on real user devices (in production) by configuring the `Document-Policy: js-profiling` HTTP header. Howe
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHH4g2m103Bz9FUtWSNR7wjEIRdtq1ANXGF6MBZoiONpYBZgk2BRK9oxp1eldWWCkAvV84CclKjAH2ZYScgwsSBcvh3VgNTyeNarl-dVSAoYCyqgFusQ3REn6ny1p-XNRCPHSMkDbY=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [nicj.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQER5UmOaC703SK46330oBly8l4chl0aDpDxb4QPH24AvnY7nIYXj4DdkP2Ix-396eeeusqYx3LlUvHH4qNr2G-wXvTidb0S2rgpW4drDqlvIS_p7f718bVV2Hy5n_0kM7ThZWZEllio5w==) *(vertexaisearch.cloud.google.com)*
  > JS Self-Profiling API In Practice - NicJ.net JS Self-Profiling API In Practice December 31st, 2021 Goto comments Leave a comment Table of Contents The JS Self-Profiling API What is Sampled Profiling? Downsides to Sampled Profiling API Document Policy...
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFu0p-PmSbMVcM9_Ump9fGfSWUPgo7UrRyUXH9JC4iFNdnJKk0ReqfiBx4dVmiDi5kmhye97oBvrrF34gpC2-bk_8UXjs4JElduazXpi4akFKL2izs3bVs41MXBgbLJRCqXqQqCEjJUKOt6V6zrf3OnO-yhG5AptoYUS5AqxUzo2jbQF78=) *(vertexaisearch.cloud.google.com)*
  > Microsoft Edge 153 web platform release notes (Sep. 10, 2026) - Microsoft Edge Developer documentation | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take adv...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGgb7CtQeKK4ZGJsY81GsQ3SFctTy2pF19dLnejRbjfximNRuxF0LtEcgnpqblafqWCP39zmCDvfVzhhPsHz0FsY6NUF12X1BA4mzrgscXjWAPaM4RRzkH3T-pvseSw1LSFMHbvYEI=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHqx9YVP16IN8xmMQUt2PSz79h_D3cWwn6QgLaBHNgA8YH4nq6STYK9H4OyJSrmDHKr5xfubY51D-IKXAnqOwDo4mmjDazOkSE-lGbMoNbP-DIdkJ2-iOkh-kMDTMssYHzHPlps6VDmQ2Qz) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHEv0rpTIeVunxS4OzdtcWE-oQNvtlXfsRTDGQTAj1nRiSWzksBPvzuezElD-UTD7CAqPD_oZfLNXBwHlwgJ_Iv-YBeV030_Sz5DKx5ewCIz8rHR-iij5bHfi_3m5TzsIvRL-QI70cZJL-cJWP6UUG8raLLWGiC3lkGvTE=) *(vertexaisearch.cloud.google.com)*
  > JS Self-Profiling API - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs JS Self-Profiling API Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) JS Self-Profiling API Limited avai...
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE1dA-lXV5jNbhXmw5sNL9PwxDBGpJY7uvdHms-3qcVy5uY2rvqxecKN7z6hl-2-drS1FkbdrXpkm6HaAw1JQ-7AXJoaYDT0InGN_y6SDo87E1AnJEBTVr5U_IGyWxTWdEuCTBgUuR5RhtffRJ31FdfBS_DvAylVW-C8ZF7pek=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of JS Self-Profiling Markers  The **JS Self-Profiling API** allows web applications to run a low-overhead sampling profiler directly on real user devices (in production) by configuring the `Document-Policy: js-profiling` HTTP header. Howe
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGTrJ7-XLSigPm7Lgy5AD3RgswtmLrf5BKGdUvhgbGgO8KyLsofcVG2j9bUAvqj2Yf5oC3a-6kgYsD-pktPncob7p8_lib7iuO5oWnLFAYreDyshMeBo2AfVL04Ph_3oQ==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of JS Self-Profiling Markers  The **JS Self-Profiling API** allows web applications to run a low-overhead sampling profiler directly on real user devices (in production) by configuring the `Document-Policy: js-profiling` HTTP header. Howe
- [perfplanet.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHXUJq75hdBUsHNSnGOEjU9wjhr0fLo4IiDRBurMxiCp64TVrG_ggEM1wvfGJhpSWpzoJrA0Uequ0jNgK75buIrTQ_ZfhRLWW5eimeFOvqQyaeViu2_VFXdJbgxITOffm2YBjymJ_lit8GpxaP0_vJGuOgONLRJdXTyKtoh) *(vertexaisearch.cloud.google.com)*
  > ### Summary of JS Self-Profiling Markers  The **JS Self-Profiling API** allows web applications to run a low-overhead sampling profiler directly on real user devices (in production) by configuring the `Document-Policy: js-profiling` HTTP header. Howe
- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHvyD9X-5mPjWCQytnGmSBlB7WFN1a8-6uHSvT-9tchRCPxdlrzaWyWDAd3tIVTozIkIrFjmOlOWwSxNOjcDzM4vHTAr9mNQjWSgVJuC5Y7TcK4DzBQClRQgLRDflOtgAHxGugJ33c4cip2moSpCEdtkpUsSxRCVfZmXZppnhx_pw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of JS Self-Profiling Markers  The **JS Self-Profiling API** allows web applications to run a low-overhead sampling profiler directly on real user devices (in production) by configuring the `Document-Policy: js-profiling` HTTP header. Howe
- [sentry.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFhhDbF9M1AdDCq9AVN7FyZfUknTjjVAZnr90Lo-COgxc-AsdoEV9xUKm5C62hFlivbPxlVD2Yc3QQ0AdeoiIvM8QpXKIuqivrqte1Hr63h1k-dSNb-WTjKc5BwWAKvzfACVcoHwn6Kwq9gvcXO5dnFLKeXy1WYXn8jl3PR) *(vertexaisearch.cloud.google.com)*
  > ### Summary of JS Self-Profiling Markers  The **JS Self-Profiling API** allows web applications to run a low-overhead sampling profiler directly on real user devices (in production) by configuring the `Document-Policy: js-profiling` HTTP header. Howe
- [mintec.co](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHiD6dqf8UbyhXInj95ddJjr9hUDN4Mh5HkYFE2Q_ueGQXlyu7Abxx3rPC0aiUu2ehszcZA3dZGKEpo2A8CFvqKRPdYBOHgkdX761-UODq-prW07GDfkCImuBLACcvS2-6poYTgVO66Uw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of JS Self-Profiling Markers  The **JS Self-Profiling API** allows web applications to run a low-overhead sampling profiler directly on real user devices (in production) by configuring the `Document-Policy: js-profiling` HTTP header. Howe
- [mintec.co](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEdt0tcc16bARZu4kUBbQzfBkfQ5toC9oot9vaTX9KrRkl7qP3VRhK7T85vyxpP83Rl88MxGqP7MA7B0ABKqAo2qiSGex_5s1MWJ6F3sYPBfXJqO9F56BslEW8-3ysldvbr4dUtYQhuCg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of JS Self-Profiling Markers  The **JS Self-Profiling API** allows web applications to run a low-overhead sampling profiler directly on real user devices (in production) by configuring the `Document-Policy: js-profiling` HTTP header. Howe
- [Implement markers for JS Self-Profiling API \[40800459\] - Chromium](https://issues.chromium.org/issues/40800459) *(issues.chromium.org)*
  > This CL exposes that existing feature ... spec: https://github.com/WICG/js-self-profiling/blob/main/markers.md Chrome Status: https://<strong>chromestatus.com/feature/5201297767792640</strong> Bug: 40800459 Change-Id: Ie370922859478eb0251c93c1db412b7...
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17130.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; On Tue, Aug 4, 2026 at 3:30 .../WICG/js-self-profiling/pull/89 &gt;&gt;&gt; &gt;&gt;&gt; *Summary* &gt;&gt;&gt; <strong>The JavaScript Self-Profiling API lets a web application sample its own &gt;&gt;&gt; call stacks to measure perf...
- [\[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17114.html) *(mail-archive.com)*
  > Interested partners include Excel Online, which will consume the trial to enrich its existing JS self-profiling telemetry, and Datadog, which collects JS self-profiling data as part of its RUM product. <strong>Origin Trial documentation link https://...
- [Intent to Prototype: State extension for JS Self-Profiling API](https://groups.google.com/a/chromium.org/g/blink-dev/c/m1hp39BMNcQ) *(groups.google.com)*
  > https://github.com/WICG/js-self-profiling/blob/main/markers.md · No specification available yet for this extension · <strong>Adds information about what type of non javascript work is being done by the user agent to samples from the JS Self-Profiling...
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17123.html) *(mail-archive.com)*
  > *Contact emails* [email protected], ... https://github.com/WICG/js-self-profiling/pull/89 *Summary* <strong>The JavaScript Self-Profiling API lets a web application sample its own call stacks to measure performance on real user devices</strong>....
- [Microsoft Edge Adds New Tools for Web Performance and AI Agents](https://windowsreport.com/microsoft-edge-adds-new-tools-for-web-performance-and-ai-agents) *(windowsreport.com · 2026-09-28T06:08:02)*
  > Microsoft is also adding JS Self-Profiling markers that show what Edge was doing when a performance sample was captured.
- [JS Self-Profiling Markers](https://chromestatus.com/feature/5201297767792640) *(chromestatus.com · 2026-07-22T00:00:00)*
  > We cannot provide a description for this page right now
- [New in Edge for developers – Create better components and make your site agent-ready - Microsoft Edge Blog](https://blogs.windows.com/msedgedev/2026/09/21/new-in-edge-for-developers-create-better-components-and-make-your-site-agent-ready) *(blogs.windows.com · 2026-09-21T16:58:01)*
  > The JS Self-Profiling API is a great way to measure your app’s performance in production, on real user devices. But it only samples your page’s JavaScript, which often leaves unexplained gaps in a trace, moments where the browser was styling, laying ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Implement markers for JS Self-Profiling API \[40800459\] - Chromium](https://issues.chromium.org/issues/40800459) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5201297767792640`)*
  > This CL exposes that existing feature ... spec: https://github.com/WICG/js-self-profiling/blob/main/markers.md Chrome Status: https://<strong>chromestatus.com/feature/5201297767792640</strong> Bug: 40800459 Change-Id: Ie370922859478eb0251c9...
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17130.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/js-self-profiling/blob/main/markers.md`)*
  > &gt;&gt; &gt;&gt; On Tue, Aug 4, 2026 at 3:30 .../WICG/js-self-profiling/pull/89 &gt;&gt;&gt; &gt;&gt;&gt; *Summary* &gt;&gt;&gt; <strong>The JavaScript Self-Profiling API lets a web application sample its own &gt;&gt;&gt; call stacks to me...
- [\[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17114.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/js-self-profiling/blob/main/markers.md`)*
  > Interested partners include Excel Online, which will consume the trial to enrich its existing JS self-profiling telemetry, and Datadog, which collects JS self-profiling data as part of its RUM product. <strong>Origin Trial documentation lin...
- [Intent to Prototype: State extension for JS Self-Profiling API](https://groups.google.com/a/chromium.org/g/blink-dev/c/m1hp39BMNcQ) *(groups.google.com)* *(Cites: `https://github.com/WICG/js-self-profiling/blob/main/markers.md`)*
  > https://github.com/WICG/js-self-profiling/blob/main/markers.md · No specification available yet for this extension · <strong>Adds information about what type of non javascript work is being done by the user agent to samples from the JS Self...
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17123.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/js-self-profiling/pull/89`)*
  > *Contact emails* [email protected], ... https://github.com/WICG/js-self-profiling/pull/89 *Summary* <strong>The JavaScript Self-Profiling API lets a web application sample its own call stacks to measure performance on real user devices</str...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 36 result(s) found across 8 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/5201297767792640" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/WICG/js-self-profiling/blob/main/markers.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"github.com/WICG/js-self-profiling/pull/89" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"JS Self-Profiling Markers" API` — *Core feature API query* (4 returned)
  - `"JS Self-Profiling Markers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"self-profiling" OR "per-sample" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"JS Self-Profiling Markers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"JS Self-Profiling Markers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
- **Google Search Grounding (gemini-3.8-flash):** 15 result(s) found — **15 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 18 result(s) found — **0 verified relevant**
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
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5201297767792640)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5201297767792640)
- [Specification](https://github.com/WICG/js-self-profiling/pull/89)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40800459)
