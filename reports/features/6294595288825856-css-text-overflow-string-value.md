# CSS text-overflow: &lt;string&gt; value

> **Report Week:** 2026-W40 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Adds a &lt;string&gt; value to the text-overflow property.  This allows web authors to specify a custom string (e.g., "(more)") to indicate that text has been clipped. This provides more design flexibility and can be used to create more user-friendly and context-aware overflow indicators.

### Motivation

Chromium's text-overflow implementation only supports the clip and ellipsis keywords, so authors who want a different truncation indicator must truncate the text themselves in JavaScript or overlay a positioned pseudo-element on the end of the line. Supporting the specified <string> value lets the browser truncate the text and render the author's chosen indicator together.

## Ecosystem Status

- **Momentum:** High (235 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** CSS text-overflow: &lt;string&gt; value is currently Enabled by default in Chrome 156. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @jja08111: "https://github.com/WebKit/WebKit/pull/72631 has been merged, so close this issue...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Sketch on Twitter: "If a layer is sitting within 20px of the end of a text string, it will move when you update the text value on overrides… "" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [CSS text-overflow: &lt;string&gt; value](https://github.com/WebKit/standards-positions/issues/710) [closed]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Sketch on Twitter: "If a layer is sitting within 20px of the end of a text string, it will move when you update the text value on overrides… "](https://twitter.com/sketch/status/733285154215485440) — *by @sketch, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Just add the following CSS snippet: "text-wrap: balance"](https://twitter.com/webflowtips/status/1760868437834846511) — *by @webflowtips, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [X on X / X](https://twitter.com/xah_lee/status/1084189479357669376) — *by @xah_lee, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Safariで overflow-x:hidden; が効かない時はposition: relative](https://twitter.com/HOSPIT77/status/1642285910866657284) — *by @HOSPIT77, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGtBTYtgzVNwh2IOilsjxvv9xZPJgqpjCPU03UZNCZX1rIfH9vPzbPoCMwFsnQUgQG9ihE3_D6K-MBHCz3uZKUeysk_z77gwZmWoSIebWY_h8nX64adaSxEA4VMFWYQszecucGzRFnSeEeKGVg1Uabp-CqdUmibo-eybFd73QYKYCCfNGc8kPOoEQ1OxAZRG-DdvnGlxFMq7xHps9LcVYaTjSt6uF4qU7E1nAN13gRYMkfsz7DAu-UTYEDAUKqc5xQNtgynBTNcDnkTXJN1Ee5r) *(vertexaisearch.cloud.google.com)*
  > Request for Adding Support for the 'string' Value in CSS text-overflow Property for Chromium/Chrome - Google Chrome Community Skip to main content Google Chrome Help Sign in Google Help Help Center Community Google Chrome Privacy Policy Terms of Serv...
- [smashingmagazine.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFfMxFI6w9jwZ1NxE3zYc4dLycAl7zGYP8ojZ4oge47ctwXSgkaw5y6cnGXQnrsWvj479_HDMcyJ1vOPpT-c_iCc-B5kg9hFiImod7C32dpIpv0Rv22K1TCPcLBQb2D_t8g1lgvx8esn7Fr9H_M60P46xLD9EU=) *(vertexaisearch.cloud.google.com)*
  > ### Overview: CSS `text-overflow: <string>`  The CSS `text-overflow` property traditionally accepted keywords like `clip` and `ellipsis` to signal truncated inline content. The CSS Overflow Module Level 3 specification introduced the `<string>` synta
- [cdeath.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEQTgRzRXJQHOnZp769JlEr1XR-sPUm9yPkhpG2__5MfsENMlEN_8H0XMfy52Pu_jnTEBHuuaO-66Nq2EXHw1xHynADfDTzZEO4q28cR96ze3-M7Da6r9Gx0vXFdGU=) *(vertexaisearch.cloud.google.com)*
  > ### Overview: CSS `text-overflow: <string>`  The CSS `text-overflow` property traditionally accepted keywords like `clip` and `ellipsis` to signal truncated inline content. The CSS Overflow Module Level 3 specification introduced the `<string>` synta
- [stackoverflow.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFI7bWie7reg0f_kdnqZkxNuGPfbsxrt-RAIj9i0EDUfczFQEPMTRGrD-_IESQ2epf6rSBPyldU1EMQ2yzAuDIQo77rkEyugDFOEx5JBuFGckEEx-gJyur9EtUwdK-YMhDLDtpEI8vNrK54rOJyo8p0GilJK62zehYmTa4muJLNE4J3z2tY2QyCwV2_5FhOileyqwZFZTJNn4foJLGwKUkhfJVKC4ZaBl58EmgxQ_v7QQ1B) *(vertexaisearch.cloud.google.com)*
  > ### Overview: CSS `text-overflow: <string>`  The CSS `text-overflow` property traditionally accepted keywords like `clip` and `ellipsis` to signal truncated inline content. The CSS Overflow Module Level 3 specification introduced the `<string>` synta
- [styled-components.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE2qthtGA44zFrashAgkIeHMgl1SsUiqTlz_YzAQRTXHHEyWsOnH7ShjE0hiwSFNXqzPWh7fsbgp_VxiOT1YFOUTMTUajT-ulZwSqQZrb4GAUbXFd6tOBogLnGpbQ==) *(vertexaisearch.cloud.google.com)*
  > ### Overview: CSS `text-overflow: <string>`  The CSS `text-overflow` property traditionally accepted keywords like `clip` and `ellipsis` to signal truncated inline content. The CSS Overflow Module Level 3 specification introduced the `<string>` synta
- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17547.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt; *No information provided* &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; *Link to entry on the Chrome Platform Status* &gt;&gt;&gt;&gt;&gt; https://<strong>chromestatus.com/feature/6294595288825856</strong>?gate=5598631104217088 &gt;&...
- [\[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17513.html) *(mail-archive.com)*
  > &gt;&gt; *No information provided* &gt;&gt; &gt;&gt; *Link to entry on the Chrome Platform Status* &gt;&gt; https://<strong>chromestatus.com/feature/6294595288825856</strong>?gate=5598631104217088 &gt;&gt; &gt;&gt; *Links to previous Intent discussio...
- [\[blink-dev\] Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17500.html) *(mail-archive.com)*
  > No information provided Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/6294595288825856</strong>?gate=5598631104217088 Links to previous Intent discussions Intent to Prototype: https://groups.google.com/a/chromiu...
- [\[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17512.html) *(mail-archive.com)*
  > &gt; *Contact emails* &gt; [email protected] &gt; &gt; *Explainer* &gt; &gt; https://<strong>developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-overflow</strong>#string &gt; &gt; *Specification* &gt; https://drafts.csswg.org/css-overf...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17514.html) *(mail-archive.com)*
  > Ian On Mon, Sep 21, 2026 at 11:51 AM Alex Russell &lt;[email protected]&gt; wrote: &gt; LGTM2 &gt; &gt; On Monday, September 21, 2026 at 11:51:32 AM UTC-7 [email protected] &gt; wrote: &gt; &gt;&gt; LGTM1 &gt;&gt; &gt;&gt; On Sunday, September 20, 20...
- [CSS text-overflow property](https://www.w3schools.com/cssref/css3_pr_text-overflow.php) *(w3schools.com)*
  > <strong>The text-overflow property specifies how overflowed content that is not displayed should be signaled to the user</strong>. It can be clipped, display an ellipsis (...), or display a custom string.
- [CSS - text-overflow Property](https://www.tutorialspoint.com/css/css_text-overflow.htm) *(tutorialspoint.com)*
  > This keyword value truncates text ... the ellipsis if space is limited. string − <strong>This value allows you to specify a custom string to be used as the indicator for truncated text</strong>....
- [CSS Text Overflow Guide: How to Handle Single & Multi-Line Ellipsis \| How To Learn](https://learnhowto.vercel.app/blog/css/a-deep-dive-into-css-text-overflow-from-ellipsis-to-multi-line-clamping) *(learnhowto.vercel.app · 2026-01-19T00:00:00)*
  > .truncated-text-ellipsis { width: 200px; border: 1px solid #ddd; padding: 8px; /* Required properties */ overflow: hidden; white-space: nowrap; /* The ellipsis value */ text-overflow: ellipsis; } This is the go-to for almost all UI truncation needs, ...
- [CSS Text-Overflow Guide & Examples - Tillitsdone](https://tillitsdone.com/blogs/css-property-text-overflow) *(tillitsdone.com)*
  > The text-overflow property can accept one or two values. <strong>text-overflow: clip | ellipsis | &lt;string&gt; | initial | inherit;</strong>
- [Mastering CSS \`text-overflow\`: A Comprehensive Guide](https://webdevfundamentals.com/mastering-css-text-overflow-a-comprehensive-guide) *(webdevfundamentals.com · 2026-02-22T16:56:11)*
  > `[string]`: This allows you to specify a custom string to represent the overflow. This string will replace the truncated text. To effectively use `text-overflow`, you need to <strong>combine it with other CSS properties</strong>.
- [CSS text-overflow \| i2tutorials](https://i2tutorials.com/css-tutorial/css-text-overflow) *(i2tutorials.com · 2021-01-02T04:10:27)*
  > ⦁ string: The user using the string of the programmer’s choice. It works only in the · Firefox browser. ⦁ initial: It sets the property to its default value. ⦁ inherit: It inherits the property from its parent element. &lt;!DOCTYPE html&gt; &lt;html&...
- [Handling Text Overflow in CSS3 - Tutorial Republic](https://www.tutorialrepublic.com/css-tutorial/css3-text-overflow.php) *(tutorialrepublic.com)*
  > Warning: The string value for the text-overflow property is not supported in most of the web browsers, you should better avoid this. You can also break a long word and force it to wrap onto a new line that overflows the boundaries of containing eleme...
- [text-overflow \| Codrops](https://tympanus.net/codrops/css_reference/text-overflow) *(tympanus.net · 2016-12-11T00:00:00)*
  > So, you can use white space (which is considered a string), or any other custom string. See the Examples and Live Demo sections below for examples. Also in CSS3, the property syntax allows you to specify the overflow at the left and right edges using...
- [CSS Text Overflow \| CODE4EDUCATION](https://codes4education.com/courses/css-tutorial/lesson/css-text-overflow) *(codes4education.com · 2023-03-27T07:01:09)*
  > Syntax: <strong>text-overflow: clip|string|ellipsis|initial|inherit;</strong> Property Values: All the properties are described well with the example below. clip: Text is clipped and cannot be seen. This is the default value. ellipsis: Text is clippe...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17519.html) *(mail-archive.com)*
  > The expected behavior is that <strong>text-overflow: &lt;string&gt; applies to inline overflow inside the clamp container</strong>, while -webkit-line-clamp still uses its own default ellipsis. This follows CSSWG #10823 &lt;https://github.com/w3c/css...
- [\[blink-dev\] Intent to Prototype: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17287.html) *(mail-archive.com)*
  > Initial public proposal No information provided Search tags text-overflow Goals for experimentation None Requires code in //chrome? False Tracking bug https://issues.chromium.org/issues/41492459 Estimated milestones No milestones specified Link to en...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17547.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > &gt;&gt;&gt;&gt;&gt; *No information provided* &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; *Link to entry on the Chrome Platform Status* &gt;&gt;&gt;&gt;&gt; https://<strong>chromestatus.com/feature/6294595288825856</strong>?gate=559863110421...
- [\[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17513.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > &gt;&gt; *No information provided* &gt;&gt; &gt;&gt; *Link to entry on the Chrome Platform Status* &gt;&gt; https://<strong>chromestatus.com/feature/6294595288825856</strong>?gate=5598631104217088 &gt;&gt; &gt;&gt; *Links to previous Intent...
- [\[blink-dev\] Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17500.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > No information provided Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/6294595288825856</strong>?gate=5598631104217088 Links to previous Intent discussions Intent to Prototype: https://groups.google.com...
- [\[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17512.html) *(mail-archive.com)* *(Cites: `https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-overflow#string`)*
  > &gt; *Contact emails* &gt; [email protected] &gt; &gt; *Explainer* &gt; &gt; https://<strong>developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-overflow</strong>#string &gt; &gt; *Specification* &gt; https://drafts.csswg.org...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17514.html) *(mail-archive.com)* *(Cites: `https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-overflow#string`)*
  > Ian On Mon, Sep 21, 2026 at 11:51 AM Alex Russell &lt;[email protected]&gt; wrote: &gt; LGTM2 &gt; &gt; On Monday, September 21, 2026 at 11:51:32 AM UTC-7 [email protected] &gt; wrote: &gt; &gt;&gt; LGTM1 &gt;&gt; &gt;&gt; On Sunday, Septem...

## 📚 Platform Documentation & Specifications

- [text-overflow CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 57 result(s) found across 12 planned queries — **17 verified relevant**
  - `"chromestatus.com/feature/6294595288825856" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-overflow" -site:developer.mozilla.org` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"drafts.csswg.org/css-overflow-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"CSS text-overflow: <string> value" API` — *Core feature API query* (0 returned)
  - `"CSS text-overflow: <string> value" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"text-overflow" OR "user-friendly" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS text-overflow: <string> value" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS text-overflow: <string> value" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"text-overflow" custom string tutorial OR "how to"` — *Discovers developer tutorials, practical guides, and blog articles demonstrating how to style custom text truncation indicators natively in CSS.* (8 returned)
  - `"text-overflow:" "<string>" OR "..." OR "[more]" codepen OR jsfiddle` — *Searches for practical CSS code snippets and interactive demos showcasing custom string values passed to text-overflow.* (8 returned)
  - `"text-overflow" string "Intent to Ship" OR "Chrome Platform Status" OR "Can I use"` — *Tracks browser engine compatibility announcements, feature shipments, and platform status updates across Chromium, Gecko, and WebKit.* (7 returned)
  - `"text-overflow" string (site:news.ycombinator.com OR site:reddit.com/r/webdev)` — *Surfaces developer reactions, discussions, and comparisons between native text-overflow string values and previous JavaScript or pseudo-element workarounds.* (4 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **5 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 6 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 899 item(s) inspected

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
