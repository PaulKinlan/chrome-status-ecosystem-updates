# Media element pseudo-classes

> **Report Week:** 2026-W45 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

The :playing, :paused, :seeking, :buffering, :stalled, :muted, and :volume-locked CSS pseudo-classes match &lt;audio&gt; and &lt;video&gt; elements based on their state.  This is one of the focus areas in https://wpt.fyi/interop-2026.

### Motivation

Allows styling of media elements or custom media controls based on the state of the media element. For example, a large play button overlaying a video could be hidden while playing.  There is no expectation that custom media controls can be implemented entirely with CSS, as there is still a lot of state not exposed to CSS.

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 385 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** Media element pseudo-classes (\`:playing\`, \`:paused\`, \`:seeking\`, \`:buffering\`, \`:stalled\`, \`:muted\`, and \`:volume-locked\`) bring declarative media state styling natively into CSS. Following early implementation in Safari and recent stabilization in Firefox, universal cross-engine interoperability is finalized with Chromium shipping default support in Chrome 158 under Interop 2026. This resolves a long-standing platform gap, establishing complete multi-vendor consensus across WebKit, Gecko, and Blink.

### Recommendations
- Actionable Advice: Developers should begin adopting media pseudo-classes to simplify custom audio and video players, wrapping rule blocks in \`@supports selector(:playing)\` if legacy browser support is required. For progressive enhancement, retain core JavaScript transport bindings while migrating loading spinners (\`:buffering\`) and play button toggles (\`:playing\`, \`:paused\`) to pure CSS.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @alastor0325: "This looks good to us, and \[this\](https://bugzilla.mozilla.org/show\_bug.cgi?id=1707584) is our implementation bug. We also filed a separate \[issue\](ht..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **Mozilla:** [Media element pseudo-classes](https://github.com/mozilla/standards-positions/issues/1319) [open]

## Web-features Group

*group-level data: web-features [`media-pseudos`](https://webstatus.dev/features/media-pseudos)*

- Share of tests passing in the web-features group `media-pseudos` on [wpt.fyi](https://wpt.fyi/results?q=feature:media-pseudos) (via webstatus.dev) — stable: Chrome 0% · Edge 0% · Firefox 87.5% · Safari 100%; experimental: Chrome 100% · Edge 100% · Firefox 100% · Safari 100%
- **Chrome usage:** 0.00019% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/436))

## 📰 Ecosystem Blogs & Articles

- [CSS :playing, :paused, :muted Pseudo-Classes for Media](https://modern-css.com/video-player-states-without-javascript-events) *(modern-css.com)*
  > CSS :playing, :paused, :muted Pseudo-Classes for Media Log everything you read and watch Books, films, games and more on one page. Start your log &rarr; Log everything you read and watch Books, films, games and more on one page. Start your log &rarr;...
- [css-tricks.com](https://css-tricks.com/css-states-and-javascript-events) *(css-tricks.com)*
  > Traditionally, updating the UI of custom media controls or interactive video components required binding JavaScript listeners (\`play\`, \`pause\`, \`waiting\`, \`seeking\`, \`volumechange\`) to toggle CSS classes manually These pseudo-classes move media state...
- [khriztianmoreno.dev](https://www.khriztianmoreno.dev/blog/interop-2026-from-%22hack%22-to-standard) *(khriztianmoreno.dev)*
  > Traditionally, updating the UI of custom media controls or interactive video components required binding JavaScript listeners (\`play\`, \`pause\`, \`waiting\`, \`seeking\`, \`volumechange\`) to toggle CSS classes manually These pseudo-classes move media state...
- [Announcing Interop 2026 \| WebKit](https://webkit.org/blog/17818/announcing-interop-2026) *(webkit.org)*
  > Safari and Firefox led early implementation, with Chromium landing support across 2026 releases In the \*\*WebKit Interop 2026 announcement\*\*, Apple noted WebKit’s early implementation of media pseudo-classes, emphasizing the multi-vendor goal of elimi...
- [appspot.com](https://cr-status.appspot.com/feature/5068277495758848?gate=4768460324339712) *(cr-status.appspot.com)*
  > Safari and Firefox led early implementation, with Chromium landing support across 2026 releases Chrome platform status and release logs announced the shipping of the full set of media pseudo-classes under the \`media-pseudos\` feature flag to meet Inte...
- [mintec.co](https://mintec.co/blog/css-media-pseudo-classes-player-2026) *(mintec.co)*
  > Safari and Firefox led early implementation, with Chromium landing support across 2026 releases Tutorials and developer blogs have focused heavily on combining media pseudo-classes with the parent selector \`:has()\`
- [web.dev](https://web.dev/blog/baseline-digest-aug-2026) *(web.dev)*
  > In contrast, \`:paused\` matches when playback was stopped intentionally by the user or when the media has loaded but hasn't started dev highlighted \`:paused\` and related selectors entering the Baseline ecosystem, noting that declarative pseudo-classes...
- [Interop 2026 Reference \| modern.css](https://modern-css.com/reference/interop-2026) *(modern-css.com)*
  > \*\*Audio states\*\*: \`:muted\` and \`:volume-locked\` reflect the mute toggle or OS-level restrictions preventing volume adjustment
- [wpt.fyi](https://wpt.fyi/interop-2026?feature=interop-2026-shape) *(wpt.fyi)*
  > \*\*Mozilla Hacks\*\* and the \*\*WPT Interop Dashboard\*\* tracked tests ensuring uniform timing of when states like \`:buffering\` or \`:stalled\` trigger across WebKit, Gecko, and Blink
- [css-tricks.com](https://css-tricks.com/interop-2026) *(css-tricks.com)*
  > Articles highlighted that while full custom media player controls still need JavaScript for user-initiated actions (like custom scrubbers or volume sliders), managing \*\*visual states\*\*—such as toggling big play button overlays or showing loading spin...
- [Re: \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16508.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes Mike Taylor Mon, 11 May 2026 14:26:42 -0700 LGTM2 On 5/11/26 3:51 p.m., Chris Harr...
- [\[blink-dev\] Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16504.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Media element pseudo-classes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Media element pseudo-classes Chromestatus Mon, 11 May 2026 12:34:09 -0700 Contact emails \[email&#160;protected\] Specification h...
- [\[blink-dev\] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16505.html) *(mail-archive.com)*
  > Still, I&#x27;ll put it behind a separate flag and enable is in the same CL that flips the flag for media element pseudos. On Mon, May 11, 2026 at 9:34 PM Chromestatus &lt; \[email protected\]&gt; wrote: &gt; \*Contact emails\* &gt; \[email protected\] &gt...
- [\[blink-dev\] Intent to Prototype: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg15214.html) *(mail-archive.com)*
  > There is already an implemention of :playing and :paused behind the CSSPseudoPlayingPaused runtime-enabled feature. Blink component Blink&gt;Media Web Feature ID media-pseudos Motivation &lt;strong&gt;Allows styling of media elements or custom media contro...
- [Style Video and Audio Players with Pure CSS: Media Pseudo-Classes in Chrome 152 \| Trade Assistance LLC](https://trade-assistance.com/blog/css-media-pseudo-classes-style-video-players-chrome-152) *(trade-assistance.com · 2026-08-05T00:00:00)*
  > &lt;strong&gt;Chrome 152 — in beta as of July 30, 2026&lt;/strong&gt; — closes that gap. It ships seven CSS pseudo-classes that match &lt;audio&gt; and &lt;video&gt; elements based on their current playback state, so the browser keeps your styles in sync with th...
- [New in Edge for developers – Create better components and make your site agent-ready - Microsoft Edge Blog](https://blogs.windows.com/msedgedev/2026/09/21/new-in-edge-for-developers-create-better-components-and-make-your-site-agent-ready) *(blogs.windows.com · 2026-09-22T08:58:27)*
  > Media pseudo-classes &lt;strong&gt;allow you to style media elements, such as &lt;video&gt; and &lt;audio&gt;, based on their playback state, by using the new :playing, :paused, :buffering, :muted, and :stalled pseudo-classes&lt;/strong&gt;.
- [Styling video Elements by State with \`:playing\` and \`:muted\`](https://azukiazusa.dev/en/blog/style-video-with-media-state-pseudo-classes) *(azukiazusa.dev)*
  > Media state pseudo-classes let CSS select the state of &lt;video&gt; and &lt;audio&gt; directly · Seven of them are defined: :playing, :paused, :seeking, :buffering, :stalled, :muted, and :volume-locked
- [Interop 2026: Advancing Cross-Browser Consistency with New Focus Areas - Fp.putty P](https://fp.putty-p.it.com/a/8352.html) *(fp.putty-p.it.com)*
  > New pseudo-classes like &lt;strong&gt;:playing and :paused for media elements&lt;/strong&gt;, giving developers precise control over media playback styling.
- [Re: \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16528.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; On Mon, May 11, 2026 at 9:34 PM Chromestatus &lt; &gt;&gt; \[email protected\]&gt; wrote: &gt;&gt; &gt;&gt;&gt; \*Contact emails\* &gt;&gt;&gt; \[email protected\] &gt;&gt;&gt; &gt;&gt;&gt; \*Specification\* &gt;&gt;&gt; &gt;&gt;&gt; https:...
- [Chrome Platform Status](https://img968-dot-cr-status.appspot.com/feature/5068277495758848?gate=5472147766116352) *(img968-dot-cr-status.appspot.com)*
  > Chrome Platform Status

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [media-pseudos · Issue #1307 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1307) *(github.com · 2026-08-14T17:30:45)* *(Cites: `https://chromestatus.com/feature/5068277495758848`)*
  > media-pseudos · Issue #1307 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You s...
- [css.selectors.playing (and 6 siblings) - Chrome 152 is incorrect, media element pseudo-classes have not shipped in Chrome · Issue #30523 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/issues/30523) *(github.com · 2026-09-14T23:44:14)* *(Cites: `https://chromestatus.com/feature/5068277495758848`)*
  > css.selectors.playing (and 6 siblings) - Chrome 152 is incorrect, media element pseudo-classes have not shipped in Chrome · Issue #30523 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up App...

## 📚 Platform Documentation & Specifications

- [Media element pseudo-classes · Issue #1003 · web-platform-tests/interop · GitHub](https://github.com/web-platform-tests/interop/issues/1003) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:buffering) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:paused) *(developer.mozilla.org)*
- [playing CSS pseudo-class - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:playing) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:seeking) *(developer.mozilla.org)*
- [mozilla.org](https://hacks.mozilla.org/2026/02/launching-interop-2026) *(hacks.mozilla.org)*
- [media-pseudos · Issue #1307 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1307) *(github.com)*
- [css.selectors.playing (and 6 siblings) - Chrome 152 is incorrect, media element pseudo-classes have not shipped in Chrome · Issue #30523 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/issues/30523) *(github.com)*
- [Media element pseudo-classes · Issue #927 · web-platform-dx/developer-signals · GitHub](https://github.com/web-platform-dx/developer-signals/issues/927) *(github.com)*
- [2013367 - \[meta\] Pseudo-classes for media element states](https://bugzilla.mozilla.org/show_bug.cgi?id=2013367) *(bugzilla.mozilla.org)*
- [Media element pseudo-classes · Issue #166 · web-platform-dx/developer-signals · GitHub](https://github.com/web-platform-dx/developer-signals/issues/166) *(github.com)*
- [:stalled CSS pseudo-class - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:stalled) *(developer.mozilla.org)*
- [:buffering CSS pseudo-class - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:buffering) *(developer.mozilla.org)*
- [Pseudo-classes - CSS - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) *(developer.mozilla.org)*
- [:paused CSS pseudo-class - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:paused) *(developer.mozilla.org)*
- [:seeking CSS pseudo-class - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:seeking) *(developer.mozilla.org)*
- [interop/2026/README.md at main · web-platform-tests/interop · GitHub](https://github.com/web-platform-tests/interop/blob/main/2026/README.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 66 result(s) found across 11 planned queries — **24 verified relevant**
  - `"chromestatus.com/feature/5068277495758848" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"html.spec.whatwg.org/multipage/semantics-other.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"Media element pseudo-classes" API` — *Core feature API query* (8 returned)
  - `"Media element pseudo-classes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"wpt.fyi" OR "pseudo-classes" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Media element pseudo-classes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Media element pseudo-classes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `css ":playing" OR ":paused" video audio tutorial guide` — *Find developer tutorials and practical guides demonstrating how to style media elements using state pseudo-classes like :playing and :paused.* (8 returned)
  - `":playing" ":paused" (":buffering" OR ":seeking" OR ":stalled") css example` — *Search for CSS code snippets and real-world syntax usage targeting the complete set of HTML media element pseudo-classes.* (8 returned)
  - `"media element pseudo-classes" OR ":playing" "Interop 2026" browser support` — *Track browser implementation roadmap, adoption status across engines, and Interop 2026 inclusion announcements.* (8 returned)
  - `site:reddit.com OR site:news.ycombinator.com css ":playing" ":paused" video controls` — *Gather developer community feedback, discussions, and critiques regarding styling custom video controls via CSS pseudo-classes.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 18 result(s) found — **16 verified relevant**
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
- **Sources cited by the AI synthesis:** 7 result(s) found — **7 verified relevant**

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
