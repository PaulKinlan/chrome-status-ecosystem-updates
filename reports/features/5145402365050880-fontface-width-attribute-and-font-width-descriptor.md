# FontFace width attribute and font-width descriptor

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Exposes the width attribute on FontFace and the @font-face font-width descriptor as aliases for stretch and font-stretch. Aligns Chromium with the updated CSS Font Loading and CSS Fonts 4 specifications. Developers can now inspect or initialize font face widths using FontFace.width and CSS font-width interchangeably with stretch and font-stretch.

### Motivation

CSS Font Loading and CSS Fonts 4 define width as the primary FontFace descriptor attribute and @font-face descriptor, while retaining stretch as a legacy alias. Chromium previously ignored the width constructor member and font-width descriptor, causing Web Platform Tests to fail. Exposing width aligns Chromium with the updated specification.

## Ecosystem Status

- **Momentum:** Emerging (30 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** FontFace width attribute and font-width descriptor is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Emerging with Chromium-Led standards alignment and neutral developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Articles & Documentation

- [[blink-dev] Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17165.html)
- [[blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17196.html)
- [Re: [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17223.html)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5145402365050880)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5145402365050880)
- [Specification](https://drafts.csswg.org/css-fonts-4/#font-width-prop)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/543938492)
