# Deprecate and Remove: Related Website Sets (RWS)

> **Report Week:** 2026-W37 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

Related Website Sets (RWS), formerly known as First Party Sets, provides a framework for developers to declare relationships among sites, to enable limited cross-site cookie access for specific, user-facing purposes. This is facilitated through the use of the Storage Access API (SAA) and requestStorageAccessFor (rSAFor). RWS was designed for use in a browser without third-party cookies. Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove Related Website Sets (RWS). 


Once RWS is deprecated; existing usage of SAA across contexts within a set will fall back to the API’s behavior outside of RWS as specified here. The difference in SAA behavior outside of RWS is well illustrated in our developer blogpost here.


The companion rSAFor API will also be deprecated via a separate intent.  


We also intend to deprecate RWS-related Chrome Enterprise policies, as well as the chrome.privacy.relatedWebsiteSetsEnabled extension API; and will follow the relevant processes.

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. RWS usage is indicated by the number of registered sets (currently at 71 sets), and the usage of the requestStorageAccessFor API (currently at about 0.95% of pageloads), and after this announcement we intend to archive the registration repository, and expect adoption of rSAFor to decrease over time. 


We will continue to monitor usage and aim to drive it down prior to removal by proactively informing set owners of the deprecation timelines and request them to turn down usage. Further, other browser engines have not signaled interest in launching the API, obviating any interoperability concerns.

## Ecosystem Status

- **Momentum:** High (390 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Deprecate and Remove: Related Website Sets (RWS) is currently Deprecated in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [leapbuzz.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFFSpFabf3Jy9cGQq8Ugpx3ZLH8zQabc9e_SAg8gZYeMPGr1PLQVoMLEOON1bUwCDjR_82JcXBsK8OkiM08DQ2LS0Z1U83883W_Qb3lgUHfXZKtaJLVp9P-1u8o3cHvkAOAaqsINkUNpZvMmzZr6XdyVZng01s=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation and Removal  Following Google Chrome’s strategic shift to maintain third-party cookies (moving instead to a user-choice model), Google Chromium announced an **Intent to Deprecate and Remove Related Website Sets (RWS)**
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEeJCW5ARqBDRzNUNhMJqTS7-zivCWlLDzTu1mguqXzNPr7dJ5ul7FQwgLXMXyd1Q7Lm-Ak2Cp-TLtmcpX_dFFrFfOt52vDMGnUwEIBspyCI07gOZisF4b19PDuHzOn6zu7C3QuQIV8) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEvUaqrwHDzhl6JjYqUbsiJQjGEulECKmkzp-wVie01uko-NO6WT9wBCVN-aosFj2k_o1nimrLqc74S2uRmc9M5ya5emS-W2bazq6uyMucOmnKNiZl5Em8SseUSmLFbB5UK9St-dU7r) *(vertexaisearch.cloud.google.com)*
  > Chrome 153 beta | Blog | Chrome for Developers Skip to main content / English Nederlands Русский فارسی বাংলা Sign in Blog Chrome for Developers Blog Chrome 153 beta Stay organized with collections Save and categorize content based on your preferences...
- [brave.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGHAcKDlvQIrKxYT7jQ-8aIXr_3jcWppJCLmsZdlUgEHdffbS83iEb-XIK4gc835MxVVaAOOzYgPKe2IOOW2y1ooChlCXWGDpwDAfsIjnaePfyQ8UzLjXmY7_-gUGGwuWFr3A==) *(vertexaisearch.cloud.google.com)*
  > Chrome is Entrenching Third-Party Cookies For Some Sites In A Way That Will Predictably, Inevitably Mislead Users | Brave Yes Dismiss a]:no-underline [&>a]:text-text-primary"> All blog posts AI news & features B2B & advertiser news BAT, creators, & B...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGDlxipZjfj4dPny3th1DevpCVDsCHhNJRyDwUCswX3F3cTq43NMlxbAhvukCVUM_eidBTels8V2L-U4G_Zt4b3ner7NiZLWRVfceGMs2wADnj1yt_w-pZXLbneATgOa723xi7IKk8o6kGPOKXpRaHqjydcLe3VEtP2s4Y=) *(vertexaisearch.cloud.google.com)*
  > Saying goodbye to third-party cookies in 2024 Skip to main content Skip to search MDN Blog Saying goodbye to third-party cookies in 2024 Theme OS default Light Dark English (US) Remember language Learn more English (US) Saying goodbye to third-party ...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFA1kgyVczVsr6TEZ2VuHThfwMYOV9Jc2uuKxKFt4p5-X4xG8JYfEtf1xa_aeD0ILXT8yL8WAdRhlUY6y2XKtfZS9gHPzB75sr6L2EBirJ5QuADHKR76n44JuqdQWDlR9b3KzT92yhxJlX0poco-HDTjfZ9554nIJI=) *(vertexaisearch.cloud.google.com)*
  > chrome.privacy | API | Chrome for Developers Ir al contenido principal / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFnCxPN68ksALBZefyVB7IpfU67EmJSrG84gq2hbUMMhxQAjb6UmB1gVbTluWl2m9aWPKVdzF-KMEtw0QbTS5RjCf60C7NM2XjcVWCSknjorx_opRjH1t9iwFW8-xLBeX_chuG3XUnI) *(vertexaisearch.cloud.google.com)*
  > Status der Privacy Sandbox-Funktionen Zum Hauptinhalt springen / English Deutsch Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF8NIL16xr8yJ4B9wfvyjwdRVPX70E5w9TOpuHoF_Ixg8f5bCV_Ss1YE-qW1bCEXWAz67cS7xfzMzr1h6T6LFY9VpeZrZ83-pIbxDlxkHahPrTq8U82lmezd0l5h01u4cxAKPI-4F5cM8ZyCFZgEEuVUAB_LYtktRPmfW_VibjTTxkOUnjxnso=) *(vertexaisearch.cloud.google.com)*
  > Document: requestStorageAccessFor() method - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs Document requestStorageAccessFor() Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) ...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGMY2-U4It4IwtnNCKA1bHpRT2vf4F8X4oClUBHp0XefRG13s8njyNzpZ_AxhQnJPd2Wq6jdDSTwDKsG4g3dDbX9y2ZZr9sJ_n1DGuEoMcF8Bwgf3GwbfpTfIZ9-VSixXG3P0lDriXi30CBM0jg) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation and Removal  Following Google Chrome’s strategic shift to maintain third-party cookies (moving instead to a user-choice model), Google Chromium announced an **Intent to Deprecate and Remove Related Website Sets (RWS)**
- [ppc.land](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHPI6uwwb6LyRXElGAUQsfydN_hNRguE0mtmrbzEw-8tsUPX1LffnLuq2gjYrMKJ6NNJxvW-jQYOaIznIsN7I8hRo0gW3Ieoi34F-jNgErRIsbFSpeAE6yhU43iwb7El5CiuXzlyzO8krs8HiCfAR3_lnnWRGmpzXcCl50pQ27_L9phgMU=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation and Removal  Following Google Chrome’s strategic shift to maintain third-party cookies (moving instead to a user-choice model), Google Chromium announced an **Intent to Deprecate and Remove Related Website Sets (RWS)**
- [singular.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEl8IaOIFRbiWJel3PY6UYtFFFbgFJZ0KQDzrqaBFMPH6dCs03bHGCc79hmLPZ4JOg3E2ru_a5TD7zR7q7lzuvJ5KLxwiYbvBvC5PWMDW7aNUWk-7WMD7kZXVM-a_hWj442dd5Vk4dWrQ==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation and Removal  Following Google Chrome’s strategic shift to maintain third-party cookies (moving instead to a user-choice model), Google Chromium announced an **Intent to Deprecate and Remove Related Website Sets (RWS)**
- [ycombinator.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG5LWAJXvm8VhaNofhGg-mYg_7G7ZeIqy2eaQeGcfIoPz9S-rhhJkSvo0Y9LN7xJnVHMcyixCwCiNJNJykEg9ZPYcJqC6KzDcXEpz3jUIqZ7YQT4WCxUmKuEZFw-G31RcqxohY=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation and Removal  Following Google Chrome’s strategic shift to maintain third-party cookies (moving instead to a user-choice model), Google Chromium announced an **Intent to Deprecate and Remove Related Website Sets (RWS)**
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEpuWEmREvA9x732-jU-oWuqyhRuu-3oh1rKWSC6CoXTk043gU4h4tasS51nZ7vyOig6Ln60z4U9qSA2hCYojTNBlbUGBjUgU1SfKEWLoWbrLMdQ7VXtGiGXNY-lAXATfYAbv_kVhQYVGxRd7mwwz-j8Www9vBeQ5eeEEZzGJPS2A==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation and Removal  Following Google Chrome’s strategic shift to maintain third-party cookies (moving instead to a user-choice model), Google Chromium announced an **Intent to Deprecate and Remove Related Website Sets (RWS)**
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFevBkEI2lqlikUZPCV-y0bNWGpwowOUutJOuRQ43kPfacwQllakIeOFcBYCSnfKhv7SFa_zTtnsKT7fpDbg108lQeW3QNpQ9SnjBlDUsEKRFCKgBqM4UGKUZc68zD1SH5_Fw7vzEFsWtH8vqaiQw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation and Removal  Following Google Chrome’s strategic shift to maintain third-party cookies (moving instead to a user-choice model), Google Chromium announced an **Intent to Deprecate and Remove Related Website Sets (RWS)**
- [Intent to Deprecate and Remove: Related Website Sets (RWS)](https://groups.google.com/a/chromium.org/g/blink-dev/c/V-wPXyoruac) *(groups.google.com)*
  > Apologies, I used the wrong Chromestatus link (the original feature status), this one is correct: https://<strong>chromestatus.com/feature/5194473869017088</strong>
- [[blink-dev] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15144.html) *(mail-archive.com)*
  > Apologies, I used the wrong Chromestatus link (the original feature status), this one is correct: https://<strong>chromestatus.com/feature/5194473869017088</strong>
- [https://github.com/WICG/first-party-sets | Ecosyste.ms: Awesome](https://awesome.ecosyste.ms/projects/github.com/WICG/first-party-sets) *(awesome.ecosyste.ms)*
  > URL: https://github.com/WICG/first-party-sets · Owner: WICG · Created: 2018-08-01T23:25:34.000Z (over 6 years ago) Default Branch: main · Last Pushed: 2024-06-23T21:07:00.000Z (8 months ago) Last Synced: 2024-08-01T15:05:50.261Z (7 months ago) Langua...
- [Intent to Ship: First-party sets](https://groups.google.com/a/chromium.org/g/blink-dev/c/7_6JDIfE1as/m/wModmpcaAgAJ) *(groups.google.com)*
  > https://github.com/WICG/first-... Design Doc · First-Party Sets (“FPS”) <strong>provides a framework for developers to declare relationships among sites, to enable limited cross-site cookie access for specific, user-facing purposes</strong>....
- [Request for Deprecation Trial: Deprecate Third-Party Cookies](https://groups.google.com/a/chromium.org/g/blink-dev/c/yGUdvW_t_y0) *(groups.google.com)*
  > <strong>The primary goal of the deprecation trial is to reduce the amount of broken user-visible experiences as third-party cookies are phased out</strong>. Third-party embedded content or services with these kinds of experiences can use the trial to...
- [Third-Party Cookie Deprecation: Here’s What Privacy Teams Need to Know](https://www.ethyca.com/guides/third-party-cookie-deprecation-here-s-what-privacy-teams-need-to-know) *(ethyca.com · 2026-06-28T04:21:22)*
  > <strong>In July 2024, Google abandoned the forced deprecation of third-party cookies in Chrome</strong>. Many businesses mistook this for a reprieve. However, rather than a complete reversal, it was a delegation.
- [What is Third-Party Cookie Deprecation?](https://howmarketingtechnology.works/define/third-party-cookie-deprecation) *(howmarketingtechnology.works · 2026-05-09T12:00:00)*
  > After years of delays, <strong>Google reversed course in 2024 and opted to give Chrome users a choice rather than removing third-party cookies entirely</strong>. Safari and Firefox had already blocked them by default years earlier. Chrome’s reversal ...
- [The end of third-party cookies in Chrome: in-depth overview](https://cookieinformation.com/resources/blog/end-of-third-party-cookie) *(cookieinformation.com · 2026-02-03T10:17:54)*
  > Google’s decision to halt the deprecation of third-party cookies <strong>stems from the need to balance user privacy concerns with the operational requirements of the advertising industry</strong>.
- [Cookie Deprecation Timeline: When Third-Party Tracking Ends [2026 Guide]](https://bir.ch/blog/cookie-deprecation-timeline) *(bir.ch · 2026-05-03T21:11:56)*
  > It unfolded gradually and unevenly across browsers. Safari and Firefox already block third-party cookies by default. <strong>Chrome has delayed removing them completely while it introduces Privacy Sandbox APIs</strong>.
- [Third-party cookies will not be deprecated from Chrome | MarTech](https://martech.org/third-party-cookies-will-not-be-deprecated-from-chrome) *(martech.org · 2024-07-24T17:40:31)*
  > We are disappointed that <strong>Google has changed its plans and no longer intends to deprecate third party cookies from the Chrome Browser</strong>.
- [Related Website Sets: developer guide | Privacy Sandbox](https://privacysandbox.google.com/cookies/related-website-sets-integration) *(privacysandbox.google.com · 2024-02-06T00:00:00)*
  > Cross-site cookies are not made available by default within the set; Related Website Sets just allows sites within the set to skip the Storage Access API permission prompt. An iframe must call document.requestStorageAccess() if it wants to access its...
- [Related Website Sets: developer guide | Privacy Sandbox | Google for Developers](https://developers.google.com/privacy-sandbox/3pcd/related-website-sets-integration) *(developers.google.com · 2024-02-06T00:00:00)*
  > Cross-site cookies are not made available by default within the set; Related Website Sets just allows sites within the set to skip the Storage Access API permission prompt. An iframe must call document.requestStorageAccess() if it wants to access its...
- [Storage Access API | Privacy Sandbox](https://developers.google.com/privacy-sandbox/cookies/storage-access-api) *(developers.google.com · 2023-12-15T00:00:00)*
  > Important: Storage Access Headers cannot be used to request the initial permission. Websites still need to embed an iframe calling document.requestStorageAccess() or document.requestStorageAccessFor() within Related Website Sets to request user permi...
- [Chrome Enterprise and Education release notes - Chrome browser - Chrome Enterprise and Education Help](https://support.google.com/chrome/a/answer/7679408?sjid=3488077277004689244-NA&amp=&hl=en) *(support.google.com)*
  > recently announced that the current approach to third-party cookies is to be maintained, following which, <strong>we plan to deprecate and remove the following APIs</strong>. Topics · Protected Audience · Shared Storage · Attribution Reporting · Priv...
- [Previous release notes - Chrome Enterprise and Education Help](https://support.google.com/chrome/a/answer/10314655?hl=en-t) *(support.google.com)*
  > recently announced that the current approach to third-party cookies is to be maintained, following which, <strong>we plan to deprecate and remove the following APIs</strong>. Topics · Protected Audience · Shared Storage · Attribution Reporting · Priv...
- [RelatedWebsiteSetsEnabled: Enable Related Website Sets | Chrome Enterprise](https://chromeenterprise.google/intl/en_au/policies/related-website-sets-enabled) *(chromeenterprise.google)*
  > This policy overrides the FirstPartySetsEnabled policy. When this policy is unset or set to True, the Related Website Sets feature is enabled. <strong>When this policy is set to False, the Related Website Sets feature is disabled</strong>.
- [Explore New Chrome Enterprise Browser, Core, Premium Features](https://chromeenterprise.google/intl/cs_CZ/resources/release-notes) *(chromeenterprise.google · 2026-08-26T00:00:00)*
  > <strong>In Chrome 153, all the policies associated with these APIs are also deprecated, with removal planned for Chrome 154</strong>. The following are the enterprise policies associated with the above APIs.
- [Deprecated Chrome policies - Chrome Enterprise and Education Help](https://support.google.com/chrome/a/answer/7643500?hl=en) *(support.google.com)*
  > Use the same policy-management tools to unset deprecated or removed policies that you used to set them. Unset policies that you’re no longer using. New releases of Chrome introduce new policies and sometimes deprecate old ones. Avoid using deprecated...
- [Chrome is Entrenching Third-Party Cookies For Some Sites In A Way That Will Predictably, Inevitably Mislead Users | Brave](https://brave.com/blog/related-website-sets) *(brave.com · 2024-08-26T00:00:00)*
  > The research finds both that <strong>the Related Website Sets feature would reverse some of the privacy benefits of deprecating third-party cookies</strong>, and that Google’s justification for reintroducing this privacy harm (i.e., that Web users ca...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Deprecate and Remove: Related Website Sets (RWS)](https://groups.google.com/a/chromium.org/g/blink-dev/c/V-wPXyoruac) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5194473869017088`)*
  > Apologies, I used the wrong Chromestatus link (the original feature status), this one is correct: https://<strong>chromestatus.com/feature/5194473869017088</strong>
- [[blink-dev] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15144.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5194473869017088`)*
  > Apologies, I used the wrong Chromestatus link (the original feature status), this one is correct: https://<strong>chromestatus.com/feature/5194473869017088</strong>
- [https://github.com/WICG/first-party-sets | Ecosyste.ms: Awesome](https://awesome.ecosyste.ms/projects/github.com/WICG/first-party-sets) *(awesome.ecosyste.ms)* *(Cites: `https://wicg.github.io/first-party-sets`)*
  > URL: https://github.com/WICG/first-party-sets · Owner: WICG · Created: 2018-08-01T23:25:34.000Z (over 6 years ago) Default Branch: main · Last Pushed: 2024-06-23T21:07:00.000Z (8 months ago) Last Synced: 2024-08-01T15:05:50.261Z (7 months a...
- [Intent to Ship: First-party sets](https://groups.google.com/a/chromium.org/g/blink-dev/c/7_6JDIfE1as/m/wModmpcaAgAJ) *(groups.google.com)* *(Cites: `https://wicg.github.io/first-party-sets`)*
  > https://github.com/WICG/first-... Design Doc · First-Party Sets (“FPS”) <strong>provides a framework for developers to declare relationships among sites, to enable limited cross-site cookie access for specific, user-facing purposes</strong>...

## 📚 Platform Documentation & Specifications

- [Saying goodbye to third-party cookies in 2024 - MDN Web Docs](https://developer.mozilla.org/en-US/blog/goodbye-third-party-cookies) *(developer.mozilla.org)*
- [GitHub - privacycg/requestStorageAccessFor: A proposed extension to the Storage Access API and discussion of how it may be integrated with First-Party Sets. · GitHub](https://github.com/privacycg/requestStorageAccessFor) *(github.com)*
- [Using the Storage Access API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API/Using) *(developer.mozilla.org)*
- [Document: requestStorageAccessFor() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/requestStorageAccessFor) *(developer.mozilla.org)*
- [Related Website Sets - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API/Related_website_sets) *(developer.mozilla.org)*
- [Website security](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 25 result(s) found across 7 planned queries — **24 verified relevant**
  - `"chromestatus.com/feature/5194473869017088" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"wicg.github.io/first-party-sets" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Related Website Sets" OR "First-Party Sets" deprecate OR deprecation Chrome "third-party cookies"` — *Finds official announcements, news coverage, and ecosystem reactions regarding Chrome's decision to deprecate Related Website Sets.* (8 returned)
  - `"Related Website Sets" ("Storage Access API" OR "requestStorageAccessFor") fallback OR migration guide` — *Discovers developer guidance and blog posts explaining how Storage Access API behavior changes and how to migrate away from RWS.* (0 returned)
  - `"requestStorageAccessFor" OR "requestStorageAccess" "Related Website Sets" javascript example` — *Surfaces real-world JavaScript snippets and Web API usage showing how developers invoked rSAFor and handled cross-site cookie access.* (8 returned)
  - `site:groups.google.com/a/chromium.org "Intent to Deprecate and Remove: Related Website Sets"` — *Targets the Chromium intent-to-deprecate discussions, developer feedback, and browser vendor signals.* (1 returned)
  - `"chrome.privacy.relatedWebsiteSetsEnabled" OR "RelatedWebsiteSetsOverrides" policy deprecation` — *Locates documentation and enterprise policy announcements related to the removal of RWS extension APIs and admin settings.* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 14 result(s) found — **14 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
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
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5194473869017088)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5194473869017088)
- [Specification](https://wicg.github.io/first-party-sets)
