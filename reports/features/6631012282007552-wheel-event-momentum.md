# Wheel event momentum

> **Report Week:** 2026-W38 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Exposes a momentum attribute in wheel events to mark native platforms events for scrolling inertia. After the user has lifted the finger from the trackpad after a fling interaction, many native platforms continue to fire wheel events for a while to simulate scrolling inertia. The momentum attribute here differentiates those simulated events them from the events fired during the physical trackpad interaction, allowing web developers ignore fling events or customize rich fling effects.

## Ecosystem Status

- **Momentum:** High (335 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive / High Interest
- **Executive Take:** Wheel event momentum is currently Enabled by default in Chrome 151. Verified ecosystem momentum is High with Partial Multi-Engine Interest standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @saschanaz: "Filed https://bugzilla.mozilla.org/show\_bug.cgi?id=2050009..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Wheel event momentum](https://github.com/WebKit/standards-positions/issues/688) [open]
- **Mozilla:** [Wheel event momentum](https://github.com/mozilla/standards-positions/issues/1425) [closed]

## Packages & Polyfills

- [wheel-gestures](https://www.npmjs.com/package/wheel-gestures) `v2.3.0` — wheel gestures and momentum detection
- [wheel](https://www.npmjs.com/package/wheel) `v1.0.0` — Mouse wheel event unified for all browsers

## 📰 Ecosystem Blogs & Articles

- [pointerevents - external/w3c/web-platform-tests - Git at Google](https://chromium.googlesource.com/external/w3c/web-platform-tests/+/refs/tags/merge_pr_52571/pointerevents) *(chromium.googlesource.com)*
  > pointerevents - external/w3c/web-platform-tests - Git at Google Sign in &#9681; Theme chromium / external / w3c / web-platform-tests / refs/tags/merge_pr_52571 / . / pointerevents tree: 1c1208e065265479f403499d11d0b1da8af25b62 compat/ html/ parsing/ ...
- [Wheel event momentum](https://chromestatus.com/feature/6631012282007552) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [\[blink-dev\] Intent to Ship: Wheel event momentum](http://www.mail-archive.com/blink-dev@chromium.org/msg16769.html) *(mail-archive.com)*
  > Specification https://w3c.github.io/pointerevents/#dom-wheelevent-momentum Summary The wheel events on many native platforms <strong>simulate scrolling inertia</strong>: the events continue to fire for a while after the user has lifted the finger fro...
- [Re: \[blink-dev\] Intent to Ship: Wheel event momentum](http://www.mail-archive.com/blink-dev@chromium.org/msg16812.html) *(mail-archive.com)*
  > &gt; &gt; &gt;&gt; &gt;&gt;&gt; On Tuesday, June 16, 2026 at 9:56:47 PM UTC+2 Mustaq Ahmed wrote: &gt;&gt;&gt; &gt;&gt;&gt;&gt; On Tue, Jun 16, 2026 at 3:32 PM Mike Taylor &lt;[email protected]&gt; &gt;&gt;&gt;&gt; wrote: &gt;&gt;&gt;&gt; &gt;&gt;&gt...
- [Wheel event momentum - Chrome Platform Status](https://2016-01-12-dot-cr-status.appspot.com/feature/6631012282007552) *(2016-01-12-dot-cr-status.appspot.com · 2026-06-05T00:00:00)*
  > We cannot provide a description for this page right now
- [The Ultimate Guide to Momentum Wheels](https://www.numberanalytics.com/blog/ultimate-guide-to-momentum-wheels) *(numberanalytics.com)*
  > <strong>By accelerating or decelerating the wheel, the spacecraft&#x27;s attitude can be adjusted</strong>. The following sections will explore the principles of momentum wheel operation, control strategies, and integration with spacecraft attitude c...
- [Mastering Momentum Wheels in Spacecraft](https://www.numberanalytics.com/blog/mastering-momentum-wheels-in-spacecraft) *(numberanalytics.com · 2025-06-11T10:12:26)*
  > Reaction wheels are used to control the attitude of a spacecraft by applying a torque to the vehicle, whereas <strong>momentum wheels are used to store angular momentum and provide a bias to the spacecraft&#x27;s attitude</strong>.
- [Momentum \| Droop Gauge V2 and Setup Wheels](https://www.yeahracing.com/blog/how-to-use-momentum-droop-gauge-v2-setup-wheels) *(yeahracing.com)*
  > Momentum | Droop Gauge V2 and Setup Wheels By using these setup wheels you will be sure that the geometry will be as per racing conditions so you will get the most accurate readings possible! Used to measure camber and other things. Accurately measur...
- [Mastering Momentum Wheels in Aerospace](https://www.numberanalytics.com/blog/mastering-momentum-wheels-in-aerospace) *(numberanalytics.com · 2025-06-23T00:00:00)*
  > They work on the principle of conservation of angular momentum, where a rotating wheel&#x27;s angular momentum is used to generate a torque that stabilizes or maneuvers the spacecraft. The basic principle can be understood by considering the equation...
- [How to Use Spin Wheel: Complete Beginner's Guide (2026)](https://engagewheel.com/blog/how-to-use-spin-wheel) *(engagewheel.com · 2026-01-25T00:00:00)*
  > 💡 Teacher Tip: <strong>Project the wheel on your smartboard so all students can see</strong>. The visual excitement boosts engagement! Social Media Giveaways: Fair winner selection for Instagram/TikTok · Event Prizes: Random prize distribution at pa...
- [Momentum Blog \| Momentum Bikes US](https://www.momentum-biking.com/us/momentum-blog) *(momentum-biking.com)*
  > This is what we stand for - the chance to get on your bike and explore, commute and enjoy a greener way of life. Whether you&#x27;re just starting out or are a serious OG, we&#x27;ve got ideas, tips and inspo on repeat to keep you and your bike happy...
- [Guide \| Momentum Mod Documentation](https://docs.momentum-mod.org/categories/guide) *(docs.momentum-mod.org)*
  > Guide
- [Momentum Trading Strategy: Complete Guide (2026) \| Quantum Algo](https://www.quantum-algo.com/blog/guides/momentum-trading-strategy-complete-guide) *(quantum-algo.com · 2026-08-24T00:00:00)*
  > The momentum trader aims to identify and ride these strong moves — <strong>buying assets exhibiting strong upward momentum and selling or shorting those with strong downward momentum</strong> — profiting from the continuation of the move rather than ...
- [Re: \[blink-dev\] Intent to Ship: Wheel event momentum](http://www.mail-archive.com/blink-dev@chromium.org/msg16774.html) *(mail-archive.com)*
  > No *Flag name on about://flags* /No information provided/ *Finch feature name* WheelEventMomentum *Rollout plan* Will ship enabled for all users *Requires code in //chrome?* False *Tracking bug* https://crbug.com/40704952 *Estimated milestones* <stro...
- [Progressive Web App (PWA) Development Ultimate Guide - Riseup Labs](https://riseuplabs.com/pwa-development-ultimate-guide) *(riseuplabs.com · 2025-12-10T05:24:22)*
  > <strong>The birth of the PWA concept represented a significant milestone in the evolution of web technology</strong>. As the PWA model continues to gain momentum, it is poised to shape the future of web development, offering users seamless and engagi...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Pointer Events](https://www.w3.org/TR/pointerevents) *(w3.org · 2026-08-26T00:00:00)* *(Cites: `https://w3c.github.io/pointerevents/#dom-wheelevent-momentum`)*
  > https://www.w3.org/TR/pointerevents4/ Latest editor&#x27;s draft: https://<strong>w3c.github.io/pointerevents</strong>/ History: https://www.w3.org/standards/history/pointerevents4/ Commit history · Test suite: https://wpt.fyi/pointerevents...
- [Support for PointerEvent getCoalescedEvents() API · Issue #374 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/374) *(github.com · 2024-07-18T15:55:01)* *(Cites: `https://w3c.github.io/pointerevents/#dom-wheelevent-momentum`)*
  > Support for PointerEvent getCoalescedEvents() API · Issue #374 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or ...
- [wpt/pointerevents at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/tree/master/pointerevents) *(github.com)* *(Cites: `https://w3c.github.io/pointerevents/#dom-wheelevent-momentum`)*
  > wpt/pointerevents at master · web-platform-tests/wpt · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session....
- [pointerevents - external/w3c/web-platform-tests - Git at Google](https://chromium.googlesource.com/external/w3c/web-platform-tests/+/refs/tags/merge_pr_52571/pointerevents) *(chromium.googlesource.com)* *(Cites: `https://w3c.github.io/pointerevents/#dom-wheelevent-momentum`)*
  > pointerevents - external/w3c/web-platform-tests - Git at Google Sign in &#9681; Theme chromium / external / w3c / web-platform-tests / refs/tags/merge_pr_52571 / . / pointerevents tree: 1c1208e065265479f403499d11d0b1da8af25b62 compat/ html/...
- [Meta-issue: update WPT to cover Pointer Events Level 3 · Issue #445 · w3c/pointerevents](https://github.com/w3c/pointerevents/issues/445) *(github.com · 2022-06-09T10:34:37)* *(Cites: `https://w3c.github.io/pointerevents/#dom-wheelevent-momentum`)*
  > Meta-issue: update WPT to cover Pointer Events Level 3 · Issue #445 · w3c/pointerevents · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or wind...
- [Incorrect order of the events in process pending pointer capture section · Issue #39 · w3c/pointerevents](https://github.com/w3c/pointerevents/issues/39) *(github.com · 2016-03-08T19:01:19)* *(Cites: `https://w3c.github.io/pointerevents/#dom-wheelevent-momentum`)*
  > Incorrect order of the events in process pending pointer capture section · Issue #39 · w3c/pointerevents · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with an...
- [content/files/en-us/web/api/pointer\_events/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/pointer_events/index.md) *(github.com)* *(Cites: `https://w3c.github.io/pointerevents/#dom-wheelevent-momentum`)*
  > content/files/en-us/web/api/pointer_events/index.md at main · mdn/content · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to ...
- [touch-events/index.html at gh-pages · w3c/touch-events](https://github.com/w3c/touch-events/blob/gh-pages/index.html) *(github.com · 2024-07-09T00:00:00)* *(Cites: `https://w3c.github.io/pointerevents/#dom-wheelevent-momentum`)*
  > The default value defined here for &lt;code&gt;altitudeAngle&lt;/code&gt; is 0. This differs from the &lt;a href=&quot;https://<strong>w3c.github.io/pointerevents</strong>/&quot;&gt;Pointer Events - Level 3&lt;/a&gt; [[POINTEREVENTS]] speci...

## 📚 Platform Documentation & Specifications

- [Pointer Events](https://www.w3.org/TR/pointerevents) *(w3.org)*
- [Support for PointerEvent getCoalescedEvents() API · Issue #374 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/374) *(github.com)*
- [wpt/pointerevents at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/tree/master/pointerevents) *(github.com)*
- [Meta-issue: update WPT to cover Pointer Events Level 3 · Issue #445 · w3c/pointerevents](https://github.com/w3c/pointerevents/issues/445) *(github.com)*
- [Incorrect order of the events in process pending pointer capture section · Issue #39 · w3c/pointerevents](https://github.com/w3c/pointerevents/issues/39) *(github.com)*
- [content/files/en-us/web/api/pointer\_events/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/pointer_events/index.md) *(github.com)*
- [touch-events/index.html at gh-pages · w3c/touch-events](https://github.com/w3c/touch-events/blob/gh-pages/index.html) *(github.com)*
- [Wheel event momentum · Issue #1425 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1425) *(github.com)*
- [Wheel event momentum · Issue #688 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/688) *(github.com)*
- [WheelEvent: WheelEvent() constructor](https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent/WheelEvent) *(developer.mozilla.org)*
- [WheelEvent](https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent) *(developer.mozilla.org)*
- [Element: wheel event](https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 38 result(s) found across 6 planned queries — **24 verified relevant**
  - `"chromestatus.com/feature/6631012282007552" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"w3c.github.io/pointerevents" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Wheel event momentum" API` — *Core feature API query* (6 returned)
  - `"Wheel event momentum" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"Wheel event momentum" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Wheel event momentum" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 3 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 6 result(s) found — **3 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **2 verified relevant**
- **Web Platform Tests (wpt.fyi):** 262 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 2 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6631012282007552)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6631012282007552)
- [Specification](https://w3c.github.io/pointerevents/#dom-wheelevent-momentum)
- [Chromium Tracking Bug](https://crbug.com/40704952)
