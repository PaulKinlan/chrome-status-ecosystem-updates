# Pause media playback on not-visible iframes

> **Report Week:** 2026-W38 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Adds a "media-playback-while-not-visible" permission policy to allow embedders to pause audible media playback of embedded iframes which are currently hidden - i.e. "display" property set to "none"; "visibility" property set to "hidden"; or zero-area (width or height equal to 0). While hidden, attempts made by the embedded iframe to render audible media will be blocked. When the frame is shown again the prohibitions should be lifted. This should allow developers to build more user-friendly experiences and to also improve the performance by letting the browser handle the playback of content that is not visible to users.

### Motivation

Web applications that host embedded media content via iframes may wish to respond to application input by temporarily hiding the media content. These applications may not want to unload the entire iframe when it's not rendered since it could generate user-perceptible performance and experience issues when showing the media content again. At the same time, the user could have a negative experience if the media continues to play and emit audio when not rendered. This proposal aims to provide web applications with the ability to control embedded media content in such a way that guarantees their users have a good experience when the iframe's render status is changed.

## Ecosystem Status

- **Momentum:** High (305 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive / High Interest
- **Executive Take:** Pause media playback on not-visible iframes is currently Enabled by default in Chrome 155. Verified ecosystem momentum is High with Partial Multi-Engine Interest standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @padenot: "This is \`positive\`. As mentioned in a call to Gabriel, Gecko currently has complex logic to achieve this, for power efficiency reasons, and it would b..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Streamlabs (@streamlabs) on X" (0 points, 0 comments).

## Standards Positions

- **WebKit:** ["media-playback-while-not-visible" Permission Policy](https://github.com/WebKit/standards-positions/issues/409) [open]
- **Mozilla:** ["media-playback-while-not-visible" Permission Policy](https://github.com/mozilla/standards-positions/issues/1082) [closed]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Streamlabs (@streamlabs) on X](https://twitter.com/streamlabs/status/1399337453455130632?lang=en) — *by @streamlabs, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Intent to Prototype: Pause media playback on not-rendered iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/D0j1igiVHR8/m/PmfLqigIAQAJ) *(groups.google.com · 2024-06-27T00:00:00)*
  > Intent to Prototype: Pause media playback on not-rendered iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Pause media pla...
- [\[blink-dev\] Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17375.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Pause media playback on not-visible iframes Chromestatus Fri, 04 Sep 2026 09:49:31 -0700 Contact emails [email&#...
- [Intent to Prototype: AudioContext Interrupted State](https://groups.google.com/a/chromium.org/g/blink-dev/c/GgSvU1BZZRU) *(groups.google.com · 2024-10-25T00:00:00)*
  > Intent to Prototype: AudioContext Interrupted State Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: AudioContext Interrupted Stat...
- [Re: \[blink-dev\] Intent to Ship: AudioContext Interrupted State](https://www.mail-archive.com/blink-dev@chromium.org/msg13185.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: AudioContext Interrupted State Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: AudioContext Interrupted State Chris Harrelson Wed, 26 Mar 2025 08:37:20 -0700 LGTM1 On Tue, Mar 25, 2025 at 1:57 PM ...
- [Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17406.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Pause media playback on not-visible iframes Mike Taylor Wed, 09 Sep 2026 07:45:22 -0700 LGTM2 On...
- [\[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17400.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Pause media playback on not-visible iframes Yoav Weiss (@Shopify) Wed, 09 Sep 2026 03:56:48 -0700 LGTM1 ...
- [Brightcove Player Sample: Play/Pause Video from iframe Parent](https://player.support.brightcove.com/code-samples/brightcove-player-sample-playpause-video-iframe-parent.html) *(player.support.brightcove.com)*
  > In this topic, you will learn how to <strong>use a button on the parent page of an iframe player to play or pause the video in the iframe player</strong>.
- [YouTube Player API Reference for iframe Embeds \| YouTube IFrame Player API \| Google for Developers](https://developers.google.com/youtube/iframe_api_reference) *(developers.google.com)*
  > <strong>Using the API&#x27;s JavaScript functions, you can queue videos for playback; play, pause, or stop those videos</strong>; adjust the player volume; or retrieve information about the video being played.
- [Auto pausing video with document.visibilityState - DEV Community](https://dev.to/btopro/auto-pausing-video-with-documentvisibilitystate-5939) *(dev.to · 2022-08-23T20:10:21)*
  > <strong>document.addEventListener(&quot;visibilitychange&quot;, () =&gt; { if (document.visibilityState === &#x27;visible&#x27;) { backgroundMusic.play(); } else { backgroundMusic.pause(); } });</strong>
- [How to programmatically pause Azure Media Player embedded in iframe - Microsoft Q&A](https://learn.microsoft.com/en-us/answers/questions/1418112/how-to-programmatically-pause-azure-media-player-e) *(learn.microsoft.com · 2023-11-06T00:00:00)*
  > const iframe = document.queryS... const videoElement = innerDoc.getElementsByTagName(&#x27;video&#x27;)[0]; <strong>if (videoElement) { videoElement.pause(); }</strong>...
- [The ultimate guide to iframes - LogRocket Blog](https://blog.logrocket.com/ultimate-guide-iframes) *(blog.logrocket.com · 2024-06-20T15:21:37)*
  > To help you form your own opinion and sharpen your developer skills, this article will cover all the essentials you should know about this controversial HTML element. We’ll go through most of the features the iframe element provides and talk about ho...
- [It's time to lazy-load offscreen iframes! \| Articles \| web.dev](https://web.dev/articles/iframe-lazy-loading) *(web.dev · 2024-09-23T00:00:00)*
  > This demo of <strong>&lt;iframe loading=lazy&gt;</strong> shows lazy-loading video embeds: Third-party embeds cover a wide range of use cases, from video players to social media posts to ads. This content is often not immediately visible in the user&...
- [Automatically Play and Pause video as it enters and leaves the viewport/screen – Ben Frain](https://benfrain.com/automatically-play-and-pause-video-as-it-enters-and-leaves-the-viewport-screen) *(benfrain.com · 2022-08-24T08:26:48)*
  > You can also tweak the threshold so that the videos start to play, say when just a little of them enters the viewport, or the entire video is visible – and everything inbetween. I cut a video from the wonderful NASA archive into clips with some dummy...
- [Autoplay policy in Chrome \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/autoplay) *(developer.chrome.com)*
  > The user has added the site to their home screen on mobile or installed the PWA on desktop. Top frames can delegate autoplay permission to their iframes to allow autoplay with sound. The Media Engagement Index (MEI) measures an individual&#x27;s prop...
- [Progressively Handling Iframes in PWAs / PWA Fire Codelabs](https://pwafire.org/developer/codelabs/how-to-handle-iframes-in-pwa) *(pwafire.org · 2019-08-04T00:00:00)*
  > // Learn more at : https://pwafire.org let loadIframe = document.querySelector(&#x27;.load-iframe&#x27;); let offlineAlert = document.querySelector(&#x27;.offline-alert&#x27;); // once the DOM is loaded, check for connectivity status document.addEven...
- [Video playback fails on PWA after reopeni… - Apple Community](https://discussions.apple.com/thread/256166996) *(discussions.apple.com)*
  > This works fine at first, but after closing and reopening the PWA on iOS, the video will not resume. ... • Some users mention that clearing Safari’s cache “resets” the playback, hinting at internal caching or state issues. • WebKit bug reports exist ...
- [\[blink-dev\] Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13456.html) *(mail-archive.com)*
  > Explainer https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md Specification None Summary <strong>Adds a &quot;media-playback-while-not-rendered&quot; permission policy to allow embedder websites to pau...
- [Re: \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13479.html) *(mail-archive.com)*
  > Moreover, once the permission policy is used, it should help &gt;&gt; Chromium to be more optimized by pausing audio rendering for content that &gt;&gt; is not visible for the user. &gt;&gt; &gt;&gt; &gt;&gt; Activation &gt;&gt; &gt;&gt; <strong>Deve...
- [\[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13477.html) *(mail-archive.com)*
  > On Tuesday, April 22, 2025 at 5:59:10 ...edia_pausing.md Specification None Summary <strong>Adds a &quot;media-playback-while-not-rendered&quot; permission policy to allow embedder websites to pause media playback of embedded iframes which aren&#x27;...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: Pause media playback on not-rendered iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/D0j1igiVHR8/m/PmfLqigIAQAJ) *(groups.google.com · 2024-06-27T00:00:00)* *(Cites: `https://chromestatus.com/feature/5082950457884672`)*
  > Intent to Prototype: Pause media playback on not-rendered iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Pause...
- [\[blink-dev\] Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17375.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5082950457884672`)*
  > [blink-dev] Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Pause media playback on not-visible iframes Chromestatus Fri, 04 Sep 2026 09:49:31 -0700 Contact email...
- [Intent to Prototype: AudioContext Interrupted State](https://groups.google.com/a/chromium.org/g/blink-dev/c/GgSvU1BZZRU) *(groups.google.com · 2024-10-25T00:00:00)* *(Cites: `https://chromestatus.com/feature/5082950457884672`)*
  > Intent to Prototype: AudioContext Interrupted State Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: AudioContext Interr...
- ["media-playback-while-not-visible" Permission Policy · Issue #409 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/409) *(github.com · 2024-10-04T08:41:30)* *(Cites: `https://chromestatus.com/feature/5082950457884672`)*
  > "media-playback-while-not-visible" Permission Policy · Issue #409 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab ...
- [Re: \[blink-dev\] Intent to Ship: AudioContext Interrupted State](https://www.mail-archive.com/blink-dev@chromium.org/msg13185.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > Re: [blink-dev] Intent to Ship: AudioContext Interrupted State Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: AudioContext Interrupted State Chris Harrelson Wed, 26 Mar 2025 08:37:20 -0700 LGTM1 On Tue, Mar 25, 2025 a...
- [Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17406.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/iframe-media-pausing`)*
  > Re: [blink-dev] Re: Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Pause media playback on not-visible iframes Mike Taylor Wed, 09 Sep 2026 07:45:22 -070...
- [\[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17400.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/iframe-media-pausing`)*
  > [blink-dev] Re: Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Pause media playback on not-visible iframes Yoav Weiss (@Shopify) Wed, 09 Sep 2026 03:56:48 -0...

## 📚 Platform Documentation & Specifications

- ["media-playback-while-not-visible" Permission Policy · Issue #409 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/409) *(github.com)*
- [Page Visibility API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API) *(developer.mozilla.org)*
- [Proposal: pause iframe media when not rendered · Issue #10208 · whatwg/html](https://github.com/whatwg/html/issues/10208) *(github.com)*
- [Using the Page Visibility API - MDN Web Docs](https://developer.mozilla.org/en-US/blog/using-the-page-visibility-api) *(developer.mozilla.org)*
- [\[Bug\]: Killing PWA Process will pause the media content from the main browser's opened tab. · Issue #25644 · mozilla-mobile/fenix](https://github.com/mozilla-mobile/fenix/issues/25644) *(github.com)*
- [iframe-media-pausing/explainer.md at main · WICG/iframe-media-pausing](https://github.com/WICG/iframe-media-pausing/blob/main/explainer.md) *(github.com)*
- [Autoplay guide for media and Web Audio APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Autoplay) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 51 result(s) found across 12 planned queries — **26 verified relevant**
  - `"chromestatus.com/feature/5082950457884672" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"wicg.github.io/iframe-media-pausing" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Pause media playback on not-visible iframes" API` — *Core feature API query* (3 returned)
  - `"Pause media playback on not-visible iframes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"not-visible" OR "media-playback-while-not-visible" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Pause media playback on not-visible iframes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Pause media playback on not-visible iframes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
  - `"media-playback-while-not-visible" (iframe OR "Permissions-Policy" OR allow)` — *Finds concrete code snippets and HTML implementations demonstrating the permissions policy syntax on iframe elements.* (8 returned)
  - `"media-playback-while-not-visible" OR "iframe media pausing" (guide OR tutorial OR blog)` — *Discovers developer tutorials, practical overviews, and articles explaining how to control audio and video playback inside hidden iframes.* (8 returned)
  - `site:github.com/mozilla/standards-positions OR site:github.com/WebKit/standards-positions "media-playback-while-not-visible"` — *Surfaces official consensus, feature evaluations, and standards positions from Firefox and Safari/WebKit teams.* (8 returned)
  - `"media-playback-while-not-visible" ("Intent to" OR blink-dev OR chromestatus OR WICG)` — *Tracks Chromium release schedules, developer feedback, and standard body discussion threads around the proposed policy.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
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
