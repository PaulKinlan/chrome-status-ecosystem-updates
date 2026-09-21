# Import Text (Text Modules)

> **Report Week:** 2026-W39 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

A TC39 proposal to add module \`import … with { type: "text" }\` statements to JavaScript. The import attribute loads text data as a string value.

## Ecosystem Status

- **Momentum:** High (100 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Import Text (Text Modules) is currently Enabled by default in Chrome 155. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17403.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Import Text (Text Modules) Daniel Bratell Wed, 09 Sep 2026 07:34:24 -0700 LGTM1 (Stage 3 TC39, shipped in Mozilla) /Danie...
- [\[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17364.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Import Text (Text Modules) Nikolaos Papaspyrou Thu, 03 Sep 2026 12:54:19 -0700 *Contact emails* [email&#160;protected] , [email&#...
- [Moving Letters \| Text animated with JavaScript & anime.js](https://tobiasahlin.com/moving-letters) *(tobiasahlin.com)*
  > &lt;h1 class=&quot;ml14&quot;&gt; &lt;span class=&quot;text-wrapper&quot;&gt; &lt;span class=&quot;letters&quot;&gt;Find Your Element&lt;/span&gt; &lt;span class=&quot;line&quot;&gt;&lt;/span&gt; &lt;/span&gt; &lt;/h1&gt; Source · &lt;h1 class=&quot;...
- [CSSStyleDeclaration cssText Property](https://www.w3schools.com/jsref/prop_cssstyle_csstext.asp) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more.
- [Including JavaScript In Your Page](http://web.simmons.edu/~grabiner/comm244/weeknine/including-javascript.html) *(web.simmons.edu)*
  > It&#x27;s a lot like the &lt;link&gt; tag you&#x27;ve already been using to include your CSS files. Here&#x27;s a very basic snippet of JavaScript using the script tag. This JavaScript is written directly into our HTML page. It will call and alert bo...
- [ELT with Dataform on Google Cloud](https://dev.to/gde/elt-with-dataform-on-google-cloud-kc9) *(dev.to · Mazlum Tosun · Sep 16)*
  > A real-world ELT pipeline with Dataform and BigQuery — staging and mart layers, JavaScript includes, dynamic tables and views, GitHub sync over SSH and Terraform provisioning.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17403.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5191512456560640`)*
  > Re: [blink-dev] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Import Text (Text Modules) Daniel Bratell Wed, 09 Sep 2026 07:34:24 -0700 LGTM1 (Stage 3 TC39, shipped in Mozil...
- [\[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17364.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5191512456560640`)*
  > [blink-dev] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Import Text (Text Modules) Nikolaos Papaspyrou Thu, 03 Sep 2026 12:54:19 -0700 *Contact emails* [email&#160;protected] ...
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-03-23 (public-html@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-html/2026Mar/0003.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/11933`)*
  > y keithamus) https://github.co... - #11965 Move the allow declarative shadow roots flag to the parser (1 by foolip) https://github.com/whatwg/html/pull/11965 - #11933 <strong>Add text imports</strong> (3 by annevk, eemeli) https://github.co...

## 📚 Platform Documentation & Specifications

- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-03-23 (public-html@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-html/2026Mar/0003.html) *(lists.w3.org)*
- [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) *(developer.mozilla.org)*
- [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) *(developer.mozilla.org)*
- [import()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 32 result(s) found across 10 planned queries — **6 verified relevant**
  - `"chromestatus.com/feature/5191512456560640" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/tc39/proposal-import-text" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"github.com/whatwg/html/pull/11933" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"github.com/w3c/webappsec-csp/pull/794" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"tc39.es/proposal-import-text" -site:tc39.es` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"Import Text (Text Modules)" API` — *Core feature API query* (2 returned)
  - `"Import Text (Text Modules)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"(text" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Import Text (Text Modules)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Import Text (Text Modules)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 3 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 8 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 2071 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 3 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 4 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5191512456560640)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5191512456560640)
- [Specification](https://tc39.es/proposal-import-text)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/494350643)
