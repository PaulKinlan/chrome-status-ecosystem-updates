# Deprecate and Remove Protected Audience

> **Report Week:** 2026-W39 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

The Protected Audience API provides a method of interest-group advertising without third-party cookies or user tracking across sites.  Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Protected Audience API (along with certain other Privacy Sandbox APIs, as outlined on the Privacy Sandbox feature status page).

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. Since that announcement there has been virtually no interest in the Protected Audience API. Use of the joinAdInterestGroup() API has decreased by almost 100x and use of the runAdAuction() API has decreased by more than 10x. Of the auctions occurring today, virtually none of them have winners (determined by looking at the “Success” bucket count of the Ads.InterestGroup.Auction.Result UMA), implying that they are not providing useful benefit to the pages initiating them.

## Ecosystem Status

- **Momentum:** High (320 points)
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
- 🐦 **Twitter / X:** [Custom Audience Permissions \| Docs \| Twitter Developer Platform](https://developer.twitter.com/en/docs/twitter-ads-api/audiences/api-reference/custom-audience-permissions) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Overview \| Docs \| X Developer Platform](https://developer.twitter.com/en/docs/ads/audiences/api-reference/tailored-audience-permissions) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Custom Audiences](https://business.twitter.com/en/help/campaign-setup/campaign-targeting/custom-audiences.html) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [X Developer Platform - X](https://developer.twitter.com/en/docs/ads/audiences/api-reference/audience.html) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Website Activity Custom Audiences](https://business.twitter.com/en/help/campaign-setup/campaign-targeting/custom-audiences/website-activity.html) — *0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFrx9ljbNx_mNE5_nrjWX0rCW7JEWYyy8Oy2v07eUj3C8n5jeCmuah2-J5dFVEGBs_jTfcuhB3PAqCafNHsq5xTzzb5uJe70Ca1qhZ_y0CKBHnfbFx3jJ2V0HZXy-dtibeSkXSCihcqvza0aOR1ZPgF_AdrCVZFINy3Ky8mRKY=) *(vertexaisearch.cloud.google.com)*
  > Protected Audience API overview | Privacy Sandbox Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – ...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHwymKbS1CVm2NfUWKpXBPIrwT0L8qHbbb2Qog2VhDuBYqQulxwdkjnuQKJJ1WZPttG9-hu_Pbnlu9av3Yctj9OXFq-IRX0T7TRe5YSXmeYrSH5_VPvydaxOUvzgSbp4Fcu4UfCdWlw) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [linkutm.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFFskchNGYwC0117MjOeRgSPVIK9lTMWwUkTSELpKZIpe8VWodnjJWgq6YqxC_uL4CyJc6NuyKMS2yC14LmsHYcNnnxSMWsm71ohQRwwvWSqJO5qHu4nWDCI9VUVXcdMv4CNg==) *(vertexaisearch.cloud.google.com)*
  > Privacy Sandbox: What It Was and Why Google Retired It Glossary Term Privacy Sandbox Privacy Sandbox is a Google initiative, announced in August 2019, that proposed a set of browser APIs to support advertising without cross-site tracking. It existed ...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHSh_50rZ5F3-fbQe3QuDBi_af_SoTjr1txFi-UwZY9CIpgPqs48rBbdYWx4e-7-bTh4ETLn3X5C-ezCqK2vIlGuHQ1fA_hlIZGC3MD0zjY8YE3kqgCfXrTOg0jDyfsQZC9lPEZRr7EQ-bY2IgN) *(vertexaisearch.cloud.google.com)*
  > Google Privacy Sandbox API deprecations · Issue #28417 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to ref...
- [arxiv.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHhIqEf_IcRtLSdBSN8AV3_MY-h92kJTPA2QW8A6saw6-eXhrY9SLC7FCilOAKEZqo-OFZdxPXItnPsVrP_kuaiLD-Rjg2qNVOW6n9FLbfZRQ7AbjJJNaTUZw==) *(vertexaisearch.cloud.google.com)*
  > Longitudinal Adoption and Deprecation of the Privacy Sandbox Web APIs Report GitHub Issue × Title: Content selection saved. Describe the issue below: Description: arXiv is now an independent nonprofit! Learn more &times; Back to arXiv License: CC BY ...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFVRo5SAsSh3B_1jZsDty_KSINIk8BQ3qAI-ou5e11myA_QHRy3juLeeyJuTeiqTkgr7uDeeZrSQy3K56g3MEzgp6DtpMlrz7ZTd-HUu-LgimHrFItpXdyy4X9vfORJtukhM5sdj4bVnTTLS9BE07jyu1cJ1t3J1wsWOyTBjNAgYf4=) *(vertexaisearch.cloud.google.com)*
  > Privacy sandbox - Privacy on the web | MDN Skip to main content Skip to search Toggle sidebar Web Privacy on the web Guides Privacy sandbox Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) 日本語 中文 (简体) Privacy...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHVpyT0gSFCcbEFn4Nth1ZY1KC1XJ-tQPx7kEgNVVwNMBJlmjDjH3eg2CFb4I_v9dmclRK8kH6jtuYRD610B8saaX-DfXWZMLFKfyH8u89py_kA2BWfxauQu5Kuq8srXI4PAhOyMfHT) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGbqfDIFf1Yn2rFhcTncT6fSAGN1E2_dPNSPSJVn8rbRqVjU-B6j_5aU92zVMrdou9ztKA9JT78EnNVJg6BwqA1qNfFeZkyY5lYFsaUeA8ghkd5idD7YcpkQZKtmXJp2CjEDg5uoNyY) *(vertexaisearch.cloud.google.com)*
  > Estado de las funciones de Privacy Sandbox Ir al contenido principal / English Deutsch Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEpnuUPS6v6u9rOTbFfR0IZuLpE_winVMzzijQ4w8fDIp1D3Kf9-oXOGMSjjxnDYCgtptNXWsTq1vwQE-Bxu6ndJAmRSHMNDwtE5qsXI2Av6RODTTboQiuJk87u1Bb1QH1OjKfYt2ILw8SYbokU9uHpVQ--PxsrDTTVG4f3uoYdtRbUadbCk0MHwoQ=) *(vertexaisearch.cloud.google.com)*
  > ### Overview and Summary  The **Protected Audience API** (formerly FLEDGE under the WICG TURTLEDOVE proposal) was conceived as a privacy-preserving mechanism for on-device remarketing and ad auctions without third-party cookies.   Following Google’s
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFEX5btZlzQumut_GRT0uG6Amtxm3V-i6umZfYoOPBYaVz_864BQ_lgD_y6b1YnggA6Yam0q8zki0z8tPsn5KWZT6xpUvNBBJ0eGrrHjcVBBe_qc2EOA4ndIaoTx0N9OkaBFGvp8PHl_nJJq2l6AkEUGmzFIomtnSg=) *(vertexaisearch.cloud.google.com)*
  > ### Overview and Summary  The **Protected Audience API** (formerly FLEDGE under the WICG TURTLEDOVE proposal) was conceived as a privacy-preserving mechanism for on-device remarketing and ad auctions without third-party cookies.   Following Google’s
- [publift.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHJCciCUI3o7S6ND5ElQJRNIdSwMIkVyfMhb5d1R-9vHc6oKlOEhQ7qR1IJ-ZN-sy-VPCiSScOzf0ls1b4He-SkhuBWHJBgEb3qT_0Kk5AuNnEmhPZkfx5LRRBDoLsvYEcfUlxjfwqc1-w=) *(vertexaisearch.cloud.google.com)*
  > ### Overview and Summary  The **Protected Audience API** (formerly FLEDGE under the WICG TURTLEDOVE proposal) was conceived as a privacy-preserving mechanism for on-device remarketing and ad auctions without third-party cookies.   Following Google’s
- [secureprivacy.ai](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEWEEO5uZOlHfy2Hniw9r56EDa34JlCkzzUOiiPqjSjm4WNHY1ABSXUp8mqPqiFP5My91Sswz14jvZkPtT3dW2c7dJ1FqD48uE3vrVympI51_uGD453umlhINyZTIv3TUnZ0lxvtvQk74ocQC1pL6K6uXEzxPYNl39GlQ5zZDl_uuIuFrGW3EmIeGpWNMfyzihCQfj1-x6pfw4=) *(vertexaisearch.cloud.google.com)*
  > ### Overview and Summary  The **Protected Audience API** (formerly FLEDGE under the WICG TURTLEDOVE proposal) was conceived as a privacy-preserving mechanism for on-device remarketing and ad auctions without third-party cookies.   Following Google’s
- [Intent to Deprecate and Remove: Protected Audience](https://groups.google.com/a/chromium.org/g/blink-dev/c/k_nubsMb97g) *(groups.google.com)*
  > Following Chrome&#x27;s announcement that the current approach to third-party cookies will be maintained, we are now planning to <strong>deprecate and remove the Protected Audience API</strong> (along with certain other Privacy Sandbox APIs, as outli...
- [Intent to Ship (I2S): Protected Audience](https://groups.google.com/a/chromium.org/g/blink-dev/c/igFixT5n7Bs/m/ZNrDcQ2dDQAJ) *(groups.google.com)*
  > https://github.com/WICG/turtledove/blob/master/FLEDGE.md · https://<strong>wicg.github.io/turtledove</strong> ·
- [Deprecate and Remove Protected Audience](https://chromestatus.com/feature/6552486106234880) *(chromestatus.com · 2025-11-05T00:00:00)*
  > We cannot provide a description for this page right now
- [Support custom audience targeting with the Protected Audience API \| Privacy Sandbox](https://privacysandbox.google.com/private-advertising/protected-audience/android) *(privacysandbox.google.com)*
  > <strong>The removal clears all the custom audiences associated with the apps and prevent the apps from joining new custom audiences</strong>. Users have the ability to reset the Protected Audience API completely.
- [Protected Audience API overview \| Privacy Sandbox](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) *(developers.google.com · 2022-01-27T00:00:00)*
  > We&#x27;ll update the available settings in Chrome as the Protected Audience API progresses, based on tests and feedback. In the future, we&#x27;ll offer more granular settings to manage Protected Audience and associated data. API callers can&#x27;t ...
- [How to deprecate \| Core change policies \| About guide on Drupal.org](https://www.drupal.org/about/core/policies/core-change-policies/how-to-deprecate) *(drupal.org · 2026-06-14T13:19:30)*
  > A list of what can be deprecated and how to do implement the deprecation.
- [The Protected Audience API Made Simple \| RTB House](https://www.rtbhouse.com/blog/your-guide-to-protected-audience-api) *(rtbhouse.com · 2023-11-06T09:38:00)*
  > The cookieless future is here. One of your key tools will be the Protected Audience API. See what it is and how you can use it.
- [Publisher Guide: How to activate Protected Audience and Topics on your sites \| Privacy Sandbox](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience-api/publisher-guide) *(developers.google.com)*
  > If you run your own ad stack, you can implement the APIs directly. The Protected Audience API documentation explains how.
- [Protected Audience (formerly known as FLEDGE) Integration Guide for Measurement Providers \| Display & Video 360 and Google Ads Protected Audience API &nbsp;\| Google for Developers](https://developers.google.com/display-video/protected-audience/measurement-partner-guide) *(developers.google.com · 2024-09-18T00:00:00)*
  > As part of the Privacy Sandbox, Chrome proposed Protected Audience API—an in-browser API that lets advertisers and ad tech companies show interest-group targeted ads without relying on third-party cookies, while protecting users from cross-site track...
- [Seller guide: run ad auctions \| Privacy Sandbox](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience-api/ad-auction) *(developers.google.com · 2022-11-01T00:00:00)*
  > Note: additionalBids is not supported in the current implementation of the Protected Audience API. Read the Auction Participants section in the Protected Audience API explainer for more information. ... Role: Origin of the seller. ... Role: URL for a...
- [javascript - How to determine winning auction prices for ads served to me? - Stack Overflow](https://stackoverflow.com/questions/49548089/how-to-determine-winning-auction-prices-for-ads-served-to-me) *(stackoverflow.com)*
  > There are so many shortcomings with this... we&#x27;re skipping over a bunch of complexities like price granularity, discrepancies, and especially the fact that this is what the publisher was paid (excluding possible revshare agreements with networks...
- [Protected Audience API Developer's Guide \| Privacy Sandbox](https://privacysandbox.google.com/private-advertising/protected-audience/android/developer-guide) *(privacysandbox.google.com)*
  > As you read through the Privacy Sandbox on Android documentation, use the Developer Preview or Beta button to select the program version that you&#x27;re working with, as instructions may vary · The Protected Audience API on Android (formerly known a...
- [Protected Audience: integration guide \| Privacy Sandbox](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience/android/integration-guide) *(developers.google.com)*
  > When you are ready to begin your integration, set up your development environment with the latest Privacy Sandbox Developer Preview. Set up required server endpoints. Use the sample mocks with your preferred API testing solution to bootstrap this pro...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Deprecate and Remove Protected Audience · Issue #1141 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1141) *(github.com · 2026-07-29T21:48:26)* *(Cites: `https://chromestatus.com/feature/6552486106234880`)*
  > https://<strong>chromestatus.com/feature/6552486106234880</strong> · Reactions are currently unavailable · Sign up for free to join this conversation on GitHub. Already have an account? Sign in to comment · rowan-m · new-featureprivacy · No...
- [Intent to Deprecate and Remove: Protected Audience](https://groups.google.com/a/chromium.org/g/blink-dev/c/k_nubsMb97g) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/6552486106234880`)*
  > Following Chrome&#x27;s announcement that the current approach to third-party cookies will be maintained, we are now planning to <strong>deprecate and remove the Protected Audience API</strong> (along with certain other Privacy Sandbox APIs...
- [turtledove/spec.bs at main · WICG/turtledove](https://github.com/WICG/turtledove/blob/main/spec.bs) *(github.com)* *(Cites: `https://wicg.github.io/turtledove`)*
  > Repository: WICG/turtledove · Inline Github Issues: true · Group: WICG · Status: CG-DRAFT · Level: 1 · URL: https://<strong>wicg.github.io/turtledove</strong>/ · Boilerplate: omit conformance, omit feedback-header · Editor: Paul Jens...
- [Intent to Ship (I2S): Protected Audience](https://groups.google.com/a/chromium.org/g/blink-dev/c/igFixT5n7Bs/m/ZNrDcQ2dDQAJ) *(groups.google.com)* *(Cites: `https://wicg.github.io/turtledove`)*
  > https://github.com/WICG/turtledove/blob/master/FLEDGE.md · https://<strong>wicg.github.io/turtledove</strong> ·

## 📚 Platform Documentation & Specifications

- [Deprecate and Remove Protected Audience · Issue #1141 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1141) *(github.com)*
- [turtledove/spec.bs at main · WICG/turtledove](https://github.com/WICG/turtledove/blob/main/spec.bs) *(github.com)*
- [auction · GitHub Topics · GitHub](https://github.com/topics/auction?l=javascript) *(github.com)*
- [Remove PWA Category · Issue #15535 · GoogleChrome/lighthouse](https://github.com/GoogleChrome/lighthouse/issues/15535) *(github.com)*
- [Epic: Chrome PWA is the product · Issue #35 · Jannich113/husjagt](https://github.com/Jannich113/husjagt/issues/35) *(github.com)*
- [Enforce staged PWA release rollout with selected user testers by haruharu42 · Pull Request #138 · haruharu42/AIArticleStudio-Updates](https://github.com/haruharu42/AIArticleStudio-Updates/pull/138) *(github.com)*
- [PWA-5: Update ROADMAP/README; deprecate WebView wrapper · Issue #40 · Jannich113/husjagt](https://github.com/Jannich113/husjagt/issues/40) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 36 result(s) found across 7 planned queries — **20 verified relevant**
  - `"chromestatus.com/feature/6552486106234880" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"wicg.github.io/turtledove" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Deprecate and Remove Protected Audience" API` — *Core feature API query* (2 returned)
  - `"Deprecate and Remove Protected Audience" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"ads.interestgroup" OR "auction.result" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and Remove Protected Audience" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and Remove Protected Audience" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **12 verified relevant**
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
