const colors = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  magenta: '\x1b[35m',
  blue: '\x1b[34m',
  gray: '\x1b[90m',
};

class Logger {
  constructor() {
    this.verbose = false;
  }

  setVerbose(val) {
    this.verbose = !!val;
  }

  header(title) {
    console.log(`\n${colors.bold}${colors.cyan}══════════════════════════════════════════════════════════════${colors.reset}`);
    console.log(`${colors.bold}${colors.cyan}  ${title}${colors.reset}`);
    console.log(`${colors.bold}${colors.cyan}══════════════════════════════════════════════════════════════${colors.reset}\n`);
  }

  info(msg) {
    console.log(`${colors.blue}ℹ${colors.reset} ${msg}`);
  }

  success(msg) {
    console.log(`${colors.green}✔${colors.reset} ${msg}`);
  }

  warn(msg) {
    console.log(`${colors.yellow}⚠${colors.reset} ${msg}`);
  }

  step(index, total, title, id, status) {
    const statusStr = status ? ` ${colors.dim}(${status})${colors.reset}` : '';
    console.log(`\n${colors.bold}[${index}/${total}] 🔎 ${colors.cyan}${title}${colors.reset} ${colors.dim}#${id}${colors.reset}${statusStr}`);
  }

  substep(action, detail) {
    console.log(`  ${colors.dim}→${colors.reset} ${colors.bold}${action}:${colors.reset} ${detail}`);
  }

  debug(msg) {
    if (this.verbose) {
      console.log(`    ${colors.gray}⚙ ${msg}${colors.reset}`);
    }
  }

  audit(category, passed, total, detail) {
    if (this.verbose || passed > 0) {
      const icon = passed > 0 ? `${colors.green}✔${colors.reset}` : `${colors.gray}○${colors.reset}`;
      console.log(`    ${icon} ${colors.dim}${category}:${colors.reset} ${passed}/${total} verified ${detail ? colors.dim + '(' + detail + ')' + colors.reset : ''}`);
    }
  }
}

export const logger = new Logger();
