export function renderCallToAction(cta) {
  return `
    <section class="mb-16" aria-label="Action triggers">
      <div class="flex items-center gap-2 mb-4">
        <span
          class="inline-block w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"
          aria-hidden="true"
        ></span>
        <span
          class="text-zinc-900 dark:text-white text-sm font-semibold tracking-wide"
        >
          ${cta.statusBadge}
        </span>
      </div>

      <div class="flex flex-wrap items-center gap-3">
        <a
          href="${cta.primaryButton.href}"
          class="group inline-flex items-center gap-3 px-6 py-3.5 bg-white dark:bg-zinc-900 border border-emerald-500/50 hover:border-emerald-400 hover:bg-emerald-500/10 text-zinc-900 dark:text-white font-mono text-xs uppercase tracking-widest rounded-lg transition-all duration-300 terminal-glow shadow-sm"
        >
          <span
            class="text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform font-bold"
            aria-hidden="true"
          >&gt;&gt;</span>
          <span>${cta.primaryButton.label}</span>
          <svg
            class="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:translate-y-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>

        <a
          href="${cta.resumeButton.href}"
          download="${cta.resumeButton.downloadName}"
          class="group inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/50 hover:bg-emerald-500 hover:text-black text-emerald-700 dark:text-emerald-400 font-mono text-xs uppercase tracking-widest rounded-lg transition-all duration-300"
        >
          <svg
            class="w-4 h-4 transition-transform group-hover:translate-y-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span>${cta.resumeButton.label}</span>
        </a>
      </div>
    </section>
  `;
}
