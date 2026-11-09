# HTML install element

> **Report Week:** 2026-W46 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

Chrome can now trigger a request for the browser to install a web app, given a manifest URL and optional manifest ID. The \`&lt;install&gt;\` element enables cross-origin web app installation without JavaScript and provides a better developer experience than handling \`beforeinstallprompt\` events. The element is launching in parallel with \[Web Install API\](https://chromeenterprise.google/resources/release-notes/?ver=158&featId=5183481574850560), specifically the \`navigator.install()\` method, the imperative entry point to the same installation capability.   Admins can control this feature in either of two ways: 1. With enterprise policy, \[WebAppInstallByUserEnabled\](https://chromeenterprise.google/policies/#WebAppInstallByUserEnabled), admins can disable user web app installs in general, including installs initiated via \`navigator.install()\` and &lt;install&gt;.   2. With permissions policy, \[web-app-installation\](https://www.w3.org/TR/permissions-policy/), admins can allow or disallow use of this feature on origins that the enterprise controls (for example, internal sites or iframes).

### Motivation

The web currently lacks the ability for a site to offer installation of a web app identified by a cross-origin manifest. Limited support exists for eligible same-origin web apps via ambient installation affordances and the beforeinstallprompt event. However, the existent browser-provided entry points are difficult for developers to use and users to discover.  This capability lets developers distribute web apps across the web without proprietary protocols or platform-specific stores. It brings web app distribution closer to the reach developers expect from other application models while preserving browser-controlled safeguards and explicit user choice.

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 536 points)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Shipping enabled by default in Chrome 158, the HTML &lt;install&gt; element and its companion Web Install API (navigator.install()) introduce declarative and imperative cross-origin web app installation directly from web content. Driven collaboratively by Google and Microsoft via the WICG, the specification replaces brittle beforeinstallprompt event patterns with standardized manifest-driven triggers. However, the capability remains confined to Chromium-based browsers due to firm pushback and a lack of consensus from rival engine vendors.

### Recommendations
- Actionable Advice: Teams should adopt the &lt;install&gt; element purely as a progressive enhancement, verifying element and API support before rendering custom inline installation UI in Chrome and Edge. Existing fallbacks—including manual 'Add to Home Screen' instructional prompts for Safari and ambient UI reliance for Firefox—must be maintained to ensure reach across non-Chromium platforms.
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

- **Chrome usage:** 0.000083% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/424))

## Community Discussions & Social Pulse

- 💬 **Hacker News:** [Install web apps with the new HTML install element](https://news.ycombinator.com/item?id=48360474) — *32 pts, 14 comments*
- 💬 **Hacker News:** [Install web apps with the new HTML install element](https://news.ycombinator.com/item?id=48125969) — *3 pts, 0 comments*
- 🐦 **Twitter / X:** [Sitene tek etiketle “Uygulamayı yükle” butonu: Chrome 158’de &lt;install&gt; elemanı + navigator.install().  JavaScript ](https://twitter.com/Devorytech/status/2119540524528931271) — *by @Devorytech, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Install web apps with the new HTML install element](https://developer.chrome.com/blog/install-element-ot) *(developer.chrome.com · 2026-06-01T18:06:28Z)*
  > Not answered in TFA: What does it mean to &quot;install&quot; a web app in Chrome?
- [swrice.com](https://swrice.com/web-install-api) *(swrice.com)*
  > The declarative \*\*HTML \`&lt;install&gt;\` element\*\* and its imperative counterpart, the \*\*Web Install API (\`navigator.install()\`)\*\*, represent a fundamental shift in Progressive Web App (PWA) acquisition Instead of relying on browser address bar indicators ...
- [Issue #741: A new HTML element for installing web apps — Frontend Focus \| daily.dev](https://daily.dev/posts/issue-741-a-new-html-element-for-installing-web-apps-frontend-focus-6gx3owroq) *(daily.dev)*
  > Below is an overview of recent announcements, tutorials, and ecosystem reactions across major developer platforms \*\*Frontend Focus (Issue #741) & Swrice Developer Guides\*\*
- [infoq.com](https://www.infoq.com/news/2026/03/web-install-api-origin-trial) *(infoq.com)*
  > Below is an overview of recent announcements, tutorials, and ecosystem reactions across major developer platforms \*\*Microsoft Edge Explainers & Windows Blog (Diego Gonzalez, Lia Hiscock, Mike West)\*\*
- [Patrick - Install web apps with the new HTML install element](https://patrickbrosset.com/articles/2026-05-13-install-web-apps-with-the-new-html-install-element) *(patrickbrosset.com)*
  > \*\*"Install web apps with the new HTML install element" (Chrome for Developers / Patrick Brosset)\*\*
- [master.dev](https://blog.master.dev/new-things-you-should-know-about-html-here-in-mid-2026) *(blog.master.dev)*
  > \*\*Fallback & Progressive Enhancement:\*\* Browsers that don't support the element treat it like an unknown inline container, allowing child fallback elements (such as conventional buttons or download links) to display normally The WICG specification ex...
- [chromestatus.com](https://chromestatus.com/feature/5183481574850560) *(chromestatus.com)*
  > \*\*Chrome Platform Status & Chrome 158 Release Notes\*\* \`WebAppInstallByUserEnabled\` policy to turn off installs organization-wide
- [chromestatus.com](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > \*\*Chrome Platform Status & Chrome 158 Release Notes\*\* Confirmed the transition of \`&lt;install&gt;\` and \`navigator.install()\` from origin trials into stable releases
- [chromeenterprise.google](https://chromeenterprise.google/resources/release-notes) *(chromeenterprise.google)*
  > \`WebAppInstallByUserEnabled\` policy to turn off installs organization-wide \`web-app-installation\` Permissions Policy to gate use across origins or within iframes
- [chrome.com](https://developer.chrome.com/blog/new-in-devtools-november-2026) *(developer.chrome.com)*
  > \*\*Chrome DevTools (November 2026 Updates)\*\* DevTools introduced dedicated \*\*Web Install Manifest Diagnostics\*\* in the Application and Issues panels, automatically detecting fetch errors, syntax issues, invalid \`start\_url\` paths, or missing manifest I...
- [r/PWA on Reddit: Web Install API - A glimmer of hope](https://www.reddit.com/r/PWA/comments/1oub6ml/web_install_api_a_glimmer_of_hope) *(reddit.com)*
  > Microsoft framed this effort as \*\*democratizing web app discovery and distribution\*\*, giving web catalogs the ability to distribute software directly without forcing users into proprietary native app stores or requiring custom protocol handlers
- [\[blink-dev\] Intent to Ship: Web Install API](http://www.mail-archive.com/blink-dev@chromium.org/msg17503.html) *(mail-archive.com)*
  > The navigator.install() method enables cross-origin web app installation and provides a better developer experience than handling beforeinstallprompt events. This API is proposed to ship together with the &lt;install&gt; element, a declarative entry ...
- [\[blink-dev\] Intent to Experiment: Web app HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg16195.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: Web app HTML install element Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Web app HTML install element 'Lia Hiscock' via blink-dev Wed, 25 Mar 2026 16:47:00 -0700 Contact emails \[email&#160...
- [\[&lt;install&gt; Element\] Enable Declarative installation of Web Apps from Web Content \[454827186\] - Issue Tracker](https://issuetracker.google.com/issues/454827186) *(issuetracker.google.com)*
  > WICG proposal - https://aka.ms/InstallElement Chromestatus - https://chromestatus.com/feature/5152834368700416 &lt;strong&gt;Bug: 479161962,454827186 Change-Id: I8bd76ce59d422f8e3d67d91f1e12f0f2e69ee6ef&lt;/strong&gt; Reviewed-on: https://chromium-review.googles...
- [Re: \[blink-dev\] Intent to Ship: Web Install API](http://www.mail-archive.com/blink-dev@chromium.org/msg17774.html) *(mail-archive.com)*
  > The navigator.install() method enables &gt; cross-origin web app installation and provides a better developer &gt; experience than handling beforeinstallprompt events. This API is proposed &gt; to ship together with the &lt;install&gt; element, a dec...
- [\[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17504.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: HTML install element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: HTML install element 'Lia Hiscock' via blink-dev Mon, 21 Sep 2026 11:38:00 -0700 Contact emails \[email&#160;protected\] &lt; mailto: \[email...
- [Re: \[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17597.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: HTML install element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: HTML install element Rick Byers Wed, 30 Sep 2026 08:03:43 -0700 LGTM1 As for the install API &lt; https://groups.google.com/a/chro...
- [Re: \[EXTERNAL\] Re: \[blink-dev\] Intent to Extend Experiment: Web Install API](http://www.mail-archive.com/blink-dev@chromium.org/msg16320.html) *(mail-archive.com)*
  > &gt; &gt; - Draft spec (early draft is ... of Chrome T&amp;S feedback, we expanded the web install &gt; API effort by publishing a new explainer &gt; https://aka.ms/InstallElement which starts experimentation in m153 &gt; (chrome &gt; status &lt;http...
- [Re: \[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17614.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: HTML install element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: HTML install element Philip Jägenstedt Wed, 30 Sep 2026 08:51:30 -0700 LGTM2 Can you please file an issue on https://github.com...
- [RE: \[EXTERNAL\] Re: \[blink-dev\] Intent to Extend Experiment: Web Install API](http://www.mail-archive.com/blink-dev@chromium.org/msg16296.html) *(mail-archive.com)*
  > \* Draft spec (early draft is ok, but must be spec-like and associated with the appropriate standardization venue, or WICG) \* We have a draft spec https://github.com/w3c/manifest/pull/1175, however it has not changed since the original OT was requeste...
- [\[blink-dev\] Re: Intent to Experiment: Web app HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg16233.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Experiment: Web app HTML install element Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Experiment: Web app HTML install element Yoav Weiss (@Shopify) Wed, 01 Apr 2026 08:08:28 -0700 LGTM to experiment M148-...
- [Re: \[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17773.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: HTML install element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: HTML install element 'Dan Clark' via blink-dev Mon, 19 Oct 2026 10:45:16 -0700 Thank you for working through these! LGTM3 On Mo...
- [Re: \[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17665.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; Rick &gt;&gt;&gt; &gt;&gt;&gt; On Mon, Sep ...tmx19oox759l#heading=h.j3tt49hqiuck &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; \*Summary\* &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; &lt;strong&gt;Triggers a request for the browser to install a web app,...
- [RE: \[blink-dev\] Intent to Ship: Web Install API](http://www.mail-archive.com/blink-dev@chromium.org/msg17686.html) *(mail-archive.com)*
  > Rick On Mon, Sep 21, 2026 at 11:38 .../d/12nSXJLm8mW0gWZ\_yjlXfrV8r9gwJliVt4WVa-209-KA/edit?tab=t.0 Summary &lt;strong&gt;Triggers a request for the browser to install a web app, given a manifest URL and optional manifest ID&lt;/strong&gt;....
- [The Future of Web Apps: Why the New HTML Install Element Changes Everything \| NameOcean](https://nameocean.net/article/the-future-of-web-apps-why-the-new-html-install-element-changes-everything) *(nameocean.net · 2026-05-13T00:00:00)*
  > Graceful Degradation: Browsers that don&#x27;t support the install element simply treat it as a standard button element, so you&#x27;re not breaking anything for older users. The implementation is refreshingly straightforward. You&#x27;re not diving ...
- [Adactio: Journal—Installing web apps](https://adactio.com/journal/22278) *(adactio.com)*
  > I’ve been eagerly watching the proposal for a Web Install API. This would allow authors to put a button on a page that, when clicked, would trigger the installation process (the user would still need to confirm this, of course). Right now it’s a Java...
- [Web Install Sample](https://kbhlee2121.github.io/pwa/web-install-manifest-url/index.html) *(kbhlee2121.github.io)*
  > &lt;strong&gt;navigator.install({ manifest: &quot;https://squoosh.app/manifest.json&quot;, manifestId: &quot;https://squoosh.app/?utm\_medium=PWA&amp;utm\_source=launcher&quot;, });&lt;/strong&gt; Install (manifest + manifestId)
- [Re: \[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17772.html) *(mail-archive.com)*
  > \[1\] https://github.com/WICG/install-element/pull/42 (Merged) \[2\] https://github.com/WICG/install-element/pull/40 (Merged) We identified a handful of issues as needing pre-ship code changes -- those are listed in the description of \[1\]. Six of the CLs...
- [PWA Install Prompts: beforeinstallprompt & Custom UI - Progressive Web Apps](https://progressivewebapps.com/installation/install-prompts) *(progressivewebapps.com · 2026-09-25T00:00:00)*
  > beforeinstallprompt has two limits that the Web Install API removes. &lt;strong&gt;It can only install the document the user is looking at, and only when the browser considers that document promotable&lt;/strong&gt;.
- [Chrome Platform Status](https://cr-status.appspot.com/feature/5152834368700416) *(cr-status.appspot.com)*
  > Chrome Platform Status
- [Chromium](https://issues.chromium.org/333795265) *(issues.chromium.org)*
  > Chromium Sign in

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: Web Install API](http://www.mail-archive.com/blink-dev@chromium.org/msg17503.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152834368700416`)*
  > The navigator.install() method enables cross-origin web app installation and provides a better developer experience than handling beforeinstallprompt events. This API is proposed to ship together with the &lt;install&gt; element, a declarat...
- [Web app HTML install element · Issue #1083 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1083) *(github.com · 2026-07-29T21:39:54)* *(Cites: `https://chromestatus.com/feature/5152834368700416`)*
  > Web app HTML install element · Issue #1083 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your...
- [\[blink-dev\] Intent to Experiment: Web app HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg16195.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152834368700416`)*
  > \[blink-dev\] Intent to Experiment: Web app HTML install element Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Web app HTML install element 'Lia Hiscock' via blink-dev Wed, 25 Mar 2026 16:47:00 -0700 Contact emails \[...
- [\[&lt;install&gt; Element\] Enable Declarative installation of Web Apps from Web Content \[454827186\] - Issue Tracker](https://issuetracker.google.com/issues/454827186) *(issuetracker.google.com)* *(Cites: `https://chromestatus.com/feature/5152834368700416`)*
  > WICG proposal - https://aka.ms/InstallElement Chromestatus - https://chromestatus.com/feature/5152834368700416 &lt;strong&gt;Bug: 479161962,454827186 Change-Id: I8bd76ce59d422f8e3d67d91f1e12f0f2e69ee6ef&lt;/strong&gt; Reviewed-on: https://chromium-revi...
- [Re: \[blink-dev\] Intent to Ship: Web Install API](http://www.mail-archive.com/blink-dev@chromium.org/msg17774.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152834368700416`)*
  > The navigator.install() method enables &gt; cross-origin web app installation and provides a better developer &gt; experience than handling beforeinstallprompt events. This API is proposed &gt; to ship together with the &lt;install&gt; elem...
- [\[pull\] main from ChromeDevTools:main by pull\[bot\] · Pull Request #378 · Jahid11978/devtools-frontend · GitHub](https://github.com/Jahid11978/devtools-frontend/pull/378) *(github.com)* *(Cites: `https://chromestatus.com/feature/5152834368700416`)*
  > - Feature flags: WebAppInstallation, InstallElement - Test site: https://kbhlee2121.github.io/pwa/web-install-issues/index.html - Discussion: https://&lt;strong&gt;chromestatus.com/feature/5152834368700416&lt;/strong&gt;?gate=5937069945913344 - Debugga...
- [\[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17504.html) *(mail-archive.com)* *(Cites: `https://aka.ms/installelement`)*
  > \[blink-dev\] Intent to Ship: HTML install element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: HTML install element 'Lia Hiscock' via blink-dev Mon, 21 Sep 2026 11:38:00 -0700 Contact emails \[email&#160;protected\] &lt; mail...
- [Re: \[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17597.html) *(mail-archive.com)* *(Cites: `https://aka.ms/installelement`)*
  > Re: \[blink-dev\] Intent to Ship: HTML install element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: HTML install element Rick Byers Wed, 30 Sep 2026 08:03:43 -0700 LGTM1 As for the install API &lt; https://groups.google....
- [Re: \[EXTERNAL\] Re: \[blink-dev\] Intent to Extend Experiment: Web Install API](http://www.mail-archive.com/blink-dev@chromium.org/msg16320.html) *(mail-archive.com)* *(Cites: `https://aka.ms/installelement`)*
  > &gt; &gt; - Draft spec (early draft is ... of Chrome T&amp;S feedback, we expanded the web install &gt; API effort by publishing a new explainer &gt; https://aka.ms/InstallElement which starts experimentation in m153 &gt; (chrome &gt; statu...
- [Re: \[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17614.html) *(mail-archive.com)* *(Cites: `https://aka.ms/installelement`)*
  > Re: \[blink-dev\] Intent to Ship: HTML install element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: HTML install element Philip Jägenstedt Wed, 30 Sep 2026 08:51:30 -0700 LGTM2 Can you please file an issue on https://...
- [RE: \[EXTERNAL\] Re: \[blink-dev\] Intent to Extend Experiment: Web Install API](http://www.mail-archive.com/blink-dev@chromium.org/msg16296.html) *(mail-archive.com)* *(Cites: `https://aka.ms/installelement`)*
  > \* Draft spec (early draft is ok, but must be spec-like and associated with the appropriate standardization venue, or WICG) \* We have a draft spec https://github.com/w3c/manifest/pull/1175, however it has not changed since the original OT wa...
- [\[blink-dev\] Re: Intent to Experiment: Web app HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg16233.html) *(mail-archive.com)* *(Cites: `https://aka.ms/installelement`)*
  > \[blink-dev\] Re: Intent to Experiment: Web app HTML install element Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Experiment: Web app HTML install element Yoav Weiss (@Shopify) Wed, 01 Apr 2026 08:08:28 -0700 LGTM to experi...
- [Re: \[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17773.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/install-element`)*
  > Re: \[blink-dev\] Intent to Ship: HTML install element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: HTML install element 'Dan Clark' via blink-dev Mon, 19 Oct 2026 10:45:16 -0700 Thank you for working through these! L...
- [Re: \[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17665.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/install-element`)*
  > &gt;&gt;&gt; &gt;&gt;&gt; Rick &gt;&gt;&gt; &gt;&gt;&gt; On Mon, Sep ...tmx19oox759l#heading=h.j3tt49hqiuck &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; \*Summary\* &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; &lt;strong&gt;Triggers a request for the browser to install ...
- [RE: \[blink-dev\] Intent to Ship: Web Install API](http://www.mail-archive.com/blink-dev@chromium.org/msg17686.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/install-element`)*
  > Rick On Mon, Sep 21, 2026 at 11:38 .../d/12nSXJLm8mW0gWZ\_yjlXfrV8r9gwJliVt4WVa-209-KA/edit?tab=t.0 Summary &lt;strong&gt;Triggers a request for the browser to install a web app, given a manifest URL and optional manifest ID&lt;/strong&gt;....
- [Web app installation · Issue #1430 · web-platform-tests/interop · GitHub](https://github.com/web-platform-tests/interop/issues/1430) *(github.com · 2026-09-22T14:52:52)* *(Cites: `https://wicg.github.io/install-element`)*
  > The &lt;install&gt; HTML element is &lt;strong&gt;a browser-provided button which, when clicked, prompts the user to choose whether to install a progressive web app&lt;/strong&gt; (either the current app, or a cross-origin app, by defining the link to ...

## 📚 Platform Documentation & Specifications

- [GitHub - WICG/install-element: An \`&lt;install&gt;\` element might be nice. · GitHub](https://github.com/WICG/install-element) *(github.com)*
- [install-element/explainer-manifest-url.md at main · WICG/install-element · GitHub](https://github.com/WICG/install-element/blob/main/explainer-manifest-url.md) *(github.com)*
- [Web app HTML install element · Issue #1083 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1083) *(github.com)*
- [\[pull\] main from ChromeDevTools:main by pull\[bot\] · Pull Request #378 · Jahid11978/devtools-frontend · GitHub](https://github.com/Jahid11978/devtools-frontend/pull/378) *(github.com)*
- [Web app installation · Issue #1430 · web-platform-tests/interop · GitHub](https://github.com/web-platform-tests/interop/issues/1430) *(github.com)*
- [Editorial review: Document install() API and &lt;install&gt; element by chrisdavidmills · Pull Request #45461 · mdn/content · GitHub](https://github.com/mdn/content/pull/45461) *(github.com)*
- [Web Install API · Issue #1373 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1373) *(github.com)*
- [Demos/pwa-install-element at main · MicrosoftEdge/Demos · GitHub](https://github.com/MicrosoftEdge/Demos/tree/main/pwa-install-element) *(github.com)*
- [Demos/pwa-install-api at main · MicrosoftEdge/Demos · GitHub](https://github.com/MicrosoftEdge/Demos/tree/main/pwa-install-api) *(github.com)*
- [Question: Review manifest-first Web Install API · Issue #1245 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1245) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 59 result(s) found across 12 planned queries — **31 verified relevant**
  - `"chromestatus.com/feature/5152834368700416" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (8 returned)
  - `"aka.ms/installelement" -site:aka.ms` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"wicg.github.io/install-element" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"HTML install element" API` — *Core feature API query* (8 returned)
  - `"HTML install element" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"navigator.install()" OR "install()" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"HTML install element" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"HTML install element" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (2 returned)
  - `"HTML install element" OR "Web Install API" PWA (tutorial OR guide OR "how to")` — *Searches for developer tutorials, guides, and practical blog posts demonstrating how to implement declarative web app installation.* (7 returned)
  - `"<install manifest=" OR "navigator.install(" (WebIDL OR github OR "manifest-url")` — *Finds code samples, syntax definitions, and GitHub code references for declarative and imperative Web Install features.* (8 returned)
  - `"HTML install element" OR "Web Install API" ("Chrome" OR "Chromium" OR "WICG") ("intent to ship" OR status OR roadmap)` — *Tracks platform status updates, browser vendor support, and official ship announcements across Chromium and WICG.* (8 returned)
  - `("<install>" OR "navigator.install") "beforeinstallprompt" (site:news.ycombinator.com OR site:reddit.com OR discourse.wicg.io)` — *Uncovers ecosystem sentiment, critiques, and developer debates contrasting the install element with beforeinstallprompt workflows.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 15 result(s) found — **12 verified relevant**
- **Twitter / X API v2:** *found 2 tweet(s)*
- **Dev.to Community Blogs:** 6 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 8 result(s) found — **2 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 5 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "install", shared with 0 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "install" has no test results*
- **Sources cited by the AI synthesis:** 10 result(s) found — **4 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 16 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5152834368700416)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5152834368700416)
- [Specification](https://wicg.github.io/install-element)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/454827186)
