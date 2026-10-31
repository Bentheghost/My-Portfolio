export function renderExperience(experiences) {
  const itemsHtml = experiences
    .map((item) => {
      const dotClass = item.isCurrent
        ? "bg-emerald-500 ring-4 ring-slate-50 dark:ring-background group-hover:scale-125"
        : "bg-zinc-400 dark:bg-zinc-600 ring-4 ring-slate-50 dark:ring-background group-hover:bg-emerald-500";

      const titleContent = item.url
        ? `
          <a
            href="${item.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex items-center gap-2"
          >
            <span>${item.company}</span>
            <svg
              class="w-4 h-4 text-zinc-400 group-hover:text-emerald-500 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        `
        : `<span>${item.company}</span>`;

      return `
        <article class="relative group">
          <div
            class="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full ${dotClass} transition-all duration-300"
            aria-hidden="true"
          ></div>
          <div
            class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1"
          >
            <h3
              class="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors"
            >
              ${titleContent}
            </h3>
            <span class="text-xs text-zinc-500 font-mono">(${item.period})</span>
          </div>
          <p
            class="text-xs text-emerald-600 dark:text-emerald-400 font-mono mt-1"
          >
            ${item.role}
          </p>
          <p
            class="text-sm text-zinc-700 dark:text-zinc-300 font-light mt-3 leading-relaxed"
          >
            ${item.description}
          </p>
        </article>
      `;
    })
    .join("\n");

  return `
    <section class="mb-16" aria-labelledby="section-experience-title">
      <h2
        id="section-experience-title"
        class="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2 mb-8"
      >
        <span class="text-emerald-500 dark:text-emerald-400 font-bold" aria-hidden="true">&gt;</span>
        work experience
      </h2>

      <div
        class="space-y-10 border-l border-zinc-300 dark:border-zinc-800 ml-3 pl-6"
      >
        ${itemsHtml}
      </div>
    </section>
  `;
}
