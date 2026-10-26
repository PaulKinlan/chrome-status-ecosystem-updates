# WebTransport reliability attributes

> **Report Week:** 2026-W44 | **Milestone:** Chrome 158 (first listed in Chrome 155) | **Category:** Enabled by default

## Overview

Adds the WebTransport.reliability instance attribute and static WebTransport.supportsReliableOnly attribute. These APIs indicate whether the user agent supports WebTransport over exclusively reliable connections and whether an established session supports unreliable transport such as datagrams.  In Chromium, reliability initially returns "pending" and changes to "supports-unreliable" after an HTTP/3 WebTransport connection is established.  Since Chromium does not currently support HTTP/2 fallback,  WebTransport.supportsReliableOnly returns false; any successfully established session uses HTTP/3 and supports unreliable datagrams.

### Motivation

WebTransport may operate over connections with different reliability capabilities. Applications such as games, interactive media, and real-time collaboration tools need to know whether unreliable datagrams are available before selecting their transport strategy.  WebTransport.supportsReliableOnly  reports whether the user agent supports WebTransport over exclusively reliable connections. The per-session reliability attribute is "pending" while connecting and becomes "reliable-only" or  "supports-unreliable" once the transport is known.  Chromium currently implements WebTransport over HTTP/3 with unreliable datagram support, so established sessions report "supports-unreliable" and  supportsReliableOnly  returns false.

## Ecosystem Status

- **Momentum:** Emerging (footprint 140 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The WebTransport reliability attributes introduce standardized capability detection via the static WebTransport.supportsReliableOnly property and the session-level WebTransport.reliability property. Enabled by default in Chrome 158, this feature allows applications to cleanly determine whether an endpoint supports unreliable datagrams (HTTP/3 over QUIC) or is limited to reliable streams (such as HTTP/2 fallback). While core WebTransport has reached broad Baseline availability, this incremental introspection API formalizes handling for corporate networks and restricted environments where UDP might be blocked.

### Recommendations
- Actionable Advice: Teams deploying WebTransport for gaming, audio/video streaming, or low-latency sync should check for 'reliability' on established sessions via progressive enhancement. After awaiting the transport ready promise, inspect transport.reliability: if it reports 'supports-unreliable', proceed with datagram pipelines, but ensure you maintain an active stream-based fallback whenever 'reliable-only' is encountered.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 42.3% · Edge 41.6% · Firefox 48.9% · Safari 43.1%; experimental: Chrome 87.6% · Edge 84.7% · Firefox 70.1% · Safari 73%
- **Chrome usage:** 0.00012% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

## 📰 Ecosystem Blogs & Articles

- [WebTransport and WHIP-over-WebTransport - Fora Soft](https://www.forasoft.com/learn/video-streaming/articles-streaming/webtransport-whip) *(forasoft.com)*
  > \`"supports-unreliable"\`: The connection operates over HTTP/3 (QUIC) and supports both unreliable datagrams and reliable streams Low-latency applications (such as game netcode, live media ingest, and Media over QUIC / MoQ) rely heavily on datagrams
- [polypane.app](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > supportsReliableOnly\` returns \`false\` because Chromium does not yet support HTTP/2 fallback reliability\` transitions from \`"pending"\` to \`"supports-unreliable"\`
- [chromestatus.com](https://chromestatus.com/feature/5089961022980096) *(chromestatus.com)*
  > Developer tool digests and Chromium platform changelogs track the release of these reliability attributes alongside other emerging WebTransport enhancements, such as \`datagramsReadableType: "bytes"\` (BYOB reader support) and hints for anticipated con...
- [\[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17710.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Alex Russell Mon, 12 Oct 2026 11:57:46 -0700 LGTM1; thanks for closing this ...
- [\[blink-dev\] Intent to Prototype: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17340.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: WebTransport reliability attributes Chromestatus Tue, 01 Sep 2026 10:05:04 -0700 Contact emails \[email&#160;pr...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17713.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Mike Taylor Mon, 12 Oct 2026 16:45:55 -0700 LGTM3 On 10/12/26 2:41 p...
- [\[blink-dev\] Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17682.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport reliability attributes Chromestatus Wed, 07 Oct 2026 10:23:32 -0700 Contact emails \[email&#160;protected\] E...
- [\[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17711.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes 'Dan Clark' via blink-dev Mon, 12 Oct 2026 13:29:21 -0700 LGTM2 On Monday, O...
- [WebTransport](https://w3c.github.io/webtransport) *(w3c.github.io · 2021-10-01T12:35:03)*
  > supportsReliableOnly, of type boolean, readonly · &lt;strong&gt;Returns true if the user agent supports WebTransport sessions over exclusively reliable connections, otherwise false&lt;/strong&gt;. anticipatedConcurrentIncomingUnidirectionalStreams, of type unsig...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17710.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5094058497277952`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Alex Russell Mon, 12 Oct 2026 11:57:46 -0700 LGTM1; thanks for clo...
- [\[blink-dev\] Intent to Prototype: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17340.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5094058497277952`)*
  > \[blink-dev\] Intent to Prototype: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: WebTransport reliability attributes Chromestatus Tue, 01 Sep 2026 10:05:04 -0700 Contact emails \[ema...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17713.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5094058497277952`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Mike Taylor Mon, 12 Oct 2026 16:45:55 -0700 LGTM3 On 10/12...
- [\[blink-dev\] Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17682.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5094058497277952`)*
  > \[blink-dev\] Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport reliability attributes Chromestatus Wed, 07 Oct 2026 10:23:32 -0700 Contact emails \[email&#160;pr...
- [\[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17711.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md#transport-modes`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes 'Dan Clark' via blink-dev Mon, 12 Oct 2026 13:29:21 -0700 LGTM2 On...

## 📚 Platform Documentation & Specifications

- [WebTransport: reliability property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/reliability) *(developer.mozilla.org)*
- [WebTransport: supportsReliableOnly static property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/supportsReliableOnly_static) *(developer.mozilla.org)*
- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/api/webtransport/index.md?plain=1) *(github.com)*
- [WebTransport - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport) *(developer.mozilla.org)*
- [2007783 - Add support for WebTransport supportsReliableOnly](https://bugzilla.mozilla.org/show_bug.cgi?id=2007783) *(bugzilla.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 50 result(s) found across 12 planned queries — **11 verified relevant**
  - `"chromestatus.com/feature/5094058497277952" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (5 returned)
  - `"github.com/w3c/webtransport/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"www.w3.org/TR/webtransport" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport reliability attributes" API` — *Core feature API query* (4 returned)
  - `"WebTransport reliability attributes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"webtransport.reliability" OR "webtransport.supportsreliableonly" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport reliability attributes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebTransport reliability attributes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"WebTransport.reliability" OR "supportsReliableOnly" "supports-unreliable"` — *Locates real-world JavaScript code snippets and implementation examples using the new reliability properties.* (6 returned)
  - `"WebTransport" reliability attributes datagrams tutorial OR guide` — *Finds developer blog posts and practical guides discussing transport reliability modes and datagram handling in WebTransport.* (8 returned)
  - `"WebTransport" ("reliability" OR "supportsReliableOnly") "intent to ship" OR "Chrome Platform Status"` — *Tracks browser vendor release notes, Intent to Ship announcements, and feature rollout status across Chromium and other engines.* (4 returned)
  - `site:github.com/w3c/webtransport ("reliability" OR "supportsReliableOnly") ("reliable-only" OR "HTTP/2")` — *Surfaces specification debates, standards design issues, and developer feedback around fallback mechanisms and reliability attributes.* (2 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 17 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 42.3% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5094058497277952)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5094058497277952)
- [Specification](https://www.w3.org/TR/webtransport/#dom-webtransport-reliability)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/545636884)
