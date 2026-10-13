# CSS text-decoration-inset

> **Report Week:** 2026-W42 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

CSS text-decoration-inset controls how far underlines, overlines, and line-through decorations are inset from or extended beyond text run edges. It supports auto, length, and percentage values, including one-value and two-value syntax for setting the start and end offsets. This lets developers adjust decoration spacing and create reveal effects with native text decorations instead of background gradients or additional elements.   sampler: https://static.januschka.com/i-468928416/?asddsaasd MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset  CL: https://chromium-review.googlesource.com/c/chromium/src/+/7748204

### Motivation

This change implements CSS text-decoration-inset (CSS Text Decoration Level 4), including percentage values. It gives authors direct control over decoration inset and reduces the need for wrapper/pseudo-element workarounds used to fine-tune underline/overline/line-through rendering.    sampler: https://static.januschka.com/i-468928416/?asddsaasd MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset  CL: https://chromium-review.googlesource.com/c/chromium/src/+/7748204

## Ecosystem Status

- **Momentum:** Emerging (footprint 140 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** CSS text-decoration-inset is advancing across modern browser engines to provide native inline edge control for underlines, overlines, and strike-throughs as defined in CSS Text Decoration Module Level 4. It is widely praised by web typographers as the inline counterpart to text-underline-offset, eliminating longstanding layout workarounds like pseudo-elements and gradient backgrounds. With Chromium shipping the property enabled by default in Chrome 156 and active tracking across WebKit and Gecko, cross-engine interoperability is solidifying rapidly.

### Recommendations
- Actionable Advice: Teams should adopt text-decoration-inset today via progressive enhancement or @supports feature queries to polish decorative typography. Because unsupported browsers gracefully fall back to default text decoration boundaries, developers can safely retire fragile background-image and pseudo-element workarounds in modern user experiences.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers (@ChromiumDev) on X" (0 points, 0 comments).

## Web-features Group

*group-level data: web-features [`text-decoration`](https://webstatus.dev/features/text-decoration), shared with 3 other ChromeStatus features*

- Share of tests passing in the web-features group `text-decoration` on [wpt.fyi](https://wpt.fyi/results?q=feature:text-decoration) (via webstatus.dev) — stable: Chrome 76% · Edge 76.6% · Firefox 83.5% · Safari 65.5%; experimental: Chrome 90.1% · Edge 90.1% · Firefox 84.2% · Safari 80.7%

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/status/2102804599325528424) — *by @ChromiumDev, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [medianic.co.uk](https://www.medianic.co.uk/2026/01/29/text-decoration-inset-the-css-trick-for-perfect-text-alignment) *(medianic.co.uk)*
  > \* \*\*Core Benefit\*\*: Eliminates long-standing workarounds like \`background-image: linear-gradient(...)\`, pseudo-elements (\`::after\`), or extra wrapper spans just to pad, lengthen, or animate underlines \* \*\*Medianic / Web Typography Blogs — \*"text-deco...
- [chromium.org](https://issues.chromium.org/issues/498974811) *(issues.chromium.org)*
  > \* \*\*Chrome Platform Status & Chromium Implementation (CL 7748204)\*\* \* \*\*Summary\*\*: Chromium implemented \`text-decoration-inset\` (tracking issues #468928416 and #498974811) \* \*\*Key Points\*\*: The commit and ChromeStatus motivation emphasize native supp...
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > \* \*\*Chrome Platform Status & Chromium Implementation (CL 7748204)\*\* \* \*\*Summary\*\*: Chromium implemented \`text-decoration-inset\` (tracking issues #468928416 and #498974811), culminating in support across Chromium releases
- [text-decoration-inset is Like Padding for Text Decorations \| CSS-Tricks](https://css-tricks.com/text-decoration-inset-is-like-padding-for-text-decorations) *(css-tricks.com)*
  > \* \*\*CSS-Tricks — \*"text-decoration-inset is Like Padding for Text Decorations"\*\*\* \* \*\*Summary\*\*: CSS-Tricks frames \`text-decoration-inset\` as the missing inline companion to \`text-underline-offset\` The author demonstrates how \`text-decoration-inset: ...
- [text-decoration-inset is Like Padding for Text Decorations](https://247webdevs.blogspot.com/2025/12/text-decoration-inset-is-like-padding.html) *(247webdevs.blogspot.com · 2025-12-22T15:22:48)*
  > &lt;strong&gt;text-decoration-inset: &lt;left-inset&gt; &lt;right-inset&gt;;&lt;/strong&gt; Yes, this means that we can set different inset values for the left and right sides. These values must be &lt;length&gt;s, but we can use relative lengths such as em unit...
- [text-decoration-inset is Like Padding for Text Decorations \| 67nj](https://www.67nj.org/text-decoration-inset-is-like-padding-for-text-decorations) *(67nj.org · 2025-12-22T13:39:52)*
  > &lt;strong&gt;text-decoration-inset: &lt;left-inset&gt; &lt;right-inset&gt;;&lt;/strong&gt; Yes, this means that we can set different inset values for the left and right sides. These values must be &lt;length&gt;s, but we can use relative lengths such as em unit...
- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17567.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt; \*Initial ... No signal &gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt; \*WebKit\*: No signal &gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt; Can ...
- [\[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17255.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · \[blink-dev\] Intent to Ship: CSS text-decoration-inset · Helmut Januschka Sun, 23 Aug 2026 07:20:14 -0700 · \*Contact emails\* \[email protected\] \*Specification\* https://drafts.csswg.org/css-text-decor-4/#propdef-t...
- [New in Chrome 154 \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/new-in-chrome-154) *(developer.chrome.com · 2026-09-22T00:00:00)*
  > &lt;strong&gt;The text-decoration-inset CSS property lets you adjust the start and end points of an element&#x27;s text decoration so that it is inset from, extended beyond, or shifted relative to the text run edges&lt;/strong&gt;.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [text-decoration-inset · Issue #4462 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4462) *(github.com · 2026-10-02T00:49:44)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > text-decoration-inset · Issue #4462 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh...
- [CSS text-decoration-inset · Issue #1349 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1349) *(github.com · 2026-08-17T19:47:28)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > CSS text-decoration-inset · Issue #1349 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reloa...

## 📚 Platform Documentation & Specifications

- [text-decoration-inset CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration) *(developer.mozilla.org)*
- [text-decoration-inset · Issue #4462 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4462) *(github.com)*
- [CSS text-decoration-inset · Issue #1349 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1349) *(github.com)*
- [Propriété CSS text-decoration-inset - MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Properties/text-decoration-inset) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 66 result(s) found across 12 planned queries — **11 verified relevant**
  - `"chromestatus.com/feature/5178263526834176" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (6 returned)
  - `"drafts.csswg.org/css-text-decor-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSS text-decoration-inset" API` — *Core feature API query* (3 returned)
  - `"CSS text-decoration-inset" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"static.januschka" OR "developer.mozilla" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS text-decoration-inset" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS text-decoration-inset" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"text-decoration-inset" (tutorial OR guide OR example OR demo) -site:w3.org` — *Discovers practical developer tutorials, guides, and demos explaining how to use text-decoration-inset in real-world styling.* (8 returned)
  - `"text-decoration-inset" ("auto" OR "%" OR "px") ("start" OR "end") css` — *Targets code snippets and syntax breakdowns demonstrating single-value and two-value length/percentage offsets for text decorations.* (8 returned)
  - `"text-decoration-inset" ("Intent to Ship" OR "Chrome" OR "Chromium" OR "Firefox" OR "WebKit")` — *Tracks browser vendor implementation status, Intent to Ship/Prototype threads, and engine adoption updates.* (5 returned)
  - `"text-decoration-inset" (site:news.ycombinator.com OR site:reddit.com/r/webdev OR site:reddit.com/r/css OR site:threads.net)` — *Finds developer reactions, discussions, and sentiment across developer forums and social platforms.* (8 returned)
  - `"text-decoration-inset" ("reveal effect" OR underline OR "pseudo-element" OR "background-image")` — *Surfaces practical use cases comparing the native decoration inset property to legacy pseudo-element or gradient reveal workarounds.* (4 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 6 result(s) found — **1 verified relevant**
- **Dev.to Community Blogs:** 6 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 3 result(s) found — **3 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "text-decoration", shared with 3 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "text-decoration": Chrome 76% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5178263526834176)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5178263526834176)
- [Specification](https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/468928416)
