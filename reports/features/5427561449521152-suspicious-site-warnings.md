# Suspicious site warnings

> **Report Week:** 2026-W39 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Suspicious site warnings are a new feature for users of \*\*Safe Browsing &gt; Enhanced protection\*\*, to warn against potentially malicious sites.   In Chrome 152, when a user enrolled in enhanced Safe Browsing visits a site with signals to indicate that it is potentially malicious, a warning displays in a by-passable pop-up, which must be clicked before they can continue. This warning is in addition to the red interstitial warnings, which will continue to be shown on confirmed malicious websites. For more information, see \[Choose your Safe Browsing protection level in Chrome\](https://support.google.com/chrome/answer/13844634).  Admins can control this warning using the existing \[SafeBrowsingProtectionLevel\](https://chromeenterprise.google/policies/#SafeBrowsingProtectionLevel) policy. To exclude specific sites from triggering the warning, admins can add URLs to the \[SafeBrowsingAllowlistDomains\](https://chromeenterprise.google/policies/#SafeBrowsingAllowlistDomains) policy.

## Ecosystem Status

- **Momentum:** Emerging (30 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** Suspicious site warnings is currently Enabled by default in Chrome 152. Verified ecosystem momentum is Emerging with Chromium-Led standards alignment and neutral developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "My domain has been flagged as 'Deceptive' by Google" (8 points, 4 comments).

## Community Discussions & Social Pulse

- 💬 **Hacker News:** [My domain has been flagged as 'Deceptive' by Google](https://news.ycombinator.com/item?id=32286742) — *8 pts, 4 comments*
- 🐦 **Twitter / X:** [Don't ignore suspicious site or malware warnings.](https://twitter.com/google/status/395158147389992960) — *by @google, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Metropolitan Police on X: "Have you received an email that you're not quite sure about? Cyber criminals use scam emails as bait to lure you into clicking on links, where they will then exploit you for your personal information. Report any suspicious emails immediately to 👉 report@phishing.gov.uk" / X](https://twitter.com/metpoliceuk/status/1283020170005544961?lang=en) — *by @metpoliceuk, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [is this phishing? (@isthisphish) on X](https://twitter.com/isthisphish) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Severe Warnings (@severewarn) / X](https://twitter.com/severewarn?lang=en) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [US privately warned Iran over suspicious nuclear activities](https://twitter.com/axios/status/1813655962835656962) — *by @axios, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > For users of Safe Browsing Enhanced protection, <strong>Chrome displays a bypassable warning popup when visiting sites with signals indicating they are potentially malicious</strong>. This warning is shown in addition to existing interstitial warning...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 32 result(s) found across 6 planned queries — **1 verified relevant**
  - `"chromestatus.com/feature/5427561449521152" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"Suspicious site warnings" API` — *Core feature API query* (0 returned)
  - `"Suspicious site warnings" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"support.google" OR "chromeenterprise.google" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Suspicious site warnings" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Suspicious site warnings" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 4 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 1 result(s) found — **1 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 682 item(s) inspected

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5427561449521152)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5427561449521152)
