# Fetch API: Forward reason from AbortController to fetch Response

> **Report Week:** 2026-W45 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Surfaces the abort reason, if one is provided, to the methods of the Response object and its ReadableStream, rather than just the fetch promise. This fills a gap in our compliance with the standard, surfacing the developer-supplied abort reason everywhere it is intended to.

### Motivation

An AbortController can be passed into fetch to allow a request to be aborted. This is already supported; see https://chromestatus.com/feature/5631483679080448.  When calling abort, you can optionally pass in an "abort reason", and the original fetch promise, if it hasn't already resolved, should be rejected with that reason. This is currently working as intended.  \*However\*, if the fetch promise \*has\* resolved (after reading the header), but the body has not yet been fully read, the standard also specifies that the abort reason should propagate to the Response methods such as Response.blob(), as well as the ReadableStream Response.body. This part is not currently working; the relevant Promises instead are rejected with generic AbortErrors.  Firefox at least is compliant here but chromium/Edge/Safari are not. This feature is simply for making chromium compliant with the standard in this regard.

## Ecosystem Status

- **Momentum:** Quiet (-10 points since 2026-10-12; footprint 115 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** Shipping enabled by default in Chromium and Microsoft Edge 154, this update resolves a long-standing WHATWG Fetch specification compliance gap by forwarding developer-supplied abort reasons directly to Response body methods and underlying ReadableStreams. Firefox has supported this standard behavior for several releases, making Chromium's catch-up an important step toward consistent cross-engine stream termination. The broader ecosystem views this as an overdue bug fix that solidifies error propagation across streaming pipelines.

### Recommendations
- Actionable Advice: Teams can immediately leverage custom abort reasons in modern Chromium and Firefox environments, but should retain defensive error-handling fallbacks (such as inspecting the AbortSignal reason directly) until Safari ships the corresponding fix.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "Yes, definitely. Thanks for the bug and tests!..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Fetch API: Forward abort reason to Response](https://github.com/WebKit/standards-positions/issues/711) [closed]

## Web-features Group

*group-level data: web-features [`abortable-fetch`](https://webstatus.dev/features/abortable-fetch), shared with 1 other ChromeStatus feature*

- Share of tests passing in the web-features group `abortable-fetch` on [wpt.fyi](https://wpt.fyi/results?q=feature:abortable-fetch) (via webstatus.dev) — stable: Chrome 66.7% · Edge 66.7% · Firefox 66.7% · Safari 66.7%; experimental: Chrome 66.7% · Edge 66.7% · Firefox 66.7% · Safari 66.7%

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > \*\*The Fix:\*\* The \*\*"Forward reason from AbortController to fetch Response"\*\* feature aligns browsers with the WHATWG Fetch specification When a developer aborts an in-flight body read, the provided abort reason is forwarded directly into the \`Respons...
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > Chrome documented this update as filling a key compliance gap with the WHATWG Fetch specification It highlights that the developer-supplied abort reason is now exposed consistently across both the initial fetch promise and downstream \`ReadableStream\`...
- [google.com](https://groups.google.com/a/chromium.org/d/msgid/blink-dev/6a73a11f.c91ea2f1.3ad85a.0300.GAE%40google.com) *(groups.google.com)*
  > The Intent to Ship highlighted that Firefox had already implemented this behavior properly, while Chromium and Safari lagged behind The feature specifically bridges this gap without needing additional spec modifications
- [polypane.app](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > Feature tracker highlighted \`ForwardReasonToFetchBodyAbort\`, noting its practical benefit for modern streaming architectures (e.g., Server-Sent Events, streaming AI chat completions, and large file downloads)
- [\[blink-dev\] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17184.html) *(mail-archive.com)*
  > &gt; &gt; Thanks, &gt; Dan &gt; &gt; On Wednesday, ...romestatus.com/feature/5631483679080448 &lt;strong&gt;When calling abort, &gt;&gt; you can optionally pass in an &quot;abort reason&quot;, and the original fetch &gt;&gt; promise if it hasn&#x27;t resol...
- [\[blink-dev\] Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17127.html) *(mail-archive.com)*
  > Specification https://fetch.sp... https://chromestatus.com/feature/5631483679080448 &lt;strong&gt;When calling abort, you can optionally pass in an &quot;abort reason&quot;, and the original fetch promise if it hasn&#x27;t resolved should be rejected with ...
- [\[blink-dev\] RE: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17177.html) *(mail-archive.com)*
  > Thanks, Dan On Wednesday, August ... https://chromestatus.com/feature/5631483679080448 &lt;strong&gt;When calling abort, you can optionally pass in an &quot;abort reason&quot;, and the original fetch promise if it hasn&#x27;t resolved should be rejected wi...
- [Re: \[blink-dev\] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17238.html) *(mail-archive.com)*
  > Thanks, Dan On Wednesday, August ... https://chromestatus.com/feature/5631483679080448 &lt;strong&gt;When calling abort, you can optionally pass in an &quot;abort reason&quot;, and the original fetch promise if it hasn&#x27;t resolved should be rejected wi...
- [\[WPT\] New failures introduced in external/wpt/css/css-font-loading by import https://crrev.com/c/8220487 \[543938492\] - Chromium](https://issues.chromium.org/issues/543938492) *(issues.chromium.org)*
  > https://github.com/web-platform-tests/wpt/commit/00ec6993ce23f6985f5849c0fe45da76b0c0c585 Reland: Forwarding abort reason from AbortController.abort() to fetch() response:

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/WebKit/standards-positions/issues/711) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 71 result(s) found across 12 planned queries — **6 verified relevant**
  - `"chromestatus.com/feature/5158507786665984" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"fetch.spec.whatwg.org" -site:fetch.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" API` — *Core feature API query* (4 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromestatus.com" OR "response.blob" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (6 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
  - `"AbortController" fetch "abort reason" response OR body tutorial` — *Discovers developer tutorials and articles explaining how to pass and handle custom abort reasons across fetch Response consumption.* (8 returned)
  - `controller.abort(reason) response.body.getReader() OR response.json()` — *Finds practical JavaScript code snippets illustrating propagation of custom abort reasons to response body streams and parsing methods.* (8 returned)
  - `site:bugs.chromium.org OR site:issues.chromium.org "AbortController" "abort reason" response` — *Tracks Chromium bug tickets, implementation status, and rollout progress for forwarding the abort reason to Response.* (8 returned)
  - `site:github.com/whatwg/fetch/issues "abort reason" response OR body` — *Surfaces standards discussions and issue threads within the WHATWG Fetch specification repository regarding abort reason propagation.* (8 returned)
  - `"AbortSignal.reason" fetch ("response.blob" OR "response.text" OR "response.body")` — *Targets documentation and code examples showing how AbortSignal reason interacts directly with Response stream methods.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **5 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Tweets found by web search:** 3 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "abortable-fetch", shared with 1 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "abortable-fetch": Chrome 66.7% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 3 engineer comment(s) read
- **Web Page Excerpts Ingested:** 4 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5158507786665984)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5158507786665984)
- [Specification](https://fetch.spec.whatwg.org)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/502133195)
