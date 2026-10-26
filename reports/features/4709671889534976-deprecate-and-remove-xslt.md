# Deprecate and remove XSLT

> **Report Week:** 2026-W44 | **Milestone:** Chrome 158 | **Category:** Stepped rollout

## Overview

\[XSLT v1.0\](https://www.w3.org/TR/xslt-10/), which all browsers adhere to, was standardized in 1999. In the meantime, XSLT has evolved to v2.0 and v3.0, adding features, and growing apart from the old version frozen into browsers. This lack of advancement, coupled with the rise of JavaScript libraries and frameworks that offer more flexible and powerful DOM manipulation, has led to a significant decline in the use of client-side XSLT. Its role within the web browser has been largely superseded by JavaScript-based technologies, such as JSON and React.  Chromium uses the \*\*libxslt\*\* library to process these transformations, and \[libxslt was unmaintained\](https://discourse.gnome.org/t/stepping-down-as-libxslt-maintainer/27615) for ~6 months of 2025. Libxslt is a complex, aging C codebase of the type notoriously susceptible to memory safety vulnerabilities like buffer overflows, which can lead to arbitrary code execution. Because client-side XSLT is now a niche, rarely-used feature, these libraries receive far less maintenance and security scrutiny than core JavaScript engines, yet they represent a direct, potent attack surface for processing untrusted web content. Indeed, XSLT is the source of several recent high-profile security exploits that continue to put browser users at risk.   For these reasons, Chromium (along with both other browser engines, Gecko and WebKit) plans to deprecate and remove XSLT from the web platform. The modern web is powered by three major browser engines: \[Blink\](https://www.chromium.org/blink/) (Chromium), \[Gecko\](https://firefox-source-docs.mozilla.org/overview/gecko.html) (Firefox), and \[WebKit\](https://webkit.org/) (Safari). They interpret code to render pages.   For more details, see this \[Chrome for Developers article\](https://developer.chrome.com/docs/web-platform/deprecating-xslt).  From Chrome 158, XSLT will stop functioning on Stable releases.

### Motivation

Security risks for all users outweigh the very small usage of this feature on the open web.  Usage of XSLTProcessor (https://chromestatus.com/metrics/feature/timeline/popularity/79) is fairly volatile, registering somewhere between 0.01% and 0.1% of page loads, averaging around 0.05% over time. These numbers are above the typical 0.001% deprecation threshold. Again, we feel that the increased potential for breakage is balanced by the reduced security risk to 100% of Chromium users. And we are doing everything we can to mitigate this breakage and be proactive in reaching out to potentially affected sites and particularly libraries that might account for significant chunks of the overall usage. In addition, several sites we surveyed that use XSLTProcessor have feature detection code with fallbacks to JS libraries like Saxonica. Of the ~220 sites we've surveyed so far, roughly 72% of them are still functional even with XSLT disabled.  The usage of XSL Processing Instructions (https://chromestatus.com/metrics/feature/timeline/popularity/78) is significantly lower, around 0.001% for the last few years.

## Ecosystem Status

- **Momentum:** High (footprint 813 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Chromium, Gecko, and WebKit have aligned to deprecate and remove client-side XSLT v1.0 and the XSLTProcessor API from the web platform, targeting full removal in Chrome stable releases. The move is primarily driven by security imperatives: purging legacy, memory-unsafe C libraries like libxslt to eliminate critical CVE attack surfaces while modernizing XML pipelines. Although telemetry shows low global page load metrics, the deprecation breaks historic XML-based publishing workflows and legacy enterprise intranets.

### Recommendations
- Actionable Advice: Teams must immediately audit codebases for \`XSLTProcessor\` invocations and \`&lt;?xml-stylesheet?&gt;\` processing instructions, transitioning workloads to server-side or build-time transformations. For applications requiring client-side execution, integrate WebAssembly-compiled libxslt polyfills or modern libraries like Saxon-JS, while utilizing enterprise policies like \`XSLTEnabled\` or origin trials if additional migration runway is needed.
- Standards Activity (WebKit): Latest discussion from @annevk: "WebKit is cautiously supportive. We'd probably wait for one implementation to fully remove support, though if there's a known list of origins that par..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Intent to Deprecate and Remove XSLT" (87 points, 149 comments).

## Standards Positions

- **WebKit:** [Should we remove XSLT from the web platform?](https://github.com/whatwg/html/issues/11523) [open]

## Web-features Group

*group-level data: web-features [`xslt`](https://webstatus.dev/features/xslt), shared with 1 other ChromeStatus feature*

- Share of tests passing in the web-features group `xslt` on [wpt.fyi](https://wpt.fyi/results?q=feature:xslt) (via webstatus.dev) — stable: Chrome 53.3% · Edge 80% · Firefox 86.7% · Safari 93.3%; experimental: Chrome 53.3% · Edge 86.7% · Firefox 86.7% · Safari 100%

## Community Discussions & Social Pulse

- 💬 **Hacker News:** [Intent to Deprecate and Remove XSLT](https://news.ycombinator.com/item?id=45779261) — *87 pts, 149 comments*
- 💬 **Hacker News:** [Intent to Deprecate and Remove: XSLT](https://news.ycombinator.com/item?id=45734849) — *3 pts, 1 comments*
- 💬 **Hacker News:** [Intent to Deprecate and Remove: XSLT](https://news.ycombinator.com/item?id=6102357) — *2 pts, 0 comments*
- 🐦 **Twitter / X:** [え〜！？  Deprecate and remove XSLT - Chrome Platform Status https://t.co/evROwN0A5N](https://twitter.com/fuktommy/status/2114228246833459374) — *by @fuktommy, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Intent to Deprecate and Remove XSLT](https://groups.google.com/a/chromium.org/g/blink-dev/c/CxL4gYZeSJA/m/yNs4EsD5AQAJ) *(groups.google.com · 2025-11-01T04:31:52Z)*
  > Good riddance. The web needs to shed all the old baggages like this to move forward. Looking forward to MCP becoming part of the browser.
- [Intent to Deprecate and Remove: XSLT](https://groups.google.com/a/chromium.org/forum) *(groups.google.com · 2013-07-25T13:40:31Z)*
- [Removing XSLT for a more secure browser \| Web Platform \| Chrome for Developers](https://developer.chrome.com/docs/web-platform/deprecating-xslt) *(developer.chrome.com)*
  > Major browser vendors—\*\*Chromium (Blink)\*\*, \*\*Mozilla (Gecko)\*\*, and \*\*Apple (WebKit)\*\*—reached a consensus to deprecate and permanently remove client-side \*\*XSLT (Extensible Stylesheet Language Transformations)\*\* from the web platform Google publish...
- [Chrome is removing XSLT on November 17, 2026: what breaks and what to do \| XSLT Playground](https://xsltplayground.com/blog/posts/chrome-removing-xslt-what-to-do) *(xsltplayground.com)*
  > xml-stylesheet?&gt;\` processing instruction below 0.001%) Meanwhile, browsers relied on complex, legacy C libraries like \*\*\`libxslt\`\*\*, which presented severe, recurring memory-safety risks (such as buffer overflows and use-after-free vulnerabilities)
- [chrome.com](https://developer.chrome.com/release-notes/147) *(developer.chrome.com)*
  > \*\*Rust XML parser transition\*\*: Google highlighted that eliminating \`libxslt\` accompanies their effort to replace C-based \`libxml2\` with an in-house, memory-safe \*\*Rust XML parser\*\*, substantially shrinking the browser's untrusted attack surface
- [chrome.com](https://developer.chrome.com/blog/chrome-147-beta) *(developer.chrome.com)*
  > \*\*Rust XML parser transition\*\*: Google highlighted that eliminating \`libxslt\` accompanies their effort to replace C-based \`libxml2\` with an in-house, memory-safe \*\*Rust XML parser\*\*, substantially shrinking the browser's untrusted attack surface
- [biggo.com](https://finance.biggo.com/news/202511011343_XSLT-Removal-Precedent-Debate) *(finance.biggo.com)*
  > Browser vendors coordinated under WHATWG to coordinate deprecation stages Conversely, digital archivists and backward-compatibility advocates expressed regret over losing the ability to view historic XML documents and declarative document transformat...
- [dev.to](https://dev.to/alanwest/chrome-158-removes-xslt-on-nov-17-heres-what-breaks-and-how-to-fix-it-206c) *(dev.to)*
  > Both \*\*Gecko\*\* (Mozilla issued an \*Intent to Unship\* aligned toward mid-2027) and \*\*WebKit\*\* signaled their support, ensuring that developers cannot rely on cross-browser divergence as a workaround Independent developer write-ups (e.g., \*"Chrome 158 ...
- [iso.org](https://committee.iso.org/sites/tc81/home/news/content-left-area/news-and-updates/news-12.html) *(committee.iso.org)*
  > \*\*Legacy Internal Tools\*\*: Many intranet apps, ISO documentation viewers (e.g., ISO 1750), and reporting dashboards still rely on client-side XSL transforms
- [doctor-seo.net](https://doctor-seo.net/en/blog/news/chrome-edge-removing-xslt) *(doctor-seo.net)*
  > \| \*\*Reverse Origin Trial\*\* \| Chrome 152 (Mid 2026) \| Sites can request a temporary token to keep XSLT running during migration \| \*\*Complete End-of-Life\*\* \| Chrome 176 / Firefox (Mid 2027) \| Enterprise policy and reverse origin trials expire completel...
- [ycombinator.com](https://news.ycombinator.com/item?id=45955183) *(news.ycombinator.com)*
  > On forums like \*Hacker News\*, security engineers universally applauded the removal, noting that \`libxslt\` has repeatedly been a vehicle for sandbox escapes and zero-day vulnerabilities (e.g., CVE-2025-7425 and CVE-2022-22834) A former maintainer even...
- [nintex.com](https://community.nintex.com/nintex-automation-k2-3/xslt-deprecation-in-google-chrome-browser-74072) *(community.nintex.com)*
  > Major enterprise platforms that still relied on XSLT for grids and report rendering (e.g., Nintex K2, Aras Innovator, Microsoft RD Web Access) had to rush hotfixes and patch guidelines advising clients to update software or enforce the \`XSLTEnabled\` ...
- [xlmsolutions.com](https://xlmsolutions.com/blog/chrome-is-removing-xslt-support-what-aras-innovator-customers-need-to-do-before-november-2026) *(xlmsolutions.com)*
  > Major enterprise platforms that still relied on XSLT for grids and report rendering (e.g., Nintex K2, Aras Innovator, Microsoft RD Web Access) had to rush hotfixes and patch guidelines advising clients to update software or enforce the \`XSLTEnabled\` ...
- [intersystems.com](https://community.intersystems.com/post/test-your-site-against-chromes-xslt-removal-today) *(community.intersystems.com)*
  > Chrome's official guidance and developer tutorials emphasize four migration strategies NET) and deliver rendered HTML/CSS to the client
- [Deprecate and remove XSLT \[435623334\] - Chromium](https://issues.chromium.org/issues/435623334) *(issues.chromium.org)*
  > Chromium Sign in
- [Chromium base browsers removing support for XSLT view \| InterSystems DC](https://community.intersystems.com/post/chromium-base-browsers-removing-support-xslt-view) *(community.intersystems.com · 2026-09-28T00:00:00)*
  > Chromium base browsers removing support for XSLT view \| InterSystems DC Skip to main content Learning Documentation Community Open Exchange Ideas Portal Global Masters Certification Partner Directory Startup Hub Ask DC AI EN EN JP ES PT FR CN Spanish...
- [Intent to Deprecate and Remove: Deprecate and remove XSLT \| Lobsters](https://lobste.rs/s/r3ckga/intent_deprecate_remove_deprecate) *(lobste.rs · 2025-10-31T00:00:00)*
  > Intent to Deprecate and Remove: Deprecate and remove XSLT \| Lobsters Lobsters 36 Intent to Deprecate and Remove: Deprecate and remove XSLT browsers groups.google.com via inactive-user 2025-10-31 23:56:34 \| caches Archive.org Ghostarchive \| 31 comment...
- [Intent to Deprecate and Remove: Deprecate and remove XSLT](https://groups.google.com/a/chromium.org/g/blink-dev/c/CxL4gYZeSJA) *(groups.google.com · 2025-10-24T00:00:00)*
  > Intent to Deprecate and Remove: Deprecate and remove XSLT Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Deprecate an...
- [Intent to Deprecate and Remove: XSLT](https://groups.google.com/a/chromium.org/g/blink-dev/c/zIg2KC7PyH0/m/a3VeYmvEAAAJ) *(groups.google.com)*
  > Web sites that rely on XSLT will break entirely without XSLT support in the browser and will need to be updated to perform their XSL transform on the server or to use a polyfill. To mitigate this risk, I plan to remove support gradually. My first ste...
- [Intent to Deprecate and Remove: XSLT (Again)](https://groups.google.com/a/chromium.org/g/blink-dev/c/6MOMhQaX3N8/m/s-8UHedjCAAJ) *(groups.google.com)*
  > I think that the most important lesson from the Attr.ownerElement removal was &quot;We shouldn&#x27;t remove APIs that have small value on the path towards a removal that has significant value.&quot; However, it&#x27;s very likely that removing XSLT ...
- [Intent to Deprecate and Remove: XSLT](https://groups.google.com/a/chromium.org/g/blink-dev/c/zIg2KC7PyH0/m/Ho1tm5mo7qAJ) *(groups.google.com)*
  > A use counter measurement from the Chrome Beta channel indicates that less than 0.02% of page views use XSLT. Moreover, less than 0.003% of page view use the XSLT processing instruction.
- [Michael Tsai - Blog - Removing XSLT From the Web Platform](https://mjtsai.com/blog/2025/08/21/removing-xslt-from-the-web-platform) *(mjtsai.com · 2025-08-21T00:00:00)*
  > &lt;strong&gt;Chromium has officially deprecated XSLT, including the XSLTProcessor JavaScript API and the XML stylesheet processing instruction&lt;/strong&gt;. We intend to remove support from version 155 (November 17, 2026). The Firefox and WebKit projects have...
- [Previous release notes - Chrome Enterprise and Education Help](https://support.google.com/chrome/a/answer/10314655?hl=en-IN) *(support.google.com)*
  > Chrome 176 on Android, ChromeOS, Linux, macOS, Windows Origin Trial and Enterprise Policy stop functioning. XSLT is disabled for all users. ... recently announced that the current approach to third-party cookies is to be maintained, following which, ...
- [The tangled web of XSLT browser support \[LWN.net\]](https://lwn.net/Articles/1034560) *(lwn.net · 2025-08-27T00:00:00)*
  > Barring a sudden reversal, the Chrome team looks poised to ship that prototype before too long. &lt;strong&gt;The Chrome Platform Status page for the &quot;feature&quot; to deprecate XSLT lists 2026 as the estimated shipping year&lt;/strong&gt;, though many of t...
- [XSLT Debate Leads to Bigger Questions of Web Governance - The New Stack](https://thenewstack.io/xslt-debate-leads-to-bigger-questions-of-web-governance) *(thenewstack.io · 2025-09-02T13:16:43)*
  > Removing (or changing) a browser feature might improve security, privacy or performance; and that gets weighed against the inconvenience that removal would cause to users and developers. Some obsolete, deprecated features — like &lt;font&gt;, align= ...
- [Chrome Removes XSLT: What Breaks and How to Detect It](https://ortamarco.me/en/blog/chrome-removes-xslt-what-breaks) *(ortamarco.me · 2026-09-13T00:00:00)*
  > Mozilla took a positive position, ... wait for one engine to remove it fully. The HTML standard marked XSLT deprecated on &lt;strong&gt;25 August 2026&lt;/strong&gt;....
- [Removing XSLT from Chromium \[LWN.net\]](https://lwn.net/Articles/1045161) *(lwn.net · 2025-11-05T00:00:00)*
  > Mason Freed and Dominik Röttsches ... and Chrome browser: &lt;strong&gt;Chromium has officially deprecated XSLT, including the XSLTProcessor JavaScript API and the XML stylesheet processing instruction. We intend to remove support from version 155 (Novembe...
- [Deprecate and remove XSLT - Chrome Platform Status](https://cr-status.appspot.com/feature/4709671889534976) *(cr-status.appspot.com)*
  > Chrome Platform Status
- [Intent to Deprecate and Remove: XSLT](https://groups.google.com/a/chromium.org/g/blink-dev/c/zIg2KC7PyH0) *(groups.google.com)*
  > To mitigate this risk, I plan to remove support gradually. My first step will be to &lt;strong&gt;remove the API entry points&lt;/strong&gt; (i.e., the XSLT processing instruction and the · XSLTProcessor JavaScript API).
- [Intent to Deprecate and Remove: XSLT (Again) - Google Groups](https://groups.google.com/a/chromium.org/forum/?_escaped_fragment_=topic%2Fblink-dev%2F6MOMhQaX3N8) *(groups.google.com)*
  > dominicc@chromium.org · XSLT is a declarative language for transforming XML. Transforming XML into HTML is a typical use on the web. XSLT 1.0 is implemented in Blink, although it’s incomplete. (xsl:include does not work, for example.) Our implementat...
- [Re: \[blink-dev\] Intent to Deprecate and Remove: XSLT - Google Groups](https://groups.google.com/a/chromium.org/d/msg/blink-dev/zIg2KC7PyH0/OCARrTH-GKEJ) *(groups.google.com)*
  > Posted by Jake, Jul 24, 2013 9:05 PM
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: XSLT - Google Groups](https://groups.google.com/a/chromium.org/d/msg/blink-dev/zIg2KC7PyH0/zmNw3BmKzQcJ) *(groups.google.com)*
  > Posted by Kenney, Jan 2, 2014 9:44 AM
- [No, Google Did Not Unilaterally Decide to Kill XSLT – Eric’s Archived Thoughts](https://meyerweb.com/eric/thoughts/2025/08/22/no-google-did-not-unilaterally-decide-to-kill-xslt) *(meyerweb.com)*
  > No, Google Did Not Unilaterally Decide to Kill XSLT &#8211; Eric’s Archived Thoughts meyerweb.com No, Google Did Not Unilaterally Decide to Kill XSLT Published 1 year, 2 months past It’s uncommon, but not unheard of, for a GitHub issue to spark an up...
- [Chrome is Removing XSLT: dates, impact and what to do](https://xmlvalidators.com/guides/chrome-is-removing-xslt) *(xmlvalidators.com)*
  > Chrome is Removing XSLT: dates, impact and what to do Skip to content &lt;/&gt; xmlvalidators All tools EN English Español 日本語 Français Deutsch Português 한국어 Italiano A A Validate XML Validator Syntax Checker XSD Validator DTD Validator SVG Validator XSD G...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Deprecate and remove XSLT \[435623334\] - Chromium](https://issues.chromium.org/issues/435623334) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/4709671889534976`)*
  > Chromium Sign in
- [Chromium base browsers removing support for XSLT view \| InterSystems DC](https://community.intersystems.com/post/chromium-base-browsers-removing-support-xslt-view) *(community.intersystems.com · 2026-09-28T00:00:00)* *(Cites: `https://chromestatus.com/feature/4709671889534976`)*
  > Chromium base browsers removing support for XSLT view \| InterSystems DC Skip to main content Learning Documentation Community Open Exchange Ideas Portal Global Masters Certification Partner Directory Startup Hub Ask DC AI EN EN JP ES PT FR ...

## 📚 Platform Documentation & Specifications

- [1990759 - Investigate deprecation and removal of XSLT (deprecate and remove XSLT)](https://bugzilla.mozilla.org/show_bug.cgi?id=1990759) *(bugzilla.mozilla.org)*
- [GovInfo support for deprecated browser XSLT functionality · Issue #208 · usgpo/bulk-data · GitHub](https://github.com/usgpo/bulk-data/issues/208) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 59 result(s) found across 10 planned queries — **21 verified relevant**
  - `"chromestatus.com/feature/4709671889534976" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"Deprecate and remove XSLT" API` — *Core feature API query* (8 returned)
  - `"Deprecate and remove XSLT" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"v1.0" OR "www.w3" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and remove XSLT" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (7 returned)
  - `"Deprecate and remove XSLT" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"deprecating XSLT" OR "deprecate and remove XSLT" (Chromium OR Chrome OR WebKit OR Gecko)` — *Find official browser vendor announcements, timelines, and tracking items for removing native XSLT support.* (8 returned)
  - `"XSLTProcessor" alternatives OR migrate modern javascript ("Saxon-JS" OR "DOMParser")` — *Discover developer migration tutorials, JS alternatives, and fallback libraries replacing client-side XSL transformations.* (2 returned)
  - `"new XSLTProcessor" importStylesheet transformToFragment example javascript` — *Locate real-world JavaScript code examples demonstrating legacy client-side XSLTProcessor API methods.* (8 returned)
  - `"intent to deprecate" ("XSLT" OR "XSLTProcessor") (site:groups.google.com OR "blink-dev" OR "Hacker News")` — *Track developer feedback, standards discussions, and security debates over deprecating XSLT in browser engines.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **12 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 3 result(s) found — **3 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 5 result(s) found — **1 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "xslt", shared with 1 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "xslt": Chrome 53.3% passing (stable)*
- **Sources cited by the AI synthesis:** 7 result(s) found — **7 verified relevant**

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 11 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4709671889534976)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4709671889534976)
- [Chromium Tracking Bug](https://crbug.com/435623334)
