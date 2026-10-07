# Wheel event momentum

> **Report Week:** 2026-W39 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Exposes a momentum attribute in wheel events to mark native platforms events for scrolling inertia. After the user has lifted the finger from the trackpad after a fling interaction, many native platforms continue to fire wheel events for a while to simulate scrolling inertia. The momentum attribute here differentiates those simulated events them from the events fired during the physical trackpad interaction, allowing web developers ignore fling events or customize rich fling effects.

## Ecosystem Status

- **Momentum:** High (455 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The \`WheelEvent.momentum\` boolean attribute resolves a decade-old web input pain point by allowing developers to distinguish simulated inertia/fling wheel events from physical trackpad interactions. Shipped enabled by default in Chrome 151 and standardized under the W3C Pointer Events specification, the feature enables precise custom physics for carousels, maps, and canvas applications. Engine consensus is shaping up favorably, with Firefox supporting the design and WebKit currently evaluating the standard position.

### Recommendations
- Actionable Advice: Adopt \`event.momentum\` as a progressive enhancement today by inspecting \`'momentum' in event\` before applying custom fling physics or discarding inertia events. For non-supporting engines like Safari and stable Firefox, maintain fallback time-decay or delta-delta heuristic detection.
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @saschanaz: "Filed https://bugzilla.mozilla.org/show\_bug.cgi?id=2050009..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Wheel event momentum](https://github.com/WebKit/standards-positions/issues/688) [open]
- **Mozilla:** [Wheel event momentum](https://github.com/mozilla/standards-positions/issues/1425) [closed]

## 📰 Ecosystem Blogs & Articles

- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHirCXqigK8NmfbzG6fL3noBuFMC7xXVemJi0hcDudj_XqeJI-Q9rUaKhp4hfzP4q7n1KyyByjanX22XBokkJlSI317gPyBchyLKovyZZdEq1t9LeZlmBeLVt0=) *(vertexaisearch.cloud.google.com)*
  > ### Overview: Wheel Event Momentum  The **Wheel Event Momentum** feature introduces a boolean attribute—`event.momentum`—to the standard `WheelEvent` interface.   ```javascript element.addEventListener('wheel', (event) => {   if (event.momentum) {
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFF0IUCeQBySMpGHE74-SeUhHSaSOnkhzSbLvSJERmMV6yL9cV4emLWqOI6zwkcqjHfJmvTdeixq5MI7Xj7uqD27pqh5YYYAIP4F3XSMrbVxe3P3-DCLJ-wb5Y4P8-BgRpC_o3XZ3jW) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [npmjs.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG9Hgv2l8vgnvRtTbQGoQLMQpltOWljyN4DbO7Y-oAGYbdyXCr4nkOHqZ5xWzG4ktJGZulheHr74HEnpxe5UNBU3bUE21Q5Jsu9lXvK1LM5i_-InDXJ-FkrJNTcrYVc1NyhPw==) *(vertexaisearch.cloud.google.com)*
  > ### Overview: Wheel Event Momentum  The **Wheel Event Momentum** feature introduces a boolean attribute—`event.momentum`—to the standard `WheelEvent` interface.   ```javascript element.addEventListener('wheel', (event) => {   if (event.momentum) {
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGVnIen5TID61OsUcT9-u93yEz6ShtmhgMCU3gs4wCUkswUD_i9rp33JQKJpS-gmzxpXLA0o0FqcCvmQR80UwBL6vza_CWLvrZWm_wGv5YbG4TqqVIiSx6wtjU-GSyMQGP_) *(vertexaisearch.cloud.google.com)*
  > Chromium Sign in
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHWvWS5g989kY1oiOkEp6gS9LJ_B8lJ4ALDmW0XBKRMPPUYwq2ShHypMR9M54EGs4RJpnzVpG9gFoi8sEQzQFxPPH80Baby988Nh2NfElKoqJzgbnXJiY2y7g96TWZT8KAR_NNX2r44) *(vertexaisearch.cloud.google.com)*
  > Chrome 151 ベータ版 | Blog | Chrome for Developers メイン コンテンツにスキップ / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 ...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEn_72Drk3MDO8yfHN1h-Wur74wFYsLpXNzpt8-WQutdqMzrIxzerdh3UWejUDTHkLXOSTBvRplmagLrHK8mY8C9tjgCA17QgpJ75Cge2Js0iabTU_zddmWhh0KnnCZFTuisI-L) *(vertexaisearch.cloud.google.com)*
  > Chrome 151 | Release notes | Chrome for Developers Chuyển ngay đến nội dung chính / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEclDxUoPK457OlvbFZiaWeVTqy8CvyO-9Aka_FMGnD5uxEuxBRAmO5Ia29-pbw9GNCXDgc_rw38_9cTVJ0QsvqeStXTV5gVNl7cjm2Yru3G0tzkV3T3csU6ZUCG3CmnCilcgdNdW6_w7gzoYapTB9r_A==) *(vertexaisearch.cloud.google.com)*
  > WheelEvent - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs WheelEvent Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Español Français 日本語 中文 (简体) 正體中文 (繁體) WheelEvent Baseli...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEI6aadaWc9HcrC87yVNQuW6PGdibHzrWkdOqNUjlPdRx2nj9kS8p5n8ARnNsa0Hq4_YlD4prSDWw0sJ6-lT963U0PwqfK2xfRsqoWydXdYCmy1XC-gG5ia54BfT6U0QDcCj-uUiHgcNk7CvO3I7lKXbTIHPplgjgq1gSs=) *(vertexaisearch.cloud.google.com)*
  > browser-compat-data/RELEASE_NOTES.md at main · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your ...
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEDIHiJKAYKQqD-paWpAat0N8-eGEzKveHH4R8wstiejWu5INDld7oCSEfoXLF1_pqMt9nEtCxk_FgKM7MJxIq-pnj62-Eb1PnG7b5RTcHUkFlEE9b3OdrRmmlhCnI0Rquhn09Bgns5UDDDMP8O-e1gmZjr_Vk0zaK-zEw0ywUf1YXkaYqb) *(vertexaisearch.cloud.google.com)*
  > ### Overview: Wheel Event Momentum  The **Wheel Event Momentum** feature introduces a boolean attribute—`event.momentum`—to the standard `WheelEvent` interface.   ```javascript element.addEventListener('wheel', (event) => {   if (event.momentum) {
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHr6exhZ8KYKOkLxJt9QatsVpSzAQSimijVS2VhWbdDff6ap4tc1j9BVxG3tmiNubpKJmp6Iloi0Sw0uFGJ_vZM9jtd0_DFGLGbT5-iL8WHoFmJ1cKc1eBOxla2hZdFejUhCtzhYY5vdgL0tdeKm7H1) *(vertexaisearch.cloud.google.com)*
  > ### Overview: Wheel Event Momentum  The **Wheel Event Momentum** feature introduces a boolean attribute—`event.momentum`—to the standard `WheelEvent` interface.   ```javascript element.addEventListener('wheel', (event) => {   if (event.momentum) {
- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFwjKAeDRbCS3OD1mcQes8A87jclO1_5Y6qLD9DQDGoXXxzGl4ztvWdn_xi5eLg4KAy_v1lSSKT3r0oR-IyT-DFNioNIUtpaAgFOUimZ8Mg65YgXtWL_d7JaE7Dki2-bD5HF9q9M3bBUB7HJNlLnwkXHA8T3Eu3KdwqFyB_) *(vertexaisearch.cloud.google.com)*
  > ### Overview: Wheel Event Momentum  The **Wheel Event Momentum** feature introduces a boolean attribute—`event.momentum`—to the standard `WheelEvent` interface.   ```javascript element.addEventListener('wheel', (event) => {   if (event.momentum) {
- [pointerevents - external/w3c/web-platform-tests - Git at Google](https://chromium.googlesource.com/external/w3c/web-platform-tests/+/refs/tags/merge_pr_52571/pointerevents) *(chromium.googlesource.com)*
  > pointerevents/README.md · Directory for Pointer Events Tests · Latest Editor&#x27;s Draft: https://<strong>w3c.github.io/pointerevents</strong>/ Latest W3C Technical Report: http://www.w3.org/TR/pointerevents/ Discussion forum for tests: http://lists...
- [Wheel event momentum](https://chromestatus.com/feature/6631012282007552) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [\[blink-dev\] Intent to Ship: Wheel event momentum](http://www.mail-archive.com/blink-dev@chromium.org/msg16769.html) *(mail-archive.com)*
  > Specification https://w3c.github.io/pointerevents/#dom-wheelevent-momentum Summary The wheel events on many native platforms <strong>simulate scrolling inertia</strong>: the events continue to fire for a while after the user has lifted the finger fro...
- [Re: \[blink-dev\] Intent to Ship: Wheel event momentum](http://www.mail-archive.com/blink-dev@chromium.org/msg16812.html) *(mail-archive.com)*
  > &gt; &gt; &gt;&gt; &gt;&gt;&gt; On Tuesday, June 16, 2026 at 9:56:47 PM UTC+2 Mustaq Ahmed wrote: &gt;&gt;&gt; &gt;&gt;&gt;&gt; On Tue, Jun 16, 2026 at 3:32 PM Mike Taylor &lt;[email protected]&gt; &gt;&gt;&gt;&gt; wrote: &gt;&gt;&gt;&gt; &gt;&gt;&gt...
- [Wheel event momentum - Chrome Platform Status](https://2016-01-12-dot-cr-status.appspot.com/feature/6631012282007552) *(2016-01-12-dot-cr-status.appspot.com · 2026-06-05T00:00:00)*
  > We cannot provide a description for this page right now
- [Re: \[blink-dev\] Intent to Ship: Wheel event momentum](http://www.mail-archive.com/blink-dev@chromium.org/msg16774.html) *(mail-archive.com)*
  > No *Flag name on about://flags* /No information provided/ *Finch feature name* WheelEventMomentum *Rollout plan* Will ship enabled for all users *Requires code in //chrome?* False *Tracking bug* https://crbug.com/40704952 *Estimated milestones* <stro...
- [Trackpad and Magic Mouse momentum WheelEvents indistinguishable from user-initiated ones \[40704952\] - Chromium](https://issues.chromium.org/issues/40704952) *(issues.chromium.org)*
  > Interesting find: wheel events are sometime generated from scroll events, and the latter has the momentum phase set based on this condition: ... This CL exposes `blink::WebMouseWheelEvent::momentum_phase` as a Boolean field named `momentum` in the JS...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Pointer Events](https://www.w3.org/TR/pointerevents) *(w3.org · 2026-08-26T00:00:00)* *(Cites: `https://w3c.github.io/pointerevents/#dom-wheelevent-momentum`)*
  > https://www.w3.org/TR/pointerevents4/ Latest editor&#x27;s draft: https://<strong>w3c.github.io/pointerevents</strong>/ History: https://www.w3.org/standards/history/pointerevents4/ Commit history · Test suite: https://wpt.fyi/pointerevents...
- [Support for PointerEvent getCoalescedEvents() API · Issue #374 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/374) *(github.com · 2024-07-18T15:55:01)* *(Cites: `https://w3c.github.io/pointerevents/#dom-wheelevent-momentum`)*
  > WebKittens @gsnedders @marcoscaceres Title of the spec Pointer Events level 3: Coalesced events URL to the spec https://<strong>w3c.github.io/pointerevents</strong>/#coalesced-events URL to the spec&#x27;s repository https://github.com/w3c/...
- [wpt/pointerevents at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/tree/master/pointerevents) *(github.com)* *(Cites: `https://w3c.github.io/pointerevents/#dom-wheelevent-momentum`)*
  > Latest Editor&#x27;s Draft: https://<strong>w3c.github.io/pointerevents</strong>/ Latest W3C Technical Report: http://www.w3.org/TR/pointerevents/ Discussion forum for tests: http://lists.w3.org/Archives/Public/public-test-infra/ Test Asser...
- [pointerevents - external/w3c/web-platform-tests - Git at Google](https://chromium.googlesource.com/external/w3c/web-platform-tests/+/refs/tags/merge_pr_52571/pointerevents) *(chromium.googlesource.com)* *(Cites: `https://w3c.github.io/pointerevents/#dom-wheelevent-momentum`)*
  > pointerevents/README.md · Directory for Pointer Events Tests · Latest Editor&#x27;s Draft: https://<strong>w3c.github.io/pointerevents</strong>/ Latest W3C Technical Report: http://www.w3.org/TR/pointerevents/ Discussion forum for tests: ht...
- [Meta-issue: update WPT to cover Pointer Events Level 3 · Issue #445 · w3c/pointerevents](https://github.com/w3c/pointerevents/issues/445) *(github.com · 2022-06-09T10:34:37)* *(Cites: `https://w3c.github.io/pointerevents/#dom-wheelevent-momentum`)*
  > Meta-issue to keep track of any changes to existing tests, and additions/new tests, for PE3 https://wpt.fyi/results/pointerevents / https://github.com/web-platform-tests/wpt/tree/master/pointerevents · We should go through https://<strong>w...
- [Incorrect order of the events in process pending pointer capture section · Issue #39 · w3c/pointerevents](https://github.com/w3c/pointerevents/issues/39) *(github.com · 2016-03-08T19:01:19)* *(Cites: `https://w3c.github.io/pointerevents/#dom-wheelevent-momentum`)*
  > @RByers, @mustaqahmed, @jacobrossi Looking at this section: https://<strong>w3c.github.io/pointerevents</strong>/#process-pending-pointer-capture It seems weird that firing pointerleave/out happens after firing got...
- [touch-events/index.html at gh-pages · w3c/touch-events](https://github.com/w3c/touch-events/blob/gh-pages/index.html) *(github.com · 2024-07-09T00:00:00)* *(Cites: `https://w3c.github.io/pointerevents/#dom-wheelevent-momentum`)*
  > The default value defined here for &lt;code&gt;altitudeAngle&lt;/code&gt; is 0. This differs from the &lt;a href=&quot;https://<strong>w3c.github.io/pointerevents</strong>/&quot;&gt;Pointer Events - Level 3&lt;/a&gt; [[POINTEREVENTS]] speci...
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
- [Wheel event momentum · Issue #1425 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1425) *(github.com)*
- [Wheel event momentum · Issue #688 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/688) *(github.com)*
- [Whether AppKit's trackpad momentum phase reaches the wheel handler has never been measured, and the refusal to add a fling rests on it · Issue #844 · Rikarin/Vixen](https://github.com/Rikarin/Vixen/issues/844) *(github.com)*
- [A wheel event carries no phase, so nothing downstream can tell a mouse wheel from a trackpad flick · Issue #904 · Rikarin/Vixen](https://github.com/Rikarin/Vixen/issues/904) *(github.com)*
- [Kinetic scrolling does not work on Linux - Bugzilla@Mozilla](https://bugzilla.mozilla.org/show_bug.cgi?id=1213601) *(bugzilla.mozilla.org)*
- [Expose 'inertial scrolling state' in wheel events · Issue #58 · w3c/uievents](https://github.com/w3c/uievents/issues/58) *(github.com)*
- [Add flag to determine if wheel event delta is from direct interaction or momentum / inertia / kinetic scrolling · Issue #553 · w3c/pointerevents](https://github.com/w3c/pointerevents/issues/553) *(github.com)*
- [Element: wheel event - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event) *(developer.mozilla.org)*
- [Fix #91. Make all pointer events composed events by hayatoito · Pull Request #92 · w3c/pointerevents](https://github.com/w3c/pointerevents/pull/92) *(github.com)*
- [pointerevents/index.html at gh-pages · w3c/pointerevents](https://github.com/w3c/pointerevents/blob/gh-pages/index.html) *(github.com)*
- [GitHub - WICG/pointer-event-extensions: Extensions to PointerEvents · GitHub](https://github.com/WICG/pointer-event-extensions) *(github.com)*
- [GitHub - w3c/pointerevents: Pointer Events · GitHub](https://github.com/w3c/pointerevents) *(github.com)*
- [Mouse and Pointer events from a stationary mouse · Issue #529 · w3c/pointerevents](https://github.com/w3c/pointerevents/issues/529) *(github.com)*
- [Workflow runs · w3c/uievents](https://github.com/w3c/uievents/actions) *(github.com)*
- [WheelEvent: WheelEvent() constructor](https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent/WheelEvent) *(developer.mozilla.org)*
- [WheelEvent](https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 52 result(s) found across 10 planned queries — **28 verified relevant**
  - `"chromestatus.com/feature/6631012282007552" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"w3c.github.io/pointerevents" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Wheel event momentum" API` — *Core feature API query* (6 returned)
  - `"Wheel event momentum" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"Wheel event momentum" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Wheel event momentum" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"WheelEvent" momentum trackpad (inertia OR fling) scroll` — *Finds practical developer guides, blog posts, and tutorials explaining how to handle or ignore trackpad inertia scroll events using the momentum attribute.* (8 returned)
  - `("event.momentum" OR "e.momentum") ("wheel" OR "WheelEvent") -spec` — *Locates real-world JavaScript code snippets and implementation examples checking the momentum property on wheel events.* (8 returned)
  - `"WheelEvent" "momentum" ("Intent to Ship" OR "Intent to Prototype" OR ChromeStatus)` — *Surfaces browser engine implementation roadmaps, Chromium Intent-to-Ship announcements, and compatibility tracking.* (1 returned)
  - `site:github.com (w3c/uievents OR w3c/pointerevents OR WICG) "momentum" "wheel"` — *Retrieves specification debates, developer feedback, and standards issues regarding the definition and behavior of WheelEvent.momentum.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 1 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 6 result(s) found — **1 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 262 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 2 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6631012282007552)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6631012282007552)
- [Specification](https://w3c.github.io/pointerevents/#dom-wheelevent-momentum)
- [Chromium Tracking Bug](https://crbug.com/40704952)
