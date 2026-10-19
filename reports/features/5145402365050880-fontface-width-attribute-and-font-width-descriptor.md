# FontFace width attribute and font-width descriptor

> **Report Week:** 2026-W43 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Exposes the width attribute on FontFace and the @font-face font-width descriptor as aliases for stretch and font-stretch. Aligns Chromium with the updated CSS Font Loading and CSS Fonts 4 specifications. Developers can now inspect or initialize font face widths using FontFace.width and CSS font-width interchangeably with stretch and font-stretch.

### Motivation

CSS Font Loading and CSS Fonts 4 define width as the primary FontFace descriptor attribute and @font-face descriptor, while retaining stretch as a legacy alias. Chromium previously ignored the width constructor member and font-width descriptor, causing Web Platform Tests to fail. Exposing width aligns Chromium with the updated specification.

## Ecosystem Status

- **Momentum:** Emerging (footprint 160 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The introduction of the FontFace width attribute and the @font-face font-width descriptor brings Chromium into compliance with CSS Fonts Module Level 4 and CSS Font Loading. By adopting 'width' as the primary descriptor and standardizing 'stretch' as a backward-compatible alias, browsers achieve unified, intuitive font geometry ergonomics across both CSS and JavaScript interfaces. With Chromium catching up in Chrome 154 alongside existing support in Firefox and WebKit, the feature establishes complete cross-engine parity.

### Recommendations
- Actionable Advice: Teams can comfortably begin transitioning new codebases and CSSOM scripts to use the modern 'font-width' and FontFace.width syntax. However, until Chrome 154 reaches widespread production baseline coverage, authors targeting older evergreen browser versions should retain or dual-specify 'font-stretch' as a fallback.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`font-width`](https://webstatus.dev/features/font-width)*

- Share of tests passing in the web-features group `font-width` on [wpt.fyi](https://wpt.fyi/results?q=feature:font-width) (via webstatus.dev) — stable: Chrome 33.3% · Edge 33.3% · Firefox 100% · Safari 100%; experimental: Chrome 33.3% · Edge 33.3% · Firefox 100% · Safari 100%

## 📰 Ecosystem Blogs & Articles

- [google.com](https://groups.google.com/a/chromium.org/d/msgid/blink-dev/6a7d4c09.dc132f77.2e13a8.0e2f.GAE%40google.com) *(groups.google.com)*
  > Driven by updates in the \*\*CSS Font Loading\*\* and \*\*CSS Fonts Module Level 4\*\* specifications, this change establishes \`width\` and \`font-width\` as primary identifiers while preserving \`stretch\` and \`font-stretch\` as legacy aliases The motivation cent...
- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17223.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Chris Harrelson Wed, 19 Aug 2026 07:33...
- [\[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17203.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Michael Reeves Mon, 17 Aug 2026 17:44:44 -0700...
- [\[blink-dev\] Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17165.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: FontFace width attribute and font-width descriptor Chromestatus Wed, 12 Aug 2026 21:46:10 -0700 Contact e...
- [\[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17196.html) *(mail-archive.com)*
  > &gt; &gt; \*Adoption expectation\* &gt; Feature ... font face width &gt; descriptors within 12 months of reaching Web Platform baseline. &gt; &gt; \*Adoption plan\* &gt; Web Platform Tests (WPT) have been added to ensure cross-browser &gt; interoperabili...
- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17222.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; &gt;&gt; &gt;&gt; Adoption expectation ... font face width &gt;&gt; descriptors within 12 months of reaching Web Platform baseline. &gt;&gt; &gt;&gt; &gt;&gt; &gt;&gt; Adoption plan &gt;&gt; &gt;&gt; Web Platform Tests (WPT) have be...
- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17205.html) *(mail-archive.com)*
  > &gt; &gt;&gt; False &gt; &gt;&gt; &gt; &gt;&gt; Tracking bug ... in Chrome. &gt; &gt;&gt; &gt; &gt;&gt; Adoption expectation &gt; &gt;&gt; &lt;strong&gt;Feature is considered a best practice for configuring font face width &gt; descriptors within 12 months...
- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17211.html) *(mail-archive.com)*
  > Developers can now inspect or ... &gt;&gt; &gt;&gt; Motivation &gt;&gt; CSS Font Loading and CSS Fonts 4 &lt;strong&gt;define width as the primary FontFace descriptor attribute and @font-face descriptor, while retaining stretch as a legacy alias&lt;/strong&gt;.....
- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com · 2026-09-22T00:00:00)*
  > Tracking bug #534781956 \| ChromeStatus.com entry \| Spec · &lt;strong&gt;Exposes the width attribute on FontFace and the @font-face font-width descriptor as aliases for stretch and font-stretch&lt;/strong&gt;.
- [Chrome 154 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com · 2026-09-02T00:00:00)*
  > &lt;strong&gt;Exposes the width attribute on FontFace and the @font-face font-width descriptor as aliases for stretch and font-stretch&lt;/strong&gt;. This aligns Chromium with the updated CSS Font Loading and CSS Fonts 4 specifications.
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > &lt;strong&gt;Exposes the width attribute on FontFace and the @font-face font-width descriptor as aliases for stretch and font-stretch&lt;/strong&gt;. Aligns Chromium with the updated CSS Font Loading and CSS Fonts 4 specifications.
- [Microsoft Edge 154 web platform release notes (Sep. 24, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/154) *(learn.microsoft.com · 2026-09-10T00:00:00)*
  > &lt;strong&gt;The width attribute in the FontFace API and the font-width property in @font-face descriptors are now aliases for the stretch attribute and font-stretch property&lt;/strong&gt;. This aligns Microsoft Edge with the updated CSS Font Loading and CSS F...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17223.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5145402365050880`)*
  > Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Chris Harrelson Wed, 19 Aug ...
- [\[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17203.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5145402365050880`)*
  > \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Michael Reeves Mon, 17 Aug 2026 17:4...
- [\[blink-dev\] Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17165.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5145402365050880`)*
  > \[blink-dev\] Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: FontFace width attribute and font-width descriptor Chromestatus Wed, 12 Aug 2026 21:46:10 -0700...

## 📚 Platform Documentation & Specifications

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/CSSFontFaceDescriptors) *(developer.mozilla.org)*
- [Font-width CSS property and @font-face descriptor docs are missing · Issue #42409 · mdn/content](https://github.com/mdn/content/issues/42409) *(github.com)*
- [font-width CSS at-rule descriptor - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/font-width) *(developer.mozilla.org)*
- [wpt/css/css-fonts/parsing/font-face-width.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/css/css-fonts/parsing/font-face-width.html) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 66 result(s) found across 11 planned queries — **14 verified relevant**
  - `"chromestatus.com/feature/5145402365050880" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"drafts.csswg.org/css-fonts-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"FontFace width attribute and font-width descriptor" API` — *Core feature API query* (3 returned)
  - `"FontFace width attribute and font-width descriptor" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"fontface.width" OR "font-width" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"FontFace width attribute and font-width descriptor" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"FontFace width attribute and font-width descriptor" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `FontFace width attribute font-width descriptor tutorial` — *Finds blog posts, guides, and tutorials explaining how to use the new FontFace width attribute and font-width descriptor.* (8 returned)
  - `FontFace.width font-width CSS font-stretch code examples` — *Searches for practical JavaScript API usage and CSS stylesheet examples using font-width and FontFace.width.* (8 returned)
  - `Chromium FontFace width descriptor specification update sentiment` — *Discovers release notes, ecosystem discussions, and developer sentiment regarding the alignment with CSS Fonts 4.* (8 returned)
  - `CSS Fonts 4 font-width descriptor discussions` — *Finds community forums, issues, and discussions about the standardization and adoption of the font-width descriptor.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 4 result(s) found — **3 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "font-width", shared with 0 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "font-width": Chrome 33.3% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5145402365050880)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5145402365050880)
- [Specification](https://drafts.csswg.org/css-fonts-4/#font-width-prop)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/543938492)
