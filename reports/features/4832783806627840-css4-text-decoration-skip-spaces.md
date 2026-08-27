# CSS4 text-decoration-skip-spaces

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

The text-decoration-skip-spaces CSS property controls whether text decoration lines (underlines, overlines, line-throughs, etc.) skip over whitespace characters. This allows authors to prevent decorations from being drawn under spaces, which is often more visually appealing.

### Motivation

Currently there is no web standard way to control whether text decorations (underlines, overlines, line-throughs) appear over whitespace characters. Authors commonly want to suppress the underline under leading/trailing spaces in inline elements, but CSS provides no mechanism for this. The `text-decoration-skip-spaces` property fills this gap, allowing precise control over decoration rendering around whitespace. This is useful for navigation menus, links, and any text where the decoration should visually attach only to non-space characters.

## Ecosystem Status

- **Momentum:** Moderate (40 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** CSS4 text-decoration-skip-spaces is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [[blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17159.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces 'Dan Clark' via blink-dev Wed, 12 Aug 2026 09:19:31 -0700 We talked about this dur...
- [[blink-dev] Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17140.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: CSS4 text-decoration-skip-spaces Skip to site navigation (Press enter) [blink-dev] Intent to Ship: CSS4 text-decoration-skip-spaces Chromestatus Tue, 11 Aug 2026 06:02:57 -0700 Contact emails [email&#160;protected] Specifi...
- [CSS4 text-decoration-skip-spaces](https://chromestatus.com/feature/4832783806627840) *(chromestatus.com · 2026-04-10T00:00:00)*
  > Chrome Platform Status
- [Re: [blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17311.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces Chris Harrelson Wed, 26 Aug 2026 13:25:02 -0700 Hi, please let us (API own...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 4 result(s) found (query: `""CSS4 text-decoration-skip-spaces" API"`) — **4 verified relevant**
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 8 result(s) found (query: `"CSS4 text-decoration-skip-spaces"`) — **4 verified relevant**
- **Hacker News Algolia:** 0 result(s) found (query: `"CSS4 text-decoration-skip-spaces"`) — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

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
