# Fetch API: Forward reason from AbortController to fetch Response

> **Report Week:** 2026-W41 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Surfaces the abort reason, if one is provided, to the methods of the Response object and its ReadableStream, rather than just the fetch promise. This fills a gap in our compliance with the standard, surfacing the developer-supplied abort reason everywhere it is intended to.

### Motivation

An AbortController can be passed into fetch to allow a request to be aborted. This is already supported; see https://chromestatus.com/feature/5631483679080448.

When calling abort, you can optionally pass in an "abort reason", and the original fetch promise, if it hasn't already resolved, should be rejected with that reason. This is currently working as intended.

*However*, if the fetch promise *has* resolved (after reading the header), but the body has not yet been fully read, the standard also specifies that the abort reason should propagate to the Response methods such as Response.blob(), as well as the ReadableStream Response.body. This part is not currently working; the relevant Promises instead are rejected with generic AbortErrors.

Firefox at least is compliant here but chromium/Edge/Safari are not. This feature is simply for making chromium compliant with the standard in this regard.

## Ecosystem Status

- **Momentum:** High (325 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** This update resolves a long-standing standards compliance gap where developer-supplied abort reasons were lost and replaced by generic AbortError DOMExceptions once response headers resolved and body streaming began. With Chrome and Edge 154 enabling this behavior by default, Chromium joins Firefox in conforming to the WHATWG Fetch specification. Engine consensus is fully aligned, treating this as an overdue bugfix rather than a speculative feature.

### Recommendations
- Actionable Advice: Teams should confidently pass structured abort reasons (such as \`DOMException\`, error instances, or timeout markers) to \`AbortController.abort()\`. However, until Safari/WebKit ships the matching implementation, production catch blocks reading response bodies should continue checking both custom reasons and fallback \`name === 'AbortError'\` guards.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "Yes, definitely. Thanks for the bug and tests!..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Fetch API: Forward abort reason to Response](https://github.com/WebKit/standards-positions/issues/711) [closed]

## 📰 Ecosystem Blogs & Articles

- [fetch Body promises not rejected with reason from AbortSignal \[502133195\] - Chromium](https://issues.chromium.org/issues/502133195) *(issues.chromium.org)*
  > Chromium Sign in
- [Spec reads #1: \[fetch\](https://fetch.spec.whatwg.org/) / Tom MacWright \| Observable](https://observablehq.com/@tmcw/spec-reads-1-fetch) *(observablehq.com · 2018-03-23T20:48:52)*
  > Like most web developers, I&#x27;ve used fetch ever since it was usable in a majority of browsers. Compared to XMLHttpRequest, it was an incredible step forward. But I never took the time to really think it through, until I read the spec recently. He...
- [Fetch API: Forward reason from AbortController to fetch Response - Chrome Platform Status](https://chromestatus.com/feature/5158507786665984) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [\[blink-dev\] Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17127.html) *(mail-archive.com)*
  > Specification https://fetch.sp... https://chromestatus.com/feature/5631483679080448 <strong>When calling abort, you can optionally pass in an &quot;abort reason&quot;, and the original fetch promise if it hasn&#x27;t resolved should be rejected with ...
- [\[blink-dev\] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17184.html) *(mail-archive.com)*
  > &gt; &gt; Thanks, &gt; Dan &gt; &gt; On Wednesday, ...romestatus.com/feature/5631483679080448 <strong>When calling abort, &gt;&gt; you can optionally pass in an &quot;abort reason&quot;, and the original fetch &gt;&gt; promise if it hasn&#x27;t resol...
- [The complete guide to the AbortController API - LogRocket Blog](https://blog.logrocket.com/complete-guide-abortcontroller) *(blog.logrocket.com · 2025-03-12T20:35:20)*
  > The trivial example above illustrates how to use the AbortController API with the Fetch API in Node. However, in a real-world project, you don’t start an asynchronous operation and abort it immediately like in the code above. It is also worth emphasi...
- [A Practical Guide to the AbortController API - DEV Community](https://dev.to/bdestrempes/a-practical-guide-to-the-abortcontroller-api-5420) *(dev.to · 2025-05-19T23:50:25)*
  > function createCancellableRequest(endpoint: string) { const controller = new AbortController() const requestPromise = fetch(endpoint, { signal: controller.signal, }) .then((response) =&gt; { // Handle the response }) .catch((error) =&gt; { // Check i...
- [Fetch: Abort](https://javascript.info/fetch-abort) *(javascript.info · 2022-04-13T00:00:00)*
  > As we can see, <strong>AbortController is just a mean to pass abort events when abort() is called on it</strong>.
- [Mastering Request Cancellation ❌ in JavaScript: Using AbortController with Axios and Fetch API.🚀💪 - DEV Community](https://dev.to/dharamgfx/mastering-request-cancellation-in-javascript-using-abortcontroller-with-axios-and-fetch-api-2589) *(dev.to · 2024-06-24T10:33:45)*
  > <strong>Create New Controller: A new AbortController instance is created, and its signal is used in the new request.</strong> Make Request: The request is made using the Fetch API, passing the signal.
- [Everything about the AbortSignals (timeouts, combining signals, and how to use it with window.fetch) \| Code Driven Development](https://codedrivendevelopment.com/posts/everything-about-abort-signal-timeout) *(codedrivendevelopment.com · 2024-04-20T00:00:00)*
  > <strong>const controller = new AbortController(); const timeout = 5000; // 5 seconds setTimeout(() =&gt; controller.abort(`custom timeout abort`), timeout); const response = window.fetch(&#x27;/your-api&#x27;, { signal: controller.signal, });</strong...
- [Understanding AbortController in Node.js: A Complete Guide \| Better Stack Community](https://betterstack.com/community/guides/scaling-nodejs/understanding-abortcontroller) *(betterstack.com · 2024-07-24T00:00:00)*
  > <strong>Terminating network requests that exceed reasonable time limits</strong>. Halting long-running database queries. ... The AbortController API creates an AbortSignal object, which can be passed to asynchronous operations like fetch or custom fu...
- [Resilient Fetch Requests in JavaScript with AbortController: A Guide with React Examples \| by Tawan \| CodeX \| Medium](https://medium.com/codex/resilient-fetch-requests-in-javascript-with-abortcontroller-a-guide-with-react-examples-573dba8a3758) *(medium.com · 2023-04-15T23:45:26)*
  > In conclusion, the AbortController ... in JavaScript. <strong>It allows you to cancel an ongoing request at any point in time, without the need for workarounds like using a timeout or ignoring the response</strong>....
- [Adding timeout and multiple abort signals to fetch() (TypeScript/React) - DEV Community](https://dev.to/rashidshamloo/adding-timeout-and-multiple-abort-signals-to-fetch-typescriptreact-33bb) *(dev.to · 2023-04-30T00:50:42)*
  > const fetchTimeout = async (input, init = {}) =&gt; { const timeout = 5000; // 5 seconds const controller = new AbortController(); const reason = new DOMException(&#x27;signal timed out&#x27;, &#x27;TimeoutError&#x27;); const timeoutId = setTimeout((...
- [Re: \[blink-dev\] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17242.html) *(mail-archive.com)*
  > Thanks, Dan On Wednesday, August ... https://chromestatus.com/feature/5631483679080448 <strong>When calling abort, you can optionally pass in an &quot;abort reason&quot;, and the original fetch promise if it hasn&#x27;t resolved should be rejected wi...
- [\[blink-dev\] RE: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17177.html) *(mail-archive.com)*
  > Thanks, Dan On Wednesday, August ... https://chromestatus.com/feature/5631483679080448 <strong>When calling abort, you can optionally pass in an &quot;abort reason&quot;, and the original fetch promise if it hasn&#x27;t resolved should be rejected wi...
- [AbortController Beyond fetch: The Cancellation Patterns I Use in Every React App - DEV Community](https://dev.to/ahmed_mahmoud360/abortcontroller-beyond-fetch-the-cancellation-patterns-i-use-in-every-react-app-3i3n) *(dev.to · 2026-08-01T06:07:20)*
  > Q: What error does an aborted fetch throw? A: A DOMException named AbortError for a manual abort(), or TimeoutError when the signal came from AbortSignal.timeout(). <strong>A custom reason passed to abort(reason) becomes the rejection value instead</...
- [Implement AbortController, AbortSignal, abortable fetch](https://issues.chromium.org/issues/40532574) *(issues.chromium.org · 2017-07-31T00:00:00)*
  > Sign in
- [Supplying a reason for AbortController?](https://stackoverflow.com/questions/78791585/supplying-a-reason-for-abortcontroller) *(stackoverflow.com)*
  > You can supply a reason as an argument to controller.abort(), like controller.abort(&quot;took longer than 10 milliseconds&quot;) ... reason (optional): <strong>The reason why the operation was aborted, which can be any JavaScript value</strong>.
- [How to prevent the AbortError: signal is aborted without reason](https://stackoverflow.com/questions/79416955/how-to-prevent-the-aborterror-signal-is-aborted-without-reason) *(stackoverflow.com)*
  > Note: When abort() is called, the fetch() promise rejects with an AbortError. ... When I call cancel(). I&#x27;m checking the progress in a while loop. If I call cancel() multiple times I can replicate the error. ... No, it is an error (a DOMExceptio...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [fetch Body promises not rejected with reason from AbortSignal \[502133195\] - Chromium](https://issues.chromium.org/issues/502133195) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5158507786665984`)*
  > Chromium Sign in
- [GitHub - fis-components/whatwg-fetch: Fork from https://github.com/github/fetch.git · GitHub](https://github.com/fis-components/whatwg-fetch) *(github.com)* *(Cites: `https://fetch.spec.whatwg.org`)*
  > GitHub - fis-components/whatwg-fetch: Fork from https://github.com/github/fetch.git · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. ...
- [whatwg-fetch/README.md at master · fis-components/whatwg-fetch](https://github.com/fis-components/whatwg-fetch/blob/master/README.md) *(github.com)* *(Cites: `https://fetch.spec.whatwg.org`)*
  > whatwg-fetch/README.md at master · fis-components/whatwg-fetch · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh you...
- [Spec reads #1: \[fetch\](https://fetch.spec.whatwg.org/) / Tom MacWright \| Observable](https://observablehq.com/@tmcw/spec-reads-1-fetch) *(observablehq.com · 2018-03-23T20:48:52)* *(Cites: `https://fetch.spec.whatwg.org`)*
  > Like most web developers, I&#x27;ve used fetch ever since it was usable in a majority of browsers. Compared to XMLHttpRequest, it was an incredible step forward. But I never took the time to really think it through, until I read the spec re...

## 📚 Platform Documentation & Specifications

- [GitHub - fis-components/whatwg-fetch: Fork from https://github.com/github/fetch.git · GitHub](https://github.com/fis-components/whatwg-fetch) *(github.com)*
- [whatwg-fetch/README.md at master · fis-components/whatwg-fetch](https://github.com/fis-components/whatwg-fetch/blob/master/README.md) *(github.com)*
- [Using readable streams - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Using_readable_streams) *(developer.mozilla.org)*
- [AbortSignal: timeout() static method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/timeout_static) *(developer.mozilla.org)*
- [AbortSignal: reason property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/reason) *(developer.mozilla.org)*
- [New Proposal: Making Fetch Promises work better (i.e. abort-able) and with other APIs(e.g. Promise Combinators) · Issue #1831 · whatwg/fetch](https://github.com/whatwg/fetch/issues/1831) *(github.com)*
- [Add a \`timeout\` option, to prevent hanging · Issue #951 · whatwg/fetch](https://github.com/whatwg/fetch/issues/951) *(github.com)*
- [AbortController abort reason Parameter · Issue #1462 · node-fetch/node-fetch](https://github.com/node-fetch/node-fetch/issues/1462) *(github.com)*
- [Unexpected error when using signal with reason in fetch · Issue #49557 · nodejs/node](https://github.com/nodejs/node/issues/49557) *(github.com)*
- [Unhandled 'error' event when using AbortSignal to cancel requests with a body · Issue #1420 · node-fetch/node-fetch](https://github.com/node-fetch/node-fetch/issues/1420) *(github.com)*
- [AbortController.abort is missing parameter support · Issue #47505 · microsoft/TypeScript](https://github.com/microsoft/TypeScript/issues/47505) *(github.com)*
- [i have a request when i abort this request will be a error "signal is aborted without reason" · Issue #418 · unjs/ofetch](https://github.com/unjs/ofetch/issues/418) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 59 result(s) found across 11 planned queries — **31 verified relevant**
  - `"chromestatus.com/feature/5158507786665984" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"fetch.spec.whatwg.org" -site:fetch.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" API` — *Core feature API query* (3 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromestatus.com" OR "response.blob" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (4 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
  - `"AbortController" "abort(reason)" fetch ("response.body" OR "response.blob" OR "response.text")` — *Finds technical code snippets and WebIDL usage patterns demonstrating custom abort reasons piped into Fetch Response methods and readable streams.* (8 returned)
  - `"AbortSignal" custom reason fetch (stream OR response) site:web.dev OR site:developer.mozilla.org OR site:dev.to` — *Locates developer tutorials, explainers, and guide articles detailing how abort reasons propagate through the Fetch API.* (8 returned)
  - `"fetch" "AbortController" abort reason ReadableStream OR Response site:github.com/whatwg/fetch OR site:issues.chromium.org` — *Surfaces standards discussions, WHATWG Fetch specification issues, and Chromium implementation progress regarding abort reason forwarding.* (4 returned)
  - `"AbortController" abort reason generic "AbortError" "Response" site:stackoverflow.com OR site:github.com` — *Captures developer troubleshooting and community discussions regarding generic AbortError fallbacks versus custom abort reason propagation in fetch bodies.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 2 result(s) found — **4 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 1621 item(s) inspected

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
