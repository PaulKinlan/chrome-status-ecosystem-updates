# Deprecate and Remove: document.requestStorageAccessFor

> **Report Week:** 2026-W41 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

The requestStorageAccessFor (rSAFor) API is an extension to the Storage Access API that allows a top-level site to request access to unpartitioned ("first-party") cookies on behalf of embedded sites. Browsers will have discretion to grant or deny access, with mechanisms like Related Website Sets (RWS) membership as a potential signal. This allows for use of the Storage Access API by top-level sites. Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove rSAFor, as it is only usable in Chrome to request storage access between RWS sites. Related Website Sets will also be deprecated via a separate intent.

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. rSAFor currently has usage on about 0.95% of page loads, but any website relying on successful invocation of rSAFor (i.e. the API returns a promise that resolves) must also have registered a set on the RWS GitHub repository. Any invocations of rSAFor outside of an RWS currently returns a promise that is rejected.


Our metrics suggest that almost all of the usage of rSAFor is from websites that have registered sets. We will continue to monitor usage and aim to drive it down prior to removal by proactively informing set owners of the deprecation timelines and request them to turn down usage. Additionally, other browser engines have not signaled interest in implementing the API, obviating any interoperability concerns.

## Ecosystem Status

- **Momentum:** High (450 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** document.requestStorageAccessFor (rSAFor) was introduced by Chrome as a proprietary extension to the Storage Access API, allowing top-level sites to request unpartitioned cookie access on behalf of embedded origins within Related Website Sets (RWS). Following Google's pivot to retain third-party cookies rather than execute an outright phaseout, Chrome is deprecating and removing rSAFor alongside RWS due to niche adoption and the absence of cross-engine momentum. Its removal eliminates an engine divergence and restores standard, cross-browser cookie access workflows around iframe-driven Storage Access API patterns.

### Recommendations
- Actionable Advice: Immediately audit codebases to eliminate any invocations of document.requestStorageAccessFor and decommission reliance on Related Website Sets. Migrate embedded cross-origin flows to the standard iframe-level document.requestStorageAccess() API or adopt partitioned cookies using CHIPS (Cookies Having Independent Partitioned State).
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE_5ka4a_8B_qZ8u5CIzWWLjLk1u6R2t0T3CgLdN3TE58jK9HRBvEqPUaCMzLVeCIM4rJUi2WSoZmTxUwR5QezUFOBqvSJYCdoi5-xFFxNFlQR2zy7pC-jS4fztmFjOC6e_MqMjOQxUqKugL3UxdijZH05yZ3OzwiBF7z2y9vgjhUBTv9hHlWc=) *(vertexaisearch.cloud.google.com)*
  > Document: requestStorageAccessFor() method - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs Document requestStorageAccessFor() Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) ...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQElBtDMIUVOYpcDeO2IAN2MLTRxJuu_pay-kx4vJgTA4E1ePhZ-xbtH9X3mgg2LlXExfnEpMZhEBCokf_ruZllkCiaUFznkCIwGP2p9BsZLsHb_J3o8ogB6Bg9bqLQWZjAikELMyeQ7) *(vertexaisearch.cloud.google.com)*
  > ### Summary  **`document.requestStorageAccessFor` (rSAFor)** was introduced as a Chromium-specific extension to the standard Storage Access API (SAA). It allowed a top-level page to proactively request unpartitioned cookie access on behalf of embedde
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEV9zWJ0QSt3l9gM5cP_wDSS0KAamhk6lZwrOKXlz4bkW-DU6Z-FPqhuzhYLibbifpGWbFv0IE3Qr0nWxepHKGPY4h1gdgZZDXEtnw2Un2l-l9hj_jvzEU-9HJ2QcuJAuDOpyqickVzUgq44Xeh8HQ2cSo0noVPGw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary  **`document.requestStorageAccessFor` (rSAFor)** was introduced as a Chromium-specific extension to the standard Storage Access API (SAA). It allowed a top-level page to proactively request unpartitioned cookie access on behalf of embedde
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHr6Llre7WCew7vXKHszAYACw_-7XLz54IV5nqvAGVENGBZNri-hHXrVK4nrw8d_F6aZ65DvfiDU9EachjpoytPPaWjPeoI7ziKfEpHpPmuUnFiNuSuynSLBxSjTma9RlV0IBib58gucnslwIg6D5Gpks1BmW6aEMg1) *(vertexaisearch.cloud.google.com)*
  > ### Summary  **`document.requestStorageAccessFor` (rSAFor)** was introduced as a Chromium-specific extension to the standard Storage Access API (SAA). It allowed a top-level page to proactively request unpartitioned cookie access on behalf of embedde
- [xt.pt](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHsUeQp_rnOxhDp4r9Gbyz62cliTtli-Jd_U8z9HfgbjEANlzmWpYP698GtbEkqP_faoXUphQO_Hs3Es2_bAactW3h5pCasldJNCTuEc3ME3E0m6lNcBg84JDOMbVD_ICZlwa_Nm3s1jfu0ieTESLiepC50T5fljuHAvIeLFA5FAV7I7ZrJ7lR0Q-nKBAZJelS3D-8WS0i_qbtjq3bU) *(vertexaisearch.cloud.google.com)*
  > ### Summary  **`document.requestStorageAccessFor` (rSAFor)** was introduced as a Chromium-specific extension to the standard Storage Access API (SAA). It allowed a top-level page to proactively request unpartitioned cookie access on behalf of embedde
- [winaero.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGdekF5PrxwYiIjD6iES6ooq5TosoE9a6_PzVCuoWhDG6MBPjHzR35dNDFRv-xmf4vgFULOJXV7kTtbMk8AXqhby74pVpkEVtGo0i50cf42O4-K9f4VcchLUueb9VTg79Npi5MnEtFw_h-naDLZFTL2MoflVzSddihsy-to) *(vertexaisearch.cloud.google.com)*
  > ### Summary  **`document.requestStorageAccessFor` (rSAFor)** was introduced as a Chromium-specific extension to the standard Storage Access API (SAA). It allowed a top-level page to proactively request unpartitioned cookie access on behalf of embedde
- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ) *(groups.google.com)*
  > Apologies, I used the wrong Chromestatus link (the original feature status), this one is correct: https://<strong>chromestatus.com/feature/5162221567082496</strong>
- [\[blink-dev\] Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg15142.html) *(mail-archive.com)*
  > This allows for use of the Storage Access API by top-level sites. Following Chrome&#x27;s announcement that the current approach to third-party cookies will be maintained, <strong>we are now planning to deprecate and remove rSAFor, as it is only usab...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg17072.html) *(mail-archive.com)*
  > This allows for &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; use of &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; the Storage Access API by top-level sites. Following Chrome&#x27;s &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; announcement &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; that the curren...
- [\[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg15145.html) *(mail-archive.com)*
  > This allows for use of the &gt; Storage Access API by top-level sites. Following Chrome&#x27;s announcement that &gt; the current approach to third-party cookies will be maintained, we are now &gt; planning to deprecate and remove rSAFor, as <strong>...
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=%22Intent+to+Deprecate+and+Remove%22) *(groups.google.com)*
  > [blink-dev] Intent to Deprecate and Remove: Attribution Reporting API · steps 2 and 3. /Daniel On 2026-06-26 10:21, Yoav Weiss (@Shopify) wrote: &gt; LGTM2 &gt; &gt; On Thu, Jun 25, 2026 at 11:12 PM Chris Harrelson &gt; wrote: &gt; &gt; LGTM1 &gt; &g...
- [Google Privacy Sandbox API deprecations](https://learnfocus-sigma.vercel.app/?page=en-git-mdn-browser-compat-data-1762585883240) *(learnfocus-sigma.vercel.app · 2025-11-07T16:01:04)*
  > A number of Google Privacy Sandbox APIs are now deprecated. This is a blanket bug for covering these changes. Chromium (Chrome, Edge 79+, Opera, Samsung Internet) ... Intent to Deprecate and Remove: document.requestStorageAccessFor Intent to Deprecat...
- [Storage Access API \| Privacy Sandbox - Google](https://privacysandbox.google.com/cookies/storage-access-api) *(privacysandbox.google.com · 2023-12-15T00:00:00)*
  > Important: Storage Access Headers cannot be used to request the initial permission. Websites still need to embed an iframe calling document.requestStorageAccess() or document.requestStorageAccessFor() within Related Website Sets to request user permi...
- [Storage Access API \| Privacy Sandbox \| Google for Developers](https://developers.google.com/privacy-sandbox/3pcd/storage-access-api) *(developers.google.com · 2023-12-15T00:00:00)*
  > For example, images or scripts which are restricted by cookies, which site owners may want to include directly in the top-level document rather than in an iframe. To address this use case Chrome has proposed an extension to the Storage Access API whi...
- [Storage Access API for Embedded Content \| BotBrowser Blog](https://botbrowser.io/en/blog/storage-access-api-and-embedded-content) *(botbrowser.io · 2026-10-02T00:00:00)*
  > A feature check such as &#x27;requestStorageAccess&#x27; in document tells you that the method exists. It does not tell you whether the call will prompt, resolve silently, or reject. Consult the compatibility tables on MDN and vendor guidance such as...
- [Updates to the Storage Access API \| WebKit](https://webkit.org/blog/11545/updates-to-the-storage-access-api) *(webkit.org · 2021-02-10T18:29:51)*
  > If a request for storage access is granted to embedee.example, access is now granted to all embedee.example resource loads under the current first party webpage. This includes sibling embedee.example iframes but also other, non-document resources.
- [How to Deprecate a REST API: The Complete Developer's Guide - Zuplo](https://zuplo.com/learning-center/deprecating-rest-apis) *(zuplo.com · 2024-10-24T00:00:00)*
  > API Deprecation is the process of signaling to developers that an API, or a part of it (ex. endpoint or field), is scheduled to be discontinued or replaced.
- [How to deprecate content — Read the Docs user documentation](https://docs.readthedocs.com/platform/stable/guides/deprecating-content.html) *(docs.readthedocs.com)*
  > When you deprecate a feature from your project, you may want to deprecate its docs as well, and stop your users from reading that content. Deprecating content may sound as easy as delete it, but doing that will break existing links, and you don’t nec...
- [Document API: requestStorageAccess \| Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/mdn-api_document_requeststorageaccess) *(caniuse.com)*
  > &quot;Can I use&quot; provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers.
- [Privacy Sandbox History and Timeline - The Third-Party Cookie Phase-Out Plan, Its Reversal, API Deprecation and Removal in Chrome, and What Remains Supported \| hidekazu-konishi.com](https://hidekazu-konishi.com/entry/privacy_sandbox_history_and_timeline.html) *(hidekazu-konishi.com · 2026-10-02T00:00:01)*
  > Where the deprecation in Chrome 144 is written: The deprecation of Attribution Reporting, Related Website Sets, document.requestStorageAccessFor, and Topics in Chrome 144 is written in the blink-dev Intents and, except for Attribution Reporting, in c...
- [PWABuilder Suite Documentation - test](https://docs.pwabuilder.com) *(docs.pwabuilder.com)*
  > Documentation for building great progressive web apps with the PWABuilder tooling suite.
- [Overview \| Magento PWA Documentation](https://magento.github.io/pwa-studio/technologies/overview) *(magento.github.io)*
  > Magento’s PWA Studio is a set of tools that let you create Progressive Web Apps (PWA). This page provides a brief description of a Progressive Web App and its relationship to the PWA Studio project · A Progressive Web App, or PWA, is a term for any w...
- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ/m/Bobim4thBQAJ) *(groups.google.com)*
  > This allows for use of the Storage Access API by top-level sites. Following Chrome&#x27;s announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove rSAFor, as <strong>it is only usab...
- [First-Party Sets: developer guide - Chrome Developers](https://developer.chrome.com/en/docs/privacy-sandbox/first-party-sets-integration) *(developer.chrome.com · 2023-01-12T00:00:00)*
  > To address this, Chrome has implemented a way for top-level sites to request storage access on behalf of specific origins with Document.requestStorageAccessFor() (rSAFor).
- [Related Website Sets: developer guide - Chrome for Developers](https://developer.chrome.com/docs/privacy-sandbox/related-website-sets-integration) *(developer.chrome.com)*
  > Note that to protect the integrity of the embedded origin, this checks only permissions granted by the top-level document using <strong>document.requestStorageAccessFor</strong>.
- [The origin private file system \| Articles \| web.dev](https://web.dev/articles/origin-private-file-system) *(web.dev · 2023-06-08T00:00:00)*
  > When you think of files on your computer, you probably think about a file hierarchy: files organized in folders that you can explore with your operating system&#x27;s file explorer. For example, on Windows, for a user called Tom, their To Do list mig...
- [Storage for the web \| Articles \| web.dev](https://web.dev/articles/storage-for-the-web) *(web.dev · 2024-09-23T00:00:00)*
  > Safari (both desktop and mobile) appears to allow about 1GB. When the limit is reached, Safari will prompt the user, increasing the limit in 200MB increments. I was unable to find any official documentation on this.
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg17078.html) *(mail-archive.com)*
  > False Estimated milestones Deprecate in M144, and target M150 for removal. Link to entry on the Chrome Platform Status https://chromestatus.com/feature/5122534152863744 This intent message was generated by Chrome Platform Status &lt;https://chromesta...
- [Privacy Sandbox feature status](https://privacysandbox.google.com/overview/status) *(privacysandbox.google.com · 2026-08-14T00:00:00)*
  > Intent to Deprecate and Remove: document.requestStorageAccessFor · Including requestStorageAccessFor and Related Website Partition. Chrome Platform Status. Scheduled for phaseout. Explainer: Mitigating API Misuse for Browser Re-Identification. ... Ch...
- [Intent to Deprecate and Remove: Related Website Sets (RWS)](https://groups.google.com/a/chromium.org/g/blink-dev/c/V-wPXyoruac) *(groups.google.com)*
  > to Daniel Bratell, Mike Taylor, Rick Byers, blink-dev, Sathish Manickam, Kaustubha Govind · Hey, all, wanted to share a brief update on our progress here. As noted in my original email, our target to remove Related Website Sets and requestStorageAcce...
- [Privacy Sandbox feature status](https://archive.is/YsOVp) *(archive.is · 2025-12-21T04:27:11)*
  > Intent to Deprecate and Remove: document.requestStorageAccessFor · Including requestStorageAccessFor and Related Website Partition. Chrome Platform Status. Scheduled for phaseout. Explainer: Mitigating API Misuse for Browser Re-Identification. ... Ch...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5162221567082496`)*
  > Apologies, I used the wrong Chromestatus link (the original feature status), this one is correct: https://<strong>chromestatus.com/feature/5162221567082496</strong>

## 📚 Platform Documentation & Specifications

- [Document: requestStorageAccess() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/requestStorageAccess) *(developer.mozilla.org)*
- [content/files/en-us/web/api/document/requeststorageaccess/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/document/requeststorageaccess/index.md) *(github.com)*
- [content/files/en-us/web/api/document/hasstorageaccess/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/document/hasstorageaccess/index.md) *(github.com)*
- [Document: requestStorageAccessFor() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/requestStorageAccessFor) *(developer.mozilla.org)*
- [Storage Access API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API) *(developer.mozilla.org)*
- [GitHub - privacycg/requestStorageAccessFor: A proposed extension to the Storage Access API and discussion of how it may be integrated with First-Party Sets. · GitHub](https://github.com/privacycg/requestStorageAccessFor) *(github.com)*
- [Remove PWA Category · Issue #15535 · GoogleChrome/lighthouse](https://github.com/GoogleChrome/lighthouse/issues/15535) *(github.com)*
- [Related Website Sets - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API/Related_website_sets) *(developer.mozilla.org)*
- [chrome-storage-access-api/README.md at main · cfredric/chrome-storage-access-api](https://github.com/cfredric/chrome-storage-access-api/blob/main/README.md) *(github.com)*
- [related-website-sets/RWS-Submission\_Guidelines.md at main · GoogleChrome/related-website-sets](https://github.com/GoogleChrome/related-website-sets/blob/main/RWS-Submission_Guidelines.md) *(github.com)*
- [Consider requestStorageAccessFor Method · Issue #107 · privacycg/storage-access](https://github.com/privacycg/storage-access/issues/107) *(github.com)*
- [requestStorageAccessFor/index.bs at main · privacycg/requestStorageAccessFor](https://github.com/privacycg/requestStorageAccessFor/blob/main/index.bs) *(github.com)*
- [Reputation attack on third parties through rSAFor prompts · Issue #29 · privacycg/requestStorageAccessFor](https://github.com/privacycg/requestStorageAccessFor/issues/29) *(github.com)*
- [Consider patching up permissions query algorithm for "storage-access" to consider "top-level-storage-access" · Issue #18 · privacycg/requestStorageAccessFor](https://github.com/privacycg/requestStorageAccessFor/issues/18) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 50 result(s) found across 11 planned queries — **39 verified relevant**
  - `"chromestatus.com/feature/5162221567082496" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"privacycg.github.io/requestStorageAccessFor" -site:privacycg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"Deprecate and Remove: document.requestStorageAccessFor" API` — *Core feature API query* (6 returned)
  - `"Deprecate and Remove: document.requestStorageAccessFor" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"document.requeststorageaccessfor" OR "0.95" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and Remove: document.requestStorageAccessFor" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and Remove: document.requestStorageAccessFor" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"document.requestStorageAccessFor" site:developer.chrome.com OR site:web.dev` — *Finds official Chrome guides, documentation, and deprecation notices regarding requestStorageAccessFor and migration strategies.* (5 returned)
  - `"document.requestStorageAccessFor" (promise OR then OR catch) ("Related Website Sets" OR RWS)` — *Locates concrete JavaScript code examples and implementation patterns showing how sites handle requestStorageAccessFor promises within Related Website Sets.* (6 returned)
  - `"requestStorageAccessFor" "Intent to Deprecate and Remove" OR "Intent to Remove" blink-dev` — *Surfaces the Blink developer intent thread, web platform release announcements, and browser vendor timelines for API phase-out.* (8 returned)
  - `"requestStorageAccessFor" site:github.com/privacycg OR site:github.com/GoogleChrome` — *Retrieves developer discussions, spec issues, and consensus tracking on the PrivacyCG repository and Chromium tracking issues.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 27 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5162221567082496)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5162221567082496)
- [Specification](https://privacycg.github.io/requestStorageAccessFor)
