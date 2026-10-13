# Renewed HTML insertion&streaming methods

> **Report Week:** 2026-W42 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

Expose multiple HTML setting methods that provide a coherent story for dynamically inserting markup into an existing document.  - Positional methods (before/after/append/prepend/replaceWith) that take HTML as argument, effectively replacing insertAdjacentHTML. - Streaming methods (stream{Append}HTML{Unsafe}) which return a WritableStream - Passing {runScripts} as part of SetHTMLUnsafeOptions, mimicking createContextualFragment behavior. - Supporting createParserOptions in trusted types, allowing trusted types to override scripting mode and sanitizer.

### Motivation

Updating HTML dynamically from script has multiple disjointed API, each with its own subtle differences. Developers can partially update an element using insertAdjacentHTML, use sanitizer with setHTML, execute scripts with createContextualFragment, stream with detached documents.   This can be confusing and frustrating to web developers, as well as create bugs or security issues if the differences are not well understood.  This change replaces those with a coherent set of methods and arguments, that use the same settings (sanitizer/runScripts) with different variants (where to insert the HTML, stream/one-shot, safe/unsafe) as well as the same support in trusted types.

## Ecosystem Status

- **Momentum:** High (footprint 370 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The renewed HTML insertion and streaming methods proposal—developed under the WICG Declarative Partial Updates initiative and WHATWG HTML discussions—unifies fragmented legacy DOM APIs into an ergonomic, modern suite of positional and streaming insertion methods like appendHTML and streamAppendHTML. While Chromium has committed to shipping the feature, multi-engine interoperability is still maturing as the specification progresses through standardisation bodies. Ecosystem perception is enthusiastic, particularly for how native WritableStream integration and consistent sanitizer controls simplify dynamic HTML updates without heavy framework runtimes.

### Recommendations
- Actionable Advice: Web teams should experiment with the API behind flags or via official polyfills from GoogleChromeLabs to test native HTML streaming pipelines. However, production architectures should rely on runtime feature detection and fallback to setHTMLUnsafe or insertAdjacentHTML until broad multi-engine support lands across Safari and Firefox.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @o-t-w: "This feature is due to ship in \[Chrome 154\](https://developer.chrome.com/blog/chrome-154-beta?hl=en#renewed\_html\_insertion\_and\_streaming\_methods). Moz..."
- Standards Activity (Mozilla): Latest discussion from @zcorpan: "Generally we want 7 days to pass. This has happened here. 🙂..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [HTML streaming & revamped DOM parsing](https://github.com/WebKit/standards-positions/issues/629) [open]
- **Mozilla:** [HTML streaming & revamped DOM parsing](https://github.com/mozilla/standards-positions/issues/1370) [closed]

## Web-features Group

*group-level data: web-features [`domparser`](https://webstatus.dev/features/domparser)*

- Share of tests passing in the web-features group `domparser` on [wpt.fyi](https://wpt.fyi/results?q=feature:domparser) (via webstatus.dev) — stable: Chrome 90% · Edge 85% · Firefox 95% · Safari 80%; experimental: Chrome 90% · Edge 90% · Firefox 95% · Safari 90%

## 📰 Ecosystem Blogs & Articles

- [daily.dev](https://daily.dev/posts/declarative-partial-updates-5buxplifg) *(daily.dev)*
  > The \*\*“Renewed HTML insertion & streaming methods”\*\* proposal (developed as a core JavaScript pillar of the broader \*\*Declarative Partial Updates\*\* initiative) modernizes how developers insert markup into live web pages marker&gt;\`), the programmatic ha...
- [Declarative partial updates \| Web Platform \| Chrome for Developers](https://developer.chrome.com/docs/web-platform/declarative-partial-updates) *(developer.chrome.com)*
  > Atualizações parciais declarativas \| Web Platform \| Chrome for Developers Ir para o conteúdo principal / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العرب...
- [freecodecamp.org](https://www.freecodecamp.org/news/how-declarative-partial-updates-work-in-html) *(freecodecamp.org)*
  > \*\*Positional HTML Methods (Replacing \`insertAdjacentHTML\`)\*\*: Instead of obscure position strings (\`'beforebegin'\`, \`'afterbegin'\`, \`'beforeend'\`, \`'afterend'\`), elements gain intuitive DOM-aligned methods \*\*Positional HTML Methods (Replacing \`insert...
- [css-tricks.com](https://css-tricks.com/comparing-methods-for-appending-and-inserting-with-javascript) *(css-tricks.com)*
  > \*\*Positional HTML Methods (Replacing \`insertAdjacentHTML\`)\*\*: Instead of obscure position strings (\`'beforebegin'\`, \`'afterbegin'\`, \`'beforeend'\`, \`'afterend'\`), elements gain intuitive DOM-aligned methods
- [substack.com](https://modernwebweekly.substack.com/p/out-of-order-streaming-html-is-coming) *(modernwebweekly.substack.com)*
  > \*\*Positional HTML Methods (Replacing \`insertAdjacentHTML\`)\*\*: Instead of obscure position strings (\`'beforebegin'\`, \`'afterbegin'\`, \`'beforeend'\`, \`'afterend'\`), elements gain intuitive DOM-aligned methods: \* \`appendHTML(html, options)\` / \`appendHTML...
- [Streaming HTML - Ollie Williams](https://olliewilliams.xyz/blog/streaming-html) *(olliewilliams.xyz)*
  > \*\*Native Streaming Methods Returning a \`WritableStream\`\*\*: Pairs each positional method with a streaming counterpart: \* \`streamHTML()\`, \`streamAppendHTML()\`, \`streamPrependHTML()\`, \`streamBeforeHTML()\`, \`streamAfterHTML()\`, and \`streamReplaceWithHTML...
- [chrome.com](https://developer.chrome.com/blog/declarative-partial-updates?hl=zh-cn) *(developer.chrome.com)*
  > marker&gt;\`), the programmatic half introduces the renewed HTML insertion and streaming APIs
- [chrome.com](https://developer.chrome.com/blog/declarative-partial-updates?hl=zh-tw) *(developer.chrome.com)*
  > Chrome highlights that the browser’s streaming HTML parser can now be leveraged by client-side single-page applications without forcing the client to buffer an entire payload into memory before calling \`innerHTML\`
- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > Release Notes & Platform Tracking \* \*\*Announcements:\*\* \*\*Chrome 154 / 155 Beta Notes\*\* and \*\*Microsoft Edge 155 Release Notes\*\* Origin testing started behind experimental flags (\`#enable-experimental-web-platform-features\`) in Chrome 148, formalizing...
- [chrome.com](https://developer.chrome.com/blog/declarative-partial-updates?hl=es-419) *(developer.chrome.com)*
  > Release Notes & Platform Tracking \* \*\*Announcements:\*\* \*\*Chrome 154 / 155 Beta Notes\*\* and \*\*Microsoft Edge 155 Release Notes\*\* \* \*\*Summary:\*\* Chromium-based browsers detailed testing milestones Origin testing started behind experimental flags (\`#ena...
- [reddit.com](https://www.reddit.com/r/htmx/comments/1tlvjwa/chrome_is_experimenting_with_declarative_partial) *(reddit.com)*
  > \* \*\*Server-Driven Web and HTMX Enthusiasts:\*\* The community around hypermedia-driven architecture (such as HTMX, Hotwire, and Astro) reacted very positively
- [wpt.live](https://wpt.live:8443/domparsing/tentative/stream-html-run-scripts-option.html) *(wpt.live)*
  > \* \*\*Standardization and Multi-Engine Landscape:\*\* Discussions on the WHATWG HTML and DOM repositories (issue #2142 and related explainers) show cross-engine interest, with Mozilla's Gecko team working on incremental steps such as \*"Sanitize While Par...
- [bsky.app](https://bsky.app/profile/tunetheweb.com/post/3mv3lfpd7a22s) *(bsky.app)*
  > \* \*\*Standardization and Multi-Engine Landscape:\*\* Discussions on the WHATWG HTML and DOM repositories (issue #2142 and related explainers) show cross-engine interest, with Mozilla's Gecko team working on incremental steps such as \*"Sanitize While Par...
- [\[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16159.html) *(mail-archive.com)*
  > \[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods Chromestatus Tue, 24 Mar 2026 04:52:00 -0700 Con...
- [\[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods Chromestatus Thu, 16 Jul 2026 08:40:50 -0700 Contact emails \[email&#160;pr...
- [Re: \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg17005.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods Noam Rosenthal Mon, 20 Jul 2026 12:28:01 -0700 On Mon, Jul...
- [Chrome for Developers \| daily.dev](https://daily.dev/posts/chrome-for-developers-l1rzewnk2) *(daily.dev · 2026-10-12T15:49:54)*
  > Web APIs add windowing controls (maximize/minimize/restore), post-quantum cryptography algorithms in WebCrypto (ML-KEM, ML-DSA, ChaCha20-Poly1305, X-Wing), Digital Credentials issuance support, JPEG XL decoding via a Rust decoder, iframe media pause ...
- [\[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg17004.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods 'Dan Clark' via blink-dev Mon, 20 Jul 2026 12:03:20 -0700 Thanks f...
- [Out-of-Order HTML Streaming Moves from JS Frameworks into the Browser - InfoQ](https://www.infoq.com/news/2026/09/native-deferred-html-streaming) *(infoq.com · 2026-09-21T23:57:00)*
  > To extend streaming workflows to client-side scripting, the initiative pairs these markup primitives with a unified suite of static and streaming DOM insertion methods. The specification defines a predictable matrix of operations: setHTML, replaceWit...
- [Declarative Partial Updates: Out-of-Order HTML Streaming Without a Framework - DEV Community](https://dev.to/grimicorn/declarative-partial-updates-out-of-order-html-streaming-without-a-framework-1086) *(dev.to · 2026-08-22T08:06:02)*
  > Because streamHTMLUnsafe() behaves like the main parser, it processes &lt;template for&gt; instructions as they land. So a client-side route change can be an outline page full of markers plus a stream of templates slotting into them, with no per-elem...
- [Streaming HTML Out of Order Without JavaScript (2026)](https://umesh-malik.com/blog/streaming-html-out-of-order-without-javascript) *(umesh-malik.com · 2026-07-13T18:30:00)*
  > There are Unsafe variants (streamHTMLUnsafe, streamAppendHTMLUnsafe) that skip sanitization, mirroring the setHTMLUnsafe naming already standardized with the HTML Sanitizer API.
- [Microsoft Edge 155 web platform release notes (Oct. 8, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/155) *(learn.microsoft.com · 2026-09-24T00:00:00)*
  > setHTML() and setHTMLUnsafe() beforeHTML() and beforeHTMLUnsafe() afterHTML() and afterHTMLUnsafe() appendHTML() and appendHTMLUnsafe() prependHTML() and prependHTMLUnsafe() replaceWithHTML() and replaceWithHTMLUnsafe() Streaming methods which return...
- [Intent to Prototype: Run scripts when setting HTML](https://groups.google.com/a/chromium.org/g/blink-dev/c/35pwApmgHQs) *(groups.google.com · 2025-12-17T00:00:00)*
  > Summary Optionally run scripts when setting HTML: element.&lt;strong&gt;setHTMLUnsafe(html, {runScripts: true})&lt;/strong&gt; This behavior is already exposed via createContextualFragment, however that API is not very ergonomic, has undocumented side effects, a...
- [innerHTML 以外の選択肢が増える ―― HTML挿入APIの再設計と、少しずつ届くHTMLの入れ方 – LIVECAST MAGAZINE](https://www.livecast.co.jp/magazine/html-insertion-api-streaming-trusted-types) *(livecast.co.jp)*
  > innerHTML 以外の選択肢が増える ―― HTML挿入APIの再設計と、少しずつ届くHTMLの入れ方 &#8211; LIVECAST MAGAZINE MAGAZINE HTML/CSS/JS実践 2026.10.01 innerHTML 以外の選択肢が増える ―― HTML挿入APIの再設計と、少しずつ届くHTMLの入れ方 目次 1. 【HTML/CSS/JS】innerHTML 以外の選択肢が増える ―― HTML挿入APIの再設計と、少しずつ届くHTMLの入れ方 2. LLMの応答...
- [Element API: streamAppendHTML \| Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/mdn-api_element_streamappendhtml) *(caniuse.com)*
  > Element API: streamAppendHTML \| Can I use... Support tables for HTML5, CSS3, etc Can I use Search ? Settings Element API: streamAppendHTML Global usage 0% + 0% = 0% IE ❌ 6 - 10 : Not supported ❌ 11 : Not supported Edge ❌ 12 - 147 : Not supported ❌ 14...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Move TrustedParserOptions to TrustedHTMLParserOptions by tunetheweb · Pull Request #30463 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30463) *(github.com)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > Move TrustedParserOptions to TrustedHTMLParserOptions by tunetheweb · Pull Request #30463 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed...
- [HTML enhanced setter and streaming methods · Issue #4117 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4117) *(github.com · 2026-06-17T18:03:04)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > HTML enhanced setter and streaming methods · Issue #4117 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or wind...
- [\[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16159.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md`)*
  > \[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods Chromestatus Tue, 24 Mar 2026 04:52:00...
- [\[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md`)*
  > \[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods Chromestatus Thu, 16 Jul 2026 08:40:50 -0700 Contact emails \[ema...

## 📚 Platform Documentation & Specifications

- [Move TrustedParserOptions to TrustedHTMLParserOptions by tunetheweb · Pull Request #30463 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30463) *(github.com)*
- [HTML enhanced setter and streaming methods · Issue #4117 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4117) *(github.com)*
- [Coherent story for HTML-setting methods · Issue #11669 · whatwg/html](https://github.com/whatwg/html/issues/11669) *(github.com)*
- [GitHub - GoogleChromeLabs/html-setters-polyfill · GitHub](https://github.com/GoogleChromeLabs/html-setters-polyfill) *(github.com)*
- [Patching and HTML Streaming methods · Issue #1471 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1471) *(github.com)*
- [declarative partial updates – 12 November 2025](https://www.w3.org/2025/11/12-decl-partial-updates-minutes.html) *(w3.org)*
- [HTML Standard, Edition for Web Developers](https://html.spec.whatwg.org/dev/dynamic-markup-insertion.html) *(html.spec.whatwg.org)*
- [Integrate fragment parser options with trusted types by noamr · Pull Request #12583 · whatwg/html](https://github.com/whatwg/html/pull/12583) *(github.com)*
- [Ability to configure whether script elements should execute for setHTMLUnsafe() · Issue #10090 · whatwg/html](https://github.com/whatwg/html/issues/10090) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 57 result(s) found across 11 planned queries — **21 verified relevant**
  - `"chromestatus.com/feature/5054329641893888" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"Renewed HTML insertion&streaming methods" API` — *Core feature API query* (4 returned)
  - `"Renewed HTML insertion&streaming methods" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"one-shot" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Renewed HTML insertion&streaming methods" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Renewed HTML insertion&streaming methods" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
  - `"dynamic-markup-revamped" OR "streamAppendHTML" OR "appendHTMLUnsafe" (tutorial OR guide OR explainer)` — *Discovers developer tutorials, overview articles, and explainers detailing the revamped dynamic HTML insertion and streaming APIs.* (8 returned)
  - `("streamAppendHTML" OR "streamAppendHTMLUnsafe" OR "setHTMLUnsafe") "WritableStream" OR "runScripts" code example` — *Locates real-world JavaScript code snippets and syntax examples demonstrating streaming HTML insertions and options like runScripts.* (8 returned)
  - `"declarative-partial-updates" OR "dynamic-markup-revamped" ("Intent to Prototype" OR "standards-positions")` — *Finds browser vendor positions (Chrome, Mozilla, WebKit) and official intents to prototype or implement the renewed insertion methods.* (8 returned)
  - `("insertAdjacentHTML" OR "createContextualFragment") ("runScripts" OR "dynamic markup revamped") (site:news.ycombinator.com OR site:reddit.com OR site:github.com/WICG)` — *Surfaces community feedback, discussions, and debates regarding the replacement of legacy APIs like insertAdjacentHTML with unified streaming and positional methods.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 16 result(s) found — **13 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 3 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "domparser", shared with 0 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "domparser": Chrome 90% passing (stable)*
- **Sources cited by the AI synthesis:** 7 result(s) found — **5 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 6 engineer comment(s) read
- **Web Page Excerpts Ingested:** 11 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5054329641893888)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5054329641893888)
- [Specification](https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md#resulting-api)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/491743369)
