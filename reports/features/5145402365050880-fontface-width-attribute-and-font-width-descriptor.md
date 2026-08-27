# FontFace width attribute and font-width descriptor

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Exposes the width attribute on FontFace and the @font-face font-width descriptor as aliases for stretch and font-stretch. Aligns Chromium with the updated CSS Font Loading and CSS Fonts 4 specifications. Developers can now inspect or initialize font face widths using FontFace.width and CSS font-width interchangeably with stretch and font-stretch.

### Motivation

CSS Font Loading and CSS Fonts 4 define width as the primary FontFace descriptor attribute and @font-face descriptor, while retaining stretch as a legacy alias. Chromium previously ignored the width constructor member and font-width descriptor, causing Web Platform Tests to fail. Exposing width aligns Chromium with the updated specification.

## Ecosystem Status

- **Momentum:** High (130 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Chromium 154 ships support for the `FontFace.prototype.width` attribute and the `@font-face` `font-width` descriptor as direct aliases for `stretch` and `font-stretch`. This brings Chromium into compliance with modern CSS Font Loading and CSS Fonts Level 4 specifications, resolving failing Web Platform Tests. The change provides a unified naming convention across JavaScript and CSS without breaking backward compatibility.

### Recommendations
- Actionable Advice: Continue authoring `@font-face` rules and `FontFace` descriptors with `font-stretch`/`stretch` or adopt `font-width`/`width` interchangeably, as browsers will retain backward compatibility. For greenfield font loading pipelines in JavaScript, `FontFace.prototype.width` can now be safely inspected or initialized when targeting modern browser baselines.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Packages & Polyfills

- [roboto-fontface](https://www.npmjs.com/package/roboto-fontface) `v0.10.0` — A simple package providing the Roboto fontface.
- [postcss-discard-unused](https://www.npmjs.com/package/postcss-discard-unused) `v9.0.0` — Discard unused counter styles, keyframes and fonts.

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFoYLyBuAzWZkbdyBXikR-sE-K7jKi1nzs0A9BfEd7UNn48S3N03YCriibq8jreOZgJij6BYFZdgmsGaVuT5p9b_l6gxfQbokhqtOv8s_L-RPLQJ4kg2to9wfYZo0_9h5XuDHc94Kqf) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHsYsVLA2akYcESFylaSvqYHqz_HP4LhLFBaI4obDpEDG1kJy9auAq-78ofq5aDJMl6DD9cipw2aJXaEY3AjvqwDWAN847TYrribcOP0ZZcyso5ayKLZvjo) *(vertexaisearch.cloud.google.com)*
  > ### Summary  The CSS Fonts Module Level 4 and CSS Font Loading specifications modernize font descriptor terminology by establishing **`font-width`** and **`FontFace.prototype.width`** as the canonical identifiers, retaining `font-stretch` and `FontFa
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFHFcYrZCTfAhlawiRDsLtTwZPxwGJ4GK0yHMqfPVTnCksf9A5Sdgf-m0y-oOVm_HdiQVrIscKqRv1WxBX04ET7z_5u1kGE6cPn6vIyJq1OnPqgVI_BkLv1jYpkFE_TPWOZCEIsMwvT0kReccuVzgmLYzKCazebRoV9LPglzpRLjRUrgaFuqJ_RBYvYfwxKtNgZLjK7ydtG5STjWslXGi0=) *(vertexaisearch.cloud.google.com)*
  > Intent to Ship: FontFace width attribute and font-width descriptor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: FontFace width attr...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG6TLfwab9yN4T2Y-UoFMqUCD-wCxl5sO6yW6r3EtFfhK-mVrWNWqItwIO3nqwQzy3SNq145kpOk_Em1tfh7StZL5xdtyN0LDERASPrzfMC9IP8quzK_lFXu8O9foH6zAEGSfNSOf_om6JtB-bGdiSXEOlzreqCxci3lKmuQvzfDHjeSQMU9lAOxgyVjeFWpA==) *(vertexaisearch.cloud.google.com)*
  > font-width CSS at-rule descriptor - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference At-rules @font-face font-width Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français font...
- [realityripple.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGE97WTCOR6gQjbgS0B8wHge3LWcDgwrXW5aQ8HDvMJHZBQk3uTpzbzY8J5E5li1vj7Zu5PSriE1umoTkbS7E1ggSvXKN5B9-XlIaELOzScBDpfxcQ30bGZsQMW6UIZeQwIq9pCmSulfyjqe_o8CKNyt9nnvJzEDfM=) *(vertexaisearch.cloud.google.com)*
  > font-stretch - CSS: Cascading Style Sheets Skip to main content font-stretch On this Page Jump to section Syntax Accessibility concerns Formal definition Formal syntax Examples Specifications Browser compatibility See also Related topics The font-str...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE7dzQOxpki7X-zlfoeUgLIhLAaq24q0Sx_BrZD1SKFUfmjiRhN-Lpj4Hj-1AG0AH--pg5JX7lNYUtLBc-rq0WalyE-p6SIE7UHe4MjthtNPvy7SUd9rq6k9D59jdN3WNrLXWPdJqJv4Bq_NSSS9k2aDc1FqJTKgKoSQ-XXPXgqa3ylEqfB0x8p0no8cL7jc1GD) *(vertexaisearch.cloud.google.com)*
  > font-stretch CSS at-rule descriptor - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference At-rules @font-face font-stretch Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français ...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGqZewSjzEq8qQ04z7jp80iq66igb3xK-GWgh6zPtumDpIG4sn_VW7iWjzYbpVSq5_OLpZ-HXa3JhIIZC1P0A0i1rLynUOMDlytk_zQ4HoZ2CkvKA_5G-THp0JO1asU-zOpQWtI_uc6jqnxjpux_nfpnr3CcRQ=) *(vertexaisearch.cloud.google.com)*
  > font-width · Issue #285 · web-platform-dx/developer-signals · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. Yo...
- [[blink-dev] Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17165.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) [blink-dev] Intent to Ship: FontFace width attribute and font-width descriptor Chromestatus Wed, 12 Aug 2026 21:46:10 -0700 Contact e...
- [[blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17196.html) *(mail-archive.com)*
  > &gt; &gt; *Adoption expectation* &gt; Feature ... font face width &gt; descriptors within 12 months of reaching Web Platform baseline. &gt; &gt; *Adoption plan* &gt; Web Platform Tests (WPT) have been added to ensure cross-browser &gt; interoperabili...
- [Re: [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17223.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt; &gt;&gt;&gt; &gt;&gt; Adoption expectation ... font face width &gt;&gt;&gt; descriptors within 12 months of reaching Web Platform baseline. &gt;&gt;&gt; &gt;&gt; &gt;&gt;&gt; &gt;&gt; Adoption plan &gt;&gt;&gt; &gt;&gt; Web Plat...

## 📚 Platform Documentation & Specifications

- [font-width](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/font-width) *(developer.mozilla.org)*
- [font-width CSS at-rule descriptor](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/font-width) *(developer.mozilla.org)*
- [font-width CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-width) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 3 result(s) found (query: `""FontFace width attribute and font-width descriptor" API"`) — **3 verified relevant**
- **Google Search Grounding (gemini-3.7-flash):** 7 result(s) found — **7 verified relevant**
- **Dev.to Community Blogs:** 8 result(s) found (query: `"FontFace width attribute and font-width descriptor"`) — **10 verified relevant**
- **Hacker News Algolia:** 0 result(s) found (query: `"FontFace width attribute and font-width descriptor"`) — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **2 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

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
