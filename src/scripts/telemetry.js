(function initTelemetry() {
  const timeEl = document.getElementById("telemetry-time");
  const dateEl = document.getElementById("telemetry-date");

  let is12Hour = false;
  try {
    is12Hour = localStorage.getItem("time_format") === "12h";
  } catch (e) {}

  const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

  function tick() {
    const now = new Date();

    if (timeEl) {
      const h = now.getHours();
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");

      if (is12Hour) {
        const period = h >= 12 ? "pm" : "am";
        const h12 = h % 12 || 12;
        timeEl.textContent = `${String(h12).padStart(2, "0")}:${m}:${s} ${period}`;
      } else {
        timeEl.textContent = `${String(h).padStart(2, "0")}:${m}:${s}`;
      }
    }

    if (dateEl) {
      dateEl.textContent = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`;
    }
  }

  // Toggle 12h / 24h format on click
  if (timeEl?.parentElement) {
    timeEl.parentElement.style.cursor = "pointer";
    timeEl.parentElement.addEventListener("click", () => {
      is12Hour = !is12Hour;
      try {
        localStorage.setItem("time_format", is12Hour ? "12h" : "24h");
      } catch (e) {}
      tick();
    });
  }

  tick();
  setInterval(tick, 1000);
})();
