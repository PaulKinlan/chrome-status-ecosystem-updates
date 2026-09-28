# Fetch API: Forward reason from AbortController to fetch Response

> **Report Week:** 2026-W40 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Surfaces the abort reason, if one is provided, to the methods of the Response object and its ReadableStream, rather than just the fetch promise. This fills a gap in our compliance with the standard, surfacing the developer-supplied abort reason everywhere it is intended to.

### Motivation

An AbortController can be passed into fetch to allow a request to be aborted. This is already supported; see https://chromestatus.com/feature/5631483679080448.

When calling abort, you can optionally pass in an "abort reason", and the original fetch promise, if it hasn't already resolved, should be rejected with that reason. This is currently working as intended.

*However*, if the fetch promise *has* resolved (after reading the header), but the body has not yet been fully read, the standard also specifies that the abort reason should propagate to the Response methods such as Response.blob(), as well as the ReadableStream Response.body. This part is not currently working; the relevant Promises instead are rejected with generic AbortErrors.

Firefox at least is compliant here but chromium/Edge/Safari are not. This feature is simply for making chromium compliant with the standard in this regard.

## Ecosystem Status

- **Momentum:** High (295 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Shipping enabled by default in Chrome and Edge 154, this update brings Chromium into alignment with the WHATWG Fetch standard by propagating custom abort reasons down to \`Response\` methods (such as \`.json()\` and \`.blob()\`) and \`Response.body\` stream readers. Firefox already conformed to this behavior, and WebKit explicitly endorses the standard, making this an uncontroversial cross-engine parity fix. The change resolves a persistent blind spot where developer-supplied abort errors were replaced with generic \`AbortError\` DOMExceptions once response headers resolved.

### Recommendations
- Actionable Advice: Teams can begin passing rich error objects to \`AbortController.abort(reason)\` to streamline response-reading logic, but should retain a fallback check on \`signal.reason\` inside \`.catch()\` blocks to guard against older Safari and legacy Chromium clients.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "Yes, definitely. Thanks for the bug and tests!..."
- Community package available: \[node-abort-controller\](https://www.npmjs.com/package/node-abort-controller) (v3.1.1) for progressive enhancement.

## Standards Positions

- **WebKit:** [Fetch API: Forward abort reason to Response](https://github.com/WebKit/standards-positions/issues/711) [closed]

## Packages & Polyfills

- [node-abort-controller](https://www.npmjs.com/package/node-abort-controller) `v3.1.1` — AbortController for Node based on EventEmitter
- [abortcontroller-polyfill](https://www.npmjs.com/package/abortcontroller-polyfill) `v1.7.8` — Polyfill/ponyfill for the AbortController DOM API + optional patching of fetch (stub that calls catch, doesn't actually abort request).

## 📰 Ecosystem Blogs & Articles

- [basehub.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE9VAopqVq0HzPiYuC2GJZ6J9736D_DPm8eOMMFjAqqU_guQJbNE4pOM1Fk2lkdg0olHlHPe1f3W7pVlVQukp_yKRGOANS2pau_RxgkdS_B4hA0lv-wBRY1OjeOPg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The Web Platform feature **"Fetch API: Forward reason from AbortController to fetch Response"** (tracked in Chromium under `ForwardReasonToFetchBodyAbort` and bug 502133195) resolves a long-standing standards-compliance ga
- [fetch Body promises not rejected with reason from AbortSignal \[502133195\] - Chromium](https://issues.chromium.org/issues/502133195) *(issues.chromium.org)*
  > Chrome Status entry: https://<strong>chromestatus.com/feature/5158507786665984</strong> Intent to Ship: https://groups.google.com/a/chromium.org/g/blink-dev/c/GrS94YdOTJI Bug: 502133195 Change-Id: I681ff7a64c3fcbc0237c546318c28393ad393f24 Reviewed-on...
- [Fetch API: Forward reason from AbortController to fetch Response - Chrome Platform Status](https://chromestatus.com/feature/5158507786665984) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [\[blink-dev\] Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17127.html) *(mail-archive.com)*
  > Specification https://fetch.sp... https://chromestatus.com/feature/5631483679080448 <strong>When calling abort, you can optionally pass in an &quot;abort reason&quot;, and the original fetch promise if it hasn&#x27;t resolved should be rejected with ...
- [\[blink-dev\] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17184.html) *(mail-archive.com)*
  > &gt; &gt; Thanks, &gt; Dan &gt; &gt; On Wednesday, ...romestatus.com/feature/5631483679080448 <strong>When calling abort, &gt;&gt; you can optionally pass in an &quot;abort reason&quot;, and the original fetch &gt;&gt; promise if it hasn&#x27;t resol...
- [Re: \[blink-dev\] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17242.html) *(mail-archive.com)*
  > Thanks, Dan On Wednesday, August ... https://chromestatus.com/feature/5631483679080448 <strong>When calling abort, you can optionally pass in an &quot;abort reason&quot;, and the original fetch promise if it hasn&#x27;t resolved should be rejected wi...
- [\[blink-dev\] RE: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17177.html) *(mail-archive.com)*
  > Thanks, Dan On Wednesday, August ... https://chromestatus.com/feature/5631483679080448 <strong>When calling abort, you can optionally pass in an &quot;abort reason&quot;, and the original fetch promise if it hasn&#x27;t resolved should be rejected wi...
- [AbortSignal - Web APIs - W3cubDocs](https://docs.w3cub.com/dom/abortsignal.html) *(docs.w3cub.com)*
  > <strong>If the request is aborted after the fetch() call has been fulfilled but before the response body has been read</strong>, then attempting to read the response body will reject with an AbortError exception.
- [Fetch API Explained: Handling Responses, Headers, Abort Signals, and Download Progress \| by Think & Build \| Stackademic](https://blog.stackademic.com/fetch-api-explained-handling-responses-headers-abort-signals-and-download-progress-57bdcb19493d?gi=6746c0c62d72) *(blog.stackademic.com · 2025-11-16T07:57:03)*
  > let promise = fetch(url , { signal: ... data is downloaded ? ... The fetch method allows you to track download progress. <strong>To track download progress</strong>, we can use response.body property....
- [Abortable fetch \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/abortable-fetch) *(developer.chrome.com · 2017-09-28T00:00:00)*
  > For instance, here&#x27;s how you&#x27;d ... }).then(response =&gt; { return response.text(); }).then(text =&gt; { console.log(text); }); <strong>When you abort a fetch, it aborts both the request and response</strong>, so any reading of the response...
- [javascript - AbortController.abort(reason), but the reason gets lost before it arrives to the fetch catch clause - Stack Overflow](https://stackoverflow.com/questions/73049849/abortcontroller-abortreason-but-the-reason-gets-lost-before-it-arrives-to-the) *(stackoverflow.com)*
  > So when fetch throws an error, if it is a DOMException with an &#x27;AbortError&#x27; name, you may rely on the signal&#x27;s reason. Note that the aborted property of the signal might not reliable depending on where you check it because the signal c...
- [Using AbortController in React. Avoiding unnecessary HTTP requests in… \| by Yoav Hirshberg \| Medium](https://medium.com/@yoav.yh/using-abortcontroller-in-react-da73a6dd45ad) *(medium.com · 2022-11-28T07:53:44)*
  > We can abort the request when needed, by calling AbortController.abort(). <strong>The abort()method aborts a DOM request before it has been completed</strong>. It is able to abort fetch requests , the consumption of any response bodies, or streams. c...
- [AbortController.abort() - Web APIs \| MDN](https://mdn2.netlify.app/en-us/docs/web/api/abortcontroller/abort) *(mdn2.netlify.app)*
  > <strong>The abort() method of the AbortController interface aborts a DOM request before it has completed. This is able to abort fetch requests, the consumption of any response bodies, or streams. ... The reason why the operation was aborted, which ca...
- [javascript - AbortController and fetch: how to distinguish network error from abort error - Stack Overflow](https://stackoverflow.com/questions/61741423/abortcontroller-and-fetch-how-to-distinguish-network-error-from-abort-error) *(stackoverflow.com)*
  > 7 AbortController.abort(reason), but the reason gets lost before it arrives to the fetch catch clause
- [javascript - React Native fetch abortController - figuring out abort reason - Stack Overflow](https://stackoverflow.com/questions/73167380/react-native-fetch-abortcontroller-figuring-out-abort-reason) *(stackoverflow.com)*
  > The web implementation does support passing a &quot;reason&quot; into the abort() call. But looks like reactNative doesn&#x27;t have that implemented ( Using react-native 0.63.3 ) async function request(url, abortController) { // Manually timing out,...
- [AbortSignal.timeout() in fetch request always responds with AbortError but not TimeoutError](https://stackoverflow.com/questions/75969669/abortsignal-timeout-in-fetch-request-always-responds-with-aborterror-but-not-t) *(stackoverflow.com)*
  > The signal aborts with either TimeoutError on timeout, or with AbortError due to <strong>pressing a browser stop button, closing the tab (or some other inbuilt &quot;stop&quot; operation).</strong> The response that I get every time when running getD...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [fetch Body promises not rejected with reason from AbortSignal \[502133195\] - Chromium](https://issues.chromium.org/issues/502133195) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5158507786665984`)*
  > Chrome Status entry: https://<strong>chromestatus.com/feature/5158507786665984</strong> Intent to Ship: https://groups.google.com/a/chromium.org/g/blink-dev/c/GrS94YdOTJI Bug: 502133195 Change-Id: I681ff7a64c3fcbc0237c546318c28393ad393f24 R...

## 📚 Platform Documentation & Specifications

- [AbortController: abort() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) *(developer.mozilla.org)*
- [AbortController abort reason Parameter · Issue #1462 · node-fetch/node-fetch](https://github.com/node-fetch/node-fetch/issues/1462) *(github.com)*
- [AbortSignal: reason property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/reason) *(developer.mozilla.org)*
- [fetch: aborting before the response head rejects the promise but leaves the request running on the wire · Issue #158 · YawLabs/oam](https://github.com/YawLabs/oam/issues/158) *(github.com)*
- [expo/fetch rejects network failures with a plain Error (not TypeError) and drops the abort reason on mid-flight cancels · Issue #50212 · expo/expo](https://github.com/expo/expo/issues/50212) *(github.com)*
- [fix: contain AbortError from aborted response body cancellation by denispol · Pull Request #9 · kashyab12/pi-devin](https://github.com/kashyab12/pi-devin/pull/9) *(github.com)*
- [Retire controlled Service Worker fetches on abort and timeout · Issue #340 · SceneTech/WebScene](https://github.com/SceneTech/WebScene/issues/340) *(github.com)*
- [Client-aborted RSC stream is reported to onRequestError as "The destination stream closed early." · Issue #96704 · vercel/next.js](https://github.com/vercel/next.js/issues/96704) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 60 result(s) found across 11 planned queries — **23 verified relevant**
  - `"chromestatus.com/feature/5158507786665984" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"fetch.spec.whatwg.org" -site:fetch.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" API` — *Core feature API query* (3 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromestatus.com" OR "response.blob" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (4 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
  - `"AbortSignal.reason" fetch "response.body" OR "response.blob"` — *Find code snippets and WebIDL implementations demonstrating access to developer-supplied abort reasons during Response body reading.* (8 returned)
  - `"AbortController.abort" reason fetch response stream javascript` — *Discover blog posts and developer tutorials covering custom abort reason handling across fetch ReadableStream and Response consumption methods.* (8 returned)
  - `"AbortError" "abort reason" fetch response stream site:github.com OR site:stackoverflow.com` — *Locate developer discussions and bug reports dealing with fetch streams unexpectedly defaulting to generic AbortError instead of custom reasons.* (8 returned)
  - `Chromium "fetch" forward abort reason Response body bug OR status` — *Track browser engine implementation tracking, Chromium/WebKit bug tickets, and cross-browser compliance regarding abort reason propagation.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **1 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **2 verified relevant**
- **Web Platform Tests (wpt.fyi):** 1619 item(s) inspected

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
