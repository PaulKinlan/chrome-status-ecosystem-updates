# Suspicious site warnings

> **Report Week:** 2026-W37 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Suspicious site warnings are a new feature for users of **Safe Browsing > Enhanced protection**, to warn against potentially malicious sites. 

In Chrome 152, when a user enrolled in enhanced Safe Browsing visits a site with signals to indicate that it is potentially malicious, a warning displays in a by-passable pop-up, which must be clicked before they can continue. This warning is in addition to the red interstitial warnings, which will continue to be shown on confirmed malicious websites. For more information, see [Choose your Safe Browsing protection level in Chrome](https://support.google.com/chrome/answer/13844634).

Admins can control this warning using the existing [SafeBrowsingProtectionLevel](https://chromeenterprise.google/policies/#SafeBrowsingProtectionLevel) policy. To exclude specific sites from triggering the warning, admins can add URLs to the [SafeBrowsingAllowlistDomains](https://chromeenterprise.google/policies/#SafeBrowsingAllowlistDomains) policy.

## Ecosystem Status

- **Momentum:** High (120 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Suspicious site warnings is currently Enabled by default in Chrome 152. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "My domain has been flagged as 'Deceptive' by Google" (8 points, 4 comments).

## Community Discussions & Social Pulse

- 💬 **Hacker News:** [My domain has been flagged as 'Deceptive' by Google](https://news.ycombinator.com/item?id=32286742) — *8 pts, 4 comments*

## 📰 Ecosystem Blogs & Articles

- [When and Why does Chrome display malware detection warning?](https://security.stackexchange.com/questions/22808/when-and-why-does-chrome-display-malware-detection-warning) *(security.stackexchange.com · 2012-10-18T00:00:00)*
  > Google Chrome contains malware detection feature. When user visits some site, browser may display warning that site contains malware. What does it mean that site contains malware? Does it mean tha...
- [Tell HN: Chrome says "suspicious download" when trying to download yt-dlp | Hacker News](https://news.ycombinator.com/item?id=47588658) *(news.ycombinator.com · 2026-04-13T02:06:02)*
  > Tell HN: Chrome says "suspicious download" when trying to download yt-dlp | Hacker News Hacker News new | past | comments | ask | show | jobs | submit login Tell HN: Chrome says "suspicious download" when trying to download yt-dlp 311 points by joeri...
- [Google Safe Browsing missed 84% of confirmed phishing sites | Hacker News](https://news.ycombinator.com/item?id=47262347) *(news.ycombinator.com · 2026-03-11T20:24:06)*
  > So how did they narrow it down to that small number? Why these sites specifically?... what&#x27;s the false positive / negative rate of both approaches? What&#x27;s even going on · the false positive rate is 100%. they just say everything is phishing...
- [Why does Google Safe Browsing keep detecting malware on my website? - Information Security Stack Exchange](https://security.stackexchange.com/questions/98161/why-does-google-safe-browsing-keep-detecting-malware-on-my-website) *(security.stackexchange.com)*
  > The Google Safe Browsing report says that <strong>the malware &quot;being downloaded and installed without user consent</strong>&quot; which seems to indicate that it isn&#x27;t the files, but some other portion of your site.
- [Google Chrome opens a suspicious file if "Download anyway" button is clicked. [40936654] - Chromium](https://issues.chromium.org/issues/40936654) *(issues.chromium.org)*
  > N/A --- ### The problem #### Please describe the technical details of the vulnerability When downloading a file that Google Chrome deems to be suspicious, the user is presented with two options: - Scan for malware - Download anyway If the user clicks...
- [File "not commonly downloaded and could be dangerous"; was working a few days ago [41181414] - Chromium](https://issues.chromium.org/issues/41181414) *(issues.chromium.org)*
  > No warning from Chrome 2. Upload to our test site. Downloads fine without warning. 3. Zipped same file to test site. Generates warning when downloaded. Note that Google Webmaster Tools report that there are no known issues with the site and that ther...
- ["Multiple files download warning" settings ignored on Gmail when downloading Google Drive files [40949164] - Chromium](https://issues.chromium.org/issues/40949164) *(issues.chromium.org)*
  > https://mail.google.com:443&quot; is added to <strong>Settings &gt; Privacy and Security &gt; Site settings &gt; additional settings &gt; automatic downloads &gt; &quot;Allowed to automatically download multiple files&quot;</strong> (and also confirm...
- [reCAPTCHA Appears Every Time on Google Search [413168035] - Chromium](https://issues.chromium.org/issues/413168035) *(issues.chromium.org)*
  > comment#2 with bug reproduced video could help as well Additional things you can check on your side to this issue get resolved. - As reCAPTCHA occurs possible Unusual Login Attempts/suspicious Activity - can you use the different account or re-add th...

## 📚 Platform Documentation & Specifications

- [management.getPermissionWarningsByManifest()](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/management/getPermissionWarningsByManifest) *(developer.mozilla.org)*
- [management.getPermissionWarningsById()](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/management/getPermissionWarningsById) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 16 result(s) found across 6 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/5427561449521152" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"Suspicious site warnings" Chrome "Safe Browsing" "Enhanced protection"` — *Official announcements, Chromium release notes, and security blog posts introducing suspicious site warnings.* (0 returned)
  - `"SafeBrowsingAllowlistDomains" "SafeBrowsingProtectionLevel" "suspicious site"` — *Enterprise policy configuration documentation, syntax examples, and management rules for controlling or allowlisting domains.* (0 returned)
  - `Chrome "suspicious site warning" false positive site owner bypass fix` — *Webmaster and developer guides on addressing false positives, warning bypass flows, and site remediation under Enhanced Safe Browsing.* (0 returned)
  - `Chrome "Enhanced Safe Browsing" "suspicious site warning" (site:reddit.com OR site:news.ycombinator.com OR site:security.stackexchange.com)` — *Developer and security community reactions, privacy discussions, and user sentiment regarding bypassable popups on potentially malicious sites.* (8 returned)
  - `site:issues.chromium.org OR site:chromestatus.com "suspicious site" warning` — *Chromium tracker issues, design specifications, and implementation tracking for the suspicious site warning feature.* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 1 result(s) found — **1 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 1 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 1 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5427561449521152)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5427561449521152)
