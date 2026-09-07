# Connection Allowlists

> **Report Week:** 2026-W37 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Connection Allowlists is a feature designed to provide explicit control over external endpoints by restricting connections initiated via the Fetch API or other web platform APIs from a document or worker.

The proposed implementation involves the distribution of an authorized endpoint list from the server through an HTTP response header. Prior to the establishment of any connection by the user agent on behalf of a page, the agent will evaluate the destination against this allowlist; connections to verified endpoints will be permitted, while those failing to match the entries in the list will be blocked.

More details on the proposal can be found here: https://github.com/WICG/connection-allowlists 

Design doc: https://docs.google.com/document/d/1B3LERUObjVDAKBNLpdIxbk8LC96rWUn1q8vtP9pPIuA/edit?usp=sharing

Implementation Design:
https://source.chromium.org/chromium/chromium/src/+/main:docs/connection_allowlist_design.md

### Motivation

Developers wish to have control over the resources loaded into their pages' contexts and the endpoints to which their pages can make requests. This control is necessary for several purposes, including limiting the ways in which users' data can flow through the user agent (mitigating exfiltration attacks) and ensuring control over a site’s architecture and dependencies.

Content Security Policy addresses some of this need, but does so in a way that is more granular than necessary for the most critical use cases, and with a syntax and grammar that’s complicated by the other protections CSP is used to deploy.

`Connection-Allowlist` steps back from CSP, and focuses on the single use case of controlling the explicit requests a page may initiate through Fetch and other web platform APIs (Navigations, preload, DNS Prefetch, WebRTC, Web Transport, etc) in a way that aims to be straightforward and comprehensive.

Example:
Connection-Allowlist: (response-origin "https://cdn.example" "https://*.example.:tld" \
                       "https://api.example:*"); report-to=ReportingAPIEndpoint

## Ecosystem Status

- **Momentum:** High (280 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** Connection Allowlists introduces a dedicated HTTP response header (`Connection-Allowlist`) that acts as an egress firewall, restricting outbound network connections (Fetch, WebSockets, WebTransport, WebRTC, and navigations) directly at the network layer. Enabled by default in Chrome 152, the feature decouples outbound network exfiltration controls from the complex semantics of Content Security Policy (CSP). Cross-engine momentum is strong with Mozilla expressing a positive standard position and tracking Gecko implementation bugs, while WebKit remains actively engaged in discussions.

### Recommendations
- Actionable Advice: Engineering teams can safely deploy `Connection-Allowlist` headers as a progressive enhancement today, pairing them with the Reporting API to monitor unintended network blocks without breaking non-supporting browsers.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @mikewest: "A brief update on timing: we're now planning an initial Origin Trial starting in Chrome 147 (https://groups.google.com/a/chromium.org/g/blink-dev/c/lR..."
- Standards Activity (Mozilla): Latest discussion from @evilpie: "Suggested position: positive  #1431..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Connection Allowlists](https://github.com/WebKit/standards-positions/issues/583) [open]
- **Mozilla:** [Connection Allowlists](https://github.com/mozilla/standards-positions/issues/1322) [closed]
- **W3C TAG:** [Incubation: Connection Allowlists](https://github.com/w3ctag/design-reviews/issues/1173) [closed]

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE8vQ0krDvGTq4OqYssFw-Gr0Sm61rHX0x6XGuj1NYaOxZDZc8XltS4knW5vCh-OZsBPum4vurb24YZ-Den_mZGv4pd_0gX12cjyU4Z8mkK-PHivjjocxzMen0FIgFrjFDUl0bn7lKS) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEYQjJAd5HCpd9Hx2qxTS-xtwq_GptnC3xtV6tuqB7tM7HLhN4D7sENyt167yluc4sqdVpHCtZZif2i8a9BvJALNQBP3NGp5FKoX4HJF2E_Q3wFGKa8w7JaKhFNrAQ-IhfIQ8o=) *(vertexaisearch.cloud.google.com)*
  > Connection Allowlists Connection Allowlists Draft Community Group Report , 26 August 2026 This version: https://wicg.github.io/connection-allowlists/ Issue Tracking: GitHub Inline In Spec Editors: Noam Rosenthal ( Google ) Mike West ( Google ) Copyri...
- [report-uri.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEoGUa3HNAcqeKPGjwu8SupG2TB-skczTbvkn1-X2WzM0VYXp9WBAesfimiPmUG3mxGq33I2PeiGlFOGp391xi36tIpwizwn8HiR46q5nUsy_Sep1csADcpB3mITm2wW5bgn201xQqTjIfdO_je-4AGkvZ3Jom02d9aZMrZnCGywwjok16HwCJhQcI=) *(vertexaisearch.cloud.google.com)*
  > Connection Allowlist: an egress firewall for the browser Sign in Subscribe Connection Allowlist: an egress firewall for the browser Connection Allowlist Scott Helme 01 Sep 2026 — 3 min read Until now, malicious code running in a browser has had sever...
- [scotthelme.co.uk](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF8wSrlxP7UKAv6htjWoqzNd4VE5x8XD1xAl5Fy3vMfNhVe9iH8n1W__lFndwSVmFbRRj8zvd8DTbBIvjt929IgDFLler1DvbaTGwMPUV3i2BOnf9Wo01hdXxFOgU2GoLnyUlysmAY13Qe_pV_EQASf2OZqllV881mllU4Ah3BgnMmhw75f3wV160zgdVLd) *(vertexaisearch.cloud.google.com)*
  > Connection Allowlist: a network firewall, built into the browser Sponsored by: Report URI - PCI DSS requires proof. Show what ran, what changed, and what was blocked. Connection Allowlist Connection Allowlist: a network firewall, built into the brows...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHyAFteSo2BYWeJkixpC1TJ9gUd5B395cy4nJIP_vIWOFMI04P8sk8TIl58o8COxVnx9Af2NMgF7YoZifmK7_WmIwGjOSKv97amAPFVN9pKvsO9C6L3ozjScg6yLbVKuJlkOKs=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of Connection Allowlists  **Connection Allowlists** is a WICG specification and web platform security mechanism designed to control outbound network communication initiated from documents and workers. Delivered via HTTP response headers (
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFBWgzi4alCON2hKts4vsXwNR1noJLboCb6FXayU1A92Bwf6RXEQ4E4Eyjr1Ewjm5KMiZdN1xsWMJcdjEdiEkSvI1caqp0bozCWmDs4jOzRvyZ-N_aRLwUx8o-ut5IynobnBS5w5ZU48IgEg4ObwiEyow1NsRR6Gdjctw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of Connection Allowlists  **Connection Allowlists** is a WICG specification and web platform security mechanism designed to control outbound network communication initiated from documents and workers. Delivered via HTTP response headers (
- [daily.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHRlqka6AMJ8rZq1J1AEjk-fnR3NFlXpPRXto8YW5NBI-F-d-b_MgXQxyW9vKRXP0-3tEOMCcr1pRq46LoDqO9_KC79nZ_OkbxCsvLwr_6OXo-AFOZHwSRivkR2c7EjA3EszJsu_wj1XnMnpqxmYcohi2VNko23tJhRdsBrv62Ke-VuTT1RVuGO80Gk6kGV2N8WScaFDiI=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of Connection Allowlists  **Connection Allowlists** is a WICG specification and web platform security mechanism designed to control outbound network communication initiated from documents and workers. Delivered via HTTP response headers (
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHdgbDwTH6LsU9v70UGIH1fedhmJ0s3aUBgloHYvsb4mMXyP_iuwvOtQ7In6HsW_Dc-XMxYiFbSj0M3z5mFkvPU46FkuWYLjtB3LWVj3EKKAonXJyR0MMSDAfjqxQbO5lacwJuxXjeN-4ObNvaqm9ywX5w=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of Connection Allowlists  **Connection Allowlists** is a WICG specification and web platform security mechanism designed to control outbound network communication initiated from documents and workers. Delivered via HTTP response headers (
- [timjohns.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGBA0eVkDlSzE_yCADRQer0j5TUF43Hn2LIaoV_EyiSXb2ZdJvRl84YNab9LWmkFzMifO2V1fYDKNeSlrzFBHqTfOJXB75CgPny-GotYPe8yt4AOsW01dbed4wCOk4SxoswIlr66A==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of Connection Allowlists  **Connection Allowlists** is a WICG specification and web platform security mechanism designed to control outbound network communication initiated from documents and workers. Delivered via HTTP response headers (
- [medium.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFvWcE4e53am30ZKSOO3Hm_urtyzLhNQ9QmGr5UHYJ4pbokaZlAHXIwFkOVLeS1ZI4ua1Yxvtcphl-J9jUhaycmEnxwL8mt6vddL_kd9BpngJ3EfVKsRAys3SwKZo2obbWVyo_BzabnJQbRfvcP25jvIXdDmrQY6mlvAX594L-6HOQ1mdUI) *(vertexaisearch.cloud.google.com)*
  > ### Summary of Connection Allowlists  **Connection Allowlists** is a WICG specification and web platform security mechanism designed to control outbound network communication initiated from documents and workers. Delivered via HTTP response headers (
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGgZHdp-X0z90yxv5SGn25I5zyg2asOyGx9NRgALolsyPvMPhk8P_nLn_tmCokIqzXxvGKOTPKu5uNjFIieWUbnWeKFJS4-LABR-64uL8jSBXbqvnhD3WCj6rn1Vv1uMAB6TPbeiGzXqrVJ-dilSirl) *(vertexaisearch.cloud.google.com)*
  > ### Summary of Connection Allowlists  **Connection Allowlists** is a WICG specification and web platform security mechanism designed to control outbound network communication initiated from documents and workers. Delivered via HTTP response headers (
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGuTcvjG1BlvQDxFCtfE4Z9yEVYUDNsYqpouSo-qN6CYOznOtBm3534sJGqpyg6nlRGdz_pIVoL443C56Hd7UWqCWqkvrlJtUxTbxmfo2QXI72xNNz6vGfYSwMi4wtkp_OruH3I0MPJuJXzh8CZzjhPxsX-l7KgVEA=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of Connection Allowlists  **Connection Allowlists** is a WICG specification and web platform security mechanism designed to control outbound network communication initiated from documents and workers. Delivered via HTTP response headers (
- [Re: [blink-dev] Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16912.html) *(mail-archive.com)*
  > Prior to the establishment &gt;&gt; of any connection by the user agent on behalf of a page, the agent will &gt;&gt; evaluate the destination against this allowlist; connections to verified &gt;&gt; endpoints will be permitted, while those failing to...
- [[blink-dev] Re: Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16946.html) *(mail-archive.com)*
  > Prior to the establishment &gt; of any connection by the user agent on behalf of a page, the agent will &gt; evaluate the destination against this allowlist; connections to verified &gt; endpoints will be permitted, while those failing to match the e...
- [Re: [blink-dev] Re: Intent to Experiment: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16085.html) *(mail-archive.com)*
  > Prior to the establishment &gt;&gt;&gt; of any connection by the user agent on behalf of a page, the agent will &gt;&gt;&gt; evaluate the destination against this allowlist; connections to verified &gt;&gt;&gt; endpoints will be permitted, while thos...
- [[blink-dev] Re: Intent to Experiment: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg15987.html) *(mail-archive.com)*
  > &gt; *Contact emails* &gt; [email protected], ... &gt; Connection Allowlists is <strong>a feature designed to provide explicit control &gt; over external endpoints by restricting connections initiated via the Fetch &gt; API or other web platform APIs...
- [Re: [blink-dev] Re: Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16949.html) *(mail-archive.com)*
  > &gt; &gt; One example of a bookmarklet ... Connection Allowlists is <strong>a feature designed to provide explicit control &gt;&gt; over external endpoints by restricting connections initiated via the Fetch &gt;&gt; API or other web platform APIs fro...
- [[blink-dev] Intent to Experiment: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg15986.html) *(mail-archive.com)*
  > Explainer https://github.com/W... Connection Allowlists is <strong>a feature designed to provide explicit control over external endpoints by restricting connections initiated via the Fetch API or other web platform APIs from a document or worker</str...
- [[blink-dev] Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16875.html) *(mail-archive.com)*
  > Explainer https://github.com/W... Connection Allowlists is <strong>a feature designed to provide explicit control over external endpoints by restricting connections initiated via the Fetch API or other web platform APIs from a document or worker</str...
- [Connection Allowlists origin trial: Secure your web application's network | Blog | Chrome for Developers](https://developer.chrome.com/blog/connection-allowlists-origin-trial) *(developer.chrome.com · 2026-04-16T00:00:00)*
  > By including the Connection-Allowlist HTTP response header, <strong>a site specifies the exact URL patterns permitted for all network communication initiated by its context</strong>, such as a document or a web worker.
- [Connection Allowlist: a network firewall, built into the browser](https://scotthelme.co.uk/connection-allowlist-a-network-firewall-built-into-the-browser) *(scotthelme.co.uk · 2026-07-08T16:11:31)*
  > More posts by Scott Helme. ... Connection Allowlist is <strong>a new browser security mechanism that lets a document declare, up front, the exact set of destinations it&#x27;s permitted to open network connections to</strong>.
- [Tim Johns - Blog: Connection Allowlists](https://timjohns.com/blog/connection-allowlists) *(timjohns.com · 2026-05-24T15:00:00)*
  > First, I signed up for the corresponding Chrome origin trial by clicking through the link in the Chrome 148 Release Notes, which allowed me to get a token value to serve in the Origin-Trial header, alongside the new Connection-Allowlist. As I write t...
- [Re: [blink-dev] Re: Intent to Experiment: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg15988.html) *(mail-archive.com)*
  > <strong>The proposed implementation involves the distribution of an authorized endpoint list from the server through an HTTP response header</strong>. Prior to the establishment of any connection by the user agent on behalf of a page, the agent will ...
- [Re: [blink-dev] Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16890.html) *(mail-archive.com)*
  > *Contact emails* [email protected], ... Connection Allowlists is <strong>a feature designed to provide explicit control over external endpoints by restricting connections initiated via the Fetch API or other web platform APIs from a document or worke...
- [Web Apps Need Network Sandboxes. Chrome’s Connection Allowlists origin… | by Roman Fedytskyi | Medium](https://medium.com/@roman_fedyskyi/web-apps-need-network-sandboxes-1997eb7e4440) *(medium.com · 2026-04-20T17:26:04)*
  > That includes obvious paths such as `fetch()` and WebSocket connections. The proposal also aims at a broader set of explicit web platform connections, including redirects, DNS prefetch, WebTransport, and WebRTC handling. For the origin trial, teams s...
- [Connection Allowlists](https://chromestatus.com/feature/5175745573945344) *(chromestatus.com · 2026-02-02T00:00:00)*
  > We cannot provide a description for this page right now
- [[blink-dev] Intent to Prototype: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg16801.html) *(mail-archive.com)*
  > Embedders will leverage a new connectionAllowlist attribute to apply the restriction to embedded content: &lt;iframe connectionAllowlist=&#x27;(&quot;https://good.site/&quot;&lt;https://good.site/&quot;&gt; response-origin)&#x27; src=&quot;https://em...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: [blink-dev] Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16912.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/connection-allowlists`)*
  > Prior to the establishment &gt;&gt; of any connection by the user agent on behalf of a page, the agent will &gt;&gt; evaluate the destination against this allowlist; connections to verified &gt;&gt; endpoints will be permitted, while those ...
- [[blink-dev] Re: Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16946.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/connection-allowlists`)*
  > Prior to the establishment &gt; of any connection by the user agent on behalf of a page, the agent will &gt; evaluate the destination against this allowlist; connections to verified &gt; endpoints will be permitted, while those failing to m...
- [Re: [blink-dev] Re: Intent to Experiment: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16085.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/connection-allowlists`)*
  > Prior to the establishment &gt;&gt;&gt; of any connection by the user agent on behalf of a page, the agent will &gt;&gt;&gt; evaluate the destination against this allowlist; connections to verified &gt;&gt;&gt; endpoints will be permitted, ...
- [[blink-dev] Re: Intent to Experiment: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg15987.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/connection-allowlists`)*
  > &gt; *Contact emails* &gt; [email protected], ... &gt; Connection Allowlists is <strong>a feature designed to provide explicit control &gt; over external endpoints by restricting connections initiated via the Fetch &gt; API or other web pla...
- [Re: [blink-dev] Re: Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16949.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/connection-allowlists`)*
  > &gt; &gt; One example of a bookmarklet ... Connection Allowlists is <strong>a feature designed to provide explicit control &gt;&gt; over external endpoints by restricting connections initiated via the Fetch &gt;&gt; API or other web platfor...
- [[blink-dev] Intent to Experiment: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg15986.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/connection-allowlists`)*
  > Explainer https://github.com/W... Connection Allowlists is <strong>a feature designed to provide explicit control over external endpoints by restricting connections initiated via the Fetch API or other web platform APIs from a document or w...
- [[blink-dev] Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16875.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/connection-allowlists`)*
  > Explainer https://github.com/W... Connection Allowlists is <strong>a feature designed to provide explicit control over external endpoints by restricting connections initiated via the Fetch API or other web platform APIs from a document or w...

## 📚 Platform Documentation & Specifications

- [Connection Allowlist in Early Hints Responses · Issue #3 · WICG/connection-allowlists](https://github.com/wicg/connection-allowlists/issues/3) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 20 result(s) found across 7 planned queries — **16 verified relevant**
  - `"chromestatus.com/feature/5175745573945344" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WICG/connection-allowlists" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"wicg.github.io/connection-allowlists" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"Connection-Allowlist" header OR "Connection Allowlists" (WICG OR Chrome OR web)` — *Finds introductory articles, security explainers, and developer guides covering the Connection Allowlists proposal.* (8 returned)
  - `"Connection-Allowlist:" ("response-origin" OR "report-to" OR "fetch")` — *Locates concrete HTTP header syntax definitions, Structured Fields usage patterns, and practical configuration examples.* (8 returned)
  - `"Connection Allowlists" OR "Connection-Allowlist" ("standards-positions" OR "Intent to" OR "chromestatus")` — *Surfaces browser vendor positions (Mozilla, WebKit), Chrome status milestones, and official standardization tracking.* (8 returned)
  - `"Connection-Allowlist" ("Content Security Policy" OR "connect-src" OR "exfiltration")` — *Discovers discussions and technical comparisons between Connection Allowlists and CSP connect-src for mitigating data exfiltration.* (3 returned)
- **Google Search Grounding (gemini-3.7-flash):** 12 result(s) found — **12 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 4 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 item(s) inspected
- **Engine Bug Trackers:** 2 item(s) inspected
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

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
