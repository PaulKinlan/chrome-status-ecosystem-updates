# Email Verification Protocol

> **Report Week:** 2026-W37 | **Milestone:** Chrome 150 | **Category:** Origin trial

## Overview

The EVP (email verification protocol) helps users create, access and recover accounts by providing cryptographic proof of ownership seamlessly rather than email OTPs manually.

### Motivation

Verifying email addresses on the web today involves receiving magic link and proving that you have access to the email inbox.

This is cumbersome for users and inefficient for developers: emails can take a while to arrive, can get into SPAM folders and users have to switch applications to verify them.

## Ecosystem Status

- **Momentum:** High (806 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The Email Verification Protocol (EVP) is currently in an active Chrome Origin Trial (Chrome 150–156), aiming to replace high-friction magic links and one-time codes with browser-mediated, cryptographically signed tokens (SD-JWT+KB) from email identity issuers like Gmail. Cross-engine consensus remains far from established, as the protocol is still being incubated in WICG and the IETF without multi-engine implementation commitments.

### Recommendations
- Actionable Advice: Evaluate EVP solely as an experimental progressive enhancement by joining the Chrome Origin Trial for signup or account recovery flows. Teams must maintain robust traditional fallback mechanisms (magic links or OTPs) because verification will only succeed when users select verified autofill entries in supported Chromium browsers.
- In active Origin Trial in Chrome 150. Validate API ergonomics in staging/pilot environments before general availability.
- Standards Activity (WebKit): Latest discussion from @samuelgoto: "Adding @marcoscaceres and @johnwilander here too as WebKittens that may be relevant to this proposal too!  Just a friendly heads up that chrome intend..."
- Standards Activity (Mozilla): Latest discussion from @samuelgoto: "> I've left an issue on the repo - https://github.com/WICG/email-verification/issues/27.  Thanks for the early review!! I tried to answer your questio..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Email verification protocol" (214 points, 146 comments).

## Standards Positions

- **WebKit:** [Email Verification Protocol](https://github.com/WebKit/standards-positions/issues/578) [open]
- **Mozilla:** [Email Verification Protocol](https://github.com/mozilla/standards-positions/issues/1316) [closed]
- **W3C TAG:** [Incubation: Email Verification Protocol](https://github.com/w3ctag/design-reviews/issues/1169) [closed]
- **W3C TAG:** [Delegation-oriented FedCM](https://github.com/w3ctag/design-reviews/issues/1039) [closed]

## Community Discussions & Social Pulse

- 💬 **Hacker News:** [Email verification protocol](https://news.ycombinator.com/item?id=45782192) — *214 pts, 146 comments*
- 💬 **Hacker News:** [Test the Email Verification Protocol with an origin trial](https://news.ycombinator.com/item?id=49106105) — *4 pts, 0 comments*
- 💬 **Hacker News:** [Email Verification Protocol – Chrome for Developers](https://news.ycombinator.com/item?id=48867249) — *3 pts, 0 comments*
- 💬 **Hacker News:** [Test the Email Verification Protocol with an origin trial](https://news.ycombinator.com/item?id=48844115) — *3 pts, 0 comments*
- 💬 **Hacker News:** [Chrome Intent to Prototype: Email Verification Protocol](https://news.ycombinator.com/item?id=45145855) — *2 pts, 2 comments*
- 💬 **Hacker News:** [Intent to Experiment: Email Verification Protocol](https://news.ycombinator.com/item?id=48338674) — *2 pts, 1 comments*
- 💬 **Hacker News:** [Test the Email Verification Protocol with an origin trial](https://news.ycombinator.com/item?id=49133888) — *2 pts, 0 comments*
- 💬 **Hacker News:** [Intent to Experiment: Email Verification Protocol](https://news.ycombinator.com/item?id=48464137) — *2 pts, 0 comments*
- 🐦 **Twitter / X:** [@bradgessler I think if Email Verification Protocol catches on, it’s gonna be a true Passkey replacement. I hate «magic ](https://twitter.com/Intramin/status/2096278768570585321) — *by @Intramin, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [@neciudan Built a PHP version that verifies Email Verification Protocol tokens (SD-JWT + key binding) issued by provider](https://twitter.com/SaurabhSharma2u/status/2095348320994779214) — *by @SaurabhSharma2u, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [@ChromiumDev Built a PHP library that verifies Email Verification Protocol tokens (SD-JWT + key binding) issued by provi](https://twitter.com/SaurabhSharma2u/status/2095030281082425849) — *by @SaurabhSharma2u, 1 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [That's the hope of the Email Verification Protocol. Learn about how it works here: https://t.co/4Rguz41rq2](https://twitter.com/philnash/status/2094940978885042462) — *by @philnash, 1 likes/RTs, 0 replies*

## Packages & Polyfills

- [email-verification-api](https://www.npmjs.com/package/email-verification-api) `v0.1.0` — Verify Email Verification Protocol EVT+KB tokens
- [@hellocoop/email-verification](https://www.npmjs.com/package/@hellocoop/email-verification) `v3.1.0` — Functions for generating and verifying JWT tokens used in the Email Verification Protocol
- [@aspect-evp/cli](https://www.npmjs.com/package/@aspect-evp/cli) `v0.2.0` — CLI tool for Email Verification Protocol testing and development
- [@aspect-evp/core](https://www.npmjs.com/package/@aspect-evp/core) `v0.2.0` — Shared types and utilities for the Email Verification Protocol

## 📰 Ecosystem Blogs & Articles

- [Email verification protocol](https://github.com/WICG/email-verification-protocol) *(github.com · 2025-11-01T15:04:56Z)*
  > GitHub - WICG/email-verification: verified autofill · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You signed...
- [Test the Email Verification Protocol with an origin trial](https://developer.chrome.com/blog/email-verification-protocol-origin-trial) *(developer.chrome.com · 2026-07-30T04:22:35Z)*
  > Menguji Protokol Verifikasi Email dengan uji coba origin | Blog | Chrome for Developers Langsung ke konten utama / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский ע...
- [Chrome Intent to Prototype: Email Verification Protocol](https://groups.google.com/a/chromium.org/g/blink-dev/c/pWfWupaOtJw/m/MS6uaf_WAAAJ) *(groups.google.com · 2025-09-06T01:49:22Z)*
  > Intent to Prototype: Email Verification Protocol Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Email Verification Protocol 1,01...
- [Intent to Experiment: Email Verification Protocol](https://groups.google.com/a/chromium.org/g/blink-dev/c/Vp1w1u6rYjE) *(groups.google.com · 2026-05-30T17:29:32Z)*
  > Intent to Experiment: Email Verification Protocol Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Email Verification Protocol 86...
- [Intent to Experiment: Email Verification Protocol](https://groups.google.com/a/chromium.org/g/blink-dev/c/Vp1w1u6rYjE?pli=1) *(groups.google.com · 2026-06-09T17:17:15Z)*
  > Intent to Experiment: Email Verification Protocol Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Email Verification Protocol 86...
- [[blink-dev] Re: Intent to Experiment: Email Verification Protocol](http://www.mail-archive.com/blink-dev@chromium.org/msg17212.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Experiment: Email Verification Protocol Skip to site navigation (Press enter) [blink-dev] Re: Intent to Experiment: Email Verification Protocol 'Sam Goto' via blink-dev Tue, 18 Aug 2026 11:56:00 -0700 On Tuesday, May 19, 202...
- [Re: [blink-dev] Re: Intent to Experiment: Email Verification Protocol](http://www.mail-archive.com/blink-dev@chromium.org/msg17334.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Experiment: Email Verification Protocol Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Experiment: Email Verification Protocol Mohamed Amir Yosef Tue, 01 Sep 2026 06:17:35 -0700 Hi all, We are expand...
- [[blink-dev] Intent to Experiment: Email Verification Protocol](http://www.mail-archive.com/blink-dev@chromium.org/msg16564.html) *(mail-archive.com)*
  > [blink-dev] Intent to Experiment: Email Verification Protocol Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: Email Verification Protocol 'Sam Goto' via blink-dev Tue, 19 May 2026 17:02:04 -0700 *Contact emails* [email&#160;pr...
- [[blink-dev] Re: Intent to Experiment: Email Verification Protocol](http://www.mail-archive.com/blink-dev@chromium.org/msg16800.html) *(mail-archive.com)*
  > Explainer: https://github.com/... spec that will handle the protocol aspects (rather than the browser aspects): <strong>https://dickhardt.github.io/email-verification/draft-hardt-email-verification.html</strong> ......
- [Re: [blink-dev] Re: Intent to Experiment: Email Verification Protocol](http://www.mail-archive.com/blink-dev@chromium.org/msg17218.html) *(mail-archive.com)*
  > &gt; &gt; &gt; On Tuesday, May 19, 2026 ... we broke the specification into two parts: &gt; An IETF backend specification here: &gt; <strong>https://dickhardt.github.io/email-verification/draft-hardt-email-verification.html</strong> &gt; And a corres...
- [Email Verification Protocol](https://www.ietf.org/archive/id/draft-hardt-email-verification-00.html) *(ietf.org · 2026-06-17T00:00:00)*
  > This document defines the Email Verification Protocol (EVP), the HTTP-level protocol by which a browser obtains a signed email verification token from an issuer and presents it to a relying party (RP). The protocol enables web applications to verify ...
- [Email Verification API](https://wicg.github.io/email-verification) *(wicg.github.io · 2026-06-17T00:00:00)*
  > <strong>By leveraging an active session between the user and their email provider (the issuer), the browser can request a cryptographically signed Email Verification Token (EVT) and present it to the website (the verifier).</strong>
- [Email verification protocol | Hacker News](https://news.ycombinator.com/item?id=45782192) *(news.ycombinator.com · 2025-11-12T13:23:11)*
  > There is no advantage · So we get a new process that solves nothing, but makes everything complicated. (And complicated helps the big and hurt the little in th long run)
- [draft-hardt-email-verification-02 - Email Verification Protocol](https://datatracker.ietf.org/doc/draft-hardt-email-verification) *(datatracker.ietf.org · 2026-07-07T00:00:00)*
  > TBD D. Hardt Internet-Draft Hellō ... defines the Email Verification Protocol (EVP), <strong>the HTTP-level protocol by which a browser obtains a signed email verification token from an issuer and presents it to a relying party (RP).</strong>...
- [Email Verification Protocol (EVP) draft-hardt-email-verification](https://datatracker.ietf.org/meeting/126/materials/slides-126-dispatch-email-verification-protocol-evp-01) *(datatracker.ietf.org)*
  > What EVP does. Browser <strong>verifies email control cryptographically, with no email sent</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Re: Intent to Experiment: Email Verification Protocol](http://www.mail-archive.com/blink-dev@chromium.org/msg17212.html) *(mail-archive.com)* *(Cites: `https://github.com/samuelgoto/email-verification-protocol`)*
  > [blink-dev] Re: Intent to Experiment: Email Verification Protocol Skip to site navigation (Press enter) [blink-dev] Re: Intent to Experiment: Email Verification Protocol 'Sam Goto' via blink-dev Tue, 18 Aug 2026 11:56:00 -0700 On Tuesday, M...
- [Re: [blink-dev] Re: Intent to Experiment: Email Verification Protocol](http://www.mail-archive.com/blink-dev@chromium.org/msg17334.html) *(mail-archive.com)* *(Cites: `https://github.com/samuelgoto/email-verification-protocol`)*
  > Re: [blink-dev] Re: Intent to Experiment: Email Verification Protocol Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Experiment: Email Verification Protocol Mohamed Amir Yosef Tue, 01 Sep 2026 06:17:35 -0700 Hi all, We ...
- [[blink-dev] Intent to Experiment: Email Verification Protocol](http://www.mail-archive.com/blink-dev@chromium.org/msg16564.html) *(mail-archive.com)* *(Cites: `https://github.com/samuelgoto/email-verification-protocol`)*
  > [blink-dev] Intent to Experiment: Email Verification Protocol Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: Email Verification Protocol 'Sam Goto' via blink-dev Tue, 19 May 2026 17:02:04 -0700 *Contact emails* [ema...
- [[blink-dev] Re: Intent to Experiment: Email Verification Protocol](http://www.mail-archive.com/blink-dev@chromium.org/msg16800.html) *(mail-archive.com)* *(Cites: `https://dickhardt.github.io/email-verification/draft-hardt-email-verification.html`)*
  > Explainer: https://github.com/... spec that will handle the protocol aspects (rather than the browser aspects): <strong>https://dickhardt.github.io/email-verification/draft-hardt-email-verification.html</strong> ......
- [Re: [blink-dev] Re: Intent to Experiment: Email Verification Protocol](http://www.mail-archive.com/blink-dev@chromium.org/msg17218.html) *(mail-archive.com)* *(Cites: `https://dickhardt.github.io/email-verification/draft-hardt-email-verification.html`)*
  > &gt; &gt; &gt; On Tuesday, May 19, 2026 ... we broke the specification into two parts: &gt; An IETF backend specification here: &gt; <strong>https://dickhardt.github.io/email-verification/draft-hardt-email-verification.html</strong> &gt; An...

## 📚 Platform Documentation & Specifications

- [GitHub - WICG/email-verification: verified autofill · GitHub](https://github.com/WICG/email-verification) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 23 result(s) found across 7 planned queries — **11 verified relevant**
  - `"chromestatus.com/feature/5205725253074944" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/samuelgoto/email-verification-protocol" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"dickhardt.github.io/email-verification/draft-hardt-email-verification.html" -site:dickhardt.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Email Verification Protocol" OR "email-verification-protocol" ("Dick Hardt" OR "Samuel Goto") (explainer OR overview OR guide)` — *Finds introductory articles, explainers, and developer overviews breaking down the motivation and architecture of the Email Verification Protocol.* (0 returned)
  - `"Email Verification Protocol" (WebIDL OR "navigator.credentials" OR "email verification" OR cryptographic) (code OR example OR implementation)` — *Discovers technical specifications, draft WebIDL definitions, and proposed client/server implementation code samples.* (8 returned)
  - `"Email Verification Protocol" site:github.com/WICG OR site:github.com/samuelgoto OR site:datatracker.ietf.org OR "draft-hardt-email-verification"` — *Tracks standards body progress, IETF draft submissions, and WICG incubation repo activities and proposals.* (8 returned)
  - `"Email Verification Protocol" ("magic link" OR OTP) ("Hacker News" OR reddit OR "intent to" OR consensus OR security)` — *Captures developer sentiment, security critiques, and ecosystem discussions regarding replacing email OTPs and magic links with cryptographic proofs.* (0 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 4 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 8 result(s) found — **8 verified relevant**
- **Standards Positions:** 4 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **4 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 12 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5205725253074944)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5205725253074944)
- [Specification](https://dickhardt.github.io/email-verification/draft-hardt-email-verification.html)
