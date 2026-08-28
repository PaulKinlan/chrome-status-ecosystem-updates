# Responsively-sized &lt;iframe&gt;

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Allow sites to opt into iframes having responsive sizing (sizing the <iframe> element in the parent document to the iframe document's layout overflow sizing, so that scrolling in the child document is avoided).

### Motivation

This is a natural feature to have for iframes, when the site wants to
render the iframe content so that it looks seamless with the parent frame and avoids scrollbars.

## Ecosystem Status

- **Momentum:** High (180 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Responsively-sized <iframe> is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "For context, a lot of the discussions here:   * https://github.com/w3c/csswg-drafts/issues/1771  * https://github.com/w3c/csswg-drafts/issues/13584  *..."
- Standards Activity (W3C TAG): Latest discussion from @dandclark: "Thanks for sending this to the TAG! We had a few points of feedback.  One is that the opt-in from the iframe isn't scoped in any way. The explainer [p..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Responsively-sized iframes](https://github.com/WebKit/standards-positions/issues/653) [open]
- **Mozilla:** [Responsively-sized iframes](https://github.com/mozilla/standards-positions/issues/1394) [open]
- **W3C TAG:** [Other Spec Review: Responsively-sized iframes](https://github.com/w3ctag/design-reviews/issues/1223) [open]

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHtznryfJiVdOwjHMLBFDPhsCD8F-ulmBPfvABTyKWcXoP7YOxCgZ8nYwm0x-MMRuId7XHxQSWMNr7apj7jfhUunIN8ykqaDtbyKhjjE167B3EJFm44v8DCwVmH03DZjXh2D70Rs88k) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFsER8wChbJDCPePIiZZ0SjSKfbglPhMrRiocL4gBZupsiDLz2cbRRm_JTiO9f1371Ya-K0oHV0QS0H3GxrdmVGBo-KTpTlJHShqODppm6T9J7_z-4AHA_oflOsfZKFlhrWLWXQFZdUKhG5e14N3vcb) *(vertexaisearch.cloud.google.com)*
  > Responsively-sized iframes · Issue #1394 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your ...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFR2mqGHXS-vNi5hP3hVEcuebyZISL-wKs23kWzBAqsPRM5jivQ7UYmYPlmdlCWKC_bxAJG8g4UzdeyjKeE-e4fTt0GyvbDjg9inkxXaZF4KLa4DtpWDTb2sX1TGsyP0zC3Y4d-_UqYYc0dvTG64NaaEUSfJfs7LmQbz2Y=) *(vertexaisearch.cloud.google.com)*
  > Window: requestResize() method - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs Window requestResize() Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Window: requestResize() ...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGH0LHasJS6JVYOXmeVekwguWicBItWHj0VDsmN4zZ_MrvXJMpXl32GaKI-9tdsYKa5xeWQ5P6E1pOOkDPg0tdMVD5GK6OETw9evRkmQ7KM400jxpJH_JioxoVvvyOdhPcH1yxXxLY7ITPQbnQNTBfhudksD7dzAlLztWffaNj05xeo1EOhcpnBivC-8uT6pQg=) *(vertexaisearch.cloud.google.com)*
  > csswg-drafts/css-sizing-4/responsive-iframes-explainer.md at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFn20ruDikAuzIRSoq0bscI2zghkIJBx2VonWUn_PzG5JzU6z7-tgVQVmKc6eKcuA5jHW39bUucuQUPhVZ1i2No16H02rRZ6lb2SVhLKtwraUHas7xRAcolXj41f6vRwedLMt7jXPDxi-6tfa_LKIPWa0E2fP4QJL7P_gxb-HXsY7GLu9_yuR5Q) *(vertexaisearch.cloud.google.com)*
  > frame-sizing CSS property - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Properties frame-sizing Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français frame-sizing CSS pr...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGLBCWFgxEnrqg4ksdtYKIcDRQn3Ki8gtAYffu_nzdJicWQ2C79UAF3i8v0T9j7nh2ZR0w236sRcQajRzYfnKYQQGQiq3ZN-3Cf4yY6k4AjJtNANo7QKiNgLaDYIQjWJDUaJ8sEFMFEB94defp0iauiZgzCmVHDPaA=) *(vertexaisearch.cloud.google.com)*
  > Intent to Ship: Responsively-sized <iframe> Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Responsively-sized <iframe> 743 views Skip...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH--MBio3TS2JWe5zAvpALzgCWbYTHS9PHM30_7glaZNbmNYjSmbcab4ZFrRAH_cZ0ujFrRnhczfO4vGuSuDi1ql5Ce6n8XnOadDWg4CV-IdUWTxlZSps0eq6mvGEZ4u52KnR98zGnehsqfidmHMwgvCk9ABbyFldQ=) *(vertexaisearch.cloud.google.com)*
  > Intent to Prototype: Responsive iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Responsive iframes 532 views Skip to firs...
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGp4k0PltiydmmBVIkBImGqSn9q1o_bYeVWr4gpYlXt9gUWQq6TItfHwN6c4Fl1c1FRUs3wszpX3LovL9G9ZAoKRdRuWyBBz5Gs-70k0hdvtfzBbW4g9tZOd3nt) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **Responsively-sized `<iframe>`** specification (part of **CSS Box Sizing Module Level 4**) introduces native browser capabilities to size an `<iframe>` element in a parent document according to the embedded document’s
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFyJzSHQThvxrcMIXSHWQtnuorr3knw8KFx_Mp109xObcE1m7IT_nzBICvBo2LqBQj0qygcKx0eOchv6GRVJqxRg2zAaEuspiDu5C44jx3fIXP5iiKlhqnbzCSXu1Ajgq1lH-AY7nrOpzxd_7jcT077tg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **Responsively-sized `<iframe>`** specification (part of **CSS Box Sizing Module Level 4**) introduces native browser capabilities to size an `<iframe>` element in a parent document according to the embedded document’s
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEle3sV-pETxgdLfn3waSwh1dsats78t_e7ILT3qx2ApBQsIA7gN7BQUT3SEOvkbYLiyFj5lxL-KIrzvIDXps9LBEUZuvVlwDdVn5Shm-ufnw0XdNGcmlZB_HnnAiffaiPFxK6J-IFcl-14g0apqA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **Responsively-sized `<iframe>`** specification (part of **CSS Box Sizing Module Level 4**) introduces native browser capabilities to size an `<iframe>` element in a parent document according to the embedded document’s
- [mstdn.social](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE5u3fSoq5OlfaiyDkBdGM2u7lZ5jF-EPic_0UGmvNDM5d27aMjdONHR0ewoWG_LDUhM7JzUlNHjDTIYlKm-cQ6wKIX5eMpDkFPNnuk-yzaCUCROw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **Responsively-sized `<iframe>`** specification (part of **CSS Box Sizing Module Level 4**) introduces native browser capabilities to size an `<iframe>` element in a parent document according to the embedded document’s
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEuiJyrj_lwWpCqFKqMkJzAjdEfqaJY-rCxziGMtrNkQi_mUP96HIdBVS_adGIool-algvuw7daLLpWJJc3qPQalzf0lhF1_YsI8pLjMh93uQMK_x0P2UN7Drw7RFPr4bb6phi8povWeTJSvTVTl-KO) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **Responsively-sized `<iframe>`** specification (part of **CSS Box Sizing Module Level 4**) introduces native browser capabilities to size an `<iframe>` element in a parent document according to the embedded document’s
- [[blink-dev] Re: Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13733.html) *(mail-archive.com)*
  > False &gt; &gt; Estimated milestones &gt; &gt; No milestones specified &gt; &gt; &gt; Link to entry on the Chrome Platform Status &gt; https://<strong>chromestatus.com/feature/5108373464547328</strong>?gate=5167068974153728 &gt; &gt; This intent mess...
- [Intent to Prototype: Responsive iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/QirdSBIvM1k/m/rZdHOE59AQAJ) *(groups.google.com)*
  > https://<strong>chromestatus.com/feature/5108373464547328</strong>?gate=5167068974153728 · This intent message was generated by Chrome Platform Status. unread, May 20, 2025, 3:05:41 AMMay 20 ·  ·  ·  · Reply to author · Sign in to reply to author ...
- [Re: [blink-dev] Re: Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13784.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; &gt;&gt;&gt; On Tuesday, 20 May 2025 ...-4/responsive-iframes-explainer.md &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Specification None &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Summary &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; <strong>Allow sites to opt i...
- [[blink-dev] Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13731.html) *(mail-archive.com)*
  > Explainer https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md Specification None Summary <strong>Allow sites to opt into iframes having responsive sizing</strong> (sizing the &lt;iframe&gt; element in the parent...
- [Responsively-sized <iframe>](https://chromestatus.com/feature/5108373464547328) *(chromestatus.com · 2025-05-18T00:00:00)*
  > We cannot provide a description for this page right now

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Re: Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13733.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5108373464547328`)*
  > False &gt; &gt; Estimated milestones &gt; &gt; No milestones specified &gt; &gt; &gt; Link to entry on the Chrome Platform Status &gt; https://<strong>chromestatus.com/feature/5108373464547328</strong>?gate=5167068974153728 &gt; &gt; This i...
- [Intent to Prototype: Responsive iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/QirdSBIvM1k/m/rZdHOE59AQAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5108373464547328`)*
  > https://<strong>chromestatus.com/feature/5108373464547328</strong>?gate=5167068974153728 · This intent message was generated by Chrome Platform Status. unread, May 20, 2025, 3:05:41 AMMay 20 ·  ·  ·  · Reply to author · Sign in to reply ...
- [Responsively-sized <iframe> · Issue #4036 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4036) *(github.com · 2026-05-14T09:39:56)* *(Cites: `https://chromestatus.com/feature/5108373464547328`)*
  > https://<strong>chromestatus.com/feature/5108373464547328</strong> · Reactions are currently unavailable · No one assigned ·
- [Re: [blink-dev] Re: Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13784.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md`)*
  > &gt;&gt; &gt;&gt; &gt;&gt;&gt; On Tuesday, 20 May 2025 ...-4/responsive-iframes-explainer.md &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Specification None &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Summary &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; <strong>Allow site...
- [[blink-dev] Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13731.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md`)*
  > Explainer https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md Specification None Summary <strong>Allow sites to opt into iframes having responsive sizing</strong> (sizing the &lt;iframe&gt; element in ...

## 📚 Platform Documentation & Specifications

- [Responsively-sized <iframe> · Issue #4036 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4036) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 31 result(s) found across 7 planned queries — **6 verified relevant**
  - `"chromestatus.com/feature/5108373464547328" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"drafts.csswg.org/css-sizing-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Responsively-sized <iframe>" API` — *Core feature API query* (2 returned)
  - `"Responsively-sized <iframe>" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"responsively-sized" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Responsively-sized <iframe>" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 13 result(s) found — **12 verified relevant**
- **Dev.to Community Blogs:** 8 result(s) found — **17 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5108373464547328)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5108373464547328)
- [Specification](https://drafts.csswg.org/css-sizing-4/#responsive-iframes)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/418397278)
