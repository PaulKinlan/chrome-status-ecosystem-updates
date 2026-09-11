# Chrome 151 removes support for macOS 12

> **Report Week:** 2026-W37 | **Milestone:** Chrome 151 | **Category:** Deprecated

## Overview

Chrome 150 is the last release to support macOS 12; Chrome 151+ will no longer support macOS 12, which is outside of its support window with Apple. To maintain security, it is essential to run Chrome browser on a supported operating system.

On Macs running macOS 12, Chrome continues to work, showing a warning infobar, but it will not update any further. If users wish to have Chrome updated, they need to update their computer to a supported version of macOS.

For new installations of Chrome 151+, macOS 13+ is required.

## Ecosystem Status

- **Momentum:** High (180 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** Starting with Chrome 151, Google has raised its minimum operating system requirement to macOS 13 (Ventura), officially sunsetting support for macOS 12 (Monterey). Chrome 150 remains the final milestone to run on macOS 12, continuing to function with a warning infobar but receiving no further feature or critical security updates. This deprecation aligns with Apple's standard operating system lifecycle and Google's standard platform security policy.

### Recommendations
- Actionable Advice: Web development and QA teams should audit internal CI runner images, local testing environments, and enterprise device fleets to ensure systems run macOS 13 or later. Monitor analytics for legacy macOS 12 user agents, and advise affected enterprise end-users to update macOS or adopt supported alternative channels.
- Marked for deprecation in Chrome 151. Audit codebases and migrate to modern standard alternatives.
- Standards Activity (WebKit): Latest discussion from @hober: "Closing as we've identified our position...."
- Standards Activity (Mozilla): Latest discussion from @smaug----: "The affect to load event firing is very critical piece. Without that being defined, it isn't clear to me how the lazyload is supposed to work...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Move triage links to bottom of readme.](https://github.com/WebKit/standards-positions/pull/151) [closed]
- **WebKit:** [Declarative Shadow DOM](https://github.com/WebKit/standards-positions/issues/12) [closed]
- **Mozilla:** [Lazy loading for images](https://github.com/mozilla/standards-positions/issues/151) [closed]
- **Mozilla:** [Allow for proposals](https://github.com/mozilla/standards-positions/pull/12) [closed]
- **W3C TAG:** [WASM JS API review](https://github.com/w3ctag/design-reviews/issues/151) [closed]
- **W3C TAG:** [Orientation auto](https://github.com/w3ctag/design-reviews/pull/12) [closed]

## 📰 Ecosystem Blogs & Articles

- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFa9-Nc-egZ3q464-fgWc1WluAU8UZYVIFoDeFBXmlCKTAzBVgzatrA8dpvyeMYzggjNmFArc2v5f0OqEr-UhRVSdCTwEwc0i7QAohjVskf6OZBQA5A4BFd6NZE1GGJjfqepjFUz_QSY_H3kOr8kzOyj3D2di8bYXjeAutX7HsxOA16mgrTR2QxoVi8nYaNuJYUyRrnoXSguuVcmxeHpErKkzM=) *(vertexaisearch.cloud.google.com)*
  > Sunsetting support for macOS 12 (Monterey) in mid-2026 - Google Chrome Community Skip to main content Google Chrome Help Sign in Google Help Help Center Community Google Chrome Privacy Policy Terms of Service Submit feedback Send feedback on... This ...
- [appleinsider.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF-Yd9sDc6XKuYulk0xQDN6cvYGvZR-jV8dpGrEfhwiANHHQ9uwFdZA2dYGNQB0lHWiAkGzylLJWyus4SaT2DK97uG-VN290uqvwIOtTV_iVlCeB9KC9Klgpj_bDzCoA6GX0wk5UcDg14xXLeV6mOudHG5ULzf2W8Qz-Ab7EULp0ROxIZlws0FaAASa-GkMciupxeX7bM4kh5wKkbczQ_6bDI0VvoaATDPk2StCu49ayhc-8LPB2ARDYxEf) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Change  Google has officially sunset support for **macOS 12 (Monterey)** starting with **Chrome 151**:  * **Final Supported Version:** Chrome 150 was the last milestone to receive full updates and security patches on macOS 12. * **
- [indiatimes.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG5bWIsmJMmcKoaQhFGo-QwPrLOn_5deVvGOTQXXdfgoAGdeXvKUWuR5ohrbAy_RZRJYK1EPO_BMRGgO0MaN_Rqyy3O97DNUPOuvQLd41SDuKcvltZCvrVLAKlRCyAQ_oXaARCyjaeEAh1ZxAEfyXXxgcJEI6PAOXoO0xvKcvRVGS1PGDiYPA-91i1tHTqJAdtiM-yVr0Vu77PgZGk0ksjn0Si1CjoH9lnJ-lDaNzA2UzrlzaxHA7_QqK3sDx_9uwRJYw==) *(vertexaisearch.cloud.google.com)*
  > Google Chrome to drop macOS Monterey support by July 2026 - The Times of India Edition IN IN US English English हिन्दी मराठी ಕನ್ನಡ தமிழ் বাংলা മലയാളം తెలుగు ગુજરાતી Weather Sign In TOI Today&#x27;s ePaper News Technology News Tech News Google Chrome ...
- [howtogeek.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEX4CD4nk-XBrnTfYH406HH2hFHWbFxJLJSc_ZIhakdq1F1EX0QlhWiNAq-mqoWbRmMn4wrw_vzihoeHvE_Ij2cECb-zuFcJS2s5YIXWQ6Niihdemh69Nbs-Gz_F-_B9esBaT-_9BzCkUPdh5a8V3fC2l87mV0FEsyqkmZM42IQhaio3A==) *(vertexaisearch.cloud.google.com)*
  > Older Mac computers are about to lose Google Chrome Menu Sign in Sign in now Close Close Older Mac computers are about to lose Google Chrome Credit: Corbin Davenport / Google By Jorge A. Aguilar Published Jan 12, 2026, 12:44 PM EST Aggy is a veteran ...
- [superchargebrowser.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG3dHKcLrC4i_Xo_3vo1ifrC_tYl-J61nATcjlXCORdZQGblEz44HMswAarXHoTxaIpliR95-sL7GSBvk5b8oBsW5oytdr62aAtow9tKZvUTPPhZZ9fOzAv1RqBSArs8w0nenSLRjgGZAC1r1fZh6qSnUqn1NlPmpCZp3AI0g_SVlZIZmM0EFoh4bIW) *(vertexaisearch.cloud.google.com)*
  > Chrome 150 Is the Last Release for macOS Monterey (2026) so one-time entrance cascades render settled instead of replaying. Cold loads, direct entries, and refreshes have no inbound transition, so the cinematic first-paint cascade still plays for the...
- [lifehacker.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF9G28o_SWEEdybZ5uz8pz11G_rH6pb3IZl8rVIiF_tGwE6kS_Ep4c22kUCN6F9yBfEXmHqq8E1nJcTrJiwk1hgF9YjS3bUPLwVCbGDUBGTG7oFIQY0GyHTJd2gw4biIYoOGF7btyswRM3LiupKn2nBvjkfm6I6AHWu4Zg3HS1tnGwd1oRRSg==) *(vertexaisearch.cloud.google.com)*
  > Google Chrome Is About to Drop Support for These Macs | Lifehacker Skip to Main Content View our Bluesky Page (Opens in a new tab) View our Instagram Page (Opens in a new tab) View on Facebook Page (Opens in a new tab) View our Youtube Page (Opens in...
- [9to5mac.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHP-_6peqT2m_I-aalznDyPvpNgPgMj4ZlNzPpsfvfuGt9VKFmIN5hp4nGUwSbPhJzCLYycyQQJDi5YNgj5VArQnplt6yOlqL8KgXoMPG89c46z6x71iNR8bQBtVkURyuOOLiJ-B5Ugwuo5PUpbkdlLskgxIxkK-t7nslOFBCXk1Egu5hX1JXpB6CnWfg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Change  Google has officially sunset support for **macOS 12 (Monterey)** starting with **Chrome 151**:  * **Final Supported Version:** Chrome 150 was the last milestone to receive full updates and security patches on macOS 12. * **
- [macrumors.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFRLCRIEMt6y4BCAtzwpBZ9yTFuCG4ezmAurWvh6Qopdiqy5WdXb6Rzi9h2SvegoeAr9Hsxe-wD4FObKWWjUvThVsx2Z8rI3siUk6gFkElZPkRwpITc85BVsH4FFyegwB4pgpSR1oqU-HgjaC2pMmxnqqZHbs5OG6e2Z57KJuoITVnJHMycLuuya5w=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Change  Google has officially sunset support for **macOS 12 (Monterey)** starting with **Chrome 151**:  * **Final Supported Version:** Chrome 150 was the last milestone to receive full updates and security patches on macOS 12. * **
- [r/apple on Reddit: Google Chrome 150 Will Be Last Version to Support macOS Monterey](https://www.reddit.com/r/apple/comments/1qatwtm/google_chrome_150_will_be_last_version_to_support) *(reddit.com · 2026-01-12T12:44:28)*
  > https://<strong>chromestatus.com/feature/5077742779498496</strong> Share
- [PSA: Google Chrome 151 to drop support for macOS 12 Monterey - 9to5Mac](https://9to5mac.com/2026/01/12/google-chrome-151-to-drop-support-for-macos-12-monterey) *(9to5mac.com · 2026-01-12T23:34:03)*
  > Chrome 150 will be the last release to support macOS 12; <strong>Chrome 151+ will no longer support macOS 12,</strong> which is outside of its support window with Apple. Running on a supported operating system is essential to maintaining security.
- [Chrome 150 Is the Last Release for macOS Monterey (2026)](https://www.superchargebrowser.com/library/chrome-150-macos-monterey-end-support-2026) *(superchargebrowser.com · 2026-06-02T00:00:00)*
  > <strong>As of June 2026, Chrome 150 is the final release that supports macOS 12 Monterey</strong>. Chrome 150 is targeted for stable release around June 30, 2026. Chrome 151, expected July 28, 2026, will require macOS 13 Ventura or later.
- [Google Chrome ending support for macOS 'Monterey' in July 2026](https://9to5google.com/2026/01/23/google-chrome-ending-support-for-macos-monterey-in-july-2026) *(9to5google.com · 2026-01-23T15:25:00)*
  > <strong>Chrome 150 will be the last version of the browser that will support macOS 12, “Monterey,”</strong> with further releases requiring at least macOS 13, “Ventura,” to receive new updates.
- [Chrome 151 is rolling out, officially ending support for macOS 12 Monterey - PiunikaWeb](https://piunikaweb.com/2026/07/01/chrome-151-rolling-out-end-of-support-macos-monterey) *(piunikaweb.com · 2026-07-01T08:45:03)*
  > That means <strong>Macs running Monterey will remain on Chrome 150</strong> while devices running Ventura and newer continue receiving Chrome updates. Although Chrome 151 is now being promoted to the stable channel, Monterey users won’t be receiving ...
- [Sunsetting support for macOS 12 (Monterey) in mid-2026 - Google Chrome Community](https://support.google.com/chrome/thread/404150391/sunsetting-support-for-macos-12-monterey-in-mid-2026?hl=en) *(support.google.com)*
  > Skip to main content · Google Chrome Help · Sign in · Google Help · Help Center · Community · Google Chrome · Terms of Service · Submit feedback · Send feedback on
- [Google Chrome 150 Will Be Last Version to Support macOS Monterey - MacRumors](https://www.macrumors.com/2026/01/12/google-chrome-150-last-version-support-macos-12) *(macrumors.com · 2026-01-12T12:20:34)*
  > Google has confirmed that its Chrome 150 browser update coming later this year will be the last version to support macOS Monterey. Going forward, <strong>Chrome 151 and later versions will no longer support macOS 12,</strong> which Apple released in ...
- [Google Chrome is ditching support for macOS 12 Monterey, leaving older Macs stranded](https://appleinsider.com/articles/26/01/23/google-chrome-is-ditching-support-for-macos-12-monterey-leaving-older-macs-stranded) *(appleinsider.com · 2026-01-23T18:01:48)*
  > The news, announced via a post on Google&#x27;s support website, confirms that <strong>the current Chrome 150 is the last one to support macOS Monterey</strong>. The plan is for Chrome 151 to be released at the end of July 2026 and become the first t...
- [Google Chrome Community](https://support.google.com/chrome/community?hl=en&msgid=TsBgV5wnlqcJ&gpf=d%2Fmsg%2Fchrome%2FNyrM-9fq7d8%2FTsBgV5wnlqcJ&visit_id=639243764139019225-1447861136&rd=1) *(support.google.com)*
  > Sunsetting support for macOS 12 (Monterey) in <strong>mid-2026</strong> Hey all, Chrome 150 is the last version of Chrome that will support macOS 12 (Monterey).
- [r/mac on Reddit: Google Chrome will soon end support for macOS Monterey](https://www.reddit.com/r/mac/comments/1qm6s90/google_chrome_will_soon_end_support_for_macos) *(reddit.com · 2026-01-25T02:34:16)*
  > 97 votes, 22 comments. They never cut support for older macOS versions this fast. Firefox, on the other hand, still supports macOS Catalina in its…

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [r/apple on Reddit: Google Chrome 150 Will Be Last Version to Support macOS Monterey](https://www.reddit.com/r/apple/comments/1qatwtm/google_chrome_150_will_be_last_version_to_support) *(reddit.com · 2026-01-12T12:44:28)* *(Cites: `https://chromestatus.com/feature/5077742779498496`)*
  > https://<strong>chromestatus.com/feature/5077742779498496</strong> Share

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 27 result(s) found across 5 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5077742779498496" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"Chrome 151" OR "Chrome 150" "macOS 12" OR "Monterey" "support"` — *Finds official announcements, Chromium release notes, and tech news coverage regarding Chrome 151 dropping support for macOS 12 Monterey.* (8 returned)
  - `site:support.google.com/chrome OR site:support.google.com/chrome/a "macOS 12" OR "Monterey" end of support` — *Locates official Google Chrome Help Center articles and enterprise administrator guides on handling macOS Monterey end-of-life deprecation.* (8 returned)
  - `site:reddit.com/r/mac OR site:reddit.com/r/sysadmin "macOS 12" "Chrome" "update" OR "unsupported"` — *Surfaces community feedback, user workarounds, and enterprise sysadmin discussions regarding the discontinued Chrome updates on macOS 12.* (8 returned)
  - `site:chromium.googlesource.com OR site:issues.chromium.org "macOS 12" OR "12.0" minimum system version "151"` — *Searches Chromium issue trackers and source repository commits where macOS minimum deployment targets and OS version checks were updated for milestone 151.* (4 returned)
- **Google Search Grounding (gemini-3.7-flash):** 10 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 6 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 12 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5077742779498496)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5077742779498496)
