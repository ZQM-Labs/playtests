import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, "..");

test("playtest protocol markdown exists and has required sections", () => {
  const protocolPath = join(repoRoot, "protocols", "playtest-protocol.md");
  const content = readFileSync(protocolPath, "utf-8");
  
  // Must have a title
  assert.ok(content.startsWith("#"), "Protocol must start with a heading");
  
  // Must have required sections
  assert.ok(content.includes("## Objective"), "Missing Objective section");
  assert.ok(content.includes("## Setup"), "Missing Setup section");
  assert.ok(content.includes("## Procedure"), "Missing Procedure section");
  assert.ok(content.includes("## Results"), "Missing Results section");
});

test("mkdocs.yml is valid YAML with required fields", () => {
  const yaml = readFileSync(join(repoRoot, "mkdocs.yml"), "utf-8");
  assert.ok(yaml.includes("site_name:"), "Missing site_name");
  assert.ok(yaml.includes("nav:"), "Missing nav section");
});
