# Deferred imports evaluation ("import defer")

> **Report Week:** 2026-W40 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

\`import defer\` allows lazily evaluating ES modules, to reduce the startup impact of modules that are not actually needed for the first JavaScript execution.  This provides an easier-to-use alternative to dynamic import. While dynamic import provides more benefits, as it allows deferring loading of modules rather than just evaluation, it has a lot of friction due to its asynchronous nature, and thus it's not always usable.  \`import defer\` follows the same syntax as regular imports, but it only works with namespace and dynamic imports: \`\`\` import defer \* as namespace from "./some-module.js"  const namespace2 = await import.defer("./some-module.js"); \`\`\` The module will be synchronously executed on property access on the module namespace object.  To allow synchronous execution, not all of \`./some-module.js\`'s dependency tree will be deferred. Modules that contain top-level await will be eagerly executed, leaving only the synchronous parts of the tree for later.

## Ecosystem Status

- **Momentum:** High (377 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** Deferred imports evaluation (\`import defer\` and \`import.defer()\`) is a TC39 Stage 3 proposal designed to optimize startup performance by fetching and linking ES modules eagerly while deferring synchronous execution until property access. Enabled by default in Chrome 156, the feature solves the ergonomics and viral async overhead of dynamic \`import()\` for pre-loaded or bundled scripts. Cross-engine consensus is strong, with WebKit and Gecko actively finalizing their implementations.

### Recommendations
- Actionable Advice: Adopt \`import defer\` today in build-tooling pipelines (such as TypeScript 5.9+, Babel, Webpack, or Rspack) to streamline lazy-loading architecture and boost cold starts, but avoid deploying unbundled native browser syntax to production until WebKit and Gecko reach stable release parity.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "ECMAScript – Introducing Deferred Module Evaluation with Import Defer" (2 points, 1 comments).

## Community Discussions & Social Pulse

- 💬 **Hacker News:** [ECMAScript – Introducing Deferred Module Evaluation with Import Defer](https://news.ycombinator.com/item?id=49034415) — *2 pts, 1 comments*
- 💬 **Hacker News:** [ECMAScript – Introducing Deferred Module Evaluation with Import Defer](https://news.ycombinator.com/item?id=49121328) — *1 pts, 0 comments*

## Packages & Polyfills

- [acorn-import-phases](https://www.npmjs.com/package/acorn-import-phases) `v1.0.4` — Support for `import <defer|source>` phase syntax in Acorn

## 📰 Ecosystem Blogs & Articles

- [ECMAScript – Introducing Deferred Module Evaluation with Import Defer](https://nitayneeman.com/blog/introducing-import-defer-in-ecmascript) *(nitayneeman.com · 2026-07-24T12:09:05Z)*
  > ECMAScript - Introducing Deferred Module Evaluation with import defer | Nitay Neeman&#39;s Website Skip to main content Nitay Neeman Published on July 24, 2026 8 min read ECMAScript - Introducing Deferred Module Evaluation with import defer Follow me...
- [nitayneeman.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFDwuhMxfon0mL1Q9a7lc2ldXDtaUPS33aBe3yzqoQYHzewDzOO3GEGH0QjWztemZNJ1e4Gma9KJGXORbwwN4SDLYGKHjTJtfwKDtdHSPhIAH7-EH7V2fL6iLAAP9EmKPCbTpHS_FGTK9cDvQ7n7SqkPOrsOeCLPw4=) *(vertexaisearch.cloud.google.com)*
  > ECMAScript - Introducing Deferred Module Evaluation with import defer | Nitay Neeman&#39;s Website Skip to main content Nitay Neeman Published on July 24, 2026 8 min read ECMAScript - Introducing Deferred Module Evaluation with import defer Follow me...
- [codercops.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFGcdzGGiasJa3EevsFti-rau0QKDHvMytNZ4i7_KelB03XXnk4q_I5rPrlYI8G7Gm9wnlKXtfjRVoi4Q8ev9iNWBuh29CpMCnZ1QXavspHBeXkx1eMAQNFQ4eap5MLiT5SGOP0sj2tf2mHGsZmBZT9nutbSqpG) *(vertexaisearch.cloud.google.com)*
  > JavaScript&#39;s import defer: What It Actually Fixes — CODERCOPS Skip to content Journal Web Development September 25, 2026 Web Development · JavaScript JavaScript&#39;s import defer: What It Actually Fixes TC39&#39;s Stage 3 import defer proposal l...
- [tc39.es](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFVM00kA_jyTVQ2L0cXbLM1VUMmTK01x2MbcBXIeOUf5bubRPJM-O889HgGWz8I_DMGc3HC7okuwPl0Ihj9lVMM5-gXmvM=) *(vertexaisearch.cloud.google.com)*
  > TC39 - Specifying JavaScript. Skip to content Specifying JavaScript. TC39 Ecma International's TC39 is a group of JavaScript developers, implementers, academics, and more, collaborating with the community to maintain and evolve the definition of Java...
- [nexgismo.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH1ywaojqT-RLibGqmVkDPigAZ_ccK-WAmqro-awX34k7FO2_SEI3_ARwRbYIo0_ENVXOBl82erwh0-apvA_0X3qzrispzY5sk-iiPyfNDcd_I9rJnCV2kJfaB4y1LdgA34-7wtTRnGn9Ga0Ry-nBJOO_QYaYBwpjiwHK_6BN5ZjQnhevcivVaM95OB) *(vertexaisearch.cloud.google.com)*
  > TypeScript 5.9 import defer: Sync Lazy Loading Without the Async Mess Skip to content No results Search Menu TypeScript 5.9 import defer: Sync Lazy Loading Without the Async Mess TypeScript 5.9 import defer gives you lazy module loading without async...
- [medium.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHeaeLPozVso2eAzEGFKcTfk62-oFsCmoRtnlqhc4xPlWDS0Vkq_nYy-hd7i8xh0qJsTHTnnenJ1aGlNFgGoc4DFVpSAsfzsGExow7Mljxo8CMqGut_z8xhQYtospvjarrBHVIC57ZOis3mYheZ2mNiEkNItwXtzwEhZqyhD3eZiBEGmUlN9irNfXPvgFoatFwap7AhNe86Co19-1rNE7hkoiVbpGQA2Y06fCNCnqKqwk1KhLWcPh3We3cy6MEG) *(vertexaisearch.cloud.google.com)*
  > Medium TypeScript import defer for Backend Services: Faster Cold Starts, Fewer Side-Effects, Cleaner Runtime Boundaries | by Bytecraft | Medium Sitemap Open in app Sign up Sign in Get app Write Search Sign up Sign in Bytecraft I write about Python, D...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE9YTDiZC8GmOSNRr8t3B0tIdBgDtIMuZR4YxSkrFnAkoluF_nh2O9syYjkCfwMso--IhH0ZWx4g50koG2qX71gc2rRE8u4mxpC1f-ehvoniqo9w2xYqD037CIj-Ox8Li7wtqpwXbArmZOgLpiLYCyQWRn9Rt-iyq8Zz28C8FLUq_88Xvl7s5-pT22QF4Y=) *(vertexaisearch.cloud.google.com)*
  > import.defer() - JavaScript | MDN Skip to main content Skip to search Toggle sidebar Web JavaScript Reference Expressions and operators import() import.defer() Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US)...
- [typescriptlang.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEH9uSr8StnIssdnU3d29rojwWWgLn1_zAqMXWAR_KPQCE1jmmQRVmwOtgB5Ocal2jzUw4kncuPWFMwzNat-XjlCabfx9QH6Q_b3B29-hmNoMXQ4iAO0kkVfRmiC8O7o1D7Qy8tQA_vU63sAv0P207MBYXaNhR1FF05YW9q4yrEZGQQmw==) *(vertexaisearch.cloud.google.com)*
  > TypeScript: Documentation - TypeScript 5.9 Skip to main content TypeScript in En Was this page helpful? TypeScript 5.9 Minimal and Updated tsc --init For a while, the TypeScript compiler has supported an --init flag that can create a tsconfig.json wi...
- [tc39.es](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHZbymP7E--uNWEVXjXriOCewOyaFAuHiMnF45wvboB1AHv4warh6OP8Sx-OJUlHjsQbPTY1m_i2IJfh4VZwHiDQAO51j10gcMoQQXmAfghpcS7WhHbVAsYJNAi8xK7Noo=) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary: What is `import defer`?  **Deferred Imports Evaluation (`import defer`)** is a TC39 Stage 3 ECMAScript proposal that addresses a longstanding performance challenge in JavaScript: the execution cost of loading large module graph
- [nitayneeman.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGQdKt7zKACx4WzoMz3YMOMXFaepU6g8hOONpBsc3kGdnaIKaDa8sKNRj9HgwkGR7Zhk9qnzaJqWQ-No6-tQkYxqvLrC1iP7LpZCyGYRs9wyu05kWDUt3CWAm1xMr6MqC61TjRgyDdjEik4q2XbQFWh2VtaGWntCIf4) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary: What is `import defer`?  **Deferred Imports Evaluation (`import defer`)** is a TC39 Stage 3 ECMAScript proposal that addresses a longstanding performance challenge in JavaScript: the execution cost of loading large module graph
- [babeljs.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFMTvoxFLdddvIWM7P5PETsMR3v9V157N4i-HUMQ6NL9HnnJ1SaLaGoP1p7pEalqVbumAu0KRkxbUHqlHv4S0sW09RSFwGzJVXBvtiz-nN1O66zMCJNm_T97xzwIfARlLQHyULQyIujar5S9UQrMUo=) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary: What is `import defer`?  **Deferred Imports Evaluation (`import defer`)** is a TC39 Stage 3 ECMAScript proposal that addresses a longstanding performance challenge in JavaScript: the execution cost of loading large module graph
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHw6X3zWS_mHaFBvaNWIxYVw74vGC-xyqKBtOhf_ST-gyF3kB2joM8-CtwCpmKqn9xOWu_sF9TqvTQxV5k7veLU8a0Uh-ySO8Vf-qgMBHtCrr9y1bECykzSdHzwJ3A10y1yuZHGzfiGjE31hMc0vp4tcg==) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary: What is `import defer`?  **Deferred Imports Evaluation (`import defer`)** is a TC39 Stage 3 ECMAScript proposal that addresses a longstanding performance challenge in JavaScript: the execution cost of loading large module graph
- [tc39/proposal-defer-import-eval: A proposal for introducing a way to defer evaluate of a module \| ECMAScript Daily](https://ecmascript-daily.github.io/2023/05/27/tc39-proposal-defer-import-eval-a-proposal-for-introducing-a-way-to-defer-evaluate-of-a-module) *(ecmascript-daily.github.io · 2023-05-27T23:55:06)*
  > https://github.com/tc39/proposal-defer-import-eval · <strong>Deferring Module Evaluation proposal</strong> · Tweet · ECMAScript 389 · proposal 177 · « Previous · Archive · Next » · blog comments powered by Disqus ·
- [\[blink-dev\] Re: Intent to Ship: Deferred imports evaluation ("import defer")](http://www.mail-archive.com/blink-dev@chromium.org/msg17460.html) *(mail-archive.com)*
  > &gt; &gt; -- Dan &gt; On Monday, September ...er-import-eval &gt;&gt; &gt;&gt; Summary &gt;&gt; `import defer` <strong>allows lazily evaluating ES modules, to reduce the startup &gt;&gt; impact of modules that are not actually needed for the first Ja...
- [Re: \[blink-dev\] Re: Intent to Ship: Deferred imports evaluation ("import defer")](http://www.mail-archive.com/blink-dev@chromium.org/msg17461.html) *(mail-archive.com)*
  > -- Dan On Monday, September 14, ...oposal-defer-import-eval *Summary* `import defer` <strong>allows lazily evaluating ES modules, to reduce the startup impact of modules that are not actually needed for the first JavaScript execution</strong>....
- [Re: \[blink-dev\] Intent to Ship: Deferred imports evaluation ("import defer")](http://www.mail-archive.com/blink-dev@chromium.org/msg17471.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; &gt;&gt;&gt; -- Dan &gt;&gt;&gt; On Monday, ... &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; *Summary* &gt;&gt;&gt;&gt; `import defer` <strong>allows lazily evaluating ES modules, to reduce the &gt;&gt;&gt;&gt; startup impact of module...
- [r/typescript on Reddit: Announcing TypeScript 5.9](https://www.reddit.com/r/typescript/comments/1mf0vkq/announcing_typescript_59) *(reddit.com · 2025-08-01T16:20:05)*
  > https://<strong>github.com/tc39/proposal-defer-import-eval</strong>/issues/73
- [\[blink-dev\] Intent to Ship: Deferred imports evaluation ("import defer")](http://www.mail-archive.com/blink-dev@chromium.org/msg17443.html) *(mail-archive.com)*
  > Explainer https://github.com/tc39/proposal-defer-import-eval Specification https://tc39.es/proposal-defer-import-eval Summary `import defer` <strong>allows lazily evaluating ES modules, to reduce the startup impact of modules that are not actually ne...
- [113th Meeting of TC39 - HackMD](https://hackmd.io/@tc39-chairs/Sk6AqpkUWe) *(hackmd.io)*
  > Committee](https://tc39.es/code-of-conduct/#code-of-conduct-committee) (1m) - ❄️ [import defer](<strong>https://github.com/tc39/proposal-defer-import-eval/)</strong> interaction with [tc39/ecma262#3715](https://github.com/tc39/ecma262/pull/3715), and...
- [r/typescript on Reddit: Announcing TypeScript 5.9 Beta](https://www.reddit.com/r/typescript/comments/1luuzfu/announcing_typescript_59_beta) *(reddit.com · 2025-07-08T17:39:14)*
  > https://<strong>github.com/tc39/proposal-defer-import-eval</strong>/issues/59
- [\[blink-dev\] Re: Intent to Ship: Deferred imports evaluation ("import defer")](http://www.mail-archive.com/blink-dev@chromium.org/msg17450.html) *(mail-archive.com)*
  > The `import defer` &gt; TC39 proposal follows the same syntax as `import source`, but it only works &gt; with namespace imports: ``` import defer * as namespace from &gt; &quot;./some-module.js&quot; ``` The module will be synchronously executed on &...
- [TypeScript 5.9 import defer: Sync Lazy Loading Without the Async Mess](https://www.nexgismo.com/blog/typescript-5-9-import-defer-sync-lazy-loading-guide-2026) *(nexgismo.com · 2026-06-09T00:00:00)*
  > JavaScript developers have had two lazy-loading tools for years: split your bundle with dynamic import(), or just accept that everything runs at startup. TypeScript 5.9’s import defer fills the gap between them. It’s the first genuinely new import pr...
- [TypeScript 5.9 import defer explained: what problem does it solve? \| GetHired.dev](https://gethired.dev/blog/typescript-59-import-defer-explained) *(gethired.dev · 2026-07-04T00:00:00)*
  > A simple explanation of TypeScript ... 5.9 introduced support for import defer, <strong>a newer JavaScript proposal that lets a module be loaded without immediately running it</strong>....
- [Typescript 5.9 \`import defer\` code optimization; imports optimization; import defer is removed : WEB-75111](https://youtrack.jetbrains.com/projects/WEB/issues/WEB-75111/Typescript-5.9-import-defer-code-optimization-imports-optimization-import-defer-is-removed) *(youtrack.jetbrains.com)*
  > <strong>import { Global } from &#x27;./non-deferred&#x27;; import defer * as MyDefModule from &#x27;./defered&#x27;; export function init () { Global.myGlobalVariable = 12; MyDefModule.execute(); }</strong>
- [Deferred Imports (import defer) - TypeScript in Production \| Stanza](https://www.stanza.dev/courses/typescript-production/modules-resolution/typescript-production-import-defer) *(stanza.dev)*
  > Using named imports — import defer { calc } from &quot;...&quot; is not valid syntax. You must use <strong>import defer * as lib from &quot;...&quot;</strong>.
- [TypeScript 5.9: import defer and What Actually Changed \| byteiota](https://byteiota.com/typescript-59-import-defer-lazy-imports) *(byteiota.com · 2026-06-07T06:00:04)*
  > // ERROR: named import not allowed with import defer <strong>import defer { buildPDF } from &#x27;./reporting-tools&#x27;;</strong> // ERROR: default import not allowed import defer reportingTools from &#x27;./reporting-tools&#x27;; // CORRECT: names...
- [ES Module の import defer - yaakai.to](https://yaakai.to/note/91) *(yaakai.to · 2025-08-22T00:00:00)*
  > 従来 import や require と同時に大きな副作用なあるようなモジュールを読み込む際、それを実際に使用するまで読み込みを遅延するようなテクニックがあった。例えば、 require を使った次のようなコードである（ Proposal からの引用）: // https://github.com/tc39/proposal-defer-import-eval/?tab=readme-ov-file#motivation exports.doSomething = function (targ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [import defer · Issue #3947 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/3947) *(github.com · 2026-04-13T15:50:15)* *(Cites: `https://chromestatus.com/feature/5071131271888896`)*
  > https://<strong>chromestatus.com/feature/5071131271888896</strong> · https://chromestatus.com/feature/6090846000775168 · Reactions are currently unavailable · No one assigned ·
- [tc39/proposal-defer-import-eval: A proposal for introducing a way to defer evaluate of a module \| ECMAScript Daily](https://ecmascript-daily.github.io/2023/05/27/tc39-proposal-defer-import-eval-a-proposal-for-introducing-a-way-to-defer-evaluate-of-a-module) *(ecmascript-daily.github.io · 2023-05-27T23:55:06)* *(Cites: `https://github.com/tc39/proposal-defer-import-eval`)*
  > https://github.com/tc39/proposal-defer-import-eval · <strong>Deferring Module Evaluation proposal</strong> · Tweet · ECMAScript 389 · proposal 177 · « Previous · Archive · Next » · blog comments powered by Disqus ·
- [\[blink-dev\] Re: Intent to Ship: Deferred imports evaluation ("import defer")](http://www.mail-archive.com/blink-dev@chromium.org/msg17460.html) *(mail-archive.com)* *(Cites: `https://github.com/tc39/proposal-defer-import-eval`)*
  > &gt; &gt; -- Dan &gt; On Monday, September ...er-import-eval &gt;&gt; &gt;&gt; Summary &gt;&gt; `import defer` <strong>allows lazily evaluating ES modules, to reduce the startup &gt;&gt; impact of modules that are not actually needed for th...
- [Re: \[blink-dev\] Re: Intent to Ship: Deferred imports evaluation ("import defer")](http://www.mail-archive.com/blink-dev@chromium.org/msg17461.html) *(mail-archive.com)* *(Cites: `https://github.com/tc39/proposal-defer-import-eval`)*
  > -- Dan On Monday, September 14, ...oposal-defer-import-eval *Summary* `import defer` <strong>allows lazily evaluating ES modules, to reduce the startup impact of modules that are not actually needed for the first JavaScript execution</stron...
- [Re: \[blink-dev\] Intent to Ship: Deferred imports evaluation ("import defer")](http://www.mail-archive.com/blink-dev@chromium.org/msg17471.html) *(mail-archive.com)* *(Cites: `https://github.com/tc39/proposal-defer-import-eval`)*
  > &gt;&gt;&gt; &gt;&gt;&gt; &gt;&gt;&gt; -- Dan &gt;&gt;&gt; On Monday, ... &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; *Summary* &gt;&gt;&gt;&gt; `import defer` <strong>allows lazily evaluating ES modules, to reduce the &gt;&gt;&gt;&gt; startup impact...
- [r/typescript on Reddit: Announcing TypeScript 5.9](https://www.reddit.com/r/typescript/comments/1mf0vkq/announcing_typescript_59) *(reddit.com · 2025-08-01T16:20:05)* *(Cites: `https://github.com/tc39/proposal-defer-import-eval`)*
  > https://<strong>github.com/tc39/proposal-defer-import-eval</strong>/issues/73
- [\[blink-dev\] Intent to Ship: Deferred imports evaluation ("import defer")](http://www.mail-archive.com/blink-dev@chromium.org/msg17443.html) *(mail-archive.com)* *(Cites: `https://github.com/tc39/proposal-defer-import-eval`)*
  > Explainer https://github.com/tc39/proposal-defer-import-eval Specification https://tc39.es/proposal-defer-import-eval Summary `import defer` <strong>allows lazily evaluating ES modules, to reduce the startup impact of modules that are not a...
- [113th Meeting of TC39 - HackMD](https://hackmd.io/@tc39-chairs/Sk6AqpkUWe) *(hackmd.io)* *(Cites: `https://github.com/tc39/proposal-defer-import-eval`)*
  > Committee](https://tc39.es/code-of-conduct/#code-of-conduct-committee) (1m) - ❄️ [import defer](<strong>https://github.com/tc39/proposal-defer-import-eval/)</strong> interaction with [tc39/ecma262#3715](https://github.com/tc39/ecma262/pull/...
- [r/typescript on Reddit: Announcing TypeScript 5.9 Beta](https://www.reddit.com/r/typescript/comments/1luuzfu/announcing_typescript_59_beta) *(reddit.com · 2025-07-08T17:39:14)* *(Cites: `https://github.com/tc39/proposal-defer-import-eval`)*
  > https://<strong>github.com/tc39/proposal-defer-import-eval</strong>/issues/59
- [Obtaining deferred namespace imports · Issue #119 · WebAssembly/esm-integration](https://github.com/WebAssembly/esm-integration/issues/119) *(github.com · 2026-04-21T17:50:10)* *(Cites: `https://tc39.es/proposal-defer-import-eval`)*
  > <strong>The deferred evaluation proposal (https://github.com/tc39/proposal-defer-import-eval) is at Stage 3 in TC39 and starting to be implemented now</strong>. We naturally support this in the ESM integration for deferring WebAssembly eval...

## 📚 Platform Documentation & Specifications

- [import defer · Issue #3947 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/3947) *(github.com)*
- [Obtaining deferred namespace imports · Issue #119 · WebAssembly/esm-integration](https://github.com/WebAssembly/esm-integration/issues/119) *(github.com)*
- [import.defer() - JavaScript \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import/defer) *(developer.mozilla.org)*
- [\`import defer\` Stage 3 proposal support · Issue #59391 · microsoft/TypeScript](https://github.com/microsoft/TypeScript/issues/59391) *(github.com)*
- [Feature Request: \`import defer\` · Issue #4238 · evanw/esbuild](https://github.com/evanw/esbuild/issues/4238) *(github.com)*
- [\`import defer\` implementation tracker · Issue #73 · tc39/proposal-defer-import-eval](https://github.com/tc39/proposal-defer-import-eval/issues/73) *(github.com)*
- [\[experiment\] implement tc39 Defer Module Evaluation by Jack-Works · Pull Request #16567 · webpack/webpack](https://github.com/webpack/webpack/pull/16567) *(github.com)*
- [Add support for \`import defer\` proposal by nicolo-ribaudo · Pull Request #60757 · microsoft/TypeScript](https://github.com/microsoft/TypeScript/pull/60757) *(github.com)*
- [import defer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import/defer) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 32 result(s) found across 12 planned queries — **23 verified relevant**
  - `"chromestatus.com/feature/5071131271888896" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/tc39/proposal-defer-import-eval" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"tc39.es/proposal-defer-import-eval" -site:tc39.es` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"Deferred imports evaluation ("import defer")" API` — *Core feature API query* (3 returned)
  - `"Deferred imports evaluation ("import defer")" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (0 returned)
  - `"import defer * as namespace from "./some-module.js"

const namespace2 = await import.defer("./some-module.js");" OR "/some-module" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (0 returned)
  - `"Deferred imports evaluation ("import defer")" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (2 returned)
  - `"Deferred imports evaluation ("import defer")" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (0 returned)
  - `"import defer" javascript OR js lazy evaluation tutorial OR guide` — *Finds practical developer tutorials and articles explaining how and when to use import defer for lazy evaluation.* (8 returned)
  - `"import defer * as" OR "import.defer(" example syntax javascript` — *Targets code snippets and usage examples demonstrating the exact syntax for deferred module namespace imports.* (8 returned)
  - `"proposal-defer-import-eval" OR "import defer" (Babel OR TypeScript OR Webpack OR Vite OR Chrome) support` — *Surfaces implementation status, engine support announcements, and tooling roadmap across bundlers and transpilers.* (8 returned)
  - `"import defer" ("dynamic import" OR "lazy evaluation") (site:news.ycombinator.com OR site:reddit.com OR site:github.com)` — *Discovers community sentiment, performance trade-off debates, and real-world developer discussions on forums.* (1 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *found 2 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 2 result(s) found — **2 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **1 verified relevant**
- **Web Platform Tests (wpt.fyi):** 57 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5071131271888896)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5071131271888896)
- [Specification](https://tc39.es/proposal-defer-import-eval)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/398218423)
