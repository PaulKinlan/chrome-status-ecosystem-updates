# Media element pseudo-classes

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

The :playing, :paused, :seeking, :buffering, :stalled, :muted, and :volume-locked CSS pseudo-classes match <audio> and <video> elements based on their state.

This is one of the focus areas in https://wpt.fyi/interop-2026.

### Motivation

Allows styling of media elements or custom media controls based on the state of the media element. For example, a large play button overlaying a video could be hidden while playing.

There is no expectation that custom media controls can be implemented entirely with CSS, as there is still a lot of state not exposed to CSS.

## Ecosystem Status

- **Momentum:** Moderate (60 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Media element pseudo-classes is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Articles & Documentation

- [[blink-dev] Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16504.html)
- [Media element pseudo-classes · Issue #1003 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1003)
- [Re: [blink-dev] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16508.html)
- [[blink-dev] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16505.html)
- [[blink-dev] Intent to Prototype: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg15214.html)
- [Media element pseudo-classes · Issue #166 · web-platform-dx/developer-signals](https://github.com/web-platform-dx/developer-signals/issues/166)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5068277495758848)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5068277495758848)
- [Specification](https://html.spec.whatwg.org/multipage/semantics-other.html#pseudo-classes)
- [Chromium Tracking Bug](https://crbug.com/40246121)
