# Pause media playback on not-visible iframes

> **Report Week:** 2026-W43 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Adds a "media-playback-while-not-visible" permission policy to allow embedders to pause audible media playback of embedded iframes which are currently hidden - i.e. "display" property set to "none"; "visibility" property set to "hidden"; or zero-area (width or height equal to 0). While hidden, attempts made by the embedded iframe to render audible media will be blocked. When the frame is shown again the prohibitions should be lifted. This should allow developers to build more user-friendly experiences and to also improve the performance by letting the browser handle the playback of content that is not visible to users.

### Motivation

Web applications that host embedded media content via iframes may wish to respond to application input by temporarily hiding the media content. These applications may not want to unload the entire iframe when it's not rendered since it could generate user-perceptible performance and experience issues when showing the media content again. At the same time, the user could have a negative experience if the media continues to play and emit audio when not rendered. This proposal aims to provide web applications with the ability to control embedded media content in such a way that guarantees their users have a good experience when the iframe's render status is changed.

## Ecosystem Status

- **Momentum:** Moderate (footprint 275 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The "Pause media playback on not-visible iframes" feature introduces the \`media-playback-while-not-visible\` Permission Policy, allowing embedders to halt audible media in hidden iframes without completely destroying the frame context. It addresses long-standing UX and performance issues associated with background audio in collapsed widgets or tabs. Browser vendor consensus is shaping up positively, with Mozilla Gecko expressing support due to parallel power-efficiency goals.

### Recommendations
- Actionable Advice: Development teams embedding third-party content via iframes should review their Permission Policy configurations and begin testing how the \`media-playback-while-not-visible\` directive impacts hidden state behaviors. Because it is opt-in for embedders, it can be progressively adopted to clean up user experience and improve resource management.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @padenot: "This is \`positive\`. As mentioned in a call to Gabriel, Gecko currently has complex logic to achieve this, for power efficiency reasons, and it would b..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** ["media-playback-while-not-visible" Permission Policy](https://github.com/WebKit/standards-positions/issues/409) [open]
- **Mozilla:** ["media-playback-while-not-visible" Permission Policy](https://github.com/mozilla/standards-positions/issues/1082) [closed]

## 📰 Ecosystem Blogs & Articles

- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/137) *(learn.microsoft.com)*
  > This Web Platform API allows embedding pages to automatically pause audible media playback (\`&lt;audio&gt;\`, \`&lt;video&gt;\`, and \`AudioContext\`) inside an embedded \`&lt;iframe&gt;\` whenever that iframe is hidden Its CSS \`visibility\` property is set to \`hidden\` or \`co...
- [chrome.com](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com)*
  > \*\*Chrome Release Notes (Chrome 155 Beta):\*\* Google highlighted the \`media-playback-while-not-visible\` policy as a major Web API addition
- [agustinbarrientos.com](https://agustinbarrientos.com/writing/brief/the-brief-26-41) *(agustinbarrientos.com)*
  > The announcement details how embedding pages can restrict playback via HTML attributes (\`&lt;iframe allow="media-playback-while-not-visible 'none'"&gt;&lt;/iframe&gt;\`) or via HTTP response headers (\`Permissions-Policy: media-playback-while-not-visible=()\`) \*\*En...
- [entranttechnologies.com](https://entranttechnologies.com/tech-news/chrome-155-jpeg-xl-post-quantum-webcrypto-and-what-to-test) *(entranttechnologies.com)*
  > \*\*Entrant Technologies & \*The Brief\* Tech Newsletter:\*\* Analyzed the real-world utility for web publishers, third-party video widgets, chat widgets, and ad networks They highlighted that because this policy is opt-in for embedders, it gives site auth...
- [windowslatest.com](https://www.windowslatest.com/2025/06/04/microsoft-could-help-reduce-unexpected-audio-or-video-playback-in-chrome) *(windowslatest.com)*
  > \*\*Winaero / Tech Coverage:\*\* Discussed the UX impact, pointing out that unexpected audio from hidden pop-ups or collapsed menus is one of the top user annoyances By letting the browser engine manage playback based on rendering status, it delivers a s...
- [winaero.com](https://winaero.com/google-rolls-out-chrome-155-with-https-first-enabled-by-default) *(winaero.com)*
  > \*\*Winaero / Tech Coverage:\*\* Discussed the UX impact, pointing out that unexpected audio from hidden pop-ups or collapsed menus is one of the top user annoyances
- [developer-signals.dev](https://developer-signals.dev/interop/proposals/1468) *(developer-signals.dev)*
  > \*\*Interop Signals:\*\* The policy has been submitted to Web Platform developer signals and Interop proposals, aiming to make iframe visibility-based pausing a consistent cross-browser baseline feature
- [\[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13464.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes Domenic Denicola Tue, 22 Apr 2025 02:28:55 -07...
- [\[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg10759.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes 'Gabriel Brito' via blink-dev Thu, 27 Jun 2024 12:03:52 ...
- [Intent to Prototype: Pause media playback on not-rendered iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/D0j1igiVHR8/m/PmfLqigIAQAJ) *(groups.google.com · 2024-06-27T00:00:00)*
  > https://&lt;strong&gt;github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe\_media\_pausing.md&lt;/strong&gt;
- [\[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17400.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Yoav Weiss (@Shopify) Wed, 09 Sep 2026 03:56:48 -0700 LGTM1 ...
- [\[blink-dev\] Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17375.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Pause media playback on not-visible iframes Chromestatus Fri, 04 Sep 2026 09:49:31 -0700 Contact emails \[email&#...
- [Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17418.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Chris Harrelson Wed, 09 Sep 2026 08:57:35 -0700 LGTM...
- [Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17406.html) *(mail-archive.com)*
  > Moreover, once the permission policy is used, it should help Chromium to be more optimized by pausing audio rendering for content that is not visible for the user. \*Activation\* &lt;strong&gt;Developers need to opt-in by setting &quot;allow&quot; property o...
- [\[blink-dev\] Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13456.html) *(mail-archive.com)*
  > Explainer https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe\_media\_pausing.md Specification None Summary &lt;strong&gt;Adds a &quot;media-playback-while-not-rendered&quot; permission policy to allow embedder websites to pau...
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/155) *(chromestatus.com · 2026-10-06T00:00:00)*
  > Adds a &quot;media-playback-while-not-visible&quot; permission policy to &lt;strong&gt;allow embedders to pause audible media playback of embedded iframes which are currently hidden&lt;/strong&gt; - i.e. &quot;display&quot; property set to &quot;none&quot;; &quo...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [media-playback-while-not-visible Permission Policy · Issue #1387 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1387) *(github.com · 2026-08-28T21:15:16)* *(Cites: `https://chromestatus.com/feature/5082950457884672`)*
  > media-playback-while-not-visible Permission Policy · Issue #1387 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with ano...
- ["media-playback-while-not-visible" Permission Policy · Issue #4292 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4292) *(github.com · 2026-09-01T17:43:52)* *(Cites: `https://chromestatus.com/feature/5082950457884672`)*
  > "media-playback-while-not-visible" Permission Policy · Issue #4292 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another t...
- [\[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13464.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes Domenic Denicola Tue, 22 Apr 2025 02...
- [\[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg10759.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > \[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes 'Gabriel Brito' via blink-dev Thu, 27 Jun 2024...
- [Intent to Prototype: Pause media playback on not-rendered iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/D0j1igiVHR8/m/PmfLqigIAQAJ) *(groups.google.com · 2024-06-27T00:00:00)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > https://&lt;strong&gt;github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe\_media\_pausing.md&lt;/strong&gt;
- [\[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17400.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Yoav Weiss (@Shopify) Wed, 09 Sep 2026 03:56:48 -0...
- [Pausing iframe media when not visible · Issue #1468 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1468) *(github.com · 2026-09-23T22:11:37)* *(Cites: `https://wicg.github.io/iframe-media-pausing`)*
  > Explainer: https://github.com/WICG/iframe-media-pausing/blob/main/explainer.md · https://&lt;strong&gt;wicg.github.io/iframe-media-pausing&lt;/strong&gt;/ web-platform-dx/web-features#4292 ·
- [\[blink-dev\] Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17375.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/iframe-media-pausing`)*
  > \[blink-dev\] Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Pause media playback on not-visible iframes Chromestatus Fri, 04 Sep 2026 09:49:31 -0700 Contact email...
- [Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17418.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/iframe-media-pausing`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Chris Harrelson Wed, 09 Sep 2026 08:57:35 ...

## 📚 Platform Documentation & Specifications

- [iframe-media-pausing/explainer.md at main · WICG/iframe-media-pausing](https://github.com/WICG/iframe-media-pausing/blob/main/explainer.md) *(github.com)*
- ["media-playback-while-not-visible" Permission Policy · Issue #409 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/409) *(github.com)*
- [media-playback-while-not-visible Permission Policy · Issue #1387 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1387) *(github.com)*
- ["media-playback-while-not-visible" Permission Policy · Issue #4292 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4292) *(github.com)*
- [Pausing iframe media when not visible · Issue #1468 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1468) *(github.com)*
- [Allow embedders to dynamically mute iframe audio without pausing playback · Issue #2699 · WebAudio/web-audio-api](https://github.com/WebAudio/web-audio-api/issues/2699) *(github.com)*
- [Proposal: pause iframe media when not rendered · Issue #10208 · whatwg/html](https://github.com/whatwg/html/issues/10208) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 47 result(s) found across 12 planned queries — **16 verified relevant**
  - `"chromestatus.com/feature/5082950457884672" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (6 returned)
  - `"wicg.github.io/iframe-media-pausing" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"Pause media playback on not-visible iframes" API` — *Core feature API query* (4 returned)
  - `"Pause media playback on not-visible iframes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"not-visible" OR "media-playback-while-not-visible" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Pause media playback on not-visible iframes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Pause media playback on not-visible iframes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
  - `"media-playback-while-not-visible" OR "iframe-media-pausing" (tutorial OR guide OR blog)` — *Finds technical blog posts, guides, and tutorials explaining how to use the permissions policy to pause hidden iframe media.* (8 returned)
  - `"allow=" "media-playback-while-not-visible" OR "Permissions-Policy: media-playback-while-not-visible"` — *Targets real-world HTML markup and HTTP header implementations demonstrating exact syntax for the permission policy.* (8 returned)
  - `"media-playback-while-not-visible" ("Intent to Ship" OR "Intent to Prototype" OR chromestatus OR edge)` — *Discovers browser vendor adoption announcements, roadmap tracking, and Intent to Ship/Prototype threads across Chromium and Edge.* (2 returned)
  - `site:github.com ("iframe-media-pausing" OR "media-playback-while-not-visible") (issue OR discussion OR pull)` — *Captures developer questions, edge cases, and standards discussions in WICG and Microsoft Edge GitHub repositories.* (5 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *found 5 tweet(s)*
- **Tweets found by web search:** 3 result(s) found — **0 verified relevant**
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
