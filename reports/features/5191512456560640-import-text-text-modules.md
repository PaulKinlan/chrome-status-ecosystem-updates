# Import Text (Text Modules)

> **Report Week:** 2026-W46 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

A TC39 proposal to add module \`import … with { type: "text" }\` statements to JavaScript. The import attribute loads text data as a string value.

## Ecosystem Status

- **Momentum:** Moderate (+80 points since 2026-10-12; footprint 260 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The TC39 Import Text proposal has rapidly matured at Stage 3, standardizing declarative text asset loading via \`import ... with { type: 'text' }\`. With Firefox shipping support in version 153 and Chromium enabling it by default in Chrome 155, the feature is close to full cross-browser interoperability. Developer sentiment is strongly favorable as native text modules eliminate historical reliance on bundler-specific plugins like raw-loader.

### Recommendations
- Actionable Advice: Teams should prepare their build pipelines and bundlers to support standard \`with { type: 'text' }\` syntax, but maintain fallback transforms or dynamic \`fetch().then(r =&gt; r.text())\` paths until Safari ships full support. Avoid relying on proprietary query parameters in shared library code to ensure forward compatibility with standard ECMAScript modules.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X](https://x.com/ChromiumDev/status/2105325011116646507) — *by @ChromiumDev, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [syedtasavour.com](https://syedtasavour.com/journal/javascript-text-modules-import-with-type-text) *(syedtasavour.com)*
  > The \*\*Import Text\*\* proposal (at TC39 Stage 3 and integrated into the WHATWG HTML specification) standardizes the ability to load external text files directly into JavaScript as plain UTF-8 strings using Import Attributes \*\*Default Export Only:\*\* The...
- [caniuse.com](https://caniuse.com/mdn-javascript_statements_import_import_attributes_type_text) *(caniuse.com)*
  > \*\*Focus:\*\* Standard language syntax and compatibility tables
- [medium.com](https://medium.com/@divyanshu.1810/node-js-just-added-native-text-file-imports-8f6120676665) *(medium.com)*
  > It also covers how attributes are passed to dynamic imports (\`import(specifier, { with: { type: "text" } })\`) \*\*Focus:\*\* Node.js implementation (\`v26.5.0+\` behind \`--experimental-import-text\`) and backend/AI use cases
- [trade-assistance.com](https://trade-assistance.com/blog/text-modules-import-type-text-chrome-155) *(trade-assistance.com)*
  > \*\*Focus:\*\* Tooling consolidation and phasing out bundler lock-in Tooling like Vite (\`import file from './file.txt?raw'\`) and Webpack (\`raw-loader\`) popularized importing plain strings, but these relied on proprietary bundler configurations
- [januschka.com](https://static.januschka.com/changelog/chromium/i2s/M155.html) *(static.januschka.com)*
  > \*\*Focus:\*\* Engine implementation and official release status \*\*Details:\*\* Chromium turned on the TC39 Import Text proposal by default starting in Chrome/Edge 155, catching up with Firefox (shipped in Firefox 153) and aligning cross-browser support al...
- [netlify.app](https://alexanderburgos.netlify.app/blog/chrome-155-text-import-attributes) *(alexanderburgos.netlify.app)*
  > \*\*Web Graphics and Design Systems:\*\* Developers working with WebGL, WebGPU, and SVG design systems have praised text modules for eliminating workarounds when bundling \`.vert\`/\`.frag\` shader files, SVG icons, and HTML partials
- [\[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17364.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Import Text (Text Modules) Nikolaos Papaspyrou Thu, 03 Sep 2026 12:54:19 -0700 \*Contact emails\* \[email&#160;protected\] , \[email&#...
- [Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17403.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Daniel Bratell Wed, 09 Sep 2026 07:34:24 -0700 LGTM1 (Stage 3 TC39, shipped in Mozilla) /Danie...
- [Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17420.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Vladimir Levin Wed, 09 Sep 2026 09:19:55 -0700 LGTM3 On Wednesday, September 9, 2026 at 10:43:...
- [\[dev-platform\] Intent to protoype: Importing text modules](http://www.mail-archive.com/dev-platform@mozilla.org/msg01760.html) *(mail-archive.com)*
  > \[dev-platform\] Intent to protoype: Importing text modules Skip to site navigation (Press enter) \[dev-platform\] Intent to protoype: Importing text modules 'Eemeli Aro' via \[email&#160;protected\] Wed, 15 Apr 2026 07:41:48 -0700 Summary: Add a new 'text...
- [Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17405.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Mike Taylor Wed, 09 Sep 2026 07:44:44 -0700 LGTM2 On 9/9/26 10:33 a.m., Daniel Bratell wrote: ...
- [\[dev-platform\] Intent to Ship: Importing text modules](http://www.mail-archive.com/dev-platform@mozilla.org/msg01801.html) *(mail-archive.com)*
  > \[dev-platform\] Intent to Ship: Importing text modules Skip to site navigation (Press enter) \[dev-platform\] Intent to Ship: Importing text modules 'Eemeli Aro' via \[email&#160;protected\] Thu, 21 May 2026 05:16:53 -0700 As of Firefox 153, I intend to t...
- [Chrome 155 beta \| Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/article/2105325011116646507) *(x.com · 2026-09-30T15:48:01)*
  > A TC39 proposal to add module import … with { type: &quot;text&quot; } statements to JavaScript.
- [Chrome 155 beta  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com · 2026-09-16T00:00:00)*
  > A TC39 proposal to add module import … with { type: &quot;text&quot; } statements to JavaScript.
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/155) *(chromestatus.com · 2026-10-06T00:00:00)*
  > A TC39 proposal to add module import … with { type: &quot;text&quot; } statements to JavaScript.
- [Text imports](https://olliewilliams.xyz/blog/text-imports) *(olliewilliams.xyz)*
  > &lt;strong&gt;import text from &quot;/file.txt&quot; with { type: &quot;text&quot; };&lt;/strong&gt;
- [Importing text files \| Deno Docs](https://docs.deno.com/examples/importing_text) *(docs.deno.com)*
  > In-depth documentation, guides, and reference materials for building secure, high-performance JavaScript and TypeScript applications with Deno
- [Import text files as strings in JavaScript — intternet.dev](https://intternet.dev/import-javascript-as-a-string) *(intternet.dev)*
  > The file is decoded as UTF-8 and exposed as the module’s default export. Its extension does not matter, so the same syntax works for .txt, .html, .sql, or even .js files that must not be executed.
- [@babel/plugin-proposal-text-modules · Babel](https://babeljs.io/docs/babel-plugin-proposal-text-modules) *(babeljs.io)*
  > &lt;strong&gt;Transforms import ... with { type: &quot;text&quot; } declarations to platform-specific API to read the imported file and decode it as UTF-8 text&lt;/strong&gt;.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17364.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5191512456560640`)*
  > \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Import Text (Text Modules) Nikolaos Papaspyrou Thu, 03 Sep 2026 12:54:19 -0700 \*Contact emails\* \[email&#160;protected\] ...
- [Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17403.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5191512456560640`)*
  > Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Daniel Bratell Wed, 09 Sep 2026 07:34:24 -0700 LGTM1 (Stage 3 TC39, shipped in Mozil...
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)* *(Cites: `https://chromestatus.com/feature/5191512456560640`)*
  > import text modules, https://&lt;strong&gt;chromestatus.com/feature/5191512456560640&lt;/strong&gt;
- [Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17420.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5191512456560640`)*
  > Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Vladimir Levin Wed, 09 Sep 2026 09:19:55 -0700 LGTM3 On Wednesday, September 9, 2026...
- [\[dev-platform\] Intent to protoype: Importing text modules](http://www.mail-archive.com/dev-platform@mozilla.org/msg01760.html) *(mail-archive.com)* *(Cites: `https://github.com/tc39/proposal-import-text`)*
  > \[dev-platform\] Intent to protoype: Importing text modules Skip to site navigation (Press enter) \[dev-platform\] Intent to protoype: Importing text modules 'Eemeli Aro' via \[email&#160;protected\] Wed, 15 Apr 2026 07:41:48 -0700 Summary: Add a...
- [Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17405.html) *(mail-archive.com)* *(Cites: `https://github.com/tc39/proposal-import-text`)*
  > Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Mike Taylor Wed, 09 Sep 2026 07:44:44 -0700 LGTM2 On 9/9/26 10:33 a.m., Daniel Brate...
- [\[dev-platform\] Intent to Ship: Importing text modules](http://www.mail-archive.com/dev-platform@mozilla.org/msg01801.html) *(mail-archive.com)* *(Cites: `https://github.com/tc39/proposal-import-text`)*
  > \[dev-platform\] Intent to Ship: Importing text modules Skip to site navigation (Press enter) \[dev-platform\] Intent to Ship: Importing text modules 'Eemeli Aro' via \[email&#160;protected\] Thu, 21 May 2026 05:16:53 -0700 As of Firefox 153, I i...
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-03-30 (public-html@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-html/2026Mar/0004.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/11933`)*
  > (1 by mikewest) https://github... workers\] - #12151 Add controls attribute to img (1 by annevk) https://github.com/whatwg/html/pull/12151 \[addition/proposal\] \[topic: img\] - #11933 &lt;strong&gt;Add text imports&lt;/strong&gt; (3 by eemeli, noamr) https...
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-03-23 (public-html@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-html/2026Mar/0003.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/11933`)*
  > y keithamus) https://github.co... - #11965 Move the allow declarative shadow roots flag to the parser (1 by foolip) https://github.com/whatwg/html/pull/11965 - #11933 &lt;strong&gt;Add text imports&lt;/strong&gt; (3 by annevk, eemeli) https://github.co...

## 📚 Platform Documentation & Specifications

- [import - JavaScript - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) *(developer.mozilla.org)*
- [Import attributes - JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import/with) *(developer.mozilla.org)*
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-03-30 (public-html@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-html/2026Mar/0004.html) *(lists.w3.org)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-03-23 (public-html@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-html/2026Mar/0003.html) *(lists.w3.org)*
- [JavaScript modules - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) *(developer.mozilla.org)*
- [Allow (statically) importing source code (from GLSL files etc) with an appropriate type (binaries??). · Issue #120 · tc39/proposal-import-attributes · GitHub](https://github.com/tc39/proposal-import-attributes/issues/120) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 70 result(s) found across 14 planned queries — **20 verified relevant**
  - `"chromestatus.com/feature/5191512456560640" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"github.com/tc39/proposal-import-text" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (6 returned)
  - `"github.com/whatwg/html/pull/11933" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"github.com/w3c/webappsec-csp/pull/794" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"tc39.es/proposal-import-text" -site:tc39.es` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"Import Text (Text Modules)" API` — *Core feature API query* (6 returned)
  - `"Import Text (Text Modules)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"(text" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Import Text (Text Modules)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Import Text (Text Modules)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
  - `javascript "with { type: 'text' }" OR "with { type: \"text\" }" tutorial OR guide OR explainer` — *Discovers developer blog posts, guides, and explainers detailing how to use JavaScript text module imports with import attributes.* (8 returned)
  - `"import" "with { type: \"text\" }" OR "import(" file.txt example syntax WebIDL` — *Surfaces practical code examples showing static and dynamic text module import syntax in JavaScript.* (8 returned)
  - `"proposal-import-text" OR "text modules" (Vite OR Webpack OR Babel OR Chrome OR Deno OR Bun) support` — *Finds tracking issues, release notes, and documentation on bundler and runtime support for text module imports.* (8 returned)
  - `site:news.ycombinator.com OR site:github.com/tc39 "proposal-import-text" OR "type: \"text\""` — *Locates developer sentiment, TC39 committee deliberations, and security or CSP discussions around importing text as modules.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 4 result(s) found — **1 verified relevant**
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
