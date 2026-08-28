# Support targetAddressSpace option for WebSockets

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Add support for passing a targetAddressSpace option in the WebSocket constructor. This allows developers to specify that a WebSocket connection to a public hostname should be treated as going to a "local" or "loopback" destination, matching the existing support on the Fetch API. The main use case is to offer an escape hatch to bypass mixed content restrictions for connecting to local servers that cannot yet support HTTPS (as Local Network Access permissions require a secure context).

Example: A public site that connects to a local server can use a hostname to avoid needing manual configuration of the exact private IP address in use:

`const ws = new WebSocket("ws://local-server.example", { targetAddressSpace: "local"}`

This will flag the WebSocket connection as going to a local address, bypassing mixed content blocking when run in a secure context. The user must grant the site the local network permission for the WebSocket connection to succeed, and the hostname must resolve to a local IP address (otherwise it will be blocked).

This builds on https://chromestatus.com/feature/5080055102439424 which adds an options bag to the WebSocket constructor.

### Motivation

To avoid mixed content blocking for local network WebSockets requests, web developers have relied on having their users manually configure their local network IP addresses, which is awkward at best. Adding support for the targetAddressSpace option in WebSockets aligns it with the Fetch API. This has also been requested by developers (e.g., https://github.com/WICG/local-network-access/issues/16#issuecomment-4459071272).

## Ecosystem Status

- **Momentum:** Emerging (10 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** Support targetAddressSpace option for WebSockets is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Emerging with Chromium-Led standards alignment and neutral developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "I suggest we resolve this as "position: support" one week from now. This is a straightforward addition that allows us to enhance WebSockets more easil..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Supporting options bag in WebSocket constructor](https://github.com/WebKit/standards-positions/issues/708) [open]
- **Mozilla:** [Supporting options bag in WebSocket constructor](https://github.com/mozilla/standards-positions/issues/1444) [open]

## 📰 Ecosystem Blogs & Articles

- [[blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets Chromestatus Wed, 05 Aug 2026 13:26:20 -0700 Con...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/issues/126`)*
  > [blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets Chromestatus Wed, 05 Aug 2026 13:26:20...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 21 result(s) found across 8 planned queries — **1 verified relevant**
  - `"chromestatus.com/feature/4779920606756864" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WICG/local-network-access/issues/126" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"github.com/WICG/local-network-access/pull/125" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"new WebSocket" "targetAddressSpace"` — *Finds real-world JavaScript code snippets and examples utilizing the options bag with targetAddressSpace in the WebSocket constructor.* (2 returned)
  - `"targetAddressSpace" "WebSocket" ("Local Network Access" OR "Private Network Access")` — *Surfaces developer guides, explainers, and technical articles explaining how to bypass mixed content restrictions for local WebSockets.* (3 returned)
  - `site:github.com "targetAddressSpace" "WebSocket" (issue OR PR OR "WICG/local-network-access")` — *Locates spec discussions, feedback, and issue tracking related to targetAddressSpace support in WebSockets on GitHub.* (8 returned)
  - `"targetAddressSpace" "WebSocket" ("Intent to Ship" OR "Chrome Status" OR "Chromium")` — *Tracks browser vendor implementation status, Intent to Ship announcements, and official Chromium release milestones.* (6 returned)
  - `"targetAddressSpace" "WebSocket" "mixed content" (permission OR bypass OR "secure context")` — *Discovers developer troubleshooting posts and articles addressing mixed content blocking and permission flows for local network WebSockets.* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 8 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 128 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 1 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4779920606756864)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4779920606756864)
- [Specification](https://github.com/WICG/local-network-access/pull/125)
- [Chromium Tracking Bug](https://crbug.com/517413738)
