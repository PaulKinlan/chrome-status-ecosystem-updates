# Source Specific Multicast for Direct Sockets API

> **Report Week:** 2026-W44 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

Adds Source-Specific Multicast (SSM) support to the Direct Sockets API, allowing Isolated Web Apps to optionally specify a source address when joining multicast groups to receive UDP packets only from that source. Without a source address, joinGroup() uses Any-Source Multicast (ASM), which receives packets from any source sending to the group. SSM is essential to using multicast outside of private networks, simplifying packet routing, and filtering traffic at the network level by source address, which mitigates spoofing and denial-of-service attacks.

### Motivation

RFC 8815 deprecates ASM for inter-domain use due to security vulnerabilities and operational complexity.  Without SSM support, developers building multicast applications in Isolated Web Apps face several problems:  Limited deployment scenarios: Applications are restricted to controlled private networks where all sources are trusted, preventing use cases like internet-wide content distribution or cross-organization IoT systems.  Application-layer filtering overhead: Applications must receive and process all packets sent to a multicast group before validating the source, wasting CPU cycles and bandwidth on potentially malicious traffic.  SSM is the IETF-recommended model for multicast across domains (RFC 4607, RFC 8815) and is supported by many enterprise and ISP networks. Adding SSM support enables more secure multicast communication beyond private network boundaries.

## Ecosystem Status

- **Momentum:** Emerging (footprint 145 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Shipping enabled by default in Chrome 158 for desktop Isolated Web Apps (IWAs), Source-Specific Multicast (SSM) brings RFC 4607 and RFC 8815 compliance to the Direct Sockets API by allowing source-filtered UDP multicast group joins via an optional source address. The capability is targeted at high-throughput live streaming, decentralized content delivery, and enterprise IoT scenarios without requiring application-layer packet filtering. However, because the Direct Sockets parent architecture remains exclusively confined to Chromium-managed isolated environments, cross-browser consensus is non-existent.

### Recommendations
- Actionable Advice: Web teams building niche enterprise apps, kiosk hardware, or IWA-based streaming clients should feature-detect SSM support by checking whether joined multicast groups return structured membership objects rather than strings. For general web or cross-browser applications, avoid relying on Direct Sockets SSM and continue using server-relayed WebTransport or WebRTC architectures.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://cr-status.appspot.com/feature/6208452397498368?gate=5109346174369792) *(cr-status.appspot.com)*
  > \*\*Source-Specific Multicast (SSM) for Direct Sockets API\*\* extends the networking capabilities of \*\*Isolated Web Apps (IWAs)\*\* This addresses \*\*RFC 8815\*\* (which deprecated ASM for inter-domain use due to operational complexity and security risks) an...
- [google.com](https://issuetracker.google.com/issues/573660067/resources) *(issuetracker.google.com)*
  > \*\*Source-Specific Multicast (SSM) for Direct Sockets API\*\* extends the networking capabilities of \*\*Isolated Web Apps (IWAs)\*\* With SSM, developers can provide an optional \`sourceAddress\` parameter
- [appspot.com](https://cr-status.appspot.com/feature/6208452397498368?gate=6235246081212416) *(cr-status.appspot.com)*
  > \*\*Entry:\*\* \*Source Specific Multicast for Direct Sockets API\* \*\*Coverage:\*\* Chromium's platform status outlines the timeline, feature dependencies, and motivation
- [google.com](https://issuetracker.google.com/issues/573660067) *(issuetracker.google.com)*
  > Inspecting \`joinedGroups\`, which returns \`MulticastMembership\` objects (\`{ groupAddress, sourceAddress }\`) for SSM groups while retaining strings for ASM groups \*\*Developer Feedback:\*\* Contributions and discussions (notably from engineers at Blockcas...
- [Multicast in the Browser Direct Sockets Enable Isolated Web Apps on TreeDN](https://datatracker.ietf.org/meeting/124/materials/slides-124-mboned-multicast-in-the-browser-direct-sockets-enable-isolated-web-apps-on-treedn-00) *(datatracker.ietf.org)*
  > \*\*Sources:\*\* IETF presentations (\*Multicast in the Browser\*, \*Media over QUIC\*) and open web architecture proposals Demonstrations at IETF forums showcased how SSM in IWAs facilitates decentralized live video feeds and Automatic Multicast Tunneling (...
- [Ready for Developer Testing: Source Specific Multicast for Direct Sockets API](https://groups.google.com/a/chromium.org/g/blink-dev/c/vMmLZVd7rQI) *(groups.google.com · 2026-02-21T00:00:00)*
  > Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Ready for Developer Test...
- [\[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg15911.html) *(mail-archive.com)*
  > \[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Chromestatus Fri, 20 Feb 2026 18...
- [Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17818.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Mike Taylor Wed, 21 Oct 2026 08:24:46 -0700 LGTM3 ...
- [\[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17733.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Chromestatus Wed, 14 Oct 2026 19:43:32 -0700 Contact email...
- [\[blink-dev\] Intent to Prototype: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg15334.html) *(mail-archive.com)*
  > Explainer https://github.com/k... (SSM) support to the Direct Sockets API, &lt;strong&gt;allowing Isolated Web Apps to optionally specify a source address when joining multicast groups to receive UDP packets only from that source&lt;/strong&gt;....
- [\[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17744.html) *(mail-archive.com)*
  > Contact emails \[email protected\] ... (SSM) support to the Direct Sockets API, &lt;strong&gt;allowing Isolated Web Apps to optionally specify a source address when joining multicast groups to receive UDP packets only from that source&lt;/strong&gt;....
- [Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17787.html) *(mail-archive.com)*
  > &gt; &gt; \*Availability expectation\* &gt; Available only to Isolated Web Apps, on platforms where IWAs are supported &gt; (currently ChromeOS): IWAs installed by an admin or in developer mode, and &gt; user-installed IWAs that Chrome&#x27;s IWA allow...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Ready for Developer Testing: Source Specific Multicast for Direct Sockets API](https://groups.google.com/a/chromium.org/g/blink-dev/c/vMmLZVd7rQI) *(groups.google.com · 2026-02-21T00:00:00)* *(Cites: `https://chromestatus.com/feature/6208452397498368`)*
  > Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Ready for Deve...
- [\[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg15911.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/direct-sockets/blob/main/docs/multicast-explainer.md`)*
  > \[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Chromestatus Fri, 20 F...
- [Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17818.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/direct-sockets/blob/main/docs/multicast-explainer.md`)*
  > Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Mike Taylor Wed, 21 Oct 2026 08:24:46 -0...
- [\[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17733.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/direct-sockets/blob/main/docs/multicast-explainer.md`)*
  > \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Chromestatus Wed, 14 Oct 2026 19:43:32 -0700 Con...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/WICG/direct-sockets/issues/80) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 48 result(s) found across 12 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/6208452397498368" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/WICG/direct-sockets/blob/main/docs/multicast-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (7 returned)
  - `"wicg.github.io/direct-sockets" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Source Specific Multicast for Direct Sockets API" API` — *Core feature API query* (5 returned)
  - `"Source Specific Multicast for Direct Sockets API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"source-specific" OR "any-source" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Source Specific Multicast for Direct Sockets API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (5 returned)
  - `"Source Specific Multicast for Direct Sockets API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (3 returned)
  - `"Direct Sockets" "joinGroup" "sourceAddress" (multicast OR UDP)` — *Finds code samples, WebIDL declarations, and JavaScript implementations using joinGroup with sourceAddress in Direct Sockets.* (8 returned)
  - `"Direct Sockets" ("Source Specific Multicast" OR "SSM") "Isolated Web Apps" (guide OR tutorial)` — *Searches for developer tutorials and walkthroughs implementing secure multicast in Isolated Web Apps.* (0 returned)
  - `"Direct Sockets API" ("Source-Specific Multicast" OR "SSM") ("Intent to Ship" OR "Chrome status")` — *Discovers browser vendor roadmap announcements, Blink intent threads, and adoption status updates.* (8 returned)
  - `site:github.com/WICG/direct-sockets ("sourceAddress" OR "SSM" OR "multicast")` — *Tracks standards consensus, architecture discussions, and developer feedback in the WICG Direct Sockets repository.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *found 2 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
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
