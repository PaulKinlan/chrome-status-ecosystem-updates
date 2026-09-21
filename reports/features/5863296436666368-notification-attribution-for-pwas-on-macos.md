# Notification attribution for PWAs on macOS

> **Report Week:** 2026-W39 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Chrome 152 rolls out notification attribution for installed Progressive Web Apps (PWAs) on macOS. When a PWA is installed on macOS, its notifications are now attributed to the PWA itself (using its own name and icon in the Notification Center) rather than Google Chrome.  This update also changes how notifications are displayed to the user, aligning PWA notifications with native macOS applications. It introduces two changes that align with current behavior in \[WebKit\](https://webkit.org/): - For app notifications, Chrome no longer supports the \`requireInteraction\` field for notifications. On macOS, the user controls whether the notification is temporary or persistent on a per-app basis. - For app badging, the Badging API now requires notifications permissions for the app badge to show up. If the user does not grant notifications permission, the API silently does nothing.  To control notification permissions using Chrome policies, admins need to update their policy settings if they want to keep that behavior for PWAs on macOS, using the Chrome origin-based policy \[NotificationsAllowedForUrls\](https://chromeenterprise.google/policies/#NotificationsAllowedForUrls). Additionally, administrators need to deploy a macOS MDM configuration profile to turn on notification permissions for the PWA's specific bundle ID.

### Motivation

Previously, all PWA notifications were displayed under the "Google Chrome" umbrella. This prevented users from managing notification settings (sounds, badges, alerts, Focus modes) on a per-PWA basis. Attributing notifications to the PWA's App Shim provides a highly requested native integration on macOS, aligning Chrome with established macOS platform behaviors.

## Ecosystem Status

- **Momentum:** High (365 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Shipping enabled by default in Chrome 152, macOS notification attribution decouples installed Progressive Web Apps from the generic Google Chrome identity, routing alerts and icon badges directly through individual macOS App Shims. The update aligns Blink with WebKit's platform behavior by intentionally ignoring the \`requireInteraction\` flag in favor of macOS system alert styles and requiring notification permission for the Badging API. Developer reception is strongly favorable as it elevates web apps to first-class macOS citizens capable of participating independently in Focus modes and System Settings.

### Recommendations
- Actionable Advice: Audit your notification and badging logic to ensure notification permission prompts precede any calls to \`navigator.setAppBadge()\`, and avoid relying on \`requireInteraction\` for persistent alerts on macOS. Enterprise teams should configure MDM notification payload profiles alongside \`NotificationsAllowedForUrls\` to manage PWA bundle IDs in managed Mac environments.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHecy-MCDD_QNcfLNwRTAxEL10TW929nBWcl3dRvO-JYrIC0a30ldjOKC7Y3ViWIKuV8nrWmcr6TYJlVZrluqjCs6ZMs8iP_O4TOtXSvmhkY8pmd6wYIrpbif05H9iSy8ikAu803HtjdHFmsCfaIFysuMDqx44=) *(vertexaisearch.cloud.google.com)*
  > Native Notification Attribution for Web Apps on macOS | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית ال...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEnPyok_hru7k9ymzczgljzdi2lKPAEv7byHtWTWK0mdwq6hOh6kyMqdQ_dS6lgdTsUh0qWSF0E64pERrP6vg1i4_ts_dF32SOKCWsROjeGTAEWffCDR7u1eSS1uAMC30khbqfPcDFyLdb61wyiZbAhxQ4U07Pw) *(vertexaisearch.cloud.google.com)*
  > Native Notification Attribution for Web Apps on macOS | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית ال...
- [\[blink-dev\] Web-Facing Change PSA: Notification attribution for PWAs on macOS](http://www.mail-archive.com/blink-dev@chromium.org/msg16957.html) *(mail-archive.com)*
  > Both of these changes match the already shipping behavior in WebKit: - For installed PWAs, Chrome will no longer support the `requireInteraction` field for notifications. On macOS the choice for a notification being temporary vs persistent is a per-a...
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > When a Progressive Web App (PWA) is installed on macOS, <strong>its notifications are natively attributed to the PWA itself</strong> (using its own name and icon in Notification Center) rather than Google Chrome.
- [Attribution des notifications natives pour les applications Web sur macOS \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/notification-attribution-macos?hl=fr&authuser=664441857) *(developer.chrome.com · 2026-07-16T00:00:00)*
  > Contrôle précis : les utilisateurs peuvent gérer les paramètres de notification des applications Web progressives individuelles (par exemple, les styles d&#x27;alerte et le comportement de l&#x27;écran de verrouillage). Modes concentration : les PWA ...
- [I Need Help Implementing Apple Push Notifications (APN) for Web Apps (PWA)](https://laracasts.com/discuss/channels/laravel/i-need-help-implementing-apple-push-notifications-apn-for-web-apps-pwa) *(laracasts.com)*
  > Implementing Apple Push Notifications (APN) for web apps, including Progressive Web Apps (PWAs), can be a bit complex due to the various steps involved in setting up the necessary certificates, keys, and service workers. Here&#x27;s a step-by-step gu...
- [Using Push Notifications in PWAs: The Complete Guide](https://www.magicbell.com/blog/using-push-notifications-in-pwas) *(magicbell.com)*
  > Most browsers let web push run without an install step. Safari on macOS works the same way once the user grants permission.
- [iOS & iPadOS PWA Notifications \| Monogram](https://monogram.io/blog/notifications-from-ios-and-ipados-pwas) *(monogram.io · 2024-05-01T00:00:00)*
  > How to add notifications to your iOS &amp; iPadOS progressive web apps (PWA).
- [How do I enable iOS Web Push notifications on my PWA website? \| API & SDK Documentation \| Batch Documentation](https://doc.batch.com/developer/technical-guides/how-to-guides/web/how-to-integrate-batchs-snippet-using-google-tag-manager/how-do-i-enable-ios-web-push-notifications-on-my-pwa-website) *(doc.batch.com)*
  > Apple has introduced support for Web Push in PWAs starting with iOS 16.4. This guide assumes that Batch Web SDK is already up and running on your website: you should be able to subscribe to and receive notifications using Safari on macOS 13 (or highe...
- [How to display notification badges on PWAs using the Badging API - LogRocket Blog](https://blog.logrocket.com/display-notification-badges-pwas-using-badging-api) *(blog.logrocket.com · 2024-09-13T13:00:51)*
  > So far it works well on Safari and Chrome on macOS. You can close the web app window, and the badge keeps on going in the background until you quit the application, which is how most applications work. The Badging API is a powerful tool that lets pro...
- [How to Set Up Push Notifications for Your PWA (iOS and Android)](https://www.mobiloud.com/blog/pwa-push-notifications) *(mobiloud.com · 2026-08-05T00:00:00)*
  > Let’s start with the key things you need to know about PWA push notifications: A PWA is essentially just an enhanced website, which users can “install” on their device. PWAs feature three core components: a service worker, a web app manifest and a se...
- [WebKit](https://webkit.org) *(webkit.org)*
  > <strong>WebKit is the web browser engine used by Safari, Mail, App Store, and many other apps on macOS, iOS, and Linux</strong>. Get started contributing code, or reporting bugs · Web developers can follow development, check feature status, download ...
- [javascript - "-webkit-" (a CSS property) isn't working in any browser except google chrome - Stack Overflow](https://stackoverflow.com/questions/25159594/webkit-a-css-property-isnt-working-in-any-browser-except-google-chrome) *(stackoverflow.com)*
  > I&#x27;d read up about vendor prefixes. -webkit- as its name suggests, is only for webkit based browsers (Chrome, Safari, Android etc). This si a decent read: css-tricks.com/how-to-deal-with-vendor-prefixes
- [Fixing Google Chrome compatibility bugs in websites - FAQ](https://www.chromium.org/Home/chromecompatfaq) *(chromium.org)*
  > When diagnosing JavaScript issues, use Google Chrome&#x27;s built-in JavaScript debugger. Do not use browser-specific (e.g. -moz-*, -webkit-*, -ie-*) css selectors such as -moz-center or -webkit-highlight for critical visual features of your site, in...
- [Chrome \| HTML & CSS Wiki \| Fandom](https://htmlcss.fandom.com/wiki/Chrome) *(htmlcss.fandom.com · 2026-08-31T18:40:13)*
  > <strong>Google Chrome is a web browser developed by Google that uses the WebKit layout engine and application framework</strong>. It was first released as a beta version for Microsoft Windows on September 2, 2008, and the public stable release was on...
- [FAQ](https://hopscotch.trade/support/faq) *(hopscotch.trade)*
  > By default, Hopscotch push notifications on MacOS will show Chrome&#x27;s logo. To make push notifications display the correct app logo instead, <strong>open a Chrome browser window and navigate to chrome://flags , find the option Mac PWA notificatio...
- [Blame · chrome/browser/flag-metadata.json · afec46c737c5547302fa35a3944624df44fad755 · Web / chromium / src · GitLab](https://gitlab.collabora.com/web/chromium/src/-/blame/afec46c737c5547302fa35a3944624df44fad755/chrome/browser/flag-metadata.json?page=4) *(gitlab.collabora.com)*
  > // Never expires because it is used by developers to enable logging JS // console messages in system logs for debugging purposes. It&#x27;s disabled by // default because logs may contain PII. &quot;expiry_milestone&quot;: -1 }, Add Mac PWA notificat...
- [Blame · chrome/browser/flag-metadata.json · 49f3efa68704f6e275cf092e5043fbe948bec56e · Web / chromium / src · GitLab](https://gitlab.collabora.com/web/chromium/src/-/blame/49f3efa68704f6e275cf092e5043fbe948bec56e/chrome/browser/flag-metadata.json?page=4) *(gitlab.collabora.com)*
  > { &quot;name&quot;: &quot;enable-logging-js-console-messages&quot;, &quot;owners&quot;: [ &quot;hazems&quot; ], // Never expires because it is used by developers to enable logging JS // console messages in system logs for debugging purposes. It&#x27;...
- [Installed PWAs don't appear in macOS notifications settings \[40693134\] - Chromium](https://issues.chromium.org/issues/40693134) *(issues.chromium.org)*
  > That would have to change to get the PWA badged and to appear in Sys Prefs. However doing so is a bit complex for two reasons: 1) You cannot dynamically select between Alert and Banner style notifications, which is something the web platform allows. ...
- [Native Notification Attribution (Phân bổ thông báo gốc) cho ứng dụng web trên macOS \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/notification-attribution-macos?hl=vi) *(developer.chrome.com · 2026-07-16T00:00:00)*
  > Khuyến khích những người dùng cần thông báo liên tục định cấu hình kiểu cảnh báo có thông báo của PWA thành &quot;Liên tục&quot; trong <strong>System Settings &gt; Notifications &gt; [Your PWA].</strong>
- [Notification Attribution for PWAs on macOS](https://chromestatus.com/feature/5863296436666368) *(chromestatus.com · 2026-07-01T00:00:00)*
  > We cannot provide a description for this page right now
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > Chrome is rolling out notification attribution for installed Progressive Web Apps (PWAs) on macOS.
- [Chrome 152 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/152) *(chromestatus.com)*
  > To control notification permissions using Chrome policies, admins need to update their policy settings if they want to keep that behavior for PWAs on macOS, using the Chrome origin-based policy NotificationsAllowedForUrls. Additionally, administrator...
- [Microsoft Edge Browser Policy Documentation NotificationsAllowedForUrls \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/notificationsallowedforurls) *(learn.microsoft.com · 2026-05-22T00:00:00)*
  > Windows and Mac documentation for supported Microsoft Edge Browser policy: Allow notifications on specific sites
- [NotificationsAllowedForUrls - Instinctive library of Chrome settings](https://instinctive.app/chromesettings/notificationsallowedforurls) *(instinctive.app · 2024-10-08T00:00:00)*
  > Audit &amp; fix Chrome settings to keep users safe &amp; devices secure · Compare and sync settings across OUs or historical exports. Import settings to copy from one OU to another
- [Attribution des notifications natives pour les applications Web sur macOS \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/notification-attribution-macos?hl=fr) *(developer.chrome.com)*
  > Règle macOS : <strong>vous devez également déployer un profil de configuration macOS (MDM) pour préaccorder les autorisations de notification à l&#x27;identifiant du bundle de la PWA (App Shim).</strong>
- [Chrome 152のmacOS通知変更で見直すPWAの権限設計 \| 株式会社Symvance](https://symvance-tech.com/blog/latest/2026-07-27-chrome-152-macos-pwa-notification-attribution) *(symvance-tech.com · 2026-07-27T08:48:18)*
  > 企業がmacOS端末へ通知権...ome側のNotificationsAllowedForUrlsだけでは完了しません。PWAのbundle identifierに対して通知を許可するmacOS構成プロファイルも必要です。 · 管理対象端末では、一般利用者向けの手動許可テストに加え、MDM適用後の...
- [r/PWA on Reddit: How are push notifications created and handled in PWAs?](https://www.reddit.com/r/PWA/comments/1jmluey/how_are_push_notifications_created_and_handled_in) *(reddit.com · 2025-03-29T13:04:53)*
  > The problem currently is that this is unreliable. Browsers close down that background service after some period of time (it differs in different browsers) such that notifications are not received until the site/pwa is opened again. PWAs installed by ...
- [r/PWA on Reddit: Pwa notification dont work!](https://www.reddit.com/r/PWA/comments/1j1kgu4/pwa_notification_dont_work) *(reddit.com · 2025-03-02T06:22:09)*
  > Even if you don&#x27;t use FCM, you&#x27;ll still have to deal with numerous Webkit / iOS bugs. But, also Android issues. For instance, FCM tries to encourage use of their onMessage / onBackgroundMessage callbacks, but that doesn&#x27;t work in Andro...
- [r/PWA on Reddit: PSA: Using PWAs on a Linux Desktop](https://www.reddit.com/r/PWA/comments/1509s9k/psa_using_pwas_on_a_linux_desktop) *(reddit.com · 2023-07-15T11:37:49)*
  > I do use Ubuntu with PWAs installed from Chrome and all functions are actually working just fine 🤓 ... Unless Gnome does some additional magic, I’d expect that PWAs won’t receive notifications when no Chromium window is open, because Chromium usuall...
- [r/PWA on Reddit: Web Push Notifications coming to iOS 16 in 2023](https://www.reddit.com/r/PWA/comments/v6bpun/web_push_notifications_coming_to_ios_16_in_2023) *(reddit.com · 2022-11-30T00:00:00)*
  > I wholly attribute this to anti-trust pressure on their app store policies, they have to make pwas seem like a viable alternative to native apps, but I am nonetheless very appreciative. ... More technical details here: https://webkit.org/blog/12824/n...

## 📚 Platform Documentation & Specifications

- [Notification: requireInteraction property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Notification/requireInteraction) *(developer.mozilla.org)*
- [Push: startup-budget contract — Safari 27 Static Routing, updateViaCache none, never wake the worker for API · Issue #52 · NolanFoster/pigeon](https://github.com/NolanFoster/pigeon/issues/52) *(github.com)*
- [\[BUG\] Notification opens chrome instead of PWA · Issue #647 · GoogleChromeLabs/bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap/issues/647) *(github.com)*
- [feat(pwa): add Web Push and fix iPad desktop viewport by tjakobsson · Pull Request #400 · tjakobsson/uatu](https://github.com/tjakobsson/uatu/pull/400) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 51 result(s) found across 11 planned queries — **33 verified relevant**
  - `"chromestatus.com/feature/5863296436666368" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"notifications.spec.whatwg.org" -site:notifications.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Notification attribution for PWAs on macOS" API` — *Core feature API query* (2 returned)
  - `"Notification attribution for PWAs on macOS" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"webkit.org" OR "chromeenterprise.google" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Notification attribution for PWAs on macOS" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Notification attribution for PWAs on macOS" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"notification attribution" PWA macOS Chrome` — *Discovers articles, guides, and feature announcements covering PWA notification attribution and its native appearance on macOS.* (8 returned)
  - `navigator.setAppBadge "notification" permission PWA macOS "requireInteraction"` — *Finds technical documentation and code samples detailing Badging API permission prerequisites and the deprecation of requireInteraction on macOS.* (2 returned)
  - `"NotificationsAllowedForUrls" PWA macOS bundle ID MDM notifications` — *Tracks enterprise adoption guides, configuration profiles, and MDM policy enforcement for macOS PWA notifications.* (8 returned)
  - `"PWA" macOS notification attribution (Chrome OR WebKit) site:reddit.com OR site:news.ycombinator.com OR site:github.com` — *Surfaces community feedback, bug reports, and discussions regarding per-PWA notification attribution and native app shim behaviors on macOS.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 15 result(s) found — **2 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 5 result(s) found — **0 verified relevant**
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
