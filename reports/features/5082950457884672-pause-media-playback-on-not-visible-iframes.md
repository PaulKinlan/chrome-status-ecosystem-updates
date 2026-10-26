# Pause media playback on not-visible iframes

> **Report Week:** 2026-W44 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Adds a "media-playback-while-not-visible" permission policy to allow embedders to pause audible media playback of embedded iframes which are currently hidden - i.e. "display" property set to "none"; "visibility" property set to "hidden"; or zero-area (width or height equal to 0). While hidden, attempts made by the embedded iframe to render audible media will be blocked. When the frame is shown again the prohibitions should be lifted. This should allow developers to build more user-friendly experiences and to also improve the performance by letting the browser handle the playback of content that is not visible to users.

### Motivation

Web applications that host embedded media content via iframes may wish to respond to application input by temporarily hiding the media content. These applications may not want to unload the entire iframe when it's not rendered since it could generate user-perceptible performance and experience issues when showing the media content again. At the same time, the user could have a negative experience if the media continues to play and emit audio when not rendered. This proposal aims to provide web applications with the ability to control embedded media content in such a way that guarantees their users have a good experience when the iframe's render status is changed.

## Ecosystem Status

- **Momentum:** Moderate (footprint 275 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** Incubated within the WICG by Microsoft and enabled by default in Chromium 155, the 'media-playback-while-not-visible' permission policy enables embedders to automatically pause audible playback in hidden iframes without unmounting their DOM tree. It directly solves long-standing issues surrounding phantom background audio, user disruption, and resource drain in toggled UI components like tabs, carousels, and modal dialogs. Browser vendor alignment is strong, with Mozilla officially endorsing the feature and WebKit favorably evaluating the specification.

### Recommendations
- Actionable Advice: Teams managing embedded video, audio, or third-party ad iframes can progressively enhance embed tags with the allow attribute or deploy the Permissions-Policy HTTP header to automatically halt hidden playback in Chromium browsers. For comprehensive cross-browser coverage until Safari and Firefox implement the policy, maintain existing fallback mechanisms such as Intersection Observer checks or iframe messaging.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @padenot: "This is \`positive\`. As mentioned in a call to Gabriel, Gecko currently has complex logic to achieve this, for power efficiency reasons, and it would b..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** ["media-playback-while-not-visible" Permission Policy](https://github.com/WebKit/standards-positions/issues/409) [open]
- **Mozilla:** ["media-playback-while-not-visible" Permission Policy](https://github.com/mozilla/standards-positions/issues/1082) [closed]

## 📰 Ecosystem Blogs & Articles

- [microsoft.com](https://developer.microsoft.com/microsoft-edge/origin-trials/trials/4d251c7a-1324-4943-a9ba-7ad5526f16fd) *(developer.microsoft.com)*
  > \*\*How It Works:\*\* When an embedded iframe is hidden—such as via \`display: none\`, \`visibility: hidden\` (or \`collapse\`), or zero-dimensional sizing (\`width: 0\` or \`height: 0\`)—the browser automatically blocks or pauses audible media playback \*\*Scope:\*\*...
- [windowslatest.com](https://www.windowslatest.com/2025/06/04/microsoft-could-help-reduce-unexpected-audio-or-video-playback-in-chrome) *(windowslatest.com)*
  > \*\*Problem Solved:\*\* Previously, developers hiding an iframe (e.g., collapsing an e-commerce preview or an overlaid modal) had to either completely tear down and recreate the iframe DOM—causing significant re-buffering and performance hitches—or imple...
- [chrome.com](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com)*
  > \*\*Source:\*\* \*developer.chrome.com\* / \*Chrome Platform Status\* \*\*Details:\*\* Chrome documented the feature under the title \*"Pause media playback on not-visible iframes"\*
- [chromestatus.com](https://chromestatus.com/release-notes/155) *(chromestatus.com)*
  > \*\*Details:\*\* Chrome documented the feature under the title \*"Pause media playback on not-visible iframes"\* Following developer and origin trials (Milestones 137–145), the policy officially graduated to enabled-by-default status in Chromium 155
- [appspot.com](https://f896c59-dot-app-py3-dot-cr-status.appspot.com) *(f896c59-dot-app-py3-dot-cr-status.appspot.com)*
  > Following developer and origin trials (Milestones 137–145), the policy officially graduated to enabled-by-default status in Chromium 155
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/155) *(learn.microsoft.com)*
  > Edge 155 shipped this behavior in lockstep with Chromium
- [januschka.com](https://static.januschka.com/changelog/chromium/i2s/M155.html) *(static.januschka.com)*
  > Edge 155 shipped this behavior in lockstep with Chromium
- [github.io](https://mozilla.github.io/standards-positions) *(mozilla.github.io)*
  > \*\*Stance:\*\* \*\*Positive\*\* \*\*Reaction:\*\* Mozilla engineers noted that Gecko historically had to rely on complex internal heuristics and power-saving hacks to guess when hidden iframes were draining battery or playing sound invisibly
- [Re: \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13479.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes 'Gabriel Brito' via blink-dev Tue, 22 ...
- [\[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg10759.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes 'Gabriel Brito' via blink-dev Thu, 27 Jun 2024 12:03:52 ...
- [Intent to Prototype: Pause media playback on not-rendered iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/D0j1igiVHR8/m/PmfLqigIAQAJ) *(groups.google.com · 2024-06-27T00:00:00)*
  > Intent to Prototype: Pause media playback on not-rendered iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Pause media pla...
- [\[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17400.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Yoav Weiss (@Shopify) Wed, 09 Sep 2026 03:56:48 -0700 LGTM1 ...
- [\[blink-dev\] Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17375.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Pause media playback on not-visible iframes Chromestatus Fri, 04 Sep 2026 09:49:31 -0700 Contact emails \[email&#...
- [Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17418.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Chris Harrelson Wed, 09 Sep 2026 08:57:35 -0700 LGTM...
- [Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17406.html) *(mail-archive.com)*
  > Moreover, once the permission policy is used, it should help Chromium to be more optimized by pausing audio rendering for content that is not visible for the user. \*Activation\* &lt;strong&gt;Developers need to opt-in by setting &quot;allow&quot; property o...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- ["media-playback-while-not-visible" Permission Policy · Issue #4292 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4292) *(github.com · 2026-09-01T17:43:52)* *(Cites: `https://chromestatus.com/feature/5082950457884672`)*
  > "media-playback-while-not-visible" Permission Policy · Issue #4292 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another t...
- [Re: \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13479.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > Re: \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes 'Gabriel Brito' via blink-de...
- [\[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg10759.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > \[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes 'Gabriel Brito' via blink-dev Thu, 27 Jun 2024...
- [Intent to Prototype: Pause media playback on not-rendered iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/D0j1igiVHR8/m/PmfLqigIAQAJ) *(groups.google.com · 2024-06-27T00:00:00)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > Intent to Prototype: Pause media playback on not-rendered iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Pause...
- [\[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17400.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Yoav Weiss (@Shopify) Wed, 09 Sep 2026 03:56:48 -0...
- [Pausing iframe media when not visible · Issue #1468 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1468) *(github.com · 2026-09-23T22:11:37)* *(Cites: `https://wicg.github.io/iframe-media-pausing`)*
  > Explainer: https://github.com/WICG/iframe-media-pausing/blob/main/explainer.md · https://&lt;strong&gt;wicg.github.io/iframe-media-pausing&lt;/strong&gt;/ web-platform-dx/web-features#4292 ·
- [\[blink-dev\] Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17375.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/iframe-media-pausing`)*
  > \[blink-dev\] Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Pause media playback on not-visible iframes Chromestatus Fri, 04 Sep 2026 09:49:31 -0700 Contact email...
- [Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17418.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/iframe-media-pausing`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Chris Harrelson Wed, 09 Sep 2026 08:57:35 ...

## 📚 Platform Documentation & Specifications

- ["media-playback-while-not-visible" Permission Policy · Issue #409 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/409) *(github.com)*
- [github.com](https://github.com/WebKit/standards-positions/issues/410) *(github.com)*
- [media-playback-while-not-visible Permission Policy · Issue #1387 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1387) *(github.com)*
- [w3.org](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1084) *(tag-github-bot.w3.org)*
- ["media-playback-while-not-visible" Permission Policy · Issue #4292 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4292) *(github.com)*
- [Pausing iframe media when not visible · Issue #1468 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1468) *(github.com)*
- [Proposal: pause iframe media when not rendered · Issue #10208 · whatwg/html](https://github.com/whatwg/html/issues/10208) *(github.com)*
- [iframe-media-pausing/explainer.md at main · WICG/iframe-media-pausing](https://github.com/WICG/iframe-media-pausing/blob/main/explainer.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 40 result(s) found across 12 planned queries — **13 verified relevant**
  - `"chromestatus.com/feature/5082950457884672" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (6 returned)
  - `"wicg.github.io/iframe-media-pausing" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"Pause media playback on not-visible iframes" API` — *Core feature API query* (4 returned)
  - `"Pause media playback on not-visible iframes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"not-visible" OR "media-playback-while-not-visible" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Pause media playback on not-visible iframes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Pause media playback on not-visible iframes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (4 returned)
  - `"media-playback-while-not-visible" ("Permissions-Policy" OR "allow") iframe` — *Finds practical HTML iframe attribute and HTTP header configuration examples for the permission policy.* (8 returned)
  - `("media-playback-while-not-visible" OR "iframe media pausing") (guide OR tutorial OR blog OR "web.dev")` — *Discovers web developer tutorials, architectural guides, and technical blog posts explaining how to pause background iframe media.* (3 returned)
  - `"media-playback-while-not-visible" ("intent to ship" OR "intent to prototype" OR Chrome OR Chromium)` — *Tracks browser vendor release notes, Chromium intent discussions, and feature status updates across rendering engines.* (1 returned)
  - `("media-playback-while-not-visible" OR "iframe-media-pausing") (site:github.com/mozilla/standards-positions OR site:github.com/WebKit/standards-positions OR site:github.com/WICG)` — *Uncovers cross-vendor standards feedback and sentiment from Mozilla, WebKit, and WICG consensus discussions.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **12 verified relevant**
- **Twitter / X API v2:** *found 5 tweet(s)*
- **Tweets found by web search:** 2 result(s) found — **0 verified relevant**
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
