# WebTransport reliability attributes

> **Report Week:** 2026-W42 | **Milestone:** Chrome 155 | **Category:** In developer trial (Behind a flag)

## Overview

Adds the WebTransport.reliability instance attribute and static WebTransport.supportsReliableOnly attribute. These APIs indicate whether the user agent supports WebTransport over exclusively reliable connections and whether an established session supports unreliable transport such as datagrams.  In Chromium, reliability initially returns "pending" and changes to "supports-unreliable" after an HTTP/3 WebTransport connection is established.  Since Chromium does not currently support HTTP/2 fallback,  WebTransport.supportsReliableOnly returns false; any successfully established session uses HTTP/3 and supports unreliable datagrams.

### Motivation

WebTransport may operate over connections with different reliability capabilities. Applications such as games, interactive media, and real-time collaboration tools need to know whether unreliable datagrams are available before selecting their transport strategy.  WebTransport.supportsReliableOnly  reports whether the user agent supports WebTransport over exclusively reliable connections. The per-session reliability attribute is "pending" while connecting and becomes "reliable-only" or  "supports-unreliable" once the transport is known.  Chromium currently implements WebTransport over HTTP/3 with unreliable datagram support, so established sessions report "supports-unreliable" and  supportsReliableOnly  returns false.

## Ecosystem Status

- **Momentum:** Emerging (footprint 130 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The WebTransport reliability attributes introduce the static 'WebTransport.supportsReliableOnly' property and the instance-level 'reliability' attribute, allowing applications to introspect whether an environment supports exclusively reliable transports (such as HTTP/2 fallbacks) and whether an active session allows unreliable datagrams. Currently rolling out in developer trials behind a flag in Chrome and tracked across MDN and Gecko bug trackers for preview implementation, the API fills a crucial architectural gap in transport capability negotiation. Multi-engine consensus is strong given that both Mozilla and WebKit maintain positive standards positions on WebTransport, though complete reliable-only transport implementations remain in nascent stages across browsers.

### Recommendations
- Actionable Advice: Teams building latency-sensitive applications should feature-detect 'WebTransport.supportsReliableOnly' and check 'transport.reliability' after awaiting 'transport.ready' to branch their messaging logic. For production deployments today, keep primary fallbacks to WebSockets or WebRTC active until both HTTP/2 fallback mechanisms and cross-browser reliability attribute support reach stable parity.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 16 other ChromeStatus features*

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 48.6% · Edge 48.6% · Firefox 67.6% · Safari 44.8%; experimental: Chrome 92.4% · Edge 87.6% · Firefox 63.8% · Safari 80%
- **Chrome usage:** 0.000088% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

## 📰 Ecosystem Blogs & Articles

- [ietf.org](https://datatracker.ietf.org/meeting/119/materials/slides-119-webtrans-ietf-119-webtrans-wg-slides-04) *(datatracker.ietf.org)*
  > supportsReliableOnly\` (static attribute):\*\* A boolean indicating whether the user agent supports WebTransport sessions operating strictly over reliable-only transports (e.g., HTTP/2 fallback) However, draft specifications also cover WebTransport over...
- [googleusercontent.com](https://doc-48mg-1o5g-issuetracker.googleusercontent.com/issues/545636884) *(doc-48mg-1o5g-issuetracker.googleusercontent.com)*
  > supportsReliableOnly\` returns \`false\` because Chromium does not yet support HTTP/2 fallback \* \*\*Browser Compatibility Tracking (Gecko / Mozilla)\*\*: MDN documentation entries (and associated GitHub tracking issues for Firefox 158) indicate preview sup...
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/155) *(chromestatus.com)*
  > supportsReliableOnly\` returns \`false\` because Chromium does not yet support HTTP/2 fallback reliability\` transitions from \`"pending"\` to \`"supports-unreliable"\` once an HTTP/3 session is established
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > Chrome Platform Status & Release Announcements \* \*\*Chrome Platform Status Entry (\*WebTransport reliability attributes\*)\*\*: Notes the feature's progression (developer trials in Chrome 155, targeting stable release in Chrome 158) under the Blink Networ...
- [\[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17710.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Alex Russell Mon, 12 Oct 2026 11:57:46 -0700 LGTM1; thanks for closing this ...
- [\[blink-dev\] Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17682.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport reliability attributes Chromestatus Wed, 07 Oct 2026 10:23:32 -0700 Contact emails \[email&#160;protected\] E...
- [\[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17711.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes 'Dan Clark' via blink-dev Mon, 12 Oct 2026 13:29:21 -0700 LGTM2 On Monday, O...
- [\[blink-dev\] Intent to Prototype: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17340.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: WebTransport reliability attributes Chromestatus Tue, 01 Sep 2026 10:05:04 -0700 Contact emails \[email&#160;pr...
- [WebTransport](https://w3c.github.io/webtransport) *(w3c.github.io · 2021-10-01T12:35:03)*
  > supportsReliableOnly, of type boolean, readonly · &lt;strong&gt;Returns true if the user agent supports WebTransport sessions over exclusively reliable connections, otherwise false&lt;/strong&gt;. anticipatedConcurrentIncomingUnidirectionalStreams, of type unsig...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17710.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5094058497277952`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Alex Russell Mon, 12 Oct 2026 11:57:46 -0700 LGTM1; thanks for clo...
- [\[blink-dev\] Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17682.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5094058497277952`)*
  > \[blink-dev\] Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport reliability attributes Chromestatus Wed, 07 Oct 2026 10:23:32 -0700 Contact emails \[email&#160;pr...
- [\[pull\] master from web-platform-tests:master by pull\[bot\] · Pull Request #1656 · Ballalhossaintalukder/wpt](https://github.com/Ballalhossaintalukder/wpt/pull/1656) *(github.com)* *(Cites: `https://chromestatus.com/feature/5094058497277952`)*
  > Update the IDL harness, Web-exposed interface, and Android WebView expectations. chrome status entry - https://&lt;strong&gt;chromestatus.com/feature/5094058497277952&lt;/strong&gt; Bug: 545636884 Change-Id: I73f603e6d43506efe2a5e1de1e1c77fc90c12bad Re...
- [\[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17711.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md#transport-modes`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes 'Dan Clark' via blink-dev Mon, 12 Oct 2026 13:29:21 -0700 LGTM2 On...
- [\[blink-dev\] Intent to Prototype: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17340.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md#transport-modes`)*
  > \[blink-dev\] Intent to Prototype: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: WebTransport reliability attributes Chromestatus Tue, 01 Sep 2026 10:05:04 -0700 Contact emails \[ema...

## 📚 Platform Documentation & Specifications

- [WebTransport - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport) *(developer.mozilla.org)*
- [WebTransport: reliability property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/reliability) *(developer.mozilla.org)*
- [\[pull\] master from web-platform-tests:master by pull\[bot\] · Pull Request #1656 · Ballalhossaintalukder/wpt](https://github.com/Ballalhossaintalukder/wpt/pull/1656) *(github.com)*
- [WebTransport](https://www.w3.org/TR/2026/CR-webtransport-20260730) *(w3.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 49 result(s) found across 12 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5094058497277952" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/w3c/webtransport/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"www.w3.org/TR/webtransport" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport reliability attributes" API` — *Core feature API query* (3 returned)
  - `"WebTransport reliability attributes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"webtransport.reliability" OR "webtransport.supportsreliableonly" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport reliability attributes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebTransport reliability attributes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"WebTransport.reliability" OR "WebTransport.supportsReliableOnly" example OR code` — *Finds code samples and WebIDL implementations demonstrating how to check reliability attributes on WebTransport instances.* (8 returned)
  - `"WebTransport" ("supports-unreliable" OR "supportsReliableOnly") tutorial OR guide` — *Discovers practical developer guides and tutorials addressing WebTransport transport modes and datagram capability detection.* (0 returned)
  - `"WebTransport" reliability "supportsReliableOnly" ("Intent to Ship" OR "Chrome" OR "Chromium")` — *Tracks browser vendor release notes, Intent to Ship threads, and adoption roadmaps regarding the reliability attributes.* (4 returned)
  - `site:github.com/w3c/webtransport ("reliability" OR "supportsReliableOnly") issue OR discussion` — *Finds standards body debates, specification issues, and developer feedback around reliable-only versus unreliable transport negotiation.* (1 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 16 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 48.6% passing (stable)*

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
