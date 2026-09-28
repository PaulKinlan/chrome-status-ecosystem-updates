# Speculation Rules - moderate viewport heuristics controls

> **Report Week:** 2026-W40 | **Milestone:** Chrome 152 | **Category:** Origin trial

## Overview

Current viewport heuristics for speculation rules don't give any room for developer experimentation.  This experimental feature will provide such controls, and enable developers to figure out if different heuristics parameters give them better results than the default ones.  This is a feature only aimed at experimentation, and there are no plans to ship it as is.

## Ecosystem Status

- **Momentum:** High (180 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The 'Speculation Rules - moderate viewport heuristics controls' feature is an experimental Origin Trial introduced in Chrome 152 designed to let developers test and fine-tune mobile viewport heuristic parameters for speculative loading. Chromium and industry contributors (notably Shopify) are using this trial strictly for empirical telemetry and parameter optimization, explicitly stating there are no plans to ship the tuning controls to the web platform as a permanent API. Consequently, there is no formal web standards track or cross-browser consensus seeking to standardize these specific knobs.

### Recommendations
- Actionable Advice: Web teams should continue relying on standard Speculation Rules eagerness levels ('moderate', 'conservative', 'eager') applied as progressive enhancement. Production systems must avoid architecting around these trial control parameters; only performance engineering teams specifically collaborating with Chromium on speculative navigation research should enroll in the Chrome 152 Origin Trial.
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
- [Guide to implementing speculation rules for more complex sites \| Web Platform \| Chrome for Developers](https://developer.chrome.com/docs/web-platform/implementing-speculation-rules) *(developer.chrome.com · 2025-10-23T00:00:00)*
  > Guía para implementar reglas de especulación en sitios más complejos | Web Platform | Chrome for Developers Ir al contenido principal / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng V...
- [How to use Speculation Rules API to load web pages instantly \| Uxify Blog](https://uxify.com/blog/speculation-rules-api) *(uxify.com · 2024-07-30T00:00:00)*
  > How to use Speculation Rules API to load web pages instantly | Uxify Blog How Strand lifted mobile conversion 16% on existing traffic Strand: +16% mobile conversion Back Log in Get a demo Pick a time Book directly in the calendar +1 888 77 UXIFY Call...
- [Instant Navigations: How to Use the Speculation Rules API for Near-Zero Load Times - DEV Community](https://dev.to/holoflash/instant-navigations-how-to-use-the-speculation-rules-api-for-near-zero-load-times-2cnm) *(dev.to · 2026-01-07T18:41:20)*
  > The eagerness setting controls when speculation happens: Conservative - Triggers on pointerdown (mousedown/touchstart). Minimal waste, minimal gain. Safe starting point. Moderate - <strong>Desktop: 200ms hover or pointerdown</strong>. Mobile: viewpor...
- [Boost Your Site Speed with Speculation Rules API: A Guide to Prerendering and Prefetching](https://www.telerik.com/amp/boost-site-speed-speculation-rules-api-guide-prerendering-prefetching/TEIzeWJNZWtlcWMwamozTE13dzFscDFyODkwPQ2) *(telerik.com · 2025-10-23T14:08:51)*
  > Boost Speed Speculation Rules API: Prerendering, Prefetching Boost Your Site Speed with Speculation Rules API: A Guide to Prerendering and Prefetching by Peter Mbanugo Published: October 23, 2025 7 min read Web , React 0 Comments Summarize with AI: C...
- [Faster Websites with Client-side Prerendering & Speculation Rules API](https://pmbanugo.me/blog/speculation-rules-api) *(pmbanugo.me · 2025-12-09T00:00:00)*
  > Faster Websites with Client-side Prerendering & Speculation Rules API --> Peter Mbanugo Faster Websites with Client-side Prerendering & Speculation Rules API Dec 9, 2025 Prerendering is a common pattern used to speed up web applications. It’s a techn...
- [No More Loading Times: How to Use the Speculation Rules API \| maxcluster](https://maxcluster.de/en/knowledge/blog/article/no-more-loading-times-speculation-rules-api-guide) *(maxcluster.de · 2025-02-13T00:00:00)*
  > In contrast to “immediate” and “eager”, the “moderate” and “conservative” settings are <strong>user-controlled and follow a First-In-First-Out (FIFO) principle with an upper limit of 2.</strong>
- [How to Use the Speculation Rules API on Shopify - Fudge AI](https://www.fudge.ai/guides/speculation-rules-shopify) *(fudge.ai · 2026-08-09T00:00:00)*
  > Mobile has no hover, so Chromium ... changed in Chrome 143; before that, eager behaved like immediate. <strong>moderate on mobile waits until scrolling settles</strong>....
- [Speculation-Rules - Expert Guide to HTTP headers](https://http.dev/speculation-rules) *(http.dev · 2026-06-05T00:00:00)*
  > <strong>The prerender array lists pages to fully render in the background.</strong> The eagerness field controls when speculation triggers. { &quot;prerender&quot;: [{ &quot;source&quot;: &quot;document&quot;, &quot;where&quot;: { &quot;href_matches&...
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > <strong>This origin trial provides experimental controls for speculation rules viewport heuristics</strong>, letting developers test whether alternative heuristics parameters deliver better prefetching and prerendering performance for their sites.
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > <strong>Provides experimental controls for speculation rules viewport heuristics</strong>, enabling developers to test whether alternative heuristics parameters deliver better prefetching and prerendering results than the default settings.
- [Chrome 146 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/146) *(developer.chrome.com · 2026-03-10T00:00:00)*
  > <strong>This extends speculation rules syntax, letting you specify the form_submission field for prerender</strong>.
- [PWA Mobile Testing Checklist 2026: Offline, Installable Experiences \| Mobile Viewer Blog](https://mobileviewer.github.io/pwa-mobile-testing-checklist-2026) *(mobileviewer.github.io · 2026-04-23T00:00:00)*
  > A PWA&#x27;s standalone display mode can behave differently from browser display. <strong>Preview your PWA at real device viewports before testing the service worker layer</strong>.
- [PWA Discovery: You Ain't Seen Nothin Yet - Infrequently Noted](https://infrequently.org/2016/06/pwa-discovery-you-aint-seen-nothin-yet) *(infrequently.org · 2016-06-05T12:18:14)*
  > Ada pitched into the conversation about the state of PWAs -- particularly Chrome&#x27;s heuristics which prompted a Twitter discussion about some of the finer points of the user and developer experience. The background to these conversations is that ...
- [Web-Facing Change PSA: Speculation rules: mobile "moderate" eagerness improvements](https://groups.google.com/a/chromium.org/g/blink-dev/c/YYBd-eksiE8) *(groups.google.com)*
  > On mobile, &quot;moderate&quot; eagerness speculation rules prefetches and prerenders now trigger when a link enters the viewport and passes other conditions that indicate that it&#x27;s more likely to be clicked. The previous behavior, of waiting un...
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=subject%3Aintent+subject%3Ato+subject%3Aexperiment) *(groups.google.com)*
  > Intent to Experiment: Speculation Rules - moderate viewport heuristics controls

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Experiment: Speculation Rules - moderate viewport heuristics controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16920.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6240467143491584`)*
  > [blink-dev] Intent to Experiment: Speculation Rules - moderate viewport heuristics controls Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: Speculation Rules - moderate viewport heuristics controls Yoav Weiss (@Shopi...
- [Developers should be able to experiment with Speculation Rules moderate viewport heuristics \[529423512\] - Chromium](https://issues.chromium.org/issues/529423512) *(issues.chromium.org)* *(Cites: `https://gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9`)*
  > Chromium Sign in
- [\[blink-dev\] Re: Intent to Experiment: Speculation Rules - moderate viewport heuristics controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16943.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9`)*
  > [blink-dev] Re: Intent to Experiment: Speculation Rules - moderate viewport heuristics controls Skip to site navigation (Press enter) [blink-dev] Re: Intent to Experiment: Speculation Rules - moderate viewport heuristics controls Vladimir L...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 37 result(s) found across 10 planned queries — **18 verified relevant**
  - `"chromestatus.com/feature/6240467143491584" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9" -site:gist.github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"Speculation Rules - moderate viewport heuristics controls" API` — *Core feature API query* (0 returned)
  - `"Speculation Rules - moderate viewport heuristics controls" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"Speculation Rules - moderate viewport heuristics controls" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Speculation Rules - moderate viewport heuristics controls" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
  - `"speculationrules" "moderate" ("viewport heuristics" OR "viewport_heuristics")` — *Find real-world JSON syntax, script tags, and code snippets testing moderate eagerness and viewport heuristics in Speculation Rules.* (0 returned)
  - `"Speculation Rules" "viewport heuristics" site:groups.google.com/a/chromium.org/g/blink-dev` — *Locate Chromium blink-dev Intent to Prototype, Experiment, or RFCS threads discussing viewport heuristic controls.* (2 returned)
  - `"speculation rules" ("moderate" OR "eagerness") "viewport heuristics" (prerender OR prefetch) tutorial OR guide` — *Discover performance engineering articles, developer guides, and blog posts detailing how to tune speculation rules heuristics.* (8 returned)
  - `"viewport heuristics" "speculation rules" ("yoavweiss" OR "WICG/nav-speculation")` — *Track web standards development, spec issues, and ecosystem consensus around viewport heuristics experimentation.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 540 item(s) inspected

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6240467143491584)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6240467143491584)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/529423512)
