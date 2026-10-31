export function renderSocials(socials) {
  const itemsHtml = socials
    .map((item) => {
      if (item.type === "resume") {
        return `
          <div
            class="sm:col-span-2 glass-card p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:border-emerald-500/40 transition-all duration-300"
          >
            <div class="flex items-center gap-3">
              <svg
                class="w-5 h-5 text-zinc-500 dark:text-zinc-400 group-hover:text-emerald-500 transition-colors"
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
              <div>
                <h3
                  class="text-xs font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors"
                >
                  ${item.name}
                </h3>
                <p
                  class="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono"
                >
                  ${item.handle}
                </p>
              </div>
            </div>

            <div class="flex items-center gap-2 w-full sm:w-auto">
              <a
                href="${item.pdfUrl}"
                download="Chukwuebuka_Benjamin_Ugwu_Resume.pdf"
                class="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-emerald-500 text-black hover:bg-emerald-400 text-xs font-mono font-bold rounded-lg transition-all duration-200"
              >
                <span>download pdf</span>
                <span aria-hidden="true">↓</span>
              </a>
              <a
                href="${item.driveUrl}"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center px-3 py-2 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-300 text-xs font-mono rounded-lg transition-all duration-200"
                title="View on Google Drive"
                aria-label="View resume on Google Drive"
              >
                <span>google drive <span aria-hidden="true">↗</span></span>
              </a>
            </div>
          </div>
        `;
      }

      if (item.type === "email") {
        return `
          <a
            href="${item.url}"
            class="sm:col-span-2 glass-card p-4 rounded-xl flex items-center justify-between group hover:border-emerald-500/40 transition-all duration-300"
            aria-label="Send direct email to ${item.handle}"
          >
            <div class="flex items-center gap-3">
              <svg
                class="w-5 h-5 text-zinc-500 dark:text-zinc-400 group-hover:text-emerald-500 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <h3
                  class="text-xs font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors"
                >
                  ${item.name}
                </h3>
                <p
                  class="text-[11px] text-zinc-600 dark:text-zinc-400 font-mono"
                >
                  ${item.handle}
                </p>
              </div>
            </div>
            <span
              class="text-xs text-emerald-600 dark:text-emerald-400 font-mono group-hover:underline"
            >${item.action}</span>
          </a>
        `;
      }

      const svgIcon = getSocialIcon(item.type);
      const isExternal = item.type !== "phone";

      return `
        <a
          href="${item.url}"
          ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ""}
          class="glass-card p-4 rounded-xl flex items-center justify-between group hover:border-emerald-500/40 transition-all duration-300"
          aria-label="${item.name}: ${item.handle}"
        >
          <div class="flex items-center gap-3">
            ${svgIcon}
            <div>
              <h3
                class="text-xs font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors"
              >
                ${item.name}
              </h3>
              <p class="text-[11px] text-zinc-500 font-mono">${item.handle}</p>
            </div>
          </div>
          <span
            class="text-zinc-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all"
            aria-hidden="true"
          >${item.action}</span>
        </a>
      `;
    })
    .join("\n");

  return `
    <section class="mb-20" aria-labelledby="section-socials-title">
      <h2
        id="section-socials-title"
        class="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2 mb-8"
      >
        <span class="text-emerald-500 dark:text-emerald-400 font-bold" aria-hidden="true">&gt;</span>
        socials & contact
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${itemsHtml}
      </div>
    </section>
  `;
}

function getSocialIcon(type) {
  switch (type) {
    case "github":
      return `
        <svg class="w-5 h-5 text-zinc-500 dark:text-zinc-400 group-hover:text-emerald-500 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      `;
    case "youtube":
      return `
        <svg class="w-5 h-5 text-zinc-500 dark:text-zinc-400 group-hover:text-red-500 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884L21.9991 11.9991L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991L11.9991 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z"/>
        </svg>
      `;
    case "twitter":
      return `
        <svg class="w-5 h-5 text-zinc-500 dark:text-zinc-400 group-hover:text-emerald-500 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.6874 3.0625L12.6907 8.77425L8.37045 3.0625H2.11328L9.58961 12.8387L2.50378 20.9375H5.53795L11.0068 14.6886L15.7863 20.9375H21.8885L14.095 10.6342L20.7198 3.0625H17.6874ZM16.6232 19.1225L5.65436 4.78217H7.45745L18.3034 19.1225H16.6232Z"/>
        </svg>
      `;
    case "whatsapp":
      return `
        <svg class="w-5 h-5 text-zinc-500 dark:text-zinc-400 group-hover:text-emerald-500 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.004 2c-5.518 0-9.996 4.478-9.996 9.996 0 1.761.458 3.477 1.328 4.99L2.004 22l5.176-1.32c1.47.818 3.13 1.252 4.824 1.252 5.518 0 9.996-4.478 9.996-9.996S17.522 2 12.004 2zm4.877 14.286c-.206.582-1.2 1.07-1.654 1.139-.454.07-.946.096-2.92-.72-1.974-.816-3.23-2.825-3.328-2.956-.098-.13-2.222-2.956-2.222-5.636 0-2.68 1.4-3.996 1.896-4.542.496-.546 1.082-.685 1.442-.685.36 0 .72.003 1.034.02.33.018.77-.124 1.206.924.454 1.09 1.542 3.774 1.676 4.048.134.274.224.594.044.954-.18.36-.27.584-.54.898-.27.314-.568.7-.812.94-.27.266-.55.556-.236 1.096.314.54 1.396 2.302 2.996 3.726 2.056 1.83 3.792 2.398 4.332 2.668.54.27.854.226 1.17-.138.314-.364 1.352-1.572 1.712-2.112.36-.54.72-.45 1.206-.27.486.18 3.084 1.454 3.614 1.718.53.264.884.394 1.014.618.13.224.13 1.296-.076 1.878z"/>
        </svg>
      `;
    case "phone":
      return `
        <svg class="w-5 h-5 text-zinc-500 dark:text-zinc-400 group-hover:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      `;
    default:
      return "";
  }
}
