# Notification attribution for PWAs on macOS

> **Report Week:** 2026-W40 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Chrome 152 rolls out notification attribution for installed Progressive Web Apps (PWAs) on macOS. When a PWA is installed on macOS, its notifications are now attributed to the PWA itself (using its own name and icon in the Notification Center) rather than Google Chrome.  This update also changes how notifications are displayed to the user, aligning PWA notifications with native macOS applications. It introduces two changes that align with current behavior in \[WebKit\](https://webkit.org/): - For app notifications, Chrome no longer supports the \`requireInteraction\` field for notifications. On macOS, the user controls whether the notification is temporary or persistent on a per-app basis. - For app badging, the Badging API now requires notifications permissions for the app badge to show up. If the user does not grant notifications permission, the API silently does nothing.  To control notification permissions using Chrome policies, admins need to update their policy settings if they want to keep that behavior for PWAs on macOS, using the Chrome origin-based policy \[NotificationsAllowedForUrls\](https://chromeenterprise.google/policies/#NotificationsAllowedForUrls). Additionally, administrators need to deploy a macOS MDM configuration profile to turn on notification permissions for the PWA's specific bundle ID.

### Motivation

Previously, all PWA notifications were displayed under the "Google Chrome" umbrella. This prevented users from managing notification settings (sounds, badges, alerts, Focus modes) on a per-PWA basis. Attributing notifications to the PWA's App Shim provides a highly requested native integration on macOS, aligning Chrome with established macOS platform behaviors.

## Ecosystem Status

- **Momentum:** High (95 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Shipping enabled by default in Chrome 152, macOS notification attribution routes installed Progressive Web App (PWA) notifications through each app's native macOS App Shim rather than grouping them under Google Chrome. This change brings Chromium into architectural alignment with WebKit's macOS web app implementation, though it ceases support for \`requireInteraction\` on macOS and now requires notification permissions before displaying app badges. Enterprise environments also face new operational steps, as MDM profiles targeting the PWA's bundle ID are required alongside origin policies to manage permissions.

### Recommendations
- Actionable Advice: Audit web apps for reliance on \`requireInteraction: true\` and re-architect critical alerts under the assumption that notifications on macOS will be transient by default. Additionally, verify that \`navigator.setAppBadge()\` calls are preceded by notification permission requests, and guide existing macOS PWA users toward System Settings if notification or badge delivery fails.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFlQaMOoSCwi88vVPm_qH-cbJd5--Jj1az3uGSg8Ml5Cq0r82swnVOkcG6HdZ4IaL8P0mhm_j_r5qUH7Nh4u6U3hzo5cqdcxYnxVn3YcyJYf74e7f-zokLiPvABfWSdfCFV4GtP3PaI_DRwAO_pDZghca57j_um) *(vertexaisearch.cloud.google.com)*
  > Native Notification Attribution for Web Apps on macOS | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית ال...
- [buttondown.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGTyRo-yO6KorXSImYM4qH4GZ2OrrbRT0pXCSHrU_vE2b3hWs-wDR7g194kvQoSrKbrtNguRdutylSSR6u4yK6ODsknoK6GbB0dEJT4XYqr4ZkqhrfywYW5GvxQzjzboNXjCyVfGlPpY4pzC4y7SUDjjnkxnBYiGylM1gCf2JJJ2wqMGzbW5_D2Zw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  Starting in **Chrome 152**, Chrome natively attributes notifications from installed Progressive Web Apps (PWAs) on macOS directly to the PWA rather than grouping them under Google Chrome.   * **Native Identity & Focus Inte
- [substack.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH6JvlRzRJ7CTJv_I3yAAKPGT-5Ml6ITob5C6SNiMp16BQcr37IQgP4ivBkEZMfxMncl190eRP2WtW7zR_XO70cluXgPEOFLkm4RhrQp3Bdlicf55fqh9QbmL1TYkeDi5q-CB5uLCycknI_jsi1Q06H2_q8g3HnJdj0KBbr4FDE) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  Starting in **Chrome 152**, Chrome natively attributes notifications from installed Progressive Web Apps (PWAs) on macOS directly to the PWA rather than grouping them under Google Chrome.   * **Native Identity & Focus Inte
- [\[blink-dev\] Web-Facing Change PSA: Notification attribution for PWAs on macOS](http://www.mail-archive.com/blink-dev@chromium.org/msg16957.html) *(mail-archive.com)*
  > If notifications permission isn&#x27;t granted the API will silently do nothing. Enterprise administrators who pre-grant notification permissions via policy must update their configurations if they want to keep that behavior for PWAs on macOS: In add...
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > When a Progressive Web App (PWA) is installed on macOS, <strong>its notifications are natively attributed to the PWA itself</strong> (using its own name and icon in Notification Center) rather than Google Chrome.
- [Attribution des notifications natives pour les applications Web sur macOS \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/notification-attribution-macos?hl=fr) *(developer.chrome.com)*
  > <strong>À partir de Chrome 152, les notifications des progressive web apps (PWA) installées sur macOS seront attribuées à la PWA elle-même, et non à Google Chrome</strong>.
- [FAQ](https://hopscotch.trade/support/faq) *(hopscotch.trade)*
  > By default, Hopscotch push notifications on MacOS will show Chrome&#x27;s logo. To make push notifications display the correct app logo instead, <strong>open a Chrome browser window and navigate to chrome://flags , find the option Mac PWA notificatio...
- [Blame · chrome/browser/flag-metadata.json · 49f3efa68704f6e275cf092e5043fbe948bec56e · Web / chromium / src · GitLab](https://gitlab.collabora.com/web/chromium/src/-/blame/49f3efa68704f6e275cf092e5043fbe948bec56e/chrome/browser/flag-metadata.json?page=4) *(gitlab.collabora.com)*
  > { &quot;name&quot;: &quot;enable-logging-js-console-messages&quot;, &quot;owners&quot;: [ &quot;hazems&quot; ], // Never expires because it is used by developers to enable logging JS // console messages in system logs for debugging purposes. It&#x27;...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 31 result(s) found across 7 planned queries — **5 verified relevant**
  - `"chromestatus.com/feature/5863296436666368" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"notifications.spec.whatwg.org" -site:notifications.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Notification attribution for PWAs on macOS" API` — *Core feature API query* (2 returned)
  - `"Notification attribution for PWAs on macOS" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"webkit.org" OR "chromeenterprise.google" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Notification attribution for PWAs on macOS" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Notification attribution for PWAs on macOS" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **3 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 36 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5863296436666368)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5863296436666368)
- [Specification](https://notifications.spec.whatwg.org)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/327449602)
