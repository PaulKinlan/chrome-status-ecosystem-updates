# Deprecate and remove: Private Aggregation API

> **Report Week:** 2026-W37 | **Milestone:** Chrome 152 | **Category:** Deprecated

## Overview

The Private Aggregation API is a generic mechanism for measuring aggregate, cross-site data in a privacy preserving manner. It was originally designed for a future without third-party cookies.

Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Private Aggregation API (along with certain other Privacy Sandbox APIs, as outlined on the Privacy Sandbox feature status page[0]). This API is only exposed via the Shared Storage and Protected Audience APIs, which are also planned to be deprecated and removed. So, no additional work will be required for Private Aggregation.

[0]: https://privacysandbox.google.com/overview/status

### Motivation

Chrome has announced[0] that the current approach to third-party cookies will be maintained. Given this, we expect adoption of the Private Aggregation API to decrease over time as cross-site measurement will remain possible in Chrome using third-party cookies. Further, other browser engines have not signaled interest in launching the API. Removing this (and certain other Privacy Sandbox APIs[1]) will help focus efforts on the proposed interoperable Attribution[2] standard.

[0]: https://privacysandbox.com/news/update-on-plans-for-privacy-sandbox-technologies/
[1]: https://privacysandbox.google.com/overview/status
[2]: https://github.com/w3c/attribution

## Ecosystem Status

- **Momentum:** High (270 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Deprecate and remove: Private Aggregation API is currently Deprecated in Chrome 152. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Marked for deprecation in Chrome 152. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Intent to Deprecate and Remove: Private Aggregation API](https://groups.google.com/a/chromium.org/g/blink-dev/c/Ld7avyD0U0Q) *(groups.google.com · 2025-11-07T00:00:00)*
  > Intent to Deprecate and Remove: Private Aggregation API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Private Aggreg...
- [Intent to Ship: Private Aggregation API](https://groups.google.com/a/chromium.org/g/blink-dev/c/8cKaLstq2QQ) *(groups.google.com)*
  > Intent to Ship: Private Aggregation API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Private Aggregation API 2,118 views Skip to fi...
- [Re: [blink-dev] Intent to Ship: Private Aggregation API: filtering IDs](https://www.mail-archive.com/blink-dev@chromium.org/msg11807.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: Private Aggregation API: filtering IDs Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Private Aggregation API: filtering IDs Dan McArdle Mon, 04 Nov 2024 06:57:44 -0800 Hi blink-dev, We’ve discov...
- [Re: [blink-dev] Re: Intent to Deprecate and Remove: Private Aggregation API](http://www.mail-archive.com/blink-dev@chromium.org/msg16938.html) *(mail-archive.com)*
  > Following Chrome&#x27;s announcement ... certain other Privacy Sandbox APIs, as outlined on the Privacy Sandbox feature status page &lt;<strong>https://privacysandbox.google.com/overview/status&gt;</strong>)....
- [[blink-dev] Re: Intent to Deprecate and Remove: Private Aggregation API](http://www.mail-archive.com/blink-dev@chromium.org/msg15188.html) *(mail-archive.com)*
  > &gt; &gt; Following Chrome&#x27;s announcement ... other Privacy Sandbox APIs, as &gt; outlined on the Privacy Sandbox feature status page &gt; &lt;<strong>https://privacysandbox.google.com/overview/status</strong>&gt;)....
- [[blink-dev] Intent to Deprecate and Remove: Private Aggregation API](http://www.mail-archive.com/blink-dev@chromium.org/msg15139.html) *(mail-archive.com)*
  > Following Chrome&#x27;s announcement ... certain other Privacy Sandbox APIs, as outlined on the Privacy Sandbox feature status page &lt;<strong>https://privacysandbox.google.com/overview/status&gt;</strong>)....
- [Google Pulls The Plug On Topics, PAAPI And Other Major Privacy Sandbox APIs (As The CMA Says ‘Cheerio’) | AdExchanger](https://www.adexchanger.com/privacy/google-pulls-the-plug-on-topics-paapi-and-other-major-privacy-sandbox-apis-as-the-cma-says-cheerio) *(adexchanger.com · 2025-10-19T03:27:47)*
  > Simultaneously, Google announced that it’s “decided to retire” a whole pile of Privacy Sandbox technologies, including (and strap in): the attribution reporting API on both Chrome and Android; IP protection; on-device personalization; private aggrega...
- [Deprecate and remove: Private Aggregation API](https://chromestatus.com/feature/4683382919397376) *(chromestatus.com · 2025-10-21T00:00:00)*
  > We cannot provide a description for this page right now
- [Google Privacy Sandbox API deprecations](https://learnfocus-sigma.vercel.app/?page=en-git-mdn-browser-compat-data-1762585883240) *(learnfocus-sigma.vercel.app · 2025-11-07T16:01:04)*
  > <strong>Google has announced the deprecation of several Privacy Sandbox APIs</strong>. These APIs include document.requestStorageAccessFor, Related Website Sets (RWS), Shared Storage, Protected Audience, Private Aggregation API, Attribution Reporting...
- [Update on Plans for Privacy Sandbox Technologies - Google](https://privacysandbox.google.com/blog/update-on-plans-for-privacy-sandbox-technologies) *(privacysandbox.google.com)*
  > After evaluating ecosystem feedback about their expected value and in light of their low levels of adoption, we&#x27;ve decided to retire the following Privacy Sandbox technologies: Attribution Reporting API (Chrome and Android), IP Protection, On-De...
- [Private Aggregation API overview | Privacy Sandbox](https://privacysandbox.google.com/private-advertising/private-aggregation/overview) *(privacysandbox.google.com · 2022-10-11T00:00:00)*
  > For browsers in Mode B, calls to enableDebugMode() will successfully enable debug reports. You can also set the debug key by calling privateAggregation.<strong>enableDebugMode({ &lt;debugKey: debugKey&gt; }) where a BigInt can be used as a debug key<...
- [Private Aggregation API breaking changes for Shared Storage](https://groups.google.com/a/chromium.org/g/shared-storage-api-announcements/c/YHloqvcUUhY) *(groups.google.com)*
  > enableDebugMode()’s debug_key parameter is being renamed to debugKey. You must update your code to ensure that the Private Aggregation API continues to work. Outdated Chrome instances will still use the old names, so you should ensure backward compat...
- [Debug Shared Storage | Privacy Sandbox - Google](https://privacysandbox.google.com/private-advertising/shared-storage/debugging) *(privacysandbox.google.com · 2024-10-24T00:00:00)*
  > <strong>privateAggregation.enableDebugMode({debugKey: 1234});</strong> ... You can debug Shared Storage by wrapping the calls with try-catch blocks. try { privateAggregation.contributeToHistogram({bucket, value}); } catch (e){ console.log(e); }
- [Additional Private Aggregation API breaking changes for Protected Audience API](https://groups.google.com/a/chromium.org/g/fledge-api-announce/c/yedFntpq_sw) *(groups.google.com · 2023-05-26T00:00:00)*
  > enableDebugMode()’s debug_key parameter is being renamed to debugKey. You must update your code to ensure that the Private Aggregation API continues to work. Outdated Chrome instances will still use the old names, so you should ensure backward compat...
- [Shared Storage and Private Aggregation Implementation Quickstart | Privacy Sandbox](https://privacysandbox.google.com/private-advertising/shared-storage/api-walkthrough) *(privacysandbox.google.com · 2023-10-23T00:00:00)*
  > <strong>To create a report, call contributeToHistogram() inside a worklet with a bucket and value</strong>. The bucket is represented by an unsigned 128-bit integer which must be passed into the function as a BigInt.
- [Private Aggregation API fundamentals | Privacy Sandbox](https://privacysandbox.google.com/private-advertising/private-aggregation/fundamentals) *(privacysandbox.google.com · 2024-11-27T00:00:00)*
  > Aggregatable reports will be sent to where you have defined endpoint /.well-known/private-aggregation/report-shared-storage. Continue on to the filtering IDs guide to learn about the changes needed in Aggregation Service job parameters. After batchin...
- [Shared Storage and Private Aggregation Implementation Quickstart | Privacy Sandbox](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage/api-walkthrough) *(developers.google.com · 2023-10-23T00:00:00)*
  > <strong>To create a report, call contributeToHistogram() inside a worklet with a bucket and value</strong>. The bucket is represented by an unsigned 128-bit integer which must be passed into the function as a BigInt.
- [Private Aggregation API fundamentals | Privacy Sandbox](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/fundamentals) *(developers.google.com · 2024-11-27T00:00:00)*
  > Aggregatable reports will be sent to where you have defined endpoint /.well-known/private-aggregation/report-shared-storage. Continue on to the filtering IDs guide to learn about the changes needed in Aggregation Service job parameters. After batchin...
- [Private Aggregation API fundamentals | Privacy Sandbox](https://developer.chrome.com/en/docs/privacy-sandbox/private-aggregation-fundamentals) *(developer.chrome.com · 2024-11-27T00:00:00)*
  > Aggregatable reports will be sent to where you have defined endpoint /.well-known/private-aggregation/report-shared-storage. Continue on to the filtering IDs guide to learn about the changes needed in Aggregation Service job parameters. After batchin...
- [W3C Ads Privacy Brief: January 2023 - Coir](https://content.coir.dev/w3c-ads-privacy-brief-january-2023) *(content.coir.dev · 2023-01-30T16:10:34)*
  > Status: Live testing in Chrome ... Sandbox lineup, is more general purpose. It is <strong>designed to support non-attribution measurement outcomes connected to other Privacy Sandbox proposals like FLEDGE and Shared Storage API</strong>....

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Deprecate and Remove: Private Aggregation API](https://groups.google.com/a/chromium.org/g/blink-dev/c/Ld7avyD0U0Q) *(groups.google.com · 2025-11-07T00:00:00)* *(Cites: `https://chromestatus.com/feature/4683382919397376`)*
  > Intent to Deprecate and Remove: Private Aggregation API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Priv...
- [private-aggregation-api/spec.bs at main · patcg-individual-drafts/private-aggregation-api](https://github.com/patcg-individual-drafts/private-aggregation-api/blob/main/spec.bs) *(github.com)* *(Cites: `https://patcg-individual-drafts.github.io/private-aggregation-api`)*
  > private-aggregation-api/spec.bs at main · patcg-individual-drafts/private-aggregation-api · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or wi...
- [Private Aggregation API · Issue #846 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/846) *(github.com)* *(Cites: `https://patcg-individual-drafts.github.io/private-aggregation-api`)*
  > Private Aggregation API · Issue #846 · w3ctag/design-reviews · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your ...
- [Private Aggregation API · Issue #189 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/189) *(github.com · 2023-05-19T21:04:20)* *(Cites: `https://patcg-individual-drafts.github.io/private-aggregation-api`)*
  > Private Aggregation API · Issue #189 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh ...
- [Intent to Ship: Private Aggregation API](https://groups.google.com/a/chromium.org/g/blink-dev/c/8cKaLstq2QQ) *(groups.google.com)* *(Cites: `https://patcg-individual-drafts.github.io/private-aggregation-api`)*
  > Intent to Ship: Private Aggregation API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Private Aggregation API 2,118 views ...
- [Re: [blink-dev] Intent to Ship: Private Aggregation API: filtering IDs](https://www.mail-archive.com/blink-dev@chromium.org/msg11807.html) *(mail-archive.com)* *(Cites: `https://patcg-individual-drafts.github.io/private-aggregation-api`)*
  > Re: [blink-dev] Intent to Ship: Private Aggregation API: filtering IDs Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Private Aggregation API: filtering IDs Dan McArdle Mon, 04 Nov 2024 06:57:44 -0800 Hi blink-dev, We...

## 📚 Platform Documentation & Specifications

- [private-aggregation-api/spec.bs at main · patcg-individual-drafts/private-aggregation-api](https://github.com/patcg-individual-drafts/private-aggregation-api/blob/main/spec.bs) *(github.com)*
- [Private Aggregation API · Issue #846 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/846) *(github.com)*
- [Private Aggregation API · Issue #189 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/189) *(github.com)*
- [How to check if debug mode is enabled in bidding logic? · Issue #363 · privacysandbox/privacy-sandbox-dev-support](https://github.com/privacysandbox/privacy-sandbox-dev-support/issues/363) *(github.com)*
- [GitHub - patcg-individual-drafts/private-aggregation-api: Explainer for proposed web platform API](https://github.com/patcg-individual-drafts/private-aggregation-api) *(github.com)*
- [turtledove/FLEDGE_extended_PA_reporting.md at main · WICG/turtledove](https://github.com/WICG/turtledove/blob/main/FLEDGE_extended_PA_reporting.md) *(github.com)*
- [developer.chrome.com/site/en/docs/privacy-sandbox/private-aggregation-fundamentals/index.md at main · GoogleChrome/developer.chrome.com](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/privacy-sandbox/private-aggregation-fundamentals/index.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 31 result(s) found across 6 planned queries — **27 verified relevant**
  - `"chromestatus.com/feature/4683382919397376" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"patcg-individual-drafts.github.io/private-aggregation-api" -site:patcg-individual-drafts.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Private Aggregation API" (deprecate OR deprecation OR removed OR "Privacy Sandbox") status` — *Find official announcements, roadmaps, and industry reporting regarding the deprecation and removal of the Private Aggregation API in Chrome.* (8 returned)
  - `"privateAggregation.contributeToHistogram" OR "privateAggregation.enableDebugMode"` — *Discover concrete JavaScript code snippets, worklet implementations, and WebIDL usage of the Private Aggregation API in the wild.* (8 returned)
  - `"Private Aggregation API" ("Shared Storage" OR "Protected Audience") (guide OR tutorial OR example)` — *Locate practical developer guides and technical overviews detailing how Private Aggregation was integrated with Shared Storage and Protected Audience.* (7 returned)
  - `"Private Aggregation API" ("third-party cookies" OR "Attribution Reporting") (alternative OR feedback OR W3C OR PATCG)` — *Surface AdTech ecosystem sentiment, W3C standards discussions, and migration considerations following the decision to retain third-party cookies.* (4 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 3 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4683382919397376)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4683382919397376)
- [Specification](https://patcg-individual-drafts.github.io/private-aggregation-api)
