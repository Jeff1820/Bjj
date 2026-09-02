/* Build the www/ bundle for native (App Store / Play Store / sideload) builds.
 * Same files as the web app, plus the teaser gate override: stores reject
 * hard email walls, so native builds give the first half of the white belt
 * free and ask for an email (optional consent) to unlock the rest. */
const { execSync } = require("child_process");
const fs = require("fs");

execSync("npm run build", { stdio: "inherit", cwd: __dirname + "/.." });

const indexPath = __dirname + "/../www/index.html";
let html = fs.readFileSync(indexPath, "utf8");
html = html.replace(
  '<script src="data.js"></script>',
  '<script>var GATE_MODE_OVERRIDE = "teaser"; // store-build behavior</script>\n  <script src="data.js"></script>'
);
fs.writeFileSync(indexPath, html);
console.log("store www/ built (teaser gate)");
