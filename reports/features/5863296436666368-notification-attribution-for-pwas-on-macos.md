# Notification attribution for PWAs on macOS

> **Report Week:** 2026-W37 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Chrome 152 rolls out notification attribution for installed Progressive Web Apps (PWAs) on macOS. When a PWA is installed on macOS, its notifications are now attributed to the PWA itself (using its own name and icon in the Notification Center) rather than Google Chrome.

This update also changes how notifications are displayed to the user, aligning PWA notifications with native macOS applications. It introduces two changes that align with current behavior in [WebKit](https://webkit.org/):
- For app notifications, Chrome no longer supports the `requireInteraction` field for notifications. On macOS, the user controls whether the notification is temporary or persistent on a per-app basis.
- For app badging, the Badging API now requires notifications permissions for the app badge to show up. If the user does not grant notifications permission, the API silently does nothing.

To control notification permissions using Chrome policies, admins need to update their policy settings if they want to keep that behavior for PWAs on macOS, using the Chrome origin-based policy [NotificationsAllowedForUrls](https://chromeenterprise.google/policies/#NotificationsAllowedForUrls). Additionally, administrators need to deploy a macOS MDM configuration profile to turn on notification permissions for the PWA's specific bundle ID.

### Motivation

Previously, all PWA notifications were displayed under the "Google Chrome" umbrella. This prevented users from managing notification settings (sounds, badges, alerts, Focus modes) on a per-PWA basis. Attributing notifications to the PWA's App Shim provides a highly requested native integration on macOS, aligning Chrome with established macOS platform behaviors.

## Ecosystem Status

- **Momentum:** Moderate (50 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Notification attribution for PWAs on macOS is currently Enabled by default in Chrome 152. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Steve Moser on X: "🚨 🚨 🚨 Push Notifications coming to web apps (PWAs) on iOS is huge! Once this last barrier drops a lot of apps will migrate from the App Store to PWAs. Check out this great post (and image from @firt’s blog post) about the caveats and about changes to Safari in iOS 15.4 Beta 1." / X" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Steve Moser on X: "🚨 🚨 🚨 Push Notifications coming to web apps (PWAs) on iOS is huge! Once this last barrier drops a lot of apps will migrate from the App Store to PWAs. Check out this great post (and image from @firt’s blog post) about the caveats and about changes to Safari in iOS 15.4 Beta 1." / X](https://twitter.com/SteveMoser/status/1488169930973487113) — *by @SteveMoser, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [GitHub on Twitter: "GitHub for Mac: Notifications – https://t.co/GCoU0qf6"](https://twitter.com/github/status/256061058026971136) — *by @github, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Creating a User-Centric Web Push Experience on the New twitter.com](https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/user-centric-web-push-aggregation) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [OneSignal on Twitter: "We recently added Mac OS X App notification support! Many more great features are in the works.… "](https://twitter.com/onesignal/status/722624279326490624) — *by @onesignal, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Manage or turn on X notifications for desktop](https://help.twitter.com/en/managing-your-account/enabling-web-and-browser-notifications) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Notion on X: "@nortools You can check your notification preferences in "Settings &amp; Members" to make sure you have them enabled for mobile. But if you have the Notion app open or in active use, you won't receive push notifications for reminders, you'll only get a notification on your "All Updates." 👍" / X](https://twitter.com/NotionHQ/status/1017550854444888064?lang=en) — *by @NotionHQ, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [[blink-dev] Web-Facing Change PSA: Notification attribution for PWAs on macOS](http://www.mail-archive.com/blink-dev@chromium.org/msg16957.html) *(mail-archive.com)*
  > [blink-dev] Web-Facing Change PSA: Notification attribution for PWAs on macOS Skip to site navigation (Press enter) [blink-dev] Web-Facing Change PSA: Notification attribution for PWAs on macOS Chromestatus Thu, 09 Jul 2026 14:32:41 -0700 Contact ema...
- [Attribution des notifications natives pour les applications Web sur macOS | Blog | Chrome for Developers](https://developer.chrome.com/blog/notification-attribution-macos?hl=fr) *(developer.chrome.com)*
  > Attribution des notifications natives pour les applications Web sur macOS | Blog | Chrome for Developers Passer au contenu principal / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Vi...
- [FAQ](https://hopscotch.trade/support/faq) *(hopscotch.trade)*
  > By default, Hopscotch push notifications on MacOS will show Chrome&#x27;s logo. To make push notifications display the correct app logo instead, <strong>open a Chrome browser window and navigate to chrome://flags , find the option Mac PWA notificatio...
- [Blame · chrome/browser/flag-metadata.json · 49f3efa68704f6e275cf092e5043fbe948bec56e · Web / chromium / src · GitLab](https://gitlab.collabora.com/web/chromium/src/-/blame/49f3efa68704f6e275cf092e5043fbe948bec56e/chrome/browser/flag-metadata.json?page=4) *(gitlab.collabora.com)*
  > { &quot;name&quot;: &quot;enable-logging-js-console-messages&quot;, &quot;owners&quot;: [ &quot;hazems&quot; ], // Never expires because it is used by developers to enable logging JS // console messages in system logs for debugging purposes. It&#x27;...
- [Installed PWAs don't appear in macOS notifications settings [40693134] - Chromium](https://issues.chromium.org/issues/40693134) *(issues.chromium.org)*
  > That would have to change to get the PWA badged and to appear in Sys Prefs. However doing so is a bit complex for two reasons: 1) You cannot dynamically select between Alert and Banner style notifications, which is something the web platform allows. ...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 32 result(s) found across 7 planned queries — **5 verified relevant**
  - `"chromestatus.com/feature/5863296436666368" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"notifications.spec.whatwg.org" -site:notifications.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"Notification attribution for PWAs on macOS" API` — *Core feature API query* (1 returned)
  - `"Notification attribution for PWAs on macOS" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"webkit.org" OR "chromeenterprise.google" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Notification attribution for PWAs on macOS" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Notification attribution for PWAs on macOS" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5863296436666368)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5863296436666368)
- [Specification](https://notifications.spec.whatwg.org)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/327449602)
