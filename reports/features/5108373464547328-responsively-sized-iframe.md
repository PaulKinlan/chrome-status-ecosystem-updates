# Responsively-sized <iframe>

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Allow sites to opt into iframes having responsive sizing (sizing the <iframe> element in the parent document to the iframe document's layout overflow sizing, so that scrolling in the child document is avoided).

### Motivation

This is a natural feature to have for iframes, when the site wants to
render the iframe content so that it looks seamless with the parent frame and avoids scrollbars.

## Ecosystem Status

- **Momentum:** Emerging (20 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** Responsively-sized <iframe> is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Emerging with Chromium-Led standards alignment and neutral developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Articles & Documentation

- [Responsively-sized <iframe>](https://chromestatus.com/feature/5108373464547328)
- [Responsively-sized <iframe> · Issue #4036 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4036)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5108373464547328)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5108373464547328)
- [Specification](https://drafts.csswg.org/css-sizing-4/#responsive-iframes)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/418397278)
