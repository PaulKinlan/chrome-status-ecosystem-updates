# CSS Custom Highlight Universal Selector ::highlight(\*)

> **Report Week:** 2026-W46 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

Introduces a universal selector for custom highlights, ::highlight(\*), which matches the highlight pseudo-elements of all custom highlights regardless of their name.   The \* argument contributes zero specificity, so its declarations act as a base style that rules naming a specific highlight override through the cascade.

### Motivation

Styling shared properties across custom highlights requires repeating the same declarations for every registered name. The CSSWG resolved to allow ::highlight(\*).

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 230 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The CSS Custom Highlight Universal Selector \`::highlight(\*)\` provides a zero-specificity catch-all selector to apply base styling across all registered custom highlights without repetitive declarations \[dee7cd61902698ca\]. Standardized under CSS Pseudo-Elements Module Level 4, the feature enjoys unanimous engine consensus and active rollouts across Chromium, WebKit, and Gecko \[dee7cd61902698ca\]. Developers and advocates perceive it as an essential ergonomic upgrade that completes the CSS Custom Highlight API \[dee7cd61902698ca\].

### Recommendations
- Actionable Advice: Teams working with the CSS Custom Highlight API should adopt \`::highlight(\*)\` as their foundational baseline style, but isolate it in separate CSS rule blocks or gate it behind \`@supports selector(::highlight(\*))\` to prevent legacy engines from invalidating grouped selectors. Continue targeting specific highlight names for intentional overrides, relying on the wildcard's zero specificity to manage inheritance cleanly \[dee7cd61902698ca\].
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @nt1m: "This is implemented in WebKit: https://github.com/WebKit/WebKit/commit/5ed89fc0abf85e2613cd16c9c16ac66c6d64e17d..."
- Standards Activity (Mozilla): Latest discussion from @jnjaeschke: "Agreeing with @emilio, I think this is reasonable...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS Custom Highlight Universal Selector ::highlight(\*)](https://github.com/WebKit/standards-positions/issues/728) [closed]
- **Mozilla:** [CSS Custom Highlight Universal Selector ::highlight(\*)](https://github.com/mozilla/standards-positions/issues/1460) [closed]

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/5174965228929024) *(img968-dot-cr-status.appspot.com)*
  > \*\*The Problem:\*\* Previously, when using the CSS Custom Highlight API (\`CSS.highlights\`), developers had to write repetitive CSS selectors for every custom highlight name registered in JavaScript (e.g., \`::highlight(search-result)\`, \`::highlight(spell...
- [chromium.org](https://issues.chromium.org/408003366) *(issues.chromium.org)*
  > \*\*The Solution:\*\* \`::highlight(\*)\` acts as a catch-all wildcard selector matching all custom highlight pseudo-elements regardless of identifier \*\*Cascade & Specificity:\*\* Similar to the element universal selector \`\*\`, the \`\*\` argument in \`::highlight...
- [googlesource.com](https://chromium.googlesource.com/chromium/src/+/8555f62ca21d1042182db4843e3f322d8213771a) *(chromium.googlesource.com)*
  > \*\*ChromeStatus Feature Entry (5174965228929024):\*\* Led by Blink engineer Seokho Song and reviewed by Rune Lillesveen, Chromium added support for parsing the \`\*\` delimiter within \`::highlight()\`
- [bsky.app](https://bsky.app/profile/bram.us/post/3mycbq47ep22g) *(bsky.app)*
  > \*\*Chrome DevRel & Socials (e.g., Bramus Van Damme):\*\* Highlighted as a major quality-of-life win for styling workflows
- [Custom Highlight Universal Selector ::highlight(\*) \| daily.dev](https://daily.dev/posts/custom-highlight-universal-selector-highlight--f416uv98z) *(daily.dev)*
  > \*\*Developer Community Aggregators (e.g., daily.dev, modern CSS digests):\*\* Welcomed the change as the "missing piece" of the Custom Highlight API
- [\[blink-dev\] Intent to Prototype: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17171.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: CSS Custom Highlight Universal Selector ::highlight(\*) Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS Custom Highlight Universal Selector ::highlight(\*) Chromestatus Thu, 13 Aug 2026 17:35:...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17797.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) Mike Taylor Mon, 19 Oct 2026 1...
- [\[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17730.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) Alex Russell Wed, 14 Oct 2026 12:19:17...
- [CSS Pseudo-Elements Module Level 4](https://w3c.github.io/csswg-drafts/css-pseudo) *(w3c.github.io · 2022-10-07T00:00:00)*
  > CSS Pseudo-Elements Module Level 4 CSS Pseudo-Elements Module Level 4 Editor’s Draft , 15 October 2026 More details about this document This version: https://drafts.csswg.org/css-pseudo-4/ Latest published version: https://www.w3.org/TR/css-pseudo-4/...
- [\[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17732.html) *(mail-archive.com)*
  > &gt; &gt; On Wednesday, October 14, 2026 ... a universal selector for custom highlights, ::highlight(\*), &gt;&gt; which &lt;strong&gt;matches the highlight pseudo-elements of all custom highlights &gt;&gt; regardless of their name&lt;/strong&gt;....
- [\[blink-dev\] Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17719.html) *(mail-archive.com)*
  > Explainer No information provided ... a universal selector for custom highlights, ::highlight(\*), which &lt;strong&gt;matches the highlight pseudo-elements of all custom highlights regardless of their name&lt;/strong&gt;....
- [\[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17786.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; On Wednesday, October 14, ... a universal selector for custom highlights, ::highlight(\*), &gt;&gt;&gt;&gt; which &lt;strong&gt;matches the highlight pseudo-elements of all custom highlights &gt;&gt;&gt;&gt; regardless of their nam...
- [Chrome 158 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > Introduces a universal selector for custom highlights, ::highlight(\*), which &lt;strong&gt;matches the highlight pseudo-elements of all custom highlights regardless of their name&lt;/strong&gt;.
- [Custom Highlight Universal Selector ::highlight(\*) \| Seokho’s blog](https://blog.seokho.dev/development/2026/10/20/CSS-Custom-Highlight-Universal-Selector.html) *(blog.seokho.dev · 2026-10-20T00:00:00)*
  > I recently added a universal selector for CSS custom highlights, ::highlight(\*), to the relevant CSS Specifications (the bulk of it is actually in CSS Pseudos not CSS Custom Highlights) and implemented it in Chromium. &lt;strong&gt;It will ship in Chrome 1...
- [\[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17779.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; On Wednesday, October 14, ... a universal selector for custom highlights, ::highlight(\*), &gt;&gt;&gt; which &lt;strong&gt;matches the highlight pseudo-elements of all custom highlights &gt;&gt;&gt; regardless of their name&lt;/strong&gt;....

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17171.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5174965228929024`)*
  > \[blink-dev\] Intent to Prototype: CSS Custom Highlight Universal Selector ::highlight(\*) Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS Custom Highlight Universal Selector ::highlight(\*) Chromestatus Thu, 13 Aug 2...
- [\[css-highlight-1\]\[css-pseudo-4\] Add ::highlight(\*) by DevSDK · Pull Request #14301 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/pull/14301) *(github.com)* *(Cites: `https://chromestatus.com/feature/5174965228929024`)*
  > \[css-highlight-1\]\[css-pseudo-4\] Add ::highlight(\*) by DevSDK · Pull Request #14301 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Re...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17797.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5174965228929024`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) Mike Taylor Mon, 19 ...
- [\[pull\] master from web-platform-tests:master by pull\[bot\] · Pull Request #1312 · MarcelRaschke/wpt · GitHub](https://github.com/MarcelRaschke/wpt/pull/1312) *(github.com)* *(Cites: `https://chromestatus.com/feature/5174965228929024`)*
  > \[1\] w3c/csswg-drafts#9091 Spec PR: w3c/csswg-drafts#14301 Intent to Prototype: https://groups.google.com/a/chromium.org/g/blink-dev/c/hEy4cr4iowU/m/ZW5l\_bikAwAJ Feature Entry: https://&lt;strong&gt;chromestatus.com/feature/5174965228929024&lt;/stron...
- [\[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17730.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5174965228929024`)*
  > \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) Alex Russell Wed, 14 Oct 202...
- [CSS Custom Highlight Universal Selector ::highlight(\*) · Issue #1460 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1460) *(github.com · 2026-09-30T07:17:34)* *(Cites: `https://chromestatus.com/feature/5174965228929024`)*
  > CSS Custom Highlight Universal Selector ::highlight(\*) · Issue #1460 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reloa...
- [CSS Pseudo-Elements Module Level 4](https://w3c.github.io/csswg-drafts/css-pseudo) *(w3c.github.io · 2022-10-07T00:00:00)* *(Cites: `https://drafts.csswg.org/css-pseudo-4/#selectordef-highlight-highlight-name-selector`)*
  > CSS Pseudo-Elements Module Level 4 CSS Pseudo-Elements Module Level 4 Editor’s Draft , 15 October 2026 More details about this document This version: https://drafts.csswg.org/css-pseudo-4/ Latest published version: https://www.w3.org/TR/css...
- [csswg-drafts/css-pseudo-4/Overview.bs at main · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/blob/main/css-pseudo-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-pseudo-4/#selectordef-highlight-highlight-name-selector`)*
  > csswg-drafts/css-pseudo-4/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You sig...

## 📚 Platform Documentation & Specifications

- [CSS Custom Highlight Universal Selector ::highlight(\*) · Issue #728 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/728) *(github.com)*
- [\[css-highlight-1\]\[css-pseudo-4\] Add ::highlight(\*) by DevSDK · Pull Request #14301 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/pull/14301) *(github.com)*
- [\[pull\] master from web-platform-tests:master by pull\[bot\] · Pull Request #1312 · MarcelRaschke/wpt · GitHub](https://github.com/MarcelRaschke/wpt/pull/1312) *(github.com)*
- [CSS Custom Highlight Universal Selector ::highlight(\*) · Issue #1460 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1460) *(github.com)*
- [csswg-drafts/css-pseudo-4/Overview.bs at main · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/blob/main/css-pseudo-4/Overview.bs) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 62 result(s) found across 11 planned queries — **16 verified relevant**
  - `"chromestatus.com/feature/5174965228929024" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (8 returned)
  - `"drafts.csswg.org/css-pseudo-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSS Custom Highlight Universal Selector ::highlight(*)" API` — *Core feature API query* (8 returned)
  - `"CSS Custom Highlight Universal Selector ::highlight(*)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"pseudo-elements" OR "highlight(" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS Custom Highlight Universal Selector ::highlight(*)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS Custom Highlight Universal Selector ::highlight(*)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"::highlight(*)" "custom highlight" tutorial OR guide` — *Finds developer guides and tutorials introducing the custom highlight universal selector.* (8 returned)
  - `"::highlight(*)" CSS.highlights.set (Highlight OR Range) example` — *Locates real-world JavaScript and CSS implementation examples using the Highlight API alongside the universal highlight selector.* (8 returned)
  - `"::highlight(*)" ("intent to ship" OR "support" OR Chrome OR WebKit OR Firefox) "custom highlight"` — *Tracks browser vendor release notes, implementation status, and intent-to-ship threads.* (8 returned)
  - `site:github.com/w3c/csswg-drafts "::highlight(*)" OR "custom highlight universal"` — *Discovers CSSWG working group discussions, resolutions, and specification debates concerning highlight universal selector syntax.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *found 7 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 1 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 1 result(s) found — **0 verified relevant**

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
