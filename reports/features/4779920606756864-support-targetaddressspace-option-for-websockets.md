# Support targetAddressSpace option for WebSockets

> **Report Week:** 2026-W45 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Add support for passing a targetAddressSpace option in the WebSocket constructor. This allows developers to specify that a WebSocket connection to a public hostname should be treated as going to a "local" or "loopback" destination, matching the existing support on the Fetch API. The main use case is to offer an escape hatch to bypass mixed content restrictions for connecting to local servers that cannot yet support HTTPS (as Local Network Access permissions require a secure context).  Example: A public site that connects to a local server can use a hostname to avoid needing manual configuration of the exact private IP address in use:  \`const ws = new WebSocket("ws://local-server.example", { targetAddressSpace: "local"}\`  This will flag the WebSocket connection as going to a local address, bypassing mixed content blocking when run in a secure context. The user must grant the site the local network permission for the WebSocket connection to succeed, and the hostname must resolve to a local IP address (otherwise it will be blocked).  This builds on https://chromestatus.com/feature/5080055102439424 which adds an options bag to the WebSocket constructor.

### Motivation

To avoid mixed content blocking for local network WebSockets requests, web developers have relied on having their users manually configure their local network IP addresses, which is awkward at best. Adding support for the targetAddressSpace option in WebSockets aligns it with the Fetch API. This has also been requested by developers (e.g., https://github.com/WICG/local-network-access/issues/16#issuecomment-4459071272).

## Ecosystem Status

- **Momentum:** Quiet (0 points since 2026-10-12; footprint 180 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Shipping enabled by default in Chrome 154, the targetAddressSpace option allows the WebSocket constructor to designate connections to public hostnames as targeting local or loopback address spaces. This bridges a critical parity gap with the Fetch API under the Local Network Access (LNA) specification, providing a standard escape hatch to bypass mixed-content blocks when connecting to non-HTTPS local network servers. However, while the foundational WebSocket options bag enjoys broad multi-engine support, full LNA permission enforcement and address space flagging remain Chrome-specific.

### Recommendations
- Actionable Advice: Teams connecting to local appliances or loopback WebSocket services from secure public contexts should adopt the constructor dictionary progressively with feature detection or try-catch fallbacks for non-Chromium browsers. For environments where users run Chromium 154+, migrate away from raw IP address inputs and declare targetAddressSpace alongside explicit LNA permission handling.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "I suggest we resolve this as "position: support" one week from now. This is a straightforward addition that allows us to enhance WebSockets more easil..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Supporting options bag in WebSocket constructor](https://github.com/WebKit/standards-positions/issues/708) [closed]
- **Mozilla:** [Supporting options bag in WebSocket constructor](https://github.com/mozilla/standards-positions/issues/1444) [open]

## Web-features Group

*group-level data: web-features [`local-network-access`](https://webstatus.dev/features/local-network-access), shared with 7 other ChromeStatus features*

- Results of the web-features group `local-network-access` on [wpt.fyi](https://wpt.fyi/results?q=feature:local-network-access) (webstatus.dev has no pass rates for it)

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets Chromestatus Wed, 05 Aug 2026 13:26:20 -0700 Con...
- [Chrome 154  \|  Release notes  \|  Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com · 2026-09-22T00:00:00)*
  > Adds support for passing a ... targetAddressSpace: &quot;local&quot; })). &lt;strong&gt;This lets you specify that a WebSocket connection to a public hostname should be treated as going to a &quot;local&quot; or &quot;loopback&quot; destination&lt;/strong&gt;, m...
- [Chrome 154 beta  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com · 2026-09-02T00:00:00)*
  > &lt;strong&gt;Adds support for passing a targetAddressSpace option in the WebSocket constructor&lt;/strong&gt;. This lets you specify that a WebSocket connection to a public hostname should be treated as going to a &quot;local&quot; or &quot;loopback&quot; desti...
- [\[blink-dev\] Intent to Ship: Local network access restrictions for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg15891.html) *(mail-archive.com)*
  > Compatibility risks: There are some local network requests types that we cannot know ahead of time will be going to the local network (eg, a subresource request to http://test.example which then resolves to 192.168.0.1). These would be blocked as mix...
- [Re: \[blink-dev\] Intent to Ship: Local network access restrictions for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg15902.html) *(mail-archive.com)*
  > Compatibility risks: There are some local network requests types that we cannot know ahead of time will be going to the local network (e.g., a subresource request to http://test.example which then resolves to 192.168.0.1). These would be blocked as m...
- [Intent to Ship: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/cwu_RUmBpzY) *(groups.google.com)*
  > For fetch() calls, we have the \`targetAddressSpace\` option for &lt;strong&gt;pre-specifying that requests like this are to the local network&lt;/strong&gt;, and thus we can exempt them from mixed content blocking.
- [Microsoft Edge 154 web platform release notes (Sep. 24, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/154) *(learn.microsoft.com · 2026-09-10T00:00:00)*
  > const ws = new WebSocket(&quot;ws://local-server.example&quot;, { targetAddressSpace: &quot;local&quot;});
- [Support \`targetAddressSpace\` option in WebSockets \[517413738\] - Chromium](https://issues.chromium.org/issues/517413738) *(issues.chromium.org)*
  > &lt;strong&gt;The target address space is propagated to the network service&#x27;s WebSocket implementation, where it is used to perform Local Network Access (LNA) checks&lt;/strong&gt;. Web platform tests and unit tests are added to verify the new functionality...
- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)*
  > Motivation There is a demand for extensibility of options on the WebSocket constructor, to mirror the &quot;option bag&quot; approach that the Fetch API has. https://github.com/whatwg/websockets/issues/42 is requested by a number of implementors and ...
- [\[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor](http://www.mail-archive.com/blink-dev@chromium.org/msg17124.html) *(mail-archive.com)*
  > Blink component Blink&gt;Network&gt;WebSockets Web Feature ID websockets Motivation There is a demand for extensibility of options on the WebSocket constructor, to mirror the &quot;option bag&quot; approach that the Fetch API has. https://github.com/...
- [Add option bag to WebSocket constructor \[542670554\] - Chromium](https://issues.chromium.org/issues/542670554) *(issues.chromium.org)*
  > Revert WebSocket option bag support This is a partial revert of https://crrev.com/c/8197225 &quot;Implement WebSocket constructor option bag&quot;. It removes the IDL changes so that from JavaScript&#x27;s perspective the behaviour is identical to be...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/pull/125`)*
  > \[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets Chromestatus Wed, 05 Aug 2026 13:26:20...

## 📚 Platform Documentation & Specifications

- [Use case for WebSocket communications · Issue #16 · WICG/local-network-access · GitHub](https://github.com/WICG/local-network-access/issues/16) *(github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/154.md at main · MicrosoftDocs/edge-developer · GitHub](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/154.md) *(github.com)*
- [local-network-access: WebSocket constructor rejects targetAddressSpace and test flag misses IPv6 localhost · Issue #1651 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1651) *(github.com)*
- [fix(local-network-access): update WebSocket LNA guidance and IPv6 localhost flag (#1651) by rowan-m · Pull Request #1727 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/pull/1727) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 50 result(s) found across 12 planned queries — **14 verified relevant**
  - `"chromestatus.com/feature/4779920606756864" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WICG/local-network-access/issues/126" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"github.com/WICG/local-network-access/pull/125" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Support targetAddressSpace option for WebSockets" API` — *Core feature API query* (5 returned)
  - `"Support targetAddressSpace option for WebSockets" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"const ws = new websocket("ws://local-server.example", { targetaddressspace: "local"}" OR "const ws = new websocket("ws://local-server" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Support targetAddressSpace option for WebSockets" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Support targetAddressSpace option for WebSockets" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"targetAddressSpace" "new WebSocket" OR "targetAddressSpace: 'local'"` — *Locates real-world JavaScript code snippets and implementation examples using the targetAddressSpace option in the WebSocket constructor.* (8 returned)
  - `"targetAddressSpace" WebSocket ("mixed content" OR "local network access") tutorial OR guide` — *Finds developer tutorials and blog posts explaining how to connect secure web applications to local WebSocket servers without triggering mixed content blocks.* (3 returned)
  - `"targetAddressSpace" WebSocket ("Intent to Ship" OR "ChromeStatus" OR "Blink-dev")` — *Discovers web platform release notes, standards announcements, and browser vendor Intent to Ship threads tracking adoption of the feature.* (8 returned)
  - `"targetAddressSpace" WebSocket site:github.com/WICG/local-network-access OR site:issues.chromium.org` — *Finds developer issues, implementation bugs, and standards discussions about WebSocket Local Network Access requirements and the targetAddressSpace dictionary option.* (3 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **1 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "local-network-access", shared with 7 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "local-network-access": no stable pass rate for Chrome yet*

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
