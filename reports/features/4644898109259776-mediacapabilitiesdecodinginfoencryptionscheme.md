# MediaCapabilities.decodingInfo.encryptionScheme

> **Report Week:** 2026-W41 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Adds the \`encryptionScheme\` attribute to the \`KeySystemTrackConfiguration\` dictionary used in \`navigator.mediaCapabilities.decodingInfo()\`. This allows web applications to query whether a specific encryption scheme (such as \`'cenc'\` or \`'cbcs'\`) is supported.   \*Note: This feature is already approved by the W3C spec and the underlying backend implementation in Chromium already exists. This launch is purely to plumb the \`encryptionScheme\` property from the Blink IDL layer to the existing backend.\*

### Motivation

Currently, Chromium only allows developers to query media capabilities based on codec and `robustness`. With the ecosystem's migration towards the `'cbcs'` encryption scheme, there is significant device fragmentation. Exposing `encryptionScheme` in `decodingInfo()` allows developers to accurately detect if their encrypted media will play. Since the backend support is already implemented, this simply completes the Blink-layer plumbing to match other browsers and the W3C spec.

## Ecosystem Status

- **Momentum:** High (250 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Chrome 152 enables the \`encryptionScheme\` attribute in \`KeySystemTrackConfiguration\` for \`navigator.mediaCapabilities.decodingInfo()\`, completing the Blink IDL plumbing for an established W3C Media Capabilities specification. This feature bridges a major gap for media web apps navigating device fragmentation during the streaming ecosystem's ongoing migration from legacy 'cenc' to 'cbcs' DRM schemes. The addition brings Chromium into alignment with Gecko, addressing long-standing developer requests for accurate pre-playback capability checks.

### Recommendations
- Actionable Advice: Web media engineering teams should immediately supply \`encryptionScheme: 'cbcs'\` or \`'cenc'\` inside \`keySystemConfiguration\` track objects when calling \`decodingInfo()\` as a progressive enhancement. For unsupported browsers like Safari, ensure you maintain fallback capability checks using \`navigator.requestMediaKeySystemAccess()\`.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme](http://www.mail-archive.com/blink-dev@chromium.org/msg17061.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme Mike Taylor Mon, 27 Jul 2026 09:52:33 -0700 (Also, c...
- [Intent to Ship: MediaCapabilities API for WebRTC](https://groups.google.com/a/chromium.org/g/blink-dev/c/loWlekYWswQ) *(groups.google.com)*
  > Intent to Ship: MediaCapabilities API for WebRTC Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: MediaCapabilities API for WebRTC 217 ...
- [Media Capabilities - Decoding Info EME Sample](https://googlechrome.github.io/samples/media-capabilities/decoding-info-eme) *(googlechrome.github.io)*
  > The Media Capabilities API <strong>allows websites to get more information about the decoding abilities of the device/system/browser</strong>.
- [MediaCapabilities: decodingInfo() 方法- Web API \| MDN - MDN 文档](https://mdn.org.cn/en-US/blog/rss.xml) *(mdn.org.cn)*
  > https://developer.mozilla.org/en-US/blog/exploring-the-broadcast-channel-api-for-cross-tab-communication/
- [Media updates in Chrome 75 \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/media-updates-in-chrome-75) *(developer.chrome.com · 2019-07-22T00:00:00)*
  > const encryptedMediaConfig = { type: &#x27;media-source&#x27;, // or &#x27;file&#x27; video: { contentType: &#x27;video/webm; codecs=&quot;vp09.00.10.08&quot;&#x27;, width: 1920, height: 1080, bitrate: 2646242, // number of bits used to encode a seco...
- [\[blink-dev\] Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme](http://www.mail-archive.com/blink-dev@chromium.org/msg17057.html) *(mail-archive.com)*
  > Summary Adds the encryptionScheme attribute to the KeySystemTrackConfiguration dictionary used in navigator.mediaCapabilities.decodingInfo(). This <strong>allows web applications to query whether a specific encryption scheme (such as &#x27;cenc&#x27;...
- [\[blink-dev\] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme](http://www.mail-archive.com/blink-dev@chromium.org/msg17068.html) *(mail-archive.com)*
  > &gt;&gt; &gt; On 7/27/26 12:51 p.m., Mike Taylor wrote: &gt;&gt; &gt; Thanks for doing the work to catch us up to other engines - LGTM1 &gt;&gt; On 7/24/26 5:04 p.m., Sangbaek Park wrote: &gt;&gt; &gt;&gt; Contact emails [email protected] &gt;&gt; &g...
- [MediaCapabilities.decodingInfo for encrypted media - wpt.live](https://wpt.live/media-capabilities/decodingInfoEncryptedMedia.https.html) *(wpt.live)*
  > MediaCapabilities.decodingInfo for encrypted media
- [Media Capabilities - Decoding Info Sample](https://googlechrome.github.io/samples/media-capabilities/decoding-info.html) *(googlechrome.github.io)*
  > const mediaConfig = { type: &#x27;media-source&#x27;, // or &#x27;file&#x27; audio: { contentType: &#x27;audio/webm; codecs=opus&#x27;, channels: &#x27;2&#x27;, // audio channels used by the track bitrate: 132266, // number of bits used to encode a s...
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > Adds the encryptionScheme attribute to the KeySystemTrackConfiguration dictionary used in navigator.mediaCapabilities.decodingInfo().
- [Microsoft Edge 152 web platform release notes (Aug. 27, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/152) *(learn.microsoft.com · 2026-08-27T00:00:00)*
  > In addition to the contentType and robustness attributes, you can now use the encryptionScheme attribute when querying media capabilities by using navigator.mediaCapabilities.decodingInfo().
- [\[blink-dev\] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme](http://www.mail-archive.com/blink-dev@chromium.org/msg17067.html) *(mail-archive.com)*
  > &gt; &gt; This feature is already approved by the W3C spec and the underlying &gt; backend implementation in Chromium already exists. This launch is purely to &gt; plumb the encryptionScheme property from the Blink IDL layer to the &gt; existing back...
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > Adds the encryptionScheme attribute to the KeySystemTrackConfiguration dictionary used in navigator.mediaCapabilities.decodingInfo().

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme](http://www.mail-archive.com/blink-dev@chromium.org/msg17061.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4644898109259776`)*
  > [blink-dev] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme Mike Taylor Mon, 27 Jul 2026 09:52:33 -070...
- [media-capabilities/index.bs at main · w3c/media-capabilities](https://github.com/w3c/media-capabilities/blob/main/index.bs) *(github.com)* *(Cites: `https://w3c.github.io/media-capabilities/#dom-keysystemtrackconfiguration-encryptionscheme`)*
  > media-capabilities/index.bs at main · w3c/media-capabilities · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your ...
- [media-wg/index.html at main · w3c/media-wg](https://github.com/w3c/media-wg/blob/main/index.html) *(github.com)* *(Cites: `https://w3c.github.io/media-capabilities/#dom-keysystemtrackconfiguration-encryptionscheme`)*
  > media-wg/index.html at main · w3c/media-wg · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You signe...
- [Intent to Ship: MediaCapabilities API for WebRTC](https://groups.google.com/a/chromium.org/g/blink-dev/c/loWlekYWswQ) *(groups.google.com)* *(Cites: `https://w3c.github.io/media-capabilities/#dom-keysystemtrackconfiguration-encryptionscheme`)*
  > Intent to Ship: MediaCapabilities API for WebRTC Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: MediaCapabilities API for W...

## 📚 Platform Documentation & Specifications

- [media-capabilities/index.bs at main · w3c/media-capabilities](https://github.com/w3c/media-capabilities/blob/main/index.bs) *(github.com)*
- [media-wg/index.html at main · w3c/media-wg](https://github.com/w3c/media-wg/blob/main/index.html) *(github.com)*
- [Media Capabilities](https://www.w3.org/TR/media-capabilities) *(w3.org)*
- [MediaCapabilities: decodingInfo() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaCapabilities/decodingInfo) *(developer.mozilla.org)*
- [content/files/en-us/web/api/mediacapabilities/decodinginfo/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/mediacapabilities/decodinginfo/index.md?plain=1) *(github.com)*
- [MediaCapabilities - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/MediaCapabilities) *(developer.mozilla.org)*
- [media-capabilities/explainer.md at main · w3c/media-capabilities](https://github.com/w3c/media-capabilities/blob/main/explainer.md) *(github.com)*
- [translated-content/files/ja/web/api/mediacapabilities/decodinginfo/index.md at main · mdn/translated-content](https://github.com/mdn/translated-content/blob/main/files/ja/web/api/mediacapabilities/decodinginfo/index.md?plain=1) *(github.com)*
- [Using the Media Capabilities API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API) *(developer.mozilla.org)*
- [Navigator: mediaCapabilities property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/mediaCapabilities) *(developer.mozilla.org)*
- [Media Capabilities API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Media_Capabilities_API) *(developer.mozilla.org)*
- [edge-developer/microsoft-edge/web-platform/release-notes/152.md at main · MicrosoftDocs/edge-developer](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/152.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 56 result(s) found across 11 planned queries — **25 verified relevant**
  - `"chromestatus.com/feature/4644898109259776" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"w3c.github.io/media-capabilities" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"MediaCapabilities.decodingInfo.encryptionScheme" API` — *Core feature API query* (8 returned)
  - `"MediaCapabilities.decodingInfo.encryptionScheme" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"navigator.mediacapabilities.decodinginfo()" OR "decodinginfo()" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"MediaCapabilities.decodingInfo.encryptionScheme" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"MediaCapabilities.decodingInfo.encryptionScheme" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"decodingInfo" "encryptionScheme" ("cbcs" OR "cenc")` — *Find real-world JavaScript code snippets and API usage patterns passing encryptionScheme within mediaCapabilities.decodingInfo.* (8 returned)
  - `"mediaCapabilities" "encryptionScheme" ("cbcs" OR "cenc") (tutorial OR guide OR detect)` — *Discover developer tutorials and practical guides explaining how to detect cbcs and cenc DRM capabilities across browsers.* (8 returned)
  - `("shaka-player" OR "dash.js" OR "hls.js") "encryptionScheme" "decodingInfo"` — *Identify adoption, pull requests, and compatibility handling in major web media player engines.* (8 returned)
  - `"encryptionScheme" "KeySystemTrackConfiguration" (site:groups.google.com/a/chromium.org/g/blink-dev OR site:github.com/w3c)` — *Track standards discussions, Intent-to-Ship announcements, and browser vendor consensus on Blink-dev and W3C repositories.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
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
