# Media element pseudo-classes

> **Report Week:** 2026-W46 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

The :playing, :paused, :seeking, :buffering, :stalled, :muted, and :volume-locked CSS pseudo-classes match &lt;audio&gt; and &lt;video&gt; elements based on their state.  This is one of the focus areas in https://wpt.fyi/interop-2026.

### Motivation

Allows styling of media elements or custom media controls based on the state of the media element. For example, a large play button overlaying a video could be hidden while playing.  There is no expectation that custom media controls can be implemented entirely with CSS, as there is still a lot of state not exposed to CSS.

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 335 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Media element pseudo-classes (\`:playing\`, \`:paused\`, \`:seeking\`, \`:buffering\`, \`:stalled\`, \`:muted\`, and \`:volume-locked\`) streamline media styling by eliminating boilerplate JavaScript event listeners for standard playback state reflection. Included as an Interop 2026 focus area, full cross-engine consensus is nearly achieved: Safari and Firefox provide solid production support, experimental Chromium implementations pass 100% of Web Platform Tests, and Chrome is slated to enable them by default in version 158.

### Recommendations
- Actionable Advice: Web teams should begin adopting media pseudo-classes as a progressive enhancement today, especially when styling non-critical UI states or overlay indicators. However, until stable Chromium releases ship the feature globally, production-critical video playback skins still require lightweight JavaScript event listener fallbacks.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @alastor0325: "This looks good to us, and \[this\](https://bugzilla.mozilla.org/show\_bug.cgi?id=1707584) is our implementation bug. We also filed a separate \[issue\](ht..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **Mozilla:** [Media element pseudo-classes](https://github.com/mozilla/standards-positions/issues/1319) [open]

## Web-features Group

*group-level data: web-features [`media-pseudos`](https://webstatus.dev/features/media-pseudos)*

- Share of tests passing in the web-features group `media-pseudos` on [wpt.fyi](https://wpt.fyi/results?q=feature:media-pseudos) (via webstatus.dev) — stable: Chrome 0% · Edge 0% · Firefox 87.5% · Safari 100%; experimental: Chrome 100% · Edge 100% · Firefox 100% · Safari 100%
- **Chrome usage:** 0.00024% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/436))

## 📰 Ecosystem Blogs & Articles

- [mintec.co](https://mintec.co/blog/css-media-pseudo-classes-player-2026) *(mintec.co)*
  > \*\*Media element pseudo-classes\*\* represent a significant milestone in CSS and HTML media integration \*\*The Problem It Solves:\*\* Historically, styling custom player skins or play/pause button overlays required wiring up numerous JavaScript event liste...
- [modern-css.com](https://modern-css.com/video-player-states-without-javascript-events) *(modern-css.com)*
  > Included as a focus area in \*\*Interop 2026\*\*, these selectors—\`:playing\`, \`:paused\`, \`:seeking\`, \`:buffering\`, \`:stalled\`, \`:muted\`, and \`:volume-locked\`—allow browsers to expose native playback and audio states directly to the cascade without requir...
- [Styling video Elements by State with \`:playing\` and \`:muted\`](https://azukiazusa.dev/en/blog/style-video-with-media-state-pseudo-classes) *(azukiazusa.dev)*
  > \*\*State Relationships:\*\* The specifications and MDN point out that states are not strictly mutually exclusive Notably, an element still matches \`:playing\` even when temporarily stopped due to \`:buffering\` or \`:stalled\`, while \`:seeking\` operates orth...
- [schalkneethling.com](https://schalkneethling.com/projects/css-media-pseudo-polyfill) *(schalkneethling.com)*
  > Because native support has rolled out gradually across browser engines, tooling authors have developed drop-in utilities such as Schalk Neethling’s \`css-media-pseudo-polyfill\` It intercepts stylesheets, rewrites media pseudo-classes to specificity-ma...
- [reddit.com](https://www.reddit.com/r/css/comments/1wjxmgh/baseline_had_playingpausedetc_pseudoclasses_as) *(reddit.com)*
  > Ecosystem sentiment across developer communities (Reddit, GitHub Web Platform DX) has been enthusiastic
- [\[blink-dev\] Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16504.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Media element pseudo-classes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Media element pseudo-classes Chromestatus Mon, 11 May 2026 12:34:09 -0700 Contact emails \[email&#160;protected\] Specification h...
- [Microsoft Edge 152 web platform release notes (Aug. 27, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/152) *(learn.microsoft.com · 2026-08-27T00:00:00)*
  > Window Controls Overlay API at MDN. The following CSS pseudo-classes match &lt;audio&gt; and &lt;video&gt; elements based on their state:
- [The Process of Shipping The CSS Media Pseudo Classes Polyfill - Schalk Neethling - Open Web Engineer](https://schalkneethling.com/posts/the-process-of-shipping-the-css-media-pseudo-classes-polyfill) *(schalkneethling.com)*
  > It polyfills six of the seven CSS media element pseudo-classes — &lt;strong&gt;:playing, :paused, :seeking, :buffering, :stalled, and :muted&lt;/strong&gt; — for browsers that do not yet support them. These pseudo-classes are defined in the WHATWG HTML specifica...
- [Re: \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16508.html) *(mail-archive.com)*
  > Still, I&#x27;ll put it behind a separate flag and enable is in the same CL that flips the flag for media element pseudos. On Mon, May 11, 2026 at 9:34 PM Chromestatus &lt;\[email protected\]&gt; wrote: \*Contact emails\* \[email protected\] \*Specification...
- [The Shifting Line Between CSS States and JavaScript Events \| CSS-Tricks](https://css-tricks.com/css-states-and-javascript-events) *(css-tricks.com · 2026-07-01T01:44:13)*
  > This is actually what the change event does (unless the element is a checkbox, radio button, dropdown list, color picker, or range slider), and what makes it different from the input event. There isn’t a JavaScript event for auto-filling or even a cl...
- [Media element pseudo-classes - Web platform features explorer](https://web-platform-dx.github.io/web-features-explorer/features/media-pseudos) *(web-platform-dx.github.io)*
  > The :playing, :paused, :seeking, :buffering, :stalled, :muted, and :volume-locked CSS pseudo-classes match &lt;audio&gt; and &lt;video&gt; elements based on their state.
- [\[blink-dev\] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16505.html) *(mail-archive.com)*
  > &gt; \*No information provided\* &gt; &gt; &gt; \*Debuggability\* &gt; \*No information provided\* &gt; &gt; \*Will this feature be supported on all six Blink platforms (Windows, Mac, &gt; Linux, ChromeOS, Android, and Android WebView)?\* &gt; Yes &gt; &gt; ...
- [Re: \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16506.html) *(mail-archive.com)*
  > &gt;&gt; \*No information provided\* &gt;&gt; &gt;&gt; &gt;&gt; \*Debuggability\* &gt;&gt; \*No information provided\* &gt;&gt; &gt;&gt; \*Will this feature be supported on all six Blink platforms (Windows, Mac, &gt;&gt; Linux, ChromeOS, Android, and Androi...
- [Re: \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16528.html) *(mail-archive.com)*
  > &gt;&gt;&gt; \*No information provided\* &gt;&gt;&gt; &gt;&gt;&gt; &gt;&gt;&gt; \*Debuggability\* &gt;&gt;&gt; \*No information provided\* &gt;&gt;&gt; &gt;&gt;&gt; \*Will this feature be supported on all six Blink platforms (Windows, &gt;&gt;&gt; Mac, Linu...
- [Style Video and Audio Players with Pure CSS: Media Pseudo-Classes in Chrome 152 \| Trade Assistance LLC](https://trade-assistance.com/blog/css-media-pseudo-classes-style-video-players-chrome-152) *(trade-assistance.com · 2026-08-05T00:00:00)*
  > &lt;strong&gt;Start with :playing and :paused&lt;/strong&gt;. They are the most broadly implemented and cover the highest-value interaction — the play/pause overlay. Layer in :buffering and :stalled for loading feedback, always behind a hidden-by-default spinner...
- [Media pseudo-classes: :paused/:playing/:seeking/:buffering/:stalled/:muted/:volume-locked \[40246121\] - Chromium](https://issues.chromium.org/issues/40246121) *(issues.chromium.org)*
  > https://w3c.github.io/csswg-drafts/selectors-4/#resource-pseudos &lt;strong&gt;These pseudo-classes are implemented in WebKit, but not in Blink or Gecko&lt;/strong&gt;. Filing this bug because it&#x27;s a proposal for Interop 2023: https://github.com/web-platfor...
- [Announcing Interop 2026 \| WebKit](https://webkit.org/blog/17818/announcing-interop-2026) *(webkit.org · 2026-03-05T00:18:00)*
  > Safari has already implemented many of the features included in Interop 2026. In fact, we were the first browser to ship contrast-color(), Media pseudo-classes, shape(), and Scoped Custom Element Registries. Plus, we have support for Anchor Positioni...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16504.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5068277495758848`)*
  > \[blink-dev\] Intent to Ship: Media element pseudo-classes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Media element pseudo-classes Chromestatus Mon, 11 May 2026 12:34:09 -0700 Contact emails \[email&#160;protected\] Speci...
- [media-pseudos · Issue #1307 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1307) *(github.com · 2026-08-14T17:30:45)* *(Cites: `https://chromestatus.com/feature/5068277495758848`)*
  > media-pseudos · Issue #1307 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You s...
- [css.selectors.playing (and 6 siblings) - Chrome 152 is incorrect, media element pseudo-classes have not shipped in Chrome · Issue #30523 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/issues/30523) *(github.com · 2026-09-14T23:44:14)* *(Cites: `https://chromestatus.com/feature/5068277495758848`)*
  > css.selectors.playing (and 6 siblings) - Chrome 152 is incorrect, media element pseudo-classes have not shipped in Chrome · Issue #30523 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up App...

## 📚 Platform Documentation & Specifications

- [playing CSS pseudo-class - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:playing) *(developer.mozilla.org)*
- [:buffering CSS pseudo-class - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:buffering) *(developer.mozilla.org)*
- [Pseudo-classes - CSS - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) *(developer.mozilla.org)*
- [Media element pseudo-classes · Issue #166 · web-platform-dx/developer-signals · GitHub](https://github.com/web-platform-dx/developer-signals/issues/166) *(github.com)*
- [media-pseudos · Issue #1307 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1307) *(github.com)*
- [css.selectors.playing (and 6 siblings) - Chrome 152 is incorrect, media element pseudo-classes have not shipped in Chrome · Issue #30523 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/issues/30523) *(github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/150.md at main · MicrosoftDocs/edge-developer · GitHub](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/150.md) *(github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/152.md at main · MicrosoftDocs/edge-developer · GitHub](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/152.md) *(github.com)*
- [:paused CSS pseudo-class - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:paused) *(developer.mozilla.org)*
- [paused CSS pseudo-class - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:paused) *(developer.mozilla.org)*
- [muted CSS pseudo-class - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:muted) *(developer.mozilla.org)*
- [:buffering CSS pseudo-class - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:buffering) *(developer.mozilla.org)*
- [Media element pseudo-classes · Issue #927 · web-platform-dx/developer-signals · GitHub](https://github.com/web-platform-dx/developer-signals/issues/927) *(github.com)*
- [feat(html): :playing and :paused follow a media element's paused by sidorares · Pull Request #891 · sidorares/react-x11-components · GitHub](https://github.com/sidorares/react-x11-components/pull/891) *(github.com)*
- [\[selectors-4\] additional resource state pseudo-classes for media elements · Issue #3821 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/3821) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 68 result(s) found across 11 planned queries — **28 verified relevant**
  - `"chromestatus.com/feature/5068277495758848" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"html.spec.whatwg.org/multipage/semantics-other.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Media element pseudo-classes" API` — *Core feature API query* (8 returned)
  - `"Media element pseudo-classes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"wpt.fyi" OR "pseudo-classes" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Media element pseudo-classes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Media element pseudo-classes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"css" (":playing" OR ":paused") (video OR audio) tutorial OR guide` — *Find developer guides and tutorials explaining how to style media elements or custom overlays using :playing and :paused pseudo-classes.* (8 returned)
  - `":playing" ":paused" (":buffering" OR ":seeking" OR ":muted") css video` — *Discover code snippets and syntax examples combining media element pseudo-classes for audio and video state styling.* (8 returned)
  - `"media element pseudo-classes" OR (":playing" ":paused") ("Interop 2026" OR "WebKit" OR "Chromium" OR "Firefox")` — *Track browser engine implementation progress, compatibility status, and announcements related to Interop 2026.* (8 returned)
  - `(":playing" OR ":paused" OR ":buffering") "pseudo-class" (site:news.ycombinator.com OR site:reddit.com/r/webdev OR site:github.com)` — *Surface developer sentiment, feature feedback, and discussions across web development forums and standards issue trackers.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 5 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 2 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 4 result(s) found — **2 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "media-pseudos", shared with 0 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "media-pseudos": Chrome 0% passing (stable)*
- **Sources cited by the AI synthesis:** 2 result(s) found — **1 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 2 engineer comment(s) read
- **Web Page Excerpts Ingested:** 9 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5068277495758848)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5068277495758848)
- [Specification](https://html.spec.whatwg.org/multipage/semantics-other.html#pseudo-classes)
- [Chromium Tracking Bug](https://crbug.com/40246121)
