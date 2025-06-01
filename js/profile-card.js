import { html, render } from 'https://unpkg.com/lit@latest?module';

async function get(url) {
  const resp = await fetch(url);
  return resp.json();
}

function stackCardTemplate(user) {
  const {
    profile_image,
    website_url,
    link,
    display_name,
    reputation,
    user_id,
    badge_counts: { gold, silver, bronze },
  } = user;

  const profileLink = website_url || link;
  const username = link.replace("https://", "").replace(`/users/${user_id}`, "");

  return html`
    <a href="${profileLink}" target="_blank" class="profile-card">
      <div class="profile-header">
        <img class="profile-avatar" src="${profile_image}" alt="Profile image" />
        <div class="profile-info">
          <h3 class="profile-name">${display_name}</h3>
          <p class="profile-username">@${username}</p>
        </div>
      </div>
      <div class="profile-stats">
        ${[
          { label: "REPUTATION", value: reputation },
          { label: "GOLD", value: gold },
          { label: "SILVER", value: silver },
          { label: "BRONZE", value: bronze },
        ].map(
          (stat) => html`
            <div>
              <p class="stat-label">${stat.label}</p>
              <p class="stat-value">${stat.value}</p>
            </div>
          `
        )}
      </div>
    </a>
  `;
}

function githubCardTemplate(user) {
  const { name, avatar_url, public_repos, followers, html_url, following } = user;
  const username = html_url.replace("https://", "");

  return html`
    <a href="${html_url}" target="_blank" class="profile-card">
      <div class="profile-header">
        <img class="profile-avatar" src="${avatar_url}" alt="Profile image" />
        <div class="profile-info">
          <h3 class="profile-name">${name}</h3>
          <p class="profile-username">@${username}</p>
        </div>
      </div>
      <div class="profile-stats">
        ${[
          { label: "REPOSITORIES", value: public_repos },
          { label: "FOLLOWERS", value: followers },
          { label: "FOLLOWING", value: following },
        ].map(
          (stat) => html`
            <div>
              <p class="stat-label">${stat.label}</p>
              <p class="stat-value">${stat.value}</p>
            </div>
          `
        )}
      </div>
    </a>
  `;
}

window.addEventListener("DOMContentLoaded", async () => {
  document.querySelectorAll(".stack-card").forEach(async (el) => {
    const userId = el.getAttribute("user-id");
    const { items } = await get(`https://api.stackexchange.com/2.2/users/${userId}?site=stackoverflow`);
    render(stackCardTemplate(items[0]), el);
  });

  document.querySelectorAll(".github-card").forEach(async (el) => {
    const username = el.getAttribute("username");
    const data = await get(`https://api.github.com/users/${username}`);
    render(githubCardTemplate(data), el);
  });
});
