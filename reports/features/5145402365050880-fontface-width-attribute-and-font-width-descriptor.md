# FontFace width attribute and font-width descriptor

> **Report Week:** 2026-W41 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Exposes the width attribute on FontFace and the @font-face font-width descriptor as aliases for stretch and font-stretch. Aligns Chromium with the updated CSS Font Loading and CSS Fonts 4 specifications. Developers can now inspect or initialize font face widths using FontFace.width and CSS font-width interchangeably with stretch and font-stretch.

### Motivation

CSS Font Loading and CSS Fonts 4 define width as the primary FontFace descriptor attribute and @font-face descriptor, while retaining stretch as a legacy alias. Chromium previously ignored the width constructor member and font-width descriptor, causing Web Platform Tests to fail. Exposing width aligns Chromium with the updated specification.

## Ecosystem Status

- **Momentum:** High (100 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Chromium 154 exposes the \`FontFace.width\` attribute and \`@font-face font-width\` descriptor, closing a specification conformance gap by treating them as official modern aliases for \`stretch\` and \`font-stretch\`. The change directly aligns Chromium with CSS Fonts Module Level 4 and CSS Font Loading, resolving persistent Web Platform Test (WPT) failures. Engine alignment is progressing smoothly, with Firefox already shipping the modern descriptor while WebKit has yet to signal its implementation timeline.

### Recommendations
- Actionable Advice: Maintain \`font-stretch\` and \`FontFace.stretch\` as defensive defaults or aliases in production stylesheets and font loaders until \`font-width\` reaches universal Baseline status. Teams targeting modern evergreen Chromium and Firefox environments can safely begin adopting \`FontFace.width\` without risking legacy breaks.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGpmK4EWIX2V3elfPj-LBb7XBrBE4uU8_E69Y2GtAKzRUxmiwQszONC6MLgiD6q8BIMlyf8mXe6zYtomSIYohghp0RFIDhW2Wh-DnfVwQp1WB99nvrORQez) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **`FontFace.width` attribute** and the **`@font-face font-width` descriptor** align modern browser implementations with the updated **CSS Fonts Module Level 4** and **CSS Font Loading** specifications.   * **The Proble
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG2x9Qm930fMLTJ00PkIDccAMlZtM6PNy9PXCso5RrvNyoWZYeF3pUVvztkKy7uxnUus63KL0uGNfFM0UlpoLeg-fKLXRGYt-vOx7S6s9ny_ekmZiEPNZH8tJWnnEiKyxIUuNNH0ltfBQ2zHmvSogYN3ssJipMKGK5xsapXnGQmbVqYPcOQ) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **`FontFace.width` attribute** and the **`@font-face font-width` descriptor** align modern browser implementations with the updated **CSS Fonts Module Level 4** and **CSS Font Loading** specifications.   * **The Proble
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGBWHrfxW6g8jP7u2aVWgJTq-3B8_jzIFV_ZEvUBedIg7qtLAE6RBTYtSvH0dt_gFyz3JcgsT1wnZSLyzcG4aoPZn3CS0f2OB_4P9YnRNcMXiDsY3f2nVOQxL3BJtavES_E53RvQAhMzKW0ihu6CoSdLC35hkSWz7S7w99Q0w==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **`FontFace.width` attribute** and the **`@font-face font-width` descriptor** align modern browser implementations with the updated **CSS Fonts Module Level 4** and **CSS Font Loading** specifications.   * **The Proble
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHfArNXTIL7RvI5fti6pgjE4hEfkUXMwb2kWXWNojiBhL_oUBNWVmH0c3TTL1_6lBVfo5pyvQ9pzb59jQhCPlmIGU3lnRtrQ7qBCI3vI0-N9I-asMq8Di6ZMirlfGIMdXp84dtM_GOflSnrAcJN2vPE1SIQIennC9GBs4f4-jrUnaUDzG5OsQ==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **`FontFace.width` attribute** and the **`@font-face font-width` descriptor** align modern browser implementations with the updated **CSS Fonts Module Level 4** and **CSS Font Loading** specifications.   * **The Proble
- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17211.html) *(mail-archive.com)*
  > Please list open issues (e.g. links to known github issues in the project for the feature specification) whose resolution may introduce web compat/interop risk (e.g., changing to naming or structure of the API in a non-backward-compatible way). &gt;&...
- [\[blink-dev\] Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17165.html) *(mail-archive.com)*
  > Adoption expectation Feature is ... font face width descriptors within 12 months of reaching Web Platform baseline. Adoption plan Web Platform Tests (WPT) have been added to ensure cross-browser interoperability. MDN documentation will be updated to ...
- [\[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17196.html) *(mail-archive.com)*
  > &gt; &gt; *Adoption expectation* &gt; Feature ... font face width &gt; descriptors within 12 months of reaching Web Platform baseline. &gt; &gt; *Adoption plan* &gt; Web Platform Tests (WPT) have been added to ensure cross-browser &gt; interoperabili...
- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17205.html) *(mail-archive.com)*
  > &gt; &gt;&gt; &gt; &gt;&gt; Adoption expectation ... font face width &gt; descriptors within 12 months of reaching Web Platform baseline. &gt; &gt;&gt; &gt; &gt;&gt; Adoption plan &gt; &gt;&gt; Web Platform Tests (WPT) have been added to ensure cross...
- [\[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17203.html) *(mail-archive.com)*
  > &gt;&gt; False &gt;&gt; &gt;&gt; Tracking bug &gt;&gt; ... launch in &gt;&gt; Chrome. &gt;&gt; &gt;&gt; Adoption expectation &gt;&gt; <strong>Feature is considered a best practice for configuring font face width &gt;&gt; descriptors within 12 months ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17211.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5145402365050880`)*
  > Please list open issues (e.g. links to known github issues in the project for the feature specification) whose resolution may introduce web compat/interop risk (e.g., changing to naming or structure of the API in a non-backward-compatible w...

## 📚 Platform Documentation & Specifications

- [font-width CSS at-rule descriptor - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/font-width) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 41 result(s) found across 7 planned queries — **6 verified relevant**
  - `"chromestatus.com/feature/5145402365050880" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"drafts.csswg.org/css-fonts-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"FontFace width attribute and font-width descriptor" API` — *Core feature API query* (3 returned)
  - `"FontFace width attribute and font-width descriptor" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"fontface.width" OR "font-width" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"FontFace width attribute and font-width descriptor" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"FontFace width attribute and font-width descriptor" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **4 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 560 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5145402365050880)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5145402365050880)
- [Specification](https://drafts.csswg.org/css-fonts-4/#font-width-prop)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/543938492)
