# DeviceOrientation Events permission request API

> **Report Week:** 2026-W39 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Allows web developers to call Device{Motion,Orientation}Event.requestPermission() to ask the user agent for device orientation and motion data to be shared with the page. Those two static methods return a promise that resolves to either "granted" or "denied" based on whether the user has allowed the user agent to share sensor data with pages.

### Motivation

The new API was added to the Device Orientation spec in https://github.com/w3c/deviceorientation/pull/68 following security concerns raised in https://github.com/w3c/deviceorientation/issues/57.

## Ecosystem Status

- **Momentum:** High (540 points)
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

- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGUWedTHLToHARw7pJXAts3BS2AanC7WJ6fhXPzunLXjg_A45LJQMPGafntzOaThqJ5vMvm4RCOKpgPdejsezheKD0pRNQ6w8DKLlyrlRSKUMpQrk0BPg3PE9vCvFFuMKNUNs1XOMNJG8kVf68H_NvLzwtEWM7NoA-qXaNcLcv3zQ9w1m7tHSncmq7LCU7XDGStOZceJN8=) *(vertexaisearch.cloud.google.com)*
  > DeviceOrientationEvent: requestPermission() static method - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs DeviceOrientationEvent requestPermission() Theme OS default Light Dark English (US) Remember language Learn mor...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHWHAi0PvEf-acFYXxKs5cIhhpZ8G6RWS2489nJxVxLO3Nsm_yNMke9lU0FAZMfu0VXRJjUmrhK3P9hvbyvkcEbv7BSrNefIO4g7AnUN76y45HGPahAeUXhqw0dQVXdJQMq7DxBugshsczFByc1EhsYcAaPfUkkVyQ=) *(vertexaisearch.cloud.google.com)*
  > DeviceMotionEvent - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs DeviceMotionEvent Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Español Français 日本語 中文 (简体) DeviceMotionE...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFJ7A2E5jEF4Ny1X8sOoTHihZnfKUgLtEqsK3140qRRDKCwlDOB-GkReIceRvmMI1pfBTrgQsJbsNAqoT5VtRcgxIADZ0KOqoPe8iUtyB0EFgswOBYnvnf3bODlLvPwrthpyE8k4OdADZSMmq5TSu94IvtQnbCvvxqnnNeUFQ==) *(vertexaisearch.cloud.google.com)*
  > DeviceOrientationEvent - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs DeviceOrientationEvent Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 中文 (简体) DeviceOrien...
- [centrion.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGMKm_I3BRa3rXoCjfjFZyKXmf_hPrl_TyKD6KrEefNIq0pB1b8zeoBhWF4_Hpuj3MD4z7DCBwXbhbQC58myEZ9zP2ExsuLJSNLSsV-WicDP6i-nQl54T7O0gFiZZVgvNBp678Yoj-6czequrFF2nkj9akltZzdssXqcVYhMxCssfsL6d65tXNlVulkBr6p) *(vertexaisearch.cloud.google.com)*
  > DeviceMotionEvent: requestPermission() static method — MDN | Firefox Tomorrow Firefox Tomorrow Search Light MDN Web Docs API All technologies → web api static method DeviceMotionEvent: requestPermission() static method View on MDN ↗ Limited availabil...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFORK75ol9FRYwyIprIoJPiFtuX9c12L9ibGxcVgJQgp2QHX2DJuD9ASUgs4L1weySWiZepFFXvV7pG6XvDYF2dAbKnM2MJS3l-4HMz3IzrS4tCYxvA2vyLKHxo6PNLCIQk7RQLW2QNVGda7BV-gRfM5MyEY65apYQ=) *(vertexaisearch.cloud.google.com)*
  > Intent to Prototype: Implement requestPermission() for DeviceOrientationEvent and DeviceMotionEvent Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; In...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH6w3hnJqAswbLdXw-dQTP8US-x_yWSuUiLTdfAPBw699EA3pOeF7Nl9GR2Q2ABoy8q6wYlsVweUeOO5PNs5Uk0bw9Nj3Cd5UvqHULJJmfAfhkLQghSD-Q54bwp-RuePMULE_ZQBaB7) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGcNpzswBUkwxYTIkUUkaIqyQ5noUC2aoj3nkdMHGluw58vgrAE5jYT5VvPQqypChGIufbVgnvZP6Vl_c5GTxFjHn523l-SEVie7Ljqsa4CYqR3omOfu59JTI3s5hHyVLqluhGeGIHAOvaAXOkS9krAJq-vAkKr2HnelfMy0PLk2uowVc5IsDKzZ3-yV4OHffP3oWluRXZgnPE6CAm8C1ElS8TZladcg3ufATf-__W4KjU3IZudY6sD8YIK) *(vertexaisearch.cloud.google.com)*
  > content/files/en-us/web/api/device_orientation_events/detecting_device_orientation/index.md at main · mdn/content · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with ano...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEiRUsaKG2xAs5JJcjDnXrf11LgTv-pDP75b29e5CiUigjFPqOVCRIlt5EiZxuc1KiXgWHkHPw6lwrPD2GXatIQ1uvE94NV8qQvjtAsUBJYtKs3_cxo6AW_MiQp2ec-La3QKoamr0Dc) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGvgFPUlXYis8c2CMZJrIBkg4-eBBxoWqpEf9QPqZ5jolNwLgjpUs9NrxF3zd93IN9g2mHWFrWEaapBAPVC692pRU1S1ARn52ahmynkVYIebMa6DrvUUDESJJY=) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Feature  The **DeviceOrientation Events permission request API** introduces standardized static methods—`DeviceOrientationEvent.requestPermission()` and `DeviceMotionEvent.requestPermission()`—allowing web applications to request
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH8yGHxKncRZYznxigBWsu3WZTSO76aXYsCKL-2EZtlpJMpqsuAuCho4wlEEHxFme6FtqySgxs0gfZN-jfTVRURFpFwqThiMLIkucYQtA_pQEODh9K1wh6F_KbsdxUAEulPc7Yn) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Feature  The **DeviceOrientation Events permission request API** introduces standardized static methods—`DeviceOrientationEvent.requestPermission()` and `DeviceMotionEvent.requestPermission()`—allowing web applications to request
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFLnuS9IJbzrjP5ZaiLEFCQSY_6Qfb-jobrbw2BnpsswpLC0SWRjsnJZuiBUnjEVEEXEaedlYXJiG00_PwJH8HUM9TIz-jxhezUaRVJ30lfC8dBkzFs8nP19NXxfXuJWoIMsfAeLhasctEKpHtf8PevoZZ39U2FRb67E5xhlUMTHFC8EkeqZA==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Feature  The **DeviceOrientation Events permission request API** introduces standardized static methods—`DeviceOrientationEvent.requestPermission()` and `DeviceMotionEvent.requestPermission()`—allowing web applications to request
- [web.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEuNEnTH1JS5ITH92nQqAW9oGvaxvEqH0Wnd_uJn4q2G9X-KTNT-feql-CHSFoFMSbwFxrlqfa2MIoM-G0fiDuzone-COToYt1T7qxo8z2Sm3fgoUYhs0TgVpC8wTN9WVb5NwUf8kItOAw=) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Feature  The **DeviceOrientation Events permission request API** introduces standardized static methods—`DeviceOrientationEvent.requestPermission()` and `DeviceMotionEvent.requestPermission()`—allowing web applications to request
- [dev.to](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGDSC_JmpIYnAx_SsgWSP90SclXMO_mbjuSpdKE24DXAETB9aBp3oVvctgxjQaqYxNCOM_8HP8s8ObfhHclLYUWuQ5i1K698vhr8_KnKaAopWn84mkuNALlFVFmBldKcItuaYBFGZFT0uo6RndhY9VkcFoIw1O23MgKY2tcjseewCyDYThXR1aJcfk=) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Feature  The **DeviceOrientation Events permission request API** introduces standardized static methods—`DeviceOrientationEvent.requestPermission()` and `DeviceMotionEvent.requestPermission()`—allowing web applications to request
- [defold.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGu93CcJu4TBxovul9UzpkMFUSsTjlhVeYRkxmk67edtvwvYfeMxmv9nl-B45Cg0CRAA55zSsljJNx6EfU09DJJV6DGCaoku97xIuEQgCBX_Js4CVGwdgnLJpID6slDb_X3w8EBw4ZmYAJhb65WRugkivTBt3QEyN4qc-JWuniWZA7UXTGjMzF8F9DkfwypysZ-rhBTK1XYVkMS3w2nERY=) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Feature  The **DeviceOrientation Events permission request API** introduces standardized static methods—`DeviceOrientationEvent.requestPermission()` and `DeviceMotionEvent.requestPermission()`—allowing web applications to request
- [dev.to](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEX3Ua06zdiyycBtGdGIo4CrNPGZZivDAiwajtSuM2vUtMxszMZwpB-FLNl0j5yqNVngrFtGtk9fvN4whQng6Wr-S-qePBtifaY1KiGcKTZIVKd5pYMdX3FtALhE7QUtz8Cu08PGxs6gZZ_S_47ff2D2Mqy8EB6wI_uyWS39TMGCnkZGjcZqS56zmZNIReTwWH31WDTcG4t-VKt1LXT) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Feature  The **DeviceOrientation Events permission request API** introduces standardized static methods—`DeviceOrientationEvent.requestPermission()` and `DeviceMotionEvent.requestPermission()`—allowing web applications to request
- [stackoverflow.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFqxX0E0a1ZIQVOgCJImU376JqdE-NPdNlwH4ZJURxebzFhdB-Nc3kM8imAu2kCpUyTQk5-qR_KxaR9MWY4R1L7yJXIKI4olEVlJe3iNNKHXKSuY_G8ZC338SxxFdLs3c9w-tlhR8oMAaMBBKOt2IVFJN-3Jg8ZO4tu6aG6jEl-HCgAExsZb8lcgdyJRf66yOkumTGqjYhoZOoKk52H) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Feature  The **DeviceOrientation Events permission request API** introduces standardized static methods—`DeviceOrientationEvent.requestPermission()` and `DeviceMotionEvent.requestPermission()`—allowing web applications to request
- [Device Orientation and Motion](https://w3c.github.io/deviceorientation/spec-source-orientation.html) *(w3c.github.io)*
  > https://<strong>www.w3.org/TR/orientation-event</strong>/ Feedback: public-device-apis@w3.org with subject line “[orientation-event] … message topic …” (archives) Device Orientation and Motion Repository · Implementation Report: https://wpt.fyi/resul...
- [three.js - deviceorientation of javascript event is not firing in chrome android - Stack Overflow](https://stackoverflow.com/questions/57934416/deviceorientation-of-javascript-event-is-not-firing-in-chrome-android) *(stackoverflow.com)*
  > One of the comments above suggests that you must use https in order to make the deviceorientation events work. That is true by specification as I understand from here: https://<strong>w3c.github.io/deviceorientation</strong>/#security-and-privacy, bu...
- [Implement DeviceOrientation Events permission request API](https://issues.chromium.org/issues/40094424) *(issues.chromium.org)*
  > Sign in
- [DeviceOrientation Events permission request API](https://chromestatus.com/feature/5915984063889408) *(chromestatus.com · 2019-06-21T00:00:00)*
  > We cannot provide a description for this page right now
- [\[blink-dev\] Intent to Ship: DeviceOrientation Events permission request API](http://www.mail-archive.com/blink-dev@chromium.org/msg16783.html) *(mail-archive.com)*
  > Yes On the Android WebView, sensor access is always allowed, so this API will always return a promise that returns &quot;granted&quot;. Is this feature fully tested by web-platform-tests? Yes https://wpt.fyi/results/orientation-event/motion/requestPe...
- [Re: \[blink-dev\] Intent to Ship: DeviceOrientation Events permission request API](http://www.mail-archive.com/blink-dev@chromium.org/msg16805.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; *Is this feature fully tested by web-platform-tests &gt;&gt; &lt;https://chromium.googlesource.com/chromium/src/+/main/docs/testing/web_platform_tests.md&gt;?* &gt;&gt; Yes &gt;&gt; &gt;&gt; https://wpt.fyi/results/orientation-event...
- [\[blink-dev\] Re: Intent to Ship: DeviceOrientation Events permission request API](http://www.mail-archive.com/blink-dev@chromium.org/msg16848.html) *(mail-archive.com)*
  > *Is this feature fully tested by web-platform-tests &lt;https://chromium.googlesource.com/chromium/src/+/main/docs/testing/web_platform_tests.md&gt;?* Yes https://wpt.fyi/results/orientation-event/motion/requestPermission.https. window.html https://w...
- [Implement DeviceOrientation Events permission request API](https://bugs.chromium.org/p/chromium/issues/detail?id=947112) *(bugs.chromium.org · 2019-06-25T00:00:00)*
  > About Monorail User Guide Release Notes Feedback on Monorail Terms Privacy
- [How to requestPermission for devicemotion and deviceorientation events in iOS 13+ - DEV Community](https://dev.to/li/how-to-requestpermission-for-devicemotion-and-deviceorientation-events-in-ios-13-46g2) *(dev.to · 2019-09-18T14:54:08)*
  > function onClick() { // feature detect if (typeof DeviceMotionEvent.requestPermission === &#x27;function&#x27;) { DeviceMotionEvent.requestPermission() .then(permissionState =&gt; { if (permissionState === &#x27;granted&#x27;) { window.addEventListen...
- [Detecting device orientation with the JavaScript API - Desarrollolibre](https://www.desarrollolibre.net/blog/javascript/detecting-device-orientation-with-the-javascript-api) *(desarrollolibre.net · 2025-11-24T00:00:00)*
  > <strong>Learn how to use the DeviceOrientationEvent API to detect the orientation of a mobile device with JavaScript</strong>. Discover how to read the gyroscope&#x27;s alpha, beta, and gamma values ​​to rotate elements with CSS, request permissions ...
- [How do I get DeviceOrientationEvent and DeviceMotionEvent to work on Safari?](https://stackoverflow.com/questions/56514116/how-do-i-get-deviceorientationevent-and-devicemotionevent-to-work-on-safari) *(stackoverflow.com)*
  > <strong>You need a click or a user gesture to call the requestPermission().</strong> Like this : Copy&lt;script type=&quot;text/javascript&quot;&gt; function requestOrientationPermission(){ DeviceOrientationEvent.requestPermission() .then(response =&...
- [How to Request Device Motion and Orientation Permission in iOS 13 \| by Lee Martin \| Medium](https://leemartin.dev/how-to-request-device-motion-and-orientation-permission-in-ios-13-74fc9d6cd140?gi=e292bf9d2efe) *(leemartin.dev · 2019-12-06T18:56:43)*
  > DeviceMotionEvent.requestPermission() .then(response =&gt; { if (response == &#x27;granted&#x27;) { window.addEventListener(&#x27;devicemotion&#x27;, (e) =&gt; { // do something with e }) } }) .catch(console.error) ... DeviceOrientationEvent.requestP...
- [Intent to Prototype: Implement requestPermission() for DeviceOrientationEvent and DeviceMotionEvent](https://groups.google.com/a/chromium.org/g/blink-dev/c/j7sGtCBGaxA) *(groups.google.com)*
  > The larger plan is to: - <strong>Require requestPermission() before window</strong>.ondevice{motion,orientation} start dispatching events - Change the UI side to prompt for sensor access when necessary - Do the same as part of Sensor.start() (meaning...
- [r/CodingHelp on Reddit: DeviceOrientationEvent.requestPermission() denied](https://www.reddit.com/r/CodingHelp/comments/1i7lyyl/deviceorientationeventrequestpermission_denied) *(reddit.com · 2025-01-22T21:05:47)*
  > I have an HTML/JavaScript file that I want to test on my iPhone (iOS 18.0.1). When I use localhost to serve the file and try to access device motion or orientation data, it always responds with ‘Permission Denied.’ Here’s the code I am using. const b...
- [javascript - ios 13 DeviceOrientationEvent.requestPermission: how to force device to ask again for user permission - Stack Overflow](https://stackoverflow.com/questions/58084703/ios-13-deviceorientationevent-requestpermission-how-to-force-device-to-ask-agai) *(stackoverflow.com)*
  > if (DeviceOrientationEvent &amp;&amp; ... DeviceOrientationEvent.requestPermission(); <strong>if (permissionState === &quot;granted&quot;) { // Permission granted } else { // Permission denied } }</strong> javascript ·...
- [Understanding the Device Orientation API](https://blog.openreplay.com/understanding-device-orientation-api) *(blog.openreplay.com · 2025-09-16T00:00:00)*
  > const hasOrientationSupport = &#x27;DeviceOrientationEvent&#x27; in window const hasMotionSupport = &#x27;DeviceMotionEvent&#x27; in window // For iOS 13+ devices, check permission status if (typeof DeviceOrientationEvent.requestPermission === &#x27;...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [DeviceOrientation Events permission request API · Issue #1094 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1094) *(github.com · 2026-07-29T21:46:13)* *(Cites: `https://chromestatus.com/feature/5915984063889408`)*
  > https://<strong>chromestatus.com/feature/5915984063889408</strong> · Reactions are currently unavailable · Sign up for free to join this conversation on GitHub. Already have an account? Sign in to comment · rowan-m · new-featureprivacy · No...
- [Device Orientation and Motion](https://w3c.github.io/deviceorientation/spec-source-orientation.html) *(w3c.github.io)* *(Cites: `https://www.w3.org/TR/orientation-event/#dom-deviceorientationevent-requestpermission`)*
  > https://<strong>www.w3.org/TR/orientation-event</strong>/ Feedback: public-device-apis@w3.org with subject line “[orientation-event] … message topic …” (archives) Device Orientation and Motion Repository · Implementation Report: https://wpt...
- [Allow users to enable/disable site access to motion sensors · Issue #16385 · mozilla-mobile/fenix](https://github.com/mozilla-mobile/fenix/issues/16385) *(github.com · 2020-11-05T04:09:38)* *(Cites: `https://www.w3.org/TR/orientation-event/#dom-deviceorientationevent-requestpermission`)*
  > just for searchers, i&#x27;ll put this here: sensor data from mobile devices using deviceorientation and devicemotion events · edit: hmmm. https://bugs.chromium.org/p/chromium/issues/detail?id=947112 · https://<strong>www.w3.org/TR/orientat...
- [deviceorientation/index.bs at main · w3c/deviceorientation](https://github.com/w3c/deviceorientation/blob/main/index.bs) *(github.com)* *(Cites: `https://w3c.github.io/deviceorientation/`)*
  > ED: https://<strong>w3c.github.io/deviceorientation</strong>/ Repository: w3c/deviceorientation · Editor: Reilly Grant 83788, Google LLC https://www.google.com · Editor: Marcos Cáceres 39125, Apple Inc. https://www.apple.com · Former Editor...
- [compassneedscalibration event - cannot confirm interoperability · Issue #38 · w3c/deviceorientation](https://github.com/w3c/deviceorientation/issues/38) *(github.com · 2017-03-11T00:08:02)* *(Cites: `https://w3c.github.io/deviceorientation/`)*
  > Hello All, Re: https://<strong>w3c.github.io/deviceorientation</strong>/spec-source-orientation.html#compassneedscalibration W3C staff has not been able to find any conforming implementation beyond IE. At very leas...
- [three.js - deviceorientation of javascript event is not firing in chrome android - Stack Overflow](https://stackoverflow.com/questions/57934416/deviceorientation-of-javascript-event-is-not-firing-in-chrome-android) *(stackoverflow.com)* *(Cites: `https://w3c.github.io/deviceorientation/`)*
  > One of the comments above suggests that you must use https in order to make the deviceorientation events work. That is true by specification as I understand from here: https://<strong>w3c.github.io/deviceorientation</strong>/#security-and-p...
- [1073224 - deviceorientation returns incorrect data](https://bugzilla.mozilla.org/show_bug.cgi?id=1073224) *(bugzilla.mozilla.org)* *(Cites: `https://w3c.github.io/deviceorientation/`)*
  > The very first thing I do with the deviceorientation data is to turn it into a quaternion representation, so as long as the Euler angles are correct (even if they&#x27;re discontinuous), it should still work. ... I spent some more time play...

## 📚 Platform Documentation & Specifications

- [DeviceOrientation Events permission request API · Issue #1094 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1094) *(github.com)*
- [Allow users to enable/disable site access to motion sensors · Issue #16385 · mozilla-mobile/fenix](https://github.com/mozilla-mobile/fenix/issues/16385) *(github.com)*
- [deviceorientation/index.bs at main · w3c/deviceorientation](https://github.com/w3c/deviceorientation/blob/main/index.bs) *(github.com)*
- [compassneedscalibration event - cannot confirm interoperability · Issue #38 · w3c/deviceorientation](https://github.com/w3c/deviceorientation/issues/38) *(github.com)*
- [1073224 - deviceorientation returns incorrect data](https://bugzilla.mozilla.org/show_bug.cgi?id=1073224) *(bugzilla.mozilla.org)*
- [requestPermission.js · GitHub](https://gist.github.com/zlatkov/54535c87cfda64986d554d256021e0ad) *(gist.github.com)*
- [content/files/en-us/web/api/notification/requestpermission\_static/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/notification/requestpermission_static/index.md?plain=1) *(github.com)*
- [Event management website using html, css , javascript and bootstrap · GitHub](https://gist.github.com/Gagandeep41/335db634ebc439534a3ac719be81821d) *(gist.github.com)*
- [Notification: requestPermission() static method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Notification/requestPermission_static) *(developer.mozilla.org)*
- [Make dialog to call DeviceMotionEvent.requestPermission in iOS 13+ · Issue #4287 · aframevr/aframe](https://github.com/aframevr/aframe/issues/4287) *(github.com)*
- [Permissions API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API) *(developer.mozilla.org)*
- [Motion WP0: a hardware probe page for device orientation, permission and rates · Issue #169 · paulgibeault/paulgibeault.github.io](https://github.com/paulgibeault/paulgibeault.github.io/issues/169) *(github.com)*
- [Detecting device orientation - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Device_orientation_events/Detecting_device_orientation) *(developer.mozilla.org)*
- [DeviceOrientationEvent: requestPermission() static method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent/requestPermission_static) *(developer.mozilla.org)*
- [1536382 - Implement requestPermission() for DeviceOrientationEvent and DeviceMotionEvent](https://bugzilla.mozilla.org/show_bug.cgi?id=1536382) *(bugzilla.mozilla.org)*
- [DeviceOrientationEvent - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent) *(developer.mozilla.org)*
- [Add API for requesting permission to receive device motion / orientation events · Issue #57 · w3c/deviceorientation](https://github.com/w3c/deviceorientation/issues/57) *(github.com)*
- [Add permission request API by cdumez · Pull Request #68 · w3c/deviceorientation](https://github.com/w3c/deviceorientation/pull/68) *(github.com)*
- [requestPermission() and event handling clarification · Issue #74 · w3c/deviceorientation](https://github.com/w3c/deviceorientation/issues/74) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 55 result(s) found across 13 planned queries — **35 verified relevant**
  - `"chromestatus.com/feature/5915984063889408" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"www.w3.org/TR/orientation-event" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"w3c.github.io/deviceorientation" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"DeviceOrientation Events permission request API" API` — *Core feature API query* (7 returned)
  - `"DeviceOrientation Events permission request API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (4 returned)
  - `"event.requestpermission" OR "github.com" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"DeviceOrientation Events permission request API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"DeviceOrientation Events permission request API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (2 returned)
  - `"DeviceOrientationEvent.requestPermission" OR "DeviceMotionEvent.requestPermission" guide tutorial` — *Find practical developer guides and tutorials explaining how to request motion and orientation permissions.* (8 returned)
  - `"DeviceOrientationEvent.requestPermission()" "granted" "denied" example javascript` — *Discover concrete JavaScript code snippets and pattern implementations handling granted or denied permissions.* (8 returned)
  - `"DeviceOrientationEvent.requestPermission" (Safari OR Chrome OR Firefox) support status OR intent` — *Track browser vendor announcements, standardization progress, and adoption across Safari and Chromium engines.* (8 returned)
  - `site:github.com/w3c/deviceorientation issues "requestPermission" OR "user activation"` — *Uncover standards-level debates, security/privacy deliberations, and technical edge cases in the W3C working group repository.* (4 returned)
  - `"DeviceMotionEvent.requestPermission" iOS "user gesture" permission denied issue OR workaround` — *Find developer troubleshooting blogs and discussions concerning user gesture requirements and mobile browser compatibility.* (1 returned)
- **Google Search Grounding (gemini-3.8-flash):** 16 result(s) found — **16 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 2 result(s) found — **1 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 1038 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5915984063889408)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5915984063889408)
- [Specification](https://w3c.github.io/deviceorientation/)
- [Chromium Tracking Bug](https://bugs.chromium.org/p/chromium/issues/detail?id=947112)
