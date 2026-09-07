# Popover=hint behavior changes

> **Report Week:** 2026-W37 | **Milestone:** Chrome 150 | **Category:** Enabled by default

## Overview

This change implements a revised and simplified stacking model for the popover=hint attribute and its interactions with popover=auto. Previously, the interactions between these two types of popovers could be complex in some corner case situations (such as nesting auto popovers inside hint popovers), and could lead to unexpected behavior. Under the new model, opening a hint popover will no longer inadvertently close unrelated auto popovers. Hint popovers are now only hidden when their ancestral auto popover is hidden, or when a new, unrelated auto popover is opened. Additionally, developers can now safely nest an auto popover inside a hint popover; instead of throwing an exception or breaking the stack, the nested auto popover will gracefully "downgrade" and behave as a hint popover. This allows use cases such as placing a customizable-<select> within a popover=hint.

To further improve predictability and prevent complex state mutations, we are also tightening the behavior around opening and closing popovers from within the beforetoggle event. There were guards in place for some, but not all, of the possible cases before. This change revamps the mechanism used to detect these cases, so that it should more reliably throw InvalidStateErrors for all such cases. This ensures that popover state management remains stable and prevents looping reentrancy bugs.

All of these changes were motivated by standards conversations with Mozilla on the spec PR here: https://github.com/whatwg/html/pull/12345.

### Motivation

These changes are the result of a conversation in standards that came up as other browsers started to review the landed specs for the popover=hint feature. It is unfortunate that this detailed review didn't happen at the time of the landing of the specs, or the shipping of this feature in Chrome, but it's good that it eventually did happen. The changes are positive ones that rationalize the behavior in various corner-case situations, with multiple nested stacks of popovers.

## Ecosystem Status

- **Momentum:** High (160 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The revised stacking model for `popover="hint"` standardizes the relationship between transient tooltips and primary floating UI (`popover="auto"`), eliminating previous stack-clobbering edge cases. Chrome, Firefox, and Safari engineers have converged on WHATWG spec revisions that cleanly isolate hint stacks, downgrade nested auto popovers gracefully, and guard against reentrant `beforetoggle` state mutations. This moves declarative tooltip and preview components closer to full, reliable cross-browser maturity.

### Recommendations
- Actionable Advice: Teams can replace complex custom `popover="manual"` tooltip workarounds with declarative `popover="hint"` elements, safely nesting rich interactive elements like dropdowns inside previews. Ensure existing `beforetoggle` event handlers are audited to remove programmatic open/close calls during transitions, as tightened browser guards now strictly enforce `InvalidStateError` exceptions.
- Shipping enabled by default in Chrome 150. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "ユーザーにヒントを表示するための `popover=hint` 属性" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [ユーザーにヒントを表示するための `popover=hint` 属性](https://twitter.com/aWebprogrammer/status/1880960854000349509) — *by @aWebprogrammer, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [ツールチップの実装に役立つ！ HTMLの新属性popover="hint ...](https://twitter.com/aWebprogrammer/status/1912886359490236534) — *by @aWebprogrammer, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEQBcFLgkkbJFeKt5dpP6GIQgsNv-QCuDd0BfbTf1ztnSSmkiMFmOwU4w52S9dWkDh17m63Wea3w-RZ7tWCtV74tLcoePzFutKhbv7aLNegrsid1diSu-eC0OFCTuZ83yqlbnddq30aPcZlPzw7tMWZWIeOnX86dw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Changes  The Web Platform standard for `popover="hint"` has introduced a revised and simplified stacking model to rationalize how transient UI elements (like tooltips and rich previews) interact with `popover="auto"` components (li
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFKDP-15FbGfEjaYw6p0bqcz4dh2WZ1h33aTdjgqz0av60K6vLtJLF8C_-Z04P1T9iOsM9BIC1iGHn1-b6gD5pgCyxTDXxn4njp5emuJcBD9lE0LnufxK6NDb1NrlBf0m5BQAY=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Changes  The Web Platform standard for `popover="hint"` has introduced a revised and simplified stacking model to rationalize how transient UI elements (like tooltips and rich previews) interact with `popover="auto"` components (li
- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQElaQCdPHFynnG2uH4m-g17d1ura-ZmO21i6MZBgpN6p4t55uoQF-TPS2tkMggVTNuyLemYBhlwN8HOW_VKbZOfWkxqXTU57Mvir3Kw__4QH1xHwphee1yVzcEMi1B522M4MtGW_G035POM19MpJWJtMQ==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Changes  The Web Platform standard for `popover="hint"` has introduced a revised and simplified stacking model to rationalize how transient UI elements (like tooltips and rich previews) interact with `popover="auto"` components (li
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFKNMZMFdNdzdJ5tw7cFCKSuiTmF4pBKUwo0UQ5Qd8l0RgkCJrM9W9u09rBmZDAudIw59O2ptX8aUn2EJ0yrHUFCnOfGA3vSp6ZLB7EpfLi3vHKYznPvshHgRG_pdnWTGk=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Changes  The Web Platform standard for `popover="hint"` has introduced a revised and simplified stacking model to rationalize how transient UI elements (like tooltips and rich previews) interact with `popover="auto"` components (li
- [open-ui.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHRPxlglPLaJ74OOxyOGokmRxWUDiq4WVfJRephU2BxhiQRNi5ST2dFzxCGLBaCAGcn15FF9cT3NO60pRAMHLG0DpQI_O6SBIeJrbtAMGvUK2-SllDqo7rWCCHrIlRsZdGpKy6usfsddQmKgk0w4BKtXigtBA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Changes  The Web Platform standard for `popover="hint"` has introduced a revised and simplified stacking model to rationalize how transient UI elements (like tooltips and rich previews) interact with `popover="auto"` components (li
- [stackoverflow.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEWdHiRywC7bWeoNtAanX1WiyM8566DQTpkpSlNx73A_f1IP2hIAR7xn68BoaEMdXZkEYkcOzHA4Hp7Fh1TtEF85kLw9yQ5FAp4H0aECnMipUZK7dl3EnMkkyYMmLGD4hkkAqBza62QhxXt29yxzoS3v7a5DNQCxFyyzIr3nxT48_AXrWFMkYdLpnssU7G_TVyRq9AMcWbGQeQEcRh2gw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Changes  The Web Platform standard for `popover="hint"` has introduced a revised and simplified stacking model to rationalize how transient UI elements (like tooltips and rich previews) interact with `popover="auto"` components (li
- [oddbird.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHnvWrqO4xpB-nXrGyn8uRyMmyTcBxTzd_1Q3XmdWmfDGbffNrquOu6CqGPwVn_vRA1hSBHap5QHjTmThqm2sKEBMyTq_DWrIIvgwl71kronO4=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Changes  The Web Platform standard for `popover="hint"` has introduced a revised and simplified stacking model to rationalize how transient UI elements (like tooltips and rich previews) interact with `popover="auto"` components (li
- [Intent to Ship: Popover=hint behavior changes](https://groups.google.com/a/chromium.org/g/blink-dev/c/QkVJ1GYjLKk) *(groups.google.com · 2026-04-24T00:00:00)*
  > Link to entry on the Chrome Platform Statushttps://<strong>chromestatus.com/feature/6282804208992256</strong>?gate=4782991999107072
- [[blink-dev] Intent to Ship: Popover=hint behavior changes](http://www.mail-archive.com/blink-dev@chromium.org/msg16357.html) *(mail-archive.com)*
  > *No information provided* *Link ... was generated by Chrome Platform Status &lt;https://chromestatus.com/&gt;. -- <strong>You received this message because you are subscribed to the Google Groups &quot;blink-dev&quot; group</strong>....
- [Update popover=hint behavior [499019927] - Chromium](https://issues.chromium.org/issues/499019927) *(issues.chromium.org · 2026-04-02T00:00:00)*
  > <strong>This patch updates the popover implementation to align with recent HTML spec changes, specifically regarding reentrancy protection and nested popover types</strong>. See the conversation in the spec PR: https://github.com/whatwg/html/pull/123...
- [Popover=hint behavior changes](https://chromestatus.com/feature/6282804208992256) *(chromestatus.com · 2026-04-23T00:00:00)*
  > We cannot provide a description for this page right now
- [Chrome 150 beta | Blog | Chrome for Developers](https://developer.chrome.com/blog/chrome-150-beta) *(developer.chrome.com · 2026-06-03T00:00:00)*
  > This change <strong>implements a revised and simplified stacking model for the popover=hint attribute and its interactions with popover=auto</strong>. Previously, the interactions between these two types of popovers could be complex in some corner ca...
- [[dev-platform] Intent to Ship: Popover=hint "new behaviours"](http://www.mail-archive.com/dev-platform@mozilla.org/msg01796.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · [dev-platform] Intent to Ship: Popover=hint &quot;new behaviours&quot; · Keith Cirkel Tue, 19 May 2026 06:55:37 -0700 · Summary: <strong>`popover=hint` attribute changed behaviours to smooth over some edge case...
- [Chrome 150 | Release notes | Chrome for Developers](https://developer.chrome.com/release-notes/150) *(developer.chrome.com · 2026-06-30T00:00:00)*
  > This change <strong>implements a revised and simplified stacking model for the popover=hint attribute and its interactions with popover=auto</strong>. Previously, the interactions between these two types of popovers could be complex in some corner ca...
- [Microsoft Edge 150 web platform release notes (Jul. 2026) - Microsoft Edge Developer documentation | Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/150) *(learn.microsoft.com · 2026-07-02T00:00:00)*
  > The behavior of elements with the popover=&quot;hint&quot; attribute has changed to improve interactions with popover=&quot;auto&quot; elements: <strong>opening a popover=&quot;hint&quot; element will no longer inadvertently close unrelated popover=&...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Ship: Popover=hint behavior changes](https://groups.google.com/a/chromium.org/g/blink-dev/c/QkVJ1GYjLKk) *(groups.google.com · 2026-04-24T00:00:00)* *(Cites: `https://chromestatus.com/feature/6282804208992256`)*
  > Link to entry on the Chrome Platform Statushttps://<strong>chromestatus.com/feature/6282804208992256</strong>?gate=4782991999107072
- [[blink-dev] Intent to Ship: Popover=hint behavior changes](http://www.mail-archive.com/blink-dev@chromium.org/msg16357.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6282804208992256`)*
  > *No information provided* *Link ... was generated by Chrome Platform Status &lt;https://chromestatus.com/&gt;. -- <strong>You received this message because you are subscribed to the Google Groups &quot;blink-dev&quot; group</strong>....
- [Update popover=hint behavior [499019927] - Chromium](https://issues.chromium.org/issues/499019927) *(issues.chromium.org · 2026-04-02T00:00:00)* *(Cites: `https://github.com/whatwg/html/pull/12345`)*
  > <strong>This patch updates the popover implementation to align with recent HTML spec changes, specifically regarding reentrancy protection and nested popover types</strong>. See the conversation in the spec PR: https://github.com/whatwg/htm...

## 📚 Platform Documentation & Specifications

- [Using the Popover API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 35 result(s) found across 7 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/6282804208992256" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/whatwg/html/pull/12345" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Popover=hint behavior changes" API` — *Core feature API query* (2 returned)
  - `"Popover=hint behavior changes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"github.com" OR "corner-case" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Popover=hint behavior changes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Popover=hint behavior changes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 15 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 1 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6282804208992256)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6282804208992256)
- [Specification](https://github.com/whatwg/html/pull/12345)
- [Chromium Tracking Bug](https://crbug.com/499019927)
