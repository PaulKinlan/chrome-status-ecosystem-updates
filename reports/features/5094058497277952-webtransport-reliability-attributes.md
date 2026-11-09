# WebTransport reliability attributes

> **Report Week:** 2026-W46 | **Milestone:** Chrome 158 (first listed in Chrome 155) | **Category:** Enabled by default

## Overview

Adds the WebTransport.reliability instance attribute and static WebTransport.supportsReliableOnly attribute. These APIs indicate whether the user agent supports WebTransport over exclusively reliable connections and whether an established session supports unreliable transport such as datagrams.  In Chromium, reliability initially returns "pending" and changes to "supports-unreliable" after an HTTP/3 WebTransport connection is established.  Since Chromium does not currently support HTTP/2 fallback,  WebTransport.supportsReliableOnly returns false; any successfully established session uses HTTP/3 and supports unreliable datagrams.

### Motivation

WebTransport may operate over connections with different reliability capabilities. Applications such as games, interactive media, and real-time collaboration tools need to know whether unreliable datagrams are available before selecting their transport strategy.  WebTransport.supportsReliableOnly  reports whether the user agent supports WebTransport over exclusively reliable connections. The per-session reliability attribute is "pending" while connecting and becomes "reliable-only" or  "supports-unreliable" once the transport is known.  Chromium currently implements WebTransport over HTTP/3 with unreliable datagram support, so established sessions report "supports-unreliable" and  supportsReliableOnly  returns false.

## Ecosystem Status

- **Momentum:** Emerging (+40 points since 2026-10-12; footprint 170 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The WebTransport reliability attributes introduce the static supportsReliableOnly property and session-level reliability attribute, allowing web applications to detect whether an engine or active session supports unreliable datagrams or exclusively reliable streams. Formalized in the W3C WebTransport Candidate Recommendation, these APIs address critical feature-detection requirements as HTTP/2 fallback mechanisms enter the networking landscape. Engine consensus is strong across vendors, establishing an essential diagnostic foundation for real-time media and low-latency interactive applications.

### Recommendations
- Actionable Advice: Adopt progressive enhancement by checking for the reliability attribute on established WebTransport sessions after awaiting the ready promise to ensure datagram capability before sending unreliably. Production teams should design graceful stream fallbacks when reliability resolves to reliable-only or when browsers report true for supportsReliableOnly in fallback scenarios.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 51.1% · Edge 48.9% · Firefox 47.5% · Safari 41.8%; experimental: Chrome 87.9% · Edge 87.9% · Firefox 79.4% · Safari 73.8%
- **Chrome usage:** 0.00022% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

## 📰 Ecosystem Blogs & Articles

- [januschka.com](https://static.januschka.com/changelog/chromium/i2s/M158.html) *(static.januschka.com)*
  > \*\*References:\*\* ChromeStatus Feature Entry: \*WebTransport reliability attributes\* & \*Chrome 158 Beta / Release Notes\*
- [Chrome 158 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > \*\*References:\*\* ChromeStatus Feature Entry: \*WebTransport reliability attributes\* & \*Chrome 158 Beta / Release Notes\*
- [WebTransport Explained: vs WebRTC, WHIP and MoQ in 2026](https://www.forasoft.com/learn/video-streaming/articles-streaming/webtransport-whip) *(forasoft.com)*
  > \*\*References:\*\* W3C WebTransport Specification (Candidate Recommendation) \*\*Discussion:\*\* The attributes originated from W3C Working Group discussions regarding HTTP/2 fallback drafts
- [googleusercontent.com](https://doc-1jrg-48u0-issuetracker.googleusercontent.com/issues/545636884) *(doc-1jrg-48u0-issuetracker.googleusercontent.com)*
  > \*\*References:\*\* W3C WebTransport Specification (Candidate Recommendation) and Chromium Interop Tracking WebTransport standardization matured rapidly with WebTransport becoming a core part of the cross-vendor \*\*Interop\*\* effort to align behavior acros...
- [\[blink-dev\] Intent to Prototype: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17340.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: WebTransport reliability attributes Chromestatus Tue, 01 Sep 2026 10:05:04 -0700 Contact emails \[email&#160;pr...
- [\[blink-dev\] Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17682.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport reliability attributes Chromestatus Wed, 07 Oct 2026 10:23:32 -0700 Contact emails \[email&#160;protected\] E...
- [\[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17710.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Alex Russell Mon, 12 Oct 2026 11:57:46 -0700 LGTM1; thanks for closing this ...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17713.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Mike Taylor Mon, 12 Oct 2026 16:45:55 -0700 LGTM3 On 10/12/26 2:41 p...
- [Microsoft Edge 158 web platform release notes (Nov. 19, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/158) *(learn.microsoft.com)*
  > WebTransport: reliability property at MDN.
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes) *(chromestatus.com)*
  > These APIs &lt;strong&gt;indicate whether the user agent supports WebTransport over exclusively reliable connections and whether an established session supports unreliable transport such as datagrams&lt;/strong&gt;.
- [\[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17711.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; \*Adoption plan\* &gt;&gt; Adoption is expected to happen organically as WebTransport applications &gt;&gt; &lt;strong&gt;use these attributes to select between reliable streams and unreliable &gt;&gt; datagrams&lt;/strong&gt;. &gt;&gt; &gt;&gt; ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17340.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5094058497277952`)*
  > \[blink-dev\] Intent to Prototype: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: WebTransport reliability attributes Chromestatus Tue, 01 Sep 2026 10:05:04 -0700 Contact emails \[ema...
- [\[blink-dev\] Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17682.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5094058497277952`)*
  > \[blink-dev\] Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport reliability attributes Chromestatus Wed, 07 Oct 2026 10:23:32 -0700 Contact emails \[email&#160;pr...
- [\[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17710.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5094058497277952`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Alex Russell Mon, 12 Oct 2026 11:57:46 -0700 LGTM1; thanks for clo...
- [\[pull\] master from web-platform-tests:master by pull\[bot\] · Pull Request #1656 · Ballalhossaintalukder/wpt · GitHub](https://github.com/Ballalhossaintalukder/wpt/pull/1656) *(github.com)* *(Cites: `https://chromestatus.com/feature/5094058497277952`)*
  > Update the IDL harness, Web-exposed interface, and Android WebView expectations. chrome status entry - https://&lt;strong&gt;chromestatus.com/feature/5094058497277952&lt;/strong&gt; Bug: 545636884 Change-Id: I73f603e6d43506efe2a5e1de1e1c77fc90c12bad Re...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17713.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5094058497277952`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Mike Taylor Mon, 12 Oct 2026 16:45:55 -0700 LGTM3 On 10/12...

## 📚 Platform Documentation & Specifications

- [WebTransport: supportsReliableOnly static property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/supportsReliableOnly_static) *(developer.mozilla.org)*
- [WebTransport: reliability property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/reliability) *(developer.mozilla.org)*
- [WebTransport http2 idea's suggestions · Issue #518 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/518) *(github.com)*
- [github.com](https://github.com/w3c/webtransport/issues/614) *(github.com)*
- [\[pull\] master from web-platform-tests:master by pull\[bot\] · Pull Request #1656 · Ballalhossaintalukder/wpt · GitHub](https://github.com/Ballalhossaintalukder/wpt/pull/1656) *(github.com)*
- [WebTransport - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 53 result(s) found across 12 planned queries — **14 verified relevant**
  - `"chromestatus.com/feature/5094058497277952" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (7 returned)
  - `"github.com/w3c/webtransport/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"www.w3.org/TR/webtransport" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport reliability attributes" API` — *Core feature API query* (8 returned)
  - `"WebTransport reliability attributes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"webtransport.reliability" OR "webtransport.supportsreliableonly" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport reliability attributes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebTransport reliability attributes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"WebTransport.reliability" OR "supportsReliableOnly" javascript example` — *Finds real-world code snippets demonstrating how to read session reliability or verify datagram support in JavaScript.* (8 returned)
  - `"WebTransport" "reliability" ("supports-unreliable" OR "reliable-only") tutorial OR guide` — *Discovers practical tutorials and blog posts on managing WebTransport connections and transport fallback strategies.* (4 returned)
  - `"WebTransport" "supportsReliableOnly" OR "WebTransport.reliability" site:chromestatus.com OR "Intent to Ship"` — *Tracks browser vendor implementation status, shipment announcements, and engine adoption timelines.* (2 returned)
  - `site:github.com/w3c/webtransport ("reliability" OR "supportsReliableOnly") issue OR PR` — *Surfaces W3C working group discussions, spec debates, and developer consensus regarding transport reliability attributes.* (4 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 4 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 18 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 51.1% passing (stable)*

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
