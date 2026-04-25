import { html } from "https://unpkg.com/lit-html?module";

export const bioTemplate = (items) => html` ${items.map(
    (bioItem) => html`<p class="bio-p">${bioItem}</p>`
  )}`;

export const skillsTemplate = (items) => html` ${items.map(
    (item) => html` <div class="col-md-3 animate-box">
      <div class="progress-wrap">
            <div class="profile-badge golden-badge">${item}</div>
      </div>
    </div>`
  )}`;

export const tagsTemplate = (tags) => html`
  <div class="tags-container">
    ${tags.map(
      (tag) => html`<div class="profile-badge brown-badge">${tag}</div>`
    )}
  </div>
`;

export const statsTemplate = (item) => html`
  <div class="stats-row">
    <div class="language-div">
      <span class="language-dot"></span>
      ${item.language}
    </div>
    <div class="stats-div">
      <img
        src="https://img.icons8.com/ios-filled/16/666666/star--v1.png"
        alt="Stars"
      />
      ${item.stars}
    </div>
    <div class="stats-div">
      <img
        src="https://img.icons8.com/ios-filled/16/666666/code-fork.png"
        alt="Forks"
      />
      ${item.forks}
    </div>
  </div>
`;

export const detailsTemplate = (details) => html`
  ${details.map(
    (detail) => html` <p class="timeline-text">&blacksquare; ${detail}</p> `
  )}
`;

const createCategoryBadges = (categories) => html`
  <div class="categories-div">
    ${categories.map(
      (category) =>
        html` <div class="profile-badge brown-badge">${category}</div> `
    )}
  </div>
`;

export const blogTemplate = (items) => html`
  ${items.slice(0, 3).map(
    (item) => html`
      <div class="blog-card">
        <div class="blog-content">
          <a href="${item.link}" target="_blank" class="blog-link">
            <p class="blog-heading">${item.title}</p>
            <p class="publish-date">${getBlogDate(item.pubDate)}</p>
            <p class="blog-description">
              ${item.content.replace(/<[^>]*>/g, "").trim()}
            </p>
            ${createCategoryBadges(item.categories)}
          </a>
        </div>
      </div>
    `
  )}
`;

export const repoTemplate = (items) => html`
  <div class="repo-wrapper">
    ${items.slice(0, 4).map(
      (item) => html`
        <div class="repo-card">
          <a
            href="https://github.com/${item.author}/${item.name}"
            target="_blank"
            class="repo-link"
          >
            <p class="repo-heading">${item.name}</p>
            <p class="repo-description">${item.description}</p>
            ${statsTemplate(item)}
          </a>
        </div>
      `
    )}
  </div>
`;

const adventureItemTemplate = (item) => html`
  <li class="adventure-item">
    <div class="adventure-item-main">
      <span class="adventure-name">${item.name}</span>
      <span class="adventure-state">
        <i class="fa-solid fa-location-dot"></i>
        ${item.state}
      </span>
    </div>
    <div class="adventure-meta-row">
      <span class="adventure-height">${item.height}</span>
      ${item.duration ? html`<span>${item.duration}</span>` : ""}
      ${item.level ? html`<span>${item.level}</span>` : ""}
    </div>
  </li>
`;

const adventureGroupTemplate = (group) => html`
  <article class="adventure-group adventure-${group.accent}">
    <div class="adventure-group-header">
      <span class="adventure-group-icon"><i class="${group.icon}"></i></span>
      <div>
        <h3>${group.title}</h3>
        <p>${group.items.length} adventures</p>
      </div>
    </div>
    <ul class="adventure-items">
      ${group.items.map((item) => adventureItemTemplate(item))}
    </ul>
  </article>
`;

export const adventureTemplate = (items) => html`
  <div class="adventure-summary">
    ${items.map((group) => adventureGroupTemplate(group))}
  </div>
`;

export const timelineTemplate = (items) => html`
  ${items.map(
    (item) => html`
      <article class="timeline-entry animate-box">
        <div class="timeline-entry-inner">
          <div class="timeline-icon color-2">
            <i class="fa fa-${item.icon}"></i>
          </div>
          <div class="timeline-label">
            <div class="exp-heading">
              <p class="blog-heading">${item.title}</p>
              <span class="publish-date">${item.duration}</span>
            </div>
            <span class="timeline-sublabel">${item.subtitle}</span>
            ${detailsTemplate(item.details)} ${tagsTemplate(item.tags)}
          </div>
        </div>
      </article>
    `
  )}
  <article class="timeline-entry begin animate-box">
    <div class="timeline-entry-inner">
      <div class="timeline-icon color-2"></div>
    </div>
  </article>
`;

export const linkTemplate = (data) => html`
  <li>
    <a href="${data.link || "#"}" @click="${data.func || null}">
      ${data.text}
    </a>
  </li>
`;

export const columnTemplate = (item) => html`
  <span class="col">
    <p class="col-title">${item.label}</p>
    <nav class="col-list">
      <ul>
        ${item.data.map((data) => linkTemplate(data))}
      </ul>
    </nav>
  </span>
`;

export const copyrightTemplate = (item) => html`
  <div class="copyright-text no-print">
    ${item.data.map((copyright) => html`<p>${copyright}</p>`)}
  </div>
`;

export const footerTemplate = (items) => html`
  ${items.map(
    (item) => html`
      ${item.label === "copyright-text"
        ? copyrightTemplate(item)
        : columnTemplate(item)}
    `
  )}
`;

const contactLinkTemplate = (item) => html`
  <li class="contact-item">
    <a
      href="${item.link}"
      target="_blank"
      rel="noopener noreferrer"
      class="contact-link"
      aria-label="${item.label}"
    >
      <span class="contact-icon"><i class="${item.icon}"></i></span>
      <span class="contact-label">${item.label}</span>
    </a>
  </li>
`;

export const contactLinksTemplate = (items) => html`
  <ul class="contact-list">
    ${items.map((item) => contactLinkTemplate(item))}
  </ul>
`;

function getBlogDate(publishDate) {
  const elapsed = Date.now() - Date.parse(publishDate);

  // Time conversions in milliseconds
  const msPerSecond = 1000;
  const msPerMinute = msPerSecond * 60;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  if (elapsed < msPerMinute) {
    const seconds = Math.floor(elapsed / msPerSecond);
    return `${seconds} seconds ago`;
  } else if (elapsed < msPerHour) {
    const minutes = Math.floor(elapsed / msPerMinute);
    return `${minutes} minutes ago`;
  } else if (elapsed < msPerDay) {
    const hours = Math.floor(elapsed / msPerHour);
    return `${hours} hours ago`;
  } else if (elapsed < msPerMonth) {
    const days = Math.floor(elapsed / msPerDay);
    return days == 1 ? `${days} day ago` : `${days} days ago`;
  } else if (elapsed < msPerYear) {
    const months = Math.floor(elapsed / msPerMonth);
    return months == 1 ? `${months} month ago` : `${months} months ago`;
  } else {
    const years = Math.floor(elapsed / msPerYear);
    return years == 1 ? `${years} year ago` : `${years} years ago`;
  }
}
