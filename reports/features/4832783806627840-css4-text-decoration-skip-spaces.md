# CSS4 text-decoration-skip-spaces

> **Report Week:** 2026-W39 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

The text-decoration-skip-spaces CSS property controls whether text decoration lines (underlines, overlines, line-throughs, etc.) skip over whitespace characters. This allows authors to prevent decorations from being drawn under spaces, which is often more visually appealing.

### Motivation

Currently there is no web standard way to control whether text decorations (underlines, overlines, line-throughs) appear over whitespace characters. Authors commonly want to suppress the underline under leading/trailing spaces in inline elements, but CSS provides no mechanism for this. The `text-decoration-skip-spaces` property fills this gap, allowing precise control over decoration rendering around whitespace. This is useful for navigation menus, links, and any text where the decoration should visually attach only to non-space characters.

## Ecosystem Status

- **Momentum:** High (315 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The \`text-decoration-skip-spaces\` property from CSS Text Decoration Module Level 4 introduces fine-grained author control over whether text decorations like underlines skip whitespace characters, shipping enabled by default in Chrome 155. It directly solves a persistent typographic frustration where template-generated or intentional leading, trailing, and inter-word whitespace causes visual artifacts under links and decorated inline text. While standardized in the CSSWG, cross-browser availability is currently asymmetric as Chromium leads deployment while other engines evaluate formal longhand support.

### Recommendations
- Actionable Advice: Treat \`text-decoration-skip-spaces\` strictly as a progressive visual enhancement today, allowing non-supporting browsers to fall back safely to standard decoration rendering. Teams should continue practicing clean markup formatting without stray whitespace around inline links to maintain uniform aesthetics across Safari and Firefox.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "What kind of witchcraft is CSS nowadays? text-decoration ..." (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [What kind of witchcraft is CSS nowadays? text-decoration ...](https://twitter.com/javve/status/1772732077441417412) — *by @javve, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Andy Clarke on Twitter: "text-decoration : underline; text-decoration-style : wavy; text-decoration-color : #ccc;"](https://twitter.com/malarkey/status/604667444209328128) — *by @malarkey, 0 likes/RTs, 0 replies*

## Packages & Polyfills

- [@csstools/postcss-text-decoration-shorthand](https://www.npmjs.com/package/@csstools/postcss-text-decoration-shorthand) `v5.0.5` — Use text-decoration in it's shorthand form in CSS

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17159.html) *(mail-archive.com)*
  > Thanks, Dan On Tuesday, August ...aces-property &gt; &gt; &gt; *Summary* &gt; The text-decoration-skip-spaces CSS property <strong>controls whether text &gt; decoration lines (underlines, overlines, line-throughs, etc.)</strong> skip over &gt; whites...
- [CSS4 text-decoration-skip-spaces](https://chromestatus.com/feature/4832783806627840) *(chromestatus.com · 2026-04-10T00:00:00)*
  > We cannot provide a description for this page right now
- [\[blink-dev\] Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17140.html) *(mail-archive.com)*
  > Authors commonly want to suppress the underline under leading/trailing spaces in inline elements, but CSS provides no mechanism for this. The `text-decoration-skip-spaces` property fills this gap, <strong>allowing precise control over decoration rend...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17373.html) *(mail-archive.com)*
  > I also think this situation is ... (Also note: the default does *not* &gt;&gt;&gt; skip spaces in the middle of text.) &gt;&gt;&gt; &gt;&gt;&gt; I did notice that there don&#x27;t seem to be any tests for the default (i.e. &gt;&gt;&gt; a test that do...
- [text-decoration-skip \| CSS-Tricks](https://css-tricks.com/almanac/properties/t/text-decoration-skip) *(css-tricks.com · 2021-08-02T17:00:34)*
  > The text-decoration-skip property <strong>specifies where a text underline, overline, or strike-through should break</strong>. This improves legibility of decorated text and corrects punctuation grammar for some languages.
- [css - Can i exclude spaces from text decoration? - Stack Overflow](https://stackoverflow.com/questions/72692992/can-i-exclude-spaces-from-text-decoration) *(stackoverflow.com)*
  > I suggest doing this with JavaScript, by <strong>splitting the text you are interested in at the space character into separate span elements</strong>. You can then apply your line-through decoration to the span elements, which will not include the sp...
- [CSS text-decoration-skip](https://www.quackit.com/css/css3/properties/css_text-decoration-skip.cfm) *(quackit.com)*
  > <strong>Skip all spacing, i.e. all characters with the Unicode White_Space property and all word separator characters, plus any adjacent letter-spacing or word-spacing</strong>. ... Skip over where glyphs are drawn: interrupt the decoration line to l...
- [CSS text-decoration-skip Property \| W3Docs](https://www.w3docs.com/learn-css/text-decoration-skip.html) *(w3docs.com)*
  > <strong>It specifies whether to interrupt the decoration lines above or below the text</strong>.It specifies whether and how a text-decoration line is drawn through the text itself.It specifies what parts of the content-box of an element the decorati...
- [\[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17185.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · [blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces · Perry Mon, 17 Aug 2026 08:45:32 -0700 · Thanks Dan. My plan is to ship with &#x27;none&#x27; as the default, because I think such compatibility...
- [CSS new property field-sizing: content;](https://dev.to/web_dev-usman/css-new-property-field-sizing-content-3ekc) *(dev.to · Muhammad Usman · Sep 20)*
  > The New CSS Property I Wish Existed Years Ago                                                  ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refre...
- [\[css-text-decor-4\] text-decoration-skip-spaces · Issue #713 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/713) *(github.com · 2026-08-21T10:28:22)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > [css-text-decor-4] text-decoration-skip-spaces · Issue #713 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or win...

## 📚 Platform Documentation & Specifications

- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)*
- [\[css-text-decor-4\] text-decoration-skip-spaces · Issue #713 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/713) *(github.com)*
- [text-decoration-skip CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-skip) *(developer.mozilla.org)*
- [text-decoration-skip CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-skip) *(developer.mozilla.org)*
- [text-decoration CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) *(developer.mozilla.org)*
- [CSS Text Decoration Module Level 4](https://www.w3.org/TR/css-text-decor-4) *(w3.org)*
- [\[css-text-decor-4\] Variants of text-decoration-skip-spaces:end behavior, and initial value · Issue #4653 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4653) *(github.com)*
- [CSS text decoration - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Text_decoration) *(developer.mozilla.org)*
- [text-decoration CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration) *(developer.mozilla.org)*
- [text-decoration CSS property - CSS \| MDN](https://developer.mozilla.org/en/docs/Web/CSS/text-decoration) *(developer.mozilla.org)*
- [text-decoration-skip-ink CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-skip-ink) *(developer.mozilla.org)*
- [CSS text decoration - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_text_decoration) *(developer.mozilla.org)*
- [\[css-text-decor\] text-decoration-skip: spaces should not skip Mongolian NNBSP · Issue #3393 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3393) *(github.com)*
- [\[css-text-decor\] selective toggling in the text-decoration-skip property. · Issue #843 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/843) *(github.com)*
- [\[css-text-decor\] Add auto value for text-decoration-skip: · Issue #727 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/727) *(github.com)*
- [\[css-text-decor\] skip space and Ethiopic word space. · Issue #1146 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/1146) *(github.com)*
- [\[css-text-decor\] How to use decoration skipping to turn off underlines? · Issue #2885 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/2885) *(github.com)*
- [\[css-text-decor\] Should text-decoration-skip-ink skip parts within in glyphs? · Issue #4504 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4504) *(github.com)*
- [\[css-text-decor\] Should text-decoration-skip apply to overline and line-through? · Issue #711 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/711) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 54 result(s) found across 11 planned queries — **28 verified relevant**
  - `"chromestatus.com/feature/4832783806627840" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"drafts.csswg.org/css-text-decor-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"CSS4 text-decoration-skip-spaces" API` — *Core feature API query* (4 returned)
  - `"CSS4 text-decoration-skip-spaces" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"text-decoration-skip-spaces" OR "line-throughs" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS4 text-decoration-skip-spaces" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (6 returned)
  - `"CSS4 text-decoration-skip-spaces" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"text-decoration-skip-spaces" css (guide OR tutorial OR example) underline` — *Finds technical blog posts, guides, and practical examples illustrating how to control underline rendering across whitespace using the text-decoration-skip-spaces property.* (0 returned)
  - `"text-decoration-skip-spaces" css values syntax (all | none | start | end)` — *Finds developer references and code snippets detailing the specific syntax, property values, and cascade behavior of text-decoration-skip-spaces.* (4 returned)
  - `"text-decoration-skip-spaces" (site:caniuse.com OR site:chromestatus.com OR site:webkit.org OR site:developer.mozilla.org)` — *Identifies official browser engine status trackers, platform support tables, and implementation milestones across WebKit, Blink, and Gecko.* (8 returned)
  - `"text-decoration-skip-spaces" (site:github.com/w3c/csswg-drafts OR "Intent to" OR issue OR spec)` — *Surfaces CSSWG specification discussions, engine bug tracker debates, and intent-to-implement threads regarding whitespace skipping behavior for decorations.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 3 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **1 verified relevant**
- **Web Platform Tests (wpt.fyi):** 365 item(s) inspected

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
