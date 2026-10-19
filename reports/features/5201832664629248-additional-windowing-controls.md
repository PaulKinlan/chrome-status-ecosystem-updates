# Additional Windowing Controls

> **Report Week:** 2026-W43 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Enables web applications with the window-management permission to maximize(), minimize(), and restore() their windows, and to prevent resizing through setResizable(). Additionally, new CSS media features display-state and resizable enable scripts and content to adapt to the respective window states and resizability. These features improve the usability of VDI remote application windows in Web clients, especially when it comes to titlebar window controls. The new functionality enhances existing Window Management API features: https://chromestatus.com/feature/5252960583942144

### Motivation

Virtual Desktop Infrastructure (VDI) web clients have limited abilities to integrate remote application windows with the local desktop environment, which creates suboptimal experiences for their users. Currently, they can only present full disjoint remote desktop environments (e.g. in a local fullscreen window), or present individual remote applications in separate local windows with titlebar window controls that are inoperative, redundant, and confusing for users.

## Ecosystem Status

- **Momentum:** Moderate (footprint 210 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Additional Windowing Controls extend the Window Management API to let web apps programmatically maximize, minimize, restore, and restrict resizing via setResizable() alongside related CSS media features. While shipping in Chrome 155 with strong backing for Virtual Desktop Infrastructure (VDI) use cases, it remains restricted to Chromium, facing open horizontal reviews and cautious security scrutiny from other vendors.

### Recommendations
- Actionable Advice: Web development teams building advanced PWA or VDI workspace clients should test the feature using Chrome flags and implement robust fallbacks. Use feature detection and progressive enhancement patterns for standard browsers that do not support advanced window manipulation.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @sonkkeli: "Hey, I'm jumping in here as I'm continuing on Ivan's work.  There were some updates made on the proposed APIs and the current proposals are at least a..."
- Standards Activity (Mozilla): Latest discussion from @michaelwasserman: "Client application window controls may indeed be limited by the OS, Window Manager, protocols, utilities, and modalities. The API surface offers coher..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Additional Windowing Controls](https://github.com/WebKit/standards-positions/issues/96) [open]
- **Mozilla:** [Additional Windowing Controls](https://github.com/mozilla/standards-positions/issues/712) [open]
- **W3C TAG:** [WG New Spec: Additional Windowing Controls](https://github.com/w3ctag/design-reviews/issues/1246) [open]

## Web-features Group

*group-level data: web-features [`window-management`](https://webstatus.dev/features/window-management), shared with 6 other ChromeStatus features*

- Share of tests passing in the web-features group `window-management` on [wpt.fyi](https://wpt.fyi/results?q=feature:window-management) (via webstatus.dev) — stable: Chrome 100% · Edge 100% · Firefox 0% · Safari 0%; experimental: Chrome 100% · Edge 100% · Firefox 0% · Safari 0%
- **Chrome usage:** 0.00029% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/332))

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17442.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls Chris Harrelson Mon, 14 Sep 2026 09:14:30 -0700 LGTM2 On Tue, Sep 8, 2026 at 11:03 PM Ch...
- [\[blink-dev\] Re: Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17441.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Additional Windowing Controls Vladimir Levin Mon, 14 Sep 2026 08:57:02 -0700 LGTM1 On Wednesday, September 9, 2026 at ...
- [\[blink-dev\] Ready for Developer Testing: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16555.html) *(mail-archive.com)*
  > \[blink-dev\] Ready for Developer Testing: Additional Windowing Controls Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Additional Windowing Controls Chromestatus Tue, 19 May 2026 00:52:56 -0700 Contact emails \[email&#16...
- [\[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17394.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Additional Windowing Controls Chromestatus Tue, 08 Sep 2026 23:04:36 -0700 Contact emails \[email&#160;protected\] , \[email&#160...
- [Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17444.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls Mike Taylor Mon, 14 Sep 2026 09:42:49 -0700 LGTM3 On 9/14/26 12:05 p.m., Chris Harrelson...
- [\[Proposal\] Additional Windowing Controls](https://discourse.wicg.io/t/proposal-additional-windowing-controls/6044) *(discourse.wicg.io)*
  > This proposal seeks to enable local web applications to convey a user’s intended window control interactions with remote (or custom) window controls. Summary of the API proposals, which are generally gated by Window Management (“window-placement”) pe...
- [Chrome 155 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com · 2026-09-16T00:00:00)*
  > &lt;strong&gt;Lets web applications with the window-management permission maximize(), minimize(), and restore() their windows, and prevent resizing through setResizable().&lt;/strong&gt; Additionally, new CSS media features display-state and resizable enable scr...
- [Chrome 155 beta \| Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/article/2105325011116646507) *(x.com · 2026-09-30T15:48:01)*
  > ... &lt;strong&gt;Lets web applications with the window-management permission maximize(), minimize(), and restore() their windows, and prevent resizing through setResizable().&lt;/strong&gt; Additionally, new CSS media features display-state and resizable enable...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Additional Windowing Controls · Issue #1364 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1364) *(github.com · 2026-08-20T17:03:51)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > Additional Windowing Controls · Issue #1364 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. R...
- [Additional Windowing Controls · Issue #4257 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4257) *(github.com · 2026-08-20T17:00:48)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > Additional Windowing Controls · Issue #4257 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to...
- [Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17442.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls Chris Harrelson Mon, 14 Sep 2026 09:14:30 -0700 LGTM2 On Tue, Sep 8, 2026 at 1...
- [\[blink-dev\] Re: Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17441.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > \[blink-dev\] Re: Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Additional Windowing Controls Vladimir Levin Mon, 14 Sep 2026 08:57:02 -0700 LGTM1 On Wednesday, September 9...
- [\[blink-dev\] Ready for Developer Testing: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16555.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > \[blink-dev\] Ready for Developer Testing: Additional Windowing Controls Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Additional Windowing Controls Chromestatus Tue, 19 May 2026 00:52:56 -0700 Contact emails ...
- [\[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17394.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > \[blink-dev\] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Additional Windowing Controls Chromestatus Tue, 08 Sep 2026 23:04:36 -0700 Contact emails \[email&#160;protected\] , \[...
- [Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17444.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/window-management/blob/main/EXPLAINER_additional_windowing_controls.md`)*
  > Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls Mike Taylor Mon, 14 Sep 2026 09:42:49 -0700 LGTM3 On 9/14/26 12:05 p.m., Chris...

## 📚 Platform Documentation & Specifications

- [GitHub - explainers-by-googlers/additional-windowing-controls: Repository hosting the feature explainer · GitHub](https://github.com/explainers-by-googlers/additional-windowing-controls) *(github.com)*
- [Additional Windowing Controls · Issue #96 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/96) *(github.com)*
- [Additional Windowing Controls · Issue #1364 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1364) *(github.com)*
- [Additional Windowing Controls · Issue #4257 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4257) *(github.com)*
- [additional-windowing-controls/awc-explainer.md at main · explainers-by-googlers/additional-windowing-controls](https://github.com/ivansandrk/additional-windowing-controls/blob/main/awc-explainer.md) *(github.com)*
- [GitHub - w3c/window-management: Window Management API · GitHub](https://github.com/w3c/window-management) *(github.com)*
- [Second Screen WG/CG - TPAC 2026 agenda · Issue #15 · w3c/secondscreen-wg](https://github.com/w3c/secondscreen-wg/issues/15) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 56 result(s) found across 12 planned queries — **15 verified relevant**
  - `"chromestatus.com/feature/5201832664629248" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (7 returned)
  - `"github.com/w3c/window-management/blob/main/EXPLAINER_additional_windowing_controls.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"www.w3.org/TR/window-management" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"Additional Windowing Controls" API` — *Core feature API query* (8 returned)
  - `"Additional Windowing Controls" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromestatus.com" OR "window-management" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Additional Windowing Controls" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Additional Windowing Controls" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
  - `"Additional Windowing Controls" (tutorial OR guide OR "developer.chrome.com") window.maximize` — *Finds developer guides and Chromium blog posts explaining implementation of the new windowing control methods.* (8 returned)
  - `"window.setResizable" ("window.maximize" OR "window.minimize") "display-state"` — *Locates real-world JavaScript and CSS code snippets utilizing both the method calls and new media queries.* (8 returned)
  - `"Additional Windowing Controls" ("Intent to Ship" OR "Origin Trial" OR "VDI")` — *Identifies Chromium status updates, release tracking, and adoption in VDI web applications.* (6 returned)
  - `"Additional Windowing Controls" site:github.com/w3c OR site:github.com/mozilla OR site:webkit.org` — *Surfaces standards discussions, vendor position requests, and spec feedback across browser engines.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 4 result(s) found — **2 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "window-management", shared with 6 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "window-management": Chrome 100% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 12 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5201832664629248)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5201832664629248)
- [Specification](https://www.w3.org/TR/window-management/#api-window-minimize-method)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40192345)
