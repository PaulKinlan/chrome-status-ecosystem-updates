# Private Verification Tokens

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Origin trial

## Overview

Automated traffic is increasing across the web, and many websites have responded with more user friction in the form of CAPTCHAs and other challenges to combat unwanted traffic. This degrades the web user experience for all users, with a particularly outsized impact to users in private browsing modes.

Private Verification Tokens (PVT) is a low entropy mechanism that allows websites to transfer the trust that their users have established in regular browsing into private browsing mode to reduce their experienced user friction. PVTs are issued during a regular browsing session and redeemed in private browsing mode.

### Motivation

Due to the significant increase in automation over the past 1-2 years, driven largely by AI, websites have responded by adding more challenges to determine if clients are likely to be human.  In particular, this has had an outsized impact on users in private browsing mode, who tend to have similar client characteristics as automated clients, such as a cleared local state. We propose providing a very limited signal of user trust transferred from regular browsing into private browsing (one-way only), on a single top level site, with strict privacy properties, a publicly viewable list of registered sites who can use the mechanism, and full user control to disable the feature, to help users in Incognito mode have a more frictionless browsing experience.

## Ecosystem Status

- **Momentum:** Emerging (30 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** Private Verification Tokens is currently Origin trial in Chrome 154. Verified ecosystem momentum is Emerging with Chromium-Led standards alignment and neutral developer pulse.

### Recommendations
- In active Origin Trial in Chrome 154. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Explainer for the Private Verification Tokens" (2 points, 0 comments).

## Community Discussions

- [Explainer for the Private Verification Tokens](https://news.ycombinator.com/item?id=47760044) (2 pts, 0 comments)
- [Cloudflare announces Private Access Tokens – verification without CAPTCHAs](https://news.ycombinator.com/item?id=31684232) (3 pts, 0 comments)
- [Show HN: Agent Passport – OAuth-like identity verification for AI agents](https://news.ycombinator.com/item?id=47096131) (14 pts, 15 comments)
- [Show HN: Google Authenticator Compatible Hardware Token](https://news.ycombinator.com/item?id=8962378) (1 pts, 0 comments)

## 📰 Ecosystem Blogs & Articles

- [Cloudflare announces Private Access Tokens – verification without CAPTCHAs](https://www.neowin.net/news/cloudflare-announces-private-access-tokens---verification-without-captchas) *(neowin.net · 2022-06-09T17:34:49Z)*

## 📚 Platform Documentation & Specifications

- [Using the Private State Token API](https://developer.mozilla.org/en-US/docs/Web/API/Private_State_Token_API/Using) *(developer.mozilla.org)*
- [MIME type verification](https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides/MIME_types) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 1 result(s) found (query: `""Private Verification Tokens" API"`) — **0 verified relevant**
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 8 result(s) found (query: `"Private Verification Tokens"`) — **1 verified relevant**
- **Hacker News Algolia:** 8 result(s) found (query: `"Private Verification Tokens"`) — **4 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6210457816924160)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6210457816924160)
- [Chromium Tracking Bug](https://crbug.com/500396188)
