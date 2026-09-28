# XML parsing in Rust for non-XSLT scenarios

> **Report Week:** 2026-W40 | **Milestone:** Chrome 153 | **Category:** Enabled by default

## Overview

To improve browser security and protect users against memory-related vulnerabilities, Chrome 153 updates its XML parsing engine to a memory-safe \[Rust\](https://rust-lang.org/) implementation for several common scenarios. This foundational update eliminates potential memory corruption bugs while maintaining full compatibility with existing web standards.  Chrome has already begun to deprecate and remove \[XSLT\](https://www.w3.org/TR/xslt-30/). While this process continues, the new, safer parser will handle the following scenarios where no XSLT is required:  1. DOMParser Web API. 2. Accessing responseXML of XMLHttpRequest. 3. SVG standalone images (that is, accessing a \`image.svg\` document directly as a top level navigation). 4. SVG external images (including a main document embedding an SVG as an external image resource).

## Ecosystem Status

- **Momentum:** High (200 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Shipped by default in Chrome 153 and Chromium-based browsers, this engine refactor replaces parts of the legacy C-based libxml2 parsing stack with a memory-safe Rust parser for workloads not involving XSLT—including DOMParser, XMLHttpRequest responseXML, and standalone or embedded SVGs. As an internal implementation change designed to eliminate memory-corruption vulnerabilities, it introduces no developer-visible API changes while maintaining full compliance with W3C XML standards. Browser consensus treats this as an internal Chromium architecture detail, though all major engines align on the surrounding strategy of retiring legacy XML/XSLT attack surfaces.

### Recommendations
- Actionable Advice: No code changes are required for existing DOMParser, XHR responseXML, or SVG workflows, as the transition is designed to be completely transparent. Development teams should instead focus audits on any legacy XSLT dependencies (such as XSLTProcessor or &lt;?xml-stylesheet?&gt; transforms), migrating those pipelines to server-side rendering or modern client-side JavaScript before XSLT is phased out entirely.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [reddit.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHTlPtlC9PrkVrd1YzNwaxXz75vAllaieFcP-MHcGh4OLbeueigQDC-rkQWB858TBtwPLM7gE-X657jZDsA-Gttudr74bX9QSzxR8gtOL9oqNBixcDs8BWUt0bQWO1JaOxxp_JNxlzFpHQzeGAT30zDCni-SbzxUsBT1mbHacT2Y_qVDJeQUCGxcHW6_u98wCqOe7KV) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  To mitigate memory-corruption vulnerabilities and adhere to Chromium's "Rule of Two" (restricting unsafe code parsing untrusted inputs in privileged processes), Chrome transitioned parts of its XML parsing infrastructure f
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG4xxljXMr8onFj8DS6lyogQyfXzzpgE3RcDFOTOVpctTdwxEBSTflOE8T8J0_TCU1RSTlClbF0PHjGIhd2hIwmYnaBWfNhTC6s3lFC0YLZKdtxB0H_EsEUmCgEU-Bk_LtHc6_9V-Ro6SAh4f_Y9pQFimHZ2w==) *(vertexaisearch.cloud.google.com)*
  > Removing XSLT for a more secure browser | Web Platform | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQElmKNn0pXMWRK_4_flplLyut1Ppd6PUVYMKB_SiVZA-2LIKUrD11vORxlCjPgXkHg8flMwgSv0pFT28G0RxqwaVgWVDPCkk43fitRO02O4qGsfTitiR21ulLOqDKqKX_1UtgxuDFI=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [ycombinator.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEBLF-FUZh6sDB6XQMfIAsVfc0XNwrElo8nCTL3uXe05grKLoiXwZ2ef_klO5weVp6SpeBCLkl2lLkRYsh835pFy4zc-dcIkhnYHoHYYd4r3wtkk3BZ3NP4drjxvfS3_4naqw==) *(vertexaisearch.cloud.google.com)*
  > Removing XSLT from browsers was long overdue and I&#x27;m saying that as ex-maintaine... | Hacker News Hacker News new | past | comments | ask | show | jobs | submit login nwellnhof 10 months ago | parent | context | favorite | on: Google is killing ...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF-nGQ76RLimDr1YJU_cMwy2gDUYt5_D0F7dZM_JUMhg6PLjISXZ7uOCW3ALjcLSPc2uWzhiXag5juALSDAOAIPsyXXzkP9FnIhoJXXXLHbyXYaA3rsutGaGbPx0UWXi3evIvU=) *(vertexaisearch.cloud.google.com)*
  > Chrome 153 | Release notes | Chrome for Developers सीधे मुख्य कॉन्टेंट पर जाएं / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภา...
- [ortamarco.me](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHpT0I1iFdHq0U7c3tkATdms2_kxmCEZu1X77DyvfTUHAyDylve-dyrf5IM6_HyFkyTqFnusBgodqtG9ImmAfN0ydUf_EjGJXdtYaiakjhIz6BLHbRsPM8rPb06Qhowbp3V1Jd5fkvwyaoHa_O9GzM4KBU=) *(vertexaisearch.cloud.google.com)*
  > Chrome Removes XSLT: What Breaks and How to Detect It al navegar. --> /recorder antes de grabar nada y se calla solo si el sitio tiene el heatmap apagado en Umami, así que el interruptor real vive en el panel, no en este archivo. Se inyecta en idle t...
- [nintex.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG-KHMoeUvWAuvpz4HiK8hgaDnFnqDHr0bF1ihHIqifqyUyGwPYBXJ1gLtBdHcGiG3JpMOiRLPoNwbi0pKL_BRKiLWrHprnoHtX7ddbSkyBzp3Bgy2_W3dB8SVI8nf1fzxUAU4zoMWRFX0xZ_oL7N1wpjpYACWDI9Wt5jABqCYmZsu753RrzWE3bzGeFh7GNzCZBuHoPnNR6Q==) *(vertexaisearch.cloud.google.com)*
  > XSLT Deprecation in Google Chrome Browser | Community Skip to main content Nintex Community Menu Bar Nintex Customer Central Nintex Help Nintex University Nintex Gallery Nintex Ideas Request a Demo Ask a Question Login Solution showcase: Learn how to...
- [xlmsolutions.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG1xBmhrSx8A0O7Ew-ZU6ePm3RVfN4XSnBevzonniafjt37O_iTXCYkty3EZGzjNOrUwgaobAU1VGAuyj4PcsZi1bztYws3UXYaXEoKzIecZNsaXJ6W6vUJLL_dwS6z5_f3GIEdzeh9V63kynYY44k86QeoXU76JDiGAiq2IluXLyduFFBIgvgnQtE34Nzf9GKHPPEQboFhYUr7T6rO7O9x9P6E45CQuDltjX7AC00pUOg=) *(vertexaisearch.cloud.google.com)*
  > Chrome Is Removing XSLT Support: What Aras Innovator Customers Need to Do Before November 2026 - XLM Solutions English Home About Careers Events Blog Contact Home About Careers Events Blog PLM Services Implementation Customization Migration Integrati...
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFYiG1Npa0Fydy_at0h9Gis0UOzw68NTPibwhHLMTqcIeNteD8Lifb26PrxTRQFRg0TkH7_BYvRievmwbP-W6Vfa4iQ9QZabfarfdyJlRNYiBFnaz60u9A3UuNFd7LaFCD1) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  To mitigate memory-corruption vulnerabilities and adhere to Chromium's "Rule of Two" (restricting unsafe code parsing untrusted inputs in privileged processes), Chrome transitioned parts of its XML parsing infrastructure f
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHJxeiUF7xdpyXjRhVCe2y1j5wTUdGyUqOZV14BghWFVCJu-D-arTOxBH1zVVFINZ2zR4Vm5PJG5aaBEpvKgisQIMyoVcISlHhQVgVbQxdGG8WTWNQfYTj8yRU9Bo5JDoJi) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  To mitigate memory-corruption vulnerabilities and adhere to Chromium's "Rule of Two" (restricting unsafe code parsing untrusted inputs in privileged processes), Chrome transitioned parts of its XML parsing infrastructure f
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGEiT6FeGf7EA7DY3HLJVxj0k-rg0CPwN5H1Nd1tN8BbzfB3-h5vZaiEdaQ79Gp2qGsoF5LfB0gVRuand5tBVLD9kUbYstBzPav0WLkrD2TKTDH6vmnsfBzA1ZwNg-zk0vkvIMMQA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  To mitigate memory-corruption vulnerabilities and adhere to Chromium's "Rule of Two" (restricting unsafe code parsing untrusted inputs in privileged processes), Chrome transitioned parts of its XML parsing infrastructure f
- [xml - Using xsd.exe with www.w3.org/TR/xmlschema11-1/? - Stack Overflow](https://stackoverflow.com/questions/68827560/using-xsd-exe-with-www-w3-org-tr-xmlschema11-1) *(stackoverflow.com · 2021-08-18T00:00:00)*
  > The error message means what it says. If it doesn&#x27;t use the namespace http://www.w3.org/2001/XMLSchema then it&#x27;s not an XSD schema. The URI www.w3.org/TR/xmlschema11-1/ is <strong>the location of the XSD 1.1 specification</strong>.
- [XML (Extensible Markup Language) 1.0](https://www.loc.gov/preservation/digital/formats/fdd/fdd000263.shtml) *(loc.gov · 2025-06-10T00:00:00)*
  > Extensible Markup Language (XML) 1.0 (Fourth Edition) (https://<strong>www.w3.org/TR/xml</strong>/). W3C Recommendation 16 August 2006, Tim Bray, Jean Paoli, C.
- [v. A Gentle Introduction to XML - The TEI Guidelines](https://tei-c.org/release/doc/tei-p5-doc/es/html/SG.html) *(tei-c.org)*
  > However, since one very common application for XML documents is to serve them as browsable documents over the Web, the W3C has defined a procedure and a syntax for associating a document instance with its stylesheet (see https://<strong>www.w3.org/TR...
- [W3C Recommendation Citation List for OASIS Editors Version 1.0](https://docs.oasis-open.org/templates/w3c-recommendations-list/w3c-recommendations-list.html) *(docs.oasis-open.org)*
  > Associating Style Sheets with XML documents 1.0 (Second Edition), J. Clark, S. Pieters, H. Thompson, Editors, W3C Recommendation, October 28, 2010, http://www.w3.org/TR/2010/REC-xml-stylesheet-20101028/. Latest version available at http://<strong>www...
- [XML Schema Documentation](https://www.hec.usace.army.mil/xmlSchema/cwms/Ratings.htm) *(hec.usace.army.mil)*
  > Notation A notation is used to identify the format of a piece of data. Values of elements and attributes that are of type, NOTATION, must come from the names of declared notations. See: http://<strong>www.w3.org/TR/xml</strong>schema-1/#cNotation_Dec...
- [W3C XML Schema - Learning XML, 2nd Edition \[Book\]](https://www.oreilly.com/library/view/learning-xml-2nd/0596004206/re05.html) *(oreilly.com)*
  > Name W3C XML Schema Status XML Schema became a W3C Recommendation in May 2001. The recommendation is published in three parts: XML Schema Part 0: Primer http://<strong>www.w3.org/TR/xml</strong>schema-0/ XML Schema Part … - Selection from Learning XM...
- [W3C XML Query Language WG Mark Needleman Data Research Associates](https://www.loc.gov/standards/z3950/agency/zig/meetings/leuven/presentations/xql.ppt) *(loc.gov)*
  > t on the command-line or standard ... restructuring of Z39.50 functionality with XML Query Language as the core - what this would look like would need to be defined Publicly Available Documents Requirements Document <strong>http://www.w3.org/TR/xmlqu...
- [XML parsing in Rust for non-XSLT scenarios - Chrome Platform Status](https://2016-01-12-dot-cr-status.appspot.com/feature/5309598397497344) *(2016-01-12-dot-cr-status.appspot.com · 2026-02-09T00:00:00)*
  > Sign in with GoogleSign in with Google. Opens in new tab

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [xml - Using xsd.exe with www.w3.org/TR/xmlschema11-1/? - Stack Overflow](https://stackoverflow.com/questions/68827560/using-xsd-exe-with-www-w3-org-tr-xmlschema11-1) *(stackoverflow.com · 2021-08-18T00:00:00)* *(Cites: `https://www.w3.org/TR/xml`)*
  > The error message means what it says. If it doesn&#x27;t use the namespace http://www.w3.org/2001/XMLSchema then it&#x27;s not an XSD schema. The URI www.w3.org/TR/xmlschema11-1/ is <strong>the location of the XSD 1.1 specification</strong>...
- [XML (Extensible Markup Language) 1.0](https://www.loc.gov/preservation/digital/formats/fdd/fdd000263.shtml) *(loc.gov · 2025-06-10T00:00:00)* *(Cites: `https://www.w3.org/TR/xml`)*
  > Extensible Markup Language (XML) 1.0 (Fourth Edition) (https://<strong>www.w3.org/TR/xml</strong>/). W3C Recommendation 16 August 2006, Tim Bray, Jean Paoli, C.
- [v. A Gentle Introduction to XML - The TEI Guidelines](https://tei-c.org/release/doc/tei-p5-doc/es/html/SG.html) *(tei-c.org)* *(Cites: `https://www.w3.org/TR/xml`)*
  > However, since one very common application for XML documents is to serve them as browsable documents over the Web, the W3C has defined a procedure and a syntax for associating a document instance with its stylesheet (see https://<strong>www...
- [W3C Recommendation Citation List for OASIS Editors Version 1.0](https://docs.oasis-open.org/templates/w3c-recommendations-list/w3c-recommendations-list.html) *(docs.oasis-open.org)* *(Cites: `https://www.w3.org/TR/xml`)*
  > Associating Style Sheets with XML documents 1.0 (Second Edition), J. Clark, S. Pieters, H. Thompson, Editors, W3C Recommendation, October 28, 2010, http://www.w3.org/TR/2010/REC-xml-stylesheet-20101028/. Latest version available at http://<...
- [Incorrect character image for chancery style \`SCRIPT CAPITAL I\` · Issue #15 · w3c/xml-entities](https://github.com/w3c/xml-entities/issues/15) *(github.com · 2026-09-28T07:49:40)* *(Cites: `https://www.w3.org/TR/xml`)*
  > I believe the image for U+2131 (letter F) is incorrectly applied there: https://<strong>www.w3.org/TR/xml</strong>-entity-names/glyphs/021/U02131-0FE00.png
- [XML Schema Documentation](https://www.hec.usace.army.mil/xmlSchema/cwms/Ratings.htm) *(hec.usace.army.mil)* *(Cites: `https://www.w3.org/TR/xml`)*
  > Notation A notation is used to identify the format of a piece of data. Values of elements and attributes that are of type, NOTATION, must come from the names of declared notations. See: http://<strong>www.w3.org/TR/xml</strong>schema-1/#cNo...
- [W3C XML Schema - Learning XML, 2nd Edition \[Book\]](https://www.oreilly.com/library/view/learning-xml-2nd/0596004206/re05.html) *(oreilly.com)* *(Cites: `https://www.w3.org/TR/xml`)*
  > Name W3C XML Schema Status XML Schema became a W3C Recommendation in May 2001. The recommendation is published in three parts: XML Schema Part 0: Primer http://<strong>www.w3.org/TR/xml</strong>schema-0/ XML Schema Part … - Selection from L...
- [W3C XML Query Language WG Mark Needleman Data Research Associates](https://www.loc.gov/standards/z3950/agency/zig/meetings/leuven/presentations/xql.ppt) *(loc.gov)* *(Cites: `https://www.w3.org/TR/xml`)*
  > t on the command-line or standard ... restructuring of Z39.50 functionality with XML Query Language as the core - what this would look like would need to be defined Publicly Available Documents Requirements Document <strong>http://www.w3.or...

## 📚 Platform Documentation & Specifications

- [Incorrect character image for chancery style \`SCRIPT CAPITAL I\` · Issue #15 · w3c/xml-entities](https://github.com/w3c/xml-entities/issues/15) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 29 result(s) found across 7 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/5309598397497344" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"www.w3.org/TR/xml" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"XML parsing in Rust for non-XSLT scenarios" API` — *Core feature API query* (1 returned)
  - `"XML parsing in Rust for non-XSLT scenarios" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"image.svg" OR "lang.org" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"XML parsing in Rust for non-XSLT scenarios" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (0 returned)
  - `"XML parsing in Rust for non-XSLT scenarios" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (4 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 477 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5309598397497344)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5309598397497344)
- [Specification](https://www.w3.org/TR/xml)
- [Chromium Tracking Bug](https://crbug.com/466303347)
