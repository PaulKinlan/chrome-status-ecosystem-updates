# Media element pseudo-classes

> **Report Week:** 2026-W41 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

The :playing, :paused, :seeking, :buffering, :stalled, :muted, and :volume-locked CSS pseudo-classes match &lt;audio&gt; and &lt;video&gt; elements based on their state.  This is one of the focus areas in https://wpt.fyi/interop-2026.

### Motivation

Allows styling of media elements or custom media controls based on the state of the media element. For example, a large play button overlaying a video could be hidden while playing.

There is no expectation that custom media controls can be implemented entirely with CSS, as there is still a lot of state not exposed to CSS.

## Ecosystem Status

- **Momentum:** High (255 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Media element pseudo-classes (:playing, :paused, :seeking, :buffering, :stalled, :muted, and :volume-locked) bring native playback, audio, and network states directly into CSS. Long supported in Safari and recently delivered in Firefox, Chrome's default enablement in milestone 156 fulfills a major Interop 2026 milestone. The feature enjoys universal vendor consensus and marks the transition of declarative media styling into Baseline.

### Recommendations
- Actionable Advice: Teams building custom video/audio players should start adopting these selectors via progressive enhancement using \`@supports selector(:playing)\` or fallback classes. Maintain minimal JavaScript state classes on parent wrappers until Chromium-based mobile browsers reach broad update saturation.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @alastor0325: "This looks good to us, and \[this\](https://bugzilla.mozilla.org/show\_bug.cgi?id=1707584) is our implementation bug. We also filed a separate \[issue\](ht..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **Mozilla:** [Media element pseudo-classes](https://github.com/mozilla/standards-positions/issues/1319) [open]

## 📰 Ecosystem Blogs & Articles

- [mintec.co](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGwJ9FXFK1ZJXf_v0VOPKlIQ8rAR2DFCAItQi4PxaDBIyJvYSASwoQDxsw42TVQ0elnpZ5ZjZcqMogTOJsZ0ni2CUKk-GYxz9FeKcnDQwunZFmQxdTyAvrGmKfnGV7mvUR3Riiacdfhpw1vm5CLKv1Vf_0=) *(vertexaisearch.cloud.google.com)*
  > ### Overview  **Media element pseudo-classes**—comprising `:playing`, `:paused`, `:seeking`, `:buffering`, `:stalled`, `:muted`, and `:volume-locked`—allow CSS to directly inspect and reflect the playback, network, and audio states of `<video>` and `
- [modern-css.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH0YhBktZfXeYXXjPQEJSUVWdX9TomWqDRwXXX5NwfB7asaNtSGFyijbm8lr9K5BGvsV_G7EsKSPj-_m4V_R5eLzp4hsLhZ5DeJ4Br6BCe1ctPsWDfe-cUXjXqxJ429zjrmcgsPL7HYpykbh03G91zEUgHx7E__bP6ayGc=) *(vertexaisearch.cloud.google.com)*
  > CSS :playing, :paused, :muted Pseudo-Classes for Media Explore All snippets CSS snippets HTML snippets CSS Tools CSS Blocks Articles Cheatsheet Resources AI Tools UI Terms CSS Reference Overview Properties Selectors At-rules Functions Units Interop 2...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFxVIAzk2LWzB_EmUmO2Gz9heCq1dtlbnH6R6KJ1uYl7jLtS64_5Fw9sihaZQ-IogX22ysOVBQH_v-7A_UEPwpsYvKf3X9PTRBjaaY74WlygV6uMiqasghwq6549_lxklqf_FU0aPoBZTAP8rEqDBuNf1JAOlHTmmfbqZjXMyiyMb_Gooi9) *(vertexaisearch.cloud.google.com)*
  > :buffering CSS pseudo-class - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Selectors :buffering Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 :buffering CSS p...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHf2KVpgqc9SD-1ZwLt-TpxRhcRcOB9gmvPSuSJ9MAiKdLZDHdocSqBFIdpWuIO8WwoBSRMMeJCIKIA2SRt1mvKYICejFRUpHtthvlnUajhTuMRjglwJ1H30AGllGtwgH3TtjYfeOjH1LPWcjR1XutG-ba1YCk=) *(vertexaisearch.cloud.google.com)*
  > Media element pseudo-classes · Issue #166 · web-platform-dx/developer-signals · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refres...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGiySzmacKKqd36DlLeEJ_nOEURZWgDUqEQ7pAY23nHc-QKcYcZfrDfcyeIM_j2wqiWvqytqGqd50E7rf_4WeBl7OsT9E6hpX7dTSvh5CUcWaoAQ1Gvnv7_tZa2qdnLnPxcKpr1x4R8v6Abd40x9iMQxMbyuukyIMgpDbvcqDBgvtzXznkyXAsW4w==) *(vertexaisearch.cloud.google.com)*
  > ### Overview  **Media element pseudo-classes**—comprising `:playing`, `:paused`, `:seeking`, `:buffering`, `:stalled`, `:muted`, and `:volume-locked`—allow CSS to directly inspect and reflect the playback, network, and audio states of `<video>` and `
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHh9AlkuPWdEuVPQMRg_4O33H4-uLm0laRkiSMEsmrnhtkpoFBb-rT_qb_gK1ZossydzSj0_I4NsLjaoNtZtngz3Q_SZtcGzkQSM-Nz77qg0O9vfA_Ss7xsAV4cjLc2kRvxbQ5WNI2Uj3hNabcwil4I70RxmAhbc0R1_9G8fIBBwvpk) *(vertexaisearch.cloud.google.com)*
  > ### Overview  **Media element pseudo-classes**—comprising `:playing`, `:paused`, `:seeking`, `:buffering`, `:stalled`, `:muted`, and `:volume-locked`—allow CSS to directly inspect and reflect the playback, network, and audio states of `<video>` and `
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGOkcqckertT9FIOVaCGj1bynQPjN_Ja32gzE0nZMaSoWbDpINQ_KyfO1LPLY5ujtZNtMNuNj1Y0hHQs5EbPyUxFwIZuursQ8ZoV-CprFt4MkINrQv1NPOLZu9FDUYPiAtk59b3bvGlIzGSWoZgeX9Lx0WkWJDPqhdDY2gu4ihkv5YMtA==) *(vertexaisearch.cloud.google.com)*
  > ### Overview  **Media element pseudo-classes**—comprising `:playing`, `:paused`, `:seeking`, `:buffering`, `:stalled`, `:muted`, and `:volume-locked`—allow CSS to directly inspect and reflect the playback, network, and audio states of `<video>` and `
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEDPdDxts9fmJbP6CCy3ZZ443fr0XKhO01dCdGgemMHVvQ5Odx5C1yLaYFP3rCv7QB_pOQmh9DZGFGgpJaKAfoI6MxaU-HAu09S6rQ0fHlFX5x9rZe5qeTrBMw=) *(vertexaisearch.cloud.google.com)*
  > ### Overview  **Media element pseudo-classes**—comprising `:playing`, `:paused`, `:seeking`, `:buffering`, `:stalled`, `:muted`, and `:volume-locked`—allow CSS to directly inspect and reflect the playback, network, and audio states of `<video>` and `
- [reddit.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEGHtwN9jBORlKfJhe_cQcLy95zpeEh4J9OupVGH2K7FmuGuIYgV76MgCR6yjDBoVelc_RL_3zDrnPiDcu1IqgQbq-i3yLZ9KtvxQBhSEAU6ByCcu6NbiiH6A-e1GyKYnjFTLHo8jD3vBisVwL_4qI1uA6-qlhd4SNFM4FrEwNrWmHuKiLWwohln3W6zSMgf4PLdS4=) *(vertexaisearch.cloud.google.com)*
  > ### Overview  **Media element pseudo-classes**—comprising `:playing`, `:paused`, `:seeking`, `:buffering`, `:stalled`, `:muted`, and `:volume-locked`—allow CSS to directly inspect and reflect the playback, network, and audio states of `<video>` and `
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFncn0VMM7eKXE4BodnHEJsBcskrMULCJhkgF9ufzL0UeG43UhF89q2rm7bQKqjrQ-oUXVOOVhYckczubSk8qbxmZAhLTo8jfBF1o5zYq4ifcP7GEngUxLn6YTvHJ78JM_uRvew2L5MW2Wq) *(vertexaisearch.cloud.google.com)*
  > ### Overview  **Media element pseudo-classes**—comprising `:playing`, `:paused`, `:seeking`, `:buffering`, `:stalled`, `:muted`, and `:volume-locked`—allow CSS to directly inspect and reflect the playback, network, and audio states of `<video>` and `
- [\[blink-dev\] Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16504.html) *(mail-archive.com)*
  > Specification https://html.spe... Blink component Blink&gt;Media Web Feature ID media-pseudos Motivation <strong>Allows styling of media elements or custom media controls based on the state of the media element</strong>....
- [Re: \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16508.html) *(mail-archive.com)*
  > *Blink component* Blink&gt;Media ...res/media-pseudos&gt; *Motivation* <strong>Allows styling of media elements or custom media controls based on the state of the media element</strong>. For example, a large play button overlaying a video could be hi...
- [\[blink-dev\] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16505.html) *(mail-archive.com)*
  > &gt; &gt; *Blink component* &gt; Blink&gt;Media ...res/media-pseudos&gt; &gt; &gt; *Motivation* &gt; <strong>Allows styling of media elements or custom media controls based on the &gt; state of the media element</strong>. For example, a large play bu...
- [\[blink-dev\] Intent to Prototype: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg15214.html) *(mail-archive.com)*
  > There is already an implemention of :playing and :paused behind the CSSPseudoPlayingPaused runtime-enabled feature. Blink component Blink&gt;Media Web Feature ID media-pseudos Motivation <strong>Allows styling of media elements or custom media contro...
- [Style Video and Audio Players with Pure CSS: Media Pseudo-Classes in Chrome 152 \| Trade Assistance LLC](https://trade-assistance.com/blog/css-media-pseudo-classes-style-video-players-chrome-152) *(trade-assistance.com · 2026-08-05T00:00:00)*
  > They are one of the Interop 2026 ... on board before Chrome landed its implementation. <strong>Each pseudo-class matches a media element whenever it is in the corresponding state</strong>:...
- [Re: \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16506.html) *(mail-archive.com)*
  > &gt;&gt; *No information provided* &gt;&gt; &gt;&gt; &gt;&gt; *Debuggability* &gt;&gt; *No information provided* &gt;&gt; &gt;&gt; *Will this feature be supported on all six Blink platforms (Windows, Mac, &gt;&gt; Linux, ChromeOS, Android, and Androi...
- [Intent to Implement and Ship: Implement :playing, :paused pseudo-classes](https://groups.google.com/a/chromium.org/g/blink-dev/c/kz3w-yOMDks/m/Ue71o4xYAAAJ) *(groups.google.com)*
  > Interoperability and Compatibility Risks Compatibility: For the &lt;audio&gt; element Chrome already exposes this state internally by means of a class .state-playing / .state-paused on the ::-webkit-media-controls pseudo element. Interoperability: Fi...

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
- [UI pseudo-classes](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 35 result(s) found across 7 planned queries — **13 verified relevant**
  - `"chromestatus.com/feature/5068277495758848" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"html.spec.whatwg.org/multipage/semantics-other.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"Media element pseudo-classes" API` — *Core feature API query* (8 returned)
  - `"Media element pseudo-classes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"wpt.fyi" OR "pseudo-classes" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Media element pseudo-classes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Media element pseudo-classes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 2 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 4 result(s) found — **2 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 114452 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 2 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5068277495758848)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5068277495758848)
- [Specification](https://html.spec.whatwg.org/multipage/semantics-other.html#pseudo-classes)
- [Chromium Tracking Bug](https://crbug.com/40246121)
