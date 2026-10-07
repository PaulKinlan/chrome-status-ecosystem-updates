# Deprecate and Remove: Related Website Sets (RWS)

> **Report Week:** 2026-W41 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

Related Website Sets (RWS), formerly known as First Party Sets, provides a framework for developers to declare relationships among sites, to enable limited cross-site cookie access for specific, user-facing purposes. This is facilitated through the use of the Storage Access API (SAA) and requestStorageAccessFor (rSAFor). RWS was designed for use in a browser without third-party cookies. Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove Related Website Sets (RWS).    Once RWS is deprecated; existing usage of SAA across contexts within a set will fall back to the API’s behavior outside of RWS as specified here. The difference in SAA behavior outside of RWS is well illustrated in our developer blogpost here.   The companion rSAFor API will also be deprecated via a separate intent.     We also intend to deprecate RWS-related Chrome Enterprise policies, as well as the chrome.privacy.relatedWebsiteSetsEnabled extension API; and will follow the relevant processes.

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. RWS usage is indicated by the number of registered sets (currently at 71 sets), and the usage of the requestStorageAccessFor API (currently at about 0.95% of pageloads), and after this announcement we intend to archive the registration repository, and expect adoption of rSAFor to decrease over time. 


We will continue to monitor usage and aim to drive it down prior to removal by proactively informing set owners of the deprecation timelines and request them to turn down usage. Further, other browser engines have not signaled interest in launching the API, obviating any interoperability concerns.

## Ecosystem Status

- **Momentum:** High (410 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Deprecate and Remove: Related Website Sets (RWS) is currently Deprecated in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGu1IVYTOqP85KeS0LInREelDEnngais2srWyLS3-byEevOUHK_ZDQ-Qz7DlqqHLAi_CQRbOUVVoAShBrD8Ue1dGGTb5BpjpOKoyZYy7fd74VwBFw0mN_UC_B1alNZf7rXvVqOiy1igtU8L) *(vertexaisearch.cloud.google.com)*
  > GitHub - GoogleChrome/related-website-sets: Note: This repository will be archived and will no longer accept new submissions. · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed...
- [brave.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH53fgpixnHKTq0e8THK95ifsicqBuOZr7os06P-mg2MrEfP5vFy5h8RMDfaBbxu65w3zOO3P5GMj6N6J3jKkM1-elOzweNtNP46_7MJD7bRt7rRRHIlNl24EYzDKY3yaebTQ==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  Following Google Chrome’s strategic shift to maintain the current user-choice model for third-party cookies rather than deprecating them outright by default, Google initiated the **"Deprecate and Remove: Related Websit
- [privacysandstorm.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG5ShF6mt2CgZqcX1GyR07ljR3fmQq6lbLXd-2P7JDPJ2SG_TxZfH3K7NuvmNJi3MmQAARIP0c3JTjhYvRdW4WW10Dwy4J5W_A__f_RZEWT1RCSo4xpJfiQ-ahTnLC3m9WdJQu6uGR3rk_Ef3ucqe3_jRXS8Lmy7PI=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  Following Google Chrome’s strategic shift to maintain the current user-choice model for third-party cookies rather than deprecating them outright by default, Google initiated the **"Deprecate and Remove: Related Websit
- [digiday.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGybeUouyL-ZO0xcKl9NZwIntYV6MXQV8MvXb0UDsHnkxdjUs2L6wqgqT_pdjCH1poEnG-lnjTyZRm1GRhTgEk23TN20PSu378Ql4ZUEmnwBit2MeXlTZzkpGoyr74RnCgjk6vmOlgDJtpTIYfbGRW3F_UYfCce5kGAA3o2lFqXegZ6hTwDGJSg) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  Following Google Chrome’s strategic shift to maintain the current user-choice model for third-party cookies rather than deprecating them outright by default, Google initiated the **"Deprecate and Remove: Related Websit
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE0loxWqIlfx7g-2tP42FTO3Z4JcQy7X9uXFUbU1gfzJiugIMgayFAyDBTTYwxjKpWTk80v9-U0lGZ5kDr1hOnSVzppzfTvrtasxCs59dqGEiIU7yBp6UG31a4yl_7_g0C_TUDfXvzU8GvQwmcn81N-B49yfo1hl0QejzMT2NPk-wYEJ4fUIaHqHmoTaKw0HjRr) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  Following Google Chrome’s strategic shift to maintain the current user-choice model for third-party cookies rather than deprecating them outright by default, Google initiated the **"Deprecate and Remove: Related Websit
- [Intent to Deprecate and Remove: Related Website Sets (RWS)](https://groups.google.com/a/chromium.org/g/blink-dev/c/V-wPXyoruac) *(groups.google.com)*
  > Apologies, I used the wrong Chromestatus link (the original feature status), this one is correct: https://<strong>chromestatus.com/feature/5194473869017088</strong>
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15155.html) *(mail-archive.com)*
  > Apologies, I used the wrong Chromestatus link (the original feature status), this one is correct: https://<strong>chromestatus.com/feature/5194473869017088</strong> On Fri, Nov 7, 2025 at 2:47 PM Johann Hofmann &lt;[email protected]&gt; wrote: Contac...
- [\[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15144.html) *(mail-archive.com)*
  > Apologies, I used the wrong Chromestatus link (the original feature status), this one is correct: https://<strong>chromestatus.com/feature/5194473869017088</strong>
- [\[blink-dev\] Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15143.html) *(mail-archive.com)*
  > The companion rSAFor API will also be deprecated via a separate intent. We also intend to deprecate RWS-related Chrome Enterprise policies &lt;https://chromeenterprise.google/policies/#RelatedWebsiteSets&gt;, as well as the chrome.privacy.relatedWebs...
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=%22Intent+to+Deprecate+and+Remove%22) *(groups.google.com)*
  > [blink-dev] Intent to Deprecate ... API · steps 2 and 3. /Daniel On 2026-06-26 10:21, Yoav Weiss (@Shopify) wrote: &gt; LGTM2 &gt; &gt; On Thu, Jun 25, 2026 at 11:12 PM Chris Harrelson &gt; wrote: &gt; &gt; LGTM1 &gt; &gt; On Thu ... , wanted to shar...
- [Google Privacy Sandbox API deprecations](https://learnfocus-sigma.vercel.app/?page=en-git-mdn-browser-compat-data-1762585883240) *(learnfocus-sigma.vercel.app · 2025-11-07T16:01:04)*
  > Intent to Deprecate and Remove: document.requestStorageAccessFor Intent to Deprecate and Remove: Related Website Sets (RWS) Intent to deprecate and remove Shared Storage Intent to Deprecate and Remove: Protected Audience Intent to Deprecate and Remov...
- [Privacy Sandbox feature status](https://privacysandbox.google.com/overview/status) *(privacysandbox.google.com · 2026-08-14T00:00:00)*
  > Intent to Deprecate and Remove: Related Website Sets (RWS) Intent to Deprecate and Remove: document.requestStorageAccessFor · Including requestStorageAccessFor and Related Website Partition. Chrome Platform Status. Scheduled for phaseout. Explainer: ...
- [Wyszukaj wątki](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=title%3A%22Intent+to+Deprecate+and+Remove%22&hl=pl) *(groups.google.com)*
  > [blink-dev] Intent to Deprecate and Remove: Attribution Reporting API · a plan to remove it in Chrome-150. Currently the usage is 19.7% of page loads. We are proposing the following as next steps for removal and associated timelines: 1. M150: Remove ...
- [Related Website Sets: developer guide \| Privacy Sandbox](https://developers.google.com/privacy-sandbox/cookies/related-website-sets-integration) *(developers.google.com · 2024-02-06T00:00:00)*
  > When third-party cookies are blocked but Related Website Sets (RWS) is enabled, Chrome will automatically grant permission in intra-RWS contexts, and will show a prompt to the user otherwise.
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg16726.html) *(mail-archive.com)*
  > RWS &gt;&gt;&gt; usage is indicated by the number of registered sets (currently at 71 &gt;&gt;&gt; sets &gt;&gt;&gt; &lt;https://github.com/GoogleChrome/related-website-sets/blob/main/related_website_sets.JSON&gt;), &gt;&gt;&gt; and the usage of the ...
- [How Related Website Sets (RWS) Address the Challenges of Third-Party Cookie Blocking — Techtsp \| by Tanmay Patange \| Medium](https://medium.com/@tanmaypatange/how-related-website-sets-rws-address-the-challenges-of-third-party-cookie-blocking-79ff5c547a5e) *(medium.com · 2024-01-20T10:45:21)*
  > If you decide to use Related Website Sets, the next step is to <strong>submit your related websites to a set</strong>. This involves following the submission guidelines provided by Google and adding your sites to a Related Website Sets set on the Git...
- [Download Simple Privacy Settings for Chrome - MajorGeeks](https://www.majorgeeks.com/files/details/simple_privacy_settings.html) *(majorgeeks.com)*
  > With just a few clicks, you can easily adjust your browser&#x27;s privacy settings to your liking. <strong>The extension provides a range of options that let you disable tracking cookies, block ads, and prevent third-party scripts from running on web...
- [privacy.websites](https://contest-server.cs.uchicago.edu/ref/JavaScript/developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites.html) *(contest-server.cs.uchicago.edu)*
  > This API is based on Chromium&#x27;s chrome.privacy API. This documentation is derived from privacy.json in the Chromium code. Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attr...
- [Privacy Settings - Chrome Web Store](https://chromewebstore.google.com/detail/privacy-settings/ijadljdlbkfhdoblhaedfgepliodmomj?hl=en) *(chromewebstore.google.com)*
  > Learn more about results and reviews. <strong>Removes all forms of tracking including web-bugs, tracking-scripts and information-collectors, and protects your data</strong>. ... Average rating 3.8 out of 5 stars.
- [Related Website Sets: developer guide \| Privacy Sandbox](https://privacysandbox.google.com/cookies/related-website-sets-integration) *(privacysandbox.google.com · 2024-02-06T00:00:00)*
  > (An &quot;intra-RWS context&quot; is a context, such as an iframe, whose embedded site and top-level site are in the same RWS.) Note: SAA is shipping in several browsers, however there are differences between browser implementations in the rules of h...
- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ) *(groups.google.com)*
  > Following Chrome&#x27;s announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove rSAFor, as it is only usable in Chrome to request storage access between RWS sites. <strong>Related ...
- [Privacy Sandbox History and Timeline - The Third-Party Cookie Phase-Out Plan, Its Reversal, API Deprecation and Removal in Chrome, and What Remains Supported \| hidekazu-konishi.com](https://hidekazu-konishi.com/entry/privacy_sandbox_history_and_timeline.html) *(hidekazu-konishi.com · 2026-10-02T00:00:01)*
  > Where the deprecation in <strong>Chrome 144</strong> is written: The deprecation of Attribution Reporting, Related Website Sets, document.requestStorageAccessFor, and Topics in <strong>Chrome 144</strong> is written in the blink-dev Intents and, exce...
- [Intent to Ship: Storage Access API (within First-Party Sets)](https://groups.google.com/a/chromium.org/g/blink-dev/c/V9PzoCvIIIs) *(groups.google.com · 2023-03-20T00:00:00)*
  > Access will be granted based on First-Party Sets (see related I2S). This means the same activation risks as for the First-Party Sets I2S apply here as well. Does this intent deprecate or change behavior of existing APIs, such that it has potentially ...
- [Related Website Sets - the new name for First-Party Sets in Chrome 117 \| Privacy Sandbox](https://privacysandbox.google.com/blog/related-website-sets) *(privacysandbox.google.com · 2023-08-31T00:00:00)*
  > <strong>Many Privacy Sandbox APIs are ramping up to General Availability (GA) in Chrome Stable in preparation for third-party cookie deprecation beginning in 2024</strong>. Some of these APIs will help preserve crucial cross-site cookie use cases, li...
- [Request for Deprecation Trial: Deprecate Third-Party Cookies](https://groups.google.com/a/chromium.org/g/blink-dev/c/yGUdvW_t_y0/m/1MVs-PuKAgAJ) *(groups.google.com)*
  > <strong>Third-Party Cookies will be deprecated on Windows, Mac, Linux, Chrome OS, Android</strong>. The deprecation will not affect Android WebView for the time being, where 3PCs are already blocked by default, but can be re-enabled by the embedding ...
- [Google Pauses Plans to Stop Third-Party Cookies in Chrome - Single Grain](https://www.singlegrain.com/blog/google-stops-third-party-cookie-deprecation) *(singlegrain.com · 2024-10-25T19:51:05)*
  > <strong>Google is delaying the phase-out of third-party cookies in Chrome until early 2025</strong> to develop more effective privacy alternatives and address competition concerns. New privacy control options in Chrome give users better control over ...
- [\[Infographic\] The Cookie Deprecation Timeline: What You Need to Know \| GumGum \| Blog](https://gumgum.com/blog/cookie-deprecation-timeline) *(gumgum.com · 2024-04-23T00:00:00)*
  > ETP blocks third-party tracking cookies by default, providing users with greater control over their online privacy. <strong>In January 2020, Google announced that Chrome would phase out support for third party cookies in the browser</strong>.
- [Third-Party Cookie Deprecation: Here’s What Privacy Teams Need to Know](https://www.ethyca.com/guides/third-party-cookie-deprecation-here-s-what-privacy-teams-need-to-know) *(ethyca.com · 2026-06-28T04:21:22)*
  > In <strong>July 2024, Google abandoned the forced deprecation of third-party cookies in Chrome</strong>. Many businesses mistook this for a reprieve. However, rather than a complete reversal, it was a delegation.
- [Google's Move to Disable Third-Party Cookies: What Advertisers Need to Know \| iubenda](https://www.iubenda.com/en/blog/googles-move-to-disable-third-party-cookies-what-advertisers-need-to-know) *(iubenda.com · 2026-09-09T00:00:00)*
  > Earlier this year, the CMA accepted commitments from Google to address competition concerns related to the removal of third-party cookies and other functionalities from its Chrome browser. The CMA will continue to monitor these developments through q...
- [Third-Party Cookies Going Away? Here’s What’s Actually Happening](https://www.cookieyes.com/blog/third-party-cookies-going-away) *(cookieyes.com · 2025-05-28T15:06:54)*
  > <strong>Google&#x27;s decision to remove third-party cookies affects nearly 3.5 billion Chrome users worldwide</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Deprecate and Remove: Related Website Sets (RWS)](https://groups.google.com/a/chromium.org/g/blink-dev/c/V-wPXyoruac) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5194473869017088`)*
  > Apologies, I used the wrong Chromestatus link (the original feature status), this one is correct: https://<strong>chromestatus.com/feature/5194473869017088</strong>
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15155.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5194473869017088`)*
  > Apologies, I used the wrong Chromestatus link (the original feature status), this one is correct: https://<strong>chromestatus.com/feature/5194473869017088</strong> On Fri, Nov 7, 2025 at 2:47 PM Johann Hofmann &lt;[email protected]&gt; wro...
- [\[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15144.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5194473869017088`)*
  > Apologies, I used the wrong Chromestatus link (the original feature status), this one is correct: https://<strong>chromestatus.com/feature/5194473869017088</strong>

## 📚 Platform Documentation & Specifications

- [related-website-sets/RWS-Submission\_Guidelines.md at main · GoogleChrome/related-website-sets](https://github.com/GoogleChrome/related-website-sets/blob/main/RWS-Submission_Guidelines.md) *(github.com)*
- [GitHub - GoogleChrome/related-website-sets: Note: This repository will be archived and will no longer accept new submissions. · GitHub](https://github.com/GoogleChrome/related-website-sets) *(github.com)*
- [privacy - Mozilla \| MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/privacy) *(developer.mozilla.org)*
- [GitHub - privacycg/requestStorageAccessFor: A proposed extension to the Storage Access API and discussion of how it may be integrated with First-Party Sets. · GitHub](https://github.com/privacycg/requestStorageAccessFor) *(github.com)*
- [Related Website Sets - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API/Related_website_sets) *(developer.mozilla.org)*
- [Using the Storage Access API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API/Using) *(developer.mozilla.org)*
- [Document: requestStorageAccessFor() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/requestStorageAccessFor) *(developer.mozilla.org)*
- [Document: requestStorageAccess() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/requestStorageAccess) *(developer.mozilla.org)*
- [Error in example code · Issue #7770 · GoogleChrome/developer.chrome.com](https://github.com/GoogleChrome/developer.chrome.com/issues/7770) *(github.com)*
- [requestStorageAccessFor/index.bs at main · privacycg/requestStorageAccessFor](https://github.com/privacycg/requestStorageAccessFor/blob/main/index.bs) *(github.com)*
- [Website security](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 50 result(s) found across 11 planned queries — **35 verified relevant**
  - `"chromestatus.com/feature/5194473869017088" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"wicg.github.io/first-party-sets" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Deprecate and Remove: Related Website Sets (RWS)" API` — *Core feature API query* (8 returned)
  - `"Deprecate and Remove: Related Website Sets (RWS)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chrome.privacy" OR "0.95" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and Remove: Related Website Sets (RWS)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and Remove: Related Website Sets (RWS)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (3 returned)
  - `"Related Website Sets" OR "First-Party Sets" deprecation "Storage Access API" fallback` — *Find technical developer guides and migration tutorials explaining fallback behavior for the Storage Access API following the removal of Related Website Sets.* (8 returned)
  - `"requestStorageAccessFor" OR "rSAFor" code example site:github.com OR site:developer.mozilla.org` — *Locate JavaScript implementation patterns and usage samples of the companion requestStorageAccessFor API before its removal.* (8 returned)
  - `"Related Website Sets" ("deprecate" OR "removal") Chrome "third-party cookies"` — *Discover ecosystem news, enterprise impact assessments, and announcements following Chrome's decision to maintain third-party cookies and drop RWS.* (7 returned)
  - `site:groups.google.com/a/chromium.org "Intent to Deprecate and Remove: Related Website Sets"` — *Find web standards discussions and developer debate on the blink-dev mailing list regarding the deprecation and turn-down plan for Related Website Sets.* (1 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **5 verified relevant**
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

- [ChromeStatus](https://chromestatus.com/feature/5194473869017088)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5194473869017088)
- [Specification](https://wicg.github.io/first-party-sets)
