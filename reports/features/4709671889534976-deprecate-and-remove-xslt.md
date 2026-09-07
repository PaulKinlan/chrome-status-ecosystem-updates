# Deprecate and remove XSLT

> **Report Week:** 2026-W37 | **Milestone:** Chrome 152 | **Category:** Origin trial

## Overview

[XSLT v1.0](https://www.w3.org/TR/xslt-10/), which all browsers adhere to, was standardized in 1999. In the meantime, XSLT has evolved to v2.0 and v3.0, adding features, and growing apart from the old version frozen into browsers. This lack of advancement, coupled with the rise of JavaScript libraries and frameworks that offer more flexible and powerful DOM manipulation, has led to a significant decline in the use of client-side XSLT. Its role within the web browser has been largely superseded by JavaScript-based technologies, such as JSON and React.

Chromium uses the **libxslt** library to process these transformations, and [libxslt was unmaintained](https://discourse.gnome.org/t/stepping-down-as-libxslt-maintainer/27615) for ~6 months of 2025. Libxslt is a complex, aging C codebase of the type notoriously susceptible to memory safety vulnerabilities like buffer overflows, which can lead to arbitrary code execution. Because client-side XSLT is now a niche, rarely-used feature, these libraries receive far less maintenance and security scrutiny than core JavaScript engines, yet they represent a direct, potent attack surface for processing untrusted web content. Indeed, XSLT is the source of several recent high-profile security exploits that continue to put browser users at risk. 

For these reasons, Chromium (along with both other browser engines, Gecko and WebKit) plans to deprecate and remove XSLT from the web platform. The modern web is powered by three major browser engines: [Blink](https://www.chromium.org/blink/) (Chromium), [Gecko](https://firefox-source-docs.mozilla.org/overview/gecko.html) (Firefox), and [WebKit](https://webkit.org/) (Safari). They interpret code to render pages. 

For more details, see this [Chrome for Developers article](https://developer.chrome.com/docs/web-platform/deprecating-xslt).

### Motivation

Security risks for all users outweigh the very small usage of this feature on the open web.

Usage of XSLTProcessor (https://chromestatus.com/metrics/feature/timeline/popularity/79) is fairly volatile, registering somewhere between 0.01% and 0.1% of page loads, averaging around 0.05% over time. These numbers are above the typical 0.001% deprecation threshold. Again, we feel that the increased potential for breakage is balanced by the reduced security risk to 100% of Chromium users. And we are doing everything we can to mitigate this breakage and be proactive in reaching out to potentially affected sites and particularly libraries that might account for significant chunks of the overall usage. In addition, several sites we surveyed that use XSLTProcessor have feature detection code with fallbacks to JS libraries like Saxonica. Of the ~220 sites we've surveyed so far, roughly 72% of them are still functional even with XSLT disabled.

The usage of XSL Processing Instructions (https://chromestatus.com/metrics/feature/timeline/popularity/78) is significantly lower, around 0.001% for the last few years.

## Ecosystem Status

- **Momentum:** High (658 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive / High Interest
- **Executive Take:** Deprecate and remove XSLT is currently Origin trial in Chrome 152. Verified ecosystem momentum is High with Multi-Engine Consensus standards alignment and positive / high interest developer pulse.

### Recommendations
- In active Origin Trial in Chrome 152. Validate API ergonomics in staging/pilot environments before general availability.
- Standards Activity (WebKit): Latest discussion from @annevk: "WebKit is cautiously supportive. We'd probably wait for one implementation to fully remove support, though if there's a known list of origins that par..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Intent to Deprecate and Remove XSLT" (87 points, 149 comments).

## Standards Positions

- **WebKit:** [Should we remove XSLT from the web platform?](https://github.com/whatwg/html/issues/11523) [open]

## Community Discussions & Social Pulse

- 💬 **Hacker News:** [Intent to Deprecate and Remove XSLT](https://news.ycombinator.com/item?id=45779261) — *87 pts, 149 comments*
- 💬 **Hacker News:** [Intent to Deprecate and Remove: XSLT](https://news.ycombinator.com/item?id=45734849) — *3 pts, 1 comments*
- 💬 **Hacker News:** [Intent to Deprecate and Remove: XSLT](https://news.ycombinator.com/item?id=6102357) — *2 pts, 0 comments*
- 🐦 **Twitter / X:** [we did something unusually responsible today.  we wrote the docs.  📖 $BAGLANDS TOKENOMICS &amp; GAME ECONOMY v1.0 IS LI](https://twitter.com/BagLandsMMO/status/2096930178609852424) — *by @BagLandsMMO, 4 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [第三颗雷不炸在代码里，炸在上下文里：AI 引用的字段后端已改名，生成的 SQL 忽略了上周新加的租户隔离。 排查结论永远是那句：AI 没有错，错的是输入——代码跑到 V1.5，文档停在 V1.0。 文档不是废纸，它是喂养AI的'燃料'。燃料](https://twitter.com/dboy_yi2025/status/2096926248052408624) — *by @dboy_yi2025, 0 likes/RTs, 1 replies*

## 📰 Ecosystem Blogs & Articles

- [Intent to Deprecate and Remove XSLT](https://groups.google.com/a/chromium.org/g/blink-dev/c/CxL4gYZeSJA/m/yNs4EsD5AQAJ) *(groups.google.com · 2025-11-01T04:31:52Z)*
  > Intent to Deprecate and Remove: Deprecate and remove XSLT Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Deprecate an...
- [Intent to Deprecate and Remove: XSLT](https://groups.google.com/a/chromium.org/forum) *(groups.google.com · 2013-07-25T13:40:31Z)*
  > Redirecting to Google Groups
- [Removing XSLT for a more secure browser | Web Platform | Chrome for Developers](https://developer.chrome.com/docs/web-platform/deprecating-xslt) *(developer.chrome.com · 2025-10-29T00:00:00)*
  > Removing XSLT for a more secure browser | Web Platform | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة...
- [Intent to Deprecate and Remove: Deprecate and remove XSLT](https://groups.google.com/a/chromium.org/g/blink-dev/c/CxL4gYZeSJA) *(groups.google.com · 2025-10-24T00:00:00)*
  > Intent to Deprecate and Remove: Deprecate and remove XSLT Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Deprecate an...
- [Removing XSLT from Chromium [LWN.net]](https://lwn.net/Articles/1045161) *(lwn.net · 2025-11-05T00:00:00)*
  > Removing XSLT from Chromium [LWN.net] LWN .net News from the source Content Weekly Edition Archives Search Kernel Security Events calendar Unread comments LWN FAQ Write for us Edition Return to the Briefs page User: Password: | | Log in / Subscribe /...
- [Removing XSLT for a more secure browser](https://simonwillison.net/2025/Nov/5/removing-xslt) *(simonwillison.net · 2025-11-05T22:24:57)*
  > Removing XSLT for a more secure browser Simon Willison’s Weblog Subscribe Sponsored by: Portnox &mdash; Shadow AI is the new shadow IT. On Sept. 10, Forrester Research and Portnox share practical steps to regain AI agent visibility, access management...
- [Deprecate and remove XSLT — Chrome Platform Status](https://chromestatuslite.com/feature/4709671889534976) *(chromestatuslite.com)*
  > For these reasons, <strong>Chromium (along with both other browser engines, Gecko and WebKit) plans to deprecate and remove XSLT from the web platform</strong>. The modern web is powered by three major browser engines: [Blink](https://www.chromium.or...
- [Deprecating XSLT in browsers — Web Standards](https://web-standards.dev/news/2025/10/deprecating-xslt) *(web-standards.dev · 2025-10-28T00:00:00)*
  > Deprecating XSLT in browsers — Web Standards Web Standards Daily web platform news 312 382 281 Deprecating XSLT in browsers 2025-10-28 Mason Freed announced Chromium’s plan to fully remove support for XSLT, the XML transformation technology standardi...
- [Michael Tsai - Blog - Removing XSLT From the Web Platform](https://mjtsai.com/blog/2025/08/21/removing-xslt-from-the-web-platform) *(mjtsai.com · 2025-08-21T00:00:00)*
  > <strong>Chromium has officially deprecated XSLT, including the XSLTProcessor JavaScript API and the XML stylesheet processing instruction</strong>. We intend to remove support from version 155 (November 17, 2026). The Firefox and WebKit projects have...
- [Support #1518: Multiple top level elements not allowed - Saxon-CE - Saxonica Developer Community - Saxon-CE - Saxonica Developer Community - Saxon-CE - Saxonica Developer Community](https://saxonica.plan.io/issues/1518) *(saxonica.plan.io)*
  > Yeah, this one was too easy. Changing transformToDocument() to transformToFragment() was all I needed.
- [Support #5370: How access principalResult of the transformation? - SaxonJS - Saxonica Developer Community - SaxonJS - Saxonica Developer Community - SaxonJS - Saxonica Developer Community](https://saxonica.plan.io/issues/5370) *(saxonica.plan.io)*
  > var xslPath = &#x27;./*.xsl&#x27;; var xsl = Saxon.requestXML(xslPath); var proc = Saxon.newXSLT20Processor(xsl); var xmlDoc; var xmlDocTransformed; var xmlStr; xmlDoc = Saxon.parseXML(app.getLoadedMEI()); xmlDocTransformed = proc.transformToDocument...
- [Bug #1875: Performance slowdown with Saxon-CE - Saxon-CE - Saxonica Developer Community - Saxon-CE - Saxonica Developer Community - Saxon-CE - Saxonica Developer Community](https://saxonica.plan.io/issues/1875) *(saxonica.plan.io)*
  > var start = Date.now(); /* import the XSL stylesheet */ if (data.xslt == &quot;saxonce&quot;) { var processor = Saxon.newXSLT20Processor(xsl); } else { var processor = new XSLTProcessor(); processor.importStylesheet(xsl); } var loaded = Date.now(); /...
- [Intent to Deprecate and Remove: XSLT (Again)](https://groups.google.com/a/chromium.org/g/blink-dev/c/6MOMhQaX3N8/m/s-8UHedjCAAJ) *(groups.google.com)*
  > <strong>Adam Barth proposed removing XSLT from Blink two years ago, but we instead investigated alternatives to removing it</strong>. We found those alternatives infeasible. We reduced the complexity of the integration in Source/core, but we couldn’t...
- [Intent to Deprecate and Remove: XSLT](https://groups.google.com/a/chromium.org/g/blink-dev/c/zIg2KC7PyH0/m/Ho1tm5mo7qAJ) *(groups.google.com)*
  > XSLT is widely implemented in browsers, ... be updated to perform their XSL transform on the server or to use a polyfill. To mitigate this risk, <strong>I plan to remove support gradually</strong>....
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=%22Intent+to+Deprecate+and+Remove%22) *(groups.google.com)*
  > Protected Audience and Shared Storage removed, this API is no longer reachable. Thanks! On Wed, Jul 8, 2026 at 11:01 AM Daniel Bratell wrote: &gt; If I understand you correctly, thisunread, Intent to Deprecate and Remove: Private Aggregation API
- [Wyszukaj wątki](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=title%3A%22Intent+to+Deprecate+and+Remove%22&hl=pl) *(groups.google.com)*
  > Intent to Deprecate and Remove: Deprecate and remove XSLT
- [WebKit - UXSS via XSLT and Nested Document Replacements - Multiple dos Exploit](https://www.exploit-db.com/exploits/47237) *(exploit-db.com · 2019-08-12T00:00:00)*
  > WebKit - UXSS via XSLT and Nested Document Replacements. CVE-2019-8690 . dos exploit for Multiple platform
- [20 Agentic AI Terms Every Developer Should Know (Explained Simply)](https://dev.to/sylwia-lask/20-agentic-ai-terms-every-developer-should-know-explained-simply-jii) *(dev.to · Sylwia Laskowska · Sep 3)*
  > Do you ever feel like the AI world has moved forward a little too quickly?&nbsp;You hear about...

## 📚 Platform Documentation & Specifications

- [1990759 - Investigate deprecation and removal of XSLT (deprecate and remove XSLT)](https://bugzilla.mozilla.org/show_bug.cgi?id=1990759) *(bugzilla.mozilla.org)*
- [XSLT](https://developer.mozilla.org/en-US/docs/Glossary/XSLT) *(developer.mozilla.org)*
- [XSLT guides](https://developer.mozilla.org/en-US/docs/Web/XML/XSLT/Guides) *(developer.mozilla.org)*
- [XSLT reference](https://developer.mozilla.org/en-US/docs/Web/XML/XSLT/Reference) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 21 result(s) found across 5 planned queries — **16 verified relevant**
  - `"chromestatus.com/feature/4709671889534976" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"deprecating XSLT" OR "deprecate XSLT" (Chrome OR Chromium OR Firefox OR WebKit)` — *Find official browser announcements, developer blogs, and articles detailing the deprecation roadmap and reasoning.* (8 returned)
  - `"XSLTProcessor" ("transformToFragment" OR "transformToDocument") (polyfill OR migration OR Saxonica OR Saxon-JS)` — *Locate real-world JavaScript code examples showing current XSLTProcessor usage alongside modern JS replacement/polyfill patterns.* (7 returned)
  - `"Intent to Deprecate and Remove" "XSLT" site:groups.google.com/a/chromium.org/g/blink-dev` — *Surface the formal Blink intent-to-deprecate thread, cross-browser consensus notes, and engine implementation discussions.* (5 returned)
  - `(libxslt OR "XSLTProcessor") (vulnerability OR exploit OR "memory safety") (Chromium OR Gecko OR WebKit) -site:wikipedia.org` — *Discover security analyses, exploit retrospectives, and developer discussions highlighting the security risks driving XSLT removal.* (2 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 3 result(s) found — **3 verified relevant**
- **Standards Positions:** 1 item(s) inspected
- **Engine Bug Trackers:** 6 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4709671889534976)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4709671889534976)
- [Chromium Tracking Bug](https://crbug.com/435623334)
