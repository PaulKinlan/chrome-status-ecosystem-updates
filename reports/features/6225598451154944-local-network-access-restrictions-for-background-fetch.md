# Local Network Access restrictions for Background Fetch

> **Report Week:** 2026-W40 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Background Fetch requests now require that the service worker's origin has the necessary Local Network Access (LNA) permission to send requests to local or loopback servers.  This aligns Chromium's implementation with the intent of the Background Fetch spec, which states that such requests go through the Fetch spec and have the same security policies applied to them including, in this case, LNA checks. This prevents sites from bypassing LNA checks by using \[Background Fetch spec\](https://wicg.github.io/background-fetch/) instead of regular \[Fetch\](https://fetch.spec.whatwg.org/).  For enterprises, you can use existing LNA enterprise policies in the same way you previously would have for regular Fetch API requests from service workers: - \[LocalNetworkAccessRestrictionsTemporaryOptOut\](https://chromeenterprise.google/policies/#LocalNetworkAccessRestrictionsTemporaryOptOut) - \[LocalNetworkAccessAllowedForUrls\](https://chromeenterprise.google/policies/#LocalNetworkAccessAllowedForUrls) - \[LoopbackNetworkAllowedForUrls\](https://chromeenterprise.google/policies/#LoopbackNetworkAllowedForUrls) - \[LocalNetworkAccessPermissionsPolicyDefaultEnabled\](https://chromeenterprise.google/policies/#LocalNetworkAccessPermissionsPolicyDefaultEnabled) - \[LocalNetworkAccessIpAddressSpaceOverrides\](https://chromeenterprise.google/policies/#LocalNetworkAccessIpAddressSpaceOverrides)).

### Motivation

This fixes a security issue where Background Fetch unintentionally bypasses security policies such as Local Network Access checks.

## Ecosystem Status

- **Momentum:** High (220 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Local Network Access restrictions for Background Fetch is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "@0xdelula @BeldexCoin Love the focus on developerfirst design First builds I’d love to see 1. Masternode dashboards, rea" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [@0xdelula @BeldexCoin Love the focus on developerfirst design First builds I’d love to see 1. Masternode dashboards, rea](https://twitter.com/0xbvlgari/status/2104499700036518054) — *by @0xbvlgari, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Access Networks (@AccessNetworks) on X](https://twitter.com/accessnetworks?lang=en) — *0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG2RGIiVZVynUe6x5p2T8Ii-LvxLp5pRdbHKQU_1Sgc3fulcN5hiWHlAKR1N9-XASj_kc3hBA91_mdDD2xIt-bNXAKRgdfn2x105Xy4WzskPZx9yaFUacRuJPvyTzWPtIO_JTqtTwLw) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFA8zEmMliu0lpymBxJR-_gESRsUtFOyYyZtollEKtJLlzX8zstQtrTmr0uvD_R3zNIYGl-bbgDgA9H0p9MS5yX8F3yOy5OKe03FBFoThNtUlecRh56oi7X4BQli7kxXLca1CiocDNxKg9cGDgUWBCE1QNPYIWkgsPE07ktGKrWstShwcow) *(vertexaisearch.cloud.google.com)*
  > Microsoft Edge 154 web platform release notes (Sep. 24, 2026) - Microsoft Edge Developer documentation | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take adv...
- [winaero.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEVZzckzWCzwh3G0MvezXzvF8Ry45wn5DRDMcA6ZO8LoA7B_c3Hp1xacf1eI1mDCpq_zyoVncMxxZajFyGOe0w65x0eYgKl4D6pPJefkazDwrw5evMCWJyylk6RnuB7bSPw-QFrG8aUUyMNU3t84OdzX33JrcIuOBrfj64i_ga5nMpfURzPiKQ424_9TOoeMO7VJj_A8STypnG1HWJRL8R5) *(vertexaisearch.cloud.google.com)*
  > Chrome 154 Brings New AI Features, Stronger Network Protections, and 108 Security Fixes Skip to content Winaero At the edge of tweaking Menu Advertisement Chrome 154 Brings New AI Features, Stronger Network Protections, and 108 Security Fixes Google ...
- [webkit.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG36VmWSB4_QiWlKZBRG2lJA0x_lbe7skD_N7wVMvT7hCR5mqkq5lf9KycR4uvYePC85SS5loV76_fCoVQgDUHj9MrYYPnWXaAS8vVznUQBruluAnRJOs7Iv1L4FiY=) *(vertexaisearch.cloud.google.com)*
  > Standards Positions | WebKit WebKit Standards Positions Enable JavaScript for an interactive summary table of WebKit's standards positions. Failing that, browse the standards-positions GitHub repository directly.
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGkGVE3nlhucSKEJMWs78Ip6YrbaE-V-4vgUNHpSDbLby3tGLpvxZcjJPioL1zNnBcH_1GVzB8ouz24cSWF1sPuvTyOX20S-auR-C2Dnrj6K3fohPxiA022e5h2pvdCyKOrDwbXlV0w) *(vertexaisearch.cloud.google.com)*
  > Chrome 154 beta | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – ...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFW_raCafuScBQ-GA6RezYXhQvPCvdPA3n_uF77lstF4Q5XdZ0HnSveSlj1IjQAp9dgMNSkfn5CkF1g9uf9X--Z2OpFbFGlDQRhPW2jcFT3z5s_pDIkzbd2FHE-W4yXhlanDBSl) *(vertexaisearch.cloud.google.com)*
  > Chrome 154 | Release notes | Chrome for Developers Ir para o conteúdo principal / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภ...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEDCxuVgsYDF5YlpDj85u2_6DjFu0aijeG-a0JPHEQOKY1IkrZdElVF-PdXQPs-ofPI1UYh07MtMsYrqRC--MAtaBd8Ru64sHvzp4QEiYtmOY1XoUQdLG2-UVWalqqqXvTM2omHaMqalAe6yyVZWQ==) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chromeenterprise.google](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHSDFZ83FsZLM56N28uWwfZhO3v3ZzpWASKbgkw2FT3CY0VfDV45l2N2-NldSpKv0-6naKjKBwAZ48sEKKsHfauWrptXhcwb1SIX-UCo4NXTDxL1tLAY3VRwtj4byZwPU4pzxsBy4H77AoIwoC-1Q==) *(vertexaisearch.cloud.google.com)*
  > Explore New Chrome Enterprise Browser, Core, Premium Features Jump to content chrome enterprise chrome enterprise Get in touch Download Chrome Chrome Enterprise Release Notes Last published: __RELEASE_DATE__ The enterprise release notes are available...
- [chromeenterprise.google](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG7JM_1wWxD9z_1Z1wU0QjgDZrTIgI9Pzh8jbCvkTiTiv_omjGWdWoNzi8z8Jq92K1Ozs9rBZu8O0jcwvYG_fvUIiXA9CCuFs9PHUu7SLS11ZFiHCnZ78cnEc6bNE6kDyymF6R-yYuK0zIXX6PyAV4XjH2wfLhUau2vOdlvDassH2c8cOYLtvHXRqV2H7JjbVcf8B4=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Local Network Access restrictions for Background Fetch"** was shipped in Chromium (Chrome 154 and Microsoft Edge 154).   Under this restriction, requests dispatched via the **Background Fetch API** within a Service Work
- [Re: \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17224.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; *Link to entry on the Chrome ... by Chrome Platform Status &gt;&gt; &lt;https://chromestatus.com&gt;. &gt;&gt; &gt; -- &gt; <strong>You received this message because you are subscribed to the Google Groups &gt; &quot;blink-dev&quot;...
- [Intent to Experiment: Background Fetch](https://groups.google.com/a/chromium.org/g/blink-dev/c/z5WX-2RMulo) *(groups.google.com)*
  > https://wicg.github.io/background-fetch/ Test Website · https://backgroundfetch.com/ (code here) Summary · Background Fetch API <strong>provides a service worker based download and upload mechanism which is persistent across service worker and browse...
- [\[blink-dev\] Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17180.html) *(mail-archive.com)*
  > This prevents sites from bypassing LNA checks by using Background Fetch instead of regular Fetch. For enterprises, you can use existing Local Network Access enterprise policies in the same way you previously would have for regular Fetch API requests ...
- [\[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17193.html) *(mail-archive.com)*
  > This prevents &gt; sites from bypassing LNA checks by using Background Fetch instead of &gt; regular Fetch. For enterprises, you can use existing Local Network Access &gt; enterprise policies in the same way you previously would have for regular &gt;...
- [New permission prompt for Local Network Access \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/local-network-access) *(developer.chrome.com)*
  > Users can enable the new permission prompt by <strong>setting chrome://flags#local-network-access-check to &quot;Enabled (Blocking)&quot;.</strong> This supports triggering the Local Network Access permission prompt for requests initiated using the J...
- ["requests to the local network are not allowed" (2026): Your Ultimate Guide to Unlocking Localhost & Fixing Cross-Origin Woes](https://codegive.com/blog/requests_to_the_local_network_are_not_allowed.php) *(codegive.com)*
  > An Electron app that attempts to load file:// content and then access localhost via standard fetch would face the same browser restrictions unless Node integration is carefully used or a local server serves the content.
- [Chrome's Local Network Access: What It Breaks and How to Fix It \| Steele O'Brien Consulting](https://steeleobrienconsulting.com/blog/chrome-local-network-access) *(steeleobrienconsulting.com · 2026-03-01T00:00:00)*
  > This applies to fetch(), XMLHttpRequest, subresource loads, and — critically — iframe embeds (Chrome for Developers — Local Network Access).
- [Re: \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17209.html) *(mail-archive.com)*
  > This aligns Chromium&#x27;s implementation with the intent of the Background Fetch spec (that such requests go through the Fetch spec and have the same security policies applied to them, in this case Local Network Access checks). This prevents sites ...
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > Background Fetch requests now <strong>require that the service worker&#x27;s origin has the necessary Local Network Access (LNA) permission to send requests to local or loopback servers</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17224.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6225598451154944`)*
  > &gt;&gt; &gt;&gt; *Link to entry on the Chrome ... by Chrome Platform Status &gt;&gt; &lt;https://chromestatus.com&gt;. &gt;&gt; &gt; -- &gt; <strong>You received this message because you are subscribed to the Google Groups &gt; &quot;blink...
- [background-fetch/index.bs at main · WICG/background-fetch](https://github.com/WICG/background-fetch/blob/main/index.bs) *(github.com)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > Shortname: background-fetch · ... Beverloo, Google, beverloo@google.com · Abstract: <strong>An API to handle large uploads/downloads in the background with user visibility</strong>....
- [periodic-background-sync/index.bs at main · WICG/periodic-background-sync](https://github.com/WICG/periodic-background-sync/blob/main/index.bs) *(github.com · 2019-09-30T00:00:00)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > spec: background-fetch; urlPrefix: https://<strong>wicg.github.io/background-fetch</strong>/   type:interface; text: BackgroundFetchManager ·   type:dfn; text:background fetch · &lt;/pre&gt;  · &lt;pre class=link-defaults&gt; spec:html; typ...
- [Background Fetch · Issue #30 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/30) *(github.com · 2017-09-27T07:27:40)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > Request for Mozilla Position on an Emerging Web Specification Specification Title: Background Fetch Specification or proposal URL: https://<strong>wicg.github.io/background-fetch</strong>/ Other information An API ...
- [Background Fetch · Issue #149 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/149) *(github.com · 2023-03-15T23:42:46)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > Request for position on an emerging web specification WebKittens who can provide input: @annevk @youennf Information about the specification Title: Background Fetch URL: https://<strong>wicg.github.io/background-fetch</strong>/ GitHub repos...
- [Intent to Experiment: Background Fetch](https://groups.google.com/a/chromium.org/g/blink-dev/c/z5WX-2RMulo) *(groups.google.com)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > https://wicg.github.io/background-fetch/ Test Website · https://backgroundfetch.com/ (code here) Summary · Background Fetch API <strong>provides a service worker based download and upload mechanism which is persistent across service worker ...

## 📚 Platform Documentation & Specifications

- [background-fetch/index.bs at main · WICG/background-fetch](https://github.com/WICG/background-fetch/blob/main/index.bs) *(github.com)*
- [periodic-background-sync/index.bs at main · WICG/periodic-background-sync](https://github.com/WICG/periodic-background-sync/blob/main/index.bs) *(github.com)*
- [Background Fetch · Issue #30 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/30) *(github.com)*
- [Background Fetch · Issue #149 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/149) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 46 result(s) found across 11 planned queries — **13 verified relevant**
  - `"chromestatus.com/feature/6225598451154944" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"wicg.github.io/background-fetch" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"Local Network Access restrictions for Background Fetch" API` — *Core feature API query* (3 returned)
  - `"Local Network Access restrictions for Background Fetch" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"wicg.github" OR "fetch.spec" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Local Network Access restrictions for Background Fetch" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Local Network Access restrictions for Background Fetch" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (2 returned)
  - `"Local Network Access" "Background Fetch" (enterprise OR policy OR guide)` — *Find enterprise administrator guides and developer blogs explaining the impact of LNA enforcement on Background Fetch.* (8 returned)
  - `"backgroundFetch.fetch" ("Local Network Access" OR "Private Network Access" OR "target-address-space")` — *Search for JavaScript code snippets and API calls testing Background Fetch requests against local network addresses.* (0 returned)
  - `"Local Network Access" "Background Fetch" site:chromestatus.com OR site:groups.google.com/a/chromium.org` — *Discover official Chromium intent-to-ship threads, milestone timelines, and feature status updates.* (8 returned)
  - `"Background Fetch" ("Local Network Access" OR "Private Network Access") (bypass OR vulnerability OR WICG)` — *Locate developer and security discussions regarding the closure of the LNA bypass via Background Fetch in Chromium and WICG issue trackers.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
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
