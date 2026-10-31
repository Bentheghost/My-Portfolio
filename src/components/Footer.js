export function renderFooter(footer) {
  return `
    <footer
      class="pt-8 pb-12 border-t border-zinc-200/80 dark:border-zinc-800/80 text-center"
      role="contentinfo"
    >
      <p class="text-xs text-zinc-500 font-mono tracking-wider lowercase">
        ${footer.signature}
        <span class="text-zinc-400 dark:text-zinc-700" aria-hidden="true">//</span>
        ${footer.subtitle}
      </p>
      <p class="text-[10px] text-zinc-400 dark:text-zinc-600 mt-2 font-mono">
        ${footer.tagline}
      </p>
    </footer>
  `;
}
