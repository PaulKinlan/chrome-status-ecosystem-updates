# Support targetAddressSpace option for WebSockets

> **Report Week:** 2026-W43 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Add support for passing a targetAddressSpace option in the WebSocket constructor. This allows developers to specify that a WebSocket connection to a public hostname should be treated as going to a "local" or "loopback" destination, matching the existing support on the Fetch API. The main use case is to offer an escape hatch to bypass mixed content restrictions for connecting to local servers that cannot yet support HTTPS (as Local Network Access permissions require a secure context).  Example: A public site that connects to a local server can use a hostname to avoid needing manual configuration of the exact private IP address in use:  \`const ws = new WebSocket("ws://local-server.example", { targetAddressSpace: "local"}\`  This will flag the WebSocket connection as going to a local address, bypassing mixed content blocking when run in a secure context. The user must grant the site the local network permission for the WebSocket connection to succeed, and the hostname must resolve to a local IP address (otherwise it will be blocked).  This builds on https://chromestatus.com/feature/5080055102439424 which adds an options bag to the WebSocket constructor.

### Motivation

To avoid mixed content blocking for local network WebSockets requests, web developers have relied on having their users manually configure their local network IP addresses, which is awkward at best. Adding support for the targetAddressSpace option in WebSockets aligns it with the Fetch API. This has also been requested by developers (e.g., https://github.com/WICG/local-network-access/issues/16#issuecomment-4459071272).

## Ecosystem Status

- **Momentum:** Emerging (footprint 150 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Shipping enabled by default in Chromium 154, this feature introduces the \`targetAddressSpace\` parameter to the newly added WebSocket constructor options dictionary, matching existing Fetch API capabilities under the Local Network Access (LNA) specification. It provides an escape hatch that bypasses mixed-content blocking when a secure HTTPS application connects to local hardware or daemons over a public hostname, provided users grant LNA permission and DNS resolves to a local or loopback address. However, ecosystem adoption is currently fragmented because only Chromium-based browsers support this constructor extension.

### Recommendations
- Actionable Advice: Teams targeting local hardware should adopt \`targetAddressSpace: 'local'\` as a progressive enhancement for Chromium users while retaining fallback connection flows—such as \`.local\` mDNS domains or explicit loopback IP literals—for Firefox and Safari. Web apps must also implement robust UI handling for cases where the user denies the Local Network Access permission prompt or DNS resolution fails to map to a local IP.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`local-network-access`](https://webstatus.dev/features/local-network-access), shared with 7 other ChromeStatus features*

- Results of the web-features group `local-network-access` on [wpt.fyi](https://wpt.fyi/results?q=feature:local-network-access) (webstatus.dev has no pass rates for it)

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > \*\*Why it matters:\*\* Under the \*\*Local Network Access (LNA)\*\* specification (formerly Private Network Access / PNA), requests to local devices must originate from a secure context (HTTPS) \*\*Chrome 154 Beta & Stable Release Notes:\*\* Chrome officially a...
- [Microsoft Edge 154 web platform release notes (Sep. 24, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/154) *(learn.microsoft.com)*
  > \*\*Edge 154 Web Platform Updates:\*\* Microsoft highlighted the simultaneous arrival of the WebSocket options dictionary and the \`targetAddressSpace\` option across Chromium-based browsers
- [google.com](https://issuetracker.google.com/issues/545695277) *(issuetracker.google.com)*
  > Follow-up documentation tickets were opened to update the \`WebSocket()\` constructor reference to account for the new dictionary signature and address-space hints
- [googleusercontent.com](https://doc-2gh0-0gig-issuetracker.googleusercontent.com/issues/545695277) *(doc-2gh0-0gig-issuetracker.googleusercontent.com)*
  > Follow-up documentation tickets were opened to update the \`WebSocket()\` constructor reference to account for the new dictionary signature and address-space hints
- [codercops.com](https://blog.codercops.com/blog/chrome-154-websocket-options-iterator-includes-https-prompts-2026) *(blog.codercops.com)*
  > \*\*CoderCops ("Chrome 154 for Developers: What Changed and What to Test"):\*\* Outlined practical migration advice, explaining how developers using WebSockets to talk to local background utilities or IoT hardware can stop relying on unsafe workarounds o...
- [polypane.app](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > \*\*Polypane ("Experimental Chromium Web Platform Features"):\*\* Highlighted the feature tracking under \`LocalNetworkAccessWebSocketsTargetAddressSpace\`, walking through how developer testing environments can evaluate LNA prompts ahead of time
- [Support \`targetAddressSpace\` option in WebSockets \[517413738\] - Chromium](https://issues.chromium.org/issues/517413738) *(issues.chromium.org)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets Chromestatus Wed, 05 Aug 2026 13:26:20 -0700 Con...
- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)*
  > Motivation There is a demand for extensibility of options on the WebSocket constructor, to mirror the &quot;option bag&quot; approach that the Fetch API has. https://github.com/whatwg/websockets/issues/42 is requested by a number of implementors and ...
- [Add option bag to WebSocket constructor \[542670554\] - Chromium](https://issues.chromium.org/issues/542670554) *(issues.chromium.org)*
  > This feature is guarded by the new WebSocketOptionBag runtime-enabled feature flag. When disabled, attempting to use the option bag constructor overload throws a TypeError. Web platform tests have been added to verify the behavior. ChromeStatus entry...
- [\[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor](http://www.mail-archive.com/blink-dev@chromium.org/msg17124.html) *(mail-archive.com)*
  > Blink component Blink&gt;Network&gt;WebSockets Web Feature ID websockets Motivation There is a demand for extensibility of options on the WebSocket constructor, to mirror the &quot;option bag&quot; approach that the Fetch API has. https://github.com/...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Support \`targetAddressSpace\` option in WebSockets \[517413738\] - Chromium](https://issues.chromium.org/issues/517413738) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/4779920606756864`)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4779920606756864`)*
  > \[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets Chromestatus Wed, 05 Aug 2026 13:26:20...

## 📚 Platform Documentation & Specifications

- [Use case for WebSocket communications · Issue #16 · WICG/local-network-access](https://github.com/WICG/local-network-access/issues/16) *(github.com)*
- [local-network-access: WebSocket constructor rejects targetAddressSpace and test flag misses IPv6 localhost · Issue #1651 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1651) *(github.com)*
- [Supporting options bag in WebSocket constructor · Issue #708 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/708) *(github.com)*
- [Supporting options bag in WebSocket constructor · Issue #1444 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1444) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 49 result(s) found across 12 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/4779920606756864" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/WICG/local-network-access/issues/126" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"github.com/WICG/local-network-access/pull/125" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Support targetAddressSpace option for WebSockets" API` — *Core feature API query* (2 returned)
  - `"Support targetAddressSpace option for WebSockets" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"const ws = new websocket("ws://local-server.example", { targetaddressspace: "local"}" OR "const ws = new websocket("ws://local-server" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Support targetAddressSpace option for WebSockets" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Support targetAddressSpace option for WebSockets" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `new WebSocket "targetAddressSpace" ("local" OR "loopback" OR "private")` — *Finds code samples and WebIDL usage demonstrating how to instantiate WebSockets with the targetAddressSpace option bag.* (8 returned)
  - `"targetAddressSpace" WebSocket ("Local Network Access" OR "mixed content" OR "private network")` — *Discovers guides and technical explainers addressing mixed content bypasses for local WebSocket connections.* (8 returned)
  - `"targetAddressSpace" WebSocket ("Intent to Ship" OR "Intent to Prototype" OR "Chromium")` — *Tracks browser vendor release notes, Blink intent discussions, and Chrome rollout status.* (8 returned)
  - `site:github.com/WICG/local-network-access "targetAddressSpace" WebSocket` — *Surfaces community debates, issue tracking, and spec deliberations in the WICG Local Network Access repository.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 16 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "local-network-access", shared with 7 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "local-network-access": no stable pass rate for Chrome yet*
- **Sources cited by the AI synthesis:** 6 result(s) found — **4 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 12 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4779920606756864)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4779920606756864)
- [Specification](https://github.com/WICG/local-network-access/pull/125)
- [Chromium Tracking Bug](https://crbug.com/517413738)
