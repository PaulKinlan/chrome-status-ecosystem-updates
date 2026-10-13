# Additional Windowing Controls

> **Report Week:** 2026-W42 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Enables web applications with the window-management permission to maximize(), minimize(), and restore() their windows, and to prevent resizing through setResizable(). Additionally, new CSS media features display-state and resizable enable scripts and content to adapt to the respective window states and resizability. These features improve the usability of VDI remote application windows in Web clients, especially when it comes to titlebar window controls. The new functionality enhances existing Window Management API features: https://chromestatus.com/feature/5252960583942144

### Motivation

Virtual Desktop Infrastructure (VDI) web clients have limited abilities to integrate remote application windows with the local desktop environment, which creates suboptimal experiences for their users. Currently, they can only present full disjoint remote desktop environments (e.g. in a local fullscreen window), or present individual remote applications in separate local windows with titlebar window controls that are inoperative, redundant, and confusing for users.

## Ecosystem Status

- **Momentum:** High (footprint 300 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Additional Windowing Controls expands the Window Management API with programmatic window state methods and CSS media features tailored primarily for enterprise Virtual Desktop Infrastructure (VDI) and desktop Progressive Web Apps. The API is shipping enabled-by-default in Chromium-based browsers such as Chrome and Microsoft Edge, but it remains a single-engine capability with zero cross-browser interoperability. While welcomed by specialized remote-desktop vendors, non-Chromium browser engines remain unaligned due to long-standing user experience and privacy reservations.

### Recommendations
- Actionable Advice: Treat this API strictly as an optional progressive enhancement for installed desktop PWAs and enterprise VDI web applications targeting Chromium environments. Applications must guard calls with feature detection for window methods, check the window-management permission, and avoid coupling core UI functionality to display-state media queries.
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
- **Chrome usage:** 0.00012% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/332))

## 📰 Ecosystem Blogs & Articles

- [googlesource.com](https://chromium.googlesource.com/experimental/chromium/src/+/refs/heads/main/chrome/browser/flag_descriptions.h) *(chromium.googlesource.com)*
  > The \*\*Additional Windowing Controls (AWC)\*\* feature extends the \*\*Window Management API\*\* to give installed Progressive Web Apps (PWAs) and enterprise web applications native-like control over OS window states
- [chromium.org](https://issues.chromium.org/issues/543983519) *(issues.chromium.org)*
  > These methods typically require transient user activation to avoid unprompted window manipulations moveTo()\`), emphasizing the need for strict permission gating and transient activation guarantees
- [Chrome 155 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com)*
  > Official Browser Announcements (\`developer.chrome.com\` & Microsoft Edge) \* \*\*Chrome Platform Status & Chrome 155 Beta Announcements:\*\* The feature graduated through dev trials and origin trials before shipping enabled-by-default on desktop in Chrome ...
- [microsoft.com](https://learn.microsoft.com/ga-ie/microsoft-edge/web-platform/release-notes/155) *(learn.microsoft.com)*
  > \* \*\*Microsoft Edge 155 Web Platform Release Notes:\*\* Edge officially included support for the Additional Windowing Controls, adopting both the JS methods under the \`window-management\` permission and the accompanying CSS media features
- [ecosyste.ms](https://issues.ecosyste.ms/hosts/GitHub/repositories/w3c%2Fcsswg-drafts/issues) *(issues.ecosyste.ms)*
  > \* \*\*CSS Working Group (CSSWG Media Queries Level 5 – Issue #14428):\*\* Discussion within the CSSWG focused on separating the introspection aspect from the JavaScript API By standardizing \`display-state\` and \`resizable\` directly in Media Queries Level ...
- [web.dev](https://web.dev/articles/window-controls-overlay) *(web.dev)*
  > By standardizing \`display-state\` and \`resizable\` directly in Media Queries Level 5, authors avoid polling window dimensions via JavaScript, allowing apps paired with the \*\*Window Controls Overlay (WCO)\*\* API to toggle maximize/restore button icons de...
- [chromestatus.com](https://chromestatus.com/reports/external_reviews/gecko) *(chromestatus.com)*
  > Ecosystem Reactions & Standards Positions \* \*\*Mozilla Firefox (Standards Position #712):\*\* Mozilla’s position review reflected skepticism regarding user annoyance and security moveTo()\`), emphasizing the need for strict permission gating and transien...
- [webkit.org](https://webkit.org/standards-positions) *(webkit.org)*
  > \* \*\*Apple WebKit (Safari Standards Position #96):\*\* WebKit tracked the proposal under user privacy and annoyance risks
- [chrome.com](https://developer.chrome.com/docs/capabilities/web-apis/window-management) *(developer.chrome.com)*
  > Apple's concerns centered around fingerprinting surface increases from screen/window state inspection and ensuring that rogue web pages cannot hijack OS-level window management without explicit user consent
- [\[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17394.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Additional Windowing Controls Chromestatus Tue, 08 Sep 2026 23:04:36 -0700 Contact emails \[email&#160;protected\] , \[email&#160...
- [\[blink-dev\] Re: Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17441.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Additional Windowing Controls Vladimir Levin Mon, 14 Sep 2026 08:57:02 -0700 LGTM1 On Wednesday, September 9, 2026 at ...
- [Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17442.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls Chris Harrelson Mon, 14 Sep 2026 09:14:30 -0700 LGTM2 On Tue, Sep 8, 2026 at 11:03 PM Ch...
- [\[Proposal\] Additional Windowing Controls](https://discourse.wicg.io/t/proposal-additional-windowing-controls/6044) *(discourse.wicg.io)*
  > This proposal seeks to enable local web applications to convey a user’s intended window control interactions with remote (or custom) window controls. Summary of the API proposals, which are generally gated by Window Management (“window-placement”) pe...
- [\[blink-dev\] Ready for Developer Testing: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16555.html) *(mail-archive.com)*
  > The window management permission will be required for the new JS APIs (window.maximize()/minimize()/restore()/setResizable(bool)). The new CSS media features display-state and resizable are not gated behind a permission as they can follow the non-AWC...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Additional Windowing Controls · Issue #4257 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4257) *(github.com · 2026-08-20T17:00:48)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > Additional Windowing Controls · Issue #4257 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to...
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window...
- [\[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17394.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/window-management/blob/main/EXPLAINER_additional_windowing_controls.md`)*
  > \[blink-dev\] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Additional Windowing Controls Chromestatus Tue, 08 Sep 2026 23:04:36 -0700 Contact emails \[email&#160;protected\] , \[...
- [\[blink-dev\] Re: Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17441.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/window-management/blob/main/EXPLAINER_additional_windowing_controls.md`)*
  > \[blink-dev\] Re: Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Additional Windowing Controls Vladimir Levin Mon, 14 Sep 2026 08:57:02 -0700 LGTM1 On Wednesday, September 9...
- [Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17442.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/window-management/blob/main/EXPLAINER_additional_windowing_controls.md`)*
  > Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls Chris Harrelson Mon, 14 Sep 2026 09:14:30 -0700 LGTM2 On Tue, Sep 8, 2026 at 1...

## 📚 Platform Documentation & Specifications

- [Additional Windowing Controls · Issue #1364 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1364) *(github.com)*
- [Additional Windowing Controls · Issue #96 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/96) *(github.com)*
- [w3.org](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1246) *(tag-github-bot.w3.org)*
- [w3.org](https://lists.w3.org/Archives/Public/public-css-archive/2026Sep/0052.html) *(lists.w3.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Window/setResizable) *(developer.mozilla.org)*
- [Additional Windowing Controls · Issue #4257 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4257) *(github.com)*
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)*
- [GitHub - explainers-by-googlers/additional-windowing-controls: Repository hosting the feature explainer · GitHub](https://github.com/explainers-by-googlers/additional-windowing-controls) *(github.com)*
- [additional-windowing-controls/awc-explainer.md at main · explainers-by-googlers/additional-windowing-controls](https://github.com/ivansandrk/additional-windowing-controls/blob/main/awc-explainer.md) *(github.com)*
- [GitHub - w3c/window-management: Window Management API · GitHub](https://github.com/w3c/window-management) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 60 result(s) found across 12 planned queries — **13 verified relevant**
  - `"chromestatus.com/feature/5201832664629248" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/w3c/window-management/blob/main/EXPLAINER_additional_windowing_controls.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"www.w3.org/TR/window-management" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Additional Windowing Controls" API` — *Core feature API query* (8 returned)
  - `"Additional Windowing Controls" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromestatus.com" OR "window-management" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Additional Windowing Controls" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Additional Windowing Controls" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
  - `"Additional Windowing Controls" (tutorial OR guide OR "developer.chrome.com")` — *Finds technical overviews, developer walkthroughs, and official Chrome Developer release articles.* (8 returned)
  - `("window.maximize()" OR "window.setResizable" OR "window.minimize()") "@media (display-state"` — *Surfaces practical JavaScript and CSS code snippets utilizing the Window Management API methods and media features.* (8 returned)
  - `"Additional Windowing Controls" ("Intent to Ship" OR "Chromium" OR "VDI" OR Citrix)` — *Tracks browser engine implementation milestones, Intent-to-Ship announcements, and VDI industry adoption.* (6 returned)
  - `"Additional Windowing Controls" (site:github.com/mozilla/standards-positions OR site:github.com/WebKit/standards-positions OR site:github.com/w3c)` — *Discovers vendor standards positions, security/privacy deliberations, and specification feedback across browser vendors.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 17 result(s) found — **14 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
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
