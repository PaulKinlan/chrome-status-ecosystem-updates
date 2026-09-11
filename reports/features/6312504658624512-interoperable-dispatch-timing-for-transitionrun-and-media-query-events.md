# Interoperable dispatch timing for transitionrun and media query events

> **Report Week:** 2026-W37 | **Milestone:** Chrome 153 | **Category:** Enabled by default

## Overview

Aligns Blink's dispatch timing for animation "transitionrun" event and media query "change" event with the spec, making the timing interoperable with Gecko and WebKit. More precisely, as per HTML window event loop specification, "transitionrun" events will be fired at Step 3.11 even for animations created earlier in the same iteration (instead of delaying them for a later iteration), and the media query "change" event will be fired at Step 3.10 before firing any pending animation events (instead of intermixing them with animation events at Step 3.11).

## Ecosystem Status

- **Momentum:** High (160 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Interoperable dispatch timing for transitionrun and media query events is currently Enabled by default in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [[blink-dev] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events](http://www.mail-archive.com/blink-dev@chromium.org/msg17091.html) *(mail-archive.com)*
  > [blink-dev] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events Skip to site navigation (Press enter) [blink-dev] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events ...
- [JavaScript Adding Transitions Using Event Listeners: Complete Guide for 2026](https://copyprogramming.com/howto/javascript-adding-transtion-using-event-listener-click-js) *(copyprogramming.com · 2025-12-03T00:00:00)*
  > const element = document.querySelector(&#x27;.animated-element&#x27;); element.addEventListener(&#x27;transitionend&#x27;, (event) =&gt; { console.log(`Transition ended for property: ${event.propertyName}`); console.log(`Elapsed time: ${event.elapsed...
- [Chrome 153 beta | Blog | Chrome for Developers](https://developer.chrome.com/blog/chrome-153-beta) *(developer.chrome.com · 2026-08-20T00:00:00)*
  > More precisely, as per the HTML ... of delaying them for a later iteration), and <strong>the media query change event will be fired at Step 3.10 before firing any pending animation events</strong> (instead of intermixing them with animation events .....

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events](http://www.mail-archive.com/blink-dev@chromium.org/msg17091.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6312504658624512`)*
  > [blink-dev] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events Skip to site navigation (Press enter) [blink-dev] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media que...
- [wpt/html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/tree/master/html) *(github.com)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > wpt/html at master · web-platform-tests/wpt · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You sign...
- [Unclear what to do with fragments on document.open · Issue #2555 · whatwg/html](https://github.com/whatwg/html/issues/2555) *(github.com · 2017-04-18T22:02:24)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > Unclear what to do with fragments on document.open · Issue #2555 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reloa...
- [Consider removing special cancellation behaviour for event handlers · Issue #423 · whatwg/html](https://github.com/whatwg/html/issues/423) *(github.com · 2015-12-18T17:40:20)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > Consider removing special cancellation behaviour for event handlers · Issue #423 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab ...
- [CSS module scripts · Issue #77 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/77) *(github.com · 2022-10-20T15:11:35)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > CSS module scripts · Issue #77 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your s...
- [Event handlers are not compiled against the right global, per spec · Issue #1956 · whatwg/html](https://github.com/whatwg/html/issues/1956) *(github.com · 2016-10-24T14:38:16)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > Event handlers are not compiled against the right global, per spec · Issue #1956 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab ...
- [Where are steps about recalculate styles and update layer tree before painting? (question) · Issue #7036 · whatwg/html](https://github.com/whatwg/html/issues/7036) *(github.com · 2021-09-07T14:50:55)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > Where are steps about recalculate styles and update layer tree before painting? (question) · Issue #7036 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You sig...
- [Do we have a style for when to add [SPECNAME] to the end of a paragraph? · Issue #41 · whatwg/meta](https://github.com/whatwg/meta/issues/41) *(github.com · 2017-09-29T13:47:37)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > Do we have a style for when to add [SPECNAME] to the end of a paragraph? · Issue #41 · whatwg/meta · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another ...
- [import.meta.url does not include fragments · Issue #5162 · whatwg/html](https://github.com/whatwg/html/issues/5162) *(github.com · 2019-12-17T11:18:05)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > 1: https://<strong>html.spec.whatwg.org/multipage/webappapis.html</strong>#fetch-a-single-module-script 2: https://fetch.spec.whatwg.org/#ref-for-response-url 3: https://fetch.spec.whatwg.org/#response-url 4: https://github.com/web-platform...

## 📚 Platform Documentation & Specifications

- [wpt/html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/tree/master/html) *(github.com)*
- [Unclear what to do with fragments on document.open · Issue #2555 · whatwg/html](https://github.com/whatwg/html/issues/2555) *(github.com)*
- [Consider removing special cancellation behaviour for event handlers · Issue #423 · whatwg/html](https://github.com/whatwg/html/issues/423) *(github.com)*
- [CSS module scripts · Issue #77 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/77) *(github.com)*
- [Event handlers are not compiled against the right global, per spec · Issue #1956 · whatwg/html](https://github.com/whatwg/html/issues/1956) *(github.com)*
- [Where are steps about recalculate styles and update layer tree before painting? (question) · Issue #7036 · whatwg/html](https://github.com/whatwg/html/issues/7036) *(github.com)*
- [Do we have a style for when to add [SPECNAME] to the end of a paragraph? · Issue #41 · whatwg/meta](https://github.com/whatwg/meta/issues/41) *(github.com)*
- [import.meta.url does not include fragments · Issue #5162 · whatwg/html](https://github.com/whatwg/html/issues/5162) *(github.com)*
- [wpt/css/cssom-view/MediaQueryList-extends-EventTarget-interop.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/css/cssom-view/MediaQueryList-extends-EventTarget-interop.html) *(github.com)*
- [wpt/css/cssom-view/MediaQueryList-extends-EventTarget.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/css/cssom-view/MediaQueryList-extends-EventTarget.html) *(github.com)*
- [Element: transitionrun event](https://developer.mozilla.org/en-US/docs/Web/API/Element/transitionrun_event) *(developer.mozilla.org)*
- [Media query](https://developer.mozilla.org/en-US/docs/Glossary/Media_query) *(developer.mozilla.org)*
- [MediaQueryList](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 13 result(s) found across 6 planned queries — **13 verified relevant**
  - `"chromestatus.com/feature/6312504658624512" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"html.spec.whatwg.org/multipage/webappapis.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"transitionrun" ("media query" OR matchMedia) "dispatch timing" OR "event loop" ("Intent to Ship" OR blink-dev OR Chromium)` — *Finds Chromium release notes, Blink-dev intent discussions, and tracking issues regarding the alignment of transitionrun and media query event dispatch timing.* (0 returned)
  - `"transitionrun" addEventListener matchMedia "change" event order timing javascript` — *Locates code samples and tests demonstrating event listeners for transitionrun alongside media query change events and their execution order.* (1 returned)
  - `"transitionrun" "media query" ("step 3.10" OR "step 3.11" OR "update the rendering") "event loop"` — *Targets in-depth technical blogs and developer guides explaining the HTML event loop rendering pipeline steps for media queries and transition event dispatch.* (2 returned)
  - `site:github.com/web-platform-tests/wpt "transitionrun" "matchMedia" OR "mediaquery" timing OR dispatch` — *Uncovers Web Platform Tests (WPT), PR discussions, and spec interop issues across Gecko, WebKit, and Blink for transition and media query event order.* (2 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 355 item(s) inspected

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
