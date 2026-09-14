# Web Speech API: Unspoken Punctuation

> **Report Week:** 2026-W38 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Adds the unspokenPunctuation boolean attribute to the SpeechRecognition interface of the Web Speech API. When enabled (true), this attribute directs the speech recognition engine to automatically infer and insert punctuation marks (such as periods, commas, and question marks) based on the user's natural pauses, grammatical structure, and prosody, without requiring explicit spoken punctuation commands.

### Motivation

Currently, developers building voice-enabled web applications—such as casual dictation tools, automated transcription services, or conversational assistants—receive raw, unpunctuated text streams from the Web Speech API. To make this text readable and polished, developers are often forced to implement and maintain complex downstream NLP models to infer basic formatting.

Additionally, from an end-user perspective, having to explicitly dictate punctuation (e.g., stopping to say "comma" or "period") disrupts the natural flow of continuous speech and significantly increases cognitive load.

Introducing the unspokenPunctuation attribute solves this by moving automatic, prosody-aware punctuation directly into the browser's speech recognition engine. This provides an intuitive, conversational voice typing experience for users out-of-the-box, while dramatically lowering the barrier to entry for developers building voice-driven web apps.

## Ecosystem Status

- **Momentum:** High (485 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Shipped enabled by default in Chrome 151, the \`unspokenPunctuation\` attribute extends \`SpeechRecognition\` to infer punctuation marks automatically from speech pauses and prosody rather than explicit verbal commands. Developer reception is enthusiastically positive for conversational assistants and casual voice typing because it eliminates the need for client- or cloud-side NLP punctuation restoration. However, cross-browser consensus is currently non-existent, leaving Chromium as the sole implementer while other engines have yet to formalize positions.

### Recommendations
- Actionable Advice: Adopt \`unspokenPunctuation\` as an optional progressive enhancement by feature-detecting \`'unspokenPunctuation' in recognition\` before toggling it. Ensure your text input pipeline retains fallback logic or secondary formatting for users accessing your application via Firefox or Safari.
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Web Speech API: Unspoken Punctuation](https://github.com/WebKit/standards-positions/issues/678) [open]
- **Mozilla:** [Web Speech API: Unspoken Punctuation](https://github.com/mozilla/standards-positions/issues/1416) [open]

## 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQErh115Qrp1s247vwv4NWCb2oFznMacVwQYqxiGIoeAEtUUbXUDie6MQ8T3O1AmsY8UhVyZIeQ47gvOM68Dnm0Q0EOyJnXdrYKV3iWyHOQLOOW9dHQ-ythppj7c9ZX4Ots7G3FAPEmsleuA8DZ577zQM-VH31Vxp3BeK8PYSTxhNZnYjjCMB7pJLhtpLrg=) *(vertexaisearch.cloud.google.com)*
  > web-speech-api/explainers/unspoken-punctuation.md at main · WebAudio/web-speech-api · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to ...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEb7OI4Z5hhF9wHg5un-A8NVRT-6kceoDp64NLX8RnUHwdjSoZ5mucj1G2kWqY1Spf42cqaLX5b469c1a-Z4ZhjL7WrMH8p2omawH_nxh8U4rn8jgVsWuH_jkZEbJf9HTRSgqe00hAc) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFWJj2DJ-ZDDH4TbWVM7w-OPCQoxICjAGy5grDB5TcXUoIKYJLgA2I0-J_Sl28uV1GKcPwZoWmtK-zq3gx00IM7id_6QRzu5XFSpE74Rmqty3hm5rUHiAe8ZB4N47SBA_Mab-ctIqMUphmAKov9EaBH3EveMBoFbWgz491ofDmDsYJF3uMxQDe3xx28SQ==) *(vertexaisearch.cloud.google.com)*
  > SpeechRecognition: unspokenPunctuation property - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs SpeechRecognition unspokenPunctuation Theme OS default Light Dark English (US) Remember language Learn more Deutsch Engli...
- [gigazine.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGXrWkWZdIUNLUVw09kXt_2X44-3k1QFHveIc9K6oAF2Ci83Hd06WeRE4MRHvi9cHwq82VT8bvIy_iJiV5bxpnbTSmgS1U0nehs7JEcX_2MRgTbZcdQouKGKQh89QRiBknZfxXnz5zy8i5FsDuJD4dd-g==) *(vertexaisearch.cloud.google.com)*
  > Google Chrome 151 stable version released, adding a Web API that makes it easy to stream text. - GIGAZINE Jul 29, 2026 10:27:00 Google Chrome 151 stable version released, adding a Web API that makes it easy to stream text. The latest stable version o...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFcNOhU6PUmli_sb1xfgS1Iylp5EHHHwf_Gy6wBDN5QqsDyqs_Qcv3-4ISCpTFp1OJcg9VZalA_BRBE7usoQ_7pOX_2mhw9KzQ9jRphijSIi-BeUnB9bnTIq49FnW1_Nok2sfA=) *(vertexaisearch.cloud.google.com)*
  > Chrome 151 | Release notes | Chrome for Developers Ir al contenido principal / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษา...
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG62n0AeDcBoLG_DPfiNx3Rog9REImI4LvOd8Y1Y09RAXxpxwiHWMwq24R5waHqAai7B-9HzMi2FKfBS9cLX9DpGWw9eD4jpM1IJAiccRCbxFfPSfDIceERUoFX7M-2hbi27L-EvCoC9j5_QRyd4KTzLRCKikTbwnAIxMETGBg7SyVd1GCbf8svRe0=) *(vertexaisearch.cloud.google.com)*
  > Convert speech to text with the SpeechRecognition API - Microsoft Edge Developer documentation | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take advantage o...
- [evanliu.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFeJMEikLyOp6JeppFvEqO9rCgR02AKbnHBTZwq8kU8zbl2dbHb_mYBq_HykgXwCkuWybJsY6ygYhY0bXuKCHRwPADajNRDljEQWpLjjl6ouaQ=) *(vertexaisearch.cloud.google.com)*
  > Web Speech API Playground Options Language (e.g., "en-US", "es-ES") Process Locally Continuous Interim Results Unspoken Punctuation Quality (None) Command Dictation Conversation Contextual Biasing Phrases Add phrases and a boost value (0.1-20.0) to i...
- [digitaltrends.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFumvq9T4sDzjRgLLBUwlE77ybfNrz1lN63DW5Il8BccG7S6XWChItAYSqAC5E-p4yxRm8rPqr9-kEYONW5njXlJshJSfA422I7WGZInpGEuWybeAEcFM7T779z25TTRZllvkZiTv-EKX2cRzgfQoKQPRV4yR0z98Jb77SST2XLgGeeHwgKr8_u8tDm2rqVuLIb5dT84z5SLb5FPnF98c45TayIec8KaU5nbwJdv3cOCouK7dNsBqZhVU-3) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **"Web Speech API: Unspoken Punctuation"** introduces a boolean attribute—`unspokenPunctuation`—to the `SpeechRecognition` interface.   * **The Problem:** Traditionally, the Web Speech API generated raw, unpunctuated text str
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGZvJ5r6hJ7FnE0ELlSL36aAyuQvT1HvHsBTPKUpUWsHEEEG-pLml5pAZU0tCBgGb-jrYy8E7WQdzx7jcRLFJPOSvz3l0sNKJDbBYJM0NRkKALh4dJ8i2vqjRdDof7MzJuAaCH_IJHplzhpYrA8nQ==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **"Web Speech API: Unspoken Punctuation"** introduces a boolean attribute—`unspokenPunctuation`—to the `SpeechRecognition` interface.   * **The Problem:** Traditionally, the Web Speech API generated raw, unpunctuated text str
- [basewatch.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH_IgFInGjHKL6MUcA9CfRSSwqwvkbNc1EUxYdrDhO95zB2nLAaYGBdTX0_OQhIEaoexOzu-XRILdlJPA7LgZSYIUSZiKgIzIlbb9I5wYSo8dbNTk5DuxLrcQVZfVALpsIwmSgi-Z0OZ-KuUIJuFlKbg0B7ivOCcyWZWnxzrMPOVFo=) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **"Web Speech API: Unspoken Punctuation"** introduces a boolean attribute—`unspokenPunctuation`—to the `SpeechRecognition` interface.   * **The Problem:** Traditionally, the Web Speech API generated raw, unpunctuated text str
- [polypane.app](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGrl4ffcQGj38wi7XvBp7o8TIdVCkk4uZIsNnt_8q1y3thGTfeYRsru7hV8CS9ZGI0o-iy8vimwhYwzAkfL1-qXATN27QdOTsjr9BCCJZZXk33dSFGxwFdenGk1kRPO25kIqBu9LijA_ztMi2MS) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **"Web Speech API: Unspoken Punctuation"** introduces a boolean attribute—`unspokenPunctuation`—to the `SpeechRecognition` interface.   * **The Problem:** Traditionally, the Web Speech API generated raw, unpunctuated text str
- [stackoverflow.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEAEzqo2BgLQV0Vldk-pM8l0aZdi19NK5TUmsO4MoO2uYQCjmZoiNtT6A1fP1xl9gR9SswO1UvLXKCGdypILnqCW1FCkMjFGGrHHQhUMs72ZYetxbMITEY_dUKJSww_9Z60Lhc5oQieIXzWqZXn7dW9l3sGefCtW8UoZec3rBdhPJMvX05FMYdJGM7U) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **"Web Speech API: Unspoken Punctuation"** introduces a boolean attribute—`unspokenPunctuation`—to the `SpeechRecognition` interface.   * **The Problem:** Traditionally, the Web Speech API generated raw, unpunctuated text str
- [digitalapplied.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGGyZEmNoILpxNPa83XpmR8WiB5T94S0xyLYfoefMDsf_rs5Y7p0p9vYXj7GOZGbVjlvyEx_zoB69jWZderuhnA-i79s6eYN3EMntHCDhmmH8QGQZFl-JSl5LaoqWO4GCny77EHKipVKriFGCUIXraN22bubbo8aSxMsBLFQsB58g==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **"Web Speech API: Unspoken Punctuation"** introduces a boolean attribute—`unspokenPunctuation`—to the `SpeechRecognition` interface.   * **The Problem:** Traditionally, the Web Speech API generated raw, unpunctuated text str
- [\[blink-dev\] Intent to Ship: Web Speech API: Unspoken Punctuation](http://www.mail-archive.com/blink-dev@chromium.org/msg16639.html) *(mail-archive.com)*
  > Explainer https://github.com/WebAudio/web-speech-api/blob/main/explainers/unspoken-punctuation.md Specification https://webaudio.github.io/web-speech-api Summary <strong>Adds the unspokenPunctuation boolean attribute to the SpeechRecognition interfac...
- [\[blink-dev\] Re: Intent to Ship: Web Speech API: Unspoken Punctuation](http://www.mail-archive.com/blink-dev@chromium.org/msg16665.html) *(mail-archive.com)*
  > &gt; &gt; Best, &gt; &gt; Alex &gt; &gt; On Thursday, ... &gt;&gt; https://webaudio.github.io/web-speech-api &gt;&gt; &gt;&gt; *Summary* &gt;&gt; <strong>Adds the unspokenPunctuation boolean attribute to the SpeechRecognition &gt;&gt; interface of th...
- [\[blink-dev\] Re: Intent to Ship: Web Speech API: Unspoken Punctuation](http://www.mail-archive.com/blink-dev@chromium.org/msg16675.html) *(mail-archive.com)*
  > *Contact emails* [email protected] ... *Specification* https://webaudio.github.io/web-speech-api *Summary* <strong>Adds the unspokenPunctuation boolean attribute to the SpeechRecognition interface of the Web Speech API</strong>....
- [Experimenting With speechSynthesis — Smashing Magazine](https://www.smashingmagazine.com/2017/02/experimenting-with-speechsynthesis) *(smashingmagazine.com · 2017-02-14T22:37:29)*
  > If you’re unfamiliar, this API gives you (the developer) the ability to voice-enable your website in two directions: <strong>listening to your users via the SpeechRecognition interface and talking back to them via the SpeechSynthesis interface</stron...
- [Speech to Text with Punctuation: A Practical Setup Guide \| Voice Control Pro](https://voicecontrol.pro/blog/speech-to-text-with-punctuation) *(voicecontrol.pro · 2026-08-31T09:57:58)*
  > Learn how to get accurate speech to text with punctuation. Covers setup, dictation commands, model choices, and fixes for common errors.
- [The Complete Guide to Punctuation & Capitalization in Speech-to-Text - Deepgram Blog ⚡️](https://deepgram.com/learn/complete-guide-punctuation-capitalization-speech-to-text) *(deepgram.com)*
  > Or adding extra periods at the end of your sentences? You&#x27;re not alone! Automatic speech recognition for punctuation and capitalization can be tricky. In this blog post, we&#x27;ll explore what punctuation and capitalization mean, how they&#x27;...
- [Tutorial: How to add voice interactivity to your site](https://mihai.sucan.ro/coding/how-to-add-voice) *(mihai.sucan.ro)*
  > Added a script and a CSS. Added a single XML event for activating the VoiceXML form on page load. The code presented here is extendable. For a local experiment I have added page-specific JavaScript actions, page-specific grammars, and page-specific V...
- [How I Added Voice Control to a Web App Using the SpeechRecognition API \| by CodeByUmar \| JavaScript in Plain English](https://javascript.plainenglish.io/how-i-added-voice-control-to-a-web-app-using-the-speechrecognition-api-e1eaf7890054?gi=78a05ec4eccd) *(javascript.plainenglish.io · 2025-11-06T02:23:08)*
  > How I Added Voice Control to a Web App Using the SpeechRecognition API Turning simple JavaScript into a real voice assistant, all inside the browser. Free Read No Paywall If you’re not a Medium …
- [\[blink-dev\] Re: Intent to Ship: Web Speech API: Unspoken Punctuation](http://www.mail-archive.com/blink-dev@chromium.org/msg16700.html) *(mail-archive.com)*
  > &gt; &gt; On Wed, Jun 3, 2026 at 8:14 ... &gt;&gt; https://webaudio.github.io/web-speech-api &gt;&gt; &gt;&gt; *Summary* &gt;&gt; <strong>Adds the unspokenPunctuation boolean attribute to the SpeechRecognition &gt;&gt; interface of the Web Speech API...
- [Re: \[blink-dev\] Re: Intent to Ship: Web Speech API: Unspoken Punctuation](http://www.mail-archive.com/blink-dev@chromium.org/msg16719.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; On Wed, Jun 3, 2026 at 8:14 AM Yoav Weiss (@Shopify) &lt; &gt;&gt;&gt;&gt; [email protected]&gt; wrote: &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; On Thursday, May 28, 2026 at 7:2...
- [Free Speech Recognition API - PWA Demo](https://progressier.com/pwa-capabilities/speech-recognition) *(progressier.com · 2026-08-11T00:00:00)*
  > <strong>Natively integrate the SpeechRecognition API into your PWA to recognize and transcribe spoken language into text, allowing for voice-based input and interactions</strong>.
- [Web Speech API \| 12 Days of Web](https://12daysofweb.dev/2021/speech-api) *(12daysofweb.dev · 2021-12-22T00:00:00)*
  > Then, <strong>to better be able to match against the transcript, we&#x27;ll transform it to lowercase, remove punctuation, and trim extra whitespace</strong>.
- [Python Speech Recognition - a Step-by-Step Guide \| Nick McCullum](https://www.nickmccullum.com/python-speech-recognition) *(nickmccullum.com)*
  > The recognizer class from the speech\_recognition module is used to convert our speech to text format. Based on the API used that the user selects, the Recognizer class has seven methods. The seven methods are described in the following table: ... In...
- [Speech Recognition Guide](https://help.honeywellaidc.com/Software/SpeechRecognition/Content/SpeechRecognitionHome.htm) *(help.honeywellaidc.com · 2025-10-17T00:00:00)*
  > Introduction to speech recognition · Speaker recognition without user training
- [The Ultimate Guide To Speech Recognition With Python – Real Python](https://realpython.com/python-speech-recognition) *(realpython.com · 2026-03-18T12:02:01)*
  > In this tutorial, you’ve seen how to <strong>install the SpeechRecognition package and use its Recognizer class to easily recognize speech from both a file—using record()—and microphone input—using listen().</strong>
- [An End-End Guide for Speech Recognition in Python](https://www.analyticsvidhya.com/blog/2021/12/guide-for-speech-recognition) *(analyticsvidhya.com · 2023-12-06T04:36:10)*
  > This end-end guide to speech recognition in Python is very informative and helpful for anyone looking to integrate speech recognition into their projects. It provides an overview of the various libraries available, including the popular SpeechRecogni...
- [Python Tutorial: Using SpeechRecognition for Voice Recognition - USAVPS.COM](https://usavps.com/blog/77700) *(usavps.com · 2024-10-24T22:34:27)*
  > It supports several speech engines and APIs, including Google Web Speech API, Microsoft Bing Voice Recognition, and more. This flexibility allows developers to choose the best option for their specific needs. To get started with SpeechRecognition, yo...
- [r/Python on Reddit: I've been playing around with speech recognition in Python, here's a code walkthrough of how to use the SpeechRecognition library](https://www.reddit.com/r/Python/comments/w3nzmt/ive_been_playing_around_with_speech_recognition) *(reddit.com · 2022-07-20T14:39:04)*
  > This post - Python Speech Recognition Introduction with SpeechRecognition summarizes what I learned working with the SpeechRecognition library via a code walkthrough. TL;DR if you don&#x27;t want to read the walkthrough - there&#x27;s a TON of backen...
- [Speech recognition in the browser using Web Speech API](https://www.assemblyai.com/blog/speech-recognition-javascript-web-speech-api) *(assemblyai.com)*
  > window.addEventListener(&quot;DOMContentLoaded&quot;, () =&gt; { const recordingButton = document.getElementById(&quot;recording-button&quot;); const transcriptionResult = document.getElementById(&quot;transcription-result&quot;); let isRecording = f...
- [Speech Recognition with JavaScript - DEV Community](https://dev.to/joelbonetr/speech-recognition-with-javascript-59g1) *(dev.to · 2022-08-25T12:44:21)*
  > /* Check whether the SpeechRecognition or the webkitSpeechRecognition API is available on window and reference it */ const recognitionSvc = window.SpeechRecognition || window.webkitSpeechRecognition; // Instantiate it const recognition = new recognit...
- [The Speech Recognition API in JavaScript: speechRecognition() - Desarrollolibre](https://www.desarrollolibre.net/blog/javascript/the-speech-recognition-api-in-javascript-speechrecognition) *(desarrollolibre.net)*
  > In this post we will take the first ... which, in other words, <strong>gives our applications the ability to recognize voice based on the configured language through the PC or mobile device microphone</strong>....
- [Voice driven web apps - Introduction to the Web Speech API \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/voice-driven-web-apps-introduction-to-the-web-speech-api) *(developer.chrome.com)*
  > (Since the API is still experimental, it&#x27;s currently vendor prefixed.) Lastly, we create the webkitSpeechRecognition object which provides the speech interface, and set some of its attributes and event handlers.
- [Speech Recognition Using the Web Speech API in JavaScript - DEV Community](https://dev.to/zolomohan/speech-recognition-using-the-web-speech-api-in-javascript-36b0) *(dev.to · 2021-01-17T15:22:25)*
  > Let&#x27;s create a webkitSpeechRecognition object. let speechRecognition = new webkitSpeechRecognition();
- [\[blink-dev\] Re: Intent to Ship: Web Speech API: Unspoken Punctuation](http://www.mail-archive.com/blink-dev@chromium.org/msg16680.html) *(mail-archive.com)*
  > On Wed, Jun 3, 2026 at 8:14 AM Yoav Weiss (@Shopify) &lt;[email protected]&gt; wrote: &gt; &gt; &gt; On Thursday, May 28, 2026 at 7:24:52 PM UTC+2 Chromestatus wrote: &gt; &gt; *Contact emails* &gt; [email protected] &gt; &gt; *Explainer* &gt; https:...
- [Chrome 151 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/151) *(developer.chrome.com · 2026-07-28T00:00:00)*
  > Tracking bug #514751946 | ChromeStatus.com entry | Spec · Adds the unspokenPunctuation boolean attribute to the SpeechRecognition interface of the Web Speech API.
- [Experimental Chromium Web Platform Features \| Polypane](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > <strong>Adds the unspokenPunctuation boolean attribute to the SpeechRecognition interface of the Web Speech API</strong>.
- [Chrome 151 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-151-beta) *(developer.chrome.com · 2026-07-03T00:00:00)*
  > <strong>Adds the unspokenPunctuation boolean attribute to SpeechRecognition</strong>.
- [Chrome Release 151](https://chromestatuslite.com) *(chromestatuslite.com)*
  > <strong>Adds the unspokenPunctuation boolean attribute to the SpeechRecognition interface of the Web Speech API</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: Web Speech API: Unspoken Punctuation](http://www.mail-archive.com/blink-dev@chromium.org/msg16639.html) *(mail-archive.com)* *(Cites: `https://github.com/WebAudio/web-speech-api/blob/main/explainers/unspoken-punctuation.md`)*
  > Explainer https://github.com/WebAudio/web-speech-api/blob/main/explainers/unspoken-punctuation.md Specification https://webaudio.github.io/web-speech-api Summary <strong>Adds the unspokenPunctuation boolean attribute to the SpeechRecognitio...
- [\[blink-dev\] Re: Intent to Ship: Web Speech API: Unspoken Punctuation](http://www.mail-archive.com/blink-dev@chromium.org/msg16665.html) *(mail-archive.com)* *(Cites: `https://github.com/WebAudio/web-speech-api/blob/main/explainers/unspoken-punctuation.md`)*
  > &gt; &gt; Best, &gt; &gt; Alex &gt; &gt; On Thursday, ... &gt;&gt; https://webaudio.github.io/web-speech-api &gt;&gt; &gt;&gt; *Summary* &gt;&gt; <strong>Adds the unspokenPunctuation boolean attribute to the SpeechRecognition &gt;&gt; inter...

## 📚 Platform Documentation & Specifications

- [Web Speech API: Unspoken Punctuation · Issue #1416 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1416) *(github.com)*
- [webkitspeechrecognition · GitHub Topics · GitHub](https://github.com/topics/webkitspeechrecognition) *(github.com)*
- [SpeechRecognition: unspokenPunctuation property](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/unspokenPunctuation) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 57 result(s) found across 12 planned queries — **30 verified relevant**
  - `"chromestatus.com/feature/4785284026859520" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WebAudio/web-speech-api/blob/main/explainers/unspoken-punctuation.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"webaudio.github.io/web-speech-api" -site:webaudio.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Web Speech API: Unspoken Punctuation" API` — *Core feature API query* (3 returned)
  - `"Web Speech API: Unspoken Punctuation" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"voice-enabled" OR "end-user" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Web Speech API: Unspoken Punctuation" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Web Speech API: Unspoken Punctuation" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"unspokenPunctuation" "SpeechRecognition" (tutorial OR guide OR "how to")` — *Discovers practical developer guides and tutorials explaining how to use automatic unspoken punctuation with the Web Speech API.* (8 returned)
  - `"SpeechRecognition" "unspokenPunctuation" (javascript OR webidl OR "webkitSpeechRecognition")` — *Finds code samples, interface definitions, and direct JavaScript implementation snippets setting unspokenPunctuation on speech instances.* (8 returned)
  - `"unspokenPunctuation" ("intent to" OR chromestatus OR "standards-positions" OR "web-platform-tests")` — *Tracks browser vendor implementation status, standards positions, and Intent to Ship/Prototype threads.* (8 returned)
  - `"unspoken punctuation" OR "unspokenPunctuation" site:github.com/WebAudio/web-speech-api` — *Locates specification discussions, feedback, and issue triage within the official Web Speech API repository.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **13 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 0 result(s) found — **2 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 351 item(s) inspected

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
