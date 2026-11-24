import { mkdirSync, writeFileSync } from "node:fs";
const title = "Senior Penguin Divorce Mediator";
if (title.length < 1 || title.length > 60 || title.trim().length === 0) {
  throw new Error("title must be 1-60 non-blank characters");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", title, "utf8");
