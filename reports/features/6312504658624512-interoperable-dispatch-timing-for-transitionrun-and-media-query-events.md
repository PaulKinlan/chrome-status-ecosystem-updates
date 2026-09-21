# Interoperable dispatch timing for transitionrun and media query events

> **Report Week:** 2026-W39 | **Milestone:** Chrome 153 | **Category:** Enabled by default

## Overview

Aligns Blink's dispatch timing for animation "transitionrun" event and media query "change" event with the spec, making the timing interoperable with Gecko and WebKit. More precisely, as per HTML window event loop specification, "transitionrun" events will be fired at Step 3.11 even for animations created earlier in the same iteration (instead of delaying them for a later iteration), and the media query "change" event will be fired at Step 3.10 before firing any pending animation events (instead of intermixing them with animation events at Step 3.11).

## Ecosystem Status

- **Momentum:** High (330 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Interoperable dispatch timing for transitionrun and media query events is currently Enabled by default in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 153 is now in beta! Try out new CSS scroll container options, Rust-based XML parsing, declarative camera and microphone HTML elements, and the new WebGPU buffer\_view feature. https://t.co/QVG8pp2SRN" / X" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Chrome for Developers on X: "Chrome 153 is now in beta! Try out new CSS scroll container options, Rust-based XML parsing, declarative camera and microphone HTML elements, and the new WebGPU buffer\_view feature. https://t.co/QVG8pp2SRN" / X](https://x.com/ChromiumDev/status/2093424350036660456) — *by @ChromiumDev, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events](http://www.mail-archive.com/blink-dev@chromium.org/msg17091.html) *(mail-archive.com)*
  > [blink-dev] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events Skip to site navigation (Press enter) [blink-dev] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events ...
- [scroll events (and some other events) get fired along with animation related events \[397737222\] - Chromium](https://issues.chromium.org/issues/397737222) *(issues.chromium.org)*
  > Chromium Sign in
- [html - WhatWG - HTML5 tokenizer - official test cases? - Stack Overflow](https://stackoverflow.com/questions/71366970/whatwg-html5-tokenizer-official-test-cases) *(stackoverflow.com)*
  > Sub-directory names should be based on the URL of the corresponding part of the multipage-version specification. For example, the URL of &quot;8.3 Base64 utility methods&quot; is https://<strong>html.spec.whatwg.org/multipage/webappapis.html</strong>...
- [Real-Time Dispatch System: A Complete Guide](https://redis.io/blog/real-time-dispatch-system) *(redis.io · 2026-04-08T16:28:55)*
  > Learn how real-time dispatch systems work—from event ingestion to geospatial indexing and matching engines—and how to build low-latency assignment pipelines.
- [JavaScript dispatchEvent Guide: Learn How to Trigger Custom Events](https://zetcode.com/dom/element-dispatchevent) *(zetcode.com · 2025-04-02T00:00:00)*
  > Learn how to use JavaScript&#x27;s dispatchEvent method effectively with examples and detailed explanations. Enhance your web development skills with this step-by-step tutorial.
- [JavaScript dispatchEvent(): Generate Events programmatically](https://www.javascripttutorial.net/javascript-dom/javascript-dispatchevent) *(javascripttutorial.net · 2020-05-22T00:38:58)*
  > In this tutorial, you&#x27;ll learn how to <strong>programmatically create and dispatch events using Event constructor and dispatchEvent() method</strong>.
- [Dispatching custom events](https://javascript.info/dispatch-events) *(javascript.info · 2022-10-14T00:00:00)*
  > For new, custom events, there are definitely no default browser actions, but a code that dispatches such event may have its own plans what to do after triggering the event.
- [Create and Dispatch Events \| Communicate with Events \| Lightning Web Components Developer Guide \| Salesforce Developers](https://developer.salesforce.com/docs/platform/lwc/guide/events-create-dispatch.html) *(developer.salesforce.com)*
  > <strong>When a user clicks a button, the previousHandler or nextHandler function executes</strong>. These functions create and dispatch the previous and next events.
- [Dispatch Walkthrough and Guide - Neoseeker](https://www.neoseeker.com/dispatch/walkthrough) *(neoseeker.com · 2025-11-15T21:05:36)*
  > Welcome to our Dispatch (2025) walkthrough guide! In Dispatch, you’ll need to make choices, whether that be on what action or dialogue choice you’ll make for the story, or during shifts -- what hero you will dispatch to each emergency. These choices ...
- [Attaching an Event to an element and dispatching it correctly](https://stackoverflow.com/questions/58593415/attaching-an-event-to-an-element-and-dispatching-it-correctly) *(stackoverflow.com)*
  > The old fashioned method seems to still be working fine when I tried it, I saw the document event listener console log each time I triggered the event. The updated way is: panel.dispatchEvent(new CustomEvent(&#x27;render&#x27;)); Copylet div = docume...
- [Eventing in PWA Studio](https://developer.adobe.com/commerce/pwa-studio/guides/general-concepts/eventing) *(developer.adobe.com · 2026-01-29T00:00:00)*
  > <strong>The framework allows extensions to subscribe to it and notifies those extensions when the application dispatches an event</strong>. It also keeps track of all the events that have occurred since app initialization allowing extensions that sub...
- [PWA \| 2025 \| The Web Almanac by HTTP Archive](https://almanac.httparchive.org/en/2025/pwa) *(almanac.httparchive.org · 2026-05-05T00:00:00)*
  > <strong>Lifecycle events dominate the data, with the activate event appearing on 96% of PWA sites and the install event used by 64%</strong>. Functional events see lower but notable adoption, with fetch at 12% for intercepting network requests and pu...
- [Responsive JavaScript and the matchMedia Method \| John Kavanagh](https://johnkavanagh.co.uk/articles/responsive-javascript-and-the-matchmedia-method) *(johnkavanagh.co.uk · 2022-10-03T00:00:00)*
  > const isDesktop = window.matchMedia(&#x27;(min-width: 1024px)&#x27;); const handleResize = e =&gt; { if (e.matches) { console.log(&#x27;viewport at least 1024px!&#x27;); } }; // handles our media query as/when it changes isDesktop.addEventListener(&#...
- [Window: transitionrun event](https://contest-server.cs.uchicago.edu/ref/JavaScript/developer.mozilla.org/en-US/docs/Web/API/Window/transitionrun_event.html) *(contest-server.cs.uchicago.edu)*
  > This code adds a listener to the transitionrun event: window.addEventListener(&#x27;transitionrun&#x27;, () =&gt; { console.log(&#x27;Transition is running but hasn&#x27;t necessarily started transitioning yet&#x27;); });
- [One Byte Explainer: matchMedia - DEV Community](https://dev.to/link2twenty/one-byte-explainer-matchmedia-14k5) *(dev.to · 2024-03-20T22:23:27)*
  > // set up the matchMedia instance const isSmall = window.matchMedia(&#x27;(max-width: 480px)&#x27;); // send true/false value off to some function to handle it someFunction(isSmall.matches) // this will be true/false depending on the media matching /...
- [matchMedia().addListener Deprecated: How to Use addEventListener for prefers-color-scheme Theme Preference Changes](https://www.w3tutorials.net/blog/matchmedia-addlistener-marked-as-deprecated-addeventlistener-equivalent) *(w3tutorials.net)*
  > For years, developers used MediaQueryList.addListener() to react to changes in media query matches (e.g., when the user toggles their OS theme). However, this method is now deprecated. The MediaQueryList interface was updated to implement the EventTa...
- [matchMedia().addListener marked as deprecated, addEventListener equivalent?](https://stackoverflow.com/questions/56466261/matchmedia-addlistener-marked-as-deprecated-addeventlistener-equivalent) *(stackoverflow.com)*
  > Looks like safari supports addEventListener(&#x27;change&#x27;, ... as of version 14 (see developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/…). Current version is 15, so this was adopted ~November 12, 2020. 2021-07-20T02:15:09.477Z+00:00 ... Sa...
- [Chrome 153 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/153) *(developer.chrome.com · 2026-09-08T00:00:00)*
  > <strong>Aligns Blink&#x27;s dispatch timing for animation transitionrun events and media query change events with the HTML specification, making the timing interoperable with Gecko and WebKit</strong>.
- [Chrome 153 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/153) *(chromestatus.com)*
  > <strong>Aligns Blink&#x27;s dispatch timing for animation &quot;transitionrun&quot; event and media query &quot;change&quot; event with the spec, making the timing interoperable with Gecko and WebKit</strong>.
- [Chrome 153 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-153-beta) *(developer.chrome.com · 2026-08-20T00:00:00)*
  > <strong>Aligns Blink&#x27;s dispatch timing for animation transitionrun events and media query change events with the HTML specification, making the timing interoperable with Gecko and WebKit</strong>.
- [Intent to Ship: Media Queries: scripting feature](https://groups.google.com/a/chromium.org/g/blink-dev/c/jiCB_twBqnk) *(groups.google.com)*
  > Already implemented in Firefox and WebKit so only interoperability risk would be differing implementions. As of the other day WebKit now matches Chromium and Firefoxs implementation. Gecko: Shipped/Shipping (https://groups.google.com/a/mozilla.org/g/...
- [Intent to Implement and Ship: CSS prefers-reduced-motion media query](https://groups.google.com/a/chromium.org/g/blink-dev/c/NZ3c9d4ivA8/m/BIHFbOj6DAAJ) *(groups.google.com)*
  > <strong>As of October 2018 this media feature is supported by WebKit and Gecko</strong>. The Chrome bug (http://crbug.com/722548) is a top-50 starred Hotlist=Interop bug, and the Edge feature request has 278 votes. ... Interoperability risk is consid...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events](http://www.mail-archive.com/blink-dev@chromium.org/msg17091.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6312504658624512`)*
  > [blink-dev] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events Skip to site navigation (Press enter) [blink-dev] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media que...
- [scroll events (and some other events) get fired along with animation related events \[397737222\] - Chromium](https://issues.chromium.org/issues/397737222) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/6312504658624512`)*
  > Chromium Sign in
- [wpt/html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/tree/master/html) *(github.com)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > wpt/html at master · web-platform-tests/wpt · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You sign...
- [Unclear what to do with fragments on document.open · Issue #2555 · whatwg/html](https://github.com/whatwg/html/issues/2555) *(github.com · 2017-04-18T22:02:24)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > Unclear what to do with fragments on document.open · Issue #2555 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reloa...
- [Where are steps about recalculate styles and update layer tree before painting? (question) · Issue #7036 · whatwg/html](https://github.com/whatwg/html/issues/7036) *(github.com · 2021-09-07T14:50:55)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > Where are steps about recalculate styles and update layer tree before painting? (question) · Issue #7036 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You sig...
- [Event handlers are not compiled against the right global, per spec · Issue #1956 · whatwg/html](https://github.com/whatwg/html/issues/1956) *(github.com · 2016-10-24T14:38:16)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > Event handlers are not compiled against the right global, per spec · Issue #1956 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab ...
- [Do we have a style for when to add \[SPECNAME\] to the end of a paragraph? · Issue #41 · whatwg/meta](https://github.com/whatwg/meta/issues/41) *(github.com · 2017-09-29T13:47:37)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > Do we have a style for when to add [SPECNAME] to the end of a paragraph? · Issue #41 · whatwg/meta · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another ...
- [html - WhatWG - HTML5 tokenizer - official test cases? - Stack Overflow](https://stackoverflow.com/questions/71366970/whatwg-html5-tokenizer-official-test-cases) *(stackoverflow.com)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > Sub-directory names should be based on the URL of the corresponding part of the multipage-version specification. For example, the URL of &quot;8.3 Base64 utility methods&quot; is https://<strong>html.spec.whatwg.org/multipage/webappapis.htm...

## 📚 Platform Documentation & Specifications

- [wpt/html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/tree/master/html) *(github.com)*
- [Unclear what to do with fragments on document.open · Issue #2555 · whatwg/html](https://github.com/whatwg/html/issues/2555) *(github.com)*
- [Where are steps about recalculate styles and update layer tree before painting? (question) · Issue #7036 · whatwg/html](https://github.com/whatwg/html/issues/7036) *(github.com)*
- [Event handlers are not compiled against the right global, per spec · Issue #1956 · whatwg/html](https://github.com/whatwg/html/issues/1956) *(github.com)*
- [Do we have a style for when to add \[SPECNAME\] to the end of a paragraph? · Issue #41 · whatwg/meta](https://github.com/whatwg/meta/issues/41) *(github.com)*
- [content/files/en-us/web/api/element/transitionrun\_event/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/element/transitionrun_event/index.md?plain=1) *(github.com)*
- [MediaQueryList: change イベント - Web API \| MDN](https://developer.mozilla.org/ja/docs/Web/API/MediaQueryList/change_event) *(developer.mozilla.org)*
- [Element: transitionend event - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/transitionend_event) *(developer.mozilla.org)*
- [Element: transitionrun event - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/transitionrun_event) *(developer.mozilla.org)*
- [Media query](https://developer.mozilla.org/en-US/docs/Glossary/Media_query) *(developer.mozilla.org)*
- [MediaQueryList](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 52 result(s) found across 11 planned queries — **31 verified relevant**
  - `"chromestatus.com/feature/6312504658624512" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"html.spec.whatwg.org/multipage/webappapis.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (6 returned)
  - `"Interoperable dispatch timing for transitionrun and media query events" API` — *Core feature API query* (2 returned)
  - `"Interoperable dispatch timing for transitionrun and media query events" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"3.11" OR "3.10" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Interoperable dispatch timing for transitionrun and media query events" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Interoperable dispatch timing for transitionrun and media query events" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
  - `"transitionrun" ("media query" OR matchMedia) "event loop" "update the rendering"` — *Searches for deep-dive technical articles explaining browser event loop execution phases and the exact dispatch order of animation and media query events.* (0 returned)
  - `addEventListener("transitionrun") addEventListener("change") matchMedia timing` — *Finds real-world JavaScript code patterns that coordinate matchMedia change events with transitionrun lifecycle listeners.* (8 returned)
  - `"transitionrun" "media query" "Blink" ("WebKit" OR "Gecko") interoperability` — *Captures announcements, Interop initiatives, and cross-browser alignment reports detailing event dispatch synchronization.* (8 returned)
  - `site:groups.google.com/a/chromium.org/g/blink-dev "transitionrun" "media query"` — *Uncovers Blink-dev 'Intent to Ship' or 'Intent to Implement' discussions, developer feedback, and potential breaking change reviews.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 363 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6312504658624512)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6312504658624512)
- [Specification](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model)
- [Chromium Tracking Bug](https://crbug.com/397737222)
