import fs from 'node:fs/promises';
import { randomUUID } from 'node:crypto';

/**
 * Writes `data` to `target` so that a concurrent reader - or a crash half way
 * through - can only ever observe the previous complete file or the new
 * complete file, never a truncated one.
 *
 * The temporary file lives next to the target (rename is only atomic within one
 * filesystem) and has a name of its own, so that neither another process nor an
 * overlapping write in this one can share it: two writers on one temp file would
 * interleave their bytes, and the second rename would find nothing to move.
 * Failures are propagated: callers decide whether a failed write is fatal.
 */
export async function writeFileAtomic(target, data) {
  const tmp = `${target}.${process.pid}.${randomUUID()}.tmp`;
  try {
    await fs.writeFile(tmp, data, 'utf-8');
    await fs.rename(tmp, target);
  } catch (err) {
    // Do not leave a stray partial file behind for `git add` to pick up.
    await fs.rm(tmp, { force: true }).catch(() => {});
    throw err;
  }
}
