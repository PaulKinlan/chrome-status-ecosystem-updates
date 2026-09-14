# MediaCapabilities.decodingInfo.encryptionScheme

> **Report Week:** 2026-W38 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Adds the \`encryptionScheme\` attribute to the \`KeySystemTrackConfiguration\` dictionary used in \`navigator.mediaCapabilities.decodingInfo()\`. This allows web applications to query whether a specific encryption scheme (such as \`'cenc'\` or \`'cbcs'\`) is supported.   \*Note: This feature is already approved by the W3C spec and the underlying backend implementation in Chromium already exists. This launch is purely to plumb the \`encryptionScheme\` property from the Blink IDL layer to the existing backend.\*

### Motivation

Currently, Chromium only allows developers to query media capabilities based on codec and `robustness`. With the ecosystem's migration towards the `'cbcs'` encryption scheme, there is significant device fragmentation. Exposing `encryptionScheme` in `decodingInfo()` allows developers to accurately detect if their encrypted media will play. Since the backend support is already implemented, this simply completes the Blink-layer plumbing to match other browsers and the W3C spec.

## Ecosystem Status

- **Momentum:** High (360 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Exposing \`encryptionScheme\` on \`KeySystemTrackConfiguration\` in \`navigator.mediaCapabilities.decodingInfo()\` brings Blink into compliance with the W3C Media Capabilities specification. This update resolves long-standing discrepancies where Chromium false-positively reported support for unsupported DRM schemes like 'cbcs' on hardware decoders. It represents a catch-up release that finalizes the IDL-to-backend plumbing, significantly stabilizing encrypted video capability probing across the ecosystem.

### Recommendations
- Actionable Advice: Web video engineering teams should pass \`encryptionScheme: 'cbcs'\` (or \`'cenc'\`) directly into \`decodingInfo()\` configurations to avoid false-positive playback capabilities. Teams currently relying on player-level shims (like the Shaka EME encryption scheme polyfill) should test native decoding queries in Chrome 152 to verify clean fallback behaviors.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [realityripple.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHNCtnejCqK1NJY4Xg6n5xv2aM_Eek3j0LMb66USL8lvMRzLr0YMyQaNtkyZTunL1-W2W6GbMte28cCHK78yAAedOziY0zw3BlGvDiCXC_j0JmENX3SWMytO0aueNWrSE7_VneCcE-LIgWwLVTYirWq6pL6718Rffvg7k_Av9lv) *(vertexaisearch.cloud.google.com)*
  > MediaCapabilities.decodingInfo() - Web APIs Skip to main content MediaCapabilities.decodingInfo() On this Page Jump to section Syntax Example Specifications Browser compatibility See also Related topics The MediaCapabilities.decodingInfo() method, pa...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEX4TAObQr1TlZgiwDb2qthcjZDLgL8YXsCvkt8yRIFChcsP5orEm90cbIwpECfg4bs4Vy3QiJy3LJUFBA7v-c1OO6SbnSUbwV-K2khFRBjlkTgOfpngExI-gDGyComarlKKYSsxvFk) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGE7mQKF9TE_eZR5r_4J9oXV3FeDiRpC5MlFZdGFEwk6cBGUhDAEE1CJQlD4g2S7w_KVr6AubPH_x1ZPEApvd_Ph4L5wDhQq74uLpUHLebC3oajg4g5f3SuEClS1fhxUU4W2Jz26puPgVTuINSvZpDdzxBb9QgQqsiSvWErTJLTg72-4RWr) *(vertexaisearch.cloud.google.com)*
  > MediaCapabilities: decodingInfo() method - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs MediaCapabilities decodingInfo() Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) 日本語 ...
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHUaqPzuwHdPDTePFi2LFUe9KNO6O_hTwPFUN2fcRS-efPAS0V7gS10TORx8TahTEQAZuqLsJP7qBnTJkoy34CWlG0DXilE30GT9CoUV0woo4ho6irkeyGjsE6ExwRWdP_kuA==) *(vertexaisearch.cloud.google.com)*
  > Chromium Sign in
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFZy_Yr-nkZURRRutofwDEp1ZkbybqANNxEi0JnlzI5B_OubBpImvowH8d48nQ1X32fRb3Aa7gcZnYjLDSvTiNUS06yaPvxW9V5ujbz7DIP02O8Crch_e3cDTR8B08f2jRZUaiez3mYLKDNY_5G3BZO) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGHWm_jii08y4dAoT283ej7rczMuySOjw4d_c8P4U9dkuQs6XgZYCFzIUYrQjPiJMvkzymcWTcbeFTgdPUboer0KYtwXfl_C4503k0qcR6p-PhbV3itLc81_UiiELH4O-qA6rQwKDfdf12AEaVOldAnS3z22Vlqh82MNk8_gtIfmMjJ-3pMBIP2HbjFBjufMzqodtaba8-ruIKVbZ8yQj3tKgo=) *(vertexaisearch.cloud.google.com)*
  > content/files/en-us/web/api/mediacapabilities/decodinginfo/index.md at main · mdn/content · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Relo...
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFIvNlXB-FopFoTkusOfazc7uTkPZ-5Y781NG9Ypx51grcjhOtMVd6CL7qNw_RqnwBNbTztSF_rEHpl-M4QEGwi2d1Ijl-9F0oX9H9Z2dq_6FQchdmuqD-NWR3J4EAQYw==) *(vertexaisearch.cloud.google.com)*
  > Recent updates, developer documentation, and platform trackers regarding **`MediaCapabilities.decodingInfo.encryptionScheme`** show how the feature operates across the ecosystem:  ---  ### Executive Summary  In web media delivery, video players use t
- [\[blink-dev\] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme](http://www.mail-archive.com/blink-dev@chromium.org/msg17061.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme Mike Taylor Mon, 27 Jul 2026 09:52:33 -0700 (Also, c...
- [Intent to Ship: MediaCapabilities API for WebRTC](https://groups.google.com/a/chromium.org/g/blink-dev/c/loWlekYWswQ) *(groups.google.com)*
  > https://github.com/drkron/media-capabilities/blob/webrtc_examples/explainer.md#webrtc https://github.com/w3c/media-capabilities/pull/191 · https://w3c.github.io/media-capabilities/ <strong>Extends the MediaCapabilities API to support WebRTC streams</...
- [Media Capabilities - Decoding Info EME Sample](https://googlechrome.github.io/samples/media-capabilities/decoding-info-eme) *(googlechrome.github.io)*
  > const encryptedMediaConfig = { type: &#x27;media-source&#x27;, // or &#x27;file&#x27; audio: { contentType: &#x27;audio/webm; codecs=opus&#x27;, channels: &#x27;2&#x27;, // audio channels used by the track bitrate: 132266, // number of bits used to e...
- [\[blink-dev\] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme](http://www.mail-archive.com/blink-dev@chromium.org/msg17068.html) *(mail-archive.com)*
  > &gt;&gt; &gt; On 7/27/26 12:51 p.m., Mike Taylor wrote: &gt;&gt; &gt; Thanks for doing the work to catch us up to other engines - LGTM1 &gt;&gt; On 7/24/26 5:04 p.m., Sangbaek Park wrote: &gt;&gt; &gt;&gt; Contact emails [email protected] &gt;&gt; &g...
- [MediaCapabilities: decodingInfo() 方法- Web API \| MDN - MDN 文档](https://mdn.org.cn/en-US/blog/rss.xml) *(mdn.org.cn)*
  > https://developer.mozilla.org/en-US/blog/exploring-the-broadcast-channel-api-for-cross-tab-communication/
- [\[blink-dev\] Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme](http://www.mail-archive.com/blink-dev@chromium.org/msg17057.html) *(mail-archive.com)*
  > Summary Adds the encryptionScheme attribute to the KeySystemTrackConfiguration dictionary used in navigator.mediaCapabilities.decodingInfo(). This <strong>allows web applications to query whether a specific encryption scheme (such as &#x27;cenc&#x27;...
- [\[blink-dev\] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme](http://www.mail-archive.com/blink-dev@chromium.org/msg17067.html) *(mail-archive.com)*
  > &gt; On 7/27/26 12:51 p.m., Mike Taylor wrote: &gt; &gt; Thanks for doing the work to catch us up to other engines - LGTM1 &gt; On 7/24/26 5:04 p.m., Sangbaek Park wrote: &gt; &gt; Contact emails [email protected] &gt; &gt; Specification &gt; https:/...
- [Media updates in Chrome 75 \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/media-updates-in-chrome-75) *(developer.chrome.com · 2019-07-22T00:00:00)*
  > const encryptedMediaConfig = { type: &#x27;media-source&#x27;, // or &#x27;file&#x27; video: { contentType: &#x27;video/webm; codecs=&quot;vp09.00.10.08&quot;&#x27;, width: 1920, height: 1080, bitrate: 2646242, // number of bits used to encode a seco...
- [Use MediaKeySystemAccess in wpt With Examples \| LambdaTest](https://www.lambdatest.com/automation-testing-advisor/javascript/wpt-MediaKeySystemAccess) *(lambdatest.com)*
  > Run the query again through our polyfill.300 return McEncryptionSchemePolyfill.polyfillDecodingInfo_.call(301 this, requestedConfiguration);302 }303 /​**304 * A polyfill for mediaCapabilities.decodingInfo to handle the305 * encryptionScheme field in ...
- [MediaCapabilities.decodingInfo for encrypted media - wpt.live](https://wpt.live/media-capabilities/decodingInfoEncryptedMedia.https.html) *(wpt.live)*
  > MediaCapabilities.decodingInfo for encrypted media
- [Media Capabilities - Decoding Info Sample](https://googlechrome.github.io/samples/media-capabilities/decoding-info.html) *(googlechrome.github.io)*
  > const mediaConfig = { type: &#x27;media-source&#x27;, // or &#x27;file&#x27; audio: { contentType: &#x27;audio/webm; codecs=opus&#x27;, channels: &#x27;2&#x27;, // audio channels used by the track bitrate: 132266, // number of bits used to encode a s...
- [MediaCapabilities.decodingInfo()](https://contest-server.cs.uchicago.edu/ref/JavaScript/developer.mozilla.org/en-US/docs/Web/API/MediaCapabilities/decodingInfo.html) *(contest-server.cs.uchicago.edu)*
  > The MediaCapabilities.decodingInfo() method, part of the Media Capabilities API, <strong>returns a promise with the tested media configuration&#x27;s mediaCapabilitiesInfo</strong>; this contains the three Boolean properties supported, smooth, and po...
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > Adds the encryptionScheme attribute to the KeySystemTrackConfiguration dictionary used in navigator.mediaCapabilities.decodingInfo().
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > Adds the encryptionScheme attribute to the KeySystemTrackConfiguration dictionary used in navigator.mediaCapabilities.decodingInfo().
- [Microsoft Edge 152 web platform release notes (Aug. 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/152) *(learn.microsoft.com)*
  > In addition to the contentType and robustness attributes, you can now use the encryptionScheme attribute when querying media capabilities by using navigator.mediaCapabilities.decodingInfo().
- [Intent to Experiment: MediaCapabilities: encrypted (EME) decodingInfo()](https://groups.google.com/a/chromium.org/g/blink-dev/c/eA9uG98td5U) *(groups.google.com)*
  > New encryption configuration inputs have been added to the decodingInfo() API. The trial will expose these, so sites using encrypted media (EME) can make optimal decisions when selecting media streams. We previously shipped mediaCapabilities.decoding...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme](http://www.mail-archive.com/blink-dev@chromium.org/msg17061.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4644898109259776`)*
  > [blink-dev] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme Mike Taylor Mon, 27 Jul 2026 09:52:33 -070...
- [media-capabilities/index.bs at main · w3c/media-capabilities](https://github.com/w3c/media-capabilities/blob/main/index.bs) *(github.com)* *(Cites: `https://w3c.github.io/media-capabilities/#dom-keysystemtrackconfiguration-encryptionscheme`)*
  > Repository: w3c/media-capabilities · Status: ED · ED: https://<strong>w3c.github.io/media-capabilities</strong>/ TR: https://www.w3.org/TR/media-capabilities/ Shortname: media-capabilities · Level: None · Group: mediawg · Editor: Jean-Yves ...
- [media-wg/index.html at main · w3c/media-wg](https://github.com/w3c/media-wg/blob/main/index.html) *(github.com)* *(Cites: `https://w3c.github.io/media-capabilities/#dom-keysystemtrackconfiguration-encryptionscheme`)*
  > &lt;a href=&quot;https://w3c.github.io/encrypted-media/&quot;&gt;Encrypted Media Extensions (EME)&lt;/a&gt;             &lt;/li&gt;             &lt;li&gt;               &lt;a href=&quot;https://<strong>w3c.github.io/media-capabilities</stro...
- [Intent to Ship: MediaCapabilities API for WebRTC](https://groups.google.com/a/chromium.org/g/blink-dev/c/loWlekYWswQ) *(groups.google.com)* *(Cites: `https://w3c.github.io/media-capabilities/#dom-keysystemtrackconfiguration-encryptionscheme`)*
  > https://github.com/drkron/media-capabilities/blob/webrtc_examples/explainer.md#webrtc https://github.com/w3c/media-capabilities/pull/191 · https://w3c.github.io/media-capabilities/ <strong>Extends the MediaCapabilities API to support WebRTC...

## 📚 Platform Documentation & Specifications

- [media-capabilities/index.bs at main · w3c/media-capabilities](https://github.com/w3c/media-capabilities/blob/main/index.bs) *(github.com)*
- [media-wg/index.html at main · w3c/media-wg](https://github.com/w3c/media-wg/blob/main/index.html) *(github.com)*
- [Media Capabilities](https://www.w3.org/TR/media-capabilities) *(w3.org)*
- [MediaCapabilities: decodingInfo() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaCapabilities/decodingInfo) *(developer.mozilla.org)*
- [MediaCapabilities - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/MediaCapabilities) *(developer.mozilla.org)*
- [content/files/en-us/web/api/mediacapabilities/decodinginfo/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/mediacapabilities/decodinginfo/index.md?plain=1) *(github.com)*
- [media-capabilities/explainer.md at main · w3c/media-capabilities](https://github.com/w3c/media-capabilities/blob/main/explainer.md) *(github.com)*
- [Using the Media Capabilities API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API) *(developer.mozilla.org)*
- [Media Capabilities API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Media_Capabilities_API) *(developer.mozilla.org)*
- [Navigator: mediaCapabilities property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/mediaCapabilities) *(developer.mozilla.org)*
- [edge-developer/microsoft-edge/web-platform/release-notes/152.md at main · MicrosoftDocs/edge-developer](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/152.md) *(github.com)*
- [Shaka unable to play live HLS stream on a Set Top Box · Issue #4536 · shaka-project/shaka-player](https://github.com/shaka-project/shaka-player/issues/4536) *(github.com)*
- [MediaCapabilities: encodingInfo() method](https://developer.mozilla.org/en-US/docs/Web/API/MediaCapabilities/encodingInfo) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 28 result(s) found across 7 planned queries — **28 verified relevant**
  - `"chromestatus.com/feature/4644898109259776" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"w3c.github.io/media-capabilities" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"MediaCapabilities.decodingInfo.encryptionScheme" API` — *Core feature API query* (8 returned)
  - `"MediaCapabilities.decodingInfo.encryptionScheme" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"navigator.mediacapabilities.decodinginfo()" OR "decodinginfo()" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"MediaCapabilities.decodingInfo.encryptionScheme" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"MediaCapabilities.decodingInfo.encryptionScheme" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 7 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 16 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4644898109259776)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4644898109259776)
- [Specification](https://w3c.github.io/media-capabilities/#dom-keysystemtrackconfiguration-encryptionscheme)
- [Chromium Tracking Bug](http://crbug.com/498284510)
