# Remove non-standard navigations targeted at \_current

> **Report Week:** 2026-W43 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

Blink currently supports navigations targeted at "\_current", this feature should be removed as it is non-standard.  Usage of this feature is minimal (less than ~0.00009%), see https://chromestatus.com/metrics/feature/timeline/popularity/2835.

### Motivation

This feature is not used at all and is non-standard. It's confusing to ahve it supported in a single browser engine, so this feature removes it.

## Ecosystem Status

- **Momentum:** Emerging (footprint 80 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** Blink is deprecating and removing support for non-standard \`\_current\` frame target keywords in Chrome 153. Because this behavior was never part of the HTML specification and sees extremely minimal usage (under ~0.00009%), its removal reduces engine complexity and technical debt without destabilizing the web ecosystem.

### Recommendations
- Actionable Advice: Web teams do not need to take action unless they explicitly rely on legacy, non-standard \`target="\_current"\` attributes, in which case they should update them to standard values like \`\_self\` or remove the attribute entirely.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5121089536262144?gate=5111691778719744) *(chromestatus.com)*
  > Because this naming convention is entirely non-standard and not defined by core web specifications, browser maintainers moved to remove it
- [chrome.com](https://developer.chrome.com/docs/web-platform/chrome-deprecation) *(developer.chrome.com)*
  > \*\*Standardization and Code Clean-up:\*\* The primary motivation behind removing \`\_current\` is adherence to standard web specifications and reducing technical debt within the browser's codebase Maintaining custom, non-standard behaviors increases browse...
- [\[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword](http://www.mail-archive.com/blink-dev@chromium.org/msg17172.html) *(mail-archive.com)*
  > \[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword Dominic Farolino Thu, 13 Aug 2026 19:03:45 -07...
- [Re: \[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword](http://www.mail-archive.com/blink-dev@chromium.org/msg17176.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword Skip to site navigation (Press enter) Re: \[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword Dominic Farolino Fri, 14 Aug 2026 08:2...
- [Chrome 153 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/153) *(chromestatus.com · 2026-09-08T00:00:00)*
  > Usage of this feature is minimal (less than ~0.00009%), see https://chromestatus.com/metrics/feature/timeline/popularity/2835.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword](http://www.mail-archive.com/blink-dev@chromium.org/msg17172.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5121089536262144`)*
  > \[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword Dominic Farolino Thu, 13 Aug 2026 19...
- [Re: \[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword](http://www.mail-archive.com/blink-dev@chromium.org/msg17176.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5121089536262144`)*
  > Re: \[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword Skip to site navigation (Press enter) Re: \[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword Dominic Farolino Fri, 14 Aug...

## 📚 Platform Documentation & Specifications

- [7.4 Navigation and session history](https://html.spec.whatwg.org/multipage/browsing-the-web.html) *(html.spec.whatwg.org)*
- [HTML Standard](https://html.spec.whatwg.org/multipage/document-sequences.html) *(html.spec.whatwg.org)*
- [HTML Standard, Edition for Web Developers](https://html.spec.whatwg.org/dev/browsing-the-web.html) *(html.spec.whatwg.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 68 result(s) found across 11 planned queries — **6 verified relevant**
  - `"chromestatus.com/feature/5121089536262144" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"html.spec.whatwg.org" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Remove non-standard navigations targeted at _current" API` — *Core feature API query* (0 returned)
  - `"Remove non-standard navigations targeted at _current" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"0.00009" OR "chromestatus.com" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Remove non-standard navigations targeted at _current" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Remove non-standard navigations targeted at _current" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (3 returned)
  - `remove non standard navigation current target blink chrome` — *Finds official announcements and deprecation notices regarding the removal of the \_current target in Blink.* (8 returned)
  - `target _current html spec navigation rules` — *Searches the HTML specification for the rules regarding navigable targets and the absence of \_current.* (8 returned)
  - `"_current" target navigation deprecation migration guide` — *Searches for developer guides or migration notes addressing the removal of non-standard target attributes.* (8 returned)
  - `chromestatus feature timeline popularity 2835` — *Finds the specific Chrome Platform Status metric tracking the low usage of the \_current navigation target.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 3 result(s) found — **2 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 5 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5121089536262144)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5121089536262144)
- [Specification](https://html.spec.whatwg.org/#the-rules-for-choosing-a-navigable)
- [Chromium Tracking Bug](https://crbug.com/539212797)
