# js-profiling in dedicated workers

> **Report Week:** 2026-W39 | **Milestone:** Chrome 154 | **Category:** In developer trial (Behind a flag)

## Overview

Allows js-profiling in dedicated workers  This feature enables the JavaScript Self‑Profiling (js-profiling) API in Dedicated Workers, while remaining gated by Document Policy. It allows developers to obtain low‑overhead CPU attribution for JavaScript execution in workers, with Document Policy support for workers tracked separately.

### Motivation

Modern web applications increasingly offload performance‑critical work to Dedicated Workers to keep the main thread responsive. While the JavaScript Self‑Profiling API provides low‑overhead CPU attribution for JavaScript execution, it is currently unavailable in workers due to its reliance on Document Policy, leaving developers without visibility into where CPU time is spent during background computation.

Enabling js-profiling in Dedicated Workers fills this gap by allowing developers to capture representative JavaScript CPU profiles for worker execution, using the same explicit opt‑in and policy‑gated model already required for documents.

## Ecosystem Status

- **Momentum:** High (445 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Enabling the JavaScript Self-Profiling API in Dedicated Workers extends low-overhead, sampling CPU attribution to background execution contexts in Chromium, addressing an observability blind spot in multi-threaded web apps. Driven primarily by Microsoft Edge engineers in tandem with Document Policy support for workers, the feature is currently in developer trial behind a flag in Chrome 154. However, cross-browser consensus remains entirely non-existent, as the foundational self-profiling specification is implemented solely in Blink.

### Recommendations
- Actionable Advice: Teams managing compute-heavy web workers should evaluate the API under Chrome flags for diagnostic telemetry and canary environments, but must gate calls behind strict feature detection (\`'Profiler' in self\`). Do not rely on it as a universal RUM strategy until upstream consensus or standardized alternatives gain traction outside Chromium.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17436.html) *(mail-archive.com)*
  > [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Thu, 10 Sep 2026 13:21:00 -0700 Contact emails [e...
- [\[blink-dev\] Intent to Prototype: Document Policy in Dedicated Workers](https://www.mail-archive.com/blink-dev@chromium.org/msg15658.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Document Policy in Dedicated Workers Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Document Policy in Dedicated Workers Chromestatus Fri, 23 Jan 2026 09:53:15 -0800 Contact emails [email&#160;...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg16028.html) *(mail-archive.com)*
  > [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Fri, 06 Mar 2026 11:57:39 -0800 Contact emails [e...
- [\[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15887.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: js-profiling in dedicated workers Chromestatus Thu, 19 Feb 2026 10:11:40 -0800 Contact emails [email&#160;protec...
- [Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15888.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype: js-profiling in dedicated workers 'Michal Mocny' via blink-dev Thu, 19 Feb 2026 10:27:54 -0800 Neat! Jus...
- [@types/wicg-js-self-profiling - npm](https://www.npmjs.com/package/@types/wicg-js-self-profiling/v/2022.3.0) *(npmjs.com · 2023-08-24T00:00:00)*
  > // Type definitions for non-npm package JS Self-Profiling API API 2022.03 // Project: https://github.com/WICG/js-self-profiling, https://<strong>wicg.github.io/js-self-profiling</strong>/ // Definitions by: Tiger Oakes &lt;https://github.com/NotWoods...
- [JS Self-Profiling API](https://pr-preview.s3.amazonaws.com/WICG/js-self-profiling/64/7918fca...cnpsc:cb825d0.html) *(pr-preview.s3.amazonaws.com)*
  > <strong>This specification describes an API that allows web applications to control a sampling profiler for measuring client JavaScript execution times</strong>. ... Do not attempt to implement this version of the specification. Do not reference this...
- [Intent to Prototype: js-profiling-mode=eager\|lazy Document-Policy for JS Self-Profiling API](https://groups.google.com/a/chromium.org/g/blink-dev/c/y3OkEzcrp24) *(groups.google.com · 2026-02-12T00:00:00)*
  > Explainerhttps://github.com/WICG/js-self-profiling/issues/86 · Specificationhttps://wicg.github.io/js-self-profiling/#js-profiling-mode · Summary<strong>Introduces a new Document-Policy value &quot;js-profiling-mode=eager|lazy&quot;.</strong> Setting...
- [Profiling Your Workers with Wrangler \| Cloudflare Blog](https://blog.cloudflare.com/profiling-your-workers-with-wrangler) *(blog.cloudflare.com · 2026-07-15T13:31:23)*
  > To show off how to use this feature, I’m going to be optimizing a simple JavaScript program which outputs the first thousand integers separated by a space. Let’s start by installing the latest version of Wrangler. We’ll also need a Worker cloned down...
- [How to Profile Node.js Apps: A Complete Guide for Efficient Performance \| by John Walter Munene Njeru \| Medium](https://medium.com/@Munene254_/how-to-profile-node-js-apps-a-complete-guide-for-efficient-performance-a720c5afa847) *(medium.com · 2026-03-26T09:28:44)*
  > Then, open: `chrome://inspect`. While on the Chrome browser, click “Open dedicated DevTools for Node”. If you want the program to pause upon startup, use: ... The command above is useful for debugging initialization logic. Great start! If you’re onto...
- [How To Use Node.js Profiling](https://blog.airbrake.io/blog/nodejs/how-to-use-node-js-profiling) *(blog.airbrake.io · 2021-08-11T00:00:00)*
  > We cannot provide a description for this page right now
- [What are the best tools for profiling Node.js applications? \| Reintech media](https://reintech.io/blog/the-best-tools-for-profiling-nodejs-applications) *(reintech.io · 2026-01-15T07:00:21)*
  > <strong>Navigate to chrome://inspect in Chrome, then click &quot;Open dedicated DevTools for Node&quot; to access the full profiling interface</strong>.
- [Profiling Node.js Applications: Step-by-Step Guide \| by NonCoderSuccess \| Medium](https://noncodersuccess.medium.com/profiling-node-js-applications-step-by-step-guide-38c75d8a8ef6) *(noncodersuccess.medium.com · 2024-11-19T11:47:07)*
  > Introduction to Profiling Profiling a Node.js app means analyzing CPU, memory, and runtime metrics to identify performance issues like high…
- [An Introduction to Profiling in Node.js \| AppSignal Blog](https://blog.appsignal.com/2023/11/29/an-introduction-to-profiling-in-nodejs.html) *(blog.appsignal.com · 2023-11-29T00:00:00)*
  > <strong>The profiler records data into a file in your project directory</strong>. You will notice a new tick log file named isolate-0x&lt;number&gt;-v8.log. This file is not meant to be consumed by humans, but must be processed further to generate hu...
- [Mastering Web Workers in JavaScript: A Complete Guide - DEV Community](https://dev.to/softheartengineer/mastering-web-workers-in-javascript-a-complete-guide-556l) *(dev.to · 2024-12-30T05:18:40)*
  > In this guide, we’ll focus on Dedicated Workers, as they are the most commonly used. ... <strong>Create a separate JavaScript file for your worker</strong>. For example, worker.js:
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
- [Service Workers! Your first step towards Progressive Web Apps (PWA) \| by Uday Hiwarale \| JsPoint \| Medium](https://medium.com/jspoint/service-workers-your-first-step-towards-progressive-web-apps-pwa-e4e11d1a2e85) *(medium.com · 2020-09-01T07:08:03)*
  > If you want multiple threads (pages in different browser tabs) to access same workers at the same time, then you need to use Shared Worker, which is not supported in all browsers. Also, dedicated or shared workers do not have access to the properties...
- [How to hire a Progressive Web App (PWA) developer? - Abbacus Technologies](https://www.abbacustechnologies.com/how-to-hire-a-progressive-web-app-pwa-developer) *(abbacustechnologies.com · 2025-12-02T14:30:19)*
  > Pros: Dedicated focus, deeper understanding of your product, long-term continuity. Cons: Higher cost and overhead compared to freelancers. ... Combine full-time developers for core development with freelancers or agencies for specialized tasks or sca...
- [Set Up Profiling \| Sentry for JavaScript](https://docs.sentry.io/platforms/javascript/profiling) *(docs.sentry.io)*
  > Browser Profiling uses the JS Self-Profiling API, currently only available in Chromium-based browsers (Chrome, Edge). Profiles will only include data from these browsers. Requirements: @sentry/browser SDK version 10.27.0+ (or 7.60.0+ for deprecated t...
- [JS Self-Profiling API In Practice - NicJ.net](https://nicj.net/js-self-profiling-api-in-practice) *(nicj.net · 2021-12-31T19:16:36)*
  > This is usually configured via a HTTP response header called Document-Policy, or via a &lt;iframe policy=&quot;&quot;&gt; attribute. A simple example of enabling the API would be this HTTP response header (for the HTML page): ... Once enabled, any Ja...
- [blink-dev - Google Groups](https://groups.google.com/a/chromium.org/g/blink-dev) *(groups.google.com)*
  > Ready for Developer Testing: js-profiling in dedicated workers · Contact emails moni...@microsoft.com Explainer https://github.com/MicrosoftEdge/MSEdgeExplainers/ ... Good point about not spamming them. The features that are being implemented now, wo...
- [ELT with Dataform on Google Cloud](https://dev.to/gde/elt-with-dataform-on-google-cloud-kc9) *(dev.to · Mazlum Tosun · Sep 16)*
  > A real-world ELT pipeline with Dataform and BigQuery — staging and mart layers, JavaScript includes, dynamic tables and views, GitHub sync over SSH and Terraform provisioning.
- [Wake word + voice commands in the browser: a full offline pipeline](https://dev.to/voxrtio/wake-word-voice-commands-in-the-browser-a-full-offline-pipeline-40eo) *(dev.to · VoxRT · Sep 21)*
  > Voice interfaces in the browser have always had the same friction: Web Speech API is patchy across...
- [I Built a Visual JavaScript Execution Tool Because Reading the Event Loop Wasn’t Enough](https://dev.to/sazid_khan_42435bbe1c9a9c/i-built-a-visual-javascript-execution-tool-because-reading-the-event-loop-wasnt-enough-1l51) *(dev.to · sazid khan · Sep 21)*
  > One of the hardest parts of learning JavaScript isn’t writing the syntax.  It’s understanding what...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/31) *(github.com · 2026-09-14T08:09:52)* *(Cites: `https://chromestatus.com/feature/5159559872249856`)*
  > js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Relo...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17436.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5159559872249856`)*
  > [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Thu, 10 Sep 2026 13:21:00 -0700 Contact...
- [\[blink-dev\] Intent to Prototype: Document Policy in Dedicated Workers](https://www.mail-archive.com/blink-dev@chromium.org/msg15658.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > [blink-dev] Intent to Prototype: Document Policy in Dedicated Workers Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Document Policy in Dedicated Workers Chromestatus Fri, 23 Jan 2026 09:53:15 -0800 Contact emails [e...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg16028.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Fri, 06 Mar 2026 11:57:39 -0800 Contact...
- [\[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15887.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > [blink-dev] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: js-profiling in dedicated workers Chromestatus Thu, 19 Feb 2026 10:11:40 -0800 Contact emails [email&#...
- [Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15888.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > Re: [blink-dev] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype: js-profiling in dedicated workers 'Michal Mocny' via blink-dev Thu, 19 Feb 2026 10:27:54 -0800...
- [@types/wicg-js-self-profiling - npm](https://www.npmjs.com/package/@types/wicg-js-self-profiling/v/2022.3.0) *(npmjs.com · 2023-08-24T00:00:00)* *(Cites: `https://wicg.github.io/js-self-profiling/#the-profiler-interface`)*
  > // Type definitions for non-npm package JS Self-Profiling API API 2022.03 // Project: https://github.com/WICG/js-self-profiling, https://<strong>wicg.github.io/js-self-profiling</strong>/ // Definitions by: Tiger Oakes &lt;https://github.co...
- [JS Self-Profiling API · Issue #477 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/477) *(github.com · 2021-01-15T21:28:24)* *(Cites: `https://wicg.github.io/js-self-profiling/#the-profiler-interface`)*
  > JS Self-Profiling API · Issue #477 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh y...
- [JS Self-Profiling API](https://pr-preview.s3.amazonaws.com/WICG/js-self-profiling/64/7918fca...cnpsc:cb825d0.html) *(pr-preview.s3.amazonaws.com)* *(Cites: `https://wicg.github.io/js-self-profiling/#the-profiler-interface`)*
  > <strong>This specification describes an API that allows web applications to control a sampling profiler for measuring client JavaScript execution times</strong>. ... Do not attempt to implement this version of the specification. Do not refe...
- [Intent to Prototype: js-profiling-mode=eager\|lazy Document-Policy for JS Self-Profiling API](https://groups.google.com/a/chromium.org/g/blink-dev/c/y3OkEzcrp24) *(groups.google.com · 2026-02-12T00:00:00)* *(Cites: `https://wicg.github.io/js-self-profiling/#the-profiler-interface`)*
  > Explainerhttps://github.com/WICG/js-self-profiling/issues/86 · Specificationhttps://wicg.github.io/js-self-profiling/#js-profiling-mode · Summary<strong>Introduces a new Document-Policy value &quot;js-profiling-mode=eager|lazy&quot;.</stron...
- [1687857 - Implement the JavaScript Self-Profiling API](https://bugzilla.mozilla.org/show_bug.cgi?id=1687857) *(bugzilla.mozilla.org)* *(Cites: `https://wicg.github.io/js-self-profiling/#the-profiler-interface`)*
  > Tried to use the self-profiling API according to https://<strong>wicg.github.io/js-self-profiling</strong>/.

## 📚 Platform Documentation & Specifications

- [js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/31) *(github.com)*
- [JS Self-Profiling API · Issue #477 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/477) *(github.com)*
- [1687857 - Implement the JavaScript Self-Profiling API](https://bugzilla.mozilla.org/show_bug.cgi?id=1687857) *(bugzilla.mozilla.org)*
- [new guide on profiling workers by jkup · Pull Request #2330 · cloudflare/cloudflare-docs](https://github.com/cloudflare/cloudflare-docs/pull/2330/files) *(github.com)*
- [JS Self-Profiling API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/JS_Self-Profiling_API) *(developer.mozilla.org)*
- [GitHub - WICG/js-self-profiling: Proposal for a programmable JS profiling API for collecting JS profiles from real end-user environments · GitHub](https://github.com/WICG/js-self-profiling) *(github.com)*
- [Profiler: Profiler() constructor - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Profiler/Profiler) *(developer.mozilla.org)*
- [The \`document-policy: js-profiling\` header adds 3% overhead · Issue #79 · WICG/js-self-profiling](https://github.com/WICG/js-self-profiling/issues/79) *(github.com)*
- [js-self-profiling/README.md at main · WICG/js-self-profiling](https://github.com/WICG/js-self-profiling/blob/main/README.md) *(github.com)*
- [js-self-profiling/index.html at main · WICG/js-self-profiling](https://github.com/WICG/js-self-profiling/blob/main/index.html) *(github.com)*
- [Provide JSON serialized profiles · Issue #69 · WICG/js-self-profiling](https://github.com/WICG/js-self-profiling/issues/69) *(github.com)*
- [wicg.github.io/tracking.html at main · WICG/wicg.github.io](https://github.com/WICG/wicg.github.io/blob/main/tracking.html) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 49 result(s) found across 12 planned queries — **40 verified relevant**
  - `"chromestatus.com/feature/5159559872249856" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"wicg.github.io/js-self-profiling" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (6 returned)
  - `"js-profiling in dedicated workers" API` — *Core feature API query* (3 returned)
  - `"js-profiling in dedicated workers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"js-profiling" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"js-profiling in dedicated workers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"js-profiling in dedicated workers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (3 returned)
  - `"js-self-profiling" OR "js-profiling" ("dedicated worker" OR "web worker") tutorial OR guide` — *Finds technical guides and developer blog posts explaining how to profile CPU performance inside dedicated web workers using the Self-Profiling API.* (0 returned)
  - `"new Profiler({" ("Document-Policy: js-profiling" OR "DedicatedWorkerGlobalScope")` — *Surfaces real-world JavaScript code examples, Profiler constructor syntax, and Document Policy header setup inside worker contexts.* (8 returned)
  - `"js-profiling in dedicated workers" OR ("js-profiling" "dedicated workers") "Intent to Ship" OR "Chrome status"` — *Tracks browser vendor announcements, Blink Intent to Ship threads, and engine implementation statuses for worker js-profiling.* (1 returned)
  - `site:github.com ("WICG/js-self-profiling" OR "DocumentPolicyInWorkers") "worker"` — *Discovers standards discussions, spec issues, and pull requests regarding Document Policy propagation and Profiler support in worker threads.* (5 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 16 result(s) found — **5 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 26 item(s) inspected

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
