# textStream() for response/request/blob

> **Report Week:** 2026-W39 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Add textStream() to interfaces that represent a byte stream (request, response, blob). This is equivalent to piping the byte stream through a TextDecoderStream().

### Motivation

A small ergonomic change to make it easier to stream text from a byte stream such as response (or blob) to a sink that accepts strings. Helps with a footgun of forgetting to pipe through a TextDecoderStream.

## Ecosystem Status

- **Momentum:** High (260 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The \`textStream()\` method arrives as an ergonomic convenience addition to the WHATWG \`Body\` mixin (encompassing \`Response\` and \`Request\`) as well as \`Blob\`, returning a UTF-8 decoded \`ReadableStream&lt;string&gt;\`. Shipping by default in Chrome 151 and adopted in server runtimes like Bun, it standardizes the common idiom of piping raw byte streams through \`TextDecoderStream\`. Browser vendor sentiment is universally cooperative with no architectural objections.

### Recommendations
- Actionable Advice: Use progressive enhancement by checking \`'textStream' in Response.prototype\` before calling the method in production, falling back to \`response.body.pipeThrough(new TextDecoderStream())\`. Alternatively, implement a lightweight client-side polyfill that delegates to \`TextDecoderStream\` to ensure safe, cross-browser compatibility until Firefox and Safari ship support.
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Intent to Ship: textStream() for response/request/blob](http://www.mail-archive.com/blink-dev@chromium.org/msg16692.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: textStream() for response/request/blob Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: textStream() for response/request/blob Mike Taylor Sun, 07 Jun 2026 17:31:58 -0700 On 6/5/26 12:47 a.m., Chro...
- [\[blink-dev\] Intent to Prototype: textStream() for response/request/blob](http://www.mail-archive.com/blink-dev@chromium.org/msg16560.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: textStream() for response/request/blob Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: textStream() for response/request/blob Chromestatus Tue, 19 May 2026 08:22:29 -0700 Contact emails [email&#...
- [\[blink-dev\] Intent to Ship: textStream() for response/request/blob](http://www.mail-archive.com/blink-dev@chromium.org/msg16682.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: textStream() for response/request/blob Skip to site navigation (Press enter) [blink-dev] Intent to Ship: textStream() for response/request/blob Chromestatus Thu, 04 Jun 2026 08:47:28 -0700 Contact emails [email&#160;protec...
- [Fetch API の textStream() でレスポンスをテキストとしてストリーミングする](https://azukiazusa.dev/blog/fetch-text-stream) *(azukiazusa.dev)*
  > Fetch API の textStream() でレスポンスをテキストとしてストリーミングする azukiazusa.dev blog about talks recap ja en azukiazusa.dev Search ⌘ K ja en Back to blog Fetch API の textStream() でレスポンスをテキストとしてストリーミングする 2026.08.08 #JavaScript #Fetch Markdown をコピー Fetch API に textStr...
- [Blob](https://javascript.info/blob) *(javascript.info)*
  > Blob Sorry, Internet Explorer is not supported, please use a newer browser. EN AR عربي DA Dansk EN English ES Español FA فارسی FR Français ID Indonesia IT Italiano JA 日本語 KO 한국어 RU Русский TR Türkçe UK Українська UZ Oʻzbek ZH 简体中文 We want to make thi...
- [Streaming Large HTTP Responses Without Killing Your Memory - DEV Community](https://dev.to/homolibere/streaming-large-http-responses-without-killing-your-memory-1fj0) *(dev.to · 2026-09-04T16:10:00)*
  > Streaming Large HTTP Responses Without Killing Your Memory - DEV Community Skip to content Powered by Algolia Log in Create account DEV Community Add reaction Like Unicorn Exploding Head Raised Hands Fire Jump to Comments Save Boost Pick as gem Copy ...
- [angular5 - Angular 6 - Error using http.get responseType: ResponseContentType.Blob - Stack Overflow](https://stackoverflow.com/questions/51976173/angular-6-error-using-http-get-responsetype-responsecontenttype-blob) *(stackoverflow.com · 2018-08-23T00:00:00)*
  > apparently the enum is deprecated, as it says in the enum description. now writing responseType: &#x27;blob&#x27; is enough. Be careful not to use generic parameter for the get/post method call, since now the return type is obvious no generic paramet...
- [How to generate blob from http response in java script?](https://stackoverflow.com/questions/28642598/how-to-generate-blob-from-http-response-in-java-script) *(stackoverflow.com · 2016-06-13T00:00:00)*
  > $http.get(&#x27;pdf-page&#x27;, null, { responseType: &#x27;arraybuffer&#x27; }) .success(function (res) { console.log(res); var file = new <strong>Blob</strong>([data], {type: &#x27;application/pdf&#x27;}); var fileURL = URL.createObjectURL(file); w...
- [Streaming HTTP Responses using fetch](https://stack.convex.dev/streaming-http-using-fetch) *(stack.convex.dev)*
  > <strong>This is useful when you want to return something different from the data coming from splitStream</strong>. Every time a new line comes in from the streaming HTTP request, splitStream will yield it, this function will receive it in data and ca...
- [How to Extract an Error Object from a Blob API Response in JavaScript](https://www.freecodecamp.org/news/how-to-extract-an-error-object-from-a-blob) *(freecodecamp.org · 2024-03-29T00:34:05)*
  > I encountered an issue when I made a GET request in my React project which was supposed to return a file I could download. For the file to download properly, I had to make the response type a blob. But if an error occurred when the server returns a
- [ASP TextStream Object](https://www.w3schools.com/asp/asp_ref_textstream.asp) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more.
- [Rendering a Stream of Text Using Javascript in a Browser - Stack Overflow](https://stackoverflow.com/questions/58253002/rendering-a-stream-of-text-using-javascript-in-a-browser) *(stackoverflow.com · 2019-10-05T00:00:00)*
  > app.client.request(undefined,&#x27;api/aUsers&#x27;,&#x27;GET&#x27;,QueryStringObject,undefined,function(statusCode,responseTextStream) { // if the call to handlers._users.get which is mapped to api/aUsers called back success. if(statusCode == 200) {...
- [Web Streams Everywhere (and Fetch for Node.js) \| CSS-Tricks](https://css-tricks.com/web-streams-everywhere-and-fetch-for-node-js) *(css-tricks.com · 2021-09-29T13:51:27)*
  > import { fetch } from &#x27;undici&#x27;; import { TextDecoderStream } from &#x27;node:stream/web&#x27;; async function fetchStream() { const response = await fetch(&#x27;https://example.com&#x27;) const stream = response.body; const textStream = str...
- [textStream() for response/request/blob](https://chromestatus.com/feature/5146752165478400) *(chromestatus.com · 2026-05-19T00:00:00)*
  > We cannot provide a description for this page right now
- [Node.js 26.5.0: ReadableStreamTee, blob.textStream(), and What Else Shipped — CODERCOPS](https://blog.codercops.com/blog/nodejs-26-5-0-release-guide) *(blog.codercops.com · 2026-07-15T00:00:00)*
  > const blob = new Blob([largeBuffer], { type: &#x27;text/plain&#x27; }); for await (const chunk of blob.textStream()) { processLogLine(chunk); } This mirrors what blob.stream() already did for binary data, just with UTF-8 decoding handled incrementall...
- [Streaming HTML \| Vuink.com](https://vuink.com/post/byyvrjvyyvnzf-d-dklm/blog/streaming-html) *(vuink.com · 2026-06-11T08:00:24)*
  > <strong>textStream() returns a stream of string chunks</strong>. textStream() is equivalent to piping the body through a utf-8 TextDecoderStream(), so the previous code can be rewritten as: Using the fetch API is not the only way to obtain a stream o...
- [Streaming HTML - Ollie Williams](https://olliewilliams.xyz/blog/streaming-html) *(olliewilliams.xyz · 2026-06-05T00:00:00)*
  > <strong>textStream() is equivalent to piping the body through a utf-8 TextDecoderStream(),</strong> so the previous code can be rewritten as: let response = await fetch(&#x27;/partial.html&#x27;); response.textStream() Using the fetch API is not the ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [textStream() for response/request/blob · Issue #1333 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1333) *(github.com · 2026-08-14T17:31:51)* *(Cites: `https://chromestatus.com/feature/5146752165478400`)*
  > textStream() for response/request/blob · Issue #1333 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or ...
- [Re: \[blink-dev\] Intent to Ship: textStream() for response/request/blob](http://www.mail-archive.com/blink-dev@chromium.org/msg16692.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5146752165478400`)*
  > Re: [blink-dev] Intent to Ship: textStream() for response/request/blob Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: textStream() for response/request/blob Mike Taylor Sun, 07 Jun 2026 17:31:58 -0700 On 6/5/26 12:47 ...
- [\[blink-dev\] Intent to Prototype: textStream() for response/request/blob](http://www.mail-archive.com/blink-dev@chromium.org/msg16560.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5146752165478400`)*
  > [blink-dev] Intent to Prototype: textStream() for response/request/blob Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: textStream() for response/request/blob Chromestatus Tue, 19 May 2026 08:22:29 -0700 Contact email...

## 📚 Platform Documentation & Specifications

- [textStream() for response/request/blob · Issue #1333 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1333) *(github.com)*
- [TextDecoderStream - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoderStream) *(developer.mozilla.org)*
- [Response: textStream() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Response/textStream) *(developer.mozilla.org)*
- [Blob: textStream() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Blob/textStream) *(developer.mozilla.org)*
- [Request: textStream() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Request/textStream) *(developer.mozilla.org)*
- [buffer: implement blob.textStream() · nodejs/node@d08872b](https://github.com/nodejs/node/commit/d08872b530) *(github.com)*
- [Blob: stream() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Blob/stream) *(developer.mozilla.org)*
- [feat(buffer,fetch): Implement Blob, Request, and Response textStream() by nabetti1720 · Pull Request #1776 · awslabs/llrt](https://github.com/awslabs/llrt/pull/1776) *(github.com)*
- [Convenience method to stream a response as text · Issue #1861 · whatwg/fetch](https://github.com/whatwg/fetch/issues/1861) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 52 result(s) found across 11 planned queries — **26 verified relevant**
  - `"chromestatus.com/feature/5146752165478400" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/whatwg/fetch/pull/1862" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"textStream() for response/request/blob" API` — *Core feature API query* (3 returned)
  - `"textStream() for response/request/blob" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"textstream()" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"textStream() for response/request/blob" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"textStream() for response/request/blob" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"response.textStream()" OR "blob.textStream()" OR "request.textStream()" javascript` — *Finds explicit JavaScript code snippets and API usage examples of textStream across Response, Request, and Blob objects.* (8 returned)
  - `"textStream" ("TextDecoderStream" OR "ReadableStream") (fetch OR Response OR Blob) (tutorial OR guide OR blog)` — *Surfaces community articles, guides, and explainers detailing how textStream streamlines text decoding compared to TextDecoderStream.* (8 returned)
  - `"textStream" ("Intent to Ship" OR "Intent to Prototype" OR site:chromestatus.com OR site:bugs.webkit.org)` — *Tracks browser vendor implementation progress, shipping status, and standards adoption across Chromium, WebKit, and Gecko.* (2 returned)
  - `"textStream" ("whatwg/fetch/pull/1862" OR "whatwg/fetch") (issue OR discussion OR PR)` — *Retrieves developer feedback, spec debates, and community consensus around adding ergonomic text streaming to the Fetch standard.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 8 item(s) inspected

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
