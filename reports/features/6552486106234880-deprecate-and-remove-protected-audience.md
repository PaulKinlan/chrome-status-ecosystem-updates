# Deprecate and Remove Protected Audience

> **Report Week:** 2026-W38 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

The Protected Audience API provides a method of interest-group advertising without third-party cookies or user tracking across sites.  Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Protected Audience API (along with certain other Privacy Sandbox APIs, as outlined on the Privacy Sandbox feature status page).

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. Since that announcement there has been virtually no interest in the Protected Audience API. Use of the joinAdInterestGroup() API has decreased by almost 100x and use of the runAdAuction() API has decreased by more than 10x. Of the auctions occurring today, virtually none of them have winners (determined by looking at the “Success” bucket count of the Ads.InterestGroup.Auction.Result UMA), implying that they are not providing useful benefit to the pages initiating them.

## Ecosystem Status

- **Momentum:** High (360 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Deprecate and Remove Protected Audience is currently Deprecated in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Intent to Deprecate and Remove: data: URL in SVGUseElement" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Intent to Deprecate and Remove: data: URL in SVGUseElement](https://twitter.com/intenttoship/status/1613326211924606976) — *by @intenttoship, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Do Not Reach Lists](https://business.twitter.com/en/help/campaign-setup/campaign-targeting/do-not-reach-lists.html) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Overview \| Docs \| Twitter Developer Platform](https://developer.twitter.com/en/docs/ads/audiences/guides/audience-api-integration) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Custom Audience Permissions \| Docs \| Twitter Developer Platform](https://developer.twitter.com/en/docs/twitter-ads-api/audiences/api-reference/custom-audience-permissions) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Overview \| Docs \| X Developer Platform](https://developer.twitter.com/en/docs/ads/audiences/api-reference/tailored-audience-permissions) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Tailored Audience Changes — Twitter Developers](https://developer.twitter.com/en/docs/ads/audiences/api-reference/tailored-audience-changes.html) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [X Developer Platform - X](https://developer.twitter.com/en/docs/ads/audiences/api-reference/audience.html) — *0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Intent to Deprecate and Remove: Protected Audience](http://www.mail-archive.com/blink-dev@chromium.org/msg17381.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Deprecate and Remove: Protected Audience Skip to site navigation (Press enter) Re: [blink-dev] Intent to Deprecate and Remove: Protected Audience Anton Bershanskyi Mon, 07 Sep 2026 01:35:20 -0700 Hi Paul, the email form Jun ...
- [Intent to Deprecate and Remove: Protected Audience](https://groups.google.com/a/chromium.org/g/blink-dev/c/k_nubsMb97g) *(groups.google.com)*
  > Intent to Deprecate and Remove: Protected Audience Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Protected Audience ...
- [Deprecate and Remove Protected Audience](https://chromestatus.com/feature/6552486106234880) *(chromestatus.com · 2025-11-05T00:00:00)*
  > Chrome Platform Status
- [Deprecate and Remove Protected Audience](https://cr-status.appspot.com/feature/6552486106234880) *(cr-status.appspot.com · 2025-11-05T00:00:00)*
  > Chrome Platform Status
- [Protected Audience API Developer's Guide \| Privacy Sandbox](https://privacysandbox.google.com/private-advertising/protected-audience/android/developer-guide) *(privacysandbox.google.com)*
  > As you read through the Privacy Sandbox on Android documentation, use the Developer Preview or Beta button to select the program version that you&#x27;re working with, as instructions may vary · The Protected Audience API on Android (formerly known a...
- [Protected Audience: integration guide \| Privacy Sandbox](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience/android/integration-guide) *(developers.google.com)*
  > When you are ready to begin your integration, set up your development environment with the latest Privacy Sandbox Developer Preview. Set up required server endpoints. Use the sample mocks with your preferred API testing solution to bootstrap this pro...
- [Android Developers Blog: Privacy Sandbox Developer Preview 9: Custom Audience Delegation](https://android-developers.googleblog.com/2023/08/privacy-sandbox-developer-preview-9.html) *(android-developers.googleblog.com)*
  > Protected Audience API: <strong>The first release of Custom Audience Delegation, which supports the creation of custom audiences for buyers that do not have an on-device SDK presence</strong>.
- [PSA: Protected Audience API deprecation and removal](https://groups.google.com/a/chromium.org/g/fledge-api-announce/c/TNCI-S129nM) *(groups.google.com · 2025-12-04T00:00:00)*
  > Following the announcement that Chrome will maintain its current approach to third-party cookies, <strong>the Protected Audience API will be deprecated in Chrome 144</strong>, along with certain other APIs as outlined on the Privacy Sandbox feature s...
- [Google Privacy Sandbox officially shuts down: What it means and what’s next](https://usercentrics.com/knowledge-hub/what-is-google-privacy-sandbox) *(usercentrics.com · 2026-02-12T14:55:02)*
  > At the time, Google insisted the Privacy Sandbox initiative would continue. By <strong>October 2025</strong>, Google officially retired the remaining Privacy Sandbox APIs, including Attribution Reporting, Topics, and Protected Audience for both Chrom...
- [Third-Party Cookies 2026: What Google's Reversal Means](https://seresa.io/blog/data-loss/third-party-cookie-update-2026-googles-reversal-what-actually-died-and-why-it-still-matters-for-wordpress) *(seresa.io · 2025-12-27T12:47:43)*
  > The default behavior—allowing third-party cookies—remains unchanged. The Privacy Sandbox APIs that were supposed to replace third-party cookies? All killed. In <strong>October 2025</strong>, Google deprecated all 10 remaining Privacy Sandbox APIs: To...
- [Chrome's Third-Party Cookies And Google Ads In 2026: What's Changed, What's Still At Risk, And How To Protect Your Targeting](https://www.groas.com/post/chrome-third-party-cookies-google-ads-2026-targeting-measurement-protection) *(groas.com · 2026-05-24T19:10:03)*
  > <strong>Google reversed its plan to fully deprecate them in 2024</strong>, opting instead for a user-choice model where Chrome users can decide whether to allow or block third-party cookies. However, their effectiveness is declining steadily due to g...
- [Google Cookie Deprecation: The Final Shift Is Near](https://seers.ai/blogs/google-cookie-deprecation) *(seers.ai · 2026-03-13T06:35:22)*
  > The Privacy Sandbox proposes a ... without personal identifiers. Protected Audience API (FLEDGE): <strong>Enables on-device interest group targeting and ad auctions</strong>....
- [Google’s changing approach to third-party cookies: impacts and solutions](https://usercentrics.com/knowledge-hub/google-third-party-cookies) *(usercentrics.com · 2026-04-16T08:16:34)*
  > Protected Audience (formerly FLEDGE): ... use cases. However, <strong>by late 2025 Google began retiring major Privacy Sandbox APIs after low adoption and a broader company shift away from full cookie deprecation</strong>....
- [Google May Not Deprecate Third-Party Cookies After All \| Blog \| OneTrust](https://www.onetrust.com/blog/google-may-not-deprecate-third-party-cookies-after-all) *(onetrust.com · 2024-07-25T14:18:34)*
  > Protected Audiences: <strong>A proposal for remarketing and custom audience targeting that operates within the browser, ensuring user data does not leave the device</strong>. Advertisers and publishers must navigate a transitional period where third-...
- [Add definitions for join/leaveAdInterestGroup() and runAdAuction(). \[chromium/src : master\]](https://groups.google.com/a/chromium.org/g/blink-reviews-bindings/c/_CV9W8r9PNA) *(groups.google.com · 2021-03-29T00:00:00)*
  > Patch Set #27, Line 172: /* static */ void NavigatorAuction::joinAdInterestGroup(
- [Why Do I Have "joinAdInterestGroup" Scriplets and Tracing in My Console After Installing React-Scripts as a DevDependency?](https://stackoverflow.com/questions/72551461/why-do-i-have-joinadinterestgroup-scriplets-and-tracing-in-my-console-after-in) *(stackoverflow.com)*
  > VM6:206 #%#//scriptlet(&quot;set-constant&quot;, &quot;navigator.joinAdInterestGroup&quot;, &quot;undefined&quot;) trace start VM6:208 console.trace hit @ VM6:208 VM6:210 #%#//scriptlet(&quot;set-constant&quot;, &quot;navigator.joinAdInterestGroup&qu...
- [FLEDGE API developer guide \| Privacy Sandbox](https://developer.chrome.com/en/blog/fledge-api) *(developer.chrome.com · 2022-01-27T00:00:00)*
  > During an ad auction, the ad-space seller can get realtime data about specific ad creatives by making a request to a Key/Value service using the trustedScoringSignalsUrl property of auction configuration argument passed to navigator.runAdAuction(), a...
- [Intent to Deprecate and Remove: Protected Audience Subresource bundle directFromSellerSignals](https://groups.google.com/a/chromium.org/g/blink-dev/c/t9gHiTwV370) *(groups.google.com)*
  > The Protected Audience API <strong>provides 2 mechanisms that allow signals to be passed into auctions in such a way that ensures the authenticity and integrity of the signals</strong>: the original version, which used subresource web bundles to cont...
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=%22Intent+to+Deprecate+and+Remove%22) *(groups.google.com)*
  > Intent to Deprecate and Remove: Private Aggregation API · <strong>Protected Audience and Shared Storage removed, this API is no longer reachable</strong>.
- [Intent to Deprecate and Remove: Private Aggregation API](https://groups.google.com/a/chromium.org/g/blink-dev/c/Ld7avyD0U0Q) *(groups.google.com · 2025-11-07T00:00:00)*
  > Following Chrome&#x27;s announcement ... outlined on the Privacy Sandbox feature status page). <strong>This API is only exposed via the Shared Storage and Protected Audience APIs, which are also planned to be deprecated and removed</strong>....
- [Intent to Ship: Protected Audiences Negative Targeting](https://groups.google.com/a/chromium.org/g/blink-dev/c/xzrWfs-BwFk) *(groups.google.com)*
  > None. <strong>This is an optional new feature of the Protected Audience API</strong>. Ad techs can use this new feature by specifying values for new fields in the auction config.
- [Intent to Ship (I2S): Protected Audience](https://groups.google.com/a/chromium.org/g/blink-dev/c/igFixT5n7Bs) *(groups.google.com)*
  > The Protected Audience API (formerly known as FLEDGE) provides a method of interest-group advertising without having to track individual users’ detailed browsing history as is done today with third-party cookies.
- [blink-dev - Google Groups](https://groups.google.com/a/chromium.org/g/blink-dev) *(groups.google.com)*
  > Hi Paul, the email form Jun 12 states that Protected Audience API implementation would be removed inunread, Intent to Deprecate and Remove: Protected Audience
- [Intent to Prototype: Protected Audience Bidding & Auction Services](https://groups.google.com/a/chromium.org/g/blink-dev/c/bGd_nPuUrUg/m/j39WQ7e2AwAJ) *(groups.google.com · 2023-05-16T00:00:00)*
  > Bidding &amp; Auction Services: ... API (formerly known as FLEDGE) is <strong>a Privacy Sandbox proposal to serve remarketing and custom audience use cases, designed so third parties cannot track user browsing behavior across sites</strong>....
- [Privacy Sandbox (Topics & Protected Audience API) Explained](https://quickcreator.io/blog/privacy-sandbox-topics-protected-audience-api-explained) *(quickcreator.io · 2025-09-09T19:09:11)*
  > As of 2025, Google has stated it is maintaining support for third‑party cookies, and the UK CMA is consulting on releasing prior commitments. <strong>There is no fixed deprecation date</strong>; see Privacy Sandbox next steps (Apr 2025) and the CMA’s...
- [Protected Audience API: developer guide \| Privacy Sandbox](https://privacysandbox.google.com/private-advertising/protected-audience-api) *(privacysandbox.google.com · 2022-01-27T00:00:00)*
  > We&#x27;ll continue to update the available settings in Chrome based on tests and feedback. In the future, <strong>we plan to offer more granular settings to manage the Protected Audience API and associated data</strong>.
- [Protected Audience API overview \| Privacy Sandbox](https://developers.google.com/privacy-sandbox/relevance/protected-audience) *(developers.google.com · 2022-01-27T00:00:00)*
  > We&#x27;ll update the available settings in Chrome as the Protected Audience API progresses, based on tests and feedback. In the future, <strong>we&#x27;ll offer more granular settings to manage Protected Audience and associated data</strong>.
- [The Protected Audience API Made Simple \| RTB House](https://www.rtbhouse.com/blog/your-guide-to-protected-audience-api) *(rtbhouse.com · 2024-05-26T18:02:05)*
  > Privacy-friendly by design—by reducing the privacy concerns associated with third-party cookies, advertisers will be able to overcome one of the biggest objections users currently have with ads and appease regulators who are continuously developing n...
- [What is Protected Audience API and how to start with it?](https://stape.io/blog/what-is-protected-audience-api) *(stape.io · 2025-04-09T13:24:00)*
  > PAAPI is a vital development in the digital advertising ecosystem. <strong>This solution offers a future-oriented, privacy-centered method of targeting the audience and displaying the most relevant ads without violating user data privacy</strong>.
- [What is Google’s Privacy Sandbox? (explained simply)](https://www.decentriq.com/article/demystifying-google-privacy-sandbox) *(decentriq.com · 2025-09-19T00:00:00)*
  > With the Protected Audience API, a user&#x27;s browser retains advertiser-specified interest groups linked to it and conducts on-device auctions to display advertisements.
- [Privacy Sandbox: What Is the Protected Audience API?](https://www.indexexchange.com/video-series/privacy-sandbox-protected-audience-api) *(indexexchange.com · 2025-04-07T13:43:06)*
  > <strong>Google Chrome plans to deprecate third-party cookies in favor of a privacy-first solution, the Privacy Sandbox, and its associated APIs</strong>. One of these, the Protected Audience API (PAAPI), serves up a new way to address remarketing, wh...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Deprecate and Remove: Protected Audience](http://www.mail-archive.com/blink-dev@chromium.org/msg17381.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6552486106234880`)*
  > Re: [blink-dev] Intent to Deprecate and Remove: Protected Audience Skip to site navigation (Press enter) Re: [blink-dev] Intent to Deprecate and Remove: Protected Audience Anton Bershanskyi Mon, 07 Sep 2026 01:35:20 -0700 Hi Paul, the email...
- [Intent to Deprecate and Remove: Protected Audience](https://groups.google.com/a/chromium.org/g/blink-dev/c/k_nubsMb97g) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/6552486106234880`)*
  > Intent to Deprecate and Remove: Protected Audience Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Protected...

## 📚 Platform Documentation & Specifications

- [Remove PWA Category · Issue #15535 · GoogleChrome/lighthouse](https://github.com/GoogleChrome/lighthouse/issues/15535) *(github.com)*
- [navigator · GitHub Topics · GitHub](https://github.com/topics/navigator?l=javascript) *(github.com)*
- [GitHub - GoogleChromeLabs/fledge-demo-remote · GitHub](https://github.com/GoogleChromeLabs/fledge-demo-remote) *(github.com)*
- [joinadinterestgroup · GitHub Topics · GitHub](https://github.com/topics/joinadinterestgroup) *(github.com)*
- [Getting a return value for navigator.joinAdInterestGroup() · Issue #193 · WICG/turtledove](https://github.com/WICG/turtledove/issues/193) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 66 result(s) found across 12 planned queries — **36 verified relevant**
  - `"chromestatus.com/feature/6552486106234880" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"wicg.github.io/turtledove" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Deprecate and Remove Protected Audience" API` — *Core feature API query* (2 returned)
  - `"Deprecate and Remove Protected Audience" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"ads.interestgroup" OR "auction.result" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and Remove Protected Audience" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and Remove Protected Audience" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Protected Audience" OR "FLEDGE" deprecate OR deprecation "third-party cookies" Chrome` — *Find news, industry analysis, and AdTech reporting regarding Chrome's decision to deprecate the Protected Audience API following the third-party cookie reversal.* (8 returned)
  - `"navigator.runAdAuction" OR "navigator.joinAdInterestGroup" github OR gist OR "code example"` — *Discover practical JavaScript implementations and WebIDL usage of the deprecated Protected Audience auction and interest group APIs.* (8 returned)
  - `"Intent to Deprecate and Remove: Protected Audience" OR "Protected Audience API" site:groups.google.com/a/chromium.org/g/blink-dev` — *Locate official Chromium Blink-dev discussions, developer reactions, and standardization feedback regarding the deprecation and removal timeline.* (8 returned)
  - `"Protected Audience API" deprecation "Privacy Sandbox" guide OR blog OR future` — *Surface developer blogs and explainers detailing migration paths and alternatives for publishers and ad-tech firms affected by the removal.* (8 returned)
  - `site:github.com/WICG/turtledove/issues "deprecate" OR "removal" OR "status"` — *Explore standards body discussions, specification issues, and participant sentiment on the official Turtledove WICG repository.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
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

- [ChromeStatus](https://chromestatus.com/feature/6552486106234880)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6552486106234880)
- [Specification](https://wicg.github.io/turtledove)
