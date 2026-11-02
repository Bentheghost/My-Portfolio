import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const cssPath = resolve(__dirname, "../style.css");

try {
  let css = readFileSync(cssPath, "utf-8");

  // Pair vendor-prefixed appearance properties with their standard counterparts
  css = css.replace(
    "-webkit-appearance:button;",
    "-webkit-appearance:button;appearance:button;"
  );
  css = css.replace(
    "-webkit-appearance:textfield;",
    "-webkit-appearance:textfield;appearance:textfield;"
  );

  // Remove redundant vertical-align on display:block rules
  css = css.replace(
    "display:block;vertical-align:middle",
    "display:block"
  );

  writeFileSync(cssPath, css, "utf-8");
} catch (err) {
  // Fail-soft if style.css does not exist yet
}
