# Import Text (Text Modules)

> **Report Week:** 2026-W43 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

A TC39 proposal to add module \`import … with { type: "text" }\` statements to JavaScript. The import attribute loads text data as a string value.

## Ecosystem Status

- **Momentum:** Emerging (footprint 130 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The Import Text (Text Modules) specification is a Stage 3 TC39 proposal that extends JavaScript's import attributes to load raw textual assets as strings via \`import … with { type: "text" }\`. The feature has achieved cross-engine momentum, having shipped by default in Firefox 153 and Chrome 155, while remaining in development for WebKit and Safari. Native runtimes like Bun and Deno, alongside bundlers such as esbuild, have also embraced the syntax, moving the web closer to full baseline text-import capability.

### Recommendations
- Actionable Advice: Development teams should continue using build-step transforms or bundler loaders (such as in Vite or esbuild) for cross-browser production code while Safari support settles. For runtime-only codebases or edge platforms targeting Chromium, Firefox, Deno, or Bun, developers can safely author native text imports or pair them with dynamic \`import()\` feature detection.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [azeemhassni.com](https://azeemhassni.com/blog/wire-chrome-155-text-module-imports) *(azeemhassni.com)*
  > The \*\*Import Text\*\* feature is a TC39 proposal (currently at \*\*Stage 3\*\*, championed by Eemeli Aro) that extends JavaScript’s import attributes mechanism Following the precedent set by JSON modules (\`with { type: "json" }\`)
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
- [Text imports](https://olliewilliams.xyz/blog/text-imports) *(olliewilliams.xyz)*
  > You can now import a file as a JavaScript string using the new text import attribute. &lt;strong&gt;import text from &quot;/file.&lt;/strong&gt;txt&quot; with { type: &quot;text&quot; }; As with other import types like JSON and CSS, text modules can be dynamic:
- [Import text files as strings in JavaScript — intternet.dev](https://intternet.dev/import-javascript-as-a-string) *(intternet.dev)*
  > Use fetch() instead when the file is remote, changes independently of the build, or should only be loaded in response to user input. The modern syntax uses a type: &quot;text&quot; import attribute: &lt;strong&gt;import template from &#x27;./template.&lt;/str...
- [Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17405.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Mike Taylor Wed, 09 Sep 2026 07:44:44 -0700 LGTM2 On 9/9/26 10:33 a.m., Daniel Bratell wrote: ...

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
- [\[dev-platform\] Intent to Ship: Importing text modules](http://www.mail-archive.com/dev-platform@mozilla.org/msg01801.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/11933`)*
  > \[dev-platform\] Intent to Ship: Importing text modules Skip to site navigation (Press enter) \[dev-platform\] Intent to Ship: Importing text modules 'Eemeli Aro' via \[email&#160;protected\] Thu, 21 May 2026 05:16:53 -0700 As of Firefox 153, I i...
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-03-30 (public-html@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-html/2026Mar/0004.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/11933`)*
  > (1 by mikewest) https://github... workers\] - #12151 Add controls attribute to img (1 by annevk) https://github.com/whatwg/html/pull/12151 \[addition/proposal\] \[topic: img\] - #11933 &lt;strong&gt;Add text imports&lt;/strong&gt; (3 by eemeli, noamr) https...

## 📚 Platform Documentation & Specifications

- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-03-30 (public-html@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-html/2026Mar/0004.html) *(lists.w3.org)*
- [Import attributes - JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import/with) *(developer.mozilla.org)*
- [Import with type text, bytes, and URL · Issue #9444 · whatwg/html](https://github.com/whatwg/html/issues/9444) *(github.com)*
- [Text import attributes · Issue #1556 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1556) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 67 result(s) found across 14 planned queries — **12 verified relevant**
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
  - `JavaScript import text modules with type text tutorial` — *Finds community blog posts and practical guides explaining how to use text modules.* (8 returned)
  - `import with type text js code example WebIDL` — *Searches for real-world JavaScript syntax and code examples utilizing the import text proposal.* (8 returned)
  - `TC39 proposal import text adoption status sentiment` — *Discovers ecosystem announcements, standardization progress, and developer sentiment.* (8 returned)
  - `import attribute text module discussion github tc39` — *Locates discussions, PRs, and community feedback surrounding the text module proposal.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 3 result(s) found — **1 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 2 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 8 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "text-modules", shared with 0 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "text-modules" has no test results*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 3 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5191512456560640)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5191512456560640)
- [Specification](https://tc39.es/proposal-import-text)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/494350643)
