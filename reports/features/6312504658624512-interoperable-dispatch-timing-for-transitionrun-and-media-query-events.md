# Interoperable dispatch timing for transitionrun and media query events

> **Report Week:** 2026-W40 | **Milestone:** Chrome 153 | **Category:** Enabled by default

## Overview

Aligns Blink's dispatch timing for animation "transitionrun" event and media query "change" event with the spec, making the timing interoperable with Gecko and WebKit. More precisely, as per HTML window event loop specification, "transitionrun" events will be fired at Step 3.11 even for animations created earlier in the same iteration (instead of delaying them for a later iteration), and the media query "change" event will be fired at Step 3.10 before firing any pending animation events (instead of intermixing them with animation events at Step 3.11).

## Ecosystem Status

- **Momentum:** High (240 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Shipping enabled by default in Chrome and Microsoft Edge 153, this update resolves a long-standing Blink divergence from the HTML event loop processing model for CSS transitions and media queries. Blink now dispatches media query 'change' events at Step 3.10 and ensures newly created 'transitionrun' events fire within the current iteration at Step 3.11 rather than being deferred. This brings full cross-browser interoperability alongside Gecko and WebKit, eliminating micro-timing race conditions in complex UI workflows.

### Recommendations
- Actionable Advice: Audit legacy animation codebases to remove defensive workarounds (such as nested requestAnimationFrame or setTimeout hacks) previously used to manage transition and breakpoint synchronization. Test existing reactive styling pipelines in Chrome 153+ to verify that earlier event firing does not expose latent state-ordering assumptions.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 153 is now in beta! Try out new CSS scroll container options, Rust-based XML parsing, declarative camera and microphone HTML elements, and the new WebGPU buffer\_view feature. https://t.co/QVG8pp2SRN" / X" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Chrome for Developers on X: "Chrome 153 is now in beta! Try out new CSS scroll container options, Rust-based XML parsing, declarative camera and microphone HTML elements, and the new WebGPU buffer\_view feature. https://t.co/QVG8pp2SRN" / X](https://x.com/ChromiumDev/status/2093424350036660456) — *by @ChromiumDev, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEdHQztABTAXc8Y3ez-cZS8hGzJqJSFSPOa038N21_Mk_g3Fo83PH_85SH1yyfPXC86jRYbpFMfktXZZ8_-O3NU2Qxqpu5VmWjuYtyF3kijz-xS224ONxNFNvntcNiIX7p_Pd0n44up68U5JX5q9aajzxPFMNURdw==) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGoWV5e1FlA9QoJnZOsW4KOXiotaqZpH1UrD5XausZJEu07BDVDnDLSGCo4WiBg_S-RDwf9mpbN8bNGYFJI6MkILOVqCGUTddnr7RAwbHejiLUFC6GRJFoTEp5Cv_B_pbTNeEA=) *(vertexaisearch.cloud.google.com)*
  > Chrome 153 | Release notes | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中...
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGlOaUQUDUeG3ji_Aoh-TMM8JLeirxttBp2-18XOfc3YS5NSI7JsJ4UjQZg5TraP7zljHkPmp1bFNS0y-iQFTrO5So4spdWJTaglAbj3Iw9O-e0Hsgg9x9-K1ZBF7hTzkBoQn5XppxuqBqdslodCvUUrDuSOGHVrnwRtOuews1WTYLTIRQ=) *(vertexaisearch.cloud.google.com)*
  > Microsoft Edge 153 web platform release notes (Sep. 10, 2026) - Microsoft Edge Developer documentation | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take adv...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG_brKOstDzCO_FRJXHjDO3H0WICGgRgVcm7MkWcT6D5Ui-DYkXGRnQGA-06Ob80D1dwsY7hy14WYIcb5gPX1NA94sq2wjyf5vfxaW63iclLsHIEw6DtAsiS298Hpoxdg==) *(vertexaisearch.cloud.google.com)*
  > Chrome 153 Release Notes - Chrome Platform Status Chrome 153 Release Notes Preview Scheduled Stable Release September 8, 2026 DOM Capability elements: <camera> and <microphone> # Link copied! The <camera> and <microphone> capability elements are decl...
- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEpTENOMqznd4l6Ihn4YKnudEIEvzPXl03IoJqYBKLxv_NAGo_y0EJUDu53IMMlo-OYK0bv0R4IwL7PdyotxbjG4SuF3stYv3q64oF3F3X1WhqtiQX-lTk0hqxzo3U=) *(vertexaisearch.cloud.google.com)*
  > Chrome features Chrome features Enable with --enable-features , disable with --disable-features : Name Description Enabled by default AbortNavigationsFromTabClosures Marks navigations as aborted when the NavigationHandle is destroyed mid navigation, ...
- [polypane.app](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGiFbIJgK9Nqu0oFvurMxDyS_klK-EJ2bR1BuvrkFObpl8gULqb5OIwjJS5QWaRBcvutULIrvJiuGJQJ1FFbtOxd6cf__WorfcJOGvwU-9W4Qq2m1IQFErYWlU73bUieYt09MKBv5MxyFYSnXtn) *(vertexaisearch.cloud.google.com)*
  > Experimental Chromium Web Platform Features | Polypane This website works best with JavaScript enabled. Skip to content Skip to footer Polypane Brand kit Copy icon as SVG Copy logo as SVG Brand guidelines Homepage Search Changelog Polypane 30.1 Lates...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHlKg6vp3xdy_wUcYJU1Vw5wR4Q__9yySAt_yFnA-yX8V27K-cwxkJCtEGmp6ZwI6rRbSIeQsC1a7Emg7W2gy_ogqb38VBc_Hoxnfb7etLSnRwXBDcarbG9sPBkX03WiFQEeAtdKmrg3FMd40dcQ5jWgDOCD845bmWjb3pZkfe7XSF0) *(vertexaisearch.cloud.google.com)*
  > Element: transitionrun event - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs Element transitionrun Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 中文 (简体) Elemen...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGmRxATDA8jsVZoqB0YRHlMB0g9co0iiEgn4kToeZnvJRZWHwRcHcrgpe1kXSR97o1qd3d6AH_QdfdBQNfUsnwOs0TUsy1DkwOw-E53uIo_Kb-GTQI19FgvTkT-vIfMaVKTfo4AqeT28o1Li4dcLHnDpp7rJ3E8KsOHUKxoGDI6cPD0) *(vertexaisearch.cloud.google.com)*
  > MediaQueryList: change event - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs MediaQueryList change Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) 日本語 中文 (简体) MediaQueryList:...
- [caniuse.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEdPGFKyVU4BiNRUmvDhk41KdfMo7d8_dRRfuwU1G7a4ie1iFqIVR224EudTEDFjPtytYIywziCKaACRANFMt3ttdOEb_-L2cL3unQFskCpt4pD1hy3hqI70ilsiFCDQelipe71fSrssK3TvrfC) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Interoperable dispatch timing for transitionrun and media query events"** is a browser engine conformance update implemented in Chromium/Blink. It aligns Blink's event loop ordering with the [HTML Living Standard event
- [\[blink-dev\] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events](http://www.mail-archive.com/blink-dev@chromium.org/msg17091.html) *(mail-archive.com)*
  > Yes https://wpt.fyi/results/ht... to entry on the Chrome Platform Status https://chromestatus.com/feature/6312504658624512 <strong>This intent message was generated by Chrome Platform Status</strong>....
- [scroll events (and some other events) get fired along with animation related events \[397737222\] - Chromium](https://issues.chromium.org/issues/397737222) *(issues.chromium.org)*
  > PSA: groups.google.com/a/chromium.org/g/blink-dev/c/OC_kIQX66OQ/m/kfyPN-i9GwAJ Chromestatus: https://chromestatus.com/feature/6312504658624512 <strong>Fixed: 397737222 Change-Id: I92f406c3ad68adecea3ca964b42d300307987eec</strong> Reviewed-on: https:/...
- [Chrome 153 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/153) *(developer.chrome.com · 2026-09-08T00:00:00)*
  > <strong>Aligns Blink&#x27;s dispatch timing for animation transitionrun events and media query change events with the HTML specification, making the timing interoperable with Gecko and WebKit</strong>.
- [Chrome 153 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/153) *(chromestatus.com)*
  > <strong>Aligns Blink&#x27;s dispatch timing for animation &quot;transitionrun&quot; event and media query &quot;change&quot; event with the spec</strong>, making the timing interoperable with Gecko and WebKit.
- [Chrome 153 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-153-beta) *(developer.chrome.com · 2026-08-20T00:00:00)*
  > <strong>Aligns Blink&#x27;s dispatch timing for animation transitionrun events and media query change events with the HTML specification</strong>, making the timing interoperable with Gecko and WebKit.
- [Experimental Chromium Web Platform Features \| Polypane](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > <strong>Aligns Blink&#x27;s dispatch timing for animation &quot;transitionrun&quot; event and media query &quot;change&quot; event with the spec</strong>, making the timing interoperable with Gecko and WebKit.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events](http://www.mail-archive.com/blink-dev@chromium.org/msg17091.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6312504658624512`)*
  > Yes https://wpt.fyi/results/ht... to entry on the Chrome Platform Status https://chromestatus.com/feature/6312504658624512 <strong>This intent message was generated by Chrome Platform Status</strong>....
- [scroll events (and some other events) get fired along with animation related events \[397737222\] - Chromium](https://issues.chromium.org/issues/397737222) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/6312504658624512`)*
  > PSA: groups.google.com/a/chromium.org/g/blink-dev/c/OC_kIQX66OQ/m/kfyPN-i9GwAJ Chromestatus: https://chromestatus.com/feature/6312504658624512 <strong>Fixed: 397737222 Change-Id: I92f406c3ad68adecea3ca964b42d300307987eec</strong> Reviewed-o...
- [wpt/html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/tree/master/html) *(github.com)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > Sub-directory names should be based on the URL of the corresponding part of the multipage-version specification. For example, the URL of &quot;8.3 Base64 utility methods&quot; is https://<strong>html.spec.whatwg.org/multipage/webappapis.htm...
- [Unclear what to do with fragments on document.open · Issue #2555 · whatwg/html](https://github.com/whatwg/html/issues/2555) *(github.com · 2017-04-18T22:02:24)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > Step 23 of https://<strong>html.spec.whatwg.org/multipage/webappapis.html</strong>#dom-document-open says to set the URL of the open()ed document to that of the &quot;responsible document&quot; and we do that by setting the URL from the doc...
- [Consider removing special cancellation behaviour for event handlers · Issue #423 · whatwg/html](https://github.com/whatwg/html/issues/423) *(github.com · 2015-12-18T17:40:20)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > While implementing the special cases defined at https://<strong>html.spec.whatwg.org/multipage/webappapis.html</strong>#the-event-handler-processing-algorithm in Servo, we did some investigations. This test shows i...
- [Event handlers are not compiled against the right global, per spec · Issue #1956 · whatwg/html](https://github.com/whatwg/html/issues/1956) *(github.com · 2016-10-24T14:38:16)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > In that situation, we land in event handling, and eventually https://<strong>html.spec.whatwg.org/multipage/webappapis.html</strong>#the-event-handler-processing-algorithm which I believe invokes https://<strong>html.spec.whatwg.org/multipa...
- [Where are steps about recalculate styles and update layer tree before painting? (question) · Issue #7036 · whatwg/html](https://github.com/whatwg/html/issues/7036) *(github.com · 2021-09-07T14:50:55)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > I decided to look at spec and find out how does UAs realize their own event loop. I found this https://<strong>html.spec.whatwg.org/multipage/webappapis.html</strong>#event-loop-processing-model
- [Do we have a style for when to add \[SPECNAME\] to the end of a paragraph? · Issue #41 · whatwg/meta](https://github.com/whatwg/meta/issues/41) *(github.com · 2017-09-29T13:47:37)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > At the other extreme these [SPECNAME] things should not generally be used unless you are mentioning the spec by name. E.g. https://<strong>html.spec.whatwg.org/multipage/webappapis.html</strong>#integration-with-the-javascript-module-system...
- [base64url variant of btoa/atob · Issue #351 · whatwg/html](https://github.com/whatwg/html/issues/351) *(github.com · 2015-11-20T15:26:15)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > <strong>The HTML specification has two methods for converting between a unicode string to a base64-encoded representation of it, and vice versa</strong>. https://html.spec.whatwg.org/multipage/webappapis.html#dom-windowbase64-btoa The URL-s...
- [Missing onbeforetoggle IDL definition? · Issue #8935 · whatwg/html](https://github.com/whatwg/html/issues/8935) *(github.com · 2023-02-22T23:25:18)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > I think the onbeforetoggle IDL definition is missing from https://<strong>html.spec.whatwg.org/multipage/webappapis.html</strong>#idl-definitions @mfreed7 @josepharhar @domenic can you double check if it&#x27;s supp...

## 📚 Platform Documentation & Specifications

- [wpt/html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/tree/master/html) *(github.com)*
- [Unclear what to do with fragments on document.open · Issue #2555 · whatwg/html](https://github.com/whatwg/html/issues/2555) *(github.com)*
- [Consider removing special cancellation behaviour for event handlers · Issue #423 · whatwg/html](https://github.com/whatwg/html/issues/423) *(github.com)*
- [Event handlers are not compiled against the right global, per spec · Issue #1956 · whatwg/html](https://github.com/whatwg/html/issues/1956) *(github.com)*
- [Where are steps about recalculate styles and update layer tree before painting? (question) · Issue #7036 · whatwg/html](https://github.com/whatwg/html/issues/7036) *(github.com)*
- [Do we have a style for when to add \[SPECNAME\] to the end of a paragraph? · Issue #41 · whatwg/meta](https://github.com/whatwg/meta/issues/41) *(github.com)*
- [base64url variant of btoa/atob · Issue #351 · whatwg/html](https://github.com/whatwg/html/issues/351) *(github.com)*
- [Missing onbeforetoggle IDL definition? · Issue #8935 · whatwg/html](https://github.com/whatwg/html/issues/8935) *(github.com)*
- [content/files/en-us/web/api/element/transitionrun\_event/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/element/transitionrun_event/index.md?plain=1) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 54 result(s) found across 11 planned queries — **15 verified relevant**
  - `"chromestatus.com/feature/6312504658624512" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"html.spec.whatwg.org/multipage/webappapis.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Interoperable dispatch timing for transitionrun and media query events" API` — *Core feature API query* (2 returned)
  - `"Interoperable dispatch timing for transitionrun and media query events" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"3.11" OR "3.10" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Interoperable dispatch timing for transitionrun and media query events" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Interoperable dispatch timing for transitionrun and media query events" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"transitionrun" ("media query" OR matchMedia) "event loop" (blink OR chromium OR webkit)` — *Finds engine alignment announcements, Intent to Ship threads, and browser engine release notes detailing the timing changes for transitionrun and media query listeners.* (7 returned)
  - `"transitionrun" addEventListener "change" matchMedia javascript code example` — *Retrieves code snippets and real-world implementations demonstrating sequential handling of CSS transitions alongside media query change listeners.* (0 returned)
  - `HTML event loop "Step 3.10" "Step 3.11" "transitionrun" "evaluate media queries"` — *Discovers in-depth technical blogs and developer guides explaining the HTML event loop processing steps for animation events versus media query change events.* (0 returned)
  - `site:github.com/web-platform-tests/wpt OR site:issues.chromium.org "transitionrun" "media query" timing` — *Locates spec discussions, issue tickets, and web platform test (WPT) PRs discussing the interoperability bugs and resolution around dispatch ordering.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 365 item(s) inspected

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
