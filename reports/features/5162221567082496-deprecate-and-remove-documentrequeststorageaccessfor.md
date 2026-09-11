# Deprecate and Remove: document.requestStorageAccessFor

> **Report Week:** 2026-W37 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

The requestStorageAccessFor (rSAFor) API is an extension to the Storage Access API that allows a top-level site to request access to unpartitioned ("first-party") cookies on behalf of embedded sites. Browsers will have discretion to grant or deny access, with mechanisms like Related Website Sets (RWS) membership as a potential signal. This allows for use of the Storage Access API by top-level sites. Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove rSAFor, as it is only usable in Chrome to request storage access between RWS sites. Related Website Sets will also be deprecated via a separate intent.

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. rSAFor currently has usage on about 0.95% of page loads, but any website relying on successful invocation of rSAFor (i.e. the API returns a promise that resolves) must also have registered a set on the RWS GitHub repository. Any invocations of rSAFor outside of an RWS currently returns a promise that is rejected.


Our metrics suggest that almost all of the usage of rSAFor is from websites that have registered sets. We will continue to monitor usage and aim to drive it down prior to removal by proactively informing set owners of the deprecation timelines and request them to turn down usage. Additionally, other browser engines have not signaled interest in implementing the API, obviating any interoperability concerns.

## Ecosystem Status

- **Momentum:** High (120 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Chromium is deprecating and removing `document.requestStorageAccessFor` following Google's phaseout of Related Website Sets (RWS) and revised third-party cookie strategy. The method only functioned for domains registered in Chrome's RWS registry, making it a single-engine mechanism that never gained cross-browser standardization. Its removal eliminates redundant, non-standard surface area without creating interoperability gaps.

### Recommendations
- Actionable Advice: Audit existing codebases and remove invocations of `document.requestStorageAccessFor()`, as calls outside of legacy trials will reject. Migrate authenticated cross-site embed workflows to the standardized `document.requestStorageAccess()` invoked directly inside iframe contexts, or adopt CHIPS (`Partitioned` cookies) where isolated cross-origin state suffices.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ) *(groups.google.com)*
  > Intent to Deprecate and Remove: document.requestStorageAccessFor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: docum...
- [Re: [blink-dev] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg17078.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor Mike Taylor Tue, 28 Jul 2026 17:26:57 -070...
- [[blink-dev] Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg15142.html) *(mail-archive.com)*
  > [blink-dev] Intent to Deprecate and Remove: document.requestStorageAccessFor Skip to site navigation (Press enter) [blink-dev] Intent to Deprecate and Remove: document.requestStorageAccessFor 'Johann Hofmann' via blink-dev Fri, 07 Nov 2025 11:45:23 -...
- [Re: [blink-dev] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg17072.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor 'Johann Hofmann' via blink-dev Mon, 27 Jul...
- [[blink-dev] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg15145.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor Skip to site navigation (Press enter) [blink-dev] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor 'Johann Hofmann' via blink-dev Fri, 07 Nov 2025 12...
- [Google Privacy Sandbox API deprecations](https://learnfocus-sigma.vercel.app/?page=en-git-mdn-browser-compat-data-1762585883240) *(learnfocus-sigma.vercel.app · 2025-11-07T16:01:04)*
  > A number of Google Privacy Sandbox APIs are now deprecated. This is a blanket bug for covering these changes. Chromium (Chrome, Edge 79+, Opera, Samsung Internet) ... Intent to Deprecate and Remove: document.requestStorageAccessFor Intent to Deprecat...
- [Storage Access API | Privacy Sandbox](https://privacysandbox.google.com/cookies/storage-access-api) *(privacysandbox.google.com · 2023-12-15T00:00:00)*
  > For example, images or scripts which are restricted by cookies, which site owners may want to include directly in the top-level document rather than in an iframe. To address this use case Chrome has proposed an extension to the Storage Access API whi...
- [Storage Access API | Privacy Sandbox | Google for Developers](https://developers.google.com/privacy-sandbox/3pcd/storage-access-api) *(developers.google.com · 2023-12-15T00:00:00)*
  > For example, images or scripts which are restricted by cookies, which site owners may want to include directly in the top-level document rather than in an iframe. To address this use case Chrome has proposed an extension to the Storage Access API whi...
- [blink-dev - Google Groups](https://groups.google.com/a/chromium.org/g/blink-dev) *(groups.google.com)*
  > Intent to Deprecate and Remove: document.requestStorageAccessFor

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5162221567082496`)*
  > Intent to Deprecate and Remove: document.requestStorageAccessFor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Rem...
- [Re: [blink-dev] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg17078.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5162221567082496`)*
  > Re: [blink-dev] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor Mike Taylor Tue, 28 Jul 2026 17:...

## 📚 Platform Documentation & Specifications

- [Storage Access API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API) *(developer.mozilla.org)*
- [Document: requestStorageAccessFor() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/requestStorageAccessFor) *(developer.mozilla.org)*
- [GitHub - privacycg/requestStorageAccessFor: A proposed extension to the Storage Access API and discussion of how it may be integrated with First-Party Sets. · GitHub](https://github.com/privacycg/requestStorageAccessFor) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 29 result(s) found across 7 planned queries — **12 verified relevant**
  - `"chromestatus.com/feature/5162221567082496" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"privacycg.github.io/requestStorageAccessFor" -site:privacycg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"Deprecate and Remove: document.requestStorageAccessFor" API` — *Core feature API query* (6 returned)
  - `"Deprecate and Remove: document.requestStorageAccessFor" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (6 returned)
  - `"document.requeststorageaccessfor" OR "0.95" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and Remove: document.requestStorageAccessFor" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and Remove: document.requestStorageAccessFor" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 3 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5162221567082496)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5162221567082496)
- [Specification](https://privacycg.github.io/requestStorageAccessFor)
