# PWA origin migration

> **Report Week:** 2026-W37 | **Milestone:** Chrome 150 | **Category:** Enabled by default

## Overview

When a user installs a Progressive Web App (PWA), its identity and security context are tightly bound to its web origin, for example, `app.example.com`. This presents a significant challenge for developers who need to change their PWA's origin due to rebranding, domain restructuring, or technical re-architecture. Currently, such a change forces users to manually uninstall the old app and reinstall the new one, leading to a disruptive experience and a potential increase in user loss rate. Chrome 150 introduces a mechanism for developers to seamlessly migrate an installed PWA to a new, same-site origin, preserving user trust and permissions.

The [WebAppInstallForceList](https://chromeenterprise.google/policies/#WebAppInstallForceList) policy will block migration. Since enterprise policies around web applications are primarily based on URLs and origins, there is a risk that a migration would bypass certain policies an admin might have configured. No migration will be offered to the user when an app is force-installed by their enterprise administrator, and instead a banner will be shown explaining this to the user.

### Motivation

Imagine you have the "SocialApp" app installed on your computer from www.example.com/social. One day, the company decides to move the app to its own dedicated home at social.example.com. Without a migration mechanism, the app you have installed would either break or redirect you to the new site in a generic browser window, losing its app-like feel. You would have to figure out that you need to uninstall the old app and install the new one from the new address. You might also lose your settings, like whether you've allowed the app to send notifications.

This feature aims to make that transition seamless. Instead of a broken experience, the app would notify you of an available update. With your approval, the app would relaunch from its new home at social.example.com, with your notification settings intact.

## Ecosystem Status

- **Momentum:** High (120 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** PWA origin migration ships enabled by default in Chrome 150, allowing developers to migrate installed Progressive Web Apps to a new same-site origin while preserving user permissions and app identity. The feature addresses long-standing developer pain points during rebrands and subdomain restructuring, though enterprise force-installed apps are intentionally blocked from migrating to avoid bypassing URL-level administrative policies. While Chromium is leading deployment, the W3C TAG review closed with an unsatisfied resolution primarily due to the lack of multi-stakeholder support from other browser engines.

### Recommendations
- Actionable Advice: Teams restructuring domain architectures on Chromium-targeted PWAs can adopt the manifest migration declarations to streamline upgrades for installed desktop and mobile users. However, implementations must remain progressively enhanced with legacy fallback redirects and custom cross-origin state synchronization mechanisms for Safari, Firefox, and unmigrated sessions.
- Shipping enabled by default in Chrome 150. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (W3C TAG): Latest discussion from @Dp-Goog: "Hi folks, I'm helping Marijn with the TAG review here. Adding a gentle nudge in case you need more information from us, happy to help!..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [PWA Origin Migration](https://github.com/WebKit/standards-positions/issues/568) [open]
- **Mozilla:** [PWA Origin Migration](https://github.com/mozilla/standards-positions/issues/1313) [open]
- **W3C TAG:** [Incubation: PWA (same-site) Origin Migration](https://github.com/w3ctag/design-reviews/issues/1164) [closed]

## 📰 Ecosystem Blogs & Articles

- [Ready for Developer Testing: Web App Origin Migration](https://groups.google.com/a/chromium.org/g/blink-dev/c/MUE30sV8S5Y) *(groups.google.com)*
  > Ready for Developer Testing: Web App Origin Migration Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Ready for Developer Testing: Web App Origin Migr...
- [[blink-dev] Intent to Ship: Web App Origin Migration](http://www.mail-archive.com/blink-dev@chromium.org/msg16106.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Web App Origin Migration Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Web App Origin Migration Chromestatus Mon, 16 Mar 2026 16:56:35 -0700 Contact emails [email&#160;protected] , [email&#160;protected...
- [[blink-dev] Ready for Developer Testing: Web App Origin Migration](http://www.mail-archive.com/blink-dev@chromium.org/msg15956.html) *(mail-archive.com)*
  > [blink-dev] Ready for Developer Testing: Web App Origin Migration Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: Web App Origin Migration Chromestatus Mon, 02 Mar 2026 11:41:01 -0800 Contact emails [email&#160;protecte...
- [Re: [blink-dev] Re: Intent to Ship: Web App Origin Migration](http://www.mail-archive.com/blink-dev@chromium.org/msg16134.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: Web App Origin Migration Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Web App Origin Migration Mike Taylor Wed, 18 Mar 2026 09:12:46 -0700 LGTM2 On 3/18/26 11:49 a.m., Marijn Kruisselbr...
- [[blink-dev] Re: Intent to Ship: Web App Origin Migration](http://www.mail-archive.com/blink-dev@chromium.org/msg16132.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: Web App Origin Migration Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Web App Origin Migration Marijn Kruisselbrink Wed, 18 Mar 2026 08:49:47 -0700 The migration does not effect the state of an...
- [[blink-dev] Re: Intent to Ship: Web App Origin Migration](http://www.mail-archive.com/blink-dev@chromium.org/msg16130.html) *(mail-archive.com)*
  > &gt; &gt; On Monday, March 16, 2026 at 4:56:39 PM UTC-7 Chromestatus wrote: &gt; &gt;&gt; *Contact emails* &gt;&gt; [email protected], [email protected], [email protected], &gt;&gt; [email protected] &gt;&gt; &gt;&gt; *Explainer* &gt;&gt; &gt;&gt; ht...
- [Seamless PWA origin migration: Change domains without losing users | Blog | Chrome for Developers](https://developer.chrome.com/blog/seamless-pwa-origin-migration) *(developer.chrome.com · 2026-03-06T00:00:00)*
  > <strong>From Chrome 150 you can seamlessly transition a PWA to a new same-site origin</strong>.
- [Automatically install web apps and Isolated Web Apps - Chrome Enterprise and Education Help](https://support.google.com/chrome/a/answer/9367354?hl=en) *(support.google.com)*
  > They see a banner notification ... week. To successfully migrate users to the new origin, you need to <strong>update your force-install policies (WebAppInstallForceList) to target the PWA with the new origin URL</strong>....

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Ready for Developer Testing: Web App Origin Migration](https://groups.google.com/a/chromium.org/g/blink-dev/c/MUE30sV8S5Y) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5123349239955456`)*
  > Ready for Developer Testing: Web App Origin Migration Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Ready for Developer Testing: Web App O...
- [Incubation: PWA (same-site) Origin Migration · Issue #1164 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1164) *(github.com · 2025-10-30T17:32:35)* *(Cites: `https://chromestatus.com/feature/5123349239955456`)*
  > Incubation: PWA (same-site) Origin Migration · Issue #1164 · w3ctag/design-reviews · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. R...
- [[blink-dev] Intent to Ship: Web App Origin Migration](http://www.mail-archive.com/blink-dev@chromium.org/msg16106.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/manifest-incubations/blob/gh-pages/pwa-migration-explainer.md`)*
  > [blink-dev] Intent to Ship: Web App Origin Migration Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Web App Origin Migration Chromestatus Mon, 16 Mar 2026 16:56:35 -0700 Contact emails [email&#160;protected] , [email&#160...
- [[blink-dev] Ready for Developer Testing: Web App Origin Migration](http://www.mail-archive.com/blink-dev@chromium.org/msg15956.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/manifest-incubations/blob/gh-pages/pwa-migration-explainer.md`)*
  > [blink-dev] Ready for Developer Testing: Web App Origin Migration Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: Web App Origin Migration Chromestatus Mon, 02 Mar 2026 11:41:01 -0800 Contact emails [email&#16...
- [Re: [blink-dev] Re: Intent to Ship: Web App Origin Migration](http://www.mail-archive.com/blink-dev@chromium.org/msg16134.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/manifest-incubations/blob/gh-pages/pwa-migration-explainer.md`)*
  > Re: [blink-dev] Re: Intent to Ship: Web App Origin Migration Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Web App Origin Migration Mike Taylor Wed, 18 Mar 2026 09:12:46 -0700 LGTM2 On 3/18/26 11:49 a.m., Marijn ...
- [[blink-dev] Re: Intent to Ship: Web App Origin Migration](http://www.mail-archive.com/blink-dev@chromium.org/msg16132.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/manifest-incubations/blob/gh-pages/pwa-migration-explainer.md`)*
  > [blink-dev] Re: Intent to Ship: Web App Origin Migration Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Web App Origin Migration Marijn Kruisselbrink Wed, 18 Mar 2026 08:49:47 -0700 The migration does not effect the s...
- [[blink-dev] Re: Intent to Ship: Web App Origin Migration](http://www.mail-archive.com/blink-dev@chromium.org/msg16130.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/manifest-incubations/pull/136`)*
  > &gt; &gt; On Monday, March 16, 2026 at 4:56:39 PM UTC-7 Chromestatus wrote: &gt; &gt;&gt; *Contact emails* &gt;&gt; [email protected], [email protected], [email protected], &gt;&gt; [email protected] &gt;&gt; &gt;&gt; *Explainer* &gt;&gt; &...

## 📚 Platform Documentation & Specifications

- [Incubation: PWA (same-site) Origin Migration · Issue #1164 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1164) *(github.com)*
- [design-reviews#1164: Incubation: PWA (same-site) Origin Migration](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1164) *(tag-github-bot.w3.org)*
- [PWA Migration · Issue #1189 · w3c/manifest](https://github.com/w3c/manifest/issues/1189) *(github.com)*
- [PWA Origin Migration · Issue #568 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/568) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 17 result(s) found across 7 planned queries — **12 verified relevant**
  - `"chromestatus.com/feature/5123349239955456" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/WICG/manifest-incubations/blob/gh-pages/pwa-migration-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"github.com/WICG/manifest-incubations/pull/136" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"PWA origin migration" OR ("PWA" "origin migration") (guide OR tutorial OR how-to)` — *Finds developer guides and tutorials explaining how to migrate an installed Progressive Web App to a new domain or origin.* (0 returned)
  - `("pwa-migration-explainer" OR "manifest-incubations") ("origin migration" OR "migration") manifest.json` — *Discovers Web App Manifest spec discussions, pull requests, and code examples for defining PWA origin migration parameters.* (7 returned)
  - `"PWA origin migration" OR "PWA migration" ("Intent to Prototype" OR "Intent to Ship" OR "Chrome 150" OR chromestatus)` — *Tracks Chromium release announcements, Blink dev intent threads, and browser implementation timelines for PWA origin migration.* (1 returned)
  - `"PWA origin migration" OR ("installed PWA" "new origin") ("WebAppInstallForceList" OR enterprise OR permissions)` — *Searches for community feedback, security implications, and discussions regarding enterprise policy restrictions like WebAppInstallForceList.* (1 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 2 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 18 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5123349239955456)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5123349239955456)
- [Specification](https://github.com/WICG/manifest-incubations/pull/136)
- [Chromium Tracking Bug](https://issues.chromium.org/396504527)
