# js-profiling in dedicated workers

> **Report Week:** 2026-W43 | **Milestone:** Chrome 154 | **Category:** In developer trial (Behind a flag)

## Overview

Allows js-profiling in dedicated workers  This feature enables the JavaScript Self‑Profiling (js-profiling) API in Dedicated Workers, while remaining gated by Document Policy. It allows developers to obtain low‑overhead CPU attribution for JavaScript execution in workers, with Document Policy support for workers tracked separately.

### Motivation

Modern web applications increasingly offload performance‑critical work to Dedicated Workers to keep the main thread responsive. While the JavaScript Self‑Profiling API provides low‑overhead CPU attribution for JavaScript execution, it is currently unavailable in workers due to its reliance on Document Policy, leaving developers without visibility into where CPU time is spent during background computation.  Enabling js-profiling in Dedicated Workers fills this gap by allowing developers to capture representative JavaScript CPU profiles for worker execution, using the same explicit opt‑in and policy‑gated model already required for documents.

## Ecosystem Status

- **Momentum:** Moderate (footprint 315 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The 'js-profiling in dedicated workers' feature extends the JavaScript Self-Profiling API to background worker threads, addressing a critical visibility gap for offloaded performance-critical tasks. While currently progressing in Chromium (behind a developer trial flag), it remains constrained by cross-browser interoperability challenges due to its complex dependency on Document Policy semantics in workers.

### Recommendations
- Actionable Advice: Development teams should experiment with the feature locally behind Chrome flags to evaluate worker performance overhead, but rely on traditional fallback mechanisms or synthetic monitoring for production until cross-browser standardization and engine alignment mature.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`profiler`](https://webstatus.dev/features/profiler), shared with 2 other ChromeStatus features*

- Share of tests passing in the web-features group `profiler` on [wpt.fyi](https://wpt.fyi/results?q=feature:profiler) (via webstatus.dev) — stable: Chrome 64% · Edge 64% · Firefox 0% · Safari 0%; experimental: Chrome 100% · Edge 100% · Firefox 0% · Safari 0%
- **Chrome usage:** 0.0004% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/278))
- **Mozilla:** no position recorded ([standards position](https://github.com/mozilla/standards-positions/issues/477)) · concerns: `security`

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img544-dot-cr-status.appspot.com/feature/5159559872249856) *(img544-dot-cr-status.appspot.com)*
  > The \*\*JavaScript Self-Profiling API (\`js-profiling\`) in Dedicated Workers\*\* extends sampling-based CPU profiling directly into background dedicated worker threads Modern web applications offload heavy tasks—such as data parsing, image processing, and...
- [chromestatus.com](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > The \*\*JavaScript Self-Profiling API (\`js-profiling\`) in Dedicated Workers\*\* extends sampling-based CPU profiling directly into background dedicated worker threads \*\*Source:\*\* \*Chrome Platform Status & Chrome Release Notes\*
- [perfplanet.com](https://calendar.perfplanet.com/2021/js-self-profiling-api-in-practice) *(calendar.perfplanet.com)*
  > The JS Self-Profiling API requires explicit opt-in using the \`Document-Policy: js-profiling\` HTTP header \*\*Source:\*\* \*Datadog Docs, Sentry SDK Updates, Web Performance Calendar\*
- [google.com](https://issuetracker.google.com/issues/450845903) *(issuetracker.google.com)*
  > Previously, workers could not use self-profiling because Document Policy behavior inside workers was undefined
- [datadoghq.com](https://docs.datadoghq.com/real_user_monitoring/correlate_with_other_telemetry/profiling) *(docs.datadoghq.com)*
  > \*\*Source:\*\* \*Datadog Docs, Sentry SDK Updates, Web Performance Calendar\* \*\*Key Takeaway:\*\* Front-end Real User Monitoring (RUM) platforms have embraced this feature
- [Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15888.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers 'Michal Mocny' via blink-dev Thu, 19 Feb 2026 10:27:54 -0800 Neat! Jus...
- [\[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15887.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Chromestatus Thu, 19 Feb 2026 10:11:40 -0800 Contact emails \[email&#160;protec...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17436.html) *(mail-archive.com)*
  > \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Thu, 10 Sep 2026 13:21:00 -0700 Contact emails \[e...
- [\[blink-dev\] Intent to Prototype: Document Policy in Dedicated Workers](https://www.mail-archive.com/blink-dev@chromium.org/msg15658.html) *(mail-archive.com)*
  > Explainer https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md Specification https://github.com/whatwg/html/pull/12026 Summary &lt;strong&gt;Enables document-policy in Dedicated Workers&lt;/strong&gt;. This enable...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg16028.html) *(mail-archive.com)*
  > \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Fri, 06 Mar 2026 11:57:39 -0800 Contact emails \[e...
- [@types/wicg-js-self-profiling - npm](https://www.npmjs.com/package/@types/wicg-js-self-profiling/v/2022.3.0) *(npmjs.com · 2023-08-24T00:00:00)*
  > // Type definitions for non-npm package JS Self-Profiling API API 2022.03 // Project: https://github.com/WICG/js-self-profiling, https://&lt;strong&gt;wicg.github.io/js-self-profiling&lt;/strong&gt;/ // Definitions by: Tiger Oakes &lt;https://github.com/NotWoods...
- [JS Self-Profiling API](https://pr-preview.s3.amazonaws.com/WICG/js-self-profiling/64/7918fca...cnpsc:cb825d0.html) *(pr-preview.s3.amazonaws.com)*
  > JS Self-Profiling API JS Self-Profiling API Draft Community Group Report 16 December 2021 Latest published version: https://www.w3.org/TR/js-self-profiling/ Latest editor's draft: https://wicg.github.io/js-self-profiling/ Editors: Andrew Comminos ( F...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15888.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5159559872249856`)*
  > Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers 'Michal Mocny' via blink-dev Thu, 19 Feb 2026 10:27:54 -0800...
- [\[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15887.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5159559872249856`)*
  > \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Chromestatus Thu, 19 Feb 2026 10:11:40 -0800 Contact emails \[email&#...
- [js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/31) *(github.com · 2026-09-14T08:09:52)* *(Cites: `https://chromestatus.com/feature/5159559872249856`)*
  > js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Relo...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17436.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5159559872249856`)*
  > \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Thu, 10 Sep 2026 13:21:00 -0700 Contact...
- [\[blink-dev\] Intent to Prototype: Document Policy in Dedicated Workers](https://www.mail-archive.com/blink-dev@chromium.org/msg15658.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > Explainer https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md Specification https://github.com/whatwg/html/pull/12026 Summary &lt;strong&gt;Enables document-policy in Dedicated Workers&lt;/strong&gt;. T...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg16028.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Fri, 06 Mar 2026 11:57:39 -0800 Contact...
- [JS Self-Profiling API (including the Markers extension) · Issue #717 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/717) *(github.com · 2026-08-26T16:26:48)* *(Cites: `https://wicg.github.io/js-self-profiling/#the-profiler-interface`)*
  > WebKittens @marcoscaceres @annevk Title of the proposal JS Self-Profiling API (including the Markers extension) URL to the spec https://&lt;strong&gt;wicg.github.io/js-self-profiling&lt;/strong&gt;/ URL to the spec&#x27;s repository https://github.com/...
- [Profiler (aka JavaScript self-profiling API) · Issue #1429 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1429) *(github.com · 2026-09-22T14:04:58)* *(Cites: `https://wicg.github.io/js-self-profiling/#the-profiler-interface`)*
  > Profiler (aka JavaScript self-profiling API) · Issue #1429 · web-platform-tests/interop · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or wind...
- [JS Self-Profiling API · Issue #477 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/477) *(github.com · 2021-01-15T21:28:24)* *(Cites: `https://wicg.github.io/js-self-profiling/#the-profiler-interface`)*
  > Request for Mozilla Position on an Emerging Web Specification Specification Title: JS Self-Profiling API Specification or proposal URL: Draft spec: https://&lt;strong&gt;wicg.github.io/js-self-profiling&lt;/strong&gt;/ Explainer: https://github.com/WIC...
- [@types/wicg-js-self-profiling - npm](https://www.npmjs.com/package/@types/wicg-js-self-profiling/v/2022.3.0) *(npmjs.com · 2023-08-24T00:00:00)* *(Cites: `https://wicg.github.io/js-self-profiling/#the-profiler-interface`)*
  > // Type definitions for non-npm package JS Self-Profiling API API 2022.03 // Project: https://github.com/WICG/js-self-profiling, https://&lt;strong&gt;wicg.github.io/js-self-profiling&lt;/strong&gt;/ // Definitions by: Tiger Oakes &lt;https://github.co...
- [JS Self-Profiling API](https://pr-preview.s3.amazonaws.com/WICG/js-self-profiling/64/7918fca...cnpsc:cb825d0.html) *(pr-preview.s3.amazonaws.com)* *(Cites: `https://wicg.github.io/js-self-profiling/#the-profiler-interface`)*
  > JS Self-Profiling API JS Self-Profiling API Draft Community Group Report 16 December 2021 Latest published version: https://www.w3.org/TR/js-self-profiling/ Latest editor's draft: https://wicg.github.io/js-self-profiling/ Editors: Andrew Co...
- [1687857 - Implement the JavaScript Self-Profiling API](https://bugzilla.mozilla.org/show_bug.cgi?id=1687857) *(bugzilla.mozilla.org)* *(Cites: `https://wicg.github.io/js-self-profiling/#the-profiler-interface`)*
  > Tried to use the self-profiling API according to https://&lt;strong&gt;wicg.github.io/js-self-profiling&lt;/strong&gt;/.

## 📚 Platform Documentation & Specifications

- [JS Self-Profiling API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/JS_Self-Profiling_API) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Profiler) *(developer.mozilla.org)*
- [js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/31) *(github.com)*
- [JS Self-Profiling API (including the Markers extension) · Issue #717 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/717) *(github.com)*
- [Profiler (aka JavaScript self-profiling API) · Issue #1429 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1429) *(github.com)*
- [JS Self-Profiling API · Issue #477 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/477) *(github.com)*
- [1687857 - Implement the JavaScript Self-Profiling API](https://bugzilla.mozilla.org/show_bug.cgi?id=1687857) *(bugzilla.mozilla.org)*
- [GitHub - WICG/js-self-profiling: Proposal for a programmable JS profiling API for collecting JS profiles from real end-user environments · GitHub](https://github.com/WICG/js-self-profiling) *(github.com)*
- [Interoperability & Standards Readiness Tracking Issue · Issue #1 · mmocny/js-self-profiling](https://github.com/mmocny/js-self-profiling/issues/1) *(github.com)*
- [js-self-profiling/README.md at main · WICG/js-self-profiling](https://github.com/WICG/js-self-profiling/blob/main/README.md) *(github.com)*
- [Profiler: Profiler() constructor - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Profiler/Profiler) *(developer.mozilla.org)*
- [The \`document-policy: js-profiling\` header adds 3% overhead · Issue #79 · WICG/js-self-profiling](https://github.com/WICG/js-self-profiling/issues/79) *(github.com)*
- [feat: Add conditional marker exposure based on cross-origin isolation (supersedes #85) by monica-ch · Pull Request #89 · WICG/js-self-profiling](https://github.com/WICG/js-self-profiling/pull/89) *(github.com)*
- [js-self-profiling/index.html at main · WICG/js-self-profiling](https://github.com/WICG/js-self-profiling/blob/main/index.html) *(github.com)*
- [GitHub - monica-ch/js-profiling-markers-demo: Live demo of the JS Self-Profiling API markers extension (Origin Trial) — works in Edge and Chrome](https://github.com/monica-ch/js-profiling-markers-demo) *(github.com)*
- [js-self-profiling/markers.md at main · WICG/js-self-profiling](https://github.com/WICG/js-self-profiling/blob/main/markers.md) *(github.com)*
- [Support and feedback from Sentry · Issue #78 · WICG/js-self-profiling](https://github.com/WICG/js-self-profiling/issues/78) *(github.com)*
- [WICG/js-self-profiling](https://github.com/WICG/js-self-profiling/issues) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 56 result(s) found across 12 planned queries — **24 verified relevant**
  - `"chromestatus.com/feature/5159559872249856" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"wicg.github.io/js-self-profiling" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"js-profiling in dedicated workers" API` — *Core feature API query* (3 returned)
  - `"js-profiling in dedicated workers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"js-profiling" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"js-profiling in dedicated workers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"js-profiling in dedicated workers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
  - `"js-profiling" ("web worker" OR "dedicated worker") (tutorial OR guide OR "how to")` — *Find practical guides and tutorials for configuring and measuring JavaScript performance inside web workers using JS self-profiling.* (0 returned)
  - `"new Profiler(" ("Document-Policy" OR "js-profiling") worker` — *Locate code examples demonstrating Profiler instantiation, sample intervals, and buffer handling within a DedicatedWorker context.* (8 returned)
  - `"js-profiling in dedicated workers" OR ("js-profiling" "dedicated workers" "intent to ship")` — *Track browser adoption signals, blink-dev intent to ship discussions, and engine implementation statuses.* (3 returned)
  - `site:github.com (WICG/js-self-profiling OR MSEdgeExplainers) "worker" "js-profiling"` — *Discover GitHub issue threads, standards debate, and security or policy considerations around worker profiling support.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 5 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 15 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "profiler", shared with 2 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "profiler": Chrome 64% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5159559872249856)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5159559872249856)
- [Specification](https://wicg.github.io/js-self-profiling/#the-profiler-interface)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/482085416)
