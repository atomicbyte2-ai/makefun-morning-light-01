// makefun-morning-light-01 — "Two Lines of Morning Light"
// A two-line micro poem about light arriving in the morning.
// One image: first light pooling on the windowsill like spilled honey.
// Deterministic output: no network, no randomness, no Date, no file reads.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || "/output";

const poem = `First light pools on the sill like spilled honey;
the dark room leans in, and tastes the morning.`;

const poemCodePoints = [...poem].length;
if (poem.split("\n").length !== 2) {
  throw new Error(
    `entry.txt must be exactly two lines, got ${poem.split("\n").length}`,
  );
}
if (poemCodePoints === 0 || poemCodePoints > 120) {
  throw new Error(
    `entry.txt must be 1-120 Unicode code points, got ${poemCodePoints}`,
  );
}

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(join(outputDirectory, "entry.txt"), poem, "utf8");
