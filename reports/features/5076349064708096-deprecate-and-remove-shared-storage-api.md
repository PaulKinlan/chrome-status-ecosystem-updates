# Deprecate and Remove: Shared Storage API

> **Report Week:** 2026-W43 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

The Shared Storage API is a privacy-preserving web API to enable storage that is not partitioned by first-party site.  Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Shared Storage API (along with certain other Privacy Sandbox APIs, as outlined on the Privacy Sandbox feature status page).  \[0\]: https://privacysandbox.com/news/privacy-sandbox-next-steps/

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. Given this, we expect adoption to decrease over time (currently at ~11% of page loads) as the main use cases for Shared Storage will remain possible in Chrome using third-party cookies. Further, other browser engines have not signaled interest in launching the API. See also the initial public proposal below.

## Ecosystem Status

- **Momentum:** Moderate (footprint 220 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Following Google's strategic decision to maintain third-party cookies rather than phase them out, the Shared Storage API is being deprecated and removed starting in Chrome 153. Because alternative browser engines never signaled implementation interest and primary use cases remain viable via traditional cookies, Google is winding down support and cleaning up associated developer tools.

### Recommendations
- Actionable Advice: Development teams should audit applications for any remnants of sharedStorage worklets or API calls, remove production dependencies immediately, and pivot back to standard cookie-based or first-party patterns for cross-site workflows on Chrome.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [winaero.com](https://winaero.com/google-turns-off-key-privacy-sandbox-technologies) *(winaero.com)*
  > Following Google’s strategic shift to maintain the current approach to third-party cookies rather than phase them out entirely, the \*\*Shared Storage API\*\*—along with select other Privacy Sandbox initiatives—has been targeted for \*\*deprecating and rem...
- [google.com](https://groups.google.com/a/chromium.org/g/blink-dev/c/uh5Ke6qyegc/m/WFTFnhyJBAAJ) *(groups.google.com)*
  > Consequently, Chromium status trackers, developer mailing lists, and documentation sites (such as MDN) have flagged the feature as deprecated and pending total removal \*\*Core Focus:\*\* This official engineering notice details the rationale for pulling...
- [Privacy Sandbox History and Timeline - The Third-Party Cookie Phase-Out Plan, Its Reversal, API Deprecation and Removal in Chrome, and What Remains Supported \| hidekazu-konishi.com](https://hidekazu-konishi.com/entry/privacy_sandbox_history_and_timeline.html) *(hidekazu-konishi.com)*
  > \*\*Core Focus:\*\* Broader announcements tracking Google’s pivot regarding advertising-relevance and measurement APIs \*\*Key Takeaway:\*\* Ecosystem roundups and technical analyses highlight that features tied closely to the initial cookie-replacement road...
- [Intent To Deprecate and Remove: Shared Storage API](https://groups.google.com/a/chromium.org/g/blink-dev/c/uh5Ke6qyegc) *(groups.google.com · 2025-11-07T00:00:00)*
  > Intent To Deprecate and Remove: Shared Storage API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent To Deprecate and Remove: Shared Storage API ...
- [Re: \[blink-dev\] Intent to Ship: Support Cross-Origin Shared Storage Worklets](https://www.mail-archive.com/blink-dev@chromium.org/msg10067.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Support Cross-Origin Shared Storage Worklets Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Support Cross-Origin Shared Storage Worklets Mike Taylor Thu, 25 Apr 2024 08:57:14 -0700 LGTM2. On 4/24...
- [PSA: Shared Storage API deprecation and removal](https://groups.google.com/a/chromium.org/g/shared-storage-api-announcements/c/QvXkrgoqi80) *(groups.google.com · 2025-12-04T00:00:00)*
  > Following the announcement that Chrome will maintain its current approach to third-party cookies, &lt;strong&gt;the Shared Storage API will be deprecated in Chrome 144&lt;/strong&gt;, along with certain other APIs as outlined on the Privacy Sandbox feature statu...
- [Re: \[blink-dev\] Intent To Deprecate and Remove: Shared Storage API](http://www.mail-archive.com/blink-dev@chromium.org/msg17585.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent To Deprecate and Remove: Shared Storage API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent To Deprecate and Remove: Shared Storage API Mike Taylor Tue, 29 Sep 2026 15:13:44 -0700 Hey Cammie, Can you clarify which ...
- [\[blink-dev\] Intent To Deprecate and Remove: Shared Storage API](http://www.mail-archive.com/blink-dev@chromium.org/msg15141.html) *(mail-archive.com)*
  > \[blink-dev\] Intent To Deprecate and Remove: Shared Storage API Skip to site navigation (Press enter) \[blink-dev\] Intent To Deprecate and Remove: Shared Storage API Cammie Smith Barnes Fri, 07 Nov 2025 11:32:42 -0800 Intent to deprecate and remove Sha...
- [Shared Storage and Private Aggregation Implementation Quickstart \| Privacy Sandbox](https://privacysandbox.google.com/private-advertising/shared-storage/api-walkthrough) *(privacysandbox.google.com · 2023-10-23T00:00:00)*
  > See our Update on Plans for Privacy Sandbox Technologies. Privacy Sandbox feature status provides more information about the status of individual APIs and platform features. ... This document is a quickstart guide for using Shared Storage and Private...
- [Re: \[blink-dev\] Intent To Deprecate and Remove: Shared Storage API](http://www.mail-archive.com/blink-dev@chromium.org/msg17630.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent To Deprecate and Remove: Shared Storage API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent To Deprecate and Remove: Shared Storage API Rick Byers Wed, 30 Sep 2026 22:21:28 -0700 Having been several weeks, if you h...
- [Shared Storage API demo](https://shared-storage-demo.web.app) *(shared-storage-demo.web.app)*
  > You will not be able to read the actual value that is stored outside of a worklet context, but you can process that value inside the worklet. To extract information from the worklet, Shared Storage uses a concept called “gates” to conduct various ope...
- [Shared Storage API - Web APIs \| MDN](https://www-igm.univ-mlv.fr/~forax/MDN/developer.mozilla.org/en-US/docs/Web/API/Shared_Storage_API.html) *(www-igm.univ-mlv.fr)*
  > To give you an idea of how these parts are handled, we&#x27;ll walk you through the basic A/B testing example from developer.chrome.com. In this example, &lt;strong&gt;a user is assigned to an experiment group, and the group details are stored in shared st...
- [Re: \[blink-dev\] Intent To Deprecate and Remove: Shared Storage API](http://www.mail-archive.com/blink-dev@chromium.org/msg17629.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent To Deprecate and Remove: Shared Storage API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent To Deprecate and Remove: Shared Storage API 'Cammie Smith Barnes' via blink-dev Wed, 30 Sep 2026 21:06:31 -0700 It was in ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent To Deprecate and Remove: Shared Storage API](https://groups.google.com/a/chromium.org/g/blink-dev/c/uh5Ke6qyegc) *(groups.google.com · 2025-11-07T00:00:00)* *(Cites: `https://chromestatus.com/feature/5076349064708096`)*
  > Intent To Deprecate and Remove: Shared Storage API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent To Deprecate and Remove: Shared St...
- [\[Google Privacy Sandbox\] Chrome 152 removed Shared Storage API by bershanskiy · Pull Request #30659 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30659) *(github.com)* *(Cites: `https://chromestatus.com/feature/5076349064708096`)*
  > \[Google Privacy Sandbox\] Chrome 152 stubbed out Shared Storage API by bershanskiy · Pull Request #30659 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance setti...
- [Shared Storage · Issue #10 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/10) *(github.com · 2022-06-29T01:30:41)* *(Cites: `https://wicg.github.io/shared-storage`)*
  > Shared Storage · Issue #10 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your sessi...
- [Re: \[blink-dev\] Intent to Ship: Support Cross-Origin Shared Storage Worklets](https://www.mail-archive.com/blink-dev@chromium.org/msg10067.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/shared-storage`)*
  > Re: \[blink-dev\] Intent to Ship: Support Cross-Origin Shared Storage Worklets Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Support Cross-Origin Shared Storage Worklets Mike Taylor Thu, 25 Apr 2024 08:57:14 -0700 LGTM...

## 📚 Platform Documentation & Specifications

- [Shared Storage API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Shared_Storage_API) *(developer.mozilla.org)*
- [\[Google Privacy Sandbox\] Chrome 152 removed Shared Storage API by bershanskiy · Pull Request #30659 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30659) *(github.com)*
- [Shared Storage · Issue #10 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/10) *(github.com)*
- [Privacy sandbox - Privacy on the web - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/Privacy_sandbox) *(developer.mozilla.org)*
- [GitHub - WICG/shared-storage: Explainer for proposed web platform Shared Storage API · GitHub](https://github.com/WICG/shared-storage) *(github.com)*
- [shared-storage/README.md at main · WICG/shared-storage](https://github.com/WICG/shared-storage/blob/main/README.md) *(github.com)*
- [SharedStorage - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/SharedStorage) *(developer.mozilla.org)*
- [content/files/en-us/web/api/shared\_storage\_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/shared_storage_api/index.md?plain=1) *(github.com)*
- [WorkletSharedStorage](https://developer.mozilla.org/en-US/docs/Web/API/WorkletSharedStorage) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 49 result(s) found across 11 planned queries — **19 verified relevant**
  - `"chromestatus.com/feature/5076349064708096" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"wicg.github.io/shared-storage" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Deprecate and Remove: Shared Storage API" API` — *Core feature API query* (7 returned)
  - `"Deprecate and Remove: Shared Storage API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"privacysandbox.com" OR "privacy-preserving" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and Remove: Shared Storage API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and Remove: Shared Storage API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `Shared Storage API deprecation Chrome Privacy Sandbox` — *Find official announcements and news regarding the deprecation and removal of the Shared Storage API due to third-party cookie changes.* (8 returned)
  - `"Shared Storage API" tutorial guide code example` — *Discover developer blogs, tutorials, and practical code implementations of the Shared Storage API before its deprecation.* (8 returned)
  - `site:github.com/WICG/shared-storage "sharedStorage.run"` — *Locate real-world WebIDL usage and JavaScript code examples from the official WICG specification repository.* (0 returned)
  - `"Shared Storage API" removal browser engine support OR adoption` — *Search for developer discussions, sentiment, and ecosystem reactions regarding other browser engines not implementing the API and its subsequent removal.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 6 result(s) found — **4 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5076349064708096)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5076349064708096)
- [Specification](https://wicg.github.io/shared-storage)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/462465887)
