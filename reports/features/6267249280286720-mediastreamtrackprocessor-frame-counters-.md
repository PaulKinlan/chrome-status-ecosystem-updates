# MediaStreamTrackProcessor frame counters 

> **Report Week:** 2026-W37 | **Milestone:** Chrome 150 | **Category:** Enabled by default

## Overview

Adds discardedFrames and totalFrames attributes to the MediaStreamTrackProcessor interface. These counters allow web developers to monitor the health of their media processing pipelines by tracking the number of frames received and dropped by the processor.

## Ecosystem Status

- **Momentum:** High (230 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** MediaStreamTrackProcessor frame counters  is currently Enabled by default in Chrome 150. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 150. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [MediaStreamTrackProcessor frame counters](https://github.com/WebKit/standards-positions/issues/679) [open]
- **Mozilla:** [MediaStreamTrackProcessor frame counters](https://github.com/mozilla/standards-positions/issues/1417) [open]

## 📰 Ecosystem Blogs & Articles

- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGvg3rsyz160HwFxoOaippO6saBPc8wRmLQcvszQOhIozZj4VMvKH7yoDoGlvHwO09BV0jHpjnjHDyzqwigQADu6f1rZazUkm5-wEk0Fj48ApGWxUgJcCDjmFYfgweDk0HhItc=) *(vertexaisearch.cloud.google.com)*
  > ### Overview  **MediaStreamTrackProcessor Frame Counters** introduce two read-only properties—`totalFrames` and `discardedFrames`—to the `MediaStreamTrackProcessor` interface, defined in the W3C specification *MediaStreamTrack Insertable Media Proces
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGSNUdhPnKVyi6SvRbdLfCNHllz6FyShdIYOXHYYyjMp6BFg7-L44_vhy32NEwji4AEcJbp7-DhOg_g885mR4NMGrjG32V9MWsX7tfRTdsMvIwoSqQpyZcgCklFjMI3DcZqhSnZvhpRWGAT6Fxi5lafskRJfc6B9G9xs9qPy30ERJgkqlq7aNV4Iz6siB1y2qqsgvxNHoXWRKspSlN-DOwIWPkMR8-ugBG1uVBAjA==) *(vertexaisearch.cloud.google.com)*
  > content/files/en-us/web/api/mediastreamtrackprocessor/discardedframes/index.md at main · mdn/content · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or w...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEMe81fy1RYQHfHngfus1I8gsNSMkZQXjVjd8HaCmRe5T6KPqSNv6gTegM6kpXSuTdt3-ybf8WeNw72N4U9aM7l_XiC3RjQWLYeCWuMUJasCdJE6K7DZgzLM62et7rDveKwyUdWyCar) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGY1CUPaaAp_F9TrIw2gyjdjHy9orttezGnyaNyFHGftcCVk805BsjzzX1UiI0tucmUhlKZ0a-2xVunyhCAHoJVYPzAZz4HU84UiO2aMoeGDvldWZvlAU8G0-mc1PnJkEIxKQL4cMentjC3cnTq7tC0X776AL5XSQ1GEYi1Ql1yOw==) *(vertexaisearch.cloud.google.com)*
  > MediaStreamTrackProcessor - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs MediaStreamTrackProcessor Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) MediaStreamTrackProcessor ...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFDDpI4ELKzsg9MlBwwQs-aFIkFfeo7bWBzc6DLZJu2e_MXI6gk-cickVT9PTjlddYCdjMA8O2gmK03JfIfhNO5FPTGKxOJSGvIwUqks_1ewMSj3qGHwXQrcLoZHO7xwbf2Rqz1Q9VxS2HBquGMOQ==) *(vertexaisearch.cloud.google.com)*
  > MediaStreamTrack Statistics · Issue #260 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your s...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHVe40PS1oCjvtEIckPlOE7IM_nFoWh0e-VGDbVKT_slAZBk-TNWmRmVAHm_wgDYlwCcaGNmZtrxcNb_iyoZNF1xpC5WVBzst-NBUnWeOhqvok_slVMxaW_KC-KxewiiABrIJDmF-6im4xTdJBIgg==) *(vertexaisearch.cloud.google.com)*
  > MediaStreamTrackProcessor frame counters · Issue #679 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to r...
- [basewatch.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEBy1TSawoxvT5QiPoD80hisu4FthuxR3TxNE7WlH2BaKmQSNaPbohq36jMMTO96xr_W3_xFeHu-X5QK-rswghlG9n9_5uxyDulDH_yeC6vFqrnUwwh3HvjE4YoIGsxU2erW4afzSgq_waogr_fhd4oUynSHbv9hRWF7nObK5zSoNJSIt5E) *(vertexaisearch.cloud.google.com)*
  > BaseWatch — Track CSS & Browser Feature Support, Get Baseline Alerts Edit with
- [Re: [blink-dev] Re: Intent to Ship: MediaStreamTrackProcessor frame counters](http://www.mail-archive.com/blink-dev@chromium.org/msg16690.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: MediaStreamTrackProcessor frame counters Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: MediaStreamTrackProcessor frame counters 'Guido Urdaneta' via blink-dev Sat, 06 Jun 2026 01:04:05 -...
- [Introduction to the WebCodec API - Real Time Video Encoding and Display - DEV Community](https://dev.to/ethand91/introduction-to-the-webcodec-api-real-time-video-encoding-and-display-1b54) *(dev.to · 2024-10-09T07:56:17)*
  > By using WebCodec, you can gain ... or live streaming. ... MediaStreamTrackProcessor is <strong>used to break down a video stream into individual frames that can be processed</strong>....
- [Introduction to the WebCodec API - Real Time Video Encoding and Display](https://ethan91.hashnode.dev/introduction-to-the-webcodec-api-real-time-video-encoding-and-display) *(ethan91.hashnode.dev · 2024-09-16T05:40:13)*
  > By using WebCodec, you can gain ... or live streaming. ... MediaStreamTrackProcessor is <strong>used to break down a video stream into individual frames that can be processed</strong>....
- [Understanding Mediastreamtrackgenerator: A Guide For Developers – peerdh.com](https://peerdh.com/blogs/programming-insights/understanding-mediastreamtrackgenerator-a-guide-for-developers) *(peerdh.com · 2024-09-30T23:46:31)*
  > Customizable Media Properties: The API allows you to set various properties for the media tracks, such as frame rate, resolution, and audio sample rate.
- [WebRTC Media Stream API: Complete Developer Guide](https://antmedia.io/webrtc-media-stream-api) *(antmedia.io · 2025-11-18T16:46:35)*
  > function optimize<strong>FrameRate(track) { const settings = track.getSettings(); const capabilities = track.getCapabilities(); track.applyConstraints({ frameRate: { ideal: Math.min(30, capabilities.frameRate.max) } }); }</strong>
- [MediaTrackConstraints.frameRate - Web APIs - W3cubDocs](https://docs.w3cub.com/dom/mediatrackconstraints/framerate) *(docs.w3cub.com)*
  > If this value is a number, the user agent will attempt to obtain media whose frame rate is as close as possible to this number given the capabilities of the hardware and the other constraints specified. Otherwise, the value of this ConstrainDouble wi...
- [Understanding Mediastreamtrackprocessor: A Comprehensive Guide – peerdh.com](https://peerdh.com/blogs/programming-insights/understanding-mediastreamtrackprocessor-a-comprehensive-guide) *(peerdh.com · 2024-09-26T07:21:12)*
  > The MediaStreamTrackProcessor is a powerful tool in the Web API that <strong>allows developers to manipulate media streams in real-time</strong>. This API is particularly useful for applications that require audio or video processing, such as video c...
- [Microsoft Edge 150 web platform release notes (Jul. 2026) - Microsoft Edge Developer documentation | Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/150) *(learn.microsoft.com · 2026-07-02T00:00:00)*
  > <strong>The discardedFrames and totalFrames attributes are now available on the MediaStreamTrackProcessor interface</strong>. These counters allow you to monitor the health of your media processing pipeline by tracking: The number of frames that were...
- [Chrome 150 beta | Blog | Chrome for Developers](https://developer.chrome.com/blog/chrome-150-beta) *(developer.chrome.com · 2026-06-03T00:00:00)*
  > <strong>Adds discardedFrames and totalFrames attributes to the MediaStreamTrackProcessor interface</strong>. These counters let web developers monitor the health of their media processing pipelines by tracking the number of frames received and droppe...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: [blink-dev] Re: Intent to Ship: MediaStreamTrackProcessor frame counters](http://www.mail-archive.com/blink-dev@chromium.org/msg16690.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6267249280286720`)*
  > Re: [blink-dev] Re: Intent to Ship: MediaStreamTrackProcessor frame counters Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: MediaStreamTrackProcessor frame counters 'Guido Urdaneta' via blink-dev Sat, 06 Jun 2026 ...
- [MediaStreamTrackProcessor and VideoTrackGenerator · Issue #1078 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1078) *(github.com · 2024-09-26T17:36:32)* *(Cites: `https://www.w3.org/TR/mediacapture-transform/#track-processor-interface`)*
  > Specification or proposal URL (if available): https://<strong>www.w3.org/TR/mediacapture-transform</strong>

## 📚 Platform Documentation & Specifications

- [MediaStreamTrackProcessor and VideoTrackGenerator · Issue #1078 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1078) *(github.com)*
- [Unbundling MediaStreamTrackProcessor and VideoTrackGenerator - Advancing WebRTC](https://blog.mozilla.org/webrtc/unbundling-mediastreamtrackprocessor-and-videotrackgenerator) *(blog.mozilla.org)*
- [MediaTrackConstraints: frameRate property - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/frameRate) *(developer.mozilla.org)*
- [edge-developer/microsoft-edge/web-platform/release-notes/150.md at main · MicrosoftDocs/edge-developer](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/150.md) *(github.com)*
- [MediaStreamTrackProcessor](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackProcessor) *(developer.mozilla.org)*
- [MediaStreamTrackProcessor: MediaStreamTrackProcessor() constructor](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackProcessor/MediaStreamTrackProcessor) *(developer.mozilla.org)*
- [MediaStreamTrackProcessor: discardedFrames property](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackProcessor/discardedFrames) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 22 result(s) found across 6 planned queries — **13 verified relevant**
  - `"chromestatus.com/feature/6267249280286720" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"www.w3.org/TR/mediacapture-transform" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"MediaStreamTrackProcessor frame counters " API` — *Core feature API query* (0 returned)
  - `"MediaStreamTrackProcessor frame counters " (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"MediaStreamTrackProcessor frame counters " (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (4 returned)
  - `"MediaStreamTrackProcessor frame counters " (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 7 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6267249280286720)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6267249280286720)
- [Specification](https://www.w3.org/TR/mediacapture-transform/#track-processor-interface)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/513481577)
