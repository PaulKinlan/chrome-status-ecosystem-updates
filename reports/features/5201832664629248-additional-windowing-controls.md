# Additional Windowing Controls

> **Report Week:** 2026-W44 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Enables web applications with the window-management permission to maximize(), minimize(), and restore() their windows, and to prevent resizing through setResizable(). Additionally, new CSS media features display-state and resizable enable scripts and content to adapt to the respective window states and resizability. These features improve the usability of VDI remote application windows in Web clients, especially when it comes to titlebar window controls. The new functionality enhances existing Window Management API features: https://chromestatus.com/feature/5252960583942144

### Motivation

Virtual Desktop Infrastructure (VDI) web clients have limited abilities to integrate remote application windows with the local desktop environment, which creates suboptimal experiences for their users. Currently, they can only present full disjoint remote desktop environments (e.g. in a local fullscreen window), or present individual remote applications in separate local windows with titlebar window controls that are inoperative, redundant, and confusing for users.

## Ecosystem Status

- **Momentum:** Moderate (footprint 300 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Additional Windowing Controls (AWC) expands the Window Management API in Chromium browsers, granting web applications imperative methods to maximize, minimize, restore, and lock window resizability alongside declarative CSS media features like display-state and resizable. The API is explicitly driven by enterprise Virtual Desktop Infrastructure (VDI) clients like Citrix and VMware that need seamless remote desktop window control. However, it remains a Chromium-exclusive capability with zero implementation interest from competing browser engines, reinforcing a fragmented desktop web platform.

### Recommendations
- Actionable Advice: Teams building enterprise desktop PWAs or VDI portals should adopt these controls purely as a progressive enhancement, gating calls behind transient user activation and feature detection of the window-management permission. General consumer-facing web projects should avoid these APIs entirely and rely on standard responsive layouts rather than attempting to manipulate window states directly.
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
- **Chrome usage:** 0.00027% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/332))

## 📰 Ecosystem Blogs & Articles

- [chromium.org](https://issues.chromium.org/issues/543983519) *(issues.chromium.org)*
  > These require the \`window-management\` permission and transient user activation (such as a click on a title-bar button) Security guardrails: Guarding the methods behind explicit permissions, requiring user activation to prevent web abuse (e.g., spam-m...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/155) *(learn.microsoft.com)*
  > \*\*Declarative CSS Media Features:\*\* \`@media (display-state: ...)\` (evaluating values like \`normal\`, \`minimized\`, \`maximized\`, or \`fullscreen\`) and \`@media (resizable: ...)\` \*\*Declarative CSS Media Features:\*\* \`@media (display-state: ...)\` (evaluating...
- [Chrome 155 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com)*
  > \*\*Chrome 155 Beta Release Notes (developer.chrome.com):\*\* Google announced shipping Additional Windowing Controls as part of its core Web APIs The writeup highlights the combination of the \`window-management\` permission with window-state methods and ...
- [github.io](https://mefody.github.io/fugu-detector) *(mefody.github.io)*
  > \*\*Feature Explainer (GitHub / WICG):\*\* Authored by Chromium engineers (notably Ivan Šandrk), the explainer breaks down the core architecture
- [openpwa.net](https://openpwa.net/reference/capabilities/window-management) *(openpwa.net)*
  > Security guardrails: Guarding the methods behind explicit permissions, requiring user activation to prevent web abuse (e.g., spam-minimizing or trapping users), and limiting functionality to installed PWAs \*\*OpenPWA: \*Window Management API Guide\*:\*\* ...
- [progressivewebapps.com](https://progressivewebapps.com/capabilities/window-controls-overlay) *(progressivewebapps.com)*
  > \*\*OpenPWA: \*Window Controls Overlay: Custom PWA Title Bars\*:\*\* Discusses how Additional Windowing Controls serves as the missing puzzle piece for the Window Controls Overlay (WCO) API While WCO allows developers to place custom web content inside the...
- [googlesource.com](https://chromium.googlesource.com/chromium/src/+/126ae9c7fa7eb8331235b9467031c2dcdaaf30f0/chrome/browser/flag_descriptions.cc) *(chromium.googlesource.com)*
  > While WCO allows developers to place custom web content inside the title bar, AWC provides the actual logic to recreate functional minimize, maximize, and restore buttons inside that custom UI
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
- [Chrome 155 beta \| Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/article/2105325011116646507) *(x.com · 2026-09-30T15:48:01)*
  > ... &lt;strong&gt;Lets web applications with the window-management permission maximize(), minimize(), and restore() their windows, and prevent resizing through setResizable().&lt;/strong&gt; Additionally, new CSS media features display-state and resizable enable...
- [Chrome Platform Status](https://cr-status.appspot.com/feature/5201832664629248) *(cr-status.appspot.com)*
  > Chrome Platform Status
- [web-platform-tests dashboard](https://wpt.fyi/results/window-management/additional-windowing-controls.tentative.https.html) *(wpt.fyi)*
  > web-platform-tests dashboard

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

- [github.com](https://github.com/w3ctag/design-reviews/issues/1246) *(github.com)*
- [GitHub - explainers-by-googlers/additional-windowing-controls: Repository hosting the feature explainer · GitHub](https://github.com/explainers-by-googlers/additional-windowing-controls) *(github.com)*
- [Additional Windowing Controls · Issue #96 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/96) *(github.com)*
- [github.com](https://github.com/mozilla/standards-positions/issues/938) *(github.com)*
- [Additional Windowing Controls · Issue #1364 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1364) *(github.com)*
- [Additional Windowing Controls · Issue #4257 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4257) *(github.com)*
- [additional-windowing-controls/awc-explainer.md at main · explainers-by-googlers/additional-windowing-controls](https://github.com/ivansandrk/additional-windowing-controls/blob/main/awc-explainer.md) *(github.com)*
- [\[mediaqueries-5\] Add 'display-state' and 'resizable' media feature · Issue #14428 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14428) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 69 result(s) found across 13 planned queries — **14 verified relevant**
  - `"chromestatus.com/feature/5201832664629248" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (7 returned)
  - `"github.com/w3c/window-management/blob/main/EXPLAINER_additional_windowing_controls.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"www.w3.org/TR/window-management" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"Additional Windowing Controls" API` — *Core feature API query* (7 returned)
  - `"Additional Windowing Controls" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromestatus.com" OR "window-management" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Additional Windowing Controls" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Additional Windowing Controls" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Additional Windowing Controls" (PWA OR "web app") (guide OR tutorial OR overview)` — *Finds developer guides and articles explaining how to implement and use the Additional Windowing Controls features in PWAs and web apps.* (8 returned)
  - `("window.minimize" OR "window.maximize" OR "setResizable") "window-management"` — *Identifies code snippets and documentation illustrating the JavaScript WebIDL methods for window state manipulation.* (8 returned)
  - `"@media (display-state" OR "@media (resizable" (CSS OR "media feature")` — *Discovers practical CSS examples and documentation utilizing the display-state and resizable media queries.* (8 returned)
  - `"Additional Windowing Controls" ("Intent to Ship" OR "standards-positions" OR ChromeStatus)` — *Tracks browser vendor positions (Mozilla, WebKit) and Chromium release milestones for this feature.* (6 returned)
  - `"Additional Windowing Controls" (VDI OR "virtual desktop" OR Citrix OR VMware) (feedback OR issue OR discussion)` — *Surfaces community and enterprise discussions focusing on VDI client window management requirements and real-world feedback.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "window-management", shared with 6 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "window-management": Chrome 100% passing (stable)*
- **Sources cited by the AI synthesis:** 5 result(s) found — **5 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 12 engineer comment(s) read
- **Web Page Excerpts Ingested:** 10 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5201832664629248)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5201832664629248)
- [Specification](https://www.w3.org/TR/window-management/#api-window-minimize-method)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40192345)
