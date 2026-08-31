# Fetch API: Forward reason from AbortController to fetch Response

> **Report Week:** 2026-W36 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Surfaces the abort reason, if one is provided, to the methods of the Response object and its ReadableStream, rather than just the fetch promise. This fills a gap in our compliance with the standard, surfacing the developer-supplied abort reason everywhere it is intended to.

### Motivation

An AbortController can be passed into fetch to allow a request to be aborted. This is already supported; see https://chromestatus.com/feature/5631483679080448.

When calling abort, you can optionally pass in an "abort reason", and the original fetch promise, if it hasn't already resolved, should be rejected with that reason. This is currently working as intended.

*However*, if the fetch promise *has* resolved (after reading the header), but the body has not yet been fully read, the standard also specifies that the abort reason should propagate to the Response methods such as Response.blob(), as well as the ReadableStream Response.body. This part is not currently working; the relevant Promises instead are rejected with generic AbortErrors.

Firefox at least is compliant here but chromium/Edge/Safari are not. This feature is simply for making chromium compliant with the standard in this regard.

## Ecosystem Status

- **Momentum:** High (270 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Fetch API: Forward reason from AbortController to fetch Response is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "Yes, definitely. Thanks for the bug and tests!..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Fetch API: Forward abort reason to Response](https://github.com/WebKit/standards-positions/issues/711) [closed]

## 📰 Ecosystem Blogs & Articles

- [[blink-dev] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17136.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response 'Dan Clark' via bl...
- [Spec reads #1: [fetch](https://fetch.spec.whatwg.org/) / Tom MacWright | Observable](https://observablehq.com/@tmcw/spec-reads-1-fetch) *(observablehq.com · 2018-03-23T20:48:52)*
  > Spec reads #1: [fetch](https://fetch.spec.whatwg.org/) / Tom MacWright | Observable Tom MacWright hi! Workspace Fork Published By Tom MacWright Edited 8 star s
- [Fetch Standard (Pull Request Snapshot #632)](https://s3.amazonaws.com/pr-preview/whatwg/fetch/8ab040a...46984f2.html) *(s3.amazonaws.com · 2017-11-15T00:00:00)*
  > Fetch Standard (Pull Request Snapshot #632) Fetch ( PR #626 #632 ) Commit Snapshot — Last Updated 6 15 November 2017 Participate: GitHub whatwg/fetch ( file an issue , open issues ) IRC: #whatwg on Freenode Commits: GitHub whatwg/fetch/commits Go to ...
- [[blink-dev] Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17127.html) *(mail-archive.com)*
  > Yes https://wpt.fyi/results/fetch/api/abort/general.any.html Specifically the tests: * response.arrayBuffer() rejects with abort reason if already aborted (and other response methods such as body()) * Stream errors once aborted with abort reason. Und...
- [Re: [blink-dev] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17242.html) *(mail-archive.com)*
  > Thanks, Dan On Wednesday, August ... https://chromestatus.com/feature/5631483679080448 <strong>When calling abort, you can optionally pass in an &quot;abort reason&quot;, and the original fetch promise if it hasn&#x27;t resolved should be rejected wi...
- [[blink-dev] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17191.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; Thanks, &gt;&gt; Dan &gt;&gt; &gt;&gt; On ...m/feature/5631483679080448 When calling abort, &gt;&gt;&gt; <strong>you can optionally pass in an &quot;abort reason&quot;, and the original fetch &gt;&gt;&gt; promise if it hasn&#x27;t r...
- [The complete guide to the AbortController API - LogRocket Blog](https://blog.logrocket.com/complete-guide-abortcontroller) *(blog.logrocket.com · 2025-03-12T20:35:20)*
  > We will learn how to use the AbortController API with some of the mentioned APIs. Because the APIs work with AbortController in a similar way, we’ll only look at the Fetch and fs.readFile API.
- [The Complete Guide to AbortController and AbortSignal | by Amit Kumar | Medium](https://medium.com/@amitazadi/the-complete-guide-to-abortcontroller-and-abortsignal-from-basics-to-advanced-patterns-a3961753ef54) *(medium.com · 2025-09-03T17:12:13)*
  > // Different cancellation scenarios const reasons = { userCancel: &#x27;User clicked cancel button&#x27;, timeout: &#x27;Request exceeded 30 second limit&#x27;, navigation: &#x27;User navigated away from page&#x27;, newRequest: &#x27;Newer request su...
- [Fetch: Abort](https://javascript.info/fetch-abort) *(javascript.info · 2022-04-13T00:00:00)*
  > As we can see, <strong>AbortController is just a mean to pass abort events when abort() is called on it</strong>.
- [Mastering Request Cancellation ❌ in JavaScript: Using AbortController with Axios and Fetch API.🚀💪 - DEV Community](https://dev.to/dharamgfx/mastering-request-cancellation-in-javascript-using-abortcontroller-with-axios-and-fetch-api-2589) *(dev.to · 2024-06-24T10:33:45)*
  > <strong>Create New Controller: A new AbortController instance is created, and its signal is used in the new request.</strong> Make Request: The request is made using the Fetch API, passing the signal.
- [Everything about the AbortSignals (timeouts, combining signals, and how to use it with window.fetch) | Code Driven Development](https://codedrivendevelopment.com/posts/everything-about-abort-signal-timeout) *(codedrivendevelopment.com · 2024-04-20T00:00:00)*
  > <strong>const controller = new AbortController(); const timeout = 5000; // 5 seconds setTimeout(() =&gt; controller.abort(`custom timeout abort`), timeout); const response = window.fetch(&#x27;/your-api&#x27;, { signal: controller.signal, });</strong...
- [Resilient Fetch Requests in JavaScript with AbortController: A Guide with React Examples | by Tawan | CodeX | Medium](https://medium.com/codex/resilient-fetch-requests-in-javascript-with-abortcontroller-a-guide-with-react-examples-573dba8a3758) *(medium.com · 2023-04-15T23:45:26)*
  > With AbortController, you can <strong>initiate a request and then cancel it at any point in time, without having to rely on workarounds like using a timeout or ignoring the response</strong>.
- [Understanding AbortController in Node.js: A Complete Guide | Better Stack Community](https://betterstack.com/community/guides/scaling-nodejs/understanding-abortcontroller) *(betterstack.com · 2024-07-24T00:00:00)*
  > <strong>Terminating network requests that exceed reasonable time limits</strong>. Halting long-running database queries. ... The AbortController API creates an AbortSignal object, which can be passed to asynchronous operations like fetch or custom fu...
- [Adding timeout and multiple abort signals to fetch() (TypeScript/React) - DEV Community](https://dev.to/rashidshamloo/adding-timeout-and-multiple-abort-signals-to-fetch-typescriptreact-33bb) *(dev.to · 2023-04-30T00:50:42)*
  > const fetchTimeout = async (input, init = {}) =&gt; { const timeout = 5000; // 5 seconds const controller = new AbortController(); const reason = new DOMException(&#x27;signal timed out&#x27;, &#x27;TimeoutError&#x27;); const timeoutId = setTimeout((...
- [Access chromestatus.com. Chrome Platform Status](https://accessify.com/c/chromestatus.com) *(accessify.com)*
  > The faster CSS files can load, the earlier a page can be rendered. <strong>Chromestatus.com needs all CSS files to be minified and compressed as it can save up to 1.8 kB or 21% of the original size</strong>.
- [Chrome 137 beta | Blog | Chrome for Developers](https://developer.chrome.com/blog/chrome-137-beta?hl=en) *(developer.chrome.com)*
  > Learn more about the features listed here through the provided links or from the list on ChromeStatus.com. Chrome 130 is beta as of 30 April, 2025. You can download the latest on Google.com for desktop or on Google Play Store on Android. This release...
- [Web Platform Status](https://www.chromium.org/developers/web-platform-status) *(chromium.org)*
  > <strong>Allows for sending a Blob or File using xhr</strong>. ... Allows for sending a typed array directly rather than sending just its ArrayBuffer. ... Availability: m10. m18 adds xhr.responseType = &#x27;document&#x27; (see HTML in XMLHttpRequest)...
- [CSS: Use the response URL as the base URL](https://chromestatus.com/feature/5642183499579392) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [Chrome 129 | Release notes | Chrome for Developers](https://developer.chrome.com/release-notes/129) *(developer.chrome.com · 2024-09-17T00:00:00)*
  > Using the binaryType attribute set to blob, the onMessage event data attribute will be of type Blob instead of ArrayBuffer. Tracking bug #41370769 | ChromeStatus.com entry | Spec
- [[blink-dev] RE: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17177.html) *(mail-archive.com)*
  > Thanks, Dan On Wednesday, August ... https://chromestatus.com/feature/5631483679080448 <strong>When calling abort, you can optionally pass in an &quot;abort reason&quot;, and the original fetch promise if it hasn&#x27;t resolved should be rejected wi...
- [Serving | web.dev](https://web.dev/learn/pwa/serving) *(web.dev · 2022-01-10T00:00:00)*
  > <strong>Using the service worker&#x27;s fetch event, you can intercept network requests and serve a response using different techniques</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17136.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5158507786665984`)*
  > [blink-dev] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response 'Dan Cla...
- [GitHub - fis-components/whatwg-fetch: Fork from https://github.com/github/fetch.git · GitHub](https://github.com/fis-components/whatwg-fetch) *(github.com)* *(Cites: `https://fetch.spec.whatwg.org`)*
  > GitHub - fis-components/whatwg-fetch: Fork from https://github.com/github/fetch.git · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. ...
- [whatwg-fetch/README.md at master · fis-components/whatwg-fetch](https://github.com/fis-components/whatwg-fetch/blob/master/README.md) *(github.com)* *(Cites: `https://fetch.spec.whatwg.org`)*
  > whatwg-fetch/README.md at master · fis-components/whatwg-fetch · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh you...
- [Spec reads #1: [fetch](https://fetch.spec.whatwg.org/) / Tom MacWright | Observable](https://observablehq.com/@tmcw/spec-reads-1-fetch) *(observablehq.com · 2018-03-23T20:48:52)* *(Cites: `https://fetch.spec.whatwg.org`)*
  > Spec reads #1: [fetch](https://fetch.spec.whatwg.org/) / Tom MacWright | Observable Tom MacWright hi! Workspace Fork Published By Tom MacWright Edited 8 star s
- [Fetch Standard (Pull Request Snapshot #632)](https://s3.amazonaws.com/pr-preview/whatwg/fetch/8ab040a...46984f2.html) *(s3.amazonaws.com · 2017-11-15T00:00:00)* *(Cites: `https://fetch.spec.whatwg.org`)*
  > Fetch Standard (Pull Request Snapshot #632) Fetch ( PR #626 #632 ) Commit Snapshot — Last Updated 6 15 November 2017 Participate: GitHub whatwg/fetch ( file an issue , open issues ) IRC: #whatwg on Freenode Commits: GitHub whatwg/fetch/comm...

## 📚 Platform Documentation & Specifications

- [GitHub - fis-components/whatwg-fetch: Fork from https://github.com/github/fetch.git · GitHub](https://github.com/fis-components/whatwg-fetch) *(github.com)*
- [whatwg-fetch/README.md at master · fis-components/whatwg-fetch](https://github.com/fis-components/whatwg-fetch/blob/master/README.md) *(github.com)*
- [Implement `Blob `stream()`, `text()`, and `arrayBuffer()` · Issue #2555 · jsdom/jsdom](https://github.com/jsdom/jsdom/issues/2555) *(github.com)*
- [Response: blob() method - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Response/blob) *(developer.mozilla.org)*
- [Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) *(developer.mozilla.org)*
- [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 30 result(s) found across 6 planned queries — **25 verified relevant**
  - `"chromestatus.com/feature/5158507786665984" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"fetch.spec.whatwg.org" -site:fetch.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" API` — *Core feature API query* (3 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromestatus.com" OR "response.blob" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (4 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 8 result(s) found — **21 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 3 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5158507786665984)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5158507786665984)
- [Specification](https://fetch.spec.whatwg.org)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/502133195)
