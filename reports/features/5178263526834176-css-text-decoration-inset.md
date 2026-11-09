# CSS text-decoration-inset

> **Report Week:** 2026-W46 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

CSS text-decoration-inset controls how far underlines, overlines, and line-through decorations are inset from or extended beyond text run edges. It supports auto, length, and percentage values, including one-value and two-value syntax for setting the start and end offsets. This lets developers adjust decoration spacing and create reveal effects with native text decorations instead of background gradients or additional elements.   sampler: https://static.januschka.com/i-468928416/?asddsaasd MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset  CL: https://chromium-review.googlesource.com/c/chromium/src/+/7748204

### Motivation

This change implements CSS text-decoration-inset (CSS Text Decoration Level 4), including percentage values. It gives authors direct control over decoration inset and reduces the need for wrapper/pseudo-element workarounds used to fine-tune underline/overline/line-through rendering.    sampler: https://static.januschka.com/i-468928416/?asddsaasd MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset  CL: https://chromium-review.googlesource.com/c/chromium/src/+/7748204

## Ecosystem Status

- **Momentum:** High (+210 points since 2026-10-12; footprint 350 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** CSS text-decoration-inset (part of CSS Text Decoration Module Level 4) provides native inline control to shorten, extend, or shift text decorations such as underlines and strike-throughs using lengths and percentages. The feature resolves a long-standing web typography pain point, replacing legacy workarounds like gradient backgrounds or pseudo-elements. With active implementation across Blink, Gecko, and WebKit, the property enjoys high cross-engine momentum and widespread standard alignment.

### Recommendations
- Actionable Advice: Teams should adopt text-decoration-inset immediately as a progressive enhancement, wrapping custom underline insets or hover transitions inside '@supports (text-decoration-inset: 1px)'. Unsupporting browsers will simply render standard full-width decorations without breaking layout or legibility.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 154 is rolling out now ⬇️ https://t.co/rteT1QOjaQ" / X" (0 points, 0 comments).

## Web-features Group

*group-level data: web-features [`text-decoration`](https://webstatus.dev/features/text-decoration), shared with 3 other ChromeStatus features*

- Share of tests passing in the web-features group `text-decoration` on [wpt.fyi](https://wpt.fyi/results?q=feature:text-decoration) (via webstatus.dev) — stable: Chrome 89.4% · Edge 89.9% · Firefox 81.4% · Safari 66.8%; experimental: Chrome 95% · Edge 95.5% · Firefox 81.4% · Safari 84.4%

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Chrome for Developers on X: "Chrome 154 is rolling out now ⬇️ https://t.co/rteT1QOjaQ" / X](https://x.com/ChromiumDev/status/2102804599325528424) — *by @ChromiumDev, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [lunamoth on X: "Chrome 154 \| Release notes](https://x.com/lunamoth/status/2103097878411710954) — *by @lunamoth, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [text-decoration-inset is Like Padding for Text Decorations \| CSS-Tricks](https://css-tricks.com/text-decoration-inset-is-like-padding-for-text-decorations) *(css-tricks.com)*
  > The \*\*\`CSS text-decoration-inset\`\*\* property (part of CSS Text Decoration Module Level 4) gives developers direct control over the start and end offsets of text decorations (underlines, overlines, and line-throughs) \*\*What it covers\*\*: A deep dive in...
- [chromestatus.com](https://chromestatus.com/feature/5178263526834176?gate=6555321377095680) *(chromestatus.com)*
  > The \*\*\`CSS text-decoration-inset\`\*\* property (part of CSS Text Decoration Module Level 4) gives developers direct control over the start and end offsets of text decorations (underlines, overlines, and line-throughs) \*\*Core Problem Solved\*\*: For years...
- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides/visual-design/custom-text-decorations?hl=fa) *(developer.chrome.com)*
  > \*\*Behavior\*\*: Positive values inset (pull inward / shorten) the line, while negative values extend (outset) it past the text run edges Percentages are calculated relative to the inline size of the decorated text box
- [Custom text decorations  \|  Modern Web Guidance  \|  Chrome for Developers](https://developer.chrome.com/docs/modern-web-guidance/guides/visual-design/custom-text-decorations) *(developer.chrome.com)*
  > \*\*What it covers\*\*: Chrome's developer guides demonstrate how to integrate \`text-decoration-inset\` into modern design systems \*\*Key Takeaway\*\*: The guide focuses on pairing \`text-decoration-inset\` with \`text-decoration-skip-ink\` and \`text-underline-o...
- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides) *(developer.chrome.com)*
  > \*\*What it covers\*\*: Chrome's developer guides demonstrate how to integrate \`text-decoration-inset\` into modern design systems
- [zhangxinxu.com](https://www.zhangxinxu.com/wordpress/2026/01/css-text-decoration-inset) *(zhangxinxu.com)*
  > An early hands-on review highlighting initial browser testing It showcases visual comparisons and GIF demonstrations demonstrating how partial underlines and asymmetrically shifted decoration lines behave across Latin and non-Latin typography
- [\[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17255.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS text-decoration-inset Helmut Januschka Sun, 23 Aug 2026 07:20:14 -0700 \*Contact emails\* \[email&#160;protected\] \*Specification\*...
- [\[blink-dev\] Intent to Prototype: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg16309.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: CSS text-decoration-inset Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS text-decoration-inset Helmut Januschka Fri, 10 Apr 2026 04:36:16 -0700 \*Contact emails\* \[email&#160;protected\] \*Spec...
- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17259.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset Mike Taylor Mon, 24 Aug 2026 06:36:24 -0700 On 8/23/26 9:43 a.m., Helmut Januschka wrote: \*Conta...
- [Chrome 154  \|  Release notes  \|  Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com · 2026-09-22T00:00:00)*
  > The text-decoration-inset CSS property &lt;strong&gt;controls how far underlines, overlines, and line-through decorations are inset from or extended beyond text run edges&lt;/strong&gt;. It supports auto, length, and percentage values, including one-value and tw...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com · 2026-11-02T20:19:23)*
  > CSS text-decoration-inset &lt;strong&gt;controls how far underlines, overlines, and line-through decorations are inset from or extended beyond text run edges&lt;/strong&gt;. It supports auto, length, and percentage values, including one-value and two-value synta...
- [Chrome 154 beta  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com · 2026-09-02T00:00:00)*
  > The text-decoration-inset CSS property &lt;strong&gt;controls how far underlines, overlines, and line-through decorations are inset from or extended beyond text run edges&lt;/strong&gt;. It supports auto, length, and percentage values, including one-value and tw...
- [New in Chrome 154  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/new-in-chrome-154) *(developer.chrome.com · 2026-09-22T00:00:00)*
  > The text-decoration-inset CSS property &lt;strong&gt;lets you adjust the start and end points of an element&#x27;s text decoration so that it is inset from, extended beyond, or shifted relative to the text run edges&lt;/strong&gt;.
- [text-decoration-inset is Like Padding for Text Decorations](https://247webdevs.blogspot.com/2025/12/text-decoration-inset-is-like-padding.html) *(247webdevs.blogspot.com · 2025-12-22T15:22:48)*
  > We often animate underlines, or should I say faux ::after underlines, but with text-decoration-inset we can do it natively. In the example below I &lt;strong&gt;multiply the insets by ten on :hover&lt;/strong&gt;.
- [Experimental Chromium Web Platform Features \| Polypane](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > This lets developers adjust decoration spacing and create reveal effects with native text decorations instead of background gradients or additional elements. sampler: https://static.januschka.com/i-468928416/?asddsaasd MDN: https://developer.mozilla....
- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17303.html) *(mail-archive.com)*
  > Can we please request signals? &lt;strong&gt;Mozilla has already shipped support for text-decoration-inset in Firefox 146&lt;/strong&gt;, see https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/146#css, though they are currently still working on su...
- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17290.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; &gt;&gt; \*Initial public proposal\* &gt;&gt; \*No information provided\* &gt;&gt; &gt;&gt; \*TAG review\* &gt;&gt; \*No information provided\* &gt;&gt; &gt;&gt; \*TAG review status\* &gt;&gt; Not applicable &gt;&gt; &gt;&gt; \*Goals for exper...
- [New in Chrome 154 \| Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/article/2102804599325528424) *(x.com · 2026-09-23T16:56:48)*
  > CSS text-decoration-inset &lt;strong&gt;lets you adjust the start and end points of text decorations&lt;/strong&gt;.
- [text-decoration-inset \| CSS CSS Properties](https://modern-css.com/reference/properties/text-decoration-inset) *(modern-css.com)*
  > &lt;strong&gt;An experimental property that allows you to adjust the position of an underline or overline, pushing it closer to or further away from the text baseline&lt;/strong&gt;.
- ["text-decoration-inset" CSS property - CSS HTML Validator](https://www.htmlvalidator.com/help.php?m=1&h=text-decoration-inset) *(htmlvalidator.com)*
  > This property &lt;strong&gt;adjusts the start and end endpoints of line decorations&lt;/strong&gt;.
- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17445.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; \*Initial public proposal\* &gt;&gt;&gt;&gt;&gt; \*No information provided\* &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; \*TAG review\* &gt;&gt;&gt;&gt;&gt; \*No information provided\* &gt;&gt;&gt;...
- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17448.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt; Safari also recently implemented it in &gt;&gt;&gt;&gt;&gt;&gt; https://bugs.webkit.org/show\_bug.cgi?id=319178, see also &gt;&gt;&gt;&gt;&gt;&gt; https://webkit.org/css-status/?#property-text-decoration-inset &gt;&gt;&gt;&gt;...
- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17567.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt; \*Initial public proposal\* &gt;&gt;&gt;&gt;&gt;&gt;&gt; \*No information provided\* &gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt; \*TAG review\* &gt;&gt;&gt...
- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17305.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; \*Initial public proposal\* &gt;&gt;&gt;&gt; \*No information provided\* &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; \*TAG review\* &gt;&gt;&gt;&gt; \*No information provided\* &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; \*TAG r...
- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17304.html) *(mail-archive.com)*
  > &gt;&gt;&gt; Safari also recently implemented it in &gt;&gt;&gt; https://bugs.webkit.org/show\_bug.cgi?id=319178, see also &gt;&gt;&gt; https://webkit.org/css-status/?#property-text-decoration-inset &gt;&gt;&gt; &lt;https://webkit.org/css-status/#prop...
- [youtube.com](https://m.youtube.com/shorts/slGH6f2XY7E) *(m.youtube.com)*
  > Stop Faking Underlines in CSS (New text-decoration-inset) - YouTube About Press Copyright Contact us Creators Advertise Developers Terms Privacy Policy & Safety How YouTube works Test new features NFL Sunday Ticket &copy; 2026 Google LLC var ytInitia...
- [322441 &ndash; \[css-text-decor-4\] Add support for percentages to text-decoration-inset](https://bugs.webkit.org/show_bug.cgi?id=322441) *(bugs.webkit.org)*
  > 322441 &ndash; \[css-text-decor-4\] Add support for percentages to text-decoration-inset WebKit Bugzilla Bug 322441: \[css-text-decor-4\] Add support for percentages to text-decoration-inset --&gt; New Browse Search+ Log In &times; Sign in with GitHub or Re...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17255.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > \[blink-dev\] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS text-decoration-inset Helmut Januschka Sun, 23 Aug 2026 07:20:14 -0700 \*Contact emails\* \[email&#160;protected\] \*Spec...
- [\[blink-dev\] Intent to Prototype: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg16309.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > \[blink-dev\] Intent to Prototype: CSS text-decoration-inset Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS text-decoration-inset Helmut Januschka Fri, 10 Apr 2026 04:36:16 -0700 \*Contact emails\* \[email&#160;protec...
- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17259.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset Mike Taylor Mon, 24 Aug 2026 06:36:24 -0700 On 8/23/26 9:43 a.m., Helmut Januschka wro...
- [text-decoration-inset · Issue #4462 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4462) *(github.com · 2026-10-02T00:49:44)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > text-decoration-inset · Issue #4462 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You s...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1349) *(github.com)*
- [text-decoration-inset CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset) *(developer.mozilla.org)*
- [text-decoration-inset · Issue #4462 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4462) *(github.com)*
- [\[css-text-decor-4\] Allow percentages in \`text-decoration-inset\` · Issue #8403 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/8403) *(github.com)*
- [Add CSS Text Decoration 4 properties: text-emphasis-\* and text-decoration-skip/inset · Issue #2265 · jhaygood86/PeachPDF · GitHub](https://github.com/jhaygood86/PeachPDF/issues/2265) *(github.com)*
- [\[css-text-decor-4\] Consider renaming \`text-decoration-trim\` · Issue #8402 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/8402) *(github.com)*
- [\[css-text-decor-4\] Allow to interpolate between \`auto\` and length values in \`text-decoration-inset\` · Issue #13036 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/13036) *(github.com)*
- [1997157 - Rename \`text-decoration-trim\` to \`text-decoration-inset\` per today's CSS WG resolution](https://bugzilla.mozilla.org/show_bug.cgi?id=1997157) *(bugzilla.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 71 result(s) found across 11 planned queries — **27 verified relevant**
  - `"chromestatus.com/feature/5178263526834176" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (8 returned)
  - `"drafts.csswg.org/css-text-decor-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSS text-decoration-inset" API` — *Core feature API query* (8 returned)
  - `"CSS text-decoration-inset" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"static.januschka" OR "developer.mozilla" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS text-decoration-inset" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS text-decoration-inset" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"text-decoration-inset" ("tutorial" OR "guide" OR "examples") underline` — *Finds practical developer guides and tutorials demonstrating how to customize text decoration start and end offsets.* (8 returned)
  - `"text-decoration-inset:" ("auto" OR "%" OR "px")` — *Locates real-world CSS code snippets and rule declarations testing syntax options like length and percentage values.* (8 returned)
  - `"text-decoration-inset" ("Intent to Ship" OR "Intent to Prototype" OR "WebKit" OR "Chromium")` — *Tracks browser engine implementation progress, release announcements, and standards adoption across Blink and WebKit.* (8 returned)
  - `"text-decoration-inset" (site:reddit.com/r/webdev OR site:news.ycombinator.com OR site:github.com/w3c/csswg-drafts/issues)` — *Discovers web developer reactions, community feedback, and CSSWG standards discussion threads.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 5 result(s) found — **2 verified relevant**
- **Dev.to Community Blogs:** 4 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 3 result(s) found — **3 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "text-decoration", shared with 3 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "text-decoration": Chrome 89.4% passing (stable)*
- **Sources cited by the AI synthesis:** 9 result(s) found — **7 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 13 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5178263526834176)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5178263526834176)
- [Specification](https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/468928416)
