# WebTransport draining

> **Report Week:** 2026-W45 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

WebTransport.draining is a promise that resolves when the server indicates that the WebTransport session will be gracefully retired. Applications can use this signal to establish a replacement session while existing streams and the current session remain usable.

### Motivation

A WebTransport server may need to retire a session for maintenance, load balancing, deployment, or connection-lifetime management. Without a draining signal, an application learns about this only when the session closes, which can cause an avoidable interruption while a replacement connection is established. The draining promise gives the application advance notice without changing the lifetime or usability of the current session.

## Ecosystem Status

- **Momentum:** Emerging (+5 points since 2026-10-12; footprint 190 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The WebTransport.draining attribute exposes a promise that resolves when an HTTP/3 server signals session retirement via capsules or frames, enabling seamless connection handovers without interrupting ongoing streams. Codified in the W3C WebTransport specification and enabled by default in Chrome, it addresses a critical operational gap in low-latency connection management during routine server maintenance and load balancing. Although engine consensus on the specification is solid, full multi-engine availability remains in progress as other runtimes advance their transport stacks.

### Recommendations
- Actionable Advice: Teams deploying WebTransport in production should feature-detect WebTransport.draining and use it to proactively establish replacement connections and migrate state in the background. Concurrently, retain robust fallback handling on the WebTransport.closed promise for older browsers or servers that do not yet emit graceful draining frames.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 43.1% · Edge 41.6% · Firefox 48.9% · Safari 43.1%; experimental: Chrome 87.6% · Edge 84.7% · Firefox 78.8% · Safari 73%
- **Chrome usage:** 0.00016% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://cr-status.appspot.com/feature/6427766428925952) *(cr-status.appspot.com)*
  > In HTTP/3 and WebTransport architectures, servers periodically need to be retired for software rollouts, node draining, routine maintenance, or load rebalancing closed\`), causing sudden disconnects, packet drops, or noticeable pauses while a new hand...
- [techinnovateit.com](https://techinnovateit.com/webtransport-draining-graceful-shutdown) *(techinnovateit.com)*
  > Applications can immediately spin up a replacement \`WebTransport\` session in the background and gracefully migrate active state before the old session finishes closing \*\*Article/Source:\*\* \*WebTransport Explained: Real-Time Architecture & Handover Gui...
- [Chrome 158 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > \*\*Article/Source:\*\* \*Chrome Platform Status: WebTransport Draining\* & \*Chrome Release Notes\*
- [forasoft.com](https://www.forasoft.com/learn/video-streaming/articles-streaming/webtransport-whip) *(forasoft.com)*
  > Chrome's intent-to-ship records track the rollout of the \`draining\` promise (progressing through Dev Trials and shipping in Chrome 158), aligning the browser engine with the latest W3C WebTransport Candidate Recommendation This reflects WebTransport'...
- [codercops.com](https://blog.codercops.com/blog/webtransport-explained-websocket-alternative-2026) *(blog.codercops.com)*
  > This reflects WebTransport's rapid maturity across major rendering engines The draining promise solves the long-standing WebSocket headache where server restarts forcibly disconnect connected users, enabling seamless, uninterrupted client sessions
- [Re: \[blink-dev\] Intent to Ship: WebTransport draining](http://www.mail-archive.com/blink-dev@chromium.org/msg17761.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport draining Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport draining Mike Taylor Thu, 15 Oct 2026 17:47:21 -0700 LGTM1 On 10/15/26 5:49 p.m., Chromestatus wrote: \*Contact em...
- [\[blink-dev\] Intent to Ship: WebTransport draining](http://www.mail-archive.com/blink-dev@chromium.org/msg17754.html) *(mail-archive.com)*
  > Gecko: Shipped/Shipping (https://bugzilla.mozilla.org/show\_bug.cgi?id=2007160) WebTransport.draining shipped in Firefox 155 - https://chromium.googlesource.com/external/github.com/mdn/browser-compat-data/+/HEAD/api/WebTransport.json#804 WebKit: Shipp...
- [Re: \[blink-dev\] Intent to Ship: WebTransport draining](http://www.mail-archive.com/blink-dev@chromium.org/msg17795.html) *(mail-archive.com)*
  > &gt; &gt; \*Will this feature be supported on all six Blink platforms (Windows, Mac, &gt; Linux, ChromeOS, Android, and Android WebView)?\* &gt; Yes &gt; &gt; \*Is this feature fully tested by web-platform-tests &gt; &lt;https://chromium.googlesource.co...
- [Re: \[blink-dev\] Intent to Ship: WebTransport draining](http://www.mail-archive.com/blink-dev@chromium.org/msg17812.html) *(mail-archive.com)*
  > \*Contact emails\* \[email protected\] \*Explainer\* https://github.com/w3c/webtransport/blob/main/explainer.md#11-handling-session-draining &lt;https://github.com/w3c/webtransport/blob/main/explainer.md#11-handling-session-draining&gt; \*Specification\* htt...
- [WebTransport](https://pr-preview.s3.amazonaws.com/vasilvv/web-transport/pull/509.html) *(pr-preview.s3.amazonaws.com · 2023-05-09T00:00:00)*
  > To establish a WebTransport session ... \[WEB-TRANSPORT-HTTP3\] Section 3.3, with using origin, serialized and isomorphic encoded, as the \`Origin\` header of the request. When establishing a session, the client MUST NOT provide any credentials. A WebTra...
- [Import wpt@6635df7642576bb6b9c5ab025b33822284f80f12 \[chromium/src : main\]](https://groups.google.com/a/chromium.org/g/blink-reviews-animation/c/VlrgGupcVZ0) *(groups.google.com)*
  > PASS idl\_test setup PASS idl\_test ... &quot;congestionControl&quot; expected true got false PASS WebTransport interface: attribute closed +FAIL WebTransport interface: attribute draining assert\_true: The prototype object must have a property &quot;dr...
- [Chrome Platform Status](https://chromestatus.com/feature/6311472179183616) *(chromestatus.com · 2021-12-13T00:00:00)*
  > We cannot provide a description for this page right now

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: WebTransport draining](http://www.mail-archive.com/blink-dev@chromium.org/msg17761.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6427766428925952`)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport draining Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport draining Mike Taylor Thu, 15 Oct 2026 17:47:21 -0700 LGTM1 On 10/15/26 5:49 p.m., Chromestatus wrote: \*...

## 📚 Platform Documentation & Specifications

- [WebTransport API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API) *(developer.mozilla.org)*
- [WebTransport - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport) *(developer.mozilla.org)*
- [webtransport/index.bs at main · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/blob/main/index.bs) *(github.com)*
- [WebTransport: draining property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/draining) *(developer.mozilla.org)*
- [WebTransport.draining docs by hamishwillee · Pull Request #45306 · mdn/content · GitHub](https://github.com/mdn/content/pull/45306) *(github.com)*
- [2007160 - Support Draining promise for WebTransport](https://bugzilla.mozilla.org/show_bug.cgi?id=2007160) *(bugzilla.mozilla.org)*
- [Draining WebTransport connections · Issue #432 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/432) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 67 result(s) found across 12 planned queries — **15 verified relevant**
  - `"chromestatus.com/feature/6427766428925952" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/w3c/webtransport/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"w3c.github.io/webtransport" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport draining" API` — *Core feature API query* (7 returned)
  - `"WebTransport draining" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"webtransport.draining" OR "connection-lifetime" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport draining" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebTransport draining" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"WebTransport" draining "graceful" reconnect OR migration tutorial OR guide` — *Finds developer guides, blog articles, and tutorials explaining how to use WebTransport draining to achieve zero-downtime graceful reconnections.* (8 returned)
  - `"WebTransport" "draining" ("await transport.draining" OR "transport.draining.then")` — *Locates real-world JavaScript code snippets and client-side implementations demonstrating the promise consumption syntax for WebTransport.draining.* (8 returned)
  - `site:chromestatus.com OR site:groups.google.com/a/chromium.org "WebTransport" "draining"` — *Tracks browser vendor release notes, Chromium Intent to Ship/Prototype announcements, and implementation milestones.* (8 returned)
  - `site:github.com/w3c/webtransport OR site:github.com/ietf-wg-webtrans "draining"` — *Surfaces standards-body discussions, IETF/W3C issue threads, and feedback regarding the WebTransport session draining protocol and API design.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 3 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 3 result(s) found — **2 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 18 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 43.1% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6427766428925952)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6427766428925952)
- [Specification](https://w3c.github.io/webtransport/#dom-webtransport-draining)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/564353368)
