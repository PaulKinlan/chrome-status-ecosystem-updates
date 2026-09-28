# Support targetAddressSpace option for WebSockets

> **Report Week:** 2026-W40 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Add support for passing a targetAddressSpace option in the WebSocket constructor. This allows developers to specify that a WebSocket connection to a public hostname should be treated as going to a "local" or "loopback" destination, matching the existing support on the Fetch API. The main use case is to offer an escape hatch to bypass mixed content restrictions for connecting to local servers that cannot yet support HTTPS (as Local Network Access permissions require a secure context).  Example: A public site that connects to a local server can use a hostname to avoid needing manual configuration of the exact private IP address in use:  \`const ws = new WebSocket("ws://local-server.example", { targetAddressSpace: "local"}\`  This will flag the WebSocket connection as going to a local address, bypassing mixed content blocking when run in a secure context. The user must grant the site the local network permission for the WebSocket connection to succeed, and the hostname must resolve to a local IP address (otherwise it will be blocked).  This builds on https://chromestatus.com/feature/5080055102439424 which adds an options bag to the WebSocket constructor.

### Motivation

To avoid mixed content blocking for local network WebSockets requests, web developers have relied on having their users manually configure their local network IP addresses, which is awkward at best. Adding support for the targetAddressSpace option in WebSockets aligns it with the Fetch API. This has also been requested by developers (e.g., https://github.com/WICG/local-network-access/issues/16#issuecomment-4459071272).

## Ecosystem Status

- **Momentum:** High (310 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Shipping enabled by default in Chrome 154 and Edge 154, this feature brings parity between WebSockets and the Fetch API by allowing a \`targetAddressSpace\` option inside a newly standardized WebSocket constructor options dictionary. It provides a crucial escape hatch for secure public web applications connecting to insecure local or loopback WebSocket servers (\`ws://\`), bypassing mixed content blocking once Local Network Access (LNA) user permissions are granted. However, because Local Network Access remains a WICG draft primarily driven by Chromium, cross-browser support is currently non-existent.

### Recommendations
- Actionable Advice: Use \`targetAddressSpace\` defensively with feature detection or user-agent branching, since passing an options dictionary to legacy engines that only expect a subprotocol string or array can trigger unexpected runtime errors or string coercion (\`\[object Object\]\`). Web teams relying on local hardware integrations should adopt the flag to restore Chromium connectivity on HTTPS sites, but maintain fallback pathways or localhost HTTPS certificates for non-Chromium clients.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Packages & Polyfills

- [ws](https://www.npmjs.com/package/ws) `v8.22.0` — Simple to use, blazing fast and thoroughly tested websocket client and server for Node.js
- [rpc-websockets](https://www.npmjs.com/package/rpc-websockets) `v10.0.1` — JSON-RPC 2.0 implementation over WebSockets for Node.js
- [@httptoolkit/websocket-stream](https://www.npmjs.com/package/@httptoolkit/websocket-stream) `v6.0.1` — Use websockets with the node streams API. Works in browser and node, with all current WS versions

## 📰 Ecosystem Blogs & Articles

- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGEzHvLm28epIrcaQsQzYjtjZn6VHTCKdqIBJTn9L70mycjE6yI4oZ04JbyK3txERTN-LR0gKw2SkEzrOstbFhWTiXpH6NoRLbS3Dqf6JAWrDco2qVlpOgReeR6yji-nx1aGwpOEHjS_s2YHBuz5iAuofUtGhfb215ZR3dy8Oso8cwjJFUlEukl1g==) *(vertexaisearch.cloud.google.com)*
  > Local network access - Security | MDN Skip to main content Skip to search Toggle sidebar Web Security Defenses Local network access Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) 日本語 Local network access Th...
- [steeleobrienconsulting.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF8idATlERWP-Xqj_UNKBKMa8LHcLqYuB4dFBX8J91aR6Uii0Y6N03qYEyNJVNi6W66bUVdb-ppg7WmiQ0StYNBhYnI5E__tWTJcoy88jEGAijl8KmZ1pAeRGWF0brG_4wJX1tcumWMe2_Gx7HldEl7SoZ_PAoMWQQk3A==) *(vertexaisearch.cloud.google.com)*
  > Chrome&#39;s Local Network Access: What It Breaks and How to Fix It | Steele O&#39;Brien Consulting Skip to main content Mar 2026 Chrome&#39;s Local Network Access: What It Breaks and How to Fix It On 28 October 2025, Google Chrome 142 shipped a feat...
- [openreplay.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHfp0JAO5ybDRXZ7kQsn20OAmvELgdGWWc45W0Ci2IPsToOMXxFFeaM7rNRjYi9bdEtU4fviCombIf8J54MnqzlOBPSo9k3_zOslLhhS7AhEhSrtTww2F3dNON2RyULtl5Y-eSO_fd2KGk4eJzCYVdbdOkra-MSD1dUS11Riw==) *(vertexaisearch.cloud.google.com)*
  > Chrome&#39;s Local Network Access (LNA) Permission Explained 12k Self-Host Try Cloud Free 12k Self-Host Try Cloud Free All articles Chrome&#39;s Local Network Access (LNA) Permission Explained Chrome Local Network Access permission gates public sites...
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGT4N1Hb6-DEWd9PSGQTCvgXHM4I8cAcfljGJJqXD5pnxNRgQARusC_GBIBXmjYCQb3x0U68VadzlrUa_zUmZBWkiWH11TAylwR5N2ePhb3n4rFMGQMBjSrRFwnXA5zTQK_l6TI2j1GBpV76jtcYapH7lTKYMrehCeiAaogDTwC) *(vertexaisearch.cloud.google.com)*
  > Adapting your website for new Local Network Access restrictions in Microsoft Edge | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take advantage of the latest ...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF_clcpmGWWbOtOIbaRjIpWYdqGp7z6uUNeS8pNXtO8ELLZnLDEVqB09LBR0syP7ATCVGiajns7kworKzlWri_wGbLFkvdsFEQegddwX9FS1ILS6DJ0IoRPHUmkNIW52sn2ij9rC992S_T3ylk=) *(vertexaisearch.cloud.google.com)*
  > Nieuwe toestemmingsprompt voor lokale netwerktoegang | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית الع...
- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEGfPL3-SBXIolR0IuDUNo87qqzz_ypWeyJIjlneren08dg1LkZEGnZiFM3IgEA-gphRElrg61b2aKRO2oaTaKzHHQeEsJ_jEfp4VjZv49_2YTjuUI9Le7dUg67zPd6CRDnyg==) *(vertexaisearch.cloud.google.com)*
  > Local Network Access Local Network Access Draft Community Group Report , 7 August 2026 More details about this document This version: https://wicg.github.io/local-network-access/ Issue Tracking: GitHub Inline In Spec Editors: Chris Thompson ( Google ...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEUYSbz04q0A0lN-T1H_SurFvzIONcBUOigTvUhghF5ImT2tN5ma-cjvFb1mRVHdBazw2OlYr5rdsmlMTHOilloXMmhWj6xdPn_XA1c3pRNdrz4_gohsPl0SpwBiodVDn4sEbjCnC_5) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG0N-HNS4QN55nLodaty2CABSpswJE0Ugys43TyxmH8CZJb16spg7GbA2Y2Z1oj7vZzEy0CXE7PCK-f2TFZHfpMsNXS5oJWMIO_uO7CJj_lcKgfjkkBZLvQ-Vou2nQkkpRR_Lzzx4Xs5VIP5Zu8) *(vertexaisearch.cloud.google.com)*
  > Support `targetAddressSpace` in WebSockets · Issue #126 · WICG/local-network-access · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to ...
- [biggo.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGtRyUr5SRtup82fdQh9fvfm9zr-zZrEi3bL4pQ9AAxVXXHkuV0hWSO8ncRDpQD8ujX8y5Sx50fUxQkncUMeJ-5skwTy6Be6DhrUaIoQm7AF0P0reEBgwQXC-ppLmoSYJJxH4sYPA524vvAhy8FGcZJl74jqC5iyqBl) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  As part of the **Local Network Access (LNA)** security specification (formerly Private Network Access / PNA), web browsers gate requests originating from public websites to local or loopback destinations (e.g., IoT devices
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFqmI6hhGio5epwbiUl62wb7SzbOu-VOtdqD_YZEIpXGUxkKFCxQSv7qbUmgtrkrKYgHeUA9-LeSlhtfS-zQFbbUvi1EQjV6fgezYNbxfZXc5fQdyljwVPk5PV49pRZvZfCKtJSYTh-) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  As part of the **Local Network Access (LNA)** security specification (formerly Private Network Access / PNA), web browsers gate requests originating from public websites to local or loopback destinations (e.g., IoT devices
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGvzt_S4wSkcHWxvh_3DvwT-44uEBLovQjAhpExHnHKYDhlxGgRzs83d2-_BcCUM358bZWFb0p7RB3x8MU0fK0GGO_7vjJdOAxgq2NVRG92QIdHXdL6xv_B5A5kOM1jU1zQ_Wah) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  As part of the **Local Network Access (LNA)** security specification (formerly Private Network Access / PNA), web browsers gate requests originating from public websites to local or loopback destinations (e.g., IoT devices
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGUp9F5aJHBfU_TVYPfHcOYsYGdPnVVlOaKPsYferOewycnedPia1jCR7w3Oj2dm8J6WmSXRD6EWaRrNDenu5Sgv_W8E8-avBudDNY6geCcVcOfOG3u2YOTKrGvk-wzcP2o6YwZwjnV) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  As part of the **Local Network Access (LNA)** security specification (formerly Private Network Access / PNA), web browsers gate requests originating from public websites to local or loopback destinations (e.g., IoT devices
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFbwHEx7zHjOjixzXLyUQTNPcjzAEk6mqt20BhVC3IIN6X3DLnddtTCljmMBt7k5XWxVqLDjnWeINVe7rxPm9sf5eFgsALwK8fy-EDrc31aiv-ppInTD2Abb6KQtoh_8Bvkqa1cMqmYkNhgX6jMIFN1lsjBXj0rN6SYGFRuCNtcsFlg7uce) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  As part of the **Local Network Access (LNA)** security specification (formerly Private Network Access / PNA), web browsers gate requests originating from public websites to local or loopback destinations (e.g., IoT devices
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH07cZ9MSs-NqlzXj_LAMMP5KXc2iY9TX3wR0V5YPi1EWb-rmRLTrxc0uGwM6oOKq9lmL7dCTRB_SXLztssWwEumPPtcImo96Hx7OHD3NAyBVbAs_72ac4by8qLEpqTCBPh760vRLsEH-wqwSs=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  As part of the **Local Network Access (LNA)** security specification (formerly Private Network Access / PNA), web browsers gate requests originating from public websites to local or loopback destinations (e.g., IoT devices
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFkKmrXmNWWcT0TKoKqofrzEWCTtjT22LLf1jsYKyTD_21sfMGXtQlzEvpNHlamiWzojFppTGIuuQr2At2kdyW4JIHC_DfEjhxCrrzLo7EyaYTJqs4_eS3UjqblnCVeWv6loAaRcRJcLm6V-yO6MQ==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  As part of the **Local Network Access (LNA)** security specification (formerly Private Network Access / PNA), web browsers gate requests originating from public websites to local or loopback destinations (e.g., IoT devices
- [gigazine.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHcnCryGtX0y8g3KKphAX6-a-U6GPgUVdROe_AJgqhsndoUUT3Cixm6trRBETw8-WIuuYe-bekOaDUuT55Y5qwSd-E8x0iTNI0h92uka3Ux_ZnTXAlL6o-4HpVUwajmHIrKut_0XfXI79w4T3ixqmR0khM=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  As part of the **Local Network Access (LNA)** security specification (formerly Private Network Access / PNA), web browsers gate requests originating from public websites to local or loopback destinations (e.g., IoT devices
- [polypane.app](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGTB2XJHCENePtgwm9ccXMIne5evo-IG0Mh8m5dxlxR4c2lAFCOKAXL7Wkk-f-UAJJii8SDqebVyuvtatSveQHZ2k0E4tXnFveCd050KGl0xdaR0rp3BX2MgAX6kJtLqo4_XmQvjSEYM5Y1RLmJ5A==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  As part of the **Local Network Access (LNA)** security specification (formerly Private Network Access / PNA), web browsers gate requests originating from public websites to local or loopback destinations (e.g., IoT devices
- [Support \`targetAddressSpace\` option in WebSockets \[517413738\] - Chromium](https://issues.chromium.org/issues/517413738) *(issues.chromium.org)*
  > ChromeStatus entry: https://chromestatus.com/feature/4779920606756864 <strong>Intent-to-Prototype: https://groups.google.com/a/chromium.org/g/blink-dev/c/hVlq3XXExbU/m/FqxRLh0yBwAJ TAG=agy CONV=d49fff98-9ad5-4ac6-8a3f-c6022b98b1f9 Bug: 517413738 Bina...
- [\[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)*
  > Explainer https://github.com/WICG/local-network-access/issues/126 Specification https://github.com/WICG/local-network-access/pull/125 Summary <strong>Add support for passing a targetAddressSpace option in the WebSocket constructor</strong>. This allo...
- [Support targetAddressSpace option for WebSockets - Chrome Platform Status](https://chromestatus.com/feature/4779920606756864) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [Microsoft Edge 154 web platform release notes (Sep. 24, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/154) *(learn.microsoft.com · 2026-09-10T00:00:00)*
  > const ws = new WebSocket(&quot;ws://local-server.example&quot;, { targetAddressSpace: &quot;local&quot;});
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > Tracking bug #502133195 ↗ (opens in new window) | ChromeStatus.com entry | Spec ↗ (opens in new window) <strong>Add support for passing a targetAddressSpace option in the WebSocket constructor</strong>.
- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154?hl=en) *(developer.chrome.com · 2026-09-22T21:33:03)*
  > For example, instead of new WebSocket(&quot;wss://example.com:8080&quot;, &quot;soap&quot;), you can pass new WebSocket(&quot;wss://example.com:8080&quot;, { protocols: &quot;soap&quot; }). Tracking bug #542670554 | ChromeStatus.com entry | Spec · Ad...
- [Chrome 154 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com · 2026-09-02T00:00:00)*
  > const ws = new WebSocket(&quot;ws://local-server.example&quot;, { targetAddressSpace: &quot;local&quot; });
- [Add option bag to WebSocket constructor \[542670554\] - Chromium](https://issues.chromium.org/issues/542670554) *(issues.chromium.org)*
  > We want to implement an option bag in the WebSocket constructor, in order to allow extensibility (and thus be able to implement the targetAddressSpace option for Local Network Access, see
- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)*
  > Motivation There is a demand for extensibility of options on the WebSocket constructor, to mirror the &quot;option bag&quot; approach that the Fetch API has. https://github.com/whatwg/websockets/issues/42 is requested by a number of implementors and ...
- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com · 2026-09-23T06:03:02)*
  > Adds support for passing a ... })). <strong>This lets you specify that a WebSocket connection to a public hostname should be treated as going to a &quot;local&quot; or &quot;loopback&quot; destination, matching existing support in the Fetch API</stro...
- [\[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor](http://www.mail-archive.com/blink-dev@chromium.org/msg17124.html) *(mail-archive.com)*
  > Blink component Blink&gt;Network&gt;WebSockets Web Feature ID websockets Motivation There is a demand for extensibility of options on the WebSocket constructor, to mirror the &quot;option bag&quot; approach that the Fetch API has. https://github.com/...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Support \`targetAddressSpace\` option in WebSockets \[517413738\] - Chromium](https://issues.chromium.org/issues/517413738) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/4779920606756864`)*
  > ChromeStatus entry: https://chromestatus.com/feature/4779920606756864 <strong>Intent-to-Prototype: https://groups.google.com/a/chromium.org/g/blink-dev/c/hVlq3XXExbU/m/FqxRLh0yBwAJ TAG=agy CONV=d49fff98-9ad5-4ac6-8a3f-c6022b98b1f9 Bug: 5174...
- [\[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/pull/125`)*
  > Explainer https://github.com/WICG/local-network-access/issues/126 Specification https://github.com/WICG/local-network-access/pull/125 Summary <strong>Add support for passing a targetAddressSpace option in the WebSocket constructor</strong>....

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 48 result(s) found across 12 planned queries — **11 verified relevant**
  - `"chromestatus.com/feature/4779920606756864" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/WICG/local-network-access/issues/126" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"github.com/WICG/local-network-access/pull/125" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Support targetAddressSpace option for WebSockets" API` — *Core feature API query* (2 returned)
  - `"Support targetAddressSpace option for WebSockets" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"const ws = new websocket("ws://local-server.example", { targetaddressspace: "local"}" OR "const ws = new websocket("ws://local-server" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Support targetAddressSpace option for WebSockets" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Support targetAddressSpace option for WebSockets" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"new WebSocket" "targetAddressSpace"` — *Finds code snippets and usage examples demonstrating the targetAddressSpace dictionary option inside the WebSocket constructor.* (8 returned)
  - `"targetAddressSpace" ("WebSocket" OR "WebSockets") ("Local Network Access" OR "mixed content")` — *Discovers articles and developer guides covering how to connect to local WebSocket servers without triggering mixed content blocking.* (8 returned)
  - `site:github.com/WICG/local-network-access "targetAddressSpace" "WebSocket"` — *Surfaces specification issues, debates, and developer feedback in the WICG Local Network Access repository.* (0 returned)
  - `"targetAddressSpace" "WebSocket" ("Intent to Ship" OR "Intent to Prototype" OR "Chromium")` — *Tracks browser vendor release notes, standards proposals, and adoption milestones across Chromium and related engines.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 17 result(s) found — **17 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **3 verified relevant**
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
