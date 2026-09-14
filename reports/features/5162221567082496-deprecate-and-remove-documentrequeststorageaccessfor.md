# Deprecate and Remove: document.requestStorageAccessFor

> **Report Week:** 2026-W38 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

The requestStorageAccessFor (rSAFor) API is an extension to the Storage Access API that allows a top-level site to request access to unpartitioned ("first-party") cookies on behalf of embedded sites. Browsers will have discretion to grant or deny access, with mechanisms like Related Website Sets (RWS) membership as a potential signal. This allows for use of the Storage Access API by top-level sites. Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove rSAFor, as it is only usable in Chrome to request storage access between RWS sites. Related Website Sets will also be deprecated via a separate intent.

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. rSAFor currently has usage on about 0.95% of page loads, but any website relying on successful invocation of rSAFor (i.e. the API returns a promise that resolves) must also have registered a set on the RWS GitHub repository. Any invocations of rSAFor outside of an RWS currently returns a promise that is rejected.


Our metrics suggest that almost all of the usage of rSAFor is from websites that have registered sets. We will continue to monitor usage and aim to drive it down prior to removal by proactively informing set owners of the deprecation timelines and request them to turn down usage. Additionally, other browser engines have not signaled interest in implementing the API, obviating any interoperability concerns.

## Ecosystem Status

- **Momentum:** High (240 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** Following Google's decision to retain third-party cookies, Chromium is formally deprecating and removing document.requestStorageAccessFor (rSAFor) in Chrome 153 alongside the phaseout of Related Website Sets (RWS). The method functioned exclusively as a Chrome-specific mechanism allowing top-level frames to request unpartitioned cookie access on behalf of embedded origins in declared sets. Its removal retires a proprietary extension and eliminates divergent cross-site storage behavior.

### Recommendations
- Actionable Advice: Immediately audit codebases to eliminate dependencies on document.requestStorageAccessFor() and remove custom Related Website Set handling before Chrome milestone 153 removal. Transition cross-origin embedded workflows to the standard iframe-mediated document.requestStorageAccess() or adopt CHIPS (Partitioned attribute) for partitioned third-party state.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ) *(groups.google.com)*
  > Intent to Deprecate and Remove: document.requestStorageAccessFor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: docum...
- [\[blink-dev\] Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg15142.html) *(mail-archive.com)*
  > [blink-dev] Intent to Deprecate and Remove: document.requestStorageAccessFor Skip to site navigation (Press enter) [blink-dev] Intent to Deprecate and Remove: document.requestStorageAccessFor 'Johann Hofmann' via blink-dev Fri, 07 Nov 2025 11:45:23 -...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg17072.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor 'Johann Hofmann' via blink-dev Mon, 27 Jul...
- [\[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg15145.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor Skip to site navigation (Press enter) [blink-dev] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor 'Johann Hofmann' via blink-dev Fri, 07 Nov 2025 12...
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=%22Intent+to+Deprecate+and+Remove%22) *(groups.google.com)*
  > Search Conversations Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups Sort By Relevance Sort By Date 1–30 of many &#xE408; &#xE409; Chromestatus , … Philip Jägenstedt 5 Sep 9 Intent to De...
- [Google Privacy Sandbox API deprecations](https://learnfocus-sigma.vercel.app/?page=en-git-mdn-browser-compat-data-1762585883240) *(learnfocus-sigma.vercel.app · 2025-11-07T16:01:04)*
  > A number of Google Privacy Sandbox APIs are now deprecated. This is a blanket bug for covering these changes. Chromium (Chrome, Edge 79+, Opera, Samsung Internet) ... Intent to Deprecate and Remove: document.requestStorageAccessFor Intent to Deprecat...
- [Privacy Sandbox feature status](https://privacysandbox.google.com/overview/status) *(privacysandbox.google.com · 2025-10-17T00:00:00)*
  > Privacy Sandbox feature status Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Home Sig...
- [Related Website Sets: developer guide \| Privacy Sandbox](https://privacysandbox.google.com/cookies/related-website-sets-integration) *(privacysandbox.google.com · 2024-02-06T00:00:00)*
  > Related Website Sets: developer guide | Privacy Sandbox Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体...
- [Storage Access API \| Privacy Sandbox](https://privacysandbox.google.com/cookies/storage-access-api) *(privacysandbox.google.com · 2023-12-15T00:00:00)*
  > For example, images or scripts which are restricted by cookies, which site owners may want to include directly in the top-level document rather than in an iframe. To address this use case Chrome has proposed an extension to the Storage Access API whi...
- [Storage Access API \| Privacy Sandbox \| Google for Developers](https://developers.google.com/privacy-sandbox/3pcd/storage-access-api) *(developers.google.com · 2023-12-15T00:00:00)*
  > For example, images or scripts which are restricted by cookies, which site owners may want to include directly in the top-level document rather than in an iframe. To address this use case Chrome has proposed an extension to the Storage Access API whi...
- [How to Deprecate a REST API: The Complete Developer's Guide - Zuplo](https://zuplo.com/learning-center/deprecating-rest-apis) *(zuplo.com · 2024-10-24T00:00:00)*
  > Deprecating an API endpoint involves <strong>updating your API documentation and specifications to indicate the deprecation</strong>. ... paths: /v1/old-endpoint: get: deprecated: true summary: &quot;Deprecated endpoint for retrieving user data&quot;...
- [How to deprecate content — Read the Docs user documentation](https://docs.readthedocs.com/platform/stable/guides/deprecating-content.html) *(docs.readthedocs.com)*
  > Deprecating content may sound as easy as delete it, but doing that will break existing links, and you don’t necessary want to make the content inaccessible. Here you’ll find some tips on how to use Read the Docs to deprecate your content progressivel...
- [Document API: requestStorageAccess \| Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/mdn-api_document_requeststorageaccess) *(caniuse.com)*
  > &quot;Can I use&quot; provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers.
- [PWABuilder Suite Documentation - test](https://docs.pwabuilder.com) *(docs.pwabuilder.com)*
  > Documentation for building great progressive web apps with the PWABuilder tooling suite.
- [Overview \| Magento PWA Documentation](https://magento.github.io/pwa-studio/technologies/overview) *(magento.github.io)*
  > Magento’s PWA Studio is a set of tools that let you create Progressive Web Apps (PWA). This page provides a brief description of a Progressive Web App and its relationship to the PWA Studio project · A Progressive Web App, or PWA, is a term for any w...
- [Deprecate and Remove](https://chromestatus.com/feature/5162221567082496) *(chromestatus.com)*
  > We cannot provide a description for this page right now

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5162221567082496`)*
  > Intent to Deprecate and Remove: document.requestStorageAccessFor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Rem...

## 📚 Platform Documentation & Specifications

- [Document: requestStorageAccess() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/requestStorageAccess) *(developer.mozilla.org)*
- [content/files/en-us/web/api/document/requeststorageaccess/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/document/requeststorageaccess/index.md) *(github.com)*
- [content/files/en-us/web/api/document/hasstorageaccess/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/document/hasstorageaccess/index.md) *(github.com)*
- [Document: requestStorageAccessFor() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/requestStorageAccessFor) *(developer.mozilla.org)*
- [Storage Access API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API) *(developer.mozilla.org)*
- [GitHub - privacycg/requestStorageAccessFor: A proposed extension to the Storage Access API and discussion of how it may be integrated with First-Party Sets. · GitHub](https://github.com/privacycg/requestStorageAccessFor) *(github.com)*
- [Remove PWA Category · Issue #15535 · GoogleChrome/lighthouse](https://github.com/GoogleChrome/lighthouse/issues/15535) *(github.com)*
- [Document: hasStorageAccess() method](https://developer.mozilla.org/en-US/docs/Web/API/Document/hasStorageAccess) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 30 result(s) found across 7 planned queries — **23 verified relevant**
  - `"chromestatus.com/feature/5162221567082496" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"privacycg.github.io/requestStorageAccessFor" -site:privacycg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"Deprecate and Remove: document.requestStorageAccessFor" API` — *Core feature API query* (7 returned)
  - `"Deprecate and Remove: document.requestStorageAccessFor" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (6 returned)
  - `"document.requeststorageaccessfor" OR "0.95" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and Remove: document.requestStorageAccessFor" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and Remove: document.requestStorageAccessFor" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
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
