# DeviceOrientation Events permission request API

> **Report Week:** 2026-W37 | **Milestone:** Chrome 150 | **Category:** In developer trial (Behind a flag)

## Overview

Allows web developers to call Device{Motion,Orientation}Event.requestPermission() to ask the user agent for device orientation and motion data to be shared with the page. Those two static methods return a promise that resolves to either "granted" or "denied" based on whether the user has allowed the user agent to share sensor data with pages.

### Motivation

The new API was added to the Device Orientation spec in https://github.com/w3c/deviceorientation/pull/68 following security concerns raised in https://github.com/w3c/deviceorientation/issues/57.

## Ecosystem Status

- **Momentum:** High (190 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** DeviceOrientation Events permission request API is currently In developer trial (Behind a flag) in Chrome 150. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Standards Activity (WebKit): Latest discussion from @anssiko: "`navigator.permissions.request()` is specified in https://wicg.github.io/permissions-request/  @jyasskin probably knows the status of that work...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Add API for requesting permission to receive device motion / orientation events](https://github.com/w3c/deviceorientation/issues/57) [closed]
- **Mozilla:** [Device{Motion,Orientation}Event.requestPermission()](https://github.com/mozilla/standards-positions/issues/1428) [open]

## 📰 Ecosystem Blogs & Articles

- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHC_A4YK85jWPlLsAMuMbo-TD_iGGKUnUqgZIbk0fnA2gO1bwlCATWhKhH6kkA3XRM5PCg12TXQA5J9lm9DLWqoNRCE2RvL2t1s8LklDEJpn0us89MrMbfX3Hqt2H_j4_8aobI6eVBu4fm4J2NyiJ9DDSUObi21QmYSsQMuWWz8Ysohno36rHcsneu3YF2RSM2P) *(vertexaisearch.cloud.google.com)*
  > DeviceMotionEvent: requestPermission() static method - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs DeviceMotionEvent requestPermission() Theme OS default Light Dark English (US) Remember language Learn more Deutsch ...
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEBXcS7k0mdsTiov6bhJtb0Pdi7DKwPtwS_F4v2IMxyeQAXEEPv4c_VFS8nou5DOoT2MwUqnlY9bMdAzkAili9e0wgFHm7zeVHwFpsIEUnMWG90uiv2K_Md0lQSZx_Q) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **DeviceOrientation Events Permission Request API** provides two static methods—`DeviceOrientationEvent.requestPermission()` and `DeviceMotionEvent.requestPermission()`—allowing web applications to request explicit use
- [stackoverflow.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEeQHIMxOAXQ3IehwFEzN2_deur0Jov8uVf7PshYZHvOyUYhr28rQd4GJDgEdL5YBdZl4jGwO1d6Xf6jYvraSn1B5v7ZZSbwLS2UIJ8W5zlQEJDKc0zMw6NrGre33lnq_9kxOmERqa4oIB9dmXaysPfLANSvjWeI5WkLMmz_Bq2Vgc2qdkB7JrD4yQeeKxtflRIwdKPeRwP4aMMmvjhjMjkYi2rIxu-XzHbI1cXki0=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **DeviceOrientation Events Permission Request API** provides two static methods—`DeviceOrientationEvent.requestPermission()` and `DeviceMotionEvent.requestPermission()`—allowing web applications to request explicit use
- [leemartin.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH-z-B6YRexJSTFguaMfrbAbIF42bjF89M05DOGphHXPS1ThlOuqS1q1M_FspjmuWrI9TkiW2QzBs8wV1obDw7KkDm8zwuzaAVv4XfDlXb8ElHlJfBE-QjwqCAYFmmGsdjf802u8YqJlxvmhOPWPk-0dUUXFD4FOrLwycjarOE1WGd0a4rnwhCATF-Z2lOqbD0LMwoIXu569N6J) *(vertexaisearch.cloud.google.com)*
  > Medium How to Request Device Motion and Orientation Permission in iOS 13 | by Lee Martin | Medium Sitemap Open in app Sign up Sign in Get app Write Search Sign up Sign in Lee Martin Netmaker. Playing the Internet in your favorite band for two decades...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHn6OoPBoZ1nwzWpxVFfR1sh-KIBaXiKf58Nov703zIVpf8fmSqHFYnEbxBn_HW2B7W4jDG7mWE8ayHoEYvam9kvqmf-Mr7rrlhsUy0B7r6wq-sKit79rKetWwx_QUpuIbBcE-AVeN9) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **DeviceOrientation Events Permission Request API** provides two static methods—`DeviceOrientationEvent.requestPermission()` and `DeviceMotionEvent.requestPermission()`—allowing web applications to request explicit use
- [dev.to](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHanz5nrQ_d2-Ml9siM3CYSVv75oB0FbJf5q7Du9DBa2VJ7zzv3VGf6ivGdFPjActuumnU-3PNL-vmPQBIpv1fnmjIB4IdBdkR3FdpxPIJLiWBdOUDSFNa9VCZOZzzpvCx545OU2num9Xg4ecGdoglQSybuUiyJwv-qlfSl9qkcv1bScf4qE9l5SHc=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **DeviceOrientation Events Permission Request API** provides two static methods—`DeviceOrientationEvent.requestPermission()` and `DeviceMotionEvent.requestPermission()`—allowing web applications to request explicit use
- [defold.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQElt0pv7lgVjCRF_EtN6pcFzEAVVGBxV_AQvZ_KCAc_usy6XZ1PKEcEfUwEeZ3pTh0bYVWdViV2hSCOcVlUcMFAHv4LMVevL36rfcejCabFAQTV-5O128oFV4FP8grd0J1Avb11TkO7Smf6j0neLguMXQTo5wIb3vgH7ELyD5xnesEXx58nHkK269KHGUDHHFgGbrmJhF3bYt4sbdUXXOA=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **DeviceOrientation Events Permission Request API** provides two static methods—`DeviceOrientationEvent.requestPermission()` and `DeviceMotionEvent.requestPermission()`—allowing web applications to request explicit use
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEgJbThORq4m4j3OApejBS0O0dRyVmzTYU7wKuWq2c05-CdZpwLJ1JkVKJ-ARAORoNe2TmGjok-SD-KZ_VVfplfWttClYtYY0-4n-4g_Ubpg2MUXawyDo7wLCsZnSYnKpMLZJlCIHo=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **DeviceOrientation Events Permission Request API** provides two static methods—`DeviceOrientationEvent.requestPermission()` and `DeviceMotionEvent.requestPermission()`—allowing web applications to request explicit use
- [dev.to](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFhcdqoENl42sf5trPYv8dIBCqL0Zp8j4fdXm1331pSH4AwyngtgUvEYICwoAsBTi1-oFRxAw7oLd1n-9VFGQaW1ABc0ED4psyLLKkhBjM8ZZaD4breyaHN7876d8phPIvLXg5ddGG70GoLrliVN0uvSX7CzEzaNYu40-3eaCTSpj3nzO12qsEIXgVYttgH43bgP_phEKHUdc4S1GbI) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **DeviceOrientation Events Permission Request API** provides two static methods—`DeviceOrientationEvent.requestPermission()` and `DeviceMotionEvent.requestPermission()`—allowing web applications to request explicit use
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=%22intent+to+ship%22) *(groups.google.com)*
  > d like to request other LGTMs as well: &gt;&gt; https://<strong>chromestatus.com/feature/5915984063889408</strong>?gate=6183183769403392 &gt;&gt; &gt;&gt; Friendly ping to API Owners &gt;unread,
- [DeviceOrientation Events permission request API](https://chromestatus.com/feature/5915984063889408) *(chromestatus.com · 2019-06-21T00:00:00)*
  > We cannot provide a description for this page right now
- [Implement DeviceOrientation Events permission request API](https://issues.chromium.org/issues/40094424) *(issues.chromium.org)*
  > Sign in
- [[blink-dev] Intent to Ship: DeviceOrientation Events permission request API](http://www.mail-archive.com/blink-dev@chromium.org/msg16783.html) *(mail-archive.com)*
  > Yes On the Android WebView, sensor access is always allowed, so this API will always return a promise that returns &quot;granted&quot;. Is this feature fully tested by web-platform-tests? Yes https://wpt.fyi/results/orientation-event/motion/requestPe...
- [Re: [blink-dev] Intent to Ship: DeviceOrientation Events permission request API](http://www.mail-archive.com/blink-dev@chromium.org/msg16805.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; *Is this feature fully tested by web-platform-tests &gt;&gt; &lt;https://chromium.googlesource.com/chromium/src/+/main/docs/testing/web_platform_tests.md&gt;?* &gt;&gt; Yes &gt;&gt; &gt;&gt; https://wpt.fyi/results/orientation-event...
- [[blink-dev] Re: Intent to Ship: DeviceOrientation Events permission request API](http://www.mail-archive.com/blink-dev@chromium.org/msg16848.html) *(mail-archive.com)*
  > *Is this feature fully tested by web-platform-tests &lt;https://chromium.googlesource.com/chromium/src/+/main/docs/testing/web_platform_tests.md&gt;?* Yes https://wpt.fyi/results/orientation-event/motion/requestPermission.https. window.html https://w...
- [How to requestPermission for devicemotion and deviceorientation events in iOS 13+ - DEV Community](https://dev.to/li/how-to-requestpermission-for-devicemotion-and-deviceorientation-events-in-ios-13-46g2) *(dev.to · 2019-09-18T14:54:08)*
  > function onClick() { // feature detect if (typeof DeviceMotionEvent.requestPermission === &#x27;function&#x27;) { DeviceMotionEvent.requestPermission() .then(permissionState =&gt; { if (permissionState === &#x27;granted&#x27;) { window.addEventListen...
- [Detecting device orientation with the JavaScript API - Desarrollolibre](https://www.desarrollolibre.net/blog/javascript/detecting-device-orientation-with-the-javascript-api) *(desarrollolibre.net · 2025-11-24T00:00:00)*
  > <strong>Learn how to use the DeviceOrientationEvent API to detect the orientation of a mobile device with JavaScript</strong>. Discover how to read the gyroscope&#x27;s alpha, beta, and gamma values ​​to rotate elements with CSS, request permissions ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=%22intent+to+ship%22) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5915984063889408`)*
  > d like to request other LGTMs as well: &gt;&gt; https://<strong>chromestatus.com/feature/5915984063889408</strong>?gate=6183183769403392 &gt;&gt; &gt;&gt; Friendly ping to API Owners &gt;unread,

## 📚 Platform Documentation & Specifications

- [Make dialog to call DeviceMotionEvent.requestPermission in iOS 13+ · Issue #4287 · aframevr/aframe](https://github.com/aframevr/aframe/issues/4287) *(github.com)*
- [DeviceOrientationEvent: requestPermission() static method](https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent/requestPermission_static) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 34 result(s) found across 8 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/5915984063889408" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"www.w3.org/TR/orientation-event" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"w3c.github.io/deviceorientation" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"DeviceOrientation Events permission request API" API` — *Core feature API query* (5 returned)
  - `"DeviceOrientation Events permission request API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (3 returned)
  - `"event.requestpermission" OR "github.com" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"DeviceOrientation Events permission request API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"DeviceOrientation Events permission request API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (3 returned)
- **Google Search Grounding (gemini-3.7-flash):** 13 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 2 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

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
