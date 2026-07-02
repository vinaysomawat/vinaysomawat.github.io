let observer;

function getObserver() {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );
  return observer;
}

/**
 * Observe every [data-reveal] element within root that isn't already being watched.
 * Safe to call repeatedly after dynamic content (e.g. fetched sections) is mounted.
 */
export function observeReveals(root = document) {
  const obs = getObserver();
  const targets = root.querySelectorAll("[data-reveal]:not(.is-observed)");
  targets.forEach((el, i) => {
    el.classList.add("is-observed");
    if (!el.style.getPropertyValue("--reveal-index")) {
      el.style.setProperty("--reveal-index", i % 6);
    }
    obs.observe(el);
  });
}
