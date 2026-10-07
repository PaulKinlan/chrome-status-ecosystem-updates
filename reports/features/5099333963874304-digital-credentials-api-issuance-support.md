# Digital Credentials API (issuance support)

> **Report Week:** 2026-W41 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

This Web Platform feature enables issuing websites (e.g., a university, government agency, or bank) to securely initiate the provisioning (issuance) process of digital credentials directly into a user's mobile wallet application. On Android, this capability leverages the Android IdentityCredential CredMan system (Credential Manager). On Desktop, it leverages cross-device approaches using the CTAP protocol similar to Digital Credentials presentation.

### Motivation

Without this, websites and wallets can only communicate in ways that are more opaque to the browser and OS.

## Ecosystem Status

- **Momentum:** High (531 points)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** The Digital Credentials API issuance extension (via \`navigator.credentials.create()\`) moves push-provisioning of verifiable credentials out of fragile custom URL schemes and QR hacks into browser- and OS-mediated flows. While Google leads implementation targeting Android Credential Manager and cross-device CTAP pairing, the broader ecosystem remains fractured across protocol dialects like OpenID4VCI and ISO standards. Full interoperability remains elusive without widespread multi-engine consensus or inclusion in Baseline.

### Recommendations
- Actionable Advice: Treat browser-mediated credential issuance strictly as an optional progressive enhancement for compatible Android/Chrome environments. Maintain established fallback flows (such as cross-device QR codes, push notifications, and standard OpenID4VCI redirects) to support Safari, Firefox, and unassisted desktop clients.
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
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQERzsGBbyXX_yZrQ0IRxwsrTio5Jyuhw9JBbbOuI4QNOgzEyw0NKEeRfydcKO9O5xw-7mINjW1AZ_ZLN77fcoyDLOJHwsv6-jV5eQ5MJtiGWndOq14es5dJfV6fbtlT0Mo=) *(vertexaisearch.cloud.google.com)*
  > ### Overview  The **Digital Credentials API (DC API)**—developed within the W3C Federated Identity Working Group (FedID WG)—originally focused on credential presentation (`navigator.credentials.get()`). It has since expanded to support **credential i
- [vidos.id](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHY8oh8Q-lAxLxSw3_41HvI41yh3d9R0YnE27Pen6vP_uHGndxfzy4YzPFsZJtW6VRbYwZWVCtCk9nfiratau2amLeVvqC_jXmJfgkbIZ8dzp0H2552OSWhAHhNvth2EwNqogzOzwrKLK2jN3MGIJCN2-nsl3O8NiMm_KE=) *(vertexaisearch.cloud.google.com)*
  > Digital Credentials API | Vidos Skip to content Vidos Explanations References Tutorials Guides Search Ctrl K Cancel Home Support Vidos Dashboard Select theme Dark Light Auto Ask ChatGPT View Markdown Digital Credentials API What is the Digital Creden...
- [corbado.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHhPSO3drI8XG9z_UBjO2FF20I21Saq61mDk4mTK7xo-5_ZuEYyvHA3lesCXVkSvjoRKQDTqYaCbRUC1MWOLombx8VxtNCJ9He9NWy9XSD9GEYHyBCQmF6FrVU25w2k-297YYNbi-ZGEehz) *(vertexaisearch.cloud.google.com)*
  > Digital Credentials API (2026): Chrome, Safari & Firefox Free The +45-page Authentication Analytics Whitepaper — measuring real login journeys Download Back to Overview Copy Page Copy Page Copied 🇬🇧 En English Digital Credentials API (2026): Chrome...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHbk-mYIUnVy4wiZwFbf-uatPlIkSWawIdHUH7wumEFe0jCTBixYoD-D0ApDQDXzZXjKyIkFV05VDRZq5pVABAwLX83q9dvzQVlqD4raeA42HeFiUEq9OExStdql0XmxleuPW7JToSBhk3_eqNN7NmN2o-suaESqh30SnkliPTc) *(vertexaisearch.cloud.google.com)*
  > Digital Credentials API for credential issuance | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة...
- [android.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE7KSlyWl9kizwYbCZszXePGOG3BQrDA9XQNRWI024OBY_Mv3Mrx_MDJopLr1UWkoLo4R_ujEW9_nl6jRlbypGLm4qzauiJXfpBri-FDFHae98KqwbEA4uSj9UU7u3gtd5wdVMgPUNOZf7bJ1zY3wd4) *(vertexaisearch.cloud.google.com)*
  > ### Overview  The **Digital Credentials API (DC API)**—developed within the W3C Federated Identity Working Group (FedID WG)—originally focused on credential presentation (`navigator.credentials.get()`). It has since expanded to support **credential i
- [googleblog.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFjdDFPsYUzhR3LKh85R1dSu22IVuJ-pKJym1dsLdXKVw9aDBbg0PX89Z-pVWc-Um4TPWUeSBCdddDPEmW82hhLqMtMYLelJF-LWlyFYLXB7--U5uTjZDmeaKPusx6t_gpR7R0lyATS42fybwebyLy_SeDcB0frsH5OsThfBmvqTIOk1mNREiAKkTlxYql7uoTFehu3N3QxVPEcGAogPQ==) *(vertexaisearch.cloud.google.com)*
  > Android Developers Blog: Announcing Android support of digital credentials &#9776; Android Developers Blog The latest Android and Google Play news for app and game developers. 🔍 Android Developers &#8594; Jetpack Kotlin Docs News Platform Android St...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGSbLOSMZE4D1Gx2OllU1ru9XK825H30azgiRN-I_XJcYxS2lOLoL-QVTPijWf2leBKd0jto8WkTSW2SvvrZcojBqWE9OyrOFogiEACOPEcHRKPr-w-Fw3ianG9i5SnL7qlJ35JiFyNM-czobSFkPi6vZPiAPbzTA==) *(vertexaisearch.cloud.google.com)*
  > Digital Credentials API: Secure and private identity on the web | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русски...
- [credenco.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHN0myazqZvpKXyzXK_HZ33fe_ycjbToEE1QTd_a1ZsQlUzT1Y_ws3r5aNnMaK4igMgUXngVKNBKtnU6PNzAqVf6H0lJqLFjGejwc6UHL2fpibqRos95Ef7Y0RKcIYAfFLKHTY_enGw_yupoZTQYHM=) *(vertexaisearch.cloud.google.com)*
  > ### Overview  The **Digital Credentials API (DC API)**—developed within the W3C Federated Identity Working Group (FedID WG)—originally focused on credential presentation (`navigator.credentials.get()`). It has since expanded to support **credential i
- [digitalcredentials.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHTaCref6Uif3XQPXmXUoIXRhVjppzUvme4QLAFpLB-GC4JcT0_igBLJzpqzzL9PjqBY6BwKpzyeFziK8OvsPakdVwdc5n5kwvq7UqguDoIcAUwIhLw) *(vertexaisearch.cloud.google.com)*
  > ### Overview  The **Digital Credentials API (DC API)**—developed within the W3C Federated Identity Working Group (FedID WG)—originally focused on credential presentation (`navigator.credentials.get()`). It has since expanded to support **credential i
- [walt.id](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGx2axVuGIXDyT91Or_LMCTHpQORm61-bedQypyjHgRTlBxV8n9AXcRYlvDJKvc4qi32ivdGdhQHFsKKGrO-jloZMXE4eO07Xi2QfXRfPYM0Jjn4rWCu-nmyGQYQrpTdpgrv-sd0cyUp8xqHPD-g5kppnI=) *(vertexaisearch.cloud.google.com)*
  > ### Overview  The **Digital Credentials API (DC API)**—developed within the W3C Federated Identity Working Group (FedID WG)—originally focused on credential presentation (`navigator.credentials.get()`). It has since expanded to support **credential i
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHvIKWyKFAdrLyXBGzkLASbxsO5x4z_ehJ2FkLYz3_ASMOCFoC890_CwCkMnSfE8bQcQhDzFfBKpZegMAHHBCE-T9dp0DJItbuUYMo18BG7NSGWbNqow1kLs_bFrFlYNZe1Dqso1Qtzjg33OUjY_zEXbuQUU_CdDgHv9Fd27IUhoYkIUDYglYWvYpO3) *(vertexaisearch.cloud.google.com)*
  > ### Overview  The **Digital Credentials API (DC API)**—developed within the W3C Federated Identity Working Group (FedID WG)—originally focused on credential presentation (`navigator.credentials.get()`). It has since expanded to support **credential i
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF0zYbqYt8itOHqjW04wLLP3iVSpLE2uRHrAiMnSxLJOvuMzePkAfqrjP-C-JkWqJ8iW8UA6Wou9HkrCEapsYwQgZecrRSo8ZuXkW-DoHSu6W4mUh4EZuNt_OpZ9M-bGAC4j7SnlDoEHHnSH1a8lVL54Q==) *(vertexaisearch.cloud.google.com)*
  > ### Overview  The **Digital Credentials API (DC API)**—developed within the W3C Federated Identity Working Group (FedID WG)—originally focused on credential presentation (`navigator.credentials.get()`). It has since expanded to support **credential i
- [Intent to Experiment: Digital Credentials API (issuance support)](https://groups.google.com/a/chromium.org/g/blink-dev/c/Gy-NvwoSODo/m/UYrJvdQ1BwAJ) *(groups.google.com)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5099333963874304</strong>?gate=5124632629870592
- [Re: \[blink-dev\] Intent to Extend Experiment: Digital Credential API](https://www.mail-archive.com/blink-dev@chromium.org/msg14205.html) *(mail-archive.com)*
  > &gt; &gt; On Tuesday, July 15, 2025 at 11:02:05 AM UTC-7 Jeffrey Yasskin wrote: &gt; &gt;&gt; On Tue, Jul 15, 2025 at 10:44 AM Chromestatus &lt; &gt;&gt; ad...@cr-status.appspotmail.com&gt; wrote: &gt;&gt; &gt;&gt;&gt; Contact emails rby...@chromium....
- [Intent to Extend Experiment: Digital Credential API](https://groups.google.com/a/chromium.org/g/blink-dev/c/Vj2tr_cAClk/m/H4JztjhoAgAJ) *(groups.google.com)*
  > https://<strong>github.com/w3c-fedid/digital-credentials/blob/main/explainer.md</strong>
- [Intent to Ship: Digital Credentials API I (presentation support)](https://groups.google.com/a/chromium.org/g/blink-dev/c/cPLAQLj8nV0) *(groups.google.com)*
  > I think the explainer is missing example code for the problem (and/or screenshots if the custom-scheme practice involves user interaction?), but https://<strong>github.com/w3c-fedid/digital-credentials/blob/main/explainer.md</strong>#what links to ht...
- [\[blink-dev\] Re: Intent to Ship: Digital Credentials API I (presentation support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14400.html) *(mail-archive.com)*
  > Thanks, Dan On Monday, August 11, 2025 at 2:32:19 PM UTC-7 rby...@chromium.org wrote: &gt; [API owner hat off since I work on this API] &gt; &gt; On Mon, Aug 11, 2025 at 2:26 PM Chromestatus &lt; &gt; ad...@cr-status.appspotmail.com&gt; wrote: &gt; &...
- [\[blink-dev\] Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg16897.html) *(mail-archive.com)*
  > Explainer https://<strong>github.com/w3c-fedid/digital-credentials/blob/main/explainer.md</strong> Specification https://w3c-fedid.github.io/digital-credentials Summary This Web Platform feature enables issuing websites (eg, a university, government ...
- [Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14837.html) *(mail-archive.com)*
  > *Contact emails* [email protected], [email protected], [email protected] *Explainer* https://<strong>github.com/w3c-fedid/digital-credentials/blob/main/explainer.md</strong> *Specification* https://w3c-fedid.github.io/digital-credentials *Summary* Th...
- [\[blink-dev\] Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17347.html) *(mail-archive.com)*
  > Explainer https://<strong>github.com/w3c-fedid/digital-credentials/blob/main/explainer.md</strong> Specification https://w3c-fedid.github.io/digital-credentials Summary This Web Platform feature enables issuing websites (eg, a university, government ...
- [\[blink-dev\] Intent to Ship: Digital Credentials API I (presentation support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14377.html) *(mail-archive.com)*
  > Explainer https://<strong>github.com/w3c-fedid/digital-credentials/blob/main/explainer.md</strong> Specification https://w3c-fedid.github.io/digital-credentials Summary Websites can and do get credentials from mobile wallet apps through a variety of ...
- [Digital Credentials API (2026): Chrome, Safari & Firefox](https://www.corbado.com/blog/digital-credentials-api) *(corbado.com · 2026-08-14T06:00:46)*
  > As the crucial component at the ... from the FedID Community Group in April 2025. The official draft specification can be found here: <strong>https://w3c-fedid.github.io/digital-credentials/</strong>....
- [Digital Credentials](https://simoneonofri.github.io/digital-credentials) *(simoneonofri.github.io)*
  > https://<strong>w3c-fedid.github.io/digital-credentials</strong>/ Latest published version: https://www.w3.org/TR/digital-credentials/ Latest editor&#x27;s draft: https://<strong>w3c-fedid.github.io/digital-credentials</strong>/ History: https://www....
- [Digital Credentials API (issuance support)](https://cr-status.appspot.com/feature/5099333963874304?gate=5199087129460736) *(cr-status.appspot.com)*
  > Sign in with GoogleSign in with Google. Opens in new tab
- [Digital Credentials API (issuance support) - Chrome Platform Status](https://cr-status.appspot.com/feature/5099333963874304) *(cr-status.appspot.com)*
  > Sign in with GoogleSign in with Google. Opens in new tab
- [What is the Digital Credentials API? The Developer's Guide (2026)](https://docs.walt.id/concepts/data-exchange-protocols/dc-api) *(docs.walt.id)*
  > WebKit blog introducing Digital Credentials API support in Safari 26 across Apple platforms and describing same-device and cross-device flows
- [About digital credentials \| Identity \| Android Developers](https://developer.android.com/identity/digital-credentials) *(developer.android.com · 2026-04-22T00:00:00)*
  > <strong>Verify email addresses</strong>: The API lets your app retrieve verified emails directly from the user&#x27;s device, removing the need for OTPs, for frictionless sign-up, sign-in, and account recovery. For more information, see the email ver...
- [Online Identity Verification with the Digital Credentials API \| WebKit](https://webkit.org/blog/17431/online-identity-verification-with-the-digital-credentials-api) *(webkit.org · 2025-10-28T15:28:09)*
  > Starting in Safari 26 on macOS 26, iOS 26, and iPadOS 26, we’re introducing support for the W3C’s Digital Credentials API.
- [How to build a Digital Credential Verifier (Developer’s Guide)](https://www.corbado.com/blog/how-to-build-verifiable-credential-verifier) *(corbado.com · 2025-07-31T09:34:31)*
  > Note: The concept of Verifiable Presentations as defined in the W3C VC ecosystem is out of scope for this blog post. The term Verifiable Presentation here refers to the OpenID4VP vp_token response, which behaves similarly to a W3C VP but is based on ...
- [Online Acceptance of Digital Credentials \| Verify with Google Wallet \| Google for Developers](https://developers.google.com/wallet/identity/verify/accepting-ids-from-wallet-online) *(developers.google.com)*
  > This guide explains how Relying ... across Android apps and the web · <strong>Before going live in production, you must formally register your Relying Party application with Google</strong>....
- [A non-responsive approach to building cross-device webapps \| Articles \| web.dev](https://web.dev/mobile-cross-device) *(web.dev · 2012-04-28T00:00:00)*
  > This sort of structure enables you to fully control what assets each version loads, since you have custom HTML, CSS and JavaScript for each device. This is very powerful, and can lead to the leanest, most performant way of developing for the cross-de...
- [javascript - Cross-device CSS problems - Stack Overflow](https://stackoverflow.com/questions/14572499/cross-device-css-problems) *(stackoverflow.com)*
  > So either you detect mobile with javascript in order to add the correct event Detecting a mobile browser (detect mobile) jQuery mobile (click event) (appropriate event) Or you <strong>change the toggle class for &quot;addClass&quot; and &quot;removeC...
- [The Ultimate Guide to Cross-Browser and Cross-Device Compatibility in Web Development \| by codeAbit \| Medium](https://medium.com/@codeAbit/the-ultimate-guide-to-cross-browser-and-cross-device-compatibility-in-web-development-053f95109acd) *(medium.com · 2024-11-21T09:57:08)*
  > Use Valid HTML and CSS: Write clean and standards-compliant HTML5 and CSS3. Validation tools like the W3C Validator can identify errors and ensure your website adheres to industry norms. Implement Progressive Enhancement: Start with a functional core...
- [Microsoft Edge 148 web platform release notes (May 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/148) *(learn.microsoft.com · 2026-05-07T00:00:00)*
  > The Digital Credentials API <strong>enables triggering the issuance of user credentials from a credential issuer server to a digital wallet application</strong>.
- [Explore new Chrome Enterprise Browser, Core and Premium features](https://chromeenterprise.google/intl/en_uk/resources/release-notes) *(chromeenterprise.google · 2026-09-23T00:00:00)*
  > <strong>Chrome 151 began deprecating support for unspecified presentation and issuance protocols in the Digital Credentials API</strong>; final removal is scheduled for Chrome 160.
- [Digital Credentials API - what it is and how it works \| Credenco](https://www.credenco.com/glossary/digital-credentials-api) *(credenco.com)*
  > The browser passes the request to the operating system, which shows a native picker of the wallets installed on the device, and the wallet the holder chooses returns its protocol response through the same call. The API only carries the exchange: what...
- [Digital Credentials API for credential issuance \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/digital-credentials-api-143-issuance-ot) *(developer.chrome.com · 2025-11-26T00:00:00)*
  > To streamline this process, Chrome ... capabilities. The navigator.credentials.create() method <strong>allows issuer websites to securely invoke wallet apps for credential issuance</strong>....
- [Methods \| Vidos](https://vidos.id/docs/explanations/standards/w3c/digital-credentials/api-methods) *(vidos.id)*
  > Section titled “Presentation request (navigator.credentials.get)” · A presentation request uses CredentialRequestOptions.digital with one or more DigitalCredentialGetRequest items: ... Issuance uses CredentialCreationOptions.digital with one or more ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Experiment: Digital Credentials API (issuance support)](https://groups.google.com/a/chromium.org/g/blink-dev/c/Gy-NvwoSODo/m/UYrJvdQ1BwAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5099333963874304</strong>?gate=5124632629870592
- [Re: \[blink-dev\] Intent to Extend Experiment: Digital Credential API](https://www.mail-archive.com/blink-dev@chromium.org/msg14205.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > &gt; &gt; On Tuesday, July 15, 2025 at 11:02:05 AM UTC-7 Jeffrey Yasskin wrote: &gt; &gt;&gt; On Tue, Jul 15, 2025 at 10:44 AM Chromestatus &lt; &gt;&gt; ad...@cr-status.appspotmail.com&gt; wrote: &gt;&gt; &gt;&gt;&gt; Contact emails rby......
- [Intent to Extend Experiment: Digital Credential API](https://groups.google.com/a/chromium.org/g/blink-dev/c/Vj2tr_cAClk/m/H4JztjhoAgAJ) *(groups.google.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > https://<strong>github.com/w3c-fedid/digital-credentials/blob/main/explainer.md</strong>
- [Intent to Ship: Digital Credentials API I (presentation support)](https://groups.google.com/a/chromium.org/g/blink-dev/c/cPLAQLj8nV0) *(groups.google.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > I think the explainer is missing example code for the problem (and/or screenshots if the custom-scheme practice involves user interaction?), but https://<strong>github.com/w3c-fedid/digital-credentials/blob/main/explainer.md</strong>#what l...
- [\[blink-dev\] Re: Intent to Ship: Digital Credentials API I (presentation support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14400.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > Thanks, Dan On Monday, August 11, 2025 at 2:32:19 PM UTC-7 rby...@chromium.org wrote: &gt; [API owner hat off since I work on this API] &gt; &gt; On Mon, Aug 11, 2025 at 2:26 PM Chromestatus &lt; &gt; ad...@cr-status.appspotmail.com&gt; wro...
- [\[blink-dev\] Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg16897.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > Explainer https://<strong>github.com/w3c-fedid/digital-credentials/blob/main/explainer.md</strong> Specification https://w3c-fedid.github.io/digital-credentials Summary This Web Platform feature enables issuing websites (eg, a university, g...
- [Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14837.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > *Contact emails* [email protected], [email protected], [email protected] *Explainer* https://<strong>github.com/w3c-fedid/digital-credentials/blob/main/explainer.md</strong> *Specification* https://w3c-fedid.github.io/digital-credentials *S...
- [\[blink-dev\] Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17347.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > Explainer https://<strong>github.com/w3c-fedid/digital-credentials/blob/main/explainer.md</strong> Specification https://w3c-fedid.github.io/digital-credentials Summary This Web Platform feature enables issuing websites (eg, a university, g...
- [\[blink-dev\] Intent to Ship: Digital Credentials API I (presentation support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14377.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > Explainer https://<strong>github.com/w3c-fedid/digital-credentials/blob/main/explainer.md</strong> Specification https://w3c-fedid.github.io/digital-credentials Summary Websites can and do get credentials from mobile wallet apps through a v...
- [digital-credentials/index.html at main · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/blob/main/index.html) *(github.com)* *(Cites: `https://w3c-fedid.github.io/digital-credentials`)*
  > shortName: &quot;digital-credentials&quot;,       specStatus: &quot;ED&quot;,       edDraftURI: &quot;https://<strong>w3c-fedid.github.io/digital-credentials</strong>/&quot;,       group: &quot;fedid&quot;,       github: &quot;https://githu...
- [Digital Credentials](https://www.w3.org/TR/digital-credentials) *(w3.org · 2026-09-04T00:00:00)* *(Cites: `https://w3c-fedid.github.io/digital-credentials`)*
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
- [digital-credentials/explainer.md at main · w3c-fedid/digital-credentials](https://github.com/WICG/digital-credentials/blob/main/explainer.md) *(github.com)*
- [Issuance API surface: expose navigator.credentials.create() for openid4vci-v1 · Issue #20 · sirosfoundation/dc-api](https://github.com/sirosfoundation/dc-api/issues/20) *(github.com)*
- [GitHub - w3c-fedid/digital-credentials: Digital Credentials API · GitHub](https://github.com/w3c-fedid/digital-credentials) *(github.com)*
- [Support for issuance · Issue #167 · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/issues/167) *(github.com)*
- [Requirements and Objectives · Issue #52 · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/issues/52) *(github.com)*
- [Add clientData · Issue #95 · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/issues/95) *(github.com)*
- [Digital Credentials API · Issue #1119 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1119) *(github.com)*
- [Add means to test Digital Credentials API · Issue #357 · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/issues/357) *(github.com)*
- [Wallet Selection Binding during Issuance · Issue #382 · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/issues/382) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 58 result(s) found across 12 planned queries — **38 verified relevant**
  - `"chromestatus.com/feature/5099333963874304" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/w3c-fedid/digital-credentials/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"w3c-fedid.github.io/digital-credentials" -site:w3c-fedid.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"Digital Credentials API (issuance support)" API` — *Core feature API query* (2 returned)
  - `"Digital Credentials API (issuance support)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"cross-device" OR "(issuance" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Digital Credentials API (issuance support)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Digital Credentials API (issuance support)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (4 returned)
  - `"Digital Credentials API" (issuance OR provisioning) ("wallet" OR "CredMan") (tutorial OR guide OR explainer)` — *Finds developer tutorials, guides, and explainers detailing how to issue digital credentials to mobile wallets via the browser.* (5 returned)
  - `"navigator.credentials.create" ("digital" OR "DigitalCredential") (issuance OR provisioning) code OR sample` — *Discovers real-world JavaScript code snippets and API calls demonstrating client-side digital credential issuance requests.* (8 returned)
  - `"Digital Credentials" issuance ("Chrome" OR "Android") ("intent to ship" OR "intent to prototype" OR "release")` — *Tracks browser vendor implementation status, intent signals, and platform announcements regarding issuance support.* (1 returned)
  - `site:github.com ("w3c-fedid/digital-credentials" OR "mozilla/standards-positions" OR "WebKit/standards-positions") "issuance"` — *Surfaces standards body debates, feedback, and browser engine positions regarding Web platform credential provisioning.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **12 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
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
