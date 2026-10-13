import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';
import { generateDashboardHtml } from '../src/reporters/html/index.js';

/**
 * The dashboard's filtering script (src/reporters/html/client.js) runs in the
 * reader's browser, where nothing else tests it. This runs the very file that
 * ships, in a Node vm, against a small stand-in for the DOM.
 *
 * The stand-in is deliberately strict where a browser is: `querySelector`
 * parses its selector and throws a SyntaxError for a malformed one, exactly
 * what a quote or bracket from the address bar does to an unescaped selector.
 * `CSS.escape` is the algorithm from the CSSOM spec.
 */

const CLIENT_JS = readFileSync(new URL('../src/reporters/html/client.js', import.meta.url), 'utf-8');

/** CSSOM "serialize an identifier" (what `CSS.escape` does), as specified. */
function cssEscape(value) {
  const string = String(value);
  const first = string.charCodeAt(0);
  if (string.length === 1 && first === 0x2d) return '\\' + string;
  let result = '';
  for (let index = 0; index < string.length; index++) {
    const code = string.charCodeAt(index);
    if (code === 0) { result += '\uFFFD'; continue; }
    if ((code >= 0x01 && code <= 0x1f) || code === 0x7f
      || (index === 0 && code >= 0x30 && code <= 0x39)
      || (index === 1 && code >= 0x30 && code <= 0x39 && first === 0x2d)) {
      result += '\\' + code.toString(16) + ' ';
      continue;
    }
    if (code >= 0x80 || code === 0x2d || code === 0x5f
      || (code >= 0x30 && code <= 0x39) || (code >= 0x41 && code <= 0x5a) || (code >= 0x61 && code <= 0x7a)) {
      result += string.charAt(index);
      continue;
    }
    result += '\\' + string.charAt(index);
  }
  return result;
}

/** Reads a CSS string (after its opening quote) from `source[at]`; returns the value and the index after the closing quote. */
function readCssString(source, at) {
  let value = '';
  let i = at;
  while (i < source.length) {
    const c = source[i];
    if (c === '"') return { value, next: i + 1 };
    if (c === '\n') break; // an unescaped newline is a bad string
    if (c !== '\\') { value += c; i++; continue; }
    i++;
    if (i >= source.length) break;
    const hex = /^[0-9a-fA-F]{1,6}/.exec(source.slice(i));
    if (hex) {
      value += String.fromCodePoint(parseInt(hex[0], 16));
      i += hex[0].length;
      if (/\s/.test(source[i] ?? '')) i++; // one whitespace ends a hex escape
    } else if (source[i] === '\n') {
      i++; // escaped newline: a line continuation
    } else {
      value += source[i++];
    }
  }
  throw new SyntaxError(`'${source}' is not a valid selector (bad string)`);
}

/** Parses the only selector shapes the dashboard uses: `.class` and `[attr="value"]`, compounded. */
function parseSelector(source) {
  const parts = [];
  let i = 0;
  while (i < source.length) {
    const rest = source.slice(i);
    const cls = /^\.([A-Za-z0-9_-]+)/.exec(rest);
    const attr = /^\[([A-Za-z-]+)="/.exec(rest);
    if (cls) {
      parts.push({ cls: cls[1] });
      i += cls[0].length;
    } else if (attr) {
      const { value, next } = readCssString(source, i + attr[0].length);
      if (source[next] !== ']') throw new SyntaxError(`'${source}' is not a valid selector`);
      parts.push({ attr: attr[1], value });
      i = next + 1;
    } else {
      throw new SyntaxError(`'${source}' is not a valid selector`);
    }
  }
  if (parts.length === 0) throw new SyntaxError('The provided selector is empty.');
  return parts;
}

function makeElement({ id = '', classes = [], attrs = {} } = {}) {
  const listeners = {};
  const el = {
    id,
    attrs: new Map(Object.entries(attrs)),
    classes: new Set(classes),
    textContent: '',
    value: '',
    classList: {
      add: name => el.classes.add(name),
      remove: name => el.classes.delete(name),
      contains: name => el.classes.has(name),
    },
    setAttribute: (name, value) => el.attrs.set(name, String(value)),
    removeAttribute: name => el.attrs.delete(name),
    getAttribute: name => (el.attrs.has(name) ? el.attrs.get(name) : null),
    addEventListener: (type, fn) => (listeners[type] ??= []).push(fn),
    click: () => (listeners.click ?? []).forEach(fn => fn({ target: el })),
    get dataset() {
      const data = {};
      for (const [name, value] of el.attrs) {
        if (name.startsWith('data-')) data[name.slice(5).replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = value;
      }
      return data;
    },
    matches: parts => parts.every(p => (p.cls ? el.classes.has(p.cls) : el.attrs.get(p.attr) === p.value)),
    get hidden() { return el.attrs.has('hidden'); },
  };
  return el;
}

const CARDS = [
  { id: 'f-1', milestone: '154', status: 'enabled', momentum: 'High', consensus: 'Multi-Engine Consensus', contested: 'false', delta: 'true', text: 'container queries' },
  { id: 'f-2', milestone: '154', status: 'origin-trial', momentum: 'Quiet', consensus: '', contested: 'true', delta: 'false', text: 'view transitions' },
  { id: 'f-3', milestone: '155', status: 'enabled', momentum: 'Moderate', consensus: '', contested: 'false', delta: 'false', text: 'popover api' },
];

/** The filter buttons the real dashboard renders (src/reporters/html/index.js). */
const BUTTONS = [
  ['milestone', 'all'], ['milestone', '154'], ['milestone', '155'],
  ['activity', 'all'], ['activity', 'deltas'], ['activity', 'new'], ['activity', 'status-change'],
  ['status', 'all'], ['status', 'enabled'], ['status', 'origin-trial'], ['status', 'flagged'], ['status', 'deprecated'],
  ['momentum', 'all'], ['momentum', 'High'], ['momentum', 'Moderate'], ['momentum', 'Emerging'], ['momentum', 'Quiet'],
];

/** Builds the page, runs the shipped script against `?search`, and returns the pieces a test inspects. */
function openDashboard(search = '') {
  const cards = CARDS.map(c => makeElement({
    id: c.id,
    classes: ['feature-card'],
    attrs: {
      'data-milestone': c.milestone, 'data-status': c.status, 'data-momentum': c.momentum,
      'data-has-delta': c.delta, 'data-is-new': 'false', 'data-status-changed': 'false',
      'data-consensus': c.consensus, 'data-contested': c.contested, 'data-search-text': c.text,
    },
  }));
  const buttons = BUTTONS.map(([type, val]) => makeElement({
    classes: ['filter-btn', ...(val === 'all' ? ['active'] : [])],
    attrs: { 'data-filter-type': type, 'data-filter-val': val, 'aria-pressed': val === 'all' ? 'true' : 'false' },
  }));
  const byId = Object.fromEntries(['stat-total', 'stat-high', 'stat-consensus', 'stat-contested', 'stat-deltas', 'empty-state',
    'filter-announcer', 'search-input', 'feature-container', 'stat-card-deltas'].map(id => [id, makeElement({ id })]));

  const select = selector => {
    const parts = parseSelector(selector); // throws, as a browser does
    return [...cards, ...buttons].filter(el => el.matches(parts));
  };
  const document = {
    querySelectorAll: select,
    querySelector: selector => select(selector)[0] ?? null,
    getElementById: id => byId[id] ?? null,
  };
  const replaced = [];
  const window = {
    location: { search, pathname: '/reports/latest.html' },
    history: { replaceState: (...args) => replaced.push(args) },
  };

  vm.runInNewContext(CLIENT_JS, { document, window, URLSearchParams, CSS: { escape: cssEscape } });

  const button = (type, val) => buttons.find(b => b.attrs.get('data-filter-type') === type && b.attrs.get('data-filter-val') === val);
  const shown = () => cards.filter(c => !c.hidden).map(c => c.id);
  const pressed = type => buttons.filter(b => b.attrs.get('data-filter-type') === type && b.classes.has('active'))
    .map(b => b.attrs.get('data-filter-val'));
  return { cards, byId, button, shown, pressed, replaced };
}

// --- the test stand-in itself: if these fail the other results mean nothing --------------------------------------

test('the stand-in escapes and selects like a browser does', () => {
  assert.strictEqual(cssEscape('154'), '\\31 54');
  assert.strictEqual(cssEscape('origin-trial'), 'origin-trial');
  assert.strictEqual(cssEscape('")]'), '\\"\\)\\]');
  assert.deepStrictEqual(parseSelector(`[data-x="${cssEscape('a "b" \\ c]')}"]`), [{ attr: 'data-x', value: 'a "b" \\ c]' }]);
  assert.throws(() => parseSelector('[data-x="")]"]'), SyntaxError, 'an unescaped quote ends the string early');
  assert.throws(() => parseSelector('[data-x="a"'), SyntaxError);
  assert.throws(() => parseSelector('div'), SyntaxError);
});

// --- behaviour ---------------------------------------------------------------------------------------------------

test('with no filters in the address every card shows and "all" is pressed in each group', () => {
  const page = openDashboard('');

  assert.deepStrictEqual(page.shown(), ['f-1', 'f-2', 'f-3']);
  for (const type of ['milestone', 'activity', 'status', 'momentum']) assert.deepStrictEqual(page.pressed(type), ['all'], type);
  assert.strictEqual(page.byId['stat-total'].textContent, 3);
  assert.strictEqual(page.byId['stat-high'].textContent, 1);
  assert.strictEqual(page.byId['stat-consensus'].textContent, 1);
  assert.strictEqual(page.byId['stat-contested'].textContent, 1);
  assert.strictEqual(page.byId['stat-deltas'].textContent, 1);
  assert.ok(page.byId['empty-state'].hidden);
  assert.strictEqual(page.byId['filter-announcer'].textContent, '3 features match your filters.');
});

test('a filter in the address bar presses its button and narrows the cards', () => {
  const page = openDashboard('?milestone=154&status=origin-trial');

  assert.deepStrictEqual(page.pressed('milestone'), ['154']);
  assert.strictEqual(page.button('milestone', '154').attrs.get('aria-pressed'), 'true');
  assert.strictEqual(page.button('milestone', 'all').attrs.get('aria-pressed'), 'false');
  assert.deepStrictEqual(page.pressed('status'), ['origin-trial']);
  assert.deepStrictEqual(page.shown(), ['f-2']);
  assert.strictEqual(page.byId['stat-total'].textContent, 2, 'the totals follow the milestone choice only');
  assert.strictEqual(page.byId['filter-announcer'].textContent, '1 features match your filters.');
});

test('a search term from the address bar fills the box and filters the cards', () => {
  const page = openDashboard('?q=popover');

  assert.strictEqual(page.byId['search-input'].value, 'popover');
  assert.deepStrictEqual(page.shown(), ['f-3']);
});

test('a hostile value in the address bar cannot break the page: it renders instead of throwing', () => {
  // `")]` ends a quoted attribute value early, so unescaped it is not a valid selector.
  for (const hostile of ['")]', 'a"]b', '\\', "x'y", '\n', ']["', '"]; alert(1); ["']) {
    for (const type of ['milestone', 'status', 'momentum', 'activity']) {
      const page = openDashboard(`?${type}=${encodeURIComponent(hostile)}`);
      const label = `${type}=${JSON.stringify(hostile)}`;

      assert.strictEqual(page.byId['filter-announcer'].textContent, `${page.shown().length} features match your filters.`, label);
      assert.deepStrictEqual(page.pressed(type), [], `${label}: no button claims to be pressed`);
      if (type === 'activity') continue; // an unknown activity simply filters nothing
      assert.deepStrictEqual(page.shown(), [], `${label} matches no card`);
      assert.ok(!page.byId['empty-state'].hidden, `${label}: the empty state is shown`);
    }
  }
});

test('a valid value is still found when it needs escaping (a leading digit)', () => {
  // CSS.escape('154') is '\\31 54'; the selector must still reach the button for "154".
  const page = openDashboard('?milestone=155');

  assert.deepStrictEqual(page.pressed('milestone'), ['155']);
  assert.deepStrictEqual(page.shown(), ['f-3']);
});

test('clicking a filter button updates the address and the cards', () => {
  const page = openDashboard('');

  page.button('momentum', 'High').click();

  assert.deepStrictEqual(page.shown(), ['f-1']);
  assert.deepStrictEqual(page.pressed('momentum'), ['High']);
  assert.strictEqual(page.replaced.at(-1)[2], '/reports/latest.html?momentum=High');

  page.button('momentum', 'all').click();
  assert.deepStrictEqual(page.shown(), ['f-1', 'f-2', 'f-3']);
  assert.strictEqual(page.replaced.at(-1)[2], '/reports/latest.html');
});

test('the dashboard inlines this very script, so what is tested is what ships', () => {
  const html = generateDashboardHtml({ weekString: '2026-W41', milestones: [], features: [] });

  assert.ok(html.includes(CLIENT_JS));
});
