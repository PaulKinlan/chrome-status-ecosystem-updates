# Deprecate and remove XSLT

> **Report Week:** 2026-W45 | **Milestone:** Chrome 158 | **Category:** Stepped rollout

## Overview

\[XSLT v1.0\](https://www.w3.org/TR/xslt-10/), which all browsers adhere to, was standardized in 1999. In the meantime, XSLT has evolved to v2.0 and v3.0, adding features, and growing apart from the old version frozen into browsers. This lack of advancement, coupled with the rise of JavaScript libraries and frameworks that offer more flexible and powerful DOM manipulation, has led to a significant decline in the use of client-side XSLT. Its role within the web browser has been largely superseded by JavaScript-based technologies, such as JSON and React.  Chromium uses the \*\*libxslt\*\* library to process these transformations, and \[libxslt was unmaintained\](https://discourse.gnome.org/t/stepping-down-as-libxslt-maintainer/27615) for ~6 months of 2025. Libxslt is a complex, aging C codebase of the type notoriously susceptible to memory safety vulnerabilities like buffer overflows, which can lead to arbitrary code execution. Because client-side XSLT is now a niche, rarely-used feature, these libraries receive far less maintenance and security scrutiny than core JavaScript engines, yet they represent a direct, potent attack surface for processing untrusted web content. Indeed, XSLT is the source of several recent high-profile security exploits that continue to put browser users at risk.   For these reasons, Chromium (along with both other browser engines, Gecko and WebKit) plans to deprecate and remove XSLT from the web platform. The modern web is powered by three major browser engines: \[Blink\](https://www.chromium.org/blink/) (Chromium), \[Gecko\](https://firefox-source-docs.mozilla.org/overview/gecko.html) (Firefox), and \[WebKit\](https://webkit.org/) (Safari). They interpret code to render pages.   For more details, see this \[Chrome for Developers article\](https://developer.chrome.com/docs/web-platform/deprecating-xslt).  From Chrome 158, XSLT will stop functioning on Stable releases.

### Motivation

Security risks for all users outweigh the very small usage of this feature on the open web.  Usage of XSLTProcessor (https://chromestatus.com/metrics/feature/timeline/popularity/79) is fairly volatile, registering somewhere between 0.01% and 0.1% of page loads, averaging around 0.05% over time. These numbers are above the typical 0.001% deprecation threshold. Again, we feel that the increased potential for breakage is balanced by the reduced security risk to 100% of Chromium users. And we are doing everything we can to mitigate this breakage and be proactive in reaching out to potentially affected sites and particularly libraries that might account for significant chunks of the overall usage. In addition, several sites we surveyed that use XSLTProcessor have feature detection code with fallbacks to JS libraries like Saxonica. Of the ~220 sites we've surveyed so far, roughly 72% of them are still functional even with XSLT disabled.  The usage of XSL Processing Instructions (https://chromestatus.com/metrics/feature/timeline/popularity/78) is significantly lower, around 0.001% for the last few years.

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 853 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Client-side XSLT is being deprecated across the web platform, driven by Chromium's aggressive timeline to eliminate the high-risk, unmaintained libxslt C library by Chrome 158. While its browser usage is low (around 0.01%–0.05% of page loads), the feature's removal is prioritized because memory-safety vulnerabilities outweigh the niche utility of an API frozen in 1999. Major browser engines agree on the necessity of sunsetting the feature, though the deprecation breaks legacy portals, styled RSS feeds, and XML sitemaps.

### Recommendations
- Actionable Advice: Audit codebases immediately for usages of XSLTProcessor and XML stylesheet processing instructions, shifting transformation logic server-side or migrating to JavaScript/Wasm-based parsers like Saxon-JS or npm alternatives. Enterprise teams facing migration delays should enable the temporary XSLT enterprise policy flag and verify compatibility using Chrome early-warning flags.
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

## 📰 Ecosystem Blogs & Articles

- [Intent to Deprecate and Remove XSLT](https://groups.google.com/a/chromium.org/g/blink-dev/c/CxL4gYZeSJA/m/yNs4EsD5AQAJ) *(groups.google.com · 2025-11-01T04:31:52Z)*
  > Good riddance. The web needs to shed all the old baggages like this to move forward. Looking forward to MCP becoming part of the browser.
- [Intent to Deprecate and Remove: XSLT](https://groups.google.com/a/chromium.org/forum) *(groups.google.com · 2013-07-25T13:40:31Z)*
- [Removing XSLT for a more secure browser  \|  Web Platform  \|  Chrome for Developers](https://developer.chrome.com/docs/web-platform/deprecating-xslt) *(developer.chrome.com)*
  > 0) across all major browser engines (Blink/Chromium, Gecko/Firefox, and WebKit/Safari) \*Chrome 158 (November 17, 2026):\* Full removal on Stable releases
- [Chrome is removing XSLT on November 17, 2026: what breaks and what to do \| XSLT Playground](https://xsltplayground.com/blog/posts/chrome-removing-xslt-what-to-do) *(xsltplayground.com)*
  > 0) across all major browser engines (Blink/Chromium, Gecko/Firefox, and WebKit/Safari) \`libxslt\` is an aging, complex codebase prone to memory safety exploits (e.g., buffer overflows, use-after-free vulnerabilities like CVE-2025-7425 and CVE-2022-228...
- [iso.org](https://committee.iso.org/sites/tc81/home/news/content-left-area/news-and-updates/news-12.html) *(committee.iso.org)*
  > \*Chrome 158 (November 17, 2026):\* Full removal on Stable releases \*(Firefox and WebKit are planning aligned removals)
- [intersystems.com](https://community.intersystems.com/post/test-your-site-against-chromes-xslt-removal-today) *(community.intersystems.com)*
  > \*\*Key Takeaways:\*\* Explains the availability of the temporary \`XSLTEnabled\` enterprise policy flag, Origin Trials, and early-warning defaults in Canary/Dev channels \*\*Article:\*\* \[\*Chrome 158 Removes XSLT: What Breaks and How to Fix It\*\](https://xslt-...
- [Chrome 158 Removes XSLT on Nov 17. Here's What Breaks and How to Fix It - DEV Community](https://dev.to/alanwest/chrome-158-removes-xslt-on-nov-17-heres-what-breaks-and-how-to-fix-it-206c) *(dev.to)*
  > js before delivering HTML to clients Commentators noted that WebKit, Gecko, and Blink reached broad consensus in WHATWG (Issue #11523) to deprecate the specification in lockstep
- [ycombinator.com](https://news.ycombinator.com/item?id=45955183) *(news.ycombinator.com)*
  > Articles on \*LWN.net\* (\*"The tangled web of XSLT browser support"\*) and threads on Hacker News discuss the balance between browser security and backward compatibility Developers noted that while client-side XSLT is niche, its removal formally ends de...
- [The tangled web of XSLT browser support \[LWN.net\]](https://lwn.net/Articles/1034560) *(lwn.net)*
  > Articles on \*LWN.net\* (\*"The tangled web of XSLT browser support"\*) and threads on Hacker News discuss the balance between browser security and backward compatibility Developers noted that while client-side XSLT is niche, its removal formally ends de...
- [XSLT Deprecation in Google Chrome Browser \| Community](https://community.nintex.com/nintex-automation-k2-3/xslt-deprecation-in-google-chrome-browser-74072) *(community.nintex.com)*
  > \*\*Enterprise Notices:\*\* Web services built heavily in the 2000s—such as Microsoft RDWeb, Aras Innovator PLM, ISO standard catalog views, and legacy ERP/B2B tools—rely on in-browser XSLT to render data tables and reports Vendors (e.g., Nintex, Aras) h...
- [xlmsolutions.com](https://xlmsolutions.com/blog/chrome-is-removing-xslt-support-what-aras-innovator-customers-need-to-do-before-november-2026) *(xlmsolutions.com)*
  > \*\*Enterprise Notices:\*\* Web services built heavily in the 2000s—such as Microsoft RDWeb, Aras Innovator PLM, ISO standard catalog views, and legacy ERP/B2B tools—rely on in-browser XSLT to render data tables and reports Vendors (e.g., Nintex, Aras) h...
- [microsoft.com](https://learn.microsoft.com/en-za/answers/questions/6020480/xslt-that-functionality-is-being-removed-browser-m) *(learn.microsoft.com)*
  > \*\*Enterprise Notices:\*\* Web services built heavily in the 2000s—such as Microsoft RDWeb, Aras Innovator PLM, ISO standard catalog views, and legacy ERP/B2B tools—rely on in-browser XSLT to render data tables and reports
- [Chromium base browsers removing support for XSLT view \| InterSystems DC](https://community.intersystems.com/post/chromium-base-browsers-removing-support-xslt-view) *(community.intersystems.com · 2026-09-28T00:00:00)*
  > Chromium base browsers removing support for XSLT view \| InterSystems DC Skip to main content Learning Documentation Community Open Exchange Ideas Portal Global Masters Certification Partner Directory Startup Hub Ask DC AI EN EN JP ES PT FR CN Spanish...
- [Intent to Deprecate and Remove: Deprecate and remove XSLT \| Lobsters](https://lobste.rs/s/r3ckga/intent_deprecate_remove_deprecate) *(lobste.rs · 2025-10-31T00:00:00)*
  > Intent to Deprecate and Remove: Deprecate and remove XSLT \| Lobsters Lobsters 36 Intent to Deprecate and Remove: Deprecate and remove XSLT browsers groups.google.com via inactive-user 2025-10-31 23:56:34 \| caches Archive.org Ghostarchive \| 31 comment...
- [Intent to Deprecate and Remove: Deprecate and remove XSLT](https://groups.google.com/a/chromium.org/g/blink-dev/c/CxL4gYZeSJA) *(groups.google.com · 2025-10-24T00:00:00)*
  > Intent to Deprecate and Remove: Deprecate and remove XSLT Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Deprecate an...
- [Michael Tsai - Blog - Removing XSLT From the Web Platform](https://mjtsai.com/blog/2025/08/21/removing-xslt-from-the-web-platform) *(mjtsai.com · 2025-08-21T00:00:00)*
  > The proposed timeline for Chromium is to &lt;strong&gt;deprecate in M143, remove in M155 (except for Origin Trial and Enterprise Policy users), and discontinue the Origin Trial and Enterprise Policy in M164&lt;/strong&gt;. Update (2025-11-05): Mason Freed and Do...
- [Intent to Deprecate and Remove: XSLT](https://groups.google.com/a/chromium.org/g/blink-dev/c/zIg2KC7PyH0/m/a3VeYmvEAAAJ) *(groups.google.com)*
  > Web sites that rely on XSLT will break entirely without XSLT support in the browser and will need to be updated to perform their XSL transform on the server or to use a polyfill. To mitigate this risk, I plan to remove support gradually. My first ste...
- [Removing XSLT for a more secure browser](https://simonwillison.net/2025/Nov/5/removing-xslt) *(simonwillison.net · 2025-11-05T22:24:57)*
  > Removing XSLT for a more secure browser Simon Willison’s Weblog Newsletter Sponsored by: Greptile &mdash; Your code reviewer uses Computer Use to catch bugs by opening your app and clicking through it. Now you can configure its test environment and d...
- [r/webdev on Reddit: XSLT.RIP - Google are killing XSLT!](https://www.reddit.com/r/webdev/comments/1ot89gw/xsltrip_google_are_killing_xslt) *(reddit.com · 2025-11-10T08:14:07)*
  > Instead of removing it or continually fixing their vulnerable XSLT v1.0 implementations, they could upgrade to XSLT v3.0 which has been around since ~2017. There is already a project working on this, called xrust ... Hi I&#x27;m Aiden, and I like XSL...
- [Chrome XSLT Removal: What Breaks and How to Fix It](https://xslt-polyfill.com/chrome-xslt-removal) *(xslt-polyfill.com · 2026-10-04T00:00:00)*
  > Chrome&#x27;s XSLT deprecation ends in removal: &lt;strong&gt;from November 17, 2026, Chrome stops applying XSL stylesheets&lt;/strong&gt;.
- [Explore New Chrome Enterprise Browser, Core, Premium Features](https://chromeenterprise.google/intl/en_us/resources/release-notes/?ver=152&featId=5148353408139264) *(chromeenterprise.google · 2026-10-21T00:00:00)*
  > Indeed, XSLT is the source of several ... at risk. For these reasons, &lt;strong&gt;Chromium (along with both other browser engines, Gecko and WebKit) plans to deprecate and remove XSLT from the web platform&lt;/strong&gt;....
- [Chrome 152 beta  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > &lt;strong&gt;Chrome has deprecated client-side XSLT, and is getting close to removing it from the browser, in Chrome 158.&lt;/strong&gt; A deprecation (origin) trial has been set up to allow sites to extend the migration time away from XSLT by about nine months...
- [XSLT Debate Leads to Bigger Questions of Web Governance - The New Stack](https://thenewstack.io/xslt-debate-leads-to-bigger-questions-of-web-governance) *(thenewstack.io · 2025-09-02T13:16:43)*
  > Removing (or changing) a browser feature might improve security, privacy or performance; and that gets weighed against the inconvenience that removal would cause to users and developers. Some obsolete, deprecated features — like &lt;font&gt;, align= ...
- [Removing XSLT from Chromium \[LWN.net\]](https://lwn.net/Articles/1045161) *(lwn.net · 2025-11-05T00:00:00)*
  > Mason Freed and Dominik Röttsches ... (XSLT) from the Chromium project and Chrome browser: &lt;strong&gt;Chromium has officially deprecated XSLT, including the XSLTProcessor JavaScript API and the XML stylesheet processing instruction&lt;/strong&gt;....
- [Chrome is Removing XSLT: dates, impact and what to do](https://xmlvalidators.com/guides/chrome-is-removing-xslt) *(xmlvalidators.com)*
  > Two things go away, the XSLTProcessor JavaScript class and the &lt;?xml-stylesheet type=&quot;text/xsl&quot;?&gt; processing instruction, and both stop working on Chrome stable on &lt;strong&gt;17 November 2026&lt;/strong&gt;.
- [Feature: Deprecate and remove XSLT - Chrome Platform Status](https://cr-status.appspot.com/feature/4709671889534976) *(cr-status.appspot.com)*
  > Sign in with GoogleSign in with Google. Opens in new tab
- [Why Google Killing XSLT Matters - DEV Community](https://dev.to/bibimbop123/why-google-killing-xslt-matters-3kl6) *(dev.to · 2025-11-18T04:27:19)*
  > Explore alternatives: server-side transforms, XSLT.js, Saxon-JS. Plan migration if needed.
- [XSLT Transformer: run XSLT 1.0 in your browser](https://xmlvalidators.com/xslt-transformer) *(xmlvalidators.com)*
  > Chrome 158, on 17 November 2026, stops XSLT working on stable, and Chrome 176 on 17 August 2027 removes XSLTProcessor and the xml-stylesheet processing instruction outright. A tool built on the native processor alone would break on those dates. This ...
- [Chrome and Edge are removing XSLT: what breaks and what does not \| Hacker News](https://news.ycombinator.com/item?id=50134617) *(news.ycombinator.com · 2026-10-19T16:41:43)*
  > I lost any enthusiasm for XML after my experience with WDDX and XML-RPC, but as a foundation for HTML it was the best thing going. And maybe still is, given the absence of cross-toolchain contenders? Ditto for XSLT, at least if disregarding the choic...
- [As of the next version of Chrome, XSLT will be gated behind a flag. Google have ... \| Hacker News](https://news.ycombinator.com/item?id=44991280) *(news.ycombinator.com · 2025-08-27T02:52:27)*
  > Google have also asked for it to be removed from the standard \[0\] · Citation? That would greatly surprise me in its abruptness and severity (they only just started talking about it this month, and acknowledge it’s particularly risky for enterprise) a...
- [Drop-in XSLT replacement for browsers (Chrome Beta broke native XSLT) \| Hacker News](https://news.ycombinator.com/item?id=46780863) *(news.ycombinator.com · 2026-01-27T14:59:57)*
  > &lt;strong&gt;Chrome Beta no longer supports native XSLT processing&lt;/strong&gt;, so existing XML+XSLT workflows are already broken there. XSLT removal will break multiple government and regulatory sites that rely on proven standards · I built a drop-in replac...
- [Removing XSLT for a more secure browser \| Hacker News](https://news.ycombinator.com/item?id=45823059) *(news.ycombinator.com · 2025-11-07T23:04:05)*
  > I realize that not that many feeds are actually doing this, but that&#x27;s because feed authors are tech-savvy and know what to do with an RSS/Atom link · But someone who hasn&#x27;t seen/used an RSS reader will see a wall of plain-text gibberish (o...
- ["Remove mentions of XSLT from the html spec" \| Hacker News](https://news.ycombinator.com/item?id=44952185) *(news.ycombinator.com · 2025-08-29T12:36:44)*
  > It&#x27;s an issue open on the HTML spec for the HTML spec maintainers to consider. It was opened by a Chrome engineer after at least two meetings where a Mozilla engineer raised the topic, and where there was apparently vendor support for it · This ...
- [Google did not unilaterally decide to kill XSLT \| Hacker News](https://news.ycombinator.com/item?id=44987239) *(news.ycombinator.com · 2025-08-26T01:59:53)*
  > The second part was basically the author saying &quot;calm down guys, relax, there is a process.&quot; - and then speculating what that process might be · If there is an orderly, public process that is being followed here, that includes a time and pl...
- [Intent to Deprecate and Remove XSLT \| Hacker News](https://news.ycombinator.com/item?id=45779261) *(news.ycombinator.com · 2025-11-03T07:09:21)*
  > There have been other removals, but few of them were of even specified features, and I don’t think any of them have been universally available. One of the closest might be showModalDialog &lt;https://web.archive.org/web/20140401014356/http://dev.oper...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Google Chrome Deprecating XLST · Issue #624 · mtconnect/cppagent · GitHub](https://github.com/mtconnect/cppagent/issues/624) *(github.com · 2026-10-26T19:25:15)* *(Cites: `https://chromestatus.com/feature/4709671889534976`)*
  > Google Chrome Deprecating XLST · Issue #624 · mtconnect/cppagent · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You sig...
- [Chromium base browsers removing support for XSLT view \| InterSystems DC](https://community.intersystems.com/post/chromium-base-browsers-removing-support-xslt-view) *(community.intersystems.com · 2026-09-28T00:00:00)* *(Cites: `https://chromestatus.com/feature/4709671889534976`)*
  > Chromium base browsers removing support for XSLT view \| InterSystems DC Skip to main content Learning Documentation Community Open Exchange Ideas Portal Global Masters Certification Partner Directory Startup Hub Ask DC AI EN EN JP ES PT FR ...
- [xslt · Issue #1310 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1310) *(github.com · 2026-08-14T17:30:47)* *(Cites: `https://chromestatus.com/feature/4709671889534976`)*
  > xslt · Issue #1310 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You signed out...

## 📚 Platform Documentation & Specifications

- [Google Chrome Deprecating XLST · Issue #624 · mtconnect/cppagent · GitHub](https://github.com/mtconnect/cppagent/issues/624) *(github.com)*
- [xslt · Issue #1310 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1310) *(github.com)*
- [1990759 - Investigate deprecation and removal of XSLT (deprecate and remove XSLT)](https://bugzilla.mozilla.org/show_bug.cgi?id=1990759) *(bugzilla.mozilla.org)*
- [Re: Issue #11523 Removal of XSLT from the web platform · Issue #12103 · whatwg/html · GitHub](https://github.com/whatwg/html/issues/12103) *(github.com)*
- [GitHub - mfreed7/xslt\_polyfill: A polyfill for XSLTProcessor · GitHub](https://github.com/mfreed7/xslt_polyfill) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 59 result(s) found across 10 planned queries — **33 verified relevant**
  - `"chromestatus.com/feature/4709671889534976" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (5 returned)
  - `"Deprecate and remove XSLT" API` — *Core feature API query* (8 returned)
  - `"Deprecate and remove XSLT" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"v1.0" OR "www.w3" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and remove XSLT" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (7 returned)
  - `"Deprecate and remove XSLT" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"XSLTProcessor" deprecate OR remove Chrome OR Chromium OR "libxslt"` — *Finds browser vendor deprecation announcements, Intent to Deprecate threads, and ecosystem tracking for the removal of client-side XSLT.* (8 returned)
  - `"deprecating XSLT" OR "XSLT deprecation" migrate OR alternative JavaScript "Saxon-JS"` — *Surfaces developer guides, migration tutorials, and practical alternatives for replacing client-side XML stylesheet transformations with modern JavaScript.* (2 returned)
  - `typeof XSLTProcessor "transformToFragment" OR "importStylesheet" fallback` — *Locates real-world JavaScript code patterns showing XSLTProcessor API usage, feature detection, and polyfill or fallback implementations.* (8 returned)
  - `site:news.ycombinator.com OR site:reddit.com/r/webdev "XSLT" ("deprecate" OR "removal") Chrome` — *Captures community reactions, discussions, and sentiment surrounding the browser-wide removal of native XSLT 1.0 support and its security implications.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **2 verified relevant**
- **Hacker News Algolia:** 3 result(s) found — **3 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 5 result(s) found — **1 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "xslt", shared with 1 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "xslt": Chrome 53.3% passing (stable)*

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4709671889534976)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4709671889534976)
- [Chromium Tracking Bug](https://crbug.com/435623334)
