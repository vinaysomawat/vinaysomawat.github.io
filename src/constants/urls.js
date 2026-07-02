const githubUsername = "vinaysomawat";
const mediumUsername = "vinaysomawat";

const createMediumURL = (username) => `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`;
const createGitConnectedURL = (username) => `https://gitconnected.com/v1/portfolio/${username}`;
const gitRepos = (username) => `https://pinned.berrysauce.dev/get/${username}`;
const gitContributionGraph = (username) => `https://ghchart.rshah.org/4F8CFF/${username}`;

export const URLs = {
  medium: createMediumURL(mediumUsername),
  gitConnected: createGitConnectedURL(githubUsername),
  gitRepo: gitRepos(githubUsername),
  gitContributionGraph: gitContributionGraph(githubUsername),
  githubProfile: `https://github.com/${githubUsername}`,
};

// TODO: replace with a real form-submission endpoint (e.g. Formspree/EmailJS) to activate the contact form.
export const CONTACT_FORM_ENDPOINT = "";

export const RESUME_URL = "./assets/resume.pdf"; // TODO: add resume.pdf to /assets
