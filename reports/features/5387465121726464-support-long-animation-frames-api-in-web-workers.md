# Support Long Animation Frames API in Web Workers

> **Report Week:** 2026-W37 | **Milestone:** Chrome 153 | **Category:** In developer trial (Behind a flag)

## Overview

This feature extends the existing Long Animation Frames (LoAF) API to Web Workers. Today LoAF reports only on the main thread and is anchored to rendering frames, so it cannot observe work that blocks a worker's event loop. With this change, a long task that blocks a worker's event loop is reported as a long-animation-frame entry that is observable from inside the worker via PerformanceObserver, with the usual per-script attribution.

The prototype starts with dedicated workers, reporting a single long task that blocks the worker's event loop. The broader goal is to surface congested moments, intervals where an event loop remains busy and runnable work is delayed. This includes detecting a flood of many small tasks that keeps the event loop busy and reporting it as a long-animation-frame entry, as well as supporting the main thread. This is planned as follow-up work.

### Motivation

Web apps increasingly offload work to Web Workers, but a worker that blocks its own event loop is invisible to today's performance APIs. Workers usually have no rendering lifecycle, so there are no animation frames for LoAF to anchor to, and the main-thread LoAF and Long Tasks APIs cannot observe work running in a worker. As a result, a long task in a worker, which delays incoming message events and any OffscreenCanvas rendering, goes unreported even though it directly degrades responsiveness.

Rather than introduce a new API, we extend LoAF, because detecting a long animation frame and detecting a congested moment are fundamentally the same task: identifying bottlenecks in an event loop and attributing them to the responsible scripts. Reusing the existing API gives developers a single, familiar mechanism for diagnosing blocking work across both documents and workers.

## Ecosystem Status

- **Momentum:** High (160 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Support Long Animation Frames API in Web Workers is currently In developer trial (Behind a flag) in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Barry Pollard" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Barry Pollard](https://twitter.com/tunetheweb/status/1694079281238843893) — *by @tunetheweb, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Matt Perry (@mattgperry) on X](https://twitter.com/mattgperry/status/1580937285280747521?lang=en) — *by @mattgperry, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Darin Senneff (@dsenneff) on X](https://twitter.com/dsenneff/status/1297931007803428870) — *by @dsenneff, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Ted Unangst on Twitter: ""Async animation disabled because frame size (3870, 250) is bigger than the viewport (1919, 1067)" That's one hell of a gif! (not really)"](https://twitter.com/tedunangst/status/651852813128089601) — *by @tedunangst, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Luke Wroblewski on Twitter: "UI animations & how to use them on the Web: http://t.co/FjfhsBVius my notes from @vlh talk at #bdconf"](https://twitter.com/lukew/status/494220657249374208) — *by @lukew, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [[blink-dev] Intent to Prototype: Support Long Animation Frames API in Web Workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17008.html) *(mail-archive.com)*
  > Reusing the existing API gives developers a single, familiar mechanism for diagnosing blocking work across both documents and workers. Initial public proposal https://<strong>github.com/WICG/delayed-message-timing/blob/main/loaf-congested-moments/exp...
- [Improve Web Performance With requestAnimationFrame | DebugBear](https://www.debugbear.com/blog/requestanimationframe) *(debugbear.com · 2026-04-17T15:15:10)*
  > Here&#x27;s an example of an INP interaction from the maplibre library. <strong>The Long Animation Frames API reports that a script is invoked through a FrameRequestCallback</strong>.
- [Long Animation Frames (LoAF): How to Use It To Improve INP](https://nitropack.io/blog/post/long-animation-frames) *(nitropack.io · 2024-06-07T00:00:00)*
  > Reduced bounce rates: Long animation frames can frustrate users, especially when they lead to janky animations or unresponsive pages. The LoAF API helps reduce user frustration by identifying and rectifying these issues. A website that performs well ...
- [Mastering Browser Performance with JavaScript: My Journey into RequestAnimationFrame, Web Workers…](https://medium.com/data-science-collective/mastering-browser-performance-with-javascript-my-journey-into-requestanimationframe-web-workers-ae94cc8c68f5) *(medium.com · 2025-08-13T18:20:30)*
  > Discover how to supercharge your web apps with advanced JavaScript performance techniques. Learn how to use Web Workers, requestAnimationFrame, lazy rendering, and async patterns to create smooth, lag-free user experiences.
- [SpeedCurve | NEW! Monitor Long Animation Frames and get to the bottom of your JavaScript issues](https://www.speedcurve.com/blog/long-animation-frames-support) *(speedcurve.com · 2025-05-19T00:00:00)*
  > The introduction of the Long Animation Frames API (LoAF) not only gives us better methods for understanding what&#x27;s happening on the browser&#x27;s main thread, in some cases it also gives us attribution to both first- and third-party scripts tha...
- [The Long Animation Frame API has now shipped | Blog | Chrome for Developers](https://developer.chrome.com/blog/loaf-has-shipped) *(developer.chrome.com · 2024-06-24T00:00:00)*
  > The Long Animation Frame API (LoAF-pronounced Lo-Af) has shipped from Chrome 123 and we&#x27;ve now also updated our tooling and guidance to help you make the most of this new API. Version 4 of the web-vitals JavaScript library includes the long anim...
- [HTML - Web Workers API](https://www.tutorialspoint.com/html/html_web_workers_api.htm) *(tutorialspoint.com)*
  > Python TechnologiesDatabasesComputer ProgrammingWeb DevelopmentJava TechnologiesComputer ScienceMobile DevelopmentBig Data &amp; AnalyticsMicrosoft TechnologiesDevOpsLatest TechnologiesMachine LearningDigital MarketingSoftware QualityManagement Tutor...
- [HTML Web Workers API](https://www.w3schools.com/html/html5_webworkers.asp) *(w3schools.com)*
  > Web workers are useful for heavy code that can&#x27;t be run on the main thread, without causing long tasks that make the page unresponsive. <strong>The numbers in the table specify the first browser version that fully support the Web Workers API</st...
- [javascript - Controlling fps with requestAnimationFrame? - Stack Overflow](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe) *(stackoverflow.com)*
  > In your setInterval, update your math and create a little CSS script in a string. With your RAF loop, only use that script to update the new coordinates of your elements. Don&#x27;t do anything else in the RAF loop. The RAF is tied inherently to the ...
- [Long Animation Frames API | Web Platform | Chrome for Developers](https://developer.chrome.com/docs/web-platform/long-animation-frames) *(developer.chrome.com · 2024-10-14T00:00:00)*
  > To continue to support Chrome browsers using the origin trial, you may want to feature detect (for example, using &quot;invoker&quot; in PerformanceScriptTiming.prototype) or include a fallback (invoker = script.invoker || script.name). Where provide...
- [Frame by Frame Animation Tutorial with CSS and JavaScript — SitePoint](https://www.sitepoint.com/frame-by-frame-animation-css-javascript) *(sitepoint.com · 2024-11-13T19:30:48)*
  > Michael Romanov explains how you can build a frame by frame animation with just HTML, CSS and JavaScript which performs well and works great on all browsers
- [How to create Frame by Frame Animation using CSS and JavaScript ? | GeeksforGeeks](https://www.geeksforgeeks.org/how-to-create-frame-by-frame-animation-using-css-and-javascript) *(geeksforgeeks.org · 2021-07-28T06:14:40)*
  > Now, in a more technical way, we ... frames to make the illusion of movement. We can <strong>use the JavaScript setInterval() method to create a frame-by-frame animation</strong>....

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Intent to Prototype: Support Long Animation Frames API in Web Workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17008.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/delayed-message-timing/blob/main/loaf-congested-moments/explainer.md`)*
  > Reusing the existing API gives developers a single, familiar mechanism for diagnosing blocking work across both documents and workers. Initial public proposal https://<strong>github.com/WICG/delayed-message-timing/blob/main/loaf-congested-m...

## 📚 Platform Documentation & Specifications

- [Long animation frame timing - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing) *(developer.mozilla.org)*
- [Window: requestAnimationFrame() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame) *(developer.mozilla.org)*
- [Using CSS animations - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Using) *(developer.mozilla.org)*
- [Animation performance and frame rate - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Animation_performance_and_frame_rate) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 32 result(s) found across 7 planned queries — **16 verified relevant**
  - `"chromestatus.com/feature/5387465121726464" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WICG/delayed-message-timing/blob/main/loaf-congested-moments/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"Support Long Animation Frames API in Web Workers" API` — *Core feature API query* (1 returned)
  - `"Support Long Animation Frames API in Web Workers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"long-animation-frame" OR "per-script" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Support Long Animation Frames API in Web Workers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Support Long Animation Frames API in Web Workers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 13 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 9 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 1 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5387465121726464)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5387465121726464)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/534893134)
