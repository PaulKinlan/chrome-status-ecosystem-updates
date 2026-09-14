# Deprecate and Remove: Related Website Sets (RWS)

> **Report Week:** 2026-W38 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

Related Website Sets (RWS), formerly known as First Party Sets, provides a framework for developers to declare relationships among sites, to enable limited cross-site cookie access for specific, user-facing purposes. This is facilitated through the use of the Storage Access API (SAA) and requestStorageAccessFor (rSAFor). RWS was designed for use in a browser without third-party cookies. Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove Related Website Sets (RWS).    Once RWS is deprecated; existing usage of SAA across contexts within a set will fall back to the API’s behavior outside of RWS as specified here. The difference in SAA behavior outside of RWS is well illustrated in our developer blogpost here.   The companion rSAFor API will also be deprecated via a separate intent.     We also intend to deprecate RWS-related Chrome Enterprise policies, as well as the chrome.privacy.relatedWebsiteSetsEnabled extension API; and will follow the relevant processes.

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. RWS usage is indicated by the number of registered sets (currently at 71 sets), and the usage of the requestStorageAccessFor API (currently at about 0.95% of pageloads), and after this announcement we intend to archive the registration repository, and expect adoption of rSAFor to decrease over time. 


We will continue to monitor usage and aim to drive it down prior to removal by proactively informing set owners of the deprecation timelines and request them to turn down usage. Further, other browser engines have not signaled interest in launching the API, obviating any interoperability concerns.

## Ecosystem Status

- **Momentum:** High (520 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Deprecate and Remove: Related Website Sets (RWS) is currently Deprecated in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [leapbuzz.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF3ZjKK0Gd0s9i50BQWAXuoScV7H_vmHQ98bCa1EzHfC48__-io7pbQSFngBwLFo6M7skBzpj9_KkIDVuEcN-i2IkHZfIX6jBSknF4WH6eihZ8IAREu_9IuuQWqlyFKqbhzXYcCZaM3iQGdt4t9W35OS1jaIkE=) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  Google filed an **"Intent to Deprecate and Remove: Related Website Sets (RWS)"** (alongside a companion intent for `document.requestStorageAccessFor`) on **Chrome Platform Status** and Chromium channels.   Originally conceived
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQExGomxGhHt8Br_msc_gZcwAxXgNy4RWvzNEOgsN2EHE7imXZ2jQaC-qF7wJzDCU_adbLQqUceG52EVbf7zDSY128T3DhV_F8m-8iyIVhAFIZfgMDM=) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  Google filed an **"Intent to Deprecate and Remove: Related Website Sets (RWS)"** (alongside a companion intent for `document.requestStorageAccessFor`) on **Chrome Platform Status** and Chromium channels.   Originally conceived
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGeP1rzXFtWsQ7rC621hDtiQZpbmrglwEgFo9mr6Uf_YbBiNK-t8q3eFxz3itqlGxbLudF5lkCzI-QZQ3mvHept89UEy0thu6J4dwQ_NNrcOPFvnvoaO7uVFQJpPpIvoAOn-NJhAsyVXa2WOUwmH2G-6E9PRLImAiI-) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  Google filed an **"Intent to Deprecate and Remove: Related Website Sets (RWS)"** (alongside a companion intent for `document.requestStorageAccessFor`) on **Chrome Platform Status** and Chromium channels.   Originally conceived
- [ethyca.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEDBWvFuSdnodnY2ya0l_tSExKqTPVKgu9abEdn80rkUb36Fjtf5XhZyM85cizvWIEuK1mzCxWhtoHMTCoqdWpnKmZs9oNzTm-kmGpvY4YF4ChFrLukphKHAEX20zBxOJWBFiAtuNOm_idZ3-jw2yeaxwwQnFoc5m1_DuQJpBa5IjL1Gd8Y9D2eHSn-uKsfXtKndLo1m2flOok=) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  Google filed an **"Intent to Deprecate and Remove: Related Website Sets (RWS)"** (alongside a companion intent for `document.requestStorageAccessFor`) on **Chrome Platform Status** and Chromium channels.   Originally conceived
- [start.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFeVrm1W1TSdzum-hzNiBkgdqy2JqCHrfo8cgbzGGR6Dy3LQKFwZqnufTLWZu1NDyrQotJHqCHoJ7JLE1VOQs2OAWXTKvN0mRmyHeDsvrucHm5DSlNoutqHUZVAQyyfbG2ZYQZrYOUUd6xtpJjPQ03XyNWSyKmQh4pB7LoiEw9FD4FQQ0hf_TevHV_0-SI=) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  Google filed an **"Intent to Deprecate and Remove: Related Website Sets (RWS)"** (alongside a companion intent for `document.requestStorageAccessFor`) on **Chrome Platform Status** and Chromium channels.   Originally conceived
- [makemytrip.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEAdn22wGN1BQ7FI1yueYO48OK4i2cb0QKO26zjZQMIRUCF4vuLEMstoA2yo6GOHqq3FHYvMnWEYc0Em9WDUKG1BLsV_k31lfNcNB91sTw1WemXQAbDIuSNxzlRefwwugeMwgs_h3XY1qf6PWneyMGjgp_g-zTbCOK3wWwNZwzAT54PQPJ6_DUYoVs_SwfKnL3NswpOBgIBYidIbZm_4QXLBvz1UjbF) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  Google filed an **"Intent to Deprecate and Remove: Related Website Sets (RWS)"** (alongside a companion intent for `document.requestStorageAccessFor`) on **Chrome Platform Status** and Chromium channels.   Originally conceived
- [digiday.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG3I_X6bzi8vyeFgMMXl_I3C0PI8-QHGDJCtHY_q4Pj_zhsod97-ByGV3PcMQG26-JcsREnmFH745z7TcgtKP6LDoat02_0Bth8gKVukWoh3n4BWnTYUEkaEARwTYNCFXoUa38gwlTNguqPd4ybIWoC3wojj6T6csEmSaECUWVSd44qDzuuoTaP) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  Google filed an **"Intent to Deprecate and Remove: Related Website Sets (RWS)"** (alongside a companion intent for `document.requestStorageAccessFor`) on **Chrome Platform Status** and Chromium channels.   Originally conceived
- [ppc.land](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE_oxkRd2e6yYGHJM2XIHOKY6lfreSviLXYVDv3pu3Btn-BKimHsONTzLyz2_e7BiKOgMbM-baKlR5m7a48V2bLruaNFmpCMulQkWDZ-B8CrbzTk6yoYMQce4shN6KN3to2YeFvUjIo86GN9mTXkyBSZuKlH_IccF0nSXvwxObRdYfAGqI=) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  Google filed an **"Intent to Deprecate and Remove: Related Website Sets (RWS)"** (alongside a companion intent for `document.requestStorageAccessFor`) on **Chrome Platform Status** and Chromium channels.   Originally conceived
- [medium.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEJqSXdjOao4OdUZTNBWfnSsNmwPISzzX7nAXqXH-TKwNHmC1CQvM_4gwSc8QLumlu3b1Avb_ow7W21W38ZBXrMI5QNPfvkYlna-fiTDF25IKQLkoIZz-UikAlEA4DR3tEhPK0m2DuCSiwFUQCObsosGsbL3nfxXzmYRusI3M7AVarcFHjl6tyWIwnnaCyMbq5MItd4hhkXQiWvbb8wlu3OrRWzm-eS456qddqHFXQPEly8) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  Google filed an **"Intent to Deprecate and Remove: Related Website Sets (RWS)"** (alongside a companion intent for `document.requestStorageAccessFor`) on **Chrome Platform Status** and Chromium channels.   Originally conceived
- [arxiv.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEjfuLId7WEGA0uTOwA7Fogzk5ROzfilP6uDtAPBn84UoqmiVoeCQHlPxmOLuhVKuUNOmUPKAY7py0nszikJ0SiQpGuq7h4S21y1WPBHraA3ZtZPzldwdtlFg==) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  Google filed an **"Intent to Deprecate and Remove: Related Website Sets (RWS)"** (alongside a companion intent for `document.requestStorageAccessFor`) on **Chrome Platform Status** and Chromium channels.   Originally conceived
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEHJ9arh7iPRgIiDVsgPBGF2pE3s20d-1orvZqTVn05kKBe6OT5tmqV2Nk1oWH9Xd-EyZyqtzvdvPvDy470yULwNt2Mh3odNVRiVT4W-G9DnrQJV56CGAiuu5rcOcXYpj-lsE0cGzJZN6pF) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  Google filed an **"Intent to Deprecate and Remove: Related Website Sets (RWS)"** (alongside a companion intent for `document.requestStorageAccessFor`) on **Chrome Platform Status** and Chromium channels.   Originally conceived
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFS-rQPQil3QV_qHuiYDJDlkp1bmFEcsyP8bwgMa6XD3cakLkvix4bA6Yyo3oQhZvUjhzoJAD_JkXM6NFvQ9bopYVrJ1CUKfH3kUdd_Kz6pJV_HVc6tE-PrMf1XJlkzsBSHgs3vSvl5) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  Google filed an **"Intent to Deprecate and Remove: Related Website Sets (RWS)"** (alongside a companion intent for `document.requestStorageAccessFor`) on **Chrome Platform Status** and Chromium channels.   Originally conceived
- [Intent to Deprecate and Remove: Related Website Sets (RWS)](https://groups.google.com/a/chromium.org/g/blink-dev/c/V-wPXyoruac) *(groups.google.com)*
  > Apologies, I used the wrong Chromestatus link (the original feature status), this one is correct: https://<strong>chromestatus.com/feature/5194473869017088</strong>
- [\[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15144.html) *(mail-archive.com)*
  > Apologies, I used the wrong Chromestatus link (the original feature status), this one is correct: https://<strong>chromestatus.com/feature/5194473869017088</strong>
- [https://github.com/WICG/first-party-sets \| Ecosyste.ms: Awesome](https://awesome.ecosyste.ms/projects/github.com/WICG/first-party-sets) *(awesome.ecosyste.ms)*
  > URL: https://github.com/WICG/first-party-sets · Owner: WICG · Created: 2018-08-01T23:25:34.000Z (over 6 years ago) Default Branch: main · Last Pushed: 2024-06-23T21:07:00.000Z (8 months ago) Last Synced: 2024-08-01T15:05:50.261Z (7 months ago) Langua...
- [\[blink-dev\] Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15143.html) *(mail-archive.com)*
  > This is facilitated through the use of the Storage Access API &lt;https://github.com/privacycg/storage-access&gt; (SAA) and requestStorageAccessFor &lt;https://github.com/privacycg/requestStorageAccessForOrigin/&gt; (rSAFor). RWS was designed for use...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15155.html) *(mail-archive.com)*
  > This is facilitated through the use of theStorage Access API &lt;https://github.com/privacycg/storage-access&gt;(SAA) andrequestStorageAccessFor &lt;https://github.com/privacycg/requestStorageAccessForOrigin/&gt;(rSAFor). RWS was designed for use in ...
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=%22Intent+to+Deprecate+and+Remove%22) *(groups.google.com)*
  > [blink-dev] Intent to Deprecate and Remove: Attribution Reporting API · steps 2 and 3. /Daniel On 2026-06-26 10:21, Yoav Weiss (@Shopify) wrote: &gt; LGTM2 &gt; &gt; On Thu, Jun 25, 2026 at 11:12 PM Chris Harrelson &gt; wrote: &gt; &gt; LGTM1 &gt; &g...
- [Privacy Sandbox feature status](https://privacysandbox.google.com/overview/status) *(privacysandbox.google.com · 2025-10-17T00:00:00)*
  > Intent to Deprecate and Remove: Related Website Sets (RWS) Intent to Deprecate and Remove: document.requestStorageAccessFor · Including requestStorageAccessFor and Related Website Partition. Chrome Platform Status. Scheduled for phaseout. Explainer: ...
- [Google Privacy Sandbox API deprecations](https://learnfocus-sigma.vercel.app/?page=en-git-mdn-browser-compat-data-1762585883240) *(learnfocus-sigma.vercel.app · 2025-11-07T16:01:04)*
  > These APIs include document.requestStorageAccessFor, Related Website Sets (RWS), Shared Storage, Protected Audience, Private Aggregation API, Attribution Reporting API, and Topics API. The deprecation applies to Chromium-based browsers such as Chrome...
- [Wyszukaj wątki](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=title%3A%22Intent+to+Deprecate+and+Remove%22&hl=pl) *(groups.google.com)*
  > you planning to ship? &gt;&gt; Joe Medley | Technical Writer, Chrome DevRel | jme...@google.com | &gt;&gt; 816-678-7195 &lt;(816) 678-7195&gt; &gt;&gt; *If an API&#x27;s not ... &gt; <strong>&quot;Deprecate&quot; means that the feature still works bu...
- [Related Website Sets: developer guide \| Privacy Sandbox](https://developers.google.com/privacy-sandbox/cookies/related-website-sets-integration) *(developers.google.com · 2024-02-06T00:00:00)*
  > <strong>--use-related-website-set=&quot;{\&quot;primary\&quot;: \&quot;https://related-website-sets.glitch.me\&quot;, \&quot;associatedSites\&quot;: [\&quot;https://rws-member-1.glitch.me\&quot;]}&quot; \ https://related-website-sets.glitch.me/</stro...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg16726.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; Once RWS is deprecated; existing usage of SAA across contexts within a &gt;&gt;&gt; set will fall back to the API’s behavior outside of RWS as specified &gt;&gt;&gt; here &lt;https://privacycg.github.io/storage-access/&gt;. ...
- [How Related Website Sets (RWS) Address the Challenges of Third-Party Cookie Blocking — Techtsp \| by Tanmay Patange \| Medium](https://medium.com/@tanmaypatange/how-related-website-sets-rws-address-the-challenges-of-third-party-cookie-blocking-79ff5c547a5e) *(medium.com · 2024-01-20T10:45:21)*
  > If you decide to use Related Website Sets, the next step is to <strong>submit your related websites to a set</strong>. This involves following the submission guidelines provided by Google and adding your sites to a Related Website Sets set on the Git...
- [What are Related Website Sets? Unpacking Google’s Privacy Sandbox Initiative](https://www.adfixus.com/post/wth-are-related-website-sets-unpacking-googles-privacy-sandbox-initiative) *(adfixus.com)*
  > It&#x27;s important to note that any changes to the set, such as adding or removing domains, require a resubmission and re-verification to maintain the integrity of the RWS. In summary, setting up and submitting an RWS demands careful planning and ad...
- [Download Simple Privacy Settings for Chrome - MajorGeeks](https://www.majorgeeks.com/files/details/simple_privacy_settings.html) *(majorgeeks.com)*
  > With just a few clicks, you can easily adjust your browser&#x27;s privacy settings to your liking. <strong>The extension provides a range of options that let you disable tracking cookies, block ads, and prevent third-party scripts from running on web...
- [Privacy Settings - Chrome Web Store](https://chromewebstore.google.com/detail/privacy-settings/ijadljdlbkfhdoblhaedfgepliodmomj?hl=en) *(chromewebstore.google.com)*
  > Learn more about results and reviews. <strong>Removes all forms of tracking including web-bugs, tracking-scripts and information-collectors, and protects your data</strong>. ... Average rating 3.9 out of 5 stars.
- [privacy.websites](https://contest-server.cs.uchicago.edu/ref/JavaScript/developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites.html) *(contest-server.cs.uchicago.edu)*
  > The &quot;Chrome incompatibilities&quot; section is included from https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Chrome_incompatibilities using the WebExtChromeCompat macro.
- [Related Website Sets: developer guide \| Privacy Sandbox](https://privacysandbox.google.com/cookies/related-website-sets-integration) *(privacysandbox.google.com · 2024-02-06T00:00:00)*
  > (An &quot;intra-RWS context&quot; is a context, such as an iframe, whose embedded site and top-level site are in the same RWS.) Note: SAA is shipping in several browsers, however there are differences between browser implementations in the rules of h...
- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ) *(groups.google.com)*
  > Following Chrome&#x27;s announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove rSAFor, as it is only usable in Chrome to request storage access between RWS sites. <strong>Related ...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg17072.html) *(mail-archive.com)*
  > Following Chrome&#x27;s &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; ... in &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; Chrome &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; to request storage access between RWS sites. <strong>Related Website Sets will &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; a...
- [How Chrome evolved the First-Party Sets proposal \| Privacy Sandbox](https://developer.chrome.com/docs/privacy-sandbox/first-party-sets-evolution) *(developer.chrome.com · 2023-02-13T00:00:00)*
  > To learn more about the name change, refer to the blog post. First-Party Sets (FPS) is <strong>designed to support users&#x27; web browsing experience after the deprecation of third-party cookies in Chrome</strong>.
- [Intent to Ship: First-party sets](https://groups.google.com/a/chromium.org/g/blink-dev/c/7_6JDIfE1as/m/wModmpcaAgAJ) *(groups.google.com)*
  > Further developer tooling will likely be needed to support the eventual deprecation of third-party cookies. No. This will be supported on Windows, Mac, Linux, Chrome OS, and Android, but will not initially be supported on Android WebView. The First-P...
- [requestStorageAccessFor API](https://privacycg.github.io/requestStorageAccessFor) *(privacycg.github.io)*
  > If request’s client’s relevant global object’s associated document is not a traversable navigable, return false. Return true. Note: even after a successful requestStorageAccessFor(requestedOrigin) call, frames have to explicitly invoke requestStorage...
- [Request for Deprecation Trial: Deprecate Third-Party Cookies](https://groups.google.com/a/chromium.org/g/blink-dev/c/yGUdvW_t_y0/m/1MVs-PuKAgAJ) *(groups.google.com)*
  > We intend to deprecate and remove default access to third-party (aka cross-site) cookies as part of the Privacy Sandbox Timeline for the Web, <strong>starting with an initial 1% testing period in Q1 2024, followed by a gradual phaseout planned to beg...
- [Google Pauses Plans to Stop Third-Party Cookies in Chrome - Single Grain](https://www.singlegrain.com/blog/google-stops-third-party-cookie-deprecation) *(singlegrain.com · 2024-10-25T19:51:05)*
  > <strong>The goal was to enhance user privacy by deprecating third-party cookies and replacing them with the Privacy Sandbox</strong>, which would allow websites to access user data without invading their privacy or using tracking cookies.
- [Third-Party Cookie Deprecation: Here’s What Privacy Teams Need to Know](https://www.ethyca.com/guides/third-party-cookie-deprecation-here-s-what-privacy-teams-need-to-know) *(ethyca.com · 2026-06-28T04:21:22)*
  > In <strong>July 2024</strong>, Google abandoned the forced deprecation of third-party cookies in Chrome. Many businesses mistook this for a reprieve. However, rather than a complete reversal, it was a delegation.
- [Google's Move to Disable Third-Party Cookies: What Advertisers Need to Know \| iubenda](https://www.iubenda.com/en/blog/googles-move-to-disable-third-party-cookies-what-advertisers-need-to-know) *(iubenda.com · 2026-08-05T21:10:04)*
  > <strong>The key component of this initiative is the deprecation of third-party cookies, which are commonly used for tracking user behavior across different websites</strong>. These cookies have been a cornerstone of digital advertising for years, but...
- [Third-Party Cookies Going Away? Here’s What’s Actually Happening](https://www.cookieyes.com/blog/third-party-cookies-going-away) *(cookieyes.com · 2025-05-28T15:06:54)*
  > <strong>Google launched its Privacy Sandbox initiative in August 2019. The company&#x27;s latest position prioritises user control instead of complete cookie deprecation after several timeline adjustments since 2020.</strong>
- [Intent to Deprecate and Remove: data: URL in SVGUseElement](https://groups.google.com/a/chromium.org/g/blink-dev/c/Q9dLyBhtZTw/m/TAThFzoTAgAJ) *(groups.google.com)*
  > It means there&#x27;s probably some common tool or pattern leading different designers/developers to do this and so likely a relatively large number of individuals who would need to be involved in fixing the breakage. Of course our HTTP Archive list ...
- [Request for Deprecation Trial: Deprecate Third-Party Cookies](https://groups.google.com/a/chromium.org/g/blink-dev/c/yGUdvW_t_y0/m/OEiZvGxRAAAJ) *(groups.google.com)*
  > The primary goal of the deprecation trial is to reduce the amount of broken user-visible experiences as third-party cookies are phased out. Third-party embedded content or services with these kinds of experiences can use the trial to continue to rece...
- [Intent to Deprecate and Remove: Persistent Quota](https://groups.google.com/a/chromium.org/g/blink-dev/c/ziTjKMdOqz8) *(groups.google.com · 2021-07-22T00:00:00)*
  > Finally, we will also begin ignoring the `storageType` parameter (either `window.PERSISTENT` or `window.TEMPORARY`) in methods of the `webkitStorageInfo` API (which is deprecated). ... Support for the PERSISTENT quota type contributes some amount of ...
- [Intent to Deprecate and Remove: -webkit-appearance keywords for arbitrary elements](https://groups.google.com/a/chromium.org/g/blink-dev/c/1d9FpHEVI64/m/ue1dxlEZAgAJ) *(groups.google.com)*
  > From the list of sites from HTTP archive, shown in ChromeStatus, this is used by, for example, dixi-bg.com - return &#x27;&lt;i type=&quot;button&quot; style=&quot;color:#d0205e;&quot; class=&quot;ultsl-record&quot; data-role=&quot;none&quot;&gt;&lt;...
- [Intent to Ship: deprecate BackgroundFetch](https://groups.google.com/a/chromium.org/g/blink-dev/c/CpXXaJh5Rq8/m/f_ZBW4yHBQAJ) *(groups.google.com · 2025-12-03T02:35:02)*
  > Dear all, Thank you all for the ... to Deprecate the Background Fetch API. We have taken all the points raised to heart, especially the concerns from Rick about the UseCounter being potentially misleading, Thomas&#x27;s mention of key use cases like ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Deprecate and Remove: Related Website Sets (RWS)](https://groups.google.com/a/chromium.org/g/blink-dev/c/V-wPXyoruac) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5194473869017088`)*
  > Apologies, I used the wrong Chromestatus link (the original feature status), this one is correct: https://<strong>chromestatus.com/feature/5194473869017088</strong>
- [\[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15144.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5194473869017088`)*
  > Apologies, I used the wrong Chromestatus link (the original feature status), this one is correct: https://<strong>chromestatus.com/feature/5194473869017088</strong>
- [https://github.com/WICG/first-party-sets \| Ecosyste.ms: Awesome](https://awesome.ecosyste.ms/projects/github.com/WICG/first-party-sets) *(awesome.ecosyste.ms)* *(Cites: `https://wicg.github.io/first-party-sets`)*
  > URL: https://github.com/WICG/first-party-sets · Owner: WICG · Created: 2018-08-01T23:25:34.000Z (over 6 years ago) Default Branch: main · Last Pushed: 2024-06-23T21:07:00.000Z (8 months ago) Last Synced: 2024-08-01T15:05:50.261Z (7 months a...

## 📚 Platform Documentation & Specifications

- [related-website-sets/RWS-Submission\_Guidelines.md at main · GoogleChrome/related-website-sets](https://github.com/GoogleChrome/related-website-sets/blob/main/RWS-Submission_Guidelines.md) *(github.com)*
- [GitHub - privacycg/requestStorageAccessFor: A proposed extension to the Storage Access API and discussion of how it may be integrated with First-Party Sets. · GitHub](https://github.com/privacycg/requestStorageAccessFor) *(github.com)*
- [Related Website Sets - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API/Related_website_sets) *(developer.mozilla.org)*
- [Document: requestStorageAccess() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/requestStorageAccess) *(developer.mozilla.org)*
- [content/files/en-us/web/api/document/requeststorageaccess/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/document/requeststorageaccess/index.md) *(github.com)*
- [content/files/en-us/web/api/storage\_access\_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/storage_access_api/index.md) *(github.com)*
- [Document: requestStorageAccessFor() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/requestStorageAccessFor) *(developer.mozilla.org)*
- [Website security](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 55 result(s) found across 11 planned queries — **39 verified relevant**
  - `"chromestatus.com/feature/5194473869017088" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"wicg.github.io/first-party-sets" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Deprecate and Remove: Related Website Sets (RWS)" API` — *Core feature API query* (8 returned)
  - `"Deprecate and Remove: Related Website Sets (RWS)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chrome.privacy" OR "0.95" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and Remove: Related Website Sets (RWS)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and Remove: Related Website Sets (RWS)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (3 returned)
  - `"Related Website Sets" OR "First-Party Sets" "Storage Access API" fallback deprecation` — *Developer-focused guides and blog posts detailing migration paths and the behavioral fallback of the Storage Access API once Related Website Sets are removed.* (8 returned)
  - `"requestStorageAccessFor" ("document.hasStorageAccess" OR "document.requestStorageAccess") github OR example` — *Code examples, scripts, and Web API snippets showing JavaScript usage and error handling for the companion requestStorageAccessFor API.* (8 returned)
  - `Chrome "Related Website Sets" deprecate OR removal "third-party cookies"` — *Industry news, analysis, and Chrome announcements detailing the impact of retaining third-party cookies on the deprecation of Related Website Sets.* (7 returned)
  - `site:github.com/WICG/first-party-sets OR site:groups.google.com/a/chromium.org "Related Website Sets" deprecate OR archive` — *Chromium blink-dev intent threads and WICG GitHub repository discussions regarding the sunsetting and archiving of the RWS registration system.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 19 result(s) found — **12 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 27 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5194473869017088)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5194473869017088)
- [Specification](https://wicg.github.io/first-party-sets)
