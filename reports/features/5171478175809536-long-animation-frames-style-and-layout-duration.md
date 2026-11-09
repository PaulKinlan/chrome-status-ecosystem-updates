# Long Animation Frames style and layout duration

> **Report Week:** 2026-W46 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

Add \`styleDuration\` and \`forcedStyleDuration\` information to the Long Animation Frame API, enabling developers to distinguish style and layout times.

### Motivation

Currently performance-conscious developers have no way to distinguish their style time from their layout time, making CSS performance issues less actionable than they can be.  This feature enables developers to make that distinction.

## Ecosystem Status

- **Momentum:** Moderate (+120 points since 2026-10-12; footprint 305 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** The Long Animation Frames (LoAF) API enhancement splits previously aggregated rendering metrics by introducing \`styleDuration\` and \`layoutDuration\` on frame entries, alongside \`forcedStyleDuration\` and \`forcedLayoutDuration\` on script entries. Enabled by default in Chromium-based browsers starting with Chrome and Microsoft Edge 157, the addition directly targets INP bottlenecks by disambiguating CSS selector overhead from DOM layout recalculations. However, cross-browser consensus remains lopsided, as the parent LoAF specification has yet to gain implementation traction in Gecko or WebKit.

### Recommendations
- Actionable Advice: Performance and telemetry teams should adopt these attributes via progressive enhancement by checking for the existence of \`styleDuration\` or \`forcedStyleDuration\` on incoming LoAF entries. RUM collectors should record both the aggregate fallback values and the new granular durations to optimize INP investigations across Chromium users immediately.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @tunetheweb: "Answering for @noamr who’s on annual leave at the moment.  This started off as part of the long tasks spec—hence the links in the original request in ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Performance timeline - Long Animation Frames](https://github.com/WebKit/standards-positions/issues/283) [open]

## 📰 Ecosystem Blogs & Articles

- [Long Animation Frames Splits Style From Layout in Chrome 157: Finding Layout Thrashing in the Field \| Trade Assistance LLC](https://trade-assistance.com/blog/long-animation-frames-style-layout-duration-chrome-157) *(trade-assistance.com)*
  > The \*\*Long Animation Frame (LoAF) API\*\* helps developers diagnose main-thread jank and slow interactions (such as poor \*\*Interaction to Next Paint / INP\*\*) directly in real-user monitoring (RUM) Previously, LoAF bundled style recalculation and layout...
- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides/performance/identify-inp-causes) *(developer.chrome.com)*
  > The \*\*Long Animation Frame (LoAF) API\*\* helps developers diagnose main-thread jank and slow interactions (such as poor \*\*Interaction to Next Paint / INP\*\*) directly in real-user monitoring (RUM) This separation allows developers to distinguish betwee...
- [github.io](https://w3c.github.io/long-animation-frames) *(w3c.github.io)*
  > The update introduces \*\*\`styleDuration\`\*\* and \*\*\`forcedStyleDuration\`\*\* (along with corresponding \`layoutDuration\` and \`forcedLayoutDuration\` counterparts) \*\*Publication\*\*: W3C Long Animation Frames Specification & Privacy/Security Review
- [microsoft.com](https://developer.microsoft.com/microsoft-edge/origin-trials/trials/349e23d8-799a-4ac2-b45a-ffb91e09b4ce) *(developer.microsoft.com)*
  > The update introduces \*\*\`styleDuration\`\*\* and \*\*\`forcedStyleDuration\`\*\* (along with corresponding \`layoutDuration\` and \`forcedLayoutDuration\` counterparts) \*\*Core Message\*\*: Enables developers to distinguish style and layout times in the wild
- [chromestatus.com](https://chromestatus.com/feature/5171478175809536?gate=5452953152520192) *(chromestatus.com)*
  > \*\*Announcements\*\*: Listed under \*Chrome Platform Status\* and official release notes (piloted around Chrome 148 and shipping through Chrome 157) led by Blink Performance API engineers (e.g., Yoav Weiss) \*\*Core Message\*\*: Enables developers to distingu...
- [chrome.com](https://developer.chrome.com/release-notes/148) *(developer.chrome.com)*
  > \*\*Announcements\*\*: Listed under \*Chrome Platform Status\* and official release notes (piloted around Chrome 148 and shipping through Chrome 157) led by Blink Performance API engineers (e.g., Yoav Weiss)
- [januschka.com](https://static.januschka.com/changelog/chromium/i2s/M157.html) *(static.januschka.com)*
  > \*\*Announcements\*\*: Listed under \*Chrome Platform Status\* and official release notes (piloted around Chrome 148 and shipping through Chrome 157) led by Blink Performance API engineers (e.g., Yoav Weiss)
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/152) *(learn.microsoft.com)*
  > \*\*Publication\*\*: Microsoft Edge Web Platform Release Notes (Edge 151–155) & Edge Origin Trials Documented under the origin trial \*"Long Animation Frames - separate style and layout durations"\*
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/154) *(learn.microsoft.com)*
  > \*\*Publication\*\*: Microsoft Edge Web Platform Release Notes (Edge 151–155) & Edge Origin Trials
- [\[blink-dev\] Intent to Prototype: Long Animation Frames style duration](https://www.mail-archive.com/blink-dev@chromium.org/msg15596.html) *(mail-archive.com)*
  > \*Initial public proposal\* https://github.com/w3c/long-animation-frames/pull/30 \*Requires code in //chrome?\* False \*Tracking bug\* https://issues.chromium.org/issues/476826067 \*Estimated milestones\* No milestones specified \*Link to entry on the Chrome ...
- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17740.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Philip Jägenstedt Thu, 15 Oct 2026 01:30:08 ...
- [Intent to Ship: Long Animation Frames style and layout duration](https://groups.google.com/a/chromium.org/g/blink-dev/c/jWDYVP9tbgU/m/ia0jxTpZCgAJ) *(groups.google.com)*
  > Intent to Ship: Long Animation Frames style and layout duration Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Long Animation Frames ...
- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17762.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Mike Taylor Thu, 15 Oct 2026 17:49:20 -0700 ...
- [\[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17594.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration Yoav Weiss (@Shopify) Wed, 30 Sep 2026 06:47:27 -0700 \*Conta...
- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17738.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Yoav Weiss (@Shopify) Thu, 15 Oct 2026 01:02...
- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17667.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Rick Byers Wed, 07 Oct 2026 08:18:45 -0700 L...
- [\[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17610.html) *(mail-archive.com)*
  > Best, Alex On Wednesday, September 30, 2026 at 2:47:22 PM UTC+1 Yoav Weiss wrote: &gt; \*Contact emails\* &gt; \[email protected\] &gt; &gt; \*Explainer\* &gt; https://&lt;strong&gt;github.com/w3c/long-animation-frames/pull/30&lt;/strong&gt;#issue-3828859369 &gt; &gt;...
- [\[blink-dev\] Intent to Experiment: Long Animation Frames style/layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg16017.html) *(mail-archive.com)*
  > \*Specification\* https://github.com/w3c/long-animation-frames/pull/30 \*Summary\* &lt;strong&gt;Add \`styleDuration\`, \`forcedStyleDuration\`, \`layoutDuration\` and \`forcedLayoutDuration\` information to the Long Animation Frame API, enabling developers to disting...
- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17739.html) *(mail-archive.com)*
  > &gt; \*No information provided\* &gt; &gt; &gt; \*Debuggability\* &gt; \*No information provided\* &gt; &gt; \*Will this feature be supported on all six Blink platforms (Windows, Mac, &gt; Linux, ChromeOS, Android, and Android WebView)?\* &gt; Yes &gt; &gt; ...
- [Microsoft Edge 157 web platform release notes (Nov. 5, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com · 2026-11-05T13:28:25)*
  > PerformanceLongAnimationFrameTiming objects have the new styleDuration and layoutDuration properties, which &lt;strong&gt;report the time that&#x27;s spent recalculating styles and updating layout, as part of the rendering update&lt;/strong&gt;.
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com · 2026-11-02T20:19:23)*
  > Add styleDuration and forcedStyleDuration information to the Long Animation Frame API, enabling developers to distinguish style and layout times.
- [Chrome 148 beta  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/chrome-148-beta?hl=en) *(developer.chrome.com)*
  > This feature adds styleDuration and forcedStyleDuration information to the Long Animation Frame API.
- [Chrome 148  \|  Release notes  \|  Chrome for Developers](https://developer.chrome.com/release-notes/148?hl=en) *(developer.chrome.com · 2026-05-05T19:30:03)*
  > Add styleDuration and forcedStyleDuration information to the Long Animation Frame API, enabling developers to distinguish style and layout times.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: Long Animation Frames style duration](https://www.mail-archive.com/blink-dev@chromium.org/msg15596.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5171478175809536`)*
  > \*Initial public proposal\* https://github.com/w3c/long-animation-frames/pull/30 \*Requires code in //chrome?\* False \*Tracking bug\* https://issues.chromium.org/issues/476826067 \*Estimated milestones\* No milestones specified \*Link to entry on t...
- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17740.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5171478175809536`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Philip Jägenstedt Thu, 15 Oct 2026...
- [Intent to Ship: Long Animation Frames style and layout duration](https://groups.google.com/a/chromium.org/g/blink-dev/c/jWDYVP9tbgU/m/ia0jxTpZCgAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5171478175809536`)*
  > Intent to Ship: Long Animation Frames style and layout duration Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Long Animati...
- [Long Animation Frames style and layout duration · Issue #39 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/39) *(github.com · 2026-10-05T08:17:16)* *(Cites: `https://chromestatus.com/feature/5171478175809536`)*
  > Long Animation Frames style and layout duration · Issue #39 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to ...
- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17762.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5171478175809536`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Mike Taylor Thu, 15 Oct 2026 17:49...
- [Updates for Chrome 157 beta by Elchi3 · Pull Request #30893 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30893) *(github.com)* *(Cites: `https://chromestatus.com/feature/5171478175809536`)*
  > The spec for https://&lt;strong&gt;chromestatus.com/feature/5171478175809536&lt;/strong&gt; was only merged yesterday, I will have to re-run Collection next week when I have the IDL.
- [\[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17594.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5171478175809536`)*
  > \[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration Yoav Weiss (@Shopify) Wed, 30 Sep 2026 06:47:27 -0...
- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17738.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/long-animation-frames/pull/30#issue-3828859369`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Yoav Weiss (@Shopify) Thu, 15 Oct ...
- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17667.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/long-animation-frames/pull/30#issue-3828859369`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Rick Byers Wed, 07 Oct 2026 08:18:...
- [\[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17610.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/long-animation-frames/pull/30#issue-3828859369`)*
  > Best, Alex On Wednesday, September 30, 2026 at 2:47:22 PM UTC+1 Yoav Weiss wrote: &gt; \*Contact emails\* &gt; \[email protected\] &gt; &gt; \*Explainer\* &gt; https://&lt;strong&gt;github.com/w3c/long-animation-frames/pull/30&lt;/strong&gt;#issue-3828859369...
- [\[blink-dev\] Intent to Experiment: Long Animation Frames style/layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg16017.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/long-animation-frames/pull/30#issue-3828859369`)*
  > \*Specification\* https://github.com/w3c/long-animation-frames/pull/30 \*Summary\* &lt;strong&gt;Add \`styleDuration\`, \`forcedStyleDuration\`, \`layoutDuration\` and \`forcedLayoutDuration\` information to the Long Animation Frame API, enabling developers ...

## 📚 Platform Documentation & Specifications

- [github.com](https://gist.github.com/yoavweiss/18e5c13239c43e34dadeda0fd2846834) *(gist.github.com)*
- [Long Animation Frames style and layout duration · Issue #39 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/39) *(github.com)*
- [Updates for Chrome 157 beta by Elchi3 · Pull Request #30893 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30893) *(github.com)*
- [Long Animation Frames style and Layout duration · Issue #4453 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4453) *(github.com)*
- [Long Animation Frames style and layout duration · Issue #1615 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1615) *(github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/157.md at main · MicrosoftDocs/edge-developer · GitHub](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/157.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 52 result(s) found across 11 planned queries — **20 verified relevant**
  - `"chromestatus.com/feature/5171478175809536" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (8 returned)
  - `"github.com/w3c/long-animation-frames/pull/30" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"Long Animation Frames style and layout duration" API` — *Core feature API query* (8 returned)
  - `"Long Animation Frames style and layout duration" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"performance-conscious" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Long Animation Frames style and layout duration" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Long Animation Frames style and layout duration" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
  - `"PerformanceLongAnimationFrameTiming" ("styleDuration" OR "forcedStyleDuration") PerformanceObserver` — *Finds code samples and WebIDL implementations observing long animation frames with style and forced layout durations.* (8 returned)
  - `"Long Animation Frames" ("styleDuration" OR "forcedStyleDuration") (debug OR guide OR tutorial OR "CSS performance")` — *Discovers developer tutorials, practical guides, and articles demonstrating how to debug CSS and layout performance bottlenecks using LoAF.* (8 returned)
  - `site:chromestatus.com OR site:developer.chrome.com OR site:web.dev "Long Animation Frames" "styleDuration"` — *Tracks browser feature status announcements, Intent to Ship threads, and developer advocacy posts from browser vendors.* (8 returned)
  - `site:github.com/w3c/long-animation-frames ("styleDuration" OR "forcedStyleDuration" OR "pull/30")` — *Surfaces specification evolution, developer feedback, and standardization debate on separating style calculation time from layout time in LoAF.* (1 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 5 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 3 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5171478175809536)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5171478175809536)
- [Specification](https://github.com/w3c/long-animation-frames/pull/30)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/476826067)
