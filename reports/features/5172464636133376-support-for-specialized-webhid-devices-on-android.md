# Support for specialized WebHID devices on Android

> **Report Week:** 2026-W37 | **Milestone:** Chrome 154 | **Category:** In developer trial (Behind a flag)

## Overview

WebHID now allows web applications to interact with a wider range of devices. Standard Human Interface Device (HID) examples include mice, keyboards, touchscreens, and gamepads. Those are accessible with high-level input events. However, specialized HID devices and features (for example, custom keyboards, game controllers, and call control headsets) require extended access. 

WebHID allows web applications to request access, send and receive HID reports, and retrieve information about the report descriptor. This feature was previously launched on desktop platforms (Windows, macOS, Linux, and ChromeOS). Support on Android is planned for Chrome 157. To read more, see [Connect to uncommon HID devices](https://developer.chrome.com/docs/extensions/how-to/web-platform/webhid).

This feature can be controlled by the following enterprise policies: 
* [DefaultWebHidGuardSetting](https://chromeenterprise.google/policies/#DefaultWebHidGuardSetting)
* [WebHidAllowAllDevicesForUrls](https://chromeenterprise.google/policies/#WebHidAllowAllDevicesForUrls)
* [WebHidAllowDevicesForUrls](https://chromeenterprise.google/policies/#WebHidAllowDevicesForUrls)
* [WebHidAllowDevicesWithHidUsagesForUrls](https://chromeenterprise.google/policies/#WebHidAllowDevicesWithHidUsagesForUrls)
* [WebHidAskForUrls](https://chromeenterprise.google/policies/#WebHidAskForUrls)
* [WebHidBlockedForUrls](https://chromeenterprise.google/policies/#WebHidBlockedForUrls)

## Ecosystem Status

- **Momentum:** Moderate (60 points)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Support for specialized WebHID devices on Android is currently In developer trial (Behind a flag) in Chrome 154. Verified ecosystem momentum is Moderate with Contested / Concerns Raised standards alignment and mixed / skeptical developer pulse.

### Recommendations
- Standards Activity (Mozilla): Latest discussion from @scheib: "I'd like to address dmitriid@'s and beaufortfrancois@ comments with a personal opinion.  I work on Chrome adding these capabilities.  We do strive to ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **Mozilla:** [WebHID (Human Interface Device) API](https://github.com/mozilla/standards-positions/issues/459) [closed]

## Packages & Polyfills

- [@ledgerhq/hw-transport-webhid](https://www.npmjs.com/package/@ledgerhq/hw-transport-webhid) `v6.36.0` — Ledger Hardware Wallet WebHID implementation of the communication layer

## 📰 Ecosystem Blogs & Articles

- [Intent to Prototype: WebHID on Android](https://groups.google.com/a/chromium.org/g/blink-dev/c/aEsVkIFFYPE) *(groups.google.com · 2026-08-13T00:00:00)*
  > Intent to Prototype: WebHID on Android Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: WebHID on Android 205 views Skip to first ...
- [[blink-dev] Re: Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17213.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Prototype: WebHID on Android Skip to site navigation (Press enter) [blink-dev] Re: Intent to Prototype: WebHID on Android Matt Reynolds Tue, 18 Aug 2026 12:47:09 -0700 Sure, let's upgrade this to Intent-to-Prototype-and-Ship...
- [Re: [blink-dev] Re: Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17251.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Prototype: WebHID on Android Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Prototype: WebHID on Android Chris Harrelson Fri, 21 Aug 2026 12:13:02 -0700 Yes, please update the Chromestatus entry to I...
- [[blink-dev] Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17170.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: WebHID on Android Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: WebHID on Android Matt Reynolds Thu, 13 Aug 2026 13:59:55 -0700 Contact emails [email&#160;protected] , [email&#160;protected] ,...
- [r/GeForceNOW on Reddit: Android browser with webHID](https://www.reddit.com/r/GeForceNOW/comments/1fe2vx9/android_browser_with_webhid) *(reddit.com · 2024-09-11T05:40:18)*
  > I tried latest version of Chrome , it didn&#x27;t work. I did a bit digging and it&#x27;s saying that WebHID is not available for Android yet.
- [Explore New Chrome Enterprise Browser, Core, Premium Features](https://chromeenterprise.google/intl/cs_CZ/resources/release-notes) *(chromeenterprise.google · 2026-08-26T00:00:00)*
  > Those are accessible with high-level input events. However, specialized HID devices and features (for example, custom keyboards, game controllers, and call control headsets) <strong>require extended access</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: WebHID on Android](https://groups.google.com/a/chromium.org/g/blink-dev/c/aEsVkIFFYPE) *(groups.google.com · 2026-08-13T00:00:00)* *(Cites: `https://chromestatus.com/feature/5172464636133376`)*
  > Intent to Prototype: WebHID on Android Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: WebHID on Android 205 views Skip...
- [[blink-dev] Re: Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17213.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > [blink-dev] Re: Intent to Prototype: WebHID on Android Skip to site navigation (Press enter) [blink-dev] Re: Intent to Prototype: WebHID on Android Matt Reynolds Tue, 18 Aug 2026 12:47:09 -0700 Sure, let's upgrade this to Intent-to-Prototyp...
- [Re: [blink-dev] Re: Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17251.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > Re: [blink-dev] Re: Intent to Prototype: WebHID on Android Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Prototype: WebHID on Android Chris Harrelson Fri, 21 Aug 2026 12:13:02 -0700 Yes, please update the Chromestatus ...
- [[blink-dev] Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17170.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > [blink-dev] Intent to Prototype: WebHID on Android Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: WebHID on Android Matt Reynolds Thu, 13 Aug 2026 13:59:55 -0700 Contact emails [email&#160;protected] , [email&#160;pr...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 38 result(s) found across 8 planned queries — **6 verified relevant**
  - `"chromestatus.com/feature/5172464636133376" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/WICG/webhid/blob/master/EXPLAINER.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (6 returned)
  - `"wicg.github.io/webhid/index.html" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Support for specialized WebHID devices on Android" API` — *Core feature API query* (0 returned)
  - `"Support for specialized WebHID devices on Android" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (6 returned)
  - `"developer.chrome" OR "chromeenterprise.google" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Support for specialized WebHID devices on Android" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Support for specialized WebHID devices on Android" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 3 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **1 verified relevant**
- **Web Platform Tests (wpt.fyi):** 2147 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5172464636133376)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5172464636133376)
- [Specification](https://wicg.github.io/webhid/index.html)
- [Chromium Tracking Bug](http://crbug.com/40628009)
