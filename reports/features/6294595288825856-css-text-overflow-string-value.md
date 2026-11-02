# CSS text-overflow: &lt;string&gt; value

> **Report Week:** 2026-W45 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

Adds a &lt;string&gt; value to the text-overflow property.  This allows web authors to specify a custom string (e.g., "(more)") to indicate that text has been clipped. This provides more design flexibility and can be used to create more user-friendly and context-aware overflow indicators.

### Motivation

Chromium's text-overflow implementation only supports the clip and ellipsis keywords, so authors who want a different truncation indicator must truncate the text themselves in JavaScript or overlay a positioned pseudo-element on the end of the line. Supporting the specified &lt;string&gt; value lets the browser truncate the text and render the author's chosen indicator together.

## Ecosystem Status

- **Momentum:** Quiet (-60 points since 2026-10-12; footprint 155 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The CSS text-overflow \`&lt;string&gt;\` value enables developers to replace standard ellipsis indicators with custom inline strings such as \`"(more)"\` or \`"\[..\]"\`. While Firefox has uniquely supported this capability since Firefox 9, long-awaited cross-browser parity is finally arriving with Chromium enabling it by default in Chrome 157 alongside matching WebKit implementation work. This convergence eliminates a decade-long interoperability gap in CSS Overflow Module Level 4 and removes the need for fragile layout hacks.

### Recommendations
- Actionable Advice: Teams should adopt custom string values using progressive enhancement by declaring \`text-overflow: ellipsis\` immediately before \`text-overflow: "…"\` or wrapping styles within \`@supports (text-overflow: "")\`. Existing JavaScript-based clipping routines can be phased out as newer Chromium and WebKit releases achieve widespread stable penetration.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @jja08111: "https://github.com/WebKit/WebKit/pull/72631 has been merged, so close this issue...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS text-overflow: &lt;string&gt; value](https://github.com/WebKit/standards-positions/issues/710) [closed]

## Web-features Group

*group-level data: web-features [`custom-ellipses`](https://webstatus.dev/features/custom-ellipses), shared with 1 other ChromeStatus feature*

- Share of tests passing in the web-features group `custom-ellipses` on [wpt.fyi](https://wpt.fyi/results?q=feature:custom-ellipses) (via webstatus.dev) — stable: Chrome 0% · Edge 0% · Firefox 34.8% · Safari 0%; experimental: Chrome 100% · Edge 100% · Firefox 34.8% · Safari 0%

## 📰 Ecosystem Blogs & Articles

- [stackoverflow.com](https://stackoverflow.com/questions/8401846/custom-text-overflow-css) *(stackoverflow.com)*
  > \*\*Summary:\*\* Firefox was the early pioneer of this feature (having supported \`&lt;string&gt;\` since Firefox 9)
- [stackoverflow.com](https://stackoverflow.com/questions/16603957/easy-way-to-add-a-closing-quote-in-an-ellipsized-over-flowed-text) *(stackoverflow.com)*
  > The web community has long viewed \`text-overflow: &lt;string&gt;\` as an unfinished piece of the CSS overflow toolkit
- [\[blink-dev\] Intent to Prototype: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17287.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS text-overflow: value Chromestatus Tue, 25 Aug 2026 05:36:48 -0700 Contact emails \[email&#160;protected\] Explainer No ...
- [\[blink-dev\] Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17500.html) *(mail-archive.com)*
  > This is a support CSS value; it does not deprecate or change the behavior of any existing API, so it poses no WebView compatibility risk. Debuggability No information provided Will this feature be supported on all six Blink platforms (Windows, Mac, L...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com · 2026-10-30T05:29:22)*
  > sampler: https://static.janusc... window) \| ChromeStatus.com entry \| Spec ↗ (opens in new window) &lt;strong&gt;Adds a &lt;string&gt; value to the text-overflow property&lt;/strong&gt;....
- [\[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17513.html) *(mail-archive.com)*
  > &gt; LGTM1 &gt; &gt; On Sunday, September ... \*Specification\* &gt;&gt; https://drafts.csswg.org/css-overflow-4/#text-overflow &gt;&gt; &gt;&gt; \*Summary\* &gt;&gt; &lt;strong&gt;Adds a &lt;string&gt; value to the text-overflow property&lt;/strong&gt;....
- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17514.html) *(mail-archive.com)*
  > Ian On Mon, Sep 21, 2026 at 11:51 ... \*Specification\* &gt;&gt;&gt; https://drafts.csswg.org/css-overflow-4/#text-overflow &gt;&gt;&gt; &gt;&gt;&gt; \*Summary\* &gt;&gt;&gt; &lt;strong&gt;Adds a &lt;string&gt; value to the text-overflow property&lt;/strong&gt;....
- [\[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17512.html) *(mail-archive.com)*
  > &gt; \*No information provided\* &gt; &gt; \*Link to entry on the Chrome Platform Status\* &gt; https://chromestatus.com/feature/6294595288825856?gate=5598631104217088 &gt; &gt; \*Links to previous Intent discussions\* &gt; Intent to Prototype: &gt; https:...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17547.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: · value · Rick Byers Thu, 24 Sep 2026 07:16:32 -0700 · LGTM3 On Tue, Sep 22, 2026 at 7:55 AM Minseong Kim &lt;\[email protected\]&gt; wrote: · &gt; The expec...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17287.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > \[blink-dev\] Intent to Prototype: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS text-overflow: value Chromestatus Tue, 25 Aug 2026 05:36:48 -0700 Contact emails \[email&#160;protected\] Exp...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/css/reference/properties/text-overflow/index.md?plain=1) *(github.com)*
- [mozilla.org](https://bugzilla.mozilla.org/show_bug.cgi?id=883884) *(bugzilla.mozilla.org)*
- [github.com](https://github.com/w3c/csswg-drafts/issues/10844) *(github.com)*
- [Evaluate using CSS \`text-overflow: &lt;string&gt;\` value · Issue #8680 · db-ux-design-system/core-web · GitHub](https://github.com/db-ux-design-system/core-web/issues/8680) *(github.com)*
- [\[css-overflow-4\] Clarification of text-overflow: &lt;string&gt; value; Rendering pipeline · Issue #11683 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/11683) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 57 result(s) found across 12 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/6294595288825856" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-overflow" -site:developer.mozilla.org` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"drafts.csswg.org/css-overflow-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (6 returned)
  - `"CSS text-overflow: <string> value" API` — *Core feature API query* (3 returned)
  - `"CSS text-overflow: <string> value" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"text-overflow" OR "user-friendly" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS text-overflow: <string> value" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (5 returned)
  - `"CSS text-overflow: <string> value" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"text-overflow" custom string css (tutorial OR guide OR "how to")` — *Discovers web development tutorials and practical guides demonstrating how to use custom string values in CSS text-overflow.* (8 returned)
  - `"text-overflow:" AND ("(more)" OR "[more]" OR "...") css (codepen OR jsfiddle OR snippet)` — *Finds practical CSS code snippets and interactive examples utilizing custom string indicators instead of standard ellipsis.* (8 returned)
  - `"text-overflow" "<string>" ("Intent to Ship" OR "Chrome Platform Status" OR "Firefox")` — *Tracks browser engine implementation milestones, feature shipping intents, and platform release notes.* (8 returned)
  - `site:github.com/w3c/csswg-drafts "text-overflow" "<string>"` — *Surfaces CSS Working Group specification debates, resolution notes, and developer feedback around the string syntax in CSS Overflow 4.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **5 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 8 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 6 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "custom-ellipses", shared with 1 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "custom-ellipses": Chrome 0% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 1 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6294595288825856)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6294595288825856)
- [Specification](https://drafts.csswg.org/css-overflow-4/#text-overflow)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/41492459)
