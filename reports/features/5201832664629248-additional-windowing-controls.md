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

- **Momentum:** Moderate (60 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Additional Windowing Controls is currently Enabled by default in Chrome 154. Ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with appropriate feature detection.
- Firefox and Safari have not yet finalized positions. Use defensive feature detection (guarding with `if ("..." in window)`).
- No direct polyfill detected yet; progressive enhancement fallback required for non-supporting browsers.

## Standards Positions

- **WebKit:** [Window Management](https://github.com/mozilla/standards-positions/issues/542) [open]
- **Mozilla:** [Multi-Screen Window Placement API](https://github.com/WebKit/standards-positions/issues/117) [open]
- **W3C TAG:** [WG New Spec: Additional Windowing Controls](https://github.com/w3ctag/design-reviews/issues/1246) [open]

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5201832664629248)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5201832664629248)
- [Specification](https://www.w3.org/TR/window-management/#api-window-minimize-method)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40192345)
