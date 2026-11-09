# Source Specific Multicast for Direct Sockets API

> **Report Week:** 2026-W46 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

Adds Source-Specific Multicast (SSM) support to the Direct Sockets API, allowing Isolated Web Apps to optionally specify a source address when joining multicast groups to receive UDP packets only from that source. Without a source address, joinGroup() uses Any-Source Multicast (ASM), which receives packets from any source sending to the group. SSM is essential to using multicast outside of private networks, simplifying packet routing, and filtering traffic at the network level by source address, which mitigates spoofing and denial-of-service attacks.

### Motivation

RFC 8815 deprecates ASM for inter-domain use due to security vulnerabilities and operational complexity.  Without SSM support, developers building multicast applications in Isolated Web Apps face several problems:  Limited deployment scenarios: Applications are restricted to controlled private networks where all sources are trusted, preventing use cases like internet-wide content distribution or cross-organization IoT systems.  Application-layer filtering overhead: Applications must receive and process all packets sent to a multicast group before validating the source, wasting CPU cycles and bandwidth on potentially malicious traffic.  SSM is the IETF-recommended model for multicast across domains (RFC 4607, RFC 8815) and is supported by many enterprise and ISP networks. Adding SSM support enables more secure multicast communication beyond private network boundaries.

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 145 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Source-Specific Multicast (SSM) brings RFC 8815-compliant, hardware-filtered multicast networking to Chromium's Direct Sockets API in Chrome 158, specifically targeting Isolated Web Apps (IWAs). While the capability unlocks high-throughput streaming, IPTV, and IoT telemetry without the denial-of-service risks of Any-Source Multicast (ASM), it remains entirely isolated to Chromium's managed application ecosystem. Browser consensus outside Chromium is nonexistent, as competing engine vendors maintain firm opposition to exposing raw transport sockets to web technologies.

### Recommendations
- Actionable Advice: Teams building enterprise or kiosk applications within Isolated Web Apps should adopt SSM via the optional sourceAddress parameter to improve network efficiency and mitigate packet spoofing. For general consumer web applications, developers should avoid relying on Direct Sockets and instead design around standard transport protocols such as WebTransport or WebRTC.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/docs/iwa/direct-sockets) *(developer.chrome.com)*
  > \*\*Source-Specific Multicast (SSM)\*\* enhances the \*\*Direct Sockets API\*\* for \*\*Isolated Web Apps (IWAs)\*\* \*\*Source:\*\* \*Chrome for Developers Documentation\*
- [\[blink-dev\] Intent to Prototype: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg15334.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Source Specific Multicast for Direct Sockets API Chromestatus Mon, 01 Dec 2025 12:52:20 -0800 Con...
- [Ready for Developer Testing: Source Specific Multicast for Direct Sockets API](https://groups.google.com/a/chromium.org/g/blink-dev/c/vMmLZVd7rQI) *(groups.google.com · 2026-02-21T00:00:00)*
  > Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Ready for Developer Test...
- [\[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg15911.html) *(mail-archive.com)*
  > \[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Chromestatus Fri, 20 Feb 2026 18...
- [\[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17733.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Chromestatus Wed, 14 Oct 2026 19:43:32 -0700 Contact email...
- [\[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17744.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API 'Omar Ramadan' via blink-dev Thu, 15 Oct 2026 07:02:12 -07...
- [Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17818.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Mike Taylor Wed, 21 Oct 2026 08:24:46 -0700 LGTM3 ...
- [Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17792.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Alex Russell Mon, 19 Oct 2026 15:48:23 -0700 What'...
- [Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17787.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Reilly Grant Mon, 19 Oct 2026 13:57:35 -0700 IWA O...
- [Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17832.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt; Reilly Grant \| Software Engineer ... support to the Direct Sockets &gt;&gt;&gt;&gt;&gt; API, &lt;strong&gt;allowing Isolated Web Apps to optionally specify a source address &gt;&gt;&gt;&gt;&gt; when &gt;&gt;&gt;&gt;&gt; joining multicast g...
- [Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17799.html) *(mail-archive.com)*
  > &gt;&gt; Reilly Grant \| Software Engineer ... (SSM) support to the Direct Sockets API, &gt;&gt;&gt; &lt;strong&gt;allowing Isolated Web Apps to optionally specify a source address when &gt;&gt;&gt; joining multicast groups to receive UDP packets only from ...
- [Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17824.html) *(mail-archive.com)*
  > &gt;&gt;&gt; Reilly Grant \| Software Engineer ... (SSM) support to the Direct Sockets API, &gt;&gt;&gt;&gt; &lt;strong&gt;allowing Isolated Web Apps to optionally specify a source address when &gt;&gt;&gt;&gt; joining multicast groups to receive UDP packet...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg15334.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6208452397498368`)*
  > \[blink-dev\] Intent to Prototype: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Source Specific Multicast for Direct Sockets API Chromestatus Mon, 01 Dec 2025 12:52:20...
- [Ready for Developer Testing: Source Specific Multicast for Direct Sockets API](https://groups.google.com/a/chromium.org/g/blink-dev/c/vMmLZVd7rQI) *(groups.google.com · 2026-02-21T00:00:00)* *(Cites: `https://chromestatus.com/feature/6208452397498368`)*
  > Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Ready for Deve...
- [\[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg15911.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6208452397498368`)*
  > \[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Chromestatus Fri, 20 F...
- [\[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17733.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/direct-sockets/blob/main/docs/multicast-explainer.md`)*
  > \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Chromestatus Wed, 14 Oct 2026 19:43:32 -0700 Con...
- [\[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17744.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/direct-sockets/blob/main/docs/multicast-explainer.md`)*
  > \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API 'Omar Ramadan' via blink-dev Thu, 15 Oct 2026 07...
- [Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17818.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/direct-sockets/blob/main/docs/multicast-explainer.md`)*
  > Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Mike Taylor Wed, 21 Oct 2026 08:24:46 -0...
- [Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17792.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/direct-sockets/blob/main/docs/multicast-explainer.md`)*
  > Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Alex Russell Mon, 19 Oct 2026 15:48:23 -...
- [Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17787.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/direct-sockets/blob/main/docs/multicast-explainer.md`)*
  > Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Reilly Grant Mon, 19 Oct 2026 13:57:35 -...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/WICG/direct-sockets/issues/80) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 40 result(s) found across 12 planned queries — **11 verified relevant**
  - `"chromestatus.com/feature/6208452397498368" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"github.com/WICG/direct-sockets/blob/main/docs/multicast-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"wicg.github.io/direct-sockets" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Source Specific Multicast for Direct Sockets API" API` — *Core feature API query* (8 returned)
  - `"Source Specific Multicast for Direct Sockets API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"source-specific" OR "any-source" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Source Specific Multicast for Direct Sockets API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Source Specific Multicast for Direct Sockets API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (1 returned)
  - `"Direct Sockets" "joinGroup" "sourceAddress" "UDPSocket"` — *Finds real-world JavaScript code snippets and WebIDL usage of the joinGroup method with sourceAddress options.* (6 returned)
  - `"Direct Sockets API" ("multicast" OR "SSM") ("Isolated Web Apps" OR "IWA") tutorial OR guide` — *Surfaces practical developer guides and tutorials explaining Source-Specific Multicast setup within Isolated Web Apps.* (2 returned)
  - `"Direct Sockets" ("Source-Specific Multicast" OR "SSM") ("Intent to" OR "Chromium" OR "Chrome")` — *Tracks platform announcements, Intent to Prototype/Ship threads, and vendor adoption milestones in Chromium.* (8 returned)
  - `site:github.com/WICG/direct-sockets ("sourceAddress" OR "multicast-explainer" OR "RFC 8815")` — *Discovers spec development discussions, technical debates, and security feedback in the WICG repository.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 7 result(s) found — **2 verified relevant**
- **Twitter / X API v2:** *found 2 tweet(s)*
- **Tweets found by web search:** 1 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6208452397498368)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6208452397498368)
- [Specification](https://wicg.github.io/direct-sockets/#dom-multicastgroupoptions-sourceaddress)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/461262401)
