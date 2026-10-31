export function renderTechStack(categories) {
  const categoriesHtml = categories
    .map((cat) => {
      const itemsHtml = cat.items
        .map((item) => {
          if (typeof item === "object" && item.highlight) {
            return `<span class="glass-pill px-3 py-1 rounded-md text-emerald-700 dark:text-emerald-300 border-emerald-500/20">${item.name}</span>`;
          }
          const name = typeof item === "object" ? item.name : item;
          return `<span class="glass-pill px-3 py-1 rounded-md text-zinc-800 dark:text-zinc-200">${name}</span>`;
        })
        .join("\n");

      return `
        <div class="glass-card p-4 rounded-xl">
          <h3
            class="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono font-semibold uppercase tracking-wider block mb-2.5"
          >
            // ${cat.category}
          </h3>
          <div class="flex flex-wrap gap-2 text-xs">
            ${itemsHtml}
          </div>
        </div>
      `;
    })
    .join("\n");

  return `
    <section class="mb-16" aria-labelledby="section-tech-title">
      <h2
        id="section-tech-title"
        class="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2 mb-6"
      >
        <span class="text-emerald-500 dark:text-emerald-400 font-bold" aria-hidden="true">&gt;</span>
        tech stack & tooling
      </h2>

      <div class="space-y-4">
        ${categoriesHtml}
      </div>
    </section>
  `;
}
