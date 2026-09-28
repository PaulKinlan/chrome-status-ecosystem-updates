# Deprecate and Remove: document.requestStorageAccessFor

> **Report Week:** 2026-W40 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

The requestStorageAccessFor (rSAFor) API is an extension to the Storage Access API that allows a top-level site to request access to unpartitioned ("first-party") cookies on behalf of embedded sites. Browsers will have discretion to grant or deny access, with mechanisms like Related Website Sets (RWS) membership as a potential signal. This allows for use of the Storage Access API by top-level sites. Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove rSAFor, as it is only usable in Chrome to request storage access between RWS sites. Related Website Sets will also be deprecated via a separate intent.

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. rSAFor currently has usage on about 0.95% of page loads, but any website relying on successful invocation of rSAFor (i.e. the API returns a promise that resolves) must also have registered a set on the RWS GitHub repository. Any invocations of rSAFor outside of an RWS currently returns a promise that is rejected.


Our metrics suggest that almost all of the usage of rSAFor is from websites that have registered sets. We will continue to monitor usage and aim to drive it down prior to removal by proactively informing set owners of the deprecation timelines and request them to turn down usage. Additionally, other browser engines have not signaled interest in implementing the API, obviating any interoperability concerns.

## Ecosystem Status

- **Momentum:** High (460 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Deprecate and Remove: document.requestStorageAccessFor is currently Deprecated in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGbdV7i1b8HJPyjCr0ZVKDIm77NvArwLvpxiDhLOxJkB4FWVfGRIRIRCqje9qVmCRbuYsiD4iNWdiLbK9v6nfutHKIrBD5UuR-8uy-kz8r5jl65Cu8uewDxt9h9kDSefIYybwHM0wsq) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEYopq6vfCt4_Ab_fBhMUx9xB17bDgF0EjdqIfAx-XypCUWNUj4u0Iw0kiCw6hifqgc81ALMF60iBFDxGXHKxJ3N3aO-Ritpiq2Tb7W7_7tqFTCrWOHKu1beDptvHKvRJPHdxTkCgUazsTW) *(vertexaisearch.cloud.google.com)*
  > GitHub - privacycg/requestStorageAccessFor: A proposed extension to the Storage Access API and discussion of how it may be integrated with First-Party Sets. · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHi8NfxEc2QtFe4mZeguLa7xaLKoXh3KeOrDS1TqFDyaYmNISFaxDl4t5_6cLU1jtNbwVv46mUP_3hQXRaaAwCf1tMJb-QHXU2ltvcgNhVlv080Qgx_7HhEBRZvNEp1F5fnN6UeWWMu) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH4_PnbLD17o99rtaSdUgYoBFeMPhA1-_zElzfE1yiQBMxKOFobxd699JcP7fmexFKbh4CLxwdTsF3cx3-ZeG_JHS1GDnQXsl1rX64zq3N9AtLrUDUVc7Kuo5Q9SOjSVhJ9bOOu-s0NpQ==) *(vertexaisearch.cloud.google.com)*
  > Chromium Sign in
- [googleusercontent.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEr6SgjBtYw45kVOFURE2BAEmYHtcLuTjYRoZqDqWvPOqF7RTe5G_unL2yS1lLEfOYffI9ncIXJE1WEYsOp_MuMb34job_zGt_txr72PT4MMi_pzyzL5cmhLjy51XBjHBdHjIgnHTWJ32cj9n_Wsjg8xdOS0JoLRASP3gPKlaYj) *(vertexaisearch.cloud.google.com)*
  > Google Issue Tracker Sign in
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEpNbEKftT9EMh4oDBn8lN5U0fzQZupc5rLpjLsXD8s91C9T74emCRuFrPEy2CLT9CjCfZ8Vhw6VdPqHP6KjO2MVuWZ78GgEI2BL_Da5YVJYVb0M1pNP0wd67l4NBVW6kjbp7fl) *(vertexaisearch.cloud.google.com)*
  > Chrome 153 | Release notes | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFh-_LSQyBqpu8IhewatGTfGHmIFXsu5_hf9YIYM__dUx2v0D2JBRfz9hxGLxMd924WF0z6_VW7hcQsobZAMCPPCQVBbWvS3edfwIE_-8tbwSkZeCqgIR16RfC0smMEo7RsWa42hOgN) *(vertexaisearch.cloud.google.com)*
  > Chrome 144 Beta 版 | Blog | Chrome for Developers 跳至主要內容 / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日...
- [leapbuzz.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH2ndrzdemuwGOvPFZGyt6lPKr_LIqHnAHFymFiBKQkvRkH6kxSHSGDT0ZbkPtsonfbGaTOgSYegfUL8AUje4RyWxCW2mRrBQ9nEWjYGbLkwTU0y2zQwlQSg76IAjvHTVbqHTGRwt1nTNypRaDskf245jDFWkU=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  The **`document.requestStorageAccessFor` (rSAFor)** API was introduced by Google Chrome as an extension to the standard Storage Access API (SAA). While the standard SAA requires an embedded `<iframe>` to call `document
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF0HVKagjCmFhYa2coZ8C9tGVJeIqr3DpY1gLfFSTXTZdAueNDTwgPsFN3OeLsOCno6NUXFVRJpbaTFVH696iuFt6Yt30W8lc7QFfbUU_k1xh976fi7pbydLmyZamIzXMGackyEFClda6yLaPYezjdCPRyc1TWyOYdNGVnYuNkQx5WtIx0Wf3Q=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  The **`document.requestStorageAccessFor` (rSAFor)** API was introduced by Google Chrome as an extension to the standard Storage Access API (SAA). While the standard SAA requires an embedded `<iframe>` to call `document
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHUq8a--JQp1p_6NCO_hQwzP9UdK7_WuMrNFVi9lVhPx79UQv9UjV9DlBt0lQxm7v8iNb1D2YbJbUzh9mM1ngxQVeWu2cJX6Fisr5g_EnSHJS2wrW6emXcEk3SFPzd3s9jefZaILiCFO7_MixHsDQ4IOLGslYyEkAhq) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  The **`document.requestStorageAccessFor` (rSAFor)** API was introduced by Google Chrome as an extension to the standard Storage Access API (SAA). While the standard SAA requires an embedded `<iframe>` to call `document
- [tinuiti.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGq08YASuPgX_ScQLdWEOmi71q11dYCh1uQV-MLrtVy77qhK4v6zMrQt7vKQRK0wt9IfE55aGUHi-cii9IVmiGgQany-3YX7BthYrPIiSP_TizMomRcHbv5GSK6pLRE1jO0ChiijKjVAc1bA5XH1DtKSXM8rzwxXsZXc-o=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  The **`document.requestStorageAccessFor` (rSAFor)** API was introduced by Google Chrome as an extension to the standard Storage Access API (SAA). While the standard SAA requires an embedded `<iframe>` to call `document
- [winaero.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF7UmnIvznuDb6Iv-MVfHn5eudtLqC9MPMxfQnZiNmDNLycYS53bmUfgE6Q3Sbov_uAAn9bEynTOK7LhW44HzoqYFzIgnD8J0CjNl_6LatUlkYgwm4CHtcPvJxc6AU90S136ydgaCqhX1cmYLyi6KCkrFMhWXtFF88SAJww) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  The **`document.requestStorageAccessFor` (rSAFor)** API was introduced by Google Chrome as an extension to the standard Storage Access API (SAA). While the standard SAA requires an embedded `<iframe>` to call `document
- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ) *(groups.google.com)*
  > Apologies, I used the wrong Chromestatus link (the original feature status), this one is correct: https://<strong>chromestatus.com/feature/5162221567082496</strong>
- [\[blink-dev\] Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg15142.html) *(mail-archive.com)*
  > This allows for use of the Storage Access API by top-level sites. Following Chrome&#x27;s announcement that the current approach to third-party cookies will be maintained, <strong>we are now planning to deprecate and remove rSAFor, as it is only usab...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg17072.html) *(mail-archive.com)*
  > This allows for &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; use of &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; the Storage Access API by top-level sites. Following Chrome&#x27;s &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; announcement &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; that the curren...
- [\[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg15145.html) *(mail-archive.com)*
  > This allows for use of the &gt; Storage ... approach to third-party cookies will be maintained, <strong>we are now &gt; planning to deprecate and remove rSAFor, as it is only usable in Chrome to &gt; request storage access between RWS sites</strong>....
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=%22Intent+to+Deprecate+and+Remove%22) *(groups.google.com)*
  > [blink-dev] Intent to Deprecate and Remove: Attribution Reporting API · steps 2 and 3. /Daniel On 2026-06-26 10:21, Yoav Weiss (@Shopify) wrote: &gt; LGTM2 &gt; &gt; On Thu, Jun 25, 2026 at 11:12 PM Chris Harrelson &gt; wrote: &gt; &gt; LGTM1 &gt; &g...
- [Google Privacy Sandbox API deprecations](https://learnfocus-sigma.vercel.app/?page=en-git-mdn-browser-compat-data-1762585883240) *(learnfocus-sigma.vercel.app · 2025-11-07T16:01:04)*
  > A number of Google Privacy Sandbox APIs are now deprecated. This is a blanket bug for covering these changes. Chromium (Chrome, Edge 79+, Opera, Samsung Internet) ... Intent to Deprecate and Remove: document.requestStorageAccessFor Intent to Deprecat...
- [Related Website Sets: developer guide \| Privacy Sandbox](https://privacysandbox.google.com/cookies/related-website-sets-integration) *(privacysandbox.google.com · 2024-02-06T00:00:00)*
  > If your application depends on access to cross-site cookies (also called third-party cookies) across sites within the same Related Website Set, you can use Storage Access API (SAA) and the requestStorageAccessFor API to request access to those cookie...
- [Storage Access API \| Privacy Sandbox - Google](https://privacysandbox.google.com/cookies/storage-access-api) *(privacysandbox.google.com · 2023-12-15T00:00:00)*
  > Important: Storage Access Headers cannot be used to request the initial permission. Websites still need to embed an iframe calling document.requestStorageAccess() or document.requestStorageAccessFor() within Related Website Sets to request user permi...
- [Storage Access API \| Privacy Sandbox \| Google for Developers](https://developers.google.com/privacy-sandbox/3pcd/storage-access-api) *(developers.google.com · 2023-12-15T00:00:00)*
  > For example, images or scripts which are restricted by cookies, which site owners may want to include directly in the top-level document rather than in an iframe. To address this use case Chrome has proposed an extension to the Storage Access API whi...
- [How to Deprecate a REST API: The Complete Developer's Guide - Zuplo](https://zuplo.com/learning-center/deprecating-rest-apis) *(zuplo.com · 2024-10-24T00:00:00)*
  > Deprecating an API endpoint involves <strong>updating your API documentation and specifications to indicate the deprecation</strong>. ... paths: /v1/old-endpoint: get: deprecated: true summary: &quot;Deprecated endpoint for retrieving user data&quot;...
- [How to deprecate content — Read the Docs user documentation](https://docs.readthedocs.com/platform/stable/guides/deprecating-content.html) *(docs.readthedocs.com)*
  > When you deprecate a feature from your project, you may want to deprecate its docs as well, and stop your users from reading that content. Deprecating content may sound as easy as delete it, but doing that will break existing links, and you don’t nec...
- [Document API: requestStorageAccess \| Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/mdn-api_document_requeststorageaccess) *(caniuse.com)*
  > &quot;Can I use&quot; provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers.
- [PWABuilder Suite Documentation - test](https://docs.pwabuilder.com) *(docs.pwabuilder.com)*
  > Documentation for building great progressive web apps with the PWABuilder tooling suite.
- [Overview \| Magento PWA Documentation](https://magento.github.io/pwa-studio/technologies/overview) *(magento.github.io)*
  > Magento’s PWA Studio is a set of tools that let you create Progressive Web Apps (PWA). This page provides a brief description of a Progressive Web App and its relationship to the PWA Studio project · A Progressive Web App, or PWA, is a term for any w...
- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ/m/Bobim4thBQAJ) *(groups.google.com)*
  > This allows for use of the Storage Access API by top-level sites. Following Chrome&#x27;s announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove rSAFor, as <strong>it is only usab...
- [Related Website Sets: developer guide \| Privacy Sandbox](https://developers.google.com/privacy-sandbox/cookies/related-website-sets-integration) *(developers.google.com · 2024-02-06T00:00:00)*
  > If your application depends on ... the same Related Website Set, you can <strong>use Storage Access API (SAA) and the requestStorageAccessFor API to request access to those cookies</strong>....
- [Related Website Sets: developer guide \| Privacy Sandbox \| Google for Developers](https://developers.google.com/privacy-sandbox/3pcd/related-website-sets-integration) *(developers.google.com · 2024-02-06T00:00:00)*
  > If your application depends on ... the same Related Website Set, you can <strong>use Storage Access API (SAA) and the requestStorageAccessFor API to request access to those cookies</strong>....
- [Related Website Sets: developer guide - Chrome for Developers](https://developer.chrome.com/docs/privacy-sandbox/related-website-sets-integration) *(developer.chrome.com)*
  > If your application depends on ... the same Related Website Set, you can <strong>use Storage Access API (SAA) and the requestStorageAccessFor API to request access to those cookies</strong>....
- [Intent to Ship: Storage Access API (within First-Party Sets)](https://groups.google.com/a/chromium.org/g/blink-dev/c/V9PzoCvIIIs/m/b4R9G0xoCQAJ) *(groups.google.com)*
  > To provide better developer ergonomics in non-iframe use cases for access to cross-site cookies within a first-party set, we intend to ship an extension to the Storage Access API called &quot;<strong>requestStorageAccessFor</strong>&quot; (see relate...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5162221567082496`)*
  > Apologies, I used the wrong Chromestatus link (the original feature status), this one is correct: https://<strong>chromestatus.com/feature/5162221567082496</strong>

## 📚 Platform Documentation & Specifications

- [Document: requestStorageAccess() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/requestStorageAccess) *(developer.mozilla.org)*
- [content/files/en-us/web/api/document/requeststorageaccess/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/document/requeststorageaccess/index.md) *(github.com)*
- [content/files/en-us/web/api/document/hasstorageaccess/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/document/hasstorageaccess/index.md) *(github.com)*
- [Storage Access API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API) *(developer.mozilla.org)*
- [Document: requestStorageAccessFor() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/requestStorageAccessFor) *(developer.mozilla.org)*
- [Document: hasStorageAccess() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/hasStorageAccess) *(developer.mozilla.org)*
- [Remove PWA Category · Issue #15535 · GoogleChrome/lighthouse](https://github.com/GoogleChrome/lighthouse/issues/15535) *(github.com)*
- [magento-pwa/CHANGELOG.md at 2.3-develop · luke-denton-aligent/magento-pwa](https://github.com/luke-denton-aligent/magento-pwa/blob/2.3-develop/CHANGELOG.md) *(github.com)*
- [GitHub - privacycg/requestStorageAccessFor: A proposed extension to the Storage Access API and discussion of how it may be integrated with First-Party Sets. · GitHub](https://github.com/privacycg/requestStorageAccessFor) *(github.com)*
- [requestStorageAccessFor/index.bs at main · privacycg/requestStorageAccessFor](https://github.com/privacycg/requestStorageAccessFor/blob/main/index.bs) *(github.com)*
- [related-website-sets/RWS-Submission\_Guidelines.md at main · GoogleChrome/related-website-sets](https://github.com/GoogleChrome/related-website-sets/blob/main/RWS-Submission_Guidelines.md) *(github.com)*
- [Should the RWP API be disallowed when the user is visiting an RWS service domain? · Issue #2 · explainers-by-googlers/related-website-partition-api](https://github.com/explainers-by-googlers/related-website-partition-api/issues/2) *(github.com)*
- [Consider requestStorageAccessFor Method · Issue #107 · privacycg/storage-access](https://github.com/privacycg/storage-access/issues/107) *(github.com)*
- [Reputation attack on third parties through rSAFor prompts · Issue #29 · privacycg/requestStorageAccessFor](https://github.com/privacycg/requestStorageAccessFor/issues/29) *(github.com)*
- [Consider patching up permissions query algorithm for "storage-access" to consider "top-level-storage-access" · Issue #18 · privacycg/requestStorageAccessFor](https://github.com/privacycg/requestStorageAccessFor/issues/18) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 49 result(s) found across 11 planned queries — **34 verified relevant**
  - `"chromestatus.com/feature/5162221567082496" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"privacycg.github.io/requestStorageAccessFor" -site:privacycg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Deprecate and Remove: document.requestStorageAccessFor" API` — *Core feature API query* (6 returned)
  - `"Deprecate and Remove: document.requestStorageAccessFor" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (6 returned)
  - `"document.requeststorageaccessfor" OR "0.95" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and Remove: document.requestStorageAccessFor" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and Remove: document.requestStorageAccessFor" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"document.requestStorageAccessFor" (github OR gist OR example OR snippet)` — *Find real-world JavaScript code snippets and GitHub implementations demonstrating the invocation of document.requestStorageAccessFor.* (8 returned)
  - `"requestStorageAccessFor" "intent to deprecate and remove" OR "deprecated" chromium` — *Identify official Chromium intent announcements, tracker bugs, and browser vendor updates regarding the deprecation and removal of the API.* (8 returned)
  - `"requestStorageAccessFor" ("Related Website Sets" OR RWS) (guide OR tutorial OR migration)` — *Discover developer documentation, explainers, and migration strategies transitioning away from requestStorageAccessFor.* (6 returned)
  - `"requestStorageAccessFor" site:groups.google.com/a/chromium.org OR site:github.com/privacycg` — *Capture standards discussions, developer feedback, and PrivacyCG deliberations surrounding the deprecation of requestStorageAccessFor.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **12 verified relevant**
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
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5162221567082496)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5162221567082496)
- [Specification](https://privacycg.github.io/requestStorageAccessFor)
