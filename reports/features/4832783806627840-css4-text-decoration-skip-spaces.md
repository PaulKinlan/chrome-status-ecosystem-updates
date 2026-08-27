# CSS4 text-decoration-skip-spaces

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

The text-decoration-skip-spaces CSS property controls whether text decoration lines (underlines, overlines, line-throughs, etc.) skip over whitespace characters. This allows authors to prevent decorations from being drawn under spaces, which is often more visually appealing.

### Motivation

Currently there is no web standard way to control whether text decorations (underlines, overlines, line-throughs) appear over whitespace characters. Authors commonly want to suppress the underline under leading/trailing spaces in inline elements, but CSS provides no mechanism for this. The `text-decoration-skip-spaces` property fills this gap, allowing precise control over decoration rendering around whitespace. This is useful for navigation menus, links, and any text where the decoration should visually attach only to non-space characters.

## Ecosystem Status

- **Momentum:** Moderate (55 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** CSS4 text-decoration-skip-spaces is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Articles & Documentation

- [[blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17159.html)
- [[blink-dev] Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17140.html)
- [CSS4 text-decoration-skip-spaces](https://chromestatus.com/feature/4832783806627840)
- [Re: [blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17311.html)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4832783806627840)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4832783806627840)
- [Specification](https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40862777)
