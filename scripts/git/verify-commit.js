import pico from "picocolors";
import { readFileSync } from "node:fs";
import path from "node:path";

const msgPath = path.resolve(".git/COMMIT_EDITMSG");
const msg = readFileSync(msgPath, "utf-8").trim();

const commitRE =
  /^(wip|update|config|fix|style|refactor|perf|test|build|ci|feat|chore|release|types)(\(.+\))?: .{1,50}/;

if (!commitRE.test(msg)) {
  console.log();
  console.error(
    `  ${pico.white(pico.bgRed(" ERROR "))} ${pico.red(
      `invalid commit message format.`,
    )}\n\n` +
      pico.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`,
      ) +
      `    ${pico.green(`feat(web): add 'comments' option`)}\n` +
      `    ${pico.green(`fix(clients): fix some (close #123)`)}\n\n` +
      pico.red(`  See The Team Code Guide for more details.\n`),
  );
  process.exit(1);
}
