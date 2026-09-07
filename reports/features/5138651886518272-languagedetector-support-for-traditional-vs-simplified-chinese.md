# LanguageDetector support for Traditional vs. Simplified Chinese

> **Report Week:** 2026-W37 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Two new detectable language codes, "zh-Hant" and "zh-Hans" will be added. Detection results that previously returned "zh" will now return one of these new values.

While this is a developer-visible change it fits within the framework already present in the API for returning more specific language codes. For example ja vs. ja-Latn. This notice is being sent as a PSA for developers who have requested these more specific detection results.

## Ecosystem Status

- **Momentum:** High (110 points)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** LanguageDetector support for Traditional vs. Simplified Chinese is currently Enabled by default in Chrome 151. Verified ecosystem momentum is High with Contested / Concerns Raised standards alignment and mixed / skeptical developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @tomayac: "> We have an open Pull Request to implement the proposed API into Mastodon, but we are waiting to have at least 2 browser engines support the proposal..."
- Standards Activity (Mozilla): Latest discussion from @sandstrom: "> We are negative on this proposal. While we plan to describe the reasons further in [our proposal](https://github.com/mozilla/explainers/blob/main/tr..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Web Translation API](https://github.com/WebKit/standards-positions/issues/339) [open]
- **Mozilla:** [Web Translation API](https://github.com/mozilla/standards-positions/issues/1015) [closed]

## 📰 Ecosystem Blogs & Articles

- [[blink-dev] Web-Facing Change PSA: LanguageDetector support for Traditional vs. Simplified Chinese](http://www.mail-archive.com/blink-dev@chromium.org/msg16759.html) *(mail-archive.com)*
  > Blink component Blink&gt;AI&gt;Translator &amp; Language Detector Web Feature ID languagedetector Risks Interoperability and Compatibility No interoperability risk as this is an incremental change to a shipping single-engine feature. The main compati...
- [Chrome Release 151](https://chromestatuslite.com/?version=151) *(chromestatuslite.com)*
  > <strong>Two new detectable language codes, &quot;zh-Hant&quot; and &quot;zh-Hans&quot; will be added</strong>. Detection results that previously returned &quot;zh&quot; will now return one of these new values. While this is a developer-visible change...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [translation-api/index.bs at main · webmachinelearning/translation-api](https://github.com/webmachinelearning/translation-api/blob/main/index.bs) *(github.com)* *(Cites: `https://webmachinelearning.github.io/translation-api/#language-detector-api`)*
  > translation-api/index.bs at main · webmachinelearning/translation-api · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refr...
- [Language Detector API · Issue #3717 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/3717) *(github.com · 2026-01-23T16:21:35)* *(Cites: `https://webmachinelearning.github.io/translation-api/#language-detector-api`)*
  > Language Detector API · Issue #3717 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh...

## 📚 Platform Documentation & Specifications

- [translation-api/index.bs at main · webmachinelearning/translation-api](https://github.com/webmachinelearning/translation-api/blob/main/index.bs) *(github.com)*
- [Language Detector API · Issue #3717 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/3717) *(github.com)*
- [translation-api/README.md at main · webmachinelearning/translation-api](https://github.com/webmachinelearning/translation-api/blob/main/README.md) *(github.com)*
- [GitHub - webmachinelearning/translation-api: 🌏 A proposal for translator and language detector APIs](https://github.com/webmachinelearning/translation-api) *(github.com)*
- [chromium/components/translate/core/language_detection/language_detection_util.cc at 2261cbe79fb40545cbeba8617c277685960ceb44 · chromium/chromium](https://github.com/chromium/chromium/blob/2261cbe79fb40545cbeba8617c277685960ceb44/components/translate/core/language_detection/language_detection_util.cc) *(github.com)*
- [language tag handling needs more attention · Issue #11 · webmachinelearning/translation-api](https://github.com/webmachinelearning/translation-api/issues/11) *(github.com)*
- [LanguageDetector](https://developer.mozilla.org/en-US/docs/Web/API/LanguageDetector) *(developer.mozilla.org)*
- [LanguageDetector: availability() static method](https://developer.mozilla.org/en-US/docs/Web/API/LanguageDetector/availability_static) *(developer.mozilla.org)*
- [LanguageDetector: detect() method](https://developer.mozilla.org/en-US/docs/Web/API/LanguageDetector/detect) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 17 result(s) found across 6 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/5138651886518272" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"webmachinelearning.github.io/translation-api" -site:webmachinelearning.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"LanguageDetector" OR "AILanguageDetector" ("zh-Hans" OR "zh-Hant") code OR example` — *Finds practical JavaScript code examples and WebIDL usage handling Traditional and Simplified Chinese detection results.* (8 returned)
  - `"LanguageDetector" ("zh-Hans" OR "zh-Hant") ("PSA" OR "Intent to Ship" OR "Chromium")` — *Discovers official platform announcements, Blink developer discussions, and PSA notifications regarding the breaking subtag change.* (3 returned)
  - `"Language Detector API" OR "LanguageDetector" ("Simplified Chinese" OR "Traditional Chinese") tutorial OR guide` — *Identifies blog posts, tutorials, and practical articles on implementing Chinese script differentiation in web applications.* (0 returned)
  - `site:github.com ("webmachinelearning/translation-api" OR "WICG") "LanguageDetector" ("zh-Hant" OR "zh-Hans")` — *Surfaces standards track issue discussions, specification PRs, and web developer feedback in the W3C/WICG repositories.* (3 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 10 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5138651886518272)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5138651886518272)
- [Specification](https://webmachinelearning.github.io/translation-api/#language-detector-api)
- [Chromium Tracking Bug](https://crbug.com/519251262)
