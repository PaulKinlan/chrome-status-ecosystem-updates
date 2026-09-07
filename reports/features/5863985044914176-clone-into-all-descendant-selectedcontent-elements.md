# Clone into all descendant selectedcontent elements

> **Report Week:** 2026-W37 | **Milestone:** Chrome 150 | **Category:** Enabled by default

## Overview

Several small changes are being made to edge cases of the selectedcontent element:
- When multiple selectedcontent elements are put in a select element at the same time, all of them will be kept up to date instead of only the first one in DOM order.
- Updating the selectedcontent element is deferred when it would run during insertion, removal, or moving steps in order to fix security issues. The update is deferred by using post-insertion steps or microtasks.

This is a PSA instead of an intent to ship because this only changes invalid cases or edge cases, and the usage of customizable select is still quite low (0.02%).

## Ecosystem Status

- **Momentum:** Moderate (50 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Clone into all descendant selectedcontent elements is currently Enabled by default in Chrome 150. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 150. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [selectedcontent element behavior does not match spec [458113204] - Chromium](https://issues.chromium.org/issues/458113204) *(issues.chromium.org)*
  > Chromium Sign in
- [[blink-dev] Web-Facing Change PSA: Clone into all descendant selectedcontent elements](http://www.mail-archive.com/blink-dev@chromium.org/msg16656.html) *(mail-archive.com)*
  > [blink-dev] Web-Facing Change PSA: Clone into all descendant selectedcontent elements Skip to site navigation (Press enter) [blink-dev] Web-Facing Change PSA: Clone into all descendant selectedcontent elements Joey Arhar Fri, 29 May 2026 16:58:00 -07...
- [Chrome 150 beta | Blog | Chrome for Developers](https://developer.chrome.com/blog/chrome-150-beta) *(developer.chrome.com · 2026-06-03T00:00:00)*
  > Updating the selectedcontent element is deferred when it runs during insertion, removal, or moving steps to fix security issues.
- [Chrome 150 | Release notes | Chrome for Developers](https://developer.chrome.google.cn/release-notes/150) *(developer.chrome.google.cn)*
  > Updating the selectedcontent element is deferred when it would run during insertion, removal, or moving steps to fix security issues.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [selectedcontent element behavior does not match spec [458113204] - Chromium](https://issues.chromium.org/issues/458113204) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5863985044914176`)*
  > Chromium Sign in
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-06-08 (public-html@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-html/2026Jun/0001.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/12263`)*
  > (17 by annevk, bfgeek, emilio, nt1m) https://github.com/whatwg/html/pull/12491 [agenda+] - #12263 <strong>Clone into all descendant selectedcontent elements</strong> (1 by annevk) https://github.com/whatwg/html/pull/12263 [topic: select] - ...

## 📚 Platform Documentation & Specifications

- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-06-08 (public-html@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-html/2026Jun/0001.html) *(lists.w3.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 33 result(s) found across 7 planned queries — **5 verified relevant**
  - `"chromestatus.com/feature/5863985044914176" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/whatwg/html/pull/12263" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Clone into all descendant selectedcontent elements" API` — *Core feature API query* (2 returned)
  - `"Clone into all descendant selectedcontent elements" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"0.02" OR "post-insertion" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Clone into all descendant selectedcontent elements" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Clone into all descendant selectedcontent elements" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 2 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5863985044914176)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5863985044914176)
- [Specification](https://github.com/whatwg/html/pull/12263)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/458113204)
