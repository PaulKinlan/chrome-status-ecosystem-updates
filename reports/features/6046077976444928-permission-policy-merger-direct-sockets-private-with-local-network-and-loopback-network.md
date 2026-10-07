# Permission Policy Merger: "direct-sockets-private" with "local-network" and "loopback-network"

> **Report Week:** 2026-W39 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Isolated Web App manifests now require specific "local-network" and/or "loopback-network" permission policies to enable Direct Sockets connections to local or loopback network addresses, respectively. This change replaces the existing "direct-sockets-private" permission policy. This provides developers with more granular control over network access and enhances application security by making network requirements more transparent within the manifest.

### Motivation

This change introduces essential user consent before granting potentially sensitive network access to IWAs, aligning with the principle of least privilege. The granular manifest policies ensure that apps only request the specific network access they need.

## Ecosystem Status

- **Momentum:** Quiet (0 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Chrome 151 replaces the monolithic 'direct-sockets-private' permission policy with granular 'local-network' and 'loopback-network' policies for Direct Sockets within Isolated Web Apps (IWAs). This refinement enforces the principle of least privilege by separating access to loopback interfaces (localhost) from local intranet networks, aligning with broader Private Network Access (PNA) security controls. Because Direct Sockets and IWAs are currently restricted to Chromium's managed app environment, the feature remains an engine-specific capability rather than a cross-browser web standard.

### Recommendations
- Actionable Advice: Teams authoring Isolated Web Apps must update their manifest permission policies from 'direct-sockets-private' to 'local-network' and/or 'loopback-network' based on specific connectivity needs to prevent runtime 'InvalidAccessError' connection failures. Developers targeting the general open web should continue using WebSockets, WebTransport, or WebRTC, as Direct Sockets is not an interoperable standard.
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 10 result(s) found across 7 planned queries — **0 verified relevant**
  - `"chromestatus.com/feature/6046077976444928" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"wicg.github.io/direct-sockets" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Permission Policy Merger: "direct-sockets-private" with "local-network" and "loopback-network"" API` — *Core feature API query* (0 returned)
  - `"Permission Policy Merger: "direct-sockets-private" with "local-network" and "loopback-network"" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (0 returned)
  - `"direct-sockets-private" OR "local-network" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Permission Policy Merger: "direct-sockets-private" with "local-network" and "loopback-network"" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (0 returned)
  - `"Permission Policy Merger: "direct-sockets-private" with "local-network" and "loopback-network"" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 3 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6046077976444928)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6046077976444928)
- [Specification](https://wicg.github.io/direct-sockets/#permissions-policy-pna)
