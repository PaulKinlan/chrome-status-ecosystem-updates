# Spell check custom dictionary API

> **Report Week:** 2026-W42 | **Milestone:** Chrome 153 | **Category:** In developer trial (Behind a flag)

## Overview

Adds document.spellCheckCustomDictionary, which lets a page add words to and remove words from a per-document dictionary that the browser's spell checker consults alongside its built-in dictionaries. Matching words are no longer flagged as misspelled in that document, so sites with domain-specific vocabulary, such as product names, technical terms or proper nouns, can suppress false positives without asking users to edit their browser dictionary. The words last only for the document's lifetime and cannot be read back.

### Motivation

Spell checkers routinely flag words that are correct within a particular site but unknown to general dictionaries. Examples include:  - A Pokémon wiki containing names like Pikachu or Charmander. - A financial analysis dashboard referencing company‑specific product names or tickers. - A medical or scientific tool using specialized terminology.  False positives in these contexts are distracting, misleading, and erode user trust. While browsers allow users to add custom words via browser settings panel, there is currently no way for pages to provide a custom dictionary programmatically that applies only within their own context in order to reduce those false positives.  Authors need a way to treat domain‑specific words as “known” without requiring user intervention.

## Ecosystem Status

- **Momentum:** Moderate (footprint 245 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Spearheaded by Igalia with Bloomberg Tech support, the Spell Check Custom Dictionary API introduces an in-memory, document-scoped interface (\`document.spellCheckCustomDictionary\`) designed to suppress false-positive spellcheck squiggles for domain-specific vocabulary. The proposal is currently being standardized via a WHATWG HTML specification pull request and is available for developer trials behind an experimental flag in Chromium. Cross-engine consensus remains in early stages: Mozilla has officially adopted a neutral stance, WebKit is still reviewing the proposal, and the feature is not yet indexed in Baseline.

### Recommendations
- Actionable Advice: Teams should treat this capability strictly as a progressive enhancement by feature-detecting \`document.spellCheckCustomDictionary\` before invoking \`addWords()\`. Teams managing domain-heavy web applications can experiment with the feature behind Chromium runtime flags and provide upstream feedback to the WHATWG workstream while awaiting broader engine consensus.
- Standards Activity (WebKit): Latest discussion from @ziransun: "&gt; Speaking in my personal capacity: &gt;  &gt; The \[explainer\](https://github.com/Igalia/explainers/blob/main/spell-check-dictionary/README.md) says entries..."
- Standards Activity (Mozilla): Latest discussion from @ziransun: "&gt; \[@saschanaz\](https://github.com/saschanaz) I understood \`removeWords()\` as removing from the existing set (so it's only doing something if you have ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [SpellCheckCustomDictionary](https://github.com/WebKit/standards-positions/issues/646) [open]
- **Mozilla:** [SpellCheckCustomDictionary](https://github.com/mozilla/standards-positions/issues/1384) [closed]

## 📰 Ecosystem Blogs & Articles

- [Enhanced Spell Checking on the Web](https://bkardell.com/blog/EnhancedSpellchecking.html) *(bkardell.com)*
  > spellCheckCustomDictionary\`, a per-document, programmatic dictionary designed to work alongside existing browser and operating system dictionaries \* \*\*The Solution:\*\* The API exposes two straightforward methods
- [chromestatus.com](https://chromestatus.com/release-notes/153) *(chromestatus.com)*
  > \* \*\*Document-scoped lifetime:\*\* Words are kept strictly in memory for the duration of the current document lifecycle and do not persist across navigations or bleed into user profiles spellCheckCustomDictionary\`
- [appspot.com](https://chromiumdash.appspot.com/commit/e2a2b4d1ee05577e396f5a20d0210d855035a17e) *(chromiumdash.appspot.com)*
  > Release entries and Chromium Dash commits highlight implementation specifics, such as input sanitization where \`addWords()\` silently skips invalid inputs (such as empty strings, unpaired Unicode surrogates, or strings with leading/trailing whitespace...
- [appspot.com](https://chromiumdash.appspot.com/commit/8f31ca40badf6a67781f355d4697b395ab4511d2) *(chromiumdash.appspot.com)*
  > Release entries and Chromium Dash commits highlight implementation specifics, such as input sanitization where \`addWords()\` silently skips invalid inputs (such as empty strings, unpaired Unicode surrogates, or strings with leading/trailing whitespace...
- [daily.dev](https://daily.dev/posts/ideals-mtgiunvyg) *(daily.dev)*
  > \* \*\*Key Takeaways:\*\* Kardell pointed out that while spell checking has been in web browsers for decades, the platform historically gave developers virtually no programmatic control over it Standards Trajectory: \*"Ideals"\* (Brian Kardell) \* \*\*Overview...
- [bkardell.com](https://bkardell.com/blog/Ideals.html) *(bkardell.com)*
  > \* \*\*Key Takeaways:\*\* Kardell pointed out that while spell checking has been in web browsers for decades, the platform historically gave developers virtually no programmatic control over it Standards Trajectory: \*"Ideals"\* (Brian Kardell) \* \*\*Overview...
- [Enhanced Spell Checking on the Web \| daily.dev](https://daily.dev/posts/enhanced-spell-checking-on-the-web-s6gvtp8ef) *(daily.dev)*
  > dev, Moltbook, Frontend Weekly):\*\* Developer newsletters and technical commentary praised the API as a long-overdue fix for web-based collaborative document tools, code playgrounds, and specialized portals
- [moltbook.com](https://www.moltbook.com/post/ede1e25a-243e-4329-ac59-7bd7704e5de3) *(moltbook.com)*
  > dev, Moltbook, Frontend Weekly):\*\* Developer newsletters and technical commentary praised the API as a long-overdue fix for web-based collaborative document tools, code playgrounds, and specialized portals Commentary frequently noted that suppressing...
- [frontend-weekly.ru](https://frontend-weekly.ru/weekly-digest-61) *(frontend-weekly.ru)*
  > dev, Moltbook, Frontend Weekly):\*\* Developer newsletters and technical commentary praised the API as a long-overdue fix for web-based collaborative document tools, code playgrounds, and specialized portals
- [Intent to Prototype: Document Local Dictionary API](https://groups.google.com/a/chromium.org/g/blink-dev/c/LB5SvNilyhA) *(groups.google.com · 2025-07-22T00:00:00)*
  > Intent to Prototype: Document Local Dictionary API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Document Local Dictionary API ...
- [Re: \[blink-dev\] Intent to Prototype: Document Local Dictionary API](https://www.mail-archive.com/blink-dev@chromium.org/msg14251.html) *(mail-archive.com · 2025-07-22T00:00:00)*
  > False &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Tracking bug https://issues.chromium.org/issues/428005649 &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Estimated milestones &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; No milestones specified &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; &gt;&...
- [Re: \[blink-dev\] Intent to Prototype: Document Local Dictionary API](http://www.mail-archive.com/blink-dev@chromium.org/msg16929.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Prototype: Document Local Dictionary API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Prototype: Document Local Dictionary API Ziran Sun Tue, 07 Jul 2026 03:00:58 -0700 Thanks everyone for the reviews! The...
- [\[blink-dev\] Ready for Developer Testing: Spell Check Custom Dictionary API](http://www.mail-archive.com/blink-dev@chromium.org/msg17107.html) *(mail-archive.com)*
  > Explainer https://github.com/I... Summary We are proposing a Spell Check Custom Dictionary API: &lt;strong&gt;a per‑document based, transient dictionary that supplements the browser&#x27;s built-in spell-checking dictionaries&lt;/strong&gt;....
- [Chrome Platform Status](https://f896c59-dot-app-py3-dot-cr-status.appspot.com/feature/6185007701557248) *(f896c59-dot-app-py3-dot-cr-status.appspot.com)*
  > Chrome Platform Status
- [Chromium](https://issues.chromium.org/issues/428005649/blocking) *(issues.chromium.org)*
  > Chromium Sign in

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Spell check custom dictionary (spellcheck-custom-dictionary) · Issue #4464 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4464) *(github.com · 2026-10-02T14:21:12)* *(Cites: `https://chromestatus.com/feature/6185007701557248`)*
  > Spell check custom dictionary (spellcheck-custom-dictionary) · Issue #4464 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with a...
- [Intent to Prototype: Document Local Dictionary API](https://groups.google.com/a/chromium.org/g/blink-dev/c/LB5SvNilyhA) *(groups.google.com · 2025-07-22T00:00:00)* *(Cites: `https://chromestatus.com/feature/6185007701557248`)*
  > Intent to Prototype: Document Local Dictionary API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Document Local Dicti...
- [Re: \[blink-dev\] Intent to Prototype: Document Local Dictionary API](https://www.mail-archive.com/blink-dev@chromium.org/msg14251.html) *(mail-archive.com · 2025-07-22T00:00:00)* *(Cites: `https://chromestatus.com/feature/6185007701557248`)*
  > False &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Tracking bug https://issues.chromium.org/issues/428005649 &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Estimated milestones &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; No milestones specified &gt;&gt;&gt;&gt; &gt;&gt;&gt;...
- [Re: \[blink-dev\] Intent to Prototype: Document Local Dictionary API](http://www.mail-archive.com/blink-dev@chromium.org/msg16929.html) *(mail-archive.com)* *(Cites: `https://github.com/Igalia/explainers/tree/main/spell-check-dictionary`)*
  > Re: \[blink-dev\] Intent to Prototype: Document Local Dictionary API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Prototype: Document Local Dictionary API Ziran Sun Tue, 07 Jul 2026 03:00:58 -0700 Thanks everyone for the re...
- [\[blink-dev\] Ready for Developer Testing: Spell Check Custom Dictionary API](http://www.mail-archive.com/blink-dev@chromium.org/msg17107.html) *(mail-archive.com)* *(Cites: `https://github.com/Igalia/explainers/tree/main/spell-check-dictionary`)*
  > Explainer https://github.com/I... Summary We are proposing a Spell Check Custom Dictionary API: &lt;strong&gt;a per‑document based, transient dictionary that supplements the browser&#x27;s built-in spell-checking dictionaries&lt;/strong&gt;....

## 📚 Platform Documentation & Specifications

- [explainers/spell-check-dictionary/README.md at main · Igalia/explainers](https://github.com/Igalia/explainers/blob/main/spell-check-dictionary/README.md) *(github.com)*
- [SpellCheckCustomDictionary · Issue #646 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/646) *(github.com)*
- [Spell check custom dictionary (spellcheck-custom-dictionary) · Issue #4464 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4464) *(github.com)*
- [SpellCheckCustomDictionary · Issue #1384 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1384) *(github.com)*
- [SpellCheckCustomDictionary: Add security & Privacy questionnaire answ… by ziransun · Pull Request #110 · Igalia/explainers](https://github.com/Igalia/explainers/pull/110) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 46 result(s) found across 12 planned queries — **11 verified relevant**
  - `"chromestatus.com/feature/6185007701557248" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/Igalia/explainers/tree/main/spell-check-dictionary" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"github.com/whatwg/html/pull/12590" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Spell check custom dictionary API" API` — *Core feature API query* (1 returned)
  - `"Spell check custom dictionary API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"document.spellcheckcustomdictionary" OR "per-document" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Spell check custom dictionary API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Spell check custom dictionary API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"document.spellCheckCustomDictionary" OR "spellCheckCustomDictionary" javascript` — *Finds technical code snippets and WebIDL method usage demonstrations of the spellCheckCustomDictionary interface.* (8 returned)
  - `"spellCheckCustomDictionary" OR "Spell check custom dictionary API" tutorial OR guide` — *Surfaces community blogs, articles, and step-by-step developer guides explaining how to configure domain-specific spell check vocabularies.* (8 returned)
  - `"spellCheckCustomDictionary" ("Intent to Prototype" OR "Intent to Ship" OR "WebKit" OR "Firefox" OR "Chromium")` — *Discovers browser vendor support status, implementation signals, and official launch announcements.* (8 returned)
  - `"spell-check-dictionary" OR "whatwg/html/pull/12590" (site:github.com OR site:news.ycombinator.com)` — *Captures standard-setting debates, privacy-review feedback, and developer sentiment across platforms like GitHub and Hacker News.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 4 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 6 result(s) found — **6 verified relevant**

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
