# Interoperable dispatch timing for transitionrun and media query events

> **Report Week:** 2026-W38 | **Milestone:** Chrome 153 | **Category:** Enabled by default

## Overview

Aligns Blink's dispatch timing for animation "transitionrun" event and media query "change" event with the spec, making the timing interoperable with Gecko and WebKit. More precisely, as per HTML window event loop specification, "transitionrun" events will be fired at Step 3.11 even for animations created earlier in the same iteration (instead of delaying them for a later iteration), and the media query "change" event will be fired at Step 3.10 before firing any pending animation events (instead of intermixing them with animation events at Step 3.11).

## Ecosystem Status

- **Momentum:** Moderate (60 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Interoperable dispatch timing for transitionrun and media query events is currently Enabled by default in Chrome 153. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events](http://www.mail-archive.com/blink-dev@chromium.org/msg17091.html) *(mail-archive.com)*
  > [blink-dev] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events Skip to site navigation (Press enter) [blink-dev] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events ...
- [Eventing in PWA Studio](https://developer.adobe.com/commerce/pwa-studio/guides/general-concepts/eventing) *(developer.adobe.com · 2026-01-29T00:00:00)*
  > <strong>The framework allows extensions to subscribe to it and notifies those extensions when the application dispatches an event</strong>. It also keeps track of all the events that have occurred since app initialization allowing extensions that sub...
- [PWA \| 2025 \| The Web Almanac by HTTP Archive](https://almanac.httparchive.org/en/2025/pwa) *(almanac.httparchive.org · 2026-05-05T00:00:00)*
  > <strong>Lifecycle events dominate the data, with the activate event appearing on 96% of PWA sites and the install event used by 64%</strong>. Functional events see lower but notable adoption, with fetch at 12% for intercepting network requests and pu...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events](http://www.mail-archive.com/blink-dev@chromium.org/msg17091.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6312504658624512`)*
  > [blink-dev] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events Skip to site navigation (Press enter) [blink-dev] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media que...

## 📚 Platform Documentation & Specifications

- [Element: transitionrun event](https://developer.mozilla.org/en-US/docs/Web/API/Element/transitionrun_event) *(developer.mozilla.org)*
- [Media query](https://developer.mozilla.org/en-US/docs/Glossary/Media_query) *(developer.mozilla.org)*
- [MediaQueryList](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 39 result(s) found across 7 planned queries — **3 verified relevant**
  - `"chromestatus.com/feature/6312504658624512" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"html.spec.whatwg.org/multipage/webappapis.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Interoperable dispatch timing for transitionrun and media query events" API` — *Core feature API query* (1 returned)
  - `"Interoperable dispatch timing for transitionrun and media query events" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"3.11" OR "3.10" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Interoperable dispatch timing for transitionrun and media query events" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Interoperable dispatch timing for transitionrun and media query events" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
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
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6312504658624512)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6312504658624512)
- [Specification](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model)
- [Chromium Tracking Bug](https://crbug.com/397737222)
