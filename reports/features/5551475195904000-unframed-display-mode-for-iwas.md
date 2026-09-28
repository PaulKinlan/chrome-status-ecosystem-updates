# Unframed display mode for IWAs

> **Report Week:** 2026-W40 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Unframed display mode allows Isolated Web Apps \[IWAs\](https://chromeos.dev/en/web/isolated-web-apps) to occupy the entire browser window, which optimizes the workspace available. By removing standard window borders and title bars, developers can implement unique user experiences with branding and menu hierarchies that match the look-and-feel of device-installed applications.   Administrators can manage this feature with existing policies for window management:   - \[DefaultWindowManagementSetting\](https://chromeenterprise.google/policies/#DefaultWindowManagementSetting) configures the default state for the window management for all apps. The policies below can override this default.   - \[WindowManagementAllowedForUrls\](https://chromeenterprise.google/policies/#WindowManagementAllowedForUrls) allows  IWAs with specified origins to enter unframed mode without any user interaction.   - \[WindowManagementBlockedForUrls\](https://chromeenterprise.google/policies/#WindowManagementBlockedForUrls) blocks unframed mode for IWAs with specified origins, forcing Chrome to fallback to other available display modes.

### Motivation

Standard window decorations, including the title bar and system control buttons, impose fixed UI constraints that restrict available screen real estate and visual integration. Without unframed mode, developers are forced to design around standard operating system frames that often conflict with an application’s specific branding or functional layout requirements. While the Window Controls Overlay API provides a lot of flexibility, it still enforces system-drawn regions for window controls, which prevents a fully bespoke interface.

Unframed mode enables Isolated Web Apps to occupy the entire window surface, bridging the gap between web and native application experiences. This level of control is essential for immersive software - such as virtual desktop clients - that requires a unique visual hierarchy or a maximized workspace. By removing standard window borders and title bars, developers can implement unique user experiences with branding that matches the feel of native applications.

## Ecosystem Status

- **Momentum:** High (375 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** Unframed display mode introduces a display\_override value enabling Isolated Web Apps (IWAs) to eliminate host window frames and title bars entirely for immersive, bespoke native layouts. Primarily targeted at enterprise ChromeOS and managed Windows environments, it serves specialized migration paths (such as legacy Chrome Apps, VDIs, and custom shaped widgets) rather than open web PWAs. The feature remains an isolated Chromium-specific incubation hosted under WICG Manifest Incubations with zero cross-engine adoption.

### Recommendations
- Actionable Advice: Do not rely on unframed mode for public open web PWAs; use Window Controls Overlay instead if cross-platform window chrome customization is needed. For teams maintaining enterprise IWAs on ChromeOS or Windows, specify unframed within display\_override alongside standard fallback modes like standalone and minimal-ui.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGUFyU8dMTjuS1QZSsOAvJ5NgsVCrTgOLclm9eN95-YxZvlnwSnJuO5LZ6mbIjyAYpym7OIl3V9b6Or2JqLTSwmS3Xnm-8x6RIut0NVoPHFErCximWf5uzxR_NDDPoxn4nF) *(vertexaisearch.cloud.google.com)*
  > Manifest Incubations Feature specifications for Web Application Manifest extensions & incubations which Chromium has shipped but do not have commitments / implementations from other user agents. Instead of keeping these features as explainers, they a...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHbOfTZsvHM-9mD2o-IjNGpMvWgdm9pYoDsrggc3wdkUqyGUpX-TyLB1bfuN-t7ad-l1zpT6cAcvIUAeukS4FvtksGV4g8HQ_4m0KI-Jw3-usstZRO62V7yVYVTTquaMvdXaqg=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of "Unframed Display Mode for IWAs"  **Unframed display mode** is an addition to the Web App Manifest `display_override` chain (`"display_override": ["unframed", "standalone"]`) designed specifically for **Isolated Web Apps (IWAs)**.   *
- [googlesource.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF-GRyw26xOukOfho6veXJsm80QvoDLq6fROjEohzCN4ALDdCpEiKi0ipd1tKQCMNqy_Uxw46kLurVLlvSuMRQyErECJZfaUUdrNI-qWTU0AjQzmVPXD5ghAlkTVFtImmaBZ7jmQqv5oYQFbt_4UPOU2VZAQu3ziLhYbcJBoiWlnEdj-LoZj8n645ErBTRH) *(vertexaisearch.cloud.google.com)*
  > ### Summary of "Unframed Display Mode for IWAs"  **Unframed display mode** is an addition to the Web App Manifest `display_override` chain (`"display_override": ["unframed", "standalone"]`) designed specifically for **Isolated Web Apps (IWAs)**.   *
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHwin2o44bKjCX_ghjvDvf82hglp5D5rkR3Mm45Gf5cGTx2yBklh5K2PpbVJf2D2ya-DWiEHFuaaCkeQifep0SvanrQkp6qXbVuHANbn96rhsb--gNlaNhcxgXXSOz8PIFrMWtDcOOzuUWuF5o9AT_mNjTwwI1Xc6Mqcyuoya1ekw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of "Unframed Display Mode for IWAs"  **Unframed display mode** is an addition to the Web App Manifest `display_override` chain (`"display_override": ["unframed", "standalone"]`) designed specifically for **Isolated Web Apps (IWAs)**.   *
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG-ft-IGSE-yqmbuuegNO1xTLsn7UAfnVafQ9AwOXo2Pj69CNec2_Rd4P9AMFUTDctYW9tR6De2WAVkEu-2U7jn4J5YuI5tqMNzhzMsMJ15XzH_59hv9xmf3IayKA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of "Unframed Display Mode for IWAs"  **Unframed display mode** is an addition to the Web App Manifest `display_override` chain (`"display_override": ["unframed", "standalone"]`) designed specifically for **Isolated Web Apps (IWAs)**.   *
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGZzqZYvCjIPtYgfgRENF9YuOvrOzAbfCe4bDijkW1IgdQORbihCPxKnjd8nk8rvp7nGRx9URSGBx78oD4i5BRfLmp257dZLKr79j7CTl_BVMjlUJjCUmOjsp_69YiI32KrMIQCcQGxez9vb1sUWw-lUlf9iuDDkNwO2b2AYF0bGxB0p1jPbzpXEgBXZnRRUDRziq1yYw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of "Unframed Display Mode for IWAs"  **Unframed display mode** is an addition to the Web App Manifest `display_override` chain (`"display_override": ["unframed", "standalone"]`) designed specifically for **Isolated Web Apps (IWAs)**.   *
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFdr1pTnE7SONuvZhQrvOvurAhFQHlFLWlSqDLPG9YPW85q2tJtBagCx7HED7hAQenWBqyB1qfHtCyhslZvF-kmeYEzXNwhdGQ2gAFLW8z_m9kX5UgBdSpS0xuX6SeoISbRxuSDZym-NP_-GO90oV4f9uJU_Wtb5MojnA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of "Unframed Display Mode for IWAs"  **Unframed display mode** is an addition to the Web App Manifest `display_override` chain (`"display_override": ["unframed", "standalone"]`) designed specifically for **Isolated Web Apps (IWAs)**.   *
- [stackoverflow.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFSciw15FZp1L20Nz3vmovx4a6XwZaZqCIH63LLVQqn7PG4Mfv46Lz-JkzBBawyts-4P1P2WuDBUPRAuoBli4PRu6pHTXWxCRIq3DBPD_OaT99QoYDXr9d_nyF06vrEH04aHh79rcaVKoQRPzET18h817F-lvfQWJSvo9ycmhHqvUBs34rb3YECHg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of "Unframed Display Mode for IWAs"  **Unframed display mode** is an addition to the Web App Manifest `display_override` chain (`"display_override": ["unframed", "standalone"]`) designed specifically for **Isolated Web Apps (IWAs)**.   *
- [appspace.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEuru49AuuaM5kA2RTNjshNVWrrQZo5LDL62ZjQnkhgnsah81DQavmly5SNnvWAFhEDW4E5eVB8gxqaiWq3_ZMorJqWD10V1v_PT44hO1uTjv8eiQ70hVjRsvGwo8VWApSoKvmUUOFzkqlqA2kJKKXXNLkaKea6RV8lxyKzobpqo6BOEgswC0ZG2nNY7eZokGCW-tbpdJV40sP_GFc=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of "Unframed Display Mode for IWAs"  **Unframed display mode** is an addition to the Web App Manifest `display_override` chain (`"display_override": ["unframed", "standalone"]`) designed specifically for **Isolated Web Apps (IWAs)**.   *
- [Intent to Prototype: Borderless Mode for Installed Desktop Web Apps](https://groups.google.com/a/chromium.org/g/blink-dev/c/0WFHeazngK8) *(groups.google.com)*
  > Link to entry on the Chrome Platform Statushttps://<strong>chromestatus.com/feature/5551475195904000</strong> · unread, Jul 25, 2022, 1:23:26 PM7/25/22 ·  ·  ·  · Reply to author · Sign in to reply to author · Forward · Sign in to forward · Delete...
- [\[blink-dev\] Intent to Ship: Unframed display mode for Isolated Web Apps](http://www.mail-archive.com/blink-dev@chromium.org/msg16969.html) *(mail-archive.com)*
  > Explainer https://github.com/W...ges/unframed-explainer.md Summary <strong>Unframed display mode allows [Isolated Web Apps](https://chromeos.dev/en/web/isolated-web-apps) to occupy the entire browser window, which optimizes the workspace available</s...
- [Re: \[blink-dev\] Intent to Ship: Unframed display mode for Isolated Web Apps](http://www.mail-archive.com/blink-dev@chromium.org/msg16972.html) *(mail-archive.com)*
  > &gt; *Contact emails* &gt; [email protected], [email protected] &gt; &gt; *Explainer* &gt; &gt; https://<strong>github.com/WICG/manifest-incubations/tree/gh-pages/unframed-explainer.md</strong> &gt; &gt; *Specification* &gt; https://wicg.github.io/ma...
- [r/chromeos on Reddit: Chromebook as a javascript developer machine?](https://www.reddit.com/r/chromeos/comments/4obq6m/chromebook_as_a_javascript_developer_machine) *(reddit.com · 2022-09-18T00:00:00)*
  > Google&#x27;s official ones are bloated. <strong>You can use Chrome&#x27;s built in dev tools (not the app) for client-side JavaScript and CSS</strong>. For server side, you I would recommend Caret/ Caret-T More replies ...
- [Chrome Enterprise and Education release notes - Chrome browser - Chrome Enterprise and Education Help](https://support.google.com/chrome/a/answer/7679408?hl=en-MY&co=CHROME_ENTERPRISE._Product%3DChromeBrowser) *(support.google.com)*
  > Want to remotely manage ChromeOS devices? Start your ChromeOS Enterprise Upgrade trial at no charge today · Important update: Starting March 26th, 2026, the release notes for Chrome browser for Enterprise are moving! Find them exclusively on our webs...
- [Chrome for Developers](https://developer.chrome.com) *(developer.chrome.com)*
  > Check out on-demand sessions and learning content to learn what Google and Chrome are doing to help you drive continuous innovation and implementation. ... See what&#x27;s included in Chrome&#x27;s latest stable and beta releases. Get a preview of th...
- [Chromium Blog: Developer Tools for Google Chrome](https://blog.chromium.org/2009/06/developer-tools-for-google-chrome.html) *(blog.chromium.org)*
  > chromeos.dev 1 · chromium 9 · cloud print 1 · coalition 1 · coalition for better ads 1 · contact picker 1 · content indexing 1 · cookies 1 · core web vitals 2 · csrf 1 · css 1 · cumulative layout shift 1 · custom tabs 1 · dart 8 · dashboard 1 ·
- [Enterprise apps on ChromeOS \| Google for Developers](https://developers.google.com/chromeos/app-development/learn/enterprise) *(developers.google.com · 2025-12-18T00:00:00)*
  > ChromeOS offers a number of ways to distribute apps⁠, making the collaboration between developers and system administrators more efficient. Developers can directly share a web app’s URL with Chrome Enterprise admins to install it for their organizati...
- [Re: \[blink-dev\] Intent to Ship: Unframed display mode for Isolated Web Apps](http://www.mail-archive.com/blink-dev@chromium.org/msg16976.html) *(mail-archive.com)*
  > IWA OWNER LGTM <strong>This is an extension of existing APIs which allow a PWA to control more of the window presentation</strong>, but the ability to completely remove the window controls carries spoofing risks which make the IWA requirement appropr...
- [Implement unframed mode for IWAs \[477512407\] - Chromium](https://issues.chromium.org/issues/477512407) *(issues.chromium.org)*
  > Just a passer-by, but this may be related to described case as follows: &quot;Supporting WCO API for non-PWA case: e.g. customising appbar in execution with Puppeteer&quot;
- [Optimizing PWAs For Different Display Modes — Smashing Magazine](https://www.smashingmagazine.com/2025/08/optimizing-pwas-different-display-modes) *(smashingmagazine.com · 2025-08-26T08:00:00)*
  > It is also worth keeping an eye out for the window-controls-overlay and tabbed display modes. At the time of writing, these two display modes are experimental and can be used with display_override. display-override is a member of our PWA’s manifest, ...
- [Understanding PWA display modes \| Progressier Help Center](https://intercom.help/progressier/en/articles/7999596-understanding-pwa-display-modes) *(intercom.help · 2026-05-19T03:03:24)*
  > This display mode <strong>overlays the window controls on top of the body of your PWA</strong>. The central area where the name of the app is displayed with the standalone mode is transparent, allowing you to build your own title bar.
- [App design \| web.dev](https://web.dev/learn/pwa/app-design) *(web.dev)*
  > You can <strong>use the display_override field to specify your own display mode fallback chain that will apply before evaluating the display member</strong>. The browser display mode doesn&#x27;t show up as its own window, but rather displays your PW...
- [Isolated Web Apps (IWA) \| Chrome for Developers](https://developer.chrome.com/docs/iwa/introduction) *(developer.chrome.com · 2026-02-06T00:00:00)*
  > For others, the web&#x27;s security model may not be conservative enough; they may not share the assumption that the server is trustworthy, and instead prefer discretely versioned and signed stand-alone applications. A new, high-trust security model ...
- [Previous release notes - Chrome Enterprise and Education Help](https://support.google.com/chrome/a/answer/10314655?hl=en-5) *(support.google.com · 2026-08-30T13:42:46)*
  > WindowManagementAllowedForUrls <strong>allows IWAs with specified origins to enter unframed mode without any user interaction</strong>. WindowManagementBlockedForUrls blocks unframed mode for IWAs with specified origins, forcing Chrome to fallback to...
- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154?hl=en) *(developer.chrome.com · 2026-09-23T05:58:01)*
  > The window.setShape() API requires an unframed display mode window and the window-management permission. Administrators can manage this feature with the DefaultWindowManagementSetting, WindowManagementAllowedForUrls, and WindowManagementBlockedForUrl...
- [Explore New Chrome Enterprise Browser, Core, Premium Features](https://chromeenterprise.google/intl/en_ca/resources/release-notes) *(chromeenterprise.google · 2026-09-09T00:00:00)*
  > WindowManagementAllowedForUrls <strong>allows IWAs with specified origins to enter unframed mode and set custom window shapes without any user interaction</strong>. WindowManagementBlockedForUrls blocks the permission for specified origins, forcing C...
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > Unframed display mode <strong>lets Isolated Web Apps occupy the entire browser window by removing standard window borders and title bars, supporting custom branding and menu hierarchies</strong>. Administrators can manage this feature using policies ...
- [Chrome 154 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com · 2026-09-02T00:00:00)*
  > Administrators can manage this ... all apps. WindowManagementAllowedForUrls <strong>lets IWAs with specified origins enter unframed mode and set custom window shapes without user interaction</strong>....
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > The policies below can override this default. WindowManagementAllowedForUrls <strong>allows IWAs with specified origins to enter unframed mode and set custom window shapes without any user interaction</strong>.
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > Tracking bug #414729785 | ChromeStatus.com entry | Spec · Unframed display mode <strong>allows Isolated Web Apps to occupy the entire browser window by removing standard window borders and title bars</strong>, optimizing available workspace and letti...
- [Previous release notes - Chrome Enterprise and Education Help](https://support.google.com/chrome/a/answer/10314655?hl=en-IE) *(support.google.com)*
  > <strong>ChromeOS 150</strong> introduces the unframed display mode that extends the Isolated Web App (IWA) client area to encompass the entire window, including the regions normally reserved for the title bar and system window controls.
- [Chrome 152 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/152) *(chromestatus.com)*
  > <strong>WindowManagementAllowedForUrls allows IWAs with specified origins to enter unframed mode without any user interaction</strong>.
- [Chrome Enterprise and Education release notes - ChromeOS - Chrome Enterprise and Education Help](https://support.google.com/chrome/a/answer/7679408?hl=en-AU&co=CHROME_ENTERPRISE._Product%3DChromeOS) *(support.google.com)*
  > <strong>ChromeOS 150</strong> introduces the unframed display mode that extends the Isolated Web App (IWA) client area to encompass the entire window, including the regions normally reserved for the title bar and system window controls.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: Borderless Mode for Installed Desktop Web Apps](https://groups.google.com/a/chromium.org/g/blink-dev/c/0WFHeazngK8) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5551475195904000`)*
  > Link to entry on the Chrome Platform Statushttps://<strong>chromestatus.com/feature/5551475195904000</strong> · unread, Jul 25, 2022, 1:23:26 PM7/25/22 ·  ·  ·  · Reply to author · Sign in to reply to author · Forward · Sign in to forwar...
- [Borderless mode · Issue #852 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/852) *(github.com · 2023-06-07T00:00:00)* *(Cites: `https://chromestatus.com/feature/5551475195904000`)*
  > External status/issue trackers for this feature (publicly visible, e.g. Chrome Status): https://<strong>chromestatus.com/feature/5551475195904000</strong>
- [\[blink-dev\] Intent to Ship: Unframed display mode for Isolated Web Apps](http://www.mail-archive.com/blink-dev@chromium.org/msg16969.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/manifest-incubations/tree/gh-pages/unframed-explainer.md`)*
  > Explainer https://github.com/W...ges/unframed-explainer.md Summary <strong>Unframed display mode allows [Isolated Web Apps](https://chromeos.dev/en/web/isolated-web-apps) to occupy the entire browser window, which optimizes the workspace av...
- [Re: \[blink-dev\] Intent to Ship: Unframed display mode for Isolated Web Apps](http://www.mail-archive.com/blink-dev@chromium.org/msg16972.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/manifest-incubations/tree/gh-pages/unframed-explainer.md`)*
  > &gt; *Contact emails* &gt; [email protected], [email protected] &gt; &gt; *Explainer* &gt; &gt; https://<strong>github.com/WICG/manifest-incubations/tree/gh-pages/unframed-explainer.md</strong> &gt; &gt; *Specification* &gt; https://wicg.gi...

## 📚 Platform Documentation & Specifications

- [Borderless mode · Issue #852 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/852) *(github.com)*
- [GitHub - tecdrop/pwa-display-test: See how Progressive Web Apps (PWAs) look and feel on your devices and platforms. Try all the web app manifest display modes: fullscreen, standalone, minimal-ui and browser. · GitHub](https://github.com/tecdrop/pwa-display-test) *(github.com)*
- [\[Request for feedback\] Per-window control over unframed mode (f.k.a. borderless) · Issue #118 · WICG/manifest-incubations](https://github.com/WICG/manifest-incubations/issues/118) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 56 result(s) found across 13 planned queries — **27 verified relevant**
  - `"chromestatus.com/feature/5551475195904000" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"github.com/WICG/manifest-incubations/tree/gh-pages/unframed-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"wicg.github.io/manifest-incubations/index.html" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Unframed display mode for IWAs" API` — *Core feature API query* (0 returned)
  - `"Unframed display mode for IWAs" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromeos.dev" OR "chromeenterprise.google" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Unframed display mode for IWAs" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Unframed display mode for IWAs" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (3 returned)
  - `"display_override" "unframed" "manifest" ("Isolated Web App" OR "IWA")` — *Finds web app manifest syntax and real-world code examples declaring unframed display mode for IWAs.* (4 returned)
  - `"unframed display mode" ("Isolated Web Apps" OR "IWA") tutorial OR guide` — *Discovers developer tutorials, practical walkthroughs, and setup guides for unframed IWAs on ChromeOS.* (0 returned)
  - `"unframed" display mode "WindowManagementAllowedForUrls" Chrome enterprise` — *Surfaces enterprise administrator guides, policy configurations, and deployment documentation for unframed mode.* (8 returned)
  - `"unframed" "display" (site:github.com/WICG OR site:chromestatus.com) "Isolated Web Apps"` — *Finds WICG standards discussions, spec feedback, and Chromium Intent to Ship or Prototype threads.* (2 returned)
  - `Chrome "unframed" display mode "Isolated Web Apps" OR "IWA" announcement` — *Identifies official Chrome/ChromeOS feature releases, blog announcements, and platform roadmaps regarding unframed display mode.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 16 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 1208 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5551475195904000)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5551475195904000)
- [Specification](https://wicg.github.io/manifest-incubations/index.html#dfn-unframed)
- [Chromium Tracking Bug](https://crbug.com/477512407)
