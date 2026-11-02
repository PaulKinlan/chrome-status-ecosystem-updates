# Local Network Access restrictions for Background Fetch

> **Report Week:** 2026-W45 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Background Fetch requests now require that the service worker's origin has the necessary Local Network Access (LNA) permission to send requests to local or loopback servers.  This aligns Chromium's implementation with the intent of the Background Fetch spec, which states that such requests go through the Fetch spec and have the same security policies applied to them including, in this case, LNA checks. This prevents sites from bypassing LNA checks by using \[Background Fetch spec\](https://wicg.github.io/background-fetch/) instead of regular \[Fetch\](https://fetch.spec.whatwg.org/).  For enterprises, you can use existing LNA enterprise policies in the same way you previously would have for regular Fetch API requests from service workers: - \[LocalNetworkAccessRestrictionsTemporaryOptOut\](https://chromeenterprise.google/policies/#LocalNetworkAccessRestrictionsTemporaryOptOut) - \[LocalNetworkAccessAllowedForUrls\](https://chromeenterprise.google/policies/#LocalNetworkAccessAllowedForUrls) - \[LoopbackNetworkAllowedForUrls\](https://chromeenterprise.google/policies/#LoopbackNetworkAllowedForUrls) - \[LocalNetworkAccessPermissionsPolicyDefaultEnabled\](https://chromeenterprise.google/policies/#LocalNetworkAccessPermissionsPolicyDefaultEnabled) - \[LocalNetworkAccessIpAddressSpaceOverrides\](https://chromeenterprise.google/policies/#LocalNetworkAccessIpAddressSpaceOverrides)).

### Motivation

This fixes a security issue where Background Fetch unintentionally bypasses security policies such as Local Network Access checks.

## Ecosystem Status

- **Momentum:** Moderate (+70 points since 2026-10-12; footprint 160 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Shipped in Chromium 154, this update closes a security bypass by subjecting Background Fetch requests initiated from service workers to the same Local Network Access (LNA) checks as standard fetch requests. While the Background Fetch API itself remains Chromium-only, closing this loophole harmonizes worker networking with the broader cross-engine drive to protect private and loopback networks from public origin abuse. Developer and security reception is generally supportive of the hardened attack surface, even though it adds architectural friction for legitimate intranet and companion daemon use cases.

### Recommendations
- Actionable Advice: Web teams targeting local or loopback services must explicitly query and secure user permission—such as 'local-network' or 'loopback-network'—from an active document context before delegating downloads to Background Fetch in a service worker. Enterprise administrators managing internal deployments facing regressions should deploy temporary management policies like LocalNetworkAccessAllowedForUrls while transitioning endpoints to compliant secure contexts.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @christhompson: "We aren't sure about venue yet but it has been on my mind some. Some parts will just be merged into the various relevant specifications, but there def..."
- Standards Activity (Mozilla): Latest discussion from @dveditz: "We're presumably "positive" on this since we've implemented most of it and enabled it on Nightly. What are the formal steps needed at this point?..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Request for Position: Local Network Access](https://github.com/WebKit/standards-positions/issues/520) [open]
- **Mozilla:** [Local Network Access](https://github.com/mozilla/standards-positions/issues/1260) [open]

## Web-features Group

*group-level data: web-features [`local-network-access`](https://webstatus.dev/features/local-network-access), shared with 7 other ChromeStatus features*

- Results of the web-features group `local-network-access` on [wpt.fyi](https://wpt.fyi/results?q=feature:local-network-access) (webstatus.dev has no pass rates for it)

## 📰 Ecosystem Blogs & Articles

- [Chrome 154  \|  Release notes  \|  Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > In \*\*Chrome 154\*\*, Chromium introduced \*\*Local Network Access (LNA) restrictions for Background Fetch\*\*
- [appspot.com](https://cr-status.appspot.com/feature/6210300985606144) *(cr-status.appspot.com)*
  > Previously, Background Fetch tasks in Chromium were processed through internal download/navigation machinery, which inadvertently allowed web applications to bypass LNA permission prompts and CORS checks when querying local IP ranges or loopback addr...
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > With this change, Background Fetch requests initiated from Service Workers are routed through standard Fetch specification security checks \*\*Origin Permission Required:\*\* If a public web origin initiates a Background Fetch targeting private network a...
- [New permission prompt for Local Network Access  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/local-network-access) *(developer.chrome.com)*
  > \*\*Origin Permission Required:\*\* If a public web origin initiates a Background Fetch targeting private network addresses (e.g., \`10.0.0.0/8\`, \`192.168.0.0/16\`) or loopback interfaces (e.g., \`127.0.0.1\`, \`localhost\`), the origin must hold explicit user...
- [uillinois.edu](https://help.uillinois.edu/TDClient/37/uic/KB/Article/2993/How-do-I-edit-Google-Chrome-Local-Network-Access-Permissions) *(help.uillinois.edu)*
  > \*\*Impacted Use Cases:\*\* Web applications that communicate with desktop helper daemons (such as hardware wallets, 3D printer drivers, local Plex/media servers, or Box/Dropbox desktop link utilities) via Background Fetch will see silent network failure...
- [chrome.com](https://developer.chrome.com/blog/new-in-devtools-136) *(developer.chrome.com)*
  > \*\*DevTools Diagnostics:\*\* Updates in Chrome DevTools now surface explicit LNA CORS and permission errors directly in the Network and Issues tabs, allowing engineers to identify blocked Background Fetch calls
- [microsoft.com](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/localnetworkaccessrestrictionsenabled) *(learn.microsoft.com)*
  > Administrators managing internal enterprise tooling or corporate kiosks that rely on Background Fetch to update internal caches from local subnet servers are advised to deploy \`LocalNetworkAccessAllowedForUrls\` to bypass prompts across managed fleets
- [Re: \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17209.html) *(mail-archive.com)*
  > &lt;strong&gt;We considered completely removing the ability for Background Fetch to make local network requests&lt;/strong&gt;, which would be more disruptive. Treating Background Fetch requests the same as fetch() calls from a service worker context was deemed ...
- [\[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17193.html) *(mail-archive.com)*
  > We considered &gt; &lt;strong&gt;completely removing the ability for Background Fetch to make local network &gt; requests&lt;/strong&gt;, which would be more disruptive. Treating Background Fetch &gt; requests the same as fetch() calls from a service worker cont...
- [\[blink-dev\] Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17180.html) *(mail-archive.com)*
  > &lt;strong&gt;We considered completely removing the ability for Background Fetch to make local network requests&lt;/strong&gt;, which would be more disruptive. Treating Background Fetch requests the same as fetch() calls from a service worker context was deemed ...
- [Re: \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17224.html) *(mail-archive.com)*
  > Treating Background Fetch &gt;&gt; requests the same as fetch() calls from a service worker context was deemed &gt;&gt; an appropriate middle ground. &gt;&gt; &gt;&gt; \*Gecko\*: Shipped/Shipping ( &gt;&gt; https://github.com/mozilla/standards-position...

## 📚 Platform Documentation & Specifications

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Local_network_access) *(developer.mozilla.org)*
- [edge-developer/microsoft-edge/web-platform/release-notes/154.md at main · MicrosoftDocs/edge-developer · GitHub](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/154.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 53 result(s) found across 11 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/6225598451154944" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"wicg.github.io/background-fetch" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Local Network Access restrictions for Background Fetch" API` — *Core feature API query* (5 returned)
  - `"Local Network Access restrictions for Background Fetch" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"wicg.github" OR "fetch.spec" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Local Network Access restrictions for Background Fetch" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Local Network Access restrictions for Background Fetch" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
  - `"Background Fetch" "Local Network Access" OR "private network access" service worker` — *Developer guides and technical blog posts explaining how Local Network Access security rules affect Background Fetch requests in service workers.* (8 returned)
  - `"backgroundFetch.fetch" "local-network-access" OR "LocalNetworkAccessAllowedForUrls"` — *Implementation examples and enterprise policy configurations for running Background Fetch against local and loopback endpoints.* (8 returned)
  - `"Local Network Access" "Background Fetch" site:chromestatus.com OR site:groups.google.com/a/chromium.org` — *Chromium intent-to-ship threads, specification alignment updates, and platform adoption signals.* (8 returned)
  - `"Background Fetch" ("Local Network Access" OR LNA) site:github.com/WICG/background-fetch OR site:github.com/whatwg/fetch` — *Standardization discussions and issue tracker debates addressing security bypass mitigations between Fetch and Background Fetch specs.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 4 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 2 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "local-network-access", shared with 7 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "local-network-access": no stable pass rate for Chrome yet*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 8 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6225598451154944)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6225598451154944)
- [Specification](https://wicg.github.io/background-fetch)
- [Chromium Tracking Bug](https://crbug.com/455486148)
