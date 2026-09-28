# Deprecate and Remove Protected Audience

> **Report Week:** 2026-W40 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

The Protected Audience API provides a method of interest-group advertising without third-party cookies or user tracking across sites.  Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Protected Audience API (along with certain other Privacy Sandbox APIs, as outlined on the Privacy Sandbox feature status page).

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. Since that announcement there has been virtually no interest in the Protected Audience API. Use of the joinAdInterestGroup() API has decreased by almost 100x and use of the runAdAuction() API has decreased by more than 10x. Of the auctions occurring today, virtually none of them have winners (determined by looking at the “Success” bucket count of the Ads.InterestGroup.Auction.Result UMA), implying that they are not providing useful benefit to the pages initiating them.

## Ecosystem Status

- **Momentum:** High (240 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** The Protected Audience API (formerly FLEDGE) is being formally deprecated and removed from Chromium starting in Chrome 153 following Google's reversal on deprecating third-party cookies by default. With third-party cookies remaining available, real-world usage of interest-group auctions plummeted by up to 100x with virtually no winning bids, demonstrating a collapse in production utility. Because rival engines never adopted the proposal, its removal closes out a controversial, Chromium-only experiment without cross-browser standardization.

### Recommendations
- Actionable Advice: Web developers and ad-tech integrators should immediately audit codebases to rip out calls to \`navigator.joinAdInterestGroup()\` and \`navigator.runAdAuction()\`, as well as related permissions policies. Transition ad serving pipelines back to standard server-side workflows, contextual targeting, and interoperable storage access mechanisms rather than keeping deprecated Privacy Sandbox client hooks.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Intent to Deprecate and Remove: data: URL in SVGUseElement" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Intent to Deprecate and Remove: data: URL in SVGUseElement](https://twitter.com/intenttoship/status/1613326211924606976) — *by @intenttoship, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Do Not Reach Lists](https://business.twitter.com/en/help/campaign-setup/campaign-targeting/do-not-reach-lists.html) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Custom Audience Permissions \| Docs \| Twitter Developer Platform](https://developer.twitter.com/en/docs/twitter-ads-api/audiences/api-reference/custom-audience-permissions) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Overview \| Docs \| X Developer Platform](https://developer.twitter.com/en/docs/ads/audiences/api-reference/tailored-audience-permissions) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Tailored Audience Changes — Twitter Developers](https://developer.twitter.com/en/docs/ads/audiences/api-reference/tailored-audience-changes.html) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [X Developer Platform - X](https://developer.twitter.com/en/docs/ads/audiences/api-reference/audience.html) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Website Activity Custom Audiences](https://business.twitter.com/en/help/campaign-setup/campaign-targeting/custom-audiences/website-activity.html) — *0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Intent to Deprecate and Remove: Protected Audience](https://groups.google.com/a/chromium.org/g/blink-dev/c/k_nubsMb97g) *(groups.google.com)*
  > Intent to Deprecate and Remove: Protected Audience Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Protected Audience ...
- [Deprecate and Remove Protected Audience](https://chromestatus.com/feature/6552486106234880) *(chromestatus.com · 2025-11-05T00:00:00)*
  > Chrome Platform Status
- [Protected Audience API Developer's Guide \| Privacy Sandbox](https://privacysandbox.google.com/private-advertising/protected-audience/android/developer-guide) *(privacysandbox.google.com)*
  > Note: Make sure to remove android:debuggable=&quot;true&quot; before you ship your application.
- [Progressive Web App (PWA) Development Ultimate Guide - Riseup Labs](https://riseuplabs.com/pwa-development-ultimate-guide) *(riseuplabs.com · 2025-12-10T05:24:22)*
  > Adoption by Major Brands: Over time, more businesses began to recognize the benefits of PWAs, leading to widespread adoption across various industries. Companies like Alibaba, Pinterest, and The Washington Post harnessed the power of PWAs to reach br...
- [Protected Audience: integration guide \| Privacy Sandbox](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience/android/integration-guide) *(developers.google.com)*
  > When you are ready to begin your integration, set up your development environment with the latest Privacy Sandbox Developer Preview. Set up required server endpoints. Use the sample mocks with your preferred API testing solution to bootstrap this pro...
- [Android Developers Blog: Privacy Sandbox Developer Preview 9: Custom Audience Delegation](https://android-developers.googleblog.com/2023/08/privacy-sandbox-developer-preview-9.html) *(android-developers.googleblog.com)*
  > Protected Audience API: <strong>The first release of Custom Audience Delegation, which supports the creation of custom audiences for buyers that do not have an on-device SDK presence</strong>.
- [FLEDGE API developer guide \| Privacy Sandbox](https://developer.chrome.com/en/blog/fledge-api) *(developer.chrome.com · 2022-01-27T00:00:00)*
  > Explainer section: Fetching Real-Time Data from the Protected Audience Key/Value service. During an ad auction, the ad-space seller can get realtime data about specific ad creatives by making a request to a Key/Value service using the trustedScoringS...
- [Protected Audience API overview \| Privacy Sandbox](https://developer.chrome.com/docs/privacy-sandbox/fledge) *(developer.chrome.com · 2023-02-09T00:00:00)*
  > <strong>The owner asks the user&#x27;s browser to add membership of their interest group by calling the JavaScript function navigator.joinAdInterestGroup(), providing information such as data about ads relevant to the interest group, and a URL for Ja...
- [Why Do I Have "joinAdInterestGroup" Scriplets and Tracing in My Console After Installing React-Scripts as a DevDependency?](https://stackoverflow.com/questions/72551461/why-do-i-have-joinadinterestgroup-scriplets-and-tracing-in-my-console-after-in) *(stackoverflow.com)*
  > <strong>It&#x27;s to protect against the cynically named &quot;Protected Audience API&quot;, which basically runs advertisement auctions on your device</strong>.
- [Protected Audience API (FLEDGE) \| Privacy Sandstorm](https://privacysandstorm.com/privacy-sandbox/protected-audience) *(privacysandstorm.com)*
  > navigator.joinAdInterestGroup() navigator.leaveAdInterestGroup() navigator.clearOriginJoinedAdInterestGroups() Auctions: navigator.runAdAuction() navigator.adAuctionComponents() navigator.createAuctionNonce() Several new HTTP headers as well: Ad-Auct...
- [Define audience data \| Privacy Sandbox](https://developer.chrome.com/docs/privacy-sandbox/protected-audience-api/interest-groups) *(developer.chrome.com · 2022-11-01T00:00:00)*
  > The advertiser&#x27;s demand-side platform (DSP) or the advertiser itself calls navigator.joinAdInterestGroup() to <strong>ask the browser to add an interest group to the browser&#x27;s membership list</strong>.
- [PSA: Protected Audience API deprecation and removal](https://groups.google.com/a/chromium.org/g/fledge-api-announce/c/TNCI-S129nM) *(groups.google.com · 2025-12-04T00:00:00)*
  > Following the announcement that Chrome will maintain its current approach to third-party cookies, <strong>the Protected Audience API will be deprecated in Chrome 144</strong>, along with certain other APIs as outlined on the Privacy Sandbox feature s...
- [Google Privacy Sandbox Update 2026: Why Google Shut It Down](https://segwise.ai/blog/google-privacy-sandbox-shutdown-reason) *(segwise.ai · 2026-07-08T17:46:51)*
  > <strong>January to July 2026 (Chrome removes the APIs): Chrome started · deprecating Topics, Protected Audience, Attribution Reporting, and related APIs in Chrome 144 (January 2026), with full removal targeted for Chrome 150 (July 2026).</strong>
- [Google Pulls The Plug On Topics, PAAPI And Other Major Privacy Sandbox APIs (As The CMA Says ‘Cheerio’) \| AdExchanger](https://www.adexchanger.com/privacy/google-pulls-the-plug-on-topics-paapi-and-other-major-privacy-sandbox-apis-as-the-cma-says-cheerio) *(adexchanger.com · 2025-10-19T03:27:47)*
  > Simultaneously, Google announced that it’s “decided to retire” a whole pile of Privacy Sandbox technologies, including (and strap in): the attribution reporting API on both Chrome and Android; IP protection; on-device personalization; private aggrega...
- [Google Privacy Sandbox: Topics API Deprecation and Chrome 144 150 Milestones \| Windows Forum](https://windowsforum.com/threads/google-privacy-sandbox-topics-api-deprecation-and-chrome-144-150-milestones.388538) *(windowsforum.com · 2025-11-09T07:16:42)*
  > Separately, Chromium mailing‑list activity and related “intent” posts show removal work on parts of the Protected Audience (formerly FLEDGE) implementation — in some cases earlier, lower‑impact elements were already flagged for removal — because usag...
- [Privacy Sandbox feature status](https://privacysandbox.google.com/overview/status) *(privacysandbox.google.com · 2025-10-17T00:00:00)*
  > Explainer: Fenced Storage Read API. Continue to support. See Content-Security-Policy: frame-ancestors directive. Scheduled for phaseout. Chrome Platform Status. Scheduled for phaseout. ... Chrome Platform Status. Scheduled for phaseout. ... Chrome Pl...
- [Chrome kills most Privacy Sandbox technologies after adoption fails](https://ppc.land/chrome-kills-most-privacy-sandbox-technologies-after-adoption-fails) *(ppc.land · 2025-10-18T07:06:31)*
  > The technology attempted to replace third-party cookie-based measurement by moving attribution logic into the browser, using differential privacy techniques including noise injection and time delays to protect individual user privacy. Advertisers rec...
- [Third-Party Cookies in 2026: What Actually Happened After Google's Reversal \| Consenteo](https://www.consenteo.com/knowledge-hub/cookies/third_party_cookies_2026_after_google_reversal) *(consenteo.com · 2026-04-03T00:00:00)*
  > The APIs that died (Topics, Protected Audience, Attribution Reporting) were replacement technologies for specific adtech use cases that didn&#x27;t reach adoption because the replacement was either harder to use than the thing it replaced, or didn&#x...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Deprecate and Remove Protected Audience · Issue #1141 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1141) *(github.com · 2026-07-29T21:48:26)* *(Cites: `https://chromestatus.com/feature/6552486106234880`)*
  > Deprecate and Remove Protected Audience · Issue #1141 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or...
- [Intent to Deprecate and Remove: Protected Audience](https://groups.google.com/a/chromium.org/g/blink-dev/c/k_nubsMb97g) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/6552486106234880`)*
  > Intent to Deprecate and Remove: Protected Audience Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Protected...

## 📚 Platform Documentation & Specifications

- [Deprecate and Remove Protected Audience · Issue #1141 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1141) *(github.com)*
- [Remove PWA Category · Issue #15535 · GoogleChrome/lighthouse](https://github.com/GoogleChrome/lighthouse/issues/15535) *(github.com)*
- [Enforce staged PWA release rollout with selected user testers by haruharu42 · Pull Request #138 · haruharu42/AIArticleStudio-Updates](https://github.com/haruharu42/AIArticleStudio-Updates/pull/138) *(github.com)*
- [turtledove/FLEDGE.md at main · WICG/turtledove](https://github.com/WICG/turtledove/blob/main/FLEDGE.md) *(github.com)*
- [developer.chrome.com/site/en/blog/fledge-api/index.md at main · GoogleChrome/developer.chrome.com](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/blog/fledge-api/index.md) *(github.com)*
- [GitHub - WICG/turtledove: TURTLEDOVE · GitHub](https://github.com/WICG/turtledove) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 63 result(s) found across 11 planned queries — **24 verified relevant**
  - `"chromestatus.com/feature/6552486106234880" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"wicg.github.io/turtledove" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Deprecate and Remove Protected Audience" API` — *Core feature API query* (2 returned)
  - `"Deprecate and Remove Protected Audience" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"ads.interestgroup" OR "auction.result" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and Remove Protected Audience" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and Remove Protected Audience" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"navigator.joinAdInterestGroup" OR "navigator.runAdAuction" ("Protected Audience" OR FLEDGE)` — *Finds concrete JavaScript implementations, code samples, and WebIDL API calls for the Protected Audience API.* (8 returned)
  - `"Protected Audience API" (deprecate OR deprecation OR removal) Chrome "Privacy Sandbox"` — *Surfaces official Google Chrome announcements, timeline updates, and status changes regarding the removal of Protected Audience.* (8 returned)
  - `"Protected Audience" (deprecated OR deprecation) ("third-party cookies" OR adtech OR FLEDGE)` — *Captures adtech ecosystem reactions, industry sentiment, and community debate following Chrome's decision to maintain third-party cookies.* (8 returned)
  - `"Protected Audience API" tutorial OR "how to implement" OR explainer WICG turtledove` — *Discovers engineering blog posts, transition articles, and historic developer guides covering Turtledove and Protected Audience workflows.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
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
