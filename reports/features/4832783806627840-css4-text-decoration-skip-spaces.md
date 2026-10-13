# CSS4 text-decoration-skip-spaces

> **Report Week:** 2026-W42 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

The text-decoration-skip-spaces CSS property controls whether text decoration lines (underlines, overlines, line-throughs, etc.) skip over whitespace characters. This allows authors to prevent decorations from being drawn under spaces, which is often more visually appealing.

### Motivation

Currently there is no web standard way to control whether text decorations (underlines, overlines, line-throughs) appear over whitespace characters. Authors commonly want to suppress the underline under leading/trailing spaces in inline elements, but CSS provides no mechanism for this. The \`text-decoration-skip-spaces\` property fills this gap, allowing precise control over decoration rendering around whitespace. This is useful for navigation menus, links, and any text where the decoration should visually attach only to non-space characters.

## Ecosystem Status

- **Momentum:** Moderate (footprint 215 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Defined in the CSS Text Decoration Module Level 4 specification to replace older monolithic skip shorthand properties, text-decoration-skip-spaces gives authors granular control over whitespace underlines and strike-throughs. Chrome has enabled the feature by default starting in Chrome 155, addressing longstanding developer requests for cleaner inline links and navigation elements. However, widespread cross-engine consensus is still developing, leaving the property currently limited to Chromium-based browsers.

### Recommendations
- Actionable Advice: Web teams can safely apply text-decoration-skip-spaces today as a progressive enhancement, because unsupported browsers will gracefully ignore the rule and render standard text decorations without layout breakage. For design systems requiring pixel-identical underline boundaries across Safari and Firefox, teams should continue relying on existing typographic wrappers until cross-browser adoption widens.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`text-decoration`](https://webstatus.dev/features/text-decoration), shared with 3 other ChromeStatus features*

- Share of tests passing in the web-features group `text-decoration` on [wpt.fyi](https://wpt.fyi/results?q=feature:text-decoration) (via webstatus.dev) — stable: Chrome 76% · Edge 76.6% · Firefox 83.5% · Safari 65.5%; experimental: Chrome 90.1% · Edge 90.1% · Firefox 84.2% · Safari 80.7%

## 📰 Ecosystem Blogs & Articles

- [googleusercontent.com](https://doc-48mg-1o5g-issuetracker.googleusercontent.com/issues/40862777) *(doc-48mg-1o5g-issuetracker.googleusercontent.com)*
  > \* \*\*Syntax & Values:\*\* Values include \`none\`, \`\[ start \|\| end \]\`, or \`all\` (with the specification's default behavior tending toward \`start end\` to skip boundary whitespace)
- [tgland.ru](https://tgland.ru/article/chrome-155-vyshel-s-247-ispravleniyami-bezopasnosti-jpeg-xl-i-postkvantovoi-kriptografiei) *(tgland.ru)*
  > \* \*\*Core Benefit:\*\* Eliminates the classic typographic artifact where underlined links, navigation tabs, or strikethroughs visually spill over into trailing or leading space characters, removing the need for nested inline \`&lt;span&gt;\` wrappers or \`border...
- [chrome.com](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com)*
  > Chrome for Developers & Chrome Platform Status \* \*\*Announcement:\*\* \*Chrome 155 Beta / Release Notes (developer.chrome.com)\* dev highlighted \`text-decoration-skip-spaces\` as a major quality-of-life upgrade for modern digital typography and inline link...
- [CSS property: text-decoration-skip-spaces \| Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/mdn-css_properties_text-decoration-skip-spaces) *(caniuse.com)*
  > CSS property: text-decoration-skip-spaces \| Can I use... Support tables for HTML5, CSS3, etc Can I use Search ? Settings CSS property: text-decoration-skip-spaces Global usage 0.02% + 0% = 0.02% IE ❌ 6 - 10 : Not supported ❌ 11 : Not supported Edge ❌...
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > Chrome for Developers & Chrome Platform Status \* \*\*Announcement:\*\* \*Chrome 155 Beta / Release Notes (developer.chrome.com)\* \* \*\*Chrome Platform Status Entry:\*\* \*CSS4 text-decoration-skip-spaces\* \* \*\*Key Takeaway:\*\* Chrome formally announced and shipp...
- [web.dev](https://web.dev/blog/web-platform-09-2026?hl=en) *(web.dev)*
  > dev Monthly Roundups)\* dev highlighted \`text-decoration-skip-spaces\` as a major quality-of-life upgrade for modern digital typography and inline link styling
- [text-decoration-skip \| CSS-Tricks](https://css-tricks.com/almanac/properties/t/text-decoration-skip) *(css-tricks.com)*
  > While \`text-decoration-skip-ink\` (skipping character descenders like "g", "p", and "y") became Baseline widely available years ago, MDN documents \`text-decoration-skip-spaces\` as the specialized property intended to address whitespace decoration inte...
- [\[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17159.html) *(mail-archive.com)*
  > We talked about this during the API Owners call today and something that came up was this Issue 6 in the spec: https://drafts.csswg.org/css-text-decor-4/#issue-4229bfce Is your plan to ship with &#x27;none&#x27; as the default, or try &#x27;end&#x27;...
- [\[blink-dev\] Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17140.html) *(mail-archive.com)*
  > Specification https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property Summary The text-decoration-skip-spaces CSS property &lt;strong&gt;controls whether text decoration lines (underlines, overlines, line-throughs, etc.) skip over w...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17373.html) *(mail-archive.com)*
  > I also think this situation is uncommon &gt;&gt;&gt; in existing sites; developers have to go out of their way to cause extra &gt;&gt;&gt; spaces to appear next to a run of text. (Also note: the default does \*not\* &gt;&gt;&gt; skip spaces in the midd...
- [\[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17185.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces · Perry Mon, 17 Aug 2026 08:45:32 -0700 · Thanks Dan. My plan is to ship with &#x27;none&#x27; as the default, because I think such compatibility...

## 📚 Platform Documentation & Specifications

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Text_decoration) *(developer.mozilla.org)*
- [CSS Text Decoration Module Level 4](https://www.w3.org/TR/css-text-decor-4) *(w3.org)*
- [\[css-text-decor-4\] text-decoration-skip-spaces · Issue #713 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/713) *(github.com)*
- [CSS4 text-decoration-skip-spaces · Issue #1164 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1164) *(github.com)*
- [\`text-decoration-skip-spaces\` · Issue #4344 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4344) *(github.com)*
- [\[css-text-decor\] Add auto value for text-decoration-skip: · Issue #727 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/727) *(github.com)*
- [\[css-text-decor-4\] Variants of text-decoration-skip-spaces:end behavior, and initial value · Issue #4653 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4653) *(github.com)*
- [\[css-text-decor-4\] Don't skip visible word-separators when skipping only leading/trailing spaces · Issue #5249 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/5249) *(github.com)*
- [\[css-ruby-1\] Define inline-axis coverage of underline on ruby · Issue #5996 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/5996) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 61 result(s) found across 11 planned queries — **13 verified relevant**
  - `"chromestatus.com/feature/4832783806627840" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"drafts.csswg.org/css-text-decor-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSS4 text-decoration-skip-spaces" API` — *Core feature API query* (5 returned)
  - `"CSS4 text-decoration-skip-spaces" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"text-decoration-skip-spaces" OR "line-throughs" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS4 text-decoration-skip-spaces" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (7 returned)
  - `"CSS4 text-decoration-skip-spaces" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"text-decoration-skip-spaces" css (guide OR tutorial OR example)` — *Searches for developer guides, tutorials, and practical design patterns addressing underline rendering over whitespace.* (4 returned)
  - `"text-decoration-skip-spaces" "css-text-decor-4" syntax OR values` — *Discovers formal CSS syntax references, accepted property values, and spec-level code usage examples.* (8 returned)
  - `"text-decoration-skip-spaces" (site:chromestatus.com OR site:bugs.webkit.org OR site:bugzilla.mozilla.org OR site:caniuse.com)` — *Finds engine implementation status, intent-to-prototype/ship threads, and browser bug tracker progress across Blink, Gecko, and WebKit.* (8 returned)
  - `"text-decoration-skip-spaces" site:github.com/w3c/csswg-drafts (issue OR pull)` — *Retrieves CSS Working Group debate, spec issue resolutions, and edge-case concerns from spec authors and community members.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 4 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "text-decoration", shared with 3 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "text-decoration": Chrome 76% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4832783806627840)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4832783806627840)
- [Specification](https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40862777)
