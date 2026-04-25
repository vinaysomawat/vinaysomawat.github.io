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

async function fetchJson(url, errorContext) {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    throw new Error(`${errorContext}: ${error}`);
  }
}

async function fetchBlogsFromMedium(url) {
  const { items, feed } = await fetchJson(
    url,
    "Error in fetching the blogs from Medium profile"
  );

  document.getElementById("profile-img").src = feed.image;
  buildContainer(items, "blogs", blogTemplate);
}

async function fetchReposFromGit(url) {
  const items = await fetchJson(url, "Error in fetching repositories");
  buildContainer(items, "repos", repoTemplate);
}

async function setPageTitleFromProfile(url) {
  const { basics } = await fetchJson(
    url,
    "Error in fetching git connected profile"
  );

  if (basics?.name) document.title = basics.name;
}

buildContainer(bio, "bio", bioTemplate);
buildContainer(skills, "skills", skillsTemplate);
buildContainer(experience, "experience", timelineTemplate);
buildContainer(education, "education", timelineTemplate);
buildContainer(adventures, "adventures", adventureTemplate);
buildContainer(footer, "footer", footerTemplate);
buildContainer(contact, "contact", contactLinksTemplate);

fetchBlogsFromMedium(medium);
fetchReposFromGit(gitRepo);
setPageTitleFromProfile(gitConnected);
