# js-profiling in dedicated workers

> **Report Week:** 2026-W41 | **Milestone:** Chrome 154 | **Category:** In developer trial (Behind a flag)

## Overview

Allows js-profiling in dedicated workers  This feature enables the JavaScript Self‑Profiling (js-profiling) API in Dedicated Workers, while remaining gated by Document Policy. It allows developers to obtain low‑overhead CPU attribution for JavaScript execution in workers, with Document Policy support for workers tracked separately.

### Motivation

Modern web applications increasingly offload performance‑critical work to Dedicated Workers to keep the main thread responsive. While the JavaScript Self‑Profiling API provides low‑overhead CPU attribution for JavaScript execution, it is currently unavailable in workers due to its reliance on Document Policy, leaving developers without visibility into where CPU time is spent during background computation.

Enabling js-profiling in Dedicated Workers fills this gap by allowing developers to capture representative JavaScript CPU profiles for worker execution, using the same explicit opt‑in and policy‑gated model already required for documents.

## Ecosystem Status

- **Momentum:** Moderate (65 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** js-profiling in dedicated workers is currently In developer trial (Behind a flag) in Chrome 154. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

### Recommendations
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg16028.html) *(mail-archive.com)*
  > [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Fri, 06 Mar 2026 11:57:39 -0800 Contact emails [e...
- [\[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15887.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: js-profiling in dedicated workers Chromestatus Thu, 19 Feb 2026 10:11:40 -0800 Contact emails [email&#160;protec...
- [Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15888.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype: js-profiling in dedicated workers 'Michal Mocny' via blink-dev Thu, 19 Feb 2026 10:27:54 -0800 Neat! Jus...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17436.html) *(mail-archive.com)*
  > Explainer https://github.com/M...umentPolicyInWorkers.md Summary <strong>Allows js-profiling in dedicated workers This feature enables the JavaScript Self‑Profiling (js-profiling) API in Dedicated Workers, while remaining gated by Document Policy</st...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/31) *(github.com · 2026-09-14T08:09:52)* *(Cites: `https://chromestatus.com/feature/5159559872249856`)*
  > js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Relo...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg16028.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Fri, 06 Mar 2026 11:57:39 -0800 Contact...
- [\[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15887.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > [blink-dev] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: js-profiling in dedicated workers Chromestatus Thu, 19 Feb 2026 10:11:40 -0800 Contact emails [email&#...
- [Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15888.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > Re: [blink-dev] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype: js-profiling in dedicated workers 'Michal Mocny' via blink-dev Thu, 19 Feb 2026 10:27:54 -0800...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17436.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/js-self-profiling/#the-profiler-interface`)*
  > Explainer https://github.com/M...umentPolicyInWorkers.md Summary <strong>Allows js-profiling in dedicated workers This feature enables the JavaScript Self‑Profiling (js-profiling) API in Dedicated Workers, while remaining gated by Document ...

## 📚 Platform Documentation & Specifications

- [js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/31) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 41 result(s) found across 8 planned queries — **5 verified relevant**
  - `"chromestatus.com/feature/5159559872249856" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"wicg.github.io/js-self-profiling" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (6 returned)
  - `"js-profiling in dedicated workers" API` — *Core feature API query* (3 returned)
  - `"js-profiling in dedicated workers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"js-profiling" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"js-profiling in dedicated workers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"js-profiling in dedicated workers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 15 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 26 item(s) inspected

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
