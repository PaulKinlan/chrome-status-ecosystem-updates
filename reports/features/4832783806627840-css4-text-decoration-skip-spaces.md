# CSS4 text-decoration-skip-spaces

> **Report Week:** 2026-W44 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

The text-decoration-skip-spaces CSS property controls whether text decoration lines (underlines, overlines, line-throughs, etc.) skip over whitespace characters. This allows authors to prevent decorations from being drawn under spaces, which is often more visually appealing.

### Motivation

Currently there is no web standard way to control whether text decorations (underlines, overlines, line-throughs) appear over whitespace characters. Authors commonly want to suppress the underline under leading/trailing spaces in inline elements, but CSS provides no mechanism for this. The \`text-decoration-skip-spaces\` property fills this gap, allowing precise control over decoration rendering around whitespace. This is useful for navigation menus, links, and any text where the decoration should visually attach only to non-space characters.

## Ecosystem Status

- **Momentum:** Moderate (footprint 275 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Defined in CSS Text Decoration Module Level 4, text-decoration-skip-spaces decomposes the legacy text-decoration-skip property into a dedicated longhand controlling whether text decorations draw across whitespace. Chromium is the first engine moving forward with shipping support enabled by default in Chrome 155, aiming to solve visual clipping and underline overflow in inline navigation links. Broad cross-browser interoperability remains unfulfilled pending implementation and formal adoption from Apple WebKit and Mozilla Gecko.

### Recommendations
- Actionable Advice: Use text-decoration-skip-spaces as an opt-in progressive enhancement for aesthetic refinement on inline links, buttons, and navigation menus. Ensure underlying designs remain visually acceptable in Firefox and Safari until multi-engine consensus and implementation catch up.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`text-decoration`](https://webstatus.dev/features/text-decoration), shared with 3 other ChromeStatus features*

- Share of tests passing in the web-features group `text-decoration` on [wpt.fyi](https://wpt.fyi/results?q=feature:text-decoration) (via webstatus.dev) — stable: Chrome 69.6% · Edge 70.2% · Firefox 84.2% · Safari 65.5%; experimental: Chrome 95.3% · Edge 95.9% · Firefox 84.2% · Safari 80.7%

## 📰 Ecosystem Blogs & Articles

- [github.io](https://web-platform-dx.github.io/web-features-explorer/features/text-decoration-skip-spaces) *(web-platform-dx.github.io)*
  > It gives authors granular control over whether text decorations (such as underlines, overlines, and line-throughs) are drawn across whitespace characters Can I Use and the \*Web Features Explorer\* catalog the property as experimental and track its cro...
- [googlesource.com](https://chromium.googlesource.com/chromium/src/+/9e279b56dd55d666be521630d76d7b8057863ba4) *(chromium.googlesource.com)*
  > \*\*Syntax:\*\* \`none \| all \| \[ start \|\| end \]\`
- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > \*\*Source:\*\* \*Chrome Platform Status / Chrome 154–155 Beta Blog\* The Chrome release notes highlighted this alongside typography improvements like \`text-decoration-inset\`
- [caniuse.com](https://caniuse.com/mdn-css_properties_text-decoration-skip-spaces) *(caniuse.com)*
  > \*\*Source:\*\* \*MDN CSS Text Decoration Reference & CanIUse Browser Tables\* Can I Use and the \*Web Features Explorer\* catalog the property as experimental and track its cross-browser baseline status
- [\[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17159.html) *(mail-archive.com)*
  > We talked about this during the API Owners call today and something that came up was this Issue 6 in the spec: https://drafts.csswg.org/css-text-decor-4/#issue-4229bfce Is your plan to ship with &#x27;none&#x27; as the default, or try &#x27;end&#x27;...
- [\[blink-dev\] Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17140.html) *(mail-archive.com)*
  > Specification https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property Summary The text-decoration-skip-spaces CSS property &lt;strong&gt;controls whether text decoration lines (underlines, overlines, line-throughs, etc.) skip over w...
- [\[blink-dev\] Ready for Developer Testing: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg16534.html) *(mail-archive.com)*
  > Specification https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property Summary The text-decoration-skip-spaces CSS property &lt;strong&gt;controls whether text decoration lines (underlines, overlines, line-throughs, etc.) skip over w...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17373.html) *(mail-archive.com)*
  > I also think this situation is uncommon &gt;&gt;&gt; in existing sites; developers have to go out of their way to cause extra &gt;&gt;&gt; spaces to appear next to a run of text. (Also note: the default does \*not\* &gt;&gt;&gt; skip spaces in the midd...
- [\[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17185.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces · Perry Mon, 17 Aug 2026 08:45:32 -0700 · Thanks Dan. My plan is to ship with &#x27;none&#x27; as the default, because I think such compatibility...
- [text-decoration-skip CSS Syntax \| modern-css.com](https://modern-css.com/reference/properties/text-decoration-skip) *(modern-css.com)*
  > /\* Usage Example \*/ &lt;strong&gt;div { text-decoration: underline; /\* Tells the underline to skip over any empty spaces between words \*/ text-decoration-skip: spaces; }&lt;/strong&gt; /\* Syntax \*/ text-decoration-skip: none; text-decoration-skip: objects; text-...
- [CSS text-decoration-skip Property - CSS Portal](https://www.cssportal.com/css-properties/text-decoration-skip.php) *(cssportal.com)*
  > &lt;strong&gt;all characters with the Unicode White\_Space property \[UAX44\] and all word separator characters, plus any adjacent letter-spacing or word-spacing&lt;/strong&gt;. inkSkip over where glyphs are drawn: interrupt the decoration line to let the shape of ...
- [text-decoration-skip - CSS: Cascading Style Sheets \| MDN](https://mdn2.netlify.app/en-us/docs/web/css/text-decoration-skip) *(mdn2.netlify.app)*
  > This only has an effect on decorations imposed by an ancestor; a decorating box never draws over its own box decoration. &lt;strong&gt;none \| \[ objects \|\| \[ spaces \| \[ leading-spaces \|\| trailing-spaces \] \] \|\| edges \|\| box-decoration \]&lt;/strong&gt; ... Want to ...
- [How to Implement Text Decoration Using CSS \| Edureka](https://www.edureka.co/blog/text-decoration-using-css) *(edureka.co · 2019-08-22T12:20:32)*
  > It simply specifies how overline and underline are drawn when they pass over ascenders and descenders. ... spaces: &lt;strong&gt;decoration line skips spaces, word-separator characters, and any spaces set with letter-spacing or word-spaces&lt;/strong&gt;.
- [CSS text-decoration-skip](https://www.quackit.com/css/css3/properties/css_text-decoration-skip.cfm) *(quackit.com)*
  > Skip all spacing, i.e. &lt;strong&gt;all characters with the Unicode White\_Space property and all word separator characters, plus any adjacent letter-spacing or word-spacing&lt;/strong&gt;. ... Skip over where glyphs are drawn: interrupt the decoration line to l...
- [text-decoration-skip · WebPlatform Docs](https://webplatform.github.io/docs/css/properties/text-decoration-skip) *(webplatform.github.io)*
  > text-decoration-skip: none · text-decoration-skip: object · text-decoration-skip: spaces · none · &lt;strong&gt;Will not skip anything; the text decoration will be drawn for all text content&lt;/strong&gt; · object · Will skip the element (including it’s margin)...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\`text-decoration-skip-spaces\` · Issue #4344 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4344) *(github.com · 2026-09-11T11:12:12)* *(Cites: `https://chromestatus.com/feature/4832783806627840`)*
  > \`text-decoration-skip-spaces\` · Issue #4344 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to...
- [\[css-text-decor-4\] text-decoration-skip-spaces · Issue #1446 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1446) *(github.com · 2026-08-21T09:30:51)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > \[css-text-decor-4\] text-decoration-skip-spaces · Issue #1446 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or w...

## 📚 Platform Documentation & Specifications

- [\[css-text-decor-4\] text-decoration-skip-spaces · Issue #713 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/713) *(github.com)*
- [w3.org](https://www.w3.org/TR/css-text-decor-4) *(w3.org)*
- [\[css-text-decor\] selective toggling in the text-decoration-skip property. · Issue #843 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/843) *(github.com)*
- [\[css-text-decor-4\] Variants of text-decoration-skip-spaces:end behavior, and initial value · Issue #4653 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4653) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Text_decoration) *(developer.mozilla.org)*
- [\`text-decoration-skip-spaces\` · Issue #4344 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4344) *(github.com)*
- [\[css-text-decor-4\] text-decoration-skip-spaces · Issue #1446 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1446) *(github.com)*
- [CSS4 text-decoration-skip-spaces · Issue #1164 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1164) *(github.com)*
- [text-decoration-skip - CSS: каскадные таблицы стилей \| MDN](https://developer.mozilla.org/ru/docs/Web/CSS/text-decoration-skip) *(developer.mozilla.org)*
- [\[css-text-decor\] text-decoration-skip: spaces should not skip Mongolian NNBSP · Issue #3393 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3393) *(github.com)*
- [\[css-text-decor-4\] Don't skip visible word-separators when skipping only leading/trailing spaces · Issue #5249 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/5249) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 59 result(s) found across 11 planned queries — **20 verified relevant**
  - `"chromestatus.com/feature/4832783806627840" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"drafts.csswg.org/css-text-decor-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSS4 text-decoration-skip-spaces" API` — *Core feature API query* (6 returned)
  - `"CSS4 text-decoration-skip-spaces" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"text-decoration-skip-spaces" OR "line-throughs" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS4 text-decoration-skip-spaces" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (4 returned)
  - `"CSS4 text-decoration-skip-spaces" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"text-decoration-skip-spaces" (guide OR tutorial OR example) CSS` — *Finds developer articles, blog tutorials, and styling guides demonstrating how to skip underlines over whitespace.* (8 returned)
  - `"text-decoration-skip-spaces" (none OR all OR start OR end) "text-decoration"` — *Searches for CSS syntax definitions, spec values, and code snippets demonstrating property usage.* (8 returned)
  - `"text-decoration-skip-spaces" (site:issues.chromium.org OR site:bugzilla.mozilla.org OR site:bugs.webkit.org OR "intent to")` — *Tracks browser vendor status, engine bug tickets, and intent-to-implement discussions across Chromium, Gecko, and WebKit.* (8 returned)
  - `"text-decoration-skip-spaces" (CSSWG OR "csswg-drafts" OR "text-decoration-skip") issue` — *Discovers standards group discussions, spec issues, and web typography community feedback on CSSWG repositories.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 5 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "text-decoration", shared with 3 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "text-decoration": Chrome 69.6% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4832783806627840)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4832783806627840)
- [Specification](https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40862777)
