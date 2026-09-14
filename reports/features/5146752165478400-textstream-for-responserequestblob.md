# textStream() for response/request/blob

> **Report Week:** 2026-W38 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Add textStream() to interfaces that represent a byte stream (request, response, blob). This is equivalent to piping the byte stream through a TextDecoderStream().

### Motivation

A small ergonomic change to make it easier to stream text from a byte stream such as response (or blob) to a sink that accepts strings. Helps with a footgun of forgetting to pipe through a TextDecoderStream.

## Ecosystem Status

- **Momentum:** High (230 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive / High Interest
- **Executive Take:** textStream() for response/request/blob is currently Enabled by default in Chrome 151. Verified ecosystem momentum is High with Partial Multi-Engine Interest standards alignment and positive / high interest developer pulse.

### Recommendations
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
- [Streaming HTTP Responses using fetch](https://stack.convex.dev/streaming-http-using-fetch) *(stack.convex.dev)*
  > <strong>This is useful when you want to return something different from the data coming from splitStream</strong>. Every time a new line comes in from the streaming HTTP request, splitStream will yield it, this function will receive it in data and ca...
- [How to generate blob from http response in java script?](https://stackoverflow.com/questions/28642598/how-to-generate-blob-from-http-response-in-java-script) *(stackoverflow.com · 2016-06-13T00:00:00)*
  > $http.get(&#x27;pdf-page&#x27;, null, { responseType: &#x27;arraybuffer&#x27; }) .success(function (res) { console.log(res); var file = new <strong>Blob</strong>([data], {type: &#x27;application/pdf&#x27;}); var fileURL = URL.createObjectURL(file); w...
- [How to Extract an Error Object from a Blob API Response in JavaScript](https://www.freecodecamp.org/news/how-to-extract-an-error-object-from-a-blob) *(freecodecamp.org · 2024-03-29T00:34:05)*
  > I encountered an issue when I made a GET request in my React project which was supposed to return a file I could download. For the file to download properly, I had to make the response type a blob. But if an error occurred when the server returns a
- [ASP TextStream Object](https://www.w3schools.com/asp/asp_ref_textstream.asp) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more.
- [Rendering a Stream of Text Using Javascript in a Browser - Stack Overflow](https://stackoverflow.com/questions/58253002/rendering-a-stream-of-text-using-javascript-in-a-browser) *(stackoverflow.com · 2019-10-05T00:00:00)*
  > app.client.request(undefined,&#x27;api/aUsers&#x27;,&#x27;GET&#x27;,QueryStringObject,undefined,function(statusCode,responseTextStream) { // if the call to handlers._users.get which is mapped to api/aUsers called back success. if(statusCode == 200) {...
- [Web Streams Everywhere (and Fetch for Node.js) \| CSS-Tricks](https://css-tricks.com/web-streams-everywhere-and-fetch-for-node-js) *(css-tricks.com · 2021-09-29T13:51:27)*
  > import { fetch } from &#x27;undici&#x27;; import { TextDecoderStream } from &#x27;node:stream/web&#x27;; async function fetchStream() { const response = await fetch(&#x27;https://example.com&#x27;) const stream = response.body; const textStream = str...
- [Response streaming randomly stops on mobile (PWA) : r/OpenWebUI](https://www.reddit.com/r/OpenWebUI/comments/1siqnt2/response_streaming_randomly_stops_on_mobile_pwa) *(reddit.com · 2026-04-11T18:21:20)*
  > As op says if I come back and change from one chat to another or something like that the full response is there. Claude thinks it has to do with aggressive battery optimization from Android. I don&#x27;t know this is something that can be solved on t...
- [ReactJS (PWA)— Share URL Images with Web Share API \| by Gabriel Luque Miranda \| Medium](https://medium.com/@gluquemiranda/reactjs-pwa-share-url-images-with-web-share-api-58bac2a98e03) *(medium.com · 2020-08-28T15:32:09)*
  > Once this was done, I could go on with the file downloading problem. This was actually very simple using the fetch API. Once you have the desired image URL, call the fetch API and use the response to create: first a blob, then with this blob a File o...
- [textStream() for response/request/blob](https://chromestatus.com/feature/5146752165478400) *(chromestatus.com · 2026-05-19T00:00:00)*
  > We cannot provide a description for this page right now
- [Twitter Streaming API: Real-Time Options for Developers](https://tweetstream.io/blog/twitter-streaming-api) *(tweetstream.io · 2026-03-23T00:00:00)*
  > The X streaming API does not use WebSockets. Instead, it relies on HTTP streaming — a long-lived HTTP/1.1 (or HTTP/2) connection where the server sends data incrementally without closing the response.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: textStream() for response/request/blob](http://www.mail-archive.com/blink-dev@chromium.org/msg16692.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5146752165478400`)*
  > Re: [blink-dev] Intent to Ship: textStream() for response/request/blob Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: textStream() for response/request/blob Mike Taylor Sun, 07 Jun 2026 17:31:58 -0700 On 6/5/26 12:47 ...
- [\[blink-dev\] Intent to Prototype: textStream() for response/request/blob](http://www.mail-archive.com/blink-dev@chromium.org/msg16560.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5146752165478400`)*
  > [blink-dev] Intent to Prototype: textStream() for response/request/blob Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: textStream() for response/request/blob Chromestatus Tue, 19 May 2026 08:22:29 -0700 Contact email...

## 📚 Platform Documentation & Specifications

- [TextDecoderStream - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoderStream) *(developer.mozilla.org)*
- [Blob: textStream() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Blob/textStream) *(developer.mozilla.org)*
- [Response: textStream() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Response/textStream) *(developer.mozilla.org)*
- [Request: textStream() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Request/textStream) *(developer.mozilla.org)*
- [Blob: stream() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Blob/stream) *(developer.mozilla.org)*
- [buffer: implement blob.textStream() · nodejs/node@d08872b](https://github.com/nodejs/node/commit/d08872b530) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 35 result(s) found across 7 planned queries — **23 verified relevant**
  - `"chromestatus.com/feature/5146752165478400" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/whatwg/fetch/pull/1862" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"textStream() for response/request/blob" API` — *Core feature API query* (2 returned)
  - `"textStream() for response/request/blob" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"textstream()" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"textStream() for response/request/blob" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"textStream() for response/request/blob" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
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
