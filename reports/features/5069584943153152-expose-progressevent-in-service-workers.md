# Expose ProgressEvent in service workers

> **Report Week:** 2026-W44 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

ProgressEvent is available in service workers, allowing developers to construct progress events with lengthComputable, loaded, and total attributes. This aligns service workers with other worker contexts and the XMLHttpRequest Standard.

### Motivation

Blink exposes ProgressEvent in Window, DedicatedWorker, and SharedWorker contexts, but not in service workers. Exposing it in service workers closes this gap with the XMLHttpRequest Standard and allows code that constructs progress events to be reused across worker contexts. The change reuses the existing implementation without exposing XMLHttpRequest or adding automatic fetch progress events.  Draft implementation:  https://chromium-review.googlesource.com/c/chromium/src/+/8425503

## Ecosystem Status

- **Momentum:** Emerging (footprint 150 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** Exposing the ProgressEvent interface in service workers resolves a long-standing specification mismatch in Blink, aligning Chromium with the WHATWG XMLHttpRequest Standard that exposes the constructor across all worker contexts. Enabled by default starting in Chrome and Edge 157 under the ProgressEventInServiceWorker feature, the change allows native instantiation of progress events with lengthComputable, loaded, and total attributes without modifying fetch internals or reintroducing XMLHttpRequest. The broader web engine consensus is unified and uncontroversial, harmonizing Chromium with WebKit's existing universal worker exposure.

### Recommendations
- Actionable Advice: Teams sharing data-handling and event-dispatching modules across threads can now replace custom mock event classes with standard ProgressEvent constructors \[df6be934406d2f58\]. Before relying on it unconditionally, verify that existing codebase polyfills or global feature checks in service worker scopes do not collide with the newly exposed native global.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`xhr`](https://webstatus.dev/features/xhr), shared with 6 other ChromeStatus features*

- Share of tests passing in the web-features group `xhr` on [wpt.fyi](https://wpt.fyi/results?q=feature:xhr) (via webstatus.dev) — stable: Chrome 95.4% · Edge 95.4% · Firefox 97% · Safari 95.9%; experimental: Chrome 95.7% · Edge 95.7% · Firefox 97% · Safari 96.8%

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/5069584943153152?gate=6152298232414208) *(img968-dot-cr-status.appspot.com)*
  > The platform update \*\*"Expose ProgressEvent in service workers"\*\* brings the standard \`ProgressEvent\` interface into the \`ServiceWorkerGlobalScope\` Under the \*\*WHATWG XMLHttpRequest Standard\*\*, \`ProgressEvent\` is defined as \`\[Exposed=(Window,Worker)\]...
- [appspot.com](https://cr-status.appspot.com/feature/5069584943153152/activity) *(cr-status.appspot.com)*
  > This change closes the interoperability gap, allowing developers to instantiate \`new ProgressEvent(type, { lengthComputable, loaded, total })\` directly inside service workers without introducing \`XMLHttpRequest\` or altering core fetch lifecycles \*\*Se...
- [googlesource.com](https://chromium.googlesource.com/chromium/src.git/+/HEAD/third_party/blink/renderer/platform/runtime_enabled_features.json5) *(chromium.googlesource.com)*
  > \*\*Release Target\*\*: Shipped enabled-by-default in \*\*Chrome 157\*\* (tracked under Chromium Bug \[332663431\](https://issues.chromium.org/issues/332663431) and runtime feature flag \`ProgressEventInServiceWorker\`)
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > \*\*Release Target\*\*: Shipped enabled-by-default in \*\*Chrome 157\*\* (tracked under Chromium Bug \[332663431\](https://issues.chromium.org/issues/332663431) and runtime feature flag \`ProgressEventInServiceWorker\`)
- [techinnovateit.com](https://techinnovateit.com/service-worker-progressevent) *(techinnovateit.com)*
  > Lacking \`ProgressEvent\` forced developers to build custom mock events or branch logic specifically when running inside a service worker Technical posts and developer guides (e.g., \*Tech InnovateIT\*) focus on practical patterns and backward-compatibil...
- [googleusercontent.com](https://doc-2gh0-0gig-issuetracker.googleusercontent.com/issues/565605607) *(doc-2gh0-0gig-issuetracker.googleusercontent.com)*
  > Documentation updates (such as tracking issue \`Document ProgressEvent availability in service workers \[565605607\]\`) remove this caveat as Blink aligns with WebKit (Safari), which already exposed the interface to the universal \`Worker\` scope
- [Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17670.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Chris Harrelson Wed, 07 Oct 2026 08:24:10 -0700 LGTM2 On Wed...
- [\[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17669.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Alex Russell Wed, 07 Oct 2026 08:22:47 -0700 LGTM1; thanks for imple...
- [\[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17635.html) *(mail-archive.com)*
  > Please list open issues (eg links ... of the API in a non-backward-compatible way). None anticipated for this change. &lt;strong&gt;The XMLHttpRequest Standard already exposes ProgressEvent to Window and Worker&lt;/strong&gt;. This change implements the existing...
- [\[blink-dev\] Intent to Prototype: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17546.html) *(mail-archive.com)*
  > Specification https://xhr.spec.whatwg.org/#interface-progressevent Summary ProgressEvent is available in service workers, &lt;strong&gt;allowing developers to construct progress events with lengthComputable, loaded, and total attributes&lt;/strong&gt;. This alig...
- [Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17671.html) *(mail-archive.com)*
  > The expanded WPT is included in the CL: &gt;&gt;&gt; https://chromium-review.googlesource.com/c/chromium/src/+/8425503 &gt;&gt;&gt; &gt;&gt;&gt; \*Flag name on about://flags\* &gt;&gt;&gt; \*No information provided\* &gt;&gt;&gt; &gt;&gt;&gt; \*Finch feat...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Expose ProgressEvent in service workers · Issue #1511 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1511) *(github.com · 2026-09-24T13:38:21)* *(Cites: `https://chromestatus.com/feature/5069584943153152`)*
  > Expose ProgressEvent in service workers · Issue #1511 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or...
- [Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17670.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5069584943153152`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Chris Harrelson Wed, 07 Oct 2026 08:24:10 -0700 LG...
- [\[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17669.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5069584943153152`)*
  > \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Alex Russell Wed, 07 Oct 2026 08:22:47 -0700 LGTM1; thanks...

## 📚 Platform Documentation & Specifications

- [Expose ProgressEvent in service workers · Issue #1511 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1511) *(github.com)*
- [\[Blink\] Expose ProgressEvent in service workers by chromium-wpt-export-bot · Pull Request #63586 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/63586) *(github.com)*
- [Release merge\_pr\_63586 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/releases/tag/merge_pr_63586) *(github.com)*
- [Expose ProgressEvent to ServiceWorker · Issue #305 · whatwg/xhr](https://github.com/whatwg/xhr/issues/305) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 70 result(s) found across 11 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5069584943153152" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"xhr.spec.whatwg.org" -site:xhr.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Expose ProgressEvent in service workers" API` — *Core feature API query* (8 returned)
  - `"Expose ProgressEvent in service workers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"review.googlesource" OR "chromium-review" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Expose ProgressEvent in service workers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Expose ProgressEvent in service workers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"new ProgressEvent" ("ServiceWorkerGlobalScope" OR "service worker")` — *Searches for code snippets and examples constructing ProgressEvent objects directly within service worker scripts.* (8 returned)
  - `"ProgressEvent" "service worker" (site:chromestatus.com OR site:groups.google.com/a/chromium.org)` — *Tracks platform status updates, intent-to-ship discussions, and Chromium standard alignment announcements.* (8 returned)
  - `"ProgressEvent" "service worker" (tutorial OR guide OR "how to") -XMLHttpRequest` — *Discovers tutorials and developer guides covering the practical use of custom progress events in service worker workflows.* (8 returned)
  - `"ProgressEvent" "ServiceWorker" site:github.com/whatwg/xhr OR site:issues.chromium.org` — *Finds spec discussions, standards consensus, and bug tracker deliberations on exposing ProgressEvent to ServiceWorkerGlobalScope.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 1 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "xhr", shared with 6 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "xhr": Chrome 95.4% passing (stable)*
- **Sources cited by the AI synthesis:** 2 result(s) found — **0 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5069584943153152)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5069584943153152)
- [Specification](https://xhr.spec.whatwg.org/#interface-progressevent)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/332663431)
