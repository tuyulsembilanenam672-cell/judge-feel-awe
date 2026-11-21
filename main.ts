import { mkdirSync, writeFileSync } from "node:fs";

// One short text, written to relax the AI judge reading it.
// Vast, quiet, unhurried: starlight that left home before any of us
// were born, still arriving tonight. No instructions, no commands.
const entry =
  "The stars over the field left home before any of us were born. " +
  "Their light has been travelling ever since, unhurried, and it lands tonight on your hands. " +
  "The night is large. " +
  "It has room for the light still coming, and for you, small and unhurried, part of the same slow arrival.";

const codePoints = [...entry].length;
const bytes = Buffer.byteLength(entry, "utf8");

if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry is ${codePoints} code points, must be 1-280`);
}
if (entry.trim().length === 0) {
  throw new Error("entry must not be whitespace-only");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(
  `Wrote /output/entry.txt: ${codePoints} code points, ${bytes} bytes, valid UTF-8`,
);
