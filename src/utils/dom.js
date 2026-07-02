import { render } from "https://unpkg.com/lit-html?module";

export const qs = (selector, root = document) => root.querySelector(selector);
export const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

/** Render a lit-html TemplateResult into a container by id. No-op if the container is missing. */
export function mount(id, templateResult) {
  const el = document.getElementById(id);
  if (!el) return null;
  render(templateResult, el);
  return el;
}

export function showError(id, message) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = `<p class="fetch-error">${message}</p>`;
}
