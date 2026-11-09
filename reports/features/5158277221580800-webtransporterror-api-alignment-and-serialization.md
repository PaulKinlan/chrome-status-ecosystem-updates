# WebTransportError API alignment and serialization

> **Report Week:** 2026-W46 | **Milestone:** Chrome 159 | **Category:** Enabled by default

## Overview

Updates Chromium WebTransportError to match the current WebTransport specification. Adds the standard (message, options) constructor while preserving the shipped dictionary constructor for compatibility; carries the full unsigned-long stream error code end to end; and makes WebTransportError structured-clonable while preserving its message, source, and nullable error code. Serialization is enabled by default behind a writer-side runtime kill switch, while decoding remains permanently enabled for persisted values.

### Motivation

Chromium's shipped WebTransportError implementation predates the current WebTransport specification.  It accepts a legacy dictionary-only constructor, narrows outgoing application stream error codes to 8 bits despite the API exposing an unsigned long, and does not support the structured serialization required by the specification.  The change aligns Chromium with the standardized API and improves WebTransport interoperability. The legacy constructor remains available so existing Chromium applications continue to work.

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 145 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** Chromium's alignment of WebTransportError with the W3C specification resolves long-standing interoperability gaps by introducing the standard (message, options) constructor, propagating full 32-bit unsigned long stream error codes end-to-end, and adding native structured serialization support. This eliminates frequent DataCloneError exceptions when passing errors across Web Worker boundaries or persisting them in IndexedDB. Cross-browser engine consensus is firmly aligned behind the standard, completing a major interop milestone for low-latency networking on the web.

### Recommendations
- Actionable Advice: Web teams can transition to the standardized new WebTransportError(message, options) constructor syntax and safely post error objects across Web Workers using structuredClone() or postMessage(). However, if supporting legacy Chromium builds, retain fallback property extraction or defensive worker messaging to prevent DataCloneError exceptions on unpatched clients.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 51.1% · Edge 48.9% · Firefox 47.5% · Safari 41.8%; experimental: Chrome 87.9% · Edge 87.9% · Firefox 79.4% · Safari 73.8%
- **Chrome usage:** 0.00022% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/release-notes/159) *(chromestatus.com)*
  > \*\*"WebTransportError API alignment and serialization"\*\* is an interoperability update in Chromium (tracked under \*\*Issue 577073049\*\* and shipping in \*\*Chrome 159\*\*) \*\*Source:\*\* \*Chrome Platform Status\* / \*Chrome 159 Release Notes\*
- [chromestatus.com](https://chromestatus.com/feature/5158277221580800?gate=6109543305183232) *(chromestatus.com)*
  > Chromium’s original WebTransport implementation predated the finalized W3C specification \*\*Constructor Standard Alignment:\*\* Introduces the standard \`new WebTransportError(message, options)\` constructor while preserving the legacy dictionary-only con...
- [appspot.com](https://img168-dot-cr-status.appspot.com/feature/5158277221580800) *(img168-dot-cr-status.appspot.com)*
  > Browser engines (Gecko/Firefox via Bug 2009530 and WebKit/Safari via Bug 305224) have aligned their implementations with the standard constructor and serialization behaviors
- [deno.com](https://docs.deno.com/api/web/platform) *(docs.deno.com)*
  > \*\*Key Takeaway:\*\* Developers using \`structuredClone(error)\` or storing errors in IndexedDB no longer encounter \`DataCloneError\` exceptions when handling \`WebTransportError\` instances
- [\[blink-dev\] Re: Intent to Ship: WebTransportError API alignment and serialization](http://www.mail-archive.com/blink-dev@chromium.org/msg17934.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebTransportError API alignment and serialization Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransportError API alignment and serialization Daniel Bratell Wed, 04 Nov 2026 09:13:36 -0800 L...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransportError API alignment and serialization](http://www.mail-archive.com/blink-dev@chromium.org/msg17951.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransportError API alignment and serialization Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransportError API alignment and serialization Daniel Bratell Fri, 06 Nov 2026 08:12:58...
- [\[blink-dev\] Intent to Ship: WebTransportError API alignment and serialization](http://www.mail-archive.com/blink-dev@chromium.org/msg17922.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransportError API alignment and serialization Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransportError API alignment and serialization Chromestatus Tue, 03 Nov 2026 14:21:14 -0800 Contact ema...
- [Re: \[blink-dev\] Intent to Ship: WebTransportError API alignment and serialization](http://www.mail-archive.com/blink-dev@chromium.org/msg17929.html) *(mail-archive.com)*
  > This &lt;strong&gt;aligns the existing WebTransportError API with the current &gt; specification&lt;/strong&gt;. Existing error values from 0–255 retain identical behavior, &gt; the legacy constructor remains supported, and ordinary creation, throwing, &gt; and ...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransportError API alignment and serialization](http://www.mail-archive.com/blink-dev@chromium.org/msg17937.html) *(mail-archive.com)*
  > This &lt;strong&gt;aligns the existing WebTransportError API with the current &gt;&gt; specification&lt;/strong&gt;. Existing error values from 0–255 retain identical behavior, &gt;&gt; the legacy constructor remains supported, and ordinary creation, throwing, &...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Ship: WebTransportError API alignment and serialization](http://www.mail-archive.com/blink-dev@chromium.org/msg17934.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5158277221580800`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransportError API alignment and serialization Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransportError API alignment and serialization Daniel Bratell Wed, 04 Nov 2026 09:13:...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransportError API alignment and serialization](http://www.mail-archive.com/blink-dev@chromium.org/msg17951.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5158277221580800`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransportError API alignment and serialization Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransportError API alignment and serialization Daniel Bratell Fri, 06 Nov 202...
- [WebTransportError API alignment and serialization · Issue #49 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/49) *(github.com · 2026-11-02T08:06:38)* *(Cites: `https://chromestatus.com/feature/5158277221580800`)*
  > WebTransportError API alignment and serialization · Issue #49 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload t...
- [\[blink-dev\] Intent to Ship: WebTransportError API alignment and serialization](http://www.mail-archive.com/blink-dev@chromium.org/msg17922.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Ship: WebTransportError API alignment and serialization Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransportError API alignment and serialization Chromestatus Tue, 03 Nov 2026 14:21:14 -0800 C...

## 📚 Platform Documentation & Specifications

- [WebTransport](https://www.w3.org/TR/2023/WD-webtransport-20230712) *(w3.org)*
- [The structured clone algorithm - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) *(developer.mozilla.org)*
- [WebTransportError API alignment and serialization · Issue #49 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/49) *(github.com)*
- [WebTransport/Meetings - W3C Wiki](https://www.w3.org/wiki/WebTransport/Meetings) *(w3.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 62 result(s) found across 13 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/5158277221580800" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/w3c/webtransport/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"www.w3.org/TR/webtransport" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransportError API alignment and serialization" API` — *Core feature API query* (6 returned)
  - `"WebTransportError API alignment and serialization" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"unsigned-long" OR "structured-clonable" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransportError API alignment and serialization" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebTransportError API alignment and serialization" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"WebTransportError" ("structuredClone" OR "postMessage") constructor` — *Finds real-world code examples demonstrating the instantiation and structured serialization of WebTransportError across workers or windows.* (8 returned)
  - `"WebTransportError" ("WebTransport" OR "W3C") error handling guide OR tutorial` — *Discovers developer tutorials and practical guides detailing error handling, stream termination, and WebTransport error interfaces.* (8 returned)
  - `Chrome "WebTransportError" ("serialization" OR "structured clone" OR "stream error code")` — *Monitors Chrome status announcements, release notes, and ecosystem tracking for WebTransportError specification alignment.* (8 returned)
  - `site:github.com/w3c/webtransport "WebTransportError" ("constructor" OR "serialization" OR "errorCode")` — *Uncovers standards working group issues, discussions, and pull requests addressing WebTransportError constructor standardization and serialization.* (7 returned)
  - `"WebTransportError" ("source" AND "errorCode") "WebTransport" example` — *Searches for JavaScript snippets showing how WebTransportError properties such as source and nullable errorCode are parsed and handled in applications.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 5 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 18 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 51.1% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5158277221580800)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5158277221580800)
- [Specification](https://www.w3.org/TR/webtransport/#web-transport-error-interface)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/577073049)
