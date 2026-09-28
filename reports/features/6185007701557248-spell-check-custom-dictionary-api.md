# Spell Check Custom Dictionary API

> **Report Week:** 2026-W40 | **Milestone:** Chrome 153 | **Category:** In developer trial (Behind a flag)

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

- **Momentum:** High (295 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The Spell Check Custom Dictionary API (providing \`document.spellCheckCustomDictionary\`), driven by Igalia with sponsorship from Bloomberg Tech, introduces a transient, per-document dictionary to suppress false positives on domain-specific vocabulary. The feature is currently available for developer experimentation behind experimental flags in Chromium (Chrome 153) and is undergoing active standardization via WHATWG HTML. Cross-engine consensus is progressing constructively, though formal adoption in Gecko and WebKit awaits resolution of OS-level dictionary integration and word-tokenization details.

### Recommendations
- Actionable Advice: Adopt the API purely as a progressive enhancement by feature-detecting \`'spellCheckCustomDictionary' in document\` before loading lexicons with \`addWords()\`. Development teams building rich text editors or specialized domain portals should test their word lists in Chromium developer trials and file feedback on tokenizer edge cases.
- Standards Activity (WebKit): Latest discussion from @ziransun: "&gt; Speaking in my personal capacity: &gt;  &gt; The \[explainer\](https://github.com/Igalia/explainers/blob/main/spell-check-dictionary/README.md) says entries..."
- Standards Activity (Mozilla): Latest discussion from @ziransun: "&gt; \[@saschanaz\](https://github.com/saschanaz) I understood \`removeWords()\` as removing from the existing set (so it's only doing something if you have ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [SpellCheckCustomDictionary](https://github.com/WebKit/standards-positions/issues/646) [open]
- **Mozilla:** [SpellCheckCustomDictionary](https://github.com/mozilla/standards-positions/issues/1384) [open]

## 📰 Ecosystem Blogs & Articles

- [daily.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGMa5zfNIabk9zirGhRcq5auBJpKVuEhu7dIezyn8K4E8Z6IaHU-x7MAo2NVCXTRwkI7EVie9J6mD-AVO9f7hYRD6sVkkjnMGXmRWKOnt2UDRm9mdBTURlGyK-n856_Ry7IVLtQJNDJkKB3Ww56zmaVDYQUd63noqTKFg==) *(vertexaisearch.cloud.google.com)*
  > Enhanced Spell Checking on the Web | daily.dev Planet Igalia Read post Enhanced Spell Checking on the Web Browser spellcheck highlighting is deliberately fuzzy and inconsistent across OS, browser, and profile to avoid fingerprinting risks, leading to...
- [bkardell.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGwTs_GFbsCwmJ6HaAi9J4egZZh4Ulp9-Fc4cCmFDZucJQXHJ8RPm9Q32MPsocKfIBUWf1tlGgQY3uWdq3LRVl_DYDu_56AE3gjf__CPeDAQoqYQyC4OVW7rfzzL28=) *(vertexaisearch.cloud.google.com)*
  > Browsers and Language Features Author Information Brian Kardell Betterifying the Web Developer Advocate at Igalia Original Co-author/Co-signer of The Extensible Web Manifesto Co-Founder/Chair, W3C Extensible Web CG Member, W3C (OpenJS Foundation) Co-...
- [bkardell.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFIveEt21SsUTUgYS-2imaWvR3M2Iad6KXWnQltZWVAzOpRuRMoLsVxLf4pmeiCFEHsHkdA3pVG58_NRRrCBtWiM8vrIvJFamiMzaHk-RNI-dEOpFQugzkdxf-9FC-uT5p9iLhOZPKfaLCD) *(vertexaisearch.cloud.google.com)*
  > Enhanced Spell Checking on the Web Author Information Brian Kardell Betterifying the Web Developer Advocate at Igalia Original Co-author/Co-signer of The Extensible Web Manifesto Co-Founder/Chair, W3C Extensible Web CG Member, W3C (OpenJS Foundation)...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF7ecYqWRWW4qUD2yE7hcNlNxUXfAkzTX3Oo0_r7hLqi9qqerxMalKsRaO9qV1MYTNVDlBJG6TokF0C4TiTsyFB4QdODKeREkOABHO7_FASzXfbONwBUkuvem4_jAiA5KT3cmKx_f0stkH07tIERJMHtMC1-6nuMmuz3TyTc9vcKNqCHkbQ) *(vertexaisearch.cloud.google.com)*
  > explainers/spell-check-dictionary/README.md at main · Igalia/explainers · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your...
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEm8cCHWho7GNIuVVH6S3UjLhxs82BNAQQMbF-mfoonyZLjXZIZ8Zi5eLeqMJofvSwrwpPQpaCEghQNq8JXmpobSmRVzWgiqoBWnAokURsjYn0D72KEzM-zCMTUg-fQvjTbJgAOgWkcTwwKMqvMKFbqYFCC9Z4KkoVR-rRLASNiea36Bfve8A==) *(vertexaisearch.cloud.google.com)*
  > Chromium Dash
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHKcQwidOzMRMQxVf8m0xKhspZSdSPwVxb1zFITx-F9l4sEmrls8bQsXuOPHL0vc9mtYRE_ZFWtW85_Kgf7OcV2ty6EZBB5j40lrC1zcR5t5Flq9tONRxqcYlQfXi1a02AsNZ9GJl63OeC8wPpJ3w==) *(vertexaisearch.cloud.google.com)*
  > SpellCheckCustomDictionary · Issue #646 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your se...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH3pPBBAP1Ke5lwNhlax4LLzRvU20zs6cNNY_zIlx7URPcq0rBU35bE4hgpiQi53tAmTwU1IYZ2WPYkH_E1koZD4dL8MY5E1I63qPi0Mfy3JR6625uVNk0iyV0sunUxD3KZg2YXIbCnUVcJKL10pA==) *(vertexaisearch.cloud.google.com)*
  > SpellCheckCustomDictionary · Issue #646 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your se...
- [Intent to Prototype: Document Local Dictionary API](https://groups.google.com/a/chromium.org/g/blink-dev/c/LB5SvNilyhA) *(groups.google.com · 2025-07-22T00:00:00)*
  > Intent to Prototype: Document Local Dictionary API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Document Local Dictionary API ...
- [Re: \[blink-dev\] Intent to Prototype: Document Local Dictionary API](https://www.mail-archive.com/blink-dev@chromium.org/msg14251.html) *(mail-archive.com · 2025-07-22T00:00:00)*
  > False &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Tracking bug https://issues.chromium.org/issues/428005649 &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Estimated milestones &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; No milestones specified &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; &gt;&...
- [Re: \[blink-dev\] Intent to Prototype: Document Local Dictionary API](http://www.mail-archive.com/blink-dev@chromium.org/msg16929.html) *(mail-archive.com)*
  > Ziran On Wednesday, 4 February 2026 at 21:48:38 UTC Ziran Sun wrote: &gt; The explainer has been updated at - &gt; https://<strong>github.com/Igalia/explainers/tree/main/spell-check-dictionary</strong> &gt; &gt; On Friday, 9 January 2026 at 10:39:25 ...
- [\[blink-dev\] Ready for Developer Testing: Spell Check Custom Dictionary API](http://www.mail-archive.com/blink-dev@chromium.org/msg17107.html) *(mail-archive.com)*
  > Explainer https://github.com/I... Summary We are proposing a Spell Check Custom Dictionary API: <strong>a per‑document based, transient dictionary that supplements the browser&#x27;s built-in spell-checking dictionaries</strong>....
- [Custom spell check dictionaries — a must-have feature for sentence correctors - WProofreader Blog](https://blog.wproofreader.com/custom-spell-check-dictionaries-a-must-have-feature-for-sentence-correctors) *(blog.wproofreader.com · 2026-04-21T12:42:04)*
  > Dictionary API implies that admins can make bulk operations with dictionaries: add/delete words, create new dictionaries, etc. Custom dictionary API is available as a part of WProofreader SDK. P.S. We’ve just rolled out a style guide feature with cus...
- [Android Developers Blog: Creating Your Own Spelling Checker Service](https://android-developers.googleblog.com/2012/08/creating-your-own-spelling-checker.html) *(android-developers.googleblog.com)*
  > The implementation of this method can access your custom dictionary and any utility classes for extracting and ranking suggestions. For sentence-level checking, you can also implement onGetSuggestionsMultiple(), which accepts an array of TextInfo. In...
- [Develop Your Own Spelling Check Toolkit with Python \| Towards Data Science](https://towardsdatascience.com/develop-your-own-spelling-check-toolkit-with-python-740bf84a865d) *(towardsdatascience.com · 2025-01-16T17:59:35)*
  > While there are several tools that pinpoint these errors, it is extremely satisfying to build your own custom spell-check application that can be further upgraded to be the most suitable device for your liking. In this article, we learned how to buil...
- [python - Spell checking with custom dictionary - Stack Overflow](https://stackoverflow.com/questions/12932671/spell-checking-with-custom-dictionary) *(stackoverflow.com)*
  > Also, here is some documentation that should help you to better understand the topic of files: http://docs.python.org/tutorial/inputoutput.html#reading-and-writing-files · EDIT: but you are not changing anything! By the end of your script here is wha...
- [Grammar check API for web products \| WebSpellChecker](https://webspellchecker.com/wsc-web-api) *(webspellchecker.com · 2024-12-26T15:46:39)*
  > For developers. Proofreading engine capabilities for web products available via grammar check API.
- [Setting Up a Spell Checker for VS Code \| Medium](https://medium.com/@anticultist/setting-up-a-spell-checker-for-vs-code-8086462fce66) *(medium.com · 2024-10-09T15:42:20)*
  > Adding unknown words to the previously configured dictionary is quickest when we <strong>right-click on the unknown word and select &quot;Spelling &gt; Add Words to Dictionary&quot; from the context menu</strong>.
- [How to Ensure Correct Spelling of Complex or Unusual Terms \| PerfectIt](https://www.perfectit.com/blog/how-to-ensure-correct-spelling-of-complex-or-unusual-terms-across-your-entire-organization) *(perfectit.com · 2021-04-21T07:54:00)*
  > The trick to adding all of the unusual terms in your style guide to a custom dictionary is to <strong>run spellcheck on the style guide itself</strong>.
- [Enhanced Spell Checking on the Web \| daily.dev](https://daily.dev/posts/enhanced-spell-checking-on-the-web-s6gvtp8ef) *(daily.dev · 2026-09-20T07:47:29)*
  > Implemented by Igalia with Bloomberg Tech funding, it&#x27;s currently in Chrome Canary behind an experimental flag and scheduled to ship behind the same flag on <strong>September 8, 2026</strong>. The author also built a small polyfill library that ...
- [Enhanced Spell Checking on the Web](https://bkardell.com/blog/EnhancedSpellchecking.html) *(bkardell.com)*
  > It is currently available in Chrome Canary behind the experimental web platform features flag, and is scheduled to be shipping in on <strong>September 8, 2026</strong> behind the same flag. Because of its simplicity, it also works with JSON pretty ni...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: Document Local Dictionary API](https://groups.google.com/a/chromium.org/g/blink-dev/c/LB5SvNilyhA) *(groups.google.com · 2025-07-22T00:00:00)* *(Cites: `https://chromestatus.com/feature/6185007701557248`)*
  > Intent to Prototype: Document Local Dictionary API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Document Local Dicti...
- [Re: \[blink-dev\] Intent to Prototype: Document Local Dictionary API](https://www.mail-archive.com/blink-dev@chromium.org/msg14251.html) *(mail-archive.com · 2025-07-22T00:00:00)* *(Cites: `https://chromestatus.com/feature/6185007701557248`)*
  > False &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Tracking bug https://issues.chromium.org/issues/428005649 &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Estimated milestones &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; No milestones specified &gt;&gt;&gt;&gt; &gt;&gt;&gt;...
- [Re: \[blink-dev\] Intent to Prototype: Document Local Dictionary API](http://www.mail-archive.com/blink-dev@chromium.org/msg16929.html) *(mail-archive.com)* *(Cites: `https://github.com/Igalia/explainers/tree/main/spell-check-dictionary`)*
  > Ziran On Wednesday, 4 February 2026 at 21:48:38 UTC Ziran Sun wrote: &gt; The explainer has been updated at - &gt; https://<strong>github.com/Igalia/explainers/tree/main/spell-check-dictionary</strong> &gt; &gt; On Friday, 9 January 2026 at...
- [\[blink-dev\] Ready for Developer Testing: Spell Check Custom Dictionary API](http://www.mail-archive.com/blink-dev@chromium.org/msg17107.html) *(mail-archive.com)* *(Cites: `https://github.com/Igalia/explainers/tree/main/spell-check-dictionary`)*
  > Explainer https://github.com/I... Summary We are proposing a Spell Check Custom Dictionary API: <strong>a per‑document based, transient dictionary that supplements the browser&#x27;s built-in spell-checking dictionaries</strong>....
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-06-22 (public-html@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-html/2026Jun/0003.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/12590`)*
  > (1 by yisibl) https://github.c... (by lucacasonato) https://github.com/whatwg/html/pull/12593 - 12592 (by lukewarlow) https://github.com/whatwg/html/pull/12592 - 12590 (by bkardell) https://<strong>github.com/whatwg/html/pull/12590</strong>...

## 📚 Platform Documentation & Specifications

- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-06-22 (public-html@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-html/2026Jun/0003.html) *(lists.w3.org)*
- [GitHub - bkardell/words: Lists of words for spelling dictionaries · GitHub](https://github.com/bkardell/words) *(github.com)*
- [explainers/spell-check-dictionary/README.md at main · Igalia/explainers](https://github.com/Igalia/explainers/blob/main/spell-check-dictionary/README.md) *(github.com)*
- [SpellCheckCustomDictionary · Issue #646 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/646) *(github.com)*
- [\[spell-check-dictionary\] Fuzzy matching · Issue #94 · Igalia/explainers](https://github.com/Igalia/explainers/issues/94) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 51 result(s) found across 12 planned queries — **18 verified relevant**
  - `"chromestatus.com/feature/6185007701557248" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/Igalia/explainers/tree/main/spell-check-dictionary" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"github.com/whatwg/html/pull/12590" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Spell Check Custom Dictionary API" API` — *Core feature API query* (2 returned)
  - `"Spell Check Custom Dictionary API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"built-in" OR "spell-checking" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Spell Check Custom Dictionary API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Spell Check Custom Dictionary API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Spell Check Custom Dictionary" OR "custom dictionary API" (JavaScript OR WebIDL OR document) code example` — *Finds code samples, WebIDL signatures, and usage patterns illustrating how developers manipulate document-level custom spellcheck dictionaries programmatically.* (8 returned)
  - `"Spell Check Custom Dictionary API" OR "spell-check-dictionary" (Igalia OR blog OR guide OR overview)` — *Discovers explanatory articles, developer guides, and conceptual deep-dives explaining the motivation and application of transient custom dictionaries.* (8 returned)
  - `"Spell Check Custom Dictionary" OR "spell-check-dictionary" ("Intent to" OR "standards-positions" OR "Chromium" OR "WebKit")` — *Tracks multi-engine browser vendor feedback, standards positions from Apple/Mozilla, and Chromium implementation intent.* (5 returned)
  - `"whatwg/html/pull/12590" OR ("Spell Check Custom Dictionary" (feedback OR privacy OR security OR consensus))` — *Surfaces specification discussions, community debates, and technical feedback regarding privacy or usability in the WHATWG pull request and web forums.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 7 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *found 6 tweet(s)*
- **Dev.to Community Blogs:** 3 result(s) found — **0 verified relevant**
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
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6185007701557248)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6185007701557248)
- [Specification](https://github.com/whatwg/html/pull/12590)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/428005649)
