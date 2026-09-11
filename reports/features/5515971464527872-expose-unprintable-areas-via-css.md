# Expose unprintable areas via CSS

> **Report Week:** 2026-W37 | **Milestone:** Chrome 150 | **Category:** Enabled by default

## Overview

Printers usually have a small area at each of the four edges of a sheet of paper that they are not capable of marking reliably, usually due to the printer’s paper handling mechanism. The default page margins are expected to be bigger than these areas, but if authors set margins on their own, and even want to add @page margin boxes (e.g. for custom headers and footers), they need a way of telling where it's safe to print and not.

The CSS descriptor `page-margin-safety` can be used to steer clear of such unprintable areas.

### Motivation

The browser itself has access to information about unprintable areas, so that it can place UA-generated headers and footers within the printable area, and also make the default page margins large enough to prevent loss of content.

But once authors want to set their own page margins, or add page margin boxes (for e.g. custom headers and footers), the problem becomes clear, since this information isn't accessible via CSS.

When developers want to place content near the paper sheet edges, be it due to small @page margins or page margin boxes (for custom headers and footers, for instance), without this change, the author would either have to hope for the best, or add some "reasonably large" margin to steer clear of potentially unprintable regions on the sheet.

## Ecosystem Status

- **Momentum:** Moderate (40 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Expose unprintable areas via CSS is currently Enabled by default in Chrome 150. Verified ecosystem momentum is Moderate with Partial Multi-Engine Interest standards alignment and cautiously optimistic developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 150. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @dholbert: "> if you print a US-Letter page on A4 paper, the top and bottom edges will get larger effective margins for free due to the aspect ratio difference (a..."
- Standards Activity (W3C TAG): Latest discussion from @xiaochengh: "Thanks for the response @mstensho!  The TAG agree that the motivation is strong and the existing APIs are inadequate. Exposing some minimal informatio..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Expose unprintable areas via CSS](https://github.com/WebKit/standards-positions/issues/519) [open]
- **Mozilla:** [Expose unprintable areas via CSS](https://github.com/mozilla/standards-positions/issues/1258) [closed]
- **W3C TAG:** [Expose unprintable areas via CSS](https://github.com/w3ctag/design-reviews/issues/1115) [closed]

## 📰 Ecosystem Blogs & Articles

- [[blink-dev] Intent to Prototype: Expose unprintable areas via CSS](https://www.mail-archive.com/blink-dev@chromium.org/msg13985.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Expose unprintable areas via CSS Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Expose unprintable areas via CSS Morten Stenshorne Tue, 24 Jun 2025 01:11:56 -0700 Contact [email&#160;protected]...
- [Re: [blink-dev] Intent to Ship: Expose unprintable areas via CSS](http://www.mail-archive.com/blink-dev@chromium.org/msg16398.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: Expose unprintable areas via CSS Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Expose unprintable areas via CSS Philip Jägenstedt Wed, 29 Apr 2026 08:14:46 -0700 LGTM1, this has been thoroughly ...
- [[blink-dev] Intent to Ship: Expose unprintable areas via CSS](http://www.mail-archive.com/blink-dev@chromium.org/msg16396.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Expose unprintable areas via CSS Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Expose unprintable areas via CSS Morten Stenshorne Wed, 29 Apr 2026 02:44:04 -0700 *Contact emails* [email&#160;protected] ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Expose unprintable areas via CSS · Issue #1258 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1258) *(github.com · 2025-06-24T08:04:08)* *(Cites: `https://chromestatus.com/feature/5515971464527872`)*
  > Expose unprintable areas via CSS · Issue #1258 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload ...
- [[blink-dev] Intent to Prototype: Expose unprintable areas via CSS](https://www.mail-archive.com/blink-dev@chromium.org/msg13985.html) *(mail-archive.com)* *(Cites: `https://github.com/mstensho/unprintable-areas`)*
  > [blink-dev] Intent to Prototype: Expose unprintable areas via CSS Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Expose unprintable areas via CSS Morten Stenshorne Tue, 24 Jun 2025 01:11:56 -0700 Contact [email&#160;...
- [Re: [blink-dev] Intent to Ship: Expose unprintable areas via CSS](http://www.mail-archive.com/blink-dev@chromium.org/msg16398.html) *(mail-archive.com)* *(Cites: `https://github.com/mstensho/unprintable-areas`)*
  > Re: [blink-dev] Intent to Ship: Expose unprintable areas via CSS Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Expose unprintable areas via CSS Philip Jägenstedt Wed, 29 Apr 2026 08:14:46 -0700 LGTM1, this has been t...
- [[blink-dev] Intent to Ship: Expose unprintable areas via CSS](http://www.mail-archive.com/blink-dev@chromium.org/msg16396.html) *(mail-archive.com)* *(Cites: `https://github.com/mstensho/unprintable-areas`)*
  > [blink-dev] Intent to Ship: Expose unprintable areas via CSS Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Expose unprintable areas via CSS Morten Stenshorne Wed, 29 Apr 2026 02:44:04 -0700 *Contact emails* [email&#160;p...

## 📚 Platform Documentation & Specifications

- [Expose unprintable areas via CSS · Issue #1258 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1258) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 13 result(s) found across 7 planned queries — **4 verified relevant**
  - `"chromestatus.com/feature/5515971464527872" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/mstensho/unprintable-areas" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"drafts.csswg.org/css-page-3" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"page-margin-safety" "@page" (CSS OR stylesheet)` — *Finds concrete CSS code snippets and usage examples of the page-margin-safety descriptor within @page rules.* (8 returned)
  - `"page-margin-safety" OR ("unprintable area" "@page") print CSS (guide OR tutorial OR how-to)` — *Discovers developer tutorials, how-tos, and blog posts detailing how to handle unprintable edge margins in web print styles.* (0 returned)
  - `"page-margin-safety" ("Intent to Ship" OR "Intent to Prototype" OR Chrome OR Firefox OR Safari)` — *Surfaces browser release notes, platform status updates, and engine implementation intents across major vendors.* (0 returned)
  - `("page-margin-safety" OR "unprintable-areas") (site:github.com/w3c/csswg-drafts OR site:github.com/mstensho OR site:bugs.chromium.org)` — *Locates standardization issues, W3C CSSWG spec discussions, bug trackers, and explainer repo feedback.* (0 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 9 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5515971464527872)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5515971464527872)
- [Specification](https://drafts.csswg.org/css-page-3/#page-margin-safety)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/368070327)
