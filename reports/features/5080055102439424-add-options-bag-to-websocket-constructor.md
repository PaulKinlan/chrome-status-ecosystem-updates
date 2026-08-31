# Add options bag to WebSocket constructor

> **Report Week:** 2026-W36 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Add support for passing an option bag (WebSocketInit dictionary) as the second argument to the WebSocket constructor. The option bag will initially support a "protocols" option, allowing developers to specify subprotocols (mirroring the existing protocols argument), and also serves as an extension point for future options.

Before, this would be written `const socket = new WebSocket("wss://example.com:8080", "soap")`. After, this could also be written `const socket = new WebSocket("wss://example.com:8080", { protocols: "soap" })`.

See https://github.com/whatwg/websockets/issues/42 and spec PR https://github.com/whatwg/websockets/pull/76 for this change.

### Motivation

There is a demand for extensibility of options on the WebSocket constructor, to mirror the "option bag" approach that the Fetch API has. https://github.com/whatwg/websockets/issues/42 is requested by a number of implementors and users, and Chromium wants this as a means to add a `targetAddressSpace` option matching the one added to Fetch for Local Network Access (https://wicg.github.io/local-network-access/#fetch-api).

## Ecosystem Status

- **Momentum:** Moderate (60 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Add options bag to WebSocket constructor is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "I suggest we resolve this as "position: support" one week from now. This is a straightforward addition that allows us to enhance WebSockets more easil..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Supporting options bag in WebSocket constructor](https://github.com/WebKit/standards-positions/issues/708) [open]
- **Mozilla:** [Supporting options bag in WebSocket constructor](https://github.com/mozilla/standards-positions/issues/1444) [open]

## 📰 Ecosystem Blogs & Articles

- [stackoverflow.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFT0aCRa62YWmc1hNrcjo4jG4bnuT4dMfjeLLtwP4eQ7HSFe7BQn_FWDadMSi4Znyywz6aVsgyNbSHZrkcWJ6ougZDfV3cDjLxb3Ap0RDDG_8TMWVqSODwuIVGwzOoXmC4R0FV0TpUIgCaxqZYy3Ux190PRkhQIydibeAFcGN3mZnLVDsRIolM=) *(vertexaisearch.cloud.google.com)*
  > Here is a summary of the feature, along with key announcements, developer articles, and ecosystem context regarding adding an options bag to the `WebSocket` constructor.  ---  ### **Feature Summary**  * **Specification**: WHATWG WebSockets Standard (
- [mozaic.fm](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFyVdvShBPzGJ-ZeQcSuBVjrRhonE5mr1vvDe4bCDPIOOM5Ol14tjgRssjpcXmRdpxohpEoqoEy0i37rlrulu8NBfRmZYkjyvBRTzAxKESOS082CLJ5wdXxKRqBLxxRKtbRGK68_AefNhyUwMnHGOeL2w==) *(vertexaisearch.cloud.google.com)*
  > Here is a summary of the feature, along with key announcements, developer articles, and ecosystem context regarding adding an options bag to the `WebSocket` constructor.  ---  ### **Feature Summary**  * **Specification**: WHATWG WebSockets Standard (
- [[blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)*
  > The user must grant the site the ... it will be blocked). This builds on https://chromestatus.com/feature/5080055102439424 which <strong>adds an options bag to the WebSocket constructor</strong>....
- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5080055102439424</strong>?gate=5087234207383552
- [[blink-dev] Intent to Prototype: Add options bag to WebSocket constructor](http://www.mail-archive.com/blink-dev@chromium.org/msg17124.html) *(mail-archive.com)*
  > Explainer https://github.com/whatwg/websockets/issues/42 https://github.com/whatwg/websockets/pull/76 Specification https://github.com/whatwg/websockets/pull/76 Summary <strong>Add support for passing an option bag (WebSocketInit dictionary) as the s...
- [Local Network Access](https://wicg.github.io/local-network-access) *(wicg.github.io · 2026-08-07T00:00:00)*
  > One minor difference between the Fetch API and the WebSockets API is that WebSockets does not have an equivalent to fetch’s RequestInit, and so there is no place to put in a targetAddressSpace option to bypass mixed content checks for ws:// urls.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > The user must grant the site the ... it will be blocked). This builds on https://chromestatus.com/feature/5080055102439424 which <strong>adds an options bag to the WebSocket constructor</strong>....
- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5080055102439424</strong>?gate=5087234207383552

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 6 result(s) found across 7 planned queries — **4 verified relevant**
  - `"chromestatus.com/feature/5080055102439424" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/whatwg/websockets/issues/42" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"github.com/whatwg/websockets/pull/76" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"WebSocketInit" OR ("new WebSocket" AND "{ protocols")` — *Finds code snippets, API type definitions, and WebIDL implementations utilizing the new WebSocketInit dictionary syntax.* (3 returned)
  - `("WebSocket" OR "new WebSocket") ("options bag" OR "WebSocketInit") (guide OR tutorial OR blog OR javascript)` — *Discovers developer blog posts, migration guides, and tutorials explaining how and why to use the options bag in the WebSocket constructor.* (1 returned)
  - `("WebSocketInit" OR "WebSocket constructor") ("intent to ship" OR "intent to prototype" OR "Chrome" OR "WebKit" OR "Firefox") "options"` — *Locates browser vendor release notes, intents to ship/prototype, and platform status trackers showing implementation rollout.* (2 returned)
  - `"WebSocket" ("WebSocketInit" OR "options bag") ("targetAddressSpace" OR "Local Network Access" OR "whatwg/websockets")` — *Surfaces standards debates, spec discussions, and motivation around Local Network Access security and extending WebSocket constructor parameters.* (5 returned)
- **Google Search Grounding (gemini-3.7-flash):** 9 result(s) found — **2 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 8 result(s) found — **6 verified relevant**
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
