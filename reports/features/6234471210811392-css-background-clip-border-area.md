# CSS background-clip: border-area

> **Report Week:** 2026-W37 | **Milestone:** Chrome 150 | **Category:** Enabled by default

## Overview

Implements the border-area value for the CSS background-clip property, as defined in CSS Backgrounds Level 4. background-clip: border-area clips an element's background to the area painted by its border strokes, taking border-width and border-style into account while ignoring transparency from border-color. This enables gradient borders without border-image. WebKit already ships this feature; this implementation brings Chromium to parity.

### Motivation

There is currently no ergonomic way to clip a background to the visible border geometry in CSS. Authors who want gradient or image borders must use border-image, which is complex, overrides other border styling, and does not compose well with other properties. The border-area clip value provides a clean, declarative solution to this problem. WebKit already ships this feature, and it is part of the actively developed CSS Backgrounds Level 4 specification.

## Ecosystem Status

- **Momentum:** High (310 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** CSS background-clip: border-area is currently Enabled by default in Chrome 150. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 150. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @yisibl: "@emilio Thank you for getting off to a great start with Firefox.   If it's difficult to implement non-solid borders, could you at least make Firefox c..."
- Standards Activity (WebKit): Latest discussion from @smfr: "We do. Implementation is almost complete...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **Mozilla:** [Support background-clip: border-area](https://github.com/mozilla/standards-positions/issues/1397) [open]
- **WebKit:** [CSS background-clip: border-area](https://github.com/WebKit/standards-positions/issues/379) [closed]

## 📰 Ecosystem Blogs & Articles

- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHwGQd5XFgvHX0aFSk3S_nG8D8LwaTQiafm8ppw4rh-3H4pTWfZDPS1qFX56OMjCm1iNNWNh-g9bVr7ei_IFIpdAAUf2qMlxXlU_UuOiFx_hzMjaLhIP4YUEFW77V5XYceQXPxeT_YSmet8iXT9o5SYVseOEP0BLSeG_6p7b6jLN1NNnKKnR8h0a1D7) *(vertexaisearch.cloud.google.com)*
  > background-clip CSS property - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Properties background-clip Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Español Français 日本語 한...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFzX6Je5EqMh4CtnN5l9FMS3A7Sq9Nx5NqoyYfPJrPkUwWl5ybtKfHDZ0PD8L-yOc4lgEPrnSMgmA1UMm29t8B_KPSrxlbALtd3px04-uCCMZpL6ef06cLuuzHGeH99KJ32Vm8DL3fA) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [youtube.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE_lN1VX8shbTDs-eaUwza4F-B7yP3zjRaBMOaTt6nw7XeqD8UTo1KO9ezOMPYhmulqnCDfm_EJLIoRo0HND_TOtGbESOvvNm1TFwvehRfzm0xpuBGz7-ZS9vOFzq6sg0kb) *(vertexaisearch.cloud.google.com)*
  > - YouTube About Press Copyright Contact us Creators Advertise Developers Terms Privacy Policy & Safety How YouTube works Test new features NFL Sunday Ticket &copy; 2026 Google LLC
- [webkit.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFeuEwIFXGYTRleqD3oh9dNQbnmE2T2fkcmZIlfKGBHErGQMGs2LrHXhB2d8DpV5V1G9YxxgUJKL1764lsaUoO69V2b3YbJ962zhgOirW6Rna2Dx_QPsCOmhshLkKlCBX4I2MFsXYa-m5vVNkFccJf8) *(vertexaisearch.cloud.google.com)*
  > Make creative borders with background-clip border-area | WebKit WebKit background-clip border-area">Make creative borders with background-clip border-area Nov 20, 2024 by Jen Simmons How’d you like to use CSS to easily create a border from an image o...
- [master.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHvsgM10ZRTlcFnPQ-VlzTN4IhuFjIz74i14auKHgkJyRUUev_XYR8oFyaoet1cLfdReYQxcsVK-4Wlwkk0ghYkqc5FRVQyzCcRyDLFOQoO3CACMnul2-IPMbbbClP63pb4ZptBt3JHXydo) *(vertexaisearch.cloud.google.com)*
  > ### Overview: What is `background-clip: border-area`?  Defined in the **CSS Backgrounds and Borders Module Level 4**, `background-clip: border-area` clips an element's background image or gradient strictly to the area painted by its border strokes.
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGHwum4DRzV3IWJzvSAD7K55FIktOnxPj2u6SYi3xwiqJpC_-uxaTC671f8GayVOBwcK9ETY7lFpV1p5dKhcGxuJTfgmY5NoPvzTBkyqJiM1j7SzsV-zmv2KnyA2a29VdiKvwLx5O1hiNqmjJot0l0yyLsg9YwFVSPt5Mswkg==) *(vertexaisearch.cloud.google.com)*
  > background-clip | CSS-Tricks Skip to main content CSS-Tricks Since 2007 background-clip CSS Almanac &rarr; Properties &rarr; B &rarr; background &rarr; background-clip background-clip Mojtaba Seyedi on Feb 17, 2015 background-clip lets you control ho...
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHhWdSR5MUcahmFSfTmwO1pz7rwSZk21ulT6SMg-mx4YUloTqIR_8C2U9ZxCZ9FVsG1LqGALf_pWAzRkj4ppbFzVDUmukcVlyjkgHdvuDGbLuCI3UdSl7L1D8uf) *(vertexaisearch.cloud.google.com)*
  > Quick Hit #155 | CSS-Tricks Skip to main content CSS-Tricks Since 2007 background-clip chrome CSS Quick Hit #155 Daniel Schwarz on Jul 1, 2026 Chrome 150 ships background-clip: border-area (supported by Safari already). Comments AgentMeter Permalink ...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFauZUbx_U2XcIeRyBF5f0JlyrdGluZYIbo9KdqZ5z4X0hd5HdVHbSca8aHUcA66g_3hwK8PECFEtN5lxZXXuSseU9plp0RmFU7BmfVqO_ltiw8Gdd0H3wHzJdxGi5_t5slgt28K-wx72PPpoA3Igf2nGlgryw=) *(vertexaisearch.cloud.google.com)*
  > background-clip: border-area · Issue #266 · web-platform-dx/developer-signals · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refres...
- [Intent to Ship: CSS background-clip: border-area](https://groups.google.com/a/chromium.org/g/blink-dev/c/AET-65LwYxg) *(groups.google.com · 2026-05-26T00:00:00)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/6234471210811392</strong>?gate=4732230498910208
- [CSS background-clip: border-area](https://chromestatus.com/feature/6234471210811392) *(chromestatus.com · 2026-03-19T00:00:00)*
  > We cannot provide a description for this page right now
- [Mastering `background-clip` in CSS: A Deep Dive — tutorialpedia.org](https://www.tutorialpedia.org/blog/background-clip-css-mdn) *(tutorialpedia.org)*
  > <strong>.transparent-border { border: 5px solid black; padding: 20px; background-color: lightgreen; background-clip: padding-box; }</strong> This will make the background appear only inside the padding area, leaving the border area transparent.
- [CSS background-clip Property](https://www.w3schools.com/cssref/css3_pr_background-clip.php) *(w3schools.com)*
  > <strong>background-clip: border-box|padding-box|content-box|initial|inherit;</strong> ... Coding fundamentals as a game. Bite-sized lessons and challenges. ... Ready to start your journey? Your streak is waiting.
- [CSS Background Clip](https://www.w3schools.com/css/css3_background_clip.asp) *(w3schools.com)*
  > <strong>The CSS background-clip property defines how far the background (color, image, or gradient) should extend within an element</strong>. This property can have one of the following values: border-box - The background extends behind the border.
- [The background-clip property in CSS - Desarrollolibre](https://www.desarrollolibre.net/blog/css/the-background-clip-property-in-css) *(desarrollolibre.net)*
  > <strong>The background-clip property determines the exact area where an element&#x27;s background (whether a color or an image) is painted</strong>. By default, the background extends up to the outer border, but you can clip it at the padding, the co...
- [html - CSS "border-clip" halfway through border - Stack Overflow](https://stackoverflow.com/questions/49096976/css-border-clip-halfway-through-border) *(stackoverflow.com)*
  > div { width: 300px; padding: 20px; margin: 10px auto; line-height: 3; /*background-color: #f66;*/ /*background-clip: padding-box;*/ /* use instead : */ background:linear-gradient(#f66,#f66) no-repeat center center; background-size: calc(100% + 20px) ...
- [css - How to use background-clip border-box correctly - Stack Overflow](https://stackoverflow.com/questions/60908169/how-to-use-background-clip-border-box-correctly) *(stackoverflow.com)*
  > Because the is no way to affect margin area or any parent area from a child. body { margin: 0; padding: 0; } #bgbox { width: 100%; height: 150px; background: blue; background-image: url(https://i.imgur.com/tBEjfgJ.png); background-clip: padding-box; ...
- [CSS Background-Clip Property - 1Keydata CSS Tutorial](https://www.1keydata.com/css-tutorial/background-clip.php) *(1keydata.com)*
  > Explains the CSS background-clip property. Includes examples to illustrate how the position of the background image can be specified using this property.
- [CSS background-clip text | Michael Gearon](https://mgearon.com/css/css-background-clip-text) *(mgearon.com · 2022-11-15T20:00:33)*
  > <strong>Guide on the CSS property &quot;background-clip: text&quot; to add a background image to HTML text by clipping it</strong>. Using the webkit prefix and non-prefixed syntax.
- [Make creative borders with background-clip border-area | WebKit](https://webkit.org/blog/16214/background-clip-border-area) *(webkit.org · 2024-11-20T19:09:16)*
  > And we can create the effect we want to using background-clip: border-area. Arguably the default should have always been background-origin: border-box — especially since the default for background-repeat is repeat, which results an unexpected visual ...
- [CSS property: background-clip: border-area | Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/mdn-css_properties_background-clip_border-area) *(caniuse.com)*
  > &quot;Can I use&quot; provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers.
- [background-clip: border-area — Demo 6](https://codepen.io/jensimmons/pen/OJKBmyP?editors=1100) *(codepen.io)*
  > &lt;main class=&quot;gradient&quot;&gt; &lt;figure style=&quot;--percent:84%&quot;&gt; Reached &lt;span&gt;8,426&lt;/span&gt; steps &lt;/figure&gt; &lt;/main&gt; &lt;footer class=&quot;error-message&quot;&gt;&lt;small&gt;This is a demo of &lt;code&gt...
- [background-clip: border-area — Demo 4](https://codepen.io/jensimmons/pen/wvVxZZW) *(codepen.io)*
  > &lt;main class=&quot;stripes&quot;&gt; Warning &lt;/main&gt; &lt;footer class=&quot;error-message&quot;&gt;&lt;small&gt;This is a demo of &lt;code&gt;background-clip: border-area&lt;/code&gt;. Your browser does not &lt;a href=&quot;https://caniuse.co...
- [Animating Background Gradients to Make Your PWA More Native - DockYard](https://dockyard.com/blog/2017/10/17/animating-background-gradients-pwa) *(dockyard.com · 2017-10-17T04:00:00)*
  > Of course, no CSS trick ever works perfectly. We ran into a few snags and trade-offs implementing this technique. It is true, color (background, border, or fill) isn’t the most performant property to transition, but it’s not the worst either. We’re i...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Ship: CSS background-clip: border-area](https://groups.google.com/a/chromium.org/g/blink-dev/c/AET-65LwYxg) *(groups.google.com · 2026-05-26T00:00:00)* *(Cites: `https://chromestatus.com/feature/6234471210811392`)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/6234471210811392</strong>?gate=4732230498910208
- [csswg-drafts/css-backgrounds-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-backgrounds-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-backgrounds-4/#valdef-background-clip-border-area`)*
  > Shortname: css-backgrounds · Level: 4 · Status: FPWD · Date: 2025-11-25 · Prepare for TR: yes · Work Status: Exploring · Group: csswg · ED: https://<strong>drafts.csswg.org/css-backgrounds-4</strong>/ TR: https://www.w3.org/TR/css-backgroun...
- [[css-backgrounds-4] Transformation of background images · Issue #2364 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/2364) *(github.com · 2018-02-27T07:43:33)* *(Cites: `https://drafts.csswg.org/css-backgrounds-4/#valdef-background-clip-border-area`)*
  > Spec: https://drafts.csswg.org/css-backgrounds-4/ Currently, <strong>there is no way to rotate or skew the background image(s) of an element with CSS</strong>, so web developers can only transform the whole element. With this feature added ...
- [[css-backgrounds] Add 'scale-down' to background-size · Issue #468 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/468) *(github.com · 2016-09-13T17:15:32)* *(Cites: `https://drafts.csswg.org/css-backgrounds-4/#valdef-background-clip-border-area`)*
  > This is for css-backgrounds-4 (I can&#x27;t seem to add labels). Link to spec section: https://<strong>drafts.csswg.org/css-backgrounds-4</strong>/ As evidenced by various threads like this one on StackOverflow: htt...
- [[css-borders-4] Use cases for `corner-shape` · Issue #6980 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/6980) *(github.com · 2022-01-23T22:29:13)* *(Cites: `https://drafts.csswg.org/css-backgrounds-4/#valdef-background-clip-border-area`)*
  > The working draft spec in it&#x27;s current state: https://<strong>drafts.csswg.org/css-backgrounds-4</strong>/#corner-shaping

## 📚 Platform Documentation & Specifications

- [csswg-drafts/css-backgrounds-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-backgrounds-4/Overview.bs) *(github.com)*
- [[css-backgrounds-4] Transformation of background images · Issue #2364 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/2364) *(github.com)*
- [[css-backgrounds] Add 'scale-down' to background-size · Issue #468 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/468) *(github.com)*
- [[css-borders-4] Use cases for `corner-shape` · Issue #6980 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/6980) *(github.com)*
- [background-clip CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-clip) *(developer.mozilla.org)*
- [background-clip CSS property - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip) *(developer.mozilla.org)*
- [mask-clip CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/mask-clip) *(developer.mozilla.org)*
- [clip-path CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/clip-path) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 35 result(s) found across 7 planned queries — **21 verified relevant**
  - `"chromestatus.com/feature/6234471210811392" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"drafts.csswg.org/css-backgrounds-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"CSS background-clip: border-area" API` — *Core feature API query* (2 returned)
  - `"CSS background-clip: border-area" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"background-clip" OR "border-area" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS background-clip: border-area" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS background-clip: border-area" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 8 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 4 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6234471210811392)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6234471210811392)
- [Specification](https://drafts.csswg.org/css-backgrounds-4/#valdef-background-clip-border-area)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/329302543)
