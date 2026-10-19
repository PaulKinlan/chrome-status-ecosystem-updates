# Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget

> **Report Week:** 2026-W43 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

BluetoothRemoteGATTServer inherits from EventTarget, exposing the standard addEventListener(), removeEventListener(), and dispatchEvent() methods. This enables connection-level events to be dispatched directly on the GATT server.

### Motivation

BluetoothRemoteGATTServer represents an active GATT connection and needs to host connection-level events. Making it an EventTarget gives web applications the standard event-listener API needed by events such as the separately proposed maxwritewithoutresponsesizechanged event.

## Ecosystem Status

- **Momentum:** Emerging (footprint 140 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Chromium is shipping an update to make BluetoothRemoteGATTServer inherit from EventTarget, establishing standard event-dispatch capabilities for connection-level GATT events such as maximum write-without-response size changes. While welcomed by IoT and web hardware developers seeking parity with native BLE stacks, the enhancement lands within an API that remains strictly Chromium-only. Cross-browser consensus remains fractured, as non-Chromium engines maintain firm opposition to exposing raw Bluetooth capabilities on the web.

### Recommendations
- Actionable Advice: Teams building web-to-hardware applications should feature-detect EventTarget methods on the GATT server instance before attaching connection listeners, providing graceful fallbacks or fixed write chunking for unsupported runtimes. Because Web Bluetooth cannot achieve cross-browser interoperability, teams targeting Safari or Firefox must continue relying on native companion apps or progressive enhancement gates.
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
- **Chrome usage:** 0.000003% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/105))
- **Mozilla:** negative ([standards position](https://github.com/mozilla/standards-positions/issues/95))

## Packages & Polyfills

- [@types/web-bluetooth](https://www.npmjs.com/package/@types/web-bluetooth) `v0.0.21` — TypeScript definitions for web-bluetooth

## 📰 Ecosystem Blogs & Articles

- [Chrome Platform Status](https://chromestatus.com/feature/5138797158334464?gate=6155787868176384) *(chromestatus.com)*
  > Chrome Platform Status
- [Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17633.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Philip Jägenstedt Thu, 01 ...
- [\[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17579.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Helmut Januschka Tue, 29 Sep 2026 ...
- [\[blink-dev\] Intent to Prototype: Web Bluetooth: BluetoothRemoteGATTServer.maxWriteWithoutResponseSize](http://www.mail-archive.com/blink-dev@chromium.org/msg17314.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Web Bluetooth: BluetoothRemoteGATTServer.maxWriteWithoutResponseSize Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Web Bluetooth: BluetoothRemoteGATTServer.maxWriteWithoutResponseSize Helmut J...
- [Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17603.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Chris Harrelson Wed, 30 Se...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > &lt;strong&gt;BluetoothRemoteGATTServer inherits from EventTarget, exposing the standard addEventListener(), removeEventListener(), and dispatchEvent() methods&lt;/strong&gt;.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17633.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5138797158334464`)*
  > Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Philip Jägensted...
- [\[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17579.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5138797158334464`)*
  > \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Helmut Januschka Tue, 29...
- [\[web-bluetooth\] Pull Request: Add BluetoothRemoteGATTCharacteristic.getMTU() from Helmut Januschka via GitHub on 2026-06-18 (public-web-bluetooth-log@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-web-bluetooth-log/2026Jun/0012.html) *(lists.w3.org)* *(Cites: `https://github.com/WebBluetoothCG/web-bluetooth/pull/672`)*
  > Feedback very welcome -- this is my first PR here, so tell me if I got the spec conventions wrong anywhere. Thanks! See https://&lt;strong&gt;github.com/WebBluetoothCG/web-bluetooth/pull/672&lt;/strong&gt; -- Sent via github-notify-ml as configured in ...
- [Re: \[web-bluetooth\] Add BluetoothRemoteGATTCharacteristic.getMTU() (#672) from Reilly Grant via GitHub on 2026-06-22 (public-web-bluetooth-log@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-web-bluetooth-log/2026Jun/0015.html) *(lists.w3.org)* *(Cites: `https://github.com/WebBluetoothCG/web-bluetooth/pull/672`)*
  > -- GitHub Notification of comment by reillyeon Please view or discuss this issue at https://&lt;strong&gt;github.com/WebBluetoothCG/web-bluetooth/pull/672&lt;/strong&gt;#issuecomment-4774154268 using your GitHub account -- Sent via github-notify-ml as ...
- [Re: \[web-bluetooth\] Add BluetoothRemoteGATTCharacteristic.maxWriteWithoutResponseSize (#672) from Helmut Januschka via GitHub on 2026-06-23 (public-web-bluetooth-log@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-web-bluetooth-log/2026Jun/0017.html) *(lists.w3.org)* *(Cites: `https://github.com/WebBluetoothCG/web-bluetooth/pull/672`)*
  > -- GitHub Notification of comment by hjanuschka Please view or discuss this issue at https://&lt;strong&gt;github.com/WebBluetoothCG/web-bluetooth/pull/672&lt;/strong&gt;#issuecomment-4774448561 using your GitHub account -- Sent via github-notify-ml as...
- [\[blink-dev\] Intent to Prototype: Web Bluetooth: BluetoothRemoteGATTServer.maxWriteWithoutResponseSize](http://www.mail-archive.com/blink-dev@chromium.org/msg17314.html) *(mail-archive.com)* *(Cites: `https://pr-preview.s3.amazonaws.com/hjanuschka/web-bluetooth/pull/672.html#bluetoothremotegattserver`)*
  > \[blink-dev\] Intent to Prototype: Web Bluetooth: BluetoothRemoteGATTServer.maxWriteWithoutResponseSize Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Web Bluetooth: BluetoothRemoteGATTServer.maxWriteWithoutResponseSiz...

## 📚 Platform Documentation & Specifications

- [\[web-bluetooth\] Pull Request: Add BluetoothRemoteGATTCharacteristic.getMTU() from Helmut Januschka via GitHub on 2026-06-18 (public-web-bluetooth-log@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-web-bluetooth-log/2026Jun/0012.html) *(lists.w3.org)*
- [Re: \[web-bluetooth\] Add BluetoothRemoteGATTCharacteristic.getMTU() (#672) from Reilly Grant via GitHub on 2026-06-22 (public-web-bluetooth-log@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-web-bluetooth-log/2026Jun/0015.html) *(lists.w3.org)*
- [Re: \[web-bluetooth\] Add BluetoothRemoteGATTCharacteristic.maxWriteWithoutResponseSize (#672) from Helmut Januschka via GitHub on 2026-06-23 (public-web-bluetooth-log@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-web-bluetooth-log/2026Jun/0017.html) *(lists.w3.org)*
- [Add BluetoothRemoteGATTServer.maxWriteWithoutResponseSize by hjanuschka · Pull Request #672 · whatwg/bluetooth](https://github.com/whatwg/bluetooth/pull/672) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 54 result(s) found across 12 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/5138797158334464" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/WebBluetoothCG/web-bluetooth/pull/672" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"pr-preview.s3.amazonaws.com/hjanuschka/web-bluetooth/pull/672.html" -site:pr-preview.s3.amazonaws.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget" API` — *Core feature API query* (2 returned)
  - `"Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"connection-level" OR "event-listener" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `BluetoothRemoteGATTServer EventTarget web bluetooth tutorial guide` — *Finds developer blog posts and tutorials explaining how to use the new EventTarget interface on BluetoothRemoteGATTServer.* (8 returned)
  - `BluetoothRemoteGATTServer addEventListener removeEventListener WebIDL code examples` — *Locates real-world JavaScript and WebIDL code examples showing how to bind event listeners directly to GATT servers.* (8 returned)
  - `"BluetoothRemoteGATTServer" "EventTarget" chrome status release notes OR announcement` — *Searches for ecosystem announcements, Chrome status updates, and browser implementation tracking for this feature.* (1 returned)
  - `web bluetooth maxwritewithoutresponsesizechanged BluetoothRemoteGATTServer discussion` — *Finds community discussions and GitHub pull requests regarding connection-level events like maxwritewithoutresponsesizechanged.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 3 result(s) found — **1 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 7 result(s) found — **1 verified relevant**
- **web-features mapping:** *group "web-bluetooth", shared with 12 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "web-bluetooth": Chrome 0.6% passing (stable)*
- **Sources cited by the AI synthesis:** 2 result(s) found — **1 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 8 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5138797158334464)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5138797158334464)
- [Specification](https://pr-preview.s3.amazonaws.com/hjanuschka/web-bluetooth/pull/672.html#bluetoothremotegattserver)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40265040)
