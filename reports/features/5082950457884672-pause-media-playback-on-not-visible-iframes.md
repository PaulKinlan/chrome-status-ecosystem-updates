# Pause media playback on not-visible iframes

> **Report Week:** 2026-W46 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Adds a "media-playback-while-not-visible" permission policy to allow embedders to pause audible media playback of embedded iframes which are currently hidden - i.e. "display" property set to "none"; "visibility" property set to "hidden"; or zero-area (width or height equal to 0). While hidden, attempts made by the embedded iframe to render audible media will be blocked. When the frame is shown again the prohibitions should be lifted. This should allow developers to build more user-friendly experiences and to also improve the performance by letting the browser handle the playback of content that is not visible to users.

### Motivation

Web applications that host embedded media content via iframes may wish to respond to application input by temporarily hiding the media content. These applications may not want to unload the entire iframe when it's not rendered since it could generate user-perceptible performance and experience issues when showing the media content again. At the same time, the user could have a negative experience if the media continues to play and emit audio when not rendered. This proposal aims to provide web applications with the ability to control embedded media content in such a way that guarantees their users have a good experience when the iframe's render status is changed.

## Ecosystem Status

- **Momentum:** Moderate (+120 points since 2026-10-12; footprint 335 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The 'Pause media playback on not-visible iframes' feature establishes the 'media-playback-while-not-visible' permissions policy, allowing web applications to pause audio and video inside embedded frames hidden via CSS display, visibility, or zero-dimension styling without tearing down the iframe element. Originating from Microsoft engineers within the WICG, the policy has shipped enabled by default in Chromium-based browsers, notably Chrome and Edge 155. Cross-engine alignment is advancing smoothly with positive feedback from Mozilla, while broader multi-engine standardization remains pending final WebKit consensus.

### Recommendations
- Actionable Advice: Teams managing embedded third-party media or ad widgets should adopt the policy progressively today by specifying 'media-playback-while-not-visible' in iframe allow attributes or HTTP Permissions-Policy headers. Because browsers that lack support simply ignore unrecognized permission directives, developers can safely roll it out to enhance performance and user experience in modern Chromium browsers without breaking legacy fallback behavior.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @padenot: "This is \`positive\`. As mentioned in a call to Gabriel, Gecko currently has complex logic to achieve this, for power efficiency reasons, and it would b..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X" (0 points, 0 comments).

## Standards Positions

- **WebKit:** ["media-playback-while-not-visible" Permission Policy](https://github.com/WebKit/standards-positions/issues/409) [open]
- **Mozilla:** ["media-playback-while-not-visible" Permission Policy](https://github.com/mozilla/standards-positions/issues/1082) [closed]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X](https://x.com/ChromiumDev/status/2105325011116646507) — *by @ChromiumDev, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5082950457884672?gate=5165819033288704) *(chromestatus.com)*
  > The \*\*"Pause media playback on not-visible iframes"\*\* feature introduces the \*\*\`media-playback-while-not-visible\`\*\* Permissions Policy Hiding the container with \`display: none;\`, \`visibility: hidden;\`, or setting zero dimensions (\`width: 0; height: 0...
- [windowslatest.com](https://www.windowslatest.com/2025/06/04/microsoft-could-help-reduce-unexpected-audio-or-video-playback-in-chrome) *(windowslatest.com)*
  > \*\*The Problem:\*\* Developers often embed third-party media (like YouTube, Vimeo, or interactive widgets) inside iframes Hiding the container with \`display: none;\`, \`visibility: hidden;\`, or setting zero dimensions (\`width: 0; height: 0\`) often does no...
- [google.com](https://groups.google.com/a/chromium.org/g/blink-dev/c/D0j1igiVHR8) *(groups.google.com)*
  > Previously, the only reliable way to stop audio across origins was to dismantle or unload the iframe entirely, which incurs performance penalties and breaks iframe state when restored \*\*Source:\*\* Chrome Platform Status (\*"Pause media playback on not-...
- [Microsoft Edge 155 web platform release notes (Oct. 8, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/155) *(learn.microsoft.com)*
  > \`display: none\` Zero-area rendering (either width or height equals \`0\`)
- [\[blink-dev\] Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13456.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: Pause media playback on not-rendered iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Pause media playback on not-rendered iframes Chromestatus Mon, 21 Apr 2025 13:59:05 -0700 Contact e...
- [\[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg10759.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes 'Gabriel Brito' via blink-dev Thu, 27 Jun 2024 12:03:52 ...
- [\[blink-dev\] Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17375.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Pause media playback on not-visible iframes Chromestatus Fri, 04 Sep 2026 09:49:31 -0700 Contact emails \[email&#...
- [\[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17400.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Yoav Weiss (@Shopify) Wed, 09 Sep 2026 03:56:48 -0700 LGTM1 ...
- [Intent to Prototype: Pause media playback on not-rendered iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/D0j1igiVHR8/m/PmfLqigIAQAJ) *(groups.google.com · 2024-06-27T00:00:00)*
  > Intent to Prototype: Pause media playback on not-rendered iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Pause media pla...
- [Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17406.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Mike Taylor Wed, 09 Sep 2026 07:45:22 -0700 LGTM2 On...
- [\[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13464.html) *(mail-archive.com)*
  > Contact emails \[email protected\], ...edia\_pausing.md Specification None Summary &lt;strong&gt;Adds a &quot;media-playback-while-not-rendered&quot; permission policy to allow embedder websites to pause media playback of embedded iframes which aren&#x27;t re...
- [Re: \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13481.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; On Tuesday, April 22, ... None &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Summary &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; &lt;strong&gt;Adds a &quot;media-playback-while-not-rendered&quot; permission policy to allow &gt;&gt;&gt;&gt; embe...
- [Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17418.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Chris Harrelson Wed, 09 Sep 2026 08:57:35 -0700 LGTM...
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/155) *(chromestatus.com · 2026-10-06T00:00:00)*
  > &lt;strong&gt;Adds a &quot;media-playback-while-not-visible&quot; permission policy to allow embedders to pause audible media playback of embedded iframes which are currently hidden&lt;/strong&gt; - i.e. &quot;display&quot; property set to &quot;none&quot;; &quo...
- [Chrome 155 beta  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/chrome-155-beta?hl=en) *(developer.chrome.com)*
  > &lt;strong&gt;Adds a media-playback-while-not-visible permission policy to let embedders control whether embedded iframes which are currently hidden&lt;/strong&gt;. That includes iframes with the display property set to none, visibility property set to hidden, o...
- [Chrome 155 beta \| Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/article/2105325011116646507) *(x.com · 2026-09-30T15:48:01)*
  > &lt;strong&gt;Adds a media-playback-while-not-visible permission policy to let embedders control whether embedded iframes which are currently hidden&lt;/strong&gt;. That includes iframes with the display property set to none, visibility property set to hidden, o...
- [Re: \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13480.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · Re: \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes · Domenic Denicola Tue, 22 Apr 2025 19:14:34 -0700 · Thanks! LGTM to experiment from M137-M142. On Wed, Apr 23, 2025 at 11:...
- [\[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13477.html) *(mail-archive.com)*
  > Link to entry on the Chrome Platform Status https://chromestatus.com/ feature/5082950457884672?gate=5165819033288704 Links to previous Intent discussions Intent to Prototype: https://groups.google.com/a/chromium.org/d/msgid/blink-dev/ PH7PR00MB1638C5...
- [Re: \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13478.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · Re: \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes · Domenic Denicola Tue, 22 Apr 2025 19:01:29 -0700 · Can you also fill in the OT end milestones? (The usual ending would be...
- [Re: \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13479.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · Re: \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes · &#x27;Gabriel Brito&#x27; via blink-dev Tue, 22 Apr 2025 19:13:21 -0700 · Ok. Added M142 as the final milestone. On Tuesd...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13456.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5082950457884672`)*
  > \[blink-dev\] Intent to Experiment: Pause media playback on not-rendered iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Pause media playback on not-rendered iframes Chromestatus Mon, 21 Apr 2025 13:59:05 -0700...
- [\[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg10759.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5082950457884672`)*
  > \[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes 'Gabriel Brito' via blink-dev Thu, 27 Jun 2024...
- [\[blink-dev\] Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17375.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5082950457884672`)*
  > \[blink-dev\] Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Pause media playback on not-visible iframes Chromestatus Fri, 04 Sep 2026 09:49:31 -0700 Contact email...
- [\[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17400.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5082950457884672`)*
  > \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Yoav Weiss (@Shopify) Wed, 09 Sep 2026 03:56:48 -0...
- [Intent to Prototype: Pause media playback on not-rendered iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/D0j1igiVHR8/m/PmfLqigIAQAJ) *(groups.google.com · 2024-06-27T00:00:00)* *(Cites: `https://chromestatus.com/feature/5082950457884672`)*
  > Intent to Prototype: Pause media playback on not-rendered iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Pause...
- [Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17406.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Mike Taylor Wed, 09 Sep 2026 07:45:22 -070...
- [\[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13464.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > Contact emails \[email protected\], ...edia\_pausing.md Specification None Summary &lt;strong&gt;Adds a &quot;media-playback-while-not-rendered&quot; permission policy to allow embedder websites to pause media playback of embedded iframes which aren...
- [Re: \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13481.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; On Tuesday, April 22, ... None &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Summary &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; &lt;strong&gt;Adds a &quot;media-playback-while-not-rendered&quot; permission policy to allow &gt;&gt;&gt...
- [Pausing iframe media when not visible · Issue #1468 · web-platform-tests/interop · GitHub](https://github.com/web-platform-tests/interop/issues/1468) *(github.com · 2026-09-23T22:11:37)* *(Cites: `https://wicg.github.io/iframe-media-pausing`)*
  > Explainer: https://github.com/WICG/iframe-media-pausing/blob/main/explainer.md · https://&lt;strong&gt;wicg.github.io/iframe-media-pausing&lt;/strong&gt;/ web-platform-dx/web-features#4292 ·
- [Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17418.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/iframe-media-pausing`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Chris Harrelson Wed, 09 Sep 2026 08:57:35 ...

## 📚 Platform Documentation & Specifications

- ["media-playback-while-not-visible" Permission Policy · Issue #4292 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4292) *(github.com)*
- [media-playback-while-not-visible Permission Policy · Issue #1387 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1387) *(github.com)*
- [w3.org](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1084) *(tag-github-bot.w3.org)*
- ["media-playback-while-not-visible" Permission Policy · Issue #409 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/409) *(github.com)*
- [Pausing iframe media when not visible · Issue #1468 · web-platform-tests/interop · GitHub](https://github.com/web-platform-tests/interop/issues/1468) *(github.com)*
- [Allow embedders to dynamically mute iframe audio without pausing playback · Issue #2699 · WebAudio/web-audio-api · GitHub](https://github.com/WebAudio/web-audio-api/issues/2699) *(github.com)*
- [iframe-media-pausing/explainer.md at main · WICG/iframe-media-pausing · GitHub](https://github.com/WICG/iframe-media-pausing/blob/main/explainer.md) *(github.com)*
- [Proposal: pause iframe media when not rendered · Issue #10208 · whatwg/html · GitHub](https://github.com/whatwg/html/issues/10208) *(github.com)*
- [GitHub - WICG/iframe-media-pausing · GitHub](https://github.com/WICG/iframe-media-pausing) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 67 result(s) found across 12 planned queries — **25 verified relevant**
  - `"chromestatus.com/feature/5082950457884672" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (8 returned)
  - `"github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"wicg.github.io/iframe-media-pausing" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (6 returned)
  - `"Pause media playback on not-visible iframes" API` — *Core feature API query* (8 returned)
  - `"Pause media playback on not-visible iframes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"not-visible" OR "media-playback-while-not-visible" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Pause media playback on not-visible iframes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Pause media playback on not-visible iframes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"media-playback-while-not-visible" (allow= OR "Permissions-Policy")` — *Finds exact code snippets demonstrating the media-playback-while-not-visible Permission Policy in iframe allow attributes or HTTP headers.* (8 returned)
  - `"media-playback-while-not-visible" (guide OR tutorial OR "how to" OR blog)` — *Discovers developer-focused articles and tutorials explaining how to handle media playback in hidden or zero-size iframes.* (8 returned)
  - `"media-playback-while-not-visible" ("intent to ship" OR "intent to prototype" OR Chromium OR Blink OR Safari OR Firefox)` — *Tracks browser vendor release notes, Intent-to-Ship announcements, and multi-engine adoption status.* (8 returned)
  - `site:github.com ("iframe-media-pausing" OR "media-playback-while-not-visible") issues OR discussions` — *Surfaces developer questions, spec design edge-case debates, and open issues across WICG and Chromium repositories.* (6 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 6 tweet(s)*
- **Tweets found by web search:** 5 result(s) found — **1 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*

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
