"use strict";
// Protocol content tests — assert the protocol's ACTUAL sections and its
// pass criteria, plus the results-template/report structure.
// Run with: npm test   (node --test tests/)
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync, readdirSync } = require("node:fs");
const { join } = require("node:path");

const repoRoot = join(__dirname, "..");
const protocol = readFileSync(
  join(repoRoot, "protocols", "playtest-protocol.md"),
  "utf-8"
);

test("playtest protocol has its actual sections", () => {
  assert.ok(protocol.startsWith("#"), "Protocol must start with a heading");
  for (const section of [
    "## Roles",
    "## Run-of-show",
    "## Timing sheet",
    "## What to observe",
    "## Pass criteria",
  ]) {
    assert.ok(protocol.includes(section), `Missing section: ${section}`);
  }
});

test("playtest protocol states the key pass criteria", () => {
  // The four pass criteria from protocols/playtest-protocol.md:
  assert.ok(
    protocol.includes("All 6 QRs scan in ≤2 seconds"),
    "Pass criteria must include the 2-second QR scan rule"
  );
  assert.ok(
    protocol.includes("without the Ranger assist"),
    "Pass criteria must require a hint-free solve path per stop"
  );
  assert.ok(
    protocol.includes("Total runtime 30–60 minutes"),
    "Pass criteria must bound total runtime to 30-60 minutes"
  );
  assert.ok(
    protocol.includes("that was fun"),
    "Pass criteria must include the debrief delight check"
  );
  // And the observation rule the criteria rest on:
  assert.ok(
    protocol.includes("Fix placement, not the QR"),
    "Protocol must keep the scan-failure observation rule"
  );
});

test("results template and filed reports keep the report structure", () => {
  const template = readFileSync(
    join(repoRoot, "results", "_template.md"),
    "utf-8"
  );
  for (const section of ["## Session", "## Results", "## Verdict"]) {
    assert.ok(
      template.includes(section),
      `Template missing section: ${section}`
    );
  }
  const reports = readdirSync(join(repoRoot, "results")).filter(
    (f) => f.endsWith(".md") && f !== "_template.md"
  );
  assert.ok(reports.length > 0, "At least one filed report must exist");
  for (const name of reports) {
    const body = readFileSync(join(repoRoot, "results", name), "utf-8");
    for (const section of ["## Session", "## Results", "## Verdict"]) {
      assert.ok(
        body.includes(section),
        `${name} missing section: ${section}`
      );
    }
    assert.ok(
      body.includes("Fixes required"),
      `${name} must carry a fixes list or verdict detail`
    );
  }
});

test("mkdocs.yml is valid YAML with required fields", () => {
  const yaml = readFileSync(join(repoRoot, "mkdocs.yml"), "utf-8");
  assert.ok(yaml.includes("site_name:"), "Missing site_name");
  assert.ok(yaml.includes("nav:"), "Missing nav section");
});
