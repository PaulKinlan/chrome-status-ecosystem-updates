# Support for WebHID (Human Interface Device)

> **Report Week:** 2026-W41 | **Milestone:** Chrome 154 | **Category:** In developer trial (Behind a flag)

## Overview

WebHID now allows web applications to interact with a wider range of devices. Standard Human Interface Device (HID) examples include mice, keyboards, touchscreens, and gamepads. Those are accessible with high-level input events. However, specialized HID devices and features (for example, custom keyboards, game controllers, and call control headsets) require extended access.   WebHID allows web applications to request access, send and receive HID reports, and retrieve information about the report descriptor. This feature was previously launched on desktop platforms (Windows, macOS, Linux, and ChromeOS). Support on Android is planned for Chrome 157. To read more, see \[Connect to uncommon HID devices\](https://developer.chrome.com/docs/extensions/how-to/web-platform/webhid).  This feature can be controlled by the following enterprise policies:  \* \[DefaultWebHidGuardSetting\](https://chromeenterprise.google/policies/#DefaultWebHidGuardSetting) \* \[WebHidAllowAllDevicesForUrls\](https://chromeenterprise.google/policies/#WebHidAllowAllDevicesForUrls) \* \[WebHidAllowDevicesForUrls\](https://chromeenterprise.google/policies/#WebHidAllowDevicesForUrls) \* \[WebHidAllowDevicesWithHidUsagesForUrls\](https://chromeenterprise.google/policies/#WebHidAllowDevicesWithHidUsagesForUrls) \* \[WebHidAskForUrls\](https://chromeenterprise.google/policies/#WebHidAskForUrls) \* \[WebHidBlockedForUrls\](https://chromeenterprise.google/policies/#WebHidBlockedForUrls)

## Ecosystem Status

- **Momentum:** High (525 points)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** WebHID provides low-level, bidirectional communication between web applications and specialized human interface devices, having launched on desktop platforms in Chrome 89 and now expanding to Android in developer trials (Chrome 154) ahead of a planned rollout. The API remains a unilateral Chromium initiative that is firmly non-Baseline due to sustained opposition from other browser vendors. While it has unlocked rich hardware configuration utilities directly in the browser, its cross-engine future is entirely blocked.

### Recommendations
- Actionable Advice: Treat WebHID strictly as a progressive enhancement behind runtime feature detection (\`'hid' in navigator\`) and provide dedicated native client fallbacks or WebAssembly/companion alternatives for Safari and Firefox users. Teams targeting mobile and auxiliary peripherals should begin testing Android support via developer flags in Chrome 154 before wider deployment.
- Standards Activity (Mozilla): Latest discussion from @scheib: "I'd like to address dmitriid@'s and beaufortfrancois@ comments with a personal opinion.  I work on Chrome adding these capabilities.  We do strive to ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "mr.niko.la (@diynikola) on X" (0 points, 0 comments).

## Standards Positions

- **Mozilla:** [WebHID (Human Interface Device) API](https://github.com/mozilla/standards-positions/issues/459) [closed]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [mr.niko.la (@diynikola) on X](https://twitter.com/diynikola/status/1148644168148955136) — *by @diynikola, 0 likes/RTs, 0 replies*

## Packages & Polyfills

- [@ledgerhq/hw-transport-webhid](https://www.npmjs.com/package/@ledgerhq/hw-transport-webhid) `v6.36.0` — Ledger Hardware Wallet WebHID implementation of the communication layer
- [@elgato-stream-deck/webhid](https://www.npmjs.com/package/@elgato-stream-deck/webhid) `v7.8.0` — An npm module for interfacing with the Elgato Stream Deck in the browser

## 📰 Ecosystem Blogs & Articles

- [dialpad.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGBWhI9-5yw7JPSaqqrAYdgigaIcApM0wMjOMb8HL_OyH7GRKsrE6ntTXzAZeiiIJFP0JlkmTuiElziYSpzAJ3Uc4vEJet3xQD1D3l0L67gVKm0JFwsieRUxcjT6IrkzChXECZ4z9mr1VROdhoIpOSiLtmTJ2NTaqZCwQrJjDGoMlEq3JeqKK1VOg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of WebHID  The **WebHID (Human Interface Device) API** allows web applications to communicate directly with auxiliary and non-standard HID peripherals—such as custom mechanical keyboards, exotic gamepads, presentation remotes, medical sen
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEwZQW1gxDwRToSaxguMAb2H7v5sIV6QPSqox1aQH3lCBiuji7Qbe6K2JYiveH6Is14o8-xNZ022oPXxqvid4hiJ89p3vA1ma-mucp9Exu4biFF7ELCMw57sdMAVZD-D-GlyZ8Sli0XWIvk5hUmK9Ai) *(vertexaisearch.cloud.google.com)*
  > HIDDevice - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs HIDDevice Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) 日本語 中文 (简体) HIDDevice Limited availability This feature is...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQExeHGqqXolNnQcoTvx2Z57K_W555GzU5iJuoapaP8fQaICo8xhqu-dNsRf_Kq0g35LV4uZ6BtLnk6UxLp_8NEWBB4Jam8AAxtjtVdRFrFyNe3rqBDL1ues6Ww6BfjisbeJOIwJGGTy3stC) *(vertexaisearch.cloud.google.com)*
  > ### Summary of WebHID  The **WebHID (Human Interface Device) API** allows web applications to communicate directly with auxiliary and non-standard HID peripherals—such as custom mechanical keyboards, exotic gamepads, presentation remotes, medical sen
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE_5gULUb9rqr6KAFmnLk8HEWRyqcYhy7LV4Bs55E-27tlNeoxDlHNlXvzD1VnL1tJQFvIWGrTnmTnZATGh1_SejhsfTAF3G-ZtHEofoRniR5mqSpq4HJRrJJ0v19djU_b-RL22E7JE0BpVDHdF16CPcEiWp7HoNkaWsoUk1Q==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of WebHID  The **WebHID (Human Interface Device) API** allows web applications to communicate directly with auxiliary and non-standard HID peripherals—such as custom mechanical keyboards, exotic gamepads, presentation remotes, medical sen
- [web.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGZdTGuVSvXa6UVIofiUsPYAImE9sbLKztgqZKdwN2-dRXRQLWangYDpJh_XjS-zmo00x6DLOdbVlaEsa0aj2wZgW1RYekso2VY0zGNSgcbc7qAv2G3ZZiTUdb1j_EPGQ==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of WebHID  The **WebHID (Human Interface Device) API** allows web applications to communicate directly with auxiliary and non-standard HID peripherals—such as custom mechanical keyboards, exotic gamepads, presentation remotes, medical sen
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEPIaESQIqPuOIw8xf7HAFZ95jQAGvmsFXl5C4qRF7zDhgoZpUzgq2Bbm6HxjfgJNO9kvzdlD4Q9EXupKAlDUhf-l2oNjYPgPlc5QyvSJPPU6MWcxOK-j3gIvFMWr6zGzulzkhGWY_mqSAa4OEvSOCP7SoLONxPm96hP2UyR7sIELd_COo=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of WebHID  The **WebHID (Human Interface Device) API** allows web applications to communicate directly with auxiliary and non-standard HID peripherals—such as custom mechanical keyboards, exotic gamepads, presentation remotes, medical sen
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGMlMNZk535ejVLsKRe7w5uMmDFNk0uX3iZQ__mGKSRV1zCwP_8MUT0fPLNS_gW3Tn1QHjugWuKWxEcVpAQYneFFNBHcr3TpGqHpsNyNMzSmmlq81ABXST26Jq-) *(vertexaisearch.cloud.google.com)*
  > ### Summary of WebHID  The **WebHID (Human Interface Device) API** allows web applications to communicate directly with auxiliary and non-standard HID peripherals—such as custom mechanical keyboards, exotic gamepads, presentation remotes, medical sen
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH0JPTvV6NXqel_zh0YyvKkjrjYUEeUvCOyA-f2dEXeA1WplSsct-_AY0BresHgF8DMSV43sMaJPd2_9yJnliWObMf_lolByLd7Ep30ypsZJvPlD0BrOgGNbEWCDjJK-26xTdUk0hhIvIjEWPzn0wMwemXqdQ==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of WebHID  The **WebHID (Human Interface Device) API** allows web applications to communicate directly with auxiliary and non-standard HID peripherals—such as custom mechanical keyboards, exotic gamepads, presentation remotes, medical sen
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE7fQG7a881qKDV2qGhkJu9PmX-pk61QzYZGIV0ifu4jB9BAYeNTN8CQaa_GKBLZn50iJff3KpEEmZssFEvTD5qo2vpeiFb8xX8w6-EBBPqnVzbzDbTFjLCJzp5J2BZOQ0l83SRat7jVymPkxjR4ozWWNx0N0thUOm8kog4) *(vertexaisearch.cloud.google.com)*
  > ### Summary of WebHID  The **WebHID (Human Interface Device) API** allows web applications to communicate directly with auxiliary and non-standard HID peripherals—such as custom mechanical keyboards, exotic gamepads, presentation remotes, medical sen
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQECzExhBmB8EV7FO6OyUUerOiXaVTBXZ9EZGvxbzCVIP8CfszAP_ZDLghqrSjn1w3LHxCCmGynRxOEmL5-Df7UnnycbuKGZKXhGIfaskQAbA7uHisKifxzVkOlyscf8Dl30JLV9PT7x0g8FI1VH4bFusaDoG6b6R3cprnCUllRjx4KpZpaUdBeoKPd51N8DzbI=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of WebHID  The **WebHID (Human Interface Device) API** allows web applications to communicate directly with auxiliary and non-standard HID peripherals—such as custom mechanical keyboards, exotic gamepads, presentation remotes, medical sen
- [web.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEaodkpZVHmMtDsHRWcQPlYuM_JFUPwMV1MoDZLFm-kKYZ2I4sjNmiupchDvm3QCDDDvZjavlcJBexxKdamyltCZ2gr16DhSlbc-qVIqXEcbof5eIirDpDLYNvBDobTAOpHZuKnRHWw) *(vertexaisearch.cloud.google.com)*
  > ### Summary of WebHID  The **WebHID (Human Interface Device) API** allows web applications to communicate directly with auxiliary and non-standard HID peripherals—such as custom mechanical keyboards, exotic gamepads, presentation remotes, medical sen
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHjOnWzwbOuSvRSVVzQQUw8RoNSTShUfV7ofizBpi9BDybX-EU_JHbCgiDU3vdENM4216jwAVH9pACzk5KxQll6LiJDc5CaXD8TTZ3GKZRDq8NgWSM=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of WebHID  The **WebHID (Human Interface Device) API** allows web applications to communicate directly with auxiliary and non-standard HID peripherals—such as custom mechanical keyboards, exotic gamepads, presentation remotes, medical sen
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEhg_1s-_2mYnrfSW7M5cB5Hyamo1yVl5Bp0_3hc9deBImQswEoI_p8QNmyehRWip3u6_hHBaCAP4KTYd6Cf_PX7pu217G_oOkwOwtvO1WHpgHqka4vDIYIMnPLk8arC2MQdZbY5GfiZwwXPYMmtP7-roO3OhMNG534DCx6uovbv0t_63be91zt7yrfRsj04FNWW_pMkRhn) *(vertexaisearch.cloud.google.com)*
  > ### Summary of WebHID  The **WebHID (Human Interface Device) API** allows web applications to communicate directly with auxiliary and non-standard HID peripherals—such as custom mechanical keyboards, exotic gamepads, presentation remotes, medical sen
- [testmuai.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF6vAkt5jw82jrzb7So0OVAD2lk8Z_RG3ysgL6316DhJOZcTQ2IJO_XsnxPaY3HQf4sLxE2OpV5NIzYhSEnVDNJMViW06Sq-xtaGvv_6whhXAR93vMldbvMhzwEBYXhWHmoiAYFkRQjv_waNQJNBSujNtI7) *(vertexaisearch.cloud.google.com)*
  > ### Summary of WebHID  The **WebHID (Human Interface Device) API** allows web applications to communicate directly with auxiliary and non-standard HID peripherals—such as custom mechanical keyboards, exotic gamepads, presentation remotes, medical sen
- [reddit.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGdeZ4KceAXvNuQ8DqRgrwh6MEiyyeoIkzKjYsvzdQOiC50l0potfvjijMH59AvGyhhB4iY2w6V7Pu3i3RltZ5GRTVP6ALhG7IgaRvvjH9d9KL0T3GI3l75UihatTIRmbkjWEDXopgplN1K-NTq8gBhMx-bHP5y9LjkOdZdBED-VzmwIeJOcO65AEXAnYuAmCDNTmhnVVzC7g==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of WebHID  The **WebHID (Human Interface Device) API** allows web applications to communicate directly with auxiliary and non-standard HID peripherals—such as custom mechanical keyboards, exotic gamepads, presentation remotes, medical sen
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHxw_d01hiw9bMs98uBLkmROfNoOwc5XWhW2u0A3VCf3Ero2f_0ZX9fGHpnu-wD6fzZfdeKeF61xkm9cpbs8NKye3g8lShf_j_xYusU9c8n5tLxbFawJSg0EStCZ8MulfmsU48rgxYleQd0f6IXAt_xsdG6KeeDerCQn7ztJ9a2AW0W2-FOaw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of WebHID  The **WebHID (Human Interface Device) API** allows web applications to communicate directly with auxiliary and non-standard HID peripherals—such as custom mechanical keyboards, exotic gamepads, presentation remotes, medical sen
- [Intent to Prototype: WebHID on Android](https://groups.google.com/a/chromium.org/g/blink-dev/c/aEsVkIFFYPE) *(groups.google.com · 2026-08-13T00:00:00)*
  > https://<strong>chromestatus.com/feature/5172464636133376</strong>?gate=5836123360722944 · Links to previous Intent discussions · Intent to Prototype (WebHID on desktop): https://groups.google.com/a/chromium.org/g/blink-dev/c/OaDCpCaEe_4/m/eRqOcJ_eCg...
- [\[blink-dev\] Re: Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17213.html) *(mail-archive.com)*
  > &gt; &gt; On Thursday, August 13, 2026 ... &gt;&gt; &gt;&gt; https://web.dev/hid/ &gt;&gt; &gt;&gt; https://web.dev/hid-examples/ &gt;&gt; &gt;&gt; Summary &gt;&gt; &gt;&gt; <strong>Enables web applications to interact with human interface devices (H...
- [\[blink-dev\] Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17170.html) *(mail-archive.com)*
  > Explainer https://github.com/WICG/webhid/blob/master/EXPLAINER.md Specification https://wicg.github.io/webhid/index.html Design docs https://web.dev/hid/ https://web.dev/hid-examples/ Summary <strong>Enables web applications to interact with human in...
- [Intent to Experiment: WebHID (Human Interface Device)](https://groups.google.com/a/chromium.org/g/blink-dev/c/LoyzK8xTRME) *(groups.google.com)*
  > Contact emails mattre...@chromium.org Explainer <strong>https://github.com/WICG/webhid/blob/master/EXPLAINER.md</strong> Design docs/spec Specification: https://wicg.github.io/webhid/index.html <strong>https://github.com/WICG/webhid/blob/master/EXPLA...
- [Add hid to features.md · w3c/webappsec – Slacker News](https://slacker.ro/2021/07/20/add-hid-to-featuresmd-w3cwebappsec-permissions-policy-at-1065d2d) *(slacker.ro)*
  > | `hid` | [Explainer](https://<strong>github.com/WICG/webhid/blob/master/EXPLAINER.md</strong>) | In [Origin Trial](https://developers.chrome.com/origintrials/#/view_trial/1074108511127863297) in Chrome 85-87 |
- [WebHID: Browser Support, API, Limitations](https://www.testmuai.com/learning-hub/webhid-browser-support) *(testmuai.com · 2026-04-30T12:00:00)*
  > <strong>This guide covers what WebHID is, which browsers ship it, the key API features, how to connect to an HID device, and the known issues to plan around</strong>. WebHID is a JavaScript API that gives a web page raw access to Human Interface Devi...
- [Understanding WebHID and WebUSB: A Guide from Configur.io](https://blog.jonathanlau.io/posts/understanding-webhid-and-webusb-configur) *(blog.jonathanlau.io · 2024-07-07T00:00:00)*
  > WebHID[^5] and WebUSB[^6] are two powerful APIs that allow web applications to interact with hardware devices when supported. While they both serve the purpose of enabling communication between web apps and hardware, they have different use cases and...
- [WebHID API - A Tour of Web Capabilities \| Master.dev](https://master.dev/courses/device-web-apis/webhid-api) *(master.dev)*
  > <strong>Max demonstrates how to use the Web Human Interface Device API, which is built on top of the widely adopted HID protocol</strong>. Permission is granted through a browser dialog and the API provides low-level …
- [Chrome for Developers](https://developer.chrome.com) *(developer.chrome.com)*
  > Customize the Chrome browsing experience using web technologies, such as HTML, CSS, and JavaScript.
- [Chrome DevTools \| Chrome for Developers](https://developer.chrome.com/docs/devtools) *(developer.chrome.com)*
  > Track changes to HTML, CSS, and JavaScript. Log messages and run JavaScript. Evaluate website performance.
- [User JavaScript and CSS - Chrome Web Store](https://chromewebstore.google.com/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld) *(chromewebstore.google.com)*
  > Ideal for developers and power users. ... Average rating 4.2 out of 5 stars. Learn more about results and reviews. Add Custom JavaScript (JS) Code or Styles (CSS) to any page.
- [Google Chrome Developer Tools - Google Chrome](https://www.google.com/chrome/dev) *(google.com)*
  > Google Chrome for developers was built for the open web. Test cutting-edge web platform APIs and developer tools that are updated weekly.
- [Chrome Web Store - Developer Tools](https://chromewebstore.google.com/category/extensions/productivity/developer) *(chromewebstore.google.com)*
  > Angular DevTools extends Chrome DevTools adding Angular specific debugging and profiling capabilities. ... Average rating 4.2 out of 5 stars. Learn more about results and reviews. Show multiple screens once, Responsive design tester ... Average ratin...
- [Google Chrome Developer Tools - Descargar](https://google-chrome-developer-tools.en.softonic.com) *(google-chrome-developer-tools.en.softonic.com · 2017-03-29T00:00:00)*
  > <strong>Google Chrome Developer Tools lets you edit web pages without the need for a separate tool</strong>. It boasts excellent features for inspecting and editing with a single DOM tree. The JavaScript Console also lets you log diagnostic informati...
- [Documentation \| Docs \| Chrome for Developers](https://developer.chrome.com/docs) *(developer.chrome.com)*
  > Web developer tools built directly into the Google Chrome browser.
- [WebHID API \| OpenPWA](https://openpwa.net/compatibility/web-hid) *(openpwa.net · 2026-09-02T00:00:00)*
  > WebHID API — <strong>The WebHID API lets a web app request access to non-standard Human Interface Devices via navigator.</strong>hid.requestDevice() and exchange input, output, and feature reports with them · Source: spec · MDN · Last verified 2026-0...
- [Capabilities \| web.dev](https://web.dev/learn/pwa/capabilities) *(web.dev)*
  > <strong>Human interface devices let your PWA interact with any kind of device prepared for human interaction that is uncommon, using the WebHID API</strong>.
- [Explore New Chrome Enterprise Browser, Core, Premium Features](https://chromeenterprise.google/intl/en_us/resources/release-notes) *(chromeenterprise.google · 2026-09-09T00:00:00)*
  > WebHID allows web applications ... launched on desktop platforms (Windows, macOS, Linux, and ChromeOS). <strong>Support on Android is planned for Chrome 157</strong>....
- [Progressive Web App (PWA) Development Ultimate Guide - Riseup Labs](https://riseuplabs.com/pwa-development-ultimate-guide) *(riseuplabs.com · 2025-12-10T05:24:22)*
  > By offering advantages for businesses, individuals, developers, and other stakeholders, PWAs represent a versatile and powerful solution for today’s digital needs. As more organizations recognize these benefits, the adoption of PWAs is likely to grow...
- [Use WebHID \| Chrome Extensions \| Chrome for Developers](https://developer.chrome.com/docs/extensions/how-to/web-platform/webhid) *(developer.chrome.com · 2024-02-14T00:00:00)*
  > <strong>When the device is acquired it sends a message to the service worker, which can then retrieve the device using getDevices().</strong> ... myButton.addEventListener(&quot;click&quot;, async () =&gt; { await navigator.hid.requestDevice({ filter...
- [Connect to uncommon HID devices \| Capabilities \| Chrome for Developers](https://developer.chrome.com/docs/capabilities/hid) *(developer.chrome.com · 2020-09-15T00:00:00)*
  > For this, you can either <strong>prompt the user to select a device by calling navigator.hid.requestDevice(),</strong> or pick one from navigator.hid.getDevices() which returns a list of devices the website has been granted access to previously.
- [Webhid device opened, but oninputreport listener is not work](https://stackoverflow.com/questions/76151141/webhid-device-opened-but-oninputreport-listener-is-not-work) *(stackoverflow.com)*
  > &lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt; &lt;meta charset=&quot;UTF-8&quot;&gt; &lt;title&gt;WebHID Example&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;h1&gt;WebHID Example&lt;/h1&gt; &lt;button id = &#x27;requestDevice&#x27; &gt;Open Device&...
- [HID API: Human Interface Device Access in JavaScript \| Web Development Guide \| Digital Thrive US](https://digitalthriveai.com/en-us/resources/docs/web-development/hid) *(digitalthriveai.com)*
  > class DeviceConnector { async connect(filters = []) { const devices = await navigator.hid.requestDevice({ filters }); if (devices.length === 0) return null; const device = devices[0]; await device.open(); device.oninputreport = (event) =&gt; this.han...
- [WebHID 手引書 \| webhid-api-ja](https://g200kg.github.io/webhid-api-ja/EXPLAINER.html) *(g200kg.github.io)*
  > interface HIDDevice { attribute EventHandler oninputreport; readonly attribute boolean opened; readonly attribute unsigned short vendorId; readonly attribute unsigned short productId; readonly attribute DOMString productName; readonly attribute Froze...
- [Intent to Experiment: WebHID (Human Interface Device)](https://groups.google.com/a/chromium.org/g/blink-dev/c/LoyzK8xTRME/m/WQLaGQ99CQAJ) *(groups.google.com)*
  > Ongoing technical constraints Will this feature be supported on all six Blink platforms (Windows, Mac, Linux, Chrome OS, Android, and Android WebView)? No Is this feature fully tested by web-platform-tests? No Link to entry on the Chrome Platform Sta...
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > WebHID allows web applications ... launched on desktop platforms (Windows, macOS, Linux, and ChromeOS). <strong>Support on Android is planned for Chrome 157</strong>....
- [Rediscovering the Schwartzian Transform: Why I Had to Comment on a Flutter Performance Article](https://dev.to/gde/rediscovering-the-schwartzian-transform-why-i-had-to-comment-on-a-flutter-performance-article-30l0) *(dev.to · Randal L. Schwartz · Oct 2)*
  > When a Flutter developer tackled a UI freeze sorting 10,000 timeline events, they unwittingly reinvented a 30-year-old computer science idiom. Here is how modern Dart 3 records turn the Schwartzian Transform into an elegant, 13x faster one-liner.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: WebHID on Android](https://groups.google.com/a/chromium.org/g/blink-dev/c/aEsVkIFFYPE) *(groups.google.com · 2026-08-13T00:00:00)* *(Cites: `https://chromestatus.com/feature/5172464636133376`)*
  > https://<strong>chromestatus.com/feature/5172464636133376</strong>?gate=5836123360722944 · Links to previous Intent discussions · Intent to Prototype (WebHID on desktop): https://groups.google.com/a/chromium.org/g/blink-dev/c/OaDCpCaEe_4/m/...
- [\[blink-dev\] Re: Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17213.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > &gt; &gt; On Thursday, August 13, 2026 ... &gt;&gt; &gt;&gt; https://web.dev/hid/ &gt;&gt; &gt;&gt; https://web.dev/hid-examples/ &gt;&gt; &gt;&gt; Summary &gt;&gt; &gt;&gt; <strong>Enables web applications to interact with human interface ...
- [\[blink-dev\] Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17170.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > Explainer https://github.com/WICG/webhid/blob/master/EXPLAINER.md Specification https://wicg.github.io/webhid/index.html Design docs https://web.dev/hid/ https://web.dev/hid-examples/ Summary <strong>Enables web applications to interact wit...
- [Intent to Experiment: WebHID (Human Interface Device)](https://groups.google.com/a/chromium.org/g/blink-dev/c/LoyzK8xTRME) *(groups.google.com)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > Contact emails mattre...@chromium.org Explainer <strong>https://github.com/WICG/webhid/blob/master/EXPLAINER.md</strong> Design docs/spec Specification: https://wicg.github.io/webhid/index.html <strong>https://github.com/WICG/webhid/blob/ma...
- [Add hid to features.md · w3c/webappsec – Slacker News](https://slacker.ro/2021/07/20/add-hid-to-featuresmd-w3cwebappsec-permissions-policy-at-1065d2d) *(slacker.ro)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > | `hid` | [Explainer](https://<strong>github.com/WICG/webhid/blob/master/EXPLAINER.md</strong>) | In [Origin Trial](https://developers.chrome.com/origintrials/#/view_trial/1074108511127863297) in Chrome 85-87 |
- [Add "WebHID" · Issue #5062 · Fyrd/caniuse](https://github.com/Fyrd/caniuse/issues/5062) *(github.com)* *(Cites: `https://wicg.github.io/webhid/index.html`)*
  > spec: https://github.com/WICG/webhid doc: https://<strong>wicg.github.io/webhid/index.html</strong> ·
- [WebHID API (Human Interface Device) · Issue #370 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/370) *(github.com · 2019-05-03T23:26:56)* *(Cites: `https://wicg.github.io/webhid/index.html`)*
  > <strong>Specification URL: https://wicg.github.io/webhid/index.html</strong> · Explainer, Requirements Doc, or Example code: https://github.com/WICG/webhid/blob/gh-pages/EXPLAINER.md · Tests: none yet · Primary contacts: @nondebug · Further...

## 📚 Platform Documentation & Specifications

- [Add "WebHID" · Issue #5062 · Fyrd/caniuse](https://github.com/Fyrd/caniuse/issues/5062) *(github.com)*
- [WebHID API (Human Interface Device) · Issue #370 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/370) *(github.com)*
- [GitHub - GoogleChrome/developer.chrome.com: The frontend, backend, and content source code for developer.chrome.com · GitHub](https://github.com/GoogleChrome/developer.chrome.com) *(github.com)*
- [WebHID API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/WebHID_API) *(developer.mozilla.org)*
- [HID: requestDevice() method - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/HID/requestDevice) *(developer.mozilla.org)*
- [HID](https://developer.mozilla.org/en-US/docs/Web/API/HID) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 58 result(s) found across 12 planned queries — **31 verified relevant**
  - `"chromestatus.com/feature/5172464636133376" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/WICG/webhid/blob/master/EXPLAINER.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (6 returned)
  - `"wicg.github.io/webhid/index.html" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Support for WebHID (Human Interface Device)" API` — *Core feature API query* (0 returned)
  - `"Support for WebHID (Human Interface Device)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (6 returned)
  - `"developer.chrome" OR "chromeenterprise.google" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Support for WebHID (Human Interface Device)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Support for WebHID (Human Interface Device)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
  - `"WebHID API" (tutorial OR guide) "navigator.hid.requestDevice"` — *Finds step-by-step developer tutorials and practical implementation guides for connecting to HID hardware via the browser.* (8 returned)
  - `navigator.hid.requestDevice ("sendReport" OR "oninputreport") example` — *Surfaces real-world JavaScript code snippets and syntax patterns demonstrating how to send and receive HID reports.* (8 returned)
  - `"WebHID" (Android OR "Chrome 157") (support OR intent OR status)` — *Tracks ecosystem announcements, platform rollout schedules, and device support plans for WebHID on mobile operating systems.* (8 returned)
  - `"WebHID" (site:news.ycombinator.com OR site:reddit.com) (security OR hardware OR headset)` — *Captures developer sentiment, security debates, and real-world hardware integration feedback across tech community forums.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 22 result(s) found — **16 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 7 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **2 verified relevant**
- **Web Platform Tests (wpt.fyi):** 1210 item(s) inspected

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
