# Expose ProgressEvent in service workers

> **Report Week:** 2026-W45 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

ProgressEvent is available in service workers, allowing developers to construct progress events with lengthComputable, loaded, and total attributes. This aligns service workers with other worker contexts and the XMLHttpRequest Standard.

### Motivation

Blink exposes ProgressEvent in Window, DedicatedWorker, and SharedWorker contexts, but not in service workers. Exposing it in service workers closes this gap with the XMLHttpRequest Standard and allows code that constructs progress events to be reused across worker contexts. The change reuses the existing implementation without exposing XMLHttpRequest or adding automatic fetch progress events.  Draft implementation:  https://chromium-review.googlesource.com/c/chromium/src/+/8425503

## Ecosystem Status

- **Momentum:** Quiet (-10 points since 2026-10-12; footprint 110 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** Chrome 157 resolves a longstanding Blink specification gap by exposing the ProgressEvent constructor in service worker scopes, aligning Chromium with the WHATWG XMLHttpRequest standard. While the interface was already available across Window and other worker contexts in Blink, its exclusion from service workers previously hindered cross-context code sharing. Because competing engines already adhered to the standard, this change finalizes full cross-engine interoperability without modifying network primitives or fetch behaviors.

### Recommendations
- Actionable Advice: Teams building worker-based telemetry or custom task-progress pipelines can now standardize on the native ProgressEvent constructor across all modern browsers. If legacy Chromium runtimes must be supported, verify availability via standard feature detection ('ProgressEvent' in self) and fall back to CustomEvent where necessary.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Leopeva64 on X: "In the tweet I say "once again" because FOUR YEARS AGO the same engineer had already uploaded another patch to Chromium Gerrit that also intended to implement this feature in Chrome, but that patch was abandoned two weeks after it was uploaded 👇 https://t.co/LZw4OFNLS8 . https://t.co/e7VO5IIeFj" / X" (0 points, 0 comments).

## Web-features Group

*group-level data: web-features [`xhr`](https://webstatus.dev/features/xhr), shared with 6 other ChromeStatus features*

- Share of tests passing in the web-features group `xhr` on [wpt.fyi](https://wpt.fyi/results?q=feature:xhr) (via webstatus.dev) — stable: Chrome 95.4% · Edge 95.4% · Firefox 97% · Safari 95.9%; experimental: Chrome 95.7% · Edge 95.7% · Firefox 97% · Safari 97%

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Leopeva64 on X: "In the tweet I say "once again" because FOUR YEARS AGO the same engineer had already uploaded another patch to Chromium Gerrit that also intended to implement this feature in Chrome, but that patch was abandoned two weeks after it was uploaded 👇 https://t.co/LZw4OFNLS8 . https://t.co/e7VO5IIeFj" / X](https://x.com/Leopeva64/status/1921807794652508281) — *by @Leopeva64, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://cr-status.appspot.com/feature/5069584943153152/activity) *(cr-status.appspot.com)*
  > However, while engines like Gecko (Firefox) and WebKit (Safari) adhered to this, Chromium's Blink engine previously omitted \`ProgressEvent\` from service worker contexts \*\*Source:\*\* \[MDN Web Docs: \`ProgressEvent\`\](https://developer.mozilla.org/en-US/d...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > \*\*The Resolution:\*\* Chromium addressed this discrepancy under the runtime feature flag \`ProgressEventInServiceWorker\` (Chromium Bug #332663431), officially landing in \*\*Chrome 157\*\* \*\*Source:\*\* \[Chrome Platform Status — Expose ProgressEvent in servic...
- [\[blink-dev\] Intent to Prototype: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17546.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Expose ProgressEvent in service workers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Expose ProgressEvent in service workers Chromestatus Thu, 24 Sep 2026 05:51:43 -0700 Contact emails \[email...
- [\[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17669.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Alex Russell Wed, 07 Oct 2026 08:22:47 -0700 LGTM1; thanks for imple...
- [Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17671.html) *(mail-archive.com)*
  > Please list open issues (e.g. links to known github issues &gt;&gt;&gt; in the project for the feature specification) whose resolution may &gt;&gt;&gt; introduce web compat/interop risk (e.g., changing to naming or structure of &gt;&gt;&gt; the API i...
- [\[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17635.html) *(mail-archive.com)*
  > Please list open issues (eg links ... of the API in a non-backward-compatible way). None anticipated for this change. &lt;strong&gt;The XMLHttpRequest Standard already exposes ProgressEvent to Window and Worker&lt;/strong&gt;. This change implements the existing...
- [Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17670.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; \*Gecko\*: Shipped/Shipping ( &gt;&gt; https://hg.mozilla.org/releases/mozilla-release/raw-file/FIREFOX\_140\_0\_RELEASE/dom/webidl/ProgressEvent.webidl) &gt;&gt; Verified &gt;&gt; in Firefox 140 release sources: ProgressEvent is exposed...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17546.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5069584943153152`)*
  > \[blink-dev\] Intent to Prototype: Expose ProgressEvent in service workers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Expose ProgressEvent in service workers Chromestatus Thu, 24 Sep 2026 05:51:43 -0700 Contact ema...
- [\[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17669.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5069584943153152`)*
  > \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Alex Russell Wed, 07 Oct 2026 08:22:47 -0700 LGTM1; thanks...
- [Expose ProgressEvent in service workers · Issue #1511 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1511) *(github.com · 2026-09-24T13:38:21)* *(Cites: `https://chromestatus.com/feature/5069584943153152`)*
  > Expose ProgressEvent in service workers · Issue #1511 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to r...

## 📚 Platform Documentation & Specifications

- [Expose ProgressEvent in service workers · Issue #1511 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1511) *(github.com)*
- [\[Blink\] Expose ProgressEvent in service workers by chromium-wpt-export-bot · Pull Request #63586 · web-platform-tests/wpt · GitHub](https://github.com/web-platform-tests/wpt/pull/63586) *(github.com)*
- [\[332663431\] ProgressEvent should expose to Service Worker · Issue #485 · OSSCA-chromium/contributions · GitHub](https://github.com/OSSCA-chromium/contributions/issues/485) *(github.com)*
- [Expose ProgressEvent to ServiceWorker · Issue #305 · whatwg/xhr · GitHub](https://github.com/whatwg/xhr/issues/305) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 61 result(s) found across 11 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5069584943153152" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"xhr.spec.whatwg.org" -site:xhr.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Expose ProgressEvent in service workers" API` — *Core feature API query* (8 returned)
  - `"Expose ProgressEvent in service workers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"review.googlesource" OR "chromium-review" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Expose ProgressEvent in service workers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Expose ProgressEvent in service workers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"ProgressEvent" "service worker" OR "ServiceWorkerGlobalScope" "new ProgressEvent"` — *Finds code snippets, polyfills, and JavaScript usage patterns constructing ProgressEvent within service worker scopes.* (5 returned)
  - `"Expose ProgressEvent in service workers" OR site:chromestatus.com/feature/ "ProgressEvent"` — *Tracks platform status updates, feature release milestones, and browser engine shipping intent.* (0 returned)
  - `"ProgressEvent" "service worker" (tutorial OR guide OR "how to") "lengthComputable"` — *Surfaces community tutorials, guides, and blog posts detailing how to track and emit progress events in service worker contexts.* (8 returned)
  - `site:github.com/whatwg/xhr OR site:github.com/w3c/ServiceWorker "ProgressEvent" "Service Worker"` — *Surfaces specification issues, developer feedback, and standards discussions regarding aligning service workers with ProgressEvent.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **2 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 3 result(s) found — **1 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "xhr", shared with 6 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "xhr": Chrome 95.4% passing (stable)*
- **Sources cited by the AI synthesis:** 1 result(s) found — **1 verified relevant**

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
