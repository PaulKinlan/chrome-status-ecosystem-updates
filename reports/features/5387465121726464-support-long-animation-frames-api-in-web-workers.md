# Support Long Animation Frames API in Web Workers

> **Report Week:** 2026-W39 | **Milestone:** Chrome 153 | **Category:** In developer trial (Behind a flag)

## Overview

This feature extends the existing Long Animation Frames (LoAF) API to Web Workers. Today LoAF reports only on the main thread and is anchored to rendering frames, so it cannot observe work that blocks a worker's event loop. With this change, a long task that blocks a worker's event loop is reported as a long-animation-frame entry that is observable from inside the worker via PerformanceObserver, with the usual per-script attribution.  The prototype starts with dedicated workers, reporting a single long task that blocks the worker's event loop. The broader goal is to surface congested moments, intervals where an event loop remains busy and runnable work is delayed. This includes detecting a flood of many small tasks that keeps the event loop busy and reporting it as a long-animation-frame entry, as well as supporting the main thread. This is planned as follow-up work.

### Motivation

Web apps increasingly offload work to Web Workers, but a worker that blocks its own event loop is invisible to today's performance APIs. Workers usually have no rendering lifecycle, so there are no animation frames for LoAF to anchor to, and the main-thread LoAF and Long Tasks APIs cannot observe work running in a worker. As a result, a long task in a worker, which delays incoming message events and any OffscreenCanvas rendering, goes unreported even though it directly degrades responsiveness.

Rather than introduce a new API, we extend LoAF, because detecting a long animation frame and detecting a congested moment are fundamentally the same task: identifying bottlenecks in an event loop and attributing them to the responsible scripts. Reusing the existing API gives developers a single, familiar mechanism for diagnosing blocking work across both documents and workers.

## Ecosystem Status

- **Momentum:** High (180 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Extending the Long Animation Frames (LoAF) API to Web Workers addresses a critical diagnostic blind spot by surfacing event-loop congestion and script attribution for off-main-thread tasks, including OffscreenCanvas rendering delays. Initiated as a joint effort by Microsoft and Google, the feature reached developer trial behind a flag in Chrome 153. Cross-engine consensus remains in the early incubation stage, with neither WebKit nor Gecko having formally reviewed or committed to this specific worker extension.

### Recommendations
- Actionable Advice: Do not depend on worker LoAF data for production telemetry yet; instead, test the implementation in Chromium developer channels using runtime flags. Always gate observer registrations inside worker contexts behind \`PerformanceObserver.supportedEntryTypes?.includes('long-animation-frame')\` to ensure safe progressive enhancement.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Prototype: Support Long Animation Frames API in Web Workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17008.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Support Long Animation Frames API in Web Workers Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Support Long Animation Frames API in Web Workers Chromestatus Mon, 20 Jul 2026 14:02:58 -0700 Con...
- [Improve Web Performance With requestAnimationFrame \| DebugBear](https://www.debugbear.com/blog/requestanimationframe) *(debugbear.com · 2026-04-17T15:15:10)*
  > Improve Web Performance With requestAnimationFrame | DebugBear Skip to main content Fix Your Website Performance Deliver a great user experience with in-depth page speed insights and monitoring. Start Free Trial Go To App Improve Web Performance With...
- [Long Animation Frames (LoAF): How to Use It To Improve INP](https://nitropack.io/blog/post/long-animation-frames) *(nitropack.io · 2024-06-07T00:00:00)*
  > Long Animation Frames (LoAF): How to Use It To Improve INP Skip to content Solutions Platforms Affiliates Pricing Resources Log in Get started Log in Get started Long Animation Frames (LoAF): How to Use It To Improve INP Core Web Vitals Niko Kaleev F...
- [Mastering Browser Performance with JavaScript: My Journey into RequestAnimationFrame, Web Workers…](https://medium.com/data-science-collective/mastering-browser-performance-with-javascript-my-journey-into-requestanimationframe-web-workers-ae94cc8c68f5) *(medium.com · 2025-08-13T18:20:30)*
  > Medium /javascript-performance-optimization-web-workers-requestanimationframe | Data Science Collective Sitemap Open in app Sign up Sign in Get app Write Search Sign up Sign in Data Science Collective · Advice, insights, and ideas from the Medium dat...
- [The Long Animation Frame API has now shipped \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/loaf-has-shipped) *(developer.chrome.com · 2024-06-24T00:00:00)*
  > Long Animation Frame API اکنون ارسال شده است، Long Animation Frame API اکنون ارسال شده است | Blog | Chrome for Developers رد شدن و رفتن به محتوای اصلی / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português ...
- [HTML - Web Workers API](https://www.tutorialspoint.com/html/html_web_workers_api.htm) *(tutorialspoint.com)*
  > HTML - Web Workers API Home Whiteboard Practice Code Graphing Calculator Online Compilers Articles Tools Categories Explore Categories Find the perfect tutorial for your learning journey Python Technologies Databases Computer Programming Web Developm...
- [SpeedCurve \| NEW! Monitor Long Animation Frames and get to the bottom of your JavaScript issues](https://www.speedcurve.com/blog/long-animation-frames-support) *(speedcurve.com · 2025-05-19T00:00:00)*
  > SpeedCurve | NEW! Monitor Long Animation Frames and get to the bottom of your JavaScript issues Skip to content SpeedCurve is now part of the Embrace family! There are no changes to how you use our products. Our founder Mark shares what this means......
- [HTML Web Workers API](https://www.w3schools.com/html/html5_webworkers.asp) *(w3schools.com)*
  > Web workers are useful for heavy code that can&#x27;t be run on the main thread, without causing long tasks that make the page unresponsive. <strong>The numbers in the table specify the first browser version that fully support the Web Workers API</st...
- [Long Animation Frames API \| Web Platform \| Chrome for Developers](https://developer.chrome.com/docs/web-platform/long-animation-frames) *(developer.chrome.com · 2024-10-14T00:00:00)*
  > To continue to support Chrome browsers using the origin trial, you may want to feature detect (for example, using &quot;invoker&quot; in PerformanceScriptTiming.prototype) or include a fallback (invoker = script.invoker || script.name). Where provide...
- [javascript - Controlling fps with requestAnimationFrame? - Stack Overflow](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe) *(stackoverflow.com)*
  > In your setInterval, update your math and create a little CSS script in a string. With your RAF loop, only use that script to update the new coordinates of your elements. Don&#x27;t do anything else in the RAF loop. The RAF is tied inherently to the ...
- [Frame by Frame Animation Tutorial with CSS and JavaScript — SitePoint](https://www.sitepoint.com/frame-by-frame-animation-css-javascript) *(sitepoint.com · 2024-11-13T19:30:48)*
  > Michael Romanov explains how you can build a frame by frame animation with just HTML, CSS and JavaScript which performs well and works great on all browsers
- [Animating with requestAnimationFrame](https://www.kirupa.com/html5/animating_with_requestAnimationFrame.htm) *(kirupa.com)*
  > <strong>The requestAnimationFrame function brings to the table the same level of optimization your animations or transitions created in CSS have</strong>. Instead of your code telling the browser to redraw the screen and the browser (being the temper...
- [Web-Perf Wednesday 007 – Chrome Makes Busy Workers Measurable – CSS Wizardry](https://csswizardry.com/2026/09/web-perf-wednesday-007-chrome-makes-busy-workers-measurable) *(csswizardry.com · 2026-09-02T11:00:00)*
  > Main-thread INP may look perfectly respectable while the product feels slow because the useful answer is still queued elsewhere. Worker-side LoAF gives a RUM strategy a browser-native signal for that missing part of the journey. The first implementat...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: Support Long Animation Frames API in Web Workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17008.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/delayed-message-timing/blob/main/loaf-congested-moments/explainer.md`)*
  > [blink-dev] Intent to Prototype: Support Long Animation Frames API in Web Workers Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Support Long Animation Frames API in Web Workers Chromestatus Mon, 20 Jul 2026 14:02:58...

## 📚 Platform Documentation & Specifications

- [Long animation frame timing - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing) *(developer.mozilla.org)*
- [Window: requestAnimationFrame() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame) *(developer.mozilla.org)*
- [Animation performance and frame rate - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Animation_performance_and_frame_rate) *(developer.mozilla.org)*
- [Using CSS animations - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Using) *(developer.mozilla.org)*
- [Long Animation Frames API · Issue #1372 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1372) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 38 result(s) found across 11 planned queries — **18 verified relevant**
  - `"chromestatus.com/feature/5387465121726464" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WICG/delayed-message-timing/blob/main/loaf-congested-moments/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"Support Long Animation Frames API in Web Workers" API` — *Core feature API query* (1 returned)
  - `"Support Long Animation Frames API in Web Workers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"long-animation-frame" OR "per-script" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Support Long Animation Frames API in Web Workers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Support Long Animation Frames API in Web Workers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Long Animation Frames" ("web worker" OR "dedicated worker") (performance OR bottleneck OR LoAF)` — *Find practical developer guides and tutorials focused on diagnosing blocking tasks and performance bottlenecks in Web Workers using the extended LoAF API.* (1 returned)
  - `PerformanceObserver "long-animation-frame" ("worker.js" OR DedicatedWorkerGlobalScope OR self.onmessage)` — *Discover JavaScript code snippets and implementation patterns showing how to register a PerformanceObserver for long-animation-frame entries inside a Web Worker script.* (8 returned)
  - `"Long Animation Frames" "congested moments" site:github.com/WICG` — *Locate standard discussions, design issues, and explainer iterations in the WICG repository concerning event loop congestion and worker LoAF.* (0 returned)
  - `("Intent to Prototype" OR "Intent to Ship") "Long Animation Frames" "Workers"` — *Identify browser vendor launch intents, feature tracking threads in Chromium/Blink, and release notes announcing support for LoAF in worker contexts.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
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
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5387465121726464)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5387465121726464)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/534893134)
