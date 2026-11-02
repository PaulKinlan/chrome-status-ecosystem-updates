# Long Animation Frames style and layout duration

> **Report Week:** 2026-W45 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

Add \`styleDuration\` and \`forcedStyleDuration\` information to the Long Animation Frame API, enabling developers to distinguish style and layout times.

### Motivation

Currently performance-conscious developers have no way to distinguish their style time from their layout time, making CSS performance issues less actionable than they can be.  This feature enables developers to make that distinction.

## Ecosystem Status

- **Momentum:** Moderate (+90 points since 2026-10-12; footprint 275 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The Long Animation Frames API enhancement introduces discrete style and layout timings—such as \`styleDuration\` and \`forcedStyleDuration\`—enabling fine-grained diagnostics for CSS recalculations versus geometric layout thrashing. While Chromium and Microsoft Edge have spearheaded the capability toward general availability in Chrome 157 following origin trials, broader cross-engine support remains absent. Consequently, this serves as an advanced Chromium-centric telemetry enhancement rather than an interoperable baseline metric.

### Recommendations
- Actionable Advice: Performance monitoring and real-user monitoring (RUM) teams should adopt these properties through progressive enhancement by checking for property existence on frame and script timing entries. Teams can immediately leverage this telemetry in Chromium browsers to isolate CSS recalcs from layout thrashing while gracefully falling back to aggregate timings elsewhere.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @tunetheweb: "Answering for @noamr who’s on annual leave at the moment.  This started off as part of the long tasks spec—hence the links in the original request in ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Performance timeline - Long Animation Frames](https://github.com/WebKit/standards-positions/issues/283) [open]

## 📰 Ecosystem Blogs & Articles

- [Long Animation Frames Splits Style From Layout in Chrome 157: Finding Layout Thrashing in the Field \| Trade Assistance LLC](https://trade-assistance.com/blog/long-animation-frames-style-layout-duration-chrome-157) *(trade-assistance.com)*
  > Previously, LoAF bundled these phases together (via \`styleAndLayoutStart\` for frame rendering and \`forcedStyleAndLayoutDuration\` for script-level thrashing) \*\*Key takeaway:\*\* The feature progressed through origin trials across Chromium-based browsers...
- [github.io](https://w3c.github.io/long-animation-frames) *(w3c.github.io)*
  > The updated specification introduces four dedicated timing properties
- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides/performance/identify-inp-causes?hl=en) *(developer.chrome.com)*
  > \`styleDuration\`: Time spent recalculating styles during the rendering update \`layoutDuration\`: Time spent computing geometry and layout passes
- [microsoft.com](https://developer.microsoft.com/microsoft-edge/origin-trials/trials/349e23d8-799a-4ac2-b45a-ffb91e09b4ce) *(developer.microsoft.com)*
  > \*\*Overview:\*\* Added under Chrome Platform Status (Tracking bug \`#476826067\`) and detailed across Chromium release cycles and Edge Origin Trials \*\*Overview:\*\* Microsoft highlighted the feature under its Origin Trial program titled \*"Long Animation Fra...
- [chromestatus.com](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > \*\*Overview:\*\* Added under Chrome Platform Status (Tracking bug \`#476826067\`) and detailed across Chromium release cycles and Edge Origin Trials
- [reddit.com](https://www.reddit.com/r/webperf/comments/1xfs4e0/webperf_weekly_26) *(reddit.com)*
  > \*\*Key takeaway:\*\* The feature progressed through origin trials across Chromium-based browsers before graduating toward shipping status (flagged in developer channels such as Chrome 157 beta and Chromium 158 communications by Chrome performance engine...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/155) *(learn.microsoft.com)*
  > \*\*Overview:\*\* Microsoft highlighted the feature under its Origin Trial program titled \*"Long Animation Frames - separate style and layout durations"\* \*\*Key takeaway:\*\* The trial explicitly exposed all four attributes (\`styleDuration\`, \`layoutDuration...
- [nucliweb.net](https://webperf-snippets.nucliweb.net/Interaction/Long-Animation-Frames) *(webperf-snippets.nucliweb.net)*
  > \*\*Overview:\*\* Independent web performance analysts and developer blogs have welcomed the change as one of the most practical additions to field diagnostics
- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17762.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Mike Taylor Thu, 15 Oct 2026 17:49:20 -0700 ...
- [\[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17594.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration Yoav Weiss (@Shopify) Wed, 30 Sep 2026 06:47:27 -0700 \*Conta...
- [\[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17610.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Alex Russell Wed, 30 Sep 2026 08:35:51 -0700 LGTM1; ...
- [\[blink-dev\] Intent to Prototype: Long Animation Frames style duration](https://www.mail-archive.com/blink-dev@chromium.org/msg15596.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Long Animation Frames style duration Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Long Animation Frames style duration Yoav Weiss (@Shopify) Mon, 19 Jan 2026 02:27:24 -0800 \*Contact emails\* \[...
- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17739.html) *(mail-archive.com)*
  > &gt; \*No information provided\* &gt; &gt; &gt; \*Debuggability\* &gt; \*No information provided\* &gt; &gt; \*Will this feature be supported on all six Blink platforms (Windows, Mac, &gt; Linux, ChromeOS, Android, and Android WebView)?\* &gt; Yes &gt; &gt; ...
- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17738.html) *(mail-archive.com)*
  > Best, Alex On Wednesday, September ...m/w3c/long-animation-frames/pull/30 \*Summary\* &lt;strong&gt;Add \`styleDuration\` and \`forcedStyleDuration\` information to the Long Animation Frame API, enabling developers to distinguish style and layout times&lt;/strong&gt;....
- [\[blink-dev\] Intent to Experiment: Long Animation Frames style/layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg16017.html) *(mail-archive.com)*
  > \*Specification\* https://github... &lt;strong&gt;Add \`styleDuration\`, \`forcedStyleDuration\`, \`layoutDuration\` and \`forcedLayoutDuration\` information to the Long Animation Frame API, enabling developers to distinguish style and layout times&lt;/strong&gt;. \*Blink ...
- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17740.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; Best, &gt;&gt; &gt;&gt; Alex &gt;&gt; &gt;&gt; On ...nimation-frames/pull/30 &gt;&gt; &gt;&gt; \*Summary\* &gt;&gt; &lt;strong&gt;Add \`styleDuration\` and \`forcedStyleDuration\` information to the Long &gt;&gt; Animation Frame API, enabling d...
- [Re: \[blink-dev\] Intent to Experiment: Long Animation Frames style/layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg16025.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; On Fri, Mar 6, 2026 at 9:02 AM Ian Kilpatrick &lt; &gt;&gt;&gt;&gt;&gt;&gt; \[email protected\]&gt; wrote: &gt;&gt;&gt;&gt...
- [Re: \[blink-dev\] Intent to Experiment: Long Animation Frames style/layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17592.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · Re: \[blink-dev\] Intent to Experiment: Long Animation Frames style/layout duration · &#x27;Mateusz Krzeszowiak&#x27; via blink-dev Wed, 30 Sep 2026 03:46:35 -0700 · Hi all! We collected styleDuration, forcedStyl...
- [Chrome Platform Status](https://chromestatus.com/feature/5171478175809536?gate=5452953152520192) *(chromestatus.com)*
  > Chrome Platform Status

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17762.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/long-animation-frames/pull/30#issue-3828859369`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Mike Taylor Thu, 15 Oct 2026 17:49...
- [\[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17594.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/long-animation-frames/pull/30#issue-3828859369`)*
  > \[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration Yoav Weiss (@Shopify) Wed, 30 Sep 2026 06:47:27 -0...
- [\[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17610.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/long-animation-frames/pull/30#issue-3828859369`)*
  > \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Alex Russell Wed, 30 Sep 2026 08:35:51 -07...
- [\[blink-dev\] Intent to Prototype: Long Animation Frames style duration](https://www.mail-archive.com/blink-dev@chromium.org/msg15596.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/long-animation-frames/pull/30#issue-3828859369`)*
  > \[blink-dev\] Intent to Prototype: Long Animation Frames style duration Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Long Animation Frames style duration Yoav Weiss (@Shopify) Mon, 19 Jan 2026 02:27:24 -0800 \*Contact...

## 📚 Platform Documentation & Specifications

- [style\_layout\_duration\_security\_privacy\_questionnaire.md · GitHub](https://gist.github.com/yoavweiss/18e5c13239c43e34dadeda0fd2846834) *(gist.github.com)*
- [Long Animation Frames style and Layout duration · Issue #4453 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4453) *(github.com)*
- [Long Animation Frames style and layout duration · Issue #1615 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1615) *(github.com)*
- [Long Animation Frames style and layout duration · Issue #39 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/39) *(github.com)*
- [Release merge\_pr\_63724 · web-platform-tests/wpt · GitHub](https://github.com/web-platform-tests/wpt/releases/tag/merge_pr_63724) *(github.com)*
- [Add bounds to LoAF style and layout durations by yoavweiss · Pull Request #63399 · web-platform-tests/wpt · GitHub](https://github.com/web-platform-tests/wpt/pull/63399) *(github.com)*
- [Align existing LoAF tests with spec and expand coverage by noamr · Pull Request #63724 · web-platform-tests/wpt · GitHub](https://github.com/web-platform-tests/wpt/pull/63724) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 47 result(s) found across 11 planned queries — **17 verified relevant**
  - `"chromestatus.com/feature/5171478175809536" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/w3c/long-animation-frames/pull/30" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"Long Animation Frames style and layout duration" API` — *Core feature API query* (6 returned)
  - `"Long Animation Frames style and layout duration" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"performance-conscious" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Long Animation Frames style and layout duration" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Long Animation Frames style and layout duration" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
  - `"Long Animation Frames" ("styleDuration" OR "forcedStyleDuration") (CSS OR layout) performance` — *Finds technical articles, developer blogs, and performance guides explaining how to differentiate style recalculation from layout using the LoAF API.* (8 returned)
  - `"PerformanceObserver" "long-animation-frame" ("styleDuration" OR "forcedStyleDuration")` — *Finds practical JavaScript code snippets and implementation examples measuring style and forced style timings via PerformanceObserver.* (8 returned)
  - `"Long Animation Frame" ("styleDuration" OR "forcedStyleDuration") ("Intent to Ship" OR "Chrome" OR "Chromium")` — *Surfaces browser release notes, Chromium intent-to-ship announcements, and browser engine rollout statuses for LoAF style duration metrics.* (8 returned)
  - `"styleDuration" "forcedStyleDuration" ("long-animation-frames" OR "LoAF") site:github.com` — *Uncovers specification issues, PRs, and web performance working group discussions regarding the addition of style and layout breakdown properties.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 3 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 7 result(s) found — **7 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 9 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5171478175809536)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5171478175809536)
- [Specification](https://github.com/w3c/long-animation-frames/pull/30)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/476826067)
