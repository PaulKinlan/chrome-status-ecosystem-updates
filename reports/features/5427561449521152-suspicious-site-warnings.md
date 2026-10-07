# Suspicious site warnings

> **Report Week:** 2026-W41 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Suspicious site warnings are a new feature for users of \*\*Safe Browsing &gt; Enhanced protection\*\*, to warn against potentially malicious sites.   In Chrome 152, when a user enrolled in enhanced Safe Browsing visits a site with signals to indicate that it is potentially malicious, a warning displays in a by-passable pop-up, which must be clicked before they can continue. This warning is in addition to the red interstitial warnings, which will continue to be shown on confirmed malicious websites. For more information, see \[Choose your Safe Browsing protection level in Chrome\](https://support.google.com/chrome/answer/13844634).  Admins can control this warning using the existing \[SafeBrowsingProtectionLevel\](https://chromeenterprise.google/policies/#SafeBrowsingProtectionLevel) policy. To exclude specific sites from triggering the warning, admins can add URLs to the \[SafeBrowsingAllowlistDomains\](https://chromeenterprise.google/policies/#SafeBrowsingAllowlistDomains) policy.

## Ecosystem Status

- **Momentum:** Emerging (10 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Suspicious site warnings is a browser-level security capability enabled in Chrome 152 for users enrolled in Safe Browsing Enhanced Protection. Rather than introducing a programmable JavaScript or CSS web platform API, it presents a bypassable modal dialog before navigating to sites exhibiting heuristic signals of potential maliciousness. As an internal Chromium security and UI enhancement tied to Google Safe Browsing, it does not follow a W3C/WHATWG specification path.

### Recommendations
- Actionable Advice: No code changes, web APIs, or polyfills are applicable, but site owners should monitor Google Search Console security reports and maintain transparent domain reputation practices to avoid triggering heuristic alerts. Enterprise teams should configure the \`SafeBrowsingAllowlistDomains\` policy to ensure internal applications and staging environments are not interrupted by pop-up prompts.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [malwaretips.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEG3ONRMrPppI5slpQG06EpZxH6NlDs1ZDcH6IkrzGp8Hjy56lja2-P9Gi9qnzZAaa7MmZ31nNWn9o3sYnte9AKA_2wnchk4rZA27WP5GSakIoXBAYQVDUfTrX-cneCRLwJmQvL0KL9PWwpeRX0eq6crfB2covQxq_U9v7_ZHNL) *(vertexaisearch.cloud.google.com)*
  > ### Summary  **Suspicious site warnings** were introduced as a browser security feature in **Chrome 152** for users enrolled in **Safe Browsing > Enhanced protection**.   * **How it works:** When a user visits a website that exhibits heuristics or si

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 46 result(s) found across 10 planned queries — **0 verified relevant**
  - `"chromestatus.com/feature/5427561449521152" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"Suspicious site warnings" API` — *Core feature API query* (0 returned)
  - `"Suspicious site warnings" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"support.google" OR "chromeenterprise.google" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Suspicious site warnings" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Suspicious site warnings" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
  - `"Suspicious site warnings" Chrome enterprise policy SafeBrowsingAllowlistDomains` — *Search for enterprise administrator guides and tutorials on configuring Safe Browsing policies and allowlisting domains against suspicious warnings.* (0 returned)
  - `Chrome "Enhanced protection" "Suspicious site warnings" announcement OR rollout` — *Find official announcements, release updates, and coverage on the introduction of bypassable suspicious site warnings in Chrome Safe Browsing.* (8 returned)
  - `SafeBrowsingProtectionLevel SafeBrowsingAllowlistDomains "suspicious" policy configuration` — *Locate enterprise policy schema definitions, registry keys, and JSON configuration syntax for managing suspicious site warning controls.* (8 returned)
  - `"Suspicious site warnings" Chrome (false positive OR bypass OR interstitial) site:reddit.com OR site:support.google.com` — *Discover webmaster experiences, troubleshooting discussions, and user sentiment regarding false positives and bypassable pop-ups.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 4 result(s) found — **1 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 6 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 1 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 687 item(s) inspected

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5427561449521152)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5427561449521152)
