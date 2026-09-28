# MediaCapabilities.decodingInfo.encryptionScheme

> **Report Week:** 2026-W40 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Adds the \`encryptionScheme\` attribute to the \`KeySystemTrackConfiguration\` dictionary used in \`navigator.mediaCapabilities.decodingInfo()\`. This allows web applications to query whether a specific encryption scheme (such as \`'cenc'\` or \`'cbcs'\`) is supported.   \*Note: This feature is already approved by the W3C spec and the underlying backend implementation in Chromium already exists. This launch is purely to plumb the \`encryptionScheme\` property from the Blink IDL layer to the existing backend.\*

### Motivation

Currently, Chromium only allows developers to query media capabilities based on codec and `robustness`. With the ecosystem's migration towards the `'cbcs'` encryption scheme, there is significant device fragmentation. Exposing `encryptionScheme` in `decodingInfo()` allows developers to accurately detect if their encrypted media will play. Since the backend support is already implemented, this simply completes the Blink-layer plumbing to match other browsers and the W3C spec.

## Ecosystem Status

- **Momentum:** High (200 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** MediaCapabilities.decodingInfo.encryptionScheme is currently Enabled by default in Chrome 152. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHVIjvTvrhqPXBjcToTgsgF-DMX9WrxBH1v8iOXpjTVsIPDZWk9q2uAcy5z_ilfMDYmmURx0NpVWc5UiWcvwSsayRE_dowTHOo6dw0HJV5oDufLGC2jH_eyhnl-jk9A) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The `MediaCapabilities.decodingInfo.encryptionScheme` update adds the `encryptionScheme` attribute to the `KeySystemTrackConfiguration` dictionary within `navigator.mediaCapabilities.decodingInfo()`.   * **Why it matters:*
- [website-files.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGU6h2wMi9pCAktYmeKWVO88UEueh2ZqSwh0ePJflp9xYfDWIS_T5zGiqnAmqNX0g-YYab6vZ16a15kvDNifXbSyVrL2UClQSXhKCHRbeL9DXR0woeqqWS31QRNOKUpnkEoeahmIgKd2BkkvEpESzp-4uib5P5md2BNuXnBmS54kauJIllaE2BSp5Dr629dVib7cY_r9yZiijBCwWMxtxpYfGW7tVcyiy1snbiOD5HX3EfiIR0kekzPfa5f7tbXBi6knBvh9c0eNrCI2OmmAA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The `MediaCapabilities.decodingInfo.encryptionScheme` update adds the `encryptionScheme` attribute to the `KeySystemTrackConfiguration` dictionary within `navigator.mediaCapabilities.decodingInfo()`.   * **Why it matters:*
- [wpt.live](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE9jO7K_r0rHn_ByBmxCyTnohw5l2syrqpwHzdBQhERWDitOUuP-G4eGxpcEN4nxB9Bg7Z6z59b0anH_3XceRZePOhQ8VX_9qDjCz7hzgED171XYGAyC_JYs9XrCNctc3nYWe8Z7-ntpc0paPoAdVGixOydcD--1Z-Aw-Mzp0qS) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The `MediaCapabilities.decodingInfo.encryptionScheme` update adds the `encryptionScheme` attribute to the `KeySystemTrackConfiguration` dictionary within `navigator.mediaCapabilities.decodingInfo()`.   * **Why it matters:*
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGZ_Bd-1w9HWEHTAKhRfJS3wNA7b3rPuWiwTMIvtquw-K433bYu17O7nlB9nrEI1njQ0Q6ALIYRd9bW8Y2u93ulzQsqgXgN1qTaoYNkWq4l23w7hAXzJp_ApahZhpSeOw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The `MediaCapabilities.decodingInfo.encryptionScheme` update adds the `encryptionScheme` attribute to the `KeySystemTrackConfiguration` dictionary within `navigator.mediaCapabilities.decodingInfo()`.   * **Why it matters:*
- [forasoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHFDQ6V9mDqYjctCvxCLpkswaPxGyrgh7alac3d0huZXUGcx6d6WXObuS--CHEGzT2LCeiw_ab1oK4YoTUs9xSD1gl3B5kMDigciHJodi9-3NZi_jnvLNrnqU5Bh4KP6rhQXHO_t256jxUqqZEgYF8we_7uw265_slFqYG26i_NkvjtYoDc) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The `MediaCapabilities.decodingInfo.encryptionScheme` update adds the `encryptionScheme` attribute to the `KeySystemTrackConfiguration` dictionary within `navigator.mediaCapabilities.decodingInfo()`.   * **Why it matters:*
- [\[blink-dev\] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme](http://www.mail-archive.com/blink-dev@chromium.org/msg17061.html) *(mail-archive.com)*
  > This launch simply flips the flag to stable to catch up. Requires code in //chrome? False Tracking bug https://crbug.com/498284510 &lt;https://crbug.com/498284510&gt; Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/featur...
- [\[blink-dev\] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme](http://www.mail-archive.com/blink-dev@chromium.org/msg17068.html) *(mail-archive.com)*
  > &gt;&gt; &gt; On 7/27/26 12:51 p.m., Mike Taylor wrote: &gt;&gt; &gt; Thanks for doing the work to catch us up to other engines - LGTM1 &gt;&gt; On 7/24/26 5:04 p.m., Sangbaek Park wrote: &gt;&gt; &gt;&gt; Contact emails [email protected] &gt;&gt; &g...
- [\[blink-dev\] Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme](http://www.mail-archive.com/blink-dev@chromium.org/msg17057.html) *(mail-archive.com)*
  > Summary Adds the encryptionScheme attribute to the KeySystemTrackConfiguration dictionary used in navigator.mediaCapabilities.decodingInfo(). This <strong>allows web applications to query whether a specific encryption scheme (such as &#x27;cenc&#x27;...
- [\[blink-dev\] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme](http://www.mail-archive.com/blink-dev@chromium.org/msg17067.html) *(mail-archive.com)*
  > &gt; On 7/27/26 12:51 p.m., Mike Taylor wrote: &gt; &gt; Thanks for doing the work to catch us up to other engines - LGTM1 &gt; On 7/24/26 5:04 p.m., Sangbaek Park wrote: &gt; &gt; Contact emails [email protected] &gt; &gt; Specification &gt; https:/...
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > Adds the encryptionScheme attribute to the KeySystemTrackConfiguration dictionary used in navigator.mediaCapabilities.decodingInfo().
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > Adds the encryptionScheme attribute to the KeySystemTrackConfiguration dictionary used in navigator.mediaCapabilities.decodingInfo().
- [Microsoft Edge 152 web platform release notes (Aug. 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/152) *(learn.microsoft.com)*
  > In addition to the contentType and robustness attributes, you can now use the encryptionScheme attribute when querying media capabilities by using navigator.mediaCapabilities.decodingInfo().
- [Vega 0.22 Widevine CDM rejects encryptionScheme: 'cbcs' - Bug Reports - Amazon Developer Community](https://community.amazondeveloper.com/t/vega-0-22-widevine-cdm-rejects-encryptionscheme-cbcs/28383) *(community.amazondeveloper.com · 2026-05-22T14:05:45)*
  > Platform: Vega 0.22, @amazon-devices/react-native-w3cmedia 2.1.99, Shaka 4.16.13 (per the official integration guide). When Shaka calls requestMediaKeySystemAccess (or mediaCapabilities.decodingInfo) for com.widevine.alpha with an encryptionScheme: &...
- [Common Encryption (CENC) — Unified Streaming](https://docs.unified-streaming.com/documentation/drm/common-encryption.html) *(docs.unified-streaming.com)*
  > By default, encryption for DASH output uses the Common Encryption &#x27;cenc&#x27; scheme. To override this behaviour you can use the commonEncryptionScheme attribute for a &lt;ContentKey&gt; element in a CPIX document. For more information, see CPIX...
- [\[blink-dev\] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme](http://www.mail-archive.com/blink-dev@chromium.org/msg17060.html) *(mail-archive.com)*
  > Summary Adds the |encryptionScheme| attribute to the |KeySystemTrackConfiguration| dictionary used in |navigator.mediaCapabilities.decodingInfo()|. This <strong>allows web applications to query whether a specific encryption scheme (such as &#x27;cenc...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme](http://www.mail-archive.com/blink-dev@chromium.org/msg17061.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4644898109259776`)*
  > This launch simply flips the flag to stable to catch up. Requires code in //chrome? False Tracking bug https://crbug.com/498284510 &lt;https://crbug.com/498284510&gt; Link to entry on the Chrome Platform Status https://<strong>chromestatus....

## 📚 Platform Documentation & Specifications

- [Media Capabilities](https://www.w3.org/TR/media-capabilities) *(w3.org)*
- [edge-developer/microsoft-edge/web-platform/release-notes/152.md at main · MicrosoftDocs/edge-developer](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/152.md) *(github.com)*
- [translated-content/files/ja/web/api/mediacapabilities/decodinginfo/index.md at main · mdn/translated-content](https://github.com/mdn/translated-content/blob/main/files/ja/web/api/mediacapabilities/decodinginfo/index.md?plain=1) *(github.com)*
- [shaka-player/lib/polyfill/eme\_encryption\_scheme.js at main · shaka-project/shaka-player](https://github.com/shaka-project/shaka-player/blob/main/lib/polyfill/eme_encryption_scheme.js) *(github.com)*
- [MediaCapabilities: encodingInfo() method](https://developer.mozilla.org/en-US/docs/Web/API/MediaCapabilities/encodingInfo) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 48 result(s) found across 11 planned queries — **14 verified relevant**
  - `"chromestatus.com/feature/4644898109259776" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"w3c.github.io/media-capabilities" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"MediaCapabilities.decodingInfo.encryptionScheme" API` — *Core feature API query* (8 returned)
  - `"MediaCapabilities.decodingInfo.encryptionScheme" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"navigator.mediacapabilities.decodinginfo()" OR "decodinginfo()" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"MediaCapabilities.decodingInfo.encryptionScheme" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"MediaCapabilities.decodingInfo.encryptionScheme" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"mediaCapabilities.decodingInfo" "encryptionScheme" ("cbcs" OR "cenc")` — *Find JavaScript code examples and WebIDL usage showing how encryptionScheme is queried inside keySystemConfiguration for Media Capabilities.* (8 returned)
  - `"mediaCapabilities" "encryptionScheme" ("cbcs" OR "cenc") (tutorial OR guide OR DRM)` — *Locate developer tutorials, blog posts, and streaming media guides explaining how to detect cbcs and cenc DRM scheme support.* (8 returned)
  - `("Shaka Player" OR "video.js" OR "dash.js" OR "EME") "decodingInfo" "encryptionScheme"` — *Discover how mainstream open-source web media players and streaming libraries are adopting encryptionScheme in capability checks.* (8 returned)
  - `"MediaCapabilities" "encryptionScheme" ("Intent to Ship" OR "blink-dev" OR "chromestatus")` — *Track Chromium intent-to-ship threads, standardization sentiment, and platform discussion regarding the Blink layer IDL exposure.* (2 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **5 verified relevant**
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
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4644898109259776)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4644898109259776)
- [Specification](https://w3c.github.io/media-capabilities/#dom-keysystemtrackconfiguration-encryptionscheme)
- [Chromium Tracking Bug](http://crbug.com/498284510)
