# Permission Policy Merger: "direct-sockets-private" with "local-network" and "loopback-network"

> **Report Week:** 2026-W37 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Isolated Web App manifests now require specific "local-network" and/or "loopback-network" permission policies to enable Direct Sockets connections to local or loopback network addresses, respectively. This change replaces the existing "direct-sockets-private" permission policy. This provides developers with more granular control over network access and enhances application security by making network requirements more transparent within the manifest.

### Motivation

This change introduces essential user consent before granting potentially sensitive network access to IWAs, aligning with the principle of least privilege. The granular manifest policies ensure that apps only request the specific network access they need.

## Ecosystem Status

- **Momentum:** Moderate (70 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** Chrome 151 replaces the legacy 'direct-sockets-private' permission policy with granular 'local-network' and 'loopback-network' policies for Isolated Web Apps (IWAs) using the Direct Sockets API. This aligns Direct Sockets permission scoping with the broader Private Network Access (PNA) model under the principle of least privilege. The feature remains exclusive to Chromium/ChromeOS IWA contexts without adoption across other browser engines.

### Recommendations
- Actionable Advice: IWA developers targeting Chrome 151+ should immediately audit their web app manifests and replace 'direct-sockets-private' with the specific 'local-network' or 'loopback-network' permission policies required for their socket connections.
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [digitalapplied.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGbROnjSYC2g9-PYxxuH-dI4hgwVfLCj37LMnIxzvM1NxLqPu9QUJhcIV1lAL1AjRogtoq099CkY9jvbC22uKmCWJONbBaxR_ip8onCz0ld1Pf63q6I62b8gthtU-onhCGAamd1GEiLYn9vkku2ECItqSTcg434yt5XZMSCYs58910=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature Change  The web platform feature **"Permission Policy Merger: `direct-sockets-private` with `local-network` and `loopback-network`"** modernizes and hardens the permission model for **Isolated Web Apps (IWAs)** that interac
- [gigazine.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFCLIl6tkzBo78QpJYt5CixwJOMcKJM1Xdt_iH6hP73D0pSon43GvZxnJN3RZDi0EyZwjuHcg6K-RskAQrKMszpvV3YIWhJ8FEs7eu7rWL6nUw7XthOc5wR1KVGSKjfWxWh4BnYCUi6ojpsdo_INvtfZvk=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature Change  The web platform feature **"Permission Policy Merger: `direct-sockets-private` with `local-network` and `loopback-network`"** modernizes and hardens the permission model for **Isolated Web Apps (IWAs)** that interac
- [pub.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEzQ1EhNNdhXCVNnS4ysA_kWGzF2P8n8tW8B9m0e7gBxF95pu-tzKPnw_9lIRXS6L8hdMfa24GNhdYVQBqjpDAhZAvNwyjiM7FNJPz-oBeZfkFZzDVzzXIowlJgagwu0i4-bDIR8ApAIiPJJ0t7PFRsOeCYLAjsIsephNigVvEzExlKaJv5ddxIn4kBXZ5cc04=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature Change  The web platform feature **"Permission Policy Merger: `direct-sockets-private` with `local-network` and `loopback-network`"** modernizes and hardens the permission model for **Isolated Web Apps (IWAs)** that interac
- [chromeenterprise.google](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHImoctdAbIJYpZtjKbGqhKEmGvYpuHin2Hf4ptN2_yOvxskNrHerG0_EWDdsbkoUcWr46pFv_6pBwgtnAufi3hjXBm15wvfGTTtD3VwwevV7xxoA91BnOmilalGiiwq6CyJ90DJBp62s1WyTcAkb-w81W2GndL3dy4b4TDTFAjDfc=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature Change  The web platform feature **"Permission Policy Merger: `direct-sockets-private` with `local-network` and `loopback-network`"** modernizes and hardens the permission model for **Isolated Web Apps (IWAs)** that interac
- [Chrome 151 | Release notes | Chrome for Developers](https://developer.chrome.com/release-notes/151) *(developer.chrome.com · 2026-07-28T00:00:00)*
  > <strong>Isolated Web App manifests now require these specific policies to enable Direct Sockets connections to local or loopback network addresses</strong>, providing developers with more precise control over network access and making network require...
- [[blink-dev] Web-Facing Change PSA: Permission policies for Direct Sockets API in Isolated Web Apps](http://www.mail-archive.com/blink-dev@chromium.org/msg16732.html) *(mail-archive.com)*
  > Direct Sockets are only available on Isolated Web Apps which are only available on ChromeOS. *Web developers: *<strong>Update &quot;direct-sockets-private&quot; permission policy with the relevant &quot;local-network&quot; and &quot;loopback-network&...
- [Re: [blink-dev] Web-Facing Change PSA: Permission policies for Direct Sockets API in Isolated Web Apps](http://www.mail-archive.com/blink-dev@chromium.org/msg16753.html) *(mail-archive.com)*
  > &gt; &gt; *Web developers: *Update &quot;direct-sockets-private&quot; permission policy with &gt; the relevant &quot;local-network&quot; and &quot;loopback-network&quot; permission policies &gt; in Isolated Web Apps Manifests. &gt; *Debuggability* &g...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 7 result(s) found across 6 planned queries — **3 verified relevant**
  - `"chromestatus.com/feature/6046077976444928" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"wicg.github.io/direct-sockets" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Isolated Web App" "direct-sockets" ("local-network" OR "loopback-network") manifest` — *Finds developer guides and tutorials detailing how to configure Isolated Web App manifests with the new local and loopback permissions policies for Direct Sockets.* (3 returned)
  - `manifest.json "permissions_policy" ("local-network" OR "loopback-network") "direct-sockets"` — *Locates code snippets, manifest schema implementations, and examples showing the exact permissions policy syntax required for Direct Sockets access.* (0 returned)
  - `"direct-sockets-private" ("local-network" OR "loopback-network") ("intent to" OR chromestatus OR blink-dev)` — *Surfaces Chromium intent-to-ship/prototype threads, Chromestatus updates, and platform roadmap announcements for the permission policy merger.* (3 returned)
  - `site:github.com/WICG/direct-sockets ("local-network" OR "loopback-network") permission policy` — *Discovers WICG spec discussions, PR reviews, and developer issues regarding Direct Sockets private network access and permission policy design.* (0 returned)
- **Google Search Grounding (gemini-3.7-flash):** 12 result(s) found — **4 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 3 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6046077976444928)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6046077976444928)
- [Specification](https://wicg.github.io/direct-sockets/#permissions-policy-pna)
