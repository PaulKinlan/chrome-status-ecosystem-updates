# Remove non-standard navigations targeted at \_current

> **Report Week:** 2026-W40 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

Blink currently supports navigations targeted at "\_current", this feature should be removed as it is non-standard.  Usage of this feature is minimal (less than ~0.00009%), see https://chromestatus.com/metrics/feature/timeline/popularity/2835.

### Motivation

This feature is not used at all and is non-standard. It's confusing to ahve it supported in a single browser engine, so this feature removes it.

## Ecosystem Status

- **Momentum:** Moderate (50 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Chromium is removing its non-standard, legacy support for navigations targeted at '\_current' in Chrome 153 to align Blink with the WHATWG HTML standard for choosing a navigable. The keyword was uniquely supported in Blink and accounts for an infinitesimal fraction of web traffic (under 0.00009%), making its deprecation a straightforward interop cleanup. Engine consensus is unanimous, as Gecko and WebKit never treated '\_current' as a valid keyword.

### Recommendations
- Actionable Advice: Check codebases and markup templates for any accidental use of 'target="\_current"' and replace instances with the standard 'target="\_self"' or remove the target attribute entirely to use default navigation behavior. No polyfills are needed as standard target keywords are universally supported across all browsers.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword](http://www.mail-archive.com/blink-dev@chromium.org/msg17174.html) *(mail-archive.com)*
  > Re: [blink-dev] Web-Facing Change PSA: Removal of "_current" as a frame target keyword Skip to site navigation (Press enter) Re: [blink-dev] Web-Facing Change PSA: Removal of "_current" as a frame target keyword Philip Jägenstedt Fri, 14 Aug 2026 00:...
- [CSS Sign-Related Functions: abs(), sign()](https://chromestatus.com/feature/5091423843778560) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [Chrome 153 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/153) *(chromestatus.com)*
  > Usage of this feature is minimal (less than ~0.00009%), see https://chromestatus.com/metrics/feature/timeline/popularity/2835.
- [Chrome 150 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/150) *(developer.chrome.com · 2026-06-30T00:00:00)*
  > The AccentColor and AccentColorText system colors can be used in CSS to access the system accent color specified on the user&#x27;s device. This lets developers apply native-app-like styling to their web content in contexts where users expect OS them...
- [Chrome 153 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-153-beta) *(developer.chrome.com · 2026-08-20T00:00:00)*
  > Blink currently supports navigations targeted at _current. <strong>This feature is removed in Chrome 153 as it is non-standard, with minimal usage across the web</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword](http://www.mail-archive.com/blink-dev@chromium.org/msg17174.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5121089536262144`)*
  > Re: [blink-dev] Web-Facing Change PSA: Removal of "_current" as a frame target keyword Skip to site navigation (Press enter) Re: [blink-dev] Web-Facing Change PSA: Removal of "_current" as a frame target keyword Philip Jägenstedt Fri, 14 Au...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 69 result(s) found across 11 planned queries — **5 verified relevant**
  - `"chromestatus.com/feature/5121089536262144" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"html.spec.whatwg.org" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Remove non-standard navigations targeted at _current" API` — *Core feature API query* (0 returned)
  - `"Remove non-standard navigations targeted at _current" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"0.00009" OR "chromestatus.com" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Remove non-standard navigations targeted at _current" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Remove non-standard navigations targeted at _current" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
  - `"target=_current" OR target="_current" "intent to remove" OR "blink-dev"` — *Finds Chromium development mailing list discussions, Intent to Deprecate/Remove notices, and browser engine consensus tracking.* (8 returned)
  - `window.open OR "<a target=\"_current\"" HTML browsing context OR navigable` — *Searches for real-world JavaScript and HTML code examples where developers inadvertently or intentionally specified _current as the browsing target.* (8 returned)
  - `site:github.com/whatwg/html OR site:issues.chromium.org "_current" target "navigable"` — *Discovers discussions, issue tracker entries, and specification debates concerning valid target names and the removal of _current in WHATWG HTML and Blink.* (8 returned)
  - `"deprecations and removals" "Chrome" "_current" navigation OR target` — *Locates Chrome developer release notes, blog roundups, and web developer alerts covering features deprecated and removed in recent Chrome releases.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 114214 item(s) inspected

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
