import { html } from "https://unpkg.com/lit-html?module";
import { mount } from "../utils/dom.js";
import { experience, education } from "../../user-data/data.js";

const tagsTemplate = (tags) => html`
  <div class="timeline-tags">
    ${tags.map((tag) => html`<span class="chip">${tag}</span>`)}
  </div>
`;

const timelineEntry = (item, index) => html`
  <article class="timeline-entry" data-reveal style="--reveal-index: ${index % 6}">
    <div class="timeline-marker">
      <span class="timeline-dot glass">
        <i class="fa-solid fa-${item.icon}" aria-hidden="true"></i>
      </span>
    </div>
    <div class="timeline-card glass glass-interactive glow-card">
      <div class="timeline-card-head">
        <h3>${item.title}</h3>
        <span class="timeline-duration">${item.duration}</span>
      </div>
      <p class="timeline-subtitle">${item.subtitle}</p>
      ${item.details.length
        ? html`<ul class="timeline-details">
            ${item.details.map((detail) => html`<li>${detail}</li>`)}
          </ul>`
        : ""}
      ${item.tags.length ? tagsTemplate(item.tags) : ""}
    </div>
  </article>
`;

const experienceTemplate = () => {
  const items = [...experience, ...education];
  return html`
    <div class="container">
      <div class="section-heading">
        <p class="section-eyebrow" data-reveal>Career</p>
        <h2 class="section-title" id="experience-title" data-reveal>
          Work <span class="gradient-text">Experience</span>
        </h2>
        <p class="section-subtitle" data-reveal>
          Six years of shipping frontend systems that stayed fast, stable, and
          maintainable as usage scaled.
        </p>
      </div>
      <div class="timeline">
        ${items.map((item, i) => timelineEntry(item, i))}
      </div>
    </div>
  `;
};

export function mountExperience() {
  return mount("experience", experienceTemplate());
}
