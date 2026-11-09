# Background layer count independence 

> **Report Week:** 2026-W46 | **Milestone:** Chrome 159 | **Category:** Enabled by default

## Overview

Makes the computed value of the background-\* longhands keep the number of comma-separated values the author specified, instead of repeating or truncating it to the background-image layer count. Repeating and truncating are used-value behavior: "The computed values of the coordinating list properties are not affected by such truncation or repetition." This feature implements the behavior defined in the https://drafts.csswg.org/css-values-4/ Appendix A.

### Motivation

The behavior defined in the "Appendix A: Coordinating List-Valued Properties" of the CSS Values And Units L4 specification has been discussed recently and agreed that it should stand. This makes Chrome the only browser diverging in the specified behavior.

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 220 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** Scheduled to be enabled by default in Chrome 159, 'Background layer count independence' aligns Chromium's CSS engine with Appendix A of the CSS Values and Units Module Level 4 specification. The update ensures that computed values for background longhand properties preserve the author-specified list of comma-separated values rather than prematurely truncating or repeating them to match the background-image layer count. By shifting list adjustment to the used-value phase, Chromium eliminates a longstanding interoperability divergence and establishes parity across all major rendering engines.

### Recommendations
- Actionable Advice: No polyfill or defensive code changes are necessary, as rendering behavior remains unchanged. However, teams that inspect background longhands via getComputedStyle() or CSSOM in JavaScript test suites should audit their assertions to ensure tests do not rely on Chromium's legacy truncated or duplicated string outputs.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`background`](https://webstatus.dev/features/background)*

- Share of tests passing in the web-features group `background` on [wpt.fyi](https://wpt.fyi/results?q=feature:background) (via webstatus.dev) — stable: Chrome 98.8% · Edge 98.1% · Firefox 98.8% · Safari 91.4%; experimental: Chrome 99.4% · Edge 98.1% · Firefox 98.8% · Safari 91.4%

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://cr-status.appspot.com/feature/5144333908049920?gate=4988223456673792) *(cr-status.appspot.com)*
  > \*\*"Background layer count independence"\*\* is a CSS specification alignment feature implementing the behavior defined in \*\*\[CSS Values and Units Module Level 4, Appendix A: Coordinating List-Valued Properties\](https://drafts.csswg.org/css-values-4/#co...
- [appspot.com](https://img592-dot-cr-status.appspot.com/feature/5144333908049920) *(img592-dot-cr-status.appspot.com)*
  > If an author specified fewer values (e.g., 2 sizes for 3 images), Blink internally repeated the list in the computed style; if the author specified more, Blink truncated it \*\*The Fix:\*\* Background layer count independence ensures that inspecting long...
- [chromestatus.com](https://chromestatus.com/release-notes/159) *(chromestatus.com)*
  > \*\*Status:\*\* Slated to be enabled by default (tracked via Chromium Issue \[#40855581\](https://issues.chromium.org/issues/40855581) \*\*Status:\*\* Slated to be enabled by default (tracked via Chromium Issue \[#40855581\](https://issues.chromium.org/issues/40...
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > \*\*Status:\*\* Slated to be enabled by default (tracked via Chromium Issue \[#40855581\](https://issues.chromium.org/issues/40855581) and Chrome Release channels including Chrome 159)
- [bsky.app](https://bsky.app/profile/intenttoship.dev/post/3muodp5njg22h) *(bsky.app)*
  > Tracked via the \*\*Blink-dev\*\* mailing list (\`Intent to Prototype / Prepare to Ship\`) and automated trackers (such as \`@intenttoship\`)
- [appspot.com](https://cr-status.appspot.com/feature/5144333908049920/activity) *(cr-status.appspot.com)*
  > Because this change aligns Chromium’s internal pipeline with the longstanding W3C specification without altering the CSS syntax itself, Chromium contributors noted that no major rewrite of public-facing web documentation was necessary—it simply bring...
- [\[blink-dev\] Intent to Ship: Background layer count independence](http://www.mail-archive.com/blink-dev@chromium.org/msg17853.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Background layer count independence Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Background layer count independence Chromestatus Mon, 26 Oct 2026 14:56:27 -0700 Contact emails \[email&#160;protected\] S...
- [\[blink-dev\] Re: Intent to Ship: Background layer count independence](http://www.mail-archive.com/blink-dev@chromium.org/msg17865.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Background layer count independence Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Background layer count independence Alex Russell Tue, 27 Oct 2026 12:08:31 -0700 LGTM1; thanks for the note abou...
- [\[blink-dev\] Intent to Prototype: Background layer count independence](http://www.mail-archive.com/blink-dev@chromium.org/msg17365.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Background layer count independence Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Background layer count independence Chromestatus Fri, 04 Sep 2026 03:09:07 -0700 Contact emails \[email&#160;pr...
- [Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence](http://www.mail-archive.com/blink-dev@chromium.org/msg17877.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence Chris Harrelson Tue, 27 Oct 2026 22:23:44 -0700 LGTM2 On Tue, Oct 27...
- [Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence](http://www.mail-archive.com/blink-dev@chromium.org/msg17892.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence Philip Jägenstedt Wed, 28 Oct 2026 10:36:49 -0700 Some of the linked...
- [Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence](http://www.mail-archive.com/blink-dev@chromium.org/msg17878.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence Chris Harrelson Tue, 27 Oct 2026 22:24:48 -0700 Actually I take that...
- [Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence](http://www.mail-archive.com/blink-dev@chromium.org/msg17884.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence Philip Jägenstedt Wed, 28 Oct 2026 08:15:52 -0700 LGTM3 assuming the...
- [Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence](http://www.mail-archive.com/blink-dev@chromium.org/msg17893.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence Philip Jägenstedt Wed, 28 Oct 2026 13:59:17 -0700 If none of the fai...
- [Experimental Chromium Web Platform Features \| Polypane](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > CSS Background Layer Count Independence · CSSBackgroundLayerCountIndependence · CSS Timeline Scope Global · CSSTimelineScopeGlobal · CSS Tree Scoped Scroll Timeline · CSSTreeScopedScrollTimeline · ▹ CSS Flow Start And End · CSSFlowStartAndEndchromest...
- [Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence](http://www.mail-archive.com/blink-dev@chromium.org/msg17883.html) *(mail-archive.com)*
  > \[1\] https://github.com/w3c/csswg-drafts/issues/12791#issuecomment-4040285092 /Gecko/: Shipped/Shipping Firefox was the only one implementing the behavior defined in the spec. https://github.com/w3c/csswg-drafts/issues/12791#issuecomment-4040285092 /W...
- [Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence](http://www.mail-archive.com/blink-dev@chromium.org/msg17887.html) *(mail-archive.com)*
  > Some of the linked tests have failures in Chrome, should those failures be fixed or are some of the linked tests not for this feature? On Wed, Oct 28, 2026 at 3:56 PM Daniel Bratell &lt;\[email protected\]&gt; wrote: LGTM2 (Adoption now added) /Daniel ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: Background layer count independence](http://www.mail-archive.com/blink-dev@chromium.org/msg17853.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5144333908049920`)*
  > \[blink-dev\] Intent to Ship: Background layer count independence Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Background layer count independence Chromestatus Mon, 26 Oct 2026 14:56:27 -0700 Contact emails \[email&#160;pr...
- [\[blink-dev\] Re: Intent to Ship: Background layer count independence](http://www.mail-archive.com/blink-dev@chromium.org/msg17865.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5144333908049920`)*
  > \[blink-dev\] Re: Intent to Ship: Background layer count independence Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Background layer count independence Alex Russell Tue, 27 Oct 2026 12:08:31 -0700 LGTM1; thanks for the...
- [\[blink-dev\] Intent to Prototype: Background layer count independence](http://www.mail-archive.com/blink-dev@chromium.org/msg17365.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5144333908049920`)*
  > \[blink-dev\] Intent to Prototype: Background layer count independence Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Background layer count independence Chromestatus Fri, 04 Sep 2026 03:09:07 -0700 Contact emails \[ema...
- [Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence](http://www.mail-archive.com/blink-dev@chromium.org/msg17877.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5144333908049920`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence Chris Harrelson Tue, 27 Oct 2026 22:23:44 -0700 LGTM2 On T...
- [Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence](http://www.mail-archive.com/blink-dev@chromium.org/msg17892.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5144333908049920`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence Philip Jägenstedt Wed, 28 Oct 2026 10:36:49 -0700 Some of ...
- [Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence](http://www.mail-archive.com/blink-dev@chromium.org/msg17878.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5144333908049920`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence Chris Harrelson Tue, 27 Oct 2026 22:24:48 -0700 Actually I...
- [Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence](http://www.mail-archive.com/blink-dev@chromium.org/msg17884.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5144333908049920`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence Philip Jägenstedt Wed, 28 Oct 2026 08:15:52 -0700 LGTM3 as...
- [Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence](http://www.mail-archive.com/blink-dev@chromium.org/msg17893.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5144333908049920`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence Philip Jägenstedt Wed, 28 Oct 2026 13:59:17 -0700 If none ...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/Supporters-Of-Chromium-Based-Browsers/Reporting/blob/main/Interoperability.md) *(github.com)*
- [Weekly hardening: close the 10-feature coverage gap, fix 3 broken demos, critique batch by PaulKinlan · Pull Request #25 · PaulKinlan/chrome-platform-showcase · GitHub](https://github.com/PaulKinlan/chrome-platform-showcase/pull/25) *(github.com)*
- [\[css-values\]\[css-backgrounds\]\[css-animations\]\[css-transitions\]\[fill-stroke\] How to handle linked list-valued properties? · Issue #7164 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/7164) *(github.com)*
- [\[CSSWG\] Minutes A Coruña F2F 2020-01-22 Part III: Backgrounds and Borders, CSS Align & CSS Tables, CSS Cascade, Summer F2F, SVG Paths \[css-backgrounds\] \[css-align\] \[css-tables\] \[css-cascade\] from Dael Jackson on 2020-02-13 (www-style@w3.org from February 2020)](https://lists.w3.org/Archives/Public/www-style/2020Feb/0009.html) *(lists.w3.org)*
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2024/WD-css-values-4-20240312) *(w3.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 58 result(s) found across 11 planned queries — **15 verified relevant**
  - `"chromestatus.com/feature/5144333908049920" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (8 returned)
  - `"drafts.csswg.org/css-values-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Background layer count independence " API` — *Core feature API query* (5 returned)
  - `"Background layer count independence " (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"drafts.csswg" OR "comma-separated" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Background layer count independence " (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Background layer count independence " (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Background layer count independence" OR "coordinating list-valued properties" Chromium` — *Find Chromium bug tracking, release notes, and Intent to Ship threads for the background layer count independence behavior change.* (8 returned)
  - `site:github.com/w3c/csswg-drafts "coordinating list" "background" computed value` — *Locate CSSWG deliberations and resolutions discussing the computed vs used value semantics of coordinating background list properties.* (5 returned)
  - `getComputedStyle "background-size" "background-image" "computed value" comma` — *Find JavaScript examples and WPT tests verifying getComputedStyle output when background layer counts differ across longhands.* (8 returned)
  - `"coordinating list-valued properties" "computed value" CSS "Appendix A"` — *Discover developer explanations, articles, and spec breakdowns detailing how CSS Values L4 handles list-valued property repetition and truncation.* (5 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Tweets found by web search:** 5 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "background", shared with 0 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "background": Chrome 98.8% passing (stable)*
- **Sources cited by the AI synthesis:** 5 result(s) found — **5 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5144333908049920)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5144333908049920)
- [Specification](https://drafts.csswg.org/css-values-4/#linked-properties)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40855581)
