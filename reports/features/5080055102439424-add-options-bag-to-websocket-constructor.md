# Add options bag to WebSocket constructor

> **Report Week:** 2026-W45 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Add support for passing an option bag (WebSocketInit dictionary) as the second argument to the WebSocket constructor. The option bag will initially support a "protocols" option, allowing developers to specify subprotocols (mirroring the existing protocols argument), and also serves as an extension point for future options.  Before, this would be written \`const socket = new WebSocket("wss://example.com:8080", "soap")\`. After, this could also be written \`const socket = new WebSocket("wss://example.com:8080", { protocols: "soap" })\`.  See https://github.com/whatwg/websockets/issues/42 and spec PR https://github.com/whatwg/websockets/pull/76 for this change.

### Motivation

There is a demand for extensibility of options on the WebSocket constructor, to mirror the "option bag" approach that the Fetch API has. https://github.com/whatwg/websockets/issues/42 is requested by a number of implementors and users, and Chromium wants this as a means to add a \`targetAddressSpace\` option matching the one added to Fetch for Local Network Access (https://wicg.github.io/local-network-access/#fetch-api).

## Ecosystem Status

- **Momentum:** Moderate (+60 points since 2026-10-12; footprint 180 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The addition of an options bag (WebSocketInit) to the WebSocket constructor modernizes the legacy API to mirror Fetch-like ergonomics and establishes an extensible foundation for modern networking features like Local Network Access (targetAddressSpace). Chromium has enabled the feature by default starting in Chrome 154, tracking WHATWG specification updates that maintain backwards compatibility with existing subprotocol strings. Cross-engine consensus is broadly favorable, with WebKit formally backing the specification change and Mozilla actively reviewing the proposal.

### Recommendations
- Actionable Advice: For general production code, continue using the traditional string or array syntax for subprotocols until Safari and Firefox ship native support to ensure baseline cross-browser interoperability. If your application specifically requires Chromium's Local Network Access controls, guard constructor usage with feature detection before passing the WebSocketInit dictionary.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "I suggest we resolve this as "position: support" one week from now. This is a straightforward addition that allows us to enhance WebSockets more easil..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Supporting options bag in WebSocket constructor](https://github.com/WebKit/standards-positions/issues/708) [closed]
- **Mozilla:** [Supporting options bag in WebSocket constructor](https://github.com/mozilla/standards-positions/issues/1444) [open]

## Web-features Group

*group-level data: web-features [`websockets`](https://webstatus.dev/features/websockets), shared with 5 other ChromeStatus features*

- Share of tests passing in the web-features group `websockets` on [wpt.fyi](https://wpt.fyi/results?q=feature:websockets) (via webstatus.dev) — stable: Chrome 94.2% · Edge 94.2% · Firefox 96.6% · Safari 95.2%; experimental: Chrome 95.4% · Edge 95.4% · Firefox 96.6% · Safari 95.2%

## 📰 Ecosystem Blogs & Articles

- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > Chrome 154 Release Notes - Chrome Platform Status Chrome 154 Release Notes Preview Scheduled Stable Release September 22, 2026 Network / Connectivity Pending review Add options bag to WebSocket constructor # Link copied! Add support for passing an op...
- [Chrome 154  \|  Release notes  \|  Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > \*\*After:\*\* Developers can pass a dictionary object with a \`protocols\` key \*\*Sources:\*\* \[\*Chrome for Developers: Chrome 154 Release notes\*\](https://developer.chrome.com/) and \[\*Chrome 154 Beta Blog\*\](https://developer.chrome.com/)
- [Chrome 154 beta  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > \*\*Sources:\*\* \[\*Chrome for Developers: Chrome 154 Release notes\*\](https://developer.chrome.com/) and \[\*Chrome 154 Beta Blog\*\](https://developer.chrome.com/) This setting matches existing behavior in the Fetch API to navigate Local Network Access (LNA)...
- [9161afacba1066fd38656b697bd8cd7bd2c23229 - chromium/src - Git at Google](https://chromium.googlesource.com/chromium/src/+/9161afacba1066fd38656b697bd8cd7bd2c23229) *(chromium.googlesource.com)*
  > 9161afacba1066fd38656b697bd8cd7bd2c23229 - chromium/src - Git at Google Sign in &#9681; Theme chromium / chromium / src / 9161afacba1066fd38656b697bd8cd7bd2c23229 commit 9161afacba1066fd38656b697bd8cd7bd2c23229 \[ log \] author Chris Thompson &lt;cthomp@c...
- [nodejs.org](https://undici.nodejs.org/api/WebSocket) *(undici.nodejs.org)*
  > js Undici WebSocket Documentation\*\](https://undici.nodejs.org/) & runtime issue trackers js (via Undici) and Deno had already implemented custom \`WebSocketInit\` dictionaries out of necessity—allowing developers to specify custom headers, proxy dispat...
- [Chrome 154 for Developers: What Changed and What to Test — CODERCOPS](https://blog.codercops.com/blog/chrome-154-websocket-options-iterator-includes-https-prompts-2026) *(blog.codercops.com)*
  > \*\*Sources:\*\* \*CoderCops: Chrome 154 for Developers\*, \*Polypane Experimental Web Platform Features\* \*\*Details:\*\* Tooling and developer roundups emphasize this as a welcome quality-of-life upgrade
- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)*
  > Intent to Prototype: Add options bag to WebSocket constructor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Add options bag to ...
- [Add option bag to WebSocket constructor \[542670554\] - Chromium](https://issues.chromium.org/issues/542670554) *(issues.chromium.org)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor](http://www.mail-archive.com/blink-dev@chromium.org/msg17124.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor Chromestatus Wed, 05 Aug 2026 10:57:09 -0700 Contact emails \[ema...
- [Microsoft Edge 154 web platform release notes (Sep. 24, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/154) *(learn.microsoft.com · 2026-09-10T00:00:00)*
  > // Using the existing string argument ... // Using the new option bag argument for subprotocols. &lt;strong&gt;const socket = new WebSocket(&quot;wss://example.com:8080&quot;, { protocols: &quot;soap&quot; });&lt;/strong&gt; See also: WebSocket at MDN....

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > Intent to Prototype: Add options bag to WebSocket constructor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Add optio...
- [Add option bag to WebSocket constructor \[542670554\] - Chromium](https://issues.chromium.org/issues/542670554) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor](http://www.mail-archive.com/blink-dev@chromium.org/msg17124.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/websockets/pull/76`)*
  > \[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor Chromestatus Wed, 05 Aug 2026 10:57:09 -0700 Contact e...

## 📚 Platform Documentation & Specifications

- [Support \`targetAddressSpace\` in WebSockets · Issue #126 · WICG/local-network-access · GitHub](https://github.com/WICG/local-network-access/issues/126) *(github.com)*
- [Weekly hardening: v154 coverage (WebSocket options bag + text-decoration-inset) and v147 MDN-shape upgrade by PaulKinlan · Pull Request #10 · PaulKinlan/gendn · GitHub](https://github.com/PaulKinlan/gendn/pull/10) *(github.com)*
- [Add targetAddressSpace integration in WebSockets by christhompson · Pull Request #125 · WICG/local-network-access · GitHub](https://github.com/WICG/local-network-access/pull/125) *(github.com)*
- [fix(local-network-access): update WebSocket LNA guidance and IPv6 localhost flag (#1651) by rowan-m · Pull Request #1727 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/pull/1727) *(github.com)*
- [Supporting options bag in WebSocket constructor · Issue #1444 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1444) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 56 result(s) found across 12 planned queries — **12 verified relevant**
  - `"chromestatus.com/feature/5080055102439424" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/whatwg/websockets/issues/42" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"github.com/whatwg/websockets/pull/76" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"Add options bag to WebSocket constructor" API` — *Core feature API query* (5 returned)
  - `"Add options bag to WebSocket constructor" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"const socket = new websocket("wss://example.com:8080", "soap")" OR "const socket = new websocket("wss://example" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Add options bag to WebSocket constructor" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Add options bag to WebSocket constructor" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"WebSocketInit" OR "WebSocket constructor" "options bag"` — *Find developer blog posts and articles introducing or explaining the options bag pattern in the WebSocket constructor.* (8 returned)
  - `"new WebSocket" "protocols:" site:github.com OR site:gitlab.com` — *Locate real-world JavaScript source code snippets and test fixtures demonstrating usage of the dictionary object as the second argument.* (8 returned)
  - `"WebSocket" "targetAddressSpace" OR "protocols" "WebSocketInit"` — *Track adoption, implementation status, and integration with Local Network Access across browser engines and web standards.* (8 returned)
  - `"whatwg/websockets" ("issue 42" OR "pull 76") OR "options bag"` — *Discover developer sentiment, specification discussions, and consensus around modernizing the WebSocket constructor arguments.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 3 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "websockets", shared with 5 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "websockets": Chrome 94.2% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 2 document(s) analyzed
- **Standards Discussion Comments:** 1 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5080055102439424)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5080055102439424)
- [Specification](https://github.com/whatwg/websockets/pull/76)
- [Chromium Tracking Bug](https://crbug.com/542670554)
