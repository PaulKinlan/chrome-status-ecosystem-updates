# Deprecate and remove XSLT

> **Report Week:** 2026-W46 | **Milestone:** Chrome 158 | **Category:** Stepped rollout

## Overview

Extensible Stylesheet Language Transformations \[XSLT v1.0\](https://www.w3.org/TR/xslt-10/), which all browsers adhere to, was standardized in 1999. In the meantime, XSLT has evolved to v2.0 and v3.0, adding features, and growing apart from the old version frozen into browsers. This lack of advancement, coupled with the rise of JavaScript libraries and frameworks that offer more flexible and powerful DOM manipulation, has led to a significant decline in the use of client-side XSLT. Its role within the web browser has been largely superseded by JavaScript-based technologies, such as JSON and React.  Chromium uses the \*\*libxslt\*\* library to process these transformations, and \[libxslt was unmaintained\](https://discourse.gnome.org/t/stepping-down-as-libxslt-maintainer/27615) for ~6 months of 2025. Libxslt is a complex, aging C codebase of the type notoriously susceptible to memory safety vulnerabilities like buffer overflows, which can lead to arbitrary code execution. Because client-side XSLT is now a niche, rarely-used feature, these libraries receive far less maintenance and security scrutiny than core JavaScript engines, yet they represent a direct, potent attack surface for processing untrusted web content. Indeed, XSLT is the source of several recent high-profile security exploits that continue to put browser users at risk.   For these reasons, Chromium (along with both other browser engines, Gecko and WebKit) plans to deprecate and remove XSLT from the web platform. The modern web is powered by three major browser engines: \[Blink\](https://www.chromium.org/blink/) (Chromium), \[Gecko\](https://firefox-source-docs.mozilla.org/overview/gecko.html) (Firefox), and \[WebKit\](https://webkit.org/) (Safari). They interpret code to render pages.   For more details, see this \[Chrome for Developers article\](https://developer.chrome.com/docs/web-platform/deprecating-xslt).  From Chrome 158, XSLT will stop functioning on Stable releases.

### Motivation

Security risks for all users outweigh the very small usage of this feature on the open web.  Usage of XSLTProcessor (https://chromestatus.com/metrics/feature/timeline/popularity/79) is fairly volatile, registering somewhere between 0.01% and 0.1% of page loads, averaging around 0.05% over time. These numbers are above the typical 0.001% deprecation threshold. Again, we feel that the increased potential for breakage is balanced by the reduced security risk to 100% of Chromium users. And we are doing everything we can to mitigate this breakage and be proactive in reaching out to potentially affected sites and particularly libraries that might account for significant chunks of the overall usage. In addition, several sites we surveyed that use XSLTProcessor have feature detection code with fallbacks to JS libraries like Saxonica. Of the ~220 sites we've surveyed so far, roughly 72% of them are still functional even with XSLT disabled.  The usage of XSL Processing Instructions (https://chromestatus.com/metrics/feature/timeline/popularity/78) is significantly lower, around 0.001% for the last few years.

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 803 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Major browser engines and the WHATWG are coordinating to deprecate and remove native client-side XSLT (XSLT 1.0 and associated processing instructions) due to persistent memory-safety vulnerabilities in aging C libraries like libxslt. With client-side usage hovering at roughly 0.02% to 0.05% of page loads, browsers are phasing out support in favor of modern JavaScript-based transformations and frameworks.

### Recommendations
- Actionable Advice: Web teams should immediately audit codebases for \`XSLTProcessor\` and XML-stylesheet processing instructions, verify fallback logic, and migrate necessary transformations to server-side processes or modern JavaScript XML/JSON libraries.
- Standards Activity (WebKit): Latest discussion from @annevk: "WebKit is cautiously supportive. We'd probably wait for one implementation to fully remove support, though if there's a known list of origins that par..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Intent to Deprecate and Remove XSLT" (87 points, 149 comments).

## Standards Positions

- **WebKit:** [Should we remove XSLT from the web platform?](https://github.com/whatwg/html/issues/11523) [open]

## Web-features Group

*group-level data: web-features [`xslt`](https://webstatus.dev/features/xslt), shared with 1 other ChromeStatus feature*

- Share of tests passing in the web-features group `xslt` on [wpt.fyi](https://wpt.fyi/results?q=feature:xslt) (via webstatus.dev) — stable: Chrome 58.8% · Edge 76.5% · Firefox 88.2% · Safari 88.2%; experimental: Chrome 58.8% · Edge 58.8% · Firefox 88.2% · Safari 94.1%

## Community Discussions & Social Pulse

- 💬 **Hacker News:** [Intent to Deprecate and Remove XSLT](https://news.ycombinator.com/item?id=45779261) — *87 pts, 149 comments*
- 💬 **Hacker News:** [Intent to Deprecate and Remove: XSLT](https://news.ycombinator.com/item?id=45734849) — *3 pts, 1 comments*
- 💬 **Hacker News:** [Intent to Deprecate and Remove: XSLT](https://news.ycombinator.com/item?id=6102357) — *2 pts, 0 comments*
- 🐦 **Twitter / X:** [Chrome for Developers on X: "Chrome 153 is now in beta! Try out new CSS scroll container options, Rust-based XML parsing, declarative camera and microphone HTML elements, and the new WebGPU buffer\_view feature. https://t.co/QVG8pp2SRN" / X](https://x.com/ChromiumDev/status/2093424350036660456) — *by @ChromiumDev, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Intent to Deprecate and Remove XSLT](https://groups.google.com/a/chromium.org/g/blink-dev/c/CxL4gYZeSJA/m/yNs4EsD5AQAJ) *(groups.google.com · 2025-11-01T04:31:52Z)*
  > Good riddance. The web needs to shed all the old baggages like this to move forward. Looking forward to MCP becoming part of the browser.
- [dev.to](https://dev.to/alanwest/chrome-158-removes-xslt-on-nov-17-heres-what-breaks-and-how-to-fix-it-206c) *(dev.to)*
  > Major web browser engines—\*\*Blink (Chromium)\*\*, \*\*Gecko (Firefox)\*\*, and \*\*WebKit (Safari)\*\*—along with the WHATWG standards body have coordinated to \*\*deprecate and remove native client-side XSLT (Extensible Stylesheet Language Transformations 1.0)\*...
- [Removing XSLT for a more secure browser  \|  Web Platform  \|  Chrome for Developers](https://developer.chrome.com/docs/web-platform/deprecating-xslt) *(developer.chrome.com)*
  > Major web browser engines—\*\*Blink (Chromium)\*\*, \*\*Gecko (Firefox)\*\*, and \*\*WebKit (Safari)\*\*—along with the WHATWG standards body have coordinated to \*\*deprecate and remove native client-side XSLT (Extensible Stylesheet Language Transformations 1.0)\*...
- [The tangled web of XSLT browser support \[LWN.net\]](https://lwn.net/Articles/1034560) *(lwn.net)*
  > Native XSLT support has been frozen at the 1999 XSLT 1.0 specification The primary driver for its removal is \*\*security and memory safety\*\*: Chromium and WebKit rely on \`libxslt\` (an aging C codebase that saw maintainer attrition and high-severity me...
- [Chrome is removing XSLT on November 17, 2026: what breaks and what to do \| XSLT Playground](https://xsltplayground.com/blog/posts/chrome-removing-xslt-what-to-do) *(xsltplayground.com)*
  > Client-side usage has plummeted to roughly \*\*0.02% of page loads\*\* It outlines the removal of both the \`XSLTProcessor\` JavaScript API and the \`&lt;?xml-stylesheet type="text/xsl"?&gt;\` processing instruction
- [Chrome 147 beta  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/chrome-147-beta?hl=en) *(developer.chrome.com)*
  > Concurrently, Chrome is replacing its C-based \`libxml2\` parser with a memory-safe parser written in Rust for standard XML operations \*\*Key Takeaway\*\*: Explains the security rationale, highlights the migration toward safe Rust XML parsing for general ...
- [wikipedia.org](https://en.wikipedia.org/wiki/XSLT) *(en.wikipedia.org)*
  > \*\*WHATWG HTML Standards Issue #11523 — \*"Should we remove XSLT from the web platform?"\*\*\*
- [biggo.com](https://finance.biggo.com/news/202511011343_XSLT-Removal-Precedent-Debate) *(finance.biggo.com)*
  > \*\*Summary\*\*: Initiated to achieve formal multi-vendor consensus across Apple (WebKit), Mozilla (Gecko), and Google (Blink) \*\*Key Takeaway\*\*: Confirms that this is not a unilateral Chrome move; both Gecko and WebKit formally adopted positive stances o...
- [podcastvideos.com](https://www.podcastvideos.com/browsers-remove-xslt-support-podcast-rss-feeds) *(podcastvideos.com)*
  > \*\*Summary\*\*: Focused on common real-world use cases of XSLT: \*\*XML Sitemaps\*\* and \*\*RSS/Podcast Feeds\*\* that used XSL stylesheets to make raw XML human-readable
- [Deprecate and remove XSLT \[435623334\] - Chromium](https://issues.chromium.org/issues/435623334) *(issues.chromium.org)*
  > Chromium Sign in
- [Chromium base browsers removing support for XSLT view \| InterSystems DC](https://community.intersystems.com/post/chromium-base-browsers-removing-support-xslt-view) *(community.intersystems.com · 2026-09-28T00:00:00)*
  > Chromium base browsers removing support for XSLT view \| InterSystems DC Skip to main content Learning Documentation Community Open Exchange Ideas Portal Global Masters Certification Partner Directory Startup Hub Ask DC AI EN EN JP ES PT FR CN Spanish...
- [\[XSLT\] Setting about:flags for XSLT to Enabled does not override the special trial \[465491619\] - Issue Tracker](https://doc-4n4g-3ldg-issuetracker.googleusercontent.com/issues/465491619/resources) *(doc-4n4g-3ldg-issuetracker.googleusercontent.com)*
  > Google Issue Tracker Sign in
- [Intent to Deprecate and Remove: Deprecate and remove XSLT](https://groups.google.com/a/chromium.org/g/blink-dev/c/CxL4gYZeSJA) *(groups.google.com · 2025-10-24T00:00:00)*
  > Intent to Deprecate and Remove: Deprecate and remove XSLT Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Deprecate an...
- [Intent to Deprecate and Remove: XSLT](https://groups.google.com/a/chromium.org/g/blink-dev/c/zIg2KC7PyH0) *(groups.google.com)*
  > Web sites that rely on XSLT will break entirely without XSLT support in the browser and will need to be updated to perform their XSL transform on the server or to use a polyfill. To mitigate this risk, I plan to remove support gradually. My first ste...
- [Intent to Deprecate and Remove: Deprecate and remove XSLT \| Lobsters](https://lobste.rs/s/r3ckga/intent_deprecate_remove_deprecate) *(lobste.rs · 2025-10-31T00:00:00)*
  > There are also ways to style Atom/RSS with CSS that don’t require all of xslt. ... There are many web standards and APIs that were deprecated in the past: just from the top of my head: Appcache, Mutation Events, orientation API.
- [Michael Tsai - Blog - Removing XSLT From the Web Platform](https://mjtsai.com/blog/2025/08/21/removing-xslt-from-the-web-platform) *(mjtsai.com · 2025-08-21T00:00:00)*
  > The proposed timeline for Chromium is to &lt;strong&gt;deprecate in M143, remove in M155 (except for Origin Trial and Enterprise Policy users), and discontinue the Origin Trial and Enterprise Policy in M164&lt;/strong&gt;. Update (2025-11-05): Mason Freed and Do...
- [Chrome is Removing XSLT: dates, impact and what to do](https://xmlvalidators.com/guides/chrome-is-removing-xslt) *(xmlvalidators.com)*
  > Neither has announced a removal or published a date, so XSLT keeps working in both after Chrome 158. Neither is defending it either. Mozilla has an open tracking bug, 1990759, and a recorded standards position that is positive with a compatibility co...
- [Chrome 158 Removes XSLT on Nov 17. Here's What Breaks and How to Fix It \| Authon Blog](https://blog.authon.dev/chrome-removing-xslt-what-breaks-how-to-fix) *(blog.authon.dev · 2026-10-18T16:20:02)*
  > reg add &quot;HKLM\\SOFTWARE\\Policies\\Microsoft\\Edge&quot; /v XSLTEnabled /t REG\_DWORD /d 1 /f reg add &quot;HKLM\\SOFTWARE\\Policies\\Google\\Chrome&quot; /v XSLTEnabled /t REG\_DWORD /d 1 /f · That gets you roughly nine more months, so put the migration ...
- [Chrome XSLT Removal 2026 Explained: What Breaks, What to Do \| SevyDevy](https://www.sevydevy.com/learn/chrome-november-2026-xslt-removal-explained-migration) *(sevydevy.com · 2026-10-23T00:00:00)*
  > Chrome Enterprise admins can use the Legacy Technology Report to find deprecated features used across managed browsers. This grep finds the common forms in a project folder, including PHP and TypeScript files. Drop the exclude-dir option to scan inst...
- [Chrome XSLT deprecation: Your Fix Guide - CloudMinister](https://cloudminister.com/blog/chrome-xslt-deprecation-guide) *(cloudminister.com · 2026-11-03T07:51:49)*
  > Enterprise admins can use Chrome’s Legacy Technology Report to collect deprecated feature usage from managed browsers. Test in Chrome Canary, Dev or Beta, where Chrome says XSLT is disabled by default as an early warning. ... Keep a simple inventory ...
- [Explore New Chrome Enterprise Browser, Core, Premium Features](https://chromeenterprise.google/intl/en_us/resources/release-notes/?ver=152&featId=5148353408139264) *(chromeenterprise.google · 2026-11-04T13:09:25)*
  > Indeed, XSLT is the source of several ... at risk. For these reasons, &lt;strong&gt;Chromium (along with both other browser engines, Gecko and WebKit) plans to deprecate and remove XSLT from the web platform&lt;/strong&gt;....
- [Chrome 153 beta \| Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/article/2093424350036660456) *(x.com · 2026-08-28T19:43:15)*
  > Chrome has already begun to deprecate and remove XSLT.
- [Chrome 143 beta  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/chrome-143-beta?hl=en) *(developer.chrome.com)*
  > Indeed, XSLT is the source of several recent high-profile security exploits that continue to put browser users at risk. For these reasons, &lt;strong&gt;Chromium plans to deprecate and remove XSLT from the web platform&lt;/strong&gt;.
- [Chrome 143  \|  Release notes  \|  Chrome for Developers](https://developer.chrome.com/release-notes/143) *(developer.chrome.com · 2025-12-02T00:00:00)*
  > Indeed, XSLT is the source of several recent high-profile security exploits that continue to put browser users at risk. For these reasons, &lt;strong&gt;Chromium (along with both other browser engines) plans to deprecate and remove XSLT from the web platfo...
- [Chrome XSLT removal: migrate before Chrome 158](https://ecorpit.com/chrome-xslt-removal-november-2026-migration-guide) *(ecorpit.com · 2026-08-03T00:00:00)*
  > &lt;script src=&quot;xslt-polyfill.min.js&quot;&gt;&lt;/script&gt; &lt;script&gt; const xsltProcessor = new XSLTProcessor(); xsltProcessor.importStylesheet(xsltDoc); const fragment = xsltProcessor.transformToFragment(xmlDoc, document); &lt;/script&gt...
- [XSLT Disabling in Edge: Policy and Risks](https://sudonull.com/xslt-disabling-in-edge-policy-and-risks) *(sudonull.com · 2026-04-14T15:11:07)*
  > Example migrating simple XSLT to JS: // Legacy XSLT const xsltProcessor = new XSLTProcessor(); xsltProcessor.importStylesheet(xsltDoc); const result = xsltProcessor.transformToFragment(xmlDoc, document); // Modern JS alternative function transformXML...
- [XSLT Transformer: run XSLT 1.0 in your browser](https://xmlvalidators.com/xslt-transformer) *(xmlvalidators.com)*
  > Chrome 176, 17 August 2027: both hatches expire. XSLTProcessor and the xml-stylesheet processing instruction are gone.
- [Intent to Unship: XSLT](https://groups.google.com/a/mozilla.org/g/dev-platform/c/ZRyt5CzAGfA) *(groups.google.com)*
  > Preference: Deprecation is done through the pref “dom.xslt.enabled” · DevTools Bug: None. ... Blink: intent emailed https://groups.google.com/a/chromium.org/g/blink-dev/c/CxL4gYZeSJA/m/yNs4EsD5AQAJ · WebKit: cautiously supportive https://github.com/w...
- [Intent to Deprecate and Remove: XSLT (Again)](https://groups.google.com/a/chromium.org/g/blink-dev/c/6MOMhQaX3N8/m/s-8UHedjCAAJ) *(groups.google.com)*
  > Given how negative the feedback was on the original thread, an unusually long deprecation period seems warranted, and it would be good to state a firm date in the deprecation message. ... To unsubscribe from this group and stop receiving emails from ...
- [r/programming on Reddit: XSLT removal will break multiple government and regulatory sites across the world](https://www.reddit.com/r/programming/comments/1mxdm22/xslt_removal_will_break_multiple_government_and) *(reddit.com · 2025-08-22T17:59:45)*
  > &lt;strong&gt;I just stepped down as libxslt maintainer and it&#x27;s unlikely that this project will ever be maintained again&lt;/strong&gt;.
- [Death Comes for XSLT \| Hacker News](https://news.ycombinator.com/item?id=50371408) *(news.ycombinator.com · 2026-11-06T06:50:30)*
  > From one of the issue trackers: · I wouldn&#x27;t quite call it it a failed experiment; I&#x27;ve personally used it in a couple of my websites \[0\] and I&#x27;ve had pretty good experiences with it
- [A few things to note: - This isn't Chrome doing this unilaterally. https://githu... \| Hacker News](https://news.ycombinator.com/item?id=44953117) *(news.ycombinator.com · 2025-08-29T12:36:44)*
  > &lt;strong&gt;It&#x27;s an issue open on the HTML spec for the HTML spec maintainers to consider&lt;/strong&gt;. It was opened by a Chrome engineer after at least two meetings where a Mozilla engineer raised the topic, and where there was apparently vendor suppo...
- [XSLT RIP \| Hacker News](https://news.ycombinator.com/item?id=45873434) *(news.ycombinator.com · 2025-11-22T16:19:19)*
  > The author is frontend designer and has a nice website, too: https://dbushell.com/ · I like the personal, individual style of both pages
- [Chrome Removes XSLT: What Breaks and How to Detect It](https://ortamarco.me/en/blog/chrome-removes-xslt-what-breaks) *(ortamarco.me · 2026-09-13T00:00:00)*
  > npx xslt3 -xsl:cadenaoriginal\_4\_0\_flat.xslt -export:cadena.sef.json -nogo · import SaxonJS from &#x27;saxon-js&#x27;; const { principalResult: cadena } = SaxonJS.transform({ stylesheetFileName: &#x27;cadena.sef.json&#x27;, sourceText: xmlText, destin...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Deprecate and remove XSLT \[435623334\] - Chromium](https://issues.chromium.org/issues/435623334) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/4709671889534976`)*
  > Chromium Sign in
- [Chromium base browsers removing support for XSLT view \| InterSystems DC](https://community.intersystems.com/post/chromium-base-browsers-removing-support-xslt-view) *(community.intersystems.com · 2026-09-28T00:00:00)* *(Cites: `https://chromestatus.com/feature/4709671889534976`)*
  > Chromium base browsers removing support for XSLT view \| InterSystems DC Skip to main content Learning Documentation Community Open Exchange Ideas Portal Global Masters Certification Partner Directory Startup Hub Ask DC AI EN EN JP ES PT FR ...
- [\[XSLT\] Setting about:flags for XSLT to Enabled does not override the special trial \[465491619\] - Issue Tracker](https://doc-4n4g-3ldg-issuetracker.googleusercontent.com/issues/465491619/resources) *(doc-4n4g-3ldg-issuetracker.googleusercontent.com)* *(Cites: `https://chromestatus.com/feature/4709671889534976`)*
  > Google Issue Tracker Sign in
- [Google Chrome Deprecating XLST · Issue #624 · mtconnect/cppagent · GitHub](https://github.com/mtconnect/cppagent/issues/624) *(github.com · 2026-10-26T19:25:15)* *(Cites: `https://chromestatus.com/feature/4709671889534976`)*
  > Google Chrome Deprecating XLST · Issue #624 · mtconnect/cppagent · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You sig...

## 📚 Platform Documentation & Specifications

- [Google Chrome Deprecating XLST · Issue #624 · mtconnect/cppagent · GitHub](https://github.com/mtconnect/cppagent/issues/624) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 66 result(s) found across 11 planned queries — **30 verified relevant**
  - `"chromestatus.com/feature/4709671889534976" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (8 returned)
  - `"Deprecate and remove XSLT" API` — *Core feature API query* (8 returned)
  - `"Deprecate and remove XSLT" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"v1.0" OR "www.w3" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and remove XSLT" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and remove XSLT" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"deprecating XSLT" OR "deprecate XSLT" Chrome site:developer.chrome.com OR site:blog.chromium.org` — *Finds official Chromium announcements, developer guides, and deprecation timeline documentation.* (4 returned)
  - `"XSLTProcessor" importStylesheet transformToFragment JavaScript alternative OR migration` — *Uncovers real-world JavaScript code examples using the XSLTProcessor API alongside replacement strategies.* (8 returned)
  - `"deprecate XSLT" OR "remove XSLT" (Blink OR Chromium OR WebKit OR Gecko) site:github.com OR site:groups.google.com` — *Surfaces browser engine intent-to-deprecate discussions, cross-vendor consensus (WebKit, Gecko), and issue trackers.* (8 returned)
  - `"XSLTProcessor" OR "libxslt" deprecation ("Hacker News" OR reddit OR twitter) -site:w3.org` — *Captures developer community sentiment, security discussions surrounding libxslt, and impact on legacy XML workflows.* (8 returned)
  - `client-side XSLT alternatives "Saxonica" OR SaxonJS OR "transform XML"` — *Discovers tutorials and modern JavaScript library alternatives used to replace native browser XSLT transformations.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **1 verified relevant**
- **Dev.to Community Blogs:** 2 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 3 result(s) found — **3 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 6 result(s) found — **1 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "xslt", shared with 1 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "xslt": Chrome 58.8% passing (stable)*

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4709671889534976)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4709671889534976)
- [Chromium Tracking Bug](https://crbug.com/435623334)
