# Add options bag to WebSocket constructor

> **Report Week:** 2026-W39 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Add support for passing an option bag (WebSocketInit dictionary) as the second argument to the WebSocket constructor. The option bag will initially support a "protocols" option, allowing developers to specify subprotocols (mirroring the existing protocols argument), and also serves as an extension point for future options.  Before, this would be written \`const socket = new WebSocket("wss://example.com:8080", "soap")\`. After, this could also be written \`const socket = new WebSocket("wss://example.com:8080", { protocols: "soap" })\`.  See https://github.com/whatwg/websockets/issues/42 and spec PR https://github.com/whatwg/websockets/pull/76 for this change.

### Motivation

There is a demand for extensibility of options on the WebSocket constructor, to mirror the "option bag" approach that the Fetch API has. https://github.com/whatwg/websockets/issues/42 is requested by a number of implementors and users, and Chromium wants this as a means to add a `targetAddressSpace` option matching the one added to Fetch for Local Network Access (https://wicg.github.io/local-network-access/#fetch-api).

## Ecosystem Status

- **Momentum:** High (270 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** Standardizing an options bag (\`WebSocketInit\`) as the second argument to the \`WebSocket\` constructor aligns WebSocket initialization ergonomics with modern web platform patterns like \`fetch()\`. Shipping enabled by default in Chrome 154, this addition directly resolves longstanding WHATWG requests and serves as the foundation for modern capabilities like Local Network Access (\`targetAddressSpace\`). Cross-engine consensus is strong, with WebKit officially resolving in support and Mozilla actively reviewing the proposal.

### Recommendations
- Actionable Advice: Do not unconditionally replace subprotocol strings with \`{ protocols }\` in production yet, as older browser engines will coerce the object into an invalid \`"\[object Object\]"\` subprotocol and throw a \`SyntaxError\`. If adopting the options bag early for features like \`targetAddressSpace\`, wrap construction in a try/catch or gate it with feature detection to fall back gracefully to the legacy constructor syntax.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "I suggest we resolve this as "position: support" one week from now. This is a straightforward addition that allows us to enhance WebSockets more easil..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Twitter" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [Supporting options bag in WebSocket constructor](https://github.com/WebKit/standards-positions/issues/708) [closed]
- **Mozilla:** [Supporting options bag in WebSocket constructor](https://github.com/mozilla/standards-positions/issues/1444) [open]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Twitter](https://twitter.com/obswebsocket?lang=es) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [#websocket4net hashtag on Twitter](https://twitter.com/hashtag/websocket4net) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [X - The Everything App / X](https://twitter.com/hashtag/websockets?lang=en) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [X](https://twitter.com/hashtag/uwebsockets) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [TechWars on Twitter: "We compared #dwr vs #websocket - see results: http://t.co/LgQ6P1sYlH"](https://twitter.com/techwars_io/status/546915164139053056) — *by @techwars_io, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF89y43G9GciQHeTejGehfPpVG1ZWWuY1M8EiOH1-S7a-0xYsAmTYDEqFIYyPkeMuBTRJu1onw0IABCp5v_-mufg7Qwdgi7pAq4FoQ_z7dTu9z1f1tLR8zqcCtvK-bK75sGMJI=) *(vertexaisearch.cloud.google.com)*
  > Allow dictionary as second param in WebSocket constructor · Issue #42 · whatwg/websockets · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Relo...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGbF4ZD9uOwzoY0FwMU4SWCLqqqNXvJXAMUf4YElZIZjTC0uMzu4cyN1gK0zXT8asp6bnZgL5uVqKLSq1t1O0ZBhg68jzmDWy1i63Ry7VfPtQmj4IlTfHpJaP_Z) *(vertexaisearch.cloud.google.com)*
  > Chrome 154 Release Notes - Chrome Platform Status Chrome 154 Release Notes Preview Network / Connectivity Add options bag to WebSocket constructor # Link copied! Add support for passing an option bag (WebSocketInit dictionary) as the second argument ...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHdzl1YB_byuWnUrYkiiB89LWmzJgybJ7x0qZMVGgnGPWkMHh5XbDowqdSBF-z5xt3uT3zfuj8LRbnXNZ3Ov2EKugepe0wglhmjT3KSsi1xUe5QonbvbPnSoEwx2ktYFs3_p2huZVPuiRhNc2i4IQ==) *(vertexaisearch.cloud.google.com)*
  > Supporting options bag in WebSocket constructor · Issue #708 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Relo...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG9RhMRuGrCc6w8QSoBa5aMxoURU5MFifoUjYfU6w-lSteAtGDnjVnTBIgqe762yrvyHun5SGfNM_8avwAz0JJWx3zuq8H2_cXL9HrxT1YoFeSsY8NIzoJTNbDEK2O2-DAC9XVnn-_1q-a2zos=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Add options bag to WebSocket constructor"** update enhances the WHATWG WebSocket specification by allowing the second argument to accept an options dictionary (`WebSocketInit`) in addition to the legacy string or ar
- [stackoverflow.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHO1ea_hDTT3lVdwatapbVV8o5I5Ci8ix2ybDQ3-oYMX4IwG0hVBwGhYAQismFqvHNwzvoFjsMC5jN8qGVOOdoui8CHeysDdp_KNWnYDxWyDzlAUJ9jJorL9m8Nggmfp8aq9Fe17U1VP81P38eaEy9slwPl_Gt5ZfVj1J2b8nUQsxQAHvtb1Q==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Add options bag to WebSocket constructor"** update enhances the WHATWG WebSocket specification by allowing the second argument to accept an options dictionary (`WebSocketInit`) in addition to the legacy string or ar
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEI6UiqL_Qkj5rFYsneGzvK65btqTYh0S8NnDdNBldIx1w8kRUHxqveKcVS5UM1surIrJlaQuIllUmU-YyGrs0o3yprQTyEzpMmY2XD-hZSQq9Lsv9VFGrj06mEGokfV9Bxq0UD5Q==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Add options bag to WebSocket constructor"** update enhances the WHATWG WebSocket specification by allowing the second argument to accept an options dictionary (`WebSocketInit`) in addition to the legacy string or ar
- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5080055102439424</strong>?gate=5087234207383552
- [\[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor](http://www.mail-archive.com/blink-dev@chromium.org/msg17124.html) *(mail-archive.com)*
  > Before, this would be written `<strong>const socket = new WebSocket(&quot;wss://example.com:8080&quot;, &quot;soap&quot;)</strong>`. After, this could also be written `const socket = new WebSocket(&quot;wss://example.com:8080&quot;, { protocols: &quo...
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

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5080055102439424</strong>?gate=5087234207383552

## 📚 Platform Documentation & Specifications

- [WebSocket: WebSocket() constructor - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/WebSocket) *(developer.mozilla.org)*
- [WebSocket - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) *(developer.mozilla.org)*
- [GitHub - websockets/ws: Simple to use, blazing fast and thoroughly tested WebSocket client and server for Node.js · GitHub](https://github.com/websockets/ws) *(github.com)*
- [Integrate standalone Python and JavaScript Bags with optional JSON/TYTX RPC by genro · Pull Request #1348 · genropy/genropy](https://github.com/genropy/genropy/pull/1348) *(github.com)*
- [GitHub - HowProgrammingWorks/PWA: Progressive Web Application · GitHub](https://github.com/HowProgrammingWorks/PWA) *(github.com)*
- [GitHub - marcelovue/first-pwa: PWA with websocket, get bitcoin price in usdt from binance](https://github.com/cruzeiro99/first-pwa) *(github.com)*
- [GitHub - webmaxru/mqtt-websockets-angular-pwa](https://github.com/webmaxru/mqtt-websockets-angular-pwa) *(github.com)*
- [WebSocketStream: WebSocketStream() constructor](https://developer.mozilla.org/en-US/docs/Web/API/WebSocketStream/WebSocketStream) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 34 result(s) found across 8 planned queries — **17 verified relevant**
  - `"chromestatus.com/feature/5080055102439424" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/whatwg/websockets/issues/42" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"github.com/whatwg/websockets/pull/76" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"Add options bag to WebSocket constructor" API` — *Core feature API query* (2 returned)
  - `"Add options bag to WebSocket constructor" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"const socket = new websocket("wss://example.com:8080", "soap")" OR "const socket = new websocket("wss://example" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Add options bag to WebSocket constructor" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Add options bag to WebSocket constructor" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **6 verified relevant**
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
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5080055102439424)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5080055102439424)
- [Specification](https://github.com/whatwg/websockets/pull/76)
- [Chromium Tracking Bug](https://crbug.com/542670554)
