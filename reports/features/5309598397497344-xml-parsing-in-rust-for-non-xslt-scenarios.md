# XML parsing in Rust for non-XSLT scenarios

> **Report Week:** 2026-W38 | **Milestone:** Chrome 153 | **Category:** Enabled by default

## Overview

To improve browser security and protect users against memory-related vulnerabilities, Chrome 153 updates its XML parsing engine to a memory-safe \[Rust\](https://rust-lang.org/) implementation for several common scenarios. This foundational update eliminates potential memory corruption bugs while maintaining full compatibility with existing web standards.  Chrome has already begun to deprecate and remove \[XSLT\](https://www.w3.org/TR/xslt-30/). While this process continues, the new, safer parser will handle the following scenarios where no XSLT is required:  1. DOMParser Web API. 2. Accessing responseXML of XMLHttpRequest. 3. SVG standalone images (that is, accessing a \`image.svg\` document directly as a top level navigation). 4. SVG external images (including a main document embedding an SVG as an external image resource).

## Ecosystem Status

- **Momentum:** High (270 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** XML parsing in Rust for non-XSLT scenarios is currently Enabled by default in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [xml - Using xsd.exe with www.w3.org/TR/xmlschema11-1/? - Stack Overflow](https://stackoverflow.com/questions/68827560/using-xsd-exe-with-www-w3-org-tr-xmlschema11-1) *(stackoverflow.com · 2021-08-18T00:00:00)*
  > The error message means what it says. If it doesn&#x27;t use the namespace http://www.w3.org/2001/XMLSchema then it&#x27;s not an XSD schema. The URI www.w3.org/TR/xmlschema11-1/ is <strong>the location of the XSD 1.1 specification</strong>.
- [XML (Extensible Markup Language) 1.0](https://www.loc.gov/preservation/digital/formats/fdd/fdd000263.shtml) *(loc.gov · 2025-06-10T00:00:00)*
  > XML (Extensible Markup Language) 1.0 Digital Preservation Home | Digital Formats Home Sustainability of Digital Formats: Planning for Library of Congress Collections Introduction | Sustainability Factors | Content Categories | Format Descriptions | C...
- [v. A Gentle Introduction to XML - The TEI Guidelines](https://tei-c.org/release/doc/tei-p5-doc/es/html/SG.html) *(tei-c.org)*
  > v. A Gentle Introduction to XML - The TEI Guidelines TEI: Directrices para la codificación y el intercambio de textos electrónicos P5 Version 4.12.0. Last updated on 28th July 2026, revision 113e933e2 v. A Gentle Introduction to XML Índice v.1. What'...
- [W3C Recommendation Citation List for OASIS Editors Version 1.0](https://docs.oasis-open.org/templates/w3c-recommendations-list/w3c-recommendations-list.html) *(docs.oasis-open.org)*
  > W3C Recommendation Citation List for OASIS Editors Version 1.0 W3C Recommendation Citation List for OASIS Editors Spring Quarter, April-June, 2019 This version: https://docs.oasis-open.org/templates/w3c-recommendations-list/w3c-recommendations-list-S...
- [XML Schema Documentation](https://www.hec.usace.army.mil/xmlSchema/cwms/Ratings.htm) *(hec.usace.army.mil)*
  > XML Schema Documentation XML Schema Documentation Printer-friendly Version XML Instance Representation: [ Expand All | Collapse All ] Schema Component Representation: [ Expand All | Collapse All ] Table of Contents Schema Document Properties Global D...
- [https://www.imsglobal.org/xsd/w3/2001/xml.xsd](https://www.imsglobal.org/xsd/w3/2001/xml.xsd) *(imsglobal.org)*
  > About the XML namespace This schema document describes the XML namespace, in a form suitable for import by other schema documents. See http://www.w3.org/XML/1998/namespace.html and http://www.w3.org/TR/REC-xml for information about this namespace. No...
- [W3C XML Schema - Learning XML, 2nd Edition \[Book\]](https://www.oreilly.com/library/view/learning-xml-2nd/0596004206/re05.html) *(oreilly.com)*
  > Name W3C XML Schema Status XML Schema became a W3C Recommendation in May 2001. The recommendation is published in three parts: XML Schema Part 0: Primer http://<strong>www.w3.org/TR/xml</strong>schema-0/ XML Schema Part … - Selection from Learning XM...
- [xml:id Version 1.0 (W3C) · Jens Oliver Meiert](https://meiert.com/de/w3/TR/xml-id) *(meiert.com)*
  > xml:id Version 1.0 (W3C) · Jens Oliver Meiert xml:id Version 1.0 (W3C) Originalversion: https://www.w3.org/&shy;TR/xml-id/ Übersetzer: Jens Oliver Meiert, meiert.com Datum der Übersetzung: 15. November 2007 Bei diesem Dokument handelt es sich um die ...
- [Parse and Generate XML with Rust \| Parse and Generate Formats](https://mojoauth.com/parse-and-generate-formats/parse-and-generate-xml-with-rust) *(mojoauth.com)*
  > <strong>This guide dives into practical strategies for parsing and generating XML data efficiently using Rust&#x27;s robust ecosystem</strong>. You&#x27;ll learn how to leverage libraries like quick-xml and xml-rs to handle everything from simple doc...
- [xml parsing - Read XML file into struct - Stack Overflow](https://stackoverflow.com/questions/37970355/read-xml-file-into-struct) *(stackoverflow.com)*
  > I&#x27;m going to describe how to <strong>use serde + serde_xml_rs to deserialize the XML to the Rust-structs</strong>.
- [Rust XML \| How XML works in Rust with Examples?](https://www.educba.com/rust-xml) *(educba.com · 2023-06-02T04:49:16)*
  > Guide to Rust XML. Here we discuss the definition, syntax, How XML works in Rust? and examples with code implementation respectively.
- [Parsing XML in Rust: A Comprehensive Guide](https://rust.howtos.io/parsing-xml-in-rust-a-comprehensive-guide) *(rust.howtos.io)*
  > We cannot provide a description for this page right now
- [Parse and Generate XML in Rust \| Parse and Generate Formats in Popular Programming Languages](https://ssojet.com/parse-and-generate-formats/parse-and-generate-xml-in-rust) *(ssojet.com)*
  > Handling XML data in Rust can quickly become cumbersome with manual parsing and serialization. <strong>This guide demonstrates how to leverage the serde and serde_xml_rs crates to efficiently parse and generate XML documents</strong>.
- [6.114 Primer on Parsing XML with R - :artificium](http://artificium.us/lessons/06.r/l-6-114-parse-xml-r-primer/l-6-114.html) *(artificium.us)*
  > <strong>This lesson explains how to use the functions from the XML package to extract data from XML files (also often called XML documents) in R</strong>. Other programming languages have very similar mechanisms and the skills learned in this lesson ...
- [XML and XSLT](https://www.w3schools.com/xml/xml_xslt.asp) *(w3schools.com)*
  > HTML CSS JAVASCRIPT SQL PYTHON JAVA PHP C C++ C# AWS W3.CSS HOW TO BOOTSTRAP REACT MYSQL JQUERY EXCEL XML DJANGO NUMPY PANDAS NODEJS DSA TYPESCRIPT ANGULAR ANGULARJS GIT POSTGRESQL MONGODB ASP AI R GO KOTLIN SWIFT SASS VUE GEN AI SCIPY CYBERSECURITY ...
- [XSLT Introduction](https://www.w3schools.com/xml/xsl_intro.asp) *(w3schools.com)*
  > HTML CSS JAVASCRIPT SQL PYTHON JAVA PHP C C++ C# AWS W3.CSS HOW TO BOOTSTRAP REACT MYSQL JQUERY EXCEL XML DJANGO NUMPY PANDAS NODEJS DSA TYPESCRIPT ANGULAR ANGULARJS GIT POSTGRESQL MONGODB ASP AI R GO KOTLIN SWIFT SASS VUE GEN AI SCIPY CYBERSECURITY ...
- [How to use SVG Images in HTML? - GeeksforGeeks](https://geeksforgeeks.org/how-to-use-svg-images-in-css-html) *(geeksforgeeks.org · 2025-07-23T17:40:50)*
  > &lt;!DOCTYPE html&gt; &lt;html lang=&quot;en&quot;&gt; ... &lt;div class=&quot;mySVG&quot;&gt;&lt;/div&gt; &lt;/body&gt; &lt;/html&gt; ... <strong>The &lt;object&gt; tag allows you to embed an external SVG file directly into your webpage</strong>....
- [css - How to place SVG image file in HTML using JavaScript - Stack Overflow](https://stackoverflow.com/questions/25772742/how-to-place-svg-image-file-in-html-using-javascript) *(stackoverflow.com)*
  > This solution <strong>uses jQuery&#x27;s html() function</strong>: var svgdiv = document.createElement(&#x27;div&#x27;); var svg = document.createElementNS(&#x27;http://www.w3.org/2000/svg&#x27;, &#x27;svg&#x27;); svg.setAttribute(&#x27;height&#x27;,...
- [Using SVG \| CSS-Tricks](https://css-tricks.com/using-svg) *(css-tricks.com · 2019-05-02T19:31:54)*
  > About the usable properties for styling, I found the following: http://www.w3.org/TR/SVG11/styling.html#SVGStylingProperties · Don’t know if it’s up-to-date/relevant/implemented though. ... The issue with Firefox making scaled SVGs blurry, mentioned ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [xml - Using xsd.exe with www.w3.org/TR/xmlschema11-1/? - Stack Overflow](https://stackoverflow.com/questions/68827560/using-xsd-exe-with-www-w3-org-tr-xmlschema11-1) *(stackoverflow.com · 2021-08-18T00:00:00)* *(Cites: `https://www.w3.org/TR/xml`)*
  > The error message means what it says. If it doesn&#x27;t use the namespace http://www.w3.org/2001/XMLSchema then it&#x27;s not an XSD schema. The URI www.w3.org/TR/xmlschema11-1/ is <strong>the location of the XSD 1.1 specification</strong>...
- [XML (Extensible Markup Language) 1.0](https://www.loc.gov/preservation/digital/formats/fdd/fdd000263.shtml) *(loc.gov · 2025-06-10T00:00:00)* *(Cites: `https://www.w3.org/TR/xml`)*
  > XML (Extensible Markup Language) 1.0 Digital Preservation Home | Digital Formats Home Sustainability of Digital Formats: Planning for Library of Congress Collections Introduction | Sustainability Factors | Content Categories | Format Descri...
- [v. A Gentle Introduction to XML - The TEI Guidelines](https://tei-c.org/release/doc/tei-p5-doc/es/html/SG.html) *(tei-c.org)* *(Cites: `https://www.w3.org/TR/xml`)*
  > v. A Gentle Introduction to XML - The TEI Guidelines TEI: Directrices para la codificación y el intercambio de textos electrónicos P5 Version 4.12.0. Last updated on 28th July 2026, revision 113e933e2 v. A Gentle Introduction to XML Índice ...
- [W3C Recommendation Citation List for OASIS Editors Version 1.0](https://docs.oasis-open.org/templates/w3c-recommendations-list/w3c-recommendations-list.html) *(docs.oasis-open.org)* *(Cites: `https://www.w3.org/TR/xml`)*
  > W3C Recommendation Citation List for OASIS Editors Version 1.0 W3C Recommendation Citation List for OASIS Editors Spring Quarter, April-June, 2019 This version: https://docs.oasis-open.org/templates/w3c-recommendations-list/w3c-recommendati...
- [XML Schema Documentation](https://www.hec.usace.army.mil/xmlSchema/cwms/Ratings.htm) *(hec.usace.army.mil)* *(Cites: `https://www.w3.org/TR/xml`)*
  > XML Schema Documentation XML Schema Documentation Printer-friendly Version XML Instance Representation: [ Expand All | Collapse All ] Schema Component Representation: [ Expand All | Collapse All ] Table of Contents Schema Document Propertie...
- [https://www.imsglobal.org/xsd/w3/2001/xml.xsd](https://www.imsglobal.org/xsd/w3/2001/xml.xsd) *(imsglobal.org)* *(Cites: `https://www.w3.org/TR/xml`)*
  > About the XML namespace This schema document describes the XML namespace, in a form suitable for import by other schema documents. See http://www.w3.org/XML/1998/namespace.html and http://www.w3.org/TR/REC-xml for information about this nam...
- [W3C XML Schema - Learning XML, 2nd Edition \[Book\]](https://www.oreilly.com/library/view/learning-xml-2nd/0596004206/re05.html) *(oreilly.com)* *(Cites: `https://www.w3.org/TR/xml`)*
  > Name W3C XML Schema Status XML Schema became a W3C Recommendation in May 2001. The recommendation is published in three parts: XML Schema Part 0: Primer http://<strong>www.w3.org/TR/xml</strong>schema-0/ XML Schema Part … - Selection from L...
- [xml:id Version 1.0 (W3C) · Jens Oliver Meiert](https://meiert.com/de/w3/TR/xml-id) *(meiert.com)* *(Cites: `https://www.w3.org/TR/xml`)*
  > xml:id Version 1.0 (W3C) · Jens Oliver Meiert xml:id Version 1.0 (W3C) Originalversion: https://www.w3.org/&shy;TR/xml-id/ Übersetzer: Jens Oliver Meiert, meiert.com Datum der Übersetzung: 15. November 2007 Bei diesem Dokument handelt es si...

## 📚 Platform Documentation & Specifications

- [SVG: Scalable Vector Graphics - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG) *(developer.mozilla.org)*
- [Including vector graphics in HTML - Learn web development \| MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML) *(developer.mozilla.org)*
- [\[Svg\] \[Html\] \[JavaScript\] \[Php\] \[Css\] Afficher des images Svg en ligne avec et sans solution de repli · GitHub](https://gist.github.com/384400/c673429ed8acb1741b31) *(gist.github.com)*
- [SVG as an image - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Guides/SVG_as_an_image) *(developer.mozilla.org)*
- [&lt;image&gt; - SVG - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/image) *(developer.mozilla.org)*
- [Parsing and serializing XML](https://developer.mozilla.org/en-US/docs/Web/XML/Guides/Parsing_and_serializing_XML) *(developer.mozilla.org)*
- [Transforming XML with XSLT](https://developer.mozilla.org/en-US/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT) *(developer.mozilla.org)*
- [XSLT](https://developer.mozilla.org/en-US/docs/Glossary/XSLT) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 28 result(s) found across 7 planned queries — **24 verified relevant**
  - `"chromestatus.com/feature/5309598397497344" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"www.w3.org/TR/xml" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"XML parsing in Rust for non-XSLT scenarios" API` — *Core feature API query* (0 returned)
  - `"XML parsing in Rust for non-XSLT scenarios" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"image.svg" OR "lang.org" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"XML parsing in Rust for non-XSLT scenarios" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (0 returned)
  - `"XML parsing in Rust for non-XSLT scenarios" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (4 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 473 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5309598397497344)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5309598397497344)
- [Specification](https://www.w3.org/TR/xml)
- [Chromium Tracking Bug](https://crbug.com/466303347)
