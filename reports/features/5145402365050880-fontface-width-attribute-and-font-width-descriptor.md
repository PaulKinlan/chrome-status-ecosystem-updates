# FontFace width attribute and font-width descriptor

> **Report Week:** 2026-W42 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Exposes the width attribute on FontFace and the @font-face font-width descriptor as aliases for stretch and font-stretch. Aligns Chromium with the updated CSS Font Loading and CSS Fonts 4 specifications. Developers can now inspect or initialize font face widths using FontFace.width and CSS font-width interchangeably with stretch and font-stretch.

### Motivation

CSS Font Loading and CSS Fonts 4 define width as the primary FontFace descriptor attribute and @font-face descriptor, while retaining stretch as a legacy alias. Chromium previously ignored the width constructor member and font-width descriptor, causing Web Platform Tests to fail. Exposing width aligns Chromium with the updated specification.

## Ecosystem Status

- **Momentum:** Emerging (footprint 140 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The FontFace width attribute and @font-face font-width descriptor align browser engines with CSS Fonts Module Level 4 and CSS Font Loading, establishing 'width' as the canonical descriptor while preserving 'stretch' as a backward-compatible legacy alias. With Safari 18.4, Firefox 155, and Chrome 154 shipping enabled-by-default support, the feature has completed cross-engine consensus and unified modern interoperability. The ecosystem views this update as an ergonomic cleanup that standardizes font descriptor terminology alongside font-weight and font-style.

### Recommendations
- Actionable Advice: Teams may begin adopting font-width and FontFace.width for modern code clarity, but should maintain font-stretch fallbacks declared earlier in @font-face blocks to ensure compatibility with older browser releases. In programmatic font loading workflows, checking or setting both width and stretch properties ensures complete resilience across legacy environments.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`font-width`](https://webstatus.dev/features/font-width)*

- Share of tests passing in the web-features group `font-width` on [wpt.fyi](https://wpt.fyi/results?q=feature:font-width) (via webstatus.dev) — stable: Chrome 33.3% · Edge 33.3% · Firefox 100% · Safari 100%; experimental: Chrome 33.3% · Edge 33.3% · Firefox 100% · Safari 100%

## 📰 Ecosystem Blogs & Articles

- [web.dev](https://web.dev/blog/web-platform-09-2026?hl=en) *(web.dev)*
  > width\` attribute and \`@font-face\` \`font-width\` descriptor\*\* update aligns modern browsers with the CSS Fonts Module Level 4 and CSS Font Loading specifications In CSS Fonts 4, the CSS Working Group renamed the canonical identifier for condensed/expan...
- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > width\`) or declare them in CSS (\`@font-face { font-width: ... }\`) interchangeably with \`stretch\` and \`font-stretch\` \*Chrome for Developers\* — Chrome 154 Beta & Stable Release Notes \* \*\*Coverage:\*\* Announced in the Chrome 154 Beta post and subsequent ...
- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17211.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Mike Taylor Tue, 18 Aug 2026 08:34:37 ...
- [\[blink-dev\] Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17165.html) *(mail-archive.com)*
  > Adoption expectation Feature is ... font face width descriptors within 12 months of reaching Web Platform baseline. Adoption plan Web Platform Tests (WPT) have been added to ensure cross-browser interoperability. MDN documentation will be updated to ...
- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17222.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; &gt;&gt; &gt;&gt; Adoption expectation ... font face width &gt;&gt; descriptors within 12 months of reaching Web Platform baseline. &gt;&gt; &gt;&gt; &gt;&gt; &gt;&gt; Adoption plan &gt;&gt; &gt;&gt; Web Platform Tests (WPT) have be...
- [\[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17196.html) *(mail-archive.com)*
  > &gt; &gt; \*Adoption expectation\* &gt; Feature ... font face width &gt; descriptors within 12 months of reaching Web Platform baseline. &gt; &gt; \*Adoption plan\* &gt; Web Platform Tests (WPT) have been added to ensure cross-browser &gt; interoperabili...
- [\[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17203.html) *(mail-archive.com)*
  > &gt;&gt; False &gt;&gt; &gt;&gt; Tracking bug &gt;&gt; ... launch in &gt;&gt; Chrome. &gt;&gt; &gt;&gt; Adoption expectation &gt;&gt; &lt;strong&gt;Feature is considered a best practice for configuring font face width &gt;&gt; descriptors within 12 months ...
- [New to the web platform in September \| Blog \| web.dev](https://web.dev/blog/web-platform-09-2026) *(web.dev)*
  > Chrome 154 also adds the font-width descriptor in @font-face rules and the width property on FontFace objects. Together with existing support in Safari, &lt;strong&gt;font-width is now Baseline Newly available&lt;/strong&gt;.
- [Chromium](https://issues.chromium.org/40937070) *(issues.chromium.org)*
  > Chromium Sign in

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17211.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5145402365050880`)*
  > Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Mike Taylor Tue, 18 Aug 2026...

## 📚 Platform Documentation & Specifications

- [font-width CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-width) *(developer.mozilla.org)*
- [font-width CSS at-rule descriptor - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/font-width) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/CSSFontFaceDescriptors) *(developer.mozilla.org)*
- [wpt/css/css-fonts/parsing/font-face-width.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/css/css-fonts/parsing/font-face-width.html) *(github.com)*
- [\[css-font-loading\] Which value wins if both \`stretch\` and \`width\` are provided? · Issue #14451 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14451) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 51 result(s) found across 11 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5145402365050880" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"drafts.csswg.org/css-fonts-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"FontFace width attribute and font-width descriptor" API` — *Core feature API query* (3 returned)
  - `"FontFace width attribute and font-width descriptor" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"fontface.width" OR "font-width" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"FontFace width attribute and font-width descriptor" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"FontFace width attribute and font-width descriptor" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"FontFace" ("font-width" OR "width") css font loading guide OR tutorial` — *Searches for developer guides and articles explaining the usage of font-width and the FontFace width descriptor.* (8 returned)
  - `"new FontFace" ("width" OR "font-width") code OR example javascript css` — *Finds real-world code examples and WebIDL usage constructing FontFace instances with the width descriptor.* (4 returned)
  - `"font-width" "FontFace" ("intent to ship" OR "Chrome" OR "Firefox" OR "Safari") support` — *Tracks browser adoption, release announcements, and intent-to-ship notices for the FontFace width attribute and descriptor.* (4 returned)
  - `("FontFace.width" OR "font-width descriptor") ("font-stretch" OR "stretch") (csswg OR wpt OR issue)` — *Discovers standards debates, bug reports, and Web Platform Tests discussions regarding replacing stretch with width.* (3 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **5 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "font-width", shared with 0 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "font-width": Chrome 33.3% passing (stable)*
- **Sources cited by the AI synthesis:** 7 result(s) found — **4 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 10 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5145402365050880)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5145402365050880)
- [Specification](https://drafts.csswg.org/css-fonts-4/#font-width-prop)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/543938492)
