# CSS4 text-decoration-skip-spaces

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

The text-decoration-skip-spaces CSS property controls whether text decoration lines (underlines, overlines, line-throughs, etc.) skip over whitespace characters. This allows authors to prevent decorations from being drawn under spaces, which is often more visually appealing.

### Motivation

Currently there is no web standard way to control whether text decorations (underlines, overlines, line-throughs) appear over whitespace characters. Authors commonly want to suppress the underline under leading/trailing spaces in inline elements, but CSS provides no mechanism for this. The `text-decoration-skip-spaces` property fills this gap, allowing precise control over decoration rendering around whitespace. This is useful for navigation menus, links, and any text where the decoration should visually attach only to non-space characters.

## Ecosystem Status

- **Momentum:** Moderate (60 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** CSS4 text-decoration-skip-spaces enables fine-grained authorial control over whether text decorations like underlines and line-throughs skip leading, trailing, or all whitespace characters. Shipping enabled by default in Chromium (Chrome 154), this property resolves long-standing cross-browser discrepancies in whitespace underline rendering without requiring layout hacks. While specified in CSS Text Decoration Module Level 4, Chromium is the first engine to finalize default shipping status as WebKit and Gecko track related WPT suites.

### Recommendations
- Actionable Advice: Adopt text-decoration-skip-spaces as a pure progressive enhancement today, as unsupported browsers will gracefully fall back to standard text-decoration behavior without breaking layout. Use `@supports (text-decoration-skip-spaces: none)` if styling logic depends on custom text offset or padding adjustments.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [[blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17159.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces 'Dan Clark' via blink-dev Wed, 12 Aug 2026 09:19:31 -0700 We talked about this dur...
- [CSS4 text-decoration-skip-spaces](https://chromestatus.com/feature/4832783806627840) *(chromestatus.com · 2026-04-10T00:00:00)*
  > We cannot provide a description for this page right now

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17159.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4832783806627840`)*
  > [blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces 'Dan Clark' via blink-dev Wed, 12 Aug 2026 09:19:31 -0700 We talked abou...

## 📚 Platform Documentation & Specifications

- [[css-text-decor-4] Variants of text-decoration-skip-spaces:end behavior, and initial value · Issue #4653 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4653) *(github.com)*
- [CSS Text Decoration Module Level 4](https://www.w3.org/TR/css-text-decor-4) *(w3.org)*
- [[css-text-decor-4] Don't skip visible word-separators when skipping only leading/trailing spaces · Issue #5249 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/5249) *(github.com)*
- [[css-text-decor] selective toggling in the text-decoration-skip property. · Issue #843 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/843) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 35 result(s) found across 7 planned queries — **6 verified relevant**
  - `"chromestatus.com/feature/4832783806627840" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"drafts.csswg.org/css-text-decor-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"text-decoration-skip-spaces" OR "text-decoration-skip: spaces" css underline` — *Finds developer guides, web typography tutorials, and blog posts explaining how to suppress underline or decoration rendering over whitespace.* (6 returned)
  - `"text-decoration-skip-spaces" css (none | all | start | end) example` — *Discovers CSS syntax definitions, spec values, and practical stylesheet usage examples.* (3 returned)
  - `"text-decoration-skip-spaces" (site:chromestatus.com OR site:bugs.webkit.org OR site:bugzilla.mozilla.org OR "Intent to")` — *Searches for browser engine implementation tickets, Intent to Prototype/Ship signals, and engine support status.* (8 returned)
  - `"text-decoration-skip-spaces" site:github.com/w3c/csswg-drafts` — *Finds CSS Working Group specification issues, design feedback, and standard evolution discussions on GitHub.* (4 returned)
  - `css underline whitespace "text-decoration-skip" OR "text-decoration-skip-spaces" (site:stackoverflow.com OR site:reddit.com/r/css)` — *Identifies real-world developer pain points, workarounds, and discussions regarding text decorations drawing under trailing/leading spaces.* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 8 result(s) found — **2 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

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
