# Private Verification Tokens

> **Report Week:** 2026-W36 | **Milestone:** Chrome 154 | **Category:** Origin trial

## Overview

Automated traffic is increasing across the web, and many websites have responded with more user friction in the form of CAPTCHAs and other challenges to combat unwanted traffic. This degrades the web user experience for all users, with a particularly outsized impact to users in private browsing modes.

Private Verification Tokens (PVT) is a low entropy mechanism that allows websites to transfer the trust that their users have established in regular browsing into private browsing mode to reduce their experienced user friction. PVTs are issued during a regular browsing session and redeemed in private browsing mode.

### Motivation

Due to the significant increase in automation over the past 1-2 years, driven largely by AI, websites have responded by adding more challenges to determine if clients are likely to be human.  In particular, this has had an outsized impact on users in private browsing mode, who tend to have similar client characteristics as automated clients, such as a cleared local state. We propose providing a very limited signal of user trust transferred from regular browsing into private browsing (one-way only), on a single top level site, with strict privacy properties, a publicly viewable list of registered sites who can use the mechanism, and full user control to disable the feature, to help users in Incognito mode have a more frictionless browsing experience.

## Ecosystem Status

- **Momentum:** High (220 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Private Verification Tokens is currently Origin trial in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- In active Origin Trial in Chrome 154. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Explainer for the Private Verification Tokens" (2 points, 0 comments).

## Community Discussions & Social Pulse

- 💬 **Hacker News:** [Explainer for the Private Verification Tokens](https://news.ycombinator.com/item?id=47760044) — *2 pts, 0 comments*
- 💬 **Hacker News:** [Cloudflare announces Private Access Tokens – verification without CAPTCHAs](https://news.ycombinator.com/item?id=31684232) — *3 pts, 0 comments*
- 💬 **Hacker News:** [Show HN: Agent Passport – OAuth-like identity verification for AI agents](https://news.ycombinator.com/item?id=47096131) — *14 pts, 15 comments*
- 💬 **Hacker News:** [Show HN: Google Authenticator Compatible Hardware Token](https://news.ycombinator.com/item?id=8962378) — *1 pts, 0 comments*

## 📰 Ecosystem Blogs & Articles

- [Cloudflare announces Private Access Tokens – verification without CAPTCHAs](https://www.neowin.net/news/cloudflare-announces-private-access-tokens---verification-without-captchas) *(neowin.net · 2022-06-09T17:34:49Z)*
- [Re: [blink-dev] Intent to Experiment: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg17231.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Experiment: Private Verification Tokens Skip to site navigation (Press enter) Re: [blink-dev] Intent to Experiment: Private Verification Tokens Alex Russell Wed, 19 Aug 2026 08:35:03 -0700 Because it was raised in API OWNERS...
- [[blink-dev] Intent to Experiment: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg17179.html) *(mail-archive.com)*
  > [blink-dev] Intent to Experiment: Private Verification Tokens Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: Private Verification Tokens Chromestatus Fri, 14 Aug 2026 13:41:33 -0700 Contact emails [email&#160;protected] , [em...
- [[blink-dev] Intent to Prototype: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg16306.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Private Verification Tokens Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Private Verification Tokens Chromestatus Thu, 09 Apr 2026 13:02:30 -0700 Contact emails [email&#160;protected] , [emai...
- [Re: [blink-dev] Intent to Experiment: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg17207.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Experiment: Private Verification Tokens Skip to site navigation (Press enter) Re: [blink-dev] Intent to Experiment: Private Verification Tokens Yoav Weiss (@Shopify) Tue, 18 Aug 2026 06:20:39 -0700 The explainer states "Top-...
- [Private State Token API](https://wicg.github.io/trust-token-api) *(wicg.github.io · 2024-07-18T00:00:00)*
  > Private State Token API Private State Token API Draft Community Group Report , 18 July 2024 This version: https://wicg.github.io/trust-token-api/ Issue Tracking: GitHub Editors: Aykut Bulut ( Google ) Steven Valdez ( Google ) Participate: GitHub WICG...
- [Web Cryptography API Level 2](https://w3c.github.io/webcrypto) *(w3c.github.io · 2026-08-10T22:30:04)*
  > This specification <strong>describes a JavaScript API for performing basic cryptographic operations in web applications, such as hashing, signature generation and verification, and encryption and decryption</strong>. Additionally, it describes an API...
- [Authentication Tokens and JWT: Secure Web App Authentication | JSGuides](https://jsguides.dev/tutorials/web-security/security-auth-tokens) *(jsguides.dev · 2026-06-02T00:03:32)*
  > The header <strong>declares which signing algorithm was used and confirms that this is a JWT</strong>. You will see HS256 (symmetric, single secret key) or RS256 (asymmetric, public/private key pair) most often.
- [Private Access Tokens, also not great](https://educatedguesswork.org/posts/private-access-tokens) *(educatedguesswork.org · 2023-08-29T00:00:00)*
  > This is especially true if you are also browsing with settings that reduce the effectiveness of cookies, for instance if you are using Tor Browser or any regular browser in Private Browsing Mode/Incognito mode because it also prevents the site from b...
- [CAPTCHA Not Working? 12 Proven Fixes to Solve Verification Errors (2025) | rCAPTCHA Blog](https://blog.rcaptcha.app/articles/captcha-not-working-12-proven-fixes) *(blog.rcaptcha.app · 2025-12-02T00:00:00)*
  > Extensions like uBlock Origin, Privacy Badger, and NoScript can block the external requests that CAPTCHA systems use to verify responses. Many extensions use JavaScript to modify web pages, which can alter or completely disable scripts essential for ...
- [How to bypass CAPTCHA when managing multiple accounts](https://hidemyacc.com/how-to-bypass-captcha-effectively) *(hidemyacc.com · 2026-08-02T03:01:42)*
  > After solving it, a new CAPTCHA appears minutes later, or access gets blocked completely. The issue usually stems from hidden signals that cause the system to flag your session. This article explains how datadome captcha works, why you constantly fac...
- [How to Avoid ChatGPT Captcha Loops and Bypass Verification Online in 2025](https://dicloak.com/blog-detail/how-to-avoid-chatgpt-captcha-loops-and-bypass-verification-online-in-2025) *(dicloak.com · 2025-03-04T02:00:00)*
  > The fastest way to break out of a CAPTCHA loop is to <strong>open ChatGPT in an incognito or private browsing window</strong>.
- [Intent to Ship: Private State Tokens API](https://groups.google.com/a/chromium.org/g/blink-dev/c/vKCYxKqw8k0/m/ohKLGrM5AQAJ) *(groups.google.com)*
  > While we will have a standard deprecation path of supporting multiple versions, we expect this to be easier with this API as each issuer using this API will need to register to become an issuer and will provide contact information as part of that pro...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: [blink-dev] Intent to Experiment: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg17231.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6210457816924160`)*
  > Re: [blink-dev] Intent to Experiment: Private Verification Tokens Skip to site navigation (Press enter) Re: [blink-dev] Intent to Experiment: Private Verification Tokens Alex Russell Wed, 19 Aug 2026 08:35:03 -0700 Because it was raised in ...
- [[blink-dev] Intent to Experiment: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg17179.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6210457816924160`)*
  > [blink-dev] Intent to Experiment: Private Verification Tokens Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: Private Verification Tokens Chromestatus Fri, 14 Aug 2026 13:41:33 -0700 Contact emails [email&#160;protec...
- [[blink-dev] Intent to Prototype: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg16306.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/private-verification-tokens`)*
  > [blink-dev] Intent to Prototype: Private Verification Tokens Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Private Verification Tokens Chromestatus Thu, 09 Apr 2026 13:02:30 -0700 Contact emails [email&#160;protecte...
- [Re: [blink-dev] Intent to Experiment: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg17207.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/private-verification-tokens`)*
  > Re: [blink-dev] Intent to Experiment: Private Verification Tokens Skip to site navigation (Press enter) Re: [blink-dev] Intent to Experiment: Private Verification Tokens Yoav Weiss (@Shopify) Tue, 18 Aug 2026 06:20:39 -0700 The explainer st...

## 📚 Platform Documentation & Specifications

- [Private State Tokens (formerly Trust Tokens) · Issue #780 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/780) *(github.com)*
- [Private Access Tokens · Issue #954 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/954) *(github.com)*
- [MIME type verification](https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides/MIME_types) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 27 result(s) found across 6 planned queries — **14 verified relevant**
  - `"chromestatus.com/feature/6210457816924160" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/explainers-by-googlers/private-verification-tokens" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"Private Verification Tokens" ("hasPrivateVerificationToken" OR "Sec-Private-Verification-Token" OR WebIDL OR JavaScript OR header)` — *Searches for developer implementation details, proposed HTTP headers, WebIDL definitions, and JavaScript API interfaces.* (8 returned)
  - `"Private Verification Tokens" ("incognito" OR "private browsing") (CAPTCHA OR bot OR guide OR explainer)` — *Finds technical overviews, explainer deep-dives, and blog posts detailing how the feature mitigates CAPTCHAs across browsing modes.* (8 returned)
  - `"Private Verification Tokens" (Chrome OR WebKit OR Mozilla OR "standards-positions" OR WICG)` — *Locates browser vendor evaluation, standards body discussions (WICG), and multi-engine support sentiment.* (8 returned)
  - `"Private Verification Tokens" ("Hacker News" OR reddit OR "tracking" OR "privacy risk" OR fingerprinting)` — *Uncovers community reactions and privacy debates regarding linking signals between regular and private browsing sessions.* (0 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 8 result(s) found — **13 verified relevant**
- **Hacker News Algolia:** 8 result(s) found — **4 verified relevant**
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
