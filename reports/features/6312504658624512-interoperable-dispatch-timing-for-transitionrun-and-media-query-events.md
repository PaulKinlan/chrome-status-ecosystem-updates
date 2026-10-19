# Interoperable dispatch timing for transitionrun and media query events

> **Report Week:** 2026-W43 | **Milestone:** Chrome 153 | **Category:** Enabled by default

## Overview

Aligns Blink's dispatch timing for animation "transitionrun" event and media query "change" event with the spec, making the timing interoperable with Gecko and WebKit. More precisely, as per HTML window event loop specification, "transitionrun" events will be fired at Step 3.11 even for animations created earlier in the same iteration (instead of delaying them for a later iteration), and the media query "change" event will be fired at Step 3.10 before firing any pending animation events (instead of intermixing them with animation events at Step 3.11).

## Ecosystem Status

- **Momentum:** Emerging (footprint 50 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** This change aligns Blink's window event loop dispatch timing for \`transitionrun\` and media query \`change\` events directly with the HTML specification. Shipped in Chrome 153, it ensures that \`transitionrun\` events and media query updates fire consistently at Steps 3.11 and 3.10 respectively, resolving historical timing discrepancies with Gecko and WebKit.

### Recommendations
- Actionable Advice: No code changes are typically required unless your application relies on buggy intermixed event orderings; web teams can rely on deterministic, cross-engine timing behavior moving forward.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 153 is now in beta! Try out new CSS scroll container options, Rust-based XML parsing, declarative camera and microphone HTML elements, and the new WebGPU buffer\_view feature. https://t.co/QVG8pp2SRN" / X" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Chrome for Developers on X: "Chrome 153 is now in beta! Try out new CSS scroll container options, Rust-based XML parsing, declarative camera and microphone HTML elements, and the new WebGPU buffer\_view feature. https://t.co/QVG8pp2SRN" / X](https://x.com/ChromiumDev/status/2093424350036660456) — *by @ChromiumDev, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events](http://www.mail-archive.com/blink-dev@chromium.org/msg17091.html) *(mail-archive.com)*
  > \[blink-dev\] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events ...
- [Chrome 153 beta \| Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/article/2093424350036660456) *(x.com · 2026-08-28T19:43:15)*
  > &lt;strong&gt;Aligns Blink&#x27;s dispatch timing for animation transitionrun events and media query change events with the HTML specification, making the timing interoperable with Gecko and WebKit&lt;/strong&gt;.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events](http://www.mail-archive.com/blink-dev@chromium.org/msg17091.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6312504658624512`)*
  > \[blink-dev\] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media que...

## 📚 Platform Documentation & Specifications

- [Element: transitionrun event - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/transitionrun_event) *(developer.mozilla.org)*
- [MediaQueryList: change event - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/change_event) *(developer.mozilla.org)*
- [content/files/en-us/web/api/element/transitionrun\_event/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/element/transitionrun_event/index.md?plain=1) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 65 result(s) found across 11 planned queries — **5 verified relevant**
  - `"chromestatus.com/feature/6312504658624512" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"html.spec.whatwg.org/multipage/webappapis.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (6 returned)
  - `"Interoperable dispatch timing for transitionrun and media query events" API` — *Core feature API query* (3 returned)
  - `"Interoperable dispatch timing for transitionrun and media query events" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"3.11" OR "3.10" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Interoperable dispatch timing for transitionrun and media query events" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Interoperable dispatch timing for transitionrun and media query events" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `transitionrun event dispatch timing window event loop HTML spec` — *Searches for API documentation and specification details regarding transitionrun event timing in the HTML event loop.* (8 returned)
  - `media query change event timing HTML spec event loop` — *Finds technical articles or discussions explaining the updated dispatch order for media query change events.* (8 returned)
  - `Blink transitionrun media query event loop changes interoperability` — *Looks for release notes, announcements, or ecosystem sentiment regarding Blink alignment with Gecko and WebKit.* (8 returned)
  - `window event loop step 3.11 transitionrun step 3.10 media query change` — *Targets specific technical discussions or tracker issues referencing the exact event loop steps for these events.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 2 result(s) found — **2 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 1 result(s) found — **1 verified relevant**
- **Dev.to Community Blogs:** 3 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*

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
