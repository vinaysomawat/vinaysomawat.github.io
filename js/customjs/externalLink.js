import { default as externalLinks } from '../../data/externalLinks.js';

function populateHTML(items, id) {
    var externalLink = document.getElementById(id);
    for (var i = 0; i < items.length; i++) {
        var p = document.createElement("p");
        p.innerHTML = items[i].text;
        p.style = "color:" + items[i].color;

        var a = document.createElement("a");
        a.href = items[i].link;
        a.append(p);

        var divProgressWrap = document.createElement("div");
        divProgressWrap.className = "progress-wrap";
        divProgressWrap.append(a);

        var divAnimate = document.createElement("div");
        divAnimate.className = "col-md-6 animate-box";
        divAnimate.append(divProgressWrap);

        externalLink.append(divAnimate);
    }
}

populateHTML(externalLinks, 'externalLinks');