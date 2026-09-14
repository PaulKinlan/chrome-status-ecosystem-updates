# Fetch API: Forward reason from AbortController to fetch Response

> **Report Week:** 2026-W38 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Surfaces the abort reason, if one is provided, to the methods of the Response object and its ReadableStream, rather than just the fetch promise. This fills a gap in our compliance with the standard, surfacing the developer-supplied abort reason everywhere it is intended to.

### Motivation

An AbortController can be passed into fetch to allow a request to be aborted. This is already supported; see https://chromestatus.com/feature/5631483679080448.

When calling abort, you can optionally pass in an "abort reason", and the original fetch promise, if it hasn't already resolved, should be rejected with that reason. This is currently working as intended.

*However*, if the fetch promise *has* resolved (after reading the header), but the body has not yet been fully read, the standard also specifies that the abort reason should propagate to the Response methods such as Response.blob(), as well as the ReadableStream Response.body. This part is not currently working; the relevant Promises instead are rejected with generic AbortErrors.

Firefox at least is compliant here but chromium/Edge/Safari are not. This feature is simply for making chromium compliant with the standard in this regard.

## Ecosystem Status

- **Momentum:** High (85 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Fetch API: Forward reason from AbortController to fetch Response is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "Yes, definitely. Thanks for the bug and tests!..."
- Community package available: \[node-abort-controller\](https://www.npmjs.com/package/node-abort-controller) (v3.1.1) for progressive enhancement.

## Standards Positions

- **WebKit:** [Fetch API: Forward abort reason to Response](https://github.com/WebKit/standards-positions/issues/711) [closed]

## Packages & Polyfills

- [node-abort-controller](https://www.npmjs.com/package/node-abort-controller) `v3.1.1` — AbortController for Node based on EventEmitter
- [abortcontroller-polyfill](https://www.npmjs.com/package/abortcontroller-polyfill) `v1.7.8` — Polyfill/ponyfill for the AbortController DOM API + optional patching of fetch (stub that calls catch, doesn't actually abort request).

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17127.html) *(mail-archive.com)*
  > Yes https://wpt.fyi/results/fetch/api/abort/general.any.html Specifically the tests: * response.arrayBuffer() rejects with abort reason if already aborted (and other response methods such as body()) * Stream errors once aborted with abort reason. Und...
- [\[blink-dev\] RE: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17177.html) *(mail-archive.com)*
  > Thanks, Dan On Wednesday, August ... https://chromestatus.com/feature/5631483679080448 <strong>When calling abort, you can optionally pass in an &quot;abort reason&quot;, and the original fetch promise if it hasn&#x27;t resolved should be rejected wi...
- [Re: \[blink-dev\] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17242.html) *(mail-archive.com)*
  > Thanks, Dan On Wednesday, August ... https://chromestatus.com/feature/5631483679080448 <strong>When calling abort, you can optionally pass in an &quot;abort reason&quot;, and the original fetch promise if it hasn&#x27;t resolved should be rejected wi...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 32 result(s) found across 7 planned queries — **3 verified relevant**
  - `"chromestatus.com/feature/5158507786665984" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"fetch.spec.whatwg.org" -site:fetch.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" API` — *Core feature API query* (1 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromestatus.com" OR "response.blob" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (4 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (4 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **2 verified relevant**
- **Web Platform Tests (wpt.fyi):** 1608 item(s) inspected

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
