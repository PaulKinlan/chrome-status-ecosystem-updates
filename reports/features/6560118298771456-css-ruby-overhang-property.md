# CSS ruby-overhang property

> **Report Week:** 2026-W37 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Support of new CSS property `ruby-overhang` is added.

The property accepts one of `auto`, `spaces` and `none` keywords to control overhang of ruby annotation text. Per CSSWG, none is aliased to spaces, allowing overhang only over whitespace and CJK punctuation. This prevents unnecessary layout gaps while preserving text readability.

### Motivation

A ruby annotation can sometimes obscure adjacent content when it overhangs. The ruby-overhang property gives authors a way to disable this behavior and prevent unwanted overlap. For example, in children's books or text books for low-vision readers, authors need to ensure none overhang to prevent any reading confusion.

## Ecosystem Status

- **Momentum:** Moderate (70 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** The `ruby-overhang` property is gaining strong momentum across modern layout engines, graduating to default availability in Chrome 151 following Safari's initial implementation in Safari 18.2. The CSSWG specification establishes `auto`, `spaces`, and `none` (aliased to `spaces`) to prevent ruby annotations from colliding with neighboring characters while controlling whitespace overlap. With Gecko actively tracking support, this property addresses long-standing typographic fidelity gaps in CJK digital publishing and educational reading tools.

### Recommendations
- Actionable Advice: Adopt `ruby-overhang` progressively today for East Asian typography workflows, especially in educational or e-book contexts where pronunciation clarity outweighs strict line rhythm. Because browsers gracefully ignore unsupported CSS properties without breaking the underlying `<ruby>` element, applying `ruby-overhang: none` or `ruby-overhang: spaces` is safe for immediate production use.
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @lochpedko-netizen: "Да уж да какой-то информации в этом аккаунте Я никогда шёл и решил что получается ты посижу ещё на улице..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS ruby-overhang: spaces](https://github.com/WebKit/standards-positions/issues/681) [open]
- **Mozilla:** [CSS ruby-overhang](https://github.com/mozilla/standards-positions/issues/1372) [open]

## 📰 Ecosystem Blogs & Articles

- [Re: [blink-dev] Intent to Ship: CSS ruby-overhang property](http://www.mail-archive.com/blink-dev@chromium.org/msg16101.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: CSS ruby-overhang property Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: CSS ruby-overhang property Alex Russell Mon, 16 Mar 2026 11:52:48 -0700 +Jeff for advice on TAG review/FYI. On Monday, Ma...
- [Re: [blink-dev] Intent to Ship: CSS ruby-overhang property](http://www.mail-archive.com/blink-dev@chromium.org/msg16673.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; *Can we request a signal?* &gt;&gt;&gt;&gt;&gt;&gt; I&#x27;ve found the opened issue in bugzilla &gt;&gt;&gt;&gt;&gt;&gt; https://bugzilla.mozilla.org/show_bug.cgi?id=1611410. I updated &gt;&gt;&gt;&g...
- [Re: [blink-dev] Intent to Ship: CSS ruby-overhang property](http://www.mail-archive.com/blink-dev@chromium.org/msg16637.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; Thank you &gt;&gt; Vlad &gt;&gt; &gt;&gt; On ... and designate `none` as &gt;&gt;&gt; its alias. This change <strong>allows ruby to overhang whitespace and CJK &gt;&gt;&gt; punctuation even when none is specified, preventing unneces...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: [blink-dev] Intent to Ship: CSS ruby-overhang property](http://www.mail-archive.com/blink-dev@chromium.org/msg16101.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6560118298771456`)*
  > Re: [blink-dev] Intent to Ship: CSS ruby-overhang property Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: CSS ruby-overhang property Alex Russell Mon, 16 Mar 2026 11:52:48 -0700 +Jeff for advice on TAG review/FYI. On ...

## 📚 Platform Documentation & Specifications

- [ruby-overhang CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/ruby-overhang) *(developer.mozilla.org)*
- [ruby-overhang - CSS - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/ruby-overhang) *(developer.mozilla.org)*
- [ruby-overhang · Issue #268 · web-platform-dx/developer-signals](https://github.com/web-platform-dx/developer-signals/issues/268) *(github.com)*
- [[css-ruby-1] ruby overhang control · Issue #4492 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4492) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 32 result(s) found across 6 planned queries — **7 verified relevant**
  - `"chromestatus.com/feature/6560118298771456" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"drafts.csswg.org/css-ruby" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (6 returned)
  - `"ruby-overhang" (css OR typography) ("furigana" OR "ruby text" OR "CJK")` — *Finds practical guides, typography articles, and explanations on using ruby-overhang with East Asian typography and ruby annotations.* (8 returned)
  - `"ruby-overhang:" ("auto" OR "none" OR "spaces") (codepen OR jsfiddle OR site:developer.mozilla.org)` — *Locates concrete CSS syntax examples, interactive demos, and MDN reference documentation.* (8 returned)
  - `"ruby-overhang" ("Intent to Ship" OR "Chrome" OR "Firefox" OR "WebKit" OR "Safari")` — *Surfaces browser engine release notes, platform status updates, and browser implementation announcements.* (4 returned)
  - `"ruby-overhang" ("csswg" OR "w3c/csswg-drafts" OR "github.com/w3c")` — *Retrieves W3C CSS Working Group discussions, issue trackers, and standards debates around ruby overhang behavior.* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 177 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 1 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6560118298771456)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6560118298771456)
- [Specification](https://drafts.csswg.org/css-ruby/#ruby-overhang)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/366873207)
