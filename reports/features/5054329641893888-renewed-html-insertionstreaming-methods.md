# Renewed HTML insertion&streaming methods

> **Report Week:** 2026-W36 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Expose multiple HTML setting methods that provide a coherent story for dynamically inserting markup into an existing document.

- Positional methods (before/after/append/prepend/replaceWith) that take HTML as argument, effectively replacing insertAdjacentHTML.
- Streaming methods (stream{Append}HTML{Unsafe}) which return a WritableStream
- Passing {runScripts} as part of SetHTMLUnsafeOptions, mimicking createContextualFragment behavior.
- Supporting createParserOptions in trusted types, allowing trusted types to override scripting mode and sanitizer.

### Motivation

Updating HTML dynamically from script has multiple disjointed API, each with its own subtle differences.
Developers can partially update an element using insertAdjacentHTML, use sanitizer with setHTML, execute scripts with createContextualFragment, stream with detached documents. 

This can be confusing and frustrating to web developers, as well as create bugs or security issues if the differences are not well understood.

This change replaces those with a coherent set of methods and arguments, that use the same settings (sanitizer/runScripts) with different variants (where to insert the HTML, stream/one-shot, safe/unsafe) as well as the same support in trusted types.

## Ecosystem Status

- **Momentum:** High (80 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive / High Interest
- **Executive Take:** Renewed HTML insertion&streaming methods is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Partial Multi-Engine Interest standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @zcorpan: "Generally we want 7 days to pass. This has happened here. 🙂..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [HTML streaming & revamped DOM parsing](https://github.com/WebKit/standards-positions/issues/629) [open]
- **Mozilla:** [HTML streaming & revamped DOM parsing](https://github.com/mozilla/standards-positions/issues/1370) [closed]

## 📰 Ecosystem Blogs & Articles

- [[blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods Chromestatus Thu, 16 Jul 2026 08:40:50 -0700 Contact emails [email&#160;pr...
- [[blink-dev] Ready for Developer Testing: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16159.html) *(mail-archive.com)*
  > [blink-dev] Ready for Developer Testing: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: Renewed HTML insertion&streaming methods Chromestatus Tue, 24 Mar 2026 04:52:00 -0700 Con...
- [Out-of-Order Streaming HTML Is Coming To A Browser Near You](https://modernwebweekly.substack.com/p/out-of-order-streaming-html-is-coming) *(modernwebweekly.substack.com · 2026-06-05T12:58:50)*
  > Using streamAppendHTML()results in empty HTML and doesn’t work. Also notice that the streaming methods are required to use templates and markers. When you use non-streaming methods, like appendHTMLUnsafe() for example, the parent of the template when...
- [How Declarative Partial Updates Work in HTML](https://www.freecodecamp.org/news/how-declarative-partial-updates-work-in-html) *(freecodecamp.org · 2026-05-29T20:20:47)*
  > Instead of remembering how innerHTML, outerHTML, insertAdjacentHTML, and createContextualFragment() differ, the method name describes the action.
- [Declarative partial updates | Blog | Chrome for Developers](https://developer.chrome.com/blog/declarative-partial-updates) *(developer.chrome.com · 2026-05-19T00:00:00)*
  > That means that inserting HTML using these methods cannot modify existing DOM, and the patching happens &quot;in place&quot; inside the fragment. However, when streaming using methods like streamHTMLUnsafe (that we&#x27;re about to cover!), there is ...
- [html-setters-polyfill - npm](https://www.npmjs.com/package/html-setters-polyfill) *(npmjs.com)*
  > Insertion Unsafe variants: setHTMLUnsafe, appendHTMLUnsafe, prependHTMLUnsafe, beforeHTMLUnsafe, afterHTMLUnsafe, replaceWithHTMLUnsafe. Streaming variants: steamHTML, streamHTMLUnsafe, streamBeforeHTML...etc. return a WritableStream that buffers and...
- [cosine - 前端人の日常频道 – Telegram](https://t.me/s/cosine_front_end?q=) *(t.me)*
  > 1. 背景与问题 • 传统 HTML ... / appendHTML / afterHTML 及其 Unsafe 版本。 • 流式版本（streamHTML 等）支持 Streams API，可直接从 fetch 响应 pipe 到元素。 • Unsafe 版本默认关闭 sanitizer，可选 runScripts: true 执行脚本。 • 使用场景：SPA 动态流式加载大块内容、插入可缓存的部分（如页脚）。 • 限制：与 Trusted Types 集成需 createParserOpt...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md`)*
  > [blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods Chromestatus Thu, 16 Jul 2026 08:40:50 -0700 Contact emails [ema...
- [[blink-dev] Ready for Developer Testing: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16159.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md`)*
  > [blink-dev] Ready for Developer Testing: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: Renewed HTML insertion&streaming methods Chromestatus Tue, 24 Mar 2026 04:52:00...

## 📚 Platform Documentation & Specifications

- [Coherent story for HTML-setting methods · Issue #11669 · whatwg/html](https://github.com/whatwg/html/issues/11669) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 20 result(s) found across 6 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/5054329641893888" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"streamAppendHTML" OR "streamHTML" OR "appendHTML" "insertAdjacentHTML"` — *Finds developer guides, blog articles, and tutorials discussing the replacement of insertAdjacentHTML with modernized streaming and positional HTML insertion methods.* (8 returned)
  - `("streamAppendHTML" OR "streamHTMLUnsafe" OR "appendHTML" OR "replaceWithHTML") ("runScripts" OR "SetHTMLUnsafeOptions" OR "createParserOptions")` — *Locates concrete code examples, WebIDL signatures, and usage patterns for positional insertion, script execution options, and streaming WritableStreams.* (3 returned)
  - `"declarative-partial-updates" OR "dynamic-markup-revamped" site:github.com/WICG OR site:chromestatus.com` — *Tracks the upstream specification work, browser vendor intent-to-ship/prototype status, and official WICG explainer updates.* (8 returned)
  - `("streamAppendHTML" OR "renewed HTML insertion" OR "dynamic markup revamped") (site:github.com/mozilla/standards-positions OR site:github.com/WebKit/standards-positions OR site:github.com/whatwg/html)` — *Uncovers browser vendor positions, standards consensus, and technical feedback from Mozilla, WebKit, and WHATWG working groups.* (0 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 8 result(s) found — **7 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5054329641893888)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5054329641893888)
- [Specification](https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md#resulting-api)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/491743369)
