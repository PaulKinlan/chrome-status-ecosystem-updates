# CSS ruby-overhang property

> **Report Week:** 2026-W39 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Support of new CSS property \`ruby-overhang\` is added.  The property accepts one of \`auto\`, \`spaces\` and \`none\` keywords to control overhang of ruby annotation text. Per CSSWG, none is aliased to spaces, allowing overhang only over whitespace and CJK punctuation. This prevents unnecessary layout gaps while preserving text readability.

### Motivation

A ruby annotation can sometimes obscure adjacent content when it overhangs. The ruby-overhang property gives authors a way to disable this behavior and prevent unwanted overlap. For example, in children's books or text books for low-vision readers, authors need to ensure none overhang to prevent any reading confusion.

## Ecosystem Status

- **Momentum:** High (470 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** With default enablement in Chrome 151 joining prior support in Safari 18.2+, the CSS \`ruby-overhang\` property is transitioning from an enduring specification gap into an interoperable reality for East Asian typography. The property enables authors to prevent wider ruby annotations from obscuring adjacent content or creating awkward layout gaps by limiting overhang to whitespace and CJK punctuation. Alignment across the CSSWG to alias \`none\` to \`spaces\` has settled legacy ambiguities, setting the stage for Baseline status once Gecko lands implementation.

### Recommendations
- Actionable Advice: Digital publishers and developers building CJK reading experiences should treat \`ruby-overhang: spaces\` (or \`none\`) as a safe progressive enhancement today. Because unsupported engines cleanly fall back to default user-agent ruby formatting without breaking layout integrity, no complex polyfill or CSS feature query gating is required.
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @nt1m: "Implemented here: https://commits.webkit.org/317569@main..."
- Standards Activity (Mozilla): Latest discussion from @lochpedko-netizen: "Да уж да какой-то информации в этом аккаунте Я никогда шёл и решил что получается ты посижу ещё на улице..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS ruby-overhang: spaces](https://github.com/WebKit/standards-positions/issues/681) [closed]
- **Mozilla:** [CSS ruby-overhang](https://github.com/mozilla/standards-positions/issues/1372) [open]

## 📰 Ecosystem Blogs & Articles

- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGAs4D8fIZbjevRJOPwqIoHWHbX3guRQ90I6S1DlrM2KIx9GiC2eQh_yqsRMbkVRjlGnHx5HEvm2pnZHNDYMTjfLTvZ_XRBURLcF-z6hKForLQM6Jnx2ooC4jqK5EFBGv5Bp_KMX7in5VI6cbbR-W60atagZjQnipxX87th1ELit9uL26Gqped59Q==) *(vertexaisearch.cloud.google.com)*
  > ruby-overhang CSS property - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Properties ruby-overhang Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 ruby-overhang...
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGIxa_9_EKBbEZ9brZ988g0EkRXu5L0FL_PWbVpqbyhZ1txcfjC4OMX0t-5iLNMJQrzYhdkfuA9jDb4_FNaTwwtTFeGQnHr9Dq4XLC9KhHvPGK06vOgyB5oo8_gUTo2dagRh2KFLMuC) *(vertexaisearch.cloud.google.com)*
  > ### Summary of `ruby-overhang`  The **`ruby-overhang`** CSS property controls whether ruby annotation text (the `<rt>` element) is permitted to overlap or overhang adjacent text outside the `<ruby>` container when the annotation is wider than its bas
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHrFub8anOYzSmD88o08dHTlpU0T8sDy3kl9H5DHGh08MmNt5jtfAerQCGZhscFwf1LuDq3GLcKa4H1tVWfnCtJXJ9WOoHtO95kLzFlH_Ol2M7BWvsKI9r5uxZbGy2v1zzQEBbCSt62) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFKWiFGyhhi_iJ2VEBHWSWgSqjIYpJSSD8EiLiy_yluPOMXhPimk5Ix4p2B5KWfLxEcmn0B0brCIXlFt_iExc3Fj8sgsm1lbK69C8e2IEdXXtAsg2Phgn_vHxD7fxC4XQV1l1DwSptiKA-Npumh4Ejc7li7XAxxoknj2q5NEHMVNnyjXCg_Kpmt_RIo4mW0jkHDDy6v9jUj8dZ_U16HtxJ3bgxcrLj4) *(vertexaisearch.cloud.google.com)*
  > content/files/en-us/web/css/reference/properties/ruby-overhang/index.md at main · mdn/content · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. ...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG20uPtk1eKg3Imk1yY32rmQ6ljsyQDZLnbWRDSv4bKeyPdgeK9xM4tZndtbkQi3vhrVqJ8A0v77wRqwc3QzSZ_6703rJxflI9WbMEX2xhm2H_Xo6lhYCJhN0LsowwVB7t9h4x22hry1BmvPoZEr5xQ37V-gtCdAFTq) *(vertexaisearch.cloud.google.com)*
  > CSS ruby layout - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Guides Ruby layout Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 한국어 Русский CSS ruby layout The CSS ruby...
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEdldpkQECr5eJnWjCh4iaB0j_ZV3PSiZ0xb4iRs5fZANNro3Bx_e_ern9_m2TWRw4pILjnpSSKPo3s-Ivvfy46EA39H7JbUxGwLHwVDtR4NS8-OBcSZ7bvK1t2r9oW_oadO0jzrFX-KsjTY_Lcwv-VF7yQQQ==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of `ruby-overhang`  The **`ruby-overhang`** CSS property controls whether ruby annotation text (the `<rt>` element) is permitted to overlap or overhang adjacent text outside the `<ruby>` container when the annotation is wider than its bas
- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEGv1CJ0rjnUipnWmurqdO1hWPkfDM4quS-xpp2OdpXquFeQqW_LmJYdffsLNAoJnbPHeuMpDWVWGzVvqJ8MaZHkIA27-ENNzPy8R5PIWTWwloeaY67imsikRe48PpLCnwaqF4pK5xZ0RtQAtg2pmsF) *(vertexaisearch.cloud.google.com)*
  > Ruby Styling Ruby Styling Intended audience: Content authors This article offers practical guidance for content authors on how to style ruby annotations in line with the CSS Ruby specification. The table of contents highlights the core tasks involved...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEjecYxIhuVx9LxVssGmek6-aGBT9SRh1ZAcB_m3ECyX_WAxMIiF8wOLYkB_b0bbWCrF3VRcNEpJI63gIS5kypGtbA2gnVs_Jm9tVs4wCY4BLtDgo4yWja0kqJwWmDtXuBvx4bQOJFFkwJpZA==) *(vertexaisearch.cloud.google.com)*
  > ตัวแบ่งบรรทัด <ruby> และพร็อพเพอร์ตี้ CSS Ruby-align | Blog | Chrome for Developers ข้ามไปที่เนื้อหาหลัก / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית الع...
- [blooberry.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH_xiLERQFVKa6iualjYDoLBD_BpikiMSirkez93wFe30ZGn8W5WEzCfAQ0tkkzXjlsdwew1trkOZbSyqZSUHvS3zXEWsaevZmy7C-ixp8dTgxxc1tVJomvu2oWvoobd9wxEwsJelIenY6Bivtk7ZbxFBVAbgFBTUzZ) *(vertexaisearch.cloud.google.com)*
  > ### Summary of `ruby-overhang`  The **`ruby-overhang`** CSS property controls whether ruby annotation text (the `<rt>` element) is permitted to overlap or overhang adjacent text outside the `<ruby>` container when the annotation is wider than its bas
- [wpt.fyi](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGXjSzHN497ux11ALn3HsY_vmoHqE71tQnD9KAxNIzRqmWHpHawq3ScC4YNV4exxOZB6cyajA_ewZDb8upU1-usIOqePddsGvFooYu85t6N24wsyDTdWCPILfXcy6LAPAhheULy7FIJk1zCLEt43mYE7Vocn6xrX_4=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of `ruby-overhang`  The **`ruby-overhang`** CSS property controls whether ruby annotation text (the `<rt>` element) is permitted to overlap or overhang adjacent text outside the `<ruby>` container when the annotation is wider than its bas
- [caniuse.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEKMUGz9i6prF-ICsPvDt714LpS8uxKDbSWA9bppLeYKXQX69NB1ODFj4K9_grjKX2ggVDoHmIHR_7ivty0FI-JpLzCKlGAbLydPEhWu5ZHmDvnLOdm4QlfhYMSzpc5TSCocoqir9hedJWm) *(vertexaisearch.cloud.google.com)*
  > ### Summary of `ruby-overhang`  The **`ruby-overhang`** CSS property controls whether ruby annotation text (the `<rt>` element) is permitted to overlap or overhang adjacent text outside the `<ruby>` container when the annotation is wider than its bas
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEkv4WdXBOlQ6JTdVMZf1yRPO4GRuwXZ1GjE-zQHFtv9cqu_3Mvl5BwAe2xhm1abhZADoDSKpn9QDVYv5fvOuCYD3t-ZnGQG_a8ZYiEIt0-WFP3Y-a6PKQ=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of `ruby-overhang`  The **`ruby-overhang`** CSS property controls whether ruby annotation text (the `<rt>` element) is permitted to overlap or overhang adjacent text outside the `<ruby>` container when the annotation is wider than its bas
- [Re: \[blink-dev\] Intent to Ship: CSS ruby-overhang property](http://www.mail-archive.com/blink-dev@chromium.org/msg16101.html) *(mail-archive.com)*
  > &gt; *No information provided* &gt; &gt; *Link to entry on the Chrome Platform Status* &gt; https://<strong>chromestatus.com/feature/6560118298771456</strong>?gate=6494196590575616 &gt; &gt; *Links to previous Intent discussions* &gt; Intent to Proto...
- [CSS ruby-overhang property](https://chromestatus.com/feature/6560118298771456) *(chromestatus.com · 2026-02-27T00:00:00)*
  > We cannot provide a description for this page right now
- [ruby-overhang property - Script Tutorials](https://www.script-tutorials.com/css-ref/ruby-overhang) *(script-tutorials.com · 2024-10-25T07:30:41)*
  > <strong>This property determines whether, and on which side, ruby text is allowed to partially overhang any adjacent text in addition to its own base, when the ruby text is wider than the ruby base</strong>.
- [ruby-overhang · WebPlatform Docs](https://webplatform.github.io/docs/css/properties/ruby-overhang) *(webplatform.github.io)*
  > The ruby-overhang property <strong>specifies the overhang of the ruby text defined by the rt object, and is set on the ruby object</strong>.
- [ruby-overhang－スタイルシートリファレンス](http://www.htmq.com/style/ruby-overhang.shtml) *(htmq.com · 2024-07-26T11:30:00)*
  > ruby-overhang･･･ルビの表示領域を指定する（IEがCSS3の草案を先行採用）
- [CSS property: ruby-overhang \| Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/mdn-css_properties_ruby-overhang) *(caniuse.com)*
  > &quot;Can I use&quot; provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers.
- [CSS3によるルビのはみ出す表示位置 \| CSS3逆引き \| Webサイト制作支援 \| ShanaBrian Website](https://shanabrian.com/web/css3/ruby-overhang.php) *(shanabrian.com)*
  > ルビ文字のはみ出す表示位置を指定するには、ruby-overhangプロパティを使用します。 このプロパティは本体文字よりルビ文字が長い場合に有効となるプロパティです。 · CSS3逆引きリファレンス一覧へ戻る
- [Ruby-Overhang - Cascading Style Sheets Properties - Blooberry](http://www.blooberry.com/indexdot/css/properties/intl/roverhang.htm) *(blooberry.com)*
  > <strong>This property describes how Ruby Text (RT) content will &quot;hang&quot; over other non-ruby content if the RT content is wider than the RUBY content</strong> · Description: RT content that is wider than the RUBY content hangs above other tex...
- [ep201 Monthly Platform 202603 \| mozaic.fm](https://mozaic.fm/episodes/201/monthly-platform-202603.html) *(mozaic.fm · 2026-03-27T00:00:00)*
  > Ship: CSS ruby-overhang property · https://groups.google.com/a/chromium.org/g/blink-dev/c/EEdvr9Tv9as · Ship: Web App Origin Migration · https://groups.google.com/a/chromium.org/g/blink-dev/c/kwDE7lh6YiA · 既存の PWA のオリジンが変わった時に、移行したい ·
- [CSS Ruby Layout - CSS - W3cubDocs](https://docs.w3cub.com/css/css_ruby_layout.html) *(docs.w3cub.com)*
  > Ruby annotations are <strong>a form of interlinear annotation, consisting of short runs of text alongside the base text</strong>. They are typically used in East Asian documents to indicate pronunciation or define meaning. ... The CSS ruby layout mod...
- [ruby-overhang Attribute \| ruby-overhang Property - MS Office DHTML, HTML & CSS Documentation](https://documentation.help/MS-Office-DHTML-HTML-CSS/rubyoverhang.htm) *(documentation.help)*
  > <strong>&lt;RUBY ID=oRuby STYLE = &quot;ruby-overhang: none&quot;&gt;</strong> Ruby base. &lt;RT&gt;Ruby text.
- [ruby-overhang](https://www.52686.com/css/c_rubyoverhang.html) *(52686.com)*
  > ruby-overhang汾IE5+רԡ̳ԣ ﷨ ruby-overhang : auto | whitespace | none auto : rubyıͻڻıκı whitespace : rubyıֻͻհַ none : rubyıֻͻڻıκı ˵ ûͨrtָעıָϣοruby󣩵λá rubyrtҵ ӦĽűΪrubyOverhangұдĿ ʾ ruby { ruby-overhang: auto; } İťѡֵruby-overhangԵֵһrubyıᷢʲô ·
- [rubyOverhang property (Windows) \| Microsoft Learn](<https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/aa768722(v=vs.85)>) *(learn.microsoft.com · 2017-05-01T00:00:00)*
  > Ruby text overhangs only white-space characters. none (none) Ruby text overhangs only text adjacent to its base. auto | whitespace | none · CSS3 Ruby Module, Section 4.3 · The IHTMLStyle2::rubyOverhang property specifies the overhang of the ruby text...
- [ruby-overhang－スタイルシートリファレンス](https://www.htmq.com/tech/style/ruby-overhang) *(htmq.com · 2024-07-26T11:30:00)*
  > ruby {ruby-position:above;} ruby.sample1 {ruby-overhang:auto;} ruby.sample2 {ruby-overhang:whitespace;} ruby.sample3 {ruby-overhang:none;} &lt;html&gt; &lt;head&gt; &lt;link rel=”stylesheet” href=”sample.css” type=”text/css”&gt; &lt;/head&gt; &lt;bod...
- [Re: \[blink-dev\] Intent to Ship: CSS ruby-overhang property](http://www.mail-archive.com/blink-dev@chromium.org/msg16691.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt; *Can we request a signal?* &gt;&gt;&gt;&gt;&gt;&gt;&gt; I&#x27;ve found the opened issue in bugzilla &gt;&gt;&gt;&gt;&gt;&gt;&gt; https://bugzilla.mozilla.org/show_bug.cgi?id=1611410. I update...
- [\[webkit-dev\] Request for position: CSS Ruby Layout Module](https://lists.webkit.org/pipermail/webkit-dev/2020-September/031412.html) *(lists.webkit.org)*
  > [2] - &#x27;ruby-overhang&#x27; property Note that Firefox already shipped them. [1] https://drafts.csswg.org/css-ruby-1/ [2] https://www.chromestatus.com/metrics/feature/timeline/popularity/3313 -- TAMURA Kent Software Engineer, Google -------------...
- [\[blink-dev\] Intent to Prototype: CSS ruby-overhang property](https://www.mail-archive.com/blink-dev@chromium.org/msg14620.html) *(mail-archive.com)*
  > <strong>The ruby-overhang property gives authors a way to disable this behavior and prevent unwanted overlap</strong>. *Initial public proposal* None *Search tags* css &lt;https://chromestatus.com/features#tags:css&gt;, ruby &lt;https://chromestatus....
- [Chrome 151 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/151) *(developer.chrome.com · 2026-07-28T00:00:00)*
  > Tracking bug #40929813 | ChromeStatus.com entry | Spec · <strong>Adds support for the ruby-overhang CSS property</strong>. The property accepts auto, spaces, or none keywords to control the overhang of ruby annotation text.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: CSS ruby-overhang property](http://www.mail-archive.com/blink-dev@chromium.org/msg16101.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6560118298771456`)*
  > &gt; *No information provided* &gt; &gt; *Link to entry on the Chrome Platform Status* &gt; https://<strong>chromestatus.com/feature/6560118298771456</strong>?gate=6494196590575616 &gt; &gt; *Links to previous Intent discussions* &gt; Inten...
- [csswg-drafts/css-ruby-1/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-ruby-1/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-ruby/#ruby-overhang`)*
  > Shortname: css-ruby · Level: 1 · Status: ED · Work Status: Revising · Group: csswg · ED: https://<strong>drafts.csswg.org/css-ruby</strong>-1/ TR: https://www.w3.org/TR/css-ruby-1/ Test Suite: https://w3c.github.io/i18n-tests/results/css-ru...
- [CSS Ruby Annotation Layout Module Level 1](https://www.w3.org/TR/css-ruby-1) *(w3.org · 2022-12-31T00:00:00)* *(Cites: `https://drafts.csswg.org/css-ruby/#ruby-overhang`)*
  > https://www.w3.org/TR/css-ruby-1/ Editor&#x27;s Draft: https://<strong>drafts.csswg.org/css-ruby</strong>-1/ Previous Versions: https://www.w3.org/TR/2021/WD-css-ruby-1-20211202/ https://www.w3.org/TR/2021/WD-css-ruby-1-20210310/ https://ww...
- [\[css-ruby\] Align ruby with line head or line end · Issue #4857 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4857) *(github.com · 2020-03-10T00:00:00)* *(Cites: `https://drafts.csswg.org/css-ruby/#ruby-overhang`)*
  > The behavior discussed in the opening comment, as well as the behavior recommended in simple ruby, is currently allowed, but not required, by the css-ruby spec in https://<strong>drafts.csswg.org/css-ruby</strong>-1/#line-edge.
- [CSS ruby-overhang: spaces · Issue #681 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/681) *(github.com · 2026-06-07T01:46:35)* *(Cites: `https://drafts.csswg.org/css-ruby/#ruby-overhang`)*
  > WebKittens No response Title of the proposal [css-ruby] ruby-overhang:none is too agressive URL to the spec https://<strong>drafts.csswg.org/css-ruby</strong>-1/#ruby-overhang URL to the spec&#x27;s repository w3c/c...
- [\[css-ruby\] ruby-merge:merge and long annotations · Issue #6004 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/6004) *(github.com · 2021-02-15T00:00:00)* *(Cites: `https://drafts.csswg.org/css-ruby/#ruby-overhang`)*
  > I think the expected behavior of ... but not in the opposite situation. The relevant spec sections are <strong>https://drafts.csswg.org/css-ruby-1/#ruby-layout</strong> and ......

## 📚 Platform Documentation & Specifications

- [csswg-drafts/css-ruby-1/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-ruby-1/Overview.bs) *(github.com)*
- [CSS Ruby Annotation Layout Module Level 1](https://www.w3.org/TR/css-ruby-1) *(w3.org)*
- [\[css-ruby\] Align ruby with line head or line end · Issue #4857 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4857) *(github.com)*
- [CSS ruby-overhang: spaces · Issue #681 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/681) *(github.com)*
- [\[css-ruby\] ruby-merge:merge and long annotations · Issue #6004 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/6004) *(github.com)*
- [Ruby Styling](https://www.w3.org/International/articles/ruby/styling.en.html) *(w3.org)*
- [ruby-overhang CSS プロパティ - MDN Web Docs](https://developer.mozilla.org/ja/docs/Web/CSS/Reference/Properties/ruby-overhang) *(developer.mozilla.org)*
- [content/files/en-us/web/css/reference/properties/ruby-overhang/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/css/reference/properties/ruby-overhang/index.md?plain=1) *(github.com)*
- [ruby-overhang - CSS - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/ruby-overhang) *(developer.mozilla.org)*
- [ruby-overhang CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/ruby-overhang) *(developer.mozilla.org)*
- [CSS ruby layout - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Ruby_layout) *(developer.mozilla.org)*
- [CSS ruby layout - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_ruby_layout) *(developer.mozilla.org)*
- [CSS3 Ruby Module](https://www.w3.org/TR/2011/WD-css3-ruby-20110630) *(w3.org)*
- [feat(css): add bounded ruby-overhang value qualification · Issue #514 · YT-TechDev/frontend-analysis](https://github.com/YT-TechDev/frontend-analysis/issues/514) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 59 result(s) found across 11 planned queries — **32 verified relevant**
  - `"chromestatus.com/feature/6560118298771456" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"drafts.csswg.org/css-ruby" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"CSS ruby-overhang property" API` — *Core feature API query* (1 returned)
  - `"CSS ruby-overhang property" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"ruby-overhang" OR "low-vision" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS ruby-overhang property" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS ruby-overhang property" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
  - `"ruby-overhang" css (tutorial OR guide OR "ruby annotation")` — *Discovers practical guides, blog articles, and tutorials explaining how to use ruby-overhang to format ruby text layout.* (8 returned)
  - `"ruby-overhang" ("auto" OR "none" OR "spaces") css example` — *Locates syntax references and CSS code snippets demonstrating the keywords and layout behavior of ruby-overhang.* (8 returned)
  - `"ruby-overhang" ("intent to ship" OR chromestatus OR webkit OR firefox)` — *Finds browser vendor adoption roadmaps, engine implementation status, and release announcements for the ruby-overhang property.* (6 returned)
  - `"ruby-overhang" site:github.com/w3c/csswg-drafts issues OR discussion` — *Surfaces CSSWG specification discussions, issue tracker debates, and community feedback regarding ruby overhang and edge cases in CJK typography.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **12 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 178 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 2 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6560118298771456)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6560118298771456)
- [Specification](https://drafts.csswg.org/css-ruby/#ruby-overhang)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/366873207)
