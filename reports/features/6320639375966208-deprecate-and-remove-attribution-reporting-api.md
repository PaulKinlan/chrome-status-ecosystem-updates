# Deprecate and remove: Attribution Reporting API

> **Report Week:** 2026-W41 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

The Attribution Reporting API is a privacy-preserving web API designed to measure ad conversions without third-party cookies or user tracking across sites.  Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Attribution Reporting API (along with other Privacy Sandbox APIs).  \[0\]: https://privacysandbox.com/news/privacy-sandbox-next-steps/

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. Given this, we expect adoption to decrease over time as cross-site measurement will remain possible in Chrome using third-party cookies.

Further, other browser engines have not signaled interest in launching the API. Removing this (and other Privacy Sandbox APIs) will help focus efforts on the proposed interoperable Attribution standard.

See also https://privacysandbox.com/news/update-on-plans-for-privacy-sandbox-technologies/.

## Ecosystem Status

- **Momentum:** High (240 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Deprecate and remove: Attribution Reporting API is currently Deprecated in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGVIAMunmjia0Jt7_17egmbFjf3mho21iNMSwZN67wbqchlR73Lixa_c2cnooTgj0NAdss0LNf6bNNOHCAWe4wMOAh7mEksFjos0tTVzOO-NSwRx__DFG2Jf4gnztQxAT2yCNYtKl0ElB7ThUiUGOR2LEb7dNf2CxceCrpgILpONIDdv1QAQGS97wrrDZw=) *(vertexaisearch.cloud.google.com)*
  > Update on Plans for Privacy Sandbox Technologies Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGevtfwLXw4NYyXkKZK405VBOkymzLDzCJ6hpY-ZmFTHoeWcxe8RNUG-1RtTUA7ujR-Ki7Detnfi3VV6eRbMsshWZUk8PhVbKD0jaGwrmMllds8ozfdCp7PJhxB-zDv_xLD7Hm80weS) *(vertexaisearch.cloud.google.com)*
  > Privacy Sandbox feature status Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Home Sig...
- [hidekazu-konishi.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGpVr8lsWVYQHJ0B5wVWtGgo6JvTnM_x-EzWpvKpQVWShJvYqydJoXNfbS1he-U_IcoZcECU-OSRIHx-KAckXruxPyrdnPSVlSFz25ceR1PSvPzh6K1FkWueXw7FbDx8qjX2w7plPGfO-WwkEUPMKGjM_QH0tQOp3o0G3-JKd68dKET) *(vertexaisearch.cloud.google.com)*
  > Privacy Sandbox History and Timeline - The Third-Party Cookie Phase-Out Plan, Its Reversal, API Deprecation and Removal in Chrome, and What Remains Supported | hidekazu-konishi.com hidekazu-konishi.com https://hidekazu-konishi.com/images/privacy_sand...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG79gSw59m7IyPOPqdCXNGqozvEtGI2aANVj8LMv2NhYg_0L-6VxkLJuh6G9NF5ut80Arp2FZaKKijZOrpWhLApzJKVzajuGOWwl-OBK9P63hf8_f1T88i6X_kh5lKh6d46ecYrSYD_vE9ewHlaqsVecn4sakGYMm7W9uPYD5C6TA==) *(vertexaisearch.cloud.google.com)*
  > Attribution Reporting API - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs Attribution Reporting API Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 中文 (简体) Attri...
- [arxiv.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF6W8F8_4I0YciStsg83pW4Fzc63iwFaF2tcW2XEz4omIfVZMg9XQf5vot3D8uyFQBXkd336NI67Da-hj5QpzpD8fICJLUBPNyreM6kuWhq1_vkRHS4QsQ=) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The **Attribution Reporting API** was introduced as a core component of Google’s Privacy Sandbox to measure ad impressions, clicks, and conversions without cross-site tracking or third-party cookies. However, following Google's
- [appy.to](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFg_3oh0muKQFqE_ZbNlcG9g_qY4f3eKSVs49B-OSJUDh7U_4Nhp2akGzr8tbxr_3G2GtF2iiWb1vEGqjKXKXU_11drcPnKzLEcsXF33yLsu19T5pvz9l6RJEG7DL8jHUJ-w_0WqhEyATw0cgi7aqtk12BZ) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The **Attribution Reporting API** was introduced as a core component of Google’s Privacy Sandbox to measure ad impressions, clicks, and conversions without cross-site tracking or third-party cookies. However, following Google's
- [nextroll.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE2f51pv5chbHig1e_PHsPC6dFR793an_7RORyh-IJscYbjrTeeCgSNeCBxaZuoXK5xG1o9pEV0NeoJqpClcl_wG4ua6yOMOpBp-gm8BYDfs6awHBmqI-dFLivIJ3GbDQFURSWtTHpWAr0hSa_6IgrkUH9jESvQyKaDvPc=) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The **Attribution Reporting API** was introduced as a core component of Google’s Privacy Sandbox to measure ad impressions, clicks, and conversions without cross-site tracking or third-party cookies. However, following Google's
- [smashingmagazine.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQERXYfUd1_2_jfvTLDEMrHz1yonE0YBUsJkSokisF9uSITZ67b5Wr2aXSeU6iMYb8HIHOeVu13EP4hh7CO4jkSS3TRbgozRVJLCmWDRZ06lKQAMWS68fB3nfszswi-Z8XGjfPbQd9VHnuR8Wv6pI1gvysoMdgHNtekNt6M2xbMpqX2VsGJAH4s8-nY-0SiEir5PPxQ=) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The **Attribution Reporting API** was introduced as a core component of Google’s Privacy Sandbox to measure ad impressions, clicks, and conversions without cross-site tracking or third-party cookies. However, following Google's
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF6rnuILEG41kVWqs-Kyw7_85OOkQMRKPm1UJQvkBtAg0OXbw7Kv1oQawP7HF-aBbSk5oiokYOzamiEplS08UfsJy6A0RYFfN_V-188jjPSi83a1_J2qvqjjvSmkWHTajtqsdVh) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The **Attribution Reporting API** was introduced as a core component of Google’s Privacy Sandbox to measure ad impressions, clicks, and conversions without cross-site tracking or third-party cookies. However, following Google's
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHgv9UdwqIt8OpmlrYh1k5h0uVcdEkK9VfEtUsjQ_aa0WwDYjBMJOAfiYaFRGktH6H8aWwnfF8PByam6n5GdaUsvndm0CSacKCZork0xOre7CJXy6-XYpsA673QLWKfgEhY36NM) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The **Attribution Reporting API** was introduced as a core component of Google’s Privacy Sandbox to measure ad impressions, clicks, and conversions without cross-site tracking or third-party cookies. However, following Google's
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHy-kZmhKgqFwx851RFlYsYHBTJuz2tOhESNB-6c5PdvQjQ0Q2TpiGXsnmBM3IdqdmOmP2J2dCozmD9NJnzAsPxaeJ0ORyIxelbVCiyGqpcawYj-M7coxlBm1UB5139xzggnVVZfQW28X75CmGbvUjmzw==) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The **Attribution Reporting API** was introduced as a core component of Google’s Privacy Sandbox to measure ad impressions, clicks, and conversions without cross-site tracking or third-party cookies. However, following Google's
- [\[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API](https://groups.google.com/a/chromium.org/g/blink-dev/c/4K2RRt6VYCQ/m/xt3TXi3WBQAJ) *(groups.google.com · 2025-11-07T00:00:00)*
  > https://<strong>chromestatus.com/feature/6320639375966208</strong> · unread, Nov 9, 2025, 7:47:04 PMNov 9 ·  ·  ·  · Reply to author · Sign in to reply to author · Forward · Sign in to forward · Delete · You do not have permission to delete messag...
- [Deprecate and remove: Attribution Reporting API - Chrome Platform Status](https://chromestatus.com/feature/6320639375966208) *(chromestatus.com · 2025-10-21T00:00:00)*
  > We cannot provide a description for this page right now
- [\[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API](https://groups.google.com/a/chromium.org/g/blink-dev/c/4K2RRt6VYCQ) *(groups.google.com · 2025-11-07T00:00:00)*
  > Following Chrome&#x27;s announcement that the current approach to third-party cookies will be maintained, <strong>we are now planning to deprecate and remove the Attribution Reporting API</strong> (along with certain other Privacy Sandbox APIs, as ou...
- [PSA: Attribution Reporting API deprecation and removal](https://groups.google.com/a/chromium.org/g/attribution-reporting-api-dev/c/nT-IZolzy8c) *(groups.google.com · 2025-12-04T00:00:00)*
  > Following the announcement that Chrome will maintain its current approach to third-party cookies, <strong>the Attribution Reporting API will be deprecated in Chrome 144</strong>, along with certain other APIs as outlined on the Privacy Sandbox featur...
- [\[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API](http://www.mail-archive.com/blink-dev@chromium.org/msg15138.html) *(mail-archive.com)*
  > Contact emails [email protected], ...orting-api/ Summary The Attribution Reporting API (ARA) is <strong>a privacy-preserving web API designed to measure ad conversions without third-party cookies or user tracking across sites</strong>....
- [Re: \[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API](http://www.mail-archive.com/blink-dev@chromium.org/msg16916.html) *(mail-archive.com)*
  > LGTM1 On Thu, Jun 11, 2026 at 2:54 PM Nan Lin &lt;[email protected]&gt; wrote: Hi API Owners, <strong>The Attribution Reporting API was deprecated in Chrome-144 with a plan to remove it in Chrome-150</strong>. Currently the usage is 19.7% of page loa...
- [Deprecate and remove: Attribution Reporting API](https://cr-status.appspot.com/feature/6320639375966208) *(cr-status.appspot.com · 2025-11-20T00:00:00)*
  > Sign in with GoogleSign in with Google. Opens in new tab
- [Attribution Reporting API: integration guide \| Privacy Sandbox](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/android/integration-guide) *(developers.google.com)*
  > If app-to-web attribution is applicable, schedule a discussion with measurement partners on web to discuss design, testing, and adoption of the Attribution Reporting API.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Deprecate and remove: Attribution Reporting API · Issue #1325 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1325) *(github.com · 2026-08-14T17:31:48)* *(Cites: `https://chromestatus.com/feature/6320639375966208`)*
  > Chromestatus: https://<strong>chromestatus.com/feature/6320639375966208</strong> Web Feature ID: N/A Chrome Releases: Chrome 152
- [\[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API](https://groups.google.com/a/chromium.org/g/blink-dev/c/4K2RRt6VYCQ/m/xt3TXi3WBQAJ) *(groups.google.com · 2025-11-07T00:00:00)* *(Cites: `https://chromestatus.com/feature/6320639375966208`)*
  > https://<strong>chromestatus.com/feature/6320639375966208</strong> · unread, Nov 9, 2025, 7:47:04 PMNov 9 ·  ·  ·  · Reply to author · Sign in to reply to author · Forward · Sign in to forward · Delete · You do not have permission to del...

## 📚 Platform Documentation & Specifications

- [Deprecate and remove: Attribution Reporting API · Issue #1325 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1325) *(github.com)*
- [\[rule\] attr/iframe-allow-retired-feature (waiting on Chrome) · Issue #361 · cevdetta/deadhead](https://github.com/cevdetta/deadhead/issues/361) *(github.com)*
- [Attribution Reporting API](https://developer.mozilla.org/en-US/docs/Web/API/Attribution_Reporting_API) *(developer.mozilla.org)*
- [Attribution-Reporting-Eligible header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Eligible) *(developer.mozilla.org)*
- [Attribution-Reporting-Register-Source header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 46 result(s) found across 7 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/6320639375966208" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"wicg.github.io/attribution-reporting-api" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"Deprecate and remove: Attribution Reporting API" API` — *Core feature API query* (8 returned)
  - `"Deprecate and remove: Attribution Reporting API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"privacysandbox.com" OR "privacy-preserving" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and remove: Attribution Reporting API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and remove: Attribution Reporting API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 15 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
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

- [ChromeStatus](https://chromestatus.com/feature/6320639375966208)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6320639375966208)
- [Specification](https://wicg.github.io/attribution-reporting-api)
