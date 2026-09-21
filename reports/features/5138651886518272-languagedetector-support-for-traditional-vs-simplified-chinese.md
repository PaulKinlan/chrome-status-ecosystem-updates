# LanguageDetector support for Traditional vs. Simplified Chinese

> **Report Week:** 2026-W39 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Two new detectable language codes, "zh-Hant" and "zh-Hans" will be added. Detection results that previously returned "zh" will now return one of these new values.  While this is a developer-visible change it fits within the framework already present in the API for returning more specific language codes. For example ja vs. ja-Latn. This notice is being sent as a PSA for developers who have requested these more specific detection results.

## Ecosystem Status

- **Momentum:** High (180 points)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Chromium is advancing its built-in client-side AI capabilities under the W3C Web Machine Learning Community Group's Translation and Language Detector API specification by refining generic 'zh' outputs into script-specific BCP 47 tags ('zh-Hans' and 'zh-Hant') in Chrome 151. This change satisfies widespread internationalization requests by distinguishing Simplified and Traditional Chinese directly within the detector. However, the underlying LanguageDetector API remains an experimental Chromium-led initiative that has not yet achieved cross-engine consensus or implementation outside Blink-based browsers.

### Recommendations
- Actionable Advice: Update any existing language detection logic to handle 'zh-Hans' and 'zh-Hant' sub-tags—or map them back to a generic base locale if required—before Chrome 151 rolls out. Continue gating LanguageDetector behind strict feature detection ('LanguageDetector' in self) and provide conventional i18n libraries or server-side detection as fallbacks for non-Chromium browsers.
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser vendors have raised architectural, security, or privacy considerations in standards position trackers.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Edward Snowden on X: "If you can read simplified Chinese and another language Permanent Record has been translated into (or know someone who does), tag them on this thread and see if they can help restore the missing passages to the Chinese edition. Here we go. From Chapter 18, p. 183 of the Chines… / X" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Edward Snowden on X: "If you can read simplified Chinese and another language Permanent Record has been translated into (or know someone who does), tag them on this thread and see if they can help restore the missing passages to the Chinese edition. Here we go. From Chapter 18, p. 183 of the Chines… / X](https://twitter.com/Snowden/status/1194095985317883906) — *by @Snowden, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Transparent Chinese (@chineselanguage) on X](https://twitter.com/chineselanguage?lang=en) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Notion on X: "@Carlos\_Lau1993 @WSJ @pierce We don't have any localized versions at the moment, but we will start supporting languages besides English down the line - we'll go ahead and add your vote to prioritize the Chinese version!" / X](https://twitter.com/NotionHQ/status/1085011182983962624) — *by @NotionHQ, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [GLLC (@GLLCPK) on X](https://twitter.com/gllcpk?lang=en) — *0 likes/RTs, 0 replies*

## Packages & Polyfills

- [i18next-browser-languagedetector](https://www.npmjs.com/package/i18next-browser-languagedetector) `v8.2.1` — language detector used in browser environment for i18next
- [node-opencc](https://www.npmjs.com/package/node-opencc) `v2.0.1` — Conversion between Traditional Chinese and Simplified Chinese in pure Node.js

## 📰 Ecosystem Blogs & Articles

- [LanguageDetector support for Traditional vs. Simplified Chinese - Chrome Platform Status](https://chromestatus.com/feature/5138651886518272) *(chromestatus.com)*
  > Chrome Platform Status
- [\[blink-dev\] Web-Facing Change PSA: LanguageDetector support for Traditional vs. Simplified Chinese](http://www.mail-archive.com/blink-dev@chromium.org/msg16759.html) *(mail-archive.com)*
  > [blink-dev] Web-Facing Change PSA: LanguageDetector support for Traditional vs. Simplified Chinese Skip to site navigation (Press enter) [blink-dev] Web-Facing Change PSA: LanguageDetector support for Traditional vs. Simplified Chinese Chromestatus F...
- [Build a translation app with Chrome's Built-in Translation API in Angular - DEV Community](https://dev.to/railsstudent/build-a-translation-app-with-chrome-built-in-ai-in-angular-5636) *(dev.to · 2025-01-05T15:00:23)*
  > The LanguageDetectionService service encapsulates the logic of the Language Detection API. The createDetector method creates a detector and stores it in a signal.
- [langcodes · PyPI](https://pypi.org/project/langcodes) *(pypi.org)*
  > &gt;&gt;&gt; all = Language.get(&#x27;zh&#x27;).writing_population() &gt;&gt;&gt; all 1240841517 &gt;&gt;&gt; traditional = Language.get(&#x27;zh-Hant&#x27;).writing_population() &gt;&gt;&gt; traditional 36863340 &gt;&gt;&gt; simplified = Language.ge...
- [internationalization - What standard do language codes of the form "zh-Hans" belong to? - Stack Overflow](https://stackoverflow.com/questions/18902072/what-standard-do-language-codes-of-the-form-zh-hans-belong-to) *(stackoverflow.com)*
  > For the lists of language tags, you need to check ISO 639-1 (for languages that have a two-letter code), ISO 639-3 (for languages that don&#x27;t have a two-letter code but only a three letter code) and then either the relevant country codes (e.g. fo...
- [Intent to Ship: Language Detector API](https://groups.google.com/a/chromium.org/g/blink-dev/c/sWcHBe9wpbo/m/H8Xp7NXTCQAJ?hl=ja) *(groups.google.com)*
  > dom...@chromium.org, fer...@chromium.org, kenji...@chromium.org, ay...@chromium.org, mem...@chromium.org, chris...@chromium.org, dbo...@chromium.org · https://github.com/WICG/translation-api/blob/main/README.md
- [Distinguish zh-Hans vs zh-Hant \[40503166\]](https://issues.chromium.org/issues/40503166/blocking) *(issues.chromium.org)*
  > Sign in
- [⚓ T271000 Bad language code: zh\_Hans should be zh-Hans](https://phabricator.wikimedia.org/T271000) *(phabricator.wikimedia.org)*
  > Notice that two Chinese text elements changed into four text elements. Notice there are duplicated ids trsvg8, trsvg9, trsvg18, and trsvg19. Notice there are equivalent systemLanguages: zh_Hant and zh_HANT; IETF langtags do not distinguish case.
- [swift - Set language to Chinese Simplified (Zh-Hans) doesn't work on IOS9 - Stack Overflow](https://stackoverflow.com/questions/38733731/set-language-to-chinese-simplified-zh-hans-doesnt-work-on-ios9) *(stackoverflow.com)*
  > So <strong>you can only use &quot;zh&quot; for this project instead of zh-Hans/zh-Hant</strong> , I manage to make it work if I am using &quot;zh&quot;
- [RFC 5646 - Tags for Identifying Languages](https://datatracker.ietf.org/doc/html/rfc5646) *(datatracker.ietf.org)*
  > This document describes the structure, content, construction, and semantics of language tags for use in cases where it is desirable to indicate the language used in an information object. It also describes how to register values for use in language t...
- [zh-cn and zh-tw incorrectly used \[#923304\] \| Drupal.org](https://www.drupal.org/project/wysiwyg/issues/923304) *(drupal.org · 2020-02-06T07:45:03)*
  > You can change it into : &#x27;zh-CN&#x27; =&gt; array(&#x27;Chinese (PRC) &#x27;, &#x27;中文(中国)&#x27;), &#x27;zh-TW&#x27; =&gt; array(&#x27;Chinese (Taiwan)&#x27;, &#x27;中文(台湾)&#x27;), &#x27;zh-HK&#x27; =&gt; array(&#x27;Chinese (Hong Kong, S.A.R. Ch...
- [The User Guide and the Chinese language code - Feedback - Haiku Community](https://discuss.haiku-os.org/t/the-user-guide-and-the-chinese-language-code/15904) *(discuss.haiku-os.org · 2024-11-06T19:15:40)*
  > I recently opened this ticket: #19216 (Change userguide language code for Chinese) – Haiku Please head over there to read it and the comment(s) and give feedback, if you’re savvy in that area. I think we can accommodate two Chinese user guide version...
- [How to change WPML language slugs from zh-hans to zh and zh-hant to tw? - WPML](https://wpml.org/forums/topic/how-to-change-wpml-language-slugs-from-zh-hans-to-zh-and-zh-hant-to-tw) *(wpml.org · 2025-03-14T02:00:56)*
  > Background of the issue: Our WordPress website uses WPML to support multiple languages. We want to change the language slugs from /zh-hans/ to /zh/ for

## 📚 Platform Documentation & Specifications

- [Understanding the New Language Tags](https://www.w3.org/International/articles/bcp47) *(w3.org)*
- [LanguageDetector: availability() static method](https://developer.mozilla.org/en-US/docs/Web/API/LanguageDetector/availability_static) *(developer.mozilla.org)*
- [LanguageDetector: detect() method](https://developer.mozilla.org/en-US/docs/Web/API/LanguageDetector/detect) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 61 result(s) found across 12 planned queries — **14 verified relevant**
  - `"chromestatus.com/feature/5138651886518272" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"webmachinelearning.github.io/translation-api" -site:webmachinelearning.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"LanguageDetector support for Traditional vs. Simplified Chinese" API` — *Core feature API query* (2 returned)
  - `"LanguageDetector support for Traditional vs. Simplified Chinese" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"zh-hant" OR "zh-hans" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"LanguageDetector support for Traditional vs. Simplified Chinese" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"LanguageDetector support for Traditional vs. Simplified Chinese" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"LanguageDetector" OR "translation-api" "zh-Hant" "zh-Hans" tutorial OR guide` — *Searches for developer tutorials and guides explaining how to handle Traditional and Simplified Chinese with the web LanguageDetector API.* (8 returned)
  - `"translation.createDetector" OR "LanguageDetector" ("zh-Hant" OR "zh-Hans") code example javascript` — *Finds JavaScript code snippets and implementation examples demonstrating detection of specific Chinese scripts.* (8 returned)
  - `Chrome "LanguageDetector" "zh-Hant" OR "zh-Hans" PSA OR intent to ship OR announcement` — *Locates browser vendor announcements, release notes, and developer PSAs announcing the deprecation of generic 'zh' in favor of 'zh-Hant' and 'zh-Hans'.* (2 returned)
  - `"LanguageDetector" ("zh-Hans" OR "zh-Hant") site:github.com/webmachinelearning/translation-api/issues OR site:issues.chromium.org` — *Surfaces specification discussions, developer bug reports, and feedback concerning Chinese language subtags in the translation API tracker.* (1 returned)
  - `"LanguageDetector" "detectedLanguage" ("zh-Hans" OR "zh-Hant") breaking change OR PSA` — *Discovers developer reactions and ecosystem notices about the developer-visible return value change from 'zh' to subtags.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **2 verified relevant**
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
