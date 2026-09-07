# Support 'path-length' as a CSS property.

> **Report Week:** 2026-W37 | **Milestone:** Chrome 150 | **Category:** Enabled by default

## Overview

This change introduces a new CSS property, 'path-length', which maps to the existing SVG 'pathLength' presentation attribute. It applies to SVG geometry elements that support 'pathLength' (including <path>, <circle>, <rect>, <line>, <polyline>, <polygon>, and <ellipse>).

Exposing 'pathLength' as a CSS property allows authors to specify it via stylesheets, inline styles, and animations, enabling it to participate in normal CSS cascading, specificity, transitions, and animations. The property affects all computations that depend on the total path length, including stroke dash rendering and text positioning along a <textPath>.

CSS declarations override the presentation attribute following standard CSS precedence rules. The initial value of 'path-length' is 'none', which represents the absence of an author-supplied path length and is distinct from an explicit numeric value such as '0'.

Existing attribute-only behavior is preserved when the feature is disabled.

### Motivation

Today, 'pathLength' can only be specified as an SVG presentation attribute. As a result, it cannot participate in the CSS cascade, specificity, animations, or transitions, unlike other SVG geometry properties such as 'r', 'cx', 'cy', 'x', 'y', and 'd', which are already exposed as CSS properties.

This limitation prevents authors from controlling total path length using stylesheets, overriding presentation attributes via CSS, or animating 'pathLength' using standard CSS animation and transition mechanisms. Common authoring patterns, such as CSS-driven stroke dash animations and text-on-path effects that rely on scalable path length, require workarounds or script today.

Promoting 'pathLength' to a CSS property aligns it with existing SVG geometry properties, enables full participation in CSS cascading and animation, and closes a long-standing authoring gap identified by the SVG Working Group (https://github.com/w3c/svgwg/issues/773). Existing attribute behavior is preserved, with CSS declarations taking precedence according to standard cascade rules.

## Ecosystem Status

- **Momentum:** High (90 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** The 'path-length' CSS property promotes the existing SVG 'pathLength' presentation attribute into a fully spec-compliant CSS property taking lengths, resolving long-standing issues in the SVG WG (#773) and CSS WG (#13901). Shipping by default in Chrome 150, it allows total path length calculations to participate in CSS cascading, specificity, transitions, and keyframe animations. While Chromium is leading deployment, formal cross-engine standards alignment is underway.

### Recommendations
- Actionable Advice: Use progressive enhancement via '@supports (path-length: 100px)' for CSS-driven path animations while keeping the traditional SVG 'pathLength' attribute as a baseline fallback for older browsers and non-supporting engines.
- Shipping enabled by default in Chrome 150. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @karlcow: "> Please loop us  Just for clarification, The "please loop us" from @tabatkins is addressed to the SVG WG, not WebKit Team. Viraly who opened the stan..."
- Standards Activity (Mozilla): Latest discussion from @viralipurbey: "> As a matter of procedure, we need more information about this proposal: >  > * Which venue is discussing this proposal? > * What is the URL of the s..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Support path-length CSS property for SVG path elements](https://github.com/WebKit/standards-positions/issues/621) [closed]
- **Mozilla:** [Support path-length CSS property for SVG path elements](https://github.com/mozilla/standards-positions/issues/1363) [open]

## 📰 Ecosystem Blogs & Articles

- [Re: [EXTERNAL] Re: [blink-dev] Re: Intent to Ship: Support 'path-length' as a CSS property.](http://www.mail-archive.com/blink-dev@chromium.org/msg16485.html) *(mail-archive.com)*
  > Re: [EXTERNAL] Re: [blink-dev] Re: Intent to Ship: Support 'path-length' as a CSS property. Skip to site navigation (Press enter) Re: [EXTERNAL] Re: [blink-dev] Re: Intent to Ship: Support 'path-length' as a CSS property. Chris Harrelson Fri, 08 May ...
- [RE: [EXTERNAL] Re: [blink-dev] Re: Intent to Ship: Support 'path-length' as a CSS property.](http://www.mail-archive.com/blink-dev@chromium.org/msg16471.html) *(mail-archive.com)*
  > RE: [EXTERNAL] Re: [blink-dev] Re: Intent to Ship: Support 'path-length' as a CSS property. Skip to site navigation (Press enter) RE: [EXTERNAL] Re: [blink-dev] Re: Intent to Ship: Support 'path-length' as a CSS property. 'Virali Purbey' via blink-de...
- [Re: [blink-dev] Re: Intent to Ship: Support 'path-length' as a CSS property.](http://www.mail-archive.com/blink-dev@chromium.org/msg16470.html) *(mail-archive.com)*
  > *Debuggability* Issues related to this feature are debuggable using existing CSS and SVG inspection tools. The computed value of `path-length` is visible in DevTools’ Computed Style panel. Invalid values are rejected at parse time, and the &quot;none...
- [[blink-dev] RE: Intent to Ship: Support 'path-length' as a CSS property.](http://www.mail-archive.com/blink-dev@chromium.org/msg16693.html) *(mail-archive.com)*
  > Hi, We had an open issue regarding the path-length syntax and have received resolution from both the CSS WG (Review path-length syntax * Issue #13901 * w3c/csswg-drafts&lt;https://github.com/w3c/csswg-drafts/issues/13901&gt;) and the SVG WG (Support ...
- [[blink-dev] Intent to Ship: Support 'path-length' as a CSS property.](http://www.mail-archive.com/blink-dev@chromium.org/msg16462.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · [blink-dev] Intent to Ship: Support &#x27;path-length&#x27; as a CSS property · &#x27;Virali Purbey&#x27; via blink-dev Wed, 06 May 2026 02:36:33 -0700 · Contact emails [email protected]&lt;mailto:[email protec...
- [Chrome 149 | Release notes | Chrome for Developers](https://developer.chrome.com/release-notes/149) *(developer.chrome.com · 2026-06-02T00:00:00)*
  > Chrome, Firefox, and Safari treat ... entry | Spec · Introduces a new CSS property, path-length, which <strong>maps to the SVG pathLength presentation attribute</strong>....
- [Implement the 'path-length' property [40670251] - Chromium](https://issues.chromium.org/issues/40670251) *(issues.chromium.org)*
  > https://github.com/w3c/svgwg/issues/773. Spec-text pending, but likely it will be a syntax like: &lt;number&gt; | none <strong>&#x27;pathLength&#x27; should be a presentation attribute for it</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: [EXTERNAL] Re: [blink-dev] Re: Intent to Ship: Support 'path-length' as a CSS property.](http://www.mail-archive.com/blink-dev@chromium.org/msg16485.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/svgwg/pull/1073`)*
  > Re: [EXTERNAL] Re: [blink-dev] Re: Intent to Ship: Support 'path-length' as a CSS property. Skip to site navigation (Press enter) Re: [EXTERNAL] Re: [blink-dev] Re: Intent to Ship: Support 'path-length' as a CSS property. Chris Harrelson Fr...

## 📚 Platform Documentation & Specifications

- [path-length CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/path-length) *(developer.mozilla.org)*
- [Support pathLength via CSS · Issue #773 · w3c/svgwg](https://github.com/w3c/svgwg/issues/773) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 19 result(s) found across 6 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/4861677550043136" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/w3c/svgwg/pull/1073" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"path-length" CSS SVG (animation OR transition OR "stroke-dasharray")` — *Finds developer guides and blog tutorials demonstrating how to animate SVG path lengths and stroke dashes using the new CSS property.* (1 returned)
  - `"path-length:" (none OR "<number>") SVG CSS code example` — *Discovers real-world CSS code snippets, syntax declarations, and styling examples utilizing path-length on SVG geometry elements.* (5 returned)
  - `"path-length" CSS ("Intent to Ship" OR "Chrome Platform Status" OR "WebKit" OR "Firefox")` — *Tracks browser engine implementation status, intent-to-ship announcements, and browser release notes for path-length as a CSS property.* (5 returned)
  - `"path-length" OR "pathLength" CSS property (site:github.com/w3c OR site:github.com/WebKit OR site:issues.chromium.org)` — *Surfaces specification discussions, standardisation PRs, and browser bug tracker threads surrounding SVG pathLength promotion to CSS.* (7 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 1 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 10 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4861677550043136)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4861677550043136)
- [Specification](https://github.com/w3c/svgwg/pull/1073)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40670251)
