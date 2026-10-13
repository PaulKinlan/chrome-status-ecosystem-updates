# Deprecate and remove: Attribution Reporting API

> **Report Week:** 2026-W42 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

The Attribution Reporting API is a privacy-preserving web API designed to measure ad conversions without third-party cookies or user tracking across sites.  Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Attribution Reporting API (along with other Privacy Sandbox APIs).  \[0\]: https://privacysandbox.com/news/privacy-sandbox-next-steps/

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. Given this, we expect adoption to decrease over time as cross-site measurement will remain possible in Chrome using third-party cookies.  Further, other browser engines have not signaled interest in launching the API. Removing this (and other Privacy Sandbox APIs) will help focus efforts on the proposed interoperable Attribution standard.  See also https://privacysandbox.com/news/update-on-plans-for-privacy-sandbox-technologies/.

## Ecosystem Status

- **Momentum:** Moderate (footprint 250 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** The Attribution Reporting API is officially deprecated and slated for phased removal through Chrome 153 following Google's reversal on eliminating third-party cookies in Chrome. The API never achieved multi-engine adoption, and its deprecation has now been formally documented on Chrome Platform Status and MDN Web Docs. As Chromium retires the mechanism, cross-browser focus is shifting toward collaborative, standards-based measurement proposals within the W3C.

### Recommendations
- Actionable Advice: Engineering teams should immediately halt new implementations of the Attribution Reporting API and audit codebases to sunset existing headers and registration scripts ahead of milestone 153. Measurement strategies should instead rely on durable first-party conversion tracking and server-side pipelines while tracking emerging W3C standards.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [google.com](https://privacysandbox.google.com/private-advertising/attribution-reporting/chrome-shipping) *(privacysandbox.google.com)*
  > The \*\*Attribution Reporting API\*\* was introduced as part of Google’s Privacy Sandbox to provide privacy-preserving ad measurement (such as click-through and view-through conversions) without relying on cross-site tracking or third-party cookies \* \*\*S...
- [ethyca.com](https://www.ethyca.com/guides/third-party-cookie-deprecation-here-s-what-privacy-teams-need-to-know) *(ethyca.com)*
  > Following Google's decision to maintain third-party cookies in Chrome (transitioning instead to a user-choice model), the browser team announced plans to \*\*deprecate and remove the Attribution Reporting API\*\* (alongside several other ad-targeting and...
- [secureprivacy.ai](https://secureprivacy.ai/blog/google-killed-privacy-sandbox-what-changes-for-cookie-consent-in-2026) *(secureprivacy.ai)*
  > Following Google's decision to maintain third-party cookies in Chrome (transitioning instead to a user-choice model), the browser team announced plans to \*\*deprecate and remove the Attribution Reporting API\*\* (alongside several other ad-targeting and...
- [google.com](https://privacysandbox.google.com/blog/update-on-plans-for-privacy-sandbox-technologies) *(privacysandbox.google.com)*
  > \* \*\*Low Industry Adoption:\*\* With third-party cookies remaining active in Chrome, adoption remained low among ad-tech vendors \* \*\*Shift to Interoperable Standards:\*\* Chrome signaled that it will focus cross-browser collaboration on broader, interoper...
- [Privacy Sandbox History and Timeline - The Third-Party Cookie Phase-Out Plan, Its Reversal, API Deprecation and Removal in Chrome, and What Remains Supported \| hidekazu-konishi.com](https://hidekazu-konishi.com/entry/privacy_sandbox_history_and_timeline.html) *(hidekazu-konishi.com)*
  > Chrome Platform Status: \*"Deprecate and remove: Attribution Reporting API"\* \* \*\*Status Entry:\*\* Listed as a \*Feature Removal\* targeting deprecation starting in Chrome 144 and phased removal toward Chrome 153
- [chrome.com](https://developer.chrome.com/blog/chrome-144-beta) *(developer.chrome.com)*
  > Chrome Platform Status: \*"Deprecate and remove: Attribution Reporting API"\* \* \*\*Status Entry:\*\* Listed as a \*Feature Removal\* targeting deprecation starting in Chrome 144 and phased removal toward Chrome 153 attributionSourceId\`, \`attributionReportin...
- [chrome.com](https://developer.chrome.com/release-notes/153) *(developer.chrome.com)*
  > attributionSourceId\`, \`attributionReporting\` request headers, and registration mechanisms)
- [google.com](https://privacysandbox.google.com/overview/status) *(privacysandbox.google.com)*
  > \* \*\*Privacy Sandbox Feature Status:\*\* Updated status indicators across Privacy Sandbox documentation, listing Attribution Reporting (Web & Android), Topics, and Protected Audience as "Scheduled for phaseout" / retired, while retaining non-ad infrastr...
- [chrome.com](https://developer.chrome.com/docs/privacy-sandbox/status) *(developer.chrome.com)*
  > \* \*\*Privacy Sandbox Feature Status:\*\* Updated status indicators across Privacy Sandbox documentation, listing Attribution Reporting (Web & Android), Topics, and Protected Audience as "Scheduled for phaseout" / retired, while retaining non-ad infrastr...
- [google.com](https://privacysandbox.google.com/private-advertising/attribution-reporting/attribution-reporting-updates) *(privacysandbox.google.com)*
  > Engineering teams had invested significant resources between 2021 and 2024 building summary-report aggregators, noise-handling algorithms, and encryption keys for an API suite that was ultimately sunset
- [\[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API](https://groups.google.com/a/chromium.org/g/blink-dev/c/4K2RRt6VYCQ/m/xt3TXi3WBQAJ) *(groups.google.com · 2025-11-07T00:00:00)*
  > \[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; \[blink-dev\] Intent to Deprecate ...
- [\[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API](https://groups.google.com/a/chromium.org/g/blink-dev/c/4K2RRt6VYCQ) *(groups.google.com · 2025-11-07T00:00:00)*
  > Sites that are using the Attribution Reporting API for conversion measurement and do not migrate to alternative solutions may experience a disruption in conversion measurement on eventual removal of the API code from Chrome. Conversion measurement di...
- [PSA: Attribution Reporting API deprecation and removal](https://groups.google.com/a/chromium.org/g/attribution-reporting-api-dev/c/nT-IZolzy8c) *(groups.google.com · 2025-12-04T00:00:00)*
  > Following the announcement that Chrome will maintain its current approach to third-party cookies, &lt;strong&gt;the Attribution Reporting API will be deprecated in Chrome 144&lt;/strong&gt;, along with certain other APIs as outlined on the Privacy Sandbox featur...
- [\[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API](http://www.mail-archive.com/blink-dev@chromium.org/msg15138.html) *(mail-archive.com)*
  > Contact emails \[email protected\], ...orting-api/ Summary The Attribution Reporting API (ARA) is &lt;strong&gt;a privacy-preserving web API designed to measure ad conversions without third-party cookies or user tracking across sites&lt;/strong&gt;....
- [Re: \[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API](http://www.mail-archive.com/blink-dev@chromium.org/msg17692.html) *(mail-archive.com)*
  > Best, Nan On Wednesday, July 1, ... 11, 2026 at 2:54 PM Nan Lin &lt;\[email protected\]&gt; wrote: Hi API Owners, &lt;strong&gt;The Attribution Reporting API was deprecated in Chrome-144 with a plan to remove it in Chrome-150&lt;/strong&gt;....
- [Deprecate and remove: Attribution Reporting API](https://cr-status.appspot.com/feature/6320639375966208) *(cr-status.appspot.com · 2025-11-20T00:00:00)*
  > Sign in with GoogleSign in with Google. Opens in new tab
- [Google Pulls The Plug On Topics, PAAPI And Other Major Privacy Sandbox APIs (As The CMA Says ‘Cheerio’) \| AdExchanger](https://www.adexchanger.com/privacy/google-pulls-the-plug-on-topics-paapi-and-other-major-privacy-sandbox-apis-as-the-cma-says-cheerio) *(adexchanger.com · 2025-10-19T03:27:47)*
  > Several respondents expressed worries that ongoing development of the Privacy Sandbox, such as it is, could still lead to anti-competitive behavior if Google reverses its current approach. In response, the CMA assessed that Google’s recent decision n...
- [What was Google's Privacy Sandbox, and why did it end in 2025?](https://shieldlabs.ai/blog/privacy-sandbox) *(shieldlabs.ai · 2026-07-21T00:00:00)*
  > On October 17, 2025, Google announced ... Audience, and Attribution Reporting, with &lt;strong&gt;deprecation beginning in Chrome 144 in January 2026 and removal targeted for Chrome 150 in July 2026&lt;/strong&gt;....
- [Google Is Scrapping Privacy Sandbox APIs as Chrome Keeps Third-Party Cookies After All](https://windowsreport.com/google-is-scrapping-privacy-sandbox-apis-as-chrome-keeps-third-party-cookies-after-all) *(windowsreport.com · 2025-11-09T05:47:35)*
  > &lt;strong&gt;Google will deprecate and remove Privacy Sandbox APIs like Topics and Attribution while keeping third-party cookies in Chrome&lt;/strong&gt;.
- [Google Privacy Sandbox Update 2026: Why Google Shut It Down](https://segwise.ai/blog/google-privacy-sandbox-shutdown-reason) *(segwise.ai · 2026-09-03T14:19:52)*
  > On · October 17, 2025 Google said ... Reporting, and more), and Chrome then began · &lt;strong&gt;deprecating them in Chrome 144 (January 2026), with removal targeted for Chrome 150 (July 2026).&lt;/strong&gt;...
- [Attribution Reporting API announcements - Google Groups](https://groups.google.com/a/chromium.org/g/attribution-reporting-api-dev) *(groups.google.com)*
  > PSA: Attribution Reporting API deprecation and removal

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Deprecate and remove: Attribution Reporting API · Issue #1325 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1325) *(github.com · 2026-08-14T17:31:48)* *(Cites: `https://chromestatus.com/feature/6320639375966208`)*
  > Deprecate and remove: Attribution Reporting API · Issue #1325 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with anothe...
- [\[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API](https://groups.google.com/a/chromium.org/g/blink-dev/c/4K2RRt6VYCQ/m/xt3TXi3WBQAJ) *(groups.google.com · 2025-11-07T00:00:00)* *(Cites: `https://chromestatus.com/feature/6320639375966208`)*
  > \[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; \[blink-dev\] Intent to ...

## 📚 Platform Documentation & Specifications

- [Attribution Reporting API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Attribution_Reporting_API) *(developer.mozilla.org)*
- [Deprecate and remove: Attribution Reporting API · Issue #1325 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1325) *(github.com)*
- [\[rule\] attr/browsingtopics-attributionsrc · Issue #433 · cevdetta/deadhead](https://github.com/cevdetta/deadhead/issues/433) *(github.com)*
- [Generating attribution reports - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 70 result(s) found across 11 planned queries — **16 verified relevant**
  - `"chromestatus.com/feature/6320639375966208" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"wicg.github.io/attribution-reporting-api" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"Deprecate and remove: Attribution Reporting API" API` — *Core feature API query* (8 returned)
  - `"Deprecate and remove: Attribution Reporting API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"privacysandbox.com" OR "privacy-preserving" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and remove: Attribution Reporting API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and remove: Attribution Reporting API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Attribution Reporting API" (tutorial OR guide OR "how to") conversion measurement` — *Guides and developer tutorials covering practical implementation and conversion tracking using the Attribution Reporting API.* (8 returned)
  - `"attributionReporting" OR "attributionsrc" (navigator.attributionReporting OR "Attribution-Reporting-Register-Source")` — *Code snippets and technical usage examples of JavaScript APIs and HTTP headers used with Attribution Reporting.* (8 returned)
  - `"Attribution Reporting API" (deprecate OR deprecation OR removal OR "Privacy Sandbox") "third-party cookies"` — *Industry news, official announcements, and AdTech ecosystem reactions to Chrome's decision to deprecate the API.* (8 returned)
  - `"Attribution Reporting API" (deprecated OR remove OR removal) site:groups.google.com/a/chromium.org OR site:github.com/WICG` — *Discussions among browser engineers and web standards contributors on Blink Intent-to-Deprecate threads and GitHub issues.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 20 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 5 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 6 result(s) found — **3 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 11 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6320639375966208)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6320639375966208)
- [Specification](https://wicg.github.io/attribution-reporting-api)
