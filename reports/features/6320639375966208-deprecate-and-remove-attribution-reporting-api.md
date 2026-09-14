# Deprecate and remove: Attribution Reporting API

> **Report Week:** 2026-W38 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

The Attribution Reporting API is a privacy-preserving web API designed to measure ad conversions without third-party cookies or user tracking across sites.  Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Attribution Reporting API (along with other Privacy Sandbox APIs).  \[0\]: https://privacysandbox.com/news/privacy-sandbox-next-steps/

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. Given this, we expect adoption to decrease over time as cross-site measurement will remain possible in Chrome using third-party cookies.

Further, other browser engines have not signaled interest in launching the API. Removing this (and other Privacy Sandbox APIs) will help focus efforts on the proposed interoperable Attribution standard.

See also https://privacysandbox.com/news/update-on-plans-for-privacy-sandbox-technologies/.

## Ecosystem Status

- **Momentum:** High (390 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Deprecate and remove: Attribution Reporting API is currently Deprecated in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API](http://www.mail-archive.com/blink-dev@chromium.org/msg15196.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Deprecate and Remove: Attribution Reporting API Skip to site navigation (Press enter) Re: [blink-dev] Intent to Deprecate and Remove: Attribution Reporting API Daniel Bratell Wed, 12 Nov 2025 08:44:50 -0800 LGTM2 for depreca...
- [\[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API](https://groups.google.com/a/chromium.org/g/blink-dev/c/4K2RRt6VYCQ/m/xt3TXi3WBQAJ) *(groups.google.com · 2025-11-07T00:00:00)*
  > [blink-dev] Intent to Deprecate and Remove: Attribution Reporting API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; [blink-dev] Intent to Deprecate ...
- [Attribution Reporting API Developer's Guide \| Privacy Sandbox](https://privacysandbox.google.com/private-advertising/attribution-reporting/android/developer-guide) *(privacysandbox.google.com · 2025-12-18T00:00:00)*
  > Przewodnik dla programistów dotyczący interfejsu Attribution Reporting API | Privacy Sandbox Przejdź do głównej treści / English Deutsch Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית ...
- [\[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API](https://groups.google.com/a/chromium.org/g/blink-dev/c/4K2RRt6VYCQ) *(groups.google.com · 2025-11-07T00:00:00)*
  > [blink-dev] Intent to Deprecate and Remove: Attribution Reporting API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; [blink-dev] Intent to Deprecate ...
- [Deprecate and remove: Attribution Reporting API](https://chromestatus.com/feature/6320639375966208) *(chromestatus.com · 2025-10-21T00:00:00)*
  > We cannot provide a description for this page right now
- [PSA: Attribution Reporting API deprecation and removal](https://groups.google.com/a/chromium.org/g/attribution-reporting-api-dev/c/nT-IZolzy8c) *(groups.google.com · 2025-12-04T00:00:00)*
  > Following the announcement that Chrome will maintain its current approach to third-party cookies, <strong>the Attribution Reporting API will be deprecated in Chrome 144</strong>, along with certain other APIs as outlined on the Privacy Sandbox featur...
- [\[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API](http://www.mail-archive.com/blink-dev@chromium.org/msg15138.html) *(mail-archive.com)*
  > Contact emails [email protected], ...orting-api/ Summary The Attribution Reporting API (ARA) is <strong>a privacy-preserving web API designed to measure ad conversions without third-party cookies or user tracking across sites</strong>....
- [Re: \[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API](http://www.mail-archive.com/blink-dev@chromium.org/msg16916.html) *(mail-archive.com)*
  > LGTM1 On Thu, Jun 11, 2026 at 2:54 PM Nan Lin &lt;[email protected]&gt; wrote: Hi API Owners, <strong>The Attribution Reporting API was deprecated in Chrome-144 with a plan to remove it in Chrome-150</strong>. Currently the usage is 19.7% of page loa...
- [Deprecate and remove: Attribution Reporting API](https://cr-status.appspot.com/feature/6320639375966208) *(cr-status.appspot.com · 2025-11-20T00:00:00)*
  > Sign in with GoogleSign in with Google. Opens in new tab
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=%22Intent+to+Deprecate+and+Remove%22) *(groups.google.com)*
  > &gt; <strong>&quot;Deprecate&quot; means that the feature still works but using it shows a &gt; deprecation warning in the DevTools console and kicks Reporting API</strong>. &gt; &gt; IMO, we should ... &gt; approval to remove.) &gt;&gt; &gt; &gt; Wi...
- [Attribution Reporting API Developer's Guide \| Privacy Sandbox](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/android/developer-guide) *(developers.google.com)*
  > As you read through the Privacy Sandbox on Android documentation, use the Developer Preview or Beta button to select the program version that you&#x27;re working with, as instructions may vary · The Attribution Reporting API is designed to provide im...
- [Rebuilding ROI Logic With Google’s Attribution Reporting API](https://diggrowth.com/blogs/marketing-attribution/attribution-reporting-api) *(diggrowth.com · 2025-08-04T08:05:13)*
  > <strong>With no access to cross-site user identifiers or full conversion paths, advertisers can no longer attribute value to individual touchpoints</strong>. This effectively deprecates multi-touch attribution as it has traditionally been used.
- [Get started with attribution reporting \| Privacy Sandbox](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/getting-started) *(developers.google.com)*
  > To effectively measure ad campaign performance with varying levels of detail and privacy, the Attribution Reporting API provides two distinct report types: Event-level reports: Provide granular data linking a specific ad click or view (the source) wi...
- [Implementing the Attribution Reporting API and best practices - Privacy Sandbox Help](https://support.google.com/privacysandbox/answer/15682664?hl=en) *(support.google.com)*
  > Ready to start using the Attribution Reporting API? Here are some resources and best practices to guide your implementation: For Web: Attribution Reporting
- [Attribution Reporting API \| Privacy Sandstorm](https://privacysandstorm.com/privacy-sandbox/attribution-reporting) *(privacysandstorm.com)*
  > This API is being deprecated, although Google said they would continue work on a similar proposal through the web standards process, see the official announcement and this status overview from Google. Ad conversion measurement often relies on third-p...
- [Privacy Sandbox feature status](https://privacysandbox.google.com/overview/status) *(privacysandbox.google.com · 2025-10-17T00:00:00)*
  > This page describes implementation status for web and Android technologies developed as part of the Privacy Sandbox initiative. Browser and web platform features. Scheduled for phaseout. Explainer: Aggregation Service for the Attribution Reporting AP...
- [Re: \[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API](http://www.mail-archive.com/blink-dev@chromium.org/msg15220.html) *(mail-archive.com)*
  > We will &gt;&gt;&gt; continue to monitor usage in addition to providing comprehensive updates on &gt;&gt;&gt; privacysandbox.google.com with the status of the API and deprecation &gt;&gt;&gt; plans &lt;https://privacysandbox.google.com/overview/statu...
- [Google Pulls The Plug On Topics, PAAPI And Other Major Privacy Sandbox APIs (As The CMA Says ‘Cheerio’) \| AdExchanger](https://www.adexchanger.com/privacy/google-pulls-the-plug-on-topics-paapi-and-other-major-privacy-sandbox-apis-as-the-cma-says-cheerio) *(adexchanger.com · 2025-10-19T03:27:47)*
  > Despite retiring the attribution reporting API, Google said it plans to repurpose the feedback it got from companies while it was developing that tool and use it to help inform the ongoing development of Attribution within the Private Advertising Tec...
- [Google Privacy Sandbox API deprecations](https://learnfocus-sigma.vercel.app/?page=en-git-mdn-browser-compat-data-1762585883240) *(learnfocus-sigma.vercel.app · 2025-11-07T16:01:04)*
  > These APIs include document.requestStorageAccessFor, Related Website Sets (RWS), Shared Storage, Protected Audience, Private Aggregation API, Attribution Reporting API, and Topics API. The deprecation applies to Chromium-based browsers such as Chrome...
- [Enable conversion measurement \| Privacy Sandbox - Google](https://privacysandbox.google.com/private-advertising/attribution-reporting/enable-conversion-measurement) *(privacysandbox.google.com · 2024-03-26T00:00:00)*
  > Learn how to support conversion attribution measurement by <strong>allowing multiple distinct ad techs to generate and receive attribution reports for a given set of impression and click source events and conversion trigger events</strong>.
- [Get started with attribution reporting \| Privacy Sandbox - Google](https://privacysandbox.google.com/private-advertising/attribution-reporting/getting-started) *(privacysandbox.google.com)*
  > ... To effectively measure ad campaign ... types: Event-level reports: <strong>Provide granular data linking a specific ad click or view (the source) with corresponding conversion data (the trigger).</strong>...
- [Criteo’s First Look at the Attribution Reporting API (Event-Level), the Privacy Sandbox Conversion Measurement Solution \| by Batiste Haller \| Criteo Tech Blog \| Medium](https://medium.com/criteo-engineering/criteos-first-look-at-the-privacy-sandbox-attribution-reporting-api-event-level-f96f42537b9c) *(medium.com · 2023-04-17T11:02:01)*
  > <strong>The Attribution Reporting API is the proposed solution to measure when an ad leads to a conversion, in other words, to measure post-advertising conversions</strong>. We will walk through our early, partial experience with implementing and tes...
- [Exploring the Attribution Reporting API: Privacy-Friendly Conversion Tracking \| Webolution Designs](https://webolutiondesigns.com/exploring-the-attribution-reporting-api-privacy-friendly-conversion-tracking) *(webolutiondesigns.com · 2024-12-28T07:52:35)*
  > <strong>The Attribution Reporting API is an experimental web feature designed to measure ad conversions while preserving user privacy</strong>. It eliminates the need for third-party cookies, providing a more secure and privacy-compliant way to track...
- [Attribution Reporting for mobile overview \| Privacy Sandbox](https://privacysandbox.google.com/private-advertising/attribution-reporting/android) *(privacysandbox.google.com)*
  > <strong>The Attribution Reporting API matches triggers to attribution sources—a conversion attribution—and one or more triggers are sent off-device through event-level and aggregatable reports to ad techs</strong>.
- [Measurement testing guide \| Privacy Sandbox - Google](https://privacysandbox.google.com/private-advertising/attribution-reporting/measurement-testing-guide) *(privacysandbox.google.com)*
  > We prefer this method over Mode ... using two different measurement methodologies (<strong>third-party cookies + non-third-party cookie data and ARA + non-third-party cookie data</strong>)....
- [Intent to Ship: Attribution Reporting API](https://groups.google.com/a/chromium.org/g/blink-dev/c/2Rmj5V6FSaY) *(groups.google.com)*
  > Safari has proposed and implemented Private Click Measurement (https://privacycg.github.io/private-click-measurement/). Can you expand (or point to existing docs) about the differences between this and PCM? What&#x27;s the likelihood of future conver...
- [Differentially Private Ad Conversion Measurement](https://arxiv.org/html/2403.15224v1) *(arxiv.org · 2024-03-22T14:16:22)*
  > These APIs and proposals include the Interoperable Private Attribution (IPA) proposed by Mozilla and Meta, (Thomson, 2022), Masked LARk from Microsoft (Pfeiffer III et al., 2021), the Privacy Sandbox Attribution Reporting API (ARA) on Chrome (Nalpas ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API](http://www.mail-archive.com/blink-dev@chromium.org/msg15196.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6320639375966208`)*
  > Re: [blink-dev] Intent to Deprecate and Remove: Attribution Reporting API Skip to site navigation (Press enter) Re: [blink-dev] Intent to Deprecate and Remove: Attribution Reporting API Daniel Bratell Wed, 12 Nov 2025 08:44:50 -0800 LGTM2 f...
- [\[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API](https://groups.google.com/a/chromium.org/g/blink-dev/c/4K2RRt6VYCQ/m/xt3TXi3WBQAJ) *(groups.google.com · 2025-11-07T00:00:00)* *(Cites: `https://chromestatus.com/feature/6320639375966208`)*
  > [blink-dev] Intent to Deprecate and Remove: Attribution Reporting API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; [blink-dev] Intent to ...
- [attribution-reporting-api/index.bs at main · WICG/attribution-reporting-api](https://github.com/WICG/attribution-reporting-api/blob/main/index.bs) *(github.com)* *(Cites: `https://wicg.github.io/attribution-reporting-api`)*
  > attribution-reporting-api/index.bs at main · WICG/attribution-reporting-api · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload t...
- [Attribution Reporting API · Issue #180 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/180) *(github.com · 2023-04-25T23:24:06)* *(Cites: `https://wicg.github.io/attribution-reporting-api`)*
  > Attribution Reporting API · Issue #180 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refres...
- [Consider only calling attributed reporting origin limit once per trigger · Issue #1287 · WICG/attribution-reporting-api](https://github.com/WICG/attribution-reporting-api/issues/1287) *(github.com · 2024-05-17T18:11:03)* *(Cites: `https://wicg.github.io/attribution-reporting-api`)*
  > Consider only calling attributed reporting origin limit once per trigger · Issue #1287 · WICG/attribution-reporting-api · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You si...
- [Attribution Reporting API · Issue #791 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/791) *(github.com · 2023-04-25T23:19:52)* *(Cites: `https://wicg.github.io/attribution-reporting-api`)*
  > Attribution Reporting API · Issue #791 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refre...
- [Attribution Reporting API Developer's Guide \| Privacy Sandbox](https://privacysandbox.google.com/private-advertising/attribution-reporting/android/developer-guide) *(privacysandbox.google.com · 2025-12-18T00:00:00)* *(Cites: `https://wicg.github.io/attribution-reporting-api`)*
  > Przewodnik dla programistów dotyczący interfejsu Attribution Reporting API | Privacy Sandbox Przejdź do głównej treści / English Deutsch Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русс...

## 📚 Platform Documentation & Specifications

- [attribution-reporting-api/index.bs at main · WICG/attribution-reporting-api](https://github.com/WICG/attribution-reporting-api/blob/main/index.bs) *(github.com)*
- [Attribution Reporting API · Issue #180 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/180) *(github.com)*
- [Consider only calling attributed reporting origin limit once per trigger · Issue #1287 · WICG/attribution-reporting-api](https://github.com/WICG/attribution-reporting-api/issues/1287) *(github.com)*
- [Attribution Reporting API · Issue #791 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/791) *(github.com)*
- [Permissions-Policy: attribution-reporting directive - HTTP \| MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/attribution-reporting) *(developer.mozilla.org)*
- [attribution-reporting-api/EVENT.md at main · WICG/attribution-reporting-api](https://github.com/WICG/attribution-reporting-api/blob/main/EVENT.md) *(github.com)*
- [Generating attribution reports - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports) *(developer.mozilla.org)*
- [GitHub - WICG/attribution-reporting-api: Attribution Reporting API · GitHub](https://github.com/WICG/attribution-reporting-api) *(github.com)*
- [Enable Private Click Tracking, Attribution Reporting API and Ping on \`a\` tags · Issue #35067 · ampproject/amphtml](https://github.com/ampproject/amphtml/issues/35067) *(github.com)*
- [Attribution Reporting API](https://developer.mozilla.org/en-US/docs/Web/API/Attribution_Reporting_API) *(developer.mozilla.org)*
- [Attribution-Reporting-Eligible header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Eligible) *(developer.mozilla.org)*
- [Attribution-Reporting-Register-Source header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 66 result(s) found across 12 planned queries — **36 verified relevant**
  - `"chromestatus.com/feature/6320639375966208" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"wicg.github.io/attribution-reporting-api" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"Deprecate and remove: Attribution Reporting API" API` — *Core feature API query* (7 returned)
  - `"Deprecate and remove: Attribution Reporting API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"privacysandbox.com" OR "privacy-preserving" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and remove: Attribution Reporting API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and remove: Attribution Reporting API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Attribution Reporting API" (deprecate OR deprecation OR "intent to remove" OR removed) "Privacy Sandbox"` — *Find industry news, vendor reactions, and official timeline announcements regarding the deprecation and removal of the Attribution Reporting API.* (8 returned)
  - `"Attribution Reporting API" ("third-party cookies" OR "Privacy Sandbox") site:news.ycombinator.com OR site:reddit.com` — *Discover developer sentiment, adtech ecosystem debates, and community feedback on Chrome reverting plans and discontinuing Attribution Reporting.* (4 returned)
  - `"attributionreporting" OR "attributionsrc" ("register-source" OR "register-trigger") (github.com OR gist.github.com)` — *Locate real-world JavaScript code repositories, trigger registrations, and HTTP header implementations using the API.* (0 returned)
  - `"Attribution Reporting API" guide OR tutorial OR implementation "conversion measurement"` — *Explore practical engineering guides, tutorials, and adtech integration articles explaining how the API functions in practice.* (8 returned)
  - `"Attribution Reporting" deprecation ("interoperable attribution" OR "Private Click Measurement" OR "IPA") alternatives` — *Search for technical commentary and cross-browser migration strategies towards alternative interoperable attribution proposals.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
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

- [ChromeStatus](https://chromestatus.com/feature/6320639375966208)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6320639375966208)
- [Specification](https://wicg.github.io/attribution-reporting-api)
