# Add options bag to WebSocket constructor

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Add support for passing an option bag (WebSocketInit dictionary) as the second argument to the WebSocket constructor. The option bag will initially support a "protocols" option, allowing developers to specify subprotocols (mirroring the existing protocols argument), and also serves as an extension point for future options.

Before, this would be written `const socket = new WebSocket("wss://example.com:8080", "soap")`. After, this could also be written `const socket = new WebSocket("wss://example.com:8080", { protocols: "soap" })`.

See https://github.com/whatwg/websockets/issues/42 and spec PR https://github.com/whatwg/websockets/pull/76 for this change.

### Motivation

There is a demand for extensibility of options on the WebSocket constructor, to mirror the "option bag" approach that the Fetch API has. https://github.com/whatwg/websockets/issues/42 is requested by a number of implementors and users, and Chromium wants this as a means to add a `targetAddressSpace` option matching the one added to Fetch for Local Network Access (https://wicg.github.io/local-network-access/#fetch-api).

## Ecosystem Status

- **Momentum:** High (80 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Adding an options bag (`WebSocketInit` dictionary) to the `WebSocket` constructor aligns WebSocket instantiation ergonomics with modern Web APIs like `fetch()`. In addition to accepting `protocols` as an option object property, it creates an extensible foundation for future network controls such as Local Network Access (`targetAddressSpace`). With WHATWG specification pull request #76 active and Chromium enabling it by default, multi-engine consensus is rapidly solidifying.

### Recommendations
- Actionable Advice: Continue passing subprotocols as strings or string arrays in cross-browser production code until Safari and Firefox ship the new dictionary overload. In Chromium-targeted environments or feature-detected wrappers, start testing the `{ protocols }` dictionary syntax as an extensible base for upcoming networking features.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "I suggest we resolve this as "position: support" one week from now. This is a straightforward addition that allows us to enhance WebSockets more easil..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Supporting options bag in WebSocket constructor](https://github.com/WebKit/standards-positions/issues/708) [open]
- **Mozilla:** [Supporting options bag in WebSocket constructor](https://github.com/mozilla/standards-positions/issues/1444) [open]

## 📰 Ecosystem Blogs & Articles

- [[blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets Chromestatus Wed, 05 Aug 2026 13:26:20 -0700 Con...
- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)*
  > Intent to Prototype: Add options bag to WebSocket constructor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Add options bag to ...
- [javascript - HTTP headers in Websockets client API](https://stackoverflow.com/questions/4361173/http-headers-in-websockets-client-api) *(stackoverflow.com)*
  > https://<strong>github.com/whatwg/websockets/issues/42</strong> · https://github.com/nodejs/undici/blob/main/docs/docs/api/WebSocket.md · Share · Share a link to this answer · Copy linkCC BY-SA 4.0 · Short permalink to this answer · Improve this answ...
- [Private Network Access](https://wicg.github.io/private-network-access) *(wicg.github.io · 2024-09-26T00:00:00)*
  > Private Network Access Private Network Access Draft Community Group Report , 26 September 2024 This version: https://wicg.github.io/private-network-access/ Issue Tracking: GitHub Inline In Spec Editor: Titouan Rigoudy ( Google ) Former Editor: Mike W...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > [blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets Chromestatus Wed, 05 Aug 2026 13:26:20...
- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > Intent to Prototype: Add options bag to WebSocket constructor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Add optio...
- [javascript - HTTP headers in Websockets client API](https://stackoverflow.com/questions/4361173/http-headers-in-websockets-client-api) *(stackoverflow.com)* *(Cites: `https://github.com/whatwg/websockets/issues/42`)*
  > https://<strong>github.com/whatwg/websockets/issues/42</strong> · https://github.com/nodejs/undici/blob/main/docs/docs/api/WebSocket.md · Share · Share a link to this answer · Copy linkCC BY-SA 4.0 · Short permalink to this answer · Improve...

## 📚 Platform Documentation & Specifications

- [local-network-access/explainer.md at main · WICG/local-network-access](https://github.com/WICG/local-network-access/blob/main/explainer.md) *(github.com)*
- [WebSocket: WebSocket() constructor](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/WebSocket) *(developer.mozilla.org)*
- [WebSocketStream: WebSocketStream() constructor](https://developer.mozilla.org/en-US/docs/Web/API/WebSocketStream/WebSocketStream) *(developer.mozilla.org)*
- [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 5 result(s) found across 7 planned queries — **5 verified relevant**
  - `"chromestatus.com/feature/5080055102439424" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/whatwg/websockets/issues/42" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"github.com/whatwg/websockets/pull/76" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"new WebSocket" ("WebSocketInit" OR "options bag" OR "options dictionary") (tutorial OR guide OR "modern javascript")` — *Finds developer guides, tutorials, and blog posts explaining the new options bag syntax for the WebSocket constructor.* (0 returned)
  - `"new WebSocket" "{ protocols:" OR "WebSocketInit"` — *Surfaces practical JavaScript code snippets, type definitions, and WebIDL specs demonstrating the dictionary-based constructor signature.* (1 returned)
  - `("WebSocket constructor" OR "new WebSocket") ("WebSocketInit" OR "options") ("Intent to Ship" OR "Chrome Platform Status" OR "Firefox" OR "WebKit")` — *Identifies browser vendor implementation status, Intent to Ship announcements, and cross-browser support tracking.* (1 returned)
  - `"WebSocket" ("WebSocketInit" OR "targetAddressSpace") ("Local Network Access" OR "Private Network Access" OR "WHATWG")` — *Uncovers standards discussions, security/extensibility motivations, and community feedback regarding Local Network Access integration with WebSockets.* (3 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 8 result(s) found — **4 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 2 document(s) analyzed
- **Standards Discussion Comments:** 1 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5080055102439424)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5080055102439424)
- [Specification](https://github.com/whatwg/websockets/pull/76)
- [Chromium Tracking Bug](https://crbug.com/542670554)
