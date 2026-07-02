import { html, render } from "https://unpkg.com/lit-html?module";
import { fetchJson } from "../utils/fetch.js";

const errorCardTemplate = (platform) => html`
  <p class="fetch-error">Could not load ${platform} profile.</p>
`;

const statBlock = (stat) => html`
  <div>
    <p class="stat-label">${stat.label}</p>
    <p class="stat-value">${stat.value}</p>
  </div>
`;

const profileCardTemplate = ({ avatar, badgeClass, badgeLabel, url, urlLabel, stats }) => html`
  <a href="${url}" target="_blank" rel="noopener noreferrer" class="profile-card">
    <div class="profile-card-header">
      <img class="profile-avatar" src="${avatar}" alt="" loading="lazy" />
      <div>
        <span class="profile-badge ${badgeClass}">${badgeLabel}</span>
        <p class="profile-url">${urlLabel}</p>
      </div>
    </div>
    <div class="profile-stats-grid">${stats.map((stat) => statBlock(stat))}</div>
  </a>
`;

async function hydrateGithubCard(el) {
  const username = el.dataset.username;
  el.replaceChildren();
  try {
    const data = await fetchJson(`https://api.github.com/users/${username}`, "GitHub");
    render(
      profileCardTemplate({
        avatar: data.avatar_url,
        badgeClass: "badge-github",
        badgeLabel: "GitHub",
        url: data.html_url,
        urlLabel: data.html_url.replace("https://", ""),
        stats: [
          { label: "Repositories", value: data.public_repos },
          { label: "Followers", value: data.followers },
          { label: "Following", value: data.following },
        ],
      }),
      el
    );
  } catch {
    render(errorCardTemplate("GitHub"), el);
  }
}

async function hydrateStackCard(el) {
  const userId = el.dataset.userId;
  el.replaceChildren();
  try {
    const { items } = await fetchJson(
      `https://api.stackexchange.com/2.2/users/${userId}?site=stackoverflow`,
      "StackOverflow"
    );
    const user = items[0];
    const username = user.link.replace("https://", "").replace(`/users/${userId}`, "");
    render(
      profileCardTemplate({
        avatar: user.profile_image,
        badgeClass: "badge-stack",
        badgeLabel: "StackOverflow",
        url: user.link,
        urlLabel: username,
        stats: [
          { label: "Reputation", value: user.reputation },
          { label: "Gold", value: user.badge_counts.gold },
          { label: "Silver", value: user.badge_counts.silver },
          { label: "Bronze", value: user.badge_counts.bronze },
        ],
      }),
      el
    );
  } catch {
    render(errorCardTemplate("StackOverflow"), el);
  }
}

export function initProfileCards() {
  document.querySelectorAll("[data-github-card]").forEach(hydrateGithubCard);
  document.querySelectorAll("[data-stack-card]").forEach(hydrateStackCard);
}
