# CSS4 text-decoration-skip-spaces

> **Report Week:** 2026-W36 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

The text-decoration-skip-spaces CSS property controls whether text decoration lines (underlines, overlines, line-throughs, etc.) skip over whitespace characters. This allows authors to prevent decorations from being drawn under spaces, which is often more visually appealing.

### Motivation

Currently there is no web standard way to control whether text decorations (underlines, overlines, line-throughs) appear over whitespace characters. Authors commonly want to suppress the underline under leading/trailing spaces in inline elements, but CSS provides no mechanism for this. The `text-decoration-skip-spaces` property fills this gap, allowing precise control over decoration rendering around whitespace. This is useful for navigation menus, links, and any text where the decoration should visually attach only to non-space characters.

## Ecosystem Status

- **Momentum:** High (80 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** CSS4 text-decoration-skip-spaces provides granular control over whether text decorations (like underlines and line-throughs) skip over whitespace characters. Shipping enabled by default in Chrome 154, it addresses a long-standing typographic request to avoid unwanted decoration artifacts on leading, trailing, or inter-word spaces. While specified in CSS Text Decoration Module Level 4, it currently lacks full cross-browser interoperability as other major engines have not yet shipped the dedicated longhand.

### Recommendations
- Actionable Advice: Adopt this property immediately as a purely visual progressive enhancement, as unsupported browsers simply fall back to default continuous text decoration without breaking layouts. You can optionally guard custom design rules using @supports (text-decoration-skip-spaces: none).
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Packages & Polyfills

- [@csstools/postcss-text-decoration-shorthand](https://www.npmjs.com/package/@csstools/postcss-text-decoration-shorthand) `v5.0.5` — Use text-decoration in it's shorthand form in CSS

## 📰 Ecosystem Blogs & Articles

- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFy_ErbrYPApJ_ia2Sc3psTe-iI6thRczVZtbfPRNk2YtrVEKBV2T8rHW0yFBoIVJGgTtqY7x7JvFDbnJuhoq9-u6IOLGa-2sqx3JFTH5Jxm52I9AIxW-FaHV4-ChE=) *(vertexaisearch.cloud.google.com)*
  > ### Summary & Background  In the **CSS Text Decoration Module Level 4** specification, the W3C decoupled the original, broad `text-decoration-skip` shorthand into distinct, granular properties (such as `text-decoration-skip-ink`, `text-decoration-ski
- [stackoverflow.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGooomH6yX1YXomclprrdzJY3Xi_4Y5ad1UT7ATo9wNsfIV7rURDyLm643TrW7S8-6EFsVYiGwywH9LV84fskDGml4FLLu-Fa3F3NTQlXL4uzGVoROfIiiJ1R1jZnOACMqtbQINzA47WP4XROO7XkojnVTbcV8fwzHrQ2mwWfE1mkXEYeO9P1xd0VrpHg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary & Background  In the **CSS Text Decoration Module Level 4** specification, the W3C decoupled the original, broad `text-decoration-skip` shorthand into distinct, granular properties (such as `text-decoration-skip-ink`, `text-decoration-ski
- [letorey.co.uk](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFfWJue1oFFOj1M2iD_XceQGbVsmROl7-OAD0hdrLbuD8-UmzQEpAs_gapmZZsvNzaU56SRR42uY1N2BaJbs7bIw5EGpdPnE3vsdF2LTMmI3PrWC-hZmsW1NxD0zFH9oIB2Tcf9bGElDd4=) *(vertexaisearch.cloud.google.com)*
  > ### Summary & Background  In the **CSS Text Decoration Module Level 4** specification, the W3C decoupled the original, broad `text-decoration-skip` shorthand into distinct, granular properties (such as `text-decoration-skip-ink`, `text-decoration-ski
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFG9-Z0_Izi9DiMIzPuLLuBnPLZaXWvovAfGSI9GfBrLbJRolxLO2_rtgxOyqcutqtwgFFIxJbf05M4Mvc0p2Hp8LJH7pI2sfpMcVgHHateGy18Vv-McmJCAdfTw6MPbYxUkryVg_7QIER2aT014oSBF_rjEftKEVx1) *(vertexaisearch.cloud.google.com)*
  > ### Summary & Background  In the **CSS Text Decoration Module Level 4** specification, the W3C decoupled the original, broad `text-decoration-skip` shorthand into distinct, granular properties (such as `text-decoration-skip-ink`, `text-decoration-ski
- [[blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17159.html) *(mail-archive.com)*
  > Thanks, Dan On Tuesday, August ... CSS property controls whether text &gt; decoration lines (underlines, overlines, line-throughs, etc.) <strong>skip over &gt; whitespace characters</strong>....
- [[blink-dev] Ready for Developer Testing: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg16534.html) *(mail-archive.com)*
  > False Tracking bug https://iss...a/chromium.org/d/msgid/blink-dev/69d8f543.050a0220.1c79a0.1352.GAE@google.com This intent message was <strong>generated by Chrome Platform Status</strong>....
- [Re: [blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17311.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; Thanks, &gt;&gt;&gt; Dan &gt;&gt;&gt; &gt;&gt;&gt; ... CSS property controls whether text &gt;&gt;&gt; decoration lines (underlines, overlines, line-throughs, etc.) <strong>skip over &gt;&gt;&gt; whitespace characters</stron...
- [[blink-dev] Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17140.html) *(mail-archive.com)*
  > Specification https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property Summary The text-decoration-skip-spaces CSS property controls whether text decoration lines (underlines, overlines, line-throughs, etc.) <strong>skip over w...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 27 result(s) found across 6 planned queries — **4 verified relevant**
  - `"chromestatus.com/feature/4832783806627840" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"drafts.csswg.org/css-text-decor-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (6 returned)
  - `"text-decoration-skip-spaces" OR "text-decoration-skip: spaces" css (tutorial OR guide OR "how to")` — *Finds practical CSS guides and developer tutorials explaining how to control underline rendering across whitespace.* (2 returned)
  - `"text-decoration-skip-spaces" ("none" OR "all" OR "start" OR "end") css example` — *Locates concrete CSS code snippets and reference documentation demonstrating value syntax.* (8 returned)
  - `"text-decoration-skip-spaces" (chromestatus OR webkit OR bugzilla OR "intent to")` — *Discovers browser vendor implementation tickets, intent-to-ship/prototype notices, and engine compatibility updates.* (8 returned)
  - `css underline ("skip spaces" OR "skip whitespace") (site:stackoverflow.com OR site:github.com/w3c/csswg-drafts)` — *Finds developer discussions, workarounds for whitespace underlines, and CSSWG standards deliberations.* (3 returned)
- **Google Search Grounding (gemini-3.7-flash):** 9 result(s) found — **4 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 8 result(s) found — **8 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **1 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 5 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4832783806627840)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4832783806627840)
- [Specification](https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40862777)
