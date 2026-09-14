# Media element pseudo-classes

> **Report Week:** 2026-W38 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

The :playing, :paused, :seeking, :buffering, :stalled, :muted, and :volume-locked CSS pseudo-classes match &lt;audio&gt; and &lt;video&gt; elements based on their state.  This is one of the focus areas in https://wpt.fyi/interop-2026.

### Motivation

Allows styling of media elements or custom media controls based on the state of the media element. For example, a large play button overlaying a video could be hidden while playing.

There is no expectation that custom media controls can be implemented entirely with CSS, as there is still a lot of state not exposed to CSS.

## Ecosystem Status

- **Momentum:** High (119 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Media element pseudo-classes is currently Enabled by default in Chrome 155. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @alastor0325: "This looks good to us, and \[this\](https://bugzilla.mozilla.org/show\_bug.cgi?id=1707584) is our implementation bug. We also filed a separate \[issue\](ht..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Media element pseudo-classes are baseline now :playing :paused :seeking :buffering :stalled :muted :volume-locked 🔥" (8 points, 0 comments).

## Standards Positions

- **Mozilla:** [Media element pseudo-classes](https://github.com/mozilla/standards-positions/issues/1319) [open]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Media element pseudo-classes are baseline now :playing :paused :seeking :buffering :stalled :muted :volume-locked 🔥](https://twitter.com/terkelg/status/2096966762386395151) — *by @terkelg, 8 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16528.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: Media element pseudo-classes Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Media element pseudo-classes Alex Russell Wed, 13 May 2026 08:18:18 -0700 LGTM3 On Monday, May 11, 2026 at 2:26...
- [\[blink-dev\] Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16504.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Media element pseudo-classes Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Media element pseudo-classes Chromestatus Mon, 11 May 2026 12:34:09 -0700 Contact emails [email&#160;protected] Specification h...
- [Re: \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16508.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: Media element pseudo-classes Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Media element pseudo-classes Mike Taylor Mon, 11 May 2026 14:26:42 -0700 LGTM2 On 5/11/26 3:51 p.m., Chris Harr...
- [\[blink-dev\] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16505.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: Media element pseudo-classes Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Media element pseudo-classes Philip Jägenstedt Mon, 11 May 2026 12:37:02 -0700 Please also consider this a PSA for the ...
- [\[blink-dev\] Intent to Prototype: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg15214.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Media element pseudo-classes Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Media element pseudo-classes Chromestatus Mon, 17 Nov 2025 01:58:48 -0800 Contact emails [email&#160;protected] Speci...
- [Intent to Implement and Ship: Implement :playing, :paused pseudo-classes](https://groups.google.com/a/chromium.org/g/blink-dev/c/kz3w-yOMDks/m/Ue71o4xYAAAJ) *(groups.google.com)*
  > Interoperability and Compatibility Risks Compatibility: For the &lt;audio&gt; element Chrome already exposes this state internally by means of a class .state-playing / .state-paused on the ::-webkit-media-controls pseudo element. Interoperability: Fi...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16528.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5068277495758848`)*
  > Re: [blink-dev] Re: Intent to Ship: Media element pseudo-classes Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Media element pseudo-classes Alex Russell Wed, 13 May 2026 08:18:18 -0700 LGTM3 On Monday, May 11, 20...

## 📚 Platform Documentation & Specifications

- [Media element pseudo-classes · Issue #1003 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1003) *(github.com)*
- [Media element pseudo-classes · Issue #166 · web-platform-dx/developer-signals](https://github.com/web-platform-dx/developer-signals/issues/166) *(github.com)*
- [Media pseudo classes: \`:paused\`/\`:playing\`/\`:seeking\`/\`:buffering\`/\`:stalled\`/\`:muted\`/\`:volume-locked\` · Issue #510 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/510) *(github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/150.md at main · MicrosoftDocs/edge-developer](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/150.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 36 result(s) found across 7 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5068277495758848" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"html.spec.whatwg.org/multipage/semantics-other.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"Media element pseudo-classes" API` — *Core feature API query* (7 returned)
  - `"Media element pseudo-classes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"wpt.fyi" OR "pseudo-classes" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Media element pseudo-classes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Media element pseudo-classes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 1 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 4 result(s) found — **2 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 113846 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 2 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5068277495758848)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5068277495758848)
- [Specification](https://html.spec.whatwg.org/multipage/semantics-other.html#pseudo-classes)
- [Chromium Tracking Bug](https://crbug.com/40246121)
