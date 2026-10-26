# Media element pseudo-classes

> **Report Week:** 2026-W44 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

The :playing, :paused, :seeking, :buffering, :stalled, :muted, and :volume-locked CSS pseudo-classes match &lt;audio&gt; and &lt;video&gt; elements based on their state.  This is one of the focus areas in https://wpt.fyi/interop-2026.

### Motivation

Allows styling of media elements or custom media controls based on the state of the media element. For example, a large play button overlaying a video could be hidden while playing.  There is no expectation that custom media controls can be implemented entirely with CSS, as there is still a lot of state not exposed to CSS.

## Ecosystem Status

- **Momentum:** Moderate (footprint 365 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The Media element pseudo-classes (:playing, :paused, :seeking, :buffering, :stalled, :muted, :volume-locked) allow CSS selectors to style &lt;audio&gt; and &lt;video&gt; elements directly based on their internal playback engine state. Designated as a key focus area in Interop 2026, the feature achieves complete cross-browser availability with Chromium's rollout in Chrome 158, joining existing implementations in Safari and Firefox. Developer reception is enthusiastic, as the standard eliminates heavy JavaScript event-listener boilerplate previously required for media player UI states.

### Recommendations
- Actionable Advice: Engineering teams building custom media players should start adopting media pseudo-classes to simplify player state styling and prune custom JS event-listener layers. When targeting older client environments, teams should implement these selectors via progressive enhancement while keeping lightweight JS class-toggling fallbacks where necessary.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @alastor0325: "This looks good to us, and \[this\](https://bugzilla.mozilla.org/show\_bug.cgi?id=1707584) is our implementation bug. We also filed a separate \[issue\](ht..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **Mozilla:** [Media element pseudo-classes](https://github.com/mozilla/standards-positions/issues/1319) [open]

## Web-features Group

*group-level data: web-features [`media-pseudos`](https://webstatus.dev/features/media-pseudos)*

- Share of tests passing in the web-features group `media-pseudos` on [wpt.fyi](https://wpt.fyi/results?q=feature:media-pseudos) (via webstatus.dev) — stable: Chrome 0% · Edge 0% · Firefox 87.5% · Safari 100%; experimental: Chrome 100% · Edge 100% · Firefox 100% · Safari 100%
- **Chrome usage:** 0% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/436))

## 📰 Ecosystem Blogs & Articles

- [css-tricks.com](https://css-tricks.com/css-states-and-javascript-events) *(css-tricks.com)*
  > Historically, reflecting media state in UI (such as custom player controls or overlays) required wiring multiple JavaScript event listeners (\`play\`, \`pause\`, \`waiting\`, \`seeking\`, \`volumechange\`) and manually syncing CSS utility classes \*"The Shiftin...
- [modern-css.com](https://modern-css.com/video-player-states-without-javascript-events) *(modern-css.com)*
  > Historically, reflecting media state in UI (such as custom player controls or overlays) required wiring multiple JavaScript event listeners (\`play\`, \`pause\`, \`waiting\`, \`seeking\`, \`volumechange\`) and manually syncing CSS utility classes These pseudo-...
- [mintec.co](https://mintec.co/blog/css-media-pseudo-classes-player-2026) *(mintec.co)*
  > These pseudo-classes eliminate that boilerplate by exposing the browser’s internal playback engine states directly to the CSS selector engine As part of \*\*Interop 2026\*\*, browser vendors have coordinated test suites and implementations to achieve bas...
- [web.dev](https://web.dev/blog/baseline-digest-aug-2026) *(web.dev)*
  > dev / Chrome for Developers) Baseline monthly digests highlighted milestones such as \`:paused\` reaching cross-browser availability
- [chrome.com](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com)*
  > dev / Chrome for Developers) \*\*Key Points\*\*: Chrome Platform Status entries and Chrome Beta notes detailed the shipping roadmap for the seven pseudo-classes
- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/5068277495758848?gate=5472147766116352) *(img968-dot-cr-status.appspot.com)*
  > \*\*Key Points\*\*: Chrome Platform Status entries and Chrome Beta notes detailed the shipping roadmap for the seven pseudo-classes \*\*Cross-Engine Focus\*\*: With Safari and Firefox having landed initial implementations and Chromium actively shipping under...
- [\[blink-dev\] Intent to Prototype: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg15214.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Media element pseudo-classes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Media element pseudo-classes Chromestatus Mon, 17 Nov 2025 01:58:48 -0800 Contact emails \[email&#160;protected\] Speci...
- [Re: \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16506.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes Chris Harrelson Mon, 11 May 2026 12:52:19 -0700 LGTM1 On Mon, May 11, 2026 at 12:3...
- [\[blink-dev\] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16505.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes Philip Jägenstedt Mon, 11 May 2026 12:37:02 -0700 Please also consider this a PSA for the ...
- [\[blink-dev\] Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16504.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Media element pseudo-classes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Media element pseudo-classes Chromestatus Mon, 11 May 2026 12:34:09 -0700 Contact emails \[email&#160;protected\] Specification h...
- [Re: \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16508.html) *(mail-archive.com)*
  > Still, I&#x27;ll put it behind a separate flag and enable is in the same CL that flips the flag for media element pseudos. On Mon, May 11, 2026 at 9:34 PM Chromestatus &lt;\[email protected\]&gt; wrote: \*Contact emails\* \[email protected\] \*Specification...
- [Style Video and Audio Players with Pure CSS: Media Pseudo-Classes in Chrome 152 \| Trade Assistance LLC](https://trade-assistance.com/blog/css-media-pseudo-classes-style-video-players-chrome-152) *(trade-assistance.com · 2026-08-05T00:00:00)*
  > &lt;strong&gt;Chrome 152 — in beta as of July 30, 2026&lt;/strong&gt; — closes that gap. It ships seven CSS pseudo-classes that match &lt;audio&gt; and &lt;video&gt; elements based on their current playback state, so the browser keeps your styles in sync with th...
- [Intent to Implement and Ship: Implement :playing, :paused pseudo-classes](https://groups.google.com/a/chromium.org/g/blink-dev/c/kz3w-yOMDks/m/Ue71o4xYAAAJ) *(groups.google.com)*
  > Interoperability and Compatibility Risks Compatibility: For the &lt;audio&gt; element Chrome already exposes this state internally by means of a class .state-playing / .state-paused on the ::-webkit-media-controls pseudo element. Interoperability: Fi...
- [Styling video Elements by State with \`:playing\` and \`:muted\`](https://azukiazusa.dev/en/blog/style-video-with-media-state-pseudo-classes) *(azukiazusa.dev)*
  > Media state pseudo-classes let CSS select the state of &lt;video&gt; and &lt;audio&gt; directly · Seven of them are defined: :playing, :paused, :seeking, :buffering, :stalled, :muted, and :volume-locked
- [@schalkneethling/css-media-pseudo-polyfill - npm](https://www.npmjs.com/package/@schalkneethling/css-media-pseudo-polyfill?activeTab=versions) *(npmjs.com)*
  > A CSS polyfill for the media pseudo-classes: &lt;strong&gt;:playing, :paused, :seeking, :buffering, :stalled, and :muted&lt;/strong&gt;. These pseudo-classes allow styling based on the playback, loading, and sound state of &lt;audio&gt; and &lt;video&gt; element...
- [Chrome 158 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > The :playing, :paused, :seeking, :buffering, :stalled, :muted, and :volume-locked CSS pseudo-classes &lt;strong&gt;match &lt;audio&gt; and &lt;video&gt; elements based on their state&lt;/strong&gt;. This is one of the focus areas in https://wpt.fyi/interop-2026.
- [Re: \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16528.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; On Mon, May 11, 2026 at 9:34 ... :seeking, :buffering, :stalled, :muted, and &gt;&gt;&gt; :volume-locked CSS pseudo-classes &lt;strong&gt;match &lt;audio&gt; and &lt;video&gt; elements based &gt;&gt;&gt; on their state&lt;/strong&gt;....
- [":buffering"](https://captainbrosset.github.io/webdocs/features/css.selectors.buffering.html) *(captainbrosset.github.io)*
  > The :buffering CSS pseudo-class selector &lt;strong&gt;represents an element that is playable, such as &lt;audio&gt; or &lt;video&gt;, when the playable element is buffering a media resource&lt;/strong&gt;.
- [Announcing Interop 2026 \| WebKit](https://webkit.org/blog/17818/announcing-interop-2026) *(webkit.org)*
  > Announcing Interop 2026 \| WebKit WebKit Announcing Interop 2026 Feb 12, 2026 by Yulun Wu and Jen Simmons Contents Anchor positioning Advanced attr() Container style queries contrast-color() Custom Highlights Dialog and popover additions Fetch uploads...
- [BaseWatch — Track CSS & Browser Feature Support, Get Baseline Alerts](https://basewatch.dev/feature/wf-media-pseudos) *(basewatch.dev)*
  > BaseWatch — Track CSS & Browser Feature Support, Get Baseline Alerts Edit with

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [css.selectors.playing (and 6 siblings) - Chrome 152 is incorrect, media element pseudo-classes have not shipped in Chrome · Issue #30523 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/issues/30523) *(github.com · 2026-09-14T23:44:14)* *(Cites: `https://chromestatus.com/feature/5068277495758848`)*
  > css.selectors.playing (and 6 siblings) - Chrome 152 is incorrect, media element pseudo-classes have not shipped in Chrome · Issue #30523 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search /...
- [media-pseudos · Issue #1307 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1307) *(github.com · 2026-08-14T17:30:45)* *(Cites: `https://chromestatus.com/feature/5068277495758848`)*
  > media-pseudos · Issue #1307 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh...
- [\[blink-dev\] Intent to Prototype: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg15214.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5068277495758848`)*
  > \[blink-dev\] Intent to Prototype: Media element pseudo-classes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Media element pseudo-classes Chromestatus Mon, 17 Nov 2025 01:58:48 -0800 Contact emails \[email&#160;protec...
- [Re: \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16506.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5068277495758848`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes Chris Harrelson Mon, 11 May 2026 12:52:19 -0700 LGTM1 On Mon, May 11, 20...
- [\[blink-dev\] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16505.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5068277495758848`)*
  > \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes Philip Jägenstedt Mon, 11 May 2026 12:37:02 -0700 Please also consider this a PS...
- [\[blink-dev\] Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16504.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5068277495758848`)*
  > \[blink-dev\] Intent to Ship: Media element pseudo-classes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Media element pseudo-classes Chromestatus Mon, 11 May 2026 12:34:09 -0700 Contact emails \[email&#160;protected\] Speci...

## 📚 Platform Documentation & Specifications

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:muted) *(developer.mozilla.org)*
- [:stalled CSS pseudo-class - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:stalled) *(developer.mozilla.org)*
- [playing CSS pseudo-class - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:playing) *(developer.mozilla.org)*
- [:buffering CSS pseudo-class - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:buffering) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:volume-locked) *(developer.mozilla.org)*
- [css.selectors.playing (and 6 siblings) - Chrome 152 is incorrect, media element pseudo-classes have not shipped in Chrome · Issue #30523 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/issues/30523) *(github.com)*
- [media-pseudos · Issue #1307 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1307) *(github.com)*
- [Media element pseudo-classes · Issue #1003 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1003) *(github.com)*
- [Media element pseudo-classes · Issue #166 · web-platform-dx/developer-signals](https://github.com/web-platform-dx/developer-signals/issues/166) *(github.com)*
- [Media element pseudo-classes · Issue #927 · web-platform-dx/developer-signals](https://github.com/web-platform-dx/developer-signals/issues/927) *(github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/150.md at main · MicrosoftDocs/edge-developer](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/150.md) *(github.com)*
- [:playing CSS pseudo-class - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:playing) *(developer.mozilla.org)*
- [Media pseudo classes: \`:paused\`/\`:playing\`/\`:seeking\`/\`:buffering\`/\`:stalled\`/\`:muted\`/\`:volume-locked\` · Issue #510 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/510) *(github.com)*
- [feat(html): :playing and :paused follow a media element's paused by sidorares · Pull Request #891 · sidorares/react-x11-components](https://github.com/sidorares/react-x11-components/pull/891) *(github.com)*
- [paused CSS pseudo-class - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:paused) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 57 result(s) found across 11 planned queries — **25 verified relevant**
  - `"chromestatus.com/feature/5068277495758848" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (6 returned)
  - `"html.spec.whatwg.org/multipage/semantics-other.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"Media element pseudo-classes" API` — *Core feature API query* (8 returned)
  - `"Media element pseudo-classes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"wpt.fyi" OR "pseudo-classes" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Media element pseudo-classes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Media element pseudo-classes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `css (":playing" OR ":paused") video custom controls styling tutorial` — *Finds developer guides and tutorials illustrating how to style video and audio playback states using media pseudo-classes.* (8 returned)
  - `":playing" ":buffering" ":stalled" (video OR audio) css pseudo-class example` — *Discovers code snippets, syntax demonstrations, and practical CSS rules using media element pseudo-classes.* (8 returned)
  - `"media element pseudo-classes" OR (":playing" ":paused" css) "Interop 2026"` — *Tracks platform roadmap, browser implementation status, and Interop 2026 inclusion announcements.* (8 returned)
  - `css (":playing" OR ":paused" OR ":buffering") pseudo-class (site:news.ycombinator.com OR site:reddit.com OR "intent to ship")` — *Gathers developer community feedback, discussions, and browser vendor intent threads regarding state-based media pseudo-classes.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 3 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 2 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 4 result(s) found — **2 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "media-pseudos", shared with 0 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "media-pseudos": Chrome 0% passing (stable)*
- **Sources cited by the AI synthesis:** 8 result(s) found — **5 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 2 engineer comment(s) read
- **Web Page Excerpts Ingested:** 13 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5068277495758848)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5068277495758848)
- [Specification](https://html.spec.whatwg.org/multipage/semantics-other.html#pseudo-classes)
- [Chromium Tracking Bug](https://crbug.com/40246121)
