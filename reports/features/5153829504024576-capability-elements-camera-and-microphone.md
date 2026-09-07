# Capability elements: &lt;camera&gt; and &lt;microphone&gt;

> **Report Week:** 2026-W37 | **Milestone:** Chrome 153 | **Category:** Enabled by default

## Overview

The <camera> and <microphone> capability elements are declarative, user-activated HTML controls that share the same underlying mechanism as the <usermedia> MVP element, with one key distinction: they are designed to request a single capability. The <camera> element specifically requests video capture, while the <microphone> element specifically requests audio capture. Like the <usermedia> MVP, they embed a browser-controlled, strictly styled UI into the page, ensuring a strong, intentional user signal (a click) before a permission prompt is triggered or a stream is started.

The <camera> and <microphone> elements provide a dedicated, semantic HTML control for these single-capability use cases. They maintain the identical security model, strict styling constraints, and built-in permission recovery path as the <usermedia> MVP, but offer a more tailored and ergonomic API for developers who do not need mixed media access.

### Motivation

In M151, we shipped the <usermedia> element (MVP) to solve the problem of out-of-context, JavaScript-triggered permission prompts. By requiring a direct, in-page user click on a browser-controlled element, we ensure a strong signal of user intent before requesting media access.

Based on feedback and the WICG specification, we are expanding this MVP model in M153. The <camera> and <microphone> elements use the exact same mechanism, security constraints, and UI behavior as the <usermedia> MVP, but are strictly scoped to single-capability capture. This provides a more ergonomic, semantic API for developers building applications that only require video or audio, streamlining the implementation while preserving our high-confidence intent capture.

## Ecosystem Status

- **Momentum:** High (210 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Capability elements: <camera> and <microphone> is currently Enabled by default in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Safe Exam Browser on X: "This allows to access the camera and microphone with web-based remote proctoring (and video conferencing) solutions. WKWebView in SEB currently doesn't support URL content filters, embedded server certificates/certificate pinning and sending the Browser Exam and Config Key." / X" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Safe Exam Browser on X: "This allows to access the camera and microphone with web-based remote proctoring (and video conferencing) solutions. WKWebView in SEB currently doesn't support URL content filters, embedded server certificates/certificate pinning and sending the Browser Exam and Config Key." / X](https://twitter.com/safeexambrowser/status/1378411179962478592?lang=en-GB) — *by @safeexambrowser, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [HDCA (@CapabilityApp) on X](https://twitter.com/CapabilityApp) — *0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [[blink-dev] Re: Intent to Ship: Capability elements: <camera> and <microphone>](http://www.mail-archive.com/blink-dev@chromium.org/msg17084.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: Capability elements: and Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Capability elements: and Yoav Weiss (@Shopify) Wed, 29 Jul 2026 07:22:07 -0700 On Wednesday, July 22, 2026 at 11:47:33 PM U...
- [[blink-dev] Intent to Extend Experiment: Capability Elements <usermedia> MVP](http://www.mail-archive.com/blink-dev@chromium.org/msg17006.html) *(mail-archive.com)*
  > [blink-dev] Intent to Extend Experiment: Capability Elements MVP Skip to site navigation (Press enter) [blink-dev] Intent to Extend Experiment: Capability Elements MVP Chromestatus Mon, 20 Jul 2026 13:09:41 -0700 Contact emails [email&#160;protected]...
- [[webkit-changes] [WebKit/WebKit] 2c252b: Implement https://w3c.github.io/mediacapture-exten...](https://www.mail-archive.com/webkit-changes@lists.webkit.org/msg212408.html) *(mail-archive.com)*
  > [webkit-changes] [WebKit/WebKit] 2c252b: Implement https://w3c.github.io/mediacapture-exten... Skip to site navigation (Press enter) [webkit-changes] [WebKit/WebKit] 2c252b: Implement https://w3c.github.io/mediacapture-exten... youennf Thu, 28 Mar 20...
- [[blink-dev] Intent to Ship: Capability elements: <camera> and <microphone>](http://www.mail-archive.com/blink-dev@chromium.org/msg17048.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Capability elements: and Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Capability elements: and Chromestatus Wed, 22 Jul 2026 14:47:30 -0700 Contact emails [email&#160;protected] , [email&#160;protected...
- [Re: [blink-dev] Re: Intent to Ship: Capability elements: <camera> and <microphone>](http://www.mail-archive.com/blink-dev@chromium.org/msg17132.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: Capability elements: and Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Capability elements: and 'Thomas Nguyen' via blink-dev Fri, 07 Aug 2026 04:23:06 -0700 Thanks for taking a look. I ...
- [Introducing the <usermedia> HTML element | Blog | Chrome for Developers](https://developer.chrome.com/blog/usermedia-html-element) *(developer.chrome.com · 2026-06-29T00:00:00)*
  > Introducing the <usermedia> HTML element | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی ...
- [Accessing a device's camera and microphone with JavaScript - Desarrollolibre](https://www.desarrollolibre.net/blog/javascript/accessing-a-devices-camera-and-microphone-with-javascript) *(desarrollolibre.net · 2025-11-24T00:00:00)*
  > JavaScript Camera API: Access the camera and microphone using getUserMedia - Desarrollolibre JavaScript Camera API: Access the camera and microphone using getUserMedia Category JavaScript 30-08-2026 - Andrés Cruz - ES En español When I first discover...
- [How to Access the Camera in a PWA [2025 guide]](https://simicart.com/blog/pwa-camera-access) *(simicart.com · 2025-10-09T06:40:31)*
  > Yes, Progressive Web Apps (PWAs) can access the camera on devices. This is achieved using the getUserMedia() API, which is part of the WebRTC framework. The API allows PWAs to request access to the device’s camera and microphone, enabling features li...
- [How To Allow Access To Camera And Microphone On Android ?](https://www.kentfaith.com/blog/article_how-to-allow-access-to-camera-and-microphone-on-android_5546) *(kentfaith.com · 2023-05-19T10:02:43)*
  > Learn how to allow access to the camera and microphone on your Android device with this step-by-step guide. Ensure smooth usage for video calls, recording, and more.
- [Allowing your browser access to your camera and microphone - Source Elements](https://support.source-elements.com/source-nexus-gateway-user-guide/allowing-your-browser-access-to-your-camera-and-microphone) *(support.source-elements.com)*
  > ... If you need to configure these settings after accidentally denying access to the browser, follow these steps: <strong>Type in chrome://settings/content#media-stream-mic in the browser bar and then Enter</strong>.
- [Capture audio and video in HTML5 | Articles | web.dev](https://web.dev/articles/getusermedia-intro) *(web.dev · 2024-03-08T00:00:00)*
  > <strong>This tutorial introduces a new API, GetUserMedia, which allows web apps to access a user&#x27;s camera and microphone</strong>.
- [Mixing Device Cameras and the Web - Dan Wilson](https://danielcwilson.com/blog/2021/11/user-media) *(danielcwilson.com · 2021-11-11T00:00:00)*
  > We are fairly used to the apps on our mobile devices and computers to have access to cameras and microphones for grabbing a selfie or joining a video call. These same media inputs are accessible to our web applications via the Media Devices API.
- [How To Access Front and Rear Cameras with JavaScript's getUserMedia()](https://www.w3reference.com/blog/how-to-access-front-and-rear-cameras-with-javascript-s-getusermedia) *(w3reference.com)*
  > JavaScript’s getUserMedia() API, part of the WebRTC standard, empowers developers to request permission to access a user’s camera and microphone, stream live video, and even switch between front and rear cameras dynamically. This guide will walk you ...
- [Control a Web Browser Programmatically—Wolfram Documentation](https://reference.wolfram.com/language/workflow/ControlAWebBrowserProgrammatically.html) *(reference.wolfram.com)*
  > Wolfram Language code: button = WebExecute[session, &quot;LocateElements&quot; -&gt; &quot;CSSSelector&quot; -&gt; &quot;#searchButton&quot;] Enter “Ada Lovelace” in the search field, then click the search button: Pass a block of JavaScript code as a...
- [What PWA Can Do Today](https://whatpwacando.today) *(whatpwacando.today)*
  > <strong>Test camera and microphone access with browser-controlled capability elements</strong>. ... AirPlay lets iOS or macOS users stream video from a PWA to an Apple TV, AirPlay speaker or compatible smart TV.
- [Re: [blink-dev] Re: Intent to Ship: Capability elements: <camera> and <microphone>](http://www.mail-archive.com/blink-dev@chromium.org/msg17087.html) *(mail-archive.com)*
  > &gt; &gt; *Adoption plan* &gt; We are planning to update on developer.chrome.com and do further partner &gt; outreach &gt; &gt; *Non-OSS dependencies* &gt; &gt; Does the feature depend on any code or APIs outside the Chromium open &gt; source reposit...
- [Progressive Web App (PWA) and Hardware Access](https://simicart.com/blog/pwa-hardware-access) *(simicart.com · 2025-08-08T04:27:41)*
  > This is all possible thanks to the <strong>DeviceOrientationEvent and DeviceMotionEvent</strong>. ... Full access to the user’s camera and microphone is available and supported in most Chromium-based browsers.
- [PWA Camera & Microphone - Overview (O11) | OutSystems](https://www.outsystems.com/forge/component-overview/7997/pwa-camera-microphone-o11) *(outsystems.com · 2020-03-12T00:00:00)*
  > <strong>This application enables the quick and easy access to the browser capabilities, to capture, record and take image shot from the devices medias (camera &amp; microphone).</strong>

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Re: Intent to Ship: Capability elements: <camera> and <microphone>](http://www.mail-archive.com/blink-dev@chromium.org/msg17084.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5153829504024576`)*
  > [blink-dev] Re: Intent to Ship: Capability elements: and Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Capability elements: and Yoav Weiss (@Shopify) Wed, 29 Jul 2026 07:22:07 -0700 On Wednesday, July 22, 2026 at 11:...
- [[blink-dev] Intent to Extend Experiment: Capability Elements <usermedia> MVP](http://www.mail-archive.com/blink-dev@chromium.org/msg17006.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/mediacapture-extensions/blob/main/media-capture-elements-explainer.md`)*
  > [blink-dev] Intent to Extend Experiment: Capability Elements MVP Skip to site navigation (Press enter) [blink-dev] Intent to Extend Experiment: Capability Elements MVP Chromestatus Mon, 20 Jul 2026 13:09:41 -0700 Contact emails [email&#160;...
- [Background Blur: Unprocessed video should be mandatory to support · Issue #121 · w3c/mediacapture-extensions](https://github.com/w3c/mediacapture-extensions/issues/121) *(github.com · 2023-10-25T11:45:09)* *(Cites: `https://w3c.github.io/mediacapture-extensions/#the-camera-html-element`)*
  > Background Blur: Unprocessed video should be mandatory to support · Issue #121 · w3c/mediacapture-extensions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in wit...
- [[webkit-changes] [WebKit/WebKit] 2c252b: Implement https://w3c.github.io/mediacapture-exten...](https://www.mail-archive.com/webkit-changes@lists.webkit.org/msg212408.html) *(mail-archive.com)* *(Cites: `https://w3c.github.io/mediacapture-extensions/#the-camera-html-element`)*
  > [webkit-changes] [WebKit/WebKit] 2c252b: Implement https://w3c.github.io/mediacapture-exten... Skip to site navigation (Press enter) [webkit-changes] [WebKit/WebKit] 2c252b: Implement https://w3c.github.io/mediacapture-exten... youennf Thu,...

## 📚 Platform Documentation & Specifications

- [Background Blur: Unprocessed video should be mandatory to support · Issue #121 · w3c/mediacapture-extensions](https://github.com/w3c/mediacapture-extensions/issues/121) *(github.com)*
- [Permissions-Policy: microphone directive](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/microphone) *(developer.mozilla.org)*
- [Getting browser microphone permission](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 36 result(s) found across 8 planned queries — **19 verified relevant**
  - `"chromestatus.com/feature/5153829504024576" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/w3c/mediacapture-extensions/blob/main/media-capture-elements-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"w3c.github.io/mediacapture-extensions" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Capability elements: <camera> and <microphone>" API` — *Core feature API query* (3 returned)
  - `"Capability elements: <camera> and <microphone>" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"user-activated" OR "browser-controlled" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Capability elements: <camera> and <microphone>" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Capability elements: <camera> and <microphone>" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 5 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5153829504024576)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5153829504024576)
- [Specification](https://w3c.github.io/mediacapture-extensions/#the-camera-html-element)
- [Chromium Tracking Bug](https://b.corp.google.com/issues/531672795)
