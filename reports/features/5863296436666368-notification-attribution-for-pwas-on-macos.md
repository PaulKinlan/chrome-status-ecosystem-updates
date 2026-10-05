# Notification attribution for PWAs on macOS

> **Report Week:** 2026-W41 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Chrome 152 rolls out notification attribution for installed Progressive Web Apps (PWAs) on macOS. When a PWA is installed on macOS, its notifications are now attributed to the PWA itself (using its own name and icon in the Notification Center) rather than Google Chrome.  This update also changes how notifications are displayed to the user, aligning PWA notifications with native macOS applications. It introduces two changes that align with current behavior in \[WebKit\](https://webkit.org/): - For app notifications, Chrome no longer supports the \`requireInteraction\` field for notifications. On macOS, the user controls whether the notification is temporary or persistent on a per-app basis. - For app badging, the Badging API now requires notifications permissions for the app badge to show up. If the user does not grant notifications permission, the API silently does nothing.  To control notification permissions using Chrome policies, admins need to update their policy settings if they want to keep that behavior for PWAs on macOS, using the Chrome origin-based policy \[NotificationsAllowedForUrls\](https://chromeenterprise.google/policies/#NotificationsAllowedForUrls). Additionally, administrators need to deploy a macOS MDM configuration profile to turn on notification permissions for the PWA's specific bundle ID.

### Motivation

Previously, all PWA notifications were displayed under the "Google Chrome" umbrella. This prevented users from managing notification settings (sounds, badges, alerts, Focus modes) on a per-PWA basis. Attributing notifications to the PWA's App Shim provides a highly requested native integration on macOS, aligning Chrome with established macOS platform behaviors.

## Ecosystem Status

- **Momentum:** High (365 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Notification attribution for PWAs on macOS is currently Enabled by default in Chrome 152. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "PWA: How to never miss a call notification" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [PWA: How to never miss a call notification](https://www.3cx.com/blog/docs/pwa-push-notifications) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [GitHub on Twitter: "GitHub for Mac: Notifications – https://t.co/GCoU0qf6"](https://twitter.com/github/status/256061058026971136) — *by @github, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Steve Moser on X: "🚨 🚨 🚨 Push Notifications coming to web apps (PWAs) on iOS is huge! Once this last barrier drops a lot of apps will migrate from the App Store to PWAs. Check out this great post (and image from @firt’s blog post) about the caveats and about changes to Safari in iOS 15.4 Beta 1." / X](https://twitter.com/SteveMoser/status/1488169930973487113) — *by @SteveMoser, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [OneSignal on Twitter: "We recently added Mac OS X App notification support! Many more great features are in the works.… "](https://twitter.com/onesignal/status/722624279326490624) — *by @onesignal, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Manage or turn on X notifications for desktop](https://help.twitter.com/en/managing-your-account/enabling-web-and-browser-notifications) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Get customized Tweet notifications where you want them](https://blog.twitter.com/developer/en_us/topics/tips/2020/get-customized-tweet-notifications-where-you-want-them) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Configure 3CX Browser and PWA Permissions on Managed Devices](https://www.3cx.com/docs/chromium-permisions-autodeployment) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Solved - PWA on Macbook \| 3CX Forums](https://www.3cx.com/community/threads/pwa-on-macbook.126463) — *0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Spec: https://notifications.spec.whatwg.org/#badge-url \| by njam \| Medium](https://medium.com/@njam/spec-https-notifications-spec-whatwg-org-badge-url-96cbd01164e6) *(medium.com · 2016-08-21T17:24:58)*
  > Medium Spec: https://notifications.spec.whatwg.org/#badge-url | by njam | Medium Sitemap Open in app Sign up Sign in Get app Write Search Sign up Sign in njam 1 min read · Aug 21, 2016 Spec: https://notifications.spec.whatwg.org/#badge-url Any color ...
- [\[blink-dev\] Web-Facing Change PSA: Notification attribution for PWAs on macOS](http://www.mail-archive.com/blink-dev@chromium.org/msg16957.html) *(mail-archive.com)*
  > [blink-dev] Web-Facing Change PSA: Notification attribution for PWAs on macOS Skip to site navigation (Press enter) [blink-dev] Web-Facing Change PSA: Notification attribution for PWAs on macOS Chromestatus Thu, 09 Jul 2026 14:32:41 -0700 Contact ema...
- [Using Push Notifications in PWAs: The Complete Guide](https://www.magicbell.com/blog/using-push-notifications-in-pwas) *(magicbell.com)*
  > Using Push Notifications in PWAs: The Complete Guide Using Push Notifications in PWAs: The Complete Guide Progressive web apps (PWAs) allow brands to enjoy the advanced features of a mobile app without spending a lot of time developing it. With a PWA...
- [I Need Help Implementing Apple Push Notifications (APN) for Web Apps (PWA)](https://laracasts.com/discuss/channels/laravel/i-need-help-implementing-apple-push-notifications-apn-for-web-apps-pwa) *(laracasts.com)*
  > I Need Help Implementing Apple Push Notifications (APN) for Web Apps (PWA) Ctrl K Discussions Popular This Week Popular All Time Solved Unsolved No Replies Yet Feb 4, 2024 4 phayes0289 OP 2 years ago Level 5 I Need Help Implementing Apple Push Notifi...
- [iOS & iPadOS PWA Notifications \| Monogram](https://monogram.io/blog/notifications-from-ios-and-ipados-pwas) *(monogram.io · 2024-05-01T00:00:00)*
  > In a significant leap forward, Apple has recently enabled the delivery of native iOS notifications for PWAs. This development is a game-changer, removing one of the key barriers that often push developers towards publishing apps via the Apple App Sto...
- [How do I enable iOS Web Push notifications on my PWA website? \| API & SDK Documentation \| Batch Documentation](https://doc.batch.com/developer/technical-guides/how-to-guides/web/how-to-integrate-batchs-snippet-using-google-tag-manager/how-do-i-enable-ios-web-push-notifications-on-my-pwa-website) *(doc.batch.com · 2026-09-17T00:00:00)*
  > Apple has introduced support for Web Push in PWAs starting with iOS 16.4. This guide assumes that Batch Web SDK is already up and running on your website: you should be able to subscribe to and receive notifications using Safari on macOS 13 (or highe...
- [How to display notification badges on PWAs using the Badging API - LogRocket Blog](https://blog.logrocket.com/display-notification-badges-pwas-using-badging-api) *(blog.logrocket.com · 2024-09-13T13:00:51)*
  > So far it works well on Safari and Chrome on macOS. You can close the web app window, and the badge keeps on going in the background until you quit the application, which is how most applications work. The Badging API is a powerful tool that lets pro...
- [How to Set Up Push Notifications for Your PWA (iOS and Android) \| MobiLoud](https://www.mobiloud.com/blog/pwa-push-notifications) *(mobiloud.com · 2026-08-05T00:00:00)*
  > Yes, but with limitations. iOS 16.4 and later support push notifications for PWAs that have been added to the Home Screen. <strong>The user must install the PWA through Safari&#x27;s &quot;Add to Home Screen&quot; option before they can subscribe</st...
- [xcode - How to Use Apple Push Notification on Mac? - Stack Overflow](https://stackoverflow.com/questions/19679088/how-to-use-apple-push-notification-on-mac) *(stackoverflow.com)*
  > I&#x27;m a newbie in OSX development. I&#x27;m developing an app in mac which requires receiving notifications similar to the iOS APNS. I am fully aware of the Growl Framework, however many suggested that in
- [WebKit](https://webkit.org) *(webkit.org)*
  > <strong>WebKit is the web browser engine used by Safari, Mail, App Store, and many other apps on macOS, iOS, and Linux</strong>. Get started contributing code, or reporting bugs · Web developers can follow development, check feature status, download ...
- [javascript - "-webkit-" (a CSS property) isn't working in any browser except google chrome - Stack Overflow](https://stackoverflow.com/questions/25159594/webkit-a-css-property-isnt-working-in-any-browser-except-google-chrome) *(stackoverflow.com)*
  > 2014-08-06T11:52:21.537Z+00:00 ... @Quentin thanks I was unknown about that and that&#x27;s what standard way do. 2014-08-06T11:55:41.717Z+00:00 ... <strong>WebKit is a HTML/CSS web browser rendering engine for Safari/Chrome</strong>.
- [Fixing Google Chrome compatibility bugs in websites - FAQ](https://www.chromium.org/Home/chromecompatfaq) *(chromium.org)*
  > <strong>Google Chrome uses WebKit (http://webkit.org/) to draw Web pages</strong>. WebKit is a mature (~9 years) open source layout engine used by Apple (Safari, iPhone), Google (Android, Google Chrome), Nokia and many other companies. Google Chrome ...
- [Native Notification Attribution for Web Apps on macOS \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/notification-attribution-macos) *(developer.chrome.com)*
  > From Chrome 152, <strong>Progressive Web Apps (PWAs) installed on macOS will have their notifications natively attributed to the PWA itself</strong>, rather than to Google Chrome.
- [FAQ](https://hopscotch.trade/support/faq) *(hopscotch.trade)*
  > By default, Hopscotch push notifications on MacOS will show Chrome&#x27;s logo. To make push notifications display the correct app logo instead, <strong>open a Chrome browser window and navigate to chrome://flags , find the option Mac PWA notificatio...
- [Blame · chrome/browser/flag-metadata.json · 49f3efa68704f6e275cf092e5043fbe948bec56e · Web / chromium / src · GitLab](https://gitlab.collabora.com/web/chromium/src/-/blame/49f3efa68704f6e275cf092e5043fbe948bec56e/chrome/browser/flag-metadata.json?page=4) *(gitlab.collabora.com)*
  > { &quot;name&quot;: &quot;enable-logging-js-console-messages&quot;, &quot;owners&quot;: [ &quot;hazems&quot; ], // Never expires because it is used by developers to enable logging JS // console messages in system logs for debugging purposes. It&#x27;...
- [Chrome 152 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/152) *(chromestatus.com · 2026-08-25T00:00:00)*
  > When a PWA is installed on macOS, <strong>its notifications are now attributed to the PWA itself (using its own name and icon in the Notification Center) rather than Google Chrome</strong>.
- [Notification Attribution for PWAs on macOS](https://chromestatus.com/feature/5863296436666368) *(chromestatus.com · 2026-07-01T00:00:00)*
  > We cannot provide a description for this page right now
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > PWA notifications align with native macOS applications: <strong>Chrome no longer supports the requireInteraction field for notifications on macOS</strong>, and the Badging API requires notification permissions for the app badge to appear.
- [Blame · chrome/browser/flag-metadata.json · afec46c737c5547302fa35a3944624df44fad755 · Web / chromium / src · GitLab](https://gitlab.collabora.com/web/chromium/src/-/blame/afec46c737c5547302fa35a3944624df44fad755/chrome/browser/flag-metadata.json?page=4) *(gitlab.collabora.com)*
  > Add Mac PWA notification attribution feature to chrome://flags.
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > Administrators pre-granting permissions through policies should note that along with NotificationsAllowedForUrls, a macOS MDM configuration profile is needed to pre-grant permissions for the PWA&#x27;s specific bundle ID.
- [Chrome 152のmacOS通知変更で見直すPWAの権限設計 \| 株式会社Symvance](https://symvance-tech.com/blog/latest/2026-07-27-chrome-152-macos-pwa-notification-attribution) *(symvance-tech.com · 2026-07-27T08:48:18)*
  > 企業がmacOS端末へ通知権...ome側のNotificationsAllowedForUrlsだけでは完了しません。PWAのbundle identifierに対して通知を許可するmacOS構成プロファイルも必要です。 · 管理対象端末では、一般利用者向けの手動許可テストに加え、MDM適用後の...
- [Installed PWAs don't appear in macOS notifications settings \[40693134\] - Chromium](https://issues.chromium.org/issues/40693134) *(issues.chromium.org)*
  > UserAgentString: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.56 Safari/537.36 ... I also don&#x27;t know how an app entry gets into that area. I think it&#x27;s only if the app requests noti...
- [MacRumors PWA Web App with Push Notifications \| MacRumors Forums](https://forums.macrumors.com/threads/macrumors-pwa-web-app-with-push-notifications.2448775) *(forums.macrumors.com · 2025-02-04T19:06:13)*
  > Hi, I know this is way behind the times. When Apple launched Web app support with Push Notifications with native iOS push notifications, we implemented this relatively quickly, but there were some idiosyncrasies about how it worked that made it a lit...
- [Troubleshooting for web push notifications on macOS \| Progressier Help Center](https://intercom.help/progressier/en/articles/7212324-troubleshooting-for-web-push-notifications-on-macos) *(intercom.help · 2024-06-24T01:22:46)*
  > <strong>And toggle on &quot;Allow Notification from Google Chrome&quot;.</strong> Repeat steps 3 and 4 but this time find your PWA in the app list instead of Google Chrome.
- [r/PWA on Reddit: How are push notifications created and handled in PWAs?](https://www.reddit.com/r/PWA/comments/1jmluey/how_are_push_notifications_created_and_handled_in) *(reddit.com · 2025-03-29T13:04:53)*
  > The problem currently is that this is unreliable. Browsers close down that background service after some period of time (it differs in different browsers) such that notifications are not received until the site/pwa is opened again. PWAs installed by ...
- [Push Notifications "notificationclick" not handled in MacOS 15 \[370536109\] - Chromium](https://issues.chromium.org/issues/370536109) *(issues.chromium.org)*
  > https://progressier.com/pwa-capabilities/push-notifications&quot; testing tool 3. Followed the steps to install PWA and enable notifications 4. Clicked on &quot;Send notification&quot; 5. Closed PWA 6. Clicked on notification 7. Observed - no notific...
- [Introducing pwa-check: An Automated PWA Health Check Tool](https://modernwebweekly.substack.com/p/introducing-pwa-check-an-automated) *(modernwebweekly.substack.com · 2026-07-09T12:42:30)*
  > This does introduce two behavioral changes on macOS for installed PWAs: <strong>the requireInteraction option for showNotification will no longer be supported</strong>, as on macOS, this is a per-app setting controlled by the user rather than a per-n...
- [Notification requireInteraction setting broken in Chrome? - Stack Overflow](https://stackoverflow.com/questions/67038441/notification-requireinteraction-setting-broken-in-chrome) *(stackoverflow.com)*
  > I&#x27;m familiarizing with the browser notification API, and I can&#x27;t seem to get the requireInteraction setting to work in Chrome (I&#x27;m on Mac OSX, Chrome v89.0.4389.114.) I&#x27;d like help confirming whether this is a known Chrome bug, or...
- [Notification.requireInteraction - Web APIs - W3cubDocs](https://docs.w3cub.com/dom/notification/requireinteraction) *(docs.w3cub.com)*
  > This feature is not Baseline because it does not work in some of the most widely-used browsers.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Web Notifications](https://www.w3.org/TR/2015/REC-notifications-20151022) *(w3.org)* *(Cites: `https://notifications.spec.whatwg.org`)*
  > Please see also the test suite and implementation report for this specification. <strong>A specification for Notifications is also being developed at https://notifications.spec.whatwg.org/</strong>. Recent work there has focused on integrat...
- [content/files/en-us/web/api/notifications\_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/notifications_api/index.md?plain=1) *(github.com)* *(Cites: `https://notifications.spec.whatwg.org`)*
  > content/files/en-us/web/api/notifications_api/index.md at main · mdn/content · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload ...
- [Spec: https://notifications.spec.whatwg.org/#badge-url \| by njam \| Medium](https://medium.com/@njam/spec-https-notifications-spec-whatwg-org-badge-url-96cbd01164e6) *(medium.com · 2016-08-21T17:24:58)* *(Cites: `https://notifications.spec.whatwg.org`)*
  > Medium Spec: https://notifications.spec.whatwg.org/#badge-url | by njam | Medium Sitemap Open in app Sign up Sign in Get app Write Search Sign up Sign in njam 1 min read · Aug 21, 2016 Spec: https://notifications.spec.whatwg.org/#badge-url ...
- [Web Media API Snapshot 2024](https://www.w3.org/community/reports/webmediaapi/CG-FINAL-webmediaapi-20241016) *(w3.org · 2024-10-16T00:00:00)* *(Cites: `https://notifications.spec.whatwg.org`)*
  > 17 December 2012. W3C Recommendation. URL: https://www.w3.org/TR/navigation-timing/ ... Notifications API Standard. Anne van Kesteren. WHATWG. 17 July 2023. Review Draft (use this version or later). URL: https://<strong>notifications.spec.w...
- [The allowed values of \`Notification.requestPermission()\` differ between spec and implementations · Issue #197 · whatwg/notifications](https://github.com/whatwg/notifications/issues/197) *(github.com · 2023-08-07T21:09:30)* *(Cites: `https://notifications.spec.whatwg.org`)*
  > The allowed values of `Notification.requestPermission()` differ between spec and implementations · Issue #197 · whatwg/notifications · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance se...

## 📚 Platform Documentation & Specifications

- [Web Notifications](https://www.w3.org/TR/2015/REC-notifications-20151022) *(w3.org)*
- [content/files/en-us/web/api/notifications\_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/notifications_api/index.md?plain=1) *(github.com)*
- [Web Media API Snapshot 2024](https://www.w3.org/community/reports/webmediaapi/CG-FINAL-webmediaapi-20241016) *(w3.org)*
- [The allowed values of \`Notification.requestPermission()\` differ between spec and implementations · Issue #197 · whatwg/notifications](https://github.com/whatwg/notifications/issues/197) *(github.com)*
- [Notification requireInteraction feature · Issue #318 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/318) *(github.com)*
- [Notification: requireInteraction property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Notification/requireInteraction) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 59 result(s) found across 12 planned queries — **35 verified relevant**
  - `"chromestatus.com/feature/5863296436666368" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"notifications.spec.whatwg.org" -site:notifications.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"Notification attribution for PWAs on macOS" API` — *Core feature API query* (1 returned)
  - `"Notification attribution for PWAs on macOS" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"webkit.org" OR "chromeenterprise.google" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Notification attribution for PWAs on macOS" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Notification attribution for PWAs on macOS" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
  - `Chrome "notification attribution" PWA macOS` — *Finds official Chromium announcements, release notes, and developer coverage about native notification attribution for PWAs on macOS.* (7 returned)
  - `navigator.setAppBadge "Notification.requestPermission" macOS PWA` — *Surfaces real-world JavaScript code examples showing how to request notification permissions before triggering the App Badging API.* (8 returned)
  - `"NotificationsAllowedForUrls" macOS PWA MDM bundle ID notifications` — *Targets enterprise guides and sysadmin tutorials detailing Chrome policy changes and macOS MDM configuration profiles for PWA notification permissions.* (7 returned)
  - `macOS PWA notifications attribution "Chrome" (site:news.ycombinator.com OR site:reddit.com OR site:x.com)` — *Captures developer sentiment, feedback, and discussion regarding PWA notifications detaching from Chrome into standalone macOS Notification Center items.* (8 returned)
  - `PWA notifications "requireInteraction" macOS WebKit Chrome behavior` — *Discovers developer migration guides discussing the removal of requireInteraction and the alignment of macOS PWA notifications with WebKit standards.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 6 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 36 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5863296436666368)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5863296436666368)
- [Specification](https://notifications.spec.whatwg.org)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/327449602)
