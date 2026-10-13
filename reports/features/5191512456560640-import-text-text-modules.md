# Import Text (Text Modules)

> **Report Week:** 2026-W42 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

A TC39 proposal to add module \`import … with { type: "text" }\` statements to JavaScript. The import attribute loads text data as a string value.

## Ecosystem Status

- **Momentum:** Emerging (footprint 180 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The Import Text specification (\`import … with { type: 'text' }\`) has advanced to Stage 3 at TC39 and is actively rolling out across major engines, shipping enabled by default in Chrome 155 and Firefox 153. The API streamlines module loading by exposing raw file content directly as string default exports, addressing long-standing ergonomic gaps in asset loading. With engine alignment across WHATWG and TC39 alongside rapid adoption across JavaScript runtimes and bundlers, the feature enjoys strong multi-stakeholder consensus.

### Recommendations
- Actionable Advice: Teams deploying native ES modules directly to browsers should wait for Safari to ship stable support before relying on text imports in production unbundled code, or provide a \`fetch()\` fallback. However, projects using modern runtimes like Deno and Bun, or build toolchains like esbuild and Rsbuild, can adopt the syntax immediately with full backward compilation.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Import Text: Loading Text Files as Modules in JavaScript \| Vilva Athiban P B](https://www.vilvaathiban.com/blog/import-text-modules-javascript) *(vilvaathiban.com)*
  > Import Text: Loading Text Files as Modules in JavaScript \| Vilva Athiban P B VA Vilva Athiban P B Lead AI Engineer · Speaker · Educator Writing · Article Import Text: Loading Text Files as Modules in JavaScript Vilva Athiban P B · 23 Sept 2026 · 8 mi...
- [Chrome 155 lets you import text files as JS strings · Azeem Hassni](https://azeemhassni.com/blog/wire-chrome-155-text-module-imports) *(azeemhassni.com)*
  > Chrome 155 lets you import text files as JS strings · Azeem Hassni Skip to content About Resume Portfolio Shopify Plus Blog The Wire Contact Get in touch Chrome 155 lets you import text files as JS strings The with { type: "text" } import attribute, ...
- [olliewilliams.xyz](https://olliewilliams.xyz/blog/text-imports) *(olliewilliams.xyz)*
  > setHTML()\`) \* \*\*Fetch API comparison:\*\* Compares \`import ... with { type: "text" }\` with \`fetch()\`, illustrating how module-level imports hoist and link dependencies ahead of execution rather than forcing sequential, async round-trips during componen...
- [deno.com](https://docs.deno.com/examples/importing_text) *(docs.deno.com)*
  > html\` files before full browser rollout
- [bun.com](https://bun.com/docs/runtime/file-types) *(bun.com)*
  > html\` files before full browser rollout
- [gitclear.com](https://www.gitclear.com/open_repos/angular/angular/pull_requests/10689201) *(gitclear.com)*
  > html\` files before full browser rollout 28+):\*\* Added native support for \`with { type: 'text' }\` imports following the Stage 3 advancement, compiling text files directly to inlined string exports
- [farh.net](https://git.farh.net/farhoodlabs/paperclip/src/commit/1822b3f3780d0be44583ee27f8475a1b03e8bc7a/package.json) *(git.farh.net)*
  > 28+):\*\* Added native support for \`with { type: 'text' }\` imports following the Stage 3 advancement, compiling text files directly to inlined string exports
- [rspack.rs](https://rspack.rs/blog/announcing-2-2) *(rspack.rs)*
  > 2):\*\* Shipped dedicated import attribute loaders matching the TC39 proposal to import raw source CSS and other plain-text files
- [\[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17364.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Import Text (Text Modules) Nikolaos Papaspyrou Thu, 03 Sep 2026 12:54:19 -0700 \*Contact emails\* \[email&#160;protected\] , \[email&#...
- [Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17403.html) *(mail-archive.com)*
  > &lt;strong&gt;The import attribute loads text data as a string value&lt;/strong&gt;. \*Blink component\* Blink&gt;JavaScript&gt;Language &lt;https://issues.chromium.org/issues?q=customfield1222907:&quot;Blink&gt;JavaScript&gt;Language&quot;&gt; \*Web Feature ID\* te...
- [Import text files as strings in JavaScript — intternet.dev](https://intternet.dev/import-javascript-as-a-string) *(intternet.dev)*
  > ?raw is a Vite convention, not JavaScript syntax. It is a good default for a Vite application today, especially when the generated code must run in browsers that do not yet support text import attributes. Current webpack supports the standard import-...
- [Efe Karasakal's Blog \| A Better Way to Load Prompts, SQL & Markdown in Node.js](https://www.efe.dev/blog/nodejs-experimental-import-text) *(efe.dev)*
  > Efe Karasakal&#x27;s Blog \| A Better Way to Load Prompts, SQL & Markdown in Node.js Published on: 2026-07-10 A Better Way to Load Prompts, SQL & Markdown in Node.js Node.js just shipped --experimental-import-text , which lets you import text files di...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-03-23 (public-html@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-html/2026Mar/0003.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/11933`)*
  > y keithamus) https://github.co... - #11965 Move the allow declarative shadow roots flag to the parser (1 by foolip) https://github.com/whatwg/html/pull/11965 - #11933 &lt;strong&gt;Add text imports&lt;/strong&gt; (3 by annevk, eemeli) https://github.co...

## 📚 Platform Documentation & Specifications

- [Import attributes - JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import/with) *(developer.mozilla.org)*
- [import - JavaScript - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import/source) *(developer.mozilla.org)*
- [github.com](https://github.com/microsoft/TypeScript/issues/64011) *(github.com)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-03-23 (public-html@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-html/2026Mar/0003.html) *(lists.w3.org)*
- [Import with type text, bytes, and URL · Issue #9444 · whatwg/html](https://github.com/whatwg/html/issues/9444) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 62 result(s) found across 14 planned queries — **7 verified relevant**
  - `"chromestatus.com/feature/5191512456560640" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/tc39/proposal-import-text" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"github.com/whatwg/html/pull/11933" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"github.com/w3c/webappsec-csp/pull/794" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"tc39.es/proposal-import-text" -site:tc39.es` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"Import Text (Text Modules)" API` — *Core feature API query* (2 returned)
  - `"Import Text (Text Modules)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"(text" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Import Text (Text Modules)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Import Text (Text Modules)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
  - `"with { type: \"text\" }" OR "with { type: 'text' }" import javascript` — *Discovers exact syntax patterns and code snippets using JavaScript text module import attributes.* (8 returned)
  - `"import text" OR "text modules" "type: \"text\"" (tutorial OR guide OR "how to")` — *Finds developer blog posts, tutorials, and deep dives explaining how text module imports work.* (8 returned)
  - `"proposal-import-text" OR "type: \"text\"" (Babel OR Vite OR Webpack OR Bun OR Node.js)` — *Tracks tooling support, bundler implementations, and runtime adoption across the JavaScript ecosystem.* (8 returned)
  - `"proposal-import-text" OR ("import text" "TC39") (site:news.ycombinator.com OR site:reddit.com OR stage)` — *Surfaces community reactions, TC39 progression discussions, and developer sentiment on forums.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 17 result(s) found — **12 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 3 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 8 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "text-modules", shared with 0 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "text-modules" has no test results*
- **Sources cited by the AI synthesis:** 5 result(s) found — **5 verified relevant**

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
