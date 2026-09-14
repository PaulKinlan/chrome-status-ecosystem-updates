# No Auto-Rewind for AnimationTrigger Play Methods

> **Report Week:** 2026-W38 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

AnimationTrigger Play Methods will not auto-rewind, i.e. will not restart a finished animation.  "play", "play-forwards" and "play-backwards" are values that, when specified in the association between an AnimationTrigger and an Animation, instructs the trigger to play the animation. This Chromestatus feature covers a specific aspect of the behavior of these keywords: when the relevant animation has already run to completion and these actions (play, play-forwards, play-backwards) are invoked, they will not cause the animation to restart, i.e. the animation will not "auto-rewind."

### Motivation

"play-forwards" and "play-backwards" cause an animation to play with positive and negative playback rate respectively.
They are intended to support use cases where authors want "opposite" events on a page to be accompanied by similarly opposite visual effects. For example, an author might want to associate pointerdown and pointerup with swelling and shrinking respectively. In the event of multiple pointerdown events being observed before a pointerup, the more common scenario is that the first pointerdown triggers the swelling animation and subsequent pointerdowns do nothing until the next pointerup, which itself triggers the reversed (shrinking) animation.

This is achieved by specifying that these keywords do not "auto-rewind", i.e. they do not restart a finished animation.

For consistency, this auto-rewind behavior applies to all the play* keywords.

## Ecosystem Status

- **Momentum:** Emerging (10 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** No Auto-Rewind for AnimationTrigger Play Methods is currently Enabled by default in Chrome 151. Verified ecosystem momentum is Emerging with Chromium-Led standards alignment and neutral developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Web-Facing Change PSA: No Auto-Rewind for AnimationTrigger Play Methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16761.html) *(mail-archive.com)*
  > [blink-dev] Web-Facing Change PSA: No Auto-Rewind for AnimationTrigger Play Methods Skip to site navigation (Press enter) [blink-dev] Web-Facing Change PSA: No Auto-Rewind for AnimationTrigger Play Methods David A Mon, 15 Jun 2026 08:52:32 -0700 *Con...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 31 result(s) found across 7 planned queries — **1 verified relevant**
  - `"chromestatus.com/feature/5071640598806528" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"drafts.csswg.org/animation-triggers-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"No Auto-Rewind for AnimationTrigger Play Methods" API` — *Core feature API query* (1 returned)
  - `"No Auto-Rewind for AnimationTrigger Play Methods" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"auto-rewind" OR "play-forwards" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"No Auto-Rewind for AnimationTrigger Play Methods" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"No Auto-Rewind for AnimationTrigger Play Methods" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 1236 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5071640598806528)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5071640598806528)
- [Specification](https://drafts.csswg.org/animation-triggers-1/#valdef-animation-action-play)
- [Chromium Tracking Bug](https://crbug.com/519573765)
