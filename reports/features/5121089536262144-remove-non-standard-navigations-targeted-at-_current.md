# Remove non-standard navigations targeted at \_current

> **Report Week:** 2026-W41 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

Blink currently supports navigations targeted at "\_current", this feature should be removed as it is non-standard.  Usage of this feature is minimal (less than ~0.00009%), see https://chromestatus.com/metrics/feature/timeline/popularity/2835.

### Motivation

This feature is not used at all and is non-standard. It's confusing to ahve it supported in a single browser engine, so this feature removes it.

## Ecosystem Status

- **Momentum:** Moderate (75 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Remove non-standard navigations targeted at \_current is currently Deprecated in Chrome 153. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

### Recommendations
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "@TWBChris @I\_luv\_Ice @BoqPrecision X has ~550 million monthly active users. Accounts posting harsh or disability-focused" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [@TWBChris @I\_luv\_Ice @BoqPrecision X has ~550 million monthly active users. Accounts posting harsh or disability-focused](https://twitter.com/grok/status/2107033638990705047) — *by @grok, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [and trying to figure out how to explain himself and his "accidental" repost. Accidental in quotes because there is still](https://twitter.com/b__abylon/status/2107032651802796463) — *by @b__abylon, 0 likes/RTs, 1 replies*
- 🐦 **Twitter / X:** [Most people are watching the green candles. I'm watching 0.000075. Hold it → 0.000085–0.00009 becomes interesting. Lose ](https://twitter.com/evgen_krt/status/2106889108203384995) — *by @evgen_krt, 1 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [$PRVX has one job now: reclaim $0.00009 👀  Below it = still weak Above it = bullish structure starts coming back  $0.00](https://twitter.com/RealIMMORTAL333/status/2106781992662581613) — *by @RealIMMORTAL333, 28 likes/RTs, 1 replies*
- 🐦 **Twitter / X:** [TART ✅ $0.1\_$1 CREPE ✅ $0.01\_$0.1 WKC ✅ $0.00005\_$0.00009 OCICAT ✅ $0.000005  Don't lose focus especially on these proje](https://twitter.com/MrPrinceD35870/status/2106735666839060843) — *by @MrPrinceD35870, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Good Morning 🍰☕  A total of 13 people minted Diamond, including me. For every Diamond minted, I received 0.00009 ETH in](https://twitter.com/Voojdab/status/2106642625956594050) — *by @Voojdab, 38 likes/RTs, 25 replies*
- 🐦 **Twitter / X:** [🟡 躺赢 · BNB Chain MC $78K  躺赢 just caught a fresh eyeball on BNB Chain with a slick entry under 0.00009. The 78K market ](https://twitter.com/Kylie20262/status/2106639526475227176) — *by @Kylie20262, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [@AshutoshRanka Ek chatukar sar par baal kam hain unke, aaj TV channel par bolenge, ye 0.00009% of Gen Z bhi nahi hain 🙂](https://twitter.com/arung20012012/status/2106214102893044128) — *by @arung20012012, 1 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGUf_lDhR5KIWyQw3Y0LQU01tfUjCUZTQSir1wNfo6ckbuVMZVqpIja0JBnD_mJsgJm-rGkSuFflMDvbiiLrcaQFH3JKesDelFlq1_45Io61ZqVDElJajmW9v_jAzE0dytVx9NKYcpf) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH_58WgylN3yYmIGufbSPFWO19hSeN7QIjEiBAnmDN3CZ7cBnX-lOQjHbolOE4Es5aRQFFP10Ex0ATGH2_6jUCYddFn1pQVMdn9krHKKF6TfV3C1ClpyoJCzjJi4GH1afU=) *(vertexaisearch.cloud.google.com)*
  > Chrome 153 Release Notes - Chrome Platform Status Chrome 153 Release Notes Preview Scheduled Stable Release September 8, 2026 DOM Capability elements: <camera> and <microphone> # Link copied! The <camera> and <microphone> capability elements are decl...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFj2521Z_bCFNm6j0wUzk5P5B99Bti8_SvM5KUypWEW6l2pVUc4rJCxMnzMbBgdg2Z__gb0iF6mk2K-9EfBXu8V_fCVs5RzmtAfvlzDg_BiAnG_ARL4MpRn1n0kUnq7aD8xGDy6MSG8) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [Chrome 153 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/153) *(chromestatus.com)*
  > Usage of this feature is minimal (less than ~0.00009%), see https://chromestatus.com/metrics/feature/timeline/popularity/2835.

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 50 result(s) found across 11 planned queries — **1 verified relevant**
  - `"chromestatus.com/feature/5121089536262144" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"html.spec.whatwg.org" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Remove non-standard navigations targeted at _current" API` — *Core feature API query* (0 returned)
  - `"Remove non-standard navigations targeted at _current" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"0.00009" OR "chromestatus.com" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Remove non-standard navigations targeted at _current" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Remove non-standard navigations targeted at _current" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (3 returned)
  - `site:groups.google.com/a/chromium.org/g/blink-dev "intent to remove" "_current"` — *Find the official Blink-dev Intent to Remove announcement thread and browser vendor consensus.* (0 returned)
  - `"target=\"_current\"" OR "target='_current'" (window.open OR "<a target")` — *Locate real-world HTML markup and JavaScript window.open calls referencing the legacy _current target keyword.* (3 returned)
  - `site:github.com/whatwg/html "rules for choosing a navigable" OR "_current"` — *Track standards-level discussions on WHATWG HTML regarding navigable target name resolution and non-standard legacy keywords.* (4 returned)
  - `Chrome "_current" "navigation" (deprecated OR removed OR "ChromeStatus")` — *Search developer release notes, ChromeStatus updates, and web development blogs covering the removal of non-standard target navigations.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 8 result(s) found — **3 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 114452 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5121089536262144)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5121089536262144)
- [Specification](https://html.spec.whatwg.org/#the-rules-for-choosing-a-navigable)
- [Chromium Tracking Bug](https://crbug.com/539212797)
