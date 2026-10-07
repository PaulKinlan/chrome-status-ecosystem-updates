# Support for specialized WebHID devices on Android

> **Report Week:** 2026-W40 | **Milestone:** Chrome 154 | **Category:** In developer trial (Behind a flag)

## Overview

WebHID now allows web applications to interact with a wider range of devices. Standard Human Interface Device (HID) examples include mice, keyboards, touchscreens, and gamepads. Those are accessible with high-level input events. However, specialized HID devices and features (for example, custom keyboards, game controllers, and call control headsets) require extended access.   WebHID allows web applications to request access, send and receive HID reports, and retrieve information about the report descriptor. This feature was previously launched on desktop platforms (Windows, macOS, Linux, and ChromeOS). Support on Android is planned for Chrome 157. To read more, see \[Connect to uncommon HID devices\](https://developer.chrome.com/docs/extensions/how-to/web-platform/webhid).  This feature can be controlled by the following enterprise policies:  \* \[DefaultWebHidGuardSetting\](https://chromeenterprise.google/policies/#DefaultWebHidGuardSetting) \* \[WebHidAllowAllDevicesForUrls\](https://chromeenterprise.google/policies/#WebHidAllowAllDevicesForUrls) \* \[WebHidAllowDevicesForUrls\](https://chromeenterprise.google/policies/#WebHidAllowDevicesForUrls) \* \[WebHidAllowDevicesWithHidUsagesForUrls\](https://chromeenterprise.google/policies/#WebHidAllowDevicesWithHidUsagesForUrls) \* \[WebHidAskForUrls\](https://chromeenterprise.google/policies/#WebHidAskForUrls) \* \[WebHidBlockedForUrls\](https://chromeenterprise.google/policies/#WebHidBlockedForUrls)

## Ecosystem Status

- **Momentum:** High (160 points)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Support for specialized WebHID devices on Android is currently In developer trial (Behind a flag) in Chrome 154. Verified ecosystem momentum is High with Contested / Concerns Raised standards alignment and mixed / skeptical developer pulse.

### Recommendations
- Non-Chromium browser vendors have raised architectural, security, or privacy considerations in standards position trackers.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Intent to Prototype: WebHID on Android](https://groups.google.com/a/chromium.org/g/blink-dev/c/aEsVkIFFYPE) *(groups.google.com · 2026-08-13T00:00:00)*
  > Intent to Prototype: WebHID on Android Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: WebHID on Android 258 views Skip to first ...
- [\[blink-dev\] Re: Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17213.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Prototype: WebHID on Android Skip to site navigation (Press enter) [blink-dev] Re: Intent to Prototype: WebHID on Android Matt Reynolds Tue, 18 Aug 2026 12:47:09 -0700 Sure, let's upgrade this to Intent-to-Prototype-and-Ship...
- [Chrome Web Store - Developer Tools](https://chromewebstore.google.com/category/extensions/productivity/developer) *(chromewebstore.google.com)*
  > Angular DevTools extends Chrome DevTools adding Angular specific debugging and profiling capabilities. ... Average rating 4.2 out of 5 stars. Learn more about results and reviews. Show multiple screens once, Responsive design tester ... Average ratin...
- [WebHID API \| OpenPWA](https://openpwa.net/compatibility/web-hid) *(openpwa.net · 2026-09-02T00:00:00)*
  > WebHID API — <strong>The WebHID API lets a web app request access to non-standard Human Interface Devices via navigator.</strong>hid.requestDevice() and exchange input, output, and feature reports with them · Source: spec · MDN · Last verified 2026-0...
- [Explore New Chrome Enterprise Browser, Core, Premium Features](https://chromeenterprise.google/intl/en_us/resources/release-notes) *(chromeenterprise.google · 2026-09-09T00:00:00)*
  > Those are accessible with high-level input events. However, specialized HID devices and features (for example, custom keyboards, game controllers, and call control headsets) <strong>require extended access</strong>.
- [Capabilities - PWA](https://web.dev/learn/pwa/capabilities) *(web.dev)*
  > <strong>Human interface devices let your PWA interact with any kind of device prepared for human interaction that is uncommon, using the WebHID API</strong>.
- [Use WebHID \| Chrome Extensions \| Chrome for Developers](https://developer.chrome.com/docs/extensions/how-to/web-platform/webhid) *(developer.chrome.com · 2024-02-14T00:00:00)*
  > <strong>When the device is acquired it sends a message to the service worker, which can then retrieve the device using getDevices().</strong> ... myButton.addEventListener(&quot;click&quot;, async () =&gt; { await navigator.hid.requestDevice({ filter...
- [WebHID: Browser Support, API, Limitations](https://www.testmuai.com/learning-hub/webhid-browser-support) *(testmuai.com · 2026-04-30T12:00:00)*
  > No Chrome for Android or Samsung Internet: Mobile Chromium builds disable the WebHID feature. Android visitors get a silent undefined when the page reads navigator.hid. requestDevice must run on a user gesture: Chrome throws DOMException &quot;Must b...
- [WebHID in Chrome Extensions: Connect to Hardware ...](https://extensionbooster.net/blog/chrome-extension-webhid-hardware-devices-guide) *(extensionbooster.net · 2026-04-21T00:00:00)*
  > Requirements: Chrome 117+. No special manifest permissions needed. navigator.hid.requestDevice() <strong>cannot be called from a service worker - it requires a user gesture in a visible UI context</strong>.
- [Connect to uncommon HID devices \| Capabilities \| Chrome for Developers](https://developer.chrome.com/docs/capabilities/hid) *(developer.chrome.com · 2020-09-15T00:00:00)*
  > For this, you can either <strong>prompt the user to select a device by calling navigator.hid.requestDevice(),</strong> or pick one from navigator.hid.getDevices() which returns a list of devices the website has been granted access to previously.
- [Unlocking the Future of Web Development: A Deep Dive into WebHID API](https://fsjs.dev/unlock-future-web-development-webhid-api) *(fsjs.dev)*
  > // onConnect button click async function connect() { const devices = await navigator.hid.requestDevice({ filters: [] }); if (!devices.length) return; const device = devices[0]; await device.open(); device.addEventListener(&#x27;inputreport&#x27;, e =...
- [Enable WebHID on Android \[40628009\] - Chromium](https://issues.chromium.org/issues/40628009) *(issues.chromium.org)*
  > But unfortunately, Isolated Web Apps are not supported on Android. :( One way to implement WebHID on Android would be to use this API however this wouldn&#x27;t permit sharing the HID device with other applications the way WebHID does on other platfo...
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > WebHID allows web applications ... launched on desktop platforms (Windows, macOS, Linux, and ChromeOS). <strong>Support on Android is planned for Chrome 157</strong>....

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: WebHID on Android](https://groups.google.com/a/chromium.org/g/blink-dev/c/aEsVkIFFYPE) *(groups.google.com · 2026-08-13T00:00:00)* *(Cites: `https://chromestatus.com/feature/5172464636133376`)*
  > Intent to Prototype: WebHID on Android Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: WebHID on Android 258 views Skip...
- [\[blink-dev\] Re: Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17213.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > [blink-dev] Re: Intent to Prototype: WebHID on Android Skip to site navigation (Press enter) [blink-dev] Re: Intent to Prototype: WebHID on Android Matt Reynolds Tue, 18 Aug 2026 12:47:09 -0700 Sure, let's upgrade this to Intent-to-Prototyp...

## 📚 Platform Documentation & Specifications

- [Reconsider restricting access to HID devices using WebUSB API · Issue #198 · WICG/webusb](https://github.com/WICG/webusb/issues/198) *(github.com)*
- [WebHID API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/WebHID_API) *(developer.mozilla.org)*
- [HID: requestDevice() method - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/HID/requestDevice) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 76 result(s) found across 13 planned queries — **16 verified relevant**
  - `"chromestatus.com/feature/5172464636133376" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/WICG/webhid/blob/master/EXPLAINER.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"wicg.github.io/webhid/index.html" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Support for specialized WebHID devices on Android" API` — *Core feature API query* (0 returned)
  - `"Support for specialized WebHID devices on Android" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (7 returned)
  - `"developer.chrome" OR "chromeenterprise.google" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Support for specialized WebHID devices on Android" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Support for specialized WebHID devices on Android" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `navigator.hid.requestDevice Android "WebHID" (tutorial OR guide)` — *Find developer guides and tutorials demonstrating how to connect to specialized HID devices using WebHID on Android.* (8 returned)
  - `"navigator.hid.requestDevice" ("sendReport" OR "receiveFeatureReport" OR "oninputreport") example` — *Search for code snippets and practical API syntax showing how to exchange HID reports and handle device events with WebHID.* (8 returned)
  - `site:chromestatus.com OR site:issues.chromium.org "WebHID" Android` — *Track Chromium issue tickets, platform intent announcements, and implementation milestones for Android WebHID support.* (8 returned)
  - `"WebHID" Android (gamepad OR headset OR "custom keyboard") (site:github.com OR site:reddit.com)` — *Discover developer discussions and feedback on GitHub and Reddit regarding specialized hardware support via WebHID on Android devices.* (8 returned)
  - `"WebHID" ("WebHidAllowDevicesForUrls" OR "DefaultWebHidGuardSetting")` — *Locate enterprise deployment guides and policy documentation for controlling WebHID access across managed environments.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 1208 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5172464636133376)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5172464636133376)
- [Specification](https://wicg.github.io/webhid/index.html)
- [Chromium Tracking Bug](http://crbug.com/40628009)
