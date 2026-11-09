# CSS text-overflow: &lt;string&gt; value

> **Report Week:** 2026-W46 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

Adds a &lt;string&gt; value to the text-overflow property.  This allows web authors to specify a custom string (e.g., "(more)") to indicate that text has been clipped. This provides more design flexibility and can be used to create more user-friendly and context-aware overflow indicators.

### Motivation

Chromium's text-overflow implementation only supports the clip and ellipsis keywords, so authors who want a different truncation indicator must truncate the text themselves in JavaScript or overlay a positioned pseudo-element on the end of the line. Supporting the specified &lt;string&gt; value lets the browser truncate the text and render the author's chosen indicator together.

## Ecosystem Status

- **Momentum:** Moderate (+70 points since 2026-10-12; footprint 285 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The CSS \`text-overflow: &lt;string&gt;\` value allows web authors to define custom inline truncation markers (such as '(more)' or custom ellipsis symbols) without relying on fragile JavaScript truncation algorithms or pseudo-element overlays. Having been an isolated feature in Firefox since version 9 in 2011, its release enabled by default in Chrome 157 and its recent landing in WebKit trunk heralds broad multi-engine consensus. Developer reception is strongly favorable as it finally standardizes a long-sought styling capability across all major browser engines.

### Recommendations
- Actionable Advice: Teams can safely incorporate \`text-overflow: &lt;string&gt;\` immediately as a progressive enhancement by declaring a fallback \`text-overflow: ellipsis;\` immediately preceding the custom string declaration, or by querying it with \`@supports (text-overflow: '')\`. Older engines and stable Safari builds will simply render standard ellipses while modern Chromium and Firefox installations display the tailored indicator.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @jja08111: "https://github.com/WebKit/WebKit/pull/72631 has been merged, so close this issue...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS text-overflow: &lt;string&gt; value](https://github.com/WebKit/standards-positions/issues/710) [closed]

## Web-features Group

*group-level data: web-features [`custom-ellipses`](https://webstatus.dev/features/custom-ellipses), shared with 1 other ChromeStatus feature*

- Share of tests passing in the web-features group `custom-ellipses` on [wpt.fyi](https://wpt.fyi/results?q=feature:custom-ellipses) (via webstatus.dev) — stable: Chrome 0% · Edge 0% · Firefox 34.8% · Safari 0%; experimental: Chrome 100% · Edge 100% · Firefox 34.8% · Safari 0%

## 📰 Ecosystem Blogs & Articles

- [azeemhassni.com](https://azeemhassni.com/blog/wire-chrome-157-text-overflow-custom-string) *(azeemhassni.com)*
  > \*\*Chrome / Chromium:\*\* Chrome formally introduced support for \`text-overflow: &lt;string&gt;\` in \*\*Chrome 157\*\* \*\*Firefox:\*\* Supported custom string truncation since \*\*Firefox 9 (2011)\*\*
- [note.com](https://note.com/2gnote/n/n3ad4fba41929?hl=en) *(note.com)*
  > \*\*WebKit / Safari:\*\* WebKit resolved and landed support in trunk (Bugzilla #72631) \*\*UI & Dashboard Use Cases:\*\* Demonstrates practical applications in data-dense tables, product cards, and compact navigation items where a standard ellipsis is either...
- [web.dev](https://web.dev/blog/web-platform-10-2026?hl=en) *(web.dev)*
  > \*\*Release Notes:\*\* Listed as one of the highlighted CSS additions in Chrome 157 alongside \`text-decoration-inset\` and CSS corner shorthands
- [web-standards.dev](https://web-standards.dev/news/2026/11/chrome-157) *(web-standards.dev)*
  > \*\*Release Notes:\*\* Listed as one of the highlighted CSS additions in Chrome 157 alongside \`text-decoration-inset\` and CSS corner shorthands
- [css-tricks.com](https://css-tricks.com/byte-202) *(css-tricks.com)*
  > \*\*Roundup Mention:\*\* Featured the arrival of \`text-overflow: &lt;string&gt;\` in Chrome 157, noting that while Safari stable adoption is the last hurdle for baseline status, developers can now safely use it as an enhancement
- [webdevbriefing.com](https://webdevbriefing.com/html-in-canvas-css-corners) *(webdevbriefing.com)*
  > \*\*Roundup Mention:\*\* Featured the arrival of \`text-overflow: &lt;string&gt;\` in Chrome 157, noting that while Safari stable adoption is the last hurdle for baseline status, developers can now safely use it as an enhancement \*\*UI & Dashboard Use Cases:\*\* De...
- [\[blink-dev\] Intent to Prototype: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17287.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS text-overflow: value Chromestatus Tue, 25 Aug 2026 05:36:48 -0700 Contact emails \[email&#160;protected\] Explainer No ...
- [\[blink-dev\] Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17500.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS text-overflow: value Chromestatus Sun, 20 Sep 2026 22:03:42 -0700 Contact emails \[email&#160;protected\] Explainer https://devel...
- [\[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17512.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value 'Dan Clark' via blink-dev Mon, 21 Sep 2026 11:51:41 -0700 LGTM1 On Sunday, September 20, 2026 at 1...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17514.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Ian Kilpatrick Mon, 21 Sep 2026 11:54:12 -0700 What is the interaction with -webkit-line-c...
- [\[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17513.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Alex Russell Mon, 21 Sep 2026 11:51:54 -0700 LGTM2 On Monday, September 21, 2026 at 11:51:32 AM UT...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17547.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Rick Byers Thu, 24 Sep 2026 07:16:32 -0700 LGTM3 On Tue, Sep 22, 2026 at 7:55 AM Minseong ...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17519.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Minseong Kim Tue, 22 Sep 2026 07:55:45 -0700 The expected behavior is that text-overflow: ...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com · 2026-11-02T20:19:23)*
  > sampler: https://static.janusc... window) \| ChromeStatus.com entry \| Spec ↗ (opens in new window) &lt;strong&gt;Adds a &lt;string&gt; value to the text-overflow property&lt;/strong&gt;....
- [CSS Text Overflow Guide: How to Handle Single & Multi-Line Ellipsis \| How To Learn](https://learnhowto.vercel.app/blog/css/a-deep-dive-into-css-text-overflow-from-ellipsis-to-multi-line-clamping) *(learnhowto.vercel.app · 2026-01-19T00:00:00)*
  > Rely on Non-Standard Values: Avoid using custom &lt;string&gt; values in production due to poor cross-browser support. Truncate Critical Information: Keep essential text fully visible at all times. Assume it Just Works: Always test your implementatio...
- [CSS text-overflow property](https://www.w3schools.com/cssref/css3_pr_text-overflow.php) *(w3schools.com)*
  > &lt;strong&gt;The text-overflow property specifies how overflowed content that is not displayed should be signaled to the user&lt;/strong&gt;. It can be clipped, display an ellipsis (...), or display a custom string.
- [CSS Text-Overflow Guide & Examples - Tillitsdone](https://tillitsdone.com/blogs/css-property-text-overflow) *(tillitsdone.com)*
  > The text-overflow property can accept one or two values. &lt;strong&gt;text-overflow: clip \| ellipsis \| &lt;string&gt; \| initial \| inherit;&lt;/strong&gt;
- [CSS - text-overflow Property](https://www.tutorialspoint.com/css/css_text-overflow.htm) *(tutorialspoint.com)*
  > &lt;strong&gt;The text-overflow property takes one value and sets overflow behaviour for the line&#x27;s end, while two values indicate behaviour for the left and right ends, allowing keywords (clip or ellipsis) or a &lt;string&gt; value&lt;/strong&gt;.
- [Mastering CSS \`text-overflow\`: A Beginner's Guide](https://webdevelopmentdebugged.com/mastering-css-text-overflow-a-beginners-guide) *(webdevelopmentdebugged.com · 2026-02-22T20:32:06)*
  > The most common reason is forgetting to set overflow: hidden;. Also, make sure white-space: nowrap; is applied to the element and that you are targeting the correct element. Yes, you can use a custom string or character using the &lt;string&gt; value...
- [CSS text-overflow Property - GeeksforGeeks](https://www.geeksforgeeks.org/css/css-text-overflow-property) *(geeksforgeeks.org · 2025-07-11T17:58:40)*
  > &lt;strong&gt;It works in tandem with the white-space property set to nowrap and the overflow property set to hidden&lt;/strong&gt;. The overflowing content can be clipped, display an ellipsis (‘…’), or display a custom string.
- [CSS Style textOverflow Property: CSS Text Overflow - CodeLucky](https://codelucky.com/css-text-overflow) *(codelucky.com · 2025-08-27T12:03:11)*
  > The primary purpose of the ... layout breaks and ensuring readability. &lt;strong&gt;It provides options to clip, display an ellipsis, or use a custom string to indicate overflow&lt;/strong&gt;....
- [Using CSS3's text-overflow Property - CSS Reset](https://cssdeck.com/blog/using-css3s-text-overflow-property) *(cssdeck.com · 2017-01-04T14:34:00)*
  > &lt;strong&gt;The string value replaces the clipped text with a string of your choice&lt;/strong&gt;. The other two values are initial, which sets the property to the default value, and inherit, which tells the property to inherit its value from the parent eleme...
- [Request for Adding Support for the 'string' Value in CSS text-overflow Property for Chromium/Chrome - Google Chrome Community](https://support.google.com/chrome/thread/371654985/request-for-adding-support-for-the-string-value-in-css-text-overflow-property-for-chromium-chrome?hl=en) *(support.google.com)*
  > Request for Adding Support for the 'string' Value in CSS text-overflow Property for Chromium/Chrome - Google Chrome Community Skip to main content Google Chrome Help Sign in Google Help Help Center Community Google Chrome Privacy Policy Terms of Serv...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17287.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > \[blink-dev\] Intent to Prototype: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS text-overflow: value Chromestatus Tue, 25 Aug 2026 05:36:48 -0700 Contact emails \[email&#160;protected\] Exp...
- [\[blink-dev\] Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17500.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > \[blink-dev\] Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS text-overflow: value Chromestatus Sun, 20 Sep 2026 22:03:42 -0700 Contact emails \[email&#160;protected\] Explainer htt...
- [\[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17512.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value 'Dan Clark' via blink-dev Mon, 21 Sep 2026 11:51:41 -0700 LGTM1 On Sunday, September 20,...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17514.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Ian Kilpatrick Mon, 21 Sep 2026 11:54:12 -0700 What is the interaction with -web...
- [\[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17513.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Alex Russell Mon, 21 Sep 2026 11:51:54 -0700 LGTM2 On Monday, September 21, 2026 at 11:5...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17547.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Rick Byers Thu, 24 Sep 2026 07:16:32 -0700 LGTM3 On Tue, Sep 22, 2026 at 7:55 AM...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17519.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Minseong Kim Tue, 22 Sep 2026 07:55:45 -0700 The expected behavior is that text-...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/css/reference/properties/text-overflow/index.md?plain=1) *(github.com)*
- [Evaluate using CSS \`text-overflow: &lt;string&gt;\` value · Issue #8680 · db-ux-design-system/core-web · GitHub](https://github.com/db-ux-design-system/core-web/issues/8680) *(github.com)*
- [text-overflow CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow) *(developer.mozilla.org)*
- [\[css-overflow-4\] Clarification of text-overflow: &lt;string&gt; value; Rendering pipeline · Issue #11683 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/11683) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 62 result(s) found across 12 planned queries — **19 verified relevant**
  - `"chromestatus.com/feature/6294595288825856" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (8 returned)
  - `"developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-overflow" -site:developer.mozilla.org` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"drafts.csswg.org/css-overflow-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSS text-overflow: <string> value" API` — *Core feature API query* (8 returned)
  - `"CSS text-overflow: <string> value" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"text-overflow" OR "user-friendly" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS text-overflow: <string> value" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS text-overflow: <string> value" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"text-overflow" custom string (tutorial OR guide OR tips) CSS` — *Finds developer guides and tutorials demonstrating how to replace JavaScript truncation hacks with native CSS custom string overflow indicators.* (8 returned)
  - `css "text-overflow" ("(more)" OR "[...]" OR "--") -ellipsis` — *Locates real-world CSS code examples and stylesheets implementing custom string literals in the text-overflow property.* (7 returned)
  - `"text-overflow" string ("Intent to Ship" OR "Chrome Platform Status" OR "release notes")` — *Tracks browser vendor release notes, implementation status, and Intent to Ship announcements across Chromium, WebKit, and Gecko.* (8 returned)
  - `site:github.com/w3c/csswg-drafts "text-overflow" "<string>"` — *Discovers CSS Working Group specification debates, resolution notes, and edge-case discussions around text-overflow string support.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 4 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "custom-ellipses", shared with 1 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "custom-ellipses": Chrome 0% passing (stable)*
- **Sources cited by the AI synthesis:** 3 result(s) found — **2 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 1 engineer comment(s) read
- **Web Page Excerpts Ingested:** 9 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6294595288825856)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6294595288825856)
- [Specification](https://drafts.csswg.org/css-overflow-4/#text-overflow)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/41492459)
