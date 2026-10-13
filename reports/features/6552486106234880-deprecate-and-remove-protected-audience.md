# Deprecate and Remove Protected Audience

> **Report Week:** 2026-W42 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

The Protected Audience API provides a method of interest-group advertising without third-party cookies or user tracking across sites.  Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Protected Audience API (along with certain other Privacy Sandbox APIs, as outlined on the Privacy Sandbox feature status page).

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. Since that announcement there has been virtually no interest in the Protected Audience API. Use of the joinAdInterestGroup() API has decreased by almost 100x and use of the runAdAuction() API has decreased by more than 10x. Of the auctions occurring today, virtually none of them have winners (determined by looking at the “Success” bucket count of the Ads.InterestGroup.Auction.Result UMA), implying that they are not providing useful benefit to the pages initiating them.

## Ecosystem Status

- **Momentum:** Moderate (footprint 200 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Following Chrome's decision to maintain third-party cookies through user choice controls rather than universal blocking, Google scheduled the Protected Audience API for deprecation and removal by Chrome 153. Usage telemetry reported in the blink-dev intent showed that real-world utilization collapsed, with joinAdInterestGroup invocations declining nearly a hundredfold and virtually no auctions resulting in winning bids. With Mozilla and Apple having consistently opposed the proposal, the removal officially ends Chrome's browser-mediated ad auction experiment.

### Recommendations
- Actionable Advice: Audit first-party scripts and third-party advertising tags immediately to rip out invocations of navigator.joinAdInterestGroup() and navigator.runAdAuction() before execution fails entirely. Development teams should decommission dependent worklets and related Fenced Frame wrappers in favor of durable server-side and standard cross-browser web primitives.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Privacy Sandbox History and Timeline - The Third-Party Cookie Phase-Out Plan, Its Reversal, API Deprecation and Removal in Chrome, and What Remains Supported \| hidekazu-konishi.com](https://hidekazu-konishi.com/entry/privacy_sandbox_history_and_timeline.html) *(hidekazu-konishi.com)*
  > Google announced that Chrome would maintain its existing approach to third-party cookies (offering users an opt-in/opt-out choice framework rather than enforcing complete deprecation across the browser) Consequently, the browser vendor initiated the ...
- [leapbuzz.com](https://leapbuzz.com/blog/privacy-sandbox-wind-down-cookieless) *(leapbuzz.com)*
  > Google announced that Chrome would maintain its existing approach to third-party cookies (offering users an opt-in/opt-out choice framework rather than enforcing complete deprecation across the browser) \*\*Frustration Over Sunk Costs\*\*: Several adtech...
- [secureprivacy.ai](https://secureprivacy.ai/blog/google-killed-privacy-sandbox-what-changes-for-cookie-consent-in-2026) *(secureprivacy.ai)*
  > Consequently, the browser vendor initiated the \*\*deprecation and removal of several Privacy Sandbox ad-targeting and measurement APIs\*\*, most notably the \*\*Protected Audience API\*\* (formerly FLEDGE), alongside the Topics API, Attribution Reporting AP...
- [chromestatus.com](https://chromestatus.com/feature/6366274495053824) *(chromestatus.com)*
  > The deprecation process began in \*\*Chrome 144\*\*, with staged stubbing and removals advancing through \*\*Chrome 152 and 153\*\*, ultimately leading to the phaseout of associated downstream components like Fenced Frames (\`&lt;fencedframe&gt;\`) fence\` APIs\*\*
- [chromium.org](https://issues.chromium.org/460501344) *(issues.chromium.org)*
  > Blink-dev & Chromium Issue Tracker \* \*\*Intent to Deprecate and Remove\*\*: Filed on the \`blink-dev\` mailing list and tracked via Chromium Issue Tracker (Issue #460501344), engineers laid out the phased sun-setting schedule
- [google.com](https://support.google.com/chrome/a/answer/10314655?hl=en-eu) *(support.google.com)*
  > \* \*\*Decommissioning Infrastructure\*\*: The deprecation also prompted the shutdown and archiving of related server-side infrastructure, including the open-source Bidding and Auction Services and k-anonymity server dependencies
- [chromestatus.com](https://chromestatus.com/feature/5733583115255808) *(chromestatus.com)*
  > \* \*\*Decommissioning Infrastructure\*\*: The deprecation also prompted the shutdown and archiving of related server-side infrastructure, including the open-source Bidding and Auction Services and k-anonymity server dependencies
- [The Protected Audience API Made Simple \| RTB House](https://www.rtbhouse.com/blog/your-guide-to-protected-audience-api) *(rtbhouse.com)*
  > Implementing Protected Audience required immense technical overhead, including client-side JavaScript execution in restricted worklets, Trusted Execution Environments (TEEs), and complex Key/Value server orchestration Removing it lifts a significant ...
- [arxiv.org](https://arxiv.org/html/2609.36153) *(arxiv.org)*
  > \*\*Persistent Regulatory and Multi-Browser Realities\*\*: Compliance experts and web consultants emphasize that the cancellation of Protected Audience does not revert web privacy to pre-2020 norms: \* \*\*Safari and Firefox\*\* continue to block third-party ...
- [Intent to Deprecate and Remove: Protected Audience](https://groups.google.com/a/chromium.org/g/blink-dev/c/k_nubsMb97g) *(groups.google.com)*
  > Intent to Deprecate and Remove: Protected Audience Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Protected Audience ...
- [PSA: Protected Audience API deprecation and removal](https://groups.google.com/a/chromium.org/g/fledge-api-announce/c/TNCI-S129nM) *(groups.google.com · 2025-12-04T00:00:00)*
  > Following the announcement that Chrome will maintain its current approach to third-party cookies, &lt;strong&gt;the Protected Audience API will be deprecated in Chrome 144&lt;/strong&gt;, along with certain other APIs as outlined on the Privacy Sandbox feature s...
- [Re: \[blink-dev\] Intent to Deprecate and Remove: Protected Audience](http://www.mail-archive.com/blink-dev@chromium.org/msg16918.html) *(mail-archive.com)*
  > LGTM1 On Fri, Jun 12, 2026 at 2:32 AM Paul Jensen &lt;\[email protected\]&gt; wrote: Hi API Owners, &lt;strong&gt;Protected Audience API was deprecated in Chrome-144 with a plan to remove it in Chrome-150&lt;/strong&gt;. Currently the usage is 1.1% of page loads.&...
- [\[blink-dev\] Intent to Deprecate and Remove: Protected Audience](http://www.mail-archive.com/blink-dev@chromium.org/msg15140.html) *(mail-archive.com)*
  > Explainer https://github.com/WICG/turtledove/blob/main/FLEDGE.md Specification https://wicg.github.io/turtledove/ SummaryThe Protected Audience API provides a method of interest-group advertising without third-party cookies or user tracking across si...
- [Re: \[blink-dev\] Intent to Deprecate and Remove: Protected Audience](http://www.mail-archive.com/blink-dev@chromium.org/msg17523.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; Initial public proposal &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; https://privacysandbo...
- [Google Pulls The Plug On Topics, PAAPI And Other Major Privacy Sandbox APIs (As The CMA Says ‘Cheerio’) \| AdExchanger](https://www.adexchanger.com/privacy/google-pulls-the-plug-on-topics-paapi-and-other-major-privacy-sandbox-apis-as-the-cma-says-cheerio) *(adexchanger.com · 2025-10-19T03:27:47)*
  > Simultaneously, Google announced that it’s “decided to retire” a whole pile of Privacy Sandbox technologies, including (and strap in): the attribution reporting API on both Chrome and Android; IP protection; on-device personalization; private aggrega...
- [Google Privacy Sandbox Update 2026: Why Google Shut It Down](https://segwise.ai/blog/google-privacy-sandbox-shutdown-reason) *(segwise.ai · 2026-09-03T14:19:52)*
  > January to July 2026 (Chrome removes the APIs): Chrome started · deprecating Topics, Protected Audience, Attribution Reporting, and related APIs in &lt;strong&gt;Chrome 144 (January 2026), with full removal targeted for Chrome 150 (July 2026).&lt;/strong&gt;
- [Re: \[blink-dev\] Intent to Deprecate and Remove: Protected Audience](http://www.mail-archive.com/blink-dev@chromium.org/msg16998.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; At this time, we are ... The Protected Audience API provides a method of &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; interest-group advertising without third-party cookies or user &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; tracki...
- [Chrome Platform Status](https://img536-dot-cr-status.appspot.com/feature/6552486106234880) *(img536-dot-cr-status.appspot.com)*
  > Chrome Platform Status

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Deprecate and Remove Protected Audience · Issue #1141 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1141) *(github.com · 2026-07-29T21:48:26)* *(Cites: `https://chromestatus.com/feature/6552486106234880`)*
  > Deprecate and Remove Protected Audience · Issue #1141 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or...
- [Intent to Deprecate and Remove: Protected Audience](https://groups.google.com/a/chromium.org/g/blink-dev/c/k_nubsMb97g) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/6552486106234880`)*
  > Intent to Deprecate and Remove: Protected Audience Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Protected...

## 📚 Platform Documentation & Specifications

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/Privacy_sandbox) *(developer.mozilla.org)*
- [Deprecate and Remove Protected Audience · Issue #1141 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1141) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 64 result(s) found across 11 planned queries — **11 verified relevant**
  - `"chromestatus.com/feature/6552486106234880" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"wicg.github.io/turtledove" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Deprecate and Remove Protected Audience" API` — *Core feature API query* (8 returned)
  - `"Deprecate and Remove Protected Audience" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"ads.interestgroup" OR "auction.result" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and Remove Protected Audience" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and Remove Protected Audience" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Protected Audience API" ("deprecate" OR "deprecation" OR "remove") Privacy Sandbox` — *Industry news, announcements, and adtech reports on Chrome's decision to deprecate the Protected Audience API.* (8 returned)
  - `navigator.joinAdInterestGroup navigator.runAdAuction code example` — *JavaScript usage examples and API syntax for interest group auctions in the Protected Audience implementation.* (8 returned)
  - `"Protected Audience API" OR "FLEDGE" ("third-party cookies" OR "Privacy Sandbox") guide OR tutorial` — *Technical developer writeups, architecture overviews, and tutorials analyzing Protected Audience implementation.* (8 returned)
  - `site:groups.google.com/a/chromium.org/g/blink-dev "Protected Audience" ("Intent to Deprecate" OR "Intent to Remove")` — *Official Chromium Blink-dev discussions, standards feedback, and community sentiment regarding the API removal.* (7 returned)
- **Google Search Grounding (gemini-3.8-flash):** 15 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 9 result(s) found — **4 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 13 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6552486106234880)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6552486106234880)
- [Specification](https://wicg.github.io/turtledove)
