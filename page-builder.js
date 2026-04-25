import {
  bio,
  skills,
  education,
  experience,
  footer,
  contact,
  adventures,
} from "./user-data/data.js";
import { render } from "https://unpkg.com/lit-html?module";
import {
  bioTemplate,
  skillsTemplate,
  blogTemplate,
  timelineTemplate,
  footerTemplate,
  contactLinksTemplate,
  repoTemplate,
  adventureTemplate,
} from "./js/templates.js";

import { URLs } from "./user-data/urls.js";

const { medium, gitConnected, gitRepo } = URLs;

async function fetchBlogsFromMedium(url) {
  try {
    const response = await fetch(url);
    const { items, feed } = await response.json();
    document.getElementById("profile-img").src = feed.image;
    buildContainer(items, "blogs", blogTemplate);
  } catch (error) {
    throw new Error(
      `Error in fetching the blogs from Medium profile: ${error}`
    );
  }
}

async function fetchReposFromGit(url) {
  try {
    const response = await fetch(url);
    const items = await response.json();
    buildContainer(items, "repos", repoTemplate);
  } catch (error) {
    throw new Error(`Error in fetching the blogs from repos: ${error}`);
  }
}

async function fetchGitConnectedData(url) {
  try {
    const response = await fetch(url);
    const { basics } = await response.json();
    mapBasicResponse(basics);
  } catch (error) {
    throw new Error(`Error in fetching the blogs from git connected: ${error}`);
  }
}

function mapBasicResponse(basics) {
  const {
    name,
    label,
    image,
    email,
    phone,
    url,
    summary,
    profiles,
    headline,
    blog,
    yearsOfExperience,
    username,
    locationAsString,
    region,
    karma,
    id,
    followers,
    following,
    picture,
    website,
  } = basics;

  window.parent.document.title = name;
}

function buildContainer(dataItems, dataId, template) {
  const containerData = document.getElementById(dataId);

  if (!containerData || !dataItems?.length) return;
  render(template(dataItems), containerData);
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
fetchGitConnectedData(gitConnected);
