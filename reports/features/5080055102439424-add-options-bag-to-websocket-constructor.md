# Add options bag to WebSocket constructor

> **Report Week:** 2026-W38 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Add support for passing an option bag (WebSocketInit dictionary) as the second argument to the WebSocket constructor. The option bag will initially support a "protocols" option, allowing developers to specify subprotocols (mirroring the existing protocols argument), and also serves as an extension point for future options.  Before, this would be written \`const socket = new WebSocket("wss://example.com:8080", "soap")\`. After, this could also be written \`const socket = new WebSocket("wss://example.com:8080", { protocols: "soap" })\`.  See https://github.com/whatwg/websockets/issues/42 and spec PR https://github.com/whatwg/websockets/pull/76 for this change.

### Motivation

There is a demand for extensibility of options on the WebSocket constructor, to mirror the "option bag" approach that the Fetch API has. https://github.com/whatwg/websockets/issues/42 is requested by a number of implementors and users, and Chromium wants this as a means to add a `targetAddressSpace` option matching the one added to Fetch for Local Network Access (https://wicg.github.io/local-network-access/#fetch-api).

## Ecosystem Status

- **Momentum:** High (290 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive / High Interest
- **Executive Take:** Add options bag to WebSocket constructor is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Partial Multi-Engine Interest standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "I suggest we resolve this as "position: support" one week from now. This is a straightforward addition that allows us to enhance WebSockets more easil..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Twitter" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [Supporting options bag in WebSocket constructor](https://github.com/WebKit/standards-positions/issues/708) [closed]
- **Mozilla:** [Supporting options bag in WebSocket constructor](https://github.com/mozilla/standards-positions/issues/1444) [open]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Twitter](https://twitter.com/obswebsocket?lang=es) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [X - The Everything App / X](https://twitter.com/hashtag/websockets?lang=en) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [#websocket4net hashtag on Twitter](https://twitter.com/hashtag/websocket4net) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [X](https://twitter.com/hashtag/uwebsockets) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [TechWars on Twitter: "We compared #dwr vs #websocket - see results: http://t.co/LgQ6P1sYlH"](https://twitter.com/techwars_io/status/546915164139053056) — *by @techwars_io, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)*
  > Intent to Prototype: Add options bag to WebSocket constructor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Add options bag to ...
- [javascript - HTTP headers in Websockets client API](https://stackoverflow.com/questions/4361173/http-headers-in-websockets-client-api) *(stackoverflow.com)*
  > https://<strong>github.com/whatwg/websockets/issues/42</strong> · https://github.com/nodejs/undici/blob/main/docs/docs/api/WebSocket.md · Share · Share a link to this answer · Copy linkCC BY-SA 4.0 · Short permalink to this answer · Improve this answ...
- [\[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor](http://www.mail-archive.com/blink-dev@chromium.org/msg17124.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Add options bag to WebSocket constructor Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Add options bag to WebSocket constructor Chromestatus Wed, 05 Aug 2026 10:57:09 -0700 Contact emails [ema...
- [WebSockets: The Complete Guide for 2026 \| DevToolbox Blog](https://devtoolbox.dedyn.io/blog/websocket-complete-guide) *(devtoolbox.dedyn.io · 2026-02-12T00:00:00)*
  > The browser provides a built-in WebSocket constructor.
- [The Wonderful World of WebSockets Continued… \| by Madeline Corman \| The Startup \| Medium](https://medium.com/swlh/the-wonderful-world-of-websockets-continued-62348f08910c) *(medium.com · 2020-04-20T14:21:18)*
  > Medium The Wonderful World of WebSockets Continued… | by Madeline Corman | The Startup | Medium Sitemap Open in app Sign up Sign in Get app Write Search Sign up Sign in The Startup · Get smarter at building your thing. Follow to join The Startup’s +8...
- [WebSocket Libraries, Tools & Specs by Language \| WebSocket.org](https://websocket.org/resources/websocket-resources) *(websocket.org)*
  > WebSocket Libraries, Tools & Specs by Language | WebSocket.org Skip to content WebSocket.org Search Ctrl K Cancel GitHub WebSocket Libraries, Tools & Specs by Language by Matthew O&#39;Riordan • Published on September 1, 2025 • Updated March 10, 2026...
- [Getting Started with WebSockets. In this blog post we’re going to cover… \| by Shubham Bhatnagar \| GDG KIIT \| Medium](https://medium.com/dsckiit/getting-started-with-websockets-a45abc2493b) *(medium.com · 2020-05-25T06:26:45)*
  > Medium Getting Started with WebSockets. In this blog post we’re going to cover… | by Shubham Bhatnagar | GDG KIIT | Medium Sitemap Open in app Sign up Sign in Get app Write Search Sign up Sign in GDG KIIT · GDG KIIT is a student developers club power...
- [A guide to using WebSockets in Laravel - Honeybadger Developer Blog](https://www.honeybadger.io/blog/a-guide-to-using-websockets-in-laravel) *(honeybadger.io · 2023-05-29T00:00:00)*
  > WebSockets can be used to add real-time interactive experiences to your applications, but they can be confusing to get started with. In this article, we&#x27;ll brea...
- [Part 1 - Send & receive - websockets 17.0.1 documentation](https://websockets.readthedocs.io/en/stable/intro/tutorial1.html) *(websockets.readthedocs.io)*
  > The WebSocket protocol provides two-way communication between a browser and a server over a persistent connection.
- [How to create a WebSocket application: A step-by-step guide](https://geniusee.com/single-blog/how-to-build-a-websocket-application) *(geniusee.com · 2025-12-09T08:47:09)*
  > To create a new WebSocket connection, you must create a new object using the WebSocket constructor.
- [Node.js WebSockets](https://www.w3schools.com/nodejs/nodejs_websockets.asp) *(w3schools.com)*
  > const WebSocket = require(&#x27;ws&#x27;); const wss = new WebSocket.Server({ port: 8080, perMessageDeflate: { zlibDeflateOptions: { chunkSize: 1024, memLevel: 7, level: 3 }, zlibInflateOptions: { chunkSize: 10 * 1024 }, // Other options clientNoCont...
- [WebSocket](https://javascript.info/websocket) *(javascript.info)*
  > This optional header is set using the second parameter of new WebSocket. That’s the array of subprotocols, e.g. if we’d like to use SOAP or WAMP: let socket = new WebSocket(&quot;wss://javascript.info/chat&quot;, [&quot;soap&quot;, &quot;wamp&quot;])...
- [javascript - WebSocket Server - Stack Overflow](https://stackoverflow.com/questions/74005325/websocket-server) *(stackoverflow.com)*
  > WebSocket connection to &#x27;wss://mysite.com/8080&#x27; failed: Error during WebSocket handshake: Unexpected response code: 404 · Here is the code of the local server, which works: const Socket = require(&quot;websocket&quot;).server const http = r...
- [websocket API · WebPlatform Docs](https://webplatform.github.io/docs/apis/websocket) *(webplatform.github.io)*
  > var socket = new WebSocket(&#x27;ws://localhost:8080/&#x27;); socket.onopen = function () { console.log(&#x27;Connected!&#x27;); }; socket.onmessage = function (event) { console.log(&#x27;Received data: &#x27; + event.data); socket.close(); }; socket...
- [websockets](https://cs.lmu.edu/~ray/notes/websockets) *(cs.lmu.edu)*
  > Subsequent example will show you the right way to specify a host.&lt;/p&gt; &lt;p&gt;&lt;input type=&quot;text&quot;&gt;&lt;button&gt;Capitalize&lt;/button&gt;&lt;/p&gt; &lt;p id=&quot;response&quot;&gt;&lt;/p&gt; &lt;script&gt; addEventListener(&#x2...
- [Re-establishing web-socket for PWA - Need help - Bubble Forum](https://forum.bubble.io/t/re-establishing-web-socket-for-pwa/249335) *(forum.bubble.io · 2023-02-28T18:00:11)*
  > I have a PWA shortcut for my app. When people re-access the website from the shortcut, if the PWA was already open and running in the background, the websocket will have been disconnected, so data will not update on thei…
- [Implementing WebSockets in Progressive Web Apps - Tesla Digital - Connecting Business & Technology with Modern Software Develpoment](https://www.tesladigitalhq.com/implementing-websockets-in-progressive-web-apps) *(tesladigitalhq.com · 2024-05-17T14:46:15)*
  > By mastering WebSocket fundamentals, architecture, and security measures, we&#x27;ve bridged the gap between our app and the server. With optimized performance, our PWA is now poised to revolutionize the way users interact with our application. We&#x...
- [Microsoft Edge 149 web platform release notes (Jun. 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/149) *(learn.microsoft.com · 2026-08-06T00:00:00)*
  > Previously, a page that had an active WebSocket connection couldn&#x27;t be stored in the bfcache.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > Intent to Prototype: Add options bag to WebSocket constructor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Add optio...
- [javascript - HTTP headers in Websockets client API](https://stackoverflow.com/questions/4361173/http-headers-in-websockets-client-api) *(stackoverflow.com)* *(Cites: `https://github.com/whatwg/websockets/issues/42`)*
  > https://<strong>github.com/whatwg/websockets/issues/42</strong> · https://github.com/nodejs/undici/blob/main/docs/docs/api/WebSocket.md · Share · Share a link to this answer · Copy linkCC BY-SA 4.0 · Short permalink to this answer · Improve...

## 📚 Platform Documentation & Specifications

- [Writing WebSocket client applications - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications) *(developer.mozilla.org)*
- [WebSocket: WebSocket() constructor - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/WebSocket) *(developer.mozilla.org)*
- [WebSocket - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) *(developer.mozilla.org)*
- [GitHub - websockets/ws: Simple to use, blazing fast and thoroughly tested WebSocket client and server for Node.js · GitHub](https://github.com/websockets/ws) *(github.com)*
- [GitHub - HowProgrammingWorks/PWA: Progressive Web Application · GitHub](https://github.com/HowProgrammingWorks/PWA) *(github.com)*
- [GitHub - marcelovue/first-pwa: PWA with websocket, get bitcoin price in usdt from binance](https://github.com/cruzeiro99/first-pwa) *(github.com)*
- [GitHub - webmaxru/mqtt-websockets-angular-pwa](https://github.com/webmaxru/mqtt-websockets-angular-pwa) *(github.com)*
- [WebSocketStream: WebSocketStream() constructor](https://developer.mozilla.org/en-US/docs/Web/API/WebSocketStream/WebSocketStream) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 35 result(s) found across 8 planned queries — **25 verified relevant**
  - `"chromestatus.com/feature/5080055102439424" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/whatwg/websockets/issues/42" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"github.com/whatwg/websockets/pull/76" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"Add options bag to WebSocket constructor" API` — *Core feature API query* (2 returned)
  - `"Add options bag to WebSocket constructor" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"const socket = new websocket("wss://example.com:8080", "soap")" OR "const socket = new websocket("wss://example" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Add options bag to WebSocket constructor" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Add options bag to WebSocket constructor" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 618 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 2 document(s) analyzed
- **Standards Discussion Comments:** 1 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5080055102439424)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5080055102439424)
- [Specification](https://github.com/whatwg/websockets/pull/76)
- [Chromium Tracking Bug](https://crbug.com/542670554)
