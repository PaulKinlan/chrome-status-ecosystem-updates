# Additional Windowing Controls

> **Report Week:** 2026-W46 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Enables web applications with the window-management permission to maximize(), minimize(), and restore() their windows, and to prevent resizing through setResizable(). Additionally, new CSS media features display-state and resizable enable scripts and content to adapt to the respective window states and resizability. These features improve the usability of VDI remote application windows in Web clients, especially when it comes to titlebar window controls. The new functionality enhances existing Window Management API features: https://chromestatus.com/feature/5252960583942144

### Motivation

Virtual Desktop Infrastructure (VDI) web clients have limited abilities to integrate remote application windows with the local desktop environment, which creates suboptimal experiences for their users. Currently, they can only present full disjoint remote desktop environments (e.g. in a local fullscreen window), or present individual remote applications in separate local windows with titlebar window controls that are inoperative, redundant, and confusing for users.

## Ecosystem Status

- **Momentum:** Quiet (0 points since 2026-10-12; footprint 300 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Additional Windowing Controls expand the Window Management API with programmatic window state methods (\`maximize()\`, \`minimize()\`, \`restore()\`, and \`setResizable()\`) and corresponding CSS media features (\`display-state\` and \`resizable\`). Shipped by default in Chromium-based browsers (Chrome and Edge 155), the API bridges severe usability gaps for enterprise Virtual Desktop Infrastructure (VDI) web clients and custom-titlebar desktop PWAs. However, the feature lacks broader multi-engine consensus, remaining entirely unsupported across Gecko and WebKit engines.

### Recommendations
- Actionable Advice: Treat this feature strictly as an optional progressive enhancement for installed desktop PWAs and VDI interfaces. Always guard method invocations behind permission checks for the \`window-management\` permission, transient user activation, and feature-detection fallback layouts for non-Chromium clients.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @sonkkeli: "Hey, I'm jumping in here as I'm continuing on Ivan's work.  There were some updates made on the proposed APIs and the current proposals are at least a..."
- Standards Activity (Mozilla): Latest discussion from @michaelwasserman: "Client application window controls may indeed be limited by the OS, Window Manager, protocols, utilities, and modalities. The API surface offers coher..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [Additional Windowing Controls](https://github.com/WebKit/standards-positions/issues/96) [open]
- **Mozilla:** [Additional Windowing Controls](https://github.com/mozilla/standards-positions/issues/712) [open]
- **W3C TAG:** [WG New Spec: Additional Windowing Controls](https://github.com/w3ctag/design-reviews/issues/1246) [open]

## Web-features Group

*group-level data: web-features [`window-management`](https://webstatus.dev/features/window-management), shared with 6 other ChromeStatus features*

- Share of tests passing in the web-features group `window-management` on [wpt.fyi](https://wpt.fyi/results?q=feature:window-management) (via webstatus.dev) — stable: Chrome 100% · Edge 100% · Firefox 0% · Safari 0%; experimental: Chrome 100% · Edge 100% · Firefox 0% · Safari 0%
- **Chrome usage:** 0.00012% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/332))

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X](https://x.com/ChromiumDev/status/2105325011116646507) — *by @ChromiumDev, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [openpwa.net](https://openpwa.net/reference/capabilities/window-management) *(openpwa.net)*
  > These methods return promises and require the \`window-management\` permission, transient user activation, and an isolated window context (such as an installed desktop PWA or standalone popup window) \*\*Permission & Activation Gates:\*\* Must check \`navig...
- [netlify.app](https://alexanderburgos.netlify.app/blog/chrome-155-window-management-pwas) *(alexanderburgos.netlify.app)*
  > \`display-state\`: evaluates to \`normal\`, \`minimized\`, \`maximized\`, or \`fullscreen\` \`resizable\`: evaluates to \`true\` or \`false\`
- [Chrome 155 beta  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com)*
  > Announced the desktop release of Additional Windowing Controls The Chrome team highlighted that this fills a critical gap for VDI clients where remote application windows in web apps previously had inoperative, duplicate, or awkward native titlebar c...
- [Microsoft Edge 155 web platform release notes (Oct. 8, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/155) *(learn.microsoft.com)*
  > Edge highlighted the API's arrival for desktop PWAs, noting how pairing it with the Window Controls Overlay (WCO) API allows PWAs to fully render and control their custom titlebars seamlessly alongside native OS controls
- [googlesource.com](https://chromium.googlesource.com/chromium/src/+/5af3d5cbf0b251c8b399dd7357ba569b7999a365) *(chromium.googlesource.com)*
  > \*\*WPT Integration:\*\* Web Platform Tests migrated to \`wpt/css/mediaqueries/display-state.tentative.html\`, \`resizable.tentative.html\`, and \`wpt/window-management/additional-windowing-controls.tentative.https.html\` across Chromium, Firefox, and WebKit t...
- [wpt.fyi](https://wpt.fyi/results/window-management/additional-windowing-controls.tentative.https.html) *(wpt.fyi)*
  > \*\*WPT Integration:\*\* Web Platform Tests migrated to \`wpt/css/mediaqueries/display-state.tentative.html\`, \`resizable.tentative.html\`, and \`wpt/window-management/additional-windowing-controls.tentative.https.html\` across Chromium, Firefox, and WebKit t...
- [\[blink-dev\] Ready for Developer Testing: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16555.html) *(mail-archive.com)*
  > \[blink-dev\] Ready for Developer Testing: Additional Windowing Controls Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Additional Windowing Controls Chromestatus Tue, 19 May 2026 00:52:56 -0700 Contact emails \[email&#16...
- [\[blink-dev\] Re: Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17441.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Additional Windowing Controls Vladimir Levin Mon, 14 Sep 2026 08:57:02 -0700 LGTM1 On Wednesday, September 9, 2026 at ...
- [Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17442.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls Chris Harrelson Mon, 14 Sep 2026 09:14:30 -0700 LGTM2 On Tue, Sep 8, 2026 at 11:03 PM Ch...
- [\[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17394.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Additional Windowing Controls Chromestatus Tue, 08 Sep 2026 23:04:36 -0700 Contact emails \[email&#160;protected\] , \[email&#160...
- [Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17444.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls Mike Taylor Mon, 14 Sep 2026 09:42:49 -0700 LGTM3 On 9/14/26 12:05 p.m., Chris Harrelson...
- [\[Proposal\] Additional Windowing Controls](https://discourse.wicg.io/t/proposal-additional-windowing-controls/6044) *(discourse.wicg.io)*
  > This proposal seeks to enable local web applications to convey a user’s intended window control interactions with remote (or custom) window controls. Summary of the API proposals, which are generally gated by Window Management (“window-placement”) pe...
- [Chrome 155 beta \| Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/article/2105325011116646507) *(x.com · 2026-09-30T15:48:01)*
  > Lets web applications with the window-management permission maximize(), minimize(), and restore() their windows, and prevent resizing through setResizable(). Additionally, new CSS media features display-state and resizable enable scripts and content ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Ready for Developer Testing: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16555.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > \[blink-dev\] Ready for Developer Testing: Additional Windowing Controls Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Additional Windowing Controls Chromestatus Tue, 19 May 2026 00:52:56 -0700 Contact emails ...
- [Add data for window-management-resizing by Elchi3 · Pull Request #30912 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30912) *(github.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > Chromestatus: https://&lt;strong&gt;chromestatus.com/feature/5201832664629248&lt;/strong&gt;
- [Additional Windowing Controls · Issue #1364 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1364) *(github.com · 2026-08-20T17:03:51)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > Additional Windowing Controls · Issue #1364 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh you...
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > Window controls, https://&lt;strong&gt;chromestatus.com/feature/5201832664629248&lt;/strong&gt;
- [\[blink-dev\] Re: Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17441.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > \[blink-dev\] Re: Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Additional Windowing Controls Vladimir Levin Mon, 14 Sep 2026 08:57:02 -0700 LGTM1 On Wednesday, September 9...
- [Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17442.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls Chris Harrelson Mon, 14 Sep 2026 09:14:30 -0700 LGTM2 On Tue, Sep 8, 2026 at 1...
- [Additional Windowing Controls · Issue #4257 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4257) *(github.com · 2026-08-20T17:00:48)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > Additional Windowing Controls · Issue #4257 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your sessio...
- [\[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17394.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > \[blink-dev\] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Additional Windowing Controls Chromestatus Tue, 08 Sep 2026 23:04:36 -0700 Contact emails \[email&#160;protected\] , \[...
- [Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17444.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/window-management/blob/main/EXPLAINER_additional_windowing_controls.md`)*
  > Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls Mike Taylor Mon, 14 Sep 2026 09:42:49 -0700 LGTM3 On 9/14/26 12:05 p.m., Chris...
- [Re: Additional Windowing Controls TAG Review Request from Mike Wasserman on 2026-07-24 (public-secondscreen@w3.org from July 2026)](https://lists.w3.org/Archives/Public/public-secondscreen/2026Jul/0004.html) *(lists.w3.org)* *(Cites: `https://github.com/w3c/window-management/blob/main/EXPLAINER_additional_windowing_controls.md`)*
  > On Tue, Jul 14, 2026 at 11:26 AM Mike Wasserman &lt;msw@google.com&gt; wrote: &gt; Greetings Second Screen WG, &gt; &gt; The Window Management spec recently accepted Additional Windowing Controls &gt; additions (explainer &gt; &lt;https://&lt;...

## 📚 Platform Documentation & Specifications

- [GitHub - explainers-by-googlers/additional-windowing-controls: Repository hosting the feature explainer · GitHub](https://github.com/explainers-by-googlers/additional-windowing-controls) *(github.com)*
- [\[mediaqueries-5\] Add 'display-state' and 'resizable' media feature · Issue #14428 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/14428) *(github.com)*
- [Additional Windowing Controls · Issue #96 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/96) *(github.com)*
- [Add data for window-management-resizing by Elchi3 · Pull Request #30912 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30912) *(github.com)*
- [Additional Windowing Controls · Issue #1364 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1364) *(github.com)*
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)*
- [Additional Windowing Controls · Issue #4257 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4257) *(github.com)*
- [Re: Additional Windowing Controls TAG Review Request from Mike Wasserman on 2026-07-24 (public-secondscreen@w3.org from July 2026)](https://lists.w3.org/Archives/Public/public-secondscreen/2026Jul/0004.html) *(lists.w3.org)*
- [Extend the Window Management API with Additional Windowing Controls · Issue #158 · w3c/window-management · GitHub](https://github.com/w3c/window-management/issues/158) *(github.com)*
- [window-management/security\_and\_privacy\_additional\_windowing\_controls.md at main · w3c/window-management · GitHub](https://github.com/w3c/window-management/blob/main/security_and_privacy_additional_windowing_controls.md) *(github.com)*
- [Window resizing · Issue #968 · web-platform-dx/developer-signals · GitHub](https://github.com/web-platform-dx/developer-signals/issues/968) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 69 result(s) found across 13 planned queries — **20 verified relevant**
  - `"chromestatus.com/feature/5201832664629248" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (8 returned)
  - `"github.com/w3c/window-management/blob/main/EXPLAINER_additional_windowing_controls.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (5 returned)
  - `"www.w3.org/TR/window-management" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Additional Windowing Controls" API` — *Core feature API query* (8 returned)
  - `"Additional Windowing Controls" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromestatus.com" OR "window-management" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Additional Windowing Controls" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Additional Windowing Controls" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Additional Windowing Controls" OR "window-management" "setResizable" tutorial OR guide` — *Find developer guides and practical walkthroughs for using the additional windowing controls API and permissions.* (8 returned)
  - `"window.minimize()" OR "window.maximize()" OR "setResizable" "display-state" code OR github` — *Locate real-world JavaScript implementation snippets and CSS display-state media queries in repositories.* (8 returned)
  - `"Additional Windowing Controls" "intent to ship" OR "intent to prototype" chromium` — *Track browser vendor roadmaps, implementation status, and Intent-to-Ship discussions across Chromium.* (8 returned)
  - `"Additional Windowing Controls" (VDI OR "virtual desktop" OR remote application) windowing` — *Discover discussions, industry feedback, and architecture designs around remote desktop integration for web applications.* (8 returned)
  - `"@media (display-state:" OR "@media (resizable:" window controls CSS` — *Search for CSS style examples that adapt user interfaces based on the new display-state and resizable media features.* (1 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **1 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "window-management", shared with 6 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "window-management": Chrome 100% passing (stable)*
- **Sources cited by the AI synthesis:** 4 result(s) found — **4 verified relevant**

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
