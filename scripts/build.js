import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

import { portfolioData } from "../src/data/portfolioData.js";
import { renderMatrixIntro } from "../src/components/MatrixIntro.js";
import { renderHeader } from "../src/components/Header.js";
import { renderAbout } from "../src/components/About.js";
import { renderCallToAction } from "../src/components/CallToAction.js";
import { renderExperience } from "../src/components/Experience.js";
import { renderProjects } from "../src/components/Projects.js";
import { renderRoles } from "../src/components/Roles.js";
import { renderTechStack } from "../src/components/TechStack.js";
import { renderMedia } from "../src/components/Media.js";
import { renderEducation } from "../src/components/Education.js";
import { renderSocials } from "../src/components/Socials.js";
import { renderFooter } from "../src/components/Footer.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function generateHtml() {
  const { meta, personal, about, cta, experiences, projects, roles, techStack, media, education, socials, footer } = portfolioData;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personal.fullName,
    "alternateName": [personal.name, "Bentheghost"],
    "jobTitle": "Full-Stack Engineer & AI Systems Builder",
    "url": meta.url,
    "image": `${meta.url}/${personal.avatar}`,
    "sameAs": [
      "https://github.com/Bentheghost",
      "https://www.youtube.com/@TechUntold-btg",
      "https://x.com/Topboy_benji"
    ],
    "knowsAbout": [
      "Full-Stack Development",
      "React",
      "Next.js",
      "Python",
      "Bayesian Knowledge Tracing",
      "Reinforcement Learning",
      "PostgreSQL",
      "Redis",
      "Low-Bandwidth Architecture",
      "Network Benchmarking"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Federal University of Technology, Minna"
    }
  };

  return `<!doctype html>
<html lang="en" class="dark scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <meta name="theme-color" content="${meta.themeColor}" />

    <link rel="icon" type="image/png" sizes="64x64" href="favicon.png" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <link rel="apple-touch-icon" href="favicon.png" />

    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="Building production-ready full-stack applications and AI pipelines engineered for real-world constraints." />
    <meta property="og:image" content="${meta.ogImage}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${meta.url}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="${meta.twitterHandle}" />
    <meta name="twitter:creator" content="${meta.twitterHandle}" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <meta name="twitter:image" content="${meta.ogImage}" />

    <script type="application/ld+json">
      ${JSON.stringify(jsonLd, null, 2)}
    </script>

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700;800&display=swap"
      rel="stylesheet"
    />

    <script>
      (function() {
        try {
          if (localStorage.theme === "light") {
            document.documentElement.classList.remove("dark");
          } else {
            document.documentElement.classList.add("dark");
          }
        } catch (e) {
          document.documentElement.classList.add("dark");
        }
      })();
    </script>

    <link rel="stylesheet" href="style.css" />
  </head>

  <body
    class="bg-slate-50 text-zinc-800 dark:bg-background dark:text-gray-200 font-mono antialiased selection:bg-emerald-500 selection:text-black min-h-screen transition-colors duration-300"
  >
    ${renderMatrixIntro()}

    <div
      class="fixed top-0 left-0 right-0 h-28 bg-gradient-to-b from-slate-200/50 via-slate-100/20 to-transparent dark:from-black dark:via-black/80 dark:to-transparent pointer-events-none z-30 transition-all duration-300"
      aria-hidden="true"
    ></div>
    <div
      class="fixed bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-slate-200/50 via-slate-100/20 to-transparent dark:from-black dark:via-black/80 dark:to-transparent pointer-events-none z-30 transition-all duration-300"
      aria-hidden="true"
    ></div>

    <main
      id="portfolio-main"
      class="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-20 lg:py-24 transition-opacity duration-1000 opacity-0"
    >
      ${renderHeader(personal)}
      ${renderAbout(about)}
      ${renderCallToAction(cta)}
      ${renderExperience(experiences)}
      ${renderProjects(projects)}
      ${renderRoles(roles)}
      ${renderTechStack(techStack)}
      ${renderMedia(media)}
      ${renderEducation(education)}
      ${renderSocials(socials)}
      ${renderFooter(footer)}
    </main>

    <script src="src/scripts/matrix.js" defer></script>
    <script src="src/scripts/theme.js" defer></script>
    <script src="src/scripts/telemetry.js" defer></script>
  </body>
</html>`;
}

const outputPath = resolve(__dirname, "../index.html");
writeFileSync(outputPath, generateHtml(), "utf-8");
console.log(`Built index.html (${outputPath})`);
