# Support Long Animation Frames API in Web Workers

> **Report Week:** 2026-W40 | **Milestone:** Chrome 153 | **Category:** In developer trial (Behind a flag)

## Overview

This feature extends the existing Long Animation Frames (LoAF) API to Web Workers. Today LoAF reports only on the main thread and is anchored to rendering frames, so it cannot observe work that blocks a worker's event loop. With this change, a long task that blocks a worker's event loop is reported as a long-animation-frame entry that is observable from inside the worker via PerformanceObserver, with the usual per-script attribution.  The prototype starts with dedicated workers, reporting a single long task that blocks the worker's event loop. The broader goal is to surface congested moments, intervals where an event loop remains busy and runnable work is delayed. This includes detecting a flood of many small tasks that keeps the event loop busy and reporting it as a long-animation-frame entry, as well as supporting the main thread. This is planned as follow-up work.

### Motivation

Web apps increasingly offload work to Web Workers, but a worker that blocks its own event loop is invisible to today's performance APIs. Workers usually have no rendering lifecycle, so there are no animation frames for LoAF to anchor to, and the main-thread LoAF and Long Tasks APIs cannot observe work running in a worker. As a result, a long task in a worker, which delays incoming message events and any OffscreenCanvas rendering, goes unreported even though it directly degrades responsiveness.

Rather than introduce a new API, we extend LoAF, because detecting a long animation frame and detecting a congested moment are fundamentally the same task: identifying bottlenecks in an event loop and attributing them to the responsible scripts. Reusing the existing API gives developers a single, familiar mechanism for diagnosing blocking work across both documents and workers.

## Ecosystem Status

- **Momentum:** High (205 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Support Long Animation Frames API in Web Workers is currently In developer trial (Behind a flag) in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "I'm not gonna post for while because I'm trying to change and be a better person. I promise I will make more drawings wh" (1 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [I'm not gonna post for while because I'm trying to change and be a better person. I promise I will make more drawings wh](https://twitter.com/boomykit/status/2104090386540982557) — *by @boomykit, 1 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Did they remove the ballon animation? thats lame - well anyway - Its my Birthday! -yall know the drill -  SEND ME SHOUTM](https://twitter.com/FlameTM_Oficial/status/2103998050028998745) — *by @FlameTM_Oficial, 82 likes/RTs, 26 replies*
- 🐦 **Twitter / X:** [X on X / X](https://twitter.com/tunetheweb/status/1694079281238843893) — *by @tunetheweb, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Matt Perry on X: "Kicking the tires on a 1kb, WAAPI-powered animation API Take a look: https://t.co/Qy4JGFGRkB" / X](https://twitter.com/mattgperry/status/1408688475973488640) — *by @mattgperry, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Matt Perry (@mattgperry) on X](https://twitter.com/mattgperry/status/1580937285280747521?lang=en) — *by @mattgperry, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Darin Senneff (@dsenneff) on X](https://twitter.com/dsenneff/status/1297931007803428870) — *by @dsenneff, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Luke Wroblewski on Twitter: "UI animations & how to use them on the Web: http://t.co/FjfhsBVius my notes from @vlh talk at #bdconf"](https://twitter.com/lukew/status/494220657249374208) — *by @lukew, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Prototype: Support Long Animation Frames API in Web Workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17008.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Support Long Animation Frames API in Web Workers Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Support Long Animation Frames API in Web Workers Chromestatus Mon, 20 Jul 2026 14:02:58 -0700 Con...
- [Improve Web Performance With requestAnimationFrame \| DebugBear](https://www.debugbear.com/blog/requestanimationframe) *(debugbear.com · 2026-04-17T15:15:10)*
  > Improve Web Performance With requestAnimationFrame | DebugBear Skip to main content Fix Your Website Performance Deliver a great user experience with in-depth page speed insights and monitoring. Start Free Trial Go To App Improve Web Performance With...
- [Long Animation Frames (LoAF): How to Use It To Improve INP](https://application-api.nitropack.io/blog/post/long-animation-frames) *(application-api.nitropack.io)*
  > Long Animation Frames (LoAF): How to Use It To Improve INP Available on the biggest platforms. Once you start with NitroPack, you can freely choose your integration platform. NitroPack under the hood. Everything you need to know about NitroPack featu...
- [The Long Animation Frame API has now shipped \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/loaf-has-shipped) *(developer.chrome.com · 2024-06-24T00:00:00)*
  > تم شحن واجهة برمجة التطبيقات Long Animation Frame API | Blog | Chrome for Developers التخطّي إلى المحتوى الرئيسي / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский ע...
- [Mastering Browser Performance with JavaScript: My Journey into RequestAnimationFrame, Web Workers…](https://medium.com/data-science-collective/mastering-browser-performance-with-javascript-my-journey-into-requestanimationframe-web-workers-ae94cc8c68f5) *(medium.com · 2025-08-13T18:20:30)*
  > Medium /javascript-performance-optimization-web-workers-requestanimationframe | Data Science Collective Sitemap Open in app Sign up Sign in Get app Write Search Sign up Sign in Data Science Collective · Advice, insights, and ideas from the Medium dat...
- [HTML - Web Workers API](https://www.tutorialspoint.com/html/html_web_workers_api.htm) *(tutorialspoint.com)*
  > HTML - Web Workers API Home Whiteboard Practice Code Graphing Calculator Online Compilers Articles Tools Categories Explore Categories Find the perfect tutorial for your learning journey Python Technologies Databases Computer Programming Web Developm...
- [SpeedCurve \| NEW! Monitor Long Animation Frames and get to the bottom of your JavaScript issues](https://www.speedcurve.com/blog/long-animation-frames-support) *(speedcurve.com · 2025-05-19T00:00:00)*
  > SpeedCurve | NEW! Monitor Long Animation Frames and get to the bottom of your JavaScript issues Skip to content SpeedCurve is now part of the Embrace family! There are no changes to how you use our products. Our founder Mark shares what this means......
- [SpeedCurve \| The Definitive Guide to Long Animation Frames (LoAF)](https://www.speedcurve.com/blog/guide-long-animation-frames-loaf) *(speedcurve.com · 2025-05-19T00:00:00)*
  > Timing information isn&#x27;t available for all script tasks. For example, there&#x27;s no data exposed for extension scripts and garbage collection. <strong>A Long Task API entry is generated for main-thread activities that are longer than 50ms</str...
- [javascript - Controlling fps with requestAnimationFrame? - Stack Overflow](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe) *(stackoverflow.com)*
  > Thiis is how I did it, but when the frame generation takes longer than a period, they start stacking up; I got recursive rAF calls and the browser would hang and freeze. I&#x27;ll use some other method on this page. 2022-11-08T21:20:13.837Z+00:00 ......
- [Long Animation Frames API \| Web Platform \| Chrome for Developers](https://developer.chrome.com/docs/web-platform/long-animation-frames) *(developer.chrome.com · 2024-10-14T00:00:00)*
  > To continue to support Chrome browsers using the origin trial, you may want to feature detect (for example, using &quot;invoker&quot; in PerformanceScriptTiming.prototype) or include a fallback (invoker = script.invoker || script.name). Where provide...
- [Frame by Frame Animation Tutorial with CSS and JavaScript — SitePoint](https://www.sitepoint.com/frame-by-frame-animation-css-javascript) *(sitepoint.com · 2024-11-13T19:30:48)*
  > Michael Romanov explains how you can build a frame by frame animation with just HTML, CSS and JavaScript which performs well and works great on all browsers
- [Animating with requestAnimationFrame](https://www.kirupa.com/html5/animating_with_requestAnimationFrame.htm) *(kirupa.com)*
  > <strong>The requestAnimationFrame function brings to the table the same level of optimization your animations or transitions created in CSS have</strong>. Instead of your code telling the browser to redraw the screen and the browser (being the temper...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: Support Long Animation Frames API in Web Workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17008.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/delayed-message-timing/blob/main/loaf-congested-moments/explainer.md`)*
  > [blink-dev] Intent to Prototype: Support Long Animation Frames API in Web Workers Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Support Long Animation Frames API in Web Workers Chromestatus Mon, 20 Jul 2026 14:02:58...

## 📚 Platform Documentation & Specifications

- [Long animation frame timing - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing) *(developer.mozilla.org)*
- [Window: requestAnimationFrame() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame) *(developer.mozilla.org)*
- [Using CSS animations - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Using) *(developer.mozilla.org)*
- [Animation performance and frame rate - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Animation_performance_and_frame_rate) *(developer.mozilla.org)*
- [Long Animation Frames API · Issue #1372 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1372) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 43 result(s) found across 11 planned queries — **17 verified relevant**
  - `"chromestatus.com/feature/5387465121726464" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WICG/delayed-message-timing/blob/main/loaf-congested-moments/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"Support Long Animation Frames API in Web Workers" API` — *Core feature API query* (1 returned)
  - `"Support Long Animation Frames API in Web Workers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"long-animation-frame" OR "per-script" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Support Long Animation Frames API in Web Workers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Support Long Animation Frames API in Web Workers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"PerformanceObserver" "long-animation-frame" ("WorkerGlobalScope" OR "dedicated worker")` — *Find code snippets and WebIDL usage implementing PerformanceObserver to observe long-animation-frame entries inside dedicated Web Workers.* (8 returned)
  - `"Long Animation Frames" ("Web Worker" OR "Web Workers") "PerformanceObserver" (guide OR tutorial OR profiling)` — *Discover practical guides and developer articles explaining how to measure and attribute event loop delays in Web Workers using LoAF.* (0 returned)
  - `"Long Animation Frames API in Web Workers" OR "loaf-congested-moments" (site:chromestatus.com OR site:github.com/WICG)` — *Locate official feature status, WICG discussions, and browser implementation milestones for extending LoAF to Web Workers.* (2 returned)
  - `"Long Animation Frames" "worker" ("congested moments" OR "delayed-message-timing")` — *Uncover developer discussions, design feedback, and sentiment around tracking worker event loop congestion and script attribution.* (1 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 173 item(s) inspected

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5387465121726464)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5387465121726464)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/534893134)
