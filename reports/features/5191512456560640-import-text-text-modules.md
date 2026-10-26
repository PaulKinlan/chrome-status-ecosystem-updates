# Import Text (Text Modules)

> **Report Week:** 2026-W44 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

A TC39 proposal to add module \`import … with { type: "text" }\` statements to JavaScript. The import attribute loads text data as a string value.

## Ecosystem Status

- **Momentum:** Emerging (footprint 140 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The TC39 'Import Text' proposal has advanced to Stage 3 and shipped enabled by default in both Firefox 153 and Chrome 155, bringing native string module imports into the ECMAScript module system. By leveraging the import attributes syntax (\`with { type: 'text' }\`), browsers treat the requested resource as UTF-8 text and expose it as a synthetic module with a single default export. While WHATWG HTML and Fetch integrations are established, the feature currently sits at limited baseline availability while Safari completes implementation.

### Recommendations
- Actionable Advice: Teams deploying unbundled native ESM should avoid static text module imports in public production code until Safari ships support, as an unsupported static import halts evaluation of the entire module graph. Instead, continue relying on bundler loaders for build-time compilation, or use dynamic import with a fallback to fetch() when progressive enhancement is required.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [syedtasavour.com](https://syedtasavour.com/journal/javascript-text-modules-import-with-type-text) *(syedtasavour.com)*
  > \*\*Text Modules\*\* is a TC39 standard proposal (advanced through Stage 3) that integrates with the ECMAScript \*\*Import Attributes\*\* syntax to allow plain text resources to be loaded directly as string values \*\*Default Export Only:\*\* The module yields a...
- [medium.com](https://medium.com/@divyanshu.1810/node-js-just-added-native-text-file-imports-8f6120676665) *(medium.com)*
  > \*\*Mandatory Attribute:\*\* The \`with { type: "text" }\` clause is strictly required to prevent arbitrary JavaScript execution and MIME ambiguity js
- [google.com](https://groups.google.com/a/mozilla.org/g/dev-platform/c/ODyKcu3PNdc) *(groups.google.com)*
  > \*\*Discussion:\*\* Championed in TC39 and WHATWG by Mozilla engineers (including Eemeli Aro), the feature was standardized across the WHATWG HTML and Fetch specs and enabled in Firefox (Firefox 153) \*\*Significance:\*\* Highlighted the tight alignment requ...
- [olliewilliams.xyz](https://olliewilliams.xyz/blog/no-build) *(olliewilliams.xyz)*
  > \*\*Ecosystem Perspective:\*\* Discusses how web standards have steadily absorbed responsibilities originally pioneered by Webpack loaders (such as \`raw-loader\` or \`asset/source\`) Alongside JSON and CSS modules, native text modules bring unbundled ESM de...
- [Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17403.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Daniel Bratell Wed, 09 Sep 2026 07:34:24 -0700 LGTM1 (Stage 3 TC39, shipped in Mozilla) /Danie...
- [\[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17364.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Import Text (Text Modules) Nikolaos Papaspyrou Thu, 03 Sep 2026 12:54:19 -0700 \*Contact emails\* \[email&#160;protected\] , \[email&#...
- [Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17420.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Vladimir Levin Wed, 09 Sep 2026 09:19:55 -0700 LGTM3 On Wednesday, September 9, 2026 at 10:43:...
- [\[dev-platform\] Intent to protoype: Importing text modules](http://www.mail-archive.com/dev-platform@mozilla.org/msg01760.html) *(mail-archive.com)*
  > \[dev-platform\] Intent to protoype: Importing text modules Skip to site navigation (Press enter) \[dev-platform\] Intent to protoype: Importing text modules 'Eemeli Aro' via \[email&#160;protected\] Wed, 15 Apr 2026 07:41:48 -0700 Summary: Add a new 'text...
- [\[dev-platform\] Intent to Ship: Importing text modules](http://www.mail-archive.com/dev-platform@mozilla.org/msg01801.html) *(mail-archive.com)*
  > \[dev-platform\] Intent to Ship: Importing text modules Skip to site navigation (Press enter) \[dev-platform\] Intent to Ship: Importing text modules 'Eemeli Aro' via \[email&#160;protected\] Thu, 21 May 2026 05:16:53 -0700 As of Firefox 153, I intend to t...
- [Import text files as strings in JavaScript — intternet.dev](https://intternet.dev/import-javascript-as-a-string) *(intternet.dev)*
  > There is one compatibility caveat: import attributes are standard JavaScript, but the &quot;text&quot; type is still a Stage 3 proposal as of this revision. It is already supported by runtimes and tools including Deno, Bun, and webpack. Node supports...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17403.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5191512456560640`)*
  > Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Daniel Bratell Wed, 09 Sep 2026 07:34:24 -0700 LGTM1 (Stage 3 TC39, shipped in Mozil...
- [\[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17364.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5191512456560640`)*
  > \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Import Text (Text Modules) Nikolaos Papaspyrou Thu, 03 Sep 2026 12:54:19 -0700 \*Contact emails\* \[email&#160;protected\] ...
- [Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17420.html) *(mail-archive.com)* *(Cites: `https://github.com/tc39/proposal-import-text`)*
  > Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Vladimir Levin Wed, 09 Sep 2026 09:19:55 -0700 LGTM3 On Wednesday, September 9, 2026...
- [\[dev-platform\] Intent to protoype: Importing text modules](http://www.mail-archive.com/dev-platform@mozilla.org/msg01760.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/11933`)*
  > \[dev-platform\] Intent to protoype: Importing text modules Skip to site navigation (Press enter) \[dev-platform\] Intent to protoype: Importing text modules 'Eemeli Aro' via \[email&#160;protected\] Wed, 15 Apr 2026 07:41:48 -0700 Summary: Add a...
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-03-30 (public-html@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-html/2026Mar/0004.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/11933`)*
  > (1 by mikewest) https://github... workers\] - #12151 Add controls attribute to img (1 by annevk) https://github.com/whatwg/html/pull/12151 \[addition/proposal\] \[topic: img\] - #11933 &lt;strong&gt;Add text imports&lt;/strong&gt; (3 by eemeli, noamr) https...
- [\[dev-platform\] Intent to Ship: Importing text modules](http://www.mail-archive.com/dev-platform@mozilla.org/msg01801.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/11933`)*
  > \[dev-platform\] Intent to Ship: Importing text modules Skip to site navigation (Press enter) \[dev-platform\] Intent to Ship: Importing text modules 'Eemeli Aro' via \[email&#160;protected\] Thu, 21 May 2026 05:16:53 -0700 As of Firefox 153, I i...

## 📚 Platform Documentation & Specifications

- [Import attributes - JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import/with) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import/source) *(developer.mozilla.org)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-03-30 (public-html@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-html/2026Mar/0004.html) *(lists.w3.org)*
- [Implementation tracking · Issue #12 · tc39/proposal-import-text · GitHub](https://github.com/tc39/proposal-import-text/issues/12) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 66 result(s) found across 14 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/5191512456560640" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/tc39/proposal-import-text" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"github.com/whatwg/html/pull/11933" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (5 returned)
  - `"github.com/w3c/webappsec-csp/pull/794" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"tc39.es/proposal-import-text" -site:tc39.es` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"Import Text (Text Modules)" API` — *Core feature API query* (2 returned)
  - `"Import Text (Text Modules)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"(text" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Import Text (Text Modules)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Import Text (Text Modules)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"import text" OR "text modules" "type: \"text\"" (tutorial OR guide OR blog)` — *Finds technical blog posts and tutorials explaining the TC39 text modules proposal and how to use import attributes for loading plain text.* (8 returned)
  - `"with { type: \"text\" }" OR "assert { type: \"text\" }" "import" javascript example` — *Discovers real-world code snippets, polyfills, and syntax examples showing static or dynamic imports using text module attributes.* (8 returned)
  - `"proposal-import-text" OR "text modules" (Vite OR Webpack OR Rollup OR Babel OR Chromium OR "stage 3")` — *Tracks adoption, implementation progress, and support across major bundlers, transpilers, and browser engines.* (8 returned)
  - `"import text" "type: text" (site:news.ycombinator.com OR site:reddit.com/r/javascript OR "tc39 notes")` — *Surfaces community reactions, feedback, and TC39 committee debates regarding loading raw text files as ES modules.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 4 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 8 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "text-modules", shared with 0 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "text-modules" has no test results*
- **Sources cited by the AI synthesis:** 2 result(s) found — **2 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 3 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5191512456560640)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5191512456560640)
- [Specification](https://tc39.es/proposal-import-text)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/494350643)
