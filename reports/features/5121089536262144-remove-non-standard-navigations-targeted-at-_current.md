# Remove non-standard navigations targeted at \_current

> **Report Week:** 2026-W39 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

Blink currently supports navigations targeted at "\_current", this feature should be removed as it is non-standard.  Usage of this feature is minimal (less than ~0.00009%), see https://chromestatus.com/metrics/feature/timeline/popularity/2835.

### Motivation

This feature is not used at all and is non-standard. It's confusing to ahve it supported in a single browser engine, so this feature removes it.

## Ecosystem Status

- **Momentum:** Emerging (30 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** Blink is removing legacy support for navigations targeted at \`\_current\` in Chrome 153 to align with the WHATWG HTML specification for choosing a navigable. The keyword functioned as a non-standard, Blink-only equivalent to \`\_self\` with virtually undetectable real-world usage (&lt; 0.00009% of page loads). Eliminating it resolves an idiosyncratic single-engine behavior and cleans up internal navigation logic without web compatibility risks.

### Recommendations
- Actionable Advice: Audit existing markup and dynamic link generators to ensure any stray \`target="\_current"\` references are replaced with standard \`target="\_self"\` or removed entirely, as omitting the target attribute defaults to navigating the current browsing context. No fallback libraries or polyfills are required.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 153 is now in beta! Try out new CSS scroll container options, Rust-based XML parsing, declarative camera and microphone HTML elements, and the new WebGPU buffer\_view feature. https://t.co/QVG8pp2SRN" / X" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Chrome for Developers on X: "Chrome 153 is now in beta! Try out new CSS scroll container options, Rust-based XML parsing, declarative camera and microphone HTML elements, and the new WebGPU buffer\_view feature. https://t.co/QVG8pp2SRN" / X](https://x.com/ChromiumDev/status/2093424350036660456) — *by @ChromiumDev, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword](http://www.mail-archive.com/blink-dev@chromium.org/msg17174.html) *(mail-archive.com)*
  > Re: [blink-dev] Web-Facing Change PSA: Removal of "_current" as a frame target keyword Skip to site navigation (Press enter) Re: [blink-dev] Web-Facing Change PSA: Removal of "_current" as a frame target keyword Philip Jägenstedt Fri, 14 Aug 2026 00:...
- [Chrome 153 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/153) *(chromestatus.com)*
  > Usage of this feature is minimal (less than ~0.00009%), see https://chromestatus.com/metrics/feature/timeline/popularity/2835.
- [Chrome 153 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-153-beta) *(developer.chrome.com · 2026-08-20T00:00:00)*
  > Blink currently supports navigations targeted at _current. <strong>This feature is removed in Chrome 153 as it is non-standard, with minimal usage across the web</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword](http://www.mail-archive.com/blink-dev@chromium.org/msg17174.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5121089536262144`)*
  > Re: [blink-dev] Web-Facing Change PSA: Removal of "_current" as a frame target keyword Skip to site navigation (Press enter) Re: [blink-dev] Web-Facing Change PSA: Removal of "_current" as a frame target keyword Philip Jägenstedt Fri, 14 Au...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 45 result(s) found across 11 planned queries — **3 verified relevant**
  - `"chromestatus.com/feature/5121089536262144" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"html.spec.whatwg.org" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Remove non-standard navigations targeted at _current" API` — *Core feature API query* (1 returned)
  - `"Remove non-standard navigations targeted at _current" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"0.00009" OR "chromestatus.com" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Remove non-standard navigations targeted at _current" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Remove non-standard navigations targeted at _current" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `site:groups.google.com/a/chromium.org "Intent to Remove" "_current"` — *Find Chromium Intent to Remove announcement threads, developer feedback, and official tracking for removing the _current target keyword.* (0 returned)
  - `("target=\"_current\"" OR "window.open" "_current") (html OR javascript)` — *Locate legacy code samples, markup patterns, or scripts referencing the non-standard _current target in anchor tags or window.open calls.* (0 returned)
  - `site:github.com/whatwg/html "_current" OR "rules for choosing a navigable"` — *Search WHATWG HTML repository issues and pull requests discussing the standardization or rejection of _current as a special navigable keyword.* (2 returned)
  - `"Chrome" deprecations removals "_current" navigation target` — *Discover developer blogs and Chrome release notes covering browser removals, breaking changes, and standard target attribute best practices.* (2 returned)
- **Google Search Grounding (gemini-3.8-flash):** 5 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 114030 item(s) inspected

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
