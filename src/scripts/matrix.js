(function initMatrix() {
  const matrixOverlay = document.getElementById("matrix-overlay");
  const portfolioMain = document.getElementById("portfolio-main");
  const matrixTextEl = document.getElementById("matrix-text");
  const matrixControls = document.getElementById("matrix-controls");
  const matrixBootLog = document.getElementById("matrix-boot-log");
  const matrixLogLines = document.getElementById("matrix-log-lines");
  const btnYes = document.getElementById("btn-matrix-yes");
  const btnSkip = document.getElementById("btn-matrix-skip");

  const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
  const targetPrompt = "enter the matrix";
  let isBooting = false;

  const scrambleTimer = setInterval(() => {
    if (isBooting) return;
    let scrambled = "";
    for (let i = 0; i < targetPrompt.length; i++) {
      if (Math.random() < 0.08) {
        scrambled += glyphs[Math.floor(Math.random() * glyphs.length)];
      } else {
        scrambled += targetPrompt[i];
      }
    }
    if (matrixTextEl) matrixTextEl.textContent = scrambled;
  }, 120);

  function revealPortfolio() {
    clearInterval(scrambleTimer);
    if (!matrixOverlay) return;
    matrixOverlay.classList.add("opacity-0", "pointer-events-none");
    if (portfolioMain) {
      portfolioMain.classList.remove("opacity-0");
    }
    setTimeout(() => {
      matrixOverlay.style.display = "none";
    }, 700);
  }

  if (btnSkip) {
    btnSkip.addEventListener("click", revealPortfolio);
  }

  if (btnYes) {
    btnYes.addEventListener("click", () => {
      isBooting = true;
      if (matrixControls) matrixControls.classList.add("hidden");
      if (matrixBootLog) matrixBootLog.classList.remove("hidden");
      if (matrixTextEl) matrixTextEl.textContent = "booting matrix...";

      const bootSteps = [
        "initializing neural core...",
        "loading localized modules [bkt, rl, pytorch]...",
        "probing network throughput (iperf3 / sockets)...",
        "mounting offline-first cache (redis)...",
        "decrypting multi-dialect scaffolding (yo, ig, ha)...",
        "launching full-stack runtime [react, next.js, postgres]...",
        "verifying system integrity...",
        "connection established.",
      ];

      let step = 0;

      function nextStep() {
        if (step < bootSteps.length) {
          const text = bootSteps[step];
          const line = document.createElement("div");
          const isFinal = step === bootSteps.length - 1;
          line.className = isFinal
            ? "text-emerald-300 font-bold flex items-center gap-1.5"
            : "text-emerald-400/90 flex items-center gap-1.5";

          line.innerHTML = `<span class="text-zinc-600" aria-hidden="true">&gt;</span> <span>${text}</span>`;
          if (matrixLogLines) matrixLogLines.appendChild(line);

          step++;
          const delay = isFinal ? 400 : 160 + Math.random() * 60;
          setTimeout(nextStep, delay);
        } else {
          setTimeout(revealPortfolio, 450);
        }
      }

      nextStep();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && matrixOverlay && matrixOverlay.style.display !== "none") {
      revealPortfolio();
    }
  });
})();
