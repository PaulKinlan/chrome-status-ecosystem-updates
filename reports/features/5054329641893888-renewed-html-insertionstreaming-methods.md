# Renewed HTML insertion&streaming methods

> **Report Week:** 2026-W46 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

Expose multiple HTML setting methods that provide a coherent story for dynamically inserting markup into an existing document.  - Positional methods (before/after/append/prepend/replaceWith) that take HTML as argument, effectively replacing insertAdjacentHTML. - Streaming methods (stream{Append}HTML{Unsafe}) which return a WritableStream, receiving text as input and parsing HMHL. - Passing {runScripts} as part of SetHTMLUnsafeOptions, mimicking createContextualFragment behavior. - Supporting createParserOptions in trusted types, allowing trusted types to override scripting mode and sanitizer.

### Motivation

Updating HTML dynamically from script has multiple disjointed API, each with its own subtle differences. Developers can partially update an element using insertAdjacentHTML, use sanitizer with setHTML, execute scripts with createContextualFragment, stream with detached documents.   This can be confusing and frustrating to web developers, as well as create bugs or security issues if the differences are not well understood.  This change replaces those with a coherent set of methods and arguments, that use the same settings (sanitizer/runScripts) with different variants (where to insert the HTML, stream/one-shot, safe/unsafe) as well as the same support in trusted types.

## Ecosystem Status

- **Momentum:** Emerging (+10 points since 2026-10-12; footprint 380 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The renewed HTML insertion and streaming API unifies dynamic markup injection into a coherent matrix of positional and streaming methods, resolving long-standing ergonomic inconsistencies between legacy APIs like insertAdjacentHTML and createContextualFragment. Chromium is driving the feature toward general availability enabled by default in Chrome 157 following extensive trials, while WHATWG specification work progresses in tandem. Broad ecosystem reception is enthusiastic, supported by formal positive backing from Mozilla and an open, active review from WebKit.

### Recommendations
- Actionable Advice: Teams should experiment with the new methods behind browser flags to evaluate streaming and sanitized insertion workflows for modern, low-overhead architectures. However, production deployments should continue relying on progressive enhancement or established fallbacks until cross-browser implementation expands beyond Chromium.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @o-t-w: "This feature is due to ship in \[Chrome 154\](https://developer.chrome.com/blog/chrome-154-beta?hl=en#renewed\_html\_insertion\_and\_streaming\_methods). Moz..."
- Standards Activity (Mozilla): Latest discussion from @zcorpan: "Generally we want 7 days to pass. This has happened here. 🙂..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [HTML streaming & revamped DOM parsing](https://github.com/WebKit/standards-positions/issues/629) [open]
- **Mozilla:** [HTML streaming & revamped DOM parsing](https://github.com/mozilla/standards-positions/issues/1370) [closed]

## Web-features Group

*group-level data: web-features [`domparser`](https://webstatus.dev/features/domparser)*

- Share of tests passing in the web-features group `domparser` on [wpt.fyi](https://wpt.fyi/results?q=feature:domparser) (via webstatus.dev) — stable: Chrome 90.5% · Edge 90.5% · Firefox 95.2% · Safari 81%; experimental: Chrome 90.5% · Edge 90.5% · Firefox 95.2% · Safari 90.5%

## 📰 Ecosystem Blogs & Articles

- [daily.dev](https://daily.dev/posts/declarative-partial-updates-5buxplifg) *(daily.dev)*
  > The \*\*"Renewed HTML insertion & streaming methods"\*\* initiative (part of the broader \*Declarative Partial Updates\* web standards push) redesigns how developers insert dynamic HTML into existing DOM nodes \*\*Core Focus\*\*: Google Chrome’s web platform t...
- [Declarative partial updates  \|  Web Platform  \|  Chrome for Developers](https://developer.chrome.com/docs/web-platform/declarative-partial-updates) *(developer.chrome.com)*
  > The \*\*"Renewed HTML insertion & streaming methods"\*\* initiative (part of the broader \*Declarative Partial Updates\* web standards push) redesigns how developers insert dynamic HTML into existing DOM nodes Historically, developers had to navigate an in...
- [How Declarative Partial Updates Work in HTML](https://www.freecodecamp.org/news/how-declarative-partial-updates-work-in-html) *(freecodecamp.org)*
  > Historically, developers had to navigate an inconsistent matrix of legacy APIs (\`innerHTML\`, \`outerHTML\`, \`insertAdjacentHTML\`, and \`Range.createContextualFragment\`) Unclear mental models and naming conventions
- [dev.to](https://dev.to/grimicorn/declarative-partial-updates-out-of-order-html-streaming-without-a-framework-1086) *(dev.to)*
  > Inconsistent script execution semantics (e.g., \`innerHTML\` neutralizes scripts, while \`createContextualFragment\` runs them) \*\*Explicit Script Execution\*\*: Unsafe variants accept \`{ runScripts: true }\` in \`SetHTMLUnsafeOptions\`, replacing the need for...
- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides/performance/out-of-order-html-streaming) *(developer.chrome.com)*
  > The renewed specification standardizes a 24-method grid (6 positions × Static/Streaming × Safe/Unsafe) \`setHTML()\` / \`setHTMLUnsafe()\`
- [sakupi01.com](https://studio.sakupi01.com/whatwg/declarative-partial-updates/renewed-html-insertion-and-streaming-methods) *(studio.sakupi01.com)*
  > \*\*Positional HTML Methods\*\*: Replaces \`insertAdjacentHTML\` with descriptive names mirroring existing DOM node manipulation methods (\`append\`, \`prepend\`, \`before\`, \`after\`, \`replaceWith\`) \*\*Streaming Methods\*\*: Methods prefixed with \`stream\*\` (e.g., \`...
- [Microsoft Edge 157 web platform release notes (Nov. 5, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > \*\*Streaming Methods\*\*: Methods prefixed with \`stream\*\` (e.g., \`streamHTML()\`, \`streamAppendHTML()\`, \`streamAppendHTMLUnsafe()\`) return a \`WritableStream\` \*\*Edge 157 Web Platform Release Notes\*\*
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > \*\*Core Focus\*\*: Chromium browser vendors (shipped in Chrome/Edge 157) documented the native availability of both the static positional methods and \`WritableStream\`-based streaming counterparts
- [\[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods Chromestatus Thu, 16 Jul 2026 08:40:50 -0700 Contact emails \[email&#160;pr...
- [\[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16159.html) *(mail-archive.com)*
  > \[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods Chromestatus Tue, 24 Mar 2026 04:52:00 -0700 Con...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com · 2026-11-02T20:19:23)*
  > &lt;strong&gt;Positional methods (before/after/append/prepend/replaceWith) that take HTML as argument, effectively replacing insertAdjacentHTML&lt;/strong&gt;. Streaming methods (stream{Append}HTML{Unsafe}) which return a WritableStream, receiving text as input ...
- [Re: \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg17089.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods Noam Rosenthal Wed, 29 Jul 2026 09:12:28 -0700 On Wed, Jul...
- [RE: \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg17049.html) *(mail-archive.com)*
  > Draft versions of both exist in isolation but they would all need to be rebased on top of the stack: https://github.com/whatwg/html/pull/12528 (positional methods to replace insertAdjacentHTML) https://github.com/whatwg/html/pull/11631 (streamHTML\*) ...
- [Re: \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg17088.html) *(mail-archive.com)*
  > &gt; &gt; &gt; &gt; -- Dan &gt; &gt; &gt; &gt; \*From:\* ... Intent to Ship: Renewed HTML &gt; insertion&amp;streaming methods &gt; &gt; &gt; &gt; &gt; &gt; On Mon, Jul 20, 2026 at 8:03 PM &#x27;Dan Clark&#x27; via blink-dev &lt; &gt; \[email protected\]...
- [Re: \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg17005.html) *(mail-archive.com)*
  > Draft versions of both exist in isolation but they would all need to be rebased on top of the stack: https://github.com/whatwg/html/pull/12528 (positional methods to replace insertAdjacentHTML) https://github.com/whatwg/html/pull/11631 (streamHTML\*) ...
- [Chrome Release 157](https://chromestatuslite.com/?version=157) *(chromestatuslite.com)*
  > Add \`styleDuration\` and ... Frame API, enabling developers to distinguish style and layout times. # This feature was specified in this Spec. Expose multiple HTML setting methods that provide a coherent story for dynamically inserting markup into an e...
- [Re: \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg17090.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · Re: \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&amp;streaming methods · Rick Byers Wed, 29 Jul 2026 10:04:32 -0700 · On Wed, Jul 29, 2026 at 12:12 PM Noam Rosenthal &lt;\[email protected\]&gt; wrote: ·...
- [Re: \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg17148.html) *(mail-archive.com)*
  > Update: Using the new Github stacked PR feature, we now have a stack of non-draft PRs at &lt;strong&gt;https://github.com/whatwg/html/pull/12758&lt;/strong&gt; in the last week. It is being reviewed by Mozilla folks. We&#x27;ve found a few issues and fixed them ...
- [Re: \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg17190.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · Re: \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&amp;streaming methods · Alex Russell Mon, 17 Aug 2026 11:39:18 -0700 · LGTM3; very excited to see these landing. On Wednesday, August 12, 2026 at 8:09:...
- [streamAppendHTML() で AI の回答を HTML のままストリーミング描画する](https://azukiazusa.dev/blog/stream-append-html) *(azukiazusa.dev)*
  > streamAppendHTML() を使用した場合は &lt;img&gt; と &lt;script&gt; が除去され、回答のテキストだけが描画されていることがわかります。一方で streamAppendHTMLUnsafe() を使用した場合は &lt;img&gt; が描画され、onerror が実行されて DOM が書き換えられてしまいました。
- [Out-of-Order HTML Streaming Moves from JS Frameworks into the Browser - InfoQ](https://www.infoq.com/news/2026/09/native-deferred-html-streaming) *(infoq.com · 2026-09-21T23:57:00)*
  > The specification defines a predictable ... streamHTMLUnsafe(), for instance, &lt;strong&gt;returns a WritableStream that incrementally pipes incoming chunks into an internal HTML fragment parser&lt;/strong&gt;....
- [Declarative Partial Updates: Out-of-Order HTML Streaming Without a Framework \| Dan Holloran](https://danholloran.me/posts/declarative-partial-updates-out-of-order-html-streaming-without-a-framework) *(danholloran.me · 2026-08-20T07:07:27)*
  > The streaming versions are the genuinely new capability. They return a WritableStream, so a fetch response can go straight into the DOM as it arrives:
- [innerHTML 以外の選択肢が増える ―― HTML挿入APIの再設計と、少しずつ届くHTMLの入れ方 – LIVECAST MAGAZINE](https://www.livecast.co.jp/magazine/html-insertion-api-streaming-trusted-types) *(livecast.co.jp · 2026-10-01T07:19:22)*
  > “Streaming methods (streamAppendHTML(), streamAppendHTMLUnsafe(), and related methods) which return a WritableStream.”
- [HTML Standard — Dynamic markup insertion, DOM parsing and serialization APIs, HTML sanitization（日本語訳）](https://triple-underscore.github.io/HTML-dynamic-markup-insertion-ja.html) *(triple-underscore.github.io)*
  > ［ \`TrustedHTMLParserOptions$I ~objである ］~AND［ その\`無毒化器~環境設定$pO ~NEQ ~NULL ］ ◎ If options is a SetHTMLUnsafeOptions dictionary containing a sanitizer member or a TrustedHTMLParserOptions object with a non-null sanitizer configuration, it is used to sani...
- [Streaming HTML - Ollie Williams](https://olliewilliams.xyz/blog/streaming-html) *(olliewilliams.xyz · 2026-06-05T00:00:00)*
  > Stream HTML with response.textStream() and streamHTML()

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > \[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods Chromestatus Thu, 16 Jul 2026 08:40:50 -0700 Contact emails \[ema...
- [\[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16159.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > \[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods Chromestatus Tue, 24 Mar 2026 04:52:00...
- [HTML enhanced setter and streaming methods · Issue #4117 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4117) *(github.com · 2026-06-17T18:03:04)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > HTML enhanced setter and streaming methods · Issue #4117 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refres...
- [New HTML setters by tunetheweb · Pull Request #46127 · mdn/content · GitHub](https://github.com/mdn/content/pull/46127) *(github.com)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > New HTML setters by tunetheweb · Pull Request #46127 · mdn/content · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You s...
- [Move TrustedParserOptions to TrustedHTMLParserOptions by tunetheweb · Pull Request #30463 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30463) *(github.com)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > Move TrustedParserOptions to TrustedHTMLParserOptions by tunetheweb · Pull Request #30463 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/whatwg/html/issues/2142?timeline_page=1) *(github.com)*
- [HTML Standard, Edition for Web Developers](https://html.spec.whatwg.org/dev/dynamic-markup-insertion.html) *(html.spec.whatwg.org)*
- [Coherent story for HTML-setting methods · Issue #11669 · whatwg/html · GitHub](https://github.com/whatwg/html/issues/11669) *(github.com)*
- [Option to batch mutation observations on parse-end · Issue #13198 · whatwg/html · GitHub](https://github.com/whatwg/html/issues/13198) *(github.com)*
- [GitHub - GoogleChromeLabs/html-setters-polyfill · GitHub](https://github.com/GoogleChromeLabs/html-setters-polyfill) *(github.com)*
- [HTML enhanced setter and streaming methods · Issue #4117 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4117) *(github.com)*
- [New HTML setters by tunetheweb · Pull Request #46127 · mdn/content · GitHub](https://github.com/mdn/content/pull/46127) *(github.com)*
- [Move TrustedParserOptions to TrustedHTMLParserOptions by tunetheweb · Pull Request #30463 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30463) *(github.com)*
- [Add streaming HTML insertion methods to Element, ShadowRoot, and ChildNode by noamr · Pull Request #12758 · whatwg/html · GitHub](https://github.com/whatwg/html/pull/12758) *(github.com)*
- [dom: positional HTML insertion methods (appendHTML ... replaceWithHTML) by andreasrosdal · Pull Request #335 · nordstjernen-web/nordstjernen-browser · GitHub](https://github.com/nordstjernen-web/nordstjernen-browser/pull/335) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 63 result(s) found across 12 planned queries — **29 verified relevant**
  - `"chromestatus.com/feature/5054329641893888" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (8 returned)
  - `"github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"Renewed HTML insertion&streaming methods" API` — *Core feature API query* (8 returned)
  - `"Renewed HTML insertion&streaming methods" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"one-shot" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Renewed HTML insertion&streaming methods" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Renewed HTML insertion&streaming methods" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (4 returned)
  - `"Renewed HTML insertion" OR "dynamic markup revamped" (explainer OR guide OR "insertAdjacentHTML")` — *Finds developer guides and articles explaining the transition from insertAdjacentHTML to modern dynamic HTML insertion methods.* (8 returned)
  - `("streamAppendHTML" OR "streamAppendHTMLUnsafe") ("WritableStream" OR "parsing")` — *Locates real-world JavaScript code examples and API usage for streaming HTML parsing via WritableStream.* (8 returned)
  - `("appendHTML" OR "replaceWithHTML" OR "SetHTMLUnsafeOptions") "runScripts"` — *Searches for syntax specifications, WebIDL definitions, and code samples utilizing positional HTML insertion with execution options.* (8 returned)
  - `"Renewed HTML insertion" OR "declarative-partial-updates" ("intent to prototype" OR "intent to ship" OR site:chromestatus.com)` — *Tracks browser vendor implementation status, intent announcements, and platform release roadmaps.* (1 returned)
  - `"dynamic-markup-revamped" OR "declarative-partial-updates" (site:github.com/whatwg OR site:github.com/WICG OR site:github.com/WebKit)` — *Discovers standards committee deliberations, developer feedback, and cross-vendor sentiment from Mozilla, WebKit, and WHATWG.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **13 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 2 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
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
