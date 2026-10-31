export function renderMedia(media) {
  return `
    <section class="mb-16" aria-labelledby="section-media-title">
      <h2
        id="section-media-title"
        class="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2 mb-6"
      >
        <span class="text-emerald-500 dark:text-emerald-400 font-bold" aria-hidden="true">&gt;</span>
        media & documentaries
      </h2>

      <article
        class="glass-card p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
      >
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <svg
              class="w-5 h-5 text-red-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884L21.9991 11.9991L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991L11.9991 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z"
              />
            </svg>
            <h3 class="text-base font-bold text-zinc-900 dark:text-white">
              ${media.channelName}
            </h3>
            <span class="text-xs text-zinc-500 font-mono">${media.handle}</span>
          </div>
          <p
            class="text-xs text-zinc-600 dark:text-zinc-300 max-w-lg leading-relaxed"
          >
            ${media.description}
          </p>
        </div>

        <a
          href="${media.url}"
          target="_blank"
          rel="noopener noreferrer"
          class="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600/10 border border-red-500/30 hover:bg-red-600 hover:text-white text-red-500 dark:text-red-400 text-xs font-mono transition-all duration-300"
        >
          <span>watch on youtube</span>
          <span aria-hidden="true">→</span>
        </a>
      </article>
    </section>
  `;
}
