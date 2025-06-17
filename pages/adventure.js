import { trekking, passes } from "../user-data/data.js";
import { html, render } from "https://unpkg.com/lit-html?module";

function generateCard(item, iconColor, icon) {
  return html`
    <div class="trek-card animate-box" data-animate-effect="fadeInUp">
      <div class="trek-card-inner">
        <div class="trek-icon" style="color: ${iconColor}">
          <i class="fas fa-${icon}"></i>
        </div>
        <div class="trek-info">
          <div class="trek-name">
            ${item.name}
            <span class="trek-meta">
              <i class="fa-solid fa-location-dot"></i> ${item.state}
            </span>
          </div>
          <span class="trek-details">${item.details}</span>
        </div>
        <div class="trek-height">
          <span class="badge">${item.height}</span>
        </div>
      </div>
    </div>
  `;
}

function populateTrekking(items) {
  const trektag = document.getElementById("trekking");
  const trekkingTemplate = html`${items.map((item) =>
    generateCard(item, "#3a652d", "hiking")
  )}`;
  render(trekkingTemplate, trektag);
}

function populatePasses(items) {
  const passtag = document.getElementById("passes");
  const passesTemplate = html`${items.map((item) =>
    generateCard(item, "#000", "road")
  )}`;
  render(passesTemplate, passtag);
}

populateTrekking(trekking);
populatePasses(passes);
