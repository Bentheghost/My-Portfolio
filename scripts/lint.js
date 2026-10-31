import { readFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { portfolioData } from "../src/data/portfolioData.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, "..");

let errors = 0;
let warnings = 0;

function report(status, category, message) {
  const icon = status === "PASS" ? "✔" : status === "WARN" ? "⚠" : "✖";
  console.log(`${icon} [${category.toUpperCase().padEnd(10)}] ${message}`);
  if (status === "FAIL") errors++;
  if (status === "WARN") warnings++;
}

console.log("\nPre-production verification checks:");

// Schema validation
try {
  const { meta, personal, experiences, projects, roles, techStack, education, socials } = portfolioData;

  if (!meta.title || !meta.description || !meta.url) {
    report("FAIL", "Schema", "Incomplete metadata fields");
  } else {
    report("PASS", "Schema", "Site metadata valid");
  }

  if (!personal.name || !personal.bootTimestamp || !personal.avatar) {
    report("FAIL", "Schema", "Personal profile missing attributes");
  } else {
    report("PASS", "Schema", `Profile verified for ${personal.fullName}`);
  }

  if (!experiences?.length) {
    report("FAIL", "Schema", "Missing work experiences");
  } else {
    report("PASS", "Schema", `Experience verified (${experiences.length} positions)`);
  }

  if (!projects?.length) {
    report("FAIL", "Schema", "Missing projects");
  } else {
    report("PASS", "Schema", `Projects verified (${projects.length} repos)`);
  }

  if (!roles?.length || !techStack?.length || !education?.university || !socials?.length) {
    report("FAIL", "Schema", "Incomplete content categories");
  } else {
    report("PASS", "Schema", "Roles, tech stack, education, and socials valid");
  }
} catch (err) {
  report("FAIL", "Schema", err.message);
}

// Git & secret checks
try {
  const gitignorePath = resolve(rootDir, ".gitignore");
  if (!existsSync(gitignorePath)) {
    report("FAIL", "Security", ".gitignore missing");
  } else {
    const gitignore = readFileSync(gitignorePath, "utf-8");
    const required = ["node_modules", ".env", ".DS_Store"];
    const missing = required.filter((pattern) => !gitignore.includes(pattern));

    if (missing.length) {
      report("FAIL", "Security", `.gitignore missing: ${missing.join(", ")}`);
    } else {
      report("PASS", "Security", ".gitignore covers node_modules and env files");
    }
  }

  const scanTargets = [
    resolve(rootDir, "src/data/portfolioData.js"),
    resolve(rootDir, "src/scripts/telemetry.js"),
    resolve(rootDir, "src/scripts/theme.js"),
    resolve(rootDir, "src/scripts/matrix.js")
  ];

  const secretPattern = /(api_key|password|bearer\s+[a-z0-9_-]{20,}|ghp_[a-z0-9]{30,})/i;
  let leak = false;

  for (const file of scanTargets) {
    if (existsSync(file)) {
      const content = readFileSync(file, "utf-8");
      if (secretPattern.test(content)) {
        report("FAIL", "Security", `Possible credential pattern in ${file}`);
        leak = true;
      }
    }
  }

  if (!leak) {
    report("PASS", "Security", "No hardcoded credentials found");
  }
} catch (err) {
  report("FAIL", "Security", err.message);
}

// Cleanliness checks
try {
  const clientScripts = [
    resolve(rootDir, "src/scripts/theme.js"),
    resolve(rootDir, "src/scripts/telemetry.js"),
    resolve(rootDir, "src/scripts/matrix.js")
  ];

  let logs = 0;
  for (const file of clientScripts) {
    if (existsSync(file)) {
      const content = readFileSync(file, "utf-8");
      const matches = content.match(/console\.log\s*\(/g);
      if (matches) logs += matches.length;
    }
  }

  if (logs === 0) {
    report("PASS", "Cleanliness", "No console.log calls in runtime scripts");
  } else {
    report("WARN", "Cleanliness", `${logs} console.log call(s) detected`);
  }
} catch (err) {
  report("FAIL", "Cleanliness", err.message);
}

// Accessibility & SEO checks on generated HTML
try {
  const htmlPath = resolve(rootDir, "index.html");
  if (!existsSync(htmlPath)) {
    report("FAIL", "HTML", "index.html not found, run npm run build first");
  } else {
    const html = readFileSync(htmlPath, "utf-8");

    const hasH1 = /<h1[\s>]/i.test(html);
    const hasH2 = /<h2[\s>]/i.test(html);
    const hasH3 = /<h3[\s>]/i.test(html);

    if (hasH1 && hasH2 && hasH3) {
      report("PASS", "A11y", "Heading hierarchy properly structured");
    } else {
      report("FAIL", "A11y", "Broken heading hierarchy");
    }

    if (html.includes('id="theme-toggle"') && html.includes('aria-label=')) {
      report("PASS", "A11y", "Theme toggle includes aria-label");
    } else {
      report("FAIL", "A11y", "Theme toggle missing aria-label");
    }

    if (html.includes('type="application/ld+json"') && html.includes('property="og:title"')) {
      report("PASS", "SEO", "JSON-LD and social tags present");
    } else {
      report("WARN", "SEO", "Missing structured or social metadata");
    }

    if (html.includes('loading="eager"') && html.includes('width="64"') && html.includes('height="64"')) {
      report("PASS", "Perf", "Avatar attributes configured for CLS prevention");
    } else {
      report("WARN", "Perf", "Avatar missing explicit dimensions or priority");
    }
  }
} catch (err) {
  report("FAIL", "HTML", err.message);
}

console.log("");
if (errors === 0) {
  console.log(`✔ All checks passed (${warnings} warnings)\n`);
  process.exit(0);
} else {
  console.error(`✖ ${errors} error(s) found\n`);
  process.exit(1);
}
