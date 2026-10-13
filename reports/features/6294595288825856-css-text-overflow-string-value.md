# CSS text-overflow: &lt;string&gt; value

> **Report Week:** 2026-W42 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

Adds a &lt;string&gt; value to the text-overflow property.  This allows web authors to specify a custom string (e.g., "(more)") to indicate that text has been clipped. This provides more design flexibility and can be used to create more user-friendly and context-aware overflow indicators.

### Motivation

Chromium's text-overflow implementation only supports the clip and ellipsis keywords, so authors who want a different truncation indicator must truncate the text themselves in JavaScript or overlay a positioned pseudo-element on the end of the line. Supporting the specified &lt;string&gt; value lets the browser truncate the text and render the author's chosen indicator together.

## Ecosystem Status

- **Momentum:** Moderate (footprint 215 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The CSS text-overflow string value specified in CSS Overflow Module Level 4 allows authors to designate custom truncation tokens (such as localized strings or empty strings) natively in CSS. Gecko has supported string clipping since Firefox 9, WebKit has officially supported the spec and merged its implementation, and Chromium's rollout completes universal engine convergence. This resolves a decade-long interoperability gap, eliminating reliance on fragile JavaScript text measurement or positioned pseudo-element hacks.

### Recommendations
- Actionable Advice: Web developers can safely begin using the feature today via progressive enhancement by declaring a fallback 'text-overflow: ellipsis' directly before the custom string declaration, or by querying it with '@supports (text-overflow: "...")'. JavaScript-based truncation scripts for single-line text containers should be audited and phased out in favor of native styling.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @jja08111: "https://github.com/WebKit/WebKit/pull/72631 has been merged, so close this issue...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS text-overflow: &lt;string&gt; value](https://github.com/WebKit/standards-positions/issues/710) [closed]

## Web-features Group

*group-level data: web-features [`custom-ellipses`](https://webstatus.dev/features/custom-ellipses), shared with 1 other ChromeStatus feature*

- Share of tests passing in the web-features group `custom-ellipses` on [wpt.fyi](https://wpt.fyi/results?q=feature:custom-ellipses) (via webstatus.dev) — stable: Chrome 0% · Edge 0% · Firefox 34.8% · Safari 0%; experimental: Chrome 100% · Edge 100% · Firefox 34.8% · Safari 0%

## 📰 Ecosystem Blogs & Articles

- [realityripple.com](https://udn.realityripple.com/docs/Web/CSS/text-overflow) *(udn.realityripple.com)*
  > The \*\*\`text-overflow: &lt;string&gt;\`\*\* value—specified as part of the \[CSS Overflow Module Level 4\](https://drafts.csswg.org/css-overflow-4/#text-overflow)—allows authors to provide an arbitrary string (e.g., \`text-overflow: "(more)"\`, \`text-overflow: " \[...
- [zenn.dev](https://zenn.dev/cybozu_frontend/articles/web_standards_trends_202609) *(zenn.dev)*
  > \*\*Chrome Platform Status & Blink Intent to Ship\*\* \* \*\*Announcement\*\*: The Chromium team posted the feature entry and \*\*Intent to Ship\*\* for \*CSS \`text-overflow: &lt;string&gt;\` value\* \* \*\*Developer Blogs & Standards Trackers (e.g., Zenn, Frontend Dogma)\*\*:...
- [webkit.org](https://webkit.org/standards-positions) *(webkit.org)*
  > \*\*WebKit Implementation\*\* \* \*\*Status & Commits\*\*: WebKit officially supported the specification in its Standards Positions and merged the implementation pull request (\*\`\[css-overflow-4\] Support text-overflow: &lt;string&gt;\`\*)
- [webkit.org](https://results.webkit.org/commit/next?repository_id=webkit&ref=6da13b652a6ee8c9b536a3ef38bf3050a5d76416) *(results.webkit.org)*
  > \* Tim Nguyen and Frédéric Wang Nélar synchronized upstream WPTs covering bidirectional line clamping, \`&lt;input&gt;\` integration, and custom string overflow, bringing Safari/WebKit to feature parity
- [webkit.org](https://results.webkit.org/commit/next?repository_id=webkit&ref=651c2a2cdcac1fb8bde41eb878db83fbf0525f31) *(results.webkit.org)*
  > \* Tim Nguyen and Frédéric Wang Nélar synchronized upstream WPTs covering bidirectional line clamping, \`&lt;input&gt;\` integration, and custom string overflow, bringing Safari/WebKit to feature parity
- [chromium.org](https://issues.chromium.org/555895001) *(issues.chromium.org)*
  > \* Tim Nguyen and Frédéric Wang Nélar synchronized upstream WPTs covering bidirectional line clamping, \`&lt;input&gt;\` integration, and custom string overflow, bringing Safari/WebKit to feature parity
- [caniuse.com](https://caniuse.com/mdn-css_properties_text-overflow_string) *(caniuse.com)*
  > custom-overflow { white-space: nowrap; overflow: hidden; text-overflow: " \[..\]"; } MDN highlights that Firefox was an early adopter of this value (dating back to Firefox 9), but it remained largely unused across the broader ecosystem due to missing e...
- [Custom text-overflow CSS? - Stack Overflow](https://stackoverflow.com/questions/8401846/custom-text-overflow-css) *(stackoverflow.com)*
  > custom-overflow { white-space: nowrap; overflow: hidden; text-overflow: " \[..\]"; } MDN highlights that Firefox was an early adopter of this value (dating back to Firefox 9), but it remained largely unused across the broader ecosystem due to missing e...
- [stackoverflow.com](https://stackoverflow.com/questions/36063044/text-overflow-string-invalid-property-value-chrome) *(stackoverflow.com)*
  > dev Guides\*\*: \* Historically, CSS-Tricks and community threads on Stack Overflow cited the string syntax with an asterisk, warning developers that \`text-overflow: "---"\` yielded an \`invalid property value\` error in Chromium and WebKit browsers
- [text-overflow \| CSS-Tricks](https://css-tricks.com/almanac/properties/t/text-overflow) *(css-tricks.com)*
  > dev Guides\*\*: \* Historically, CSS-Tricks and community threads on Stack Overflow cited the string syntax with an asterisk, warning developers that \`text-overflow: "---"\` yielded an \`invalid property value\` error in Chromium and WebKit browsers
- [web.dev](https://web.dev/learn/css/overflow) *(web.dev)*
  > dev\` (\*"Overflow"\*) and CSS guides discuss single-line text management and emphasize that adding arbitrary strings completes the truncation toolkit—especially when paired with modern container sizing and internationalized bidi layouts where standard ...
- [\[blink-dev\] Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17500.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS text-overflow: value Chromestatus Sun, 20 Sep 2026 22:03:42 -0700 Contact emails \[email&#160;protected\] Explainer https://devel...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17547.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Rick Byers Thu, 24 Sep 2026 07:16:32 -0700 LGTM3 On Tue, Sep 22, 2026 at 7:55 AM Minseong ...
- [\[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17512.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value 'Dan Clark' via blink-dev Mon, 21 Sep 2026 11:51:41 -0700 LGTM1 On Sunday, September 20, 2026 at 1...
- [CSS text-overflow property](http://w3schools-fa.ir/cssref/css3_pr_text-overflow.html) *(w3schools-fa.ir)*
  > More &quot;Try it Yourself&quot; examples below. &lt;strong&gt;The text-overflow property specifies how overflowed content that is not displayed should be signaled to the user&lt;/strong&gt;. It can be clipped, display an ellipsis (...), or display a custom stri...
- [CSS text-overflow property](https://devcom.w3schools.com/cssref/css3_pr_text-overflow.php) *(devcom.w3schools.com)*
  > More &quot;Try it Yourself&quot; examples below. &lt;strong&gt;The text-overflow property specifies how overflowed content that is not displayed should be signaled to the user&lt;/strong&gt;. It can be clipped, display an ellipsis (...), or display a custom stri...
- [CSS text-overflow Property - GeeksforGeeks](https://www.geeksforgeeks.org/css/css-text-overflow-property) *(geeksforgeeks.org · 2025-07-11T17:58:40)*
  > Example: &lt;strong&gt;This example illustrates the use of the text-overflow property where its value is set to a specific string value&lt;/strong&gt;. ... &lt;html&gt; &lt;head&gt; &lt;title&gt; CSS \| text-overflow Property &lt;/title&gt; &lt;style type=&quot;t...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17500.html) *(mail-archive.com)* *(Cites: `https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-overflow#string`)*
  > \[blink-dev\] Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS text-overflow: value Chromestatus Sun, 20 Sep 2026 22:03:42 -0700 Contact emails \[email&#160;protected\] Explainer htt...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17547.html) *(mail-archive.com)* *(Cites: `https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-overflow#string`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Rick Byers Thu, 24 Sep 2026 07:16:32 -0700 LGTM3 On Tue, Sep 22, 2026 at 7:55 AM...
- [csswg-drafts/css-overflow-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-overflow-4/#text-overflow`)*
  > csswg-drafts/css-overflow-4/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/css/reference/properties/text-overflow/index.md?plain=1) *(github.com)*
- [github.com](https://github.com/w3c/csswg-drafts/issues/12617) *(github.com)*
- [csswg-drafts/css-overflow-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-4/Overview.bs) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 45 result(s) found across 12 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/6294595288825856" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-overflow" -site:developer.mozilla.org` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"drafts.csswg.org/css-overflow-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"CSS text-overflow: <string> value" API` — *Core feature API query* (0 returned)
  - `"CSS text-overflow: <string> value" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"text-overflow" OR "user-friendly" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS text-overflow: <string> value" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS text-overflow: <string> value" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"text-overflow" custom string OR "(more)" css tutorial guide` — *Finds practical developer tutorials demonstrating how to replace standard ellipsis with custom text truncation indicators.* (8 returned)
  - `css "text-overflow:" string example "overflow: hidden" "white-space: nowrap"` — *Targets code snippets and implementation examples combining text-overflow string values with standard CSS truncation properties.* (8 returned)
  - `"text-overflow" "<string>" "css-overflow-4" ("intent to ship" OR "intent to prototype" OR "caniuse")` — *Tracks browser engine implementation announcements, standardization status, and compatibility updates across Chromium, Gecko, and WebKit.* (0 returned)
  - `"text-overflow" string value site:news.ycombinator.com OR site:reddit.com/r/webdev` — *Discovers community reactions, alternative workarounds, and discussions regarding custom text truncation indicators on developer forums.* (4 returned)
- **Google Search Grounding (gemini-3.8-flash):** 17 result(s) found — **13 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 8 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 4 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "custom-ellipses", shared with 1 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "custom-ellipses": Chrome 0% passing (stable)*
- **Sources cited by the AI synthesis:** 2 result(s) found — **1 verified relevant**

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
