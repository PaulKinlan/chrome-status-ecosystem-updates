# Spell Check Custom Dictionary API

> **Report Week:** 2026-W37 | **Milestone:** Chrome 153 | **Category:** In developer trial (Behind a flag)

## Overview

We are proposing a Spell Check Custom Dictionary API: a per‑document based, transient dictionary that supplements the browser's built-in spell-checking dictionaries. It does not change how those built-in dictionaries behave.

The API lets a web page add words to and remove words from the Spell Check Custom dictionary. During spell checking, the browser's spell checker also checks words against this dictionary, so matching words are not flagged for spelling errors.

This gives pages a way to programmatically suppress spell-check false positives within their own document, without requiring any action from users.

### Motivation

Spell checkers routinely flag words that are correct within a particular site but unknown to general dictionaries. Examples include:

- A Pokémon wiki containing names like Pikachu or Charmander.
- A financial analysis dashboard referencing company‑specific product names or tickers.
- A medical or scientific tool using specialized terminology.

False positives in these contexts are distracting, misleading, and erode user trust. While browsers allow users to add custom words via browser settings panel, there is currently no way for pages to provide a custom dictionary programmatically that applies only within their own context in order to reduce those false positives.

Authors need a way to treat domain‑specific words as “known” without requiring user intervention.

## Ecosystem Status

- **Momentum:** High (250 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Spell Check Custom Dictionary API is currently In developer trial (Behind a flag) in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Standards Activity (WebKit): Latest discussion from @ziransun: "> Speaking in my personal capacity: >  > The [explainer](https://github.com/Igalia/explainers/blob/main/spell-check-dictionary/README.md) says entries..."
- Standards Activity (Mozilla): Latest discussion from @ziransun: "> [@saschanaz](https://github.com/saschanaz) I understood `removeWords()` as removing from the existing set (so it's only doing something if you have ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "ok going to try again with spell check not butchering the post.   It appears the Codex app enforces parent-owned provide" (2 points, 1 comments).

## Standards Positions

- **WebKit:** [SpellCheckCustomDictionary](https://github.com/WebKit/standards-positions/issues/646) [open]
- **Mozilla:** [SpellCheckCustomDictionary](https://github.com/mozilla/standards-positions/issues/1384) [open]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [ok going to try again with spell check not butchering the post.   It appears the Codex app enforces parent-owned provide](https://twitter.com/a_jfedor/status/2094567210857443554) — *by @a_jfedor, 2 likes/RTs, 1 replies*
- 🐦 **Twitter / X:** [WebSpellChecker (@SpellCheckerNet) auf X](https://twitter.com/spellcheckernet?lang=de) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Twitter](https://twitter.com/spell_check) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Newton on Twitter: "@FinancialBear We don't have a spell check of our own. The app uses the spell check provided by the OS. You can enable it in settings. 1/2"](https://twitter.com/newtonmailapp/status/613985992857489408) — *by @newtonmailapp, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [jbryer on Twitter: "Will @rstudio ever have spell check as you type? Especially for rmd files @hadleywickham"](https://twitter.com/jbryer/status/535156791710343168) — *by @jbryer, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Spell Checkers (@SpellCheckersV3) / X](https://twitter.com/SpellCheckersV3) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Spell Checker (@SpellCheckIt) \| Twitter](https://twitter.com/spellcheckit) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [RStudio Tips on Twitter: "we don't have support for spell checking as you type on any platform right now. it's on our backlog, however!… "](https://twitter.com/rstudiotips/status/822542245891084288?lang=en) — *by @rstudiotips, 0 likes/RTs, 0 replies*

## Packages & Polyfills

- [@cspell/dict-html-symbol-entities](https://www.npmjs.com/package/@cspell/dict-html-symbol-entities) `v4.0.5` — Html Symbol Entities dictionary for cspell.
- [@cspell/dict-css](https://www.npmjs.com/package/@cspell/dict-css) `v4.1.2` — CSS dictionary for cspell.
- [@cspell/dict-html](https://www.npmjs.com/package/@cspell/dict-html) `v4.0.16` — HTML dictionary for cspell.
- [cspell-dictionary](https://www.npmjs.com/package/cspell-dictionary) `v10.2.2` — A spelling dictionary library useful for checking words and getting suggestions.

## 📰 Ecosystem Blogs & Articles

- [Intent to Prototype: Document Local Dictionary API](https://groups.google.com/a/chromium.org/g/blink-dev/c/LB5SvNilyhA) *(groups.google.com · 2025-07-22T00:00:00)*
  > Intent to Prototype: Document Local Dictionary API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Document Local Dictionary API ...
- [Re: [blink-dev] Intent to Prototype: Document Local Dictionary API](https://www.mail-archive.com/blink-dev@chromium.org/msg14251.html) *(mail-archive.com · 2025-07-22T00:00:00)*
  > Re: [blink-dev] Intent to Prototype: Document Local Dictionary API Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype: Document Local Dictionary API Rick Byers Tue, 22 Jul 2025 09:03:16 -0700 Spelling server seems a lot harder ...
- [Re: [blink-dev] Intent to Prototype: Document Local Dictionary API](http://www.mail-archive.com/blink-dev@chromium.org/msg16929.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Prototype: Document Local Dictionary API Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype: Document Local Dictionary API Ziran Sun Tue, 07 Jul 2026 03:00:58 -0700 Thanks everyone for the reviews! The...
- [[blink-dev] Ready for Developer Testing: Spell Check Custom Dictionary API](http://www.mail-archive.com/blink-dev@chromium.org/msg17107.html) *(mail-archive.com)*
  > [blink-dev] Ready for Developer Testing: Spell Check Custom Dictionary API Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: Spell Check Custom Dictionary API Chromestatus Tue, 04 Aug 2026 07:34:58 -0700 Contact emails [e...
- [Custom spell check dictionaries — a must-have feature for sentence correctors - WProofreader Blog](https://blog.wproofreader.com/custom-spell-check-dictionaries-a-must-have-feature-for-sentence-correctors) *(blog.wproofreader.com · 2026-04-21T12:42:04)*
  > Custom spell check dictionaries — a must-have feature for sentence correctors - WProofreader Blog WProofreader Blog Proofread now Custom spell check dictionaries — a must-have feature for sentence correctors April 26, 2023 Greetings. We continue writ...
- [Android Developers Blog: Creating Your Own Spelling Checker Service](https://android-developers.googleblog.com/2012/08/creating-your-own-spelling-checker.html) *(android-developers.googleblog.com)*
  > Android Developers Blog: Creating Your Own Spelling Checker Service &#9776; Android Developers Blog The latest Android and Google Play news for app and game developers. 🔍 Android Developers &#8594; Jetpack Kotlin Docs News Platform Android Studio Go...
- [python - Spell checking with custom dictionary - Stack Overflow](https://stackoverflow.com/questions/12932671/spell-checking-with-custom-dictionary) *(stackoverflow.com)*
  > Also, here is some documentation that should help you to better understand the topic of files: http://docs.python.org/tutorial/inputoutput.html#reading-and-writing-files · EDIT: but you are not changing anything! By the end of your script here is wha...
- [Develop Your Own Spelling Check Toolkit with Python | Towards Data Science](https://towardsdatascience.com/develop-your-own-spelling-check-toolkit-with-python-740bf84a865d) *(towardsdatascience.com · 2025-01-16T17:59:35)*
  > While there are several tools that pinpoint these errors, it is extremely satisfying to build your own custom spell-check application that can be further upgraded to be the most suitable device for your liking. In this article, we learned how to buil...
- [Grammar check API for web products | WebSpellChecker](https://webspellchecker.com/wsc-web-api) *(webspellchecker.com · 2024-12-26T15:46:39)*
  > Extend the grammar and spell check functionality of your application with WProofreader HTTP API. Gain developer access to WebSpellChecker robust proofreading engine via HTTP API requests.
- [Setting Up a Spell Checker for VS Code | Medium](https://medium.com/@anticultist/setting-up-a-spell-checker-for-vs-code-8086462fce66) *(medium.com · 2024-10-09T15:42:20)*
  > Adding unknown words to the previously configured dictionary is quickest when we <strong>right-click on the unknown word and select &quot;Spelling &gt; Add Words to Dictionary&quot; from the context menu</strong>.
- [How to automatically check for spelling errors with Spell Check API | TinyMCE](https://www.tiny.cloud/blog/spell-check-api) *(tiny.cloud · 2023-06-27T00:00:00)*
  > The demo checks the length of the JSON object returned, and introduces a more immersive content creation experience, using the spell check API. You could also parse the object, and provide detailed information about what words need correction without...
- [How to Ensure Correct Spelling of Complex or Unusual Terms | PerfectIt](https://www.perfectit.com/blog/how-to-ensure-correct-spelling-of-complex-or-unusual-terms-across-your-entire-organization) *(perfectit.com · 2026-03-25T15:03:49)*
  > <strong>Open the Custom Dictionaries window and highlight StyleGuide.</strong> Copy the file path into File Explorer and press Enter. Double-click on StyleGuide, which will open it in Notepad. ... From there, create a new style sheet in PerfectIt, se...
- [Client-side Spell Checker In Pure JavaScript | CSS Script](https://www.cssscript.com/client-side-spell-checker) *(cssscript.com · 2018-12-02T05:57:22)*
  > A full-free and client-side spell checker that automatically checks the text spelling when typing.
- [javascript - Add spell check to my website - Stack Overflow](https://stackoverflow.com/questions/1940924/add-spell-check-to-my-website) *(stackoverflow.com)*
  > <strong>&quot;JavaScript SpellCheck</strong>&quot; is the industry leading spellchecker plugin for javascript. It allows the developer to easily add and control spellchecking in almost any HTML environment.
- [JavaScript Spelling and Grammar Checkers - Sapling](https://blog.sapling.ai/javascript-spelling-and-grammar-checkers) *(blog.sapling.ai · 2022-09-10T23:29:56)*
  > It is paired as the most popular ... with CSS and HTML that specify what things to render to a screen. Using JavaScript in a web front-end typically involves pulling a user’s text to check from HTML textarea elements and div container elements marked...
- [Creating a Javascript spellingchecker with bjspell](https://esstudio.site/2018/10/22/javascript-spellingchecker.html) *(esstudio.site · 2018-10-22T20:11:31)*
  > A complete spellchecker using BJSpell: spell-checker.site · Javascript in 24 hours · HTML, CSS, ES6 all in one · A Hands-On Guide to Building Web Applications Using React · Learning Regular Expressions · Node.js, MongoDB, and Angular web development ...
- [HTML Global spellcheck Attribute](https://www.w3schools.com/tags/att_global_spellcheck.asp) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more.
- [Enhanced Spell Checking on the Web](https://bkardell.com/blog/EnhancedSpellchecking.html) *(bkardell.com)*
  > It is currently available in Chrome Canary behind the experimental web platform features flag, and is scheduled to be shipping in on <strong>September 8, 2026</strong> behind the same flag. Because of its simplicity, it also works with JSON pretty ni...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: Document Local Dictionary API](https://groups.google.com/a/chromium.org/g/blink-dev/c/LB5SvNilyhA) *(groups.google.com · 2025-07-22T00:00:00)* *(Cites: `https://chromestatus.com/feature/6185007701557248`)*
  > Intent to Prototype: Document Local Dictionary API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Document Local Dicti...
- [Re: [blink-dev] Intent to Prototype: Document Local Dictionary API](https://www.mail-archive.com/blink-dev@chromium.org/msg14251.html) *(mail-archive.com · 2025-07-22T00:00:00)* *(Cites: `https://chromestatus.com/feature/6185007701557248`)*
  > Re: [blink-dev] Intent to Prototype: Document Local Dictionary API Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype: Document Local Dictionary API Rick Byers Tue, 22 Jul 2025 09:03:16 -0700 Spelling server seems a l...
- [Re: [blink-dev] Intent to Prototype: Document Local Dictionary API](http://www.mail-archive.com/blink-dev@chromium.org/msg16929.html) *(mail-archive.com)* *(Cites: `https://github.com/Igalia/explainers/tree/main/spell-check-dictionary`)*
  > Re: [blink-dev] Intent to Prototype: Document Local Dictionary API Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype: Document Local Dictionary API Ziran Sun Tue, 07 Jul 2026 03:00:58 -0700 Thanks everyone for the re...
- [[blink-dev] Ready for Developer Testing: Spell Check Custom Dictionary API](http://www.mail-archive.com/blink-dev@chromium.org/msg17107.html) *(mail-archive.com)* *(Cites: `https://github.com/Igalia/explainers/tree/main/spell-check-dictionary`)*
  > [blink-dev] Ready for Developer Testing: Spell Check Custom Dictionary API Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: Spell Check Custom Dictionary API Chromestatus Tue, 04 Aug 2026 07:34:58 -0700 Contact...
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-06-22 (public-html@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-html/2026Jun/0003.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/12590`)*
  > (1 by yisibl) https://github.c... (by lucacasonato) https://github.com/whatwg/html/pull/12593 - 12592 (by lukewarlow) https://github.com/whatwg/html/pull/12592 - 12590 (by bkardell) https://<strong>github.com/whatwg/html/pull/12590</strong>...

## 📚 Platform Documentation & Specifications

- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-06-22 (public-html@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-html/2026Jun/0003.html) *(lists.w3.org)*
- [HTMLElement: spellcheck property - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/spellcheck) *(developer.mozilla.org)*
- [GitHub - LPology/Javascript-PHP-Spell-Checker: Javascript plugin for adding a spell checker to web applications. · GitHub](https://github.com/LPology/Javascript-PHP-Spell-Checker) *(github.com)*
- [spellcheck HTML global attribute - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/spellcheck) *(developer.mozilla.org)*
- [Using an external spell checker](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/3/Using_an_external_spell_checker) *(developer.mozilla.org)*
- [Compression Dictionary Transport](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Compression_dictionary_transport) *(developer.mozilla.org)*
- [Use-As-Dictionary header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Use-As-Dictionary) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 37 result(s) found across 8 planned queries — **22 verified relevant**
  - `"chromestatus.com/feature/6185007701557248" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/Igalia/explainers/tree/main/spell-check-dictionary" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"github.com/whatwg/html/pull/12590" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Spell Check Custom Dictionary API" API` — *Core feature API query* (1 returned)
  - `"Spell Check Custom Dictionary API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"built-in" OR "spell-checking" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Spell Check Custom Dictionary API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Spell Check Custom Dictionary API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 8 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 1 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **4 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 10 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6185007701557248)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6185007701557248)
- [Specification](https://github.com/whatwg/html/pull/12590)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/428005649)
