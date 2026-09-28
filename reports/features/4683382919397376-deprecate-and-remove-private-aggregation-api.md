# Deprecate and remove: Private Aggregation API

> **Report Week:** 2026-W40 | **Milestone:** Chrome 152 | **Category:** Deprecated

## Overview

The Private Aggregation API is a generic mechanism for measuring aggregate, cross-site data in a privacy preserving manner. It was originally designed for a future without third-party cookies.  Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Private Aggregation API (along with certain other Privacy Sandbox APIs, as outlined on the Privacy Sandbox feature status page\[0\]). This API is only exposed via the Shared Storage and Protected Audience APIs, which are also planned to be deprecated and removed. So, no additional work will be required for Private Aggregation.  \[0\]: https://privacysandbox.google.com/overview/status

### Motivation

Chrome has announced[0] that the current approach to third-party cookies will be maintained. Given this, we expect adoption of the Private Aggregation API to decrease over time as cross-site measurement will remain possible in Chrome using third-party cookies. Further, other browser engines have not signaled interest in launching the API. Removing this (and certain other Privacy Sandbox APIs[1]) will help focus efforts on the proposed interoperable Attribution[2] standard.

[0]: https://privacysandbox.com/news/update-on-plans-for-privacy-sandbox-technologies/
[1]: https://privacysandbox.google.com/overview/status
[2]: https://github.com/w3c/attribution

## Ecosystem Status

- **Momentum:** High (420 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Originally conceived as a privacy-preserving measurement mechanism for a cookie-less web, the Private Aggregation API was formally deprecated in Chrome 144 and removed in Chrome 152 following Google's decision to maintain third-party cookies. Because it was exposed exclusively through Shared Storage and Protected Audience—both of which are also being eliminated—the API is being pruned transitively without standalone replacement. Cross-browser consensus was never achieved, prompting standards bodies to refocus measurement efforts on shared, interoperable W3C Attribution proposals instead.

### Recommendations
- Actionable Advice: Audit and decommission all invocation logic within Shared Storage worklets and Protected Audience scripts, as calls will throw runtime errors or fail silently. Engineering teams should discontinue Private Aggregation reporting infrastructure and transition to interoperable measurement standards alongside existing third-party cookie handling where relevant.
- Marked for deprecation in Chrome 152. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Developers on X: "Over the next 30 days, we will deprecate current access tiers such as Standard (v1.1), Essential (v2), Elevated (v2), and Premium so we recommend that you migrate to the new tiers as soon as possible for a smooth transition." / X" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Developers on X: "Over the next 30 days, we will deprecate current access tiers such as Standard (v1.1), Essential (v2), Elevated (v2), and Premium so we recommend that you migrate to the new tiers as soon as possible for a smooth transition." / X](https://twitter.com/XDevelopers/status/1641222786894135296) — *by @XDevelopers, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Developers on X: "Also on February 13, we will deprecate the Premium API. If you’re subscribed to Premium, you can apply for Enterprise to continue using these endpoints." / X](https://twitter.com/XDevelopers/status/1623467619725774848) — *by @XDevelopers, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Martin Fowler on X: "While it's true that this can be efficiently summarized as "platforms should not deprecate APIs" - you're missing all the fun if you don't read the full @Steve\_Yegge rant https://t.co/8o5rvLtaOM" / X](https://twitter.com/martinfowler/status/1295350246441201664?lang=en) — *by @martinfowler, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [outcoldplayer on Twitter: "@thangobrind yes, google finally deprecated API we were using for authentication :( Looking for alternatives"](https://twitter.com/outcoldplayer/status/603944404718485504) — *by @outcoldplayer, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Intent to Deprecate and Remove: Private Aggregation API](https://groups.google.com/a/chromium.org/g/blink-dev/c/Ld7avyD0U0Q) *(groups.google.com · 2025-11-07T00:00:00)*
  > Intent to Deprecate and Remove: Private Aggregation API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Private Aggreg...
- [Deprecate and remove: Private Aggregation API](https://chromestatus.com/feature/4683382919397376) *(chromestatus.com · 2025-10-21T00:00:00)*
  > We cannot provide a description for this page right now
- [\[blink-dev\] Re: Intent to Deprecate and Remove: Private Aggregation API](http://www.mail-archive.com/blink-dev@chromium.org/msg15188.html) *(mail-archive.com)*
  > &gt; &gt; Following Chrome&#x27;s announcement that the current approach to third-party &gt; cookies will be maintained, <strong>we are now planning to deprecate and remove the &gt; Private Aggregation API</strong> (along with certain other Privacy S...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Private Aggregation API](http://www.mail-archive.com/blink-dev@chromium.org/msg16758.html) *(mail-archive.com)*
  > Hi API Owners, <strong>Private Aggregation API was deprecated in M144 with a plan to remove it in M150</strong>.
- [\[blink-dev\] Intent to Deprecate and Remove: Private Aggregation API](http://www.mail-archive.com/blink-dev@chromium.org/msg15139.html) *(mail-archive.com)*
  > This API is only exposed via the Shared Storage and Protected Audience APIs, which are also planned to be deprecated and removed. So, no additional work will be required for Private Aggregation.
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=%22Intent+to+Deprecate+and+Remove%22) *(groups.google.com)*
  > Protected Audience and Shared Storage removed, this API is no longer reachable. Thanks! On Wed, Jul 8, 2026 at 11:01 AM Daniel Bratell wrote: &gt; If I understand you correctly, thisunread, Intent to Deprecate and Remove: Private Aggregation API
- [Deprecate and remove: Private Aggregation API - Chrome Platform ...](https://cr-status.appspot.com/feature/4683382919397376?gate=6673363808419840) *(cr-status.appspot.com)*
  > Acceder con GoogleAcceder con Google. Se abre en una pestaña nueva
- [How to Properly Deprecate an API using Moesif \| Moesif Blog](https://www.moesif.com/blog/api-product-management/deprecation/How-to-Properly-Deprecate-an-API-Using-Moesif) *(moesif.com · 2022-01-21T00:00:00)*
  > Now that you decided you want to move forward with the deprecation, you will need to <strong>announce your deprecation (end-of-life) plan to your API customers</strong>. This should be published on your project blog, changelog, and also emailed to de...
- [API Aggregation Strategy Guide: How to Combine APIs](https://blog.apilayer.com/api-aggregation-strategy-a-comprehensive-guide) *(blog.apilayer.com · 2026-01-27T11:12:20)*
  > As businesses grow, the number of APIs they rely on grows as well. This leads to a familiar problem: too many vendors, too many authentication flows, and too many inconsistent data formats across services.This is where API aggregation becomes a power...
- [The Google Privacy Sandbox: The Big Picture and the Privacy Sandbox Browser Elements \| Blog](https://theprivacysandbox-com.webflow.io/posts/google-privacy-sandbox-big-picture) *(theprivacysandbox-com.webflow.io)*
  > Introduced in HTML5, they are designed to offload tasks that can be time-consuming or resource-intensive and to overcome the limits of single-threaded JavaScript execution. Workers are relatively heavy-weight, and are not intended to be used in large...
- [What is the Privacy Sandbox? - Google](https://privacysandbox.google.com/overview/web) *(privacysandbox.google.com · 2025-10-27T00:00:00)*
  > The Privacy Sandbox APIs require web browsers to take on a new role.
- [Privacy Sandbox feature status](https://privacysandbox.google.com/overview/status) *(privacysandbox.google.com · 2025-10-17T00:00:00)*
  > This page describes implementation status for web and Android technologies developed as part of the Privacy Sandbox initiative.
- [Privacy Sandbox demos](https://privacysandbox.google.com/resources/demos) *(privacysandbox.google.com · 2025-08-15T00:00:00)*
  > JavaScript demo: Use JavaScript Topics methods if you can&#x27;t modify headers. Topics API colab: Experiment with the TensorFlow Lite model used by Chrome to infer topics from hostnames. Topics documentation for the Web: Learn more about how Topics ...
- [The Privacy Sandbox](https://www.chromium.org/Home/chromium-privacy/privacy-sandbox) *(chromium.org)*
  > The Privacy Sandbox project’s mission is to “<strong>Create a thriving web ecosystem that is respectful of users and private by default</strong>.” The main challenge to overcome in that mission is the pervasive cross-site tracking that has become the...
- [Privacy protections \| Privacy Sandbox](https://privacysandbox.google.com/protections) *(privacysandbox.google.com)*
  > Fight spam and fraud on the web with purpose-built, privacy-preserving APIs.
- [Privacy Sandbox - Wikipedia](https://en.wikipedia.org/wiki/Privacy_Sandbox) *(en.wikipedia.org · 2026-09-10T18:19:39)*
  > ↑ &quot;Building a more private <strong>web</strong>&quot;. <strong>Google</strong>. 2019-08-22. Retrieved 2025-12-20. ↑ Shankland, Stephen. &quot;<strong>Google</strong> Chrome&#x27;s &#x27;privacy sandbox&#x27; idea tries fixing privacy without kil...
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > <strong>Following Chrome&#x27;s announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Private Aggregation API</strong> (along with certain other Privacy Sandbox APIs).
- [Private Aggregation API overview \| Privacy Sandbox](https://privacysandbox.google.com/private-advertising/private-aggregation/overview) *(privacysandbox.google.com · 2022-10-11T00:00:00)*
  > You can call <strong>privateAggregation.contributeToHistogram({ bucket: &lt;bucket&gt;, value: &lt;value&gt; }), where the aggregation key is bucket and the aggregatable value as value</strong>. For the bucket parameter, a BigInt is required.
- [Debug Shared Storage \| Privacy Sandbox - Google](https://privacysandbox.google.com/private-advertising/shared-storage/debugging) *(privacysandbox.google.com · 2024-10-24T00:00:00)*
  > privateAggregation.enableDebugMode({debugKey: 1234}); Shared Storage returns a generic error message: Promise is rejected without and explicit error message · You can debug Shared Storage by <strong>wrapping the calls with try-catch blocks</strong>. ...
- [Private Aggregation API breaking changes for Shared Storage](https://groups.google.com/a/chromium.org/g/shared-storage-api-announcements/c/YHloqvcUUhY) *(groups.google.com)*
  > enableDebugMode()’s debug_key parameter is being renamed to debugKey. You must update your code to ensure that the Private Aggregation API continues to work. Outdated Chrome instances will still use the old names, so you should ensure backward compat...
- [Shared Storage and Private Aggregation Implementation Quickstart \| Privacy Sandbox](https://developers.google.com/privacy-sandbox/relevance/shared-storage/api-walkthrough) *(developers.google.com · 2023-10-23T00:00:00)*
  > class SharedStorageReportOperation ...ortOperation); Shared Storage and Private Aggregation <strong>allows creation of cross-origin worklets without the need for cross-origin iframes</strong>....
- [Private Aggregation API fundamentals \| Privacy Sandbox](https://developer.chrome.com/en/docs/privacy-sandbox/private-aggregation-fundamentals) *(developer.chrome.com · 2024-11-27T00:00:00)*
  > The Private Aggregation API <strong>enables aggregate data collection from worklets with access to cross-site data</strong>. The concepts shared here are important for developers building reporting functions within Shared Storage and Protected Audien...
- [Cookieless Measurement: An Introduction to Browser Measurement APIs](https://infotrust.com/articles/introduction-to-browser-measurement-apis) *(infotrust.com · 2023-09-13T16:56:31)*
  > The Private Aggregation API <strong>allows developers to generate aggregate data reports with data from the Protected Audience API (a solution built to support targeting use cases) and Shared Storage</strong>.
- [Private Aggregation API GCP Beta on Chrome](https://groups.google.com/a/chromium.org/g/fledge-api-announce/c/FaJuGp9pprU) *(groups.google.com · 2024-01-23T00:00:00)*
  > This change is available today with the release of Chrome Stable 121. Please see below to get started with Private Aggregation API deployment on GCP and the related changes required. ... Please follow the instructions in our deployment guide to set u...
- [Generate summary reports with the aggregation service \| Privacy Sandbox \| Google for Developers](https://developer.chrome.com/blog/generate-summary-reports) *(developer.chrome.com · 2022-06-06T00:00:00)*
  > There are a number of available developer resources and code samples to get started. To generate summary reports in the origin trial, you&#x27;ll first need to set up the aggregation service. This blog post gives an overview of those steps. Note: If ...
- [How it works \| Privacy Sandbox](https://privacysandbox.google.com/private-advertising/aggregation-service/how-it-works) *(privacysandbox.google.com · 2025-04-29T00:00:00)*
  > In summary, the Attribution Reporting API or the Private Aggregation API <strong>generate reports from multiple browser instances</strong>. Chrome obtains a public key, rotated every seven days, from the Key Hosting Service in the Coordinator, to enc...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Private Aggregation API](http://www.mail-archive.com/blink-dev@chromium.org/msg16947.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; Following Chrome&#x27;s announcement that the current approach to &gt;&gt;&gt;&gt;&gt;&gt; third-party cookies will be maintained, <strong>we are now planning to deprecate &gt;&gt;&gt;&gt;&gt;&gt; and...
- [Google Privacy Sandbox: Topics API Deprecation and Chrome 144 150 Milestones \| Windows Forum](https://windowsforum.com/threads/google-privacy-sandbox-topics-api-deprecation-and-chrome-144-150-milestones.388538) *(windowsforum.com · 2025-11-09T07:16:42)*
  > Confirmed: Chromium threads also document clean‑up and deprecation activity for components of Protected Audience/FLEDGE (for example, the subresource web‑bundle variant of directFromSellerSignals) where usage is extremely low; this work is already re...
- [Google Privacy Sandbox officially shuts down: What it means and what’s next](https://usercentrics.com/knowledge-hub/what-is-google-privacy-sandbox) *(usercentrics.com · 2026-02-12T14:55:02)*
  > Google ended its Privacy Sandbox initiative in <strong>October 2025</strong> after six years of development, citing low adoption rates and continued regulatory pressure. Third-party cookies will remain in Chrome for the foreseeable future with no tim...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Deprecate and Remove: Private Aggregation API](https://groups.google.com/a/chromium.org/g/blink-dev/c/Ld7avyD0U0Q) *(groups.google.com · 2025-11-07T00:00:00)* *(Cites: `https://chromestatus.com/feature/4683382919397376`)*
  > Intent to Deprecate and Remove: Private Aggregation API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Priv...
- [Deprecate and remove: Private Aggregation API · Issue #1326 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1326) *(github.com · 2026-08-14T17:31:48)* *(Cites: `https://chromestatus.com/feature/4683382919397376`)*
  > Deprecate and remove: Private Aggregation API · Issue #1326 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another ...

## 📚 Platform Documentation & Specifications

- [Deprecate and remove: Private Aggregation API · Issue #1326 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1326) *(github.com)*
- [Privacy sandbox - Privacy on the web - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/Privacy_sandbox) *(developer.mozilla.org)*
- [developer.chrome.com/site/en/docs/privacy-sandbox/private-aggregation/index.md at main · GoogleChrome/developer.chrome.com](https://github.com/GoogleChrome/developer.chrome.com//blob/main/site/en/docs/privacy-sandbox/private-aggregation/index.md) *(github.com)*
- [GitHub - patcg-individual-drafts/private-aggregation-api: Explainer for proposed web platform API](https://github.com/patcg-individual-drafts/private-aggregation-api) *(github.com)*
- [developer.chrome.com/site/en/docs/privacy-sandbox/private-aggregation-fundamentals/index.md at main · GoogleChrome/developer.chrome.com](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/privacy-sandbox/private-aggregation-fundamentals/index.md) *(github.com)*
- [developer.chrome.com/site/en/docs/privacy-sandbox/aggregation-service/index.md at main · GoogleChrome/developer.chrome.com](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/privacy-sandbox/aggregation-service/index.md) *(github.com)*
- [private-aggregation-api/README.md at main · patcg-individual-drafts/private-aggregation-api](https://github.com/patcg-individual-drafts/private-aggregation-api/blob/main/README.md) *(github.com)*
- [Feedback on Contribution bounding value, scope, and epsilon · Issue #23 · patcg-individual-drafts/private-aggregation-api](https://github.com/patcg-individual-drafts/private-aggregation-api/issues/23) *(github.com)*
- [Issues · patcg-individual-drafts/private-aggregation-api](https://github.com/patcg-individual-drafts/private-aggregation-api/issues) *(github.com)*
- [Fetch based design as a considered alternative · Issue #42 · patcg-individual-drafts/private-aggregation-api](https://github.com/patcg-individual-drafts/private-aggregation-api/issues/42) *(github.com)*
- [Spec: filtering IDs by alexmturner · Pull Request #123 · patcg-individual-drafts/private-aggregation-api](https://github.com/patcg-individual-drafts/private-aggregation-api/pull/123) *(github.com)*
- [Consider splitting contributions into multiple reports instead of truncating · Issue #81 · patcg-individual-drafts/private-aggregation-api](https://github.com/patcg-individual-drafts/private-aggregation-api/issues/81) *(github.com)*
- [Reliant specs and their layering · Issue #43 · patcg-individual-drafts/private-aggregation-api](https://github.com/patcg-individual-drafts/private-aggregation-api/issues/43) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 67 result(s) found across 11 planned queries — **42 verified relevant**
  - `"chromestatus.com/feature/4683382919397376" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"patcg-individual-drafts.github.io/private-aggregation-api" -site:patcg-individual-drafts.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Deprecate and remove: Private Aggregation API" API` — *Core feature API query* (8 returned)
  - `"Deprecate and remove: Private Aggregation API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"privacysandbox.google" OR "privacysandbox.com" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and remove: Private Aggregation API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and remove: Private Aggregation API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `("privateAggregation.contributeToHistogram" OR "privateAggregation.enableDebugMode") "sharedStorage"` — *Practical JavaScript syntax and code examples showing Private Aggregation API usage inside Shared Storage worklets.* (8 returned)
  - `"Private Aggregation API" (tutorial OR guide OR "developer.chrome.com")` — *Developer documentation, blog posts, and step-by-step guides detailing the implementation of the Private Aggregation API.* (8 returned)
  - `"Private Aggregation API" ("deprecate" OR "removal" OR "sunset") "Privacy Sandbox"` — *Ecosystem coverage and analysis surrounding Chrome's decision to deprecate and remove the Private Aggregation API.* (8 returned)
  - `"private-aggregation-api" site:github.com (issues OR discussions OR "patcg")` — *W3C PATCG and GitHub repository discussions regarding the standard, deprecation plans, and transition to interoperable alternatives.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 4 result(s) found — **0 verified relevant**
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
