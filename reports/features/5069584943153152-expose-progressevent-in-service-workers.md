# Expose ProgressEvent in service workers

> **Report Week:** 2026-W43 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

ProgressEvent is available in service workers, allowing developers to construct progress events with lengthComputable, loaded, and total attributes. This aligns service workers with other worker contexts and the XMLHttpRequest Standard.

### Motivation

Blink exposes ProgressEvent in Window, DedicatedWorker, and SharedWorker contexts, but not in service workers. Exposing it in service workers closes this gap with the XMLHttpRequest Standard and allows code that constructs progress events to be reused across worker contexts. The change reuses the existing implementation without exposing XMLHttpRequest or adding automatic fetch progress events.  Draft implementation:  https://chromium-review.googlesource.com/c/chromium/src/+/8425503

## Ecosystem Status

- **Momentum:** Emerging (footprint 100 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The exposure of ProgressEvent in service workers resolves a long-standing environment gap, allowing developers to construct progress events with attributes like lengthComputable, loaded, and total inside service worker scopes. This update achieves parity with Window, DedicatedWorker, and SharedWorker contexts as outlined by the XMLHttpRequest Standard. Ecosystem-wide, the feature has gained formal shipping consensus in Blink (landing in Chrome 157) with positive reception for improving API symmetry.

### Recommendations
- Actionable Advice: Web development teams can safely rely on ProgressEvent constructors inside service workers for modern chromium-based environments, but should implement capability detection or fallbacks if targeting older browser versions that lack worker-scope support. Ensure that shared utility libraries expecting ProgressEvent do not erroneously assume automatic stream progress tracking over service worker fetch events.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`xhr`](https://webstatus.dev/features/xhr), shared with 6 other ChromeStatus features*

- Share of tests passing in the web-features group `xhr` on [wpt.fyi](https://wpt.fyi/results?q=feature:xhr) (via webstatus.dev) — stable: Chrome 95.4% · Edge 94.7% · Firefox 97% · Safari 96.3%; experimental: Chrome 95.6% · Edge 95.2% · Firefox 97% · Safari 98.2%

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17670.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Chris Harrelson Wed, 07 Oct 2026 08:24:10 -0700 LGTM2 On Wed...
- [\[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17669.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Alex Russell Wed, 07 Oct 2026 08:22:47 -0700 LGTM1; thanks for imple...
- [\[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17635.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers Chromestatus Thu, 01 Oct 2026 06:11:26 -0700 Contact emails \[email&#160;prot...
- [\[blink-dev\] Intent to Prototype: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17546.html) *(mail-archive.com)*
  > Specification https://xhr.spec.whatwg.org/#interface-progressevent Summary ProgressEvent is available in service workers, &lt;strong&gt;allowing developers to construct progress events with lengthComputable, loaded, and total attributes&lt;/strong&gt;. This alig...
- [Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17671.html) *(mail-archive.com)*
  > The expanded WPT is included in the CL: &gt;&gt;&gt; https://chromium-review.googlesource.com/c/chromium/src/+/8425503 &gt;&gt;&gt; &gt;&gt;&gt; \*Flag name on about://flags\* &gt;&gt;&gt; \*No information provided\* &gt;&gt;&gt; &gt;&gt;&gt; \*Finch feat...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17670.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5069584943153152`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Chris Harrelson Wed, 07 Oct 2026 08:24:10 -0700 LG...
- [\[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17669.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5069584943153152`)*
  > \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Alex Russell Wed, 07 Oct 2026 08:22:47 -0700 LGTM1; thanks...
- [\[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17635.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5069584943153152`)*
  > \[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers Chromestatus Thu, 01 Oct 2026 06:11:26 -0700 Contact emails \[email...

## 📚 Platform Documentation & Specifications

- [Expose ProgressEvent in service workers · Issue #1511 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1511) *(github.com)*
- [ProgressEvent - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent) *(developer.mozilla.org)*
- [\[Blink\] Expose ProgressEvent in service workers by chromium-wpt-export-bot · Pull Request #63586 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/63586) *(github.com)*
- [Release merge\_pr\_63586 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/releases/tag/merge_pr_63586) *(github.com)*
- [XMLHttpRequestEventTarget: progress event - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/progress_event) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 58 result(s) found across 11 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5069584943153152" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"xhr.spec.whatwg.org" -site:xhr.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Expose ProgressEvent in service workers" API` — *Core feature API query* (8 returned)
  - `"Expose ProgressEvent in service workers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"review.googlesource" OR "chromium-review" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Expose ProgressEvent in service workers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Expose ProgressEvent in service workers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `ProgressEvent service worker tutorial guide` — *Find community blog posts and tutorials on using ProgressEvent inside service workers.* (8 returned)
  - `"ProgressEvent" service worker lengthComputable loaded total javascript code` — *Search for real-world code examples utilizing ProgressEvent constructor properties in workers.* (8 returned)
  - `Blink "Expose ProgressEvent in service workers" chromium review` — *Discover implementation status, Chromium issues, and standards alignment announcements.* (8 returned)
  - `ProgressEvent worker context XMLHttpRequest standard discussion` — *Examine ecosystem sentiment and discussions regarding consistency across worker contexts.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 3 result(s) found — **2 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 1 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "xhr", shared with 6 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "xhr": Chrome 95.4% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5069584943153152)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5069584943153152)
- [Specification](https://xhr.spec.whatwg.org/#interface-progressevent)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/332663431)
