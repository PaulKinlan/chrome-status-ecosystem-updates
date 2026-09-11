# CSS URL request modifiers

> **Report Week:** 2026-W37 | **Milestone:** Chrome 150 | **Category:** Enabled by default

## Overview

CSS url() functions accept optional request modifiers after the quoted URL string: cross-origin(), integrity(), and referrer-policy(). These modifiers control the fetch behavior of the referenced resource directly from CSS, without requiring changes to HTML markup or JavaScript. For example, background-image: url("image.png" cross-origin(anonymous)) fetches the image using CORS anonymous mode. This gives authors fine-grained control over cross-origin access, subresource integrity, and referrer policy for CSS-loaded resources including images, fonts, SVG references, and imported stylesheets.

### Motivation

Web developers currently have no way to control fetch parameters for CSS-loaded resources. CSS URL request modifiers close this gap by allowing fetch parameters to be specified inline in any url() value, bringing CSS resource loading to parity with HTML resource loading.

## Ecosystem Status

- **Momentum:** High (160 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** CSS URL request modifiers is currently Enabled by default in Chrome 150. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 150. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "Sure, sgtm...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **Mozilla:** [[css-values-5] Request URL Modifiers](https://github.com/mozilla/standards-positions/issues/1386) [open]
- **WebKit:** [[css-values-5] integrity() CSS URL request modifier](https://github.com/WebKit/standards-positions/issues/656) [open]

## 📰 Ecosystem Blogs & Articles

- [csswg.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF_VG8ynFyWF0BSCyevrPRRHESgZM2_rtq9V-NtR_Zc-wT_v4qad0Y5yx_hd6wsauAv5CKvHZxgr5dOh4Ok2ibFuvjQ2mxXN8NDnFiMHoxtNi8tU33v8102dgcEGQ==) *(vertexaisearch.cloud.google.com)*
  > CSS Values and Units Module Level 5 CSS Values and Units Module Level 5 Editor’s Draft , 4 September 2026 More details about this document This version: https://drafts.csswg.org/css-values-5/ Latest published version: https://www.w3.org/TR/css-values...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEPBMZ1-Iybjw_682lKJXMeGvF1N_OlB5wei5xE1EBPJJSfVcyawoBQ-ptE52VxpHX_KU9Vb6tephbiJNHY3KGa6nswy9gLn5JuU6Yzgn9YhDH3uFWIyBRXk48v11We0cW5Kxx--2Ml_T8uf2ZIJ_uPQ9CvFpwtiFY=) *(vertexaisearch.cloud.google.com)*
  > Intent to Ship: CSS URL request modifiers Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: CSS URL request modifiers 277 views Skip to ...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFadbNo0meXw7YgiYhnanyF6gOeXIKjB7ozAe26f1bUWK9Ra9LRof2KluQVpCgKMf7sIOQEWYSbF2zFn8MGGzWEhsBVDrPh5on0pFLcUk31v-dPR1-MI5HgFGOhASFzuuJIqh4Lv_yWx_8IVmreu_3JuA==) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Summary  **CSS URL Request Modifiers** (specified in the [CSS Values and Units Module Level 5](https://drafts.csswg.org/css-values-5/#request-url-modifiers)) allow authors to append request modifiers directly to the `url()` function. T
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGHDn2G_Nj43v-Syj6Drs5V5oC2rXuPWO-LUExO5dI9yqcE4A2XQSC3fHhLtbwrJ5W0IxD8_nu_FgHOo1uJMFybxfL9DAqgpWLKr1aQaMY3k2mlm54C0jHIV3tXVm0XwZzLufn9LhTtogXEidhvpw==) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Summary  **CSS URL Request Modifiers** (specified in the [CSS Values and Units Module Level 5](https://drafts.csswg.org/css-values-5/#request-url-modifiers)) allow authors to append request modifiers directly to the `url()` function. T
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGuIMysk4rOJUV9fWWZXDVz1unVKxYTEQx-cvgc2JYvdrwr7ZahJabk83nWyBiYRcQtxrDCM58DCgm0hmqoDXKLfPoCFcH-kXdX1LoRhYsK-tUqIPtIDcJ_KeiZ4cIrYyThsVTb3A==) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Summary  **CSS URL Request Modifiers** (specified in the [CSS Values and Units Module Level 5](https://drafts.csswg.org/css-values-5/#request-url-modifiers)) allow authors to append request modifiers directly to the `url()` function. T
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE63v605etrgwpzmjk_bVoOLll17pPPCGEzqNoV_eCiuO4ByoYPvRV3T-J1Fsnc9n-9ENBsUpyY7ognxtCOH4FyXJBNa-4zmVM8xnrr7kw7GyBy8iGcG34UW-MofgSxI7yZVHHfDTAJjqro8GfnwvRMlrYlrTrNtHor7CroLwkB9hFlIkiiDheKiA==) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Summary  **CSS URL Request Modifiers** (specified in the [CSS Values and Units Module Level 5](https://drafts.csswg.org/css-values-5/#request-url-modifiers)) allow authors to append request modifiers directly to the `url()` function. T
- [[css-values-5] Support URL modifiers [435625756] - Chromium](https://issues.chromium.org/issues/435625756) *(issues.chromium.org)*
  > Enables support for the cross-origin(), referrer-policy() and integrity() CSS URL modifiers from css-values-5 in M150: https://drafts.csswg.org/css-values-5/#request-url-modifiers Chrome Status: https://<strong>chromestatus.com/feature/51119971475128...
- [CSS Values and Units Module Level 5](https://w3c.github.io/csswg-drafts/css-values-5) *(w3c.github.io · 2023-04-06T00:00:00)*
  > https://<strong>drafts.csswg.org/css-values-5</strong>/ Latest published version: https://www.w3.org/TR/css-values-5/ Feedback: CSSWG Issues Repository · Inline In Spec · Editors: Tab Atkins (Google) Elika J. Etemad / fantasai (Apple) Miriam E. Suzan...
- [CSS URL request modifiers](https://chromestatus.com/feature/5111997147512832) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [CSS | Filter Functions | url() | Codecademy](https://www.codecademy.com/resources/docs/css/filter-functions/url) *(codecademy.com · 2025-08-31T18:10:39)*
  > In this CSS tutorial, you’ll learn how to add CSS to visually transform HTML into eye-catching sites. ... <strong>/* Common form */ property: url(&lt;path-to-file&gt;); /* With modifiers */ property: url(&lt;path-to-file&gt; &lt;url-modifier&gt;*);</...
- [Chrome 150 beta | Blog | Chrome for Developers](https://developer.chrome.com/blog/chrome-150-beta) *(developer.chrome.com · 2026-06-03T00:00:00)*
  > CSS url() functions accept optional request modifiers after the quoted URL string: <strong>cross-origin(), integrity(), and referrer-policy().</strong>
- [Microsoft Edge 150 web platform release notes (Jul. 2026) - Microsoft Edge Developer documentation | Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/150) *(learn.microsoft.com · 2026-07-02T00:00:00)*
  > This gives you fine-grained control over cross-origin access, subresource integrity, and referrer policy for CSS-loaded resources including: ... SVG references. Imported stylesheets. ... Request URL Modifiers in CSS Values and Units Module Level 5.
- [Chrome 150 | Release notes | Chrome for Developers](https://developer.chrome.com/release-notes/150) *(developer.chrome.com · 2026-06-30T00:00:00)*
  > CSS url() functions accept optional request modifiers after the quoted URL string: <strong>cross-origin(), integrity(), and referrer-policy().</strong> These modifiers control the fetch behavior of the referenced resource directly from CSS, without r...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[css-values-5] Support URL modifiers [435625756] - Chromium](https://issues.chromium.org/issues/435625756) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5111997147512832`)*
  > Enables support for the cross-origin(), referrer-policy() and integrity() CSS URL modifiers from css-values-5 in M150: https://drafts.csswg.org/css-values-5/#request-url-modifiers Chrome Status: https://<strong>chromestatus.com/feature/5111...
- [[css-values-5] Request URL Modifiers · Issue #1386 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1386) *(github.com · 2026-04-08T13:06:35)* *(Cites: `https://chromestatus.com/feature/5111997147512832`)*
  > Chrome Platform Status: https://<strong>chromestatus.com/feature/5111997147512832</strong> · WPT: https://wpt.fyi/results/css/css-values/urls?label=master&amp;label=experimental&amp;aligned&amp;q=css/css-values/urls/url-request-modifiers · ...
- [[css-values-5] integrity() CSS URL request modifier · Issue #656 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/656) *(github.com · 2026-04-29T15:36:29)* *(Cites: `https://chromestatus.com/feature/5111997147512832`)*
  > Chromestatus: https://<strong>chromestatus.com/feature/5111997147512832</strong> · WPTs: https://wpt.fyi/results/css/css-values/urls · Reactions are currently unavailable · No one assigned · topic: cssSpec relates to CSS (Cascading Style Sh...
- [csswg-drafts/css-values-5/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-values-5/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-values-5/#request-url-modifiers`)*
  > Shortname: css-values · Level: 5 · Status: ED · Work Status: Exploring · ED: https://<strong>drafts.csswg.org/css-values-5</strong>/ TR: https://www.w3.org/TR/css-values-5/ Editor: Tab Atkins, Google, http://xanthir.com/contact/, w3cid 4219...
- [CSS Values and Units Module Level 5](https://w3c.github.io/csswg-drafts/css-values-5) *(w3c.github.io · 2023-04-06T00:00:00)* *(Cites: `https://drafts.csswg.org/css-values-5/#request-url-modifiers`)*
  > https://<strong>drafts.csswg.org/css-values-5</strong>/ Latest published version: https://www.w3.org/TR/css-values-5/ Feedback: CSSWG Issues Repository · Inline In Spec · Editors: Tab Atkins (Google) Elika J. Etemad / fantasai (Apple) Miria...

## 📚 Platform Documentation & Specifications

- [[css-values-5] Request URL Modifiers · Issue #1386 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1386) *(github.com)*
- [[css-values-5] integrity() CSS URL request modifier · Issue #656 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/656) *(github.com)*
- [csswg-drafts/css-values-5/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-values-5/Overview.bs) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 41 result(s) found across 7 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5111997147512832" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"drafts.csswg.org/css-values-5" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"CSS URL request modifiers" API` — *Core feature API query* (2 returned)
  - `"CSS URL request modifiers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"image.png" OR "cross-origin" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS URL request modifiers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS URL request modifiers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 11 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 4 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 1 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 3 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 5 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 4 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5111997147512832)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5111997147512832)
- [Specification](https://drafts.csswg.org/css-values-5/#request-url-modifiers)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/435625756)
