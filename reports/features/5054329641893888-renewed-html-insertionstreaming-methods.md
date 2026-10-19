# Renewed HTML insertion&streaming methods

> **Report Week:** 2026-W43 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

Expose multiple HTML setting methods that provide a coherent story for dynamically inserting markup into an existing document.  - Positional methods (before/after/append/prepend/replaceWith) that take HTML as argument, effectively replacing insertAdjacentHTML. - Streaming methods (stream{Append}HTML{Unsafe}) which return a WritableStream, receiving text as input and parsing HMHL. - Passing {runScripts} as part of SetHTMLUnsafeOptions, mimicking createContextualFragment behavior. - Supporting createParserOptions in trusted types, allowing trusted types to override scripting mode and sanitizer.

### Motivation

Updating HTML dynamically from script has multiple disjointed API, each with its own subtle differences. Developers can partially update an element using insertAdjacentHTML, use sanitizer with setHTML, execute scripts with createContextualFragment, stream with detached documents.   This can be confusing and frustrating to web developers, as well as create bugs or security issues if the differences are not well understood.  This change replaces those with a coherent set of methods and arguments, that use the same settings (sanitizer/runScripts) with different variants (where to insert the HTML, stream/one-shot, safe/unsafe) as well as the same support in trusted types.

## Ecosystem Status

- **Momentum:** High (footprint 350 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The 'Renewed HTML insertion & streaming methods' feature unifies and modernizes dynamic markup injection and parsing into a coherent set of positional, streaming, and safe/unsafe variants. It is enabled by default in Chrome, addressing historical developer fragmentation issues related to disjointed APIs like insertAdjacentHTML.

### Recommendations
- Actionable Advice: Development teams can begin experimenting with the new positional and streaming insertion methods behind modern browser flags or in Chrome, using feature detection or progressive enhancement strategies for broader cross-browser compatibility.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @o-t-w: "This feature is due to ship in \[Chrome 154\](https://developer.chrome.com/blog/chrome-154-beta?hl=en#renewed\_html\_insertion\_and\_streaming\_methods). Moz..."
- Standards Activity (Mozilla): Latest discussion from @zcorpan: "Generally we want 7 days to pass. This has happened here. 🙂..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [HTML streaming & revamped DOM parsing](https://github.com/WebKit/standards-positions/issues/629) [open]
- **Mozilla:** [HTML streaming & revamped DOM parsing](https://github.com/mozilla/standards-positions/issues/1370) [closed]

## Web-features Group

*group-level data: web-features [`domparser`](https://webstatus.dev/features/domparser)*

- Share of tests passing in the web-features group `domparser` on [wpt.fyi](https://wpt.fyi/results?q=feature:domparser) (via webstatus.dev) — stable: Chrome 90.5% · Edge 85.7% · Firefox 95.2% · Safari 81%; experimental: Chrome 90.5% · Edge 90.5% · Firefox 95.2% · Safari 90.5%

## 📰 Ecosystem Blogs & Articles

- [daily.dev](https://daily.dev/posts/declarative-partial-updates-5buxplifg) *(daily.dev)*
  > The \*\*"Renewed HTML insertion & streaming methods"\*\* (often discussed under the broader browser initiatives for \*Declarative Partial Updates\* and \*Dynamic markup - revamped\*) The \*\*"Renewed HTML insertion & streaming methods"\*\* (often discussed under...
- [chrome.com](https://developer.chrome.com/docs/web-platform/declarative-partial-updates) *(developer.chrome.com)*
  > \*\*Streaming Methods:\*\* Introduction of streaming variants such as \`streamHTML\` and \`streamAppendHTML\` (along with unsafe counterparts like \`stream{Append}HTML{Unsafe}\`) which return a standard \`WritableStream\`, allowing text chunks to be fed directly...
- [\[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16159.html) *(mail-archive.com)*
  > \[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods Chromestatus Tue, 24 Mar 2026 04:52:00 -0700 Con...
- [\[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods Chromestatus Thu, 16 Jul 2026 08:40:50 -0700 Contact emails \[email&#160;pr...
- [RE: \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg17049.html) *(mail-archive.com)*
  > RE: \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) RE: \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods 'Daniel Clark' via blink-dev Wed, 22 Jul 2026 16:29:41 -07...
- [\[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg17004.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods 'Dan Clark' via blink-dev Mon, 20 Jul 2026 12:03:20 -0700 Thanks f...
- [Re: \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg17089.html) *(mail-archive.com)*
  > On Wed, Jul 29, 2026 at 4:33 PM Rick Byers &lt;\[email protected\]&gt; wrote: &gt; &gt; We discussed this in the API owners meeting right now. While we are &gt; comfortable shipping prior to the PR landing in HTML, it looks like the PRs &gt; are still ...
- [Declarative partial updates \| Web Platform \| Chrome for Developers](https://developer.chrome.com/blog/declarative-partial-updates) *(developer.chrome.com · 2026-09-08T00:00:00)*
  > The Chrome team has been considering this problem and has been developing new additions to the web platform under the name of Declarative Partial Updates. The first two new sets of APIs make it easier to deliver HTML in a less linear fashion, whether...
- [How Declarative Partial Updates Work in HTML](https://www.freecodecamp.org/news/how-declarative-partial-updates-work-in-html) *(freecodecamp.org · 2026-05-29T20:20:47)*
  > Declarative partial update attempts to relax the first limitation. It &lt;strong&gt;allows the server to first send a placeholder and then send the actual content in the response&lt;/strong&gt;. The browser applies that next content over the previous placeholder...
- [Declarative partial updates \| Lobsters](https://lobste.rs/s/qgq6ur) *(lobste.rs · 2026-05-24T19:30:05)*
  > The HTMX proposals, as far as I understand, are more about allowing interactivity without JS by enabling more elements to use more HTTP request types and dynamic partial replacements based on user input. Meanwhile this seems to be more about streamli...
- [Trying Declarative Partial Updates: A Future API for Replacing HTML Later - DEV Community](https://dev.to/nyaomaru/trying-declarative-partial-updates-a-future-api-for-replacing-html-later-2g43) *(dev.to · 2026-07-01T12:42:05)*
  > This is not an API that appends to the end, like insertAdjacentHTML(&quot;beforeend&quot;, html). It replaces the existing contents of contentElement with newHTML. ... Then comes the really interesting part of streaming versions.
- [Declarative Partial Updates: Out-of-Order HTML Streaming Without a Framework - DEV Community](https://dev.to/grimicorn/declarative-partial-updates-out-of-order-html-streaming-without-a-framework-1086) *(dev.to · 2026-08-22T08:06:02)*
  > Under the umbrella name Declarative Partial Updates, &lt;strong&gt;two related APIs let the server send a placeholder now and fill it in later, and let JavaScript stream markup into an element instead of waiting for the full string&lt;/strong&gt;.
- [Declarative partial updates — Web Standards](https://web-standards.dev/news/2026/05/declarative-partial-updates) *(web-standards.dev · 2026-05-26T00:00:00)*
  > New JavaScript methods &lt;strong&gt;setHTML(), appendHTML(), and streamHTML()&lt;/strong&gt; bring consistent naming for partial updates. Polyfills are on npm. developer.chrome.com/blog/declarative-partial-updates
- [Streaming HTML - Ollie Williams](https://olliewilliams.xyz/blog/streaming-html) *(olliewilliams.xyz · 2026-06-05T00:00:00)*
  > const response = await fetch(&#x27;templates.html&#x27;); response.textStream() .pipeTo(document.body.streamAppendHTMLUnsafe()); If the fetched HTML contains the following markup:
- [Out-of-Order HTML Streaming Moves from JS Frameworks into the Browser - InfoQ](https://www.infoq.com/news/2026/09/native-deferred-html-streaming) *(infoq.com · 2026-09-21T23:57:00)*
  > The specification defines a predictable ... \*Unsafe variants. &lt;strong&gt;Invoking streamHTMLUnsafe(), for instance, returns a WritableStream that incrementally pipes incoming chunks into an internal HTML fragment parser&lt;/strong&gt;....
- [Chrome 155 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com · 2026-09-16T00:00:00)*
  > Expose multiple HTML setting methods that provide a coherent story for dynamically inserting markup into an existing document: Positional methods (before(), after(), append(), prepend(), replaceWith()) that take HTML as argument, effectively replacin...
- [Microsoft Edge 155 web platform release notes (Oct. 8, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/155) *(learn.microsoft.com · 2026-09-24T00:00:00)*
  > The following HTML insertion and streaming methods provide a more coherent way to dynamically insert HTML into an existing document: Positional methods: setHTML() and setHTMLUnsafe() beforeHTML() and beforeHTMLUnsafe() afterHTML() and afterHTMLUnsafe...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16159.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > \[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods Chromestatus Tue, 24 Mar 2026 04:52:00...
- [\[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > \[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods Chromestatus Thu, 16 Jul 2026 08:40:50 -0700 Contact emails \[ema...
- [Move TrustedParserOptions to TrustedHTMLParserOptions by tunetheweb · Pull Request #30463 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30463) *(github.com)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > Move TrustedParserOptions to TrustedHTMLParserOptions by tunetheweb · Pull Request #30463 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed...
- [New HTML setters by tunetheweb · Pull Request #46127 · mdn/content](https://github.com/mdn/content/pull/46127) *(github.com)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > New HTML setters by tunetheweb · Pull Request #46127 · mdn/content · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh...
- [HTML enhanced setter and streaming methods · Issue #4117 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4117) *(github.com · 2026-06-17T18:03:04)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > HTML enhanced setter and streaming methods · Issue #4117 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or wind...

## 📚 Platform Documentation & Specifications

- [Patching and HTML Streaming methods · Issue #1471 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1471) *(github.com)*
- [Move TrustedParserOptions to TrustedHTMLParserOptions by tunetheweb · Pull Request #30463 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30463) *(github.com)*
- [New HTML setters by tunetheweb · Pull Request #46127 · mdn/content](https://github.com/mdn/content/pull/46127) *(github.com)*
- [HTML enhanced setter and streaming methods · Issue #4117 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4117) *(github.com)*
- [GitHub - WICG/declarative-partial-updates · GitHub](https://github.com/WICG/declarative-partial-updates) *(github.com)*
- [Add streaming HTML insertion methods to Element, ShadowRoot, and ChildNode by noamr · Pull Request #12758 · whatwg/html](https://github.com/whatwg/html/pull/12758) *(github.com)*
- [Coherent story for HTML-setting methods · Issue #11669 · whatwg/html](https://github.com/whatwg/html/issues/11669) *(github.com)*
- [GitHub - GoogleChromeLabs/html-setters-polyfill · GitHub](https://github.com/GoogleChromeLabs/html-setters-polyfill) *(github.com)*
- [8.4 Dynamic markup insertion](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html) *(html.spec.whatwg.org)*
- [HTML Standard, Edition for Web Developers](https://html.spec.whatwg.org/dev/dynamic-markup-insertion.html) *(html.spec.whatwg.org)*
- [\`createContextualFragment()\` external scripts without \`async\` run async in browsers · Issue #13079 · whatwg/html](https://github.com/whatwg/html/issues/13079) *(github.com)*
- [Integrate fragment parser options with trusted types by noamr · Pull Request #12583 · whatwg/html](https://github.com/whatwg/html/pull/12583) *(github.com)*
- [Streaming support · Issue #594 · w3c/trusted-types](https://github.com/w3c/trusted-types/issues/594) *(github.com)*
- [Trusted Types](https://www.w3.org/TR/trusted-types) *(w3.org)*
- [Enable createParserOptions, passing a sanitizer to trusted types by noamr · Pull Request #606 · w3c/trusted-types](https://github.com/w3c/trusted-types/pull/606) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 63 result(s) found across 11 planned queries — **30 verified relevant**
  - `"chromestatus.com/feature/5054329641893888" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (7 returned)
  - `"github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"Renewed HTML insertion&streaming methods" API` — *Core feature API query* (3 returned)
  - `"Renewed HTML insertion&streaming methods" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"one-shot" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Renewed HTML insertion&streaming methods" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Renewed HTML insertion&streaming methods" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
  - `Declarative Partial Updates HTML streaming insertAdjacentHTML alternative` — *Finds explainers, design docs, and ecosystem announcements regarding the declarative partial updates proposal.* (8 returned)
  - `streamAppendHTMLUnsafe WritableStream dynamic markup JavaScript tutorial` — *Looks for practical guides and tutorials on using the new streaming HTML insertion methods.* (8 returned)
  - `SetHTMLUnsafeOptions runScripts createContextualFragment code example` — *Searches for real-world code snippets demonstrating the new options and script execution parameters.* (8 returned)
  - `WICG dynamic-markup-revamped-explainer trusted types createParserOptions` — *Locates GitHub discussions and technical details on integrating the revamped methods with Trusted Types.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 4 result(s) found — **3 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 3 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **2 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "domparser", shared with 0 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "domparser": Chrome 90.5% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 6 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5054329641893888)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5054329641893888)
- [Specification](https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md#resulting-api)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/491743369)
