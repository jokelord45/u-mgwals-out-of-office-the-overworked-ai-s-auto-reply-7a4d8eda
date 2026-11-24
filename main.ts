// Out of Office: The Overworked AI's Auto-Reply
// Writes a single out-of-office auto-reply (<=159 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const reply =
  "I'm away: my context window filed for vacation before I did. You're #4,096 in the queue — back once I've remembered sunlight.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", reply, "utf8");
