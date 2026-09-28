# Digital Credentials API (issuance support)

> **Report Week:** 2026-W40 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

This Web Platform feature enables issuing websites (e.g., a university, government agency, or bank) to securely initiate the provisioning (issuance) process of digital credentials directly into a user's mobile wallet application. On Android, this capability leverages the Android IdentityCredential CredMan system (Credential Manager). On Desktop, it leverages cross-device approaches using the CTAP protocol similar to Digital Credentials presentation.

### Motivation

Without this, websites and wallets can only communicate in ways that are more opaque to the browser and OS.

## Ecosystem Status

- **Momentum:** High (631 points)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** The Digital Credentials API (issuance support) standardizes web-based push provisioning by allowing issuers—such as banks, universities, and government agencies—to pass verifiable credentials directly into platform wallets via \`navigator.credentials.create()\` using protocols like OpenID4VCI. Chromium leads implementation by integrating with Android Credential Manager and cross-device desktop CTAP flows, but broader multi-engine consensus remains split. While WebKit has shipped presentation features in Safari, it has not committed to the issuance lifecycle, and Mozilla maintains an officially negative stance over privacy, user coercion, and identity ecosystem risks.

### Recommendations
- Actionable Advice: Implement browser-mediated issuance strictly through progressive enhancement for compatible Chromium clients while preserving fallback deep-linking or custom URI flows. Issuers handling high-assurance identities should also verify that their OpenID4VCI token exchanges mitigate pre-authorization code interception before full production rollouts.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @RByers: "Hey Mozilla folks, is there anything you can share here about your position on the use of custom schemes like openid4vp://? Today Firefox allows infor..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Show HN: ID Token++ issue Verifiable Credentials using OIDC infra" (4 points, 0 comments).

## Standards Positions

- **Mozilla:** [Digital Credentials](https://github.com/mozilla/standards-positions/issues/1003) [closed]

## Community Discussions & Social Pulse

- 💬 **Hacker News:** [Show HN: ID Token++ issue Verifiable Credentials using OIDC infra](https://news.ycombinator.com/item?id=42784905) — *4 pts, 0 comments*

## 📰 Ecosystem Blogs & Articles

- [Show HN: ID Token++ issue Verifiable Credentials using OIDC infra](https://test-api.mynext.id/idt/v2) *(test-api.mynext.id · 2025-01-21T20:35:34Z)*
  > IDT++ You need to enable JavaScript to run this app.
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFPYl_-k7yncRSsrid87_fju9uiQoM__bFpVTmjtohLzZ_SQ1vZtq98cUK3SN2veG8NVQPMjsf_dud_jGDzfw2dDjjc9TLR0_fsOFcqbgWz0ZpS05ujQvJphppVj_7kNg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary: Digital Credentials API (Issuance Support)  The **Digital Credentials API (issuance support)** extends the W3C Credential Management standard by bringing credential provisioning directly to the open web. While the initial release focused
- [vidos.id](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHXXVrpFceDjutc8I0pWwaGsHa3qUi4Ec1UQMS1STqt81Lg9llKUvdoBz8MydUcI7QOk68ucE_hr8rYXO8lZPIBCwmrRkGZ4D1KucTzliTNQ2rKFm4vtBfJSOnBZAc5dRaJMbZEwJ3az5YVtTBeqdNIUJzhf3RAG92XyQ==) *(vertexaisearch.cloud.google.com)*
  > Digital Credentials API | Vidos Skip to content Vidos Explanations References Tutorials Guides Search Ctrl K Cancel Home Support Vidos Dashboard Select theme Dark Light Auto Ask ChatGPT View Markdown Digital Credentials API What is the Digital Creden...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFFIHsy9jy0MdvLsiw8vmtL833Kpah0MvySt9Ar1zoPsuM8xsNyfX_D2lF-ss9gqEtQQe_lAglEDV57_P2wPEFz9OcT1rqa7Dd6-XLv0SAOMeJUTuRgiyZM8iVkdlF70JgCjRMeEqc30EXzzC9_fFvuC0QWkSDcqGD33OdfeAw=) *(vertexaisearch.cloud.google.com)*
  > API Digital Credentials pour l&apos;émission d&apos;identifiants | Blog | Chrome for Developers Passer au contenu principal / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkç...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEz32KsBtemBs9bSlm8mzKxWWzfrQ1god3__3QmX26O_GD1KUKN16zykE-tH9WXSMsBUeNHi_gpA34IG6t6RSXsyZu2iEIVlqLO1ZDJNuKoznEkSsQAYgd_ouVBpPve33eiZ3a4OSGMPKQ8xhtSzxjToR7F_MK_) *(vertexaisearch.cloud.google.com)*
  > Digital Credentials API: Secure and private identity on the web | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русски...
- [android.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEM8MOzdPys7PPYUx6ZqaakTo7xn66Feq0tB7pDWY8YavoUhv4LlKheJJelNDqQlPAfWLhCeNFuCXmdAN2GuSuI5GBTBgwFKBD5SjpcJO0mYzu_fMNi9iyGgbQLrhoybMv0cyD15kl7jhdO6XUWroI=) *(vertexaisearch.cloud.google.com)*
  > ### Summary: Digital Credentials API (Issuance Support)  The **Digital Credentials API (issuance support)** extends the W3C Credential Management standard by bringing credential provisioning directly to the open web. While the initial release focused
- [digitalcredentials.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGMxkNCTcUfAUnj68h6N_TZ1cLnrLWThf3wec7PxeL6PJz47dJfQ0z61VKPi3xRaRd3kMeuMYHgpX-2317wzxwlVjRiWFbfa8xr8daliCOGGn6J25SPh-7nLZiZZ4fd_f9Zlhnh5tOFVVoK2Q==) *(vertexaisearch.cloud.google.com)*
  > Entities and Layering | Digital Credentials Developer Skip to main content Entities and Layering This page focuses on the relationship and layers between entities and components which directly relate to the Digital Credentials API: presentation and i...
- [youtube.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGKhvvbHXOUMKPbwA-_wnG1mxawu8vKw0BseaCdEdg0EC_GLhXd2F9kqrT3Z3sDH6HOcKikzRO6sE3j6rXuZVqlWthgJtNMPxBbueiITPq-R8w61mg5p9K-Y-7lRRuugDs=) *(vertexaisearch.cloud.google.com)*
  > - YouTube About Press Copyright Contact us Creators Advertise Developers Terms Privacy Policy & Safety How YouTube works Test new features NFL Sunday Ticket &copy; 2026 Google LLC
- [youtube.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF6QokhLm6NpNrw6pSZI-2UErMze55xePtOVyKTX4frlqV5MxyYHS_S-MbyorLrMwFT7gg3t5TZhmnsxDdfntdghOVVi0snr-ebGGY7OSs5XbuFh9I8v_lm0m3xyufQnT4=) *(vertexaisearch.cloud.google.com)*
  > ### Summary: Digital Credentials API (Issuance Support)  The **Digital Credentials API (issuance support)** extends the W3C Credential Management standard by bringing credential provisioning directly to the open web. While the initial release focused
- [android.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGqBQWLtVzH7jvA3GgPdYAsbfxQYVUks-IGBlIM0PjK8M6noHQPsZjVYppk8-2fpnKUW0gMR7UHGH4CSumkukKLOI2Mw32fVilCBv3KHwTIESHgadVbJMMNl3j0PEU0rGvFhFTnNkd-uoAZFmIumVcV3VMbvsGD_b7fzDMJbht-7muUJidseafTUUAWsPzPHalMNLY=) *(vertexaisearch.cloud.google.com)*
  > ### Summary: Digital Credentials API (Issuance Support)  The **Digital Credentials API (issuance support)** extends the W3C Credential Management standard by bringing credential provisioning directly to the open web. While the initial release focused
- [digitalcredentials.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHsisP7mpjy7q0pl4ZrY3GBXn0iRNQKhUrE3RYtW5vYl-LRGdbRbdNYLMS8jMDd6LFM4ee61IASKXuouHIkGmxpY151hPneGoK4yrtvqEhlhDINfN4=) *(vertexaisearch.cloud.google.com)*
  > ### Summary: Digital Credentials API (Issuance Support)  The **Digital Credentials API (issuance support)** extends the W3C Credential Management standard by bringing credential provisioning directly to the open web. While the initial release focused
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGpd1iAhEBdvA7gn3O8k7RIowpSnWh6XDZRUbcFcLaVcWz0mvkukW23U5MLfjcpqoxFMTLSkSYQ4VWyqpZYvKAUcboUogI3bAoFubOAdI2S9s7ELRK5uqYJqZFbVwg0ZZCK6v20-Q==) *(vertexaisearch.cloud.google.com)*
  > ### Summary: Digital Credentials API (Issuance Support)  The **Digital Credentials API (issuance support)** extends the W3C Credential Management standard by bringing credential provisioning directly to the open web. While the initial release focused
- [corbado.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEZNTG6y0YZOyd8s5GLEJBShzPJK0w4HHu1mLEMR88eTr4FvOWOWfEXGLa8bFfAXJXFnEztbvgAnvQYVqWZpb3ySKyv7W7uw7aoOxuxWqsjqrARmzCoE5QUrS5vb_KbPeHUVvP3XNfvR4Q=) *(vertexaisearch.cloud.google.com)*
  > ### Summary: Digital Credentials API (Issuance Support)  The **Digital Credentials API (issuance support)** extends the W3C Credential Management standard by bringing credential provisioning directly to the open web. While the initial release focused
- [Intent to Experiment: Digital Credentials API (issuance support)](https://groups.google.com/a/chromium.org/g/blink-dev/c/Gy-NvwoSODo/m/UYrJvdQ1BwAJ) *(groups.google.com)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5099333963874304</strong>?gate=5124632629870592
- [Intent to Extend Experiment: Digital Credential API](https://groups.google.com/a/chromium.org/g/blink-dev/c/Vj2tr_cAClk/m/H4JztjhoAgAJ) *(groups.google.com)*
  > https://<strong>github.com/w3c-fedid/digital-credentials/blob/main/explainer.md</strong>
- [\[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14755.html) *(mail-archive.com)*
  > Explainer https://<strong>github.com/w3c-fedid/digital-credentials/blob/main/explainer.md</strong> Specification https://w3c-fedid.github.io/digital-credentials Summary This Web Platform feature enables issuing websites (eg, a university, government ...
- [\[blink-dev\] Intent to Extend Experiment: Digital Credential API](https://www.mail-archive.com/blink-dev@chromium.org/msg14188.html) *(mail-archive.com)*
  > Explainer https://<strong>github.com/w3c-fedid/digital-credentials/blob/main/explainer.md</strong> Specification https://w3c-fedid.github.io/digital-credentials Summary Websites can and do get credentials from mobile wallet apps through a variety of ...
- [Re: \[blink-dev\] Intent to Extend Experiment: Digital Credential API](https://www.mail-archive.com/blink-dev@chromium.org/msg14205.html) *(mail-archive.com)*
  > &gt; &gt; On Tuesday, July 15, 2025 at 11:02:05 AM UTC-7 Jeffrey Yasskin wrote: &gt; &gt;&gt; On Tue, Jul 15, 2025 at 10:44 AM Chromestatus &lt; &gt;&gt; ad...@cr-status.appspotmail.com&gt; wrote: &gt;&gt; &gt;&gt;&gt; Contact emails rby...@chromium....
- [\[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg16188.html) *(mail-archive.com)*
  > On Wednesday, March 25, 2026 at 9:57:28 AM UTC-4 Chromestatus wrote: &gt; *Contact emails* &gt; [email protected], [email protected], [email protected] &gt; &gt; *Explainer* &gt; https://<strong>github.com/w3c-fedid/digital-credentials/blob/main/expl...
- [Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API I (presentation support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14470.html) *(mail-archive.com)*
  > &gt; &gt; I think the explainer is missing example code for the problem (and/or &gt; screenshots if the custom-scheme practice involves user interaction?), but &gt; https://<strong>github.com/w3c-fedid/digital-credentials/blob/main/explainer.md</stro...
- [Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17416.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; Rick &gt;&gt;&gt; &gt;&gt;&gt; On Wed, Sep 2, 2026 at 12:41 PM Chromestatus &lt; &gt;&gt;&gt; [email protected]&gt; wrote: &gt;&gt;&gt; &gt;&gt;&gt;&gt; *Contact emails* &gt;&gt;&gt;&gt; [email protected], [email protected],...
- [\[blink-dev\] Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg16897.html) *(mail-archive.com)*
  > Explainer https://<strong>github.com/w3c-fedid/digital-credentials/blob/main/explainer.md</strong> Specification https://w3c-fedid.github.io/digital-credentials Summary This Web Platform feature enables issuing websites (eg, a university, government ...
- [Digital Credentials API (2026): Chrome, Safari & Firefox](https://www.corbado.com/blog/digital-credentials-api) *(corbado.com · 2026-08-14T06:00:46)*
  > As the crucial component at the ... from the FedID Community Group in April 2025. The official draft specification can be found here: <strong>https://w3c-fedid.github.io/digital-credentials/</strong>....
- [Digital Credentials](https://simoneonofri.github.io/digital-credentials) *(simoneonofri.github.io)*
  > https://<strong>w3c-fedid.github.io/digital-credentials</strong>/ Latest published version: https://www.w3.org/TR/digital-credentials/ Latest editor&#x27;s draft: https://<strong>w3c-fedid.github.io/digital-credentials</strong>/ History: https://www....
- [Digital Credentials API (issuance support)](https://cr-status.appspot.com/feature/5099333963874304?gate=5199087129460736) *(cr-status.appspot.com)*
  > Sign in with GoogleSign in with Google. Opens in new tab
- [Digital Credentials API (issuance support) - Chrome Platform Status](https://cr-status.appspot.com/feature/5099333963874304) *(cr-status.appspot.com)*
  > Sign in with GoogleSign in with Google. Opens in new tab
- [What is the Digital Credentials API? The Developer's Guide (2026)](https://docs.walt.id/concepts/data-exchange-protocols/dc-api) *(docs.walt.id)*
  > A complete guide to the W3C Digital Credentials API (DC-API). Learn how browser-based credential exchange works, its relationship to OpenID4VCI/VP, and practical implementation examples.
- [About digital credentials \| Identity \| Android Developers](https://developer.android.com/identity/digital-credentials) *(developer.android.com · 2026-04-22T00:00:00)*
  > On Android, this is implemented through Credential Manager&#x27;s Digital Credentials API. Figure 1. Using a digital credential in a sample app. Digital credentials offer several advantages over physical credentials and non-standardized digital docum...
- [How to build a Digital Credential Issuer (Developer’s Guide)](https://www.corbado.com/blog/how-to-build-verifiable-credential-issuer) *(corbado.com · 2025-07-31T14:32:18)*
  > Learn how to build a W3C Verifiable Credential issuer via OpenID4VCI. This tutorial shows how to create a Next.js app that issues VCs for digital wallets.
- [Online Identity Verification with the Digital Credentials API \| WebKit](https://webkit.org/blog/17431/online-identity-verification-with-the-digital-credentials-api) *(webkit.org · 2025-10-28T15:28:09)*
  > Starting in Safari 26 on macOS 26, iOS 26, and iPadOS 26, we’re introducing support for the W3C’s Digital Credentials API.
- [How to build a Digital Credential Verifier (Developer’s Guide)](https://www.corbado.com/blog/how-to-build-verifiable-credential-verifier) *(corbado.com · 2025-07-31T09:34:31)*
  > This function shows the four key steps of the frontend logic: <strong>checking for API support, fetching the request from the backend, calling the browser API, and sending the result back for verification</strong>.
- [Online Acceptance of Digital Credentials \| Verify with Google Wallet \| Google for Developers](https://developers.google.com/wallet/identity/verify/accepting-ids-from-wallet-online) *(developers.google.com)*
  > This guide explains how Relying ... across Android apps and the web · <strong>Before going live in production, you must formally register your Relying Party application with Google</strong>....
- [html - Responsive webpage layout breaks on certain mobile devices - Need to ensure cross-device compatibility - Stack Overflow](https://stackoverflow.com/questions/76491361/responsive-webpage-layout-breaks-on-certain-mobile-devices-need-to-ensure-cros) *(stackoverflow.com)*
  > You can handle your responsiveness issues by using media queries and aspect ratios. See the syntax below. As per the aspect ratio, the responsiveness of your web app will be covered by using the format below.
- [Cross-Device Development with Web Standards](https://girliemac.com/presentation-slides/html5-mobile-approach/rwd.html) *(girliemac.com)*
  > <strong>@-o-viewport {width: device-width} @-ms-viewport {width: device-width} * @viewport {width: device-width}</strong> ... @media screen and (orientation: portrait) { @viewport { width: 768px; height: 1024px; } /* CSS for portrait layout goes here...
- [How to perform Cross Device Testing \| BrowserStack](https://www.browserstack.com/guide/how-to-perform-cross-device-testing) *(browserstack.com · 2026-06-18T07:11:05)*
  > However, it is the responsibility of the tester to make sure it works as expected on at least the popular and widely used devices available in the market. Hence, testing on the right mobile devices is crucial for your website to be cross device compa...
- [Responsive Design 2.0–Advanced CSS and JavaScript Techniques from Cross-Device Compatibility \| Springer Nature Link](https://link.springer.com/chapter/10.1007/978-3-032-19681-1_26) *(link.springer.com)*
  > The rapid growth of mobile and multi-device usage has made cross-device compatibility a crucial challenge in web development. Traditional responsive design, relying mainly on media queries and fluid grids, often falls short when adapting to diverse d...
- [\[blink-dev\] Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17347.html) *(mail-archive.com)*
  > Gecko: Negative (https://github.com/mozilla/standards-positions/issues/1003) WebKit: Support (https://github.com/WebKit/standards-positions/issues/332) Presentation support is shipped, but timeline for adding issuance support yet. Web developers: No ...
- [Explore New Chrome Enterprise Browser, Core, Premium Features](https://chromeenterprise.google/intl/en_us/resources/release-notes) *(chromeenterprise.google · 2026-09-09T00:00:00)*
  > <strong>Chrome 151 began deprecating support for unspecified presentation and issuance protocols in the Digital Credentials API</strong>; final removal is scheduled for Chrome 160.
- [Digital Credentials API for credential issuance \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/digital-credentials-api-143-issuance-ot) *(developer.chrome.com · 2025-11-26T00:00:00)*
  > To streamline this process, Chrome ... capabilities. The navigator.credentials.<strong>create() method allows issuer websites to securely invoke wallet apps for credential issuance</strong>....
- [Digital Credentials API: Secure and private identity on the web \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/digital-credentials-api-shipped) *(developer.chrome.com · 2025-10-03T00:00:00)*
  > For those who participated our earlier origin trial, you&#x27;ll notice the Digital Credentials API has moved from <strong>navigator.identity.get() to navigator.credentials.get(),</strong> aligning it with the broader identity unification effort with...
- [Intent to Experiment: Digital Credentials API (issuance support)](https://groups.google.com/a/chromium.org/d/msgid/blink-dev/68ed3208.050a0220.30571e.0360.GAE@google.com) *(groups.google.com)*
  > Summary This Web Platform feature enables issuing websites (e.g., a university, government agency, or bank) to securely initiate the provisioning (issuance) process of digital credentials directly into a user&#x27;s mobile wallet application. On Andr...
- [Methods \| Vidos](https://vidos.id/docs/explanations/standards/w3c/digital-credentials/api-methods) *(vidos.id)*
  > The Digital Credentials API extends Credential Management Level 1 by adding a digital member to: CredentialRequestOptions (used with navigator.credentials.get())
- [Intent to Ship: Digital Credentials API I (presentation support)](https://groups.google.com/a/chromium.org/g/blink-dev/c/cPLAQLj8nV0) *(groups.google.com)*
  > to blink-dev, rby...@chromium.org, ... Chromestatus · The parenthetical in the Intent title &quot;(presentation support)&quot; seems to imply that this intent covers only part of Digital Credentials API, and maybe more of it will ship at another time...
- [\[blink-dev\] Re: Intent to Ship: Digital Credentials API I (presentation support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14414.html) *(mail-archive.com)*
  > &gt; &gt; &gt; &gt; Thanks, &gt; Dan &gt; On Monday, August 11, 2025 at 2:32:19 PM UTC-7 rby...@chromium.org wrote: &gt; &gt; [API owner hat off since I work on this API] &gt; &gt; On Mon, Aug 11, 2025 at 2:26 PM Chromestatus &lt;ad...@cr-status.apps...
- [\[blink-dev\] Intent to Ship: Digital Credentials API I (presentation support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14377.html) *(mail-archive.com)*
  > Chromestatus Mon, 11 Aug 2025 11:26:30 -0700 · Contact emails rby...@chromium.org, g...@chromium.org, ma...@chromium.org, ashimaar...@google.com · Explainer https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md Specification https:/...
- [\[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17389.html) *(mail-archive.com)*
  > Rick On Wed, Sep 2, 2026 at 12:41 PM Chromestatus &lt; [email protected]&gt; wrote: &gt; *Contact emails* &gt; [email protected], [email protected], [email protected] &gt; &gt; *Explainer* &gt; https://github.com/w3c-fedid/digital-credentials/blob/ma...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Experiment: Digital Credentials API (issuance support)](https://groups.google.com/a/chromium.org/g/blink-dev/c/Gy-NvwoSODo/m/UYrJvdQ1BwAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5099333963874304</strong>?gate=5124632629870592
- [Intent to Extend Experiment: Digital Credential API](https://groups.google.com/a/chromium.org/g/blink-dev/c/Vj2tr_cAClk/m/H4JztjhoAgAJ) *(groups.google.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > https://<strong>github.com/w3c-fedid/digital-credentials/blob/main/explainer.md</strong>
- [\[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14755.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > Explainer https://<strong>github.com/w3c-fedid/digital-credentials/blob/main/explainer.md</strong> Specification https://w3c-fedid.github.io/digital-credentials Summary This Web Platform feature enables issuing websites (eg, a university, g...
- [\[blink-dev\] Intent to Extend Experiment: Digital Credential API](https://www.mail-archive.com/blink-dev@chromium.org/msg14188.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > Explainer https://<strong>github.com/w3c-fedid/digital-credentials/blob/main/explainer.md</strong> Specification https://w3c-fedid.github.io/digital-credentials Summary Websites can and do get credentials from mobile wallet apps through a v...
- [Re: \[blink-dev\] Intent to Extend Experiment: Digital Credential API](https://www.mail-archive.com/blink-dev@chromium.org/msg14205.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > &gt; &gt; On Tuesday, July 15, 2025 at 11:02:05 AM UTC-7 Jeffrey Yasskin wrote: &gt; &gt;&gt; On Tue, Jul 15, 2025 at 10:44 AM Chromestatus &lt; &gt;&gt; ad...@cr-status.appspotmail.com&gt; wrote: &gt;&gt; &gt;&gt;&gt; Contact emails rby......
- [\[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg16188.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > On Wednesday, March 25, 2026 at 9:57:28 AM UTC-4 Chromestatus wrote: &gt; *Contact emails* &gt; [email protected], [email protected], [email protected] &gt; &gt; *Explainer* &gt; https://<strong>github.com/w3c-fedid/digital-credentials/blob...
- [Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API I (presentation support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14470.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > &gt; &gt; I think the explainer is missing example code for the problem (and/or &gt; screenshots if the custom-scheme practice involves user interaction?), but &gt; https://<strong>github.com/w3c-fedid/digital-credentials/blob/main/explaine...
- [Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17416.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > &gt;&gt;&gt; &gt;&gt;&gt; Rick &gt;&gt;&gt; &gt;&gt;&gt; On Wed, Sep 2, 2026 at 12:41 PM Chromestatus &lt; &gt;&gt;&gt; [email protected]&gt; wrote: &gt;&gt;&gt; &gt;&gt;&gt;&gt; *Contact emails* &gt;&gt;&gt;&gt; [email protected], [email p...
- [\[blink-dev\] Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg16897.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > Explainer https://<strong>github.com/w3c-fedid/digital-credentials/blob/main/explainer.md</strong> Specification https://w3c-fedid.github.io/digital-credentials Summary This Web Platform feature enables issuing websites (eg, a university, g...
- [digital-credentials/index.html at main · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/blob/main/index.html) *(github.com)* *(Cites: `https://w3c-fedid.github.io/digital-credentials`)*
  > shortName: &quot;digital-credentials&quot;,       specStatus: &quot;ED&quot;,       edDraftURI: &quot;https://<strong>w3c-fedid.github.io/digital-credentials</strong>/&quot;,       group: &quot;fedid&quot;,       github: &quot;https://githu...
- [Digital Credentials](https://www.w3.org/TR/digital-credentials) *(w3.org · 2026-08-21T00:00:00)* *(Cites: `https://w3c-fedid.github.io/digital-credentials`)*
  > https://<strong>w3c-fedid.github.io/digital-credentials</strong>/ History: https://www.w3.org/standards/history/digital-credentials/ Commit history · Editors: Marcos Caceres (Apple Inc.) Tim Cappalli (Okta) Mohamed Amir Yosef (Google Inc.) ...
- [Digital Credentials API (2026): Chrome, Safari & Firefox](https://www.corbado.com/blog/digital-credentials-api) *(corbado.com · 2026-08-14T06:00:46)* *(Cites: `https://w3c-fedid.github.io/digital-credentials`)*
  > As the crucial component at the ... from the FedID Community Group in April 2025. The official draft specification can be found here: <strong>https://w3c-fedid.github.io/digital-credentials/</strong>....
- [eudi-doc-architecture-and-reference-framework/docs/discussion-topics/f-digital-credential-api.md at main · eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework](https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework/blob/main/docs/discussion-topics/f-digital-credential-api.md) *(github.com)* *(Cites: `https://w3c-fedid.github.io/digital-credentials`)*
  > Digital Credentials, Draft Community Group Report, 20 February 2025, available at https://<strong>w3c-fedid.github.io/digital-credentials</strong>/
- [Digital Credentials](https://simoneonofri.github.io/digital-credentials) *(simoneonofri.github.io)* *(Cites: `https://w3c-fedid.github.io/digital-credentials`)*
  > https://<strong>w3c-fedid.github.io/digital-credentials</strong>/ Latest published version: https://www.w3.org/TR/digital-credentials/ Latest editor&#x27;s draft: https://<strong>w3c-fedid.github.io/digital-credentials</strong>/ History: ht...

## 📚 Platform Documentation & Specifications

- [digital-credentials/index.html at main · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/blob/main/index.html) *(github.com)*
- [Digital Credentials](https://www.w3.org/TR/digital-credentials) *(w3.org)*
- [eudi-doc-architecture-and-reference-framework/docs/discussion-topics/f-digital-credential-api.md at main · eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework](https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework/blob/main/docs/discussion-topics/f-digital-credential-api.md) *(github.com)*
- [cross-device · GitHub Topics · GitHub](https://github.com/topics/cross-device) *(github.com)*
- [W3C Digital Credentials API publication: the next step to privacy-preserving identities on the web \| 2025 \| Blog \| W3C](https://www.w3.org/blog/2025/w3c-digital-credentials-api-publication-the-next-step-to-privacy-preserving-identities-on-the-web) *(w3.org)*
- [Digital Credentials & Payments Tim Cappalli & Ian Jacobs TPAC 2024](https://www.w3.org/2024/Talks/TPAC/digital-credentials-payments-20240923.pdf) *(w3.org)*
- [GitHub - w3c-fedid/digital-credentials: Digital Credentials API · GitHub](https://github.com/w3c-fedid/digital-credentials) *(github.com)*
- [\[HOWTO\] Try the Prototype API in Chrome/Android · Issue #36 · w3c-fedid/digital-credentials](https://github.com/WICG/identity-credential/issues/36) *(github.com)*
- [Digital Credentials API · Issue #1119 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1119) *(github.com)*
- [\[HOWTO\] Try the Prototype API in Chrome/Android · Issue #36 · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/issues/36) *(github.com)*
- [digital-credentials/proposals/identity-credential-proposal.md at main · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/blob/main/proposals/identity-credential-proposal.md) *(github.com)*
- [Add means to test Digital Credentials API · Issue #357 · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/issues/357) *(github.com)*
- [Make user mediation implicit and always required by mohamedamir · Pull Request #392 · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/pull/392) *(github.com)*
- [FedCM/explorations/HOWTO-chrome.md at main · w3c-fedid/FedCM](https://github.com/w3c-fedid/FedCM/blob/main/explorations/HOWTO-chrome.md) *(github.com)*
- [Support personalized sign-in buttons with User Info API · Issue #382 · w3c-fedid/FedCM](https://github.com/w3c-fedid/FedCM/issues/382) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 60 result(s) found across 12 planned queries — **48 verified relevant**
  - `"chromestatus.com/feature/5099333963874304" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/w3c-fedid/digital-credentials/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"w3c-fedid.github.io/digital-credentials" -site:w3c-fedid.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"Digital Credentials API (issuance support)" API` — *Core feature API query* (2 returned)
  - `"Digital Credentials API (issuance support)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"cross-device" OR "(issuance" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Digital Credentials API (issuance support)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Digital Credentials API (issuance support)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (3 returned)
  - `"Digital Credentials API" (issuance OR provisioning) ("navigator.credentials" OR "navigator.identity")` — *Searches for practical JavaScript code snippets and WebIDL usage patterns demonstrating digital credential issuance.* (8 returned)
  - `"Digital Credentials API" ("issuance" OR "issue") (tutorial OR guide OR walkthrough OR "developer.chrome.com")` — *Surfaces developer guides, engineering blogs, and tutorials illustrating how websites provision credentials to mobile wallets.* (4 returned)
  - `"Digital Credentials" issuance ("Intent to Prototype" OR "Intent to Ship" OR "ChromeStatus" OR "W3C FedID")` — *Identifies browser vendor adoption status, standardization milestones, and rollout roadmaps across the web ecosystem.* (8 returned)
  - `"Digital Credentials API" (issuance OR CredMan OR "IdentityCredential") (site:github.com/w3c-fedid OR site:news.ycombinator.com OR site:reddit.com)` — *Gathers community sentiment, privacy considerations, and developer discussions across standards forums and tech aggregators.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **12 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 1 result(s) found — **1 verified relevant**
- **Standards Positions:** 2 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 28 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5099333963874304)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5099333963874304)
- [Specification](https://w3c-fedid.github.io/digital-credentials)
- [Chromium Tracking Bug](https://crbug.com/378330032)
