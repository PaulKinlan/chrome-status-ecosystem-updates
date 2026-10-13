# Expose ProgressEvent in service workers

> **Report Week:** 2026-W42 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

ProgressEvent is available in service workers, allowing developers to construct progress events with lengthComputable, loaded, and total attributes. This aligns service workers with other worker contexts and the XMLHttpRequest Standard.

### Motivation

Blink exposes ProgressEvent in Window, DedicatedWorker, and SharedWorker contexts, but not in service workers. Exposing it in service workers closes this gap with the XMLHttpRequest Standard and allows code that constructs progress events to be reused across worker contexts. The change reuses the existing implementation without exposing XMLHttpRequest or adding automatic fetch progress events.  Draft implementation:  https://chromium-review.googlesource.com/c/chromium/src/+/8425503

## Ecosystem Status

- **Momentum:** Emerging (footprint 120 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The exposure of ProgressEvent in service workers resolves a long-standing omission in Blink, bringing Chromium into alignment with the WHATWG XMLHttpRequest specification where the interface is exposed to all worker global scopes. Enabled by default in Chrome 157, the update allows developers to construct and dispatch standard progress events with lengthComputable, loaded, and total attributes directly inside service workers. This change establishes complete multi-engine consensus, as Gecko and WebKit had already implemented the interface across worker contexts.

### Recommendations
- Actionable Advice: Developers can safely leverage the standard ProgressEvent constructor within service workers across modern engines, while guarding with a simple typeof ProgressEvent !== 'undefined' check or falling back to CustomEvent for older Chromium builds. Teams should note that this change only provides the event constructor and data interface; it does not expose XMLHttpRequest or provide automated progress events for the Fetch API.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`xhr`](https://webstatus.dev/features/xhr), shared with 6 other ChromeStatus features*

- Share of tests passing in the web-features group `xhr` on [wpt.fyi](https://wpt.fyi/results?q=feature:xhr) (via webstatus.dev) — stable: Chrome 95.6% · Edge 95.4% · Firefox 97% · Safari 96.5%; experimental: Chrome 95.6% · Edge 95.1% · Firefox 97% · Safari 97.9%

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://cr-status.appspot.com/release-notes/157) *(cr-status.appspot.com)*
  > Chrome Platform Status & Release Tracker (Chrome 157) \* \*\*Title / Feature:\*\* \*Expose ProgressEvent in service workers\* (Chrome 157)
- [google.com](https://issuetracker.google.com/issues/565605607) *(issuetracker.google.com)*
  > Chromium Blink Intent to Ship & Issue Tracker \* \*\*Sources:\*\* Blink \*Intent to Ship: Expose ProgressEvent in service workers\* (and Chromium Documentation Tracker Issue \`#565605607\`: \*Document ProgressEvent availability in service workers\*)
- [bsky.app](https://bsky.app/profile/intenttoship.dev) *(bsky.app)*
  > Chromium Blink Intent to Ship & Issue Tracker \* \*\*Sources:\*\* Blink \*Intent to Ship: Expose ProgressEvent in service workers\* (and Chromium Documentation Tracker Issue \`#565605607\`: \*Document ProgressEvent availability in service workers\*) dev\* typica...
- [Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17670.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Chris Harrelson Wed, 07 Oct 2026 08:24:10 -0700 LGTM2 On Wed...
- [\[blink-dev\] Intent to Prototype: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17546.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Expose ProgressEvent in service workers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Expose ProgressEvent in service workers Chromestatus Thu, 24 Sep 2026 05:51:43 -0700 Contact emails \[email...
- [\[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17635.html) *(mail-archive.com)*
  > Please list open issues (eg links ... of the API in a non-backward-compatible way). None anticipated for this change. &lt;strong&gt;The XMLHttpRequest Standard already exposes ProgressEvent to Window and Worker&lt;/strong&gt;. This change implements the existing...
- [Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17671.html) *(mail-archive.com)*
  > Please list open issues (e.g. links to known github issues &gt;&gt;&gt; in the project for the feature specification) whose resolution may &gt;&gt;&gt; introduce web compat/interop risk (e.g., changing to naming or structure of &gt;&gt;&gt; the API i...
- [\[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17669.html) *(mail-archive.com)*
  > Please list open issues (e.g. links ... the API in a non-backward-compatible way). &gt; None anticipated for this change. &lt;strong&gt;The XMLHttpRequest Standard already &gt; exposes ProgressEvent to Window and Worker&lt;/strong&gt;. This change implements the...
- [Chrome Platform Status](https://f896c59-dot-app-py3-dot-cr-status.appspot.com/feature/5069584943153152) *(f896c59-dot-app-py3-dot-cr-status.appspot.com)*
  > Chrome Platform Status

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Expose ProgressEvent in service workers · Issue #1511 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1511) *(github.com · 2026-09-24T13:38:21)* *(Cites: `https://chromestatus.com/feature/5069584943153152`)*
  > Expose ProgressEvent in service workers · Issue #1511 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or...
- [Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17670.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5069584943153152`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Chris Harrelson Wed, 07 Oct 2026 08:24:10 -0700 LG...
- [\[blink-dev\] Intent to Prototype: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17546.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5069584943153152`)*
  > \[blink-dev\] Intent to Prototype: Expose ProgressEvent in service workers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Expose ProgressEvent in service workers Chromestatus Thu, 24 Sep 2026 05:51:43 -0700 Contact ema...

## 📚 Platform Documentation & Specifications

- [Expose ProgressEvent in service workers · Issue #1511 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1511) *(github.com)*
- [\[332663431\] ProgressEvent should expose to Service Worker · Issue #485 · OSSCA-chromium/contributions](https://github.com/OSSCA-chromium/contributions/issues/485) *(github.com)*
- [Expose ProgressEvent to ServiceWorker · Issue #305 · whatwg/xhr](https://github.com/whatwg/xhr/issues/305) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 58 result(s) found across 11 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/5069584943153152" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"xhr.spec.whatwg.org" -site:xhr.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Expose ProgressEvent in service workers" API` — *Core feature API query* (5 returned)
  - `"Expose ProgressEvent in service workers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"review.googlesource" OR "chromium-review" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Expose ProgressEvent in service workers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Expose ProgressEvent in service workers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"ProgressEvent" "service worker" OR "ServiceWorkerGlobalScope" "new ProgressEvent"` — *Find JavaScript code snippets demonstrating manual construction and dispatching of ProgressEvent inside service worker scopes.* (4 returned)
  - `"Expose ProgressEvent in service workers" OR ("ProgressEvent" "ServiceWorker" "Intent to Ship")` — *Track Chromium intent-to-ship threads, browser engine support matrices, and release notes for ProgressEvent in service workers.* (5 returned)
  - `"ProgressEvent" "service worker" (download OR fetch OR stream) progress tutorial OR guide` — *Identify developer tutorials and explainers on communicating progress states from ServiceWorker back to clients or other workers.* (6 returned)
  - `site:github.com/whatwg/xhr OR site:issues.chromium.org "ProgressEvent" "ServiceWorker"` — *Uncover standards discussions, issue tickets, and spec alignment debates regarding exposing ProgressEvent in ServiceWorkerGlobalScope.* (7 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **3 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 2 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "xhr", shared with 6 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "xhr": Chrome 95.6% passing (stable)*
- **Sources cited by the AI synthesis:** 1 result(s) found — **1 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5069584943153152)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5069584943153152)
- [Specification](https://xhr.spec.whatwg.org/#interface-progressevent)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/332663431)
