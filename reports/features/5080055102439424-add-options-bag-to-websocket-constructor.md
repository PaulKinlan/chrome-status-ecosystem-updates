# Add options bag to WebSocket constructor

> **Report Week:** 2026-W37 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Add support for passing an option bag (WebSocketInit dictionary) as the second argument to the WebSocket constructor. The option bag will initially support a "protocols" option, allowing developers to specify subprotocols (mirroring the existing protocols argument), and also serves as an extension point for future options.

Before, this would be written `const socket = new WebSocket("wss://example.com:8080", "soap")`. After, this could also be written `const socket = new WebSocket("wss://example.com:8080", { protocols: "soap" })`.

See https://github.com/whatwg/websockets/issues/42 and spec PR https://github.com/whatwg/websockets/pull/76 for this change.

### Motivation

There is a demand for extensibility of options on the WebSocket constructor, to mirror the "option bag" approach that the Fetch API has. https://github.com/whatwg/websockets/issues/42 is requested by a number of implementors and users, and Chromium wants this as a means to add a `targetAddressSpace` option matching the one added to Fetch for Local Network Access (https://wicg.github.io/local-network-access/#fetch-api).

## Ecosystem Status

- **Momentum:** High (360 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** The addition of an options bag (`WebSocketInit`) to the `WebSocket` constructor modernizes the API to align with ergonomic patterns found in modern Web APIs like `fetch()`. Shipping enabled by default in Chrome 154, it resolves a long-standing standards request (WHATWG WebSockets issue #42 / PR #76) and provides a crucial extension point for capabilities like Local Network Access (`targetAddressSpace`). Cross-engine consensus is strongly favorable, setting a clear path toward broader interoperability.

### Recommendations
- Actionable Advice: Continue passing subprotocols as strings or arrays for general cross-browser production code until Safari and Firefox implement the dictionary signature. Teams targeting Chromium-specific environments or experimenting with Local Network Access can adopt the dictionary syntax via progressive enhancement or wrapper abstractions.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "I suggest we resolve this as "position: support" one week from now. This is a straightforward addition that allows us to enhance WebSockets more easil..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Supporting options bag in WebSocket constructor](https://github.com/WebKit/standards-positions/issues/708) [open]
- **Mozilla:** [Supporting options bag in WebSocket constructor](https://github.com/mozilla/standards-positions/issues/1444) [open]

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHs4qREpeWjcrZiWx0hIzuIkJT9MH8qUpWRRPCb99zm0AeIi38zdZ5-9QISkxJEjKeWuM9fUIwxWqQluJP-Z95H2GDsQ0I-6kRSmbHhaD2fxoc6V4duFIrw8AKUroI2_X9nM5HmmLvh) *(vertexaisearch.cloud.google.com)*
  > Chrome 154 beta | Blog | Chrome for Developers Skip to main content / English Nederlands Русский فارسی বাংলা Sign in Blog Chrome for Developers Blog Chrome 154 beta Stay organized with collections Save and categorize content based on your preferences...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFIkbzAU0LK-ygf8Fp_ZyfMsdxj1dblFDeN9j6WOfelNXLHwl-BuzG7cLjC3xGoqZl7tzj-hRlJ4MSbEPQ3xePQQMg8GhHBN-NeV1s4e929Vr-KOWQ3paJVEqFnccn6jJxZaNp3) *(vertexaisearch.cloud.google.com)*
  > Allow dictionary as second param in WebSocket constructor · Issue #42 · whatwg/websockets · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Relo...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFE2Nobi8dkVqb6gHd-KE_razItev3oDwsvb_szqEU9le_C23NJwr7V2aXJhV-ZrdCSexIL6RKd2SFsH4crxInStcu_Huc6YThb-IXmFc24IBXuIrdx8snddpwBPAdQGca2QfG0IGzq41KthouDlvujXWhtb_KLo_VW4vWRWS3frgAO2YZg5A==) *(vertexaisearch.cloud.google.com)*
  > WebSocketStream: WebSocketStream() constructor - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs WebSocketStream WebSocketStream() Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (U...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGjoFLdPG9tUXWHS42ZDyhxNaLorkcKD_ZDc9gXFTgt8PNdeyDvrq9TUlsx3OFjSHy4h5_fVZxjoWIZ-Qiazk61QOEN4LqfqdlTT9OY_skAPplFtmGOQS4EaFOXub2Zepg=) *(vertexaisearch.cloud.google.com)*
  > Pull requests · whatwg/websockets · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You signed out in another ta...
- [nodejs.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHVDRAoP2Zt0ushi8HJPlcjiUCgSfK44qr0RzacnHBdvpIk4B8jZ9zs0JDrDyYEQ7FI3FOeB46037Vfm3R-I5bRM-E4YmJMfcUAqpZ4Y71K85O3Im6WwsctZNko-Lg=) *(vertexaisearch.cloud.google.com)*
  > WebSocket | Node.js Undici Undici version v8.10.0 Navigation WebSocket Navigation WebSocket Documentation Home Getting Started API Dispatcher Client H2CClient Pool BalancedPool RoundRobinPool Agent PoolStats Connector ProxyAgent EnvHttpProxyAgent Soc...
- [stackoverflow.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEdGFEYrMgK5Jcj1dICCgKpdFo31WQ6zLbuPk_ArT2FIhAZcoxowLCSFLDyWoaselGa3lqKxgqb5LtaoiQG2WLOoGL4sDfhbS8gPTQFpB7F3dnVsJNBMonLpBJOCqBIWYkubrq_2FvrOAl8FeAljh_F0vHjtRcfpq5R9riUJs65jILg1ncChDo=) *(vertexaisearch.cloud.google.com)*
  > ### Summary  The Web Platform feature **"Add options bag to `WebSocket` constructor"** introduces support for passing an options dictionary (`WebSocketInit`) as the second argument to `new WebSocket()`.   Previously, the second parameter strictly acc
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE1txfsZo82JW8_BTPpCcSh02x7fhZz5yv8rNNSnvBk9DgCXmoJjCClMTKl5BIW0tAKq1O_rsnBvG1uiOTlNE48w7h0prI3KqeILHpmNrMFchVf9BDzsk8WCWDBEeOo3fySEm8R8SxoNgfXizbz_rwEV8CgWsg2uMEWFEgzVksTgA==) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEEcwEkNjcqOKeEqz-lQAcmxg5LBoU8Tg1LBaivuc6-ntdNO_2lSyZgUZ_J5nTDGiBsifYWITJrwODjrd1r5TClA4YEH_GGKoXGSyLKe5-GDG_QF87JpkNgq4Pt6KhMFbu1jxcvKxshzNsBjTh61xqW8Boe3dx2cBBT5vGyw3aebLSozqigEQ==) *(vertexaisearch.cloud.google.com)*
  > Chromium Dash
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFzQqZPCjeF528pXILttrxVVHytDZVIgGevTg-n8OqunX7fPiapdXLSk6pVfHSkO7tU-dxQUfAf34XSI9auzUtkxHNMdpBC2HwYSfZtKTwKuAyvcvJ4UR8az3rRf5UTGNMZiozTht9G7XM1r4qWfCwsZVQbu4f3yPzBAotyrg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary  The Web Platform feature **"Add options bag to `WebSocket` constructor"** introduces support for passing an options dictionary (`WebSocketInit`) as the second argument to `new WebSocket()`.   Previously, the second parameter strictly acc
- [[blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)*
  > The user must grant the site the ... it will be blocked). This builds on https://chromestatus.com/feature/5080055102439424 which <strong>adds an options bag to the WebSocket constructor</strong>....
- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5080055102439424</strong>?gate=5087234207383552
- [[blink-dev] Intent to Prototype: Add options bag to WebSocket constructor](http://www.mail-archive.com/blink-dev@chromium.org/msg17124.html) *(mail-archive.com)*
  > False Tracking bug https://crbug.com/542670554 Estimated milestones No milestones specified Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5080055102439424</strong>?gate=5087234207383552 This intent message was g...
- [javascript - HTTP headers in Websockets client API](https://stackoverflow.com/questions/4361173/http-headers-in-websockets-client-api) *(stackoverflow.com)*
  > https://<strong>github.com/whatwg/websockets/issues/42</strong> · https://github.com/nodejs/undici/blob/main/docs/docs/api/WebSocket.md · Share · Share a link to this answer · Copy linkCC BY-SA 4.0 · Short permalink to this answer · Improve this answ...
- [WebSockets: The Complete Guide for 2026 | DevToolbox Blog](https://devtoolbox.dedyn.io/blog/websocket-complete-guide) *(devtoolbox.dedyn.io · 2026-02-12T00:00:00)*
  > The browser provides a built-in WebSocket constructor.
- [The Wonderful World of WebSockets Continued… | by Madeline Corman | The Startup | Medium](https://medium.com/swlh/the-wonderful-world-of-websockets-continued-62348f08910c) *(medium.com · 2020-04-20T14:21:18)*
  > The Wonderful World of WebSockets Continued… Walking Through a Short Demo I closed my previous blog post with the promise of a tutorial on creating a demo app utilizing WebSockets. Here we will do …
- [Getting Started with WebSockets. In this blog post we’re going to cover… | by Shubham Bhatnagar | GDG KIIT | Medium](https://medium.com/dsckiit/getting-started-with-websockets-a45abc2493b) *(medium.com · 2020-05-25T06:26:45)*
  > Getting Started with WebSockets In this blog post, we’re going to cover how to use WebSockets to create real-time web applications. Before we dive into learning about the WebSocket protocol and API …
- [How to create a WebSocket application: A step-by-step guide](https://geniusee.com/single-blog/how-to-build-a-websocket-application) *(geniusee.com · 2025-12-09T08:47:09)*
  > To create a new WebSocket connection, you must create a new object using the WebSocket constructor.
- [How to WebSockets [Complete Guide] | Treehouse Blog](https://blog.teamtreehouse.com/an-introduction-to-websockets) *(blog.teamtreehouse.com · 2022-05-17T21:23:28)*
  > Learn how to use WebSockets to create real time web applications. Find the basics and create your first project in this introduction to WebSockets.
- [How to Create a WebSocket Connection in JavaScript ? - GeeksforGeeks](https://www.geeksforgeeks.org/javascript/how-to-create-a-websocket-connection-in-javascript) *(geeksforgeeks.org · 2024-03-21T15:16:52)*
  > WebSocket is a powerful communication protocol enabling real-time data exchange between clients and servers. In this guide, we&#x27;ll explore how to establish a WebSocket connection using JavaScript.
- [Part 1 - Send & receive - websockets 17.0.1 documentation](https://websockets.readthedocs.io/en/stable/intro/tutorial1.html) *(websockets.readthedocs.io)*
  > The WebSocket protocol provides two-way communication between a browser and a server over a persistent connection.
- [Node.js WebSockets](https://www.w3schools.com/nodejs/nodejs_websockets.asp) *(w3schools.com)*
  > const WebSocket = require(&#x27;ws&#x27;); const wss = new WebSocket.Server({ port: 8080, perMessageDeflate: { zlibDeflateOptions: { chunkSize: 1024, memLevel: 7, level: 3 }, zlibInflateOptions: { chunkSize: 10 * 1024 }, // Other options clientNoCont...
- [WebSocket](https://javascript.info/websocket) *(javascript.info)*
  > This optional header is set using the second parameter of new WebSocket. That’s the array of subprotocols, e.g. if we’d like to use SOAP or WAMP: let socket = new WebSocket(&quot;wss://javascript.info/chat&quot;, [&quot;soap&quot;, &quot;wamp&quot;])...
- [websocket API · WebPlatform Docs](https://webplatform.github.io/docs/apis/websocket) *(webplatform.github.io)*
  > var socket = new WebSocket(&#x27;ws://localhost:8080/&#x27;); socket.onopen = function () { console.log(&#x27;Connected!&#x27;); }; socket.onmessage = function (event) { console.log(&#x27;Received data: &#x27; + event.data); socket.close(); }; socket...
- [javascript - WebSocket Server - Stack Overflow](https://stackoverflow.com/questions/74005325/websocket-server) *(stackoverflow.com)*
  > WebSocket connection to &#x27;wss://mysite.com/8080&#x27; failed: Error during WebSocket handshake: Unexpected response code: 404 · Here is the code of the local server, which works: const Socket = require(&quot;websocket&quot;).server const http = r...
- [websockets](https://cs.lmu.edu/~ray/notes/websockets) *(cs.lmu.edu)*
  > Subsequent example will show you the right way to specify a host.&lt;/p&gt; &lt;p&gt;&lt;input type=&quot;text&quot;&gt;&lt;button&gt;Capitalize&lt;/button&gt;&lt;/p&gt; &lt;p id=&quot;response&quot;&gt;&lt;/p&gt; &lt;script&gt; addEventListener(&#x2...
- [Re-establishing web-socket for PWA - Need help - Bubble Forum](https://forum.bubble.io/t/re-establishing-web-socket-for-pwa/249335) *(forum.bubble.io · 2023-02-28T18:00:11)*
  > I have a PWA shortcut for my app. When people re-access the website from the shortcut, if the PWA was already open and running in the background, the websocket will have been disconnected, so data will not update on thei…
- [Pwas In The Gaming Industry: Creating Immersive Web-Based Experiences](https://gtcsys.com/comprehensive-faqs-guide-real-time-communication-in-pwas-websockets-server-sent-events-and-webrtc) *(gtcsys.com · 2024-03-28T10:47:32)*
  > These technologies empower developers to create dynamic, real-time experiences in PWAs, enhancing user engagement and interactivity. WebSocket is a communication protocol that provides full-duplex, bidirectional communication channels over a single T...
- [Implementing WebSockets in Progressive Web Apps - Tesla Digital - Connecting Business & Technology with Modern Software Develpoment](https://www.tesladigitalhq.com/implementing-websockets-in-progressive-web-apps) *(tesladigitalhq.com · 2024-05-17T14:46:15)*
  > By mastering WebSocket fundamentals, architecture, and security measures, we&#x27;ve bridged the gap between our app and the server. With optimized performance, our PWA is now poised to revolutionize the way users interact with our application. We&#x...
- [Implementing Progressive Web Apps (PWA) with MERN | by Harshit Sharma | Medium](https://medium.com/@harshitynwa/implementing-progressive-web-apps-pwa-with-mern-ea6442bf2d70) *(medium.com · 2024-05-22T20:53:19)*
  > By combining PWAs and WebSockets in a MERN app, you achieve the best of both worlds: offline functionality and real-time interaction. Whether tracking treks in remote areas or competing with friends online, your app remains responsive and reliable. T...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > The user must grant the site the ... it will be blocked). This builds on https://chromestatus.com/feature/5080055102439424 which <strong>adds an options bag to the WebSocket constructor</strong>....
- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5080055102439424</strong>?gate=5087234207383552
- [[blink-dev] Intent to Prototype: Add options bag to WebSocket constructor](http://www.mail-archive.com/blink-dev@chromium.org/msg17124.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > False Tracking bug https://crbug.com/542670554 Estimated milestones No milestones specified Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5080055102439424</strong>?gate=5087234207383552 This intent mes...
- [javascript - HTTP headers in Websockets client API](https://stackoverflow.com/questions/4361173/http-headers-in-websockets-client-api) *(stackoverflow.com)* *(Cites: `https://github.com/whatwg/websockets/issues/42`)*
  > https://<strong>github.com/whatwg/websockets/issues/42</strong> · https://github.com/nodejs/undici/blob/main/docs/docs/api/WebSocket.md · Share · Share a link to this answer · Copy linkCC BY-SA 4.0 · Short permalink to this answer · Improve...

## 📚 Platform Documentation & Specifications

- [Writing WebSocket client applications - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications) *(developer.mozilla.org)*
- [WebSocket: WebSocket() constructor - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/WebSocket) *(developer.mozilla.org)*
- [WebSocket - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) *(developer.mozilla.org)*
- [GitHub - HowProgrammingWorks/PWA: Progressive Web Application · GitHub](https://github.com/HowProgrammingWorks/PWA) *(github.com)*
- [GitHub - marcelovue/first-pwa: PWA with websocket, get bitcoin price in usdt from binance](https://github.com/cruzeiro99/first-pwa) *(github.com)*
- [GitHub - webmaxru/mqtt-websockets-angular-pwa](https://github.com/webmaxru/mqtt-websockets-angular-pwa) *(github.com)*
- [WebSocketStream: WebSocketStream() constructor](https://developer.mozilla.org/en-US/docs/Web/API/WebSocketStream/WebSocketStream) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 35 result(s) found across 8 planned queries — **26 verified relevant**
  - `"chromestatus.com/feature/5080055102439424" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/whatwg/websockets/issues/42" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"github.com/whatwg/websockets/pull/76" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"Add options bag to WebSocket constructor" API` — *Core feature API query* (2 returned)
  - `"Add options bag to WebSocket constructor" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"const socket = new websocket("wss://example.com:8080", "soap")" OR "const socket = new websocket("wss://example" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Add options bag to WebSocket constructor" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Add options bag to WebSocket constructor" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 9 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

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
