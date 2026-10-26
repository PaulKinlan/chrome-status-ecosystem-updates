# HTML install element

> **Report Week:** 2026-W44 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

Chrome can now trigger a request for the browser to install a web app, given a manifest URL and optional manifest ID. The &lt;install&gt; element enables cross-origin web app installation without JavaScript and provides a better developer experience than handling \`beforeinstallprompt\` events. The element is launching in parallel with \`navigator.install()\`, the imperative entry point to the same installation capability.   Admins can control this in two ways: 1. Enterprise policy, \[WebAppInstallByUserEnabled\](https://chromeenterprise.google/policies/#WebAppInstallByUserEnabled), can disable user web app installs broadly, including installs initiated via \`navigator.install()\` and &lt;install&gt;.   2. \[Permissions policy\](https://www.w3.org/TR/permissions-policy/), web-app-installation, can allow or disallow use of this feature on origins that the enterprise controls (for example, internal sites/iframes).

### Motivation

The web currently lacks the ability for a site to offer installation of a web app identified by a cross-origin manifest. Limited support exists for eligible same-origin web apps via ambient installation affordances and the beforeinstallprompt event. However, the existent browser-provided entry points are difficult for developers to use and users to discover.  This capability lets developers distribute web apps across the web without proprietary protocols or platform-specific stores. It brings web app distribution closer to the reach developers expect from other application models while preserving browser-controlled safeguards and explicit user choice.

## Ecosystem Status

- **Momentum:** High (footprint 436 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** The HTML \`&lt;install&gt;\` element and companion \`navigator.install()\` API represent a Chromium and Microsoft-driven push to overhaul web app distribution through declarative, manifest-based installation primitives that bypass fragile legacy events like \`beforeinstallprompt\`. While the manifest-first design resolved initial security critiques during W3C TAG architectural reviews, the capability is launching primarily in Chromium-based browsers without multi-engine consensus. With WebKit explicitly opposing the feature and Gecko remaining uncommitted, it deepens the divide between Chromium and competing browser engines on progressive web apps.

### Recommendations
- Actionable Advice: Adopt the \`&lt;install&gt;\` element solely as a progressive enhancement by providing nested fallback markup (such as conventional install instructions or manual bookmarking cues) for non-supporting browsers. Maintain existing same-origin install detection and platform-specific guidance, and do not assume cross-origin manifests will fetch reliably across networks protected by aggressive bot-mitigation systems.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @marcoscaceres: "Closed via https://github.com/WebKit/standards-positions/issues/619..."
- Standards Activity (Mozilla): Latest discussion from @saschanaz: ""install capability" is not very specific topic, should we close this in favor of #1371, #1387, and #1388?..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Install web apps with the new HTML install element" (32 points, 14 comments).

## Standards Positions

- **WebKit:** [Web Install API](https://github.com/WebKit/standards-positions/issues/463) [closed]
- **Mozilla:** [Web Install capability](https://github.com/mozilla/standards-positions/issues/1179) [open]

## Community Discussions & Social Pulse

- 💬 **Hacker News:** [Install web apps with the new HTML install element](https://news.ycombinator.com/item?id=48360474) — *32 pts, 14 comments*
- 💬 **Hacker News:** [Install web apps with the new HTML install element](https://news.ycombinator.com/item?id=48125969) — *3 pts, 0 comments*

## 📰 Ecosystem Blogs & Articles

- [Install web apps with the new HTML install element](https://developer.chrome.com/blog/install-element-ot) *(developer.chrome.com · 2026-06-01T18:06:28Z)*
  > Not answered in TFA: What does it mean to &quot;install&quot; a web app in Chrome?
- [appspot.com](https://f896c59-dot-app-py3-dot-cr-status.appspot.com/feature/5183481574850560?gate=5120761429229568) *(f896c59-dot-app-py3-dot-cr-status.appspot.com)*
  > install()\`, which provides a promise-based JavaScript entry point
- [r/PWA on Reddit: Web Install API - A glimmer of hope](https://www.reddit.com/r/PWA/comments/1oub6ml/web_install_api_a_glimmer_of_hope) *(reddit.com)*
  > This enables decentralized web app catalogs, directories, and multi-app suites \*\*Decentralizing App Stores:\*\* Developer blogs and PWA platforms praise the ability to build true "Web App Stores
- [chromeenterprise.google](https://chromeenterprise.google/policies/web-app-install-by-user-enabled) *(chromeenterprise.google)*
  > install()\`)
- [The Future of Web Apps: Why the New HTML Install Element Changes Everything \| NameOcean](https://nameocean.net/article/the-future-of-web-apps-why-the-new-html-install-element-changes-everything) *(nameocean.net)*
  > Users routinely missed that an app was installable \*\*Developer Sentiment:\*\* Widely welcomed by PWA developers
- [chromium.org](https://issues.chromium.org/333795265) *(issues.chromium.org)*
  > Documents the feature trajectory through Origin Trials and standard tracks (targeting general availability across Chromium releases) Outlines developer feedback iterations on attribute terminology (\`manifest\` and \`id\`), UX constraints (e.g., preventi...
- [pwastore.io](https://www.pwastore.io/web-install-api) *(pwastore.io)*
  > \*\*Decentralizing App Stores:\*\* Developer blogs and PWA platforms praise the ability to build true "Web App Stores In the past, aggregator sites had to bounce users to external domains or instruct them on browser menus
- [developer-signals.dev](https://developer-signals.dev/features/navigator-install) *(developer-signals.dev)*
  > \*\*Cross-Browser Adoption:\*\* While Chromium-based browsers (Chrome, Edge, Opera, Brave) are championing both the element and the API, Safari (WebKit) and Mozilla (Firefox) have historically remained more skeptical about cross-origin installation flows...
- [RE: \[blink-dev\] Intent to Ship: Web Install API](http://www.mail-archive.com/blink-dev@chromium.org/msg17686.html) *(mail-archive.com)*
  > RE: \[blink-dev\] Intent to Ship: Web Install API Skip to site navigation (Press enter) RE: \[blink-dev\] Intent to Ship: Web Install API 'Lia Hiscock' via blink-dev Wed, 07 Oct 2026 17:14:57 -0700 Thanks Rick and Philip! Re. the WebDriver request, I’ve ...
- [\[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17504.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: HTML install element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: HTML install element 'Lia Hiscock' via blink-dev Mon, 21 Sep 2026 11:38:00 -0700 Contact emails \[email&#160;protected\] &lt; mailto: \[email...
- [\[&lt;install&gt; Element\] Enable Declarative installation of Web Apps from Web Content \[454827186\] - Issue Tracker](https://issuetracker.google.com/issues/454827186) *(issuetracker.google.com)*
  > Google Issue Tracker Sign in
- [Re: \[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17772.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: HTML install element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: HTML install element 'Lia Hiscock' via blink-dev Mon, 19 Oct 2026 10:27:42 -0700 Hi Dan! Thanks for the feedback. We've complet...
- [Patrick - Install web apps with the new HTML install element](https://patrickbrosset.com/articles/2026-05-13-install-web-apps-with-the-new-html-install-element) *(patrickbrosset.com)*
  > Install web apps with the new HTML install element
- [Issue #741: A new HTML element for installing web apps — Frontend Focus \| daily.dev](https://daily.dev/posts/issue-741-a-new-html-element-for-installing-web-apps-frontend-focus-6gx3owroq) *(daily.dev · 2026-06-25T02:16:21)*
  > Frontend Focus issue #741 covers several web platform updates: Safari 26.5 ships with :open pseudo-class, CSS random() improvements, and anchor positioning fixes. A new HTML &lt;install&gt; element is available for testing in Chrome and Edge, enablin...
- [Install web apps with the new HTML install element Stay organized with collections Save and categorize content based on your preferences. \| Vuink.com](https://vuink.com/post/qrirybcre-d-dpuebzr-d-dpbz/blog/install-element-ot) *(vuink.com · 2026-05-13T19:00:07)*
  > When you use the beforeinstallprompt ... element changes that: &lt;strong&gt;drop a single HTML element into your page and the browser renders a trusted install button for you, with no JavaScript required&lt;/strong&gt;....
- [Install web apps with the new HTML install element \| Hacker News](https://news.ycombinator.com/item?id=48360474) *(news.ycombinator.com · 2026-06-07T04:23:43)*
  > Perhaps usable in an entirely locked down corporate environment where centralised IT with &quot;standard desktop builds&quot; and MDM will enforce Chrome use. But without at least Safari support, and ideally Firefox (plus forks), this remains a usele...
- [Installation — What PWA Can Do Today](https://whatpwacando.today/installation) *(whatpwacando.today)*
  > To install the current web app, use navigator.install(); To install a web app from another domain, use &lt;strong&gt;navigator.install({manifest: &#x27;https://otherdomain.com/manifest.json&#x27;, manifestId: &#x27;https://otherdomain.com/app-id&#x27;});&lt;/...
- [\[blink-dev\] Intent to Ship: Web Install API](http://www.mail-archive.com/blink-dev@chromium.org/msg17503.html) *(mail-archive.com)*
  > The navigator.install() method &lt;strong&gt;enables cross-origin web app installation and provides a better developer experience than handling beforeinstallprompt events&lt;/strong&gt;. This API is proposed to ship together with the &lt;install&gt; element, a d...
- [Intent to Experiment: Web Install API](https://groups.google.com/a/chromium.org/g/blink-dev/c/KCpVX8F6yh8) *(groups.google.com)*
  > We have a JavaScript UseCounter and WebDX feature - https://chromestatus.com/metrics/webfeature/timeline/popularity/375 We will also implement chromium UMAs and possibly UKMs for the API service results. ... Intent to Prototype: https://groups.google...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [web-features consumers report for 2026-09-01 · Issue #4287 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4287) *(github.com · 2026-09-01T08:55:15)* *(Cites: `https://chromestatus.com/feature/5152834368700416`)*
  > install-element used by https://&lt;strong&gt;chromestatus.com/feature/5152834368700416&lt;/strong&gt; · Downstream: use install (source, dist) None used by https://chromestatus.com/feature/6552486106234880 · Downstream: use protected-audience (source,...
- [RE: \[blink-dev\] Intent to Ship: Web Install API](http://www.mail-archive.com/blink-dev@chromium.org/msg17686.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152834368700416`)*
  > RE: \[blink-dev\] Intent to Ship: Web Install API Skip to site navigation (Press enter) RE: \[blink-dev\] Intent to Ship: Web Install API 'Lia Hiscock' via blink-dev Wed, 07 Oct 2026 17:14:57 -0700 Thanks Rick and Philip! Re. the WebDriver requ...
- [Web app HTML install element · Issue #1083 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1083) *(github.com · 2026-07-29T21:39:54)* *(Cites: `https://chromestatus.com/feature/5152834368700416`)*
  > Web app HTML install element · Issue #1083 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Re...
- [\[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17504.html) *(mail-archive.com)* *(Cites: `https://aka.ms/installelement`)*
  > \[blink-dev\] Intent to Ship: HTML install element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: HTML install element 'Lia Hiscock' via blink-dev Mon, 21 Sep 2026 11:38:00 -0700 Contact emails \[email&#160;protected\] &lt; mail...
- [\[&lt;install&gt; Element\] Align InstallResultEventInit default with spec by chromium-wpt-export-bot · Pull Request #63906 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/63906) *(github.com)* *(Cites: `https://aka.ms/installelement`)*
  > \[&lt;install&gt; Element\] Align InstallResultEventInit default with spec by chromium-wpt-export-bot · Pull Request #63906 · web-platform-tests/wpt · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appea...
- [\[&lt;install&gt; Element\] Enable Declarative installation of Web Apps from Web Content \[454827186\] - Issue Tracker](https://issuetracker.google.com/issues/454827186) *(issuetracker.google.com)* *(Cites: `https://aka.ms/installelement`)*
  > Google Issue Tracker Sign in
- [Re: \[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17772.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/install-element`)*
  > Re: \[blink-dev\] Intent to Ship: HTML install element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: HTML install element 'Lia Hiscock' via blink-dev Mon, 19 Oct 2026 10:27:42 -0700 Hi Dan! Thanks for the feedback. We'...
- [Web app installation · Issue #1430 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1430) *(github.com · 2026-09-22T14:52:52)* *(Cites: `https://wicg.github.io/install-element`)*
  > Web app installation · Issue #1430 · web-platform-tests/interop · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh yo...

## 📚 Platform Documentation & Specifications

- [GitHub - WICG/install-element: An \`&lt;install&gt;\` element might be nice. · GitHub](https://github.com/WICG/install-element) *(github.com)*
- [github.com](https://github.com/w3ctag/design-reviews/issues/1051) *(github.com)*
- [Web Install API · Issue #1373 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1373) *(github.com)*
- [w3.org](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1245) *(tag-github-bot.w3.org)*
- [w3.org](https://lists.w3.org/Archives/Public/public-webapps-github/2026Sep/0132.html) *(lists.w3.org)*
- [web-features consumers report for 2026-09-01 · Issue #4287 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4287) *(github.com)*
- [Web app HTML install element · Issue #1083 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1083) *(github.com)*
- [\[&lt;install&gt; Element\] Align InstallResultEventInit default with spec by chromium-wpt-export-bot · Pull Request #63906 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/63906) *(github.com)*
- [Web app installation · Issue #1430 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1430) *(github.com)*
- [Editorial review: Document install() API and &lt;install&gt; element by chrisdavidmills · Pull Request #45461 · mdn/content](https://github.com/mdn/content/pull/45461) *(github.com)*
- [Add \`navigator.install()\` by christianliebel · Pull Request #1175 · w3c/manifest](https://github.com/w3c/manifest/pull/1175) *(github.com)*
- [Question: Review manifest-first Web Install API · Issue #1245 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1245) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 58 result(s) found across 12 planned queries — **21 verified relevant**
  - `"chromestatus.com/feature/5152834368700416" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"aka.ms/installelement" -site:aka.ms` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"wicg.github.io/install-element" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"HTML install element" API` — *Core feature API query* (8 returned)
  - `"HTML install element" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"navigator.install()" OR "install()" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"HTML install element" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"HTML install element" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
  - `("HTML install element" OR "navigator.install") ("PWA" OR "web app") tutorial OR "how to use"` — *Finds developer guides and tutorials introducing the HTML install element and imperative install method for progressive web apps.* (3 returned)
  - `("<install" OR "navigator.install(") ("manifest" OR "manifest-id") code OR example` — *Locates practical code snippets, markup demonstrations, and WebIDL implementation usage for declarative and imperative app installs.* (8 returned)
  - `("HTML install element" OR "navigator.install") ("intent to ship" OR "intent to prototype" OR chromestatus OR "WICG")` — *Surfaces browser vendor roadmaps, standardization tracking, and release announcements in Chromium and Microsoft Edge.* (8 returned)
  - `("install element" OR "navigator.install") ("beforeinstallprompt" OR "cross-origin") (site:news.ycombinator.com OR site:reddit.com OR site:discourse.wicg.io)` — *Discovers developer discussions, critiques, and community sentiments about deprecating beforeinstallprompt in favor of declarative install.* (6 returned)
- **Google Search Grounding (gemini-3.8-flash):** 15 result(s) found — **12 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 5 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 8 result(s) found — **2 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 7 result(s) found — **2 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "install", shared with 0 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "install" has no test results*
- **Sources cited by the AI synthesis:** 8 result(s) found — **5 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 12 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5152834368700416)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5152834368700416)
- [Specification](https://wicg.github.io/install-element)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/454827186)
