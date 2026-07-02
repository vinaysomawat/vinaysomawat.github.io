import { qs, qsa } from "../utils/dom.js";
import { NAV_LINKS } from "../components/nav.js";

function initScrollProgress() {
  const bar = qs("#scrollProgressBar");
  if (!bar) return;
  const update = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const max = scrollHeight - clientHeight;
    bar.style.width = `${max > 0 ? (scrollTop / max) * 100 : 0}%`;
  };
  document.addEventListener("scroll", update, { passive: true });
  update();
}

function initNavShrink() {
  const nav = qs("#siteNav");
  if (!nav) return;
  const update = () => nav.classList.toggle("is-scrolled", window.scrollY > 24);
  document.addEventListener("scroll", update, { passive: true });
  update();
}

function initBackToTop() {
  const btn = qs("#backToTop");
  if (!btn) return;
  const update = () => btn.classList.toggle("is-visible", window.scrollY > 480);
  document.addEventListener("scroll", update, { passive: true });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  update();
}

function initMobileMenu() {
  const toggle = qs("#navMobileToggle");
  const menu = qs("#navMobileMenu");
  if (!toggle || !menu) return;

  const close = () => {
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
    toggle.querySelector("i").className = "fa-solid fa-bars";
  };

  const open = () => {
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
    toggle.querySelector("i").className = "fa-solid fa-xmark";
  };

  toggle.addEventListener("click", () => {
    menu.classList.contains("is-open") ? close() : open();
  });

  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

function initScrollspy() {
  const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(Boolean);
  if (!sections.length) return;

  const setActive = (id) => {
    qsa("[data-nav-link]").forEach((link) => {
      const isActive = link.dataset.navLink === id;
      link.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
  );

  sections.forEach((section) => observer.observe(section));
}

export function initNavScroll() {
  initScrollProgress();
  initNavShrink();
  initBackToTop();
  initMobileMenu();
  initScrollspy();
}
