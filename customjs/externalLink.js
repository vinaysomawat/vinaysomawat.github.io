import { default as externalLinks } from '../data/links/links.js';

function populateHTML(items, id) {
    var externalLink = document.getElementById(id);

    for (var i = 0; i < items.length; i++) {
        var p = document.createElement("img");
        p.src = items[i].imgLink;
        p.style = 'width:60%';

        var a = document.createElement("a");
        a.href = items[i].link;
        a.append(p);

        var divAnimate = document.createElement("div");
        divAnimate.className = "col-image";
        divAnimate.append(a);

        externalLink.append(divAnimate);
    }
}

populateHTML(externalLinks, 'externalLinks');