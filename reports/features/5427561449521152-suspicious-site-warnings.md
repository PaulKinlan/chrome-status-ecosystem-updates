# Suspicious site warnings

> **Report Week:** 2026-W38 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Suspicious site warnings are a new feature for users of \*\*Safe Browsing &gt; Enhanced protection\*\*, to warn against potentially malicious sites.   In Chrome 152, when a user enrolled in enhanced Safe Browsing visits a site with signals to indicate that it is potentially malicious, a warning displays in a by-passable pop-up, which must be clicked before they can continue. This warning is in addition to the red interstitial warnings, which will continue to be shown on confirmed malicious websites. For more information, see \[Choose your Safe Browsing protection level in Chrome\](https://support.google.com/chrome/answer/13844634).  Admins can control this warning using the existing \[SafeBrowsingProtectionLevel\](https://chromeenterprise.google/policies/#SafeBrowsingProtectionLevel) policy. To exclude specific sites from triggering the warning, admins can add URLs to the \[SafeBrowsingAllowlistDomains\](https://chromeenterprise.google/policies/#SafeBrowsingAllowlistDomains) policy.

## Ecosystem Status

- **Momentum:** High (103 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Introduced in Chrome 152, Suspicious Site Warnings provide an intermediate protective layer for users enrolled in Safe Browsing Enhanced Protection, displaying a bypassable popup when navigating to domains exhibiting malicious heuristics before a full blocklist interstitial is warranted. Because this is a proprietary browser-level security intervention rather than a programmatic Web Platform API, it is not subject to W3C or WHATWG standardization. Ecosystem perception centers on balancing proactive phishing defense with the recurring risk of opaque false positives for webmasters.

### Recommendations
- Actionable Advice: Web development and SecOps teams do not need to write code for this feature, but should monitor domain health in Google Search Console's Security Issues dashboard and verify SSL/reputation signals to avoid false-positive triggers. Enterprise IT administrators should utilize the 'SafeBrowsingAllowlistDomains' policy to exempt internal or staged line-of-business applications from triggering bypassable warnings.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "My domain has been flagged as 'Deceptive' by Google" (8 points, 4 comments).

## Community Discussions & Social Pulse

- 💬 **Hacker News:** [My domain has been flagged as 'Deceptive' by Google](https://news.ycombinator.com/item?id=32286742) — *8 pts, 4 comments*
- 💬 **Hacker News:** [Ask HN: Get Support from Google Adsense](https://news.ycombinator.com/item?id=40893635) — *2 pts, 0 comments*
- 🐦 **Twitter / X:** [Don't ignore suspicious site or malware warnings.](https://twitter.com/google/status/395158147389992960) — *by @google, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [is this phishing? (@isthisphish) on X](https://twitter.com/isthisphish) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [PrintOnWeb on X: "Fraud websites are using our website name along with some extra url with it, they are fraud, using our name they will redirect you to some suspicious/other website, they can harm your personal data" / X](https://twitter.com/printonweb/status/926748272009519104) — *by @printonweb, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Twitter](https://twitter.com/warningshout?lang=en) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Severe Warnings (@severewarn) / X](https://twitter.com/severewarn?lang=en) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [US privately warned Iran over suspicious nuclear activities](https://twitter.com/axios/status/1813655962835656962) — *by @axios, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > For users of Safe Browsing Enhanced protection, <strong>Chrome displays a bypassable warning popup when visiting sites with signals indicating they are potentially malicious</strong>. This warning is shown in addition to existing interstitial warning...
- [Quarterly Updates](https://www.chromium.org/Home/chromium-security/quarterly-updates) *(chromium.org)*
  > To continue to combat the problem of Cookie Theft, we started offering the ability to scan suspicious passphrase-encrypted archives via Google servers for users who have enabled Enhanced Safe Browsing in Chrome. We also launched a refresh of the vari...
- [Essential Security Practices for Securing Your Business?s PWA](https://www.oodlestechnologies.com/blogs/common-pwa-security-risks-and-how-to-avoid-them) *(oodlestechnologies.com · 2020-02-14T12:42:20)*
  > <strong>Provide a visible and easy-to-access option for users to report suspicious notifications or disable them altogether for a better user experience</strong>. ... Securing your Progressive Web App (PWA) is crucial to ensure data protection, user ...
- [Phishing in PWA Applications: A New Method Targeting Mobile Users](https://www.welivesecurity.com/en/eset-research/be-careful-what-you-pwish-for-phishing-in-pwa-applications) *(welivesecurity.com · 2024-08-20T00:00:00)*
  > From here victims are asked to install a “new version” of the banking application; an example of this can be seen in Figure 2. Depending on the campaign, clicking on the install/update button launches the installation of a malicious application from ...
- [Author – Andrew Smith How PWA Technology Can Steal Banking Login](https://icmscyber.com/wp-content/uploads/2024/08/How-PWA-Technology-Can-Steal-Banking-Login-Credentials-from-iOS-and-Android-Phones.pdf) *(icmscyber.com)*
  > How PWA Technology Can Steal Banking Login Credentials from iOS and Android Phones · Copyright©2024 ICMS Cyber Solution Co., Ltd. Page 3 of 3 ... Reading user reviews and ratings can also help identify fake or suspicious PWAs.

## 📚 Platform Documentation & Specifications

- [feat(frontend): complete ScamShield analysis PWA flow by louislais · Pull Request #3 · csfishy/scamshield-ai](https://github.com/csfishy/scamshield-ai/pull/3) *(github.com)*
- [management.getPermissionWarningsByManifest()](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/management/getPermissionWarningsByManifest) *(developer.mozilla.org)*
- [management.getPermissionWarningsById()](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/management/getPermissionWarningsById) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 32 result(s) found across 6 planned queries — **6 verified relevant**
  - `"chromestatus.com/feature/5427561449521152" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"Suspicious site warnings" API` — *Core feature API query* (0 returned)
  - `"Suspicious site warnings" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"support.google" OR "chromeenterprise.google" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Suspicious site warnings" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Suspicious site warnings" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 6 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 6 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 2 result(s) found — **2 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 681 item(s) inspected

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5427561449521152)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5427561449521152)
