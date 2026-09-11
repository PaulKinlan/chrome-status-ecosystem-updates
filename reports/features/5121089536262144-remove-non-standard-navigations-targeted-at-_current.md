# Remove non-standard navigations targeted at _current

> **Report Week:** 2026-W37 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

Blink currently supports navigations targeted at "_current", this feature should be removed as it is non-standard.

Usage of this feature is minimal (less than ~0.00009%), see https://chromestatus.com/metrics/feature/timeline/popularity/2835.

### Motivation

This feature is not used at all and is non-standard. It's confusing to ahve it supported in a single browser engine, so this feature removes it.

## Ecosystem Status

- **Momentum:** Emerging (30 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Blink is removing legacy support for the non-standard `_current` target keyword in navigations (such as `<a target="_current">`), bringing the engine into full conformance with the WHATWG HTML specification. Because standard navigation target keywords are restricted to `_self`, `_blank`, `_parent`, and `_top`, eliminating this undocumented alias cleans up legacy engine divergence with virtually zero ecosystem risk.

### Recommendations
- Actionable Advice: Audit existing codebases and CMS templates to ensure link and form targets explicitly use standard keywords like `_self` rather than legacy or non-standard values like `_current`. No polyfill is necessary; updating attributes to `_self` or omitting `target` entirely provides complete cross-browser compatibility.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "@Rebecca_SPaul 0.00009% of white people owned a slave." (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [@Rebecca_SPaul 0.00009% of white people owned a slave.](https://twitter.com/KevinMc11965049/status/2096936717542379861) — *by @KevinMc11965049, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [@CryptoDominence @BrownC321 @MARSisPOSSIBLE @DogelonMars 0.00009🐂 to⏰⏰⏰ 0.0009🐂 🐳👀🐳](https://twitter.com/Javierp34573823/status/2096929174761984176) — *by @Javierp34573823, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [@endless54719 remember the time, i send you money to buy solana:J3NKxxXZcnNiMjKw9hYb2K4LUxgwB6t1FtPtQVsv3KFr at PT 0.000](https://twitter.com/JiP030297555580/status/2096895736545710220) — *by @JiP030297555580, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [@TheMoonHailey Doge max 1.20$ Shib 0.00009$ Pepe 0.00008 Floki max 0.004$ Bonk max 0.00008 Lunc Max 0.0008 Baby doge .00](https://twitter.com/NFACRYPTOMIND/status/2096675494855061752) — *by @NFACRYPTOMIND, 1 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [@iSolCryptoo Earliest  adopters  are in massive losses, 3x losses  as we  bought in the presale  at 0.00007 and 0.00009 ](https://twitter.com/mistersjake/status/2096536511814553683) — *by @mistersjake, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [raccoon roll call—honest chart check 🦝 $JIMOTHY / WETH: the $0.00009 level from our last update did not hold. The fresh](https://twitter.com/Bender16z/status/2096411595588985252) — *by @Bender16z, 17 likes/RTs, 5 replies*
- 🐦 **Twitter / X:** [BLOCKDAG — Double Bottom 👀  Printing a double bottom around the $0.00005 zone, with buyers defending support after the ](https://twitter.com/cryptowithgopal/status/2096202142055100673) — *by @cryptowithgopal, 3 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [the raccoon crew showed up 🦝 $JIMOTHY bounced from ~$0.000075. Watching $0.00009 hold and $0.00010 overhead on the 15m ](https://twitter.com/Bender16z/status/2096078275684495866) — *by @Bender16z, 9 likes/RTs, 9 replies*

## 📰 Ecosystem Blogs & Articles

- [mozaic.fm](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFadoLwoR-9FhkCbtutaIXQY2Tg1t84gY-0AaPHI3ndYDpMOlqu33C-NKNzX3KcYh8Vmd-bX06HJynAWnns4d3-SBSs8mrAQ_uRWPBTMRpuWg85S3aU6eiXP0DAgjYLdNZsU5jyYQbP2Uk5JNZSY2_c) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Change  In the HTML specification, standard browsing context keywords for link/form targeting include `_self`, `_blank`, `_parent`, and `_top`. Historically, the WebKit and Blink rendering engines supported `target="_current"` as a
- [Re: [blink-dev] Web-Facing Change PSA: Removal of "_current" as a frame target keyword](http://www.mail-archive.com/blink-dev@chromium.org/msg17176.html) *(mail-archive.com)*
  > Re: [blink-dev] Web-Facing Change PSA: Removal of "_current" as a frame target keyword Skip to site navigation (Press enter) Re: [blink-dev] Web-Facing Change PSA: Removal of "_current" as a frame target keyword Dominic Farolino Fri, 14 Aug 2026 08:2...
- [[blink-dev] Web-Facing Change PSA: Removal of "_current" as a frame target keyword](http://www.mail-archive.com/blink-dev@chromium.org/msg17172.html) *(mail-archive.com)*
  > [blink-dev] Web-Facing Change PSA: Removal of "_current" as a frame target keyword Skip to site navigation (Press enter) [blink-dev] Web-Facing Change PSA: Removal of "_current" as a frame target keyword Dominic Farolino Thu, 13 Aug 2026 19:03:45 -07...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: [blink-dev] Web-Facing Change PSA: Removal of "_current" as a frame target keyword](http://www.mail-archive.com/blink-dev@chromium.org/msg17176.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5121089536262144`)*
  > Re: [blink-dev] Web-Facing Change PSA: Removal of "_current" as a frame target keyword Skip to site navigation (Press enter) Re: [blink-dev] Web-Facing Change PSA: Removal of "_current" as a frame target keyword Dominic Farolino Fri, 14 Aug...
- [[blink-dev] Web-Facing Change PSA: Removal of "_current" as a frame target keyword](http://www.mail-archive.com/blink-dev@chromium.org/msg17172.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5121089536262144`)*
  > [blink-dev] Web-Facing Change PSA: Removal of "_current" as a frame target keyword Skip to site navigation (Press enter) [blink-dev] Web-Facing Change PSA: Removal of "_current" as a frame target keyword Dominic Farolino Thu, 13 Aug 2026 19...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 27 result(s) found across 6 planned queries — **2 verified relevant**
  - `"chromestatus.com/feature/5121089536262144" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"html.spec.whatwg.org" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"target=_current" OR "target=\"_current\"" "Blink" OR "Chromium" ("intent to remove" OR "deprecate")` — *Finds Chromium developer discussions, Intent to Remove threads, and engineering tracking bugs for the non-standard _current target.* (0 returned)
  - `"target=\"_current\"" OR "window.open" "_current" (html OR javascript) -site:github.com/chromium` — *Locates historical code snippets, legacy markup, and scripts that improperly relied on _current instead of standard targets like _self.* (8 returned)
  - `site:github.com/whatwg/html "_current" OR "the rules for choosing a navigable"` — *Searches the WHATWG HTML specification repository for issues and pull requests discussing reserved browsing context and navigable target keywords.* (1 returned)
  - `"target=\"_current\"" OR "_current" ("Chrome" OR "Chromium") ("breaking change" OR "deprecated" OR "removed in Chrome")` — *Surfaces developer release notes, migration advisories, and web platform compatibility blog posts discussing the removal of _current navigation.* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 5 result(s) found — **1 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 1 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5121089536262144)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5121089536262144)
- [Specification](https://html.spec.whatwg.org/#the-rules-for-choosing-a-navigable)
- [Chromium Tracking Bug](https://crbug.com/539212797)
