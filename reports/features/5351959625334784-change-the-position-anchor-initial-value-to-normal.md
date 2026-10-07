# Change the "position-anchor" initial value to "normal"

> **Report Week:** 2026-W39 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

We are changing the initial value of the "position-anchor" CSS property from "none" to normal to align with other browsers and the specification.  "normal" behaves like "none" if the "position-area" CSS property is "none", otherwise behaves as "auto".

### Motivation

Aligns with the specification and other browsers.

## Ecosystem Status

- **Momentum:** High (330 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** The CSS Anchor Positioning Module Level 1 specification updated the initial value of \`position-anchor\` from \`none\` to \`normal\` (CSSWG Issue #13067), resolving to \`auto\` when \`position-area\` is set and \`none\` otherwise. Chromium has scheduled this default shift for Chrome 151 to align with Gecko and WebKit implementations. This change significantly reduces boilerplate when pairing popovers and elements with implicit anchors to layout declarations.

### Recommendations
- Actionable Advice: When utilizing \`position-area\` for popovers or elements with implicit anchor references, teams can safely omit redundant \`position-anchor\` declarations. For positioning via individual \`anchor()\` offset functions or legacy cross-browser fallback strategies, explicitly declare \`position-anchor: auto\` or provide named anchor targets to ensure consistent resolution across older engine builds.
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQErpkHkftz0J8gqEEQ-9Lor_G2teInhcdK5XdJciLIDt-U0KZIjthouczEg3I7tuEQ0Yyk1Z2gUYhqOq43Aq_tKMcg7uxvwjia8MgdYa-4XiJl7eWzEOf9kSxB0fdKYi9PHmAJ-Ksoy) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQESOqGom0ebPY0HUu2JKzLFHvHsuSikVSZsdJ97EuT2djDwQqwZQODng9WyLg0V_mY746le2TtlZjdvxnscatmfdniCAJ3fArRwbppcQSpw3HH3Ec3z_BhGFWbqBhzr47sucA==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Change  In the **CSS Anchor Positioning Module Level 1** specification, the initial (default) value of the `position-anchor` CSS property has been changed from `none` to **`normal`**.   The behavior of `normal` is conditional: * *
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGHrfA3a_EvmaEgrsMAJrqzodi1gvELmEILEqvKizDSHeRPtVemG5DEy1u-11uT-z1bHFmo24mmplrkBahrdaFD7RYRvuD3haH7NydAJWtI1a-0Bmg8GGRgy_KzZ5aG2OTBVoIhXUWmLk_CpcobJJPDcN1ViASXe1RisYZmp7UCsG6KJw8fcW7nUnsA) *(vertexaisearch.cloud.google.com)*
  > position-anchor CSS property - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Properties position-anchor Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 position-...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEcBlXmJli1jhwP61bLg9zu2lzJvndL2x-cFk8akQSsc-mmkoc6BU-b3Joo1Mo89lXQodbr0S1v7FBS5a5bkPYVgLyZVvtGlUUTiHBBC4RyGt5kh2VfkyfGoyOhtB62_BKpwP-oKX_229FH23NgnKhhDXofp_mtddNjhQ==) *(vertexaisearch.cloud.google.com)*
  > Intent to Prototype & Ship: `position-anchor: normal` Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype & Ship: `position-anchor: no...
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGK7pkbgaNlNDx7etM1bJDMmRfcyZ56lrdQZyZM6RJt7OU0dGgf-_MNjFgzax_ugnb1qI9cKyFtc6UgL_Q3YinJfTX9YXPHFUrtIoq5TxG244YrQY0P21rQMnF4isViqa3VWEGWG9dwM3Vu_4fkrIbvjFA=) *(vertexaisearch.cloud.google.com)*
  > position-anchor | CSS-Tricks Skip to main content CSS-Tricks Since 2007 anchor positioning CSS Almanac &rarr; Properties &rarr; P &rarr; position-anchor position-anchor Juan Diego Rodríguez on Aug 5, 2024 Experimental: Check browser support before us...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGcYh0godaqGm-goFVOZOU61gXX7ToxNCVK-kAhORoi4CYpXx9YhFOBF0vpCcDvml54eylx9CmldlC5Tcz1s0V2n3Rg9QNC7ObVTEf4eQzqff0TYOQdBdbBN0fPUYQyBShiojXlCBZhR5uCL22IStbiNse-WUw=) *(vertexaisearch.cloud.google.com)*
  > CSS 앵커 배치 API | CSS and UI | Chrome for Developers 기본 콘텐츠로 건너뛰기 / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF0yQ1vdx4-sRgwCJwOXhWMbT0nOjcCYomDs_03__GjJlD6vRcskdQa02c-mlA8dDwUOXt72gSA0QYuXhHrjeLMGK9ZMDL-rqqjjhDDgr2NhdlfqGP_HebbYfe6tjpJ6qKEAf6uL7JpeBJtEaaLSMaRv4yx-5U4WbmCXJldaRZ1_3cuAfcHEgiLHg==) *(vertexaisearch.cloud.google.com)*
  > position-area CSS property - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Properties position-area Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 position-area...
- [web.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHAiCMFEOqvEP6araxtHG4wJhBC8DzMUGV5dqufWfmNxcajspSRVIb6EKnyV_vhHeVPkRXaotzq_CnvtiC8ZXWmVHgcgoOtQBSM1DCQL0s8prLL9-c2fjxHUJuCKy3fbYYIbw==) *(vertexaisearch.cloud.google.com)*
  > Bağlayıcı konumlandırma | web.dev Ana içeriğe atla / English Deutsch Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Oturum aç...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHruxx2vIdG9iz4vF86fu_VOI1Wi4unqMVeU3ilupPh9Uq5D-a-wSdvegvlzbVsyyC6_ss2MfCLm5MHEs98bIm0RohPgPPSu0phDHjsBoXZUu9db0EEhqUKHIF_3LBbXDNfOdlm-HzyXT2KYATT0Q==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Change  In the **CSS Anchor Positioning Module Level 1** specification, the initial (default) value of the `position-anchor` CSS property has been changed from `none` to **`normal`**.   The behavior of `normal` is conditional: * *
- [webkit.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGLVcbrryxsCKtrPe-t5Cq76Y694Hq8bs9QiMvk1kcym6_xCa1wkFNK4iDxQuzzDbqW_umLb5xceXG9lAjkmlr5AgoYiJd3EMp0Ma5RyDbniPekYzoq624jnmLX3HDiNDPuBx7XjQM78M0EEy7fbEiVgKUpk-V7064cBAyn86pW9w==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Change  In the **CSS Anchor Positioning Module Level 1** specification, the initial (default) value of the `position-anchor` CSS property has been changed from `none` to **`normal`**.   The behavior of `normal` is conditional: * *
- [joshwcomeau.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFLgMNhNkeH2NHbg4duraOa1_PmAVhoK42EQ7tgebNYdbnSQeQEjIxSNG2pgHt1V2eovOhMhLReCaS9LwhtLcYwmjSopvRkJAgONVbiYVoe7oAmrl1gXA7sdWyQSVMiPoY4gAbRb0LUa7g=) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Change  In the **CSS Anchor Positioning Module Level 1** specification, the initial (default) value of the `position-anchor` CSS property has been changed from `none` to **`normal`**.   The behavior of `normal` is conditional: * *
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF_B8NWax63TPRML17zjSktrp4tM631XO3QSpknHxrhQ-q4VkiNlSL3Hmlx4zNZ3VG_ytNFvzLMhDbL2BzUWsZDGNgFD8WtArhiAIl6-_Cqwy_A3LXfGebG5597mIsy79Ocv91MUIFemwvbJHk=) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Change  In the **CSS Anchor Positioning Module Level 1** specification, the initial (default) value of the `position-anchor` CSS property has been changed from `none` to **`normal`**.   The behavior of `normal` is conditional: * *
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG0fWXeaT-b9zAbcEbgSZnGBBLL90jKt--dtTCM8LUP3kuXM1ljVsP304n6Rc4z9Aw_9N86Uqaqmyexf_dW6rKcCK67SrZFQ00C1hyhf977ndulMv9I-gc2loe-1v-iiugA6Q==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Change  In the **CSS Anchor Positioning Module Level 1** specification, the initial (default) value of the `position-anchor` CSS property has been changed from `none` to **`normal`**.   The behavior of `normal` is conditional: * *
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFjftwvjk24-qZUSbkWAyI64ivh2yc3GYKJ3BczfR2hx0c_8iQuMsGy2AsiIXNgXC3jmjUEQKWvKzG4gtdLLtXZyT8LMatgBuTpZrUHZFpb9Z0pc4HYFbWR9dUGUcXEChofZYD-iuh-Wk9ORZ522yqzOw==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Change  In the **CSS Anchor Positioning Module Level 1** specification, the initial (default) value of the `position-anchor` CSS property has been changed from `none` to **`normal`**.   The behavior of `normal` is conditional: * *
- [\[blink-dev\] Web-Facing Change PSA: Change the "position-anchor" initial value to "normal"](http://www.mail-archive.com/blink-dev@chromium.org/msg16707.html) *(mail-archive.com)*
  > Specification https://drafts.c... to normal to align with other browsers and the specification. <strong>&quot;normal&quot; behaves like &quot;none&quot; if the &quot;position-area&quot; CSS property is &quot;none&quot;, otherwise behaves as &quot;aut...
- [CSS Anchor Positioning Guide \| CSS-Tricks](https://css-tricks.com/css-anchor-positioning-guide) *(css-tricks.com · 2026-06-04T16:36:22)*
  > The next step is positioning our target relative to its anchor. The easiest way is to use the position-area property, which <strong>creates an imaginary 3×3 grid around the anchor element and lets us place the target in one or more regions of the gri...
- [Getting Started with Anchor Positioning • Josh W. Comeau](https://www.joshwcomeau.com/css/anchor-positioning) *(joshwcomeau.com · 2026-07-07T00:00:00)*
  > There wasn’t any way to tell whether our target element was using its preferred position-area, or if it had switched to a fallback. We would need to use JavaScript to test whether our target is above/below the anchor, which feels like taking two step...
- [Anchor positioning \| web.dev](https://web.dev/learn/css/anchor-positioning) *(web.dev)*
  > CSS anchor positioning has a built-in system that <strong>allows you quickly build a robust set of fallbacks when your positioned element ends up outside of its containing block</strong>. The position-try-fallbacks rule takes a list of fallback optio...
- [The CSS anchor positioning API \| CSS and UI \| Chrome for Developers](https://developer.chrome.com/docs/css-ui/anchor-positioning-api) *(developer.chrome.com · 2024-10-04T00:00:00)*
  > <strong>This property lets you place anchor positioned elements relative to their respective anchors</strong>, and works on a 9-cell grid with the anchoring element in the center. To use position-area rather than absolute positioning, use the positio...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [csswg-drafts/css-anchor-position-1/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-anchor-position-1/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-anchor-position-1/#position-anchor`)*
  > Shortname: css-anchor-position · Level: 1 · Status: ED · Group: csswg · Work Status: refining · ED: https://<strong>drafts.csswg.org/css-anchor-position-1</strong>/ TR: https://www.w3.org/TR/css-anchor-position-1/ Editor: Tab Atkins-Bittner...
- [CSS Anchor Positioning Module Level 1](https://www.w3.org/TR/css-anchor-position-1) *(w3.org · 2026-03-27T00:00:00)* *(Cites: `https://drafts.csswg.org/css-anchor-position-1/#position-anchor`)*
  > W3C Working Draft, 27 March 2026 · <strong>This specification defines anchor positioning, where a positioned element can size and position itself relative to one or more “anchor elements” elsewhere on the page</strong>
- [\[css-anchor-position-1\] Missing description of the \`position-area\` values \`span-left\` and \`span-right\` · Issue #12751 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12751) *(github.com · 2025-09-08T15:00:29)* *(Cites: `https://drafts.csswg.org/css-anchor-position-1/#position-anchor`)*
  > This is presumably a simple editorial fix: See https://<strong>drafts.csswg.org/css-anchor-position-1</strong>/#position-area-syntax The syntax for position-area values includes span-left and span-right keywords, b...
- [\[css-anchor-position-1\] Improve accessibility guidance · Issue #10311 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/10311) *(github.com · 2024-05-12T22:51:13)* *(Cites: `https://drafts.csswg.org/css-anchor-position-1/#position-anchor`)*
  > The description here: https://<strong>drafts.csswg.org/css-anchor-position-1</strong>/#accessibility spends several paragraphs saying 3 useful things: Anchor positioning doesn&#x27;t affect non-visual UAs, so don&#x27;t rely on it to create...
- [\[css-anchor-position-1\] Allowing to explicitly define the containing block for inset-area · Issue #9662 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/9662) *(github.com · 2023-11-30T00:00:00)* *(Cites: `https://drafts.csswg.org/css-anchor-position-1/#position-anchor`)*
  > This might clash slightly with reparenting, but I think it might be worth it making a part of anchor positioning (probably just using some other anchor name for the containing block? Similar to how there is now specified fallback bounds whi...
- [\[css-anchor-position-1\] Better reusability of anchor names · Issue #9045 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/9045) *(github.com · 2023-07-08T11:00:46)* *(Cites: `https://drafts.csswg.org/css-anchor-position-1/#position-anchor`)*
  > Spec: https://drafts.csswg.org/css-anchor-position-1/ <strong>The anchor name is currently defined to be a tree scoped reference (i. e. unique for the entire document).</strong> This makes it difficult to reuse. Fo...
- [\[css-anchor-position\] Which writing-mode is used for position-try-order ? · Issue #13076 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13076) *(github.com · 2025-11-06T21:27:33)* *(Cites: `https://drafts.csswg.org/css-anchor-position-1/#position-anchor`)*
  > We resolved to use the containers writing-mode for the position-try but I realized that we didn&#x27;t resolve on which writing-mode to use for the position-try-order property. https://<strong>drafts.csswg.org/css-anchor-position-1</strong>...
- [\[css-anchor-position\] fallback-position behavior: spec vs. expectation · Issue #12682 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12682) *(github.com · 2025-08-29T17:19:31)* *(Cites: `https://drafts.csswg.org/css-anchor-position-1/#position-anchor`)*
  > I put up a quick Mastodon poll, and people who saw it and voted preferred the Safari behavior by about 5:1 (but make sure to read the replies, which contain arguments in favor each behavior). It’s also what the Oddbird anchoring polyfill do...

## 📚 Platform Documentation & Specifications

- [csswg-drafts/css-anchor-position-1/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-anchor-position-1/Overview.bs) *(github.com)*
- [CSS Anchor Positioning Module Level 1](https://www.w3.org/TR/css-anchor-position-1) *(w3.org)*
- [\[css-anchor-position-1\] Missing description of the \`position-area\` values \`span-left\` and \`span-right\` · Issue #12751 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12751) *(github.com)*
- [\[css-anchor-position-1\] Improve accessibility guidance · Issue #10311 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/10311) *(github.com)*
- [\[css-anchor-position-1\] Allowing to explicitly define the containing block for inset-area · Issue #9662 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/9662) *(github.com)*
- [\[css-anchor-position-1\] Better reusability of anchor names · Issue #9045 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/9045) *(github.com)*
- [\[css-anchor-position\] Which writing-mode is used for position-try-order ? · Issue #13076 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13076) *(github.com)*
- [\[css-anchor-position\] fallback-position behavior: spec vs. expectation · Issue #12682 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12682) *(github.com)*
- [position-anchor CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/de/docs/Web/CSS/Reference/Properties/position-anchor) *(developer.mozilla.org)*
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
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **14 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
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
