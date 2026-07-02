import { html } from "https://unpkg.com/lit-html?module";
import { mount } from "../utils/dom.js";
import { contact } from "../../user-data/data.js";
import { CONTACT_FORM_ENDPOINT } from "../constants/urls.js";

const contactLink = (item) => html`
  <li>
    <a
      href="${item.link}"
      target="_blank"
      rel="noopener noreferrer"
      class="contact-link glass glass-interactive magnetic ripple"
      aria-label="${item.label}"
    >
      <span class="contact-link-icon"><i class="${item.icon}" aria-hidden="true"></i></span>
      <span class="contact-link-label">${item.label}</span>
      <i class="fa-solid fa-arrow-up-right-from-square contact-link-go" aria-hidden="true"></i>
    </a>
  </li>
`;

const contactTemplate = () => html`
  <div class="container contact-inner">
    <div class="contact-copy">
      <p class="section-eyebrow" data-reveal>Contact</p>
      <h2 class="section-title" id="contact-title" data-reveal>
        Let's build something <span class="gradient-text">worth shipping</span>.
      </h2>
      <p class="section-subtitle" data-reveal>
        Pick the channel that fits best — tech discussions, collaborations,
        project feedback, or just a quick hello.
      </p>
      <ul class="contact-link-list" data-reveal>
        ${contact.map((item) => contactLink(item))}
      </ul>
    </div>

    <form class="contact-form glass" id="contactForm" data-reveal novalidate>
      <div class="form-field">
        <label for="contactName">Name</label>
        <input type="text" id="contactName" name="name" autocomplete="name" required />
        <p class="form-error" id="contactNameError" role="alert"></p>
      </div>
      <div class="form-field">
        <label for="contactEmail">Email</label>
        <input type="email" id="contactEmail" name="email" autocomplete="email" required />
        <p class="form-error" id="contactEmailError" role="alert"></p>
      </div>
      <div class="form-field">
        <label for="contactMessage">Message</label>
        <textarea id="contactMessage" name="message" rows="4" required></textarea>
        <p class="form-error" id="contactMessageError" role="alert"></p>
      </div>
      <button type="submit" class="btn btn-primary magnetic ripple form-submit" id="contactSubmit">
        <span class="form-submit-label">Send Message</span>
        <i class="fa-solid fa-spinner form-spinner" aria-hidden="true"></i>
      </button>
      <p class="form-status" id="formStatus" aria-live="polite"></p>
    </form>
  </div>
`;

export function mountContact() {
  return mount("contact", contactTemplate());
}

const FIELDS = {
  contactName: { errorId: "contactNameError", validate: (v) => (v.trim() ? "" : "Please enter your name.") },
  contactEmail: {
    errorId: "contactEmailError",
    validate: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Enter a valid email address."),
  },
  contactMessage: {
    errorId: "contactMessageError",
    validate: (v) => (v.trim().length >= 10 ? "" : "Message should be at least 10 characters."),
  },
};

function validateField(input) {
  const rule = FIELDS[input.id];
  const message = rule.validate(input.value);
  const errorEl = document.getElementById(rule.errorId);
  if (errorEl) errorEl.textContent = message;
  input.setAttribute("aria-invalid", message ? "true" : "false");
  return !message;
}

export function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  Object.keys(FIELDS).forEach((id) => {
    const input = document.getElementById(id);
    input?.addEventListener("blur", () => validateField(input));
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const inputs = Object.keys(FIELDS).map((id) => document.getElementById(id));
    const isValid = inputs.map(validateField).every(Boolean);
    if (!isValid) return;

    const submitBtn = document.getElementById("contactSubmit");
    const status = document.getElementById("formStatus");
    submitBtn.classList.add("is-loading");
    submitBtn.disabled = true;
    status.textContent = "";

    const [name, email, message] = inputs.map((input) => input.value.trim());

    try {
      if (CONTACT_FORM_ENDPOINT) {
        const res = await fetch(CONTACT_FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });
        if (!res.ok) throw new Error("submission failed");
      } else {
        // No form backend configured yet — hand off to the visitor's mail client instead
        // of silently pretending a submission succeeded.
        const subject = encodeURIComponent(`Portfolio contact from ${name}`);
        const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
        window.location.href = `mailto:vinaysomawat40@gmail.com?subject=${subject}&body=${body}`;
      }
      form.classList.add("is-success");
      status.textContent = "Thanks — your message is on its way.";
      form.reset();
    } catch {
      status.textContent = "Something went wrong. Please email me directly instead.";
    } finally {
      submitBtn.classList.remove("is-loading");
      submitBtn.disabled = false;
    }
  });
}
