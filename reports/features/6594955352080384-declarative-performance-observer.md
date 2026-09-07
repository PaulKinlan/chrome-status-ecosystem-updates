# Declarative Performance Observer

> **Report Week:** 2026-W37 | **Milestone:** Chrome 151 | **Category:** Origin trial

## Overview

The Declarative Performance Observer proposes a reliable browser-resident telemetry system that reports of performance metrics from navigation initiation to page termination. By using a declarative HTTP response header, it ensures that data is captured even in scenarios where the request failed due to the network error or the renderer process is killed by the OS.

### Motivation

Currently, web developers face significant challenges in measuring the full end-to-end reliability of user journeys, particularly abandoned navigations that occur before JavaScript execution or after a session terminates. Existing web APIs are limited by their dependency on JavaScript, meaning that early failures like DNS timeouts or connection errors remain invisible to the site. Furthermore, capturing metrics during abrupt terminations—such as renderer crashes due to memory pressure or sudden tab closures—is unreliable, as beacons sent at these moments are often lost.

## Ecosystem Status

- **Momentum:** High (270 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Declarative Performance Observer introduces an out-of-band, browser-resident telemetry mechanism configured via HTTP response headers to capture end-to-end performance metrics—including early network dropouts and abrupt renderer crashes. Currently in Origin Trial starting in Chrome 151 (scheduled through Chrome 155), the feature is an experimental Chromium initiative incubated via the WICG. Cross-engine consensus remains at an early stage, with no formal positions or implementation commitments yet recorded from Mozilla Gecko or Apple WebKit.

### Recommendations
- Actionable Advice: Web performance teams and RUM platform maintainers should register for the Chrome Origin Trial to evaluate out-of-band telemetry and feed real-world data into the WICG proposal. Production applications must continue relying on standard JavaScript `PerformanceObserver`, `ReportingObserver`, and `navigator.sendBeacon` as progressive enhancements until the standard matures across engines.
- In active Origin Trial in Chrome 151. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Show HN: Ark v0.6.0 – Go ECS with new declarative event system](https://github.com/mlange-42/ark) *(github.com · 2025-10-14T07:04:56Z)*
  > GitHub - mlange-42/ark: Ark -- Archetype-based Entity Component System (ECS) for Go. · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to...
- [Re: [blink-dev] Intent to Experiment: Declarative Performance Observer](http://www.mail-archive.com/blink-dev@chromium.org/msg17030.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Experiment: Declarative Performance Observer Skip to site navigation (Press enter) Re: [blink-dev] Intent to Experiment: Declarative Performance Observer Rick Byers Wed, 22 Jul 2026 08:27:10 -0700 LGTM I'll be very intereste...
- [[blink-dev] Intent to Experiment: Declarative Performance Observer](http://www.mail-archive.com/blink-dev@chromium.org/msg17021.html) *(mail-archive.com)*
  > [blink-dev] Intent to Experiment: Declarative Performance Observer Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: Declarative Performance Observer Chromestatus Wed, 22 Jul 2026 01:00:58 -0700 Contact emails [email&#160;protec...
- [[blink-dev] Intent to Prototype: Declarative Performance Observer](http://www.mail-archive.com/blink-dev@chromium.org/msg16424.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Declarative Performance Observer Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Declarative Performance Observer Chromestatus Thu, 30 Apr 2026 01:35:08 -0700 Contact emails [email&#160;protecte...
- [Performance Observer Example](https://opensource.adobe.com/web-platform-zoo/examples/performance/observer) *(opensource.adobe.com)*
  > Performance Observer Example Performance Observer Example This is a very simple example of how to use the PerformanceObserver Web API to get various peformance measurements for the current page. See the source code of this page for how this works. Yo...
- [PerformanceObserver API for Resource Tracking - DEV Community](https://dev.to/omriluz1/performanceobserver-api-for-resource-tracking-467p) *(dev.to · 2025-10-08T12:59:10)*
  > PerformanceObserver API for Resource Tracking - DEV Community Skip to content Powered by Algolia Log in Create account DEV Community Add reaction Like Unicorn Exploding Head Raised Hands Fire Jump to Comments Save Boost Pick as gem Copy link Copied t...
- [Understanding Observers in JavaScript: A Comprehensive Guide - DEV Community](https://dev.to/hassantayyab/understanding-observers-in-javascript-a-comprehensive-guide-5hkm) *(dev.to · 2025-01-16T08:20:39)*
  > Analyzing performance impact of third-party scripts. Custom observers can be built using the observer design pattern for scenarios not covered by built-in APIs.
- [Observer Design Pattern: A Complete Guide with Examples](https://devcookies.medium.com/observer-design-pattern-a-complete-guide-with-examples-ec40648749ff) *(devcookies.medium.com · 2024-09-10T12:50:13)*
  > The Observer Pattern is essential for building systems that need to handle events or real-time updates. Its decoupled nature allows easy scalability and flexibility in adding new components. However, it should be used judiciously, keeping in mind the...
- [Reporting Core Web Vitals With The Performance API — Smashing Magazine](https://www.smashingmagazine.com/2024/02/reporting-core-web-vitals-performance-api) *(smashingmagazine.com · 2024-02-27T12:00:00)*
  > <strong>The first very important thing in that snippet is the buffered: true property</strong>. Setting this to true means that we not only get to observe performance metrics being dispatched after we start observing, but we also want to get the perf...
- [Design Patterns — A quick guide to Observer pattern. | by Andreas Poyias | DataDrivenInvestor](https://medium.datadriveninvestor.com/design-patterns-a-quick-guide-to-observer-pattern-d0622145d6c2?gi=6eb8128cce66) *(medium.datadriveninvestor.com · 2019-02-08T15:27:01)*
  > Design Patterns — A quick guide to Observer pattern. Observer pattern is a very commonly used pattern. In fact, it is so common that is being standardized in many programming languages/libraries …
- [Introduction to EAS Observe - Expo Documentation](https://docs.expo.dev/eas/observe/introduction) *(docs.expo.dev · 2026-08-21T00:00:00)*
  > ... <strong>Wrap your root layout with the ObserveRoot component (or the AppMetricsRoot component on SDK 55) and call markInteractive() when your app is ready for user input</strong>. See Get started for the full setup guide.
- [Intersection Observer API: A guide to modern web performance | by Sanjiv Jangid | Medium](https://medium.com/@sanjivjangid/intersection-observer-api-a-guide-to-modern-web-performance-db5acfdfdda5) *(medium.com · 2025-07-28T08:18:10)*
  > The API allows developers to efficiently track when elements become visible or hidden within the browser viewport or any specified…
- [Building a Browser Part 6: Executing Javascript | by Matthew MacFarquhar | Medium](https://matthewmacfarquhar.medium.com/building-a-browser-part-6-executing-javascript-f5b469bd9794) *(matthewmacfarquhar.medium.com · 2025-04-15T14:12:56)*
  > Getting JS into our browser is quite simple and looks a lot like how we got CSS into the browser.
- [Browser environment, specs](https://javascript.info/browser-environment) *(javascript.info · 2022-06-19T00:00:00)*
  > There are non-browser instruments that use DOM too. For instance, server-side scripts that download HTML pages and process them can also use the DOM. They may support only a part of the specification though. ... There’s also a separate specification,...
- [User JavaScript and CSS - Chrome Web Store](https://chromewebstore.google.com/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld) *(chromewebstore.google.com)*
  > Userscript&#x27;s and userstyle&#x27;s — ... own JavaScript or CSS rules to any page. Features: - Instant execution - Custom libs include - URL masking allows use one script or CSS on many pages Documentation: https://tenrabbits.github.io/user-js-css...
- [Progressive Web Apps 2026: PWA Performance Guide](https://www.digitalapplied.com/blog/progressive-web-apps-2026-pwa-performance-guide) *(digitalapplied.com · 2026-02-01T00:00:00)*
  > In 2026, every major browser fully supports the core PWA APIs — service workers, Web App Manifest, and Web Push — and the install experience has matured to the point where users on Android and iOS can add PWAs to their home screens with a single tap....
- [Progressive Web App (PWA) Development Ultimate Guide - Riseup Labs](https://riseuplabs.com/pwa-development-ultimate-guide) *(riseuplabs.com · 2025-12-10T05:24:22)*
  > These efforts have contributed to a more standardized approach to building PWAs, ensuring consistent quality and performance. ... The evolution of PWA technologies has been driven by advancements in web standards, the introduction of key features suc...
- [Modern App Development: PWA vs Mini Programs — A Technical Comparison - DEV Community](https://dev.to/ai_superapp/modern-app-development-pwa-vs-mini-programs-a-technical-comparison-4b37) *(dev.to · 2026-05-22T02:09:25)*
  > Mini Program: Platform-provided IDE with built-in emulator, real-device preview, performance profiler, and package upload tool. The development framework is opinionated (custom markup + JavaScript/TypeScript). Testing is platform-specific. PWA had hi...
- [(PDF) Progressive Web Apps with Oracle APEX: Features and Best Practices](https://www.researchgate.net/publication/397555744_Progressive_Web_Apps_with_Oracle_APEX_Features_and_Best_Practices) *(researchgate.net · 2025-06-23T00:00:00)*
  > improve APEX PWA performance, enabling richer media or real-time collaboration, as suggested in web · development guides [20]. Integrating these via APEX’s declarative tools could simplify adoption, addressing
- [Are Progressive Web Apps Still Worth It in 2025? A Practical Perspective - DEV Community](https://dev.to/arkhan/are-progressive-web-apps-still-worth-it-in-2025-a-practical-perspective-47g8) *(dev.to · 2025-09-15T19:25:24)*
  > Some developers praise PWAs for simplicity and reduced maintenance overhead. Others note friction on iOS and limitations when trying to replicate high-performance native experiences. Product teams often adopt a hybrid strategy: web-first PWA for publ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: [blink-dev] Intent to Experiment: Declarative Performance Observer](http://www.mail-archive.com/blink-dev@chromium.org/msg17030.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/declarative-performance-observer`)*
  > Re: [blink-dev] Intent to Experiment: Declarative Performance Observer Skip to site navigation (Press enter) Re: [blink-dev] Intent to Experiment: Declarative Performance Observer Rick Byers Wed, 22 Jul 2026 08:27:10 -0700 LGTM I'll be very...
- [[blink-dev] Intent to Experiment: Declarative Performance Observer](http://www.mail-archive.com/blink-dev@chromium.org/msg17021.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/declarative-performance-observer`)*
  > [blink-dev] Intent to Experiment: Declarative Performance Observer Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: Declarative Performance Observer Chromestatus Wed, 22 Jul 2026 01:00:58 -0700 Contact emails [email&#...
- [[blink-dev] Intent to Prototype: Declarative Performance Observer](http://www.mail-archive.com/blink-dev@chromium.org/msg16424.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/declarative-performance-observer`)*
  > [blink-dev] Intent to Prototype: Declarative Performance Observer Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Declarative Performance Observer Chromestatus Thu, 30 Apr 2026 01:35:08 -0700 Contact emails [email&#16...

## 📚 Platform Documentation & Specifications

- [Populating the page: how browsers work - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work) *(developer.mozilla.org)*
- [What is JavaScript? - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript) *(developer.mozilla.org)*
- [📖 Getting Back To The Basics - How Browser Reads HTML, CSS, and JavaScript?](https://gist.github.com/nishantmendiratta/db09531f80803465da36f0d43c3e58ac) *(gist.github.com)*
- [How browsers load websites - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) *(developer.mozilla.org)*
- [PerformanceObserver: PerformanceObserver() constructor](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver/PerformanceObserver) *(developer.mozilla.org)*
- [PerformanceObserver](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver) *(developer.mozilla.org)*
- [PerformanceObserver: observe() method](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver/observe) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 36 result(s) found across 7 planned queries — **23 verified relevant**
  - `"chromestatus.com/feature/6594955352080384" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/explainers-by-googlers/declarative-performance-observer" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"Declarative Performance Observer" API` — *Core feature API query* (1 returned)
  - `"Declarative Performance Observer" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"browser-resident" OR "end-to-end" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Declarative Performance Observer" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Declarative Performance Observer" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **4 verified relevant**
- **Hacker News Algolia:** 4 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6594955352080384)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6594955352080384)
- [Chromium Tracking Bug](https://crbug.com/505208781)
