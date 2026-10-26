# CSS text-decoration-inset

> **Report Week:** 2026-W44 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

CSS text-decoration-inset controls how far underlines, overlines, and line-through decorations are inset from or extended beyond text run edges. It supports auto, length, and percentage values, including one-value and two-value syntax for setting the start and end offsets. This lets developers adjust decoration spacing and create reveal effects with native text decorations instead of background gradients or additional elements.   sampler: https://static.januschka.com/i-468928416/?asddsaasd MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset  CL: https://chromium-review.googlesource.com/c/chromium/src/+/7748204

### Motivation

This change implements CSS text-decoration-inset (CSS Text Decoration Level 4), including percentage values. It gives authors direct control over decoration inset and reduces the need for wrapper/pseudo-element workarounds used to fine-tune underline/overline/line-through rendering.    sampler: https://static.januschka.com/i-468928416/?asddsaasd MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset  CL: https://chromium-review.googlesource.com/c/chromium/src/+/7748204

## Ecosystem Status

- **Momentum:** Moderate (footprint 250 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The text-decoration-inset property (CSS Text Decoration Module Level 4) provides native control over the start and end offsets of underlines, overlines, and line-throughs using length, percentage, or auto values. It effectively eliminates longstanding workarounds like background gradients and pseudo-elements historically used to fine-tune decoration bounds and underline reveal animations. With Firefox having shipped support, Chromium enabling it by default, and WebKit landing support through Safari Technology Preview, the API is converging toward broad cross-engine baseline interoperability.

### Recommendations
- Actionable Advice: Teams can begin adopting text-decoration-inset today as a progressive enhancement for interactive link animations and typographic adjustments. Ensure standard text-decoration or fallback underlines remain functional for older browser engines that do not yet recognize the property.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`text-decoration`](https://webstatus.dev/features/text-decoration), shared with 3 other ChromeStatus features*

- Share of tests passing in the web-features group `text-decoration` on [wpt.fyi](https://wpt.fyi/results?q=feature:text-decoration) (via webstatus.dev) — stable: Chrome 69.6% · Edge 70.2% · Firefox 84.2% · Safari 65.5%; experimental: Chrome 95.3% · Edge 95.9% · Firefox 84.2% · Safari 80.7%

## 📰 Ecosystem Blogs & Articles

- [text-decoration-inset is Like Padding for Text Decorations \| CSS-Tricks](https://css-tricks.com/text-decoration-inset-is-like-padding-for-text-decorations) *(css-tricks.com)*
  > Recent developer articles, documentation, and browser releases highlight key details regarding the \*\*\`text-decoration-inset\`\*\* property defined in \*\*CSS Text Decoration Module Level 4\*\* \`text-decoration-inset\` (previously discussed in draft revisions...
- [chromium.org](https://issues.chromium.org/issues/498974811) *(issues.chromium.org)*
  > \*\*Syntax:\*\* Supports \`auto\`, \`&lt;length&gt;\`, and \`&lt;percentage&gt;\` values \*\*Percentage Support:\*\* Supported according to recent CSSWG resolutions, resolving relative to text segments
- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > \*\*Syntax:\*\* Supports \`auto\`, \`&lt;length&gt;\`, and \`&lt;percentage&gt;\` values \*\*Offsets:\*\* Accepts either a single value (applied to both ends) or two values (setting start and end insets independently)
- [chromestatus.com](https://chromestatus.com/feature/5178263526834176?gate=6555321377095680) *(chromestatus.com)*
  > Covered by Rachel Andrew on \*Chrome for Developers\*, Chromium officially shipped \`text-decoration-inset\` in Chrome 154 (via Chromium CL \[7748204\](https://chromium-review.googlesource.com/c/chromium/src/+/7748204) / Issue 468928416)
- [chrome.com](https://developer.chrome.com/new) *(developer.chrome.com)*
  > Covered by Rachel Andrew on \*Chrome for Developers\*, Chromium officially shipped \`text-decoration-inset\` in Chrome 154 (via Chromium CL \[7748204\](https://chromium-review.googlesource.com/c/chromium/src/+/7748204) / Issue 468928416)
- [\[blink-dev\] Intent to Prototype: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg16309.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: CSS text-decoration-inset Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS text-decoration-inset Helmut Januschka Fri, 10 Apr 2026 04:36:16 -0700 \*Contact emails\* \[email&#160;protected\] \*Spec...
- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17259.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset Mike Taylor Mon, 24 Aug 2026 06:36:24 -0700 On 8/23/26 9:43 a.m., Helmut Januschka wrote: \*Conta...
- [\[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17255.html) *(mail-archive.com)*
  > This &lt;strong&gt;lets developers adjust decoration spacing and create reveal effects with native text decorations instead of background gradients or additional elements&lt;/strong&gt;. sampler: https://static.januschka.com/i-468928416/?asddsaasd MDN: https://d...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > sampler: https://static.januschka.com/i-468928416/?asddsaasd MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset
- [Experimental Chromium Web Platform Features \| Polypane](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > This lets developers adjust decoration spacing and create reveal effects with native text decorations instead of background gradients or additional elements. sampler: https://static.januschka.com/i-468928416/?asddsaasd MDN: https://developer.mozilla....
- ["text-decoration-inset" CSS property - CSS HTML Validator](https://www.htmlvalidator.com/help.php?m=1&h=text-decoration-inset) *(htmlvalidator.com)*
  > &lt;strong&gt;Positive values move an endpoint inward, trimming the decoration; negative values move it outward, extending the decoration&lt;/strong&gt;. CanIUse.com: Search &quot;text-decoration-inset&quot; (browser compatibility information)
- [text-decoration-inset \| CSS CSS Properties](https://modern-css.com/reference/properties/text-decoration-inset) *(modern-css.com)*
  > &lt;strong&gt;An experimental property that allows you to adjust the position of an underline or overline, pushing it closer to or further away from the text baseline&lt;/strong&gt;.
- [text-decoration-inset is Like Padding for Text Decorations](https://247webdevs.blogspot.com/2025/12/text-decoration-inset-is-like-padding.html) *(247webdevs.blogspot.com · 2025-12-22T15:22:48)*
  > The text-decoration-inset CSS property solves a problem that we’ve had since the beginning of the web, which is that text decorations such as underlines extend beyond the first and last characters (to the edges of the content box, to be specific), re...
- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17279.html) *(mail-archive.com)*
  > Mozilla has already shipped support for text-decoration-inset in Firefox 146, see https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/146#css, though they are currently still working on support for percentages. Safari also recently impl...
- [\[dev-platform\] Intent to prototype: support percentage value for text-decoration-inset](http://www.mail-archive.com/dev-platform@mozilla.org/msg01871.html) *(mail-archive.com)*
  > \*Summary\*: Per this spec issue, csswg-draft#8403 &lt;https://github.com/w3c/csswg-drafts/issues/8403&gt;, we&#x27;d like to extend the syntax of text-decoration-inset to support &lt;length-percentage&gt; value, instead of &lt;length&gt;. This propert...
- [\[dev-platform\] Re: Intent to prototype: support percentage value for text-decoration-inset](http://www.mail-archive.com/dev-platform@mozilla.org/msg01882.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · \[dev-platform\] Re: Intent to prototype: support percentage value for text-decoration-inset · 一丝 Tue, 01 Sep 2026 00:29:17 -0700 · WebKit implemented this feature a few days ago and added more test cases. https:...
- [dev-platform@mozilla.org - Google Groups](https://groups.google.com/a/mozilla.org/g/dev-platform) *(groups.google.com · 2026-08-12T00:00:00)*
  > Intent to prototype: support percentage value for text-decoration-inset
- [dev-platform](https://www.mail-archive.com/dev-platform@mozilla.org) *(mail-archive.com)*
  > \[dev-platform\] Re: Intent to prototype: support percentage value for text-decoration-inset 一丝

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg16309.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > \[blink-dev\] Intent to Prototype: CSS text-decoration-inset Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS text-decoration-inset Helmut Januschka Fri, 10 Apr 2026 04:36:16 -0700 \*Contact emails\* \[email&#160;protec...
- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17259.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset Mike Taylor Mon, 24 Aug 2026 06:36:24 -0700 On 8/23/26 9:43 a.m., Helmut Januschka wro...

## 📚 Platform Documentation & Specifications

- [text-decoration-inset · Issue #4462 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4462) *(github.com)*
- [text-decoration-inset CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset) *(developer.mozilla.org)*
- [CSS text-decoration-inset · Issue #1349 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1349) *(github.com)*
- [Propriété CSS text-decoration-inset - MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Properties/text-decoration-inset) *(developer.mozilla.org)*
- [\[css-text-decor-4\] Allow percentages in \`text-decoration-inset\` · Issue #8403 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/8403) *(github.com)*
- [\[css-text-decor-4\] Consider renaming \`text-decoration-trim\` · Issue #8402 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/8402) *(github.com)*
- [\[css-text-decor-4\] Allow to interpolate between \`auto\` and length values in \`text-decoration-inset\` · Issue #13036 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13036) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 71 result(s) found across 11 planned queries — **21 verified relevant**
  - `"chromestatus.com/feature/5178263526834176" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (6 returned)
  - `"drafts.csswg.org/css-text-decor-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSS text-decoration-inset" API` — *Core feature API query* (4 returned)
  - `"CSS text-decoration-inset" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"static.januschka" OR "developer.mozilla" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS text-decoration-inset" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS text-decoration-inset" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"text-decoration-inset" (tutorial OR guide OR "css tricks" OR "web.dev")` — *Discovers developer tutorials, practical guides, and blog posts detailing how to use text-decoration-inset.* (8 returned)
  - `"text-decoration-inset:" ("%" OR px) text-decoration` — *Finds real-world CSS code snippets and usage examples demonstrating length and percentage offset values.* (8 returned)
  - `"text-decoration-inset" ("intent to ship" OR "intent to prototype" OR Chrome OR Firefox OR Safari)` — *Tracks browser vendor release notes, implementation status, and standard adoption announcements.* (8 returned)
  - `"text-decoration-inset" (site:github.com/w3c/csswg-drafts/issues OR site:reddit.com/r/css OR site:reddit.com/r/webdev)` — *Surfaces community feedback, developer sentiment, and CSSWG specification discussions around text decoration inset.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 5 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 3 result(s) found — **3 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "text-decoration", shared with 3 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "text-decoration": Chrome 69.6% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5178263526834176)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5178263526834176)
- [Specification](https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/468928416)
