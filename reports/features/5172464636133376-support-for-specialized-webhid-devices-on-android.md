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

- **Momentum:** High (260 points)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Support for specialized WebHID devices on Android is currently In developer trial (Behind a flag) in Chrome 154. Verified ecosystem momentum is High with Contested / Concerns Raised standards alignment and mixed / skeptical developer pulse.

### Recommendations
- Standards Activity (Mozilla): Latest discussion from @scheib: "I'd like to address dmitriid@'s and beaufortfrancois@ comments with a personal opinion.  I work on Chrome adding these capabilities.  We do strive to ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **Mozilla:** [WebHID (Human Interface Device) API](https://github.com/mozilla/standards-positions/issues/459) [closed]

## 📰 Ecosystem Blogs & Articles

- [Intent to Prototype: WebHID on Android](https://groups.google.com/a/chromium.org/g/blink-dev/c/aEsVkIFFYPE) *(groups.google.com · 2026-08-13T07:55:05)*
  > Intent to Prototype: WebHID on Android Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: WebHID on Android 177 views Skip to first ...
- [Intent to Implement: WebHID (Human Interface Device)](https://groups.google.com/a/chromium.org/g/blink-dev/c/OaDCpCaEe_4/m/uZ0z7frlAAAJ%5D) *(groups.google.com)*
  > Intent to Implement: WebHID (Human Interface Device) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Implement: WebHID (Human Interface Devi...
- [[blink-dev] Re: Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17213.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Prototype: WebHID on Android Skip to site navigation (Press enter) [blink-dev] Re: Intent to Prototype: WebHID on Android Matt Reynolds Tue, 18 Aug 2026 12:47:09 -0700 Sure, let's upgrade this to Intent-to-Prototype-and-Ship...
- [Intent to Experiment: WebHID (Human Interface Device)](https://groups.google.com/a/chromium.org/g/blink-dev/c/LoyzK8xTRME/m/yLR-K-siBQAJ) *(groups.google.com)*
  > Intent to Experiment: WebHID (Human Interface Device) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: WebHID (Human Interface De...
- [Add hid to features.md · w3c/webappsec – Slacker News](https://slacker.ro/2021/07/20/add-hid-to-featuresmd-w3cwebappsec-permissions-policy-at-1065d2d) *(slacker.ro)*
  > | `hid` | [Explainer](https://<strong>github.com/WICG/webhid/blob/master/EXPLAINER.md</strong>) | In [Origin Trial](https://developers.chrome.com/origintrials/#/view_trial/1074108511127863297) in Chrome 85-87 |
- [Connect to uncommon HID devices | Capabilities | Chrome for Developers](https://developer.chrome.com/docs/capabilities/hid) *(developer.chrome.com · 2020-09-15T00:00:00)*
  > <strong>The WebHID API is asynchronous by design to prevent the website UI from blocking when awaiting input</strong>. This is important because HID data can be received at any time, requiring a way to listen to it.
- [Unlocking the Future of Web Development: A Deep Dive into WebHID API — Full Stack Javascript Developer](https://fsjs.dev/unlock-future-web-development-webhid-api) *(fsjs.dev)*
  > // onConnect button click async function connect() { const devices = await navigator.hid.requestDevice({ filters: [] }); if (!devices.length) return; const device = devices[0]; await device.open(); device.addEventListener(&#x27;inputreport&#x27;, e =...
- [javascript - WebHID API: How do I parse data from inputReport event? - Stack Overflow](https://stackoverflow.com/questions/67013159/webhid-api-how-do-i-parse-data-from-inputreport-event) *(stackoverflow.com)*
  > Press the &quot;request device&quot; button.`); return; } if (devices.length &gt; 1) { page_log(`You have multiple devices.`); } device = devices[0]; page_log(`User previously selected &quot;${device.productName}&quot; HID device.`); page_log(`Now pr...
- [Building a device for WebUSB | Capabilities | Chrome for Developers](https://developer.chrome.com/docs/capabilities/build-for-webusb) *(developer.chrome.com · 2018-12-20T00:00:00)*
  > Many of the standard USB classes have corresponding web APIs. For example, a page can capture video from a video class device using getUserMedia() or receive input events from a human interface (HID) class device by listening for KeyboardEvents or Po...
- [Chrome 131 beta | Blog | Chrome for Developers](https://developer.chrome.com/blog/chrome-131-beta) *(developer.chrome.com)*
  > Enables WebHID inside dedicated worker contexts.
- [Chrome 131 | Release notes | Chrome for Developers](https://developer.chrome.com/release-notes/131) *(developer.chrome.com · 2024-11-12T00:00:00)*
  > Enables WebHID inside dedicated worker contexts.
- [WebView overview | Chrome for Developers](https://developer.chrome.com/docs/multidevice/webview) *(developer.chrome.com · 2024-12-18T00:00:00)*
  > Although WebView and Google Chrome share a package in Android 7, 8, and 9, they don&#x27;t share Google Chrome-specific features.
- [Downloads | ChromeDriver | Chrome for Developers](https://developer.chrome.com/docs/chromedriver/downloads) *(developer.chrome.com)*
  > BiDi: Updated ChromeDriver to use standard WebDriver BiDi extension properties with the goog: prefix, aligning with upstream chromium-bidi changes.
- [Mobile emulation | ChromeDriver | Chrome for Developers](https://developer.chrome.com/docs/chromedriver/mobile-emulation) *(developer.chrome.com · 2024-12-17T00:00:00)*
  > mobile_emulation = { &quot;deviceMetrics&quot; =&gt; { &quot;width&quot; =&gt; 360, &quot;height&quot; =&gt; 640, &quot;pixelRatio&quot; =&gt; 3.0 }, &quot;userAgent&quot; =&gt; &quot;Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 5 Build/JOP40D) Ap...
- [Get started with ChromeDriver | Chrome for Developers](https://developer.chrome.com/docs/chromedriver/get-started) *(developer.chrome.com)*
  > This page documents how to start ... You can also read Getting Started with Android or Getting Started with ChromeOS. ChromeDriver is a separate executable that Selenium WebDriver uses to control Chrome. It is maintained by the Chromium team with hel...
- [O que é o ChromeDriver? - Chrome for Developers](https://developer.chrome.com/docs/chromedriver) *(developer.chrome.com)*
  > It uses the ChromeOptions object to pass capabilities to ChromeDriver from the WebDriver API. Some Chromium-specific capabilities include the ability to install extensions, change window types, and pass command line arguments on startup. ChromeDriver...
- [Re: How to use Android as a HID device(Mouse/Keyboard/gamepad) using Bluetooth HID Profile for connect to PC/XBox/Wii ?](https://groups.google.com/g/android-platform/c/8Re-DxeOj54) *(groups.google.com)*
  > The solution proposed is not deriving a solution out of Android but using a ready-made HID compliant USB stick and render any USB hub supported device the needed Bluetooth capability · For this non-coding activity, anyone can buy those Bluetooth dong...
- [Game Controller KeyMapper is a free HID gamepad tester for Android](https://www.xda-developers.com/game-controller-keymapper-free-hid-gamepad-tester-android) *(xda-developers.com · 2018-10-20T19:00:00)*
  > <strong>Game Controller KeyMapper</strong> comes (formally known as Game Controller Test) lets you use a controller for games that weren&#x27;t initially designed for it.
- [Using game controllers and keyboards for custom shortcuts ⌘I Get Info](https://blog.gingerbeardman.com/2023/12/23/using-game-controllers-and-keyboards-for-custom-shortcuts) *(blog.gingerbeardman.com · 2023-12-23T00:00:00)*
  > The <strong>8Bitdo controller</strong> has a specific app for iOS/Android that can change its keyboard mappings. That’s cool for those mobile devices, and the iOS version will even run on an M1 Mac.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: WebHID on Android](https://groups.google.com/a/chromium.org/g/blink-dev/c/aEsVkIFFYPE) *(groups.google.com · 2026-08-13T07:55:05)* *(Cites: `https://chromestatus.com/feature/5172464636133376`)*
  > Intent to Prototype: WebHID on Android Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: WebHID on Android 177 views Skip...
- [Intent to Implement: WebHID (Human Interface Device)](https://groups.google.com/a/chromium.org/g/blink-dev/c/OaDCpCaEe_4/m/uZ0z7frlAAAJ%5D) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5172464636133376`)*
  > Intent to Implement: WebHID (Human Interface Device) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Implement: WebHID (Human Inte...
- [[blink-dev] Re: Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17213.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > [blink-dev] Re: Intent to Prototype: WebHID on Android Skip to site navigation (Press enter) [blink-dev] Re: Intent to Prototype: WebHID on Android Matt Reynolds Tue, 18 Aug 2026 12:47:09 -0700 Sure, let's upgrade this to Intent-to-Prototyp...
- [Intent to Experiment: WebHID (Human Interface Device)](https://groups.google.com/a/chromium.org/g/blink-dev/c/LoyzK8xTRME/m/yLR-K-siBQAJ) *(groups.google.com)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > Intent to Experiment: WebHID (Human Interface Device) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: WebHID (Human In...
- [Add hid to features.md · w3c/webappsec – Slacker News](https://slacker.ro/2021/07/20/add-hid-to-featuresmd-w3cwebappsec-permissions-policy-at-1065d2d) *(slacker.ro)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > | `hid` | [Explainer](https://<strong>github.com/WICG/webhid/blob/master/EXPLAINER.md</strong>) | In [Origin Trial](https://developers.chrome.com/origintrials/#/view_trial/1074108511127863297) in Chrome 85-87 |
- [Add "WebHID" · Issue #5062 · Fyrd/caniuse](https://github.com/Fyrd/caniuse/issues/5062) *(github.com)* *(Cites: `https://wicg.github.io/webhid/index.html`)*
  > Add "WebHID" · Issue #5062 · Fyrd/caniuse · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You signed...
- [WebHID API (Human Interface Device) · Issue #370 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/370) *(github.com · 2019-05-03T23:26:56)* *(Cites: `https://wicg.github.io/webhid/index.html`)*
  > WebHID API (Human Interface Device) · Issue #370 · w3ctag/design-reviews · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to r...

## 📚 Platform Documentation & Specifications

- [Add "WebHID" · Issue #5062 · Fyrd/caniuse](https://github.com/Fyrd/caniuse/issues/5062) *(github.com)*
- [WebHID API (Human Interface Device) · Issue #370 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/370) *(github.com)*
- [WebHID API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/WebHID_API) *(developer.mozilla.org)*
- [webhid/EXPLAINER.md at main · WICG/webhid](https://github.com/WICG/webhid/blob/main/EXPLAINER.md) *(github.com)*
- [HID: requestDevice() method - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/HID/requestDevice) *(developer.mozilla.org)*
- [HID: getDevices() method](https://developer.mozilla.org/en-US/docs/Web/API/HID/getDevices) *(developer.mozilla.org)*
- [HID](https://developer.mozilla.org/en-US/docs/Web/API/HID) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 36 result(s) found across 7 planned queries — **24 verified relevant**
  - `"chromestatus.com/feature/5172464636133376" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/WICG/webhid/blob/master/EXPLAINER.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"wicg.github.io/webhid/index.html" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"WebHID" ("tutorial" OR "guide") ("navigator.hid.requestDevice" OR "sendReport")` — *Finds practical developer guides and tutorials demonstrating how to connect and communicate with HID devices in JavaScript.* (8 returned)
  - `"navigator.hid" ("sendReport" OR "receiveFeatureReport" OR "inputreport") "JavaScript"` — *Locates real-world JavaScript code snippets and implementation patterns for sending/receiving HID reports and handling input events.* (8 returned)
  - `"WebHID" "Android" ("Chrome" OR "Chromium") (site:chromestatus.com OR site:developer.chrome.com OR site:github.com/WICG/webhid)` — *Tracks the official announcement, implementation progress, and roadmap of WebHID support coming to Chrome on Android.* (8 returned)
  - `"WebHID" ("Android" OR "mobile") ("headset" OR "gamepad" OR "custom keyboard" OR "controller")` — *Surfaces developer discussions, use cases, and feedback regarding specialized hardware interactions (telephony headsets, custom controllers) on mobile devices.* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 8 result(s) found — **19 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
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
