# Optional descriptors for registered custom properties

> **Report Week:** 2026-W40 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Allows authors to omit any descriptor in an @property rule and the corresponding optional members of CSS.registerProperty(). Omitted values  default to universal syntax, inheritance, and the guaranteed-invalid  initial value; invalid descriptors use normal CSS fallback behavior.

### Motivation

Registered custom properties currently require authors to repeat syntax and  inherits descriptors, and typed registrations cannot omit initial-value. The  CSSWG resolved that registrations should behave like unregistered custom  properties except for the descriptors authors explicitly provide. This removes  boilerplate and lets typed properties use per-use var() fallbacks by defaulting  initial-value to the guaranteed-invalid value.

## Ecosystem Status

- **Momentum:** High (290 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** This specification update resolves a long-standing developer pain point by relaxing the strict requirements of \`@property\` and \`CSS.registerProperty()\`, allowing descriptors like \`syntax\`, \`inherits\`, and \`initial-value\` to be omitted and fall back to unregistered custom property defaults. Chrome has committed to shipping this feature by default in milestone 156 following unanimous CSSWG consensus. Developer reception is enthusiastically positive because it eliminates repetitive boilerplate and unlocks per-use \`var()\` fallbacks for typed properties.

### Recommendations
- Actionable Advice: Teams should adopt the relaxed \`@property\` syntax in authoring code today using \`@csstools/postcss-property-rule-optional-descriptors\` or \`postcss-preset-env\` for automated backward-compatibility transforms. Avoid shipping untranspiled shorthand \`@property\` rules directly to production until Safari and Firefox implement the updated parsing rules natively.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Packages & Polyfills

- [@csstools/postcss-property-rule-optional-descriptors](https://www.npmjs.com/package/@csstools/postcss-property-rule-optional-descriptors) `v1.0.0` — Omit optional descriptors in at-property rules

## 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH0Z6Lq2GVmRs4NuZeYCEuk2jVKvle6d7v9d3qjQi_y7M8uW0YOxORp2eTCa2pzV-AcStlRrMCIv8ageq_LkHg-ilFh2cq3y3i5zHxGVIjkfB3wFB01VC58832od7M5WMl8_LMaVAA=) *(vertexaisearch.cloud.google.com)*
  > [css-properties-values-api] `@property` descriptors should be optional whenever possible · Issue #13211 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in...
- [npmjs.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEBVku3sSNWtZJ72bg2Sl69J_0guUxQ-2U-cgreWF6H3KVzoeH-mhK1YcWMXtPzaiTbYKe57aUEdgWBu248-aJ8BJCkvrb3NFXLhO4YZ5ULPEVMwr3yqfSp4yDRA52RISSmXhY5iALM0L3fiCFiuFcMnSwYxPlWiI5kSxBE2Ee4MhA1mRshHqyV) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **"Optional descriptors for registered custom properties"** feature streamlines the CSS Properties and Values API (`@property` at-rule and JavaScript’s `CSS.registerProperty()`).   Previously, `@property` was notoriously stri
- [npmjs.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF_XZd0-63-qlPqsjD1uBbauje5jPQZrSp1SYMjJ804OTt_EA6oDTODdBhG-UzMnBlcRNQ7VDUWUj-x1HT9dUG5R3A74PRaLodAia9jyIb3dQDhVcATMOdwnpcxnZqZsH6Ab7H5AI8QqG4KZc4TnwtYgcOXDf5jmWIRHIKHCmIXSiSfX-egCFXP) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **"Optional descriptors for registered custom properties"** feature streamlines the CSS Properties and Values API (`@property` at-rule and JavaScript’s `CSS.registerProperty()`).   Previously, `@property` was notoriously stri
- [cssdb.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH4LDpPeM2CKvfjiGalU6YykxSn_1Ll2npzsbpmJ53L8NkXSUbzUMjuGLiZxXuc24wYDKGJtmwWrXD1UCLMz0yECz6urdNSSiCron3nYFV4g9jDt__Fws0nSQmFtQ==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **"Optional descriptors for registered custom properties"** feature streamlines the CSS Properties and Values API (`@property` at-rule and JavaScript’s `CSS.registerProperty()`).   Previously, `@property` was notoriously stri
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEHZOYfJ71Ir9JY5d5hmQCtG72nmqGngHY2BH79qIpB-oN7XWR1n4L6uD5AQqVCPLc8-eQnY-DoNyyZOhdX5Y3bZ6okRwF54bAvRL-TLj2AEbmkhvAuVVmm_OImIrsKQzV-ZG9wvCTPsnLpK3JspvQoS6pd7MAoH9uartBGReLpGFhooPhrsplAwcRlp-WevnnE4IwYs3MKBw==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **"Optional descriptors for registered custom properties"** feature streamlines the CSS Properties and Values API (`@property` at-rule and JavaScript’s `CSS.registerProperty()`).   Previously, `@property` was notoriously stri
- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGI0me3KslEjVTwiFnkKI94NtdJoGaYxOc9IoRxv7V3RugHBQIAhtppkk_p3qKSuxxsliUZo3juPD_BwPPheNJPaV5nnFxIcb5gyusdbFdEVA5lLH_pYYSvIw3LEiGaWEpcbw5VtEp4UR8BTg==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **"Optional descriptors for registered custom properties"** feature streamlines the CSS Properties and Values API (`@property` at-rule and JavaScript’s `CSS.registerProperty()`).   Previously, `@property` was notoriously stri
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF9BLYtga-3JgmAP03PK8-31QZ8KXkfQBGaM8a1GXlV0NWSJzNkhpqzU2W_JZ8EVVn8f-dvTxj2fhUKaSzGBc9yD4kCIKDcuwXUl3QM3GfGgCzLBL-Ov81qcbIae3diiyjJPC90QDjFH4nf4oB_W88bhX-PH7p_V8tppVWqCrLgH3Ht0fhTQf5lJAY=) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **"Optional descriptors for registered custom properties"** feature streamlines the CSS Properties and Values API (`@property` at-rule and JavaScript’s `CSS.registerProperty()`).   Previously, `@property` was notoriously stri
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHFaz6F5KhrcUhkzyLhegLXZgFAQ4VG5Tynv1w6xlMFy6xZ0n-CZMMv-QvjmRqg0SlxiB2rN4o3VDQSyQ7858uJj98Kv7zhrfHBa5yO-W7uSCkYOImZf6pUBZt0omsEIcvQfaGqC0C628bt2qnJbiWlHMV9jJmP-a1Wo8j9hYYN0uJd0PH7KQr8zFRamQ==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **"Optional descriptors for registered custom properties"** feature streamlines the CSS Properties and Values API (`@property` at-rule and JavaScript’s `CSS.registerProperty()`).   Previously, `@property` was notoriously stri
- [Property flags and descriptors](https://javascript.info/property-descriptors) *(javascript.info)*
  > The non-configurable flag (configurable:false) is sometimes preset for built-in objects and properties. A non-configurable property can’t be deleted, its attributes can’t be modified. For instance, Math.PI is non-writable, non-enumerable and non-conf...
- [interface DescriptorsProperty · AWS CDK](https://docs.aws.amazon.com/cdk/api/v2/docs/@aws-cdk_cfn-property-mixins.aws_agentregistry.CfnRegistryRecordPropsMixin.DescriptorsProperty.html) *(docs.aws.amazon.com)*
  > The typed set of <strong>descriptors</strong> <strong>for</strong> a registry record · Exactly one <strong>descriptor</strong> field is populated based on the record type
- [interface CustomDescriptorProperty · AWS CDK](https://docs.aws.amazon.com/cdk/api/v2/docs/@aws-cdk_cfn-property-mixins.aws_agentregistry.CfnRegistryRecordPropsMixin.CustomDescriptorProperty.html) *(docs.aws.amazon.com)*
  > The <strong>custom</strong> <strong>descriptor</strong>, populated when the record type is <strong>CUSTOM</strong> · See also: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-<strong>properties</strong>-agentregistry-registryrecord-...
- [Creating a custom TypeConverter part 2 - Instance descriptors, expandable properties and standard values - Articles and information on C# and .NET development topics • Cyotek](https://www.cyotek.com/blog/creating-a-custom-typeconverter-part-2) *(cyotek.com · 2013-07-28T19:43:09)*
  > For instance descriptors, we <strong>use Reflection in order to get the constructor which takes two parameters, and then we create an InstanceDescriptor object from that</strong>. Easy enough! Now when we modify our SampleClass component in the desig...
- [AWS::AgentRegistry::RegistryRecord Descriptors - AWS CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-properties-agentregistry-registryrecord-descriptors.html) *(docs.aws.amazon.com)*
  > The typed set of <strong>descriptors</strong> <strong>for</strong> a registry record. Exactly one <strong>descriptor</strong> field is populated based on the record type.
- [JavaScript Tutorial =&gt; Descriptors and Named Properties](https://riptutorial.com/javascript/example/2993/descriptors-and-named-properties) *(riptutorial.com)*
  > <strong>configurable is true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object</strong>.
- [CSS @property: The Complete Production Reference \| Blog \| Web Specification Studio · WSS](https://webspecification.com/blog/at-property) *(webspecification.com · 2026-07-29T00:00:00)*
  > A property registered with syntax: <strong>&quot;*&quot;</strong> computes the same way an unregistered custom property does: the specified value with var() references substituted, or the guaranteed-invalid value.
- [Reading and Writing CSS Custom Property Values with JavaScript](https://handoff.design/js-for-css-devs/reading-css-variables) *(handoff.design · 2026-09-16T10:33:55)*
  > The real benefit: the browser validates the value against the syntax and rejects invalid assignments, so –spacing: red becomes the initial value 0px, and getPropertyValue returns ‘0px’. Without registration, an invalid value is treated as unset, and ...
- [CSS.registerProperty() \| w3c/css-houdini-drafts \| DeepWiki](https://deepwiki.com/w3c/css-houdini-drafts/3.1-css.registerproperty) *(deepwiki.com · 2026-02-25T20:00:57)*
  > <strong>This constraint exists because the initial value must be resolvable without a specific element in context</strong> — it functions as the universal fallback when a declared value is invalid at computed-value time.
- [PWA Manifest Cheat Sheet 2024](https://www.zeepalm.com/blog/pwa-manifest-cheat-sheet-2024) *(zeepalm.com · 2025-12-11T13:16:44)*
  > These keys are crucial for defining the PWA and include: KeyDescriptionnameThe name of the web applicationshort_nameA shorter name of the web application (optional)iconsAn array of icon objects that represent the web applicationstart_urlThe URL that ...
- [Uniquely identifying PWAs with the web app manifest id property \| Capabilities \| Chrome for Developers](https://developer.chrome.com/docs/capabilities/pwa-manifest-id) *(developer.chrome.com · 2024-09-20T00:00:00)*
  > <strong>The optional `id` property is part of the web app manifest spec, and allows you to explicitly define the identifier used for your PWA</strong>. Adding the `id` property to the manifest removes the dependency on the `start_url` or the location...
- [Customization best practices for developing PWA - BMC Documentation](https://docs.bmc.com/xwiki/bin/view/Service-Management/Innovation-Suite/BMC-Helix-Innovation-Suite/is252/Developing-Progressive-Web-Applications/Customization-best-practices-for-developing-PWA) *(docs.bmc.com · 2025-08-04T00:00:00)*
  > Make sure that you read the whitepaper at the following link before referring to the best practices in this topic:Community blog: Whitepaper on BMC Helix ITSM PWA Implementation Methodology · The information in the whitepaper helps you achieve the fo...
- [Enter app properties for PWA - Windows apps \| Microsoft Learn](https://learn.microsoft.com/en-us/windows/apps/publish/publish-your-app/pwa/enter-app-properties) *(learn.microsoft.com)*
  > The App properties page of the app submission process lets you define your PWA app&#x27;s category and indicate hardware preferences or other declarations.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[css-properties-values-api\] Make all the descriptors optional · Issue #994 · w3c/css-houdini-drafts](https://github.com/w3c/css-houdini-drafts/issues/994) *(github.com · 2020-07-23T22:24:41)* *(Cites: `https://drafts.css-houdini.org/css-properties-values-api-1/#at-property-rule`)*
  > Currently, all the declarations inside the @property are required (https://<strong>drafts.css-houdini.org/css-properties-values-api-1</strong>/#at-property-rule), (with the exception of initial-value, but only for universal syntax definitio...

## 📚 Platform Documentation & Specifications

- [\[css-properties-values-api\] Make all the descriptors optional · Issue #994 · w3c/css-houdini-drafts](https://github.com/w3c/css-houdini-drafts/issues/994) *(github.com)*
- [Using the CSS properties and values API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Properties_and_Values_API/guide) *(developer.mozilla.org)*
- [property CSS at-rule - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@property) *(developer.mozilla.org)*
- [CSS: registerProperty() static method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/CSS/registerProperty_static) *(developer.mozilla.org)*
- [CSS Properties and Values API Level 1](https://www.w3.org/TR/css-properties-values-api-1) *(w3.org)*
- [@property CSS at-rule - CSS \| MDN](https://developer.mozilla.org/en-US/docs/web/css/@property) *(developer.mozilla.org)*
- [Settings · Custom properties · algolia/pwa-ecom-ui-template · GitHub](https://github.com/algolia/pwa-ecom-ui-template/custom-properties) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 35 result(s) found across 11 planned queries — **20 verified relevant**
  - `"chromestatus.com/feature/5168674259468288" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"drafts.css-houdini.org/css-properties-values-api-1" -site:drafts.css-houdini.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Optional descriptors for registered custom properties" API` — *Core feature API query* (0 returned)
  - `"Optional descriptors for registered custom properties" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"css.registerproperty" OR "guaranteed-invalid" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Optional descriptors for registered custom properties" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Optional descriptors for registered custom properties" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
  - `"@property" ("optional descriptors" OR "omit initial-value" OR "optional inherits") CSS tutorial OR guide` — *Finds modern developer guides and CSS tutorials explaining how to use `@property` with omitted descriptors and defaulting behaviors.* (0 returned)
  - `CSS.registerProperty optional syntax OR inherits OR initialValue WebIDL code example` — *Surfaces API reference documentation, WebIDL signatures, and JavaScript code examples demonstrating optional parameters in `CSS.registerProperty()`.* (8 returned)
  - `"Optional descriptors for registered custom properties" Chrome "Intent to Ship" OR "ChromeStatus"` — *Locates browser implementation statuses, intent to ship threads, and release announcements across chromium and other browser engines.* (0 returned)
  - `site:github.com/w3c/csswg-drafts "@property" ("optional descriptors" OR "guaranteed-invalid" OR "omit")` — *Retrieves CSS Working Group issue discussions and spec resolutions regarding making custom property descriptors optional.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 15 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **1 verified relevant**
- **Web Platform Tests (wpt.fyi):** 124 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5168674259468288)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5168674259468288)
- [Specification](https://drafts.css-houdini.org/css-properties-values-api-1/#at-property-rule)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/491802759)
