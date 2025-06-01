import { html, render } from "https://unpkg.com/lit@latest?module";

async function get(url) {
  const resp = await fetch(url);
  return resp.json();
}

function stackCardTemplate(user) {
  const {
    profile_image,
    link,
    reputation,
    badge_counts: { gold, silver, bronze },
    user_id
  } = user;

  const username = link.replace("https://", "").replace(`/users/${user_id}`, "");
  return html`
    <a href="${link}" target="_blank" class="profile-card">
      <div class="profile-header">
        <img
          class="profile-avatar"
          src="${profile_image}"
          alt="StackOverflow avatar"
        />
        <div>
          <div class="profile-badge badge-stack">StackOverflow</div>
          <p class="profile-url">${username}</p>
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
  const { avatar_url, public_repos, followers, html_url, following } = user;

  return html`
    <a href="${html_url}" target="_blank" class="profile-card">
      <div class="profile-header">
        <img class="profile-avatar" src="${avatar_url}" alt="GitHub avatar" />
        <div>
          <div class="profile-badge badge-github">GitHub</div>
          <p class="profile-url">${html_url}</p>
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

function leetcodeCardTemplate(data) {
  const { totalSolved, totalQuestions, acceptanceRate, ranking } = data;

  const leetUrl = "https://leetcode.com/vinaysomawat/";

  return html`
    <a href="${leetUrl}" target="_blank" class="profile-card">
      <div class="profile-header">
        <img
          class="profile-avatar"
          src="https://cdn.iconscout.com/icon/free/png-512/free-leetcode-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-4-pack-logos-icons-2944960.png?f=webp&w=512"
          alt="LeetCode avatar"
        />
        <div>
          <div class="profile-badge badge-leetcode">LeetCode</div>
          <p class="profile-url">${leetUrl}</p>
        </div>
      </div>
      <div class="profile-stats">
        ${[
          { label: "SOLVED", value: `${totalSolved}/${totalQuestions}` },
          { label: "RANK", value: `#${ranking}` },
          { label: "ACCEPTANCE", value: `${acceptanceRate}%` },
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
    const { items } = await get(
      `https://api.stackexchange.com/2.2/users/${userId}?site=stackoverflow`
    );
    render(stackCardTemplate(items[0]), el);
  });

  document.querySelectorAll(".github-card").forEach(async (el) => {
    const username = el.getAttribute("username");
    const data = await get(`https://api.github.com/users/${username}`);
    render(githubCardTemplate(data), el);
  });

  document.querySelectorAll(".leetcode-card").forEach(async (el) => {
    const username = el.getAttribute("username");
    const data = await get(
      `https://leetcode-stats-api.herokuapp.com/${username}`
    );
    render(leetcodeCardTemplate(data), el);
  });
});
