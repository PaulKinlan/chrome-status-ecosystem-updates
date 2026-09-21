# Support for specialized WebHID devices on Android

> **Report Week:** 2026-W39 | **Milestone:** Chrome 154 | **Category:** In developer trial (Behind a flag)

## Overview

WebHID now allows web applications to interact with a wider range of devices. Standard Human Interface Device (HID) examples include mice, keyboards, touchscreens, and gamepads. Those are accessible with high-level input events. However, specialized HID devices and features (for example, custom keyboards, game controllers, and call control headsets) require extended access.   WebHID allows web applications to request access, send and receive HID reports, and retrieve information about the report descriptor. This feature was previously launched on desktop platforms (Windows, macOS, Linux, and ChromeOS). Support on Android is planned for Chrome 157. To read more, see \[Connect to uncommon HID devices\](https://developer.chrome.com/docs/extensions/how-to/web-platform/webhid).  This feature can be controlled by the following enterprise policies:  \* \[DefaultWebHidGuardSetting\](https://chromeenterprise.google/policies/#DefaultWebHidGuardSetting) \* \[WebHidAllowAllDevicesForUrls\](https://chromeenterprise.google/policies/#WebHidAllowAllDevicesForUrls) \* \[WebHidAllowDevicesForUrls\](https://chromeenterprise.google/policies/#WebHidAllowDevicesForUrls) \* \[WebHidAllowDevicesWithHidUsagesForUrls\](https://chromeenterprise.google/policies/#WebHidAllowDevicesWithHidUsagesForUrls) \* \[WebHidAskForUrls\](https://chromeenterprise.google/policies/#WebHidAskForUrls) \* \[WebHidBlockedForUrls\](https://chromeenterprise.google/policies/#WebHidBlockedForUrls)

## Ecosystem Status

- **Momentum:** High (200 points)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Support for specialized WebHID devices on Android is currently In developer trial (Behind a flag) in Chrome 154. Verified ecosystem momentum is High with Contested / Concerns Raised standards alignment and mixed / skeptical developer pulse.

### Recommendations
- Non-Chromium browser vendors have raised architectural, security, or privacy considerations in standards position trackers.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Android (@Android) on X" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Android (@Android) on X](https://twitter.com/android) — *0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Intent to Prototype: WebHID on Android](https://groups.google.com/a/chromium.org/g/blink-dev/c/aEsVkIFFYPE) *(groups.google.com · 2026-08-13T00:00:00)*
  > Intent to Prototype: WebHID on Android Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: WebHID on Android 243 views Skip to first ...
- [Intent to Implement: WebHID (Human Interface Device)](https://groups.google.com/a/chromium.org/g/blink-dev/c/OaDCpCaEe_4/m/uZ0z7frlAAAJ]) *(groups.google.com)*
  > Intent to Implement: WebHID (Human Interface Device) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Implement: WebHID (Human Interface Devi...
- [\[blink-dev\] Re: Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17213.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Prototype: WebHID on Android Skip to site navigation (Press enter) [blink-dev] Re: Intent to Prototype: WebHID on Android Matt Reynolds Tue, 18 Aug 2026 12:47:09 -0700 Sure, let's upgrade this to Intent-to-Prototype-and-Ship...
- [Re: \[blink-dev\] Re: Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17251.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Prototype: WebHID on Android Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Prototype: WebHID on Android Chris Harrelson Fri, 21 Aug 2026 12:13:02 -0700 Yes, please update the Chromestatus entry to I...
- [\[blink-dev\] Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17170.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: WebHID on Android Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: WebHID on Android Matt Reynolds Thu, 13 Aug 2026 13:59:55 -0700 Contact emails [email&#160;protected] , [email&#160;protected] ,...
- [Intent to Experiment: WebHID (Human Interface Device)](https://groups.google.com/a/chromium.org/g/blink-dev/c/LoyzK8xTRME) *(groups.google.com)*
  > Intent to Experiment: WebHID (Human Interface Device) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: WebHID (Human Interface De...
- [Add hid to features.md · w3c/webappsec – Slacker News](https://slacker.ro/2021/07/20/add-hid-to-featuresmd-w3cwebappsec-permissions-policy-at-1065d2d) *(slacker.ro)*
  > | `hid` | [Explainer](https://<strong>github.com/WICG/webhid/blob/master/EXPLAINER.md</strong>) | In [Origin Trial](https://developers.chrome.com/origintrials/#/view_trial/1074108511127863297) in Chrome 85-87 |
- [Upcoming WebHID API - access Bluetooth/USB HID devices in web applications](https://blog.scottlogic.com/2019/04/03/upcoming-webhid-api.html) *(blog.scottlogic.com)*
  > <strong>The WebHID API will allow web applications to use human input/output devices connected via Bluetooth or USB</strong>. This post takes an early look at where it fits in, the possibilities enables, and how to use it.
- [HID - FAQ - Android - English](https://staticweb-origin.globalweb.aws.assaabloy.com/hid-faq-android-en/index.html) *(staticweb-origin.globalweb.aws.assaabloy.com)*
  > Tap functionality works similar to how an access card is used, by presenting the mobile device close to the reader. There is a tutorial for Tap in the Help menu. On Android devices you can Tap via NFC or Bluetooth Smart depending on your reader capab...
- [r/GeForceNOW on Reddit: Android browser with webHID](https://www.reddit.com/r/GeForceNOW/comments/1fe2vx9/android_browser_with_webhid) *(reddit.com · 2024-09-11T05:40:18)*
  > I tried latest version of Chrome , it didn&#x27;t work. I did a bit digging and it&#x27;s saying that WebHID is not available for Android yet.
- [Understanding WebHID and WebUSB: A Guide from Configur.io](https://blog.jonathanlau.io/posts/understanding-webhid-and-webusb-configur) *(blog.jonathanlau.io · 2024-07-07T00:00:00)*
  > This includes interacting with the bootloader of a device, such as uploading a .bin file. For the Hakkei Configurator, this allowed us to perform Device Firmware Updates (DFU) straight from your browser! But let&#x27;s clarify this further with a web...
- [Re: How to use Android as a HID device(Mouse/Keyboard/gamepad) using Bluetooth HID Profile for connect to PC/XBox/Wii ?](https://groups.google.com/g/android-platform/c/8Re-DxeOj54) *(groups.google.com)*
  > The solution proposed is not deriving a solution out of Android but using a ready-made HID compliant USB stick and render any USB hub supported device the needed Bluetooth capability · For this non-coding activity, anyone can buy those Bluetooth dong...
- [Chrome DevTools \| Chrome for Developers](https://developer.chrome.com/docs/devtools) *(developer.chrome.com)*
  > Track changes to HTML, CSS, and JavaScript. Log messages and run JavaScript. Evaluate website performance.
- [Chrome for Developers](https://developer.chrome.com) *(developer.chrome.com)*
  > Single-axis scroll containers, capability elements camera and microphone, and Joint Iteration in JavaScript. ... The resources you need to start building. ... Diagnose problems and edit source files quickly to build better, faster websites, directly ...
- [Google Chrome Developer Tools - Google Chrome](https://www.google.com/chrome/dev) *(google.com)*
  > Google Chrome for developers was built for the open web. Test cutting-edge web platform APIs and developer tools that are updated weekly.
- [User JavaScript and CSS - Chrome Web Store](https://chromewebstore.google.com/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld) *(chromewebstore.google.com)*
  > Ideal for developers and power users. ... Average rating 4.2 out of 5 stars. Learn more about results and reviews. Add Custom JavaScript (JS) Code or Styles (CSS) to any page.
- [Blog - What Are Google Chrome Developer Tools? (Updated 2026)](https://www.squareoneresources.com/blog/what-are-google-chrome-developer-tools-) *(squareoneresources.com)*
  > Within the developer tools, the Sources panel has several very useful features that make debugging and development much easier. ... View all resources loaded by the page, including HTML, CSS, JavaScript, images, fonts and media files
- [Explore New Chrome Enterprise Browser, Core, Premium Features](https://chromeenterprise.google/intl/cs_CZ/resources/release-notes) *(chromeenterprise.google · 2026-08-26T00:00:00)*
  > Those are accessible with high-level input events. However, specialized HID devices and features (for example, custom keyboards, game controllers, and call control headsets) <strong>require extended access</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: WebHID on Android](https://groups.google.com/a/chromium.org/g/blink-dev/c/aEsVkIFFYPE) *(groups.google.com · 2026-08-13T00:00:00)* *(Cites: `https://chromestatus.com/feature/5172464636133376`)*
  > Intent to Prototype: WebHID on Android Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: WebHID on Android 243 views Skip...
- [Intent to Implement: WebHID (Human Interface Device)](https://groups.google.com/a/chromium.org/g/blink-dev/c/OaDCpCaEe_4/m/uZ0z7frlAAAJ]) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5172464636133376`)*
  > Intent to Implement: WebHID (Human Interface Device) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Implement: WebHID (Human Inte...
- [\[blink-dev\] Re: Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17213.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > [blink-dev] Re: Intent to Prototype: WebHID on Android Skip to site navigation (Press enter) [blink-dev] Re: Intent to Prototype: WebHID on Android Matt Reynolds Tue, 18 Aug 2026 12:47:09 -0700 Sure, let's upgrade this to Intent-to-Prototyp...
- [Re: \[blink-dev\] Re: Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17251.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > Re: [blink-dev] Re: Intent to Prototype: WebHID on Android Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Prototype: WebHID on Android Chris Harrelson Fri, 21 Aug 2026 12:13:02 -0700 Yes, please update the Chromestatus ...
- [\[blink-dev\] Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17170.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > [blink-dev] Intent to Prototype: WebHID on Android Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: WebHID on Android Matt Reynolds Thu, 13 Aug 2026 13:59:55 -0700 Contact emails [email&#160;protected] , [email&#160;pr...
- [Intent to Experiment: WebHID (Human Interface Device)](https://groups.google.com/a/chromium.org/g/blink-dev/c/LoyzK8xTRME) *(groups.google.com)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > Intent to Experiment: WebHID (Human Interface Device) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: WebHID (Human In...
- [Add hid to features.md · w3c/webappsec – Slacker News](https://slacker.ro/2021/07/20/add-hid-to-featuresmd-w3cwebappsec-permissions-policy-at-1065d2d) *(slacker.ro)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > | `hid` | [Explainer](https://<strong>github.com/WICG/webhid/blob/master/EXPLAINER.md</strong>) | In [Origin Trial](https://developers.chrome.com/origintrials/#/view_trial/1074108511127863297) in Chrome 85-87 |
- [Add "WebHID" · Issue #5062 · Fyrd/caniuse](https://github.com/Fyrd/caniuse/issues/5062) *(github.com)* *(Cites: `https://wicg.github.io/webhid/index.html`)*
  > Add "WebHID" · Issue #5062 · Fyrd/caniuse · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You signed...
- [WebHID API (Human Interface Device) · Issue #370 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/370) *(github.com · 2019-05-03T23:26:56)* *(Cites: `https://wicg.github.io/webhid/index.html`)*
  > <strong>Specification URL: https://wicg.github.io/webhid/index.html</strong> · Explainer, Requirements Doc, or Example code: https://github.com/WICG/webhid/blob/gh-pages/EXPLAINER.md · Tests: none yet · Primary contacts: @nondebug · Further...

## 📚 Platform Documentation & Specifications

- [Add "WebHID" · Issue #5062 · Fyrd/caniuse](https://github.com/Fyrd/caniuse/issues/5062) *(github.com)*
- [WebHID API (Human Interface Device) · Issue #370 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/370) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 37 result(s) found across 8 planned queries — **20 verified relevant**
  - `"chromestatus.com/feature/5172464636133376" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/WICG/webhid/blob/master/EXPLAINER.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (6 returned)
  - `"wicg.github.io/webhid/index.html" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Support for specialized WebHID devices on Android" API` — *Core feature API query* (0 returned)
  - `"Support for specialized WebHID devices on Android" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (6 returned)
  - `"developer.chrome" OR "chromeenterprise.google" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Support for specialized WebHID devices on Android" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Support for specialized WebHID devices on Android" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 6 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 1206 item(s) inspected

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
