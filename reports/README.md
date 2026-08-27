# 🌐 Chrome Web Platform Ecosystem Report — 2026-W35

> **Generated on:** 2026-08-27 | **Target Milestones:** Chrome 154
> **Search Engine:** auto | **Analysis Model:** Heuristic Engine

## 📊 Executive Snapshot

| Metric | Count | Description |
| :--- | :--- | :--- |
| **Features Tracked** | `2` | APIs & platform features analyzed across milestones |
| **High Ecosystem Momentum** | `0` | Features with active community discussions & publications |
| **Multi-Engine Consensus** | `0` | Broad alignment across Chromium, Gecko, and WebKit |
| **Contested / Concerns** | `0` | Features with open vendor or security/privacy objections |
| **New Mentions This Week** | `0` | Net new articles, discussions, or standards updates |

## 📋 Features Index

| Feature | Milestone | Category | Momentum | Consensus | Developer Pulse |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [Additional Windowing Controls](#5201832664629248-additional-windowing-controls) | Chrome 154 | `Enabled by default` | **Moderate** | Chromium-Led | Cautiously Optimistic |
| [Add options bag to WebSocket constructor](#5080055102439424-add-options-bag-to-websocket-constructor) | Chrome 154 | `Enabled by default` | **Moderate** | Chromium-Led | Cautiously Optimistic |

---

## 🔍 Feature Ecosystem Deep Dives

<a id="5201832664629248-additional-windowing-controls"></a>
### [Additional Windowing Controls](https://chromestatus.com/feature/5201832664629248)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5201832664629248](https://chromestatus.com/feature/5201832664629248) · [chromestatuslite.com/feature/5201832664629248](https://chromestatuslite.com/feature/5201832664629248)
- **Specification:** [https://www.w3.org/TR/window-management/#api-window-minimize-method](https://www.w3.org/TR/window-management/#api-window-minimize-method)
- **Chromium Bug:** [https://issues.chromium.org/issues/40192345](https://issues.chromium.org/issues/40192345)
- **Browser Signals:** Chrome: `In developer trial (Behind a flag)` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Enable web applications to maximize, minimize, and restore their windows, control whether the window can be resized, and introspect the corresponding window state.

The Window Management permission is required for new JS API controls (window.maximize()/minimize()/restore()/setResizable(bool)). The new CSS media features display-state and resizable are not gated behind a permission as they can follow the non-AWC API toggled states as well.

This feature is an enhancement of the Window Management API:
https://chromestatus.com/feature/5252960583942144

> **Motivation:** Virtual Desktop Infrastructure (VDI) web clients have limited abilities to integrate remote application windows with the local desktop environment, which creates suboptimal experiences for their users. Currently, they can only present full disjoint remote desktop environments (e.g. in a local fullscreen window), or present individual remote applica...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (Activity Score: 75)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Additional Windowing Controls is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### 🏛️ Browser Standards Positions

- **WebKit:** [Additional Windowing Controls](https://github.com/WebKit/standards-positions/issues/96) [open] `concerns: privacy`, `topic: app-like capabilities`, `concerns: integration`, `venue: none / personal repository`, `from: Google`, `concerns: annoyance`
- **Mozilla:** [Additional Windowing Controls](https://github.com/mozilla/standards-positions/issues/712) [open] 
- **Mozilla:** [New 'onmove' event handler for the Window object](https://github.com/mozilla/standards-positions/issues/938) [closed] `position: defer`
- **W3C TAG:** [WG New Spec: Additional Windowing Controls](https://github.com/w3ctag/design-reviews/issues/1246) [open] `Review type: horizontal review`

#### 🧪 Interactive Demos & Samples

- [Additional Windowing Controls Demo](https://awc-demo-4a08a808.web.app)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=additional-windowing-controls) (1 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `web` (0 verified) · `hackernews` (0 verified) · `standards` (4 found) · `npm` (0 verified) · `wpt` (0 found)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5080055102439424-add-options-bag-to-websocket-constructor"></a>
### [Add options bag to WebSocket constructor](https://chromestatus.com/feature/5080055102439424)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5080055102439424](https://chromestatus.com/feature/5080055102439424) · [chromestatuslite.com/feature/5080055102439424](https://chromestatuslite.com/feature/5080055102439424)
- **Specification:** [https://github.com/whatwg/websockets/pull/76](https://github.com/whatwg/websockets/pull/76)
- **Chromium Bug:** [https://crbug.com/542670554](https://crbug.com/542670554)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Add support for passing an option bag (WebSocketInit dictionary) as the second argument to the WebSocket constructor. The option bag will initially support a "protocols" option, allowing developers to specify subprotocols (mirroring the existing protocols argument), and also serves as an extension point for future options.

Before, this would be written `const socket = new WebSocket("wss://example.com:8080", "soap")`. After, this could also be written `const socket = new WebSocket("wss://example.com:8080", { protocols: "soap" })`.

See https://github.com/whatwg/websockets/issues/42 and spec PR https://github.com/whatwg/websockets/pull/76 for this change.

> **Motivation:** There is a demand for extensibility of options on the WebSocket constructor, to mirror the "option bag" approach that the Fetch API has. https://github.com/whatwg/websockets/issues/42 is requested by a number of implementors and users, and Chromium wants this as a means to add a `targetAddressSpace` option matching the one added to Fetch for Local ...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (Activity Score: 40)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Add options bag to WebSocket constructor is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### 📦 Polyfills & NPM Ecosystem

- [isomorphic-ws](https://www.npmjs.com/package/isomorphic-ws) `v5.0.0` — Isomorphic implementation of WebSocket
- [@httptoolkit/websocket-stream](https://www.npmjs.com/package/@httptoolkit/websocket-stream) `v6.0.1` — Use websockets with the node streams API. Works in browser and node, with all current WS versions
- [ws](https://www.npmjs.com/package/ws) `v8.21.3` — Simple to use, blazing fast and thoroughly tested websocket client and server for Node.js
- [jest-websocket-mock](https://www.npmjs.com/package/jest-websocket-mock) `v2.5.0` — Mock websockets and assert complex websocket interactions with Jest

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=add-options-bag-to-websocket-constructor) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `web` (0 verified) · `hackernews` (0 verified) · `standards` (0 found) · `npm` (4 verified) · `wpt` (0 found)
- **Content Inspected:** Spec: ✔ · Explainers: 2 · Standards Comments Read: 0

---

