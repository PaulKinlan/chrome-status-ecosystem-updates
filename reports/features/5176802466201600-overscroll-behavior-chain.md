# overscroll-behavior: chain

> **Report Week:** 2026-W37 | **Milestone:** Chrome 150 | **Category:** Enabled by default

## Overview

overscroll-behavior currently has 3 values: none, auto, and contain. These values affect 2 independent effects: scroll propagation and local border effect (e.g. overscroll stretch).

none: no propagation, no local effect
auto: propagation, local effect
contain: no propagation, local effect

This feature tracks a new value to complete the set:
chain: propagation, no local effect

This is useful for effects like side menus implemented as scrollers. We want to bring the menu in and when it hits the edge it doesn't overscroll (stretch/translate). However, it would then allow scroll chaining to the ancestor.

Initial proposal:
https://github.com/w3c/csswg-drafts/issues/13370

### Motivation

This feature is useful for effects like side menus implemented as scrollers. We want to bring the menu in and when it hits the edge it doesn't overscroll (stretch/translate). However, it would then allow scroll chaining to the ancestor.

There may be other effects that want to prevent overscroll effects but allow chaning

## Ecosystem Status

- **Momentum:** High (332 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** overscroll-behavior: chain is currently Enabled by default in Chrome 150. Verified ecosystem momentum is High with Chromium-Led standards alignment and neutral developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 150. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "We could call this proposed positive then. I agree :)..."
- Standards Activity (W3C TAG): Latest discussion from @lolaodelola: "Hi @vmpstr,  Thank you for opening this review and apologies for the delay in getting back to you. We can see the benefit of this value for web author..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "You can prevent scroll chaining with CSS overscroll-behavior: contain" (1 points, 0 comments).

## Standards Positions

- **WebKit:** [overscroll-behavior: chain](https://github.com/WebKit/standards-positions/issues/661) [open]
- **Mozilla:** [overscroll-behavior: chain](https://github.com/mozilla/standards-positions/issues/1406) [closed]
- **W3C TAG:** [Other Spec Review: overscroll-behavior: chain](https://github.com/w3ctag/design-reviews/issues/1228) [closed]

## Community Discussions & Social Pulse

- 💬 **Hacker News:** [You can prevent scroll chaining with CSS overscroll-behavior: contain](https://news.ycombinator.com/item?id=19139576) — *1 pts, 0 comments*

## 📰 Ecosystem Blogs & Articles

- [You can prevent scroll chaining with CSS overscroll-behavior: contain](https://webplatform.news/issues/2019-02-11) *(webplatform.news · 2019-02-11T23:31:05Z)*
  > Web Platform News ⚠️ This website requires JavaScript to render.
- [Implement overscroll-behavior: chain [499018879] - Chromium](https://issues.chromium.org/issues/499018879) *(issues.chromium.org)*
  > Chromium Sign in
- [[blink-dev] Intent to Ship: overscroll-behavior: chain](http://www.mail-archive.com/blink-dev@chromium.org/msg16503.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: overscroll-behavior: chain Skip to site navigation (Press enter) [blink-dev] Intent to Ship: overscroll-behavior: chain Chromestatus Mon, 11 May 2026 11:58:19 -0700 Contact emails [email&#160;protected] Explainer https://g...
- [Re: [blink-dev] Re: Intent to Ship: overscroll-behavior: chain](http://www.mail-archive.com/blink-dev@chromium.org/msg16529.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: overscroll-behavior: chain Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: overscroll-behavior: chain Mike Taylor Wed, 13 May 2026 10:43:37 -0700 LGTM3 On 5/13/26 8:17 a.m., Chris Harrelso...
- [[blink-dev] Re: Intent to Ship: overscroll-behavior: chain](http://www.mail-archive.com/blink-dev@chromium.org/msg16526.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: overscroll-behavior: chain Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: overscroll-behavior: chain Alex Russell Wed, 13 May 2026 08:17:03 -0700 LGTM1 On Monday, May 11, 2026 at 11:58:26 AM UTC-...
- [Take control of your scroll - customizing pull-to-refresh and overflow effects | Blog | Chrome for Developers](https://developer.chrome.com/blog/overscroll-behavior) *(developer.chrome.com · 2017-11-14T00:00:00)*
  > Take control of your scroll - customizing pull-to-refresh and overflow effects | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việ...
- [overscroll-behavior demo](https://mdn.github.io/css-examples/overscroll-behavior) *(mdn.github.io)*
  > Bob: I am well — how are you · Chris: Fine thanks, just documenting overscroll-behavior
- [Declarative Overscroll Actions (Explainer) | Open UI](https://open-ui.org/components/overscroll-actions.explainer) *(open-ui.org · 2026-02-13T00:00:00)*
  > Chaining: <strong>When a user scrolls #container to its limit, the scroll chains to the #menu, pulling it into view</strong>. Activation: As an alternative to scroll gestures, activating the &lt;button&gt; will perform a scrollIntoView-like action on...
- [CSS overscroll-behavior Property - CSS Portal](https://www.cssportal.com/css-properties/overscroll-behavior.php) *(cssportal.com)*
  > noneNo scroll chaining occurs to neighboring scrolling areas, and default scroll overflow behavior is prevented. autoThe default scroll overflow behavior occurs as normal. ... &lt;div class=&#x27;page&#x27;&gt; &lt;header class=&#x27;header&#x27;&gt;...
- [CSS - overscroll-behavior](https://www.tutorialspoint.com/css/css_overscroll-behavior.htm) *(tutorialspoint.com)*
  > All non-replaced block-level elements and non-replaced inline-block elements. <strong>overscroll-behavior = [ contain | auto | none ]{1,2}</strong> Following example demonstrates the use of overscroll-behavior: auto that sets the scroll effect contin...
- [CodePen Embed - Overscroll-behavior demo](https://codepen.io/guivr/embed/xxVpzRM?height=500&theme-id=dark&default-tab=result&user=guivr&slug-hash=xxVpzRM&pen-title=Overscroll-behavior+demo&name=cp_embed_1) *(codepen.io)*
  > &lt;h1&gt;overscroll-behavior demo&lt;/h1&gt; &lt;p&gt;<strong>Use the CSS property `overscroll-behavior: contain` to stop element from scroll-chaining</strong>.&lt;/p&gt; &lt;p&gt;Blog post: &lt;a href=&quot;https://getcssscan.com/blog/prevent-page-...
- [overscroll-behavior-x demo](https://codepen.io/chou07/pen/eYBRYab) *(codepen.io)*
  > &lt;h1&gt;overscroll-behavior-x demo&lt;/h1&gt; &lt;main&gt; &lt;div&gt; &lt;div&gt; &lt;p&gt;&lt;code&gt;<strong>overscroll-behavior-x&lt;/code&gt; has been used to make it so that when the scroll boundaries of the inner box are reached, the whole p...
- [[dev-platform] Intent to prototype and ship: CSS overscroll-behavior value, "chain"](http://www.mail-archive.com/dev-platform@mozilla.org/msg01886.html) *(mail-archive.com)*
  > Summary: <strong>Add a value, &quot;chain&quot;, to overscroll-behavior property</strong>. This is a value which disables local boundary default actions, while allowing non-local ones. In short, it can be said as the inversion of &quot;contain&quot; ...
- [Re: [blink-dev] Re: Intent to Ship: overscroll-behavior: chain](http://www.mail-archive.com/blink-dev@chromium.org/msg16527.html) *(mail-archive.com)*
  > There may be other effects that want to prevent &gt;&gt; overscroll effects but allow chaning &gt;&gt; &gt;&gt; *Initial public proposal* &gt;&gt; https://github.com/w3c/csswg-drafts/issues/13370 &gt;&gt; &gt;&gt; *TAG review* &gt;&gt; https://github...
- [179266 – Add support for "overscroll-behavior" (aka scroll chaining)](https://bugs.webkit.org/show_bug.cgi?id=179266) *(bugs.webkit.org · 2020-08-24T00:00:00)*
  > WebKit Bugzilla · Browse · Log In · Top of Page · Format For Printing · Clone This Bug · Reports · Requests
- [Intent to Ship: Respect overscroll-behavior on non-scrollable scroll containers](https://groups.google.com/a/chromium.org/g/blink-dev/c/OSq1yVSSdDE/m/fq8a7frQAAAJ) *(groups.google.com)*
  > However, until this happens there ... set overscroll-behavior on elements which don&#x27;t currently apply today (either overflow: auto or not having overflow) and will start applying, or that developers will rely on this behavior and have accidental...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Implement overscroll-behavior: chain [499018879] - Chromium](https://issues.chromium.org/issues/499018879) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5176802466201600`)*
  > Chromium Sign in
- [[blink-dev] Intent to Ship: overscroll-behavior: chain](http://www.mail-archive.com/blink-dev@chromium.org/msg16503.html) *(mail-archive.com)* *(Cites: `https://github.com/vmpstr/htmldemos/blob/master/gestures/overscroll-behavior-chain.md`)*
  > [blink-dev] Intent to Ship: overscroll-behavior: chain Skip to site navigation (Press enter) [blink-dev] Intent to Ship: overscroll-behavior: chain Chromestatus Mon, 11 May 2026 11:58:19 -0700 Contact emails [email&#160;protected] Explainer...
- [Re: [blink-dev] Re: Intent to Ship: overscroll-behavior: chain](http://www.mail-archive.com/blink-dev@chromium.org/msg16529.html) *(mail-archive.com)* *(Cites: `https://github.com/vmpstr/htmldemos/blob/master/gestures/overscroll-behavior-chain.md`)*
  > Re: [blink-dev] Re: Intent to Ship: overscroll-behavior: chain Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: overscroll-behavior: chain Mike Taylor Wed, 13 May 2026 10:43:37 -0700 LGTM3 On 5/13/26 8:17 a.m., Chri...
- [[blink-dev] Re: Intent to Ship: overscroll-behavior: chain](http://www.mail-archive.com/blink-dev@chromium.org/msg16526.html) *(mail-archive.com)* *(Cites: `https://github.com/vmpstr/htmldemos/blob/master/gestures/overscroll-behavior-chain.md`)*
  > [blink-dev] Re: Intent to Ship: overscroll-behavior: chain Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: overscroll-behavior: chain Alex Russell Wed, 13 May 2026 08:17:03 -0700 LGTM1 On Monday, May 11, 2026 at 11:58:...
- [csswg-drafts/css-overscroll-1/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overscroll-1/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-overscroll-1/#propdef-overscroll-behavior`)*
  > csswg-drafts/css-overscroll-1/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refre...
- [CSS Overscroll Behavior Module Level 1](https://www.w3.org/TR/css-overscroll-1) *(w3.org · 2019-06-06T00:00:00)* *(Cites: `https://drafts.csswg.org/css-overscroll-1/#propdef-overscroll-behavior`)*
  > https://www.w3.org/TR/css-overscroll-1/ ... Editor · Issue Tracking: GitHub Issues · <strong>This module defines overscroll-behavior to control the behavior when the scroll position of a scroll container reaches the edge of the scrollport</...

## 📚 Platform Documentation & Specifications

- [csswg-drafts/css-overscroll-1/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overscroll-1/Overview.bs) *(github.com)*
- [CSS Overscroll Behavior Module Level 1](https://www.w3.org/TR/css-overscroll-1) *(w3.org)*
- [overscroll-behavior-block CSS property - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-block) *(developer.mozilla.org)*
- [content/files/en-us/web/css/overscroll-behavior/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/css/overscroll-behavior/index.md?plain=1) *(github.com)*
- [Guide users towards "overscroll-behavior" CSS property in docs · floating-ui/floating-ui · Discussion #3370](https://github.com/floating-ui/floating-ui/discussions/3370) *(github.com)*
- [GitHub - WICG/overscroll-behavior: CSS property to control scroll chaining · GitHub](https://github.com/WICG/overscroll-behavior) *(github.com)*
- [overscroll-scrollend-events/index.html at gh-pages · WICG/overscroll-scrollend-events](https://github.com/WICG/overscroll-scrollend-events/blob/gh-pages/index.html) *(github.com)*
- [content/files/en-us/web/css/reference/properties/overscroll-behavior-y/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/css/reference/properties/overscroll-behavior-y/index.md?plain=1) *(github.com)*
- [developer.chrome.com/site/en/blog/overscroll-behavior/index.md at main · GoogleChrome/developer.chrome.com](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/blog/overscroll-behavior/index.md) *(github.com)*
- [Elastic overscroll bounces the whole window (sidebar + top bar) on Windows (WebView2) · Issue #177 · martinkoutecky/tine](https://github.com/martinkoutecky/tine/issues/177) *(github.com)*
- [Overscroll behavior should be respected on all scroll containers · chromium/chromium@58b3245](https://github.com/chromium/chromium/commit/58b3245a17f6fca41439333f6a64a196b2c3cb0a) *(github.com)*
- [[css-overscroll-behavior] Control behavior based upon user scrollability and for chaining/bubbling up from elements not being at a scroll boundary, like the supported of overscroll of overflow:hidden elements not at scroll boundary · Issue #3349 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3349) *(github.com)*
- [[cssom][css-overflow][css-overscroll-behavior] overscroll-behavior and underspecification of "not user scrollable but with scrolling mechanism" as "always considered to be at the scroll boundary" · Issue #2567 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/2567) *(github.com)*
- [[css-overscroll-behavior] and users text selection boundary scroll chaining of none value · Issue #3394 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3394) *(github.com)*
- [overscroll-behavior CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/overscroll-behavior) *(developer.mozilla.org)*
- [CSS overscroll behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Overscroll_behavior) *(developer.mozilla.org)*
- [overscroll-behavior-block CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/overscroll-behavior-block) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 30 result(s) found across 7 planned queries — **30 verified relevant**
  - `"chromestatus.com/feature/5176802466201600" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/vmpstr/htmldemos/blob/master/gestures/overscroll-behavior-chain.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"drafts.csswg.org/css-overscroll-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"overscroll-behavior: chain" OR "overscroll-behavior:chain" (tutorial OR guide OR demo OR drawer)` — *Finds developer guides, tutorials, and practical UI pattern use cases (like drawers or sidebars) utilizing overscroll-behavior: chain.* (8 returned)
  - `"overscroll-behavior" "chain" (site:codepen.io OR site:github.com) -site:github.com/w3c` — *Locates live code examples, CSS snippet demos, and real-world implementation tests in repositories and sandboxes.* (8 returned)
  - `site:github.com/w3c/csswg-drafts "overscroll-behavior" "chain"` — *Discovers standards discussions, specification issues, and developer debates within the W3C CSS Working Group repository.* (4 returned)
  - `("overscroll-behavior: chain" OR "overscroll-behavior" "chain") ("Intent to" OR chromestatus OR "standards-positions" OR "Mozilla" OR "WebKit")` — *Tracks browser vendor signals, Intent to Prototype/Ship threads, and standard position discussions across Chromium, WebKit, and Gecko.* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 1 result(s) found — **1 verified relevant**
- **Standards Positions:** 3 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 4 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5176802466201600)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5176802466201600)
- [Specification](https://drafts.csswg.org/css-overscroll-1/#propdef-overscroll-behavior)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/499018879)
