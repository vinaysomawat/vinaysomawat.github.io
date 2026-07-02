import { html } from "https://unpkg.com/lit-html?module";
import { mount } from "../utils/dom.js";
import { timeAgo } from "../utils/fetch.js";

const blogSkeleton = () => html`
  <div class="blog-card glass" aria-hidden="true">
    <div class="skeleton" style="height:14px;width:40%;margin-bottom:14px"></div>
    <div class="skeleton" style="height:20px;width:85%;margin-bottom:10px"></div>
    <div class="skeleton" style="height:14px;width:95%;margin-bottom:6px"></div>
    <div class="skeleton" style="height:14px;width:70%"></div>
  </div>
`;

const blogTemplate = () => html`
  <div class="container">
    <div class="section-heading">
      <p class="section-eyebrow" data-reveal>Writing</p>
      <h2 class="section-title" id="blog-title" data-reveal>
        Latest <span class="gradient-text">Blog Posts</span>
      </h2>
      <p class="section-subtitle" data-reveal>
        Notes from
        <a class="underline-link" href="https://vinaysomawat.medium.com/" target="_blank" rel="noopener noreferrer">Medium</a>
        on frontend architecture and shipping at scale.
      </p>
    </div>
    <div class="blog-grid" id="blogs">
      ${[0, 1, 2].map(() => blogSkeleton())}
    </div>
  </div>
`;

export function mountBlog() {
  return mount("blog", blogTemplate());
}

const categoryChips = (categories = []) => html`
  <div class="blog-tags">
    ${categories.slice(0, 3).map((tag) => html`<span class="chip">${tag}</span>`)}
  </div>
`;

const blogCard = (item, index) => html`
  <a
    class="blog-card glass glass-interactive glow-card"
    href="${item.link}"
    target="_blank"
    rel="noopener noreferrer"
    data-reveal
    style="--reveal-index: ${index}"
  >
    <p class="blog-date">${timeAgo(item.pubDate)}</p>
    <h3 class="blog-title">${item.title}</h3>
    <p class="blog-excerpt">${item.content.replace(/<[^>]*>/g, "").trim()}</p>
    ${categoryChips(item.categories)}
  </a>
`;

export function blogListTemplate(items) {
  return html`${items.slice(0, 3).map((item, i) => blogCard(item, i))}`;
}
