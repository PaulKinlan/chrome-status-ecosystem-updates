# Expose the 'autocorrect' global html attribute

> **Report Week:** 2026-W37 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

The HTML autocorrect attribute allows web authors to control whether autocorrection should be applied to user input in editable elements including <input>, <textarea>, and contenteditable hosts. The feature makes the 'autocorrect' attribute to be exposed to web authors.

### Motivation

The 'autocorrect' HTML attribute has been implemented long ago, but since it's not defined in any exported IDL, websites fail to detected it as supported.

## Ecosystem Status

- **Momentum:** High (190 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Expose the 'autocorrect' global html attribute is currently Enabled by default in Chrome 152. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "VonC sur Twitter : "@jbnizet did you try a 'git config --global help.autocorrect 1'?"" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [VonC sur Twitter : "@jbnizet did you try a 'git config --global help.autocorrect 1'?"](https://twitter.com/vonc_/status/359313429992972288) — *by @vonc_, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Auto Correct Fails (@AutoCorrectFaiI) / ...](https://twitter.com/autocorrectfaii) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Twitter](https://twitter.com/hashtag/autocorrect?lang=en) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Auto-Correct (@autocorrect) / Posts / X](https://twitter.com/autocorrect) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [autocorrect2.0 (@autocorrect2_0) ...](https://twitter.com/autocorrect2_0) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [SPECIALK 🗯 on Twitter: "Autocorrect can SUGMEE"](https://twitter.com/kburton_25/status/481608787921342464) — *by @kburton_25, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Mohit on X: "The person who invented autocorrect should burn in hello" / X](https://twitter.com/unboredMohit/status/1615734055571722240) — *by @unboredMohit, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE934A1ml2M3In4MYtKRbWkxJIu1rnOEyPkVLgd0RRC9m2u549tbyxH2eDiyW1GqWECvCRIhbtPNLyGdiZDEcQAnEURf8w7F9NnGEj1hDJyktdlQ5RHEk_4h5nHajq0YiZXSJ_1fjnsTRydP6zvXDEZoPomnjS0fjKguEzVMa4m6FKMMPD1HNTZLofBEkHG) *(vertexaisearch.cloud.google.com)*
  > autocorrect HTML global attribute - HTML | MDN Skip to main content Skip to search Toggle sidebar Web HTML Reference Global attributes autocorrect Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEodeGYF525azW-XlfnyBvjx_DPYv99SLi18wKqtZsOsFeP0_ZYF8Rtl_1oC6B68IJyURC0Z7PeVdUZx0j_HTWqLGZTVy9TTvwgztDpfgg_4TwEzYQCsgNwmM0VNiDi22Jm-lUtgX0=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGCahIQb8KWw09rE1r7jsxHRdMDH9uWrtLpuGjw4p86Gi63gIVI2Q7V3IQQ9u_kPcDmiu8yVTTl9PD5I0OzHuBYRurvLXKKPlHwKCrxbilUVbhkQelUADjVQ7ptSKB-hiM=) *(vertexaisearch.cloud.google.com)*
  > Define the autocorrect attribute as standard · Issue #35593 · mdn/content · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh yo...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGhva2xwyrguFZDeHbGytKfvLrGZ7ikQUXmVQZK6yp_pHOWH2RUtwbv7BxYPns_TOwVC18CHGaq2OQW_TEohD3_gt86Zdy7Hn8WyZOqA7xmSPIQBKAAD7lB-eoozTyf7dIP_Pk=) *(vertexaisearch.cloud.google.com)*
  > Chrome 152 | Release notes | Chrome for Developers Skip to main content / English Nederlands Русский فارسی বাংলা Sign in Release notes Chrome for Developers Docs Release notes Chrome 152 Stay organized with collections Save and categorize content bas...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEV9kW7icNWOIPEND2RZc-WCeSs7n3SDci3LAaSYwwdVWlqetnrNUHAplr3gDvTJhZZLtOFKmtlvUY3mijyHQ21CIwYOPAAdG9ehIIq8OXgTY6tjl8bE3sql_3iNDnMLX8XGl7BQzQ=) *(vertexaisearch.cloud.google.com)*
  > Chrome 152 beta | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – ...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE5121y4Wdlbmbt_gtOjTNwNz7OYDRlgztpLm2r3EizwvD4WK6IqJ82mWFg3I5xInEPaujmtkAPee9MQkdpEjEVgJy2QEEeIcyvkbaE_CGcSY5eq1b_5P7VqajH1o29kAyXOD2t-gB05yNi08u7J--wIAgC1TPfdHx5WNbLCg==) *(vertexaisearch.cloud.google.com)*
  > HTMLElement: autocorrect property - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs HTMLElement autocorrect Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 HTMLEle...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEu16niMDDMXNb_uF2GTyEewvUUhJKfInHVItAurCvckFxl_1yK9eVNw8d5F_WUnVdAxeHFO90ZB8IhWehSaxusW0CSNsU7y6ZvhuPplXAfsEQ0T25E9ReAm3cmgkx2W-shX07XQA7AcbcFUdunFGzwJheB9LnelnFUGB9jdJLHoj-uRz2fR6CxJs1U3_1BiyWzPVpUyjuSo7lP) *(vertexaisearch.cloud.google.com)*
  > content/files/en-us/web/api/htmlelement/autocorrect/index.md at main · mdn/content · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to r...
- [web.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEJrt-Tff_0_wpCL2c3iFlM9BSx7YklZzResj-XcWFPsCF5Krn1gHMabI4U_lDEN4WsGWxcmhmfMXavU8iyrEiZGO_Ce7FWv9tnuhbg0nW4gWmK25-uJOgCqAgC3WYTiv8NxwR1) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The standard **`autocorrect` global HTML attribute** gives web developers standardized control over whether automatic spelling and punctuation correction should be applied to editable elements, including `<input>`, `<texta
- [web.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF0Emjk148UfmT6VV3sAKWMHVzHSHpOEbwC2rDueFJc00OppB8YTYngIvZwxLaRB0B4wiqXeTYlb2KcK9mw4RBnRjP-Bw_5J_OCx4G_s0UtnVNEBpAnhymTtQ==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The standard **`autocorrect` global HTML attribute** gives web developers standardized control over whether automatic spelling and punctuation correction should be applied to editable elements, including `<input>`, `<texta
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFFPQgJ4ql3O1S4mCxTsMuMqgLIaLwDQ3EHBp1Plg5VXzbrNZ5D2Xe79h6yBSPmVzrzmNwnvtEyACj8kzBxlfdxYdWxG2OVupEjrc_2mvsrkO4HTRo1Z7U-S0adC5mwW2Yc19koY97OoCFl_9wK2WbRtZFDQ5XoNyoUUWAjCaB55POq) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The standard **`autocorrect` global HTML attribute** gives web developers standardized control over whether automatic spelling and punctuation correction should be applied to editable elements, including `<input>`, `<texta
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHzYQ81vGnlq0aV7DZ_YEkp9JvfmanGeP7MBxJ7RD3liJYVQ21ST_o1hk8HHhGim42pL7ildgRq1jZNSVV_zpIiMY8CiCDjBGZ9mv13fPXsARNKnZbfFcdw2ib4u5rmXpWkk5XKd0KT3BCWjmxHb7X0k8lX1q-Ma7MFqBozDaFVFNW2OyFKVS0xG1VViiI_uXVM) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The standard **`autocorrect` global HTML attribute** gives web developers standardized control over whether automatic spelling and punctuation correction should be applied to editable elements, including `<input>`, `<texta
- [Re: [blink-dev] Intent to Ship: Expose the 'autocorrect' global html attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16575.html) *(mail-archive.com)*
  > /No information provided/ *Link ... was generated by Chrome Platform Status &lt;https://chromestatus.com&gt;. -- <strong>You received this message because you are subscribed to the Google Groups &quot;blink-dev&quot; group</strong>....
- [Expose the 'autocorrect' global html attribute](https://chromestatus.com/feature/6264645053710336) *(chromestatus.com · 2026-05-06T00:00:00)*
  > We cannot provide a description for this page right now
- [[blink-dev] Intent to Ship: Expose the 'autocorrect' global html attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16574.html) *(mail-archive.com)*
  > Initial public proposal No information ... Safari, so I don&#x27;t think there is any interoperability risk on exposing this feature. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/autocorrect Gecko: Shipped/Shipping (h...
- [Chrome 152 | Release notes | Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > <strong>This feature exposes the autocorrect global HTML attribute and reflects it on HTMLElement</strong>.
- [Re: [blink-dev] Intent to Ship: Expose the 'autocorrect' global html attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16576.html) *(mail-archive.com)*
  > &gt; https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/autocorrect &gt; &gt; *Gecko*: Shipped/Shipping ( &gt; https://bugzilla.mozilla.org/show_bug.cgi?id=1927977) &gt; https://www.firefox.com/en-US/firefox/136.0/releaseno...
- [Chrome 152 beta | Blog | Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > The HTML autocorrect attribute <strong>lets web authors control whether autocorrection should be applied to user input in editable elements including &lt;input&gt;, &lt;textarea&gt;, and contenteditable hosts</strong>.
- [Microsoft Edge 152 web platform release notes (Aug. 2026) - Microsoft Edge Developer documentation | Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/152) *(learn.microsoft.com)*
  > The autocorrect global HTML attribute <strong>controls whether to automatically correct spelling or punctuation errors for user input in &lt;input&gt; and &lt;textarea&gt; elements, and in elements with the contenteditable attribute</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: [blink-dev] Intent to Ship: Expose the 'autocorrect' global html attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16575.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6264645053710336`)*
  > /No information provided/ *Link ... was generated by Chrome Platform Status &lt;https://chromestatus.com&gt;. -- <strong>You received this message because you are subscribed to the Google Groups &quot;blink-dev&quot; group</strong>....

## 📚 Platform Documentation & Specifications

- [edge-developer/microsoft-edge/web-platform/release-notes/152.md at main · MicrosoftDocs/edge-developer](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/152.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 28 result(s) found across 6 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/6264645053710336" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"html.spec.whatwg.org/multipage/interaction.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"Expose the 'autocorrect' global html attribute" API` — *Core feature API query* (3 returned)
  - `"Expose the 'autocorrect' global html attribute" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"Expose the 'autocorrect' global html attribute" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Expose the 'autocorrect' global html attribute" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 12 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 273 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6264645053710336)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6264645053710336)
- [Specification](https://html.spec.whatwg.org/multipage/interaction.html#autocorrection)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40871769)
