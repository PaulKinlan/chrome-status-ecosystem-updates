# Support targetAddressSpace option for WebSockets

> **Report Week:** 2026-W38 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Add support for passing a targetAddressSpace option in the WebSocket constructor. This allows developers to specify that a WebSocket connection to a public hostname should be treated as going to a "local" or "loopback" destination, matching the existing support on the Fetch API. The main use case is to offer an escape hatch to bypass mixed content restrictions for connecting to local servers that cannot yet support HTTPS (as Local Network Access permissions require a secure context).  Example: A public site that connects to a local server can use a hostname to avoid needing manual configuration of the exact private IP address in use:  \`const ws = new WebSocket("ws://local-server.example", { targetAddressSpace: "local"}\`  This will flag the WebSocket connection as going to a local address, bypassing mixed content blocking when run in a secure context. The user must grant the site the local network permission for the WebSocket connection to succeed, and the hostname must resolve to a local IP address (otherwise it will be blocked).  This builds on https://chromestatus.com/feature/5080055102439424 which adds an options bag to the WebSocket constructor.

### Motivation

To avoid mixed content blocking for local network WebSockets requests, web developers have relied on having their users manually configure their local network IP addresses, which is awkward at best. Adding support for the targetAddressSpace option in WebSockets aligns it with the Fetch API. This has also been requested by developers (e.g., https://github.com/WICG/local-network-access/issues/16#issuecomment-4459071272).

## Ecosystem Status

- **Momentum:** High (410 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Support targetAddressSpace option for WebSockets is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "I suggest we resolve this as "position: support" one week from now. This is a straightforward addition that allows us to enhance WebSockets more easil..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Web Security Academy on X: "Did you know you can manipulate WebSocket handshakes to bypass reactive defences? Check out Burp Suite's WebSocket capabilities on the Web Security Academy: https://t.co/VBK1kAkVZp" / X" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [Supporting options bag in WebSocket constructor](https://github.com/WebKit/standards-positions/issues/708) [closed]
- **Mozilla:** [Supporting options bag in WebSocket constructor](https://github.com/mozilla/standards-positions/issues/1444) [open]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Web Security Academy on X: "Did you know you can manipulate WebSocket handshakes to bypass reactive defences? Check out Burp Suite's WebSocket capabilities on the Web Security Academy: https://t.co/VBK1kAkVZp" / X](https://twitter.com/WebSecAcademy/status/1238129371921211393) — *by @WebSecAcademy, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [A curated list of Websocket libraries and resources.](https://twitter.com/Jabra/status/1124491781444374533) — *by @Jabra, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [X - The Everything App / X](https://twitter.com/hashtag/websockets?lang=en) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Stefan Tilkov on Twitter: "My opinion on the silly "REST vs. Websockets" debate http://t.co/cL10dfys"](https://twitter.com/stilkov/status/174565149770911744) — *by @stilkov, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [X](https://twitter.com/hashtag/uwebsockets) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [TechWars on Twitter: "We compared #dwr vs #websocket - see results: http://t.co/LgQ6P1sYlH"](https://twitter.com/techwars_io/status/546915164139053056) — *by @techwars_io, 0 likes/RTs, 0 replies*

## Packages & Polyfills

- [ws](https://www.npmjs.com/package/ws) `v8.21.3` — Simple to use, blazing fast and thoroughly tested websocket client and server for Node.js
- [rpc-websockets](https://www.npmjs.com/package/rpc-websockets) `v10.0.1` — JSON-RPC 2.0 implementation over WebSockets for Node.js
- [@httptoolkit/websocket-stream](https://www.npmjs.com/package/@httptoolkit/websocket-stream) `v6.0.1` — Use websockets with the node streams API. Works in browser and node, with all current WS versions

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets Chromestatus Wed, 05 Aug 2026 13:26:20 -0700 Con...
- [How to WebSockets \[Complete Guide\] \| Treehouse Blog](https://blog.teamtreehouse.com/an-introduction-to-websockets) *(blog.teamtreehouse.com · 2022-05-17T21:23:28)*
  > How to WebSockets [Complete Guide] | Treehouse Blog How to WebSockets [Complete Guide] Matt West October 18, 2013 - 11 min read Learn Matt West writes on October 18, 2013 --> Last Updated on May 17, 2022 by Dev Support If you&#8217;re looking to take...
- [WebSockets support in ASP.NET Core \| Microsoft Learn](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/websockets?view=aspnetcore-9.0) *(learn.microsoft.com)*
  > WebSockets support in ASP.NET Core | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take advantage of the latest features, security updates, and technical suppo...
- [How Do WebSockets Work? \| Postman Blog](https://blog.postman.com/how-do-websockets-work) *(blog.postman.com · 2026-01-05T16:26:18)*
  > How Do WebSockets Work? | Postman Blog Skip to content How Do WebSockets Work? The Postman Team January 5, 2026 Quick reference: How do Websockets work? Question Answer What is a WebSocket? A protocol that provides full-duplex communication over a si...
- [Part 1 - Send & receive - websockets 17.0.1 documentation](https://websockets.readthedocs.io/en/stable/intro/tutorial1.html) *(websockets.readthedocs.io)*
  > Part 1 - Send & receive - websockets 17.0.1 documentation Menu Expand Light mode Dark mode Auto light/dark, in light mode Auto light/dark, in dark mode Skip to content websockets 17.0.1 documentation Getting started Part 1 - Send & receive Part 2 - R...
- [WebSockets: The Complete Guide for 2026 \| DevToolbox Blog](https://devtoolbox.dedyn.io/blog/websocket-complete-guide) *(devtoolbox.dedyn.io · 2026-02-12T00:00:00)*
  > WebSockets support both text and binary data.
- [Mastering Real-Time Communication: A Comprehensive WebSocket Tutorial \| by Sergey Dudik \| Medium](https://medium.com/@sergey.dudik/mastering-real-time-communication-a-comprehensive-websocket-tutorial-0f6cf384d1e8) *(medium.com · 2024-02-08T12:24:18)*
  > Medium Mastering Real-Time Communication: A Comprehensive WebSocket Tutorial | by Sergey Dudik | Medium Sitemap Open in app Sign up Sign in Get app Write Search Sign up Sign in Sergey Dudik CEO and Founder TARGPatrol. https://targpatrol.com Websocket...
- [React WebSocket tutorial: Real-time messaging with WebSockets and Socket.IO - LogRocket Blog](https://blog.logrocket.com/websocket-tutorial-socket-io) *(blog.logrocket.com · 2025-05-12T22:48:38)*
  > Learn how to build a real-time collaborative document editing app with a Node.js backend and React frontend using the WebSocket protocol.
- [websockets](https://cs.lmu.edu/~ray/notes/websockets) *(cs.lmu.edu)*
  > All server side languages (JavaScript, Python, Ruby, Java, C#, Go, etc.) provide libraries to help you write websocket servers. To use web sockets on a Node-based server, npm install ws (Read the docs). Here’s a simple server, with a little bit of lo...
- [Setting up a simple local web socket server – Donny Wals](https://www.donnywals.com/setting-up-a-simple-local-web-socket-server) *(donnywals.com · 2024-04-23T12:16:01)*
  > const wss = new WebSocketServer({port: 8080}); wss.on(&#x27;connection&#x27;, function connection(wss) { wss.on(&#x27;message&#x27;, function message(data) { console.log(&#x27;received %s&#x27;, data); wss.close(); }); wss.send(&#x27;connection recei...
- [javascript - WebSocket Server - Stack Overflow](https://stackoverflow.com/questions/74005325/websocket-server) *(stackoverflow.com)*
  > WebSocket connection to &#x27;wss://mysite.com/8080&#x27; failed: Error during WebSocket handshake: Unexpected response code: 404 · Here is the code of the local server, which works: const Socket = require(&quot;websocket&quot;).server const http = r...
- [r/PWA on Reddit: Using websockets in service worker](https://www.reddit.com/r/PWA/comments/maa0pw/using_websockets_in_service_worker) *(reddit.com · 2021-03-22T00:14:00)*
  > Do you guys have experience using a single websocket connection inside a service worker. The use case is to connect to a real base database for…
- [Real-time Communication in PWAs: WebSockets, Server- ...](https://gtcsys.com/comprehensive-faqs-guide-real-time-communication-in-pwas-websockets-server-sent-events-and-webrtc) *(gtcsys.com · 2024-03-28T10:47:32)*
  > <strong>These technologies empower developers to create dynamic, real-time experiences in PWAs, enhancing user engagement and interactivity</strong>. WebSocket is a communication protocol that provides full-duplex, bidirectional communication channel...
- [Re-establishing web-socket for PWA - Need help - Bubble Forum](https://forum.bubble.io/t/re-establishing-web-socket-for-pwa/249335) *(forum.bubble.io · 2023-02-28T18:00:11)*
  > I have a PWA shortcut for my app. When people re-access the website from the shortcut, if the PWA was already open and running in the background, the websocket will have been disconnected, so data will not update on thei…
- [progressive web apps - Can I use a websocket connection within a serviceworker to receive notifications while my PWA is closed? - Stack Overflow](https://stackoverflow.com/questions/65575399/can-i-use-a-websocket-connection-within-a-serviceworker-to-receive-notifications) *(stackoverflow.com)*
  > The service worker is a somehow a thread of a web page. A web page (usually) lives in a tab of a browser (a PWA is also managed by a browser engine). Nowadays browsers are gearing towards performance and a lower memory footprint (think mobile). So th...
- [Chrome 154 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > <strong>Adds support for passing a targetAddressSpace option in the WebSocket constructor</strong>. This lets you specify that a WebSocket connection to a public hostname should be treated as going to a &quot;local&quot; or &quot;loopback&quot; desti...
- [Local Network Access](https://wicg.github.io/local-network-access) *(wicg.github.io · 2026-08-07T00:00:00)*
  > If the resolved remote IP address does not belong to the IP address space specified as the targetAddressSpace option value, then the request will fail. If it does belong, then the permission can be checked to allow or fail the request. This document ...
- [Ready for Developer Testing: Local network access restrictions for WebSockets](https://groups.google.com/a/chromium.org/g/blink-dev/c/4gx2y5jPGbU) *(groups.google.com · 2025-09-18T00:00:00)*
  > Explicit local IP addresses, and `.local` domains are exempted from mixed content checks, but we do not have an equivalent to the `targetAddressSpace` fetch() option for WebSockets We hope that our Dev Trial will help identify compatibility issues. T...
- [New permission prompt for Local Network Access \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/local-network-access) *(developer.chrome.com)*
  > The fetch() call is annotated with the option targetAddressSpace: &quot;local&quot;.
- [Intent to Ship: Local network access restrictions for WebSockets](https://groups.google.com/a/chromium.org/g/blink-dev/c/O6GMKt44Ups) *(groups.google.com)*
  > This would add the same controls ... Compatibility Interoperability risks: <strong>LNA requires a Secure Context to make local network requests, but exempts some of these local network requests from mixed content checks (if the user grants permission...
- [Intent to Ship: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/cwu_RUmBpzY) *(groups.google.com)*
  > Explicit local IP addresses, .local domains, and fetch() requests with the new `targetAddressSpace` fetch() option are exempted from mixed content checks, but other connection types may be difficult for developers to work around mixed content blockin...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/pull/125`)*
  > [blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets Chromestatus Wed, 05 Aug 2026 13:26:20...

## 📚 Platform Documentation & Specifications

- [Writing WebSocket servers - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers) *(developer.mozilla.org)*
- [GitHub - websockets/ws: Simple to use, blazing fast and thoroughly tested WebSocket client and server for Node.js · GitHub](https://github.com/websockets/ws) *(github.com)*
- [WebSocket: WebSocket() constructor - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/WebSocket) *(developer.mozilla.org)*
- [Writing WebSocket client applications - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications) *(developer.mozilla.org)*
- [WebSocket - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) *(developer.mozilla.org)*
- [How to create a websocket module · lwsjs/local-web-server Wiki · GitHub](https://github.com/lwsjs/local-web-server/wiki/How-to-create-a-websocket-module) *(github.com)*
- [GitHub - webmaxru/mqtt-websockets-angular-pwa](https://github.com/webmaxru/mqtt-websockets-angular-pwa) *(github.com)*
- [GitHub - HowProgrammingWorks/PWA: Progressive Web Application · GitHub](https://github.com/HowProgrammingWorks/PWA) *(github.com)*
- [GitHub - marcelovue/first-pwa: PWA with websocket, get bitcoin price in usdt from binance](https://github.com/cruzeiro99/first-pwa) *(github.com)*
- [Request: targetAddressSpace property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Request/targetAddressSpace) *(developer.mozilla.org)*
- [local-network-access/explainer.md at main · WICG/local-network-access](https://github.com/WICG/local-network-access/blob/main/explainer.md) *(github.com)*
- [fetch API: targetAddressSpace public should internally set a flag instead of "do nothing" · Issue #60 · WICG/local-network-access](https://github.com/WICG/local-network-access/issues/60) *(github.com)*
- [WebSocket API (WebSockets)](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) *(developer.mozilla.org)*
- [WebSockets](https://developer.mozilla.org/en-US/docs/Glossary/WebSockets) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 42 result(s) found across 12 planned queries — **33 verified relevant**
  - `"chromestatus.com/feature/4779920606756864" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WICG/local-network-access/issues/126" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"github.com/WICG/local-network-access/pull/125" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Support targetAddressSpace option for WebSockets" API` — *Core feature API query* (1 returned)
  - `"Support targetAddressSpace option for WebSockets" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"const ws = new websocket("ws://local-server.example", { targetaddressspace: "local"}" OR "const ws = new websocket("ws://local-server" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Support targetAddressSpace option for WebSockets" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Support targetAddressSpace option for WebSockets" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"targetAddressSpace" "new WebSocket" ("local" OR "loopback")` — *Finds JavaScript code snippets and implementation examples passing the targetAddressSpace option directly into the WebSocket constructor.* (8 returned)
  - `"targetAddressSpace" "WebSocket" "Local Network Access" ("mixed content" OR "secure context")` — *Surfaces developer guides, explainers, and technical blog posts detailing how to connect secure HTTPS sites to local WebSockets without mixed-content errors.* (7 returned)
  - `"WebSocket" "targetAddressSpace" (site:chromestatus.com OR "Intent to Ship" OR "Intent to Prototype")` — *Tracks browser vendor intent declarations, release milestones, and standardization status across Chromium and other browser engines.* (0 returned)
  - `site:github.com/WICG/local-network-access ("WebSocket" OR "targetAddressSpace")` — *Discovers developer feedback, design questions, and standards group debates concerning WebSocket support within the WICG Local Network Access specification.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Dev.to Community Blogs:** 6 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
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
