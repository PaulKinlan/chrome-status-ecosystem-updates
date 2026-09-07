# Change the "position-anchor" initial value to "normal"

> **Report Week:** 2026-W37 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

We are changing the initial value of the "position-anchor" CSS property from "none" to normal to align with other browsers and the specification.

"normal" behaves like "none" if the "position-area" CSS property is "none", otherwise behaves as "auto".

### Motivation

Aligns with the specification and other browsers.

## Ecosystem Status

- **Momentum:** Emerging (10 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** Change the "position-anchor" initial value to "normal" is currently Enabled by default in Chrome 151. Verified ecosystem momentum is Emerging with Chromium-Led standards alignment and neutral developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [[blink-dev] Web-Facing Change PSA: Change the "position-anchor" initial value to "normal"](http://www.mail-archive.com/blink-dev@chromium.org/msg16707.html) *(mail-archive.com)*
  > Specification https://drafts.c... to normal to align with other browsers and the specification. <strong>&quot;normal&quot; behaves like &quot;none&quot; if the &quot;position-area&quot; CSS property is &quot;none&quot;, otherwise behaves as &quot;aut...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 19 result(s) found across 7 planned queries — **1 verified relevant**
  - `"chromestatus.com/feature/5351959625334784" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"drafts.csswg.org/css-anchor-position-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Change the "position-anchor" initial value to "normal"" API` — *Core feature API query* (3 returned)
  - `"Change the "position-anchor" initial value to "normal"" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (0 returned)
  - `"position-anchor" OR "position-area" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Change the "position-anchor" initial value to "normal"" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (0 returned)
  - `"Change the "position-anchor" initial value to "normal"" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (0 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 9 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
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

- [ChromeStatus](https://chromestatus.com/feature/5351959625334784)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5351959625334784)
- [Specification](https://drafts.csswg.org/css-anchor-position-1/#position-anchor)
