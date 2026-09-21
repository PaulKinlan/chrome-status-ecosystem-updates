# Spell Check Custom Dictionary API

> **Report Week:** 2026-W39 | **Milestone:** Chrome 153 | **Category:** In developer trial (Behind a flag)

## Overview

We are proposing a Spell Check Custom Dictionary API: a per‑document based, transient dictionary that supplements the browser's built-in spell-checking dictionaries. It does not change how those built-in dictionaries behave.  The API lets a web page add words to and remove words from the Spell Check Custom dictionary. During spell checking, the browser's spell checker also checks words against this dictionary, so matching words are not flagged for spelling errors.  This gives pages a way to programmatically suppress spell-check false positives within their own document, without requiring any action from users.

### Motivation

Spell checkers routinely flag words that are correct within a particular site but unknown to general dictionaries. Examples include:

- A Pokémon wiki containing names like Pikachu or Charmander.
- A financial analysis dashboard referencing company‑specific product names or tickers.
- A medical or scientific tool using specialized terminology.

False positives in these contexts are distracting, misleading, and erode user trust. While browsers allow users to add custom words via browser settings panel, there is currently no way for pages to provide a custom dictionary programmatically that applies only within their own context in order to reduce those false positives.

Authors need a way to treat domain‑specific words as “known” without requiring user intervention.

## Ecosystem Status

- **Momentum:** High (345 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Spell Check Custom Dictionary API is currently In developer trial (Behind a flag) in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Standards Activity (WebKit): Latest discussion from @ziransun: "&gt; Speaking in my personal capacity: &gt;  &gt; The \[explainer\](https://github.com/Igalia/explainers/blob/main/spell-check-dictionary/README.md) says entries..."
- Standards Activity (Mozilla): Latest discussion from @ziransun: "&gt; \[@saschanaz\](https://github.com/saschanaz) I understood \`removeWords()\` as removing from the existing set (so it's only doing something if you have ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Twitter" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [SpellCheckCustomDictionary](https://github.com/WebKit/standards-positions/issues/646) [open]
- **Mozilla:** [SpellCheckCustomDictionary](https://github.com/mozilla/standards-positions/issues/1384) [open]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Twitter](https://twitter.com/spell_check) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Newton on Twitter: "@FinancialBear We don't have a spell check of our own. The app uses the spell check provided by the OS. You can enable it in settings. 1/2"](https://twitter.com/newtonmailapp/status/613985992857489408) — *by @newtonmailapp, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [jbryer on Twitter: "Will @rstudio ever have spell check as you type? Especially for rmd files @hadleywickham"](https://twitter.com/jbryer/status/535156791710343168) — *by @jbryer, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Spell Checker (@SpellCheckIt) \| Twitter](https://twitter.com/spellcheckit) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Spell Checkers (@SpellCheckersV3) / X](https://twitter.com/SpellCheckersV3) — *0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Intent to Prototype: Document Local Dictionary API](https://groups.google.com/a/chromium.org/g/blink-dev/c/LB5SvNilyhA) *(groups.google.com · 2025-07-22T00:00:00)*
  > Intent to Prototype: Document Local Dictionary API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Document Local Dictionary API ...
- [Re: \[blink-dev\] Intent to Prototype: Document Local Dictionary API](https://www.mail-archive.com/blink-dev@chromium.org/msg14251.html) *(mail-archive.com · 2025-07-22T00:00:00)*
  > Re: [blink-dev] Intent to Prototype: Document Local Dictionary API Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype: Document Local Dictionary API Rick Byers Tue, 22 Jul 2025 09:03:16 -0700 Spelling server seems a lot harder ...
- [Re: \[blink-dev\] Intent to Prototype: Document Local Dictionary API](http://www.mail-archive.com/blink-dev@chromium.org/msg16929.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Prototype: Document Local Dictionary API Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype: Document Local Dictionary API Ziran Sun Tue, 07 Jul 2026 03:00:58 -0700 Thanks everyone for the reviews! The...
- [\[blink-dev\] Ready for Developer Testing: Spell Check Custom Dictionary API](http://www.mail-archive.com/blink-dev@chromium.org/msg17107.html) *(mail-archive.com)*
  > [blink-dev] Ready for Developer Testing: Spell Check Custom Dictionary API Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: Spell Check Custom Dictionary API Chromestatus Tue, 04 Aug 2026 07:34:58 -0700 Contact emails [e...
- [Custom spell check dictionaries — a must-have feature for sentence correctors - WProofreader Blog](https://blog.wproofreader.com/custom-spell-check-dictionaries-a-must-have-feature-for-sentence-correctors) *(blog.wproofreader.com · 2026-04-21T12:42:04)*
  > Custom spell check dictionaries — a must-have feature for sentence correctors - WProofreader Blog WProofreader Blog Proofread now Custom spell check dictionaries — a must-have feature for sentence correctors April 26, 2023 Greetings. We continue writ...
- [Android Developers Blog: Creating Your Own Spelling Checker Service](https://android-developers.googleblog.com/2012/08/creating-your-own-spelling-checker.html) *(android-developers.googleblog.com)*
  > Android Developers Blog: Creating Your Own Spelling Checker Service &#9776; Android Developers Blog The latest Android and Google Play news for app and game developers. 🔍 Android Developers &#8594; Jetpack Kotlin Docs News Platform Android Studio Go...
- [Setting Up a Spell Checker for VS Code \| Medium](https://medium.com/@anticultist/setting-up-a-spell-checker-for-vs-code-8086462fce66) *(medium.com · 2024-10-09T15:42:20)*
  > Medium Setting Up a Spell Checker for VS Code | Medium Sitemap Open in app Sign up Sign in Get app Write Search Sign up Sign in Alexander Janzen I have been a software developer for more than 10 years, I play improvisational theater and I like to cre...
- [Develop Your Own Spelling Check Toolkit with Python \| Towards Data Science](https://towardsdatascience.com/develop-your-own-spelling-check-toolkit-with-python-740bf84a865d) *(towardsdatascience.com · 2025-01-16T17:59:35)*
  > While there are several tools that pinpoint these errors, it is extremely satisfying to build your own custom spell-check application that can be further upgraded to be the most suitable device for your liking. In this article, we learned how to buil...
- [python - Spell checking with custom dictionary - Stack Overflow](https://stackoverflow.com/questions/12932671/spell-checking-with-custom-dictionary) *(stackoverflow.com)*
  > Also, here is some documentation that should help you to better understand the topic of files: http://docs.python.org/tutorial/inputoutput.html#reading-and-writing-files · EDIT: but you are not changing anything! By the end of your script here is wha...
- [Grammar check API for web products \| WebSpellChecker](https://webspellchecker.com/wsc-web-api) *(webspellchecker.com · 2024-12-26T15:46:39)*
  > Extend the grammar and spell check functionality of your application with WProofreader HTTP API. Gain developer access to WebSpellChecker robust proofreading engine via HTTP API requests.
- [How to Ensure Correct Spelling of Complex or Unusual Terms \| PerfectIt](https://www.perfectit.com/blog/how-to-ensure-correct-spelling-of-complex-or-unusual-terms-across-your-entire-organization) *(perfectit.com · 2021-04-21T07:54:00)*
  > <strong>Open the Custom Dictionaries window and highlight StyleGuide.</strong> Copy the file path into File Explorer and press Enter. Double-click on StyleGuide, which will open it in Notepad. ... From there, create a new style sheet in PerfectIt, se...
- [WProofreader spell & grammar check plugin for WordPress – WordPress plugin \| WordPress.org](https://wordpress.org/plugins/webspellchecker) *(wordpress.org · 2026-06-12T17:32:45)*
  > Organization-level custom dictionary allows creating dictionaries that extend the vocabulary of the standard dictionary with custom words specific to your organization culture, industry, domain, etc. All the words added to a dictionary by the admin w...
- [Client-side Spell Checker In Pure JavaScript \| CSS Script](https://www.cssscript.com/client-side-spell-checker) *(cssscript.com · 2018-12-02T05:57:22)*
  > A full-free and client-side spell checker that automatically checks the text spelling when typing.
- [javascript - Add spell check to my website - Stack Overflow](https://stackoverflow.com/questions/1940924/add-spell-check-to-my-website) *(stackoverflow.com)*
  > <strong>&quot;JavaScript SpellCheck</strong>&quot; is the industry leading spellchecker plugin for javascript. It allows the developer to easily add and control spellchecking in almost any HTML environment.
- [JavaScript Spelling and Grammar Checkers - Sapling](https://blog.sapling.ai/javascript-spelling-and-grammar-checkers) *(blog.sapling.ai · 2022-09-10T23:29:56)*
  > It is paired as the most popular ... with CSS and HTML that specify what things to render to a screen. Using JavaScript in a web front-end typically involves pulling a user’s text to check from HTML textarea elements and div container elements marked...
- [How to access Chrome spell-check suggestions in JavaScript - Stack Overflow](https://stackoverflow.com/questions/30704264/how-to-access-chrome-spell-check-suggestions-in-javascript) *(stackoverflow.com)*
  > Source: https://lists.w3.org/Archives/Public/public-webapps/2011AprJun/0516.html · But IE/ActiveX/MS-Word isn&#x27;t really what you have asked for, neither is it very cross platform/browser, that leaves us with local javascript spell-check libraries...
- [Creating a Javascript spellingchecker with bjspell](https://esstudio.site/2018/10/22/javascript-spellingchecker.html) *(esstudio.site · 2018-10-22T20:11:31)*
  > A complete spellchecker using BJSpell: spell-checker.site · Javascript in 24 hours · HTML, CSS, ES6 all in one · A Hands-On Guide to Building Web Applications Using React · Learning Regular Expressions · Node.js, MongoDB, and Angular web development ...
- [Enhanced Spell Checking on the Web \| daily.dev](https://daily.dev/posts/enhanced-spell-checking-on-the-web-s6gvtp8ef) *(daily.dev · 2026-09-20T07:47:29)*
  > Implemented by Igalia with Bloomberg Tech funding, it&#x27;s currently in Chrome Canary behind an experimental flag and scheduled to ship behind the same flag on <strong>September 8, 2026</strong>. The author also built a small polyfill library that ...
- [Enhanced Spell Checking on the Web](https://bkardell.com/blog/EnhancedSpellchecking.html) *(bkardell.com)*
  > It is currently available in Chrome Canary behind the experimental web platform features flag, and is scheduled to be shipping in on <strong>September 8, 2026</strong> behind the same flag. Because of its simplicity, it also works with JSON pretty ni...
- [SpellCheck.CustomDictionaries Property (System.Windows.Controls) \| Microsoft Learn](https://learn.microsoft.com/en-us/dotnet/api/system.windows.controls.spellcheck.customdictionaries?view=windowsdesktop-8.0) *(learn.microsoft.com)*
  > For more information, see Pack URIs in WPF. To enable the spelling checker, <strong>set the SpellCheck.</strong>IsEnabled property to true on a TextBox or on any class that derives from TextBoxBase.
- [Spell checker \| JxBrowser — TeamDev EN](https://teamdev.com/jxbrowser/docs/guides/spell-checker) *(teamdev.com)*
  > This document shows how to configure languages for spell checking, add or remove words from a custom dictionary, disable spell checking, and more.
- [The Only Container Orchestrator with Built-In Compliance: How Gubernator Enforces ENS, NIS 2, DORA, CIS Benchmark, and ISO 27001](https://dev.to/gde/the-only-container-orchestrator-with-built-in-compliance-how-gubernator-enforces-ens-nis-2-cis-mbf) *(dev.to · Mario Ezquerro · Sep 17)*
  > Discover how Gubernator revolutionizes container orchestration by natively baking in ENS RD 311/2022, EU NIS 2, EU DORA (Reg. 2022/2554), CIS Docker Benchmark, ISO 27001, SHA-256 audit ledger, Cosign, and SBOM into a single sovereign Go binary.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: Document Local Dictionary API](https://groups.google.com/a/chromium.org/g/blink-dev/c/LB5SvNilyhA) *(groups.google.com · 2025-07-22T00:00:00)* *(Cites: `https://chromestatus.com/feature/6185007701557248`)*
  > Intent to Prototype: Document Local Dictionary API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Document Local Dicti...
- [Re: \[blink-dev\] Intent to Prototype: Document Local Dictionary API](https://www.mail-archive.com/blink-dev@chromium.org/msg14251.html) *(mail-archive.com · 2025-07-22T00:00:00)* *(Cites: `https://chromestatus.com/feature/6185007701557248`)*
  > Re: [blink-dev] Intent to Prototype: Document Local Dictionary API Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype: Document Local Dictionary API Rick Byers Tue, 22 Jul 2025 09:03:16 -0700 Spelling server seems a l...
- [Re: \[blink-dev\] Intent to Prototype: Document Local Dictionary API](http://www.mail-archive.com/blink-dev@chromium.org/msg16929.html) *(mail-archive.com)* *(Cites: `https://github.com/Igalia/explainers/tree/main/spell-check-dictionary`)*
  > Re: [blink-dev] Intent to Prototype: Document Local Dictionary API Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype: Document Local Dictionary API Ziran Sun Tue, 07 Jul 2026 03:00:58 -0700 Thanks everyone for the re...
- [\[blink-dev\] Ready for Developer Testing: Spell Check Custom Dictionary API](http://www.mail-archive.com/blink-dev@chromium.org/msg17107.html) *(mail-archive.com)* *(Cites: `https://github.com/Igalia/explainers/tree/main/spell-check-dictionary`)*
  > [blink-dev] Ready for Developer Testing: Spell Check Custom Dictionary API Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: Spell Check Custom Dictionary API Chromestatus Tue, 04 Aug 2026 07:34:58 -0700 Contact...
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-06-22 (public-html@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-html/2026Jun/0003.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/12590`)*
  > (1 by yisibl) https://github.c... (by lucacasonato) https://github.com/whatwg/html/pull/12593 - 12592 (by lukewarlow) https://github.com/whatwg/html/pull/12592 - 12590 (by bkardell) https://<strong>github.com/whatwg/html/pull/12590</strong>...

## 📚 Platform Documentation & Specifications

- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-06-22 (public-html@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-html/2026Jun/0003.html) *(lists.w3.org)*
- [HTMLElement: spellcheck property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/spellcheck) *(developer.mozilla.org)*
- [GitHub - LPology/Javascript-PHP-Spell-Checker: Javascript plugin for adding a spell checker to web applications. · GitHub](https://github.com/LPology/Javascript-PHP-Spell-Checker) *(github.com)*
- [spellcheck HTML global attribute - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/spellcheck) *(developer.mozilla.org)*
- [GitHub - Aayushi-Mittal/Dictionary-PWA: 🔤 A Progressive Web App which serves as a pocket dictionary! Technologies: Node JS, React JS, Material UI, APIs](https://github.com/Aayushi-Mittal/Dictionary-PWA) *(github.com)*
- [Using an external spell checker](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/3/Using_an_external_spell_checker) *(developer.mozilla.org)*
- [Compression Dictionary Transport](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Compression_dictionary_transport) *(developer.mozilla.org)*
- [Use-As-Dictionary header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Use-As-Dictionary) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 39 result(s) found across 12 planned queries — **26 verified relevant**
  - `"chromestatus.com/feature/6185007701557248" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/Igalia/explainers/tree/main/spell-check-dictionary" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"github.com/whatwg/html/pull/12590" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Spell Check Custom Dictionary API" API` — *Core feature API query* (1 returned)
  - `"Spell Check Custom Dictionary API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"built-in" OR "spell-checking" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Spell Check Custom Dictionary API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Spell Check Custom Dictionary API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Spell Check Custom Dictionary API" OR "spell check custom dictionary" (blog OR guide OR tutorial)` — *Finds developer-oriented tutorials, introductory articles, and guides explaining the concept and usage of the proposed custom dictionary API.* (8 returned)
  - `"spell-check-dictionary" site:github.com/Igalia/explainers OR "whatwg/html/pull/12590"` — *Discovers the technical explainer, proposed WebIDL interfaces, and concrete JavaScript syntax specifications directly from the working repository and WHATWG pull request.* (0 returned)
  - `"Spell Check Custom Dictionary" ("intent to prototype" OR "chromestatus" OR "standards-positions")` — *Tracks browser vendor sentiment and adoption tracking across Blink, WebKit, and Mozilla Standards Positions.* (1 returned)
  - `"spell check" ("custom dictionary" OR "transient dictionary") (Pokemon OR medical OR ticker OR "false positives")` — *Uncovers developer feedback, problem statements, and real-world domain discussions regarding false-positive spellcheck issues in rich-text web applications.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 6 tweet(s)*
- **Dev.to Community Blogs:** 4 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 27 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 10 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6185007701557248)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6185007701557248)
- [Specification](https://github.com/whatwg/html/pull/12590)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/428005649)
