# Additional Windowing Controls

> **Report Week:** 2026-W38 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Enables web applications with the window-management permission to maximize(), minimize(), and restore() their windows, and to prevent resizing through setResizable(). Additionally, new CSS media features display-state and resizable enable scripts and content to adapt to the respective window states and resizability. These features improve the usability of VDI remote application windows in Web clients, especially when it comes to titlebar window controls. The new functionality enhances existing Window Management API features: https://chromestatus.com/feature/5252960583942144

### Motivation

Virtual Desktop Infrastructure (VDI) web clients have limited abilities to integrate remote application windows with the local desktop environment, which creates suboptimal experiences for their users. Currently, they can only present full disjoint remote desktop environments (e.g. in a local fullscreen window), or present individual remote applications in separate local windows with titlebar window controls that are inoperative, redundant, and confusing for users.

## Ecosystem Status

- **Momentum:** High (220 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** Additional Windowing Controls is currently Enabled by default in Chrome 155. Verified ecosystem momentum is High with Chromium-Led standards alignment and neutral developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @sonkkeli: "Hey, I'm jumping in here as I'm continuing on Ivan's work.  There were some updates made on the proposed APIs and the current proposals are at least a..."
- Standards Activity (Mozilla): Latest discussion from @michaelwasserman: "Client application window controls may indeed be limited by the OS, Window Manager, protocols, utilities, and modalities. The API surface offers coher..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Zwin, our open source XR windowing system, is now available ..." (0 points, 0 comments).

## Standards Positions

- **WebKit:** [Additional Windowing Controls](https://github.com/WebKit/standards-positions/issues/96) [open]
- **Mozilla:** [Additional Windowing Controls](https://github.com/mozilla/standards-positions/issues/712) [open]
- **W3C TAG:** [WG New Spec: Additional Windowing Controls](https://github.com/w3ctag/design-reviews/issues/1246) [open]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Zwin, our open source XR windowing system, is now available ...](https://twitter.com/muo_jp/status/1615143225135890432) — *by @muo_jp, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Ready for Developer Testing: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16555.html) *(mail-archive.com)*
  > [blink-dev] Ready for Developer Testing: Additional Windowing Controls Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: Additional Windowing Controls Chromestatus Tue, 19 May 2026 00:52:56 -0700 Contact emails [email&#16...
- [\[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17394.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Additional Windowing Controls Chromestatus Tue, 08 Sep 2026 23:04:36 -0700 Contact emails [email&#160;protected] , [email&#160...
- [Screen.isExtended, getScreenDetails, and Multi-Display Development \| Melin's Blog](https://melin.vercel.app/blog/2026-07-30) *(melin.vercel.app)*
  > Screen.isExtended, getScreenDetails, and Multi-Display Development | Melin&#39;s Blog Melin&#39;s Blog Back to blog July 30, 2026 &bull; 7 min read Screen.isExtended, getScreenDetails, and Multi-Display Development Table of Contents Modern web apps a...
- [Window-placement popup? \| Vivaldi Forum](https://forum.vivaldi.net/topic/120737/window-placement-popup) *(forum.vivaldi.net · 2026-09-02T18:23:29)*
  > Window-placement popup? | Vivaldi Forum Search Register Login Your browser does not seem to support JavaScript. As a result, your viewing experience will be diminished, and you have been placed in read-only mode . Please download a browser that suppo...
- [\[blink-dev\] Intent to Prototype: Creating always-on-top windows](http://www.mail-archive.com/blink-dev@chromium.org/msg17325.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Creating always-on-top windows Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Creating always-on-top windows Tommy Steimel Fri, 28 Aug 2026 15:17:36 -0700 *Contact emails* [email&#160;protected...
- [Permissions](https://w3c.github.io/permissions) *(w3c.github.io · 2025-10-06T00:00:00)*
  > Permissions Permissions Interacting with Permissions for Powerful Features W3C Editor's Draft 06 October 2025 More details about this document This version: https://w3c.github.io/permissions/ Latest published version: https://www.w3.org/TR/permission...
- [html - Display new window fullscreen on second monitor with Javascript - Stack Overflow](https://stackoverflow.com/questions/55836590/display-new-window-fullscreen-on-second-monitor-with-javascript) *(stackoverflow.com)*
  > https://<strong>www.w3.org/TR/window-management</strong>/#usage-overview-place-fullscreen-content-on-a-specific-screen
- [\[Proposal\] Additional Windowing Controls](https://discourse.wicg.io/t/proposal-additional-windowing-controls/6044) *(discourse.wicg.io)*
  > This proposal seeks to enable local web applications to convey a user’s intended window control interactions with remote (or custom) window controls. Summary of the API proposals, which are generally gated by Window Management (“window-placement”) pe...
- [Additional Windowing Controls](https://chromestatus.com/feature/5201832664629248) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [Window Controls (OpenWindows User's Guide)](https://docs.oracle.com/cd/E19455-01/806-2901/6jc3a4m17/index.html) *(docs.oracle.com)*
  > The following examples illustrate the use of window controls on a group of selected windows or icons. To select multiple windows, either click SELECT on one window and ADJUST on additional windows (or icons), or position the pointer on the workspace ...
- [Windowing overview for WinUI and Windows App SDK - Windows apps \| Microsoft Learn](https://learn.microsoft.com/en-us/windows/apps/develop/ui/windowing-overview) *(learn.microsoft.com · 2025-11-24T00:00:00)*
  > If you use WinUI XAML as your app&#x27;s UI framework, both the Window and the AppWindow APIs are available to you. Starting in Windows App SDK 1.4, you can use the Window.AppWindow property to get an AppWindow object from an existing XAML window. Wi...
- [Windows Controls and patterns - Windows app development - Windows apps \| Microsoft Learn](https://learn.microsoft.com/en-us/windows/apps/develop/ui/controls) *(learn.microsoft.com · 2026-05-28T00:00:00)*
  > Install it to try controls in real time and link directly from individual control pages. Get the WinUI 3 Gallery from the Microsoft Store. Get the source code from GitHub. The Windows Community Toolkit is a collection of helpers, extensions, and addi...
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > Tracking bug #492246715 | ChromeStatus.com entry | Spec · <strong>The window-drag CSS property lets web content designate regions of an installed desktop web app UI that behave as draggable window title bar areas</strong>.
- [Chrome 152 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/152) *(chromestatus.com)*
  > This feature standardizes and renames the existing app-region CSS property, changes its value names to move and none, and adds explicit inheritance behavior. This property is used by installed web apps and Electron-based applications for the same pur...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Ready for Developer Testing: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16555.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > [blink-dev] Ready for Developer Testing: Additional Windowing Controls Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: Additional Windowing Controls Chromestatus Tue, 19 May 2026 00:52:56 -0700 Contact emails ...
- [\[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17394.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > [blink-dev] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Additional Windowing Controls Chromestatus Tue, 08 Sep 2026 23:04:36 -0700 Contact emails [email&#160;protected] , [...
- [Screen.isExtended, getScreenDetails, and Multi-Display Development \| Melin's Blog](https://melin.vercel.app/blog/2026-07-30) *(melin.vercel.app)* *(Cites: `https://www.w3.org/TR/window-management/#api-window-minimize-method`)*
  > Screen.isExtended, getScreenDetails, and Multi-Display Development | Melin&#39;s Blog Melin&#39;s Blog Back to blog July 30, 2026 &bull; 7 min read Screen.isExtended, getScreenDetails, and Multi-Display Development Table of Contents Modern ...
- [Window-placement popup? \| Vivaldi Forum](https://forum.vivaldi.net/topic/120737/window-placement-popup) *(forum.vivaldi.net · 2026-09-02T18:23:29)* *(Cites: `https://www.w3.org/TR/window-management/#api-window-minimize-method`)*
  > Window-placement popup? | Vivaldi Forum Search Register Login Your browser does not seem to support JavaScript. As a result, your viewing experience will be diminished, and you have been placed in read-only mode . Please download a browser ...
- [\[blink-dev\] Intent to Prototype: Creating always-on-top windows](http://www.mail-archive.com/blink-dev@chromium.org/msg17325.html) *(mail-archive.com)* *(Cites: `https://www.w3.org/TR/window-management/#api-window-minimize-method`)*
  > [blink-dev] Intent to Prototype: Creating always-on-top windows Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Creating always-on-top windows Tommy Steimel Fri, 28 Aug 2026 15:17:36 -0700 *Contact emails* [email&#160...
- [Permissions](https://w3c.github.io/permissions) *(w3c.github.io · 2025-10-06T00:00:00)* *(Cites: `https://www.w3.org/TR/window-management/#api-window-minimize-method`)*
  > Permissions Permissions Interacting with Permissions for Powerful Features W3C Editor's Draft 06 October 2025 More details about this document This version: https://w3c.github.io/permissions/ Latest published version: https://www.w3.org/TR/...
- [html - Display new window fullscreen on second monitor with Javascript - Stack Overflow](https://stackoverflow.com/questions/55836590/display-new-window-fullscreen-on-second-monitor-with-javascript) *(stackoverflow.com)* *(Cites: `https://www.w3.org/TR/window-management/#api-window-minimize-method`)*
  > https://<strong>www.w3.org/TR/window-management</strong>/#usage-overview-place-fullscreen-content-on-a-specific-screen

## 📚 Platform Documentation & Specifications

- [Additional Windowing Controls · Issue #96 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/96) *(github.com)*
- [GitHub - explainers-by-googlers/additional-windowing-controls: Repository hosting the feature explainer · GitHub](https://github.com/explainers-by-googlers/additional-windowing-controls) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 41 result(s) found across 8 planned queries — **16 verified relevant**
  - `"chromestatus.com/feature/5201832664629248" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/w3c/window-management/blob/main/EXPLAINER_additional_windowing_controls.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"www.w3.org/TR/window-management" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (6 returned)
  - `"Additional Windowing Controls" API` — *Core feature API query* (5 returned)
  - `"Additional Windowing Controls" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromestatus.com" OR "window-management" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Additional Windowing Controls" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Additional Windowing Controls" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 5 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 12 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5201832664629248)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5201832664629248)
- [Specification](https://www.w3.org/TR/window-management/#api-window-minimize-method)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40192345)
