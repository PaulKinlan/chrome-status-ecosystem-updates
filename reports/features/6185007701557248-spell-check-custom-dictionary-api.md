# Spell Check Custom Dictionary API

> **Report Week:** 2026-W38 | **Milestone:** Chrome 153 | **Category:** In developer trial (Behind a flag)

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

- **Momentum:** High (285 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Spell Check Custom Dictionary API is currently In developer trial (Behind a flag) in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Standards Activity (WebKit): Latest discussion from @ziransun: "&gt; Speaking in my personal capacity: &gt;  &gt; The \[explainer\](https://github.com/Igalia/explainers/blob/main/spell-check-dictionary/README.md) says entries..."
- Standards Activity (Mozilla): Latest discussion from @ziransun: "&gt; \[@saschanaz\](https://github.com/saschanaz) I understood \`removeWords()\` as removing from the existing set (so it's only doing something if you have ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [SpellCheckCustomDictionary](https://github.com/WebKit/standards-positions/issues/646) [open]
- **Mozilla:** [SpellCheckCustomDictionary](https://github.com/mozilla/standards-positions/issues/1384) [open]

## Packages & Polyfills

- [@cspell/dict-html-symbol-entities](https://www.npmjs.com/package/@cspell/dict-html-symbol-entities) `v4.0.5` — Html Symbol Entities dictionary for cspell.
- [@cspell/dict-css](https://www.npmjs.com/package/@cspell/dict-css) `v4.1.2` — CSS dictionary for cspell.
- [@cspell/dict-markdown](https://www.npmjs.com/package/@cspell/dict-markdown) `v2.0.18` — Markdown dictionary for cspell.
- [cspell-dictionary](https://www.npmjs.com/package/cspell-dictionary) `v10.3.1` — A spelling dictionary library useful for checking words and getting suggestions.

## 📰 Ecosystem Blogs & Articles

- [Intent to Prototype: Document Local Dictionary API](https://groups.google.com/a/chromium.org/g/blink-dev/c/LB5SvNilyhA) *(groups.google.com · 2025-07-22T00:00:00)*
  > Intent to Prototype: Document Local Dictionary API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Document Local Dictionary API ...
- [Re: \[blink-dev\] Intent to Prototype: Document Local Dictionary API](https://www.mail-archive.com/blink-dev@chromium.org/msg14251.html) *(mail-archive.com · 2025-07-22T00:00:00)*
  > Re: [blink-dev] Intent to Prototype: Document Local Dictionary API Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype: Document Local Dictionary API Rick Byers Tue, 22 Jul 2025 09:03:16 -0700 Spelling server seems a lot harder ...
- [Re: \[blink-dev\] Intent to Prototype: Document Local Dictionary API](http://www.mail-archive.com/blink-dev@chromium.org/msg16929.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Prototype: Document Local Dictionary API Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype: Document Local Dictionary API Ziran Sun Tue, 07 Jul 2026 03:00:58 -0700 Thanks everyone for the reviews! The...
- [\[blink-dev\] Ready for Developer Testing: Spell Check Custom Dictionary API](http://www.mail-archive.com/blink-dev@chromium.org/msg17107.html) *(mail-archive.com)*
  > [blink-dev] Ready for Developer Testing: Spell Check Custom Dictionary API Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: Spell Check Custom Dictionary API Chromestatus Tue, 04 Aug 2026 07:34:58 -0700 Contact emails [e...
- [Enhanced Spell Checking on the Web](https://bkardell.com/blog/EnhancedSpellchecking.html) *(bkardell.com)*
  > It is currently available in Chrome Canary behind the experimental web platform features flag, and is scheduled to be shipping in on <strong>September 8, 2026</strong> behind the same flag. Because of its simplicity, it also works with JSON pretty ni...
- [Intent to Implement and Ship: spellcheck attribute in webview](https://groups.google.com/a/chromium.org/g/blink-dev/c/QdaQY0yyAiE/m/XCi_0Ul9CQAJ) *(groups.google.com)*
  > Contact emails mig...@chromium.org to...@chromium.org · Spec https://html.spec.whatwg.org/multipage/interaction.html#spelling-and-grammar-checking
- [Rebuilding the spellchecker \| Hacker News](https://news.ycombinator.com/item?id=25789099) *(news.ycombinator.com · 2021-01-15T19:39:50)*
  > It&#x27;s amazing how difficult it is to encode rules for dealing with natural language, considering how easy it is for a person to resolve ambiguities, misspellings, and the like. Of course, we forget how much knowledge we have encoded in our own br...
- [Spell Checking a Year's Worth of Hacker News \| Hacker News](https://news.ycombinator.com/item?id=47058308) *(news.ycombinator.com · 2026-02-21T09:49:35)*
  > I love this about English! We are the most prolific word thieves of all time. We even stole an entire grammatically complete sentence from French (&quot;Je ne sais quoi&quot;) · If you want English to be more like Hungarian, start inserting Hungarian...
- [Can you give me an example? Spell check only checks if a word is in dictionary. ... \| Hacker News](https://news.ycombinator.com/item?id=44059286) *(news.ycombinator.com · 2025-05-25T00:00:00)*
  > Where doge is both the name of a title (like duke) but it is misspelt &quot;dog&quot;. The use of &quot;Venice&quot; where doge&#x27;s are could increase a the likelihood of a smarter spell check keeping doge and not correcting to dog. Looking at a w...
- [r/firefox on Reddit: How to use custom Hunspell dictionaries for spell checking?](https://www.reddit.com/r/firefox/comments/b9d1k4/how_to_use_custom_hunspell_dictionaries_for_spell) *(reddit.com · 2019-04-04T13:58:16)*
  > You will need a pair of a .aff and a .dic file in order to use a dictionary. Only a .dic file will not work. If you in install such a pair in /usr/share/hunspell/ all Hunspell spell checkers (on the system, in Firefox and in LibreOffice) will find th...
- [AI can’t really spell check without risking changing the meaning of sentences. S... \| Hacker News](https://news.ycombinator.com/item?id=48370005) *(news.ycombinator.com · 2026-06-05T01:48:56)*
  > To make this approach work better, feed it a bunch of English text (or whatever language your document is in) before the document you really want to &quot;spellcheck.&quot; · Essentially this isn&#x27;t a spell &quot;checker&quot; so much as a spell ...
- [r/Ubuntu on Reddit: What's the best way to use a custom dictionary and spell check?](https://www.reddit.com/r/Ubuntu/comments/1lieoy0/whats_the_best_way_to_use_a_custom_dictionary_and) *(reddit.com · 2025-06-23T11:58:29)*
  > You can also add new words to dictionary in a text field, like in a commenting space. Misspell a word as you make a comment. It will give you the red wavy line. <strong>Right click on that, and you should get the spell check/Add to Dictionary menu</s...
- [Ask HN: Should HN have a built-in spellcheck? \| Hacker News](https://news.ycombinator.com/item?id=41648591) *(news.ycombinator.com · 2024-09-26T00:36:24)*
  > I believe the first isn&#x27;t true and the second is: people comment and move on · 1) Browsers have spell check. One of my general rules is not to make a web site more complicated by re-inventing features that exist in the browser
- [r/learnpython on Reddit: How do I spell-check text against a custom dictionary?](https://www.reddit.com/r/learnpython/comments/3pm1ze/how_do_i_spellcheck_text_against_a_custom) *(reddit.com · 2015-10-21T09:23:55)*
  > You could ignore the training/frequency part and just have a 1 entry per item in your custom dictionary, but then you&#x27;d hit the

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

## 📚 Platform Documentation & Specifications

- [explainers/spell-check-dictionary/README.md at main · Igalia/explainers](https://github.com/Igalia/explainers/blob/main/spell-check-dictionary/README.md) *(github.com)*
- [SpellCheckCustomDictionary · Issue #646 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/646) *(github.com)*
- [Preventing User Dictionary Leaks via ::spelling-error and ::grammar-error CSS Pseudo-Elements · Issue #546 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/546) *(github.com)*
- [Using an external spell checker](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/3/Using_an_external_spell_checker) *(developer.mozilla.org)*
- [Compression Dictionary Transport](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Compression_dictionary_transport) *(developer.mozilla.org)*
- [Use-As-Dictionary header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Use-As-Dictionary) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 61 result(s) found across 12 planned queries — **17 verified relevant**
  - `"chromestatus.com/feature/6185007701557248" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/Igalia/explainers/tree/main/spell-check-dictionary" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"github.com/whatwg/html/pull/12590" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Spell Check Custom Dictionary API" API` — *Core feature API query* (1 returned)
  - `"Spell Check Custom Dictionary API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"built-in" OR "spell-checking" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Spell Check Custom Dictionary API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Spell Check Custom Dictionary API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Spell Check Custom Dictionary API" OR "spell check custom dictionary" blog OR tutorial OR guide` — *Discovers community developer guides, explainers, and practical blog posts introducing the transient custom spell check dictionary API.* (8 returned)
  - `"Spell Check Custom Dictionary" OR "SpellcheckCustomDictionary" (addWord OR removeWord OR WebIDL OR javascript)` — *Finds technical specifications, WebIDL definitions, and sample JavaScript code demonstrating how to interact with the document custom dictionary.* (8 returned)
  - `"whatwg/html/pull/12590" OR "spell-check-dictionary" ("standards-positions" OR ChromeStatus OR WebKit OR Mozilla)` — *Tracks browser vendor consensus, standards position discussions across Mozilla and WebKit, and WHATWG HTML pull request status.* (8 returned)
  - `"Spell Check Custom Dictionary" (site:news.ycombinator.com OR site:reddit.com OR "Hacker News")` — *Surfaces community reactions, feedback, and developer discussions regarding browser spell-check customization on social aggregation platforms.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 8 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **1 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **4 verified relevant**
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
