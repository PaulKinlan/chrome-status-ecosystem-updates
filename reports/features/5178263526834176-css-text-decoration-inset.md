# CSS text-decoration-inset

> **Report Week:** 2026-W43 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

CSS text-decoration-inset controls how far underlines, overlines, and line-through decorations are inset from or extended beyond text run edges. It supports auto, length, and percentage values, including one-value and two-value syntax for setting the start and end offsets. This lets developers adjust decoration spacing and create reveal effects with native text decorations instead of background gradients or additional elements.   sampler: https://static.januschka.com/i-468928416/?asddsaasd MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset  CL: https://chromium-review.googlesource.com/c/chromium/src/+/7748204

### Motivation

This change implements CSS text-decoration-inset (CSS Text Decoration Level 4), including percentage values. It gives authors direct control over decoration inset and reduces the need for wrapper/pseudo-element workarounds used to fine-tune underline/overline/line-through rendering.    sampler: https://static.januschka.com/i-468928416/?asddsaasd MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset  CL: https://chromium-review.googlesource.com/c/chromium/src/+/7748204

## Ecosystem Status

- **Momentum:** Emerging (footprint 160 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The CSS \`text-decoration-inset\` property has landed in Chromium (Chrome 157) as part of CSS Text Decoration Level 4, enabling native control over underline, overline, and line-through offsets. It eliminates historical developer friction regarding text decoration padding workarounds, though cross-browser availability is still rolling out as Gecko tracks implementation.

### Recommendations
- Actionable Advice: Web teams can safely use \`text-decoration-inset\` as a progressive enhancement today, ensuring that critical text styling remains robust in fallback browsers that do not yet support custom line offsets.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers (@ChromiumDev) on X" (0 points, 0 comments).

## Web-features Group

*group-level data: web-features [`text-decoration`](https://webstatus.dev/features/text-decoration), shared with 3 other ChromeStatus features*

- Share of tests passing in the web-features group `text-decoration` on [wpt.fyi](https://wpt.fyi/results?q=feature:text-decoration) (via webstatus.dev) — stable: Chrome 76% · Edge 76.6% · Firefox 84.2% · Safari 65.5%; experimental: Chrome 90.1% · Edge 90.1% · Firefox 84.2% · Safari 80.7%

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/status/2102804599325528424) — *by @ChromiumDev, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [text-decoration-inset is Like Padding for Text Decorations \| CSS-Tricks](https://css-tricks.com/text-decoration-inset-is-like-padding-for-text-decorations) *(css-tricks.com)*
  > Instead of being rigidly bound to the edges of the content/text box, lines can now be shortened, lengthened, or shifted natively \*\*CSS-Tricks ("\*text-decoration-inset is Like Padding for Text Decorations\*")\*\*
- [chrome.com](https://developer.chrome.com/docs/css-ui) *(developer.chrome.com)*
  > \*\*Chrome for Developers / Release Announcements (\`Chrome 154\`)\*\* \*\*Focus:\*\* Highlighted the implementation and shipping schedule of \`text-decoration-inset\` in Chromium/Chrome
- [\[blink-dev\] Intent to Prototype: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg16309.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: CSS text-decoration-inset Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS text-decoration-inset Helmut Januschka Fri, 10 Apr 2026 04:36:16 -0700 \*Contact emails\* \[email&#160;protected\] \*Spec...
- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17259.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset Mike Taylor Mon, 24 Aug 2026 06:36:24 -0700 On 8/23/26 9:43 a.m., Helmut Januschka wrote: \*Conta...
- [\[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17255.html) *(mail-archive.com)*
  > This &lt;strong&gt;lets developers adjust decoration spacing and create reveal effects with native text decorations instead of background gradients or additional elements&lt;/strong&gt;. sampler: https://static.januschka.com/i-468928416/?asddsaasd MDN: https://d...
- [Experimental Chromium Web Platform Features \| Polypane](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > This lets developers adjust decoration spacing and create reveal effects with native text decorations instead of background gradients or additional elements. sampler: https://static.januschka.com/i-468928416/?asddsaasd MDN: https://developer.mozilla....
- ["text-decoration-inset" CSS property - CSS HTML Validator](https://www.htmlvalidator.com/help.php?m=1&h=text-decoration-inset) *(htmlvalidator.com)*
  > CSS HTML Validator - The all-in-one HTML &amp; CSS web development tool for Windows, &amp; console tool for Mac and Linux ... This property adjusts the start and end endpoints of line decorations. Positive values move an endpoint inward, trimming the...
- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17290.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; sampler: https://static.januschka.com/i-468928416/?asddsaasd &gt;&gt; &gt;&gt; &gt;&gt; MDN: &gt;&gt; https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset &gt;&gt; &gt;&gt; &gt;&gt; CL: https:/...
- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com · 2026-09-22T00:00:00)*
  > The text-decoration-inset CSS property &lt;strong&gt;controls how far underlines, overlines, and line-through decorations are inset from or extended beyond text run edges&lt;/strong&gt;. It supports auto, length, and percentage values, including one-value and tw...
- [Chrome 154 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com · 2026-09-02T00:00:00)*
  > The text-decoration-inset CSS property &lt;strong&gt;controls how far underlines, overlines, and line-through decorations are inset from or extended beyond text run edges&lt;/strong&gt;. It supports auto, length, and percentage values, including one-value and tw...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [CSS text-decoration-inset · Issue #1349 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1349) *(github.com · 2026-08-17T19:47:28)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > CSS text-decoration-inset · Issue #1349 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reloa...
- [Updates for Chrome Canary, 05 Oct 2026 by Elchi3 · Pull Request #30757 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30757) *(github.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > Updates for Chrome Canary, 05 Oct 2026 by Elchi3 · Pull Request #30757 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another ta...
- [\[blink-dev\] Intent to Prototype: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg16309.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > \[blink-dev\] Intent to Prototype: CSS text-decoration-inset Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS text-decoration-inset Helmut Januschka Fri, 10 Apr 2026 04:36:16 -0700 \*Contact emails\* \[email&#160;protec...
- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17259.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset Mike Taylor Mon, 24 Aug 2026 06:36:24 -0700 On 8/23/26 9:43 a.m., Helmut Januschka wro...
- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset`)*
  > csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refre...

## 📚 Platform Documentation & Specifications

- [text-decoration-inset CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset) *(developer.mozilla.org)*
- [text-decoration-inset · Issue #4462 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4462) *(github.com)*
- [CSS text-decoration-inset · Issue #1349 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1349) *(github.com)*
- [Updates for Chrome Canary, 05 Oct 2026 by Elchi3 · Pull Request #30757 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30757) *(github.com)*
- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)*
- [Propriété CSS text-decoration-inset - MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Properties/text-decoration-inset) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 66 result(s) found across 11 planned queries — **15 verified relevant**
  - `"chromestatus.com/feature/5178263526834176" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (5 returned)
  - `"drafts.csswg.org/css-text-decor-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSS text-decoration-inset" API` — *Core feature API query* (4 returned)
  - `"CSS text-decoration-inset" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"static.januschka" OR "developer.mozilla" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS text-decoration-inset" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS text-decoration-inset" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `CSS text-decoration-inset tutorial guide examples` — *Find community blog posts and developer guides explaining how to use text-decoration-inset* (8 returned)
  - `CSS text-decoration-inset property syntax value auto length percentage` — *Discover precise CSS syntax, property definitions, and value options for text-decoration-inset* (8 returned)
  - `CSS text-decoration-inset Chromium feature implementation status` — *Track browser support, Chromium changelogs, and ecosystem announcements regarding text-decoration-inset* (8 returned)
  - `text-decoration-inset underlines reveal effects workaround CSS` — *Explore community discussions on replacing pseudo-element underline workarounds with native text-decoration-inset* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 6 result(s) found — **4 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **1 verified relevant**
- **Dev.to Community Blogs:** 5 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 3 result(s) found — **3 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
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
