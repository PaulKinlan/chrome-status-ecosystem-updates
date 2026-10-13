# Deprecate and Remove: document.requestStorageAccessFor

> **Report Week:** 2026-W42 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

The requestStorageAccessFor (rSAFor) API is an extension to the Storage Access API that allows a top-level site to request access to unpartitioned ("first-party") cookies on behalf of embedded sites. Browsers will have discretion to grant or deny access, with mechanisms like Related Website Sets (RWS) membership as a potential signal. This allows for use of the Storage Access API by top-level sites. Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove rSAFor, as it is only usable in Chrome to request storage access between RWS sites. Related Website Sets will also be deprecated via a separate intent.

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. rSAFor currently has usage on about 0.95% of page loads, but any website relying on successful invocation of rSAFor (i.e. the API returns a promise that resolves) must also have registered a set on the RWS GitHub repository. Any invocations of rSAFor outside of an RWS currently returns a promise that is rejected.   Our metrics suggest that almost all of the usage of rSAFor is from websites that have registered sets. We will continue to monitor usage and aim to drive it down prior to removal by proactively informing set owners of the deprecation timelines and request them to turn down usage. Additionally, other browser engines have not signaled interest in implementing the API, obviating any interoperability concerns.

## Ecosystem Status

- **Momentum:** Moderate (footprint 190 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Introduced as a Chromium-specific extension to the Storage Access API, document.requestStorageAccessFor permitted top-level contexts to request unpartitioned cookie access on behalf of embedded sites within a registered Related Website Set (RWS). Following Chrome's policy reversal on universal third-party cookie deprecation, the browser slated both RWS and requestStorageAccessFor for formal deprecation and ultimate removal in Chrome 153. Because other browser engines never implemented the interface, the API is headed for complete retirement as a proprietary dead end.

### Recommendations
- Actionable Advice: Development teams should immediately audit their applications to eliminate invocations of document.requestStorageAccessFor, ensuring embedded resources fall back to the standardized, iframe-driven document.requestStorageAccess API. Site owners currently registered in the Related Website Sets repository should plan to dismantle related configurations prior to Chrome 153 to avoid runtime promise rejections and broken authentication flows.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5194473869017088) *(chromestatus.com)*
  > In Chromium, access was strictly gated by membership in a \*\*Related Website Set (RWS)\*\* (formerly First-Party Sets) Following Google Chrome’s strategic reversal—deciding to maintain user-choice rather than universally deprecating third-party cookies—...
- [Privacy Sandbox History and Timeline - The Third-Party Cookie Phase-Out Plan, Its Reversal, API Deprecation and Removal in Chrome, and What Remains Supported \| hidekazu-konishi.com](https://hidekazu-konishi.com/entry/privacy_sandbox_history_and_timeline.html) *(hidekazu-konishi.com)*
  > Following Google Chrome’s strategic reversal—deciding to maintain user-choice rather than universally deprecating third-party cookies—Google announced plans to deprecate and remove several related Privacy Sandbox mechanisms, including Related Website...
- [chrome.com](https://developer.chrome.com/release-notes/153) *(developer.chrome.com)*
  > The deprecation roadmap initiated around \*\*Chrome 144\*\*, with IDL bindings and Blink implementation phaseouts scheduled through \*\*Chrome 152–153\*\* requestStorageAccessFor") & Chrome Release Notes\*
- [googleusercontent.com](https://doc-4ieg-4ra0-issuetracker.googleusercontent.com/issues/551998737) *(doc-4ieg-4ra0-issuetracker.googleusercontent.com)*
  > The deprecation roadmap initiated around \*\*Chrome 144\*\*, with IDL bindings and Blink implementation phaseouts scheduled through \*\*Chrome 152–153\*\*
- [google.com](https://support.google.com/chrome/a/answer/10314655?hl=en-eu) *(support.google.com)*
  > The deprecation roadmap initiated around \*\*Chrome 144\*\*, with IDL bindings and Blink implementation phaseouts scheduled through \*\*Chrome 152–153\*\* \* \*\*Timeline:\*\* Chrome marked the API deprecated starting in Chrome 144, accompanying console warnings ...
- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ) *(groups.google.com)*
  > Intent to Deprecate and Remove: document.requestStorageAccessFor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: docum...
- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ/m/Bobim4thBQAJ) *(groups.google.com)*
  > Intent to Deprecate and Remove: document.requestStorageAccessFor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: docum...
- [\[blink-dev\] Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg15142.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Deprecate and Remove: document.requestStorageAccessFor Skip to site navigation (Press enter) \[blink-dev\] Intent to Deprecate and Remove: document.requestStorageAccessFor 'Johann Hofmann' via blink-dev Fri, 07 Nov 2025 11:45:23 -...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg17072.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor 'Johann Hofmann' via blink-dev Mon, 27 Jul...
- [\[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg15145.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor 'Johann Hofmann' via blink-dev Fri, 07 Nov 2025 12...
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=%22Intent+to+Deprecate+and+Remove%22) *(groups.google.com)*
  > \[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API · steps 2 and 3. /Daniel On 2026-06-26 10:21, Yoav Weiss (@Shopify) wrote: &gt; LGTM2 &gt; &gt; On Thu, Jun 25, 2026 at 11:12 PM Chris Harrelson &gt; wrote: &gt; &gt; LGTM1 &gt; &g...
- [Google Privacy Sandbox API deprecations](https://learnfocus-sigma.vercel.app/?page=en-git-mdn-browser-compat-data-1762585883240) *(learnfocus-sigma.vercel.app · 2025-11-07T16:01:04)*
  > A number of Google Privacy Sandbox APIs are now deprecated. This is a blanket bug for covering these changes. Chromium (Chrome, Edge 79+, Opera, Samsung Internet) ... Intent to Deprecate and Remove: document.requestStorageAccessFor Intent to Deprecat...
- [Storage Access API \| Privacy Sandbox \| Google for Developers](https://developers.google.com/privacy-sandbox/3pcd/storage-access-api) *(developers.google.com · 2023-12-15T00:00:00)*
  > For example, images or scripts which are restricted by cookies, which site owners may want to include directly in the top-level document rather than in an iframe. To address this use case Chrome has proposed an extension to the Storage Access API whi...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg15158.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor Mike Taylor Sun, 09 Nov 2025 16:56:27 -080...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg17078.html) *(mail-archive.com)*
  > This allows for use of the Storage Access API by top-level sites. Following Chrome&#x27;s announcement that the current approach to third-party cookies will be maintained, &lt;strong&gt;we are now planning to deprecate and remove rSAFor, as it is only usab...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5162221567082496`)*
  > Intent to Deprecate and Remove: document.requestStorageAccessFor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Rem...
- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ/m/Bobim4thBQAJ) *(groups.google.com)* *(Cites: `https://privacycg.github.io/requestStorageAccessFor`)*
  > Intent to Deprecate and Remove: document.requestStorageAccessFor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Rem...

## 📚 Platform Documentation & Specifications

- [Document: requestStorageAccessFor() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/requestStorageAccessFor) *(developer.mozilla.org)*
- [Using the Storage Access API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API/Using) *(developer.mozilla.org)*
- [Why is storage access for not working? (getting \`requestStorageAccessFor: Permission denied.\`) · Issue #168 · GoogleChrome/related-website-sets](https://github.com/GoogleChrome/related-website-sets/issues/168) *(github.com)*
- [Consider requestStorageAccessFor Method · Issue #107 · privacycg/storage-access · GitHub](https://github.com/privacycg/storage-access/issues/107) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 46 result(s) found across 11 planned queries — **14 verified relevant**
  - `"chromestatus.com/feature/5162221567082496" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"privacycg.github.io/requestStorageAccessFor" -site:privacycg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Deprecate and Remove: document.requestStorageAccessFor" API` — *Core feature API query* (6 returned)
  - `"Deprecate and Remove: document.requestStorageAccessFor" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"document.requeststorageaccessfor" OR "0.95" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and Remove: document.requestStorageAccessFor" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and Remove: document.requestStorageAccessFor" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"document.requestStorageAccessFor" (tutorial OR guide OR "how to use" OR migration)` — *Discovers developer guides, tutorials, and migration articles discussing implementation and transition away from requestStorageAccessFor.* (8 returned)
  - `"document.requestStorageAccessFor(" (example OR snippet OR "hasStorageAccess" OR code)` — *Finds concrete JavaScript code snippets, implementation patterns, and invocation examples of document.requestStorageAccessFor.* (8 returned)
  - `"requestStorageAccessFor" ("Intent to Deprecate" OR "Intent to Remove" OR deprecated) Chrome` — *Tracks platform announcements, Blink intent threads, and vendor timelines concerning the deprecation and removal of the API.* (8 returned)
  - `"requestStorageAccessFor" ("Related Website Sets" OR RWS) ("privacycg" OR GitHub OR issues) (deprecation OR status)` — *Surfaces community feedback, standards body debates in PrivacyCG, and developer sentiment surrounding rSAFor and Related Website Sets.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 4 result(s) found — **3 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 9 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5162221567082496)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5162221567082496)
- [Specification](https://privacycg.github.io/requestStorageAccessFor)
