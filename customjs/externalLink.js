import { default as externalLinks } from '../data/links/links.js';

function populateHTML(items, id) {
    var externalLink = document.getElementById(id);

    for (var i = 0; i < items.length; i++) {
        var img = document.createElement("img");
        img.src = items[i].imgLink;
        img.style = 'width:60%';
        img.alt = items[i].alt;

        var a = document.createElement("a");
        a.href = items[i].link;
        a.append(img);

        var divAnimate = document.createElement("div");
        divAnimate.className = "col-image";
        divAnimate.append(a);

        externalLink.append(divAnimate);
    }
}

populateHTML(externalLinks, 'externalLinks');