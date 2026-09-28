# Import Text (Text Modules)

> **Report Week:** 2026-W40 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

A TC39 proposal to add module \`import … with { type: "text" }\` statements to JavaScript. The import attribute loads text data as a string value.

## Ecosystem Status

- **Momentum:** High (340 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** The TC39 Import Text proposal (\`import text from './file.txt' with { type: 'text' }\`) reached Stage 3 and standardizes importing text assets directly as UTF-8 strings. Following Firefox 153's release and Chromium shipping it enabled by default in Chrome 155, the feature boasts near-unanimous multi-engine backing and is bridging a long-standing gap between bundler behaviors and native ESM. Runtimes including Node.js, Deno, and Bun alongside bundlers like esbuild have moved quickly to land native implementations.

### Recommendations
- Actionable Advice: Teams should configure modern build pipelines (such as esbuild 0.28+) to safely target \`with { type: 'text' }\` for bundled applications today. For unbundled native web delivery, wait for Safari's general availability release before dropping fallback patterns or using dynamic \`import()\` feature detection.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [olliewilliams.xyz](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFVoMXrQm2XuiRHGaDeUc812hMB0m_ZGYnqfL0RFao7Sprkh4O0IaH-OWGYiNHrbPEcinsCyXiGtUhr3pi1jxTt-l4khYHkfLN-f-4fQ0V42TwKVLfCsIL3qj2hdigqrPel) *(vertexaisearch.cloud.google.com)*
  > Text imports Jun 3, 2026 Text imports You can now import a file as a JavaScript string using the new text import attribute. import text from "/file.txt" with { type: "text" }; As with other import types like JSON and CSS, text modules can be dynamic:...
- [efe.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHWmJirP5qt2Dv-PKB6OZ0C3wnSuW6NJsu1r3TvOsVa2N3AGbuNKuB5Nw32X9p0awsz97ukOg01S7TU6w6CXwpNbIC-HTHYT27mve70n4ZohUGOoQRYAno-k9odAwWTj2BQ2qouazucRnaOKzaZWA==) *(vertexaisearch.cloud.google.com)*
  > Efe Karasakal&#x27;s Blog | A Better Way to Load Prompts, SQL & Markdown in Node.js Published on: 2026-07-10 A Better Way to Load Prompts, SQL & Markdown in Node.js Node.js just shipped --experimental-import-text , which lets you import text files di...
- [cloudflare.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEHs_ih0nmo4HpxMeWSai5oeaSkmizErpZcqPgMQBYNZEH8-O01NN7anWeV1HSdcgn9aQBAUoR0i896_GwFi8ulacMf-RVNleYwU8brNdCFAbINjzYeHz8blV7NzGc7ilb4pE7mpIByB36xZb-q2CU6) *(vertexaisearch.cloud.google.com)*
  > How we rebuilt Cloudflare Workers’ module registry for Node.js compatibility | Cloudflare Blog Skip to content Internship Experience JavaScript Node.js Open Source Cloudflare Workers Developer Platform Developers Internship Experience JavaScript Node...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEJWpNTcNxhzFJ4SIp5y-5aKSjFpEAuEz8S7S-g6696VFXSMfYP3k_thVlmFCZiP7PS8u5-bpTXIs1NZwYXUpayyBWSpo-frjHiGRWnJH5-fbl1u8DFssqWvPEt8exo2GjyAV15LNlOYN56damsxVKljvCIGx4WRxVwGWF0mUTRG0YNg_Hb-ninqD5PMSY=) *(vertexaisearch.cloud.google.com)*
  > Import attributes - JavaScript | MDN Skip to main content Skip to search Toggle sidebar Web JavaScript Reference Statements and declarations import Import attributes Theme OS default Light Dark English (US) Remember language Learn more Deutsch Englis...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEwjsMtGi8AHm3_bfjTMaGpa4QA4vlUkZqMJskUXEmekZ9QxacdAZdBFMABGcgA0Fgifh6XzU4Ttl_voO9cEIAv3heQiLaVwuMwv_kZYm9GA9zdUKIelRE3mxC2wPK5E6UjJR0vKI0nH_tOSykMsflSnW7LzAbPYs8ELltaonEnOyq-RAKOzRduBZeHmbLxmQ==) *(vertexaisearch.cloud.google.com)*
  > import source - JavaScript | MDN Skip to main content Skip to search Toggle sidebar Web JavaScript Reference Statements and declarations import import source Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) i...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHmHcqcMTsz_dY1DBIZIryoC6f84-mPDdNZvyWRHx8pFg9dU1em5NEwURC9TZKE0xonP2B1GRHL4ozaUdTH-lRakWUlYHrF72X-rSpIPgfCEYLlFqMGsjhtYG43KYocveGoGsCh7OltIiFuhIc4NaKNydRbjI4ICKRQAWylSAyJCnH8UivVn_xr) *(vertexaisearch.cloud.google.com)*
  > ### Summary of "Import Text (Text Modules)"  The **Import Text** TC39 proposal extends JavaScript's standard **Import Attributes** syntax (`with { type: "..." }`) to allow importing arbitrary files directly as plain string values:  ```javascript // S
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHIwzcfAJBW36xVuZ64IVZyAIJBYRkqmZxhhxsSe4Wm-D7snpomZAtg7fELzLTO1ieBSY9MegXjqrluIKoNF6i2cY2-c5abnA8Pp05zCwtn-bZVcFBWUhxPI02zbO0VHPoGGOEQFgc=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of "Import Text (Text Modules)"  The **Import Text** TC39 proposal extends JavaScript's standard **Import Attributes** syntax (`with { type: "..." }`) to allow importing arbitrary files directly as plain string values:  ```javascript // S
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFLOfUOmshWwmVOTBC9X_hEMHMq0zG3xJNqh5FDFMe6IbmAVKTmyHKwx_30bynaBysRPvZ5XxkZKuwDYi1n2vj2SU89xTi_zRaPVPEHsmzlF9q_kaJgppKnakNYi7Iqx3bEL3hNpA0=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of "Import Text (Text Modules)"  The **Import Text** TC39 proposal extends JavaScript's standard **Import Attributes** syntax (`with { type: "..." }`) to allow importing arbitrary files directly as plain string values:  ```javascript // S
- [rspack.rs](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE9PwV_RBsbiK6oMEZG3Den2FJZjdtLBZ7MUaBq8ZDlEtcuVhhzabLleuX6TKt9s00azv_4oBFESh7r7LRsuz2wRMEqtjtBXcsqG2Q83WSx21mL2Mkayjk4ZOk=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of "Import Text (Text Modules)"  The **Import Text** TC39 proposal extends JavaScript's standard **Import Attributes** syntax (`with { type: "..." }`) to allow importing arbitrary files directly as plain string values:  ```javascript // S
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFaSztrFZ_HR7F1kwC30JmaQdDw9W3NlOyiQru2vcuyxaIedlpmtStC9nOOsAhvOmjWXiah99I6dv3nxnAjvqbUanvUa0orZTOkXZmTaKDJtep8cybW9FxWVO7N8OuoBf8y) *(vertexaisearch.cloud.google.com)*
  > ### Summary of "Import Text (Text Modules)"  The **Import Text** TC39 proposal extends JavaScript's standard **Import Attributes** syntax (`with { type: "..." }`) to allow importing arbitrary files directly as plain string values:  ```javascript // S
- [Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17403.html) *(mail-archive.com)*
  > /No information provided/ *Link to entry on the Chrome Platform Status* https://<strong>chromestatus.com/feature/5191512456560640</strong>?gate=6058378127343616 This intent message was generated by Chrome Platform Status &lt;https://chromestatus.com/...
- [\[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17364.html) *(mail-archive.com)*
  > *Specification* https://tc39.es/proposal-import-text *Summary* <strong>A TC39 proposal to add module `import … with { type: &quot;text&quot; }` statements to JavaScript</strong>. The import attribute loads text data as a string value.
- [Import text file as a module in Python - Stack Overflow](https://stackoverflow.com/questions/54181298/import-text-file-as-a-module-in-python) *(stackoverflow.com)*
  > def import_module(filename): with open(filename, &#x27;r&#x27;) as file: file_contents = file.read() module_object = exec(file_contents) return module_object
- [Python import: Advanced Techniques and Tips – Real Python](https://realpython.com/python-import) *(realpython.com · 2020-07-08T14:00:00)*
  > Convenient functions for reading text or binary files directly are also available as read_text() and read_binary(). See the official documentation for more information. Note: To seamlessly fall back to using the backport on older Python versions, you...
- [How to Import Modules and Libraries in Python: A Beginner’s Guide to Enhancing Your Coding Skills \| by Gourav verma \| Medium](https://medium.com/@gouravverma2907/how-to-import-modules-and-libraries-in-python-a-beginners-guide-to-enhancing-your-coding-skills-7e3b6a5e2ddb) *(medium.com · 2024-10-20T12:41:22)*
  > Use aliases for long module names to improve readability. Keep your imports organized (standard libraries first, then third-party libraries). Python · Web Development · Web3 · Libraries · Data Science · 0 followers · ·10 following · Help · Status · A...
- [Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17420.html) *(mail-archive.com)*
  > &gt; &gt; *Blink component* &gt; Blink&gt;JavaScript&gt;Language &gt; &lt;https://issues.chromium.org/issues?q=customfield1222907:&quot;Blink&gt;JavaScript&gt;Language&quot;&gt; &gt; &gt; *Web Feature ID* &gt; text-modules &lt;https://webstatus.dev/f...
- [Import text files as strings in JavaScript — intternet.dev](https://intternet.dev/import-javascript-as-a-string) *(intternet.dev)*
  > <strong>const { default: template } = await import(&#x27;./template.html&#x27;, { with: { type: &#x27;text&#x27; }, })</strong> There is one compatibility caveat: import attributes are standard JavaScript, but the &quot;text&quot; type is still a Sta...
- [Understanding “import type” in TypeScript \| by Vardan Hakobyan \| JavaScript in Plain English](https://javascript.plainenglish.io/understanding-import-type-in-typescript-bf8d689ef1a0) *(javascript.plainenglish.io · 2024-10-17T02:49:22)*
  > The import type feature, which was introduced in TypeScript 3.8 (released in February 2020), <strong>allows developers to import only types from another module, distinguishing type imports from regular code imports</strong>.
- [Explain the "import type" statement in TypeScript? - GeeksforGeeks](https://www.geeksforgeeks.org/typescript/explain-the-import-type-statement-in-typescript) *(geeksforgeeks.org · 2025-07-23T17:32:28)*
  > &lt;!-- index.html --&gt; &lt;!DOCTYPE html&gt; &lt;html lang=&quot;en&quot;&gt; &lt;head&gt; &lt;meta charset=&quot;UTF-8&quot;&gt; &lt;title&gt;TypeScript Example&lt;/title&gt; &lt;script src= &quot;https://unpkg.com/typescript@5.8.3/lib/lib.dom.d....
- [Import a text file in Deno - Stack Overflow](https://stackoverflow.com/questions/77686988/import-a-text-file-in-deno) *(stackoverflow.com)*
  > Some bundlers (e.g. esbuild, rollup, webpack) support the concept of loaders/plugins, which can override the behavior of import statements in source code. Node.js offers a similar feature: module customization hooks. On this topic: there is a GitHub ...
- [7.20.0 Released: Deno target and TypeScript 4.9 · Babel](https://babeljs.io/blog/2022/10/27/7.20.0) *(babeljs.io · 2022-10-27T00:00:00)*
  > This release includes support for ... Stage 2 proposals. Additionally, you can now use Deno as one of your compilation targets. In the past few releases we have made gradual improvements @babel/generator&#x27;s code location tracking, which lead to h...
- [Upgrade to Babel 8 · Babel](https://babeljs.io/docs/v8-migration) *(babeljs.io)*
  > <strong>The syntax is the same, but you will need to rewrite your decorator functions</strong>. The spec repo provides comparison between the latest version and the 2018-09 version. You can already migrate since Babel 7.22.0, using the &quot;version&...
- [Node.js Just Added Native Text File Imports \| by Divyanshu Yadav \| Jul, 2026 \| Medium](https://medium.com/@divyanshu.1810/node-js-just-added-native-text-file-imports-8f6120676665) *(medium.com · 2026-07-12T14:56:21)*
  > The feature tracks a Stage 3 TC39 ... Deno and Bun got there first: <strong>Bun has shipped unflagged text imports since April 2024, Deno added them behind --unstable-raw-imports in June 2025</strong>....
- [How to use function-like import proposal feature in Babel?](https://stackoverflow.com/questions/41087285/how-to-use-function-like-import-proposal-feature-in-babel) *(stackoverflow.com)*
  > For Webpack 2.x, <strong>import() support is included in Webpack</strong>, so you&#x27;d want to use babel-plugin-syntax-dynamic-import so Babel will parse and pass through the syntax unchanged to Webpack.
- [A Proposal for Type Syntax in JavaScript \| Hacker News](https://news.ycombinator.com/item?id=30618681) *(news.ycombinator.com · 2022-03-11T08:48:36)*
  > Google&#x27;s V8 team (the team that owns Google Chrome&#x27;s JS engine implementation) floated a proposal back in 2015 to implement a new JS mode that they called &quot;Strong Mode.&quot; · https://docs.google.com/document/d/1Qk0qC4s_XNCLemj42FqfsR...
- [TC39 Proposal: Type Annotations \| Hacker News](https://news.ycombinator.com/item?id=31672754) *(news.ycombinator.com · 2022-06-13T01:49:52)*
  > Maybe it means that I don’t have to preprocess / compile TypeScript before running it. This is a genuine win for me. The TypeScript compiler can continue doing what it does best—type checking—and then I can just run the code. Running the TypeScript c...
- [No the proposal is \_not\_ to include Typescript type checking in the browser. The... \| Hacker News](https://news.ycombinator.com/item?id=39814645) *(news.ycombinator.com · 2024-03-26T12:43:19)*
  > So the types will actually be able to be anything. It can be a completely different type checking superset language than Typescript even! Nothing will be locked at the current level · It&#x27;s a frikkin magical proposal
- [ECMAScript Proposal: Types as Comments \| Hacker News](https://news.ycombinator.com/item?id=30653574) *(news.ycombinator.com · 2022-03-17T16:40:25)*
  > Is there some other advantage? Easier debugging on the client, I guess, but proper source maps do that pretty well already. I dunno, this just seems to be making a complex language more complex for not much gain · That said, if the runtime actually u...
- [HTML6 Concept \| Hacker News](https://news.ycombinator.com/item?id=8687711) *(news.ycombinator.com · 2014-12-04T15:25:09)*
  > Funnily enough, at a first glance it looked like a real proposal, then I looked again and it appeared as a joke (I mean ... &lt;html:html&gt; and &lt;form:form&gt; are a bit satirical), and then I looked the repo and there&#x27;s enough issues to thi...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)* *(Cites: `https://chromestatus.com/feature/5191512456560640`)*
  > import text modules, https://<strong>chromestatus.com/feature/5191512456560640</strong>
- [Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17403.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5191512456560640`)*
  > /No information provided/ *Link to entry on the Chrome Platform Status* https://<strong>chromestatus.com/feature/5191512456560640</strong>?gate=6058378127343616 This intent message was generated by Chrome Platform Status &lt;https://chromes...
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-03-23 (public-html@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-html/2026Mar/0003.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/11933`)*
  > y keithamus) https://github.co... - #11965 Move the allow declarative shadow roots flag to the parser (1 by foolip) https://github.com/whatwg/html/pull/11965 - #11933 <strong>Add text imports</strong> (3 by annevk, eemeli) https://github.co...

## 📚 Platform Documentation & Specifications

- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-03-23 (public-html@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-html/2026Mar/0003.html) *(lists.w3.org)*
- [Import attributes - JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import/with) *(developer.mozilla.org)*
- [import() - JavaScript - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) *(developer.mozilla.org)*
- [import(data:text/javascript,) throw SyntaxError · Issue #42504 · nodejs/node](https://github.com/nodejs/node/issues/42504) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 55 result(s) found across 14 planned queries — **24 verified relevant**
  - `"chromestatus.com/feature/5191512456560640" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/tc39/proposal-import-text" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"github.com/whatwg/html/pull/11933" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"github.com/w3c/webappsec-csp/pull/794" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"tc39.es/proposal-import-text" -site:tc39.es` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"Import Text (Text Modules)" API` — *Core feature API query* (2 returned)
  - `"Import Text (Text Modules)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"(text" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Import Text (Text Modules)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Import Text (Text Modules)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
  - `"with { type: 'text' }" OR "proposal-import-text" javascript (tutorial OR guide OR explain)` — *Finds developer guides and explainer articles introducing the text module import attributes.* (0 returned)
  - `"import" AND "with { type: 'text' }" OR "import(" "with: { type: 'text' }" javascript code snippet` — *Locates practical syntax examples and code snippets for static and dynamic text imports in JavaScript.* (8 returned)
  - `"proposal-import-text" OR "import text" (Node.js OR Deno OR Bun OR Vite OR Babel OR Webpack) support` — *Tracks runtime and bundler implementation, adoption status, and tooling updates across the JS ecosystem.* (8 returned)
  - `site:news.ycombinator.com OR site:reddit.com/r/javascript "proposal-import-text" OR "with { type: 'text' }"` — *Surfaces community feedback, discussions, and developer sentiment surrounding the TC39 Text Modules proposal.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 8 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 2073 item(s) inspected

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
