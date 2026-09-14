# DeviceOrientation Events permission request API

> **Report Week:** 2026-W38 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Allows web developers to call Device{Motion,Orientation}Event.requestPermission() to ask the user agent for device orientation and motion data to be shared with the page. Those two static methods return a promise that resolves to either "granted" or "denied" based on whether the user has allowed the user agent to share sensor data with pages.

### Motivation

The new API was added to the Device Orientation spec in https://github.com/w3c/deviceorientation/pull/68 following security concerns raised in https://github.com/w3c/deviceorientation/issues/57.

## Ecosystem Status

- **Momentum:** High (260 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** DeviceOrientation Events permission request API is currently Enabled by default in Chrome 151. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @anssiko: "\`navigator.permissions.request()\` is specified in https://wicg.github.io/permissions-request/  @jyasskin probably knows the status of that work...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Add API for requesting permission to receive device motion / orientation events](https://github.com/w3c/deviceorientation/issues/57) [closed]
- **Mozilla:** [Device{Motion,Orientation}Event.requestPermission()](https://github.com/mozilla/standards-positions/issues/1428) [open]

## 📰 Ecosystem Blogs & Articles

- [Device Orientation and Motion](https://w3c.github.io/deviceorientation/spec-source-orientation.html) *(w3c.github.io)*
  > Device Orientation and Motion Device Orientation and Motion Editor’s Draft , 12 February 2025 More details about this document This version: https://w3c.github.io/deviceorientation/ Latest published version: https://www.w3.org/TR/orientation-event/ F...
- [Implement DeviceOrientation Events permission request API](https://issues.chromium.org/issues/40094424) *(issues.chromium.org)*
  > Sign in
- [DeviceOrientation Events permission request API](https://chromestatus.com/feature/5915984063889408) *(chromestatus.com · 2019-06-21T00:00:00)*
  > We cannot provide a description for this page right now
- [\[blink-dev\] Intent to Ship: DeviceOrientation Events permission request API](http://www.mail-archive.com/blink-dev@chromium.org/msg16783.html) *(mail-archive.com)*
  > Yes On the Android WebView, sensor access is always allowed, so this API will always return a promise that returns &quot;granted&quot;. Is this feature fully tested by web-platform-tests? Yes https://wpt.fyi/results/orientation-event/motion/requestPe...
- [\[blink-dev\] Re: Intent to Ship: DeviceOrientation Events permission request API](http://www.mail-archive.com/blink-dev@chromium.org/msg16848.html) *(mail-archive.com)*
  > *Is this feature fully tested by web-platform-tests &lt;https://chromium.googlesource.com/chromium/src/+/main/docs/testing/web_platform_tests.md&gt;?* Yes https://wpt.fyi/results/orientation-event/motion/requestPermission.https. window.html https://w...
- [Re: \[blink-dev\] Intent to Ship: DeviceOrientation Events permission request API](http://www.mail-archive.com/blink-dev@chromium.org/msg16805.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; *Is this feature fully tested by web-platform-tests &gt;&gt; &lt;https://chromium.googlesource.com/chromium/src/+/main/docs/testing/web_platform_tests.md&gt;?* &gt;&gt; Yes &gt;&gt; &gt;&gt; https://wpt.fyi/results/orientation-event...
- [Implement DeviceOrientation Events permission request API](https://bugs.chromium.org/p/chromium/issues/detail?id=947112) *(bugs.chromium.org · 2019-06-25T00:00:00)*
  > About Monorail User Guide Release Notes Feedback on Monorail Terms Privacy
- [How to requestPermission for devicemotion and deviceorientation events in iOS 13+ - DEV Community](https://dev.to/li/how-to-requestpermission-for-devicemotion-and-deviceorientation-events-in-ios-13-46g2) *(dev.to · 2019-09-18T14:54:08)*
  > function onClick() { // feature detect if (typeof DeviceMotionEvent.requestPermission === &#x27;function&#x27;) { DeviceMotionEvent.requestPermission() .then(permissionState =&gt; { if (permissionState === &#x27;granted&#x27;) { window.addEventListen...
- [Handling User Permissions in JavaScript \| CSS-Tricks](https://css-tricks.com/handling-user-permissions-in-javascript) *(css-tricks.com · 2021-03-17T13:53:22)*
  > So, you have been working on this new and fancy web application. Be it a recipe app, a document manager, or even your private cloud, you‘ve now reached the point of working with users and permissions. Take the document manager as an example: you don’...
- [Device Orientation PWA Demo](https://progressier.com/pwa-capabilities/device-orientation-event) *(progressier.com · 2026-08-31T06:18:16)*
  > <strong>With the DeviceOrientation JavaScript event, you can detect the orientation and motion of a device in three-dimensional space to create advanced interactive experiences in your PWAs</strong>.
- [Capabilities - PWA](https://web.dev/learn/pwa/capabilities) *(web.dev)*
  > Sensors gather real-time information from the accelerometer, gyroscope, magnetometer, and others using the Sensors API or older interfaces, such as DeviceMotionEvent and DeviceOrientationEvent.
- [GYRO-WEB: ACCESSING THE DEVICE ORIENTATION IN JAVASCRIPT - DEV Community](https://dev.to/trekhleb/gyro-web-accessing-the-device-orientation-in-javascript-2492) *(dev.to · 2021-03-15T13:18:18)*
  > And a lover of PWAs😍. Web Developer with an eye for design. Frontend Engineer @Sotaog ... You really are good. The cube example is just amazing. I&#x27;m definitely gonna try it. Thanks Oleksii :) ... Hello. Thank you for the article. I am faced wit...
- [What PWA Can Do Today](https://whatpwacando.today) *(whatpwacando.today)*
  > <strong>The DeviceOrientationEvent gives information about the physical orientation of the user&#x27;s device</strong>.
- [Making a 'post-it game' PWA with mobile accelerometer API's \| Trys Mudford](https://www.trysmudford.com/blog/heads-up) *(trysmudford.com)*
  > I looked into DeviceOrientation, an event on the window that emits the gyroscope position of the phone. But I initially struggled to get this hooked up.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Device Orientation and Motion](https://w3c.github.io/deviceorientation/spec-source-orientation.html) *(w3c.github.io)* *(Cites: `https://www.w3.org/TR/orientation-event/#dom-deviceorientationevent-requestpermission`)*
  > Device Orientation and Motion Device Orientation and Motion Editor’s Draft , 12 February 2025 More details about this document This version: https://w3c.github.io/deviceorientation/ Latest published version: https://www.w3.org/TR/orientatio...
- [deviceorientation/index.bs at main · w3c/deviceorientation](https://github.com/w3c/deviceorientation/blob/main/index.bs) *(github.com)* *(Cites: `https://w3c.github.io/deviceorientation/`)*
  > deviceorientation/index.bs at main · w3c/deviceorientation · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your se...

## 📚 Platform Documentation & Specifications

- [deviceorientation/index.bs at main · w3c/deviceorientation](https://github.com/w3c/deviceorientation/blob/main/index.bs) *(github.com)*
- [Event management website using html, css , javascript and bootstrap · GitHub](https://gist.github.com/Gagandeep41/335db634ebc439534a3ac719be81821d) *(gist.github.com)*
- [Notification: requestPermission() static method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Notification/requestPermission_static) *(developer.mozilla.org)*
- [Make dialog to call DeviceMotionEvent.requestPermission in iOS 13+ · Issue #4287 · aframevr/aframe](https://github.com/aframevr/aframe/issues/4287) *(github.com)*
- [Permissions API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API) *(developer.mozilla.org)*
- [event-website · GitHub Topics · GitHub](https://github.com/topics/event-website?o=asc&s=forks) *(github.com)*
- [Device orientation events](https://developer.mozilla.org/en-US/docs/Web/API/Device_orientation_events) *(developer.mozilla.org)*
- [DeviceOrientationEvent: requestPermission() static method](https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent/requestPermission_static) *(developer.mozilla.org)*
- [Detecting device orientation](https://developer.mozilla.org/en-US/docs/Web/API/Device_orientation_events/Detecting_device_orientation) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 37 result(s) found across 8 planned queries — **20 verified relevant**
  - `"chromestatus.com/feature/5915984063889408" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"www.w3.org/TR/orientation-event" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"w3c.github.io/deviceorientation" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"DeviceOrientation Events permission request API" API` — *Core feature API query* (6 returned)
  - `"DeviceOrientation Events permission request API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (4 returned)
  - `"event.requestpermission" OR "github.com" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"DeviceOrientation Events permission request API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"DeviceOrientation Events permission request API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (3 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **2 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 2 result(s) found — **1 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 1034 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5915984063889408)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5915984063889408)
- [Specification](https://w3c.github.io/deviceorientation/)
- [Chromium Tracking Bug](https://bugs.chromium.org/p/chromium/issues/detail?id=947112)
