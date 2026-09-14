# Deprecate and remove XSLT

> **Report Week:** 2026-W38 | **Milestone:** Chrome 152 | **Category:** Origin trial

## Overview

\[XSLT v1.0\](https://www.w3.org/TR/xslt-10/), which all browsers adhere to, was standardized in 1999. In the meantime, XSLT has evolved to v2.0 and v3.0, adding features, and growing apart from the old version frozen into browsers. This lack of advancement, coupled with the rise of JavaScript libraries and frameworks that offer more flexible and powerful DOM manipulation, has led to a significant decline in the use of client-side XSLT. Its role within the web browser has been largely superseded by JavaScript-based technologies, such as JSON and React.  Chromium uses the \*\*libxslt\*\* library to process these transformations, and \[libxslt was unmaintained\](https://discourse.gnome.org/t/stepping-down-as-libxslt-maintainer/27615) for ~6 months of 2025. Libxslt is a complex, aging C codebase of the type notoriously susceptible to memory safety vulnerabilities like buffer overflows, which can lead to arbitrary code execution. Because client-side XSLT is now a niche, rarely-used feature, these libraries receive far less maintenance and security scrutiny than core JavaScript engines, yet they represent a direct, potent attack surface for processing untrusted web content. Indeed, XSLT is the source of several recent high-profile security exploits that continue to put browser users at risk.   For these reasons, Chromium (along with both other browser engines, Gecko and WebKit) plans to deprecate and remove XSLT from the web platform. The modern web is powered by three major browser engines: \[Blink\](https://www.chromium.org/blink/) (Chromium), \[Gecko\](https://firefox-source-docs.mozilla.org/overview/gecko.html) (Firefox), and \[WebKit\](https://webkit.org/) (Safari). They interpret code to render pages.   For more details, see this \[Chrome for Developers article\](https://developer.chrome.com/docs/web-platform/deprecating-xslt).  From Chrome 158, XSLT will stop functioning on Stable releases.

### Motivation

Security risks for all users outweigh the very small usage of this feature on the open web.

Usage of XSLTProcessor (https://chromestatus.com/metrics/feature/timeline/popularity/79) is fairly volatile, registering somewhere between 0.01% and 0.1% of page loads, averaging around 0.05% over time. These numbers are above the typical 0.001% deprecation threshold. Again, we feel that the increased potential for breakage is balanced by the reduced security risk to 100% of Chromium users. And we are doing everything we can to mitigate this breakage and be proactive in reaching out to potentially affected sites and particularly libraries that might account for significant chunks of the overall usage. In addition, several sites we surveyed that use XSLTProcessor have feature detection code with fallbacks to JS libraries like Saxonica. Of the ~220 sites we've surveyed so far, roughly 72% of them are still functional even with XSLT disabled.

The usage of XSL Processing Instructions (https://chromestatus.com/metrics/feature/timeline/popularity/78) is significantly lower, around 0.001% for the last few years.

## Ecosystem Status

- **Momentum:** High (773 points)
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

## 📰 Ecosystem Blogs & Articles

- [Intent to Deprecate and Remove XSLT](https://groups.google.com/a/chromium.org/g/blink-dev/c/CxL4gYZeSJA/m/yNs4EsD5AQAJ) *(groups.google.com · 2025-11-01T04:31:52Z)*
  > Intent to Deprecate and Remove: Deprecate and remove XSLT Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Deprecate an...
- [Intent to Deprecate and Remove: XSLT](https://groups.google.com/a/chromium.org/forum) *(groups.google.com · 2013-07-25T13:40:31Z)*
  > Redirecting to Google Groups
- [Removing XSLT for a more secure browser \| Web Platform \| Chrome for Developers](https://developer.chrome.com/docs/web-platform/deprecating-xslt) *(developer.chrome.com · 2025-10-29T00:00:00)*
  > Menghapus XSLT untuk browser yang lebih aman | Web Platform | Chrome for Developers Langsung ke konten utama / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית...
- [Intent to Deprecate and Remove: Deprecate and remove XSLT](https://groups.google.com/a/chromium.org/g/blink-dev/c/CxL4gYZeSJA) *(groups.google.com · 2025-10-24T00:00:00)*
  > Intent to Deprecate and Remove: Deprecate and remove XSLT Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Deprecate an...
- [Intent to Deprecate and Remove: Deprecate and remove XSLT \| Lobsters](https://lobste.rs/s/r3ckga/intent_deprecate_remove_deprecate) *(lobste.rs · 2025-10-31T00:00:00)*
  > Intent to Deprecate and Remove: Deprecate and remove XSLT | Lobsters Lobsters 36 Intent to Deprecate and Remove: Deprecate and remove XSLT browsers groups.google.com via inactive-user 2025-10-31 23:56:34 | caches Archive.org Ghostarchive | 31 comment...
- [Chromium's Plan to Deprecate and Remove XSLT \| daily.dev](https://app.daily.dev/posts/chromium-s-plan-to-deprecate-and-remove-xslt-dhq8zbv55) *(app.daily.dev · 2025-11-05T17:26:05)*
  > Chromium&#x27;s Plan to Deprecate and Remove XSLT | daily.dev Collection Subscribe Chromium&#x27;s Plan to Deprecate and Remove XSLT # webassembly # web-security # chromium Last updated Nov 05, 2025 • 2 sources Comment Bookmark Copy Share your though...
- [Michael Tsai - Blog - Removing XSLT From the Web Platform](https://mjtsai.com/blog/2025/08/21/removing-xslt-from-the-web-platform) *(mjtsai.com · 2025-08-21T00:00:00)*
  > Michael Tsai - Blog - Removing XSLT From the Web Platform Thursday, August 21 , 2025 Removing XSLT From the Web Platform Mason Freed ( Hacker News ): XSLT v1.0, which all browsers adhere to, was standardized in 1999 . In the meantime, XSLT has evolve...
- [Deprecate and remove XSLT - Chrome Platform Status](https://cr-status.appspot.com/feature/4709671889534976) *(cr-status.appspot.com)*
  > Acceder con GoogleAcceder con Google. Se abre en una pestaña nueva
- [Intent to Deprecate and Remove: XSLT](https://groups.google.com/a/chromium.org/g/blink-dev/c/zIg2KC7PyH0/m/Ho1tm5mo7qAJ) *(groups.google.com)*
  > XSLT is more often used on the server as part of an XML processing pipeline. Server-side XSLT processing will not be affected by deprecating and removing XSLT support in Blink.
- [XSLT Introduction](https://www.w3schools.com/xml/xsl_intro.asp) *(w3schools.com)*
  > This tutorial will teach you how to use XSLT to transform XML documents into other formats (like transforming XML into HTML).
- [XML and XSLT](https://www.w3schools.com/xml/xml_xslt.asp) *(w3schools.com)*
  > XSLT is far more sophisticated than CSS. With XSLT you can add/remove elements and attributes to or from the output file.
- [XSLT Tutorial - Basics - EduTech Wiki](https://edutechwiki.unige.ch/en/XSLT_Tutorial_-_Basics) *(edutechwiki.unige.ch)*
  > The following code will override the default rules and will help you find some problems. Simply <strong>cut/paste this to your XSLT (but remove it later !)</strong>
- [XSLT Transformation](https://www.w3schools.com/xml/xsl_transformation.asp) *(w3schools.com)*
  > To get access to the XSLT elements, attributes and features we must <strong>declare the XSLT namespace at the top of the document</strong>.
- [XSLT Tutorial – XSLT Transformations & Elements With Examples](https://www.softwaretestinghelp.com/xslt-tutorial) *(softwaretestinghelp.com · 2025-04-01T08:28:31)*
  > I&#x27;m Vijay, and I&#x27;ve been working on this blog for the past 20+ years! I’ve been in the IT industry for more than 20 years now. I completed my graduation in B.E. Computer Science from a reputed Pune university and then started my career in… ...
- [W3.CSS Home](https://www.w3schools.com/w3css/defaulT.asp) *(w3schools.com)*
  > W3.CSS is <strong>built with standard CSS and does not depend on any JavaScript library</strong>. W3.CSS gives you ready-to-use classes for common web design tasks.
- [W3Schools Online Web Tutorials](https://www.w3schools.com) *(w3schools.com)*
  > The W3Schools Adventure app is here! Coding fundamentals as a game. Bite-sized lessons, streaks and XP. Free on iOS and Android. ... Pick a language and start right away. Every tutorial is packed with examples you can run and edit in your browser: HT...
- [W3.CSS Versions](https://www.w3schools.com/w3css/w3css_versions.asp) *(w3schools.com)*
  > HTML Certificate CSS Certificate JavaScript Certificate Front End Certificate SQL Certificate Python Certificate PHP Certificate jQuery Certificate Java Certificate C++ Certificate C# Certificate XML Certificate ... W3Schools is optimized for learnin...
- [Using a JavaScript Library](https://www.w3schools.com/w3css/w3css_web_javascript.asp) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more.
- [W3.CSS Examples](https://www.w3schools.com/w3css/w3css_examples.asp) *(w3schools.com)*
  > Fluid grid demonstration Two equal columns Two unequal columns Three equal columns Three unequal columns Six equal columns Mixed: Mobile and Laptops Mixed: Mobile, Tablets and Laptops Difference between w3-row and w3-row-padding Columns using w3-rest...
- [W3.CSS Reference](https://www.w3schools.com/w3css/w3css_references.asp) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more.
- [Previous release notes - Chrome Enterprise and Education Help](https://support.google.com/chrome/a/answer/10314655?hl=en-GBAfter) *(support.google.com)*
  > Indeed, XSLT is the source of several recent high-profile security exploits that continue to put browser users at risk. For these reasons, <strong>Chromium (along with both other browser engines) plans to deprecate and remove XSLT from the web platfo...
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > <strong>Chrome has deprecated client-side XSLT, and is getting close to removing it from the browser, in Chrome 158.</strong> A deprecation (origin) trial has been set up to allow sites to extend the migration time away from XSLT by about nine months...
- [Chrome Enterprise and Education release notes - Chrome browser - Chrome Enterprise and Education Help](https://support.google.com/chrome/a/answer/7679408?hl=en_PH&co=CHROME_ENTERPRISE._Product%3DChromeBrowser) *(support.google.com)*
  > Indeed, XSLT is the source of several recent high-profile security exploits that continue to put browser users at risk. For these reasons, <strong>Chromium (along with both other browser engines) plans to deprecate and remove XSLT from the web platfo...
- [The tangled web of XSLT browser support \[LWN.net\]](https://lwn.net/Articles/1034560) *(lwn.net · 2025-08-27T00:00:00)*
  > Barring a sudden reversal, the Chrome team looks poised to ship that prototype before too long. <strong>The Chrome Platform Status page for the &quot;feature&quot; to deprecate XSLT lists 2026 as the estimated shipping year</strong>, though many of t...
- [XSLT Debate Leads to Bigger Questions of Web Governance - The New Stack](https://thenewstack.io/xslt-debate-leads-to-bigger-questions-of-web-governance) *(thenewstack.io · 2025-09-02T13:16:43)*
  > When the Chrome team created an issue on GitHub to discuss the idea of deprecating XSLT from the web platform and removing it from browsers as a “niche, rarely used feature” superseded by JavaScript and implemented by complex, aging codebases with li...
- [PWA — adoption, squads and posts for developers \| daily.dev](https://daily.dev/tools/pwa) *(daily.dev)*
  > Discover how developers use PWA: adoption on daily.dev, squads discussing it, related tools, and the latest posts.
- [20 Agentic AI Terms Every Developer Should Know (Explained Simply)](https://dev.to/sylwia-lask/20-agentic-ai-terms-every-developer-should-know-explained-simply-jii) *(dev.to · Sylwia Laskowska · Sep 3)*
  > Do you ever feel like the AI world has moved forward a little too quickly?&nbsp;You hear about...

## 📚 Platform Documentation & Specifications

- [1990759 - Investigate deprecation and removal of XSLT (deprecate and remove XSLT)](https://bugzilla.mozilla.org/show_bug.cgi?id=1990759) *(bugzilla.mozilla.org)*
- [The web standards model - HTML CSS and JavaScript - W3C Wiki](https://www.w3.org/wiki/The_web_standards_model_-_HTML_CSS_and_JavaScript) *(w3.org)*
- [XSLT](https://developer.mozilla.org/en-US/docs/Glossary/XSLT) *(developer.mozilla.org)*
- [XSLT guides](https://developer.mozilla.org/en-US/docs/Web/XML/XSLT/Guides) *(developer.mozilla.org)*
- [XSLT reference](https://developer.mozilla.org/en-US/docs/Web/XML/XSLT/Reference) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 36 result(s) found across 6 planned queries — **26 verified relevant**
  - `"chromestatus.com/feature/4709671889534976" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"Deprecate and remove XSLT" API` — *Core feature API query* (8 returned)
  - `"Deprecate and remove XSLT" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"v1.0" OR "www.w3" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and remove XSLT" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and remove XSLT" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 3 result(s) found — **3 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 6 result(s) found — **6 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 27 item(s) inspected

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4709671889534976)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4709671889534976)
- [Chromium Tracking Bug](https://crbug.com/435623334)
