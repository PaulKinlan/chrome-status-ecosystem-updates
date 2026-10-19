# Fetch API: Forward reason from AbortController to fetch Response

> **Report Week:** 2026-W43 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Surfaces the abort reason, if one is provided, to the methods of the Response object and its ReadableStream, rather than just the fetch promise. This fills a gap in our compliance with the standard, surfacing the developer-supplied abort reason everywhere it is intended to.

### Motivation

An AbortController can be passed into fetch to allow a request to be aborted. This is already supported; see https://chromestatus.com/feature/5631483679080448.  When calling abort, you can optionally pass in an "abort reason", and the original fetch promise, if it hasn't already resolved, should be rejected with that reason. This is currently working as intended.  \*However\*, if the fetch promise \*has\* resolved (after reading the header), but the body has not yet been fully read, the standard also specifies that the abort reason should propagate to the Response methods such as Response.blob(), as well as the ReadableStream Response.body. This part is not currently working; the relevant Promises instead are rejected with generic AbortErrors.  Firefox at least is compliant here but chromium/Edge/Safari are not. This feature is simply for making chromium compliant with the standard in this regard.

## Ecosystem Status

- **Momentum:** Emerging (footprint 175 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** This specification update aligns Chromium with the WHATWG Fetch standard by propagating user-supplied abort reasons from an AbortController down into Response methods (such as .blob(), .json(), and .text()) and Response.body streams. Enabled by default starting in Chrome and Microsoft Edge 154, it resolves an interoperability gap where aborted streaming reads fell back to generic AbortError DOMExceptions rather than the specified cancellation payload. Engine consensus is fully united around the WHATWG specification, closing an inconsistency where Firefox was previously the only compliant implementation.

### Recommendations
- Actionable Advice: Development teams can immediately adopt expressive abort reasons in AbortController.abort() for richer debugging and flow control, but stream-reading catch blocks should continue providing fallback checks for generic AbortError DOMExceptions until Safari deployment catch-up is confirmed. No build polyfill is required, as the change operates purely as a non-breaking standards compliance fix.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "Yes, definitely. Thanks for the bug and tests!..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Fetch API: Forward abort reason to Response](https://github.com/WebKit/standards-positions/issues/711) [closed]

## Web-features Group

*group-level data: web-features [`abortable-fetch`](https://webstatus.dev/features/abortable-fetch), shared with 1 other ChromeStatus feature*

- Share of tests passing in the web-features group `abortable-fetch` on [wpt.fyi](https://wpt.fyi/results?q=feature:abortable-fetch) (via webstatus.dev) — stable: Chrome 66.7% · Edge 66.7% · Firefox 66.7% · Safari 66.7%; experimental: Chrome 66.7% · Edge 66.7% · Firefox 66.7% · Safari 66.7%

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img544-dot-cr-status.appspot.com/feature/5158507786665984) *(img544-dot-cr-status.appspot.com)*
  > The \*\*"Fetch API: Forward reason from AbortController to fetch Response"\*\* feature bridges a long-standing compliance gap in the Fetch specification This enhancement moves browsers closer to full compliance with the WHATWG Fetch and DOM specification...
- [appspot.com](https://cr-status.appspot.com/feature/5158507786665984?gate=5331828910194688) *(cr-status.appspot.com)*
  > Previously, when an \`AbortController\` aborted a network request, the abort reason (e.g., a custom error message, timeout indicator, or specific exception) was correctly passed to the top-level \`fetch()\` promise However, it often did not properly surf...
- [AbortController.abort(reason), but the reason gets lost before it arrives to the fetch catch clause](https://stackoverflow.com/questions/73049849/abortcontroller-abortreason-but-the-reason-gets-lost-before-it-arrives-to-the) *(stackoverflow.com)*
  > text()\`) or readable streams failed to propagate the exact user-defined abort reason abort(reason)\` (such as explicit timeout markers, user-initiated action tokens, or UI component unmount codes)
- [reddit.com](https://www.reddit.com/r/webdev/comments/wf4nz1/weird_behaviour_aborting_a_fetch_request_during) *(reddit.com)*
  > text()\`) or readable streams failed to propagate the exact user-defined abort reason
- [\[blink-dev\] Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17127.html) *(mail-archive.com)*
  > Specification https://fetch.sp... https://chromestatus.com/feature/5631483679080448 &lt;strong&gt;When calling abort, you can optionally pass in an &quot;abort reason&quot;, and the original fetch promise if it hasn&#x27;t resolved should be rejected with ...
- [\[blink-dev\] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17184.html) *(mail-archive.com)*
  > &gt; &gt; Thanks, &gt; Dan &gt; &gt; On Wednesday, ...romestatus.com/feature/5631483679080448 &lt;strong&gt;When calling abort, &gt;&gt; you can optionally pass in an &quot;abort reason&quot;, and the original fetch &gt;&gt; promise if it hasn&#x27;t resol...
- [Re: \[blink-dev\] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17242.html) *(mail-archive.com)*
  > Thanks, Dan On Wednesday, August ... https://chromestatus.com/feature/5631483679080448 &lt;strong&gt;When calling abort, you can optionally pass in an &quot;abort reason&quot;, and the original fetch promise if it hasn&#x27;t resolved should be rejected wi...
- [\[blink-dev\] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17136.html) *(mail-archive.com)*
  > Thanks, Dan On Wednesday, August ... https://chromestatus.com/feature/5631483679080448 &lt;strong&gt;When calling abort, you &gt; can optionally pass in an &quot;abort reason&quot;, and the original fetch promise if &gt; it hasn&#x27;t resolved should be r...
- [How do you abort a web request using \`AbortController\` in JavaScript? \| Quiz Interview Questions with Solutions](https://www.greatfrontend.com/questions/quiz/how-do-you-abort-a-web-request-using-abortcontrollers) *(greatfrontend.com · 2021-09-05T00:00:00)*
  > &lt;strong&gt;Create an AbortController, pass its signal to fetch(), and call controller.abort() when the result is no longer needed&lt;/strong&gt;. fetch() and response-body consumption reject when aborted. Treat cancellation as an expected control-flow outcome...
- [A Practical Guide to the AbortController API - DEV Community](https://dev.to/bdestrempes/a-practical-guide-to-the-abortcontroller-api-5420) *(dev.to · 2025-05-19T23:50:25)*
  > function createCancellableRequest(endpoint: string) { const controller = new AbortController() const requestPromise = fetch(endpoint, { signal: controller.signal, }) .then((response) =&gt; { // Handle the response }) .catch((error) =&gt; { // Check i...
- [AbortController & AbortSignal - DEV Community](https://dev.to/mohsenfallahnjd/abortcontroller-abortsignal-5ea4) *(dev.to · 2025-09-23T09:14:49)*
  > Tip: &lt;strong&gt;If you pass a reason, propagate it in your own tasks&lt;/strong&gt;. fetch will still reject with AbortError. ... // Modern browsers &amp; Node 18+ const res = await fetch(&#x27;/slow&#x27;, { signal: AbortSignal.timeout(3000) }) ... const c =...
- [Diff - e6be34032d6c858ed06effbc0f7e5afdb45a793d^! - chromium/src.git - Git at Google](https://chromium.googlesource.com/chromium/src.git/+/e6be34032d6c858ed06effbc0f7e5afdb45a793d%5E!) *(chromium.googlesource.com)*
  > Reject promise with error. if (resolver\_) { - resolver\_-&gt;Reject( - MakeGarbageCollected&lt;DOMException&gt;(DOMExceptionCode::kAbortError)); + resolver\_-&gt;Reject(error); resolver\_.Clear(); } if (threadable\_loader\_) { @@ -887,6 +892,16 @@ threada...
- [Re: \[blink-dev\] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17238.html) *(mail-archive.com)*
  > &gt; Is this feature fully tested by &gt; web-platform-tests&lt;https://chromium.googlesource.com/chromium/src/+/main/docs/testing/web\_platform\_tests.md&gt;? &gt; Yes &gt; https://wpt.fyi/results/fetch/api/abort/general.any.html Specifically the &gt;...

## 📚 Platform Documentation & Specifications

- [AbortController - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) *(developer.mozilla.org)*
- [AbortController abort reason Parameter · Issue #1462 · node-fetch/node-fetch](https://github.com/node-fetch/node-fetch/issues/1462) *(github.com)*
- [1378342 - Aborting fetch (and possibly streams), part 2](https://bugzilla.mozilla.org/show_bug.cgi?id=1378342) *(bugzilla.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 56 result(s) found across 11 planned queries — **13 verified relevant**
  - `"chromestatus.com/feature/5158507786665984" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"fetch.spec.whatwg.org" -site:fetch.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" API` — *Core feature API query* (3 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromestatus.com" OR "response.blob" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (6 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (4 returned)
  - `fetch api abortcontroller abort reason response body javascript example` — *Finds real-world code examples and WebIDL usage demonstrating how to pass and handle abort reasons with fetch Response and ReadableStream.* (8 returned)
  - `"AbortController" "abort reason" fetch response.blob error handling guide` — *Targets community blog posts and practical tutorials explaining how to use abort reasons with already resolved fetch responses.* (8 returned)
  - `chrome status fetch abort reason readable stream adoption` — *Searches for ecosystem announcements, status updates, and browser compatibility information regarding the abort reason fix in Chromium.* (8 returned)
  - `javascript fetch abortcontroller stream aborterror vs custom reason discussion` — *Discovers developer discussions and issues regarding AbortError versus custom developer-supplied abort reasons in streaming responses.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 6 result(s) found — **4 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Tweets found by web search:** 2 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 3 result(s) found — **2 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "abortable-fetch", shared with 1 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "abortable-fetch": Chrome 66.7% passing (stable)*
- **Sources cited by the AI synthesis:** 2 result(s) found — **0 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 3 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5158507786665984)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5158507786665984)
- [Specification](https://fetch.spec.whatwg.org)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/502133195)
