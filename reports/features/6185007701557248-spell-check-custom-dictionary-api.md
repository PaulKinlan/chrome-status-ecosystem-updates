# Spell check custom dictionary API

> **Report Week:** 2026-W41 | **Milestone:** Chrome 153 | **Category:** In developer trial (Behind a flag)

## Overview

Adds document.spellCheckCustomDictionary, which lets a page add words to and remove words from a per-document dictionary that the browser's spell checker consults alongside its built-in dictionaries. Matching words are no longer flagged as misspelled in that document, so sites with domain-specific vocabulary, such as product names, technical terms or proper nouns, can suppress false positives without asking users to edit their browser dictionary. The words last only for the document's lifetime and cannot be read back.

### Motivation

Spell checkers routinely flag words that are correct within a particular site but unknown to general dictionaries. Examples include:

- A Pokémon wiki containing names like Pikachu or Charmander.
- A financial analysis dashboard referencing company‑specific product names or tickers.
- A medical or scientific tool using specialized terminology.

False positives in these contexts are distracting, misleading, and erode user trust. While browsers allow users to add custom words via browser settings panel, there is currently no way for pages to provide a custom dictionary programmatically that applies only within their own context in order to reduce those false positives.

Authors need a way to treat domain‑specific words as “known” without requiring user intervention.

## Ecosystem Status

- **Momentum:** High (255 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Spell check custom dictionary API is currently In developer trial (Behind a flag) in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Standards Activity (WebKit): Latest discussion from @ziransun: "&gt; Speaking in my personal capacity: &gt;  &gt; The \[explainer\](https://github.com/Igalia/explainers/blob/main/spell-check-dictionary/README.md) says entries..."
- Standards Activity (Mozilla): Latest discussion from @ziransun: "&gt; \[@saschanaz\](https://github.com/saschanaz) I understood \`removeWords()\` as removing from the existing set (so it's only doing something if you have ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [SpellCheckCustomDictionary](https://github.com/WebKit/standards-positions/issues/646) [open]
- **Mozilla:** [SpellCheckCustomDictionary](https://github.com/mozilla/standards-positions/issues/1384) [open]

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
  > The implementation of this method can access your custom dictionary and any utility classes for extracting and ranking suggestions. For sentence-level checking, you can also implement onGetSuggestionsMultiple(), which accepts an array of TextInfo. In...
- [Develop Your Own Spelling Check Toolkit with Python \| Towards Data Science](https://towardsdatascience.com/develop-your-own-spelling-check-toolkit-with-python-740bf84a865d) *(towardsdatascience.com · 2025-01-16T17:59:35)*
  > While there are several tools that pinpoint these errors, it is extremely satisfying to build your own custom spell-check application that can be further upgraded to be the most suitable device for your liking. In this article, we learned how to buil...
- [python - Spell checking with custom dictionary - Stack Overflow](https://stackoverflow.com/questions/12932671/spell-checking-with-custom-dictionary) *(stackoverflow.com)*
  > Need your guidance! Want to check some text file for any spelling mistakes against custom dictionary. Here is the code: <strong>Dictionary=set(open(&quot;dictionary.</strong>txt&quot;).read().split()) print Dictionary Sear...
- [Setting Up a Spell Checker for VS Code \| Medium](https://medium.com/@anticultist/setting-up-a-spell-checker-for-vs-code-8086462fce66) *(medium.com · 2024-10-09T15:42:20)*
  > Adding unknown words to the previously configured dictionary is quickest when we <strong>right-click on the unknown word and select &quot;Spelling &gt; Add Words to Dictionary&quot; from the context menu</strong>.
- [Grammar check API for web products \| WebSpellChecker](https://webspellchecker.com/wsc-web-api) *(webspellchecker.com · 2024-12-26T15:46:39)*
  > Extend the grammar and spell check functionality of your application with WProofreader HTTP API. Gain developer access to WebSpellChecker robust proofreading engine via HTTP API requests.
- [How to automatically check for spelling errors with Spell Check API \| TinyMCE](https://www.tiny.cloud/blog/spell-check-api) *(tiny.cloud · 2023-06-27T00:00:00)*
  > The demo checks the length of the JSON object returned, and introduces a more immersive content creation experience, using the spell check API. You could also parse the object, and provide detailed information about what words need correction without...
- [How to Ensure Correct Spelling of Complex or Unusual Terms \| PerfectIt](https://www.perfectit.com/blog/how-to-ensure-correct-spelling-of-complex-or-unusual-terms-across-your-entire-organization) *(perfectit.com · 2021-04-21T07:54:00)*
  > The trick to adding all of the unusual terms in your style guide to a custom dictionary is to <strong>run spellcheck on the style guide itself</strong>.
- [Enhanced Spell Checking on the Web](https://bkardell.com/blog/EnhancedSpellchecking.html) *(bkardell.com)*
  > So, there is a proposal currently in HTML for a new API called SpellCheck Custom Dictionary. For v1 the proposal is dead simple. It introduces a new document.spellCheckCustomDictionary with exactly two methods: .addWords(listOfWords) and .removeWords...
- [Enhanced Spell Checking on the Web \| daily.dev](https://daily.dev/posts/enhanced-spell-checking-on-the-web-s6gvtp8ef) *(daily.dev · 2026-09-20T07:47:29)*
  > A new proposed API, SpellCheck Custom Dictionary, adds document.<strong>spellCheckCustomDictionary with addWords/removeWords methods so pages can suppress false positives for domain-specific vocabulary for the lifetime of a document</strong>.
- [Creating a Javascript spellingchecker with bjspell](https://esstudio.site/2018/10/22/javascript-spellingchecker.html) *(esstudio.site · 2018-10-22T20:11:31)*
  > var check = document.querySele... var dictionary = &#x27;<strong>https://rawcdn.githack.com/maheshmurag/bjspell/master/dictionary.js/en_US.js&#x27;; var lang = BJSpell(dictionary, function() { check.disabled = false; });</strong>...
- [Client-side Spell Checker In Pure JavaScript \| CSS Script](https://www.cssscript.com/client-side-spell-checker) *(cssscript.com · 2018-12-02T05:57:22)*
  > Load the core JavaScript file spellchecker.js in the html document. ... Load the Word List in the document. ... Set the valid word list. ... Get Weekly Email on latest Web Dev &amp; Web Design resources. No spam, we promise! ... Alert autocomplete ba...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Spell check custom dictionary (spellcheck-custom-dictionary) · Issue #4464 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4464) *(github.com · 2026-10-02T14:21:12)* *(Cites: `https://chromestatus.com/feature/6185007701557248`)*
  > Spell check custom dictionary (spellcheck-custom-dictionary) · Issue #4464 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with a...
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

- [Spell check custom dictionary (spellcheck-custom-dictionary) · Issue #4464 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4464) *(github.com)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-06-22 (public-html@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-html/2026Jun/0003.html) *(lists.w3.org)*
- [GitHub - bkardell/words: Lists of words for spelling dictionaries · GitHub](https://github.com/bkardell/words) *(github.com)*
- [explainers/spell-check-dictionary/README.md at main · Igalia/explainers](https://github.com/Igalia/explainers/blob/main/spell-check-dictionary/README.md) *(github.com)*
- [SpellCheckCustomDictionary · Issue #646 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/646) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 53 result(s) found across 12 planned queries — **21 verified relevant**
  - `"chromestatus.com/feature/6185007701557248" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/Igalia/explainers/tree/main/spell-check-dictionary" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"github.com/whatwg/html/pull/12590" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Spell check custom dictionary API" API` — *Core feature API query* (1 returned)
  - `"Spell check custom dictionary API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"document.spellcheckcustomdictionary" OR "per-document" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Spell check custom dictionary API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Spell check custom dictionary API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"document.spellCheckCustomDictionary" OR "spellCheckCustomDictionary.add"` — *Find code examples, WebIDL signatures, and implementation snippets for manipulating the custom spell check dictionary.* (8 returned)
  - `"document.spellCheckCustomDictionary" (tutorial OR guide OR walkthrough OR "how to")` — *Identify developer tutorials and practical blog posts explaining how to suppress spell check false positives using the API.* (8 returned)
  - `"spellCheckCustomDictionary" (Chrome OR Firefox OR Safari OR WebKit OR "intent to") -site:github.com/whatwg/html` — *Track browser vendor implementation status, intent-to-prototype/ship announcements, and platform release notes.* (8 returned)
  - `"spell check custom dictionary" OR "spellCheckCustomDictionary" (site:news.ycombinator.com OR site:reddit.com OR site:lobste.rs OR "RFC")` — *Discover web developer sentiment, use cases, and feedback on Hacker News, Reddit, and technical forums.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 8 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 28 item(s) inspected

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
