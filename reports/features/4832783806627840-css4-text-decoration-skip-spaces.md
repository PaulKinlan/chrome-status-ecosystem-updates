# CSS4 text-decoration-skip-spaces

> **Report Week:** 2026-W37 | **Milestone:** Chrome 150 | **Category:** In developer trial (Behind a flag)

## Overview

The text-decoration-skip-spaces CSS property controls whether text decoration lines (underlines, overlines, line-throughs, etc.) skip over whitespace characters. This allows authors to prevent decorations from being drawn under spaces, which is often more visually appealing.

### Motivation

Currently there is no web standard way to control whether text decorations (underlines, overlines, line-throughs) appear over whitespace characters. Authors commonly want to suppress the underline under leading/trailing spaces in inline elements, but CSS provides no mechanism for this. The `text-decoration-skip-spaces` property fills this gap, allowing precise control over decoration rendering around whitespace. This is useful for navigation menus, links, and any text where the decoration should visually attach only to non-space characters.

## Ecosystem Status

- **Momentum:** Moderate (70 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The `text-decoration-skip-spaces` property from CSS Text Decoration Module Level 4 provides authors with standard control over whether decorations like underlines skip whitespace characters. Chromium is actively advancing implementation behind flags in developer trials, addressing long-standing styling edge cases around leading and trailing spaces in inline links and navigation elements. While engine consensus is generally aligned on the specification goals, formal cross-browser implementation across WebKit and Gecko remains unfinalized.

### Recommendations
- Actionable Advice: Treat `text-decoration-skip-spaces` strictly as a progressive visual enhancement and test implementations in Chromium developer builds. Avoid relying on it for layout-critical styling until cross-engine support expands beyond flag-gated trials.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Re: [blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17378.html) *(mail-archive.com)*
  > Thanks, Dan On Tuesday, August ... CSS property controls whether text decoration lines (underlines, overlines, line-throughs, etc.) <strong>skip over whitespace characters</strong>....
- [[blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17185.html) *(mail-archive.com)*
  > &gt; &gt; Thanks, &gt; Dan &gt; &gt; On Tuesday, ... CSS property controls whether text &gt;&gt; decoration lines (underlines, overlines, line-throughs, etc.) <strong>skip over &gt;&gt; whitespace characters</strong>....
- [[blink-dev] Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17140.html) *(mail-archive.com)*
  > Specification https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property Summary The text-decoration-skip-spaces CSS property controls whether text decoration lines (underlines, overlines, line-throughs, etc.) <strong>skip over w...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refre...

## 📚 Platform Documentation & Specifications

- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)*
- [[css-text-decor-4] Variants of text-decoration-skip-spaces:end behavior, and initial value · Issue #4653 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4653) *(github.com)*
- [[css-text-decor-4] Don't skip visible word-separators when skipping only leading/trailing spaces · Issue #5249 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/5249) *(github.com)*
- [[css-text-decor] selective toggling in the text-decoration-skip property. · Issue #843 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/843) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 27 result(s) found across 6 planned queries — **7 verified relevant**
  - `"chromestatus.com/feature/4832783806627840" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"drafts.csswg.org/css-text-decor-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"text-decoration-skip-spaces" (guide OR tutorial OR example OR "how to")` — *Finds developer guides, blog articles, and tutorials demonstrating how to use text-decoration-skip-spaces in CSS.* (8 returned)
  - `"text-decoration-skip-spaces" CSS (underline OR line-through OR whitespace)` — *Searches for practical CSS code snippets, syntax declarations, and practical styling examples for skipping spaces.* (1 returned)
  - `"text-decoration-skip-spaces" ("intent to" OR ChromeStatus OR WebKit OR Firefox OR "browser support")` — *Tracks browser engine implementation status, Intents to Prototype/Ship, and compatibility updates across major browsers.* (3 returned)
  - `"text-decoration-skip-spaces" (site:github.com/w3c/csswg-drafts OR site:bugs.chromium.org OR site:bugs.webkit.org)` — *Surfaces CSSWG standard discussions, feature specification debates, and engine bug tracker tickets.* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 3 result(s) found — **0 verified relevant**
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
