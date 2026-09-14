# Remove \[LegacyNoInterfaceObject\] from FontFaceSet IDL

> **Report Week:** 2026-W38 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Chromium's FontFaceSet IDL previously used \[LegacyNoInterfaceObject\], which hid FontFaceSet as a global property and deleted the constructor property from its prototype. This deviated from the CSS Font Loading spec and differed from Safari and Firefox behavior. This change removes \[LegacyNoInterfaceObject\] from the FontFaceSet IDL, so FontFaceSet is properly exposed as a global property. Since no constructor() is defined in the IDL, calling new FontFaceSet() from JavaScript now throws TypeError: Illegal constructor, matching the spec. This also fixes the historical.html WPT, which was previously failing in Chromium.

### Motivation

Chromium applied [LegacyNoInterfaceObject] to FontFaceSet, hiding it as a global property and breaking "FontFaceSet" in self. This caused 18 WPT idlharness failures and one historical.html failure. Safari and Firefox already expose FontFaceSet globally. This brings Chromium into spec compliance with no new constructor exposed.

## Ecosystem Status

- **Momentum:** High (110 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Remove \[LegacyNoInterfaceObject\] from FontFaceSet IDL is currently Enabled by default in Chrome 151. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Web-Facing Change PSA: Remove \[LegacyNoInterfaceObject\] from FontFaceSet IDL](http://www.mail-archive.com/blink-dev@chromium.org/msg16782.html) *(mail-archive.com)*
  > This change removes [LegacyNoInterfaceObject] from the FontFaceSet IDL, so FontFaceSet is properly exposed as a global property. Since no constructor() is defined in the IDL, calling new FontFaceSet() from JavaScript now throws TypeError: Illegal con...
- [\[WPT\] New failures introduced in external/wpt/css/css-font-loading by import https://crrev.com/c/7499716 \[477568263\] - Chromium](https://issues.chromium.org/issues/477568263) *(issues.chromium.org)*
  > <strong>By removing [LegacyNoInterfaceObject], FontFaceSet is now properly exposed globally</strong>. Since no constructor() is defined in the IDL, V8&#x27;s IsValidConstructorMode callback correctly throws &quot;Illegal constructor&quot; (TypeError)...
- [Chrome 150 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-150-beta?hl=en) *(developer.chrome.com · 2026-06-03T20:17:18)*
  > <strong>This removal removes [LegacyNoInterfaceObject] from the FontFaceSet IDL, making FontFaceSet properly accessible as a global property</strong>.
- [Chrome Release 151](https://chromestatuslite.com/?version=151) *(chromestatuslite.com)*
  > <strong>This change removes [LegacyNoInterfaceObject] from the FontFaceSet IDL, so FontFaceSet is properly exposed as a global property</strong>. Since no constructor() is defined in the IDL, calling new FontFaceSet() from JavaScript now throws TypeE...
- [Chrome 151 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-151-beta?hl=en) *(developer.chrome.com)*
  > <strong>Removes [LegacyNoInterfaceObject] from the FontFaceSet IDL definition to align with the CSS Font Loading specification</strong>.
- [Google Chrome 151 stable version released, adding a Web API that makes it easy to stream text. - GIGAZINE](https://gigazine.net/gsc_news/en/20260729-google-chrome-151) *(gigazine.net · 2026-07-29T00:00:00)*
  > ◆Abolished/Deleted - End of support for macOS 12 - FontFaceSet : <strong>Remove the [LegacyNoInterfaceObject] attribute from the Web IDL definition</strong>. - Manifest V2 extension functionality is completely disabled.
- [Chrome 151 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/151) *(developer.chrome.com · 2026-07-28T00:00:00)*
  > Removes [LegacyNoInterfaceObject] from the FontFaceSet IDL <strong>so that FontFaceSet is properly exposed as a global property on the window object</strong>.
- [FontFaceSet.webidl - mozsearch](https://searchfox.org/mozilla-central/source/dom/webidl/FontFaceSet.webidl) *(searchfox.org)*
  > mozilla-central · /dom/webidl/FontFaceSet.webidl (file symbol) · Navigation · Enable keyboard shortcuts · Source code · File a bug in Core :: CSS Parsing and Computation · Revision control · Permalink Y · Remove the Permalink · Git log

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\`api.FontFaceSet\` - Update Chrome exposure notes · Issue #30411 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/issues/30411) *(github.com · 2026-09-03T10:58:38)* *(Cites: `https://chromestatus.com/feature/5123999844663296`)*
  > `api.FontFaceSet` - Update Chrome exposure notes · Issue #30411 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or wi...

## 📚 Platform Documentation & Specifications

- [\`api.FontFaceSet\` - Update Chrome exposure notes · Issue #30411 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/issues/30411) *(github.com)*
- [FontFaceSet](https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet) *(developer.mozilla.org)*
- [FontFaceSet: add() method](https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet/add) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 41 result(s) found across 7 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/5123999844663296" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"drafts.csswg.org/css-font-loading" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Remove [LegacyNoInterfaceObject] from FontFaceSet IDL" API` — *Core feature API query* (2 returned)
  - `"Remove [LegacyNoInterfaceObject] from FontFaceSet IDL" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"historical.html" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Remove [LegacyNoInterfaceObject] from FontFaceSet IDL" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Remove [LegacyNoInterfaceObject] from FontFaceSet IDL" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 32 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5123999844663296)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5123999844663296)
- [Specification](https://drafts.csswg.org/css-font-loading/#fontfaceset)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/477568263)
