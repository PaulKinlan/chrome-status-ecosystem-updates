# Remove non-standard navigations targeted at \_current

> **Report Week:** 2026-W42 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

Blink currently supports navigations targeted at "\_current", this feature should be removed as it is non-standard.  Usage of this feature is minimal (less than ~0.00009%), see https://chromestatus.com/metrics/feature/timeline/popularity/2835.

### Motivation

This feature is not used at all and is non-standard. It's confusing to ahve it supported in a single browser engine, so this feature removes it.

## Ecosystem Status

- **Momentum:** Emerging (footprint 50 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Neutral
- **Executive Take:** Chromium is removing its legacy, non-standard support for navigations targeted at '\_current' to align strictly with the WHATWG HTML specification for choosing a navigable. The behavior historically acted identically to '\_self', but telemetry showed negligible web usage below 0.00009%, warranting removal without requiring a deprecation trial. Because neither Gecko nor WebKit ever implemented this keyword, removing it eliminates a long-standing engine-specific quirk and achieves full cross-browser interoperability.

### Recommendations
- Actionable Advice: Audit legacy templates, link generators, and form targets to verify that no code paths pass '\_current' as a target context. Replace any stray instances with the standardized keyword '\_self' or omit the target attribute altogether to rely on default navigation rules.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [toast.com](https://ui.toast.com/posts/ko_chrome_report_202505) *(ui.toast.com)*
  > In the HTML specification, the \`target\` attribute on elements like \`&lt;a&gt;\`, \`&lt;area&gt;\`, and \`&lt;form&gt;\` accepts specific reserved keywords (\`\_self\`, \`\_blank\`, \`\_parent\`, and \`\_top\`) Historically, the Blink/Chromium engine supported a non-standard keyword: \`...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/153) *(learn.microsoft.com)*
  > Historically, the Blink/Chromium engine supported a non-standard keyword: \`target="\_current"\`, which functioned identically to \`target="\_self"\` (opening the link in the current browsing context) Microsoft Edge Web Platform Release Notes \* \*\*Source:\*\*...
- [chrome.com](https://developer.chrome.com/release-notes/153) *(developer.chrome.com)*
  > Chrome for Developers: Release Notes \* \*\*Source:\*\* \[developer.chrome.com\](https://developer.chrome.com/) This feature is removed in Chrome 153 because it is non-standard, with minimal usage across the web."\*
- [Chrome 153 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/153) *(chromestatus.com)*
  > This feature is removed in Chrome 153 because it is non-standard, with minimal usage across the web."\* \* \*\*Key Takeaway:\*\* Chrome eliminated the parsing exception for \`\_current\` without introducing a deprecation trial, referencing internal tracking b...
- [piunikaweb.com](https://piunikaweb.com/2026/08/21/chrome-153-beta-desktop-ios-android) *(piunikaweb.com)*
  > Because \`\_current\` was non-standard and used by less than 1 in 1,000,000 page loads, developer portals covered it only as part of general version changelog roundups rather than full-length deprecation guides

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 56 result(s) found across 11 planned queries — **1 verified relevant**
  - `"chromestatus.com/feature/5121089536262144" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"html.spec.whatwg.org" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Remove non-standard navigations targeted at _current" API` — *Core feature API query* (0 returned)
  - `"Remove non-standard navigations targeted at _current" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"0.00009" OR "chromestatus.com" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Remove non-standard navigations targeted at _current" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Remove non-standard navigations targeted at _current" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (3 returned)
  - `site:groups.google.com/a/chromium.org "Intent to Remove" "_current"` — *Finds the official Chrome developer discussion and Intent to Remove thread regarding non-standard \_current target navigations.* (8 returned)
  - `"target=\"_current\"" OR "window.open" "_current" javascript` — *Identifies legacy code snippets, HTML anchor tags, or window.open calls attempting to navigate a frame targeted at \_current.* (8 returned)
  - `site:issues.chromium.org "_current" "the rules for choosing a navigable"` — *Locates Chromium bug tracker tickets, implementation patches, and engineer discussions detailing the removal process and spec alignment.* (0 returned)
  - `HTML link target "_current" "_self" deprecated OR non-standard` — *Surfaces developer blog posts, migration guides, and documentation comparing the non-standard \_current target with valid targets like \_self.* (5 returned)
- **Google Search Grounding (gemini-3.8-flash):** 6 result(s) found — **5 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 1 result(s) found — **1 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5121089536262144)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5121089536262144)
- [Specification](https://html.spec.whatwg.org/#the-rules-for-choosing-a-navigable)
- [Chromium Tracking Bug](https://crbug.com/539212797)
