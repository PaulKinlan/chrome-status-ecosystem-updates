# CORS enforcement for Background Fetch

> **Report Week:** 2026-W38 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Starting in Chrome 154, the Background Fetch API now enforces Cross-Origin Resource Sharing (CORS).  This update aligns Chromium's implementation with the intent of the \[Background Fetch spec\](https://wicg.github.io/background-fetch/). This ensures that Background Fetch requests are subject to the same security policies, such as Local Network Access checks.   This update prevents sites from bypassing CORS (and other security policy checks) by using Background Fetch instead of regular \[Fetch\](https://fetch.spec.whatwg.org/).

### Motivation

This fixes a security issue where Background Fetch unintentionally bypasses security policies such as CORS (and CORP/COEP/DIP).

(crbug.com/515243254 is our meta bug tracking all of the different web platform security issues with Background Fetch.)

## Ecosystem Status

- **Momentum:** High (340 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** Background Fetch has long remained a Chromium-exclusive WICG incubation with minimal ecosystem adoption, which Chromium engineers previously attempted to deprecate before pivoting to security hardening. Beginning in Chrome 154, Chromium routes Background Fetch through standard network pipelines to enforce CORS, CORP/COEP, and Local Network Access checks, closing an architectural hole that previously let background requests bypass cross-origin restrictions. This change directly addresses high-severity data leakage vulnerabilities (such as CVE-2026-1504) and aligns Chromium's implementation with the original specification.

### Recommendations
- Actionable Advice: Audit all endpoints requested via \`backgroundFetch.fetch()\` to ensure that target origins send compliant \`Access-Control-Allow-Origin\` headers and support CORS requirements. Maintain robust feature detection (\`'BackgroundFetchManager' in self\`) alongside fallback mechanisms via standard \`fetch()\` or service worker caching for Safari and Firefox users.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Corsfix Blog" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Corsfix Blog](https://corsfix.com/blog) — *0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHxLjAI8XZc42fcRtbPH7Tzw5akzqx47dOpi0IFMJ8OTmAYTD8PTxywAEEPqciO4ArBVkd_mh_3Y-Xjif9WV_6vWs1aFRSt8VT9tg1CQ1tqDmv9RNvgNdtb_1l5WRCZPeispOI60V4=) *(vertexaisearch.cloud.google.com)*
  > Chrome 154 测试版 | Blog | Chrome for Developers 跳至主要内容 / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 ...
- [chromeenterprise.google](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGiQsgWvIljbap3t5vX8aM4Vs_lAXlynhswNfgH4rCdBdlwkhuRCzEZXW6waqG8L5E-KtYB81Dhd53110eACRcHSXXlCG0-SFiee4LDQQ9vhsyaz-qpns5IE-OI79-b5C3aHjO-F2E_FEPR-t49erlVI3GQtC_chko=) *(vertexaisearch.cloud.google.com)*
  > Explore New Chrome Enterprise Browser, Core, Premium Features Jump to content chrome enterprise chrome enterprise Get in touch Download Chrome Chrome Enterprise Release Notes Last published: __RELEASE_DATE__ The enterprise release notes are available...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFogaP7bWFwR3RHagYfQVUXkJWcUsqkdvbnPuLo_OGAzfGkjU5K9MOB7W_GiDzTRzRH3XOeH2Kr-MW3ZrcDYP7EL6WlCu6IC9UvMgoW9FlRPUwqCLhZwv9aYIvcwxraADhO0ZvYSIU=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [sentinelone.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEleONsWZv3G78gJScXqCT_j3B8Iv3u_p4M7zdFp-6xSGvMKMD_QzeB_ZBtnyG78xEl6AamYX3sHZ5yz-IAR7ZTMZevcwa9bslYGMcHrdzG4eWt3QTPw7WsfwUDduORJSVJWiYlqqUeL8P2NeIwbiz-1skgZKzs) *(vertexaisearch.cloud.google.com)*
  > CVE-2026-1504: Chrome Background Fetch API Vulnerability Skip to main content OneCon26: Gain the advantage in the AI era. Oct. 20–22 in Las Vegas. Register Now Experiencing a breach? Blog Careers Get Started Contact Us Search Events Get Started Conta...
- [chromeenterprise.google](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF4HeopeA6isOZtcd5e0PbKECPoeA0Q7WPbPvps6-DaK_KP3jG4TqKPCSy1Re8esD-qannGNKCv6kdF5y1tMVqzf8MZ65bNa5YpSZyNMrD3Ov7SmQxrRqoQna2UUqrN9GETyUNlf54YWZ_lII1pzzXYaKrYev4SCFpLm82pacJjAQvFpg==) *(vertexaisearch.cloud.google.com)*
  > Explore New Chrome Enterprise Browser, Core, Premium Features Jump to content chrome enterprise chrome enterprise Get in touch Download Chrome Chrome Enterprise Release Notes Last published: __RELEASE_DATE__ The enterprise release notes are available...
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHvEGYAoQYuYOD1UJHA-TZrzD9SaPn7PvTLrpOfIki9RfabVtxQ4eFzGjI6ZqY2haK6gnGsPybJ9ucmqN6LsbStDkIUyEPI1DiL_bLOy6TdMuBCUKUmn40k0phePb-kmujQ) *(vertexaisearch.cloud.google.com)*
  > Chromium Sign in
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGIzPkKkNy5rHaqOdvDcZ217aZPIwCr4jNvmpcHiPc6d1l_-sL4lCiACamMdrtM7vPCZwKTwnvt7D_NGYX5IvW_m2I4vuzp6-Bg-ZO6XBYuY-Dfnsku2OX9kyAuWml5J8YuOiaUH3hH) *(vertexaisearch.cloud.google.com)*
  > Introductie van achtergrond ophalen | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEjybHYn6NpywpRw2jZNEXZjxHwY0P4rioEmBmHgZ_yHupre88p9vTX6IXAIjVMW9s-0WT_nZcC35F59ycJjPFpuvt896W6Yy_t_FrVc3ka-qp6Tk82kPrkeCa4HeOzcBXZaiN9UT2345Y9KvHfxxwukz6yCV0zPM4yqWVHQcNZOlSL_3FOXiPcqxSiz6HvKw==) *(vertexaisearch.cloud.google.com)*
  > BackgroundFetchRegistration: failureReason property - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs BackgroundFetchRegistration failureReason Theme OS default Light Dark English (US) Remember language Learn more Deuts...
- [medium.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFx6ludq8DTmuK1hldNn3GSDExg8lp6Ted7BkKI1xsdtVkEaUvAiQEBfE2RVWH0Rc5FLM9FA0XN7bILHTiAvXolGxEympAHlMcRR3Wl4IHvkDkqoI0razj7xYXDJcFVMkrZl276ERtzWtjHXMIu_7AjpD67d-1n5kA7eqtQ9KQBMDSuQl-R2bgSb2c0OJDULPKisSDQzhU=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  Starting in **Chrome 154**, Chromium enforces **Cross-Origin Resource Sharing (CORS)** and **Local Network Access (LNA)** restrictions on the **Background Fetch API**.   Historically, Chromium implemented Background Fetch
- [Fetch API: The Ultimate Guide to CORS and ‘no-cors’ \| by ＣＹＢＥＲＳＰＨＥＲＥ \| Medium](https://medium.com/@cybersphere/fetch-api-the-ultimate-guide-to-cors-and-no-cors-cbcef88d371e) *(medium.com · 2023-04-22T16:09:06)*
  > Join Cybersphere, your gateway to tech news and coding tutorials. Explore the endless possibilities of tomorrow with our innovative community. ... Do you need to fetch data from a third-party API or server in your web application? If so, you may have...
- [CORS Demystified: Mastering Access-Control-Allow-Origin and Web Security](https://toolshelf.tech/blog/cors-demystified-mastering-access-control-allow-origin-web-security) *(toolshelf.tech)*
  > To do this, <strong>your frontend fetch request must include credentials: &#x27;include&#x27;, and the server must send</strong>: ... The Catch: If Access-Control-Allow-Credentials is true, you cannot set Access-Control-Allow-Origin to *. The browser...
- [Understanding CORS in Depth and How Browsers Enforce It - AverageDevs](https://www.averagedevs.com/blog/understanding-cors-in-depth-browsers-enforce) *(averagedevs.com · 2025-12-05T00:00:00)*
  > | +---------+--------+ ... +--------&gt;+ Headers | +------------------+ +------------------+ - JS <strong>initiates a request using fetch or XHR</strong>....
- [The Complete Guide to CORS for Modern Frontend Developers \| by CodeByUmar \| Skill Stuff \| Medium](https://medium.com/skillstuff/the-complete-guide-to-cors-for-modern-frontend-developers-0d79450f0f03) *(medium.com · 2026-03-31T17:11:25)*
  > Stop fighting mysterious CORS errors, ... 👉 Read this post free here ... <strong>Access to fetch at &#x27;https://api.example.com/data&#x27; from origin &#x27;http://localhost:3000&#x27; has been blocked by CORS policy</strong>....
- [Understanding CORS: A Practical Guide - ByteMinds](https://www.byteminds.co.uk/blog/understanding-cors-a-practical-guide) *(byteminds.co.uk)*
  > In this article, I will briefly answer questions about why the CORS policy was created, how it works, why a simple action like &quot;setting a header on the backend&quot; might not be enough, and what secure patterns to choose for the frontend. ... H...
- [The web preferences API has moved to the CSS WG](https://wicg.github.io/web-preferences-api) *(wicg.github.io)*
  > We cannot provide a description for this page right now
- [Comment éviter les no-cors sur une PWA ? \| Forum WebRankInfo](https://www.webrankinfo.com/forum/t/comment-eviter-les-no-cors-sur-une-pwa.198793) *(webrankinfo.com · 2021-05-08T09:11:08)*
  > class_fetch.js:372 request for : https://www.pronostics-courses.fr class_fetch.js:227 file : https://www.pronostics-courses.fr is being fetched from the cache. main.html:1 Access to fetch at &#x27;https://www.pronostics-courses.fr/&#x27; from origin ...
- [Exploring the Roots of Cross-Origin Errors in Progressive Web Applications and Effective Strategies for Resolution](https://moldstud.com/articles/p-exploring-the-roots-of-cross-origin-errors-in-progressive-web-applications-and-effective-strategies-for-resolution) *(moldstud.com · 2025-01-27T00:00:00)*
  > Have you tried using a proxy server to fetch resources from external domains in your PWA? This can help to avoid cross origin errors by routing requests through your own server, which is typically on the same domain as your app. ... I ran into a cros...
- [magento2.3 - Getting cors error in pwa studio - Magento Stack Exchange](https://magento.stackexchange.com/questions/350736/getting-cors-error-in-pwa-studio) *(magento.stackexchange.com · 2021-12-11T00:00:00)*
  > Stack Exchange network consists of 183 Q&amp;A communities including Stack Overflow, the largest, most trusted online community for developers to learn, share their knowledge, and build their careers. Visit Stack Exchange ... Connect and share knowle...
- [How do you handle cross-origin requests for web apps?](https://www.linkedin.com/advice/1/how-do-you-handle-cross-origin-requests-web) *(linkedin.com · 2023-08-15T00:16:26)*
  > Service workers are part of the progressive web app (PWA) concept, which aims to make web apps more reliable, fast, and engaging. <strong>Service workers can also enable cross-origin requests for web apps, by using the fetch API, which supports CORS<...
- [CORS issue when deploying Flutter PWA behind Cloudflare Access - Stack Overflow](https://stackoverflow.com/questions/79224925/cors-issue-when-deploying-flutter-pwa-behind-cloudflare-access) *(stackoverflow.com)*
  > &#x27;https://project.cloudflareacc... resource. If an opaque response serves your needs, <strong>set the request&#x27;s mode to &#x27;no-cors&#x27; to fetch the resource with CORS disabled</strong>....
- [Can a service worker fetch and cache cross-origin assets?](https://stackoverflow.com/questions/54619653/can-a-service-worker-fetch-and-cache-cross-origin-assets) *(stackoverflow.com)*
  > If I add { mode: &quot;no-cors&quot; } to the fetch per Service worker CORS issue, I&#x27;ll get the same error and these warnings:

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [background-fetch/index.bs at main · WICG/background-fetch](https://github.com/WICG/background-fetch/blob/main/index.bs) *(github.com)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > Shortname: background-fetch · ... Beverloo, Google, beverloo@google.com · Abstract: <strong>An API to handle large uploads/downloads in the background with user visibility</strong>....
- [Background Fetch · Issue #149 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/149) *(github.com · 2023-03-15T23:42:46)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > Request for position on an emerging web specification WebKittens who can provide input: @annevk @youennf Information about the specification Title: Background Fetch URL: https://<strong>wicg.github.io/background-fetch</strong>/ GitHub repos...
- [Background Fetch · Issue #30 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/30) *(github.com · 2017-09-27T07:27:40)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > Request for Mozilla Position on an Emerging Web Specification Specification Title: Background Fetch Specification or proposal URL: https://<strong>wicg.github.io/background-fetch</strong>/ Other information An API to handle large uploads/do...
- [periodic-background-sync/index.bs at main · WICG/periodic-background-sync](https://github.com/WICG/periodic-background-sync/blob/main/index.bs) *(github.com · 2019-09-30T00:00:00)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > spec: background-fetch; urlPrefix: https://<strong>wicg.github.io/background-fetch</strong>/   type:interface; text: BackgroundFetchManager ·   type:dfn; text:background fetch · &lt;/pre&gt;  · &lt;pre class=link-defaults&gt; spec:html; typ...
- [content/files/en-us/web/api/background\_fetch\_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/background_fetch_api/index.md?plain=1) *(github.com)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > slug: Web/API/Background_Fetch_API · page-type: web-api-overview · status:   - experimental · browser-compat:   - api.BackgroundFetchManager ·   - api.BackgroundFetchRegistration ·   - api.BackgroundFetchRecord · spec-urls: https://<strong>...

## 📚 Platform Documentation & Specifications

- [background-fetch/index.bs at main · WICG/background-fetch](https://github.com/WICG/background-fetch/blob/main/index.bs) *(github.com)*
- [Background Fetch · Issue #149 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/149) *(github.com)*
- [Background Fetch · Issue #30 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/30) *(github.com)*
- [periodic-background-sync/index.bs at main · WICG/periodic-background-sync](https://github.com/WICG/periodic-background-sync/blob/main/index.bs) *(github.com)*
- [content/files/en-us/web/api/background\_fetch\_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/background_fetch_api/index.md?plain=1) *(github.com)*
- [GitHub - WICG/webcomponents: Web Components specifications · GitHub](https://github.com/WICG/webcomponents) *(github.com)*
- [webcomponents/proposals/css-modules-v1-explainer.md at gh-pages · WICG/webcomponents](https://github.com/WICG/webcomponents/blob/gh-pages/proposals/css-modules-v1-explainer.md) *(github.com)*
- [GitHub - WICG/webpackage: Web packaging format · GitHub](https://github.com/WICG/webpackage) *(github.com)*
- [webcomponents/proposals/html-module-spec-changes.md at gh-pages · WICG/webcomponents](https://github.com/WICG/webcomponents/blob/gh-pages/proposals/html-module-spec-changes.md) *(github.com)*
- [Tools \| Web Platform Incubator \| Community Groups \| Discover W3C groups \| W3C](https://www.w3.org/groups/cg/wicg/tools) *(w3.org)*
- [BackgroundFetchManager: fetch() method](https://developer.mozilla.org/en-US/docs/Web/API/BackgroundFetchManager/fetch) *(developer.mozilla.org)*
- [Background Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Background_Fetch_API) *(developer.mozilla.org)*
- [BackgroundFetchRegistration](https://developer.mozilla.org/en-US/docs/Web/API/BackgroundFetchRegistration) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 37 result(s) found across 7 planned queries — **22 verified relevant**
  - `"chromestatus.com/feature/6210300985606144" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"wicg.github.io/background-fetch" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"CORS enforcement for Background Fetch" API` — *Core feature API query* (0 returned)
  - `"CORS enforcement for Background Fetch" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"wicg.github" OR "fetch.spec" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CORS enforcement for Background Fetch" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CORS enforcement for Background Fetch" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 17 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6210300985606144)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6210300985606144)
- [Specification](https://wicg.github.io/background-fetch)
