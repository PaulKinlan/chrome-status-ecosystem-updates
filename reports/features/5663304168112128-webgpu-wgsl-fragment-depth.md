# WebGPU: WGSL Fragment Depth

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Adds the ability to provide a `less` or `greater` modifier to the `@builtin(frag_depth)` in WGSL.

The current `@builtin(frag_depth)` can potentially introduce a performance penalty due to disabling the early-Z optimizations on a draw call. The new modifiers allow the explicit setting of the buffer mode and allow the early-Z optimizations to be applied.

### Motivation

In the current WGSL specification, the mere act of writing to @builtin(frag_depth) often incurs a significant performance penalty because driver heuristics cannot guarantee that the fragment shader output will adhere to the depth written by the rasterizer's interpolated depth. Consequently, writing to frag_depth typically forces the GPU to disable crucial early-Z optimizations for the entire draw call.

The introduction of a new depth_mode built-in parameter for the @builtin(frag_depth) with modes less, and greater directly addressing this performance limitation by letting the developer express their intent to the hardware.

## Ecosystem Status

- **Momentum:** Emerging (30 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Neutral
- **Executive Take:** WebGPU: WGSL Fragment Depth is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Emerging with Partial Multi-Engine Interest standards alignment and neutral developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Articles & Documentation

- [[blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html)
- [[blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17276.html)
- [Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17300.html)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5663304168112128)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5663304168112128)
- [Specification](https://github.com/gpuweb/gpuweb/pull/6299)
- [Chromium Tracking Bug](https://crbug.com/457993779)
