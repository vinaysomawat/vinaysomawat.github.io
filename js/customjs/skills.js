import { default as skills } from '../../data/skills/skills.js';

function populateHTML(items, id) {
    var skillsTag = document.getElementById(id);
    for (var i = 0; i < items.length; i++) {
        var h3 = document.createElement("h3");
        h3.innerHTML = items[i].skillName;

        var divProgress = document.createElement("div");
        divProgress.className = "progress";

        var divProgressBar = document.createElement("div");
        divProgressBar.className = "progress-bar " + `${items[i].color}`;
        divProgressBar.style = items[i].percentage;
        divProgress.append(divProgressBar);

        var divProgressWrap = document.createElement("div");
        divProgressWrap.className = "progress-wrap";
        divProgressWrap.append(h3);
        divProgressWrap.append(divProgress);

        var divAnimateBox = document.createElement("div");
        divAnimateBox.className = "col-md-6 animate-box";
        divAnimateBox.append(divProgressWrap);

        skillsTag.append(divAnimateBox);
    }
}

populateHTML(skills, 'skills');