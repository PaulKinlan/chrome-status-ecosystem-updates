# WebTransport send groups and stream prioritization

> **Report Week:** 2026-W41 | **Milestone:** Chrome 153 | **Category:** In developer trial (Behind a flag)

## Overview

WebTransport already lets sites send data through WritableStreams. This feature will let applications group outgoing streams, prioritize data within each group, and view sending statistics for streams and groups, while preserving the ability to transfer streams.

### Motivation

Applications commonly send multiple independent streams over one WebTransport session. Existing outgoing streams already support writing, but the plain WritableStream representation does not expose stream grouping, runtime prioritization, or per-stream delivery statistics. This feature adds WebTransportSendGroup to organize related streams, WebTransportSendStream to prioritize them, and getStats() for both individual streams and groups. The new subclass must retain the existing ability to transfer a send stream to a worker or other execution context.

## Ecosystem Status

- **Momentum:** High (400 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Send groups and stream prioritization address a key architectural gap in WebTransport by introducing hierarchical scheduling, send-order control, and granular transmission metrics via WebTransportSendGroup and WebTransportSendStream. The specification is advancing solidly through the W3C WebTransport Working Group, with Gecko having already shipped support in Firefox 155 and Chromium actively evaluating it behind a developer trial flag in Chrome 153. Alignment is strong across vendors due to its critical necessity for next-generation streaming protocols such as Media over QUIC (MoQ).

### Recommendations
- Actionable Advice: Web teams building low-latency media or bidirectional gaming runtimes should test send groups and getStats() in Chromium under developer trial flags and validate interoperability against Firefox. Maintain defensive feature checks (e.g., verifying 'createSendGroup' in WebTransport.prototype) and retain software-level queue prioritization as a fallback until Baseline indexing is reached.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Packages & Polyfills

- [thread-stream](https://www.npmjs.com/package/thread-stream) `v4.2.0` — A streaming way to send data to a Node.js Worker Thread

## 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH0mVpFLmmV9oBQl2MvONLYbEVRCoVDq8ix37Q_vEbTtx-lcyN0AMlft7k-KBG9HnO6VZv1-E3PnWfTe4wqFDZVvu5J-9bxrS8rasGUAi4XsonSHDyu9mrHdoIXwlUaehhSNPnDfFranDDhd6q_A2Us) *(vertexaisearch.cloud.google.com)*
  > webtransport/explainer.md at main · w3c/webtransport · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You signe...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGFzAOCVZ0I5tlyB4PyyzHRMVev7s6Pv3w2Lf8FZnDxum4hEDJjynoiR5XSRuIxRHadiYlkGDlE5yBTsVkWwD9pR8WWRpF2Lb8uklLQVKKimRTWdLWb7T67--t7OoTkUd1HBr5nZlWw2aLcl_9Qr89jp_6M_BLM0HL5qYNF91enu4b1RA==) *(vertexaisearch.cloud.google.com)*
  > WebTransport: createSendGroup() method - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs WebTransport createSendGroup() Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) WebTrans...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHvDfnZGLL_qscdbHuP6Qq2c2iUg9Cx9SDgak6oQKHKxFi9wzVF_XxrtuQs_zE5KwdxK6DeogbrzlqisrPQAF6QTCT8mV8OUi-RisCL1gQqKK1yOYdhYdfuj647gDNeG3a_fz8DSTBduMvBKSRun8ViiT62BIKd4d8ci7ac50QlwB3kAUvIDZ-RqqbajJ2mIAbjHJjJTT0=) *(vertexaisearch.cloud.google.com)*
  > WebTransportDatagramDuplexStream: createWritable() method - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs WebTransportDatagramDuplexStream createWritable() Theme OS default Light Dark English (US) Remember language Le...
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFMcXJCbuuq8yhSlAgqoDfdFhQMwNCVDv4_lhe5CPeiSsr4OmKncRywOBAHkXdfNAe5hUJuRhufhEBXBmiwDXBkK2JxNXRqazEwk6oVy_viIL90tCb_9QmSaA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **WebTransport Send Groups and Stream Prioritization** introduces a hierarchical bandwidth-scheduling and metrics model for WebTransport streams and datagrams:  * **Send Groups (`WebTransportSendGroup`)**: Created via `tra
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHHjtorE6pWGvbOf719Utw-vir7O4U199OyNJUGdjFdYyBok3jLRBkvsYrsLexBWjXsj-j3RPRi6dz0WdNoqTh3Vf2rryh2UExjdiFYzooReef2T1fN4xhKud23Vt_iiZPwgXoAzu4BOqQy8ZwR_1CgKqC0zDnwGWI-ZjeGU1JSY8sJNfDf43Lw-e1G3aTR) *(vertexaisearch.cloud.google.com)*
  > WebTransportDatagramsWritable: sendGroup property - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs WebTransportDatagramsWritable sendGroup Theme OS default Light Dark English (US) Remember language Learn more Deutsch E...
- [deno.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGTNNIPsxtTUVkDXRzjGFt0cnnZGbbhC2ZTn0tiz8pWWtF8VwDhm9C_j7zwHySjg81DFysWUfBxQmSxkv-acXexwjXMIxkBy0Hwtsw_jcH4t5k6LI1RjOWB9pOQ17Y=) *(vertexaisearch.cloud.google.com)*
  > Platform - Web documentation | Deno Docs Skip to main content ⌘K ↑↓ Up or down to navigate ↵ Enter to select ESC Escape to close Toggle Theme Toggle navigation menu Web Platform Platform A set of essential interfaces and functions to interact with th...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHSbaEEZT5PdWYjKxX-UF2QqaCLaYOouBKDAPKeCfPTBqj0tMBMkc7Yl13fku2AeldE1HUI1lqr_2oNKBFV08xP140PN6aO4pTkr8bIt4LMPI31lCWQUq_6m-bHBnxKU43-prk0Jg4OgIdv_6hBIzd873Elik-abXx6OEq0CgDM) *(vertexaisearch.cloud.google.com)*
  > WebTransportSendGroup: getStats() method - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs WebTransportSendGroup getStats() Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) WebT...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHpcIh63rcpw05b0OTDA6R3iBUOdxLKQ0QycXiK-yKVR1FPioKcxIkQYE47FsHK8TKhdCnAjIg85I6OizbQX9a3yR1xp4t0TmaFKq7GWxqNrr4Jd90JURd-e8ubP41Rvj2kYlMFwLdEoErlBg83ihEdzYqVH69vr61tZQ==) *(vertexaisearch.cloud.google.com)*
  > Firefox 155 release notes for developers - Mozilla | MDN Skip to main content Skip to search Toggle sidebar Mozilla Firefox Release notes for developers Firefox 155 Theme OS default Light Dark English (US) Remember language Learn more Deutsch English...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGn_xZnJBNEQK84_Lg3V_oV730iBwR2Jd_Ilb6P8C1E2Lg6tzkhZx_DzagCyV0muLMsKLoao3sdKkA5M1Wlg3qycr7lispnRwA_v7ZEr_KNFfE-Yu5OY9U=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **WebTransport Send Groups and Stream Prioritization** introduces a hierarchical bandwidth-scheduling and metrics model for WebTransport streams and datagrams:  * **Send Groups (`WebTransportSendGroup`)**: Created via `tra
- [polypane.app](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFcRtoj57Pml-YkBIWwDGCqkx9MPn0OLAVL4tDNH2B0izFB8dMR-do4bFzNyxGmZnVAzKdkwcZSKI7zKRjvv4vJ7zIws_6rJF0VBEQO8FpSfopSxwAWbEtC7EsI0Tell5485SOigOxp1AhVr-xcFw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **WebTransport Send Groups and Stream Prioritization** introduces a hierarchical bandwidth-scheduling and metrics model for WebTransport streams and datagrams:  * **Send Groups (`WebTransportSendGroup`)**: Created via `tra
- [ietf.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG59HaSRAa-W4zb6WCqJga_QKIZoPUSOGuDlmlx1NQAlLNEPhMiVjBkDEOIYpMM_PJcWY53LgbR4toewRzB1reO30CGTnvbGF_CWLMgf0DuUGTMWTbe6Z5cCkeu2jU0jtynBv2KvxyFInizo9yZxof1w9jsBy3jYul972igADxfAn8ZOveGUisbYL9QtsISqKWiQ7jC922fOhbzxSK9sPOM) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **WebTransport Send Groups and Stream Prioritization** introduces a hierarchical bandwidth-scheduling and metrics model for WebTransport streams and datagrams:  * **Send Groups (`WebTransportSendGroup`)**: Created via `tra
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHDXbFAf7_iL74FMA6d3Fe6dn9APvQNN_cVdY-Uz-NrO4x_XayQPX74lUKHKH9fDFwwx9ftd8o2WBr9cr1jBJXdVb1WaRq01cbPBJYiB5ND9-Z0xw4v2VVz1YBrbLfqlT_dwVRZXjNE) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **WebTransport Send Groups and Stream Prioritization** introduces a hierarchical bandwidth-scheduling and metrics model for WebTransport streams and datagrams:  * **Send Groups (`WebTransportSendGroup`)**: Created via `tra
- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH8uQGdCnEG0rK8zMX_4pZsDL6GuGNE82qcXLnJvrpZT5AUXfmo9LUdjQ8KX8zY-KVzFNSryq9vXtQuSu6jyTktgbuHMpfG9o_LfOg2AGy6pDDdJdpBUMPhyfV4zw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **WebTransport Send Groups and Stream Prioritization** introduces a hierarchical bandwidth-scheduling and metrics model for WebTransport streams and datagrams:  * **Send Groups (`WebTransportSendGroup`)**: Created via `tra
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG6b2kk73sWYodKIjkHvVAAXuM5XtPPaeXr05t1fL_-2yk99IYL0XQMuD6bzsRGXB4PZODy7e2zEomHyNTRntSAOBnuF2HfLyf7ZLGFTgqXuZxqVkJ1DX5WDNlA2DqmHbIXkHbz8MjLrD6S3Qf9PZ6s) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **WebTransport Send Groups and Stream Prioritization** introduces a hierarchical bandwidth-scheduling and metrics model for WebTransport streams and datagrams:  * **Send Groups (`WebTransportSendGroup`)**: Created via `tra
- [moq.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHpJrSb-86yyyq-V4F2Gjm64Vmpp6ghMnfiMniBFqdXuqBCz6RcMUBTTPSfXrMWORoIYdc4hlkM6lwSZd_abQx0yHeXnDBrgl8Qf3IZaL__zYW0Ar09hE1Ua1yD) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **WebTransport Send Groups and Stream Prioritization** introduces a hierarchical bandwidth-scheduling and metrics model for WebTransport streams and datagrams:  * **Send Groups (`WebTransportSendGroup`)**: Created via `tra
- [smashingmagazine.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFpmK50NFeBJ5bBUot80OOS-q278RVvt84LYndSp4ESeQa6rn4NCfTNdjHobI_Ad_dUhApBlR8I7zNqUSCE4ItyjFnJuVqaMOg6kU1-HMUvTbJn-maE7Cx2rNPGvQ2Sk_derYOJfWjJIVrivAmrqQYa6W8nRKtjcFvKeSvKvV3m3ML0jMNXlQef) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **WebTransport Send Groups and Stream Prioritization** introduces a hierarchical bandwidth-scheduling and metrics model for WebTransport streams and datagrams:  * **Send Groups (`WebTransportSendGroup`)**: Created via `tra
- [Intent to Experiment: WebTransport over HTTP/3](https://groups.google.com/a/chromium.org/g/blink-dev/c/aaLFxzw5zL4/m/H3V_l-qlAgAJ) *(groups.google.com)*
  > https://<strong>github.com/w3c/webtransport/blob/main/explainer.md</strong> · Design docs/spec · Specification: https://w3c.github.io/webtransport/#web-transport · https://docs.google.com/document/d/1UgviRBnZkMUq4OKcsAJvIQFX6UCXeCbOtX_wMgwD_es/edit ·...
- [Intent to extend the origin trial: WebTransport over HTTP/3](https://groups.google.com/a/chromium.org/g/blink-dev/c/JHZLOnRkRhk/m/Eh5tHLg-BwAJ) *(groups.google.com)*
  > https://<strong>github.com/w3c/webtransport/blob/main/explainer.md</strong> · Design docs/spec · Specification: https://w3c.github.io/webtransport/#web-transport · https://docs.google.com/document/d/1UgviRBnZkMUq4OKcsAJvIQFX6UCXeCbOtX_wMgwD_es/edit ·...
- [Intent to Prototype and Ship: WebTransport BYOB readers](https://groups.google.com/a/chromium.org/g/blink-dev/c/18ZdUE1B_zg/m/2JFujuSpBQAJ) *(groups.google.com)*
  > <strong>https://github.com/w3c/webtransport/blob/main/explainer.md</strong> · https://github.com/w3c/webtransport/issues/35 · https://www.w3.org/TR/webtransport · https://streams.spec.whatwg.org/#readablestreambyobreader · Support BYOB(bring-your-own...
- [Intent to Ship: WebTransport serverCertificateHashes option](https://groups.google.com/a/chromium.org/g/blink-dev/c/m0v9XiwKA4M/m/GtMq9j_iAAAJ) *(groups.google.com · 2022-01-20T00:00:00)*
  > https://<strong>github.com/w3c/webtransport/blob/main/explainer.md</strong> · Spec · https://w3c.github.io/webtransport/#dom-webtransportoptions-servercertificatehashes · WebTransport has been already covered by a series of TAG reviews (389, 669).
- [\[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17452.html) *(mail-archive.com)*
  > Explainer https://<strong>github.com/w3c/webtransport/blob/main/explainer.md</strong> Specification https://www.w3.org/TR/webtransport/#dom-webtransportoptions-datagramsreadabletype Summary Adds the WebTransportOptions.datagramsReadableType construct...
- [Re: \[blink-dev\] Intent to Ship: WebTransport](https://www.mail-archive.com/blink-dev@chromium.org/msg00592.html) *(mail-archive.com)*
  > On Mon, Sep 27, 2021 at 6:55 AM Yutaka Hirano &lt;[email protected]&gt; wrote: &gt; Contact emails &gt; &gt; [email protected], [email protected] &gt; &gt; Explainer &gt; &gt; https://<strong>github.com/w3c/webtransport/blob/main/explainer.md</strong...
- [\[blink-dev\] Intent to Prototype: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17462.html) *(mail-archive.com)*
  > Explainer https://github.com/w...ngmaterial Summary Adds WebTransport.exportKeyingMaterial(), which <strong>allows an application to derive cryptographic keying material bound to an established WebTransport session</strong>....
- [WebTransport and WHIP-over-WebTransport - Fora Soft](https://www.forasoft.com/learn/video-streaming/articles-streaming/webtransport-whip) *(forasoft.com · 2026-06-15T00:00:00)*
  > Editors: N. Jaju, V. Vasiliev, J.-I. Bruaroey. https://www.w3.org/TR/webtransport/ — <strong>defines the WebTransport JavaScript interface, the WebTransportOptions dictionary, the serverCertificateHashes security model, the reliable-stream and datagr...
- [webtransport package - github.com/propagamap/webtransport-server - Go Packages](https://pkg.go.dev/github.com/propagamap/webtransport-server) *(pkg.go.dev · 2025-05-27T00:00:00)*
  > WebTransport (https://www.w3.org/TR/webtransport/) is <strong>a 21st century replacement for WebSockets</strong>. It&#x27;s currently supported by Chrome, with support in other browsers coming shortly.
- [webtransport package - github.com/adriancable/webtransport-go - Go Packages](https://pkg.go.dev/github.com/adriancable/webtransport-go) *(pkg.go.dev · 2022-02-24T00:00:00)*
  > WebTransport (https://www.w3.org/TR/webtransport/) is <strong>a 21st century replacement for WebSockets</strong>. It&#x27;s currently supported by Chrome, with support in other browsers coming shortly.
- [h3\_webtransport - Rust](https://docs.rs/h3-webtransport-forked/latest/h3_webtransport) *(docs.rs)*
  > WebTransport: https://<strong>www.w3.org/TR/webtransport</strong>/#biblio-web-transport-http3 WebTransport over HTTP/3: https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/
- [h3-webtransport — Rust network library // Lib.rs](https://lib.rs/crates/h3-webtransport) *(lib.rs · 2025-05-06T00:00:00)*
  > #22 in #webtransport · 63,926 downloads per month Used in 11 crates (7 directly) MIT license · 715KB 16K SLoC · <strong>Provides the client and server support for WebTransport sessions</strong>.
- [How to use WebTransport \| Capabilities \| Chrome for Developers](https://developer.chrome.com/docs/capabilities/web-apis/webtransport) *(developer.chrome.com · 2020-06-08T00:00:00)*
  > WebTransport is a web API that uses the HTTP/3 protocol as a bidirectional transport. It&#x27;s intended for two-way communications between a web client and an HTTP/3 server. It supports sending data both unreliably with its datagram APIs, and reliab...
- [Node.js WebTransport: A Comprehensive Guide — w3tutorials.net](https://www.w3tutorials.net/blog/nodejs-webtransport) *(w3tutorials.net)*
  > Experimental use would require reliance on low-level QUIC protocol implementation or development of custom native extensions. Developers interested in experimenting with WebTransport in Node.js should monitor the official Node.js issue tracker and QU...
- [Understanding Webtransport: A Comprehensive Guide – peerdh.com](https://peerdh.com/blogs/programming-insights/understanding-webtransport-a-comprehensive-guide) *(peerdh.com · 2024-10-01T09:15:44)*
  > Bi-directional Communication: Unlike traditional HTTP, which is request-response based, WebTransport allows for simultaneous data transfer in both directions. This is crucial for applications like online gaming, where players need to send and receive...
- [Intent to Ship: WebTransport](https://groups.google.com/a/chromium.org/g/blink-dev/c/kwC5wES3I4c) *(groups.google.com)*
  > <strong>WebTransport offers all of the benefits of QUIC, but in a browser environment and without the constraints of HTTP semantics</strong>. Most notably we can push data over multiple streams, eliminating head-of-line blocking and enabling new func...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Experiment: WebTransport over HTTP/3](https://groups.google.com/a/chromium.org/g/blink-dev/c/aaLFxzw5zL4/m/H3V_l-qlAgAJ) *(groups.google.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md#6-sending-video-one-stream-per-frame-or-segment-with-send-order`)*
  > https://<strong>github.com/w3c/webtransport/blob/main/explainer.md</strong> · Design docs/spec · Specification: https://w3c.github.io/webtransport/#web-transport · https://docs.google.com/document/d/1UgviRBnZkMUq4OKcsAJvIQFX6UCXeCbOtX_wMgwD...
- [Intent to extend the origin trial: WebTransport over HTTP/3](https://groups.google.com/a/chromium.org/g/blink-dev/c/JHZLOnRkRhk/m/Eh5tHLg-BwAJ) *(groups.google.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md#6-sending-video-one-stream-per-frame-or-segment-with-send-order`)*
  > https://<strong>github.com/w3c/webtransport/blob/main/explainer.md</strong> · Design docs/spec · Specification: https://w3c.github.io/webtransport/#web-transport · https://docs.google.com/document/d/1UgviRBnZkMUq4OKcsAJvIQFX6UCXeCbOtX_wMgwD...
- [Intent to Prototype and Ship: WebTransport BYOB readers](https://groups.google.com/a/chromium.org/g/blink-dev/c/18ZdUE1B_zg/m/2JFujuSpBQAJ) *(groups.google.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md#6-sending-video-one-stream-per-frame-or-segment-with-send-order`)*
  > <strong>https://github.com/w3c/webtransport/blob/main/explainer.md</strong> · https://github.com/w3c/webtransport/issues/35 · https://www.w3.org/TR/webtransport · https://streams.spec.whatwg.org/#readablestreambyobreader · Support BYOB(brin...
- [1709355 - (WebTransport) \[meta\] WebTransport](https://bugzilla.mozilla.org/show_bug.cgi?id=1709355) *(bugzilla.mozilla.org)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md#6-sending-video-one-stream-per-frame-or-segment-with-send-order`)*
  > WebTransport (https://w3c.gith... (https://github.com/w3c/webtransport/blob/main/explainer.md) notes, <strong>it enables multiple use-cases that are hard or impossible to handle without it, especially for Gaming and live streaming</strong>....
- [Intent to Ship: WebTransport serverCertificateHashes option](https://groups.google.com/a/chromium.org/g/blink-dev/c/m0v9XiwKA4M/m/GtMq9j_iAAAJ) *(groups.google.com · 2022-01-20T00:00:00)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md#6-sending-video-one-stream-per-frame-or-segment-with-send-order`)*
  > https://<strong>github.com/w3c/webtransport/blob/main/explainer.md</strong> · Spec · https://w3c.github.io/webtransport/#dom-webtransportoptions-servercertificatehashes · WebTransport has been already covered by a series of TAG reviews (389...
- [\[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17452.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md#6-sending-video-one-stream-per-frame-or-segment-with-send-order`)*
  > Explainer https://<strong>github.com/w3c/webtransport/blob/main/explainer.md</strong> Specification https://www.w3.org/TR/webtransport/#dom-webtransportoptions-datagramsreadabletype Summary Adds the WebTransportOptions.datagramsReadableType...
- [Re: \[blink-dev\] Intent to Ship: WebTransport](https://www.mail-archive.com/blink-dev@chromium.org/msg00592.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md#6-sending-video-one-stream-per-frame-or-segment-with-send-order`)*
  > On Mon, Sep 27, 2021 at 6:55 AM Yutaka Hirano &lt;[email protected]&gt; wrote: &gt; Contact emails &gt; &gt; [email protected], [email protected] &gt; &gt; Explainer &gt; &gt; https://<strong>github.com/w3c/webtransport/blob/main/explainer....
- [\[blink-dev\] Intent to Prototype: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17462.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md#6-sending-video-one-stream-per-frame-or-segment-with-send-order`)*
  > Explainer https://github.com/w...ngmaterial Summary Adds WebTransport.exportKeyingMaterial(), which <strong>allows an application to derive cryptographic keying material bound to an established WebTransport session</strong>....
- [WebTransport · Issue #18 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/18) *(github.com · 2022-06-29T14:14:37)* *(Cites: `https://www.w3.org/TR/webtransport/#webtransportsendstream`)*
  > from: GoogleProposed, edited, or co-edited by Google.Proposed, edited, or co-edited by Google.from: MicrosoftProposed, edited, or co-edited by Microsoft.Proposed, edited, or co-edited by Microsoft.position: supporttopic: httpSpec relates to...
- [webtransport/index.bs at main · w3c/webtransport](https://github.com/w3c/webtransport/blob/main/index.bs) *(github.com)* *(Cites: `https://www.w3.org/TR/webtransport/#webtransportsendstream`)*
  > ED: https://w3c.github.io/webtransport/ TR: https://<strong>www.w3.org/TR/webtransport</strong>/ Editor: Nidhi Jaju, w3cid 136840, Google · Editor: Victor Vasiliev, w3cid 113328, Google · Editor: Jan-Ivar Bruaroey, w3cid 79152, Mozilla · Fo...
- [WebTransport and WHIP-over-WebTransport - Fora Soft](https://www.forasoft.com/learn/video-streaming/articles-streaming/webtransport-whip) *(forasoft.com · 2026-06-15T00:00:00)* *(Cites: `https://www.w3.org/TR/webtransport/#webtransportsendstream`)*
  > Editors: N. Jaju, V. Vasiliev, J.-I. Bruaroey. https://www.w3.org/TR/webtransport/ — <strong>defines the WebTransport JavaScript interface, the WebTransportOptions dictionary, the serverCertificateHashes security model, the reliable-stream ...
- [GitHub - adriancable/webtransport-go: Lightweight but fully-capable WebTransport server for Go · GitHub](https://github.com/adriancable/webtransport-go) *(github.com)* *(Cites: `https://www.w3.org/TR/webtransport/#webtransportsendstream`)*
  > WebTransport (https://www.w3.org/TR/webtransport/) is <strong>a 21st century replacement for WebSockets</strong>. It&#x27;s currently supported by Chrome, with support in other browsers coming shortly.
- [webtransport package - github.com/propagamap/webtransport-server - Go Packages](https://pkg.go.dev/github.com/propagamap/webtransport-server) *(pkg.go.dev · 2025-05-27T00:00:00)* *(Cites: `https://www.w3.org/TR/webtransport/#webtransportsendstream`)*
  > WebTransport (https://www.w3.org/TR/webtransport/) is <strong>a 21st century replacement for WebSockets</strong>. It&#x27;s currently supported by Chrome, with support in other browsers coming shortly.
- [webtransport package - github.com/adriancable/webtransport-go - Go Packages](https://pkg.go.dev/github.com/adriancable/webtransport-go) *(pkg.go.dev · 2022-02-24T00:00:00)* *(Cites: `https://www.w3.org/TR/webtransport/#webtransportsendstream`)*
  > WebTransport (https://www.w3.org/TR/webtransport/) is <strong>a 21st century replacement for WebSockets</strong>. It&#x27;s currently supported by Chrome, with support in other browsers coming shortly.
- [h3\_webtransport - Rust](https://docs.rs/h3-webtransport-forked/latest/h3_webtransport) *(docs.rs)* *(Cites: `https://www.w3.org/TR/webtransport/#webtransportsendstream`)*
  > WebTransport: https://<strong>www.w3.org/TR/webtransport</strong>/#biblio-web-transport-http3 WebTransport over HTTP/3: https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/
- [h3-webtransport — Rust network library // Lib.rs](https://lib.rs/crates/h3-webtransport) *(lib.rs · 2025-05-06T00:00:00)* *(Cites: `https://www.w3.org/TR/webtransport/#webtransportsendstream`)*
  > #22 in #webtransport · 63,926 downloads per month Used in 11 crates (7 directly) MIT license · 715KB 16K SLoC · <strong>Provides the client and server support for WebTransport sessions</strong>.

## 📚 Platform Documentation & Specifications

- [1709355 - (WebTransport) \[meta\] WebTransport](https://bugzilla.mozilla.org/show_bug.cgi?id=1709355) *(bugzilla.mozilla.org)*
- [WebTransport · Issue #18 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/18) *(github.com)*
- [webtransport/index.bs at main · w3c/webtransport](https://github.com/w3c/webtransport/blob/main/index.bs) *(github.com)*
- [GitHub - adriancable/webtransport-go: Lightweight but fully-capable WebTransport server for Go · GitHub](https://github.com/adriancable/webtransport-go) *(github.com)*
- [WebTransportSendStream](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportSendStream) *(developer.mozilla.org)*
- [WebTransportSendStream: sendGroup property](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportSendStream/sendGroup) *(developer.mozilla.org)*
- [WebTransportSendStream: sendOrder property](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportSendStream/sendOrder) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 34 result(s) found across 8 planned queries — **20 verified relevant**
  - `"chromestatus.com/feature/5235261159112704" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/w3c/webtransport/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"www.w3.org/TR/webtransport" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport send groups and stream prioritization" API` — *Core feature API query* (0 returned)
  - `"WebTransport send groups and stream prioritization" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (3 returned)
  - `"per-stream" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport send groups and stream prioritization" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (4 returned)
  - `"WebTransport send groups and stream prioritization" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (3 returned)
- **Google Search Grounding (gemini-3.8-flash):** 16 result(s) found — **16 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **1 verified relevant**
- **Web Platform Tests (wpt.fyi):** 119 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 3 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5235261159112704)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5235261159112704)
- [Specification](https://www.w3.org/TR/webtransport/#webtransportsendstream)
- [Chromium Tracking Bug](https://crbug.com/568825278)
