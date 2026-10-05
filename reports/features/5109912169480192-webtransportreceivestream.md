# WebTransportReceiveStream

> **Report Week:** 2026-W41 | **Milestone:** Chrome 155 | **Category:** In developer trial (Behind a flag)

## Overview

Adds the standardized WebTransportReceiveStream interface, a ReadableStream subclass used for incoming unidirectional streams and the readable side of bidirectional streams. Its getStats() method returns per-stream byte counters: bytesReceived reports bytes received from the network, while bytesRead reports bytes delivered to the application.

### Motivation

Incoming WebTransport streams have historically been exposed as generic ReadableStream objects in Chromium. The WebTransport specification defines a dedicated WebTransportReceiveStream subclass with stream-specific statistics.

Applications that receive large or latency-sensitive streams need to distinguish bytes received by the browser from bytes actually consumed by JavaScript. This helps diagnose application backpressure, buffering, and slow-consumer behavior. Exposing the standardized subclass also aligns the runtime type of incoming streams with the WebTransport specification and other browser engines.

## Ecosystem Status

- **Momentum:** High (460 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** WebTransportReceiveStream formalizes the incoming stream interface as a dedicated ReadableStream subclass with per-stream statistics via getStats(), replacing the generic ReadableStream objects previously returned in Chromium. The API addresses a critical observability gap by exposing bytesReceived and bytesRead, enabling real-time media and low-latency applications to diagnose backpressure and client-side buffering. Multi-engine consensus is strong, as this aligns Chromium with the W3C WebTransport specification alongside Firefox and WebKit.

### Recommendations
- Actionable Advice: Teams should treat stream.getStats() as an optional progressive enhancement today, feature-detecting the method before querying byte metrics. To avoid breakage across runtimes, avoid strict instanceof checks or assumptions that incoming streams are generic ReadableStreams, and test backpressure handling under Chrome flags.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Unityでpure C#なQUIC(Webtransport)が速やかに動く ..." (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Unityでpure C#なQUIC(Webtransport)が速やかに動く ...](https://twitter.com/castanea/status/1306100111999561729) — *by @castanea, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Twitter](https://twitter.com/hashtag/webtransport) — *0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHP3MTGiMQrjIT4KlpuTqgMnW5Q7u1PxbGYStq9MGPhpryAJ6uoHYhjfWgmCpNashm01wQebWMLCgmb-N0mL11h2Mnk3-9Uu7eVMSu-MXu40MgVprLBpoyH0g==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of `WebTransportReceiveStream`  The `WebTransportReceiveStream` interface is a standardized web platform feature defined in the [W3C WebTransport specification](https://www.w3.org/TR/webtransport/). It is a specialized subclass of `Readab
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEQri37ndzKC7-TnHw0IL8Aad_jgQwHcTrsvUAvmA2u4IXQ6SMdWZLzLFlJI6K_-EgdtPVePLgmOHu3lmxsuepv27rnONW3aKtgGYTC4VuGQm6TdodKhDF-hdvz_AsngPJ9auRKyISue2Vg5BPa_QmidWdkSF1LSj-FyJ6VbCw_tQ==) *(vertexaisearch.cloud.google.com)*
  > WebTransportReceiveStream - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs WebTransportReceiveStream Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) WebTransportReceiveStream ...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFUQVoOtCpUTnrYQA1Wmx8VgNlpqkqAaovZMzkkckhK2uTbxtivT49lVuoeIHGuUbK3sFFyATPxT4WMWJoouZ7cSHs5td1N6O7uAeVcgBi9JkTy9dDa6EY7WKydbcHnZ_-S7pEUcv3c-5Ov8KVy_OjY_9s_yrrtBwTtRfNTabLhVbpwAPIkWA==) *(vertexaisearch.cloud.google.com)*
  > WebTransportReceiveStream: getStats()-Methode - Web-APIs | MDN Zum Hauptinhalt springen Zur Suche springen Seitenleiste umschalten Web Web-APIs WebTransportReceiveStream getStats() Farbschema Systemeinstellung Hell Dunkel Deutsch Sprache merken Mehr ...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH2tqQj2GnN3Ji-hczT7rhpFYkE-PIxV6cZRdZwVu_0LM5e_PgymRfQcdhCuvt8nm2rxHhXiUPbhPinfZ1w-m1Dvr_9InI1PbflJkgiwetfAamXAgXVewCvDttD3OPJafA7K6Dthwy4G9Hhe_qosZCS0CTGdEEvscZ2CA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of `WebTransportReceiveStream`  The `WebTransportReceiveStream` interface is a standardized web platform feature defined in the [W3C WebTransport specification](https://www.w3.org/TR/webtransport/). It is a specialized subclass of `Readab
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGyNzivOoT-RcUQGR5XsXL02ENutpwKqK8Of4bUooFs_TM5zyOHvdmbRtme-U3vU6ziobcPe1VZE4WV94lQZWz9uKd6_HiV3AglK2srZ9zHaBVs6KfHDY7NuIguehaAI7p8Xxc=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of `WebTransportReceiveStream`  The `WebTransportReceiveStream` interface is a standardized web platform feature defined in the [W3C WebTransport specification](https://www.w3.org/TR/webtransport/). It is a specialized subclass of `Readab
- [webrtchacks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFC5gPAPkhY7MNP_EN6oE5GxL2gd08IWxfc6YaQz6SxUgPMXtHS4mlTq21mmpMoIRjVPrjSgLMhN55mL6Of2qpoDU_l8gYsiwNY7PihBCnsvC4m9trprL3FyQC5Dpe0UYJ66EZLMmxyLvCt7UXwcIW0p8yZlhPP) *(vertexaisearch.cloud.google.com)*
  > ### Summary of `WebTransportReceiveStream`  The `WebTransportReceiveStream` interface is a standardized web platform feature defined in the [W3C WebTransport specification](https://www.w3.org/TR/webtransport/). It is a specialized subclass of `Readab
- [Exploring the WebTransport API: A New Era of Web Communication](https://jsdev.space/webtransport-api) *(jsdev.space · 2025-01-16T00:00:00)*
  > Get a reference to reader using getReader() and read from incomingUnidirectionalStreams in chunks (each chunk is a WebTransportReceiveStream): ... Copy Copied! async function receiveUnidirectional() { const uds = transport.incomingUnidirectionalStrea...
- [WebTransport API - Web APIs \| MDN](https://www-igm.univ-mlv.fr/~forax/MDN/developer.mozilla.org/en-US/docs/Web/API/WebTransport_API.html) *(www-igm.univ-mlv.fr)*
  > Represents an error related to ... call). WebTransportReceiveStream · <strong>Provides streaming features for an incoming WebTransport unidirectional or bidirectional WebTransport stream</strong>....
- [How to use WebTransport \| Capabilities \| Chrome for Developers](https://developer.chrome.com/docs/capabilities/web-apis/webtransport) *(developer.chrome.com · 2020-06-08T00:00:00)*
  > The server initiates WebTransportReceiveStream. Obtaining a WebTransportReceiveStream is <strong>a two-step process for a web client</strong>. First, the client calls the incomingUnidirectionalStreams attribute of a WebTransport instance, which retur...
- [WebTransport Development Guide With Examples](https://thesyntaxdiaries.com/webtransport-development-guide) *(thesyntaxdiaries.com · 2025-01-25T00:00:00)*
  > <strong>Stream handling in WebTransport requires careful management of both readable and writable streams</strong>. This implementation provides a robust system for creating, tracking, and managing multiple concurrent streams.
- [Real-Time APIs with WebTransport: A Post-WebSocket Era Tutorial \| Markaicode](https://markaicode.com/real-time-apis-webtransport-tutorial) *(markaicode.com · 2025-03-18T00:00:00)*
  > Step-by-step guide with code examples. ... Web developers building real-time applications face significant challenges with existing technologies. WebSockets, while revolutionary when introduced, now show limitations in performance, reliability, and s...
- [WebTransport: A new way to communicate over HTTP/3 \| by Queens Kisivuli \| Medium](https://medium.com/@queenskisivuli/webtransport-a-new-way-to-communicate-over-http-3-a730a8c84790) *(medium.com · 2023-06-11T08:24:59)*
  > It supports both reliable and unreliable data transmission via streams and datagrams, respectively. It also provides low latency, high throughput, and out-of-order delivery. In this post, we will explain the architecture and benefits of WebTransport,...
- [How to Implement WebTransport API using JS? - VideoSDK](https://www.videosdk.live/developer-hub/webtransport/webtransport-api) *(videosdk.live)*
  > Discover the WebTransport API and its capabilities for secure, low-latency communication. Learn how to implement WebTransport in your web applications with step-by-step guides, code examples, and practical use cases.
- [How to Implement WebTransport Server? - VideoSDK](https://www.videosdk.live/developer-hub/webtransport/webtransport-server) *(videosdk.live)*
  > Unlike traditional methods such as WebSockets or WebRTC, WebTransport simplifies the setup process and improves performance by utilizing modern web platform features and the QUIC transport layer, which is inherently faster and more reliable. By offer...
- [Building Interactive Web Tools with Pure HTML/CSS/JS: Lessons from a Streaming Site - DEV Community](https://dev.to/optistream/building-interactive-web-tools-with-pure-htmlcssjs-lessons-from-a-streaming-site-51m) *(dev.to · 2026-04-03T12:35:41)*
  > When we set out to build 7 interactive calculators for Optistream — a French streaming analytics site — we made a deliberate choice: no React, no Vue, no frameworks. Just pure HTML, CSS, and vanilla JavaScript, embedded directly into WordPress pages.
- [Stream Your Way to Immediate Responses \| Blog \| Chrome for Developers](https://developer.chrome.google.cn/blog/sw-readablestreams) *(developer.chrome.google.cn)*
  > That approach relies on aggressively caching the &quot;shell&quot; of your web application—the minimal HTML, JavaScript, and CSS needed to display your structure and layout—and then loading the dynamic content needed for each specific page via a clie...
- [The weirdly obscure art of Streamed HTML - DEV Community](https://dev.to/tigt/the-weirdly-obscure-art-of-streamed-html-4gc2) *(dev.to · 2024-01-17T18:26:47)*
  > And eBay has battle-tested it for its ecommerce websites? And it only uses client-side JS for stateful components? You don’t say. It’s nice when a decision makes itself. Marko streams HTML with its &lt;await&gt; tag. I was pleasantly surprised at how...
- [Web Streams Everywhere (and Fetch for Node.js) \| CSS-Tricks](https://css-tricks.com/web-streams-everywhere-and-fetch-for-node-js) *(css-tricks.com · 2021-09-29T13:51:27)*
  > The original Node streams aren’t being deprecated or removed but they will now co-exist with the web standard stream API. This makes it easier to write cross-platform code and means developers only need to learn one way of doing things. Deno, another...
- [WebTransport Is Now Baseline. Here’s What That Means for Real-Time Media](https://webrtc.ventures/2026/04/webtransport-is-now-baseline-what-it-means-for-real-time-media) *(webrtc.ventures · 2026-04-23T19:03:57)*
  > <strong>As of March 2026, Safari 26.4 ships WebTransport out of the box</strong>. No flags, no workarounds. Chrome, Firefox, and Edge already had it.
- [webtransport package - github.com/backkem/go-lp2p/webtransport-api - Go Packages](https://pkg.go.dev/github.com/backkem/go-lp2p/webtransport-api) *(pkg.go.dev · 2025-06-09T00:00:00)*
  > func (s WebTransportReceiveStream) GetStats() (WebTransportReceiveStreamStats, error) type WebTransportReceiveStreamStats struct { BytesReceived uint64 BytesRead uint64 }
- [Platform - Web documentation \| Deno Docs](https://docs.deno.com/api/web/platform) *(docs.deno.com)*
  > getStats · prototype · I · WebTransportReceiveStreamStats · No documentation available · bytesRead · bytesReceived · I · v · WebTransportSendGroup · MDN Reference · getStats · prototype · I · v · WebTransportSendStream · MDN Reference · getStats · ge...
- [WebTransport](https://pr-preview.s3.amazonaws.com/vasilvv/web-transport/pull/509.html) *(pr-preview.s3.amazonaws.com · 2023-05-09T00:00:00)*
  > <strong>The total number of bytes the application has successfully read from this WebTransportReceiveStream</strong>. This number can only increase, and is always less than or equal to bytesReceived.
- [WebTransport - Platform - Web documentation](https://docs.deno.com/api/web/~/WebTransport) *(docs.deno.com)*
  > #incomingBidirectionalStreams: ReadableStream&lt;WebTransportBidirectionalStream&gt; readonly · MDN Reference · #incomingUnidirectionalStreams: ReadableStream&lt;WebTransportReceiveStream&gt; readonly · MDN Reference · #ready: Promise&lt;void&gt; rea...
- [How to use WebTransport \| Capabilities \| Chrome for Developers](https://developer.chrome.google.cn/docs/capabilities/web-apis/webtransport) *(developer.chrome.google.cn · 2020-06-08T00:00:00)*
  > Unlike WebRTC, WebTransport is supported inside of Web Workers, which allows you to perform client-server communications independent of a given HTML page. Because WebTransport exposes a Streams-compliant interface, it supports optimizations around ba...
- [Intent to Ship: WebTransport](https://groups.google.com/a/chromium.org/g/blink-dev/c/kwC5wES3I4c) *(groups.google.com)*
  > How about the technologies that WebTransport depends on? Per https://caniuse.com/http3, it&#x27;s shipped in Firefox and experimental in Safari. Are you aware of any likely problems getting HTTP/3 itself into all browsers?
- [WebTransport: Browser Support, Features, Use Cases](https://www.testmuai.com/learning-hub/webtransport-browser-support) *(testmuai.com · 2026-05-01T12:00:00)*
  > WebTransport ships in every current Chromium browser, in Firefox, and in the latest Safari, with Safari 26.4 closing the gap that pinned the API to a Chromium-only audience for years. ... Chrome supports WebTransport from Chrome 97 on Windows, macOS,...
- [Chrome and Firefox support WebTransport. Safari has announced intent to support ... \| Hacker News](https://news.ycombinator.com/item?id=44989495) *(news.ycombinator.com · 2025-08-23T16:52:19)*
  > Cloud services are pretty TCP/HTTP centric which can be annoying. Any provider that gives you UDP support can be used with QUIC, but you&#x27;re in charge of certificates and load balancing · QUIC is client-&gt;server so NATs are not a problem; 1 RTT...
- [Browser Compatibility of webtransport on Google Chrome Browsers](https://www.lambdatest.com/web-technologies/webtransport-chrome) *(lambdatest.com)*
  > webtransport property shows <strong>High browser compatibility on Google Chrome browsers</strong>. High browser compatibility means the webtransport property is Fully Supported by a majority of Google Chrome browser versions.
- [Chromium Blog: Chrome 97: WebTransport, New Array Static Methods and More](https://blog.chromium.org/2021/11/chrome-97-webtransport-new-array-static.html) *(blog.chromium.org)*
  > Unless otherwise noted, changes described below apply to the newest Chrome beta channel release for Android, Chrome OS, Linux, macOS, and W...
- [Intent to Prototype and Ship: WebTransport BYOB readers](https://groups.google.com/a/chromium.org/g/blink-dev/c/18ZdUE1B_zg) *(groups.google.com)*
  > Developers can acquire a BYOB reader ... or a WebTransportReceiveStream. This feature doesn’t change the behaviors of exiting APIs. Calling getReader() without options returns a default reader. This feature can be debugged with existing DevTools Java...

## 📚 Platform Documentation & Specifications

- [WebTransportReceiveStream - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportReceiveStream) *(developer.mozilla.org)*
- [WebTransportBidirectionalStream - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportBidirectionalStream) *(developer.mozilla.org)*
- [WebTransport: createBidirectionalStream() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/createBidirectionalStream) *(developer.mozilla.org)*
- [WebTransport](https://www.w3.org/TR/webtransport) *(w3.org)*
- [Streams API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API) *(developer.mozilla.org)*
- [WebTransport/Meetings - W3C Wiki](https://www.w3.org/wiki/WebTransport/Meetings) *(w3.org)*
- [WebTransportReceiveStream: getStats() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportReceiveStream/getStats) *(developer.mozilla.org)*
- [WebTransport](https://www.w3.org/TR/2024/WD-webtransport-20240531) *(w3.org)*
- [1818754 - Pref on WebTransport by default](https://bugzilla.mozilla.org/show_bug.cgi?id=1818754) *(bugzilla.mozilla.org)*
- [content/files/en-us/web/api/webtransport\_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/webtransport_api/index.md?plain=1) *(github.com)*
- [content/files/en-us/web/api/webtransportbidirectionalstream/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/webtransportbidirectionalstream/index.md?plain=1) *(github.com)*
- [content/files/en-us/web/api/webtransport/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/webtransport/index.md?plain=1) *(github.com)*
- [Feature Request: Support WebTransport API in workerd \[Tracking Issue\] · Issue #6451 · cloudflare/workerd](https://github.com/cloudflare/workerd/issues/6451) *(github.com)*
- [WebTransport API by hamishwillee · Pull Request #26529 · mdn/content](https://github.com/mdn/content/pull/26529) *(github.com)*
- [Test https://w3c.github.io/webtransport/#webtransportreceivestream-pull-bytes by achristensen07 · Pull Request #61577 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/61577) *(github.com)*
- [Release merge\_pr\_61577 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/releases/tag/merge_pr_61577) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 66 result(s) found across 14 planned queries — **40 verified relevant**
  - `"chromestatus.com/feature/5109912169480192" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/w3c/webtransport/issues/372" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"github.com/w3c/webtransport/pull/395" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"w3c.github.io/webtransport" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (6 returned)
  - `"WebTransportReceiveStream" API` — *Core feature API query* (8 returned)
  - `"WebTransportReceiveStream" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"per-stream" OR "stream-specific" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransportReceiveStream" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebTransportReceiveStream" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"WebTransportReceiveStream" getStats ("bytesReceived" OR "bytesRead")` — *Finds technical code snippets and API usage demonstrating the getStats() method and byte counter properties on WebTransportReceiveStream.* (6 returned)
  - `"WebTransportReceiveStream" (tutorial OR guide OR "how to") WebTransport` — *Identifies developer guides, technical blog posts, and practical tutorials detailing the implementation of incoming WebTransport streams.* (8 returned)
  - `"WebTransportReceiveStream" backpressure (buffering OR latency OR performance)` — *Surfaces articles and case studies exploring how WebTransportReceiveStream helps diagnose client-side backpressure and stream buffering.* (6 returned)
  - `"WebTransportReceiveStream" (Chrome OR Chromium OR Firefox OR Safari OR "intent to")` — *Tracks browser vendor release notes, Intent to Ship announcements, and cross-browser implementation status for the standardized interface.* (8 returned)
  - `site:github.com OR site:news.ycombinator.com "WebTransportReceiveStream"` — *Discovers community feedback, developer sentiment, and implementation discussions across open-source codebases and developer forums.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **2 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 2 result(s) found — **1 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 119 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 2 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5109912169480192)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5109912169480192)
- [Specification](https://w3c.github.io/webtransport/#webtransportreceivestream)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/568317222)
