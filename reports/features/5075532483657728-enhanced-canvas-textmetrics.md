# Enhanced Canvas TextMetrics

> **Report Week:** 2026-W42 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

Expand the TextMetrics Canvas API to support selection rectangles, bounding box queries, and glyph cluster-based operations.  This new functionality should enable complex text editing applications with accurate selection, caret positioning, and hit testing.  Additionally, cluster-based rendering facilitates sophisticated text effects such as independent character animations and styling.

### Motivation

The existing TextMetrics API provides measurements for atomic text, but offers no facilities to break down that information to a more granular level.  Sophisticated text applications (editors in particular) require such granular information in order to support accurate selection, caret positioning and hit testing at a grapheme level.  Currently they are resorting to various inaccurate approximations to work around API limitations.  Another complex use case involves rendering fragments of pre-shaped text with different attributes - e.g. different colors or different transforms.  This is of particular interest to animation frameworks which allow characters to be animated independently.  Such functionality is not directly supported in existing APIs, and implementers must again resort to approximate workarounds.  The enhanced TextMetrics proposal aims to address the current API shortcomings and to offer first class support for the above use cases.

## Ecosystem Status

- **Momentum:** Moderate (footprint 260 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Enhanced Canvas TextMetrics expands the 2D Canvas API by providing sub-string selection rectangles, caret index mapping, and glyph cluster bounding boxes to replace expensive binary-search measurement workarounds. While Chromium and Igalia have pushed the implementation forward to ship out-of-the-box in Chromium, universal cross-engine consensus remains pending in WHATWG specifications. Ecosystem debates continue regarding its long-term scope alongside complementary HTML-in-Canvas proposals.

### Recommendations
- Actionable Advice: Development teams building custom canvas layout engines should benchmark and prototype against the cluster and selection APIs using strict feature detection, while maintaining fallback measurement heuristics until Safari and Firefox implement interoperable support.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @shallawa: "&gt; This API should only be used for use cases where HTML-in-Canvas would not be appropriate--and it would be good to clarify here what those use cases ..."
- Standards Activity (Mozilla): Latest discussion from @schenney-chromium: "Yes. The need for per-grapheme rendering control is still there, along with ways to facilitate editing. While HTML-in-Canvas covers the use cases for ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [\[HTML Canvas\] TextMetrics Additions for Editing and Graphic Design](https://github.com/WebKit/standards-positions/issues/436) [open]
- **Mozilla:** [\[HTML Canvas\] TextMetrics Additions](https://github.com/mozilla/standards-positions/issues/1144) [open]

## 📰 Ecosystem Blogs & Articles

- [Canvas Text Editing](https://blogs.igalia.com/schenney/canvas-text-editing) *(blogs.igalia.com)*
  > Historically, \`measureText()\` treated an entire string as an atomic unit—providing global bounding boxes and advance widths, but giving developers virtually no insight into sub-ranges, glyph boundaries, or character-to-pixel mappings \*\*Selection Rect...
- [chrome.com](https://developer.chrome.com/release-notes/144) *(developer.chrome.com)*
  > \* \*\*Chrome for Developers & Chrome Platform Status\*\*: Chrome documented the feature under the \*\*Enhanced Canvas TextMetrics\*\* entry and initiated Origin Trials starting in \*\*Chrome 144\*\* (tracked under Chromium bug \`#341213359\`)
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/151) *(learn.microsoft.com)*
  > \* \*\*Microsoft Edge Platform Release Notes\*\*: Edge included the Origin Trial for Enhanced Canvas TextMetrics throughout its release notes (Edge 147 through Edge 151), highlighting its role in enabling complex text-editing workflows and per-character t...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/147) *(learn.microsoft.com)*
  > \* \*\*Microsoft Edge Platform Release Notes\*\*: Edge included the Origin Trial for Enhanced Canvas TextMetrics throughout its release notes (Edge 147 through Edge 151), highlighting its role in enabling complex text-editing workflows and per-character t...
- [biggo.com](https://finance.biggo.com/news/202508030712_Chrome_HTML-in-Canvas_Security_Concerns) *(finance.biggo.com)*
  > Enhanced Metrics)\*\*: Discussions on blogs and developer channels often compare this feature with parallel proposals like \*\*HTML-in-Canvas\*\* (\`drawElement()\`, \`setHitTestRegions()\`) Developers note that while HTML-in-Canvas aims to render rich HTML tr...
- [\[blink-dev\] Intent to Prototype: Enhanced Canvas TextMetrics](https://www.mail-archive.com/blink-dev@chromium.org/msg13889.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Enhanced Canvas TextMetrics Florin Malita Wed, 11 Jun 2025 06:14:30 -0700 \*Contact emails\* \[email&#160;protected\] , \[e...
- [\[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg17422.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics Rick Byers Wed, 09 Sep 2026 10:53:24 -0700 Igalia and Google have been trying to solve real ...
- [\[blink-dev\] Intent to Experiment: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg15075.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Enhanced Canvas TextMetrics Florin Malita Tue, 04 Nov 2025 12:11:02 -0800 \*Contact emails\* \[email&#160;protected\] , ...
- [\[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg16550.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Florin Malita Mon, 18 May 2026 13:12:08 -0700 \*Contact emails\* \[email&#160...
- [\[blink-dev\] Ready for Developer Testing: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg15048.html) *(mail-archive.com)*
  > \[blink-dev\] Ready for Developer Testing: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Enhanced Canvas TextMetrics Chromestatus Thu, 30 Oct 2025 13:33:06 -0700 Contact emails \[email&#160;pr...
- [Re: \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg16571.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Mike Taylor Wed, 20 May 2026 08:25:31 -0700 LGTM to extend for 3 a...
- [\[blink-dev\] Intent to Ship: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg17383.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Enhanced Canvas TextMetrics Florin Malita Mon, 07 Sep 2026 09:34:21 -0700 Contact emails \[email&#160;protected\] , \[email&#160;pr...
- [Re: \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg17529.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics Chris Harrelson Wed, 23 Sep 2026 08:11:31 -0700 I also see that WebKit has engaged w...
- [Re: \[blink-dev\] Intent to Experiment: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg15090.html) *(mail-archive.com)*
  > Thanks, Florin On Tue, 4 Nov 2025 at 20:10, Florin Malita &lt;\[email protected\]&gt; wrote: &gt; &gt;&gt; \*Contact emails\* &gt;&gt; \[email protected\], \[email protected\], \[email protected\], &gt;&gt; \[email protected\] &gt;&gt; &gt;&gt; \*Explainer\* &gt;&...
- [Re: \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg17552.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; On Monday, September 7, 2026 at 2:57:49 PM UTC+2 Florin Malita wrote: &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; Contact emails &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; \[email protected\], \[email protected...
- [\[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg17401.html) *(mail-archive.com)*
  > If the web standards &gt; community converges on such an API in the future, we anticipate it will be &gt; strictly &gt; additive, introducing new interfaces rather than altering or removing &gt; the TextMetrics methods being shipped here. &gt; 2. &gt...
- [Re: \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg17527.html) *(mail-archive.com)*
  > If the web &gt;&gt;&gt;&gt; standards community converges on such an API in the future, we &gt;&gt;&gt;&gt; anticipate &gt;&gt;&gt;&gt; it will be strictly additive, introducing new interfaces rather &gt;&gt;&gt;&gt; than altering or removing the Tex...
- [Re: \[blink-dev\] Intent to Experiment: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg15089.html) *(mail-archive.com)*
  > On Tue, 4 Nov 2025 at 20:10, Florin Malita &lt;\[email protected\]&gt; wrote: &gt; \*Contact emails\* &gt; \[email protected\], \[email protected\], \[email protected\], &gt; \[email protected\] &gt; &gt; \*Explainer\* &gt; https://github.com/fserb/canvas2D/blob/m...
- [Re: \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg16563.html) *(mail-archive.com)*
  > On Tue, May 19, 2026 at 10:47 AM Vladimir Levin &lt;\[email protected\]&gt; wrote: &gt; &gt; &gt; On Mon, May 18, 2026 at 5:55 PM Mike Taylor &lt;\[email protected\]&gt; &gt; wrote: &gt; &gt;&gt; On 5/18/26 4:11 p.m., Florin Malita wrote: &gt;&gt; &gt;&g...
- [Re: \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg16558.html) *(mail-archive.com)*
  > &gt; On 5/18/26 4:11 p.m., Florin ... https://github.com/whatwg/html/pull/11000 &gt; &gt; \*Summary\* &gt; &lt;strong&gt;Expand the TextMetrics Canvas API to support selection rectangles, &gt; bounding box queries, and glyph cluster-based operations&lt;/strong&gt;...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: Enhanced Canvas TextMetrics](https://www.mail-archive.com/blink-dev@chromium.org/msg13889.html) *(mail-archive.com)* *(Cites: `https://github.com/fserb/canvas2D/blob/master/spec/enhanced-textmetrics.md`)*
  > \[blink-dev\] Intent to Prototype: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Enhanced Canvas TextMetrics Florin Malita Wed, 11 Jun 2025 06:14:30 -0700 \*Contact emails\* \[email&#160;prote...
- [\[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg17422.html) *(mail-archive.com)* *(Cites: `https://github.com/fserb/canvas2D/blob/master/spec/enhanced-textmetrics.md`)*
  > \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics Rick Byers Wed, 09 Sep 2026 10:53:24 -0700 Igalia and Google have been trying to s...
- [\[blink-dev\] Intent to Experiment: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg15075.html) *(mail-archive.com)* *(Cites: `https://github.com/fserb/canvas2D/blob/master/spec/enhanced-textmetrics.md`)*
  > \[blink-dev\] Intent to Experiment: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Enhanced Canvas TextMetrics Florin Malita Tue, 04 Nov 2025 12:11:02 -0800 \*Contact emails\* \[email&#160;pro...
- [\[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg16550.html) *(mail-archive.com)* *(Cites: `https://github.com/fserb/canvas2D/blob/master/spec/enhanced-textmetrics.md`)*
  > \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Florin Malita Mon, 18 May 2026 13:12:08 -0700 \*Contact emails\* \[...
- [\[blink-dev\] Ready for Developer Testing: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg15048.html) *(mail-archive.com)* *(Cites: `https://github.com/fserb/canvas2D/blob/master/spec/enhanced-textmetrics.md`)*
  > \[blink-dev\] Ready for Developer Testing: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Enhanced Canvas TextMetrics Chromestatus Thu, 30 Oct 2025 13:33:06 -0700 Contact emails \[ema...
- [Re: \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg16571.html) *(mail-archive.com)* *(Cites: `https://github.com/Igalia/explainers/blob/main/canvas-formatted-text/text-metrics-additions.md`)*
  > Re: \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Mike Taylor Wed, 20 May 2026 08:25:31 -0700 LGTM to exte...
- [\[blink-dev\] Intent to Ship: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg17383.html) *(mail-archive.com)* *(Cites: `https://github.com/Igalia/explainers/blob/main/canvas-formatted-text/text-metrics-additions.md`)*
  > \[blink-dev\] Intent to Ship: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Enhanced Canvas TextMetrics Florin Malita Mon, 07 Sep 2026 09:34:21 -0700 Contact emails \[email&#160;protected\] , \[ema...
- [Re: \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg17529.html) *(mail-archive.com)* *(Cites: `https://github.com/Igalia/explainers/blob/main/canvas-formatted-text/text-metrics-additions.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics Chris Harrelson Wed, 23 Sep 2026 08:11:31 -0700 I also see that WebKit has...
- [Re: \[blink-dev\] Intent to Experiment: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg15090.html) *(mail-archive.com)* *(Cites: `https://github.com/Igalia/explainers/blob/main/canvas-formatted-text/text-metrics-additions.md`)*
  > Thanks, Florin On Tue, 4 Nov 2025 at 20:10, Florin Malita &lt;\[email protected\]&gt; wrote: &gt; &gt;&gt; \*Contact emails\* &gt;&gt; \[email protected\], \[email protected\], \[email protected\], &gt;&gt; \[email protected\] &gt;&gt; &gt;&gt; \*Explai...
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-09-14 (public-html@w3.org from September 2026)](https://lists.w3.org/Archives/Public/public-html/2026Sep/0002.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/issues/10677`)*
  > (2 by apasel422) https://github.com/whatwg/html/issues/11365 \[topic: cross-origin-opener-policy\] - #10677 &lt;strong&gt;Canvas TextMetrics additions for editing and text styling&lt;/strong&gt; (1 by thejustinwalsh) https://github.com/whatwg/html/issues...
- [Re: \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg17552.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/11000`)*
  > &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; On Monday, September 7, 2026 at 2:57:49 PM UTC+2 Florin Malita wrote: &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; Contact emails &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; \[email protected\], \[email...

## 📚 Platform Documentation & Specifications

- [design-reviews#1095: Canvas Text Metrics for Editing, Art and Design](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1095) *(tag-github-bot.w3.org)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-09-14 (public-html@w3.org from September 2026)](https://lists.w3.org/Archives/Public/public-html/2026Sep/0002.html) *(lists.w3.org)*
- [Micro JS shaping engine · Issue #176 · pmndrs/glyph](https://github.com/pmndrs/glyph/issues/176) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 50 result(s) found across 15 planned queries — **19 verified relevant**
  - `"chromestatus.com/feature/5075532483657728" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/fserb/canvas2D/blob/master/spec/enhanced-textmetrics.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (5 returned)
  - `"github.com/Igalia/explainers/blob/main/canvas-formatted-text/text-metrics-additions.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"github.com/whatwg/html/issues/10677" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"github.com/whatwg/html/pull/11000" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Enhanced Canvas TextMetrics" API` — *Core feature API query* (1 returned)
  - `"Enhanced Canvas TextMetrics" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"cluster-based" OR "pre-shaped" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Enhanced Canvas TextMetrics" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Enhanced Canvas TextMetrics" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
  - `"TextMetrics" ("getSelectionRects" OR "caretPosition" OR "clusters") canvas javascript` — *Locates WebIDL method signatures and early JavaScript code snippets demonstrating enhanced TextMetrics features such as selection rectangles and caret positioning.* (8 returned)
  - `"Canvas" "TextMetrics" ("caret positioning" OR "text editor" OR "hit testing") (guide OR tutorial OR blog)` — *Finds developer tutorials and engineering blog posts covering canvas-based text editing, selection handling, and hit testing using advanced TextMetrics.* (1 returned)
  - `"Enhanced TextMetrics" OR "TextMetrics additions" (ChromeStatus OR "Intent to Prototype" OR "Intent to Ship" OR Igalia)` — *Discovers vendor intent announcements, engine implementation roadmaps, and tracking bugs across Chromium, WebKit, and Firefox.* (8 returned)
  - `"TextMetrics" ("whatwg/html/pull/11000" OR "whatwg/html/issues/10677" OR "glyph clusters")` — *Captures standardisation discussions, feedback from web authors, and consensus debates within the WHATWG repository.* (8 returned)
  - `"TextMetrics" ("glyph cluster" OR "grapheme cluster") ("CanvasRenderingContext2D" OR "canvas") animation` — *Surfaces practical implementations and experiments using cluster-based TextMetrics for granular character animations and per-glyph styling.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 2 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 1 result(s) found — **0 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 3 document(s) analyzed
- **Standards Discussion Comments:** 7 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5075532483657728)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5075532483657728)
- [Specification](https://github.com/whatwg/html/pull/11000)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/341213359)
