# Local Network Access restrictions for Background Fetch

> **Report Week:** 2026-W39 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Background Fetch requests now require that the service worker's origin has the necessary Local Network Access (LNA) permission to send requests to local or loopback servers.  This aligns Chromium's implementation with the intent of the Background Fetch spec, which states that such requests go through the Fetch spec and have the same security policies applied to them including, in this case, LNA checks. This prevents sites from bypassing LNA checks by using \[Background Fetch spec\](https://wicg.github.io/background-fetch/) instead of regular \[Fetch\](https://fetch.spec.whatwg.org/).  For enterprises, you can use existing LNA enterprise policies in the same way you previously would have for regular Fetch API requests from service workers: - \[LocalNetworkAccessRestrictionsTemporaryOptOut\](https://chromeenterprise.google/policies/#LocalNetworkAccessRestrictionsTemporaryOptOut) - \[LocalNetworkAccessAllowedForUrls\](https://chromeenterprise.google/policies/#LocalNetworkAccessAllowedForUrls) - \[LoopbackNetworkAllowedForUrls\](https://chromeenterprise.google/policies/#LoopbackNetworkAllowedForUrls) - \[LocalNetworkAccessPermissionsPolicyDefaultEnabled\](https://chromeenterprise.google/policies/#LocalNetworkAccessPermissionsPolicyDefaultEnabled) - \[LocalNetworkAccessIpAddressSpaceOverrides\](https://chromeenterprise.google/policies/#LocalNetworkAccessIpAddressSpaceOverrides)).

### Motivation

This fixes a security issue where Background Fetch unintentionally bypasses security policies such as Local Network Access checks.

## Ecosystem Status

- **Momentum:** High (230 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Chrome 154 resolves a critical architectural inconsistency by subjecting Background Fetch requests to Local Network Access (LNA) security checks, preventing origins from evading local and loopback network protections. Background Fetch previously routed traffic through browser download and navigation pipelines rather than standard Fetch infrastructure, creating an unintended bypass around cross-origin and private network boundaries. Because Background Fetch is implemented exclusively in Chromium-based browsers, this hardening step brings the engine's internal networking into compliance with the WICG specification rather than establishing cross-browser interop.

### Recommendations
- Actionable Advice: Audit your service workers to ensure any Background Fetch jobs querying private IP spaces or loopback endpoints explicitly request LNA permission and operate strictly within secure contexts. For managed enterprise applications that orchestrate on-premise hardware via Background Fetch, deploy administrative policies like \`LocalNetworkAccessAllowedForUrls\` to prevent automated workflow breakage.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHzQomXrx8qCCvQvdNxAdFNJ-J14SYzj4k_jBBU4WN-UZsx9LS1TwiVa5heRM00TJMzFMk5s0tWr-1WDp_6InFzAqQiXajAP68vTNNjFdngYZqgYpS4PPHH4TEYtHFryEuHqHE-AAVy5TM4gQW5dvCDmfg1QzGAawq6pWgk8xd9fPXBuHGJ) *(vertexaisearch.cloud.google.com)*
  > Microsoft Edge 154 web platform release notes (Sep. 2026) - Microsoft Edge Developer documentation | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take advanta...
- [chromeenterprise.google](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEvTh0ERyuFNlwXX6T0mAbS_dJqJAzWoXInDXiFXCpvAbVIyG2Q5-aKVUzvqYeWyrquLcF7ym5cvDQi0SZGfAGAJ9LEBdkxBKm9IO6maOseAeRMB0cs9D7cxCRHKp8rUF0q3twpriOUCkwFVEzpJw==) *(vertexaisearch.cloud.google.com)*
  > Explore New Chrome Enterprise Browser, Core, Premium Features Jump to content chrome enterprise chrome enterprise Get in touch Download Chrome Chrome Enterprise Release Notes Last published: __RELEASE_DATE__ The enterprise release notes are available...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG4Pih9n1PyZYitGsgKMILCiJ2-sEGxBvfWNmlyy1bbmoHbvt4bH8tRnpaHWmz-Qb050Mz2Q8K0hWpnZW1-O5tTNBGUSFz3rpm7UrsFlgX6gyOYRnXPmwcP_VPNCwoa__D63b3s8KyN) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF6vtQdevG1x5A7AxvHWMMXmZ0217R7jxbpaCCOTtL2u4G91L6tj6IrgLARexy6NXwxT8XIQMOLnzWewb24So2MCOe21qwAZnudmwmbFTMG5KaStmXFGPgwBhE__wUI2Y_LrKFQ3AyO) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGy6cNlb6UPo6Wbt-Q2pYlsBeJPHyLlSdJwDZfBTejp0f8lFZVcollFz3odgUZLqewdCNT2zSpyV8nbV1md7uXdgbQPCkNiyLgZkXNe2yTL1nwb-lhluU64CuBRu0c0_OrKgSIDYjxe) *(vertexaisearch.cloud.google.com)*
  > Chrome 154 베타 | Blog | Chrome for Developers 기본 콘텐츠로 건너뛰기 / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHzCBM8Q0sBL56tZum4Gia7u-FeWymMqkSVJnfWKC8P7DR9rNIrA8N9B59YDToohQR_PAaeQdB-_BFL4qYDQMWEXUXt9tRR_PKvVV98H9MbWIc2CS5_dSmePyrr0Q==) *(vertexaisearch.cloud.google.com)*
  > Chrome 154 Release Notes - Chrome Platform Status Chrome 154 Release Notes Preview Network / Connectivity Add options bag to WebSocket constructor # Link copied! Add support for passing an option bag (WebSocketInit dictionary) as the second argument ...
- [chromeenterprise.google](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFNB9xXrp0-twWeQHOETZyRJ7kagy2se02Xn-axFILykPoc2Bk7cg1RXimSQlPGIiaVEnhOxU1BMLD4PNwFhmc67Co7xvHeI1OhUayTdq3DbpxyW5s7nQUujc0jTUsmCuwsdCB5fJqpCNpbrE_e5ug2vUiHQGhECF21hq7D9c0UrAO251ergW-jDmD_cK0cIJGpN-A=) *(vertexaisearch.cloud.google.com)*
  > LocalNetworkAccessRestrictionsTemporaryOptOut: Specifies whether to (temporarily) opt out of Local Network Access restrictions | Chrome Enterprise chrome enterprise Jump to Content chrome enterprise Get in touch Download Chrome Get advanced security ...
- [Re: \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17224.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Yoav Weiss (@Shopify) Wed, 19 ...
- [\[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17193.html) *(mail-archive.com)*
  > &gt; &gt; *Link to entry on the Chrome ... generated by Chrome Platform Status &gt; &lt;https://chromestatus.com&gt;. &gt; -- <strong>You received this message because you are subscribed to the Google Groups &quot;blink-dev&quot; group</strong>....
- [Intent to Experiment: Background Fetch](https://groups.google.com/a/chromium.org/g/blink-dev/c/z5WX-2RMulo) *(groups.google.com)*
  > https://wicg.github.io/background-fetch/ Test Website · https://backgroundfetch.com/ (code here) Summary · Background Fetch API <strong>provides a service worker based download and upload mechanism which is persistent across service worker and browse...
- [\[blink-dev\] Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17180.html) *(mail-archive.com)*
  > This prevents sites from bypassing LNA checks by using Background Fetch instead of regular Fetch. For enterprises, you can use existing Local Network Access enterprise policies in the same way you previously would have for regular Fetch API requests ...
- [New permission prompt for Local Network Access \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/local-network-access) *(developer.chrome.com)*
  > Users can enable the new permission prompt by <strong>setting chrome://flags#local-network-access-check to &quot;Enabled (Blocking)&quot;.</strong> This supports triggering the Local Network Access permission prompt for requests initiated using the J...
- ["requests to the local network are not allowed" (2026): Your Ultimate Guide to Unlocking Localhost & Fixing Cross-Origin Woes](https://codegive.com/blog/requests_to_the_local_network_are_not_allowed.php) *(codegive.com)*
  > An Electron app that attempts to load file:// content and then access localhost via standard fetch would face the same browser restrictions unless Node integration is carefully used or a local server serves the content.
- [Chrome's Local Network Access: What It Breaks and How to Fix It \| Steele O'Brien Consulting](https://steeleobrienconsulting.com/blog/chrome-local-network-access) *(steeleobrienconsulting.com · 2026-03-01T00:00:00)*
  > Chrome 142 introduced Local Network Access restrictions that block cross-origin requests to private networks. Here&#x27;s what it means for XSS protection, VPN tools like ZScaler, Google Ads, and how to adapt.
- [Preparing Your Web App for Chrome's Local-Network-Access Policies \| Paul Serban](https://paulserban.eu/blog/post/preparing-your-web-app-for-chromes-local-network-access-policies) *(paulserban.eu · 2026-02-28T00:00:00)*
  > Chrome&#x27;s Local Network Access restrictions aim to mitigate these risks by <strong>enforcing permission prompts for websites that attempt to interact with local network resources</strong>.
- [iOS Dev Course: Background Modes (Fetch) \| by Maksim Vialykh \| Medium](https://medium.com/@vialyx/ios-dev-course-background-modes-fetch-70c18f9f58d5) *(medium.com · 2018-11-25T18:49:07)*
  > iOS Dev Course: Background Modes (Fetch) How to regularly download content from network? What background modes are available in iOS? Background Execution When the user is not actively using your app …

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17224.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6225598451154944`)*
  > Re: [blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Yoav Weiss (@Shopify...
- [\[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17193.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6225598451154944`)*
  > &gt; &gt; *Link to entry on the Chrome ... generated by Chrome Platform Status &gt; &lt;https://chromestatus.com&gt;. &gt; -- <strong>You received this message because you are subscribed to the Google Groups &quot;blink-dev&quot; group</str...
- [background-fetch/index.bs at main · WICG/background-fetch](https://github.com/WICG/background-fetch/blob/main/index.bs) *(github.com)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > Shortname: background-fetch · ... Beverloo, Google, beverloo@google.com · Abstract: <strong>An API to handle large uploads/downloads in the background with user visibility</strong>....
- [periodic-background-sync/index.bs at main · WICG/periodic-background-sync](https://github.com/WICG/periodic-background-sync/blob/main/index.bs) *(github.com · 2019-09-30T00:00:00)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > spec: background-fetch; urlPrefix: https://<strong>wicg.github.io/background-fetch</strong>/   type:interface; text: BackgroundFetchManager ·   type:dfn; text:background fetch · &lt;/pre&gt;  · &lt;pre class=link-defaults&gt; spec:html; typ...
- [Background Fetch · Issue #30 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/30) *(github.com · 2017-09-27T07:27:40)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > Request for Mozilla Position on an Emerging Web Specification Specification Title: Background Fetch Specification or proposal URL: https://<strong>wicg.github.io/background-fetch</strong>/ Other information An API to handle large uploads/do...
- [Background Fetch · Issue #149 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/149) *(github.com · 2023-03-15T23:42:46)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > Request for position on an emerging web specification WebKittens who can provide input: @annevk @youennf Information about the specification Title: Background Fetch URL: https://<strong>wicg.github.io/background-fetch</strong>/ GitHub repos...
- [Intent to Experiment: Background Fetch](https://groups.google.com/a/chromium.org/g/blink-dev/c/z5WX-2RMulo) *(groups.google.com)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > https://wicg.github.io/background-fetch/ Test Website · https://backgroundfetch.com/ (code here) Summary · Background Fetch API <strong>provides a service worker based download and upload mechanism which is persistent across service worker ...

## 📚 Platform Documentation & Specifications

- [background-fetch/index.bs at main · WICG/background-fetch](https://github.com/WICG/background-fetch/blob/main/index.bs) *(github.com)*
- [periodic-background-sync/index.bs at main · WICG/periodic-background-sync](https://github.com/WICG/periodic-background-sync/blob/main/index.bs) *(github.com)*
- [Background Fetch · Issue #30 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/30) *(github.com)*
- [Background Fetch · Issue #149 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/149) *(github.com)*
- [Local network access](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Local_network_access) *(developer.mozilla.org)*
- [Permissions-Policy: local-network-access directive](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/local-network-access) *(developer.mozilla.org)*
- [Permissions-Policy: local-network directive](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/local-network) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 39 result(s) found across 7 planned queries — **13 verified relevant**
  - `"chromestatus.com/feature/6225598451154944" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"wicg.github.io/background-fetch" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"Local Network Access restrictions for Background Fetch" API` — *Core feature API query* (3 returned)
  - `"Local Network Access restrictions for Background Fetch" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"wicg.github" OR "fetch.spec" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Local Network Access restrictions for Background Fetch" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Local Network Access restrictions for Background Fetch" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
- **Google Search Grounding (gemini-3.8-flash):** 7 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 5 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 2 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 17 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6225598451154944)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6225598451154944)
- [Specification](https://wicg.github.io/background-fetch)
- [Chromium Tracking Bug](https://crbug.com/455486148)
