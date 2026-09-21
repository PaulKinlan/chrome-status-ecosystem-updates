# Speculation Rules - moderate viewport heuristics controls

> **Report Week:** 2026-W39 | **Milestone:** Chrome 152 | **Category:** Origin trial

## Overview

Current viewport heuristics for speculation rules don't give any room for developer experimentation.  This experimental feature will provide such controls, and enable developers to figure out if different heuristics parameters give them better results than the default ones.  This is a feature only aimed at experimentation, and there are no plans to ship it as is.

## Ecosystem Status

- **Momentum:** High (470 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Introduced in Chrome 152 via an Android-only Origin Trial, 'Speculation Rules - moderate viewport heuristics controls' provides temporary syntax (\`moderate\_viewport\_heuristics\`) allowing developers to customize link size thresholds, pointer distance, and delay timers for speculative preloading. Chromium engineers and performance partners (such as Shopify) are using this trial strictly for telemetry and data gathering, with explicit confirmation that these explicit configuration knobs will not ship as a permanent standard. Cross-browser consensus is non-existent, as neither Gecko nor WebKit track the feature, and the origin trial is intended solely to calibrate the browser's internal default heuristics.

### Recommendations
- Actionable Advice: Do not build production architectures or permanent speculation rule sets dependent on \`moderate\_viewport\_heuristics\`. Mobile-heavy platforms seeking optimal speculative loading can enroll in the Chrome 152 Android Origin Trial to test custom parameters and report benchmark data upstream before the trial expires.
- In active Origin Trial in Chrome 152. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFhDA8uOQ6c4wJMcdNDm9AbdE6O25DOy8rkDw_YiMlK8vcmYUpSZgq_o1h_x9dMxkFG91AT5l008abln-5kOO2cr3dLZYSlvbW9sNnj89crRBzaBa8QfGZz4K_mlokjII_82sQl9GBD) *(vertexaisearch.cloud.google.com)*
  > Chrome 152 베타 | Blog | Chrome for Developers 기본 콘텐츠로 건너뛰기 / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體...
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFn3je4CmiyDVG8VuSVgEzDk1isN0RzuvcVycj6vnWx_DWlLVnmC1wStxPtvWue-3Z-x0ye9Tvm7sr70mviWxqiXihpxWkm7cQW8siBj_KOZ5GI1E4fOSk2wZm6gNLFGffCrl1cgHXYey8QyRjF0tLELgTxsTdQ10SCWxrnrQFkLRRQBsXZHw==) *(vertexaisearch.cloud.google.com)*
  > Chromium Dash
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHycVbFuywdRCtGukdoIOO-S_LWcFWaK2PjQ_BAHmMVRe2QWS_EXitDjVu72pjiv78FB8KkB2GevSnAdlOT0h6wYJU-iUvgcoiR5vCLdOWzZoNRAtLX27Q2zxrUPbdwLKy-s-9UfKRolqxF1RwGgU9M3Mw5Lw==) *(vertexaisearch.cloud.google.com)*
  > Prerender pages in Chrome for instant page navigations | Web Platform | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEU58oxUkzyjCllUfjjsi1XRiX4SMAKxhQJOLJ7fe3KPTtsbSR-CkgOTvkERe2YHXREaLRsbNgIDPCdFYpGSovrheSfsYl_HluTuD4n-0DUqQuZkjVyMEiZkulZ-vGcaNQqffs8Td31N4n5pQZl-Ic7oqjpj79TXQ==) *(vertexaisearch.cloud.google.com)*
  > Mobile "moderate" speculation-rules viewport heuristic controls · GitHub Skip to content --> Search Gists Search Gists Sign in Sign up You signed in with another tab or window. Reload to refresh your session. You signed out in another tab or window. ...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFDNu7UCLLgkhvn1soTCfVlQMXfKOxp2Bj9SXhUlhZJZscf5hR07o7ayeVAuc_bLiqSZxqhkspcDDvU3dK1GigBQgOH5XOIsHrfojSaaQblV1oigi6XulafjLtscJ-PDXmjxAhAb16w) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGw6QOEqYdsqjH9BQmb5146Ey5O5sf8ktjDcsniqrxA4QGC_vrFa2BhH02_ZCpVZVDng6XKlcIl-VzxI_8P6RJMWaeU0HP0cZAQoX5_V0Ucpg0PEfTAsktfun5AnaQ_xvkn2xPh134YzYnTAidz_uE2qnNMaa2nJTi2nwQ47I9hJ2PiljVXTA==) *(vertexaisearch.cloud.google.com)*
  > Search Conversations Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups Sort By Relevance Sort By Date 1–30 of many &#xE408; &#xE409; Chromestatus 12:03 AM Intent to Ship: CSS text-overflow...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGuADwfxf8UsgbnY0teW2B069edcgh-_BxSV9S-tXN_BP5vUBblhLkRrLgn2iTjpr_RohwP4TywHVXCgwkNhcaC-ROI0N3vj_oahcYji9XCy-WpL2lIgMIWXM2int6WY4_MYgjEC0g=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFNdadvhi7mu-R8RbRae7HrWQalrLcFcNM0Hpf62rInL-fb6STwGJaTmmkOvBcwCsn8BbYTaSG_b4l4Bk0tXSbPIJCkebDk6umC8CIte8lpipQGzcFDpgaY5cngFTtNcFwFbS8p) *(vertexaisearch.cloud.google.com)*
  > Chrome 152 | Release notes | Chrome for Developers Ana içeriğe atla / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – ...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFcNv0SjjoZxbZR48WSWkteaO2X0bzvfEO1KMEyPhp7ogBblR-sHS9h3DllCoVZ4_5eC4nJxNUu4iy8nNx9-CFNLVbiIqd9L2pJhoYWyUuORYeEXraCb9_mq5oFBurBSFs=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Speculation Rules – moderate viewport heuristics controls"** is an experimental feature in Chromium (Origin Trial starting in **Chrome 152**).   In the Speculation Rules API, the `moderate` eagerness level relies on lin
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGZhQ3cN-KrhAwylmYQK0wdKB_BlhsJd79SrgiM5qqHSkUNbbh6CAYNHq6S9zUhDiH2sD9ZXvH2EKVWvIZ0qxGbszRI_SZcoPwGh20BM0aNEysSh7cz2xuxxNXS5M7DXay3ThBAM5ZGPs6diM_thmCOnHQW61PYhsZ3sToMYlUv) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Speculation Rules – moderate viewport heuristics controls"** is an experimental feature in Chromium (Origin Trial starting in **Chrome 152**).   In the Speculation Rules API, the `moderate` eagerness level relies on lin
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGIx-LdBa6IkLL_XVCbw2bX4r8KqIcQ47LmJzGqg9Fy6JO-CmxMT_Jv8BD5DP09LiGUrwez_eld46O0Lhh79x2qO7kukvsCV2KxRtHyxlPrbapvV9w0ItNxGQhiSO5Z7W5rVQEWnW6vGSnVBpBHhp79Pd4VbdN3Rr_QtyTXF9-A7DsscRKX) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Speculation Rules – moderate viewport heuristics controls"** is an experimental feature in Chromium (Origin Trial starting in **Chrome 152**).   In the Speculation Rules API, the `moderate` eagerness level relies on lin
- [polypane.app](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGfRsD0_YFVS-o-LuTjdED95cjUyqR2cp86gZEEs2FWHf6dLzL2zqsPtTM15ybeJy4ZvQsbyXbWTMbAub81-raJ2pdByuTaU6K4zHZHyTmpXfHOjU0TWzFHs4jWUV6G_tlqAcyltmGZbToch1FaQg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Speculation Rules – moderate viewport heuristics controls"** is an experimental feature in Chromium (Origin Trial starting in **Chrome 152**).   In the Speculation Rules API, the `moderate` eagerness level relies on lin
- [\[blink-dev\] Intent to Experiment: Speculation Rules - moderate viewport heuristics controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16920.html) *(mail-archive.com)*
  > *Flag name on about://flags* *No information provided* *Finch feature name* *SpeculationRulesModerateViewportHeuristicsControl* *Non-finch justification* *No information provided* *Requires code in //chrome?* False *Tracking bug* https://issues.chrom...
- [Developers should be able to experiment with Speculation Rules moderate viewport heuristics \[529423512\] - Chromium](https://issues.chromium.org/issues/529423512) *(issues.chromium.org)*
  > SpecRules - moderate viewport ... https://gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9 <strong>Binary-Size: Increase is fixed origin-trial plumbing overhead; the feature&#x27;s own code is ~2KB</strong>....
- [\[blink-dev\] Re: Intent to Experiment: Speculation Rules - moderate viewport heuristics controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16943.html) *(mail-archive.com)*
  > &gt; *Contact emails* &gt; [email protected] &gt; &gt; *Explainer* &gt; https://<strong>gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9</strong> &gt; &gt; *Specification* &gt; *No spec - this is an experiment-only feature.* &gt; &gt; *Summ...
- [Guide to implementing speculation rules for more complex sites \| Web Platform \| Chrome for Developers](https://developer.chrome.com/docs/web-platform/implementing-speculation-rules) *(developer.chrome.com · 2025-10-23T00:00:00)*
  > <strong>&lt;script type=&quot;speculationrules&quot;&gt; { &quot;prefetch&quot;: [{ &quot;where&quot;: { &quot;and&quot;: [ { &quot;href_matches&quot;: &quot;/*&quot; }, { &quot;not&quot;: {&quot;href_matches&quot;: &quot;/logout&quot;}} ] }, &quot;e...
- [How to use Speculation Rules API to load web pages instantly \| Uxify Blog](https://uxify.com/blog/speculation-rules-api) *(uxify.com · 2024-07-30T00:00:00)*
  > As of Chrome 122, you can now setup an eagerness level to define when speculations should run; choose from immediate, eager, moderate, and conservative, each with specific heuristics. ... Provides a flexible trade-off between precision and recall, an...
- [Instant Navigations: How to Use the Speculation Rules API for Near-Zero Load Times - DEV Community](https://dev.to/holoflash/instant-navigations-how-to-use-the-speculation-rules-api-for-near-zero-load-times-2cnm) *(dev.to · 2026-01-07T18:41:20)*
  > The eagerness setting controls when speculation happens: Conservative - Triggers on pointerdown (mousedown/touchstart). Minimal waste, minimal gain. Safe starting point. Moderate - <strong>Desktop: 200ms hover or pointerdown</strong>. Mobile: viewpor...
- [Boost Your Site Speed with Speculation Rules API: A Guide to Prerendering and Prefetching](https://www.telerik.com/amp/boost-site-speed-speculation-rules-api-guide-prerendering-prefetching/TEIzeWJNZWtlcWMwamozTE13dzFscDFyODkwPQ2) *(telerik.com · 2025-10-23T14:08:51)*
  > The speculative action should start only when the user is starting to click on the link, for example, on the mousedown event. moderate: <strong>Strikes a balance between eager and conservative</strong>.
- [Faster Websites with Client-side Prerendering & Speculation Rules API](https://pmbanugo.me/blog/speculation-rules-api) *(pmbanugo.me · 2025-12-09T00:00:00)*
  > The speculative action should start only when the user is starting to click on the link, for example, on the mousedown event. moderate: <strong>Strikes a balance between eager and conservative</strong>.
- [How to Use the Speculation Rules API on Shopify - Fudge AI](https://www.fudge.ai/guides/speculation-rules-shopify) *(fudge.ai · 2026-08-09T00:00:00)*
  > Mobile has no hover, so Chromium ... changed in Chrome 143; before that, eager behaved like immediate. <strong>moderate on mobile waits until scrolling settles</strong>....
- [No More Loading Times: How to Use the Speculation Rules API \| maxcluster](https://maxcluster.de/en/knowledge/blog/article/no-more-loading-times-speculation-rules-api-guide) *(maxcluster.de · 2025-02-13T00:00:00)*
  > In contrast to “immediate” and “eager”, the “moderate” and “conservative” settings are <strong>user-controlled and follow a First-In-First-Out (FIFO) principle with an upper limit of 2.</strong>
- [Speculation-Rules - Expert Guide to HTTP headers](https://http.dev/speculation-rules) *(http.dev · 2026-06-05T00:00:00)*
  > <strong>The prerender array lists pages to fully render in the background.</strong> The eagerness field controls when speculation triggers. { &quot;prerender&quot;: [{ &quot;source&quot;: &quot;document&quot;, &quot;where&quot;: { &quot;href_matches&...
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > <strong>This origin trial provides experimental controls for speculation rules viewport heuristics</strong>, letting developers test whether alternative heuristics parameters deliver better prefetching and prerendering performance for their sites.
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > <strong>Provides experimental controls for speculation rules viewport heuristics</strong>, enabling developers to test whether alternative heuristics parameters deliver better prefetching and prerendering results than the default settings.
- [Chrome 146 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/146) *(developer.chrome.com · 2026-03-10T00:00:00)*
  > <strong>This extends speculation rules syntax, letting you specify the form_submission field for prerender</strong>.
- [PWA Mobile Testing Checklist 2026: Offline, Installable Experiences \| Mobile Viewer Blog](https://mobileviewer.github.io/pwa-mobile-testing-checklist-2026) *(mobileviewer.github.io · 2026-04-23T00:00:00)*
  > A PWA&#x27;s standalone display mode can behave differently from browser display. <strong>Preview your PWA at real device viewports before testing the service worker layer</strong>.
- [PWA Discovery: You Ain't Seen Nothin Yet - Infrequently Noted](https://infrequently.org/2016/06/pwa-discovery-you-aint-seen-nothin-yet) *(infrequently.org · 2016-06-05T12:18:14)*
  > Ada pitched into the conversation about the state of PWAs -- particularly Chrome&#x27;s heuristics which prompted a Twitter discussion about some of the finer points of the user and developer experience. The background to these conversations is that ...
- [Prerender pages in Chrome for instant page navigations \| Web Platform \| Chrome for Developers](https://developer.chrome.com/docs/web-platform/prerender-pages) *(developer.chrome.com · 2026-01-23T00:00:00)*
  > An eagerness setting is used to ... speculates on pointer or touch down. moderate: <strong>On desktop, this performs speculations if you hold the pointer over a link for 200 milliseconds</strong> (or on the pointerdown event if that is sooner, ...
- [Predictive Loading with Speculation Rules -](https://bigcommerce.websiteadvantage.com.au/page-lightning/help/predictive-loading) *(bigcommerce.websiteadvantage.com.au · 2026-06-09T22:50:20)*
  > Speculation Rules provide several ... slightly speeds up the next page’s load time. Moderate – <strong>Load the destination when the user hovers over the link for 200ms</strong>....
- [Complete Guide to Speculative Loading in WordPress](https://www.wpexplorer.com/complete-guide-to-speculative-loading-in-wordpress) *(wpexplorer.com · 2026-01-09T02:26:57)*
  > /** * <strong>Modify the default Speculation Rules configuration in WordPress</strong>. * * Changes the mode from &#x27;prefetch&#x27; to &#x27;prerender&#x27; and sets the eagerness to &#x27;moderate&#x27;. * * @param array $config Existing configur...
- [Boost Speed Speculation Rules API: Prerendering, Prefetching](https://www.telerik.com/blogs/boost-site-speed-speculation-rules-api-guide-prerendering-prefetching) *(telerik.com · 2025-10-23T14:08:51)*
  > The blog post page (/blog/:) will use the moderate algorithm. Here’s how we’re going to define the rule for that requirement: &lt;script type=&quot;speculationrules&quot;&gt; { &quot;prerender&quot;: [ { &quot;urls&quot;: [&quot;/&quot;, &quot;/blog&...
- [Prerender pages in Chrome for instant page navigations \| Web Platform \| Chrome for Developers](https://developer.chrome.com/docs/web-platform/prerender-pages?hl=en) *(developer.chrome.com · 2026-01-23T00:00:00)*
  > The moderate option is a middle ...ementation of speculation rules: <strong>&lt;script type=&quot;speculationrules&quot;&gt; { &quot;prerender&quot;: [{ &quot;where&quot;: { &quot;href_matches&quot;: &quot;/*&quot; }, &quot;eagerness&quot;: &quot;mod...
- [Intent to Experiment: Speculation Rules (Prefetch)](https://groups.google.com/a/chromium.org/g/blink-dev/c/Cw-hOjT47qI/m/EObn9-4MAgAJ) *(groups.google.com)*
  > The origin trial feature name will be SpeculationRulesPrefetch. (This will require a cherry-pick to rename the origin trial feature in M91, which has already branched from main.) https://bugs.chromium.org/p/chromium/issues/detail?id=1173646 ... Inten...
- [Intent to Extend Experiment: Soft Navigation Heuristics](https://groups.google.com/a/chromium.org/g/blink-dev/c/xxrmKr-6X38) *(groups.google.com · 2024-01-22T00:00:00)*
  > After Chrome 123, we intend to pause the experiment while we act on all of the feedback, and decide whether further changes to the heuristics are necessary, or if the API is in good enough shape to consider shipping. ... Intent to prototype: https://...
- [Web-Facing Change PSA: Speculation rules: mobile "moderate" eagerness improvements](https://groups.google.com/a/chromium.org/g/blink-dev/c/YYBd-eksiE8) *(groups.google.com)*
  > On mobile, &quot;moderate&quot; eagerness speculation rules prefetches and prerenders now trigger when a link enters the viewport and passes other conditions that indicate that it&#x27;s more likely to be clicked. The previous behavior, of waiting un...
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=subject%3Aintent+subject%3Ato+subject%3Aexperiment) *(groups.google.com)*
  > Intent to Experiment: Speculation Rules - moderate viewport heuristics controls
- [Intent to Ship: Same-origin prerendering triggered by the speculation rules API](https://groups.google.com/a/chromium.org/g/blink-dev/c/EdW7O8yG7Jc) *(groups.google.com)*
  > Developer needs to opt-in by defining the speculation rules on the page. Please notice that this doesn’t ensure the prerender of the next navigation as speculation rules are only used as suggestions to improve the heuristics of the user agent choosin...
- [Intent to Prototype: Speculation Rules](https://groups.google.com/a/chromium.org/g/blink-dev/c/1q7Fp3zpjgQ/m/5jbNkmRfAwAJ) *(groups.google.com)*
  > Enable additional avenues of development for pre-navigation speculation, including requiring the anonymization of the client IP address and heuristics to identify the best outbound links to prefetch.
- [Intent to Experiment: Speculation Rules - Document rules, response header, deliveryType](https://groups.google.com/a/chromium.org/g/blink-dev/c/3-0rLTZePzc/m/VNHWAdAGDQAJ) *(groups.google.com)*
  > <strong>It can apply to cross-origin links if such links are selected by the author</strong>. The same restrictions apply if list rules contained the same URLs; e.g., cross-site URLs are fetched with an isolated network state (cookies, etc) and canno...
- [Intent to Extend Experiment: Same-origin prerendering triggered by the speculation rules API](https://groups.google.com/a/chromium.org/g/blink-dev/c/tcbtZoQIlvI/m/K26gVfbUAQAJ) *(groups.google.com)*
  > This feature is triggered by the Speculation Rules API: https://chromestatus.com/feature/5740655424831488
- [Intent to Continue Experimenting: Speculation Rules (Prefetch)](https://groups.google.com/a/chromium.org/g/blink-dev/c/XlAW8MDdHbg) *(groups.google.com)*
  > Speculation Rules is <strong>a flexible syntax for defining what outgoing links are eligible to be prepared speculatively before navigation</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Experiment: Speculation Rules - moderate viewport heuristics controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16920.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6240467143491584`)*
  > *Flag name on about://flags* *No information provided* *Finch feature name* *SpeculationRulesModerateViewportHeuristicsControl* *Non-finch justification* *No information provided* *Requires code in //chrome?* False *Tracking bug* https://is...
- [Developers should be able to experiment with Speculation Rules moderate viewport heuristics \[529423512\] - Chromium](https://issues.chromium.org/issues/529423512) *(issues.chromium.org)* *(Cites: `https://gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9`)*
  > SpecRules - moderate viewport ... https://gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9 <strong>Binary-Size: Increase is fixed origin-trial plumbing overhead; the feature&#x27;s own code is ~2KB</strong>....
- [\[blink-dev\] Re: Intent to Experiment: Speculation Rules - moderate viewport heuristics controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16943.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9`)*
  > &gt; *Contact emails* &gt; [email protected] &gt; &gt; *Explainer* &gt; https://<strong>gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9</strong> &gt; &gt; *Specification* &gt; *No spec - this is an experiment-only feature.* &gt; ...

## 📚 Platform Documentation & Specifications

- [&lt;script type="speculationrules"&gt; HTML attribute value - HTML \| MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script/type/speculationrules) *(developer.mozilla.org)*
- [Create a registry for origin trial features by rviscomi · Pull Request #1266 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/pull/1266) *(github.com)*
- [Speculation Rules API](https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API) *(developer.mozilla.org)*
- [Speculation-Rules header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Speculation-Rules) *(developer.mozilla.org)*
- [Sec-Speculation-Tags header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Sec-Speculation-Tags) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 40 result(s) found across 10 planned queries — **32 verified relevant**
  - `"chromestatus.com/feature/6240467143491584" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9" -site:gist.github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"Speculation Rules - moderate viewport heuristics controls" API` — *Core feature API query* (1 returned)
  - `"Speculation Rules - moderate viewport heuristics controls" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"Speculation Rules - moderate viewport heuristics controls" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Speculation Rules - moderate viewport heuristics controls" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
  - `"Speculation Rules" "viewport heuristics" OR "moderate" tutorial OR guide` — *Searches for developer guides and articles explaining how to test and configure experimental viewport heuristics in the Speculation Rules API.* (8 returned)
  - `"speculationrules" "viewport" ("heuristics" OR "moderate") JSON script` — *Discovers code snippets, syntax declarations, and script tags testing experimental viewport parameters in speculation rules.* (8 returned)
  - `"Intent to Prototype" OR "Intent to Experiment" "viewport heuristics" "Speculation Rules"` — *Locates official Chromium Blink-dev intents, status trackers, and feature rollout documentation for the moderate viewport heuristics controls.* (2 returned)
  - `"speculation rules" "viewport heuristics" (site:github.com OR site:groups.google.com)` — *Retrieves developer discussions, spec feedback, and issue tracking across GitHub and Google Groups regarding viewport-based prerendering heuristics.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **12 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 540 item(s) inspected

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6240467143491584)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6240467143491584)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/529423512)
