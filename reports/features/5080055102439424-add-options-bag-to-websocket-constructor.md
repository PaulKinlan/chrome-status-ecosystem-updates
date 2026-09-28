# Add options bag to WebSocket constructor

> **Report Week:** 2026-W40 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Add support for passing an option bag (WebSocketInit dictionary) as the second argument to the WebSocket constructor. The option bag will initially support a "protocols" option, allowing developers to specify subprotocols (mirroring the existing protocols argument), and also serves as an extension point for future options.  Before, this would be written \`const socket = new WebSocket("wss://example.com:8080", "soap")\`. After, this could also be written \`const socket = new WebSocket("wss://example.com:8080", { protocols: "soap" })\`.  See https://github.com/whatwg/websockets/issues/42 and spec PR https://github.com/whatwg/websockets/pull/76 for this change.

### Motivation

There is a demand for extensibility of options on the WebSocket constructor, to mirror the "option bag" approach that the Fetch API has. https://github.com/whatwg/websockets/issues/42 is requested by a number of implementors and users, and Chromium wants this as a means to add a `targetAddressSpace` option matching the one added to Fetch for Local Network Access (https://wicg.github.io/local-network-access/#fetch-api).

## Ecosystem Status

- **Momentum:** High (350 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** Chrome 154 introduces native support for passing an options bag (the \`WebSocketInit\` dictionary) as the second argument to the \`WebSocket\` constructor, modernizing the API to align with the dictionary pattern established by \`fetch()\`. Initially supporting the \`protocols\` property, the options bag provides an extensible foundation for emerging platform capabilities, such as the \`targetAddressSpace\` option required for Local Network Access. Cross-engine consensus is strong, with WebKit officially endorsing the proposal and WHATWG finalizing the specification.

### Recommendations
- Actionable Advice: Maintain the legacy \`new WebSocket(url, protocols)\` positional syntax in cross-browser client code until Safari and Firefox implement the new constructor overload. If targeting modern Chromium runtimes or utilizing progressive enhancement for Local Network Access (\`targetAddressSpace\`), explicitly feature-test or wrap constructor invocations to prevent older engines from interpreting \`{ protocols }\` as an invalid subprotocol string.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "I suggest we resolve this as "position: support" one week from now. This is a straightforward addition that allows us to enhance WebSockets more easil..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Supporting options bag in WebSocket constructor](https://github.com/WebKit/standards-positions/issues/708) [closed]
- **Mozilla:** [Supporting options bag in WebSocket constructor](https://github.com/mozilla/standards-positions/issues/1444) [open]

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGW_7QjbWsGc0GVA3x0tMsWl_x_sl7R2DygdSXgNNPz6uZSvn3mgNKUa7HwSa4TuKQOkdzolWX7Ve00vtve687MZy9ojmfNyN0OF6jS1gM9LxC95sEHPASDkLGWBccAN_ai7u-gIm0o) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG1NR6TKSUDiyl9Xvhs0166fvqfTyv6tJIV5x4hI9ZAgVH6Y0Jpg1XYJcJYvO8XBVdOTuZpKpX0CdI0WiFLV78qhYpGy5AVXZSg_1fzhCp7JqUvaTbN5wVnH85G3GwdqGSLdsiu) *(vertexaisearch.cloud.google.com)*
  > Chrome 154 | Release notes | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF7W27VVpAjoMf8VTwuFCJWKX69y9HhdJhGpp87zSK9BOiI1JczY6cjLl_uIXJ9XPuG7Dsajp_kAUmleZDDUqQZXaj8y_U3UdrNVPEh1kA4ZFpuY3VNK1Dfw4MEhqJ2j_0c9wsrLPcF) *(vertexaisearch.cloud.google.com)*
  > Chrome 154 beta | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – ...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGTlHvQGnYdQjma7KJM6PpM7oOHUv5uSwo-zy_RWPeyp3Gk6ukDd-rJ6DzeAVwOpWu4OSYeGnxC7DRlJFCgs0zcfVhW-uDtodoprpA7-qcW) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [polypane.app](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFlj8P5Yg_lQ1erLxTDpcfWcavNyvr7B0X8XNh9vc1Ijb1fY3vlN-qIOL3OdGrvvBhg5iPRjuv0z8iQcNWk9KAsjJZ2nMbVtXhPdFTlJoecB2YvuHzew07TRzfCdR8gCw-JnutIHsRymewEFlNr2Q==) *(vertexaisearch.cloud.google.com)*
  > Experimental Chromium Web Platform Features | Polypane This website works best with JavaScript enabled. Skip to content Skip to footer Polypane Brand kit Copy icon as SVG Copy logo as SVG Brand guidelines Homepage Search Changelog Polypane 30.1 Lates...
- [releasebot.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE4MTFwWq292hyWyj19_2-PAKWGCiAFnYF516kIEqvpFQUtvXWZm6GbKrktTHJtPaQv3qNuPnbWq4F419HYAD34UNGLkdHNZBB0EQsjhMqnE3HRby-pyE9uqyR1c7PwZ795NDdml6kC) *(vertexaisearch.cloud.google.com)*
  > Browsers Release Notes - Releasebot Docs Our data Browse feeds Latest Sign in Create account Browsers Release Notes Release notes for major desktop and mobile web browsers Get this feed: RSS Email CLI MCP API Slack n8n Products (12) Arc for macOS Arc...
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG751YwqSZAai5KJ-JQ925nN-QrtTXLjREpGglzxgv71wODqKwTkWNVDheZzd82DsXEAuTof14lHhhOpled7tvq7bSaqAnnWX20MDkyTFic9ouM5EiMBdUCtvpwLCEqf0ShwtnNDIX81CSrhmBkhC-BFyZMloSOlUvdKr1FjEfXrMYeKpVc) *(vertexaisearch.cloud.google.com)*
  > Microsoft Edge 154 web platform release notes (Sep. 24, 2026) - Microsoft Edge Developer documentation | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take adv...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH0kAIsiZaykCB4ZvgwQ3BucJ-trUH7bADLreuuvjalglAcmQtXEM8qrv-6mW7ud6c7DVJT33wUkvmNT0l6n97T3fMARMrjwqhd-t8rOr9YTjIw2Js4y-iL_mlfNoRbXCl6gMJx_n8CsTBO1332cS9gPMexcw8mAF54ziN7SQ==) *(vertexaisearch.cloud.google.com)*
  > WebSocketStream: streams integreren met de WebSocket API | Capabilities | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русск...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH5RBIuAyRQM7E_rrJCSazZTnsNdV3XxaUFwwHYgDQAp6lwd2M-E4K3ZiMyf0JasiyDkoJiGVOKM4ebKSlbuD6I-nWBu-lHbGIq1hQHZL3cbbdrakPmWNAZGDKIZbwoj6czq4udqAw58aqAZIGtQA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  Historically, the native web `WebSocket` constructor accepted only a destination URL and an optional subprotocol string or array of subprotocol strings: ```javascript // Legacy syntax const socket = new WebSocket("wss://ex
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFqFLp0vZN0CcwECTSUgYiyR-bOysZtb7AJNPF4xnfNDe_xeIskVaTiQE2VcUQMyZ0j9AQdzU-kAVJpnr3ZMui784aWuAyb4H4AtcS3Qq_bCgU37jFK1whXuxTSN364GqXdBGoRD8lmgyRrsHpU) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  Historically, the native web `WebSocket` constructor accepted only a destination URL and an optional subprotocol string or array of subprotocol strings: ```javascript // Legacy syntax const socket = new WebSocket("wss://ex
- [nodejs.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE1MZY4jEPC495T_Op7jya1xWQplgV-THzNqA5QyosKq1HCsyHnKN5S-9dqBynRRAtZhpiUSrwy6v9v0SMZlRMOD7GxyhVeyraquRttLCq_Tlq_nooxrW3xacwtwmk=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  Historically, the native web `WebSocket` constructor accepted only a destination URL and an optional subprotocol string or array of subprotocol strings: ```javascript // Legacy syntax const socket = new WebSocket("wss://ex
- [stackoverflow.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEA1z_f-VwCVrzm_RdJGFDD5o3597gDSog-djtxol-qFvgZsM1coXLGUqxb3eiZUmcfFQCLbuLH9E39sInKHbNQ9FxsV3KvC-okqESdfdWZJRbRqEaPeNprb38LK9OnPdq-SckVE3tMmwho4wt085o4_HGE8Sd-vG36R-rFjv4tMCL2NYMFxro=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  Historically, the native web `WebSocket` constructor accepted only a destination URL and an optional subprotocol string or array of subprotocol strings: ```javascript // Legacy syntax const socket = new WebSocket("wss://ex
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEbwrX6B2fLZL9nRJbIkMG5BKScrz_ZHl792V7HmYUI5eJBXRNw4B6BfsBBOuLzj-u1cY3Q0jlaGnJ4Dcs1TSv2N-wCs4C5YzLDlFE5UJyp4OB2NE0OC91DC-uV1PzJ2Cb-fF6lCpM=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  Historically, the native web `WebSocket` constructor accepted only a destination URL and an optional subprotocol string or array of subprotocol strings: ```javascript // Legacy syntax const socket = new WebSocket("wss://ex
- [Experimental Chromium Web Platform Features \| Polypane](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > The user must grant the site the ... builds on https://chromestatus.com/feature/5080055102439424 which <strong>adds an options bag to the WebSocket constructor</strong>....
- [Add option bag to WebSocket constructor \[542670554\] - Chromium](https://issues.chromium.org/issues/542670554) *(issues.chromium.org)*
  > ChromeStatus entry: https://chromestatus.com/feature/5080055102439424 <strong>Intent-to-Prototype thread</strong>: https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U/m/kSuHLvkpBwAJ TAG=agy CONV=d49fff98-9ad5-4ac6-8a3f-c6022b98b1f9 Bug...
- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5080055102439424</strong>?gate=5087234207383552
- [Support \`targetAddressSpace\` option in WebSockets \[517413738\] - Chromium](https://issues.chromium.org/issues/517413738) *(issues.chromium.org)*
  > As a pre-requisite for this, we would need to add an options bag to WebSockets -- currently WebSockets takes a protocol param but not an options bag (MDN ref). I think this is the canonical WebSockets spec issue for this: https://<strong>github.com/w...
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > See https://<strong>github.com/whatwg/websockets/issues/42</strong> and spec PR https://github.com/whatwg/websockets/pull/76 for this change.
- [Add options bag to WebSocket constructor - Chrome Platform Status](https://chromestatus.com/feature/5080055102439424) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [\[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor](http://www.mail-archive.com/blink-dev@chromium.org/msg17124.html) *(mail-archive.com)*
  > Before, this would be written `<strong>const socket = new WebSocket(&quot;wss://example.com:8080&quot;, &quot;soap&quot;)</strong>`. After, this could also be written `const socket = new WebSocket(&quot;wss://example.com:8080&quot;, { protocols: &quo...
- [Re-establishing web-socket for PWA - Need help - Bubble Forum](https://forum.bubble.io/t/re-establishing-web-socket-for-pwa/249335) *(forum.bubble.io · 2023-02-28T18:00:11)*
  > I have a PWA shortcut for my app. When people re-access the website from the shortcut, if the PWA was already open and running in the background, the websocket will have been disconnected, so data will not update on their screen. This is a catastroph...
- [Implementing WebSockets in Progressive Web Apps - Tesla Digital - Connecting Business & Technology with Modern Software Develpoment](https://www.tesladigitalhq.com/implementing-websockets-in-progressive-web-apps) *(tesladigitalhq.com · 2024-05-17T14:46:15)*
  > By mastering WebSocket fundamentals, architecture, and security measures, we&#x27;ve bridged the gap between our app and the server. With optimized performance, our PWA is now poised to revolutionize the way users interact with our application. We&#x...
- [Pwas In The Gaming Industry: Creating Immersive Web-Based Experiences](https://gtcsys.com/comprehensive-faqs-guide-real-time-communication-in-pwas-websockets-server-sent-events-and-webrtc) *(gtcsys.com · 2024-03-28T10:47:32)*
  > These technologies empower developers to create dynamic, real-time experiences in PWAs, enhancing user engagement and interactivity. WebSocket is a communication protocol that provides full-duplex, bidirectional communication channels over a single T...
- [javascript - HTTP headers in Websockets client API](https://stackoverflow.com/questions/4361173/http-headers-in-websockets-client-api) *(stackoverflow.com)*
  > From nodejs v22 now you can <strong>pass a WebSocketInit as the second parameter</strong>. Example: Copyvar ws = new WebSocket(url, { protocols: ... headers: { &#x27;User-Agent&#x27;: &#x27;xxx&#x27;, ...
- [Understanding Web Sockets: A Comprehensive Guide - Arshon Inc. Blog](https://arshon.com/blog/understanding-web-sockets-a-comprehensive-guide) *(arshon.com · 2024-08-29T23:09:51)*
  > A WebSocket tutorial typically covers the basics of WebSocket communication, including setting up a server and client, handling events, and sending/receiving messages.
- [r/webdev on Reddit: WebSocket: An In-Depth Beginner’s Guide](https://www.reddit.com/r/webdev/comments/qhsx0k/websocket_an_indepth_beginners_guide) *(reddit.com · 2021-10-28T18:08:57)*
  > This blog discusses the thoery of Websockets.
- [Mastering Real-Time Communication: A Comprehensive WebSocket Tutorial \| by Sergey Dudik \| Medium](https://medium.com/@sergey.dudik/mastering-real-time-communication-a-comprehensive-websocket-tutorial-0f6cf384d1e8) *(medium.com · 2024-02-08T12:24:18)*
  > Mastering Real-Time Communication: A Comprehensive WebSocket Tutorial WebSocket is a communication protocol that provides full-duplex communication channels over a single TCP connection. It enables …
- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > For example, instead of new ... bug #542670554 | ChromeStatus.com entry | Spec · <strong>Adds support for passing a targetAddressSpace option in the WebSocket constructor</strong> (new WebSocket(&quot;ws://local-server.example&quot;, { ...
- [Dart Enhanced Enums Are Secretly Factories: Unlocking Constructor Tearoffs](https://dev.to/gde/dart-enhanced-enums-are-secretly-factories-unlocking-constructor-tearoffs-54n9) *(dev.to · Randal L. Schwartz · Sep 20)*
  > How combining Dart's Enhanced Enums with constructor tearoffs turns simple enum values into self-instantiating, type-safe polymorphic factories.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Experimental Chromium Web Platform Features \| Polypane](https://polypane.app/experimental-web-platform-features) *(polypane.app)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > The user must grant the site the ... builds on https://chromestatus.com/feature/5080055102439424 which <strong>adds an options bag to the WebSocket constructor</strong>....
- [Add option bag to WebSocket constructor \[542670554\] - Chromium](https://issues.chromium.org/issues/542670554) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > ChromeStatus entry: https://chromestatus.com/feature/5080055102439424 <strong>Intent-to-Prototype thread</strong>: https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U/m/kSuHLvkpBwAJ TAG=agy CONV=d49fff98-9ad5-4ac6-8a3f-c6022b...
- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5080055102439424</strong>?gate=5087234207383552
- [Support \`targetAddressSpace\` option in WebSockets \[517413738\] - Chromium](https://issues.chromium.org/issues/517413738) *(issues.chromium.org)* *(Cites: `https://github.com/whatwg/websockets/issues/42`)*
  > As a pre-requisite for this, we would need to add an options bag to WebSockets -- currently WebSockets takes a protocol param but not an options bag (MDN ref). I think this is the canonical WebSockets spec issue for this: https://<strong>gi...
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)* *(Cites: `https://github.com/whatwg/websockets/issues/42`)*
  > See https://<strong>github.com/whatwg/websockets/issues/42</strong> and spec PR https://github.com/whatwg/websockets/pull/76 for this change.

## 📚 Platform Documentation & Specifications

- [Supporting options bag in WebSocket constructor · Issue #1444 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1444) *(github.com)*
- [Add targetAddressSpace integration in WebSockets by christhompson · Pull Request #125 · WICG/local-network-access](https://github.com/WICG/local-network-access/pull/125) *(github.com)*
- [WebSocketStream: WebSocketStream() constructor](https://developer.mozilla.org/en-US/docs/Web/API/WebSocketStream/WebSocketStream) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 47 result(s) found across 12 planned queries — **17 verified relevant**
  - `"chromestatus.com/feature/5080055102439424" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/whatwg/websockets/issues/42" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (5 returned)
  - `"github.com/whatwg/websockets/pull/76" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"Add options bag to WebSocket constructor" API` — *Core feature API query* (3 returned)
  - `"Add options bag to WebSocket constructor" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"const socket = new websocket("wss://example.com:8080", "soap")" OR "const socket = new websocket("wss://example" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Add options bag to WebSocket constructor" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Add options bag to WebSocket constructor" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"new WebSocket" "{ protocols" OR "WebSocketInit"` — *Finds modern JavaScript code snippets and implementations demonstrating the second-argument options dictionary pattern.* (2 returned)
  - `"WebSocketInit" OR "options bag" "WebSocket" (blog OR tutorial OR guide) -site:github.com` — *Surfaces developer guides and tech articles detailing how and why the WebSocket constructor syntax was updated.* (8 returned)
  - `"WebSocketInit" OR "WebSocket constructor" ("Intent to Ship" OR "Chrome Platform Status" OR "standards-positions")` — *Tracks vendor engine alignment, browser release notes, and formal multi-engine consensus across Chromium, WebKit, and Gecko.* (4 returned)
  - `"whatwg/websockets" ("WebSocketInit" OR "targetAddressSpace" OR "Local Network Access")` — *Discovers developer feedback, standards committee issues, and cross-specification drivers like Local Network Access.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **13 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **1 verified relevant**
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
