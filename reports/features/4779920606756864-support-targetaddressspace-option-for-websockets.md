# Support targetAddressSpace option for WebSockets

> **Report Week:** 2026-W37 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Add support for passing a targetAddressSpace option in the WebSocket constructor. This allows developers to specify that a WebSocket connection to a public hostname should be treated as going to a "local" or "loopback" destination, matching the existing support on the Fetch API. The main use case is to offer an escape hatch to bypass mixed content restrictions for connecting to local servers that cannot yet support HTTPS (as Local Network Access permissions require a secure context).

Example: A public site that connects to a local server can use a hostname to avoid needing manual configuration of the exact private IP address in use:

`const ws = new WebSocket("ws://local-server.example", { targetAddressSpace: "local"}`

This will flag the WebSocket connection as going to a local address, bypassing mixed content blocking when run in a secure context. The user must grant the site the local network permission for the WebSocket connection to succeed, and the hostname must resolve to a local IP address (otherwise it will be blocked).

This builds on https://chromestatus.com/feature/5080055102439424 which adds an options bag to the WebSocket constructor.

### Motivation

To avoid mixed content blocking for local network WebSockets requests, web developers have relied on having their users manually configure their local network IP addresses, which is awkward at best. Adding support for the targetAddressSpace option in WebSockets aligns it with the Fetch API. This has also been requested by developers (e.g., https://github.com/WICG/local-network-access/issues/16#issuecomment-4459071272).

## Ecosystem Status

- **Momentum:** High (260 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Support targetAddressSpace option for WebSockets is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "I suggest we resolve this as "position: support" one week from now. This is a straightforward addition that allows us to enhance WebSockets more easil..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Supporting options bag in WebSocket constructor](https://github.com/WebKit/standards-positions/issues/708) [open]
- **Mozilla:** [Supporting options bag in WebSocket constructor](https://github.com/mozilla/standards-positions/issues/1444) [open]

## Packages & Polyfills

- [ws](https://www.npmjs.com/package/ws) `v8.21.3` — Simple to use, blazing fast and thoroughly tested websocket client and server for Node.js
- [rpc-websockets](https://www.npmjs.com/package/rpc-websockets) `v10.0.1` — JSON-RPC 2.0 implementation over WebSockets for Node.js
- [@httptoolkit/websocket-stream](https://www.npmjs.com/package/@httptoolkit/websocket-stream) `v6.0.1` — Use websockets with the node streams API. Works in browser and node, with all current WS versions

## 📰 Ecosystem Blogs & Articles

- [[blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets Chromestatus Wed, 05 Aug 2026 13:26:20 -0700 Con...
- [How Do WebSockets Work? | Postman Blog](https://blog.postman.com/how-do-websockets-work) *(blog.postman.com · 2026-01-05T16:26:18)*
  > How Do WebSockets Work? | Postman Blog Skip to content How Do WebSockets Work? The Postman Team January 5, 2026 Quick reference: How do Websockets work? Question Answer What is a WebSocket? A protocol that provides full-duplex communication over a si...
- [How to WebSockets [Complete Guide] | Treehouse Blog](https://blog.teamtreehouse.com/an-introduction-to-websockets) *(blog.teamtreehouse.com · 2022-05-17T21:23:28)*
  > How to WebSockets [Complete Guide] | Treehouse Blog How to WebSockets [Complete Guide] Matt West October 18, 2013 - 11 min read Learn Matt West writes on October 18, 2013 --> Last Updated on May 17, 2022 by Dev Support If you&#8217;re looking to take...
- [Part 1 - Send & receive - websockets 17.0.1 documentation](https://websockets.readthedocs.io/en/stable/intro/tutorial1.html) *(websockets.readthedocs.io)*
  > Part 1 - Send & receive - websockets 17.0.1 documentation Menu Expand Light mode Dark mode Auto light/dark, in light mode Auto light/dark, in dark mode Skip to content websockets 17.0.1 documentation Getting started Part 1 - Send & receive Part 2 - R...
- [WebSockets support in ASP.NET Core | Microsoft Learn](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/websockets?view=aspnetcore-9.0) *(learn.microsoft.com)*
  > WebSockets support in ASP.NET Core | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take advantage of the latest features, security updates, and technical suppo...
- [WebSockets: The Complete Guide for 2026 | DevToolbox Blog](https://devtoolbox.dedyn.io/blog/websocket-complete-guide) *(devtoolbox.dedyn.io · 2026-02-12T00:00:00)*
  > WebSockets support both text and binary data.
- [How to use JavaScript WebSockets: 2026 Tutorial](https://apidog.com/blog/javascript-websockets) *(apidog.com)*
  > Blog Tutorials How to use JavaScript WebSockets: 2026 Tutorial Learn how to use WebSockets in your web applications with this comprehensive guide. We cover everything from the basics of WebSockets to real-world examples and best practices. Start usin...
- [Mastering Real-Time Communication: A Comprehensive WebSocket Tutorial | by Sergey Dudik | Medium](https://medium.com/@sergey.dudik/mastering-real-time-communication-a-comprehensive-websocket-tutorial-0f6cf384d1e8) *(medium.com · 2024-02-08T12:24:18)*
  > Medium Mastering Real-Time Communication: A Comprehensive WebSocket Tutorial | by Sergey Dudik | Medium Sitemap Open in app Sign up Sign in Get app Write Search Sign up Sign in Sergey Dudik CEO and Founder TARGPatrol. https://targpatrol.com Sergey Du...
- [websockets](https://cs.lmu.edu/~ray/notes/websockets) *(cs.lmu.edu)*
  > All server side languages (JavaScript, Python, Ruby, Java, C#, Go, etc.) provide libraries to help you write websocket servers. To use web sockets on a Node-based server, npm install ws (Read the docs). Here’s a simple server, with a little bit of lo...
- [Setting up a simple local web socket server – Donny Wals](https://www.donnywals.com/setting-up-a-simple-local-web-socket-server) *(donnywals.com · 2024-04-23T12:16:01)*
  > const wss = new WebSocketServer({port: 8080}); wss.on(&#x27;connection&#x27;, function connection(wss) { wss.on(&#x27;message&#x27;, function message(data) { console.log(&#x27;received %s&#x27;, data); wss.close(); }); wss.send(&#x27;connection recei...
- [Native WebSocket Client in Node.js | Node.js Learn](https://nodejs.org/learn/getting-started/websocket) *(nodejs.org)*
  > // <strong>Creates a new WebSocket connection to the specified URL</strong>. const socket = new WebSocket(&#x27;ws://localhost:8080&#x27;); // Executes when the connection is successfully established. socket.addEventListener(&#x27;open&#x27;, event =...
- [r/PWA on Reddit: Using websockets in service worker](https://www.reddit.com/r/PWA/comments/maa0pw/using_websockets_in_service_worker) *(reddit.com · 2021-03-22T00:14:00)*
  > Do you guys have experience using a single websocket connection inside a service worker. The use case is to connect to a real base database for…
- [Real-time Communication in PWAs: WebSockets, Server- ...](https://gtcsys.com/comprehensive-faqs-guide-real-time-communication-in-pwas-websockets-server-sent-events-and-webrtc) *(gtcsys.com · 2024-03-28T10:47:32)*
  > <strong>These technologies empower developers to create dynamic, real-time experiences in PWAs, enhancing user engagement and interactivity</strong>. WebSocket is a communication protocol that provides full-duplex, bidirectional communication channel...
- [Implementing WebSockets in Progressive Web Apps - Tesla Digital - Connecting Business & Technology with Modern Software Develpoment](https://www.tesladigitalhq.com/implementing-websockets-in-progressive-web-apps) *(tesladigitalhq.com · 2024-05-17T14:46:15)*
  > <strong>We&#x27;ve now successfully implemented WebSockets in our Progressive Web App, releasing real-time communication and elevating user experience</strong>. By mastering WebSocket fundamentals, architecture, and security measures, we&#x27;ve brid...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/issues/126`)*
  > [blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets Chromestatus Wed, 05 Aug 2026 13:26:20...

## 📚 Platform Documentation & Specifications

- [Writing WebSocket servers - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers) *(developer.mozilla.org)*
- [GitHub - websockets/ws: Simple to use, blazing fast and thoroughly tested WebSocket client and server for Node.js · GitHub](https://github.com/websockets/ws) *(github.com)*
- [WebSocket: WebSocket() constructor - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/WebSocket) *(developer.mozilla.org)*
- [Writing WebSocket client applications - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications) *(developer.mozilla.org)*
- [How to create a websocket module · lwsjs/local-web-server Wiki · GitHub](https://github.com/lwsjs/local-web-server/wiki/How-to-create-a-websocket-module) *(github.com)*
- [GitHub - webmaxru/mqtt-websockets-angular-pwa](https://github.com/webmaxru/mqtt-websockets-angular-pwa) *(github.com)*
- [GitHub - marcelovue/first-pwa: PWA with websocket, get bitcoin price in usdt from binance](https://github.com/cruzeiro99/first-pwa) *(github.com)*
- [GitHub - HowProgrammingWorks/PWA: Progressive Web Application · GitHub](https://github.com/HowProgrammingWorks/PWA) *(github.com)*
- [GitHub - jhipster/jhipster-sample-app-websocket: This is a sample application created with JHipster, with the Websocket option](https://github.com/jhipster/jhipster-sample-app-websocket) *(github.com)*
- [Request: targetAddressSpace property](https://developer.mozilla.org/en-US/docs/Web/API/Request/targetAddressSpace) *(developer.mozilla.org)*
- [WebSocket API (WebSockets)](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) *(developer.mozilla.org)*
- [WebSockets](https://developer.mozilla.org/en-US/docs/Glossary/WebSockets) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 32 result(s) found across 8 planned queries — **23 verified relevant**
  - `"chromestatus.com/feature/4779920606756864" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WICG/local-network-access/issues/126" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"github.com/WICG/local-network-access/pull/125" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Support targetAddressSpace option for WebSockets" API` — *Core feature API query* (1 returned)
  - `"Support targetAddressSpace option for WebSockets" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"const ws = new websocket("ws://local-server.example", { targetaddressspace: "local"}" OR "const ws = new websocket("ws://local-server" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Support targetAddressSpace option for WebSockets" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Support targetAddressSpace option for WebSockets" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **3 verified relevant**
- **Web Platform Tests (wpt.fyi):** 128 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 1 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4779920606756864)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4779920606756864)
- [Specification](https://github.com/WICG/local-network-access/pull/125)
- [Chromium Tracking Bug](https://crbug.com/517413738)
