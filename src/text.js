/**
 * Text helpers for the layers that read words written by third parties: the page
 * title taken from a fetched page (src/search/content-fetcher.js) and every
 * line of evidence put in front of a model (src/search/verifier.js).
 */

/**
 * Control characters (C0 and C1, which includes the NEL line break; not tab, line
 * feed or carriage return, which white-space handling deals with) and invisible
 * formatting characters: the zero-width space, the left-to-right and right-to-left
 * marks, the Arabic letter mark, the bidi embeddings, overrides and isolates, the
 * word joiner and the invisible operators after it, and the byte order mark. They
 * can hide a directive from whoever reviews a prompt, or make a title read
 * differently from how it is stored.
 *
 * The joiners U+200C and U+200D stay out of it: scripts and emoji sequences need them.
 */
const INVISIBLE_CHARACTERS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F\u061C\u200B\u200E\u200F\u202A-\u202E\u2060-\u2064\u2066-\u2069\uFEFF]/g;

/** `text` without the control and invisible formatting characters named above. */
export function stripInvisibleCharacters(text) {
  return String(text).replace(INVISIBLE_CHARACTERS, '');
}
