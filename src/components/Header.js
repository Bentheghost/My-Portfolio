export function renderHeader(personal) {
  const now = new Date();
  const rawHours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const hours24 = String(rawHours).padStart(2, "0");
  const initialTime = `${hours24}:${minutes}:${seconds}`;

  const dayNames = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const monthNames = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  const initialDate = `${dayNames[now.getDay()]}, ${monthNames[now.getMonth()]} ${now.getDate()}`;
  const initialUptime = "25d 0h 0m";

  return `
    <header
      class="mt-6 md:mt-0 mb-14 glass-card p-6 rounded-2xl relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all duration-300"
    >
      <div class="flex items-center gap-4">
        <div
          class="w-16 h-16 sm:w-16 sm:h-16 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-200/80 dark:border-zinc-700/60 shadow-md shrink-0 relative group"
        >
          <img
            src="${personal.avatar}"
            alt="${personal.avatarAlt}"
            width="64"
            height="64"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-300"
          />
        </div>

        <div class="space-y-0.5">
          <div class="flex items-center gap-2">
            <h1
              class="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white lowercase"
            >
              ${personal.name}
            </h1>
            <div class="relative inline-block" title="Verified Developer Profile">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                aria-label="Verified developer profile"
                role="img"
                class="w-5 h-5 text-emerald-500 cursor-pointer"
              >
                <path
                  d="M10.007 2.10377C8.60544 1.65006 7.08181 2.28116 6.41156 3.59306L5.60578 5.17023C5.51004 5.35763 5.35763 5.51004 5.17023 5.60578L3.59306 6.41156C2.28116 7.08181 1.65006 8.60544 2.10377 10.007L2.64923 11.692C2.71404 11.8922 2.71404 12.1078 2.64923 12.308L2.10377 13.993C1.65006 15.3946 2.28116 16.9182 3.59306 17.5885L5.17023 18.3942C5.35763 18.49 5.51004 18.6424 5.60578 18.8298L6.41156 20.407C7.08181 21.7189 8.60544 22.35 10.007 21.8963L11.692 21.3508C11.8922 21.286 12.1078 21.286 12.308 21.3508L13.993 21.8963C15.3946 22.35 16.9182 21.7189 17.5885 20.407L18.3942 18.8298C18.49 18.6424 18.6424 18.49 18.8298 18.3942L20.407 17.5885C21.7189 16.9182 22.35 15.3946 21.8963 13.993L21.3508 12.308C21.286 12.1078 21.286 11.8922 21.3508 11.692L21.8963 10.007C22.35 8.60544 21.7189 7.08181 20.407 6.41156L18.8298 5.60578C18.6424 5.51004 18.49 5.35763 18.3942 5.17023L17.5885 3.59306C16.9182 2.28116 15.3946 1.65006 13.993 2.10377L12.308 2.64923C12.1078 2.71403 11.8922 2.71404 11.692 2.64923L10.007 2.10377ZM6.75977 11.7573L8.17399 10.343L11.0024 13.1715L16.6593 7.51465L18.0735 8.92886L11.0024 15.9999L6.75977 11.7573Z"
                />
              </svg>
            </div>
          </div>
          <p
            class="text-[11px] text-zinc-500 dark:text-zinc-400 lowercase tracking-wider font-mono"
          >
            ${personal.handle}
          </p>
        </div>
      </div>

      <div
        class="sm:absolute sm:top-4 sm:right-6 flex flex-col items-start sm:items-end gap-1.5 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-zinc-200/80 dark:border-zinc-800/80"
      >
        <div class="relative group cursor-pointer" tabindex="0" role="status" aria-label="Current status: ${personal.statusText}, ${personal.statusTooltip}">
          <div
            class="flex items-center gap-1.5 text-[10px] lowercase tracking-wider"
          >
            <span
              class="w-1.5 h-1.5 bg-emerald-400 rounded-full border border-emerald-300 shadow-[0_0_6px_#10b981] animate-pulse"
              aria-hidden="true"
            ></span>
            <span
              class="text-emerald-500 dark:text-emerald-400 text-[10px] font-mono font-medium"
              >${personal.statusText}</span
            >
          </div>

          <div
            role="tooltip"
            class="absolute right-0 bottom-full mb-2 hidden group-hover:flex group-focus:flex items-center px-3 py-1 rounded-xl text-[11px] font-mono bg-zinc-900/95 dark:bg-zinc-900/95 backdrop-blur-md border border-zinc-700/70 text-white shadow-2xl z-30 pointer-events-none whitespace-nowrap transition-all duration-200"
          >
            <span>${personal.statusTooltip}</span>
            <span
              aria-hidden="true"
              class="absolute -bottom-1 right-3 w-2 h-2 bg-zinc-900/95 border-r border-b border-zinc-700/70 rotate-45"
            ></span>
          </div>
        </div>

        <div
          class="glass-pill px-2.5 py-1 rounded-lg text-[10px] lowercase tracking-wider transition-all duration-300 cursor-default"
        >
          <span class="text-zinc-800 dark:text-white text-[10px] font-mono"
            >${personal.uptimeBadge}</span
          >
        </div>

        <div
          class="w-24 h-0.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden"
          aria-hidden="true"
        >
          <div
            class="h-full bg-zinc-800 dark:bg-white rounded-full animate-progress"
          ></div>
        </div>

        <div
          class="flex items-center gap-1 text-[10px] lowercase tracking-wider flex-wrap"
        >
          <div
            class="glass-pill px-2 py-1 rounded-lg transition-all duration-300 cursor-pointer"
            title="System local time (click to toggle 12h/24h)"
          >
            <time
              id="telemetry-time"
              class="text-zinc-800 dark:text-white font-mono"
              >${initialTime}</time
            >
          </div>
          <div
            class="glass-pill px-2 py-1 rounded-lg transition-all duration-300 cursor-help"
            title="System local date"
          >
            <time
              id="telemetry-date"
              class="text-zinc-800 dark:text-white font-mono"
              >${initialDate}</time
            >
          </div>
          <div
            class="glass-pill px-2 py-1 rounded-lg transition-all duration-300 cursor-help"
            title="Continuous system uptime (anchored to 25 days)"
          >
            <span
              id="telemetry-runtime"
              class="text-emerald-600 dark:text-emerald-400 font-mono font-bold"
              >${initialUptime}</span
            >
          </div>

          <button
            id="theme-toggle"
            type="button"
            class="glass-pill px-2 py-1 rounded-lg text-[10px] font-mono flex items-center gap-1 cursor-pointer hover:border-emerald-500/50 transition-all text-zinc-700 dark:text-zinc-300 ml-0.5 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            aria-label="Toggle dark or light theme"
            title="Toggle Dark / Light Theme"
          >
            <span id="theme-toggle-icon" aria-hidden="true">☀</span>
          </button>
        </div>
      </div>
    </header>
  `;
}
