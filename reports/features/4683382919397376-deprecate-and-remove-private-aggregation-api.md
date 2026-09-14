# Deprecate and remove: Private Aggregation API

> **Report Week:** 2026-W38 | **Milestone:** Chrome 152 | **Category:** Deprecated

## Overview

The Private Aggregation API is a generic mechanism for measuring aggregate, cross-site data in a privacy preserving manner. It was originally designed for a future without third-party cookies.  Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Private Aggregation API (along with certain other Privacy Sandbox APIs, as outlined on the Privacy Sandbox feature status page\[0\]). This API is only exposed via the Shared Storage and Protected Audience APIs, which are also planned to be deprecated and removed. So, no additional work will be required for Private Aggregation.  \[0\]: https://privacysandbox.google.com/overview/status

### Motivation

Chrome has announced[0] that the current approach to third-party cookies will be maintained. Given this, we expect adoption of the Private Aggregation API to decrease over time as cross-site measurement will remain possible in Chrome using third-party cookies. Further, other browser engines have not signaled interest in launching the API. Removing this (and certain other Privacy Sandbox APIs[1]) will help focus efforts on the proposed interoperable Attribution[2] standard.

[0]: https://privacysandbox.com/news/update-on-plans-for-privacy-sandbox-technologies/
[1]: https://privacysandbox.google.com/overview/status
[2]: https://github.com/w3c/attribution

## Ecosystem Status

- **Momentum:** High (430 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Deprecate and remove: Private Aggregation API is currently Deprecated in Chrome 152. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Marked for deprecation in Chrome 152. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Intent to Deprecate and Remove: Private Aggregation API](https://groups.google.com/a/chromium.org/g/blink-dev/c/Ld7avyD0U0Q) *(groups.google.com · 2025-11-07T00:00:00)*
  > Intent to Deprecate and Remove: Private Aggregation API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Private Aggreg...
- [Deprecate and remove: Private Aggregation API](https://chromestatus.com/feature/4683382919397376) *(chromestatus.com · 2025-10-21T00:00:00)*
  > We cannot provide a description for this page right now
- [\[blink-dev\] Re: Intent to Deprecate and Remove: Private Aggregation API](http://www.mail-archive.com/blink-dev@chromium.org/msg15188.html) *(mail-archive.com)*
  > On <strong>Friday, November 7, 2025</strong> at ... &gt; &gt; The Private Aggregation API is a generic mechanism for measuring &gt; aggregate, cross-site data in a privacy preserving manner. It was &gt; originally designed for a future without third-...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Private Aggregation API](http://www.mail-archive.com/blink-dev@chromium.org/msg15197.html) *(mail-archive.com)*
  > On <strong>Friday, November 7, 2025</strong> at ... The Private Aggregation API is a generic mechanism for measuring aggregate, cross-site data in a privacy preserving manner. It was originally designed for a future without third-party cookies. Follo...
- [\[blink-dev\] Intent to Deprecate and Remove: Private Aggregation API](http://www.mail-archive.com/blink-dev@chromium.org/msg15139.html) *(mail-archive.com)*
  > False Estimated milestones <strong>Deprecate in M144 and then remove in M150</strong>. There will be one aspect of the API that will end sooner. Server-side &lt;https://privacysandbox.google.com/private-advertising/aggregation-service&gt; summary rep...
- [Deprecate and remove: Private Aggregation API - Chrome Platform ...](https://cr-status.appspot.com/feature/4683382919397376?gate=6673363808419840) *(cr-status.appspot.com)*
  > Acceder con GoogleAcceder con Google. Se abre en una pestaña nueva
- [API Aggregator: What It Is, How It Works, and How to Choose One](https://www.apideck.com/blog/api-aggregator) *(apideck.com · 2026-06-03T19:23:55)*
  > Third-party APIs change, deprecate endpoints, modify authentication flows, and introduce new data fields. Each change requires your team to update and test the affected integration. An API aggregator shifts this maintenance burden to the platform pro...
- [The Google Privacy Sandbox: The Big Picture and the Privacy Sandbox Browser Elements \| Blog](https://theprivacysandbox-com.webflow.io/posts/google-privacy-sandbox-big-picture) *(theprivacysandbox-com.webflow.io)*
  > The main browser frame is where the browser’s rendering engine takes all the HTML, CSS, JavaScript and other information about the web page and displays it in the browser window. Many of the adaptations for the Privacy Sandbox to the client-side arch...
- [What is the Privacy Sandbox? - Google](https://privacysandbox.google.com/overview/web) *(privacysandbox.google.com)*
  > Rather than working with limited tools and protections, <strong>the APIs allow a user&#x27;s browser to act on the user&#x27;s behalf—locally, on their device—to protect the user&#x27;s identifying information as they navigate the web</strong>.
- [Privacy Sandbox feature status](https://privacysandbox.google.com/overview/status) *(privacysandbox.google.com · 2025-10-17T00:00:00)*
  > This page describes implementation status for web and Android technologies developed as part of the Privacy Sandbox initiative.
- [Privacy Sandbox demos](https://privacysandbox.google.com/resources/demos) *(privacysandbox.google.com · 2025-08-15T00:00:00)*
  > Privacy Sandbox Demos framework offers cookbook recipes, sample code, and demo applications, based on Privacy Sandbox APIs. These are intended to aid businesses and developers in adapting their applications and the businesses they support to a web ec...
- [The Privacy Sandbox](https://www.chromium.org/Home/chromium-privacy/privacy-sandbox) *(chromium.org)*
  > The Privacy Sandbox project’s mission is to “<strong>Create a thriving web ecosystem that is respectful of users and private by default</strong>.” The main challenge to overcome in that mission is the pervasive cross-site tracking that has become the...
- [Privacy Sandbox - Wikipedia](https://en.wikipedia.org/wiki/Privacy_Sandbox) *(en.wikipedia.org · 2026-09-10T18:19:39)*
  > ↑ &quot;Building a more private <strong>web</strong>&quot;. <strong>Google</strong>. 2019-08-22. Retrieved 2025-12-20. ↑ Shankland, Stephen. &quot;<strong>Google</strong> Chrome&#x27;s &#x27;privacy sandbox&#x27; idea tries fixing privacy without kil...
- [Privacy protections \| Privacy Sandbox](https://privacysandbox.google.com/protections) *(privacysandbox.google.com)*
  > Fight spam and fraud on the web with purpose-built, privacy-preserving APIs.
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > <strong>Following Chrome&#x27;s announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Private Aggregation API</strong> (along with certain other Privacy Sandbox APIs).
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Private Aggregation API](http://www.mail-archive.com/blink-dev@chromium.org/msg16758.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; <strong>No specific JavaScript API changes are required to remove Private &gt;&gt;&gt; Aggregation as the API is only exposed within Protected Audience and Shared &gt;&gt;&gt; Storage contexts</strong>. So, Private Aggregati...
- [Shared Storage and Private Aggregation Implementation Quickstart \| Privacy Sandbox](https://privacysandbox.google.com/private-advertising/shared-storage/api-walkthrough) *(privacysandbox.google.com · 2023-10-23T00:00:00)*
  > <strong>To create a report, call contributeToHistogram() inside a worklet with a bucket and value</strong>. The bucket is represented by an unsigned 128-bit integer which must be passed into the function as a BigInt.
- [Private Aggregation API GCP Beta on Chrome](https://groups.google.com/a/chromium.org/g/fledge-api-announce/c/FaJuGp9pprU) *(groups.google.com · 2024-01-23T00:00:00)*
  > Developers can specify their deployment option using the optional string field aggregationCoordinatorOrigin. Protected Audience sellers would specify this field in the auctionConfig. Protected Audience bidders can set this for each interest group via...
- [Protected Audience API: developer guide \| Privacy Sandbox](https://privacysandbox.google.com/private-advertising/protected-audience-api) *(privacysandbox.google.com · 2022-01-27T00:00:00)*
  > Read the Protected Audience API explainer: browsers render the winning ad · The long-term plan is to allow the browser to report auction results for the seller and buyers using the Private Aggregation APIs.
- [Shared Storage and Private Aggregation Implementation Quickstart \| Privacy Sandbox](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage/api-walkthrough) *(developers.google.com · 2023-10-23T00:00:00)*
  > <strong>To create a report, call contributeToHistogram() inside a worklet with a bucket and value</strong>. The bucket is represented by an unsigned 128-bit integer which must be passed into the function as a BigInt.
- [Private Aggregation API fundamentals \| Privacy Sandbox](https://privacysandbox.google.com/private-advertising/private-aggregation/fundamentals) *(privacysandbox.google.com · 2024-11-27T00:00:00)*
  > Aggregatable reports will be sent to where you have defined endpoint /.well-known/private-aggregation/report-shared-storage. Continue on to the filtering IDs guide to learn about the changes needed in Aggregation Service job parameters. After batchin...
- [Private Aggregation API fundamentals \| Privacy Sandbox](https://developer.chrome.com/en/docs/privacy-sandbox/private-aggregation-fundamentals) *(developer.chrome.com · 2024-11-27T00:00:00)*
  > Aggregatable reports will be sent to where you have defined endpoint /.well-known/private-aggregation/report-shared-storage. Continue on to the filtering IDs guide to learn about the changes needed in Aggregation Service job parameters. After batchin...
- [Private Aggregation API overview \| Privacy Sandbox](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/overview) *(developers.google.com · 2022-10-11T00:00:00)*
  > <strong>The Private Aggregation API allows developers to generate aggregate data reports with data from the Protected Audience API and cross-site data from Shared Storage</strong>. The main function of this API is known as contributeToHistogram().
- [Private Aggregation API breaking changes for Shared Storage](https://groups.google.com/a/chromium.org/g/shared-storage-api-announcements/c/YHloqvcUUhY) *(groups.google.com)*
  > enableDebugMode()’s debug_key parameter is being renamed to debugKey. You must update your code to ensure that the Private Aggregation API continues to work. Outdated Chrome instances will still use the old names, so you should ensure backward compat...
- [Additional Private Aggregation API breaking changes for Protected Audience API](https://groups.google.com/a/chromium.org/g/fledge-api-announce/c/yedFntpq_sw) *(groups.google.com · 2023-05-26T00:00:00)*
  > enableDebugMode()’s debug_key parameter is being renamed to debugKey. You must update your code to ensure that the Private Aggregation API continues to work. Outdated Chrome instances will still use the old names, so you should ensure backward compat...
- [Web-Facing Change PSA: Private Aggregation API: ignoring site exceptions for debug mode](https://groups.google.com/a/chromium.org/g/blink-dev/c/YqdnsrLpuXI) *(groups.google.com · 2024-11-13T00:00:00)*
  > https://patcg-individual-drafts.github.io/private-aggregation-api/#dom-privateaggregation-enabledebugmode · Currently, the availability of Private Aggregation’s debug mode is tied to a caller&#x27;s eligibility to set a third-party cookie (see https:...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Private Aggregation API](http://www.mail-archive.com/blink-dev@chromium.org/msg16947.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; Following Chrome&#x27;s announcement that the current approach to &gt;&gt;&gt;&gt;&gt;&gt; third-party cookies will be maintained, <strong>we are now planning to deprecate &gt;&gt;&gt;&gt;&gt;&gt; and...
- [Google Privacy Sandbox: Topics API Deprecation and Chrome 144 150 Milestones \| Windows Forum](https://windowsforum.com/threads/google-privacy-sandbox-topics-api-deprecation-and-chrome-144-150-milestones.388538) *(windowsforum.com · 2025-11-09T07:16:42)*
  > Confirmed: Chromium threads also document clean‑up and deprecation activity for components of Protected Audience/FLEDGE (for example, the subresource web‑bundle variant of directFromSellerSignals) where usage is extremely low; this work is already re...
- [Deprecate and Remove Shared Storage API \[462465887\] - Chromium](https://issues.chromium.org/issues/462465887) *(issues.chromium.org · 2025-11-20T00:00:00)*
  > Decouple Private Aggregation from Shared Storage Private Aggregation and Shared Storage are both deprecated and scheduled for removal. To facilitate independent removal of the two features, this CL removes the integration between them, including <str...
- [Google Privacy Sandbox API deprecations](https://learnfocus-sigma.vercel.app/?page=en-git-mdn-browser-compat-data-1762585883240) *(learnfocus-sigma.vercel.app · 2025-11-07T16:01:04)*
  > <strong>Google has announced the deprecation of several Privacy Sandbox APIs</strong>. These APIs include document.requestStorageAccessFor, Related Website Sets (RWS), Shared Storage, Protected Audience, Private Aggregation API, Attribution Reporting...
- [PSA: Third-party cookie deprecation for 1% of Chrome Stable starting Q1 2024](https://groups.google.com/a/chromium.org/g/blink-dev/c/GJl_aMO6Qt4) *(groups.google.com)*
  > Mode B: <strong>Chrome globally disables third-party cookies for up to 1% of all Chrome users starting in Q1 2024</strong>.
- [Intent to Deprecate & Remove: Third-Party Cookies](https://groups.google.com/a/chromium.org/g/blink-dev/c/RG0oLYQ0f2I/m/xMSdsEAzBwAJ) *(groups.google.com)*
  > We intend to deprecate and remove default access to third-party (aka cross-site) cookies as part of the Privacy Sandbox Timeline for the Web, <strong>starting with an initial 1% testing period in Q1 2024, followed by a gradual phaseout planned to beg...
- [Request for Deprecation Trial: Deprecate Third-Party Cookies](https://groups.google.com/a/chromium.org/g/blink-dev/c/yGUdvW_t_y0/m/DafsVzHFAQAJ) *(groups.google.com)*
  > We intend to deprecate and remove default access to third-party (aka cross-site) cookies as part of the Privacy Sandbox Timeline for the Web, <strong>starting with an initial 1% testing period in Q1 2024, followed by a gradual phaseout planned to beg...
- [Intent to Ship: Partitioning Storage, Service Workers, and Communication APIs](https://groups.google.com/a/chromium.org/g/blink-dev/c/24hK6DKJnqY) *(groups.google.com)*
  > Correct, we&#x27;re not deprecating third-party cookies with this change - you can learn more about the timeline for that here.
- [How the Private Aggregation API can help publishers, advertisers, and ad tech providers - Privacy Sandbox Help](https://support.google.com/privacysandbox/answer/15858202?hl=en&ref_topic=15857698) *(support.google.com)*
  > When used with Shared Storage, Private Aggregation <strong>generates aggregate reports on cross-site data from Shared Storage in a secure environment</strong>. This is particularly useful for demand-side platforms (DSPs), publishers, and third-party ...
- [Understanding Google's Private Aggregation API in the Privacy Sandbox](https://www.hulkapps.com/blogs/ecommerce-hub/understanding-googles-private-aggregation-api-in-the-privacy-sandbox) *(hulkapps.com · 2024-06-24T11:35:04)*
  > Despite Google delaying the removal of third-party cookies, advertisers need reliable methods to measure the effectiveness of their campaigns. By using the Private Aggregation API, marketers can still answer critical questions around metrics such as ...
- [Private Aggregation API overview \| Privacy Sandbox](https://privacysandbox.google.com/private-advertising/private-aggregation/overview) *(privacysandbox.google.com · 2022-10-11T00:00:00)*
  > <strong>While third-party cookies are still available, we&#x27;ll provide a temporary mechanism that allows easier debugging and testing by enabling the debug mode</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Deprecate and Remove: Private Aggregation API](https://groups.google.com/a/chromium.org/g/blink-dev/c/Ld7avyD0U0Q) *(groups.google.com · 2025-11-07T00:00:00)* *(Cites: `https://chromestatus.com/feature/4683382919397376`)*
  > Intent to Deprecate and Remove: Private Aggregation API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Priv...

## 📚 Platform Documentation & Specifications

- [Privacy sandbox - Privacy on the web - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/Privacy_sandbox) *(developer.mozilla.org)*
- [devdocs/src/guides/v2.4/release-notes/commerce-2-4-1.md at master · magento/devdocs](https://github.com/magento/devdocs/blob/master/src/guides/v2.4/release-notes/commerce-2-4-1.md) *(github.com)*
- [developer.chrome.com/site/en/docs/privacy-sandbox/private-aggregation/index.md at main · GoogleChrome/developer.chrome.com](https://github.com/GoogleChrome/developer.chrome.com//blob/main/site/en/docs/privacy-sandbox/private-aggregation/index.md) *(github.com)*
- [GitHub - patcg-individual-drafts/private-aggregation-api: Explainer for proposed web platform API](https://github.com/patcg-individual-drafts/private-aggregation-api) *(github.com)*
- [How to check if debug mode is enabled in bidding logic? · Issue #363 · privacysandbox/privacy-sandbox-dev-support](https://github.com/privacysandbox/privacy-sandbox-dev-support/issues/363) *(github.com)*
- [private-aggregation-api/README.md at main · patcg-individual-drafts/private-aggregation-api](https://github.com/patcg-individual-drafts/private-aggregation-api/blob/main/README.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 70 result(s) found across 12 planned queries — **43 verified relevant**
  - `"chromestatus.com/feature/4683382919397376" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"patcg-individual-drafts.github.io/private-aggregation-api" -site:patcg-individual-drafts.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Deprecate and remove: Private Aggregation API" API` — *Core feature API query* (7 returned)
  - `"Deprecate and remove: Private Aggregation API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"privacysandbox.google" OR "privacysandbox.com" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and remove: Private Aggregation API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and remove: Private Aggregation API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Private Aggregation API" ("Shared Storage" OR "Protected Audience") tutorial OR guide` — *Finds developer guides and tutorials explaining how the Private Aggregation API was implemented inside Shared Storage or Protected Audience.* (7 returned)
  - `"privateAggregation.contributeToHistogram" OR "privateAggregation.enableDebugMode" github OR site:developer.chrome.com` — *Discovers real-world JavaScript code snippets, worklet usage, and API method signatures for the Private Aggregation API.* (8 returned)
  - `"Private Aggregation API" ("deprecate" OR "deprecated" OR "removal") Chrome "Privacy Sandbox"` — *Surfaces industry announcements, tracking updates, and official blog coverage regarding the plan to deprecate and remove the API.* (8 returned)
  - `"Private Aggregation" deprecation OR third-party cookies site:groups.google.com/a/chromium.org/g/blink-dev` — *Tracks Chromium blink-dev intent-to-deprecate threads and technical community feedback regarding the feature's removal.* (8 returned)
  - `"Private Aggregation API" OR "private-aggregation-api" "third-party cookies" sentiment OR pivot OR impact` — *Identifies ad-tech industry sentiment, analysis, and strategic shifts following Chrome's decision to maintain third-party cookies and drop Private Aggregation.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 6 result(s) found — **0 verified relevant**
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

- [ChromeStatus](https://chromestatus.com/feature/4683382919397376)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4683382919397376)
- [Specification](https://patcg-individual-drafts.github.io/private-aggregation-api)
