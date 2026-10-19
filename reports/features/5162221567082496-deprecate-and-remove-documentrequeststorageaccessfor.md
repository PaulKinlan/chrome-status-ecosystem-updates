# Deprecate and Remove: document.requestStorageAccessFor

> **Report Week:** 2026-W43 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

The requestStorageAccessFor (rSAFor) API is an extension to the Storage Access API that allows a top-level site to request access to unpartitioned ("first-party") cookies on behalf of embedded sites. Browsers will have discretion to grant or deny access, with mechanisms like Related Website Sets (RWS) membership as a potential signal. This allows for use of the Storage Access API by top-level sites. Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove rSAFor, as it is only usable in Chrome to request storage access between RWS sites. Related Website Sets will also be deprecated via a separate intent.

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. rSAFor currently has usage on about 0.95% of page loads, but any website relying on successful invocation of rSAFor (i.e. the API returns a promise that resolves) must also have registered a set on the RWS GitHub repository. Any invocations of rSAFor outside of an RWS currently returns a promise that is rejected.   Our metrics suggest that almost all of the usage of rSAFor is from websites that have registered sets. We will continue to monitor usage and aim to drive it down prior to removal by proactively informing set owners of the deprecation timelines and request them to turn down usage. Additionally, other browser engines have not signaled interest in implementing the API, obviating any interoperability concerns.

## Ecosystem Status

- **Momentum:** Moderate (footprint 280 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** The \`document.requestStorageAccessFor()\` (rSAFor) API is being deprecated and removed in Chrome (targeting milestones such as Chrome 153), following Chrome's shift in its third-party cookie strategy. Because the API was largely tied to Chrome's Related Website Sets (RWS) ecosystem and lacked multi-browser standardization interest, its removal trims proprietary tech debt. Developers relying on it must audit their codebases and transition away from top-level storage access requests.

### Recommendations
- Actionable Advice: Web development teams should audit their codebases immediately for any dependencies on Related Website Sets (RWS) and \`requestStorageAccessFor()\`, and transition away from relying on top-level storage access requests before full removal.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5194473869017088) *(chromestatus.com)*
  > Because rSAFor was tightly coupled with Chrome’s ecosystem (specifically for cross-site access within RWS) and saw no broad multi-browser standardization or interest from Gecko (Firefox) or WebKit (Safari), Google and the Chromium team moved to depre...
- [chrome.com](https://developer.chrome.com/blog/chrome-144-beta) *(developer.chrome.com)*
  > The deprecation process began rolling out in earlier milestones (such as Chrome 144)
- [dbio.link](https://portal.dbio.link/blogs/camada-dev/en/blog/chrome-153-para-devs-o-que-quebra-com-rws-e-requeststorageaccessfor.html) *(portal.dbio.link)*
  > Developers have been advised to audit codebases for RWS dependencies and transition away from relying on top-level storage access requests
- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ) *(groups.google.com)*
  > Intent to Deprecate and Remove: document.requestStorageAccessFor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: docum...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg15256.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor Mike Taylor Wed, 19 Nov 2025 13:05:50 -080...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg17072.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor 'Johann Hofmann' via blink-dev Mon, 27 Jul...
- [\[blink-dev\] Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg15142.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Deprecate and Remove: document.requestStorageAccessFor Skip to site navigation (Press enter) \[blink-dev\] Intent to Deprecate and Remove: document.requestStorageAccessFor 'Johann Hofmann' via blink-dev Fri, 07 Nov 2025 11:45:23 -...
- [\[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg15145.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor 'Johann Hofmann' via blink-dev Fri, 07 Nov 2025 12...
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=%22Intent+to+Deprecate+and+Remove%22) *(groups.google.com)*
  > \[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API · steps 2 and 3. /Daniel On 2026-06-26 10:21, Yoav Weiss (@Shopify) wrote: &gt; LGTM2 &gt; &gt; On Thu, Jun 25, 2026 at 11:12 PM Chris Harrelson &gt; wrote: &gt; &gt; LGTM1 &gt; &g...
- [Google Privacy Sandbox API deprecations](https://learnfocus-sigma.vercel.app/?page=en-git-mdn-browser-compat-data-1762585883240) *(learnfocus-sigma.vercel.app · 2025-11-07T16:01:04)*
  > A number of Google Privacy Sandbox APIs are now deprecated. This is a blanket bug for covering these changes. Chromium (Chrome, Edge 79+, Opera, Samsung Internet) ... Intent to Deprecate and Remove: document.requestStorageAccessFor Intent to Deprecat...
- [Related Website Sets: developer guide \| Privacy Sandbox](https://privacysandbox.google.com/cookies/related-website-sets-integration) *(privacysandbox.google.com · 2024-02-06T00:00:00)*
  > The requestStorageAccessFor() API is meant to be called by a top-level document. That document must also have just received user interaction.
- [Storage Access API \| Privacy Sandbox - Google](https://privacysandbox.google.com/cookies/storage-access-api) *(privacysandbox.google.com · 2023-12-15T00:00:00)*
  > Important: Storage Access Headers cannot be used to request the initial permission. Websites still need to embed an iframe calling document.requestStorageAccess() or document.requestStorageAccessFor() within Related Website Sets to request user permi...
- [Privacy Sandbox After the Removals: Which Technologies Chrome Keeps and What That Means for Measurement - Lukas Wojcik - Blog](https://www.lukaswojcik.com/blog/en/data-privacy/eight-removed-three-left-standing) *(lukaswojcik.com · 2026-09-04T21:50:17)*
  > There was a shortcut. document.requestStorageAccessFor() let the top-level page request access on behalf of an embed, which spared the user a prompt inside a frame they had not interacted with. It only ever made sense with a declared set of related d...
- [Privacy Sandbox History and Timeline - The Third-Party Cookie Phase-Out Plan, Its Reversal, API Deprecation and Removal in Chrome, and What Remains Supported \| hidekazu-konishi.com](https://hidekazu-konishi.com/entry/privacy_sandbox_history_and_timeline.html) *(hidekazu-konishi.com · 2026-10-02T00:00:01)*
  > Where the deprecation in Chrome 144 is written: The deprecation of Attribution Reporting, Related Website Sets, document.requestStorageAccessFor, and Topics in Chrome 144 is written in the blink-dev Intents and, except for Attribution Reporting, in c...
- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ/m/Bobim4thBQAJ) *(groups.google.com)*
  > Intent to Deprecate and Remove: document.requestStorageAccessFor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: docum...
- [Intent to Deprecate and Remove: Related Website Sets (RWS)](https://groups.google.com/a/chromium.org/g/blink-dev/c/V-wPXyoruac) *(groups.google.com)*
  > RWS usage is indicated by the number of registered sets (currently at 71 sets), and the usage of the requestStorageAccessFor API (currently at about 0.95% of pageloads), and &lt;strong&gt;after this announcement we intend to archive the registration reposi...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg16726.html) *(mail-archive.com)*
  > This &gt;&gt;&gt; is facilitated through ... third-party cookies. &gt;&gt;&gt; &lt;strong&gt;Following Chrome&#x27;s announcement that the current approach to third-party &gt;&gt;&gt; cookies will be maintained, we are now planning to deprecate and remove ...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg15279.html) *(mail-archive.com)*
  > Following Chrome&#x27;s &gt;&gt;&gt;&gt;&gt; announcement &gt;&gt;&gt;&gt;&gt; that the current approach to third-party cookies will be maintained, &lt;strong&gt;we &gt;&gt;&gt;&gt;&gt; are &gt;&gt;&gt;&gt;&gt; now planning to deprecate and remove rSAFor, ...
- [Chrome 153 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/153?hl=en) *(developer.chrome.com · 2026-09-08T16:25:02)*
  > Because it is only usable in Chrome to request storage access between Related Website Sets sites, &lt;strong&gt;it is planned for deprecation and removal along with Related Website Sets&lt;/strong&gt;. ... The Attribution Reporting API is a privacy-preserving we...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5162221567082496`)*
  > Intent to Deprecate and Remove: document.requestStorageAccessFor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Rem...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg15256.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5162221567082496`)*
  > Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor Mike Taylor Wed, 19 Nov 2025 13:...

## 📚 Platform Documentation & Specifications

- [Document: requestStorageAccessFor() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/requestStorageAccessFor) *(developer.mozilla.org)*
- [GitHub - privacycg/requestStorageAccessFor: A proposed extension to the Storage Access API and discussion of how it may be integrated with First-Party Sets. · GitHub](https://github.com/privacycg/requestStorageAccessFor) *(github.com)*
- [content/files/en-us/web/api/document/requeststorageaccess/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/document/requeststorageaccess/index.md?plain=1) *(github.com)*
- [content/files/en-us/web/api/document/requeststorageaccess/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/document/requeststorageaccess/index.md) *(github.com)*
- [content/files/en-us/web/api/document/hasstorageaccess/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/document/hasstorageaccess/index.md) *(github.com)*
- [Storage Access API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API) *(developer.mozilla.org)*
- [Using the Storage Access API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API/Using) *(developer.mozilla.org)*
- [GitHub - cfredric/chrome-storage-access-api · GitHub](https://github.com/cfredric/chrome-storage-access-api) *(github.com)*
- [chrome-storage-access-api/README.md at main · cfredric/chrome-storage-access-api](https://github.com/cfredric/chrome-storage-access-api/blob/main/README.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 49 result(s) found across 11 planned queries — **25 verified relevant**
  - `"chromestatus.com/feature/5162221567082496" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"privacycg.github.io/requestStorageAccessFor" -site:privacycg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Deprecate and Remove: document.requestStorageAccessFor" API` — *Core feature API query* (7 returned)
  - `"Deprecate and Remove: document.requestStorageAccessFor" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"document.requeststorageaccessfor" OR "0.95" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and Remove: document.requestStorageAccessFor" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and Remove: document.requestStorageAccessFor" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `document.requestStorageAccessFor deprecated removed tutorial guide` — *Finds developer guides and tutorials discussing the deprecation and removal of requestStorageAccessFor.* (8 returned)
  - `document.requestStorageAccessFor WebIDL API usage example` — *Locates code snippets, real-world examples, and WebIDL definitions for the API.* (8 returned)
  - `requestStorageAccessFor Related Website Sets RWS deprecation announcement` — *Searches for official announcements, ecosystem sentiment, and the impact of deprecating Related Website Sets alongside rSAFor.* (8 returned)
  - `Storage Access API requestStorageAccessFor chromium discussion` — *Discovers community discussions, bug reports, and feedback regarding Chrome's decision to drop rSAFor.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 6 result(s) found — **5 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5162221567082496)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5162221567082496)
- [Specification](https://privacycg.github.io/requestStorageAccessFor)
