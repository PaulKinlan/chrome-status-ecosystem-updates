# Navigation: Ignore duplicate navigations

> **Report Week:** 2026-W38 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Prevents an ongoing navigation from being unnecessarily canceled by a new, identical navigation that is initiated in quick succession. This optimization improves performance and the user experience by not wasting resources on a duplicate request, which can be caused by accidental double-clicks.

### Motivation

We observe users sometimes navigate to the same URL in quick succession, likely by accident. Because new navigations take precedent over an older one, this means it will waste the earlier navigation that's already in progress, potentially wasting a response that is already in flight for the navigation and causing the user to wait longer (from the time the first navigation kicks off).

To mitigate this waste, the feature will ignore the duplicate navigation and let the first navigation continue.

## Ecosystem Status

- **Momentum:** High (165 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Navigation: Ignore duplicate navigations is currently Enabled by default in Chrome 151. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Navigation-ID (@NavigationID) on X" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [Ignore "duplicate" navigations](https://github.com/WebKit/standards-positions/issues/563) [open]
- **Mozilla:** [Ignore "duplicate" navigations](https://github.com/mozilla/standards-positions/issues/1307) [open]
- **W3C TAG:** [WG New Spec: Ignore Duplicate Navigations](https://github.com/w3ctag/design-reviews/issues/1240) [open]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Navigation-ID (@NavigationID) on X](https://twitter.com/navigationid) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Twitter](https://twitter.com/navigation_re) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [MiRo on X: "Watch the video on the research using MiRo for the Bio-inspired Teach and Repeat Navigation by the research team @QUTRobotics Amazing stuff! 👏👏👏🤩🤩" / X](https://twitter.com/CqRMiRo/status/1501556333899878406) — *by @CqRMiRo, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Flightpath on Twitter: ""Everyone loves a comeback and vertical navigation is on the rise yet again." #TrendsAcrossDigitalDesign @BDIonline"](https://twitter.com/flightpathny/status/588405553971466241) — *by @flightpathny, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Nielsen Norman Group on X: "Don't Use Split #Buttons for #Navigation Menus https://t.co/4qCItMUkZb #mobile #UX" / X](https://twitter.com/NNgroup/status/879416143404036097) — *by @NNgroup, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [NavigationDisk](https://twitter.com/navigationdisk) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [The Navigation (@TheNavNewark) on X](https://twitter.com/thenavnewark?lang=en) — *0 likes/RTs, 0 replies*

## Packages & Polyfills

- [@opentelemetry/instrumentation-browser-navigation](https://www.npmjs.com/package/@opentelemetry/instrumentation-browser-navigation) `v0.15.0` — OpenTelemetry instrumentation for browser navigation events (page load and same-document navigations)

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Intent to Ship: Navigation: Ignore duplicate navigations](http://www.mail-archive.com/blink-dev@chromium.org/msg16962.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: Navigation: Ignore duplicate navigations Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Navigation: Ignore duplicate navigations Alex Russell Mon, 13 Jul 2026 11:36:06 -0700 LGTM1 on the conditio...
- [\[blink-dev\] Intent to Ship: Navigation: Ignore duplicate navigations](http://www.mail-archive.com/blink-dev@chromium.org/msg16923.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Navigation: Ignore duplicate navigations Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Navigation: Ignore duplicate navigations Chromestatus Fri, 03 Jul 2026 01:15:45 -0700 Contact emails [email&#160;pr...
- [Re: \[blink-dev\] Intent to Ship: Navigation: Ignore duplicate navigations](http://www.mail-archive.com/blink-dev@chromium.org/msg16951.html) *(mail-archive.com)*
  > *Flag name on about://flags* *No information provided* *Finch feature name* IgnoreDuplicateNavs *Rollout plan* Will ship enabled for all users *Requires code in //chrome?* False *Tracking bug* https://crbug.com/366060351 *Launch bug* https://launch.c...
- [Navigation Management into Installed PWAs: Techniques and Best Practices](https://docs.google.com/document/d/e/2PACX-1vSqYzAmiLr-58OgSWBITtAAu6_2XUpjjNEdMvc6IdZn9DjQCeVrE0SKViumyly0cpryxAONMq62zwHw/pub?urp=gmail_link) *(docs.google.com)*
  > Windows, Mac, and Linux: Shipping as user navigation capturing in m133 / m134 · There are many ways to deep-link to an installed PWA. Experiment with this example website (source code) and short animation of what is possible using the knowledge you l...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2025-10-13 (public-html@w3.org from October 2025)](https://lists.w3.org/Archives/Public/public-html/2025Oct/0001.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/11765`)*
  > issues/new/choose (2 by Teto-07) ... - Navigation: Add optimization to ignore duplicate navigations (by llannasatoll) https://github.com/whatwg/html/pull/11765 - <strong>Improve behavior for parsing option end tags</strong> (by josepharhar)...

## 📚 Platform Documentation & Specifications

- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2025-10-13 (public-html@w3.org from October 2025)](https://lists.w3.org/Archives/Public/public-html/2025Oct/0001.html) *(lists.w3.org)*
- [Beginner-first PWA navigation and guided article setup by haruharu42 · Pull Request #48 · haruharu42/AIArticleStudio-Updates](https://github.com/haruharu42/AIArticleStudio-Updates/pull/48) *(github.com)*
- [feat(pwa): canonical PWA versioning + mobile navigation audit · Issue #176 · yusi20006-max/YasinHub](https://github.com/yusi20006-max/YasinHub/issues/176) *(github.com)*
- [GitHub - fmohtadi99/pwa-navigation: A simple navigation system for Progressive Web Applications based on React.](https://github.com/fmohtadi99/pwa-navigation) *(github.com)*
- [tabs.duplicate()](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/duplicate) *(developer.mozilla.org)*
- [Navigation](https://developer.mozilla.org/en-US/docs/Web/API/Navigation) *(developer.mozilla.org)*
- [Navigation API](https://developer.mozilla.org/en-US/docs/Web/API/Navigation_API) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 34 result(s) found across 7 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/5137490012930048" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/whatwg/html/pull/11765" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Navigation: Ignore duplicate navigations" API` — *Core feature API query* (2 returned)
  - `"Navigation: Ignore duplicate navigations" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"double-clicks" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Navigation: Ignore duplicate navigations" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Navigation: Ignore duplicate navigations" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **1 verified relevant**
- **Web Platform Tests (wpt.fyi):** 1197 item(s) inspected

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
