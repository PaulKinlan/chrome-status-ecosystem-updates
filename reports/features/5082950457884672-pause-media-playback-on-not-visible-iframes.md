# Pause media playback on not-visible iframes

> **Report Week:** 2026-W39 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Adds a "media-playback-while-not-visible" permission policy to allow embedders to pause audible media playback of embedded iframes which are currently hidden - i.e. "display" property set to "none"; "visibility" property set to "hidden"; or zero-area (width or height equal to 0). While hidden, attempts made by the embedded iframe to render audible media will be blocked. When the frame is shown again the prohibitions should be lifted. This should allow developers to build more user-friendly experiences and to also improve the performance by letting the browser handle the playback of content that is not visible to users.

### Motivation

Web applications that host embedded media content via iframes may wish to respond to application input by temporarily hiding the media content. These applications may not want to unload the entire iframe when it's not rendered since it could generate user-perceptible performance and experience issues when showing the media content again. At the same time, the user could have a negative experience if the media continues to play and emit audio when not rendered. This proposal aims to provide web applications with the ability to control embedded media content in such a way that guarantees their users have a good experience when the iframe's render status is changed.

## Ecosystem Status

- **Momentum:** High (445 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Spearheaded by Microsoft and shipping enabled by default in Chromium (Chrome 155), the 'media-playback-while-not-visible' Permission Policy addresses a long-standing web annoyance by pausing media in hidden or zero-area iframes without destroying the DOM context. The API transitions proprietary power-saving heuristics into an explicit web standard hosted within the WICG. Engine consensus is highly promising, backed by an officially positive signal from Mozilla and active standards tracking in WebKit.

### Recommendations
- Actionable Advice: Teams managing embedded third-party media or ads should adopt the policy progressively by adding allow="media-playback-while-not-visible 'none'" to their iframe tags. Because full cross-browser interoperability is pending WebKit and Gecko engine releases, retain postMessage-based pause triggers or fallback unmount handlers for legacy user agents.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @padenot: "This is \`positive\`. As mentioned in a call to Gabriel, Gecko currently has complex logic to achieve this, for power efficiency reasons, and it would b..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** ["media-playback-while-not-visible" Permission Policy](https://github.com/WebKit/standards-positions/issues/409) [open]
- **Mozilla:** ["media-playback-while-not-visible" Permission Policy](https://github.com/mozilla/standards-positions/issues/1082) [closed]

## 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEdaNy6roSMg-_MQ4ce1an2_FyZW3-2owJ6LXodyoksiyeiXETjMqmfqycBfHB7Yv65KHCROGqd34dELQWBcGVqVU37XAtaTR_zmyB9YNuMMeaaQavPa_B_IoJkMesLecxXo5OKWVa8Mt2x51oiY-CGN327aWpAn-Q=) *(vertexaisearch.cloud.google.com)*
  > media-playback-while-not-visible Permission Policy · Issue #1387 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab o...
- [windowslatest.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEJR6nPRNnzVsDSCZ4M54K1CIsaGsM4aTY5s7s3ohzgfZ5SC1xfLj8HWO8kmohtHF3ouruLJOZ_cgGoW69iFjgLF60NFrg6zwzM9a-Gt4gtyR-OqtC9cTbW1f-I3MRPUgV-X6VZGa4_WVSpgrhOcaNrTR532cXIE9UZp_VI7XHmcsdI5wh2nDrGb58y1RZ5OmBnFU4-ygHIUIg4afSXZRDW2Gp91D1ntg==) *(vertexaisearch.cloud.google.com)*
  > Microsoft could help reduce unexpected audio or video playback in Chrome Facebook Mail RSS Twitter Youtube Windows 11 Windows 10 Windows 10 PC Apps & Games Privacy Policy Contact Us About us Select Theme: System Light Dim Dark Search Sign in Welcome!...
- [windowslatest.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF8XNyeQG7uhWxe7yS0HNyTVdxjG5EFoABci3DZvAfuWDpUR5akSIusSeQW7bA6wvrQ56N6cedLORtG-aZMEhcF1XObDGQXlFnQjU93KlWnvBWlcvbH4UNhM54NGVPsKUgpuVwDUOn2hh3WAUho53aX8jG4W7AsAQrC8s50qIVR3zdyp4k_u7yPJkHTh5oPJ5MLTOlp5qESbydyBbybD84RHzsu8Cq7SgUObfXQVSvoGrMBdw==) *(vertexaisearch.cloud.google.com)*
  > Microsoft&#039;s feature will pause media playback when video is not loaded in Chrome, Edge Facebook Mail RSS Twitter Youtube Windows 11 Windows 10 Windows 10 PC Apps & Games Privacy Policy Contact Us About us Select Theme: System Light Dim Dark Sear...
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFtQo8YDplkNYfUBLRkRH4UNJ1P6eenJ7U89IkjWBnvTSDXMQQdNcRWge4Knqgr9MauGOgpEpzwydaCwvuqzE8TThI6HOKHP5sOlipsg8O3ZUVaqa6oLchQ7oci_Oi9wMwC) *(vertexaisearch.cloud.google.com)*
  > Chromium Sign in
- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGf-94pQ9eosgsGRfX1ToDFd8uJu2UUyUZvDAkIWI1atuFQy8XqbLs9tfymzkg6NUOxUabd0zRCzZ6Qv6-JX36bZ2376QD732mwxrBSy_Bcncdf124VJE-J6Fng4kGDR8kyCg==) *(vertexaisearch.cloud.google.com)*
  > Iframe Media Pausing Iframe Media Pausing Draft Community Group Report , 27 January 2026 This version: https://github.com/WICG/iframe-media-pausing Issue Tracking: GitHub Editor: Gabriel Santana Brito ( Microsoft ) gabrielbrito@microsoft.com Copyrigh...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGpQWXXjNvwS05kAZVwXmgPJZl-cIG8lWbncWzf9-rCwzl2HP4Dre7yj8Q_T4ZUODqLVkaf1k7h3fE0fJT6odjWjvEx1tYCCEyccpsmpG4rWwui7a4m3FueBZ6t0ef8CzKejZcOvYc4MmKgxNRKjoGEsuBqfqU7M2ntANY78bv9YsgG0zJDYmM0cEC_fHIHEagjhZmD1O4e5bAm) *(vertexaisearch.cloud.google.com)*
  > MSEdgeExplainers/IframeMediaPause/iframe_media_pausing.md at main · MicrosoftEdge/MSEdgeExplainers · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or win...
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHMWmQMh0H3ku5jWQ0NfLtvOftPfBQcjApvN-B_F9oNVJR6pVsmZmrnyqwRc7-1gnw-75TnIPd7S9DR9cnHe0_39bvkiGWmv5T5ujoiK2OvREXOoiM0_qJNEnSmJLiqlj5JJliImfToqo4GLas3ku9NV4ijwWwscK6_oa0aoGG9VLRbZqahocH_xt9MxJoPCfXVNqPKDYsBxzJkGrfT-Q==) *(vertexaisearch.cloud.google.com)*
  > Microsoft Edge Origin Trials Skip to main content Sign-in to GitHub media-playback-while-not-visible Permission Policy The "media-playback-while-not-visible" permission policy will pause any media being played by iframes which are not currently rende...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHgYgd59TO4BRiFJq-fhc0epv4rvO0o_YgRN29KFwDUH5TKQNUtk_a8iZr5m1Tr-1rMUYQ4hFLFtfZf13idblQHhvw6eva8KVU2LNbl-7mxzPwzlZwJcryXxOI-afDfIhBZy31Nmori) *(vertexaisearch.cloud.google.com)*
  > Chrome 155 ベータ版 | Blog | Chrome for Developers メイン コンテンツにスキップ / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 ...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHlT26DRzpwkrY1y-WI9LEX1MbxHLdIOL7P8HqkXBv2-43glhaTGVdSRRyaHS1wjfkJO9cCT2qU75MklWJ-XYK4nO2dy-XZvkbDZKK3R2-q_OgMPYFKsEuUMWVeinNhQp75D6S-zDyys-shkmxqYvaopG1SvhEpL4W2-dYBKw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Pause media playback on not-visible iframes"** feature introduces the **`media-playback-while-not-visible`** Permissions Policy.   * **The Problem:** Previously, if a website embedded a cross-origin `<iframe>` conta
- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEnbhKxbVElvtjuR3No9am-L3tch_vHzdNkV2ULKAo32W0g29BAiXxNaHDWBSNqQwb3_uTdpND_BqZq17kfvllpsY-SrGTKW5BvnItGnzZ2amzClfwatOD5pTavhcshVTE=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Pause media playback on not-visible iframes"** feature introduces the **`media-playback-while-not-visible`** Permissions Policy.   * **The Problem:** Previously, if a website embedded a cross-origin `<iframe>` conta
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQErDY0rbPD6OLdONr_ybZRcQk3nMEHsyequjBLD9x18aIuotVVG0p2gE0vCY7_RY9IfgW4z_2H4qrjqS34ndxIHhVhA-aKBzjOQR3CCar3biQM_ZhuPmGyhqWKJkqy2kTmOIrUQ_0QM) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Pause media playback on not-visible iframes"** feature introduces the **`media-playback-while-not-visible`** Permissions Policy.   * **The Problem:** Previously, if a website embedded a cross-origin `<iframe>` conta
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGMxQngHog0ZQf5gejyURjuRsuHPvPWVf54vF-1d12Xwv9jDnOr4-dvTPpjBAYxgsbjvw0sKaHzRGSyHN5u20-qqqCKrPnVNSLtt8qAl8XAt-HVQU1CQofHwtjhuCQj5Q9o5vWkKLTZIrBZsrvY) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Pause media playback on not-visible iframes"** feature introduces the **`media-playback-while-not-visible`** Permissions Policy.   * **The Problem:** Previously, if a website embedded a cross-origin `<iframe>` conta
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGYL_7ir78WIaXlBQ-vJ3W0TXU_8Vl_mX7X1a2Z3BzNaHvZ6s8j-SUbRPuXkIcpvf58mmkZEittUy2eJke0MoXGvEgXK8xKUdH3adWQADHQxajESEOWd1GFo9IrfpZzSIzBmvq6AaaRGmSgzfGz9fSf) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Pause media playback on not-visible iframes"** feature introduces the **`media-playback-while-not-visible`** Permissions Policy.   * **The Problem:** Previously, if a website embedded a cross-origin `<iframe>` conta
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHb6RYvaNiPUABmh5Y8Gf2M5sGQ_ipS3CyPcQM37-ALp26mNuERn62qux4oiSvJ2lusnIixUfVxucSC31g76UUTpOReRcGoOlY0V-qLq_qFiwjp6rsPgBWvxdD38Mw_Gdp_tXXBoHdsOppzyXrE7ls=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Pause media playback on not-visible iframes"** feature introduces the **`media-playback-while-not-visible`** Permissions Policy.   * **The Problem:** Previously, if a website embedded a cross-origin `<iframe>` conta
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGEHj2ODyz4nswLQscVMk560twGG38z2GakJ1N5EbfE7LE1Kjnp6qJ5RoPZq2MlMEgnfYl5AgJwnG85O3D7uQNVvm55-R9WwSE_tkTHVpZRGgGEQWCskPRA2E2TLZvYQvIIrnqXyQr2VWoUxHF9DTkWIYCLzxybDQ==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Pause media playback on not-visible iframes"** feature introduces the **`media-playback-while-not-visible`** Permissions Policy.   * **The Problem:** Previously, if a website embedded a cross-origin `<iframe>` conta
- [Intent to Prototype: Pause media playback on not-rendered iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/D0j1igiVHR8/m/PmfLqigIAQAJ) *(groups.google.com · 2024-06-27T00:00:00)*
  > https://<strong>chromestatus.com/feature/5082950457884672</strong>?gate=6024578269970432 · This intent message was generated by · Chrome Platform Status. Reply all · Reply to author · Forward · 0 new messages ·
- [\[blink-dev\] Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17375.html) *(mail-archive.com)*
  > Explainer https://github.com/M...g.github.io/iframe-media-pausing Summary <strong>Adds a &quot;media-playback-while-not-visible&quot; permission policy to allow embedders to pause audible media playback of embedded iframes which are currently hidden<...
- [Re: \[blink-dev\] Intent to Ship: AudioContext Interrupted State](https://www.mail-archive.com/blink-dev@chromium.org/msg13185.html) *(mail-archive.com)*
  > However, other Web APIs&#x27; &gt; specifications will depend on the &quot;interrupted&quot; state and can have web &gt; tests that expect the AudioContext to be interrupted in some situations: &gt; For example: - https://www.w3.org/TR/audio-session/...
- [Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17406.html) *(mail-archive.com)*
  > We&#x27;ll work on incrementally integrating it with other media-playback apis like PiP, Audio Session API, and Media Session API: - https://github.com/WICG/iframe-media-pausing/issues/2 &lt;https://github.com/WICG/iframe-media-pausing/issues/2&gt; -...
- [\[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17400.html) *(mail-archive.com)*
  > We&#x27;ll work on incrementally integrating it with other media-playback apis like PiP, Audio Session API, and Media Session API: - https://github.com/WICG/iframe-media-pausing/issues/2 - https://github.com/WICG/iframe-media-pausing/issues/3 - https...
- [YouTube Player API Reference for iframe Embeds \| YouTube IFrame Player API \| Google for Developers](https://developers.google.com/youtube/iframe_api_reference) *(developers.google.com)*
  > <strong>Using the API&#x27;s JavaScript functions, you can queue videos for playback; play, pause, or stop those videos</strong>; adjust the player volume; or retrieve information about the video being played.
- [Brightcove Player Sample: Play/Pause Video from iframe Parent](https://player.support.brightcove.com/code-samples/brightcove-player-sample-playpause-video-iframe-parent.html) *(player.support.brightcove.com)*
  > In this topic, you will learn how to <strong>use a button on the parent page of an iframe player to play or pause the video in the iframe player</strong>.
- [Auto pausing video with document.visibilityState - DEV Community](https://dev.to/btopro/auto-pausing-video-with-documentvisibilitystate-5939) *(dev.to · 2022-08-23T20:10:21)*
  > <strong>document.addEventListener(&quot;visibilitychange&quot;, () =&gt; { if (document.visibilityState === &#x27;visible&#x27;) { backgroundMusic.play(); } else { backgroundMusic.pause(); } });</strong>
- [How to programmatically pause Azure Media Player embedded in iframe - Microsoft Q&A](https://learn.microsoft.com/en-us/answers/questions/1418112/how-to-programmatically-pause-azure-media-player-e) *(learn.microsoft.com · 2023-11-06T00:00:00)*
  > const iframe = document.queryS... const videoElement = innerDoc.getElementsByTagName(&#x27;video&#x27;)[0]; <strong>if (videoElement) { videoElement.pause(); }</strong>...
- [The ultimate guide to iframes - LogRocket Blog](https://blog.logrocket.com/ultimate-guide-iframes) *(blog.logrocket.com · 2024-06-20T15:21:37)*
  > To help you form your own opinion and sharpen your developer skills, this article will cover all the essentials you should know about this controversial HTML element. We’ll go through most of the features the iframe element provides and talk about ho...
- [iframe stops animating when out of view - Banner Animation - GSAP](https://gsap.com/community/forums/topic/15276-iframe-stops-animating-when-out-of-view) *(gsap.com · 2016-10-20T13:03:26)*
  > I have a wallpaper made out of two iframes, a leaderbord with 728x90 and a skyscraper 160x600, so called hockeystick. both iframes are synced via sessionstorage, so the animation runs smoothley across both frames. i animate with greensock anim librar...
- [Automatically Play and Pause video as it enters and leaves the viewport/screen – Ben Frain](https://benfrain.com/automatically-play-and-pause-video-as-it-enters-and-leaves-the-viewport-screen) *(benfrain.com · 2022-08-24T08:26:48)*
  > You can also tweak the threshold so that the videos start to play, say when just a little of them enters the viewport, or the entire video is visible – and everything inbetween. I cut a video from the wonderful NASA archive into clips with some dummy...
- [Autoplay policy in Chrome \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/autoplay) *(developer.chrome.com)*
  > The user has added the site to their home screen on mobile or installed the PWA on desktop. Top frames can delegate autoplay permission to their iframes to allow autoplay with sound. The Media Engagement Index (MEI) measures an individual&#x27;s prop...
- [Progressively Handling Iframes in PWAs / PWA Fire Codelabs](https://pwafire.org/developer/codelabs/how-to-handle-iframes-in-pwa) *(pwafire.org · 2019-08-04T00:00:00)*
  > // Learn more at : https://pwafire.org let loadIframe = document.querySelector(&#x27;.load-iframe&#x27;); let offlineAlert = document.querySelector(&#x27;.offline-alert&#x27;); // once the DOM is loaded, check for connectivity status document.addEven...
- [Media updates in Chrome 73 \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/media-updates-in-chrome-73) *(developer.chrome.com)*
  > Desktop PWAs are granted autoplay with sound. Many keyboards nowadays have keys to control basic media playback functions such as play/pause, previous and next track. Headsets have them too. Until now, desktop users couldn&#x27;t use these media keys...
- [Microsoft’s New Chromium Permission Policy Could Silence Hidden Media Automatically - UNDERCODE NEWS](https://undercodenews.com/microsofts-new-chromium-permission-policy-could-silence-hidden-media-automatically) *(undercodenews.com · 2025-06-04T02:57:23)*
  > While current browsers allow audio muting, they fall short when media plays from an invisible iframe — typically hidden via CSS like display: none. The proposed solution is a permission policy named “media-playback-while-not-visible,” which gives dev...
- [Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17418.html) *(mail-archive.com)*
  > &gt; LGTM2 &gt; On 9/9/26 6:56 a.m., ... &gt; Adds a &quot;media-playback-while-not-visible&quot; permission policy to <strong>allow &gt; embedders to pause audible media playback of embedded iframes which are &gt; currently hidden</strong> - i.e....
- [\[blink-dev\] Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13456.html) *(mail-archive.com)*
  > Explainer https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md Specification None Summary Adds a &quot;media-playback-while-not-rendered&quot; permission policy to <strong>allow embedder websites to pau...
- [Re: \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13479.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; On Tuesday, April 22, 2025 ... &gt;&gt; embedder websites to pause media playback of embedded iframes which aren&#x27;t &gt;&gt; rendered - i.e. <strong>have their &quot;display&quot; property set to &quot;none&quot;.</strong>...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: Pause media playback on not-rendered iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/D0j1igiVHR8/m/PmfLqigIAQAJ) *(groups.google.com · 2024-06-27T00:00:00)* *(Cites: `https://chromestatus.com/feature/5082950457884672`)*
  > https://<strong>chromestatus.com/feature/5082950457884672</strong>?gate=6024578269970432 · This intent message was generated by · Chrome Platform Status. Reply all · Reply to author · Forward · 0 new messages ·
- ["media-playback-while-not-visible" Permission Policy · Issue #409 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/409) *(github.com · 2024-10-04T08:41:30)* *(Cites: `https://chromestatus.com/feature/5082950457884672`)*
  > There is some discussion happening in whatwg/html#10208. This feature development in Chromium is being tracked on https://<strong>chromestatus.com/feature/5082950457884672</strong>.
- [\[blink-dev\] Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17375.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > Explainer https://github.com/M...g.github.io/iframe-media-pausing Summary <strong>Adds a &quot;media-playback-while-not-visible&quot; permission policy to allow embedders to pause audible media playback of embedded iframes which are current...
- [Re: \[blink-dev\] Intent to Ship: AudioContext Interrupted State](https://www.mail-archive.com/blink-dev@chromium.org/msg13185.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > However, other Web APIs&#x27; &gt; specifications will depend on the &quot;interrupted&quot; state and can have web &gt; tests that expect the AudioContext to be interrupted in some situations: &gt; For example: - https://www.w3.org/TR/audi...
- [Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17406.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/iframe-media-pausing`)*
  > We&#x27;ll work on incrementally integrating it with other media-playback apis like PiP, Audio Session API, and Media Session API: - https://github.com/WICG/iframe-media-pausing/issues/2 &lt;https://github.com/WICG/iframe-media-pausing/issu...
- [\[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17400.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/iframe-media-pausing`)*
  > We&#x27;ll work on incrementally integrating it with other media-playback apis like PiP, Audio Session API, and Media Session API: - https://github.com/WICG/iframe-media-pausing/issues/2 - https://github.com/WICG/iframe-media-pausing/issues...

## 📚 Platform Documentation & Specifications

- ["media-playback-while-not-visible" Permission Policy · Issue #409 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/409) *(github.com)*
- [Page Visibility API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API) *(developer.mozilla.org)*
- [Proposal: pause iframe media when not rendered · Issue #10208 · whatwg/html](https://github.com/whatwg/html/issues/10208) *(github.com)*
- [Using the Page Visibility API - MDN Web Docs](https://developer.mozilla.org/en-US/blog/using-the-page-visibility-api) *(developer.mozilla.org)*
- [&lt;video&gt; HTML video embed element - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video) *(developer.mozilla.org)*
- [iframe-media-pausing/explainer.md at main · WICG/iframe-media-pausing](https://github.com/WICG/iframe-media-pausing/blob/main/explainer.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 59 result(s) found across 13 planned queries — **25 verified relevant**
  - `"chromestatus.com/feature/5082950457884672" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"wicg.github.io/iframe-media-pausing" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Pause media playback on not-visible iframes" API` — *Core feature API query* (3 returned)
  - `"Pause media playback on not-visible iframes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"not-visible" OR "media-playback-while-not-visible" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Pause media playback on not-visible iframes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Pause media playback on not-visible iframes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
  - `"media-playback-while-not-visible" iframe allow permission policy` — *Searches for practical markup and code examples demonstrating the Permissions Policy attribute and header configuration on embedded iframes.* (8 returned)
  - `"media-playback-while-not-visible" OR "iframe-media-pausing" tutorial OR guide OR "how to"` — *Finds developer-oriented articles, blog posts, and guides discussing how to automatically pause media playback in hidden or zero-size embedded iframes.* (8 returned)
  - `"media-playback-while-not-visible" site:groups.google.com/a/chromium.org OR site:chromestatus.com` — *Identifies official browser vendor announcements, Intent to Prototype/Ship threads, and tracking entries on ChromeStatus.* (8 returned)
  - `"media-playback-while-not-visible" OR "iframe media pausing" site:github.com/WICG OR site:github.com/mozilla OR site:github.com/WebKit` — *Surfaces standards debates, vendor positioning (Mozilla/WebKit), and ecosystem feedback within standards organization issue trackers.* (8 returned)
  - `"media-playback-while-not-visible" ("display: none" OR "visibility: hidden") pause iframe audio` — *Discovers developer discussions and implementation write-ups addressing background media audio playback in hidden tabs, accordions, and modal dialogs.* (5 returned)
- **Google Search Grounding (gemini-3.8-flash):** 15 result(s) found — **15 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 102 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 1 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5082950457884672)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5082950457884672)
- [Specification](https://wicg.github.io/iframe-media-pausing)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/351354996)
