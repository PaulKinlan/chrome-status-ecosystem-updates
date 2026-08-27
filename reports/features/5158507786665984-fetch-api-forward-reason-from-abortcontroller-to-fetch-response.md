# Fetch API: Forward reason from AbortController to fetch Response

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Surfaces the abort reason, if one is provided, to the methods of the Response object and its ReadableStream, rather than just the fetch promise. This fills a gap in our compliance with the standard, surfacing the developer-supplied abort reason everywhere it is intended to.

### Motivation

An AbortController can be passed into fetch to allow a request to be aborted. This is already supported; see https://chromestatus.com/feature/5631483679080448.

When calling abort, you can optionally pass in an "abort reason", and the original fetch promise, if it hasn't already resolved, should be rejected with that reason. This is currently working as intended.

*However*, if the fetch promise *has* resolved (after reading the header), but the body has not yet been fully read, the standard also specifies that the abort reason should propagate to the Response methods such as Response.blob(), as well as the ReadableStream Response.body. This part is not currently working; the relevant Promises instead are rejected with generic AbortErrors.

Firefox at least is compliant here but chromium/Edge/Safari are not. This feature is simply for making chromium compliant with the standard in this regard.

## Ecosystem Status

- **Momentum:** High (80 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Fetch API: Forward reason from AbortController to fetch Response is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- Community package available: [abortcontroller-polyfill](https://www.npmjs.com/package/abortcontroller-polyfill) (v1.7.8) for progressive enhancement.

## Packages & Polyfills

- [abortcontroller-polyfill](https://www.npmjs.com/package/abortcontroller-polyfill) `v1.7.8` — Polyfill/ponyfill for the AbortController DOM API + optional patching of fetch (stub that calls catch, doesn't actually abort request).
- [@remix-run/web-fetch](https://www.npmjs.com/package/@remix-run/web-fetch) `v4.4.2` — Web API compatible fetch implementation
- [node-fetch-native](https://www.npmjs.com/package/node-fetch-native) `v1.6.7` — better fetch for Node.js. Works on any JavaScript runtime!
- [node-fetch](https://www.npmjs.com/package/node-fetch) `v3.3.2` — A light-weight module that brings Fetch API to node.js

## Articles & Documentation

- [[blink-dev] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17191.html)
- [Re: [blink-dev] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17242.html)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5158507786665984)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5158507786665984)
- [Specification](https://fetch.spec.whatwg.org)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/502133195)
