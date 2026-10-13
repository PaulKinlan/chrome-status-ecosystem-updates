# Interoperable dispatch timing for transitionrun and media query events

> **Report Week:** 2026-W42 | **Milestone:** Chrome 153 | **Category:** Enabled by default

## Overview

Aligns Blink's dispatch timing for animation "transitionrun" event and media query "change" event with the spec, making the timing interoperable with Gecko and WebKit. More precisely, as per HTML window event loop specification, "transitionrun" events will be fired at Step 3.11 even for animations created earlier in the same iteration (instead of delaying them for a later iteration), and the media query "change" event will be fired at Step 3.10 before firing any pending animation events (instead of intermixing them with animation events at Step 3.11).

## Ecosystem Status

- **Momentum:** Emerging (footprint 100 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Shipped by default in Chrome 153 and Microsoft Edge 153 via the \`EventTimingMatchingHTML\` implementation, this update aligns Chromium with the WHATWG HTML window event loop specification. By firing media query change events at Step 3.10 before animation events, and firing CSS \`transitionrun\` events at Step 3.11 within the same iteration, Chromium resolves a longstanding divergence from other engines. This change brings full three-engine interoperability alongside Gecko and WebKit, establishing unified event dispatch sequencing across the modern web platform.

### Recommendations
- Actionable Advice: Teams can rely on consistent media query and transition event sequencing across all current browsers without needing polyfills or browser-sniffing branches. Developers managing complex animation state machines should audit and clean up legacy defensive workarounds, such as artificial \`setTimeout\` or chained \`requestAnimationFrame\` delays previously required to synchronize responsive style updates in Blink.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 153 is now in beta! Try out new CSS scroll container options, Rust-based XML parsing, declarative camera and microphone HTML elements, and the new WebGPU buffer\_view feature. https://t.co/QVG8pp2SRN" / X" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Chrome for Developers on X: "Chrome 153 is now in beta! Try out new CSS scroll container options, Rust-based XML parsing, declarative camera and microphone HTML elements, and the new WebGPU buffer\_view feature. https://t.co/QVG8pp2SRN" / X](https://x.com/ChromiumDev/status/2093424350036660456) — *by @ChromiumDev, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Chrome 153 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/153) *(developer.chrome.com)*
  > \*\*"Interoperable dispatch timing for transitionrun and media query events"\*\* is a web platform conformance update shipped in Chromium/Blink (introduced in \*\*Chrome 153\*\* and \*\*Microsoft Edge 153\*\*) The change aligns Chromium's event dispatch order wi...
- [Microsoft Edge 153 web platform release notes (Sep. 10, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/153) *(learn.microsoft.com)*
  > \*\*"Interoperable dispatch timing for transitionrun and media query events"\*\* is a web platform conformance update shipped in Chromium/Blink (introduced in \*\*Chrome 153\*\* and \*\*Microsoft Edge 153\*\*) With this update, all major browser engines consiste...
- [github.io](https://niek.github.io/chrome-features) *(niek.github.io)*
  > \* It directly tracks via Chromium Bug \*\*#397737222\*\* and runtime feature flag \*\*\`EventTimingMatchingHTML\`\*\* Platform Status & Tooling Coverage \* \*\*Chrome Platform Status (\*chromestatus.com\*)\*\*: \* Cataloged under entry \`6312504658624512\` as a pure web...
- [Chrome 153 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/153) *(chromestatus.com)*
  > \* It directly tracks via Chromium Bug \*\*#397737222\*\* and runtime feature flag \*\*\`EventTimingMatchingHTML\`\*\*
- [Experimental Chromium Web Platform Features \| Polypane](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > app\*) — \*Experimental Chromium Web Platform Features\*\*\* app\*) — \*Experimental Chromium Web Platform Features\*\*\*: \* Included in Polypane’s tracking of rendering engine changes, noting the cleanup in event loop sequencing for responsive layout testing ...
- [scroll events (and some other events) get fired along with animation related events \[397737222\] - Chromium](https://issues.chromium.org/issues/397737222) *(issues.chromium.org)*
  > Chromium Sign in
- [\[blink-dev\] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events](http://www.mail-archive.com/blink-dev@chromium.org/msg17091.html) *(mail-archive.com)*
  > Specification https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model Summary &lt;strong&gt;Aligns Blink&#x27;s dispatch timing for animation &quot;transitionrun&quot; event and media query &quot;change&quot; event with the spec,...
- [Chrome 153 beta \| Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/article/2093424350036660456) *(x.com · 2026-08-28T19:43:15)*
  > &lt;strong&gt;Aligns Blink&#x27;s dispatch timing for animation transitionrun events and media query change events with the HTML specification, making the timing interoperable with Gecko and WebKit&lt;/strong&gt;.
- [Chrome 153 beta \| Blog \| Chrome for Developers](https://developer.chrome.google.cn/blog/chrome-153-beta) *(developer.chrome.google.cn)*
  > &lt;strong&gt;Aligns Blink&#x27;s dispatch timing for animation transitionrun events and media query change events with the HTML specification&lt;/strong&gt;, making the timing interoperable with Gecko and WebKit.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [scroll events (and some other events) get fired along with animation related events \[397737222\] - Chromium](https://issues.chromium.org/issues/397737222) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/6312504658624512`)*
  > Chromium Sign in

## 📚 Platform Documentation & Specifications

- [\[css-transitions-1\] Clarify timing of transitionrun and transitionstart · Issue #11665 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/11665) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 56 result(s) found across 11 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/6312504658624512" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"html.spec.whatwg.org/multipage/webappapis.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"Interoperable dispatch timing for transitionrun and media query events" API` — *Core feature API query* (3 returned)
  - `"Interoperable dispatch timing for transitionrun and media query events" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"3.11" OR "3.10" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Interoperable dispatch timing for transitionrun and media query events" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Interoperable dispatch timing for transitionrun and media query events" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"transitionrun" matchMedia change event timing javascript` — *Finds practical JavaScript code examples demonstrating transitionrun and matchMedia change event listener usage and execution order.* (8 returned)
  - `"transitionrun" "media query" timing "event loop" (blink OR chromium OR webkit)` — *Discovers browser engine release notes, intent-to-ship threads, and interop alignment tracking for transitionrun and media query event dispatch timing.* (8 returned)
  - `"transitionrun" "event loop" ("step 3.11" OR "step 3.10") HTML spec` — *Searches for developer deep dives and technical articles detailing the HTML event loop processing model update for animations and media queries.* (6 returned)
  - `"transitionrun" "media query" change event order (site:github.com/whatwg OR site:issues.chromium.org)` — *Finds standards debates, issue tracker discussions, and bug reports regarding dispatch ordering of transition and media query events.* (1 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **5 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 1 result(s) found — **1 verified relevant**
- **Dev.to Community Blogs:** 3 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 6 result(s) found — **5 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 9 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6312504658624512)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6312504658624512)
- [Specification](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model)
- [Chromium Tracking Bug](https://crbug.com/397737222)
