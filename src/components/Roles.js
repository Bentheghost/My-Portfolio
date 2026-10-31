export function renderRoles(roles) {
  const cardsHtml = roles
    .map(
      (role) => `
        <article
          class="glass-card p-5 rounded-xl group hover:border-emerald-500/40 transition-all duration-300"
        >
          <h3
            class="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors mb-1"
          >
            ${role.title}
          </h3>
          <p class="text-xs text-zinc-600 dark:text-zinc-400">
            ${role.stack}
          </p>
        </article>
      `
    )
    .join("\n");

  return `
    <section class="mb-16" aria-labelledby="section-roles-title">
      <h2
        id="section-roles-title"
        class="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2 mb-6"
      >
        <span class="text-emerald-500 dark:text-emerald-400 font-bold" aria-hidden="true">&gt;</span>
        open to roles
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${cardsHtml}
      </div>
    </section>
  `;
}
