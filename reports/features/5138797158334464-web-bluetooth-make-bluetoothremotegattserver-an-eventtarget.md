# Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget

> **Report Week:** 2026-W45 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

BluetoothRemoteGATTServer inherits from EventTarget, exposing the standard addEventListener(), removeEventListener(), and dispatchEvent() methods. This enables connection-level events to be dispatched directly on the GATT server.

### Motivation

BluetoothRemoteGATTServer represents an active GATT connection and needs to host connection-level events. Making it an EventTarget gives web applications the standard event-listener API needed by events such as the separately proposed maxwritewithoutresponsesizechanged event.

## Ecosystem Status

- **Momentum:** Moderate (+80 points since 2026-10-12; footprint 180 points)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Shipping enabled by default in Chrome 157, this change updates the BluetoothRemoteGATTServer interface to inherit directly from EventTarget, granting it standard addEventListener(), removeEventListener(), and dispatchEvent() capabilities. The change establishes the event plumbing necessary for connection-level notifications, most notably the separately proposed maxwritewithoutresponsesizechanged event for dynamic MTU handling. However, the feature exists entirely within Chromium's Web Bluetooth implementation, with no path toward broader web standardization.

### Recommendations
- Actionable Advice: Teams building Chromium-targeted progressive web apps or internal hardware tools should feature-detect addEventListener on the GATT server before attaching connection-level listeners. For cross-browser consumer websites, Web Bluetooth should only be implemented as an optional progressive enhancement alongside native companion apps or manual fallback configurations.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "It is there now. The JSON is updated every 48 hours. You can tell from the commit log on this repository...."
- Standards Activity (Mozilla): Latest discussion from @qdot: "I do not believe those that would be responsible for management and implementation of WebBluetooth are ready to discuss the viability and company posi..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Web Bluetooth](https://github.com/WebKit/standards-positions/issues/570) [closed]
- **Mozilla:** [Web Bluetooth](https://github.com/mozilla/standards-positions/issues/95) [closed]

## Web-features Group

*group-level data: web-features [`web-bluetooth`](https://webstatus.dev/features/web-bluetooth), shared with 12 other ChromeStatus features*

- Share of tests passing in the web-features group `web-bluetooth` on [wpt.fyi](https://wpt.fyi/results?q=feature:web-bluetooth) (via webstatus.dev) — stable: Chrome 0.6% · Edge 3.2% · Firefox 0.6% · Safari 0.6%; experimental: Chrome 100% · Edge 4.5% · Firefox 0.6% · Safari 0.6%
- **Chrome usage:** 0.000004% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/105))
- **Mozilla:** negative ([standards position](https://github.com/mozilla/standards-positions/issues/95))

## 📰 Ecosystem Blogs & Articles

- [github.io](https://webbluetoothcg.github.io/web-bluetooth) *(webbluetoothcg.github.io)*
  > The Web Platform update \*\*"Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget"\*\* updates the Web Bluetooth API specification getPrimaryService()\`)
- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/5138797158334464/activity) *(img968-dot-cr-status.appspot.com)*
  > Under this change, the \`BluetoothRemoteGATTServer\` interface inherits directly from \`EventTarget\` Community Group pull requests and WPT IDL harness tests cover \`EventTarget\` inheritance for \`BluetoothRemoteGATTServer\`
- [chromestatus.com](https://chromestatus.com/feature/5177569273053184) *(chromestatus.com)*
  > Connection parameters (such as the Maximum Transmission Unit / payload sizes or connection state updates) naturally belong to the GATT server instance Extending \`EventTarget\` paves the way for connection-level event notifications—most notably paired ...
- [\[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17579.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Helmut Januschka Tue, 29 Sep 2026 ...
- [Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17603.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Chris Harrelson Wed, 30 Se...
- [Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17833.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; \*Blink component\* &gt;&gt;&gt; ... host connection-level events. &lt;strong&gt;Making it an EventTarget gives web &gt;&gt;&gt; applications the standard event-listener API needed by events such as the &gt;&gt;&gt; separately propo...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com · 2026-10-30T05:29:22)*
  > Tracking bug #549896512 ↗ (opens ... in new window) &lt;strong&gt;BluetoothRemoteGATTServer inherits from EventTarget, exposing the standard addEventListener(), removeEventListener(), and dispatchEvent() methods&lt;/strong&gt;....
- [blink-dev](https://www.mail-archive.com/blink-dev@chromium.org) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Prompt API Thinking Mode Chromestatus · \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Helmut Januschka
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=Intent+to+Ship) *(groups.google.com)*
  > Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget · Does this intent deprecate or change behavior of existing APIs, such that &gt; it has potentially high risk for Android WebView-based applications? &gt; None. Android WebV...
- [Chrome Release 157](https://chromestatuslite.com/?version=157) *(chromestatuslite.com)*
  > \[1\] https://github.com/w3c/css... # This feature was specified in this Spec. &lt;strong&gt;BluetoothRemoteGATTServer inherits from EventTarget, exposing the standard addEventListener(), removeEventListener(), and dispatchEvent() methods&lt;/strong&gt;....
- [Chrome Platform Status](https://cr-status.appspot.com/feature/5177569273053184?gate=6176654583005184) *(cr-status.appspot.com)*
  > Chrome Platform Status

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17579.html) *(mail-archive.com)* *(Cites: `https://github.com/WebBluetoothCG/web-bluetooth/pull/672`)*
  > \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Helmut Januschka Tue, 29...
- [Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17603.html) *(mail-archive.com)* *(Cites: `https://pr-preview.s3.amazonaws.com/hjanuschka/web-bluetooth/pull/672.html#bluetoothremotegattserver`)*
  > Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Chris Harrelson ...

## 📚 Platform Documentation & Specifications

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService) *(developer.mozilla.org)*
- [BluetoothDevice - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice) *(developer.mozilla.org)*
- [Add BluetoothRemoteGATTServer.maxWriteWithoutResponseSize by hjanuschka · Pull Request #672 · whatwg/bluetooth · GitHub](https://github.com/whatwg/bluetooth/pull/672) *(github.com)*
- [Weekly hardening: build 11 missing feature demos, fill current-channel critiques, goal-setting fixes by PaulKinlan · Pull Request #21 · PaulKinlan/chrome-platform-showcase · GitHub](https://github.com/PaulKinlan/chrome-platform-showcase/pull/21) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 52 result(s) found across 12 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5138797158334464" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WebBluetoothCG/web-bluetooth/pull/672" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"pr-preview.s3.amazonaws.com/hjanuschka/web-bluetooth/pull/672.html" -site:pr-preview.s3.amazonaws.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget" API` — *Core feature API query* (3 returned)
  - `"Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"connection-level" OR "event-listener" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"BluetoothRemoteGATTServer" ("addEventListener" OR "EventTarget") "Web Bluetooth" (tutorial OR guide OR blog)` — *Find developer blog posts, tutorials, and practical implementation guides introducing event handling on BluetoothRemoteGATTServer.* (2 returned)
  - `"BluetoothRemoteGATTServer" "addEventListener" ("maxwritewithoutresponsesizechanged" OR "EventTarget") -site:w3.org` — *Locate real-world JavaScript code examples and WebIDL usages showing event listener subscriptions on the GATT server instance.* (8 returned)
  - `"BluetoothRemoteGATTServer" "EventTarget" ("Intent to Prototype" OR "Intent to Ship" OR chromestatus)` — *Track browser vendor announcements, Chrome platform status updates, and rollout timelines for making the GATT server an EventTarget.* (8 returned)
  - `site:github.com/WebBluetoothCG/web-bluetooth ("BluetoothRemoteGATTServer" OR "pull/672") "EventTarget"` — *Discover community debates, specification deliberations, and feedback on Web Bluetooth issue trackers and pull requests.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 7 result(s) found — **5 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 5 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "web-bluetooth", shared with 12 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "web-bluetooth": Chrome 0.6% passing (stable)*
- **Sources cited by the AI synthesis:** 4 result(s) found — **1 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 8 engineer comment(s) read
- **Web Page Excerpts Ingested:** 9 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5138797158334464)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5138797158334464)
- [Specification](https://pr-preview.s3.amazonaws.com/hjanuschka/web-bluetooth/pull/672.html#bluetoothremotegattserver)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40265040)
