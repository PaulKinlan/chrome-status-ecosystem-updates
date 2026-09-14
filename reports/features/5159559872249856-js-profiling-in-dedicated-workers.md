# js-profiling in dedicated workers

> **Report Week:** 2026-W38 | **Milestone:** Chrome 154 | **Category:** In developer trial (Behind a flag)

## Overview

Allows js-profiling in dedicated workers  This feature enables the JavaScript Self‑Profiling (js-profiling) API in Dedicated Workers, while remaining gated by Document Policy. It allows developers to obtain low‑overhead CPU attribution for JavaScript execution in workers, with Document Policy support for workers tracked separately.

### Motivation

Modern web applications increasingly offload performance‑critical work to Dedicated Workers to keep the main thread responsive. While the JavaScript Self‑Profiling API provides low‑overhead CPU attribution for JavaScript execution, it is currently unavailable in workers due to its reliance on Document Policy, leaving developers without visibility into where CPU time is spent during background computation.

Enabling js-profiling in Dedicated Workers fills this gap by allowing developers to capture representative JavaScript CPU profiles for worker execution, using the same explicit opt‑in and policy‑gated model already required for documents.

## Ecosystem Status

- **Momentum:** High (205 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** js-profiling in dedicated workers is currently In developer trial (Behind a flag) in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Packages & Polyfills

- [wrangler](https://www.npmjs.com/package/wrangler) `v4.131.2` — Command-line interface for all things Cloudflare Workers

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17436.html) *(mail-archive.com)*
  > [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Thu, 10 Sep 2026 13:21:00 -0700 Contact emails [e...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg16028.html) *(mail-archive.com)*
  > [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Fri, 06 Mar 2026 11:57:39 -0800 Contact emails [e...
- [\[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15887.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: js-profiling in dedicated workers Chromestatus Thu, 19 Feb 2026 10:11:40 -0800 Contact emails [email&#160;protec...
- [Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15888.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype: js-profiling in dedicated workers 'Michal Mocny' via blink-dev Thu, 19 Feb 2026 10:27:54 -0800 Neat! Jus...
- [JavaScript Profiling With The Chrome Developer Tools — Smashing Magazine](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools) *(smashingmagazine.com · 2012-06-12T09:21:53)*
  > <strong>JavaScript CPU profile Shows how much CPU time our JavaScript is taking. CSS selector profile Shows how much CPU time is spent processing CSS selectors</strong>.
- [JavaScript Profiling & Optimization for Web Developers \| Crowd Favorite](https://crowdfavorite.com/insights/javascript-profiling-and-optimization) *(crowdfavorite.com · 2026-01-15T20:53:44)*
  > Because of those changes, the larger your DOM gets and the more complex your CSS is, the longer the browser can take doing reflow and redraw actions. During these actions some browsers, most notably Chrome on Android devices, may lock up in reporting...
- [JavaScript Profiler - Chrome Web Store](https://chromewebstore.google.com/detail/javascript-profiler/cjffkpkljodmdajjbkcjeflmmhnackij) *(chromewebstore.google.com)*
  > Profile your applications from your browser. ... Average rating 3.8 out of 5 stars. Learn more about results and reviews. ... Average rating 3.7 out of 5 stars. Learn more about results and reviews. Inject HTML, CSS or JavaScript into any web-page.
- [Chapter 21 - Profiling the Frontend](https://blackfire.io/docs/php/training-resources/book/21-frontend-profiling) *(blackfire.io · 2020-10-27T00:00:00)*
  > Inline this JavaScript snippet at the very bottom of your HTML &lt;head&gt; to profile all JavaScript until the window load event: ... For more information on how to build your own tools on top of the Chrome Remote debugging protocol, read Pauk Irish...
- [Effective Profiling in Google Chrome \| AppSignal Blog](https://blog.appsignal.com/2020/02/20/effective-profiling-in-google-chrome.html) *(blog.appsignal.com · 2020-02-20T00:00:00)*
  > This is the JS part of your code that will result in some visual changes on your website. Then, the Rendering part comes in with Style and Layout coming into place. <strong>Style calculations is a process where the browser is figuring out which CSS</...
- [performance - What is the best way to profile javascript execution? - Stack Overflow](https://stackoverflow.com/questions/855126/what-is-the-best-way-to-profile-javascript-execution) *(stackoverflow.com)*
  > recursive function calls). The Web Inspector also supports Firebug&#x27;s profiler APIs. ... Save this answer. ... Show activity on this post. For JavaScript, XmlHttpRequest, DOM Access, Rendering Times and Network traffic for IE6, 7 &amp; 8 you can ...
- [Using A JavaScript (JS) Profiler For Improved Performance- Stackify](https://stackify.com/optimized-using-a-javascript-js-profiler-for-improved-performance) *(stackify.com · 2024-03-22T11:47:52)*
  > Your code is at the heart of your website and it affects everything that users are interacting with day-to-day. To provide a seamless user experience, you need to optimize your code so that it’s up to scratch. There are a number of JavaScript profile...
- [Mastering Progressive Web Apps: Overcoming 2024 Development Challenges - DEV Community](https://dev.to/vaib/mastering-progressive-web-apps-overcoming-2024-development-challenges-34m4) *(dev.to · 2025-06-18T12:03:06)*
  > Developing complex PWAs necessitates sophisticated debugging and testing methodologies. Browser developer tools are indispensable for service worker debugging, manifest validation, and performance profiling. Chrome DevTools, for instance, offers a de...
- [How to hire a Progressive Web App (PWA) developer? - Abbacus Technologies](https://www.abbacustechnologies.com/how-to-hire-a-progressive-web-app-pwa-developer) *(abbacustechnologies.com · 2025-12-02T14:30:19)*
  > Pros: Dedicated focus, deeper understanding of your product, long-term continuity. Cons: Higher cost and overhead compared to freelancers. ... Combine full-time developers for core development with freelancers or agencies for specialized tasks or sca...
- [Service Workers! Your first step towards Progressive Web Apps (PWA) \| by Uday Hiwarale \| JsPoint \| Medium](https://medium.com/jspoint/service-workers-your-first-step-towards-progressive-web-apps-pwa-e4e11d1a2e85) *(medium.com · 2020-09-01T07:08:03)*
  > If you want multiple threads (pages in different browser tabs) to access same workers at the same time, then you need to use Shared Worker, which is not supported in all browsers. Also, dedicated or shared workers do not have access to the properties...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/31) *(github.com · 2026-09-14T08:09:52)* *(Cites: `https://chromestatus.com/feature/5159559872249856`)*
  > js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Relo...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17436.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5159559872249856`)*
  > [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Thu, 10 Sep 2026 13:21:00 -0700 Contact...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg16028.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Fri, 06 Mar 2026 11:57:39 -0800 Contact...
- [\[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15887.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > [blink-dev] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: js-profiling in dedicated workers Chromestatus Thu, 19 Feb 2026 10:11:40 -0800 Contact emails [email&#...
- [Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15888.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > Re: [blink-dev] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype: js-profiling in dedicated workers 'Michal Mocny' via blink-dev Thu, 19 Feb 2026 10:27:54 -0800...

## 📚 Platform Documentation & Specifications

- [js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/31) *(github.com)*
- [JS Self-Profiling API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/JS_Self-Profiling_API) *(developer.mozilla.org)*
- [Introducing workers](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Introducing_workers) *(developer.mozilla.org)*
- [Using Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 38 result(s) found across 8 planned queries — **16 verified relevant**
  - `"chromestatus.com/feature/5159559872249856" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"wicg.github.io/js-self-profiling" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"js-profiling in dedicated workers" API` — *Core feature API query* (3 returned)
  - `"js-profiling in dedicated workers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"js-profiling" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"js-profiling in dedicated workers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"js-profiling in dedicated workers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (2 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 15 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **1 verified relevant**
- **Web Platform Tests (wpt.fyi):** 25 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5159559872249856)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5159559872249856)
- [Specification](https://wicg.github.io/js-self-profiling/#the-profiler-interface)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/482085416)
