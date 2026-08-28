# Local Network Access restrictions for Background Fetch

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Background Fetch requests will soon require that the service worker's origin has the necessary Local Network Access (LNA) permission in order to send requests to local or loopback servers.

This aligns Chromium's implementation with the intent of the Background Fetch spec, which states that such requests go through the Fetch spec and have the same security policies applied to them, in this case LNA checks. This prevents sites from bypassing LNA checks by using [Background Fetch spec](https://wicg.github.io/background-fetch/) instead of regular [Fetch](https://fetch.spec.whatwg.org/).

For enterprises, you can use existing LNA enterprise policies in the same way you previously would have for regular Fetch API requests from service workers:
- [LocalNetworkAccessRestrictionsTemporaryOptOut](https://chromeenterprise.google/policies/#LocalNetworkAccessRestrictionsTemporaryOptOut)
- [LocalNetworkAccessAllowedForUrls](https://chromeenterprise.google/policies/#LocalNetworkAccessAllowedForUrls)
- [LoopbackNetworkAllowedForUrls](https://chromeenterprise.google/policies/#LoopbackNetworkAllowedForUrls)
- [LocalNetworkAccessPermissionsPolicyDefaultEnabled](https://chromeenterprise.google/policies/#LocalNetworkAccessPermissionsPolicyDefaultEnabled)
- [LocalNetworkAccessIpAddressSpaceOverrides](https://chromeenterprise.google/policies/#LocalNetworkAccessIpAddressSpaceOverrides)).

### Motivation

This fixes a security issue where Background Fetch unintentionally bypasses security policies such as Local Network Access checks.

## Ecosystem Status

- **Momentum:** High (120 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Chromium is closing a notable security bypass by enforcing Local Network Access (LNA) restrictions on the Background Fetch API starting in Chrome 154, ensuring requests to private or loopback addresses honor the same permission checks as standard Fetch. This change strictly aligns Background Fetch with the WHATWG Fetch specification and prevents web origins from circumventing local network boundaries. Cross-engine consensus strongly supports hardening the boundary between public web contexts and local intranets, even as broader LNA specification details continue to mature across standards bodies.

### Recommendations
- Actionable Advice: Audit existing service worker implementations using Background Fetch to verify whether they target local network or loopback endpoints, and ensure required LNA preflight headers and origin permissions are configured. Enterprise environments should leverage policies such as `LocalNetworkAccessAllowedForUrls` or `LocalNetworkAccessRestrictionsTemporaryOptOut` to manage trusted internal origins prior to the rollout.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @christhompson: "We aren't sure about venue yet but it has been on my mind some. Some parts will just be merged into the various relevant specifications, but there def..."
- Standards Activity (Mozilla): Latest discussion from @dveditz: "We're presumably "positive" on this since we've implemented most of it and enabled it on Nightly. What are the formal steps needed at this point?..."
- Community package available: [react-native-fetch-api](https://www.npmjs.com/package/react-native-fetch-api) (v3.0.0) for progressive enhancement.

## Standards Positions

- **WebKit:** [Request for Position: Local Network Access](https://github.com/WebKit/standards-positions/issues/520) [open]
- **Mozilla:** [Local Network Access](https://github.com/mozilla/standards-positions/issues/1260) [open]

## Packages & Polyfills

- [is-network-error](https://www.npmjs.com/package/is-network-error) `v1.3.2` — Check if a value is a Fetch network error
- [react-native-fetch-api](https://www.npmjs.com/package/react-native-fetch-api) `v3.0.0` — A fetch API polyfill for React Native with text streaming support.

## 📰 Ecosystem Blogs & Articles

- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF_12jbl3KoIJnG22RaFc9BxXnW4dwtzg2hyuSGLMrEPVVa3_ZZ0ATD1iGIgOUKZzhT-L1W9Y2BA2eDYUhcxyGIpFZf4MuvoNY6H4vB6dlHFQLrAR2ODdXUgSWuMF1qVlsMCmi3xuOrJqnVPa83c9P7Uf7zccsN1Ev0nQiu6348dnnEemOD_rY=) *(vertexaisearch.cloud.google.com)*
  > Intent to Ship: Local Network Access restrictions for Background Fetch Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Local Network A...
- [stackoverflow.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHWoDqUaH-H7kwJPtmOKjuj3BAkV1O0VLcXjPcy-UEOlGUr90ydrQ4M2ppyOqdqr2Y3pLxanduaVAr7dHR7yZYudn2sMl34Wwq-05FdG4XFfNeF_xz-gG7Dr9ICCZ2ay9Iz3i6llS_VF_h4v8sqjUSw0G3Ok5UWcDN9fs-vVZfbzGJ9vQTNBDaCR4T7uacjMzlT_7NXDKLcQj31PMSK9MOh) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Web Platform Feature  Chromium's implementation of the **Background Fetch API** is closing a security loophole by enforcing **Local Network Access (LNA)** restrictions and standard Fetch specification security policies.   Historica
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGrcJLFAiV8ubTap7qoMjLp2d4vpj4QJZlyIIXzrTTdFIKFyVGX_1tHLixlZYx9aA76Zih57m0KPIufHtJ2oMiRJHZUgNcVaK58p9fDF3HB6lHZcEaC0IVynoYo5R-tmdzGlqSehiuH2tzWYe8jc-QACUkcqLQU6_BB0rNPJO9g) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Web Platform Feature  Chromium's implementation of the **Background Fetch API** is closing a security loophole by enforcing **Local Network Access (LNA)** restrictions and standard Fetch specification security policies.   Historica
- [steeleobrienconsulting.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE8Y3lcdZnu0fOh4cl8cTRJIIKJEn9wDo9h4peTNM_3U6MS8ulArnP8_OXrvIUNIuzrmkdw_2t2GqmG6M_UiVBidRbqL7RWzOdoaV5UxvPY09PpKiq6fsQVF4NYKpf8QVGriwoA2HLviR748C_tS_iv3oaITBEnl6RNtA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Web Platform Feature  Chromium's implementation of the **Background Fetch API** is closing a security loophole by enforcing **Local Network Access (LNA)** restrictions and standard Fetch specification security policies.   Historica
- [chromeenterprise.google](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFCZjWOWfBHZgvO0agsj4cGfVwTHmgS_vbNyq5WpEbPzck2W79tIW1V_wbAA6P7eduF0iU8KIDzWy-kGhIFEyHCcjnPvS1RA4yUtKPfUySr-YfGLiTB1AXpmGFPS6XtE-wS8hZI1VEUxUf-8SRZ34d4iteU6TR6C2Zec77IKbKqZqnFfn0sFXaY_hMZBWmXL_8=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Web Platform Feature  Chromium's implementation of the **Background Fetch API** is closing a security loophole by enforcing **Local Network Access (LNA)** restrictions and standard Fetch specification security policies.   Historica
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEPyBj2-AsPefJCuovLRYkfLamPb98cmUB62Czv1gAyyZM882_ZgSPrj3umlvLwMJdQAYvUUCBXWqb9uHvSLcXYMDX0oZ60wzbMxQzz170x1qJe6xwdRDLRY5ZRbgrJO8emmcMhrDH1jlPgkxb-3IUXqCNH2nNROPp3sbgZ8LgmVeb7oT9biIdejCatiIREPyOT0cs8B4IVSrhsRN_zGC_Wn2CDfvUNXQVy4e-beA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Web Platform Feature  Chromium's implementation of the **Background Fetch API** is closing a security loophole by enforcing **Local Network Access (LNA)** restrictions and standard Fetch specification security policies.   Historica
- [Re: [blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17224.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; *Link to entry on the Chrome ... by Chrome Platform Status &gt;&gt; &lt;https://chromestatus.com&gt;. &gt;&gt; &gt; -- &gt; <strong>You received this message because you are subscribed to the Google Groups &gt; &quot;blink-dev&quot;...
- [[blink-dev] Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17180.html) *(mail-archive.com)*
  > This brings Chromium&#x27;s implementation into alignment with the intent of the Background Fetch spec (which delegates security policy enforcement to the Fetch spec). Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/featu...
- [[blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17193.html) *(mail-archive.com)*
  > &gt; &gt; *Link to entry on the Chrome ... generated by Chrome Platform Status &gt; &lt;https://chromestatus.com&gt;. &gt; -- <strong>You received this message because you are subscribed to the Google Groups &quot;blink-dev&quot; group</strong>....
- [Re: [blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17209.html) *(mail-archive.com)*
  > This prevents sites from bypassing LNA checks by using Background Fetch instead of regular Fetch. For enterprises, you can use existing Local Network Access enterprise policies in the same way you previously would have for regular Fetch API requests ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: [blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17224.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6225598451154944`)*
  > &gt;&gt; &gt;&gt; *Link to entry on the Chrome ... by Chrome Platform Status &gt;&gt; &lt;https://chromestatus.com&gt;. &gt;&gt; &gt; -- &gt; <strong>You received this message because you are subscribed to the Google Groups &gt; &quot;blink...
- [[blink-dev] Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17180.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6225598451154944`)*
  > This brings Chromium&#x27;s implementation into alignment with the intent of the Background Fetch spec (which delegates security policy enforcement to the Fetch spec). Link to entry on the Chrome Platform Status https://<strong>chromestatus...
- [[blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17193.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6225598451154944`)*
  > &gt; &gt; *Link to entry on the Chrome ... generated by Chrome Platform Status &gt; &lt;https://chromestatus.com&gt;. &gt; -- <strong>You received this message because you are subscribed to the Google Groups &quot;blink-dev&quot; group</str...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 33 result(s) found across 6 planned queries — **4 verified relevant**
  - `"chromestatus.com/feature/6225598451154944" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"wicg.github.io/background-fetch" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (6 returned)
  - `"Local Network Access restrictions for Background Fetch" API` — *Core feature API query* (3 returned)
  - `"Local Network Access restrictions for Background Fetch" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"wicg.github" OR "fetch.spec" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Local Network Access restrictions for Background Fetch" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 12 result(s) found — **6 verified relevant**
- **Dev.to Community Blogs:** 8 result(s) found — **10 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 2 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **2 verified relevant**
- **Web Platform Tests (wpt.fyi):** 18 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 8 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6225598451154944)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6225598451154944)
- [Specification](https://wicg.github.io/background-fetch)
- [Chromium Tracking Bug](https://crbug.com/455486148)
