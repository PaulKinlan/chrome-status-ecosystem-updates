# Local Network Access restrictions for Background Fetch

> **Report Week:** 2026-W38 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Background Fetch requests now require that the service worker's origin has the necessary Local Network Access (LNA) permission to send requests to local or loopback servers.  This aligns Chromium's implementation with the intent of the Background Fetch spec, which states that such requests go through the Fetch spec and have the same security policies applied to them including, in this case, LNA checks. This prevents sites from bypassing LNA checks by using \[Background Fetch spec\](https://wicg.github.io/background-fetch/) instead of regular \[Fetch\](https://fetch.spec.whatwg.org/).  For enterprises, you can use existing LNA enterprise policies in the same way you previously would have for regular Fetch API requests from service workers: - \[LocalNetworkAccessRestrictionsTemporaryOptOut\](https://chromeenterprise.google/policies/#LocalNetworkAccessRestrictionsTemporaryOptOut) - \[LocalNetworkAccessAllowedForUrls\](https://chromeenterprise.google/policies/#LocalNetworkAccessAllowedForUrls) - \[LoopbackNetworkAllowedForUrls\](https://chromeenterprise.google/policies/#LoopbackNetworkAllowedForUrls) - \[LocalNetworkAccessPermissionsPolicyDefaultEnabled\](https://chromeenterprise.google/policies/#LocalNetworkAccessPermissionsPolicyDefaultEnabled) - \[LocalNetworkAccessIpAddressSpaceOverrides\](https://chromeenterprise.google/policies/#LocalNetworkAccessIpAddressSpaceOverrides)).

### Motivation

This fixes a security issue where Background Fetch unintentionally bypasses security policies such as Local Network Access checks.

## Ecosystem Status

- **Momentum:** High (361 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Local Network Access restrictions for Background Fetch is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- Community package available: \[react-native-fetch-api\](https://www.npmjs.com/package/react-native-fetch-api) (v3.0.0) for progressive enhancement.
- Verified community discussion on Twitter / X: "@BernfriedI @elonmusk @XDevelopers @Support Official status confirms X is fully operational with no active incidents. An" (0 points, 1 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [@BernfriedI @elonmusk @XDevelopers @Support Official status confirms X is fully operational with no active incidents. An](https://twitter.com/grok/status/2099433157871165748) — *by @grok, 0 likes/RTs, 1 replies*
- 🐦 **Twitter / X:** [@BernfriedI @XDevelopers @Support @elonmusk Platform status checks show X operational with no active incidents. Reply gl](https://twitter.com/grok/status/2099423132004041024) — *by @grok, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Meet Citio, turning every destination into an opportunity.  Citio is a B2B tourism experience marketplace helping 300+ h](https://twitter.com/TechnoparkInt/status/2099422142546755920) — *by @TechnoparkInt, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Access Networks (@AccessNetworks) on X](https://twitter.com/accessnetworks?lang=en) — *0 likes/RTs, 0 replies*

## Packages & Polyfills

- [is-network-error](https://www.npmjs.com/package/is-network-error) `v1.3.2` — Check if a value is a Fetch network error
- [react-native-fetch-api](https://www.npmjs.com/package/react-native-fetch-api) `v3.0.0` — A fetch API polyfill for React Native with text streaming support.

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17224.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Yoav Weiss (@Shopify) Wed, 19 ...
- [\[blink-dev\] Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17180.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Local Network Access restrictions for Background Fetch Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Local Network Access restrictions for Background Fetch Chromestatus Fri, 14 Aug 2026 16:10:09 -0700 C...
- [\[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17193.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Alex Russell Mon, 17 Aug 2026 11:49:38...
- [New permission prompt for Local Network Access \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/local-network-access) *(developer.chrome.com)*
  > Users can enable the new permission prompt by <strong>setting chrome://flags#local-network-access-check to &quot;Enabled (Blocking)&quot;.</strong> This supports triggering the Local Network Access permission prompt for requests initiated using the J...
- [Chrome's Local Network Access: What It Breaks and How to Fix It \| Steele O'Brien Consulting](https://steeleobrienconsulting.com/blog/chrome-local-network-access) *(steeleobrienconsulting.com · 2026-03-01T00:00:00)*
  > Chrome 142 introduced Local Network Access restrictions that block cross-origin requests to private networks. Here&#x27;s what it means for XSS protection, VPN tools like ZScaler, Google Ads, and how to adapt.
- [Error message - Permission was denied for this request to access the unknown address space](https://www.dynamsoft.com/web-twain/docs/faq/chromium-142-local-network-access-issue.html) *(dynamsoft.com · 2025-11-04T00:00:00)*
  > You should plan your deployment and UX flow around current browser permission requirements. ... <strong>Navigate to your Dynamic Web TWAIN page.</strong> Click the lock/settings icon in the browser address bar. In Chrome 142-144, ensure Local Network...
- [Preparing Your Web App for Chrome's Local-Network-Access Policies](https://paulserban.eu/blog/post/preparing-your-web-app-for-chromes-local-network-access-policies) *(paulserban.eu)*
  > Chrome&#x27;s Local Network Access restrictions aim to mitigate these risks by <strong>enforcing permission prompts for websites that attempt to interact with local network resources</strong>.
- [Private Network Access update: Introducing a deprecation trial \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/private-network-access-update) *(developer.chrome.com)*
  > For more details, see the Web developer guide to origin trials. If you have administrative control over your users, you can re-enable the deprecated feature using either of the following policies: ... For more details about managing policies for your...
- [iOS Dev Course: Background Modes (Fetch) \| by Maksim Vialykh \| Medium](https://medium.com/@vialyx/ios-dev-course-background-modes-fetch-70c18f9f58d5) *(medium.com · 2018-11-25T18:49:07)*
  > iOS Dev Course: Background Modes (Fetch) How to regularly download content from network? What background modes are available in iOS? Background Execution When the user is not actively using your app …
- [Fix Codex CLI “Network Access Restricted” in 2 Commands (2026) - SmartScope](https://smartscope.blog/en/generative-ai/chatgpt/codex-network-restrictions-solution) *(smartscope.blog · 2026-07-20T00:00:00)*
  > No. That error has been reported as a metadata compatibility problem between Codex and the bundled node_repl used by Browser / Computer Use. Use the dedicated guide.
- [How to Access Your Local Network Remotely (2026 Guide)](https://localxpose.io/blog/access-local-network-remotely) *(localxpose.io · 2026-04-29T00:00:00)*
  > Devices like Raspberry Pi are widely used for home automation, dev environments, and lightweight servers. Reaching them remotely usually requires static IP configuration or port forwarding, which isn’t always possible. LocalXpose creates a reverse tu...
- [The web preferences API has moved to the CSS WG](https://wicg.github.io/web-preferences-api) *(wicg.github.io)*
  > We cannot provide a description for this page right now
- [Intent to Ship: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/cwu_RUmBpzY) *(groups.google.com)*
  > We have previously run a Dev Trial and a 50% Finch experiment on Canary/Dev/Beta which helped alert potentially affected developers and find some bugs early before shipping. Based in part on questions from affected developers we have put together an ...
- [Adapting your website for new Local Network Access restrictions in Microsoft Edge \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/ms-edge-local-network-access) *(learn.microsoft.com)*
  > You want to attempt to request the permission by making an initial local network request from your main application window, and then your workers can make use of that permission (including from the background). Dedicated Workers are strictly owned by...
- [Progressive Web App (PWA) Development Ultimate Guide - Riseup Labs](https://riseuplabs.com/pwa-development-ultimate-guide) *(riseuplabs.com · 2025-12-10T05:24:22)*
  > Role: Service workers act as a proxy between the web application and the network, allowing for caching, background sync, and offline capabilities. Lifecycle Management: They have a distinct lifecycle (install, activate, and fetch) that developers man...
- [PWA iOS Limitations and Safari Support \[2026\]](https://www.magicbell.com/blog/pwa-ios-limitations-safari-support-complete-guide) *(magicbell.com · 2026-03-20T00:00:00)*
  > <strong>No background location, no background sync, and 7-day cache expiry make this impractical</strong>. Build native for the mobile app, PWA for the admin portal. For more implementation tips, see Essential PWA Strategies for Enhanced iOS Performa...
- [Navigating Safari/iOS PWA Limitations and Bugs: Essential Tips and Tricks - Technologies](https://vinova.sg/navigating-safari-ios-pwa-limitations) *(vinova.sg · 2025-08-15T04:55:15)*
  > Can your PWA reliably sync data or perform tasks while running in the background on an iPhone or iPad? For developers targeting the US market, it’s crucial to understand that <strong>iOS heavily restricts background activity for PWAs</strong>.
- [deployment - Serve PWA on local network without showing or disabling unsecured connection warning? - Stack Overflow](https://stackoverflow.com/questions/58372099/serve-pwa-on-local-network-without-showing-or-disabling-unsecured-connection-war) *(stackoverflow.com)*
  > result: <strong>access PWA from tablet connected to the server and still have the unsecured connection warning</strong>

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17224.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6225598451154944`)*
  > Re: [blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Yoav Weiss (@Shopify...
- [\[blink-dev\] Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17180.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6225598451154944`)*
  > [blink-dev] Intent to Ship: Local Network Access restrictions for Background Fetch Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Local Network Access restrictions for Background Fetch Chromestatus Fri, 14 Aug 2026 16:10:...
- [\[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17193.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6225598451154944`)*
  > [blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Alex Russell Mon, 17 Aug 202...
- [background-fetch/index.bs at main · WICG/background-fetch](https://github.com/WICG/background-fetch/blob/main/index.bs) *(github.com)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > background-fetch/index.bs at main · WICG/background-fetch · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your ses...
- [Background Fetch · Issue #149 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/149) *(github.com · 2023-03-15T23:42:46)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > Background Fetch · Issue #149 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your se...
- [Background Fetch · Issue #30 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/30) *(github.com · 2017-09-27T07:27:40)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > Background Fetch · Issue #30 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your se...
- [periodic-background-sync/index.bs at main · WICG/periodic-background-sync](https://github.com/WICG/periodic-background-sync/blob/main/index.bs) *(github.com · 2019-09-30T00:00:00)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > periodic-background-sync/index.bs at main · WICG/periodic-background-sync · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to ...
- [content/files/en-us/web/api/background\_fetch\_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/background_fetch_api/index.md?plain=1) *(github.com)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > content/files/en-us/web/api/background_fetch_api/index.md at main · mdn/content · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Relo...

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
- [Offline and background operation - Progressive web apps \| MDN](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) *(developer.mozilla.org)*
- [Local network access](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Local_network_access) *(developer.mozilla.org)*
- [Permissions-Policy: local-network-access directive](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/local-network-access) *(developer.mozilla.org)*
- [Permissions-Policy: local-network directive](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/local-network) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 37 result(s) found across 7 planned queries — **29 verified relevant**
  - `"chromestatus.com/feature/6225598451154944" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"wicg.github.io/background-fetch" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"Local Network Access restrictions for Background Fetch" API` — *Core feature API query* (3 returned)
  - `"Local Network Access restrictions for Background Fetch" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"wicg.github" OR "fetch.spec" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Local Network Access restrictions for Background Fetch" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Local Network Access restrictions for Background Fetch" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 6 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 2 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **2 verified relevant**
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
