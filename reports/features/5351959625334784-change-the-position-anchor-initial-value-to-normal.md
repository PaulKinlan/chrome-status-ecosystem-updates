# Change the "position-anchor" initial value to "normal"

> **Report Week:** 2026-W38 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

We are changing the initial value of the "position-anchor" CSS property from "none" to normal to align with other browsers and the specification.  "normal" behaves like "none" if the "position-area" CSS property is "none", otherwise behaves as "auto".

### Motivation

Aligns with the specification and other browsers.

## Ecosystem Status

- **Momentum:** High (320 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** The specification update changing the initial value of \`position-anchor\` from \`none\` to \`normal\` represents a key ergonomic refinement in CSS Anchor Positioning Module Level 1. Under \`normal\`, elements configured with \`position-area\` automatically behave as \`auto\`, binding directly to implicit anchors such as popover invokers without requiring manual tether declarations. Enabled by default in Chrome 151 and adopted across WebKit and Gecko, this resolves an annoying friction point and unifies the multi-engine implementation landscape.

### Recommendations
- Actionable Advice: Teams utilizing modern Anchor Positioning can begin omitting explicit \`position-anchor: auto\` declarations when using \`position-area\` alongside implicit anchors. However, maintain progressive enhancement or JavaScript popover fallbacks until Anchor Positioning reaches full cross-browser Baseline availability, and verify that CSS minifiers like \`postcss-reduce-initial\` do not compile against outdated initial property maps.
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Packages & Polyfills

- [postcss-reduce-initial](https://www.npmjs.com/package/postcss-reduce-initial) `v9.0.2` — Reduce initial definitions to the actual initial value, where possible.

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEB7SLUOb5931exwNPSovGgwsTh2eGZ1NxdvsKdIwnhcEeA0dqg-PfSrYcK37Lh5YGjWdEdOu6CVYqm4eTDcl2I2Zdd-Z-TKb82gbdgvmNDAaJrPYkgbIdmuXK6Y4pl0SG7fvQDIqU=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFdEnSRAwtJpRJgnM1bDVoP4ajUAB0AjurgfAboqwRu7s-XktCBN8ayjXuFkC3KUl-OTQ6KxDgZNS5SYeconu7z9bHprdhtSt7f1YUzVqZAzZeSGpi__tqVz_HE8wy2Su2l) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Change  The CSS Working Group and browser engines updated the initial (default) value of the **`position-anchor`** property from **`none`** to **`normal`**.   The behavior of `normal` is contextual: * **When `position-area` is `non
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHwHUQcOM0aFx6O4eQP64Mnd058rMQakPNIjYPTJa8J6YMQcymYNlg2ql5GBmG-XnyVTIntNIRpgAQG6lyg34s4yv7Ul3IZH1qWrINWQndRI391p2n_hLonhGvlazsSFdIwfRFVzw4=) *(vertexaisearch.cloud.google.com)*
  > Chrome 151 beta | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – ...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF-E7ggergoCnk0ZS0wms4cWxpAb2T4XK86LFmFPBFoqm_OHS6Tcfk_H9_3jq0OdZYLlgBz6c9_VQkLe8zVGWFfCRe-kdpIpjJHbFWokds6XxBxKUI7ZxgDfPEEwzz49KILgzQG-IU4v0rVKG7hLx6b8vWo-NpfWEWwaUSuMdtUhCv1-8TEewCz-oo=) *(vertexaisearch.cloud.google.com)*
  > position-anchor CSS property - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Properties position-anchor Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 position-...
- [schalkneethling.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHfFW9a6_joVh3O82iPrduuPvs9r76LtGyfCYllfhh1H6JljG_DI_w-Kc0UHHAvqIGOejVsYGdk1J2UiGF61S8_gGSdfjK8f3YZpmghlUX6LebcGrRY_RSyQzUqfktdTremWfkbEn_Gf4oqKLbxncVhewjr_od22JAlvz3Kk-M2luSjWfmypw==) *(vertexaisearch.cloud.google.com)*
  > Scoping and Visibility | Anchor Positioning in Space Skip to content Anchor Positioning in Space Search Ctrl K Cancel GitHub Scoping and Visibility In the previous posts, we covered the fundamentals of anchor positioning, precise control with anchor(...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF-5V9hPDU6ee1IuJhC1jE1OdnRcJL7qziaBc_aqeHZBapc9a4c5qFb9bR60jbtZVO3sQtaLD63WkVONykrKrX4-dx_biqAJ3EOapDUb1XISNmqHXJlAIFM0FTeRMdoC6Q=) *(vertexaisearch.cloud.google.com)*
  > Popover anchor positioning: the `anchor()` example needs `position-anchor: auto` · Issue #45514 · mdn/content · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH3hD5yUO5YhDIT04S1VxWQvFPQOiKI0UEFYK5cvyVb5Hjzzp-oRDei3ROPhxIvBKIX__G1gCB5YxCmpTSIyO9BxgMyR86YCN6sAmfakPLq2WKkr_xxPmavrUkqmw7mOaI_Vwo=) *(vertexaisearch.cloud.google.com)*
  > Chrome 151 | Release notes | Chrome for Developers Passer au contenu principal / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภา...
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGdADPHl9-jkHH479XetYZ35iGXVsmxAXmVohwH76X39Al4Evvbn_2klpNC1OPwpWuHDcgK4gGtPRVDY1IxQ06AZqDzai4OoSsMLQgMKeq7AmkVjVO-TmH-RoT79fEei1Rjc-GKCPzJ7wy07uBZb9rbsQ==) *(vertexaisearch.cloud.google.com)*
  > position-anchor | CSS-Tricks Skip to main content CSS-Tricks Since 2007 anchor positioning CSS Almanac &rarr; Properties &rarr; P &rarr; position-anchor position-anchor Juan Diego Rodríguez on Aug 5, 2024 Experimental: Check browser support before us...
- [oddbird.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFnekosrrganO4Ns-p3EM6t1KM2uE6fNt3KAlT1nsGa3PfecDzGdOr3L3V4H3FzqSluMTayFQvazcaC5L9rELFHt7YpGsORajZ1m3l-yVxsY8SdnYMeW34D8NY1Cc6xSqwiQPm4wcQWY-R8czy6) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Change  The CSS Working Group and browser engines updated the initial (default) value of the **`position-anchor`** property from **`none`** to **`normal`**.   The behavior of `normal` is contextual: * **When `position-area` is `non
- [theosoti.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHFNLedWHhVxyJBP1NEpgKQRlM9sne2kzLAvwKigbDqGCCrPEIGSAPhIpq1Ril-jfcQSK6zGM9F3YfncWEEqbqgyv8QjCyNozj6tt2aBL_ruJ17KlVJCZcAHzf5Lziz0I387OaMCfuF2561cmYtqMIzpB1ySPjT7bdG) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Change  The CSS Working Group and browser engines updated the initial (default) value of the **`position-anchor`** property from **`none`** to **`normal`**.   The behavior of `normal` is contextual: * **When `position-area` is `non
- [web.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHIP6X4aa9znrP47BDPp3yT4O6e2vioKVfAmu6g_tREhVs_U2dKypp7I5K0ngtlqRt6LgpNgpTeVSJrpEh3CeKq7A1QCBP3eP0T50TU5CFmJeHrv433T2AlXuf_993GcLOL) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Change  The CSS Working Group and browser engines updated the initial (default) value of the **`position-anchor`** property from **`none`** to **`normal`**.   The behavior of `normal` is contextual: * **When `position-area` is `non
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEaorqef3_KF8qIDFzZUTsA5Hzsz16MguPogWwCqpbNADjMCj1D5HBfWlSAO0I_3YZ8pYEy9VmKTMl76FN_fYyVCY4iV_YK1aAB7QPlll51QF4treeQ3f-Jsp2pGsKshIpwyVXw1A==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Change  The CSS Working Group and browser engines updated the initial (default) value of the **`position-anchor`** property from **`none`** to **`normal`**.   The behavior of `normal` is contextual: * **When `position-area` is `non
- [\[blink-dev\] Web-Facing Change PSA: Change the "position-anchor" initial value to "normal"](http://www.mail-archive.com/blink-dev@chromium.org/msg16707.html) *(mail-archive.com)*
  > Specification https://drafts.c... to normal to align with other browsers and the specification. <strong>&quot;normal&quot; behaves like &quot;none&quot; if the &quot;position-area&quot; CSS property is &quot;none&quot;, otherwise behaves as &quot;aut...
- [Getting Started with Anchor Positioning • Josh W. Comeau](https://www.joshwcomeau.com/css/anchor-positioning) *(joshwcomeau.com · 2026-07-07T00:00:00)*
  > There wasn’t any way to tell whether our target element was using its preferred position-area, or if it had switched to a fallback. We would need to use JavaScript to test whether our target is above/below the anchor, which feels like taking two step...
- [CSS Anchor Positioning Guide \| CSS-Tricks](https://css-tricks.com/css-anchor-positioning-guide) *(css-tricks.com · 2026-06-04T16:36:22)*
  > The next step is positioning our target relative to its anchor. The easiest way is to use the position-area property, which <strong>creates an imaginary 3×3 grid around the anchor element and lets us place the target in one or more regions of the gri...
- [Anchor positioning \| web.dev](https://web.dev/learn/css/anchor-positioning) *(web.dev)*
  > CSS anchor positioning has a built-in system that <strong>allows you quickly build a robust set of fallbacks when your positioned element ends up outside of its containing block</strong>. The position-try-fallbacks rule takes a list of fallback optio...
- [A gentle introduction to anchor positioning \| WebKit](https://webkit.org/blog/17240/a-gentle-introduction-to-anchor-positioning) *(webkit.org · 2025-08-21T16:17:49)*
  > .profile-menu { position-anchor: --profile-button; position: absolute; position-area: top right; } But here’s the thing about top right — it might feel like an intuitive way to describe where you want your target to be placed, but it’s actually not t...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [csswg-drafts/css-anchor-position-1/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-anchor-position-1/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-anchor-position-1/#position-anchor`)*
  > Shortname: css-anchor-position · Level: 1 · Status: ED · Group: csswg · Work Status: refining · ED: https://<strong>drafts.csswg.org/css-anchor-position-1</strong>/ TR: https://www.w3.org/TR/css-anchor-position-1/ Editor: Tab Atkins-Bittner...
- [\[css-anchor-position-1\] Missing description of the \`position-area\` values \`span-left\` and \`span-right\` · Issue #12751 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12751) *(github.com · 2025-09-08T15:00:29)* *(Cites: `https://drafts.csswg.org/css-anchor-position-1/#position-anchor`)*
  > This is presumably a simple editorial fix: See https://<strong>drafts.csswg.org/css-anchor-position-1</strong>/#position-area-syntax The syntax for position-area values includes span-left and span-right keywords, b...
- [CSS Anchor Positioning Module Level 1](https://www.w3.org/TR/css-anchor-position-1) *(w3.org · 2026-03-27T00:00:00)* *(Cites: `https://drafts.csswg.org/css-anchor-position-1/#position-anchor`)*
  > W3C Working Draft, 27 March 2026 · <strong>This specification defines anchor positioning, where a positioned element can size and position itself relative to one or more “anchor elements” elsewhere on the page</strong>
- [\[css-anchor-position-1\] Improve accessibility guidance · Issue #10311 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/10311) *(github.com · 2024-05-12T22:51:13)* *(Cites: `https://drafts.csswg.org/css-anchor-position-1/#position-anchor`)*
  > The description here: https://<strong>drafts.csswg.org/css-anchor-position-1</strong>/#accessibility spends several paragraphs saying 3 useful things: Anchor positioning doesn&#x27;t affect non-visual UAs, so don&#x27;t rely on it to create...
- [\[css-anchor-position-1\] Allowing to explicitly define the containing block for inset-area · Issue #9662 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/9662) *(github.com · 2023-11-30T00:00:00)* *(Cites: `https://drafts.csswg.org/css-anchor-position-1/#position-anchor`)*
  > This might clash slightly with reparenting, but I think it might be worth it making a part of anchor positioning (probably just using some other anchor name for the containing block? Similar to how there is now specified fallback bounds whi...
- [\[css-anchor-position-1\] Better reusability of anchor names · Issue #9045 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/9045) *(github.com · 2023-07-08T11:00:46)* *(Cites: `https://drafts.csswg.org/css-anchor-position-1/#position-anchor`)*
  > Spec: https://drafts.csswg.org/css-anchor-position-1/ <strong>The anchor name is currently defined to be a tree scoped reference (i. e. unique for the entire document).</strong> This makes it difficult to reuse. Fo...
- [\[css-anchor-position\] Which writing-mode is used for position-try-order ? · Issue #13076 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13076) *(github.com · 2025-11-06T21:27:33)* *(Cites: `https://drafts.csswg.org/css-anchor-position-1/#position-anchor`)*
  > We resolved to use the containers writing-mode for the position-try but I realized that we didn&#x27;t resolve on which writing-mode to use for the position-try-order property. https://<strong>drafts.csswg.org/css-anchor-position-1</strong>...
- [\[css-anchor-position-1\]\[css-position\] Add the “centering” behavior which is now defined as an example in the specs as something built-in · Issue #8979 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/8979) *(github.com · 2023-06-16T18:22:02)* *(Cites: `https://drafts.csswg.org/css-anchor-position-1/#position-anchor`)*
  > The example in the specs that describes using math functions for the anchors involves a rather complicated calculation: https://<strong>drafts.csswg.org/css-anchor-position-1</strong>/#example-a7ac0832 --center: anchor(--x 50%); --half-dist...

## 📚 Platform Documentation & Specifications

- [csswg-drafts/css-anchor-position-1/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-anchor-position-1/Overview.bs) *(github.com)*
- [\[css-anchor-position-1\] Missing description of the \`position-area\` values \`span-left\` and \`span-right\` · Issue #12751 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12751) *(github.com)*
- [CSS Anchor Positioning Module Level 1](https://www.w3.org/TR/css-anchor-position-1) *(w3.org)*
- [\[css-anchor-position-1\] Improve accessibility guidance · Issue #10311 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/10311) *(github.com)*
- [\[css-anchor-position-1\] Allowing to explicitly define the containing block for inset-area · Issue #9662 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/9662) *(github.com)*
- [\[css-anchor-position-1\] Better reusability of anchor names · Issue #9045 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/9045) *(github.com)*
- [\[css-anchor-position\] Which writing-mode is used for position-try-order ? · Issue #13076 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13076) *(github.com)*
- [\[css-anchor-position-1\]\[css-position\] Add the “centering” behavior which is now defined as an example in the specs as something built-in · Issue #8979 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/8979) *(github.com)*
- [position-anchor CSS property - CSS \| MDN](https://developer.mozilla.org/de/docs/Web/CSS/Reference/Properties/position-anchor) *(developer.mozilla.org)*
- [position-anchor CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position-anchor) *(developer.mozilla.org)*
- [Using CSS anchor positioning - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning/Using) *(developer.mozilla.org)*
- [position-anchor CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position-anchor) *(developer.mozilla.org)*
- [position-area CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position-area) *(developer.mozilla.org)*
- [initial-value CSS at-rule descriptor](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@property/initial-value) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 18 result(s) found across 7 planned queries — **18 verified relevant**
  - `"chromestatus.com/feature/5351959625334784" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"drafts.csswg.org/css-anchor-position-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Change the "position-anchor" initial value to "normal"" API` — *Core feature API query* (2 returned)
  - `"Change the "position-anchor" initial value to "normal"" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (0 returned)
  - `"position-anchor" OR "position-area" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Change the "position-anchor" initial value to "normal"" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (0 returned)
  - `"Change the "position-anchor" initial value to "normal"" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **12 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **1 verified relevant**
- **Web Platform Tests (wpt.fyi):** 526 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5351959625334784)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5351959625334784)
- [Specification](https://drafts.csswg.org/css-anchor-position-1/#position-anchor)
