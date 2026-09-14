# Digital Credentials API (issuance support)

> **Report Week:** 2026-W38 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

This Web Platform feature enables issuing websites (e.g., a university, government agency, or bank) to securely initiate the provisioning (issuance) process of digital credentials directly into a user's mobile wallet application. On Android, this capability leverages the Android IdentityCredential CredMan system (Credential Manager). On Desktop, it leverages cross-device approaches using the CTAP protocol similar to Digital Credentials presentation.

### Motivation

Without this, websites and wallets can only communicate in ways that are more opaque to the browser and OS.

## Ecosystem Status

- **Momentum:** High (356 points)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Digital Credentials API (issuance support) is currently Enabled by default in Chrome 155. Verified ecosystem momentum is High with Contested / Concerns Raised standards alignment and mixed / skeptical developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @marcoscaceres: "Update on Venue: https://github.com/w3c/strategy/issues/450  We also made strides on the OpenID / request format...."
- Standards Activity (Mozilla): Latest discussion from @RByers: "Hey Mozilla folks, is there anything you can share here about your position on the use of custom schemes like openid4vp://? Today Firefox allows infor..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Show HN: ID Token++ issue Verifiable Credentials using OIDC infra" (4 points, 0 comments).

## Standards Positions

- **WebKit:** [Digital Credentials API](https://github.com/WebKit/standards-positions/issues/332) [closed]
- **Mozilla:** [Digital Credentials](https://github.com/mozilla/standards-positions/issues/1003) [closed]

## Community Discussions & Social Pulse

- 💬 **Hacker News:** [Show HN: ID Token++ issue Verifiable Credentials using OIDC infra](https://news.ycombinator.com/item?id=42784905) — *4 pts, 0 comments*

## 📰 Ecosystem Blogs & Articles

- [Show HN: ID Token++ issue Verifiable Credentials using OIDC infra](https://test-api.mynext.id/idt/v2) *(test-api.mynext.id · 2025-01-21T20:35:34Z)*
  > ID Token++ (IDT++), a profile designed for IDT so that they can be issued through OIDC Authorization Servers and having support for cryptographic binding to digital wallets, selective disclosure, and identification of issuers using WebPKI. With the I...
- [Intent to Experiment: Digital Credentials API (issuance support)](https://groups.google.com/a/chromium.org/g/blink-dev/c/Gy-NvwoSODo/m/UYrJvdQ1BwAJ) *(groups.google.com)*
  > Intent to Experiment: Digital Credentials API (issuance support) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Digital Credent...
- [Intent to Extend Experiment: Digital Credential API](https://groups.google.com/a/chromium.org/g/blink-dev/c/Vj2tr_cAClk/m/H4JztjhoAgAJ) *(groups.google.com)*
  > Intent to Extend Experiment: Digital Credential API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Extend Experiment: Digital Credential AP...
- [\[blink-dev\] Intent to Extend Experiment: Digital Credential API](https://www.mail-archive.com/blink-dev@chromium.org/msg14188.html) *(mail-archive.com)*
  > [blink-dev] Intent to Extend Experiment: Digital Credential API Skip to site navigation (Press enter) [blink-dev] Intent to Extend Experiment: Digital Credential API Chromestatus Tue, 15 Jul 2025 10:44:51 -0700 Contact emails [email&#160;protected] ,...
- [\[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14755.html) *(mail-archive.com)*
  > [blink-dev] Intent to Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: Digital Credentials API (issuance support) Chromestatus Mon, 13 Oct 2025 10:08:35 -0700 Contact email...
- [Re: \[blink-dev\] Intent to Extend Experiment: Digital Credential API](https://www.mail-archive.com/blink-dev@chromium.org/msg14205.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Extend Experiment: Digital Credential API Skip to site navigation (Press enter) Re: [blink-dev] Intent to Extend Experiment: Digital Credential API Mohamed Amir Yosef Wed, 16 Jul 2025 08:31:45 -0700 Thanks Alex! Could you pl...
- [\[blink-dev\] Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17272.html) *(mail-archive.com)*
  > [blink-dev] Intent to Extend Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) [blink-dev] Intent to Extend Experiment: Digital Credentials API (issuance support) Chromestatus Mon, 24 Aug 2026 11:48:51 -0700...
- [\[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg16188.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) [blink-dev] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Vladimir Levin Wed, 25 Mar 2026 08:2...
- [Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17416.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; Rick &gt;&gt;&gt; &gt;&gt;&gt; On Wed, Sep 2, 2026 at 12:41 PM Chromestatus &lt; &gt;&gt;&gt; [email protected]&gt; wrote: &gt;&gt;&gt; &gt;&gt;&gt;&gt; *Contact emails* &gt;&gt;&gt;&gt; [email protected], [email protected],...
- [Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API I (presentation support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14469.html) *(mail-archive.com · 2025-08-25T00:00:00)*
  > &gt;&gt;&gt; &gt;&gt;&gt; &gt;&gt;&gt; &gt;&gt;&gt; Thanks, &gt;&gt;&gt; Dan &gt;&gt;&gt; On Monday, August 11, 2025 at 2:32:19 PM UTC-7 rby...@chromium.org &gt;&gt;&gt; wrote: &gt;&gt;&gt; &gt;&gt;&gt; [API owner hat off since I work on this API] &g...
- [Digital Credentials API (2026): Chrome, Safari & Firefox](https://www.corbado.com/blog/digital-credentials-api) *(corbado.com · 2026-08-14T06:00:46)*
  > As the crucial component at the ... API is <strong>a web standard currently being developed to provide a secure and standardized way for websites to request and receive digital identity information from users&#x27; digital wallets</strong>...
- [Digital Credentials API (issuance support)](https://cr-status.appspot.com/feature/5099333963874304?gate=5199087129460736) *(cr-status.appspot.com)*
  > Sign in with GoogleSign in with Google. Opens in new tab
- [Digital Credentials API (issuance support) - Chrome Platform Status](https://cr-status.appspot.com/feature/5099333963874304) *(cr-status.appspot.com)*
  > Sign in with GoogleSign in with Google. Opens in new tab
- [What is the Digital Credentials API? The Developer's Guide (2026)](https://docs.walt.id/concepts/data-exchange-protocols/dc-api) *(docs.walt.id)*
  > Formally, the W3C Digital Credentials API is a JavaScript API that enables user agents (browsers) to mediate presentation and issuance of digital credentials (such as mobile IDs, mDLs, or verifiable credentials). It: Builds on Credential Management L...
- [Online Identity Verification with the Digital Credentials API \| WebKit](https://webkit.org/blog/17431/online-identity-verification-with-the-digital-credentials-api) *(webkit.org · 2025-10-28T15:28:09)*
  > If you’re building an app that provides digital identity documents like a government licensing authority app or digital identity documents provider, you can integrate your app with Identity Document Services. This framework enables the presentment of...
- [How to build a Digital Credential Verifier (Developer’s Guide)](https://www.corbado.com/blog/how-to-build-verifiable-credential-verifier) *(corbado.com · 2025-07-31T09:34:31)*
  > Note: The concept of Verifiable Presentations as defined in the W3C VC ecosystem is out of scope for this blog post. The term Verifiable Presentation here refers to the OpenID4VP vp_token response, which behaves similarly to a W3C VP but is based on ...
- [How to integrate Digital Credentials into your App](https://www.digital-credentials.io/developer) *(digital-credentials.io)*
  > Guides, tools, and resources for developers to integrate digital credentials into apps and websites.
- [Issue digital credentials \| Identity \| Android Developers](https://developer.android.com/identity/digital-credentials/credential-issuer/issue-credentials) *(developer.android.com · 2026-05-12T00:00:00)*
  > The Credential Manager API lets you issue credentials to Android holder (also called &quot;wallet&quot;) apps. <strong>This guide explains how to save credentials to a user&#x27;s preferred holder</strong>.
- [javascript - Cross-device CSS problems - Stack Overflow](https://stackoverflow.com/questions/14572499/cross-device-css-problems) *(stackoverflow.com)*
  > So either you detect mobile with javascript in order to add the correct event Detecting a mobile browser (detect mobile) jQuery mobile (click event) (appropriate event) Or you <strong>change the toggle class for &quot;addClass&quot; and &quot;removeC...
- [A non-responsive approach to building cross-device webapps \| Articles \| web.dev](https://web.dev/mobile-cross-device) *(web.dev · 2012-04-28T00:00:00)*
  > This sort of structure enables you to fully control what assets each version loads, since you have custom HTML, CSS and JavaScript for each device. This is very powerful, and can lead to the leanest, most performant way of developing for the cross-de...
- [The Ultimate Guide to Cross-Browser and Cross-Device Compatibility in Web Development \| by codeAbit \| Medium](https://medium.com/@codeAbit/the-ultimate-guide-to-cross-browser-and-cross-device-compatibility-in-web-development-053f95109acd) *(medium.com · 2024-11-21T09:57:08)*
  > Use Valid HTML and CSS: Write clean and standards-compliant HTML5 and CSS3. Validation tools like the W3C Validator can identify errors and ensure your website adheres to industry norms. Implement Progressive Enhancement: Start with a functional core...
- [How to perform Cross Device Testing \| BrowserStack](https://www.browserstack.com/guide/how-to-perform-cross-device-testing) *(browserstack.com · 2026-06-18T07:11:05)*
  > Chrome uses Blink, Firefox uses Gecko, and Safari uses Webkit. By performing cross-device testing, testers should verify that functionality and user experience remains the same though UI might differ in some cases. There are numerous combinations of ...
- [Cross-Device Development with Web Standards](https://girliemac.com/presentation-slides/html5-mobile-approach/rwd.html) *(girliemac.com)*
  > @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) { /* Styles */ }... CSS3, Hell Yeah!
- [Responsive Design 2.0–Advanced CSS and JavaScript Techniques from Cross-Device Compatibility \| Springer Nature Link](https://link.springer.com/chapter/10.1007/978-3-032-19681-1_26) *(link.springer.com)*
  > The rapid growth of mobile and multi-device usage has made cross-device compatibility a crucial challenge in web development. Traditional responsive design, relying mainly on media queries and fluid grids, often falls short when adapting to diverse d...
- [\[blink-dev\] Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17347.html) *(mail-archive.com)*
  > Gecko: Negative (https://github.com/mozilla/standards-positions/issues/1003) WebKit: Support (https://github.com/WebKit/standards-positions/issues/332) Presentation support is shipped, but timeline for adding issuance support yet. Web developers: No ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Experiment: Digital Credentials API (issuance support)](https://groups.google.com/a/chromium.org/g/blink-dev/c/Gy-NvwoSODo/m/UYrJvdQ1BwAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > Intent to Experiment: Digital Credentials API (issuance support) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Digit...
- [Intent to Extend Experiment: Digital Credential API](https://groups.google.com/a/chromium.org/g/blink-dev/c/Vj2tr_cAClk/m/H4JztjhoAgAJ) *(groups.google.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > Intent to Extend Experiment: Digital Credential API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Extend Experiment: Digital Cre...
- [\[blink-dev\] Intent to Extend Experiment: Digital Credential API](https://www.mail-archive.com/blink-dev@chromium.org/msg14188.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > [blink-dev] Intent to Extend Experiment: Digital Credential API Skip to site navigation (Press enter) [blink-dev] Intent to Extend Experiment: Digital Credential API Chromestatus Tue, 15 Jul 2025 10:44:51 -0700 Contact emails [email&#160;pr...
- [\[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14755.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > [blink-dev] Intent to Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: Digital Credentials API (issuance support) Chromestatus Mon, 13 Oct 2025 10:08:35 -0700 Con...
- [Re: \[blink-dev\] Intent to Extend Experiment: Digital Credential API](https://www.mail-archive.com/blink-dev@chromium.org/msg14205.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > Re: [blink-dev] Intent to Extend Experiment: Digital Credential API Skip to site navigation (Press enter) Re: [blink-dev] Intent to Extend Experiment: Digital Credential API Mohamed Amir Yosef Wed, 16 Jul 2025 08:31:45 -0700 Thanks Alex! Co...
- [\[blink-dev\] Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17272.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > [blink-dev] Intent to Extend Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) [blink-dev] Intent to Extend Experiment: Digital Credentials API (issuance support) Chromestatus Mon, 24 Aug 2026 11:4...
- [\[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg16188.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > [blink-dev] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) [blink-dev] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Vladimir Levin Wed, 25 Mar...
- [Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17416.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > &gt;&gt;&gt; &gt;&gt;&gt; Rick &gt;&gt;&gt; &gt;&gt;&gt; On Wed, Sep 2, 2026 at 12:41 PM Chromestatus &lt; &gt;&gt;&gt; [email protected]&gt; wrote: &gt;&gt;&gt; &gt;&gt;&gt;&gt; *Contact emails* &gt;&gt;&gt;&gt; [email protected], [email p...
- [Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API I (presentation support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14469.html) *(mail-archive.com · 2025-08-25T00:00:00)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > &gt;&gt;&gt; &gt;&gt;&gt; &gt;&gt;&gt; &gt;&gt;&gt; Thanks, &gt;&gt;&gt; Dan &gt;&gt;&gt; On Monday, August 11, 2025 at 2:32:19 PM UTC-7 rby...@chromium.org &gt;&gt;&gt; wrote: &gt;&gt;&gt; &gt;&gt;&gt; [API owner hat off since I work on th...
- [digital-credentials/index.html at main · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/blob/main/index.html) *(github.com)* *(Cites: `https://w3c-fedid.github.io/digital-credentials`)*
  > shortName: &quot;digital-credentials&quot;,       specStatus: &quot;ED&quot;,       edDraftURI: &quot;https://<strong>w3c-fedid.github.io/digital-credentials</strong>/&quot;,       group: &quot;fedid&quot;,       github: &quot;https://githu...
- [Digital Credentials](https://www.w3.org/TR/digital-credentials) *(w3.org · 2026-08-21T00:00:00)* *(Cites: `https://w3c-fedid.github.io/digital-credentials`)*
  > https://<strong>w3c-fedid.github.io/digital-credentials</strong>/ History: https://www.w3.org/standards/history/digital-credentials/ Commit history · Editors: Marcos Caceres (Apple Inc.) Tim Cappalli (Okta) Mohamed Amir Yosef (Google Inc.) ...
- [Digital Credentials API (2026): Chrome, Safari & Firefox](https://www.corbado.com/blog/digital-credentials-api) *(corbado.com · 2026-08-14T06:00:46)* *(Cites: `https://w3c-fedid.github.io/digital-credentials`)*
  > As the crucial component at the ... API is <strong>a web standard currently being developed to provide a secure and standardized way for websites to request and receive digital identity information from users&#x27; digital wallets</strong>....
- [eudi-doc-architecture-and-reference-framework/docs/discussion-topics/f-digital-credential-api.md at main · eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework](https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework/blob/main/docs/discussion-topics/f-digital-credential-api.md) *(github.com)* *(Cites: `https://w3c-fedid.github.io/digital-credentials`)*
  > Digital Credentials, Draft Community Group Report, 20 February 2025, available at https://<strong>w3c-fedid.github.io/digital-credentials</strong>/

## 📚 Platform Documentation & Specifications

- [digital-credentials/index.html at main · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/blob/main/index.html) *(github.com)*
- [Digital Credentials](https://www.w3.org/TR/digital-credentials) *(w3.org)*
- [eudi-doc-architecture-and-reference-framework/docs/discussion-topics/f-digital-credential-api.md at main · eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework](https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework/blob/main/docs/discussion-topics/f-digital-credential-api.md) *(github.com)*
- [digital-credentials/explainer.md at main · w3c-fedid/digital-credentials](https://github.com/WICG/digital-credentials/blob/main/explainer.md) *(github.com)*
- [cross-device · GitHub Topics · GitHub](https://github.com/topics/cross-device) *(github.com)*
- [W3C Digital Credentials API publication: the next step to privacy-preserving identities on the web \| 2025 \| Blog \| W3C](https://www.w3.org/blog/2025/w3c-digital-credentials-api-publication-the-next-step-to-privacy-preserving-identities-on-the-web) *(w3.org)*
- [Digital Credentials & Payments Tim Cappalli & Ian Jacobs TPAC 2024](https://www.w3.org/2024/Talks/TPAC/digital-credentials-payments-20240923.pdf) *(w3.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 41 result(s) found across 8 planned queries — **31 verified relevant**
  - `"chromestatus.com/feature/5099333963874304" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/w3c-fedid/digital-credentials/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"w3c-fedid.github.io/digital-credentials" -site:w3c-fedid.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"Digital Credentials API (issuance support)" API` — *Core feature API query* (2 returned)
  - `"Digital Credentials API (issuance support)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"cross-device" OR "(issuance" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Digital Credentials API (issuance support)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Digital Credentials API (issuance support)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (3 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 1 result(s) found — **1 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 28 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 10 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5099333963874304)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5099333963874304)
- [Specification](https://w3c-fedid.github.io/digital-credentials)
- [Chromium Tracking Bug](https://crbug.com/378330032)
