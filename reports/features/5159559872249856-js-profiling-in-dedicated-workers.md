# js-profiling in dedicated workers

> **Report Week:** 2026-W42 | **Milestone:** Chrome 154 | **Category:** In developer trial (Behind a flag)

## Overview

Allows js-profiling in dedicated workers  This feature enables the JavaScript Self‑Profiling (js-profiling) API in Dedicated Workers, while remaining gated by Document Policy. It allows developers to obtain low‑overhead CPU attribution for JavaScript execution in workers, with Document Policy support for workers tracked separately.

### Motivation

Modern web applications increasingly offload performance‑critical work to Dedicated Workers to keep the main thread responsive. While the JavaScript Self‑Profiling API provides low‑overhead CPU attribution for JavaScript execution, it is currently unavailable in workers due to its reliance on Document Policy, leaving developers without visibility into where CPU time is spent during background computation.  Enabling js-profiling in Dedicated Workers fills this gap by allowing developers to capture representative JavaScript CPU profiles for worker execution, using the same explicit opt‑in and policy‑gated model already required for documents.

## Ecosystem Status

- **Momentum:** Emerging (footprint 125 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The JS Self-Profiling API in Dedicated Workers brings sampled, low-overhead JavaScript CPU profiling to background execution, addressing a long-standing blind spot for applications that offload intensive logic off the main thread. Led by Microsoft Edge engineers and moving through Blink developer trials in Chrome 154, the feature establishes worker-level Document Policy gating to safely expose runtime metrics. However, multi-engine consensus remains nonexistent, cementing the capability as a Chromium-exclusive telemetry tool.

### Recommendations
- Actionable Advice: Teams should evaluate worker profiling behind flags in Chromium Canary/Dev channels to benchmark background tasks, gating execution behind runtime checks for the global Profiler constructor. Maintain this capability strictly as a progressive telemetry enhancement, ensuring production worker architectures remain resilient on browsers without profiling support.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`profiler`](https://webstatus.dev/features/profiler), shared with 2 other ChromeStatus features*

- Share of tests passing in the web-features group `profiler` on [wpt.fyi](https://wpt.fyi/results?q=feature:profiler) (via webstatus.dev) — stable: Chrome 64% · Edge 64% · Firefox 0% · Safari 0%; experimental: Chrome 100% · Edge 100% · Firefox 0% · Safari 0%
- **Chrome usage:** 0.00024% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/278))
- **Mozilla:** no position recorded ([standards position](https://github.com/mozilla/standards-positions/issues/477)) · concerns: `security`

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > The \*\*"js-profiling in dedicated workers"\*\* feature extends the \*\*JavaScript Self-Profiling API\*\* (\`new Profiler()\`) to Dedicated Web Workers With this feature: \* \*\*Off-Thread CPU Attribution:\*\* Developers can sample call stacks in dedicated workers ...
- [chromestatuslite.com](https://chromestatuslite.com/?version=147) *(chromestatuslite.com)*
  > The release notes confirm that \`js-profiling\` is now active in Dedicated Workers while remaining strictly gated by Document Policy, with worker-level policy support tracked alongside the core Document Policy infrastructure
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg16028.html) *(mail-archive.com)*
  > \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Fri, 06 Mar 2026 11:57:39 -0800 Contact emails \[e...
- [\[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15887.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Chromestatus Thu, 19 Feb 2026 10:11:40 -0800 Contact emails \[email&#160;protec...
- [Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15888.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers 'Michal Mocny' via blink-dev Thu, 19 Feb 2026 10:27:54 -0800 Neat! Jus...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17436.html) *(mail-archive.com)*
  > Explainer https://github.com/M... Summary Allows js-profiling in dedicated workers &lt;strong&gt;This feature enables the JavaScript Self‑Profiling (js-profiling) API in Dedicated Workers, while remaining gated by Document Policy&lt;/strong&gt;....
- [blink-dev - Google Groups](https://groups.google.com/a/chromium.org/g/blink-dev) *(groups.google.com)*
  > Ready for Developer Testing: js-profiling in dedicated workers · Contact emails moni...@microsoft.com Explainer https://github.com/MicrosoftEdge/MSEdgeExplainers/ ... Good point about not spamming them. The features that are being implemented now, wo...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/31) *(github.com · 2026-09-14T08:09:52)* *(Cites: `https://chromestatus.com/feature/5159559872249856`)*
  > js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Relo...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg16028.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Fri, 06 Mar 2026 11:57:39 -0800 Contact...
- [\[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15887.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Chromestatus Thu, 19 Feb 2026 10:11:40 -0800 Contact emails \[email&#...
- [Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15888.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers 'Michal Mocny' via blink-dev Thu, 19 Feb 2026 10:27:54 -0800...

## 📚 Platform Documentation & Specifications

- [js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/31) *(github.com)*
- [Interoperability & Standards Readiness Tracking Issue · Issue #1 · mmocny/js-self-profiling](https://github.com/mmocny/js-self-profiling/issues/1) *(github.com)*
- [v147: MDN-shape upgrade for js-profiling in dedicated workers (weekly hardening remainder) by PaulKinlan · Pull Request #11 · PaulKinlan/gendn](https://github.com/PaulKinlan/gendn/pull/11) *(github.com)*
- [GitHub - WICG/js-self-profiling: Proposal for a programmable JS profiling API for collecting JS profiles from real end-user environments · GitHub](https://github.com/WICG/js-self-profiling) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 47 result(s) found across 12 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/5159559872249856" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"wicg.github.io/js-self-profiling" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (6 returned)
  - `"js-profiling in dedicated workers" API` — *Core feature API query* (3 returned)
  - `"js-profiling in dedicated workers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"js-profiling" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"js-profiling in dedicated workers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"js-profiling in dedicated workers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (4 returned)
  - `"js-profiling" ("dedicated worker" OR "web worker") performance profiling guide OR tutorial` — *Finds technical guides and tutorials detailing how to set up JavaScript self-profiling within dedicated web workers.* (0 returned)
  - `"new Profiler(" ("Document-Policy: js-profiling" OR "js-profiling") worker` — *Searches for concrete code examples and API invocations of the Profiler constructor inside worker contexts alongside the required Document-Policy header.* (7 returned)
  - `"js-profiling" "dedicated workers" ("intent to ship" OR "chromestatus" OR "Blink-dev")` — *Surfaces browser implementation announcements, Chromium intent discussions, and tracking status for worker self-profiling.* (6 returned)
  - `site:github.com/WICG/js-self-profiling ("worker" OR "WorkerGlobalScope") "Document Policy"` — *Discovers standards debates, issues, and spec considerations surrounding the integration of document policy and self-profiling in workers on the WICG repository.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **2 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 4 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 15 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "profiler", shared with 2 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "profiler": Chrome 64% passing (stable)*
- **Sources cited by the AI synthesis:** 6 result(s) found — **1 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 13 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5159559872249856)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5159559872249856)
- [Specification](https://wicg.github.io/js-self-profiling/#the-profiler-interface)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/482085416)
