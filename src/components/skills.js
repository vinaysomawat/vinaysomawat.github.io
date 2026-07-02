import { html } from "https://unpkg.com/lit-html?module";
import { mount } from "../utils/dom.js";
import { skills } from "../../user-data/data.js";

// Display-only grouping layered on top of the flat `skills` list in user-data/data.js
// (kept flat there so the JSON generator tool's multi-select keeps working).
const CATEGORIES = [
  { category: "Languages & Frameworks", icon: "fa-solid fa-code", match: ["TypeScript", "Angular", "React", "Signals"] },
  { category: "State & Data", icon: "fa-solid fa-diagram-project", match: ["RxJS", "NgRx", "NGXS", "WebSockets"] },
  { category: "Architecture", icon: "fa-solid fa-layer-group", match: ["Nx", "Microfrontends", "Module Federation"] },
  { category: "Tooling & Quality", icon: "fa-solid fa-vial", match: ["Storybook", "Playwright"] },
  { category: "AI", icon: "fa-solid fa-robot", match: ["OpenAI"] },
];

function groupSkills() {
  const remaining = new Set(skills);
  const groups = CATEGORIES.map(({ category, icon, match }) => {
    const items = match.filter((name) => remaining.has(name));
    items.forEach((name) => remaining.delete(name));
    return { category, icon, items };
  }).filter((group) => group.items.length);

  if (remaining.size) {
    groups.push({ category: "Other", icon: "fa-solid fa-star", items: [...remaining] });
  }
  return groups;
}

const skillGroup = (group, index) => html`
  <div class="skill-group glass glass-interactive glow-card" data-reveal style="--reveal-index: ${index}">
    <div class="skill-group-head">
      <span class="skill-group-icon"><i class="${group.icon}" aria-hidden="true"></i></span>
      <h3>${group.category}</h3>
    </div>
    <ul class="skill-chip-list">
      ${group.items.map((item) => html`<li class="chip skill-chip">${item}</li>`)}
    </ul>
  </div>
`;

const skillsTemplate = () => html`
  <div class="container">
    <div class="section-heading">
      <p class="section-eyebrow" data-reveal>Toolbox</p>
      <h2 class="section-title" id="skills-title" data-reveal>
        Skills & <span class="gradient-text">Technologies</span>
      </h2>
      <p class="section-subtitle" data-reveal>
        The stack I reach for to turn ambiguous requirements into fast, resilient
        interfaces.
      </p>
    </div>
    <div class="skill-grid">
      ${groupSkills().map((group, i) => skillGroup(group, i))}
    </div>
  </div>
`;

export function mountSkills() {
  return mount("skills", skillsTemplate());
}
