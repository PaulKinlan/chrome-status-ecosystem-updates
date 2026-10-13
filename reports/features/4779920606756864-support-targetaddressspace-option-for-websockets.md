# Support targetAddressSpace option for WebSockets

> **Report Week:** 2026-W42 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Add support for passing a targetAddressSpace option in the WebSocket constructor. This allows developers to specify that a WebSocket connection to a public hostname should be treated as going to a "local" or "loopback" destination, matching the existing support on the Fetch API. The main use case is to offer an escape hatch to bypass mixed content restrictions for connecting to local servers that cannot yet support HTTPS (as Local Network Access permissions require a secure context).  Example: A public site that connects to a local server can use a hostname to avoid needing manual configuration of the exact private IP address in use:  \`const ws = new WebSocket("ws://local-server.example", { targetAddressSpace: "local"}\`  This will flag the WebSocket connection as going to a local address, bypassing mixed content blocking when run in a secure context. The user must grant the site the local network permission for the WebSocket connection to succeed, and the hostname must resolve to a local IP address (otherwise it will be blocked).  This builds on https://chromestatus.com/feature/5080055102439424 which adds an options bag to the WebSocket constructor.

### Motivation

To avoid mixed content blocking for local network WebSockets requests, web developers have relied on having their users manually configure their local network IP addresses, which is awkward at best. Adding support for the targetAddressSpace option in WebSockets aligns it with the Fetch API. This has also been requested by developers (e.g., https://github.com/WICG/local-network-access/issues/16#issuecomment-4459071272).

## Ecosystem Status

- **Momentum:** Emerging (footprint 180 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Shipping enabled by default in Chromium 154, this feature leverages the new WebSocket constructor options dictionary to introduce the targetAddressSpace option, mirroring existing behavior in the Fetch API. It provides a dedicated escape hatch allowing secure HTTPS contexts to establish unencrypted WebSocket connections (ws://) to public hostnames that resolve locally without being blocked by mixed content restrictions. However, cross-engine interoperability remains strictly limited, as the broader Local Network Access specification is currently implemented only within Chromium.

### Recommendations
- Actionable Advice: Web applications communicating with local agents should adopt targetAddressSpace via progressive enhancement, checking for browser support and retaining backward-compatible fallback invocation for engines that still expect positional subprotocol strings. Applications must also ensure public hostnames strictly resolve to private or loopback IP ranges and account for user prompt denials under secure context requirements.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`local-network-access`](https://webstatus.dev/features/local-network-access), shared with 7 other ChromeStatus features*

- Results of the web-features group `local-network-access` on [wpt.fyi](https://wpt.fyi/results?q=feature:local-network-access) (webstatus.dev has no pass rates for it)

## 📰 Ecosystem Blogs & Articles

- [Google Issue Tracker](https://issuetracker.google.com/issues/517413738) *(issuetracker.google.com)*
  > Google Issue Tracker Sign in
- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > Chrome for Developers: Chrome 154 Beta & Release Notes \* \*\*Source:\*\* \*developer.chrome.com\* (Chrome 154 release notes & beta announcements) Chrome for Developers: Chrome 154 Beta & Release Notes \* \*\*Source:\*\* \*developer.chrome.com\* (Chrome 154 releas...
- [Chrome 154 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > Chrome for Developers: Chrome 154 Beta & Release Notes \* \*\*Source:\*\* \*developer.chrome.com\* (Chrome 154 release notes & beta announcements)
- [chrome.com](https://developer.chrome.com/release-notes/154?hl=fr) *(developer.chrome.com)*
  > \* It directly complements the addition of the \*\*WebSocket options bag\*\* (\`WebSocketInit\`), which also formalized passing \`{ protocols: ... }\` as an object parameter
- [Support \`targetAddressSpace\` option in WebSockets \[517413738\] - Chromium](https://issues.chromium.org/issues/517413738) *(issues.chromium.org)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets Chromestatus Wed, 05 Aug 2026 13:26:20 -0700 Con...
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > Tracking bug #502133195 ↗ (opens in new window) \| ChromeStatus.com entry \| Spec ↗ (opens in new window) &lt;strong&gt;Add support for passing a targetAddressSpace option in the WebSocket constructor&lt;/strong&gt;.
- [Microsoft Edge 154 web platform release notes (Sep. 24, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/154) *(learn.microsoft.com · 2026-09-10T00:00:00)*
  > &lt;strong&gt;Use the targetAddressSpace option, when calling the WebSocket constructor, to specify that a WebSocket connection to a public hostname should be treated as going to a &quot;local&quot; or &quot;loopback&quot; destination&lt;/strong&gt;.
- [Ready for Developer Testing: Local network access restrictions for WebSockets](https://groups.google.com/a/chromium.org/g/blink-dev/c/4gx2y5jPGbU) *(groups.google.com · 2025-09-18T00:00:00)*
  > Measurement Use counters: - PrivateNetworkAccessWebSocketConnected counts the number of LNA WebSockets request we see - LocalNetworkAccessWebSocketResourceNotKnownPrivate - counts cases in which a \`targetAddressSpace\` option could have helped bypass ...
- [Local Network Access](https://wicg.github.io/local-network-access) *(wicg.github.io · 2026-08-07T00:00:00)*
  > One minor difference between the Fetch API and the WebSockets API is that WebSockets does not have an equivalent to fetch’s RequestInit, and so there is no place to put in a targetAddressSpace option to bypass mixed content checks for ws:// urls.
- [Google Releases Chrome 154 Stable: Standardizes iframe Auto-Resize and HTTP Connection Prompts — BigGo Finance](https://finance.biggo.com/news/c5f02f74-e6b8-4a67-bd4e-b2c4a7c36f09) *(finance.biggo.com · 2026-09-25T14:39:22)*
  > Additionally, a &quot;targetAddressSpace&quot; option &lt;strong&gt;allows specifying the connection target as either &quot;local&quot; or &quot;loopback&quot; address space&lt;/strong&gt;, useful for connecting to local servers that don&#x27;t support HTTPS.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Support \`targetAddressSpace\` option in WebSockets \[517413738\] - Chromium](https://issues.chromium.org/issues/517413738) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/4779920606756864`)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/pull/125`)*
  > \[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets Chromestatus Wed, 05 Aug 2026 13:26:20...

## 📚 Platform Documentation & Specifications

- [Use case for WebSocket communications · Issue #16 · WICG/local-network-access · GitHub](https://github.com/WICG/local-network-access/issues/16?timeline_page=1) *(github.com)*
- [github.com](https://github.com/WICG/local-network-access/issues) *(github.com)*
- [local-network-access: WebSocket constructor rejects targetAddressSpace and test flag misses IPv6 localhost · Issue #1651 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1651) *(github.com)*
- [fix(local-network-access): update WebSocket LNA guidance and IPv6 localhost flag (#1651) by rowan-m · Pull Request #1727 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/pull/1727) *(github.com)*
- [Use case for WebSocket communications · Issue #16 · WICG/local-network-access](https://github.com/WICG/local-network-access/issues/16) *(github.com)*
- [Add WebSocketInit dictionary as option for second param in constructor by christhompson · Pull Request #76 · whatwg/websockets](https://github.com/whatwg/websockets/pull/76) *(github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/154.md at main · MicrosoftDocs/edge-developer](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/154.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 51 result(s) found across 12 planned queries — **14 verified relevant**
  - `"chromestatus.com/feature/4779920606756864" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/WICG/local-network-access/issues/126" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"github.com/WICG/local-network-access/pull/125" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Support targetAddressSpace option for WebSockets" API` — *Core feature API query* (2 returned)
  - `"Support targetAddressSpace option for WebSockets" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"const ws = new websocket("ws://local-server.example", { targetaddressspace: "local"}" OR "const ws = new websocket("ws://local-server" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Support targetAddressSpace option for WebSockets" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Support targetAddressSpace option for WebSockets" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"new WebSocket" "targetAddressSpace" ("local" OR "loopback")` — *Real-world JavaScript code snippets demonstrating the WebSocket constructor options dictionary with targetAddressSpace.* (8 returned)
  - `"targetAddressSpace" "WebSocket" ("mixed content" OR "Local Network Access")` — *Developer tutorials and guides explaining how to bypass mixed content restrictions when connecting to local WebSocket endpoints.* (8 returned)
  - `"targetAddressSpace" "WebSocket" ("Intent to Ship" OR "ChromeStatus" OR "release notes")` — *Browser engine intent threads, roadmap entries, and release notes regarding WebSocket targetAddressSpace support.* (8 returned)
  - `site:github.com "targetAddressSpace" "WebSocket" ("local-network-access" OR "WICG")` — *Discussions, issues, and developer feedback on GitHub regarding the WICG Local Network Access specification for WebSockets.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 5 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "local-network-access", shared with 7 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "local-network-access": no stable pass rate for Chrome yet*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4779920606756864)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4779920606756864)
- [Specification](https://github.com/WICG/local-network-access/pull/125)
- [Chromium Tracking Bug](https://crbug.com/517413738)
