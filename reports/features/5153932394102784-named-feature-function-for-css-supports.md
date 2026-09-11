# named-feature() function for CSS @supports

> **Report Week:** 2026-W37 | **Milestone:** Chrome 150 | **Category:** Enabled by default

## Overview

The named-feature() function allows CSS @supports rules to query for a small set of specific named features that are not possible to test for using other @supports mechanisms but which are considered highly valuable to test for.

### Motivation

Sometimes we add new features to CSS where two things are simultaneously true:  first, that CSS authors see high value in writing conditional styles for whether the feature is supported using @supports, and second, that the existing mechanisms in @supports don't provide a useful way to test for the feature.

This provides a way for us to give names to a small number of high-value features so that CSS authors can test for them in their style sheets.

We will ship initially with a single supported feature, identified by the anchor-position-follows-transforms keyword.

## Ecosystem Status

- **Momentum:** High (200 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** Introduced in CSS Conditional Rules Module Level 5, the `named-feature()` function for `@supports` solves a long-standing web styling limitation by enabling queries for specific browser capabilities and behavior changes—such as `anchor-position-follows-transforms`—that traditional property/value parsing cannot detect. The API launched enabled-by-default in Chrome and Edge 150, addressing critical gap-detection friction points in complex layout specifications. Cross-engine consensus is strong, with formal support from Mozilla and active implementation and prototyping underway in WebKit.

### Recommendations
- Actionable Advice: Teams utilizing modern layout features like CSS Anchor Positioning can safely begin using `@supports named-feature(...)` today as a progressive enhancement layer. Ensure non-supporting engines cleanly fall back via default fallback styling rules outside the `@supports` block until multi-engine Baseline status is achieved.
- Shipping enabled by default in Chrome 150. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @tuankiet65: "No position yet, but I've started prototyping here: https://bugs.webkit.org/show_bug.cgi?id=320705...."
- Standards Activity (Mozilla): Latest discussion from @emilio: "I agree with the general shape of this (in fact I think I was present when we resolved on this): https://github.com/w3c/csswg-drafts/issues/3559#issue..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [named-feature() function for CSS @supports](https://github.com/WebKit/standards-positions/issues/600) [open]
- **Mozilla:** [named-feature() function for CSS @supports](https://github.com/mozilla/standards-positions/issues/1340) [closed]
- **W3C TAG:** [Other Spec Review: named-feature() function for CSS @supports](https://github.com/w3ctag/design-reviews/issues/1186) [closed]

## 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHvtk7AMm5SROwkuzjuleebB29Cg2QJ08UGPO_QLHzXX586and0wQcKwxNHqW2k44q_u6ijhhRB4LlHY4Zc4x2f16TOyXWddvvfM4bvZo649LCm19kWW1DVisneljsqJ3l2f74TfCqM4vWBdQOdBA==) *(vertexaisearch.cloud.google.com)*
  > named-feature() function for CSS @supports · Issue #600 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to...
- [bram.us](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEfyBHDjckcehZIxijLzCMGLwG7suchki0uHkbMFl9MkT8u5RfLMugp_HaI0f0IP_YZCmxQle_ERoITWcC5wtlggkhoZmrIiQNLovbN_BvfVTc-yzAuTZhAKbVC2W2fbp543AwNgmzJzA_GLV6wLDW5LTe5EfC8D-fYly-EeGjhW7agxhm6EZ6xw6yyFtNTjgaJmwzbci1o0CeCzwWL) *(vertexaisearch.cloud.google.com)*
  > Feature Detecting “Undetectable” CSS Features with @supports named-feature() &#8211; Bram.us Skip to content Bram.us A rather geeky/technical weblog, est. 2001, by Bramus Feature Detecting “Undetectable” CSS Features with @supports named-feature() Po...
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGNDCdexx8yq9LdZw092RZPnVRAWbX8Md11NyGgX1L0ISKsDXGesS9zaWed6i_kNmFIntKroDgH9lqnKp89SFWw2I7P9g6FvOcVNn1nB9YBG8pxKS174ZVyB4fG66YyCIg=) *(vertexaisearch.cloud.google.com)*
  > What’s !important #18: <geolocation>, Syntax ::highlight()ing, named-feature(), and More | CSS-Tricks Skip to main content CSS-Tricks Since 2007 news What’s !important #18: <geolocation>, Syntax ::highlight()ing, named-feature(), and More Daniel Schw...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGVkFJnFIFHn6eem8OMUh8w9DUey4mZYnHzaJoz9-8MQxV2pBJKxqX6TIcLQ3nQPxwJsqwzCnS7B-aFjxz-Zct1fQNQwXyvBoWPK5KRAg20YzNUkFPTPMJsnct6xpl7OGKsdJaH9BiLl4qq4gFQfMgaND3WMWtq8zZ8wgAJc2zTgS0pFrY4JCM=) *(vertexaisearch.cloud.google.com)*
  > Intent to Ship: named-feature() function for CSS @supports Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: named-feature() function fo...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFZkfXUvqmSeEs1XU70AGThi-vbhmHfJnk_Y-KvcYahw-wjlRJIGgBZ2WF3hvfaZO2DD0bdA3JDOR2kS29_8c6Jasq4UTo5DjiRYkMEvY0zVXFtEzTjytInQGocuTqx6zAcmtuq) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The **`named-feature()`** function is a CSS feature detection mechanism introduced in **CSS Conditional Rules Module Level 5**.   Traditionally, `@supports` only validates whether a browser **parses** a given CSS property-value
- [web-standards.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG2vWPKvh5ys--Fzml56e0zHOr4-5NqxTEx5_XSmLxpayDj9D1NKcM9Scybu1fQNdcnRnHQst_hkCyZn1dtrx5aSReQanNZlrMQSe7QsmFBlwCZTkjBdYFmzPKbWY6dBLEnOyFKcaou3tdnq2K7BYEFarXRgQ==) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The **`named-feature()`** function is a CSS feature detection mechanism introduced in **CSS Conditional Rules Module Level 5**.   Traditionally, `@supports` only validates whether a browser **parses** a given CSS property-value
- [caniuse.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFaDl_k_2ZOqUXLGH7px4zdTUNn92qgIZIzc9t7Ni2IxzCS9FDQrQDEkHRVpVCcl27FHMvlFoPXHgFnRyaVB_0LpKAhOwY_R89UeUDdSuQ_qexF-G6cXSNiRPUGKueXeVEzuizopbmWw1nezvLwb-NZKg==) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The **`named-feature()`** function is a CSS feature detection mechanism introduced in **CSS Conditional Rules Module Level 5**.   Traditionally, `@supports` only validates whether a browser **parses** a given CSS property-value
- [zufrieden.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGiA-noWzWmQ-C0J8HVCAhB5-grvRnpDQIqtYtjyfL0ONSLRpxoXjeViPWBFs-4yvYAZCQXO75ZqsXiWQLd4KNanbQw_ZyNKGaSYOfaju9Z4rMo6CwViLVVh06Vv6CCCWbaUu7kSHg-TqoPBfC1bIRtc4B8pHZNZASa2k7ABwR9kGkoiQRebbP7IHm0s_E=) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The **`named-feature()`** function is a CSS feature detection mechanism introduced in **CSS Conditional Rules Module Level 5**.   Traditionally, `@supports` only validates whether a browser **parses** a given CSS property-value
- [implement named-feature() function for @supports [353715317] - Chromium](https://issues.chromium.org/issues/353715317) *(issues.chromium.org)*
  > Chromestatus: https://<strong>chromestatus.com/feature/5153932394102784</strong> Fixed: 353715317 I2S: https://groups.google.com/a/chromium.org/g/blink-dev/c/jRufi9adKY0/m/0xJTluPPBgAJ Change-Id: I87129f7536ac7ec2149794e398a8a87c003fec79 Reviewed-on:...
- [Re: [blink-dev] Intent to Ship: named-feature() function for CSS @supports](http://www.mail-archive.com/blink-dev@chromium.org/msg16654.html) *(mail-archive.com)*
  > &gt;&gt;&gt; *No information provided* &gt;&gt;&gt; &gt;&gt;&gt; *Link to entry on the Chrome Platform Status* &gt;&gt;&gt; https://<strong>chromestatus.com/feature/5153932394102784</strong>?gate=4891886507261952 &gt;&gt;&gt; &gt;&gt;&gt; *Links to p...
- [Re: [blink-dev] Intent to Ship: named-feature() function for CSS @supports](http://www.mail-archive.com/blink-dev@chromium.org/msg16645.html) *(mail-archive.com)*
  > &gt; LGTM1 &gt; &gt; Thanks &gt; &gt; On Wed, May 27, 2026 at 2:00 PM David Baron &lt;[email protected]&gt; wrote: &gt; &gt;&gt; *Contact emails* &gt;&gt; [email protected] &gt;&gt; &gt;&gt; *Explainer* &gt;&gt; &gt;&gt; https://<strong>github.com/w3...
- [[blink-dev] Intent to Ship: named-feature() function for CSS @supports](http://www.mail-archive.com/blink-dev@chromium.org/msg16635.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · [blink-dev] Intent to Ship: named-feature() function for CSS @supports · David Baron Wed, 27 May 2026 11:00:55 -0700 · *Contact emails* [email protected] *Explainer* https://<strong>github.com/w3c/csswg-drafts/...
- [[blink-dev] Intent to Prototype: named-feature() function for CSS @supports](http://www.mail-archive.com/blink-dev@chromium.org/msg15585.html) *(mail-archive.com)*
  > *Contact emails* [email protected] *Explainer* https://<strong>github.com/w3c/csswg-drafts/blob/main/css-conditional-5/named-feature-explainer.md</strong>
- [Feature Detecting “Undetectable” CSS Features with @supports named-feature()](https://www.bram.us/2026/08/27/feature-detecting-undetectable-css-features-with-supports-named-feature) *(bram.us)*
  > While you could already easily feature detect Anchor Positioning itself, you couldn’t detect if the browser respects transforms on the anchor. To solve this, you can now use the keyword that was resolved on in w3c/csswg-drafts#13678: anchor-position-...
- [[dev-platform] Intent to Prototype and Ship: named-feature() function for CSS @supports](http://www.mail-archive.com/dev-platform@mozilla.org/msg01865.html) *(mail-archive.com)*
  > Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=2042977 https://bugzilla.mozilla.org/show_bug.cgi?id=2055354 Specification: https://drafts.csswg.org/css-conditional-5/#support-definition-named-features https://drafts.csswg.org/css-conditional-5/#ty...
- [[dev-platform] Intent to Prototype: CSS anchor positioning with transforms](http://www.mail-archive.com/dev-platform@mozilla.org/msg01864.html) *(mail-archive.com)*
  > Authors will be able detect the feature with @supports named-feature(anchor-position-follows-transforms). Bug: [meta] https://bugzilla.mozilla.org/show_bug.cgi?id=1993692 Specification: https://drafts.csswg.org/css-anchor-position-1/#determining Stan...
- [named-feature() function for CSS @supports](https://chromestatus.com/feature/5153932394102784) *(chromestatus.com · 2024-08-16T00:00:00)*
  > We cannot provide a description for this page right now

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [implement named-feature() function for @supports [353715317] - Chromium](https://issues.chromium.org/issues/353715317) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5153932394102784`)*
  > Chromestatus: https://<strong>chromestatus.com/feature/5153932394102784</strong> Fixed: 353715317 I2S: https://groups.google.com/a/chromium.org/g/blink-dev/c/jRufi9adKY0/m/0xJTluPPBgAJ Change-Id: I87129f7536ac7ec2149794e398a8a87c003fec79 Re...
- [Re: [blink-dev] Intent to Ship: named-feature() function for CSS @supports](http://www.mail-archive.com/blink-dev@chromium.org/msg16654.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5153932394102784`)*
  > &gt;&gt;&gt; *No information provided* &gt;&gt;&gt; &gt;&gt;&gt; *Link to entry on the Chrome Platform Status* &gt;&gt;&gt; https://<strong>chromestatus.com/feature/5153932394102784</strong>?gate=4891886507261952 &gt;&gt;&gt; &gt;&gt;&gt; *...
- [named-feature() function for CSS @supports · Issue #600 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/600) *(github.com · 2026-01-15T16:06:22)* *(Cites: `https://chromestatus.com/feature/5153932394102784`)*
  > https://<strong>chromestatus.com/feature/5153932394102784</strong> · [css-conditional] testing support of properties and values with partial implementations w3c/csswg-drafts#3559 · [css-conditional] choose names for keyword-based feature qu...
- [named-feature() function for CSS @supports · Issue #1340 · mozilla/standards-positions GitHub](https://github.com/mozilla/standards-positions/issues/1340) *(github.com · 2026-01-15T16:38:10)* *(Cites: `https://chromestatus.com/feature/5153932394102784`)*
  > https://<strong>chromestatus.com/feature/5153932394102784</strong> · [css-conditional] testing support of properties and values with partial implementations w3c/csswg-drafts#3559 · [css-conditional] choose names for keyword-based feature qu...
- [Re: [blink-dev] Intent to Ship: named-feature() function for CSS @supports](http://www.mail-archive.com/blink-dev@chromium.org/msg16645.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/blob/main/css-conditional-5/named-feature-explainer.md`)*
  > &gt; LGTM1 &gt; &gt; Thanks &gt; &gt; On Wed, May 27, 2026 at 2:00 PM David Baron &lt;[email protected]&gt; wrote: &gt; &gt;&gt; *Contact emails* &gt;&gt; [email protected] &gt;&gt; &gt;&gt; *Explainer* &gt;&gt; &gt;&gt; https://<strong>git...
- [[blink-dev] Intent to Ship: named-feature() function for CSS @supports](http://www.mail-archive.com/blink-dev@chromium.org/msg16635.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/blob/main/css-conditional-5/named-feature-explainer.md`)*
  > Skip to site navigation (Press enter) · [blink-dev] Intent to Ship: named-feature() function for CSS @supports · David Baron Wed, 27 May 2026 11:00:55 -0700 · *Contact emails* [email protected] *Explainer* https://<strong>github.com/w3c/css...
- [[blink-dev] Intent to Prototype: named-feature() function for CSS @supports](http://www.mail-archive.com/blink-dev@chromium.org/msg15585.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/blob/main/css-conditional-5/named-feature-explainer.md`)*
  > *Contact emails* [email protected] *Explainer* https://<strong>github.com/w3c/csswg-drafts/blob/main/css-conditional-5/named-feature-explainer.md</strong>

## 📚 Platform Documentation & Specifications

- [named-feature() function for CSS @supports · Issue #600 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/600) *(github.com)*
- [named-feature() function for CSS @supports · Issue #1340 · mozilla/standards-positions GitHub](https://github.com/mozilla/standards-positions/issues/1340) *(github.com)*
- [[css-conditional] [css-position] Allow feature detection of `position: sticky` tracking the nearest scrolling container per axis. · Issue #13677 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13677) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 18 result(s) found across 7 planned queries — **12 verified relevant**
  - `"chromestatus.com/feature/5153932394102784" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"github.com/w3c/csswg-drafts/blob/main/css-conditional-5/named-feature-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"drafts.csswg.org/css-conditional-5" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (6 returned)
  - `"@supports" "named-feature(" css OR "anchor-position-follows-transforms"` — *Finds real-world CSS code snippets and usage examples of the @supports named-feature() syntax.* (5 returned)
  - `"named-feature()" "@supports" css (tutorial OR guide OR explainer OR overview)` — *Discovers developer blog posts and tutorials explaining the motivation and usage of named-feature queries in CSS.* (1 returned)
  - `"named-feature" "@supports" ("intent to ship" OR "intent to prototype" OR "Chromium" OR "WebKit" OR "Firefox")` — *Surfaces browser engine implementation status, Intent to Ship announcements, and release notes across major browsers.* (1 returned)
  - `"named-feature" "css-conditional-5" site:github.com/w3c/csswg-drafts/issues OR "anchor-position-follows-transforms"` — *Tracks CSSWG standards discussions, issue resolutions, and specification debates surrounding named-feature design.* (1 returned)
- **Google Search Grounding (gemini-3.7-flash):** 12 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 4 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5153932394102784)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5153932394102784)
- [Specification](https://drafts.csswg.org/css-conditional-5/#typedef-supports-named-feature-fn)
- [Chromium Tracking Bug](https://issues.chromium.org/353715317)
