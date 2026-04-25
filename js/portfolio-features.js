(function () {
  "use strict";

  const storageKey = "portfolio-theme";
  const root = document.documentElement;
  const scrollProgressBar = document.getElementById("scrollProgressBar");
  const themeToggle = document.getElementById("themeToggle");
  const backToTop = document.getElementById("backToTop");
  const palette = document.getElementById("commandPalette");
  const paletteToggle = document.getElementById("commandPaletteToggle");
  const paletteClose = document.getElementById("commandPaletteClose");
  const commandSearch = document.getElementById("commandSearch");
  const commandList = document.getElementById("commandList");

  const commands = [
    { label: "About", target: "about", icon: "fa-user", meta: "Section" },
    { label: "Skills", target: "skills", icon: "fa-code", meta: "Section" },
    {
      label: "Work Experience",
      target: "experience",
      icon: "fa-briefcase",
      meta: "Section",
    },
    {
      label: "Education",
      target: "education",
      icon: "fa-graduation-cap",
      meta: "Section",
    },
    {
      label: "Top Repositories",
      target: "repos",
      icon: "fa-code-branch",
      meta: "Section",
    },
    { label: "Blogs", target: "blogs", icon: "fa-pen", meta: "Section" },
    {
      label: "Adventures",
      target: "adventures",
      icon: "fa-mountain-sun",
      meta: "Section",
    },
    { label: "Contact", target: "contact", icon: "fa-envelope", meta: "Section" },
    {
      label: "Open GitHub",
      href: "https://github.com/vinaysomawat",
      icon: "fa-github",
      meta: "External link",
    },
    {
      label: "Open LinkedIn",
      href: "https://www.linkedin.com/in/vinaysomawat/",
      icon: "fa-linkedin",
      meta: "External link",
    },
    {
      label: "JSON Generator",
      href: "./pages/json-generator.html",
      icon: "fa-file-code",
      meta: "Tool",
    },
  ];

  function getInitialTheme() {
    const storedTheme = localStorage.getItem(storageKey);
    if (storedTheme) return storedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function setTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem(storageKey, theme);
    themeToggle.innerHTML =
      theme === "dark"
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
  }

  function updateScrollUi() {
    const scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress =
      scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;

    scrollProgressBar.style.width = `${Math.min(progress, 100)}%`;
    backToTop.classList.toggle("is-visible", window.scrollY > 420);
  }

  function scrollToSection(sectionName) {
    const section = document.querySelector(`[data-section="${sectionName}"]`);
    if (!section) return;
    window.scrollTo({
      top: section.getBoundingClientRect().top + window.scrollY - 55,
      behavior: "smooth",
    });
  }

  function executeCommand(command) {
    closePalette();
    if (command.target) {
      scrollToSection(command.target);
      return;
    }
    if (command.href) window.open(command.href, "_blank", "noopener");
  }

  function renderCommands(filter = "") {
    const normalizedFilter = filter.trim().toLowerCase();
    const filteredCommands = commands.filter((command) =>
      `${command.label} ${command.meta}`.toLowerCase().includes(normalizedFilter)
    );

    if (!filteredCommands.length) {
      commandList.innerHTML = '<div class="command-empty">No matches found</div>';
      return;
    }

    commandList.innerHTML = "";
    filteredCommands.forEach((command, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `command-item${index === 0 ? " is-active" : ""}`;
      button.innerHTML = `
        <span class="command-item-icon"><i class="fa-brands ${command.icon}"></i></span>
        <span>
          <span class="command-item-label">${command.label}</span>
          <span class="command-item-meta">${command.meta}</span>
        </span>
      `;
      button.querySelector("i").className =
        command.icon.startsWith("fa-github") ||
        command.icon.startsWith("fa-linkedin")
          ? `fa-brands ${command.icon}`
          : `fa-solid ${command.icon}`;
      button.addEventListener("click", () => executeCommand(command));
      commandList.appendChild(button);
    });
  }

  function openPalette() {
    palette.classList.add("is-open");
    palette.setAttribute("aria-hidden", "false");
    renderCommands();
    commandSearch.value = "";
    commandSearch.focus();
  }

  function closePalette() {
    palette.classList.remove("is-open");
    palette.setAttribute("aria-hidden", "true");
  }

  function moveActiveCommand(direction) {
    const items = Array.from(commandList.querySelectorAll(".command-item"));
    if (!items.length) return;
    const currentIndex = Math.max(
      0,
      items.findIndex((item) => item.classList.contains("is-active"))
    );
    const nextIndex = (currentIndex + direction + items.length) % items.length;
    items[currentIndex].classList.remove("is-active");
    items[nextIndex].classList.add("is-active");
    items[nextIndex].scrollIntoView({ block: "nearest" });
  }

  setTheme(getInitialTheme());
  updateScrollUi();

  themeToggle.addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  paletteToggle.addEventListener("click", openPalette);
  paletteClose.addEventListener("click", closePalette);
  palette.addEventListener("click", (event) => {
    if (event.target === palette) closePalette();
  });
  commandSearch.addEventListener("input", () => {
    renderCommands(commandSearch.value);
  });

  commandSearch.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      moveActiveCommand(1);
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      moveActiveCommand(-1);
    }
    if (event.key === "Enter") {
      event.preventDefault();
      commandList.querySelector(".command-item.is-active")?.click();
    }
  });

  document.addEventListener("keydown", (event) => {
    const isSearchShortcut =
      (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
    if (isSearchShortcut) {
      event.preventDefault();
      openPalette();
    }
    if (event.key === "Escape") closePalette();
  });

  window.addEventListener("scroll", updateScrollUi, { passive: true });
})();
