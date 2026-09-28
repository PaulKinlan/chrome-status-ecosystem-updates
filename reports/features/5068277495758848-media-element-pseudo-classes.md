# Media element pseudo-classes

> **Report Week:** 2026-W40 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

The :playing, :paused, :seeking, :buffering, :stalled, :muted, and :volume-locked CSS pseudo-classes match &lt;audio&gt; and &lt;video&gt; elements based on their state.  This is one of the focus areas in https://wpt.fyi/interop-2026.

### Motivation

Allows styling of media elements or custom media controls based on the state of the media element. For example, a large play button overlaying a video could be hidden while playing.

There is no expectation that custom media controls can be implemented entirely with CSS, as there is still a lot of state not exposed to CSS.

## Ecosystem Status

- **Momentum:** High (355 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Media element pseudo-classes (:playing, :paused, :seeking, :buffering, :stalled, :muted, and :volume-locked) allow declarative styling of audio and video elements directly via CSS selectors. With Safari supporting them since version 15.4 and Firefox shipping them in version 150, Chrome's implementation in version 156 resolves a flagship focus area of Interop 2026 and establishes full cross-engine interoperability. The feature elevates the CSS-first developer experience by eliminating the need to synchronize media playback states with imperative JavaScript event listeners.

### Recommendations
- Actionable Advice: Teams should adopt media pseudo-classes using progressive enhancement via \`@supports selector(:playing)\` or combine them with \`:has()\` to simplify media wrappers, while temporarily preserving JavaScript class fallbacks until Chrome 156 adoption saturates across user bases.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @alastor0325: "This looks good to us, and \[this\](https://bugzilla.mozilla.org/show\_bug.cgi?id=1707584) is our implementation bug. We also filed a separate \[issue\](ht..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Twitter" (0 points, 0 comments).

## Standards Positions

- **Mozilla:** [Media element pseudo-classes](https://github.com/mozilla/standards-positions/issues/1319) [open]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Twitter](https://mobile.twitter.com/mediaelementjs) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Damien Beard on Twitter: "I like CSS pseudo classes, but they do get messy. Article: Pseudo and pseudon't - https://t.co/7ah4A53gCI #CSS #pseudo #webdesign"](https://twitter.com/damienbaus/status/678986262766727168) — *by @damienbaus, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Element Media Limited (@elementmedia1) / X](https://twitter.com/elementmedia1) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Adam Wathan on Twitter: "Should clarify, this has to work on an \`input\[type=checkbox\]\`, where you aren't able to use pseudo elements."](https://twitter.com/adamwathan/status/1131654435476824065) — *by @adamwathan, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEEkX9dkiAEj-6sY2YKHm0w4V-WaXQwVFlOnenUJWLqaIztGUMMjreK9iazGU3FVEcmT1Lq6lGNmBUk0e0TnQq7h-hEZPIbUaAPh9d4IlRiO9IASyjdisKOs6q1Xqjbv4uQ40Dx4I0=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [mintec.co](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHxDeuG9CNIixxuDop0UdhG_VIDgMb24GLdBvmjuLGZPlJr9FTxc9o_OODSg60xtsGVlwwJB1NeZOtHS65qlnHpd76un7PnaqZtVDXM6ExnBg2NA9RrlnMkl8NxJ-DAP2LJ5amrTUR0OvgISsDJ2T3Aeg==) *(vertexaisearch.cloud.google.com)*
  > ### Overview: Media Element Pseudo-Classes  Defined in **CSS Selectors Level 4** and integrated with the **HTML Standard**, media element pseudo-classes allow `<audio>` and `<video>` elements to be styled dynamically based on their playback and audio
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEps2RUnUksveMy_SoPW7tH_YuPq4iHpAn-ohqL5uode9_jYuf6tu4i6JbNH7bK9UCeUu4mFBb1qHkESUuBj4M8x0dsvxZ789hRZMsCt0cZ6YyxRA9jUTg=) *(vertexaisearch.cloud.google.com)*
  > ### Overview: Media Element Pseudo-Classes  Defined in **CSS Selectors Level 4** and integrated with the **HTML Standard**, media element pseudo-classes allow `<audio>` and `<video>` elements to be styled dynamically based on their playback and audio
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF6HS4m-qZDC8-EU_Ty1X1PbVFcVBOxXzARjzxcKCmngnDJyTwBJpQXbUHL8xrGCVt6EOk7UH0uXtOsYBf56lkKkwkwKpZvSuWs_O6Dhm9ajHxiTEN4SLNGXWAADUdBHB1566A0h7BxrrZ-9z1IydXEnaR2JlKESj-6kKIkvVM7TK0=) *(vertexaisearch.cloud.google.com)*
  > :paused CSS pseudo-class - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Selectors :paused Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 中文 (简体) :paused CSS ps...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFc1OcK-87gfO1EUFS1LKpPiAoMX8JK-dwKUlzb2wXqQVIcaFCeThLhrERrndOmTl0NYUZIuy-EDS-lp2rU77HMYhGS8ScpvsUavnmDXfOuJsIkR1aCn4Xh6eANE0QrIadp5i4ozYe1K3cxvyRert8uYEnugMswyV_K0A6ObcdFCEZf) *(vertexaisearch.cloud.google.com)*
  > :playing CSS pseudo-class - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Selectors :playing Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 中文 (简体) :playing CSS...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGw6-O6T8cCtugFMrIet46AQgawsuRlZ9yvpI2c4A2WARRKtuwxWR_M7f7weT8gVD74vHbBAd8wYAPd9g06hqgu7amylUV2_evCz_qRzP22TJuzcqj15mynOrvjqh6py2gXi3OSrbJyTLZn42E4-tJFWZc5A89ZMNXV65PuZLNgTbBT) *(vertexaisearch.cloud.google.com)*
  > :seeking CSS pseudo-class - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Selectors :seeking Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 中文 (简体) :seeking CSS...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHkI4vWI2g8sNhd0zuV-Y1Bg-_HN6CoLlBPLJZ0kpbVE8I7AztD-aOhmmYUEKs0ylsm9qkfsJej79am0roqE-mt1lxl8rD9wZ-4gpn-5kDhf3ATm5lMmk5mhU7c2UEUwDWQk0l1PwnUvhGWMKntuYHELpU9CU7lFDq0F2WhhTUKgfsc) *(vertexaisearch.cloud.google.com)*
  > ### Overview: Media Element Pseudo-Classes  Defined in **CSS Selectors Level 4** and integrated with the **HTML Standard**, media element pseudo-classes allow `<audio>` and `<video>` elements to be styled dynamically based on their playback and audio
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGmX4FpVTTkciFLFUIs7-u8UPVp1UcoE56CGmUhfj6GEZh3pv8W3blSLhJpbM_8NvTSvg3_CG4Ks7_Pl6k4U9gdXebJ4ySGoA4xMC07OD8y4YIXVNe6YBzdOaKpdEny2sNqu2ijOX26UK0VD0tK6_FPAqdTVZyrIUCMviIvR7SP3g==) *(vertexaisearch.cloud.google.com)*
  > ### Overview: Media Element Pseudo-Classes  Defined in **CSS Selectors Level 4** and integrated with the **HTML Standard**, media element pseudo-classes allow `<audio>` and `<video>` elements to be styled dynamically based on their playback and audio
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHxQJrjAvlyzU9LPjUj3N0tnobikwJSoTvTF6xz1U1znF_aw0eYdn5BRPp74C3mEDuQaCAfhhuE_aYkmZRiTCN6knDlgGu80lfF6Xa5H_rZt7qUixqKjMnRmQliKYzheXK6NtL0MfFNgKm1hhsKJ6BS4nqdDt70aARQblx8) *(vertexaisearch.cloud.google.com)*
  > ### Overview: Media Element Pseudo-Classes  Defined in **CSS Selectors Level 4** and integrated with the **HTML Standard**, media element pseudo-classes allow `<audio>` and `<video>` elements to be styled dynamically based on their playback and audio
- [modern-css.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH-S2uaSGTEzaSlthKw0LAcmCFl8ZE3kScA2aEeXxOO-sT2GsI3kJVEID7djZCDg71OPoNjd57uFPwN2Ytbrm0dcW-_n9PZys2VINxvJr7ngevv4LAhN_OLeoMEORy_RKeQyhv5AT8hmchn8MmBXxAp6uVQ0zkDw3Pr0Q==) *(vertexaisearch.cloud.google.com)*
  > ### Overview: Media Element Pseudo-Classes  Defined in **CSS Selectors Level 4** and integrated with the **HTML Standard**, media element pseudo-classes allow `<audio>` and `<video>` elements to be styled dynamically based on their playback and audio
- [baselinelab.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHHH3ehOzQlPpxE1HyY8QrozNyEz8411ogzsRqWUvdPXtwHreQGY9DuCxGwiz4oecPOUfT4z6Jm0g18OroJjIeHqYEIlWuQJ9ziuGVg4EvrbbfSFwgS_vV3sZeAUcgS5A_dYUyvIpV2wPTSjg==) *(vertexaisearch.cloud.google.com)*
  > ### Overview: Media Element Pseudo-Classes  Defined in **CSS Selectors Level 4** and integrated with the **HTML Standard**, media element pseudo-classes allow `<audio>` and `<video>` elements to be styled dynamically based on their playback and audio
- [reddit.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGtbxsqJqJE2_CLV1T5BoHQsRbgZywxqM7YqVFwWPEB8mLK3Lp_xMUJc3274OLFezbNxcqJVbRGmW9n_aDmI9cMVXkzQqiOXJnYgYBgRzqkysBuBT7pax_IYV5DHajbonEbGje92QE-LH1JtvFq6HWmmbC4LyGkTcP8xJ8Ie70ZlQAiA6MgwfCdPis73RmRxJM9Hg==) *(vertexaisearch.cloud.google.com)*
  > ### Overview: Media Element Pseudo-Classes  Defined in **CSS Selectors Level 4** and integrated with the **HTML Standard**, media element pseudo-classes allow `<audio>` and `<video>` elements to be styled dynamically based on their playback and audio
- [\[blink-dev\] Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16504.html) *(mail-archive.com)*
  > Initial public proposal No information ... existing APIs, such that it has potentially high risk for Android WebView-based applications? No information provided Debuggability No information provided Will this feature be supported on all six Blink pla...
- [Re: \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16508.html) *(mail-archive.com)*
  > Still, I&#x27;ll put it behind a separate flag and enable is in the same CL that flips the flag for media element pseudos. On Mon, May 11, 2026 at 9:34 PM Chromestatus &lt;[email protected]&gt; wrote: *Contact emails* [email protected] *Specification...
- [\[blink-dev\] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16505.html) *(mail-archive.com)*
  > &gt; &gt; *Blink component* &gt; Blink&gt;Media ...res/media-pseudos&gt; &gt; &gt; *Motivation* &gt; <strong>Allows styling of media elements or custom media controls based on the &gt; state of the media element</strong>. For example, a large play bu...
- [\[blink-dev\] Intent to Prototype: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg15214.html) *(mail-archive.com)*
  > There is already an implemention of :playing and :paused behind the CSSPseudoPlayingPaused runtime-enabled feature. Blink component Blink&gt;Media Web Feature ID media-pseudos Motivation <strong>Allows styling of media elements or custom media contro...
- [New in Edge for developers – Create better components and make your site agent-ready - Microsoft Edge Blog](https://blogs.windows.com/msedgedev/2026/09/21/new-in-edge-for-developers-create-better-components-and-make-your-site-agent-ready) *(blogs.windows.com · 2026-09-21T16:58:01)*
  > We’ll then round up other useful additions, including media-state pseudo-classes, relative alpha colors, and PWA drag regions, and go over early features that are ready for testing such as WebMCP, to unlock browsing agent scenarios.
- [Style Video and Audio Players with Pure CSS: Media Pseudo-Classes in Chrome 152 \| Trade Assistance LLC](https://trade-assistance.com/blog/css-media-pseudo-classes-style-video-players-chrome-152) *(trade-assistance.com · 2026-08-05T00:00:00)*
  > <strong>Chrome 152 beta ships seven CSS pseudo-classes that match audio and video elements by their playback state</strong> — :playing, :paused, :buffering and more. Here&#x27;s how to build player UI without a single JavaScript event listener.
- [Intent to Implement and Ship: Implement :playing, :paused pseudo-classes](https://groups.google.com/a/chromium.org/g/blink-dev/c/kz3w-yOMDks/m/Ue71o4xYAAAJ) *(groups.google.com)*
  > Interoperability and Compatibility Risks Compatibility: For the &lt;audio&gt; element Chrome already exposes this state internally by means of a class .state-playing / .state-paused on the ::-webkit-media-controls pseudo element. Interoperability: Fi...
- [CSS Selectors 4: :playing and :paused pseudo classes](https://chromestatus.com/feature/6299876096737280) *(chromestatus.com · 2021-04-12T00:00:00)*
  > We cannot provide a description for this page right now
- [Interop 2026: Advancing Cross-Browser Consistency with New Focus Areas - Fp.putty P](https://fp.putty-p.it.com/a/8352.html) *(fp.putty-p.it.com)*
  > New pseudo-classes like <strong>:playing and :paused for media elements</strong>, giving developers precise control over media playback styling.
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > The <strong>:playing, :paused, :seeking, :buffering, :stalled, :muted, and :volume-locked CSS pseudo-classes match &lt;audio&gt; and &lt;video&gt; elements based on their current state</strong>. These pseudo-classes are one of the focus areas for Int...
- [Interop 2026: Continuing to improve the web for developers \| Blog \| web.dev](https://web.dev/blog/interop-2026) *(web.dev · 2026-02-12T00:00:00)*
  > This area includes the <strong>:playing, :paused, :seeking, :buffering, :stalled, :muted, and :volume-locked CSS pseudo-classes</strong>, which match &lt;audio&gt; and &lt;video&gt; elements based on their state.
- [Microsoft Edge and Interop 2026 - Microsoft Edge Blog](https://blogs.windows.com/msedgedev/2026/02/12/microsoft-edge-and-interop-2026) *(blogs.windows.com · 2026-03-06T10:53:42)*
  > JSPI for Wasm, to integrate Wasm with JavaScript promises. Media pseudo-classes, <strong>to implement pseudo-classes such as :playing, :paused, :buffering, and others for audio/video element states across browsers</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [css.selectors.playing (and 6 siblings) - Chrome 152 is incorrect, media element pseudo-classes have not shipped in Chrome · Issue #30523 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/issues/30523) *(github.com · 2026-09-14T23:44:14)* *(Cites: `https://chromestatus.com/feature/5068277495758848`)*
  > Chrome Platform Status: https://<strong>chromestatus.com/feature/5068277495758848</strong>
- [media-pseudos · Issue #1307 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1307) *(github.com · 2026-08-14T17:30:45)* *(Cites: `https://chromestatus.com/feature/5068277495758848`)*
  > Chromestatus: https://<strong>chromestatus.com/feature/5068277495758848</strong> Feature Name: Media element pseudo-classes Web Feature ID: media-pseudos Chrome Releases: Chrome 156

## 📚 Platform Documentation & Specifications

- [css.selectors.playing (and 6 siblings) - Chrome 152 is incorrect, media element pseudo-classes have not shipped in Chrome · Issue #30523 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/issues/30523) *(github.com)*
- [media-pseudos · Issue #1307 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1307) *(github.com)*
- [Media element pseudo-classes · Issue #1003 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1003) *(github.com)*
- [Media element pseudo-classes · Issue #166 · web-platform-dx/developer-signals](https://github.com/web-platform-dx/developer-signals/issues/166) *(github.com)*
- [Media element pseudo-classes · Issue #927 · web-platform-dx/developer-signals](https://github.com/web-platform-dx/developer-signals/issues/927) *(github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/150.md at main · MicrosoftDocs/edge-developer](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/150.md) *(github.com)*
- [paused CSS pseudo-class - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:paused) *(developer.mozilla.org)*
- [:paused CSS pseudo-class - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:paused) *(developer.mozilla.org)*
- [playing CSS pseudo-class - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:playing) *(developer.mozilla.org)*
- [interop/2026/README.md at main · web-platform-tests/interop](https://github.com/web-platform-tests/interop/blob/main/2026/README.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 45 result(s) found across 11 planned queries — **22 verified relevant**
  - `"chromestatus.com/feature/5068277495758848" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"html.spec.whatwg.org/multipage/semantics-other.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"Media element pseudo-classes" API` — *Core feature API query* (8 returned)
  - `"Media element pseudo-classes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"wpt.fyi" OR "pseudo-classes" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Media element pseudo-classes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Media element pseudo-classes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `CSS media pseudo-classes ":playing" OR ":paused" custom video controls tutorial` — *Finds practical developer tutorials and walkthroughs on styling custom audio and video players using the new media pseudo-classes.* (6 returned)
  - `video:playing OR video:paused OR video:buffering CSS example` — *Surfaces real-world CSS code snippets and syntax patterns leveraging media element state selectors.* (0 returned)
  - `"media element pseudo-classes" OR ":playing" "Interop 2026" browser support` — *Discovers vendor roadmaps, Interop 2026 focus area announcements, and cross-browser implementation timelines.* (8 returned)
  - `CSS ":playing" ":paused" pseudo-classes (site:reddit.com OR site:news.ycombinator.com)` — *Uncovers developer feedback, sentiment, and discussions regarding styling media without relying entirely on JavaScript.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **12 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 2 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 4 result(s) found — **2 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 114214 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 2 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5068277495758848)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5068277495758848)
- [Specification](https://html.spec.whatwg.org/multipage/semantics-other.html#pseudo-classes)
- [Chromium Tracking Bug](https://crbug.com/40246121)
