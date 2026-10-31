export function renderMatrixIntro() {
  return `
    <div
      id="matrix-overlay"
      class="fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-700 opacity-100 overflow-hidden h-screen w-screen"
      role="dialog"
      aria-modal="true"
      aria-label="Terminal Bootloader"
    >
      <div class="text-center max-w-md mx-auto px-4 w-full">
        <div
          id="matrix-prompt"
          class="text-emerald-400 font-mono text-base sm:text-lg mb-8 lowercase flex items-center justify-center tracking-wider"
          aria-live="polite"
        >
          <span aria-hidden="true">&gt;&nbsp;</span>
          <span id="matrix-text">enter the matrix</span>
          <span
            class="inline-block w-2 h-5 bg-emerald-400 ml-1.5 animate-pulse"
            aria-hidden="true"
          ></span>
        </div>

        <div
          id="matrix-boot-log"
          class="hidden text-left bg-zinc-950/90 border border-emerald-500/30 p-4 rounded-lg font-mono text-xs text-emerald-400 mb-8 space-y-1.5 min-h-[140px] shadow-lg shadow-emerald-950/30"
          aria-live="polite"
        >
          <div id="matrix-log-lines" class="space-y-1"></div>
        </div>

        <div id="matrix-controls" class="flex justify-center gap-4">
          <button
            id="btn-matrix-yes"
            type="button"
            aria-label="Enter interactive terminal sequence"
            class="bg-transparent text-emerald-400 font-mono px-5 py-2 hover:bg-emerald-400 hover:text-black transition-all duration-300 lowercase text-sm cursor-pointer border border-emerald-500/40 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            [ yes ]
          </button>
          <button
            id="btn-matrix-skip"
            type="button"
            aria-label="Skip terminal intro and enter developer portfolio"
            class="bg-transparent text-zinc-400 font-mono px-5 py-2 hover:bg-zinc-700 hover:text-white transition-all duration-300 lowercase text-sm cursor-pointer border border-zinc-800 rounded focus:outline-none focus:ring-2 focus:ring-zinc-500"
          >
            [ skip ]
          </button>
        </div>
      </div>
    </div>
  `;
}
