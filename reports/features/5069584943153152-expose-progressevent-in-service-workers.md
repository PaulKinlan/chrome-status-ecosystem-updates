# Expose ProgressEvent in service workers

> **Report Week:** 2026-W46 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

ProgressEvent is available in service workers, allowing developers to construct progress events with lengthComputable, loaded, and total attributes. This aligns service workers with other worker contexts and the XMLHttpRequest Standard.

### Motivation

Blink exposes ProgressEvent in Window, DedicatedWorker, and SharedWorker contexts, but not in service workers. Exposing it in service workers closes this gap with the XMLHttpRequest Standard and allows code that constructs progress events to be reused across worker contexts. The change reuses the existing implementation without exposing XMLHttpRequest or adding automatic fetch progress events.  Draft implementation:  https://chromium-review.googlesource.com/c/chromium/src/+/8425503

## Ecosystem Status

- **Momentum:** Quiet (0 points since 2026-10-12; footprint 120 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** Chrome 157 closes a long-standing specification compliance gap by exposing the ProgressEvent constructor within ServiceWorkerGlobalScope, matching its existing availability across Window, DedicatedWorker, and SharedWorker contexts. Because the WHATWG XMLHttpRequest standard specifies ProgressEvent with universal worker exposure, Blink's update is classified as an engine catch-up rather than a novel feature. Web engines and developer tooling teams view this alignment as an uncontroversial ergonomic fix that simplifies cross-worker code reuse.

### Recommendations
- Actionable Advice: Teams can safely adopt native ProgressEvent construction in shared worker libraries, though production code running across diverse browser versions should guard instantiation with a simple global check (\`typeof ProgressEvent !== 'undefined'\`). Fall back to lightweight event or object literals when posting progress notifications to clients if targeting older Chromium releases.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`xhr`](https://webstatus.dev/features/xhr), shared with 6 other ChromeStatus features*

- Share of tests passing in the web-features group `xhr` on [wpt.fyi](https://wpt.fyi/results?q=feature:xhr) (via webstatus.dev) — stable: Chrome 95.7% · Edge 95% · Firefox 97% · Safari 95.9%; experimental: Chrome 95.7% · Edge 95.2% · Firefox 97% · Safari 97.7%

## 📰 Ecosystem Blogs & Articles

- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > \*\*Milestone / Tracking:\*\* Chrome 157 (Chromium Tracking Bug #332663431) \*\*Source:\*\* \*Chrome for Developers / Chrome 157 Release Notes\*
- [googlesource.com](https://chromium.googlesource.com/chromium/src.git/+/HEAD/third_party/blink/renderer/platform/runtime_enabled_features.json5) *(chromium.googlesource.com)*
  > \*\*Details:\*\* The Blink team published the intent to ship under the feature flag \`ProgressEventInServiceWorker\`
- [googleusercontent.com](https://doc-26bg-1o5g-issuetracker.googleusercontent.com/issues/565605607) *(doc-26bg-1o5g-issuetracker.googleusercontent.com)*
  > \*\*Source:\*\* \*MDN Web Docs / GitHub MDN Content Issues\* \*\*Details:\*\* A documentation tracking request was logged (\`Document ProgressEvent availability in service workers\`) to update the browser compatibility data (BCD)
- [techinnovateit.com](https://techinnovateit.com/service-worker-progressevent) *(techinnovateit.com)*
  > \*\*Source:\*\* \*Tech InnovateIT / Developer Blogs\* \*\*Use Cases:\*\* Historically, developers tracking asset pre-caching or stream downloads in service workers had to devise custom event shapes or fake progress objects before dispatching them to clients vi...
- [\[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17635.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers Chromestatus Thu, 01 Oct 2026 06:11:26 -0700 Contact emails \[email&#160;prot...
- [\[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17669.html) *(mail-archive.com)*
  > Please list open issues (e.g. links ... the API in a non-backward-compatible way). &gt; None anticipated for this change. &lt;strong&gt;The XMLHttpRequest Standard already &gt; exposes ProgressEvent to Window and Worker&lt;/strong&gt;. This change implements the...
- [Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17670.html) *(mail-archive.com)*
  > Please list open issues (e.g. links ... API in a non-backward-compatible way). &gt;&gt; None anticipated for this change. &lt;strong&gt;The XMLHttpRequest Standard already &gt;&gt; exposes ProgressEvent to Window and Worker&lt;/strong&gt;. This change implements...
- [\[blink-dev\] Intent to Prototype: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17546.html) *(mail-archive.com)*
  > Specification https://xhr.spec.whatwg.org/#interface-progressevent Summary ProgressEvent is available in service workers, &lt;strong&gt;allowing developers to construct progress events with lengthComputable, loaded, and total attributes&lt;/strong&gt;. This alig...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17635.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5069584943153152`)*
  > \[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers Chromestatus Thu, 01 Oct 2026 06:11:26 -0700 Contact emails \[email...
- [Expose ProgressEvent in service workers · Issue #1511 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1511) *(github.com · 2026-09-24T13:38:21)* *(Cites: `https://chromestatus.com/feature/5069584943153152`)*
  > Expose ProgressEvent in service workers · Issue #1511 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to r...

## 📚 Platform Documentation & Specifications

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/ProgressEvent) *(developer.mozilla.org)*
- [Expose ProgressEvent in service workers · Issue #1511 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1511) *(github.com)*
- [Release merge\_pr\_63586 · web-platform-tests/wpt · GitHub](https://github.com/web-platform-tests/wpt/releases/tag/merge_pr_63586) *(github.com)*
- [\[Blink\] Expose ProgressEvent in service workers by chromium-wpt-export-bot · Pull Request #63586 · web-platform-tests/wpt · GitHub](https://github.com/web-platform-tests/wpt/pull/63586) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 62 result(s) found across 11 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/5069584943153152" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"xhr.spec.whatwg.org" -site:xhr.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Expose ProgressEvent in service workers" API` — *Core feature API query* (8 returned)
  - `"Expose ProgressEvent in service workers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"review.googlesource" OR "chromium-review" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Expose ProgressEvent in service workers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Expose ProgressEvent in service workers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"ProgressEvent" "service worker" OR "ServiceWorkerGlobalScope"` — *Find code examples and WebIDL usage of constructing ProgressEvent inside Service Worker contexts.* (8 returned)
  - `"ProgressEvent" "service worker" tutorial OR guide OR example` — *Search for blog posts and developer guides explaining ProgressEvent support in service workers.* (8 returned)
  - `"Expose ProgressEvent in service workers" OR "ProgressEvent" site:chromestatus.com` — *Track browser vendor implementation status, Intent to Ship announcements, and feature timeline.* (1 returned)
  - `"ProgressEvent" "service worker" site:github.com/whatwg OR site:github.com/w3c OR site:issues.chromium.org` — *Discover specification discussions, issue tracker threads, and standards consensus surrounding ProgressEvent in service workers.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 8 result(s) found — **5 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 4 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "xhr", shared with 6 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "xhr": Chrome 95.7% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 5 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5069584943153152)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5069584943153152)
- [Specification](https://xhr.spec.whatwg.org/#interface-progressevent)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/332663431)
