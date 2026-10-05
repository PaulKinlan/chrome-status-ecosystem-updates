# Deprecate and Remove Protected Audience

> **Report Week:** 2026-W41 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

The Protected Audience API provides a method of interest-group advertising without third-party cookies or user tracking across sites.  Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Protected Audience API (along with certain other Privacy Sandbox APIs, as outlined on the Privacy Sandbox feature status page).

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. Since that announcement there has been virtually no interest in the Protected Audience API. Use of the joinAdInterestGroup() API has decreased by almost 100x and use of the runAdAuction() API has decreased by more than 10x. Of the auctions occurring today, virtually none of them have winners (determined by looking at the “Success” bucket count of the Ads.InterestGroup.Auction.Result UMA), implying that they are not providing useful benefit to the pages initiating them.

## Ecosystem Status

- **Momentum:** High (150 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Deprecate and Remove Protected Audience is currently Deprecated in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Do Not Reach Lists" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Do Not Reach Lists](https://business.twitter.com/en/help/campaign-setup/campaign-targeting/do-not-reach-lists.html) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Custom Audience Permissions \| Docs \| Twitter Developer Platform](https://developer.twitter.com/en/docs/twitter-ads-api/audiences/api-reference/custom-audience-permissions) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Overview \| Docs \| X Developer Platform](https://developer.twitter.com/en/docs/ads/audiences/api-reference/tailored-audience-permissions) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Tailored Audience Changes — Twitter Developers](https://developer.twitter.com/en/docs/ads/audiences/api-reference/tailored-audience-changes.html) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [X Developer Platform - X](https://developer.twitter.com/en/docs/ads/audiences/api-reference/audience.html) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Website Activity Custom Audiences \| X Help Center](https://business.twitter.com/en/help/campaign-setup/campaign-targeting/custom-audiences/website-activity.html) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Browser Elements: Part 3: Navigators, Promises, and Beacons \| The Privacy Sandbox](https://www.theprivacysandbox.com/post/promises-navigators-and-beacons) — *0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [hidekazu-konishi.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHwmNdaTDlLwo2ChzgTcbQHVlPkINnRtFg8Oln-HrL3PU0Cx1J1XiGZhWdomvpzJ2ssrwjuCQqAKo1-akkbWhidO8Esa5bzhnGK3x3fUb6A_1EmbtQsLxnEkFwRc-FEXFPtlQ6msNtTGuha-PCq8XUy7vfoq5Xn6uBKrYBbe7nPaR8=) *(vertexaisearch.cloud.google.com)*
  > Privacy Sandbox History and Timeline - The Third-Party Cookie Phase-Out Plan, Its Reversal, API Deprecation and Removal in Chrome, and What Remains Supported | hidekazu-konishi.com hidekazu-konishi.com https://hidekazu-konishi.com/images/privacy_sand...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGEDMfj9hDIFNKkqyVG4ENJqXEQ86h2ABSChR7K-WeJeRV0CFrimjZkTr0LfYRac-2zJ2iH-t4DyTZ2Zd5h12m89q3j30pI4e93NmGes9CZbJundNOqYuHus-WyaP79toL8tZg=) *(vertexaisearch.cloud.google.com)*
  > Chrome 153 | Release notes | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEbZXMBQUMIPaSdo1BGB_Z9VAIafo9XVkVRf16OdzBvudDKLXsQ-iCyNqo-SRs3fhVt_oGPnUizbdRi2yhE1sAIIQ_955NUANc0TWqFAZ5l1a7VN_annsViHezSm80NyfrKme2Mksg=) *(vertexaisearch.cloud.google.com)*
  > Status do recurso do Sandbox de privacidade | Privacy Sandbox Ir para o conteúdo principal / English Deutsch Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภ...
- [arxiv.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHfGyvULqGey6KlC9j_2AHpSRcqA9nrL3MIphZvFYfFh0aYNK_jwjVQViNWrHDk2w-qnxYRwibUYNe1_JomcFBJhujJvYVyOq-b0iF0aAScun5ASpnFMg==) *(vertexaisearch.cloud.google.com)*
  > Longitudinal Adoption and Deprecation of the Privacy Sandbox Web APIs Report GitHub Issue × Title: Content selection saved. Describe the issue below: Description: arXiv is now an independent nonprofit! Learn more &times; Back to arXiv License: CC BY ...
- [Intent to Deprecate and Remove: Protected Audience](https://groups.google.com/a/chromium.org/g/blink-dev/c/k_nubsMb97g) *(groups.google.com)*
  > https://<strong>chromestatus.com/feature/6552486106234880</strong> · unread, Nov 12, 2025, 11:30:32 AM11/12/25 ·  ·  ·  · Reply to author · Sign in to reply to author · Forward · Sign in to forward · Delete · You do not have permission to delete m...
- [Deprecate and Remove Protected Audience](https://chromestatus.com/feature/6552486106234880) *(chromestatus.com · 2025-11-05T00:00:00)*
  > We cannot provide a description for this page right now
- [Privacy Sandbox History and Timeline - The Third-Party Cookie Phase-Out Plan, Its Reversal, API Deprecation and Removal in Chrome, and What Remains Supported \| hidekazu-konishi.com](https://hidekazu-konishi.com/entry/privacy_sandbox_history_and_timeline.html) *(hidekazu-konishi.com · 2026-10-02T00:00:01)*
  > <strong>Both Protected Audience and Related Website Sets are currently being removed</strong>. Other browsers support CHIPS. The release notes for Firefox 141 describe CHIPS support as now re-enabled, and WebKit says that Safari 26.2 ships CHIPS agai...
- [PSA: Protected Audience API deprecation and removal](https://groups.google.com/a/chromium.org/g/fledge-api-announce/c/TNCI-S129nM) *(groups.google.com · 2025-12-04T00:00:00)*
  > Following the announcement that Chrome will maintain its current approach to third-party cookies, <strong>the Protected Audience API will be deprecated in Chrome 144</strong>, along with certain other APIs as outlined on the Privacy Sandbox feature s...
- [Google Privacy Sandbox Update 2026: Why Google Shut It Down](https://segwise.ai/blog/google-privacy-sandbox-shutdown-reason) *(segwise.ai · 2026-09-03T14:19:52)*
  > <strong>January to July 2026 (Chrome removes the APIs): Chrome started · deprecating Topics, Protected Audience, Attribution Reporting, and related APIs in Chrome 144 (January 2026), with full removal targeted for Chrome 150 (July 2026).</strong>
- [Privacy Sandbox feature status](https://privacysandbox.google.com/overview/status) *(privacysandbox.google.com · 2026-08-14T00:00:00)*
  > Explainer: Fenced Storage Read API. Continue to support. See Content-Security-Policy: frame-ancestors directive. Scheduled for phaseout. Chrome Platform Status. Scheduled for phaseout. ... Chrome Platform Status. Scheduled for phaseout. ... Chrome Pl...
- [Google Pulls The Plug On Topics, PAAPI And Other Major Privacy Sandbox APIs (As The CMA Says ‘Cheerio’) \| AdExchanger](https://www.adexchanger.com/privacy/google-pulls-the-plug-on-topics-paapi-and-other-major-privacy-sandbox-apis-as-the-cma-says-cheerio) *(adexchanger.com · 2025-10-19T03:27:47)*
  > Simultaneously, Google announced that it’s “decided to retire” a whole pile of Privacy Sandbox technologies, including (and strap in): the attribution reporting API on both Chrome and Android; IP protection; on-device personalization; private aggrega...
- [Google Privacy Sandbox: Topics API Deprecation and Chrome 144 150 Milestones \| Windows Forum](https://windowsforum.com/threads/google-privacy-sandbox-topics-api-deprecation-and-chrome-144-150-milestones.388538) *(windowsforum.com · 2025-11-09T07:16:42)*
  > Separately, Chromium mailing‑list activity and related “intent” posts show removal work on parts of the Protected Audience (formerly FLEDGE) implementation — in some cases earlier, lower‑impact elements were already flagged for removal — because usag...
- [FLEDGE API announcements - Google Groups](https://groups.google.com/a/chromium.org/g/fledge-api-announce) *(groups.google.com)*
  > PSA: Protected Audience API deprecation and removal · Following the announcement that Chrome will maintain its current approach to third-party cookies, the ... As we announced in the recent Protected Audience Intent to Deprecate and Remove, Protected...
- [Re: PSA: Protected Audience k-Anonymity Enforcement](https://groups.google.com/a/chromium.org/g/fledge-api-announce/c/RfVlFkbZMXI) *(groups.google.com · 2024-04-03T00:00:00)*
  > As we announced in the recent Protected Audience Intent to Deprecate and Remove, <strong>Protected Audience features that were never launched beyond 20% Stable will be ramped down by the end of 2025</strong>. This includes Protected Audience k-Anonym...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Deprecate and Remove Protected Audience · Issue #1141 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1141) *(github.com · 2026-07-29T21:48:26)* *(Cites: `https://chromestatus.com/feature/6552486106234880`)*
  > https://<strong>chromestatus.com/feature/6552486106234880</strong> · Reactions are currently unavailable · Sign up for free to join this conversation on GitHub. Already have an account? Sign in to comment · rowan-m · new-featureprivacy · No...
- [Intent to Deprecate and Remove: Protected Audience](https://groups.google.com/a/chromium.org/g/blink-dev/c/k_nubsMb97g) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/6552486106234880`)*
  > https://<strong>chromestatus.com/feature/6552486106234880</strong> · unread, Nov 12, 2025, 11:30:32 AM11/12/25 ·  ·  ·  · Reply to author · Sign in to reply to author · Forward · Sign in to forward · Delete · You do not have permission t...

## 📚 Platform Documentation & Specifications

- [Deprecate and Remove Protected Audience · Issue #1141 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1141) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 70 result(s) found across 12 planned queries — **11 verified relevant**
  - `"chromestatus.com/feature/6552486106234880" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"wicg.github.io/turtledove" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Deprecate and Remove Protected Audience" API` — *Core feature API query* (2 returned)
  - `"Deprecate and Remove Protected Audience" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"ads.interestgroup" OR "auction.result" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and Remove Protected Audience" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and Remove Protected Audience" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
  - `"Protected Audience API" (deprecate OR deprecation OR removal) Chrome "Privacy Sandbox"` — *Find official announcements, industry news, and analysis of Chrome's decision to deprecate and remove the Protected Audience API.* (8 returned)
  - `"navigator.joinAdInterestGroup" OR "navigator.runAdAuction" (example OR snippet OR github)` — *Discover concrete JavaScript code snippets and implementation usages of the core Protected Audience API methods.* (8 returned)
  - `"Protected Audience" OR "FLEDGE" deprecation ("third-party cookies" OR AdTech) (site:adexchanger.com OR site:digiday.com OR site:news.ycombinator.com)` — *Explore adtech community sentiment, publisher reactions, and technical discussions around dropping Protected Audience in favor of retaining third-party cookies.* (8 returned)
  - `"Protected Audience API" OR "TURTLEDOVE" "runAdAuction" (tutorial OR guide OR "how to")` — *Locate technical guides, explainers, and architectural overviews detailing how on-device ad auctions were designed and implemented.* (8 returned)
  - `"Intent to Deprecate and Remove" "Protected Audience" site:groups.google.com/a/chromium.org` — *Retrieve the exact Chromium blink-dev discussion thread containing vendor signals, telemetry metrics, and the formal intent notice.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 8 result(s) found — **4 verified relevant**
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
