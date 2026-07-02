import { html } from "https://unpkg.com/lit-html?module";
import { mount } from "../utils/dom.js";
import { URLs } from "../constants/urls.js";

const repoSkeleton = () => html`
  <div class="repo-card glass" aria-hidden="true">
    <div class="skeleton" style="height:18px;width:60%;margin-bottom:12px"></div>
    <div class="skeleton" style="height:14px;width:90%;margin-bottom:8px"></div>
    <div class="skeleton" style="height:14px;width:75%"></div>
  </div>
`;

const githubTemplate = () => html`
  <div class="container">
    <div class="section-heading">
      <p class="section-eyebrow" data-reveal>Open Source</p>
      <h2 class="section-title" id="github-title" data-reveal>
        GitHub & <span class="gradient-text">Repositories</span>
      </h2>
      <p class="section-subtitle" data-reveal>
        Live stats and pinned repositories, pulled directly from
        <a class="underline-link" href="${URLs.githubProfile}" target="_blank" rel="noopener noreferrer">github.com/vinaysomawat</a>.
      </p>
    </div>

    <div class="profile-stats-row" data-reveal>
      <div class="profile-card-shell glass tilt" data-github-card data-username="vinaysomawat">
        <div class="skeleton" style="height:80px"></div>
      </div>
      <div class="profile-card-shell glass tilt" data-stack-card data-user-id="8461233">
        <div class="skeleton" style="height:80px"></div>
      </div>
    </div>

    <figure class="contribution-graph glass" data-reveal>
      <figcaption class="contribution-graph-label">Contribution activity</figcaption>
      <img
        src="${URLs.gitContributionGraph}"
        alt="GitHub contribution graph for vinaysomawat"
        loading="lazy"
        width="880"
        height="110"
      />
    </figure>

    <div class="repo-grid" id="repos">
      ${[0, 1, 2, 3].map(() => repoSkeleton())}
    </div>
  </div>
`;

export function mountGithub() {
  return mount("github", githubTemplate());
}

const repoStats = (item) => html`
  <div class="repo-stats">
    <span class="repo-stat"><span class="repo-lang-dot" aria-hidden="true"></span>${item.language || "Code"}</span>
    <span class="repo-stat"><i class="fa-regular fa-star" aria-hidden="true"></i>${item.stars ?? 0}</span>
    <span class="repo-stat"><i class="fa-solid fa-code-fork" aria-hidden="true"></i>${item.forks ?? 0}</span>
  </div>
`;

const repoCard = (item, index) => html`
  <a
    class="repo-card glass glass-interactive glow-card tilt"
    href="https://github.com/${item.author}/${item.name}"
    target="_blank"
    rel="noopener noreferrer"
    data-reveal
    style="--reveal-index: ${index}"
  >
    <div class="repo-card-head">
      <i class="fa-solid fa-code-branch" aria-hidden="true"></i>
      <h3>${item.name}</h3>
    </div>
    <p class="repo-description">${item.description || "No description provided."}</p>
    ${repoStats(item)}
  </a>
`;

export function repoListTemplate(items) {
  return html`${items.slice(0, 4).map((item, i) => repoCard(item, i))}`;
}
