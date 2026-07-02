import { html } from "https://unpkg.com/lit-html?module";
import { mount } from "../utils/dom.js";
import { adventures } from "../../user-data/data.js";

const adventureItem = (item) => html`
  <li class="adventure-item">
    <div class="adventure-item-top">
      <span class="adventure-name">${item.name}</span>
      <span class="adventure-state">
        <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
        ${item.state}
      </span>
    </div>
    <div class="adventure-meta">
      <span class="chip">${item.height}</span>
      ${item.duration ? html`<span class="chip">${item.duration}</span>` : ""}
      ${item.level ? html`<span class="chip">${item.level}</span>` : ""}
    </div>
  </li>
`;

const adventureGroup = (group, index) => html`
  <article class="adventure-group glass glass-interactive" data-reveal style="--reveal-index: ${index}">
    <div class="adventure-group-head">
      <span class="adventure-group-icon adventure-accent-${group.accent}">
        <i class="${group.icon}" aria-hidden="true"></i>
      </span>
      <div>
        <h3>${group.title}</h3>
        <p>${group.items.length} adventures logged</p>
      </div>
    </div>
    <ul class="adventure-items">
      ${group.items.map((item) => adventureItem(item))}
    </ul>
  </article>
`;

const adventuresTemplate = () => html`
  <div class="container">
    <div class="section-heading">
      <p class="section-eyebrow" data-reveal>Off the Clock</p>
      <h2 class="section-title" id="adventures-title" data-reveal>
        Mountain <span class="gradient-text">Adventures</span>
      </h2>
      <p class="section-subtitle" data-reveal>
        When I'm not writing code, I'm crossing mountain passes.
      </p>
    </div>
    <div class="adventure-grid">
      ${adventures.map((group, i) => adventureGroup(group, i))}
    </div>
  </div>
`;

export function mountAdventures() {
  return mount("adventures", adventuresTemplate());
}
