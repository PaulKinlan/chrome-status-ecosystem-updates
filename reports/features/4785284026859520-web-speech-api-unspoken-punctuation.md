# Web Speech API: Unspoken Punctuation

> **Report Week:** 2026-W39 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Adds the unspokenPunctuation boolean attribute to the SpeechRecognition interface of the Web Speech API. When enabled (true), this attribute directs the speech recognition engine to automatically infer and insert punctuation marks (such as periods, commas, and question marks) based on the user's natural pauses, grammatical structure, and prosody, without requiring explicit spoken punctuation commands.

### Motivation

Currently, developers building voice-enabled web applications—such as casual dictation tools, automated transcription services, or conversational assistants—receive raw, unpunctuated text streams from the Web Speech API. To make this text readable and polished, developers are often forced to implement and maintain complex downstream NLP models to infer basic formatting.

Additionally, from an end-user perspective, having to explicitly dictate punctuation (e.g., stopping to say "comma" or "period") disrupts the natural flow of continuous speech and significantly increases cognitive load.

Introducing the unspokenPunctuation attribute solves this by moving automatic, prosody-aware punctuation directly into the browser's speech recognition engine. This provides an intuitive, conversational voice typing experience for users out-of-the-box, while dramatically lowering the barrier to entry for developers building voice-driven web apps.

## Ecosystem Status

- **Momentum:** High (205 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Shipping enabled by default in Chrome 151, the 'unspokenPunctuation' attribute allows the SpeechRecognition engine to infer and insert punctuation based on prosody and pauses without explicit user commands. The addition addresses a major friction point in voice typing and conversational AI apps, saving developers from maintaining bespoke downstream punctuation models. However, cross-engine consensus is incomplete, with WebKit and Gecko positions still pending review while Chromium pushes ahead.

### Recommendations
- Actionable Advice: Adopt the property strictly as a progressive enhancement by checking \`if ('unspokenPunctuation' in recognition)\` before setting it. Maintain client- or server-side NLP punctuation fallbacks for Safari, Firefox, and unsupporting runtimes where text streams will continue to arrive unpunctuated.
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "The Independent on X: "Our best punctuation mark is dying out; people need to learn how to use it https://t.co/OBj89AquDc" / X" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [Web Speech API: Unspoken Punctuation](https://github.com/WebKit/standards-positions/issues/678) [open]
- **Mozilla:** [Web Speech API: Unspoken Punctuation](https://github.com/mozilla/standards-positions/issues/1416) [open]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [The Independent on X: "Our best punctuation mark is dying out; people need to learn how to use it https://t.co/OBj89AquDc" / X](https://twitter.com/Independent/status/1924787872218906939) — *by @Independent, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [The Punctuation Show (@punctuationshow) · X](https://twitter.com/punctuationshow) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Laura Kirby-McIntosh - New Punctuation Marks for ...](https://twitter.com/toshlawkidz/status/304817116270444545) — *by @toshlawkidz, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQES5QovPS13qPheeYTF9VwBgfiyqdcDQ4ql9ehOzEvU1MnRmVzNRPeLeq5Fi8Ug09faqL8qL-6DwnxyegQX0xMOGPLZUUFZ0fmkoCK6x8FWCF7jrEVBGXCMz-Uv6pf40x-q3piByQaKDFmNZA==) *(vertexaisearch.cloud.google.com)*
  > Speech recognition parameter for automatic/unspoken punctuation · Issue #187 · WebAudio/web-speech-api · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQExWAsFGoTqoZwGliT3EdQHiPgBgbMKHvXmClFc7hY1qx-Xcq5Kn4RwUMfWPn9KkVawNU9hXC2fYwOMJS5P8LtWwOaInQl9DuPH1QdNSXRm0DGGqMGWFwLEz3nkLgzdHsIGT05vCfqB-Y-vfCc2rg9FlRPUz-t3FMTMj6gb9TF5YVJmO3FgZbmQcDPlnA==) *(vertexaisearch.cloud.google.com)*
  > SpeechRecognition: unspokenPunctuation property - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs SpeechRecognition unspokenPunctuation Theme OS default Light Dark English (US) Remember language Learn more Deutsch Engli...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQECpwKZVl2WTTOrPZisfl37xUq5jLhKovqYY9dLyCRlf7OgcDlLOLNrg9SYNePqP4eZH7E8u5AfELQ-4ORipjFQRtYIr5IOsmRD_ppgdaVq4l88V5pGpQ_rVPPGum1LPVGko3VgWoSF) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [digitaltrends.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQExGWuLE4qxhtCT61cUFRE5bd-yCkRPyrVWqJG9016KEmqSttY4WaEzkXMwIsZvcCkyQ6HkwsaxM_e-091SeLnKBqvLDNWTUsSW_7ugrZKkDJDa5y4MUpLyEd5Y3V7tz1kr2IWVjSBsBBK5wRp--eVEn6NhfCh5DeheC-PqCGfMBDi6V_NTSdWPaWK5NTKWNcOM9ta5YQUp4hHHz09mBTbQNkxPtPL4LOnSQnrulPGMYhdXtlw-uBTV0tyE) *(vertexaisearch.cloud.google.com)*
  > ### Summary of "Web Speech API: Unspoken Punctuation"  The `unspokenPunctuation` attribute is a boolean property introduced to the Web Speech API’s `SpeechRecognition` interface.   * **Default Behavior (`false`)**: Speech-to-text engines output raw,
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH5vAg08r7xkl46BDnKGxKLh3F2LQ4lVQOG22QKBzJms5pT6ZSU3DDtFNUkrkQmG1tYKHIZwBMYXMa1C2ScgPVVt8naEr2g5507K9TOMS9iTKbBR05Has_J3LAvQvluB2NZSyfn_r-UdLLhPvDqhLYjqW7oJ9BtjpyPxWuHJIqrNwqq) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFMyHQCFiJ_CkGsEFE4hSoTbJENWsACPr31rNkam39lK31FH27nqO4Hx75WcP-MUC2UnKpaUOLPYhnQPR9Yhs9zGdqWl1-kPeNvyRJbCx1FIiza_aCXfK2te79e-pbKct3_4M8rterT_NeG64XgZA==) *(vertexaisearch.cloud.google.com)*
  > Web Speech API: Unspoken Punctuation · Issue #678 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refre...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEP8XOe94LkbRYJPbqyzSAzQs2gDUwh7LBzZ6OlxS059VHCMcIfAMR9vblxphmT3VIw9T5VIAbVrGqio7Vy1aiSW3hrv3KO_VxhxsGwEHHZaLKKPlVyUz-vs-LK_fG6qMR7TokNnlg82gXVD0ERYQvA) *(vertexaisearch.cloud.google.com)*
  > Web Speech API: Unspoken Punctuation · Issue #1416 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to ref...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGQvHP-C0BZGpHVnVoXO920lOyqimw5BRf6oIMtM6ATPcZir8j7EVrZ60JVhOldIAVQDTXbve13_MlfjGs8vQoELNV1EzkThGEk4IiPDafgnIXItQIY4QLKiAVkc2fwLNKRwCy8j91kDCg6IZCeczJyvzWy7mJMjVw=) *(vertexaisearch.cloud.google.com)*
  > SpeechRecognition - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs SpeechRecognition Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 Русский SpeechRecognition Lim...
- [\[blink-dev\] Intent to Ship: Web Speech API: Unspoken Punctuation](http://www.mail-archive.com/blink-dev@chromium.org/msg16639.html) *(mail-archive.com)*
  > Explainer https://github.com/WebAudio/web-speech-api/blob/main/explainers/unspoken-punctuation.md Specification https://webaudio.github.io/web-speech-api Summary <strong>Adds the unspokenPunctuation boolean attribute to the SpeechRecognition interfac...
- [\[blink-dev\] Re: Intent to Ship: Web Speech API: Unspoken Punctuation](http://www.mail-archive.com/blink-dev@chromium.org/msg16662.html) *(mail-archive.com)*
  > Best, Alex On Thursday, May 28, ... &gt; https://webaudio.github.io/web-speech-api &gt; &gt; *Summary* &gt; <strong>Adds the unspokenPunctuation boolean attribute to the SpeechRecognition &gt; interface of the Web Speech API</strong>....
- [\[blink-dev\] Re: Intent to Ship: Web Speech API: Unspoken Punctuation](http://www.mail-archive.com/blink-dev@chromium.org/msg16675.html) *(mail-archive.com)*
  > *Contact emails* [email protected] ... *Specification* https://webaudio.github.io/web-speech-api *Summary* <strong>Adds the unspokenPunctuation boolean attribute to the SpeechRecognition interface of the Web Speech API</strong>....
- [Speech to Text with Punctuation: A Practical Setup Guide \| Voice Control Pro](https://voicecontrol.pro/blog/speech-to-text-with-punctuation) *(voicecontrol.pro · 2026-08-31T09:57:58)*
  > Learn how to get accurate speech to text with punctuation. Covers setup, dictation commands, model choices, and fixes for common errors.
- [\[blink-dev\] Re: Intent to Ship: Web Speech API: Unspoken Punctuation](http://www.mail-archive.com/blink-dev@chromium.org/msg16700.html) *(mail-archive.com)*
  > &gt; &gt; On Wed, Jun 3, 2026 at 8:14 ... &gt;&gt; https://webaudio.github.io/web-speech-api &gt;&gt; &gt;&gt; *Summary* &gt;&gt; <strong>Adds the unspokenPunctuation boolean attribute to the SpeechRecognition &gt;&gt; interface of the Web Speech API...
- [Re: \[blink-dev\] Re: Intent to Ship: Web Speech API: Unspoken Punctuation](http://www.mail-archive.com/blink-dev@chromium.org/msg16719.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; On Wed, Jun 3, 2026 at 8:14 AM Yoav Weiss (@Shopify) &lt; &gt;&gt;&gt;&gt; [email protected]&gt; wrote: &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; On Thursday, May 28, 2026 at 7:2...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: Web Speech API: Unspoken Punctuation](http://www.mail-archive.com/blink-dev@chromium.org/msg16639.html) *(mail-archive.com)* *(Cites: `https://github.com/WebAudio/web-speech-api/blob/main/explainers/unspoken-punctuation.md`)*
  > Explainer https://github.com/WebAudio/web-speech-api/blob/main/explainers/unspoken-punctuation.md Specification https://webaudio.github.io/web-speech-api Summary <strong>Adds the unspokenPunctuation boolean attribute to the SpeechRecognitio...
- [\[blink-dev\] Re: Intent to Ship: Web Speech API: Unspoken Punctuation](http://www.mail-archive.com/blink-dev@chromium.org/msg16662.html) *(mail-archive.com)* *(Cites: `https://github.com/WebAudio/web-speech-api/blob/main/explainers/unspoken-punctuation.md`)*
  > Best, Alex On Thursday, May 28, ... &gt; https://webaudio.github.io/web-speech-api &gt; &gt; *Summary* &gt; <strong>Adds the unspokenPunctuation boolean attribute to the SpeechRecognition &gt; interface of the Web Speech API</strong>....

## 📚 Platform Documentation & Specifications

- [Web Speech API: Unspoken Punctuation · Issue #1416 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1416) *(github.com)*
- [SpeechRecognition: unspokenPunctuation property](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/unspokenPunctuation) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 37 result(s) found across 8 planned queries — **7 verified relevant**
  - `"chromestatus.com/feature/4785284026859520" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WebAudio/web-speech-api/blob/main/explainers/unspoken-punctuation.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"webaudio.github.io/web-speech-api" -site:webaudio.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Web Speech API: Unspoken Punctuation" API` — *Core feature API query* (3 returned)
  - `"Web Speech API: Unspoken Punctuation" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"voice-enabled" OR "end-user" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Web Speech API: Unspoken Punctuation" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Web Speech API: Unspoken Punctuation" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 8 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 352 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4785284026859520)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4785284026859520)
- [Specification](https://webaudio.github.io/web-speech-api)
- [Chromium Tracking Bug](https://bugs.chromium.org/b/514764702)
