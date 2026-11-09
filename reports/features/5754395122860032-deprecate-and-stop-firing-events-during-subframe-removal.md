# Deprecate and stop firing events during subframe removal

> **Report Week:** 2026-W46 | **Milestone:** Chrome 156 | **Category:** Origin trial

## Overview

Stop synchronously firing pagehide, visibilitychange, and unload events when a subframe that has script access to an ancestor frame's DOM is removed from the DOM. Per the HTML Standard, destroying a child navigable on DOM removal does not fire these events, and firing them synchronously enables ancestor DOM re-entrancy during node removal.

### Motivation

When an &lt;iframe&gt; (or frame-hosting &lt;object&gt;/&lt;embed&gt;) is removed from the DOM, Blink historically dispatched pagehide, visibilitychange, and unload synchronously during ContainerNode::RemoveChild / Node::RemovedFrom. The HTML Standard's 'destroy a child navigable' algorithm does not fire unload or pagehide events on DOM removal.  Firing these events synchronously during node removal allows script in a subframe that can access an ancestor LocalFrame's DOM (SecurityOrigin::CanAccess) to re-enter and mutate the ancestor DOM mid-removal, leading to crashes and inconsistent DOM state. Under OmitSubframeDetachmentEventsOnRemoval, subframes that can script an ancestor LocalFrame silently clean up on DOM removal without synchronously firing pagehide, visibilitychange, or unload.

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 40 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Chromium is deprecating and suppressing synchronous lifecycle events—specifically pagehide, visibilitychange, and unload—when subframes capable of scripting an ancestor are removed from the DOM, aligning Blink with the WHATWG HTML Standard's navigable destruction algorithm. Historically, all major browser engines dispatched these events synchronously during node detachment, creating severe DOM re-entrancy hazards, state corruption, and crashes. Under the OmitSubframeDetachmentEventsOnRemoval flag, Chromium is scoping the intervention to same-origin and script-accessible subframes to eliminate the crash vector while validating ecosystem compatibility.

### Recommendations
- Actionable Advice: Audit application architectures and embedded iframes to ensure critical persistence and analytics logic do not rely on subframe pagehide or unload handlers firing upon element removal. Teams should migrate to explicit teardown routines executed prior to removing child frames and test their applications against Chromium using the OmitSubframeDetachmentEventsOnRemoval runtime flag.
- In active Origin Trial in Chrome 156. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5754395122860032/activity) *(chromestatus.com)*
  > The Web Platform feature \*\*"Deprecate and stop firing events during subframe removal"\*\* addresses a legacy browser discrepancy between implementation behavior and the HTML Standard This enabled scripts inside the detaching subframe to synchronously a...
- [chromium.org](https://issues.chromium.org/552675453) *(issues.chromium.org)*
  > This enabled scripts inside the detaching subframe to synchronously access and modify an ancestor frame's DOM while the removal operation was in progress (DOM re-entrancy) Chrome/Blink initiated deprecation and suppression of these events for subfram...
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > \*\*Summary:\*\* Official entries on Chrome Platform Status and the Chrome 156 Release Notes detail the deprecation feature To eliminate synchronous DOM re-entrancy, Chromium introduced the \`OmitSubframeDetachmentEventsOnRemoval\` runtime flag and origin ...
- [googleusercontent.com](https://doc-1160-1o5g-issuetracker.googleusercontent.com/issues/550626700) *(doc-1160-1o5g-issuetracker.googleusercontent.com)*
  > Synchronous event firing during node removal introduced severe architectural edge cases, state inconsistencies, and crashes when scripts running inside subframe event handlers mutated intermediate DOM states of parent windows

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 64 result(s) found across 13 planned queries — **1 verified relevant**
  - `"chromestatus.com/feature/5754395122860032" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/whatwg/html/issues/10194" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"gist.github.com/noamr/f80676a616444de7efb5be671692e919" -site:gist.github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"html.spec.whatwg.org/multipage/document-sequences.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Deprecate and stop firing events during subframe removal" API` — *Core feature API query* (1 returned)
  - `"Deprecate and stop firing events during subframe removal" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"re-entrancy" OR "frame-hosting" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and stop firing events during subframe removal" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and stop firing events during subframe removal" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"OmitSubframeDetachmentEventsOnRemoval" OR "destroy a child navigable"` — *Search for specification discussions, Chromium bug tracking, and developer debates on removing synchronous detachment events.* (7 returned)
  - `"stop firing" AND ("pagehide" OR "unload") AND ("subframe" OR "iframe") removal` — *Find browser release notes, deprecation announcements, and compatibility impact statements across rendering engines.* (8 returned)
  - `iframe removed from DOM ("pagehide" OR "unload") event re-entrancy` — *Discover blog posts and developer guides explaining the security and stability risks of DOM re-entrancy during subframe removal.* (8 returned)
  - `"removeChild" iframe ("visibilitychange" OR "pagehide" OR "unload") web-platform-tests OR wpt` — *Locate real-world test cases, API usage patterns, and Web Platform Tests (WPT) verifying event behavior during child frame removal.* (6 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **4 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 5 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 2 result(s) found — **1 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 2 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5754395122860032)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5754395122860032)
- [Specification](https://html.spec.whatwg.org/multipage/document-sequences.html#destroy-a-child-navigable)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/552675453)
