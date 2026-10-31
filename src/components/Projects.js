export function renderProjects(projects) {
  const cardsHtml = projects
    .map((project) => {
      const topActionHtml = project.repoUrl
        ? `
          <a
            href="${project.repoUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="text-zinc-400 hover:text-emerald-500 transition-colors"
            aria-label="View ${project.title} on GitHub"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>
        `
        : `<span class="text-xs text-zinc-500 font-mono">${project.badgeRight || ""}</span>`;

      const tagsHtml = project.tags
        .map((tag) => `<span class="glass-pill px-2 py-0.5 rounded">${tag}</span>`)
        .join("\n");

      const bottomActionHtml = project.repoUrl
        ? `
          <a
            href="${project.repoUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 hover:underline font-mono font-medium"
          >
            <span>${project.ctaLabel}</span>
            <span aria-hidden="true">→</span>
          </a>
        `
        : `
          <span class="inline-flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
            <span>${project.ctaLabel}</span>
          </span>
        `;

      return `
        <article
          class="glass-card p-6 rounded-xl flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 group"
        >
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span
                class="text-xs text-emerald-600 dark:text-emerald-400 font-mono font-semibold"
              >[${project.id}] ${project.badge}</span>
              ${topActionHtml}
            </div>
            <h3
              class="text-base font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors"
            >
              ${project.title}
            </h3>
            <p
              class="text-xs text-zinc-600 dark:text-zinc-300 mt-2 leading-relaxed"
            >
              ${project.description}
            </p>
          </div>
          <div
            class="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800/80"
          >
            <div
              class="flex flex-wrap gap-1.5 mb-3 text-[10px] text-zinc-600 dark:text-zinc-400"
            >
              ${tagsHtml}
            </div>
            ${bottomActionHtml}
          </div>
        </article>
      `;
    })
    .join("\n");

  return `
    <section id="projects" class="mb-16 scroll-mt-24" aria-labelledby="section-projects-title">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h2
            id="section-projects-title"
            class="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2"
          >
            <span class="text-emerald-500 dark:text-emerald-400 font-bold" aria-hidden="true">&gt;</span>
            featured projects
          </h2>
          <p
            class="text-xs text-zinc-500 dark:text-zinc-400 lowercase tracking-wider mt-1"
          >
            open-source repositories & production platforms
          </p>
        </div>
        <a
          href="https://github.com/Bentheghost"
          target="_blank"
          rel="noopener noreferrer"
          class="text-xs text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 flex items-center gap-1 font-mono group"
        >
          <span>view github</span>
          <span class="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        ${cardsHtml}
      </div>
    </section>
  `;
}
