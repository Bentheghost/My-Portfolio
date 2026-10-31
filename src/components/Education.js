export function renderEducation(education) {
  const { university, certifications } = education;

  const certsHtml = certifications
    .map(
      (cert) => `
        <article class="glass-card p-4 rounded-lg">
          <time
            datetime="${cert.date}"
            class="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono font-semibold block mb-1"
          >${cert.date}</time>
          <h4 class="text-xs font-bold text-zinc-900 dark:text-white">
            ${cert.title}
          </h4>
          <p class="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">
            ${cert.issuer}
          </p>
        </article>
      `
    )
    .join("\n");

  return `
    <section class="mb-16" aria-labelledby="section-education-title">
      <h2
        id="section-education-title"
        class="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2 mb-8"
      >
        <span class="text-emerald-500 dark:text-emerald-400 font-bold" aria-hidden="true">&gt;</span>
        education & credentials
      </h2>

      <div class="space-y-8">
        <article class="glass-card p-6 rounded-xl">
          <div
            class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1"
          >
            <h3 class="text-base font-bold text-zinc-900 dark:text-white">
              ${university.institution}
            </h3>
            <span class="text-xs text-zinc-500 font-mono">(${university.period})</span>
          </div>
          <p
            class="text-xs text-emerald-600 dark:text-emerald-400 font-mono mt-1"
          >
            ${university.degree}
          </p>
          <p
            class="text-xs text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed"
          >
            <strong class="text-zinc-900 dark:text-zinc-200">Key Coursework:</strong>
            ${university.coursework}
          </p>
          <p
            class="text-xs text-zinc-700 dark:text-zinc-300 mt-2 leading-relaxed"
          >
            <strong class="text-zinc-900 dark:text-zinc-200">Undergraduate Thesis:</strong>
            ${university.thesis}
          </p>
        </article>

        <div>
          <h3
            class="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-3"
          >
            // Verified Certifications
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            ${certsHtml}
          </div>
        </div>
      </div>
    </section>
  `;
}
