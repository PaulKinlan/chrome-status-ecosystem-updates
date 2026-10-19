# Add options bag to WebSocket constructor

> **Report Week:** 2026-W43 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Add support for passing an option bag (WebSocketInit dictionary) as the second argument to the WebSocket constructor. The option bag will initially support a "protocols" option, allowing developers to specify subprotocols (mirroring the existing protocols argument), and also serves as an extension point for future options.  Before, this would be written \`const socket = new WebSocket("wss://example.com:8080", "soap")\`. After, this could also be written \`const socket = new WebSocket("wss://example.com:8080", { protocols: "soap" })\`.  See https://github.com/whatwg/websockets/issues/42 and spec PR https://github.com/whatwg/websockets/pull/76 for this change.

### Motivation

There is a demand for extensibility of options on the WebSocket constructor, to mirror the "option bag" approach that the Fetch API has. https://github.com/whatwg/websockets/issues/42 is requested by a number of implementors and users, and Chromium wants this as a means to add a \`targetAddressSpace\` option matching the one added to Fetch for Local Network Access (https://wicg.github.io/local-network-access/#fetch-api).

## Ecosystem Status

- **Momentum:** Emerging (footprint 140 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The addition of an options bag (\`WebSocketInit\`) to the WebSocket constructor modernizes the API to mirror Fetch-style configuration patterns and enables future capabilities like Local Network Access control. Having recently shipped in Chrome 154, the feature standardizes an extension point while maintaining backward compatibility with the legacy protocols parameter. Ecosystem reception is favorable given its utility for upcoming network security specifications.

### Recommendations
- Actionable Advice: Development teams can begin utilizing the object syntax ({ protocols: '...' }) in modern application code where Chrome 154+ is targeted, but should continue supporting legacy string or array arguments for cross-browser safety until the option bag lands more broadly across other engines.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "I suggest we resolve this as "position: support" one week from now. This is a straightforward addition that allows us to enhance WebSockets more easil..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Supporting options bag in WebSocket constructor](https://github.com/WebKit/standards-positions/issues/708) [closed]
- **Mozilla:** [Supporting options bag in WebSocket constructor](https://github.com/mozilla/standards-positions/issues/1444) [open]

## Web-features Group

*group-level data: web-features [`websockets`](https://webstatus.dev/features/websockets), shared with 5 other ChromeStatus features*

- Share of tests passing in the web-features group `websockets` on [wpt.fyi](https://wpt.fyi/results?q=feature:websockets) (via webstatus.dev) — stable: Chrome 94.6% · Edge 94.6% · Firefox 96.6% · Safari 95.5%; experimental: Chrome 95.7% · Edge 95.7% · Firefox 96.6% · Safari 95.5%

## 📰 Ecosystem Blogs & Articles

- [Add option bag to WebSocket constructor \[542670554\] - Chromium](https://issues.chromium.org/issues/542670554) *(issues.chromium.org)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor](http://www.mail-archive.com/blink-dev@chromium.org/msg17124.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor Chromestatus Wed, 05 Aug 2026 10:57:09 -0700 Contact emails \[ema...
- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)*
  > Intent to Prototype: Add options bag to WebSocket constructor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Add options bag to ...
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > The option bag will initially support a &quot;protocols&quot; option, &lt;strong&gt;allowing developers to specify subprotocols (mirroring the existing protocols argument), and also serves as an extension point for future options&lt;/strong&gt;.
- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com · 2026-09-22T00:00:00)*
  > &lt;strong&gt;Adds support for passing an options dictionary (WebSocketInit) as the second argument to the WebSocket constructor&lt;/strong&gt;. The options dictionary supports a protocols option, letting you specify subprotocols (mirroring the existing protocol...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Add option bag to WebSocket constructor \[542670554\] - Chromium](https://issues.chromium.org/issues/542670554) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor](http://www.mail-archive.com/blink-dev@chromium.org/msg17124.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > \[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor Chromestatus Wed, 05 Aug 2026 10:57:09 -0700 Contact e...
- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > Intent to Prototype: Add options bag to WebSocket constructor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Add optio...

## 📚 Platform Documentation & Specifications

- [Supporting options bag in WebSocket constructor · Issue #1444 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1444) *(github.com)*
- [Use case for WebSocket communications · Issue #16 · WICG/local-network-access](https://github.com/WICG/local-network-access/issues/16) *(github.com)*
- [local-network-access: WebSocket constructor rejects targetAddressSpace and test flag misses IPv6 localhost · Issue #1651 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1651) *(github.com)*
- [Add targetAddressSpace integration in WebSockets by christhompson · Pull Request #125 · WICG/local-network-access](https://github.com/WICG/local-network-access/pull/125) *(github.com)*
- [fix(local-network-access): update WebSocket LNA guidance and IPv6 localhost flag (#1651) by rowan-m · Pull Request #1727 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/pull/1727) *(github.com)*
- [The WebSocketStream Interface by ricea · Pull Request #48 · whatwg/websockets](https://github.com/whatwg/websockets/pull/48) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 54 result(s) found across 12 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5080055102439424" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (5 returned)
  - `"github.com/whatwg/websockets/issues/42" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"github.com/whatwg/websockets/pull/76" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"Add options bag to WebSocket constructor" API` — *Core feature API query* (3 returned)
  - `"Add options bag to WebSocket constructor" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"const socket = new websocket("wss://example.com:8080", "soap")" OR "const socket = new websocket("wss://example" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Add options bag to WebSocket constructor" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Add options bag to WebSocket constructor" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"WebSocketInit" OR "new WebSocket" options bag protocols` — *Searches for WebIDL dictionary definitions and JavaScript code examples using the new WebSocket options bag.* (8 returned)
  - `"WebSocket" constructor options bag tutorial OR guide` — *Finds developer guides and blog posts explaining how to use options bag in WebSocket constructors.* (8 returned)
  - `"targetAddressSpace" WebSocket OR WebSocketInit "Local Network Access"` — *Tracks ecosystem adoption and browser support for WebSocket constructor options such as Local Network Access.* (8 returned)
  - `site:github.com/whatwg/websockets "42" OR "76" "WebSocketInit"` — *Retrieves standard discussions, issue comments, and PR reviews surrounding the WebSocket constructor options feature.* (4 returned)
- **Google Search Grounding (gemini-3.8-flash):** 2 result(s) found — **1 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 2 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "websockets", shared with 5 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "websockets": Chrome 94.6% passing (stable)*

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
