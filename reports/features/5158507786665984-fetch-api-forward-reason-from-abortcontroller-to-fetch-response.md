# Fetch API: Forward reason from AbortController to fetch Response

> **Report Week:** 2026-W39 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Surfaces the abort reason, if one is provided, to the methods of the Response object and its ReadableStream, rather than just the fetch promise. This fills a gap in our compliance with the standard, surfacing the developer-supplied abort reason everywhere it is intended to.

### Motivation

An AbortController can be passed into fetch to allow a request to be aborted. This is already supported; see https://chromestatus.com/feature/5631483679080448.

When calling abort, you can optionally pass in an "abort reason", and the original fetch promise, if it hasn't already resolved, should be rejected with that reason. This is currently working as intended.

*However*, if the fetch promise *has* resolved (after reading the header), but the body has not yet been fully read, the standard also specifies that the abort reason should propagate to the Response methods such as Response.blob(), as well as the ReadableStream Response.body. This part is not currently working; the relevant Promises instead are rejected with generic AbortErrors.

Firefox at least is compliant here but chromium/Edge/Safari are not. This feature is simply for making chromium compliant with the standard in this regard.

## Ecosystem Status

- **Momentum:** High (235 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Shipping enabled by default in Chrome and Edge 154, this update closes a key WHATWG Fetch specification compliance gap by propagating developer-supplied abort reasons directly to \`Response\` methods (such as \`.json()\`, \`.blob()\`) and underlying \`ReadableStream\` bodies. Previously, Chromium only surfaced custom abort reasons to the initial \`fetch()\` promise while falling back to generic \`AbortError\` DOMExceptions once response headers were received. This brings Chromium in line with Mozilla Gecko's behavior and standardizes error propagation across the entire fetch lifecycle.

### Recommendations
- Actionable Advice: Teams can confidently pass semantic error objects into \`controller.abort(reason)\`, but should retain fallback checks against generic \`AbortError\` types if supporting older Safari or legacy Chromium releases. When reading \`response.body\` streams in cross-browser environments, inspect \`signal.reason\` if a caught error appears as an untyped \`AbortError\`.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "Yes, definitely. Thanks for the bug and tests!..."
- Community package available: \[node-abort-controller\](https://www.npmjs.com/package/node-abort-controller) (v3.1.1) for progressive enhancement.
- Verified community discussion on Twitter / X: "Fetch Standard (@fetchstandard) on X" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [Fetch API: Forward abort reason to Response](https://github.com/WebKit/standards-positions/issues/711) [closed]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Fetch Standard (@fetchstandard) on X](https://twitter.com/fetchstandard?lang=en) — *0 likes/RTs, 0 replies*

## Packages & Polyfills

- [node-abort-controller](https://www.npmjs.com/package/node-abort-controller) `v3.1.1` — AbortController for Node based on EventEmitter
- [abortcontroller-polyfill](https://www.npmjs.com/package/abortcontroller-polyfill) `v1.7.8` — Polyfill/ponyfill for the AbortController DOM API + optional patching of fetch (stub that calls catch, doesn't actually abort request).

## 📰 Ecosystem Blogs & Articles

- [Spec reads #1: \[fetch\](https://fetch.spec.whatwg.org/) / Tom MacWright \| Observable](https://observablehq.com/@tmcw/spec-reads-1-fetch) *(observablehq.com · 2018-03-23T20:48:52)*
  > Like most web developers, I&#x27;ve used fetch ever since it was usable in a majority of browsers. Compared to XMLHttpRequest, it was an incredible step forward. But I never took the time to really think it through, until I read the spec recently. He...
- [Fetch Standard (Pull Request Snapshot #632)](https://s3.amazonaws.com/pr-preview/whatwg/fetch/8ab040a...46984f2.html) *(s3.amazonaws.com · 2017-11-15T00:00:00)*
  > Fetch Standard (Pull Request Snapshot #632) Fetch ( PR #626 #632 ) Commit Snapshot — Last Updated 6 15 November 2017 Participate: GitHub whatwg/fetch ( file an issue , open issues ) IRC: #whatwg on Freenode Commits: GitHub whatwg/fetch/commits Go to ...
- [\[blink-dev\] Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17127.html) *(mail-archive.com)*
  > Yes https://wpt.fyi/results/fetch/api/abort/general.any.html Specifically the tests: * response.arrayBuffer() rejects with abort reason if already aborted (and other response methods such as body()) * Stream errors once aborted with abort reason. Und...
- [\[blink-dev\] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17184.html) *(mail-archive.com)*
  > &gt; &gt; Thanks, &gt; Dan &gt; &gt; On Wednesday, ...romestatus.com/feature/5631483679080448 <strong>When calling abort, &gt;&gt; you can optionally pass in an &quot;abort reason&quot;, and the original fetch &gt;&gt; promise if it hasn&#x27;t resol...
- [The complete guide to the AbortController API - LogRocket Blog](https://blog.logrocket.com/complete-guide-abortcontroller) *(blog.logrocket.com · 2025-03-12T20:35:20)*
  > We will learn how to use the AbortController API with some of the mentioned APIs. Because the APIs work with AbortController in a similar way, we’ll only look at the Fetch and fs.readFile API.
- [The Complete Guide to AbortController and AbortSignal \| by Amit Kumar \| Medium](https://medium.com/@amitazadi/the-complete-guide-to-abortcontroller-and-abortsignal-from-basics-to-advanced-patterns-a3961753ef54) *(medium.com · 2025-09-03T17:12:13)*
  > // Different cancellation scenarios const reasons = { userCancel: &#x27;User clicked cancel button&#x27;, timeout: &#x27;Request exceeded 30 second limit&#x27;, navigation: &#x27;User navigated away from page&#x27;, newRequest: &#x27;Newer request su...
- [A Practical Guide to the AbortController API - DEV Community](https://dev.to/bdestrempes/a-practical-guide-to-the-abortcontroller-api-5420) *(dev.to · 2025-05-19T23:50:25)*
  > function createCancellableRequest(endpoint: string) { const controller = new AbortController() const requestPromise = fetch(endpoint, { signal: controller.signal, }) .then((response) =&gt; { // Handle the response }) .catch((error) =&gt; { // Check i...
- [Mastering Request Cancellation ❌ in JavaScript: Using AbortController with Axios and Fetch API.🚀💪 - DEV Community](https://dev.to/dharamgfx/mastering-request-cancellation-in-javascript-using-abortcontroller-with-axios-and-fetch-api-2589) *(dev.to · 2024-06-24T10:33:45)*
  > <strong>Create New Controller: A new AbortController instance is created, and its signal is used in the new request.</strong> Make Request: The request is made using the Fetch API, passing the signal.
- [Fetch: Abort](https://javascript.info/fetch-abort) *(javascript.info · 2022-04-13T00:00:00)*
  > As we can see, <strong>AbortController is just a mean to pass abort events when abort() is called on it</strong>.
- [Resilient Fetch Requests in JavaScript with AbortController: A Guide with React Examples \| by Tawan \| CodeX \| Medium](https://medium.com/codex/resilient-fetch-requests-in-javascript-with-abortcontroller-a-guide-with-react-examples-573dba8a3758) *(medium.com · 2023-04-15T23:45:26)*
  > With AbortController, you can <strong>initiate a request and then cancel it at any point in time, without having to rely on workarounds like using a timeout or ignoring the response</strong>.
- [Understanding AbortController in Node.js: A Complete Guide \| Better Stack Community](https://betterstack.com/community/guides/scaling-nodejs/understanding-abortcontroller) *(betterstack.com · 2024-07-24T00:00:00)*
  > <strong>Terminating network requests that exceed reasonable time limits</strong>. Halting long-running database queries. ... The AbortController API creates an AbortSignal object, which can be passed to asynchronous operations like fetch or custom fu...
- [Everything about the AbortSignals (timeouts, combining signals, and how to use it with window.fetch) \| Code Driven Development](https://codedrivendevelopment.com/posts/everything-about-abort-signal-timeout) *(codedrivendevelopment.com · 2024-04-20T00:00:00)*
  > <strong>const controller = new AbortController(); const timeout = 5000; // 5 seconds setTimeout(() =&gt; controller.abort(`custom timeout abort`), timeout); const response = window.fetch(&#x27;/your-api&#x27;, { signal: controller.signal, });</strong...
- [Web Platform Status](https://www.chromium.org/developers/web-platform-status) *(chromium.org)*
  > <strong>Allows for sending a Blob or File using xhr</strong>. ... Allows for sending a typed array directly rather than sending just its ArrayBuffer. ... Availability: m10. m18 adds xhr.responseType = &#x27;document&#x27; (see HTML in XMLHttpRequest)...
- [Re: \[blink-dev\] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17242.html) *(mail-archive.com)*
  > Thanks, Dan On Wednesday, August ... https://chromestatus.com/feature/5631483679080448 <strong>When calling abort, you can optionally pass in an &quot;abort reason&quot;, and the original fetch promise if it hasn&#x27;t resolved should be rejected wi...
- [\[blink-dev\] RE: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17177.html) *(mail-archive.com)*
  > Thanks, Dan On Wednesday, August ... https://chromestatus.com/feature/5631483679080448 <strong>When calling abort, you can optionally pass in an &quot;abort reason&quot;, and the original fetch promise if it hasn&#x27;t resolved should be rejected wi...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [GitHub - fis-components/whatwg-fetch: Fork from https://github.com/github/fetch.git · GitHub](https://github.com/fis-components/whatwg-fetch) *(github.com)* *(Cites: `https://fetch.spec.whatwg.org`)*
  > GitHub - fis-components/whatwg-fetch: Fork from https://github.com/github/fetch.git · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. ...
- [Spec reads #1: \[fetch\](https://fetch.spec.whatwg.org/) / Tom MacWright \| Observable](https://observablehq.com/@tmcw/spec-reads-1-fetch) *(observablehq.com · 2018-03-23T20:48:52)* *(Cites: `https://fetch.spec.whatwg.org`)*
  > Like most web developers, I&#x27;ve used fetch ever since it was usable in a majority of browsers. Compared to XMLHttpRequest, it was an incredible step forward. But I never took the time to really think it through, until I read the spec re...
- [whatwg-fetch/README.md at master · fis-components/whatwg-fetch](https://github.com/fis-components/whatwg-fetch/blob/master/README.md) *(github.com)* *(Cites: `https://fetch.spec.whatwg.org`)*
  > whatwg-fetch/README.md at master · fis-components/whatwg-fetch · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh you...
- [Fetch Standard (Pull Request Snapshot #632)](https://s3.amazonaws.com/pr-preview/whatwg/fetch/8ab040a...46984f2.html) *(s3.amazonaws.com · 2017-11-15T00:00:00)* *(Cites: `https://fetch.spec.whatwg.org`)*
  > Fetch Standard (Pull Request Snapshot #632) Fetch ( PR #626 #632 ) Commit Snapshot — Last Updated 6 15 November 2017 Participate: GitHub whatwg/fetch ( file an issue , open issues ) IRC: #whatwg on Freenode Commits: GitHub whatwg/fetch/comm...

## 📚 Platform Documentation & Specifications

- [GitHub - fis-components/whatwg-fetch: Fork from https://github.com/github/fetch.git · GitHub](https://github.com/fis-components/whatwg-fetch) *(github.com)*
- [whatwg-fetch/README.md at master · fis-components/whatwg-fetch](https://github.com/fis-components/whatwg-fetch/blob/master/README.md) *(github.com)*
- [Implement \`Blob \`stream()\`, \`text()\`, and \`arrayBuffer()\` · Issue #2555 · jsdom/jsdom](https://github.com/jsdom/jsdom/issues/2555) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 34 result(s) found across 7 planned queries — **18 verified relevant**
  - `"chromestatus.com/feature/5158507786665984" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"fetch.spec.whatwg.org" -site:fetch.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" API` — *Core feature API query* (2 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromestatus.com" OR "response.blob" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (4 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 1 result(s) found — **2 verified relevant**
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
- **Web Page Excerpts Ingested:** 5 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5158507786665984)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5158507786665984)
- [Specification](https://fetch.spec.whatwg.org)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/502133195)
