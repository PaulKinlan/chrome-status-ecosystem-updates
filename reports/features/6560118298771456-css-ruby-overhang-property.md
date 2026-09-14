# CSS ruby-overhang property

> **Report Week:** 2026-W38 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Support of new CSS property \`ruby-overhang\` is added.  The property accepts one of \`auto\`, \`spaces\` and \`none\` keywords to control overhang of ruby annotation text. Per CSSWG, none is aliased to spaces, allowing overhang only over whitespace and CJK punctuation. This prevents unnecessary layout gaps while preserving text readability.

### Motivation

A ruby annotation can sometimes obscure adjacent content when it overhangs. The ruby-overhang property gives authors a way to disable this behavior and prevent unwanted overlap. For example, in children's books or text books for low-vision readers, authors need to ensure none overhang to prevent any reading confusion.

## Ecosystem Status

- **Momentum:** High (260 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The \`ruby-overhang\` property is gaining key multi-engine traction, shipping enabled by default in Chrome 151 after earlier deployment in Safari 18.2. It gives authors fine-grained layout control over ruby annotation overlaps (\`auto\`, \`spaces\`, and \`none\`), preventing illegible text collisions without introducing erratic whitespace gaps. Full cross-engine Baseline status remains pending Firefox/Gecko implementation.

### Recommendations
- Actionable Advice: Web teams building East Asian typography layouts or educational readers can safely adopt \`ruby-overhang\` today via progressive enhancement using \`@supports (ruby-overhang: none)\`. Because non-supporting browsers fall back gracefully to default browser-determined overhang behavior, applying it introduces zero destructive breakage.
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @nt1m: "Implemented here: https://commits.webkit.org/317569@main..."
- Standards Activity (Mozilla): Latest discussion from @lochpedko-netizen: "Да уж да какой-то информации в этом аккаунте Я никогда шёл и решил что получается ты посижу ещё на улице..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS ruby-overhang: spaces](https://github.com/WebKit/standards-positions/issues/681) [closed]
- **Mozilla:** [CSS ruby-overhang](https://github.com/mozilla/standards-positions/issues/1372) [open]

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Intent to Ship: CSS ruby-overhang property](http://www.mail-archive.com/blink-dev@chromium.org/msg16101.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: CSS ruby-overhang property Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: CSS ruby-overhang property Alex Russell Mon, 16 Mar 2026 11:52:48 -0700 +Jeff for advice on TAG review/FYI. On Monday, Ma...
- [CSS ruby-overhang property](https://chromestatus.com/feature/6560118298771456) *(chromestatus.com · 2026-02-27T00:00:00)*
  > Chrome Platform Status
- [ruby-overhang property - Script Tutorials](https://www.script-tutorials.com/css-ref/ruby-overhang) *(script-tutorials.com · 2024-10-25T07:30:41)*
  > <strong>This property determines whether, and on which side, ruby text is allowed to partially overhang any adjacent text in addition to its own base, when the ruby text is wider than the ruby base</strong>.
- [Complete Guide to CSS Overflow — With Real-Life Examples](https://codeswithpayal.hashnode.dev/complete-guide-to-css-overflow-with-real-life-examples) *(codeswithpayal.hashnode.dev · 2025-06-14T12:20:37)*
  > In web design, it&#x27;s common to deal with content that doesn&#x27;t fit into its container. The CSS overflow property allows us to handle this situation gracefully — whether we want to clip, scroll, or let it overflow visibly.
- [Beginner’s Guide to CSS Overflow \| Zero To Mastery](https://zerotomastery.io/blog/css-overflow) *(zerotomastery.io · 2025-09-24T00:00:00)*
  > With hidden, the content is clipped but you could still make it scrollable later by switching the property to scroll or auto. ... A blog post preview that shows the first paragraph, with the rest hidden until the reader clicks “Read more”
- [HTML ruby Tag](https://www.w3schools.com/tags/tag_ruby.asp) *(w3schools.com)*
  > The &lt;ruby&gt; tag also supports the Event Attributes in HTML. ... Coding fundamentals as a game. Bite-sized lessons and challenges. ... Ready to start your journey? Your streak is waiting. ... If you want to use W3Schools services as an educationa...
- [ruby-overhang · WebPlatform Docs](https://webplatform.github.io/docs/css/properties/ruby-overhang) *(webplatform.github.io)*
  > The ruby-overhang property <strong>specifies the overhang of the ruby text defined by the rt object, and is set on the ruby object</strong>.
- [Ruby-Overhang - Cascading Style Sheets Properties - Blooberry](http://www.blooberry.com/indexdot/css/properties/intl/roverhang.htm) *(blooberry.com)*
  > <strong>This property describes how Ruby Text (RT) content will &quot;hang&quot; over other non-ruby content if the RT content is wider than the RUBY content</strong> · Description: RT content that is wider than the RUBY content hangs above other tex...
- [CSS property: ruby-overhang \| Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/mdn-css_properties_ruby-overhang) *(caniuse.com)*
  > &quot;Can I use&quot; provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers.
- [ruby-overhang－スタイルシートリファレンス](http://www.htmq.com/style/ruby-overhang.shtml) *(htmq.com · 2024-07-26T11:30:00)*
  > ruby-overhang･･･ルビの表示領域を指定する（IEがCSS3の草案を先行採用）
- [Ruby-Overhang - Cascading Style Sheets Properties](https://hepunx.rl.ac.uk/~adye/blooberry/previous/css/properties/intl/roverhang.htm) *(hepunx.rl.ac.uk)*
  > <strong>This property describes how Ruby Text (RT) content will &quot;hang&quot; over other non-ruby content if the RT content is wider than the RUBY content</strong> · Description: RT content that is wider than the RUBY content hangs above other tex...
- [ep201 Monthly Platform 202603 \| mozaic.fm](https://mozaic.fm/episodes/201/monthly-platform-202603.html) *(mozaic.fm · 2026-03-27T00:00:00)*
  > Ship: CSS ruby-overhang property · https://groups.google.com/a/chromium.org/g/blink-dev/c/EEdvr9Tv9as · Ship: Web App Origin Migration · https://groups.google.com/a/chromium.org/g/blink-dev/c/kwDE7lh6YiA · 既存の PWA のオリジンが変わった時に、移行したい ·

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: CSS ruby-overhang property](http://www.mail-archive.com/blink-dev@chromium.org/msg16101.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6560118298771456`)*
  > Re: [blink-dev] Intent to Ship: CSS ruby-overhang property Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: CSS ruby-overhang property Alex Russell Mon, 16 Mar 2026 11:52:48 -0700 +Jeff for advice on TAG review/FYI. On ...
- [csswg-drafts/css-ruby-1/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-ruby-1/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-ruby/#ruby-overhang`)*
  > csswg-drafts/css-ruby-1/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh you...
- [CSS Ruby Annotation Layout Module Level 1](https://www.w3.org/TR/css-ruby-1) *(w3.org · 2022-12-31T00:00:00)* *(Cites: `https://drafts.csswg.org/css-ruby/#ruby-overhang`)*
  > https://www.w3.org/TR/css-ruby-1/ Editor&#x27;s Draft: https://<strong>drafts.csswg.org/css-ruby</strong>-1/ Previous Versions: https://www.w3.org/TR/2021/WD-css-ruby-1-20211202/ https://www.w3.org/TR/2021/WD-css-ruby-1-20210310/ https://ww...
- [\[css-ruby\] Align ruby with line head or line end · Issue #4857 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4857) *(github.com · 2020-03-10T00:00:00)* *(Cites: `https://drafts.csswg.org/css-ruby/#ruby-overhang`)*
  > [css-ruby] Align ruby with line head or line end · Issue #4857 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Re...
- [\[css-ruby-1\] Default styling for chinese annotations · Issue #775 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/775) *(github.com · 2016-11-29T21:11:23)* *(Cites: `https://drafts.csswg.org/css-ruby/#ruby-overhang`)*
  > [css-ruby-1] Default styling for chinese annotations · Issue #775 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window....
- [CSS ruby-overhang: spaces · Issue #681 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/681) *(github.com · 2026-06-07T01:46:35)* *(Cites: `https://drafts.csswg.org/css-ruby/#ruby-overhang`)*
  > CSS ruby-overhang: spaces · Issue #681 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refres...
- [\[css-ruby\] ruby-merge:merge and long annotations · Issue #6004 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/6004) *(github.com · 2021-02-15T00:00:00)* *(Cites: `https://drafts.csswg.org/css-ruby/#ruby-overhang`)*
  > [css-ruby] ruby-merge:merge and long annotations · Issue #6004 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Re...

## 📚 Platform Documentation & Specifications

- [csswg-drafts/css-ruby-1/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-ruby-1/Overview.bs) *(github.com)*
- [CSS Ruby Annotation Layout Module Level 1](https://www.w3.org/TR/css-ruby-1) *(w3.org)*
- [\[css-ruby\] Align ruby with line head or line end · Issue #4857 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4857) *(github.com)*
- [\[css-ruby-1\] Default styling for chinese annotations · Issue #775 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/775) *(github.com)*
- [CSS ruby-overhang: spaces · Issue #681 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/681) *(github.com)*
- [\[css-ruby\] ruby-merge:merge and long annotations · Issue #6004 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/6004) *(github.com)*
- [Ruby Styling](https://www.w3.org/International/articles/ruby/styling.en.html) *(w3.org)*
- [ruby-overhang CSS プロパティ - MDN Web Docs](https://developer.mozilla.org/ja/docs/Web/CSS/Reference/Properties/ruby-overhang) *(developer.mozilla.org)*
- [content/files/en-us/web/css/reference/properties/ruby-overhang/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/css/reference/properties/ruby-overhang/index.md?plain=1) *(github.com)*
- [ruby-overhang - CSS - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/ruby-overhang) *(developer.mozilla.org)*
- [ruby-overhang CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/ruby-overhang) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 37 result(s) found across 7 planned queries — **22 verified relevant**
  - `"chromestatus.com/feature/6560118298771456" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"drafts.csswg.org/css-ruby" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (6 returned)
  - `"CSS ruby-overhang property" API` — *Core feature API query* (1 returned)
  - `"CSS ruby-overhang property" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (7 returned)
  - `"ruby-overhang" OR "low-vision" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS ruby-overhang property" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS ruby-overhang property" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 178 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 2 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6560118298771456)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6560118298771456)
- [Specification](https://drafts.csswg.org/css-ruby/#ruby-overhang)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/366873207)
