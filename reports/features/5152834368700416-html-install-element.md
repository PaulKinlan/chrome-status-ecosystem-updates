# HTML install element

> **Report Week:** 2026-W40 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Triggers a request for the browser to install a web app, given a manifest URL and optional manifest ID. The &lt;install&gt; element enables cross-origin web app installation without JavaScript and provides a better developer experience than handling beforeinstallprompt events. Enterprises can control this in two ways - (1) Enterprise policy, WebAppInstallByUserEnabled, can disable user web app installs broadly, including installs initiated via navigator.install() and &lt;install&gt;. Or (2) Permissions Policy, web-app-installation, can allow or disallow use of this feature on origins the enterprise controls (for example, internal sites/iframes).

### Motivation

The web currently lacks the ability for a site to offer installation of a web app identified by a cross-origin manifest. Limited support exists for eligible same-origin web apps via ambient installation affordances and the beforeinstallprompt event. However, the existent browser-provided entry points are difficult for developers to use and users to discover.

This capability lets developers distribute web apps across the web without proprietary protocols or platform-specific stores. It brings web app distribution closer to the reach developers expect from other application models while preserving browser-controlled safeguards and explicit user choice.

## Ecosystem Status

- **Momentum:** High (462 points)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** HTML install element is currently Enabled by default in Chrome 156. Verified ecosystem momentum is High with Contested / Concerns Raised standards alignment and mixed / skeptical developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
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
- 💬 **Hacker News:** [How to Dynamically Install Custom (HTML) Elements](https://news.ycombinator.com/item?id=46420383) — *2 pts, 0 comments*
- 💬 **Hacker News:** [Show HN: Plastron – A spreadsheet you grow into an app, in one index.html](https://news.ycombinator.com/item?id=48462932) — *2 pts, 0 comments*
- 🐦 **Twitter / X:** [I just discovered the experimental \`navigator.install()\` function today. Developing a PWA installer is no longer a tedio](https://twitter.com/chdenat/status/2103890796919537858) — *by @chdenat, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Install web apps with the new HTML install element](https://developer.chrome.com/blog/install-element-ot) *(developer.chrome.com · 2026-06-01T18:06:28Z)*
  > Install web apps with the new HTML install element | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العرب...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHh5tcogrS_hd-yh3F-PVucX-LPsLsOduWZvXGG3RmxtTQnNDhp3zBUmuQH6up18y-NEmcbAtUG1JcykISHhDW28PIFRy0zXqnXcKizrbp08W1j-1jwDH3qjPSZqJg-LCRTsjaFZfeHEs2s) *(vertexaisearch.cloud.google.com)*
  > Install web apps with the new HTML install element | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العرب...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE7O3mPdVsaVIE_Aq2jPB0kkSEUbcPcdxpbuqp1J1rv0ErdhGDujxRuV-PmHQUDgBKJVhcdPr_dmXjrxDQR6pLGcbjOXkyqcBSsGbIt3fb2YawEQq2LWYNxsQVgFO8=) *(vertexaisearch.cloud.google.com)*
  > GitHub - WICG/install-element: An `<install>` element might be nice. · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your se...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEVpCTNSai-u6xFPLIz5nHW9fZeYv9IiLgfe8rOuDUU_G6vdRXoDrE5szsl_unRSDrMsDasM9kiYNL8RWaDLYDfO-btPJS6qO09ce1wf3npaCYmIFSr_9HdhrrNh-ANavg7UOOv1dZ6) *(vertexaisearch.cloud.google.com)*
  > The **HTML install element (`<install>`)** provides a declarative way for websites to offer web application installation without JavaScript ceremonies. Incubated within the W3C Web Platform Incubator Group (WICG) through a joint effort between Micros
- [patrickbrosset.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEkiJ0nMTNcBsDE5h3fwedWNnCmLJnEdaFFWKZgdsn5IvAZWL0ganv_kQ-f5IEptRixMLp1ZD64wyLa4cBXgpPGqdG_dZo4Rgm9peKmb92760-0wIno3uzn2z4xicyAT7R4zHCAWzhSv1CTP9eckrHq7akMf60omyGOdF9RtEbGlgBD611lEYPz2Y1T8AtZL3ht4LFE1yuQbg==) *(vertexaisearch.cloud.google.com)*
  > The **HTML install element (`<install>`)** provides a declarative way for websites to offer web application installation without JavaScript ceremonies. Incubated within the W3C Web Platform Incubator Group (WICG) through a joint effort between Micros
- [reddit.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGiMQxF-H8-AvXn7Crexl9CTB4FG95Tn7BbuSAZ5T2uOtDn_08iijSQ5DpuFYRGgUftLLzBHWSGST5ix7hxvk348SpHXF7GdSFnp_W12M8KKYf5VDZHVSmjLL_hFVcCpMxdfiH6pUklMt9TKvcqto9AVWN0hI_bm3Ov4SDdbTuXtxLXyvktBA==) *(vertexaisearch.cloud.google.com)*
  > The **HTML install element (`<install>`)** provides a declarative way for websites to offer web application installation without JavaScript ceremonies. Incubated within the W3C Web Platform Incubator Group (WICG) through a joint effort between Micros
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHGsvSIMMspFu-nfzV7WsMzzv1HaLKhcCsMuMth7Qrka0qpoUr00-LKLhajQbah_GjMKdGytJaJ8PwV7V0h2gvlyXhKHygfCkxA1MEIXuQ1tP6xGmG5ErV1jPg3NNYEvvR0WIlm5xQC4FsVf5INGx2QQk5wWAPzESGUjaMI2TOORsxmBYp_5DJF_Q==) *(vertexaisearch.cloud.google.com)*
  > The **HTML install element (`<install>`)** provides a declarative way for websites to offer web application installation without JavaScript ceremonies. Incubated within the W3C Web Platform Incubator Group (WICG) through a joint effort between Micros
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE7QqerysKOcaTdXwh2ALUv9xtwBuj4_lAJfZoAuygvn_Sho5YWCmF9x6zQUtJvLnVGyEZm8VqDiiOMFkIVDnNYsApQr7BCR_5yBiKg9P8EKfz-uI8af-ydrWp3PTk-b1qGn02YtNrg) *(vertexaisearch.cloud.google.com)*
  > The **HTML install element (`<install>`)** provides a declarative way for websites to offer web application installation without JavaScript ceremonies. Incubated within the W3C Web Platform Incubator Group (WICG) through a joint effort between Micros
- [ycombinator.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHCeKQri5w-Qm_-Mr2UzE2tNCUYIDlrS2GMPdMYhhFfjghy2C0v2SPLaoItrSt22Gw9WcsAlAvohExqQe3X1UhNVat_kmib9aiD6JCzxGa4hEbkqyDVTcjOLf-9GHtAYwpZVro=) *(vertexaisearch.cloud.google.com)*
  > The **HTML install element (`<install>`)** provides a declarative way for websites to offer web application installation without JavaScript ceremonies. Incubated within the W3C Web Platform Incubator Group (WICG) through a joint effort between Micros
- [pwastore.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH-pYmDaWPez8z7kziFCjzj9UeNGDCmx2M4zkMdTtWwyRB6wX0O11LhxT4MniS3Mzmz88QYtLD1I7kJhARLDEPEAiBSjVmQBE7xbaCQ6Uj3qhqSHTeHGgAg5p78yzo=) *(vertexaisearch.cloud.google.com)*
  > The **HTML install element (`<install>`)** provides a declarative way for websites to offer web application installation without JavaScript ceremonies. Incubated within the W3C Web Platform Incubator Group (WICG) through a joint effort between Micros
- [infoq.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGzTvDiurhFPfgcniWZo-eYRok-4byOkRX-M8G5yEn6hpAjyS5VtI8WCcmXBzYajh-mPRoFyP7xJRgl_6D4342jty-Rv0v7MB4NjkN_WXcJQZL_PWT_o_23tI-5ptXhieNmePKrAYY8lUdVwRt-tlS543I7ntpE) *(vertexaisearch.cloud.google.com)*
  > The **HTML install element (`<install>`)** provides a declarative way for websites to offer web application installation without JavaScript ceremonies. Incubated within the W3C Web Platform Incubator Group (WICG) through a joint effort between Micros
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHjLCxAx3Np-OzqlHkAC17fdnbPCR6Ozam8rljCieR_q6MBHY2sgnE9T1TY1DlRJ3Bplv8XLpUdLgLZFxYL5h74idCEGDtJlXDy1KOx3FneHT2ysTPKQ-L2waM_jTZIsJJuq9I8swLe8rHj99M=) *(vertexaisearch.cloud.google.com)*
  > The **HTML install element (`<install>`)** provides a declarative way for websites to offer web application installation without JavaScript ceremonies. Incubated within the W3C Web Platform Incubator Group (WICG) through a joint effort between Micros
- [\[blink-dev\] Intent to Ship: Web Install API](http://www.mail-archive.com/blink-dev@chromium.org/msg17503.html) *(mail-archive.com)*
  > The navigator.install() method ... the &lt;install&gt; element, a declarative entry point to the same installation capability: https://<strong>chromestatus.com/feature/5152834368700416</strong>....
- [\[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17504.html) *(mail-archive.com)*
  > Contact emails [email ...HOqlttjEFJ5Vo/edit?tab=t.tmx19oox759l#heading=h.j3tt49hqiuck Summary <strong>Triggers a request for the browser to install a web app, given a manifest URL and optional manifest ID</strong>....
- [\[blink-dev\] Intent to Experiment: Web app HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg16195.html) *(mail-archive.com)*
  > Explainer https://aka.ms/installelement Specification No information provided Design docs https://docs.google.com/document/d/1rGvLhD4SR8Y9M1wVmqgyesPNkbZGU7HOqlttjEFJ5Vo/edit?tab=t.tmx19oox759l#heading=h.j3tt49hqiuck Summary <strong>Allows a website ...
- [\[blink-dev\] Re: Intent to Experiment: Web app HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg16233.html) *(mail-archive.com)*
  > &gt; *Contact emails* &gt; &gt; [email ...NkbZGU7HOqlttjEFJ5Vo/edit?tab=t.tmx19oox759l#heading=h.j3tt49hqiuck &gt; &gt; *Summary* &gt; &gt; <strong>Allows a website to declaratively prompt users to install a web app</strong>....
- [RE: \[EXTERNAL\] Re: \[blink-dev\] Intent to Extend Experiment: Web Install API](http://www.mail-archive.com/blink-dev@chromium.org/msg16296.html) *(mail-archive.com)*
  > * Draft spec (early draft is ok, but must be spec-like and associated with the appropriate standardization venue, or WICG) * We have a draft spec https://github.com/w3c/manifest/pull/1175, however it has not changed since the original OT was requeste...
- [Patrick - Install web apps with the new HTML install element](https://patrickbrosset.com/articles/2026-05-13-install-web-apps-with-the-new-html-install-element) *(patrickbrosset.com)*
  > Install web apps with the new HTML install element
- [Web app HTML install element](https://chromestatus.com/feature/5152834368700416) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [Install web apps with the new HTML install element Stay organized with collections Save and categorize content based on your preferences. \| Vuink.com](https://vuink.com/post/qrirybcre-d-dpuebzr-d-dpbz/blog/install-element-ot) *(vuink.com · 2026-05-13T19:00:07)*
  > When you use the beforeinstallprompt ... element changes that: <strong>drop a single HTML element into your page and the browser renders a trusted install button for you, with no JavaScript required</strong>....
- [Install web apps with the new HTML install element \| Hacker News](https://news.ycombinator.com/item?id=48360474) *(news.ycombinator.com · 2026-06-07T04:23:43)*
  > Perhaps usable in an entirely locked down corporate environment where centralised IT with &quot;standard desktop builds&quot; and MDM will enforce Chrome use. But without at least Safari support, and ideally Firefox (plus forks), this remains a usele...
- [HTMLの新しい要素「&lt;install&gt;」はJavaScriptなしで、Webアプリのインストールが簡単にできるようになります \| コリス](https://coliss.com/articles/build-websites/operation/work/new-html-install-element.html) *(coliss.com · 2026-05-20T00:25:04)*
  > ぜひ試してみて、独自のオリジントライアルが提供されている命令型Web Install API（navigator.install()）との違いを確認してください。
- [FullStack - How to create a working blogging website with pure HTML, CSS and JS in 2021. - DEV Community](https://dev.to/themodernweb/fullstack-how-to-create-a-working-blogging-website-with-pure-html-css-and-js-in-2021-9di) *(dev.to · 2021-08-14T06:59:47)*
  > So we will use same JavaScript function to make both these elements. So for that link home.js file to blog.html above blog.js.
- [How To Create a Blog Layout](https://www.w3schools.com/howto/howto_css_blog_layout.asp) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Web app HTML install element · Issue #1083 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1083) *(github.com · 2026-07-29T21:39:54)* *(Cites: `https://chromestatus.com/feature/5152834368700416`)*
  > https://<strong>chromestatus.com/feature/5152834368700416</strong> · Reactions are currently unavailable · Sign up for free to join this conversation on GitHub. Already have an account? Sign in to comment · dmurph · P0new-featurepwa · No ty...
- [\[blink-dev\] Intent to Ship: Web Install API](http://www.mail-archive.com/blink-dev@chromium.org/msg17503.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152834368700416`)*
  > The navigator.install() method ... the &lt;install&gt; element, a declarative entry point to the same installation capability: https://<strong>chromestatus.com/feature/5152834368700416</strong>....
- [\[pull\] main from ChromeDevTools:main by pull\[bot\] · Pull Request #951 · zhangenming/devtools-frontend](https://github.com/zhangenming/devtools-frontend/pull/951) *(github.com)* *(Cites: `https://chromestatus.com/feature/5152834368700416`)*
  > - Feature flags: WebAppInstallation, InstallElement - Test site: https://kbhlee2121.github.io/pwa/web-install-issues/index.html - Discussion: https://<strong>chromestatus.com/feature/5152834368700416</strong>?gate=5937069945913344 - Debugga...
- [\[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17504.html) *(mail-archive.com)* *(Cites: `https://aka.ms/installelement`)*
  > Contact emails [email ...HOqlttjEFJ5Vo/edit?tab=t.tmx19oox759l#heading=h.j3tt49hqiuck Summary <strong>Triggers a request for the browser to install a web app, given a manifest URL and optional manifest ID</strong>....
- [\[blink-dev\] Intent to Experiment: Web app HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg16195.html) *(mail-archive.com)* *(Cites: `https://aka.ms/installelement`)*
  > Explainer https://aka.ms/installelement Specification No information provided Design docs https://docs.google.com/document/d/1rGvLhD4SR8Y9M1wVmqgyesPNkbZGU7HOqlttjEFJ5Vo/edit?tab=t.tmx19oox759l#heading=h.j3tt49hqiuck Summary <strong>Allows ...
- [\[blink-dev\] Re: Intent to Experiment: Web app HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg16233.html) *(mail-archive.com)* *(Cites: `https://aka.ms/installelement`)*
  > &gt; *Contact emails* &gt; &gt; [email ...NkbZGU7HOqlttjEFJ5Vo/edit?tab=t.tmx19oox759l#heading=h.j3tt49hqiuck &gt; &gt; *Summary* &gt; &gt; <strong>Allows a website to declaratively prompt users to install a web app</strong>....
- [RE: \[EXTERNAL\] Re: \[blink-dev\] Intent to Extend Experiment: Web Install API](http://www.mail-archive.com/blink-dev@chromium.org/msg16296.html) *(mail-archive.com)* *(Cites: `https://aka.ms/installelement`)*
  > * Draft spec (early draft is ok, but must be spec-like and associated with the appropriate standardization venue, or WICG) * We have a draft spec https://github.com/w3c/manifest/pull/1175, however it has not changed since the original OT wa...
- [Web app installation · Issue #1430 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1430) *(github.com · 2026-09-22T14:52:52)* *(Cites: `https://wicg.github.io/install-element`)*
  > The &lt;install&gt; HTML element is <strong>a browser-provided button which, when clicked, prompts the user to choose whether to install a progressive web app</strong> (either the current app, or a cross-origin app, by defining the link to ...

## 📚 Platform Documentation & Specifications

- [Web app HTML install element · Issue #1083 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1083) *(github.com)*
- [\[pull\] main from ChromeDevTools:main by pull\[bot\] · Pull Request #951 · zhangenming/devtools-frontend](https://github.com/zhangenming/devtools-frontend/pull/951) *(github.com)*
- [Web app installation · Issue #1430 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1430) *(github.com)*
- [GitHub - WICG/cross-origin-storage: Cross-Origin Storage (COS), a content-addressable browser cache that shares files across origins by hash, with k-anonymity-based availability gating to prevent cross-site tracking · GitHub](https://github.com/WICG/cross-origin-storage) *(github.com)*
- [crossorigin HTML attribute - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/crossorigin) *(developer.mozilla.org)*
- [Add \`crossoriginstorage\` attribute to \`&lt;link&gt;\` and \`&lt;script&gt;\` · Issue #12770 · whatwg/html](https://github.com/whatwg/html/issues/12770) *(github.com)*
- [Editorial review: Document install() API and &lt;install&gt; element by chrisdavidmills · Pull Request #45461 · mdn/content](https://github.com/mdn/content/pull/45461) *(github.com)*
- [\[Feature\] Use the HTML &lt;install&gt; element for PWA installation with a fallback · Issue #526 · lgs1920/studio](https://github.com/lgs1920/studio/issues/526) *(github.com)*
- [MSEdgeExplainers/WebInstall/explainer.md at main · MicrosoftEdge/MSEdgeExplainers](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/WebInstall/explainer.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 46 result(s) found across 12 planned queries — **21 verified relevant**
  - `"chromestatus.com/feature/5152834368700416" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"aka.ms/installelement" -site:aka.ms` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"wicg.github.io/install-element" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"HTML install element" API` — *Core feature API query* (7 returned)
  - `"HTML install element" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"navigator.install" OR "cross-origin" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"HTML install element" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"HTML install element" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (2 returned)
  - `"HTML install element" OR "<install" PWA tutorial OR guide "beforeinstallprompt"` — *Discovers developer tutorials, practical guides, and articles explaining how to migrate from beforeinstallprompt to the declarative HTML install element.* (0 returned)
  - `"<install manifest=" OR "navigator.install()" "web-app-installation"` — *Finds code snippets, markup samples, and Permissions Policy configurations for implementing the HTML install element and its script counterpart.* (1 returned)
  - `"HTML install element" ("Intent to Prototype" OR "Intent to Ship" OR Blink-dev OR chromestatus)` — *Tracks browser vendor implementation status, standards progression, and official launch announcements across Chromium and Edge.* (1 returned)
  - `"install-element" OR "HTML install element" (site:github.com/WICG OR site:news.ycombinator.com OR site:reddit.com)` — *Surfaces community reactions, developer discussions, and standards consensus or concerns regarding cross-origin web app installations.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 8 result(s) found — **4 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 5 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 4 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5152834368700416)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5152834368700416)
- [Specification](https://wicg.github.io/install-element)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/454827186)
