# Support targetAddressSpace option for WebSockets

> **Report Week:** 2026-W41 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Add support for passing a targetAddressSpace option in the WebSocket constructor. This allows developers to specify that a WebSocket connection to a public hostname should be treated as going to a "local" or "loopback" destination, matching the existing support on the Fetch API. The main use case is to offer an escape hatch to bypass mixed content restrictions for connecting to local servers that cannot yet support HTTPS (as Local Network Access permissions require a secure context).  Example: A public site that connects to a local server can use a hostname to avoid needing manual configuration of the exact private IP address in use:  \`const ws = new WebSocket("ws://local-server.example", { targetAddressSpace: "local"}\`  This will flag the WebSocket connection as going to a local address, bypassing mixed content blocking when run in a secure context. The user must grant the site the local network permission for the WebSocket connection to succeed, and the hostname must resolve to a local IP address (otherwise it will be blocked).  This builds on https://chromestatus.com/feature/5080055102439424 which adds an options bag to the WebSocket constructor.

### Motivation

To avoid mixed content blocking for local network WebSockets requests, web developers have relied on having their users manually configure their local network IP addresses, which is awkward at best. Adding support for the targetAddressSpace option in WebSockets aligns it with the Fetch API. This has also been requested by developers (e.g., https://github.com/WICG/local-network-access/issues/16#issuecomment-4459071272).

## Ecosystem Status

- **Momentum:** High (380 points)
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
- 🐦 **Twitter / X:** [Stefan Tilkov on Twitter: "My opinion on the silly "REST vs. Websockets" debate http://t.co/cL10dfys"](https://twitter.com/stilkov/status/174565149770911744) — *by @stilkov, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [X - The Everything App / X](https://twitter.com/hashtag/websockets?lang=en) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Twitter](https://twitter.com/obswebsocket?lang=es) — *0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [laplusda.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEOY7QNK1SBOEtREiY2dM7x_iKUS7UfUEknUEVTCyNCk6jhR3pYEpY5b4VocHQg-9lfIApPvxP1mXwcwLt-D-OBfNVWXgE4ikFRPUq-Dd7IHmWOHn2qeei-2Ss54OsZAXqPnFO3sNHudl45pQemVZAJjJYcWQuWJwS8YwGAiQ8=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **`targetAddressSpace` option for WebSockets** allows developers to pass an options object to the `WebSocket` constructor specifying whether a connection is intended for a `"local"` or `"loopback"` destination:  ```jav
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFcH8jI7TLsu6E9ZbFRdrsTV9_KUQkPkk7CMcmloGRiyjkmtgt-AdeQkX0ZZrtQzoQOMYGasKZvgQmOV_k8PxgZN61YvD1HmA1iC2eYW0BBUJ2MczLQga-eDHFgx7YSvu8OAPjtEXER) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFYBvbzZFbzbgPWzkQxJvds_R_H01C_gmiSeLXtr1S0NhTSljQhpB1FI7FWdpLN9X_iYoAXFKT0mw_jpJxOj2BhDv1usOrwrDk7wywB0hKKSMb5fSKLNcKD2Hu14ZufCJqFNj09EczD5kIgVnAxHsuhTtxImVXl1kMohzbC) *(vertexaisearch.cloud.google.com)*
  > Use case for WebSocket communications · Issue #16 · WICG/local-network-access · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refres...
- [stackoverflow.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGh-CFgB-hg3LbCYNkLmbrtEtedRcKkaa44kwfuGwaKWMQMXvyLVWMvFe_BBNM6Ow88q32PEebRC6OC1B8Vr9-U3MCvAtf3UdycwkEvPCzVet58vpXSgC0U5lBEniGdcrxKZJPqKJJmvmEl0HKlsanYvJJwC26DFS8wttpLyboOBNP5s5jbi9bOwe-sN3yhCwuegP7TeYPmB6-SrrR-JMfBKw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **`targetAddressSpace` option for WebSockets** allows developers to pass an options object to the `WebSocket` constructor specifying whether a connection is intended for a `"local"` or `"loopback"` destination:  ```jav
- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF2UAlIYaTi9bcFuOaDfknrtRONO-FL4lO17YpOWah0EVVUnQMYgl6pCTVmkykgNtfrR3nX6wRgsQf5gjhpkXDgzn7OoRlNvGoVk3G4_v0sxlo6q5d2kfS6vGmiU49VfjcycA==) *(vertexaisearch.cloud.google.com)*
  > Local Network Access Local Network Access Draft Community Group Report , 7 August 2026 More details about this document This version: https://wicg.github.io/local-network-access/ Issue Tracking: GitHub Inline In Spec Editors: Chris Thompson ( Google ...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEGEVenT69Ec1k5zacF7Zjn4VU9tx9uLwmAOnxthvQuwXO3bwBTC02FJj_sf8wOVtZ03dt5-lmfoxS2UreaLMRTXcyjfeHC9E2XkFrxwWPwMfqtmNFlxQSpdYJD29vgemdfiTJWTdocbqgjmh5T) *(vertexaisearch.cloud.google.com)*
  > Supporting options bag in WebSocket constructor · Issue #708 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Relo...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH-tIWl95mAP5Y7_O9XSMI651lUlY3QQ2wdDcb8xnj6-6xw8Y20aLpyYdjyBJ8qEHlnjDamZFMJA38mJi6nr-MiUSSN0utqDJn_Z6S3RpmLev629Hoa6qV_nR4CgOtSNSm3Htj6TWtv) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGFa8-Vs3RgowgGInAIC5MjK_tGnNdNVs0L9ISx_6Itq9S83ZK2UBM-15ojvjatduJq1t1d6Yqij4-oHRcvYsZnEnZhJlKmFYQjTT2A3JiR2bapDhGPDi4Cz7ka0faNPWF-2U0=) *(vertexaisearch.cloud.google.com)*
  > Chrome 154 | Release notes | Chrome for Developers 기본 콘텐츠로 건너뛰기 / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG2R5t3TCdqAUgDRHbjB-nbJwQKG7aapO2vlEQNaQHDWXv0NFPSr4_51WQ4M2kLR28KXQuKko5VosTtJDvg6_FWtEwumVIczGk1WMmUBQ8A2cQU5gOXysy1E8tkwNqdrUCduPH_9z0=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **`targetAddressSpace` option for WebSockets** allows developers to pass an options object to the `WebSocket` constructor specifying whether a connection is intended for a `"local"` or `"loopback"` destination:  ```jav
- [googleusercontent.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHlpKz_smlbs-5iSPa4RI32jcX8Qv4vqkChIWnT_m6U887kUea-sESiaHB-zjzZk06rdYfaqRApfYw0AYACsmV17_yw7aeWg0dyMdozY1YOAus2Kl0-PNqhmb2q9NlqtAMXvfrDrasS2Eg_nF1i9PyhDUTLdWSMeM-Ewt8HZqZsCEzO7YsnbdLEWNxOEQ==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **`targetAddressSpace` option for WebSockets** allows developers to pass an options object to the `WebSocket` constructor specifying whether a connection is intended for a `"local"` or `"loopback"` destination:  ```jav
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFgRhDDKUtIhKyag6G7DZDiDTL6c9t8idbVnQyb2j_XBNBVs0JoM_NbC8Ty1rGQm3WjEaICIfZkHRrSGcIx_JVdQx87g0W9Jxn7R4ZJh8GPTZJI0zMN5GlMywym4njo2rgSulthkugUs_ElsdE=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **`targetAddressSpace` option for WebSockets** allows developers to pass an options object to the `WebSocket` constructor specifying whether a connection is intended for a `"local"` or `"loopback"` destination:  ```jav
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQErcSB7BOBXudoTtJlN2tcnY8InRd1j12xF54VgCbEBo56baOxTzWHCLek4QiaZktvb-sh2bfOD7mAjR9ZpS5c4m9GIRI0Q268qvWulHpZVUl6wxbsLL9rVPTXflfRnru7hGRnzr4fEHNiEvHtrCgeYO8oCBuxKR6DhKlg_QQsiGQx1XywuLm0lzg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **`targetAddressSpace` option for WebSockets** allows developers to pass an options object to the `WebSocket` constructor specifying whether a connection is intended for a `"local"` or `"loopback"` destination:  ```jav
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGKVqkD28wKDHXaHSLt5h86NtmuOy9E4JXNVEWIiqYUZVS24BsEEJVQs__K5AMJBOEjAH6AQTdHqfzjIbG-qhCe_qoFNHGVWQATjih4pxS3e4p-RR6noMcx-GPcwF_puLCVSK9MeyX-UwmjKVtu7UrqzCfTB5-yg6U=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **`targetAddressSpace` option for WebSockets** allows developers to pass an options object to the `WebSocket` constructor specifying whether a connection is intended for a `"local"` or `"loopback"` destination:  ```jav
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHOfMK_M5iituriuZk7HcZ6eqrTOHWLgvsAuBtVduFSvI7-U30cymDvr99UCpVG4RBnZFbSZI_dIYmcmKVAI7VkNsVxKrtWM-fhcKdym9rjqssui032f9QnA3hHL9ZkJ67Ra9cWauDy9UVXLIGYZA_3oFCiXeAdqf0DB-yDp0m-) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **`targetAddressSpace` option for WebSockets** allows developers to pass an options object to the `WebSocket` constructor specifying whether a connection is intended for a `"local"` or `"loopback"` destination:  ```jav
- [polypane.app](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE1frC-n3s2xWkyK8Mw7ry9DHrIMuMIfbyA5JcTOYS78iq4KW_RFI5f-tYSyebNT8fWuHpKyE6-EjTk0D3UPS07OQGfDwslPRKDcZuAx_3MUSXmFs0PoJHqNzi8lpE5LYGbMvLzTvUUD52v_CjT) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **`targetAddressSpace` option for WebSockets** allows developers to pass an options object to the `WebSocket` constructor specifying whether a connection is intended for a `"local"` or `"loopback"` destination:  ```jav
- [Support \`targetAddressSpace\` option in WebSockets \[517413738\] - Chromium](https://issues.chromium.org/issues/517413738) *(issues.chromium.org)*
  > ChromeStatus entry: https://chromestatus.com/feature/4779920606756864 <strong>Intent-to-Prototype: https://groups.google.com/a/chromium.org/g/blink-dev/c/hVlq3XXExbU/m/FqxRLh0yBwAJ TAG=agy CONV=d49fff98-9ad5-4ac6-8a3f-c6022b98b1f9 Bug: 517413738 Bina...
- [\[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)*
  > Explainer https://github.com/WICG/local-network-access/issues/126 Specification https://github.com/WICG/local-network-access/pull/125 Summary <strong>Add support for passing a targetAddressSpace option in the WebSocket constructor</strong>. This allo...
- [Support targetAddressSpace option for WebSockets - Chrome Platform Status](https://chromestatus.com/feature/4779920606756864) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [How Do WebSockets Work? \| Postman Blog](https://blog.postman.com/how-do-websockets-work) *(blog.postman.com · 2026-01-05T16:26:18)*
  > WebSockets introduce a different communication model than standard HTTP. After an initial HTTP handshake, the connection is upgraded and maintained, allowing for ongoing, bidirectional message exchange over a single TCP connection. This approach redu...
- [Implementing Progressive Web Apps (PWA) with MERN \| by Harshit Sharma \| Medium](https://medium.com/@harshitynwa/implementing-progressive-web-apps-pwa-with-mern-ea6442bf2d70) *(medium.com · 2024-05-22T20:53:19)*
  > Imagine you’re on a mountaintop, enjoying the view and checking your to-do list on your app. Despite having no signal, the app still works! This seamless experience is made possible by Progressive Web Apps (PWA) built with the MERN stack and WebSocke...
- [Re-establishing web-socket for PWA - Need help - Bubble Forum](https://forum.bubble.io/t/re-establishing-web-socket-for-pwa/249335) *(forum.bubble.io · 2023-02-28T18:00:11)*
  > I have a PWA shortcut for my app. When people re-access the website from the shortcut, if the PWA was already open and running in the background, the websocket will have been disconnected, so data will not update on their screen. This is a catastroph...
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > Tracking bug #502133195 ↗ (opens in new window) | ChromeStatus.com entry | Spec ↗ (opens in new window) <strong>Add support for passing a targetAddressSpace option in the WebSocket constructor</strong>.
- [Microsoft Edge 154 web platform release notes (Sep. 24, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/154) *(learn.microsoft.com · 2026-09-10T00:00:00)*
  > <strong>const ws = new WebSocket(&quot;ws://local-server.example&quot;, { targetAddressSpace: &quot;local&quot;});</strong> This matches similar support on the Fetch API. A common use case is bypassing mixed-content restrictions when connecting to lo...
- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com · 2026-09-22T00:00:00)*
  > <strong>Adds support for passing a targetAddressSpace option in the WebSocket constructor</strong> (new WebSocket(&quot;ws://local-server.example&quot;, { targetAddressSpace: &quot;local&quot; })). This lets you specify that a WebSocket connection to...
- [Intent to Ship: Local network access restrictions for WebSockets](https://groups.google.com/a/chromium.org/g/blink-dev/c/O6GMKt44Ups) *(groups.google.com)*
  > Explicit local IP addresses, and `.local` domains are exempted from mixed content checks, but we do not have an equivalent to the `targetAddressSpace` fetch() option for WebSockets We hope that our Dev Trial will help identify compatibility issues. T...
- [Intent to Extend Experiment: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/lRnFRIfzDMU) *(groups.google.com)*
  > Explicit local IP addresses, `.<strong>local` domains, and fetch() requests with the new `targetAddressSpace` fetch() option are exempted from mixed content checks</strong>, but other connection types may be difficult for developers (e.g., WebSockets...
- [Intent to Ship: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/cwu_RUmBpzY) *(groups.google.com)*
  > Explicit local IP addresses, .local domains, and fetch() requests with the new `targetAddressSpace` fetch() option are exempted from mixed content checks, but other connection types may be difficult for developers to work around mixed content blockin...
- [Ready for Developer Testing: Local network access restrictions for WebSockets](https://groups.google.com/a/chromium.org/g/blink-dev/c/4gx2y5jPGbU) *(groups.google.com · 2025-09-18T00:00:00)*
  > Measurement Use counters: - PrivateNetworkAccessWebSocketConnected counts the number of LNA WebSockets request we see - LocalNetworkAccessWebSocketResourceNotKnownPrivate - counts cases in which a `targetAddressSpace` option could have helped bypass ...
- [Add option bag to WebSocket constructor \[542670554\] - Chromium](https://issues.chromium.org/issues/542670554) *(issues.chromium.org)*
  > Revert WebSocket option bag support This is a partial revert of https://crrev.com/c/8197225 &quot;Implement WebSocket constructor option bag&quot;. It removes the IDL changes so that from JavaScript&#x27;s perspective the behaviour is identical to be...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Support \`targetAddressSpace\` option in WebSockets \[517413738\] - Chromium](https://issues.chromium.org/issues/517413738) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/4779920606756864`)*
  > ChromeStatus entry: https://chromestatus.com/feature/4779920606756864 <strong>Intent-to-Prototype: https://groups.google.com/a/chromium.org/g/blink-dev/c/hVlq3XXExbU/m/FqxRLh0yBwAJ TAG=agy CONV=d49fff98-9ad5-4ac6-8a3f-c6022b98b1f9 Bug: 5174...
- [\[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/pull/125`)*
  > Explainer https://github.com/WICG/local-network-access/issues/126 Specification https://github.com/WICG/local-network-access/pull/125 Summary <strong>Add support for passing a targetAddressSpace option in the WebSocket constructor</strong>....

## 📚 Platform Documentation & Specifications

- [local-network-access: WebSocket constructor rejects targetAddressSpace and test flag misses IPv6 localhost · Issue #1651 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1651) *(github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/154.md at main · MicrosoftDocs/edge-developer](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/154.md) *(github.com)*
- [local-network-access/explainer.md at main · WICG/local-network-access](https://github.com/WICG/local-network-access/blob/main/explainer.md) *(github.com)*
- [Request: targetAddressSpace property](https://developer.mozilla.org/en-US/docs/Web/API/Request/targetAddressSpace) *(developer.mozilla.org)*
- [WebSocket API (WebSockets)](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) *(developer.mozilla.org)*
- [WebSockets](https://developer.mozilla.org/en-US/docs/Glossary/WebSockets) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 45 result(s) found across 13 planned queries — **17 verified relevant**
  - `"chromestatus.com/feature/4779920606756864" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/WICG/local-network-access/issues/126" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"github.com/WICG/local-network-access/pull/125" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Support targetAddressSpace option for WebSockets" API` — *Core feature API query* (2 returned)
  - `"Support targetAddressSpace option for WebSockets" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"const ws = new websocket("ws://local-server.example", { targetaddressspace: "local"}" OR "const ws = new websocket("ws://local-server" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Support targetAddressSpace option for WebSockets" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Support targetAddressSpace option for WebSockets" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
  - `"targetAddressSpace" WebSocket tutorial OR guide` — *Finds practical guides and blog posts explaining how to connect WebSockets to local devices or loopback servers using targetAddressSpace.* (1 returned)
  - `"new WebSocket" "targetAddressSpace: 'local'" OR "targetAddressSpace: \"local\""` — *Discovers real-world code examples and JavaScript snippets demonstrating the options parameter in the WebSocket constructor.* (8 returned)
  - `"targetAddressSpace" "WebSocket" "mixed content" bypass OR "Local Network Access"` — *Searches for developer discussions and articles covering mixed content workarounds and Local Network Access (LNA) for WebSockets.* (8 returned)
  - `"targetAddressSpace" WebSocket site:github.com/WICG/local-network-access` — *Surfaces official specification issues, pull requests, and web developer feedback regarding WebSocket integration in WICG Local Network Access.* (0 returned)
  - `"targetAddressSpace" WebSocket Chrome OR WebKit OR Firefox intent to ship OR status` — *Retrieves browser vendor release announcements, standard position statements, and Intent-to-Ship signals for targetAddressSpace in WebSockets.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 15 result(s) found — **15 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 129 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 1 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4779920606756864)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4779920606756864)
- [Specification](https://github.com/WICG/local-network-access/pull/125)
- [Chromium Tracking Bug](https://crbug.com/517413738)
