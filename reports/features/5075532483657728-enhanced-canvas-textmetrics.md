# Enhanced Canvas TextMetrics

> **Report Week:** 2026-W46 | **Milestone:** Chrome 159 | **Category:** Enabled by default

## Overview

Expand the TextMetrics Canvas API to support selection rectangles, bounding box queries, and glyph cluster-based operations.  This new functionality should enable complex text editing applications with accurate selection, caret positioning, and hit testing.  Additionally, cluster-based rendering facilitates sophisticated text effects such as independent character animations and styling.

### Motivation

The existing TextMetrics API provides measurements for atomic text, but offers no facilities to break down that information to a more granular level.  Sophisticated text applications (editors in particular) require such granular information in order to support accurate selection, caret positioning and hit testing at a grapheme level.  Currently they are resorting to various inaccurate approximations to work around API limitations.  Another complex use case involves rendering fragments of pre-shaped text with different attributes - e.g. different colors or different transforms.  This is of particular interest to animation frameworks which allow characters to be animated independently.  Such functionality is not directly supported in existing APIs, and implementers must again resort to approximate workarounds.  The enhanced TextMetrics proposal aims to address the current API shortcomings and to offer first class support for the above use cases.

## Ecosystem Status

- **Momentum:** Emerging (+20 points since 2026-10-12; footprint 280 points)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Enhanced Canvas TextMetrics extends 2D canvas text measurements with granular APIs for selection rectangles, caret positioning, bounding queries, and glyph cluster handling. Driven primarily by Google and Igalia to replace inaccurate heuristics in text editors and frameworks like Flutter Web, the feature is shipping in Chromium while the WHATWG specification matures. Cross-browser alignment remains incomplete, as Mozilla and Apple continue evaluating the API's imperative surface against alternative paradigms like HTML-in-Canvas and its accessibility footprint.

### Recommendations
- Actionable Advice: Treat Enhanced Canvas TextMetrics as an optional progressive enhancement for high-performance canvas editors and text-shaping workflows on Chromium browsers. Production applications needing cross-engine consistency should maintain fallback measurement routines or DOM-based overlay inputs until Gecko and WebKit signal concrete implementation commitments.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @shallawa: "&gt; This API should only be used for use cases where HTML-in-Canvas would not be appropriate--and it would be good to clarify here what those use cases ..."
- Standards Activity (Mozilla): Latest discussion from @schenney-chromium: "Yes. The need for per-grapheme rendering control is still there, along with ways to facilitate editing. While HTML-in-Canvas covers the use cases for ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [\[HTML Canvas\] TextMetrics Additions for Editing and Graphic Design](https://github.com/WebKit/standards-positions/issues/436) [open]
- **Mozilla:** [\[HTML Canvas\] TextMetrics Additions](https://github.com/mozilla/standards-positions/issues/1144) [open]

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5075532483657728?gate=5187337646243840) *(chromestatus.com)*
  > Historically, \`&lt;canvas&gt;\` 2D text was treated as an opaque, atomic block \*\*Enhanced Canvas TextMetrics\*\* (developed under WHATWG PR #11000 / Issue #10677 and Blink flag \`--enable-blink-features=ExtendedTextMetrics\`) expands the \`TextMetrics\` interface...
- [Canvas Text Editing](https://blogs.igalia.com/schenney/canvas-text-editing) *(blogs.igalia.com)*
  > To implement text editing, caret positioning, or inline link hit testing, developers had to resort to expensive workarounds—such as binary-searching substring widths via repeated \`measureText()\` calls \*\*Enhanced Canvas TextMetrics\*\* (developed under ...
- [chromium.org](https://issues.chromium.org/578524618) *(issues.chromium.org)*
  > \*\*\`getTextClusters()\` / \`fillTextCluster()\` (and evolving \`ShapedText\` / \`GlyphRun\` APIs)\*\*: Breaks shaped text into clusters for independent styling, per-character transforms, and complex graphic design effects \*\*Evolution into Text Shaping APIs:\*\* ...
- [chrome.com](https://developer.chrome.com/blog/chrome-144-beta?hl=en) *(developer.chrome.com)*
  > \*\*Sources:\*\* \[Chrome Platform Status\](https://chromestatus.com/feature/5075532483657728), \*Chrome 144 Beta Blog\*, and \*Microsoft Edge Web Platform Release Notes\* (Edge 146–154) The release announcements highlight its role in enabling high-performance...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/154) *(learn.microsoft.com)*
  > \*\*Sources:\*\* \[Chrome Platform Status\](https://chromestatus.com/feature/5075532483657728), \*Chrome 144 Beta Blog\*, and \*Microsoft Edge Web Platform Release Notes\* (Edge 146–154)
- [\[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg16550.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Florin Malita Mon, 18 May 2026 13:12:08 -0700 \*Contact emails\* \[email&#160...
- [Re: \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg16554.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Mike Taylor Mon, 18 May 2026 14:55:29 -0700 On 5/18/26 4:11 p.m., ...
- [Re: \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg16563.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Florin Malita Tue, 19 May 2026 12:20:16 -0700 Thanks Vlad and Mike...
- [Re: \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg17424.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics Florin Malita Wed, 09 Sep 2026 14:33:20 -0700 On Wed, Sep 9, 2026 at 6:49 AM Yoav We...
- [\[blink-dev\] Intent to Experiment: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg15075.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Enhanced Canvas TextMetrics Florin Malita Tue, 04 Nov 2025 12:11:02 -0800 \*Contact emails\* \[email&#160;protected\] , ...
- [\[blink-dev\] Intent to Ship: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg17383.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Enhanced Canvas TextMetrics Florin Malita Mon, 07 Sep 2026 09:34:21 -0700 Contact emails \[email&#160;protected\] , \[email&#160;pr...
- [\[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg17422.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics Rick Byers Wed, 09 Sep 2026 10:53:24 -0700 Igalia and Google have been trying to solve real ...
- [\[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg17401.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics Yoav Weiss (@Shopify) Wed, 09 Sep 2026 04:41:01 -0700 Can you ask for a review on the "adopt...
- [Re: \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg16571.html) *(mail-archive.com)*
  > \*Contact emails\* \[email protected\], ... https://github.com/whatwg/html/pull/11000 \*Summary\* &lt;strong&gt;Expand the TextMetrics Canvas API to support selection rectangles, bounding box queries, and glyph cluster-based operations&lt;/strong&gt;....
- [Re: \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg17527.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; On Monday, September 7, 2026 at 2:57:49 PM UTC+2 Florin Malita wrote: &gt;&gt;&gt; &gt;&gt;&gt;&gt; Contact emails &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; \[email protected\], \[email protected\], \[email protected\], &gt;&gt;&gt;&gt; \[email pr...
- [Re: \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg17552.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; On Monday, September 7, 2026 at 2:57:49 PM UTC+2 Florin Malita wrote: &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; Contact emails &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; \[email protected\], \[email protected...
- [\[blink-dev\] Intent to Prototype: Enhanced Canvas TextMetrics](https://www.mail-archive.com/blink-dev@chromium.org/msg13889.html) *(mail-archive.com)*
  > \*Contact emails\* \[email protected\], \[email protected\] \*Explainer\* https://github.com/fserb/canvas2D/blob/master/spec/enhanced-textmetrics.md https://github.com/Igalia/explainers/blob/main/canvas-formatted-text/text-metrics-additions.md https://&lt;stron...
- [\[blink-dev\] Ready for Developer Testing: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg15048.html) *(mail-archive.com)*
  > Explainer https://github.com/f... https://github.com/whatwg/html/pull/11000 Summary &lt;strong&gt;Expand the TextMetrics Canvas API to support selection rectangles, bounding box queries, and glyph cluster-based operations&lt;/strong&gt;....
- [Re: \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg17454.html) *(mail-archive.com)*
  > &gt; &gt; On Monday, September 7, 2026 at 2:57:49 PM UTC+2 Florin Malita wrote: &gt;&gt; &gt;&gt;&gt; Contact emails &gt;&gt;&gt; &gt;&gt;&gt; \[email protected\], \[email protected\], \[email protected\], &gt;&gt;&gt; \[email protected\] &gt;&gt;&gt; &gt;&g...
- [Re: \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg17529.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; On Wednesday, September 9, 2026 at 1:48:12 PM UTC-7 Florin Malita wrote: &gt;&gt; &gt;&gt;&gt; On Wed, Sep 9, 2026 at 6:49 AM Yoav Weiss (@Shopify) &lt; &gt;&gt;&gt; \[email protected\]&gt; wrote: &gt;&gt;&gt; &gt;&gt;&gt;&gt; Can you...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg16550.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5075532483657728`)*
  > \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Florin Malita Mon, 18 May 2026 13:12:08 -0700 \*Contact emails\* \[...
- [Re: \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg16554.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5075532483657728`)*
  > Re: \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Mike Taylor Mon, 18 May 2026 14:55:29 -0700 On 5/18/26 4...
- [Re: \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg16563.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5075532483657728`)*
  > Re: \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Florin Malita Tue, 19 May 2026 12:20:16 -0700 Thanks Vla...
- [Re: \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg17424.html) *(mail-archive.com)* *(Cites: `https://github.com/fserb/canvas2D/blob/master/spec/enhanced-textmetrics.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics Florin Malita Wed, 09 Sep 2026 14:33:20 -0700 On Wed, Sep 9, 2026 at 6:49 ...
- [\[blink-dev\] Intent to Experiment: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg15075.html) *(mail-archive.com)* *(Cites: `https://github.com/fserb/canvas2D/blob/master/spec/enhanced-textmetrics.md`)*
  > \[blink-dev\] Intent to Experiment: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Enhanced Canvas TextMetrics Florin Malita Tue, 04 Nov 2025 12:11:02 -0800 \*Contact emails\* \[email&#160;pro...
- [\[blink-dev\] Intent to Ship: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg17383.html) *(mail-archive.com)* *(Cites: `https://github.com/fserb/canvas2D/blob/master/spec/enhanced-textmetrics.md`)*
  > \[blink-dev\] Intent to Ship: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Enhanced Canvas TextMetrics Florin Malita Mon, 07 Sep 2026 09:34:21 -0700 Contact emails \[email&#160;protected\] , \[ema...
- [\[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg17422.html) *(mail-archive.com)* *(Cites: `https://github.com/fserb/canvas2D/blob/master/spec/enhanced-textmetrics.md`)*
  > \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics Rick Byers Wed, 09 Sep 2026 10:53:24 -0700 Igalia and Google have been trying to s...
- [\[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg17401.html) *(mail-archive.com)* *(Cites: `https://github.com/fserb/canvas2D/blob/master/spec/enhanced-textmetrics.md`)*
  > \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics Yoav Weiss (@Shopify) Wed, 09 Sep 2026 04:41:01 -0700 Can you ask for a review on ...
- [Re: \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg16571.html) *(mail-archive.com)* *(Cites: `https://github.com/fserb/canvas2D/blob/master/spec/enhanced-textmetrics.md`)*
  > \*Contact emails\* \[email protected\], ... https://github.com/whatwg/html/pull/11000 \*Summary\* &lt;strong&gt;Expand the TextMetrics Canvas API to support selection rectangles, bounding box queries, and glyph cluster-based operations&lt;/strong&gt;....
- [design-reviews#1095: Canvas Text Metrics for Editing, Art and Design](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1095) *(tag-github-bot.w3.org)* *(Cites: `https://github.com/Igalia/explainers/blob/main/canvas-formatted-text/text-metrics-additions.md`)*
  > Explainer¹: https://&lt;strong&gt;github.com/Igalia/explainers/blob/main/canvas-formatted-text/text-metrics-additions.md&lt;/strong&gt;
- [Re: \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg17527.html) *(mail-archive.com)* *(Cites: `https://github.com/Igalia/explainers/blob/main/canvas-formatted-text/text-metrics-additions.md`)*
  > &gt;&gt; &gt;&gt; On Monday, September 7, 2026 at 2:57:49 PM UTC+2 Florin Malita wrote: &gt;&gt;&gt; &gt;&gt;&gt;&gt; Contact emails &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; \[email protected\], \[email protected\], \[email protected\], &gt;&gt;&gt;&gt;...
- [Re: \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg17552.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/issues/10677`)*
  > &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; On Monday, September 7, 2026 at 2:57:49 PM UTC+2 Florin Malita wrote: &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; Contact emails &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; \[email protected\], \[email...
- [\[blink-dev\] Intent to Prototype: Enhanced Canvas TextMetrics](https://www.mail-archive.com/blink-dev@chromium.org/msg13889.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/issues/10677`)*
  > \*Contact emails\* \[email protected\], \[email protected\] \*Explainer\* https://github.com/fserb/canvas2D/blob/master/spec/enhanced-textmetrics.md https://github.com/Igalia/explainers/blob/main/canvas-formatted-text/text-metrics-additions.md http...
- [\[blink-dev\] Ready for Developer Testing: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg15048.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/11000`)*
  > Explainer https://github.com/f... https://github.com/whatwg/html/pull/11000 Summary &lt;strong&gt;Expand the TextMetrics Canvas API to support selection rectangles, bounding box queries, and glyph cluster-based operations&lt;/strong&gt;....
- [Re: \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg17454.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/11000`)*
  > &gt; &gt; On Monday, September 7, 2026 at 2:57:49 PM UTC+2 Florin Malita wrote: &gt;&gt; &gt;&gt;&gt; Contact emails &gt;&gt;&gt; &gt;&gt;&gt; \[email protected\], \[email protected\], \[email protected\], &gt;&gt;&gt; \[email protected\] &gt;&gt;&...

## 📚 Platform Documentation & Specifications

- [Canvas Text Metrics for Editing, Art and Design · Issue #1095 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1095) *(github.com)*
- [github.com](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/146.md) *(github.com)*
- [design-reviews#1095: Canvas Text Metrics for Editing, Art and Design](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1095) *(tag-github-bot.w3.org)*
- [canvas: text metrics, spacing, and clusters by ericc-ch · Pull Request #118 · ericc-ch/tinybrowser · GitHub](https://github.com/ericc-ch/tinybrowser/pull/118) *(github.com)*
- [TPAC 2024 meeting · Issue #326 · whatwg/meta · GitHub](https://github.com/whatwg/meta/issues/326) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 59 result(s) found across 15 planned queries — **20 verified relevant**
  - `"chromestatus.com/feature/5075532483657728" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"github.com/fserb/canvas2D/blob/master/spec/enhanced-textmetrics.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"github.com/Igalia/explainers/blob/main/canvas-formatted-text/text-metrics-additions.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"github.com/whatwg/html/issues/10677" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"github.com/whatwg/html/pull/11000" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Enhanced Canvas TextMetrics" API` — *Core feature API query* (8 returned)
  - `"Enhanced Canvas TextMetrics" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"cluster-based" OR "pre-shaped" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Enhanced Canvas TextMetrics" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Enhanced Canvas TextMetrics" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"TextMetrics" ("selectionRects" OR "clusters" OR "caret") canvas text editor tutorial OR guide` — *Finds developer articles and tutorials exploring granular TextMetrics features for canvas-based text editing, selection, and caret rendering.* (7 returned)
  - `canvas "measureText" ("getSelectionRects" OR "getTextSelectionRects" OR "clusters") javascript` — *Discovers practical JavaScript code implementations, proposed WebIDL methods, and syntax samples for the new TextMetrics additions.* (8 returned)
  - `"Enhanced TextMetrics" OR "Canvas TextMetrics" ("Intent to Prototype" OR "Intent to Ship" OR Chrome OR WebKit)` — *Tracks browser vendor release notes, intents to implement, and platform adoption across Chromium, WebKit, and Gecko.* (8 returned)
  - `"TextMetrics" ("whatwg/html/pull/11000" OR "enhanced-textmetrics" OR "glyph clusters") (site:github.com OR site:news.ycombinator.com)` — *Surfaces community feedback, developer debates, and spec evolution around the WHATWG TextMetrics pull request and explainers.* (4 returned)
  - `html canvas text hit testing caret "TextMetrics" ("bounding box" OR "glyph")` — *Searches for real-world guides addressing canvas text hit testing and per-character bounding box calculations.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 2 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*

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
