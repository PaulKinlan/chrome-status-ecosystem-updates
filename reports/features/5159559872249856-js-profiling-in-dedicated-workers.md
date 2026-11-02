# js-profiling in dedicated workers

> **Report Week:** 2026-W45 | **Milestone:** Chrome 154 | **Category:** In developer trial (Behind a flag)

## Overview

Allows js-profiling in dedicated workers  This feature enables the JavaScript Self‑Profiling (js-profiling) API in Dedicated Workers, while remaining gated by Document Policy. It allows developers to obtain low‑overhead CPU attribution for JavaScript execution in workers, with Document Policy support for workers tracked separately.

### Motivation

Modern web applications increasingly offload performance‑critical work to Dedicated Workers to keep the main thread responsive. While the JavaScript Self‑Profiling API provides low‑overhead CPU attribution for JavaScript execution, it is currently unavailable in workers due to its reliance on Document Policy, leaving developers without visibility into where CPU time is spent during background computation.  Enabling js-profiling in Dedicated Workers fills this gap by allowing developers to capture representative JavaScript CPU profiles for worker execution, using the same explicit opt‑in and policy‑gated model already required for documents.

## Ecosystem Status

- **Momentum:** Emerging (+10 points since 2026-10-12; footprint 135 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** The JS Self-Profiling API in Dedicated Workers extends browser-level sampling profiling to background worker threads, gated by worker-level Document Policy headers. Spearheaded by Microsoft Edge and Google engineers within Chromium, the feature fills a major observability void for CPU-heavy tasks like WebAssembly and background data processing. However, because the underlying Self-Profiling specification remains entirely unsupported outside Chromium, the feature faces significant cross-engine interoperability headwinds.

### Recommendations
- Actionable Advice: Teams should treat this capability strictly as an opt-in, progressive enhancement tool for field telemetry in Chromium browsers, feature-detecting 'Profiler' in DedicatedWorkerGlobalScope before instantiating sessions. Do not rely on it as a primary cross-browser telemetry solution; continue using browser DevTools and standardized Performance APIs for broader diagnostics across Firefox and Safari.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`profiler`](https://webstatus.dev/features/profiler), shared with 2 other ChromeStatus features*

- Share of tests passing in the web-features group `profiler` on [wpt.fyi](https://wpt.fyi/results?q=feature:profiler) (via webstatus.dev) — stable: Chrome 72% · Edge 72% · Firefox 0% · Safari 0%; experimental: Chrome 100% · Edge 100% · Firefox 0% · Safari 0%
- **Chrome usage:** 0.00039% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/278))
- **Mozilla:** no position recorded ([standards position](https://github.com/mozilla/standards-positions/issues/477)) · concerns: `security`

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://239d877-dot-cr-status.appspot.com/feature/5159559872249856) *(239d877-dot-cr-status.appspot.com)*
  > The \*\*JavaScript Self-Profiling API (\`js-profiling\`) in Dedicated Workers\*\* extends browser-level sampling profiling to Web Workers \*\*The Premise:\*\* Chrome Platform Status and Blink-dev tracking document that this feature closes the visibility gap fo...
- [techinnovateit.com](https://techinnovateit.com/javascript-self-profiling-dedicated-worker) *(techinnovateit.com)*
  > The \*\*JavaScript Self-Profiling API (\`js-profiling\`) in Dedicated Workers\*\* extends browser-level sampling profiling to Web Workers By extending Document Policy support to worker contexts, Chrome enables developers to instantiate \`new Profiler(...)\` ...
- [appspot.com](https://img544-dot-cr-status.appspot.com/feature/5159559872249856/activity) *(img544-dot-cr-status.appspot.com)*
  > Modern web architectures offload compute-heavy tasks—such as parsing, data compression, cryptography, and WebAssembly execution—to Dedicated Workers to keep the main thread responsive Previously, the JS Self-Profiling API was restricted to documents ...
- [chromium.org](https://bugs.chromium.org/p/chromium/issues/detail?id=956688) *(bugs.chromium.org)*
  > Previously, the JS Self-Profiling API was restricted to documents because its security gating required the \`Document-Policy: js-profiling\` header The WICG Self-Profiling API specification drafts were updated to reflect dedicated worker integration
- [chromestatuslite.com](https://chromestatuslite.com/?version=147) *(chromestatuslite.com)*
  > By extending Document Policy support to worker contexts, Chrome enables developers to instantiate \`new Profiler(...)\` directly inside a \`DedicatedWorkerGlobalScope\` with minimal overhead
- [appspot.com](https://chromiumdash.appspot.com/commit/57a07c8cdbdc07f414ed2983044f29332f61b5ee) *(chromiumdash.appspot.com)*
  > \*\*The Dependency on "Document Policy in Dedicated Workers":\*\* The feature relies on an architectural prerequisite where Chromium began parsing \`Document-Policy\` headers from network responses for dedicated worker scripts, or inheriting policy contain...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg16028.html) *(mail-archive.com)*
  > \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Fri, 06 Mar 2026 11:57:39 -0800 Contact emails \[e...
- [\[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15887.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Chromestatus Thu, 19 Feb 2026 10:11:40 -0800 Contact emails \[email&#160;protec...
- [Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15888.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers 'Michal Mocny' via blink-dev Thu, 19 Feb 2026 10:27:54 -0800 Neat! Jus...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17436.html) *(mail-archive.com)*
  > \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Thu, 10 Sep 2026 13:21:00 -0700 Contact emails \[e...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/31) *(github.com · 2026-09-14T08:09:52)* *(Cites: `https://chromestatus.com/feature/5159559872249856`)*
  > js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your s...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg16028.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Fri, 06 Mar 2026 11:57:39 -0800 Contact...
- [\[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15887.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Chromestatus Thu, 19 Feb 2026 10:11:40 -0800 Contact emails \[email&#...
- [Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15888.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers 'Michal Mocny' via blink-dev Thu, 19 Feb 2026 10:27:54 -0800...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17436.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/js-self-profiling/#the-profiler-interface`)*
  > \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Thu, 10 Sep 2026 13:21:00 -0700 Contact...

## 📚 Platform Documentation & Specifications

- [js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/31) *(github.com)*
- [How does document policy work in workers? · Issue #33 · WICG/js-self-profiling · GitHub](https://github.com/WICG/js-self-profiling/issues/33) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 51 result(s) found across 12 planned queries — **6 verified relevant**
  - `"chromestatus.com/feature/5159559872249856" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"wicg.github.io/js-self-profiling" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"js-profiling in dedicated workers" API` — *Core feature API query* (4 returned)
  - `"js-profiling in dedicated workers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"js-profiling" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"js-profiling in dedicated workers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"js-profiling in dedicated workers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"JavaScript Self-Profiling API" ("dedicated worker" OR "web worker") Document-Policy` — *Finds developer guides and articles explaining how to use JavaScript self-profiling within dedicated workers.* (4 returned)
  - `"new Profiler" ("DedicatedWorkerGlobalScope" OR "worker") "js-profiling"` — *Discovers code samples and syntax implementations initializing the Profiler object inside a web worker context.* (8 returned)
  - `"Document-Policy: js-profiling" ("dedicated workers" OR "worker") ("Intent to Ship" OR Chrome)` — *Tracks browser vendor release notes, intent-to-ship threads, and platform adoption across Chromium-based engines.* (1 returned)
  - `site:github.com ("WICG/js-self-profiling" OR "DocumentPolicyInWorkers") "dedicated worker"` — *Surfaces specification discussions, standards issues, and design debate regarding worker Document Policy gating on GitHub.* (1 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 15 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "profiler", shared with 2 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "profiler": Chrome 72% passing (stable)*

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
