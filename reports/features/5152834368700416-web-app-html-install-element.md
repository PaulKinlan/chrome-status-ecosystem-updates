# Web app HTML install element

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Triggers a request for the browser to install a web app, given a manifest URL and optional manifest ID. The <install> element enables cross-origin web app installation without JavaScript and provides a better developer experience than handling beforeinstallprompt events. Enterprises can control this in two ways - (1) Enterprise policy, WebAppInstallByUserEnabled, can disable user web app installs broadly, including installs initiated via navigator.install() and <install>. Or (2) Permissions Policy, web-app-installation, can allow or disallow use of this feature on origins the enterprise controls (for example, internal sites/iframes).

### Motivation

The web is currently unable to install web apps. The capability must be baked into the platform to allow for websites to distribute content without relying on proprietary protocols or invoking platform specific stores. 

A web install element democratizes application distribution and allows developers to broaden the reach of their content.

## Ecosystem Status

- **Momentum:** High (170 points)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** The `<install>` element, developed collaboratively by Google and Microsoft as a declarative counterpart to `navigator.install()`, provides a browser-rendered, secure UI control for same-origin and cross-origin Web App installation without relying on legacy `beforeinstallprompt` scripting. While Chrome and Edge have enabled the feature by default starting in milestone 154, it remains in Limited Availability on Baseline without cross-vendor buy-in.

### Recommendations
- Actionable Advice: Treat the `<install>` element strictly as an optional progressive enhancement for Chromium-based enterprise and desktop environments, while retaining standard fallback installation flows and browser-agnostic installation UI for Safari and Firefox users.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @marcoscaceres: "Closed via https://github.com/WebKit/standards-positions/issues/619..."
- Standards Activity (Mozilla): Latest discussion from @saschanaz: ""install capability" is not very specific topic, should we close this in favor of #1371, #1387, and #1388?..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Install web apps with the new HTML install element" (32 points, 14 comments).

## Standards Positions

- **WebKit:** [Web Install API](https://github.com/WebKit/standards-positions/issues/463) [closed]
- **Mozilla:** [Web Install capability](https://github.com/mozilla/standards-positions/issues/1179) [open]

## Community Discussions

- [Install web apps with the new HTML install element](https://news.ycombinator.com/item?id=48360474) (32 pts, 14 comments)
- [Install web apps with the new HTML install element](https://news.ycombinator.com/item?id=48125969) (3 pts, 0 comments)

## 📰 Ecosystem Blogs & Articles

- [Install web apps with the new HTML install element](https://developer.chrome.com/blog/install-element-ot) *(developer.chrome.com · 2026-06-01T18:06:28Z)*
  > Install web apps with the new HTML install element | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العرب...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGaY0UP7Wxr2c-t2-bZ1udFKBhMcN76WGkNEzxmLRgE_Y7M2bQMjr7Ux__eMyLhh8q4ILFsjoe6XNDSUoDc8OQ-fPZuSFLqGttWAQW-lQ8JxfU-GFimpz4he7YBclklaNmL5FhwpgoY1XxtDDqVhsmcL2RQtesMDY0LCxetBA==) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGbEEtnLWtgk4DZVByH9bQY7UaRPL5dRUZ0Nfpv7HTBki7NTutRZglKyqW7XQRNa-RuBdZjrHualem94-XK-nt60H0JkrSu-RS9xiNGQ7ztq0Uk5Ly8XiAsSOsPtdSqhMf5-REict-u0l7Y) *(vertexaisearch.cloud.google.com)*
  > Installer des applications Web avec le nouvel élément d&apos;installation HTML | Blog | Chrome for Developers Passer au contenu principal / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiế...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHC57IIMYjzuoCdUWgqYM9dn1KpWBq4qe31FlozAhDKT_3VEnMNw9x6qRulRAZ_CCtx1S3vwB3qB7BBZWgPrY4RxDMHVCp8UH1qX_yU7z85tRrzGzQiWD01TTh19qZahrw7KckwrcVF) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [windows.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEZMrm-dQ35Ie1q4eYEhaokAtkYzsEkKMtJPQPWlMNkhjX3YNAgTWdxwdDVZY0NoEULjkVyOoMADhIcO9r90a3aTzwFgm86DPhAZyfRPEOtlyT9uq6DGOu9fQDWxE1PKtXtmHN_hgwgTkXNq5k0hU6Nkv4KnsHJu_Dw3ohIWaqvkxJ7L4OK7Yb75hnjC-Dd) *(vertexaisearch.cloud.google.com)*
  > The Web Install API is ready for testing - Microsoft Edge Blog Skip to main content Skip to main content Windows Blogs Windows Experience Devices Windows Developer Microsoft Edge Windows Insider Microsoft 365 Microsoft 365 Azure Copilot Windows Surfa...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFAi_TCSX_TNyRCs-fO_cdW-gS6xotRzQqRYR3mRAmWeq9y2H2Y6RFnV8DtdB7AFjhCHK4UK8-6jj6tBDXCO-kIAqsCPaTf1khEbB8pyUqGNDsFzg3KSSukpp1vKnrhRZnwYgnQz-1TmJsRaDv8lfbOtQ_izo-tgcwWE5CaNspI2flRBgT94sp4bGg=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **Web app HTML install element** (`<install>`) and the companion **Web Install API** (`navigator.install()`) represent a standardized effort to bring declarative and programmatic Progressive Web App (PWA) installation
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQECSctsuApbXZpqapecG-IDyir1y94zLUxY2GvFO-VXI2KJ0TG08sgTqvK2Gq87CH1tK88Mq5tAbuWhKK0skbN0jcj0I0w1PwpgfWeYiKZd0i0kyxs2bRwCsalEAv7Eip6tCf_Q) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **Web app HTML install element** (`<install>`) and the companion **Web Install API** (`navigator.install()`) represent a standardized effort to bring declarative and programmatic Progressive Web App (PWA) installation
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGKyhMWhHi8BlU7I7OaNmcCJwnAGUxH6ROl_aNsQlW1JaSOWSfOTmn5dj68IoU6AlLtzHmBk0eGVplv361csFaN5YQ1m49iFQyCD906r4-ku1QiSLBsBWrom-YAGcEl6DM-1tSvdxI_WzabiTsc5dJz_FwK3oQrjOiYO4MCSJnHaUvKZsA9BQk=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **Web app HTML install element** (`<install>`) and the companion **Web Install API** (`navigator.install()`) represent a standardized effort to bring declarative and programmatic Progressive Web App (PWA) installation
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGrNlz3VrOMPwg2VtqKy3aWF4oHKUBi-l_6bTIy16x3yk3WwHnG1qSod82lr3oncDvhKFuy903UACwV8op3aYYS__lohCA_-5MqjKcXQ9Eqvh4EEWihNidBvORk) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **Web app HTML install element** (`<install>`) and the companion **Web Install API** (`navigator.install()`) represent a standardized effort to bring declarative and programmatic Progressive Web App (PWA) installation
- [patrickbrosset.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEc7cC4x_Lao4IE8pYVGy9K0-AG1MekgwkZ-MyS2KeWK5W2R-sxYKnnZuzlxIdTAP8it8PTGsdQEMQB8BW6TrpmlJk1dkj7-MHPV3OBDtRdQ7EMxkNsodZKS70=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **Web app HTML install element** (`<install>`) and the companion **Web Install API** (`navigator.install()`) represent a standardized effort to bring declarative and programmatic Progressive Web App (PWA) installation
- [pwastore.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHKoZZKOwkbbQVW9M9u8o8HNx1Kif0SEP961sDl7U2ql9ZoDYp1RmYvR0mdwdHYpzdRHeneWmGc9KzyCN2qTk7n_2soGr10SNrowZykKNthWqU-mJZGmh7bMHFlXIY=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **Web app HTML install element** (`<install>`) and the companion **Web Install API** (`navigator.install()`) represent a standardized effort to bring declarative and programmatic Progressive Web App (PWA) installation
- [topedia.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGTkpnUz56UGQUVnKpwrDHcfgNPRpilW9UUdWriZAsI89QWkUDFdLHTZJHv2wWNe26kRBXs6qauynG2c-1-rqJH6A3--pDMUH5sDIfmb0ZvmPO4NMIKZkF4Oz1YMlpu1HCbqUoJ6hpVrok1m--_JVjphg4Ce7Not1M-PQF8vVEmPfBX-Vzaj_ZqixSAn8HPDCFxjZJ2nc-J) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **Web app HTML install element** (`<install>`) and the companion **Web Install API** (`navigator.install()`) represent a standardized effort to bring declarative and programmatic Progressive Web App (PWA) installation
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH4O5I9zgQOQ_ul3PVzCog1H_xxbh198sYgVG4CpIa0nePH-d9_baU1lKLbbqGNpNE-5meySWC27TV2-R_2Vbmq30AngWgyHb-mAqQMCv870Rwzv0KiEdix9hYuBO7dERr51t34wr7EoQcdcSdrbgwmVg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **Web app HTML install element** (`<install>`) and the companion **Web Install API** (`navigator.install()`) represent a standardized effort to bring declarative and programmatic Progressive Web App (PWA) installation
- [El nuevo HTML install: instala PWAs sin JavaScript](https://azirgo.com/blog/html-install-element-pwa) *(azirgo.com · 2026-05-19T00:00:00)*
  > <strong>Abrí chrome://flags/#web-app-install-element en Chrome o Edge, ponelo en Enabled y reiniciás el navegador</strong>. A partir de ese momento el elemento &lt;install&gt; funciona en cualquier página que visites — sin necesidad de token, sin nec...
- [[blink-dev] Intent to Experiment: Web app HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg16195.html) *(mail-archive.com)*
  > WebView application risks Does this intent deprecate or change behavior of existing APIs, such that it has potentially high risk for Android WebView-based applications? N/A Ongoing technical constraints None Debuggability Existing DevTools support fo...
- [[blink-dev] Re: Intent to Experiment: Web app HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg16233.html) *(mail-archive.com)*
  > &gt; &gt; *WebView application risks* &gt; &gt; *Does this intent deprecate or change behavior of existing APIs, such that &gt; it has potentially high risk for Android WebView-based applications?* &gt; &gt; N/A &gt; &gt; *Ongoing technical constrain...
- [Vector Search Is Still the Memory Layer Agents Actually Need](https://dev.to/bengreenberg/vector-search-is-still-the-memory-layer-agents-actually-need-50dn) *(dev.to · Ben Greenberg · Aug 27)*
  > When I was working on Vector Search with JavaScript, vector search was a hot topic. By the time the ...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 3 result(s) found (query: `""Web app HTML install element" API"`) — **3 verified relevant**
- **Google Search Grounding (gemini-3.7-flash):** 12 result(s) found — **12 verified relevant**
- **Dev.to Community Blogs:** 8 result(s) found (query: `"Web app HTML install element"`) — **17 verified relevant**
- **Hacker News Algolia:** 5 result(s) found (query: `"Web app HTML install element"`) — **2 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 5 item(s) inspected
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5152834368700416)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5152834368700416)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/454827186)
