# Support for specialized WebHID devices on Android

> **Report Week:** 2026-W36 | **Milestone:** Chrome 154 | **Category:** In developer trial (Behind a flag)

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

- **Momentum:** High (110 points)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** WebHID support on Android expands low-level communication with specialized Human Interface Devices (such as game controllers, custom keyboards, and enterprise headsets) beyond desktop platforms, currently in developer trial in Chrome 154. While this closes a long-standing mobile capability gap for Chromium-based browsers, it remains unstandardized across the broader web platform. Mozilla and WebKit remain firmly opposed to exposing direct hardware interfaces to web content over privacy, security, and fingerprinting concerns.

### Recommendations
- Actionable Advice: Use WebHID on Android strictly as a progressive enhancement gated by `'hid' in navigator` checks while experimenting with flag-enabled builds ahead of the planned Chrome 157 release. Always provide fallback flows or native companion paths for Safari, Firefox, and iOS environments.
- Standards Activity (Mozilla): Latest discussion from @scheib: "I'd like to address dmitriid@'s and beaufortfrancois@ comments with a personal opinion.  I work on Chrome adding these capabilities.  We do strive to ..."
- Community package available: [@devicefarmer/adbkit](https://www.npmjs.com/package/@devicefarmer/adbkit) (v3.3.9) for progressive enhancement.

## Standards Positions

- **Mozilla:** [WebHID (Human Interface Device) API](https://github.com/mozilla/standards-positions/issues/459) [closed]

## Packages & Polyfills

- [native-run](https://www.npmjs.com/package/native-run) `v2.0.3` — A CLI for running apps on iOS/Android devices and simulators/emulators
- [@devicefarmer/adbkit](https://www.npmjs.com/package/@devicefarmer/adbkit) `v3.3.9` — A Typescript client for the Android Debug Bridge.

## 📰 Ecosystem Blogs & Articles

- [Intent to Prototype: WebHID on Android](https://groups.google.com/a/chromium.org/g/blink-dev/c/aEsVkIFFYPE) *(groups.google.com · 2026-08-13T07:55:05)*
  > Intent to Prototype: WebHID on Android Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: WebHID on Android 180 views Skip to first ...
- [[blink-dev] Re: Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17213.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Prototype: WebHID on Android Skip to site navigation (Press enter) [blink-dev] Re: Intent to Prototype: WebHID on Android Matt Reynolds Tue, 18 Aug 2026 12:47:09 -0700 Sure, let's upgrade this to Intent-to-Prototype-and-Ship...
- [Connect to uncommon HID devices | Capabilities | Chrome for Developers](https://developer.chrome.com/docs/capabilities/hid) *(developer.chrome.com · 2020-09-15T00:00:00)*
  > For this, you can either <strong>prompt the user to select a device by calling navigator.hid.requestDevice(),</strong> or pick one from navigator.hid.getDevices() which returns a list of devices the website has been granted access to previously.
- [WebHID API](https://wicg.github.io/webhid) *(wicg.github.io · 2024-09-13T00:00:00)*
  > If document is null or document is not allowed to use the policy-controlled feature named &quot;hid&quot;, reject promise with a &quot;SecurityError&quot; DOMException and return promise. ... Let devices be an empty sequence of HIDDevice. ... If the ...
- [[blink-dev] Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17170.html) *(mail-archive.com)*
  > True Tracking bug http://crbug.com/40628009 Launch bug https://launch.corp.google.com/4459414 Estimated milestones Shipping on desktop 89 Origin trial desktop first 86 Origin trial desktop last 88 Shipping on Android 157 DevTrial on Android 154 Link ...
- [[blink-dev] Re: Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17195.html) *(mail-archive.com)*
  > On Thursday, August 13, 2026 at ... https://web.dev/hid-examples/ &gt; &gt; Summary &gt; &gt; <strong>Enables web applications to interact with human interface devices (HIDs) &gt; other than the standard supported devices (mice, keyboards, touchscree...
- [Re: [blink-dev] Re: Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17251.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; True &gt;&gt;&gt; &gt;&gt;&gt; Tracking bug ... &gt;&gt;&gt; &gt;&gt;&gt; Shipping on Android &gt;&gt;&gt; &gt;&gt;&gt; 157 &gt;&gt;&gt; &gt;&gt;&gt; DevTrial on Android &gt;&gt;&gt; &gt;&gt;&gt; 154 &gt;&gt;&gt; &gt;&gt;&gt...
- [WebHID: Browser Support, API, Limitations](https://www.testmuai.com/learning-hub/webhid-browser-support) *(testmuai.com · 2026-04-30T12:00:00)*
  > <strong>Chrome for Android, Firefox for Android, and the legacy stock Android Browser do not support WebHID</strong>. The Android USB and HID stacks limit raw device access to apps with the USB host permission, so the WebHID team has not shipped Andr...
- [r/GeForceNOW on Reddit: Android browser with webHID](https://www.reddit.com/r/GeForceNOW/comments/1fe2vx9/android_browser_with_webhid) *(reddit.com · 2024-09-11T05:40:18)*
  > What browser are you using? Try Chrome, it detects, and I am able to use my PS4 controller. ... I tried latest version of Chrome , it didn&#x27;t work. I did a bit digging and it&#x27;s saying that <strong>WebHID is not available for Android yet</str...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: WebHID on Android](https://groups.google.com/a/chromium.org/g/blink-dev/c/aEsVkIFFYPE) *(groups.google.com · 2026-08-13T07:55:05)* *(Cites: `https://chromestatus.com/feature/5172464636133376`)*
  > Intent to Prototype: WebHID on Android Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: WebHID on Android 180 views Skip...
- [[blink-dev] Re: Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17213.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > [blink-dev] Re: Intent to Prototype: WebHID on Android Skip to site navigation (Press enter) [blink-dev] Re: Intent to Prototype: WebHID on Android Matt Reynolds Tue, 18 Aug 2026 12:47:09 -0700 Sure, let's upgrade this to Intent-to-Prototyp...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 28 result(s) found across 7 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/5172464636133376" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/WICG/webhid/blob/master/EXPLAINER.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"wicg.github.io/webhid/index.html" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"WebHID" ("connect to uncommon HID devices" OR "specialized HID") tutorial "navigator.hid"` — *Finds tutorials and developer guides on implementing WebHID for non-standard or specialized hardware devices.* (0 returned)
  - `"navigator.hid.requestDevice" ("sendReport" OR "oninputreport") "HIDDevice"` — *Locates real-world JavaScript code snippets and API usage patterns for interacting with HID reports and devices.* (8 returned)
  - `Chrome "WebHID" "Android" ("intent to ship" OR "Chrome 157" OR "feature")` — *Searches for browser announcements, release notes, and tracking discussions regarding WebHID support on Android.* (6 returned)
  - `"WebHID" ("Android" OR "mobile") (headset OR "custom keyboard" OR controller) (site:github.com OR site:reddit.com OR site:news.ycombinator.com)` — *Discovers developer discussions, project implementations, and feedback on using WebHID with specialized peripheral devices on mobile platforms.* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 8 result(s) found — **9 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **2 verified relevant**
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
