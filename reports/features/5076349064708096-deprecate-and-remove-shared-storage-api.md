# Deprecate and Remove: Shared Storage API

> **Report Week:** 2026-W39 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

The Shared Storage API is a privacy-preserving web API to enable storage that is not partitioned by first-party site.  Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Shared Storage API (along with certain other Privacy Sandbox APIs, as outlined on the Privacy Sandbox feature status page).  \[0\]: https://privacysandbox.com/news/privacy-sandbox-next-steps/

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. Given this, we expect adoption to decrease over time (currently at ~11% of page loads) as the main use cases for Shared Storage will remain possible in Chrome using third-party cookies. Further, other browser engines have not signaled interest in launching the API. See also the initial public proposal below.

## Ecosystem Status

- **Momentum:** High (490 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Opposed
- **Executive Take:** Following Chrome's decision to retain support for third-party cookies, Google has scheduled the deprecation and removal of the Shared Storage API by Chrome 153 alongside several other Privacy Sandbox components. The API struggled with declining real-world usage and remained strictly Chromium-only throughout its lifecycle. Its retirement effectively closes the chapter on Chrome's custom unpartitioned storage worklet architecture.

### Recommendations
- Actionable Advice: Audit your applications to purge all references to \`sharedStorage\` methods (such as \`addModule\`, \`run\`, and \`selectURL\`) before Chrome 153 to prevent unhandled script exceptions. For cross-context state or measurement needs, transition back to standard third-party cookie handling or the standardized Storage Access API.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFIEe9CyygABIyVy2DBjVFs6XFGrViJTUluwkv5RP6i9uyC8M_098o0gMaCZzzTvTenYRvUjFT-NrCG9LFOJSaHrzZgcIaGA2zAmXBuB9ZGgstmkY9_Tqvr8dZGhtg8asFf_ONALJnDRS4tGP80CXjQUsq8lD0ffum2ENdK7bWRJpa_homQ2j0=) *(vertexaisearch.cloud.google.com)*
  > Intent To Deprecate and Remove: Shared Storage API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent To Deprecate and Remove: Shared Storage API ...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH8_B1ktIrEERizZ8yC6ZMqSHAN6zTC3P0PDo3njAyKGEQToIesfCbSbWPVc06rAZa1XbMMP18vxvPZLivZUrOfvfjkpwBuqFcPocdNO33lh_arL-VWr6sE_p37StK_HoNumdMIDhEo6eQeV08cn82zEdv1AEcDu1I=) *(vertexaisearch.cloud.google.com)*
  > Intent to Experiment: Shared Storage API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Shared Storage API 2,057 views Skip to ...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEetFsamGULE94q-2_DVGMnMtDVIOqOaZRds2HoamY4TX-ZdVmHEioss7kXCDaz4SZVrtj00FEtSlEwNDvn7iDeNmbWDxTMvS4TO7IwWfJklIP-Y5YuM_dFrU4O0VwHF8cGUsySQyOycrCofSv4xaSjuvfmK4A_Vd4=) *(vertexaisearch.cloud.google.com)*
  > Intent to Ship: Shared Storage API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Shared Storage API 3,225 views Skip to first unread...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFdLW4UJeRLBVkp_Mq4lvIs3iDtKlbRIIx77lXDVZdXJwhn-iwdCy0QClxoLNdvaJyVjIOQWeAFXmaqY2b21184Ge871eeNDVKzVeaX0aN0ZNcWg5S1hCRgbEzKrx_m8XIBuqty1dhfLNChPThkBUbRUJx2XstPjSVQ6UAzlPIeJSWaJ_WcRhamsfI_zOqUBg==) *(vertexaisearch.cloud.google.com)*
  > PSA: Shared Storage API deprecation and removal Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; PSA: Shared Storage API deprecation and removal 107 vi...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGEJTvL0rkUFm4hJnEYsCZ3wLgwfymhiYHkqc-jsc5KrjPQ9Hbt2qKnD_0b07ES6Ohku_z-ElILFcSHDkgkE1AfcQAUe-eT-PqsqEVDqsO_H1JqptK6rpN7q09lYcyoJP2ZXEN7) *(vertexaisearch.cloud.google.com)*
  > Chrome 144 | Release notes | Chrome for Developers التخطّي إلى المحتوى الرئيسي / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภา...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFvfMooZfNQYZvsDR1O4GqsRCSCzqzfqFm_LZf2c_OfIB4oqSMDA_8AF3yOFkqNschG0jXDh7O6vd18hMHYXhMczQDWzCec4Ctm0z1vTlNeLHXKpd6OWkxTslY8WwgOMv5TGxfc) *(vertexaisearch.cloud.google.com)*
  > Chrome 153 | Release notes | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中...
- [arxiv.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHXKcZKwoyubDzO4OvUWFKzfxmXpYNRRnod6DXT2KejEu5IyAWhm_Xl_B_437wsRx-XpSbqTtQG481G9SmH5xvN0Q6F-F8SNJZBw2mx0fWstTzJjWcKAVVxYw==) *(vertexaisearch.cloud.google.com)*
  > Lessons from the Adoption and Deprecation of the Privacy Sandbox Web APIs Report GitHub Issue × Title: Content selection saved. Describe the issue below: Description: arXiv is now an independent nonprofit! Learn more &times; Back to arXiv License: CC...
- [secureprivacy.ai](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFMTu5bYnTRKGYdo4lhFLMannjjG-nyLciJXC7-IuSpCYoCxkBAtBNAh1n7JkvsK6yEqcICm2z3VieAwMba4JpSs31vGwMmh_hBtUX0Sa5eTkkO45hd186m2CK9rdLX1POH_AVVfFchNfnb8wxDZD_e-W1c7t7-hJk7_0uOmIlOfA9VSbhSFwdr5GXugSBO3oUk015UP0iaN4Y=) *(vertexaisearch.cloud.google.com)*
  > Google Killed Privacy Sandbox: What Actually Changes for Cookie Consent in 2026 | Secure Privacy Blog Skip to main content Back to Blog Cookie Consent Google Killed Privacy Sandbox: What Actually Changes for Cookie Consent in 2026 Google isn&#x27;t d...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG03C1ajVUY5NG3i9_ar_w5u6jPAuhw78a9z9lv0x6TNgYzJ8Lh9veEjfm8h6h5xxj-y8T0B2UQL9d-mg8MZ_5J9wigRIydXy1Sr85fFK1hGTDeJaV2lb3TPVSTQCW-6AaS3YuQaZcP8oavv9gh4iuCu6TIkBiABWDV) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  The **Shared Storage API** was introduced as part of Google’s Privacy Sandbox as an unpartitioned, privacy-preserving storage mechanism allowing writes across sites and reads only within isolated worklets (via output g
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE9z1P_sA_kQtvrZxFqwBL7XpmZ3WzR_m0Ro1lzVLxg5Uhfk9QbbsDU-SqbJ1tbVpRCk182SBJtZTszbiriVGD1wv_5aMV763VV5VSFt-axg4mmBQtBSPNiUKr6wlXhAlQXyiyogzYkdhXbH-M9ibzPDxliPA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  The **Shared Storage API** was introduced as part of Google’s Privacy Sandbox as an unpartitioned, privacy-preserving storage mechanism allowing writes across sites and reads only within isolated worklets (via output g
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGOFLup7hCkHg_PVu7h-BtyhMK2vSMlmHZcfSb0gB2aGhwUzIIxnGynIoLWiUQn4_JcGvWov8dCvKODZze4q9fdwfGbD8kiVtWe8e0eOIpoGYq80ZxCXJSEctX8pg2drBqHdC92RY7wEDuPeLuAxt0U77BGG-8x19iqWg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  The **Shared Storage API** was introduced as part of Google’s Privacy Sandbox as an unpartitioned, privacy-preserving storage mechanism allowing writes across sites and reads only within isolated worklets (via output g
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGvF2utrIPxLgEvm8T1u0wFfU_MxHHKkM8etXOCTqW6x5Gzl44kpPSXQ8tgdYXEf385wH3N9m8vzxtYKmYVp7KHHaqYCVFwYXrimAEJuHaBfocA65PrjAjCy8dtl0np_dE0UGMZEJc_esA=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  The **Shared Storage API** was introduced as part of Google’s Privacy Sandbox as an unpartitioned, privacy-preserving storage mechanism allowing writes across sites and reads only within isolated worklets (via output g
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFi_5etVIn7Z3j8WQ0GWptwY36xVolugO00UDr3RT0AbtMAwaq5zut7mzIyEUsG-Z3I-buuL80EeujNdxcBoyt6Am_WrC4jLYLzw6I4ajtL6ckI9THITJgCHVHW6e_xsVIMVObfZf8bXFQ=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  The **Shared Storage API** was introduced as part of Google’s Privacy Sandbox as an unpartitioned, privacy-preserving storage mechanism allowing writes across sites and reads only within isolated worklets (via output g
- [arxiv.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHnVb_7AJK4MrHIUAsnLXKfxCRAjEz3KYyU8fD2Dac53z0oI_wekOmrMbUCWr_XbRqVpfjdnCKCwrsPrCdX-ZvHYx5wz_2hWBtrU9cK3G02ta8hHfvbWgeHzg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  The **Shared Storage API** was introduced as part of Google’s Privacy Sandbox as an unpartitioned, privacy-preserving storage mechanism allowing writes across sites and reads only within isolated worklets (via output g
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
- [Overview of shared storage \| App data and files \| Android Developers](https://developer.android.com/training/data-storage/shared) *(developer.android.com · 2026-03-05T00:00:00)*
  > This document explains how to use shared storage for user data that is accessible to other apps and persists even after app uninstallation.
- [How to Deprecate an API: Smooth Transition Tips](https://blog.treblle.com/best-practices-deprecating-api) *(blog.treblle.com)*
  > Need real-time insight into how your APIs are used and performing? Treblle helps you monitor, debug, and optimize every API request.Explore Treblle · <strong>Send direct emails to all users who are actively using the deprecated API</strong>.
- [How Do I Deprecate My REST API? \| Abstract API](https://www.abstractapi.com/guides/other/deprecate-rest-api) *(abstractapi.com · 2025-09-15T00:00:00)*
  > API deprecation is the formal process ... or features. It involves <strong>informing users that a change is coming, offering guidance on how to migrate, and ultimately removing the deprecated functionality</strong>....
- [Deprecated and Removed Features \| Adobe Experience Manager as a Cloud Service](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/release-notes/deprecated-removed-features) *(experienceleague.adobe.com · 2026-08-03T00:00:00)*
  > This section reflects API removal guidance for various APIs in the tables above. To identify which deprecated Java APIs your code is using, integrate the AEM as a Cloud Service SDK Build Analyzer Maven Plugin into your Maven project and run it locall...
- [The Google Privacy Sandbox: The Big Picture and the Privacy Sandbox Browser Elements \| Blog](https://theprivacysandbox-com.webflow.io/posts/google-privacy-sandbox-big-picture) *(theprivacysandbox-com.webflow.io)*
  > Introduced in HTML5, they are designed to offload tasks that can be time-consuming or resource-intensive and to overcome the limits of single-threaded JavaScript execution. Workers are relatively heavy-weight, and are not intended to be used in large...
- [The Privacy Sandbox - Chrome Developers](https://chrome.jscn.org/privacy-sandbox) *(chrome.jscn.org)*
  > <strong>A series of proposals to satisfy cross-site use cases without third-party cookies or other tracking mechanisms</strong>.
- [Expanding testing for the Privacy Sandbox for the Web](https://blog.google/products/chrome/update-testing-privacy-sandbox-web/amp) *(blog.google · 2022-07-27T20:26:45)*
  > Improving people&#x27;s privacy, while giving businesses the tools they need to succeed online, is vital to the future of the open web. That&#x27;s why we started the Privacy Sandbox initiative to collaborate with the ecosystem on developing privacy-...
- [Re: \[blink-dev\] Intent To Deprecate and Remove: Shared Storage API](http://www.mail-archive.com/blink-dev@chromium.org/msg16930.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; Given &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; this, we expect adoption to decrease over time (currently at ~11% &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; &lt;https://chromestatus.com/metrics/feature/timeline/popularity/4263&gt; &gt;&...
- [Intent to Deprecate and Remove: Private Aggregation API](https://groups.google.com/a/chromium.org/g/blink-dev/c/Ld7avyD0U0Q) *(groups.google.com · 2025-11-07T00:00:00)*
  > Following Chrome&#x27;s announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Private Aggregation API (along with certain other Privacy Sandbox APIs, as outlined on the Priva...
- [Intent to Deprecate & Remove: Third-Party Cookies](https://groups.google.com/a/chromium.org/g/blink-dev/c/RG0oLYQ0f2I/m/xMSdsEAzBwAJ) *(groups.google.com)*
  > As described in the summary, the Privacy Sandbox wants to ensure that a vibrant, freely accessible web can exist even as we roll out strong user protections and we will continue to work with web developers to understand their use cases and ship the r...
- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ) *(groups.google.com)*
  > Chrome has announced that the current approach to third-party cookies will be maintained. rSAFor currently has usage on about 0.95% of page loads, but any website relying on successful invocation of rSAFor (i.e. the API returns a promise that resolve...
- [Request for Deprecation Trial: Deprecate Third-Party Cookies](https://groups.google.com/a/chromium.org/g/blink-dev/c/yGUdvW_t_y0/m/1MVs-PuKAgAJ) *(groups.google.com)*
  > The primary goal of the deprecation trial is to reduce the amount of broken user-visible experiences as third-party cookies are phased out. Third-party embedded content or services with these kinds of experiences can use the trial to continue to rece...
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=%22Intent+to+Deprecate+and+Remove%22) *(groups.google.com)*
  > Intent to Deprecate and Remove: Private Aggregation API · Protected Audience and Shared Storage removed, this API is no longer reachable.
- [Intent to Deprecate and Remove: Related Website Sets (RWS)](https://groups.google.com/a/chromium.org/g/blink-dev/c/V-wPXyoruac) *(groups.google.com)*
  > This is facilitated through the use of the Storage Access API (SAA) and requestStorageAccessFor (rSAFor). RWS was designed for use in a browser without third-party cookies. Following Chrome&#x27;s announcement that the current approach to third-party...
- [Intent to Ship: Shared Storage API](https://groups.google.com/a/chromium.org/g/blink-dev/c/dZ0NRwh7cvs) *(groups.google.com · 2023-06-20T00:00:00)*
  > In our favor is the fact that while a very large fraction of page loads may be impacted, only a handful of companies are expected to call the API and they&#x27;re more active/responsive than many sites. Also, we can make the deprecation non-breaking ...

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
- [SharedStorage - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/SharedStorage) *(developer.mozilla.org)*
- [SharedStorageWorklet - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/SharedStorageWorklet) *(developer.mozilla.org)*
- [GitHub - WICG/shared-storage: Explainer for proposed web platform Shared Storage API · GitHub](https://github.com/WICG/shared-storage) *(github.com)*
- [WindowSharedStorage: selectURL() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowSharedStorage/selectURL) *(developer.mozilla.org)*
- [SharedStorageOperation - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/SharedStorageOperation) *(developer.mozilla.org)*
- [developer.chrome.com/site/en/docs/privacy-sandbox/shared-storage/ab-testing/index.md at main · GoogleChrome/developer.chrome.com](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/privacy-sandbox/shared-storage/ab-testing/index.md) *(github.com)*
- [SharedStorageSelectURLOperation - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/SharedStorageSelectURLOperation) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 61 result(s) found across 12 planned queries — **35 verified relevant**
  - `"chromestatus.com/feature/5076349064708096" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"wicg.github.io/shared-storage" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Deprecate and Remove: Shared Storage API" API` — *Core feature API query* (6 returned)
  - `"Deprecate and Remove: Shared Storage API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"privacysandbox.com" OR "privacy-preserving" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and Remove: Shared Storage API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and Remove: Shared Storage API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Shared Storage API" (deprecate OR deprecated OR removal) "Privacy Sandbox" (migration OR alternative)` — *Finds articles and developer guidance discussing the implications of deprecating the Shared Storage API and how to adapt existing workflows.* (8 returned)
  - `"window.sharedStorage" ("sharedStorage.selectURL" OR "sharedStorage.run") worklet javascript example` — *Surfaces real-world JavaScript code snippets and worklet implementation patterns using the Shared Storage API.* (8 returned)
  - `"Shared Storage API" (deprecate OR remove) "third-party cookies" site:groups.google.com/a/chromium.org/g/blink-dev` — *Discovers the official Intent to Deprecate and Remove thread on blink-dev along with Chromium developer feedback.* (8 returned)
  - `"Shared Storage API" ("Privacy Sandbox") (adoption OR timeline OR removed) "third-party cookies"` — *Retrieves industry reaction, adoption metrics, and reporting on Chrome's revised Privacy Sandbox roadmap impacting Shared Storage.* (8 returned)
  - `"wicg.github.io/shared-storage" OR "Shared Storage" (issue OR deprecation OR "third-party cookies") site:github.com/WICG/shared-storage` — *Tracks open specification issues and vendor discussions surrounding the deprecation and engine consensus on the WICG repository.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **14 verified relevant**
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
