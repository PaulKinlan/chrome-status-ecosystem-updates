# Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget

> **Report Week:** 2026-W42 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

BluetoothRemoteGATTServer inherits from EventTarget, exposing the standard addEventListener(), removeEventListener(), and dispatchEvent() methods. This enables connection-level events to be dispatched directly on the GATT server.

### Motivation

BluetoothRemoteGATTServer represents an active GATT connection and needs to host connection-level events. Making it an EventTarget gives web applications the standard event-listener API needed by events such as the separately proposed maxwritewithoutresponsesizechanged event.

## Ecosystem Status

- **Momentum:** Emerging (footprint 100 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Chromium's update to make BluetoothRemoteGATTServer inherit from EventTarget equips GATT connection instances with standard event listener capabilities, establishing the foundation for connection-level events such as dynamic ATT MTU notifications. While this change cleanly addresses architectural and throughput bottlenecks in hardware-oriented web applications, the underlying Web Bluetooth platform remains strictly confined to Chromium-based browsers. Major competing browser engines remain firmly opposed to Web Bluetooth, keeping the feature entirely outside cross-browser interoperability baselines.

### Recommendations
- Actionable Advice: Deploy this feature strictly within controlled, Chromium-first environments such as enterprise dashboards, kiosk applications, and desktop PWAs, ensuring that all connection-level event listeners are guarded by feature detection on the BluetoothRemoteGATTServer prototype.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "It is there now. The JSON is updated every 48 hours. You can tell from the commit log on this repository...."
- Standards Activity (Mozilla): Latest discussion from @qdot: "I do not believe those that would be responsible for management and implementation of WebBluetooth are ready to discuss the viability and company posi..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Web Bluetooth](https://github.com/WebKit/standards-positions/issues/570) [closed]
- **Mozilla:** [Web Bluetooth](https://github.com/mozilla/standards-positions/issues/95) [closed]

## Web-features Group

*group-level data: web-features [`web-bluetooth`](https://webstatus.dev/features/web-bluetooth), shared with 12 other ChromeStatus features*

- Share of tests passing in the web-features group `web-bluetooth` on [wpt.fyi](https://wpt.fyi/results?q=feature:web-bluetooth) (via webstatus.dev) — stable: Chrome 0.6% · Edge 3.2% · Firefox 0.6% · Safari 0.6%; experimental: Chrome 92.9% · Edge 4.5% · Firefox 0.6% · Safari 0.6%
- **Chrome usage:** 0.000003% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/105))
- **Mozilla:** negative ([standards position](https://github.com/mozilla/standards-positions/issues/95))

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5138797158334464?gate=6155787868176384) *(chromestatus.com)*
  > In the Web Bluetooth API, the \`BluetoothRemoteGATTServer\` interface represents the active GATT connection to a remote peripheral Making \*\*\`BluetoothRemoteGATTServer\` an \`EventTarget\`\*\* equips it with \`addEventListener()\`, \`removeEventListener()\`, and...
- [github.io](https://webbluetoothcg.github.io/web-bluetooth) *(webbluetoothcg.github.io)*
  > \* \*\*IDL Change:\*\* Updates the IDL definition from \`interface BluetoothRemoteGATTServer\` to \`interface BluetoothRemoteGATTServer : EventTarget\`
- [\[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17579.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Helmut Januschka Tue, 29 Sep 2026 ...
- [Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17633.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Philip Jägenstedt Thu, 01 ...
- [Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17603.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Chris Harrelson Wed, 30 Se...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > &lt;strong&gt;BluetoothRemoteGATTServer inherits from EventTarget, exposing the standard addEventListener(), removeEventListener(), and dispatchEvent() methods&lt;/strong&gt;.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17579.html) *(mail-archive.com)* *(Cites: `https://github.com/WebBluetoothCG/web-bluetooth/pull/672`)*
  > \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Helmut Januschka Tue, 29...
- [Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17633.html) *(mail-archive.com)* *(Cites: `https://pr-preview.s3.amazonaws.com/hjanuschka/web-bluetooth/pull/672.html#bluetoothremotegattserver`)*
  > Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Philip Jägensted...

## 📚 Platform Documentation & Specifications

- [Add BluetoothRemoteGATTServer.maxWriteWithoutResponseSize by hjanuschka · Pull Request #672 · whatwg/bluetooth](https://github.com/whatwg/bluetooth/pull/672) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 52 result(s) found across 12 planned queries — **5 verified relevant**
  - `"chromestatus.com/feature/5138797158334464" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WebBluetoothCG/web-bluetooth/pull/672" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"pr-preview.s3.amazonaws.com/hjanuschka/web-bluetooth/pull/672.html" -site:pr-preview.s3.amazonaws.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget" API` — *Core feature API query* (3 returned)
  - `"Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"connection-level" OR "event-listener" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"BluetoothRemoteGATTServer" "EventTarget" "Web Bluetooth" (tutorial OR guide OR blog)` — *Finds technical articles, developer guides, and tutorials explaining how connection-level events work on BluetoothRemoteGATTServer.* (8 returned)
  - `"BluetoothRemoteGATTServer" "addEventListener" ("maxwritewithoutresponsesizechanged" OR "disconnect")` — *Discovers JavaScript code snippets and API usage patterns dispatching or listening to GATT server-level events.* (8 returned)
  - `"BluetoothRemoteGATTServer" "EventTarget" ("Intent to Ship" OR "Chrome Platform Status" OR "Chromium")` — *Tracks browser vendor implementation status, rollout timelines, and release announcements across Chromium and WebKit/Gecko.* (5 returned)
  - `site:github.com/WebBluetoothCG/web-bluetooth "BluetoothRemoteGATTServer" "EventTarget"` — *Surfaces specification discussions, PR feedback, and developer consensus within the Web Bluetooth Community Group repository.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **2 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 8 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "web-bluetooth", shared with 12 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "web-bluetooth": Chrome 0.6% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 8 engineer comment(s) read
- **Web Page Excerpts Ingested:** 5 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5138797158334464)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5138797158334464)
- [Specification](https://pr-preview.s3.amazonaws.com/hjanuschka/web-bluetooth/pull/672.html#bluetoothremotegattserver)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40265040)
