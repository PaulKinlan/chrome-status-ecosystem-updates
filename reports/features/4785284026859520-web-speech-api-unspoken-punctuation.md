# Web Speech API: Unspoken Punctuation

> **Report Week:** 2026-W37 | **Milestone:** Chrome 150 | **Category:** In developer trial (Behind a flag)

## Overview

Adds the unspokenPunctuation boolean attribute to the SpeechRecognition interface of the Web Speech API. When enabled (true), this attribute directs the speech recognition engine to automatically infer and insert punctuation marks (such as periods, commas, and question marks) based on the user's natural pauses, grammatical structure, and prosody, without requiring explicit spoken punctuation commands.

### Motivation

Currently, developers building voice-enabled web applications—such as casual dictation tools, automated transcription services, or conversational assistants—receive raw, unpunctuated text streams from the Web Speech API. To make this text readable and polished, developers are often forced to implement and maintain complex downstream NLP models to infer basic formatting.

Additionally, from an end-user perspective, having to explicitly dictate punctuation (e.g., stopping to say "comma" or "period") disrupts the natural flow of continuous speech and significantly increases cognitive load.

Introducing the unspokenPunctuation attribute solves this by moving automatic, prosody-aware punctuation directly into the browser's speech recognition engine. This provides an intuitive, conversational voice typing experience for users out-of-the-box, while dramatically lowering the barrier to entry for developers building voice-driven web apps.

## Ecosystem Status

- **Momentum:** Moderate (70 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The `unspokenPunctuation` property extends the Web Speech API's `SpeechRecognition` interface, allowing speech engines to automatically infer and insert punctuation based on natural cadence, pauses, and grammatical structure. Spearheaded by Chromium (in developer trial for Chrome 150 and targeting shipping in Chrome 151), the API resolves a longstanding pain point in speech recognition without requiring users to dictate explicit punctuation commands. Cross-engine consensus remains in early stages, with standards position requests currently pending review across Mozilla and WebKit.

### Recommendations
- Actionable Advice: Web development teams building dictation, transcription, or conversational AI experiences should treat `unspokenPunctuation` as a progressive enhancement by performing feature detection (`'unspokenPunctuation' in SpeechRecognition.prototype`) before enabling it. Maintain a fallback flow (or toggleable dictate-mode) for unsupported browsers until cross-vendor support broadens.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Web Speech API: Unspoken Punctuation](https://github.com/WebKit/standards-positions/issues/678) [open]
- **Mozilla:** [Web Speech API: Unspoken Punctuation](https://github.com/mozilla/standards-positions/issues/1416) [open]

## 📰 Ecosystem Blogs & Articles

- [[blink-dev] Intent to Ship: Web Speech API: Unspoken Punctuation](http://www.mail-archive.com/blink-dev@chromium.org/msg16639.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Web Speech API: Unspoken Punctuation Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Web Speech API: Unspoken Punctuation Chromestatus Thu, 28 May 2026 10:24:44 -0700 Contact emails [email&#160;protected]...
- [[blink-dev] Re: Intent to Ship: Web Speech API: Unspoken Punctuation](http://www.mail-archive.com/blink-dev@chromium.org/msg16662.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: Web Speech API: Unspoken Punctuation Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Web Speech API: Unspoken Punctuation Alex Russell Mon, 01 Jun 2026 11:38:48 -0700 This looks really useful; wer...
- [Chrome is getting better at understanding the breaks and punctations you never say out loud - Digital Trends](https://www.digitaltrends.com/cool-tech/chrome-is-getting-better-at-understanding-the-breaks-and-punctations-you-never-say-out-loud) *(digitaltrends.com · 2026-07-04T00:42:52)*
  > The update may sound minor at first glance, but it addresses one of the biggest frustrations with voice typing: speaking naturally often produces text that lacks punctuation unless users consciously dictate every punctuation mark. By teaching Chrome ...
- [[blink-dev] Re: Intent to Ship: Web Speech API: Unspoken Punctuation](http://www.mail-archive.com/blink-dev@chromium.org/msg16680.html) *(mail-archive.com)*
  > On Wed, Jun 3, 2026 at 8:14 AM Yoav Weiss (@Shopify) &lt;[email protected]&gt; wrote: &gt; &gt; &gt; On Thursday, May 28, 2026 at 7:24:52 PM UTC+2 Chromestatus wrote: &gt; &gt; *Contact emails* &gt; [email protected] &gt; &gt; *Explainer* &gt; https:...
- [Re: [blink-dev] Re: Intent to Ship: Web Speech API: Unspoken Punctuation](http://www.mail-archive.com/blink-dev@chromium.org/msg16719.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; On Wed, Jun 3, 2026 at 8:14 AM Yoav Weiss (@Shopify) &lt; &gt;&gt;&gt;&gt; [email protected]&gt; wrote: &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; On Thursday, May 28, 2026 at 7:2...
- [Experimental Chromium Web Platform Features | Polypane](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > <strong>Adds the unspokenPunctuation boolean attribute to the SpeechRecognition interface of the Web Speech API</strong>. When enabled (true), this attribute directs the speech recognition engine to automatically infer and insert punctuation marks (s...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Intent to Ship: Web Speech API: Unspoken Punctuation](http://www.mail-archive.com/blink-dev@chromium.org/msg16639.html) *(mail-archive.com)* *(Cites: `https://github.com/WebAudio/web-speech-api/blob/main/explainers/unspoken-punctuation.md`)*
  > [blink-dev] Intent to Ship: Web Speech API: Unspoken Punctuation Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Web Speech API: Unspoken Punctuation Chromestatus Thu, 28 May 2026 10:24:44 -0700 Contact emails [email&#160;...
- [[blink-dev] Re: Intent to Ship: Web Speech API: Unspoken Punctuation](http://www.mail-archive.com/blink-dev@chromium.org/msg16662.html) *(mail-archive.com)* *(Cites: `https://github.com/WebAudio/web-speech-api/blob/main/explainers/unspoken-punctuation.md`)*
  > [blink-dev] Re: Intent to Ship: Web Speech API: Unspoken Punctuation Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Web Speech API: Unspoken Punctuation Alex Russell Mon, 01 Jun 2026 11:38:48 -0700 This looks really u...

## 📚 Platform Documentation & Specifications

- [SpeechRecognition: unspokenPunctuation property](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/unspokenPunctuation) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 29 result(s) found across 7 planned queries — **6 verified relevant**
  - `"chromestatus.com/feature/4785284026859520" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WebAudio/web-speech-api/blob/main/explainers/unspoken-punctuation.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"webaudio.github.io/web-speech-api" -site:webaudio.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"unspokenPunctuation" "SpeechRecognition" (javascript OR webkitSpeechRecognition)` — *Finds real-world JavaScript code snippets, demo implementations, and WebIDL usage of the unspokenPunctuation property.* (8 returned)
  - `"Web Speech API" ("unspoken punctuation" OR unspokenPunctuation) (tutorial OR guide OR dictation)` — *Discovers developer tutorials, practical guides, and blog write-ups on implementing automatic punctuation in speech recognition.* (8 returned)
  - `("unspoken punctuation" OR "unspokenPunctuation") ("Intent to" OR "Chromium" OR "Chrome Platform Status" OR "WebKit")` — *Surfaces browser implementation announcements, Intent-to-Prototype/Ship threads, and vendor standards positions.* (4 returned)
  - `site:github.com ("unspoken punctuation" OR unspokenPunctuation) ("WebAudio/web-speech-api" OR "WICG" OR "WebKit/standards-positions")` — *Locates specification feedback, RFC discussions, pull requests, and standards debate within browser engine repositories.* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

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
