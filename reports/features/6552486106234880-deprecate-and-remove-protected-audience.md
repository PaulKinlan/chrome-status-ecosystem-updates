# Deprecate and Remove Protected Audience

> **Report Week:** 2026-W37 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

The Protected Audience API provides a method of interest-group advertising without third-party cookies or user tracking across sites.

Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Protected Audience API (along with certain other Privacy Sandbox APIs, as outlined on the Privacy Sandbox feature status page).

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. Since that announcement there has been virtually no interest in the Protected Audience API. Use of the joinAdInterestGroup() API has decreased by almost 100x and use of the runAdAuction() API has decreased by more than 10x. Of the auctions occurring today, virtually none of them have winners (determined by looking at the “Success” bucket count of the Ads.InterestGroup.Auction.Result UMA), implying that they are not providing useful benefit to the pages initiating them.

## Ecosystem Status

- **Momentum:** High (170 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Following Google's decision to maintain third-party cookies in Chrome, adoption of the Protected Audience API collapsed—with interest-group participation plummeting roughly 100x and initiated auctions producing virtually zero winning bids. Consequently, Chromium has initiated the deprecation and removal of the API in Chrome 153 alongside several other bespoke Privacy Sandbox proposals. Because rival engine vendors never adopted the Turtledove/FLEDGE architecture, the deprecation marks the end of on-device interest group auctions as a prospective web standard.

### Recommendations
- Actionable Advice: Audit existing ad tags and client scripts to safely remove invocations of `navigator.joinAdInterestGroup()` and `navigator.runAdAuction()`. Ensure any remaining legacy script references employ strict feature detection to prevent runtime errors as Chromium phases out the interfaces.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Intent to Deprecate and Remove: data: URL in SVGUseElement" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Intent to Deprecate and Remove: data: URL in SVGUseElement](https://twitter.com/intenttoship/status/1613326211924606976) — *by @intenttoship, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Do Not Reach Lists](https://business.twitter.com/en/help/campaign-setup/campaign-targeting/do-not-reach-lists.html) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Overview \| Docs \| Twitter Developer Platform](https://developer.twitter.com/en/docs/ads/audiences/guides/audience-api-integration) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Custom Audience Permissions \| Docs \| Twitter Developer Platform](https://developer.twitter.com/en/docs/twitter-ads-api/audiences/api-reference/custom-audience-permissions) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Overview \| Docs \| X Developer Platform](https://developer.twitter.com/en/docs/ads/audiences/api-reference/tailored-audience-permissions) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Developers on X: "Over the next 30 days, we will deprecate current access tiers such as Standard (v1.1), Essential (v2), Elevated (v2), and Premium so we recommend that you migrate to the new tiers as soon as possible for a smooth transition." / X](https://twitter.com/XDevelopers/status/1641222786894135296) — *by @XDevelopers, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Tailored Audience Changes — Twitter Developers](https://developer.twitter.com/en/docs/ads/audiences/api-reference/tailored-audience-changes.html) — *0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Intent to Deprecate and Remove: Protected Audience](https://groups.google.com/a/chromium.org/g/blink-dev/c/k_nubsMb97g) *(groups.google.com)*
  > Intent to Deprecate and Remove: Protected Audience Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Protected Audience ...
- [Intent to Ship (I2S): Protected Audience](https://groups.google.com/a/chromium.org/g/blink-dev/c/igFixT5n7Bs/m/ZNrDcQ2dDQAJ) *(groups.google.com)*
  > Intent to Ship (I2S): Protected Audience Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship (I2S): Protected Audience 2,687 views Skip to ...
- [Deprecate and Remove Protected Audience](https://chromestatus.com/feature/6552486106234880) *(chromestatus.com · 2025-11-05T00:00:00)*
  > Chrome Platform Status
- [Protected Audience API overview | Privacy Sandbox](https://privacysandbox.google.com/private-advertising/protected-audience) *(privacysandbox.google.com · 2022-01-27T00:00:00)*
  > Ringkasan Protected Audience API | Privacy Sandbox Langsung ke konten utama / English Deutsch Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 ...
- [Support custom audience targeting with the Protected Audience API | Privacy Sandbox](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience/android) *(developers.google.com)*
  > Permettre le ciblage d&apos;audience personnalisée avec l&apos;API Protected Audience | Privacy Sandbox Passer au contenu principal / English Deutsch Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Р...
- [How to deprecate | Core change policies | About guide on Drupal.org](https://www.drupal.org/about/core/policies/core-change-policies/how-to-deprecate) *(drupal.org · 2026-06-14T13:19:30)*
  > Client Challenge JavaScript is disabled in your browser. Please enable JavaScript to proceed. A required part of this site couldn’t load. This may be due to a browser extension, network issues, or browser settings. Please check your connection, disab...
- [Java @Deprecated Annotation | Baeldung](https://www.baeldung.com/java-deprecated) *(baeldung.com · 2024-01-08T05:18:05)*
  > In this quick tutorial, we’ll have a look at deprecated APIs in Java and how to use the <strong>@Deprecated annotation</strong>.
- [Protected Audience (formerly known as FLEDGE) Integration Guide for Measurement Providers | Display & Video 360 and Google Ads Protected Audience API &nbsp;| Google for Developers](https://developers.google.com/display-video/protected-audience/measurement-partner-guide) *(developers.google.com · 2024-09-18T00:00:00)*
  > As part of the Privacy Sandbox, Chrome proposed Protected Audience API—an in-browser API that lets advertisers and ad tech companies show interest-group targeted ads without relying on third-party cookies, while protecting users from cross-site track...
- [Publisher Guide: How to activate Protected Audience and Topics on your sites | Privacy Sandbox](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience-api/publisher-guide) *(developers.google.com)*
  > If you run your own ad stack, you can implement the APIs directly. The Protected Audience API documentation explains how.
- [Seller guide: run ad auctions | Privacy Sandbox](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience-api/ad-auction) *(developers.google.com · 2022-11-01T00:00:00)*
  > Note: additionalBids is not supported in the current implementation of the Protected Audience API. Read the Auction Participants section in the Protected Audience API explainer for more information. ... Role: Origin of the seller. ... Role: URL for a...
- [javascript - How to determine winning auction prices for ads served to me? - Stack Overflow](https://stackoverflow.com/questions/49548089/how-to-determine-winning-auction-prices-for-ads-served-to-me) *(stackoverflow.com)*
  > There are so many shortcomings with this... we&#x27;re skipping over a bunch of complexities like price granularity, discrepancies, and especially the fact that this is what the publisher was paid (excluding possible revshare agreements with networks...
- [Protected Audience API Developer's Guide | Privacy Sandbox](https://privacysandbox.google.com/private-advertising/protected-audience/android/developer-guide) *(privacysandbox.google.com)*
  > As you read through the Privacy Sandbox on Android documentation, use the Developer Preview or Beta button to select the program version that you&#x27;re working with, as instructions may vary · The Protected Audience API on Android (formerly known a...
- [Protected Audience: integration guide | Privacy Sandbox](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience/android/integration-guide) *(developers.google.com)*
  > When you are ready to begin your integration, set up your development environment with the latest Privacy Sandbox Developer Preview. Set up required server endpoints. Use the sample mocks with your preferred API testing solution to bootstrap this pro...
- [Android Developers Blog: Privacy Sandbox Developer Preview 9: Custom Audience Delegation](https://android-developers.googleblog.com/2023/08/privacy-sandbox-developer-preview-9.html) *(android-developers.googleblog.com)*
  > Protected Audience API: <strong>The first release of Custom Audience Delegation, which supports the creation of custom audiences for buyers that do not have an on-device SDK presence</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Deprecate and Remove: Protected Audience](https://groups.google.com/a/chromium.org/g/blink-dev/c/k_nubsMb97g) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/6552486106234880`)*
  > Intent to Deprecate and Remove: Protected Audience Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Protected...
- [turtledove/spec.bs at main · WICG/turtledove](https://github.com/WICG/turtledove/blob/main/spec.bs) *(github.com)* *(Cites: `https://wicg.github.io/turtledove`)*
  > turtledove/spec.bs at main · WICG/turtledove · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You sig...
- [Intent to Ship (I2S): Protected Audience](https://groups.google.com/a/chromium.org/g/blink-dev/c/igFixT5n7Bs/m/ZNrDcQ2dDQAJ) *(groups.google.com)* *(Cites: `https://wicg.github.io/turtledove`)*
  > Intent to Ship (I2S): Protected Audience Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship (I2S): Protected Audience 2,687 view...

## 📚 Platform Documentation & Specifications

- [turtledove/spec.bs at main · WICG/turtledove](https://github.com/WICG/turtledove/blob/main/spec.bs) *(github.com)*
- [auction · GitHub Topics · GitHub](https://github.com/topics/auction?l=javascript) *(github.com)*
- [Remove PWA Category · Issue #15535 · GoogleChrome/lighthouse](https://github.com/GoogleChrome/lighthouse/issues/15535) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 36 result(s) found across 7 planned queries — **17 verified relevant**
  - `"chromestatus.com/feature/6552486106234880" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"wicg.github.io/turtledove" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Deprecate and Remove Protected Audience" API` — *Core feature API query* (1 returned)
  - `"Deprecate and Remove Protected Audience" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"ads.interestgroup" OR "auction.result" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and Remove Protected Audience" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and Remove Protected Audience" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6552486106234880)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6552486106234880)
- [Specification](https://wicg.github.io/turtledove)
