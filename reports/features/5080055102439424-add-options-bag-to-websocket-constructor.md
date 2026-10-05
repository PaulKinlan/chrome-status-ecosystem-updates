# Add options bag to WebSocket constructor

> **Report Week:** 2026-W41 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Add support for passing an option bag (WebSocketInit dictionary) as the second argument to the WebSocket constructor. The option bag will initially support a "protocols" option, allowing developers to specify subprotocols (mirroring the existing protocols argument), and also serves as an extension point for future options.  Before, this would be written \`const socket = new WebSocket("wss://example.com:8080", "soap")\`. After, this could also be written \`const socket = new WebSocket("wss://example.com:8080", { protocols: "soap" })\`.  See https://github.com/whatwg/websockets/issues/42 and spec PR https://github.com/whatwg/websockets/pull/76 for this change.

### Motivation

There is a demand for extensibility of options on the WebSocket constructor, to mirror the "option bag" approach that the Fetch API has. https://github.com/whatwg/websockets/issues/42 is requested by a number of implementors and users, and Chromium wants this as a means to add a `targetAddressSpace` option matching the one added to Fetch for Local Network Access (https://wicg.github.io/local-network-access/#fetch-api).

## Ecosystem Status

- **Momentum:** High (330 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Chrome 154 enabled by default an options bag (\`WebSocketInit\` dictionary) as the second argument to the \`WebSocket\` constructor, modernizing the legacy API to align with Fetch-style ergonomics. Standardized in WHATWG WebSockets PR #76, this change unblocks future configuration parameters, such as Chromium's \`targetAddressSpace\` for Local Network Access. Full Baseline interoperability is still pending, but engine consensus on the pattern is solid.

### Recommendations
- Actionable Advice: Avoid passing an options object in production code targeting all browsers today, as older engines will stringify the dictionary into \`"\[object Object\]"\` and fail subprotocol negotiation. Stick to the classic \`new WebSocket(url, protocols)\` string/array syntax for subprotocols, and gate options-bag usage (such as \`targetAddressSpace\`) behind runtime capability checks.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "I suggest we resolve this as "position: support" one week from now. This is a straightforward addition that allows us to enhance WebSockets more easil..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Supporting options bag in WebSocket constructor](https://github.com/WebKit/standards-positions/issues/708) [closed]
- **Mozilla:** [Supporting options bag in WebSocket constructor](https://github.com/mozilla/standards-positions/issues/1444) [open]

## 📰 Ecosystem Blogs & Articles

- [Experimental Chromium Web Platform Features \| Polypane](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > Experimental Chromium Web Platform Features | Polypane This website works best with JavaScript enabled. Skip to content Skip to footer Polypane Brand kit Copy icon as SVG Copy logo as SVG Brand guidelines Homepage Search Changelog Polypane 31 Latest ...
- [Add option bag to WebSocket constructor \[542670554\] - Chromium](https://issues.chromium.org/issues/542670554) *(issues.chromium.org)*
  > Chromium Sign in
- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)*
  > Intent to Prototype: Add options bag to WebSocket constructor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Add options bag to ...
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > Chrome 154 Release Notes - Chrome Platform Status Chrome 154 Release Notes Preview Scheduled Stable Release September 22, 2026 Network / Connectivity Add options bag to WebSocket constructor # Link copied! Add support for passing an option bag (WebSo...
- [Add options bag to WebSocket constructor - Chrome Platform Status](https://chromestatus.com/feature/5080055102439424) *(chromestatus.com)*
  > Chrome Platform Status
- [\[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor](http://www.mail-archive.com/blink-dev@chromium.org/msg17124.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Add options bag to WebSocket constructor Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Add options bag to WebSocket constructor Chromestatus Wed, 05 Aug 2026 10:57:09 -0700 Contact emails [ema...
- [WebSockets: The Complete Guide for 2026 \| DevToolbox Blog](https://devtoolbox.dedyn.io/blog/websocket-complete-guide) *(devtoolbox.dedyn.io · 2026-02-12T00:00:00)*
  > The browser provides a built-in WebSocket constructor.
- [The Wonderful World of WebSockets Continued… \| by Madeline Corman \| The Startup \| Medium](https://medium.com/swlh/the-wonderful-world-of-websockets-continued-62348f08910c) *(medium.com · 2020-04-20T14:21:18)*
  > Creating a WebSocket connection is fairly simple. We <strong>initialize a new connection using the WebSocket() constructor and pass in the server URL</strong>.
- [Getting Started with WebSockets. In this blog post we’re going to cover… \| by Shubham Bhatnagar \| GDG KIIT \| Medium](https://medium.com/dsckiit/getting-started-with-websockets-a45abc2493b) *(medium.com · 2020-05-25T06:26:45)*
  > Creating WebSocket connections is simple. All you have to do is <strong>call the WebSocket constructor and pass in the URL of your server</strong>.
- [A guide to using WebSockets in Laravel - Honeybadger Developer Blog](https://www.honeybadger.io/blog/a-guide-to-using-websockets-in-laravel) *(honeybadger.io · 2023-05-29T00:00:00)*
  > We can also <strong>specify a broadcastWith method</strong>. This will return an array of data that we want to broadcast with the event. In this case, we&#x27;ll broadcast the message property that we passed to the event&#x27;s constructor and will b...
- [How to WebSockets \[Complete Guide\] \| Treehouse Blog](https://blog.teamtreehouse.com/an-introduction-to-websockets) *(blog.teamtreehouse.com · 2022-05-17T21:23:28)*
  > The problem I am facing and I don’t seem to find any single tutorial on the web is setting the socket implementation in my server. I have a website hosted somewhere and I cannot find out how to deploy a web server using PHP. How do I set up an endpoi...
- [WebSocket Libraries, Tools & Specs by Language \| WebSocket.org](https://websocket.org/resources/websocket-resources) *(websocket.org)*
  > Curated list of WebSocket libraries for JavaScript, Python, Go, Java, Rust, C#, and PHP. Plus testing tools, RFCs, browser APIs, and managed services.
- [Part 1 - Send & receive - websockets 17.0.1 documentation](https://websockets.readthedocs.io/en/stable/intro/tutorial1.html) *(websockets.readthedocs.io)*
  > The WebSocket protocol provides two-way communication between a browser and a server over a persistent connection.
- [Node.js WebSockets](https://www.w3schools.com/nodejs/nodejs_websockets.asp) *(w3schools.com)*
  > const WebSocket = require(&#x27;ws&#x27;); const wss = new WebSocket.Server({ port: 8080, perMessageDeflate: { zlibDeflateOptions: { chunkSize: 1024, memLevel: 7, level: 3 }, zlibInflateOptions: { chunkSize: 10 * 1024 }, // Other options clientNoCont...
- [WebSocket](https://javascript.info/websocket) *(javascript.info)*
  > This optional header is set using the second parameter of new WebSocket. That’s the array of subprotocols, e.g. if we’d like to use SOAP or WAMP: let socket = new WebSocket(&quot;wss://javascript.info/chat&quot;, [&quot;soap&quot;, &quot;wamp&quot;])...
- [javascript - WebSocket Server - Stack Overflow](https://stackoverflow.com/questions/74005325/websocket-server) *(stackoverflow.com)*
  > WebSocket connection to &#x27;wss://mysite.com/8080&#x27; failed: Error during WebSocket handshake: Unexpected response code: 404 · Here is the code of the local server, which works: const Socket = require(&quot;websocket&quot;).server const http = r...
- [websockets](https://cs.lmu.edu/~ray/notes/websockets) *(cs.lmu.edu)*
  > Subsequent example will show you the right way to specify a host.&lt;/p&gt; &lt;p&gt;&lt;input type=&quot;text&quot;&gt;&lt;button&gt;Capitalize&lt;/button&gt;&lt;/p&gt; &lt;p id=&quot;response&quot;&gt;&lt;/p&gt; &lt;script&gt; addEventListener(&#x2...
- [websocket API · WebPlatform Docs](https://webplatform.github.io/docs/apis/websocket) *(webplatform.github.io)*
  > var socket = new WebSocket(&#x27;ws://localhost:8080/&#x27;); socket.onopen = function () { console.log(&#x27;Connected!&#x27;); }; socket.onmessage = function (event) { console.log(&#x27;Received data: &#x27; + event.data); socket.close(); }; socket...
- [Capabilities \| 2020 \| The Web Almanac by HTTP Archive](https://almanac.httparchive.org/en/2020/capabilities) *(almanac.httparchive.org · 2024-12-02T00:00:00)*
  > The WebSocketStream API (Explainer, not on the standards track yet) wants to bring easy-to-use backpressure support to the WebSocket API by extending it with streams. Instead of using the usual WebSocket constructor, developers need to create a new i...
- [Re-establishing web-socket for PWA - Need help - Bubble Forum](https://forum.bubble.io/t/re-establishing-web-socket-for-pwa/249335) *(forum.bubble.io · 2023-02-28T18:00:11)*
  > I have a PWA shortcut for my app. When people re-access the website from the shortcut, if the PWA was already open and running in the background, the websocket will have been disconnected, so data will not update on their screen. This is a catastroph...
- [Implementing WebSockets in Progressive Web Apps - Tesla Digital - Connecting Business & Technology with Modern Software Develpoment](https://www.tesladigitalhq.com/implementing-websockets-in-progressive-web-apps) *(tesladigitalhq.com · 2024-05-17T14:46:15)*
  > Our Progressive Web App will thrive, empowered by the instant exchange of data and the fluid user experience it provides. By mastering WebSocket connections, we&#x27;re releasing the full potential of our PWA, liberating our users from the constraint...
- [Pwas In The Gaming Industry: Creating Immersive Web-Based Experiences](https://gtcsys.com/comprehensive-faqs-guide-real-time-communication-in-pwas-websockets-server-sent-events-and-webrtc) *(gtcsys.com · 2024-03-28T10:47:32)*
  > These technologies empower developers to create dynamic, real-time experiences in PWAs, enhancing user engagement and interactivity. WebSocket is a communication protocol that provides full-duplex, bidirectional communication channels over a single T...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Experimental Chromium Web Platform Features \| Polypane](https://polypane.app/experimental-web-platform-features) *(polypane.app)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > Experimental Chromium Web Platform Features | Polypane This website works best with JavaScript enabled. Skip to content Skip to footer Polypane Brand kit Copy icon as SVG Copy logo as SVG Brand guidelines Homepage Search Changelog Polypane ...
- [Add option bag to WebSocket constructor \[542670554\] - Chromium](https://issues.chromium.org/issues/542670554) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > Chromium Sign in
- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > Intent to Prototype: Add options bag to WebSocket constructor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Add optio...
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)* *(Cites: `https://github.com/whatwg/websockets/issues/42`)*
  > Chrome 154 Release Notes - Chrome Platform Status Chrome 154 Release Notes Preview Scheduled Stable Release September 22, 2026 Network / Connectivity Add options bag to WebSocket constructor # Link copied! Add support for passing an option ...

## 📚 Platform Documentation & Specifications

- [Writing WebSocket client applications - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications) *(developer.mozilla.org)*
- [WebSocket: WebSocket() constructor - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/WebSocket) *(developer.mozilla.org)*
- [WebSocket - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) *(developer.mozilla.org)*
- [GitHub - websockets/ws: Simple to use, blazing fast and thoroughly tested WebSocket client and server for Node.js · GitHub](https://github.com/websockets/ws) *(github.com)*
- [GitHub - webmaxru/mqtt-websockets-angular-pwa](https://github.com/webmaxru/mqtt-websockets-angular-pwa) *(github.com)*
- [GitHub - marcelovue/first-pwa: PWA with websocket, get bitcoin price in usdt from binance](https://github.com/cruzeiro99/first-pwa) *(github.com)*
- [deps(deps): bump the npm-prod group across 1 directory with 52 updates by dependabot\[bot\] · Pull Request #39 · org-event/pwa-no-cloud](https://github.com/org-event/pwa-no-cloud/pull/39) *(github.com)*
- [WebSocketStream: WebSocketStream() constructor](https://developer.mozilla.org/en-US/docs/Web/API/WebSocketStream/WebSocketStream) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 38 result(s) found across 8 planned queries — **29 verified relevant**
  - `"chromestatus.com/feature/5080055102439424" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/whatwg/websockets/issues/42" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"github.com/whatwg/websockets/pull/76" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"Add options bag to WebSocket constructor" API` — *Core feature API query* (3 returned)
  - `"Add options bag to WebSocket constructor" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"const socket = new websocket("wss://example.com:8080", "soap")" OR "const socket = new websocket("wss://example" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Add options bag to WebSocket constructor" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Add options bag to WebSocket constructor" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 623 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 2 document(s) analyzed
- **Standards Discussion Comments:** 1 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5080055102439424)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5080055102439424)
- [Specification](https://github.com/whatwg/websockets/pull/76)
- [Chromium Tracking Bug](https://crbug.com/542670554)
