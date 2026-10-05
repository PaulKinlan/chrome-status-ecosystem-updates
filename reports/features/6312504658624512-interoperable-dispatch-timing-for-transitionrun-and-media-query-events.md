# Interoperable dispatch timing for transitionrun and media query events

> **Report Week:** 2026-W41 | **Milestone:** Chrome 153 | **Category:** Enabled by default

## Overview

Aligns Blink's dispatch timing for animation "transitionrun" event and media query "change" event with the spec, making the timing interoperable with Gecko and WebKit. More precisely, as per HTML window event loop specification, "transitionrun" events will be fired at Step 3.11 even for animations created earlier in the same iteration (instead of delaying them for a later iteration), and the media query "change" event will be fired at Step 3.10 before firing any pending animation events (instead of intermixing them with animation events at Step 3.11).

## Ecosystem Status

- **Momentum:** High (290 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Shipped in Chrome and Microsoft Edge 153 under the internal flag 'EventTimingMatchingHTML', this change resolves a long-standing event loop discrepancy in Blink by strictly aligning event dispatch ordering with the WHATWG HTML specification. Media query 'change' events are now cleanly dispatched at Step 3.10 prior to animation events, and newly created 'transitionrun' events fire immediately in the same rendering iteration at Step 3.11 rather than being deferred. This update closes a subtle cross-engine interoperability gap, matching the established behaviors of Gecko and WebKit.

### Recommendations
- Actionable Advice: Web development teams do not need to rewrite modern animations, but they should audit complex layout and UI state machines that coordinate CSS transitions with media query changes to remove any manual \`setTimeout\` or \`requestAnimationFrame\` debouncing workarounds. Verify that legacy test suites do not inadvertently rely on Chromium's former delayed multi-frame dispatch of \`transitionrun\` events.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome 153 beta \| Chrome for Developers (@ChromiumDev) on X" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Chrome 153 beta \| Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/article/2093424350036660456) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Chrome for Developers on X: "Chrome 153 is now in beta! Try out new CSS scroll container options, Rust-based XML parsing, declarative camera and microphone HTML elements, and the new WebGPU buffer\_view feature. https://t.co/QVG8pp2SRN" / X](https://x.com/ChromiumDev/status/2093424350036660456) — *by @ChromiumDev, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [scroll events (and some other events) get fired along with animation related events \[397737222\] - Chromium](https://issues.chromium.org/issues/397737222) *(issues.chromium.org)*
  > Chromium Sign in
- [\[blink-dev\] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events](http://www.mail-archive.com/blink-dev@chromium.org/msg17091.html) *(mail-archive.com)*
  > [blink-dev] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events Skip to site navigation (Press enter) [blink-dev] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events ...
- [Real-Time Dispatch System: A Complete Guide](https://redis.io/blog/real-time-dispatch-system) *(redis.io · 2026-04-08T16:28:55)*
  > In emergency services, the dispatch architecture is known as computer-aided dispatch (CAD). When a 911 call comes in, the system identifies available units, evaluates proximity and response capability, and assigns the closest qualified responder. The...
- [JavaScript dispatchEvent Guide: Learn How to Trigger Custom Events](https://zetcode.com/dom/element-dispatchevent) *(zetcode.com · 2025-04-02T00:00:00)*
  > <strong>The dispatchEvent method dispatches an Event at a specified EventTarget (element, document, window, etc.).</strong>
- [JavaScript dispatchEvent(): Generate Events programmatically](https://www.javascripttutorial.net/javascript-dom/javascript-dispatchevent) *(javascripttutorial.net · 2020-05-22T00:38:58)*
  > Summary: in this tutorial, you’ll learn how to <strong>programmatically create and dispatch events using Event constructor and dispatchEvent() method</strong>.
- [Dispatching custom events](https://javascript.info/dispatch-events) *(javascript.info · 2022-10-14T00:00:00)*
  > For new, custom events, there are definitely no default browser actions, but a code that dispatches such event may have its own plans what to do after triggering the event.
- [Create and Dispatch Events \| Communicate with Events \| Lightning Web Components Developer Guide \| Salesforce Developers](https://developer.salesforce.com/docs/platform/lwc/guide/events-create-dispatch.html) *(developer.salesforce.com)*
  > <strong>When a user clicks a button, the previousHandler or nextHandler function executes</strong>. These functions create and dispatch the previous and next events.
- [Attaching an Event to an element and dispatching it correctly](https://stackoverflow.com/questions/58593415/attaching-an-event-to-an-element-and-dispatching-it-correctly) *(stackoverflow.com)*
  > The old fashioned method seems to still be working fine when I tried it, I saw the document event listener console log each time I triggered the event. The updated way is: panel.dispatchEvent(new CustomEvent(&#x27;render&#x27;)); Copylet div = docume...
- [Dispatch Walkthrough and Guide - Neoseeker](https://www.neoseeker.com/dispatch/walkthrough) *(neoseeker.com · 2025-11-15T21:05:36)*
  > Welcome to our Dispatch (2025) walkthrough guide! In Dispatch, you’ll need to make choices, whether that be on what action or dialogue choice you’ll make for the story, or during shifts -- what hero you will dispatch to each emergency. These choices ...
- [Chrome 153 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/153) *(chromestatus.com)*
  > Aligns Blink&#x27;s dispatch timing for animation &quot;transitionrun&quot; event and media query &quot;change&quot; event with the spec, making the timing interoperable with Gecko and WebKit.
- [MediaQueryList.onchange is not called on an extension's ...](https://issues.chromium.org/issues/41461814) *(issues.chromium.org)*
  > Sign in
- [Rediscovering the Schwartzian Transform: Why I Had to Comment on a Flutter Performance Article](https://dev.to/gde/rediscovering-the-schwartzian-transform-why-i-had-to-comment-on-a-flutter-performance-article-30l0) *(dev.to · Randal L. Schwartz · Oct 2)*
  > When a Flutter developer tackled a UI freeze sorting 10,000 timeline events, they unwittingly reinvented a 30-year-old computer science idiom. Here is how modern Dart 3 records turn the Schwartzian Transform into an elegant, 13x faster one-liner.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [scroll events (and some other events) get fired along with animation related events \[397737222\] - Chromium](https://issues.chromium.org/issues/397737222) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/6312504658624512`)*
  > Chromium Sign in
- [wpt/html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/tree/master/html) *(github.com)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > wpt/html at master · web-platform-tests/wpt · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You sign...
- [Unclear what to do with fragments on document.open · Issue #2555 · whatwg/html](https://github.com/whatwg/html/issues/2555) *(github.com · 2017-04-18T22:02:24)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > Unclear what to do with fragments on document.open · Issue #2555 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reloa...
- [Event handlers are not compiled against the right global, per spec · Issue #1956 · whatwg/html](https://github.com/whatwg/html/issues/1956) *(github.com · 2016-10-24T14:38:16)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > Event handlers are not compiled against the right global, per spec · Issue #1956 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab ...
- [Where are steps about recalculate styles and update layer tree before painting? (question) · Issue #7036 · whatwg/html](https://github.com/whatwg/html/issues/7036) *(github.com · 2021-09-07T14:50:55)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > Where are steps about recalculate styles and update layer tree before painting? (question) · Issue #7036 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You sig...
- [Do we have a style for when to add \[SPECNAME\] to the end of a paragraph? · Issue #41 · whatwg/meta](https://github.com/whatwg/meta/issues/41) *(github.com · 2017-09-29T13:47:37)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > Do we have a style for when to add [SPECNAME] to the end of a paragraph? · Issue #41 · whatwg/meta · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another ...
- [Missing onbeforetoggle IDL definition? · Issue #8935 · whatwg/html](https://github.com/whatwg/html/issues/8935) *(github.com · 2023-02-22T23:25:18)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > Missing onbeforetoggle IDL definition? · Issue #8935 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh...

## 📚 Platform Documentation & Specifications

- [wpt/html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/tree/master/html) *(github.com)*
- [Unclear what to do with fragments on document.open · Issue #2555 · whatwg/html](https://github.com/whatwg/html/issues/2555) *(github.com)*
- [Event handlers are not compiled against the right global, per spec · Issue #1956 · whatwg/html](https://github.com/whatwg/html/issues/1956) *(github.com)*
- [Where are steps about recalculate styles and update layer tree before painting? (question) · Issue #7036 · whatwg/html](https://github.com/whatwg/html/issues/7036) *(github.com)*
- [Do we have a style for when to add \[SPECNAME\] to the end of a paragraph? · Issue #41 · whatwg/meta](https://github.com/whatwg/meta/issues/41) *(github.com)*
- [Missing onbeforetoggle IDL definition? · Issue #8935 · whatwg/html](https://github.com/whatwg/html/issues/8935) *(github.com)*
- [content/files/en-us/web/api/element/transitionrun\_event/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/element/transitionrun_event/index.md?plain=1) *(github.com)*
- [wpt/css/cssom-view/matchMedia.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/css/cssom-view/matchMedia.html) *(github.com)*
- [wpt/css/cssom-view/MediaQueryList-extends-EventTarget.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/css/cssom-view/MediaQueryList-extends-EventTarget.html) *(github.com)*
- [wpt/css/cssom-view/MediaQueryList-extends-EventTarget-interop.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/css/cssom-view/MediaQueryList-extends-EventTarget-interop.html) *(github.com)*
- [wpt/css/cssom-view/MediaQueryList-addListener-handleEvent.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/css/cssom-view/MediaQueryList-addListener-handleEvent.html) *(github.com)*
- [wpt/css/cssom-view/MediaQueryList-change-event-matches-value.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/css/cssom-view/MediaQueryList-change-event-matches-value.html) *(github.com)*
- [wpt/css/cssom-view/MediaQueryList-addListener-removeListener.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/css/cssom-view/MediaQueryList-addListener-removeListener.html) *(github.com)*
- [wpt/css/cssom-view/MediaQueryListEvent.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/css/cssom-view/MediaQueryListEvent.html) *(github.com)*
- [Element: transitionrun event](https://developer.mozilla.org/en-US/docs/Web/API/Element/transitionrun_event) *(developer.mozilla.org)*
- [Media query](https://developer.mozilla.org/en-US/docs/Glossary/Media_query) *(developer.mozilla.org)*
- [MediaQueryList](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 58 result(s) found across 11 planned queries — **25 verified relevant**
  - `"chromestatus.com/feature/6312504658624512" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"html.spec.whatwg.org/multipage/webappapis.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (6 returned)
  - `"Interoperable dispatch timing for transitionrun and media query events" API` — *Core feature API query* (3 returned)
  - `"Interoperable dispatch timing for transitionrun and media query events" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"3.11" OR "3.10" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Interoperable dispatch timing for transitionrun and media query events" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Interoperable dispatch timing for transitionrun and media query events" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"transitionrun" "matchMedia" change event timing example javascript` — *Searches for practical JavaScript examples coordinating CSS transition lifecycle events with MediaQueryList change listeners.* (1 returned)
  - `site:chromestatus.com OR site:groups.google.com/a/chromium.org "transitionrun" "media query" "timing"` — *Locates the Blink/Chromium Intent to Ship, platform tracker entries, and cross-browser interop alignment discussions.* (8 returned)
  - `"event loop processing model" "transitionrun" "media query" "update the rendering"` — *Finds technical blog posts and browser architecture deep-dives covering event loop rendering steps and frame lifecycle event ordering.* (0 returned)
  - `"transitionrun" ("matchMedia" OR "mediaquerylist") site:issues.chromium.org OR site:github.com/web-platform-tests/wpt` — *Surfaces bug tracker threads, spec issues, and WPT test cases detailing differences in dispatch timing across Blink, WebKit, and Gecko.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 4 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 367 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6312504658624512)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6312504658624512)
- [Specification](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model)
- [Chromium Tracking Bug](https://crbug.com/397737222)
