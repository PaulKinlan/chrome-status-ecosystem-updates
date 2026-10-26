# Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget

> **Report Week:** 2026-W44 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

BluetoothRemoteGATTServer inherits from EventTarget, exposing the standard addEventListener(), removeEventListener(), and dispatchEvent() methods. This enables connection-level events to be dispatched directly on the GATT server.

### Motivation

BluetoothRemoteGATTServer represents an active GATT connection and needs to host connection-level events. Making it an EventTarget gives web applications the standard event-listener API needed by events such as the separately proposed maxwritewithoutresponsesizechanged event.

## Ecosystem Status

- **Momentum:** Emerging (footprint 140 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Shipping enabled by default in Chromium and Microsoft Edge 157, this update updates the Web IDL specification so that BluetoothRemoteGATTServer inherits directly from EventTarget. This architectural refactoring provides standard connection-level event dispatching capabilities on active GATT connections, laying the necessary groundwork for incoming features such as the maxwritewithoutresponsesizechanged event. However, because Web Bluetooth remains exclusive to Chromium-based engines, the broader web platform reach of this change is strictly localized.

### Recommendations
- Actionable Advice: Teams maintaining Web Bluetooth applications in Chromium can leverage standard addEventListener calls on the GATT server for connection-level telemetry, but must guard implementations with progressive feature detection (such as checking whether addEventListener is a function on the GATT instance). Applications should also retain default 20-byte packet fallbacks until companion MTU change APIs roll out broadly across target Chromium releases.
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
- **Chrome usage:** 0.00001% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/105))
- **Mozilla:** negative ([standards position](https://github.com/mozilla/standards-positions/issues/95))

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5138797158334464?gate=6155787868176384) *(chromestatus.com)*
  > Recent developer resources, announcements, and tracking entries outline the Web Platform feature \*\*"Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget"\*\* \*\*What it does:\*\* Updates the Web IDL specification so that \`BluetoothRemoteGATTServer...
- [google.com](https://issuetracker.google.com/issues/572027347) *(issuetracker.google.com)*
  > \*\*Source:\*\* \*Google Issue Tracker / MDN Documentation Request (Issue #572027347)\* \*\*Details:\*\* Documentation teams tracked updating the MDN reference documentation for \`BluetoothRemoteGATTServer\` to reflect its new inheritance chain and to add guidan...
- [Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17833.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Rick Byers Wed, 21 Oct 202...
- [\[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17579.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Helmut Januschka Tue, 29 Sep 2026 ...
- [Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17633.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Philip Jägenstedt Thu, 01 ...
- [Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17603.html) *(mail-archive.com)*
  > &gt; &gt; \*Blink component\* &gt; Blink&gt;Bluetooth ... host connection-level events. &lt;strong&gt;Making it an EventTarget gives web &gt; applications the standard event-listener API needed by events such as the &gt; separately proposed maxwritewithoutre...
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=Intent+to+Ship) *(groups.google.com)*
  > Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget
- [blink-dev](https://www.mail-archive.com/blink-dev@chromium.org) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Prompt API Thinking Mode Chromestatus · \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Helmut Januschka
- [Chrome Release 157](https://chromestatuslite.com/?version=157) *(chromestatuslite.com)*
  > \[1\] https://github.com/w3c/css... # This feature was specified in this Spec. &lt;strong&gt;BluetoothRemoteGATTServer inherits from EventTarget, exposing the standard addEventListener(), removeEventListener(), and dispatchEvent() methods&lt;/strong&gt;....

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17833.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5138797158334464`)*
  > Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Rick Byers Wed, ...
- [\[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17579.html) *(mail-archive.com)* *(Cites: `https://github.com/WebBluetoothCG/web-bluetooth/pull/672`)*
  > \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Helmut Januschka Tue, 29...
- [Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17633.html) *(mail-archive.com)* *(Cites: `https://pr-preview.s3.amazonaws.com/hjanuschka/web-bluetooth/pull/672.html#bluetoothremotegattserver`)*
  > Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Philip Jägensted...

## 📚 Platform Documentation & Specifications

- [w3.org](https://lists.w3.org/Archives/Public/public-web-bluetooth-log/2026Aug/0009.html) *(lists.w3.org)*
- [Add BluetoothRemoteGATTServer.maxWriteWithoutResponseSize by hjanuschka · Pull Request #672 · whatwg/bluetooth](https://github.com/whatwg/bluetooth/pull/672) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 57 result(s) found across 12 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/5138797158334464" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/WebBluetoothCG/web-bluetooth/pull/672" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"pr-preview.s3.amazonaws.com/hjanuschka/web-bluetooth/pull/672.html" -site:pr-preview.s3.amazonaws.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget" API` — *Core feature API query* (2 returned)
  - `"Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"connection-level" OR "event-listener" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"BluetoothRemoteGATTServer" "addEventListener" ("maxwritewithoutresponsesizechanged" OR "connection")` — *Search for code snippets and implementation examples using event listeners on BluetoothRemoteGATTServer.* (8 returned)
  - `"Web Bluetooth" "BluetoothRemoteGATTServer" ("EventTarget" OR "addEventListener") guide OR tutorial` — *Discover developer guides and blog posts explaining GATT server connection-level event handling.* (6 returned)
  - `"BluetoothRemoteGATTServer" "EventTarget" ("Intent to Ship" OR "Intent to Prototype" OR "Chromium")` — *Track browser implementation status, release notes, and standardization announcements in Chromium.* (7 returned)
  - `site:github.com/WebBluetoothCG/web-bluetooth ("BluetoothRemoteGATTServer" AND "EventTarget") OR "pull/672"` — *Find specification discussion, design feedback, and consensus among the Web Bluetooth Community Group.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **3 verified relevant**
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
