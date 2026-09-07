# Comma-separated Container Queries

> **Report Week:** 2026-W37 | **Milestone:** Chrome 150 | **Category:** Enabled by default

## Overview

Support multiple queries per @container rule. The @container rule applies if at least one of the queries matches.

This makes it possible to have fallback queries for features which are not supported in all browsers, for instance.

Example:

@container --name1 not-supported(--foo: bar), --name2 (width > 600px) {}

Along with the support for multiple queries, the object model is extended to support the 'conditions' attribute on the CSSContainerRule API.

### Motivation

Catching up with the specification and improve interoperability (covered by Interop 2026)

## Ecosystem Status

- **Momentum:** High (360 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Comma-separated container queries bring `@container` rules into syntactic parity with `@media` query lists, allowing comma-delimited conditions that evaluate with logical OR semantics. Included as part of the Interop 2026 initiative, this feature enables clean feature-fallback queries and multi-breakpoint matching without stylesheet duplication. All major browser engines show strong positive consensus, with Firefox already shipping parsing and Chromium shipping by default in Chrome 150.

### Recommendations
- Actionable Advice: Teams should treat comma-separated container queries as a progressive enhancement, as older browsers will drop the entire rule block if they do not recognize the comma syntax. In production stylesheets, continue to use single container query declarations or `@supports` gates until Baseline availability stabilizes across all shipping browsers.
- Shipping enabled by default in Chrome 150. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Comma-separated @container queries](https://github.com/WebKit/standards-positions/issues/659) [open]

## Packages & Polyfills

- [@tailwindcss/container-queries](https://www.npmjs.com/package/@tailwindcss/container-queries) `v0.1.1` — A plugin for Tailwind CSS v3.2+ that provides utilities for container queries.

## 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH2cvcuHZRJ88Mb42LVfEZ5gHD5_0xF5qa2nlFnuKyCx-3op9t2nxqeotl-NMjEYjkKGw7BW_fSWBbC7AurRZpN4Zpap-Qvy4VgAj8MvaHSnezfPw2-JX_c1CGakQ0NqtHrdfF0K0YsnGpC5WCWww==) *(vertexaisearch.cloud.google.com)*
  > Comma-separated @container queries · Issue #659 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEMGpYPfziUzyCfWBeJp3ETVC5gN1bOL2BA9Spv26n5a1w8-LHp4AyEOQKSicBTJ1B8GVYhbo-edAkHPbyPuMi4PSi4Vv5jmaBeXF1YkeqXj6YCt8Q4KpDmdVuBhOhLE-HpSW_ZXuFj) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFaPQmeQHMzitD-2UglBW7hQDnpoOapXQGQp543iAyepZ8tuj2fZtWFdefC4kuKVYjAXn7aihuEgKaStpAhOP92cIgZUjuaaFAx-Fc4TDc3wiEhBqG_hvR-G4pKu0Zr9jVbFxm7FwNLZxh_SnAd0IAwPAzHSUPv-_hC5--WtR2_Ahsnp6YrUpdyYKp6) *(vertexaisearch.cloud.google.com)*
  > CSS container queries - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Guides Containment Container queries Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Español Français 日本語 中文 (简体) ...
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH6GJxTegOdmIfNEMpi0mSwaNwXSJpcQhukQ46S01R9VkrLjyeAOI_pvh753JuVz12XL73ljXMCKb-2wZjAQKH5oBGQ1usriK7rLc0KO9D-tzbUzctGMApxAhHxQqoFSaDDy0ym-72_JkHZ5UFxI9Z1B04f_495sz8n) *(vertexaisearch.cloud.google.com)*
  > Digging Deeper Into Container Style Queries | CSS-Tricks Skip to main content CSS-Tricks Since 2007 container-queries Digging Deeper Into Container Style Queries Geoff Graham on Dec 1, 2022 I wrote up some early thoughts on container style queries a ...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGKc0QhRB57gezPTMWtSHbWeLtfVxRjFKAuW_ZjYNMfzZKJZnslU446B8HYs-CLuagA3AbYEgkoPnjgvHn0yL_cQG2kc7ht686nWyYCPVejR95RDlyjiRflyowlhhOfkErSEmarnP__Lh3RPGwuGA3oZQAWrVXmwQ==) *(vertexaisearch.cloud.google.com)*
  > CSSContainerRule - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs CSSContainerRule Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) 日本語 CSSContainerRule Baseline Widely availab...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFgEIuAvTHJ6gDGQ0ZYkxHGqCi-YRBbd9DNCJttXnp4oM60kMKqWfUY3tf_HKN2UDWQUy0dbd7swORt4ewiWeKq60LuiLHeDHnbrbwtxPf6O-coLl50BtSQ8iwm_q_AHD1eHuoFoVxIsJ4CiV_rIiFkUCol-3Q0Adv1JUxw3OLZcNJU-KlHxBJfBsyuz4bPY5vOr0rX1dglyUDuCMTgX6c=) *(vertexaisearch.cloud.google.com)*
  > content/files/en-us/web/api/csscontainerrule/conditions/index.md at main · mdn/content · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload ...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF9SYoVMlY7J93tE_tAxjkY1ArCLflFxj2tO_tGKOC6NwGTmMViAlpoqgYCkY8D5pSOrZjDj__lXTH_GDjGT1j71Ukw8DprpDK08k_nAKf51xYi8JLoBpNykHxGthB-ofMzAtyyXFpkqvMydz5blJAv6ZiBYRZA1KgUE6wnPdzIcvWc1Ygm1A==) *(vertexaisearch.cloud.google.com)*
  > CSSContainerRule: containerQuery property - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs CSSContainerRule containerQuery Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) 日本語 ...
- [wpt.fyi](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE9wiNzI6gOPB01l5iDIFwpiY_n-8g5Wd77-gmSbhP0FXneECyQztRSe67PTw6UUFxEkBzcBss0L57NhSPdc1qPDcO_DYuI4_4e9nkuDgzTZqZbEy8PBjhQUXNa4Kc9ccbUVvrPNW4DMC_2c4-s8-jHUw3TzkvdeVW321xgbgA1eqLHXwSXyLV4FO29gdlxPABHjxV01G1Qp1CesmB-GYGu1nRCX1uyx_d-Dg==) *(vertexaisearch.cloud.google.com)*
  > web-platform-tests dashboard
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEgI4kSJJfuyjh8DcoeDUJwDcXgLtElr7M8fmnSyOYDmL349KlAqnlpoFMIsdJvhI_UXpd3Ad30rKA4UNqL7j5UnwKHfeNxq-U51uFGr1BZvkZXX7eLScjPcYN10nfBJ8miv4GMiCuonfvKq8GR-F6tZO8vJJ0tYh6qOjmwfiQAmeNbrms=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Comma-separated Container Queries** update the `@container` syntax (defined in [CSS Conditional Rules Module Level 5](https://drafts.csswg.org/css-conditional-5/#container-rule)) to allow multiple container conditions se
- [youtube.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGVkTDeeAgE_gmHPZBlERLPnxaowKRA0EhYxXk8aTF_tay4fz_AWPU_nxZ_xUUzE2KQQgfqX90BzK5omdPFfbhgCwS9mFKk9f83fUHeyfuhOnQf3s7QQUFrOw54f9D8bxFF) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Comma-separated Container Queries** update the `@container` syntax (defined in [CSS Conditional Rules Module Level 5](https://drafts.csswg.org/css-conditional-5/#container-rule)) to allow multiple container conditions se
- [Re: [blink-dev] Intent to Ship: Comma-separated Container Queries](http://www.mail-archive.com/blink-dev@chromium.org/msg16496.html) *(mail-archive.com)*
  > &gt;&gt; *No information provided* &gt;&gt; &gt;&gt; *Link to entry on the Chrome Platform Status* &gt;&gt; https://<strong>chromestatus.com/feature/6196591858941952</strong>?gate=4700445638524928 &gt;&gt; &gt;&gt; This intent message was generated b...
- [[blink-dev] Intent to Ship: Comma-separated Container Queries](http://www.mail-archive.com/blink-dev@chromium.org/msg16494.html) *(mail-archive.com)*
  > *No information provided* *Link to entry on the Chrome Platform Status* https://<strong>chromestatus.com/feature/6196591858941952</strong>?gate=4700445638524928 This intent message was generated by Chrome Platform Status &lt;https://chromestatus.com/...
- [CSS Conditional Rules Module Level 5](https://sideshowbarker.net/csswg-drafts/css-conditional) *(sideshowbarker.net)*
  > https://www.w3.org/TR/css-conditional-5/ Editor&#x27;s Draft: https://<strong>drafts.csswg.org/css-conditional-5</strong>/ History: https://www.w3.org/standards/history/css-conditional-5 · Feedback: CSSWG Issues Repository · Inline In Spec · Editors:...
- [Comma-separated Container Queries](https://chromestatus.com/feature/6196591858941952) *(chromestatus.com · 2026-05-06T00:00:00)*
  > We cannot provide a description for this page right now
- [A guide to CSS container queries - LogRocket Blog](https://blog.logrocket.com/css-container-queries-guide) *(blog.logrocket.com · 2024-06-04T20:59:07)*
  > In this article, we will learn what CSS container queries are and when to use them. We will also explore what media queries are and when to use those. Finally, we will look at the differences between container queries and media queries.
- [A Friendly Introduction to Container Queries • Josh W. Comeau](https://www.joshwcomeau.com/css/container-queries-introduction) *(joshwcomeau.com)*
  > It’s been a couple of years since container queries started landing in browsers… so why isn’t anyone using them? It turns out that container queries are kinda tricky; they’re not as straightforward as media queries. In this tutorial, we’ll break it a...
- [CSS Container Queries: A Practical Guide (2026) — Mantlr](https://mantlr.com/blog/css-container-queries-practical-guide-examples) *(mantlr.com · 2026-05-26T02:08:20)*
  > This guide provides three real-world component examples with full code — a responsive product card, an adaptive sidebar, and a resizable dashboard widget — plus the decision framework for when to use container queries versus media queries.
- [How to use container queries now | Blog | web.dev](https://web.dev/blog/how-to-use-container-queries-now) *(web.dev · 2024-07-25T00:00:00)*
  > A step-by-step guide showing how to use container queries with cross-browser fallbacks.
- [An Interactive Guide to CSS Container Queries](https://ishadeed.com/article/css-container-query-guide) *(ishadeed.com)*
  > Since we can’t query a container against itself, the container should be in a separate element.
- [Testing for comma-separated conditions (or) - CSS Video Tutorial | LinkedIn Learning, formerly Lynda.com](https://www.linkedin.com/learning/advanced-css-media-queries/testing-for-comma-separated-conditions-or) *(linkedin.com · 2020-08-17T00:00:00)*
  > <strong>You may list several conditions in a media query, separated by commas</strong>. If any one condition is true, then the contained styles will load.
- [MySQL: How to Use a Comma-Delimited String in SELECT NOT IN Clause (Plus Better Alternatives for Client-Side Control) — tutorialpedia.org](https://www.tutorialpedia.org/blog/mysql-select-in-clause-string-comma-delimited) *(tutorialpedia.org)*
  > In this blog, we’ll demystify ... you’re a beginner or an experienced developer, <strong>this guide will help you handle comma-separated values (CSV) in MySQL queries effectively</strong>....
- [CSS Container Queries Guide — design.dev](https://design.dev/guides/css-container-queries) *(design.dev · 2025-12-09T00:00:00)*
  > Master CSS Container Queries for component-based responsive design. Learn @container, container types, query units, and practical patterns.
- [html - css comma separated selectors do not work for form input:not(...) - Stack Overflow](https://stackoverflow.com/questions/8789774/css-comma-separated-selectors-do-not-work-for-form-inputnot) *(stackoverflow.com · 2012-01-09T00:00:00)*
  > If you want to combine both negations, ... context in comments. ... As I mention in this answer, <strong>you won&#x27;t be able to use commas with the :not() pseudo-class in level 3.</strong>...
- [html - Why do comma separated placeholder rules not get applied in css? - Stack Overflow](https://stackoverflow.com/questions/44971077/why-do-comma-separated-placeholder-rules-not-get-applied-in-css) *(stackoverflow.com · 2017-07-07T00:00:00)*
  > For a webkit type browser -webkit-input-placeholder is valid but -moz-placeholder is not, so it trashes the entire selector, and vise-versa for a geeko based browser. The solution is to <strong>separate browser specific selectors</strong>.
- [Forget tabs – the new war is commas versus spaces: Web heads urged by browser devs to embrace modern CSS • The Register](https://www.theregister.com/2020/04/24/no_comma_drama_css_devs) *(theregister.com · 2020-04-24T01:25:13)*
  > Modern monitors can display these colors but <strong>web developers can&#x27;t specify them in CSS using the traditional comma-separated syntax</strong>. In a post earlier this month, Lea Verou, a doctoral student in computer science at MIT and membe...
- [Detection | web.dev](https://web.dev/learn/pwa/detection) *(web.dev · 2024-09-18T00:00:00)*
  > You can also <strong>match multiple queries in the media query string using comma-separated conditions</strong>. You can also add a query parameter to your manifest&#x27;s start_url that you can capture with analytics to track stats about when, in wh...
- [CSS 2025 Container queries and style queries in real projects | by Valentyn Yakymenko | Medium](https://medium.com/@vyakymenko/css-2025-container-queries-and-style-queries-in-real-projects-c38af5a13aa2) *(medium.com · 2025-09-29T10:52:07)*
  > MDN: Container queries overview — https://developer.mozilla.org/docs/Web/CSS/CSS_container_queries ... If you adopt only one thing this quarter, make it this: move responsive logic into the component. Container and style queries make your UI more por...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: [blink-dev] Intent to Ship: Comma-separated Container Queries](http://www.mail-archive.com/blink-dev@chromium.org/msg16496.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6196591858941952`)*
  > &gt;&gt; *No information provided* &gt;&gt; &gt;&gt; *Link to entry on the Chrome Platform Status* &gt;&gt; https://<strong>chromestatus.com/feature/6196591858941952</strong>?gate=4700445638524928 &gt;&gt; &gt;&gt; This intent message was g...
- [[blink-dev] Intent to Ship: Comma-separated Container Queries](http://www.mail-archive.com/blink-dev@chromium.org/msg16494.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6196591858941952`)*
  > *No information provided* *Link to entry on the Chrome Platform Status* https://<strong>chromestatus.com/feature/6196591858941952</strong>?gate=4700445638524928 This intent message was generated by Chrome Platform Status &lt;https://chromes...
- [csswg-drafts/css-conditional-5/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-conditional-5/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-conditional-5/#container-rule`)*
  > Editor: L. David Baron, Mozilla ... 1438 · Abstract: This module contains the features of CSS · 	<strong>for conditional processing of parts of style sheets</strong>,...
- [[css-selector-?][css-conditional-?]bring conditionals on custom properties to selector system · Issue #10910 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/10910) *(github.com · 2024-09-17T00:00:00)* *(Cites: `https://drafts.csswg.org/css-conditional-5/#container-rule`)*
  > Proposal Currently we have The resolved proposal, if(), for inline conditions #10064 for one inline style value. The style query with container queries https://<strong>drafts.csswg.org/css-conditional-5</strong>/#style-container for all chi...
- [[csswg-drafts] [css-values-5][css-conditional-5] Security Concern: Accelerated Data Exfiltration with attr() and Style Query Ranges (#12410) from Munira via GitHub on 2025-06-27 (public-css-archive@w3.org from June 2025)](https://lists.w3.org/Archives/Public/public-css-archive/2025Jun/0898.html) *(lists.w3.org)* *(Cites: `https://drafts.csswg.org/css-conditional-5/#container-rule`)*
  > tursunova has just created a new issue for https://github.com/w3c/csswg-drafts: == [css-values-5][css-conditional-5] Security Concern: Accelerated Data Exfiltration with attr() and Style Query Ranges == The introduction of range syntax in s...
- [[css-conditional-5][css-color] Define `style()` color comparison in more precise terms · Issue #13157 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13157) *(github.com · 2025-11-25T22:33:17)* *(Cites: `https://drafts.csswg.org/css-conditional-5/#container-rule`)*
  > Closed Accepted by CSSWG ResolutionNeeds Testcase (WPT)css-color-5Color modificationColor modificationcss-conditional-5Current WorkCurrent Work · LeaVerou · opened · on Nov 25, 2025 · Issue body actions · https://<strong>drafts.csswg.org/cs...
- [CSS Conditional Rules Module Level 5](https://sideshowbarker.net/csswg-drafts/css-conditional) *(sideshowbarker.net)* *(Cites: `https://drafts.csswg.org/css-conditional-5/#container-rule`)*
  > https://www.w3.org/TR/css-conditional-5/ Editor&#x27;s Draft: https://<strong>drafts.csswg.org/css-conditional-5</strong>/ History: https://www.w3.org/standards/history/css-conditional-5 · Feedback: CSSWG Issues Repository · Inline In Spec ...
- [[css-conditional-5] Should `revert-*` evaluate to `unknown` instead of `false` in a style query? · Issue #12424 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12424) *(github.com · 2025-07-01T05:33:04)* *(Cites: `https://drafts.csswg.org/css-conditional-5/#container-rule`)*
  > https://drafts.csswg.org/css-conditional-5/#style-container <strong>Cascade-dependent keywords, such as revert and revert-layer, are invalid as values in a style feature, and cause the container style query to be false</strong>. But my unde...

## 📚 Platform Documentation & Specifications

- [csswg-drafts/css-conditional-5/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-conditional-5/Overview.bs) *(github.com)*
- [[css-selector-?][css-conditional-?]bring conditionals on custom properties to selector system · Issue #10910 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/10910) *(github.com)*
- [[csswg-drafts] [css-values-5][css-conditional-5] Security Concern: Accelerated Data Exfiltration with attr() and Style Query Ranges (#12410) from Munira via GitHub on 2025-06-27 (public-css-archive@w3.org from June 2025)](https://lists.w3.org/Archives/Public/public-css-archive/2025Jun/0898.html) *(lists.w3.org)*
- [[css-conditional-5][css-color] Define `style()` color comparison in more precise terms · Issue #13157 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13157) *(github.com)*
- [[css-conditional-5] Should `revert-*` evaluate to `unknown` instead of `false` in a style query? · Issue #12424 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12424) *(github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/143.md at main · MicrosoftDocs/edge-developer](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/143.md) *(github.com)*
- [CSS container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries) *(developer.mozilla.org)*
- [Using anchored container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries) *(developer.mozilla.org)*
- [Using container size and style queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 41 result(s) found across 7 planned queries — **23 verified relevant**
  - `"chromestatus.com/feature/6196591858941952" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"drafts.csswg.org/css-conditional-5" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (6 returned)
  - `"Comma-separated Container Queries" API` — *Core feature API query* (2 returned)
  - `"Comma-separated Container Queries" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"comma-separated" OR "not-supported" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Comma-separated Container Queries" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Comma-separated Container Queries" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 10 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 item(s) inspected
- **Engine Bug Trackers:** 2 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **1 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6196591858941952)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6196591858941952)
- [Specification](https://drafts.csswg.org/css-conditional-5/#container-rule)
- [Chromium Tracking Bug](https://crbug.com/41491726)
