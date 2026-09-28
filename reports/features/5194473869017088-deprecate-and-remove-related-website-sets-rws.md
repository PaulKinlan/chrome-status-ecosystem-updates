# Deprecate and Remove: Related Website Sets (RWS)

> **Report Week:** 2026-W40 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

Related Website Sets (RWS), formerly known as First Party Sets, provides a framework for developers to declare relationships among sites, to enable limited cross-site cookie access for specific, user-facing purposes. This is facilitated through the use of the Storage Access API (SAA) and requestStorageAccessFor (rSAFor). RWS was designed for use in a browser without third-party cookies. Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove Related Website Sets (RWS).    Once RWS is deprecated; existing usage of SAA across contexts within a set will fall back to the API’s behavior outside of RWS as specified here. The difference in SAA behavior outside of RWS is well illustrated in our developer blogpost here.   The companion rSAFor API will also be deprecated via a separate intent.     We also intend to deprecate RWS-related Chrome Enterprise policies, as well as the chrome.privacy.relatedWebsiteSetsEnabled extension API; and will follow the relevant processes.

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. RWS usage is indicated by the number of registered sets (currently at 71 sets), and the usage of the requestStorageAccessFor API (currently at about 0.95% of pageloads), and after this announcement we intend to archive the registration repository, and expect adoption of rSAFor to decrease over time. 


We will continue to monitor usage and aim to drive it down prior to removal by proactively informing set owners of the deprecation timelines and request them to turn down usage. Further, other browser engines have not signaled interest in launching the API, obviating any interoperability concerns.

## Ecosystem Status

- **Momentum:** High (450 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Related Website Sets (RWS), formerly First-Party Sets, and the companion \`document.requestStorageAccessFor()\` API have been slated for deprecation and removal starting in Chrome 153 following Google's pivot to maintain user-choice third-party cookie access. The mechanism suffered from negligible production adoption—recording only 71 registered sets—and the canonical GitHub registration repository has been archived and closed to new submissions. Chrome contexts will revert to standard Storage Access API (SAA) behavior without automated cross-site exemptions.

### Recommendations
- Actionable Advice: Audit existing codebases to eliminate calls to \`document.requestStorageAccessFor()\` and cease any ongoing domain verification submissions to the archived RWS repository. Transition cross-site workflows to the standard \`document.requestStorageAccess()\` pattern requiring user activation or leverage partitioned storage (CHIPS) for isolated multi-domain services.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGo_3Uo3M-hWksGt-F8IP9IaWpD2Wbh50IlSCZBitJ4J5zHdOeOVtxDqCDCFAUjTbICJw7yCHTgxGsG4mtM-UBUebSdzjlo2J9Kdn6XB9M84B1SrdrCkyHEu8gR2jhX-7d5AppWaJXP) *(vertexaisearch.cloud.google.com)*
  > Privacy Sandbox feature status Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Home Sig...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE-Ml6CqxH5KPVP4W4hdTqd8FrcExWChkvH-Ft19SqZAvsqDLxqSqxRbDotsq45FpAF5Dh9cLb5d5jTB5jTT8w31bsfZD-Ry_m4LGC1GnGYq6IvmOw1ZIQe10oWyhzTb7HKVOXLv9o2HklTBhO7WkIqHg==) *(vertexaisearch.cloud.google.com)*
  > Related Website Sets - the new name for First-Party Sets in Chrome 117 | Privacy Sandbox Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة ...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH9-BeksK9qde4rFgjIylQMZIU2MwJfTuIaf1e1V_GLTRpf7L7u__uAko1kekaY7pP_iZZjcZfGOa2Igak6tr7L5zLXm2YIH6nvytTtyPN57kz0PYG_CDpsBP4kXGK3_R2RuYfib5HLFr2-) *(vertexaisearch.cloud.google.com)*
  > GitHub - GoogleChrome/related-website-sets: Note: This repository will be archived and will no longer accept new submissions. · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGWA1cdxQCTP1-EqHv6inSy-QJV2ahS445Jvo_qPyGcJE7_2Butg8SilnVSsQ8tEl_LapQuH3Kc22EsdUKhqoCb9su8vnrZk297gC3wIFDA87Tjci_OMhJ2eXbV29awH0IQt_C4TfF0NRWboVqP1HRsuN3t_5CEHrAKu90uKIMFyGOX_44lpXfSbQMlFJc=) *(vertexaisearch.cloud.google.com)*
  > Update on Plans for Privacy Sandbox Technologies Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH5rU9OYEXvClrj8GeO-_7LIemVY7zu1vq2JTk1zNLIO45H_3hQjYIQ9H6dja6ps-3eOq7L_dMnJX-yaBCKK2qoOZ2_xJFHF0dX4PMWPYEHNX3sB3IRmCw6sKgRFuUHCVZoBGcRsqCWR6Hm2YzjwufHOghKCeEcCFz2ACOPZh6s252ovJ_vocQ=) *(vertexaisearch.cloud.google.com)*
  > Document: requestStorageAccessFor() method - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs Document requestStorageAccessFor() Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) ...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGw6c4KeQzhEQcnExGQEF8lUgy6zaY97_MF2EcrPRLTxeRKzqq_8xcpF1IG86acn_EGajG9NqswfjSqdmOd1GC6_c2juJIdBFMXBZRWayO5A_7bxIetcTF6cm_6DMmIRNiGPMJGQN0FnYJU22N8IFxoG1tHzjCnOuFuyVw=) *(vertexaisearch.cloud.google.com)*
  > Google announced the deprecation and removal of **Related Website Sets (RWS)** (formerly known as *First-Party Sets*) alongside its companion API `document.requestStorageAccessFor()` (rSAFor).   Below is an overview of the key announcements, develope
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQECb0YqtEksT2iZ0YCobX8_5rkcDgK3OnfteTu0CG8BKUQva0esRM5mkeVEIq2FMliS8MDX1aDCQ6X45kJ-ffxqN56grAGhFkU0cMCjUb-B2u_MBwW8UUx5MSWgZCEa09ffWRxZjsbFnK7Uk1Iemg==) *(vertexaisearch.cloud.google.com)*
  > Google announced the deprecation and removal of **Related Website Sets (RWS)** (formerly known as *First-Party Sets*) alongside its companion API `document.requestStorageAccessFor()` (rSAFor).   Below is an overview of the key announcements, develope
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGmPDTXbHbwQQlGg_sXp503fYdXjKMG_1bdVR5keL0-m2vxfuDYTsw6efMhUXAI40TrqmQiUMSb6RevqMDBwp9eVr4SHoLOsTXfyyQEOaPkNk4Sejoh2QenyGy3PR6CVflhIx8CKOOBn_-lm8qDel5NdAFMNOQA8na_ihJ0RL4PtkOEM9qqc1Tt) *(vertexaisearch.cloud.google.com)*
  > Google announced the deprecation and removal of **Related Website Sets (RWS)** (formerly known as *First-Party Sets*) alongside its companion API `document.requestStorageAccessFor()` (rSAFor).   Below is an overview of the key announcements, develope
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGPadVWU1r2mEjaUbYuB0-nk9Bn-8nj8lydDkPoHXxq5SbOHTsHMte-vjQo6pQ4FBVewgaefJi_EX8AAhPpPZItZYKroGei9p8AsTWcxVMUcHtclXESZQE3bds6uJIaf5ZZGo6BnTsWeh3UPoJeUvUQccYnbRT2O41ZmgNzkp-dFz0-VxZ6rAfh7qqkuI5pTuBmwjm5) *(vertexaisearch.cloud.google.com)*
  > Google announced the deprecation and removal of **Related Website Sets (RWS)** (formerly known as *First-Party Sets*) alongside its companion API `document.requestStorageAccessFor()` (rSAFor).   Below is an overview of the key announcements, develope
- [brave.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFeu-t5h_HJlNLbMc9cxaU-CyzYk1R8eQjnf03H_e6xw-63YsbgERGV4gzNJhZpg2vvJfcQYPrHDhAevxB-JXkaxn8bRdGnSc9m1C2C-CV8B9LKF0cO3EIlDXPGOAsdlqE27A==) *(vertexaisearch.cloud.google.com)*
  > Google announced the deprecation and removal of **Related Website Sets (RWS)** (formerly known as *First-Party Sets*) alongside its companion API `document.requestStorageAccessFor()` (rSAFor).   Below is an overview of the key announcements, develope
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE9P0F3UssJbVaqCg-uzemOENP5Z8pN_MFIRsv51YzZ6gFgBTqMLNoE7G0I1Gt0vlmIpywttfF-JMc09HCLyCzpsX4LzMnf4WOglnv8NCGt7WTQyRorLLK3V116eaOCCKRvNL34__vC0rxkjztgqENHMJ7EMdo=) *(vertexaisearch.cloud.google.com)*
  > Google announced the deprecation and removal of **Related Website Sets (RWS)** (formerly known as *First-Party Sets*) alongside its companion API `document.requestStorageAccessFor()` (rSAFor).   Below is an overview of the key announcements, develope
- [ppc.land](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH7S4sdspoKeEQr2xL-jdmLvASeF0pgcUrFivBuME2JFh5gkxHcPPKJAOIyKAJ4n04NCSBwGx9j52VhQOYCAt_AKQqK20AQkUnicnleTrg31863C9DdN7LWS5Vhoa1FDoJ8TU3Y8pJwf9LLosXu0jeG8lt4a-zZ4Acrkp3Gcn4xtG7VDHfPkhxJL8I1) *(vertexaisearch.cloud.google.com)*
  > Google announced the deprecation and removal of **Related Website Sets (RWS)** (formerly known as *First-Party Sets*) alongside its companion API `document.requestStorageAccessFor()` (rSAFor).   Below is an overview of the key announcements, develope
- [Intent to Deprecate and Remove: Related Website Sets (RWS)](https://groups.google.com/a/chromium.org/g/blink-dev/c/V-wPXyoruac) *(groups.google.com)*
  > Apologies, I used the wrong Chromestatus link (the original feature status), this one is correct: https://<strong>chromestatus.com/feature/5194473869017088</strong>
- [\[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15144.html) *(mail-archive.com)*
  > Apologies, I used the wrong Chromestatus link (the original feature status), this one is correct: https://<strong>chromestatus.com/feature/5194473869017088</strong>
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15146.html) *(mail-archive.com)*
  > LGTM1 On Fri, Nov 7, 2025, 12:34 p.m. &#x27;Johann Hofmann&#x27; via blink-dev &lt; [email protected]&gt; wrote: &gt; Apologies, I used the wrong Chromestatus link (the original feature &gt; status), this one is correct: &gt; https://<strong>chromest...
- [\[blink-dev\] Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15143.html) *(mail-archive.com)*
  > The companion rSAFor API will also be deprecated via a separate intent. We also intend to deprecate RWS-related Chrome Enterprise policies &lt;https://chromeenterprise.google/policies/#RelatedWebsiteSets&gt;, as well as the chrome.privacy.relatedWebs...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15155.html) *(mail-archive.com)*
  > We also intend to deprecate RWS-related Chrome Enterprise policies &lt;https://chromeenterprise.google/policies/#RelatedWebsiteSets&gt;, as well as the chrome.privacy.relatedWebsiteSetsEnabled extension API; and will follow the relevant processes. Bl...
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=%22Intent+to+Deprecate+and+Remove%22) *(groups.google.com)*
  > [blink-dev] Intent to Deprecate and Remove: Attribution Reporting API · steps 2 and 3. /Daniel On 2026-06-26 10:21, Yoav Weiss (@Shopify) wrote: &gt; LGTM2 &gt; &gt; On Thu, Jun 25, 2026 at 11:12 PM Chris Harrelson &gt; wrote: &gt; &gt; LGTM1 &gt; &g...
- [Google Privacy Sandbox API deprecations](https://learnfocus-sigma.vercel.app/?page=en-git-mdn-browser-compat-data-1762585883240) *(learnfocus-sigma.vercel.app · 2025-11-07T16:01:04)*
  > Intent to Deprecate and Remove: document.requestStorageAccessFor Intent to Deprecate and Remove: Related Website Sets (RWS) Intent to deprecate and remove Shared Storage Intent to Deprecate and Remove: Protected Audience Intent to Deprecate and Remov...
- [Privacy Sandbox feature status](https://privacysandbox.google.com/overview/status) *(privacysandbox.google.com · 2025-10-17T00:00:00)*
  > Intent to Deprecate and Remove: Related Website Sets (RWS) Intent to Deprecate and Remove: document.requestStorageAccessFor · Including requestStorageAccessFor and Related Website Partition. Chrome Platform Status. Scheduled for phaseout. Explainer: ...
- [Wyszukaj wątki](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=title%3A%22Intent+to+Deprecate+and+Remove%22&hl=pl) *(groups.google.com)*
  > [blink-dev] Intent to Deprecate and Remove: Attribution Reporting API · a plan to remove it in Chrome-150. Currently the usage is 19.7% of page loads. We are proposing the following as next steps for removal and associated timelines: 1. M150: Remove ...
- [Related Website Sets: developer guide \| Privacy Sandbox](https://developers.google.com/privacy-sandbox/cookies/related-website-sets-integration) *(developers.google.com · 2024-02-06T00:00:00)*
  > When third-party cookies are blocked but Related Website Sets (RWS) is enabled, Chrome will automatically grant permission in intra-RWS contexts, and will show a prompt to the user otherwise.
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg16726.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; Once RWS is deprecated; existing usage of SAA across contexts within a &gt;&gt;&gt; set will fall back to the API’s behavior outside of RWS as specified &gt;&gt;&gt; here &lt;https://privacycg.github.io/storage-access/&gt;. ...
- [What are Related Website Sets? Unpacking Google’s Privacy Sandbox Initiative](https://www.adfixus.com/post/wth-are-related-website-sets-unpacking-googles-privacy-sandbox-initiative) *(adfixus.com)*
  > It&#x27;s important to note that any changes to the set, such as adding or removing domains, require a resubmission and re-verification to maintain the integrity of the RWS. In summary, setting up and submitting an RWS demands careful planning and ad...
- [How Related Website Sets (RWS) Address the Challenges of Third-Party Cookie Blocking — Techtsp \| by Tanmay Patange \| Medium](https://medium.com/@tanmaypatange/how-related-website-sets-rws-address-the-challenges-of-third-party-cookie-blocking-79ff5c547a5e) *(medium.com · 2024-01-20T10:45:21)*
  > If you decide to use Related Website Sets, the next step is to <strong>submit your related websites to a set</strong>. This involves following the submission guidelines provided by Google and adding your sites to a Related Website Sets set on the Git...
- [Download Simple Privacy Settings for Chrome - MajorGeeks](https://www.majorgeeks.com/files/details/simple_privacy_settings.html) *(majorgeeks.com)*
  > With just a few clicks, you can easily adjust your browser&#x27;s privacy settings to your liking. <strong>The extension provides a range of options that let you disable tracking cookies, block ads, and prevent third-party scripts from running on web...
- [Privacy Settings - Chrome Web Store](https://chromewebstore.google.com/detail/privacy-settings/ijadljdlbkfhdoblhaedfgepliodmomj?hl=en) *(chromewebstore.google.com)*
  > Learn more about results and reviews. <strong>Removes all forms of tracking including web-bugs, tracking-scripts and information-collectors, and protects your data</strong>. ... Average rating 3.9 out of 5 stars.
- [privacy.websites](https://contest-server.cs.uchicago.edu/ref/JavaScript/developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites.html) *(contest-server.cs.uchicago.edu)*
  > The privacy.<strong>websites property contains privacy-related settings controlling the way to browser interacts with websites</strong>. Each property is a types.BrowserSetting object · Default values for these properties tend to vary across browsers
- [Related Website Sets: developer guide \| Privacy Sandbox](https://privacysandbox.google.com/cookies/related-website-sets-integration) *(privacysandbox.google.com · 2024-02-06T00:00:00)*
  > (An &quot;intra-RWS context&quot; is a context, such as an iframe, whose embedded site and top-level site are in the same RWS.) Note: SAA is shipping in several browsers, however there are differences between browser implementations in the rules of h...
- [Chrome is Entrenching Third-Party Cookies For Some Sites In A Way That Will Predictably, Inevitably Mislead Users \| Brave](https://brave.com/blog/related-website-sets) *(brave.com · 2024-08-26T00:00:00)*
  > The research finds both that <strong>the Related Website Sets feature would reverse some of the privacy benefits of deprecating third-party cookies</strong>, and that Google’s justification for reintroducing this privacy harm (i.e., that Web users ca...
- [Chrome Blocking Third-Party Cookies \| LoginRadius Docs](https://www.loginradius.com/docs/support-resources/chrome-blocking-third-party-cookies) *(loginradius.com)*
  > In response to Chrome&#x27;s third-party cookie deprecation, <strong>web services must adapt to new privacy standards restricting cross-site tracking</strong>. To mitigate cross-site tracking, including cookie restrictions, tracking prevention, and p...
- [Related Website Sets - the new name for First-Party Sets in Chrome 117 \| Privacy Sandbox](https://privacysandbox.google.com/blog/related-website-sets) *(privacysandbox.google.com · 2023-08-31T00:00:00)*
  > <strong>Many Privacy Sandbox APIs are ramping up to General Availability (GA) in Chrome Stable in preparation for third-party cookie deprecation beginning in 2024</strong>. Some of these APIs will help preserve crucial cross-site cookie use cases, li...
- [Related Website Sets](https://www.chromium.org/updates/first-party-sets) *(chromium.org)*
  > The FPS origin trial will be ... be required for initial OT. In addition, <strong>when the user has third-party cookie blocking enabled, Chrome&#x27;s normal functionality will persist and cookies will not be shared in cross-domain contexts</strong> ...
- [Request for Deprecation Trial: Deprecate Third-Party Cookies](https://groups.google.com/a/chromium.org/g/blink-dev/c/yGUdvW_t_y0/m/1MVs-PuKAgAJ) *(groups.google.com)*
  > <strong>Third-Party Cookies will be deprecated on Windows, Mac, Linux, Chrome OS, Android</strong>. The deprecation will not affect Android WebView for the time being, where 3PCs are already blocked by default, but can be re-enabled by the embedding ...
- [Google Chrome's Phase-Out of Third-Party Cookies Impacts Open CTI \| Salesforce Help](https://help.salesforce.com/s/articleView?id=000396744&language=en_US&type=1) *(help.salesforce.com · 2026-05-14T00:00:00)*
  > <strong>Google&#x27;s Privacy Sandbox initiative has removed support for third-party cookies in Chrome</strong>, which impacts Open CTI implementations that rely on cross-site c...
- [Chrome’s third-party cookie crackdown has an exception most people don’t know about](https://www.makeuseof.com/chromes-third-party-cookie-crackdown-has-exception-most-dont-know-about) *(makeuseof.com · 2026-08-24T13:00:14)*
  > However, <strong>membership in a Related Website Set was simply linked to the Storage Access API and did not automatically grant unrestricted cookie access</strong>. Within sets, storage access requests can skip the traditional permission prompt.
- [Intent to Ship: Storage Access API (within First-Party Sets)](https://groups.google.com/a/chromium.org/g/blink-dev/c/V9PzoCvIIIs) *(groups.google.com · 2023-03-20T00:00:00)*
  > To provide better developer ergonomics in non-iframe use cases for access to cross-site cookies within a first-party set, we intend to ship an extension to the Storage Access API called &quot;requestStorageAccessFor&quot; (see related I2S).
- [Using Related Website Sets with the Storage Access API for seamless data sharing - Privacy Sandbox Help](https://support.google.com/privacysandbox/answer/15683513?hl=en&ref_topic=15681707) *(support.google.com)*
  > Cross-browser fallback: Related Website Sets is underpinned by Storage Access, which has wide browser support, making this a robust solution with broader compatibility (refer to

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Deprecate and Remove: Related Website Sets (RWS)](https://groups.google.com/a/chromium.org/g/blink-dev/c/V-wPXyoruac) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5194473869017088`)*
  > Apologies, I used the wrong Chromestatus link (the original feature status), this one is correct: https://<strong>chromestatus.com/feature/5194473869017088</strong>
- [\[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15144.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5194473869017088`)*
  > Apologies, I used the wrong Chromestatus link (the original feature status), this one is correct: https://<strong>chromestatus.com/feature/5194473869017088</strong>
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15146.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5194473869017088`)*
  > LGTM1 On Fri, Nov 7, 2025, 12:34 p.m. &#x27;Johann Hofmann&#x27; via blink-dev &lt; [email protected]&gt; wrote: &gt; Apologies, I used the wrong Chromestatus link (the original feature &gt; status), this one is correct: &gt; https://<stron...

## 📚 Platform Documentation & Specifications

- [related-website-sets/RWS-Submission\_Guidelines.md at main · GoogleChrome/related-website-sets](https://github.com/GoogleChrome/related-website-sets/blob/main/RWS-Submission_Guidelines.md) *(github.com)*
- [privacy - Mozilla \| MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/privacy) *(developer.mozilla.org)*
- [Document: requestStorageAccessFor() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/requestStorageAccessFor) *(developer.mozilla.org)*
- [Document: hasStorageAccess() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/hasStorageAccess) *(developer.mozilla.org)*
- [content/files/en-us/web/api/document/requeststorageaccess/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/document/requeststorageaccess/index.md) *(github.com)*
- [content/files/en-us/web/api/document/hasstorageaccess/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/document/hasstorageaccess/index.md?plain=1) *(github.com)*
- [Storage Access API - Web APIs \| MDN](https://developer.mozilla.org/docs/Web/API/Storage_Access_API/Related_website_sets) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 61 result(s) found across 11 planned queries — **33 verified relevant**
  - `"chromestatus.com/feature/5194473869017088" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"wicg.github.io/first-party-sets" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Deprecate and Remove: Related Website Sets (RWS)" API` — *Core feature API query* (8 returned)
  - `"Deprecate and Remove: Related Website Sets (RWS)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chrome.privacy" OR "0.95" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and Remove: Related Website Sets (RWS)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and Remove: Related Website Sets (RWS)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Related Website Sets" OR "First-Party Sets" deprecation Chrome "third-party cookies"` — *Find industry news, policy announcements, and ecosystem reactions to Chrome deprecating Related Website Sets following changes in third-party cookie strategy.* (8 returned)
  - `"requestStorageAccessFor" "Storage Access API" fallback example OR tutorial` — *Find real-world JavaScript code snippets and API usage comparing requestStorageAccessFor with standard document.requestStorageAccess fallbacks.* (8 returned)
  - `"Related Website Sets" migration OR fallback "Storage Access API" developer guide` — *Locate developer tutorials and guides addressing how to adjust cross-site cookie architecture following the phase-out of Related Website Sets.* (3 returned)
  - `site:groups.google.com/a/chromium.org OR site:github.com/WICG/first-party-sets "Intent to Deprecate" "Related Website Sets"` — *Track official Chromium Blink dev discussions, intent to deprecate threads, and GitHub repository discussions regarding the sunsetting of RWS.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 15 result(s) found — **12 verified relevant**
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

- [ChromeStatus](https://chromestatus.com/feature/5194473869017088)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5194473869017088)
- [Specification](https://wicg.github.io/first-party-sets)
