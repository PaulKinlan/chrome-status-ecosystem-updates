# Additional Windowing Controls

> **Report Week:** 2026-W40 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Enables web applications with the window-management permission to maximize(), minimize(), and restore() their windows, and to prevent resizing through setResizable(). Additionally, new CSS media features display-state and resizable enable scripts and content to adapt to the respective window states and resizability. These features improve the usability of VDI remote application windows in Web clients, especially when it comes to titlebar window controls. The new functionality enhances existing Window Management API features: https://chromestatus.com/feature/5252960583942144

### Motivation

Virtual Desktop Infrastructure (VDI) web clients have limited abilities to integrate remote application windows with the local desktop environment, which creates suboptimal experiences for their users. Currently, they can only present full disjoint remote desktop environments (e.g. in a local fullscreen window), or present individual remote applications in separate local windows with titlebar window controls that are inoperative, redundant, and confusing for users.

## Ecosystem Status

- **Momentum:** High (330 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Additional Windowing Controls (AWC) expands the Window Management API with imperative methods (\`maximize()\`, \`minimize()\`, \`restore()\`, \`setResizable()\`) and CSS media features (\`display-state\`, \`resizable\`) specifically designed to streamline installed desktop web apps and enterprise VDI streaming clients. While Chromium has pushed to ship the capabilities by default, the specification remains largely a single-vendor initiative without multi-engine consensus. Cross-engine adoption remains blocked due to long-standing concerns regarding user agency, window-manager spoofing, and OS integration.

### Recommendations
- Actionable Advice: Treat Additional Windowing Controls strictly as an optional progressive enhancement for installed desktop PWAs in Chromium environments, always validating the \`window-management\` permission beforehand. Ensure applications retain intuitive manual window fallbacks and responsive CSS defaults when operating in non-Chromium or standard tabbed browsing contexts.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @sonkkeli: "Hey, I'm jumping in here as I'm continuing on Ivan's work.  There were some updates made on the proposed APIs and the current proposals are at least a..."
- Standards Activity (Mozilla): Latest discussion from @michaelwasserman: "Client application window controls may indeed be limited by the OS, Window Manager, protocols, utilities, and modalities. The API surface offers coher..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Additional Windowing Controls](https://github.com/WebKit/standards-positions/issues/96) [open]
- **Mozilla:** [Additional Windowing Controls](https://github.com/mozilla/standards-positions/issues/712) [open]
- **W3C TAG:** [WG New Spec: Additional Windowing Controls](https://github.com/w3ctag/design-reviews/issues/1246) [open]

## 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHt6oSU4d3tX9XhyHc5MOTZE4Yt6c1-yLEFy3R2XnjS2BKSm6kpBxc_0VEvdv5DI5-faUT0Dtw7QJVv5GaaLZKfcJclea9Tlg5ESHtlcVHXu2kwVyfgvDdQ1D0JmTULJoE8RTxfTCKQCF3nWrU=) *(vertexaisearch.cloud.google.com)*
  > Additional Windowing Controls · Issue #96 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your ...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGa30SGYx0NRHg2ZU2XvQyF1cGvCvhjuJVyrby42bXh_auGppaauYXAweObJy0-g5IAdThfYqq4Nee2G95EtjOCYFOw_HAnFIf-Ch1vP7450fzkzFFrRX0S5D_EY0toeujQ2_75bvHNldBOEVWM) *(vertexaisearch.cloud.google.com)*
  > Additional Windowing Controls · Issue #96 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your ...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG8pFNe2fW2wi82u3xejI18Np3tNQdd5bmJU1olKhUWb8GFFclIENEI8uFJ_qzrob0eQDTysEFMXif0WnRouKdz27RxgWEsAUO6zaWk3bgBQt6SJBVyUkwBXztQF27C-_Y_1bD4kFjs4qhI) *(vertexaisearch.cloud.google.com)*
  > WG New Spec: Additional Windowing Controls · Issue #1246 · w3ctag/design-reviews · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to ref...
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFWorAlsh5f2N_uSQlDoVdwIHDuc04khEQ01seVQ0QAHRqZU4cxzRIBzoB_vVcxV0k9HG9bGbIrMuyVNqAPrYAOsgOopX5Lv_5FNzO9eeiJFbc-I5M7nywhC9ZUumypdV1jL5c8dUzezr5zJA==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of Additional Windowing Controls (AWC)  The **Additional Windowing Controls** feature extends the [W3C Window Management API](https://chromestatus.com/feature/5252960583942144) to provide web applications—specifically installed Progressi
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHamgr2zRw5y1c0-UCNQttTBEPIrBZUMxOVpCvwid6Cy6IsGa-Jr0k7Cnp5H4Ym7Q0pq9ywaCVavEtV95GTpBDA9bsmauSHnhqKVnEgm--J0YgnFsw__StyorM=) *(vertexaisearch.cloud.google.com)*
  > ### Overview of Additional Windowing Controls (AWC)  The **Additional Windowing Controls** feature extends the [W3C Window Management API](https://chromestatus.com/feature/5252960583942144) to provide web applications—specifically installed Progressi
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFgLSRL1WUXeCwxhp4Do7ltZyQ0szt3NowA_4au_W25k0VVTO0b0rbJvHGJ0fcHn9g9Uh39hAzublCkuIn0p-9wT4-VwJV52Uv1QhJFFaJc4kijlvGqV6Z60MJtX94n2p2KBQ76-7d8F4hk) *(vertexaisearch.cloud.google.com)*
  > ### Overview of Additional Windowing Controls (AWC)  The **Additional Windowing Controls** feature extends the [W3C Window Management API](https://chromestatus.com/feature/5252960583942144) to provide web applications—specifically installed Progressi
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFBEcfOb1iDTt3HviVL0Y4HCdjH3g3jIu9YcAZ9QOqsFZW-4L3AzOgXWjUXBJaCbFe9GmLpqQ-SQ-E7ccfQx1UxggdqNUQdOu4aszr1EAYy8zlEzHMA7Gd5opZ6X7wAvzLcRZsHUmiJZpM6iNJaayOP3Q==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of Additional Windowing Controls (AWC)  The **Additional Windowing Controls** feature extends the [W3C Window Management API](https://chromestatus.com/feature/5252960583942144) to provide web applications—specifically installed Progressi
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGrNAEZBxB2DrkBsgXYKn_p0qT3zUbWmfFNY2b_QPKMaMoSGNmN_2BjWisj_DikQLWeZ-4Kjl1vaACP2mYLYtNejCReutZs8Fn4qo3RU4J2wfWIDOD4M2JmOeM2NPNdMSbjbKmBjAVRYtBTdinfD5WOjrRTnYR6pOhMwQ==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of Additional Windowing Controls (AWC)  The **Additional Windowing Controls** feature extends the [W3C Window Management API](https://chromestatus.com/feature/5252960583942144) to provide web applications—specifically installed Progressi
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGwuLHwzktDEA4ZJHo-gmgNbKJXP9aqqz95wk9rznV8l165jD1TrFvktAcoreVqp1A0CwgSRcxEy3yY9_53p1urR7GQP3eUq5mMsglCtPCmGL33deRu0NKNdkZO1OP2_mePjsi_GwhgL8KNFdGO) *(vertexaisearch.cloud.google.com)*
  > ### Overview of Additional Windowing Controls (AWC)  The **Additional Windowing Controls** feature extends the [W3C Window Management API](https://chromestatus.com/feature/5252960583942144) to provide web applications—specifically installed Progressi
- [webkit.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEf9HvpK2RHCzT-Jcj2d2gPR66SKZy2idWEIsK9nu9iKxdlmsF0UUbW3vM0jsDkE2gWE6bo-RmT9Bety1WsdLWCCiXU8EEUyy_Axquhk44ThBhqvEfBctO9GAD3I10=) *(vertexaisearch.cloud.google.com)*
  > ### Overview of Additional Windowing Controls (AWC)  The **Additional Windowing Controls** feature extends the [W3C Window Management API](https://chromestatus.com/feature/5252960583942144) to provide web applications—specifically installed Progressi
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHf9jigQZNzs7O1uNFg7-8RVzlNQzee2EAIa5_Rav2cG-2SabsH5SQPq27vaCXdQRTgfopQtiCRUhDclay0eeQm7dCtSWXStokoOUzyVgvklBWGMlnYK9Ei4ieyjXTYMZK6qUhM0_sCDhPF-oNSVIG4BbBACx6YbBlewz8mc9azUi8nSg==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of Additional Windowing Controls (AWC)  The **Additional Windowing Controls** feature extends the [W3C Window Management API](https://chromestatus.com/feature/5252960583942144) to provide web applications—specifically installed Progressi
- [web.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEzI721b33dXOGJZdBDAx5e6VMb42ELRkfTz7UnaaPNkDalP-HlTysytQTJad3SR_Nf64CdjiUPTgPcE7zRh2UFnmNNyqrPZBCd_noyfHpxMdjdJC4c8HxtKRWKHucE3mcs7M6vFg==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of Additional Windowing Controls (AWC)  The **Additional Windowing Controls** feature extends the [W3C Window Management API](https://chromestatus.com/feature/5252960583942144) to provide web applications—specifically installed Progressi
- [Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17444.html) *(mail-archive.com)*
  > /No information provided/ *Link to entry on the Chrome Platform Status* https://chromestatus.com/feature/5201832664629248?gate=5182130005475328 *Links to previous Intent discussions* Intent to Prototype: https://groups.google.com/a/chromium.org/g/bli...
- [\[blink-dev\] Re: Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17441.html) *(mail-archive.com)*
  > &gt; *No information provided* &gt; &gt; *Link to entry on the Chrome Platform Status* &gt; https://chromestatus.com/feature/5201832664629248?gate=5182130005475328 &gt; &gt; *Links to previous Intent discussions* &gt; Intent to Prototype: &gt; https:...
- [\[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17394.html) *(mail-archive.com)*
  > <strong>No information provided Link to entry on the Chrome Platform Status https://chromestatus.com/feature/5201832664629248?gate=5182130005475328 Links to previous Intent discussions Intent to Prototype: https://groups.google.com/a/chromium.org/g/b...
- [Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17442.html) *(mail-archive.com)*
  > &gt; *Contact emails* &gt; [email protected], ...ow-minimize-method &gt; &gt; *Summary* &gt; <strong>Enables web applications with the window-management permission to &gt; maximize(), minimize(), and restore() their windows, and to prevent &gt; resiz...
- [\[Proposal\] Additional Windowing Controls](https://discourse.wicg.io/t/proposal-additional-windowing-controls/6044) *(discourse.wicg.io)*
  > This proposal seeks to enable local web applications to convey a user’s intended window control interactions with remote (or custom) window controls. Summary of the API proposals, which are generally gated by Window Management (“window-placement”) pe...
- [Additional Windowing Controls](https://chromestatus.com/feature/5201832664629248) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [Chrome 155 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com · 2026-09-16T10:28:25)*
  > <strong>Lets web applications with the window-management permission maximize(), minimize(), and restore() their windows, and prevent resizing through setResizable().</strong> Additionally, new CSS media features display-state and resizable enable scr...
- [Window management \| web.dev](https://web.dev/learn/pwa/windows) *(web.dev)*
  > You can read more about this experimental capability at Tabbed application mode for PWA. Note: You&#x27;ll learn more about experimental capabilities in the Experimental chapter. We&#x27;ve mentioned that you can change the window&#x27;s title by def...
- [Navigation management into installed PWAs \| Capabilities \| Chrome for Developers](https://developer.chrome.com/docs/capabilities/pwa-navigation-management) *(developer.chrome.com · 2025-08-19T00:00:00)*
  > Developer controls: <strong>Includes web APIs that let developers instruct the browser on how to handle specific tasks</strong>. The interplay of these elements determines whether the PWA opens in a standalone window or a browser tab.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > Window controls, https://<strong>chromestatus.com/feature/5201832664629248</strong>
- [Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17444.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > /No information provided/ *Link to entry on the Chrome Platform Status* https://chromestatus.com/feature/5201832664629248?gate=5182130005475328 *Links to previous Intent discussions* Intent to Prototype: https://groups.google.com/a/chromium...
- [\[blink-dev\] Re: Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17441.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > &gt; *No information provided* &gt; &gt; *Link to entry on the Chrome Platform Status* &gt; https://chromestatus.com/feature/5201832664629248?gate=5182130005475328 &gt; &gt; *Links to previous Intent discussions* &gt; Intent to Prototype: &...
- [\[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17394.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > <strong>No information provided Link to entry on the Chrome Platform Status https://chromestatus.com/feature/5201832664629248?gate=5182130005475328 Links to previous Intent discussions Intent to Prototype: https://groups.google.com/a/chromi...
- [Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17442.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/window-management/blob/main/EXPLAINER_additional_windowing_controls.md`)*
  > &gt; *Contact emails* &gt; [email protected], ...ow-minimize-method &gt; &gt; *Summary* &gt; <strong>Enables web applications with the window-management permission to &gt; maximize(), minimize(), and restore() their windows, and to prevent ...

## 📚 Platform Documentation & Specifications

- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)*
- [Additional Windowing Controls · Issue #96 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/96) *(github.com)*
- [GitHub - explainers-by-googlers/additional-windowing-controls: Repository hosting the feature explainer · GitHub](https://github.com/explainers-by-googlers/additional-windowing-controls) *(github.com)*
- [Calling setResizable(false) and then setResizable(true) changes maximizible state of window · Issue #13373 · electron/electron](https://github.com/electron/electron/issues/13373) *(github.com)*
- [Window: setResizable() method - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/setResizable) *(developer.mozilla.org)*
- [\[Bug\]: Window resizes when setting resizable: false · Issue #31233 · electron/electron](https://github.com/electron/electron/issues/31233) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 53 result(s) found across 12 planned queries — **15 verified relevant**
  - `"chromestatus.com/feature/5201832664629248" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"github.com/w3c/window-management/blob/main/EXPLAINER_additional_windowing_controls.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"www.w3.org/TR/window-management" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Additional Windowing Controls" API` — *Core feature API query* (4 returned)
  - `"Additional Windowing Controls" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromestatus.com" OR "window-management" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Additional Windowing Controls" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Additional Windowing Controls" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
  - `"Additional Windowing Controls" OR "Window Management API" ("maximize()" OR "minimize()" OR "setResizable()") tutorial OR blog` — *Search for developer tutorials and technical blog posts explaining how to implement additional windowing controls in progressive web apps.* (8 returned)
  - `"@media (display-state:" OR "@media (resizable:" OR "window.setResizable" github.com OR codepen.io` — *Find functional JavaScript implementations and CSS media queries demonstrating display-state and resizability adaptations.* (8 returned)
  - `"Additional Windowing Controls" ("Intent to Ship" OR "Chrome Platform Status" OR "mozilla/standards-positions" OR "WebKit-dev")` — *Track multi-engine standards consensus, browser vendor signals, and release schedules across Chromium, Gecko, and WebKit.* (3 returned)
  - `"Additional Windowing Controls" (VDI OR "remote desktop" OR Citrix OR PWA) discussion OR feedback` — *Discover community reactions, real-world pain points, and feedback from remote desktop and enterprise web application developers.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 16 result(s) found — **12 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 5 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 12 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5201832664629248)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5201832664629248)
- [Specification](https://www.w3.org/TR/window-management/#api-window-minimize-method)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40192345)
