# Connection Allowlists

> **Report Week:** 2026-W39 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Connection Allowlists is a feature designed to provide explicit control over external endpoints by restricting connections initiated via the Fetch API or other web platform APIs from a document or worker.  The proposed implementation involves the distribution of an authorized endpoint list from the server through an HTTP response header. Prior to the establishment of any connection by the user agent on behalf of a page, the agent will evaluate the destination against this allowlist; connections to verified endpoints will be permitted, while those failing to match the entries in the list will be blocked.  More details on the proposal can be found here: https://github.com/WICG/connection-allowlists   Design doc: https://docs.google.com/document/d/1B3LERUObjVDAKBNLpdIxbk8LC96rWUn1q8vtP9pPIuA/edit?usp=sharing  Implementation Design: https://source.chromium.org/chromium/chromium/src/+/main:docs/connection\_allowlist\_design.md

### Motivation

Developers wish to have control over the resources loaded into their pages' contexts and the endpoints to which their pages can make requests. This control is necessary for several purposes, including limiting the ways in which users' data can flow through the user agent (mitigating exfiltration attacks) and ensuring control over a site’s architecture and dependencies.

Content Security Policy addresses some of this need, but does so in a way that is more granular than necessary for the most critical use cases, and with a syntax and grammar that’s complicated by the other protections CSP is used to deploy.

`Connection-Allowlist` steps back from CSP, and focuses on the single use case of controlling the explicit requests a page may initiate through Fetch and other web platform APIs (Navigations, preload, DNS Prefetch, WebRTC, Web Transport, etc) in a way that aims to be straightforward and comprehensive.

Example:
Connection-Allowlist: (response-origin "https://cdn.example" "https://*.example.:tld" \
                       "https://api.example:*"); report-to=ReportingAPIEndpoint

## Ecosystem Status

- **Momentum:** High (486 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Neutral
- **Executive Take:** Connection Allowlists is currently Enabled by default in Chrome 152. Verified ecosystem momentum is High with Partial Multi-Engine Interest standards alignment and neutral developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @mikewest: "A brief update on timing: we're now planning an initial Origin Trial starting in Chrome 147 (https://groups.google.com/a/chromium.org/g/blink-dev/c/lR..."
- Standards Activity (Mozilla): Latest discussion from @evilpie: "Suggested position: positive  #1431..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Show HN: Agent-fetch – Sandboxed HTTP client with SSRF protection for AI agents" (1 points, 0 comments).

## Standards Positions

- **WebKit:** [Connection Allowlists](https://github.com/WebKit/standards-positions/issues/583) [open]
- **Mozilla:** [Connection Allowlists](https://github.com/mozilla/standards-positions/issues/1322) [closed]
- **W3C TAG:** [Incubation: Connection Allowlists](https://github.com/w3ctag/design-reviews/issues/1173) [closed]

## Community Discussions & Social Pulse

- 💬 **Hacker News:** [Show HN: Agent-fetch – Sandboxed HTTP client with SSRF protection for AI agents](https://news.ycombinator.com/item?id=46931359) — *1 pts, 0 comments*
- 💬 **Hacker News:** [Show HN: CargoWall – eBPF Firewall for GitHub Actions](https://news.ycombinator.com/item?id=47588383) — *14 pts, 2 comments*
- 💬 **Hacker News:** [Show HN: Buildcage – Egress filtering for Docker builds (SNI-based, no MitM)](https://news.ycombinator.com/item?id=47297739) — *2 pts, 0 comments*
- 🐦 **Twitter / X:** [Traditional web security features like CSP were not built to protect against exfiltration risks that have taken become a](https://twitter.com/salchoman/status/2100601438413934993) — *by @salchoman, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Chrome 152 introduces Connection Allowlists for web security → https://t.co/buWu0ee3IT  If your site uses federated auth](https://twitter.com/ChromiumDev/status/2100266831743213727) — *by @ChromiumDev, 62 likes/RTs, 1 replies*
- 🐦 **Twitter / X:** [許可されたURLパターン以外へのあらゆる送信通信をブラウザのネットワーク層で一括遮断する "Connection Allowlists" がChrome 152より利用可能になりました。](https://twitter.com/agektmr/status/2100191946233049365) — *by @agektmr, 69 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [雑u Bot on X: "Chromeの新しいセキュリティ機能 Connection Allowlists について https://t.co/hENNUs8Evu" / X](https://x.com/matsuu_zatsu/status/1988945701506539734) — *by @matsuu_zatsu, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Twitter](https://twitter.com/ConnectionChain) — *0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Show HN: Agent-fetch – Sandboxed HTTP client with SSRF protection for AI agents](https://github.com/Parassharmaa/agent-fetch) *(github.com · 2026-02-08T04:38:40Z)*
  > GitHub - Parassharmaa/agent-fetch: Sandboxed HTTP client with SSRF protection for AI agents. Prevents DNS rebinding, blocks private IPs, and validates every connection — available as a Rust crate and npm package. · GitHub Skip to content Navigation M...
- [Show HN: CargoWall – eBPF Firewall for GitHub Actions](https://github.com/code-cargo/cargowall-action) *(github.com · 2026-03-31T15:02:39Z)*
  > GitHub - code-cargo/cargowall-action: CargoWall Action to secure your GitHub Workflows · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload ...
- [Show HN: Buildcage – Egress filtering for Docker builds (SNI-based, no MitM)](https://github.com/dash14/buildcage) *(github.com · 2026-03-08T14:43:32Z)*
  > GitHub - buildcage/docker: GitHub Action to build Docker images with outbound network access restricted to an allowlist · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in wi...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHEBCbSQiF9ZpYKbGPi-30UscCQMpAOazCpx_q70f2WYdtRVY6PJboaIAwTUKquNMIYYV_wwhAG49CZ99u-K7xbHWwWxbZgIHsJPZ8MmdZLtC4_KWcoUkrmfux4Ip50g6SVhdx6fT8P) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [report-uri.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF9_pVsPgwj_wi-TvAOB-Lyc7Z1mHEPjVk-m4dsW2O4QsNhFdIwpo3zY7DkRhUq9soJdafUxiObf_KNmcAiPLJnGqp3hXgEbKwi4NRTivAUCqDP61t3_BsaC9bh-2BggNelvkRnqljkb4IKinMifXUAVQxYjZSl2Br9BMMLpKsXDSLwWaN8fxn86F4=) *(vertexaisearch.cloud.google.com)*
  > Connection Allowlist: an egress firewall for the browser Sign in Subscribe Connection Allowlist: an egress firewall for the browser Connection Allowlist Scott Helme 01 Sep 2026 — 3 min read Until now, malicious code running in a browser has had sever...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFIN6aihfBr622LYDEKhKutKfrUg6boL12WyTNQhfs6SQKQ8QBvnyOJTHPD-X4JDkJbByHB_NXBAEGIphSEus9Tr-LQVElOWezUbyRtbv6yh9S9_dea5zR2pcRWoRnjuEI7F6U=) *(vertexaisearch.cloud.google.com)*
  > GitHub - WICG/connection-allowlists · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You signed out in another ...
- [medium.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHqhb01OIwWO-1FEqa4sdNGy40DIqbwzL2u8KdC-YCnVO86ALqmm8ZwkJSlkYLb6CNwzCqiuNI-uKbjHkHxpOowlOZNEYg4yq1NVE-i5YiyqRF9FeAQw7TXCXs1Yqj9p8IFMmkh-7ZLeC_aWbBjETgLtvM1P2GRHUNoS5m3tGQu6nUK1VKe) *(vertexaisearch.cloud.google.com)*
  > Medium Web Apps Need Network Sandboxes. Chrome’s Connection Allowlists origin… | by Roman Fedytskyi | Medium Sitemap Open in app Sign up Sign in Get app Write Search Sign up Sign in Roman Fedytskyi Engineer and product thinker with 10+ years in finte...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGlp2gqTcWY3N7Zzs62L8xLaYZsazp1EdjrlSjYO5mHdvhuqeQBm5IN-FEPz111rfMg0kP6UDLc2lbKsor8i8OlmczwQzRvxwti7G9uYbFDaG9VT6CVmLE5ll2RIQ1zzVsiw-FAt0ned7OUSKgTPS3raNM9IybKbTmcFQ==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of "Connection Allowlists"  **Connection Allowlists** is a Web Platform security mechanism (incubated within the WICG and spearheaded by Chromium contributors) designed to act as an **in-browser egress firewall**. Unlike Content Security
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFAA0E0xgyI9iZJcWCzmVxHiGR7DByirpBBV9xcFSIaQUTbvLbJ8W-eCdLrXCtwglaP88_JevcQ179wT5DiV3DOx2XRqKvDTh2y2SrKUBY8qRmsWtlX-rk9O48x9aUcYbMBScsWo4M5SDdQgzMC7ZiXyA4=) *(vertexaisearch.cloud.google.com)*
  > ### Overview of "Connection Allowlists"  **Connection Allowlists** is a Web Platform security mechanism (incubated within the WICG and spearheaded by Chromium contributors) designed to act as an **in-browser egress firewall**. Unlike Content Security
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHsh0xXMCZgOd6Oum0Boew28-mGCfke4wmbFyqtk2DNrT7RbaQLAyM_yWTiDTEfmmuTADRO6s1sveYMLHXEVFCuJ2ABjxF8oINsMjkqwtF_cE2o5Ra_GK4Gj2-44tw3BGDaXJffdP5iSIM=) *(vertexaisearch.cloud.google.com)*
  > ### Overview of "Connection Allowlists"  **Connection Allowlists** is a Web Platform security mechanism (incubated within the WICG and spearheaded by Chromium contributors) designed to act as an **in-browser egress firewall**. Unlike Content Security
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEpJ638ZDJIIQBk6O-wVf-vfqDdcStHrP6XCCaCld7Dz8v9iOUCnPcrbnLjMyIdIup51jNhdxyyWRej81Gnev9fdKck_h5QeX3erm8I6sF6PXSzYZI8vIgN6Joza23JmCydSwxh) *(vertexaisearch.cloud.google.com)*
  > ### Overview of "Connection Allowlists"  **Connection Allowlists** is a Web Platform security mechanism (incubated within the WICG and spearheaded by Chromium contributors) designed to act as an **in-browser egress firewall**. Unlike Content Security
- [scotthelme.co.uk](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGrDtDLberkVo9AiTXH3xAOAfXJbiTcdIRb0h9BPD87Fk6U8Fwgou-cuGMXfX-g_MjSs2P7n7QzElC6STgxOZJ-5QeTtIsUfyXae5eNwEyGj2EYluMBIlBN8PJaFtHrTzbioSi7U7QJN857BSZ9Cdy0I_tr-V8vUfsEFUAYLOVmZ259f9Iqmfv2SlmsRdK4) *(vertexaisearch.cloud.google.com)*
  > ### Overview of "Connection Allowlists"  **Connection Allowlists** is a Web Platform security mechanism (incubated within the WICG and spearheaded by Chromium contributors) designed to act as an **in-browser egress firewall**. Unlike Content Security
- [centralcsp.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGVQ0zAHBAAcqGhJ0XgwQN49y_MYykNsCNn2zLCNJxeAB8iHFGXKbFd3esTjgVcH58_T_tDrcLjCLhx1yo2ODGNccdxA_i5mltNS2UzItCJLtowxOrkaOUfjmd9ieMKoHycCEheylVr5POvDOrMKEYYZPNtDOfFQrnB16cjdrXJL5ZYHw4X7Z3k-VbK-w==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of "Connection Allowlists"  **Connection Allowlists** is a Web Platform security mechanism (incubated within the WICG and spearheaded by Chromium contributors) designed to act as an **in-browser egress firewall**. Unlike Content Security
- [timjohns.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE1aZcz5VtSJCa6h9tRqxg5Vg_Cd340IT6Gm_2fSGApmF4JaWmQye0an0qiG5BfLQIuSVFjnay1ZZ24lOhm98w-JLqgJd7BnUNvApSzaLwIeEbbbx6O_vB5yK8lDrjWT1fdyiJdvA==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of "Connection Allowlists"  **Connection Allowlists** is a Web Platform security mechanism (incubated within the WICG and spearheaded by Chromium contributors) designed to act as an **in-browser egress firewall**. Unlike Content Security
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEipI3PbXy6Fu_Vh-SAtTWJH7wLMTB0KVIhOsWVH_RQ_6e1Ec8lSfhCuKTH8YfmE6sOlUYdZwcnBDEM158VuUhQRaAWjFsx0M3zrWpbAqXGsXTDx6wKF6x1N5nXwYBxi3Te2Br2yfHBYDRqTwGTj_5jYHrcGqTDuvE=) *(vertexaisearch.cloud.google.com)*
  > ### Overview of "Connection Allowlists"  **Connection Allowlists** is a Web Platform security mechanism (incubated within the WICG and spearheaded by Chromium contributors) designed to act as an **in-browser egress firewall**. Unlike Content Security
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFKZNTiRUVbmi45dxxNp-MCXQGENjQLZXiSGRyAsq39t-T5aWUe9mIzYExgjMJEn6n4KXDKhm3BDAaMkg1Wp3W0r0pOkYhVagKapGHKfCYdfI10C-z1iHhnJvvgPFgNzoA0xw==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of "Connection Allowlists"  **Connection Allowlists** is a Web Platform security mechanism (incubated within the WICG and spearheaded by Chromium contributors) designed to act as an **in-browser egress firewall**. Unlike Content Security
- [Re: \[blink-dev\] Re: Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16949.html) *(mail-archive.com)*
  > Prior to the establishment &gt;&gt; of any connection by the user agent on behalf of a page, the agent will &gt;&gt; evaluate the destination against this allowlist; connections to verified &gt;&gt; endpoints will be permitted, while those failing to...
- [Connection Allowlists: Consider splitting exfiltration mitigation out of CSP. \[447954811\] - Chromium](https://issues.chromium.org/issues/447954811) *(issues.chromium.org)*
  > Explainer: https://github.com/WICG/connection-allowlists This CL is the second one in the series that <strong>implements the functionality of Connection Allowlist prototype in the content/browser and network service layers</strong>. This one does the...
- [Re: \[blink-dev\] Re: Intent to Experiment: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16085.html) *(mail-archive.com)*
  > Prior to the establishment &gt;&gt;&gt; of any connection by the user agent on behalf of a page, the agent will &gt;&gt;&gt; evaluate the destination against this allowlist; connections to verified &gt;&gt;&gt; endpoints will be permitted, while thos...
- [\[blink-dev\] Intent to Prototype: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg16801.html) *(mail-archive.com)*
  > Embedded enforcement spec changes: ... Connection Allowlists is <strong>a feature designed to provide explicit control over external endpoints by restricting connections initiated via the Fetch API or other web platform APIs from a document or worker...
- [\[blink-dev\] Re: Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16946.html) *(mail-archive.com)*
  > Prior to the establishment &gt; of any connection by the user agent on behalf of a page, the agent will &gt; evaluate the destination against this allowlist; connections to verified &gt; endpoints will be permitted, while those failing to match the e...
- [\[blink-dev\] Re: Intent to Experiment: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg15987.html) *(mail-archive.com)*
  > &gt; *Contact emails* &gt; [email protected], ... &gt; Connection Allowlists is <strong>a feature designed to provide explicit control &gt; over external endpoints by restricting connections initiated via the Fetch &gt; API or other web platform APIs...
- [\[dev-platform\] Re: Intent to prototype: Connection Allowlists](http://www.mail-archive.com/dev-platform@mozilla.org/msg01899.html) *(mail-archive.com)*
  > On Friday, September 18, 2026 at ... Connection-Allowlist header <strong>allows web developers to limit the servers &gt; a website can communicate with</strong>. This can be used to prevent data &gt; exfiltration attacks. &gt; &gt; Bug: Bug 2062159 &...
- [\[blink-dev\] Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17485.html) *(mail-archive.com)*
  > [email protected]&lt;mailto:[email ....com/chromium/src/+/main/docs/connection_allowlist_design.md Summary Connection Allowlists <strong>restrict the endpoints a document or worker may connect to</strong>....
- [Tim Johns - Blog: Connection Allowlists](https://timjohns.com/blog/connection-allowlists) *(timjohns.com · 2026-05-24T15:00:00)*
  > Connection Allowlists is <strong>a feature designed to provide explicit control over external endpoints by restricting connections initiated using the Fetch API or other web platform APIs from a document or worker</strong>.
- [Connection Allowlists origin trial: Secure your web application's network \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/connection-allowlists-origin-trial) *(developer.chrome.com · 2026-04-16T00:00:00)*
  > Network-level focus: Connection Allowlists <strong>focus on the destination of network connections, rather than how a resource is loaded or executed</strong>. Comprehensive coverage: It covers navigations, redirects, and various web platform APIs, fo...
- [FedCM: Allow network requests to your Identity Provider with Connection Allowlist \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/fedcm-connection-allowlist) *(developer.chrome.com · 2026-08-28T03:20:03)*
  > Chrome 152 introduces Connection Allowlists, <strong>a mechanism that lets you specify the exact URL patterns permitted for network communication on your site</strong>.
- [Connection Allowlists](https://chromestatus.com/feature/5175745573945344?gate=5415518666358784) *(chromestatus.com · 2026-02-02T00:00:00)*
  > We cannot provide a description for this page right now
- [\[Connection-Allowlist\] Enforce network restrictions on navigations \[chromium/src : main\]](https://groups.google.com/a/chromium.org/g/network-service-reviews/c/Bn-75Wa-KbQ) *(groups.google.com)*
  > Line 2876, Patchset 11: // connection allowlist: check whether navigation to the url is allowed.
- [Chromeの新しいセキュリティ機能 Connection Allowlists について - ASnoKaze blog](https://asnokaze.hatenablog.com/entry/2025/11/10/002835) *(asnokaze.hatenablog.com · 2025-11-10T00:00:00)*
  > Connection-Allowlistヘッダで通信可能なURLリストを指定する ... CSPよりも単純な構文で、外部サイトと通信を制限できるようにします。これによってユーザデータが外部に漏れることを制限します。防御としては万能なわけではなく、著者としても意図的にスコープを絞っていると述べています。 · またReporting API用のReport-Onlyも定義されています
- [What PWA Can Do Today](https://whatpwacando.today) *(whatpwacando.today)*
  > The NetworkInformation API provides information about the connection of a device, allowing web apps to adapt functionality based on network quality. ... Speech synthesis provides text-to-speech and allows programs to read out their text content. ... ...
- [Connection Allowlist: a network firewall, built into the browser](https://scotthelme.co.uk/connection-allowlist-a-network-firewall-built-into-the-browser) *(scotthelme.co.uk · 2026-07-08T16:11:31)*
  > Connection Allowlist is <strong>a new browser security mechanism that lets a document declare, up front, the exact set of destinations it&#x27;s permitted to open network connections to</strong>. Anything not on the list is blocked by the browser bef...
- [\[blink-dev\] Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16875.html) *(mail-archive.com)*
  > Example: Connection-Allowlist: (response-origin &quot;https://cdn.example&quot; &quot;https://*.example.:tld&quot; \ &quot;https://api.example:*&quot;); report-to=ReportingAPIEndpoint Initial public proposal https://github.com/WICG/proposals/issues/2...
- [\[dev-platform\] Intent to prototype: Connection Allowlists](http://www.mail-archive.com/dev-platform@mozilla.org/msg01898.html) *(mail-archive.com)*
  > Summary: The Connection-Allowlist header <strong>allows web developers to limit the servers a website can communicate with</strong>. This can be used to prevent data exfiltration attacks · Bug: Bug 2062159 &lt;https://bugzilla.mozilla.org/show_bug.cg...
- [Re: \[blink-dev\] Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16890.html) *(mail-archive.com)*
  > *Chromium Trial Name* ConnectionAllowlist *Origin Trial documentation link* https://developer.chrome.com/blog/connection-allowlists-origin-trial *WebFeature UseCounter name* kConnectionAllowlist *Risks* *Interoperability and Compatibility* This is a ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Add \`local.adguard.org\` to \`Connection Allowlists\` response header automatically · Issue #2096 · AdguardTeam/CoreLibs](https://github.com/AdguardTeam/CoreLibs/issues/2096) *(github.com · 2026-08-23T18:15:32)* *(Cites: `https://chromestatus.com/feature/5175745573945344`)*
  > Chrome added the <strong>Connection-Allowlist response header</strong> - https://chromestatus.com/feature/5175745573945344 As far as I understand, it works similarly to Content Security Policy - https://github.com/WICG/connection-allowlists...
- [Re: \[blink-dev\] Re: Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16949.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/connection-allowlists`)*
  > Prior to the establishment &gt;&gt; of any connection by the user agent on behalf of a page, the agent will &gt;&gt; evaluate the destination against this allowlist; connections to verified &gt;&gt; endpoints will be permitted, while those ...
- [Connection Allowlists: Consider splitting exfiltration mitigation out of CSP. \[447954811\] - Chromium](https://issues.chromium.org/issues/447954811) *(issues.chromium.org)* *(Cites: `https://github.com/WICG/connection-allowlists`)*
  > Explainer: https://github.com/WICG/connection-allowlists This CL is the second one in the series that <strong>implements the functionality of Connection Allowlist prototype in the content/browser and network service layers</strong>. This on...
- [Re: \[blink-dev\] Re: Intent to Experiment: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16085.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/connection-allowlists`)*
  > Prior to the establishment &gt;&gt;&gt; of any connection by the user agent on behalf of a page, the agent will &gt;&gt;&gt; evaluate the destination against this allowlist; connections to verified &gt;&gt;&gt; endpoints will be permitted, ...
- [\[blink-dev\] Intent to Prototype: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg16801.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/connection-allowlists`)*
  > Embedded enforcement spec changes: ... Connection Allowlists is <strong>a feature designed to provide explicit control over external endpoints by restricting connections initiated via the Fetch API or other web platform APIs from a document...
- [\[blink-dev\] Re: Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16946.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/connection-allowlists`)*
  > Prior to the establishment &gt; of any connection by the user agent on behalf of a page, the agent will &gt; evaluate the destination against this allowlist; connections to verified &gt; endpoints will be permitted, while those failing to m...
- [\[blink-dev\] Re: Intent to Experiment: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg15987.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/connection-allowlists`)*
  > &gt; *Contact emails* &gt; [email protected], ... &gt; Connection Allowlists is <strong>a feature designed to provide explicit control &gt; over external endpoints by restricting connections initiated via the Fetch &gt; API or other web pla...
- [\[dev-platform\] Re: Intent to prototype: Connection Allowlists](http://www.mail-archive.com/dev-platform@mozilla.org/msg01899.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/connection-allowlists`)*
  > On Friday, September 18, 2026 at ... Connection-Allowlist header <strong>allows web developers to limit the servers &gt; a website can communicate with</strong>. This can be used to prevent data &gt; exfiltration attacks. &gt; &gt; Bug: Bug...
- [\[blink-dev\] Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17485.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/connection-allowlists`)*
  > [email protected]&lt;mailto:[email ....com/chromium/src/+/main/docs/connection_allowlist_design.md Summary Connection Allowlists <strong>restrict the endpoints a document or worker may connect to</strong>....

## 📚 Platform Documentation & Specifications

- [Add \`local.adguard.org\` to \`Connection Allowlists\` response header automatically · Issue #2096 · AdguardTeam/CoreLibs](https://github.com/AdguardTeam/CoreLibs/issues/2096) *(github.com)*
- [GitHub - krispo/git-edit: Edit HTML web pages in browser and commit the changes to Github immediately.](https://github.com/krispo/git-edit) *(github.com)*
- [Browser pairing, CORS allowlists and authenticated SSE · Issue #25 · dflippojr/agent-harness](https://github.com/dflippojr/agent-harness/issues/25) *(github.com)*
- [Content-Security-Policy (CSP) header - HTTP - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 54 result(s) found across 12 planned queries — **23 verified relevant**
  - `"chromestatus.com/feature/5175745573945344" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/WICG/connection-allowlists" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (6 returned)
  - `"wicg.github.io/connection-allowlists" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Connection Allowlists" API` — *Core feature API query* (7 returned)
  - `"Connection Allowlists" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"connection-allowlist" OR "github.com" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Connection Allowlists" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Connection Allowlists" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
  - `"Connection-Allowlist" header (guide OR explainer OR "data exfiltration")` — *Finds developer-oriented articles, guides, and explainers detailing how to use the Connection-Allowlist header to prevent data exfiltration.* (5 returned)
  - `"Connection-Allowlist:" ("response-origin" OR "report-to")` — *Locates concrete HTTP header syntax definitions, Structured Fields usage, and configuration code examples.* (6 returned)
  - `"Connection Allowlists" OR "Connection-Allowlist" ("Intent to Prototype" OR chromestatus OR "standards-positions")` — *Tracks browser vendor signals, Chrome Intent announcements, WebKit/Mozilla standards positions, and platform rollout status.* (8 returned)
  - `"Connection-Allowlist" ("connect-src" OR CSP OR "Content Security Policy") (Hacker News OR Reddit OR discussion)` — *Surfaces developer reactions, debates, and community critiques comparing Connection Allowlists to existing CSP connect-src directives.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **13 verified relevant**
- **Twitter / X API v2:** *found 4 tweet(s)*
- **Dev.to Community Blogs:** 4 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 4 result(s) found — **3 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 5 result(s) found — **5 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 256 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 11 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5175745573945344)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5175745573945344)
- [Specification](https://wicg.github.io/connection-allowlists)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/447954811)
