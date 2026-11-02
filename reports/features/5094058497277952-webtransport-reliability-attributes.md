# WebTransport reliability attributes

> **Report Week:** 2026-W45 | **Milestone:** Chrome 158 (first listed in Chrome 155) | **Category:** Enabled by default

## Overview

Adds the WebTransport.reliability instance attribute and static WebTransport.supportsReliableOnly attribute. These APIs indicate whether the user agent supports WebTransport over exclusively reliable connections and whether an established session supports unreliable transport such as datagrams.  In Chromium, reliability initially returns "pending" and changes to "supports-unreliable" after an HTTP/3 WebTransport connection is established.  Since Chromium does not currently support HTTP/2 fallback,  WebTransport.supportsReliableOnly returns false; any successfully established session uses HTTP/3 and supports unreliable datagrams.

### Motivation

WebTransport may operate over connections with different reliability capabilities. Applications such as games, interactive media, and real-time collaboration tools need to know whether unreliable datagrams are available before selecting their transport strategy.  WebTransport.supportsReliableOnly  reports whether the user agent supports WebTransport over exclusively reliable connections. The per-session reliability attribute is "pending" while connecting and becomes "reliable-only" or  "supports-unreliable" once the transport is known.  Chromium currently implements WebTransport over HTTP/3 with unreliable datagram support, so established sessions report "supports-unreliable" and  supportsReliableOnly  returns false.

## Ecosystem Status

- **Momentum:** Moderate (+40 points since 2026-10-12; footprint 170 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The \`WebTransport.reliability\` instance property and static \`supportsReliableOnly\` attribute provide runtime introspection to determine whether a browser or active connection supports unreliable datagrams over HTTP/3 versus strictly reliable fallback transports like HTTP/2. Standardized in the W3C WebTransport specification with cross-vendor participation, the API resolves to 'supports-unreliable' in Chromium where HTTP/3 is active and returns false for static reliable-only support. The feature provides a clean, forward-compatible contract for real-time web applications to adapt their transmission strategies.

### Recommendations
- Actionable Advice: Teams building latency-sensitive applications should feature-detect \`transport.reliability\` after awaiting \`transport.ready\` to conditionally route payloads between datagram streams and reliable fallback channels. However, because HTTP/2 fallback is not yet universally deployed, web applications must continue to retain WebSocket or WebRTC fallbacks for environments blocking UDP/HTTP/3.
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

- [chromestatus.com](https://chromestatus.com/feature/5094058497277952/activity) *(chromestatus.com)*
  > supportsReliableOnly\` (static read-only boolean):\*\* Indicates whether the browser/user agent supports WebTransport connections running exclusively over reliable transport protocols (such as HTTP/2 over TCP)
- [puppyip.com](https://puppyip.com/en/resources/firefox-158-webtransport-http2-streaming-upload-guide) *(puppyip.com)*
  > In Chromium and Gecko engines, \`supportsReliableOnly\` currently returns \`false\` because WebTransport over HTTP/2 fallback has not yet been rolled out natively \*\*Developer Blogs & Network Tooling Analyses:\*\* Technical write-ups (e.g., surrounding Fire...
- [gigazine.net](https://gigazine.net/gsc_news/en/20261007-google-chrome-155) *(gigazine.net)*
  > reliability\` and \`supportsReliableOnly\` alongside complementary WebTransport improvements (such as \`WebTransportReceiveStream\` byte-tracking and BYOB reading for datagrams)
- [Chrome 158 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > reliability\` and \`supportsReliableOnly\` alongside complementary WebTransport improvements (such as \`WebTransportReceiveStream\` byte-tracking and BYOB reading for datagrams)
- [januschka.com](https://static.januschka.com/changelog/chromium/i2s/M155.html) *(static.januschka.com)*
  > reliability\` and \`supportsReliableOnly\` alongside complementary WebTransport improvements (such as \`WebTransportReceiveStream\` byte-tracking and BYOB reading for datagrams)
- [ietf.org](https://datatracker.ietf.org/meeting/119/materials/slides-119-webtrans-ietf-119-webtrans-wg-slides-04) *(datatracker.ietf.org)*
  > \*\*IETF WebTransport Working Group (IETF 119+):\*\* The attributes directly support the split between the WebTransport over HTTP/3 specification (Victor Vasiliev) and the ongoing WebTransport over HTTP/2 specification (Eric Kinnear) The APIs were create...
- [polypane.app](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > \*\*Polypane (“Experimental Chromium Web Platform Features”):\*\* Covered the introduction of WebTransport reliability flags, noting their synergy with datagram stream enhancements (such as \`datagramsReadableType: "bytes"\`)
- [\[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17711.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes 'Dan Clark' via blink-dev Mon, 12 Oct 2026 13:29:21 -0700 LGTM2 On Monday, O...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17713.html) *(mail-archive.com)*
  > On Wednesday, October 7, 2026 at ...liableOnly attribute. These APIs &lt;strong&gt;indicate whether the user agent supports WebTransport over exclusively reliable connections and whether an established session supports unreliable transport such as datagram...
- [\[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17710.html) *(mail-archive.com)*
  > &gt; &gt; \*Security\* &gt; No new network capability or sensitive information is exposed. The &gt; attributes &lt;strong&gt;report whether an implementation or session supports exclusively &gt; reliable or unreliable WebTransport&lt;/strong&gt;, which is already ...
- [\[blink-dev\] Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17682.html) *(mail-archive.com)*
  > Developers can use standard feature detection and retain existing fallbacks for older browsers. Security No new network capability or sensitive information is exposed. The attributes &lt;strong&gt;report whether an implementation or session supports exclus...
- [\[blink-dev\] Intent to Prototype: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17340.html) *(mail-archive.com)*
  > Explainer https://github.com/w...liableOnly attribute. These APIs &lt;strong&gt;indicate whether the user agent supports WebTransport over exclusively reliable connections and whether an established session supports unreliable transport such as datagrams&lt;/...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17711.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md#transport-modes`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes 'Dan Clark' via blink-dev Mon, 12 Oct 2026 13:29:21 -0700 LGTM2 On...

## 📚 Platform Documentation & Specifications

- [WebTransport: supportsReliableOnly static property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/supportsReliableOnly_static) *(developer.mozilla.org)*
- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/api/webtransport/reliability/index.md?plain=1) *(github.com)*
- [WebTransport: reliability property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/reliability) *(developer.mozilla.org)*
- [WebTransport - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport) *(developer.mozilla.org)*
- [Docs and Fx158 rel note for WebTransport.supportsReliableOnly static … by chrisdavidmills · Pull Request #46073 · mdn/content · GitHub](https://github.com/mdn/content/pull/46073) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 53 result(s) found across 12 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5094058497277952" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/w3c/webtransport/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"www.w3.org/TR/webtransport" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport reliability attributes" API` — *Core feature API query* (6 returned)
  - `"WebTransport reliability attributes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"webtransport.reliability" OR "webtransport.supportsreliableonly" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport reliability attributes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebTransport reliability attributes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"WebTransport.reliability" OR "supportsReliableOnly" code example OR javascript` — *Finds code samples, API syntax, and JavaScript snippets checking WebTransport reliability modes before sending datagrams.* (8 returned)
  - `WebTransport "supports-unreliable" OR "reliable-only" tutorial guide` — *Discovers practical developer tutorials, guides, and articles demonstrating how to negotiate connection reliability and datagram fallbacks.* (8 returned)
  - `"WebTransport.supportsReliableOnly" OR "WebTransport.reliability" "Intent to Ship" OR "Chrome" OR "Firefox"` — *Tracks browser vendor release notes, implementation status, and Intent-to-Ship announcements across Chromium and other engines.* (8 returned)
  - `site:github.com/w3c/webtransport "reliability" OR "supportsReliableOnly" issues OR discussions` — *Surfaces W3C standardization debates, community issue trackers, and developer feedback around reliability state management.* (4 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 4 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 18 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 43.1% passing (stable)*
- **Sources cited by the AI synthesis:** 5 result(s) found — **2 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 10 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5094058497277952)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5094058497277952)
- [Specification](https://www.w3.org/TR/webtransport/#dom-webtransport-reliability)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/545636884)
