# HTML install element

> **Report Week:** 2026-W45 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

Chrome can now trigger a request for the browser to install a web app, given a manifest URL and optional manifest ID. The &lt;install&gt; element enables cross-origin web app installation without JavaScript and provides a better developer experience than handling \`beforeinstallprompt\` events. The element is launching in parallel with \`navigator.install()\`, the imperative entry point to the same installation capability.   Admins can control this in two ways: 1. Enterprise policy, \[WebAppInstallByUserEnabled\](https://chromeenterprise.google/policies/#WebAppInstallByUserEnabled), can disable user web app installs broadly, including installs initiated via \`navigator.install()\` and &lt;install&gt;.   2. \[Permissions policy\](https://www.w3.org/TR/permissions-policy/), web-app-installation, can allow or disallow use of this feature on origins that the enterprise controls (for example, internal sites/iframes).

### Motivation

The web currently lacks the ability for a site to offer installation of a web app identified by a cross-origin manifest. Limited support exists for eligible same-origin web apps via ambient installation affordances and the beforeinstallprompt event. However, the existent browser-provided entry points are difficult for developers to use and users to discover.  This capability lets developers distribute web apps across the web without proprietary protocols or platform-specific stores. It brings web app distribution closer to the reach developers expect from other application models while preserving browser-controlled safeguards and explicit user choice.

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 466 points)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The HTML install element provides a declarative, browser-controlled UI component enabling web app installation without JavaScript or clunky beforeinstallprompt handling, shipping enabled by default in Chromium 158 alongside navigator.install(). While spearheaded by Google and Microsoft to decentralize web app distribution and solve persistent PWA discoverability issues, it currently lacks cross-browser interoperability. The feature sits in Limited Availability due to WebKit's formal opposition and Mozilla's reserved posture.

### Recommendations
- Actionable Advice: Teams should treat the install element strictly as a progressive enhancement by nesting fallback buttons or instructional markup inside the element so that non-supporting browsers degrade gracefully. Existing installation workflows and ambient install guidance should remain intact to support Firefox and Safari users who cannot use declarative in-page prompts.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @marcoscaceres: "Closed via https://github.com/WebKit/standards-positions/issues/619..."
- Standards Activity (Mozilla): Latest discussion from @saschanaz: ""install capability" is not very specific topic, should we close this in favor of #1371, #1387, and #1388?..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Install web apps with the new HTML install element" (32 points, 14 comments).

## Standards Positions

- **WebKit:** [Web Install API](https://github.com/WebKit/standards-positions/issues/463) [closed]
- **Mozilla:** [Web Install capability](https://github.com/mozilla/standards-positions/issues/1179) [open]

## Web-features Group

*group-level data: web-features [`install`](https://webstatus.dev/features/install)*

- **Chrome usage:** 0.00012% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/424))

## Community Discussions & Social Pulse

- 💬 **Hacker News:** [Install web apps with the new HTML install element](https://news.ycombinator.com/item?id=48360474) — *32 pts, 14 comments*
- 💬 **Hacker News:** [Install web apps with the new HTML install element](https://news.ycombinator.com/item?id=48125969) — *3 pts, 0 comments*

## 📰 Ecosystem Blogs & Articles

- [Install web apps with the new HTML install element](https://developer.chrome.com/blog/install-element-ot) *(developer.chrome.com · 2026-06-01T18:06:28Z)*
  > Not answered in TFA: What does it mean to &quot;install&quot; a web app in Chrome?
- [Patrick - Install web apps with the new HTML install element](https://patrickbrosset.com/articles/2026-05-13-install-web-apps-with-the-new-html-install-element) *(patrickbrosset.com)*
  > \*\*Article:\*\* \*"Install web apps with the new HTML install element"\* (by Patrick Brosset / Chrome & Edge teams)
- [The Future of Web Apps: Why the New HTML Install Element Changes Everything \| NameOcean](https://nameocean.net/article/the-future-of-web-apps-why-the-new-html-install-element-changes-everything) *(nameocean.net)*
  > Web developers have consistently complained that browser-provided PWA prompts (ambient omnibox icons or nested three-dot menu items) are ignored by everyday users Developer reactions emphasize that bringing an in-page, standardized button directly in...
- [\[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17504.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: HTML install element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: HTML install element 'Lia Hiscock' via blink-dev Mon, 21 Sep 2026 11:38:00 -0700 Contact emails \[email&#160;protected\] &lt; mailto: \[email...
- [Re: \[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17597.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: HTML install element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: HTML install element Rick Byers Wed, 30 Sep 2026 08:03:43 -0700 LGTM1 As for the install API &lt; https://groups.google.com/a/chro...
- [\[blink-dev\] Intent to Experiment: Web app HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg16195.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: Web app HTML install element Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Web app HTML install element 'Lia Hiscock' via blink-dev Wed, 25 Mar 2026 16:47:00 -0700 Contact emails \[email&#160...
- [\[&lt;install&gt; Element\] Enable Declarative installation of Web Apps from Web Content \[454827186\] - Issue Tracker](https://issuetracker.google.com/issues/454827186) *(issuetracker.google.com)*
  > Google Issue Tracker Sign in
- [Re: \[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17773.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: HTML install element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: HTML install element 'Dan Clark' via blink-dev Mon, 19 Oct 2026 10:45:16 -0700 Thank you for working through these! LGTM3 On Mo...
- [RE: \[blink-dev\] Intent to Ship: Web Install API](http://www.mail-archive.com/blink-dev@chromium.org/msg17686.html) *(mail-archive.com)*
  > Rick On Mon, Sep 21, 2026 at 11:38 .../d/12nSXJLm8mW0gWZ\_yjlXfrV8r9gwJliVt4WVa-209-KA/edit?tab=t.0 Summary &lt;strong&gt;Triggers a request for the browser to install a web app, given a manifest URL and optional manifest ID&lt;/strong&gt;....
- [Issue #741: A new HTML element for installing web apps — Frontend Focus \| daily.dev](https://daily.dev/posts/issue-741-a-new-html-element-for-installing-web-apps-frontend-focus-6gx3owroq) *(daily.dev · 2026-06-25T02:16:21)*
  > Frontend Focus issue #741 covers several web platform updates: Safari 26.5 ships with :open pseudo-class, CSS random() improvements, and anchor positioning fixes. A new HTML &lt;install&gt; element is available for testing in Chrome and Edge, enablin...
- [HTMLの新しい要素「&lt;install&gt;」はJavaScriptなしで、Webアプリのインストールが簡単にできるようになります \| コリス](https://coliss.com/articles/build-websites/operation/work/new-html-install-element.html) *(coliss.com · 2026-05-20T00:25:04)*
  > HTMLの新しい要素「&lt;install&gt;」は、この状況を一変させます。WebページにHTML要素を一つ追加するだけで、JavaScriptは一切使用せずに、ブラウザが信頼できるインストールボタンを自動的に表示してくれます。
- [Adactio: Journal—Installing web apps](https://adactio.com/journal/22278) *(adactio.com)*
  > I’ve been eagerly watching the proposal for a Web Install API. This would allow authors to put a button on a page that, when clicked, would trigger the installation process (the user would still need to confirm this, of course). Right now it’s a Java...
- [Install web apps with the new HTML install element  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/install-element-ot?hl=en) *(developer.chrome.com)*
  > Previously, we experimented with the Web Install API (navigator.install()), which is &lt;strong&gt;an imperative JavaScript API that also lets your site trigger installation of same-origin or cross-origin web apps&lt;/strong&gt;.
- [web install API - navigator.install \| Demos](https://microsoftedge.github.io/Demos/pwa-web-install-api) *(microsoftedge.github.io)*
  > /\* Current Document: 0-param Signature\*/ const installApp = async () =&gt; { if (!navigator.install) return; // api not supported try { await navigator.install(); } catch(err) { switch(err.name){ case &#x27;AbortError&#x27;: /\* Operation was aborted\*...
- [r/PWA on Reddit: Web Install API - A glimmer of hope](https://www.reddit.com/r/PWA/comments/1oub6ml/web_install_api_a_glimmer_of_hope) *(reddit.com · 2025-11-11T14:42:47)*
  > navigator.install() &lt;strong&gt;can optionally take a URL to a manifest.json file of another web app so that web app could be installed from a domain other than its own&lt;/strong&gt;.
- [Re: \[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17772.html) *(mail-archive.com)*
  > The element was &gt;&gt;&gt;&gt;&gt; designed ... for &gt;&gt;&gt;&gt;&gt; developers (two test sites, and the explainer itself) &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; \*Security\* &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; The element proposal came ...
- [Web Install Sample](https://kbhlee2121.github.io/pwa/web-install-manifest-url/index.html) *(kbhlee2121.github.io)*
  > &lt;strong&gt;navigator.install({ manifest: &quot;https://squoosh.app/manifest.json&quot;, manifestId: &quot;https://squoosh.app/?utm\_medium=PWA&amp;utm\_source=launcher&quot;, });&lt;/strong&gt; Install (manifest + manifestId)
- [Web Install API (navigator.install) \| OpenPWA](https://openpwa.net/reference/installation/navigator-install) *(openpwa.net · 2026-10-22T00:00:00)*
  > navigator.install() &lt;strong&gt;asks the browser to install a web app and returns a promise&lt;/strong&gt;. With no argument, it installs from the manifest linked by the current document. You can also supply a manifest URL to install from.
- [Chrome 158 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > The &lt;install&gt; element &lt;strong&gt;enables cross-origin web app installation without JavaScript&lt;/strong&gt; and provides a better developer experience than handling beforeinstallprompt events. The element is launching in parallel with navigator.install...
- [Re: \[blink-dev\] Intent to Ship: Web Install API](http://www.mail-archive.com/blink-dev@chromium.org/msg17595.html) *(mail-archive.com)*
  > &gt; &gt; &gt; &gt; Enterprises can control this in two ways - (1) Enterprise policy, &gt; WebAppInstallByUserEnabled, &lt;strong&gt;can disable user web app installs broadly&lt;/strong&gt;, &gt; including installs initiated via navigator.install() and &lt;insta...
- [Chrome 158 Beta: Website Install Buttons and XSLT Removed - Chrome Geek](https://www.chromegeek.com/chrome-158-beta-web-install) *(chromegeek.com · 2026-10-29T17:10:02)*
  > Two ways to do it: sites can use a script method called navigator.install(), or a simple &lt;install&gt; element that works without JavaScript. Both can install apps across sites, so one website could offer to install another site’s web app. Still yo...
- [Install web apps with the new HTML install element Stay organized with collections Save and categorize content based on your preferences. \| Vuink.com](https://vuink.com/post/qrirybcre-d-dpuebzr-d-dpbz/blog/install-element-ot) *(vuink.com · 2026-05-13T19:00:07)*
  > The new &lt;install&gt; element changes that: &lt;strong&gt;drop a single HTML element into your page and the browser renders a trusted install button for you, with no JavaScript required&lt;/strong&gt;. The Microsoft Edge team, in collaboration with the Chrome ...
- [Install web apps with the new HTML install element \| Hacker News](https://news.ycombinator.com/item?id=48360474) *(news.ycombinator.com · 2026-06-07T04:23:43)*
  > Perhaps usable in an entirely locked down corporate environment where centralised IT with &quot;standard desktop builds&quot; and MDM will enforce Chrome use. But without at least Safari support, and ideally Firefox (plus forks), this remains a usele...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17504.html) *(mail-archive.com)* *(Cites: `https://aka.ms/installelement`)*
  > \[blink-dev\] Intent to Ship: HTML install element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: HTML install element 'Lia Hiscock' via blink-dev Mon, 21 Sep 2026 11:38:00 -0700 Contact emails \[email&#160;protected\] &lt; mail...
- [Re: \[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17597.html) *(mail-archive.com)* *(Cites: `https://aka.ms/installelement`)*
  > Re: \[blink-dev\] Intent to Ship: HTML install element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: HTML install element Rick Byers Wed, 30 Sep 2026 08:03:43 -0700 LGTM1 As for the install API &lt; https://groups.google....
- [\[blink-dev\] Intent to Experiment: Web app HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg16195.html) *(mail-archive.com)* *(Cites: `https://aka.ms/installelement`)*
  > \[blink-dev\] Intent to Experiment: Web app HTML install element Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Web app HTML install element 'Lia Hiscock' via blink-dev Wed, 25 Mar 2026 16:47:00 -0700 Contact emails \[...
- [\[&lt;install&gt; Element\] Align InstallResultEventInit default with spec by chromium-wpt-export-bot · Pull Request #63906 · web-platform-tests/wpt · GitHub](https://github.com/web-platform-tests/wpt/pull/63906) *(github.com)* *(Cites: `https://aka.ms/installelement`)*
  > \[&lt;install&gt; Element\] Align InstallResultEventInit default with spec by chromium-wpt-export-bot · Pull Request #63906 · web-platform-tests/wpt · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You s...
- [\[&lt;install&gt; Element\] Enable Declarative installation of Web Apps from Web Content \[454827186\] - Issue Tracker](https://issuetracker.google.com/issues/454827186) *(issuetracker.google.com)* *(Cites: `https://aka.ms/installelement`)*
  > Google Issue Tracker Sign in
- [Re: \[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17773.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/install-element`)*
  > Re: \[blink-dev\] Intent to Ship: HTML install element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: HTML install element 'Dan Clark' via blink-dev Mon, 19 Oct 2026 10:45:16 -0700 Thank you for working through these! L...
- [RE: \[blink-dev\] Intent to Ship: Web Install API](http://www.mail-archive.com/blink-dev@chromium.org/msg17686.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/install-element`)*
  > Rick On Mon, Sep 21, 2026 at 11:38 .../d/12nSXJLm8mW0gWZ\_yjlXfrV8r9gwJliVt4WVa-209-KA/edit?tab=t.0 Summary &lt;strong&gt;Triggers a request for the browser to install a web app, given a manifest URL and optional manifest ID&lt;/strong&gt;....

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/WICG/install-element) *(github.com)*
- [install-element/explainer-manifest-url.md at main · WICG/install-element · GitHub](https://github.com/WICG/install-element/blob/main/explainer-manifest-url.md) *(github.com)*
- [Web app HTML install element · Issue #1083 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1083) *(github.com)*
- [github.com](https://github.com/WICG/install-element/issues/23) *(github.com)*
- [\[&lt;install&gt; Element\] Align InstallResultEventInit default with spec by chromium-wpt-export-bot · Pull Request #63906 · web-platform-tests/wpt · GitHub](https://github.com/web-platform-tests/wpt/pull/63906) *(github.com)*
- [Web Install API · Issue #1373 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1373) *(github.com)*
- [Editorial review: Document install() API and &lt;install&gt; element by chrisdavidmills · Pull Request #45461 · mdn/content · GitHub](https://github.com/mdn/content/pull/45461) *(github.com)*
- [Demos/pwa-install-element at main · MicrosoftEdge/Demos · GitHub](https://github.com/MicrosoftEdge/Demos/tree/main/pwa-install-element) *(github.com)*
- [GitHub - khmyznikov/pwa-install: Installation dialog for Progressive Web Application. Provides a more convenient user experience and fixes the lack of native dialogs in some browsers. · GitHub](https://github.com/khmyznikov/pwa-install) *(github.com)*
- [Demos/pwa-install-api at main · MicrosoftEdge/Demos · GitHub](https://github.com/MicrosoftEdge/Demos/tree/main/pwa-install-api) *(github.com)*
- [Question: Review manifest-first Web Install API · Issue #1245 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1245) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 60 result(s) found across 12 planned queries — **31 verified relevant**
  - `"chromestatus.com/feature/5152834368700416" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"aka.ms/installelement" -site:aka.ms` *(Reverse Citation)* — *Inbound citations linking to Explainer* (5 returned)
  - `"wicg.github.io/install-element" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"HTML install element" API` — *Core feature API query* (8 returned)
  - `"HTML install element" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"navigator.install()" OR "install()" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"HTML install element" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"HTML install element" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (2 returned)
  - `"HTML install element" OR "navigator.install" PWA (tutorial OR guide OR "how to")` — *Discovers practical guides and developer tutorials introducing the new HTML install element and imperative navigator.install API for web app distribution.* (3 returned)
  - `"navigator.install(" OR "<install manifest=" web app manifest code example` — *Finds technical code snippets, attribute syntax, and JavaScript/HTML usage demonstrations for cross-origin manifest installation.* (8 returned)
  - `"web-app-installation" OR "WebAppInstallByUserEnabled" "install element" Chrome` — *Tracks enterprise rollout, admin policies, and browser permissions policy controls for user-initiated web app installation.* (8 returned)
  - `"install element" OR "navigator.install" "beforeinstallprompt" (site:github.com/mozilla/standards-positions OR site:github.com/WebKit/standards-positions OR site:news.ycombinator.com)` — *Surfaces community reactions, cross-browser standards positions from Mozilla and WebKit, and developer discussions contrasting this with beforeinstallprompt.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 8 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 3 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 8 result(s) found — **2 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 7 result(s) found — **2 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "install", shared with 0 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "install" has no test results*
- **Sources cited by the AI synthesis:** 9 result(s) found — **4 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 11 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5152834368700416)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5152834368700416)
- [Specification](https://wicg.github.io/install-element)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/454827186)
