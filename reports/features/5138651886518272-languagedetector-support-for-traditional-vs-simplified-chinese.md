# LanguageDetector support for Traditional vs. Simplified Chinese

> **Report Week:** 2026-W38 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Two new detectable language codes, "zh-Hant" and "zh-Hans" will be added. Detection results that previously returned "zh" will now return one of these new values.  While this is a developer-visible change it fits within the framework already present in the API for returning more specific language codes. For example ja vs. ja-Latn. This notice is being sent as a PSA for developers who have requested these more specific detection results.

## Ecosystem Status

- **Momentum:** High (270 points)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** LanguageDetector support for Traditional vs. Simplified Chinese is currently Enabled by default in Chrome 151. Verified ecosystem momentum is High with Contested / Concerns Raised standards alignment and mixed / skeptical developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser vendors have raised architectural, security, or privacy considerations in standards position trackers.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Intent to Extend Experiment: Translator API](https://groups.google.com/a/chromium.org/g/blink-dev/c/5DikAhbCv7M/m/BdQVdE6cAwAJ) *(groups.google.com)*
  > Intent to Extend Experiment: Translator API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Extend Experiment: Translator API 832 views Skip...
- [Chee Aun 🤔: "#PhanpySocial changelog ✨ 🎏 C…"](https://mastodon.social/@cheeaun/114149642985452634) *(mastodon.social · 2025-03-12T13:15:23)*
  > Chee Aun 🤔: "#PhanpySocial changelog ✨ 🎏 Change profile heade…" - Mastodon To use the Mastodon web application, please enable JavaScript. Alternatively, try one of the native apps for Mastodon for your platform.
- [LanguageDetector support for Traditional vs. Simplified Chinese - Chrome Platform Status](https://chromestatus.com/feature/5138651886518272) *(chromestatus.com)*
  > Chrome Platform Status
- [\[blink-dev\] Web-Facing Change PSA: LanguageDetector support for Traditional vs. Simplified Chinese](http://www.mail-archive.com/blink-dev@chromium.org/msg16759.html) *(mail-archive.com)*
  > [blink-dev] Web-Facing Change PSA: LanguageDetector support for Traditional vs. Simplified Chinese Skip to site navigation (Press enter) [blink-dev] Web-Facing Change PSA: LanguageDetector support for Traditional vs. Simplified Chinese Chromestatus F...
- [Traditional vs Simplified Chinese: Business Guide](https://circletranslations.com/blog/traditional-chinese-vs-simplified-chinese) *(circletranslations.com · 2026-05-10T12:00:00)*
  > Traditional vs Simplified Chinese: Business Guide --> English --> Main Menu &times; Home Translation services Industries Languages Pricing Careers About Us Blogs Contact us Apply as a freelancer --> info@circletranslations.lt --> +37064700734 Main Me...
- [Simplified or Traditional Chinese? The 2026 guide to choosing by market, boosting SEO, and dodging AI translation traps - Ulatus Translation Blog](https://www.ulatus.com/translation-blog/simplified-or-traditional-chinese-the-2026-guide-to-choosing-by-market-boosting-seo-and-dodging-ai-translation-traps) *(ulatus.com · 2026-01-10T00:00:00)*
  > Include tone guidance and market-specific legal/regulatory terminology. ... Store both variants in your TM. If converting between Simplified and Traditional, <strong>use a controlled conversion plus human editing to correct lexicon and legal terms</s...
- [Traditional vs Simplified Chinese: A localization guide](https://www.smartling.com/blog/traditional-vs-simplified-chinese) *(smartling.com · 2026-04-28T15:27:24)*
  > Smartling&#x27;s platform is designed to help businesses reach diverse Chinese-speaking audiences, whether they focus on Traditional or Simplified Chinese. With powerful tools that handle the full range of Chinese language needs, Smartling ensures yo...
- [Detecting Languages with Python: A Step-by-Step Guide - Methods Hub - GESIS](https://methodshub.gesis.org/library/tutorials/Language_Detection_Tutorial/1) *(methodshub.gesis.org)*
  > Learn how to detect the language of a text using Python · Language detection is a key tool in text analytics, enabling researchers to classify documents, messages, and other textual data into their respective languages. With the rise of social media ...
- [Traditional vs Simplified Chinese: Which One To Choose?](https://bayan-tech.com/blog/traditional-vs-simplified-chinese) *(bayan-tech.com · 2025-07-22T11:56:31)*
  > One of the most critical decisions you’ll face when localizing your content for Chinese-speaking audiences is choosing between the two main writing systems: traditional vs simplified Chinese. Unsure which writing form you should translate your conten...
- [Guide to Traditional vs Simplified Chinese for Translation](https://lsa.inc/traditional-chinese-vs-simplified-chinese-choosing-the-right-writing-system-for-translation) *(lsa.inc · 2026-07-30T20:29:16)*
  > Discover why Chinese writing relies on geography, not dialects — when to use Simplified vs. Traditional Chinese in translations.
- [--Language - Chinese Studies Advanced Guide - Research Guides at University of Minnesota Minneapolis](https://libguides.umn.edu/china_advanced/language) *(libguides.umn.edu · 2026-08-06T00:00:00)*
  > For modern Taiwan-style Chinese in traditional characters, CKIP may be a good Python option.
- [Traditional vs Simplified Chinese: Key Differences Explained](https://laoret.com/blog/simplified-and-traditional-chinese) *(laoret.com · 2026-01-15T15:15:59)*
  > Discover the differences between Traditional vs Simplified Chinese. Learn where each script is used, how locales work, and why expert translation matters.
- [【網頁教學】HTML5的lang要設成zh-TW或zh-Hant？-2026台北網頁設計推薦｜RWD響應式網站、購物車網站開發｜英傑銳網路數位](https://www.injerry.com/blog_view/125) *(injerry.com · 2016-12-21T02:38:00)*
  > 一般寫法是language標籤應全部小寫，region標籤全部大寫，script標籤只有首字母大寫。不同標籤之間用連字型大小-串聯起來。不過不管大小寫，目前瀏覽器都能處理，只不過可能是實際現況，用舊式的zh-TW相容性似乎要高一些。 ... 但因現在HTML多以UNICODE編碼，各國語系都能在同一頁面呈現，似乎很少人這樣處理。 · 以下是其他語言的標示法(照字母排序)。 ... RWD響應式網站RWD網站RWDAIAI網頁設計PHP8WebP台北網頁設計台北網站設計網頁設計網站架設購物商城購
- [Day09：小事之 HTML lang Attribute - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10194236) *(ithelp.ithome.com.tw)*
  > 在2007年的國際標準 ISO ...種，因此使用繁體中文的話，lang 應該要寫成 zh-Hant。 · 以 zh 為開頭的語言有(以下只有部分，其餘請上IANA registry查询）： · zh-Hans 簡體中文 zh-Hans-CN 大陸地區使用的簡體中文 zh-Hans-HK ...
- [How can a Progressive Web App support multilingual content and localization?](https://gtcsys.com/faq/how-can-a-progressive-web-app-support-multilingual-content-and-localization) *(gtcsys.com · 2023-08-02T10:34:46)*
  > Using the navigator.language property in JavaScript, PWAs can detect the user’s preferred language.
- [Progressive Web App (PWA) Development Ultimate Guide - Riseup Labs](https://riseuplabs.com/pwa-development-ultimate-guide) *(riseuplabs.com · 2025-12-10T05:24:22)*
  > Expanding Capabilities: The integration of these APIs has expanded the capabilities of PWAs, allowing them to perform tasks traditionally reserved for native applications. This has made PWAs more competitive in various application domains. Cross-Brow...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [translation-api/index.bs at main · webmachinelearning/translation-api](https://github.com/webmachinelearning/translation-api/blob/main/index.bs) *(github.com)* *(Cites: `https://webmachinelearning.github.io/translation-api/#language-detector-api`)*
  > translation-api/index.bs at main · webmachinelearning/translation-api · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refr...
- [Language Detector API · Issue #3717 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/3717) *(github.com · 2026-01-23T16:21:35)* *(Cites: `https://webmachinelearning.github.io/translation-api/#language-detector-api`)*
  > Language Detector API · Issue #3717 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh...
- [Intent to Extend Experiment: Translator API](https://groups.google.com/a/chromium.org/g/blink-dev/c/5DikAhbCv7M/m/BdQVdE6cAwAJ) *(groups.google.com)* *(Cites: `https://webmachinelearning.github.io/translation-api/#language-detector-api`)*
  > Intent to Extend Experiment: Translator API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Extend Experiment: Translator API 832 ...
- [Proxify Translator API, for clients who have does not support this feature yet · Issue #548 · translate-tools/linguist](https://github.com/translate-tools/linguist/issues/548) *(github.com · 2025-06-25T16:24:30)* *(Cites: `https://webmachinelearning.github.io/translation-api/#language-detector-api`)*
  > Issue · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You signed out in another tab or window. Reloa...
- [Chee Aun 🤔: "#PhanpySocial changelog ✨ 🎏 C…"](https://mastodon.social/@cheeaun/114149642985452634) *(mastodon.social · 2025-03-12T13:15:23)* *(Cites: `https://webmachinelearning.github.io/translation-api/#language-detector-api`)*
  > Chee Aun 🤔: "#PhanpySocial changelog ✨ 🎏 Change profile heade…" - Mastodon To use the Mastodon web application, please enable JavaScript. Alternatively, try one of the native apps for Mastodon for your platform.

## 📚 Platform Documentation & Specifications

- [translation-api/index.bs at main · webmachinelearning/translation-api](https://github.com/webmachinelearning/translation-api/blob/main/index.bs) *(github.com)*
- [Language Detector API · Issue #3717 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/3717) *(github.com)*
- [Proxify Translator API, for clients who have does not support this feature yet · Issue #548 · translate-tools/linguist](https://github.com/translate-tools/linguist/issues/548) *(github.com)*
- [Styling using language attributes](https://www.w3.org/International/questions/qa-css-lang/1000) *(w3.org)*
- [Language tags in HTML and XML](https://www.w3.org/International/articles/language-tags) *(w3.org)*
- [使用语言属性设置样式](https://www.w3.org/International/questions/qa-css-lang.zh-hans.html) *(w3.org)*
- [Attribute selectors - CSS - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Attribute_selectors) *(developer.mozilla.org)*
- [\[LanguageDetector API\] Feedback for the LanguageDetector API developer preview in Microsoft Edge · Issue #1274 · MicrosoftEdge/MSEdgeExplainers](https://github.com/MicrosoftEdge/MSEdgeExplainers/issues/1274) *(github.com)*
- [LanguageDetector](https://developer.mozilla.org/en-US/docs/Web/API/LanguageDetector) *(developer.mozilla.org)*
- [LanguageDetector: availability() static method](https://developer.mozilla.org/en-US/docs/Web/API/LanguageDetector/availability_static) *(developer.mozilla.org)*
- [LanguageDetector: detect() method](https://developer.mozilla.org/en-US/docs/Web/API/LanguageDetector/detect) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 38 result(s) found across 7 planned queries — **24 verified relevant**
  - `"chromestatus.com/feature/5138651886518272" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"webmachinelearning.github.io/translation-api" -site:webmachinelearning.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"LanguageDetector support for Traditional vs. Simplified Chinese" API` — *Core feature API query* (2 returned)
  - `"LanguageDetector support for Traditional vs. Simplified Chinese" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"zh-hant" OR "zh-hans" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"LanguageDetector support for Traditional vs. Simplified Chinese" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"LanguageDetector support for Traditional vs. Simplified Chinese" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 1 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5138651886518272)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5138651886518272)
- [Specification](https://webmachinelearning.github.io/translation-api/#language-detector-api)
- [Chromium Tracking Bug](https://crbug.com/519251262)
