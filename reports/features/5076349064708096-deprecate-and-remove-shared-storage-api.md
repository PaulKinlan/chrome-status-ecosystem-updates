# Deprecate and Remove: Shared Storage API

> **Report Week:** 2026-W40 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

The Shared Storage API is a privacy-preserving web API to enable storage that is not partitioned by first-party site.  Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Shared Storage API (along with certain other Privacy Sandbox APIs, as outlined on the Privacy Sandbox feature status page).  \[0\]: https://privacysandbox.com/news/privacy-sandbox-next-steps/

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. Given this, we expect adoption to decrease over time (currently at ~11% of page loads) as the main use cases for Shared Storage will remain possible in Chrome using third-party cookies. Further, other browser engines have not signaled interest in launching the API. See also the initial public proposal below.

## Ecosystem Status

- **Momentum:** High (260 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Chrome has formally marked the Shared Storage API for deprecation and removal (targeting Chrome 153) following Google's decision to maintain third-party cookie support rather than enforce a mandatory phaseout. Originally designed for privacy-preserving, unpartitioned storage use cases like frequency capping and A/B testing, the API never achieved multi-engine consensus and was rendered largely redundant for Chrome's ad ecosystem. Its removal marks a significant retrenchment of the Privacy Sandbox suite from the web platform.

### Recommendations
- Actionable Advice: Immediately audit codebases to sunset any dependencies on \`window.sharedStorage\` and associated worklets before they stop functioning entirely in Chrome 153. For cross-site state and measurement needs, migrate to interoperable, multi-vendor standards such as the Storage Access API (SAA) or CHIPS (partitioned cookies).
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Privacy Sandbox: Technology for a More Private Web" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Privacy Sandbox: Technology for a More Private Web](https://privacysandbox.com/?amp=&amp=) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Privacy Sandbox for the Web reaches general availability](https://privacysandbox.com/news/privacy-sandbox-for-the-web-reaches-general-availability) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Developers on X: "Also on February 13, we will deprecate the Premium API. If you’re subscribed to Premium, you can apply for Enterprise to continue using these endpoints." / X](https://twitter.com/XDevelopers/status/1623467619725774848) — *by @XDevelopers, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Developers on X: "Over the next 30 days, we will deprecate current access tiers such as Standard (v1.1), Essential (v2), Elevated (v2), and Premium so we recommend that you migrate to the new tiers as soon as possible for a smooth transition." / X](https://twitter.com/XDevelopers/status/1641222786894135296) — *by @XDevelopers, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Anaminus on Twitter: "My API dump endpoint and old API reference site are now deprecated. https://t.co/DMnognigLL"](https://twitter.com/Anaminus/status/1046849000392019968) — *by @Anaminus, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Martin Fowler on X: "While it's true that this can be efficiently summarized as "platforms should not deprecate APIs" - you're missing all the fun if you don't read the full @Steve\_Yegge rant https://t.co/8o5rvLtaOM" / X](https://twitter.com/martinfowler/status/1295350246441201664?lang=en) — *by @martinfowler, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEJVfoAbxMuuZ1RAh0mJZpzmiJgEqbqI8FkqbMBKanoN5zeKnomMypktAB5OH5x_nzmsjy_OUapmeSELlg3Q2ue9_IXLH6n7BnAtBJPbJ-Jqa_BNK7MQ4bHF8LuZKOqycov7SFybOfxmlKt66pEoHbo1h5QKQlIDt9l) *(vertexaisearch.cloud.google.com)*
  > Shared Storage API - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs Shared Storage API Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Shared Storage API Deprecated To be remo...
- [Deprecate and Remove Shared Storage API \[462465887\] - Chromium](https://issues.chromium.org/issues/462465887) *(issues.chromium.org · 2025-11-20T00:00:00)*
  > https://privacysandbox.com/news/privacy-sandbox-next-steps/ and https://<strong>chromestatus.com/feature/5076349064708096</strong>.
- [Intent To Deprecate and Remove: Shared Storage API](https://groups.google.com/a/chromium.org/g/blink-dev/c/uh5Ke6qyegc) *(groups.google.com · 2025-11-07T00:00:00)*
  > https://<strong>chromestatus.com/feature/5076349064708096</strong> · unread, Nov 9, 2025, 7:46:51 PM11/9/25 ·  ·  ·  · Reply to author · Sign in to reply to author · Forward · Sign in to forward · Delete · You do not have permission to delete mess...
- [PSA: Shared Storage API deprecation and removal](https://groups.google.com/a/chromium.org/g/shared-storage-api-announcements/c/QvXkrgoqi80) *(groups.google.com · 2025-12-04T00:00:00)*
  > Following the announcement that Chrome will maintain its current approach to third-party cookies, <strong>the Shared Storage API will be deprecated in Chrome 144</strong>, along with certain other APIs as outlined on the Privacy Sandbox feature statu...
- [Deprecate and Remove: Shared Storage API](https://chromestatus.com/feature/5076349064708096) *(chromestatus.com · 2025-11-05T00:00:00)*
  > We cannot provide a description for this page right now
- [\[blink-dev\] Intent To Deprecate and Remove: Shared Storage API](http://www.mail-archive.com/blink-dev@chromium.org/msg15141.html) *(mail-archive.com)*
  > Contact emails [email protected] Explainer https://github.com/WICG/shared-storage/blob/main/README.md Specification https://wicg.github.io/shared-storage/ Summary The Shared Storage API is a privacy-preserving web API to enable storage that is not pa...
- [Re: \[blink-dev\] Intent To Deprecate and Remove: Shared Storage API](http://www.mail-archive.com/blink-dev@chromium.org/msg15156.html) *(mail-archive.com)*
  > Following Chrome&#x27;s announcement &lt;https://privacysandbox.com/news/privacy-sandbox-next-steps/&gt;that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Shared Storage API (along wit...
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=%22Intent+to+Deprecate+and+Remove%22) *(groups.google.com)*
  > Intent to Deprecate and Remove: Private Aggregation API · Protected Audience and Shared Storage removed, this API is no longer reachable.
- [Shared Storage and Private Aggregation Implementation Quickstart \| Privacy Sandbox](https://privacysandbox.google.com/private-advertising/shared-storage/api-walkthrough) *(privacysandbox.google.com · 2023-10-23T00:00:00)*
  > Methods that are used in the worklet ... such as setting, appending, and deleting values in Shared Storage can be done <strong>using response headers</strong>....
- [Storage updates in Android 11 \| Android Developers](https://developer.android.com/about/versions/11/privacy/storage) *(developer.android.com)*
  > To read and write to all files in shared storage using this app, you need to have the all files access permission. If your app targets Android 11, both the WRITE_EXTERNAL_STORAGE permission and the WRITE_MEDIA_STORAGE privileged permission no longer ...
- [Overview of shared storage \| App data and files \| Android Developers](https://developer.android.com/training/data-storage/shared) *(developer.android.com · 2026-03-05T00:00:00)*
  > This document explains how to use shared storage for user data that is accessible to other apps and persists even after app uninstallation.
- [How to Deprecate an API: Smooth Transition Tips](https://blog.treblle.com/best-practices-deprecating-api) *(blog.treblle.com)*
  > <strong>Clearly mark the deprecated API in your documentation</strong>. This can include adding a &quot;Deprecated&quot; label next to the API endpoints, including a banner or note at the top of the documentation page, and updating any related tutori...
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
- [Re: \[blink-dev\] Intent To Deprecate and Remove: Shared Storage API](http://www.mail-archive.com/blink-dev@chromium.org/msg16911.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt; Following Chrome&#x27;s announcement &gt;&gt;&gt;&gt;&gt;&gt;&gt; &lt;https://privacysandbox.com/news/privacy-sandbox-next-steps/&gt; that &gt;&gt;&gt;&gt;&gt;&gt;&gt; the current approach to ...
- [Chrome 153 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/153) *(developer.chrome.com · 2026-09-08T00:00:00)*
  > Following Chrome&#x27;s announcement that the current approach to third-party cookies will be maintained, <strong>the Shared Storage API is planned for deprecation and removal</strong> (along with related Privacy Sandbox APIs).

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Deprecate and Remove Shared Storage API \[462465887\] - Chromium](https://issues.chromium.org/issues/462465887) *(issues.chromium.org · 2025-11-20T00:00:00)* *(Cites: `https://chromestatus.com/feature/5076349064708096`)*
  > https://privacysandbox.com/news/privacy-sandbox-next-steps/ and https://<strong>chromestatus.com/feature/5076349064708096</strong>.
- [Intent To Deprecate and Remove: Shared Storage API](https://groups.google.com/a/chromium.org/g/blink-dev/c/uh5Ke6qyegc) *(groups.google.com · 2025-11-07T00:00:00)* *(Cites: `https://chromestatus.com/feature/5076349064708096`)*
  > https://<strong>chromestatus.com/feature/5076349064708096</strong> · unread, Nov 9, 2025, 7:46:51 PM11/9/25 ·  ·  ·  · Reply to author · Sign in to reply to author · Forward · Sign in to forward · Delete · You do not have permission to d...
- [\[Google Privacy Sandbox\] Chrome 152 removed Shared Storage API by bershanskiy · Pull Request #30659 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30659) *(github.com)* *(Cites: `https://chromestatus.com/feature/5076349064708096`)*
  > Do we know if the removal is complete in 152? Chromestatus says 153 https://<strong>chromestatus.com/feature/5076349064708096</strong>

## 📚 Platform Documentation & Specifications

- [\[Google Privacy Sandbox\] Chrome 152 removed Shared Storage API by bershanskiy · Pull Request #30659 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30659) *(github.com)*
- [Shared Storage API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Shared_Storage_API) *(developer.mozilla.org)*
- [The Privacy Sandbox · GitHub](https://github.com/privacysandbox) *(github.com)*
- [GitHub - WICG/shared-storage: Explainer for proposed web platform Shared Storage API · GitHub](https://github.com/WICG/shared-storage) *(github.com)*
- [SharedStorage](https://developer.mozilla.org/en-US/docs/Web/API/SharedStorage) *(developer.mozilla.org)*
- [WorkletSharedStorage](https://developer.mozilla.org/en-US/docs/Web/API/WorkletSharedStorage) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 57 result(s) found across 12 planned queries — **23 verified relevant**
  - `"chromestatus.com/feature/5076349064708096" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"wicg.github.io/shared-storage" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Deprecate and Remove: Shared Storage API" API` — *Core feature API query* (7 returned)
  - `"Deprecate and Remove: Shared Storage API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"privacysandbox.com" OR "privacy-preserving" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and Remove: Shared Storage API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and Remove: Shared Storage API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `Chrome "Shared Storage API" (deprecate OR removal OR "Privacy Sandbox")` — *Find official announcements and news reports regarding the deprecation and removal plan for the Shared Storage API following the pivot on third-party cookies.* (8 returned)
  - `"Intent to Deprecate and Remove" "Shared Storage" site:groups.google.com/a/chromium.org` — *Locate developer and browser vendor discussions in Blink-dev intent threads regarding the removal rationale and feedback.* (5 returned)
  - `window.sharedStorage ("selectURL" OR "worklet.addModule" OR "set") code example` — *Discover concrete JavaScript code snippets and worklet implementation details using the Shared Storage API methods.* (8 returned)
  - `"Shared Storage API" ("Privacy Sandbox" OR WICG) (tutorial OR guide OR "use cases")` — *Uncover developer tutorials, architectural deep dives, and explanatory blog posts detailing how Shared Storage was designed to work.* (8 returned)
  - `"Shared Storage API" ("third-party cookies" OR "CHIPS" OR "Storage Access API") alternatives OR migration` — *Track ad tech and web ecosystem strategies on migrating away from Shared Storage back to third-party cookies or alternative storage mechanisms.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **1 verified relevant**
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
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5076349064708096)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5076349064708096)
- [Specification](https://wicg.github.io/shared-storage)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/462465887)
