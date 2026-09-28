# Pause media playback on not-visible iframes

> **Report Week:** 2026-W40 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Adds a "media-playback-while-not-visible" permission policy to allow embedders to pause audible media playback of embedded iframes which are currently hidden - i.e. "display" property set to "none"; "visibility" property set to "hidden"; or zero-area (width or height equal to 0). While hidden, attempts made by the embedded iframe to render audible media will be blocked. When the frame is shown again the prohibitions should be lifted. This should allow developers to build more user-friendly experiences and to also improve the performance by letting the browser handle the playback of content that is not visible to users.

### Motivation

Web applications that host embedded media content via iframes may wish to respond to application input by temporarily hiding the media content. These applications may not want to unload the entire iframe when it's not rendered since it could generate user-perceptible performance and experience issues when showing the media content again. At the same time, the user could have a negative experience if the media continues to play and emit audio when not rendered. This proposal aims to provide web applications with the ability to control embedded media content in such a way that guarantees their users have a good experience when the iframe's render status is changed.

## Ecosystem Status

- **Momentum:** High (245 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Spearheaded by Microsoft and incubated within the WICG, the 'media-playback-while-not-visible' Permission Policy ships enabled by default in Chrome 155 to automatically suspend media and AudioContext playback in hidden or zero-dimension iframes. The feature solves a persistent architectural dilemma for web embedders, who previously had to either destroy the iframe DOM entirely or rely on brittle cross-origin messaging to stop rogue background audio. Cross-engine sentiment is largely favorable, with Firefox endorsing the standard to replace complex internal heuristics and WebKit actively reviewing implementation tests.

### Recommendations
- Actionable Advice: Adopt 'allow="media-playback-while-not-visible 'none'"' immediately on iframe tags as a progressive enhancement, as non-supporting browsers will safely ignore unknown permission policy directives. For critical cross-engine consistency, continue using explicit pause triggers or postMessage fallbacks until Safari and Firefox ship native implementations.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @padenot: "This is \`positive\`. As mentioned in a call to Gabriel, Gecko currently has complex logic to achieve this, for power efficiency reasons, and it would b..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** ["media-playback-while-not-visible" Permission Policy](https://github.com/WebKit/standards-positions/issues/409) [open]
- **Mozilla:** ["media-playback-while-not-visible" Permission Policy](https://github.com/mozilla/standards-positions/issues/1082) [closed]

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17375.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Pause media playback on not-visible iframes Chromestatus Fri, 04 Sep 2026 09:49:31 -0700 Contact emails [email&#...
- [Intent to Prototype: Pause media playback on not-rendered iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/D0j1igiVHR8/m/PmfLqigIAQAJ) *(groups.google.com · 2024-06-27T00:00:00)*
  > Intent to Prototype: Pause media playback on not-rendered iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Pause media pla...
- [\[blink-dev\] Intent to Ship: AudioContext Interrupted State](https://www.mail-archive.com/blink-dev@chromium.org/msg13167.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: AudioContext Interrupted State Skip to site navigation (Press enter) [blink-dev] Intent to Ship: AudioContext Interrupted State Chromestatus Tue, 25 Mar 2025 13:57:32 -0700 Contact emails [email&#160;protected] , [email&#1...
- [Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17406.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Pause media playback on not-visible iframes Mike Taylor Wed, 09 Sep 2026 07:45:22 -0700 LGTM2 On...
- [\[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17400.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Pause media playback on not-visible iframes Yoav Weiss (@Shopify) Wed, 09 Sep 2026 03:56:48 -0700 LGTM1 ...
- [YouTube Player API Reference for iframe Embeds \| YouTube IFrame Player API \| Google for Developers](https://developers.google.com/youtube/iframe_api_reference) *(developers.google.com)*
  > <strong>Using the API&#x27;s JavaScript functions, you can queue videos for playback; play, pause, or stop those videos</strong>; adjust the player volume; or retrieve information about the video being played.
- [Brightcove Player Sample: Play/Pause Video from iframe Parent](https://player.support.brightcove.com/code-samples/brightcove-player-sample-playpause-video-iframe-parent.html) *(player.support.brightcove.com)*
  > In this topic, you will learn how to <strong>use a button on the parent page of an iframe player to play or pause the video in the iframe player</strong>. This sample and associated code is provided as a guide for your production development.
- [Auto pausing video with document.visibilityState - DEV Community](https://dev.to/btopro/auto-pausing-video-with-documentvisibilitystate-5939) *(dev.to · 2022-08-23T20:10:21)*
  > <strong>document.addEventListener(&quot;visibilitychange&quot;, () =&gt; { if (document.visibilityState === &#x27;visible&#x27;) { backgroundMusic.play(); } else { backgroundMusic.pause(); } });</strong>
- [How to programmatically pause Azure Media Player embedded in iframe - Microsoft Q&A](https://learn.microsoft.com/en-us/answers/questions/1418112/how-to-programmatically-pause-azure-media-player-e) *(learn.microsoft.com · 2023-11-06T00:00:00)*
  > const iframe = document.queryS... const videoElement = innerDoc.getElementsByTagName(&#x27;video&#x27;)[0]; <strong>if (videoElement) { videoElement.pause(); }</strong>...
- [The ultimate guide to iframes - LogRocket Blog](https://blog.logrocket.com/ultimate-guide-iframes) *(blog.logrocket.com · 2024-06-20T15:21:37)*
  > To help you form your own opinion and sharpen your developer skills, this article will cover all the essentials you should know about this controversial HTML element. We’ll go through most of the features the iframe element provides and talk about ho...
- [\[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13477.html) *(mail-archive.com)*
  > Moreover, once the permission policy is used, it should help Chromium to be more optimized by pausing audio rendering for content that is not visible for the user. Activation <strong>Developers need to opt-in by setting &quot;allow&quot; property of ...
- [\[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13464.html) *(mail-archive.com)*
  > For example: &lt;iframe src=&quot;https://foo.media.com&quot; allow=&quot;media-playback-while-not-visible &#x27;none&#x27;&quot;&gt;&lt;/iframe&gt; WebView application risks Does this intent deprecate or change behavior of existing APIs, such that i...
- [\[blink-dev\] Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13456.html) *(mail-archive.com)*
  > For example: &lt;iframe src=&quot;https://foo.media.com&quot; allow=&quot;media-playback-while-not-visible &#x27;none&#x27;&quot;&gt;&lt;/iframe&gt; WebView application risks Does this intent deprecate or change behavior of existing APIs, such that i...
- [Re: \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13479.html) *(mail-archive.com)*
  > Moreover, once the permission policy is used, it should help &gt;&gt; Chromium to be more optimized by pausing audio rendering for content that &gt;&gt; is not visible for the user. &gt;&gt; &gt;&gt; &gt;&gt; Activation &gt;&gt; &gt;&gt; Developers n...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- ["media-playback-while-not-visible" Permission Policy · Issue #409 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/409) *(github.com · 2024-10-04T08:41:30)* *(Cites: `https://chromestatus.com/feature/5082950457884672`)*
  > "media-playback-while-not-visible" Permission Policy · Issue #409 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab ...
- [\[blink-dev\] Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17375.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > [blink-dev] Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Pause media playback on not-visible iframes Chromestatus Fri, 04 Sep 2026 09:49:31 -0700 Contact email...
- [Intent to Prototype: Pause media playback on not-rendered iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/D0j1igiVHR8/m/PmfLqigIAQAJ) *(groups.google.com · 2024-06-27T00:00:00)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > Intent to Prototype: Pause media playback on not-rendered iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Pause...
- [\[blink-dev\] Intent to Ship: AudioContext Interrupted State](https://www.mail-archive.com/blink-dev@chromium.org/msg13167.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > [blink-dev] Intent to Ship: AudioContext Interrupted State Skip to site navigation (Press enter) [blink-dev] Intent to Ship: AudioContext Interrupted State Chromestatus Tue, 25 Mar 2025 13:57:32 -0700 Contact emails [email&#160;protected] ,...
- [Pausing iframe media when not visible · Issue #1468 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1468) *(github.com · 2026-09-23T22:11:37)* *(Cites: `https://wicg.github.io/iframe-media-pausing`)*
  > Pausing iframe media when not visible · Issue #1468 · web-platform-tests/interop · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Rel...
- [Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17406.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/iframe-media-pausing`)*
  > Re: [blink-dev] Re: Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Pause media playback on not-visible iframes Mike Taylor Wed, 09 Sep 2026 07:45:22 -070...
- [\[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17400.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/iframe-media-pausing`)*
  > [blink-dev] Re: Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Pause media playback on not-visible iframes Yoav Weiss (@Shopify) Wed, 09 Sep 2026 03:56:48 -0...

## 📚 Platform Documentation & Specifications

- ["media-playback-while-not-visible" Permission Policy · Issue #409 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/409) *(github.com)*
- [Pausing iframe media when not visible · Issue #1468 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1468) *(github.com)*
- [Allow embedders to dynamically mute iframe audio without pausing playback · Issue #2699 · WebAudio/web-audio-api](https://github.com/WebAudio/web-audio-api/issues/2699) *(github.com)*
- [Page Visibility API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API) *(developer.mozilla.org)*
- [Proposal: pause iframe media when not rendered · Issue #10208 · whatwg/html](https://github.com/whatwg/html/issues/10208) *(github.com)*
- [iframe-media-pausing/explainer.md at main · WICG/iframe-media-pausing](https://github.com/WICG/iframe-media-pausing/blob/main/explainer.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 43 result(s) found across 12 planned queries — **20 verified relevant**
  - `"chromestatus.com/feature/5082950457884672" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"wicg.github.io/iframe-media-pausing" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"Pause media playback on not-visible iframes" API` — *Core feature API query* (4 returned)
  - `"Pause media playback on not-visible iframes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (7 returned)
  - `"not-visible" OR "media-playback-while-not-visible" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Pause media playback on not-visible iframes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Pause media playback on not-visible iframes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"media-playback-while-not-visible" iframe allow` — *Find code examples showcasing how to declare the media-playback-while-not-visible permission policy via iframe allow attributes or HTTP headers.* (8 returned)
  - `"media-playback-while-not-visible" OR "iframe-media-pausing" (tutorial OR guide OR blog)` — *Discover developer guides and blog posts explaining how to pause background or hidden iframe media automatically.* (8 returned)
  - `"media-playback-while-not-visible" ("intent to ship" OR "intent to prototype" OR "Chrome status")` — *Track browser vendor implementation progress, feature status, and standardized intent threads across Chromium and Edge.* (0 returned)
  - `site:github.com ("media-playback-while-not-visible" OR "iframe-media-pausing") (issue OR discussion)` — *Locate web standards feedback, developer critiques, and standards discussion threads regarding pausing hidden iframe media.* (2 returned)
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
