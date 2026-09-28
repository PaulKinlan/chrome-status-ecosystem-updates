# js-profiling in dedicated workers

> **Report Week:** 2026-W40 | **Milestone:** Chrome 154 | **Category:** In developer trial (Behind a flag)

## Overview

Allows js-profiling in dedicated workers  This feature enables the JavaScript Self‑Profiling (js-profiling) API in Dedicated Workers, while remaining gated by Document Policy. It allows developers to obtain low‑overhead CPU attribution for JavaScript execution in workers, with Document Policy support for workers tracked separately.

### Motivation

Modern web applications increasingly offload performance‑critical work to Dedicated Workers to keep the main thread responsive. While the JavaScript Self‑Profiling API provides low‑overhead CPU attribution for JavaScript execution, it is currently unavailable in workers due to its reliance on Document Policy, leaving developers without visibility into where CPU time is spent during background computation.

Enabling js-profiling in Dedicated Workers fills this gap by allowing developers to capture representative JavaScript CPU profiles for worker execution, using the same explicit opt‑in and policy‑gated model already required for documents.

## Ecosystem Status

- **Momentum:** High (145 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** js-profiling in dedicated workers is currently In developer trial (Behind a flag) in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17436.html) *(mail-archive.com)*
  > [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Thu, 10 Sep 2026 13:21:00 -0700 Contact emails [e...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg16028.html) *(mail-archive.com)*
  > [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Fri, 06 Mar 2026 11:57:39 -0800 Contact emails [e...
- [\[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15887.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: js-profiling in dedicated workers Chromestatus Thu, 19 Feb 2026 10:11:40 -0800 Contact emails [email&#160;protec...
- [Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15888.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype: js-profiling in dedicated workers 'Michal Mocny' via blink-dev Thu, 19 Feb 2026 10:27:54 -0800 Neat! Jus...
- [js-profiling in dedicated workers](https://chromestatus.com/feature/5159559872249856) *(chromestatus.com · 2026-02-13T00:00:00)*
  > We cannot provide a description for this page right now
- [r/javascript on Reddit: A gentle introduction to js performance profiler](https://www.reddit.com/r/javascript/comments/ukmcdi/a_gentle_introduction_to_js_performance_profiler) *(reddit.com · 2022-05-07T21:03:04)*
  > Fuck that. First time I used a profiler in 14 years was last year when I had to debug canvas + web worker memory management thanks to chrome heuristics.
- [I might be a bit biased \[0\], but I feel like this is where profiling tools, and ... \| Hacker News](https://news.ycombinator.com/item?id=27743546) *(news.ycombinator.com · 2021-07-09T17:46:55)*
  > For rust you can use eBPF to get these traces down to system calls. You can even profiler other people&#x27;s software with it · Aside from the sampling issue there is also the problem of non-blocking frameworks/languages. It’s easy to add tracing to...
- [Cloudflare Workers: Run JavaScript Service Workers at the Edge \| Hacker News](https://news.ycombinator.com/item?id=15364896) *(news.ycombinator.com · 2017-10-02T16:03:59)*
  > Also, this feature is pretty cool · I wish I&#x27;d included more images and diagrams in the post, but I&#x27;m generally terrible at coming up with those
- [Web worker meets worker threads – threads.js \| Hacker News](https://news.ycombinator.com/item?id=27252706) *(news.ycombinator.com · 2021-05-24T00:42:41)*
  > I tried to use workers to speed up a JS bundler/compiler system 6 years ago by farming out parsing &amp; analysis work, and getting results back onto the main thread for my naive implementation took more CPU time than the work itself · Deserializatio...
- [The 7 Walls JavaScript Hits — and How WebAssembly Gets Past Them](https://dev.to/james_anderson_h/the-7-walls-javascript-hits-and-how-webassembly-gets-past-them-3khk) *(dev.to · James Anderson · Sep 28)*
  > Every time Figma renders a complex design instantly, or Google Sheets recalculates a huge spreadsheet...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/31) *(github.com · 2026-09-14T08:09:52)* *(Cites: `https://chromestatus.com/feature/5159559872249856`)*
  > js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Relo...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17436.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5159559872249856`)*
  > [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Thu, 10 Sep 2026 13:21:00 -0700 Contact...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg16028.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Fri, 06 Mar 2026 11:57:39 -0800 Contact...
- [\[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15887.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > [blink-dev] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: js-profiling in dedicated workers Chromestatus Thu, 19 Feb 2026 10:11:40 -0800 Contact emails [email&#...
- [Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15888.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > Re: [blink-dev] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype: js-profiling in dedicated workers 'Michal Mocny' via blink-dev Thu, 19 Feb 2026 10:27:54 -0800...

## 📚 Platform Documentation & Specifications

- [js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/31) *(github.com)*
- [GitHub - WICG/js-self-profiling: Proposal for a programmable JS profiling API for collecting JS profiles from real end-user environments · GitHub](https://github.com/WICG/js-self-profiling) *(github.com)*
- [js-self-profiling/README.md at main · WICG/js-self-profiling](https://github.com/WICG/js-self-profiling/blob/main/README.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 57 result(s) found across 12 planned queries — **12 verified relevant**
  - `"chromestatus.com/feature/5159559872249856" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"wicg.github.io/js-self-profiling" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"js-profiling in dedicated workers" API` — *Core feature API query* (3 returned)
  - `"js-profiling in dedicated workers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"js-profiling" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"js-profiling in dedicated workers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"js-profiling in dedicated workers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (3 returned)
  - `"js-profiling" ("worker" OR "DedicatedWorkerGlobalScope") tutorial OR guide` — *Developer-oriented articles and walk-throughs demonstrating how to enable and use the JS Self-Profiling API within dedicated worker threads.* (4 returned)
  - `"new Profiler({" "js-profiling" ("Document-Policy" OR "worker")` — *Concrete JavaScript code snippets showcasing initialization and sample retrieval via the Profiler constructor in worker scripts.* (8 returned)
  - `"js-profiling in dedicated workers" OR ("js-profiling" "dedicated workers" "Intent to Ship")` — *Tracking browser vendor implementation status, Chromium blink-dev intent threads, and adoption roadmaps.* (3 returned)
  - `"js-profiling" "DocumentPolicy" "workers" (site:github.com/WICG OR site:github.com/MicrosoftEdge OR site:news.ycombinator.com)` — *Ecosystem feedback, spec issues, and developer sentiment surrounding Document Policy integration with background worker profiling.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 18 result(s) found — **1 verified relevant**
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
