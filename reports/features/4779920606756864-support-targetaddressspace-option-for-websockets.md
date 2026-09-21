# Support targetAddressSpace option for WebSockets

> **Report Week:** 2026-W39 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Add support for passing a targetAddressSpace option in the WebSocket constructor. This allows developers to specify that a WebSocket connection to a public hostname should be treated as going to a "local" or "loopback" destination, matching the existing support on the Fetch API. The main use case is to offer an escape hatch to bypass mixed content restrictions for connecting to local servers that cannot yet support HTTPS (as Local Network Access permissions require a secure context).  Example: A public site that connects to a local server can use a hostname to avoid needing manual configuration of the exact private IP address in use:  \`const ws = new WebSocket("ws://local-server.example", { targetAddressSpace: "local"}\`  This will flag the WebSocket connection as going to a local address, bypassing mixed content blocking when run in a secure context. The user must grant the site the local network permission for the WebSocket connection to succeed, and the hostname must resolve to a local IP address (otherwise it will be blocked).  This builds on https://chromestatus.com/feature/5080055102439424 which adds an options bag to the WebSocket constructor.

### Motivation

To avoid mixed content blocking for local network WebSockets requests, web developers have relied on having their users manually configure their local network IP addresses, which is awkward at best. Adding support for the targetAddressSpace option in WebSockets aligns it with the Fetch API. This has also been requested by developers (e.g., https://github.com/WICG/local-network-access/issues/16#issuecomment-4459071272).

## Ecosystem Status

- **Momentum:** High (410 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Shipping enabled by default in Chromium 154 (Chrome and Edge), \`targetAddressSpace\` in the new WebSocket constructor options bag establishes parity with the Fetch API for Local Network Access (LNA). It provides a much-needed mechanism for secure public web applications to connect to unencrypted local servers (\`ws://\`) without running afoul of mixed content blocking, provided the user grants permission and DNS resolves to a private or loopback IP. While this is a Chromium-led milestone, broader multi-engine standardization across WHATWG and WICG is progressing through shared reviews.

### Recommendations
- Actionable Advice: Teams connecting to local or loopback servers should adopt the \`{ targetAddressSpace: 'local' \| 'loopback' }\` option immediately as progressive enhancement within Chromium browsers while preparing fallback error handling for browsers that do not yet support the options bag. Verify that local endpoints correctly resolve to private IP blocks and ensure your UX accounts for explicit Local Network Access permission requests.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHMgl_hhzy444jnvSne6GUTx7bjT0Jogrjxc7IvhWVbUDxHz0Y6Oig1iCb-s6fVp8WjIt62muiwAlnndjcg4Ju7ETAiL0lPJ030OOdP1egS2T9qjJpZmZZQ6sZ-1IJAFMKAaQTJfpw=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHdFVkOd1SEaICCae1V_xZgUIH7i2L2Ds3zCAq67hV04vPe3O9ghZC5lyrwouuG_NfhIiKv9sdzE84W4JbYlWK0S1nqGcEdmizavNN2DWJEdZqehILhroogq-3mmycSGItl) *(vertexaisearch.cloud.google.com)*
  > Local Network Access Local Network Access Draft Community Group Report , 7 August 2026 More details about this document This version: https://wicg.github.io/local-network-access/ Issue Tracking: GitHub Inline In Spec Editors: Chris Thompson ( Google ...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGrJ9yD_ycsIg5xfyddWcyBgjkGv0vgKzb897pq8vWU8RZvO_OWwy4NkIsyQjWtcoWZzgGICVJPcnvCQ5WsV-kVNAvyL7qK7UITHDdIR8KhTCsLlQcombyTJxmj) *(vertexaisearch.cloud.google.com)*
  > Chrome 154 Release Notes - Chrome Platform Status Chrome 154 Release Notes Preview Network / Connectivity Add options bag to WebSocket constructor # Link copied! Add support for passing an option bag (WebSocketInit dictionary) as the second argument ...
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE9SNBN77jX5_J8xoeSIgeadAe9nUhURcPSsMxWWWQYXj92GIKkIK0SuQDcaGju1iv27zht8bYN_AoE_QuOFRnXEvpSGkBAJIcJzkeURLtSGXk9p55kigHeqQBkx_phoz8b) *(vertexaisearch.cloud.google.com)*
  > Chromium Sign in
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF8Z0-9ZbhgunalNUJvUtrLKzB3qOayBD8XdOdX3TQf8PdfbjcjrBPRbRzyBLWb4AtCitojUt1UcOBxZTuGDK_UD_D6yxQJr5FgQCT0DV--uPx4cmd8rB4HLCaKtc1Jax18DSqcdl697YQ_sd2v9oUWV8RpmDFqo1oale21TkNfUsyh6AE2fA==) *(vertexaisearch.cloud.google.com)*
  > Intent to Prototype: Support targetAddressSpace option for WebSockets Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Support tar...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGhB-eLh0XlC17tJFUZyK_QdTBBU7y-1eljpHTWAeujWSyhj0p2F9GmGsj3kYzc19etPE19HbDJiSrKHqnuRQ_CjBamsAzxY0lmNHOBZ69AdUDiZmdqrGgIovrtTz0-o4tjJyy63FqfdhNhhA==) *(vertexaisearch.cloud.google.com)*
  > Novo aviso de permissão para o acesso à rede local | Blog | Chrome for Developers Ir para o conteúdo principal / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עבר...
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFJFRPpDQHXt4P0IdewKMZLqzWTtoJcTxuYIdXwDh6cSX5meWgoq35EvNZh2Du3rFOTqN8XPP9e7rV93-4t8C_hGltBAoe0HJa9kQi2P5VMcoTF0BhZr_s3FRuLPfi6DKcn3NQB2lD_Ml4vIY-gqr1LzMio1v9q2kDfzJ8ZmLk=) *(vertexaisearch.cloud.google.com)*
  > Adapting your website for new Local Network Access restrictions in Microsoft Edge | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take advantage of the latest ...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGWWsTxwnY_ejqOJ7gFNJO8mc9sAR_w-qFopwXOguvcr24oLg1j6hz-t8EOR6-9a_dil5fo7DQG15ACCrZKF1rVlUHarLjSvFpmmzdaF3GtjfkgLjxPwUZ-cogm6w1092phZ20jVEnfiyMIRA==) *(vertexaisearch.cloud.google.com)*
  > Use case for WebSocket communications · Issue #16 · WICG/local-network-access · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refres...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHZ1Vo4cHTTSq23UVaF2nvfN1v5AeRPiAgbNng6vZqcmvnOBYXFY4TkK-fJqHkp4DewwIr657MjQDgMvFoGjfx9SeqamMTgpQueoQI9fr1U3RIujRJtBYKW1miZ9tQu9XwnKaW7DfHftTQCcoedNm5xI3vS6z4-twHzxwc=) *(vertexaisearch.cloud.google.com)*
  > ### Feature Overview  The **`targetAddressSpace` option for WebSockets** allows developers to declare an intended network destination space (such as `"local"` or `"loopback"`) when instantiating a WebSocket connection:  ```javascript const ws = new W
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGnHjibAHzxRzqhRBZsbZENc6w6EKiKXXslKiHb-O_bdZMBiGRUT7FnARCrOarH7M5NzgRRhrwW9cAJbitelpLUqJekcEcZLEq1n9h4wKoau8lz5_RJDN2_szAgVSBvjqQOsNj-yRuTZH-bQCJi_4CJjF7B1v1XxyG_zMg-AzvqiQ==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Overview  The **`targetAddressSpace` option for WebSockets** allows developers to declare an intended network destination space (such as `"local"` or `"loopback"`) when instantiating a WebSocket connection:  ```javascript const ws = new W
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHfvDadaJ89DQM7_rCYitRz9PoTfoCBJR--mlV0Z7FMZn_SftU4sh0TlcqF7rCzWWDoSpG0QYOYNFXfsDVtJs7StPXlQeXbiVIjOLqY4ZEgcgeWRNiv_cKNEOF5x-5p2RgoWdqcR_4=) *(vertexaisearch.cloud.google.com)*
  > ### Feature Overview  The **`targetAddressSpace` option for WebSockets** allows developers to declare an intended network destination space (such as `"local"` or `"loopback"`) when instantiating a WebSocket connection:  ```javascript const ws = new W
- [\[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)*
  > Explainer https://github.com/WICG/local-network-access/issues/126 Specification https://github.com/WICG/local-network-access/pull/125 Summary <strong>Add support for passing a targetAddressSpace option in the WebSocket constructor</strong>. This allo...
- [How to WebSockets \[Complete Guide\] \| Treehouse Blog](https://blog.teamtreehouse.com/an-introduction-to-websockets) *(blog.teamtreehouse.com · 2022-05-17T21:23:28)*
  > For up-to-date information on browser support check out: Can I use Web Sockets. In this post you’ve learned about the WebSocket protocol and how to use the new API to build real-time web applications.
- [How Do WebSockets Work? \| Postman Blog](https://blog.postman.com/how-do-websockets-work) *(blog.postman.com · 2026-01-05T16:26:18)*
  > WebSockets introduce a different communication model than standard HTTP. After an initial HTTP handshake, the connection is upgraded and maintained, allowing for ongoing, bidirectional message exchange over a single TCP connection. This approach redu...
- [WebSockets support in ASP.NET Core \| Microsoft Learn](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/websockets?view=aspnetcore-9.0) *(learn.microsoft.com)*
  > This article explains how to get started with WebSockets in ASP.NET Core. WebSocket (RFC 6455) is a protocol that enables two-way persistent communication channels over TCP connections.
- [Part 1 - Send & receive - websockets 17.0.1 documentation](https://websockets.readthedocs.io/en/stable/intro/tutorial1.html) *(websockets.readthedocs.io)*
  > The WebSocket protocol provides two-way communication between a browser and a server over a persistent connection.
- [Guide to Postman WebSockets 💬 \| Documentation](https://www.postman.com/postman/websockets/documentation/atoq67w/guide-to-postman-websockets) *(postman.com)*
  > Product · Enterprise · Resources and Support · API Network · Search · (Ctrl+K) · Contact Sales · Sign In · Sign Up for Free · This wasn&#x27;t supposed to happen
- [The complete guide to WebSockets with React](https://ably.com/blog/websockets-react-tutorial) *(ably.com · 2023-10-23T00:00:00)*
  > When I was learning about WebSockets in React, this caused me a bit of anxiety! I went looking for a definitive best practice but, as it happens, there isn’t a universal “right” answer. It depends on what you’re building and the specific shape of you...
- [WebSockets: The Complete Guide for 2026 \| DevToolbox Blog](https://devtoolbox.dedyn.io/blog/websocket-complete-guide) *(devtoolbox.dedyn.io · 2026-02-12T00:00:00)*
  > WebSockets support both text and binary data.
- [Setting up a simple local web socket server – Donny Wals](https://www.donnywals.com/setting-up-a-simple-local-web-socket-server) *(donnywals.com · 2024-04-23T12:16:01)*
  > const wss = new WebSocketServer({port: 8080}); wss.on(&#x27;connection&#x27;, function connection(wss) { wss.on(&#x27;message&#x27;, function message(data) { console.log(&#x27;received %s&#x27;, data); wss.close(); }); wss.send(&#x27;connection recei...
- [websockets](https://cs.lmu.edu/~ray/notes/websockets) *(cs.lmu.edu)*
  > All server side languages (JavaScript, Python, Ruby, Java, C#, Go, etc.) provide libraries to help you write websocket servers. To use web sockets on a Node-based server, npm install ws (Read the docs). Here’s a simple server, with a little bit of lo...
- [javascript - WebSocket Server - Stack Overflow](https://stackoverflow.com/questions/74005325/websocket-server) *(stackoverflow.com)*
  > WebSocket connection to &#x27;wss://mysite.com/8080&#x27; failed: Error during WebSocket handshake: Unexpected response code: 404 · Here is the code of the local server, which works: const Socket = require(&quot;websocket&quot;).server const http = r...
- [javascript - Simple example on how to use Websockets between Client and Server - Stack Overflow](https://stackoverflow.com/questions/53294938/simple-example-on-how-to-use-websockets-between-client-and-server) *(stackoverflow.com)*
  > Just a note, socket.io is a backend/frontend library that uses websocket but also has a number of fallbacks if the client browser does not support websocket. The example below works with ws backend. ... Copyconst WS = require(&#x27;ws&#x27;) const PO...
- [r/PWA on Reddit: Using websockets in service worker](https://www.reddit.com/r/PWA/comments/maa0pw/using_websockets_in_service_worker) *(reddit.com · 2021-03-22T00:14:00)*
  > Do you guys have experience using a single websocket connection inside a service worker. The use case is to connect to a real base database for…
- [Real-time Communication in PWAs: WebSockets, Server- ...](https://gtcsys.com/comprehensive-faqs-guide-real-time-communication-in-pwas-websockets-server-sent-events-and-webrtc) *(gtcsys.com · 2024-03-28T10:47:32)*
  > <strong>These technologies empower developers to create dynamic, real-time experiences in PWAs, enhancing user engagement and interactivity</strong>. WebSocket is a communication protocol that provides full-duplex, bidirectional communication channel...
- [Implementing Progressive Web Apps (PWA) with MERN \| by Harshit Sharma \| Medium](https://medium.com/@harshitynwa/implementing-progressive-web-apps-pwa-with-mern-ea6442bf2d70) *(medium.com · 2024-05-22T20:53:19)*
  > Imagine you’re on a mountaintop, enjoying the view and checking your to-do list on your app. Despite having no signal, the app still works! This seamless experience is made possible by Progressive Web Apps (PWA) built with the MERN stack and WebSocke...
- [Re-establishing web-socket for PWA - Need help - Bubble Forum](https://forum.bubble.io/t/re-establishing-web-socket-for-pwa/249335) *(forum.bubble.io · 2023-02-28T18:00:11)*
  > I have a PWA shortcut for my app. When people re-access the website from the shortcut, if the PWA was already open and running in the background, the websocket will have been disconnected, so data will not update on thei…
- [WebSocket 連本機服務怎麼過 mixed content？用 targetAddressSpace - ZeroOne](https://laplusda.com/posts/websocket-target-address-space-local-network) *(laplusda.com · 2026-09-17T00:00:00)*
  > 從 HTTPS 網站連到開發機上的 WebSocket 服務時，常見的錯誤不是 WebSocket server 沒啟動，而是瀏覽器把 ws:// 視為 mixed content。Chrome 154 beta 的 release notes 提供了一個新的 constructor options：用 targetAddressSpace 明確表示目標是 local 或 loopback address space。
- [Chrome 154 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com · 2026-09-02T00:00:00)*
  > <strong>Adds support for passing a targetAddressSpace option in the WebSocket constructor</strong>. This lets you specify that a WebSocket connection to a public hostname should be treated as going to a &quot;local&quot; or &quot;loopback&quot; desti...
- [Local Network Access](https://wicg.github.io/local-network-access) *(wicg.github.io · 2026-08-07T00:00:00)*
  > If the resolved remote IP address does not belong to the IP address space specified as the targetAddressSpace option value, then the request will fail. If it does belong, then the permission can be checked to allow or fail the request. This document ...
- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)*
  > Motivation There is a demand for extensibility of options on the WebSocket constructor, to mirror the &quot;option bag&quot; approach that the Fetch API has. https://github.com/whatwg/websockets/issues/42 is requested by a number of implementors and ...
- [\[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor](http://www.mail-archive.com/blink-dev@chromium.org/msg17124.html) *(mail-archive.com)*
  > Blink component Blink&gt;Network&gt;WebSockets Web Feature ID websockets Motivation There is a demand for extensibility of options on the WebSocket constructor, to mirror the &quot;option bag&quot; approach that the Fetch API has. https://github.com/...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/pull/125`)*
  > Explainer https://github.com/WICG/local-network-access/issues/126 Specification https://github.com/WICG/local-network-access/pull/125 Summary <strong>Add support for passing a targetAddressSpace option in the WebSocket constructor</strong>....

## 📚 Platform Documentation & Specifications

- [Writing WebSocket servers - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers) *(developer.mozilla.org)*
- [GitHub - websockets/ws: Simple to use, blazing fast and thoroughly tested WebSocket client and server for Node.js · GitHub](https://github.com/websockets/ws) *(github.com)*
- [WebSocket: WebSocket() constructor - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/WebSocket) *(developer.mozilla.org)*
- [Writing WebSocket client applications - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications) *(developer.mozilla.org)*
- [How to create a websocket module · lwsjs/local-web-server Wiki · GitHub](https://github.com/lwsjs/local-web-server/wiki/How-to-create-a-websocket-module) *(github.com)*
- [GitHub - webmaxru/mqtt-websockets-angular-pwa](https://github.com/webmaxru/mqtt-websockets-angular-pwa) *(github.com)*
- [GitHub - marcelovue/first-pwa: PWA with websocket, get bitcoin price in usdt from binance](https://github.com/cruzeiro99/first-pwa) *(github.com)*
- [GitHub - HowProgrammingWorks/PWA: Progressive Web Application · GitHub](https://github.com/HowProgrammingWorks/PWA) *(github.com)*
- [local-network-access/explainer.md at main · WICG/local-network-access](https://github.com/WICG/local-network-access/blob/main/explainer.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 46 result(s) found across 12 planned queries — **30 verified relevant**
  - `"chromestatus.com/feature/4779920606756864" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WICG/local-network-access/issues/126" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"github.com/WICG/local-network-access/pull/125" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Support targetAddressSpace option for WebSockets" API` — *Core feature API query* (1 returned)
  - `"Support targetAddressSpace option for WebSockets" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"const ws = new websocket("ws://local-server.example", { targetaddressspace: "local"}" OR "const ws = new websocket("ws://local-server" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Support targetAddressSpace option for WebSockets" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Support targetAddressSpace option for WebSockets" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"targetAddressSpace" "new WebSocket" ("local" OR "loopback")` — *Finds exact code examples and WebIDL usage where the targetAddressSpace option bag is passed to the WebSocket constructor.* (8 returned)
  - `"Local Network Access" "targetAddressSpace" WebSocket "mixed content" guide OR tutorial` — *Surfaces practical developer tutorials explaining how to use targetAddressSpace with WebSockets to connect to local servers without triggering mixed content blocking.* (0 returned)
  - `"targetAddressSpace" WebSocket (Chromium OR ChromeStatus OR "intent to prototype" OR "intent to ship")` — *Tracks browser vendor implementation status, Chrome release announcements, and ecosystem rollout timelines.* (8 returned)
  - `site:github.com/WICG/local-network-access "WebSocket" "targetAddressSpace"` — *Discovers spec discussions, developer feedback, and security considerations directly in the WICG Local Network Access issue tracker.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 5 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 129 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4779920606756864)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4779920606756864)
- [Specification](https://github.com/WICG/local-network-access/pull/125)
- [Chromium Tracking Bug](https://crbug.com/517413738)
