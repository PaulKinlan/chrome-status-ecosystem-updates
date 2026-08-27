# Support for specialized WebHID devices on Android

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** In developer trial (Behind a flag)

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

- **Momentum:** Emerging (30 points)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Support for specialized WebHID devices on Android is currently In developer trial (Behind a flag) in Chrome 154. Verified ecosystem momentum is Emerging with Contested / Concerns Raised standards alignment and mixed / skeptical developer pulse.

### Recommendations
- Standards Activity (Mozilla): Latest discussion from @scheib: "I'd like to address dmitriid@'s and beaufortfrancois@ comments with a personal opinion.  I work on Chrome adding these capabilities.  We do strive to ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **Mozilla:** [WebHID (Human Interface Device) API](https://github.com/mozilla/standards-positions/issues/459) [closed]

## 📚 Platform Documentation & Specifications

- [HID: getDevices() method](https://developer.mozilla.org/en-US/docs/Web/API/HID/getDevices) *(developer.mozilla.org)*
- [WebHID API](https://developer.mozilla.org/en-US/docs/Web/API/WebHID_API) *(developer.mozilla.org)*
- [HID](https://developer.mozilla.org/en-US/docs/Web/API/HID) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 0 result(s) found (query: `""Support for specialized WebHID devices on Android" API"`) — **0 verified relevant**
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 8 result(s) found (query: `"Support for specialized WebHID devices on Android"`) — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found (query: `"Support for specialized WebHID devices on Android"`) — **0 verified relevant**
- **Standards Positions:** 1 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 2147 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5172464636133376)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5172464636133376)
- [Specification](https://wicg.github.io/webhid/index.html)
- [Chromium Tracking Bug](http://crbug.com/40628009)
