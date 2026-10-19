# WebTransport reliability attributes

> **Report Week:** 2026-W43 | **Milestone:** Chrome 155 | **Category:** In developer trial (Behind a flag)

## Overview

Adds the WebTransport.reliability instance attribute and static WebTransport.supportsReliableOnly attribute. These APIs indicate whether the user agent supports WebTransport over exclusively reliable connections and whether an established session supports unreliable transport such as datagrams.  In Chromium, reliability initially returns "pending" and changes to "supports-unreliable" after an HTTP/3 WebTransport connection is established.  Since Chromium does not currently support HTTP/2 fallback,  WebTransport.supportsReliableOnly returns false; any successfully established session uses HTTP/3 and supports unreliable datagrams.

### Motivation

WebTransport may operate over connections with different reliability capabilities. Applications such as games, interactive media, and real-time collaboration tools need to know whether unreliable datagrams are available before selecting their transport strategy.  WebTransport.supportsReliableOnly  reports whether the user agent supports WebTransport over exclusively reliable connections. The per-session reliability attribute is "pending" while connecting and becomes "reliable-only" or  "supports-unreliable" once the transport is known.  Chromium currently implements WebTransport over HTTP/3 with unreliable datagram support, so established sessions report "supports-unreliable" and  supportsReliableOnly  returns false.

## Ecosystem Status

- **Momentum:** Emerging (footprint 150 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The WebTransport reliability attributes (\`WebTransport.reliability\` and static \`WebTransport.supportsReliableOnly\`) resolve a critical capability-detection gap by allowing applications to query whether a connection supports unreliable datagrams over HTTP/3 or is restricted to reliable-only fallback transports. Standardized in the W3C WebTransport specification and documented on MDN, the feature is currently in developer trial behind a flag in Chromium while foundational engine consensus from Mozilla and WebKit remains supportive.

### Recommendations
- Actionable Advice: Development teams should adopt progressive enhancement by querying \`WebTransport.supportsReliableOnly\` prior to connection and inspecting \`transport.reliability\` after \`transport.ready\` settles before dispatching datagrams. Teams should test the feature behind flags in Chromium while maintaining WebSocket or WebRTC fallbacks for restrictive network environments.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 45% · Edge 45% · Firefox 61.5% · Safari 42.6%; experimental: Chrome 89.9% · Edge 86% · Firefox 67.5% · Safari 74.4%
- **Chrome usage:** 0.00013% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

## 📰 Ecosystem Blogs & Articles

- [ietf.org](https://datatracker.ietf.org/meeting/119/materials/slides-119-webtrans-ietf-119-webtrans-wg-slides-04) *(datatracker.ietf.org)*
  > supportsReliableOnly\` (static property)\*\*: A boolean flag indicating whether the user agent supports WebTransport sessions running exclusively over reliable transports (such as TCP-based HTTP/2) Notes that \`supportsReliableOnly\` can be inspected befo...
- [polypane.app](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > supportsReliableOnly\` returns \`false\` because Chromium only negotiates WebTransport over HTTP/3 reliability\` begins as \`"pending"\` and resolves to \`"supports-unreliable"\` once the HTTP/3 handshake completes
- [chromestatus.com](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > \*\*Entries:\*\* \*WebTransport reliability attributes\* (Chrome Status & Chrome 158 Milestone Notes)
- [googleusercontent.com](https://doc-025g-06e0-issuetracker.googleusercontent.com/issues/545636884) *(doc-025g-06e0-issuetracker.googleusercontent.com)*
  > \*\*Articles:\*\* \*Experimental Chromium Web Platform Features\* (Polypane) & \*WebKit / Interop Tracking Bugs\* reliability\` simplifies debugging connection fallbacks in corporate and restrictive network environments where UDP is dropped
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
- [Maîtriser WebTransport pour le temps réel résilient](https://www.hurterandco.group/maitriser-webtransport-pour-des-flux-temps-reel-resilients) *(hurterandco.group · 2026-08-17T05:00:32)*
  > MDN documente une propriété reliability particulièrement utile pour adapter le comportement applicatif. Elle expose trois états : pending, reliable-only et supports-unreliable.

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
- [webtransport/index.bs at main · w3c/webtransport](https://github.com/w3c/webtransport/blob/main/index.bs) *(github.com)* *(Cites: `https://www.w3.org/TR/webtransport/#dom-webtransport-reliability`)*
  > ED: https://w3c.github.io/webtransport/ TR: https://&lt;strong&gt;www.w3.org/TR/webtransport&lt;/strong&gt;/ Editor: Nidhi Jaju, w3cid 136840, Google · Editor: Victor Vasiliev, w3cid 113328, Google · Editor: Jan-Ivar Bruaroey, w3cid 79152, Mozilla · Fo...

## 📚 Platform Documentation & Specifications

- [WebTransport: supportsReliableOnly static property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/supportsReliableOnly_static) *(developer.mozilla.org)*
- [WebTransport: reliability property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/reliability) *(developer.mozilla.org)*
- [webtransport/index.bs at main · w3c/webtransport](https://github.com/w3c/webtransport/blob/main/index.bs) *(github.com)*
- [2007783 - Add support for WebTransport supportsReliableOnly](https://bugzilla.mozilla.org/show_bug.cgi?id=2007783) *(bugzilla.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 56 result(s) found across 12 planned queries — **11 verified relevant**
  - `"chromestatus.com/feature/5094058497277952" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"github.com/w3c/webtransport/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"www.w3.org/TR/webtransport" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport reliability attributes" API` — *Core feature API query* (4 returned)
  - `"WebTransport reliability attributes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"webtransport.reliability" OR "webtransport.supportsreliableonly" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport reliability attributes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebTransport reliability attributes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"WebTransport.reliability" OR "supportsReliableOnly" tutorial OR guide OR blog` — *Finds developer guides and tutorials explaining how to use WebTransport reliability attributes.* (8 returned)
  - `"WebTransport.reliability" "supports-unreliable" OR "reliable-only" example JavaScript` — *Searches for real-world JavaScript code snippets demonstrating WebTransport session reliability checking.* (8 returned)
  - `"supportsReliableOnly" OR "WebTransport.reliability" site:chromestatus.com OR "Intent to Ship"` — *Tracks browser adoption, feature implementation status, and intent-to-ship announcements in Chromium.* (1 returned)
  - `"supportsReliableOnly" OR "WebTransport.reliability" site:github.com/w3c/webtransport OR site:issues.chromium.org` — *Retrieves specification debates, issue tracker discussions, and developer feedback around WebTransport transport modes.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 17 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 45% passing (stable)*
- **Sources cited by the AI synthesis:** 5 result(s) found — **4 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 9 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5094058497277952)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5094058497277952)
- [Specification](https://www.w3.org/TR/webtransport/#dom-webtransport-reliability)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/545636884)
