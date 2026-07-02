const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isFinePointer = () =>
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const MAGNETIC_STRENGTH = 0.35;
const TILT_MAX_DEG = 8;

function initMagnetic() {
  document.addEventListener("pointermove", (e) => {
    const el = e.target.closest(".magnetic");
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${relX * MAGNETIC_STRENGTH}px, ${
      relY * MAGNETIC_STRENGTH
    }px)`;
  });

  document.addEventListener("pointerout", (e) => {
    const el = e.target.closest(".magnetic");
    if (!el || el.contains(e.relatedTarget)) return;
    el.style.transform = "";
  });
}

function initTilt() {
  document.addEventListener("pointermove", (e) => {
    const el = e.target.closest(".tilt");
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * TILT_MAX_DEG * 2;
    const rotateX = (0.5 - py) * TILT_MAX_DEG * 2;
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
  });

  document.addEventListener("pointerout", (e) => {
    const el = e.target.closest(".tilt");
    if (!el || el.contains(e.relatedTarget)) return;
    el.style.transform = "";
  });
}

function initCursorGlow() {
  const glow = document.createElement("div");
  glow.className = "cursor-glow";
  glow.setAttribute("aria-hidden", "true");
  document.body.appendChild(glow);

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let raf = null;

  const paint = () => {
    glow.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`;
    raf = null;
  };

  document.addEventListener("pointermove", (e) => {
    x = e.clientX;
    y = e.clientY;
    if (!raf) raf = requestAnimationFrame(paint);
  });

  document.addEventListener("pointerdown", () => glow.classList.add("is-active"));
  document.addEventListener("pointerup", () => glow.classList.remove("is-active"));
}

function initRipple() {
  document.addEventListener("pointerdown", (e) => {
    const el = e.target.closest(".ripple");
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--ripple-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--ripple-y", `${e.clientY - rect.top}px`);
    el.classList.remove("is-rippling");
    // Force reflow so the animation restarts on rapid repeat clicks.
    void el.offsetWidth;
    el.classList.add("is-rippling");
  });

  document.addEventListener("animationend", (e) => {
    if (e.animationName === "ripple-out") {
      e.target.classList.remove("is-rippling");
    }
  });
}

/** Wire up all micro-interactions once. Uses event delegation so it works for content mounted later. */
export function initInteractions() {
  initRipple();
  if (prefersReducedMotion() || !isFinePointer()) return;
  initMagnetic();
  initTilt();
  initCursorGlow();
}
