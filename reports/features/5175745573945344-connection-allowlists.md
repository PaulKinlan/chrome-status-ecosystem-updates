# Connection Allowlists

> **Report Week:** 2026-W40 | **Milestone:** Chrome 152 | **Category:** Enabled by default

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

- **Momentum:** High (565 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Connection Allowlists introduces a dedicated, URLPattern-based egress network sandbox (\`Connection-Allowlist\`) that restricts outbound connections across Fetch, WebRTC, WebTransport, and FedCM at the network layer. Chrome 152 enabled the feature by default, positioning it as a streamlined, comprehensive alternative to CSP's fragmented and overloaded \`connect-src\` directive. The feature is currently at 'Limited Availability' Baseline status while active implementation proceeds in Gecko and standards consensus matures.

### Recommendations
- Actionable Advice: Deploy \`Connection-Allowlist-Report-Only\` first alongside the Reporting API to audit egress traffic and verify endpoints—including third-party auth like FedCM—before enforcing hard blocks. Because unsupported browsers safely ignore the HTTP header, teams handling sensitive user data can adopt it as progressive network-level hardening today.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @mikewest: "A brief update on timing: we're now planning an initial Origin Trial starting in Chrome 147 (https://groups.google.com/a/chromium.org/g/blink-dev/c/lR..."
- Standards Activity (Mozilla): Latest discussion from @evilpie: "Suggested position: positive  #1431..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "許可されたURLパターン以外へのあらゆる送信通信をブラウザのネットワーク層で一括遮断する "Connection Allowlists" がChrome 152より利用可能になりました。" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [Connection Allowlists](https://github.com/WebKit/standards-positions/issues/583) [open]
- **Mozilla:** [Connection Allowlists](https://github.com/mozilla/standards-positions/issues/1322) [closed]
- **W3C TAG:** [Incubation: Connection Allowlists](https://github.com/w3ctag/design-reviews/issues/1173) [closed]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [許可されたURLパターン以外へのあらゆる送信通信をブラウザのネットワーク層で一括遮断する "Connection Allowlists" がChrome 152より利用可能になりました。](https://twitter.com/MekaMiners/status/2103587154089897985) — *by @MekaMiners, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [雑u Bot on X: "Chromeの新しいセキュリティ機能 Connection Allowlists について https://t.co/hENNUs8Evu" / X](https://x.com/matsuu_zatsu/status/1988945701506539734) — *by @matsuu_zatsu, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Show HN: Agent-fetch – Sandboxed HTTP client with SSRF protection for AI agents](https://github.com/Parassharmaa/agent-fetch) *(github.com · 2026-02-08T04:38:40Z)*
  > GitHub - Parassharmaa/agent-fetch: Sandboxed HTTP client with SSRF protection for AI agents. Prevents DNS rebinding, blocks private IPs, and validates every connection — available as a Rust crate and npm package. · GitHub Skip to content Navigation M...
- [Show HN: CargoWall – eBPF Firewall for GitHub Actions](https://github.com/code-cargo/cargowall-action) *(github.com · 2026-03-31T15:02:39Z)*
  > GitHub - code-cargo/cargowall-action: CargoWall Action to secure your GitHub Workflows · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload ...
- [Show HN: Buildcage – Egress filtering for Docker builds (SNI-based, no MitM)](https://github.com/dash14/buildcage) *(github.com · 2026-03-08T14:43:32Z)*
  > GitHub - buildcage/docker: GitHub Action to build Docker images with outbound network access restricted to an allowlist · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in wi...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEYp5eOOgm8vEsgu0VxhsP52_9fPozCEr5GCO9ikTnZqjyQmSfV_r6CuEtQngeDyjkR7mNuT-3J-80qDLKXuX6A_r7ahRW7Algmv_E9l4qIm9OIirnjFGYDTefzW6rxzXBls6_1-GpKylQtGdXCbXlKXyazoKwekCQo) *(vertexaisearch.cloud.google.com)*
  > Connection allowlists: Secure your web application&#39;s network access | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkç...
- [daily.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFo1ErHsnKHywfHyxik_ZkrMXtuIaXxsTjkPuyp1QoN3tkln8VCt3fTL4dJ8QBhvy9ugPR1dokem9NSTYTcHk-eWyeE3tUEhtN1EwS8SqwDr_KRp6VjZ9v9WLTV9SjNjLei4gKH6D_8KQdzmONUcF8f-iZ1xCUBMLmXu-o1h4YgRUXShT61skdlEtDfZhT0EANSBonNlPPcEoml16baYynW) *(vertexaisearch.cloud.google.com)*
  > Connection Allowlists origin trial: Secure your web... Chrome Developers Read post Connection Allowlists origin trial: Secure your web application&#x27;s network Chrome is launching an origin trial for Connection Allowlists, a new browser-level secur...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGa_nANZjAcNmvVi9C2GPRT94sKACjE_sibvMTnqSFSaIqWDAa4rBjuJMr9v2n4zLw5UKLLfTJGETash0Pm5VutXdccTp5bzJFrXOvCpVc1QNWhnpToZXGc8JW4N9H-86zL-g1QFhdaCDYiOpi1-N8SNWqpi6wgybzjiQ==) *(vertexaisearch.cloud.google.com)*
  > Prueba de origen de listas de entidades permitidas de conexión: Protege la red de tu aplicación web | Blog | Chrome for Developers Ir al contenido principal / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Port...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFKxQRjUZk6kVWXDQcONt1TcpBHtPkqeiISpW_eLXyrkLJykIEWqyCrO0X-Xn4RMwagyZAPFllQi_iNid6EJ79WNrVOGlZy33slyBK-rbpVX3KD-FH92GkqqJ2KCNUGPr3u1MM=) *(vertexaisearch.cloud.google.com)*
  > GitHub - WICG/connection-allowlists · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You signed out in another ...
- [report-uri.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFgqs35ZNvzVQ1rStYGM3wUBVX8bjktM01JPs6oJjHcpeTVCUZyvPf_4736Jwo886ON0S8OqupHGEbNkgC5Hg9JCPWv5G-e0Ij4dOmR-KWJiVOULQfHglczoEFgU_NUFszVlqRX2RhKfQp-TPCn) *(vertexaisearch.cloud.google.com)*
  > ### Brief Summary of Connection Allowlists  The **Connection Allowlists** specification (incubated in the WICG) introduces a browser-level "deny-by-default firewall" designed to mitigate data exfiltration risks. Modern web applications increasingly e
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHu_YCFhpPg0gr-fjkazlYOY8Hpawhf1XJEcPA6fTdCeRQkeLSicImq7OeCZerfaSd5WgpIsEt2t5B0PkwUOuIU129Xf8Qm5k1dZuEatrK2gxrKQpyrGg==) *(vertexaisearch.cloud.google.com)*
  > ### Brief Summary of Connection Allowlists  The **Connection Allowlists** specification (incubated in the WICG) introduces a browser-level "deny-by-default firewall" designed to mitigate data exfiltration risks. Modern web applications increasingly e
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHVnbN6O9iE0thVZ_DYJhjUbb207MXjH2e0JUPnt2GxFBhQEp_RPcmTx0MqZZaUuzNa27sVBMSmGIbsBGZa9HrD4nJADmNt_UO7uJI48axUPws9VEfY4B-aJ6JyCMuUZRTKDOPPp-IwDGLLvMKV20rroEs=) *(vertexaisearch.cloud.google.com)*
  > ### Brief Summary of Connection Allowlists  The **Connection Allowlists** specification (incubated in the WICG) introduces a browser-level "deny-by-default firewall" designed to mitigate data exfiltration risks. Modern web applications increasingly e
- [scotthelme.co.uk](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQERJ0cx3Y3-JShlr4E_jCEiGpTarlXAUVT90PuhRIMYJ7rCtDo73MksyAkTBfMMy9T_H9IF2LMaAN__YCRWm7CIlvYJEhQ_IC-jOE7x0oOGMSOMIk7pc9Qdc__lqQ==) *(vertexaisearch.cloud.google.com)*
  > ### Brief Summary of Connection Allowlists  The **Connection Allowlists** specification (incubated in the WICG) introduces a browser-level "deny-by-default firewall" designed to mitigate data exfiltration risks. Modern web applications increasingly e
- [infosec.exchange](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEPcqx87OEtQvbR6nrt_EKvpfTXIIDnDLKvjksiakDcoVS_BllsW4HucbGwIM8v2KnmVKyX31t44Mc9aXDswgaQ0zKKTDiVudzXWfYDhS8MxqcuDSj1xoDQhDM=) *(vertexaisearch.cloud.google.com)*
  > ### Brief Summary of Connection Allowlists  The **Connection Allowlists** specification (incubated in the WICG) introduces a browser-level "deny-by-default firewall" designed to mitigate data exfiltration risks. Modern web applications increasingly e
- [caniuse.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF3qghyn8aBugPCr5ccnTI9Mas-X1GUDS1lGhBN8k0h4vjiCKUt6vicoLyUOPMtRdWdOy5hPVjQ_oxCMrHt9ka_AGrDYjIXrsd0aT88IbvWS5rl24FBltkiHe-q3wmDgUDoGw==) *(vertexaisearch.cloud.google.com)*
  > ### Brief Summary of Connection Allowlists  The **Connection Allowlists** specification (incubated in the WICG) introduces a browser-level "deny-by-default firewall" designed to mitigate data exfiltration risks. Modern web applications increasingly e
- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFxNWl9o8pVLbCuyIxRlW-XMqJ5CC00nSZyZLeWDb2xShfBC-NP-J4qvtItqwZe-k422gyPZFYGmCGBBWRC5aQbwxjzqgGwsxpsAmmsHw1cVnRjz-qFcLFoZyCGO3-fXgJoKIwlTOiwaPdeZx2dCudyAjD5VkOurxC5O8ugC3vun1V97VoJG1bg) *(vertexaisearch.cloud.google.com)*
  > ### Brief Summary of Connection Allowlists  The **Connection Allowlists** specification (incubated in the WICG) introduces a browser-level "deny-by-default firewall" designed to mitigate data exfiltration risks. Modern web applications increasingly e
- [\[blink-dev\] Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16875.html) *(mail-archive.com)*
  > Explainer https://github.com/W... Connection Allowlists is <strong>a feature designed to provide explicit control over external endpoints by restricting connections initiated via the Fetch API or other web platform APIs from a document or worker</str...
- [Connection Allowlists: Consider splitting exfiltration mitigation out of CSP. \[447954811\] - Chromium](https://issues.chromium.org/issues/447954811) *(issues.chromium.org)*
  > Explainer: https://github.com/WICG/connection-allowlists <strong>This CL enforces connection-allowlist header to be checked for navigations</strong>.
- [Re: \[blink-dev\] Re: Intent to Experiment: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16085.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; On 3/3/26 7:19 p.m., Shivani ... Connection Allowlists is <strong>a feature designed to provide explicit control &gt;&gt;&gt; over external endpoints by restricting connections initiated via the Fetch &gt;&gt;&gt; API or other web p...
- [\[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17559.html) *(mail-archive.com)*
  > Best, Alex On Wednesday, September 16, 2026 at 4:50:48 PM UTC-7 Giovanni Del Valle wrote: Intent to Experiment: Connection Allowlists - Embedded Enforcement Contact emails [email protected]&lt;mailto:[email protected]&gt;, [email protected]&lt;mailto...
- [\[blink-dev\] Intent to Prototype: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg16801.html) *(mail-archive.com)*
  > Embedded enforcement spec changes: ... Connection Allowlists is <strong>a feature designed to provide explicit control over external endpoints by restricting connections initiated via the Fetch API or other web platform APIs from a document or worker...
- [\[blink-dev\] Re: Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16946.html) *(mail-archive.com)*
  > One example of a bookmarklet that ... &gt; Connection Allowlists is <strong>a feature designed to provide explicit control &gt; over external endpoints by restricting connections initiated via the Fetch &gt; API or other web platform APIs from a docu...
- [\[blink-dev\] Re: Intent to Experiment: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg15987.html) *(mail-archive.com)*
  > &gt; *Contact emails* &gt; [email protected], ... &gt; Connection Allowlists is <strong>a feature designed to provide explicit control &gt; over external endpoints by restricting connections initiated via the Fetch &gt; API or other web platform APIs...
- [\[blink-dev\] Intent to Experiment: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg15986.html) *(mail-archive.com)*
  > Explainer https://github.com/W... Connection Allowlists is <strong>a feature designed to provide explicit control over external endpoints by restricting connections initiated via the Fetch API or other web platform APIs from a document or worker</str...
- [\[dev-platform\] Re: Intent to prototype: Connection Allowlists](http://www.mail-archive.com/dev-platform@mozilla.org/msg01899.html) *(mail-archive.com)*
  > On Friday, September 18, 2026 at 1:26:16 PM UTC+2 Tom Schuster wrote: &gt; Summary: &gt; The Connection-Allowlist header <strong>allows web developers to limit the servers &gt; a website can communicate with</strong>. This can be used to prevent data...
- [\[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17505.html) *(mail-archive.com)*
  > Best, Alex On Wednesday, September 16, 2026 at 4:50:48 PM UTC-7 Giovanni Del Valle wrote: &gt; *Intent to Experiment: Connection Allowlists - Embedded Enforcement* &gt; &gt; *Contact emails* &gt; &gt; *[email protected]* &lt;[email protected]&gt;, *[...
- [\[dev-platform\] Intent to prototype: Connection Allowlists](http://www.mail-archive.com/dev-platform@mozilla.org/msg01898.html) *(mail-archive.com)*
  > Summary: The Connection-Allowlist header <strong>allows web developers to limit the servers a website can communicate with</strong>. This can be used to prevent data exfiltration attacks. Bug: Bug 2062159 &lt;https://bugzilla.mozilla.org/show_bug.cgi...
- [\[blink-dev\] Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17485.html) *(mail-archive.com)*
  > [email protected]&lt;mailto:[email ....com/chromium/src/+/main/docs/connection_allowlist_design.md Summary Connection Allowlists <strong>restrict the endpoints a document or worker may connect to</strong>....
- [Tim Johns - Blog: Connection Allowlists](https://timjohns.com/blog/connection-allowlists) *(timjohns.com · 2026-05-24T15:00:00)*
  > Connection Allowlists is <strong>a feature designed to provide explicit control over external endpoints by restricting connections initiated using the Fetch API or other web platform APIs from a document or worker</strong>.
- [Connection Allowlists origin trial: Secure your web application's network \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/connection-allowlists-origin-trial) *(developer.chrome.com · 2026-04-16T00:00:00)*
  > Network-level focus: Connection Allowlists <strong>focus on the destination of network connections, rather than how a resource is loaded or executed</strong>. Comprehensive coverage: It covers navigations, redirects, and various web platform APIs, fo...
- [Connection Allowlists](https://chromestatus.com/feature/5175745573945344?gate=5415518666358784) *(chromestatus.com · 2026-02-02T00:00:00)*
  > We cannot provide a description for this page right now
- [\[Connection-Allowlist\] Enforce network restrictions on navigations \[chromium/src : main\]](https://groups.google.com/a/chromium.org/g/network-service-reviews/c/Bn-75Wa-KbQ) *(groups.google.com)*
  > Line 2876, Patchset 11: // connection allowlist: check whether navigation to the url is allowed.
- [Chromeの新しいセキュリティ機能 Connection Allowlists について - ASnoKaze blog](https://asnokaze.hatenablog.com/entry/2025/11/10/002835) *(asnokaze.hatenablog.com · 2025-11-10T00:00:00)*
  > Connection-Allowlistヘッダで通信可能なURLリストを指定する ... CSPよりも単純な構文で、外部サイトと通信を制限できるようにします。これによってユーザデータが外部に漏れることを制限します。防御としては万能なわけではなく、著者としても意図的にスコープを絞っていると述べています。 · またReporting API用のReport-Onlyも定義されています
- [FedCM: Allow network requests to your Identity Provider with Connection Allowlist \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/fedcm-connection-allowlist) *(developer.chrome.com · 2026-08-28T03:20:03)*
  > When configuring a Connection Allowlist, <strong>you must ensure you include all the services you want your site to communicate with</strong>. If your users sign in with an Identity Provider, you should add its endpoints to the allowlist.
- [CSP and browser security blog \| CentralCSP](https://centralcsp.com/en/blog) *(centralcsp.com)*
  > Here is how to compute a sha256 hash, where it goes, and how it compares to a nonce. ... <strong>Connection Allowlists let a page declare every destination it may connect to, so the browser blocks data exfiltration through any channel</strong>.
- [Connection Allowlist: a network firewall, built into the browser](https://scotthelme.co.uk/connection-allowlist-a-network-firewall-built-into-the-browser) *(scotthelme.co.uk · 2026-07-08T16:11:31)*
  > It works the same way as the existing browser report types: <strong>point the report-to group of your Connection-Allowlist-Report-Only header at your Report URI group</strong> and the reports land on a Connection Allowlist reports page, showing the p...
- [Re: \[blink-dev\] Re: Intent to Experiment: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg15988.html) *(mail-archive.com)*
  > More details on the proposal can ...onnection-allowlists *Risks* *Interoperability and Compatibility* This is a new feature. We are actively evolving the design via discussions on GitHub and in the Community Group. However, there is no signal yet fro...
- [Re: \[blink-dev\] Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16890.html) *(mail-archive.com)*
  > *Chromium Trial Name* ConnectionAllowlist *Origin Trial documentation link* https://developer.chrome.com/blog/connection-allowlists-origin-trial *WebFeature UseCounter name* kConnectionAllowlist *Risks* *Interoperability and Compatibility* This is a ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Connection Allowlists · Issue #1297 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1297) *(github.com · 2026-08-14T17:27:07)* *(Cites: `https://chromestatus.com/feature/5175745573945344`)*
  > Chromestatus: https://<strong>chromestatus.com/feature/5175745573945344</strong> Web Feature ID: connection-allowlists Chrome Releases: Chrome 152
- [Add \`local.adguard.org\` to \`Connection Allowlists\` response header automatically · Issue #2096 · AdguardTeam/CoreLibs](https://github.com/AdguardTeam/CoreLibs/issues/2096) *(github.com · 2026-08-23T18:15:32)* *(Cites: `https://chromestatus.com/feature/5175745573945344`)*
  > Chrome added the <strong>Connection-Allowlist response header</strong> - https://chromestatus.com/feature/5175745573945344 As far as I understand, it works similarly to Content Security Policy - https://github.com/WICG/connection-allowlists...
- [\[blink-dev\] Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16875.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/connection-allowlists`)*
  > Explainer https://github.com/W... Connection Allowlists is <strong>a feature designed to provide explicit control over external endpoints by restricting connections initiated via the Fetch API or other web platform APIs from a document or w...
- [Connection Allowlists: Consider splitting exfiltration mitigation out of CSP. \[447954811\] - Chromium](https://issues.chromium.org/issues/447954811) *(issues.chromium.org)* *(Cites: `https://github.com/WICG/connection-allowlists`)*
  > Explainer: https://github.com/WICG/connection-allowlists <strong>This CL enforces connection-allowlist header to be checked for navigations</strong>.
- [Re: \[blink-dev\] Re: Intent to Experiment: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16085.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/connection-allowlists`)*
  > &gt;&gt; &gt;&gt; On 3/3/26 7:19 p.m., Shivani ... Connection Allowlists is <strong>a feature designed to provide explicit control &gt;&gt;&gt; over external endpoints by restricting connections initiated via the Fetch &gt;&gt;&gt; API or o...
- [\[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17559.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/connection-allowlists`)*
  > Best, Alex On Wednesday, September 16, 2026 at 4:50:48 PM UTC-7 Giovanni Del Valle wrote: Intent to Experiment: Connection Allowlists - Embedded Enforcement Contact emails [email protected]&lt;mailto:[email protected]&gt;, [email protected]...
- [\[blink-dev\] Intent to Prototype: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg16801.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/connection-allowlists`)*
  > Embedded enforcement spec changes: ... Connection Allowlists is <strong>a feature designed to provide explicit control over external endpoints by restricting connections initiated via the Fetch API or other web platform APIs from a document...
- [\[blink-dev\] Re: Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16946.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/connection-allowlists`)*
  > One example of a bookmarklet that ... &gt; Connection Allowlists is <strong>a feature designed to provide explicit control &gt; over external endpoints by restricting connections initiated via the Fetch &gt; API or other web platform APIs f...
- [\[blink-dev\] Re: Intent to Experiment: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg15987.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/connection-allowlists`)*
  > &gt; *Contact emails* &gt; [email protected], ... &gt; Connection Allowlists is <strong>a feature designed to provide explicit control &gt; over external endpoints by restricting connections initiated via the Fetch &gt; API or other web pla...
- [Clone CA and required-CA when cloning policy container by noamr · Pull Request #41 · WICG/connection-allowlists](https://github.com/WICG/connection-allowlists/pull/41) *(github.com)* *(Cites: `https://wicg.github.io/connection-allowlists`)*
  > clone-policy-containerWICG/connection-allowlists:clone-policy-containerCopy head branch name to clipboard ... There was a problem hiding this comment. The reason will be displayed to describe this comment to others. Learn more. Isn&#x27;t t...
- [\[blink-dev\] Intent to Experiment: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg15986.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/connection-allowlists`)*
  > Explainer https://github.com/W... Connection Allowlists is <strong>a feature designed to provide explicit control over external endpoints by restricting connections initiated via the Fetch API or other web platform APIs from a document or w...
- [\[dev-platform\] Re: Intent to prototype: Connection Allowlists](http://www.mail-archive.com/dev-platform@mozilla.org/msg01899.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/connection-allowlists`)*
  > On Friday, September 18, 2026 at 1:26:16 PM UTC+2 Tom Schuster wrote: &gt; Summary: &gt; The Connection-Allowlist header <strong>allows web developers to limit the servers &gt; a website can communicate with</strong>. This can be used to pr...
- [\[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17505.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/connection-allowlists`)*
  > Best, Alex On Wednesday, September 16, 2026 at 4:50:48 PM UTC-7 Giovanni Del Valle wrote: &gt; *Intent to Experiment: Connection Allowlists - Embedded Enforcement* &gt; &gt; *Contact emails* &gt; &gt; *[email protected]* &lt;[email protecte...
- [\[dev-platform\] Intent to prototype: Connection Allowlists](http://www.mail-archive.com/dev-platform@mozilla.org/msg01898.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/connection-allowlists`)*
  > Summary: The Connection-Allowlist header <strong>allows web developers to limit the servers a website can communicate with</strong>. This can be used to prevent data exfiltration attacks. Bug: Bug 2062159 &lt;https://bugzilla.mozilla.org/sh...
- [\[blink-dev\] Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17485.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/connection-allowlists`)*
  > [email protected]&lt;mailto:[email ....com/chromium/src/+/main/docs/connection_allowlist_design.md Summary Connection Allowlists <strong>restrict the endpoints a document or worker may connect to</strong>....

## 📚 Platform Documentation & Specifications

- [Connection Allowlists · Issue #1297 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1297) *(github.com)*
- [Add \`local.adguard.org\` to \`Connection Allowlists\` response header automatically · Issue #2096 · AdguardTeam/CoreLibs](https://github.com/AdguardTeam/CoreLibs/issues/2096) *(github.com)*
- [Clone CA and required-CA when cloning policy container by noamr · Pull Request #41 · WICG/connection-allowlists](https://github.com/WICG/connection-allowlists/pull/41) *(github.com)*
- [GitHub - VergeA/connection-allowlists · GitHub](https://github.com/VergeA/connection-allowlists) *(github.com)*
- [Permissions-Policy header - HTTP - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy) *(developer.mozilla.org)*
- [Introduce 'webrtc' as a simple on/off switch by zenhack · Pull Request #457 · w3c/webappsec-csp](https://github.com/w3c/webappsec-csp/pull/457) *(github.com)*
- [queryPermission being used in WPT tests · Issue #42 · whatwg/fs](https://github.com/whatwg/fs/issues/42) *(github.com)*
- [Standardize Priority Hints · Issue #7150 · whatwg/html](https://github.com/whatwg/html/issues/7150) *(github.com)*
- [Cross-Origin-Opener-Policy: provide a clearer spec. · Issue #4580 · whatwg/html](https://github.com/whatwg/html/issues/4580) *(github.com)*
- [Add Access Handles to spec by fivedots · Pull Request #21 · whatwg/fs](https://github.com/whatwg/fs/pull/21) *(github.com)*
- [urlpattern/202012-update.md at main · whatwg/urlpattern](https://github.com/whatwg/urlpattern/blob/main/202012-update.md) *(github.com)*
- [Consider a blocklist for schemes instead of a safelist · Issue #3998 · whatwg/html](https://github.com/whatwg/html/issues/3998) *(github.com)*
- [WHATWG · GitHub](https://github.com/whatwg) *(github.com)*
- [RTCPeerConnection: RTCPeerConnection() constructor](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/RTCPeerConnection) *(developer.mozilla.org)*
- [RTCPeerConnection: connectionState property](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/connectionState) *(developer.mozilla.org)*
- [RTCPeerConnection](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 65 result(s) found across 12 planned queries — **35 verified relevant**
  - `"chromestatus.com/feature/5175745573945344" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/WICG/connection-allowlists" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (7 returned)
  - `"wicg.github.io/connection-allowlists" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Connection Allowlists" API` — *Core feature API query* (7 returned)
  - `"Connection Allowlists" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"connection-allowlist" OR "github.com" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Connection Allowlists" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Connection Allowlists" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
  - `"Connection Allowlists" OR "Connection-Allowlist" (CSP OR "connect-src" OR "exfiltration") (blog OR guide OR article)` — *Finds developer-oriented explanations and introductory articles contrasting Connection Allowlists with CSP connect-src for restricting outbound connections.* (8 returned)
  - `"Connection-Allowlist:" ("response-origin" OR "report-to") HTTP header` — *Locates concrete HTTP response header examples, syntax definitions, and report-to configuration snippets.* (7 returned)
  - `"Connection Allowlists" ("Intent to Prototype" OR chromestatus OR "standards-positions")` — *Tracks browser vendor signals, Chromium intent announcements, and Mozilla/WebKit position reviews on the proposal.* (8 returned)
  - `"WICG/connection-allowlists" OR ("Connection-Allowlist" site:github.com/w3c OR site:github.com/whatwg)` — *Discovers active standards discussions, spec feedback, and edge-case evaluations across web standards working group repositories.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *found 2 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 4 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 5 result(s) found — **5 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 259 item(s) inspected

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
