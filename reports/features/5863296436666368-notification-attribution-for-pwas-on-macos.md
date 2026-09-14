# Notification attribution for PWAs on macOS

> **Report Week:** 2026-W38 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Chrome 152 rolls out notification attribution for installed Progressive Web Apps (PWAs) on macOS. When a PWA is installed on macOS, its notifications are now attributed to the PWA itself (using its own name and icon in the Notification Center) rather than Google Chrome.  This update also changes how notifications are displayed to the user, aligning PWA notifications with native macOS applications. It introduces two changes that align with current behavior in \[WebKit\](https://webkit.org/): - For app notifications, Chrome no longer supports the \`requireInteraction\` field for notifications. On macOS, the user controls whether the notification is temporary or persistent on a per-app basis. - For app badging, the Badging API now requires notifications permissions for the app badge to show up. If the user does not grant notifications permission, the API silently does nothing.  To control notification permissions using Chrome policies, admins need to update their policy settings if they want to keep that behavior for PWAs on macOS, using the Chrome origin-based policy \[NotificationsAllowedForUrls\](https://chromeenterprise.google/policies/#NotificationsAllowedForUrls). Additionally, administrators need to deploy a macOS MDM configuration profile to turn on notification permissions for the PWA's specific bundle ID.

### Motivation

Previously, all PWA notifications were displayed under the "Google Chrome" umbrella. This prevented users from managing notification settings (sounds, badges, alerts, Focus modes) on a per-PWA basis. Attributing notifications to the PWA's App Shim provides a highly requested native integration on macOS, aligning Chrome with established macOS platform behaviors.

## Ecosystem Status

- **Momentum:** High (515 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Shipping enabled by default in Chrome 152, native notification attribution routes installed PWA alerts through individual macOS app shims rather than the generic Google Chrome process. This brings Chrome into direct alignment with macOS platform conventions and WebKit's existing web app model, allowing PWAs to integrate seamlessly with macOS Focus modes, sound settings, and the Notification Center. However, conforming to macOS system constraints means \`requireInteraction\` is no longer supported on the platform, and the Badging API now strictly requires notification permissions before badges can display.

### Recommendations
- Actionable Advice: Web teams must ensure their apps request notification permissions before attempting to set Dock badges via \`navigator.setAppBadge()\`, as badge updates will otherwise fail silently on macOS. Additionally, audit application messaging to remove any dependency on \`requireInteraction: true\`, designing mission-critical notifications under the assumption that alert banner persistence is entirely user-controlled in macOS System Settings.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "macOSにインストールされたPWAの通知が「Google Chrome」 ..." (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [macOSにインストールされたPWAの通知が「Google Chrome」 ...](https://x.com/agektmr/status/2089892016188747831) — *by @agektmr, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGyYXDEiT2fhqsQ0tN4DgvgVC9vLsPcisBMh990t7ljtW-Esqyp-YuGOjEnflfeDLlWVGDblDNG2R-G-iTLZNQjpFlxJzesz9CCTL2S1K_oXfkUCGNFH7m7NGg_BqaZdwMItXRUYpjeqbdras5o0dJqlEkaI1xr) *(vertexaisearch.cloud.google.com)*
  > انتساب اعلان بومی برای برنامه‌های وب در macOS | Blog | Chrome for Developers رد شدن و رفتن به محتوای اصلی / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית ال...
- [googlesource.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGBGRzdFsWZgSDh_Lx9mHivupKAsiHwCTDu_7Sr1qFB94beaJzPWYb07kqIRVA7P0hFqlO9cMuuQst_IxpV5EEODc54-M8n5d6dFvCtqfQ9XABrISlaWN7By-Rt-gqVI47ybk10GnPErntKo-7DQEGucxBRKLKcVDqLedtC1spSxr9Q-i-0ULTdEcq1dkRLWAyy4XkOxpB9kyNZ8T9_8KQXGUVUWhBrh4FX7w_udyblxIVIeA==) *(vertexaisearch.cloud.google.com)*
  > chrome/browser/flag_descriptions.cc - chromium/src - Git at Google Sign in &#9681; Theme chromium / chromium / src / 126ae9c7fa7eb8331235b9467031c2dcdaaf30f0 / . / chrome / browser / flag_descriptions.cc blob: dddf9be12cfa91adac821d31d2f50c3726e27365...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE42YZQuaCpC6sqES9Pr7l6STJ6UhRyNb1EDppZ4gw26MbWbVOowP_F4kCbTxk6OasF29rIjNLvrT5hyTfXmwlXBH0MjxpSI2fo2RUNx7rVa-tD7HcyrvoiUcPzx2H6sJ8A372RiXYH) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFxKk-dtEE1ZGmwYkE4ZLso5nRJv66HAJ-s6nwUMuhW8QnwFNBLGQvW4Cl1_TP1FE_nHLSi7QB48R-1Tx1_bsVdGHIT9uCb1PXXmSrDXT4_Jd8Kh041evuxzJkXBH8kixMVsNCN7IdlwZoq8WCtiiSLyYlGdJs=) *(vertexaisearch.cloud.google.com)*
  > Atribuição de notificações nativas para apps da Web no macOS | Blog | Chrome for Developers Ir para o conteúdo principal / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Р...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFiW5TNj0MTsPx06DAOlb16PvNGQGffjWC1_bZkhA76gsKJyWHc2BLH1NrgRlovcFQ8-Dcde3e9NbpARwVO0z55YiFxE06SHA4G4U_DWRc9FPTyLHdHo3hwfyTBYszmiAkkzcZkI6M=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEnVVhrkOONTjMNoYmgHohiANkYyJbrKa6_6JMS53clEIo18qb4TK5VY4fK0pZCpPlAXcyzEMTklPGWnZhrer8sssyls31mVDTEvdd7E63Y2ZUA99r2C_k=) *(vertexaisearch.cloud.google.com)*
  > Blog | Chrome for Developers সরাসরি আসল কন্টেন্টে যান / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFmJcNnBMGWvAuwMSScKs2zMz26iKa5drBJcynyQHEFOlJvta9Ob8VaNe50z7hwUZW-hjbspBlI7s33fK2CYW1lUSOx_reKpnZDi2yotTkIY3kH7dD34TBxJp1ayjITFR1QgCeP3-K3) *(vertexaisearch.cloud.google.com)*
  > Chrome 152 beta | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – ...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFwJQRHqwk1wfb90Ng_3IOUY_jTG1WKPutmddHlp0V3jhxneebbtfJYW_jMrVymJK--at-NXpKAw0YrRqIVDhxegvuJiN9cMN_C3-8uXf5LnoLysYSu_mpXGEE0rHEmhMXOyCA=) *(vertexaisearch.cloud.google.com)*
  > Chrome 152 | Release notes | Chrome for Developers Langsung ke konten utama / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไ...
- [chromeenterprise.google](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGpc2dhx4CoFpfuAsPmerWECtSvFAe1C8NREHUCybo3cr8eLaYXJMWV-r6pMQeLRI6dEPrlwx0VnMCMu6NKmwUqyUf1isdu1GsNgvEFa0KnFgW3fJ7eBIRx0VWO69v2wMeadr_RNS2G2AtSRqUsBPI9Qvzk5qdCmvp4EjOnAHucs8PUCHY=) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Feature  Beginning in **Chrome 152**, notifications sent by installed Progressive Web Apps (PWAs) on macOS are natively attributed to the PWA itself via its macOS app shim. Instead of appearing under "Google Chrome" with the Chrom
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEAaG0M8aYWjGq0HfP_Pz1batfSsaEnOu1rbaCaWDcEyKu1esEr95i0Kps_vxqowkjBM58wAEKiGVMStoXlgQd_GDqNayLtPtCSMidMxyYB6JNQjjTf0JHou4_d83BbH9y6haap7tn30Rp4QTFLTVCSMp8nRHhmNIKXnnP0o2DkpyYJDRg=) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Feature  Beginning in **Chrome 152**, notifications sent by installed Progressive Web Apps (PWAs) on macOS are natively attributed to the PWA itself via its macOS app shim. Instead of appearing under "Google Chrome" with the Chrom
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEOkpbdFsdJ8ChVUTE5OjylbcYEeIi3BjCLaXEXLDQAj1bq_bkgZIekdbT4ZNeH7d5YtUGwNe1-7Peau0ZueyawWo89H91QareHmCPgpASUbMfmOznG9DpdrOWWpvbO3fPwtRzKtOlOOPtOt7dGDuBLaCO-YgJKkyywU_GIeOfTwCuZUQ==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Feature  Beginning in **Chrome 152**, notifications sent by installed Progressive Web Apps (PWAs) on macOS are natively attributed to the PWA itself via its macOS app shim. Instead of appearing under "Google Chrome" with the Chrom
- [Spec: https://notifications.spec.whatwg.org/#badge-url \| by njam \| Medium](https://medium.com/@njam/spec-https-notifications-spec-whatwg-org-badge-url-96cbd01164e6) *(medium.com · 2016-08-21T17:24:58)*
  > Spec: https://<strong>notifications.spec.whatwg.org</strong>/#badge-url · Any color in the image becomes foreground, and transparency becomes background. example.png · 0 followers · ·1 following · Help · Status · About · Careers · Press · Blog · Priv...
- [\[blink-dev\] Web-Facing Change PSA: Notification attribution for PWAs on macOS](http://www.mail-archive.com/blink-dev@chromium.org/msg16957.html) *(mail-archive.com)*
  > Both of these changes match the already shipping behavior in WebKit: - For installed PWAs, Chrome will no longer support the `requireInteraction` field for notifications. On macOS the choice for a notification being temporary vs persistent is a per-a...
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > When a Progressive Web App (PWA) is installed on macOS, <strong>its notifications are natively attributed to the PWA itself</strong> (using its own name and icon in Notification Center) rather than Google Chrome.
- [Attribution des notifications natives pour les applications Web sur macOS \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/notification-attribution-macos?hl=fr&authuser=664441857) *(developer.chrome.com · 2026-07-16T00:00:00)*
  > Contrôle précis : les utilisateurs peuvent gérer les paramètres de notification des applications Web progressives individuelles (par exemple, les styles d&#x27;alerte et le comportement de l&#x27;écran de verrouillage). Modes concentration : les PWA ...
- [Using Push Notifications in PWAs: The Complete Guide](https://www.magicbell.com/blog/using-push-notifications-in-pwas) *(magicbell.com)*
  > Most browsers let web push run without an install step. Safari on macOS works the same way once the user grants permission.
- [I Need Help Implementing Apple Push Notifications (APN) for Web Apps (PWA)](https://laracasts.com/discuss/channels/laravel/i-need-help-implementing-apple-push-notifications-apn-for-web-apps-pwa) *(laracasts.com)*
  > Implementing Apple Push Notifications (APN) for web apps, including Progressive Web Apps (PWAs), can be a bit complex due to the various steps involved in setting up the necessary certificates, keys, and service workers. Here&#x27;s a step-by-step gu...
- [iOS & iPadOS PWA Notifications \| Monogram](https://monogram.io/blog/notifications-from-ios-and-ipados-pwas) *(monogram.io · 2024-05-01T00:00:00)*
  > How to add notifications to your iOS &amp; iPadOS progressive web apps (PWA).
- [How do I enable iOS Web Push notifications on my PWA website? \| API & SDK Documentation \| Batch Documentation](https://doc.batch.com/developer/technical-guides/how-to-guides/web/how-to-integrate-batchs-snippet-using-google-tag-manager/how-do-i-enable-ios-web-push-notifications-on-my-pwa-website) *(doc.batch.com)*
  > Apple has introduced support for Web Push in PWAs starting with iOS 16.4. This guide assumes that Batch Web SDK is already up and running on your website: you should be able to subscribe to and receive notifications using Safari on macOS 13 (or highe...
- [How to display notification badges on PWAs using the Badging API - LogRocket Blog](https://blog.logrocket.com/display-notification-badges-pwas-using-badging-api) *(blog.logrocket.com · 2024-09-13T13:00:51)*
  > So far it works well on Safari and Chrome on macOS. You can close the web app window, and the badge keeps on going in the background until you quit the application, which is how most applications work. The Badging API is a powerful tool that lets pro...
- [Safari Notifications: How to Enable, Turn Off, and Send Them](https://www.engagelab.com/blog/safari-notifications) *(engagelab.com · 2026-07-08T00:00:00)*
  > Safari notifications started as a macOS-exclusive feature built on APNs. Then, according to WebKit (2023) , iOS and iPadOS 16.4 extended Web Push to iPhone and iPad. On those devices, a Safari notification is only available through Progressive Web Ap...
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
- [Blame · chrome/browser/flag-metadata.json · 49f3efa68704f6e275cf092e5043fbe948bec56e · Web / chromium / src · GitLab](https://gitlab.collabora.com/web/chromium/src/-/blame/49f3efa68704f6e275cf092e5043fbe948bec56e/chrome/browser/flag-metadata.json?page=4) *(gitlab.collabora.com)*
  > { &quot;name&quot;: &quot;enable-logging-js-console-messages&quot;, &quot;owners&quot;: [ &quot;hazems&quot; ], // Never expires because it is used by developers to enable logging JS // console messages in system logs for debugging purposes. It&#x27;...
- [Installed PWAs don't appear in macOS notifications settings \[40693134\] - Chromium](https://issues.chromium.org/issues/40693134) *(issues.chromium.org)*
  > That would have to change to get the PWA badged and to appear in Sys Prefs. However doing so is a bit complex for two reasons: 1) You cannot dynamically select between Alert and Banner style notifications, which is something the web platform allows. ...
- [Native Notification Attribution (Phân bổ thông báo gốc) cho ứng dụng web trên macOS \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/notification-attribution-macos?hl=vi) *(developer.chrome.com · 2026-07-16T00:00:00)*
  > Khuyến khích những người dùng cần thông báo liên tục định cấu hình kiểu cảnh báo có thông báo của PWA thành &quot;Liên tục&quot; trong <strong>System Settings &gt; Notifications &gt; [Your PWA].</strong>
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > Chrome is rolling out notification attribution for installed Progressive Web Apps (PWAs) on macOS.
- [Notification Attribution for PWAs on macOS](https://chromestatus.com/feature/5863296436666368) *(chromestatus.com · 2026-07-01T00:00:00)*
  > We cannot provide a description for this page right now
- [Blame · chrome/browser/flag-metadata.json · afec46c737c5547302fa35a3944624df44fad755 · Web / chromium / src · GitLab](https://gitlab.collabora.com/web/chromium/src/-/blame/afec46c737c5547302fa35a3944624df44fad755/chrome/browser/flag-metadata.json?page=4) *(gitlab.collabora.com)*
  > Add Mac PWA notification attribution feature to chrome://flags.
- [Attribution des notifications natives pour les applications Web sur macOS \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/notification-attribution-macos?hl=fr) *(developer.chrome.com)*
  > Échec silencieux : si l&#x27;utilisateur désactive l&#x27;option &quot;Badge de l&#x27;icône d&#x27;application&quot; dans System Settings &gt; Notifications &gt; [Your PWA] ou refuse complètement l&#x27;autorisation de notification, les appels à nav...
- [web applications - MacOS: setAppBadge() not called by service worker if pwa/ installed web app is closed - Stack Overflow](https://stackoverflow.com/questions/78472771/macos-setappbadge-not-called-by-service-worker-if-pwa-installed-web-app-is-c) *(stackoverflow.com)*
  > the PWA works fine in iOS: it receives notifications AND setAppBadge works fine even if the app is closed (i.e.
- [r/PWA on Reddit: setappbadge not working in macos sonoma if pwa is closed](https://www.reddit.com/r/PWA/comments/1brio9z/setappbadge_not_working_in_macos_sonoma_if_pwa_is) *(reddit.com · 2024-03-30T14:05:41)*
  > on macos (pwa installed to dock via Safari 17.2.1): everythin works fine it the app is open; if the app is closed I still get the push notification but the setAppBadge function doesn&#x27;t seem to work ... self.addEventListener(&quot;push&quot;, (ev...
- [Badging for Home Screen Web Apps \| WebKit](https://webkit.org/blog/14112/badging-for-home-screen-web-apps) *(webkit.org · 2023-04-25T18:28:46)*
  > Similarly, web apps are free to call setAppBadge() whenever they like, but the badge will only appear if the user has granted notifications permission. To request notification permission, <strong>call Notification.</strong>requestPermission() as part...
- [Re-engage users with badges and notifications - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/notifications-badges) *(learn.microsoft.com · 2025-06-25T00:00:00)*
  > Before using the API, check that ... requested the user&#x27;s permission to display messages. To request permission, <strong>use the requestPermission function</strong>, as shown below....
- [Chrome 152 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/152) *(chromestatus.com)*
  > To control notification permissions ... Additionally, administrators need to <strong>deploy a macOS MDM configuration profile to turn on notification permissions for the PWA&#x27;s specific bundle ID</strong>....
- [Microsoft Edge Browser Policy Documentation NotificationsAllowedForUrls \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/notificationsallowedforurls) *(learn.microsoft.com · 2026-05-21T00:00:00)*
  > Windows and Mac documentation for supported Microsoft Edge Browser policy: Allow notifications on specific sites
- [NotificationsAllowedForUrls - Instinctive library of Chrome settings](https://instinctive.app/chromesettings/notificationsallowedforurls) *(instinctive.app · 2024-10-08T00:00:00)*
  > Audit &amp; fix Chrome settings to keep users safe &amp; devices secure · Compare and sync settings across OUs or historical exports. Import settings to copy from one OU to another
- [Chrome 152のmacOS通知変更で見直すPWAの権限設計 \| 株式会社Symvance](https://symvance-tech.com/blog/latest/2026-07-27-chrome-152-macos-pwa-notification-attribution) *(symvance-tech.com · 2026-07-27T08:48:18)*
  > 企業がmacOS端末へ通知権...ome側のNotificationsAllowedForUrlsだけでは完了しません。PWAのbundle identifierに対して通知を許可するmacOS構成プロファイルも必要です。 · 管理対象端末では、一般利用者向けの手動許可テストに加え、MDM適用後の...
- [App icon notification badge for PWAs \[40519241\] - Chromium](https://issues.chromium.org/issues/40519241) *(issues.chromium.org)*
  > https://bugs.chromium.org/p/chromium/issues/detail?id=722429 · That&#x27;s entirely unrelated. We can definitely support this for enhanced add to homescreen apps on Android O. Support on other platforms would be great :). ... Summarizing a conversati...
- [Powerful PWAs \| ChromeOS \| Google for Developers](https://developers.google.com/chromeos/app-development/learn/powerful-pwas) *(developers.google.com · 2025-12-18T00:00:00)*
  > While some PWA capabilities are commonly known, like the Notifications API that lets a web app receive and publish platform notifications, there are a number of new and upcoming features that are coming to the web to superpower your apps. The Chromiu...
- [Web Push Notifications are broken in Chrome/PWA app on ...](https://issuetracker.google.com/issues/296891218) *(issuetracker.google.com)*
  > Sign in
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152?hl=en) *(developer.chrome.com · 2026-08-25T15:50:03)*
  > PWA notifications align with native macOS applications: Chrome no longer supports the requireInteraction field for notifications on macOS, and <strong>the Badging API requires notification permissions for the app badge to appear</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Web Notifications](https://www.w3.org/TR/2015/REC-notifications-20151022) *(w3.org)* *(Cites: `https://notifications.spec.whatwg.org`)*
  > Please see also the test suite and implementation report for this specification. <strong>A specification for Notifications is also being developed at https://notifications.spec.whatwg.org/</strong>. Recent work there has focused on integrat...
- [Spec: https://notifications.spec.whatwg.org/#badge-url \| by njam \| Medium](https://medium.com/@njam/spec-https-notifications-spec-whatwg-org-badge-url-96cbd01164e6) *(medium.com · 2016-08-21T17:24:58)* *(Cites: `https://notifications.spec.whatwg.org`)*
  > Spec: https://<strong>notifications.spec.whatwg.org</strong>/#badge-url · Any color in the image becomes foreground, and transparency becomes background. example.png · 0 followers · ·1 following · Help · Status · About · Careers · Press · B...
- [The allowed values of \`Notification.requestPermission()\` differ between spec and implementations · Issue #197 · whatwg/notifications](https://github.com/whatwg/notifications/issues/197) *(github.com · 2023-08-07T21:09:30)* *(Cites: `https://notifications.spec.whatwg.org`)*
  > https://<strong>notifications.spec.whatwg.org</strong>/#dom-notification-requestpermission Let permissionState be the result of requesting permission to use &quot;notifications&quot;. And the Permissions term: http...

## 📚 Platform Documentation & Specifications

- [Web Notifications](https://www.w3.org/TR/2015/REC-notifications-20151022) *(w3.org)*
- [The allowed values of \`Notification.requestPermission()\` differ between spec and implementations · Issue #197 · whatwg/notifications](https://github.com/whatwg/notifications/issues/197) *(github.com)*
- [Display a badge on the app icon - Progressive web apps \| MDN](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/How_to/Display_badge_on_app_icon) *(developer.mozilla.org)*
- [navigator.setAppBadge does not work within onBackgroundMessage · Issue #8416 · firebase/firebase-js-sdk](https://github.com/firebase/firebase-js-sdk/issues/8416) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 53 result(s) found across 12 planned queries — **39 verified relevant**
  - `"chromestatus.com/feature/5863296436666368" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"notifications.spec.whatwg.org" -site:notifications.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Notification attribution for PWAs on macOS" API` — *Core feature API query* (2 returned)
  - `"Notification attribution for PWAs on macOS" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"webkit.org" OR "chromeenterprise.google" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Notification attribution for PWAs on macOS" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Notification attribution for PWAs on macOS" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"notification attribution" PWA macOS Chrome` — *Finds developer guides, blog announcements, and technical explanations of Chrome's per-app notification attribution for installed macOS PWAs.* (8 returned)
  - `navigator.setAppBadge Notification.requestPermission macOS PWA` — *Surfaces real-world JavaScript code examples and API usage for handling Badging API permissions alongside notification requests on macOS.* (8 returned)
  - `"NotificationsAllowedForUrls" macOS MDM PWA bundle ID notification` — *Discovers enterprise documentation and deployment workflows for configuring macOS MDM profiles and Chrome policies for PWA notifications.* (7 returned)
  - `PWA notification attribution macOS (site:groups.google.com/a/chromium.org OR site:bugs.chromium.org OR "Intent to Ship")` — *Targets Chromium platform discussions, Intent to Ship threads, and developer sentiment surrounding notification attribution on macOS.* (8 returned)
  - `macOS PWA notifications "requireInteraction" "Badging API"` — *Explores developer migration guides detailing behavioral updates such as the deprecation of requireInteraction and the new Badging API permission requirement.* (6 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 6 result(s) found — **0 verified relevant**
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
