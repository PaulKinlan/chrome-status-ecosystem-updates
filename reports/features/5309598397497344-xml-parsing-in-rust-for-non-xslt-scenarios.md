# XML parsing in Rust for non-XSLT scenarios

> **Report Week:** 2026-W39 | **Milestone:** Chrome 153 | **Category:** Enabled by default

## Overview

To improve browser security and protect users against memory-related vulnerabilities, Chrome 153 updates its XML parsing engine to a memory-safe \[Rust\](https://rust-lang.org/) implementation for several common scenarios. This foundational update eliminates potential memory corruption bugs while maintaining full compatibility with existing web standards.  Chrome has already begun to deprecate and remove \[XSLT\](https://www.w3.org/TR/xslt-30/). While this process continues, the new, safer parser will handle the following scenarios where no XSLT is required:  1. DOMParser Web API. 2. Accessing responseXML of XMLHttpRequest. 3. SVG standalone images (that is, accessing a \`image.svg\` document directly as a top level navigation). 4. SVG external images (including a main document embedding an SVG as an external image resource).

## Ecosystem Status

- **Momentum:** High (640 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** XML parsing in Rust for non-XSLT scenarios is currently Enabled by default in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 153 is now in beta! Try out new CSS scroll container options, Rust-based XML parsing, declarative camera and microphone HTML elements, and the new WebGPU buffer\_view feature. https://t.co/QVG8pp2SRN" / X" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Chrome for Developers on X: "Chrome 153 is now in beta! Try out new CSS scroll container options, Rust-based XML parsing, declarative camera and microphone HTML elements, and the new WebGPU buffer\_view feature. https://t.co/QVG8pp2SRN" / X](https://x.com/ChromiumDev/status/2093424350036660456) — *by @ChromiumDev, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFJIvzTYFw5Fqd8kfRAfeBDQWYzGacBkHVNoCunHWeQxFPMkjwObxG4fdYW_MzDAcE2ZbTzd7sS24IDdCZNbmGxXp9sWFnxEiG2D3kwXYtz3bHbJh2fj21pM_TKXkB5LsrOhxKHNirXIGYcNispgf7WdzO4HEme6E6MFWBqh1O4jLZL_d_d) *(vertexaisearch.cloud.google.com)*
  > Microsoft Edge 153 web platform release notes (Sep. 2026) - Microsoft Edge Developer documentation | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take advanta...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGiFPpX8OGG-CJt9nxAjsorgsx6QuNftJ9tAE_lIppHOUoeK4f118UcFhOdWLn7NsHsRMJ7Ph6a77RZOyA_CeXoAR-FwlCnnMWiEnrVvhfH) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [note.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGbhztr924Oa7txFLPWksDFawdZvRwFSqeOuJBnMTzpfEP-Rdv6BXFW-Qq1iqzxG5yGgqj30nHeorrgnO3YAcPU5KwsP3Nnto5IZowEBfUh40Ux0GM37I8IA-jj9bi3lTW_EvP8eRcUXnFGGw==) *(vertexaisearch.cloud.google.com)*
  > Chrome Rewrites XML Processing in Rust | Why Replace the Parser?｜Haru - AIと働くひとのメモ帳。 SYSTEM NOTICE Auto translation by AI. Be sure, accuracy, nuances and authorial intent may not be fully reflected. Show original Chrome Rewrites XML Processing in Rus...
- [googlesource.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGYfOpt-rRkLxMaXZNmdmKfJYvWI5FHQZrM4p1I66nF5OAwF9UWFo49QQOykFgybFadipC0M7Wa0pBRg9sTfo3EoZuUkLHQMBr5ubRY68GYLfcSBoBsUxouusU1_wHVyMOJX-2Glh95SyF3uvpQRlrK1gyfJ02zW9SzRRLkAXo8uBETWXc4BBpwN83xMYJJfCDY3C5WoOS_2KvFgiyUbwUq9VMYsHc=) *(vertexaisearch.cloud.google.com)*
  > third_party/blink/renderer/core/dom/document.cc - chromium/src - Git at Google Sign in &#9681; Theme chromium / chromium / src / refs/heads/main / . / third_party / blink / renderer / core / dom / document.cc blob: 0cd2d407afff996f7b687bf900d3477c4b8...
- [googlesource.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGkQ1i0YnISN1zrWsuyXuA__-NPZU0KEGeXJZWboAhv-2j44zDARLJlRBfhdSgIL-BINt5C195Y87-CfHOL9nouUbquGNl18Tf1BdXffD80vDkkprzfa2s_QyXj0F7lMnQHqTN96_hvac2Ntr7bBlo4K50wY5WidEyhYknJhFhWxIrNUnaJFcCPErqdcvbL-2viwKO1-YYG5buSrgyi4A==) *(vertexaisearch.cloud.google.com)*
  > third_party/blink/renderer/core/BUILD.gn - chromium/src - Git at Google Sign in &#9681; Theme chromium / chromium / src / refs/heads/main / . / third_party / blink / renderer / core / BUILD.gn blob: 383115087fb61a1901983b7ebefe32a0c40f7d1a [ file ] [...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGj3scwzE5N0EU4AOTs_Xw5X64udYa7JgmZTTFnhPAFg76j92SeceGkK0WVe_TkPPDJTrKJmKfCq-tLoCIz_JI4xpsRdppp0_yL_thCqUPRBUdbpSRMnbvFC8sMmSROugylVVV7dCHmOLMTomg8DI2fcePZGuU=) *(vertexaisearch.cloud.google.com)*
  > Removing XSLT for a more secure browser | Web Platform | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG0UefPsNjhSdAUjxLWgx0lCgbLKg8B4BMzc4ZkTS4TjBd6uAMxY4v3_6tRAqxLA4IiinZF9cGwpPfhOAa3e02u-8Cv6QoSobKqRPqzswhXcgI-SfMhAn0Hdb1CyA-1rXG2cJSONzNp) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF9tceV7fziI0KQdmQygxJ9uOtoe-bz0VboO-FXSzgPGlUmwPbzopQtrJFjcWuVjRmfdA5m370_RwIr0r6HAkUkfqexTiZGxgZcEtVgLXllaHxqHLxFFCdYwhU2cIxOVESN) *(vertexaisearch.cloud.google.com)*
  > Chromium Sign in
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE_07phLjtENHRXUn6X5tcbGiFOmNV38m1WNDuvdazRSEg155mfK34oGb8CVITGAWkQhpFBwKBp9xAtSpHI5hWuKjOl2DtJl9sC-FU3C6Gw_gykSZelAjst0_CW-ceFv1VkNbOPux5djIEkISk4xhho7g-4dQ==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"XML parsing in Rust for non-XSLT scenarios"** is a browser-security update shipped enabled-by-default in **Chrome 153** and **Microsoft Edge 153**. The feature replaces parts of Chromium’s legacy, C-based `libxml2` XML
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEVVZQBGmvjMHP92uTR0iaMP-jPa50f455VU85bF8yUJGUHPn0tWOWV7iO1VHJseUfHxCPKsnfUQWzKdbCwjRBsHxa9K7Nt9GgFSRLT4GbI6q2HlHBLhGos6eKRyhxzpEZILn1t) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"XML parsing in Rust for non-XSLT scenarios"** is a browser-security update shipped enabled-by-default in **Chrome 153** and **Microsoft Edge 153**. The feature replaces parts of Chromium’s legacy, C-based `libxml2` XML
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHd2GIo2LYgu_IypH8Lz0AO8g4Qdr_gxcL3cQ_Pdq2A30lnNKLi4Xgb41_-MiBIN8AHFmm7J7RoDQFGErjbm-JjeeDubGkQ4eX91QOSZY2PKv0Jx_kLbyN8_IbF2UCpkFwX5gJ_G38=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"XML parsing in Rust for non-XSLT scenarios"** is a browser-security update shipped enabled-by-default in **Chrome 153** and **Microsoft Edge 153**. The feature replaces parts of Chromium’s legacy, C-based `libxml2` XML
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGG7PCuOix3xzRvbLxqXkx0aKWmCDBZejIUDJ6OWv3BWgNcWLSwU3RNhZajqr4mYn8bGDBRo1VAaWsdHiB2dG_fN42hLJ85h3En5i8O2Je717U6AxXZuRe94Tmkd64OKG8sWpc_fqE=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"XML parsing in Rust for non-XSLT scenarios"** is a browser-security update shipped enabled-by-default in **Chrome 153** and **Microsoft Edge 153**. The feature replaces parts of Chromium’s legacy, C-based `libxml2` XML
- [reddit.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH6X83FhJ13ju2Wgb2SeDMmjFf67m_qbzriVCab2ZMsznIk66eWgWIYEqZ-oSw5vb9WU8EoMfuB5Eow1peywlOZmHrX-1cyU8qyediX_F5tu0G4i6A6-byoXnKT4W-9_2FPZpobcF7RxmnmJPafs7VqatrM8xxlnI22RrQK42aJ4UN4iB3wmIklppdowpMulK3PWqcj) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"XML parsing in Rust for non-XSLT scenarios"** is a browser-security update shipped enabled-by-default in **Chrome 153** and **Microsoft Edge 153**. The feature replaces parts of Chromium’s legacy, C-based `libxml2` XML
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGl-S-4f15hok8CgKyXYu2JV2gcUU6e5CQPOabkqPXx0GcDcT-i7PeRhKfiGXR5B5hFcTuN6uEUnkMIKSg2cdApLO_RMjKUZbhQJzvMDTryeLlrgmhtZUTzz6FwAWayN8SY) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"XML parsing in Rust for non-XSLT scenarios"** is a browser-security update shipped enabled-by-default in **Chrome 153** and **Microsoft Edge 153**. The feature replaces parts of Chromium’s legacy, C-based `libxml2` XML
- [xml - Using xsd.exe with www.w3.org/TR/xmlschema11-1/? - Stack Overflow](https://stackoverflow.com/questions/68827560/using-xsd-exe-with-www-w3-org-tr-xmlschema11-1) *(stackoverflow.com · 2021-08-18T00:00:00)*
  > The error message means what it says. If it doesn&#x27;t use the namespace http://www.w3.org/2001/XMLSchema then it&#x27;s not an XSD schema. The URI www.w3.org/TR/xmlschema11-1/ is <strong>the location of the XSD 1.1 specification</strong>.
- [XML (Extensible Markup Language) 1.0](https://www.loc.gov/preservation/digital/formats/fdd/fdd000263.shtml) *(loc.gov · 2025-06-10T00:00:00)*
  > Extensible Markup Language (XML) 1.0 (Fourth Edition) (https://<strong>www.w3.org/TR/xml</strong>/). W3C Recommendation 16 August 2006, Tim Bray, Jean Paoli, C.
- [v. A Gentle Introduction to XML - The TEI Guidelines](https://tei-c.org/release/doc/tei-p5-doc/es/html/SG.html) *(tei-c.org)*
  > In the past, different schema languages adopted entirely different attitudes to this question, leading to a variety of different methods of associating schemas with document instances. However, a W3C Working Group Note, Associating Schemas with XML d...
- [W3C Recommendation Citation List for OASIS Editors Version 1.0](https://docs.oasis-open.org/templates/w3c-recommendations-list/w3c-recommendations-list.html) *(docs.oasis-open.org)*
  > Latest version available at http://<strong>www.w3.org/TR/xml</strong>-c14n/. [Suggested label: XML-C14N]
- [XML Schema Documentation](https://www.hec.usace.army.mil/xmlSchema/cwms/Ratings.htm) *(hec.usace.army.mil)*
  > All Model Group Child elements can be provided in any order in instances. See: http://<strong>www.w3.org/TR/xml</strong>schema-1/#element-all.
- [W3C XML Schema - Learning XML, 2nd Edition \[Book\]](https://www.oreilly.com/library/view/learning-xml-2nd/0596004206/re05.html) *(oreilly.com)*
  > Name W3C XML Schema Status XML Schema became a W3C Recommendation in May 2001. The recommendation is published in three parts: XML Schema Part 0: Primer http://<strong>www.w3.org/TR/xml</strong>schema-0/ XML Schema Part … - Selection from Learning XM...
- [https://www.imsglobal.org/xsd/w3/2001/xml.xsd](https://www.imsglobal.org/xsd/w3/2001/xml.xsd) *(imsglobal.org)*
  > <strong>denotes an attribute whose value provides a URI to be used as the base for interpreting any relative URIs in the scope of the element on which it appears</strong>; its value is inherited. This name is reserved by virtue of its definition in t...
- [XML Schema Primer](https://web.stanford.edu/dept/itss/docs/oracle/10gR2/appdev.102/b14259/appbsch.htm) *(web.stanford.edu)*
  > Support for the Worldwide Web Consortium (W3C) XML Schema Recommendation is a key feature in Oracle XML DB. <strong>XML Schema specifies the structure, content, and certain semantics of a set of XML documents</strong>. It is described in detail at ht...
- [XML parsing in Rust for non-XSLT scenarios - Chrome Platform Status](https://2016-01-12-dot-cr-status.appspot.com/feature/5309598397497344) *(2016-01-12-dot-cr-status.appspot.com · 2026-02-09T00:00:00)*
  > Sign in with GoogleSign in with Google. Opens in new tab
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
- [XML and XSLT](https://www.w3schools.com/xml/xml_xslt.asp) *(w3schools.com)*
  > HTML CSS JAVASCRIPT SQL PYTHON JAVA PHP C C++ C# AWS W3.CSS HOW TO BOOTSTRAP REACT MYSQL JQUERY EXCEL XML DJANGO NUMPY PANDAS NODEJS DSA TYPESCRIPT ANGULAR ANGULARJS GIT POSTGRESQL MONGODB ASP AI R GO KOTLIN SWIFT SASS VUE GEN AI SCIPY CYBERSECURITY ...
- [XSLT Introduction](https://www.w3schools.com/xml/xsl_intro.asp) *(w3schools.com)*
  > HTML CSS JAVASCRIPT SQL PYTHON JAVA PHP C C++ C# AWS W3.CSS HOW TO BOOTSTRAP REACT MYSQL JQUERY EXCEL XML DJANGO NUMPY PANDAS NODEJS DSA TYPESCRIPT ANGULAR ANGULARJS GIT POSTGRESQL MONGODB ASP AI R GO KOTLIN SWIFT SASS VUE GEN AI SCIPY CYBERSECURITY ...
- [XML Parser](https://www.w3schools.com/xml/xml_parser.asp) *(w3schools.com)*
  > <strong>All major browsers have a built-in XML parser to access and manipulate XML</strong>.
- [How to use SVG Images in HTML? - GeeksforGeeks](https://geeksforgeeks.org/how-to-use-svg-images-in-css-html) *(geeksforgeeks.org · 2025-07-23T17:40:50)*
  > &lt;!DOCTYPE html&gt; &lt;html lang=&quot;en&quot;&gt; ... &lt;div class=&quot;mySVG&quot;&gt;&lt;/div&gt; &lt;/body&gt; &lt;/html&gt; ... <strong>The &lt;object&gt; tag allows you to embed an external SVG file directly into your webpage</strong>....
- [css - How to place SVG image file in HTML using JavaScript - Stack Overflow](https://stackoverflow.com/questions/25772742/how-to-place-svg-image-file-in-html-using-javascript) *(stackoverflow.com)*
  > This solution <strong>uses jQuery&#x27;s html() function</strong>: var svgdiv = document.createElement(&#x27;div&#x27;); var svg = document.createElementNS(&#x27;http://www.w3.org/2000/svg&#x27;, &#x27;svg&#x27;); svg.setAttribute(&#x27;height&#x27;,...
- [Using SVG \| CSS-Tricks](https://css-tricks.com/using-svg) *(css-tricks.com · 2019-05-02T19:31:54)*
  > About the usable properties for styling, I found the following: http://www.w3.org/TR/SVG11/styling.html#SVGStylingProperties · Don’t know if it’s up-to-date/relevant/implemented though. ... The issue with Firefox making scaled SVGs blurry, mentioned ...
- [SVG Image](https://www.w3schools.com/graphics/svg_image.asp) *(w3schools.com)*
  > HTML CSS JAVASCRIPT SQL PYTHON JAVA PHP C C++ C# AWS W3.CSS HOW TO BOOTSTRAP REACT MYSQL JQUERY EXCEL XML DJANGO NUMPY PANDAS NODEJS DSA TYPESCRIPT ANGULAR ANGULARJS GIT POSTGRESQL MONGODB ASP AI R GO KOTLIN SWIFT SASS VUE GEN AI SCIPY CYBERSECURITY ...
- [Chrome 151 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/151) *(developer.chrome.com · 2026-07-28T00:00:00)*
  > To improve browser security and protect against memory-related vulnerabilities, <strong>Chrome is updating its XML parsing engine to a memory-safe Rust implementation for common scenarios where XSLT is not required</strong>.
- [Chrome 153 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/153) *(chromestatus.com)*
  > To improve browser security and protect users against memory-related vulnerabilities, <strong>Chrome 153 updates its XML parsing engine to a memory-safe Rust implementation for several common scenarios</strong>.
- [Intent to Experiment: Ship Rust XML Parser to 1% stable for non XSLT scenarios](https://groups.google.com/a/chromium.org/g/blink-dev/c/D7BE4QPw0S4) *(groups.google.com · 2026-02-09T00:00:00)*
  > Make Rust parsing memory safe in Chrome, <strong>replace unsafe C library usage of libxml2 with Rust based XML parsing based on the Rust XML crate</strong>. Eliminate class of XML parsing memory corruption security issues. Several web specs affected,...
- [Google Releases Chrome 153 Stable: Introduces Dedicated Camera/Microphone Elements and Rust-Based XML Parsing — BigGo Finance](https://finance.biggo.com/news/58af43c8-7369-474d-9ec8-53098a13796c) *(finance.biggo.com · 2026-09-09T03:27:28)*
  > On the security front, <strong>portions of XML parsing have been replaced with a Rust-based implementation emphasizing memory safety to protect users from memory-related vulnerabilities</strong>. The new parser is used in cases that do not require XS...
- [\[blink-dev\] Intent to Ship: XML Parsing in Rust for non XSLT scenarios](http://www.mail-archive.com/blink-dev@chromium.org/msg16709.html) *(mail-archive.com)*
  > The Rust XML parser <strong>improves security by eliminating memory corruption bugs in XML parsing</strong>, it is intended to replace our usage of libxml2 (written in C) with a safe alternative. We are in the process of deprecating XSLT, see https:/...
- [Google Chrome 153 stable version released, includes 'dedicated HTML elements for camera and microphone,' 'addition of Iterator.zip(),' and 'Rust-based partial XML parsing.' - GIGAZINE](https://gigazine.net/gsc_news/en/20260909-google-chrome-153) *(gigazine.net · 2026-09-09T00:00:00)*
  > ◆Replacing part of the XML parsing with a Rust-based parser In Chrome 153, <strong>some XML parsing processes have been replaced with memory-safe Rust implementations to protect users from memory-related vulnerabilities</strong>.
- [DOMParser.parseFromString - Web APIs - W3cubDocs](https://docs.w3cub.com/dom/domparser/parsefromstring) *(docs.w3cub.com)*
  > The application/xml and image/svg+xml MIME types in the example below are functionally identical — the latter does not include any SVG-specific parsing rules. Distinguishing between the two serves only to clarify the code&#x27;s intent. ... const par...
- [DOMParser.parseFromString() - Web APIs \| MDN](https://mdn2.netlify.app/en-us/docs/web/api/domparser/parsefromstring) *(mdn2.netlify.app · 2021-11-30T00:00:00)*
  > The application/xml and image/svg+xml MIME types in the example below are functionally identical — the latter does not include any SVG-specific parsing rules. Distinguishing between the two serves only to clarify the code&#x27;s intent. const parser ...
- [DOMParser - Web APIs](https://udn.realityripple.com/docs/Web/API/DOMParser) *(udn.realityripple.com)*
  > If the MIME type is image/svg+xml, ... but not an SVGDocument nor an HTMLDocument <strong>parser = new DOMParser(); doc = parser.parseFromString(stringContainingSVGSource, &quot;image/svg+xml&quot;) // returns a SVGDocument, which also is a Document<...
- [DOMParser: parseFromString() method - Web APIs \| MDN](https://www-igm.univ-mlv.fr/~forax/MDN/developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString.html) *(www-igm.univ-mlv.fr)*
  > The application/xml and image/svg+xml MIME types in the example below are functionally identical — the latter does not include any SVG-specific parsing rules. Distinguishing between the two serves only to clarify the code&#x27;s intent. ... const par...
- [Removing XSLT for a more secure browser \| Web Platform \| Chrome for Developers](https://developer.chrome.com/docs/web-platform/deprecating-xslt) *(developer.chrome.com · 2025-10-29T00:00:00)*
  > To address future security issues with XML parsing In Chromium we plan to <strong>phase out the usage of libxml2 and replace XML parsing with a memory-safe XML parsing library written in Rust</strong>.
- [XML parsing in Rust for non-XSLT scenarios](https://chromestatus.com/feature/5309598397497344) *(chromestatus.com · 2026-02-09T00:00:00)*
  > We cannot provide a description for this page right now
- [XML parsing in Rust \| Mainmatter](https://mainmatter.com/blog/2020/12/31/xml-and-rust) *(mainmatter.com · 2020-12-31T00:00:00)*
  > We know the code, tools, and practices that go into successful development. We partner with our clients to solve their toughest tech challenges by sharing our skills and expertise as teammates.
- [Re: \[blink-dev\] Intent to Ship: XML Parsing in Rust for non XSLT scenarios](http://www.mail-archive.com/blink-dev@chromium.org/msg16710.html) *(mail-archive.com)*
  > &gt; &gt; *Will this feature be supported on all six Blink platforms (Windows, Mac, &gt; Linux, ChromeOS, Android, and Android WebView)?* &gt; Yes &gt; &gt; *Is this feature fully tested by web-platform-tests &gt; &lt;https://chromium.googlesource.co...
- [Rustifying Image Codecs in Chromium](https://microsoftedge.github.io/edgevr/posts/Rustifying-Image-Codecs-in-Chromium) *(microsoftedge.github.io · 2026-07-17T14:00:00)*
  > That shifted the work from proving one Rust codec could ship to accelerating how quickly a family of image decoders can move onto a safer foundation. Codecs sit at a particularly sensitive boundary: they parse complex binary formats, and their inputs...
- [r/rust on Reddit: 🥳 Chrome adopts Rust and replaces libxml2 written in C since version 147](https://www.reddit.com/r/rust/comments/1sfrvno/chrome_adopts_rust_and_replaces_libxml2_written) *(reddit.com · 2026-04-08T12:48:35)*
  > 753 votes, 88 comments. According to Chrome dev blog browser is now powered with Rust. <strong>The Rust&#x27;s part replaces old C-written parser libxml2.</strong> This…
- [svgparser - Rust](https://docs.rs/svgparser) *(docs.rs)*
  > <strong>Every type can be parsed separately, so you can parse just paths or transform or any other SVG value</strong>.
- [r/rust on Reddit: Chromium document that mentions Rust](https://www.reddit.com/r/rust/comments/cohft5/chromium_document_that_mentions_rust) *(reddit.com · 2019-10-08T00:00:00)*
  > But if you transform the image into a format that doesn‘t have PNG’s complexity (in a low-privilege process, of course), the malicious nature of the PNG ‘should’ be eliminated and then safe for parsing at a higher privilege level.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [xml - Using xsd.exe with www.w3.org/TR/xmlschema11-1/? - Stack Overflow](https://stackoverflow.com/questions/68827560/using-xsd-exe-with-www-w3-org-tr-xmlschema11-1) *(stackoverflow.com · 2021-08-18T00:00:00)* *(Cites: `https://www.w3.org/TR/xml`)*
  > The error message means what it says. If it doesn&#x27;t use the namespace http://www.w3.org/2001/XMLSchema then it&#x27;s not an XSD schema. The URI www.w3.org/TR/xmlschema11-1/ is <strong>the location of the XSD 1.1 specification</strong>...
- [XML (Extensible Markup Language) 1.0](https://www.loc.gov/preservation/digital/formats/fdd/fdd000263.shtml) *(loc.gov · 2025-06-10T00:00:00)* *(Cites: `https://www.w3.org/TR/xml`)*
  > Extensible Markup Language (XML) 1.0 (Fourth Edition) (https://<strong>www.w3.org/TR/xml</strong>/). W3C Recommendation 16 August 2006, Tim Bray, Jean Paoli, C.
- [v. A Gentle Introduction to XML - The TEI Guidelines](https://tei-c.org/release/doc/tei-p5-doc/es/html/SG.html) *(tei-c.org)* *(Cites: `https://www.w3.org/TR/xml`)*
  > In the past, different schema languages adopted entirely different attitudes to this question, leading to a variety of different methods of associating schemas with document instances. However, a W3C Working Group Note, Associating Schemas ...
- [W3C Recommendation Citation List for OASIS Editors Version 1.0](https://docs.oasis-open.org/templates/w3c-recommendations-list/w3c-recommendations-list.html) *(docs.oasis-open.org)* *(Cites: `https://www.w3.org/TR/xml`)*
  > Latest version available at http://<strong>www.w3.org/TR/xml</strong>-c14n/. [Suggested label: XML-C14N]
- [XML Schema Documentation](https://www.hec.usace.army.mil/xmlSchema/cwms/Ratings.htm) *(hec.usace.army.mil)* *(Cites: `https://www.w3.org/TR/xml`)*
  > All Model Group Child elements can be provided in any order in instances. See: http://<strong>www.w3.org/TR/xml</strong>schema-1/#element-all.
- [W3C XML Schema - Learning XML, 2nd Edition \[Book\]](https://www.oreilly.com/library/view/learning-xml-2nd/0596004206/re05.html) *(oreilly.com)* *(Cites: `https://www.w3.org/TR/xml`)*
  > Name W3C XML Schema Status XML Schema became a W3C Recommendation in May 2001. The recommendation is published in three parts: XML Schema Part 0: Primer http://<strong>www.w3.org/TR/xml</strong>schema-0/ XML Schema Part … - Selection from L...
- [https://www.imsglobal.org/xsd/w3/2001/xml.xsd](https://www.imsglobal.org/xsd/w3/2001/xml.xsd) *(imsglobal.org)* *(Cites: `https://www.w3.org/TR/xml`)*
  > <strong>denotes an attribute whose value provides a URI to be used as the base for interpreting any relative URIs in the scope of the element on which it appears</strong>; its value is inherited. This name is reserved by virtue of its defin...
- [XML Schema Primer](https://web.stanford.edu/dept/itss/docs/oracle/10gR2/appdev.102/b14259/appbsch.htm) *(web.stanford.edu)* *(Cites: `https://www.w3.org/TR/xml`)*
  > Support for the Worldwide Web Consortium (W3C) XML Schema Recommendation is a key feature in Oracle XML DB. <strong>XML Schema specifies the structure, content, and certain semantics of a set of XML documents</strong>. It is described in de...

## 📚 Platform Documentation & Specifications

- [SVG: Scalable Vector Graphics - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG) *(developer.mozilla.org)*
- [Including vector graphics in HTML - Learn web development \| MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML) *(developer.mozilla.org)*
- [&lt;image&gt; - SVG - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/image) *(developer.mozilla.org)*
- [SVG as an image - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Guides/SVG_as_an_image) *(developer.mozilla.org)*
- [Chromium 153+: UTF-8 BOM kept by \`@ui5/builder\` in bundles breaks apps · Issue #1601 · UI5/cli](https://github.com/UI5/cli/issues/1601) *(github.com)*
- [DOMParser: parseFromString() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString) *(developer.mozilla.org)*
- [Parsing and serializing XML - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/XML/Guides/Parsing_and_serializing_XML) *(developer.mozilla.org)*
- [DOMParser - Les API Web - MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/API/DOMParser) *(developer.mozilla.org)*
- [Design Doc: JPEG XL (JXL) image support in PDFium (Rust-only) · GitHub](https://gist.github.com/hjanuschka/4b23e2067344b88fe27a8dd4a2a6e048) *(gist.github.com)*
- [Transforming XML with XSLT](https://developer.mozilla.org/en-US/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT) *(developer.mozilla.org)*
- [XSLT](https://developer.mozilla.org/en-US/docs/Glossary/XSLT) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 63 result(s) found across 12 planned queries — **48 verified relevant**
  - `"chromestatus.com/feature/5309598397497344" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"www.w3.org/TR/xml" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"XML parsing in Rust for non-XSLT scenarios" API` — *Core feature API query* (1 returned)
  - `"XML parsing in Rust for non-XSLT scenarios" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"image.svg" OR "lang.org" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"XML parsing in Rust for non-XSLT scenarios" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (0 returned)
  - `"XML parsing in Rust for non-XSLT scenarios" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (4 returned)
  - `Chrome "Rust" "XML parser" OR "DOMParser" memory safety` — *Find announcements, technical blog posts, and engine-level notes regarding Chromium replacing its C++ XML parser with a Rust implementation.* (8 returned)
  - `site:bugs.chromium.org OR site:groups.google.com/a/chromium.org "Rust" "XML" "DOMParser"` — *Discover internal Chromium intent-to-ship threads, bug tracking, and developer discussions detailing the migration of XML parsing to Rust.* (8 returned)
  - `"DOMParser" parseFromString "text/xml" OR "image/svg+xml" responseXML example` — *Locate practical JavaScript examples of DOMParser and XMLHttpRequest responseXML parsing for XML and SVG formats impacted by the parser update.* (8 returned)
  - `Chrome 153 "XML parsing in Rust" OR "XSLT deprecation"` — *Retrieve web platform release notes, developer digests, and compatibility guides detailing Chrome's phased XSLT removal and transition to Rust.* (7 returned)
  - `"Rust" in Chromium Blink SVG standalone external image parsing security` — *Explore tech analysis and ecosystem sentiment around using memory-safe Rust for SVG and image resource parsing in Blink.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **14 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 476 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5309598397497344)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5309598397497344)
- [Specification](https://www.w3.org/TR/xml)
- [Chromium Tracking Bug](https://crbug.com/466303347)
