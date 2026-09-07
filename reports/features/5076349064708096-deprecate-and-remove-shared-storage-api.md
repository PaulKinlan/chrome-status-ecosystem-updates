# Deprecate and Remove: Shared Storage API

> **Report Week:** 2026-W37 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

The Shared Storage API is a privacy-preserving web API to enable storage that is not partitioned by first-party site.

Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Shared Storage API (along with certain other Privacy Sandbox APIs, as outlined on the Privacy Sandbox feature status page).

[0]: https://privacysandbox.com/news/privacy-sandbox-next-steps/

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. Given this, we expect adoption to decrease over time (currently at ~11% of page loads) as the main use cases for Shared Storage will remain possible in Chrome using third-party cookies. Further, other browser engines have not signaled interest in launching the API. See also the initial public proposal below.

## Ecosystem Status

- **Momentum:** High (370 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** The Shared Storage API is being deprecated and removed in Chrome 153 as part of Google's broader rollback and consolidation of Privacy Sandbox APIs following the decision to retain third-party cookies. Because the API never gained cross-browser adoption and usage dropped significantly once third-party cookie phase-out was no longer mandatory, Chromium is phasing out the unpartitioned worklet-based storage mechanism entirely.

### Recommendations
- Actionable Advice: Audit your codebases immediately to remove dependencies on `window.sharedStorage`, worklet scripts, and `selectURL()` calls before Chrome fully disables them. Migrate use cases such as frequency capping and cross-site A/B testing back to standard first-party workflows, partitioned storage, or standard cookie mechanisms where permitted.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF3ZXnyzvoVTNiR38GBsotIJ8MAKirXYSstsyg9bJmQJNY52esZGOcpedQMlmp4MQcAdhh2nixto3wB79EDkjkedrDhAWGV-rzFPM7xYmKRx03QtzpC-gNMrBFOuYw_4r_u7fRorw127PMSXU35vUx3bqwQNAPYkfxrVCp7FZ5JzeIMfUxnnCk=) *(vertexaisearch.cloud.google.com)*
  > Intent To Deprecate and Remove: Shared Storage API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent To Deprecate and Remove: Shared Storage API ...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHxTvtsbuR-yLXqIIJYx4014W4Arv3lxPQfFqDwGDcmiRIPuDXN2896AAU-pbPh9rjkIGWt7e6BBue5nPtFhzuhnauFy01TDkHG4saSrD6cYseztRXTYAB9fOJaKSH2HpoIrGThArnsE_iqMa9DXDEdthD4tP2Fk_eDvw==) *(vertexaisearch.cloud.google.com)*
  > Shared Storage overview | Privacy Sandbox Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한...
- [secureprivacy.ai](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFKAqKuaWxLWfCARnM9IsClEGL9T-UNB9OwLTC_VVZBaUJUfWXufZ4JmjzdZ0eAMxQDarJkowNjD7ACzMByWDHOPdiQIblWqCi2RQ2rLGWJrgsk0mqeofFAFveM4TOb-MfVsvwo4rfr3U-Mvs_f3sWAMbODodGdWm75rhCvP2AGWejwdgY_aoYz-Eun6HXohm7MYuiLvrYNNq4=) *(vertexaisearch.cloud.google.com)*
  > Google Killed Privacy Sandbox: What Actually Changes for Cookie Consent in 2026 | Secure Privacy Blog Skip to main content Back to Blog Cookie Consent Google Killed Privacy Sandbox: What Actually Changes for Cookie Consent in 2026 Google isn&#x27;t d...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFLC0ud-adHt3Tv-Arx336DOYN6hwO_FuXgyTpf0dctfOLVbRm4iSwcfVM0zV5f-Ixh2ekAwdKX3_tOTQYOrNcgmhsOJPXDGVX76IWgwZuJzgtocikjscAWFP1lDleS6uXSsnhquCGTugvg1LaSiXP5XGZffqulofM0) *(vertexaisearch.cloud.google.com)*
  > Shared Storage API - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs Shared Storage API Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Shared Storage API Deprecated To be remo...
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFE4EODOPlzxfo_gfanZ21CsoUTK1cplZt3fvg1D5reTaA6WAief5fgcwW1Bsmpx2PR88Ilrsci7hSKJrCt3YdyDNWM2fGFKuvJ-V3ow5EBg9--ZaV314-BrPOziRcwBAkUew==) *(vertexaisearch.cloud.google.com)*
  > Chromium Sign in
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHqrN8SeGFkpYw-jie2g_vMXa8sLcDPSJPB-MLGLqk5z5N31R6_ztWNPneEumJihU2f4S9Eom_z_qblBYQaTX1uQFFxOcjq4D3NsxvuGFGlRM39UoNZQaTbaW4coeWQvQnqoR_VoPRiaeYNwoCtCDBihpYNE_DJnE3jGB-ZPiS3Pr8KSoCBdKT9ADyDRuDtow==) *(vertexaisearch.cloud.google.com)*
  > PSA: Shared Storage API deprecation and removal Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; PSA: Shared Storage API deprecation and removal 103 vi...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGhW0qnxBPhHo4jA9gGXeS4lw1zdtJCdvc--ZGzG_i4PbX75I2ayI8Z0yeSwGWBedsnyJFCU_l4PElp7ZBVeQaDK0xJ6bx9YqZ4EsKtK3DTs0yun5Lo_pugj06-CU4i7N6bmBWArGe0fMlj0hPNH8Xcvh0=) *(vertexaisearch.cloud.google.com)*
  > Previous release notes - Chrome Enterprise and Education Help Skip to main content Chrome Enterprise and Education Help Sign in Google Help Help Center Community Chrome Enterprise and Education Privacy Policy Terms of Service Submit feedback Send fee...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHBTLn20QjODD8bxpmafJFEBZZSiMyYUGNpW_cCsr1xeHBvb3tKhEyD1hw0HSvSUld-xlYF9QATR6VI1-UbmYtusAR2NXmWRBNlCCBo0S_B1o-5HQL6CK0B0CxdFM9I4ko0DbCUVBRji0DU7CEj) *(vertexaisearch.cloud.google.com)*
  > Google Privacy Sandbox API deprecations · Issue #28417 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to ref...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFEzd8FkZ03TyGy1iKMGdNlTLqUFlhVX3B8_HwDH2kkLVCIFkT2EXM0qSshn3LKl-QiBWHsGkz1DhRkiys2X6nNs8suf1vbzB-CIO49pzOjj41H8EFeo-ig2nnY2xByV633P21PI7aLWeGChFoLcSnGK-yblnRSFdlOtw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  The **Shared Storage API**—originally introduced under Google’s Privacy Sandbox initiative to allow privacy-preserving, unpartitioned cross-site data access via isolated worklets—is being deprecated and scheduled for r
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEl8LpgjpBw27--omwEfxQJpaKOyKLUbcgm0T3hyL20Tm2AOiRBIBwdoDQ_8DfyEvCAvkmFHiQZkX-RilVf8MFSPcPaiY1Mqsr7EDAwPBDtos9xWGVo5mAzxALFi_evC7I6xM8mpKAViRW5EM66VYG4PIOVQ41aqDIiqfg=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  The **Shared Storage API**—originally introduced under Google’s Privacy Sandbox initiative to allow privacy-preserving, unpartitioned cross-site data access via isolated worklets—is being deprecated and scheduled for r
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHyYPSv9g3tIeAytwleJ7t9FQdmssJLFiL3Lj3gUtvBuwT3atwdoj_pYNbX6ylZKfYDeW-D7S_LNPIzWcxDgFYYvGGO3EpzPsogS98Xgi-bZsLgiRLwjR5OGq_utIxRQqdriJUVMvmr) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  The **Shared Storage API**—originally introduced under Google’s Privacy Sandbox initiative to allow privacy-preserving, unpartitioned cross-site data access via isolated worklets—is being deprecated and scheduled for r
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHeVUpT2WkG-jh9PQ428DmTQm9QWqCErfqmKXpXp0TJYcBFFGw9T6qUb8kUvza98cE70jrJvzyLiIqqY8M83NuLfwt53CxHPBx2lkB6yshNGI_08aIK0fBVjJrG9dRX7QPFFzBZ1Pe-16A=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  The **Shared Storage API**—originally introduced under Google’s Privacy Sandbox initiative to allow privacy-preserving, unpartitioned cross-site data access via isolated worklets—is being deprecated and scheduled for r
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFTauhoU18XJZEXtu7Fvs-bkVHBXYOsiN298ZDs_r7--lDb4SDdV_6RgV-j_nxgurxt_eijc56c_-2QGeAI3J-KmUcbwUBpxCugygZM9NgRyniPZeL3cUpfUuZySob73WX5K2XEC-QeAgaavWjPP1fkVuWUjKBbEKoVoQ6V4NImHh-BhZYmygzUDQE8) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  The **Shared Storage API**—originally introduced under Google’s Privacy Sandbox initiative to allow privacy-preserving, unpartitioned cross-site data access via isolated worklets—is being deprecated and scheduled for r
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGd25QfEhUsYuc7FgvPNCk5EI21fATykeuLMJqXrwmg_k37uae6h5uPVo_-ttDlpw_oCKEAJ4yMUlHp6cNM2-4HyxYaBK4ECLo44e4w6Y3mvHrFiVlz_V1VjDB1roMyIi62M1GqHXYj) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  The **Shared Storage API**—originally introduced under Google’s Privacy Sandbox initiative to allow privacy-preserving, unpartitioned cross-site data access via isolated worklets—is being deprecated and scheduled for r
- [Deprecate and Remove Shared Storage API [462465887] - Chromium](https://issues.chromium.org/issues/462465887) *(issues.chromium.org · 2025-11-20T00:00:00)*
  > <strong>Decouple Private Aggregation from Shared Storage</strong> Private Aggregation and Shared Storage are both deprecated and scheduled for removal. To facilitate independent removal of the two features, this CL removes the integration between the...
- [Intent To Deprecate and Remove: Shared Storage API](https://groups.google.com/a/chromium.org/g/blink-dev/c/uh5Ke6qyegc) *(groups.google.com · 2025-11-07T00:00:00)*
  > Following Chrome&#x27;s announcement that the current approach to third-party cookies will be maintained, we are now planning to <strong>deprecate and remove the Shared Storage API</strong> (along with certain other Privacy Sandbox APIs, as outlined ...
- [PSA: Shared Storage API deprecation and removal](https://groups.google.com/a/chromium.org/g/shared-storage-api-announcements/c/QvXkrgoqi80) *(groups.google.com · 2025-12-04T00:00:00)*
  > Following the announcement that Chrome will maintain its current approach to third-party cookies, <strong>the Shared Storage API will be deprecated in Chrome 144</strong>, along with certain other APIs as outlined on the Privacy Sandbox feature statu...
- [Deprecate and Remove: Shared Storage API](https://chromestatus.com/feature/5076349064708096) *(chromestatus.com · 2025-11-05T00:00:00)*
  > We cannot provide a description for this page right now
- [[blink-dev] Intent To Deprecate and Remove: Shared Storage API](http://www.mail-archive.com/blink-dev@chromium.org/msg15141.html) *(mail-archive.com)*
  > - <strong>The “shared-storage” and “shared-storage-select-url” permissions policy-controlled features will be removed along with the APIs</strong>. Since the APIs they control will no longer exist, the permission policies will have no effect and thei...
- [Re: [blink-dev] Intent To Deprecate and Remove: Shared Storage API](http://www.mail-archive.com/blink-dev@chromium.org/msg15156.html) *(mail-archive.com)*
  > * <strong>The “shared-storage” and “shared-storage-select-url” permissions policy-controlled features will be removed along with the APIs</strong>. Since the APIs they control will no longer exist, the permission policies will have no effect and thei...
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=%22Intent+to+Deprecate+and+Remove%22) *(groups.google.com)*
  > Intent to Deprecate and Remove: Private Aggregation API · Protected Audience and Shared Storage removed, this API is no longer reachable.
- [Shared Storage and Private Aggregation Implementation Quickstart | Privacy Sandbox](https://privacysandbox.google.com/private-advertising/shared-storage/api-walkthrough) *(privacysandbox.google.com · 2023-10-23T00:00:00)*
  > This document is a quickstart guide for using Shared Storage and Private Aggregation. You&#x27;ll need an understanding of both APIs because Shared Storage stores the values and Private Aggregation creates the aggregatable reports · Target Audience: ...
- [Storage updates in Android 11 | Android Developers](https://developer.android.com/about/versions/11/privacy/storage) *(developer.android.com)*
  > To read and write to all files in shared storage using this app, you need to have the all files access permission. If your app targets Android 11, both the WRITE_EXTERNAL_STORAGE permission and the WRITE_MEDIA_STORAGE privileged permission no longer ...
- [Overview of shared storage | App data and files | Android Developers](https://developer.android.com/training/data-storage/shared) *(developer.android.com · 2026-03-05T00:00:00)*
  > This document explains how to use shared storage for user data that is accessible to other apps and persists even after app uninstallation.
- [How to Deprecate an API: Smooth Transition Tips](https://blog.treblle.com/best-practices-deprecating-api) *(blog.treblle.com)*
  > Need real-time insight into how your APIs are used and performing? Treblle helps you monitor, debug, and optimize every API request.Explore Treblle · <strong>Send direct emails to all users who are actively using the deprecated API</strong>.
- [What Is API Deprecation? Guidelines for Deprecating Old APIs](https://document360.com/blog/api-deprecation) *(document360.com · 2026-07-23T00:00:00)*
  > Deprecating an API must be planned since customers might still using that version. Here are some guidelines on how to deprecate an older API version
- [How Do I Deprecate My REST API? | Abstract API](https://www.abstractapi.com/guides/other/deprecate-rest-api) *(abstractapi.com · 2025-09-15T00:00:00)*
  > API deprecation is the formal process ... or features. It involves <strong>informing users that a change is coming, offering guidance on how to migrate, and ultimately removing the deprecated functionality</strong>....
- [The Google Privacy Sandbox: The Big Picture and the Privacy Sandbox Browser Elements | Blog](https://theprivacysandbox-com.webflow.io/posts/google-privacy-sandbox-big-picture) *(theprivacysandbox-com.webflow.io)*
  > Introduced in HTML5, they are designed to offload tasks that can be time-consuming or resource-intensive and to overcome the limits of single-threaded JavaScript execution. Workers are relatively heavy-weight, and are not intended to be used in large...
- [The Privacy Sandbox - Chrome Developers](https://chrome.jscn.org/privacy-sandbox) *(chrome.jscn.org)*
  > <strong>A series of proposals to satisfy cross-site use cases without third-party cookies or other tracking mechanisms</strong>.
- [Expanding testing for the Privacy Sandbox for the Web](https://blog.google/products/chrome/update-testing-privacy-sandbox-web/amp) *(blog.google · 2022-07-27T20:26:45)*
  > Improving people&#x27;s privacy, while giving businesses the tools they need to succeed online, is vital to the future of the open web. That&#x27;s why we started the Privacy Sandbox initiative to collaborate with the ecosystem on developing privacy-...
- [Re: [blink-dev] Intent To Deprecate and Remove: Shared Storage API](http://www.mail-archive.com/blink-dev@chromium.org/msg16930.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; Given &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; this, we expect adoption to decrease over time (currently at ~11% &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; &lt;https://chromestatus.com/metrics/feature/timeline/popularity/4263&gt; &gt;&...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Deprecate and Remove Shared Storage API [462465887] - Chromium](https://issues.chromium.org/issues/462465887) *(issues.chromium.org · 2025-11-20T00:00:00)* *(Cites: `https://chromestatus.com/feature/5076349064708096`)*
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
- [Shared Storage API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Shared_Storage_API) *(developer.mozilla.org)*
- [The Privacy Sandbox · GitHub](https://github.com/privacysandbox) *(github.com)*
- [SharedStorage](https://developer.mozilla.org/en-US/docs/Web/API/SharedStorage) *(developer.mozilla.org)*
- [WorkletSharedStorage](https://developer.mozilla.org/en-US/docs/Web/API/WorkletSharedStorage) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 39 result(s) found across 7 planned queries — **21 verified relevant**
  - `"chromestatus.com/feature/5076349064708096" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"wicg.github.io/shared-storage" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Deprecate and Remove: Shared Storage API" API` — *Core feature API query* (6 returned)
  - `"Deprecate and Remove: Shared Storage API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"privacysandbox.com" OR "privacy-preserving" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and Remove: Shared Storage API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and Remove: Shared Storage API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 14 result(s) found — **14 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

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
