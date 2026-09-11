# Navigation: Ignore duplicate navigations

> **Report Week:** 2026-W37 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Prevents an ongoing navigation from being unnecessarily canceled by a new, identical navigation that is initiated in quick succession. This optimization improves performance and the user experience by not wasting resources on a duplicate request, which can be caused by accidental double-clicks.

### Motivation

We observe users sometimes navigate to the same URL in quick succession, likely by accident. Because new navigations take precedent over an older one, this means it will waste the earlier navigation that's already in progress, potentially wasting a response that is already in flight for the navigation and causing the user to wait longer (from the time the first navigation kicks off).

To mitigate this waste, the feature will ignore the duplicate navigation and let the first navigation continue.

## Ecosystem Status

- **Momentum:** Moderate (40 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Navigation: Ignore duplicate navigations is currently Enabled by default in Chrome 151. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Ignore "duplicate" navigations](https://github.com/WebKit/standards-positions/issues/563) [open]
- **Mozilla:** [Ignore "duplicate" navigations](https://github.com/mozilla/standards-positions/issues/1307) [open]
- **W3C TAG:** [WG New Spec: Ignore Duplicate Navigations](https://github.com/w3ctag/design-reviews/issues/1240) [open]

## Packages & Polyfills

- [@opentelemetry/instrumentation-browser-navigation](https://www.npmjs.com/package/@opentelemetry/instrumentation-browser-navigation) `v0.15.0` — OpenTelemetry instrumentation for browser navigation events (page load and same-document navigations)

## 📰 Ecosystem Blogs & Articles

- [Re: [blink-dev] Intent to Ship: Navigation: Ignore duplicate navigations](http://www.mail-archive.com/blink-dev@chromium.org/msg16954.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: Navigation: Ignore duplicate navigations Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Navigation: Ignore duplicate navigations Anna Sato Thu, 09 Jul 2026 03:25:20 -0700 On Thursday, July 9, 202...
- [[blink-dev] Intent to Ship: Navigation: Ignore duplicate navigations](http://www.mail-archive.com/blink-dev@chromium.org/msg16923.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Navigation: Ignore duplicate navigations Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Navigation: Ignore duplicate navigations Chromestatus Fri, 03 Jul 2026 01:15:45 -0700 Contact emails [email&#160;pr...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2025-10-13 (public-html@w3.org from October 2025)](https://lists.w3.org/Archives/Public/public-html/2025Oct/0001.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/11765`)*
  > issues/new/choose (2 by Teto-07) ... - Navigation: Add optimization to ignore duplicate navigations (by llannasatoll) https://github.com/whatwg/html/pull/11765 - <strong>Improve behavior for parsing option end tags</strong> (by josepharhar)...

## 📚 Platform Documentation & Specifications

- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2025-10-13 (public-html@w3.org from October 2025)](https://lists.w3.org/Archives/Public/public-html/2025Oct/0001.html) *(lists.w3.org)*
- [Proposal: Add optimization to ignore "duplicate" navigations · Issue #11743 · whatwg/html](https://github.com/whatwg/html/issues/11743) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 9 result(s) found across 6 planned queries — **4 verified relevant**
  - `"chromestatus.com/feature/5137490012930048" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/whatwg/html/pull/11765" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"ignore duplicate navigations" OR "duplicate navigation" (Chrome OR Chromium OR WHATWG)` — *Finds official announcements, Chrome platform status updates, and browser intent-to-ship threads regarding duplicate navigation handling.* (8 returned)
  - `"ignore duplicate navigations" OR "11765" site:github.com/whatwg/html` — *Surfaces the exact WHATWG specification discussions, issue feedback, and consensus building around ignoring rapid identical navigations.* (1 returned)
  - `"duplicate navigation" ("double-click" OR "double click") ("in flight" OR "in-flight") browser navigation` — *Discovers developer blog posts, performance analyses, and guides explaining how browsers optimize accidental double-click link activations.* (0 returned)
  - `"navigation" ("cancel" OR "canceled") "identical" URL ("ongoing navigation" OR "in-flight") JavaScript` — *Identifies technical breakdowns and code examples showing how browser navigation lifecycles and JavaScript Navigation API interact with identical in-flight requests.* (0 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **1 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5137490012930048)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5137490012930048)
- [Specification](https://github.com/whatwg/html/pull/11765)
- [Chromium Tracking Bug](https://crbug.com/366060351)
