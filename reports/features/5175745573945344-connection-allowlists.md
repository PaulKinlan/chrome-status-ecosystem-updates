# Connection Allowlists

> **Report Week:** 2026-W38 | **Milestone:** Chrome 152 | **Category:** Enabled by default

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

- **Momentum:** High (285 points)
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
- 🐦 **Twitter / X:** [雑u Bot on X: "Chromeの新しいセキュリティ機能 Connection Allowlists について https://t.co/hENNUs8Evu" / X](https://x.com/matsuu_zatsu/status/1988945701506539734) — *by @matsuu_zatsu, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Re: Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16949.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: Connection Allowlists Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Connection Allowlists Noam Rosenthal Wed, 08 Jul 2026 11:56:52 -0700 On Wed, Jul 8, 2026 at 7:10 PM Morgaine (de la fa...
- [Connection Allowlists: Consider splitting exfiltration mitigation out of CSP. \[447954811\] - Chromium](https://issues.chromium.org/issues/447954811) *(issues.chromium.org)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Prototype: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg16801.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Connection Allowlists Embedded Enforcement Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Connection Allowlists Embedded Enforcement 'Brandon Maslen' via blink-dev Wed, 17 Jun 2026 10:53:14 -07...
- [\[blink-dev\] Re: Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16946.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: Connection Allowlists Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Connection Allowlists Morgaine (de la faye) Wed, 08 Jul 2026 11:10:09 -0700 I take it there are no affordances for Bookmarklet...
- [\[blink-dev\] Re: Intent to Experiment: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg15987.html) *(mail-archive.com)*
  > &gt; *Contact emails* &gt; [email protected], ... &gt; Connection Allowlists is <strong>a feature designed to provide explicit control &gt; over external endpoints by restricting connections initiated via the Fetch &gt; API or other web platform APIs...
- [Re: \[blink-dev\] Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16912.html) *(mail-archive.com)*
  > &gt; LGTM2 &gt; &gt; On Fri, Jun 26, 2026 ... Connection Allowlists is <strong>a feature designed to provide explicit control &gt;&gt; over external endpoints by restricting connections initiated via the Fetch &gt;&gt; API or other web platform APIs ...
- [Re: \[blink-dev\] Re: Intent to Experiment: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16085.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; On 3/3/26 7:19 p.m., Shivani ... Connection Allowlists is <strong>a feature designed to provide explicit control &gt;&gt;&gt; over external endpoints by restricting connections initiated via the Fetch &gt;&gt;&gt; API or other web p...
- [\[blink-dev\] Intent to Experiment: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg15986.html) *(mail-archive.com)*
  > Explainer https://github.com/W... Connection Allowlists is <strong>a feature designed to provide explicit control over external endpoints by restricting connections initiated via the Fetch API or other web platform APIs from a document or worker</str...
- [\[blink-dev\] Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16875.html) *(mail-archive.com)*
  > Explainer https://github.com/W... Connection Allowlists is <strong>a feature designed to provide explicit control over external endpoints by restricting connections initiated via the Fetch API or other web platform APIs from a document or worker</str...
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
- [Connection Allowlist: a network firewall, built into the browser](https://scotthelme.co.uk/connection-allowlist-a-network-firewall-built-into-the-browser) *(scotthelme.co.uk · 2026-07-08T16:11:31)*
  > This post covers how the mechanism works, how it differs from CSP, and the shape of the reports. Before any outbound connection is established, the browser checks the destination against the allowlist. If it doesn&#x27;t match, the connection is bloc...
- [Web Apps Need Network Sandboxes. Chrome’s Connection Allowlists origin… \| by Roman Fedytskyi \| Medium](https://medium.com/@roman_fedyskyi/web-apps-need-network-sandboxes-1997eb7e4440) *(medium.com · 2026-04-20T17:26:04)*
  > That includes obvious paths such as `fetch()` and WebSocket connections. The proposal also aims at a broader set of explicit web platform connections, including redirects, DNS prefetch, WebTransport, and WebRTC handling. For the origin trial, teams s...
- [r/salesforce on Reddit: Hyperforce allowlist / whitelist by domain](https://www.reddit.com/r/salesforce/comments/1gsxax2/hyperforce_allowlist_whitelist_by_domain) *(reddit.com · 2024-11-16T21:19:50)*
  > This is the article I referenced that says allowing by domain appears to be only for inbound connections https://help.salesforce.com/s/articleView?id=000394078&amp;type=1

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16949.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/connection-allowlists`)*
  > Re: [blink-dev] Re: Intent to Ship: Connection Allowlists Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Connection Allowlists Noam Rosenthal Wed, 08 Jul 2026 11:56:52 -0700 On Wed, Jul 8, 2026 at 7:10 PM Morgaine...
- [Connection Allowlists: Consider splitting exfiltration mitigation out of CSP. \[447954811\] - Chromium](https://issues.chromium.org/issues/447954811) *(issues.chromium.org)* *(Cites: `https://github.com/WICG/connection-allowlists`)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Prototype: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg16801.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/connection-allowlists`)*
  > [blink-dev] Intent to Prototype: Connection Allowlists Embedded Enforcement Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Connection Allowlists Embedded Enforcement 'Brandon Maslen' via blink-dev Wed, 17 Jun 2026 10...
- [\[blink-dev\] Re: Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16946.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/connection-allowlists`)*
  > [blink-dev] Re: Intent to Ship: Connection Allowlists Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Connection Allowlists Morgaine (de la faye) Wed, 08 Jul 2026 11:10:09 -0700 I take it there are no affordances for B...
- [\[blink-dev\] Re: Intent to Experiment: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg15987.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/connection-allowlists`)*
  > &gt; *Contact emails* &gt; [email protected], ... &gt; Connection Allowlists is <strong>a feature designed to provide explicit control &gt; over external endpoints by restricting connections initiated via the Fetch &gt; API or other web pla...
- [Re: \[blink-dev\] Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16912.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/connection-allowlists`)*
  > &gt; LGTM2 &gt; &gt; On Fri, Jun 26, 2026 ... Connection Allowlists is <strong>a feature designed to provide explicit control &gt;&gt; over external endpoints by restricting connections initiated via the Fetch &gt;&gt; API or other web plat...
- [Re: \[blink-dev\] Re: Intent to Experiment: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16085.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/connection-allowlists`)*
  > &gt;&gt; &gt;&gt; On 3/3/26 7:19 p.m., Shivani ... Connection Allowlists is <strong>a feature designed to provide explicit control &gt;&gt;&gt; over external endpoints by restricting connections initiated via the Fetch &gt;&gt;&gt; API or o...
- [\[blink-dev\] Intent to Experiment: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg15986.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/connection-allowlists`)*
  > Explainer https://github.com/W... Connection Allowlists is <strong>a feature designed to provide explicit control over external endpoints by restricting connections initiated via the Fetch API or other web platform APIs from a document or w...
- [\[blink-dev\] Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16875.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/connection-allowlists`)*
  > Explainer https://github.com/W... Connection Allowlists is <strong>a feature designed to provide explicit control over external endpoints by restricting connections initiated via the Fetch API or other web platform APIs from a document or w...

## 📚 Platform Documentation & Specifications

- [RTCPeerConnection: RTCPeerConnection() constructor](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/RTCPeerConnection) *(developer.mozilla.org)*
- [RTCPeerConnection: connectionState property](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/connectionState) *(developer.mozilla.org)*
- [RTCPeerConnection](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 52 result(s) found across 13 planned queries — **18 verified relevant**
  - `"chromestatus.com/feature/5175745573945344" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WICG/connection-allowlists" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (5 returned)
  - `"wicg.github.io/connection-allowlists" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"Connection Allowlists" API` — *Core feature API query* (7 returned)
  - `"Connection Allowlists" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"connection-allowlist" OR "github.com" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Connection Allowlists" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Connection Allowlists" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
  - `"Connection-Allowlist" header (tutorial OR guide OR "connect-src" OR CSP)` — *Finds developer-oriented articles and security guides explaining Connection Allowlists as a modern, simplified alternative to CSP connect-src.* (3 returned)
  - `"Connection-Allowlist:" (response-origin OR report-to OR "fetch") example` — *Locates concrete HTTP response header examples, syntax definitions, and configuration snippets for Connection Allowlists.* (8 returned)
  - `"Connection Allowlists" site:github.com/mozilla/standards-positions OR site:github.com/WebKit/standards-positions` — *Checks vendor consensus, official standards positions, and feedback from Mozilla and WebKit engineers on the proposal.* (0 returned)
  - `"Connection-Allowlist" OR "Connection Allowlists" (site:news.ycombinator.com OR site:reddit.com OR "Intent to Prototype")` — *Surfaces community reactions, early developer sentiment, and Chromium Intent to Prototype/Ship announcements.* (8 returned)
  - `"Connection Allowlists" ("data exfiltration" OR "Content Security Policy") (WICG OR Chromium)` — *Finds technical analysis and design discussions regarding using Connection Allowlists for mitigating data exfiltration attacks.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 6 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 4 result(s) found — **3 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 3 result(s) found — **3 verified relevant**
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
