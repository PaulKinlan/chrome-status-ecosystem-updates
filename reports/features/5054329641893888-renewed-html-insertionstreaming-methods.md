# Renewed HTML insertion&streaming methods

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

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

- **Momentum:** Emerging (30 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Neutral
- **Executive Take:** Renewed HTML insertion&streaming methods is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Emerging with Partial Multi-Engine Interest standards alignment and neutral developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Articles & Documentation

- [[blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html)
- [RE: [blink-dev] Re: Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg17049.html)
- [[blink-dev] Re: Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg17004.html)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5054329641893888)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5054329641893888)
- [Specification](https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md#resulting-api)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/491743369)
