(function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle");
  const toggleIcon = document.getElementById("theme-toggle-icon");

  function syncTheme() {
    const isDark = document.documentElement.classList.contains("dark");
    if (toggleIcon) {
      toggleIcon.textContent = isDark ? "☀" : "☾";
    }
    if (toggleBtn) {
      toggleBtn.setAttribute(
        "aria-label",
        isDark ? "Switch to light theme" : "Switch to dark theme"
      );
    }
  }

  syncTheme();

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const isDark = document.documentElement.classList.contains("dark");
      if (isDark) {
        document.documentElement.classList.remove("dark");
        try {
          localStorage.setItem("theme", "light");
        } catch (e) {}
      } else {
        document.documentElement.classList.add("dark");
        try {
          localStorage.setItem("theme", "dark");
        } catch (e) {}
      }
      syncTheme();
    });
  }
})();
