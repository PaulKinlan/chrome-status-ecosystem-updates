# MediaCapabilities.decodingInfo.encryptionScheme

> **Report Week:** 2026-W37 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Adds the `encryptionScheme` attribute to the `KeySystemTrackConfiguration` dictionary used in `navigator.mediaCapabilities.decodingInfo()`. This allows web applications to query whether a specific encryption scheme (such as `'cenc'` or `'cbcs'`) is supported. 

*Note: This feature is already approved by the W3C spec and the underlying backend implementation in Chromium already exists. This launch is purely to plumb the `encryptionScheme` property from the Blink IDL layer to the existing backend.*

### Motivation

Currently, Chromium only allows developers to query media capabilities based on codec and `robustness`. With the ecosystem's migration towards the `'cbcs'` encryption scheme, there is significant device fragmentation. Exposing `encryptionScheme` in `decodingInfo()` allows developers to accurately detect if their encrypted media will play. Since the backend support is already implemented, this simply completes the Blink-layer plumbing to match other browsers and the W3C spec.

## Ecosystem Status

- **Momentum:** High (100 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Adding `encryptionScheme` to `MediaCapabilities.decodingInfo()` completes the Blink IDL plumbing for a capability that was already supported in Chromium's backend and standardized in the W3C Media Capabilities specification. This update enables web applications to query support for specific DRM encryption schemes like 'cbcs' and 'cenc' before playback, directly addressing persistent multi-DRM device fragmentation. The feature brings Chromium into full alignment with Firefox and standard web video pipeline expectations.

### Recommendations
- Actionable Advice: Web media engineering teams should immediately pass `encryptionScheme` ('cbcs' or 'cenc') into `decodingInfo()` queries within their adaptive bitrate (ABR) and DRM selection logic. Use progressive enhancement or fallback to standard EME `requestMediaKeySystemAccess` scheme queries on legacy browser versions.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [[blink-dev] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme](http://www.mail-archive.com/blink-dev@chromium.org/msg17061.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme Mike Taylor Mon, 27 Jul 2026 09:52:33 -0700 (Also, c...
- [[blink-dev] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme](http://www.mail-archive.com/blink-dev@chromium.org/msg17068.html) *(mail-archive.com)*
  > &gt;&gt; &gt; On 7/27/26 12:51 p.m., Mike Taylor wrote: &gt;&gt; &gt; Thanks for doing the work to catch us up to other engines - LGTM1 &gt;&gt; On 7/24/26 5:04 p.m., Sangbaek Park wrote: &gt;&gt; &gt;&gt; Contact emails [email protected] &gt;&gt; &g...
- [Use MediaKeySystemAccess in wpt With Examples | LambdaTest](https://www.lambdatest.com/automation-testing-advisor/javascript/wpt-MediaKeySystemAccess) *(lambdatest.com)*
  > Run the query again through our polyfill.300 return McEncryptionSchemePolyfill.polyfillDecodingInfo_.call(301 this, requestedConfiguration);302 }303 /​**304 * A polyfill for mediaCapabilities.decodingInfo to handle the305 * encryptionScheme field in ...
- [Chrome 152 | Release notes | Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > Adds the encryptionScheme attribute to the KeySystemTrackConfiguration dictionary used in navigator.mediaCapabilities.decodingInfo().
- [[blink-dev] Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme](http://www.mail-archive.com/blink-dev@chromium.org/msg17057.html) *(mail-archive.com)*
  > Summary Adds the encryptionScheme attribute to the KeySystemTrackConfiguration dictionary used in navigator.mediaCapabilities.decodingInfo(). This <strong>allows web applications to query whether a specific encryption scheme (such as &#x27;cenc&#x27;...
- [Microsoft Edge 152 web platform release notes (Aug. 2026) - Microsoft Edge Developer documentation | Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/152) *(learn.microsoft.com)*
  > In addition to the contentType and robustness attributes, you can now use the encryptionScheme attribute when querying media capabilities by using navigator.mediaCapabilities.decodingInfo().
- [Chrome 152 beta | Blog | Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > Adds the encryptionScheme attribute to the KeySystemTrackConfiguration dictionary used in navigator.mediaCapabilities.decodingInfo().
- [[blink-dev] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme](http://www.mail-archive.com/blink-dev@chromium.org/msg17067.html) *(mail-archive.com)*
  > &gt; On 7/27/26 12:51 p.m., Mike Taylor wrote: &gt; &gt; Thanks for doing the work to catch us up to other engines - LGTM1 &gt; On 7/24/26 5:04 p.m., Sangbaek Park wrote: &gt; &gt; Contact emails [email protected] &gt; &gt; Specification &gt; https:/...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme](http://www.mail-archive.com/blink-dev@chromium.org/msg17061.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4644898109259776`)*
  > [blink-dev] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme Mike Taylor Mon, 27 Jul 2026 09:52:33 -070...

## 📚 Platform Documentation & Specifications

- [Media Capabilities](https://www.w3.org/TR/media-capabilities) *(w3.org)*
- [edge-developer/microsoft-edge/web-platform/release-notes/152.md at main · MicrosoftDocs/edge-developer](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/152.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 28 result(s) found across 7 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/4644898109259776" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"w3c.github.io/media-capabilities" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"MediaCapabilities.decodingInfo.encryptionScheme" API` — *Core feature API query* (8 returned)
  - `"MediaCapabilities.decodingInfo.encryptionScheme" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"navigator.mediacapabilities.decodinginfo()" OR "decodinginfo()" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"MediaCapabilities.decodingInfo.encryptionScheme" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"MediaCapabilities.decodingInfo.encryptionScheme" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
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
