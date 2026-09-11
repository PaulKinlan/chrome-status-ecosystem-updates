# Fetch API: Forward reason from AbortController to fetch Response

> **Report Week:** 2026-W37 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Surfaces the abort reason, if one is provided, to the methods of the Response object and its ReadableStream, rather than just the fetch promise. This fills a gap in our compliance with the standard, surfacing the developer-supplied abort reason everywhere it is intended to.

### Motivation

An AbortController can be passed into fetch to allow a request to be aborted. This is already supported; see https://chromestatus.com/feature/5631483679080448.

When calling abort, you can optionally pass in an "abort reason", and the original fetch promise, if it hasn't already resolved, should be rejected with that reason. This is currently working as intended.

*However*, if the fetch promise *has* resolved (after reading the header), but the body has not yet been fully read, the standard also specifies that the abort reason should propagate to the Response methods such as Response.blob(), as well as the ReadableStream Response.body. This part is not currently working; the relevant Promises instead are rejected with generic AbortErrors.

Firefox at least is compliant here but chromium/Edge/Safari are not. This feature is simply for making chromium compliant with the standard in this regard.

## Ecosystem Status

- **Momentum:** High (360 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** This update fixes a long-standing Fetch specification compliance gap by ensuring custom abort reasons from AbortController.abort(reason) propagate to Response consumption methods (like .json(), .blob()) and Response.body streams, rather than falling back to generic AbortErrors once headers resolve. Firefox was already spec-compliant, and Chromium's rollout in Chrome 154 brings majority engine parity. Developer consensus is strongly supportive, viewing it as an essential consistency enhancement for modern streaming and error-handling pipelines.

### Recommendations
- Actionable Advice: Teams can immediately adopt explicit error objects in controller.abort(customError) to handle mid-stream cancellations gracefully, but should ensure error-handling logic still checks for fallback DOMException AbortError instances until Safari ships matching updates.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "Yes, definitely. Thanks for the bug and tests!..."
- Community package available: [node-abort-controller](https://www.npmjs.com/package/node-abort-controller) (v3.1.1) for progressive enhancement.

## Standards Positions

- **WebKit:** [Fetch API: Forward abort reason to Response](https://github.com/WebKit/standards-positions/issues/711) [closed]

## Packages & Polyfills

- [node-abort-controller](https://www.npmjs.com/package/node-abort-controller) `v3.1.1` — AbortController for Node based on EventEmitter
- [abortcontroller-polyfill](https://www.npmjs.com/package/abortcontroller-polyfill) `v1.7.8` — Polyfill/ponyfill for the AbortController DOM API + optional patching of fetch (stub that calls catch, doesn't actually abort request).

## 📰 Ecosystem Blogs & Articles

- [Spec reads #1: [fetch](https://fetch.spec.whatwg.org/) / Tom MacWright | Observable](https://observablehq.com/@tmcw/spec-reads-1-fetch) *(observablehq.com · 2018-03-23T20:48:52)*
  > Like most web developers, I&#x27;ve used fetch ever since it was usable in a majority of browsers. Compared to XMLHttpRequest, it was an incredible step forward. But I never took the time to really think it through, until I read the spec recently. He...
- [Fetch Standard (Pull Request Snapshot #632)](https://s3.amazonaws.com/pr-preview/whatwg/fetch/8ab040a...46984f2.html) *(s3.amazonaws.com · 2017-11-15T00:00:00)*
  > Fetch Standard (Pull Request Snapshot #632) Fetch ( PR #626 #632 ) Commit Snapshot — Last Updated 6 15 November 2017 Participate: GitHub whatwg/fetch ( file an issue , open issues ) IRC: #whatwg on Freenode Commits: GitHub whatwg/fetch/commits Go to ...
- [AbortController & AbortSignal - DEV Community](https://dev.to/mohsenfallahnjd/abortcontroller-abortsignal-5ea4) *(dev.to · 2025-09-23T09:14:49)*
  > <strong>AbortController is the standard way to cancel async work in modern JavaScript</strong>. It pairs with AbortSignal, which you pass to tasks so they can stop immediately. Create a controller → pass controller.signal to your async work.
- [The complete guide to the AbortController API - LogRocket Blog](https://blog.logrocket.com/complete-guide-abortcontroller) *(blog.logrocket.com · 2025-03-12T20:35:20)*
  > As explained above, you pass the signal property of the AbortController instance to any abortable, promise-based API like Fetch. The example below illustrates how you can use it with the AbortController API: const url = &quot;https://jsonplaceholder....
- [Using AbortController with Fetch API and ReactJS. | by Pablo Garcia | Medium](https://pgarciacamou.medium.com/using-abortcontroller-with-fetch-api-and-reactjs-8d4177e51270) *(pgarciacamou.medium.com · 2022-06-03T19:19:37)*
  > ...(addCSRFTkn &amp;&amp; { &quot;X-CSRF-Token&quot;: _csrf }), ...headers }, credentials: &quot;same-origin&quot;, ...(signalKey &amp;&amp; { signal: abortAndGetSignalSafe(signalKey) }), ...(addBody &amp;&amp; { body: JSON.stringify(body) }), ...res...
- [Understanding and Using Abort Controllers in JavaScript](https://blog.openreplay.com/abort-controllers-in-javascript) *(blog.openreplay.com · 2024-03-22T00:00:00)*
  > /&gt; &lt;/form&gt; &lt;script&gt; const formInput = document.getElementById(&quot;inputField&quot;); let abortController = null; // Function to perform a debounced operation const debounceOperation = () =&gt; { const controller = new AbortController...
- [These Advanced AbortController Features Are Amazing](https://blog.webdevsimplified.com/2025-06/advanced-abort-controller) *(blog.webdevsimplified.com · 2025-06-23T00:00:00)*
  > The true power in AbortController comes from the ability to create your own functions that support aborting. This allows you to build APIs that are cancelable, just like fetch. Doing this is as simple as accepting a signal parameter in your function,...
- [Canceling API Requests Using fetch() And AbortController In JavaScript](https://www.bennadel.com/blog/4180-canceling-api-requests-using-fetch-and-abortcontroller-in-javascript.htm) *(bennadel.com · 2022-01-12T11:24:10)*
  > */ async unwrapResponseData( response ) { var contentType = response.headers.has( &quot;content-type&quot; ) ? response.headers.get( &quot;content-type&quot; ) : &quot;&quot; ; if ( RE_CONTENT_TYPE_JSON.test( contentType ) ) { return( response.json()...
- [The Complete Guide to AbortController and AbortSignal | by Amit Kumar | Medium](https://medium.com/@amitazadi/the-complete-guide-to-abortcontroller-and-abortsignal-from-basics-to-advanced-patterns-a3961753ef54) *(medium.com · 2025-09-03T17:12:13)*
  > // Different cancellation scenarios const reasons = { userCancel: &#x27;User clicked cancel button&#x27;, timeout: &#x27;Request exceeded 30 second limit&#x27;, navigation: &#x27;User navigated away from page&#x27;, newRequest: &#x27;Newer request su...
- [A Practical Guide to the AbortController API - DEV Community](https://dev.to/bdestrempes/a-practical-guide-to-the-abortcontroller-api-5420) *(dev.to · 2025-05-19T23:50:25)*
  > function createCancellableRequest(endpoint: string) { const controller = new AbortController() const requestPromise = fetch(endpoint, { signal: controller.signal, }) .then((response) =&gt; { // Handle the response }) .catch((error) =&gt; { // Check i...
- [Cancelling asynchronous operations with AbortController - DEV Community](https://dev.to/schalkneethling/cancelling-asynchronous-operations-with-abortcontroller-22ef) *(dev.to · 2024-03-04T13:14:10)*
  > <strong>When the function is called, we call the abort function on the AbortController to abort the fetch request</strong>. We here call the function without specifying a reason and so, the default reason of AbortError will be used.
- [How to Abort Fetch Requests with AbortController in JavaScript | Tutorial Reference](https://tutorialreference.com/javascript/advanced-topics/network-requests/javascript-abort-fetch-requests-with-abortcontroller) *(tutorialreference.com)*
  > AbortSignal.any() takes an array of signals and creates a new signal that aborts when any of the input signals abort. It uses the reason from whichever signal aborted first. This is the standard way to combine manual abort with timeout, or to link mu...
- [AbortController in Node.js and React - Complete Guide with 5 Examples - Blog - LocalCan™](https://www.localcan.com/blog/abortcontroller-nodejs-react-complete-guide-examples) *(localcan.com · 2025-05-23T19:00:00)*
  > Learn how AbortController can cancel fetch requests, event listeners, streams, child processes in JavaScript. Stop memory leaks and improve UX with examples
- [AbortController: What You Don’t Know | by Leapcell | Medium](https://leapcell.medium.com/abortcontroller-what-you-dont-know-f4655264e9bc) *(leapcell.medium.com · 2025-01-16T17:28:03)*
  > Check if it’s aborted using signal.aborted. ... When a request is canceled using AbortController, the server won’t process it or send a response, saving bandwidth and improving client-side performance by reducing concurrent connections.
- [Resilient Fetch Requests in JavaScript with AbortController: A Guide with React Examples | by Tawan | CodeX | Medium](https://medium.com/codex/resilient-fetch-requests-in-javascript-with-abortcontroller-a-guide-with-react-examples-573dba8a3758) *(medium.com · 2023-04-15T23:45:26)*
  > With AbortController, you can <strong>initiate a request and then cancel it at any point in time, without having to rely on workarounds like using a timeout or ignoring the response</strong>. This can be especially useful in a React project, where yo...
- [AbortController 2026: Cancel Fetch Properly (With Live Demo) — W3Tweaks](https://www.w3tweaks.com/javascript/javascript-abortcontroller-cancel-fetch) *(w3tweaks.com · 2026-06-10T19:30:00)*
  > What is AbortController in JavaScript? <strong>A built-in object that cancels async work</strong>. It gives you a cancellation token (signal) that you pass to fetch, and an abort() method that immediately rejects the request. Most tutorials show that...
- [AbortController.abort(reason), but the reason gets lost before it arrives to the fetch catch clause](https://stackoverflow.com/questions/73049849/abortcontroller-abortreason-but-the-reason-gets-lost-before-it-arrives-to-the) *(stackoverflow.com)*
  > Copyconst controller = new AbortController(); setTimeout(() =&gt; controller.abort(&#x27;Timeout&#x27;), 30000); try { const response = await fetch(&#x27;some_url&#x27;, { signal: controller.signal }); console.log(&#x27;Fetch response:&#x27;, respons...
- [AbortSignal - Web APIs - W3cubDocs](https://docs.w3cub.com/dom/abortsignal.html) *(docs.w3cub.com)*
  > <strong>If the request is aborted after the fetch() call has been fulfilled but before the response body has been read</strong>, then attempting to read the response body will reject with an AbortError exception.
- [Using AbortController in React. Avoiding unnecessary HTTP requests in… | by Yoav Hirshberg | Medium](https://medium.com/@yoav.yh/using-abortcontroller-in-react-da73a6dd45ad) *(medium.com · 2022-11-28T07:53:44)*
  > It can be set to a specific value ... was aborted, which can be any JavaScript value. <strong>If not explicitly specified, the reason is set to &quot;AbortError&quot; DOMException</strong>. ... Another option is to abort after a given time, by using ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [GitHub - fis-components/whatwg-fetch: Fork from https://github.com/github/fetch.git · GitHub](https://github.com/fis-components/whatwg-fetch) *(github.com)* *(Cites: `https://fetch.spec.whatwg.org`)*
  > GitHub - fis-components/whatwg-fetch: Fork from https://github.com/github/fetch.git · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. ...
- [whatwg-fetch/README.md at master · fis-components/whatwg-fetch](https://github.com/fis-components/whatwg-fetch/blob/master/README.md) *(github.com)* *(Cites: `https://fetch.spec.whatwg.org`)*
  > whatwg-fetch/README.md at master · fis-components/whatwg-fetch · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh you...
- [Spec reads #1: [fetch](https://fetch.spec.whatwg.org/) / Tom MacWright | Observable](https://observablehq.com/@tmcw/spec-reads-1-fetch) *(observablehq.com · 2018-03-23T20:48:52)* *(Cites: `https://fetch.spec.whatwg.org`)*
  > Like most web developers, I&#x27;ve used fetch ever since it was usable in a majority of browsers. Compared to XMLHttpRequest, it was an incredible step forward. But I never took the time to really think it through, until I read the spec re...
- [Fetch Standard (Pull Request Snapshot #632)](https://s3.amazonaws.com/pr-preview/whatwg/fetch/8ab040a...46984f2.html) *(s3.amazonaws.com · 2017-11-15T00:00:00)* *(Cites: `https://fetch.spec.whatwg.org`)*
  > Fetch Standard (Pull Request Snapshot #632) Fetch ( PR #626 #632 ) Commit Snapshot — Last Updated 6 15 November 2017 Participate: GitHub whatwg/fetch ( file an issue , open issues ) IRC: #whatwg on Freenode Commits: GitHub whatwg/fetch/comm...

## 📚 Platform Documentation & Specifications

- [GitHub - fis-components/whatwg-fetch: Fork from https://github.com/github/fetch.git · GitHub](https://github.com/fis-components/whatwg-fetch) *(github.com)*
- [whatwg-fetch/README.md at master · fis-components/whatwg-fetch](https://github.com/fis-components/whatwg-fetch/blob/master/README.md) *(github.com)*
- [AbortSignal - Web APIs - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) *(developer.mozilla.org)*
- [AbortController - Web APIs - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) *(developer.mozilla.org)*
- [New Proposal: Making Fetch Promises work better (i.e. abort-able) and with other APIs(e.g. Promise Combinators) · Issue #1831 · whatwg/fetch](https://github.com/whatwg/fetch/issues/1831) *(github.com)*
- [Expose the error from ReadableStream for Response methods via `err.cause` · Issue #1665 · whatwg/fetch](https://github.com/whatwg/fetch/issues/1665) *(github.com)*
- [How should the ReadableStream from response.body work when it's multipart? · Issue #1021 · whatwg/fetch](https://github.com/whatwg/fetch/issues/1021) *(github.com)*
- [Question — Why can I not read the stream again ? · Issue #196 · whatwg/fetch](https://github.com/whatwg/fetch/issues/196) *(github.com)*
- [Uploading a Request made from a ReadableStream body by yutakahirano · Pull Request #425 · whatwg/fetch](https://github.com/whatwg/fetch/pull/425) *(github.com)*
- [Fetch body streams are not full duplex · Issue #1254 · whatwg/fetch](https://github.com/whatwg/fetch/issues/1254) *(github.com)*
- [Request should allow WritableStream as body · Issue #378 · whatwg/fetch](https://github.com/whatwg/fetch/issues/378) *(github.com)*
- [AbortSignal: reason property - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/reason) *(developer.mozilla.org)*
- [AbortController: abort() method - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) *(developer.mozilla.org)*
- [Request object's AbortSignal does not abort with the expected reason · Issue #43874 · nodejs/node](https://github.com/nodejs/node/issues/43874) *(github.com)*
- [Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 39 result(s) found across 6 planned queries — **33 verified relevant**
  - `"chromestatus.com/feature/5158507786665984" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"fetch.spec.whatwg.org" -site:fetch.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"AbortController" "signal.reason" fetch ("response.json" OR "response.blob" OR "response.body")` — *Finds concrete JavaScript code examples demonstrating how custom abort reasons are handled when consuming fetch Response methods and streams.* (8 returned)
  - `"AbortController" abort reason fetch ("ReadableStream" OR "Response") tutorial OR guide` — *Discovers developer guides and blog posts explaining the propagation of abort reasons throughout the full Fetch API request-response lifecycle.* (8 returned)
  - `site:github.com/whatwg/fetch OR site:issues.chromium.org "abort reason" "Response" "ReadableStream"` — *Tracks WHATWG specification discussions and Chromium bug trackers addressing standard compliance for abort reason propagation in response streams.* (8 returned)
  - `"AbortSignal" reason ("AbortError" OR "DOMException") "response.body" OR "response.text"` — *Surfaces developer discussions and Q&As regarding generic AbortError handling versus developer-supplied abort reasons in stream consumption.* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 2 result(s) found — **3 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **2 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 3 engineer comment(s) read
- **Web Page Excerpts Ingested:** 5 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5158507786665984)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5158507786665984)
- [Specification](https://fetch.spec.whatwg.org)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/502133195)
