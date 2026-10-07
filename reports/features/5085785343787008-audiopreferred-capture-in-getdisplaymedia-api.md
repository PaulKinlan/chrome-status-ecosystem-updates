# audioPreferred capture in getDisplayMedia API

> **Report Week:** 2026-W41 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Adds an audioPreference attribute to the DisplayMediaStreamOptions dictionary used in the getDisplayMedia API.   This hint allows web applications to signal to the UA that they prefer audio sharing along with video. This helps developers ensure that applications relying on audio capture work seamlessly.

## Ecosystem Status

- **Momentum:** High (290 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** audioPreferred capture in getDisplayMedia API is currently Enabled by default in Chrome 152. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Audio Selection Preference for getDisplayMedia](https://github.com/WebKit/standards-positions/issues/696) [open]
- **Mozilla:** [Audio Selection Preference for getDisplayMedia](https://github.com/mozilla/standards-positions/issues/1433) [open]

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFXr4y_9WiIntSt_4esNmU7HGzqqV-cX5Y7bsdFUqypS8_4mUFbu4dUnEQTZLxMhKrmIBI--Xg5lF3KoaglL3ntxNx9lGJrsUFeGHYlKPYel5Fyp9bfOfB0BdFmJztVOeJ7tSWu2S77) *(vertexaisearch.cloud.google.com)*
  > Chrome 152 beta | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – ...
- [addpipe.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFUJUlDzcvstTlMZ9HNkYuQyXYdv4bLu9p8yq8cwHDL2REdIrG8KvVtOBmZJ_EsJPdgtR4NjsVKjBmBw4gvd2AemnJwpl-Dcvj5UPQM2HL6kmR8Lo2NOZ0ZS9mueVR6M51OVuT1meBigmOC) *(vertexaisearch.cloud.google.com)*
  > Using getDisplayMedia to record the screen, system or browser tab audio, and the microphone | addpipe.com The Pipe Platform Achieves Security and Compliance Milestone with SOC 2 Type I Attestation. Learn More Home > Tech Demos > Using getDisplayMedia...
- [dev.to](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH8MGFGJNG6Yh5SkrBWatju29VvM-H5xgQkZ5nc6vEwggQ09tswyqRSTzoM6S9BkozSNuhQgAXT2hEc_AqQsFXYu2EaAxscr8NGqRbzgFGewv2sdJHZgTgUmlVPdwm3v7Y5im9JC6ITk5M4zh5tBs3ie2ghDKE2U1jr5ZrhlCoMp_ma-ll5eh9K2Xosqd1Op9KSKfrMduqtAaYHjKx-) *(vertexaisearch.cloud.google.com)*
  > I tried to capture system audio in the browser. Here&#39;s what I learned. - DEV Community Skip to content Powered by Algolia Log in Create account DEV Community Add reaction Like Unicorn Exploding Head Raised Hands Fire Jump to Comments Save Boost P...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHNoEb0mlXIPd943-XzqqM70XtBEyLz9NhODorzgW_eGR37L-Jn0ACXchUBDwSXNBo9csbmZzXd6wFWfr_-bX5CeiF76WSPo3p8juE3RHxBU7qlQgwElKVr5txTd8F2X4IM4yTWo5Gy3GoQWsp60IENKf9NTCcgZdFISPo=) *(vertexaisearch.cloud.google.com)*
  > Capturing audio-only · Issue #12 · w3c/mediacapture-screen-share-extensions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh ...
- [stackoverflow.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGoUlvpNbLd3bPmco6tEKA4Zntnb-ZJBfQltW0fOhmTzPeNUwYSzhujxQoEANi8hsMIt42SQ2Vcz2eV_vfn074-9om2rcWn3vgf7UIfeeIMhKH1dsHoZlVl0ksi8Re60uVMgcKJAawu_gZsbj4Bk9OKrei6G6RiNRnKlEhU6EhIHgVceVYoqO9RWropvYrSiYjEw7R4lWRlkIU_1Y1fOogW_2gtzA3TtA==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **"audioPreferred capture in `getDisplayMedia` API"** feature introduces the `audioPreference` option to the `DisplayMediaStreamOptions` dictionary passed to `navigator.mediaDevices.getDisplayMedia()`.   Historically, while w
- [htmlspecs.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE9r2qpxVnArq5wOeEudgu15gJwR9hs4YU60QfQO_P-ItkphZvvW8avOrAH-iaEZpwLB-GBJPT5JfC2IdIehi-OHBGFec1fe3U3bCXkjQswuMFZgYaPSZrSv9aWaRZQ) *(vertexaisearch.cloud.google.com)*
  > --> 画面キャプチャ --> 画面キャプチャ W3C ワーキングドラフト 2026年8月27日 この文書の詳細 このバージョン: https://www.w3.org/TR/2026/WD-screen-capture-20260827/ 最新の公開版: https://www.w3.org/TR/screen-capture/ 最新の編集者草案: https://w3c.github.io/mediacapture-screen-share/ 履歴: https://www.w3.org/s...
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE3NDqAkQt4XL0GMjzPFojDK0wK-NJXdimweoS5YjgampqE7DvnLj8Fs0xB_8ceuTCOfi9mYA_25H8tBEfBrhBA_DDVZCwlTz6PRWlIHWSKYelIR2nGwyPJIi-_5BpC8K8m2KJteoTTg98yfPWyu6xtc6B1tnybsA==) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHXT4SOkJomx5N7he8--Mk-guroXVN8NcHHXeX0i_5wEddHEB4b2iIZvf1fyLHuT83ZpOrIK1OsdmQFBmi6oSwv32v16SW2kmGbBW70wN-DG94Bz5NaT108CJMC) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **"audioPreferred capture in `getDisplayMedia` API"** feature introduces the `audioPreference` option to the `DisplayMediaStreamOptions` dictionary passed to `navigator.mediaDevices.getDisplayMedia()`.   Historically, while w
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH6RgfHaC-v8vgDQ2-iqqFYw6m3e_jDtrjDEzaL2lcJEFoebAsKQ_rDE8b8nRI3hXsqO4GRWjK2_bmrlPMm6ECva3_D5C0gRrHnjMrrubWkSH5v9eER9b7datI7iwaZ3Sat_cdhA4ItCc64TCc0cNTzuQszigZsUFa4pCiJX_Kr60EYcg==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **"audioPreferred capture in `getDisplayMedia` API"** feature introduces the `audioPreference` option to the `DisplayMediaStreamOptions` dictionary passed to `navigator.mediaDevices.getDisplayMedia()`.   Historically, while w
- [htmlspecs.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG01hUwlAEwSidRMv9Nu4BG7sDlPZ-4EUAcrvjilh9SlNcn_12tilrHuYvtiTHB_0kSP0-NV5_8TmsLrGw1w3oYV58Au9vwzx1BsAm43GOgvKuFz7EfmF-TnF69) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **"audioPreferred capture in `getDisplayMedia` API"** feature introduces the `audioPreference` option to the `DisplayMediaStreamOptions` dictionary passed to `navigator.mediaDevices.getDisplayMedia()`.   Historically, while w
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFDF4NaeNnqnjk1cc926X4Z0wy7u1W_zlurlSTTUrfa-0pEG7dn8C2fdGM7WXAnyEFctG0aMIRqpLOBCtD6dWUYM_Tou6GonsYmh6NSCfmlGXqrhwDzqJj2gPUrKAb-0rE-BItZENBU0kUH4B1zxQ==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **"audioPreferred capture in `getDisplayMedia` API"** feature introduces the `audioPreference` option to the `DisplayMediaStreamOptions` dictionary passed to `navigator.mediaDevices.getDisplayMedia()`.   Historically, while w
- [toehanger.shop](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH8uPqBp1dKYSNLkbRANDJryYdAdlxcVL8JGQtOk2IjvDxkOHFhbg4j_sTjzkab3CzlFLhtJmG86iqRNvrl85cfHqQY9AIiMGHoGpFGPl1oJ3RGs4Kn5Z8LWyylCEx2bB8NGUiKvAicm4Xavb7fAYrVO4sTtwoXai3juIrX6FcTyv-njGsTuCMpS6moEot8pR0-qGRp) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **"audioPreferred capture in `getDisplayMedia` API"** feature introduces the `audioPreference` option to the `DisplayMediaStreamOptions` dictionary passed to `navigator.mediaDevices.getDisplayMedia()`.   Historically, while w
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQErMb8NDpKb69Og3hnvaPrR-7TvlKM38PxgnY1ik0s-mZQgAgqbiFSpbrp-ejt3oLnIC-LjvxgxQXuIRJNti0U12GrmM8qQyhb7im7KsxOZvHbnLeLsAbw6joGp5PG95lXKMyfpHjUGELA_l80HDIHtEtNLH7Ef_yAj36k=) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **"audioPreferred capture in `getDisplayMedia` API"** feature introduces the `audioPreference` option to the `DisplayMediaStreamOptions` dictionary passed to `navigator.mediaDevices.getDisplayMedia()`.   Historically, while w
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGkp4zP27ubSFUAbGRXhT11i2IUzDNkSMo_77t68YXFWKAyx8P8pi2uO2KDHxXkTYB4czwpucEObetb5VsSxJhYzi2crF1x_7qcFp2K7uw1JI1Snpy4YvakgZB0lElcjA2754rprZg=) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **"audioPreferred capture in `getDisplayMedia` API"** feature introduces the `audioPreference` option to the `DisplayMediaStreamOptions` dictionary passed to `navigator.mediaDevices.getDisplayMedia()`.   Historically, while w
- [addpipe.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHmwsfXOL1Qp36uW4t5D9zyCKE-x365GYpJbr__lYWsHmzyEdMyx3n_FOH_2maJzbXUb7cqe-QWoF5c4hPELDA1Ksw_NYQc179223dJrXLdJRytrKGGclz9H49tGamGsWpnM5xXb3d1iY6-gYc96SBRa3m-ck5vSPPKjEzZs08ls19rtWddx8bLAvXzUgz2wF2SAxi17PNwC4ovy6vOoUcZhw==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **"audioPreferred capture in `getDisplayMedia` API"** feature introduces the `audioPreference` option to the `DisplayMediaStreamOptions` dictionary passed to `navigator.mediaDevices.getDisplayMedia()`.   Historically, while w
- [\[blink-dev\] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17031.html) *(mail-archive.com)*
  > &gt; *Contact emails* &gt; [email protected], [email protected] &gt; &gt; *Explainer* &gt; &gt; https://<strong>github.com/palak8669/mediacapture-screen-share-audio-capture/blob/palak8669-patch-1/audio_selection_explainer.md</strong> &gt; &gt; *Speci...
- [\[blink-dev\] Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17022.html) *(mail-archive.com)*
  > Explainer https://github.com/p...reen-share/#dom-displaymediastreamoptions-audioselection Summary <strong>Adds an audioPreference attribute to the DisplayMediaStreamOptions dictionary used in the getDisplayMedia API</strong>....
- [Re: \[blink-dev\] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17033.html) *(mail-archive.com)*
  > &gt; LGTM2 &gt; &gt; On Wed, Jul 22, 2026 at 8:27 AM Alex Russell &lt;[email protected]&gt; &gt; wrote: &gt; &gt;&gt; LGTM1 &gt;&gt; &gt;&gt; On Wednesday, July 22, 2026 at 5:29:55 AM UTC-7 Chromestatus wrote: &gt;&gt; &gt;&gt;&gt; *Contact emails* &...
- [audioPreferred capture in getDisplayMedia API](https://chromestatus.com/feature/5085785343787008) *(chromestatus.com · 2026-07-16T00:00:00)*
  > We cannot provide a description for this page right now
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=%22intent+to+ship%22) *(groups.google.com)*
  > <strong>audioPreference attribute to the DisplayMediaStreamOptions &gt;&gt;&gt; dictionary used in the getDisplayMedia API</strong>.
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > <strong>Adds an audioPreference attribute to the DisplayMediaStreamOptions dictionary used in navigator.mediaDevices.getDisplayMedia().</strong>
- [Re: \[blink-dev\] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17032.html) *(mail-archive.com)*
  > &gt; LGTM1 &gt; &gt; On Wednesday, July 22, 2026 at 5:29:55 AM UTC-7 Chromestatus wrote: &gt; &gt;&gt; *Contact emails* &gt;&gt; [email protected], [email protected] &gt;&gt; &gt;&gt; *Explainer* &gt;&gt; &gt;&gt; https://github.com/palak8669/mediaca...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17031.html) *(mail-archive.com)* *(Cites: `https://github.com/palak8669/mediacapture-screen-share-audio-capture/blob/palak8669-patch-1/audio_selection_explainer.md`)*
  > &gt; *Contact emails* &gt; [email protected], [email protected] &gt; &gt; *Explainer* &gt; &gt; https://<strong>github.com/palak8669/mediacapture-screen-share-audio-capture/blob/palak8669-patch-1/audio_selection_explainer.md</strong> &gt; &...
- [\[blink-dev\] Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17022.html) *(mail-archive.com)* *(Cites: `https://github.com/palak8669/mediacapture-screen-share-audio-capture/blob/palak8669-patch-1/audio_selection_explainer.md`)*
  > Explainer https://github.com/p...reen-share/#dom-displaymediastreamoptions-audioselection Summary <strong>Adds an audioPreference attribute to the DisplayMediaStreamOptions dictionary used in the getDisplayMedia API</strong>....
- [Re: \[blink-dev\] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17033.html) *(mail-archive.com)* *(Cites: `https://github.com/palak8669/mediacapture-screen-share-audio-capture/blob/palak8669-patch-1/audio_selection_explainer.md`)*
  > &gt; LGTM2 &gt; &gt; On Wed, Jul 22, 2026 at 8:27 AM Alex Russell &lt;[email protected]&gt; &gt; wrote: &gt; &gt;&gt; LGTM1 &gt;&gt; &gt;&gt; On Wednesday, July 22, 2026 at 5:29:55 AM UTC-7 Chromestatus wrote: &gt;&gt; &gt;&gt;&gt; *Contact...
- [Screen Capture](https://www.w3.org/TR/screen-capture) *(w3.org · 2026-08-27T00:00:00)* *(Cites: `https://w3c.github.io/mediacapture-screen-share/#dom-displaymediastreamoptions-audioselection`)*
  > https://<strong>w3c.github.io/mediacapture-screen-share</strong>/ History: https://www.w3.org/standards/history/screen-capture/ Commit history ·
- [content/files/en-us/web/api/screen\_capture\_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/screen_capture_api/index.md) *(github.com)* *(Cites: `https://w3c.github.io/mediacapture-screen-share/#dom-displaymediastreamoptions-audioselection`)*
  > https://<strong>w3c.github.io/mediacapture-screen-share</strong>/ https://screen-share.github.io/element-capture/ https://w3c.github.io/mediacapture-region/ https://w3c.github.io/mediacapture-surface-control/ {{DefaultAPISidebar(&quot;Scree...

## 📚 Platform Documentation & Specifications

- [Screen Capture](https://www.w3.org/TR/screen-capture) *(w3.org)*
- [content/files/en-us/web/api/screen\_capture\_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/screen_capture_api/index.md) *(github.com)*
- [feat: ask the browser to pre-tick the screen-share audio checkbox by fcatuhe · Pull Request #387 · murtaza-nasir/speakr](https://github.com/murtaza-nasir/speakr/pull/387) *(github.com)*
- [mediacapture-screen-share/index.html at gh-pages · w3c/mediacapture-screen-share](https://github.com/w3c/mediacapture-screen-share/blob/gh-pages/index.html) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 39 result(s) found across 12 planned queries — **11 verified relevant**
  - `"chromestatus.com/feature/5085785343787008" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/palak8669/mediacapture-screen-share-audio-capture/blob/palak8669-patch-1/audio_selection_explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"w3c.github.io/mediacapture-screen-share" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"audioPreferred capture in getDisplayMedia API" API` — *Core feature API query* (4 returned)
  - `"audioPreferred capture in getDisplayMedia API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"audioPreferred capture in getDisplayMedia API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (6 returned)
  - `"audioPreferred capture in getDisplayMedia API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"getDisplayMedia" ("audioPreference" OR "audioPreferred") example` — *Finds JavaScript code snippets and syntax usage showing how to configure audio preference options in getDisplayMedia calls.* (4 returned)
  - `"getDisplayMedia" ("audioPreference" OR "audioPreferred" OR "audioSelection") tutorial guide` — *Surfaces developer guides, tutorials, and technical blog posts explaining how to nudge screen capture prompts to include audio.* (7 returned)
  - `"getDisplayMedia" ("audioPreference" OR "audioPreferred") ("intent to ship" OR "intent to prototype" OR Chrome)` — *Tracks browser vendor announcements, release notes, and Chromium blink-dev threads on shipping audio preference attributes.* (4 returned)
  - `site:github.com/w3c/mediacapture-screen-share ("audioPreference" OR "audioPreferred" OR "audioSelection")` — *Locates specification issues, working group consensus discussions, and pull requests surrounding the audio preference standard.* (1 returned)
  - `"getDisplayMedia" screen share prefer audio ("audioPreference" OR "systemAudio")` — *Explores developer commentary and practical solutions for managing audio toggle defaults during screen capture workflows.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 15 result(s) found — **15 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 397 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5085785343787008)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5085785343787008)
- [Specification](https://w3c.github.io/mediacapture-screen-share/#dom-displaymediastreamoptions-audioselection)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/535514300)
