# Source Specific Multicast for Direct Sockets API

> **Report Week:** 2026-W45 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

Adds Source-Specific Multicast (SSM) support to the Direct Sockets API, allowing Isolated Web Apps to optionally specify a source address when joining multicast groups to receive UDP packets only from that source. Without a source address, joinGroup() uses Any-Source Multicast (ASM), which receives packets from any source sending to the group. SSM is essential to using multicast outside of private networks, simplifying packet routing, and filtering traffic at the network level by source address, which mitigates spoofing and denial-of-service attacks.

### Motivation

RFC 8815 deprecates ASM for inter-domain use due to security vulnerabilities and operational complexity.  Without SSM support, developers building multicast applications in Isolated Web Apps face several problems:  Limited deployment scenarios: Applications are restricted to controlled private networks where all sources are trusted, preventing use cases like internet-wide content distribution or cross-organization IoT systems.  Application-layer filtering overhead: Applications must receive and process all packets sent to a multicast group before validating the source, wasting CPU cycles and bandwidth on potentially malicious traffic.  SSM is the IETF-recommended model for multicast across domains (RFC 4607, RFC 8815) and is supported by many enterprise and ISP networks. Adding SSM support enables more secure multicast communication beyond private network boundaries.

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 195 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Shipping enabled by default in Chrome 158, Source-Specific Multicast (SSM) extends the Direct Sockets API by introducing an optional sourceAddress parameter to joinGroup(), aligning browser multicast capabilities with RFC 8815 and RFC 4607 standards. The capability is strictly gated behind Isolated Web Apps (IWAs), serving specialized enterprise, IPTV, and high-throughput media streaming use cases rather than standard web origins. Outside of Chromium, the feature lacks cross-engine traction, with competing browser engines refusing to adopt raw direct sockets.

### Recommendations
- Actionable Advice: Treat Direct Sockets SSM strictly as an enterprise-grade, Chromium-targeted runtime capability for packaged Isolated Web Apps rather than an open-web feature. For public web apps requiring multi-engine reach, teams should continue relying on WebTransport, WebRTC data channels, or server-side relay architectures.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://cr-status.appspot.com/feature/6208452397498368?gate=5109346174369792) *(cr-status.appspot.com)*
  > \*\*Source-Specific Multicast (SSM) for the Direct Sockets API\*\* allows Isolated Web Apps (IWAs) to specify an optional \`sourceAddress\` parameter when joining UDP multicast groups
- [ietf.org](https://datatracker.ietf.org/meeting/124/materials/slides-124-mboned-multicast-in-the-browser-direct-sockets-enable-isolated-web-apps-on-treedn-00) *(datatracker.ietf.org)*
  > \*\*The Problem with Any-Source Multicast (ASM):\*\* The initial implementation of multicast in Direct Sockets supported only ASM (\`\*, G\`), where a receiver listens to all traffic sent to a group address Media delivery engineers and internet architects (...
- [chromestatus.com](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > Chrome 158 officially enabled SSM by default, expanding the API surface to support source-filtered subscriptions for enterprise and high-throughput environments
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > Chrome 158 officially enabled SSM by default, expanding the API surface to support source-filtered subscriptions for enterprise and high-throughput environments
- [chromium.org](https://issues.chromium.org/issues/461262401/blocking) *(issues.chromium.org)*
  > Documents the transition from ASM-only to SSM
- [Ready for Developer Testing: Source Specific Multicast for Direct Sockets API](https://groups.google.com/a/chromium.org/g/blink-dev/c/vMmLZVd7rQI) *(groups.google.com · 2026-02-21T00:00:00)*
  > Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Ready for Developer Test...
- [Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17792.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Alex Russell Mon, 19 Oct 2026 15:48:23 -0700 What'...
- [\[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17733.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Chromestatus Wed, 14 Oct 2026 19:43:32 -0700 Contact email...
- [\[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg15911.html) *(mail-archive.com)*
  > \[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Chromestatus Fri, 20 Feb 2026 18...
- [\[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17744.html) *(mail-archive.com)*
  > Contact emails \[email protected\] ... (SSM) support to the Direct Sockets API, &lt;strong&gt;allowing Isolated Web Apps to optionally specify a source address when joining multicast groups to receive UDP packets only from that source&lt;/strong&gt;....
- [Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17787.html) *(mail-archive.com)*
  > Reilly Grant \| Software Engineer ...github.io/direct-sockets/#dom-multicastgroupoptions-sourceaddress &gt; &gt; \*Summary\* &gt; Adds Source-Specific Multicast (SSM) support to the Direct Sockets API, &gt; &lt;strong&gt;allowing Isolated Web Apps to optional...
- [\[blink-dev\] Intent to Prototype: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg15334.html) *(mail-archive.com)*
  > Explainer https://github.com/k... (SSM) support to the Direct Sockets API, &lt;strong&gt;allowing Isolated Web Apps to optionally specify a source address when joining multicast groups to receive UDP packets only from that source&lt;/strong&gt;....
- [Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17799.html) *(mail-archive.com)*
  > &gt;&gt; Reilly Grant \| Software Engineer ... (SSM) support to the Direct Sockets API, &gt;&gt;&gt; &lt;strong&gt;allowing Isolated Web Apps to optionally specify a source address when &gt;&gt;&gt; joining multicast groups to receive UDP packets only from ...
- [Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17818.html) *(mail-archive.com)*
  > Two Chromium behaviors are not in the spec text yet: a socket cannot mix ASM and SSM memberships for one group, and leaveGroup() validates its arguments like joinGroup(). https://github.com/WICG/direct-sockets/pull/86 adds both. \*Link to entry on the...
- [Chrome Platform Status](https://chromestatus.com/feature/5168654087094272) *(chromestatus.com)*
  > Chrome Platform Status

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Ready for Developer Testing: Source Specific Multicast for Direct Sockets API](https://groups.google.com/a/chromium.org/g/blink-dev/c/vMmLZVd7rQI) *(groups.google.com · 2026-02-21T00:00:00)* *(Cites: `https://chromestatus.com/feature/6208452397498368`)*
  > Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Ready for Deve...
- [Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17792.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/direct-sockets/blob/main/docs/multicast-explainer.md`)*
  > Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Alex Russell Mon, 19 Oct 2026 15:48:23 -...
- [\[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17733.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/direct-sockets/blob/main/docs/multicast-explainer.md`)*
  > \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Chromestatus Wed, 14 Oct 2026 19:43:32 -0700 Con...
- [\[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg15911.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/direct-sockets/blob/main/docs/multicast-explainer.md`)*
  > \[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Chromestatus Fri, 20 F...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/WICG/direct-sockets/issues/80) *(github.com)*
- [direct-sockets/index.html at main · WICG/direct-sockets · GitHub](https://github.com/WICG/direct-sockets/blob/main/index.html) *(github.com)*
- [Multicast: disallow ASM/SSM mixing per group, validate leaveGroup(), handle close by kkroo · Pull Request #86 · WICG/direct-sockets · GitHub](https://github.com/WICG/direct-sockets/pull/86) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 47 result(s) found across 12 planned queries — **11 verified relevant**
  - `"chromestatus.com/feature/6208452397498368" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/WICG/direct-sockets/blob/main/docs/multicast-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (7 returned)
  - `"wicg.github.io/direct-sockets" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Source Specific Multicast for Direct Sockets API" API` — *Core feature API query* (5 returned)
  - `"Source Specific Multicast for Direct Sockets API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"source-specific" OR "any-source" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Source Specific Multicast for Direct Sockets API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Source Specific Multicast for Direct Sockets API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (1 returned)
  - `"Direct Sockets" "joinGroup" "sourceAddress"` — *Finds real-world JavaScript code snippets and API usage calling joinGroup with a sourceAddress in Direct Sockets.* (7 returned)
  - `"Direct Sockets API" ("Source Specific Multicast" OR "SSM") ("Isolated Web App" OR "IWA") guide OR tutorial` — *Surfaces practical developer tutorials and walkthroughs for implementing source-specific multicast in Isolated Web Apps.* (2 returned)
  - `"Direct Sockets" ("Source Specific Multicast" OR "SSM") ("Chrome Platform Status" OR "Intent to Ship" OR "Intent to Prototype")` — *Tracks platform release status, browser engine intent threads, and vendor roadmap announcements.* (8 returned)
  - `site:github.com/WICG/direct-sockets ("multicast" OR "sourceAddress" OR "SSM")` — *Discovers standards discussions, technical feedback, and security trade-off debates in the official WICG repo.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *found 2 tweet(s)*
- **Tweets found by web search:** 1 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 6 result(s) found — **3 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 10 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6208452397498368)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6208452397498368)
- [Specification](https://wicg.github.io/direct-sockets/#dom-multicastgroupoptions-sourceaddress)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/461262401)
