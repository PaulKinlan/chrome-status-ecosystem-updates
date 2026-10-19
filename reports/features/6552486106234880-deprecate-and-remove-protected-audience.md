# Deprecate and Remove Protected Audience

> **Report Week:** 2026-W43 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

The Protected Audience API provides a method of interest-group advertising without third-party cookies or user tracking across sites.  Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Protected Audience API (along with certain other Privacy Sandbox APIs, as outlined on the Privacy Sandbox feature status page).

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. Since that announcement there has been virtually no interest in the Protected Audience API. Use of the joinAdInterestGroup() API has decreased by almost 100x and use of the runAdAuction() API has decreased by more than 10x. Of the auctions occurring today, virtually none of them have winners (determined by looking at the “Success” bucket count of the Ads.InterestGroup.Auction.Result UMA), implying that they are not providing useful benefit to the pages initiating them.

## Ecosystem Status

- **Momentum:** High (footprint 370 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** The Protected Audience API (formerly FLEDGE) is slated for deprecation and removal in Chrome 153 following Google's decision to maintain third-party cookies. With ecosystem interest having collapsed and usage metrics dropping significantly, the feature is being phased out alongside other targeted Privacy Sandbox advertising components.

### Recommendations
- Actionable Advice: Web development teams should audit their applications to remove obsolete calls to \`joinAdInterestGroup()\` and \`run-ad-auction\`, and clean up any lingering \`Permissions-Policy\` HTTP headers or iframe attributes.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img544-dot-cr-status.appspot.com/feature/6552486106234880) *(img544-dot-cr-status.appspot.com)*
  > The \*\*"Deprecate and Remove Protected Audience"\*\* entry on Chrome Platform Status marks the formal phaseout and removal of the Protected Audience API (formerly known as FLEDGE) \*\*Title:\*\* \*Deprecate and Remove Protected Audience\*
- [google.com](https://privacysandbox.google.com/private-advertising/protected-audience-api/opt-out) *(privacysandbox.google.com)*
  > The \*\*"Deprecate and Remove Protected Audience"\*\* entry on Chrome Platform Status marks the formal phaseout and removal of the Protected Audience API (formerly known as FLEDGE) \*\*Permissions-Policy Cleanup:\*\* HTTP headers or iframe attributes setting...
- [secureprivacy.ai](https://secureprivacy.ai/blog/google-killed-privacy-sandbox-what-changes-for-cookie-consent-in-2026) *(secureprivacy.ai)*
  > However, following Google's decision to maintain the current approach to third-party cookies in Chrome rather than deprecating them completely, developer adoption of the API collapsed
- [Privacy Sandbox History and Timeline - The Third-Party Cookie Phase-Out Plan, Its Reversal, API Deprecation and Removal in Chrome, and What Remains Supported \| hidekazu-konishi.com](https://hidekazu-konishi.com/entry/privacy_sandbox_history_and_timeline.html) *(hidekazu-konishi.com)*
  > As a result, Chrome, MDN, and web documentation officially classified Protected Audience—along with associated APIs like Topics, Attribution Reporting, Private Aggregation, and Shared Storage—for deprecation and complete removal \*\*Contrasting Feature...
- [searchengineland.com](https://searchengineland.com/google-officially-shuts-down-privacy-sandbox-463561) *(searchengineland.com)*
  > As a result, Chrome, MDN, and web documentation officially classified Protected Audience—along with associated APIs like Topics, Attribution Reporting, Private Aggregation, and Shared Storage—for deprecation and complete removal \*\*Articles:\*\* \*Google...
- [Google Privacy Sandbox Update 2026: Why Google Shut It Down](https://segwise.ai/blog/google-privacy-sandbox-shutdown-reason) *(segwise.ai)*
  > \*\*Articles:\*\* \*Google Officially Shuts Down Privacy Sandbox Advertising APIs\* & \*Google Privacy Sandbox Update\*
- [adweek.com](https://www.adweek.com/media/googles-privacy-sandbox-is-officially-dead) *(adweek.com)*
  > \*\*Articles:\*\* \*Google Officially Shuts Down Privacy Sandbox Advertising APIs\* & \*Google Privacy Sandbox Update\*
- [Re: \[blink-dev\] Intent to Deprecate and Remove: Protected Audience](http://www.mail-archive.com/blink-dev@chromium.org/msg17613.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Deprecate and Remove: Protected Audience Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Deprecate and Remove: Protected Audience Yoav Weiss (@Shopify) Wed, 30 Sep 2026 08:51:09 -0700 LGTM2 On Wednesday, Sept...
- [\[blink-dev\] Intent to Deprecate and Remove: Protected Audience](http://www.mail-archive.com/blink-dev@chromium.org/msg15140.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Deprecate and Remove: Protected Audience Skip to site navigation (Press enter) \[blink-dev\] Intent to Deprecate and Remove: Protected Audience Paul Jensen Fri, 07 Nov 2025 11:04:43 -0800 Intent to Deprecate and Remove: Protected ...
- [Intent to Deprecate and Remove: Protected Audience](https://groups.google.com/a/chromium.org/g/blink-dev/c/k_nubsMb97g) *(groups.google.com)*
  > Intent to Deprecate and Remove: Protected Audience Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Protected Audience ...
- [PSA: Protected Audience API deprecation and removal](https://groups.google.com/a/chromium.org/g/fledge-api-announce/c/TNCI-S129nM) *(groups.google.com · 2025-12-04T00:00:00)*
  > Following the announcement that Chrome will maintain its current approach to third-party cookies, &lt;strong&gt;the Protected Audience API will be deprecated in Chrome 144&lt;/strong&gt;, along with certain other APIs as outlined on the Privacy Sandbox feature s...
- [Re: \[blink-dev\] Intent to Deprecate and Remove: Protected Audience](http://www.mail-archive.com/blink-dev@chromium.org/msg16918.html) *(mail-archive.com)*
  > LGTM1 On Fri, Jun 12, 2026 at 2:32 AM Paul Jensen &lt;\[email protected\]&gt; wrote: Hi API Owners, &lt;strong&gt;Protected Audience API was deprecated in Chrome-144 with a plan to remove it in Chrome-150&lt;/strong&gt;. Currently the usage is 1.1% of page loads.&...
- [FLEDGE API announcements - Google Groups](https://groups.google.com/a/chromium.org/g/fledge-api-announce) *(groups.google.com)*
  > As we announced in the recent Protected Audience Intent to Deprecate and Remove, Protected Audience ... Hey all, We are introducing updates to the Shared Storage API in M134, enabling you to read Protectedunread,
- [A Guide to Protected Audience API (Formerly - FLEDGE)](https://setupad.com/blog/protected-audience-api) *(setupad.com · 2024-03-18T10:51:22)*
  > &lt;strong&gt;This API allows advertisers to tailor their ads for specific audiences without accessing individual user data&lt;/strong&gt;. Instead, this sensitive information is securely stored either on the user’s device or in a protected cloud environment, en...
- [Protected Audience API overview \| Privacy Sandbox](https://privacysandbox.google.com/private-advertising/protected-audience) *(privacysandbox.google.com · 2022-01-27T00:00:00)*
  > To learn more about the name change, see the blog post. This document covers the basics of the Protected Audience API and explains some underlying concepts, but doesn&#x27;t go into much technical detail. If you work in advertising or ad tech, you&#x...
- [Support custom audience targeting with the Protected Audience API \| Privacy Sandbox](https://privacysandbox.google.com/private-advertising/protected-audience/android) *(privacysandbox.google.com)*
  > &lt;strong&gt;The removal clears all the custom audiences associated with the apps and prevent the apps from joining new custom audiences&lt;/strong&gt;. Users have the ability to reset the Protected Audience API completely.
- [The Protected Audience API Made Simple \| RTB House](https://www.rtbhouse.com/blog/your-guide-to-protected-audience-api) *(rtbhouse.com · 2026-08-05T11:48:01)*
  > The Protected Audience API is currently undergoing full-scale testing, called General Availability. The next big milestone to look out for is the depreciation of third-party cookies for 1% of Chrome users, which is slated for Q1 2024.
- [Seller guide: run ad auctions \| Privacy Sandbox](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience-api/ad-auction) *(developers.google.com · 2022-11-01T00:00:00)*
  > Note: additionalBids is not supported in the current implementation of the Protected Audience API. Read the Auction Participants section in the Protected Audience API explainer for more information. ... Role: Origin of the seller. ... Role: URL for a...
- [Protected Audience API Developer's Guide \| Privacy Sandbox](https://privacysandbox.google.com/private-advertising/protected-audience/android/developer-guide) *(privacysandbox.google.com)*
  > Note: Make sure to remove android:debuggable=&quot;true&quot; before you ship your application.
- [Re: \[blink-dev\] Intent to Deprecate and Remove: Protected Audience](http://www.mail-archive.com/blink-dev@chromium.org/msg17523.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; Initial public proposal &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; https://privacysandbo...
- [Google Privacy Sandbox: Topics API Deprecation and Chrome 144 150 Milestones \| Windows Forum](https://windowsforum.com/threads/google-privacy-sandbox-topics-api-deprecation-and-chrome-144-150-milestones.388538) *(windowsforum.com · 2025-11-09T07:16:42)*
  > &lt;strong&gt;Deprecation here removes that standardized topics signal from Chrome&lt;/strong&gt;. Protected Audience / FLEDGE — an on‑device bidding and auction API intended to enable remarketing and audience‑specific ad selection without cross‑site identifiers...
- [Google Pulls The Plug On Topics, PAAPI And Other Major Privacy Sandbox APIs (As The CMA Says ‘Cheerio’) \| AdExchanger](https://www.adexchanger.com/privacy/google-pulls-the-plug-on-topics-paapi-and-other-major-privacy-sandbox-apis-as-the-cma-says-cheerio) *(adexchanger.com · 2025-10-19T03:27:47)*
  > Simultaneously, Google announced that it’s “decided to retire” a whole pile of Privacy Sandbox technologies, including (and strap in): the attribution reporting API on both Chrome and Android; IP protection; on-device personalization; private aggrega...
- [FLEDGE API developer guide \| Privacy Sandbox](https://developer.chrome.com/en/blog/fledge-api) *(developer.chrome.com · 2022-01-27T00:00:00)*
  > const auctionConfig = { seller: &#x27;https://ssp.example&#x27;, decisionLogicUrl: ..., trustedScoringSignalsUrl: ..., interestGroupBuyers: \[&#x27;https://dsp.example&#x27;, &#x27;https://buyer2.example&#x27;, ...\], auctionSignals: {...}, sellerSigna...
- [Add definitions for join/leaveAdInterestGroup() and runAdAuction(). \[chromium/src : master\]](https://groups.google.com/a/chromium.org/g/blink-reviews-bindings/c/_CV9W8r9PNA) *(groups.google.com · 2021-03-29T00:00:00)*
  > Patch Set #27, Line 172: /\* static \*/ void NavigatorAuction::joinAdInterestGroup(
- [Why Do I Have "joinAdInterestGroup" Scriplets and Tracing in My Console After Installing React-Scripts as a DevDependency?](https://stackoverflow.com/questions/72551461/why-do-i-have-joinadinterestgroup-scriplets-and-tracing-in-my-console-after-in) *(stackoverflow.com)*
  > VM6:206 #%#//scriptlet(&quot;set-constant&quot;, &quot;navigator.joinAdInterestGroup&quot;, &quot;undefined&quot;) trace start VM6:208 console.trace hit @ VM6:208 VM6:210 #%#//scriptlet(&quot;set-constant&quot;, &quot;navigator.joinAdInterestGroup&qu...
- [Intent to Ship: Protected Audience - Do Not Disable Cookie Setting in ReportEvent until 3PCD (Chrome - 120)](https://groups.google.com/a/chromium.org/g/blink-dev/c/rMyTWCo-f_I/m/ubpkZl1xAwAJ) *(groups.google.com)*
  > We make it abundantly clear in our documentation that debug reports will go away at the point of third-party cookie deprecation. We have also documented that these cookies will only be sent with automatic beacons when third-party cookies are enabled.
- [PSA: Third-party cookie deprecation for 1% of Chrome Stable starting Q1 2024](https://groups.google.com/a/chromium.org/g/blink-dev/c/GJl_aMO6Qt4/m/gFEMFo8FAgAJ) *(groups.google.com · 2023-05-22T00:00:00)*
  > If your sites rely on third-party cookie data, then we have a guide for understanding if CHIPS or First-Party Sets address your needs: https://developer.chrome.com/docs/privacy-sandbox/third-party-cookie-phase-out/ and an issue tracker for reporting ...
- [Private Aggregation for Protected Audience M119 update](https://groups.google.com/a/chromium.org/g/fledge-api-announce/c/-kY-p7nVpF8) *(groups.google.com · 2023-09-29T00:00:00)*
  > The following Private Aggregation ... the debug mode will silently fail. This also means that when third-party cookies are deprecated, &lt;strong&gt;the debug mode will no longer be available&lt;/strong&gt;....
- [Intent to Experiment: Cookie Deprecation Labeling](https://groups.google.com/a/chromium.org/g/blink-dev/c/3escBQGtIpM/m/ntcytva5BgAJ) *(groups.google.com)*
  > FYI, based on feedback from testers (https://github.com/WICG/turtledove/issues/946) we are going to send the Cookie-Deprecation label headers during the trusted bidding and trusted scoring signals fetches for Protected Audience auctions beginning in ...
- [Google’s FLEDGE rebrands as ‘Protected Audience API’ as the tech giant continues Privacy Sandbox trials - Digiday](https://digiday.com/marketing/googles-fledge-rebrands-as-protected-audience-api-as-the-tech-giant-continues-privacy-sandbox-trials) *(digiday.com · 2023-04-18T10:01:00)*
  > Yesterday (April 17) Tristram Southey, a product manager on Privacy Sandbox, announced that its proposed alternative to conducting ad auctions within Google Chrome popularly known as the &lt;strong&gt;FLEDGE API&lt;/strong&gt; (that’s short for “first locally-ex...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Deprecate and Remove: Protected Audience](http://www.mail-archive.com/blink-dev@chromium.org/msg17613.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6552486106234880`)*
  > Re: \[blink-dev\] Intent to Deprecate and Remove: Protected Audience Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Deprecate and Remove: Protected Audience Yoav Weiss (@Shopify) Wed, 30 Sep 2026 08:51:09 -0700 LGTM2 On Wedne...
- [\[blink-dev\] Intent to Deprecate and Remove: Protected Audience](http://www.mail-archive.com/blink-dev@chromium.org/msg15140.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6552486106234880`)*
  > \[blink-dev\] Intent to Deprecate and Remove: Protected Audience Skip to site navigation (Press enter) \[blink-dev\] Intent to Deprecate and Remove: Protected Audience Paul Jensen Fri, 07 Nov 2025 11:04:43 -0800 Intent to Deprecate and Remove: ...
- [Deprecate and Remove Protected Audience · Issue #1141 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1141) *(github.com · 2026-07-29T21:48:26)* *(Cites: `https://chromestatus.com/feature/6552486106234880`)*
  > Deprecate and Remove Protected Audience · Issue #1141 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or...
- [Intent to Deprecate and Remove: Protected Audience](https://groups.google.com/a/chromium.org/g/blink-dev/c/k_nubsMb97g) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/6552486106234880`)*
  > Intent to Deprecate and Remove: Protected Audience Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Protected...

## 📚 Platform Documentation & Specifications

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/Privacy_sandbox) *(developer.mozilla.org)*
- [Deprecate and Remove Protected Audience · Issue #1141 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1141) *(github.com)*
- [auction · GitHub Topics · GitHub](https://github.com/topics/auction?l=javascript) *(github.com)*
- [navigator · GitHub Topics · GitHub](https://github.com/topics/navigator?l=javascript) *(github.com)*
- [GitHub - GoogleChromeLabs/fledge-demo-remote · GitHub](https://github.com/GoogleChromeLabs/fledge-demo-remote) *(github.com)*
- [joinadinterestgroup · GitHub Topics · GitHub](https://github.com/topics/joinadinterestgroup) *(github.com)*
- [Getting a return value for navigator.joinAdInterestGroup() · Issue #193 · WICG/turtledove](https://github.com/WICG/turtledove/issues/193) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 64 result(s) found across 11 planned queries — **31 verified relevant**
  - `"chromestatus.com/feature/6552486106234880" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (6 returned)
  - `"wicg.github.io/turtledove" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Deprecate and Remove Protected Audience" API` — *Core feature API query* (8 returned)
  - `"Deprecate and Remove Protected Audience" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"ads.interestgroup" OR "auction.result" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and Remove Protected Audience" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and Remove Protected Audience" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
  - `"Protected Audience API" deprecate OR deprecation OR removal "Privacy Sandbox" Chrome` — *Find industry announcements, adtech news, and ecosystem analysis regarding Chrome's decision to deprecate the Protected Audience API.* (8 returned)
  - `navigator.joinAdInterestGroup OR navigator.runAdAuction code example github OR gist` — *Locate real-world JavaScript implementation examples and WebIDL method calls for the Protected Audience API.* (8 returned)
  - `"Protected Audience" (deprecated OR "third-party cookies") site:groups.google.com/a/chromium.org OR site:github.com/WICG/turtledove/issues` — *Discover developer discussions, Blink-dev intent threads, and issues tracking the deprecation in official working groups.* (8 returned)
  - `"Protected Audience API" tutorial OR guide "ad tech" migration OR alternatives` — *Find developer blog posts and adtech transition guides explaining the impact of the API removal and alternative strategies.* (7 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **8 verified relevant**
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
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6552486106234880)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6552486106234880)
- [Specification](https://wicg.github.io/turtledove)
