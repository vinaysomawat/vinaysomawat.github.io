const STORAGE_KEY = "portfolio-theme";

function getInitialTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "light" ? "light" : "dark";
}

function applyToggleIcon(theme) {
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;
  toggle.innerHTML =
    theme === "dark"
      ? '<i class="fa-solid fa-sun" aria-hidden="true"></i>'
      : '<i class="fa-solid fa-moon" aria-hidden="true"></i>';
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(STORAGE_KEY, theme);
  applyToggleIcon(theme);
}

export function initTheme() {
  setTheme(getInitialTheme());
  document.getElementById("themeToggle")?.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(next);
  });
}
