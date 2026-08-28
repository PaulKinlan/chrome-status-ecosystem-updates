# Fetch API: Forward reason from AbortController to fetch Response

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Surfaces the abort reason, if one is provided, to the methods of the Response object and its ReadableStream, rather than just the fetch promise. This fills a gap in our compliance with the standard, surfacing the developer-supplied abort reason everywhere it is intended to.

### Motivation

An AbortController can be passed into fetch to allow a request to be aborted. This is already supported; see https://chromestatus.com/feature/5631483679080448.

When calling abort, you can optionally pass in an "abort reason", and the original fetch promise, if it hasn't already resolved, should be rejected with that reason. This is currently working as intended.

*However*, if the fetch promise *has* resolved (after reading the header), but the body has not yet been fully read, the standard also specifies that the abort reason should propagate to the Response methods such as Response.blob(), as well as the ReadableStream Response.body. This part is not currently working; the relevant Promises instead are rejected with generic AbortErrors.

Firefox at least is compliant here but chromium/Edge/Safari are not. This feature is simply for making chromium compliant with the standard in this regard.

## Ecosystem Status

- **Momentum:** High (370 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** This specification compliance update aligns Chromium with the WHATWG Fetch standard by propagating developer-specified abort reasons to Response body methods (such as response.text() or response.blob()) and the underlying Response.body ReadableStream when an abort occurs post-header resolution. Firefox has already supported this standard behavior, and Chromium's rollout in Chrome 154 closes a longstanding cross-browser inconsistency where body-reading promises rejected with generic AbortErrors instead of the supplied reason. Browser engines are in strong consensus on adhering to the Fetch specification.

### Recommendations
- Actionable Advice: Developers can safely pass structured errors or reasons to AbortController.abort(reason), but should still include fallback checks for generic DOMException AbortError instances on older browser engines that have not yet updated their stream abort pipeline.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "Yes, definitely. Thanks for the bug and tests!..."
- Community package available: [node-abort-controller](https://www.npmjs.com/package/node-abort-controller) (v3.1.1) for progressive enhancement.

## Standards Positions

- **WebKit:** [Fetch API: Forward abort reason to Response](https://github.com/WebKit/standards-positions/issues/711) [closed]

## Packages & Polyfills

- [node-abort-controller](https://www.npmjs.com/package/node-abort-controller) `v3.1.1` — AbortController for Node based on EventEmitter
- [abortcontroller-polyfill](https://www.npmjs.com/package/abortcontroller-polyfill) `v1.7.8` — Polyfill/ponyfill for the AbortController DOM API + optional patching of fetch (stub that calls catch, doesn't actually abort request).

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFrcEEPo86xJlmHGSWWGms7ILy9jOs48IrAX8fvC3BlCC6OD_yeqxdHxnyAbbfTU-vfmtLJjvep5rIp20xeWfXSQ5iVOiiJb9bkmS9W6B8vWDiRgY92S5nVK-8imrI9k5XsvYZQfSL08VZfMuLNDSfmpAZ8D-VlnHSkAmoryA==) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHln3tH8-o2NQPWn1ZNUsl9atNPpjAD-rW_w-A7dglG6QCzELnVN7A4iRUClOz2Eybz7WNhIq5PRNK7npV3p_mQj1DOW2WyyaXaY-OB75KFo08F7PcyONz9sHciImcCTtUQal5N1osEeT1i0WKu9reTdag=) *(vertexaisearch.cloud.google.com)*
  > AbortSignal - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs AbortSignal Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 한국어 Português (do Brasil) Русский 中文 (简体)...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFI4FJ4tiblYjME0NnvQsQyvVN9JB0_npAEGHXGINUJsH8zn84CciV9nyyPFNA--DNwHUU8VbJILWxti50LhC1MWo1BrCA-bkcSR8VROo_PzO1kL1h-K95z-7LxQQgg8s_wcjZelKs7) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGjMD2j3VEJ_K_jEmDKR-srBjtV44T1BbYT04e-MIDaZDAbdgUq2auAl04Okk4K7HvrTXxJLX9y3VaplugzYTBw9xESGm_HvxBrYYkO8KpYqQj8iW8j8H8WiO4eMdmZTA0pc7e1S_MMM81bq8Pr_0K2qQbSdQS100XvkjBs5T2Myrhx) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [bsky.app](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHt-yPBmWiGVTNp_QbK4eCXrh6EyUspLSn1WbSZUGGc9lvW5uB62uXVNG1RtlCamPyqNteNMGMYnWHdCkSNH7cx49ySfa5ZhbcAWIdbtMiOulyW3t9CuY2VhM7vlfRBiQ==) *(vertexaisearch.cloud.google.com)*
  > @intenttoship.dev on Bluesky JavaScript Required This is a heavily interactive web application, and JavaScript is required. Simple HTML interfaces are possible, but that is not what this is. Learn more about Bluesky at bsky.social and atproto.com . P...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGA53Ny3RM_c5BGHdP_Cnb2D0aHYtYfLLlXOaiKXrpy94-Y2mKsBL2hVSL9SBEbzhYyNu2jpMPQ-29c6CqPHmp-36oURCIeMXm4pv61kagNsDCV1yXilzQCZVatqfXgE0GSojZqZ7wvG5RWAX7_m3JAHjZw5muR49zO7xb0UA==) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHkL70icwAFVuad8skVM6Php-fmLN5tNwl1hbtfGuuZ9EeGd697ey24Z7wC3rHsk-VWrJ126ZBkbTbpJrfhhvc374oVHaefNO5oDY5AEbd1PouJ3NU__S2wB_TjBqbaYcOSSa-ywMaMRVnk) *(vertexaisearch.cloud.google.com)*
  > 2053627 - [wpt-sync] Sync PR 61153 - Forwarding abort reason from AbortController.abort() to fetch() response Mozilla Home Privacy Cookies Legal Bugzilla Log In Log In with GitHub or Remember me Create an Account &middot; Forgot Password Browse Advan...
- [hch-log.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGEuT9F8R0Wx1si1AV9l19sK6H8O61A-apVgsTUCNpoaj46fFJiplJlkodnnnRy4I-stQzWJoDQl-2X3Qwlup4scTI_WKQTqWX-VmUKtoVg24ExqgGTzvKuH1gnyhqOSGC1xnBBnYm0iZBtSDmxNgwtTRTtFa53CcbeEfALUW7mmCek9FU=) *(vertexaisearch.cloud.google.com)*
  > AbortController: Cancel Stale Work, Not Every Error · hch-log Skip to content < Back to notes browser APIs JavaScript async web development 2026-08-21 · Hung-Chih Hsueh Topic: Web platform AbortController: Cancel Stale Work, Not Every Error AbortCont...
- [[blink-dev] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17136.html) *(mail-archive.com)*
  > &gt; *No information provided* &gt; &gt; *Link to entry on the Chrome Platform Status* &gt; https://<strong>chromestatus.com/feature/5158507786665984</strong>?gate=6176253840326656 &gt; &gt; This intent message was generated by Chrome Platform Status...
- [Spec reads #1: [fetch](https://fetch.spec.whatwg.org/) / Tom MacWright | Observable](https://observablehq.com/@tmcw/spec-reads-1-fetch) *(observablehq.com · 2018-03-23T20:48:52)*
  > Like most web developers, I&#x27;ve used fetch ever since it was usable in a majority of browsers. Compared to XMLHttpRequest, it was an incredible step forward. But I never took the time to really think it through, until I read the spec recently. He...
- [Fetch Standard (Pull Request Snapshot #632)](https://s3.amazonaws.com/pr-preview/whatwg/fetch/8ab040a...46984f2.html) *(s3.amazonaws.com · 2017-11-15T00:00:00)*
  > Do not attempt to implement this version of the specification. Do not reference this version as authoritative in any way. Instead, see https://<strong>fetch.spec.whatwg.org</strong>/ for the living standard. The Fetch standard defines requests, respo...
- [Abortable fetch | Blog | Chrome for Developers](https://developer.chrome.com/blog/abortable-fetch) *(developer.chrome.com · 2017-09-28T00:00:00)*
  > const controller = new AbortController(); const signal = controller.signal; setTimeout(() =&gt; controller.abort(), 5000); fetch(url, { signal }).then(response =&gt; { return response.text(); }).then(text =&gt; { console.log(text); }); <strong>When y...
- [The Complete Guide to AbortController and AbortSignal | by Amit Kumar | Medium](https://medium.com/@amitazadi/the-complete-guide-to-abortcontroller-and-abortsignal-from-basics-to-advanced-patterns-a3961753ef54) *(medium.com · 2025-09-03T17:12:13)*
  > // Different cancellation scenarios const reasons = { userCancel: &#x27;User clicked cancel button&#x27;, timeout: &#x27;Request exceeded 30 second limit&#x27;, navigation: &#x27;User navigated away from page&#x27;, newRequest: &#x27;Newer request su...
- [Fetch: Abort](https://javascript.info/fetch-abort) *(javascript.info · 2022-04-13T00:00:00)*
  > fetch integrates with it: we pass the signal property as the option, and then fetch listens to it, so it’s possible to abort the fetch. We can use AbortController in our code. The “call abort()” → “listen to abort event” interaction is simple and uni...
- [AbortController & AbortSignal - DEV Community](https://dev.to/mohsenfallahnjd/abortcontroller-abortsignal-5ea4) *(dev.to · 2025-09-23T09:14:49)*
  > <strong>AbortController is the standard way to cancel async work in modern JavaScript</strong>. It pairs with AbortSignal, which you pass to tasks so they can stop immediately. Create a controller → pass controller.signal to your async work.
- [Using AbortController with Fetch API and ReactJS. | by Pablo Garcia | Medium](https://pgarciacamou.medium.com/using-abortcontroller-with-fetch-api-and-reactjs-8d4177e51270) *(pgarciacamou.medium.com · 2022-06-03T19:19:37)*
  > ...(addCSRFTkn &amp;&amp; { &quot;X-CSRF-Token&quot;: _csrf }), ...headers }, credentials: &quot;same-origin&quot;, ...(signalKey &amp;&amp; { signal: abortAndGetSignalSafe(signalKey) }), ...(addBody &amp;&amp; { body: JSON.stringify(body) }), ...res...
- [Canceling API Requests Using fetch() And AbortController In JavaScript](https://www.bennadel.com/blog/4180-canceling-api-requests-using-fetch-and-abortcontroller-in-javascript.htm) *(bennadel.com · 2022-01-12T11:24:10)*
  > */ async unwrapResponseData( response ) { var contentType = response.headers.has( &quot;content-type&quot; ) ? response.headers.get( &quot;content-type&quot; ) : &quot;&quot; ; if ( RE_CONTENT_TYPE_JSON.test( contentType ) ) { return( response.json()...
- [How to Use Fetch with async/await - Dmitri Pavlutin](https://dmitripavlutin.com/javascript-fetch-async-await) *(dmitripavlutin.com · 2023-01-25T00:00:00)*
  > Because fetch() returns a promise, you can simplify the code by using the async/await syntax: response = await fetch(). If you need to cancel a fetch() request, then you need to <strong>connect the request with an abort controller</strong>.
- [Fetch with AbortController - DEV Community](https://dev.to/madsstoumann/fetch-with-abortcontroller-4ph2) *(dev.to · 2024-03-22T12:12:16)*
  > t (return type: &#x27;json&#x27;, &#x27;text&#x27; — or leave blank to get the response) o (options) s (AbortController.signal) Basic fetch, return response · const data = await go( &#x27;https://jsonplaceholder.typicode.com/posts/&#x27; ); Basic fet...
- [Resilient Fetch Requests in JavaScript with AbortController: A Guide with React Examples | by Tawan | CodeX | Medium](https://medium.com/codex/resilient-fetch-requests-in-javascript-with-abortcontroller-a-guide-with-react-examples-573dba8a3758) *(medium.com · 2023-04-15T23:45:26)*
  > const controller = new AbortController() // Later, to abort the request: controller.abort(); You can pass the controller to the signal option in a fetch() call: fetch(&#x27;/data&#x27;, { signal: controller.signal } .then(response =&gt; response.json...
- [The Easy Way to Cancel Fetch Requests When You Don’t Need Them - DEV Community](https://dev.to/rigalpatel001/the-easy-way-to-cancel-fetch-requests-when-you-dont-need-them-1d3g) *(dev.to · 2024-08-24T07:26:12)*
  > // Step 1: Create an instance of AbortController const controller = new AbortController(); // Step 2: Pass the signal to the fetch request fetch(&#x27;https://jsonplaceholder.typicode.com/posts&#x27;, { signal: controller.signal }) .then(response =&g...
- [[blink-dev] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17184.html) *(mail-archive.com)*
  > *However*, if the fetch promise *has* resolved &gt;&gt; (after reading the header), but the body has not yet been fully read, this &gt;&gt; is also intended to propagate the abort reason to the Response methods such &gt;&gt; as Response.blob(), as we...
- [AbortController 2026: Cancel Fetch Properly (With Live Demo) — W3Tweaks](https://www.w3tweaks.com/javascript/javascript-abortcontroller-cancel-fetch) *(w3tweaks.com · 2026-06-10T19:30:00)*
  > Debounce + AbortController is the optimal autocomplete pattern — debounce reduces requests, abort kills in-flight stragglers · An AbortController is single-use — once aborted, create a fresh one for the next request · Always ignore AbortError in your...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17136.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5158507786665984`)*
  > &gt; *No information provided* &gt; &gt; *Link to entry on the Chrome Platform Status* &gt; https://<strong>chromestatus.com/feature/5158507786665984</strong>?gate=6176253840326656 &gt; &gt; This intent message was generated by Chrome Platf...
- [GitHub - fis-components/whatwg-fetch: Fork from https://github.com/github/fetch.git · GitHub](https://github.com/fis-components/whatwg-fetch) *(github.com)* *(Cites: `https://fetch.spec.whatwg.org`)*
  > [code-of-conduct]: http://todogroup.org/opencodeofconduct/#fetch/opensource@github.com · <strong>The global fetch function is an easier way to make web requests and handle responses than using an XMLHttpRequest</strong>.
- [whatwg-fetch/README.md at master · fis-components/whatwg-fetch](https://github.com/fis-components/whatwg-fetch/blob/master/README.md) *(github.com)* *(Cites: `https://fetch.spec.whatwg.org`)*
  > [code-of-conduct]: http://todogroup.org/opencodeofconduct/#fetch/opensource@github.com · <strong>The global fetch function is an easier way to make web requests and handle responses than using an XMLHttpRequest</strong>.
- [Spec reads #1: [fetch](https://fetch.spec.whatwg.org/) / Tom MacWright | Observable](https://observablehq.com/@tmcw/spec-reads-1-fetch) *(observablehq.com · 2018-03-23T20:48:52)* *(Cites: `https://fetch.spec.whatwg.org`)*
  > Like most web developers, I&#x27;ve used fetch ever since it was usable in a majority of browsers. Compared to XMLHttpRequest, it was an incredible step forward. But I never took the time to really think it through, until I read the spec re...
- [Fetch Standard (Pull Request Snapshot #632)](https://s3.amazonaws.com/pr-preview/whatwg/fetch/8ab040a...46984f2.html) *(s3.amazonaws.com · 2017-11-15T00:00:00)* *(Cites: `https://fetch.spec.whatwg.org`)*
  > Do not attempt to implement this version of the specification. Do not reference this version as authoritative in any way. Instead, see https://<strong>fetch.spec.whatwg.org</strong>/ for the living standard. The Fetch standard defines reque...

## 📚 Platform Documentation & Specifications

- [GitHub - fis-components/whatwg-fetch: Fork from https://github.com/github/fetch.git · GitHub](https://github.com/fis-components/whatwg-fetch) *(github.com)*
- [whatwg-fetch/README.md at master · fis-components/whatwg-fetch](https://github.com/fis-components/whatwg-fetch/blob/master/README.md) *(github.com)*
- [AbortSignal - Web APIs - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) *(developer.mozilla.org)*
- [AbortController - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) *(developer.mozilla.org)*
- [AbortController: abort() method - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) *(developer.mozilla.org)*
- [GitHub - node-fetch/node-fetch: A light-weight module that brings the Fetch API to Node.js · GitHub](https://github.com/node-fetch/node-fetch) *(github.com)*
- [New Proposal: Making Fetch Promises work better (i.e. abort-able) and with other APIs(e.g. Promise Combinators) · Issue #1831 · whatwg/fetch](https://github.com/whatwg/fetch/issues/1831) *(github.com)*
- [Attempting to modify a fetch after it has completed / aborted / failed · Issue #448 · whatwg/fetch](https://github.com/whatwg/fetch/issues/448) *(github.com)*
- [Add a `timeout` option, to prevent hanging · Issue #951 · whatwg/fetch](https://github.com/whatwg/fetch/issues/951) *(github.com)*
- [Proposal: fetch with multiple AbortSignals · Issue #905 · whatwg/fetch](https://github.com/whatwg/fetch/issues/905) *(github.com)*
- [Consider response.throwIfNotOk() · Issue #1679 · whatwg/fetch](https://github.com/whatwg/fetch/issues/1679) *(github.com)*
- [Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 33 result(s) found across 6 planned queries — **26 verified relevant**
  - `"chromestatus.com/feature/5158507786665984" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"fetch.spec.whatwg.org" -site:fetch.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"AbortController" "signal.reason" fetch "response.body" OR "response.blob"` — *Finds technical articles and guides explaining how custom abort reasons propagate through fetch response body streams and reader methods.* (8 returned)
  - `"controller.abort(" fetch ("response.blob()" OR "response.text()" OR "response.json()")` — *Locates concrete JavaScript code examples demonstrating passing custom error reasons via AbortController to fetch Response consumer promises.* (8 returned)
  - `(site:github.com/whatwg/fetch OR site:issues.chromium.org) "abort reason" "Response"` — *Uncovers standards discussions, Chromium bug reports, and WHATWG spec issue threads regarding abort reason propagation gaps across browsers.* (8 returned)
  - `"AbortController" "abort reason" fetch "ReadableStream" "AbortError" (Chrome OR Firefox OR Safari)` — *Identifies cross-browser compatibility discussions, platform status updates, and developer sentiment regarding generic AbortError vs custom reason propagation.* (2 returned)
- **Google Search Grounding (gemini-3.7-flash):** 8 result(s) found — **8 verified relevant**
- **Dev.to Community Blogs:** 8 result(s) found — **23 verified relevant**
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
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5158507786665984)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5158507786665984)
- [Specification](https://fetch.spec.whatwg.org)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/502133195)
