/**
 * Console logger for the CLI.
 *
 * Two behaviours matter beyond formatting:
 *
 *  - Warnings and errors go to stderr. They previously went to stdout, which
 *    meant `npm run report > report.txt` interleaved diagnostics into the
 *    captured output and, worse, a caller piping stdout to another process fed
 *    it warning text as data.
 *  - Colour is opt-out. ANSI codes were emitted unconditionally, so redirected
 *    output and CI logs were littered with escape sequences. We honour NO_COLOR
 *    (https://no-color.org), FORCE_COLOR, and TTY detection.
 */

const RAW_COLORS = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  magenta: '\x1b[35m',
  blue: '\x1b[34m',
  gray: '\x1b[90m',
};

function colorEnabled() {
  if (process.env.NO_COLOR !== undefined && process.env.NO_COLOR !== '') return false;
  if (process.env.FORCE_COLOR !== undefined && process.env.FORCE_COLOR !== '0') return true;
  return Boolean(process.stdout.isTTY);
}

function buildPalette() {
  if (colorEnabled()) return RAW_COLORS;
  return Object.fromEntries(Object.keys(RAW_COLORS).map(k => [k, '']));
}

class Logger {
  constructor() {
    this.verbose = false;
    this.c = buildPalette();
  }

  setVerbose(val) {
    this.verbose = !!val;
  }

  /** Re-evaluates colour support, e.g. after a flag sets NO_COLOR. */
  refreshPalette() {
    this.c = buildPalette();
  }

  header(title) {
    const { bold, cyan, reset } = this.c;
    const rule = '══════════════════════════════════════════════════════════════';
    console.log(`\n${bold}${cyan}${rule}${reset}`);
    console.log(`${bold}${cyan}  ${title}${reset}`);
    console.log(`${bold}${cyan}${rule}${reset}\n`);
  }

  info(msg) {
    console.log(`${this.c.blue}ℹ${this.c.reset} ${msg}`);
  }

  success(msg) {
    console.log(`${this.c.green}✔${this.c.reset} ${msg}`);
  }

  warn(msg) {
    console.error(`${this.c.yellow}⚠${this.c.reset} ${msg}`);
  }

  error(msg) {
    console.error(`${this.c.red}✖${this.c.reset} ${msg}`);
  }

  step(index, total, title, id, status) {
    const { bold, cyan, dim, reset } = this.c;
    const statusStr = status ? ` ${dim}(${status})${reset}` : '';
    console.log(`\n${bold}[${index}/${total}] 🔎 ${cyan}${title}${reset} ${dim}#${id}${reset}${statusStr}`);
  }

  substep(action, detail) {
    const { dim, bold, reset } = this.c;
    console.log(`  ${dim}→${reset} ${bold}${action}:${reset} ${detail}`);
  }

  debug(msg) {
    if (this.verbose) {
      console.log(`    ${this.c.gray}⚙ ${msg}${this.c.reset}`);
    }
  }

  audit(category, passed, total, detail) {
    if (this.verbose || passed > 0) {
      const { green, gray, dim, reset } = this.c;
      const icon = passed > 0 ? `${green}✔${reset}` : `${gray}○${reset}`;
      const suffix = detail ? `${dim}(${detail})${reset}` : '';
      console.log(`    ${icon} ${dim}${category}:${reset} ${passed}/${total} verified ${suffix}`);
    }
  }
}

export const logger = new Logger();
