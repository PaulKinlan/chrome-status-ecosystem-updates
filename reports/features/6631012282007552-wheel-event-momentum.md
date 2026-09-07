# Wheel event momentum

> **Report Week:** 2026-W37 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Exposes a momentum attribute in wheel events to mark native platforms events for scrolling inertia. After the user has lifted the finger from the trackpad after a fling interaction, many native platforms continue to fire wheel events for a while to simulate scrolling inertia. The momentum attribute here differentiates those simulated events them from the events fired during the physical trackpad interaction, allowing web developers ignore fling events or customize rich fling effects.

## Ecosystem Status

- **Momentum:** High (260 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The `WheelEvent.prototype.momentum` property standardizes a boolean flag to differentiate synthetic inertial scrolling (trackpad flings) from direct user touch/finger movement. Shipping enabled by default in Chrome 151, it resolves a longstanding web platform limitation in gesture handling. Cross-engine alignment is strong, with Mozilla officially adopting a positive position and WebKit reviewing standardization.

### Recommendations
- Actionable Advice: Adopt `event.momentum` progressively by checking `'momentum' in event` to ignore or customize inertial flings. Maintain existing delta-decay or timeout heuristics as fallbacks for Firefox and Safari until interoperable engine support is fully realized.
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @saschanaz: "Filed https://bugzilla.mozilla.org/show_bug.cgi?id=2050009..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Wheel event momentum](https://github.com/WebKit/standards-positions/issues/688) [open]
- **Mozilla:** [Wheel event momentum](https://github.com/mozilla/standards-positions/issues/1425) [closed]

## 📰 Ecosystem Blogs & Articles

- [pointerevents - external/w3c/web-platform-tests - Git at Google](https://chromium.googlesource.com/external/w3c/web-platform-tests/+/refs/tags/merge_pr_52571/pointerevents) *(chromium.googlesource.com)*
  > pointerevents - external/w3c/web-platform-tests - Git at Google Sign in &#9681; Theme chromium / external / w3c / web-platform-tests / refs/tags/merge_pr_52571 / . / pointerevents tree: 1c1208e065265479f403499d11d0b1da8af25b62 compat/ html/ parsing/ ...
- [macos - Detecting type of mouse scroll wheel (Smooth vs Notched) with javascript - Stack Overflow](https://stackoverflow.com/questions/50032909/detecting-type-of-mouse-scroll-wheel-smooth-vs-notched-with-javascript) *(stackoverflow.com)*
  > &lt;h3&gt; scroll up is forward &lt;/h3&gt; &lt;div class=&quot;row&quot;&gt; &lt;div class=&quot;column&quot;&gt; &lt;div&gt; Video element: &lt;/div&gt; &lt;video controls height=&quot;120&quot; id=&quot;v&quot; tabindex=&quot;-1&quot; autobuffer=&...
- [Trackpad and Magic Mouse momentum WheelEvents indistinguishable from user-initiated ones [40704952] - Chromium](https://issues.chromium.org/issues/40704952) *(issues.chromium.org)*
  > Despite significant effort, such filters are far from perfect, and are especially weak in small-delta regimes where the trackpad shines as an input device. Furthermore, since the information is available to the browser, it makes sense to just pass it...
- [javascript - Disable inertia scroll for "single-page" webapp - Stack Overflow](https://stackoverflow.com/questions/28103125/disable-inertia-scroll-for-single-page-webapp) *(stackoverflow.com)*
  > Yes, this stops bounce effect (inertia) visually, but <strong>js wheel event is still called after the swipe on trackpad, cause of inertia</strong>.
- [10 Best Momentum Scrolling Libraries In JavaScript (2026 Update) | jQuery Script](https://www.jqueryscript.net/blog/best-momentum-scrolling.html) *(jqueryscript.net · 2026-02-14T00:00:00)*
  > <strong>A plain JavaScript library that applies a smooth momentum scrolling (also called inertial rolling) to any scrollable elements on the web</strong>. ... A tiny JavaScript library that replaces the native scroll events with a smooth scroll behav...
- [What is a Kinetic Scrolling Device? - Alvaro Trigo's Blog](https://alvarotrigo.com/blog/kinetic-scrolling) *(alvarotrigo.com · 2024-02-05T19:15:07)*
  > Kinetic scrolling devices are devices that enable users to do inertial scrolling. These include trackpads and some kinds of mice (like Apple Magic Mouse). With these devices, a single swipe lets you scroll multiple display lines. Depending on how str...
- [scroll - Mousepad firing too many "wheel" events in JavaScript - Stack Overflow](https://stackoverflow.com/questions/54574747/mousepad-firing-too-many-wheel-events-in-javascript) *(stackoverflow.com)*
  > Thanks Vajura. I tried implementing a similar code, the issues persists, and seems to arise from the way events are fired when using the trackpad: to simulate deceleration of scrolling, several events are fired subsequently, with a decreasing deltaY....
- [Re: [blink-dev] Intent to Ship: Wheel event momentum](http://www.mail-archive.com/blink-dev@chromium.org/msg16814.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; On Tuesday, June 16, 2026 at 9:56:47 PM UTC+2 Mustaq Ahmed wrote: &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; On Tue, Jun 16, 2026 at 3:32 PM Mike Taylor &lt;[email protected]&gt; &gt;...
- [[blink-dev] Intent to Ship: Wheel event momentum](http://www.mail-archive.com/blink-dev@chromium.org/msg16769.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · [blink-dev] Intent to Ship: Wheel event momentum · Chromestatus Tue, 16 Jun 2026 08:21:17 -0700 · Contact emails [email protected] · Specification https://w3c.github.io/pointerevents/#dom-wheelevent-momentum Su...
- [stopping mousewheel event from happening twice in OSX](https://stackoverflow.com/questions/26326958/stopping-mousewheel-event-from-happening-twice-in-osx) *(stackoverflow.com)*
  > 4 OSX inertia scrolling causing mousewheel.js to register multiple mousewheel events with the slightest scroll motion

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
- [touch-events/index.html at gh-pages · w3c/touch-events](https://github.com/w3c/touch-events/blob/gh-pages/index.html) *(github.com · 2024-07-09T00:00:00)* *(Cites: `https://w3c.github.io/pointerevents/#dom-wheelevent-momentum`)*
  > touch-events/index.html at gh-pages · w3c/touch-events · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your sessio...
- [Pointer Events WG -- 05 Aug 2020](https://www.w3.org/2020/08/05-pointerevents-minutes.html) *(w3.org)* *(Cites: `https://w3c.github.io/pointerevents/#dom-wheelevent-momentum`)*
  > &lt;smaug&gt; https://<strong>w3c.github.io/pointerevents</strong>/#dom-pointerevent-pointerid · just seems that implementations don&#x27;t currently do it · Patrick: so we&#x27;ll leave this for next time, mustaq to look over the issue aga...

## 📚 Platform Documentation & Specifications

- [Pointer Events](https://www.w3.org/TR/pointerevents) *(w3.org)*
- [Support for PointerEvent getCoalescedEvents() API · Issue #374 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/374) *(github.com)*
- [wpt/pointerevents at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/tree/master/pointerevents) *(github.com)*
- [Meta-issue: update WPT to cover Pointer Events Level 3 · Issue #445 · w3c/pointerevents](https://github.com/w3c/pointerevents/issues/445) *(github.com)*
- [Incorrect order of the events in process pending pointer capture section · Issue #39 · w3c/pointerevents](https://github.com/w3c/pointerevents/issues/39) *(github.com)*
- [touch-events/index.html at gh-pages · w3c/touch-events](https://github.com/w3c/touch-events/blob/gh-pages/index.html) *(github.com)*
- [Pointer Events WG -- 05 Aug 2020](https://www.w3.org/2020/08/05-pointerevents-minutes.html) *(w3.org)*
- [GitHub - d4nyll/lethargy: Distinguish between scroll events initiated by the user, and those by inertial scrolling · GitHub](https://github.com/d4nyll/lethargy) *(github.com)*
- [Wheel event momentum · Issue #1425 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1425) *(github.com)*
- [Wheel event momentum · Issue #688 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/688) *(github.com)*
- [Expose 'inertial scrolling state' in wheel events · Issue #58 · w3c/uievents](https://github.com/w3c/uievents/issues/58) *(github.com)*
- [Add flag to determine if wheel event delta is from direct interaction or momentum / inertia / kinetic scrolling · Issue #553 · w3c/pointerevents](https://github.com/w3c/pointerevents/issues/553) *(github.com)*
- [osx inertia · Issue #36 · jquery/jquery-mousewheel](https://github.com/jquery/jquery-mousewheel/issues/36) *(github.com)*
- [WheelEvent: WheelEvent() constructor](https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent/WheelEvent) *(developer.mozilla.org)*
- [WheelEvent](https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent) *(developer.mozilla.org)*
- [Element: wheel event](https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 26 result(s) found across 6 planned queries — **23 verified relevant**
  - `"chromestatus.com/feature/6631012282007552" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"w3c.github.io/pointerevents" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WheelEvent" "momentum" ("addEventListener" OR "event.momentum")` — *Find real-world JavaScript code snippets and WebIDL implementations demonstrating how to inspect the momentum property on wheel events.* (1 returned)
  - `"WheelEvent" ("momentum" OR "inertia") ("trackpad" OR "fling") "javascript"` — *Discover developer tutorials, blog posts, and guides discussing how to handle trackpad fling gestures and momentum scrolling in web apps.* (8 returned)
  - `"WheelEvent" "momentum" ("intent to prototype" OR "intent to ship" OR "ChromeStatus" OR "webkit.org")` — *Track browser vendor implementation progress, standards sentiment, and Intent to Prototype/Ship announcements across Chromium and WebKit.* (3 returned)
  - `(site:github.com OR site:stackoverflow.com) "WheelEvent" ("momentum" OR "inertia") trackpad (fling OR zoom OR scroll)` — *Locate developer discussions, issue tracker debates, and workarounds regarding distinguishing active trackpad input from simulated momentum events in custom UI components.* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 3 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 6 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 261 item(s) inspected

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
