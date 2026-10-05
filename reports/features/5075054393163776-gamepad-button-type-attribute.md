# Gamepad button type attribute

> **Report Week:** 2026-W41 | **Milestone:** Chrome 152 | **Category:** In developer trial (Behind a flag)

## Overview

Gamepad API defines standard indices for 17 common gamepad buttons. The GamepadButton type attribute provides an alternate, interoperable identifier for common buttons that are not included in the standard set, like "trackpad".

### Motivation

Gamepad API should provide an interoperable way to identify common buttons that are not included in the standard set of buttons, particularly the trackpad button that appears on PlayStation gamepads.

## Ecosystem Status

- **Momentum:** High (80 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The GamepadButton.type attribute extends the W3C Gamepad API beyond the rigid 17-button 'standard' layout to provide semantic, interoperable identifiers for auxiliary inputs like PlayStation trackpad clicks. Currently progressing through a Developer Trial behind the \`GamepadButtonTypes\` flag in Chromium (milestone 152), the feature originates from W3C Gamepad Working Group PR #196. Broad cross-browser consensus is still forming, but the extension directly targets a persistent compatibility gap in web gaming and streaming platforms.

### Recommendations
- Actionable Advice: Web developers should treat the \`type\` attribute strictly as progressive enhancement, testing extended controller mappings in Chrome using \`--enable-blink-features=GamepadButtonTypes\`. Keep robust heuristic fallbacks (such as vendor/product ID checks against button array indices) in production code until multi-engine consensus and default shipping are established.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEq65ZprmNY2LD956v6c5JI0fEwxB9Q8JR8O6tusPrVEgldTAzMjk52utMkQib55rF_Rm8XIY9MU-EOdljlzDoToh5vI5cVkqfMnYQb_jknW_B1NPpPDHrjqp5raXjTPKgQHNbt) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The standard Gamepad API specification defines a fixed set of 17 standard button indices (indices 0 through 16), which map common controller buttons such as face buttons, bumpers, triggers, stick clicks, and D-pad directio
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHZy8IihQmo-d3w6amh9RnjFTIHflsFJ0z3EzILxQ4IOUqoYoRp_d1VBXiLzDffHfQwYI46KIT1vugKDezwK75jafSBWe4055Rw-iCrxHe41hyqPvH0Vqyqmwts_96ZSPP6nUwI8wPs2kJw8zRLD6nMkOradoOML-lhnYmNkQmnNlv3) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The standard Gamepad API specification defines a fixed set of 17 standard button indices (indices 0 through 16), which map common controller buttons such as face buttons, bumpers, triggers, stick clicks, and D-pad directio
- [polypane.app](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG4Oifslre26WpZT0ShoCLO-Dxt9Q3ldfwJ3l9TpN8_zvLAvCQODvkCLcWdY968nzJMzq49kUJ3JOA3JDp0rfvDA3wAibOR76965XLmcu9ENajdiljKVYob3ZhCqaUQS2f1njRFYN5wPgkcSJOKJw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The standard Gamepad API specification defines a fixed set of 17 standard button indices (indices 0 through 16), which map common controller buttons such as face buttons, bumpers, triggers, stick clicks, and D-pad directio
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE4y5IPt5FzHfFFokSuRz5muFUvZMhrHz4QCNuVad6JujzYYQBs4lsceNhebRjXwu6afoztlXaZjJSSY3bK__ux4SDNy9cJbN7GWVz_W91tJGQrNLNTe7zhMXAQjLeCHDzeHvVBJlpGR0I9qNkrUvo-J_jb) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The standard Gamepad API specification defines a fixed set of 17 standard button indices (indices 0 through 16), which map common controller buttons such as face buttons, bumpers, triggers, stick clicks, and D-pad directio
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFKCeAw5pH7yBNsDHwO3-tGAP_YPhpCVksnLOipDRCbbtttlkHXddky3i512si01_gOITerMBcWL8Mv8eo-X2tYkwfZleQqSuAcT0gwleozkBLNxMSgvpWiCLJHxhxligkwlbutBq_Wt7O4zBMAKsxfTsyc) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The standard Gamepad API specification defines a fixed set of 17 standard button indices (indices 0 through 16), which map common controller buttons such as face buttons, bumpers, triggers, stick clicks, and D-pad directio
- [\[blink-dev\] Intent to Prototype: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17054.html) *(mail-archive.com)*
  > Explainer https://xingri.githu... gamepad buttons. The GamepadButton type attribute <strong>provides an alternate, interoperable identifier for common buttons that are not included in the standard set, like &quot;trackpad&quot;.</strong>...
- [\[blink-dev\] Ready for Developer Testing: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17052.html) *(mail-archive.com)*
  > Explainer https://xingri.githu... gamepad buttons. The GamepadButton type attribute <strong>provides an alternate, interoperable identifier for common buttons that are not included in the standard set, like &quot;trackpad&quot;.</strong>...
- [Re: \[blink-dev\] Ready for Developer Testing: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17055.html) *(mail-archive.com)*
  > On Thu, Jul 23, 2026 at 3:39 PM ...w.s3.amazonaws.com/xingri/gamepad/pull/196.html#gamepadbuttontype-enum &gt; &gt; *Summary* &gt; <strong>Gamepad API defines standard indices for 17 common gamepad buttons</strong>....

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17054.html) *(mail-archive.com)* *(Cites: `https://xingri.github.io/gamepad-button-type`)*
  > Explainer https://xingri.githu... gamepad buttons. The GamepadButton type attribute <strong>provides an alternate, interoperable identifier for common buttons that are not included in the standard set, like &quot;trackpad&quot;.</strong>...
- [\[blink-dev\] Ready for Developer Testing: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17052.html) *(mail-archive.com)* *(Cites: `https://xingri.github.io/gamepad-button-type`)*
  > Explainer https://xingri.githu... gamepad buttons. The GamepadButton type attribute <strong>provides an alternate, interoperable identifier for common buttons that are not included in the standard set, like &quot;trackpad&quot;.</strong>...
- [Re: \[blink-dev\] Ready for Developer Testing: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17055.html) *(mail-archive.com)* *(Cites: `https://xingri.github.io/gamepad-button-type`)*
  > On Thu, Jul 23, 2026 at 3:39 PM ...w.s3.amazonaws.com/xingri/gamepad/pull/196.html#gamepadbuttontype-enum &gt; &gt; *Summary* &gt; <strong>Gamepad API defines standard indices for 17 common gamepad buttons</strong>....

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 27 result(s) found across 7 planned queries — **3 verified relevant**
  - `"chromestatus.com/feature/5075054393163776" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"xingri.github.io/gamepad-button-type" -site:xingri.github.io` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"pr-preview.s3.amazonaws.com/xingri/gamepad/pull/196.html" -site:pr-preview.s3.amazonaws.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Gamepad button type attribute" API` — *Core feature API query* (2 returned)
  - `"Gamepad button type attribute" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"Gamepad button type attribute" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Gamepad button type attribute" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **5 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 2 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 11 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5075054393163776)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5075054393163776)
- [Specification](https://pr-preview.s3.amazonaws.com/xingri/gamepad/pull/196.html#gamepadbuttontype-enum)
- [Chromium Tracking Bug](https://crbug.com/339841686)
