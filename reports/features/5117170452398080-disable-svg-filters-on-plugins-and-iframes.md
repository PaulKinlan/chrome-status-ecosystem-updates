# Disable SVG filters on plugins and iFrames

> **Report Week:** 2026-W37 | **Milestone:** Chrome 150 | **Category:** Enabled by default

## Overview

Chrome 150 will prevent Scalable Vector Graphics (SVG) filters from being applied to embedded plugins (for example, PDFs) and cross-origin or restricted iFrames (for example, sandboxed ones). When a plugin or iFrame would be painted with an SVG filter effect, the effect tree is traversed to find the highest ancestor without SVG filters, and that effect is then applied instead.

### Motivation

SVG clickjacking (https://lyra.horse/blog/2025/12/svg-clickjacking/) is a new spin on clickjacking which uses dynamic SVG filters to disguise content and manipulate users into taking actions they might not otherwise. Additionally, we would like to further restrict timing attacks (https://media.blackhat.com/us-13/US-13-Stone-Pixel-Perfect-Timing-Attacks-with-HTML5-WP.pdf) involving SVG filters.

## Ecosystem Status

- **Momentum:** Moderate (60 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Disable SVG filters on plugins and iFrames is currently Enabled by default in Chrome 150. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 150. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @rebane2001: "fwiw webkit already implements something similar to this: https://trac.webkit.org/changeset/216541/webkit..."
- Standards Activity (Mozilla): Latest discussion from @rebane2001: "Closely related bugzilla bug: https://bugzilla.mozilla.org/show_bug.cgi?id=2004487..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Disable SVG filters on plugins and cross-origin/restricted iframes](https://github.com/WebKit/standards-positions/issues/654) [open]
- **Mozilla:** [Disable SVG filters on plugins and cross-origin/restricted iframes](https://github.com/mozilla/standards-positions/issues/1395) [open]

## 📰 Ecosystem Blogs & Articles

- [Disable SVG filters on plugins and iFrames](https://chromestatus.com/feature/5117170452398080) *(chromestatus.com · 2026-04-28T00:00:00)*
  > Chrome Platform Status
- [Re: [blink-dev] Intent to Ship: Disable SVG filters on plugins and cross-origin/restricted iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg16452.html) *(mail-archive.com)*
  > /WebKit/: Shipped/Shipping (https://github.com/WebKit/standards-positions/issues/654) <strong>Currently disables SVG filters on plugins and cross-origin iframes</strong>, but allows them on same-origin iframes. /Web developers/: No signals /Other sig...
- [[blink-dev] Intent to Ship: Disable SVG filters on plugins and cross-origin/restricted iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg16379.html) *(mail-archive.com)*
  > WebKit: Shipped/Shipping (https://github.com/WebKit/standards-positions/issues/654) <strong>Currently disables SVG filters on plugins and cross-origin iframes, but allows them on same-origin iframes</strong>. Web developers: No signals Other signals:...
- [Microsoft Edge 150 web platform release notes (Jul. 2026) - Microsoft Edge Developer documentation | Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/150) *(learn.microsoft.com · 2026-07-02T00:00:00)*
  > SVG filters are no longer applied to the following: <strong>Cross-origin or restricted iframes (such as sandboxed iframes).</strong>
- [Chrome 150 beta | Blog | Chrome for Developers](https://developer.chrome.com/blog/chrome-150-beta) *(developer.chrome.com · 2026-06-03T00:00:00)*
  > <strong>Chrome 150</strong> prevents Scalable Vector Graphics (SVG) filters from being applied to cross-origin or restricted iFrames, for example, sandboxed ones, and embedded plugins, for example, PDFs.
- [Chrome 150 | Release notes | Chrome for Developers](https://developer.chrome.com/release-notes/150) *(developer.chrome.com · 2026-06-30T00:00:00)*
  > <strong>Chrome 150</strong> will prevent SVG filters from being applied to embedded plugins (for example, PDFs) and cross-origin or restricted iframes (for example, sandboxed iframes).

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 33 result(s) found across 7 planned queries — **6 verified relevant**
  - `"chromestatus.com/feature/5117170452398080" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/w3c/csswg-drafts/pull/13846" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"Disable SVG filters on plugins and iFrames" API` — *Core feature API query* (1 returned)
  - `"Disable SVG filters on plugins and iFrames" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"lyra.horse" OR "media.blackhat" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Disable SVG filters on plugins and iFrames" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Disable SVG filters on plugins and iFrames" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 2 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 2 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5117170452398080)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5117170452398080)
- [Specification](https://github.com/w3c/csswg-drafts/pull/13846)
- [Chromium Tracking Bug](https://crbug.com/476646486)
