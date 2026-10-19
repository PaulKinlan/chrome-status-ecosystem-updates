# CSS4 text-decoration-skip-spaces

> **Report Week:** 2026-W43 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

The text-decoration-skip-spaces CSS property controls whether text decoration lines (underlines, overlines, line-throughs, etc.) skip over whitespace characters. This allows authors to prevent decorations from being drawn under spaces, which is often more visually appealing.

### Motivation

Currently there is no web standard way to control whether text decorations (underlines, overlines, line-throughs) appear over whitespace characters. Authors commonly want to suppress the underline under leading/trailing spaces in inline elements, but CSS provides no mechanism for this. The \`text-decoration-skip-spaces\` property fills this gap, allowing precise control over decoration rendering around whitespace. This is useful for navigation menus, links, and any text where the decoration should visually attach only to non-space characters.

## Ecosystem Status

- **Momentum:** Emerging (footprint 185 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The \`text-decoration-skip-spaces\` property from CSS Text Decoration Module Level 4 allows authors to control whether text decorations skip over whitespace characters. Chromium is leading implementation with a planned rollout in Chrome 155, offering web authors a long-sought standard for clean typographic underlines on inline elements. Cross-browser alignment is currently in progress as engine teams evaluate spec details regarding default values and edge-case whitespace handling.

### Recommendations
- Actionable Advice: Web development teams can begin adopting \`text-decoration-skip-spaces\` immediately as a progressive enhancement for cleaner typography in supporting browsers. Use feature queries via \`@supports\` or let non-supporting browsers fall back gracefully to default text decoration rendering without breaking layout semantics.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`text-decoration`](https://webstatus.dev/features/text-decoration), shared with 3 other ChromeStatus features*

- Share of tests passing in the web-features group `text-decoration` on [wpt.fyi](https://wpt.fyi/results?q=feature:text-decoration) (via webstatus.dev) — stable: Chrome 76% · Edge 76.6% · Firefox 84.2% · Safari 65.5%; experimental: Chrome 90.1% · Edge 90.1% · Firefox 84.2% · Safari 80.7%

## 📰 Ecosystem Blogs & Articles

- [github.io](https://web-platform-dx.github.io/web-features-explorer/features/text-decoration-skip-spaces) *(web-platform-dx.github.io)*
  > It controls whether text decoration lines—such as underlines, overlines, and line-throughs—are drawn across whitespace characters (like leading, trailing, or repeating spaces) Developers tracking the \*\*Web Features Explorer\*\* project note that its fo...
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
- [Re: \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17378.html) *(mail-archive.com)*
  > /No information provided/ \*Debuggability\* /No information provided/ \*Will this feature be supported on all six Blink platforms (Windows, Mac, Linux, ChromeOS, Android, and Android WebView)?\* Yes \*Is this feature fully tested by web-platform-tests &lt...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[css-text-decor-4\] text-decoration-skip-spaces · Issue #1446 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1446) *(github.com · 2026-08-21T09:30:51)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > \[css-text-decor-4\] text-decoration-skip-spaces · Issue #1446 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or w...
- [\[css-text-decor-4\] text-decoration-skip-spaces · Issue #713 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/713) *(github.com · 2026-08-21T10:28:22)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > \[css-text-decor-4\] text-decoration-skip-spaces · Issue #713 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or win...

## 📚 Platform Documentation & Specifications

- [w3.org](https://www.w3.org/TR/css-text-decor-4) *(w3.org)*
- [\`text-decoration-skip-spaces\` · Issue #4344 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4344) *(github.com)*
- [\[css-text-decor-4\] text-decoration-skip-spaces · Issue #1446 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1446) *(github.com)*
- [\[css-text-decor-4\] text-decoration-skip-spaces · Issue #713 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/713) *(github.com)*
- [CSS4 text-decoration-skip-spaces · Issue #1164 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1164) *(github.com)*
- [text-decoration-skip-spaces · Issue #956 · web-platform-dx/developer-signals](https://github.com/web-platform-dx/developer-signals/issues/956) *(github.com)*
- [\[css-text-decor\] text-decoration-skip: spaces should not skip Mongolian NNBSP · Issue #3393 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3393) *(github.com)*
- [\[css-text-decor-4\] Variants of text-decoration-skip-spaces:end behavior, and initial value · Issue #4653 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4653) *(github.com)*
- [\[css-text-decor\] Add auto value for text-decoration-skip: · Issue #727 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/727) *(github.com)*
- [CSS text decoration - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Text_decoration) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 53 result(s) found across 12 planned queries — **15 verified relevant**
  - `"chromestatus.com/feature/4832783806627840" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"drafts.csswg.org/css-text-decor-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSS4 text-decoration-skip-spaces" API` — *Core feature API query* (6 returned)
  - `"CSS4 text-decoration-skip-spaces" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"text-decoration-skip-spaces" OR "line-throughs" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS4 text-decoration-skip-spaces" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (4 returned)
  - `"CSS4 text-decoration-skip-spaces" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"text-decoration-skip-spaces" css tutorial OR guide` — *Finds practical developer guides, blog posts, and tutorials demonstrating how to use text-decoration-skip-spaces.* (2 returned)
  - `css text-decoration-skip-spaces example code OR snippet` — *Searches for real-world CSS code examples and property usage for text-decoration-skip-spaces.* (8 returned)
  - `"text-decoration-skip-spaces" site:github.com OR site:codepen.io` — *Locates live code snippets, test cases, and repository implementations involving text-decoration-skip-spaces.* (8 returned)
  - `csswg draft "text-decoration-skip-spaces" status OR support OR release` — *Discovers standards discussion, specification updates, browser support status, and ecosystem adoption sentiment.* (8 returned)
  - `"text-decoration-skip-spaces" browser support OR chromium bug OR firefox` — *Finds community discussions, tracker tickets, and developer sentiment regarding browser implementation.* (6 returned)
- **Google Search Grounding (gemini-3.8-flash):** 6 result(s) found — **3 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 5 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
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
