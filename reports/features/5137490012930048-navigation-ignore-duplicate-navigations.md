# Navigation: Ignore duplicate navigations

> **Report Week:** 2026-W39 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Prevents an ongoing navigation from being unnecessarily canceled by a new, identical navigation that is initiated in quick succession. This optimization improves performance and the user experience by not wasting resources on a duplicate request, which can be caused by accidental double-clicks.

### Motivation

We observe users sometimes navigate to the same URL in quick succession, likely by accident. Because new navigations take precedent over an older one, this means it will waste the earlier navigation that's already in progress, potentially wasting a response that is already in flight for the navigation and causing the user to wait longer (from the time the first navigation kicks off).

To mitigate this waste, the feature will ignore the duplicate navigation and let the first navigation continue.

## Ecosystem Status

- **Momentum:** High (395 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Shipping enabled by default in Chrome 151, 'Navigation: Ignore duplicate navigations' is a browser-level optimization designed to prevent in-flight page navigations from being canceled and restarted when an identical navigation is triggered in rapid succession. The change is standardized via WHATWG HTML PR #11765 to resolve common performance bottlenecks caused by accidental double-clicks. While Chromium is leading deployment, formal consensus from Gecko and WebKit remains in progress across standards-position trackers.

### Recommendations
- Actionable Advice: Because this behavior operates transparently at the browser navigation layer, teams do not need to implement special code to take advantage of it. However, developers should maintain standard client-side UI disabling and server-side idempotency safeguards for state-mutating actions (such as payment submissions or form posts) rather than relying on browser-level deduplication alone.
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Ignore "duplicate" navigations](https://github.com/WebKit/standards-positions/issues/563) [open]
- **Mozilla:** [Ignore "duplicate" navigations](https://github.com/mozilla/standards-positions/issues/1307) [open]
- **W3C TAG:** [WG New Spec: Ignore Duplicate Navigations](https://github.com/w3ctag/design-reviews/issues/1240) [open]

## Packages & Polyfills

- [@opentelemetry/instrumentation-browser-navigation](https://www.npmjs.com/package/@opentelemetry/instrumentation-browser-navigation) `v0.15.0` — OpenTelemetry instrumentation for browser navigation events (page load and same-document navigations)

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Intent to Ship: Navigation: Ignore duplicate navigations](http://www.mail-archive.com/blink-dev@chromium.org/msg16962.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: Navigation: Ignore duplicate navigations Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Navigation: Ignore duplicate navigations Alex Russell Mon, 13 Jul 2026 11:36:06 -0700 LGTM1 on the conditio...
- [\[blink-dev\] Intent to Ship: Navigation: Ignore duplicate navigations](http://www.mail-archive.com/blink-dev@chromium.org/msg16923.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Navigation: Ignore duplicate navigations Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Navigation: Ignore duplicate navigations Chromestatus Fri, 03 Jul 2026 01:15:45 -0700 Contact emails [email&#160;pr...
- [Navigation, authors, and pagination - Documentation site for Tuplio](https://docs.tuplio.com/tutorials/blogs/navigation) *(docs.tuplio.com)*
  > Navigation, authors, and pagination - Documentation site for Tuplio Skip to content For updates follow @tuplio on Reddit Initializing search tuplio/docs Engagement and dissemination Social cards Changelog Setup Plugins Reference Insiders Using Inside...
- [Faceted Navigation and SEO: Avoiding Duplicate Content on Your Store](https://blog.lueurexterne.com/en/blog/faceted-navigation-and-seo-avoiding-duplicate-content-on-your-store) *(blog.lueurexterne.com · 2026-04-23T00:00:00)*
  > Faceted Navigation and SEO: Avoiding Duplicate Content on Your Store Skip to content Type to search across … articles & guides ESC to close Table of Contents Faceted Navigation and SEO: Avoiding Duplicate Content on Your Store April 23, 2026 · Lueur ...
- [Use the Navigation block in WordPress \| WordPress.com Support](https://wordpress.com/support/site-editing/theme-blocks/navigation-block) *(wordpress.com · 2023-05-12T00:00:00)*
  > Use the Navigation block in WordPress | WordPress.com Support Build Website Ecommerce AI website builder Publish Blog Newsletter Hosting Managed hosting Agency hosting Site migration Enterprise Enterprise hosting Domains Find a domain Transfer a doma...
- [A complete guide to React Navigation 5 - LogRocket Blog](https://blog.logrocket.com/a-complete-guide-to-react-navigation-5) *(blog.logrocket.com · 2024-06-04T21:24:10)*
  > A complete guide to React Navigation 5 - LogRocket Blog Advisory boards aren’t only for executives. Join the LogRocket Content Advisory Board today &#8594; Blog Dev Product Management UX Design Podcast Product Leadership Features Solutions Solve User...
- [Website Navigation Best Practices Guide (Do's and Don'ts)](https://neilpatel.com/blog/website-navigation) *(neilpatel.com · 2025-01-15T16:29:53)*
  > Sidebar Navigation: Vertical navigation on either side of a website, often used for blogs or content-heavy sites.
- [How to Add a Navigation Menu in WordPress (Beginner's Guide)](https://www.wpbeginner.com/beginners-guide/how-to-add-navigation-menu-in-wordpress-beginners-guide) *(wpbeginner.com · 2024-09-26T17:08:04)*
  > Do you want to add a navigation menu in WordPress? This beginner&#x27;s guide will show you how to add drop-down navigation menus in WordPress, step by step.
- [15 Website Navigation Best Practices and Do’s That Work](https://www.wearetenet.com/blog/website-navigation-best-practices) *(wearetenet.com)*
  > <strong>Move less important items like “Careers,” “Terms,” or “Press” into the footer or secondary navigation</strong>. Simplify your menu until only the most essential items remain, then test whether users can still find everything they need without...
- [Create a basic navigation menu and edit page tabs on Blogger](https://marketingmalone.com/blog/tutorial-create-a-basic-navigation-menu-in-blogger) *(marketingmalone.com · 2025-10-19T12:41:28)*
  > This tutorial will show you how to create a basic navigation menu in Blogger that suits your blog design and how to edit the page tabs menu.
- [ondblclick Event](https://www.w3schools.com/jsref/event_ondblclick.asp) *(w3schools.com)*
  > <strong>The ondblclick event occurs when the user double-clicks on an HTML element</strong>. ... Coding fundamentals as a game. Bite-sized lessons and challenges. ... Ready to start your journey? Your streak is waiting.
- [CSS-only double-click](https://codepen.io/MartijnCuppens/pen/GZWgaQ) *(codepen.io)*
  > &lt;/p&gt; &lt;p class=&quot;alert alert-warning mb-4&quot; role=&quot;alert&quot;&gt; &lt;strong&gt;WARNING&lt;/strong&gt;: this is just a demostration to show it&#x27;s possible to use CSS for double-clicks. This technique has some accessibility is...
- [Navigation management into installed PWAs \| Capabilities \| Chrome for Developers](https://developer.chrome.com/docs/capabilities/pwa-navigation-management) *(developer.chrome.com · 2025-08-19T00:00:00)*
  > A critical component of this is navigation capturing, the browser process that determines whether clicking a link should launch the installed PWA or open a new browser tab. This guide covers the new version of navigation capturing, available from Chr...
- [Re: \[blink-dev\] Intent to Ship: Navigation: Ignore duplicate navigations](http://www.mail-archive.com/blink-dev@chromium.org/msg16926.html) *(mail-archive.com)*
  > &gt; &gt; &gt;&gt; &gt;&gt; &gt;&gt; &gt;&gt; *Flag name on about://flags* &gt;&gt; *No information provided* &gt;&gt; &gt;&gt; *Finch feature name* &gt;&gt; IgnoreDuplicateNavs &gt;&gt; &gt;&gt; *Rollout plan* &gt;&gt; Will ship enabled for all user...
- [Navigation Management into Installed PWAs: Techniques and Best Practices](https://docs.google.com/document/d/e/2PACX-1vSqYzAmiLr-58OgSWBITtAAu6_2XUpjjNEdMvc6IdZn9DjQCeVrE0SKViumyly0cpryxAONMq62zwHw/pub?urp=gmail_link) *(docs.google.com)*
  > Windows, Mac, and Linux: Shipping as user navigation capturing in m133 / m134 · There are many ways to deep-link to an installed PWA. Experiment with this example website (source code) and short animation of what is possible using the knowledge you l...
- [Re: \[blink-dev\] Intent to Ship: Navigation: Ignore duplicate navigations](http://www.mail-archive.com/blink-dev@chromium.org/msg16944.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · Re: [blink-dev] Intent to Ship: Navigation: Ignore duplicate navigations · Alex Russell Wed, 08 Jul 2026 08:26:25 -0700 · Presumably this will not impact cases where users cancel navigation (via the &quot;x&quo...
- [Disable Double Click - Chrome Web Store](https://chromewebstore.google.com/detail/disable-double-click/eigbkmkjoajdadhdgdicegmkkdpblopg) *(chromewebstore.google.com · 2026-04-20T00:00:00)*
  > Disables double-clicks on specified websites · Allows you to disable double-clicks and double-taps on a per-domain basis. Perfect for websites where double-clicks interfere with your workflow or cause accidental zooming on touch devices
- [r/chrome on Reddit: Recent problem with double clicks?](https://www.reddit.com/r/chrome/comments/gi5k24/recent_problem_with_double_clicks) *(reddit.com · 2020-05-12T06:20:05)*
  > It&#x27;s most obvious when I&#x27;m trying to drag windows around, since a double-click maximizes or restores the window; this leads to a lot of miss-clicks. ... Make sure your post is flaired properly or it will be removed, support posts need to be...
- [Modern client-side routing: the Navigation API \| Web Platform \| Chrome for Developers](https://developer.chrome.com/docs/web-platform/navigation-api) *(developer.chrome.com · 2021-08-25T00:00:00)*
  > Notably, you can pass an AbortSignal to any calls you make to fetch(), which will cancel in-flight network requests if the navigation is preempted. This will both save the user&#x27;s bandwidth, and reject the Promise returned by fetch(), preventing ...
- [Navigate Event \| Modern JavaScript Navigation API Guide \| Digital Thrive US](https://digitalthriveai.com/en-us/resources/docs/web-development/navigate-event) *(digitalthriveai.com · 2026-03-18T08:23:44)*
  > Listen to the AbortSignal to properly cancel in-flight operations and prevent memory leaks during rapid navigations. When setting focusReset or scroll to &#x27;manual&#x27;, ensure your implementation maintains proper keyboard navigation and focus ma...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Navigation: Ignore duplicate navigations · Issue #1321 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1321) *(github.com · 2026-08-14T17:31:18)* *(Cites: `https://chromestatus.com/feature/5137490012930048`)*
  > Navigation: Ignore duplicate navigations · Issue #1321 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab o...
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2025-10-13 (public-html@w3.org from October 2025)](https://lists.w3.org/Archives/Public/public-html/2025Oct/0001.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/11765`)*
  > issues/new/choose (2 by Teto-07) ... - Navigation: Add optimization to ignore duplicate navigations (by llannasatoll) https://github.com/whatwg/html/pull/11765 - <strong>Improve behavior for parsing option end tags</strong> (by josepharhar)...

## 📚 Platform Documentation & Specifications

- [Navigation: Ignore duplicate navigations · Issue #1321 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1321) *(github.com)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2025-10-13 (public-html@w3.org from October 2025)](https://lists.w3.org/Archives/Public/public-html/2025Oct/0001.html) *(lists.w3.org)*
- [feat: add version-coherent PWA and static Pages deployment by techrote · Pull Request #41 · techrote/greygen](https://github.com/techrote/greygen/pull/41) *(github.com)*
- [Beginner-first PWA navigation and guided article setup by haruharu42 · Pull Request #48 · haruharu42/AIArticleStudio-Updates](https://github.com/haruharu42/AIArticleStudio-Updates/pull/48) *(github.com)*
- [feat(pwa): canonical PWA versioning + mobile navigation audit · Issue #176 · yusi20006-max/YasinHub](https://github.com/yusi20006-max/YasinHub/issues/176) *(github.com)*
- [GitHub - fmohtadi99/pwa-navigation: A simple navigation system for Progressive Web Applications based on React.](https://github.com/fmohtadi99/pwa-navigation) *(github.com)*
- [Navigation: navigate event - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigation/navigate_event) *(developer.mozilla.org)*
- [NavigateEvent: intercept() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/NavigateEvent/intercept) *(developer.mozilla.org)*
- [NavigateEvent - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/NavigateEvent) *(developer.mozilla.org)*
- [NavigationPrecommitController - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/NavigationPrecommitController) *(developer.mozilla.org)*
- [Navigation API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Navigation_API) *(developer.mozilla.org)*
- [content/files/en-us/web/api/navigateevent/intercept/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/navigateevent/intercept/index.md?plain=1) *(github.com)*
- [tabs.duplicate()](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/duplicate) *(developer.mozilla.org)*
- [Navigation](https://developer.mozilla.org/en-US/docs/Web/API/Navigation) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 51 result(s) found across 11 planned queries — **32 verified relevant**
  - `"chromestatus.com/feature/5137490012930048" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/whatwg/html/pull/11765" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Navigation: Ignore duplicate navigations" API` — *Core feature API query* (3 returned)
  - `"Navigation: Ignore duplicate navigations" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"double-clicks" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Navigation: Ignore duplicate navigations" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Navigation: Ignore duplicate navigations" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"ignore duplicate navigations" site:groups.google.com/a/chromium.org/g/blink-dev` — *Searches for Chromium Blink-dev Intent to Ship or Implement threads and browser vendor sentiment regarding the feature.* (0 returned)
  - `"ignore duplicate navigations" OR "duplicate navigation" "whatwg/html/pull/11765"` — *Finds spec discussion, debates, and issue references surrounding WHATWG HTML pull request 11765.* (5 returned)
  - `"ignore duplicate navigations" (Chrome OR Chromium) ("double-click" OR "double click")` — *Discovers developer blog posts, release notes, and web performance articles explaining duplicate navigation throttling.* (8 returned)
  - `"duplicate navigation" "Navigation API" OR "navigateEvent" in-flight` — *Finds code samples and technical documentation showing how in-flight requests interact with the Navigation API when duplicate requests fire.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **1 verified relevant**
- **Web Platform Tests (wpt.fyi):** 1198 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5137490012930048)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5137490012930048)
- [Specification](https://github.com/whatwg/html/pull/11765)
- [Chromium Tracking Bug](https://crbug.com/366060351)
