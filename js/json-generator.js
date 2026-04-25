import {
  adventures,
  bio,
  contact,
  education,
  experience,
  footer,
  skills,
} from "../user-data/data.js";

const fields = {
  adventure: document.getElementById("adventureFields"),
  bio: document.getElementById("bioFields"),
  contact: document.getElementById("contactFields"),
  education: document.getElementById("educationFields"),
  experience: document.getElementById("experienceFields"),
  footer: document.getElementById("footerFields"),
};

const controls = {
  addAdventureGroup: document.getElementById("addAdventureGroup"),
  addBioLine: document.getElementById("addBioLine"),
  addContact: document.getElementById("addContact"),
  addEducation: document.getElementById("addEducation"),
  addExperience: document.getElementById("addExperience"),
  addFooter: document.getElementById("addFooter"),
  addSkill: document.getElementById("addSkill"),
  copyJson: document.getElementById("copyJson"),
  newSkill: document.getElementById("newSkill"),
  output: document.getElementById("output"),
  resumeForm: document.getElementById("resumeForm"),
  skillsSelect: document.getElementById("skillsSelect"),
};

const skillOptions = createSkillOptions();

function createSkillOptions() {
  const tagValues = [...experience, ...education].flatMap(
    (item) => item.tags || []
  );
  return [...new Set([...skills, ...tagValues])].sort();
}

function optionTemplate(selectedValues = []) {
  return skillOptions
    .map(
      (skill) =>
        `<option value="${escapeAttribute(skill)}"${
          selectedValues.includes(skill) ? " selected" : ""
        }>${escapeHtml(skill)}</option>`
    )
    .join("");
}

function escapeAttribute(value = "") {
  return String(value).replace(/"/g, "&quot;");
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function getValue(section, name) {
  return section.querySelector(`[name=${name}]`).value.trim();
}

function getSelectedValues(section, name) {
  return Array.from(section.querySelector(`[name=${name}]`).selectedOptions).map(
    (option) => option.value
  );
}

function commaList(value) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function addSkillOption(skill) {
  if (!skill || skillOptions.includes(skill)) return;
  skillOptions.push(skill);
  skillOptions.sort();
  populateSkills();
}

function populateSkills() {
  const selectedValues = Array.from(controls.skillsSelect.selectedOptions).map(
    (option) => option.value
  );
  controls.skillsSelect.innerHTML = optionTemplate(selectedValues);
}

function addNewSkill() {
  const newSkill = controls.newSkill.value.trim();
  addSkillOption(newSkill);
  controls.newSkill.value = "";
}

function addBioLine(value = "") {
  const textarea = document.createElement("textarea");
  textarea.name = "bio";
  textarea.value = value;
  fields.bio.appendChild(textarea);
}

function addExperience(item = {}) {
  const section = document.createElement("div");
  section.className = "section";
  section.innerHTML = `
    <input type="text" placeholder="Title" name="exp_title" value="${escapeAttribute(
      item.title
    )}">
    <input type="text" placeholder="Duration" name="exp_duration" value="${escapeAttribute(
      item.duration
    )}">
    <input type="text" placeholder="Subtitle" name="exp_subtitle" value="${escapeAttribute(
      item.subtitle
    )}">
    <textarea placeholder="Details (comma separated)" name="exp_details">${escapeHtml(
      (item.details || []).join(", ")
    )}</textarea>
    <select name="exp_tags" multiple size="5">${optionTemplate(
      item.tags || []
    )}</select>
    <input type="text" placeholder="Icon" name="exp_icon" value="${escapeAttribute(
      item.icon
    )}">
  `;
  fields.experience.appendChild(section);
}

function addEducation(item = {}) {
  const section = document.createElement("div");
  section.className = "section";
  section.innerHTML = `
    <input type="text" placeholder="Title" name="edu_title" value="${escapeAttribute(
      item.title
    )}">
    <input type="text" placeholder="Duration" name="edu_duration" value="${escapeAttribute(
      item.duration
    )}">
    <input type="text" placeholder="Subtitle" name="edu_subtitle" value="${escapeAttribute(
      item.subtitle
    )}">
    <textarea placeholder="Details (comma separated)" name="edu_details">${escapeHtml(
      (item.details || []).join(", ")
    )}</textarea>
    <select name="edu_tags" multiple size="5">${optionTemplate(
      item.tags || []
    )}</select>
    <input type="text" placeholder="Icon" name="edu_icon" value="${escapeAttribute(
      item.icon
    )}">
  `;
  fields.education.appendChild(section);
}

function addAdventureGroup(group = {}) {
  const section = document.createElement("div");
  section.className = "section";
  section.innerHTML = `
    <input type="text" placeholder="Group title" name="adventure_title" value="${escapeAttribute(
      group.title
    )}">
    <input type="text" placeholder="Font Awesome icon class" name="adventure_icon" value="${escapeAttribute(
      group.icon
    )}">
    <input type="text" placeholder="Accent (green or gold)" name="adventure_accent" value="${escapeAttribute(
      group.accent
    )}">
    <div class="adventure-items-fields"></div>
    <button type="button" class="btn btn-default" data-action="add-adventure-item">
      <i class="fa fa-plus"></i> Add Adventure Item
    </button>
  `;

  section
    .querySelector("[data-action=add-adventure-item]")
    .addEventListener("click", () => addAdventureItem(section));

  fields.adventure.appendChild(section);
  (group.items || []).forEach((item) => addAdventureItem(section, item));
}

function addAdventureItem(groupSection, item = {}) {
  const container = groupSection.querySelector(".adventure-items-fields");
  const section = document.createElement("div");
  section.className = "nested-section";
  section.innerHTML = `
    <input type="text" placeholder="Name" name="adventure_item_name" value="${escapeAttribute(
      item.name
    )}">
    <input type="text" placeholder="State" name="adventure_item_state" value="${escapeAttribute(
      item.state
    )}">
    <input type="text" placeholder="Height" name="adventure_item_height" value="${escapeAttribute(
      item.height
    )}">
    <input type="text" placeholder="Duration (optional)" name="adventure_item_duration" value="${escapeAttribute(
      item.duration
    )}">
    <input type="text" placeholder="Level (optional)" name="adventure_item_level" value="${escapeAttribute(
      item.level
    )}">
  `;
  container.appendChild(section);
}

function addContact(item = {}) {
  const section = document.createElement("div");
  section.className = "section";
  section.innerHTML = `
    <input type="text" placeholder="Label" name="contact_label" value="${escapeAttribute(
      item.label
    )}">
    <input type="text" placeholder="Link" name="contact_link" value="${escapeAttribute(
      item.link
    )}">
    <input type="text" placeholder="Icon" name="contact_icon" value="${escapeAttribute(
      item.icon
    )}">
  `;
  fields.contact.appendChild(section);
}

function addFooter(item = {}) {
  const section = document.createElement("div");
  section.className = "section";
  section.innerHTML = `
    <input type="text" placeholder="Label" name="footer_label" value="${escapeAttribute(
      item.label
    )}">
    <textarea placeholder="Footer items (text|link, one per line)" name="footer_data">${escapeHtml(
      (item.data || [])
        .map((entry) =>
          typeof entry === "string" ? entry : `${entry.text}|${entry.link || ""}`
        )
        .join("\n")
    )}</textarea>
  `;
  fields.footer.appendChild(section);
}

function collectExperience(section) {
  return {
    title: getValue(section, "exp_title"),
    duration: getValue(section, "exp_duration"),
    subtitle: getValue(section, "exp_subtitle"),
    details: commaList(getValue(section, "exp_details")),
    tags: getSelectedValues(section, "exp_tags"),
    icon: getValue(section, "exp_icon"),
  };
}

function collectEducation(section) {
  return {
    title: getValue(section, "edu_title"),
    duration: getValue(section, "edu_duration"),
    subtitle: getValue(section, "edu_subtitle"),
    details: commaList(getValue(section, "edu_details")),
    tags: getSelectedValues(section, "edu_tags"),
    icon: getValue(section, "edu_icon"),
  };
}

function collectAdventureItem(section) {
  const item = {
    name: getValue(section, "adventure_item_name"),
    state: getValue(section, "adventure_item_state"),
    height: getValue(section, "adventure_item_height"),
  };
  const duration = getValue(section, "adventure_item_duration");
  const level = getValue(section, "adventure_item_level");
  if (duration) item.duration = duration;
  if (level) item.level = level;
  return item;
}

function collectAdventureGroup(section) {
  return {
    title: getValue(section, "adventure_title"),
    icon: getValue(section, "adventure_icon"),
    accent: getValue(section, "adventure_accent"),
    items: Array.from(section.querySelectorAll(".nested-section")).map(
      collectAdventureItem
    ),
  };
}

function collectContact(section) {
  return {
    label: getValue(section, "contact_label"),
    link: getValue(section, "contact_link"),
    icon: getValue(section, "contact_icon"),
  };
}

function collectFooter(section) {
  return {
    label: getValue(section, "footer_label"),
    data: getValue(section, "footer_data")
      .split("\n")
      .map((line) => {
        const [text, link] = line.split("|").map((value) => value.trim());
        return link ? { text, link } : text;
      })
      .filter(Boolean),
  };
}

function generateJson(event) {
  event.preventDefault();

  const json = {
    bio: Array.from(fields.bio.querySelectorAll("textarea"))
      .map((field) => field.value.trim())
      .filter(Boolean),
    skills: Array.from(controls.skillsSelect.selectedOptions).map(
      (option) => option.value
    ),
    experience: Array.from(fields.experience.querySelectorAll(".section")).map(
      collectExperience
    ),
    education: Array.from(fields.education.querySelectorAll(".section")).map(
      collectEducation
    ),
    adventures: Array.from(fields.adventure.querySelectorAll(":scope > .section"))
      .map(collectAdventureGroup),
    contact: Array.from(fields.contact.querySelectorAll(".section")).map(
      collectContact
    ),
    footer: Array.from(fields.footer.querySelectorAll(".section")).map(
      collectFooter
    ),
  };

  controls.output.textContent = JSON.stringify(json, null, 2);
}

function copyJson() {
  navigator.clipboard.writeText(controls.output.textContent).then(() => {
    alert("JSON copied! Add this to your portfolio website -> data.js.");
  });
}

function prefillForm() {
  fields.bio.innerHTML = "";
  bio.forEach(addBioLine);

  populateSkills();
  Array.from(controls.skillsSelect.options).forEach((option) => {
    option.selected = skills.includes(option.value);
  });

  experience.forEach(addExperience);
  education.forEach(addEducation);
  adventures.forEach(addAdventureGroup);
  contact.forEach(addContact);
  footer.forEach(addFooter);
}

function bindEvents() {
  controls.addAdventureGroup.addEventListener("click", () => addAdventureGroup());
  controls.addBioLine.addEventListener("click", () => addBioLine());
  controls.addContact.addEventListener("click", () => addContact());
  controls.addEducation.addEventListener("click", () => addEducation());
  controls.addExperience.addEventListener("click", () => addExperience());
  controls.addFooter.addEventListener("click", () => addFooter());
  controls.addSkill.addEventListener("click", addNewSkill);
  controls.copyJson.addEventListener("click", copyJson);
  controls.resumeForm.addEventListener("submit", generateJson);
}

prefillForm();
bindEvents();
