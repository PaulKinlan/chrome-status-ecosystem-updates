# Expose CSSStyleValue hierarchy to Worker contexts

> **Report Week:** 2026-W38 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

The CSS Typed OM spec exposes the CSSStyleValue hierarchy to worker global scopes (\[Exposed=(Window, Worker, PaintWorklet, LayoutWorklet)\]), but Blink only exposed CSSStyleValue, CSSKeywordValue, CSSNumericValue, CSSUnitValue and CSSUnparsedValue to Window and the worklets. As a result these constructors were undefined in Workers, unlike in Firefox and Safari.

### Motivation

Aligns Chrome with the spec's [Exposed] set and removes a cross‑thread inconsistency (these constructors are currently undefined in workers); enables off‑main‑thread CSS value manipulation

## Ecosystem Status

- **Momentum:** Moderate (70 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Expose CSSStyleValue hierarchy to Worker contexts is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17113.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Skip to site navigation (Press enter) [blink-dev] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Javier Fernandez Tue, 04 Aug...
- [Re: \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17119.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Alex Russell Wed, 05...
- [Re: \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17118.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Daniel Bratell Wed, ...
- [CSS style hierarchy - DEV Community](https://dev.to/iraamoni/css-style-hierarchy-6dg) *(dev.to · 2019-12-07T12:21:14)*
  > CSS style hierarchy - DEV Community Skip to content Powered by Algolia Log in Create account DEV Community Add reaction Like Unicorn Exploding Head Raised Hands Fire Jump to Comments Save Boost Pick as gem Copy link Copied to Clipboard Share to X Sha...
- [CSS Specificity Hierarchy](https://www.w3schools.com/css/css_specificity_hierarchy.asp) *(w3schools.com)*
  > CSS Specificity Hierarchy Menu Search field &times; See More NEW W3Schools app iOS & Android Start the adventure Sign In Sign Up --> user-anonymous --> --> &#x2605; +1 --> My W3Schools --> user-authenticated --> Get Certified Upgrade Academy Spaces P...
- [CSS articles • Josh W. Comeau](https://www.joshwcomeau.com/css) *(joshwcomeau.com)*
  > Exploring stacking contexts, one of the most misunderstood mechanisms in CSS.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17113.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5114591051907072`)*
  > [blink-dev] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Skip to site navigation (Press enter) [blink-dev] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Javier Fernandez T...
- [Re: \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17119.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5114591051907072`)*
  > Re: [blink-dev] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Alex Russe...

## 📚 Platform Documentation & Specifications

- [js13kGames: Making the PWA work offline with service workers - Progressive web apps \| MDN](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 27 result(s) found across 6 planned queries — **7 verified relevant**
  - `"chromestatus.com/feature/5114591051907072" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"www.w3.org/TR/css-typed-om-1" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Expose CSSStyleValue hierarchy to Worker contexts" API` — *Core feature API query* (2 returned)
  - `"Expose CSSStyleValue hierarchy to Worker contexts" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"Expose CSSStyleValue hierarchy to Worker contexts" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Expose CSSStyleValue hierarchy to Worker contexts" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 406 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5114591051907072)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5114591051907072)
- [Specification](https://www.w3.org/TR/css-typed-om-1/#stylevalue-subclasses)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/534781956)
