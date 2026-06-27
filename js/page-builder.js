import {
  adventures,
  bio,
  contact,
  education,
  experience,
  footer,
  skills,
} from "../user-data/data.js";
import { URLs } from "../user-data/urls.js";
import { fetchJson } from "./utils.js";
import { render } from "https://unpkg.com/lit-html?module";
import {
  adventureTemplate,
  bioTemplate,
  blogTemplate,
  contactLinksTemplate,
  footerTemplate,
  repoTemplate,
  skillsTemplate,
  timelineTemplate,
} from "./templates.js";

const { gitConnected, gitRepo, medium } = URLs;

function buildContainer(dataItems, dataId, template) {
  const container = document.getElementById(dataId);
  if (!container || !dataItems?.length) return;
  render(template(dataItems), container);
}

function showError(id, message) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = `<p class="fetch-error">${message}</p>`;
}

async function loadBlogs() {
  try {
    const { items, feed } = await fetchJson(medium, "Medium RSS");
    const img = document.getElementById("profile-img");
    if (img && feed?.image) img.src = feed.image;
    buildContainer(items, "blogs", blogTemplate);
  } catch {
    showError("blogs", "Could not load blog posts.");
  }
}

async function loadRepos() {
  try {
    const items = await fetchJson(gitRepo, "GitHub repos");
    buildContainer(items, "repos", repoTemplate);
  } catch {
    showError("repos", "Could not load repositories.");
  }
}

async function loadPageTitle() {
  try {
    const { basics } = await fetchJson(gitConnected, "gitconnected");
    if (basics?.name) document.title = basics.name;
  } catch {
    // non-critical — silent fail
  }
}

// Static sections — synchronous, no network
buildContainer(bio, "bio", bioTemplate);
buildContainer(skills, "skills", skillsTemplate);
buildContainer(experience, "experience", timelineTemplate);
buildContainer(education, "education", timelineTemplate);
buildContainer(adventures, "adventures", adventureTemplate);
buildContainer(footer, "footer", footerTemplate);
buildContainer(contact, "contact", contactLinksTemplate);

// Dynamic sections — parallel, each error-isolated
Promise.allSettled([loadBlogs(), loadRepos(), loadPageTitle()]);
