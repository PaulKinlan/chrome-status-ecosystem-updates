# Local Network Access restrictions for Background Fetch

> **Report Week:** 2026-W36 | **Milestone:** Chrome 154 | **Category:** Enabled by default

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

- **Momentum:** High (110 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Chromium 154 closes a security bypass by enforcing Local Network Access (LNA) restrictions on the Background Fetch API, ensuring service workers require appropriate permissions before initiating requests to private or loopback IP spaces. This change aligns Chromium's implementation with the Fetch and Background Fetch specifications, treating background network activity under standard security boundaries. Broad cross-browser interoperability remains limited because Background Fetch is primarily supported only in Chromium-based engines, though the general LNA security framework continues to advance across standards bodies.

### Recommendations
- Actionable Advice: Audit service worker implementations using Background Fetch to verify whether they target local network or loopback resources, and update applications to acquire the required LNA permissions or handle fetch errors defensively. Enterprise environments relying on legacy intranet workflows should configure policies like `LocalNetworkAccessAllowedForUrls` or `LocalNetworkAccessRestrictionsTemporaryOptOut` while migrating.
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

- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH4Xzpzso2UoA6yVFi74eWsDfEjJD1N6KgHBPsogVezt4Y0dfMQ5fRSjtDIY_Pz-aW_naWDy9xyoxpw1iKCj4M00Js95ov-4HiWNp_EPrmksQazcYaOjjTehiXq0f58m4TyoR8i6WAzlLczJRt4ZQi6wy7LmcuHb4hq80Nnzh2tf00De0pgfQ==) *(vertexaisearch.cloud.google.com)*
  > Intent to Ship: Local Network Access restrictions for Background Fetch Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Local Network A...
- [mozaic.fm](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGfgtYQXlfiPHlTRLxR5JKXDg7Wk0KjeO7Ngr7eJIPjugMXIlJYmblU3hv4-x-b_aLQQSudcmcVhDH0Z7IBZXkpxdcekLyZvJNCUdvnYCwIaGNFc_UxnEh3Kn3I05s71H7pgjgVmF1mlXeBYLZEJomA) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Local Network Access (LNA) restrictions for Background Fetch** enforces that any requests initiated via the [Background Fetch API](https://wicg.github.io/background-fetch/) are subject to the same Local Network Access se
- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHQWhi_fYPWTFvV7MUmuuR7at8AKpzt17NzdDTVMLlH64BnrtTdEzRpOktzUeBRY8SBQrKLvCIZAGYhihwnwo3lbEVrhM9LQoCJD5ZKoWdkyoVP4-i41pmdvA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Local Network Access (LNA) restrictions for Background Fetch** enforces that any requests initiated via the [Background Fetch API](https://wicg.github.io/background-fetch/) are subject to the same Local Network Access se
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHL64pv7D17QH_dSMCHCQ6DUXFT-w0im8BYWXsQTh-W-ZBNgk1U6gT9Yn2ws1dlrVvFL90fVaE4X6OU0UE44rycJO6yDjO7QzS5s34q_mtFmZvnqyLHlSp4rl2TPMpmJWzDB_-Tl-ovsWSqJQ8qhOIWP5hR1ojkXhhzERJUWboINrQwXEUlzuPJ37yek5yVUvFK5SjZ8_qPr3Iq-_HTGzXPmsWAVfP8MfvMtA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Local Network Access (LNA) restrictions for Background Fetch** enforces that any requests initiated via the [Background Fetch API](https://wicg.github.io/background-fetch/) are subject to the same Local Network Access se
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE6AgaMOgV4vLgMtjbwOnMLleuqzaqmY2xPNgjMLNaQU8FT3nJtHbVdRD5czlqZKwE3ouiUgA3XhMl_w3eKnwlZsljTSyuEy-anb6AUfpZFupxTF5Mh3Rn8UHvvSOSPoy1kgaX8848ETwSGvewyI1vUJnW6Pe84hJY=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Local Network Access (LNA) restrictions for Background Fetch** enforces that any requests initiated via the [Background Fetch API](https://wicg.github.io/background-fetch/) are subject to the same Local Network Access se
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
- **Google Search Grounding (gemini-3.7-flash):** 12 result(s) found — **5 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 8 result(s) found — **9 verified relevant**
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
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6225598451154944)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6225598451154944)
- [Specification](https://wicg.github.io/background-fetch)
- [Chromium Tracking Bug](https://crbug.com/455486148)
