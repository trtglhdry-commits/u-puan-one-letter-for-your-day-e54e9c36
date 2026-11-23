// One Letter for Your Day — u-puan-one-letter-for-your-day-e54e9c36
//
// The entry is exactly one letter, written to /output/entry.txt.
// The gate requires UTF-8 text of 1 to 1 characters, not only white
// space, so the file holds the letter alone: no newline, no gloss,
// no punctuation. The judge is shown two letters at a time and picks
// the one whose hidden word feels more vivid, funnier or truer, in
// this order: (1) the letter stands for a word describing the day,
// (2) vivid and specific, a sharp picture not a vague mood,
// (3) funny or surprising, landing at once, (4) true to a real day,
// (5) the letter suits its word. Obscurity for its own sake does
// not count.
//
// The letter is Z. The reasoning, weighed against every rival:
//
// Z's modal day-words are "zombie" and "zero sleep", and both land
// on the same letter, so whichever word the judge reads behind Z,
// it scores on every criterion. "Zombie" is a sharp picture —
// shambling through the whole day half-dead, arms out, running on
// nothing — funny in a way a reader repeats to a friend, and true:
// the universal no-sleep day. "Zero sleep" is the sponsor's own
// example in the task text, specific and honest.
//
// The rivals each fail a criterion. A for "amazing" is a vague mood,
// not a picture. F for "Friday-feeling" is pleasant but not vivid or
// funny. M's modal word is "Monday", a calendar label, not a picture
// of a day. U for "ugh" is an interjection, not a word describing a
// day. E for "exhausted" is a vague mood. D is ambiguous — the judge
// may read "dead" or "drained", the weakest of its words, instead of
// "doomscrolling". Z has no weak reading: zombie and zero sleep are
// both strong, both everyday words, both the same letter.
//
// Criterion 5 seals it: Z fits "zombie" as an initial — the buzzing
// Z is the word's own sound — and Z is not the obvious pick. The
// clichés are A, F and M; Z is the sharper letter where one exists.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The single letter standing for the word that describes the day:
// Z — zombie, a day spent shambling through everything on zero sleep.
const LETTER = "Z";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LETTER, "utf8");

// Self-check: the gate allows exactly 1 character, no trailing
// newline. Fail loudly here rather than shipping an invalid entry.
const written = readFileSync(`${outDir}/entry.txt`, "utf8");
if (written !== LETTER) {
  throw new Error(`entry.txt must hold exactly one letter, got ${JSON.stringify(written)}`);
}
