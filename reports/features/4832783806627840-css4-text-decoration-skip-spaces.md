# CSS4 text-decoration-skip-spaces

> **Report Week:** 2026-W46 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

The text-decoration-skip-spaces CSS property controls whether text decoration lines (underlines, overlines, line-throughs, etc.) skip over whitespace characters. This allows authors to prevent decorations from being drawn under spaces, which is often more visually appealing.

### Motivation

Currently there is no web standard way to control whether text decorations (underlines, overlines, line-throughs) appear over whitespace characters. Authors commonly want to suppress the underline under leading/trailing spaces in inline elements, but CSS provides no mechanism for this. The \`text-decoration-skip-spaces\` property fills this gap, allowing precise control over decoration rendering around whitespace. This is useful for navigation menus, links, and any text where the decoration should visually attach only to non-space characters.

## Ecosystem Status

- **Momentum:** Moderate (+170 points since 2026-10-12; footprint 385 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Defined in CSS Text Decoration Module Level 4, \`text-decoration-skip-spaces\` provides granular author control over whether text decorations span whitespace characters, replacing brittle border hacks and pseudo-elements. Chromium led implementation with an enabled-by-default rollout in Chrome 155, but real-world web compatibility regressions regarding preserved single-space underlines prompted fresh CSS Working Group scrutiny. Consequently, cross-engine consensus on default values remains in flux, leaving broad multi-engine baseline support pending.

### Recommendations
- Actionable Advice: Teams should treat explicit property values like \`text-decoration-skip-spaces: all\` or \`none\` strictly as progressive enhancements guarded by \`@supports\` rules. Authors should avoid relying on UA default space-skipping behaviors for critical UI elements, particularly fill-in blanks or whitespace-based layout affordances, until cross-browser behavior stabilizes.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`text-decoration`](https://webstatus.dev/features/text-decoration), shared with 3 other ChromeStatus features*

- Share of tests passing in the web-features group `text-decoration` on [wpt.fyi](https://wpt.fyi/results?q=feature:text-decoration) (via webstatus.dev) — stable: Chrome 89.4% · Edge 89.9% · Firefox 81.4% · Safari 66.8%; experimental: Chrome 95% · Edge 95.5% · Firefox 81.4% · Safari 84.4%

## 📰 Ecosystem Blogs & Articles

- [Custom text decorations  \|  Modern Web Guidance  \|  Chrome for Developers](https://developer.chrome.com/docs/modern-web-guidance/guides/visual-design/custom-text-decorations) *(developer.chrome.com)*
  > Historically, authors struggled to suppress underlines under leading, trailing, or inter-word spaces without hacky pseudo-elements or background border tricks \`start \|\| end\`: Skips decorations on leading and/or trailing whitespace of the element box ...
- [css.properties](https://css.properties/text-decoration-skip-spaces) *(css.properties)*
  > \`start \|\| end\`: Skips decorations on leading and/or trailing whitespace of the element box (the initial/default behavior is \`start end\`) \`all\`: Skips all whitespace, including word spaces between words (creating visual breaks between words)
- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides/visual-design/custom-text-decorations?hl=es-419) *(developer.chrome.com)*
  > \`all\`: Skips all whitespace, including word spaces between words (creating visual breaks between words) \`none\`: Prevents skipping; the decoration line is drawn continuously across all whitespace characters
- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > \*\*Focus:\*\* Implementation and intent to ship in Chromium \*\*Details:\*\* Listed under Chrome Platform Status and recent beta releases, Chromium implemented \`text-decoration-skip-spaces\` to provide authors with fine-grained typographical control over lin...
- [github.io](https://web-platform-dx.github.io/web-features-explorer/features/text-decoration-skip-spaces) *(web-platform-dx.github.io)*
  > \*\*Focus:\*\* Interoperability tracking and standard adoption
- [css - Can i exclude spaces from text decoration? - Stack Overflow](https://stackoverflow.com/questions/72692992/can-i-exclude-spaces-from-text-decoration) *(stackoverflow.com)*
  > Early developer feedback on GitHub and forums has welcomed this property for eliminating fragile workarounds (like wrapping each word in individual \`&lt;span&gt;\` tags or adjusting margins manually)
- [\[blink-dev\] Intent to Prototype: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg16310.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: CSS4 text-decoration-skip-spaces Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS4 text-decoration-skip-spaces Chromestatus Fri, 10 Apr 2026 06:04:22 -0700 Contact emails \[email&#160;protecte...
- [\[blink-dev\] Ready for Developer Testing: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg16534.html) *(mail-archive.com)*
  > \[blink-dev\] Ready for Developer Testing: CSS4 text-decoration-skip-spaces Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: CSS4 text-decoration-skip-spaces Chromestatus Fri, 15 May 2026 06:03:13 -0700 Contact emails \[ema...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17378.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces Mike Taylor Fri, 04 Sep 2026 13:13:20 -0700 LGTM3 On 9/4/26 2:48 p.m., Dan...
- [\[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17159.html) *(mail-archive.com)*
  > We talked about this during the API Owners call today and something that came up was this Issue 6 in the spec: https://drafts.csswg.org/css-text-decor-4/#issue-4229bfce Is your plan to ship with &#x27;none&#x27; as the default, or try &#x27;end&#x27;...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17377.html) *(mail-archive.com)*
  > I also think this situation is uncommon in existing sites; developers have to go out of their way to cause extra spaces to appear next to a run of text. (Also note: the default does \*not\* skip spaces in the middle of text.) I did notice that there do...
- [\[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17186.html) *(mail-archive.com)*
  > Authors commonly want to suppress the underline under leading/trailing spaces in inline elements, but CSS provides no mechanism for this. The \`text-decoration-skip-spaces\` property fills this gap, &lt;strong&gt;allowing precise control over decoration rend...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17370.html) *(mail-archive.com)*
  > I also think this situation is uncommon &gt;&gt; in existing sites; developers have to go out of their way to cause extra &gt;&gt; spaces to appear next to a run of text. (Also note: the default does \*not\* &gt;&gt; skip spaces in the middle of text.)...
- [\[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17227.html) *(mail-archive.com)*
  > &gt; Authors commonly want to suppress the underline under leading/trailing &gt; spaces in inline elements, but CSS provides no mechanism for this. &lt;strong&gt;The &gt; \`text-decoration-skip-spaces\` property fills this gap, allowing precise &gt; control ...
- [\[blink-dev\] Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17140.html) *(mail-archive.com)*
  > Specification https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property Summary The text-decoration-skip-spaces CSS property &lt;strong&gt;controls whether text decoration lines (underlines, overlines, line-throughs, etc.) skip over w...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17373.html) *(mail-archive.com)*
  > Current tests are here &gt;&gt;&gt; &lt;https://wpt.fyi/results/css/css-text-decor?label=master&amp;label=experimental&amp;aligned&amp;q=text-decoration-skip-spaces-001.html or text-decoration-skip-spaces-002.html or text-decoration-skip-spaces-003.h...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17311.html) *(mail-archive.com)*
  > Current tests are here &gt; &lt;https://wpt.fyi/results/css/css-text-decor?label=master&amp;label=experimental&amp;aligned&amp;q=text-decoration-skip-spaces-001.html or text-decoration-skip-spaces-002.html or text-decoration-skip-spaces-003.html or t...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17331.html) *(mail-archive.com)*
  > Current tests are here &gt;&gt; &lt;https://wpt.fyi/results/css/css-text-decor?label=master&amp;label=experimental&amp;aligned&amp;q=text-decoration-skip-spaces-001.html or text-decoration-skip-spaces-002.html or text-decoration-skip-spaces-003.html ...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17232.html) *(mail-archive.com)*
  > Current tests are here &lt;https://wpt.fyi/results/css/css-text-decor?label=master&amp;label=experimental&amp;aligned&amp;q=text-decoration-skip-spaces-001.html or text-decoration-skip-spaces-002.html or text-decoration-skip-spaces-003.html or text-d...
- [\[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17185.html) *(mail-archive.com)*
  > &gt;&gt; \*No information provided\* &gt;&gt; &gt;&gt; \*Link to entry on the Chrome Platform Status\* &gt;&gt; https://chromestatus.com/feature/4832783806627840?gate=6279878547734528 &gt;&gt; &gt;&gt; \*Links to previous Intent discussions\* &gt;&gt; Inte...
- [\[blink-dev\] RE: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17178.html) *(mail-archive.com)*
  > No information provided Link to entry on the Chrome Platform Status https://chromestatus.com/feature/4832783806627840?gate=6279878547734528 Links to previous Intent discussions Intent to Prototype: https://groups.google.com/a/chromium.org/d/msgid/bli...
- [Byte #192 \| CSS-Tricks](https://css-tricks.com/byte-192) *(css-tricks.com)*
  > Byte #192 \| CSS-Tricks Ad WordPress sites from those who know WordPress best. --&gt; Skip to main content CSS-Tricks Since 2007 chrome text-decoration-skip-spaces Byte #192 By Daniel Schwarz on Oct 27, 2026 NVIDIA L4 GPUs. 5-second cold starts. Scale to...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg16310.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4832783806627840`)*
  > \[blink-dev\] Intent to Prototype: CSS4 text-decoration-skip-spaces Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS4 text-decoration-skip-spaces Chromestatus Fri, 10 Apr 2026 06:04:22 -0700 Contact emails \[email&#16...
- [\[blink-dev\] Ready for Developer Testing: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg16534.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4832783806627840`)*
  > \[blink-dev\] Ready for Developer Testing: CSS4 text-decoration-skip-spaces Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: CSS4 text-decoration-skip-spaces Chromestatus Fri, 15 May 2026 06:03:13 -0700 Contact e...
- [\`text-decoration-skip-spaces\` · Issue #4344 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4344) *(github.com · 2026-09-11T11:12:12)* *(Cites: `https://chromestatus.com/feature/4832783806627840`)*
  > \`text-decoration-skip-spaces\` · Issue #4344 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your sessio...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17378.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4832783806627840`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces Mike Taylor Fri, 04 Sep 2026 13:13:20 -0700 LGTM3 On 9/4/26 2:48...
- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > Shortname: css-text-decor · Level: 4 · Status: ED · Work Status: Exploring · Group: csswg · ED: https://&lt;strong&gt;drafts.csswg.org/css-text-decor-4&lt;/strong&gt;/ TR: https://www.w3.org/TR/css-text-decor-4/ Previous Version: https://www.w3.org/TR/...
- [\[css-text-decor-4\] Should text-decoration-skip-spaces skip lines containing only preserved spaces? · Issue #14683 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/14683) *(github.com · 2026-10-27T14:18:01)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > \[css-text-decor-4\] Should text-decoration-skip-spaces skip lines containing only preserved spaces? · Issue #14683 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in...

## 📚 Platform Documentation & Specifications

- [w3.org](https://lists.w3.org/Archives/Public/www-style/2017Feb/0049.html) *(lists.w3.org)*
- [CSS Text Decoration Module Level 4](https://www.w3.org/TR/css-text-decor-4) *(w3.org)*
- [CSS4 text-decoration-skip-spaces · Issue #1164 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1164) *(github.com)*
- [text-decoration-skip CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-skip) *(developer.mozilla.org)*
- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/css/reference/properties/text-decoration-skip/index.md?plain=1) *(github.com)*
- [github.com](https://github.com/web-platform-dx/developer-signals/issues/956) *(github.com)*
- [\`text-decoration-skip-spaces\` · Issue #4344 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4344) *(github.com)*
- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)*
- [\[css-text-decor-4\] Should text-decoration-skip-spaces skip lines containing only preserved spaces? · Issue #14683 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/14683) *(github.com)*
- [\[css-text-decor\] Add auto value for text-decoration-skip: · Issue #727 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/727) *(github.com)*
- [\[css-text-decor-4\] Variants of text-decoration-skip-spaces:end behavior, and initial value · Issue #4653 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/4653) *(github.com)*
- [\[css-text-decor\] selective toggling in the text-decoration-skip property. · Issue #843 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/843) *(github.com)*
- [text-decoration-skip-spaces: default to start end by chromium-wpt-export-bot · Pull Request #62451 · web-platform-tests/wpt · GitHub](https://github.com/web-platform-tests/wpt/pull/62451) *(github.com)*
- [\[css-text-decor-4\] Don't skip visible word-separators when skipping only leading/trailing spaces · Issue #5249 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/5249) *(github.com)*
- [\[css-text-decor-4\] text-decoration-skip-spaces · Issue #713 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/713) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 57 result(s) found across 11 planned queries — **28 verified relevant**
  - `"chromestatus.com/feature/4832783806627840" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (6 returned)
  - `"drafts.csswg.org/css-text-decor-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSS4 text-decoration-skip-spaces" API` — *Core feature API query* (8 returned)
  - `"CSS4 text-decoration-skip-spaces" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"text-decoration-skip-spaces" OR "line-throughs" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS4 text-decoration-skip-spaces" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS4 text-decoration-skip-spaces" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"text-decoration-skip-spaces" OR "text-decoration-skip: spaces" (guide OR tutorial OR "how to")` — *Searches for developer guides, tutorials, and practical articles on styling underlines without decorating whitespace.* (8 returned)
  - `"text-decoration-skip-spaces" ("none" OR "all" OR "start" OR "end") CSS example` — *Discovers real-world CSS code examples and usage patterns illustrating property values.* (8 returned)
  - `"text-decoration-skip-spaces" ("intent to prototype" OR "intent to ship" OR "bugzilla" OR "chromestatus")` — *Tracks browser vendor interest, implementation tracking bugs, and adoption status across browser engines.* (8 returned)
  - `"text-decoration-skip-spaces" site:github.com/w3c/csswg-drafts OR site:github.com/web-platform-tests/wpt` — *Finds standards discussions, design rationale, and test suites in CSSWG and Web Platform Tests.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 15 result(s) found — **12 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "text-decoration", shared with 3 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "text-decoration": Chrome 89.4% passing (stable)*
- **Sources cited by the AI synthesis:** 6 result(s) found — **5 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 10 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4832783806627840)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4832783806627840)
- [Specification](https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40862777)
