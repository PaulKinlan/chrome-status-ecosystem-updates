# CSS text-overflow: &lt;string&gt; value

> **Report Week:** 2026-W43 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

Adds a &lt;string&gt; value to the text-overflow property.  This allows web authors to specify a custom string (e.g., "(more)") to indicate that text has been clipped. This provides more design flexibility and can be used to create more user-friendly and context-aware overflow indicators.

### Motivation

Chromium's text-overflow implementation only supports the clip and ellipsis keywords, so authors who want a different truncation indicator must truncate the text themselves in JavaScript or overlay a positioned pseudo-element on the end of the line. Supporting the specified &lt;string&gt; value lets the browser truncate the text and render the author's chosen indicator together.

## Ecosystem Status

- **Momentum:** Moderate (footprint 215 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The CSS text-overflow &lt;string&gt; value allows developers to natively specify custom truncation tokens (such as "(more)" or custom symbols) instead of relying on JavaScript truncation or overlapping pseudo-elements. Following its landing in Chrome and parallel progress in WebKit pull requests, cross-browser interoperability is rapidly materializing for this long-awaited CSS Overflow Level 4 feature. Developers view it as a welcome simplification that eliminates brittle hack layers for text clipping.

### Recommendations
- Actionable Advice: Teams can safely adopt text-overflow with custom strings as a progressive enhancement, falling back to standard ellipses or JS truncation for older browser versions. It is an ideal time to test layouts involving custom indicators in modern browser builds.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @jja08111: "https://github.com/WebKit/WebKit/pull/72631 has been merged, so close this issue...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS text-overflow: &lt;string&gt; value](https://github.com/WebKit/standards-positions/issues/710) [closed]

## Web-features Group

*group-level data: web-features [`custom-ellipses`](https://webstatus.dev/features/custom-ellipses), shared with 1 other ChromeStatus feature*

- Share of tests passing in the web-features group `custom-ellipses` on [wpt.fyi](https://wpt.fyi/results?q=feature:custom-ellipses) (via webstatus.dev) — stable: Chrome 0% · Edge 0% · Firefox 34.8% · Safari 0%; experimental: Chrome 100% · Edge 100% · Firefox 34.8% · Safari 0%

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17547.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Rick Byers Thu, 24 Sep 2026 07:16:32 -0700 LGTM3 On Tue, Sep 22, 2026 at 7:55 AM Minseong ...
- [\[blink-dev\] Intent to Prototype: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17287.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS text-overflow: value Chromestatus Tue, 25 Aug 2026 05:36:48 -0700 Contact emails \[email&#160;protected\] Explainer No ...
- [\[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17513.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Alex Russell Mon, 21 Sep 2026 11:51:54 -0700 LGTM2 On Monday, September 21, 2026 at 11:51:32 AM UT...
- [\[blink-dev\] Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17500.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS text-overflow: value Chromestatus Sun, 20 Sep 2026 22:03:42 -0700 Contact emails \[email&#160;protected\] Explainer https://devel...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17519.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Minseong Kim Tue, 22 Sep 2026 07:55:45 -0700 The expected behavior is that text-overflow: ...
- [CSS text-overflow property](https://www.w3schools.com/cssref/css3_pr_text-overflow.php) *(w3schools.com)*
  > &lt;strong&gt;The text-overflow property specifies how overflowed content that is not displayed should be signaled to the user&lt;/strong&gt;. It can be clipped, display an ellipsis (...), or display a custom string.
- [CSS Text-Overflow Guide & Examples - Tillitsdone](https://tillitsdone.com/blogs/css-property-text-overflow) *(tillitsdone.com)*
  > &lt;strong&gt;It is commonly used to add an ellipsis (…) or a custom string to indicate that the content has overflowed&lt;/strong&gt;. ... This will display an ellipsis (&#x27;…&#x27;) at the end of the content that overflows the element’s box.
- [CSS Text Overflow Guide: How to Handle Single & Multi-Line Ellipsis \| How To Learn](https://learnhowto.vercel.app/blog/css/a-deep-dive-into-css-text-overflow-from-ellipsis-to-multi-line-clamping) *(learnhowto.vercel.app · 2026-01-19T00:00:00)*
  > Rely on Non-Standard Values: Avoid using custom &lt;string&gt; values in production due to poor cross-browser support. Truncate Critical Information: Keep essential text fully visible at all times. Assume it Just Works: Always test your implementatio...
- [CSS - text-overflow Property](https://www.tutorialspoint.com/css/css_text-overflow.htm) *(tutorialspoint.com)*
  > &lt;strong&gt;The text-overflow property takes one value and sets overflow behaviour for the line&#x27;s end, while two values indicate behaviour for the left and right ends, allowing keywords (clip or ellipsis) or a &lt;string&gt; value&lt;/strong&gt;.
- [CSS text-overflow \| i2tutorials](https://i2tutorials.com/css-tutorial/css-text-overflow) *(i2tutorials.com · 2021-01-02T04:10:27)*
  > This CSS property representation of the text content will be displayed when it overflows the block container element that has overflow other than visible. &lt;strong&gt;text-overflow: clip \| ellipsis \| string \| initial \| inherit&lt;/strong&gt; · ⦁ clip: It is th...
- [Handling Text Overflow in CSS3 - Tutorial Republic](https://www.tutorialrepublic.com/css-tutorial/css3-text-overflow.php) *(tutorialrepublic.com)*
  > Warning: The string value for the text-overflow property is not supported in most of the web browsers, you should better avoid this. You can also break a long word and force it to wrap onto a new line that overflows the boundaries of containing eleme...
- [\[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17512.html) *(mail-archive.com)*
  > &gt; \*Contact emails\* &gt; \[email protected\] &gt; &gt; \*Explainer\* &gt; &gt; https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-overflow#string &gt; &gt; \*Specification\* &gt; https://drafts.csswg.org/css-overflow-4/#text-overf...
- [CSS text-overflow Property - Syntax, Values, Examples \| W3docs](https://www.w3docs.com/learn-css/text-overflow) *(w3docs.com)*
  > The box also needs a constrained width (or max-width) so there is actually something to overflow. In CSS3 you can also supply a custom string in place of the ellipsis. &lt;strong&gt;A string value can contain whitespace, or you can use any other custom str...
- [text-overflow \| CSS-Tricks](https://css-tricks.com/almanac/properties/t/text-overflow) *(css-tricks.com · 2025-01-28T03:27:46)*
  > It can be clipped (i.e. cut off, hidden), display an ellipsis (‘…’, &lt;strong&gt;Unicode Range Value U+2026)&lt;/strong&gt; or display an author-defined string (no current browser support for author-defined strings).
- [CSS text-overflow Property - GeeksforGeeks](https://www.geeksforgeeks.org/css/css-text-overflow-property) *(geeksforgeeks.org · 2025-07-11T17:58:40)*
  > The text-overflow property in CSS is your go-to feature when dealing with overflowing and hidden text. It works in tandem with the white-space property set to nowrap and the overflow property set to hidden. The overflowing content can be clipped, dis...
- [CSS property: text-overflow: &lt;string&gt; \| Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/mdn-css_properties_text-overflow_string) *(caniuse.com)*
  > &quot;Can I use&quot; provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers.
- [Custom text-overflow CSS? - Stack Overflow](https://stackoverflow.com/questions/8401846/custom-text-overflow-css) *(stackoverflow.com)*
  > I do not know whether this refers to &quot;the text-overflow property accepts string values&quot;, or if it is a parameter on its own (just like clip and ellipsis).
- [text-overflow - CSS: Cascading Style Sheets](https://udn.realityripple.com/docs/Web/CSS/text-overflow) *(udn.realityripple.com)*
  > This keyword value will truncate ... characters you can specify text-overflow as an empty string, if that is supported in your target browsers: &lt;strong&gt;text-overflow: &#x27;&#x27;;&lt;/strong&gt;....

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
- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17519.html) *(mail-archive.com)* *(Cites: `https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-overflow#string`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Minseong Kim Tue, 22 Sep 2026 07:55:45 -0700 The expected behavior is that text-...
- [csswg-drafts/css-overflow-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-overflow-4/#text-overflow`)*
  > csswg-drafts/css-overflow-4/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/w3c/csswg-drafts/issues/11683) *(github.com)*
- [csswg-drafts/css-overflow-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-4/Overview.bs) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 45 result(s) found across 12 planned queries — **19 verified relevant**
  - `"chromestatus.com/feature/6294595288825856" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-overflow" -site:developer.mozilla.org` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"drafts.csswg.org/css-overflow-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"CSS text-overflow: <string> value" API` — *Core feature API query* (0 returned)
  - `"CSS text-overflow: <string> value" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"text-overflow" OR "user-friendly" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS text-overflow: <string> value" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (5 returned)
  - `"CSS text-overflow: <string> value" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `CSS text-overflow string value tutorial` — *Finds community blog posts and practical guides on how to use custom strings with text-overflow.* (8 returned)
  - `css text-overflow "(...)string" OR text-overflow: "..." examples` — *Searches for real-world CSS code snippets and syntax usage for the text-overflow string value.* (8 returned)
  - `CSS text-overflow string value caniuse adoption` — *Finds browser support information, release announcements, and ecosystem adoption status for the text-overflow string feature.* (8 returned)
  - `CSS text-overflow string value discussion reddit hacker news` — *Discovers developer sentiment, community feedback, and discussions regarding custom truncation strings in CSS.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 3 result(s) found — **1 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 8 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 5 result(s) found — **0 verified relevant**
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
