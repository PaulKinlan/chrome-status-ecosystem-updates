# CSS Custom Highlight Universal Selector ::highlight(\*)

> **Report Week:** 2026-W45 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

Introduces a universal selector for custom highlights, ::highlight(\*), which matches the highlight pseudo-elements of all custom highlights regardless of their name.   The \* argument contributes zero specificity, so its declarations act as a base style that rules naming a specific highlight override through the cascade.

### Motivation

Styling shared properties across custom highlights requires repeating the same declarations for every registered name. The CSSWG resolved to allow ::highlight(\*).

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 230 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The CSS Custom Highlight Universal Selector \`::highlight(\*)\` provides an ergonomic base-styling mechanism for the CSS Custom Highlight API by matching all registered highlights regardless of name with zero added specificity. Standardized via CSS Working Group resolutions and shipping enabled by default in Chromium, it eliminates repetitive declaration blocks across multi-highlight architectures. Strong cross-engine consensus and WebKit implementation indicate smooth progression toward cross-browser interoperability.

### Recommendations
- Actionable Advice: Teams utilizing the CSS Custom Highlight API should test \`::highlight(\*)\` for common fallback styling, gating rules behind \`@supports selector(::highlight(\*))\` where older browser releases remain in support matrixes. Avoid immediately stripping existing comma-separated named highlight selectors in production until Safari and Firefox stable channels widely deploy the selector.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @nt1m: "This is implemented in WebKit: https://github.com/WebKit/WebKit/commit/5ed89fc0abf85e2613cd16c9c16ac66c6d64e17d..."
- Standards Activity (Mozilla): Latest discussion from @jnjaeschke: "Agreeing with @emilio, I think this is reasonable...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS Custom Highlight Universal Selector ::highlight(\*)](https://github.com/WebKit/standards-positions/issues/728) [closed]
- **Mozilla:** [CSS Custom Highlight Universal Selector ::highlight(\*)](https://github.com/mozilla/standards-positions/issues/1460) [open]

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides/ui-behaviors/highlight-text-ranges) *(developer.chrome.com)*
  > highlights\` required authoring explicit rules for every highlight identifier (e.g., \`::highlight(search-result)\`, \`::highlight(syntax-keyword)\`) \*\*Comparison with Existing Documentation (MDN & Chrome for Developers):\*\* MDN's \*CSS Custom Highlight API...
- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/5174965228929024) *(img968-dot-cr-status.appspot.com)*
  > highlights\` required authoring explicit rules for every highlight identifier (e.g., \`::highlight(search-result)\`, \`::highlight(syntax-keyword)\`) There was no mechanism to define base styling or CSS custom property defaults across all custom highlight...
- [appspot.com](https://img120-dot-cr-status.appspot.com/feature/5174965228929024) *(img120-dot-cr-status.appspot.com)*
  > \*\*The Solution:\*\* \`::highlight(\*)\` matches all custom highlight pseudo-elements regardless of name
- [googleusercontent.com](https://doc-2gh0-0gig-issuetracker.googleusercontent.com/issues/568010587) *(doc-2gh0-0gig-issuetracker.googleusercontent.com)*
  > \*\*Chrome Platform Status:\*\* Feature entry \*\*"CSS Custom Highlight Universal Selector \`::highlight(\*)\`"\*\* (Feature ID: 5174965228929024)
- [googlesource.com](https://chromium.googlesource.com/chromium/src/+/8555f62ca21d1042182db4843e3f322d8213771a) *(chromium.googlesource.com)*
  > \*\*Details:\*\* Implemented in Blink by Seokho Song and reviewed by Chrome engineers Rune Lillesveen and Stephen Chenney Following consensus in the CSS Working Group (CSSWG), the Blink team issued an \*Intent to Ship\* targeting Chromium 158
- [Custom Highlight Universal Selector ::highlight(\*) \| daily.dev](https://daily.dev/posts/custom-highlight-universal-selector-highlight--f416uv98z) *(daily.dev)*
  > Following consensus in the CSS Working Group (CSSWG), the Blink team issued an \*Intent to Ship\* targeting Chromium 158 dev & Tech Roundups:\*\* Recent roundups covering the latest additions to Chromium 158 and CSS pseudo-elements spotlighted \`::highlig...
- [bsky.app](https://bsky.app/profile/bkardell.com) *(bsky.app)*
  > \*\*GitHub Discussion & PR:\*\* \*W3C CSSWG drafts Issue #9091\* (\*"Add a pseudo-element to style all highlight pseudo-elements"\*) and \*PR #14301\* merged into CSS Pseudo-Elements Level 4 and CSS Custom Highlight API Level 1 \*\*Developer Relations & Socials:...
- [bsky.app](https://bsky.app/profile/bram.us/post/3mycbq47ep22g) *(bsky.app)*
  > \*\*Developer Relations & Socials:\*\* Chrome DevRel (e.g., Bramus Van Damme) and Chromium engineers shared demonstrations on platforms like Bluesky/social channels, illustrating how \`::highlight(\*)\` streamlines syntax highlighters by setting fallback te...
- [chromestatus.com](https://www.chromestatus.com/feature/5436441440026624) *(chromestatus.com)*
  > Commentators note that updating these guides to recommend \`::highlight(\*)\` will simplify text-range tutorials, reducing boilerplate code in collaborative editors, search-in-page highlighters, and spelling/grammar checkers
- [\[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17732.html) *(mail-archive.com)*
  > &gt; &gt; On Wednesday, October 14, 2026 ... a universal selector for custom highlights, ::highlight(\*), &gt;&gt; which &lt;strong&gt;matches the highlight pseudo-elements of all custom highlights &gt;&gt; regardless of their name&lt;/strong&gt;....
- [\[blink-dev\] Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17719.html) *(mail-archive.com)*
  > Explainer No information provided ... a universal selector for custom highlights, ::highlight(\*), which &lt;strong&gt;matches the highlight pseudo-elements of all custom highlights regardless of their name&lt;/strong&gt;....
- [Custom Highlight Universal Selector ::highlight(\*) \| Seokho’s blog](https://blog.seokho.dev/development/2026/10/20/CSS-Custom-Highlight-Universal-Selector.html) *(blog.seokho.dev · 2026-10-20T00:00:00)*
  > I recently added a universal selector for CSS custom highlights, ::highlight(\*), to the relevant CSS Specifications (the bulk of it is actually in CSS Pseudos not CSS Custom Highlights) and implemented it in Chromium. &lt;strong&gt;It will ship in Chrome 1...
- [\[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17730.html) *(mail-archive.com)*
  > On Wednesday, October 14, 2026 ... a universal selector for custom highlights, ::highlight(\*), &gt; which &lt;strong&gt;matches the highlight pseudo-elements of all custom highlights &gt; regardless of their name&lt;/strong&gt;....
- [Re: \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17797.html) *(mail-archive.com)*
  > On Wednesday, October 14, 2026 ... a universal selector for custom highlights, ::highlight(\*), which &lt;strong&gt;matches the highlight pseudo-elements of all custom highlights regardless of their name&lt;/strong&gt;....
- [Chrome 158 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > Chrome 158 Release Notes - Chrome Platform Status Chrome 158 Release Notes Preview Scheduled Stable Release November 17, 2026 (Currently on Beta channel) CSS CSS Custom Highlight Universal Selector ::highlight(\*) # Link copied! Introduces a universal...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/web-platform-dx/web-features/issues/4242) *(github.com)*
- [CSS Custom Highlight Universal Selector ::highlight(\*) · Issue #728 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/728) *(github.com)*
- [github.com](https://github.com/w3c/csswg-drafts/issues/9091) *(github.com)*
- [w3.org](https://www.w3.org/groups/cg/webdx/activity) *(w3.org)*
- [CSS custom highlight API - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Custom_highlight_API) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 64 result(s) found across 11 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/5174965228929024" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"drafts.csswg.org/css-pseudo-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSS Custom Highlight Universal Selector ::highlight(*)" API` — *Core feature API query* (3 returned)
  - `"CSS Custom Highlight Universal Selector ::highlight(*)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"pseudo-elements" OR "highlight(" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS Custom Highlight Universal Selector ::highlight(*)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS Custom Highlight Universal Selector ::highlight(*)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"::highlight(*)" "CSS Custom Highlight API" tutorial OR guide` — *Find developer blog posts and tutorials explaining how to use the universal highlight pseudo-element for base styling.* (8 returned)
  - `"::highlight(*)" "CSS.highlights" example OR demo` — *Search for real-world code snippets pairing CSS ::highlight(\*) rules with the JavaScript Custom Highlight API.* (8 returned)
  - `"::highlight(*)" (site:chromestatus.com OR "Intent to Ship" OR "WebKit" OR "Firefox")` — *Track browser vendor implementation progress, intents to prototype or ship, and release compatibility updates.* (8 returned)
  - `"::highlight(*)" site:github.com/w3c/csswg-drafts/issues` — *Discover standard body deliberations, design discussions, and spec resolutions in the W3C CSSWG issues tracker.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 15 result(s) found — **14 verified relevant**
- **Twitter / X API v2:** *found 8 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 1 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 4 result(s) found — **4 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 4 engineer comment(s) read
- **Web Page Excerpts Ingested:** 9 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5174965228929024)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5174965228929024)
- [Specification](https://drafts.csswg.org/css-pseudo-4/#selectordef-highlight-highlight-name-selector)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/408003366)
