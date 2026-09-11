# Programmatic scroll promises

> **Report Week:** 2026-W37 | **Milestone:** Chrome 150 | **Category:** Enabled by default

## Overview

Provide a reliable signal for the completion status of a programmatic smooth-scroll. All scroll methods in Element and Window now return Promise objects that get resolved on scroll completion, and the resolved value indicates whether the scroll was interrupted or not.

### Motivation

We have multiple scroll methods available through both Element and Window interfaces. These methods return immediately with the value undefined, which was fine during the early days of the web when scroll was assumed to be instant. This behavior no longer seems adequate from a web developer's perspective today: there is widespread support for smooth-scroll (see browser_compatibility [1] for the CSS property), and it is not easy for the developers to determine when a particular call for a smooth-scroll has completed.

This feature makes the programmatic scroll methods return Promise objects that get resolved on scroll completion. The Promise is resolved with an object with a Boolean field indicating whether the scroll was interrupted or not.

[1] https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior#browser_compatibility

## Ecosystem Status

- **Momentum:** High (100 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** Programmatic scroll promises upgrade standard DOM and Window scrolling methods (`scrollTo`, `scrollBy`, `scrollIntoView`, `scroll`) to return a Promise that resolves with an interruption status object (`{ interrupted: boolean }`) once scrolling finishes. Shipped by default in Chrome 150, the feature solves a decade-long gap for sequencing smooth-scroll animations without polling or fragile event listeners. WebKit and Mozilla have formally indicated support and opened implementation tracking, though cross-engine baseline support is still pending.

### Recommendations
- Actionable Advice: Teams can immediately leverage programmatic scroll promises via progressive enhancement by checking `const scrollPromise = el.scrollTo(opts); if (scrollPromise?.then) { ... }` or falling back to the `scrollend` event. Ensure that direct invocations inside React `useEffect` hooks do not inadvertently return the new Promise object to avoid runtime cleanup errors.
- Shipping enabled by default in Chrome 150. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @lukewarlow: "@smfr on that note should we propose to mark as position support?..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Programmatic scroll promise](https://github.com/WebKit/standards-positions/issues/639) [open]
- **Mozilla:** [Programmatic scroll promise](https://github.com/mozilla/standards-positions/issues/1379) [open]

## Packages & Polyfills

- [zenscroll](https://www.npmjs.com/package/zenscroll) `v4.0.2` — A module to smooth-scroll web pages and scrollable elements (like DIVs)

## 📰 Ecosystem Blogs & Articles

- [Scrolling APIs should return a promise [41406914] - Chromium](https://issues.chromium.org/issues/41406914) *(issues.chromium.org)*
  > Chromium Sign in
- [Re: [blink-dev] Intent to Ship: Programmatic scroll promises](http://www.mail-archive.com/blink-dev@chromium.org/msg16231.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: Programmatic scroll promises Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Programmatic scroll promises Daniel Bratell Wed, 01 Apr 2026 07:59:10 -0700 LGTM2 /Daniel On 2026-04-01 12:21, Alex Rus...
- [[blink-dev] Intent to Prototype: Programmatic scroll promise](https://www.mail-archive.com/blink-dev@chromium.org/msg13879.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Programmatic scroll promise Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Programmatic scroll promise Mustaq Ahmed Tue, 10 Jun 2025 09:02:00 -0700 Contact [email&#160;protected] Explainer http...
- [[blink-dev] Intent to Ship: Programmatic scroll promises](http://www.mail-archive.com/blink-dev@chromium.org/msg16225.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Programmatic scroll promises Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Programmatic scroll promises Chromestatus Tue, 31 Mar 2026 13:49:56 -0700 Contact emails [email&#160;protected] Explainer https...
- [Await scroll completion with Programmatic Scroll Promises - ICS MEDIA](https://ics.media/en/entry/260702) *(ics.media · 2026-07-01T15:00:00)*
  > Await scroll completion with Programmatic Scroll Promises - ICS MEDIA ICS MEDIA Japanese / 日本語 English / 英語 Await scroll completion with Programmatic Scroll Promises Jul 2 Published / ICS INC. KITAGAWA Kyoko ECMAScript Post on X Copy URL Share JavaSc...
- [Re: [blink-dev] Intent to Ship: Programmatic scroll promises](http://www.mail-archive.com/blink-dev@chromium.org/msg16244.html) *(mail-archive.com)*
  > &gt;&gt;&gt; *No information provided* &gt;&gt;&gt; &gt;&gt;&gt; *Link to entry on the Chrome Platform Status* &gt;&gt;&gt; https://chromestatus.com/feature/5082138340491264?gate=5098794827644928 &gt;&gt;&gt; &gt;&gt;&gt; *Links to previous Intent di...
- [Re: [blink-dev] Intent to Ship: Programmatic scroll promises](http://www.mail-archive.com/blink-dev@chromium.org/msg16229.html) *(mail-archive.com)*
  > Alex On Wed, Apr 1, 2026, 4:32 AM Chromestatus &lt;[email protected]&gt; wrote: &gt; *Contact emails* &gt; [email protected] &gt; &gt; *Explainer* &gt; https://github.com/explainers-by-googlers/promisify-scroll &gt; &gt; *Specification* &gt; https://...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Scrolling APIs should return a promise [41406914] - Chromium](https://issues.chromium.org/issues/41406914) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5082138340491264`)*
  > Chromium Sign in
- [`scrollBy` and `scrollTo` now return promises · Issue #43999 · mdn/content](https://github.com/mdn/content/issues/43999) *(github.com · 2026-05-04T12:37:35)* *(Cites: `https://chromestatus.com/feature/5082138340491264`)*
  > `scrollBy` and `scrollTo` now return promises · Issue #43999 · mdn/content · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to...
- [Re: [blink-dev] Intent to Ship: Programmatic scroll promises](http://www.mail-archive.com/blink-dev@chromium.org/msg16231.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/promisify-scroll`)*
  > Re: [blink-dev] Intent to Ship: Programmatic scroll promises Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Programmatic scroll promises Daniel Bratell Wed, 01 Apr 2026 07:59:10 -0700 LGTM2 /Daniel On 2026-04-01 12:21...
- [[blink-dev] Intent to Prototype: Programmatic scroll promise](https://www.mail-archive.com/blink-dev@chromium.org/msg13879.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/promisify-scroll`)*
  > [blink-dev] Intent to Prototype: Programmatic scroll promise Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Programmatic scroll promise Mustaq Ahmed Tue, 10 Jun 2025 09:02:00 -0700 Contact [email&#160;protected] Expl...
- [[blink-dev] Intent to Ship: Programmatic scroll promises](http://www.mail-archive.com/blink-dev@chromium.org/msg16225.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/promisify-scroll`)*
  > [blink-dev] Intent to Ship: Programmatic scroll promises Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Programmatic scroll promises Chromestatus Tue, 31 Mar 2026 13:49:56 -0700 Contact emails [email&#160;protected] Expla...

## 📚 Platform Documentation & Specifications

- [`scrollBy` and `scrollTo` now return promises · Issue #43999 · mdn/content](https://github.com/mdn/content/issues/43999) *(github.com)*
- [Element: scrollTo() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo) *(developer.mozilla.org)*
- [Window: scrollTo() method - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 14 result(s) found across 7 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5082138340491264" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/explainers-by-googlers/promisify-scroll" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"github.com/w3c/csswg-drafts/issues/1562" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"scrollTo" OR "scrollIntoView" "Promise" "interrupted" javascript` — *Finds real-world code snippets, WebIDL signatures, and documentation illustrating the new promise-based scroll completion return values.* (8 returned)
  - `"programmatic scroll" promise ("smooth scroll" OR "scroll completion") (tutorial OR guide OR blog)` — *Surfaces developer guides, articles, and blog tutorials explaining how to handle scroll completion without legacy workarounds like scroll event listeners.* (1 returned)
  - `("promisify scroll" OR "Programmatic scroll promises") ("Intent to Prototype" OR "Intent to Ship" OR chromestatus OR caniuse)` — *Finds browser implementation announcements, shipping status, and standards tracking across Chromium, WebKit, and Gecko engines.* (3 returned)
  - `"w3c/csswg-drafts/issues/1562" OR "promisify-scroll" github discussion` — *Discovers standards debates, spec discussions, and developer feedback around edge cases and design considerations for scroll completion promises.* (4 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 1 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **1 verified relevant**
- **Web Platform Tests (wpt.fyi):** 1 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 2 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5082138340491264)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5082138340491264)
- [Specification](https://github.com/w3c/csswg-drafts/issues/1562)
- [Chromium Tracking Bug](https://issues.chromium.org/41406914)
