# Import Text (Text Modules)

> **Report Week:** 2026-W38 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

A TC39 proposal to add module \`import … with { type: "text" }\` statements to JavaScript. The import attribute loads text data as a string value.

## Ecosystem Status

- **Momentum:** High (170 points)
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
- [Python import: Advanced Techniques and Tips – Real Python](https://realpython.com/python-import) *(realpython.com · 2026-03-18T11:33:53)*
  > Convenient functions for reading text or binary files directly are also available as read_text() and read_binary(). See the official documentation for more information. Note: To seamlessly fall back to using the backport on older Python versions, you...
- [Import text file as a module in Python - Stack Overflow](https://stackoverflow.com/questions/54181298/import-text-file-as-a-module-in-python) *(stackoverflow.com)*
  > def import_module(filename): with open(filename, &#x27;r&#x27;) as file: file_contents = file.read() module_object = exec(file_contents) return module_object
- [How to Import Modules and Libraries in Python: A Beginner’s Guide to Enhancing Your Coding Skills \| by Gourav verma \| Medium](https://medium.com/@gouravverma2907/how-to-import-modules-and-libraries-in-python-a-beginners-guide-to-enhancing-your-coding-skills-7e3b6a5e2ddb) *(medium.com · 2024-10-20T12:41:22)*
  > Use aliases for long module names to improve readability. Keep your imports organized (standard libraries first, then third-party libraries). Python · Web Development · Web3 · Libraries · Data Science · 0 followers · ·10 following · Help · Status · A...
- [How to Import Text File in Python \| Delft Stack](https://www.delftstack.com/howto/python/import-text-file-python) *(delftstack.com · 2025-03-13T00:00:00)*
  > <strong>Learn to use the open() function, the with statement, and how to read files line by line or as lists</strong>. Each method is explained with clear code examples, making it easy for beginners and experienced programmers ...
- [CSS text color](https://www.w3schools.com/css/css_text.asp) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more.
- [Manipulating CSS with JavaScript · WebPlatform Docs](https://webplatform.github.io/docs/tutorials/manipulating_css_with_javascript) *(webplatform.github.io)*
  > Make a new CSS file, style5.css. Copy and paste the content from here: #square { width: 20em; height: 20em; border: 2px inset gray; margin-bottom: 1em; } button { padding: .5em 2em; }​ · Make a new text file, script5.js. Copy and paste the content fr...
- [HTML DOM Style listStyleImage Property](https://www.w3schools.com/jsref/prop_style_csstext.asp) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more.
- [HTML script tag](https://www.w3schools.com/tags/tag_script.asp) *(w3schools.com)*
  > Tip: If you want to learn more about JavaScript, visit our JavaScript Tutorial. In XHTML, the content inside scripts is declared as #PCDATA (instead of CDATA), which means that entities will be parsed. This means that in XHTML, all special characters...
- [CSSStyleDeclaration cssText Property](https://www.w3schools.com/jsref/prop_cssstyle_csstext.asp) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more.
- [HTML CSS JavaScript - Free Online Editors and Tools](https://html-css-js.com) *(html-css-js.com)*
  > Cascading Style Sheets give the look of you web pages. They specify the color and size of each element. They position the sections on the page and specify other design attributes. They are placed in .css file extensions and linked to the documents. T...
- [Deno 2 vs Node.js vs Bun in 2026: The Complete JavaScript Runtime Comparison - DEV Community](https://dev.to/pockit_tools/deno-2-vs-nodejs-vs-bun-in-2026-the-complete-javascript-runtime-comparison-1elm) *(dev.to · 2026-01-09T09:50:18)*
  > Built on Chrome&#x27;s V8 engine with a libuv-based event loop, it created an entirely new paradigm for building scalable network applications. ... Created by Ryan Dahl (Node.js creator) in 2018 and reaching 2.0 in 2024, Deno was designed to address ...

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
- [&lt;input type="text"&gt; HTML attribute value - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/text) *(developer.mozilla.org)*
- [Import with type text, bytes, and URL · Issue #9444 · whatwg/html](https://github.com/whatwg/html/issues/9444) *(github.com)*
- [GitHub - tc39/proposal-import-attributes: Proposal for syntax to import ES modules with assertions · GitHub](https://github.com/tc39/proposal-import-attributes) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 51 result(s) found across 14 planned queries — **17 verified relevant**
  - `"chromestatus.com/feature/5191512456560640" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/tc39/proposal-import-text" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"github.com/whatwg/html/pull/11933" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"github.com/w3c/webappsec-csp/pull/794" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"tc39.es/proposal-import-text" -site:tc39.es` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"Import Text (Text Modules)" API` — *Core feature API query* (2 returned)
  - `"Import Text (Text Modules)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"(text" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Import Text (Text Modules)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Import Text (Text Modules)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
  - `"import" "with { type: 'text' }" javascript` — *Locate explicit code examples and usage snippets demonstrating the module import attribute syntax for loading text files.* (1 returned)
  - `"proposal-import-text" OR "text modules" javascript (blog OR guide OR tutorial)` — *Find community guides, introductory blog posts, and developer explainers about JavaScript text modules.* (0 returned)
  - `"with { type: 'text' }" (Bun OR Deno OR "Node.js" OR Chrome OR Vite) support` — *Discover ecosystem adoption status, release notes, and runtime/bundler integration announcements for import attributes with type text.* (8 returned)
  - `site:github.com/tc39 OR site:news.ycombinator.com OR site:reddit.com "proposal-import-text" OR "import text modules"` — *Track developer feedback, TC39 meeting consensus, and community discussions regarding the proposal's security and design.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **1 verified relevant**
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
- **Web Page Excerpts Ingested:** 3 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5191512456560640)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5191512456560640)
- [Specification](https://tc39.es/proposal-import-text)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/494350643)
