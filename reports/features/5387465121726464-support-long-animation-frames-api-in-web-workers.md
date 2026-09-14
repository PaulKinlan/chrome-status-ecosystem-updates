# Support Long Animation Frames API in Web Workers

> **Report Week:** 2026-W38 | **Milestone:** Chrome 153 | **Category:** In developer trial (Behind a flag)

## Overview

This feature extends the existing Long Animation Frames (LoAF) API to Web Workers. Today LoAF reports only on the main thread and is anchored to rendering frames, so it cannot observe work that blocks a worker's event loop. With this change, a long task that blocks a worker's event loop is reported as a long-animation-frame entry that is observable from inside the worker via PerformanceObserver, with the usual per-script attribution.  The prototype starts with dedicated workers, reporting a single long task that blocks the worker's event loop. The broader goal is to surface congested moments, intervals where an event loop remains busy and runnable work is delayed. This includes detecting a flood of many small tasks that keeps the event loop busy and reporting it as a long-animation-frame entry, as well as supporting the main thread. This is planned as follow-up work.

### Motivation

Web apps increasingly offload work to Web Workers, but a worker that blocks its own event loop is invisible to today's performance APIs. Workers usually have no rendering lifecycle, so there are no animation frames for LoAF to anchor to, and the main-thread LoAF and Long Tasks APIs cannot observe work running in a worker. As a result, a long task in a worker, which delays incoming message events and any OffscreenCanvas rendering, goes unreported even though it directly degrades responsiveness.

Rather than introduce a new API, we extend LoAF, because detecting a long animation frame and detecting a congested moment are fundamentally the same task: identifying bottlenecks in an event loop and attributing them to the responsible scripts. Reusing the existing API gives developers a single, familiar mechanism for diagnosing blocking work across both documents and workers.

## Ecosystem Status

- **Momentum:** High (280 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Support Long Animation Frames API in Web Workers is currently In developer trial (Behind a flag) in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEbnTQZvrQ6qc3EMCYHRp7jFCXH5A6U6PDsk6oR4N-akd5UII4qEfcCWSf9xxDQdACtKEzb66q0-I8zzA5y0xMzlJmI9jDGy-0WdZ0Ud3QBPz03PYqzYA_4pU0o2lyC5ZeyJzzL_vA=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHrwfgeUy0q9FaYvrZRBJQUSd00_v-84vt1YKS1zNs_QSVmgSHNUKK-W3nQHIkvaABDSeb_k8PxZTBpgzAzIH2Sj-1dR1eGo8LQMp-qyo3z-1nVa5-sxN6vC1QcIiDZf6_aDCcjHMZT7R7PJw==) *(vertexaisearch.cloud.google.com)*
  > Support Long Animation Frames API in Web Workers · Issue #38 · w3c/long-animation-frames · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reloa...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFDS3h90ID2SVpSUMuqOly-3zre_bPd5vv4yj2idOqsgdLyT-6bWCCImj1mAv3ja1bprD7RwAAiofN9yAlCPoyKxLXY2ya5miKFvfxoawQBrs9fMgqu2rVwTz-jxPpIDAHshhuzneTYY8iGNWI0lWgO6_TTNnQQjoG0) *(vertexaisearch.cloud.google.com)*
  > Long Animation Frames API | Web Platform | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी ব...
- [mintec.co](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE06JMyrJ3YG0iKB2Y96dJ-yl9h4f2HHrkBNASvx-vxbhTc-8JMatCS6BthIE-utDMRi29aMaNqq00gBPJzYt0e6etfqPH-mhsPq-cWas91dJbyuJDzT-GOS9ZkSInkrNRRSPX7GjlDiA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **Long Animation Frames (LoAF) API in Web Workers** addresses a long-standing observability gap in modern web performance tooling.   Historically, LoAF and the legacy Long Tasks API were constrained to the main thread.
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFerpAiRgnctzxpCKTPeXkVIKFFMtU26VkRAm-dF3xgBHlUTWpQv8mdo9HIc9kkFwhEhzr2TYh2Wqxr_AH-xX_apzH-FztRNX0AncKITME-DtzUMK3hn5OSiZ3p2uci7H-3N5C9wyAYMM7NSWY=) *(vertexaisearch.cloud.google.com)*
  > Support Long Animation Frames API in Web Workers · Issue #38 · w3c/long-animation-frames · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reloa...
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGSvC5q-Jq2MnmeRki0ZWKsivskOouJCXj13olnxSZpgvwIk5R2O7s6C6n-VGPHJDyHfDWNUMNYdDmW3H47a0I8EVCnVoXHe-FLMg-jYwWPBk6mrw3v3XYjEXVRZlwvZ-3-) *(vertexaisearch.cloud.google.com)*
  > Chromium Sign in
- [januschka.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEIonQHbY2Jy2wWMaVW3RUt3pLu3sB_sgtW257uFFwi2I4ipsdLjGS0zJvXVI625cl2CDBGuoyfzxS49oIsvS1-YTCo4iE0XQmmWJ1hrThPxMRTHL7AfVGFQmi06qIcWcXotYC9DPLDhTshMSB5rJt03VVr) *(vertexaisearch.cloud.google.com)*
  > Chrome M153 Features &laquo; all browsers / chromium / features / M153 Chrome M153 shipped Loading milestone data... Click a stat above to filter. Click again to clear. Loading M153.json...
- [searchenginezine.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGpwbaDz4zmJGtKhlVW8Ljez-VS-eJ6qlu7z3N86Tl7F-iCe210uLml6GqXGba34_i0TK7I7Mgo-qQwj7eBVe5buWFm8kGi5k5BCj6uq4GUvANdObbHjEkdT01yBoE00PvVnkt3ceSOsTxsF9-x_EHI-wZok6j0Ehxzj3_8) *(vertexaisearch.cloud.google.com)*
  > Mobile INP Optimization: Engineering Interaction To Next Paint Latency Reductions Skip to content Mobile INP Optimization: Engineering Interaction to Next Paint Latency Reductions 22.06.2026 Published: June 21, 2026 at 6:30 PM Pacific Time Last updat...
- [daily.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF9axIuNx3VbUBFv9NZUXHYyyaTAqaG0ziueOtS_VhfycVL0No1fXoAbM_knsvPxUk3s4X9UhGCitfMzrcTijlj3f7MljdnpERhbV_IKvZEvV8KSnQNSqZ2SR631gyfVhLj6rtF9xGMjq579wLVjuH7TnDAt7KPhLtZkeJBY4wfZmepW6eglqveMWvK6dXeszk0uVfyw6BURYDttwe6YW8=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **Long Animation Frames (LoAF) API in Web Workers** addresses a long-standing observability gap in modern web performance tooling.   Historically, LoAF and the legacy Long Tasks API were constrained to the main thread.
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGzAvR9jA0ZLJiG8zK6eIJvM6iDr-o1WGu5T6_JoaOZ9I1W1EN3elV-MkKpJWZ5S5YrhILIlXNYscwbWufth3yJwfr4mUOP0s9Zk4AXYZ023ZwWUUDEiOMQG8Uoa3-AMa0KOptJj_aRLZru7JJ5BFqrJZcBRFIetFgh2qGnjJNdnoMyigjQGd452KlbUmWZtx9G) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **Long Animation Frames (LoAF) API in Web Workers** addresses a long-standing observability gap in modern web performance tooling.   Historically, LoAF and the legacy Long Tasks API were constrained to the main thread.
- [\[blink-dev\] Intent to Prototype: Support Long Animation Frames API in Web Workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17008.html) *(mail-archive.com)*
  > Reusing the existing API gives developers a single, familiar mechanism for diagnosing blocking work across both documents and workers. Initial public proposal https://<strong>github.com/WICG/delayed-message-timing/blob/main/loaf-congested-moments/exp...
- [Improve Web Performance With requestAnimationFrame \| DebugBear](https://www.debugbear.com/blog/requestanimationframe) *(debugbear.com · 2026-04-17T15:15:10)*
  > Here&#x27;s an example of an INP interaction from the maplibre library. <strong>The Long Animation Frames API reports that a script is invoked through a FrameRequestCallback</strong>.
- [Long Animation Frames (LoAF): How to Use It To Improve INP](https://application-api.nitropack.io/blog/post/long-animation-frames) *(application-api.nitropack.io)*
  > Details about any user scripts processed during the time of the frame (e.g., callbacks, event handlers, promise resolvers). Gives a bird’s-eye-view: The LoAF API offers a more complete view of what&#x27;s happening on your website in terms of perform...
- [Mastering Browser Performance with JavaScript: My Journey into RequestAnimationFrame, Web Workers…](https://medium.com/data-science-collective/mastering-browser-performance-with-javascript-my-journey-into-requestanimationframe-web-workers-ae94cc8c68f5) *(medium.com · 2025-08-13T18:20:30)*
  > Discover how to supercharge your web apps with advanced JavaScript performance techniques. Learn how to use Web Workers, requestAnimationFrame, lazy rendering, and async patterns to create smooth, lag-free user experiences.
- [The Long Animation Frame API has now shipped \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/loaf-has-shipped) *(developer.chrome.com · 2024-06-24T00:00:00)*
  > The Long Animation Frame API (LoAF-pronounced Lo-Af) has shipped from Chrome 123 and we&#x27;ve now also updated our tooling and guidance to help you make the most of this new API. Version 4 of the web-vitals JavaScript library includes the long anim...
- [HTML - Web Workers API](https://www.tutorialspoint.com/html/html_web_workers_api.htm) *(tutorialspoint.com)*
  > Python TechnologiesDatabasesComputer ProgrammingWeb DevelopmentJava TechnologiesComputer ScienceMobile DevelopmentBig Data &amp; AnalyticsMicrosoft TechnologiesDevOpsLatest TechnologiesMachine LearningDigital MarketingSoftware QualityManagement Tutor...
- [SpeedCurve \| NEW! Monitor Long Animation Frames and get to the bottom of your JavaScript issues](https://www.speedcurve.com/blog/long-animation-frames-support) *(speedcurve.com · 2025-05-19T00:00:00)*
  > The introduction of the Long Animation Frames API (LoAF) not only gives us better methods for understanding what&#x27;s happening on the browser&#x27;s main thread, in some cases it also gives us attribution to both first- and third-party scripts tha...
- [HTML Web Workers API](https://www.w3schools.com/html/html5_webworkers.asp) *(w3schools.com)*
  > Web workers are useful for heavy code that can&#x27;t be run on the main thread, without causing long tasks that make the page unresponsive. <strong>The numbers in the table specify the first browser version that fully support the Web Workers API</st...
- [javascript - Controlling fps with requestAnimationFrame? - Stack Overflow](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe) *(stackoverflow.com)*
  > In your setInterval, update your math and create a little CSS script in a string. With your RAF loop, only use that script to update the new coordinates of your elements. Don&#x27;t do anything else in the RAF loop. The RAF is tied inherently to the ...
- [Long Animation Frames API \| Web Platform \| Chrome for Developers](https://developer.chrome.com/docs/web-platform/long-animation-frames) *(developer.chrome.com · 2024-10-14T00:00:00)*
  > To continue to support Chrome browsers using the origin trial, you may want to feature detect (for example, using &quot;invoker&quot; in PerformanceScriptTiming.prototype) or include a fallback (invoker = script.invoker || script.name). Where provide...
- [Frame by Frame Animation Tutorial with CSS and JavaScript — SitePoint](https://www.sitepoint.com/frame-by-frame-animation-css-javascript) *(sitepoint.com · 2024-11-13T19:30:48)*
  > Michael Romanov explains how you can build a frame by frame animation with just HTML, CSS and JavaScript which performs well and works great on all browsers
- [How to create Frame by Frame Animation using CSS and JavaScript ? \| GeeksforGeeks](https://www.geeksforgeeks.org/how-to-create-frame-by-frame-animation-using-css-and-javascript) *(geeksforgeeks.org · 2021-07-28T06:14:40)*
  > Now, in a more technical way, we ... frames to make the illusion of movement. We can <strong>use the JavaScript setInterval() method to create a frame-by-frame animation</strong>....
- [Intent to Ship: Long Animation Frame Timing](https://groups.google.com/a/chromium.org/g/blink-dev/c/5IzAuV4WtfU/m/ajbaoKf6BgAJ) *(groups.google.com)*
  > <strong>Shipping it in stable (with a minor API change that is underway) is already on track for wide adoption due to very positive response to origin trial</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: Support Long Animation Frames API in Web Workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17008.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/delayed-message-timing/blob/main/loaf-congested-moments/explainer.md`)*
  > Reusing the existing API gives developers a single, familiar mechanism for diagnosing blocking work across both documents and workers. Initial public proposal https://<strong>github.com/WICG/delayed-message-timing/blob/main/loaf-congested-m...

## 📚 Platform Documentation & Specifications

- [Long animation frame timing - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing) *(developer.mozilla.org)*
- [Window: requestAnimationFrame() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame) *(developer.mozilla.org)*
- [Using CSS animations - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Using) *(developer.mozilla.org)*
- [Animation performance and frame rate - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Animation_performance_and_frame_rate) *(developer.mozilla.org)*
- [Long Animation Frames API · Issue #1372 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1372) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 32 result(s) found across 7 planned queries — **18 verified relevant**
  - `"chromestatus.com/feature/5387465121726464" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WICG/delayed-message-timing/blob/main/loaf-congested-moments/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"Support Long Animation Frames API in Web Workers" API` — *Core feature API query* (1 returned)
  - `"Support Long Animation Frames API in Web Workers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"long-animation-frame" OR "per-script" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Support Long Animation Frames API in Web Workers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Support Long Animation Frames API in Web Workers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 172 item(s) inspected

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5387465121726464)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5387465121726464)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/534893134)
