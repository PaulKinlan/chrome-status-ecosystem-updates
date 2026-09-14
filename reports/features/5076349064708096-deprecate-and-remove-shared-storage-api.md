# Deprecate and Remove: Shared Storage API

> **Report Week:** 2026-W38 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

The Shared Storage API is a privacy-preserving web API to enable storage that is not partitioned by first-party site.  Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Shared Storage API (along with certain other Privacy Sandbox APIs, as outlined on the Privacy Sandbox feature status page).  \[0\]: https://privacysandbox.com/news/privacy-sandbox-next-steps/

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. Given this, we expect adoption to decrease over time (currently at ~11% of page loads) as the main use cases for Shared Storage will remain possible in Chrome using third-party cookies. Further, other browser engines have not signaled interest in launching the API. See also the initial public proposal below.

## Ecosystem Status

- **Momentum:** High (350 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Deprecate and Remove: Shared Storage API is currently Deprecated in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE-PoCpp2D4BWN7fb3r5TT-jvhsMU5fTBb70iwB-wysL9H5v-AY1VPg9OO-tySy13us-OXgrtjfvVwZz5FpaNsB1j75wv9teHpz4NSEh5jiLraS1Xx6RJG82T5kRvstdAxNVBl48MeCCavR_qUl-mTf2Zm1VF2C7oVdLBAOXHNt5XHyj27uKcz8kHnjwzKJ) *(vertexaisearch.cloud.google.com)*
  > PSA: Shared Storage API deprecation and removal Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; PSA: Shared Storage API deprecation and removal 106 vi...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH-H5k079Vvt-25c7AH91XZiYVUqhNj0cxqs6glljXhMaPIHljSZyU7Q5skbQkxBT0Y8gukId9CZejsomKzkJ4CGn7BhPuoat10GfQ0EqLAG4UsEe6x4l4fhIHTcEdVEuc55OMm1WWgen5vb-KFlFdXhwepAqCwxpQwbPumeAuo_sRyiHx8_A==) *(vertexaisearch.cloud.google.com)*
  > Intent To Deprecate and Remove: Shared Storage API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent To Deprecate and Remove: Shared Storage API ...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFfWqaPIiCuXB1xfeEbAVrEpmuDwcwIEkJotc4xubBfGL9_6j3LUfGj8JMimL_KEyH9d8Fs3qZvwOxP5KwODrLj0psMlcHMWS2DR2KcLE-fAjI7xpoi3iTNx4g9t3QvQrF9ZPfeY6-d50SrAcspQh4F3VyYEI0rEC8=) *(vertexaisearch.cloud.google.com)*
  > Shared Storage API - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs Shared Storage API Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Shared Storage API Deprecated To be remo...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG0lAXDvZfTKn7iwSqPjIQqRz1kT9BrIHgFBB69QAp1Tm67jg7R_bcu_-j_3yeImlUkV63NVX9q_mq8fqJETfG1M_0FdvRzoD_bO6F0dRIrflZiMrIZXxJBagd602b30FOk4-e5dhhxFDnOQHb9smp_-lXx8oRgZw==) *(vertexaisearch.cloud.google.com)*
  > Intent to Experiment: Shared Storage API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Shared Storage API 2,022 views Skip to ...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF2w5FPS8wedys8tEkj6v_HLTGFOfIu3dm1WLIy9KlsEfA0x72_ryEyxHcirWXwKXMZb2CkizsYBpaVfEUfk7PxuNU-IdeBlRbA-nSALfS1RuwT4NuIrUVkRUmCzcvs5FdRgZg=) *(vertexaisearch.cloud.google.com)*
  > Chrome 144 | Release notes | Chrome for Developers सीधे मुख्य कॉन्टेंट पर जाएं / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภา...
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGneW46LcFXeNU8rPd9IUScAdptW_ZX5p5sybybtFAFvuqmL02V2C8CUnZM84NZ0n1tQUvCDdFZ-I1Mo-IXyNk2fkVifxzHqMBdDgVt3ZcrzdreLcc=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGRYJqZ0VkBJ2O1xObXnMzdzKWL6-vmOFJWKDPrqmILRdWbtt3vE-o0BbDaxnfVt5FBA4tq148Sd__AiSnbf6WHHlXzk6bK0xvV9QUcmAyZeWbbLW0pcNoH-fnnkjbfgtob) *(vertexaisearch.cloud.google.com)*
  > Chromium Sign in
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG5Gj71qJoNxtwWgGo7SeSVTi0VRgbKnXFmo_Vg1b1X1z-Wp6uJwX8a6YUl6kzam5-E6pJwURQi9Oq_MomGGMdWxL-ZPUivtvFY6c8lhHWR_gHnLSdB8zvgVePtWSoSlg==) *(vertexaisearch.cloud.google.com)*
  > Chrome 153 Release Notes - Chrome Platform Status Chrome 153 Release Notes Preview DOM Capability elements: <camera> and <microphone> # Link copied! The <camera> and <microphone> capability elements are declarative, user-activated HTML controls that ...
- [arxiv.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHZLRbjNdfNBqecJDIVUBVqPJP5RKu2Wmeh6tP8m_jFzM3ORGkhySh_7HvvS9fkIsKfsGhf7OXl6g0tGgoBkNmpx-8GY2K1F_YjgXUi40fAD0AFJjGq) *(vertexaisearch.cloud.google.com)*
  > ### Summary  Following Google Chrome's strategic pivot to maintain third-party cookies rather than fully phasing them out, the Chromium team formally moved to **deprecate and remove the Shared Storage API**.   Originally introduced as a privacy-prese
- [m-ads.info](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH2ymtj_K_ix_0SlPI9iJ0M45Z2Mkc5Yxrf4ksG4pTkaU82DXy9uf17s5eeBz0OWPBRSJSaC23wP80Tm7hVclph1rO1c5mAHIcJm5K2Sk9xMKbXX04AYpELW_4SywyHlzENuVnyp5kRI_bb2V0qjZjuIUSBGGk0) *(vertexaisearch.cloud.google.com)*
  > ### Summary  Following Google Chrome's strategic pivot to maintain third-party cookies rather than fully phasing them out, the Chromium team formally moved to **deprecate and remove the Shared Storage API**.   Originally introduced as a privacy-prese
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGV4kbFFUVCVeF-lLIY0dP1xlJxPfE6ZpIhIAcZh_qFs0v1tgoDx60BZA8NWVzoxhTJWpd6ApNY2VsugwHK5ACvDO4hmoUrHpMqQtgUcQNBk6PwiYhnsWJYC8BVTt91SF5CyjUL-hoy_BRsZ8l9cflE14Obb1QNi6pzZyCBK3ZAxDEpvJrwZko=) *(vertexaisearch.cloud.google.com)*
  > ### Summary  Following Google Chrome's strategic pivot to maintain third-party cookies rather than fully phasing them out, the Chromium team formally moved to **deprecate and remove the Shared Storage API**.   Originally introduced as a privacy-prese
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFZbvJEWOis8nTMVoh1xpzq5cjwwGMzZrpONi3kxRhe-GppAtyGVzOlgblEgiROx8R6PdMQGhT8uki-hCEHOgVzdxGb-DYcsO_1Uz-FtN5CKOvEbXuQCgdjzPoP83JWM6pFVul0BED7248CMOHFqs78CU-S0BfMyxFl) *(vertexaisearch.cloud.google.com)*
  > ### Summary  Following Google Chrome's strategic pivot to maintain third-party cookies rather than fully phasing them out, the Chromium team formally moved to **deprecate and remove the Shared Storage API**.   Originally introduced as a privacy-prese
- [Deprecate and Remove Shared Storage API \[462465887\] - Chromium](https://issues.chromium.org/issues/462465887) *(issues.chromium.org · 2025-11-20T00:00:00)*
  > <strong>Decouple Private Aggregation from Shared Storage</strong> Private Aggregation and Shared Storage are both deprecated and scheduled for removal. To facilitate independent removal of the two features, this CL removes the integration between the...
- [Intent To Deprecate and Remove: Shared Storage API](https://groups.google.com/a/chromium.org/g/blink-dev/c/uh5Ke6qyegc) *(groups.google.com · 2025-11-07T00:00:00)*
  > Following Chrome&#x27;s announcement that the current approach to third-party cookies will be maintained, we are now planning to <strong>deprecate and remove the Shared Storage API</strong> (along with certain other Privacy Sandbox APIs, as outlined ...
- [PSA: Shared Storage API deprecation and removal](https://groups.google.com/a/chromium.org/g/shared-storage-api-announcements/c/QvXkrgoqi80) *(groups.google.com · 2025-12-04T00:00:00)*
  > Following the announcement that Chrome will maintain its current approach to third-party cookies, <strong>the Shared Storage API will be deprecated in Chrome 144</strong>, along with certain other APIs as outlined on the Privacy Sandbox feature statu...
- [Deprecate and Remove: Shared Storage API](https://chromestatus.com/feature/5076349064708096) *(chromestatus.com · 2025-11-05T00:00:00)*
  > We cannot provide a description for this page right now
- [\[blink-dev\] Intent To Deprecate and Remove: Shared Storage API](http://www.mail-archive.com/blink-dev@chromium.org/msg15141.html) *(mail-archive.com)*
  > - <strong>The “shared-storage” and “shared-storage-select-url” permissions policy-controlled features will be removed along with the APIs</strong>. Since the APIs they control will no longer exist, the permission policies will have no effect and thei...
- [Re: \[blink-dev\] Intent To Deprecate and Remove: Shared Storage API](http://www.mail-archive.com/blink-dev@chromium.org/msg15156.html) *(mail-archive.com)*
  > * <strong>The “shared-storage” and “shared-storage-select-url” permissions policy-controlled features will be removed along with the APIs</strong>. Since the APIs they control will no longer exist, the permission policies will have no effect and thei...
- [Deprecate and Remove: Shared Storage API](https://2016-01-12-dot-cr-status.appspot.com/feature/5076349064708096) *(2016-01-12-dot-cr-status.appspot.com)*
  > We cannot provide a description for this page right now
- [Shared Storage and Private Aggregation Implementation Quickstart \| Privacy Sandbox](https://privacysandbox.google.com/private-advertising/shared-storage/api-walkthrough) *(privacysandbox.google.com · 2023-10-23T00:00:00)*
  > This document is a quickstart guide for using Shared Storage and Private Aggregation. You&#x27;ll need an understanding of both APIs because Shared Storage stores the values and Private Aggregation creates the aggregatable reports · Target Audience: ...
- [Storage updates in Android 11 \| Android Developers](https://developer.android.com/about/versions/11/privacy/storage) *(developer.android.com)*
  > To read and write to all files in shared storage using this app, you need to have the all files access permission. If your app targets Android 11, both the WRITE_EXTERNAL_STORAGE permission and the WRITE_MEDIA_STORAGE privileged permission no longer ...
- [How to Deprecate an API: Smooth Transition Tips](https://blog.treblle.com/best-practices-deprecating-api) *(blog.treblle.com)*
  > Need real-time insight into how your APIs are used and performing? Treblle helps you monitor, debug, and optimize every API request.Explore Treblle · <strong>Send direct emails to all users who are actively using the deprecated API</strong>.
- [How Do I Deprecate My REST API? \| Abstract API](https://www.abstractapi.com/guides/other/deprecate-rest-api) *(abstractapi.com · 2025-09-15T00:00:00)*
  > API deprecation is the formal process ... or features. It involves <strong>informing users that a change is coming, offering guidance on how to migrate, and ultimately removing the deprecated functionality</strong>....
- [Deprecated and Removed Features \| Adobe Experience Manager as a Cloud Service](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/release-notes/deprecated-removed-features) *(experienceleague.adobe.com · 2026-08-03T00:00:00)*
  > This section reflects API removal guidance for various APIs in the tables above. To identify which deprecated Java APIs your code is using, integrate the AEM as a Cloud Service SDK Build Analyzer Maven Plugin into your Maven project and run it locall...
- [Best Practices for Deprecating an API Without Alienating Your Users](https://treblle.com/blog/best-practices-deprecating-api) *(treblle.com · 2024-09-06T00:00:00)*
  > Need real-time insight into how your APIs are used and performing? Treblle helps you monitor, debug, and optimize every API request.Explore Treblle · <strong>Send direct emails to all users who are actively using the deprecated API</strong>.
- [The Google Privacy Sandbox: The Big Picture and the Privacy Sandbox Browser Elements \| Blog](https://theprivacysandbox-com.webflow.io/posts/google-privacy-sandbox-big-picture) *(theprivacysandbox-com.webflow.io)*
  > Introduced in HTML5, they are designed to offload tasks that can be time-consuming or resource-intensive and to overcome the limits of single-threaded JavaScript execution. Workers are relatively heavy-weight, and are not intended to be used in large...
- [The Privacy Sandbox - Chrome Developers](https://chrome.jscn.org/privacy-sandbox) *(chrome.jscn.org)*
  > <strong>A series of proposals to satisfy cross-site use cases without third-party cookies or other tracking mechanisms</strong>.
- [Expanding testing for the Privacy Sandbox for the Web](https://blog.google/products/chrome/update-testing-privacy-sandbox-web/amp) *(blog.google · 2022-07-27T20:26:45)*
  > Improving people&#x27;s privacy, while giving businesses the tools they need to succeed online, is vital to the future of the open web. That&#x27;s why we started the Privacy Sandbox initiative to collaborate with the ecosystem on developing privacy-...
- [Re: \[blink-dev\] Intent To Deprecate and Remove: Shared Storage API](http://www.mail-archive.com/blink-dev@chromium.org/msg16930.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; Given &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; this, we expect adoption to decrease over time (currently at ~11% &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; &lt;https://chromestatus.com/metrics/feature/timeline/popularity/4263&gt; &gt;&...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Deprecate and Remove Shared Storage API \[462465887\] - Chromium](https://issues.chromium.org/issues/462465887) *(issues.chromium.org · 2025-11-20T00:00:00)* *(Cites: `https://chromestatus.com/feature/5076349064708096`)*
  > <strong>Decouple Private Aggregation from Shared Storage</strong> Private Aggregation and Shared Storage are both deprecated and scheduled for removal. To facilitate independent removal of the two features, this CL removes the integration b...
- [Intent To Deprecate and Remove: Shared Storage API](https://groups.google.com/a/chromium.org/g/blink-dev/c/uh5Ke6qyegc) *(groups.google.com · 2025-11-07T00:00:00)* *(Cites: `https://chromestatus.com/feature/5076349064708096`)*
  > Following Chrome&#x27;s announcement that the current approach to third-party cookies will be maintained, we are now planning to <strong>deprecate and remove the Shared Storage API</strong> (along with certain other Privacy Sandbox APIs, as...
- [Shared Storage · Issue #10 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/10) *(github.com · 2022-06-29T01:30:41)* *(Cites: `https://wicg.github.io/shared-storage`)*
  > Spec Title: Shared Storage API · Spec URL: https://<strong>wicg.github.io/shared-storage</strong>/ GitHub repository: https://github.com/WICG/shared-storage · TAG Design Review: Mozilla standards-positions issue: Shared Storage mozilla/stan...
- [Shared Storage API · Issue #747 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/747) *(github.com · 2022-06-06T18:20:44)* *(Cites: `https://wicg.github.io/shared-storage`)*
  > Explainer (minimally containing user needs and example code): https://github.com/pythagoraskitty/shared-storage/ Specification URL: https://<strong>wicg.github.io/shared-storage</strong>/

## 📚 Platform Documentation & Specifications

- [Shared Storage · Issue #10 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/10) *(github.com)*
- [Shared Storage API · Issue #747 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/747) *(github.com)*
- [Shared Storage API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Shared_Storage_API) *(developer.mozilla.org)*
- [The Privacy Sandbox · GitHub](https://github.com/privacysandbox) *(github.com)*
- [SharedStorage](https://developer.mozilla.org/en-US/docs/Web/API/SharedStorage) *(developer.mozilla.org)*
- [WorkletSharedStorage](https://developer.mozilla.org/en-US/docs/Web/API/WorkletSharedStorage) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 39 result(s) found across 7 planned queries — **21 verified relevant**
  - `"chromestatus.com/feature/5076349064708096" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"wicg.github.io/shared-storage" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Deprecate and Remove: Shared Storage API" API` — *Core feature API query* (6 returned)
  - `"Deprecate and Remove: Shared Storage API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"privacysandbox.com" OR "privacy-preserving" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and Remove: Shared Storage API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and Remove: Shared Storage API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **12 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
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
