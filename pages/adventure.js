import { html, render } from "https://unpkg.com/lit-html?module";

const trekking = [
  {
    name: "Kheerganga Trek",
    state: "Himachal Pradesh",
    height: "9,711 ft",
    details:
      "A beautiful trek in the Parvati Valley, known for its hot springs and scenic views.",

    icon: "hiking",
    duration: "2 Days",
    level: "Moderate",
  },
  {
    name: "Triund Trek",
    state: "Himachal Pradesh",
    height: "9,350 ft",
    details:
      "A popular trek near Dharamshala, offering stunning views of the Dhauladhar range.",

    icon: "hiking",
    duration: "2 Days",
    level: "Easy",
  },
  {
    name: "Kedarkantha Trek",
    state: "Uttarakhand",
    height: "12,500 ft",
    details:
      "A winter trek known for its snow-covered trails and breathtaking views.",

    icon: "hiking",
    duration: "6 Days",
    level: "Moderate",
  },
  {
    name: "Jalori Pass Trek",
    state: "Himachal Pradesh",
    height: "10,800 ft",
    details:
      "A scenic trek that offers panoramic views of the Himalayas and lush green valleys.",

    icon: "hiking",
    duration: "1 Day",
    level: "Easy",
  },
  {
    name: "Shri Mata Vaishno Devi Trek",
    state: "Jammu & Kashmir",
    height: "5,200 ft",
    details:
      "A pilgrimage trek to the famous Vaishno Devi temple, known for its spiritual significance.",

    icon: "hiking",
    duration: "2 Days",
    level: "Easy",
  },
];

const passes = [
  {
    name: "Baralacha La Pass",
    state: "Himachal Pradesh",
    height: "16,040 ft",
    details: [
      "A high mountain pass that connects Lahaul and Spiti valleys, known for its breathtaking landscapes.",
    ],
    icon: "hiking",
  },
  {
    name: "Nakeela Pass",
    state: "Himachal Pradesh",
    height: "15,547 ft",
    details: [
      "A high mountain pass on the Leh-Manali highway, known for its challenging terrain and stunning views.",
    ],
    icon: "hiking",
  },
  {
    name: "Lachung La Pass",
    state: "Ladakh",
    height: "16,616 ft",
    details: [
      "A high mountain pass that connects Leh and Nubra Valley, known for its stunning landscapes.",
    ],
    icon: "hiking",
  },
  {
    name: "Tanglang La Pass",
    state: "Ladakh",
    height: "17,480 ft",
    details: [
      "One of the highest passes in the world, offering breathtaking views of the Himalayas.",
    ],
    icon: "hiking",
  },
  {
    name: "Khardung La Pass",
    state: "Ladakh",
    height: "18,379 ft",
    details: [
      "One of the highest motorable roads in the world, offering stunning views of the surrounding mountains.",
    ],
    icon: "hiking",
  },
  {
    name: "Chang La Pass",
    state: "Ladakh",
    height: "17,590 ft",
    details: [
      "A high mountain pass on the road to Pangong Lake, known for its stunning views and challenging terrain.",
    ],
    icon: "hiking",
  },
  {
    name: "ZojiLa Pass",
    state: "Jammu & Kashmir",
    height: "11,575 ft",
    details: [
      "A high mountain pass that connects Srinagar and Leh, known for its challenging roads and breathtaking views.",
    ],
    icon: "hiking",
  },
];

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
