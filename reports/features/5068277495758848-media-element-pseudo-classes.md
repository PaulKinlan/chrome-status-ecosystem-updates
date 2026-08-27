# Media element pseudo-classes

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

The :playing, :paused, :seeking, :buffering, :stalled, :muted, and :volume-locked CSS pseudo-classes match <audio> and <video> elements based on their state.

This is one of the focus areas in https://wpt.fyi/interop-2026.

### Motivation

Allows styling of media elements or custom media controls based on the state of the media element. For example, a large play button overlaying a video could be hidden while playing.

There is no expectation that custom media controls can be implemented entirely with CSS, as there is still a lot of state not exposed to CSS.

## Ecosystem Status

- **Momentum:** High (190 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Media element pseudo-classes (:playing, :paused, :seeking, :buffering, :stalled, :muted, and :volume-locked) provide native CSS hooks to style <audio> and <video> elements according to their playback and buffering states. Pioneered by Safari (15.4) and adopted by Firefox (150), Chromium's rollout in Chrome 154 completes full multi-engine support as a prioritized focus area of Interop 2026. This transition removes the longstanding need for JavaScript event-listener choreography simply to reflect media states in CSS.

### Recommendations
- Actionable Advice: Teams can begin adopting media pseudo-classes for declarative media UI overlays and play/pause controls, pairing them with CSS :has() for container styling. If supporting legacy Chromium clients older than Chrome 154, maintain lightweight JS class-toggling as a progressive enhancement fallback.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @alastor0325: "This looks good to us, and [this](https://bugzilla.mozilla.org/show_bug.cgi?id=1707584) is our implementation bug. We also filed a separate [issue](ht..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **Mozilla:** [Media element pseudo-classes](https://github.com/mozilla/standards-positions/issues/1319) [open]

## 📰 Ecosystem Blogs & Articles

- [webkit.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHqs9CnTmrnC74A369i9lkxHiCvOdBERWhwozMFAbjMp2__y3f8MfaMSWXrZ9xTp83CESEo1OqOchkizMo0Y_Jjf-Sj9OC27U0QXVrmwbJ2OdCBuK6Ewv5rdi3hipI4VmyGS3oU1W_6LiQpECo=) *(vertexaisearch.cloud.google.com)*
  > Announcing Interop 2026 | WebKit WebKit Announcing Interop 2026 Feb 12, 2026 by Yulun Wu and Jen Simmons Contents Anchor positioning Advanced attr() Container style queries contrast-color() Custom Highlights Dialog and popover additions Fetch uploads...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFRmeqY5AzFnqE6lXDYgIwMRzY54b5mKTT9Q_2DMj-Fl6c-82_p6hYys_kI4PTbT_k08gOGsavkNyb5WW2108wcYuQDrWQn9Ha56qyUKx0qpnZS0C4UIXRGnD4m0_ocjKpmioe_xARfR85f2ap_N01HLxWmMXVv3E7I1YdYM9xttC2y9g==) *(vertexaisearch.cloud.google.com)*
  > :playing CSS pseudo-class - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Selectors :playing Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 中文 (简体) :playing CSS...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGEey5YgpDJ6UXBg8L6cYPVFr2o4TCBCSX3jSE90xo43TkPnWwjUw38Rxc5aTilq1HbG3l4uiO7qxORp1jEgRK7_lmmN5-KQKJIwG401452mz5KjRrYWjGilITgnir6hiTsdmN6VbnuZ3i6bOCSKGQ3h5hiq0la38B1rczf79vU6rhC) *(vertexaisearch.cloud.google.com)*
  > :paused CSS pseudo-class - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Selectors :paused Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 中文 (简体) :paused CSS ps...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF7-6Rl-R81rwuyejg3gYrQqpM5Sl3wipKZISID6BVaKk-rzDx_g58KaimW19Lr4Lw-eJgeapBsEPZFwCpBGg4Rkhd1tIvX53V1UVI8vp6d5xOBH160hnrnLXPEVfaGts2YXyafY_RFIpoAdgzk0xaPT18JTXCAgsOmcsQCHhGA_ItVK9WX) *(vertexaisearch.cloud.google.com)*
  > :buffering CSS pseudo-class - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Selectors :buffering Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 :buffering CSS p...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHLEHs7h5J35gZS4g-TQNGOng1OcfE7E49Zg1YUB0MDBHDUjV9a3ksW6wIhFfzPcQi_J3mK-JY6If-40Xz3KcKtSbWHvwVrQwwwAy_kLmRqCq-375bVeobj37wELWSpb3HwY3oE_ZOizdYdcl8qfjNyNtCTzrQOu7pKqddvzVQvn6Y4_A==) *(vertexaisearch.cloud.google.com)*
  > :stalled CSS pseudo-class - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Selectors :stalled Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français :stalled CSS pseudo-clas...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHPi7hCLZ0HgIbvh1mcfWDW_-P16_vQPZ2MSvm2Qnl3KwKP2B3LHU6XlDipeKVg6U2B6WC4vIb5gnHm-SxRZWGVlXw0VUq9Sl4_VNrwPw8FtMH_jTxmHGhcKoHkiHo9NKI56snHNw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Media element pseudo-classes** (defined in CSS Selectors Level 4) provide native CSS selectors reflecting the internal playback and configuration state of `<audio>` and `<video>` elements. The set comprises seven selecto
- [modern-css.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHXATe5KhqQ1a-7C1VHGPK6tcKSg73FyJX0W1IQBY-_xBDc3PvmD8ew2CqxJTUuZwCRMbYEhAPDTLPYo4VocblZ_m3m-pkczUxSTgHSO7Bg8PckBuS-BNET2xhSPTSaQIwZKMsjd9398N_5cpE0wNXnTMvItA06FF4ivc8=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Media element pseudo-classes** (defined in CSS Selectors Level 4) provide native CSS selectors reflecting the internal playback and configuration state of `<audio>` and `<video>` elements. The set comprises seven selecto
- [web.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF54h02nlqdeOChmBbDT6dFa6I09dHr4pCfnY4kfVkkh_pQhW5bW8KsxrTvsUeTjouB2LhWhZMHnsh_srxwurRcbf3v5A4wIMlEfRjpvDClBSRY-NuJ8Fs=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Media element pseudo-classes** (defined in CSS Selectors Level 4) provide native CSS selectors reflecting the internal playback and configuration state of `<audio>` and `<video>` elements. The set comprises seven selecto
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE-C0FJn9_Tc9WjXjozxiIwcZXjUxEVvKzbMI1cHCxoCPAsb-PTU8cvQ6mFqp_psK6Dy0F4R6YUl1W0-eGCWwKTOqfOOfZRySQmQ8fvvBKhxIhKFqFK1fXFS-Q_1rtl-QSOm2IoitbH) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Media element pseudo-classes** (defined in CSS Selectors Level 4) provide native CSS selectors reflecting the internal playback and configuration state of `<audio>` and `<video>` elements. The set comprises seven selecto
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH_JSD7LnwgOwj-v6XzVL27oUP6oDxuVuw6trsVok_9lzAZKcfRoZrXEBVnZ0vAa0aUTtueArIW3KBTeJjGoV42YYcI6iIDs5maWivGKqNHGhSD_Nro-_CL4Dw15rm1ZTvUbgQ8vpps) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Media element pseudo-classes** (defined in CSS Selectors Level 4) provide native CSS selectors reflecting the internal playback and configuration state of `<audio>` and `<video>` elements. The set comprises seven selecto
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFPbEXIlLL8AhtdM2fAxjcbkdzPMGv5bD_pk3ei2xo72m2ytZEq7yPPgrJVT1wVlhEB9-mOmPq066dmKyrS973gtrdnYfJTyRSEGz1_a9x9ZQA2Cov1sooVzk8DOTLL4v-nNUf16bMNvSVwOfsQ5IhoC6Kceqy8XIOJCqwVsWc0HV9u_w==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Media element pseudo-classes** (defined in CSS Selectors Level 4) provide native CSS selectors reflecting the internal playback and configuration state of `<audio>` and `<video>` elements. The set comprises seven selecto
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFaCjBRi7XF4i3mX2ixvgH8uWOvW_ozHbtXArEPyAwHtE-EPs7B5f6fFSDbUTS_RuhxlavL242WR0Zei2ThLdCN--vbmbxvQ8HpnV0eWPWnnL6Rvx3c_xcXtpk=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Media element pseudo-classes** (defined in CSS Selectors Level 4) provide native CSS selectors reflecting the internal playback and configuration state of `<audio>` and `<video>` elements. The set comprises seven selecto
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHPxrwu2cVdRSUhBY3w3C37h9QxXPL8u8I68NmE6tsdSipUlGxRn7azf7OYj0yNlGNsZTYMExBBVr6xtCZT8PNkfSWYgVIMHFooDA_SODqwP04szHMjgExtJLKovtbFun5xQpwzBlAmPbPU06ngwg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Media element pseudo-classes** (defined in CSS Selectors Level 4) provide native CSS selectors reflecting the internal playback and configuration state of `<audio>` and `<video>` elements. The set comprises seven selecto
- [[blink-dev] Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16504.html) *(mail-archive.com)*
  > Specification https://html.spe... Blink component Blink&gt;Media Web Feature ID media-pseudos Motivation <strong>Allows styling of media elements or custom media controls based on the state of the media element</strong>....
- [Re: [blink-dev] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16508.html) *(mail-archive.com)*
  > *Blink component* Blink&gt;Media ...res/media-pseudos&gt; *Motivation* <strong>Allows styling of media elements or custom media controls based on the state of the media element</strong>. For example, a large play button overlaying a video could be hi...
- [[blink-dev] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16505.html) *(mail-archive.com)*
  > &gt; &gt; *Blink component* &gt; Blink&gt;Media ... &lt;https://webstatus.dev/features/media-pseudos&gt; &gt; &gt; *Motivation* &gt; <strong>Allows styling of media elements or custom media controls based on the &gt; state of the media element</stron...
- [[blink-dev] Intent to Prototype: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg15214.html) *(mail-archive.com)*
  > There is already an implemention of :playing and :paused behind the CSSPseudoPlayingPaused runtime-enabled feature. Blink component Blink&gt;Media Web Feature ID media-pseudos Motivation <strong>Allows styling of media elements or custom media contro...

## 📚 Platform Documentation & Specifications

- [Media element pseudo-classes · Issue #1003 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1003) *(github.com)*
- [Media element pseudo-classes · Issue #166 · web-platform-dx/developer-signals](https://github.com/web-platform-dx/developer-signals/issues/166) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 6 result(s) found (query: `""Media element pseudo-classes" API"`) — **6 verified relevant**
- **Google Search Grounding (gemini-3.7-flash):** 15 result(s) found — **13 verified relevant**
- **Dev.to Community Blogs:** 8 result(s) found (query: `"Media element pseudo-classes"`) — **17 verified relevant**
- **Hacker News Algolia:** 1 result(s) found (query: `"Media element pseudo-classes"`) — **0 verified relevant**
- **Standards Positions:** 1 item(s) inspected
- **Engine Bug Trackers:** 4 item(s) inspected
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

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
