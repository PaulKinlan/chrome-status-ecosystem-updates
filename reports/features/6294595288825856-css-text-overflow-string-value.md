# CSS text-overflow: &lt;string&gt; value

> **Report Week:** 2026-W44 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

Adds a &lt;string&gt; value to the text-overflow property.  This allows web authors to specify a custom string (e.g., "(more)") to indicate that text has been clipped. This provides more design flexibility and can be used to create more user-friendly and context-aware overflow indicators.

### Motivation

Chromium's text-overflow implementation only supports the clip and ellipsis keywords, so authors who want a different truncation indicator must truncate the text themselves in JavaScript or overlay a positioned pseudo-element on the end of the line. Supporting the specified &lt;string&gt; value lets the browser truncate the text and render the author's chosen indicator together.

## Ecosystem Status

- **Momentum:** Moderate (footprint 265 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The CSS \`text-overflow: &lt;string&gt;\` property value is reaching cross-browser convergence under CSS Overflow Module Level 4 after more than a decade of single-engine availability in Firefox. With Chromium targeting default enablement in Chrome 157 and WebKit merging support, developer sentiment is enthusiastic about eliminating fragile JavaScript truncation loops and positioned pseudo-element workarounds. Recent CSS Working Group clarifications have solidified how custom ellipsis strings render in inline and block directions, clearing the path toward broad Baseline availability.

### Recommendations
- Actionable Advice: Adopt this feature today using progressive enhancement with \`@supports (text-overflow: "...")\` while maintaining \`text-overflow: ellipsis\` as a safe fallback for older browser builds. Ensure custom strings are tested against localization constraints and edge cases like bidirectional text before relying on them in critical UI containers.
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
  > Historically, Firefox was the only browser engine supporting custom strings for many years
- [chromestatus.com](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > However, with broader standardization efforts under the \*\*CSS Overflow Module Level 4\*\* and its official arrival in Chromium (shipping in \*\*Chrome 157\*\*), cross-engine baseline support is finally aligning \*\*Title / Feature:\*\* \*CSS text-overflow: \`&lt;st...
- [html - text-overflow change content of ellipsis - Stack Overflow](https://stackoverflow.com/questions/41549021/text-overflow-change-content-of-ellipsis) *(stackoverflow.com)*
  > \[read more\]", or brackets) had to write JavaScript substring calculation loops or float/position pseudo-elements over the text
- [chromium.org](https://issues.chromium.org/40336192) *(issues.chromium.org)*
  > The feature lays the groundwork for richer integration with \`line-clamp\`, enabling multi-line truncation with custom indicators in modern component libraries without fragile DOM overlays
- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17547.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Rick Byers Thu, 24 Sep 2026 07:16:32 -0700 LGTM3 On Tue, Sep 22, 2026 at 7:55 AM Minseong ...
- [\[blink-dev\] Intent to Prototype: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17287.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS text-overflow: value Chromestatus Tue, 25 Aug 2026 05:36:48 -0700 Contact emails \[email&#160;protected\] Explainer No ...
- [\[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17513.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Alex Russell Mon, 21 Sep 2026 11:51:54 -0700 LGTM2 On Monday, September 21, 2026 at 11:51:32 AM UT...
- [\[blink-dev\] Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17500.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS text-overflow: value Chromestatus Sun, 20 Sep 2026 22:03:42 -0700 Contact emails \[email&#160;protected\] Explainer https://devel...
- [CSS text-overflow property](https://www.w3schools.com/cssref/css3_pr_text-overflow.php) *(w3schools.com)*
  > &lt;strong&gt;The text-overflow property specifies how overflowed content that is not displayed should be signaled to the user&lt;/strong&gt;. It can be clipped, display an ellipsis (...), or display a custom string.
- [CSS Text-Overflow Guide & Examples - Tillitsdone](https://tillitsdone.com/blogs/css-property-text-overflow) *(tillitsdone.com)*
  > &lt;strong&gt;It is commonly used to add an ellipsis (…) or a custom string to indicate that the content has overflowed&lt;/strong&gt;. ... This will display an ellipsis (&#x27;…&#x27;) at the end of the content that overflows the element’s box.
- [CSS - text-overflow Property](https://www.tutorialspoint.com/css/css_text-overflow.htm) *(tutorialspoint.com)*
  > &lt;strong&gt;The text-overflow property takes one value and sets overflow behaviour for the line&#x27;s end, while two values indicate behaviour for the left and right ends, allowing keywords (clip or ellipsis) or a &lt;string&gt; value&lt;/strong&gt;.
- [CSS Text Overflow Guide: How to Handle Single & Multi-Line Ellipsis \| How To Learn](https://learnhowto.vercel.app/blog/css/a-deep-dive-into-css-text-overflow-from-ellipsis-to-multi-line-clamping) *(learnhowto.vercel.app · 2026-01-19T00:00:00)*
  > Rely on Non-Standard Values: Avoid using custom &lt;string&gt; values in production due to poor cross-browser support. Truncate Critical Information: Keep essential text fully visible at all times. Assume it Just Works: Always test your implementatio...
- [CSS text-overflow \| i2tutorials](https://i2tutorials.com/css-tutorial/css-text-overflow) *(i2tutorials.com · 2021-01-02T04:10:27)*
  > This CSS property representation of the text content will be displayed when it overflows the block container element that has overflow other than visible. &lt;strong&gt;text-overflow: clip \| ellipsis \| string \| initial \| inherit&lt;/strong&gt; · ⦁ clip: It is th...
- [Handling Text Overflow in CSS3 - Tutorial Republic](https://www.tutorialrepublic.com/css-tutorial/css3-text-overflow.php) *(tutorialrepublic.com)*
  > Warning: The string value for the text-overflow property is not supported in most of the web browsers, you should better avoid this. You can also break a long word and force it to wrap onto a new line that overflows the boundaries of containing eleme...
- [CSS text-overflow Property - Syntax, Values, Examples \| W3docs](https://www.w3docs.com/learn-css/text-overflow) *(w3docs.com)*
  > If any one of these is missing the ellipsis will not appear. The box also needs a constrained width (or max-width) so there is actually something to overflow. In CSS3 you can also supply a custom string in place of the ellipsis. A string value can co...
- [text-overflow \| Codrops](https://tympanus.net/codrops/css_reference/text-overflow) *(tympanus.net · 2016-12-11T00:00:00)*
  > So, you can use white space (which is considered a string), or any other custom string. See the Examples and Live Demo sections below for examples. Also in CSS3, the property syntax allows you to specify the overflow at the left and right edges using...
- [CSS text-overflow Property - GeeksforGeeks](https://www.geeksforgeeks.org/css/css-text-overflow-property) *(geeksforgeeks.org · 2025-07-11T17:58:40)*
  > Example: &lt;strong&gt;This example illustrates the use of the text-overflow property where its value is set to a specific string value. ... &lt;html&gt; &lt;head&gt; &lt;title&gt; CSS \| text-overflow Property &lt;/title&gt; &lt;style type=&quot;text/css&q...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17519.html) *(mail-archive.com)*
  > The expected behavior is that &lt;strong&gt;text-overflow: &lt;string&gt; applies to inline overflow inside the clamp container&lt;/strong&gt;, while -webkit-line-clamp still uses its own default ellipsis. This follows CSSWG #10823 &lt;https://github.com/w3c/css...
- [Intent to Implement: Support for CSS3 text-overflow:&lt;string&gt; values](https://groups.google.com/a/chromium.org/g/blink-dev/c/JJqul-MheQc) *(groups.google.com)*
  > The proposed change is implemented in Firefox 9+. https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow#Browser\_compatibility ... Will this feature be supported on all five Blink platforms (Windows, Mac, Linux, Chrome OS and Android)?
- [Request for Adding Support for the 'string' Value in CSS text-overflow Property for Chromium/Chrome - Google Chrome Community](https://support.google.com/chrome/thread/371654985/request-for-adding-support-for-the-string-value-in-css-text-overflow-property-for-chromium-chrome?hl=en) *(support.google.com · 2025-09-08T00:00:00)*
  > Skip to main content · Google Chrome Help · Sign in · Google Help · Help Center · Community · Google Chrome · Terms of Service · Submit feedback · Send feedback on
- [Ellipsis : Trimming Text with CSS \| by Louis Trinh \| Medium](https://medium.com/@louistrinh/ellipsis-trimming-text-with-css-3d48b0e922b4) *(medium.com · 2024-02-07T20:51:02)*
  > If my articles fuel your projects, consider a coffee! buymeacoffee.com/louis.trinh ... To show “…” with text-overflow in CSS, you can &lt;strong&gt;use the ellipsis keyword or a custom string&lt;/strong&gt;.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17547.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Rick Byers Thu, 24 Sep 2026 07:16:32 -0700 LGTM3 On Tue, Sep 22, 2026 at 7:55 AM...
- [\[blink-dev\] Intent to Prototype: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17287.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > \[blink-dev\] Intent to Prototype: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS text-overflow: value Chromestatus Tue, 25 Aug 2026 05:36:48 -0700 Contact emails \[email&#160;protected\] Exp...
- [\[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17513.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Alex Russell Mon, 21 Sep 2026 11:51:54 -0700 LGTM2 On Monday, September 21, 2026 at 11:5...
- [\[blink-dev\] Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17500.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > \[blink-dev\] Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS text-overflow: value Chromestatus Sun, 20 Sep 2026 22:03:42 -0700 Contact emails \[email&#160;protected\] Explainer htt...
- [csswg-drafts/css-overflow-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-overflow-4/#text-overflow`)*
  > csswg-drafts/css-overflow-4/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/css/reference/properties/text-overflow/index.md?plain=1) *(github.com)*
- [\[css-overflow-4\] Clarification of text-overflow: &lt;string&gt; value; Rendering pipeline · Issue #11683 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/11683) *(github.com)*
- [csswg-drafts/css-overflow-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-4/Overview.bs) *(github.com)*
- [text-overflow CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 62 result(s) found across 13 planned queries — **21 verified relevant**
  - `"chromestatus.com/feature/6294595288825856" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-overflow" -site:developer.mozilla.org` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"drafts.csswg.org/css-overflow-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"CSS text-overflow: <string> value" API` — *Core feature API query* (0 returned)
  - `"CSS text-overflow: <string> value" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"text-overflow" OR "user-friendly" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS text-overflow: <string> value" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (7 returned)
  - `"CSS text-overflow: <string> value" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `css "text-overflow" custom string tutorial OR guide OR example` — *Finds developer guides and articles demonstrating how to set custom string values for text-overflow.* (8 returned)
  - `"text-overflow:" ("(more)" OR "[read more]" OR "...") css code snippet` — *Identifies concrete CSS code snippets and usage patterns specifying string values in text-overflow.* (8 returned)
  - `"text-overflow" "<string>" ("intent to ship" OR "intent to prototype" OR Chrome OR Firefox)` — *Tracks browser vendor implementation status, intent-to-ship threads, and platform support updates.* (8 returned)
  - `site:github.com/w3c/csswg-drafts "text-overflow" "<string>"` — *Surfaces W3C CSS Working Group discussions, spec debates, and edge-case resolutions around string-based overflow indicators.* (8 returned)
  - `"text-overflow" custom string replace ellipsis pseudo-element OR javascript` — *Discovers articles comparing the native CSS string syntax against legacy JavaScript or pseudo-element truncation hacks.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 8 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 7 result(s) found — **0 verified relevant**
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
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6294595288825856)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6294595288825856)
- [Specification](https://drafts.csswg.org/css-overflow-4/#text-overflow)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/41492459)
