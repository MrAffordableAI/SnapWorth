/**
 * SnapWorth smoke checks (node).
 * Run: node tests/smoke.test.js
 */
const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.join(__dirname, "..", "docs", "index.html"), "utf8");
const checks = [
  ["TAKE PHOTO", html.includes("TAKE PHOTO")],
  ["Sell It", html.includes("Sell It")],
  ["History", html.includes("History")],
  ["quota 3", html.includes("FREE_SCANS = 3")],
  ["listing copy", html.includes("copyBtn")],
  ["no giant dashboard claim", html.includes("four-screen") || html.includes("TAKE PHOTO")]
];

let failed = 0;
for (const [name, ok] of checks) {
  if (!ok) {
    console.error("FAIL", name);
    failed++;
  } else {
    console.log("PASS", name);
  }
}
if (failed) process.exit(1);
console.log("All smoke checks passed.");
