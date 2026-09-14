# Speculation Rules - moderate viewport heuristics controls

> **Report Week:** 2026-W38 | **Milestone:** Chrome 152 | **Category:** Origin trial

## Overview

Current viewport heuristics for speculation rules don't give any room for developer experimentation.  This experimental feature will provide such controls, and enable developers to figure out if different heuristics parameters give them better results than the default ones.  This is a feature only aimed at experimentation, and there are no plans to ship it as is.

## Ecosystem Status

- **Momentum:** High (160 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Speculation Rules - moderate viewport heuristics controls is currently Origin trial in Chrome 152. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- In active Origin Trial in Chrome 152. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Experiment: Speculation Rules - moderate viewport heuristics controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16920.html) *(mail-archive.com)*
  > [blink-dev] Intent to Experiment: Speculation Rules - moderate viewport heuristics controls Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: Speculation Rules - moderate viewport heuristics controls Yoav Weiss (@Shopify) Thu, 0...
- [Developers should be able to experiment with Speculation Rules moderate viewport heuristics \[529423512\] - Chromium](https://issues.chromium.org/issues/529423512) *(issues.chromium.org)*
  > Chromium Sign in
- [\[blink-dev\] Re: Intent to Experiment: Speculation Rules - moderate viewport heuristics controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16943.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Experiment: Speculation Rules - moderate viewport heuristics controls Skip to site navigation (Press enter) [blink-dev] Re: Intent to Experiment: Speculation Rules - moderate viewport heuristics controls Vladimir Levin Wed, ...
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > <strong>This origin trial provides experimental controls for speculation rules viewport heuristics</strong>, letting developers test whether alternative heuristics parameters deliver better prefetching and prerendering performance for their sites.
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > <strong>Provides experimental controls for speculation rules viewport heuristics</strong>, enabling developers to test whether alternative heuristics parameters deliver better prefetching and prerendering results than the default settings.
- [Experimental Chromium Web Platform Features \| Polypane](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > Speculation Rules Moderate Viewport Heuristics Control · SpeculationRulesModerateViewportHeuristicsControl · Web Autocorrect By Default · WebAutocorrectByDefault · WebGPU Experimental Resource Table · WebGPUExperimentalResourceTable · ▹ Digital Crede...
- [Boost Speed Speculation Rules API: Prerendering, Prefetching](https://www.telerik.com/blogs/boost-site-speed-speculation-rules-api-guide-prerendering-prefetching) *(telerik.com · 2025-10-23T14:08:51)*
  > The speculative action should start only when the user is starting to click on the link, for example, on the mousedown event. moderate: <strong>Strikes a balance between eager and conservative</strong>.
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152?hl=en) *(developer.chrome.com · 2026-08-25T15:50:03)*
  > <strong>Provides experimental controls for speculation rules viewport heuristics</strong>, enabling developers to test whether alternative heuristics parameters deliver better prefetching and prerendering results than the default settings.
- [Blazing Fast Websites with Speculation Rules \| DebugBear](https://www.debugbear.com/blog/speculation-rules) *(debugbear.com · 2025-11-03T21:12:14)*
  > Learn how to debug and monitor speculation rules in DevTools. There&#x27;s also a live demo that you can experiment with to see speculation rules in action.
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=subject%3Aintent+subject%3Ato+subject%3Aexperiment) *(groups.google.com)*
  > Intent to Experiment: Speculation Rules - moderate viewport heuristics controls
- [Debug speculation rules with Chrome DevTools \| Chrome for Developers](https://developer.chrome.com/docs/devtools/application/debugging-speculation-rules) *(developer.chrome.com · 2024-05-21T00:00:00)*
  > It also sets the prerender eagerness to moderate which means <strong>the navigations are prerendered when the link is hovered (on desktop), based on viewport (on mobile), or is clicked</strong>. There are similar rules like this on the speculative ru...
- [Adding prefetch and prerender using the Speculation Rules API :: Duncan Mackenzie](https://www.duncanmackenzie.net/blog/speculation-rules) *(duncanmackenzie.net · 2024-05-17T19:31:10)*
  > Well, I’m extremely glad I looked around, because I discovered a browser feature (Chrome only now, but that’s 93% of my page views) I had never heard of, the Speculation Rules API. This feature lets me add a block of configuration to my page, specify...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Experiment: Speculation Rules - moderate viewport heuristics controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16920.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6240467143491584`)*
  > [blink-dev] Intent to Experiment: Speculation Rules - moderate viewport heuristics controls Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: Speculation Rules - moderate viewport heuristics controls Yoav Weiss (@Shopi...
- [Developers should be able to experiment with Speculation Rules moderate viewport heuristics \[529423512\] - Chromium](https://issues.chromium.org/issues/529423512) *(issues.chromium.org)* *(Cites: `https://gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9`)*
  > Chromium Sign in
- [\[blink-dev\] Re: Intent to Experiment: Speculation Rules - moderate viewport heuristics controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16943.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9`)*
  > [blink-dev] Re: Intent to Experiment: Speculation Rules - moderate viewport heuristics controls Skip to site navigation (Press enter) [blink-dev] Re: Intent to Experiment: Speculation Rules - moderate viewport heuristics controls Vladimir L...

## 📚 Platform Documentation & Specifications

- [&lt;script type="speculationrules"&gt; HTML attribute value - HTML \| MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script/type/speculationrules) *(developer.mozilla.org)*
- [Speculation Rules API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API) *(developer.mozilla.org)*
- [Speculation-Rules header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Speculation-Rules) *(developer.mozilla.org)*
- [Sec-Speculation-Tags header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Sec-Speculation-Tags) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 32 result(s) found across 10 planned queries — **14 verified relevant**
  - `"chromestatus.com/feature/6240467143491584" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9" -site:gist.github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"Speculation Rules - moderate viewport heuristics controls" API` — *Core feature API query* (2 returned)
  - `"Speculation Rules - moderate viewport heuristics controls" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"Speculation Rules - moderate viewport heuristics controls" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Speculation Rules - moderate viewport heuristics controls" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (3 returned)
  - `"Speculation Rules" "viewport heuristics" (moderate OR controls OR experiment)` — *Find announcements, design documents, and Intent to Experiment notifications detailing the viewport heuristics controls for Speculation Rules.* (8 returned)
  - `site:groups.google.com/a/chromium.org "viewport heuristics" "speculation rules"` — *Discover blink-dev discussion threads, feedback from engine implementers, and developer consensus on viewport heuristic experimentation.* (1 returned)
  - `"type=\"speculationrules\"" "viewport" (heuristics OR moderate OR threshold)` — *Search for code samples, JSON syntax structures, and attribute configurations used to configure viewport-related speculation heuristics.* (0 returned)
  - `"speculation rules" "moderate" "viewport" ("prefetch" OR "prerender")` — *Explore technical blog posts, performance analyses, and guides explaining how viewport-based speculation heuristics impact prefetch and prerender behavior.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 537 item(s) inspected

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6240467143491584)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6240467143491584)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/529423512)
