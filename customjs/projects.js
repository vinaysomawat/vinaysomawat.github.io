import { default as webProjects } from '../data/projects/webprojects.js';
import { default as softwareProjects } from '../data/projects/softwareprojects.js';
import { default as androidProjects } from '../data/projects/androidprojects.js';
import { default as freelanceProjects } from '../data/projects/freelanceprojects.js';

function populateHTML(items, id) {
    var projectdesign = document.getElementById(id);
    for (var i = 0; i < items.length; i++) {
        var h4 = document.createElement("h4");
        h4.className = "project-heading";
        h4.innerHTML = items[i].projectName;
    
        var a = document.createElement("a");
        a.href = items[i].preview;
        a.append(h4);
        
        var img = document.createElement("img");
        img.src = items[i].image;
        img.className = 'img-fluid';
        
        var divResumeContentLeft = document.createElement("div");
        divResumeContentLeft.className = 'resume-content';
        divResumeContentLeft.id = 'left-div';
        divResumeContentLeft.append(img);
    
        var divResumeContentRight = document.createElement("div");
        divResumeContentRight.className = 'resume-content';
        divResumeContentRight.id = 'right-div';
    
        var p = document.createElement("p");
        p.className = "project-description";
        p.innerHTML = items[i].summary;
    
        var divSpan = document.createElement("div");
        for (var k = 0; k < items[i].techStack.length; k++) {
            var span = document.createElement("span");
            span.className = "badge badge-secondary";
            span.innerHTML = items[i].techStack[k];
            divSpan.append(span);
        }
    
        var divSubHeading = document.createElement("div");
        divSubHeading.className = 'sub-heading';
        divSubHeading.append(p);
        divSubHeading.append(divSpan);
        divResumeContentRight.append(divSubHeading);
        
        var divResumeItem = document.createElement("div");
        divResumeItem.className = 'resume-item';
        divResumeItem.append(divResumeContentLeft);
        divResumeItem.append(divResumeContentRight);
        a.append(divResumeItem);
    
        var divProjectCard = document.createElement("div");
        divProjectCard.className = "project-card";
        divProjectCard.append(a);
        
        var li = document.createElement("li");
        li.append(divProjectCard);
        projectdesign.append(li);
    }
}

populateHTML(webProjects, 'web-projects');
populateHTML(softwareProjects, 'software-projects');
populateHTML(androidProjects, 'android-projects');
populateHTML(freelanceProjects, 'freelance-projects');
