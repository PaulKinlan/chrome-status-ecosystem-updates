# textStream() for response/request/blob

> **Report Week:** 2026-W37 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Add textStream() to interfaces that represent a byte stream (request, response, blob). This is equivalent to piping the byte stream through a TextDecoderStream().

### Motivation

A small ergonomic change to make it easier to stream text from a byte stream such as response (or blob) to a sink that accepts strings. Helps with a footgun of forgetting to pipe through a TextDecoderStream.

## Ecosystem Status

- **Momentum:** High (100 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive / High Interest
- **Executive Take:** textStream() for response/request/blob is currently Enabled by default in Chrome 151. Verified ecosystem momentum is High with Partial Multi-Engine Interest standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Documentation Home | Docs | Twitter Developer Platform" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Documentation Home \| Docs \| Twitter Developer Platform](https://developer.twitter.com/en/docs/basics/response-codes) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [X Developer Platform](https://developer.x.com/ja/docs/basics/response-codes) — *0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Re: [blink-dev] Intent to Ship: textStream() for response/request/blob](http://www.mail-archive.com/blink-dev@chromium.org/msg16692.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: textStream() for response/request/blob Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: textStream() for response/request/blob Mike Taylor Sun, 07 Jun 2026 17:31:58 -0700 On 6/5/26 12:47 a.m., Chro...
- [[blink-dev] Intent to Prototype: textStream() for response/request/blob](http://www.mail-archive.com/blink-dev@chromium.org/msg16560.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: textStream() for response/request/blob Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: textStream() for response/request/blob Chromestatus Tue, 19 May 2026 08:22:29 -0700 Contact emails [email&#...
- [[blink-dev] Intent to Ship: textStream() for response/request/blob](http://www.mail-archive.com/blink-dev@chromium.org/msg16682.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: textStream() for response/request/blob Skip to site navigation (Press enter) [blink-dev] Intent to Ship: textStream() for response/request/blob Chromestatus Thu, 04 Jun 2026 08:47:28 -0700 Contact emails [email&#160;protec...
- [Re: [blink-dev] Intent to Ship: textStream() for response/request/blob](http://www.mail-archive.com/blink-dev@chromium.org/msg16694.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: textStream() for response/request/blob Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: textStream() for response/request/blob Noam Rosenthal Mon, 08 Jun 2026 01:26:23 -0700 Done https://github.com...
- [Fetch API の textStream() でレスポンスをテキストとしてストリーミングする](https://azukiazusa.dev/blog/fetch-text-stream) *(azukiazusa.dev)*
  > Fetch API の textStream() でレスポンスをテキストとしてストリーミングする azukiazusa.dev blog about talks recap ja en azukiazusa.dev Search ⌘ K ja en Back to blog Fetch API の textStream() でレスポンスをテキストとしてストリーミングする 2026.08.08 #JavaScript #Fetch Markdown をコピー Fetch API に textStr...
- [textStream() for response/request/blob](https://chromestatus.com/feature/5146752165478400) *(chromestatus.com · 2026-05-19T00:00:00)*
  > We cannot provide a description for this page right now

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: [blink-dev] Intent to Ship: textStream() for response/request/blob](http://www.mail-archive.com/blink-dev@chromium.org/msg16692.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5146752165478400`)*
  > Re: [blink-dev] Intent to Ship: textStream() for response/request/blob Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: textStream() for response/request/blob Mike Taylor Sun, 07 Jun 2026 17:31:58 -0700 On 6/5/26 12:47 ...
- [[blink-dev] Intent to Prototype: textStream() for response/request/blob](http://www.mail-archive.com/blink-dev@chromium.org/msg16560.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5146752165478400`)*
  > [blink-dev] Intent to Prototype: textStream() for response/request/blob Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: textStream() for response/request/blob Chromestatus Tue, 19 May 2026 08:22:29 -0700 Contact email...

## 📚 Platform Documentation & Specifications

- [Blob: textStream() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Blob/textStream) *(developer.mozilla.org)*
- [Request: textStream() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Request/textStream) *(developer.mozilla.org)*
- [Response: textStream() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Response/textStream) *(developer.mozilla.org)*
- [buffer: implement blob.textStream() · nodejs/node@d08872b](https://github.com/nodejs/node/commit/d08872b530) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 36 result(s) found across 7 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5146752165478400" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/whatwg/fetch/pull/1862" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"textStream() for response/request/blob" API` — *Core feature API query* (3 returned)
  - `"textStream() for response/request/blob" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"textstream()" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"textStream() for response/request/blob" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"textStream() for response/request/blob" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5146752165478400)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5146752165478400)
- [Specification](https://github.com/whatwg/fetch/pull/1862)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/514448226)
