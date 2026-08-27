# Private Verification Tokens

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Origin trial

## Overview

Automated traffic is increasing across the web, and many websites have responded with more user friction in the form of CAPTCHAs and other challenges to combat unwanted traffic. This degrades the web user experience for all users, with a particularly outsized impact to users in private browsing modes.

Private Verification Tokens (PVT) is a low entropy mechanism that allows websites to transfer the trust that their users have established in regular browsing into private browsing mode to reduce their experienced user friction. PVTs are issued during a regular browsing session and redeemed in private browsing mode.

### Motivation

Due to the significant increase in automation over the past 1-2 years, driven largely by AI, websites have responded by adding more challenges to determine if clients are likely to be human.  In particular, this has had an outsized impact on users in private browsing mode, who tend to have similar client characteristics as automated clients, such as a cleared local state. We propose providing a very limited signal of user trust transferred from regular browsing into private browsing (one-way only), on a single top level site, with strict privacy properties, a publicly viewable list of registered sites who can use the mechanism, and full user control to disable the feature, to help users in Incognito mode have a more frictionless browsing experience.

## Ecosystem Status

- **Momentum:** High (633 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Private Verification Tokens is currently Origin trial in Chrome 154. Ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- In active Origin Trial. Teams are testing API ergonomics and providing feedback before wide general availability.
- Firefox and Safari have not yet finalized positions. Use defensive feature detection (guarding with `if ("..." in window)`).
- No direct polyfill detected yet; progressive enhancement fallback required for non-supporting browsers.
- Active developer discussion on Hacker News: "Explainer for the Private Verification Tokens" (2 points, 0 comments).

## Community Discussions

- [Explainer for the Private Verification Tokens](https://news.ycombinator.com/item?id=47760044) (2 pts, 0 comments)
- [Cloudflare announces Private Access Tokens – verification without CAPTCHAs](https://news.ycombinator.com/item?id=31684232) (3 pts, 0 comments)
- [Show HN: Agent Passport – OAuth-like identity verification for AI agents](https://news.ycombinator.com/item?id=47096131) (14 pts, 15 comments)
- [Show HN: Google Authenticator Compatible Hardware Token](https://news.ycombinator.com/item?id=8962378) (1 pts, 0 comments)
- [Launch HN: Tinfoil (YC P25): Verifiable Privacy for Cloud AI](https://news.ycombinator.com/item?id=43996555) (146 pts, 100 comments)
- [Show HN: Using LLMs and Embeddings to classify application errors](https://news.ycombinator.com/item?id=37675894) (65 pts, 10 comments)
- [Show HN: Using LLMs and Embeddings to classify application errors](https://news.ycombinator.com/item?id=37393728) (11 pts, 6 comments)
- [Show HN: EmailUSD – a new way to send and receive TRON USDT using email address](https://news.ycombinator.com/item?id=41939857) (5 pts, 0 comments)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6210457816924160)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6210457816924160)
- [Chromium Tracking Bug](https://crbug.com/500396188)
