export function renderAbout(about) {
  const paragraphsHtml = about.paragraphs
    .map((p) => `<p>${p}</p>`)
    .join("\n");

  const highlightsHtml = about.impactHighlights
    .map(
      (item) => `
        <li class="flex items-start gap-2">
          <span class="text-emerald-500 dark:text-emerald-400" aria-hidden="true">▹</span>
          <span><strong class="text-zinc-900 dark:text-white">${item.title}:</strong> ${item.description}</span>
        </li>
      `
    )
    .join("\n");

  return `
    <section class="mb-16 space-y-6" aria-labelledby="section-about-title">
      <div>
        <h2
          id="section-about-title"
          class="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2"
        >
          <span class="text-emerald-500 dark:text-emerald-400 font-bold" aria-hidden="true">&gt;</span>
          ${about.heading}
        </h2>
        <p
          class="text-xs text-zinc-500 dark:text-zinc-400 lowercase tracking-wider mt-1"
        >
          ${about.subheading}
        </p>
      </div>

      <div
        class="space-y-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 font-light"
      >
        ${paragraphsHtml}

        <div
          class="glass-card p-5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 my-4 space-y-3"
        >
          <div
            class="text-xs font-semibold uppercase text-emerald-600 dark:text-emerald-400 tracking-wider flex items-center gap-2"
          >
            <span aria-hidden="true">⚡</span>
            <span>Key Impact & Deployment Metrics</span>
          </div>
          <ul class="space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
            ${highlightsHtml}
          </ul>
        </div>

        <p class="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm">
          ${about.closingBio}
        </p>
      </div>
    </section>
  `;
}
