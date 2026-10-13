# Connection Allowlists - Embedded Enforcement

> **Report Week:** 2026-W42 | **Milestone:** Chrome 157 | **Category:** Origin trial

## Overview

Connection Allowlists (https://chromestatus.com/feature/5175745573945344) is a feature designed to provide explicit control over external endpoints by restricting connections initiated via the Fetch API or other web platform APIs from a document or worker. This aspect of the feature extends Connection Allowlists to support embedded enforcement on iFrames and nested documents/workers. This allows the parent document to enforce restrictions on embedded content where they can choose to opt in or not load.  More details on the proposal can be found here: https://github.com/WICG/connection-allowlists

### Motivation

This change allows a path for embedded content with local sources such as srcdoc or data: URLS to have Connection Allowlist support. It also allows a parent document to set/enforce restrictions on nested content such as iframes or workers to ensure that they are at least as strict as the policies they in place. This helps ensure that embedded content cannot escape the restrictions that are in place and bypass the features purpose.

## Ecosystem Status

- **Momentum:** Moderate (footprint 200 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Connection Allowlists - Embedded Enforcement extends the core Connection Allowlists feature across iframe boundaries and nested workers, using a model inspired by CSP Embedded Enforcement to prevent child contexts from bypassing host network policies. Spearheaded by Microsoft Edge and Google engineers within the WICG, the capability is entering a Chromium Origin Trial targeted for Chrome 157. While the core networking primitive is shipping in Chromium-based browsers, nested enforcement remains experimental and is not yet part of Baseline interoperability.

### Recommendations
- Actionable Advice: Engineering teams managing sensitive host applications or embedded widget ecosystems should pilot the feature via the Origin Trial and Canary flags to stress-test local schemes and iframe policy matching. Because cross-engine adoption is still pending, teams must maintain standard CSP fallback policies rather than relying exclusively on embedded allowlists in production.
- In active Origin Trial in Chrome 157. Validate API ergonomics in staging/pilot environments before general availability.
- Standards Activity (WebKit): Latest discussion from @mikewest: "A brief update on timing: we're now planning an initial Origin Trial starting in Chrome 147 (https://groups.google.com/a/chromium.org/g/blink-dev/c/lR..."
- Standards Activity (Mozilla): Latest discussion from @evilpie: "Suggested position: positive  #1431..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Connection Allowlists](https://github.com/WebKit/standards-positions/issues/583) [open]
- **Mozilla:** [Connection Allowlists](https://github.com/mozilla/standards-positions/issues/1322) [closed]

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img544-dot-cr-status.appspot.com/feature/5657801797009408) *(img544-dot-cr-status.appspot.com)*
  > \*\*Embedded Enforcement\*\* extends this boundary across iframe and nested context boundaries \* \*\*Origin Trial & ChromeStatus Listings (\*chromestatus.com/feature/5175745573945344\*):\*\* \* While core Connection Allowlists entered origin trials and rollout ...
- [googlesource.com](https://chromium.googlesource.com/chromium/src.git/+/refs/heads/main/third_party/blink/renderer/platform/runtime_enabled_features.json5) *(chromium.googlesource.com)*
  > \*\*Embedded Enforcement\*\* extends this boundary across iframe and nested context boundaries: \* Modeled on \*\*CSP Embedded Enforcement (CSPEE)\*\*, it introduces the \`connectionallowlist\` content attribute and \`connectionAllowlist\` IDL attribute on \`HTMLI...
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > \* \*\*Origin Trial & ChromeStatus Listings (\*chromestatus.com/feature/5175745573945344\*):\*\* \* While core Connection Allowlists entered origin trials and rollout starting in earlier milestones (e.g., Chrome 148–152), the dedicated feature \*\*Connection A...
- [webkit.org](https://webkit.org/standards-positions) *(webkit.org)*
  > \* \*\*Browser Standards Positions (WebKit / Mozilla):\*\* \* WebKit opened standards review requests tracking the base Connection Allowlists specification and its iframe embedded enforcement primitives
- [chromestatus.com](https://chromestatus.com/reports/external_reviews/webkit) *(chromestatus.com)*
  > \* \*\*Browser Standards Positions (WebKit / Mozilla):\*\* \* WebKit opened standards review requests tracking the base Connection Allowlists specification and its iframe embedded enforcement primitives
- [\[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17559.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement 'Giovanni Del Valle' via blink-dev Fri, 25 Sep 202...
- [\[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17505.html) *(mail-archive.com)*
  > &gt; &gt; \*Is this feature fully tested by web-platform-tests?\* &gt; &gt; Yes &gt; &gt; \*Flag name on about://flags\* &gt; &gt; Experimental Web Platform features &gt; (about://flags#enable-experimental-web-platform-features). There is no &gt; dedicat...
- [\[blink-dev\] Intent to Prototype: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg16801.html) *(mail-archive.com)*
  > &lt;strong&gt;This aspect of the feature extends Connection Allowlists to support embedded enforcement on iFrames and nested documents/workers&lt;/strong&gt;. It allows a parent document to require an allowlist of the content it embeds.
- [\[blink-dev\] Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17485.html) *(mail-archive.com)*
  > \[email protected\]&lt;mailto:\[email ....com/chromium/src/+/main/docs/connection\_allowlist\_design.md Summary Connection Allowlists &lt;strong&gt;restrict the endpoints a document or worker may connect to&lt;/strong&gt;....
- [\[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17573.html) *(mail-archive.com)*
  > &gt; &gt; \*Is this feature fully tested ... &gt; dedicated about://flags entry for embedded enforcement; &lt;strong&gt;the separate &gt; &quot;Connection allowlists&quot; entry toggles only the base network feature, which &gt; is already enabled by default...
- [\[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17685.html) *(mail-archive.com)*
  > 026 at 4:50:48 PM UTC-7 Giovanni ... or worker may &gt;&gt;&gt; connect to. &lt;strong&gt;This extension lets a parent document require an allowlist of &gt;&gt;&gt; the content it embeds, via a connectionallowlist attribute on the iframe&lt;/strong&gt;. &gt;&gt;...
- [Chrome Platform Status](https://chromestatus.com/feature/5175745573945344) *(chromestatus.com)*
  > Chrome Platform Status

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Clone CA and required-CA when cloning policy container by noamr · Pull Request #41 · WICG/connection-allowlists](https://github.com/WICG/connection-allowlists/pull/41) *(github.com)* *(Cites: `https://wicg.github.io/connection-allowlists/#issue-d96e905e`)*
  > Clone CA and required-CA when cloning policy container by noamr · Pull Request #41 · WICG/connection-allowlists · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in ...
- [\[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17559.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/connection-allowlists/#issue-d96e905e`)*
  > \[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement 'Giovanni Del Valle' via blink-dev Fri, ...

## 📚 Platform Documentation & Specifications

- [mozilla.org](https://bugzilla.mozilla.org/show_bug.cgi?id=2056838) *(bugzilla.mozilla.org)*
- [github.com](https://github.com/wicg/connection-allowlists/issues/36) *(github.com)*
- [github.com](https://github.com/WICG/connection-allowlists) *(github.com)*
- [Clone CA and required-CA when cloning policy container by noamr · Pull Request #41 · WICG/connection-allowlists](https://github.com/WICG/connection-allowlists/pull/41) *(github.com)*
- [Connection Allowlists · Issue #1424 · web-platform-tests/interop · GitHub](https://github.com/web-platform-tests/interop/issues/1424) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 48 result(s) found across 12 planned queries — **7 verified relevant**
  - `"chromestatus.com/feature/5657801797009408" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WICG/connection-allowlists/blob/main/iframe-embedded-enforcement-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"wicg.github.io/connection-allowlists" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Connection Allowlists - Embedded Enforcement" API` — *Core feature API query* (3 returned)
  - `"Connection Allowlists - Embedded Enforcement" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromestatus.com" OR "github.com" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Connection Allowlists - Embedded Enforcement" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Connection Allowlists - Embedded Enforcement" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (3 returned)
  - `"Connection Allowlists" ("embedded enforcement" OR iframe) explainer OR tutorial` — *Finds high-level overviews, developer explainer breakdowns, and security guides on applying Connection Allowlists to iframes.* (7 returned)
  - `"Connection-Allowlist" (iframe OR srcdoc OR worker) "embedded enforcement"` — *Identifies concrete syntax examples, HTTP headers, and DOM/attribute usage for enforcing Connection Allowlists on embedded frames and local sources.* (8 returned)
  - `"Connection Allowlists" "embedded enforcement" (site:chromestatus.com OR "Intent to Prototype" OR "Intent to Ship")` — *Tracks browser vendor release timelines, Blink intent-to-ship/prototype threads, and implementation status across Chromium.* (0 returned)
  - `"connection-allowlists" ("embedded enforcement" OR "iframe-embedded-enforcement") site:github.com` — *Surfaces specification feedback, open GitHub issues, standards body discussions, and security concerns from the WICG repository.* (2 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 1 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 7 result(s) found — **4 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 6 engineer comment(s) read
- **Web Page Excerpts Ingested:** 13 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5657801797009408)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5657801797009408)
- [Specification](https://wicg.github.io/connection-allowlists/#issue-d96e905e)
