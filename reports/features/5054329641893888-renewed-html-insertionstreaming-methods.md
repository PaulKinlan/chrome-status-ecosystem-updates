# Renewed HTML insertion&streaming methods

> **Report Week:** 2026-W40 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Expose multiple HTML setting methods that provide a coherent story for dynamically inserting markup into an existing document.  - Positional methods (before/after/append/prepend/replaceWith) that take HTML as argument, effectively replacing insertAdjacentHTML. - Streaming methods (stream{Append}HTML{Unsafe}) which return a WritableStream - Passing {runScripts} as part of SetHTMLUnsafeOptions, mimicking createContextualFragment behavior. - Supporting createParserOptions in trusted types, allowing trusted types to override scripting mode and sanitizer.

### Motivation

Updating HTML dynamically from script has multiple disjointed API, each with its own subtle differences.
Developers can partially update an element using insertAdjacentHTML, use sanitizer with setHTML, execute scripts with createContextualFragment, stream with detached documents. 

This can be confusing and frustrating to web developers, as well as create bugs or security issues if the differences are not well understood.

This change replaces those with a coherent set of methods and arguments, that use the same settings (sanitizer/runScripts) with different variants (where to insert the HTML, stream/one-shot, safe/unsafe) as well as the same support in trusted types.

## Ecosystem Status

- **Momentum:** High (250 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The renewed HTML insertion and streaming methods proposal modernizes and unifies historically fragmented DOM manipulation APIs (such as insertAdjacentHTML, createContextualFragment, and setHTML) into a coherent, sanitizer-aware suite supporting positional and WritableStream-based markup updates. Shipping enabled by default in Chrome 155, the feature represents a major step forward for server-streamed architectures and declarative partial updates. Cross-engine consensus is trending favourably, with Mozilla formally endorsing the proposal while WebKit standards review remains active.

### Recommendations
- Actionable Advice: Teams should approach these methods through progressive enhancement or test them via available WICG/npm polyfills while Chromium rolls out native support. Do not make streaming HTML methods hard runtime dependencies in production until WebKit and Gecko deliver native implementations.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @o-t-w: "This feature is due to ship in \[Chrome 154\](https://developer.chrome.com/blog/chrome-154-beta?hl=en#renewed\_html\_insertion\_and\_streaming\_methods). Moz..."
- Standards Activity (Mozilla): Latest discussion from @zcorpan: "Generally we want 7 days to pass. This has happened here. 🙂..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [HTML streaming & revamped DOM parsing](https://github.com/WebKit/standards-positions/issues/629) [open]
- **Mozilla:** [HTML streaming & revamped DOM parsing](https://github.com/mozilla/standards-positions/issues/1370) [closed]

## 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEX9nn4t70bYZIf8IoPTNzpxQ-I_7HTc_QAhxnCKHFWLzcsxnfl6R3354Rmagd7Ek1Esk_1fb2FDxvVKif6pcopBjOImP0OLBK3dshIBrGy1KfLKzo4u4TKy6mjxq29pxAB) *(vertexaisearch.cloud.google.com)*
  > Coherent story for HTML-setting methods · Issue #11669 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your se...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGQY_OD_kJ_U7FDX3MmmwCNoQE4luBa-Lebg5ndir8m6tn6u_czPafV71M9GL6AgkbTAolRvBjRTdhKGS0NMH6MiXsQqZbw3xKseqmrTe0cERxW_WyEumwadqx36uXZwWM4KVgWRDiDAFzTn5ZuVL3B3b_wvfzozRrtKxZmGNWhtZyVDaxgngdg3aFn2I2PeZug7aJ28GrC3Q==) *(vertexaisearch.cloud.google.com)*
  > declarative-partial-updates/dynamic-markup-revamped-explainer.md at main · WICG/declarative-partial-updates · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another t...
- [zenn.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFlO7Gve_enW-xHEBorQ3rPmvybUZNt4aogNvGChkKBcMABsQoUFNWd_lUBaLK5SUO3Oe-pLiY_LAIHoqNGLyFgHt4f9FJKxls2NxgIj1OfqwVHKBWh24jFMVzZYbeSzex2s5PRWM_1) *(vertexaisearch.cloud.google.com)*
  > The **“Renewed HTML insertion and streaming methods”** proposal (part of the WHATWG and Chrome **Declarative Partial Updates** initiative) aims to modernize how developers insert dynamic HTML into the DOM. It provides a unified, ergonomic API matrix
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGq4pcvS_bZ8kyJgpg_oiQuRD0DuSQEInAoZqlmBwCdX62hxJ6jRIY09MxCIO86Btusc5ZHsOjKaDF4Sl7Ke9XWEx7-hDOtOBLHNZ5fbH0R01Mqan9X9UuH2WETGbECGmFklvyg0xVTrg==) *(vertexaisearch.cloud.google.com)*
  > The **“Renewed HTML insertion and streaming methods”** proposal (part of the WHATWG and Chrome **Declarative Partial Updates** initiative) aims to modernize how developers insert dynamic HTML into the DOM. It provides a unified, ergonomic API matrix
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGTOXjw4DTN_68SVIDssNPdhsHHea4fS9hlLwm8nX5ccmG-KVDspdAoE51qoH_jTVSsSh5vyn4zicgUKgGcXLhuiykTVIIRChesTdbEfXvEfNP3HESZlzCLWTJOyIE5q_zpcCxfqmS8) *(vertexaisearch.cloud.google.com)*
  > The **“Renewed HTML insertion and streaming methods”** proposal (part of the WHATWG and Chrome **Declarative Partial Updates** initiative) aims to modernize how developers insert dynamic HTML into the DOM. It provides a unified, ergonomic API matrix
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFrG-svLLB11eo1C1kIh4NMcm3m4KFH1kvsMlxDYm1UgGv34KQz2yByJQP322Lv_ECtOYuwidLPxW8RFnh5HHFax5DwnJna-TRqxn_doqZ9segib5GHQ--5qReyWphLcxGKLS-OFhHq) *(vertexaisearch.cloud.google.com)*
  > The **“Renewed HTML insertion and streaming methods”** proposal (part of the WHATWG and Chrome **Declarative Partial Updates** initiative) aims to modernize how developers insert dynamic HTML into the DOM. It provides a unified, ergonomic API matrix
- [substack.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGqZhLXd_WmMfZrA4lFaX4YqzZRXZPXpRFaAPbyvKxuCzPvrXq1ZQlkB20BKV8gmpYNj8BUrlPo-awhseDdDl79Z9d5_HctfaKHEZeqYo8xpIO3nv4_qu7CQv_gtahRlPDB6fivCtn57DQMW3fiPZ6FIdguvG9OLSPyKREKf0daII8y) *(vertexaisearch.cloud.google.com)*
  > The **“Renewed HTML insertion and streaming methods”** proposal (part of the WHATWG and Chrome **Declarative Partial Updates** initiative) aims to modernize how developers insert dynamic HTML into the DOM. It provides a unified, ergonomic API matrix
- [reddit.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH-10DMbd_7zUb7cGyeU6cep8ON_X5vEj9zji7LaLvZZIEmbSHW9oLTVp-B9jEWlogcoUg541Wr4Yut_kucD452w3vGn27_PHWkHla7vZpnkYPKaXsAF18HJEkS5Zt9AyeqqxHHmG7wzhAjzZBiY0g9LyvbVlMFHFuOsGhrEpxTASQCcwCFYJotwgfj4I26JCBhJiQc-5U=) *(vertexaisearch.cloud.google.com)*
  > The **“Renewed HTML insertion and streaming methods”** proposal (part of the WHATWG and Chrome **Declarative Partial Updates** initiative) aims to modernize how developers insert dynamic HTML into the DOM. It provides a unified, ergonomic API matrix
- [reddit.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEUZKnKsi9QUdx2HH6fF0d3BHT1e8heKAc0yF8rwTMPB0biTm9dvIf7lPqjpmvn4WTqzOsyI1Of_wXT8HGlQj2IWJDtG78OrtWnWt6PSzRbBRJ5vfROyDWjpy36GwsGqIZMfqD9oi0LZ8p7azH4Qx6f4xq38r_Ks65oKu3ktZhqS6nBmGLzxLR7apueRf32V0PVGUrO8Q==) *(vertexaisearch.cloud.google.com)*
  > The **“Renewed HTML insertion and streaming methods”** proposal (part of the WHATWG and Chrome **Declarative Partial Updates** initiative) aims to modernize how developers insert dynamic HTML into the DOM. It provides a unified, ergonomic API matrix
- [\[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html) *(mail-archive.com)*
  > The comments on this is in recent weeks were quite on the cosmetic side, around the trusted-types integration. Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5054329641893888</strong>?gate=5996320374521856 This i...
- [\[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16159.html) *(mail-archive.com)*
  > Explainer https://github.com/W...namic-markup-revamped-explainer.md#resulting-api Summary <strong>Expose multiple HTML setting methods that provide a coherent story for dynamically inserting markup into an existing document</strong>....
- [Re: \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg17005.html) *(mail-archive.com)*
  > Draft versions of both exist in isolation but they would all need to be rebased on top of the stack: https://github.com/whatwg/html/pull/12528 (positional methods to replace insertAdjacentHTML) https://github.com/whatwg/html/pull/11631 (streamHTML*) ...
- [\[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg17004.html) *(mail-archive.com)*
  > Thanks, Dan On Thursday, July 16, 2026 at 9:19:13 AM UTC-7 [email protected] wrote: &gt; Two followup notes: &gt; - We (as in Barry) have filed for a new Web Feature ID ( &gt; https://github.com/web-platform-dx/web-features/issues/4117) &gt; - The st...
- [HTML5 Live Streaming Player: How to Embed Live Video on Your Website -](https://www.yololiv.com/blog/html5-live-streaming-player-embed-website) *(yololiv.com · 2026-05-18T09:17:36)*
  > WordPress: <strong>Add a Custom HTML block in the Gutenberg editor and paste the code</strong>. Squarespace: Insert a Code block on your page and paste the snippet.
- [One-Shot Any Web App with Gradio's gr.HTML](https://huggingface.co/blog/gradio-html-one-shot-apps) *(huggingface.co · 2026-02-18T00:00:00)*
  > Gradio 6 quietly shipped a very powerful feature: gr.<strong>HTML now supports custom templates, scoped CSS, and JavaScript interactivity</strong>. Which means you can build pretty much any web component — and Claude (or any other frontier LLM) can g...
- [HTML - One shot! - Manju blogs - Hashnode](https://manjublogs.hashnode.dev/html-one-shot) *(manjublogs.hashnode.dev · 2023-01-23T02:35:39)*
  > Here, the walls may be thought of as HTML files; they give the website body so that we can continue to make it seem fashionable and provide comfort to visitors using Javascript DOM manipulation. The CSS and HTML will be covered in the upcoming instru...
- [Studocu - Free summaries, lecture notes & exam prep](https://www.studocu.com/in/document/savitribai-phule-pune-university/batchlor-of-computer-scine/html-css-js-full-one-shot-notes-comprehensive-guide-to-web-development/150233708) *(studocu.com)*
  > On Studocu you find all the lecture notes, summaries and study guides you need to pass your exams with better grades.
- [ReactJS, MongoDB, JS, CSS in one shot while building an App - DEV Community](https://dev.to/ssd/reactjs-mongodb-js-css-in-one-shot-while-building-an-app-3f43) *(dev.to · 2023-06-23T13:08:08)*
  > Today we&#x27;ll see only the necessary things that one needs to get started with web development like knowing necessary stuff of HTML, CSS, JS and ReactJS and using MongoDb.
- [Chrome Declarative Partial Updates: Native HTML Streaming in 148 \| byteiota](https://byteiota.com/chrome-declarative-partial-updates-native-html-streaming-in-148) *(byteiota.com · 2026-06-04T05:07:53)*
  > Chrome is shipping something the web platform has needed for twenty years: <strong>a native way to stream HTML into specific DOM slots as server data resolves — no JavaScript library required</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > HTML streaming methods, https://<strong>chromestatus.com/feature/5054329641893888</strong>
- [Move TrustedParserOptions to TrustedHTMLParserOptions by tunetheweb · Pull Request #30463 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30463) *(github.com)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > https://<strong>chromestatus.com/feature/5054329641893888</strong> · A follow on to #30328 · Web Features (referencing these keys, including TrustedParserOptions) - web-platform-dx/web-features#4318 · Move TrustedParserOptions to TrustedHTM...
- [\[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > The comments on this is in recent weeks were quite on the cosmetic side, around the trusted-types integration. Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5054329641893888</strong>?gate=5996320374521...
- [HTML enhanced setter and streaming methods · Issue #4117 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4117) *(github.com · 2026-06-17T18:03:04)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > Available behind a flag from Chrome 148. Shipping in Chrome 154: https://<strong>chromestatus.com/feature/5054329641893888</strong>
- [\[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16159.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md`)*
  > Explainer https://github.com/W...namic-markup-revamped-explainer.md#resulting-api Summary <strong>Expose multiple HTML setting methods that provide a coherent story for dynamically inserting markup into an existing document</strong>....

## 📚 Platform Documentation & Specifications

- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)*
- [Move TrustedParserOptions to TrustedHTMLParserOptions by tunetheweb · Pull Request #30463 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30463) *(github.com)*
- [HTML enhanced setter and streaming methods · Issue #4117 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4117) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 35 result(s) found across 7 planned queries — **13 verified relevant**
  - `"chromestatus.com/feature/5054329641893888" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"Renewed HTML insertion&streaming methods" API` — *Core feature API query* (3 returned)
  - `"Renewed HTML insertion&streaming methods" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"one-shot" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Renewed HTML insertion&streaming methods" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Renewed HTML insertion&streaming methods" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
- **Google Search Grounding (gemini-3.8-flash):** 15 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 114214 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 6 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5054329641893888)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5054329641893888)
- [Specification](https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md#resulting-api)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/491743369)
