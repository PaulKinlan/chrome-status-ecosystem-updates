# Deprecate and Remove: Shared Storage API

> **Report Week:** 2026-W41 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

The Shared Storage API is a privacy-preserving web API to enable storage that is not partitioned by first-party site.  Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Shared Storage API (along with certain other Privacy Sandbox APIs, as outlined on the Privacy Sandbox feature status page).  \[0\]: https://privacysandbox.com/news/privacy-sandbox-next-steps/

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. Given this, we expect adoption to decrease over time (currently at ~11% of page loads) as the main use cases for Shared Storage will remain possible in Chrome using third-party cookies. Further, other browser engines have not signaled interest in launching the API. See also the initial public proposal below.

## Ecosystem Status

- **Momentum:** High (210 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Deprecate and Remove: Shared Storage API is currently Deprecated in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Deprecate and Remove Shared Storage API \[462465887\] - Chromium](https://issues.chromium.org/issues/462465887) *(issues.chromium.org · 2025-11-20T00:00:00)*
  > Chromium Sign in
- [Intent To Deprecate and Remove: Shared Storage API](https://groups.google.com/a/chromium.org/g/blink-dev/c/uh5Ke6qyegc) *(groups.google.com · 2025-11-07T00:00:00)*
  > Intent To Deprecate and Remove: Shared Storage API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent To Deprecate and Remove: Shared Storage API ...
- [PSA: Shared Storage API deprecation and removal](https://groups.google.com/a/chromium.org/g/shared-storage-api-announcements/c/QvXkrgoqi80) *(groups.google.com · 2025-12-04T00:00:00)*
  > PSA: Shared Storage API deprecation and removal Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; PSA: Shared Storage API deprecation and removal 110 vi...
- [Deprecate and Remove: Shared Storage API](https://chromestatus.com/feature/5076349064708096) *(chromestatus.com · 2025-11-05T00:00:00)*
  > Chrome Platform Status
- [\[blink-dev\] Intent To Deprecate and Remove: Shared Storage API](http://www.mail-archive.com/blink-dev@chromium.org/msg15141.html) *(mail-archive.com)*
  > [blink-dev] Intent To Deprecate and Remove: Shared Storage API Skip to site navigation (Press enter) [blink-dev] Intent To Deprecate and Remove: Shared Storage API Cammie Smith Barnes Fri, 07 Nov 2025 11:32:42 -0800 Intent to deprecate and remove Sha...
- [Re: \[blink-dev\] Intent To Deprecate and Remove: Shared Storage API](http://www.mail-archive.com/blink-dev@chromium.org/msg17585.html) *(mail-archive.com)*
  > Following Chrome&#x27;s announcement &lt;https://privacysandbox.com/news/privacy-sandbox-next-steps/&gt;that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Shared Storage API (along wit...
- [Shared Storage and Private Aggregation Implementation Quickstart \| Privacy Sandbox](https://privacysandbox.google.com/private-advertising/shared-storage/api-walkthrough) *(privacysandbox.google.com · 2023-10-23T00:00:00)*
  > Methods that are used in the worklet ... such as setting, appending, and deleting values in Shared Storage can be done <strong>using response headers</strong>....
- [Storage updates in Android 11 \| Android Developers](https://developer.android.com/about/versions/11/privacy/storage) *(developer.android.com)*
  > To read and write to all files in shared storage using this app, you need to have the all files access permission. If your app targets Android 11, both the WRITE_EXTERNAL_STORAGE permission and the WRITE_MEDIA_STORAGE privileged permission no longer ...
- [Overview of shared storage \| App data and files \| Android Developers](https://developer.android.com/training/data-storage/shared) *(developer.android.com · 2026-03-05T00:00:00)*
  > This document explains how to use shared storage for user data that is accessible to other apps and persists even after app uninstallation.
- [How to Deprecate an API: Smooth Transition Tips](https://blog.treblle.com/best-practices-deprecating-api) *(blog.treblle.com)*
  > <strong>Clearly mark the deprecated API in your documentation</strong>. This can include adding a &quot;Deprecated&quot; label next to the API endpoints, including a banner or note at the top of the documentation page, and updating any related tutori...
- [How Do I Deprecate My REST API? \| Abstract API](https://www.abstractapi.com/guides/other/deprecate-rest-api) *(abstractapi.com · 2025-09-15T00:00:00)*
  > API deprecation is the formal process ... or features. It involves <strong>informing users that a change is coming, offering guidance on how to migrate, and ultimately removing the deprecated functionality</strong>....
- [Best Practices for Deprecating an API Without Alienating Your Users](https://treblle.com/blog/best-practices-deprecating-api) *(treblle.com · 2024-09-06T00:00:00)*
  > <strong>Clearly mark the deprecated API in your documentation</strong>. This can include adding a &quot;Deprecated&quot; label next to the API endpoints, including a banner or note at the top of the documentation page, and updating any related tutori...
- [The Google Privacy Sandbox: The Big Picture and the Privacy Sandbox Browser Elements \| Blog](https://theprivacysandbox-com.webflow.io/posts/google-privacy-sandbox-big-picture) *(theprivacysandbox-com.webflow.io)*
  > Introduced in HTML5, they are designed to offload tasks that can be time-consuming or resource-intensive and to overcome the limits of single-threaded JavaScript execution. Workers are relatively heavy-weight, and are not intended to be used in large...
- [The Privacy Sandbox - Chrome Developers](https://chrome.jscn.org/privacy-sandbox) *(chrome.jscn.org)*
  > <strong>A series of proposals to satisfy cross-site use cases without third-party cookies or other tracking mechanisms</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Deprecate and Remove Shared Storage API \[462465887\] - Chromium](https://issues.chromium.org/issues/462465887) *(issues.chromium.org · 2025-11-20T00:00:00)* *(Cites: `https://chromestatus.com/feature/5076349064708096`)*
  > Chromium Sign in
- [Intent To Deprecate and Remove: Shared Storage API](https://groups.google.com/a/chromium.org/g/blink-dev/c/uh5Ke6qyegc) *(groups.google.com · 2025-11-07T00:00:00)* *(Cites: `https://chromestatus.com/feature/5076349064708096`)*
  > Intent To Deprecate and Remove: Shared Storage API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent To Deprecate and Remove: Shared St...
- [\[Google Privacy Sandbox\] Chrome 152 removed Shared Storage API by bershanskiy · Pull Request #30659 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30659) *(github.com)* *(Cites: `https://chromestatus.com/feature/5076349064708096`)*
  > [Google Privacy Sandbox] Chrome 152 stubbed out Shared Storage API by bershanskiy · Pull Request #30659 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance setti...
- [Shared Storage · Issue #10 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/10) *(github.com · 2022-06-29T01:30:41)* *(Cites: `https://wicg.github.io/shared-storage`)*
  > Shared Storage · Issue #10 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your sessi...
- [Shared Storage API · Issue #747 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/747) *(github.com · 2022-06-06T18:20:44)* *(Cites: `https://wicg.github.io/shared-storage`)*
  > Shared Storage API · Issue #747 · w3ctag/design-reviews · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your sessi...

## 📚 Platform Documentation & Specifications

- [\[Google Privacy Sandbox\] Chrome 152 removed Shared Storage API by bershanskiy · Pull Request #30659 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30659) *(github.com)*
- [Shared Storage · Issue #10 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/10) *(github.com)*
- [Shared Storage API · Issue #747 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/747) *(github.com)*
- [Shared Storage API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Shared_Storage_API) *(developer.mozilla.org)*
- [Privacy sandbox - Privacy on the web - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/Privacy_sandbox) *(developer.mozilla.org)*
- [SharedStorage](https://developer.mozilla.org/en-US/docs/Web/API/SharedStorage) *(developer.mozilla.org)*
- [WorkletSharedStorage](https://developer.mozilla.org/en-US/docs/Web/API/WorkletSharedStorage) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 38 result(s) found across 7 planned queries — **19 verified relevant**
  - `"chromestatus.com/feature/5076349064708096" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"wicg.github.io/shared-storage" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Deprecate and Remove: Shared Storage API" API` — *Core feature API query* (6 returned)
  - `"Deprecate and Remove: Shared Storage API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"privacysandbox.com" OR "privacy-preserving" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and Remove: Shared Storage API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and Remove: Shared Storage API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 27 item(s) inspected

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
