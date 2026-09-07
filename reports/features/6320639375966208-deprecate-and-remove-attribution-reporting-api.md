# Deprecate and remove: Attribution Reporting API

> **Report Week:** 2026-W37 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

The Attribution Reporting API is a privacy-preserving web API designed to measure ad conversions without third-party cookies or user tracking across sites.

Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Attribution Reporting API (along with other Privacy Sandbox APIs).

[0]: https://privacysandbox.com/news/privacy-sandbox-next-steps/

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. Given this, we expect adoption to decrease over time as cross-site measurement will remain possible in Chrome using third-party cookies.

Further, other browser engines have not signaled interest in launching the API. Removing this (and other Privacy Sandbox APIs) will help focus efforts on the proposed interoperable Attribution standard.

See also https://privacysandbox.com/news/update-on-plans-for-privacy-sandbox-technologies/.

## Ecosystem Status

- **Momentum:** High (370 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Deprecate and remove: Attribution Reporting API is currently Deprecated in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [[blink-dev] Intent to Deprecate and Remove: Attribution Reporting API](https://groups.google.com/a/chromium.org/g/blink-dev/c/4K2RRt6VYCQ/m/xt3TXi3WBQAJ) *(groups.google.com · 2025-11-07T00:00:00)*
  > [blink-dev] Intent to Deprecate and Remove: Attribution Reporting API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; [blink-dev] Intent to Deprecate ...
- [Attribution Reporting API Developer's Guide | Privacy Sandbox](https://privacysandbox.google.com/private-advertising/attribution-reporting/android/developer-guide) *(privacysandbox.google.com · 2025-12-18T00:00:00)*
  > Attribution Reporting API Developer&#39;s Guide | Privacy Sandbox Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไ...
- [Deprecate and remove: Attribution Reporting API](https://chromestatus.com/feature/6320639375966208) *(chromestatus.com · 2025-10-21T00:00:00)*
  > Chrome Platform Status
- [[blink-dev] Intent to Deprecate and Remove: Attribution Reporting API](https://groups.google.com/a/chromium.org/g/blink-dev/c/4K2RRt6VYCQ) *(groups.google.com · 2025-11-07T00:00:00)*
  > [blink-dev] Intent to Deprecate and Remove: Attribution Reporting API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; [blink-dev] Intent to Deprecate ...
- [PSA: Attribution Reporting API deprecation and removal](https://groups.google.com/a/chromium.org/g/attribution-reporting-api-dev/c/nT-IZolzy8c) *(groups.google.com · 2025-12-04T00:00:00)*
  > Following the announcement that Chrome will maintain its current approach to third-party cookies, <strong>the Attribution Reporting API will be deprecated in Chrome 144</strong>, along with certain other APIs as outlined on the Privacy Sandbox featur...
- [Privacy Sandbox feature status](https://privacysandbox.google.com/overview/status) *(privacysandbox.google.com · 2025-10-17T00:00:00)*
  > This page describes implementation status for web and Android technologies developed as part of the Privacy Sandbox initiative. Browser and web platform features. Scheduled for phaseout. Explainer: Aggregation Service for the Attribution Reporting AP...
- [Google Pulls The Plug On Topics, PAAPI And Other Major Privacy Sandbox APIs (As The CMA Says ‘Cheerio’) | AdExchanger](https://www.adexchanger.com/privacy/google-pulls-the-plug-on-topics-paapi-and-other-major-privacy-sandbox-apis-as-the-cma-says-cheerio) *(adexchanger.com · 2025-10-19T03:27:47)*
  > Simultaneously, Google announced that it’s “decided to retire” a whole pile of Privacy Sandbox technologies, including (and strap in): <strong>the attribution reporting API on both Chrome and Android</strong>; IP protection; on-device personalization...
- [[blink-dev] Intent to Deprecate and Remove: Attribution Reporting API](http://www.mail-archive.com/blink-dev@chromium.org/msg15138.html) *(mail-archive.com)*
  > Following Chrome&#x27;s announcement &lt;https://privacysandbox.com/news/privacy-sandbox-next-steps/&gt; that the current approach to third-party cookies will be maintained, <strong>we are now planning to deprecate and remove &lt;https://privacysandb...
- [Google Privacy Sandbox Update 2026: Why Google Shut It Down](https://segwise.ai/blog/google-privacy-sandbox-shutdown-reason) *(segwise.ai · 2026-07-08T17:46:51)*
  > January to July 2026 (Chrome removes the APIs): Chrome started · <strong>deprecating Topics, Protected Audience, Attribution Reporting, and related APIs in Chrome 144 (January 2026), with full removal targeted for Chrome 150 (July 2026).</strong>
- [Intent to Deprecate and Remove: Private Aggregation API](https://groups.google.com/a/chromium.org/g/blink-dev/c/Ld7avyD0U0Q) *(groups.google.com · 2025-11-07T00:00:00)*
  > <strong>Removing this (and certain other Privacy Sandbox APIs) will help focus efforts on the proposed interoperable Attribution standard</strong>. ... Sites that rely on Private Aggregation reports for cross-site measurement and do not migrate to al...
- [Register attribution sources | Privacy Sandbox - Google](https://privacysandbox.google.com/private-advertising/attribution-reporting/register-attribution-source) *(privacysandbox.google.com · 2022-12-15T00:00:00)*
  > It&#x27;s also useful for app-to-web measurement: if attributionsrc is present, the browser sends the Attribution-Reporting-Support header. Step 1 is different for clicks and views. To register an attribution source for a click, you can use an &lt;a&...
- [Register attribution triggers | Privacy Sandbox](https://developers.google.com/privacy-sandbox/relevance/attribution-reporting/register-attribution-trigger) *(developers.google.com · 2022-12-15T00:00:00)*
  > The following example <strong>triggers the attribution on an existing image by adding the attributionsrc attribute</strong>. The origin for attributionsrc must match the origin that performed the source registration.
- [Third Party Cookie Replacement: Complete 2026 Guide](https://www.cometly.com/post/third-party-cookie-replacement) *(cometly.com · 2026-05-11T20:54:56)*
  > The entire foundation of digital attribution needed rebuilding. The industry didn&#x27;t wait for a single replacement to emerge. Instead, multiple approaches developed in parallel, each addressing different aspects of what third-party cookies used t...
- [Cookieless Tracking Solutions That Work in 2025 | Audiencelab | Audiencelab](https://audiencelab.ai/blog/cookieless-tracking-solutions) *(audiencelab.ai · 2025-08-14T00:00:00)*
  > Redirect tracking protections strip cookies from known bounce-tracking domains. Chrome: <strong>Privacy Sandbox APIs (Topics, Protected Audiences, Attribution Reporting) are available as alternatives to third-party cookies</strong>.
- [8 Best Third Party Cookie Alternatives in 2025](https://www.cookieyes.com/blog/cookie-alternatives) *(cookieyes.com · 2025-05-28T16:04:58)*
  > Attribution Reporting API: Measures ad performance without exposing individual user data. Other tools: Designed to enable privacy-compliant tracking and measurement across websites​​. These tools aim to preserve targeting functionality while respecti...
- [Attribution Reporting API for Marketing · Blog](https://blog.michaelsam94.com/web-performance-attribution-reporting-api) *(blog.michaelsam94.com · 2026-07-17T00:00:00)*
  > Marketing lost cross-site conversion visibility when third-party cookies died — aggregate campaign ROI went dark until we enrolled in Privacy Sandbox and wired Attribution Reporting API triggers on named conversion events with consent gating. ARA is ...
- [Cookieless Attribution Guide: Methods & Accuracy (2026)](https://improvado.io/blog/cookieless-attribution) *(improvado.io · 2026-07-14T11:12:27)*
  > ... <strong>Cookieless tracking</strong> is a method for gathering and examining user behavior data without using conventional browser cookies. It often employs techniques such as device fingerprinting, server-side tracking, and probabilistic modelin...
- [10 Best Alternatives to Third Party Cookies [2026] - MonetizeMore](https://www.monetizemore.com/blog/10-best-alternatives-to-third-party-cookies) *(monetizemore.com · 2026-03-03T11:23:08)*
  > Google’s Privacy Sandbox i.e a part of the Google Chrome cohort aims to replace &amp; block third-party cookies with an API system via cohorts like: FLEDGE: In-browser API that helps in retargeting known audiences. TOPICS: In-browser API designed to ...
- [Our Complete Guide to Cookieless Attribution](https://www.workshopdigital.com/blog/cookieless-attribution-guide) *(workshopdigital.com · 2025-07-31T18:14:59)*
  > To navigate this transition, <strong>marketers must invest in alternative data collection methods and leverage first-party data, server-side tracking, and customer data platforms (CDPs).</strong> This proactive approach will help maintain the ability...
- [First Party and Third Party Cookies: Your Step-by-Step Marketing Transition Guide](https://ignitevisibility.com/third-party-cookies) *(ignitevisibility.com · 2025-12-04T16:34:58)*
  > <strong>Privacy Sandbox</strong> is Google’s initiative to develop privacy-preserving alternatives to third-party cookies. It includes APIs like Topics (interest-based advertising), FLEDGE (remarketing), and Attribution Reporting (conversion measurem...
- [Intent to Ship: Attribution Reporting API feature (aggregation coordinator selection)](https://groups.google.com/a/chromium.org/g/blink-dev/c/6e44SBtEtcQ) *(groups.google.com)*
  > <strong>At some future point you&#x27;ll send an Intent to Deprecate &amp; Remove sending public keys from the old endpoint</strong>. :) ... Either email addresses are anonymous for this group or you need the view member email addresses permission to...
- [Intent to Ship: Attribution Reporting API](https://groups.google.com/a/chromium.org/g/blink-dev/c/2Rmj5V6FSaY) *(groups.google.com)*
  > See https://github.com/patcg-individual-drafts/ipa/issues/59 for our position on this proposal. I appreciate y&#x27;all&#x27;s engagement with that proposal and your commitment. ... -- You received this message because you are subscribed to the Googl...
- [Re: [blink-dev] Intent to Deprecate and Remove: Attribution Reporting API](http://www.mail-archive.com/blink-dev@chromium.org/msg16876.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · Re: [blink-dev] Intent to Deprecate and Remove: Attribution Reporting API · Chris Harrelson Thu, 25 Jun 2026 13:12:49 -0700 · LGTM1 On Thu, Jun 11, 2026 at 2:54 PM Nan Lin &lt;[email protected]&gt; wrote: · &gt...
- [Re: [blink-dev] Intent to Ship: Attribution Reporting Feature Bundle: Header Error Debug Reports, Preferred Platform field, Changing Source Deactivation](https://www.mail-archive.com/blink-dev@chromium.org/msg09804.html) *(mail-archive.com)*
  > Hi Mike, other than the blink-dev and GitHub Issue and PR, we have not yet. But I am planning to post an announcement about the change to the Attribution Reporting API Announcements &lt;https://groups.google.com/a/chromium.org/g/attribution-reporting...
- [Intent to Experiment: Attribution Reporting API](https://groups.google.com/a/chromium.org/g/blink-dev/c/jEnNpideO1Y/m/nlEDdjmnCgAJ) *(groups.google.com)*
  > For general discussion and feedback see: https://github.com/patcg/meetings/tree/main/2022/02/09-telecon
- [[blink-dev] Intent to Ship: Attribution Reporting Feature: Flexible contributions filtering](https://www.mail-archive.com/blink-dev@chromium.org/msg10865.html) *(mail-archive.com)*
  > The attribution reporting feature will be supported on all platforms with the exception of Android WebView Is this feature fully tested by web-platform-tests &lt;https://chromium.googlesource.com/chromium/src/+/main/docs/testing/web_platform_tests.md...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Intent to Deprecate and Remove: Attribution Reporting API](https://groups.google.com/a/chromium.org/g/blink-dev/c/4K2RRt6VYCQ/m/xt3TXi3WBQAJ) *(groups.google.com · 2025-11-07T00:00:00)* *(Cites: `https://chromestatus.com/feature/6320639375966208`)*
  > [blink-dev] Intent to Deprecate and Remove: Attribution Reporting API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; [blink-dev] Intent to ...
- [attribution-reporting-api/index.bs at main · WICG/attribution-reporting-api](https://github.com/WICG/attribution-reporting-api/blob/main/index.bs) *(github.com)* *(Cites: `https://wicg.github.io/attribution-reporting-api`)*
  > attribution-reporting-api/index.bs at main · WICG/attribution-reporting-api · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload t...
- [Attribution Reporting API · Issue #180 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/180) *(github.com · 2023-04-25T23:24:06)* *(Cites: `https://wicg.github.io/attribution-reporting-api`)*
  > Attribution Reporting API · Issue #180 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refres...
- [Consider only calling attributed reporting origin limit once per trigger · Issue #1287 · WICG/attribution-reporting-api](https://github.com/WICG/attribution-reporting-api/issues/1287) *(github.com · 2024-05-17T18:11:03)* *(Cites: `https://wicg.github.io/attribution-reporting-api`)*
  > Consider only calling attributed reporting origin limit once per trigger · Issue #1287 · WICG/attribution-reporting-api · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You si...
- [Attribution Reporting API · Issue #791 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/791) *(github.com · 2023-04-25T23:19:52)* *(Cites: `https://wicg.github.io/attribution-reporting-api`)*
  > Attribution Reporting API · Issue #791 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refre...
- [Attribution Reporting API Developer's Guide | Privacy Sandbox](https://privacysandbox.google.com/private-advertising/attribution-reporting/android/developer-guide) *(privacysandbox.google.com · 2025-12-18T00:00:00)* *(Cites: `https://wicg.github.io/attribution-reporting-api`)*
  > Attribution Reporting API Developer&#39;s Guide | Privacy Sandbox Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी ব...

## 📚 Platform Documentation & Specifications

- [attribution-reporting-api/index.bs at main · WICG/attribution-reporting-api](https://github.com/WICG/attribution-reporting-api/blob/main/index.bs) *(github.com)*
- [Attribution Reporting API · Issue #180 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/180) *(github.com)*
- [Consider only calling attributed reporting origin limit once per trigger · Issue #1287 · WICG/attribution-reporting-api](https://github.com/WICG/attribution-reporting-api/issues/1287) *(github.com)*
- [Attribution Reporting API · Issue #791 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/791) *(github.com)*
- [Registering attribution sources - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Attribution_Reporting_API/Registering_sources) *(developer.mozilla.org)*
- [Registering attribution triggers - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Attribution_Reporting_API/Registering_triggers) *(developer.mozilla.org)*
- [Attribution Reporting API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Attribution_Reporting_API) *(developer.mozilla.org)*
- [privacy-preserving-ads/Attribution Reporting.md at main · WICG/privacy-preserving-ads](https://github.com/WICG/privacy-preserving-ads/blob/main/Attribution%20Reporting.md) *(github.com)*
- [attribution-reporting-api/EVENT.md at main · WICG/attribution-reporting-api](https://github.com/WICG/attribution-reporting-api/blob/main/EVENT.md) *(github.com)*
- [Attribution-Reporting-Eligible header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Eligible) *(developer.mozilla.org)*
- [Attribution-Reporting-Register-Source header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 36 result(s) found across 6 planned queries — **35 verified relevant**
  - `"chromestatus.com/feature/6320639375966208" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"wicg.github.io/attribution-reporting-api" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"Attribution Reporting API" (deprecate OR deprecation OR remove OR removal) "Privacy Sandbox"` — *Finds industry announcements, Chrome platform roadmap updates, and ecosystem news regarding the removal of the Attribution Reporting API.* (8 returned)
  - `"attributionReporting" OR "attributionsrc" OR "Attribution-Reporting-Register-Source" (javascript OR example)` — *Retrieves real-world JavaScript code snippets, HTML attributes, and HTTP headers showing how the API was implemented.* (8 returned)
  - `"Attribution Reporting API" (migration OR alternative OR replacement OR "third-party cookies") blog OR guide` — *Surfaces developer guides, tech blogs, and agency analyses discussing alternatives and future measurement strategies post-deprecation.* (8 returned)
  - `"Attribution Reporting API" ("intent to deprecate" OR "blink-dev" OR adtech OR PATCG) discussion` — *Locates discussions among browser vendors, W3C Private Advertising Technology (PATCG) contributors, and ad-tech developers reacting to the pivot.* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
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

- [ChromeStatus](https://chromestatus.com/feature/6320639375966208)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6320639375966208)
- [Specification](https://wicg.github.io/attribution-reporting-api)
