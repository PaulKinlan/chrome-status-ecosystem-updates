# Additional Windowing Controls

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Enable web applications to maximize, minimize, and restore their windows, control whether the window can be resized, and introspect the corresponding window state.

The Window Management permission is required for new JS API controls (window.maximize()/minimize()/restore()/setResizable(bool)). The new CSS media features display-state and resizable are not gated behind a permission as they can follow the non-AWC API toggled states as well.

This feature is an enhancement of the Window Management API:
https://chromestatus.com/feature/5252960583942144

### Motivation

Virtual Desktop Infrastructure (VDI) web clients have limited abilities to integrate remote application windows with the local desktop environment, which creates suboptimal experiences for their users. Currently, they can only present full disjoint remote desktop environments (e.g. in a local fullscreen window), or present individual remote applications in separate local windows with titlebar window controls that are inoperative, redundant, and confusing for users.

## Ecosystem Status

- **Momentum:** Moderate (50 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Additional Windowing Controls is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- Community package available: [@types/estree](https://www.npmjs.com/package/@types/estree) (v1.0.9) for progressive enhancement.

## Standards Positions

- **WebKit:** [Additional Windowing Controls](https://github.com/WebKit/standards-positions/issues/96) [open]
- **Mozilla:** [Additional Windowing Controls](https://github.com/mozilla/standards-positions/issues/712) [open]
- **Mozilla:** [New 'onmove' event handler for the Window object](https://github.com/mozilla/standards-positions/issues/938) [closed]
- **W3C TAG:** [WG New Spec: Additional Windowing Controls](https://github.com/w3ctag/design-reviews/issues/1246) [open]

## Packages & Polyfills

- [@types/estree](https://www.npmjs.com/package/@types/estree) `v1.0.9` — TypeScript definitions for estree

## Articles & Documentation

- [Mobile touch controls](https://developer.mozilla.org/en-US/docs/Games/Techniques/Control_mechanisms/Mobile_touch)
- [Unconventional controls](https://developer.mozilla.org/en-US/docs/Games/Techniques/Control_mechanisms/Other)
- [User input methods and controls](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/User_input_methods)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5201832664629248)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5201832664629248)
- [Specification](https://www.w3.org/TR/window-management/#api-window-minimize-method)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40192345)
