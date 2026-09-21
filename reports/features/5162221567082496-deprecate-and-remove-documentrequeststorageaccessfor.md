# Deprecate and Remove: document.requestStorageAccessFor

> **Report Week:** 2026-W39 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

The requestStorageAccessFor (rSAFor) API is an extension to the Storage Access API that allows a top-level site to request access to unpartitioned ("first-party") cookies on behalf of embedded sites. Browsers will have discretion to grant or deny access, with mechanisms like Related Website Sets (RWS) membership as a potential signal. This allows for use of the Storage Access API by top-level sites. Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove rSAFor, as it is only usable in Chrome to request storage access between RWS sites. Related Website Sets will also be deprecated via a separate intent.

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. rSAFor currently has usage on about 0.95% of page loads, but any website relying on successful invocation of rSAFor (i.e. the API returns a promise that resolves) must also have registered a set on the RWS GitHub repository. Any invocations of rSAFor outside of an RWS currently returns a promise that is rejected.


Our metrics suggest that almost all of the usage of rSAFor is from websites that have registered sets. We will continue to monitor usage and aim to drive it down prior to removal by proactively informing set owners of the deprecation timelines and request them to turn down usage. Additionally, other browser engines have not signaled interest in implementing the API, obviating any interoperability concerns.

## Ecosystem Status

- **Momentum:** High (280 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** document.requestStorageAccessFor (rSAFor) was a Chromium-specific extension designed to allow top-level sites to request unpartitioned cookie access on behalf of embedded origins within a Related Website Set (RWS). Following Google's strategic retreat from unilaterally phasing out third-party cookies, Chrome announced the deprecation and planned removal of both RWS and rSAFor by Chrome 153. Because Gecko and WebKit firmly rejected RWS and rSAFor from inception, the API never achieved cross-engine consensus and was confined entirely to Chromium.

### Recommendations
- Actionable Advice: Audit existing codebases immediately to remove document.requestStorageAccessFor() calls, as promises will unconditionally reject and the method will be excised from the Document interface. For genuine cross-site state sharing across branded surfaces, migrate to standard iframe-mediated document.requestStorageAccess(), partitioned cookies (CHIPS), or canonical OAuth/OIDC redirect patterns.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEhMkfOE0Zgw6Oz_Px6qZqWvlv6WV9pe7G0_BcbS1HomV_FpIcfUr4S89_WCUZ8zkScM_ePCg_7sgmmQFWRcQZ0bdyms6GPLCKO40yBxRM7fkA3SxARiB1rROWIFEjIeNm0_UZSjWl29LN44xhdSkdGhHjI0z7mTblQPZ9nlAbj7lmrdejbig==) *(vertexaisearch.cloud.google.com)*
  > Document: requestStorageAccessFor() method - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs Document requestStorageAccessFor() Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) ...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGqsDj1odbqS86kTASJoaonIEKJBVEp0PgE0_49BlhjoBLQPl8yiONkhkyFmRCO4NHLbcV6hclcyPp49e895uZQqIaro5261bWY3YN-ERUN0BL9Z-nKAXeJ_K46a3-5fWyRL0Hg2veIGgCz258=) *(vertexaisearch.cloud.google.com)*
  > Google Privacy Sandbox API deprecations · Issue #28417 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to ref...
- [consentmodehq.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFGfbTIVPQ82D4s9ZcFpLDXMlFdg4_GtPOp4_p9Z4lqPVpVhI5LXFstyxruPemeE1sfUTM_6uTLniVEUHYrX79m-gI9WZPmIFLmvFX7C7XFt01dILyG7aP9r9DFH8f6KcVf5C393t0eFMyQB37l6rEkL104QWD2Z_N-GpFq21TYLEe6IR0bXOslWQ==) *(vertexaisearch.cloud.google.com)*
  > Cross-Domain Consent After Related Website Sets - Consent Mode HQ Skip to content ● LIVE PRACTICAL · INDEPENDENT · SEO-FIRST | ISSUE 075 · MON 09.21.2026 ⌘K Wire / Cookie Audits & Scanners / Article ┌── POST 09.14 · Cookie Audits & Scanners · 6 min r...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFjDDhNdnLrFTnHCm8nw70M7mml2N6PXR_GhoXS6kW5nDCxlHIPugpNyxHMCCB62SX9xuqhZi-bFsXv8ue854lEXBAXYBoDYHtaATAcVjcdX4e1WbTQYNt2QYzuHptCvVAridpP1hZwi3Yp_snYLw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  The **`document.requestStorageAccessFor()` (rSAFor)** method was introduced as a Chromium-specific extension to the standard Storage Access API (SAA). While the standard `document.requestStorageAccess()` method is call
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGW14TSImN6Yny-U7WDe6DeXXHE1nInnBp9diAj7UZtqrjTmjp90H9o0_c9aL3PJ3BYiOVw4n21WWFh2MHYlFEWxAZ09IIv7tnqCoFbpq3PhVUQSi4B92fNj6rrtw0TXpr31BjwtUk-jbwy6PnjCBx13w==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  The **`document.requestStorageAccessFor()` (rSAFor)** method was introduced as a Chromium-specific extension to the standard Storage Access API (SAA). While the standard `document.requestStorageAccess()` method is call
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHEBHnZ9U6bHJKnPgekOVlYOX7M0kwmfcN3O-_qh7_Vb20CfW9cMr89HijxRigKD9XbPqjRml2TrnciC52JkYr_SW_CrwxFc-_mzP_zSuXPYS59vWpFMm2XsSIy_LGKdY056PvCEQCyli0cs35m7vFPN7YOLJ7m) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  The **`document.requestStorageAccessFor()` (rSAFor)** method was introduced as a Chromium-specific extension to the standard Storage Access API (SAA). While the standard `document.requestStorageAccess()` method is call
- [dbio.link](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE3qxT2P4XPMstNYhMSSLynxTWCNC085U8SchqTladFeln_rGvLqZEXTag8AH_7kacjhtwxFqrrgKIlQkm-kUQpzVl50yJbEber4TvC5UB02TVV9gLrKGTvHdbi4ArgdvcFYvBlKra_6s0AeLURri8Ci3cqh2iIk0c0SuEQACEQxCvie-6am3YpX2po_Ltqe2IPPf-f9D-Ol4qY1KkfPp9G2Oo0qVTe-dX2_v7Jlhd-) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  The **`document.requestStorageAccessFor()` (rSAFor)** method was introduced as a Chromium-specific extension to the standard Storage Access API (SAA). While the standard `document.requestStorageAccess()` method is call
- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ) *(groups.google.com)*
  > Apologies, I used the wrong Chromestatus link (the original feature status), this one is correct: https://<strong>chromestatus.com/feature/5162221567082496</strong>
- [\[blink-dev\] Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg15142.html) *(mail-archive.com)*
  > This allows for use of the Storage Access API by top-level sites. Following Chrome&#x27;s announcement that the current approach to third-party cookies will be maintained, <strong>we are now planning to deprecate and remove rSAFor, as it is only usab...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg17072.html) *(mail-archive.com)*
  > This allows for &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; use of &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; the Storage Access API by top-level sites. Following Chrome&#x27;s &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; announcement &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; that the curren...
- [\[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg15145.html) *(mail-archive.com)*
  > This allows for use of the &gt; Storage ... approach to third-party cookies will be maintained, <strong>we are now &gt; planning to deprecate and remove rSAFor, as it is only usable in Chrome to &gt; request storage access between RWS sites</strong>....
- [Google Privacy Sandbox API deprecations](https://learnfocus-sigma.vercel.app/?page=en-git-mdn-browser-compat-data-1762585883240) *(learnfocus-sigma.vercel.app · 2025-11-07T16:01:04)*
  > A number of Google Privacy Sandbox APIs are now deprecated. This is a blanket bug for covering these changes. Chromium (Chrome, Edge 79+, Opera, Samsung Internet) ... Intent to Deprecate and Remove: document.requestStorageAccessFor Intent to Deprecat...
- [Storage Access API \| Privacy Sandbox \| Google for Developers](https://developers.google.com/privacy-sandbox/3pcd/storage-access-api) *(developers.google.com · 2023-12-15T00:00:00)*
  > For example, images or scripts which are restricted by cookies, which site owners may want to include directly in the top-level document rather than in an iframe. To address this use case Chrome has proposed an extension to the Storage Access API whi...
- [Updates to the Storage Access API \| WebKit](https://webkit.org/blog/11545/updates-to-the-storage-access-api) *(webkit.org · 2021-02-10T18:29:51)*
  > If a request for storage access is granted to embedee.example, access is now granted to all embedee.example resource loads under the current first party webpage. This includes sibling embedee.example iframes but also other, non-document resources.
- [How to Deprecate a REST API: The Complete Developer's Guide - Zuplo](https://zuplo.com/learning-center/deprecating-rest-apis) *(zuplo.com · 2024-10-24T00:00:00)*
  > Deprecating an API endpoint involves <strong>updating your API documentation and specifications to indicate the deprecation</strong>. ... paths: /v1/old-endpoint: get: deprecated: true summary: &quot;Deprecated endpoint for retrieving user data&quot;...
- [How to deprecate content — Read the Docs user documentation](https://docs.readthedocs.com/platform/stable/guides/deprecating-content.html) *(docs.readthedocs.com)*
  > Deprecating content may sound as easy as delete it, but doing that will break existing links, and you don’t necessary want to make the content inaccessible. Here you’ll find some tips on how to use Read the Docs to deprecate your content progressivel...
- [Document API: requestStorageAccess \| Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/mdn-api_document_requeststorageaccess) *(caniuse.com)*
  > &quot;Can I use&quot; provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers.
- [PWABuilder Suite Documentation - test](https://docs.pwabuilder.com) *(docs.pwabuilder.com)*
  > Documentation for building great progressive web apps with the PWABuilder tooling suite.
- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ/m/Bobim4thBQAJ) *(groups.google.com)*
  > This allows for use of the Storage Access API by top-level sites. Following Chrome&#x27;s announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove rSAFor, as <strong>it is only usab...
- [Privacy Sandbox feature status](https://privacysandbox.google.com/overview/status) *(privacysandbox.google.com · 2025-10-17T00:00:00)*
  > Intent to Deprecate and Remove: document.requestStorageAccessFor

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
- [PWA-5: Update ROADMAP/README; deprecate WebView wrapper · Issue #40 · Jannich113/husjagt](https://github.com/Jannich113/husjagt/issues/40) *(github.com)*
- [Remove PWA Category · Issue #15535 · GoogleChrome/lighthouse](https://github.com/GoogleChrome/lighthouse/issues/15535) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 31 result(s) found across 7 planned queries — **21 verified relevant**
  - `"chromestatus.com/feature/5162221567082496" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"privacycg.github.io/requestStorageAccessFor" -site:privacycg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"Deprecate and Remove: document.requestStorageAccessFor" API` — *Core feature API query* (6 returned)
  - `"Deprecate and Remove: document.requestStorageAccessFor" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (7 returned)
  - `"document.requeststorageaccessfor" OR "0.95" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and Remove: document.requestStorageAccessFor" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and Remove: document.requestStorageAccessFor" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **7 verified relevant**
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
