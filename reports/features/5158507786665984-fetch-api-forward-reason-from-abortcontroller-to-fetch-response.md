# Fetch API: Forward reason from AbortController to fetch Response

> **Report Week:** 2026-W42 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Surfaces the abort reason, if one is provided, to the methods of the Response object and its ReadableStream, rather than just the fetch promise. This fills a gap in our compliance with the standard, surfacing the developer-supplied abort reason everywhere it is intended to.

### Motivation

An AbortController can be passed into fetch to allow a request to be aborted. This is already supported; see https://chromestatus.com/feature/5631483679080448.  When calling abort, you can optionally pass in an "abort reason", and the original fetch promise, if it hasn't already resolved, should be rejected with that reason. This is currently working as intended.  \*However\*, if the fetch promise \*has\* resolved (after reading the header), but the body has not yet been fully read, the standard also specifies that the abort reason should propagate to the Response methods such as Response.blob(), as well as the ReadableStream Response.body. This part is not currently working; the relevant Promises instead are rejected with generic AbortErrors.  Firefox at least is compliant here but chromium/Edge/Safari are not. This feature is simply for making chromium compliant with the standard in this regard.

## Ecosystem Status

- **Momentum:** Emerging (footprint 125 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** This specification-alignment update ensures that custom abort reasons passed to AbortController propagate directly to Response body consumers—such as Response.blob(), Response.json(), and the Response.body ReadableStream—even after initial headers resolve. Historically, engines like Chromium discarded user-supplied abort reasons during body reads, replacing them with generic AbortErrors. Shipped by default in Chromium and Microsoft Edge, the change completes standard WHATWG Fetch compliance across the stream pipeline.

### Recommendations
- Actionable Advice: Teams can confidently rely on custom abort reasons propagating directly from AbortController into stream error handlers on modern runtimes. However, defensive catch blocks should continue providing a fallback check against signal.reason if supporting older browser versions where body readers still reject with generic AbortErrors.
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
  > The Web Platform feature \*\*"Fetch API: Forward reason from AbortController to fetch Response"\*\* addresses a gap in Chromium’s implementation of the WHATWG Fetch and DOM standards Implementing this brings Chromium into full alignment with the WHATWG F...
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > Chrome Platform Status & Tracking Bug \* \*\*Status Entry:\*\* \*“Fetch API: Forward reason from AbortController to fetch Response”\* (Tracking Bug: \`#502133195\`)
- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > Chrome for Developers (\`developer.chrome.com\`) \* \*\*Article/Release:\*\* \*Chrome 154 Beta Announcement & Chrome 154 Release Notes\*
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/154) *(learn.microsoft.com)*
  > This aligns Chrome with the Fetch standard by exposing the developer-supplied abort reason consistently."\* \* \*\*Microsoft Edge Platform Notes:\*\* Microsoft Edge 154 included the feature simultaneously as part of the shared Chromium engine rollout
- [stackoverflow.com](https://stackoverflow.com/questions/73049849/abortcontroller-abortreason-but-the-reason-gets-lost-before-it-arrives-to-the) *(stackoverflow.com)*
  > abort(reason)\` had its reason lost if the fetch resolved headers before the abort triggered text()\` or stream catch blocks failed to preserve custom reasons
- [\[blink-dev\] Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17127.html) *(mail-archive.com)*
  > Specification https://fetch.sp... https://chromestatus.com/feature/5631483679080448 &lt;strong&gt;When calling abort, you can optionally pass in an &quot;abort reason&quot;, and the original fetch promise if it hasn&#x27;t resolved should be rejected with ...
- [\[blink-dev\] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17184.html) *(mail-archive.com)*
  > &gt; &gt; Thanks, &gt; Dan &gt; &gt; On Wednesday, ...romestatus.com/feature/5631483679080448 &lt;strong&gt;When calling abort, &gt;&gt; you can optionally pass in an &quot;abort reason&quot;, and the original fetch &gt;&gt; promise if it hasn&#x27;t resol...
- [Re: \[blink-dev\] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17242.html) *(mail-archive.com)*
  > Thanks, Dan On Wednesday, August ... https://chromestatus.com/feature/5631483679080448 &lt;strong&gt;When calling abort, you can optionally pass in an &quot;abort reason&quot;, and the original fetch promise if it hasn&#x27;t resolved should be rejected wi...
- [\[blink-dev\] RE: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17177.html) *(mail-archive.com)*
  > Thanks, Dan On Wednesday, August ... https://chromestatus.com/feature/5631483679080448 &lt;strong&gt;When calling abort, you can optionally pass in an &quot;abort reason&quot;, and the original fetch promise if it hasn&#x27;t resolved should be rejected wi...
- [\[blink-dev\] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17214.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; And regarding the reader, the main abort steps ( &gt;&gt; https://fetch.spec.whatwg.org/#http-network-fetch) say: &gt;&gt; &gt;&gt; 1. &gt;&gt; &gt;&gt; If fetchParams is aborted &gt;&gt; &lt;https://fetch.spec.whatwg.org/#fetch-par...
- [Diff - e6be34032d6c858ed06effbc0f7e5afdb45a793d^! - chromium/src.git - Git at Google](https://chromium.googlesource.com/chromium/src.git/+/e6be34032d6c858ed06effbc0f7e5afdb45a793d%5E!) *(chromium.googlesource.com)*
  > @@ -184,3 +184,26 @@ await promise\_rejects\_js(t, TypeError, fetch(url, { method, body, duplex })); }, &quot;Streaming upload should fail on a 401 response&quot;); +promise\_test(async (t) =&gt; { + const abortMessage = &#x27;foo abort&#x27;; + let str...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 60 result(s) found across 11 planned queries — **7 verified relevant**
  - `"chromestatus.com/feature/5158507786665984" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"fetch.spec.whatwg.org" -site:fetch.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" API` — *Core feature API query* (3 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromestatus.com" OR "response.blob" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (5 returned)
  - `"Fetch API: Forward reason from AbortController to fetch Response" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
  - `"AbortController" fetch custom abort reason ("response.json" OR "ReadableStream")` — *Finds tutorials and developer guides covering how to pass and handle custom abort reasons during fetch body reading and stream consumption.* (8 returned)
  - `"controller.abort(" ("response.blob()" OR "response.body" OR "response.json()")` — *Locates real-world JavaScript code patterns demonstrating custom abort reason handling on Response methods.* (8 returned)
  - `"fetch" "abort reason" (Chromium OR WebKit OR WHATWG) "ReadableStream" Response` — *Tracks browser engine implementation status, standard compliance work, and specification discussions across WHATWG and Chromium.* (8 returned)
  - `fetch AbortController "abort reason" ("AbortError" OR "Response.body") (issue OR bug OR discussion)` — *Surfaces developer troubleshooting, bug reports, and community discussions about missing abort reasons when reading Response bodies.* (3 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **5 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 4 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "abortable-fetch", shared with 1 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "abortable-fetch": Chrome 66.7% passing (stable)*
- **Sources cited by the AI synthesis:** 4 result(s) found — **3 verified relevant**

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
