# Prefetch activation beacon

> **Report Week:** 2026-W38 | **Milestone:** Chrome 151 | **Category:** Origin trial

## Overview

The on-prefetch-activation  HTTP response header enables servers to specify a telemetry endpoint that the browser notifies when a prefetched resource is used for navigation. Developers gain a reliable signal to measure the precision and performance impact of their prefetch strategies.

### Motivation

The API is proposed for a reliable measurement of whether a prefetch page is activated. This allows precise visit statistics for the prefetched page without cache interference.

## Ecosystem Status

- **Momentum:** High (210 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Prefetch activation beacon is currently Origin trial in Chrome 151. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- In active Origin Trial in Chrome 151. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEKkk2ywS1ErKdOW0i0a9mTecunGqebQQ1ZyuFmcSZCMVSLOBUDve8uL-eLcJ9N6M5i0ocfvG7hvqwf_fazx81NJ5SlFjlkyBNY_kqcxmZbqhc7IhnB5ga1_kdEJEwI8d0cjB4d3n4SHg2vJ5WkrF7aor1msIuscvUb) *(vertexaisearch.cloud.google.com)*
  > GitHub - explainers-by-googlers/prefetch-activation-beacon: Reliable prefetch & prerender acitvation reporting regardless of the cache status. · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance se...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGjW7GmNVyr2aAxsy9fnsT41oqO_3-YO82dM9lWOA15Vidr7Koj_cJ8yWQFvHnigLJhgZdBn7v2TETRqUj9iVD_Pu6JuSUpqYmhSyGLLitnQV4w5pW7zDmePf4-Dxn4CZ1qWxsOP87f3yNu6-AFBKAatXnS0t6jn4YCIw==) *(vertexaisearch.cloud.google.com)*
  > GitHub - explainers-by-googlers/prefetch-activation-beacon: Reliable prefetch & prerender acitvation reporting regardless of the cache status. · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance se...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF5XsOgZMCXfMPI77KXKk8HmdKSAb3G018ZJalIAUfpzictyx0Q-lEsFPXQPkzLIl1mJzMASq_kkfpv6nafRxSBqRv5iBc14k8kZfXe3-UovxiX7KRZMkdyuqCIeV6kXnIj3ihKNeQkVoatHRGa-dTtmN6HtcEZbFLMxQ==) *(vertexaisearch.cloud.google.com)*
  > GitHub - explainers-by-googlers/prefetch-activation-beacon: Reliable prefetch & prerender acitvation reporting regardless of the cache status. · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance se...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQER0GeXW5NM5qwqcnsSSeBfncYs7GSV-uyXXlokiuSXSIhXLdMgMw-qqUvGASq8QHX9_81SQ-vv7Dbmit_mv6KUwhChT84h4YJgvtcOlXNMjs-pBMoX7vImeBWgSdbS2frN) *(vertexaisearch.cloud.google.com)*
  > Prefetch acitvation beacon · Issue #284 · WICG/proposals · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You s...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE7QnQ85c8eZGeWmXO66UwK1xY1pvmIE6bsySkcroCoRqhVHXfl85t1BxevnHg2nDNNRnt4dU08UVLLP5NBy-6TmgRxtdXYyvLDKgn6dLhA-lcKT91lDIRevtdIvz3jrfJJGtAXv-Gv) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [googlesource.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG5dTPyhVoy9dfzU7dK6-4nufzffkM7CWeNC7AFj8V24EPhb-3kfUmj_X7ev_zFjpOP_WgJqKPv9FctG2RCcTso-2BsOHIPLvA-7bsSHCpVUdTOzgU28Lp8bTJ4kHLIE23a039ltFC8yDeTMusOSJAuRo0bc2QqBxo5q8oUhXjGx53UXNdupcbdj42GAFBHjg==) *(vertexaisearch.cloud.google.com)*
  > 868cdb34af5a83a48b762e8895b79dff9a031bdd - chromium/src - Git at Google Sign in &#9681; Theme chromium / chromium / src / 868cdb34af5a83a48b762e8895b79dff9a031bdd commit 868cdb34af5a83a48b762e8895b79dff9a031bdd [ log ] author Jiacheng Guo <gjc@google...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEfSfaiu04Tv8eQYCS7ONQlS8gffd1EY__i8fNdQdh3MnYnLruvtmTGoOYfqSk4W0RbwuBNctE0Rc7Nw0VYJD6QOV07EmwwV_N7YPxXqwtT0pleMjxENaZCeFvqVoTnaiwILESo6H2cSNU=) *(vertexaisearch.cloud.google.com)*
  > Chrome 151 | Release notes | Chrome for Developers Passer au contenu principal / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภา...
- [digitalapplied.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFYfaOWRKzZHfAvjHBLwESTEJYZYyZTOZg70dqCaqQOaUN5PCR00EO0W3TLw3GPNtOlSIOTZGT-4w6eUwWIjJ_h8QSxLVPXqU43sSkAp_F-l2GQD27tGGrxzzRBizPrvzVXmtU5Q5MUJwZhDXDruUtyfp9Ts-u-bfOncOpf_NXSjPk=) *(vertexaisearch.cloud.google.com)*
  > Chrome 151 Stable: What Developers Should Note Development New Release 11 min read Published July 29, 2026 370 security fixes · macOS 12 support ends · two new SPA performance entry types Chrome 151 Hits Stable: What Developers Should Actually Note C...
- [googleusercontent.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQERggPFNZlh701WFfLOnbIp39QPxsqjLQLMIEacVQjzJAkR4FDdLSmKBhVHDHifpAkai87AmKukjEx0fagbHtPyqHIBBSKhMu4rcMuzISCIh6LsCAdEMDaT5n_kZRtXdpC_SunDw4sGoNX9jZ_ijX4A9uDUrcyaIFBf_WNADV4S) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **Prefetch Activation Beacon** is a declarative web platform capability designed to solve one of speculative loading’s biggest measurement hurdles: determining whether a prefetched document was ever actually used (acti
- [reddit.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFlobG_HY50Shq6UHhF46uER1WjlYjJbGxnOZX_7kMkuEANihEIHkrLSjGrOjrfTVVJQX2o8UQfTE5u8rtCIX_7kgk4NSfPK5nU0v4EwdLCQBtyp3DukRe_HDKV0FYc32_sbi_A9CTEbd7CdDQ3xn8gIifqxyg4o5AOTu5kn-bS0KxdMAGhHkRKJg733PCP2FxjN9bO7rf4) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **Prefetch Activation Beacon** is a declarative web platform capability designed to solve one of speculative loading’s biggest measurement hurdles: determining whether a prefetched document was ever actually used (acti
- [\[blink-dev\] Re: Intent to Experiment: Prefetch activation beacon](http://www.mail-archive.com/blink-dev@chromium.org/msg16963.html) *(mail-archive.com)*
  > On Wednesday, July 8, 2026 at 9:43:07 ...tivation-beacon &gt; &gt; *Summary* &gt; <strong>The on-prefetch-activation HTTP response header enables servers to specify &gt; a telemetry endpoint that the browser notifies when a prefetched resource &gt; i...
- [\[blink-dev\] Intent to Experiment: Prefetch activation beacon](http://www.mail-archive.com/blink-dev@chromium.org/msg16952.html) *(mail-archive.com)*
  > *Specification* https://github.com/explainers-by-googlers/prefetch-activation-beacon *Summary* The on-prefetch-activation HTTP response header <strong>enables servers to specify a telemetry endpoint that the browser notifies when a prefetched resourc...
- [\[blink-dev\] Intent to Prototype: Prefetch activation beacon](http://www.mail-archive.com/blink-dev@chromium.org/msg16520.html) *(mail-archive.com)*
  > *Contact emails* [email protected] *Explainer* https://<strong>github.com/explainers-by-googlers/prefetch-activation-beacon</strong>
- [Duplicate prefetch activation beacons sent during ...](https://issues.chromium.org/issues/524073966) *(issues.chromium.org · 2026-06-16T00:00:00)*
  > Sign in
- [Prefetch activation beacon](https://chromestatus.com/feature/5118934710878208) *(chromestatus.com · 2026-04-21T00:00:00)*
  > We cannot provide a description for this page right now
- [Igniting the Beacon: A Guide to Activating Beacons in Minecraft - Oreate AI Blog](https://www.oreateai.com/blog/igniting-the-beacon-a-guide-to-activating-beacons-in-minecraft/c184ec25072b08747ab4ab04ff868fa8) *(oreateai.com · 2025-12-24T08:24:03)*
  > Learn how to activate beacons in Minecraft with this comprehensive guide covering crafting requirements and activation steps for maximizing their benefits.
- [Mastering Minecraft Beacons: A Complete Guide to Activation and Strategic Use - Smart.DHgate – Trusted Buying Guides for Global Shoppers](https://smart.dhgate.com/mastering-minecraft-beacons-a-complete-guide-to-activation-and-strategic-use) *(smart.dhgate.com · 2025-11-11T00:00:00)*
  > If you’ve ever wondered how to bring a little extra power to your Minecraft adventures, beacons are the go-to game-changer. But, honestly, getting one up and
- [Two ways to prefetch: &lt;link&gt; tags and HTTP headers \| Articles \| web.dev](https://web.dev/codelab-two-ways-to-prefetch) *(web.dev · 2019-12-12T00:00:00)*
  > Learn how to speed up future navigations by prefetching resources.
- [Instant navigation experiences \| web.dev](https://web.dev/instant-navigation-experiences) *(web.dev · 2020-08-20T00:00:00)*
  > In the following section we&#x27;ll use Workbox to show how to implement different caching techniques in the service worker that can be used as a complement to &lt;link rel=&quot;prefetch&quot;&gt;, or even a replacement for it, by delegating this ta...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Experiment: Prefetch activation beacon](http://www.mail-archive.com/blink-dev@chromium.org/msg16963.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/prefetch-activation-beacon`)*
  > On Wednesday, July 8, 2026 at 9:43:07 ...tivation-beacon &gt; &gt; *Summary* &gt; <strong>The on-prefetch-activation HTTP response header enables servers to specify &gt; a telemetry endpoint that the browser notifies when a prefetched resou...
- [\[blink-dev\] Intent to Experiment: Prefetch activation beacon](http://www.mail-archive.com/blink-dev@chromium.org/msg16952.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/prefetch-activation-beacon`)*
  > *Specification* https://github.com/explainers-by-googlers/prefetch-activation-beacon *Summary* The on-prefetch-activation HTTP response header <strong>enables servers to specify a telemetry endpoint that the browser notifies when a prefetch...
- [\[blink-dev\] Intent to Prototype: Prefetch activation beacon](http://www.mail-archive.com/blink-dev@chromium.org/msg16520.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/prefetch-activation-beacon`)*
  > *Contact emails* [email protected] *Explainer* https://<strong>github.com/explainers-by-googlers/prefetch-activation-beacon</strong>

## 📚 Platform Documentation & Specifications

- [web.dev/src/site/content/en/blog/link-prefetch/index.md at main · GoogleChrome/web.dev](https://github.com/GoogleChrome/web.dev/blob/main/src/site/content/en/blog/link-prefetch/index.md) *(github.com)*
- [Prefetch](https://developer.mozilla.org/en-US/docs/Glossary/Prefetch) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 46 result(s) found across 11 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5118934710878208" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/explainers-by-googlers/prefetch-activation-beacon" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"Prefetch activation beacon" API` — *Core feature API query* (5 returned)
  - `"Prefetch activation beacon" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"on-prefetch-activation" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Prefetch activation beacon" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Prefetch activation beacon" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"on-prefetch-activation" header ("speculation rules" OR prefetch) telemetry` — *Find exact HTTP header syntax, response configurations, and telemetry endpoint formatting examples.* (1 returned)
  - `"Prefetch activation beacon" OR "on-prefetch-activation" (tutorial OR guide OR "web.dev")` — *Discover developer tutorials and performance guides detailing how to measure prefetch hit rate and precision.* (8 returned)
  - `"prefetch-activation-beacon" ("intent to ship" OR "intent to prototype" OR chromestatus OR WebKit)` — *Locate official browser vendor positions, Blink intent signals, and platform implementation status.* (1 returned)
  - `("Prefetch activation beacon" OR "on-prefetch-activation") (site:github.com OR site:news.ycombinator.com OR privacy)` — *Uncover developer discussions, standards body debates, and privacy feedback regarding activation beacons.* (5 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 1 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5118934710878208)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5118934710878208)
- [Specification](https://github.com/explainers-by-googlers/prefetch-activation-beacon)
- [Chromium Tracking Bug](https://b.corp.google.com/issues/499814382)
